"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { categoryLabel } from "@/lib/categories";
import { schoolLabel } from "@/lib/schools";
import { formatDate } from "@/lib/utils";
import DeleteArticleButton from "@/components/DeleteArticleButton";

export type DraftItem = {
  id: number;
  title: string;
  titleZh: string;
  category: string;
  school: string;
  aiConfidence: number;
  fetchedAt: string;
  sourceName: string;
};

export default function DraftQueue({
  drafts,
  duplicateIds,
}: {
  drafts: DraftItem[];
  duplicateIds: number[];
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const dupSet = useMemo(() => new Set(duplicateIds), [duplicateIds]);

  function toggle(id: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    setSelected((prev) => {
      if (prev.size === drafts.length) return new Set();
      return new Set(drafts.map((d) => d.id));
    });
  }

  async function publishSelected() {
    const ids = Array.from(selected);
    if (ids.length === 0) return;
    setBusy(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/articles/bulk", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ids }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg(`已发布 ${data.count} 篇`);
        setSelected(new Set());
        router.refresh();
      } else {
        setMsg(data.error || "发布失败");
      }
    } catch {
      setMsg("网络错误");
    } finally {
      setBusy(false);
    }
  }

  if (drafts.length === 0) {
    return (
      <div className="card p-8 text-center text-slate-500">
        暂无待审核内容。运行 <code>/api/cron/fetch</code> 拉取最新资讯。
      </div>
    );
  }

  return (
    <div className="card space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={selected.size === drafts.length && drafts.length > 0}
            onChange={toggleAll}
          />
          全选（{selected.size}/{drafts.length}）
        </label>
        {selected.size > 0 && (
          <button className="btn-primary" onClick={publishSelected} disabled={busy}>
            {busy ? "发布中…" : `批量发布 ${selected.size} 篇`}
          </button>
        )}
        {msg && <span className="text-xs text-slate-500">{msg}</span>}
      </div>

      <ul className="divide-y divide-slate-100">
        {drafts.map((a) => (
          <li
            key={a.id}
            className="flex items-center justify-between gap-4 px-4 py-4"
          >
            <div className="flex min-w-0 items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0"
                checked={selected.has(a.id)}
                onChange={() => toggle(a.id)}
              />
              <div className="min-w-0">
                <p className="truncate font-medium text-slate-900">
                  {a.titleZh || a.title}
                </p>
                <p className="truncate text-sm text-slate-500">
                  {dupSet.has(a.id) && (
                    <span className="mr-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-700">
                      ⚠️ 疑似重复
                    </span>
                  )}
                  {categoryLabel(a.category) || "未分类"} ·{" "}
                  {schoolLabel(a.school) || "未标流派"} · {a.sourceName} ·{" "}
                  {formatDate(a.fetchedAt)} · AI 置信度{" "}
                  {Math.round(a.aiConfidence * 100)}%
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Link href={`/admin/articles/${a.id}`} className="btn-secondary">
                编辑
              </Link>
              <DeleteArticleButton id={a.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
