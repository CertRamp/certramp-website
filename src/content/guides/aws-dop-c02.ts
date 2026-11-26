import type { ExamGuide } from "@/config/types";

/**
 * AWS DevOps Engineer - Professional (DOP-C02) exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts and the aws-dop-c02-korean tracker entry.
 */
export const awsDopC02Guide: ExamGuide = {
  slug: "aws-dop-c02",
  summary:
    "The AWS Certified DevOps Engineer - Professional exam (DOP-C02) has 75 questions (65 scored, 10 unscored) in 180 minutes, and you pass with a scaled score of 750, higher than most AWS exams. SDLC Automation is the largest of its six domains at 22%.",
  whoFor: [
    "DevOps and platform engineers who automate delivery and operations on AWS",
    "Holders of the AWS Developer or CloudOps associate certifications",
    "Engineers responsible for CI/CD, infrastructure as code and incident response",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "DOP-C02 has 75 questions, 65 scored and 10 unscored, in 180 minutes, as multiple choice or multiple response. You need a scaled score of 750 out of 1,000. You can test at a Pearson VUE centre or online, in English, Japanese, Simplified Chinese or Korean; the Korean version retires after 31 December 2026.",
        "There are no formal prerequisites. AWS recommends two or more years of experience provisioning, operating and managing AWS environments, plus software development and scripting experience.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "SDLC Automation is 22%, Configuration Management and IaC and Security and Compliance 17% each, Resilient Cloud Solutions and Monitoring and Logging 15% each, and Incident and Event Response 14%.",
        "Questions are long scenarios about pipelines, multi-account deployments, automated recovery and event-driven remediation. The best answer is usually the most automated, repeatable option with the least manual effort.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the DOP-C02 exam guide", body: "Use the six domains and task statements as your checklist." },
        { title: "Build a full pipeline", body: "Automate build, test and deployment with infrastructure as code, including a deployment strategy and rollback." },
        { title: "Automate operations", body: "Practise event-driven remediation, centralised logging and alarms across accounts." },
        { title: "Train reading stamina", body: "Answer full 75-question practice exams in 180 minutes." },
        { title: "Aim above 750", body: "The bar is higher than on associate exams; book once you are clearly above it in practice." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Underestimating the higher passing score of 750.",
        "Choosing manual or semi-manual fixes when a fully automated option exists.",
        "Running out of time on long scenarios.",
      ],
    },
  ],
  faq: [
    { question: "How many questions are on DOP-C02?", answer: "75 questions: 65 scored and 10 unscored." },
    { question: "How long is the exam and what is the passing score?", answer: "180 minutes. You need a scaled score of 750 on a scale of 100 to 1,000." },
    {
      question: "What are the DOP-C02 domains?",
      answer:
        "SDLC Automation 22%, Configuration Management and IaC 17%, Resilient Cloud Solutions 15%, Monitoring and Logging 15%, Incident and Event Response 14%, Security and Compliance 17%.",
    },
    {
      question: "Are CertRamp's DOP-C02 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS DOP-C02 Exam Guide 2026: DevOps Pro Domains & Plan",
    description:
      "Prepare for AWS DevOps Engineer Professional (DOP-C02): 75 questions in 180 minutes, 750 to pass, the six domains with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
