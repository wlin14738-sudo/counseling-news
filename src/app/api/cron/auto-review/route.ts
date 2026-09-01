import { NextResponse } from "next/server";
import { performAutoReview } from "@/lib/jobs";

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
  const limit = Number(process.env.AUTO_DAILY_REVIEW || 20);
  return NextResponse.json(await performAutoReview(limit));
}
