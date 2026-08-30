export type TopicCategory = {
  slug: string;
  label: string; // 中文名
  en: string; // 英文名
};

// 专题/知识库的分类。流派（school）为首期使用，其余为可扩展分类。
export const TOPIC_CATEGORIES: TopicCategory[] = [
  { slug: "school", label: "流派梳理", en: "Therapy Schools" },
  { slug: "ethics", label: "伦理", en: "Ethics" },
  { slug: "supervision", label: "督导", en: "Supervision" },
  { slug: "career", label: "职业发展", en: "Career" },
  { slug: "other", label: "其他", en: "Other" },
];

const CATEGORY_SLUGS = new Set(TOPIC_CATEGORIES.map((c) => c.slug));

export function topicLabel(slug?: string | null): string {
  if (!slug) return "";
  const found = TOPIC_CATEGORIES.find((c) => c.slug === slug);
  return found ? found.label : slug;
}

export function isValidTopicCategory(slug?: string | null): boolean {
  return Boolean(slug && CATEGORY_SLUGS.has(slug));
}

// Return the topic category object for a slug, or the first ("school") by default.
export function topicCategory(slug?: string | null): TopicCategory {
  const found = TOPIC_CATEGORIES.find((c) => c.slug === (slug || "school"));
  return found || TOPIC_CATEGORIES[0];
}
