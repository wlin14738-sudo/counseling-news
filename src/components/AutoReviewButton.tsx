"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AutoReviewButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  async function run() {
    setBusy(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/auto-review", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setMsg(
          data.published > 0
            ? `已自动审核发布 ${data.published} 篇`
            : "暂无可自动发布的草稿（需具备中文标题+板块+摘要）",
        );
        router.refresh();
      } else {
        setMsg(data.error || "操作失败");
      }
    } catch {
      setMsg("网络错误，请重试");
    } finally {
      setBusy(false);
    }
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button className="btn-secondary" onClick={run} disabled={busy}>
        {busy ? "审核中…" : "自动审核 20 篇"}
      </button>
      {msg && <span className="text-xs text-slate-500">{msg}</span>}
    </span>
  );
}
