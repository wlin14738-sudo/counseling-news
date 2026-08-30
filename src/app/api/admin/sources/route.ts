import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { CATEGORIES, isValidCategory } from "@/lib/categories";
import { isValidSchool } from "@/lib/schools";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const sources = await prisma.source.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json({ sources });
}

const patchSchema = z.object({
  id: z.number().int().positive(),
  dailyLimit: z.number().int().min(1).max(100).optional(),
  defaultCategory: z.string().optional(),
  defaultSchool: z.string().optional(),
  enabled: z.boolean().optional(),
});

export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "请求参数错误" }, { status: 400 });
  }

  const { id, ...data } = parsed.data;
  if (data.defaultCategory !== undefined && !isValidCategory(data.defaultCategory)) {
    return NextResponse.json({ error: "无效板块" }, { status: 400 });
  }
  if (data.defaultSchool !== undefined && !isValidSchool(data.defaultSchool)) {
    return NextResponse.json({ error: "无效流派" }, { status: 400 });
  }

  const updated = await prisma.source.update({ where: { id }, data });
  return NextResponse.json({ ok: true, source: updated });
}
