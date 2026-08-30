export type Category = {
  slug: string;
  label: string;
  en: string;
};

// Primary 板块 (sections) for the site. Order here is the display order.
export const CATEGORIES: Category[] = [
  { slug: "industry", label: "行业动态", en: "Industry" },
  { slug: "research", label: "研究前沿", en: "Research" },
  { slug: "clinical", label: "临床实践", en: "Clinical Practice" },
  { slug: "education", label: "教育与职业", en: "Education & Careers" },
  { slug: "digital", label: "技术与数字化", en: "Technology & Digital" },
];

export function categoryLabel(slug?: string | null): string {
  if (!slug) return "";
  const found = CATEGORIES.find((c) => c.slug === slug);
  return found ? found.label : slug;
}

export function categoryEn(slug?: string | null): string {
  if (!slug) return "";
  const found = CATEGORIES.find((c) => c.slug === slug);
  return found ? found.en : slug;
}

export function isValidCategory(slug?: string | null): boolean {
  return Boolean(slug && CATEGORIES.some((c) => c.slug === slug));
}
