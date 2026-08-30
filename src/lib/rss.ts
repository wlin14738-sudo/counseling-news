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
  const parser = new Parser({
    timeout: 15000,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; CounselingNewsBot/1.0; +https://example.com)",
      Accept: "application/rss+xml, application/atom+xml, application/xml;q=0.9, */*;q=0.8",
    },
  });

  const feed = await parser.parseURL(source.rssUrl);
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
