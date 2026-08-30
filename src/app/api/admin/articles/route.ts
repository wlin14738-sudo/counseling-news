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
  school: z.string().optional(),
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

const createSchema = z.object({
  title: z.string().default(""),
  titleZh: z.string().min(1, "中文标题不能为空"),
  summary: z.string().default(""),
  summaryZh: z.string().default(""),
  content: z.string().default(""),
  contentZh: z.string().default(""),
  author: z.string().default(""),
  category: z.string().default(""),
  school: z.string().default(""),
  keywords: z.string().default(""),
  sourceId: z.number().int().positive().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
});

// POST: manually create an article from the admin form.
export async function POST(req: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues?.[0]?.message || "请求参数错误" },
      { status: 400 },
    );
  }
  const data = parsed.data;

  // Use the selected source, or fall back to the built-in "Manual" source.
  let sourceId = data.sourceId;
  if (!sourceId) {
    const manual = await prisma.source.upsert({
      where: { rssUrl: "manual://manual" },
      update: {},
      create: {
        name: "Manual",
        nameZh: "手动录入",
        rssUrl: "manual://manual",
        lang: "zh",
        enabled: true,
        dailyLimit: 100000,
        defaultCategory: data.category || "industry",
      },
    });
    sourceId = manual.id;
  }

  const url = `manual://${crypto.randomUUID()}`;
  const article = await prisma.article.create({
    data: {
      sourceId,
      url,
      title: data.title,
      titleZh: data.titleZh,
      summary: data.summary,
      summaryZh: data.summaryZh,
      content: data.content,
      contentZh: data.contentZh,
      author: data.author,
      category: data.category,
      school: data.school,
      keywords: data.keywords,
      status: data.status,
    },
  });
  return NextResponse.json({ ok: true, article });
}
