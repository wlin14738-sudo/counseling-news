import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { categoryLabel } from "@/lib/categories";
import { schoolLabel } from "@/lib/schools";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await prisma.article.findUnique({
    where: { id: Number(id) },
    select: { titleZh: true, title: true, summaryZh: true },
  });
  if (!article) return {};
  return {
    title: article.titleZh || article.title,
    description: article.summaryZh,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await prisma.article.findUnique({
    where: { id: Number(id) },
    include: { source: { select: { name: true, nameZh: true } } },
  });

  if (!article || article.status !== "published") {
    notFound();
  }

  // Increment read count (best-effort).
  prisma.article
    .update({ where: { id: article.id }, data: { readCount: { increment: 1 } } })
    .catch(() => {});

  const hasEn = article.titleZh && article.title !== article.titleZh;

  return (
    <div className="container-page max-w-3xl">
      <Link href="/" className="mb-6 inline-block text-sm text-brand-600 hover:underline">
        ← 返回列表
      </Link>
      <article className="card p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          {article.category && (
            <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
              {categoryLabel(article.category)}
            </span>
          )}
          {article.school && (
            <span className="rounded-full bg-violet-50 px-3 py-1 font-medium text-violet-700">
              {schoolLabel(article.school)}
            </span>
          )}
          <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
            {article.source.nameZh || article.source.name}
          </span>
          <span>{formatDate(article.publishedAt)}</span>
          {article.author && <span>作者：{article.author}</span>}
          <span>{article.readCount + 1} 次阅读</span>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-slate-900">
          {article.titleZh || article.title}
        </h1>

        <p>{article.summaryZh || article.summary}</p>

        {article.keywords && (
          <div className="mt-5 flex flex-wrap gap-2">
            {article.keywords
              .split(/[,，、;；]/)
              .map((k) => k.trim())
              .filter(Boolean)
              .map((k, i) => (
                <span
                  key={i}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
                >
                  {k}
                </span>
              ))}
          </div>
        )}

        {hasEn && (
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="mb-2 text-sm font-semibold text-slate-500">English Original</h3>
            <p className="text-sm font-semibold text-slate-800">{article.title}</p>
            {article.summary && (
              <p className="mt-2 text-sm text-slate-600">{article.summary}</p>
            )}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-brand-600 hover:underline"
            >
              查看原文 ↗
            </a>
          </div>
        )}
      </article>
    </div>
  );
}
