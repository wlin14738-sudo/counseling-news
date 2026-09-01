import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { schoolLabel, schoolEn } from "@/lib/schools";
import { TOPIC_CATEGORIES, topicLabel, topicCategory } from "@/lib/topics";
import { localizeHref, type Locale } from "@/lib/i18n";

export default async function TopicListView({ lang }: { lang: Locale }) {
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

  const grouped = TOPIC_CATEGORIES.map((c) => ({
    category: c,
    items: topics.filter((t) => t.category === c.slug),
  })).filter((g) => g.items.length > 0);

  const t = lang === "zh" ? {
    title: "专题 · 知识库",
    desc: "面向从业者的深度内容：流派脉络、核心方法、循证证据与职业路径。首期聚焦各咨询流派，后续扩展伦理、督导与职业发展等专题。",
    empty: "暂无知识库内容。",
  } : {
    title: "Topics · Knowledge Base",
    desc: "In-depth content for practitioners: the evolution of therapy schools, core methods, evidence, and career paths. Our first batch focuses on each counseling school, with ethics, supervision, and career development to follow.",
    empty: "No knowledge base content yet.",
  };

  const catLabel = (slug: string) => lang === "zh" ? topicLabel(slug) : topicCategory(slug).en;
  const schLabel = (slug: string) => lang === "zh" ? schoolLabel(slug) : schoolEn(slug);
  const titleOf = (titleZh: string, title: string) => lang === "zh" ? titleZh || title : title || titleZh;

  return (
    <div className="container-page space-y-10">
      <section className="rounded-2xl bg-gradient-to-br from-violet-50 to-slate-100 p-8">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">{t.title}</h1>
        <p className="max-w-2xl text-slate-600">{t.desc}</p>
      </section>

      {grouped.length === 0 && <p className="text-slate-500">{t.empty}</p>}

      {grouped.map(({ category, items }) => (
        <section key={category.slug} className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">{catLabel(category.slug)}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const href = localizeHref(lang, `/topics/${item.slug}`);
              return (
                <Link
                  key={item.id}
                  href={href}
                  className="card group flex flex-col gap-2 p-5 transition hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-violet-50 px-2.5 py-0.5 font-medium text-violet-700">
                      {catLabel(item.category)}
                    </span>
                    {item.school && (
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-medium text-brand-700">
                        {schLabel(item.school)}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600">
                    {titleOf(item.titleZh, item.title)}
                  </h3>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
