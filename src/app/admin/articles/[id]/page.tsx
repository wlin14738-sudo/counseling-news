import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { formatDate } from "@/lib/utils";
import EditArticle from "@/components/EditArticle";

export const metadata: Metadata = { title: "编辑文章" };

export default async function AdminEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const article = await prisma.article.findUnique({
    where: { id: Number(id) },
    include: { source: { select: { name: true, nameZh: true } } },
  });
  if (!article) notFound();

  const statusLabel =
    article.status === "published"
      ? "已发布"
      : article.status === "rejected"
        ? "已拒绝"
        : "草稿";

  return (
    <div className="container-page max-w-3xl space-y-6">
      <Link href="/admin" className="inline-block text-sm text-brand-600 hover:underline">
        ← 返回审核队列
      </Link>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">编辑文章</h1>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
          {statusLabel}
        </span>
      </div>
      <p className="text-sm text-slate-500">
        来源：{article.source.nameZh || article.source.name} · 抓取于{" "}
        {formatDate(article.fetchedAt)}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-brand-600 hover:underline"
      >
        查看原文 ↗
      </a>
      <EditArticle
        article={{
          id: article.id,
          title: article.title,
          titleZh: article.titleZh,
          summary: article.summary,
          summaryZh: article.summaryZh,
          author: article.author,
          category: article.category,
          keywords: article.keywords,
          status: article.status,
        }}
      />
    </div>
  );
}
