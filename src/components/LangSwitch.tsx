"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitch() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const stripped = isEn
    ? pathname === "/en"
      ? "/"
      : pathname.slice(3) || "/"
    : pathname;
  const target = isEn ? stripped : pathname === "/" ? "/en" : "/en" + pathname;

  return (
    <Link
      href={target}
      className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 hover:border-brand-300 hover:text-brand-600"
    >
      {isEn ? "中文" : "English"}
    </Link>
  );
}
