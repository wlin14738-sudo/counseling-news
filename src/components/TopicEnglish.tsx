"use client";

import { useState } from "react";
import Markdown from "./Markdown";

type Props = {
  title: string;
  summary: string;
  body: string;
};

export default function TopicEnglish({ title, summary, body }: Props) {
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
          <Markdown content={body} />
        </div>
      )}
    </div>
  );
}
