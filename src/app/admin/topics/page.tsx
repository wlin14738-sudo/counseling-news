import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { formatDate } from "@/lib/utils";
import { schoolLabel } from "@/lib/schools";
import { topicLabel } from "@/lib/topics";
import DeleteTopicButton from "@/components/DeleteTopicButton";

export const metadata: Metadata = { title: "专题管理" };

export default async function AdminTopicsPage() {
  await requireAdmin();
  const topics = await prisma.topic.findMany({ orderBy: { updatedAt: "desc" } });

  return (
    <div className="container-page space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">专题管理</h1>
          <p className="text-sm text-slate-500">
            共 {topics.length} 篇 · 已发布 {topics.filter((t) => t.status === "published").length} 篇
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/topics/new" className="btn-primary">
            新建专题
          </Link>
          <Link href="/admin" className="btn-secondary">
            ← 返回管理
          </Link>
        </div>
      </div>

      {topics.length === 0 ? (
        <div className="card p-8 text-center text-slate-500">
          暂无专题内容。
        </div>
      ) : (
        <div className="card divide-y divide-slate-100">
          {topics.map((t) => (
            <div key={t.id} className="flex items-center justify-between gap-4 p-4">
              <div className="min-w-0">
                <p className="truncate font-medium text-slate-900">
                  {t.titleZh || t.title}
                </p>
                <p className="truncate text-sm text-slate-500">
                  {topicLabel(t.category) || "未分类"}
                  {t.school ? ` · ${schoolLabel(t.school)}` : ""} ·{" "}
                  <span
                    className={
                      t.status === "published"
                        ? "text-green-600"
                        : "text-amber-600"
                    }
                  >
                    {t.status === "published" ? "已发布" : "草稿"}
                  </span>{" "}
                  · {formatDate(t.updatedAt)}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Link href={`/topics/${t.slug}`} target="_blank" className="btn-secondary">
                  前台
                </Link>
                <Link href={`/admin/topics/${t.id}`} className="btn-secondary">
                  编辑
                </Link>
                <DeleteTopicButton id={t.id} label="删除" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
