import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { SOURCES } from "../src/lib/sources";
import { CBT_TOPIC } from "../src/lib/cbtTopic";

const prisma = new PrismaClient();

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
      category: CBT_TOPIC.category,
      school: CBT_TOPIC.school,
      status: CBT_TOPIC.status,
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
