import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || "";

  const sub = await prisma.subscriber.findUnique({ where: { token } });
  if (!sub) {
    return new NextResponse(
      "<p>链接无效或已过期，请重新订阅。</p>",
      { headers: { "content-type": "text/html; charset=utf-8" } },
    );
  }

  await prisma.subscriber.update({
    where: { id: sub.id },
    data: { confirmed: true },
  });

  return new NextResponse(
    `<div style="font-family:sans-serif;max-width:480px;margin:60px auto;text-align:center;">
       <h2>订阅成功 🎉</h2>
       <p>你已经成功订阅《全球心理咨询行业资讯》，我们将每天为你推送中文摘要。</p>
       <a href="/">返回首页</a>
     </div>`,
    { headers: { "content-type": "text/html; charset=utf-8" } },
  );
}
