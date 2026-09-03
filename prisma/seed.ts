import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { SOURCES } from "../src/lib/sources";
import { CBT_TOPIC } from "../src/lib/cbtTopic";
import { PSYCHODYNAMIC_TOPIC } from "../src/lib/psychodynamicTopic";
import { HUMANISTIC_TOPIC } from "../src/lib/humanisticTopic";
import { EXISTENTIAL_TOPIC } from "../src/lib/existentialTopic";
import type { TopicSeed } from "../src/lib/cbtTopic";

const prisma = new PrismaClient();

// 通用专题种子：按唯一 slug 幂等 upsert（既有/发布中的专题均可复用）。
async function seedTopic(topic: TopicSeed) {
  await prisma.topic.upsert({
    where: { slug: topic.slug },
    update: {
      title: topic.title,
      titleZh: topic.titleZh,
      summary: topic.summary,
      summaryZh: topic.summaryZh,
      body: topic.body,
      bodyZh: topic.bodyZh,
      timeline: topic.timeline,
      figures: topic.figures,
      timelineChina: topic.timelineChina,
      figuresChina: topic.figuresChina,
      fitClient: topic.fitClient,
      fitPractitioner: topic.fitPractitioner,
      category: topic.category,
      school: topic.school,
      status: topic.status,
    },
    create: {
      slug: topic.slug,
      title: topic.title,
      titleZh: topic.titleZh,
      summary: topic.summary,
      summaryZh: topic.summaryZh,
      body: topic.body,
      bodyZh: topic.bodyZh,
      timeline: topic.timeline,
      figures: topic.figures,
      timelineChina: topic.timelineChina,
      figuresChina: topic.figuresChina,
      fitClient: topic.fitClient,
      fitPractitioner: topic.fitPractitioner,
      category: topic.category,
      school: topic.school,
      status: topic.status,
    },
  });
}

