import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fetchSourceFeed } from "@/lib/rss";
import { summarizeArticle } from "@/lib/ai";

function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  // Allow local/manual runs when no CRON_SECRET is configured (dev only).
  if (!secret) return true;
  const auth = req.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sources = await prisma.source.findMany({ where: { enabled: true } });
  let fetched = 0;
  let created = 0;
  let processed = 0;
  let failedSources = 0;
  let skippedByQuota = 0;

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

      // Daily quota: cap how many new items this source adds per day.
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

      const urls = items.map((i) => i.link);
      const existing = await prisma.article.findMany({
        where: { url: { in: urls } },
        select: { url: true },
      });
      const existingSet = new Set(existing.map((e) => e.url));

      let added = 0;
      for (const item of items) {
        if (added >= remaining) break;
        if (existingSet.has(item.link)) continue;

        const article = await prisma.article.create({
          data: {
            sourceId: src.id,
            url: item.link,
            title: item.title,
            summary: item.summary,
            content: item.content,
            author: item.author,
            category: src.defaultCategory || "",
            publishedAt: item.publishedAt,
            status: "draft",
          },
        });
        created += 1;
        added += 1;

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
            aiConfidence: ai.confidence,
          },
        });
        processed += 1;
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

  return NextResponse.json({
    ok: true,
    sources: sources.length,
    fetched,
    created,
    processed,
    failedSources,
    skippedByQuota,
  });
}
