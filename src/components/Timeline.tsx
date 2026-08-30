import type { TimelineEntry } from "@/lib/topicTypes";

type Props = {
  entries: TimelineEntry[];
  lang?: "zh" | "en";
};

export default function Timeline({ entries, lang = "zh" }: Props) {
  if (!entries || entries.length === 0) return null;

  return (
    <ol className="relative my-6 space-y-6 border-l-2 border-brand-100 pl-6">
      {entries.map((e, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[2.05rem] top-1 flex h-4 w-4 items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-100" />
          </span>
          <p className="text-sm font-bold tracking-wide text-brand-600">
            {e.year}
          </p>
          <h4 className="mt-0.5 text-base font-semibold text-slate-900">
            {lang === "en" ? e.titleEn : e.titleZh}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {lang === "en" ? e.bodyEn : e.bodyZh}
          </p>
        </li>
      ))}
    </ol>
  );
}
