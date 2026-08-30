"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";

type Props = {
  source: {
    id: number;
    name: string;
    nameZh: string;
    dailyLimit: number;
    defaultCategory: string;
    enabled: boolean;
  };
};

export default function SourceRow({ source }: Props) {
  const router = useRouter();
  const [dailyLimit, setDailyLimit] = useState(source.dailyLimit);
  const [defaultCategory, setDefaultCategory] = useState(source.defaultCategory);
  const [enabled, setEnabled] = useState(source.enabled);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function save() {
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/sources", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: source.id,
          dailyLimit,
          defaultCategory,
          enabled,
        }),
      });
      const data = await res.json();
      setMsg(res.ok ? "已保存" : data.error || "保存失败");
      router.refresh();
    } catch {
      setMsg("网络错误");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-end">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-slate-900">{source.nameZh || source.name}</p>
        <p className="truncate text-xs text-slate-400">{source.name}</p>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <label className="flex flex-col text-sm text-slate-600">
          每日额度
          <input
            type="number"
            min={1}
            max={100}
            value={dailyLimit}
            onChange={(e) => setDailyLimit(Number(e.target.value))}
            className="input mt-1 w-24"
          />
        </label>
        <label className="flex flex-col text-sm text-slate-600">
          默认板块
          <select
            value={defaultCategory}
            onChange={(e) => setDefaultCategory(e.target.value)}
            className="input mt-1 w-44"
          >
            <option value="">未分类</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          启用
        </label>
        <button className="btn-primary" disabled={loading} onClick={save}>
          {loading ? "保存中…" : "保存"}
        </button>
      </div>
      {msg && <span className="text-xs text-slate-500">{msg}</span>}
    </div>
  );
}
