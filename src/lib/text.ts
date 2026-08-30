import type { ReactNode } from "react";

// Generate a URL-safe anchor id for a heading. Keeps CJK characters (browsers
// support non-ASCII ids); only spaces/symbols are collapsed to hyphens.
export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

// Extract plain text from React children (used to compute heading slugs).
export function nodeToText(node: ReactNode): string {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return nodeToText(props?.children);
  }
  return "";
}

// Estimate Chinese reading time (about 400 characters per minute).
export function readingMinutes(text: string, charsPerMinute = 400): number {
  const chars = (text || "").replace(/[#*`>|=\-\[\]()]/g, "").trim().length;
  return Math.max(1, Math.round(chars / charsPerMinute));
}

// Extract h2/h3 headings from a markdown string for the table of contents.
export function extractHeadings(markdown: string): { level: number; text: string; slug: string }[] {
  const out: { level: number; text: string; slug: string }[] = [];
  for (const line of (markdown || "").split(/\r?\n/)) {
    const m = line.match(/^(#{2,3})\s+(.+)$/);
    if (!m) continue;
    const level = m[1].length;
    const text = m[2].replace(/[*_`]/g, "").trim();
    out.push({ level, text, slug: slugify(text) });
  }
  return out;
}
