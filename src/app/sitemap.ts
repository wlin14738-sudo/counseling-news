import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_URL;
  const [articles, topics] = await Promise.all([
    prisma.article.findMany({
      where: { status: "published" },
      select: { id: true, publishedAt: true },
      orderBy: { publishedAt: "desc" },
    }),
    prisma.topic.findMany({
      where: { status: "published" },
      select: { slug: true, publishedAt: true },
      orderBy: { publishedAt: "desc" },
    }),
  ]);

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "always", priority: 1 },
    { url: `${base}/en/`, lastModified: new Date(), changeFrequency: "always", priority: 0.9 },
    { url: `${base}/topics`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/en/topics`, lastModified: new Date(), changeFrequency: "daily", priority: 0.6 },
  ];

  for (const a of articles) {
    const lm = a.publishedAt;
    entries.push({ url: `${base}/articles/${a.id}`, lastModified: lm, changeFrequency: "weekly", priority: 0.6 });
    entries.push({ url: `${base}/en/articles/${a.id}`, lastModified: lm, changeFrequency: "weekly", priority: 0.5 });
  }
  for (const t of topics) {
    const lm = t.publishedAt;
    entries.push({ url: `${base}/topics/${t.slug}`, lastModified: lm, changeFrequency: "monthly", priority: 0.6 });
    entries.push({ url: `${base}/en/topics/${t.slug}`, lastModified: lm, changeFrequency: "monthly", priority: 0.5 });
  }

  return entries;
}
