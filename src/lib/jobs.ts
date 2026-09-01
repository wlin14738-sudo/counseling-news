import { prisma } from "./prisma";
import { fetchSourceFeed } from "./rss";
import { summarizeArticle } from "./ai";
import { sendDailyDigest } from "./email";
import { normalizeUrl, titlesSimilar } from "./dedup";

// Shared job logic, used both by the cron API routes and the in-app scheduler.
export async function performFetch() {
  const sources = await prisma.source.findMany({ where: { enabled: true } });
  // Recent titles used for cross-source duplicate detection.
  const recent = await prisma.article.findMany({
    where: { createdAt: { gte: new Date(Date.now() - 90 * 24 * 3600 * 1000) } },
    select: { title: true },
  });
  const titlePool = recent.map((a) => a.title);
  let fetched = 0;
  let created = 0;
  let processed = 0;
  let failedSources = 0;
  let skippedByQuota = 0;
  let skippedDuplicates = 0;

  for (const src of sources) {
    try {
      const items = await fetchSourceFeed(src);
      fetched += items.length;

      if (items.length === 0) {
        await prisma.source.update({
          where: { id: src.id },
          data: { lastFetchedAt: new Date() },
        });
        continue;
      }

      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      const todayCount = await prisma.article.count({
        where: { sourceId: src.id, fetchedAt: { gte: startOfDay } },
      });
      const quota = src.dailyLimit ?? 10;
      const remaining = Math.max(0, quota - todayCount);
      if (remaining === 0) {
        skippedByQuota += 1;
        await prisma.source.update({
          where: { id: src.id },
          data: { lastFetchedAt: new Date() },
        });
        continue;
      }

      const normalized = items.map((i) => ({ ...i, link: normalizeUrl(i.link) }));
      const urls = normalized.map((i) => i.link);
      const existing = await prisma.article.findMany({
        where: { url: { in: urls } },
        select: { url: true },
      });
      const existingSet = new Set(existing.map((e) => e.url));

      let added = 0;
      for (const item of normalized) {
        if (added >= remaining) break;
        if (existingSet.has(item.link)) continue;
        // Skip near-duplicate titles (same story from a different source etc.).
        if (titlePool.some((t) => titlesSimilar(item.title, t) >= 0.8)) {
          skippedDuplicates += 1;
          continue;
        }

        const article = await prisma.article.create({
          data: {
            sourceId: src.id,
            url: item.link,
            title: item.title,
            summary: item.summary,
            content: item.content,
            author: item.author,
            category: src.defaultCategory || "",
            school: src.defaultSchool || "",
            publishedAt: item.publishedAt,
            status: "draft",
          },
        });
        created += 1;
        added += 1;

        // When TRANSLATE_ON_FETCH=false, skip translation so fetching is fast.
        if (process.env.TRANSLATE_ON_FETCH !== "false") {
          const ai = await summarizeArticle({
            title: item.title,
            summary: item.summary,
            content: item.content,
            author: item.author,
            lang: src.lang === "zh" ? "zh" : "en",
          });
          await prisma.article.update({
            where: { id: article.id },
            data: {
              titleZh: ai.titleZh,
              summaryZh: ai.summaryZh,
              keywords: ai.keywords,
              school: ai.school || src.defaultSchool || "",
              aiConfidence: ai.confidence,
            },
          });
          processed += 1;
        }
        titlePool.push(item.title);
      }

      await prisma.source.update({
        where: { id: src.id },
        data: { lastFetchedAt: new Date() },
      });
    } catch (err) {
      failedSources += 1;
      console.error(`[fetch] source "${src.name}" failed:`, (err as Error).message);
    }
  }

  return {
    ok: true,
    sources: sources.length,
    fetched,
    created,
    processed,
    failedSources,
    skippedByQuota,
    skippedDuplicates,
  };
}

export async function performDigest() {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const articles = await prisma.article.findMany({
    where: { status: "published", publishedAt: { gte: since } },
    orderBy: { publishedAt: "desc" },
    select: { id: true, title: true, titleZh: true, summaryZh: true, keywords: true, school: true },
  });

  const subscribers = await prisma.subscriber.findMany({
    where: { confirmed: true },
    select: { email: true, token: true },
  });

  const result = await sendDailyDigest(subscribers, articles);
  return {
    ok: true,
    articles: articles.length,
    subscribers: subscribers.length,
    ...result,
  };
}

// Auto-review: each run publishes up to `limit` eligible drafts that already
// have complete publishing info (Chinese title + category + a summary).
// Eligible ones are prioritized by AI confidence, then by fetch time.
export async function performAutoReview(limit: number) {
  const eligible = await prisma.article.findMany({
    where: {
      status: "draft",
      titleZh: { not: "" },
      category: { not: "" },
      OR: [{ summaryZh: { not: "" } }, { summary: { not: "" } }],
    },
    orderBy: [{ aiConfidence: "desc" }, { fetchedAt: "desc" }],
    take: limit,
    select: { id: true },
  });

  const ids = eligible.map((a) => a.id);
  if (ids.length === 0) {
    return { reviewed: 0, published: 0 };
  }

  const res = await prisma.article.updateMany({
    where: { id: { in: ids } },
    data: { status: "published", publishedAt: new Date() },
  });
  return { reviewed: ids.length, published: res.count };
}
