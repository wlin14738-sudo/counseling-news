import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { categoryLabel, categoryEn } from "@/lib/categories";
import { schoolLabel, schoolEn } from "@/lib/schools";
import { localizeHref, PAGE_TEXT, type Locale } from "@/lib/i18n";
import { absUrl } from "@/lib/site";

export default async function ArticleDetailView({
  lang,
  id,
}: {
  lang: Locale;
  id: string;
}) {
  const article = await prisma.article.findUnique({
    where: { id: Number(id) },
    include: { source: { select: { name: true, nameZh: true } } },
  });

  if (!article || article.status !== "published") notFound();

  prisma.article
    .update({ where: { id: article.id }, data: { readCount: { increment: 1 } } })
    .catch(() => {});

  const t = PAGE_TEXT[lang];
  const basePath = `/articles/${article.id}`;
  const backHref = localizeHref(lang, "/");
  const homePath = localizeHref(lang, "/");
  const zh = lang === "zh";
  const mainTitle = zh ? article.titleZh || article.title : article.title || article.titleZh;
  const mainSummary = zh ? article.summaryZh || article.summary : article.summary || article.summaryZh;
  const mainContent = zh ? article.contentZh || article.summaryZh || article.summary : article.content || article.summary || article.summaryZh;
  const sourceLabel = zh ? article.source.nameZh || article.source.name : article.source.name;
  const catLabel = zh ? categoryLabel(article.category) : categoryEn(article.category);
  const schLabel = zh ? schoolLabel(article.school) : schoolEn(article.school);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: mainTitle,
    description: mainSummary,
    datePublished: article.publishedAt.toISOString(),
    inLanguage: zh ? "zh-CN" : "en",
    mainEntityOfPage: absUrl(localizeHref(lang, basePath)),
    author: { "@type": "Organization", name: sourceLabel },
    publisher: { "@type": "Organization", name: sourceLabel },
    source: { "@type": "URL", url: article.url },
  };

  return (
    <div className="container-page max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href={backHref} className="mb-6 inline-block text-sm text-brand-600 hover:underline">
        ← {t.back}
      </Link>

      <article className="card p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          {article.category && (
            <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
              {catLabel}
            </span>
          )}
          {article.school && (
            <span className="rounded-full bg-violet-50 px-3 py-1 font-medium text-violet-700">
              {schLabel}
            </span>
          )}
          <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
            {sourceLabel}
          </span>
          <span>{formatDate(article.publishedAt)}</span>
          {article.author && (
            <span>
              {t.author}：{article.author}
            </span>
          )}
          <span>
            {article.readCount + 1} {t.readCount}
          </span>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-slate-900">{mainTitle}</h1>

        <div className="whitespace-pre-wrap leading-relaxed text-slate-700">{mainContent}</div>

        {article.keywords && (
          <div className="mt-5 flex flex-wrap gap-2">
            {article.keywords
              .split(/[,，、;；]/)
              .map((k) => k.trim())
              .filter(Boolean)
              .map((k, i) => (
                <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  {k}
                </span>
              ))}
          </div>
        )}

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm text-brand-600 hover:underline"
        >
          {zh ? "查看原文 ↗" : "View original source ↗"}
        </a>
      </article>
    </div>
  );
}
