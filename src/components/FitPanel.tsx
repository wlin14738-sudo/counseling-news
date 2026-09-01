import Markdown from "./Markdown";
import type { FitBlock } from "@/lib/topicTypes";

type Props = {
  client?: FitBlock | null;
  practitioner?: FitBlock | null;
  lang?: "zh" | "en";
};

// 开篇的「判断板块」：两个默认折叠的 accordion（来访者 / 咨询师），
// 点开后展开对应 Markdown 内容；不影响下方正文阅读。
export default function FitPanel({ client, practitioner, lang = "zh" }: Props) {
  const zh = lang === "zh";
  const clientContent = client?.[zh ? "zh" : "en"];
  const practitionerContent = practitioner?.[zh ? "zh" : "en"];

  if (!clientContent && !practitionerContent) return null;

  const title = zh ? "这个取向适合你吗？" : "Is this orientation right for you?";
  const hint = zh
    ? "点击下方标题展开判断，不影响正文阅读。"
    : "Click a heading below to expand; this does not affect the article below.";
  const clientLabel = zh ? "我是来访者" : "I am a client";
  const clientQ = zh ? "这个流派适合我吗？" : "is this therapy right for me?";
  const practitionerLabel = zh ? "我是咨询师 / 学习者" : "I am a practitioner / trainee";
  const practitionerQ = zh ? "这个取向适合我吗？" : "is this orientation right for me?";

  return (
    <section className="card overflow-hidden">
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
        <p className="text-sm font-semibold text-brand-700">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{hint}</p>
      </div>
      <div className="divide-y divide-slate-200">
        {clientContent && (
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-slate-800 hover:bg-slate-50">
              <span>
                {clientLabel}
                <span className="ml-2 font-normal text-slate-500">{clientQ}</span>
              </span>
              <span className="text-brand-600">+</span>
            </summary>
            <div className="px-6 pb-6">
              <Markdown content={clientContent} />
            </div>
          </details>
        )}
        {practitionerContent && (
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-slate-800 hover:bg-slate-50">
              <span>
                {practitionerLabel}
                <span className="ml-2 font-normal text-slate-500">{practitionerQ}</span>
              </span>
              <span className="text-brand-600">+</span>
            </summary>
            <div className="px-6 pb-6">
              <Markdown content={practitionerContent} />
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
