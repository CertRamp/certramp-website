import type { ExamGuide } from "@/config/types";

/**
 * AWS Data Engineer - Associate (DEA-C01) exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts.
 */
export const awsDeaC01Guide: ExamGuide = {
  slug: "aws-dea-c01",
  summary:
    "The AWS Certified Data Engineer - Associate exam (DEA-C01) has 65 questions (50 scored, 15 unscored) in 130 minutes, and you pass with a scaled score of 720. Data Ingestion and Transformation is the largest domain at 34%.",
  whoFor: [
    "Data engineers who build pipelines and data stores on AWS",
    "Analytics and ETL developers moving to AWS",
    "Engineers responsible for data quality, security and governance",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "DEA-C01 has 65 questions, 50 scored and 15 unscored, in 130 minutes, as multiple choice or multiple response. You need 720 out of 1,000 and can test at a Pearson VUE centre or online, in English, Japanese, Korean or Simplified Chinese.",
        "There are no formal prerequisites. AWS recommends 2 to 3 years of data engineering experience and 1 to 2 years of hands-on AWS experience.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Data Ingestion and Transformation is 34%, Data Store Management 26%, Data Operations and Support 22% and Data Security and Governance 18%.",
        "Questions ask which service or design fits a data scenario: batch or streaming, structured or semi-structured, latency and cost limits. Know when to choose each storage format, catalogue and processing service, and how to secure and monitor pipelines.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the DEA-C01 exam guide", body: "Use the four domains in version 1.1 of the exam guide as your checklist." },
        { title: "Build a data pipeline", body: "Ingest data, transform it, store it in a data lake and query it, then add a streaming path." },
        { title: "Compare storage options", body: "For each data store, know the access pattern, cost model and scaling behaviour." },
        { title: "Practise operations and governance", body: "Monitor pipelines, handle failures, and apply encryption and fine-grained access control." },
        { title: "Take timed practice exams", body: "Answer full 65-question practice exams in 130 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Knowing services only by name without their limits and costs.",
        "Ignoring streaming scenarios.",
        "Skipping governance and security, nearly a fifth of the exam.",
      ],
    },
  ],
  faq: [
    { question: "How many questions are on DEA-C01?", answer: "65 questions: 50 scored and 15 unscored." },
    { question: "How long is the exam and what is the passing score?", answer: "130 minutes. You need a scaled score of 720 on a scale of 100 to 1,000." },
    {
      question: "What are the DEA-C01 domains?",
      answer: "Data Ingestion and Transformation 34%, Data Store Management 26%, Data Operations and Support 22%, Data Security and Governance 18%.",
    },
    {
      question: "Are CertRamp's DEA-C01 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS DEA-C01 Exam Guide 2026: Data Engineer Domains & Plan",
    description:
      "Prepare for AWS Data Engineer Associate (DEA-C01): 65 questions in 130 minutes, 720 to pass, the four domains with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
