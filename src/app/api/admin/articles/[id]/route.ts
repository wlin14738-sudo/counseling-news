import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const { id } = await params;
  const articleId = Number(id);
  if (!Number.isInteger(articleId)) {
    return NextResponse.json({ error: "参数错误" }, { status: 400 });
  }

  try {
    const deleted = await prisma.article.delete({ where: { id: articleId } });
    return NextResponse.json({ ok: true, deleted: deleted.id });
  } catch {
    return NextResponse.json({ error: "文章不存在或已被删除" }, { status: 404 });
  }
}
