import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ArticleCard from "@/components/ArticleCard";
import SubscribeForm from "@/components/SubscribeForm";
import SchoolFilter from "@/components/SchoolFilter";
import { Prisma } from "@prisma/client";
import { CATEGORIES, categoryLabel, categoryEn, isValidCategory } from "@/lib/categories";
import { SCHOOLS, schoolLabel, schoolEn, isValidSchool } from "@/lib/schools";
import { localizeHref, PAGE_TEXT, type Locale } from "@/lib/i18n";
import { absUrl, siteName } from "@/lib/site";

const PER_PAGE = 12;
type SearchParams = { [key: string]: string | string[] | undefined };

export default async function HomeView({
  lang,
  searchParams,
}: {
  lang: Locale;
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const q = (sp.q as string) || "";
  const sourceId = sp.source ? Number(sp.source) : undefined;
  const category = (sp.category as string) || "";
  const school = (sp.school as string) || "";
  const t = PAGE_TEXT[lang];

  const where: Prisma.ArticleWhereInput = {
    status: "published",
    ...(sourceId && Number.isFinite(sourceId) ? { sourceId } : {}),
    ...(category && isValidCategory(category) ? { category } : {}),
    ...(school && isValidSchool(school) ? { school } : {}),
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

  function makeHref(params: Record<string, string | undefined>): string {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (sourceId) p.set("source", String(sourceId));
    if (category) p.set("category", category);
    if (school) p.set("school", school);
    for (const [k, v] of Object.entries(params)) {
      if (v) p.set(k, v);
      else p.delete(k);
    }
    const s = p.toString();
    return localizeHref(lang, "/") + (s ? `?${s}` : "");
  }
  const pageHref = (n: number) => makeHref({ page: n > 1 ? String(n) : undefined });
  const categoryHref = (cat: string) => makeHref({ category: cat || undefined, page: undefined });
  const schoolHref = (s: string) => makeHref({ school: s || undefined, page: undefined });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName(lang),
    url: absUrl(localizeHref(lang, "/")),
    description: t.heroDesc,
  };

  return (
    <div className="container-page space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="rounded-2xl bg-gradient-to-br from-brand-50 to-slate-100 p-8">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">{t.heroTitle}</h1>
        <p className="max-w-2xl text-slate-600">{t.heroDesc}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <nav className="flex flex-wrap gap-2">
            <Link
              href={categoryHref("")}
              className={`rounded-full px-4 py-1.5 text-sm ${
                category === "" ? "bg-brand-600 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {t.all}
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={categoryHref(c.slug)}
                className={`rounded-full px-4 py-1.5 text-sm ${
                  category === c.slug ? "bg-brand-600 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {lang === "zh" ? categoryLabel(c.slug) : categoryEn(c.slug)}
              </Link>
            ))}
          </nav>

          <SchoolFilter
            current={school}
            allHref={schoolHref("")}
            items={SCHOOLS.map((s) => ({
              slug: s.slug,
              label: lang === "zh" ? schoolLabel(s.slug) : schoolEn(s.slug),
              href: schoolHref(s.slug),
            }))}
          />

          <form method="get" className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder={t.searchPlaceholder}
              className="input max-w-xs"
            />
            <select name="source" defaultValue={sourceId ?? ""} className="input w-auto">
              <option value="">{t.allSource}</option>
              {sources.map((s) => (
                <option key={s.id} value={s.id}>
                  {lang === "zh" ? s.nameZh || s.name : s.name}
                </option>
              ))}
            </select>
            <button type="submit" className="btn-secondary">
              {t.filter}
            </button>
          </form>

          <div className="space-y-4">
            {articles.length === 0 && <p className="text-slate-500">{t.noResult}</p>}
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
                category={lang === "zh" ? categoryLabel(a.category) : categoryEn(a.category)}
                school={lang === "zh" ? schoolLabel(a.school) : schoolEn(a.school)}
                keywords={a.keywords}
                lang={lang}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-2">
              <Link
                href={pageHref(page - 1)}
                className={`btn-secondary ${page <= 1 ? "pointer-events-none opacity-40" : ""}`}
              >
                {t.prev}
              </Link>
              <span className="text-sm text-slate-500">
                {page} / {totalPages}
              </span>
              <Link
                href={pageHref(page + 1)}
                className={`btn-secondary ${page >= totalPages ? "pointer-events-none opacity-40" : ""}`}
              >
                {t.next}
              </Link>
            </nav>
          )}
        </div>

        <aside id="subscribe" className="card h-fit space-y-4 p-6">
          <h2 className="text-lg font-semibold text-slate-900">{t.subscribeTitle}</h2>
          <p className="text-sm text-slate-600">{t.subscribeDesc}</p>
          <SubscribeForm lang={lang} />
        </aside>
      </section>
    </div>
  );
}
