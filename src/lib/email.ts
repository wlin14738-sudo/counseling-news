import { Resend } from "resend";
import { schoolLabel } from "./schools";

export function emailEnabled(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

function mailer(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

function from(): string {
  return process.env.EMAIL_FROM || "资讯 <newsletter@example.com>";
}

function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export type SubscriberEmail = { email: string; token: string };
export type DigestArticle = {
  titleZh: string;
  title: string;
  summaryZh: string;
  keywords: string;
  school: string;
  id: number;
};

export async function sendConfirmation(
  sub: SubscriberEmail,
): Promise<{ sent: boolean }> {
  if (!emailEnabled()) {
    console.log(`[email] (skipped) confirm ${sub.email} token=${sub.token}`);
    return { sent: false };
  }
  const confirmUrl = `${siteUrl()}/api/subscribe/confirm?token=${sub.token}&email=${encodeURIComponent(
    sub.email,
  )}`;
  try {
    await mailer().emails.send({
      from: from(),
      to: sub.email,
      subject: "确认订阅：全球心理咨询行业资讯",
      html: `<p>感谢订阅！请点击以下链接确认你的邮箱地址：</p>
<p><a href="${confirmUrl}">确认订阅</a></p>
<p>如果这不是你的操作，请忽略本邮件。</p>`,
    });
    return { sent: true };
  } catch (err) {
    console.error("[email] confirmation failed:", (err as Error).message);
    return { sent: false };
  }
}

export async function sendDailyDigest(
  subscribers: SubscriberEmail[],
  articles: DigestArticle[],
): Promise<{ sent: number; failed: number }> {
  if (!emailEnabled()) {
    console.log(
      `[email] (skipped) digest would send to ${subscribers.length} subs, ${articles.length} articles`,
    );
    return { sent: 0, failed: subscribers.length };
  }
  if (articles.length === 0 || subscribers.length === 0) {
    return { sent: 0, failed: 0 };
  }

  const rows = articles
    .map(
      (a) => `<li>
  <a href="${siteUrl()}/articles/${a.id}"><strong>${a.titleZh}</strong></a>
  <p>${a.summaryZh}</p>
  ${a.keywords ? `<p style="margin:4px 0;"><small>关键词：${a.keywords}</small></p>` : ""}
  ${a.school ? `<p style="margin:4px 0;"><small>流派：${schoolLabel(a.school)}</small></p>` : ""}
  <small>英文原题：${a.title}</small>
</li>`,
    )
    .join("\n");

  let sent = 0;
  let failed = 0;
  for (const sub of subscribers) {
    const unsubscribeUrl = `${siteUrl()}/api/subscribe/unsubscribe?token=${sub.token}`;
    try {
      await mailer().emails.send({
        from: from(),
        to: sub.email,
        subject: `每日摘要：今日 ${articles.length} 条心理咨询行业资讯`,
        html: `<h2>全球心理咨询行业资讯 · 每日摘要</h2>
<ul>${rows}</ul>
<hr/>
<p style="font-size:12px;color:#666;">你可以随时<a href="${unsubscribeUrl}">退订</a>。</p>`,
      });
      sent += 1;
    } catch (err) {
      failed += 1;
      console.error("[email] digest failed for", sub.email, (err as Error).message);
    }
  }
  return { sent, failed };
}
