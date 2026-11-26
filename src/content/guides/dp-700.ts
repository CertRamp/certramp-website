import type { ExamGuide } from "@/config/types";

/**
 * Microsoft DP-700 exam guide. Exam facts come from the verified `exam` record
 * in src/config/certifications.ts.
 */
export const dp700Guide: ExamGuide = {
  slug: "dp-700",
  summary:
    "DP-700: Implementing Data Engineering Solutions Using Microsoft Fabric is the exam for the Fabric Data Engineer Associate certification. It lasts 100 minutes and you pass with 700 or more. Its three skills areas carry equal weight, 30–35% each.",
  whoFor: [
    "Data engineers who build pipelines and lakehouses in Microsoft Fabric",
    "Engineers moving from Azure Synapse or Data Factory to Fabric",
    "Analytics engineers who want to prove Fabric data engineering skills",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: ["DP-700 lasts 100 minutes and you need a scaled score of 700 or more. Expect scenario-based questions about a Fabric workspace and its data."],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The three areas are equally weighted at 30–35%: implement and manage an analytics solution, ingest and transform data, and monitor and optimize an analytics solution. There is no small area you can skip.",
        "Know when to use each Fabric item (lakehouse, warehouse, pipelines, dataflows, notebooks, eventstreams) and how to secure, schedule, monitor and tune them. Many questions hinge on choosing the right tool for batch or streaming data.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the DP-700 study guide", body: "Use the skills measured on Microsoft Learn as your checklist." },
        { title: "Work in a Fabric trial", body: "Build a lakehouse, load data with a pipeline and a notebook, and transform it with Spark and SQL." },
        { title: "Compare ingestion options", body: "For each scenario, know whether a pipeline, dataflow, notebook or eventstream fits best and why." },
        { title: "Practise monitoring and tuning", body: "Use the monitoring hub, check failed runs and optimise slow queries and Delta tables." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 100 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Neglecting the monitoring and optimisation area, which is a full third of the exam.",
        "Relying on Synapse or Data Factory knowledge without checking how Fabric differs.",
        "Studying without hands-on work in a Fabric workspace.",
      ],
    },
  ],
  faq: [
    { question: "How long is the DP-700 exam?", answer: "100 minutes." },
    { question: "What is the DP-700 passing score?", answer: "700 or greater (scaled score)." },
    {
      question: "What are the DP-700 skills areas?",
      answer: "Implement and manage an analytics solution, ingest and transform data, and monitor and optimize an analytics solution, each 30–35%.",
    },
    {
      question: "Are CertRamp's DP-700 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "DP-700 Exam Guide 2026: Fabric Data Engineer Skills & Plan",
    description:
      "Prepare for DP-700 Microsoft Fabric Data Engineer: 100 minutes, 700 to pass, three equally weighted skills areas and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
