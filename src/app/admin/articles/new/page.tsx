import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import NewArticle from "@/components/NewArticle";

export const metadata: Metadata = { title: "手动添加文章" };

export default async function AdminNewArticlePage() {
  await requireAdmin();
  const sources = await prisma.source.findMany({
    where: { enabled: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true, nameZh: true },
  });

  return (
    <div className="container-page max-w-3xl space-y-6">
      <Link href="/admin" className="inline-block text-sm text-brand-600 hover:underline">
        ← 返回审核队列
      </Link>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">手动添加文章</h1>
        <p className="text-sm text-slate-500">
          用于录入中文原创/人工整理内容。发布后会在对应板块前台展示。
        </p>
      </div>
      <NewArticle sources={sources} />
    </div>
  );
}
