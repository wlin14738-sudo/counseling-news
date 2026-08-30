import OpenAI from "openai";
import { translateMode, translateText } from "./translate";
import { extractEnglishKeywords } from "./keywords";

type SummarizeInput = {
  title: string;
  summary: string;
  content: string;
  author: string;
  lang?: "en" | "zh";
};

export type SummarizeResult = {
  titleZh: string;
  summaryZh: string;
  keywords: string;
  confidence: number;
};

export function aiEnabled(): boolean {
  return Boolean(process.env.OPENAI_API_KEY);
}

function extractJson(text: string): Record<string, unknown> {
  const cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("no JSON in AI response");
  }
  return JSON.parse(cleaned.slice(start, end + 1));
}

// Extract 1-5 keywords. Translates them via the active provider when possible,
// otherwise uses the English phrases directly.
async function buildKeywords(input: SummarizeInput): Promise<string> {
  const en = extractEnglishKeywords(input.title, input.summary, input.content).slice(0, 5);
  if (en.length === 0) return "";
  if (translateMode() !== "off") {
    const zh: string[] = [];
    for (const kw of en) {
      const r = await translateText(kw);
      zh.push(r.ok ? r.text : kw);
    }
    return zh.join(", ");
  }
  return en.join(", ");
}

// Produce Chinese title + Chinese summary + keywords for an article.
// Priority:
//   1. A translation provider (Youdao or MyMemory) for title/excerpt/keywords.
//   2. OpenAI translation + concise summary + keywords, when configured.
//   3. Original text as a fallback (English keywords still extracted).
export async function summarizeArticle(input: SummarizeInput): Promise<SummarizeResult> {
  const lang = input.lang === "zh" ? "zh" : "en";

  // Chinese sources: titles/excerpts are already Chinese.
  if (lang === "zh") {
    return { titleZh: input.title, summaryZh: input.summary, keywords: "", confidence: 0.95 };
  }

  // 1) Translation provider (Youdao or free MyMemory) for title + excerpt.
  if (translateMode() !== "off") {
    const titleT = await translateText(input.title);
    const summaryT = await translateText(input.summary);
    const keywords = await buildKeywords(input);
    return {
      titleZh: titleT.ok ? titleT.text : input.title,
      summaryZh: summaryT.ok ? summaryT.text : input.summary,
      keywords,
      confidence: titleT.ok && summaryT.ok ? 0.85 : 0,
    };
  }

  // 2) OpenAI translation + summary + keywords.
  if (!aiEnabled()) {
    const keywords = await buildKeywords(input);
    return { titleZh: input.title, summaryZh: input.summary, keywords, confidence: 0 };
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const system =
    '你是资深心理健康行业编辑。将英文标题翻译成准确、简洁的中文标题，用 100–160 字中文提炼文章核心要点，并提炼 1–5 个中文关键词（用英文逗号分隔）。只输出 JSON，格式为 {"titleZh":"...","summaryZh":"...","keywords":"关键词1, 关键词2"}。';
  const user = [
    `标题：${input.title}`,
    `作者/来源：${input.author || "未知"}`,
    `英文摘要：${input.summary || "无"}`,
    `正文片段：${input.content.slice(0, 4000) || "无"}`,
  ].join("\n");

  try {
    const completion = await client.chat.completions.create({
      model,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.4,
    });
    const text = completion.choices[0]?.message?.content ?? "{}";
    const parsed = extractJson(text);
    const keywords = String(parsed.keywords || "").trim();
    return {
      titleZh: String(parsed.titleZh || input.title).trim(),
      summaryZh: String(parsed.summaryZh || input.summary).trim(),
      keywords: keywords || (await buildKeywords(input)),
      confidence: 0.9,
    };
  } catch (err) {
    console.error("AI summarize failed:", (err as Error).message);
    const keywords = await buildKeywords(input);
    return { titleZh: input.title, summaryZh: input.summary, keywords, confidence: 0 };
  }
}
