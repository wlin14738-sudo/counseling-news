import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import type { TopicSeed } from "./cbtTopic";

function resolveRoot(): string {
  try {
    return path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
  } catch {
    return process.cwd();
  }
}

const ROOT = resolveRoot();

function loadCoachingBody(): string {
  try {
    const raw = readFileSync(path.join(ROOT, "心理教练技术流派总览.md"), "utf8");
    return raw
      .replace(/^#\s+[^\n]*\n+/, "")
      .replace(/^## 目录\n[\s\S]*?\n---\n/m, "")
      .trim();
  } catch {
    return "";
  }
}

export const COACHING_TOPIC: TopicSeed = {
  slug: "coaching-panorama",
  title: "A Panorama of Coaching Psychology & Coaching Approaches",
  titleZh: "心理教练全景总览",
  summary:
    "A structured map of coaching psychology — its non-clinical, goal-oriented dialogue model, the main theoretical families, and its relationship to psychotherapy.",
  summaryZh:
    "一张“教练地图”：澄清教练与心理咨询/治疗的边界，按理论取向梳理教练心理学的主要流派，并给出教练 vs 咨询/治疗对照表。",
  body:
    "A Panorama of Coaching Psychology & Coaching Approaches. This page maps the world's coaching approaches by theoretical orientation, as a companion to the global psychotherapy panorama.",
  bodyZh: loadCoachingBody(),
  timeline: [],
  figures: [],
  timelineChina: [],
  figuresChina: [],
  fitClient: {},
  fitPractitioner: {},
  category: "overview",
  school: "",
  status: "published",
};
