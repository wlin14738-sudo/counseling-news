import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { performAutoReview } from "@/lib/jobs";

export async function POST() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const limit = Number(process.env.AUTO_DAILY_REVIEW || 20);
  const result = await performAutoReview(limit);
  return NextResponse.json({
    ok: true,
    limit,
    ...result,
  });
}
