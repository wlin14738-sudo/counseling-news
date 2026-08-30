import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  if (body.confirm !== "清空") {
    return NextResponse.json({ error: "确认词不正确" }, { status: 400 });
  }

  const result = await prisma.article.deleteMany({ where: { status: "draft" } });
  return NextResponse.json({ ok: true, deleted: result.count });
}
