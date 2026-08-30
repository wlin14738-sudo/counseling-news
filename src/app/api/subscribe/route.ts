import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { sendConfirmation } from "@/lib/email";

const schema = z.object({
  email: z.string().email("邮箱格式不正确"),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "邮箱格式不正确" },
      { status: 400 },
    );
  }

  const email = parsed.data.email.trim().toLowerCase();
  const existing = await prisma.subscriber.findUnique({ where: { email } });
  if (existing?.confirmed) {
    return NextResponse.json({ ok: true, message: "你已经订阅过了" });
  }

  const token = crypto.randomUUID();
  const sub = await prisma.subscriber.upsert({
    where: { email },
    update: { token },
    create: { email, token },
  });

  await sendConfirmation({ email: sub.email, token: sub.token });
  return NextResponse.json({
    ok: true,
    message: "确认邮件已发送，请前往邮箱确认",
  });
}
