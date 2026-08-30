"use client";

import { useState } from "react";
import Link from "next/link";

type Item = { slug: string; label: string; href: string };

export default function SchoolFilter({
  current,
  allHref,
  items,
}: {
  current: string;
  allHref: string;
  items: Item[];
}) {
  const [open, setOpen] = useState(current !== "");
  const activeLabel = current
    ? items.find((i) => i.slug === current)?.label || "全部流派"
    : "全部流派";

  return (
    <div>
      <div className="inline-flex flex-wrap items-center gap-2">
        <Link
          href={allHref}
          className={`rounded-full px-4 py-1.5 text-sm ${
            current === ""
              ? "bg-violet-600 text-white"
              : "bg-white text-slate-600 hover:bg-slate-100"
          }`}
        >
          全部流派
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
          aria-expanded={open}
        >
          <span>{open ? "收起流派" : "展开流派"}</span>
          <span className="text-xs">{open ? "▴" : "▾"}</span>
        </button>
      </div>

      {open && (
        <div className="mt-2 flex flex-wrap gap-2">
          {items.map((i) => (
            <Link
              key={i.slug}
              href={i.href}
              onClick={() => setOpen(false)}
              className={`rounded-full px-4 py-1.5 text-sm ${
                current === i.slug
                  ? "bg-violet-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
