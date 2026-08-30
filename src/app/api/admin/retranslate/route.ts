import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { summarizeArticle } from "@/lib/ai";

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const all = body.all === true;
  const limit = all
    ? undefined
    : Math.min(50, Math.max(1, Number(body.limit) || 10));

  const drafts = await prisma.article.findMany({
    where: { status: "draft" },
    orderBy: { fetchedAt: "asc" },
    take: limit,
    include: { source: { select: { lang: true } } },
  });

  let succeeded = 0;
  let failed = 0;
  for (const a of drafts) {
    try {
      const ai = await summarizeArticle({
        title: a.title,
        summary: a.summary,
        content: a.content,
        author: a.author,
        lang: a.source.lang === "zh" ? "zh" : "en",
      });
      await prisma.article.update({
        where: { id: a.id },
        data: {
          titleZh: ai.titleZh,
          summaryZh: ai.summaryZh,
          keywords: ai.keywords,
          aiConfidence: ai.confidence,
        },
      });
      if (ai.confidence > 0) succeeded += 1;
      else failed += 1;
    } catch (err) {
      failed += 1;
      console.error("[retranslate] failed for", a.id, (err as Error).message);
    }
  }

  return NextResponse.json({
    ok: true,
    processed: drafts.length,
    succeeded,
    failed,
    note: failed > 0 ? "部分因免费额度或网络限制未能翻译，已保留原文" : "",
  });
}