async function main() {
  // Seed sources (idempotent: upsert by unique rssUrl).
  for (const source of SOURCES) {
    await prisma.source.upsert({
      where: { rssUrl: source.rssUrl },
      update: {
        name: source.name,
        nameZh: source.nameZh,
        lang: source.lang,
        enabled: true,
        dailyLimit: source.dailyLimit,
        defaultCategory: source.defaultCategory,
        defaultSchool: source.defaultSchool || "",
      },
      create: { ...source, enabled: true },
    });
  }

  // Seed admin (idempotent: upsert by unique email).
  const email = process.env.SEED_ADMIN_EMAIL || "admin@example.com";
  const password = process.env.SEED_ADMIN_PASSWORD || "changeme123";
  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.admin.upsert({
    where: { email },
    update: { passwordHash },
    create: { email, passwordHash, name: "管理员", role: "admin" },
  });

  // Seed the CBT systematic overview (published, idempotent by unique slug).
  await prisma.topic.upsert({
    where: { slug: CBT_TOPIC.slug },
    update: {
      title: CBT_TOPIC.title,
      titleZh: CBT_TOPIC.titleZh,
      summary: CBT_TOPIC.summary,
      summaryZh: CBT_TOPIC.summaryZh,
      body: CBT_TOPIC.body,
      bodyZh: CBT_TOPIC.bodyZh,
      timeline: CBT_TOPIC.timeline,
      figures: CBT_TOPIC.figures,
      timelineChina: CBT_TOPIC.timelineChina,
      figuresChina: CBT_TOPIC.figuresChina,
      fitClient: CBT_TOPIC.fitClient,
      fitPractitioner: CBT_TOPIC.fitPractitioner,
      category: CBT_TOPIC.category,
      school: CBT_TOPIC.school,
      status: CBT_TOPIC.status,
    },
    create: {
      slug: CBT_TOPIC.slug,
      title: CBT_TOPIC.title,
      titleZh: CBT_TOPIC.titleZh,
      summary: CBT_TOPIC.summary,
      summaryZh: CBT_TOPIC.summaryZh,
      body: CBT_TOPIC.body,
      bodyZh: CBT_TOPIC.bodyZh,
      timeline: CBT_TOPIC.timeline,
      figures: CBT_TOPIC.figures,
      timelineChina: CBT_TOPIC.timelineChina,
      figuresChina: CBT_TOPIC.figuresChina,
      fitClient: CBT_TOPIC.fitClient,
      fitPractitioner: CBT_TOPIC.fitPractitioner,
      category: CBT_TOPIC.category,
      school: CBT_TOPIC.school,
      status: CBT_TOPIC.status,
    },
  });

  // Seed the psychodynamic systematic overview (published, idempotent by slug).
  await prisma.topic.upsert({
    where: { slug: PSYCHODYNAMIC_TOPIC.slug },
    update: {
      title: PSYCHODYNAMIC_TOPIC.title,
      titleZh: PSYCHODYNAMIC_TOPIC.titleZh,
      summary: PSYCHODYNAMIC_TOPIC.summary,
      summaryZh: PSYCHODYNAMIC_TOPIC.summaryZh,
      body: PSYCHODYNAMIC_TOPIC.body,
      bodyZh: PSYCHODYNAMIC_TOPIC.bodyZh,
      timeline: PSYCHODYNAMIC_TOPIC.timeline,
      figures: PSYCHODYNAMIC_TOPIC.figures,
      timelineChina: PSYCHODYNAMIC_TOPIC.timelineChina,
      figuresChina: PSYCHODYNAMIC_TOPIC.figuresChina,
      fitClient: PSYCHODYNAMIC_TOPIC.fitClient,
      fitPractitioner: PSYCHODYNAMIC_TOPIC.fitPractitioner,
      category: PSYCHODYNAMIC_TOPIC.category,
      school: PSYCHODYNAMIC_TOPIC.school,
      status: PSYCHODYNAMIC_TOPIC.status,
    },
    create: {
      slug: PSYCHODYNAMIC_TOPIC.slug,
      title: PSYCHODYNAMIC_TOPIC.title,
      titleZh: PSYCHODYNAMIC_TOPIC.titleZh,
      summary: PSYCHODYNAMIC_TOPIC.summary,
      summaryZh: PSYCHODYNAMIC_TOPIC.summaryZh,
      body: PSYCHODYNAMIC_TOPIC.body,
      bodyZh: PSYCHODYNAMIC_TOPIC.bodyZh,
      timeline: PSYCHODYNAMIC_TOPIC.timeline,
      figures: PSYCHODYNAMIC_TOPIC.figures,
      timelineChina: PSYCHODYNAMIC_TOPIC.timelineChina,
      figuresChina: PSYCHODYNAMIC_TOPIC.figuresChina,
      fitClient: PSYCHODYNAMIC_TOPIC.fitClient,
      fitPractitioner: PSYCHODYNAMIC_TOPIC.fitPractitioner,
      category: PSYCHODYNAMIC_TOPIC.category,
      school: PSYCHODYNAMIC_TOPIC.school,
      status: PSYCHODYNAMIC_TOPIC.status,
    },
  });

  // Seed the humanistic & existential overview (published, idempotent by slug).
  await prisma.topic.upsert({
    where: { slug: HUMANISTIC_TOPIC.slug },
    update: {
      title: HUMANISTIC_TOPIC.title,
      titleZh: HUMANISTIC_TOPIC.titleZh,
      summary: HUMANISTIC_TOPIC.summary,
      summaryZh: HUMANISTIC_TOPIC.summaryZh,
      body: HUMANISTIC_TOPIC.body,
      bodyZh: HUMANISTIC_TOPIC.bodyZh,
      timeline: HUMANISTIC_TOPIC.timeline,
      figures: HUMANISTIC_TOPIC.figures,
      timelineChina: HUMANISTIC_TOPIC.timelineChina,
      figuresChina: HUMANISTIC_TOPIC.figuresChina,
      fitClient: HUMANISTIC_TOPIC.fitClient,
      fitPractitioner: HUMANISTIC_TOPIC.fitPractitioner,
      category: HUMANISTIC_TOPIC.category,
      school: HUMANISTIC_TOPIC.school,
      status: HUMANISTIC_TOPIC.status,
    },
    create: {
      slug: HUMANISTIC_TOPIC.slug,
      title: HUMANISTIC_TOPIC.title,
      titleZh: HUMANISTIC_TOPIC.titleZh,
      summary: HUMANISTIC_TOPIC.summary,
      summaryZh: HUMANISTIC_TOPIC.summaryZh,
      body: HUMANISTIC_TOPIC.body,
      bodyZh: HUMANISTIC_TOPIC.bodyZh,
      timeline: HUMANISTIC_TOPIC.timeline,
      figures: HUMANISTIC_TOPIC.figures,
      timelineChina: HUMANISTIC_TOPIC.timelineChina,
      figuresChina: HUMANISTIC_TOPIC.figuresChina,
      fitClient: HUMANISTIC_TOPIC.fitClient,
      fitPractitioner: HUMANISTIC_TOPIC.fitPractitioner,
      category: HUMANISTIC_TOPIC.category,
      school: HUMANISTIC_TOPIC.school,
      status: HUMANISTIC_TOPIC.status,
    },
  });

  // Seed the existential overview (published, idempotent by slug).
  await prisma.topic.upsert({
    where: { slug: EXISTENTIAL_TOPIC.slug },
    update: {
      title: EXISTENTIAL_TOPIC.title,
      titleZh: EXISTENTIAL_TOPIC.titleZh,
      summary: EXISTENTIAL_TOPIC.summary,
      summaryZh: EXISTENTIAL_TOPIC.summaryZh,
      body: EXISTENTIAL_TOPIC.body,
      bodyZh: EXISTENTIAL_TOPIC.bodyZh,
      timeline: EXISTENTIAL_TOPIC.timeline,
      figures: EXISTENTIAL_TOPIC.figures,
      timelineChina: EXISTENTIAL_TOPIC.timelineChina,
      figuresChina: EXISTENTIAL_TOPIC.figuresChina,
      fitClient: EXISTENTIAL_TOPIC.fitClient,
      fitPractitioner: EXISTENTIAL_TOPIC.fitPractitioner,
      category: EXISTENTIAL_TOPIC.category,
      school: EXISTENTIAL_TOPIC.school,
      status: EXISTENTIAL_TOPIC.status,
    },
    create: {
      slug: EXISTENTIAL_TOPIC.slug,
      title: EXISTENTIAL_TOPIC.title,
      titleZh: EXISTENTIAL_TOPIC.titleZh,
      summary: EXISTENTIAL_TOPIC.summary,
      summaryZh: EXISTENTIAL_TOPIC.summaryZh,
      body: EXISTENTIAL_TOPIC.body,
      bodyZh: EXISTENTIAL_TOPIC.bodyZh,
      timeline: EXISTENTIAL_TOPIC.timeline,
      figures: EXISTENTIAL_TOPIC.figures,
      timelineChina: EXISTENTIAL_TOPIC.timelineChina,
      figuresChina: EXISTENTIAL_TOPIC.figuresChina,
      fitClient: EXISTENTIAL_TOPIC.fitClient,
      fitPractitioner: EXISTENTIAL_TOPIC.fitPractitioner,
      category: EXISTENTIAL_TOPIC.category,
      school: EXISTENTIAL_TOPIC.school,
      status: EXISTENTIAL_TOPIC.status,
    },
  });

  // Seed a couple of demo drafts so the review queue is not empty on first run.
  const demoSource = await prisma.source.findFirst({ where: { enabled: true } });
  if (demoSource) {
    const demo = [
      {
        sourceId: demoSource.id,
        url: "https://example.com/demo/world-mental-health-day",
        title: "World Mental Health Day 2026: Prioritizing Psychological Support",
        titleZh: "2026 年世界精神卫生日：优先保障心理支持",
        summary:
          "Global health bodies call for greater investment in accessible psychological services and community-based mental health support.",
        summaryZh:
          "全球卫生机构呼吁加大对可获得心理服务的投入，推进社区心理健康支持，强调早期干预与去污名化。",
        publishedAt: new Date(),
        status: "draft",
        author: "示例来源",
        category: demoSource.defaultCategory,
        keywords: "心理健康, 世界精神卫生日, 社区支持",
        aiConfidence: 0.96,
      },
      {
        sourceId: demoSource.id,
        url: "https://example.com/demo/telehealth-counseling",
        title: "Telehealth Counseling Expands Access Across Rural Regions",
        titleZh: "远程心理咨询扩大农村地区服务可及性",
        summary:
          "New studies show remote counseling improves continuity of care and reduces barriers in underserved communities.",
        summaryZh:
          "新研究显示远程咨询改善护理连续性，降低欠发达地区就医壁垒，成为补充线下服务的重要方式。",
        publishedAt: new Date(),
        status: "published",
        author: "示例来源",
        category: demoSource.defaultCategory,
        keywords: "远程咨询, 农村地区, 可及性",
        aiConfidence: 0.93,
      },
    ];
    for (const item of demo) {
      await prisma.article.upsert({
        where: { url: item.url },
        update: { keywords: item.keywords, category: demoSource.defaultCategory },
        create: item,
      });
    }
  }

  const counts = {
    sources: await prisma.source.count(),
    articles: await prisma.article.count(),
    admins: await prisma.admin.count(),
  };
  console.log("Seed complete:", counts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
