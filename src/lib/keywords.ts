// Lightweight English keyword extraction (frequency + phrase scoring).
// Used when no OpenAI is configured — the extracted phrases are then
// translated to Chinese by the active translation provider.

const FUNCTION_WORDS = new Set(
  "a an the this that these those and or but not of in on for with as at by to from into over under what which when where how is are was were be been being have has had do does did can could should would may might will shall must than then so if about above after before during while among between more most other some any each few both all no nor only own same very just too also".split(
    " ",
  ),
);

// Words that appear often in news abstracts but are too generic to be keywords.
const GENERIC_WORDS = new Set(
  [
    "study",
    "studies",
    "research",
    "researcher",
    "researchers",
    "author",
    "authors",
    "found",
    "find",
    "finds",
    "new",
    "says",
    "said",
    "say",
    "according",
    "may",
    "might",
    "could",
    "would",
    "will",
    "can",
    "one",
    "two",
    "three",
    "many",
    "people",
    "participants",
    "individuals",
    "year",
    "years",
    "day",
    "days",
    "time",
    "percent",
    "report",
    "reports",
    "show",
    "shows",
    "shown",
    "suggest",
    "suggests",
    "link",
    "links",
    "association",
    "risk",
    "level",
    "levels",
    "increase",
    "increases",
    "higher",
    "lower",
    "decrease",
    "decreases",
    "result",
    "results",
    "effect",
    "effects",
    "impact",
    "analysis",
    "findings",
    "outcomes",
    "evidence",
    "support",
    "significant",
    "associated",
    "advantage",
    "benefit",
    "benefits",
    "relationship",
  ].join(" "),
);

function isWord(w: string): boolean {
  return /^[a-z][a-z-]{2,}$/.test(w);
}

function isNumberish(w: string): boolean {
  return /^\d+$/.test(w) || /^[\d,.]+$/.test(w);
}

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => isWord(w) && !isNumberish(w) && !FUNCTION_WORDS.has(w));
}

function titleCase(phrase: string): string {
  return phrase
    .split(" ")
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export function extractEnglishKeywords(
  title: string,
  summary: string,
  content: string,
): string[] {
  const uni = new Map<string, number>();
  const bi = new Map<string, number>();

  const add = (arr: string[], boost: number) => {
    for (let i = 0; i < arr.length; i++) {
      const w = arr[i];
      uni.set(w, (uni.get(w) || 0) + 1 + boost);
      if (i + 1 < arr.length) {
        const phrase = `${arr[i]} ${arr[i + 1]}`;
        bi.set(phrase, (bi.get(phrase) || 0) + 1 + boost);
      }
    }
  };

  add(tokens(title).slice(0, 40), 3);
  add(tokens(summary).slice(0, 90), 1);
  add(tokens(content).slice(0, 120), 0.5);

  const candidates: { phrase: string; score: number }[] = [];
  for (const [phrase, f] of bi) {
    const words = phrase.split(" ");
    if (words.length !== 2) continue;
    if (words.some((w) => FUNCTION_WORDS.has(w) || GENERIC_WORDS.has(w))) continue;
    candidates.push({ phrase, score: f });
  }
  for (const [phrase, f] of uni) {
    if (GENERIC_WORDS.has(phrase) || FUNCTION_WORDS.has(phrase)) continue;
    if (f < 2) continue;
    candidates.push({ phrase, score: f * 0.6 });
  }

  candidates.sort((a, b) => b.score - a.score);

  const picked: string[] = [];
  for (const c of candidates) {
    if (picked.length >= 5) break;
    if (picked.some((p) => p === c.phrase || p.includes(c.phrase) || c.phrase.includes(p))) {
      continue;
    }
    picked.push(c.phrase);
  }

  return picked.map(titleCase);
}
