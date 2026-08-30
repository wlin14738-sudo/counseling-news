import Link from "next/link";
import { formatDate } from "@/lib/utils";

type Props = {
  id: number;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  publishedAt: Date;
  sourceName?: string;
  sourceNameZh?: string;
  category?: string;
  keywords?: string;
};

export default function ArticleCard({
  id,
  title,
  titleZh,
  summary,
  summaryZh,
  publishedAt,
  sourceName,
  sourceNameZh,
  category,
  keywords,
}: Props) {
  const zhTitle = titleZh || title;
  const zhSummary = summaryZh || summary;
  const sourceLabel = sourceNameZh || sourceName || "";

  return (
    <article className="card overflow-hidden">
      <div className="p-5">
        <div className="mb-2 flex items-center gap-3 text-xs text-slate-500">
          {category && (
            <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-medium text-brand-700">
              {category}
            </span>
          )}
          {sourceLabel && <span className="text-slate-600">{sourceLabel}</span>}
          <span>{formatDate(publishedAt)}</span>
        </div>
        <Link href={`/articles/${id}`}>
          <h2 className="mb-2 text-xl font-semibold text-slate-900 hover:text-brand-600">
            {zhTitle}
          </h2>
        </Link>
        {titleZh && title !== titleZh && (
          <p className="mb-2 text-sm text-slate-400">EN: {title}</p>
        )}
        <p className="text-sm leading-relaxed text-slate-600">{zhSummary}</p>
        {keywords && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {keywords
              .split(/[,，、;；]/)
              .map((k) => k.trim())
              .filter(Boolean)
              .slice(0, 5)
              .map((k, i) => (
                <span
                  key={i}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500"
                >
                  {k}
                </span>
              ))}
          </div>
        )}
      </div>
    </article>
  );
}
