import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendDailyDigest } from "@/lib/email";

function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  const auth = req.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const articles = await prisma.article.findMany({
    where: {
      status: "published",
      publishedAt: { gte: since },
    },
    orderBy: { publishedAt: "desc" },
    select: { id: true, title: true, titleZh: true, summaryZh: true, keywords: true },
  });

  const subscribers = await prisma.subscriber.findMany({
    where: { confirmed: true },
    select: { email: true, token: true },
  });

  const result = await sendDailyDigest(subscribers, articles);
  return NextResponse.json({
    ok: true,
    articles: articles.length,
    subscribers: subscribers.length,
    ...result,
  });
}
