import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ArticleCard from "@/components/ArticleCard";
import SubscribeForm from "@/components/SubscribeForm";
import { Prisma } from "@prisma/client";
import { CATEGORIES, categoryLabel, isValidCategory } from "@/lib/categories";

export const dynamic = "force-dynamic";

const PER_PAGE = 12;

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const q = (sp.q as string) || "";
  const sourceId = sp.source ? Number(sp.source) : undefined;
  const category = (sp.category as string) || "";

  const where: Prisma.ArticleWhereInput = {
    status: "published",
    ...(sourceId && Number.isFinite(sourceId) ? { sourceId } : {}),
    ...(category && isValidCategory(category) ? { category } : {}),
    ...(q
      ? {
          OR: [
            { titleZh: { contains: q } },
            { summaryZh: { contains: q } },
            { title: { contains: q } },
            { keywords: { contains: q } },
          ],
        }
      : {}),
  };

  const [articles, total, sources] = await Promise.all([
    prisma.article.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      include: { source: { select: { name: true, nameZh: true } } },
    }),
    prisma.article.count({ where }),
    prisma.source.findMany({
      where: { enabled: true },
      orderBy: { name: "asc" },
      select: { id: true, name: true, nameZh: true },
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  function pageHref(p: number) {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (sourceId) params.set("source", String(sourceId));
    if (category) params.set("category", category);
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return qs ? `/?${qs}` : "/";
  }

  function categoryHref(cat: string) {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (sourceId) params.set("source", String(sourceId));
    if (cat) params.set("category", cat);
    const qs = params.toString();
    return qs ? `/?${qs}` : "/";
  }

  return (
    <div className="container-page space-y-10">
      <section className="rounded-2xl bg-gradient-to-br from-brand-50 to-slate-100 p-8">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          全球心理咨询行业资讯
        </h1>
        <p className="max-w-2xl text-slate-600">
          每日聚合全球及中文权威机构的最新行业动态，AI 翻译中文摘要，助从业者把握行业脉搏。
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <nav className="flex flex-wrap gap-2">
            <Link
              href={categoryHref("")}
              className={`rounded-full px-4 py-1.5 text-sm ${
                category === ""
                  ? "bg-brand-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              全部
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={categoryHref(c.slug)}
                className={`rounded-full px-4 py-1.5 text-sm ${
                  category === c.slug
                    ? "bg-brand-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {c.label}
              </Link>
            ))}
          </nav>

          <form method="get" className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="搜索标题 / 摘要…"
              className="input max-w-xs"
            />
            <select name="source" defaultValue={sourceId ?? ""} className="input w-auto">
              <option value="">全部来源</option>
              {sources.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nameZh || s.name}
                </option>
              ))}
            </select>
            <button type="submit" className="btn-secondary">
              筛选
            </button>
          </form>

          <div className="space-y-4">
            {articles.length === 0 && (
              <p className="text-slate-500">暂未找到相关资讯。</p>
            )}
            {articles.map((a) => (
              <ArticleCard
                key={a.id}
                id={a.id}
                title={a.title}
                titleZh={a.titleZh}
                summary={a.summary}
                summaryZh={a.summaryZh}
                publishedAt={a.publishedAt}
                sourceName={a.source.name}
                sourceNameZh={a.source.nameZh}
                category={categoryLabel(a.category)}
                keywords={a.keywords}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-2">
              <Link
                href={pageHref(page - 1)}
                className={`btn-secondary ${page <= 1 ? "pointer-events-none opacity-40" : ""}`}
              >
                上一页
              </Link>
              <span className="text-sm text-slate-500">
                {page} / {totalPages}
              </span>
              <Link
                href={pageHref(page + 1)}
                className={`btn-secondary ${page >= totalPages ? "pointer-events-none opacity-40" : ""}`}
              >
                下一页
              </Link>
            </nav>
          )}
        </div>

        <aside id="subscribe" className="card h-fit space-y-4 p-6">
          <h2 className="text-lg font-semibold text-slate-900">订阅每日摘要</h2>
          <p className="text-sm text-slate-600">
            每天一封邮件，汇总最新心理咨询行业资讯的中文摘要。
          </p>
          <SubscribeForm />
        </aside>
      </section>
    </div>
  );
}
