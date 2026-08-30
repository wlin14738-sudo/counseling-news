"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { SCHOOLS } from "@/lib/schools";

type Props = {
  article: {
    id: number;
    title: string;
    titleZh: string;
    summary: string;
    summaryZh: string;
    author: string;
    category: string;
    school: string;
    keywords: string;
    status: string;
  };
};

export default function EditArticle({ article }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: article.title,
    titleZh: article.titleZh,
    summary: article.summary,
    summaryZh: article.summaryZh,
    author: article.author,
    category: article.category,
    school: article.school,
    keywords: article.keywords,
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function save(status?: string) {
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/articles", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: article.id,
          ...form,
          ...(status ? { status } : {}),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg(status === "published" ? "已发布" : status === "rejected" ? "已拒绝" : "已保存");
        router.refresh();
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
        <label className="label">英文标题</label>
        <input
          className="input"
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
        />
      </div>
      <div>
        <label className="label">中文标题</label>
        <input
          className="input"
          value={form.titleZh}
          onChange={(e) => update("titleZh", e.target.value)}
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
      <div>
        <label className="label">中文摘要</label>
        <textarea
          className="input"
          rows={4}
          value={form.summaryZh}
          onChange={(e) => update("summaryZh", e.target.value)}
        />
      </div>
      <div>
        <label className="label">作者/来源</label>
        <input
          className="input"
          value={form.author}
          onChange={(e) => update("author", e.target.value)}
        />
      </div>
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
      <div>
        <label className="label">关键词（逗号分隔，1–5 个）</label>
        <input
          className="input"
          value={form.keywords}
          placeholder="如：睡眠, 阿尔茨海默症, 早期预警"
          onChange={(e) => update("keywords", e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="btn-primary" disabled={loading} onClick={() => save("published")}>
          发布
        </button>
        <button className="btn-secondary" disabled={loading} onClick={() => save()}>
          保存
        </button>
        <button className="btn-secondary text-red-600" disabled={loading} onClick={() => save("rejected")}>
          拒绝
        </button>
      </div>
      {msg && <p className="text-sm text-slate-600">{msg}</p>}
    </div>
  );
}
