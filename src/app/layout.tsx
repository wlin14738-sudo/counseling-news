import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "全球心理咨询行业资讯",
    template: "%s | 全球心理咨询行业资讯",
  },
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
        <header className="border-b border-slate-200 bg-white">
          <div className="container-page flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-bold text-slate-900">
              全球心理咨询行业资讯
            </Link>
            <nav className="flex items-center gap-4 text-sm text-slate-600">
              <Link href="/" className="hover:text-brand-600">
                首页
              </Link>
              <Link href="/topics" className="hover:text-brand-600">
                知识库
              </Link>
              <Link href="/#subscribe" className="hover:text-brand-600">
                订阅
              </Link>
              <Link href="/admin" className="hover:text-brand-600">
                后台
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 py-8">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="container-page py-6 text-center text-sm text-slate-500">
            全球心理咨询行业资讯 · 内容由 AI 翻译摘要，仅供学习参考，请以原文为准
          </div>
        </footer>
      </body>
    </html>
  );
}
