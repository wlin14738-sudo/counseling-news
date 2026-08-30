import type { FigureEntry, TimelineEntry } from "./topicTypes";

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
  category: string;
  school: string;
  status: string;
};

// 首发专题内容：认知行为疗法（CBT）系统梳理（中英双语）。
// 正文用 %%TIMELINE%% / %%FIGURES%% 占位符标记时间轴与人物的插入位置。
export const CBT_TOPIC: TopicSeed = {
  slug: `cbt`,
  title: `Cognitive Behavioral Therapy (CBT): A Systematic Overview`,
  titleZh: `认知行为疗法（CBT）系统梳理`,
  summary: `A structured overview of CBT's history, key figures, core principles, techniques, evidence base, clinical applications, and professional pathways.`,
  summaryZh: `系统梳理认知行为疗法的历史脉络、核心人物、核心原理、主要技术、循证证据、临床应用与职业路径。`,
  timeline: [
    {
      year: `1920s–1930s`,
      titleZh: `行为主义兴起`,
      titleEn: `Rise of Behaviorism`,
      bodyZh: `伊万·巴甫洛夫的经典条件反射与约翰·华生的行为主义宣言，把心理学从内省转向可观察的行为与刺激—反应联结，为行为治疗奠基。`,
      bodyEn: `Ivan Pavlov's classical conditioning and John B. Watson's behaviorist manifesto shifted psychology from introspection to observable behavior and stimulus–response links, laying the groundwork for behavior therapy.`,
    },
    {
      year: `1950s–1960s`,
      titleZh: `行为治疗成形`,
      titleEn: `Behavior Therapy Takes Shape`,
      bodyZh: `约瑟夫·沃尔普提出系统脱敏，汉斯·艾森克与伦敦学派推动行为治疗进入临床，行为治疗期刊、学会与培训班相继出现。`,
      bodyEn: `Joseph Wolpe introduced systematic desensitization, while Hans Eysenck and the London school pushed behavior therapy into clinic practice, accompanied by new journals, societies, and training programs.`,
    },
    {
      year: `1960s`,
      titleZh: `认知转向`,
      titleEn: `The Cognitive Turn`,
      bodyZh: `阿伦·贝克基于对抑郁患者消极思维的观察提出认知治疗；阿尔伯特·埃利斯创立理性情绪行为疗法（REBT），把认知重新带回治疗核心。`,
      bodyEn: `Aaron T. Beck developed cognitive therapy from observing depressed patients' distorted thoughts, and Albert Ellis created Rational Emotive Behavior Therapy (REBT), returning cognition to the center of treatment.`,
    },
    {
      year: `1970s`,
      titleZh: `整合为认知行为疗法`,
      titleEn: `Integration into CBT`,
      bodyZh: `唐纳德·梅肯鲍姆与迈克尔·马奥尼等推动行为方法与认知方法融合，「认知行为疗法」成为统称，强调认知中介如何影响行为改变。`,
      bodyEn: `Donald Meichenbaum and Michael Mahoney helped merge behavioral and cognitive methods; the umbrella term "cognitive-behavioral therapy" came to emphasize cognitive mediation of behavior change.`,
    },
    {
      year: `1980s–1990s`,
      titleZh: `手册化与大规模疗效验证`,
      titleEn: `Manualized Protocols & RCTs`,
      bodyZh: `NIMH 抑郁症合作研究等大型试验验证了 CBT 疗效，标准化手册与临床指南编制成形，CBT 成为循证心理治疗的代表。`,
      bodyEn: `Landmark trials such as the NIMH Treatment of Depression Collaborative Research Program validated CBT, and standardized manuals and guidelines made it the archetype of evidence-based psychotherapy.`,
    },
    {
      year: `1990s`,
      titleZh: `拓展到重性障碍与创伤`,
      titleEn: `Expansion to Severe Conditions`,
      bodyZh: `CBT 应用于精神病性症状、双相情感障碍等重性障碍，并发展出创伤焦点 CBT 与针对焦虑障碍的特定认知模型。`,
      bodyEn: `CBT extended to psychosis, bipolar disorder, and other severe conditions, while trauma-focused CBT and disorder-specific cognitive models emerged for anxiety and PTSD.`,
    },
    {
      year: `1990s–2000s`,
      titleZh: `第三代浪潮`,
      titleEn: `The Third Wave`,
      bodyZh: `史蒂文·海斯的接纳承诺疗法（ACT）、玛莎·莱恩汉的辩证行为疗法（DBT）、辛德尔·西格尔等的正念认知疗法（MBCT）掀起语境与正念取向的第三代浪潮。`,
      bodyEn: `Steven C. Hayes's ACT, Marsha Linehan's DBT, and mindfulness-based cognitive therapy led a contextual and mindfulness-oriented third wave of cognitive-behavioral approaches.`,
    },
    {
      year: `2000s–2010s`,
      titleZh: `数字化与阶梯照护`,
      titleEn: `Digital & Stepped Care`,
      bodyZh: `电脑化与互联网 CBT、指导式自助指南广泛推广，英国 IAPT 等大规模阶梯照护体系把 CBT 带入公共心理健康服务。`,
      bodyEn: `Computerized and internet-delivered CBT and guided self-help expanded rapidly, while stepped-care systems such as the UK's IAPT brought CBT into public mental health at scale.`,
    },
    {
      year: `2010s–2020s`,
      titleZh: `跨诊断、文化适应与 AI`,
      titleEn: `Transdiagnostic, Cultural Adaptation & AI`,
      bodyZh: `统一方案等跨诊断方法、文化与少数群体的适应性改编，以及 AI 辅助的文本与互联网 CBT，成为当前研究与应用的前沿。`,
      bodyEn: `Transdiagnostic protocols, culturally adapted formats, and AI-assisted text or internet-based CBT are among the current research and practice frontiers.`,
    },
  ],
  figures: [
    {
      nameZh: `伊万·巴甫洛夫`,
      nameEn: `Ivan Pavlov`,
      years: `1849–1936`,
      titleZh: `经典条件反射`,
      titleEn: `Classical Conditioning`,
      bioZh: `俄国生理学家，以狗唾液分泌实验揭示条件反射（铃铛—进食联结），阐明了学习、习惯形成与消退的基本机制，成为行为治疗的神经—行为基础。`,
      bioEn: `Russian physiologist whose salivary-conditioning experiments revealed classical conditioning (bell–food pairing), explaining learning, habit formation, and extinction—foundations of behavioral treatment.`,
    },
    {
      nameZh: `约翰·华生`,
      nameEn: `John B. Watson`,
      years: `1878–1958`,
      titleZh: `行为主义奠基`,
      titleEn: `Founder of Behaviorism`,
      bioZh: `美国心理学家，1913 年发表《行为主义者眼中的心理学》，主张心理学只研究可观察行为，并以小阿尔伯特实验演示恐惧的条件化。`,
      bioEn: `American psychologist whose 1913 manifesto Psychology as the Behaviorist Views It restricted psychology to observable behavior; his Little Albert experiment demonstrated conditioned fear.`,
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
      titleZh: `系统脱敏`,
      titleEn: `Systematic Desensitization`,
      bioZh: `南非裔美国精神科医师，基于交互抑制原理提出系统脱敏：让来访者在放松状态下想象由轻到重的恐惧情境，逐级化解焦虑，是行为治疗的里程碑。`,
      bioEn: `South African-born psychiatrist who developed systematic desensitization from reciprocal inhibition: relaxing while imagining feared situations in a graded hierarchy to dismantle anxiety—a milestone of behavior therapy.`,
    },
    {
      nameZh: `阿尔伯特·埃利斯`,
      nameEn: `Albert Ellis`,
      years: `1913–2007`,
      titleZh: `理性情绪行为疗法（REBT）`,
      titleEn: `Rational Emotive Behavior Therapy`,
      bioZh: `美国心理学家，创立 REBT，提出 A-B-C 模型（事件—信念—结果），强调非理性信念是情绪困扰的核心，并以挑战与重构信念改善情绪与行为。`,
      bioEn: `American psychologist who founded REBT and the A-B-C model (Activating event—Belief—Consequence), arguing that irrational beliefs drive distress and can be challenged and restructured.`,
    },
    {
      nameZh: `阿伦·贝克`,
      nameEn: `Aaron T. Beck`,
      years: `1921–2021`,
      titleZh: `认知疗法创始者、认知三联组`,
      titleEn: `Founder of Cognitive Therapy`,
      bioZh: `美国精神病学家，被誉为认知行为疗法之父。提出抑郁认知三联组（对自我、世界与未来的消极看法），发展出认知治疗、贝克抑郁量表与大量认知技术，影响遍及全球。`,
      bioEn: `American psychiatrist widely regarded as the father of cognitive-behavioral therapy. He described the cognitive triad of depression and built cognitive therapy, the Beck Depression Inventory, and a broad repertoire of cognitive techniques.`,
    },
    {
      nameZh: `唐纳德·梅肯鲍姆`,
      nameEn: `Donald Meichenbaum`,
      years: `b. 1939`,
      titleZh: `自我指导训练、压力接种训练`,
      titleEn: `Self-Instructional Training`,
      bioZh: `美国临床心理学家，发展自我指导训练与压力接种训练，以内在对话与应对策略帮助来访者管理压力，是认知行为矫正的代表人物。`,
      bioEn: `American clinical psychologist who developed self-instructional training and stress inoculation training, using internal dialogue and coping strategies—an influential figure in cognitive-behavioral modification.`,
    },
    {
      nameZh: `玛莎·莱恩汉`,
      nameEn: `Marsha Linehan`,
      years: `b. 1943`,
      titleZh: `辩证行为疗法（DBT）`,
      titleEn: `Dialectical Behavior Therapy`,
      bioZh: `美国心理学家，创立 DBT 治疗边缘型人格障碍与情绪失调，融合认知行为技术、验证与正念，强调接受与改变的辩证平衡。`,
      bioEn: `American psychologist who created DBT for borderline personality disorder and emotional dysregulation, blending cognitive-behavioral skills, validation, and mindfulness within a dialectic of acceptance and change.`,
    },
    {
      nameZh: `史蒂文·海斯`,
      nameEn: `Steven C. Hayes`,
      years: `b. 1948`,
      titleZh: `接纳承诺疗法（ACT）、关系框架理论`,
      titleEn: `Acceptance & Commitment Therapy`,
      bioZh: `美国心理学家，创立 ACT 与关系框架理论（RFT），提出心理灵活性模型，主张接纳而非控制想法、以价值导向行动，是第三代语境行为科学的代表。`,
      bioEn: `American psychologist who created ACT and Relational Frame Theory, proposing a psychological flexibility model that favors acceptance and values-based action over thought control—a leader of the third wave contextual behavioral science.`,
    },
    {
      nameZh: `辛德尔·西格尔、马克·威廉姆斯、约翰·蒂斯代尔`,
      nameEn: `Zindel Segal, Mark Williams, John Teasdale`,
      years: `b. 1940s`,
      titleZh: `正念认知疗法（MBCT）`,
      titleEn: `Mindfulness-Based Cognitive Therapy`,
      bioZh: `三位临床研究者共同创立 MBCT，把正念冥想与认知治疗结合，用于预防抑郁复发，开创了以去中心化应对消极想法的新路径。`,
      bioEn: `Three clinical researchers who created MBCT, combining mindfulness meditation with cognitive therapy to prevent depressive relapse and introducing a decentered stance toward negative thoughts.`,
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
  body: `# Cognitive Behavioral Therapy (CBT): A Systematic Overview

## 1. Origins and Historical Development

Cognitive behavioral therapy is a broad family of time-limited, structured, evidence-based treatments that emerged from the convergence of behavioral therapy and cognitive therapy in the mid-20th century. Its history is best read as a sequence of intellectual movements.

%%TIMELINE%%

## 2. Key Figures and Contributions

The development of CBT was shaped by remarkable scientists and clinicians. Each figure below contributed a distinctive idea that still structures how CBT is taught and practiced.

%%FIGURES%%

## 3. Core Principles and Mechanisms

CBT rests on a deceptively simple premise: how we think, feel, and act are tightly linked, and changing the way we interpret and respond to situations can reshape our emotions. This model is both a theory of disorder and a guide for intervention.

### The Cognitive Model

In a given situation, an automatic thought arises almost instantly, triggering an emotional response, a physiological reaction, and a behavior — which in turn feed back into the situation. A full CBT formulation tracks five elements:

- **Situation**: the external event or trigger.
- **Thought**: the automatic, often evaluative interpretation.
- **Emotion**: the resulting feeling (anxiety, sadness, anger, shame).
- **Behavior**: what you do (avoid, withdraw, seek reassurance, attack).
- **Physiology**: bodily responses such as tension, heart racing, or fatigue.

Because the loop is bidirectional, CBT can intervene at either the cognitive or the behavioral level.

### Levels of Cognition

CBT distinguishes three tiers of cognition that differ in depth and stability:

- **Automatic thoughts** are quick, situation-specific, and habitual (e.g., "I am going to embarrass myself").
- **Intermediate beliefs** are conditional rules and attitudes (e.g., "If I fail, people will reject me").
- **Core beliefs** are the deepest, most rigid schemes about self, others, and the world (e.g., "I am worthless").

Therapeutic work usually begins with automatic thoughts, then gradually moves toward intermediate and core beliefs as the client gains skill and trust.

### Collaborative Empiricism and Socratic Questioning

CBT is a partnership. The therapist and client form hypotheses and test them against evidence through guided discovery rather than advice or persuasion. **Socratic questioning** is the main instrument: the therapist asks a sequence of targeted questions that help the client examine their own conclusions. This keeps the client's autonomy intact and makes the work genuinely collaborative.

### Psychoeducation and Self-Management

Before any technique, clients learn the CBT model and the rationale. Psychoeducation normalizes symptoms, reduces shame, and empowers self-monitoring and homework — the habits that sustain change after therapy ends.

### Mechanisms of Change

Different techniques rely on different change pathways, and most protocols combine them:

- **Cognitive change**: restructuring a distorted thought so a situation is appraised more accurately.
- **Behavioral change**: testing predictions through action, breaking avoidance, and building alternative responses.
- **Emotional processing**: safely re-experiencing avoided feelings and memories so their threat value decreases.
- **Decentering**: observing thoughts as mental events rather than truths, reducing their emotional grip.

> **Core points**: CBT treats thoughts, feelings, and behaviors as an interconnected system; it uses collaborative empiricism and Socratic questioning; it targets automatic thoughts, intermediate beliefs, and core beliefs; and it combines cognitive, behavioral, emotional, and metacognitive mechanisms of change.

## 4. Key Techniques and Methods

CBT is not a single technique but a systematic procedure. Work is typically organized into phases, with techniques matched to the formulation.

### Phase 1: Assessment and Case Formulation

The therapist conducts a structured assessment, identifies the main symptoms and maintaining cycle, and produces a **case formulation** — a shared story of how the client's thoughts, feelings, behaviors, and life context keep the problem going. The formulation, not the diagnosis alone, drives technique selection.

### Phase 2: Cognitive Techniques

- **Cognitive restructuring**: identify a hot thought, examine the evidence for and against it, and generate a more balanced alternative that is credible rather than merely reassuring.
- **Thought records**: a structured worksheet linking situation → automatic thought → emotion → evidence → balanced response.
- **Downward arrow**: repeatedly ask "if this were true, what would it mean about me?" to descend from an automatic thought to a core belief.
- **Socratic questioning**: guided questions that help the client draw their own conclusions (e.g., "What would you tell a friend in this situation?").

### Phase 3: Behavioral Techniques

- **Behavioral activation**: schedule small, rewarding or values-aligned activities to counter withdrawal and low mood, then gradually increase.
- **Exposure and response prevention (ERP)**: approach feared stimuli in a graded way while resisting the safety behavior or ritual, allowing the anxiety to decline and the threat belief to be corrected.
- **Behavioral experiments**: design a real-world test of a prediction and record what actually happens.
- **Graded task assignment**: break overwhelming tasks into steps that steadily raise confidence.

### Phase 4: Physiological and Interpersonal Techniques

- **Relaxation and breathing retraining**: reduce physiological arousal and give the client a tool to manage panic or tension.
- **Problem-solving training**: structure the definition, brainstorming, decision-making, and action steps for practical problems.
- **Communication and assertiveness training**: build skills to express needs and set boundaries, which are often central to depression, anxiety, and relationship distress.

| Category | Core techniques | Main target |
| --- | --- | --- |
| Cognitive | Restructuring, thought records, downward arrow, Socratic questioning | Distorted appraisals, core beliefs |
| Behavioral | Activation, exposure/ERP, behavioral experiments, graded tasks | Avoidance, withdrawal, unhelpful habits |
| Physiological | Relaxation, breathing retraining | Arousal, somatic symptoms |
| Interpersonal | Problem-solving, communication, assertiveness | Life stress, relationships |

> A minimal worked example: a client fears public speaking and predicts "I will freeze." Together, the therapist and client run a behavioral experiment: the client speaks for three minutes while a colleague listens; afterward they review a recording, discover the feared catastrophe does not occur, and the cognitive prediction is updated to a more balanced appraisal.

## 5. Evidence Base and Indications

CBT is among the most rigorously studied psychotherapies, supported by hundreds of randomized controlled trials and meta-analyses.

- **Strong evidence**: major depressive disorder, generalized anxiety, panic disorder, social anxiety, obsessive-compulsive disorder, post-traumatic stress disorder, and insomnia.
- **Moderate-to-strong evidence**: eating disorders (especially bulimia and binge-eating disorder), chronic pain, body dysmorphic disorder, and substance use disorders.
- **Digital and guided self-help CBT** shows meaningful effects, especially for mild-to-moderate symptoms, and greatly expands access.
- **Comparable to medication** in many conditions, with durable gains and lower relapse risk; combination treatment may outperform either alone in severe cases.

## 6. Applications and Special Populations

- **Children and adolescents**: play-based, simplified, and family-involved formats.
- **Trauma-focused CBT (TF-CBT)**: integrates trauma narrative work with parent involvement for children exposed to trauma.
- **Transdiagnostic approaches**: unified protocols target shared processes such as avoidance and repetitive negative thinking.
- **Culturally adapted CBT**: translated materials and culturally informed frameworks improve engagement across diverse groups.
- **Stepped and brief care**: low-intensity CBT is used to ration specialist resources while preserving access.

## 7. Training, Certification, and Career

- **Core training**: graduate programs in clinical psychology, counseling, or social work, plus supervised clinical experience and dedicated CBT coursework.
- **Professional bodies**: the Association for Behavioral and Cognitive Therapies (ABCT) and the British Association for Behavioural and Cognitive Psychotherapies (BABCP) are leading organizations.
- **Certification**: many regions offer CBT accreditation (e.g., BABCP accreditation, national CBT registries) requiring documented supervised practice and continued professional development.
- **Supervision**: regular case supervision is essential, especially while learning manualized protocols and teletherapy delivery.
- **Career paths**: stepped-care and public-health roles, private practice, research, digital mental-health product design, and training and supervising junior clinicians.

## 8. Further Resources

- Association for Behavioral and Cognitive Therapies (ABCT): https://www.abct.org
- British Association for Behavioural and Cognitive Psychotherapies (BABCP): https://babcp.com
- Beck Institute for Cognitive Behavior Therapy: https://beckinstitute.org
- National Institute for Health and Care Excellence (NICE) clinical guidelines: https://www.nice.org.uk

> Disclaimer: This overview is educational and does not replace professional training or individualized clinical judgment.`,
  bodyZh: `# 认知行为疗法（CBT）系统梳理

## 一、历史脉络与起源

认知行为疗法是 20 世纪中叶行为治疗与认知治疗融合而来的一个庞大、限时、结构化且重循证的疗法家族。它的历史，最好作为一系列思想运动的演进脉络来理解。

%%TIMELINE%%

## 二、核心人物与贡献

CBT 的发展离不开一批杰出的科学家与临床工作者。以下每位都以独特的观念塑造了今天的 CBT 教学与实践。

%%FIGURES%%

## 三、核心原理与作用机制

CBT 建立在一个看似简单的前提之上：思维、情绪与行为紧密相连，改变我们解读情境和回应情境的方式，就能重塑情绪。它既是障碍的理论，也是干预的指南。

### 认知模型

面对某个情境，一个自动想法几乎瞬间浮现，随即触发出情绪、生理反应与行为——而这又会反过来影响情境。完整的 CBT 个案概念化追踪五个要素：

- **情境**：外部事件或诱因。
- **想法**：自动化、常带评价性的解读。
- **情绪**：由此产生的感受（焦虑、悲伤、愤怒、羞耻）。
- **行为**：你做了什么（回避、退缩、反复求证、攻击）。
- **生理**：肌肉紧张、心跳加速、疲乏等身体反应。

由于循环是双向的，CBT 既可从认知层也可从行为层切入。

### 认知的层次

CBT 区分三个深度与稳定性不同的认知层级：

- **自动思维**：快速、针对具体情境、习惯化（如"我要出丑了"）。
- **中间信念**：条件化规则与态度（如"如果我失败，别人就会排斥我"）。
- **核心信念**：关于自我、他人与世界最深最僵化的图式（如"我一无是处"）。

治疗通常先从自动思维入手，随着来访者技能与信任提升，再逐步触及中间信念与核心信念。

### 协作式经验主义与苏格拉底式提问

CBT 是一场合作。咨询师与来访者像团队一样提出假设，并对照证据检验，而不是说教或劝说。**苏格拉底式提问**是主要工具：咨询师通过一连串有针对性的问题，帮助来访者自己审视结论。这既保护来访者的自主性，也让工作真正协作。

### 心理教育与自我管理

在运用任何技术之前，来访者先要理解 CBT 模型及其背后的理由。心理教育能让症状正常化、减轻羞耻，并为自我监测与家庭作业打下基础——正是这些习惯让改变持续到治疗结束之后。

### 改变的机制

不同的技术依赖不同的改变通路，多数方案会综合运用：

- **认知改变**：重构扭曲的想法，使对情境的评估更准确。
- **行为改变**：通过行动检验预测、打破回避、建立替代性反应。
- **情绪加工**：安全地重历被回避的情感和记忆，降低其威胁值。
- **去中心化**：把想法当作心理事件而非事实来观察，减弱其情绪张力。

> **核心要点**：CBT 把想法、情绪与行为视为互相联结的系统；它以协作式经验主义与苏格拉底式提问进行工作；它同时针对自动思维、中间信念与核心信念；并综合运用认知、行为、情绪与元认知层面的改变机制。

## 四、主要技术与方法

CBT 不是单一技术，而是一套有系统的流程。工作通常分阶段进行，技术要与个案概念化相匹配。

### 第一阶段：评估与个案概念化

咨询师进行结构化评估，识别主要症状与维持循环，并形成**个案概念化**——关于来访者的想法、感受、行为与生活背景如何共同维持问题的一幅共享图景。决定技术选取的，是概念化而不是单纯的诊断标签。

### 第二阶段：认知技术

- **认知重构**：找到"热想法"，审视支持与反对的证据，生成一个更平衡、可信而非只是一味安慰的替代想法。
- **思维记录**：用结构化表格把情境 → 自动思维 → 情绪 → 证据 → 平衡反应串联起来。
- **向下箭头**：反复追问"如果这是真的，那对我意味着什么？"，从自动思维下沉到核心信念。
- **苏格拉底式提问**：用引导性问题让来访者自行得出结论（如"如果朋友遇到同样情况，你会告诉他什么？"）。

### 第三阶段：行为技术

- **行为激活**：安排小而有益或符合价值的活动，打破退缩与低落，再逐步加重。
- **暴露与反应预防（ERP）**：以渐进方式接近恐惧刺激，同时抵制安全行为或仪式，让焦虑自然回落并修正威胁信念。
- **行为实验**：设计一个检验预测的真实情境，记录实际发生的状况。
- **分级任务**：把压倒性的任务拆成小步，逐步建立信心。

### 第四阶段：生理与人际技术

- **放松与呼吸训练**：降低生理唤醒，给来访者一个应对惊恐或紧张的抓手。
- **问题解决训练**：把实际问题结构化，经过定义、头脑风暴、决策与行动四个步骤。
- **沟通与自信训练**：建立表达需求、设定边界的能力，这在抑郁、焦虑与人际困扰中往往很关键。

| 类别 | 核心技术 | 主要目标 |
| --- | --- | --- |
| 认知 | 重构、思维记录、向下箭头、苏格拉底提问 | 扭曲的评估、核心信念 |
| 行为 | 激活、暴露/ERP、行为实验、分级任务 | 回避、退缩、不良习惯 |
| 生理 | 放松、呼吸训练 | 唤醒、躯体症状 |
| 人际 | 问题解决、沟通、自信 | 生活压力、关系 |

> 最小示例：一位来访者害怕当众发言，并预测"我会当场卡壳"。咨询师与来访者共同设计一个行为实验：来访者讲三分钟，由一位同事旁听；之后回看录音，发现担心的灾难并未发生，于是那个认知预测被更新为更平衡的判断。

## 五、循证证据与适应症

CBT 是被研究得最充分的心理治疗之一，有数百项随机对照试验与元分析支持。

- **强证据**：单相抑郁障碍、广泛性焦虑、惊恐障碍、社交焦虑、强迫症、创伤后应激障碍、失眠。
- **中等到强证据**：进食障碍（尤其是神经性贪食与暴食障碍）、慢性疼痛、体像障碍、物质使用障碍。
- **数字化与指导式自助 CBT** 显示出有意义的疗效，尤其适用于轻中度症状，并极大扩大可及性。
- **效果可与药物相当**：在许多疾病中疗效与药物相近，且维持更持久、复发风险更低；重症情况下联合治疗可能优于单一方案。

## 六、临床应用与特殊人群

- **儿童与青少年**：采用游戏化、简化与家长参与的形式。
- **创伤焦点 CBT（TF-CBT）**：把创伤叙事工作与家长参与结合，用于遭遇创伤的儿童。
- **跨诊断方法**：统一方案针对回避、重复负性思维等共同过程。
- **文化适应 CBT**：通过翻译材料与文化敏感框架，提升在多样群体的参与度。
- **阶梯与短程照护**：低强度 CBT 被用于合理调配专业资源，同时保障可及性。

## 七、培训、认证与职业路径

- **核心培训**：临床心理学、咨询或社会工作研究生课程，督导下的临床实践，以及专门的 CBT 课程。
- **专业组织**：认知与行为治疗协会（ABCT）与英国行为与认知心理治疗协会（BABCP）是领先组织。
- **认证**：许多地区提供 CBT 资质（如 BABCP 认证、各国 CBT 注册），通常要求记录督导实践与持续专业发展。
- **督导**：持续案例督导至关重要，尤其在学习手册化方案与远程治疗交付时。
- **职业路径**：阶梯照护与公共卫生岗位、私人执业、研究、数字心理健康产品设计，以及培训督导初级从业者。

## 八、更多资源

- 认知与行为治疗协会（ABCT）：https://www.abct.org
- 英国行为与认知心理治疗协会（BABCP）：https://babcp.com
- 贝克认知行为治疗研究所：https://beckinstitute.org
- 英国国家健康与临床优化研究所（NICE）临床指南：https://www.nice.org.uk

> 声明：本文为科普性概括，不替代专业培训或个体的临床判断。`,
  category: `school`,
  school: `cbt`,
  status: `published`,
};
