import Markdown from "./Markdown";
import Timeline from "./Timeline";
import KeyFigures from "./KeyFigures";
import type { TimelineEntry, FigureEntry } from "@/lib/topicTypes";

type Props = {
  body: string;
  timeline?: TimelineEntry[];
  figures?: FigureEntry[];
  lang?: "zh" | "en";
};

// 把 Markdown 正文按 %%TIMELINE%% / %%FIGURES%% 占位符拆开，
// 在对应位置插入时间轴与人物卡片组件。
export default function TopicBody({ body, timeline, figures, lang = "zh" }: Props) {
  const parts = (body || "").split(/(%%TIMELINE%%|%%FIGURES%%)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part === "%%TIMELINE%%") {
          return <Timeline key={i} entries={timeline || []} lang={lang} />;
        }
        if (part === "%%FIGURES%%") {
          return <KeyFigures key={i} figures={figures || []} lang={lang} />;
        }
        return <Markdown key={i} content={part} />;
      })}
    </>
  );
}
