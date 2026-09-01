import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { schoolLabel, schoolEn } from "@/lib/schools";
import { topicLabel, topicCategory } from "@/lib/topics";
import { extractHeadings, readingMinutes } from "@/lib/text";
import type { FigureEntry, TimelineEntry } from "@/lib/topicTypes";
import TopicBody from "@/components/TopicBody";
import { localizeHref, type Locale } from "@/lib/i18n";
import { absUrl } from "@/lib/site";

export default async function TopicDetailView({
  lang,
  slug,
}: {
  lang: Locale;
  slug: string;
}) {
  const topic = await prisma.topic.findUnique({ where: { slug } });
  if (!topic || topic.status !== "published") notFound();

  prisma.topic
    .update({ where: { id: topic.id }, data: { readCount: { increment: 1 } } })
    .catch(() => {});

  const zh = lang === "zh";
  const timeline = (topic.timeline as TimelineEntry[]) || [];
  const figures = (topic.figures as FigureEntry[]) || [];
  const timelineChina = (topic.timelineChina as TimelineEntry[]) || [];
  const figuresChina = (topic.figuresChina as FigureEntry[]) || [];
  const body = zh ? topic.bodyZh || topic.body : topic.body || topic.bodyZh;
  const mainTitle = zh ? topic.titleZh || topic.title : topic.title || topic.titleZh;
  const mainSummary = zh ? topic.summaryZh || topic.summary : topic.summary || topic.summaryZh;
  const toc = extractHeadings(body);
  const minutes = readingMinutes(body);
  const catLabel = zh ? topicLabel(topic.category) : topicCategory(topic.category).en;
  const schLabel = zh ? schoolLabel(topic.school) : schoolEn(topic.school);
  const backHref = localizeHref(lang, "/topics");
  const schoolLink = topic.school
    ? localizeHref(lang, `/` ) + `?school=${topic.school}`
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: mainTitle,
    description: mainSummary,
    datePublished: topic.publishedAt.toISOString(),
    inLanguage: zh ? "zh-CN" : "en",
    mainEntityOfPage: absUrl(localizeHref(lang, `/topics/${topic.slug}`)),
    wordCount: body.length,
  };

  const tocNav = (
    <nav className="space-y-1 text-sm">
      {toc.map((h, i) => (
        <a
          key={i}
          href={`#${h.slug}`}
          className={`block leading-snug hover:text-brand-600 ${
            h.level === 3 ? "pl-3 text-slate-500" : "font-medium text-slate-700"
          }`}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );

  return (
    <div className="container-page space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href={backHref} className="inline-block text-sm text-brand-600 hover:underline">
        ← {zh ? "返回知识库" : "Back to topics"}
      </Link>

      <section className="rounded-2xl bg-gradient-to-br from-violet-50 to-slate-100 p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="rounded-full bg-violet-50 px-3 py-1 font-medium text-violet-700">
            {catLabel}
          </span>
          {topic.school && (
            <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
              {schLabel}
            </span>
          )}
          <span>{formatDate(topic.publishedAt)}</span>
          <span>
            {topic.readCount + 1} {zh ? "次阅读" : "reads"}
          </span>
          <span>
            {zh ? "约 " : "approx. "}
            {minutes} {zh ? "分钟" : "min"}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900">{mainTitle}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">{mainSummary}</p>
      </section>

      <details className="card p-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-medium text-slate-700">
          {zh ? "章节目录" : "Table of contents"}
        </summary>
        <div className="mt-3">{tocNav}</div>
      </details>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
        <article className="card p-8">
          <TopicBody
            body={body}
            timeline={timeline}
            figures={figures}
            timelineChina={timelineChina}
            figuresChina={figuresChina}
            lang={lang}
          />

          {topic.school && (
            <div className="mt-10 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-600">
                {zh
                  ? `想了解 ${schLabel} 的最新研究与实践动态？`
                  : `Curious about the latest research and practice on ${schLabel}?`}
              </p>
              {schoolLink && (
                <Link href={schoolLink} className="btn-primary text-sm">
                  {zh ? "查看该流派最新动态" : "Browse latest updates"}
                </Link>
              )}
            </div>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-6 card p-5">
            <p className="mb-3 text-sm font-semibold text-slate-900">
              {zh ? "章节目录" : "Contents"}
            </p>
            {tocNav}
          </div>
        </aside>
      </div>
    </div>
  );
}
