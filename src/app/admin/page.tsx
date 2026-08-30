import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getSession, requireAdmin } from "@/lib/session";
import { formatDate } from "@/lib/utils";
import LogoutButton from "@/components/LogoutButton";
import { categoryLabel } from "@/lib/categories";

export const metadata: Metadata = { title: "审核队列" };

export default async function AdminPage() {
  await requireAdmin();
  const session = await getSession();

  const [drafts, published] = await Promise.all([
    prisma.article.findMany({
      where: { status: "draft" },
      orderBy: { fetchedAt: "desc" },
      include: { source: { select: { name: true, nameZh: true } } },
    }),
    prisma.article.count({ where: { status: "published" } }),
  ]);

  return (
    <div className="container-page space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">审核队列</h1>
          <p className="text-sm text-slate-500">
            待审核 {drafts.length} 篇 · 已发布 {published} 篇
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">{session?.email}</span>
          <Link href="/admin/sources" className="btn-secondary">
            来源管理
          </Link>
          <Link href="/admin/tools" className="btn-secondary">
            后台工具
          </Link>
          <LogoutButton />
        </div>
      </div>

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
                  {categoryLabel(a.category) || "未分类"} ·{" "}
                  {a.source.nameZh || a.source.name} · {formatDate(a.fetchedAt)} · AI
                  置信度 {Math.round(a.aiConfidence * 100)}%
                </p>
              </div>
              <Link href={`/admin/articles/${a.id}`} className="btn-secondary shrink-0">
                编辑
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
