import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/session";
import EditTopic from "@/components/EditTopic";

export const metadata: Metadata = { title: "新建专题" };

export default async function AdminNewTopicPage() {
  await requireAdmin();

  return (
    <div className="container-page max-w-3xl space-y-6">
      <Link href="/admin/topics" className="inline-block text-sm text-brand-600 hover:underline">
        ← 返回专题管理
      </Link>
      <h1 className="text-2xl font-bold text-slate-900">新建专题</h1>
      <EditTopic />
    </div>
  );
}
