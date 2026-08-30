import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { schoolLabel } from "@/lib/schools";
import { topicLabel } from "@/lib/topics";
import Markdown from "@/components/Markdown";
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

  const zhTitle = topic.titleZh || topic.title;
  const zhSummary = topic.summaryZh || topic.summary;
  const hasEn = Boolean(topic.title && topic.title !== topic.titleZh);

  return (
    <div className="container-page max-w-3xl">
      <Link href="/topics" className="mb-6 inline-block text-sm text-brand-600 hover:underline">
        ← 返回知识库
      </Link>
      <article className="card p-8">
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
        </div>

        <h1 className="mb-4 text-3xl font-bold text-slate-900">{zhTitle}</h1>
        <p className="mb-6 text-slate-700">{zhSummary}</p>

        <Markdown content={topic.bodyZh} />

        {topic.school && (
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-600">
              想了解 {schoolLabel(topic.school)} 的最新研究与实践动态？
            </p>
            <Link
              href={`/?school=${topic.school}`}
              className="btn-primary text-sm"
            >
              查看该流派最新动态
            </Link>
          </div>
        )}

        {hasEn && (
          <div className="mt-8">
            <TopicEnglish
              title={topic.title}
              summary={topic.summary}
              body={topic.body}
            />
          </div>
        )}
      </article>
    </div>
  );
}
