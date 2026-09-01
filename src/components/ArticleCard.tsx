import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { localizeHref, type Locale } from "@/lib/i18n";

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
  school?: string;
  keywords?: string;
  lang?: Locale;
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
  school,
  keywords,
  lang = "zh",
}: Props) {
  const mainTitle = lang === "zh" ? titleZh || title : title || titleZh;
  const mainSummary = lang === "zh" ? summaryZh || summary : summary || summaryZh;
  const sourceLabel =
    lang === "zh" ? sourceNameZh || sourceName || "" : sourceName || sourceNameZh || "";
  const href = localizeHref(lang, `/articles/${id}`);

  return (
    <article className="card overflow-hidden">
      <div className="p-5">
        <div className="mb-2 flex items-center gap-3 text-xs text-slate-500">
          {category && (
            <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-medium text-brand-700">
              {category}
            </span>
          )}
          {school && (
            <span className="rounded-full bg-violet-50 px-2.5 py-0.5 font-medium text-violet-700">
              {school}
            </span>
          )}
          {sourceLabel && <span className="text-slate-600">{sourceLabel}</span>}
          <span>{formatDate(publishedAt)}</span>
        </div>
        <Link href={href}>
          <h2 className="mb-2 text-xl font-semibold text-slate-900 hover:text-brand-600">
            {mainTitle}
          </h2>
        </Link>
        <p className="text-sm leading-relaxed text-slate-600">{mainSummary}</p>
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
