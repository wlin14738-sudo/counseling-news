import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || "";

  const sub = await prisma.subscriber.findUnique({ where: { token } });
  if (sub) {
    await prisma.subscriber.delete({ where: { id: sub.id } });
  }

  return new NextResponse(
    `<div style="font-family:sans-serif;max-width:480px;margin:60px auto;text-align:center;">
       <h2>已退订</h2>
       <p>你已经成功退订《全球心理咨询行业资讯》。</p>
       <a href="/">返回首页</a>
     </div>`,
    { headers: { "content-type": "text/html; charset=utf-8" } },
  );
}
