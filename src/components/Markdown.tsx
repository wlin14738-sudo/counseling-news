import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

// 统一渲染 Markdown 正文，带 typography 排版。默认不解析原始 HTML，安全性足够。
export default function Markdown({ content }: Props) {
  return (
    <div className="prose prose-slate max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || ""}</ReactMarkdown>
    </div>
  );
}
