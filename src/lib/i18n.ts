export type Locale = "zh" | "en";

export const DEFAULT_LOCALE: Locale = "zh";

export function localePrefix(lang: Locale): string {
  return lang === "en" ? "/en" : "";
}

// localizeHref("/topics") -> "/topics" (zh) or "/en/topics" (en)
export function localizeHref(lang: Locale, path: string): string {
  if (path === "" || path === "/") {
    return lang === "en" ? "/en" : "/";
  }
  return localePrefix(lang) + path;
}

export function field<T>(lang: Locale, zh: T, en: T): T {
  return lang === "zh" ? zh : en;
}

export const NAV: Record<Locale, { home: string; knowledge: string; subscribe: string; admin: string }> = {
  zh: { home: "首页", knowledge: "知识库", subscribe: "订阅", admin: "后台" },
  en: { home: "Home", knowledge: "Knowledge", subscribe: "Subscribe", admin: "Admin" },
};

export const PAGE_TEXT: Record<Locale, Record<string, string>> = {
  zh: {
    heroTitle: "全球心理咨询行业资讯",
    heroDesc: "每日聚合全球及中文权威机构的最新行业动态，AI 翻译中文摘要，助从业者把握行业脉搏。",
    all: "全部",
    allSchool: "全部流派",
    allSource: "全部来源",
    searchPlaceholder: "搜索标题 / 摘要…",
    filter: "筛选",
    prev: "上一页",
    next: "下一页",
    noResult: "暂未找到相关资讯。",
    subscribeTitle: "订阅每日摘要",
    subscribeDesc: "每天一封邮件，汇总最新心理咨询行业资讯的中文摘要。",
    back: "返回列表",
    readCount: "次阅读",
    author: "作者",
    source: "来源",
    category: "板块",
    school: "流派",
    updated: "更新",
    keywords: "关键词",
    footerNote: "内容由 AI 翻译摘要，仅供学习参考，请以原文为准",
    expandSchool: "展开流派",
    collapseSchool: "收起流派",
  },
  en: {
    heroTitle: "Global Counseling & Mental Health News",
    heroDesc: "Daily aggregation of the latest industry news from authoritative global and Chinese sources, with AI-generated Chinese summaries to help professionals stay ahead.",
    all: "All",
    allSchool: "All Schools",
    allSource: "All Sources",
    searchPlaceholder: "Search titles / summaries…",
    filter: "Filter",
    prev: "Prev",
    next: "Next",
    noResult: "No articles found.",
    subscribeTitle: "Subscribe to Daily Digest",
    subscribeDesc: "One email a day with Chinese summaries of the latest counseling & mental health news.",
    back: "Back to list",
    readCount: "reads",
    author: "Author",
    source: "Source",
    category: "Section",
    school: "School",
    updated: "Updated",
    keywords: "Keywords",
    footerNote: "AI-translated summaries for reference only; please refer to the original source.",
    expandSchool: "Expand schools",
    collapseSchool: "Collapse schools",
  },
};
