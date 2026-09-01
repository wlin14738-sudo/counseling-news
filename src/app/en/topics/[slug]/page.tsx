import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import TopicDetailView from "@/components/TopicDetailView";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = await prisma.topic.findUnique({
    where: { slug },
    select: { titleZh: true, title: true, summaryZh: true, summary: true },
  });
  if (!topic) return {};
  return buildMetadata({
    lang: "en",
    title: topic.title || topic.titleZh,
    description: topic.summary || topic.summaryZh,
    path: `/topics/${slug}`,
    type: "article",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TopicDetailView lang="en" slug={slug} />;
}
