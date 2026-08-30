// Duplicate-prevention helpers: URL normalization + title-similarity.

const TRACKING_PREFIX = /^(utm_|mc_|_hs|gclid|fbclid)/i;
const TRACKING_EXACT = new Set(["ref", "source", "spm", "si", "ei", "ss", "from"]);

// Normalize a URL so tracking params / trailing slashes don't create duplicates.
export function normalizeUrl(raw: string): string {
  const input = (raw || "").trim();
  if (!input) return input;
  try {
    const u = new URL(input);
    u.hash = "";
    u.hostname = u.hostname.toLowerCase();
    for (const key of Array.from(u.searchParams.keys())) {
      if (TRACKING_PREFIX.test(key) || TRACKING_EXACT.has(key.toLowerCase())) {
        u.searchParams.delete(key);
      }
    }
    if (u.pathname !== "/" && u.pathname.endsWith("/")) {
      u.pathname = u.pathname.slice(0, -1);
    }
    return u.toString();
  } catch {
    return input;
  }
}

const STOP = new Set(
  "a an the this that these those and or but not of in on for with as at by to from into new says said say may could will would can about after before while more most other some any each both all over under also".split(
    " ",
  ),
);

function tokens(title: string): string[] {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 2 && !STOP.has(w));
}

// Overlap coefficient between two titles based on word sets (0..1).
export function titlesSimilar(a: string, b: string): number {
  const A = new Set(tokens(a || ""));
  const B = new Set(tokens(b || ""));
  if (A.size === 0 || B.size === 0) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter += 1;
  return inter / Math.min(A.size, B.size);
}
