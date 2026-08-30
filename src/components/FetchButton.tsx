"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FetchButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  async function run() {
    setBusy(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/fetch", { method: "POST" });
      const data = await res.json();
      if (data.ok) {
        setMsg(
          `抓取完成：新增草稿 ${data.created} 篇，已处理 ${data.processed} 篇${
            data.failedSources ? `，失败源 ${data.failedSources} 个` : ""
          }${data.skippedDuplicates ? `，跳过重复 ${data.skippedDuplicates} 篇` : ""}`,
        );
        router.refresh();
      } else {
        setMsg(data.error || "抓取失败");
      }
    } catch {
      setMsg("网络错误，请重试");
    } finally {
      setBusy(false);
    }
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button className="btn-primary" onClick={run} disabled={busy}>
        {busy ? "抓取中…" : "立即抓取"}
      </button>
      {msg && <span className="text-xs text-slate-500">{msg}</span>}
    </span>
  );
}
