export type School = {
  slug: string;
  label: string; // 中文名
  en: string; // 英文名
  keywords: string[]; // 中英关键词，用于离线流派分类
};

// 咨询/心理治疗流派。slug 为存储值；label 为前端展示；keywords 用于在未配置
// OpenAI 时按文本关键词把文章归到对应流派。
export const SCHOOLS: School[] = [
  {
    slug: "cbt",
    label: "认知行为疗法 CBT",
    en: "Cognitive Behavioral Therapy",
    keywords: [
      "cognitive behavioral",
      "cognitive-behavioural",
      "cognitive behaviour",
      "cognitive therapy",
      "exposure therapy",
      "exposure and response",
      "cognitive restructuring",
      "behavioural activation",
      "cognitive-behavior",
      "认知行为",
      "认知疗法",
      "行为治疗",
      "暴露疗法",
      "认知重构",
      "行为激活",
    ],
  },
  {
    slug: "psychodynamic",
    label: "精神动力学/精神分析",
    en: "Psychodynamic & Psychoanalytic",
    keywords: [
      "psychodynamic",
      "psychoanalys",
      "psychoanalytic",
      "psychoanalysis",
      "object relations",
      "transference",
      "countertransference",
      "ego psychology",
      "attachment-based",
      "精神分析",
      "心理动力学",
      "动力取向",
      "客体关系",
      "移情",
      "反移情",
    ],
  },
  {
    slug: "humanistic",
    label: "人本主义",
    en: "Humanistic (Person-Centered)",
    keywords: [
      "humanistic",
      "person-centered",
      "person centred",
      "client-centered",
      "client centred",
      "existential",
      "gestalt",
      "unconditional positive regard",
      "self-actualiz",
      "empathy",
      "人本主义",
      "来访者中心",
      "以人为中心",
      "完形",
      "自我实现",
      "无条件积极关注",
    ],
  },
  {
    slug: "existential",
    label: "存在主义",
    en: "Existential Therapy",
    keywords: [
      "existential",
      "logotherapy",
      "meaning-centered",
      "daseinsanalysis",
      "death",
      "freedom",
      "isolation",
      "meaninglessness",
      "frankl",
      "yalom",
      "存在主义",
      "存在疗法",
      "意义治疗",
      "弗兰克尔",
      "亚隆",
      "死亡",
      "自由",
      "孤独",
      "无意义",
    ],
  },
  {
    slug: "family",
    label: "家庭与系统治疗",
    en: "Family & Systems Therapy",
    keywords: [
      "family therapy",
      "couples therapy",
      "couple therapy",
      "marriage and family",
      "family systems",
      "systemic",
      "family-based",
      "intergenerational",
      "家庭治疗",
      "家庭系统",
      "婚姻治疗",
      "夫妻治疗",
      "系统治疗",
      "家庭动力",
      "代际",
    ],
  },
  {
    slug: "act",
    label: "接纳承诺疗法 ACT",
    en: "Acceptance & Commitment Therapy",
    keywords: [
      "acceptance and commitment",
      "contextual behavioral",
      "contextual behavioural",
      "psychological flexibility",
      "relational frame",
      "values-based",
      "接纳承诺",
      "语境行为",
      "心理灵活性",
      "关系框架",
      "价值导向",
    ],
  },
  {
    slug: "dbt",
    label: "辩证行为疗法 DBT",
    en: "Dialectical Behavior Therapy",
    keywords: [
      "dialectical behavioral",
      "dialectical behaviour",
      "dialectical behavior",
      "dialectical behavior therapy",
      "dialectical behaviour therapy",
      "dbt",
      "emotion regulation",
      "distress tolerance",
      "interpersonal effectiveness",
      "辩证行为",
      "情绪调节",
      "痛苦耐受",
      "人际效能",
    ],
  },
  {
    slug: "mindfulness",
    label: "正念疗法",
    en: "Mindfulness-Based Therapies",
    keywords: [
      "mindfulness",
      "mindfulness-based",
      "mbsr",
      "mbct",
      "mindful meditation",
      "meditation",
      "contemplative",
      "正念",
      "正念减压",
      "正念认知",
      "冥想",
    ],
  },
  {
    slug: "emdr",
    label: "眼动脱敏再加工 EMDR",
    en: "Eye Movement Desensitization & Reprocessing",
    keywords: [
      "emdr",
      "eye movement desensitization",
      "eye movement desensitisation",
      "bilateral stimulation",
      "眼动脱敏",
      "眼动脱敏再加工",
      "双侧刺激",
    ],
  },
];

const SLUG_SET = new Set(SCHOOLS.map((s) => s.slug));
const LABEL_LOW = new Map(
  SCHOOLS.flatMap((s) => [
    [s.label.toLowerCase(), s.slug],
    [s.en.toLowerCase(), s.slug],
  ]),
);

export function schoolLabel(slug?: string | null): string {
  if (!slug) return "";
  const found = SCHOOLS.find((s) => s.slug === slug);
  return found ? found.label : slug;
}

export function schoolEn(slug?: string | null): string {
  if (!slug) return "";
  const found = SCHOOLS.find((s) => s.slug === slug);
  return found ? found.en : slug;
}

export function isValidSchool(slug?: string | null): boolean {
  return Boolean(slug && SLUG_SET.has(slug));
}

// 把模型返回的流派文本规范化为 slug；支持返回 slug 或中英文名。
export function normalizeSchool(raw: unknown): string {
  if (!raw) return "";
  const v = String(raw).trim().toLowerCase();
  if (!v) return "";
  if (SLUG_SET.has(v)) return v;
  if (LABEL_LOW.has(v)) return LABEL_LOW.get(v)!;
  // 中英文名可能带“疗法/治疗”等后缀，尝试模糊匹配。
  for (const [key, slug] of LABEL_LOW) {
    if (key.includes(v) || v.includes(key)) return slug;
  }
  return "";
}

// 离线流派分类：按关键词在标题/摘要/正文中的命中计分，取最高分。
export function classifySchool(
  title: string,
  summary: string,
  content: string,
): string {
  const t = (title || "").toLowerCase();
  const s = (summary || "").toLowerCase();
  const c = (content || "").toLowerCase();

  let best = "";
  let bestScore = 0;
  for (const school of SCHOOLS) {
    let score = 0;
    for (const kw of school.keywords) {
      if (t.includes(kw)) score += 3;
      if (s.includes(kw)) score += 1;
      if (c.includes(kw)) score += 0.3;
    }
    if (score > bestScore) {
      bestScore = score;
      best = school.slug;
    }
  }
  // 阈值：避免偶然命中一个词就把文章错误归到某流派。
  return bestScore >= 1 ? best : "";
}
