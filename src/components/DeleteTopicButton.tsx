"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteTopicButton({
  id,
  label = "删除",
  redirectTo,
}: {
  id: number;
  label?: string;
  redirectTo?: string;
}) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  async function doDelete() {
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/topics?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setConfirming(false);
        if (redirectTo) router.push(redirectTo);
        else router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "删除失败");
      }
    } catch {
      alert("网络错误");
    } finally {
      setBusy(false);
    }
  }

  if (confirming) {
    return (
      <span className="inline-flex items-center gap-2">
        <button
          onClick={doDelete}
          disabled={busy}
          className="btn bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
        >
          {busy ? "删除中…" : "确认删除"}
        </button>
        <button onClick={() => setConfirming(false)} disabled={busy} className="btn-secondary">
          取消
        </button>
      </span>
    );
  }

  return (
    <button onClick={() => setConfirming(true)} className="btn-secondary text-red-600 hover:bg-red-50">
      {label}
    </button>
  );
}
