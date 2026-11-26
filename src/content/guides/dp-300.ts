import type { ExamGuide } from "@/config/types";

/**
 * Microsoft DP-300 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const dp300Guide: ExamGuide = {
  slug: "dp-300",
  summary:
    "DP-300: Administering Microsoft Azure SQL Solutions is the exam for the Azure Database Administrator Associate certification. It lasts 100 minutes and you pass with 700 or more. Security, performance and high availability with disaster recovery are the largest areas at 20–25% each.",
  whoFor: [
    "Database administrators moving SQL Server workloads to Azure",
    "DBAs who run Azure SQL Database, Managed Instance or SQL Server on Azure VMs",
    "Data engineers who also administer databases",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: ["DP-300 lasts 100 minutes and needs 700 or more. The skills measured were updated on 27 October 2026."],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Implementing a secure environment, monitoring and optimising database resources, and HA/DR are 20–25% each. Planning data platform resources and automating tasks are 15–20% each.",
        "Know the differences between the Azure SQL deployment options, how to secure and audit them, how to find and fix performance problems, and which HA/DR option meets a given recovery target.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the DP-300 study guide", body: "Use the skills measured as of 27 October 2026 as your checklist." },
        { title: "Compare deployment options", body: "Build a table of Azure SQL Database, Managed Instance and SQL Server on VMs: features, limits and when to use each." },
        { title: "Practise performance tuning", body: "Use query plans, Query Store and monitoring tools on a test database." },
        { title: "Set up HA/DR", body: "Configure geo-replication or failover groups and test a failover." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 100 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Mixing up which features exist in which Azure SQL deployment option.",
        "Relying on on-premises SQL Server knowledge without checking Azure differences.",
        "Skipping automation, which is up to a fifth of the exam.",
      ],
    },
  ],
  faq: [
    { question: "How long is DP-300 and what is the passing score?", answer: "100 minutes. You need 700 or greater." },
    {
      question: "What are the DP-300 skills areas?",
      answer:
        "Plan and implement data platform resources 15–20%, implement a secure environment 20–25%, monitor, configure and optimise database resources 20–25%, configure and manage automation of tasks 15–20%, plan and configure HA/DR 20–25%.",
    },
    {
      question: "Are CertRamp's DP-300 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "DP-300 Exam Guide 2026: Azure SQL DBA Skills & Study Plan",
    description:
      "Prepare for DP-300 Azure Database Administrator: 100 minutes, 700 to pass, skills measured as of October 2026 with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
