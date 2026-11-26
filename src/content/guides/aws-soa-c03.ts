import type { ExamGuide } from "@/config/types";

/**
 * AWS CloudOps Engineer - Associate (SOA-C03) exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts.
 */
export const awsSoaC03Guide: ExamGuide = {
  slug: "aws-soa-c03",
  summary:
    "SOA-C03 is the exam for the AWS Certified CloudOps Engineer - Associate certification, in use since 30 September 2025. It has 65 questions (50 scored, 15 unscored) in 130 minutes, and you pass with a scaled score of 720. Three of its five domains carry 22% each.",
  whoFor: [
    "Cloud operations, SysOps and site reliability engineers working on AWS",
    "Administrators who deploy, monitor and troubleshoot AWS workloads",
    "Candidates who know the exam under its earlier SysOps Administrator name",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "SOA-C03 has 65 questions, 50 scored and 15 unscored, in 130 minutes, as multiple choice or multiple response. You need a scaled score of 720 out of 1,000 and can test at a Pearson VUE centre or online.",
        "There are no formal prerequisites. AWS recommends about a year of experience operating workloads on AWS plus at least a year in a related operations role.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Monitoring, logging, analysis, remediation and performance optimisation; reliability and business continuity; and deployment, provisioning and automation are 22% each. Networking and content delivery is 18% and security and compliance 16%.",
        "Questions are operational: something fails, alarms fire or costs rise, and you choose the fix with the least manual effort. Automation and monitoring services appear in almost every domain.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the SOA-C03 exam guide", body: "Use the five domains and task statements as your checklist." },
        { title: "Operate a real workload", body: "Deploy an application with infrastructure as code, add monitoring and alarms, and practise recovering from failures." },
        { title: "Automate remediation", body: "Practise responding to events automatically instead of by hand; the exam favours automated answers." },
        { title: "Cover networking", body: "VPC design, connectivity and content delivery make up almost a fifth of the exam." },
        { title: "Take timed practice exams", body: "Answer full 65-question practice exams in 130 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying SOA-C02 material for the current exam.",
        "Choosing manual fixes when an automated option exists.",
        "Neglecting networking troubleshooting.",
      ],
    },
  ],
  faq: [
    { question: "What is SOA-C03?", answer: "The exam for AWS Certified CloudOps Engineer - Associate, in use since 30 September 2025." },
    { question: "How many questions are on SOA-C03?", answer: "65 questions: 50 scored and 15 unscored." },
    { question: "How long is the exam and what is the passing score?", answer: "130 minutes. You need a scaled score of 720 on a scale of 100 to 1,000." },
    {
      question: "What are the SOA-C03 domains?",
      answer:
        "Monitoring, Logging, Analysis, Remediation, and Performance Optimization 22%; Reliability and Business Continuity 22%; Deployment, Provisioning, and Automation 22%; Security and Compliance 16%; Networking and Content Delivery 18%.",
    },
    {
      question: "Are CertRamp's SOA-C03 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS SOA-C03 CloudOps Engineer Exam Guide 2026",
    description:
      "Prepare for AWS CloudOps Engineer Associate (SOA-C03): 65 questions in 130 minutes, 720 to pass, the five domains with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
