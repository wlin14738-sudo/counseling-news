import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

// GET: admin review queue
export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const drafts = await prisma.article.findMany({
    where: { status: "draft" },
    orderBy: { fetchedAt: "desc" },
    include: { source: { select: { name: true, nameZh: true } } },
  });
  return NextResponse.json({ articles: drafts });
}

const patchSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1).optional(),
  titleZh: z.string().optional(),
  summary: z.string().optional(),
  summaryZh: z.string().optional(),
  author: z.string().optional(),
  category: z.string().optional(),
  keywords: z.string().optional(),
  status: z.enum(["draft", "published", "rejected"]).optional(),
});

// PATCH: update one article (edit + approve/reject)
export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "请求参数错误" }, { status: 400 });
  }

  const { id, status, ...fields } = parsed.data;
  const updated = await prisma.article.update({
    where: { id },
    data: { ...fields, ...(status ? { status } : {}) },
  });
  return NextResponse.json({ ok: true, article: updated });
}
