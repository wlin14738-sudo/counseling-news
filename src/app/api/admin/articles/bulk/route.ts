import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

const bulkSchema = z.object({
  ids: z.array(z.number().int().positive()).min(1),
});

// POST: publish multiple drafts at once.
export async function POST(req: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const parsed = bulkSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "请选择要发布的文章" }, { status: 400 });
  }

  const res = await prisma.article.updateMany({
    where: { id: { in: parsed.data.ids } },
    data: { status: "published", publishedAt: new Date() },
  });
  return NextResponse.json({ ok: true, count: res.count });
}
