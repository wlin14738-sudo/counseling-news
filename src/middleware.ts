import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const locale = path.startsWith("/en") ? "en" : "zh";
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
};
