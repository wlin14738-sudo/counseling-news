import { NextResponse } from "next/server";
import { performFetch } from "@/lib/jobs";

function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  // Allow local/manual runs when no CRON_SECRET is configured (dev only).
  if (!secret) return true;
  const auth = req.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await performFetch());
}
