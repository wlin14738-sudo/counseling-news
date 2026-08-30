import crypto from "crypto";

// Translation providers: Youdao (key) and MyMemory (free, no key).
// The dispatcher picks a provider based on env `TRANSLATOR` and available keys.
// If no provider is active, callers should fall back to OpenAI or original text.

export function youdaoEnabled(): boolean {
  return Boolean(process.env.YOUDAO_APP_KEY && process.env.YOUDAO_APP_SECRET);
}

export type TranslateMode = "youdao" | "mymemory" | "off";

// Decide which translation provider to use.
// - TRANSLATOR=mymemory forces the free MyMemory provider.
// - Otherwise Youdao wins when its keys are configured.
// - Otherwise "off" (caller falls back to OpenAI or original).
export function translateMode(): TranslateMode {
  const mode = (process.env.TRANSLATOR || "").toLowerCase();
  if (mode === "mymemory") return "mymemory";
  if (mode === "youdao" && youdaoEnabled()) return "youdao";
  if (youdaoEnabled()) return "youdao";
  return "off";
}

export type TranslateResult = {
  ok: boolean;
  text: string;
  error?: string;
};

// ---- Youdao (有道智云) ----

// Youdao v3 signature: SHA256(appKey + input + salt + curtime + appSecret).
function signV3(
  appKey: string,
  q: string,
  salt: string,
  curtime: string,
  appSecret: string,
): string {
  const input =
    q.length <= 20
      ? q
      : `${q.slice(0, 10)}${q.length}${q.slice(-10)}`;
  const raw = `${appKey}${input}${salt}${curtime}${appSecret}`;
  return crypto.createHash("sha256").update(raw, "utf8").digest("hex");
}

async function translateViaYoudao(text: string, from: string, to: string): Promise<TranslateResult> {
  if (!youdaoEnabled()) {
    return { ok: false, text: "", error: "YOUDAO_APP_KEY / YOUDAO_APP_SECRET not set" };
  }
  const appKey = process.env.YOUDAO_APP_KEY!;
  const appSecret = process.env.YOUDAO_APP_SECRET!;
  const salt = String(Math.floor(Math.random() * 1e10));
  const curtime = String(Math.floor(Date.now() / 1000));
  const sign = signV3(appKey, text, salt, curtime, appSecret);
  const body = new URLSearchParams({
    q: text,
    from,
    to,
    appKey,
    salt,
    sign,
    signType: "v3",
    curtime,
  });
  try {
    const res = await fetch("https://openapi.youdao.com/api", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    const data = (await res.json()) as {
      errorCode?: string;
      translation?: string[];
      msg?: string;
    };
    if (data.errorCode !== "0") {
      return {
        ok: false,
        text: "",
        error: `Youdao errorCode=${data.errorCode} (${data.msg ?? ""})`,
      };
    }
    const translated = Array.isArray(data.translation) ? data.translation[0] : "";
    if (!translated) return { ok: false, text: "", error: "Youdao returned empty translation" };
    return { ok: true, text: translated };
  } catch (err) {
    return { ok: false, text: "", error: (err as Error).message };
  }
}

// ---- MyMemory (free, no key) ----

function splitForMyMemory(text: string, max = 450): string[] {
  if (text.length <= max) return [text];
  const chunks: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/)) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= max) {
      current = candidate;
    } else {
      if (current) chunks.push(current);
      if (word.length > max) {
        for (let i = 0; i < word.length; i += max) {
          chunks.push(word.slice(i, i + max));
        }
      } else {
        current = word;
      }
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function myMemoryCall(
  chunk: string,
  from: string,
  to: string,
): Promise<TranslateResult> {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      chunk,
    )}&langpair=${from}|${to}`;
    const res = await fetch(url);
    const data = (await res.json()) as {
      responseStatus?: number | string;
      responseDetails?: string;
      quotaFinished?: boolean;
      responseData?: { translatedText?: string };
    };
    if (data.responseStatus !== 200 || !data.responseData?.translatedText) {
      return {
        ok: false,
        text: "",
        error: data.responseDetails || `MyMemory responseStatus=${data.responseStatus}`,
      };
    }
    if (data.quotaFinished) {
      return { ok: false, text: "", error: "MyMemory quota finished" };
    }
    return { ok: true, text: data.responseData.translatedText };
  } catch (err) {
    return { ok: false, text: "", error: (err as Error).message };
  }
}

// Sequential requests with a short delay + one retry to respect the
// anonymous rate limit, then join chunk translations.
async function translateViaMyMemory(text: string, from: string, to: string): Promise<TranslateResult> {
  const chunks = splitForMyMemory(text);
  const translated: string[] = [];
  for (const chunk of chunks) {
    await sleep(600);
    let result = await myMemoryCall(chunk, from, to);
    if (!result.ok) {
      await sleep(1200);
      result = await myMemoryCall(chunk, from, to);
    }
    if (!result.ok) return result;
    translated.push(result.text);
  }
  return { ok: true, text: translated.join(" ") };
}

// ---- Dispatcher ----

// Chinese target codes differ per provider: Youdao uses "zh-CHS", MyMemory "zh-CN".
export async function translateText(text: string, from = "en"): Promise<TranslateResult> {
  if (!text.trim()) return { ok: true, text: "" };
  const mode = translateMode();
  if (mode === "youdao") return translateViaYoudao(text, from, "zh-CHS");
  if (mode === "mymemory") return translateViaMyMemory(text, from, "zh-CN");
  return { ok: false, text: "", error: "no translation provider configured" };
}
