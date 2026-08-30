"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminTools() {
  const router = useRouter();
  const [limit, setLimit] = useState(10);
  const [retranslateAll, setRetranslateAll] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [busy, setBusy] = useState<"retrans" | "clear" | null>(null);
  const [msg, setMsg] = useState("");

  async function retranslate() {
    setBusy("retrans");
    setMsg("");
    try {
      const res = await fetch("/api/admin/retranslate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ limit, all: retranslateAll }),
      });
      const data = await res.json();
      if (data.ok) {
        setMsg(
          `已重译 ${data.processed} 篇，成功 ${data.succeeded} 篇${
            data.failed ? `，失败 ${data.failed} 篇（已保留原文）` : ""
          }`,
        );
        router.refresh();
      } else {
        setMsg(data.error || "重译失败");
      }
    } catch {
      setMsg("网络错误");
    } finally {
      setBusy(null);
    }
  }

  async function clearQueue() {
    setBusy("clear");
    setMsg("");
    try {
      const res = await fetch("/api/admin/clear-queue", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ confirm: confirmText }),
      });
      const data = await res.json();
      if (data.ok) {
        setMsg(`已清空 ${data.deleted} 篇待审核草稿`);
        setConfirmText("");
        router.refresh();
      } else {
        setMsg(data.error || "清空失败");
      }
    } catch {
      setMsg("网络错误");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="card space-y-4 p-6">
        <h2 className="text-lg font-semibold text-slate-900">重译队列</h2>
        <p className="text-sm text-slate-600">
          用当前翻译引擎把待审核草稿重新翻译成中文（默认 MyMemory 免费）。为避免超出免费额度，可限制篇数。
        </p>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            重译篇数
            <input
              type="number"
              min={1}
              max={50}
              value={limit}
              disabled={retranslateAll}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="input w-24"
            />
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={retranslateAll}
              onChange={(e) => setRetranslateAll(e.target.checked)}
            />
            重译全部（可能超出免费额度）
          </label>
        </div>
        <button className="btn-primary" disabled={busy !== null} onClick={retranslate}>
          {busy === "retrans" ? "翻译中…" : "开始重译"}
        </button>
        {msg && <p className="text-sm text-slate-600">{msg}</p>}
      </section>

      <section className="card space-y-4 p-6">
        <h2 className="text-lg font-semibold text-red-700">清空队列</h2>
        <p className="text-sm text-slate-600">
          删除全部待审核草稿（已发布的文章不受影响）。此操作不可撤销，如需保留请先发布。
        </p>
        <div className="flex items-center gap-2">
          <input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="输入「清空」两字以确认"
            className="input"
          />
          <button
            className="btn bg-red-600 text-white hover:bg-red-700 disabled:opacity-40"
            disabled={confirmText !== "清空" || busy !== null}
            onClick={clearQueue}
          >
            {busy === "clear" ? "清空中…" : "确认清空"}
          </button>
        </div>
        {msg && <p className="text-sm text-slate-600">{msg}</p>}
      </section>
    </div>
  );
}
