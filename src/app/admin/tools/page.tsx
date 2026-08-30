import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/session";
import AdminTools from "@/components/AdminTools";

export const metadata: Metadata = { title: "后台工具" };

export default async function AdminToolsPage() {
  await requireAdmin();

  return (
    <div className="container-page space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">后台工具</h1>
          <p className="text-sm text-slate-500">重译队列内容，或清空待审核草稿。</p>
        </div>
        <Link href="/admin" className="btn-secondary">
          ← 返回队列
        </Link>
      </div>
      <AdminTools />
    </div>
  );
}
