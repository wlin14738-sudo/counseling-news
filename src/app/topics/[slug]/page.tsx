import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { schoolLabel } from "@/lib/schools";
import { topicLabel } from "@/lib/topics";
import { extractHeadings, readingMinutes } from "@/lib/text";
import type { FigureEntry, TimelineEntry } from "@/lib/topicTypes";
import TopicBody from "@/components/TopicBody";
import TopicEnglish from "@/components/TopicEnglish";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = await prisma.topic.findUnique({
    where: { slug },
    select: { titleZh: true, title: true, summaryZh: true },
  });
  if (!topic) return {};
  return {
    title: topic.titleZh || topic.title,
    description: topic.summaryZh,
  };
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = await prisma.topic.findUnique({ where: { slug } });

  if (!topic || topic.status !== "published") {
    notFound();
  }

  // 阅读计数尽力而为。
  prisma.topic
    .update({ where: { id: topic.id }, data: { readCount: { increment: 1 } } })
    .catch(() => {});

  const timeline = (topic.timeline as TimelineEntry[]) || [];
  const figures = (topic.figures as FigureEntry[]) || [];
  const toc = extractHeadings(topic.bodyZh);
  const minutes = readingMinutes(topic.bodyZh);
  const zhTitle = topic.titleZh || topic.title;
  const zhSummary = topic.summaryZh || topic.summary;
  const hasEn = Boolean(topic.title && topic.title !== topic.titleZh);

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
      <Link
        href="/topics"
        className="inline-block text-sm text-brand-600 hover:underline"
      >
        ← 返回知识库
      </Link>

      <section className="rounded-2xl bg-gradient-to-br from-violet-50 to-slate-100 p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="rounded-full bg-violet-50 px-3 py-1 font-medium text-violet-700">
            {topicLabel(topic.category)}
          </span>
          {topic.school && (
            <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
              {schoolLabel(topic.school)}
            </span>
          )}
          <span>{formatDate(topic.publishedAt)}</span>
          <span>{topic.readCount + 1} 次阅读</span>
          <span>约 {minutes} 分钟</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900">{zhTitle}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">{zhSummary}</p>
      </section>

      <details className="card p-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-medium text-slate-700">
          章节目录
        </summary>
        <div className="mt-3">{tocNav}</div>
      </details>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
        <article className="card p-8">
          <TopicBody
            body={topic.bodyZh}
            timeline={timeline}
            figures={figures}
            lang="zh"
          />

          {topic.school && (
            <div className="mt-10 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-600">
                想了解 {schoolLabel(topic.school)} 的最新研究与实践动态？
              </p>
              <Link href={`/?school=${topic.school}`} className="btn-primary text-sm">
                查看该流派最新动态
              </Link>
            </div>
          )}

          {hasEn && (
            <div className="mt-10">
              <TopicEnglish
                title={topic.title}
                summary={topic.summary}
                body={topic.body}
                timeline={timeline}
                figures={figures}
              />
            </div>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-6 card p-5">
            <p className="mb-3 text-sm font-semibold text-slate-900">章节目录</p>
            {tocNav}
          </div>
        </aside>
      </div>
    </div>
  );
}
