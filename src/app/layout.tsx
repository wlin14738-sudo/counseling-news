import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import "./globals.css";
import { NAV, PAGE_TEXT, type Locale } from "@/lib/i18n";
import { siteName } from "@/lib/site";
import LangSwitch from "@/components/LangSwitch";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "全球心理咨询行业资讯",
  description:
    "每日聚合全球心理咨询与心理健康行业最新资讯，AI 翻译中文摘要，助从业者把握行业脉搏。",
  keywords: ["心理咨询", "心理健康", "行业资讯", "心理治疗", "Counseling", "Mental Health"],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const hd = await headers();
  const locale: Locale = hd.get("x-locale") === "en" ? "en" : "zh";
  const nav = NAV[locale];
  const brand = siteName(locale);
  const brandLink = locale === "en" ? "/en" : "/";
  const knowledgeLink = locale === "en" ? "/en/topics" : "/topics";
  const subscribeLink = locale === "en" ? "/en#subscribe" : "/#subscribe";
  const adminLink = "/admin";
  const footerText = `${brand} · ${PAGE_TEXT[locale].footerNote}`;

  return (
    <html lang={locale === "en" ? "en" : "zh-CN"}>
      <body className="flex min-h-screen flex-col">
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
              <Link href={adminLink} className="hover:text-brand-600">
                {nav.admin}
              </Link>
              <LangSwitch />
            </nav>
          </div>
        </header>
        <main className="flex-1 py-8">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="container-page py-6 text-center text-sm text-slate-500">
            {footerText}
          </div>
        </footer>
      </body>
    </html>
  );
}
