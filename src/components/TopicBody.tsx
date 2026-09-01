import Markdown from "./Markdown";
import Timeline from "./Timeline";
import KeyFigures from "./KeyFigures";
import type { TimelineEntry, FigureEntry } from "@/lib/topicTypes";

type Props = {
  body: string;
  timeline?: TimelineEntry[];
  figures?: FigureEntry[];
  timelineChina?: TimelineEntry[];
  figuresChina?: FigureEntry[];
  lang?: "zh" | "en";
};

// 把 Markdown 正文按 %%TIMELINE%% / %%FIGURES%% 占位符拆开，
// 在对应位置插入时间轴与人物卡片组件。%%TIMELINE_CHINA%% / %%FIGURES_CHINA%%
// 分别插入中国部分的对应组件。
export default function TopicBody({
  body,
  timeline,
  figures,
  timelineChina,
  figuresChina,
  lang = "zh",
}: Props) {
  const parts = (body || "").split(
    /(%%TIMELINE%%|%%FIGURES%%|%%TIMELINE_CHINA%%|%%FIGURES_CHINA%%)/g,
  );

  return (
    <>
      {parts.map((part, i) => {
        if (part === "%%TIMELINE%%") {
          return <Timeline key={i} entries={timeline || []} lang={lang} />;
        }
        if (part === "%%FIGURES%%") {
          return <KeyFigures key={i} figures={figures || []} lang={lang} />;
        }
        if (part === "%%TIMELINE_CHINA%%") {
          return <Timeline key={i} entries={timelineChina || []} lang={lang} />;
        }
        if (part === "%%FIGURES_CHINA%%") {
          return <KeyFigures key={i} figures={figuresChina || []} lang={lang} />;
        }
        return <Markdown key={i} content={part} />;
      })}
    </>
  );
}
