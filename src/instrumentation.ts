import { performFetch, performDigest, performAutoReview } from "./lib/jobs";

let started = false;

export async function register() {
  if (process.env.ENABLE_SCHEDULER !== "true") return;
  if (started) return;
  started = true;
  console.log("[scheduler] enabled: fetch@08:00, digest@09:00 (Asia/Shanghai)");
  startScheduler();
}

// Read the current time in Asia/Shanghai regardless of server timezone.
function beijingNow() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  return {
    dayKey: `${get("year")}-${get("month")}-${get("day")}`,
    h: Number(get("hour")),
    min: Number(get("minute")),
    sec: Number(get("second")),
  };
}

function startScheduler() {
  let lastFetch = "";
  let lastDigest = "";
  let lastAuto = "";

  setInterval(async () => {
    const t = beijingNow();
    try {
      if (t.h === 8 && t.min === 0 && t.sec < 10 && lastFetch !== `${t.dayKey}-f`) {
        lastFetch = `${t.dayKey}-f`;
        console.log("[scheduler] running fetch job...");
        console.log("[scheduler] fetch ->", JSON.stringify(await performFetch()));
      }
      if (t.h === 9 && t.min === 0 && t.sec < 10 && lastDigest !== `${t.dayKey}-d`) {
        lastDigest = `${t.dayKey}-d`;
        console.log("[scheduler] running digest job...");
        console.log("[scheduler] digest ->", JSON.stringify(await performDigest()));
      }
      if (t.h === 10 && t.min === 0 && t.sec < 10 && lastAuto !== `${t.dayKey}-a`) {
        lastAuto = `${t.dayKey}-a`;
        const limit = Number(process.env.AUTO_DAILY_REVIEW || 20);
        console.log("[scheduler] running auto-review job...");
        console.log(
          "[scheduler] auto-review ->",
          JSON.stringify(await performAutoReview(limit)),
        );
      }
    } catch (err) {
      console.error("[scheduler] job failed:", (err as Error).message);
    }
  }, 10_000);
}
