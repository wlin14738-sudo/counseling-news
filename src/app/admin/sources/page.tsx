import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import SourceRow from "@/components/SourceRow";

export const metadata: Metadata = { title: "来源管理" };

export default async function AdminSourcesPage() {
  await requireAdmin();
  const sources = await prisma.source.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="container-page space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">来源管理</h1>
          <p className="text-sm text-slate-500">
            设置每个来源的每日额度、默认板块，以及是否启用。
          </p>
        </div>
        <Link href="/admin" className="btn-secondary">
          ← 返回队列
        </Link>
      </div>

      <div className="space-y-4">
        {sources.map((s) => (
          <SourceRow
            key={s.id}
            source={{
              id: s.id,
              name: s.name,
              nameZh: s.nameZh,
              dailyLimit: s.dailyLimit,
              defaultCategory: s.defaultCategory,
              defaultSchool: s.defaultSchool,
              enabled: s.enabled,
            }}
          />
        ))}
      </div>
    </div>
  );
}
