import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME_EN } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  title: SITE_NAME_EN,
  description:
    "Daily aggregation of the latest counseling & mental health industry news from authoritative global and Chinese sources, with AI-generated Chinese summaries.",
  path: "/",
  type: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return <HomeView lang="en" searchParams={searchParams} />;
}
