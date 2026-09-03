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

export const EXISTENTIAL_TOPIC: TopicSeed = {
  slug: `existential`,
  title: `Existential Therapy`,
  titleZh: `存在主义疗法`,
  summary: `A bilingual overview of existential therapy covering its lineage, key figures, core principles, techniques, evidence, applications, its development in China, and further resources.`,
  summaryZh: `一套双语版的存在主义疗法内容：涵盖历史谱系与核心人物、核心原理、技术方法、循证与应用，并单独成篇介绍其在中国的发展。`,
  timeline: [
    {
      year: "1940s–1950s",
      titleZh: "存在主义心理学进入美国",
      titleEn: "Existentialism Enters America",
      bodyZh: "梅的《焦虑的意义》（1950，由博士论文改写）与《存在》（1958，与安杰尔、埃伦伯格合编）把存在主义哲学带入临床心理学。",
      bodyEn: "May's The Meaning of Anxiety (1950, from his doctoral dissertation) and Existence (1958, co-edited with Ernest Angel and Henri Ellenberger) brought existential philosophy into clinical psychology.",
    },
    {
      year: "1940s–1950s",
      titleZh: "此在分析与存在分析",
      titleEn: "Daseinsanalysis",
      bodyZh: "宾斯万格最早把海德格尔的“此在”引入精神病理（此在分析），博斯随后与海德格尔直接合作发展出自己的此在分析流派，强调人作为“在世界中存在”的意义结构。",
      bodyEn: "Binswanger was the first to apply Heidegger's \"Dasein\" to psychopathology (Daseinsanalysis); Boss later developed his own Daseinsanalytic school in direct collaboration with Heidegger, emphasizing human being-in-the-world as a meaning structure.",
    },
    {
      year: "1940s–1950s",
      titleZh: "意义治疗（logotherapy）",
      titleEn: "Logotherapy",
      bodyZh: "弗兰克尔在集中营经历基础上创立意义治疗，以“意义意志”为核心，《活出生命的意义》（德文 1946，初名《一个心理学家体验集中营》；英文 1959，初名《从死亡集中营到存在主义》）广为流传。",
      bodyEn: "Frankl, drawing on his concentration-camp experience, founded logotherapy around the \"will to meaning\"; his Man's Search for Meaning (German 1946, originally Ein Psychologe erlebt das Konzentrationslager; English 1959, originally From Death-Camp to Existentialism) became widely read.",
    },
    {
      year: "1960s–1970s",
      titleZh: "存在—人本取向扩展",
      titleEn: "Existential-Humanistic Expansion",
      bodyZh: "梅与罗杰斯等推动存在—人本心理学，《存在主义心理学与精神病学评论》（Review of Existential Psychology and Psychiatry，1961 年创刊）等期刊创刊，美国心理学会第 32 分会（人本心理学会）1971 年成立。",
      bodyEn: "May and Rogers and others advanced existential-humanistic psychology; journals such as the Review of Existential Psychology and Psychiatry (founded 1961) were launched, and APA Division 32 (Society for Humanistic Psychology) was established in 1971.",
    },
    {
      year: "1970s–1980s",
      titleZh: "存在主义心理治疗体系化",
      titleEn: "Existential Psychotherapy Systematized",
      bodyZh: "亚隆《存在主义心理治疗》（1980）系统梳理四大存在议题（死亡、自由、孤独、无意义），并把它用于个体与团体治疗。",
      bodyEn: "Yalom's Existential Psychotherapy (1980) systematized the four existential concerns (death, freedom, isolation, meaninglessness) for individual and group work.",
    },
    {
      year: "1980s–1990s",
      titleZh: "存在分析与意义治疗的当代化",
      titleEn: "Modern Existential Analysis",
      bodyZh: "朗格勒（Alfried Längle）在弗兰克尔基础上发展出“个人存在分析”（存在分析）与“四大基本动机”模型，欧洲存在主义治疗传统进入当代。",
      bodyEn: "Alfried Längle developed \"personal existential analysis\" and the \"four fundamental motivations\" model from Frankl's work, bringing the European existential tradition into the present.",
    },
    {
      year: "1980s–2000s",
      titleZh: "英国与存在主义治疗职业化",
      titleEn: "UK & Professionalization",
      bodyZh: "范·德·意珍（Emmy van Deurzen）推动英国存在主义治疗的职业化，1988 年成立英国存在分析学会（SEA），并发展出对临床“四大生活维度”的探讨。",
      bodyEn: "Emmy van Deurzen advanced the professionalization of existential therapy in the UK, founding the Society for Existential Analysis (SEA) in 1988 and exploring four \"life dimensions\" in clinical work.",
    },
    {
      year: "2000s–2010s",
      titleZh: "意义中心疗法与循证",
      titleEn: "Meaning-Centered Therapy & Evidence",
      bodyZh: "布赖特巴特在纪念斯隆·凯特琳癌症中心发展“意义中心心理疗法”（MCP）用于晚期癌症，发表系列随机对照研究，为存在取向提供实证支持。",
      bodyEn: "William Breitbart developed Meaning-Centered Psychotherapy (MCP) for advanced cancer at Memorial Sloan Kettering Cancer Center and published a series of randomized trials, offering empirical support for an existential approach.",
    }
  ],
  body: "# Existential Therapy\n\n## Part 1: The Western (International) Tradition\n\n## 1. Origins and Historical Development\n\nExistential therapy grows out of existential philosophy and asks the human questions beneath psychological distress: What gives life meaning? What does it mean to be free? How do we face mortality, isolation, and responsibility? Rather than treating anxiety as an illness to remove, existential therapy sees it as a signal that can point toward more authentic living.\n\n%%TIMELINE%%\n\n### Philosophical Roots\n\nThe intellectual soil of existential therapy lies in European philosophy. These philosophers were not all therapists, but they supplied the concepts and stance of existential therapy:\n\n- **Søren Kierkegaard (1813–1855)**: the \"father of existentialism,\" who understood anxiety as the dizziness of freedom's possibility, and proposed \"subjectivity is truth\" and the task of becoming oneself.\n- **Friedrich Nietzsche (1844–1900)**: after the \"death of God,\" humans must create their own values; amor fati and the eternal recurrence ground meaning-making in the face of nihilism.\n- **Edmund Husserl (1859–1938)**: phenomenology — the epoché (bracketing) and \"return to the things themselves\" — is the methodological toolbox for describing lived experience.\n- **Martin Heidegger (1889–1976)**: Being and Time (1927) introduced Dasein, being-in-the-world, and being-toward-death — the direct source of Daseinsanalysis and authenticity.\n- **Karl Jaspers (1883–1969)**: philosopher-psychiatrist (General Psychopathology, 1913) who introduced \"boundary situations\" (Grenzsituationen) — death, suffering, struggle, guilt — that push persons toward authentic choice.\n- **Martin Buber (1878–1965)**: the \"I–Thou\" (I–You) encounter, the core of the authentic-encounter idea in existential therapy.\n- **Jean-Paul Sartre (1905–1980)**: \"existence precedes essence,\" radical freedom, and bad faith (mauvaise foi).\n- **Maurice Merleau-Ponty (1908–1961)**: embodiment — the lived body as the site of experience rather than a machine.\n\n### The Main Lines in Brief\n\n**Existential psychology (May).** Rollo May brought existentialism into American psychology, framing human life around freedom, choice, anxiety, and the courage to become oneself.\n\n**Daseinsanalysis (Binswanger, Boss).** Applying Heidegger's \"being-in-the-world,\" Daseinsanalysis understands psychopathology as a disturbance in the structure of a person's world-relationship, rather than as a disease inside the psyche.\n\n**Logotherapy (Frankl).** Frankl centered the \"will to meaning.\" Even in unchangeable suffering, people retain freedom to choose their attitude; the task of therapy is to help find meaning.\n\n**Existential psychotherapy (Yalom).** Yalom systematized four \"givens\" — death, freedom and responsibility, isolation, and meaninglessness — and turned the therapeutic relationship into a genuine human encounter.\n\n**Contemporary strands.** Längle's personal existential analysis (including the \"four fundamental motivations\"), van Deurzen's British existential school, meaning-centered psychotherapy (Breitbart) in psycho-oncology, dignity therapy (Chochinov) in end-of-life care, and Paul T. P. Wong's meaning therapy and existential positive psychology continue and extend the tradition.\n\n## 2. Key Figures and Contributions\n\nExistential therapy was shaped by figures who refused to reduce the person to drives or behaviors and instead confronted the limits and possibilities of being human.\n\n%%FIGURES%%\n\n## 3. Core Principles and Mechanisms\n\n### The Existential Givens (Yalom)\n\nDeath, freedom and responsibility, isolation, and meaninglessness. Awareness of these generates \"existential anxiety,\" which can be faced and transformed into growth rather than avoided.\n\n### Anxiety as a Growth Signal\n\nAnxiety is not merely pathology; it is the felt awareness of the possibility of authentic choice and the reality of limits. The task is to bear it and use it.\n\n### Freedom, Responsibility, and Authenticity\n\nWe are free to choose, and therefore responsible for how we live. Avoiding that freedom (inauthenticity) creates guilt or bad faith; therapy invites the client to own their choices.\n\n### Meaning and the Will to Meaning\n\nLogotherapy holds that a \"will to meaning\" is primary. Meaning can be found in creative, experiential, and attitudinal values — and, in unavoidable suffering, in how one meets it (tragic optimism).\n\n### Being-in-the-World\n\nDaseinsanalysis sees the person always in relation to a world (self, others, environment, time). Distress reflects a narrowed or blocked world-relationship.\n\n### The Four Fundamental Motivations (Längle)\n\nLängle organized the preconditions of a \"full existence\" into four fundamental motivations, each pairing a \"no\" with an affirmation:\n\n1. **Can I be?** — gaining a foothold in the world (accepting \"I am,\" against the fear of \"not being\");\n2. **Do I like living?** — finding value in relationship and time (affirming life, against pain and weariness);\n3. **May I be myself?** — becoming an authentic self seen by others (against self-abandonment and shame);\n4. **What is it all for?** — living within a larger meaning-context (against despair and meaninglessness).\n\nContemporary existential analysis unfolds these layers in phenomenological dialogue, supplementing early logotherapy's emphasis on \"meaning\" with more attention to feeling and relationship.\n\n> **Core points**: Existential therapy asks \"what is it like to be you, facing life's limits?\" It works with the four givens — death, freedom, isolation, meaninglessness — sees anxiety as a growth signal, and uses the authentic human encounter between client and therapist as the medium of change.\n\n## 4. Key Techniques and Methods\n\n### Phenomenological Exploration\n\nThe therapist brackets assumptions and helps the client describe their lived experience precisely — \"what is it like, right now?\" — rather than interpreting it.\n\n### Exploring the Existential Givens\n\nOpen dialogue about death, freedom, isolation, and meaning; examining how the client avoids or embraces these. Questions may be direct but are offered alongside presence and care.\n\n### Logotherapy / Meaning-Centered Dialogue\n\nSocratic dialogue about values and meaning; confrontations that name the client's freedom and responsibility; the \"tragic triad\" (pain, guilt, death) and the search for meaning within it.\n\n### Encounter and Presence\n\n\"I–Thou\" relationship — the therapist is a real, present human being, not a blank screen; the relationship is the instrument.\n\n### Existential Group Therapy\n\nExploring givens in a group; hope, universality, interpersonal learning, meaning-making (Yalom's group factors).\n\n| Category | Core methods | Main target |\n| --- | --- | --- |\n| Phenomenological | Describe lived experience; bracket assumptions | Subjective meaning |\n| Existential givens | Dialogue on death, freedom, isolation, meaning | Existential anxiety, avoidance |\n| Logotherapy | Meaning dialogue, Socratic, confrontation of limits | Will to meaning, tragic triad (pain, guilt, death) |\n| Encounter | I–Thou presence, authenticity | Isolation, relationship |\n| Group | Existential group factors | Universality, meaning, support |\n\n> A minimal example: a client says \"nothing matters anymore.\" Rather than correct the distortion, the existential therapist stays with the experience — exploring what has been lost, what still matters, and where freedom remains. Meaning is not imposed but discovered in authentic encounter.\n\n## 5. Evidence and Indications\n\n- **Meaning-Centered Psychotherapy (MCP)**: developed and manualized at Memorial Sloan Kettering by Breitbart and colleagues, with a pilot RCT (2010) and two large trials (group MCGP, 2015, N=253; individual IMCP, 2018, N=325) showing enhanced meaning and spiritual well-being, improved quality of life, and reduced depression and desire for death in advanced cancer; a Chinese-language MCGP RCT with cancer patients also reported positive results — a strong modern evidence point for an existential method.\n- **Dignity Therapy**: developed by Harvey Chochinov for terminally ill patients, a brief structured life-review interview that generates a \"dignity document\"; randomized trials show improved dignity and reduced distress, making it one of the best-evidenced existential-adjacent methods in end-of-life care.\n- **Person-centered and relational elements**: the therapeutic relationship and meaning-making are robust common factors.\n- **Existing reviews**: existential therapy is often studied alongside humanistic therapy; the evidence base is smaller and less manualized than CBT, with many qualitative and mixed-method studies.\n- **Yalom's group therapy**: group factors (universality, instillation of hope, interpersonal learning) have substantial descriptive and process-research support; randomized trials of existential group therapy remain limited.\n- **Criticisms**: fewer large RCTs; less manualized, harder to standardize; outcomes can be harder to measure. It may be insufficient alone for severe acute presentations.\n\n### Indication Tiers (approximate)\n\n| Evidence / fit | Indications |\n| --- | --- |\n| Good fit | Meaning and purpose crisis, existential anxiety, grief and bereavement, identity and values, transitions (catastrophic illness, retirement, midlife), spirituality, burnout |\n| Use with care / adjunct | Depression, anxiety (may combine with structured approaches); terminal illness (MCP is phase-based) |\n| Caution | Acute psychosis, severe mania, high suicide risk require crisis and medical stabilization first; a purely reflective approach alone is not sufficient |\n\n## 6. Applications and Special Populations\n\n- **Meaning and purpose crises**; **existential anxiety**; **grief and bereavement**; **identity, values, and spirituality**.\n- **Catastrophic and terminal illness** (meaning-centered psychotherapy in psycho-oncology); **palliative and end-of-life care**.\n- **Life transitions** — midlife, retirement, career and identity change; **burnout and exhaustion of meaning**.\n- **Adolescents and young adults** (identity, freedom, mortality awareness); **older adults** (meaning, end-of-life).\n- **Group therapy** (Yalom-style existential-interpersonal groups); **training and supervision** (the person of the therapist, confronting limits).\n\n## 7. Training, Certification, and Career (International)\n\n- **UK / continental**: Society for Existential Analysis (SEA) and GLE — training in existential analysis / logotherapy; degree-based existential counseling programs (e.g., at the New School of Psychotherapy and Counselling).\n- **Logotherapy / meaning**: Viktor Frankl Institute (logotherapy); International Society of Logotherapy.\n- **Längle's existential analysis**: GLE international training (personal existential analysis).\n- **Common**: substantial engagement with philosophy, phenomenology, personal therapy, and deep supervision; often in counseling, academic, or humanistic contexts rather than psychiatric hospitals.\n- **Career settings**: private practice, counseling centers, universities, palliative/hospice, psycho-oncology, end-of-life, and existential-humanistic group work.\n\n## 8. Further Resources (International)\n\n**Classics**: Philosophical roots — Kierkegaard, Fear and Trembling; The Sickness unto Death. Heidegger, Being and Time. Jaspers, General Psychopathology. Sartre, Being and Nothingness. Buber, I and Thou. Therapeutic works — May, The Meaning of Anxiety; Existence; Love and Will. Frankl, Man's Search for Meaning; The Doctor and the Soul; The Will to Meaning. Yalom, Existential Psychotherapy; Staring at the Sun. Binswanger, Being-in-the-World. Boss, Existential Foundations of Medicine and Psychology. van Deurzen, Existential Psychotherapy and Counselling. Längle, existential analysis texts. Breitbart, Meaning-Centered Psychotherapy for Cancer. Chochinov, Dignity Therapy: Final Words for Final Days.\n\n**Journals**: Existential Analysis; Journal of Humanistic Psychology; The Humanistic Psychologist; Review of Existential Psychology and Psychiatry; Journal of Phenomenological Psychology.\n\n**Organizations**: Society for Existential Analysis (UK); GLE International (Society for Logotherapy and Existential Analysis); Viktor Frankl Institute; New School of Psychotherapy and Counselling; APA Division 32.\n\n**Evidence sources**: PubMed, Cochrane, APA Division 12, NICE guidelines.\n\n---\n\n## Part 2: The Development in China\n\nExistential thinking entered China largely through translation and academic exchange, and has grown mainly in counseling practice, psycho-oncology, and end-of-life care rather than as a large institutionalized training school.\n\n### 1. Translation and Reception (1980s–1990s)\n\nAfter reform and opening, works by May, Frankl, and Yalom were translated; existential ideas of meaning, freedom, and death became part of counseling education and the \"life and death\" humanities discourse.\n\n### 2. The Pioneer and Founder (1990s–2000s)\n\nWang Xuefu (王学富), a Nanjing-based existential scholar-practitioner, systematically introduced Western existential psychotherapy to China, founded the Nanjing Zhimian (Direct-Facing) Counseling Institute in 2002, and developed \"Zhimian Psychology/Zhimian Therapy,\" an existential-humanistic approach rooted in Chinese cultural contexts — widely regarded as the first major Chinese existential psychotherapy practice. He received the American Psychological Association's Charlotte and Karl Bühler Award in 2013.\n\n### 3. Integration into Counseling and Groups (2000s–)\n\nExistential concepts of meaning, responsibility, and death found their way into counseling training, psycho-oncology, and palliative care; existential group work began to develop (e.g., Li Lun's Asian existential group association).\n\n### 4. End-of-Life and Meaning in Medicine\n\nMedical humanists (e.g., Wang Yifang of Peking University) have promoted \"life-and-death\" philosophy, palliative care, and narratives of dignity and meaning, echoing existential themes in Chinese medicine.\n\n%%TIMELINE_CHINA%%\n\n### 5. Chinese Representatives and Key Figures\n\n%%FIGURES_CHINA%%\n\n### 6. Local Evidence and Research\n\nChina's empirical work on existential therapy is limited; it consists mostly of qualitative studies, conceptual essays, and applications in psycho-oncology and palliative care, with far fewer randomized trials than for CBT. Notable highlights include a randomized controlled trial of meaning-centered group psychotherapy (MCGP) in Chinese cancer patients (showing improved meaning in life and reduced fear of recurrence) and growing local practice of existential group work.\n\n### 7. Localization and Challenges\n\nExistential themes of death and meaning can feel abstract or heavy in Chinese contexts, where these topics are often avoided; solutions-centered or pragmatic expectations may favour structured methods. Practitioners adapt by embedding existential work in practical life questions and combining it with trauma-informed or structured approaches where needed. Clinical competence and crisis judgment remain important.\n\n### 8. Further China Resources\n\n**Books**: translations of Frankl (Man's Search for Meaning) and Yalom; Wang Xuefu, works on Zhimian (Direct-Facing) therapy and existential counseling; Wang Yifang, works on death and medical humanities. **Organizations**: Nanjing Zhimian Counseling Institute; existential-humanistic counseling training; university counseling centers. **Databases**: CNKI.\n\n> In one sentence: existential therapy is a philosophical, meaning-centered orientation that can be seen as the philosophical wing of the humanistic \"third force\"; it addresses the givens of death, freedom, isolation, and meaninglessness, using phenomenology, authentic encounter, and logotherapy; its evidence highlights include meaning-centered psychotherapy for advanced cancer (including a Chinese-language RCT) and dignity therapy, along with robust relational common factors, though it is less manualized than CBT; in China it arrived through translation and now grows via Wang Xuefu's Zhimian therapy, psycho-oncology, and end-of-life care.\n\n> Disclaimer: This overview is educational and does not replace professional training or individualized clinical judgment.",
  bodyZh: "# 存在主义疗法\n\n## 第一部分：西方（国际）存在主义疗法\n\n## 一、历史脉络与起源\n\n存在主义疗法立足存在哲学，追问心理困扰之下的人性问题：什么让生活有意义？自由意味着什么？我们如何面对死亡、孤独与责任？它不把焦虑当作要消除的疾病，而把它视为可能指向更真实生活的信号。\n\n%%TIMELINE%%\n\n### 哲学根源（思想先行者）\n\n存在主义治疗的思想土壤在欧洲哲学。这些哲学家不都是治疗师，但为存在主义治疗提供了概念与立场：\n\n- **克尔凯郭尔（Søren Kierkegaard，1813–1855）**：被称为“存在主义之父”。把“焦虑”理解为自由的可能性带来的眩晕，提出“主观性即真理”与“成为自己”的自我任务。\n- **尼采（Friedrich Nietzsche，1844–1900）**：“上帝已死”之后人必须自己创造价值；“爱命运”（amor fati）与永恒轮回为在虚无中确立意义奠基。\n- **胡塞尔（Edmund Husserl，1859–1938）**：现象学方法——悬置（epoché/括弧）与“回到事物本身”，是存在主义治疗师描述活经验的方法论工具箱。\n- **海德格尔（Martin Heidegger，1889–1976）**：《存在与时间》（1927）提出“此在”（Dasein）、“在世存在”与“向死存在”，是此在分析、本真性概念的直接来源。\n- **雅思贝尔斯（Karl Jaspers，1883–1969）**：哲学家兼精神科医生（《普通精神病理学》，1913），提出“边界处境”（Grenzsituationen）——死亡、苦难、斗争、罪责等把人逼向本真选择。\n- **布伯（Martin Buber，1878–1965）**：“我—你”（I–Thou）相遇关系，是存在主义治疗中真实相遇观念的核心。\n- **萨特（Jean-Paul Sartre，1905–1980）**：“存在先于本质”、人的绝对自由与“自欺”（bad faith）。\n- **梅洛-庞蒂（Maurice Merleau-Ponty，1908–1961）**：具身性（lived body）——身体不是机器而是经验的处所。\n\n### 几条主线概述\n\n**存在主义心理学（梅）。** 罗洛·梅把存在主义带入美国心理学，以自由、选择、焦虑与“成为自己”的勇气来理解人生。\n\n**此在分析（宾斯万格、博斯）。** 借海德格尔的“在世界中存在”，此在分析把精神病理理解为一个人世界关系结构的失调，而非“内心”里的疾病。\n\n**意义治疗（弗兰克尔）。** 弗兰克尔以“意义意志”为核心。即便在不可改变的苦难中，人仍保有选择态度的自由；治疗的任务是帮助人找到意义。\n\n**存在主义心理治疗（亚隆）。** 亚隆系统化四大“边界处境”——死亡、自由与责任、孤独、无意义，并把治疗关系变成真实的人与人相遇。\n\n**当代脉络。** 朗格勒的个人存在分析（含“四大基本动机”模型）、范·德·意珍的英国存在主义学派、心理肿瘤学中的意义中心心理疗法（布赖特巴特）、临终关怀中的尊严疗法（乔奇诺夫），以及王普（Paul T. P. Wong）的意义疗法与存在主义积极心理学，延续并扩展了这一传统。\n\n## 二、核心人物与贡献\n\n存在主义疗法由一批拒绝把人还原为驱力或行为、转而直面人之边界与可能的人塑造。\n\n%%FIGURES%%\n\n## 三、核心原理与作用机制\n\n### 存在议题（亚隆）\n\n死亡、自由与责任、孤独、无意义。对这些的觉察产生“存在性焦虑”，可以被面对并用于成长，而非回避。\n\n### 焦虑作为成长信号\n\n焦虑不只是病理；它是人感受到选择之可能与局限之真实的在场意识。任务是承受它并加以运用。\n\n### 自由、责任与真实性\n\n我们有选择的自由，因此也对自己的生活负有责任。逃避这种自由（非真实性）会带来内疚或自欺；治疗邀请来访者为自己的选择负责。\n\n### 意义与意义意志\n\n意义治疗认为“意义意志”是第一位的。意义可以从创造性、体验性与态度性价值中获得——在无法避免的苦难中，则从人如何面对它（悲剧性的乐观）中获得。\n\n### 在世界中存在\n\n此在分析把人始终看作与一个世界（自我、他人、环境、时间）相关联；痛苦反映的是一种被收窄或阻塞的世界关系。\n\n### 四大基本动机（朗格勒）\n\n朗格勒把“丰盈存在”的四个前提整理为四个基本动机，各自对应一种“不”与一次肯定：\n\n1. **我能存在吗？**——在世界中获得立足之地（接纳“我在”，对抗“我不在”的恐惧）；\n2. **我活着好吗？**——在关系与时间中获得价值感（亲近生命，对抗痛苦与厌倦）；\n3. **我可以做自己吗？**——成为真实的自己、被他人看见（对抗自弃与羞耻）；\n4. **这一切为了什么？**——在更大的意义脉络中生活（对抗绝望与无意义）。\n\n当代存在分析据此在现象学对话中逐层展开，弥补了早期意义治疗偏重“意义”而较少着墨“感受与关系”的一面。\n\n> **核心要点**：存在主义疗法问“你如何面对生命的边界？”它围绕死亡、自由、孤独与无意义四大议题工作，把焦虑视为成长信号，并把人本治疗师之间真实的人相“相遇”作为改变媒介。\n\n## 四、主要技术和方法\n\n### 现象学探索\n\n治疗师悬置预设，帮助来访者精确描述其活生生的经验——“此刻，它像什么样”——而不是去解释。\n\n### 探索存在议题\n\n关于死亡、自由、孤独与意义的开放对话；考察来访者如何回避或拥抱这些。问题可能直接，但都伴随在场与关怀。\n\n### 意义治疗 / 意义中心对话\n\n关于价值与意义的苏格拉底式对话；点名来访者的自由与责任；面对“悲剧三要素”（痛苦、咎责、死亡）并在其中寻找意义。\n\n### 相遇与在场\n\n“我—你”关系——治疗师是一个真实、在场的人，而不是一块白屏；关系本身就是工具。\n\n### 存在主义团体\n\n在团体中探讨议题；希望、普遍性、人际学习与意义建构（亚隆的团体疗效因子）。\n\n| 类别 | 核心方法 | 主要目标 |\n| --- | --- | --- |\n| 现象学 | 描述活经验；悬置预设 | 主观意义 |\n| 存在议题 | 对死亡、自由、孤独、意义的对话 | 存在性焦虑、回避 |\n| 意义治疗 | 意义对话、苏格拉底式、直面局限 | 意义意志 |\n| 相遇 | 我—你在场、真实 | 孤独、关系 |\n| 团体 | 存在团体疗效因子 | 普遍性、意义、支持 |\n\n> 最小示例：一位来访者说“什么都不重要了”。存在主义治疗师不是去纠正这个想法，而是陪着这份经验——探索失去了什么、还有什么仍然重要、自由留在哪里。意义不是被强加，而是在真实的相遇中被发现。\n\n## 五、循证验证与适应症\n\n- **意义中心心理疗法**（MCP）：布赖特巴特团队在纪念斯隆·凯特琳癌症中心开发并手册化，先导随机对照（2010）与两项大样本 RCT（团体版 MCGP，2015，N=253；个体版 IMCP，2018，N=325）显示，在晚期癌症中能提升意义感与灵性福祉、改善生活质量、降低抑郁与求死愿望；中文癌症患者的 MCGP 随机对照亦报道阳性结果——这是存在取向一个有力的当代循证点。\n- **尊严疗法**（Dignity Therapy）：乔奇诺夫（H. Chochinov）为终末期患者开发的短程干预，通过结构化的生命回顾对话生成“尊严记录”，随机对照显示能改善尊严感、减轻痛苦，是临终关怀中最接近存在取向的循证方法之一。\n- **疗愈关系与意义建构**是跨流派最稳定的共同因素。\n- **既有综述**：存在疗法常与人本主义一同研究；证据规模比 CBT 小、手册化程度低，多为质性或混合方法。\n- **亚隆团体治疗**：团体疗效因子（普遍性、希望植入、人际学习）有充分的描述性与过程研究支持；存在取向团体疗效的随机对照仍较少。\n- **批评与局限**：大型 RCT 较少；难以标准化、手册化；疗效较难测量；对严重急性议题单凭它可能不足。\n\n### 适应症分级（约）\n\n| 证据/契合度 | 适应症 |\n| --- | --- |\n| 契合良好 | 意义与目标危机、存在性焦虑、丧亲与哀伤、身份与价值、重大转向（灾难性病、退休、中年）、灵性与精神耗竭 |\n| 谨慎/辅助 | 抑郁、焦虑（可与结构化方法结合）；临终（MCP 为分阶段） |\n| 需谨慎 | 急性精神病、严重躁狂、高自杀风险需先危机与医学稳定；仅凭反思取向不足以应对 |\n\n## 六、临床应用与特殊人群\n\n- **意义与目标危机**；**存在性焦虑**；**丧亲与哀伤**；**身份、价值与灵性**。\n- **灾难性与终末期疾病**（心理肿瘤学中的意义中心心理疗法）；**安宁与临终关怀**。\n- **人生转折**——中年、退休、职业与身份变化；**意义耗竭与倦怠**。\n- **青少年与青年**（身份、自由、死亡意识）；**老年人**（意义、临终）。\n- **团体治疗**（亚隆式存在—人际团体）；**培训与督导**（治疗师本人、直面局限）。\n\n## 七、培训认证与职业路径（国际）\n\n- **英国 / 欧陆**：英国存在分析学会（SEA）与 GLE——存在分析/意义治疗训练；学位制存在咨询课程（如心理治疗与咨询新学院）。\n- **意义治疗**：维克多·弗兰克尔学院；国际意义治疗学会。\n- **朗格勒的存在分析**：GLE 国际训练（个人存在分析）。\n- **共同点**：大量哲学与现象学研习、个人治疗与深度督导；多在咨询、学术或人本情境，而非精神科病房。\n- **职业场景**：个体执业、咨询中心、高校、安宁与临终、心理肿瘤、存在—人本团体工作。\n\n## 八、更多资讯来源（国际）\n\n**经典著作**：哲学根源——克尔凯郭尔《恐惧与战栗》《致死的疾病》、海德格尔《存在与时间》、雅思贝尔斯《普通精神病理学》、萨特《存在与虚无》、布伯《我与你》；治疗著作——梅《焦虑的意义》《存在》《爱与意志》；弗兰克尔《活出生命的意义》《医生与灵魂》《追求意义的意志》；亚隆《存在主义心理治疗》《直视骄阳：征服死亡恐惧》；宾斯万格《在世界中存在》；博斯《医学与心理学的存在基础》；范·德·意珍《存在主义心理治疗与咨询》；朗格勒《存在分析》；布赖特巴特《癌症的意义中心心理疗法》；乔奇诺夫《尊严疗法：临终关怀的终极之善》。\n\n**期刊**：Existential Analysis；Journal of Humanistic Psychology；The Humanistic Psychologist；Review of Existential Psychology and Psychiatry；Journal of Phenomenological Psychology。\n\n**组织**：英国存在分析学会（SEA）；GLE 国际（意义治疗与存在分析学会）；维克多·弗兰克尔学院；心理治疗与咨询新学院；APA 第 32 分会。\n\n**证据库**：PubMed、Cochrane、APA Division 12、NICE 指南。\n\n---\n\n## 第二部分：中国的发展\n\n存在思想进入中国主要经由译介与学术交流，并在咨询实践、肿瘤心理与临终关怀中生长，而非作为一个庞大建制化的培训门派。\n\n### 一、译介与接受（1980s–1990s）\n\n改革开放后，梅、弗兰克尔、亚隆等著作被译介；意义、自由、死亡等存在议题进入咨询教育与“生死”人文讨论。\n\n### 二、存在主义心理治疗的开创（1990s–2000s）\n\n南京学者王学富系统引进西方存在主义心理治疗，2002 年创办南京直面心理咨询研究所，发展出结合中国文化的“直面心理学/直面疗法”，被视为中国存在心理治疗的重要开创；2013 年获美国心理学会“夏洛蒂和卡尔·布勒奖”。\n\n### 三、走向咨询与团体（2000s 起）\n\n存在议题进入咨询员培训；存在主义取向团体工作逐步出现（如亚隆式存在—人际团体与相关学会）。\n\n### 四、临终与医学人文中的意义\n\n医学人文学者（如北京大学王一方）推动生死哲学、安宁疗护与尊严、意义叙事，呼应存在议题。\n\n%%TIMELINE_CHINA%%\n\n### 五、中国代表与关键人物\n\n%%FIGURES_CHINA%%\n\n### 六、中国本土循证与研究\n\n中国关于存在主义疗法的实证研究有限，以质性研究、概念探讨、以及在肿瘤心理与安宁疗护中的临床应用为主，随机对照远少于 CBT。值得注意的亮点包括：意义中心团体心理疗法（MCGP）在中文癌症患者中的随机对照研究（显示提升生命意义、减轻复发恐惧），以及存在主义团体的本土实践。\n\n### 七、本土化与挑战\n\n死亡与意义议题在中国语境中可能显得抽象或沉重，且常被回避；追求方案与务实期待的人可能更偏好结构化方法。从业者通过把存在工作嵌入具体生活问题，并在必要时结合创伤知情或结构化方法来做调整。临床胜任与危机判断仍然重要。\n\n### 八、更多中国资讯来源\n\n**书籍**：弗兰克尔《活出生命的意义》、亚隆《存在主义心理治疗》等译本；王学富关于直面疗法与存在咨询的著作；王一方关于死亡与医学人文的著作。**组织与网站**：南京直面心理咨询研究所；存在—人本咨询培训；高校心理中心。**数据库**：中国知网（CNKI）。\n\n> 一句话总结：存在主义疗法是一种哲学性、以意义为中心的取向，可视为人本主义“第三势力”的哲学性一翼；它直面死亡、自由、孤独与无意义，运用现象学、真实相遇与意义治疗；其循证亮点包括晚期癌症的意义中心心理疗法（含中文癌症患者 RCT）与尊严疗法，以及稳健的疗愈关系共同因素，但手册化程度低于 CBT；在中国，它经由译介而来，现由王学富的直面疗法、肿瘤心理与临终关怀推动生长。\n\n> 声明：本文为科普性概括，不替代专业培训或个体的临床判断。",
  timelineChina: [
    {
      year: "1980s–1990s",
      titleZh: "译介与观念引入",
      titleEn: "Translation & Reception",
      bodyZh: "改革开放后，梅、弗兰克尔、亚隆等著作被译介；意义、自由、死亡等存在议题进入咨询教育与生死人文讨论。",
      bodyEn: "After reform, works by May, Frankl, and Yalom were translated; themes of meaning, freedom, and death entered counseling education and life-and-death humanities discourse.",
    },
    {
      year: "1990s–2000s",
      titleZh: "王学富引入存在主义心理治疗",
      titleEn: "Wang Xuefu Introduces Existential Therapy",
      bodyZh: "南京学者王学富系统引进西方存在主义心理治疗，2002 年创办南京直面心理咨询研究所，发展出结合中国文化的“直面疗法”，2013 年获美国心理学会“夏洛蒂和卡尔·布勒奖”，被视为中国存在心理治疗的重要开创。",
      bodyEn: "Wang Xuefu of Nanjing systematically introduced Western existential psychotherapy, founded the Nanjing Zhimian (Direct-Facing) Counseling Institute in 2002, and developed \"Zhimian Therapy\" in Chinese cultural contexts; he received the APA Charlotte and Karl Bühler Award in 2013 — a major pioneer of existential psychotherapy in China.",
    },
    {
      year: "2000s",
      titleZh: "走向咨询与团体",
      titleEn: "Into Counseling & Groups",
      bodyZh: "存在议题进入咨询员培训；存在主义取向团体工作逐步出现，如亚隆式存在—人际团体与相关学会。",
      bodyEn: "Existential themes entered counselor training; existential group work gradually emerged, such as Yalom-style existential-interpersonal groups and related societies.",
    },
    {
      year: "2000s–2020s",
      titleZh: "临终与医学人文中的意义",
      titleEn: "Meaning in End-of-Life & Medicine",
      bodyZh: "医学人文学者（如北京大学王一方）推动生死哲学、安宁疗护与尊严、意义叙事，呼应存在议题。",
      bodyEn: "Medical humanists (e.g., Wang Yifang of Peking University) have promoted life-and-death philosophy, palliative care, and narratives of dignity and meaning, echoing existential themes in Chinese medicine.",
    }
  ],
  figuresChina: [
    {
      nameZh: "王学富",
      nameEn: "Wang Xuefu",
      years: "b. 1960s",
      titleZh: "中国存在心理治疗先行者",
      titleEn: "Pioneer of Existential Therapy in China",
      bioZh: "南京直面心理咨询研究所所长，南京大学文学博士，并受训于美国安多弗·牛顿学院等存在—人本主义方向。2002 年创办南京直面心理咨询研究所，系统引进西方存在主义心理治疗，创导结合中国文化的“直面心理学/直面疗法”，被业界誉为“中国存在心理治疗第一人”。主编存在心理治疗译丛（安徽人民出版社），译有《在生命的最深处与人相遇：欧文·亚隆思想传记》，2013 年获美国心理学会“夏洛蒂和卡尔·布勒奖”，并参与编写范·德·意珍等主编的《世界存在治疗手册》；著有《受伤的人》《成为你自己》《直面者说》等。",
      bioEn: "Director of the Nanjing Zhimian (Direct-Facing) Counseling Institute; holds a PhD in literature from Nanjing University and trained in the existential-humanistic direction (e.g., at Andover Newton Theological School). He founded the institute in 2002, systematically introduced Western existential psychotherapy, created the Chinese \"Zhimian Psychology/Zhimian Therapy,\" edited the existential psychotherapy translation series (Anhui People's Publishing), translated an intellectual biography of Irvin Yalom, received the APA Charlotte and Karl Bühler Award in 2013, and co-contributed to van Deurzen's World Handbook of Existential Therapy; author of The Injured Person and Becoming Yourself.",
    },
    {
      nameZh: "李仑",
      nameEn: "Li Lun",
      years: "b. 1970s",
      titleZh: "存在主义团体会通",
      titleEn: "Existential Group Work",
      bioZh: "存在取向心理咨询研究院与亚洲存在主义团体学会创立者，中国团体分析学院荣誉主席，经英国塔维斯托克人类研究所认证/培训的团体动力师、顾问；存在主义取向个体及团体咨询师、督导，推动存在主义团体工作，并翻译范·德·意珍《存在主义心理治疗的邀请》等存在主义经典。",
      bioEn: "Founder of an existential-oriented psychotherapy institute and the Asian existential group society, honorary chair of the Chinese Institute of Group Analysis, and a group dynamics practitioner certified/trained by the Tavistock; an existential individual and group therapist and supervisor who advances existential group work and has translated van Deurzen's Invitation to Existential Psychotherapy into Chinese.",
    },
    {
      nameZh: "王一方",
      nameEn: "Wang Yifang",
      years: "b. 1958",
      titleZh: "医学人文学者、生死哲学",
      titleEn: "Medical Humanist & Life-Death Philosophy",
      bioZh: "北京大学医学人文学院教授，医学硕士。主要研究医学哲学、生死哲学与安宁疗护、叙事医学，主张以生命哲学回应临终尊严与意义问题，与存在主义议题相通；著有《医学人文十五讲》《临床医学人文纲要》《医生不曾告诉你的生命哲学课》（入选“文津图书”）等。",
      bioEn: "Professor at Peking University's School of Medical Humanities (M.Med.), researching philosophy of medicine, philosophy of life-and-death, palliative care, and narrative medicine, arguing for a life philosophy to address dignity and meaning at the end of life — closely related to existential themes. Author of Fifteen Lectures on Medical Humanities, Clinical Medical Humanities, and a life-philosophy course-book selected for the \"Wenjin Book Award.\"",
    }
  ],
  fitClient: {
    zh: `#### 一次会谈像什么

存在取向的会谈相对开放，常从你此刻的体验出发。治疗师会用问题陪你一起探究，而不是急着给答案或技术：你害怕什么？什么对你真正重要？你能掌控什么？会谈有时会触及死亡、孤独、自由与责任、无意义等较“重”的议题，也常有安静与反思。治疗师更像一位真实、在场的同行者，而非一位“修复者”。

#### 咨询的基本设置

- **疗程**：多为每周一次、每次约 45–60 分钟，且通常为开放式或中长程；意义中心心理疗法（如晚期癌症）则常为结构化、限时（如 8 周次）。
- **你可能将面对**：一些较大而根本的提问可能让人短暂不安；议题可能抽象或沉重；治疗师可能不会给你很多具体“技术”。改变往往来自你对生活意义、选择与处境的重新理解，因此更内隐、更慢。
- **注意事项**：急性精神病、严重躁狂、高自杀风险需先做危机与医学处理；如果你处于严重危机或需要即时具体方案，纯反思性存在探讨可能不够；若会谈陷入“空谈而无联结”，也要评估是否缺少结构或专业边界。

#### 来访者适配自测

下面没有标准答案，只是帮你想清楚自己期待什么样的咨询。对照自己的偏好勾一下即可：

- 我更想要：搞清意义、价值与方向，活得真实 ／ 快速缓解症状、拿到方法
- 我更习惯：开放思辨、直面根本问题 ／ 有结构、有步骤、有技术
- 我更希望治疗师：真实、在场，陪我一起想 ／ 像教练/老师一样给工具
- 我更愿意：谈死亡、自由、孤独与意义 ／ 谈具体怎么处理症状
- 我这次的投入：是短程、限时 ／ 可以长期、持续
- 我更想谈：我的处境与选择 ／ 症状怎么减轻

把这些答案带给咨询师，会有助于判断这个流派是否契合你，也更容易建立好的工作联盟。`,
    en: `#### What a Session Feels Like

Existential sessions are relatively open, often starting from your present experience. The therapist asks questions to explore with you rather than rushing to answers or techniques: What do you fear? What truly matters to you? What can you control? Sessions sometimes touch heavier themes — death, isolation, freedom and responsibility, meaninglessness — and often include silence and reflection. The therapist is more a real, present fellow traveller than a "fixer."

#### Basic Setup of the Therapy

- **Duration**: usually weekly, about 45–60 minutes, and typically open-ended or medium-to-long-term; meaning-centered psychotherapy (e.g., in advanced cancer) is often structured and time-limited (e.g., around eight weekly sessions).
- **What you may face**: some large, fundamental questions can be briefly unsettling; themes may feel abstract or heavy; the therapist may give few concrete "techniques." Change comes from re-understanding meaning, choice, and situation, so it is often subtler and slower.
- **Cautions**: acute psychosis, severe mania, and high suicide risk require crisis and medical management first; if you are in acute crisis or need immediate practical plans, a purely reflective existential approach alone may not be enough; if sessions become "abstract talk with no connection," ask whether structure or professional boundaries are missing.

#### Client Fit Self-Check

There are no right answers — this is just to help you clarify what you want from therapy. Tick the side that sounds more like you:

- I mainly want to: clarify meaning, values, and direction and live authentically ／ relieve symptoms quickly and get methods
- I am more used to: open inquiry and confronting fundamental questions ／ structure, steps, and techniques
- I would prefer the therapist: to be real and present, thinking with me ／ to be a coach or teacher who gives tools
- I would rather talk about: death, freedom, isolation, and meaning ／ how to handle specific symptoms
- My commitment now is: short-term and time-limited ／ can be long-term and ongoing
- I would rather talk about: my situation and choices ／ how to reduce symptoms

Bring these answers to your therapist; it will help both of you judge whether this orientation fits you and build a stronger working alliance.`,
  },
  fitPractitioner: {
    zh: `#### 性格适配

存在取向需要你对哲学与人性议题有真正的兴趣，能承受歧义、不确定与“没有标准答案”，并且愿意真实地、在场地与来访者相遇。如果你喜欢深度思辨、对死亡与意义议题不回避、享受长程而深刻的关系，你会很契合。若你更偏好结构、技术、可衡量目标与相对快速的实效，它可能会显得“太抽象”——两条路没有对错，匹配你的性格与工作方式就好。

#### 训练门槛与要求

一条严肃的存在路径通常要求：系统的存在主义/现象学训练、有督导的个案实践、常被要求的个人治疗与哲学阅读，以及持续督导。不同分支不同：英式存在分析（SEA）与学位课程、朗格勒的存在分析（GLE）、弗兰克尔意义治疗（Frankl Institute），多为专门机构、历时数年。整体比手册化 CBT 更长、更偏思辨与关系，也要求你自己不断面对生命议题。

#### 适用场景与就业方向

适合个体执业、心理咨询中心、高校、安宁疗护与临终关怀、肿瘤心理（意义中心心理疗法）、危机与意义重建、存在主义团体等。就业方向多为咨询机构、高校、个体执业、安宁与临终领域、心理教育；它相对更难手册化、更难规模化，但对重视生命议题与真实人际的从业者很有意义。`,
    en: `#### Personality Fit

Existential work requires genuine interest in philosophical and human questions, the capacity to tolerate ambiguity and "no single answer," and the willingness to meet clients authentically and present. If you enjoy deep inquiry, do not avoid death and meaning, and value long, profound relationships, this fits you. If you prefer structure, technique, measurable goals, and relatively quick results, it may feel "too abstract" — neither path is wrong; align it with your personality and preferred way of working.

#### Training Thresholds and Requirements

A serious existential path typically requires systematic existential/phenomenological training, supervised case practice, often personal therapy plus philosophical reading, and sustained supervision. Branches differ: British existential analysis (SEA) and degree programs, Längle's existential analysis (GLE), and Frankl's logotherapy (Frankl Institute), usually at specialized institutes over several years. Overall it is longer and more philosophical and relational than a manualized CBT course, and it asks you to keep confronting life issues yourself.

#### Applicable Settings and Career Directions

It fits private practice, counseling centers, universities, palliative and end-of-life care, psycho-oncology (meaning-centered psychotherapy), crisis and meaning reconstruction, and existential group work. Career directions are mostly counseling agencies, universities, private practice, hospice and end-of-life settings, and psychoeducation; it is harder to manualize or scale, but meaningful for those drawn to life's big questions and authentic connection.`,
  },
  category: `school`,
  school: `existential`,
  status: `published`,
  figures: [
    {
      nameZh: "罗洛·梅",
      nameEn: "Rollo May",
      years: "1909–1994",
      titleZh: "存在主义心理学奠基",
      titleEn: "Foundation of Existential Psychology",
      bioZh: "美国存在主义心理学家。著有《焦虑的意义》《爱与意志》《存在》（合编），把存在主义哲学带入临床，强调自由、选择、焦虑的成长意义与“成为自己”的勇气。",
      bioEn: "American existential psychologist who brought existential philosophy into the clinic through The Meaning of Anxiety, Love and Will, and Existence (co-edited), emphasizing freedom, choice, the growth potential of anxiety, and the courage to become oneself.",
    },
    {
      nameZh: "维克多·弗兰克尔",
      nameEn: "Viktor Frankl",
      years: "1905–1997",
      titleZh: "意义治疗（logotherapy）",
      titleEn: "Logotherapy",
      bioZh: "奥地利精神病学家。创立以“意义意志”为核心的意义治疗，提出即便在不可改变的苦难中也保有选择态度的自由（悲剧性的乐观），《活出生命的意义》广为流传。",
      bioEn: "Austrian psychiatrist who founded logotherapy around the \"will to meaning,\" arguing that even in unchangeable suffering we retain freedom of attitude (tragic optimism); his Man's Search for Meaning is widely read.",
    },
    {
      nameZh: "路德维希·宾斯万格",
      nameEn: "Ludwig Binswanger",
      years: "1881–1966",
      titleZh: "此在分析（Daseinsanalysis）",
      titleEn: "Daseinsanalysis",
      bioZh: "瑞士精神病学家。把海德格尔的“此在”引入精神病理，提出“此在分析”，把人理解为“在世界中存在”，视精神病理为世界关系结构的失调。",
      bioEn: "Swiss psychiatrist who applied Heidegger's \"Dasein\" to psychopathology, founding Daseinsanalysis — seeing the person as being-in-the-world and psychopathology as a disturbance of the world-relationship.",
    },
    {
      nameZh: "梅达德·博斯",
      nameEn: "Medard Boss",
      years: "1903–1990",
      titleZh: "此在分析合作发展",
      titleEn: "Daseinsanalysis Co-Developer",
      bioZh: "瑞士精神病学家。在宾斯万格开创此在分析之后，与海德格尔直接合作发展出自己的“此在分析”流派；著有《医学与心理学的存在基础》，主张摒弃疾病式的对象化理解，回到人的在世存在。",
      bioEn: "Swiss psychiatrist who, after Binswanger founded Daseinsanalysis, developed his own Daseinsanalytic school in direct collaboration with Heidegger; author of Existential Foundations of Medicine and Psychology, advocating a return to the person's being-in-the-world rather than objectifying \"disease.\"",
    },
    {
      nameZh: "欧文·亚隆",
      nameEn: "Irvin Yalom",
      years: "b. 1931",
      titleZh: "存在主义心理治疗",
      titleEn: "Existential Psychotherapy",
      bioZh: "美国精神科医师与团体治疗大师。著《存在主义心理治疗》，系统处理死亡、自由、孤独与无意义四大存在议题，并推动存在—人际取向的个体与团体治疗。",
      bioEn: "American psychiatrist and group-therapy master whose Existential Psychotherapy systematically addresses the four givens — death, freedom, isolation, and meaninglessness — and advanced existential-interpersonal individual and group work.",
    },
    {
      nameZh: "阿尔弗里德·朗格勒",
      nameEn: "Alfried Längle",
      years: "b. 1951",
      titleZh: "个人存在分析",
      titleEn: "Personal Existential Analysis",
      bioZh: "奥地利心理学家，在弗兰克尔基础上发展出“个人存在分析”（存在分析），强调对世界的接纳、价值、责任与意义，是当代存在分析与意义治疗的重要推动者。",
      bioEn: "Austrian psychologist who developed \"personal existential analysis\" from Frankl's work, emphasizing openness to the world, values, responsibility, and meaning — a key contemporary figure in existential analysis and logotherapy.",
    },
    {
      nameZh: "艾美·范·德·意珍",
      nameEn: "Emmy van Deurzen",
      years: "b. 1951",
      titleZh: "英国存在主义治疗职业化",
      titleEn: "Professionalizing Existential Therapy in the UK",
      bioZh: "哲学家与存在主义治疗师。创立英国存在分析学会（SEA）与心理治疗新学院，提出探讨物理、社会、个人、精神“四大生活维度”，推动存在主义治疗在英国职业化。",
      bioEn: "Philosopher and existential therapist who founded the Society for Existential Analysis (SEA) and the New School of Psychotherapy and Counselling, proposing four \"life dimensions\" (physical, social, personal, spiritual) and professionalizing existential therapy in the UK.",
    },
    {
      nameZh: "威廉·布赖特巴特",
      nameEn: "William Breitbart",
      years: "b. 1951",
      titleZh: "意义中心心理疗法（MCP）",
      titleEn: "Meaning-Centered Psychotherapy",
      bioZh: "美国精神科医师与心理肿瘤专家，曾任纪念斯隆·凯特琳癌症中心精神病学服务主任。在弗兰克尔意义治疗基础上发展“意义中心心理疗法”用于晚期癌症，发表 2010 年试点随机对照与 2015/2018 年大样本随机对照研究，为存在取向提供较强实证支持。",
      bioEn: "American psychiatrist and psycho-oncologist who served as Chief of the Psychiatry Service at Memorial Sloan Kettering Cancer Center. He built Meaning-Centered Psychotherapy (MCP) from Frankl's logotherapy for advanced cancer, publishing a 2010 pilot RCT and larger 2015/2018 randomized trials that offer strong empirical support for an existential approach.",
    }
  ],
};
