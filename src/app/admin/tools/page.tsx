import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/session";
import AdminTools from "@/components/AdminTools";
import FetchButton from "@/components/FetchButton";

export const metadata: Metadata = { title: "后台工具" };

export default async function AdminToolsPage() {
  await requireAdmin();

  return (
    <div className="container-page space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">后台工具</h1>
          <p className="text-sm text-slate-500">
            立即抓取最新资讯，重译队列内容，或清空待审核草稿。
          </p>
        </div>
        <Link href="/admin" className="btn-secondary">
          ← 返回队列
        </Link>
      </div>
      <div className="card flex items-center justify-between p-5">
        <p className="text-sm text-slate-600">
          手动抓取一次，把最新资讯拉到后台审核队列（受各来源每日额度限制）。
        </p>
        <FetchButton />
      </div>
      <AdminTools />
    </div>
  );
}
