"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SCHOOLS } from "@/lib/schools";
import { TOPIC_CATEGORIES } from "@/lib/topics";

type TopicData = {
  id: number;
  slug: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  body: string;
  bodyZh: string;
  category: string;
  school: string;
  status: string;
};

type Props = {
  topic?: TopicData;
};

export default function EditTopic({ topic }: Props) {
  const router = useRouter();
  const editing = Boolean(topic);
  const [form, setForm] = useState({
    slug: topic?.slug || "",
    title: topic?.title || "",
    titleZh: topic?.titleZh || "",
    summary: topic?.summary || "",
    summaryZh: topic?.summaryZh || "",
    body: topic?.body || "",
    bodyZh: topic?.bodyZh || "",
    category: topic?.category || "school",
    school: topic?.school || "",
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
      const res = await fetch("/api/admin/topics", {
        method: editing ? "PATCH" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(editing ? { id: topic!.id } : {}),
          ...form,
          ...(status ? { status } : {}),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg(status === "published" ? "已发布" : status === "draft" ? "已存为草稿" : "已保存");
        router.push("/admin/topics");
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
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">Slug（唯一，用于前台链接）</label>
          <input
            className="input"
            value={form.slug}
            onChange={(e) => update("slug", e.target.value)}
            placeholder="如 cbt"
          />
        </div>
        <div>
          <label className="label">分类</label>
          <select
            className="input"
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
          >
            {TOPIC_CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">英文标题</label>
          <input className="input" value={form.title} onChange={(e) => update("title", e.target.value)} />
        </div>
        <div>
          <label className="label">中文标题</label>
          <input className="input" value={form.titleZh} onChange={(e) => update("titleZh", e.target.value)} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">英文摘要</label>
          <textarea className="input" rows={2} value={form.summary} onChange={(e) => update("summary", e.target.value)} />
        </div>
        <div>
          <label className="label">中文摘要</label>
          <textarea className="input" rows={2} value={form.summaryZh} onChange={(e) => update("summaryZh", e.target.value)} />
        </div>
      </div>
      <div>
        <label className="label">英文正文（Markdown）</label>
        <textarea
          className="input font-mono text-sm"
          rows={12}
          value={form.body}
          onChange={(e) => update("body", e.target.value)}
        />
      </div>
      <div>
        <label className="label">中文正文（Markdown）</label>
        <textarea
          className="input font-mono text-sm"
          rows={12}
          value={form.bodyZh}
          onChange={(e) => update("bodyZh", e.target.value)}
        />
      </div>
      <div>
        <label className="label">所属流派（可选，用于「最新动态」联动）</label>
        <select
          className="input"
          value={form.school}
          onChange={(e) => update("school", e.target.value)}
        >
          <option value="">不关联</option>
          {SCHOOLS.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="btn-primary" disabled={loading} onClick={() => save("published")}>
          发布
        </button>
        <button className="btn-secondary" disabled={loading} onClick={() => save()}>
          保存
        </button>
        <button className="btn-secondary text-red-600" disabled={loading} onClick={() => save("draft")}>
          存为草稿
        </button>
      </div>
      {msg && <p className="text-sm text-slate-600">{msg}</p>}
    </div>
  );
}
