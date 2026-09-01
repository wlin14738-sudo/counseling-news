import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "全球心理咨询行业资讯",
  description:
    "每日聚合全球心理咨询与心理健康行业最新资讯，AI 翻译中文摘要，助从业者把握行业脉搏。",
  keywords: ["心理咨询", "心理健康", "行业资讯", "心理治疗", "Counseling", "Mental Health"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 py-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
