import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getSession, requireAdmin } from "@/lib/session";
import { formatDate } from "@/lib/utils";
import LogoutButton from "@/components/LogoutButton";
import DeleteArticleButton from "@/components/DeleteArticleButton";
import FetchButton from "@/components/FetchButton";
import { CATEGORIES, categoryLabel } from "@/lib/categories";
import { SCHOOLS, schoolLabel } from "@/lib/schools";
import { titlesSimilar } from "@/lib/dedup";

export const metadata: Metadata = { title: "后台管理" };

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await requireAdmin();
  const session = await getSession();
  const sp = await searchParams;
  const sourceId = sp.source ? Number(sp.source) : undefined;
  const category = (sp.category as string) || "";
  const school = (sp.school as string) || "";

  const draftWhere = {
    status: "draft",
    ...(sourceId && Number.isFinite(sourceId) ? { sourceId } : {}),
    ...(category && CATEGORIES.some((c) => c.slug === category) ? { category } : {}),
    ...(school && SCHOOLS.some((s) => s.slug === school) ? { school } : {}),
  };

  const [drafts, publishedArticles, sources, allTitles] = await Promise.all([
    prisma.article.findMany({
      where: draftWhere,
      orderBy: { fetchedAt: "desc" },
      include: { source: { select: { name: true, nameZh: true } } },
    }),
    prisma.article.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      include: { source: { select: { name: true, nameZh: true } } },
    }),
    prisma.source.findMany({ where: { enabled: true }, orderBy: { name: "asc" } }),
    prisma.article.findMany({ select: { id: true, title: true } }),
  ]);

  const duplicateDraftIds = new Set(
    drafts
      .filter((d) =>
        allTitles.some(
          (t) => t.id !== d.id && titlesSimilar(d.title, t.title) >= 0.8,
        ),
      )
      .map((d) => d.id),
  );

  return (
    <div className="container-page space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">后台管理</h1>
          <p className="text-sm text-slate-500">
            待审核 {drafts.length} 篇 · 已发布 {publishedArticles.length} 篇
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">{session?.email}</span>
          <FetchButton />
          <Link href="/admin/sources" className="btn-secondary">
            来源管理
          </Link>
          <Link href="/admin/topics" className="btn-secondary">
            专题管理
          </Link>
          <Link href="/admin/tools" className="btn-secondary">
            后台工具
          </Link>
          <LogoutButton />
        </div>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">待审核队列</h2>
        <form method="get" className="mb-4 flex flex-wrap items-center gap-2">
          <select name="source" defaultValue={sourceId ?? ""} className="input w-auto">
            <option value="">全部来源</option>
            {sources.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nameZh || s.name}
              </option>
            ))}
          </select>
          <select name="category" defaultValue={category} className="input w-auto">
            <option value="">全部板块</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
          <select name="school" defaultValue={school} className="input w-auto">
            <option value="">全部流派</option>
            {SCHOOLS.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.label}
              </option>
            ))}
          </select>
          <button type="submit" className="btn-secondary">
            筛选
          </button>
          {(sourceId || category || school) && (
            <Link href="/admin" className="text-sm text-brand-600 hover:underline">
              清除筛选
            </Link>
          )}
        </form>
        {drafts.length === 0 ? (
          <div className="card p-8 text-center text-slate-500">
            暂无待审核内容。运行 <code>/api/cron/fetch</code> 拉取最新资讯。
          </div>
        ) : (
          <div className="card divide-y divide-slate-100">
            {drafts.map((a) => (
              <div key={a.id} className="flex items-center justify-between gap-4 p-4">
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-900">
                    {a.titleZh || a.title}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {duplicateDraftIds.has(a.id) && (
                      <span className="mr-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-700">
                        ⚠️ 疑似重复
                      </span>
                    )}
                    {categoryLabel(a.category) || "未分类"} ·{" "}
                    {schoolLabel(a.school) || "未标流派"} ·{" "}
                    {a.source.nameZh || a.source.name} · {formatDate(a.fetchedAt)} · AI
                    置信度 {Math.round(a.aiConfidence * 100)}%
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <Link href={`/admin/articles/${a.id}`} className="btn-secondary">
                    编辑
                  </Link>
                  <DeleteArticleButton id={a.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">已发布内容（前台可见）</h2>
        {publishedArticles.length === 0 ? (
          <div className="card p-8 text-center text-slate-500">暂无已发布内容。</div>
        ) : (
          <div className="card divide-y divide-slate-100">
            {publishedArticles.map((a) => (
              <div key={a.id} className="flex items-center justify-between gap-4 p-4">
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-900">
                    {a.titleZh || a.title}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {categoryLabel(a.category) || "未分类"} ·{" "}
                    {schoolLabel(a.school) || "未标流派"} ·{" "}
                    {a.source.nameZh || a.source.name} · {formatDate(a.publishedAt)} ·{" "}
                    {a.readCount} 次阅读
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={`/articles/${a.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    前台查看
                  </a>
                  <Link href={`/admin/articles/${a.id}`} className="btn-secondary">
                    编辑
                  </Link>
                  <DeleteArticleButton id={a.id} label="删除" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
