import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import type { TopicSeed } from "./cbtTopic";

// 全球流派全景专题：以仓库根目录的 Markdown 为唯一内容源（DRY），
// seed 时读取并生成 Topic 正文。页面 Hero 已展示主题名、且会自动生成右侧
// 章节目录，因此这里去掉文件顶部 H1 与手写的「## 目录」块，避免重复。
// 优先用 import.meta 定位仓库根；若在某些 CJS 环境不可用，则退回 process.cwd()。
function resolveRoot(): string {
  try {
    return path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
  } catch {
    return process.cwd();
  }
}

const ROOT = resolveRoot();

function loadPanoramaBody(): string {
  try {
    const raw = readFileSync(path.join(ROOT, "全球心理咨询流派全景.md"), "utf8");
    return raw
      .replace(/^#\s+[^\n]*\n+/, "")
      .replace(/## 目录\n[\s\S]*?\n---\n/, "")
      .trim();
  } catch {
    return "";
  }
}

export const PANORAMA_TOPIC: TopicSeed = {
  slug: "panorama",
  title: "A Global Panorama of Psychotherapy & Counseling Schools",
  titleZh: "全球心理咨询与心理治疗流派全景总览",
  summary:
    "A structured map of the world's psychotherapy and counseling schools — organized by theoretical family, with 160+ named approaches, founders, periods, techniques, and appendices (including Eastern/Chinese indigenous schools and evidenced-based manuals).",
  summaryZh:
    "一张“流派地图”：按理论取向家族梳理至 2020 年代在世界范围内出现过的心理咨询 / 心理治疗主要流派与具体疗法，收录 160 余个具名取向，含东方与本土化流派及循证手册速查。",
  body: `A Global Panorama of Psychotherapy & Counseling Schools

This page maps the world's psychotherapeutic approaches by theoretical family. Globally there are more than 400 psychotherapeutic orientations (counted since Karasu, 1986), still growing. Below is the outline; the full Chinese reference is the default view.

## How to read "schools"
Concepts: paradigm (grand school), orientation (school), technique (method), and integration (theory integration / technical eclecticism / common factors / assimilative integration). The International Dictionary of Psychotherapy (Nardone & Salvini) identifies eight paradigms: psychodynamic, behavioural, existential-humanistic, body-expression, systemic-relational, cognitive, interactional-strategic, and eclectic. Below, added sections cover trauma-focused, transpersonal, and Eastern/indigenous approaches.

## Psychodynamic & psychoanalytic
Classical psychoanalysis (Freud); ego psychology (A. Freud, Hartmann, Kris); object relations (Klein, Fairbairn, Winnicott, Jacobsen); self psychology (Kohut); interpersonal (Sullivan, Horney, Fromm); relational (Mitchell, Aron); attachment-based (Bowlby, Ainsworth); Lacanian; Jungian analytical; Adlerian; transference-focused (Kernberg); mentalization-based (Bateman & Fonagy); brief dynamic (ISTDP/Davanloo, Mann, Strupp & Binder); transactional analysis (Berne).

## Behavioural
Behavior therapy; systematic desensitisation (Wolpe); exposure & response prevention (Meyer); flooding/implosive; aversion; operant behaviour modification / token economy (Skinner); behavioural activation (Jacobsen); social skills training; parent management training.

## Cognitive & cognitive-behavioural (incl. third wave)
REBT (Ellis); cognitive therapy (Beck); CBT; trauma-focused CBT; interpersonal psychotherapy (IPT, Klerman & Weissman); problem-solving therapy; metacognitive therapy (Wells); and third wave: ACT (Hayes), DBT (Linehan), MBSR (Kabat-Zinn), MBCT (Segal/Williams/Teasdale), compassion-focused therapy (Gilbert), mindful self-compassion (Neff/Germer), schema therapy (Young), CBASP (McCullough), functional analytic psychotherapy (FAP).

## Humanistic–existential–phenomenological
Person-centered/client-centered (Rogers); existential therapy (May, Yalom, Bugental, van Deurzen); daseinsanalysis (Binswanger, Boss); logotherapy (Frankl); existential analysis (Längle); gestalt (Perls); focusing (Gendlin); emotion-focused therapy (Greenberg); motivational interviewing (Miller & Rollnick); reality therapy/choice theory (Glasser).

## Body–experiential–somatic
Character analysis (Reich); bioenergetic analysis (Lowen); core energetics; biodynamic; somatic experiencing (Levine); sensorimotor psychotherapy (Ogden); Hakomi (Kurtz); NARM (Heller); organic intelligence; body-mind centering.

## Family & systems
Structural (Minuchin); strategic (Haley, Madanes); MRI brief (Watzlawick); Milan systemic (Selvini-Palazzoli); Bowenian multigenerational; Satir model; EFT couples (Johnson & Greenberg); systemic & social-constructionist; contextual (Nagy); behavioural family therapy.

## Postmodern–constructivist (+ social-cultural-critical)
Solution-focused brief therapy (de Shazer, Berg); narrative therapy (White & Epston); collaborative therapy (Anderson); personal construct psychology (Kelly); constructivist/social constructionist; reflecting team. Social-cultural-critical: feminist therapy; relational-cultural theory (Miller); multicultural counseling (Sue & Sue); LGBTQ+ affirmative therapy; liberation/decolonial/critical practice.

## Integrative & eclectic
Cognitive analytic therapy (Ryle); multimodal therapy (Lazarus); transtheoretical model (Prochaska & DiClemente); cyclical psychodynamics (Wachtel); assimilative integration; common factors; integral psychotherapy (Forman/Wilber).

## Trauma-focused & information processing
EMDR (Shapiro); prolonged exposure (Foa); cognitive processing therapy (Resick); narrative exposure therapy; TF-CBT.

## Expressive arts & group
Psychodrama (Moreno); sociometry; art therapy; music therapy; dance/movement therapy; drama therapy; poetry/expressive writing; sandplay (Kalff); family constellations (Hellinger); group analysis (Foulkes). Child/attachment play approaches: play therapy; Theraplay (Booth & Jernberg); dyadic developmental psychotherapy (Hughes); parent-infant psychotherapy.

## Transpersonal & spiritual
Psychosynthesis (Assagioli); transpersonal psychotherapy.

## Eastern & indigenous
Japan: Morita therapy; Naikan; Dohsa-hou; Zen-based. China/Chinese-speaking: Zhong's insight therapy (Zhong Youbin); Chinese Taoist cognitive therapy (Yang & Zhang); TCM psychotherapy; Yikong/moving-emptiness technique (Liu Tianjun); Chinese-character mind therapy; human-nature (renxing) psychology (Guo Nianfeng, CAS Institute of Psychology).

## Emerging, complementary & alternative
Energy psychology (TFT, EFT/tapping, TAT); NLP; primal therapy; biofeedback; neurofeedback; hypnotherapy/Ericksonian; clinical hypnosis; MBRP (Witkiewitz & Bowen); positive psychotherapy (Peseschkian); positive psychology interventions; ecotherapy/nature-, animal-, adventure/wilderness-assisted; digital/AI therapy; philosophical counseling.

## Appendices
A: forms of counseling (individual, group, family, couple, child/adolescent, online, brief, crisis, supportive, psychoeducation). B: Chinese indigenous therapy summary table. C: evidence-based treatment manuals (depression, anxiety, PTSD, borderline, addiction, couples, chronic pain).

*The companion coaching-psychology map is a separate page. For deep dives on a single school, see the per-school knowledge-base topics.*`,
  bodyZh: loadPanoramaBody(),
  timeline: [],
  figures: [],
  timelineChina: [],
  figuresChina: [],
  fitClient: {},
  fitPractitioner: {},
  category: "overview",
  school: "",
  status: "published",
};
