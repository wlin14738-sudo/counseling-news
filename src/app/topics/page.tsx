import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { schoolLabel } from "@/lib/schools";
import { TOPIC_CATEGORIES, topicLabel } from "@/lib/topics";

export const dynamic = "force-dynamic";

export default async function TopicsPage() {
  const topics = await prisma.topic.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
    select: {
      id: true,
      slug: true,
      title: true,
      titleZh: true,
      summary: true,
      summaryZh: true,
      category: true,
      school: true,
      publishedAt: true,
    },
  });

  // 渲染前先按分类顺序分组，只展示已有内容的分类。
  const grouped = TOPIC_CATEGORIES.map((c) => ({
    category: c,
    items: topics.filter((t) => t.category === c.slug),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="container-page space-y-10">
      <section className="rounded-2xl bg-gradient-to-br from-violet-50 to-slate-100 p-8">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">专题 · 知识库</h1>
        <p className="max-w-2xl text-slate-600">
          面向从业者的系统梳理：流派脉络、核心方法、循证证据与职业路径。首期聚焦各咨询流派的深度内容，后续扩展伦理、督导与职业发展等专题。
        </p>
      </section>

      {grouped.length === 0 && (
        <p className="text-slate-500">暂无知识库内容。</p>
      )}

      {grouped.map(({ category, items }) => (
        <section key={category.slug} className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">{category.label}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t) => {
              const zhTitle = t.titleZh || t.title;
              const zhSummary = t.summaryZh || t.summary;
              return (
                <Link
                  key={t.id}
                  href={`/topics/${t.slug}`}
                  className="card group flex flex-col gap-2 p-5 transition hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-violet-50 px-2.5 py-0.5 font-medium text-violet-700">
                      {category.label}
                    </span>
                    {t.school && (
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-medium text-brand-700">
                        {schoolLabel(t.school)}
                      </span>
                    )}
                    <span>{formatDate(t.publishedAt)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600">
                    {zhTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{zhSummary}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
