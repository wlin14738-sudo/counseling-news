export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://servicerphyco.zeabur.app").replace(/\/+$/, "");
export const SITE_NAME_ZH = "全球心理咨询行业资讯";
export const SITE_NAME_EN = "Global Counseling & Mental Health News";

import type { Locale } from "./i18n";
export function siteName(lang: Locale): string {
  return lang === "zh" ? SITE_NAME_ZH : SITE_NAME_EN;
}

export function absUrl(path: string): string {
  return SITE_URL + path;
}
