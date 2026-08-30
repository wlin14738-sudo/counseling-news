export type SourceSeed = {
  name: string;
  nameZh: string;
  rssUrl: string;
  lang: "en" | "zh";
  dailyLimit: number;
  defaultCategory: string;
};

// Initial feeds. Sources are editable at runtime via the Source table / admin,
// so this list only seeds the first run. Most Chinese outlets do not expose
// public RSS, so they can be added once a feed or a custom scraper is ready.
export const SOURCES: SourceSeed[] = [
  {
    name: "BPS Research Digest",
    nameZh: "英国心理学会研究文摘",
    rssUrl: "https://digest.bps.org.uk/feed/",
    lang: "en",
    dailyLimit: 8,
    defaultCategory: "research",
  },
  {
    name: "ScienceDaily Mind & Brain",
    nameZh: "科学日报·心智与大脑",
    rssUrl: "https://www.sciencedaily.com/rss/mind_brain.xml",
    lang: "en",
    dailyLimit: 12,
    defaultCategory: "research",
  },
  {
    name: "Psychology Today",
    nameZh: "今日心理学",
    rssUrl: "https://www.psychologytoday.com/us/rss",
    lang: "en",
    dailyLimit: 10,
    defaultCategory: "clinical",
  },
  {
    name: "APA News",
    nameZh: "美国心理学会新闻",
    rssUrl: "https://www.apa.org/news/press/releases/rss",
    lang: "en",
    dailyLimit: 8,
    defaultCategory: "industry",
  },
  {
    name: "Nature: Mental Health",
    nameZh: "自然·心理健康",
    rssUrl: "https://www.nature.com/subjects/mental-health.rss",
    lang: "en",
    dailyLimit: 6,
    defaultCategory: "research",
  },
];
