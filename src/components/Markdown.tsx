import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify, nodeToText } from "@/lib/text";

type Props = {
  content: string;
  className?: string;
};

// 统一渲染 Markdown 正文，带 typography 排版与自定义组件（锚点、提示框、表格）。
// 默认不解析原始 HTML，安全性足够。
export default function Markdown({ content, className }: Props) {
  return (
    <div className={`prose prose-slate max-w-none ${className || ""}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const slug = slugify(nodeToText(children));
            return (
              <h2
                id={slug}
                className="scroll-mt-24 border-t border-slate-200 pt-8 text-2xl font-bold text-slate-900"
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const slug = slugify(nodeToText(children));
            return (
              <h3
                id={slug}
                className="scroll-mt-24 text-xl font-semibold text-slate-900"
              >
                {children}
              </h3>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="not-prose my-6 rounded-r-xl border-l-4 border-brand-500 bg-brand-50 px-5 py-4">
              <div className="text-sm leading-relaxed text-slate-700">
                {children}
              </div>
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table className="w-full text-sm">{children}</table>
            </div>
          ),
        }}
      >
        {content || ""}
      </ReactMarkdown>
    </div>
  );
}
