"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SCHOOLS } from "@/lib/schools";
import { TOPIC_CATEGORIES } from "@/lib/topics";
import type { FigureEntry, FitBlock, TimelineEntry } from "@/lib/topicTypes";

type TopicData = {
  id: number;
  slug: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  body: string;
  bodyZh: string;
  timeline: TimelineEntry[];
  figures: FigureEntry[];
  timelineChina: TimelineEntry[];
  figuresChina: FigureEntry[];
  fitClient: FitBlock;
  fitPractitioner: FitBlock;
  category: string;
  school: string;
  status: string;
};

type Props = {
  topic?: TopicData;
};

const emptyTimeline = (): TimelineEntry => ({
  year: "",
  titleZh: "",
  titleEn: "",
  bodyZh: "",
  bodyEn: "",
});

const emptyFigure = (): FigureEntry => ({
  nameZh: "",
  nameEn: "",
  years: "",
  titleZh: "",
  titleEn: "",
  bioZh: "",
  bioEn: "",
});

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
  const [timeline, setTimeline] = useState<TimelineEntry[]>(topic?.timeline || []);
  const [figures, setFigures] = useState<FigureEntry[]>(topic?.figures || []);
  const [timelineChina, setTimelineChina] = useState<TimelineEntry[]>(topic?.timelineChina || []);
  const [figuresChina, setFiguresChina] = useState<FigureEntry[]>(topic?.figuresChina || []);
  const [fitClient, setFitClient] = useState<FitBlock>(topic?.fitClient || {});
  const [fitPractitioner, setFitPractitioner] = useState<FitBlock>(topic?.fitPractitioner || {});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function move<T>(arr: T[], i: number, dir: number): T[] {
    const next = [...arr];
    const j = i + dir;
    if (j < 0 || j >= next.length) return next;
    [next[i], next[j]] = [next[j], next[i]];
    return next;
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
          timeline,
          figures,
          timelineChina,
          figuresChina,
          fitClient,
          fitPractitioner,
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
        <label className="label">英文正文（Markdown，可用 %%TIMELINE%% / %%FIGURES%% 定位插入）</label>
        <textarea
          className="input font-mono text-sm"
          rows={10}
          value={form.body}
          onChange={(e) => update("body", e.target.value)}
        />
      </div>
      <div>
        <label className="label">中文正文（Markdown，可用 %%TIMELINE%% / %%FIGURES%% 定位插入）</label>
        <textarea
          className="input font-mono text-sm"
          rows={10}
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

      <section className="rounded-xl border border-slate-200 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">发展史时间轴</h2>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setTimeline((a) => [...a, emptyTimeline()])}
          >
            新增条目
          </button>
        </div>
        {timeline.length === 0 && (
          <p className="text-xs text-slate-400">暂无时间轴条目。</p>
        )}
        {timeline.map((t, i) => (
          <div key={i} className="mb-4 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm">
            <div className="grid gap-2 sm:grid-cols-2">
              <input className="input" value={t.year} placeholder="年份" onChange={(e) => setTimeline((a) => a.map((x, j) => (j === i ? { ...x, year: e.target.value } : x)))} />
              <input className="input" value={t.titleZh} placeholder="中文标题" onChange={(e) => setTimeline((a) => a.map((x, j) => (j === i ? { ...x, titleZh: e.target.value } : x)))} />
              <input className="input" value={t.titleEn} placeholder="英文标题" onChange={(e) => setTimeline((a) => a.map((x, j) => (j === i ? { ...x, titleEn: e.target.value } : x)))} />
            </div>
            <div className="mt-2 grid gap-2">
              <textarea className="input" rows={2} value={t.bodyZh} placeholder="中文说明" onChange={(e) => setTimeline((a) => a.map((x, j) => (j === i ? { ...x, bodyZh: e.target.value } : x)))} />
              <textarea className="input" rows={2} value={t.bodyEn} placeholder="英文说明" onChange={(e) => setTimeline((a) => a.map((x, j) => (j === i ? { ...x, bodyEn: e.target.value } : x)))} />
            </div>
            <div className="mt-2 flex gap-2">
              <button type="button" className="btn-secondary" onClick={() => setTimeline((a) => move(a, i, -1))}>↑</button>
              <button type="button" className="btn-secondary" onClick={() => setTimeline((a) => move(a, i, 1))}>↓</button>
              <button type="button" className="btn-secondary text-red-600" onClick={() => setTimeline((a) => a.filter((_, j) => j !== i))}>删除</button>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">核心人物</h2>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setFigures((a) => [...a, emptyFigure()])}
          >
            新增人物
          </button>
        </div>
        {figures.length === 0 && (
          <p className="text-xs text-slate-400">暂无人物条目。</p>
        )}
        {figures.map((f, i) => (
          <div key={i} className="mb-4 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm">
            <div className="grid gap-2 sm:grid-cols-2">
              <input className="input" value={f.nameZh} placeholder="中文姓名" onChange={(e) => setFigures((a) => a.map((x, j) => (j === i ? { ...x, nameZh: e.target.value } : x)))} />
              <input className="input" value={f.nameEn} placeholder="英文姓名" onChange={(e) => setFigures((a) => a.map((x, j) => (j === i ? { ...x, nameEn: e.target.value } : x)))} />
              <input className="input" value={f.years} placeholder="生卒年" onChange={(e) => setFigures((a) => a.map((x, j) => (j === i ? { ...x, years: e.target.value } : x)))} />
              <input className="input" value={f.titleZh} placeholder="中文定位" onChange={(e) => setFigures((a) => a.map((x, j) => (j === i ? { ...x, titleZh: e.target.value } : x)))} />
              <input className="input" value={f.titleEn} placeholder="英文定位" onChange={(e) => setFigures((a) => a.map((x, j) => (j === i ? { ...x, titleEn: e.target.value } : x)))} />
            </div>
            <div className="mt-2 grid gap-2">
              <textarea className="input" rows={2} value={f.bioZh} placeholder="中文生平/贡献" onChange={(e) => setFigures((a) => a.map((x, j) => (j === i ? { ...x, bioZh: e.target.value } : x)))} />
              <textarea className="input" rows={2} value={f.bioEn} placeholder="英文生平/贡献" onChange={(e) => setFigures((a) => a.map((x, j) => (j === i ? { ...x, bioEn: e.target.value } : x)))} />
            </div>
            <div className="mt-2 flex gap-2">
              <button type="button" className="btn-secondary" onClick={() => setFigures((a) => move(a, i, -1))}>↑</button>
              <button type="button" className="btn-secondary" onClick={() => setFigures((a) => move(a, i, 1))}>↓</button>
              <button type="button" className="btn-secondary text-red-600" onClick={() => setFigures((a) => a.filter((_, j) => j !== i))}>删除</button>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">中国发展史时间轴</h2>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setTimelineChina((a) => [...a, emptyTimeline()])}
          >
            新增条目
          </button>
        </div>
        {timelineChina.length === 0 && (
          <p className="text-xs text-slate-400">暂无中国时间轴条目。</p>
        )}
        {timelineChina.map((t, i) => (
          <div key={i} className="mb-4 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm">
            <div className="grid gap-2 sm:grid-cols-2">
              <input className="input" value={t.year} placeholder="年份" onChange={(e) => setTimelineChina((a) => a.map((x, j) => (j === i ? { ...x, year: e.target.value } : x)))} />
              <input className="input" value={t.titleZh} placeholder="中文标题" onChange={(e) => setTimelineChina((a) => a.map((x, j) => (j === i ? { ...x, titleZh: e.target.value } : x)))} />
              <input className="input" value={t.titleEn} placeholder="英文标题" onChange={(e) => setTimelineChina((a) => a.map((x, j) => (j === i ? { ...x, titleEn: e.target.value } : x)))} />
            </div>
            <div className="mt-2 grid gap-2">
              <textarea className="input" rows={2} value={t.bodyZh} placeholder="中文说明" onChange={(e) => setTimelineChina((a) => a.map((x, j) => (j === i ? { ...x, bodyZh: e.target.value } : x)))} />
              <textarea className="input" rows={2} value={t.bodyEn} placeholder="英文说明" onChange={(e) => setTimelineChina((a) => a.map((x, j) => (j === i ? { ...x, bodyEn: e.target.value } : x)))} />
            </div>
            <div className="mt-2 flex gap-2">
              <button type="button" className="btn-secondary" onClick={() => setTimelineChina((a) => move(a, i, -1))}>↑</button>
              <button type="button" className="btn-secondary" onClick={() => setTimelineChina((a) => move(a, i, 1))}>↓</button>
              <button type="button" className="btn-secondary text-red-600" onClick={() => setTimelineChina((a) => a.filter((_, j) => j !== i))}>删除</button>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">中国核心人物</h2>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setFiguresChina((a) => [...a, emptyFigure()])}
          >
            新增人物
          </button>
        </div>
        {figuresChina.length === 0 && (
          <p className="text-xs text-slate-400">暂无中国人物条目。</p>
        )}
        {figuresChina.map((f, i) => (
          <div key={i} className="mb-4 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm">
            <div className="grid gap-2 sm:grid-cols-2">
              <input className="input" value={f.nameZh} placeholder="中文姓名" onChange={(e) => setFiguresChina((a) => a.map((x, j) => (j === i ? { ...x, nameZh: e.target.value } : x)))} />
              <input className="input" value={f.nameEn} placeholder="英文姓名" onChange={(e) => setFiguresChina((a) => a.map((x, j) => (j === i ? { ...x, nameEn: e.target.value } : x)))} />
              <input className="input" value={f.years} placeholder="生卒年" onChange={(e) => setFiguresChina((a) => a.map((x, j) => (j === i ? { ...x, years: e.target.value } : x)))} />
              <input className="input" value={f.titleZh} placeholder="中文定位" onChange={(e) => setFiguresChina((a) => a.map((x, j) => (j === i ? { ...x, titleZh: e.target.value } : x)))} />
              <input className="input" value={f.titleEn} placeholder="英文定位" onChange={(e) => setFiguresChina((a) => a.map((x, j) => (j === i ? { ...x, titleEn: e.target.value } : x)))} />
            </div>
            <div className="mt-2 grid gap-2">
              <textarea className="input" rows={2} value={f.bioZh} placeholder="中文生平/贡献" onChange={(e) => setFiguresChina((a) => a.map((x, j) => (j === i ? { ...x, bioZh: e.target.value } : x)))} />
              <textarea className="input" rows={2} value={f.bioEn} placeholder="英文生平/贡献" onChange={(e) => setFiguresChina((a) => a.map((x, j) => (j === i ? { ...x, bioEn: e.target.value } : x)))} />
            </div>
            <div className="mt-2 flex gap-2">
              <button type="button" className="btn-secondary" onClick={() => setFiguresChina((a) => move(a, i, -1))}>↑</button>
              <button type="button" className="btn-secondary" onClick={() => setFiguresChina((a) => move(a, i, 1))}>↓</button>
              <button type="button" className="btn-secondary text-red-600" onClick={() => setFiguresChina((a) => a.filter((_, j) => j !== i))}>删除</button>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 p-4">
        <div className="mb-2">
          <h2 className="text-sm font-semibold text-slate-900">开篇「判断板块」（折叠）</h2>
          <p className="mt-1 text-xs text-slate-500">
            两个默认折叠的板块（来访者 / 咨询师），点开后展开。支持 Markdown，中英各一份。
          </p>
        </div>
        <div className="mb-4 grid gap-3">
          <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <p className="mb-2 text-xs font-medium text-slate-600">来访者板块</p>
            <textarea
              className="input mb-2"
              rows={6}
              value={fitClient.zh || ""}
              placeholder="中文（Markdown）"
              onChange={(e) => setFitClient((v) => ({ ...v, zh: e.target.value }))}
            />
            <textarea
              className="input"
              rows={6}
              value={fitClient.en || ""}
              placeholder="英文（Markdown）"
              onChange={(e) => setFitClient((v) => ({ ...v, en: e.target.value }))}
            />
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <p className="mb-2 text-xs font-medium text-slate-600">咨询师 / 学习者板块</p>
            <textarea
              className="input mb-2"
              rows={6}
              value={fitPractitioner.zh || ""}
              placeholder="中文（Markdown）"
              onChange={(e) => setFitPractitioner((v) => ({ ...v, zh: e.target.value }))}
            />
            <textarea
              className="input"
              rows={6}
              value={fitPractitioner.en || ""}
              placeholder="英文（Markdown）"
              onChange={(e) => setFitPractitioner((v) => ({ ...v, en: e.target.value }))}
            />
          </div>
        </div>
      </section>

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
