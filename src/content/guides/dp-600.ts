import type { ExamGuide } from "@/config/types";

/**
 * DP-600 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const dp600Guide: ExamGuide = {
  slug: "dp-600",
  summary:
    "DP-600 (Implementing Analytics Solutions Using Microsoft Fabric) leads to the Microsoft Certified: Fabric Analytics Engineer Associate certification. It tests whether you can secure and maintain Fabric analytics assets, prepare data in lakehouses, warehouses and eventhouses, and build and optimise semantic models. The exam takes 100 minutes, you need 700 points to pass, and the skills outline was last updated on 19 October 2026.",
  whoFor: [
    "Analytics engineers and BI developers who build lakehouses, warehouses and semantic models in Microsoft Fabric",
    "Power BI developers moving to enterprise-scale models with Direct Lake, deployment pipelines and version control",
    "Data engineers and analysts who query data with SQL, KQL and DAX",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What DP-600 actually tests",
      paragraphs: [
        "DP-600 has three skill areas. Preparing data carries the most weight (45–50%): getting data, transforming it into a star schema and querying it with the visual query editor, SQL, KQL and DAX. Maintaining a data analytics solution (security, governance and the development lifecycle) and implementing and managing semantic models are each worth 25–30%.",
        "Expect scenario questions that describe a team, a data source and a requirement, and ask for the right Fabric item, setting or query. Typical decisions: lakehouse, warehouse or eventhouse; workspace role or item permission; which deployment rule; which storage mode; Direct Lake on OneLake or on the SQL analytics endpoint; which DAX pattern performs better.",
      ],
    },
    {
      id: "october-2026-update",
      heading: "What the 19 October 2026 update changed",
      paragraphs: [
        "Microsoft classified the October 2026 change as minor and limited it to \"Query and analyze data\". Microsoft does not detail the change; the area currently lists four skills: selecting, filtering and aggregating data by using the visual query editor, SQL, KQL and DAX. All other areas are unchanged.",
        "The wider outline reflects current Fabric features: discovering data in the OneLake catalog and Real-Time hub, OneLake integration for eventhouses and semantic models, Direct Lake fallback and refresh behaviour, the choice between Direct Lake on OneLake and on the SQL analytics endpoint, and Power BI projects (.pbip) under version control. Translated versions of the exam are updated about eight weeks after the English version.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official DP-600 skills list and mark it as known, unsure or new. Preparing data alone is up to half of the exam, so weight your time accordingly.",
        },
        {
          title: "Get a Fabric workspace",
          body: "Use a Fabric trial capacity or a capacity at work. Create a lakehouse, a warehouse and an eventhouse, load the same small dataset into each, and notice what you can and cannot do with T-SQL, Spark and KQL in each item.",
        },
        {
          title: "Practise the four query languages",
          body: "Write the same filter-and-aggregate question in the visual query editor, SQL, KQL and DAX. Reading queries quickly and spotting the broken one is a core exam skill.",
        },
        {
          title: "Build and tune a semantic model",
          body: "Build a star schema model, add relationships including a many-to-many with a bridge table, a calculation group and incremental refresh. Then switch a model to Direct Lake and test what happens with a SQL view.",
        },
        {
          title: "Set up the lifecycle",
          body: "Connect a workspace to Git, save a report as a .pbip project, create a deployment pipeline with rules, and apply sensitivity labels and endorsement. These are easy marks if you have done them once.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams in 100 minutes, read every explanation, and use Microsoft's free practice assessment. Book when your results are stable, and plan the free annual renewal assessment.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Treating DP-600 as a Power BI exam. Semantic models are only one of three areas; preparing data in lakehouses, warehouses and eventhouses carries more weight.",
        "Assuming the lakehouse SQL analytics endpoint can write data. It is read-only for T-SQL; use a warehouse or Spark for writes.",
        "Mixing up Direct Lake variants. Direct Lake on the SQL analytics endpoint can fall back to DirectQuery; Direct Lake on OneLake cannot.",
        "Confusing access layers. Workspace roles, item permissions, row-, column- and object-level security and sensitivity labels each solve a different problem.",
        "Learning only one query language. The outline asks for SQL, KQL and DAX, plus the visual query editor.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the DP-600 exam and what is the passing score?",
      answer:
        "You have 100 minutes. Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for DP-600; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "How do I renew the Fabric Analytics Engineer Associate certification?",
      answer:
        "The certification is valid for 12 months. You renew it for free by passing an online assessment on Microsoft Learn during the six-month renewal window, before the certification expires.",
    },
    {
      question: "Which skills changed on 19 October 2026?",
      answer:
        "Microsoft lists only a minor change in \"Query and analyze data\", which covers selecting, filtering and aggregating data by using the visual query editor, SQL, KQL and DAX. All other areas are unchanged.",
    },
    {
      question: "In which languages is DP-600 available?",
      answer:
        "English, Japanese, Chinese (Simplified), German, French, Spanish and Portuguese (Brazil). If the exam is not available in your preferred language, you can request an additional 30 minutes.",
    },
    {
      question: "Are CertRamp's DP-600 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "DP-600 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "DP-600 guide for the skills measured as of 19 Oct 2026: 100 minutes, pass mark 700, Fabric lakehouses, warehouses, SQL, KQL, DAX and Direct Lake.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
