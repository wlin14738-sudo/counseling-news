"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const T: Record<Locale, { ph: string; btn: string; submitting: string; ok: string; fail: string; err: string }> = {
  zh: {
    ph: "输入你的邮箱",
    btn: "订阅每日摘要",
    submitting: "提交中…",
    ok: "订阅成功",
    fail: "订阅失败，请重试",
    err: "网络错误，请稍后重试",
  },
  en: {
    ph: "Enter your email",
    btn: "Subscribe to daily digest",
    submitting: "Submitting…",
    ok: "Subscribed",
    fail: "Subscribe failed, try again",
    err: "Network error, try again later",
  },
};

export default function SubscribeForm({ lang = "zh" }: { lang?: Locale }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || T[lang].ok);
        setEmail("");
      } else {
        setError(data.error || T[lang].fail);
      }
    } catch {
      setError(T[lang].err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={T[lang].ph}
        className="input flex-1"
      />
      <button type="submit" className="btn-primary shrink-0" disabled={loading}>
        {loading ? T[lang].submitting : T[lang].btn}
      </button>
      {message && <p className="text-sm text-emerald-600">{message}</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
