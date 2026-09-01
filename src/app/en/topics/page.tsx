import type { Metadata } from "next";
import TopicListView from "@/components/TopicListView";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  title: "Topics · Knowledge Base",
  description:
    "Systematic reviews for practitioners: the evolution of therapy schools, core methods, evidence, and career paths.",
  path: "/topics",
  type: "website",
});

export default function Page() {
  return <TopicListView lang="en" />;
}
