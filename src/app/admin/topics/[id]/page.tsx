import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import EditTopic from "@/components/EditTopic";
import DeleteTopicButton from "@/components/DeleteTopicButton";

export const metadata: Metadata = { title: "编辑专题" };

export default async function AdminEditTopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const topic = await prisma.topic.findUnique({ where: { id: Number(id) } });
  if (!topic) notFound();

  return (
    <div className="container-page max-w-3xl space-y-6">
      <Link href="/admin/topics" className="inline-block text-sm text-brand-600 hover:underline">
        ← 返回专题管理
      </Link>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">编辑专题</h1>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            {topic.status === "published" ? "已发布" : "草稿"}
          </span>
          <DeleteTopicButton id={topic.id} label="删除" redirectTo="/admin/topics" />
        </div>
      </div>
      <EditTopic
        topic={{
          id: topic.id,
          slug: topic.slug,
          title: topic.title,
          titleZh: topic.titleZh,
          summary: topic.summary,
          summaryZh: topic.summaryZh,
          body: topic.body,
          bodyZh: topic.bodyZh,
          category: topic.category,
          school: topic.school,
          status: topic.status,
        }}
      />
    </div>
  );
}
