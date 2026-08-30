import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { performFetch } from "@/lib/jobs";

export async function POST() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const result = await performFetch();
  return NextResponse.json(result);
}
