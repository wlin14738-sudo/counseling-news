"use client";

import { usePathname } from "next/navigation";
import { PAGE_TEXT } from "@/lib/i18n";
import { siteName } from "@/lib/site";

export default function SiteFooter() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const loc = isEn ? "en" : "zh";
  const text = `${siteName(loc)} · ${PAGE_TEXT[loc].footerNote}`;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-6 text-center text-sm text-slate-500">{text}</div>
    </footer>
  );
}
