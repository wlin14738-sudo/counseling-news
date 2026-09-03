import Parser from "rss-parser";
import type { Source } from "@prisma/client";

export type RssItem = {
  title: string;
  link: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: Date;
};

export async function fetchSourceFeed(source: Source): Promise<RssItem[]> {
  const parser = new Parser();

  // Fetch the raw feed ourselves and parse the decoded text. This handles
  // gzip and CJK encodings more reliably than rss-parser.parseURL (e.g. CNKI).
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  let xml: string;
  try {
    const res = await fetch(source.rssUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; CounselingNewsBot/1.0; +https://example.com)",
        Accept: "application/rss+xml, application/atom+xml, application/xml;q=0.9, */*;q=0.8",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xml = await res.text();
  } catch (e) {
    if ((e as Error).name === "AbortError") {
      throw new Error("Feed timed out");
    }
    throw new Error(`Failed to fetch feed: ${(e as Error).message}`);
  } finally {
    clearTimeout(timeout);
  }

  const feed = await parser.parseString(xml);
  const items: RssItem[] = [];

  for (const item of feed.items) {
    const link = item.link ?? item.guid;
    if (!item.title || !link) continue;

    const raw = item as Record<string, unknown>;
    const summary =
      String(raw.contentSnippet || raw.summary || "") || "";
    const content = String(raw.content || raw["content:encoded"] || "") || summary;
    const author = String(raw.creator || raw.author || "") || source.name;
    const publishedAt = raw.isoDate ? new Date(String(raw.isoDate)) : new Date();

    items.push({
      title: item.title.trim(),
      link,
      summary: summary.trim(),
      content: content.trim(),
      author,
      publishedAt: Number.isNaN(publishedAt.getTime()) ? new Date() : publishedAt,
    });
  }

  return items;
}
