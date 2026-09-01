import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { isValidTopicCategory } from "@/lib/topics";
import { isValidSchool } from "@/lib/schools";

export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const url = new URL(req.url);
  const id = Number(url.searchParams.get("id"));
  if (url.searchParams.get("id") && Number.isFinite(id)) {
    const topic = await prisma.topic.findUnique({ where: { id } });
    return NextResponse.json({ topic });
  }

  const topics = await prisma.topic.findMany({
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json({ topics });
}

const fields = {
  slug: z.string().min(1).optional(),
  title: z.string().optional(),
  titleZh: z.string().optional(),
  summary: z.string().optional(),
  summaryZh: z.string().optional(),
  body: z.string().optional(),
  bodyZh: z.string().optional(),
  timeline: z
    .array(
      z.object({
        year: z.string().default(""),
        titleZh: z.string().default(""),
        titleEn: z.string().default(""),
        bodyZh: z.string().default(""),
        bodyEn: z.string().default(""),
      }),
    )
    .optional(),
  figures: z
    .array(
      z.object({
        nameZh: z.string().default(""),
        nameEn: z.string().default(""),
        years: z.string().default(""),
        titleZh: z.string().default(""),
        titleEn: z.string().default(""),
        bioZh: z.string().default(""),
        bioEn: z.string().default(""),
      }),
    )
    .optional(),
  timelineChina: z
    .array(
      z.object({
        year: z.string().default(""),
        titleZh: z.string().default(""),
        titleEn: z.string().default(""),
        bodyZh: z.string().default(""),
        bodyEn: z.string().default(""),
      }),
    )
    .optional(),
  figuresChina: z
    .array(
      z.object({
        nameZh: z.string().default(""),
        nameEn: z.string().default(""),
        years: z.string().default(""),
        titleZh: z.string().default(""),
        titleEn: z.string().default(""),
        bioZh: z.string().default(""),
        bioEn: z.string().default(""),
      }),
    )
    .optional(),
  fitClient: z
    .object({
      zh: z.string().optional(),
      en: z.string().optional(),
    })
    .optional(),
  fitPractitioner: z
    .object({
      zh: z.string().optional(),
      en: z.string().optional(),
    })
    .optional(),
  category: z.string().optional(),
  school: z.string().optional(),
  status: z.enum(["draft", "published"]).optional(),
  publishedAt: z.coerce.date().optional(),
};

const createSchema = z.object({
  ...fields,
  slug: z.string().min(1),
  title: z.string().min(1),
});

const patchSchema = z.object(fields);

function validCategory(value: unknown): boolean {
  return value === undefined || value === "" || isValidTopicCategory(value as string);
}

function validSchool(value: unknown): boolean {
  return value === undefined || value === "" || isValidSchool(value as string);
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "请求参数错误" }, { status: 400 });
  }
  if (!validCategory(parsed.data.category) || !validSchool(parsed.data.school)) {
    return NextResponse.json({ error: "无效分类或流派" }, { status: 400 });
  }

  const data = parsed.data as z.infer<typeof createSchema> & {
    category?: string;
    school?: string;
  };
  const existing = await prisma.topic.findUnique({ where: { slug: data.slug } });
  if (existing) {
    return NextResponse.json({ error: "slug 已存在" }, { status: 409 });
  }

  const topic = await prisma.topic.create({
    data: {
      slug: data.slug,
      title: data.title,
      titleZh: data.titleZh || "",
      summary: data.summary || "",
      summaryZh: data.summaryZh || "",
      body: data.body || "",
      bodyZh: data.bodyZh || "",
      timeline: data.timeline || [],
      figures: data.figures || [],
      timelineChina: data.timelineChina || [],
      figuresChina: data.figuresChina || [],
      fitClient: data.fitClient || {},
      fitPractitioner: data.fitPractitioner || {},
      category: data.category || "school",
      school: data.school || "",
      status: data.status || "draft",
    },
  });
  return NextResponse.json({ ok: true, topic });
}

export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const id = Number(body.id);
  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: "缺少 id" }, { status: 400 });
  }
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "请求参数错误" }, { status: 400 });
  }
  if (!validCategory(parsed.data.category) || !validSchool(parsed.data.school)) {
    return NextResponse.json({ error: "无效分类或流派" }, { status: 400 });
  }

  const { id: _ignore, ...data } = parsed.data as z.infer<typeof patchSchema> & {
    id?: number;
  };
  const topic = await prisma.topic.update({ where: { id }, data });
  return NextResponse.json({ ok: true, topic });
}

export async function DELETE(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const url = new URL(req.url);
  const id = Number(url.searchParams.get("id"));
  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: "缺少 id" }, { status: 400 });
  }
  await prisma.topic.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
