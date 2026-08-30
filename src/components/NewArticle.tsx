"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { SCHOOLS } from "@/lib/schools";

type Source = { id: number; name: string; nameZh: string };

export default function NewArticle({ sources }: { sources: Source[] }) {
  const router = useRouter();
  const [form, setForm] = useState({
    titleZh: "",
    title: "",
    summaryZh: "",
    summary: "",
    contentZh: "",
    content: "",
    author: "",
    category: "",
    school: "",
    keywords: "",
    sourceId: "",
    status: "published",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function update<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function create() {
    if (!form.titleZh.trim()) {
      setMsg("中文标题不能为空");
      return;
    }
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/articles", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          sourceId: form.sourceId ? Number(form.sourceId) : undefined,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push("/admin");
      } else {
        setMsg(data.error || "保存失败");
      }
    } catch {
      setMsg("网络错误");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card space-y-4 p-6">
      <div>
        <label className="label">中文标题 *</label>
        <input
          className="input"
          value={form.titleZh}
          onChange={(e) => update("titleZh", e.target.value)}
          placeholder="必填"
        />
      </div>
      <div>
        <label className="label">英文标题</label>
        <input
          className="input"
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">中文摘要</label>
          <textarea
            className="input"
            rows={3}
            value={form.summaryZh}
            onChange={(e) => update("summaryZh", e.target.value)}
          />
        </div>
        <div>
          <label className="label">英文摘要</label>
          <textarea
            className="input"
            rows={3}
            value={form.summary}
            onChange={(e) => update("summary", e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">中文正文</label>
          <textarea
            className="input"
            rows={5}
            value={form.contentZh}
            onChange={(e) => update("contentZh", e.target.value)}
          />
        </div>
        <div>
          <label className="label">英文正文</label>
          <textarea
            className="input"
            rows={5}
            value={form.content}
            onChange={(e) => update("content", e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">作者/机构</label>
          <input
            className="input"
            value={form.author}
            onChange={(e) => update("author", e.target.value)}
          />
        </div>
        <div>
          <label className="label">来源</label>
          <select
            className="input"
            value={form.sourceId}
            onChange={(e) => update("sourceId", e.target.value)}
          >
            <option value="">自动归入「手动录入」</option>
            {sources.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nameZh || s.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">板块</label>
          <select
            className="input"
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
          >
            <option value="">未分类</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">流派</label>
          <select
            className="input"
            value={form.school}
            onChange={(e) => update("school", e.target.value)}
          >
            <option value="">未分类</option>
            {SCHOOLS.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="label">关键词（逗号分隔，1–5 个）</label>
        <input
          className="input"
          value={form.keywords}
          placeholder="如：正念, 焦虑, 青少年"
          onChange={(e) => update("keywords", e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={form.status === "published"}
            onChange={(e) => update("status", e.target.checked ? "published" : "draft")}
            className="h-4 w-4"
          />
          直接发布到前台
        </label>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="btn-primary" disabled={loading} onClick={create}>
          {loading ? "保存中…" : "保存"}
        </button>
        <button className="btn-secondary" disabled={loading} onClick={() => router.push("/admin")}>
          取消
        </button>
      </div>
      {msg && <p className="text-sm text-slate-600">{msg}</p>}
    </div>
  );
}
