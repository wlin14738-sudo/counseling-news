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

export const HUMANISTIC_TOPIC: TopicSeed = {
  slug: `humanistic`,
  title: `Humanistic (Person-Centered) Therapy`,
  titleZh: `人本主义疗法`,
  summary: `A bilingual overview of humanistic and person-centered therapy covering its lineage, key figures, core principles, techniques, evidence, applications, China's training pathways, and further resources.`,
  summaryZh: `一套双语版的人本主义疗法内容：涵盖历史谱系与核心人物、核心原理、技术方法、循证与应用，并单独成篇介绍其在中国的发展。`,
  timeline: [
    {
      year: "1940s–1950s",
      titleZh: "来访者中心疗法成形",
      titleEn: "Client-Centered Therapy",
      bodyZh: "罗杰斯的《心理咨询与治疗》（1942）与《来访者中心疗法》（1951）确立了以人为中心取向：重视来访者的内在世界与成长潜能。",
      bodyEn: "Rogers's Counseling and Psychotherapy (1942) and Client-Centered Therapy (1951) established the person-centered approach, centering the client's inner world and growth potential.",
    },
    {
      year: "1940s–1950s",
      titleZh: "需求与自我实现",
      titleEn: "Needs & Self-Actualization",
      bodyZh: "马斯洛提出需求层次与自我实现概念（1943），1954 年《动机与人格》系统阐述——成为“第三势力”人本心理学的纲领。",
      bodyEn: "Maslow proposed the hierarchy of needs and self-actualization (1943), systematized in Motivation and Personality (1954) — the manifesto of humanistic psychology's \"third force.\"",
    },
    {
      year: "1950s",
      titleZh: "必要条件与充分条件",
      titleEn: "Necessary & Sufficient Conditions",
      bodyZh: "罗杰斯 1957 年提出：真诚一致、无条件积极关注、共情理解三种条件，对一个良好的治疗关系是必要且充分的。",
      bodyEn: "Rogers's 1957 paper argued that congruence, unconditional positive regard, and empathic understanding are necessary and sufficient for therapeutic change.",
    },
    {
      year: "1950s",
      titleZh: "完形治疗诞生",
      titleEn: "Gestalt Therapy",
      bodyZh: "皮尔斯与赫弗林（Hefferline）、古德曼合著《完形治疗》（1951），强调当下觉察、接触与整体整合——人本主义经验取向的重要分支。（劳拉·皮尔斯实际撰写了书中两章，但未获署名。）",
      bodyEn: "Perls, Hefferline, and Goodman's Gestalt Therapy (1951) emphasized present-moment awareness, contact, and integration — a key experiential branch of humanistic therapy. (Laura Perls wrote two chapters of the book but was not credited.)",
    },
    {
      year: "1960s–1970s",
      titleZh: "人本心理学建制化",
      titleEn: "Institutionalizing Humanistic Psychology",
      bodyZh: "《人本心理学杂志》（1961，马斯洛与苏蒂奇创办）创刊，美国人本心理学会（AHP）1961 年发起、1962 年正式成立；美国心理学会第 32 分会（人本心理学会）则迟至 **1971 年**成立；罗杰斯《论人的成长》（1961）广为流传。",
      bodyEn: "The Journal of Humanistic Psychology (1961, founded by Maslow and Sutich) launched, and the Association for Humanistic Psychology (AHP) was founded in 1961 and formally launched in 1962; APA Division 32 (Society for Humanistic Psychology) was established in **1971**; Rogers's On Becoming a Person (1961) became widely read.",
    },
    {
      year: "1970s–1980s",
      titleZh: "体验性聚焦（Focusing）",
      titleEn: "Experiential Focusing",
      bodyZh: "根德林《聚焦》（1978）发展出“内在感觉”取向，把罗杰斯的体验性同感进一步技术化，成为以人为中心的重要补充。",
      bodyEn: "Gendlin's Focusing (1978) developed the experiential \"felt sense,\" extending Rogers's empathic stance into a teachable technique.",
    },
    {
      year: "1980s–1990s",
      titleZh: "动机访谈与情绪聚焦疗法",
      titleEn: "Motivational Interviewing & EFT",
      bodyZh: "米勒与罗尼克发展动机访谈（1983 年首发论文/1991 年专著），把罗杰斯的辅导关系用于行为改变；格林伯格与约翰逊的伴侣情绪聚焦疗法（EFT）于 1980 年代形成（1988 年专著），格林伯格的情绪聚焦疗法（EFT）随之成形。",
      bodyEn: "Miller and Rollnick developed Motivational Interviewing (1983 paper / 1991 book), applying Rogers's relational conditions to behavior change; Greenberg and Johnson developed emotionally focused therapy for couples in the 1980s (1988 book), and Greenberg's Emotion-Focused Therapy (EFT) emerged.",
    },
    {
      year: "1990s–2000s",
      titleZh: "循证与人本的汇流",
      titleEn: "Evidence & Common Factors",
      bodyZh: "对抑郁的以人为中心治疗开展随机与元分析研究，显示短期与 CBT 相当、长期随访或略逊；疗效共同因素（治疗关系、共情）被广泛研究。",
      bodyEn: "Randomized and meta-analytic work on person-centred therapy for depression showed outcomes comparable to CBT at short term, with some advantage for CBT at longer follow-up; the common factors (alliance, empathy) became widely studied.",
    }
  ],
  body: "# Humanistic (Person-Centered) Therapy\n\n## Part 1: The Western (International) Tradition\n\n## 1. Origins and Historical Development\n\nHumanistic psychology arose as a \"third force\" in psychology — a reaction to behaviorism and psychoanalysis. It sees people not as shaped by reinforcement or unconscious drives, but as free, growth-oriented, and inherently worthy. Humanistic therapy is relational and non-pathologizing; change comes from the quality of the relationship and the client's own actualizing tendency.\n\n%%TIMELINE%%\n\n### The Main Lines in Brief\n\n**Person-centered therapy (Rogers).** Rogers argued that people possess an innate actualizing tendency — a drive toward growth, wholeness, and self-fulfillment. Distress arises when \"conditions of worth\" distort the self-concept. His radical claim (1957) was that congruence, unconditional positive regard, and empathic understanding are necessary and sufficient for change, as long as they are genuinely perceived by the client.\n\n**Gestalt (Perls).** Gestalt, a major experiential branch of humanistic therapy, emphasizes present-moment awareness, contact, and the integration of fragmented parts of experience. Awareness itself is seen as curative.\n\n**Existential-humanistic (Rollo May, James Bugental).** Parallel to Rogers, the existential tradition emphasizes freedom, choice, meaning, and confronting the givens of existence (death, isolation, freedom and responsibility, meaninglessness). Bugental articulated foundational postulates of humanistic psychology and served as the first president of the AHP; existential and humanistic views are often grouped as the \"existential-humanistic\" orientation.\n\n**Experiential, focusing, emotion-focused, and motivational approaches.** Gendlin's Focusing honors the body's \"felt sense\"; Greenberg's Emotion-Focused Therapy (EFT) and EFT for couples build on person-centered and experiential roots; Miller and Rollnick's Motivational Interviewing (MI) applies Rogers's relational conditions to behavior change.\n\n## 2. Key Figures and Contributions\n\nHumanistic therapy was shaped by figures who saw the person as free, whole, and oriented toward growth.\n\n%%FIGURES%%\n\n## 3. Core Principles and Mechanisms\n\n### The Humanistic View of the Person\n\n- People are free, growth-oriented, and have inherent dignity; the actualizing tendency is the engine of development.\n- Each person's reality is best understood from their internal frame of reference (phenomenology).\n- Distress reflects incongruence between the self and experience, frequently rooted in conditions of worth (\"I am lovable only if...\").\n\n### Rogers's Therapeutic Conditions (1957)\n\nRogers's 1957 paper actually proposed **six** \"necessary and sufficient\" conditions: (1) two persons are in psychological contact; (2) the client is in a state of incongruence (vulnerable or anxious); (3) the therapist is congruent in the relationship; (4) the therapist experiences unconditional positive regard for the client; (5) the therapist forms an empathic understanding of the client's world; and (6) the client perceives, at least to a minimal degree, the therapist's acceptance and empathy. The widely cited \"three therapist conditions\" are:\n\n- **Congruence**: the therapist is genuine and transparent; what they feel and express align.\n- **Unconditional positive regard**: worth is not contingent on behavior or approval.\n- **Empathic understanding**: the therapist senses the client's world as if it were their own, while keeping the \"as if.\"\n\n> **Contemporary debate**: Meta-analytic evidence broadly supports associations between empathy, positive regard, congruence and outcome (empathy and positive regard are rated \"demonstrably effective\"), but most researchers regard these conditions as \"necessary but not sufficient\" — change also depends on client variables, context, and specific methods (Watson, 2007). The radical 1957 \"necessary and sufficient\" claim survives as a historical stance, but its \"sufficiency\" part is rarely maintained strictly.\n\n### Gestalt Principles\n\nAwareness, here-and-now, contact, wholeness (figure and ground), and integration. Change follows from becoming fully aware and owning experience — not from insight handed over by the therapist.\n\n> **Core points**: Humanistic therapy holds that the relationship itself is the change agent; it foregrounds freedom, growth, and subjective experience; change is not mainly a technique but the client's honest contact with their own experience, supported by empathy, genuineness, and unconditional regard.\n\n## 4. Key Techniques and Methods\n\n### Person-Centered\n\nActive listening, reflection of feeling, empathy, congruence, unconditional positive regard, and clarification. Non-directive: the therapist does not interpret, direct, or give advice; the client is regarded as the expert on their own life.\n\n### Gestalt\n\nAwareness exercises, present-centered focus, empty chair, two-chair dialogue, exaggeration, experiments, body awareness, contact/withdrawal cycles, and \"I\" statements.\n\n### Experiential & Emotion-Focused\n\nFocusing on the felt sense; EFT two-chair work for self-critical splits; emotional deepening and processing; validation.\n\n### Motivational Interviewing\n\nOARS (open questions, affirmations, reflections, summaries), evoking change talk, rolling with resistance, and respecting autonomy.\n\n| Category | Core methods | Main target |\n| --- | --- | --- |\n| Person-centered | Reflection, empathy, congruence, unconditional positive regard | Self-concept, conditions of worth |\n| Gestalt | Awareness, empty chair, two-chair, experiments | Polarities, unfinished business, contact |\n| Experiential / EFT | Focusing, two-chair, validation | Felt sense, emotional processing |\n| Motivational | OARS, change talk, autonomy | Ambivalence, readiness to change |\n\n**Modalities**: individual, couples (EFT), group and encounter (Rogers), and MI in health and substance-use settings.\n\n> A minimal example: a client feels \"I'm terrible and unlovable.\" The person-centered therapist reflects the pain and holds unconditional regard; a Gestalt or EFT therapist may invite an empty-chair dialogue between the critical part and the hurt self. Over time the client owns and integrates the feeling rather than being run by it.\n\n## 5. Evidence and Indications\n\n- **The relationship is a strong common factor**: the alliance is the most-studied common factor — the latest meta-analysis (nearly 200 studies, 14,000+ patients) found an aggregate alliance–outcome correlation of about r=.27; empathy (82 studies) shows d≈.58 and positive regard/affirmation d≈.56, all rated \"demonstrably effective\" (Norcross et al.).\n- **Person-centered for depression**: the UK PRaCTICED trial (2021) in the IAPT service found person-centred experiential counselling (PCE-CfD) non-inferior to CBT at 6 months but slightly inferior at 12 months; meta-analyses indicate humanistic-experiential therapies are effective for mild-to-moderate depression and broadly comparable to CBT in the short term, with small advantages for CBT at longer follow-up.\n- **Emotion-Focused Therapy**: EFT for couples has strong evidence (meta-analytic pre–post d≈0.9; roughly 70–75% of couples improve markedly, with gains maintained at 2-year follow-up); individual EFT for depression has moderate-to-strong evidence.\n- **Motivational Interviewing**: a large trial base (so \"well evidenced\"), but effect sizes are generally **small-to-moderate** (e.g., SMD≈0.2–0.5 for substance use; g≈0.22 in Lundahl's meta-analysis) and shrink against active comparison treatments — a solid evidence base does not mean large effects.\n- **Gestalt**: direct outcome research is limited — a 2019 systematic review found only 11 empirical studies; where tested it appears roughly as effective as other orientations, but the evidence base is thin. A meta-analysis of chairwork (28 studies) found an incremental effect of d≈0.40 when added to treatment.\n- **Criticisms**: fewer large, manualized RCTs for some humanistic forms; the \"non-directive\" claim is debated; the \"sufficiency\" of Rogers's conditions is widely questioned; outcomes for severe or acute presentations may be limited without structure or adjuncts.\n\n### Indication Tiers (approximate)\n\n| Evidence / fit | Indications |\n| --- | --- |\n| Good fit | Depression (mild-moderate), anxiety, grief and bereavement, low self-worth, identity and values, relationship issues, substance use (MI), couples (EFT) |\n| Use with care / adjunct | Trauma (needs stabilization and phase-based work), eating disorders, severe OCD |\n| Caution | Acute psychosis, severe mania, high suicide risk require crisis and medical stabilization first; a purely relational approach alone is not sufficient |\n\n## 6. Applications and Special Populations\n\n- **Depression and anxiety**; **grief and bereavement**; low self-worth; identity and values.\n- **Relationship and attachment** (EFT for couples); **substance use and health behavior** (MI).\n- **Adolescents and young adults** (identity, growth); **older adults** (loss, life transitions).\n- **Training and supervision** — the \"person of the therapist\" and experiential learning are central to the model.\n\n## 7. Training, Certification, and Career (International)\n\n- **Person-centered**: counseling and psychotherapy training with a supervised clinical placement and often personal therapy; UK BACP person-centred route; US ACA, APA Division 32 (Society for Humanistic Psychology).\n- **Emotion-Focused**: ICEEFT certification for EFT (especially for couples).\n- **Gestalt**: accredited training institutes spanning multiple years.\n- **Common**: strong emphasis on the therapist's own personal growth, personal therapy, and sustained supervision; paths are typically longer and more relational than a manualized CBT course.\n- **Career settings**: counseling centers, universities, community and voluntary agencies, private practice, couples work, group facilitation, and health-behavior settings.\n\n## 8. Further Resources (International)\n\n**Classics**: Rogers, On Becoming a Person; Client-Centered Therapy; A Way of Being. Maslow, Motivation and Personality; Toward a Psychology of Being. Perls, Hefferline & Goodman, Gestalt Therapy (with Laura Perls's significant contribution). May, Love and Will; The Meaning of Anxiety. Bugental, The Search for Authenticity. Gendlin, Focusing. Greenberg, Emotion-Focused Therapy. Miller & Rollnick, Motivational Interviewing.\n\n**Journals**: Journal of Humanistic Psychology; The Humanistic Psychologist; Person-Centered & Experiential Psychotherapies; Journal of Counseling Psychology.\n\n**Organizations**: APA Division 32; BACP; World Association for Person-Centered & Experiential Psychotherapy and Counselling (WAPCEPC); ICEEFT; Association for the Advancement of Gestalt Therapy.\n\n**Evidence sources**: PubMed, Cochrane, APA Division 12, NICE guidelines.\n\n---\n\n## Part 2: The Development in China\n\nPerson-centered thinking reached mainland China earlier as a set of ideas than as a formal training system, and later turned into a structured training pathway.\n\n### 1. Early Translation and Reception (1980s–1990s)\n\nHumanistic psychology entered mainland China through psychology textbooks and the re-emergence of counseling practice in the 1980s; \"以人为中心\" became a common conceptual frame in counseling education.\n\n### 2. Introduction Through Hong Kong Exchange (1994)\n\nLam Man-Ping (林孟平), a professor at the Chinese University of Hong Kong and the first Chinese student of Patterson (C. H. Patterson, a major successor of Rogers), began lecturing and collaborating on the mainland in 1994; her textbook 心理咨询与治疗 (first published 1986, repeatedly reprinted) became a widely used person-centred text in the Chinese-speaking world.\n\n### 3. A Systematic Training Milestone (1998–2002)\n\nIn autumn 1998 Lam Man-Ping cooperated with Beijing Normal University to open counseling-and-psychotherapy master's classes, with doctoral training running from 1999 to 2001 (BNU's official frame is a 1998–2002 program) — a landmark that systematically introduced person-centered practice and training to the mainland; most leading figures in mainland person-centred counseling are her direct students.\n\n### 4. Registration System and Continuing Education (2007–)\n\nThe Chinese Psychological Society Clinical and Counseling Registration System (CPS) began in 2007, offering a credentialing and supervision framework. It later recognized a \"person-centered orientation counseling and psychotherapy continuous training program\" (2-year) as continuing education.\n\n### 5. Institutionalizing the Person-Centered Program (2018–)\n\nThe first registration-system-recognized person-centered systematic training was held in January 2018 at Northwest Normal University (Gansu), organized by the registration system's Gansu supervision site as a continuing-education project. Since then BNU's Psychology Department has run the two-year, credit-recognized \"Person-Centered Orientation Continuous Training Program\" in Beijing, Zhuhai, and Guangzhou cohorts, with the first cohort opening around 2020 and the sixth/seventh cohorts running by 2025. The CPS Clinical and Counseling Psychology Committee has also held eight national person-centered psychotherapy conferences in cities including Wuhan, Qingdao, Guilin, Chengdu, Zhuhai, Beijing, Lanzhou, and Shanghai.\n\n### 6. Group Counseling and Mental-Health Education\n\nFan Fumin (樊富珉) of Tsinghua University pioneered group counseling and group-based psychological interventions in China, with a humanistic orientation, widely applied in universities, schools, and community settings.\n\n%%TIMELINE_CHINA%%\n\n### 7. Chinese Representatives and Key Figures\n\n%%FIGURES_CHINA%%\n\n### 8. Local Evidence and Research\n\nChina's person-centered research remains relatively limited and is largely qualitative or service-oriented (training efficacy, counseling-education surveys, school counseling studies). There is a growing body of work on group counseling and on relational or therapeutic factors, but far fewer large randomized trials than for CBT.\n\n### 9. Localization and Challenges\n\nPerson-centered values — empathy, congruence, and non-judgment — align with the relational core of counseling but can feel abstract or \"slow\" to clients accustomed to advice. Hierarchical and authority-oriented norms can make non-directive work feel unfamiliar, so some practitioners blend it with evidence-based additions (MI, structured skills, group work). Ensuring structure and clinical competence for serious presentations remains a challenge in loosely regulated settings.\n\n### 10. Further China Resources\n\n**Books**: Lam Man-Ping, 心理咨询与治疗; textbooks on person-centered counseling; Fan Fumin and others on group counseling. **Organizations**: the Chinese Psychological Society registration system; university counseling centers; the person-centered continuous training program. **Databases**: CNKI.\n\n> In one sentence: humanistic therapy is the relational, growth-oriented \"third force\" — Rogers's therapeutic conditions (six in the 1957 original, of which the three \"therapist conditions\" of congruence, unconditional positive regard, and empathic understanding are best known), Gestalt awareness, and experiential techniques — with strong support for the therapeutic relationship (alliance, empathy) and EFT for couples, moderate evidence for person-centered depression treatment (comparable to CBT at short term, slightly inferior at longer follow-up), and a well-evidenced but small-to-moderate effect for MI; in China, Lam Man-Ping's person-centered teaching at Beijing Normal University, the registration-system continuous training, and Fan Fumin's group work laid the local foundation.\n\n> Disclaimer: This overview is educational and does not replace professional training or individualized clinical judgment.",
  bodyZh: "# 人本主义疗法\n\n## 第一部分：西方（国际）人本主义疗法\n\n## 一、历史脉络与起源\n\n人本主义心理学是心理学的“第三势力”——对行为主义与精神分析的反动。它不把人看作被强化或本能驱使的对象，而是把人视为自由、朝向成长、具有固有尊严的存在。人本主义疗法重关系、去病理化；改变来自关系的质量与来访者自身的实现倾向。\n\n%%TIMELINE%%\n\n### 几条主线概述\n\n**以人为中心的疗法（罗杰斯）。** 罗杰斯认为人具有内在的“实现倾向”——朝向成长、完整与自我实现的驱力。痛苦常源于“价值条件”扭曲了自我概念。他 1957 年的激进主张是：真诚一致、无条件积极关注、共情理解，只要被来访者真实感受到，对改变就是必要且充分的。\n\n**完形（皮尔斯）。** 完形是人本主义的重要体验分支，强调当下的觉察、接触与把破碎的经验整合起来。觉察本身就是疗愈。\n\n**存在-人本主义（罗洛·梅、布根塔尔）。** 与罗杰斯并行的存在主义传统强调自由、选择、意义与面对存在的既定境遇（死亡、孤独、自由与责任、无意义）。布根塔尔提出人本心理学的若干基本公设，也是美国人本心理学会（AHP）首任主席；存在主义与人本主义常合称“存在-人本”取向，影响深远。\n\n**体验、聚焦、情绪聚焦与动机访谈。** 根德林的《聚焦》看重身体中的“内在感觉”；格林伯格的情绪聚焦疗法（EFT）与伴侣 EFT 扎根于人本—体验；米勒与罗尼克的动机访谈（MI）把罗杰斯的关系条件用于行为改变。\n\n## 二、核心人物与贡献\n\n人本主义疗法由一批把人看作自由、完整、朝向成长的人塑造。\n\n%%FIGURES%%\n\n## 三、核心原理与作用机制\n\n### 人本主义的人观\n\n- 人是自由、朝向成长、具有固有尊严的；实现倾向是发展的引擎。\n- 每个人的现实最好从其内部参照系（现象学）去理解。\n- 痛苦反映自我与经验之间的不一致，常源于价值条件（“我只有……才被爱”）。\n\n### 罗杰斯的治疗条件（1957）\n\n罗杰斯 1957 年原文提出的是**六条**“必要且充分”的条件，其中前两条是咨询关系成立的前提，后三条是治疗师的态度条件，最后一条强调来访者的感知：\n\n1. 双方处于心理接触之中；\n2. 来访者处于不一致（脆弱、焦虑）状态；\n3. 治疗师在关系中真诚一致；\n4. 治疗师对来访者无条件积极关注；\n5. 治疗师对来访者形成共情理解；\n6. 来访者至少最低限度地感受到治疗师的接纳与共情。\n\n其中广为流传的“三大治疗师条件”是：\n\n- **真诚一致**：治疗师真实、透明，所感与所言一致。\n- **无条件积极关注**：价值不因行为或是否被认可而附带条件。\n- **共情理解**：治疗师如同“自己一样”感觉来访者的世界，同时保持“好像”。\n\n> **当代争论**：元分析与实证研究总体上支持共情、积极关注与疗效正相关（共情、积极关注被评级为“证据确凿”），但多数研究者认为这些条件是“必要而非充分”的——改变还受来访者变量、环境与具体技术影响（Watson, 2007）。“必要且充分”作为 1957 年的激进主张被保留为历史立场，其“充分”部分已很少被严格坚持。\n\n### 完形原理\n\n觉察、当下、接触、整体（图形—背景）、整合。改变来自充分觉察与认可经验——而非治疗师传递的洞察。\n\n> **核心要点**：人本疗法认为关系本身就是改变的媒介；它突出自由、成长与主观体验；改变主要不是技术，而是在共情、真诚与无条件接纳支持下，来访者对自己的真实经验的诚实接触。\n\n## 四、主要技术和方法\n\n### 以人为中心\n\n积极倾听、反映情感、共情、真诚、无条件积极关注与澄清。非指导：治疗师不做解释、不指导、不给建议；来访者被视为自己生活的专家。\n\n### 完形\n\n觉察练习、聚焦当下、空椅、两椅对话、夸张、实验、身体觉察、接触—退缩循环、“我”陈述。\n\n### 体验与情绪聚焦\n\n聚焦内在感觉；EFT 两椅对话处理自我批评的分裂；情绪深化与加工；共情验证。\n\n### 动机访谈\n\nOARS（开放式提问、肯定、反映、总结），唤起“改变语言”，顺着抗拒走，尊重自主。\n\n| 类别 | 核心方法 | 主要目标 |\n| --- | --- | --- |\n| 以人为中心 | 反映、共情、真诚、无条件积极关注 | 自我概念、价值条件 |\n| 完形 | 觉察、空椅、两椅、实验 | 分裂、未完成事件、接触 |\n| 体验/EFT | 聚焦、两椅、验证 | 内在感觉、情绪加工 |\n| 动机访谈 | OARS、改变语言、自主 | 矛盾、改变意愿 |\n\n**治疗形式**：个体、伴侣（EFT）、团体与会心（罗杰斯）、以及在健康与成瘾场景中应用的 MI。\n\n> 最小示例：一位来访者感到“我很糟、不可爱”。以人为中心治疗师反映这份痛苦并给予无条件接纳；完形或 EFT 治疗师可能邀请“批评的自己”与“受伤的自己”做空椅对话。随着时间推移，来访者能拥有并整合这种感受，而不是被它支配。\n\n## 五、循证验证与适应症\n\n- **关系是强共同因素**：治疗联盟是研究最充分的共同因素——最新元分析（约 200 项研究、1.4 万余名来访者）显示联盟与疗效的聚合相关 r≈0.27；共情（82 项研究）的效应量 d≈0.58，积极关注与肯定 d≈0.56，均达“证据确凿”等级（Norcross 等）。\n- **以人为中心治疗抑郁**：英国 IAPT 的“抑郁的以人为中心体验咨询”（PCE-CfD）经 PRaCTICED 试验（2021）显示，6 个月随访不劣于 CBT，但 12 个月随访时 CBT 略优；多数元分析提示人本—体验疗法对轻中度抑郁疗效显著、短期与 CBT 相当、长期略逊。\n- **情绪聚焦疗法**：伴侣 EFT 证据较强（元分析前—后效应量 d≈0.9，约 70%–75% 伴侣显著改善，效果可持续至 2 年随访）；针对抑郁的个体 EFT 也有中等偏强证据。\n- **动机访谈**：随机试验数量多、证据“充分”，但效应量总体为**小到中等**（如物质使用 SMD≈0.2–0.5；Lundahl 元分析 g≈0.22），对强对照组的优势更小——证据充分不等于效应很大。\n- **完形**：直接疗效的规范化 RCT 较少，2019 年系统综述仅纳入 11 项实证研究，结论为与其他取向相当但证据不足；其“空椅/双椅”技术（chairwork）元分析（28 项研究）显示相对其他治疗的增量效应 d≈0.40。\n- **批评与局限**：某些人本形式的规范化 RCT 较少；对“非指导”有争议；“必要且充分”的充分性被普遍质疑；对严重或急性议题，若无结构或辅助，疗效可能受限。\n\n### 适应症分级（约）\n\n| 证据/契合度 | 适应症 |\n| --- | --- |\n| 契合良好 | 轻中度抑郁、焦虑、丧亲与哀伤、低自我价值、身份与价值议题、关系议题、物质使用（MI）、伴侣（EFT） |\n| 谨慎/辅助 | 创伤（需稳定与分阶段处理）、进食障碍、严重强迫 |\n| 需谨慎 | 急性精神病、严重躁狂、高自杀风险需先危机与医学稳定；仅凭关系取向不足以应对 |\n\n## 六、临床应用与特殊人群\n\n- **抑郁焦虑**；**丧亲与哀伤**；低自我价值；身份与价值议题。\n- **关系与依恋**（伴侣 EFT）；**物质使用与健康行为**（MI）。\n- **青少年与青年**（身份、成长）；**老年人**（丧失、人生转折）。\n- **培训与督导**——治疗师本人与体验性学习是其核心。\n\n## 七、培训认证与职业路径（国际）\n\n- **以人为中心**：咨询与心理治疗训练 + 有督导的临床实习 + 常被要求的个人治疗；英国 BACP 的人本方向；美国 ACA、APA 第 32 分会（人本心理学会）。\n- **情绪聚焦**：ICEEFT 认证（尤其伴侣 EFT）。\n- **完形**：认证训练机构、历时数年。\n- **共同点**：非常看重治疗师本人的个人成长、个人治疗与持续督导；路径通常比手册化 CBT 更长、更重关系。\n- **职业场景**：咨询中心、高校、社区与公益机构、个体执业、伴侣工作、团体带领、健康行为。\n\n## 八、更多资讯来源（国际）\n\n**经典著作**：罗杰斯《论人的成长》《来访者中心疗法》《个人形成论》；马斯洛《动机与人格》《走向人之心理学的高峰》；皮尔斯、赫弗林、古德曼《完形治疗》（劳拉·皮尔斯有重要贡献）；罗洛·梅《爱与意志》《焦虑的意义》；布根塔尔《人本心理学的寻索》；根德林《聚焦》；格林伯格《情绪聚焦疗法》；米勒与罗尼克《动机访谈》。\n\n**期刊**：Journal of Humanistic Psychology；The Humanistic Psychologist；Person-Centered & Experiential Psychotherapies；Journal of Counseling Psychology。\n\n**组织**：APA 第 32 分会；BACP；世界以人为中心与体验心理治疗咨询协会（WAPCEPC）；ICEEFT；完形治疗推进协会。\n\n**证据库**：PubMed、Cochrane、APA Division 12、NICE 指南。\n\n---\n\n## 第二部分：中国的发展\n\n以人为中心思想进入中国大陆，最开始是作为一种观念，而不是一套正式训练体系，后来才逐步形成结构化培训路径。\n\n### 一、早期译介与接受（1980s–1990s）\n\n人本主义心理学经心理学教材与咨询实践的重启进入内地，“以人为中心”成为咨询教育中的常见概念框架。\n\n### 二、经香港交流引入（1994）\n\n香港中文大学林孟平（师从罗杰斯的著名继承者帕特森 C. H. Patterson，是其首位华人弟子）自 1994 年起应邀到内地讲学与合作；其《心理咨询与治疗》1986 年出版、多次再版，是华人世界广泛使用的人本取向教材。\n\n### 三、系统性训练的里程碑（1998–2002）\n\n1998 年秋林孟平与北京师范大学合作开设咨询与心理治疗硕士班，1999—2001 年开设博士方向课程（北师大官方口径为 1998—2002 年整体办班），系统引入并培养以人为中心的实践与训练，被视为标志性事件；我国人本主义咨询的主要代表人物多为林孟平亲授弟子。\n\n### 四、注册系统与继续教育（2007 起）\n\n中国心理学会临床与咨询心理学注册系统（CPS）于 2007 年启动，为专业身份、培训与督导提供制度框架；随后认可“以人为中心取向心理咨询与治疗连续培训项目”（两年制）为继续教育。\n\n### 五、以人为中心项目的体系化（2018 起）\n\n注册系统认可的以人为中心系统培训最早于 2018 年 1 月在西北师范大学（甘肃，注册系统甘肃督导点主办）举办，属继续教育项目；此后北京师范大学心理学部的“以人为中心取向心理咨询与治疗连续培训项目”（两年制、注册系统学分认证）以北京班、珠海班、广州班等多期次持续开展，首期约 2020 年开班，至 2025 年已办至第六、七期。中国心理学会临床与咨询心理学专业委员会还在武汉、青岛、桂林、成都、珠海、北京、兰州、上海等地先后举办了八届全国人本心理咨询与治疗学术大会。\n\n### 六、团体辅导与心理健康教育\n\n清华大学樊富珉推动团体心理辅导与团体咨询，人本取向在高校、学校与社区的心理健康教育中广泛落地。\n\n%%TIMELINE_CHINA%%\n\n### 七、中国代表与关键人物\n\n%%FIGURES_CHINA%%\n\n### 八、中国本土循证与研究\n\n中国以人为中心研究仍相对有限，多为质性或服务取向（培训成效、咨询教育调查、学校咨询研究）。团体辅导与关系/治疗因素的研究在增长，但高质量随机对照远少于 CBT。\n\n### 九、本土化与挑战\n\n以人为中心的价值（共情、真诚、不评判）契合咨询的关系核心，但对习惯“要建议”的来访者可能显得抽象或太慢；等级与权威取向的文化可能让非指导工作显得陌生，因此一些从业者把它与循证技术（MI、结构化技能、团体工作）结合。在监管较宽松的机构，如何保证严重议题下的结构与临床胜任仍是挑战。\n\n### 十、更多中国资讯来源\n\n**书籍**：林孟平《心理咨询与治疗》；以人为中心咨询教材；樊富珉等团体辅导著作。**组织与网站**：中国心理学会临床与咨询心理学注册系统；高校心理中心；以人为中心连续培训项目。**数据库**：中国知网（CNKI）。\n\n> 一句话总结：人本主义疗法是重关系、重成长的“第三势力”——罗杰斯的治疗条件（1957 原文为六条，其中真诚一致、无条件积极关注、共情理解三大“治疗师条件”流传最广）、完形觉察与体验性技术；对治疗关系（联盟、共情）与伴侣 EFT 有较强证据，对以人为中心治疗抑郁有“短期与 CBT 相当、长期略逊”的证据，对 MI 证据充分但效应量为中小；在中国，林孟平在北师大的以人为中心教学、注册系统的连续培训，以及樊富珉的团体工作，奠定了本土基础。\n\n> 声明：本文为科普性概括，不替代专业培训或个体的临床判断。",
  timelineChina: [
    {
      year: "1980s",
      titleZh: "译介与观念引入",
      titleEn: "Translation & Reception",
      bodyZh: "人本主义心理学经由心理学教材与咨询实践进入内地，“以人为中心”成为咨询教育中的常见表述。",
      bodyEn: "Humanistic psychology entered the mainland via psychology textbooks and counseling practice; \"person-centered\" became a common idea in counseling education.",
    },
    {
      year: "1994",
      titleZh: "林孟平开始讲学与合作",
      titleEn: "Lam Man-Ping Begins Teaching",
      bodyZh: "香港中文大学林孟平（师从帕特森 C. H. Patterson，为其首位华人弟子，属罗杰斯谱系）开始应邀到内地各院校讲学与合作；其《心理咨询与治疗》（1986 年初版）此后成为广泛使用的教材。",
      bodyEn: "Lam Man-Ping of the Chinese University of Hong Kong (a student of Patterson (C. H. Patterson) — his first Chinese student — in the Rogers lineage) began lecturing on the mainland; her textbook 心理咨询与治疗 (first published 1986) became widely used.",
    },
    {
      year: "1998–2002",
      titleZh: "北师大硕士/博士班",
      titleEn: "BNU Master's & Doctoral Classes",
      bodyZh: "林孟平与北京师范大学合作开设咨询与心理治疗硕士班（1998 年秋）与博士方向课程（1999–2001），系统引入并培养人本取向人才。",
      bodyEn: "Lam Man-Ping cooperated with Beijing Normal University to open counseling-and-psychotherapy master's classes (autumn 1998) and doctoral training (1999–2001), systematically introducing and training person-centered talent.",
    },
    {
      year: "2007",
      titleZh: "注册系统启动",
      titleEn: "CPS Registration System",
      bodyZh: "中国心理学会临床与咨询心理学注册系统启动，为人本取向的培训、督导与专业身份提供制度支撑。",
      bodyEn: "The Chinese Psychological Society Clinical and Counseling Registration System (CPS) began, providing institutional support for humanistic training, supervision, and professional identity.",
    },
    {
      year: "2018",
      titleZh: "以人为中心连续培训落地",
      titleEn: "Person-Centered Continuous Training",
      bodyZh: "注册系统认可的“以人为中心疗法系统培训”首期于 2018 年 1 月在西北师范大学（甘肃，注册系统甘肃督导点主办）举办，形成两年制体系化课程。",
      bodyEn: "The first registration-system-recognized \"person-centered therapy systematic training\" was held in January 2018 at Northwest Normal University (Gansu, hosted by the registration system's Gansu supervision site), forming a two-year systematic curriculum.",
    },
    {
      year: "2020s",
      titleZh: "项目回归与扩办",
      titleEn: "Return & Expansion",
      bodyZh: "北京师范大学心理学部的“以人为中心取向心理咨询与治疗连续培训项目”（两年制、注册系统学分认证）以北京班、珠海班、广州班多期次持续开展（首期约 2020 年，至 2025 年已办至第六、七期），并在武汉、青岛、桂林、成都、珠海、北京、兰州、上海举办八届全国人本心理咨询与治疗学术大会。",
      bodyEn: "BNU's two-year, credit-recognized continuous training program expanded into Beijing, Zhuhai, and Guangzhou cohorts (first cohort around 2020; sixth/seventh by 2025), and eight national person-centred psychotherapy conferences have been held across major cities including Wuhan, Qingdao, Guilin, Chengdu, Zhuhai, Beijing, Lanzhou, and Shanghai.",
    },
    {
      year: "2000s–2020s",
      titleZh: "团体辅导与心理健康教育",
      titleEn: "Group Counseling & MH Education",
      bodyZh: "清华大学樊富珉推动团体心理辅导与团体咨询，人本取向在高校、学校与社区的心理健康教育中广泛落地。",
      bodyEn: "Fan Fumin of Tsinghua University promoted group counseling and group-based interventions, applying a humanistic orientation across universities, schools, and community mental-health education.",
    }
  ],
  figuresChina: [
    {
      nameZh: "林孟平",
      nameEn: "Lam Man-Ping",
      years: "b. 1940s",
      titleZh: "华人世界人本主义心理咨询领袖",
      titleEn: "Leader of Chinese-Speaking Humanistic Counseling",
      bioZh: "香港中文大学教育学院教授、荣誉退休教授，师从罗杰斯的重要继承者帕特森（C. H. Patterson），为其首位华人弟子。1994 年起在内地讲学与合作，1998 年秋起与北京师范大学合作开设咨询与心理治疗硕士班、1999—2001 年开设博士方向课程；所著《心理咨询与治疗》（1986 年初版）是华人世界广泛使用的人本取向教材，我国人本咨询的主要代表人物多为其亲授弟子。",
      bioEn: "Professor and emeritus professor at the Chinese University of Hong Kong and the first Chinese student of Patterson (C. H. Patterson), a key successor of Rogers. From 1994 she lectured on the mainland; from autumn 1998 she cooperated with Beijing Normal University to open counseling-and-psychotherapy master's classes and doctoral training (1999–2001); her textbook 心理咨询与治疗 (first published 1986) is widely used in Chinese-speaking contexts, and most leading mainland person-centred counselors are her direct students.",
    },
    {
      nameZh: "樊富珉",
      nameEn: "Fan Fumin",
      years: "b. 1953",
      titleZh: "团体心理辅导奠基人",
      titleEn: "Pioneer of Group Counseling",
      bioZh: "清华大学心理学教授、博导，中国心理学会注册督导师。是国内最早研究与推广团体心理咨询与训练、并将罗杰斯会心团体等人本理念应用于学校心理健康教育的专家，长期推动高校、学校与社区的心理健康教育，构建了系统的团体咨询师培训体系。",
      bioEn: "Professor at Tsinghua University and a CPS registered supervisor. She was among the first in China to research and promote group counseling and group-based training, applying Rogers's encounter-group humanistic ideas to school mental-health education, and has built a systematic group-counselor training system across universities, schools, and communities.",
    },
    {
      nameZh: "郑日昌",
      nameEn: "Zheng Rishang",
      years: "b. 1944",
      titleZh: "心理咨询与心理测量教育先行者",
      titleEn: "Pioneer of Counseling and Psychological-Assessment Education",
      bioZh: "北京师范大学教授、博导。在我国率先开设心理测量与心理咨询课程，出版新中国首部《心理测量学》及《学校心理咨询》教材，并发展“阴阳辩证疗法”；作为咨询心理学教育奠基人之一，为以人为中心等取向在大陆的传播提供了学科与教材基础。",
      bioEn: "Professor at Beijing Normal University who was the first in China to offer psychological-measurement and counseling courses, published the country's first textbooks on psychometrics and school counseling, and developed \"yin-yang dialectical therapy\"; as a founding educator of counseling psychology, he helped build the disciplinary and textbook foundation for orientations including the person-centered approach on the mainland.",
    }
  ],
  fitClient: {
    zh: `#### 一次会谈像什么

人本取向的会谈重关系、重当下，治疗师通常更温暖、更少指导。治疗师会深度倾听、反映情感、保持真诚与无条件接纳，但一般不会急着给建议、解释或评判——方向常由你来决定。完形或体验取向还会用“空椅”“角色扮演”等练习帮你接触真实感受。

#### 咨询的基本设置

- **疗程**：多为每周一次、每次约 45–60 分钟。人本取向常为开放式或中长程（数月到数年）；情绪聚焦疗法（EFT）动机访谈（MI）等则往往更结构化、更限时（如 EFT 伴侣治疗常见 8–20 次，MI 数次到十数次）。
- **你可能将面对**：治疗师更多是“陪你”，而不是“教你”；可能会有一段沉默，或需要你慢慢触碰情绪；完形有时会用体验性练习让你“做”而非“谈”。改变往往更缓慢、更依赖你与治疗师之间的信任。
- **注意事项**：急性精神病、严重躁狂、高自杀风险需先做危机与医学处理；如果一位“人本”治疗师只有温暖支持、却对严重症状缺乏结构或危机判断，需要谨慎筛选；非指导不等于被动，若长期“只聊天而无进展”，也要评估是否缺了方向或专业力。

#### 来访者适配自测

下面没有标准答案，只是帮你想清楚自己期待什么样的咨询。对照自己的偏好勾一下即可：

- 我更想要：被陪伴、被理解、慢慢成长 ／ 快速拿到具体方法与工具
- 我更习惯：开放式、由我自己主导 ／ 有结构、有议程、有技术
- 我更希望治疗师：真诚温暖、不评判我 ／ 像教练/老师一样给建议
- 我更愿意：在会谈里谈感受、坐一会儿静默 ／ 会谈间做作业与练习
- 我这次的投入：是短程、限时 ／ 可以长期、持续
- 我更想谈：我是谁、我要往哪里去 ／ 具体症状怎么处理

把这些答案带给咨询师，会有助于判断这个流派是否契合你，也更容易建立好的工作联盟。`,
    en: `#### What a Session Feels Like

Humanistic sessions are relational and present-focused; the therapist is typically warmer and less directive. They listen deeply, reflect feelings, and stay genuine and accepting, but generally avoid rushing to advice, interpretation, or judgment — you often set the direction. Gestalt or experiential work may use exercises such as the empty chair or role-play to help you contact genuine feeling.

#### Basic Setup of the Therapy

- **Duration**: usually weekly, about 45–60 minutes per session. Person-centered work is often open-ended or medium-to-long-term; Emotion-Focused Therapy (EFT) and Motivational Interviewing (MI) tend to be more structured and time-limited (e.g., EFT for couples commonly 8–20 sessions; MI from several to a dozen-plus sessions).
- **What you may face**: the therapist is more "with you" than "teaching you"; there may be silence, or you may be asked to slowly touch feelings; Gestalt may use experiential exercises so you "do" rather than just "talk." Change is often slower and heavily dependent on trust in the relationship.
- **Cautions**: acute psychosis, severe mania, and high suicide risk require crisis and medical management first. If a "humanistic" therapist offers only warmth with no structure or crisis judgment for serious symptoms, screen carefully; non-directive does not mean passive — if it is "all talk, no progress," ask whether direction or competence is missing.

#### Client Fit Self-Check

There are no right answers — this is just to help you clarify what you want from therapy. Tick the side that sounds more like you:

- I mainly want to: be accompanied, understood, and grow slowly ／ get concrete methods and tools quickly
- I am more used to: an open space led by me ／ structure, an agenda, and techniques
- I would prefer the therapist: to be genuine, warm, and non-judgmental ／ to be a coach or teacher who gives advice
- I would rather: talk about feelings in session, even sit with some silence ／ do homework and exercises between sessions
- My commitment now is: short-term and time-limited ／ can be long-term and ongoing
- I would rather talk about: who I am and where I am going ／ how to handle specific symptoms

Bring these answers to your therapist; it will help both of you judge whether this orientation fits you and build a stronger working alliance.`,
  },
  fitPractitioner: {
    zh: `#### 性格适配

人本取向很看重真诚、共情与“不评判地陪伴”。如果你享受深度倾听、对歧义与强烈情感耐受力强、不急于给建议，你会很契合。若你更偏好结构、技术、可衡量目标与快速见效，它可能会让你觉得“太慢”——两条路没有对错，匹配你的性格与工作方式就好。

#### 训练门槛与要求

一条严肃的人本路径通常要求：系统的心理咨询与治疗训练 + 有督导的个案实践 + 常被要求的个人治疗/个人成长 + 持续督导。人本取向多经由咨询学位或 BACP/APA 体系；EFT 需经 ICEEFT 认证；完形由专门训练机构举办、历时数年。整体比手册化 CBT 更长、更重“人本身”。

#### 适用场景与就业方向

适合学校与高校心理咨询中心、社区与公益机构、儿童青少年与伴侣咨询（EFT）、健康与成瘾行为改变（MI）、团体辅导与心理教育等。就业方向多为咨询中心、高校、机构、个体执业与团体带领；它相对更难手册化、更难规模化，但对重视关系深度与人的完整性的从业者很有吸引力。`,
    en: `#### Personality Fit

Humanistic work values genuineness, empathy, and non-judgmental presence. If you enjoy deep listening, tolerate ambiguity and strong affect well, and are not in a rush to give advice, this fits you. If you prefer structure, technique, measurable goals, and quick results, it may feel "too slow" — neither path is wrong; align it with your personality and preferred way of working.

#### Training Thresholds and Requirements

A serious humanistic path typically requires systematic counseling-and-psychotherapy training, supervised case practice, often personal therapy or personal-growth work, and sustained supervision. Person-centered routes usually go through counseling degrees or the BACP/APA systems; EFT requires ICEEFT certification; Gestalt is taught at specialized institutes over several years. Overall it is longer and more "person-centered" than a manualized CBT course.

#### Applicable Settings and Career Directions

It fits school and university counseling centers, community and voluntary agencies, child/adolescent and couples therapy (EFT), health and substance-behavior change (MI), and group facilitation and psychoeducation. Career directions are mostly counseling centers, universities, agencies, private practice, and group work; it is harder to manualize or scale, but very rewarding for those drawn to relational depth and the wholeness of the person.`,
  },
  category: `school`,
  school: `humanistic`,
  status: `published`,
  figures: [
    {
      nameZh: "卡尔·罗杰斯",
      nameEn: "Carl Rogers",
      years: "1902–1987",
      titleZh: "来访者中心疗法创立者",
      titleEn: "Founder of Client-Centered Therapy",
      bioZh: "美国心理学家。提出“以人为中心”取向与 1957 年“必要且充分”的条件（真诚一致、无条件积极关注、共情理解），认为人具有成长潜能，治疗关系本身即改变媒介。",
      bioEn: "American psychologist who founded the person-centered approach and the 1957 \"necessary and sufficient\" conditions (congruence, unconditional positive regard, empathic understanding), holding that people have an actualizing tendency and that the relationship itself is the medium of change.",
    },
    {
      nameZh: "亚伯拉罕·马斯洛",
      nameEn: "Abraham Maslow",
      years: "1908–1970",
      titleZh: "需求层次与自我实现",
      titleEn: "Hierarchy of Needs & Self-Actualization",
      bioZh: "美国心理学家。提出需求层次理论，把“自我实现”视为人的最高动机，是人本心理学（“第三势力”）的主要奠基人之一。",
      bioEn: "American psychologist who proposed the hierarchy of needs and placed self-actualization as the highest motive — a principal founder of humanistic psychology, the \"third force.\"",
    },
    {
      nameZh: "弗里茨·皮尔斯",
      nameEn: "Fritz Perls",
      years: "1893–1970",
      titleZh: "完形治疗主要创立者",
      titleEn: "Principal Founder of Gestalt Therapy",
      bioZh: "德国裔美国心理学家。与劳拉·皮尔斯、保罗·古德曼及拉尔夫·赫弗林共同创立完形治疗（1951 年奠基之作《完形治疗》署名为 Perls–Hefferline–Goodman），强调当下觉察、接触与整体整合，发展出空椅、两椅对话等体验性技术。",
      bioEn: "German-born American psychologist who co-founded Gestalt therapy with Laura Perls, Paul Goodman, and Ralph Hefferline (the 1951 book Gestalt Therapy was authored Perls–Hefferline–Goodman), emphasizing present awareness, contact, and integration, and developing experiential techniques such as the empty chair and two-chair dialogue.",
    },
    {
      nameZh: "劳拉·皮尔斯",
      nameEn: "Laura Perls",
      years: "1905–1990",
      titleZh: "完形治疗共同创立者",
      titleEn: "Co-Founder of Gestalt Therapy",
      bioZh: "德国裔美国心理学家与治疗师，与弗里茨·皮尔斯共同创立完形治疗运动，强调身体、接触与“此刻”的觉察；为 1951 年奠基之作撰写了部分章节，但未获署名。",
      bioEn: "German-born American psychologist and therapist who co-founded the Gestalt therapy movement with Fritz Perls, emphasizing body, contact, and present awareness; she wrote chapters of the 1951 foundational text but went uncredited.",
    },
    {
      nameZh: "尤金·根德林",
      nameEn: "Eugene Gendlin",
      years: "1926–2017",
      titleZh: "体验性聚焦（Focusing）",
      titleEn: "Experiential Focusing",
      bioZh: "美国哲学家与心理学家，师承罗杰斯。发展“聚焦”取向，引导来访者注意身体中的“内在感觉”，让体验逐步展开，是人本—体验取向的重要技术贡献者。",
      bioEn: "American philosopher and psychologist who studied under Rogers. He developed Focusing, guiding clients to attend to a bodily \"felt sense\" so experience can unfold — a major technical contribution to humanistic-experiential practice.",
    },
    {
      nameZh: "莱斯利·格林伯格",
      nameEn: "Leslie Greenberg",
      years: "b. 1945",
      titleZh: "情绪聚焦疗法（EFT）",
      titleEn: "Emotion-Focused Therapy",
      bioZh: "加拿大临床心理学家。创立情绪聚焦疗法（EFT），并与苏·约翰逊共同发展伴侣 EFT（1988），融合人本—体验与技术，强调情绪加工、双椅对话与共情验证，实证研究较充分。",
      bioEn: "Canadian clinical psychologist who founded Emotion-Focused Therapy (EFT) and, with Sue Johnson, developed EFT for couples (1988), blending humanistic-experiential work with technique, emphasizing emotion processing, two-chair dialogue, and empathic validation, with a reasonably strong evidence base.",
    },
    {
      nameZh: "苏·约翰逊",
      nameEn: "Sue Johnson",
      years: "b. 1947",
      titleZh: "伴侣情绪聚焦疗法（EFT-C）共同创立者",
      titleEn: "Co-Founder of EFT for Couples",
      bioZh: "英国裔加拿大临床心理学家。与格林伯格共同发展以依恋理论为基础的伴侣 EFT，其 1999 年元分析显示伴侣 EFT 显著改善关系满意度与安全感，是伴侣治疗中证据最强的模型之一。",
      bioEn: "British-born Canadian clinical psychologist who, with Greenberg, developed attachment-based emotionally focused therapy for couples; her 1999 meta-analysis showed strong effects on relationship satisfaction and security, and EFT-C remains one of the best-evidenced couple therapies.",
    },
    {
      nameZh: "罗洛·梅",
      nameEn: "Rollo May",
      years: "1909–1994",
      titleZh: "存在主义心理学代表",
      titleEn: "Existential Psychology",
      bioZh: "美国存在-人本心理学家。把存在主义哲学带入美国心理治疗，提出“存在的勇气”“意向性”等概念，代表作《爱与意志》《焦虑的意义》。",
      bioEn: "American existential-humanistic psychologist who brought existential philosophy into American psychotherapy, introducing ideas such as the \"courage to be\" and intentionality; major works include Love and Will and The Meaning of Anxiety.",
    },
    {
      nameZh: "詹姆斯·布根塔尔",
      nameEn: "James Bugental",
      years: "1915–2008",
      titleZh: "存在-人本主义治疗师",
      titleEn: "Existential-Humanistic Therapy",
      bioZh: "美国临床心理学家，美国人本心理学会（AHP）首任主席，提出人本心理学的若干基本公设，强调内在主观性与治疗师“在场”的治疗关系。",
      bioEn: "American clinical psychologist and first president of the AHP, who articulated foundational postulates of humanistic psychology and stressed inner subjectivity and the therapist's \"presence\" in the relationship.",
    },
    {
      nameZh: "威廉·米勒、斯蒂芬·罗尼克",
      nameEn: "William Miller & Stephen Rollnick",
      years: "b. 1947 / b. 1952",
      titleZh: "动机访谈（MI）",
      titleEn: "Motivational Interviewing",
      bioZh: "美国临床心理学家。发展出动机访谈，把罗杰斯的共情与无条件接纳用于行为改变，通过激发“改变语言”与尊重来访者自主性来减少矛盾与抗拒。",
      bioEn: "American clinical psychologists who developed Motivational Interviewing, applying Rogers's empathy and unconditional acceptance to behavior change by evoking \"change talk\" and respecting client autonomy to resolve ambivalence and resistance.",
    }
  ],
};
