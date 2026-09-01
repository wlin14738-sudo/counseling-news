"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/i18n";
import { siteName } from "@/lib/site";
import LangSwitch from "@/components/LangSwitch";

export default function SiteHeader() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  useEffect(() => {
    document.documentElement.lang = isEn ? "en" : "zh-CN";
  }, [isEn]);

  const loc = isEn ? "en" : "zh";
  const nav = NAV[loc];
  const brand = siteName(loc);
  const brandLink = isEn ? "/en" : "/";
  const knowledgeLink = isEn ? "/en/topics" : "/topics";
  const subscribeLink = isEn ? "/en#subscribe" : "/#subscribe";

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href={brandLink} className="text-lg font-bold text-slate-900">
          {brand}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          <Link href={brandLink} className="hover:text-brand-600">
            {nav.home}
          </Link>
          <Link href={knowledgeLink} className="hover:text-brand-600">
            {nav.knowledge}
          </Link>
          <Link href={subscribeLink} className="hover:text-brand-600">
            {nav.subscribe}
          </Link>
          <Link href="/admin" className="hover:text-brand-600">
            {nav.admin}
          </Link>
          <LangSwitch />
        </nav>
      </div>
    </header>
  );
}
