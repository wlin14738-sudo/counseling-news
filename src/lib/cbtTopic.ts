import type { FigureEntry, FitBlock, TimelineEntry } from "./topicTypes";

export type TopicSeed = {
  slug: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  body: string;
  bodyZh: string;
  timeline: TimelineEntry[];
  figures: FigureEntry[];
  timelineChina: TimelineEntry[];
  figuresChina: FigureEntry[];
  fitClient: FitBlock;
  fitPractitioner: FitBlock;
  category: string;
  school: string;
  status: string;
};

// 首发专题内容：认知行为疗法（CBT）系统梳理（中英双语）。
// 正文用 %%TIMELINE%% / %%FIGURES%% 占位符标记时间轴与人物的插入位置。
export const CBT_TOPIC: TopicSeed = {
  slug: `cbt`,
  title: `Cognitive Behavioral Therapy (CBT)`,
  titleZh: `认知行为疗法（CBT）`,
  summary: `A structured, bilingual overview of CBT covering its historical waves, key figures, cognitive and behavioral mechanisms, techniques, evidence base, applications across populations, China's training pathways, and further resources.`,
  summaryZh: `一套结构化、双语版的 CBT 内容，涵盖历史波次、核心人物、认知与行为机制、主要技术、循证证据、不同人群应用、中国培训认证体系与更多资源。`,
  timeline: [
    {
      year: `1900s–1920s`,
      titleZh: `行为主义奠基`,
      titleEn: `Behaviorist Foundations`,
      bodyZh: `巴甫洛夫的经典条件反射与华生 1920 年的“小阿尔伯特实验”把恐惧解释为条件化习得，确立了“刺激—反应”的实证研究纲领。`,
      bodyEn: `Pavlov's classical conditioning and Watson's 1920 "Little Albert" experiment explained fear as conditioned learning, establishing an empirical stimulus–response research program.`,
    },
    {
      year: `1930s–1950s`,
      titleZh: `操作性行为范式`,
      titleEn: `Operant Paradigm`,
      bodyZh: `桑代克提出效果律，斯金纳建立操作性条件反射与强化理论，确立“行为由强化塑造”的核心观点。`,
      bodyEn: `Thorndike's law of effect and Skinner's operant conditioning established that behavior is shaped by reinforcement.`,
    },
    {
      year: `1950s–1960s`,
      titleZh: `行为治疗成形`,
      titleEn: `Behavior Therapy Takes Shape`,
      bodyZh: `沃尔普 1958 年提出系统脱敏与互惠抑制，被视为现代行为治疗的开端，主攻恐惧与焦虑。`,
      bodyEn: `Wolpe introduced systematic desensitization and reciprocal inhibition in 1958, widely seen as the start of modern behavior therapy for fear and anxiety.`,
    },
    {
      year: `1950s–1970s`,
      titleZh: `认知革命`,
      titleEn: `The Cognitive Revolution`,
      bodyZh: `埃利斯 1955 年创立理性情绪行为疗法（REBT）与 ABC 模型；贝克在 1960 年代初转向认知研究，提出认知模型与认知三联。`,
      bodyEn: `Ellis founded REBT and the A-B-C model in 1955; Beck turned to cognitive research in the early 1960s, proposing the cognitive model and triad.`,
    },
    {
      year: `1970s–1980s`,
      titleZh: `认知与行为整合`,
      titleEn: `Cognitive–Behavioral Integration`,
      bodyZh: `班杜拉的社会学习理论（观察学习、自我效能）与梅肯鲍姆的自我指导、压力接种训练打通“认知—行为”桥梁，“认知行为疗法”作为统一名称流行。`,
      bodyEn: `Bandura's social learning (modeling, self-efficacy) and Meichenbaum's self-instructional and stress inoculation training bridged cognition and behavior; CBT became the common name.`,
    },
    {
      year: `1980s–1990s`,
      titleZh: `手册化与大型验证`,
      titleEn: `Manualization & RCTs`,
      bodyZh: `NIMH 抑郁症合作研究等大型试验验证疗效，标准化治疗手册与临床指南编制成形，CBT 倾向短程、结构化、目标导向。`,
      bodyEn: `Landmark trials such as the NIMH depression study validated CBT, while standardized manuals and guidelines made it brief, structured, and goal-oriented.`,
    },
    {
      year: `1990s`,
      titleZh: `循证运动`,
      titleEn: `The Evidence Movement`,
      bodyZh: `APA 临床心理学分会推动“实证支持治疗（EST）”清单，CBT 因 RCT 证据最充分，成为心理治疗循证化的最大受益者。`,
      bodyEn: `APA Division 12 promoted lists of empirically supported treatments; CBT benefited most from its abundant RCT evidence.`,
    },
    {
      year: `1990s–2000s`,
      titleZh: `第三代浪潮与正念`,
      titleEn: `Third Wave & Mindfulness`,
      bodyZh: `海耶斯的 ACT、莱恩汉的 DBT、Segal/Teasdale/Williams 的 MBCT、Gilbert 的慈悲聚焦疗法（CFT）兴起，加入解离、接纳、价值行动等新机制，但不推翻前两波。`,
      bodyEn: `Hayes's ACT, Linehan's DBT, the MBCT trio, and Gilbert's CFT added defusion, acceptance, and values-based action without replacing the earlier waves.`,
    },
    {
      year: `2000s–2010s`,
      titleZh: `数字化与阶梯照护`,
      titleEn: `Digital & Stepped Care`,
      bodyZh: `电脑化/互联网 CBT 与自助指南（iCBT）广泛推广，英国 IAPT 等阶梯照护把 CBT 带入公共心理健康。`,
      bodyEn: `Computerized and guided internet-based CBT (iCBT) spread widely, and stepped-care systems like the UK's IAPT mainstreamed CBT into public mental health.`,
    },
    {
      year: `2010s–2020s`,
      titleZh: `跨诊断、本土适应与 AI`,
      titleEn: `Transdiagnostic, Adaptation & AI`,
      bodyZh: `统一方案等跨诊断方法、文化/本土适应改编（如更重视家庭与关系议题），以及 AI 辅助的文本与互联网 CBT 成为前沿方向。`,
      bodyEn: `Transdiagnostic protocols, culturally adapted formats, and AI-assisted text or internet CBT are current frontiers.`,
    },
  ],
  body: `# Cognitive Behavioral Therapy (CBT)

## Part 1: The Western (International) Tradition

## 1. Origins and Historical Development

CBT was not a single person's invention. It is the convergence of two lines — behaviorism and the cognitive revolution — in the mid-to-late 20th century, and scholars usually describe its history in terms of "waves."

%%TIMELINE%%

### The Waves in More Detail

**First wave: behavior therapy (1900s–1950s).** Pavlov's classical conditioning and Watson's "Little Albert" experiment (1920) explained fear as conditioned learning. Thorndike's law of effect and Skinner's operant conditioning established that behavior is shaped by reinforcement. Wolpe's systematic desensitization and reciprocal inhibition (1958) marked the start of modern behavior therapy, chiefly for fear and anxiety.

**Cognitive revolution and the second wave (1950s–1970s).** Ellis created REBT (1955) and the A-B-C model. Beck moved from psychoanalysis to cognition in the early 1960s, proposing the cognitive model and the cognitive triad. Bandura's social learning theory and self-efficacy, together with Meichenbaum's self-instructional and stress inoculation training, further bridged cognition and behavior.

**Cognitive–behavioral integration (1970s–1980s).** Behavioral therapists began accepting cognitive variables and cognitive therapists adopted behavioral techniques. "Cognitive-behavioral therapy" became the umbrella term, characterized by being brief, structured, goal-directed, and problem-focused.

**The third wave (1990s–).** Mindfulness- and context-oriented approaches emerged — Hayes's ACT, Linehan's DBT, Segal/Teasdale/Williams's MBCT, and Gilbert's compassion-focused therapy (CFT). The third wave does not discard earlier waves; it adds mechanisms such as defusion from thoughts, acceptance of experience, and values-based action.

**The evidence movement (1990s).** APA Division 12 promoted lists of empirically supported treatments (ESTs); CBT became the biggest beneficiary because of its abundant RCT evidence.


## 2. Key Figures and Contributions

CBT was shaped by remarkable scientists and clinicians. Each figure below contributed an idea that still structures how CBT is taught and practiced.

%%FIGURES%%


## 3. Core Principles and Mechanisms

### The Cognitive Model

CBT rests on a basic formula: **situation/event → automatic thought (interpretation) → emotion, behavior, and physiological response**.

The key claim is that it is not the event itself but the interpretation of the event that determines our emotion. The goal of treatment is to identify, examine, and correct distorted cognitions.

A full formulation tracks five elements: situation, thought, emotion, behavior, and physiology — which feed back on one another, so CBT can intervene on either the cognitive or behavioral side.

### Three Levels of Cognition

- **Automatic thoughts**: surface, fleeting interpretive thoughts ("He frowned because he dislikes me").
- **Intermediate beliefs**: rules, attitudes, and assumptions ("If I'm not perfect, people will reject me").
- **Core beliefs / schemas**: the deepest beliefs about self, others, and the world ("I am incompetent", "I am unlovable").

**The cognitive triad of depression** is central: negative views of oneself, of the world, and of the future.

### Common Cognitive Distortions

All-or-nothing thinking, catastrophizing, overgeneralization, selective attention, mind reading, labeling, "should" statements, emotional reasoning, discounting the positive, and personalization.

### Behavioral Mechanisms

- **Anxiety/fear** is maintained by avoidance and safety behaviors through negative reinforcement — the more successful the avoidance, the harder it becomes to face it.
- **Depression** is maintained by a vicious cycle of withdrawal and behavioral inhibition; behavioral activation directly breaks the "doing less → feeling worse" cycle.

### Neural Mechanisms and an Important Debate

At the research level, cognitive reappraisal is related to top-down control of the amygdala by the prefrontal cortex, and CBT training can be accompanied by changes in brain regions and neuroplasticity — though mechanism research is still developing.

One necessary caveat (which responds to possible "circular reasoning" concerns): the cognitive specificity hypothesis — that cognitive change is the mediator of outcome — has been challenged. Some studies show behavioral techniques work even without cognitive change; whether cognition or behavior changes first is a live question in mediator research.

> **Core points**: CBT holds that thoughts, feelings, and behaviors are an interconnected system; it uses collaborative empiricism and Socratic questioning; it works at three levels of cognition; and it combines cognitive, behavioral, emotional, and metacognitive change mechanisms.

## 4. Key Techniques and Methods

### The Therapy Structure (Session Skeleton)

**Mood check → agenda setting → review of homework → main topic for the session → assign new homework → feedback and summary**, all threaded with psychoeducation ("therapy as learning") and collaborative empiricism (therapist and client test ideas like scientists).

### Cognitive Techniques

- **Socratic questioning / guided discovery** — asking targeted questions so the client reaches their own conclusion.
- **Downward arrow** — from an automatic thought, repeatedly ask "what would it mean about me?" to reach a core belief.
- **Thought records** — situation–thought–emotion–evidence–alternative thought, in three-, five-, or seven-column formats.
- **Decatastrophizing** — "what is the worst that could happen? how likely? could I cope?"
- **Cognitive continuum, double-standard test, cost–benefit analysis, coping cards**.
- **Cognitive restructuring** and generating balanced alternative thoughts.

### Behavioral Techniques

- **Behavioral activation**: schedule activities, progressively increasing pleasure and mastery (core for depression).
- **Behavioral experiments**: design a real-world test of a belief ("if I greet them, will they dislike me?").
- **Exposure therapy**: graded exposure, interoceptive exposure, imaginal exposure, and response prevention (ERP, core for OCD).
- **Systematic desensitization, progressive relaxation / abdominal breathing**.
- **Problem-solving, social skills and assertiveness training, time management**.

### Third-Wave Techniques

Mindfulness practice, cognitive defusion ("treat thoughts as thoughts"), acceptance, and values clarification and committed action.

| Category | Core techniques | Main target |
| --- | --- | --- |
| Cognitive | Restructuring, thought records, downward arrow, Socratic questioning, decatastrophizing | Distorted appraisals, core beliefs |
| Behavioral | Activation, behavioral experiments, exposure/ERP, desensitization, graded tasks | Avoidance, withdrawal, habits |
| Physiological | Relaxation, breathing retraining | Arousal, somatic symptoms |
| Third wave | Mindfulness, defusion, acceptance, values | Metacognitive fusion, experiential avoidance |

**Modalities**: individual, group, family (common for children and adolescents), self-help materials, and digital CBT (iCBT/Apps) — with a large body of RCT and meta-analytic support for depression and anxiety.

> A minimal worked example: a client fears public speaking and predicts "I will freeze." Together they design a behavioral experiment: the client speaks for three minutes to a colleague, and afterward reviews the recording — the feared catastrophe does not occur, and the prediction is updated to a more balanced appraisal.

## 5. Evidence and Indications

CBT has the largest body of RCTs and meta-analyses in psychotherapy. Hofmann et al. (2012), in a large meta-analysis of 106 studies, found the strongest effects for anxiety disorders, moderate-to-large effects for depression, and large effects for OCD — with gains well maintained at follow-up.

### Indication Tiers (based on guidelines and meta-analyses)

| Evidence tier | Indications |
| --- | --- |
| First-line / strong | Depression (mild-to-moderate alone, moderate-to-severe with medication), GAD, panic, social anxiety, specific phobia, OCD (especially ERP), PTSD, eating disorders (bulimia), insomnia (CBT-I), chronic pain and somatic disorders, substance use (adjunct) |
| Good / adjunctive | Bipolar (psychoeducation adjunct), borderline personality disorder (DBT), schizophrenia (CBTp as medication adjunct), hypochondriasis, addictive behavior |
| Limited / cautious | Severe acute psychotic symptoms (not alone), severe cognitive impairment |

An OCD network meta-analysis found all psychological treatments significantly better than waitlist, with the largest effect for ERP (SMD −1.39) and about −1.20 for pure CBT.


**Relative advantages over medication**: no drug side effects, longer-lasting improvement, and better relapse prevention; long-term evidence is robust for GAD and panic.

**Cautions**: high suicide risk, severe psychomotor retardation, and acute psychosis require medical or medication treatment first; CBT should not be used in isolation, and therapists need supervision to avoid "reading from a manual."

## 6. Applications and Special Populations

- **Children and adolescents**: evidence-based protocols for anxiety, depression, OCD, and behavioral problems; emphasize parental involvement, gamifying techniques, shorter and more concrete homework. Common issues include school refusal, exam anxiety, internet and gaming addiction, and peer problems. Because of cognitive development, use more behavioral and concrete tools (emotion cards, graded challenge ladders).
- **Older adults**: pace more slowly and simplify worksheets; account for cognitive function, hearing and vision; often comorbid with chronic illness, bereavement, and sleep problems, so CBT-I is especially useful.
- **Perinatal**: CBT for prenatal and postpartum depression is effective and recommended as a first choice during pregnancy to avoid medication concerns.
- **Chronic physical illness**: in cancer, heart disease, diabetes, and IBS, CBT improves both emotional comorbidity and disease-related behavior and quality of life.

## 7. Training, Certification, and Career

### International Certification and Career Paths

International credentials include the Beck Institute / Academy of Cognitive Therapy (US), the UK's BABCP, the US ABCT, ACBS (for ACT), and the World Congress of CBT (WCBCT) system. In practice:

- **BABCP (UK)** accreditation normally requires being a core health professional, completing a recognized CBT training (a postgraduate diploma or the equivalent, including a taught component), demonstrating supervised practice across a set number of cases, and passing a competence-based review.
- **Academy of Cognitive Therapy / Beck Institute (US)** requires completing its coursework (often a multi-module, multi-day training) and passing a written and recorded-competence assessment.
- **ABCT** is primarily a professional membership body rather than a training credential; the working/accreditation standard is usually set by national CBT organizations.
- Common to all: a core clinical background, supervised practice hours, continuing supervision or consultation, and adherence to an ethical code.

**Career settings**: hospital and psychiatric outpatient clinics, university counseling centers, community mental-health stations, EAP, private practice, and increasingly digital or stepped-care programs. Because CBT is manualized and evidence-based, it is often the most accessible orientational to get clients, jobs, and reimbursement — but it rewards clinicians who can flex the protocol with judgment rather than "reading from a manual."

## 8. Further Resources

**English classics**: Beck, A.T., *Cognitive Therapy and the Emotional Disorders* (1976); Beck, Rush, Shaw & Emery, *Cognitive Therapy of Depression* (1979); Judith Beck, *Cognitive Behavior Therapy: Basics and Beyond* (3rd ed.); Barlow (ed.), *Clinical Handbook of Psychological Disorders*.

**Journals**: *Behaviour Research and Therapy*, *Cognitive Therapy and Research*, *Journal of Consulting and Clinical Psychology*, *Behavior Therapy*.

**Organizations & websites**: Beck Institute (beckinstitute.org); ABCT (abct.org); BABCP (babcp.com); ACBS (contextualscience.org).

**Guidelines & evidence databases**: NICE guidelines, APA Division 12, Cochrane, PubMed.

---

## Part 2: The Development in China

### 1. Localization and Background

China's adoption and localization of CBT are inseparable from continuous international training. The behavioral and cognitive tradition was first introduced through the Sino-German psychotherapy workshops (Kunming 1988, formal program from 1997), followed by the Sino-American (Beck-CBT) program from 2007. These repeated, supervised programs produced a core Chinese faculty, which then built a national training ladder and a set of professional organizations. Key milestones:

%%TIMELINE_CHINA%%

### 2. China's CBT Professional Organizations

Since 2009, four professional bodies have formed what is collectively known as "China's CBT professional organizations." They coordinate training standards, disorder-specific curricula, academic congresses, and supervisor qualification.

| Organization | Established | Scope |
| --- | --- | --- |
| Chinese Medical Association (CMA) CBT collaborative group | From 2009 | Medical/psychiatric CBT within the CMA psychiatry branch |
| Chinese Psychological Society (CPS) CBT study group | November 2008 (roots from c. 2000, by Qian Mingyi) | CBT within the CPS clinical & counseling committee |
| China Association for Mental Health (CAMH) CBT committee | March 2012 (first committee of 48, chaired by Zhang Ning) | CBT training, curriculum, and governance within the CAMH |
| Chinese Medical Doctor Association (CMDA) CBT working group | From 2009 | Physician-facing CBT continuing education |

The four groups jointly publish training announcements and host the biennial China CBT academic congress; the congress in November 2019 (South China Normal University) took "CBT and psychosocial services" as its theme.

### 3. Training Ladder: Basic Class → System Class → Disorder-Specific Class

China's CBT organizations built a clear three-stage ladder:

- **Basic class (foundations).** Launched in May 2019 as the "CBT Basic Training Project," with content matching stage one of the system class; typically three intensive sessions of about nine days.
- **System class (advanced CBT therapist).** Launched in December 2017 as the "Advanced CBT Therapist System Training Project," jointly run by the core Chinese faculty of the Sino-German and Sino-American programs — the backbone for cultivating competent CBT therapists.
- **Disorder-specific class.** After the foundation and system classes, disorder-specific standardized trainings (depression, anxiety, insomnia) deepen clinical application.

These are underpinned by CBT core-competency standards and the Sino-German CBT supervisor training program, whose first cohort graduated at West China Hospital under Professor Zhang Lan. Classic program brands: the Sino-German Program (behavior and cognition track), the Sino-American Program (Beck-CBT), and university continuous training at Peking University, Beijing Normal University, and Central China Normal University.

### 4. Chinese Representatives and Key Figures

Key figures who advanced China's CBT training, research, and localization:

%%FIGURES_CHINA%%

### 5. Local Evidence

China's evidence base for CBT is growing:

- **2025 guideline.** The 2025 *Guideline for the Prevention and Treatment of Depression in China* lists CBT and behavioral activation (BA) as a Grade 1A recommendation for mild-to-moderate depression, usable alone in the acute phase; for moderate-to-severe cases it recommends medication combined with CBT. The guideline also, for the first time, includes digital therapies such as iCBT apps.
- **Computerized CBT (CCBT).** Wang Chun's team published the first effectiveness study of web-based CCBT in Chinese populations (2018), finding it effective, particularly among young and middle-aged, first-episode, short-course patients; she also pioneered VR-assisted CBT in China.
- **Group and neural mechanisms.** RCTs such as group attribution retraining versus SSRIs, together with pre-post functional-imaging studies of first-episode depression, are beginning to probe CBT's mechanisms in Chinese samples.

### 6. Localization and Challenges

Western CBT emphasizes individualism and "challenging beliefs." In China, practitioners adapt:

- **Relational and family context.** Weight family-system and relational issues more heavily than in the Western individualistic frame.
- **Authority and communication.** Adjust Socratic questioning for hierarchical/authority relationships; avoid rigid confrontational questioning that may feel disrespectful.
- **Cultural values.** Respect "face," filial piety, and collectivist expectations; frame CBT as collaborative problem-solving rather than as criticism of the client's thinking.
- **Service delivery.** Digital CBT (iCBT/CCBT) and school- or community-based rollout fit policies to bring psychological services into schools and communities, particularly in low-resource and primary-care settings.

### 7. Domestic Qualification and Training System

**Qualification status**: In September 2017 the Ministry of Human Resources and Social Security removed "psychological counselor" from the national occupational qualification catalogue; old certificates remain valid but no new ones are issued. Practical compliant paths today: the psychological therapist (NHC health professional qualification, the only legally recognized qualification to practice psychotherapy in medical institutions); the Chinese Psychological Society registration system (registered assistant psychologist / psychologist / supervisor); and the China Association for Mental Health occupational competence certificate (including the CBT committee system).

**China's CBT training system**: a complete ladder — basic class (foundations) → systematic class (advanced CBT therapist) → disorder-specific class (depression, anxiety, insomnia) — plus core competence standards and a Sino-German CBT supervisor training program (first cohort completed at West China Hospital). Classic brands: the Sino-German Program (behavioral and cognitive), the Sino-American Program (Beck-CBT system, in its 11th edition), and university continuous training (Peking University, Beijing Normal University, Central China Normal University).

**Career paths**: hospital (psychological therapist) → university counseling center → community mental-health service station → private studio; for an individual studio, "registered psychologist / CBT committee certificate + continuous supervision"; for the adolescent direction, add family therapy and crisis-intervention training.

### 8. Further China Resources

**Books** (Chinese): Judith Beck's *Cognitive Behavior Therapy: Basics and Beyond* (trans. Wang Jianping); Aaron Beck's *Cognitive Therapy: Basics and Applications* (trans. Wang Jianping); Wang Jianping (ed.), *Cognitive Behavior Therapy* (2nd ed.); Greenberger & Padesky's *Mind Over Mood*; Leahy's *Cognitive Therapy Techniques*.

**Journals**: *Chinese Journal of Mental Health*, *Chinese Journal of Psychiatry*.

**Organizations**: China's CBT professional organizations (cbtchina.com.cn); Chinese Mental Health Association (camh.org.cn).

**Database**: CNKI.

### 9. Choosing and Experiencing CBT in China

- **Where to find a qualified therapist**: prioritize a psychological therapist (NHC health qualification, working in medical institutions) or a registered psychologist under the CPS registration system. Hospital outpatient clinics, university counseling centers, and community mental-health service stations are more regulated entry points; private studios vary in quality.
- **Cost and time**: CBT is typically time-limited and more affordable than open-ended dynamic work. If you are training, the CBT committee's basic → system → disorder-specific ladder is the mainstream pathway.
- **What to expect**: a competent CBT therapist should be able to explain the rationale, set goals, and assign homework. If a session is only supportive talk with no structure or technique, that may not actually be CBT.
- **Data note**: program cohorts, editions, and fees change over time — verify with the current organizer (data as of 2025).

> In one sentence: CBT is a brief, structured therapy that fuses the empirical line of "how cognition shapes emotion" with the line of "how behavior maintains problems"; it has among the strongest evidence in psychotherapy and targets depression, anxiety, OCD, and insomnia. China has built a national professional system since the 1988 Sino-German workshop, with four CBT organizations, a three-stage training ladder (basic → system → disorder-specific), and a growing local evidence base (the 2025 guideline's 1A recommendation and localized CCBT). For an adolescent-focused practitioner, the disorder-specific classes (especially depression, anxiety, and insomnia) and the parent-involved child-adolescent modules are the highest-value entry points.

> Disclaimer: This overview is educational and does not replace professional training or individualized clinical judgment.`,
  bodyZh: `# 认知行为疗法（CBT）

## 第一部分：西方（国际）认知行为疗法

## 一、历史脉络与起源

CBT 不是一个人的发明，而是行为主义与认知革命两条线索在 20 世纪中后期合流的结果，学界通常用“波次”来概括。

%%TIMELINE%%

### 各波次细述

**第一波：行为治疗（1900s–1950s）。** 巴甫洛夫经典条件反射、华生 1920 年“小阿尔伯特实验”把恐惧解释为条件化习得；桑代克效果律、斯金纳操作性条件反射确立“行为由强化塑造”的操作范式；沃尔普 1958 年提出系统脱敏与互惠抑制，被视为现代行为治疗的开端，主要治疗恐惧与焦虑。

**认知革命与第二波（1950s–1970s）。** 埃利斯 1955 年创立理性情绪行为疗法（REBT）与 ABC 模型；贝克 1960 年代初在宾夕法尼亚大学从精神分析转向认知研究，系统提出认知模型与认知三联；班杜拉社会学习理论与自我效能、梅肯鲍姆的自我指导训练与压力接种训练，进一步打通“认知—行为”的桥梁。

**认知与行为的整合（1970s–1980s）。** 行为治疗师逐渐接纳认知变量，认知治疗师也吸收行为技术，“认知行为疗法”作为统一名称流行开来，特点是短程、结构化、目标导向、以问题为焦点。

**第三波（1990s–）。** 以正念与语境取向为代表：海耶斯的接纳承诺疗法（ACT）、莱恩汉的辩证行为疗法（DBT）、Segal/Teasdale/Williams 的正念认知疗法（MBCT）、Gilbert 的慈悲聚焦疗法（CFT）。第三波不推翻前两波，而是加入“与想法解离、接纳体验、价值行动”等新机制。

**循证运动（1990s）。** APA 临床心理学分会推动“实证支持治疗（EST）”清单，CBT 因 RCT 证据最充分，成为心理治疗循证化的最大受益者。


## 二、核心人物与贡献

CBT 的发展离不开一批杰出的科学家与临床工作者。每位都以独特观念塑造了今天的 CBT 教学与实践。

%%FIGURES%%


## 三、核心原理与作用机制

### 认知模型（基本公式）

CBT 的基本公式是：**情境/事件 → 自动思维（解释）→ 情绪、行为、生理反应**。

关键主张：不是事件本身，而是对事件的解释决定情绪。治疗目标是识别、检验、修正歪曲的认知。

完整的概念化追踪五个要素：情境、想法、情绪、行为、生理——它们彼此反馈，因此 CBT 既可从认知层也可从行为层切入。

### 认知的三个层次

- **自动思维**：表层、一闪而过的解释性念头（“他皱眉头是因为讨厌我”）。
- **中间信念**：规则、态度与假设（“如果我不完美，就会被嫌弃”）。
- **核心信念/图式**：最深层的自我、他人、世界观（“我是无能的”“我不值得被爱”）。

**抑郁的认知三联**是核心：对自己消极、对世界消极、对未来消极。

### 常见认知歪曲

全或无思维、灾难化、过度概括、选择性注意、读心术、贴标签、“应该”思维、情绪化推理、贬损积极经验、个人化。

### 行为机制

- **焦虑/恐惧**由回避与安全行为经负强化维持——回避越成功，越不敢面对。
- **抑郁**由退缩与行为抑制的恶性循环维持——行为激活直接打破“不动 → 更糟”的循环。

### 神经机制与一个重要争议

研究层面，认知重评与前额叶皮层对杏仁核的自上而下调控有关；CBT 训练可伴随相关脑区活动与神经可塑性改变，但机制研究仍在发展中。

一个必须提的争议（回应“循环论证”的可能含义）：CBT 的“认知特异性假设”（认知改变是疗效中介）一直受挑战——部分研究显示行为技术即使不改变认知也有效，“先有认知还是先有行为改变”是当前心理治疗机制研究（mediator 分析）要回答的问题。

> **核心要点**：CBT 把想法、情绪与行为视为互相联结的系统；它以协作式经验主义与苏格拉底式提问进行工作；它同时作用于认知三个层次；并综合运用认知、行为、情绪与元认知层面的改变机制。

## 四、主要技术和方法

### 治疗结构（会谈骨架）

**心境检查 → 议程设置 → 回顾上次作业 → 本次主题 → 布置新作业 → 反馈小结**，全程贯穿心理教育（“治疗也是学习”）与协作式经验主义（治疗师与来访者像科学家一样检验想法）。

### 认知技术

- **苏格拉底式提问 / 引导发现**——用一连串有针对性的问题，让来访者自行得出结论。
- **箭头向下技术**——从自动思维逐层追问“如果这是真的，那对我意味着什么？”，直到核心信念。
- **思维记录表**——情境—想法—情绪—证据—替代思维（三栏/五栏/七栏）。
- **去灾难化**——“最坏会发生什么？概率多大？能否应对？”
- **认知连续体、双重标准检验、成本—效益分析、应付卡**。
- **认知重构**与替代性平衡思维。

### 行为技术

- **行为激活**：活动安排，逐级增加愉悦感与掌控感活动（抑郁核心）。
- **行为实验**：设计验证性实验，直接检验信念（“若主动打招呼，别人是否讨厌我”）。
- **暴露疗法**：分级暴露、内感性暴露、想象暴露、反应阻止（ERP，强迫症核心）。
- **系统脱敏、渐进式放松/腹式呼吸**。
- **问题解决技术、社交技能与自信训练、时间管理**。

### 第三波技术

正念练习、认知解离（“把想法当想法”）、接纳、价值澄清与承诺行动。

| 类别 | 核心技术 | 主要目标 |
| --- | --- | --- |
| 认知 | 重构、思维记录、箭头向下、苏格拉底提问、去灾难化 | 扭曲的评估、核心信念 |
| 行为 | 激活、行为实验、暴露/ERP、系统脱敏、分级任务 | 回避、退缩、不良习惯 |
| 生理 | 放松、呼吸训练 | 唤醒、躯体症状 |
| 第三波 | 正念、解离、接纳、价值 | 认知融合、经验性回避 |

**治疗形式**：个体、团体、家庭（儿童青少年常见）、自助材料，以及数字化 CBT（iCBT/App）——大量 RCT 与元分析支持其对抑郁、焦虑有效。

> 最小示例：一位来访者害怕当众发言，并预测“我会当场卡壳”。咨询师与来访者共同设计一个行为实验：来访者讲三分钟，由一位同事旁听；之后回看录音，发现担心的灾难并未发生，于是那个认知预测被更新为更平衡的判断。

## 五、循证验证与适应症

CBT 是心理治疗中 RCT 与元分析最多的疗法。Hofmann 等（2012）对 106 项研究的大型元分析显示：对焦虑障碍效果最强，对抑郁有中等至大的效应量，强迫症获得大效应量，且效果在随访期保持较好。

### 适应症分级（基于指南与元分析）

| 证据等级 | 适应症 |
| --- | --- |
| 一线/强烈证据 | 抑郁障碍（轻中度可单用，中重度联合药物）、广泛性焦虑、惊恐障碍、社交焦虑、特定恐惧、强迫症（尤其 ERP）、PTSD、进食障碍（贪食症）、失眠障碍（CBT-I）、慢性疼痛与躯体形式障碍、物质使用障碍（辅助） |
| 良好/辅助证据 | 双相障碍（心理教育辅助）、边缘型人格障碍（DBT）、精神分裂症（作为药物辅助的 CBTp）、疑病症、成瘾行为 |
| 证据有限/谨慎 | 严重急性期精神病性症状（不宜单独使用）、严重认知损害者 |

强迫症网络元分析显示，各种心理治疗均显著优于等待名单，其中 ERP 效应量最大（SMD −1.39），纯 CBT（含认知成分）约 −1.20。


**相对药物的优势**：无药物副作用、疗效更持久、复发预防更好；对广泛性焦虑、惊恐等长期疗效证据扎实。

**注意事项**：自杀高风险、严重精神运动迟滞、精神病性急性期需先医学处理或药物，CBT 不作为孤立手段；治疗师需接受督导，防止“照本宣科”。

## 六、临床应用与特殊人群

- **儿童青少年**：焦虑、抑郁、强迫、行为问题均有循证方案；强调家长参与、把技术“游戏化”、作业设计更短更具体。常见场景：厌学/拒学、考试焦虑、网络与游戏成瘾、同伴关系问题。因认知发展水平，需要更多行为与具象化手段（如情绪卡片、分级挑战阶梯）。
- **老年人**：注意认知功能与听力视力限制，放慢节奏、简化表格；常与慢性病、丧亲、睡眠问题共病，CBT-I 尤其适用。
- **围产期**：产前产后抑郁的 CBT 有效，且被指南推荐为孕期首选（避免药物顾虑）。
- **慢性躯体疾病**：癌症、心脏病、糖尿病、肠易激综合征（IBS）等场景下，CBT 既改善情绪共病，也改善疾病相关行为与生活质量。

## 七、培训认证与职业路径

### 国际认证与职业路径

国际认证包括 Beck Institute / Academy of Cognitive Therapy（美国）、英国 BABCP、美国 ABCT、ACBS（适用于 ACT）、世界 CBT 大会（WCBCT）体系。落到实操层面：

- **BABCP（英国）认证**通常要求：先具备某一核心健康职业资格，完成经认可的 CBT 培训（研究生文凭或同等课程，含教学模块），在规定的案例数量上展示有督导的实践，并通过能力考核。
- **认知治疗学院 / Beck Institute**（美国）要求完成其课程（常为多模块、多天），并通过书面与录音的能力评估。
- **ABCT**主要是专业会员组织，而非培训认证；执业/认证标准通常由各国 CBT 组织设定。
- **共同点**：核心临床背景、有督导的实践小时、持续督导或同辈咨询、遵守伦理规范。

**职业场景**：医院与精神科门诊、高校心理中心、社区心理服务站、EAP、个体执业，以及日益增多的数字化或阶梯照护项目。由于 CBT 手册化、循证强，它往往是**最容易接到个案、拿到工作与报销**的取向——但真正出色的治疗师是能在手册基础上灵活判断，而不是“照本宣科”。

## 八、更多资讯来源

**英文经典**：Beck, A.T.《Cognitive Therapy and the Emotional Disorders》（1976）；Beck, Rush, Shaw & Emery《Cognitive Therapy of Depression》（1979）；Judith Beck《Cognitive Behavior Therapy: Basics and Beyond》（第 3 版）；Barlow 主编《Clinical Handbook of Psychological Disorders》。

**期刊**：Behaviour Research and Therapy、Cognitive Therapy and Research、Journal of Consulting and Clinical Psychology、Behavior Therapy。

**组织与网站**：Beck Institute（beckinstitute.org）；ABCT（abct.org）；BABCP（babcp.com）；ACBS（contextualscience.org）。

**指南与证据库**：NICE 指南、APA Division 12、Cochrane、PubMed。

---

## 第二部分：中国的发展

### 一、卷入与本土化背景

中国对 CBT 的接纳与本土化，与国际连续培训密不可分。行为与认知传统最初经由德中心理治疗研究院的**中德心理治疗讲习班**（1988 年昆明，1997 年正式开班）引入，2007 年起又由**中美班**（Beck-CBT 体系）跟进。这些连续的、有督导的项目培养出一批中国本土核心师资，进而构建起国家级培训阶梯与专业组织。以下为关键节点：

%%TIMELINE_CHINA%%

### 二、中国 CBT 专业组织的构成与职能

自 2009 年起，四个专业组织陆续成立，共同组成业内所称的“**中国 CBT 专业组织**”。它们在培训标准、专病课程、学术大会与督导师资质上协同推进。

| 组织 | 成立节点 | 定位 |
| --- | --- | --- |
| 中华医学会 CBT 协作组 | 2009 年起 | 精神医学/医疗体系内的 CBT 协作与推广 |
| 中国心理学会 CBT 学组 | 2008 年 11 月（根源可溯至 2000 年前后，钱铭怡发起） | 学会临床与咨询专委会框架下的 CBT 学组 |
| 中国心理卫生协会 CBT 专委会 | 2012 年 3 月（第一届 48 人，张宁任组长） | 协会内的 CBT 培训、课程与治理 |
| 中国医师协会 CBT 工作组 | 2009 年起 | 面向医师的 CBT 继续教育与推广 |

四家组织联合发布培训通知并共同主办两年一届的中国认知行为治疗学术大会；2019 年 11 月在华南师范大学召开的第六届大会，主题为“**CBT 与社会心理服务**”。

### 三、培训阶梯：基础班 → 系统班 → 专病班

中国 CBT 专业组织构建了清晰的三级培训阶梯：

- **基础班**（CBT 基础培训项目）：2019 年 5 月推出，内容与系统班第一阶段一致，通常为三期集训共约 9 天。
- **系统班**（高级 CBT 治疗师系统培训项目）：2017 年 12 月推出，由中国 CBT 专业组织联合“中德班”“中美班”中方核心师资力量共同开展，是培养优秀 CBT 治疗师的中坚力量。
- **专病班**（专病规范化系列培训）：在基础班与系统班之后，针对抑郁、焦虑、失眠等专病做规范化深化。

这套体系以**CBT 核心能力标准**为支撑，并配套**中德 CBT 督导师培训项目**（率先在华西医院结业，张岚团队培养出国内首批 CBT 督导师）。经典品牌还包括：**中德班**（行为与认知方向）、**中美班**（Beck-CBT 体系）、以及北大、北师大、华中师大等高校的连续培训项目。

### 四、中国代表与关键人物

以下关键人物推动了中国 CBT 的规范化培训、研究与本土化：

%%FIGURES_CHINA%%

### 五、中国本土循证

中国 CBT 的循证基础正在逐步夯实：

- **2025 年指南**：《中国抑郁障碍防治指南（2025 版）》将 CBT、行为激活（BA）等心理治疗列为轻中度抑郁的 **1A 级推荐**（可单独用于急性期）；中重度建议药物联合 CBT。该指南还**首次纳入 iCBT 等数字疗法**。
- **计算机化 CBT**（CCBT）：王纯团队发布**网络版 CCBT 在中国人群的应用及有效性研究**（2018），显示其对青中年、首次发病、病程较短者尤其有效，并在国内率先开展 VR 辅助 CBT。
- **团体与神经机制**：如团体归因治疗与 SSRI 的对照研究，以及抑郁症首次发病患者治疗前后脑功能影像研究，正在中国样本中探索 CBT 的作用机制。

### 六、本土化与挑战

西方 CBT 强调个人主义与“挑战信念”，在中国本土需作如下调整：

- **关系与家庭脉络**：相较西方个人主义框架，更侧重家庭系统与关系取向议题。
- **权威与沟通**：针对等级/权威关系下的沟通惯例调整苏格拉底式提问，避免生硬的对抗式追问。
- **文化价值观**：尊重“面子”“孝道”与集体主义期待，把 CBT 呈现为协作式问题解决，而非对来访者想法的批评。
- **服务落地**：数字化 CBT（iCBT/CCBT）与学校、社区推广契合国内“心理服务进学校/社区”的政策方向，对基层与低资源地区尤其有补位价值。

### 七、国内资质与培训体系

**国内职业资格现状**（重要前提）：2017 年 9 月人社部《国家职业资格目录》将“心理咨询师”移出目录，国家统一的心理咨询师职业资格取消，旧证仍有效但不再新增。目前事实上的三大合规路径：

- **心理治疗师**（卫健委卫生专业技术资格）——纳入国家职业资格目录，是唯一可在医疗机构从事心理治疗的法定资质；报考需医学/心理学相关本科 + 在医疗机构从业。
- **中国心理学会注册系统**（注册助理心理师/注册心理师/注册督导师）——行业公认的专业能力认证；2023 年底起中国心理学会与中科院心理所联合推进新的水平评价体系。
- **中国心理卫生协会职业能力水平证书**（含 CBT 专委会体系）。

**中国 CBT 专项培训体系**：构建了完整阶梯——**基础班**（CBT 基础培训）→ **系统班**（高级 CBT 治疗师）→ **专病班**（抑郁/焦虑/失眠等专病规范化），并有 CBT 核心能力标准与中德 CBT 督导师培训项目（第一期中德督导师项目已在华西医院结业）。经典品牌：**中德班**（行为与认知方向）、**中美班**（Beck-CBT 体系，已成为连续举办的经典培训系列）、各高校（北大、北师大、华中师大等）的连续培训项目。

**职业路径**：医院（心理治疗师）→ 高校心理中心 → 社会机构/社区心理服务站 → 个人工作室。对计划开个体工作室者：建议走“注册心理师/CBT 专委会培训证书 + 持续督导”组合；青少年方向建议再叠加家庭治疗与危机干预培训。

### 八、更多中国资讯来源

**书籍**（中文）：Judith Beck《认知行为疗法：基础与进阶》（王建平译）；Aaron Beck《认知疗法：基础与应用》（王建平译）；王建平主编《认知行为治疗》（第 2 版，北师大出版社）；Greenberger & Padesky《理智胜过情感》；Leahy《认知疗法技术：从业者指南》。

**期刊**：《中国心理卫生杂志》《中华精神科杂志》等。

**组织与网站**：中国 CBT 专业组织（cbtchina.com.cn）；中国心理卫生协会（camh.org.cn）。

**数据库**：中国知网（CNKI）。

### 九、在中国：选择与体验提示

- **如何找到合格的治疗师**：优先考虑心理治疗师（卫健委卫生专业技术资格，在医疗机构执业）或中国心理学会注册系统下的注册心理师。医院门诊、高校心理中心、社区心理服务站是更规范的入口；个人工作室参差较大。
- **费用与时长**：CBT 通常限时、比开放式动力工作更可负担。如果你在受训，CBT 专委会的“基础班 → 系统班 → 专病班”是主流路径。
- **对会谈的预期**：合格的 CBT 治疗师应能解释原理、设定目标并布置作业。如果一次会谈只有支持性聊天、没有结构或技术，那可能并不是真正的 CBT。
- **数据说明**：培训班届数、版本与费用会变化，请以当期主办方为准（数据截至 2025 年）。

> 一句话总结：CBT 是把“认知如何塑造情绪”与“行为如何维持问题”两条实证线索合流而成的短程结构化疗法，证据强度在心理治疗中首屈一指，主攻抑郁焦虑强迫失眠。自 1988 年中德讲习班至今，中国已建成由四个 CBT 专业组织、三级培训阶梯（基础班 → 系统班 → 专病班）与逐步夯实的本土循证（2025 年指南 1A 推荐、本土化 CCBT）共同构成的国家级专业体系——作为青少年方向从业者，专病班（尤其抑郁/焦虑/失眠）和家长参与的儿童青少年模块会是落地价值最高的切入点。

> 声明：本文为科普性概括，不替代专业培训或个体的临床判断。`,
  timelineChina: [
    {
      year: `1988`,
      titleZh: `首届中德心理治疗讲习班（昆明）`,
      titleEn: `First Sino-German Workshop (Kunming)`,
      bodyZh: `德中心理治疗研究院在昆明举办首届中德心理治疗讲习班，行为与认知治疗方向由此被系统介绍到中国，被视为国际合作系统培训的开端。`,
      bodyEn: `The German Center for Psychotherapy held the first Sino-German workshop in Kunming, formally introducing behavioral and cognitive therapy to China and marking the start of systematic international training.`,
    },
    {
      year: `1997`,
      titleZh: `中德班正式开班`,
      titleEn: `Sino-German Program Begins`,
      bodyZh: `中德心理治疗连续培训项目正式开班，行为与认知方向持续培养出中国第一代 CBT 治疗师。`,
      bodyEn: `The Sino-German continuous psychotherapy program officially began, training China's first generation of CBT therapists in its behavior-and-cognition track.`,
    },
    {
      year: `2000 前后`,
      titleZh: `中国心理学会 CBT 学组奠基`,
      titleEn: `CPS CBT Study Group Founded`,
      bodyZh: `北京大学钱铭怡教授发起中国心理学会 CBT 学组的前身工作，成员以中德班第一、二期行为组学员为主；学组于 2008 年 11 月正式成立。`,
      bodyEn: `Professor Qian Mingyi of Peking University initiated the precursor to the CPS CBT study group, staffed mainly by behavior-group alumni from the first two Sino-German cohorts; it was formally established in November 2008.`,
    },
    {
      year: `2007`,
      titleZh: `中美班（Beck-CBT 体系）`,
      titleEn: `Sino-American (Beck-CBT) Program`,
      bodyZh: `“中美班”引入贝克的经典认知治疗体系，推动 CBT 在中国向结构化、手册化方向系统培训。`,
      bodyEn: `The Sino-American program introduced Beck's classical cognitive therapy, moving Chinese CBT toward structured, manualized systematic training.`,
    },
    {
      year: `2009`,
      titleZh: `中国 CBT 专业组织形成`,
      titleEn: `China's CBT Organizations Form`,
      bodyZh: `先后成立中华医学会 CBT 协作组、中国心理学会 CBT 学组、中国心理卫生协会 CBT 专委会、中国医师协会 CBT 工作组，共同组成“中国 CBT 专业组织”。`,
      bodyEn: `The CMA CBT collaborative group, the CPS CBT study group, the CAMH CBT committee, and the CMA physician CBT working group were formed, together known as “China's CBT professional organizations.”`,
    },
    {
      year: `2012`,
      titleZh: `中国心理卫生协会 CBT 专委会成立`,
      titleEn: `CAMH CBT Committee Founded`,
      bodyZh: `2012 年 3 月，中国心理卫生协会心理治疗与咨询专委会 CBT 学组成立，第一届委员会 48 人，组长为南京医科大学附属脑科医院张宁教授。`,
      bodyEn: `In March 2012 the CAMH CBT committee was founded, with a first committee of 48 members chaired by Professor Zhang Ning of Nanjing Brain Hospital.`,
    },
    {
      year: `2017`,
      titleZh: `资格调整与系统班启动`,
      titleEn: `Qualification Change & System Class`,
      bodyZh: `9 月人社部将“心理咨询师”移出国家职业资格目录；12 月中国 CBT 专业组织联合中德/中美班中方核心师资，推出“高级 CBT 治疗师系统培训项目（系统班）”。`,
      bodyEn: `In September the counselor qualification was removed from the national catalogue; in December China's CBT organizations joined the Sino-German and Sino-American cores to launch the advanced CBT therapist system class.`,
    },
    {
      year: `2019`,
      titleZh: `基础班与学术大会`,
      titleEn: `Basic Class & Academic Congress`,
      bodyZh: `5 月推出“CBT 基础培训项目（基础班）”，内容与系统班第一阶段一致；11 月第六届中国认知行为治疗学术大会在华南师范大学召开，主题为“CBT 与社会心理服务”。`,
      bodyEn: `In May the CBT basic class launched, with content matching stage one of the system class; in November the sixth China CBT academic congress met at South China Normal University under the theme “CBT and psychosocial services.”`,
    },
    {
      year: `2020s`,
      titleZh: `专病规范化与数字疗法`,
      titleEn: `Disorder-Specific Training & Digital CBT`,
      bodyZh: `中国 CBT 专业组织推进抑郁、焦虑、失眠等专病规范化系列培训；王纯团队发布网络版计算机化认知行为治疗（CCBT）在中国人群的应用与有效性研究，数字疗法开始补位。`,
      bodyEn: `China's CBT organizations advanced disorder-specific training for depression, anxiety, and insomnia; Wang Chun's team published effectiveness data on web-based CCBT in Chinese populations, as digital CBT began to fill gaps.`,
    },
    {
      year: `2025`,
      titleZh: `本土指南落地`,
      titleEn: `Local Guideline Lands`,
      bodyZh: `《中国抑郁障碍防治指南（2025 版）》将 CBT、行为激活等心理治疗列为轻中度抑郁的 1A 级推荐（可单用于急性期），并首次纳入 iCBT 等数字疗法。`,
      bodyEn: `The 2025 Chinese depression guideline lists CBT and behavioral activation as Grade 1A for mild-to-moderate depression (usable alone in the acute phase) and, for the first time, includes digital therapies such as iCBT.`,
    },
  ],
  figuresChina: [
    {
      nameZh: `钱铭怡`,
      nameEn: `Qian Mingyi`,
      years: `b. 1956`,
      titleZh: `中国心理学会 CBT 学组奠基、注册系统推动者`,
      titleEn: `CPS CBT Study Group Founder; Registration System Advocate`,
      bioZh: `北京大学心理学与认知科学学院教授，临床与咨询心理学方向。2000 年前后发起中国心理学会 CBT 学组（2008 年 11 月正式成立）；参与建立中国心理学会临床与咨询心理学注册系统的注册督导师制度，任中国心理卫生协会 CBT 专委会顾问。`,
      bioEn: `Professor of clinical and counseling psychology at Peking University. He initiated the precursor to the CPS CBT study group around 2000 (formally established November 2008) and helped build the registered-supervisor system of the CPS registration system; he serves as advisor to the CAMH CBT committee.`,
    },
    {
      nameZh: `张宁`,
      nameEn: `Zhang Ning`,
      years: `b. 1963`,
      titleZh: `中国心理卫生协会 CBT 专委会主任委员`,
      titleEn: `Chair, CAMH CBT Committee`,
      bioZh: `江苏南京人。南京医科大学附属脑科医院教授（曾任副院长）、南京医科大学认知行为治疗研究所所长；任中国心理卫生协会 CBT 专委会主任委员（2012 年第一届学组组长），后为名誉主任委员；亚洲认知行为治疗协会主席。`,
      bioEn: `Born in Nanjing, Jiangsu. Professor (and former vice dean) at Nanjing Brain Hospital and director of the CBT institute at Nanjing Medical University; he chaired the CAMH CBT committee (first committee head in 2012) and now serves as honorary chair; he is also president of the Asian Association of Cognitive Behavioral Therapy.`,
    },
    {
      nameZh: `李占江`,
      nameEn: `Li Zhanjiang`,
      years: `b. 1960s`,
      titleZh: `北京安定医院、CBT 专委会主委`,
      titleEn: `Beijing Anding Hospital; CBT Committee Chair`,
      bioZh: `首都医科大学附属北京安定医院副院长，中国心理卫生协会 CBT 专委会副主任委员/主任委员，长期推动 CBT 的医疗场景规范化培训与临床应用。`,
      bioEn: `Vice dean of Beijing Anding Hospital (Capital Medical University) and a vice chair/chair of the CAMH CBT committee, who has long promoted standardized CBT training and clinical use in medical settings.`,
    },
    {
      nameZh: `王建平`,
      nameEn: `Wang Jianping`,
      years: `b. 1960s`,
      titleZh: `CBT 连续培训与本土化教材`,
      titleEn: `CBT Continuous Training & Localization Texts`,
      bioZh: `北京师范大学心理学部二级教授、博导，具精神医学训练与长期临床经验。连续三年在波士顿大学和哈佛医学院学习 CBT，并在宾夕法尼亚大学 Beck 所参加多次培训；以“经典 CBT + 现代 CBT”整合架构主导 CBT 连续培训，培养出多人组成的 CBT 培训与督导团队，译著、主编《认知行为疗法》等。`,
      bioEn: `Professor at Beijing Normal University with psychiatric training and long clinical practice. He studied CBT for three years at Boston University and Harvard Medical School and trained repeatedly at the Beck Institute in Philadelphia; leading continuous-training programs on a "classic + modern CBT" framework, he built an in-house training and supervision team and authored/translated CBT texts.`,
    },
    {
      nameZh: `方新`,
      nameEn: `Fang Xin`,
      years: `b. 1960s`,
      titleZh: `北京大学心理咨询与治疗中心主任`,
      titleEn: `Director, PKU Counseling & Treatment Center`,
      bioZh: `北京大学心理学系本硕，曾赴德国海德堡大学留学，获德国创伤治疗与催眠治疗证书。任北京大学心理咨询与治疗中心主任、中国心理卫生协会 CBT 专委会副主任委员、德中心理治疗研究院中方副主席、中国心理学会注册系统注册督导师，擅长案例概念化与 CBT 教学。`,
      bioEn: `Trained at Peking University (BA/MA) and studied at Heidelberg, holding German certificates in trauma therapy and hypnotherapy. As director of the PKU counseling and treatment center, vice chair of the CAMH CBT committee, deputy chair of the German-Chinese psychotherapy institute, and a registered supervisor, he specializes in case conceptualization and CBT teaching.`,
    },
    {
      nameZh: `刘哲宁`,
      nameEn: `Liu Zhening`,
      years: `b. 1960s`,
      titleZh: `湘雅二医院精神卫生研究所副所长`,
      titleEn: `Deputy Director, Xiangya No.2 Institute of Mental Health`,
      bioZh: `中南大学湘雅二医院精神卫生研究所副所长、一级主任医师/教授/博导，中华医学会精神病学分会委员兼副秘书长，中国心理卫生协会认知心理治疗委员会副主任委员；主要研究精神障碍的认知神经科学，曾担任第八届国际认知心理治疗大会中国内地筹委会主席。`,
      bioEn: `Deputy director of the Institute of Mental Health at Xiangya Second Hospital (Central South University), chief physician and professor, member/deputy secretary of the CMA psychiatry branch, and vice chair of the CAMH cognitive psychotherapy committee; he researches the cognitive neuroscience of psychiatric disorders and chaired the China mainland organizing committee of the 8th International Congress of Cognitive Psychotherapy.`,
    },
    {
      nameZh: `张岚`,
      nameEn: `Zhang Lan`,
      years: `b. 1960s`,
      titleZh: `华西医院心理评估与治疗中心负责人`,
      titleEn: `Head, West China Psychological Assessment & Treatment Center`,
      bioZh: `四川大学华西医院心理卫生中心心理评估与治疗中心负责人、教授/主任医师，中国心理卫生协会 CBT 专委会第 1–3 届副主任委员，中华医学会精神医学分会 CBT 研究协作组副组长；牵头中德 CBT 督导师培训项目，其团队培养出国内首批 CBT 督导师。`,
      bioEn: `Head of the psychological assessment and treatment center at West China Hospital's mental health center, professor and chief physician; a vice chair of the first three CAMH CBT committees and deputy head of the CMA CBT research collaborative group. He led the Sino-German CBT supervisor training, from which China's first batch of CBT supervisors graduated.`,
    },
    {
      nameZh: `刘兴华`,
      nameEn: `Liu Xinghua`,
      years: `b. 1970s`,
      titleZh: `北大心理学院副院长、正念学组组长`,
      titleEn: `Deputy Dean, PKU School of Psychological & Cognitive Sciences`,
      bioZh: `北京大学心理与认知科学学院副院长、临床与健康心理学系主任、行为与心理健康北京市重点实验室主任，中国心理卫生协会 CBT 专委会副主任委员、正念学组组长。整合正念减压与情绪障碍跨诊断统一方案，创立针对焦虑与抑郁困扰的情绪困扰的正念干预（MIED）。`,
      bioEn: `Deputy dean of the PKU School of Psychological and Cognitive Sciences, head of its clinical and health psychology department, and director of the Beijing Key Lab of Behavior and Mental Health; vice chair of the CAMH CBT committee and head of its mindfulness study group. He created Mindfulness Intervention for Emotional Distress (MIED) by integrating MBSR with a transdiagnostic unified protocol.`,
    },
    {
      nameZh: `王纯`,
      nameEn: `Wang Chun`,
      years: `b. 1970s`,
      titleZh: `CCBT/VR 辅助 CBT 本土化、专病方案`,
      titleEn: `CCBT & VR-Assisted CBT Localization; Disorder Protocols`,
      bioZh: `南京医科大学附属脑科医院心境障碍科副主任、南京医科大学认知行为治疗研究所副所长，中国心理卫生协会 CBT 专委会副主任委员。在国内首先研发计算机化 CBT 与 VR 辅助 CBT，团队完成网络版 CCBT 在中国人群的应用及有效性研究（2018），并开展团体归因治疗等随机对照研究。`,
      bioEn: `Deputy head of the mood disorders department at Nanjing Brain Hospital and deputy director of the CBT institute at Nanjing Medical University; vice chair of the CAMH CBT committee. She pioneered computerized CBT and VR-assisted CBT in China, led the effectiveness study of web-based CCBT in Chinese populations (2018), and ran RCTs such as group attribution retraining.`,
    },
  ],
  fitClient: {
    zh: `#### 一次会谈像什么

CBT 会谈是结构化的、协作式的。通常以简短的心境检查和设定议程开场，回顾上次作业，再围绕一到两个选定议题工作，最后布置新作业。治疗师更像教练或老师：会给你框架、工作表和技术，并期待你在两次会谈之间练习。焦点通常在现在与未来，工具很具体。很多来访者的描述是“像在学习”——离开时你能带一个真正可用的东西。

#### 咨询的基本设置

- **疗程**：常见抑郁、焦虑约 12–20 次（每次约 45–60 分钟，通常每周一次）；失眠的 CBT-I 通常 6–8 次；强迫症（尤其是暴露与反应阻止）、创伤后应激、人格或复杂议题可能延长到几十次乃至更久。短程焦点、计时结构是 CBT 的典型特征。
- **你可能将面对**：有些作业与行为实验（记录想法、做暴露练习）需要在会谈之间持续练习；治疗师可能直接指出一些想法与模式，这种“挑战想法”有时会短暂让人不舒服。若你更想要纯粹的倾诉、不希望在会谈后做练习，可能需要先和咨询师沟通确认。
- **注意事项**：急性精神病性症状、严重精神运动迟滞、高自杀风险需先做医学或药物/危机处理，CBT 不应单独承担；若治疗师“照本宣科”、把技术当公式硬套、缺乏个案判断，也要留意其是否接受了足够的培训与督导。

#### 来访者适配自测

下面没有标准答案，只是帮你想清楚自己期待什么样的咨询。对照自己的偏好勾一下即可：

- 我更想要：快速缓解症状、看到可衡量的进展 ／ 慢慢理解自己与深层模式
- 我更习惯：有结构、有议程、有具体工具 ／ 开放式、自由、慢慢展开
- 我更愿意：在会谈之间做练习与记录 ／ 把内容都留在会谈里谈
- 我更希望治疗师：像教练/老师一样给建议和工具 ／ 像一位陪我探索的同伴
- 我这次的投入：是短程、限时 ／ 可以长期、持续
- 我更想谈：现在与未来怎么走 ／ 过去与关系对我的影响

把这些答案带给咨询师，会有助于判断这个流派是否契合你，也更容易建立好的工作联盟。`,
    en: `#### What a Session Feels Like

A CBT session is structured and collaborative. It typically opens with a brief mood check and agenda setting, reviews homework from last time, works on one or two chosen issues, and closes by assigning new homework. The therapist acts more like a coach or teacher: you are given frameworks, worksheets, and skills, and you are expected to practice between sessions. The focus is usually on the present and the future, with concrete tools. Many clients describe it as "learning" — you leave with something you can actually use.

#### Basic Setup of the Therapy

- **Duration**: for common depression or anxiety, about 12–20 sessions (each 45–60 minutes, usually weekly); CBT-I for insomnia typically 6–8 sessions; OCD (especially exposure and response prevention), PTSD, or personality and complex issues may extend to dozens or more. Time-limited, goal-focused structure is typical of CBT.
- **What you may face**: some homework and behavioral experiments (recording thoughts, running exposures) need consistent practice between sessions; the therapist may directly point out thought and behavior patterns, and this "challenging your thinking" can be briefly uncomfortable. If you mainly want to talk freely and would rather not do exercises between sessions, it is worth confirming this with your therapist up front.
- **Cautions**: acute psychosis, severe psychomotor retardation, and high suicide risk require medical or medication/crisis management first; CBT should not be the sole responsibility. If a therapist simply "reads from a manual," forces techniques as a formula, or lacks clinical judgment, ask whether they have adequate training and supervision.

#### Client Fit Self-Check

There are no right answers — this is just to help you clarify what you want from therapy. Tick the side that sounds more like you:

- I mainly want to: relieve symptoms quickly and see measurable progress ／ slowly understand myself and deeper patterns
- I am more used to: structure, an agenda, and concrete tools ／ an open, free, unhurried space
- I would rather: practice and record between sessions ／ keep everything in the session
- I would prefer the therapist: as a coach or teacher who gives tools ／ as a companion who explores with me
- My commitment now is: short-term and time-limited ／ can be long-term and ongoing
- I would rather talk about: the present and the future ／ how the past and relationships affect me

Bring these answers to your therapist; it will help both of you judge whether this orientation fits you and build a stronger working alliance.`,
  },
  fitPractitioner: {
    zh: `#### 性格适配

如果你喜欢结构、循证、主动教学、可衡量目标、表达直接，CBT 很契合。如果你更耐受歧义、享受长程关系、愿意深入内省、也能承接强烈情感，那么动力取向可能更让你自在——两条路没有对错，匹配你的性格与工作方式就好。

#### 训练门槛与要求

CBT 通常**不要求**你自己的个人体验。它一般要求：经认可的 CBT 培训课程 + 有督导的案例实践 + 通过认证评估（如英国 BABCP、美国 ABCT / 认知治疗学院）。路径更标准化、更快、也往往更省钱；但需要持续参加继续教育与再认证，并接受个案督导。

#### 适用场景与就业方向

CBT 适合医院精神科/门诊、高校心理中心、社区心理服务站、EAP（员工帮助计划）、学校，以及数字化/阶梯照护等场景；也是最容易把工作做成可规模化、可评估、可报销的取向之一。就业方向多为医院、高校、机构、企业 EAP 与线上平台；个体执业时可叠加注册系统/专委会证书与持续督导。`,
    en: `#### Personality Fit

If you like structure, evidence, active teaching, measurable goals, and being direct, CBT is a natural fit. If you are more comfortable with ambiguity, long-term relationships, deep introspection, and strong affect, a dynamic orientation may suit you better — neither path is wrong; align it with your personality and preferred way of working.

#### Training Thresholds and Requirements

CBT typically does NOT require your own personal therapy. It usually asks for a recognized CBT training course, supervised case practice, and passing an accreditation review (e.g., BABCP in the UK, ABCT / Academy of Cognitive Therapy in the US). The path is more standardized, faster, and generally more affordable; it does, however, require ongoing continuing education, recertification, and case supervision.

#### Applicable Settings and Career Directions

CBT fits hospital psychiatry/outpatient clinics, university counseling centers, community mental-health stations, EAP, schools, and digital or stepped-care settings; it is also one of the easier orientations to make scalable, measurable, and reimbursable. Career directions are mostly hospitals, universities, agencies, corporate EAP, and online platforms; for private practice, add a registration-system/committee certificate and ongoing supervision.`,
  },
  category: `school`,
  school: `cbt`,
  status: `published`,
  figures: [
    {
      nameZh: `伊万·巴甫洛夫`,
      nameEn: `Ivan Pavlov`,
      years: `1849–1936`,
      titleZh: `经典条件反射`,
      titleEn: `Classical Conditioning`,
      bioZh: `俄国生理学家，以狗唾液分泌实验揭示条件反射（铃铛—进食联结），阐明学习、习惯形成与消退机制，成为行为治疗的神经—行为基础。`,
      bioEn: `Russian physiologist whose salivary-conditioning experiments revealed classical conditioning, explaining learning, habit formation, and extinction — foundations of behavioral treatment.`,
    },
    {
      nameZh: `约翰·华生`,
      nameEn: `John B. Watson`,
      years: `1878–1958`,
      titleZh: `行为主义奠基`,
      titleEn: `Founder of Behaviorism`,
      bioZh: `美国心理学家，1913 年发表《行为主义者眼中的心理学》，主张只研究可观察行为；1920 年“小阿尔伯特实验”演示恐惧的条件化。`,
      bioEn: `American psychologist whose 1913 manifesto restricted psychology to observable behavior; his 1920 Little Albert experiment demonstrated conditioned fear.`,
    },
    {
      nameZh: `伯尔赫斯·弗雷德里克·斯金纳`,
      nameEn: `B.F. Skinner`,
      years: `1904–1990`,
      titleZh: `操作性条件反射 / 激进行为主义`,
      titleEn: `Operant Conditioning`,
      bioZh: `美国心理学家，提出操作性条件反射与强化理论，以斯金纳箱研究行为后果对行为概率的影响，其原理被广泛用于行为干预。`,
      bioEn: `American psychologist who described operant conditioning and reinforcement; his Skinner box showed how consequences shape behavior, informing many behavioral interventions.`,
    },
    {
      nameZh: `约瑟夫·沃尔普`,
      nameEn: `Joseph Wolpe`,
      years: `1915–1997`,
      titleZh: `系统脱敏、互惠抑制`,
      titleEn: `Systematic Desensitization`,
      bioZh: `南非裔美国精神科医师，1958 年提出系统脱敏与互惠抑制：在放松状态下逐级想象恐惧情境，化解焦虑，被视为现代行为治疗的开端。`,
      bioEn: `South African-born psychiatrist who introduced systematic desensitization and reciprocal inhibition in 1958 — relaxing while imagining feared situations in a graded hierarchy — a milestone of behavior therapy.`,
    },
    {
      nameZh: `阿尔伯特·埃利斯`,
      nameEn: `Albert Ellis`,
      years: `1913–2007`,
      titleZh: `理性情绪行为疗法（REBT）`,
      titleEn: `Rational Emotive Behavior Therapy`,
      bioZh: `美国心理学家，1955 年创立 REBT 与 ABC 模型（事件—信念—结果），强调非理性信念是情绪困扰核心，以挑战与重构信念改善情绪与行为。`,
      bioEn: `American psychologist who founded REBT and the A-B-C model in 1955, arguing that irrational beliefs drive distress and can be challenged and restructured.`,
    },
    {
      nameZh: `阿伦·贝克`,
      nameEn: `Aaron T. Beck`,
      years: `1921–2021`,
      titleZh: `认知疗法创始者、认知三联`,
      titleEn: `Founder of Cognitive Therapy`,
      bioZh: `美国精神病学家，被誉为认知行为疗法之父。提出抑郁认知三联与自动思维/核心信念分层，开发贝克抑郁问卷（BDI）、焦虑问卷（BAI）与绝望量表，奠定抑郁症认知治疗。`,
      bioEn: `American psychiatrist, the father of cognitive therapy. He described the cognitive triad, a hierarchy of automatic thoughts to core beliefs, and developed the BDI, BAI, and hopelessness scale, founding cognitive treatment of depression.`,
    },
    {
      nameZh: `阿尔伯特·班杜拉`,
      nameEn: `Albert Bandura`,
      years: `1925–2021`,
      titleZh: `社会学习理论、自我效能`,
      titleEn: `Social Learning & Self-Efficacy`,
      bioZh: `加拿大裔美国心理学家，提出观察学习、示范与社会学习理论，以及自我效能概念，打通认知与行为之间的桥梁，影响深远。`,
      bioEn: `Canadian-born American psychologist who proposed observational learning, modeling, social learning theory, and self-efficacy — bridging cognition and behavior.`,
    },
    {
      nameZh: `唐纳德·梅肯鲍姆`,
      nameEn: `Donald Meichenbaum`,
      years: `b. 1939`,
      titleZh: `自我指导训练、压力接种训练`,
      titleEn: `Self-Instructional Training`,
      bioZh: `美国临床心理学家，发展自我指导训练与压力接种训练，以内在对话与应对策略帮助来访者管理压力，是“认知行为矫正”的代表人物。`,
      bioEn: `American clinical psychologist who developed self-instructional training and stress inoculation training, using internal dialogue and coping strategies.`,
    },
    {
      nameZh: `朱迪思·贝克`,
      nameEn: `Judith Beck`,
      years: `b. 1954`,
      titleZh: `CBT 教学体系与人格障碍 CBT`,
      titleEn: `CBT Teaching & Personality Disorders`,
      bioZh: `阿伦·贝克之女，著有《认知行为疗法：基础与进阶》，系统化 CBT 教学与个案概念化，是人格障碍 CBT 与临床培训的代表。`,
      bioEn: `Aaron Beck's daughter, author of "Cognitive Behavior Therapy: Basics and Beyond," who systematized CBT teaching, case conceptualization, and treatment of personality disorders.`,
    },
    {
      nameZh: `玛莎·莱恩汉`,
      nameEn: `Marsha Linehan`,
      years: `b. 1943`,
      titleZh: `辩证行为疗法（DBT）`,
      titleEn: `Dialectical Behavior Therapy`,
      bioZh: `美国心理学家，创立 DBT 治疗边缘型人格障碍与情绪失调、自伤，融合认知行为技术、验证与正念，强调“接受与改变”的辩证平衡。`,
      bioEn: `American psychologist who created DBT for borderline personality disorder, emotional dysregulation, and self-harm, blending CBT skills, validation, and mindfulness within a dialectic of acceptance and change.`,
    },
    {
      nameZh: `史蒂文·海斯`,
      nameEn: `Steven C. Hayes`,
      years: `b. 1948`,
      titleZh: `接纳承诺疗法（ACT）、关系框架理论`,
      titleEn: `Acceptance & Commitment Therapy`,
      bioZh: `美国心理学家，创立 ACT 与关系框架理论（RFT），提出心理灵活性模型，主张脱离、接纳概念与价值导向行动，是第三代语境行为科学的代表。`,
      bioEn: `American psychologist who created ACT and Relational Frame Theory, proposing psychological flexibility through defusion, acceptance, and values-based action.`,
    },
    {
      nameZh: `辛德尔·西格尔、马克·威廉姆斯、约翰·蒂斯代尔`,
      nameEn: `Zindel Segal, Mark Williams, John Teasdale`,
      years: `b. 1940s`,
      titleZh: `正念认知疗法（MBCT）`,
      titleEn: `Mindfulness-Based Cognitive Therapy`,
      bioZh: `三位临床研究者共同创立 MBCT，把正念冥想与认知治疗结合，用于预防抑郁复发，开创“去中心化”应对消极想法的新路径。`,
      bioEn: `Three clinical researchers who created MBCT, combining mindfulness with cognitive therapy to prevent depressive relapse and introducing a decentered stance toward thoughts.`,
    },
    {
      nameZh: `克里斯廷·帕德斯基、丹尼斯·格林伯格`,
      nameEn: `Christine Padesky & Dennis Greenberger`,
      years: `b. 1940s`,
      titleZh: `个案概念化与新 CBT 普及`,
      titleEn: `Case Conceptualization & "Mind Over Mood"`,
      bioZh: `两位临床心理学家合著《理智胜过情感》，系统普及个案概念化、引导发现与认知疗法技术，是全球通行 CBT 工作手册的代表。`,
      bioEn: `Clinical psychologists and co-authors of "Mind Over Mood," who popularized case conceptualization, guided discovery, and cognitive therapy techniques worldwide.`,
    },
    {
      nameZh: `埃德娜·福阿`,
      nameEn: `Edna Foa`,
      years: `b. 1937`,
      titleZh: `创伤延长暴露（PE）`,
      titleEn: `Prolonged Exposure`,
      bioZh: `美国临床心理学家，创伤焦点认知行为治疗的重要奠基者，系统发展延长暴露疗法治疗创伤后应激障碍，并被多国指南推荐。`,
      bioEn: `American clinical psychologist and a key founder of trauma-focused CBT who systematically developed prolonged exposure for PTSD, recommended by many national guidelines.`,
    },
  ],
};
