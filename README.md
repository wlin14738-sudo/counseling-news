# 全球心理咨询行业资讯网站（中英双语）

面向心理咨询/心理健康从业者的中英双语资讯网站。每日从全球权威源及中文源聚合最新行业新闻，由 OpenAI 翻译并提炼中文摘要，进入后台由管理员人工审核后发布；支持邮件订阅，每天向订阅者发送一封中文摘要日报。

## 技术栈

- Next.js（App Router + TypeScript）+ Tailwind CSS
- Prisma ORM + PostgreSQL（Supabase / Neon）
- 翻译：有道智云 / MyMemory（免 key）/ OpenAI；摘要：OpenAI；邮件：Resend；RSS：rss-parser

## 本地运行

```bash
pnpm install
pnpm db:generate
pnpm db:push
pnpm db:seed
pnpm dev
```

访问 `http://localhost:3000`，后台在 `/admin`（种子账号见 `.env` 的 `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD`，默认 `admin@example.com` / `changeme123`）。**本地也需要一个 PostgreSQL 数据库**，先在 `.env` 填好 `DATABASE_URL`（可用 Supabase/Neon 免费额度）。

## 环境变量

复制 `.env.example` 为 `.env` 并填写 `AUTH_SECRET`、`CRON_SECRET`（生产必填），以及可选的 `OPENAI_API_KEY`、`YOUDAO_APP_KEY`、`YOUDAO_APP_SECRET`、`RESEND_API_KEY`。数据库用 PostgreSQL（`DATABASE_URL` 指向 Supabase/Neon）。

### 翻译引擎

通过 `.env` 的 `TRANSLATOR` 选择：

- `mymemory`（默认）：**无需任何 key**，用 MyMemory 免费接口翻译标题和摘要（有每日免费额度，超出会回退原文）。
- `youdao`：需 `YOUDAO_APP_KEY` / `YOUDAO_APP_SECRET`，中文更自然。
- `openai`：需 `OPENAI_API_KEY`，可同时做中文摘要提炼。
- 留空：自动——有有道 Key 用有道，否则有 OpenAI Key 用 OpenAI，否则保留原文。

`TRANSLATE_ON_FETCH=false` 时，抓取会**跳过翻译**（快速入库，先显示英文）；之后可用「后台工具 → 重译队列」分批补中文。

## 上线部署（Vercel + PostgreSQL）

### 1. 建一个免费 PostgreSQL

用 [Supabase](https://supabase.com) 或 [Neon](https://neon.tech) 创建一个免费项目，拿到 **连接字符串（PostgreSQL URL）**，填入环境变量 `DATABASE_URL`（形如 `postgresql://user:pass@host:5432/db?sslmode=require`）。

### 2. 部署到 Vercel

在 Vercel 导入该仓库，项目是 Next.js；无需改构建设置，`vercel.json` 已写好自动构建命令（`prisma db push && prisma generate && next build`）和定时任务。在 Vercel 的 **Settings → Environment Variables** 添加：

- `DATABASE_URL`：上述 PostgreSQL 连接串
- `AUTH_SECRET`：长随机字符串（可用 `openssl rand -hex 32` 生成）
- `CRON_SECRET`：长随机字符串（Vercel Cron 用它签名调用）
- `NEXT_PUBLIC_SITE_URL`：你的正式域名，如 `https://你的域名.com`
- 可选：`OPENAI_API_KEY`、`YOUDAO_APP_KEY`、`YOUDAO_APP_SECRET`、`RESEND_API_KEY`

部署后首次访问前可手动跑一次构建（Vercel 会自动 `db push` 建表）。

### 3. 定时任务（Vercel Cron）

`vercel.json` 里已配置两个 Cron（UTC 时间，已换算成北京时间）：

- `/api/cron/fetch`：`0 0 * * *`（北京时间 08:00）聚合 + AI 生成中文（进审阅队列）
- `/api/cron/digest`：`0 1 * * *`（北京时间 09:00）发送前一日发布文章的摘要邮件

两个路由都校验 `Authorization: Bearer <CRON_SECRET>`，Vercel Cron 会自动带上。

在 Vercel 项目设置中添加两个 Cron：

- `/api/cron/fetch`：每日 08:00 聚合 + AI 生成中文（审阅队列）
- `/api/cron/digest`：每日 09:00 发送前一日发布文章的摘要邮件

两个路由均校验 `Authorization: Bearer <CRON_SECRET>`。

## 数据模型

- **Source**：资讯源（RSS、语言、是否启用、每日额度、默认板块、默认流派、最近抓取时间）
- **Article**：文章（原文唯一 URL、英文标题/摘要、中文标题/摘要、板块、流派、关键词、状态、AI 置信度）
- **Topic**：知识库专题（唯一 slug、中英双语标题/摘要/Markdown 正文、分类、所属流派、状态、阅读数）
- **Subscriber**：订阅者（邮箱唯一、验证 token、是否确认）
- **Admin**：后台管理员（邮箱、密码哈希）

## 专题 · 知识库

前端 `/topics` 为知识库首页，`/topics/[slug]` 为专题详情页，展示中英双语长文（Markdown）。专题分若干分类（流派梳理 / 伦理 / 督导 / 职业发展 / 其他），首期发布「认知行为疗法（CBT）系统梳理」，可在后台「专题管理」中新建、编辑、发布与删除。涉及流派的专题可在详情页跳转到该流派的最新资讯（`/?school=slug`）。正文用 `react-markdown` + `remark-gfm` 渲染，并用 `@tailwindcss/typography` 排版。

## 咨询流派跟踪

站点会在抓取/翻译时给每篇文章打上最相关的**咨询流派**（`school`），并支持按流派在前台筛选、在后台审核与邮件日报中展示。可在 `src/lib/schools.ts` 维护流派清单；未配置 OpenAI 时按中英关键词离线分类，配置了 `OPENAI_API_KEY` 时由模型判断。

当前内置流派：认知行为疗法（CBT）、精神动力学/精神分析、人本主义/存在主义、家庭与系统治疗、接纳承诺疗法（ACT）、辩证行为疗法（DBT）、正念疗法、眼动脱敏再加工（EMDR）。

`src/lib/sources.ts` 预置了几个流派专属来源（ABCT、APsA、Behavioral Tech、DBT-UK、Learning ACT、Mindful），也可在后台"来源管理"里为任意来源设置**默认流派**。

> 本改动向 `Source` 和 `Article` 各新增一列（均带默认值，不丢数据）。本地执行 `pnpm db:push`；Vercel 部署的构建会自动 `prisma db push` 应用。
