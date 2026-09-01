"use client";

import { useState } from "react";
import TopicBody from "./TopicBody";
import type { FigureEntry, TimelineEntry } from "@/lib/topicTypes";

type Props = {
  title: string;
  summary: string;
  body: string;
  timeline?: TimelineEntry[];
  figures?: FigureEntry[];
  timelineChina?: TimelineEntry[];
  figuresChina?: FigureEntry[];
};

export default function TopicEnglish({
  title,
  summary,
  body,
  timeline,
  figures,
  timelineChina,
  figuresChina,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-sm font-semibold text-slate-700 hover:text-brand-600"
      >
        {open ? "Hide English Original ▲" : "Show English Original ▼"}
      </button>
      {open && (
        <div className="mt-4 space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          {summary && <p className="text-sm text-slate-600">{summary}</p>}
          <TopicBody
            body={body}
            timeline={timeline}
            figures={figures}
            timelineChina={timelineChina}
            figuresChina={figuresChina}
            lang="en"
          />
        </div>
      )}
    </div>
  );
}
