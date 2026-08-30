import type { FigureEntry } from "@/lib/topicTypes";

type Props = {
  figures: FigureEntry[];
  lang?: "zh" | "en";
};

export default function KeyFigures({ figures, lang = "zh" }: Props) {
  if (!figures || figures.length === 0) return null;

  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {figures.map((f, i) => (
        <div
          key={i}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-baseline justify-between gap-2">
            <h4 className="text-base font-semibold text-slate-900">
              {lang === "en" ? f.nameEn : f.nameZh}
            </h4>
            <span className="shrink-0 text-xs text-slate-400">{f.years}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-brand-600">
            {lang === "en" ? f.titleEn : f.titleZh}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en" ? f.bioEn : f.bioZh}
          </p>
        </div>
      ))}
    </div>
  );
}
