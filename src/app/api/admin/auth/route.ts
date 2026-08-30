import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signSession, sessionCookieName, sessionMaxAge } from "@/lib/session";

export async function GET() {
  return NextResponse.json({ authenticated: false });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  // Logout
  if (body.action === "logout") {
    const res = NextResponse.json({ ok: true });
    res.cookies.set(sessionCookieName(), "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
      path: "/",
    });
    return res;
  }

  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  if (!email || !password) {
    return NextResponse.json({ error: "请输入邮箱和密码" }, { status: 400 });
  }

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) {
    return NextResponse.json({ error: "邮箱或密码错误" }, { status: 401 });
  }

  const ok = await bcrypt.compare(password, admin.passwordHash);
  if (!ok) {
    return NextResponse.json({ error: "邮箱或密码错误" }, { status: 401 });
  }

  const token = await signSession({
    sub: String(admin.id),
    email: admin.email,
    role: admin.role,
  });

  const res = NextResponse.json({ ok: true, email: admin.email });
  res.cookies.set(sessionCookieName(), token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: sessionMaxAge(),
    path: "/",
  });
  return res;
}
