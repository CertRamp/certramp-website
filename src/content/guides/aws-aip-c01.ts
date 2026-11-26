import type { ExamGuide } from "@/config/types";

/**
 * AWS Certified Generative AI Developer - Professional (AIP-C01) exam guide. Exam facts
 * come from the verified `exam` record in src/config/certifications.ts and the aws-aip-c01 tracker entry.
 */
export const awsAipC01Guide: ExamGuide = {
  slug: "aws-aip-c01",
  summary:
    "The AWS Certified Generative AI Developer - Professional exam (AIP-C01) has 75 questions (65 scored, 10 unscored) in 180 minutes, and you pass with a scaled score of 750. It left beta in March 2026. Foundation model integration, data management and compliance is the largest domain at 31%.",
  whoFor: [
    "Developers who build production generative AI applications on AWS",
    "ML and data engineers moving into GenAI application work",
    "AWS AI Practitioner holders ready for the professional level",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AIP-C01 has 75 questions, 65 scored and 10 unscored, in 180 minutes, as multiple choice or multiple response. You need 750 out of 1,000 and can test at a Pearson VUE centre or online, in English, Japanese, Korean or Simplified Chinese.",
        "The beta ended on 31 March 2026 and the standard exam was refreshed to cover AWS service changes such as Amazon Bedrock AgentCore. There are no formal prerequisites; AWS recommends two or more years of building production applications and a year of hands-on GenAI work.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Foundation model integration, data management and compliance is 31%, implementation and integration 26%, AI safety, security and governance 20%, operational efficiency and optimisation 12%, and testing, validation and troubleshooting 11%.",
        "Expect scenarios about choosing and integrating foundation models, retrieval-augmented generation, agents, guardrails, cost and latency optimisation, and evaluating output quality.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the AIP-C01 exam guide", body: "Use the five domains as your checklist and check it for recent service changes." },
        { title: "Build a RAG application", body: "Connect a foundation model to your own data, add guardrails and evaluate the answers." },
        { title: "Add an agent", body: "Build a simple agent that calls tools, and practise securing and monitoring it." },
        { title: "Optimise cost and latency", body: "Compare model choices, caching and prompt design for the same task." },
        { title: "Take timed practice exams", body: "Answer full 75-question practice exams in 180 minutes and aim clearly above 750." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using beta-era material that misses newer services.",
        "Focusing on prompt tricks instead of production architecture.",
        "Skipping safety, security and governance, a fifth of the exam.",
      ],
    },
  ],
  faq: [
    { question: "How many questions are on AIP-C01?", answer: "75 questions: 65 scored and 10 unscored." },
    { question: "How long is the exam and what is the passing score?", answer: "180 minutes. You need a scaled score of 750 on a scale of 100 to 1,000." },
    { question: "Is AIP-C01 still in beta?", answer: "No. The beta ended on 31 March 2026, and it is now a standard exam." },
    {
      question: "What are the AIP-C01 domains?",
      answer:
        "Foundation Model Integration, Data Management, and Compliance 31%; Implementation and Integration 26%; AI Safety, Security, and Governance 20%; Operational Efficiency and Optimization 12%; Testing, Validation, and Troubleshooting 11%.",
    },
    {
      question: "Are CertRamp's AIP-C01 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS AIP-C01 Exam Guide 2026: GenAI Developer Pro & Plan",
    description:
      "Prepare for AWS Generative AI Developer Professional (AIP-C01): 75 questions in 180 minutes, 750 to pass, the five domains with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
