import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { localePrefix } from "./i18n";
import { absUrl, siteName } from "./site";

type BuildMetaOpts = {
  lang: Locale;
  title: string;
  description: string;
  // Path WITHOUT locale prefix, e.g. "/articles/1" or "/topics" or "/"
  path: string;
  type?: "website" | "article";
  ogImage?: string;
};

// Build metadata with canonical + hreflang (zh-CN / en / x-default) + Open Graph.
export function buildMetadata(opts: BuildMetaOpts): Metadata {
  const selfPath = localePrefix(opts.lang) + opts.path;
  const zhPath = opts.path === "/" ? "/" : opts.path;
  const enPath = opts.path === "/" ? "/en" : "/en" + opts.path;
  const self = absUrl(selfPath);
  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: self,
      languages: {
        "zh-CN": absUrl(zhPath),
        en: absUrl(enPath),
        "x-default": absUrl(zhPath),
      },
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: self,
      siteName: siteName(opts.lang),
      type: opts.type === "article" ? "article" : "website",
      locale: opts.lang === "zh" ? "zh_CN" : "en_US",
      ...(opts.ogImage ? { images: [{ url: opts.ogImage }] } : {}),
    },
  };
}

export function jsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data);
}
