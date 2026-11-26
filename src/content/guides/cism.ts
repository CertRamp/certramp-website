import type { ExamGuide } from "@/config/types";

/**
 * ISACA CISM exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const cismGuide: ExamGuide = {
  slug: "cism",
  summary:
    "The CISM exam has 150 questions across four domains. Since 3 November 2026 it follows an updated exam content outline, with Information Security Program (33%) and Incident Management (29%) as the largest domains. Anyone can sit the exam; certification requires 5 years of information security management experience.",
  whoFor: [
    "Information security managers and team leads",
    "Security professionals moving from technical roles into management",
    "Governance, risk and compliance professionals who run security programmes",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CISM is a computer-based exam with 150 questions, taken at an authorised PSI test centre or remotely with a proctor.",
        "There are no prerequisites to sit the exam. To become certified you need at least 5 years of information security management experience across at least three of the four CISM domains, gained in the 10 years before you apply, and you must apply within 5 years of passing.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Information Security Program is the largest domain at 33%, followed by Incident Management at 29%, Information Security Risk Management at 20% and Information Security Governance at 18%.",
        "CISM is a management exam. The best answer usually aligns security with business objectives, involves senior management or the right owner, and follows a risk-based approach. Purely technical fixes are rarely the first step.",
        "The outline changed on 3 November 2026. Check that your study material covers the updated outline before you rely on it.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the updated exam content outline",
          body: "Use ISACA's CISM outline in force since 3 November 2026 as your checklist.",
        },
        {
          title: "Weight your time by domain",
          body: "The programme and incident management domains together make up 62% of the exam; plan your study time accordingly.",
        },
        {
          title: "Think like a security manager",
          body: "For each topic, ask who owns the decision, how it supports the business and what the first correct step would be.",
        },
        {
          title: "Learn the governance vocabulary",
          body: "Know the exact meaning of terms such as risk appetite, risk tolerance, control objectives, metrics and roles; many questions turn on them.",
        },
        {
          title: "Take timed practice exams",
          body: "Answer full 150-question practice exams and review why the best answer is better than the merely correct ones.",
        },
        {
          title: "Plan your certification application",
          body: "Check your experience against ISACA's requirement and remember to apply within 5 years of passing.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Answering as a technician instead of as a manager.",
        "Using material that does not cover the November 2026 outline.",
        "Skipping governance because it is the smallest domain.",
        "Choosing an answer that is correct but not the best first step.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the CISM exam have?",
      answer: "150 questions.",
    },
    {
      question: "What are the CISM domains and weights?",
      answer:
        "Information Security Governance 18%, Information Security Risk Management 20%, Information Security Program 33% and Incident Management 29%.",
    },
    {
      question: "Did the CISM exam change in 2026?",
      answer: "Yes. An updated exam content outline has been in force since 3 November 2026.",
    },
    {
      question: "Can I take CISM without experience?",
      answer:
        "Yes, there are no prerequisites to sit the exam. To become certified you need 5 years of information security management experience across at least three of the four domains.",
    },
    {
      question: "Are CertRamp's CISM questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISACA exam content outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CISM Exam Guide 2026: Updated Outline, Domains & Study Plan",
    description:
      "Prepare for the ISACA CISM exam: 150 questions, the four domains of the November 2026 outline with weights, experience rules and a six-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
