import type { ExamGuide } from "@/config/types";

/**
 * AWS Solutions Architect - Professional (SAP-C03) exam guide. Exam facts come from
 * the verified `exam` record in src/config/certifications.ts and the aws-sap-c02 tracker entry.
 */
export const awsSapC03Guide: ExamGuide = {
  slug: "aws-sap-c03",
  summary:
    "SAP-C03 has been the AWS Certified Solutions Architect - Professional exam since 17 November 2026, replacing SAP-C02. It has 75 questions (65 scored, 10 unscored) in 180 minutes, and you pass with a scaled score of 720. Architecture design built for the cloud and security, compliance and governance are the largest domains at 25% each.",
  whoFor: [
    "Experienced AWS architects who design complex, multi-account solutions",
    "SAA-C03 holders moving to the professional level",
    "Candidates who prepared for SAP-C02 and now need to switch",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "SAP-C03 has 75 questions, 65 scored and 10 unscored, in 180 minutes. Questions are multiple choice or multiple response, and you need a scaled score of 720 out of 1,000. You can test at a Pearson VUE centre or online with a proctor.",
        "The last day for SAP-C02 was 16 November 2026, so every exam now uses SAP-C03. There are no formal prerequisites; AWS recommends two or more years of experience designing and implementing solutions on AWS.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The domains are Architecture Design and Implementation Built for the Cloud (25%), Security, Compliance, and Governance (25%), Operational Excellence and Automation (20%), Cost-Optimized Architecture Design (15%) and Resilience, Migration, and Business Continuity (15%).",
        "Questions are long scenarios with several plausible designs. Read for the deciding constraint (cost, operational effort, recovery time, compliance) and eliminate options that break it. Stamina matters: 180 minutes of dense reading is demanding.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the SAP-C03 exam guide", body: "Use the five domains and AWS's SAP-C02 vs SAP-C03 comparison to update older notes." },
        { title: "Think in multi-account terms", body: "Practise designs with AWS Organizations, centralised security, networking across accounts and governance controls." },
        { title: "Compare migration and recovery options", body: "For each scenario, know which migration path and which recovery strategy fits the stated time and cost limits." },
        { title: "Train reading stamina", body: "Answer full 75-question practice exams in 180 minutes to get used to the length of the scenarios." },
        { title: "Review every option", body: "Read why each wrong answer is wrong; professional questions often differ by one detail." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using SAP-C02 material without checking the new domain structure.",
        "Picking the most sophisticated design when a simpler one meets all requirements.",
        "Running out of time because of long scenarios.",
      ],
    },
  ],
  faq: [
    { question: "When did SAP-C03 replace SAP-C02?", answer: "On 17 November 2026. The last day to take SAP-C02 was 16 November 2026." },
    { question: "How many questions are on SAP-C03?", answer: "75 questions: 65 scored and 10 unscored." },
    { question: "How long is the exam and what is the passing score?", answer: "180 minutes. You need a scaled score of 720 on a scale of 100 to 1,000." },
    {
      question: "What are the SAP-C03 domains?",
      answer:
        "Architecture Design and Implementation Built for the Cloud 25%, Security, Compliance, and Governance 25%, Operational Excellence and Automation 20%, Cost-Optimized Architecture Design 15%, Resilience, Migration, and Business Continuity 15%.",
    },
    {
      question: "Are CertRamp's SAP-C03 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS SAP-C03 Exam Guide 2026: Domains, Score & Study Plan",
    description:
      "Prepare for AWS Solutions Architect Professional SAP-C03: 75 questions in 180 minutes, 720 to pass, the five new domains with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
