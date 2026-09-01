import type { Metadata } from "next";
import TopicListView from "@/components/TopicListView";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  lang: "zh",
  title: "专题 · 知识库",
  description:
    "面向从业者的深度内容：流派脉络、核心方法、循证证据与职业路径。",
  path: "/topics",
  type: "website",
});

export default function Page() {
  return <TopicListView lang="zh" />;
}
