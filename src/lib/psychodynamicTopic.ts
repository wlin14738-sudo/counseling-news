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

// 精神动力学/精神分析系统梳理（中英双语）。
// 结构按“先西方、后中国”两部分；第一部分用 %%TIMELINE%%/%%FIGURES%%
// 渲染结构化时间轴与人物卡，第二部分（中国发展）以 Markdown 表格呈现。
export const PSYCHODYNAMIC_TOPIC: TopicSeed = {
  slug: `psychodynamic`,
  title: `Psychodynamic & Psychoanalytic Therapy`,
  titleZh: `精神动力学/精神分析疗法`,
  summary: `A bilingual overview of psychodynamic therapy, covering the Western historical lineage and key figures, core principles, techniques, evidence, applications, and a dedicated section on its development in China.`,
  summaryZh: `一套双语版的精神动力学内容：涵盖西方历史谱系与核心人物、核心原理、技术方法、循证与应用，并单独成篇介绍其在中国的发展。`,
  timeline: [
    {
      year: `1880s–1890s`,
      titleZh: `精神分析萌芽`,
      titleEn: `Origins of Psychoanalysis`,
      bodyZh: `弗洛伊德与布洛伊尔合著《癔症研究》（1895），提出宣泄与被压抑的记忆。`,
      bodyEn: `Freud and Josef Breuer published Studies on Hysteria (1895), introducing catharsis and repressed memories.`,
    },
    {
      year: `1900s`,
      titleZh: `核心技术成形`,
      titleEn: `Core Techniques`,
      bodyZh: `弗洛伊德《梦的解析》（1900），形成自由联想、移情、阻抗等核心技术。`,
      bodyEn: `Freud's The Interpretation of Dreams (1900) established free association, transference, and resistance.`,
    },
    {
      year: `1910s–1920s`,
      titleZh: `结构模型与分裂`,
      titleEn: `Structural Model & Early Splits`,
      bodyZh: `弗洛伊德提出本我/自我/超我；阿德勒（个体心理学）、荣格（分析心理学）先后分裂独立。`,
      bodyEn: `Freud proposed the id/ego/superego model; Adler (individual psychology) and Jung (analytical psychology) split away.`,
    },
    {
      year: `1930s–1950s`,
      titleZh: `自我心理学与人际学派`,
      titleEn: `Ego Psychology & Interpersonal School`,
      bodyZh: `安娜·弗洛伊德、哈特曼等发展自我心理学；沙利文强调人际场域与关系安全。`,
      bodyEn: `Anna Freud and Hartmann developed ego psychology; Sullivan emphasized the interpersonal field and security.`,
    },
    {
      year: `1930s–1970s`,
      titleZh: `客体关系学派`,
      titleEn: `Object Relations`,
      bodyZh: `克莱因、费尔贝恩为早期；温尼科特、马勒为中后期；早期关系内化为内在客体。`,
      bodyEn: `Klein and Fairbairn (early) and Winnicott and Mahler (later) showed early relationships become internal objects.`,
    },
    {
      year: `1950s–1970s`,
      titleZh: `依恋理论`,
      titleEn: `Attachment Theory`,
      bodyZh: `鲍尔比、安斯沃斯提出安全基地与内部工作模型，与精神分析交叉发展。`,
      bodyEn: `Bowlby and Ainsworth proposed the secure base and internal working models, intersecting with psychoanalysis.`,
    },
    {
      year: `1960s–1980s`,
      titleZh: `自体心理学与短程动力`,
      titleEn: `Self Psychology & Short-Term Therapy`,
      bodyZh: `科胡特发展自体心理学；马兰、西夫尼奥斯、卢博斯基开创短程动力治疗。`,
      bodyEn: `Kohut developed self psychology; Malan, Sifneos, and Luborsky pioneered short-term dynamic therapy.`,
    },
    {
      year: `1980s–1990s`,
      titleZh: `结构化动力治疗`,
      titleEn: `Structured Dynamic Therapies`,
      bodyZh: `克恩伯格提出移情焦点治疗（TFP）；贝特曼与弗纳吉提出心智化治疗（MBT）。`,
      bodyEn: `Kernberg introduced transference-focused psychotherapy (TFP); Bateman and Fonagy developed mentalization-based treatment (MBT).`,
    },
    {
      year: `1990s–2010s`,
      titleZh: `关系取向与循证研究`,
      titleEn: `Relational Turn & Evidence`,
      bodyZh: `Mitchell 等发展关系精神分析；Shedler （2010） 等元分析证明动力治疗疗效。`,
      bodyEn: `Mitchell advanced relational psychoanalysis; Shedler (2010) and others provided meta-analytic evidence.`,
    },
    {
      year: `2010s–`,
      titleZh: `整合、数字化与跨诊断`,
      titleEn: `Integration & Digital Delivery`,
      bodyZh: `动力治疗与 CBT、依恋等整合，并探索数字化、短程化与跨诊断应用。`,
      bodyEn: `Psychodynamic therapy integrates with CBT and attachment work and explores digital, brief, and transdiagnostic applications.`,
    },
  ],
  body: `# Psychodynamic & Psychoanalytic Therapy

## Part 1: The Western (International) Tradition

### 1. Origins and Historical Development

Psychodynamic therapy originates in Freud's psychoanalysis and has evolved over a century into a spectrum from classical analysis to modern dynamic psychotherapy. Its history is usually described in terms of successive developments.

%%TIMELINE%%

In brief: psychoanalysis understands psychological suffering as the re-enactment of unconscious conflict, internal object relations, and early experience in the present. Treatment uses free association, transference analysis, and interpretation to help the client "re-know relationships within the relationship," and thereby work through, integrate, and grow.

### 2. Key Figures and Contributions

The development of psychodynamic therapy was shaped by remarkable scientists and clinicians. Each figure contributed a distinctive idea that still structures how it is taught and practiced.

%%FIGURES%%

### 3. Core Principles and Mechanisms

#### The Unconscious and Psychic Structure

- The unconscious holds motives, wishes, fears, and memories outside awareness that continually shape feelings, decisions, and symptoms.
- The structural model describes id, ego, and superego in conflict and coordination.
- A symptom is often a compromise formation among desire, fear, and defense.

#### Early Relationships and Internal Objects

- Object relations: early interactions with caregivers become internal "self–object" representations that serve as templates for later relationships.
- Projective identification: unmanageable parts are projected onto others, who are then induced to act accordingly.
- Attachment patterns influence relationship models and reflective capacity.

#### Defense Mechanisms

Repression, denial, projection, displacement, rationalization, reaction formation, intellectualization, isolation of affect, regression, undoing, splitting, projective identification, sublimation, and more.

#### The Therapeutic Relationship

- Transference: the client displaces feelings and expectations from early significant figures onto the therapist — living material for understanding inner relationships.
- Countertransference: the therapist's emotional reactions are important information to be noticed and reflected on.
- Working alliance: the sense of collaboration is a common factor; the therapist offers empathy, acceptance, and boundaries.

#### Mechanisms of Change

- Insight and interpretation — making the unconscious conscious so patterns are seen.
- Corrective emotional experience — experiencing different interaction in a safe relationship, revising internal representations.
- Integration and working through — accepting split-off and denied parts.
- Internalization — internalizing the therapist's stability and care to build healthier self-functioning.
- Mentalization — understanding one's own and others' minds, reducing misreading and impulsivity.

> **Core points**: Psychodynamic therapy asks "why am I like this?" — unconscious conflict, internal object relations, defenses, and transference; the therapeutic relationship itself is the medium of change; mechanisms include insight, corrective emotional experience, integration, internalization, and mentalization.

### 4. Key Techniques and Methods

#### Classical Techniques

- Free association: expressing whatever arises without censorship, to approach the unconscious.
- Dream analysis: exploring the latent meaning behind the manifest dream.
- Interpretation: explaining resistance, defenses, transference, and content.
- Clarification and confrontation: gently clarifying ambiguity and pointing out contradictions and avoidance.
- Working through: repeatedly exploring the same conflict until it truly "lands."

#### The Treatment Frame

Frequency, duration, confidentiality, neutrality, abstinence, and anonymity form the frame, which is itself a "holding" and boundary; breaches (late arrival, early departure, fees) are often important clinical material.

#### Short-Term and Structured Dynamic Therapies

- Supportive–expressive therapy (Luborsky).
- Short-term dynamic psychotherapy (Malan, Sifneos): focus on a single core conflict, time-limited.
- Transference-focused psychotherapy (TFP): addresses splitting and projective identification in transference, for borderline personality disorder.
- Mentalization-based treatment (MBT): focuses on reflective function and attachment, widely used for borderline personality and self-harm.

#### Other

Child play therapy (Klein, Winnicott tradition), dynamic group therapy, and integrative orientations (attachment, interpersonal, emotion-focused).

### 5. Evidence and Indications

Shedler's (2010) meta-analysis, mainly of long-term psychodynamic therapy, found large effect sizes for depression and anxiety, with effects sustained or even strengthening at follow-up; short-term dynamic therapy shows medium effects. Other meta-analyses (e.g., Driessen 2015 for depression; Abbass 2013 for short-term dynamic RCTs) support its effectiveness, often comparable to CBT.

Evidence supports its use for borderline personality disorder (TFP, MBT), depression, anxiety, and psychosomatic symptoms. Criticisms include heterogeneity due to fewer manuals, fewer trials than CBT, and concerns about quality and observer bias.

Indications (approximate): depression, GAD, panic, social anxiety, personality disorders (especially borderline via TFP/MBT), eating disorders, psychosomatic symptoms; possibly trauma/PTSD (with trauma-informed or exposure components), substance use, chronic pain; caution with severe acute psychosis, severe mania, or high suicide risk, where stabilization and medication/crisis management come first.

### 6. Applications and Special Populations

Children and adolescents (play therapy, parent involvement, attachment and mentalization); borderline and personality disorders (TFP, MBT); adult depression and anxiety; older adults (bereavement, chronic illness, meaning); perinatal (postpartum emotion and attachment); chronic physical illness (psychosomatic and illness adaptation).

### 7. Training, Certification, and Career (International)

Dynamic training typically includes personal analysis, supervision, and systematic theory/clinical courses. In practice:

- **Personal analysis**: a serious psychodynamic/psychoanalytic path almost always requires your own personal analysis, often hundreds of hours (50-minute sessions, usually multiple times per week), before and during training.
- **Supervision**: extensive supervision of your own cases, often with several supervisors, over a sustained period; the number of supervised cases and hours is a key criterion.
- **Coursework and examination**: systematic theory and clinical seminars plus a case-based examination. The International Psychoanalytical Association (IPA) member path, for instance, requires hundreds of hours of personal analysis and supervision and a formal case examination.
- **Frameworks and duration**: psychoanalytic institutes and clinics in Europe and the US (e.g., Tavistock, Anna Freud Centre, IPA-affiliated institutes) are mature but typically take many years. Credentialing is decentralized — professional identity often rests on "trained analyst + society membership + ongoing supervision."

**Career settings**: long-term outpatient private practice, psychoanalytic institutes and clinics, child/adolescent or parent-infant work, and some hospital or community settings. Unlike manualized CBT, dynamic work is harder to scale into brief, digital, or stepped-care programs; it depends more on the practitioner's personal capacity and reputation.

### 8. Further Resources (International)

Classics: Freud's Interpretation of Dreams, Studies on Hysteria, Introductory Lectures; Winnicott's Playing and Reality; Kohut's The Analysis of the Self; Kernberg's Object Relations Theory and Clinical Psychoanalysis; McWilliams' Psychoanalytic Diagnosis and Psychoanalytic Psychotherapy; Bateman & Fonagy's Mentalization-Based Treatment for Personality Disorders; Gabbard's Long-Term Psychodynamic Psychotherapy.

Journals: Journal of the American Psychoanalytic Association; International Journal of Psychoanalysis; Psychoanalytic Psychology; Psychodynamic Psychotherapy.

Organizations: IPA (ipa.org); APsaA (apsa.org); APA Division 39; Anna Freud Centre; Tavistock.

Evidence sources: PubMed, Cochrane, APA Division 12.

---

## Part 2: The Development in China

Psychoanalysis entered China in the early 20th century as a cultural current, without forming an institutionalized clinical discipline; after the reform and opening, it gradually moved toward clinical practice and systematization through localization and international training.

### 1. Introduction in the Republican Era

In 1914, Qian Zhixiu published "The Study of Dreams" in Eastern Miscellany, one of the earliest Chinese articles on psychoanalysis. Gao Juefu (1896–1993) was the pioneer of systematic translation: in 1925 he translated Freud's Clark lectures as The Origin and Development of Psychoanalysis, and in 1930 and 1936 he translated Introductory Lectures on Psychoanalysis and New Introductory Lectures. In the 1930s, Zhang Shizhao and Zhu Guangqian also promoted Freud's ideas. This period was mainly academic translation, with no clinical practice system.

### 2. 1949–1978: The Interruption

After 1949, under ideological transformation and full Sovietization of academia, psychoanalysis entered nearly 30 years of stagnation, divided into three stages.

**1949–1965: ideological criticism and marginalization.** Psychology and psychiatry followed Marxism-Leninism and Pavlov's higher-nervous-activity theory. Freud's psychoanalysis was labeled bourgeois idealism and "pan-sexualism" and was systematically criticized and expelled from mainstream academia and clinic. In the late 1950s, psychiatry developed a "rapid composite therapy" for neurasthenia (medication, exercise, group education, supportive intervention) grounded in Pavlovian theory. A few psychiatrists with early exposure to psychoanalysis (e.g., Zhong Youbin, Wang Jingxiang) privately tried psychoanalytic-oriented treatment of neurosis in the early 1960s, without large-scale public practice.

**1966–1977: the Cultural Revolution blank.** Psychology was labeled a pseudoscience; university departments were abolished, courses stopped, research institutes dissolved, and most professionals were sent to labor. Clinical work turned entirely to the biomedical model and political work; psychotherapy was wholly negated; 1966–1977 saw published psychoanalytic papers and books almost vanish, with institutional research and practice fully halted (except a few internal materials). In the mid-1970s, Zhong Youbin and others secretly continued psychoanalytically based treatment, preserving a seed for recovery.

**Recovery from 1978.** Psychology departments were restored and translations republished. In 1981 Zhong Youbin opened a psychological clinic at Shougang Hospital; in 1988 Chinese Psychoanalysis: Cognitive Insight Psychotherapy was published, marking the maturity of a localized psychoanalytic approach; the same year the first Sino-German psychotherapy workshop was held in Kunming, opening international training.

### 3. Overview of International Training Programs

The so-called "China-X classes" are continuous, systematic programs led by psychoanalysts from the corresponding country and following IPA standards.

| Program | Start | Main base | Partner |
| --- | --- | --- | --- |
| Sino-German continuous psychodynamic training | Workshop 1988; formal 1997 | Kunming; moved to Shanghai Mental Health Center in 2000 | German Center for Psychotherapy (DCAP) |
| Sino-Norwegian psychodynamic training | First cohort 2006 | Beijing Anding Hospital | Norwegian psychoanalytic community |
| Sino-British child & adolescent psychoanalytic training | First cohort 2012 | Led by Beijing Anding Hospital | Anna Freud Centre, London |
| Wuhan Sino-American advanced psychoanalytic training | First season 2012 | Wuhan Mental Health Center | Columbia, Horney Institute, etc. |
| CAPA Sino-American training | Formal 2008 | CAPA China Committee (online + offline) | Chinese American Psychoanalytic Alliance |

### 4. Sino-British Child & Adolescent Program

This college-style, three-year (six-phase) program follows the British Psychoanalytic Association training system and focuses on child/adolescent psychoanalysis and mentalization. Lead organizers: National Foreign Experts Bureau "psychoanalysis demonstration unit," Beijing Anding Hospital, Chinese Mental Health Association, Peking University Student Mental Health Center, and Capital Medical University clinical psychology department. International partners: the Anna Freud Centre and Birkbeck, University of London. Cohorts: 1st (2012–2015), 2nd (2015–2018), 3rd (2019–2021), 4th (2022–2025; some sources note 2023–2025 due to the pandemic). Related programs include infant observation, child/adolescent mentalization, Klein, and Winnicott workshops.

### 5. Sino-American Programs: Two Systems

**Wuhan Sino-American advanced psychoanalytic training.** Initiated in 2011 by Tong Jun of Wuhan Mental Health Center with Arnold and Arlene Richards; hosted by Wuhan Mental Health Center with academic support from the Chinese Mental Health Association psychoanalytic committee; partners include Columbia, the Horney Institute, Chicago Institute, and Washington psychoanalytic institutes. Model: three years, four sessions, eight days each, with self-psychology, object relations, female psychoanalysis, and supervision tracks. Seasons: 1st (2012–2015), 2nd (2015–2017), 3rd (2018–2021), 4th (2022–2025), 5th (2026–2029).

**CAPA (Chinese American Psychoanalytic Alliance).** Operates the earliest systematic Sino-American training; originated with Elise Snyder's 2001 visit, formally founded in the US in 2008 and entered China, with the CAPA China Committee (CIC) established in 2017. Layered training: two-year basic (from 2008), two-year advanced (first graduates 2013), "Marching Towards 1,000 Hours" (one-year, four cohorts), "Marching Towards 3,000 Hours" (two-year, three cohorts), plus infant observation, supervision, and teaching-assistant programs. Academic meetings: first CAPA-in-China conference in Chengdu (2023), second in 2025. (Cohort counts as of 2025, dynamic; confirm with the program.)

Other vertical Sino-American programs exist, e.g., dynamic couple and family therapy (3rd cohort 2013–2015, taught by the Scharffs).

### 6. Localized Therapy and Key Figures

Zhong Youbin's cognitive insight therapy (Zhong's Insight Therapy), explored from the 1960s and systematized in the 1980s, is regarded as a localized adaptation of psychoanalysis: it retains the ideas of the unconscious and defense mechanisms but combines them with Chinese social and life realities; through explanation, the client gains insight into and corrects the irrationality of symptoms.

%%FIGURES_CHINA%%

### 7. Institutions and Regulation

The China Psychological Society clinical and counseling registration system (CPS, launched February 2007) offers registered assistant psychologist, psychologist, and supervisor credentials. The Chinese Mental Health Association psychoanalytic committee and its study groups (e.g., Zeng Qifeng as deputy head of the study group and central-China head) are key academic bodies. The Mental Health Law (2012, effective 2013) stipulates that counselors must not engage in psychotherapy or diagnosis/treatment of mental disorders, thereby separating counseling and psychotherapy and reinforcing the legal status of the psychological therapist (NHC health professional qualification).

### 8. Local Evidence and Research

China's randomized controlled research on psychodynamic therapy is still early. A landmark is the team of Qiu Jianyin at the Shanghai Mental Health Center, which conducted China's first multicenter randomized controlled trial of dynamic interpersonal therapy (DIT) for depression — protocol published in 2020 (Trials/PubMed 32703316), results in Psychological Medicine (2023), providing local RCT evidence. Psychodynamic therapy in China has long relied on cases, experience, and training outcomes, with fewer high-quality RCTs than CBT.

### 9. Further China Resources

Local works: Zhong Youbin's Chinese Psychoanalysis; translations by Zeng Qifeng, Zhang Peichao, Li Mengchao, Xu Jun; international journal columns/special issues on Chinese psychoanalysis. Organizations: CPS registration system; Chinese Mental Health Association psychoanalytic committee; IPA China study group (preparatory), hosted by Wuhan Mental Health Center (its site also calls itself the "British IPA Wuhan Representative Office," ipawh.cn); CAPA (capachina.org); Deutsche Gesellschaft fuer Psychotherapie (DCAP); university centers. Databases: PubMed, CNKI.

### 10. Development Timeline Overview

%%TIMELINE_CHINA%%

### 11. Choosing and Experiencing Psychodynamic Therapy in China

- **Where to find a qualified therapist**: look for a psychological therapist (NHC health qualification, in medical institutions) or a registered psychologist/supervisor under the CPS registration system, ideally someone with substantial personal analysis and ongoing supervision. Hospital outpatient clinics, university counseling centers, and community mental-health service stations are more regulated entry points; private practitioners vary, so ask about their training and supervision.
- **Cost and time**: dynamic work is typically open-ended, so it is usually a larger commitment of time and money than a limited course. A credible dynamic therapist should be able to explain the frame (frequency, duration, fee, confidentiality), how they handle breaks, and how they use supervision.
- **What to expect**: expect to talk about your life, feelings, and relationships, and sometimes to experience discomfort or silence. Progress is often felt gradually and relationally rather than as a quick symptom drop. If a "dynamic" session is only advice-giving or generic support with no frame or reflection, question whether it is truly a psychodynamic approach.
- **Data note**: program cohorts, editions, and fees change — verify with the current organizer (data as of 2025).

> In one sentence: psychodynamic therapy has a century-long Western lineage from psychoanalysis through object relations, self psychology, attachment, and mentalization; in China it passed through Republican-era translation, the 1949–1978 interruption, localization via Zhong Youbin's cognitive insight therapy, and clinical systematization through Sino-German/Norwegian/British/American classes and CAPA — now with a CPS registration system, a psychoanalytic committee, the Mental Health Law, and Qiu Jianyin's first multicentered dynamic-depression RCT, though evidence and workforce scale still need strengthening.

> Disclaimer: This overview is educational and does not replace professional training or individualized clinical judgment.`,
  bodyZh: `# 精神动力学/精神分析疗法

## 第一部分：西方（国际）动力治疗

### 一、历史脉络与起源

动力治疗源于弗洛伊德的**精神分析**，20 世纪以来经历分化与整合，形成从经典精神分析到现代动力性心理治疗的谱系，通常可概括为几代发展。

%%TIMELINE%%

**概括**：精神分析把心理痛苦理解为**无意识冲突、内在客体关系与早期经验在当下的重演**；治疗通过自由联想、移情分析与诠释，让来访者“在关系中重新认识关系”，从而修通、整合与成长。

### 二、核心人物与贡献

动力治疗的发展离不开一批杰出的科学家与临床工作者。每位都以独特观念塑造了今天的动力治疗教学与实践。

%%FIGURES%%

### 三、核心原理与作用机制

#### 无意识与心理结构

- **无意识**：大量动机、愿望、恐惧与记忆在意识之外，持续影响感受、决定与症状。
- **结构模型**：**本我**（原始欲力）、**自我**（调节与适应）、**超我**（良知与理想）三者冲突与协调。
- **冲突模型**：症状常是**欲望—恐惧—防御**冲突的妥协形成。

#### 早期关系与内在客体

- **客体关系**：早期与主要照料者的互动被内化为“自我—客体”表征，成为未来关系模板。
- **投射性认同**：把难以接纳的部分投射到他人，并“诱导”对方照此行动。
- **依恋**：安全/焦虑/回避/混乱型依恋影响关系模型与反思功能。

#### 防御机制

压抑、否认、投射、转移、合理化、反向形成、理智化、情感隔离、退行、抵消、分裂、投射性认同、升华等。

#### 治疗关系

- **移情**：来访者把对早期重要人物的感受与期待转移到治疗师，成为理解其内在关系的“活材料”。
- **反移情**：治疗师的情绪反应是重要信息，需被觉察与反思。
- **工作联盟**：合作感是疗效普遍因素；治疗师提供共情、接纳与边界。

#### 改变机制

- **洞见与诠释**：把无意识内容“说破”，让来访者看见反复运作的模式。
- **矫正性情感体验**：在安全关系中体验到不同互动，修正内在表征。
- **整合与修通**：把被分裂、被否认的部分重新接纳。
- **内化**：内化治疗师的稳定与关怀，形成更健康的自我功能。
- **心智化**：理解自己与他人的心理状态，减少误读与冲动。

> **核心要点**：动力治疗关注“我为什么这样”——无意识冲突、内在客体关系、防御与移情；治疗关系本身即是改变媒介；机制包括洞见、矫正性情感体验、整合、内化与心智化。

### 四、主要技术和方法

#### 经典技术

- **自由联想**：不加审查地表达一切浮现内容，接近无意识。
- **梦的解析**：探索显梦背后的隐义。
- **诠释**：对阻抗、防御、移情与内容作出解释。
- **澄清与面质**：澄清模糊、温和指出矛盾与回避。
- **修通**（working through）：反复探索同一冲突，使其真正“落地”。

#### 治疗框架

频率、时长、保密、中立、节制与匿名构成稳定**治疗框架**，本身即“抱持”与边界；框架的打破常是重要临床素材。

#### 短程/结构化动力治疗

- **支持—表达性治疗**（卢博斯基）：依动力焦点，融合支持与表达。
- **短程动力治疗**（马兰、西夫尼奥斯）：聚焦单一核心冲突，限时。
- **移情焦点治疗**（TFP）：聚焦移情中的分裂与投射性认同，用于边缘人格障碍。
- **心智化治疗**（MBT）：聚焦反思功能与依恋，广泛用于边缘人格障碍与自伤。

#### 其他

儿童**游戏治疗**（克莱因、温尼科特传统）、动力性团体治疗，以及依恋、人际、情绪聚焦等现代整合取向。

### 五、循证验证与适应症

Shedler（2010）元分析主要纳入**长程心理动力学治疗**，显示其对抑郁、焦虑等具有**大效应量**，且效果**在随访期持续甚至增强**；短程动力治疗的效应量多为**中等**。重复元分析（Driessen 2015 抑郁、Abbass 2013 短程动力 RCT）亦支持其有效，常被认为与 CBT 相当。

对人格障碍与边缘型（TFP、MBT）、抑郁、焦虑及心身症状亦有支持。局限与批评：手册化不足致研究异质性、对照试验数量少于 CBT、某些适应症证据有限。

适应症（大致）：抑郁、广泛性焦虑、惊恐、社交焦虑、人格障碍（尤其边缘型 TFP/MBT）、进食障碍、心身症状；创伤/PTSD（需结合创伤知情或暴露成分）、物质使用、慢性疼痛；严重急性精神病、严重躁狂、高自杀风险需先稳定并联合药物与危机干预。

### 六、临床应用与特殊人群

儿童青少年（游戏治疗、家长参与、依恋与心智化）；人格障碍与边缘型（TFP、MBT）；成人抑郁与焦虑；老年人（丧亲、慢性病、生命意义）；围产期（产后情绪与依恋）；慢性躯体疾病（心身与疾病适应）。

### 七、培训认证与职业路径（国际）

动力取向的核心培训通常包含**个人分析（被分析）+ 个案督导 + 系统理论/临床课程**。落到实操层面：

- **个人分析**：一条严肃的动力/精神分析路径几乎都要求你自己的个人分析，往往达数百小时（每次 50 分钟、通常每周多次），在受训前与受训期间持续进行。
- **督导**：对你自己个案的充分督导，常有多位督导师，持续较长时间；受督导案例数与小时数是关键标准。
- **课程与考核**：系统理论与临床研讨 + 案例考核。**国际精神分析协会**（IPA）会员路径，例如，要求数百小时个人分析与督导，并通过正式案例考核。
- **框架与年限**：欧洲与美国的精神分析机构与诊所（如 Tavistock、Anna Freud Centre、IPA 关联机构）体系成熟但通常历时多年。国际证照分散——专业身份常依赖“受训分析师 + 学会会员 + 持续督导”。

**职业场景**：长程私人执业、精神分析机构与诊所、儿童青少年或母婴工作，部分医院与社区场景。与手册化的 CBT 不同，动力工作更难规模化为短程、数字化或阶梯照护项目，更依赖从业者个人的能力与声誉。

### 八、更多资讯来源（国际）

经典著作：弗洛伊德《梦的解析》《癔症研究》《精神分析引论》；温尼科特《游戏与现实》；科胡特《自体的分析》；克恩伯格《边缘人格障碍的客体关系治疗》；McWilliams《精神分析诊断》《精神分析治疗》；贝特曼 & 弗纳吉《心智化临床实践》；Gabbard《长程心理动力学心理治疗》。

期刊：Journal of the American Psychoanalytic Association；International Journal of Psychoanalysis；Psychoanalytic Psychology；Psychodynamic Psychotherapy。

组织：IPA（ipa.org）；APsaA（apsa.org）；APA 第 39 分会；Anna Freud Centre；Tavistock。

证据库：PubMed、Cochrane、APA Division 12。

---

## 第二部分：中国的发展

精神分析于 20 世纪初作为文化思潮传入中国，长期未形成建制化的临床学科；改革开放后，经由本土化探索与中外系统培训，逐步走向临床化与体系化。

### 一、民国时期的引入与萌芽

1914 年，钱智修在《东方杂志》发表《梦的研究》，是迄今所知最早介绍精神分析的中文文章之一。**高觉敷**（1896–1993）是系统译介弗洛伊德的先驱：1925 年把弗洛伊德在克拉克大学的五次演讲译为《心之分析的起源及发展》；1930 年译《精神分析引论》、1936 年译《精神分析引论新编》（商务印书馆）。1930 年代，**章士钊**、**朱光潜**等亦推动弗洛伊德学说传播。这一时期以**学术译介**为主，尚未形成临床实务体系。

### 二、1949–1978：中断期史实

1949 年后，受意识形态转型与学术体系全面苏化影响，精神分析进入长达近 30 年的停滞与中断期，可分为三阶段。

**1949–1965：意识形态批判与边缘化。** 心理学与精神病学以马列主义、以巴甫洛夫高级神经活动学说为核心框架，全面对接苏联范式。弗洛伊德学说被定性为**资产阶级唯心主义与“泛性论”**，被系统批判并逐出主流。50 年代末，精神科针对神经衰弱发展出“**快速综合疗法**”（药物 + 躯体锻炼 + 集体宣教 + 支持性心理干预），理论基础为巴甫洛夫学派。少数早年接触过精神分析的精神科医生（如**钟友彬、王景祥**）60 年代初在临床中私下尝试精神分析取向的神经症治疗，但未公开规模化。

**1966–1977：文革全面空白。** 心理学被定性为“伪科学”，高校心理学系撤销、课程停开、研究机构解散、人员下放劳动。临床完全转向生物医学模式与政治思想工作，心理治疗被彻底否定；1966–1977 年间，公开发表的精神分析相关学术论文、出版的相关著作几乎绝迹，建制化研究与临床完全停滞（不排除极个别内部资料）。70 年代中期，**钟友彬**等少数精神科医生利用业余时间继续秘密尝试以精神分析为基础的心理治疗，保留了复苏火种。

**1978 年后复苏节点。** 高校心理学系恢复建制，译著重新出版。**1981 年钟友彬在首钢医院开设心理门诊**；**1988 年《中国心理分析：认识领悟心理疗法》出版**；**同年首届中德心理治疗讲习班在昆明举办**，拉开国际合作系统培训序幕。

### 三、中外精神动力学合作培训项目总览

业内俗称的“**中 X 班**”，是指以对应国家精神分析师为核心师资、遵循**国际精神分析协会**（IPA）标准的连续系统培训项目：

| 项目名称 | 起始节点 | 核心承办/基地 | 合作方背景 |
| --- | --- | --- | --- |
| 中德心理治疗连续培训项目 | 1988年讲习班；1997年正式开班 | 昆明起家，2000年起核心培训基地转移至上海市精神卫生中心（赵旭东团队牵头） | 德中心理治疗研究院（DCAP） |
| 中挪精神分析心理治疗连续培训项目 | 2006年第一期 | 首都医科大学附属北京安定医院 | 挪威精神分析界 |
| 中英精神分析取向儿童青少年心理治疗培训项目 | 2012年第一届 | 首都医科大学附属北京安定医院牵头 | 英国安娜·弗洛伊德中心 |
| 武汉中美高级精神分析治疗师培训项目 | 2012年第一季 | 武汉市精神卫生中心（武汉市心理医院） | 美国哥伦比亚大学、霍妮精神分析研究所等 |
| CAPA 中美精神分析培训项目 | 2008年正式开班 | CAPA 中国委员会（线上+线下结合） | 中美精神分析联盟（CAPA） |

### 四、中英班：儿童青少年学院制连续培训项目

这是国内最主流的中英合作精神分析系统培训，聚焦儿童青少年精神分析与心智化发展，遵循英国精神分析协会培训体系。主办：国家外国专家局精神分析引智示范单位、首都医科大学附属北京安定医院、中国心理卫生协会、北京大学学生心理健康教育与咨询中心、首都医科大学临床心理学系；国际合作：英国安娜·弗洛伊德中心、伦敦大学伯克贝克学院。

| 届次 | 培训周期 | 备注 |
| --- | --- | --- |
| 第一届 | 2012–2015年 | 国内首个儿童青少年精神分析系统培训，配套婴儿观察小组 |
| 第二届 | 2015–2018年 | 2015年秋季于北京正式开课 |
| 第三届 | 2019–2021年 | 三年六期系统培训 |
| 第四届 | 2022–2025年 | 受疫情影响，部分公开资料标注为 2023–2025年（确切周期以项目官方为准） |

配套衍生：中英婴儿观察及儿童青少年心智化情绪发展、克莱因学派、温尼科特中间学派等系列工作坊。

### 五、中美班：两大主流体系并行

**体系 1：武汉中美高级精神分析治疗师连续培训项目。** 2011 年由武汉市心理医院**童俊教授**与美国精神分析师**阿诺德·理查德与阿琳·理查德**（Arnold & Arlene Richards）夫妇共同发起；主办为武汉市精神卫生中心（武汉市心理医院），学术支持为中国心理卫生协会精神分析专委会，外方合作含哥伦比亚大学、霍妮精神分析研究所、芝加哥精神分析研究所、华盛顿精神分析学院等。培训模式：**三年四期、每期 8 天集中面授**，分自体、客体关系、女性精神分析、督导等组。

| 季次 | 培训周期 | 关键节点 |
| --- | --- | --- |
| 第一季 | 2012–2015年 | 2012年正式启动，同步开设第一期督导班 |
| 第二季 | 2015–2017年 | 客体关系组培训周期为 2015年4月–2017年5月 |
| 第三季 | 2018–2021年 | 四期分别于 2018.4、2019.4、2020.4、2020.11 举办 |
| 第四季 | 2022–2025年 | 2024.11 秋季班第三期、2025.4 第四期结业 |
| 第五季 | 2026–2029年 | 2026.4.18 启动首期春季班（8 天集中培训） |

**体系 2：CAPA 中美精神分析培训项目。** 由**中美精神分析联盟**（CAPA）运营，是国内最早的系统性中美精神分析培训。CAPA 源于 **2001 年 Elise Snyder 教授来华访问**，**2008 年在美国正式成立**并进入中国开展培训，**2017 年成立 CAPA 中国委员会**（CIC）负责本土运营。分层进阶：两年制基础（2008 首期，累计十余届）、两年制高级（首批 2013 毕业）、“迈向 1000 小时”1 年进阶（4 届）、“迈向 3000 小时”2 年高阶（3 届），并配套婴儿观察、督导与教师学徒等。（以上届数截至 2025 年，属动态更新）

**其他专项**：中美精神动力学夫妻与家庭治疗连续培训（第三届 2013–2015 年，美国 Scharff 夫妇授课）等。

### 六、本土化疗法与关键人物

**钟友彬**自 20 世纪 60 年代开始探索、80 年代系统化**认识领悟疗法**（认知领悟疗法，Zhong's Insight Therapy），被视为**精神分析在中国的本土化改良**：保留无意识与防御机制的基本观点，结合中国社会与生活实际，通过解释让病人对症状的不合理性“领悟”而自觉矫正。

%%FIGURES_CHINA%%

### 七、制度与规范建设

- **注册系统**：**中国心理学会临床与咨询心理学专业机构与专业人员注册系统**（CPS 注册系统）自 2004 年起策划，2007 年 2 月正式启动，设注册助理心理师/注册心理师/注册督导师。
- **学术机构**：**中国心理卫生协会精神分析专业委员会**及其精神分析学组（如曾奇峰任该精神分析学组副组长兼华中地区组长）。
- **《精神卫生法》**（2012 年 10 月通过、2013 年 5 月施行）：第二十三条规定**心理咨询人员不得从事心理治疗或精神障碍的诊断、治疗**，发现可能患有精神障碍的应建议到医疗机构就诊；从而区分“心理咨询”与“心理治疗”，并强化**心理治疗师**（卫健委卫生专业技术资格）的法定地位。

### 八、中国本土循证与研究

中国动力治疗的**随机对照研究整体仍处于起步阶段**。标志性进展是**上海市精神卫生中心仇剑崟团队**完成**国内首个动力性心理治疗治疗抑郁症的多中心、随机、对照临床试验**：采用**动力性人际治疗**（Dynamic Interpersonal Therapy, DIT），研究方案 2020 年发表（Trials/PubMed 32703316），结果 2023 年发表于 Psychological Medicine。中国动力治疗长期以**个案、经验与培训成果**为主，高质量 RCT 少于 CBT。

### 九、更多中国资讯来源

**本土著作**：钟友彬《中国心理分析：认识领悟心理疗法》；曾奇峰、张沛超、李孟潮、徐钧等译著；国际期刊中的中国精神分析专栏/特辑（如《International Journal of Psychoanalysis》中国特辑）。**组织与网站**：中国心理学会（临床与咨询注册系统）、中国心理卫生协会精神分析专委会、IPA 中国学组（筹备）（依托武汉市精神卫生中心，其官网亦称“国际精神分析协会（英国）武汉代表处”，ipawh.cn）、CAPA（capachina.org）、德中心理治疗研究院、北大/北师大/华中师大等高校心理中心。**数据库**：PubMed、CNKI、APA Division 12。

### 十、发展时间线总览

%%TIMELINE_CHINA%%

### 十一、在中国：选择与体验提示

- **如何找到合格的治疗师**：优先考虑心理治疗师（卫健委卫生专业技术资格，在医疗机构执业）或中国心理学会注册系统下的注册心理师/注册督导师，最好对方有充分的个人分析与持续督导。医院门诊、高校心理中心、社区心理服务站是更规范的入口；私人执业者差异较大，可以询问其受训与督导经历。
- **费用与时长**：动力工作通常开放式，因此往往是比限时课程更大的时间与金钱投入。一位可信的动力治疗师应能说明设置（频率、时长、费用、保密）、如何对待中断，以及如何使用督导。
- **对会谈的预期**：你会谈自己的生活、情绪与关系，有时要体验不适或沉默；进展往往是渐进的、关系性的，而不是快速的症状下降。如果一次“动力”会谈只是给建议或泛泛支持、没有设置或反思，要怀疑它是否真是精神动力学取向。
- **数据说明**：培训班届数、版本与费用会变化，请以当期主办方为准（数据截至 2025 年）。

> **一句话总结**：动力治疗在西方经历了从精神分析到客体关系、自体心理学、依恋与心智化的百年谱系；进入中国后历经民国译介、1949–1978 三阶段中断、改革开放后以钟友彬“认识领悟疗法”本土化复苏，并借助中德/中挪/中英/中美班与 CAPA 等学院制连续培训走向临床化，现已有 CPS 注册系统、精神分析专委会与《精神卫生法》的制度框架，以及仇剑崟团队的国内首个动力治疗抑郁多中心 RCT——但整体循证与人才规模仍待加强。

> 声明：本文为科普性概括，不替代专业培训或个体的临床判断。`,
  timelineChina: [
    {
      year: `1949 以前`,
      titleZh: `作为文化思潮传入`,
      titleEn: `Cultural Introduction`,
      bodyZh: `精神分析作为文化思潮传入中国，未形成建制化临床学科。`,
      bodyEn: `Psychoanalysis entered China as a cultural current, not an institutionalized clinical discipline.`,
    },
    {
      year: `1949–1965`,
      titleZh: `批判与边缘化`,
      titleEn: `Criticism & Marginalization`,
      bodyZh: `全面学习苏联学术体系，精神分析受批判边缘化；钟友彬等人私下尝试临床。`,
      bodyEn: `The Soviet academic system was adopted; psychoanalysis was criticized and marginalized, with private clinical attempts by Zhong Youbin and others.`,
    },
    {
      year: `1966–1977`,
      titleZh: `文革空白`,
      titleEn: `Cultural Revolution Blank`,
      bodyZh: `心理学被定性为伪科学，临床与学术全面空白；70 年代中期秘密实践延续。`,
      bodyEn: `Psychology was labeled a pseudoscience; clinical and academic work halted; secret practice continued in the mid-1970s.`,
    },
    {
      year: `1978`,
      titleZh: `改革开放复苏`,
      titleEn: `Recovery`,
      bodyZh: `改革开放，学科进入复苏阶段。`,
      bodyEn: `Reform and opening; the discipline entered recovery.`,
    },
    {
      year: `1981`,
      titleZh: `钟友彬开设心理门诊`,
      titleEn: `Zhong Youbin's Clinic`,
      bodyZh: `钟友彬在首钢医院开设心理门诊。`,
      bodyEn: `Zhong Youbin opened a mental clinic at Shougang Hospital.`,
    },
    {
      year: `1988`,
      titleZh: `本土化专著与中德讲习班`,
      titleEn: `Localized Work & Sino-German Workshop`,
      bodyZh: `钟友彬《中国心理分析》出版；首届中德心理治疗讲习班在昆明举办。`,
      bodyEn: `Chinese Psychoanalysis was published; the first Sino-German psychotherapy workshop was held in Kunming.`,
    },
    {
      year: `1997`,
      titleZh: `中德项目正式开班`,
      titleEn: `Sino-German Program`,
      bodyZh: `中德心理治疗连续培训项目正式开班。`,
      bodyEn: `The Sino-German continuous training formally began.`,
    },
    {
      year: `2000`,
      titleZh: `中德项目转沪`,
      titleEn: `Move to Shanghai`,
      bodyZh: `中德项目核心培训基地转移至上海市精神卫生中心（赵旭东团队牵头）。`,
      bodyEn: `The core Sino-German training base moved to Shanghai Mental Health Center (led by Zhao Xudong's team).`,
    },
    {
      year: `2001`,
      titleZh: `CAPA 缘起与中挪筹备`,
      titleEn: `CAPA Origin & Sino-Norwegian Prep`,
      bodyZh: `CAPA 的缘起（Elise Snyder 来华）；中挪项目筹备启动。`,
      bodyEn: `CAPA's origin (Elise Snyder's visit); Sino-Norwegian program preparation.`,
    },
    {
      year: `2006`,
      titleZh: `中挪班第一期`,
      titleEn: `Sino-Norwegian First Cohort`,
      bodyZh: `中挪班第一期正式开班（Sverre Varvin、杨蕴萍发起）。`,
      bodyEn: `The Sino-Norwegian first cohort began, initiated by Sverre Varvin and Yang Yunping.`,
    },
    {
      year: `2008`,
      titleZh: `CAPA 成立并进入中国`,
      titleEn: `CAPA Founded & Enters China`,
      bodyZh: `CAPA 正式成立并进入中国开班。`,
      bodyEn: `CAPA was formally founded and began training in China.`,
    },
    {
      year: `2012`,
      titleZh: `中英班与武汉中美班启动`,
      titleEn: `Sino-British & Wuhan Sino-American`,
      bodyZh: `中英班第一届启动；武汉中美班第一季启动。`,
      bodyEn: `The Sino-British first cohort and the Wuhan Sino-American first season began.`,
    },
    {
      year: `2015`,
      titleZh: `第二届启动`,
      titleEn: `Second Cohorts`,
      bodyZh: `中英班第二届启动；武汉中美班第二季启动。`,
      bodyEn: `The second Sino-British cohort and Wuhan Sino-American season began.`,
    },
    {
      year: `2017`,
      titleZh: `CAPA 中国委员会成立`,
      titleEn: `CIC Established`,
      bodyZh: `CAPA 中国委员会（CIC）成立。`,
      bodyEn: `The CAPA China Committee (CIC) was established.`,
    },
    {
      year: `2018`,
      titleZh: `第三届启动与 IPA 学组`,
      titleEn: `Third Cohorts & IPA Study Group`,
      bodyZh: `中英班第三届启动；武汉中美班第三季启动；IPA 中国学组（筹备）成立。`,
      bodyEn: `The third Sino-British cohort and Wuhan season began; the IPA China study group (preparatory) was established.`,
    },
    {
      year: `2022`,
      titleZh: `第四届启动`,
      titleEn: `Fourth Cohorts`,
      bodyZh: `中英班第四届启动；武汉中美班第四季启动。`,
      bodyEn: `The fourth Sino-British cohort and Wuhan Sino-American season began.`,
    },
    {
      year: `2026`,
      titleZh: `武汉中美班第五季`,
      titleEn: `Wuhan Sino-American Fifth Season`,
      bodyZh: `武汉中美班第五季正式启动。`,
      bodyEn: `The fifth Wuhan Sino-American season launched.`,
    },
  ],
  figuresChina: [
    {
      nameZh: `高觉敷`,
      nameEn: `Gao Juefu`,
      years: `1896–1993`,
      titleZh: `最早系统译介弗洛伊德`,
      titleEn: `Earliest Translator of Freud`,
      bioZh: `心理学家，1925/1930/1936 年先后翻译弗洛伊德著作，是中国精神分析传播的先驱。`,
      bioEn: `Psychologist who translated Freud's works in 1925, 1930, and 1936 — a pioneer of psychoanalysis in China.`,
    },
    {
      nameZh: `钟友彬`,
      nameEn: `Zhong Youbin`,
      years: `b. 1923`,
      titleZh: `创立认识领悟疗法`,
      titleEn: `Cognitive Insight Therapy`,
      bioZh: `精神病学家，创立认识领悟疗法（中国化精神分析），为本土化取向奠基。`,
      bioEn: `Psychiatrist who founded cognitive insight therapy, a localized psychoanalytic approach.`,
    },
    {
      nameZh: `曾奇峰`,
      nameEn: `Zeng Qifeng`,
      years: `b. 1964`,
      titleZh: `武汉中德心理医院创始人`,
      titleEn: `Founder of Wuhan Sino-German Mental Hospital`,
      bioZh: `曾任武汉市精神卫生中心副主任，参与创办武汉中德心理医院；中德班骨干，精神分析学组副组长兼华中组长。`,
      bioEn: `Former deputy director of Wuhan Mental Health Center, co-founder of Wuhan Sino-German Mental Hospital, Sino-German backbone and study-group deputy head.`,
    },
    {
      nameZh: `杨蕴萍`,
      nameEn: `Yang Yunping`,
      years: `b. 1960s`,
      titleZh: `中挪项目共同发起人`,
      titleEn: `Co-founder of Sino-Norwegian Program`,
      bioZh: `首都医科大学附属北京安定医院教授，与 Sverre Varvin 共同发起中挪项目。`,
      bioEn: `Professor at Beijing Anding Hospital who co-founded the Sino-Norwegian program with Sverre Varvin.`,
    },
    {
      nameZh: `王倩`,
      nameEn: `Wang Qian`,
      years: `b. 1970s`,
      titleZh: `注册心理师、动力治疗`,
      titleEn: `Registered Psychologist & Dynamic Therapy`,
      bioZh: `北京安定医院医师，注册心理师；从事精神分析、心理动力学与心智化治疗。`,
      bioEn: `Clinician at Beijing Anding Hospital, registered psychologist, working in psychoanalytic, dynamic, and mentalization-based treatment.`,
    },
    {
      nameZh: `仇剑崟`,
      nameEn: `Qiu Jianyin`,
      years: `b. 1960s`,
      titleZh: `精神分析专委会常委兼秘书长`,
      titleEn: `Secretary-General of the Psychoanalytic Committee`,
      bioZh: `上海市精神卫生中心心理咨询与治疗中心主任，中国心理卫生协会精神分析专委会常委兼秘书长；团队完成国内首个动力治疗抑郁多中心 RCT。`,
      bioEn: `Director of the Shanghai Mental Health Center counseling center and secretary-general of the psychoanalytic committee; his team ran China's first multicentered dynamic-depression RCT.`,
    },
    {
      nameZh: `童俊`,
      nameEn: `Tong Jun`,
      years: `b. 1960s`,
      titleZh: `武汉中美班共同发起人`,
      titleEn: `Co-founder of Wuhan Sino-American Program`,
      bioZh: `武汉市心理医院教授，2011 年与 Arnold & Arlene Richards 共同发起武汉中美班；IPA 中国学组（筹备）首任主席。`,
      bioEn: `Professor at Wuhan Mental Health Center who co-founded the Wuhan Sino-American program with Arnold and Arlene Richards; first chair of the IPA China study group (preparatory).`,
    },
    {
      nameZh: `李孟潮`,
      nameEn: `Li Mengchao`,
      years: `b. 1970s`,
      titleZh: `精神分析师、译者`,
      titleEn: `Analyst & Translator`,
      bioZh: `CAPA 早期学员，从事精神分析临床与译著，推动华人精神分析传播。`,
      bioEn: `Early CAPA student, clinician and translator who advanced psychoanalysis in Chinese-speaking contexts.`,
    },
    {
      nameZh: `张沛超、徐钧`,
      nameEn: `Zhang Peichao & Xu Jun`,
      years: `b. 1970s`,
      titleZh: `自体心理学、比昂引进`,
      titleEn: `Self Psychology & Bion`,
      bioZh: `精神分析师、译者，引进并审校自体心理学、比昂等取向。`,
      bioEn: `Analysts and translators who introduced and reviewed self psychology, Bion, and related orientations.`,
    },
    {
      nameZh: `王虓`,
      nameEn: `Wang Xiao`,
      years: `b. 1970s`,
      titleZh: `塔维斯托克、中英班组织者`,
      titleEn: `Tavistock & Sino-British Organizer`,
      bioZh: `英国 Tavistock 中心精神分析师，组织克莱因取向培训与中英班。`,
      bioEn: `Psychoanalyst at the Tavistock who organized Klein-oriented training and the Sino-British classes.`,
    },
    {
      nameZh: `李鼎智`,
      nameEn: `Li Dingzhi`,
      years: `b. 1960s`,
      titleZh: `武汉中德心理医院前院长`,
      titleEn: `Former Director, Wuhan Sino-German Mental Hospital`,
      bioZh: `湖北心理卫生协会常务理事、注册督导师，深研动力取向与催眠。`,
      bioEn: `Hubei Mental Health Association director and registered supervisor specializing in dynamic orientation and hypnosis.`,
    },
  ],
  fitClient: {
    zh: `#### 一次会谈像什么

动力取向的会谈比结构化疗法更少结构。你被邀请说出脑海中浮现的任何内容——自由联想——治疗师更多是在聆听反复出现的主题、情绪与模式，而非按固定议程推进。沉默很正常，且往往承载意义。治疗师通常更少指导、更中立，可能做反映、澄清或指出模式，并会留意你如何与他相处（移情）作为活的材料。会谈经常触及你的过去与亲密关系，情绪强度可能较高。很多人的描述是“在关系里理解自己”，而不是“学一个技能”。

#### 咨询的基本设置

- **疗程**：多为每周一次、每次约 45–60 分钟，常见持续数月到数年；经典精神分析可能每周 1–5 次、持续数年。短程动力治疗（如焦点取向、限定次数）则通常 12–40 次。这是比限时疗法更大的时间、金钱与情感投入，通常会先期约定频率、时长与费用。
- **你可能将面对**：有些会谈会有较多沉默；需要把你对治疗师的真实感受（移情）也带入讨论；探索过去与关系可能唤起较强烈的情绪，改变往往更慢、更隐性、更“关系性”。若你很难忍受沉默，或只想快速拿到具体方法，可能会觉得进展不顺。
- **注意事项**：急性精神病性症状、严重躁狂、高自杀风险需先做稳定与药物/危机处理，仅靠治疗设置不够；设置本身（迟到、早退、费用、中断）往往是有意义的临床素材，因此对过程的稳定投入很重要。若一位“动力”治疗师只给建议、无设置、无反思，要留意其是否真正受过系统训练与个人分析/督导。

#### 来访者适配自测

下面没有标准答案，只是帮你想清楚自己期待什么样的咨询。对照自己的偏好勾一下即可：

- 我更想要：长期理解自己、看清模式与关系 ／ 快速缓解症状、看到可衡量的进展
- 我更习惯：开放式、自由、慢慢展开 ／ 有结构、有议程、有具体工具
- 我更愿意：把内容都留在会谈里谈、容纳沉默 ／ 在会谈之间做练习与记录
- 我更希望治疗师：像一位陪我探索的同伴 ／ 像教练/老师一样给建议和工具
- 我这次的投入：可以长期、持续 ／ 是短程、限时
- 我更想谈：过去与关系对我的影响 ／ 现在与未来怎么走

把这些答案带给咨询师，会有助于判断这个流派是否契合你，也更容易建立好的工作联盟。`,
    en: `#### What a Session Feels Like

A psychodynamic session is less structured than a manualized therapy. You are invited to say whatever comes to mind — free association — and the therapist listens for recurring themes, feelings, and patterns rather than following a fixed agenda. Silence is normal and can carry meaning. The therapist tends to be less directive and more neutral; they may reflect back, clarify, or point out patterns, and they will notice how you relate to them (transference) as live material. Sessions often touch on your past and close relationships, and they can be emotionally intense. Many describe it as "coming to understand yourself within a relationship" rather than "learning a skill."

#### Basic Setup of the Therapy

- **Duration**: usually weekly, about 45–60 minutes per session, often lasting months to years; classical psychoanalysis may run one to five sessions per week over several years. Short-term dynamic therapies (e.g., focal, time-limited) are typically 12–40 sessions. This is a larger investment of time, money, and emotion than a time-limited approach, and the frequency, length, and fee are usually agreed at the outset.
- **What you may face**: some sessions involve notable silence; you may be asked to bring your real feelings toward the therapist (transference) into the discussion; exploring the past and relationships can stir strong emotions, and change often feels slower, subtler, and more relational. If you find silence hard to bear, or want concrete methods quickly, progress can feel discouraging.
- **Cautions**: acute psychosis, severe mania, and high suicide risk require stabilization and medication/crisis management first; the frame alone is not sufficient. The frame itself (arriving late, leaving early, fees, interruptions) is often meaningful clinical material, so steady commitment matters. If a "dynamic" therapist only gives advice with no frame or reflection, ask whether they have had systematic training plus personal analysis/supervision.

#### Client Fit Self-Check

There are no right answers — this is just to help you clarify what you want from therapy. Tick the side that sounds more like you:

- I mainly want to: understand myself, patterns, and relationships over time ／ relieve symptoms quickly and see measurable progress
- I am more used to: an open, free, unhurried space ／ structure, an agenda, and concrete tools
- I would rather: keep everything in the session and tolerate silence ／ practice and record between sessions
- I would prefer the therapist: as a companion who explores with me ／ as a coach or teacher who gives tools
- My commitment now is: can be long-term and ongoing ／ short-term and time-limited
- I would rather talk about: how the past and relationships affect me ／ the present and the future

Bring these answers to your therapist; it will help both of you judge whether this orientation fits you and build a stronger working alliance.`,
  },
  fitPractitioner: {
    zh: `#### 性格适配

动力工作犒赏的是耐受歧义、对缓慢改变有耐心、能与强烈情感与沉默共处、真正对关系与内心世界感兴趣的人。如果你更喜欢结构、快速可衡量的结果、主动教学，CBT 可能更让你自在——两条路没有对错，匹配你的性格与工作方式就好。

#### 训练门槛与要求

这是最大的投入差异。一条严肃的动力/精神分析路径通常要求你自己的个人分析（数百小时）、对个案的大量督导、系统理论/临床课程，外加案例考核。它比典型的 CBT 课程更长、更贵、对个人更严苛——你必须愿意把自己也当成来访者，并接受长期持续的督导。

#### 适用场景与就业方向

训练到被承认的水平（如 IPA 关联机构、Tavistock、Anna Freud Centre）投入庞大且耗时。认证分散——专业身份常依赖“受训分析师 + 学会会员 + 持续督导”。就业方向多为长程私人执业、精神分析机构与诊所、儿童青少年或母婴工作、部分医院与社区场景；它更难手册化、更难规模化为数字化或短程项目，但对被关系深度吸引的人极其有回报。`,
    en: `#### Personality Fit

Psychodynamic work rewards tolerance of ambiguity, patience with slow change, comfort with strong affect and silence, and a genuine interest in relationships and the inner world. If you prefer structure, quick measurable outcomes, and active teaching, CBT may feel more comfortable — neither path is wrong; align it with your personality and preferred way of working.

#### Training Thresholds and Requirements

This is the biggest commitment difference. A serious psychodynamic/psychoanalytic path typically requires your own personal analysis (hundreds of hours), extensive supervision of your cases, systematic theory/clinical courses, and a case-based examination. It is longer, costlier, and far more personally demanding than a typical CBT course — you must be willing to be a client yourself and to sustain ongoing supervision.

#### Applicable Settings and Career Directions

Training to a recognized level (e.g., IPA-linked institutes, Tavistock, Anna Freud Centre) is substantial and time-consuming. Credentialing is decentralized — professional identity often rests on "trained analyst + society membership + ongoing supervision." Career directions are mostly long-term private practice, psychoanalytic institutes and clinics, child/adolescent or parent-infant work, and some hospital or community settings; it is less manualized and harder to scale into digital or brief programs, but it can be deeply rewarding for those drawn to relational depth.`,
  },
  category: `school`,
  school: `psychodynamic`,
  status: `published`,
  figures: [
    {
      nameZh: `约瑟夫·布洛伊尔`,
      nameEn: `Josef Breuer`,
      years: `1842–1925`,
      titleZh: `宣泄法`,
      titleEn: `Catharsis`,
      bioZh: `奥地利医师，与弗洛伊德合著《癔症研究》，提出宣泄法，是精神分析的先声。`,
      bioEn: `Austrian physician who co-authored Studies on Hysteria with Freud and introduced catharsis.`,
    },
    {
      nameZh: `西格蒙德·弗洛伊德`,
      nameEn: `Sigmund Freud`,
      years: `1856–1939`,
      titleZh: `精神分析创始人`,
      titleEn: `Founder of Psychoanalysis`,
      bioZh: `奥地利精神科医师，创立精神分析；提出无意识、本我/自我/超我、移情与自由联想。`,
      bioEn: `Austrian neurologist who founded psychoanalysis, introducing the unconscious, the structural model, transference, and free association.`,
    },
    {
      nameZh: `阿尔弗雷德·阿德勒`,
      nameEn: `Alfred Adler`,
      years: `1870–1937`,
      titleZh: `个体心理学`,
      titleEn: `Individual Psychology`,
      bioZh: `奥地利心理学家，创立个体心理学，强调自卑与超越、社会兴趣；后与弗洛伊德分裂。`,
      bioEn: `Austrian psychologist who founded individual psychology, emphasizing inferiority, striving, and social interest before splitting with Freud.`,
    },
    {
      nameZh: `卡尔·荣格`,
      nameEn: `Carl Jung`,
      years: `1875–1961`,
      titleZh: `分析心理学`,
      titleEn: `Analytical Psychology`,
      bioZh: `瑞士心理学家，创立分析心理学，提出集体无意识、原型、人格面具与阴影。`,
      bioEn: `Swiss psychiatrist who founded analytical psychology, introducing the collective unconscious, archetypes, persona, and shadow.`,
    },
    {
      nameZh: `安娜·弗洛伊德`,
      nameEn: `Anna Freud`,
      years: `1895–1982`,
      titleZh: `自我心理学与防御机制`,
      titleEn: `Ego Psychology & Defense`,
      bioZh: `弗洛伊德之女，著《自我与防御机制》，系统化防御分类，推动儿童精神分析。`,
      bioEn: `Freud's daughter, author of The Ego and the Mechanisms of Defence, who systematized defenses and advanced child psychoanalysis.`,
    },
    {
      nameZh: `梅兰妮·克莱因`,
      nameEn: `Melanie Klein`,
      years: `1882–1960`,
      titleZh: `客体关系奠基`,
      titleEn: `Founder of Object Relations`,
      bioZh: `奥地利裔英国精神分析师，提出偏执—分裂位与抑郁位、投射性认同与游戏治疗。`,
      bioEn: `Austrian-born British analyst who proposed the paranoid-schizoid and depressive positions, projective identification, and play therapy.`,
    },
    {
      nameZh: `唐纳德·温尼科特`,
      nameEn: `Donald Winnicott`,
      years: `1896–1971`,
      titleZh: `英国独立学派`,
      titleEn: `British Independent School`,
      bioZh: `英国儿科医生与精神分析师，提出足够好的母亲、真我/假我、过渡性客体与游戏。`,
      bioEn: `British pediatrician and analyst who proposed the good-enough mother, true/false self, transitional objects, and play.`,
    },
    {
      nameZh: `玛格丽特·马勒`,
      nameEn: `Margaret Mahler`,
      years: `1897–1985`,
      titleZh: `分离—个体化`,
      titleEn: `Separation–Individuation`,
      bioZh: `匈牙利裔美国精神分析师，提出分离—个体化阶段与客体恒常性。`,
      bioEn: `Hungarian-born American analyst who described separation–individuation phases and object constancy.`,
    },
    {
      nameZh: `海因茨·科胡特`,
      nameEn: `Heinz Kohut`,
      years: `1913–1981`,
      titleZh: `自体心理学`,
      titleEn: `Self Psychology`,
      bioZh: `美国精神分析师，创立自体心理学，提出自体客体、共情与自恋的发展。`,
      bioEn: `American analyst who founded self psychology, proposing selfobjects, empathy, and the development of narcissism.`,
    },
    {
      nameZh: `哈里·沙利文`,
      nameEn: `Harry Stack Sullivan`,
      years: `1892–1949`,
      titleZh: `人际学派`,
      titleEn: `Interpersonal School`,
      bioZh: `美国精神科医师，创立人际学派，强调人际关系、安全与人际场域。`,
      bioEn: `American psychiatrist who founded the interpersonal school, emphasizing relationships, security, and the interpersonal field.`,
    },
    {
      nameZh: `约翰·鲍尔比`,
      nameEn: `John Bowlby`,
      years: `1907–1990`,
      titleZh: `依恋理论`,
      titleEn: `Attachment Theory`,
      bioZh: `英国精神科医师与精神分析师，创立依恋理论，提出安全基地与内部工作模型。`,
      bioEn: `British psychiatrist and analyst who founded attachment theory, proposing the secure base and internal working models.`,
    },
    {
      nameZh: `奥托·克恩伯格`,
      nameEn: `Otto Kernberg`,
      years: `b. 1928`,
      titleZh: `移情焦点治疗（TFP）`,
      titleEn: `Transference-Focused Psychotherapy`,
      bioZh: `奥地利裔美国精神分析师，提出边缘人格结构与分裂防御，发展移情焦点治疗。`,
      bioEn: `Austrian-born American analyst who described borderline personality structure, splitting defenses, and developed TFP.`,
    },
    {
      nameZh: `安东尼·贝特曼、彼得·弗纳吉`,
      nameEn: `Anthony Bateman & Peter Fonagy`,
      years: `b. 1949 / b. 1952`,
      titleZh: `心智化治疗（MBT）`,
      titleEn: `Mentalization-Based Treatment`,
      bioZh: `英国精神分析师，提出心智化（反思功能）与依恋的结合，创立 MBT，用于边缘人格与自伤。`,
      bioEn: `British analysts who combined mentalization (reflective function) with attachment, creating MBT for borderline personality and self-harm.`,
    },
    {
      nameZh: `乔纳森·谢德勒`,
      nameEn: `Jonathan Shedler`,
      years: `b. 1950`,
      titleZh: `动力治疗效应研究`,
      titleEn: `Effectiveness Research`,
      bioZh: `美国心理学家，2010 年元分析证明长程动力治疗对抑郁焦虑具大效应量且维持持久。`,
      bioEn: `American psychologist whose 2010 meta-analysis showed large, durable effects of long-term psychodynamic therapy for depression and anxiety.`,
    },
  ],
};
