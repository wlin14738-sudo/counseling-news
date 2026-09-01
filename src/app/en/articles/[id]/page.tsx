import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import ArticleDetailView from "@/components/ArticleDetailView";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await prisma.article.findUnique({
    where: { id: Number(id) },
    select: { titleZh: true, title: true, summaryZh: true, summary: true },
  });
  if (!article) return {};
  return buildMetadata({
    lang: "en",
    title: article.title || article.titleZh,
    description: article.summary || article.summaryZh,
    path: `/articles/${id}`,
    type: "article",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ArticleDetailView lang="en" id={id} />;
}
