import type { ExamGuide } from "@/config/types";

/**
 * ISACA AAISM exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const isacaAaismGuide: ExamGuide = {
  slug: "isaca-aaism",
  summary:
    "ISACA AAISM (Advanced in AI Security Management) tests whether an experienced security manager can govern, risk-assess and secure AI systems across the organisation. The exam has 90 multiple-choice questions in 2.5 hours across three domains — AI Governance and Program Management (31%), AI Risk Management (31%) and AI Technologies and Controls (38%) — and only holders of an active CISM or CISSP can earn the credential.",
  whoFor: [
    "CISM holders who want to extend their security management practice to AI systems",
    "CISSP holders responsible for AI security architecture, controls or assurance",
    "Security and risk leaders who assess, implement and maintain AI systems in their organisation",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AAISM actually tests",
      paragraphs: [
        "AAISM has three domains. AI Technologies and Controls carries the largest share at 38%; AI Governance and Program Management and AI Risk Management are worth 31% each. ISACA positions the credential as an advanced, AI-centric extension of security management, so it assumes you already know the fundamentals of CISM or CISSP.",
        "The exam takes a management view. Expect situations in which you have to choose the right governance structure, risk response or control for an AI system — for example, who should own an AI use case, when to run an AI risk assessment, or which control limits prompt injection, data poisoning or model theft. Deep coding or data science skills are not the focus; knowing what each AI threat means for the business and how to control it is.",
      ],
    },
    {
      id: "how-it-is-structured",
      heading: "How the exam and certification are structured",
      paragraphs: [
        "The exam has 90 multiple-choice questions and you have 2.5 hours (150 minutes). It is administered through PSI and can be taken with remote online proctoring or at an approved test centre. Check ISACA's AAISM exam candidate guide for the current scheduling, scoring and retake rules before you book.",
        "Passing the exam is only the first step. You must hold an active CISM or CISSP, pay a one-time US$50 application processing fee and apply within five years of passing. To keep AAISM you report at least 10 AI-related CPE hours every year (30 over the three-year cycle), pay the annual maintenance fee (US$20 for ISACA members, US$35 for non-members) and show that your CISM or CISSP is still active.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the official exam content outline",
          body: "Start with ISACA's AAISM exam content outline and list every task and knowledge statement under the three domains. Mark each one as known, unsure or new, and plan your time by the weights: 38% for AI Technologies and Controls, 31% each for governance and risk.",
        },
        {
          title: "Refresh your security management base",
          body: "AAISM builds on CISM or CISSP. Revisit governance structures, risk assessment and treatment, third-party risk, and incident management, then ask how each one changes when the asset is an AI model, its training data or an AI service from a provider.",
        },
        {
          title: "Learn the AI life cycle and its threats",
          body: "Understand how data is collected, models are trained, evaluated, deployed and monitored. For each stage, know the typical threats — data poisoning, prompt injection, evasion with adversarial inputs, model extraction, privacy attacks on training data, and supply chain risks in pre-trained models — and the control that fits.",
        },
        {
          title: "Work through ISACA's official resources",
          body: "ISACA publishes an AAISM review manual (digital and print), an online review course and a questions, answers and explanations database. Use them alongside the content outline, not instead of it.",
        },
        {
          title: "Practise under exam conditions",
          body: "Take timed practice exams of 90 questions in 150 minutes. Read every explanation, including for questions you answered correctly, and track your results per domain.",
        },
        {
          title: "Book when your results are stable",
          body: "Book once you pass several practice exams with a margin across all three domains. Check that your CISM or CISSP will still be active when you apply for AAISM.",
        },
      ],
    },
    {
      id: "question-style",
      heading: "How to approach the questions",
      paragraphs: [
        "Prepare for questions that ask for the best, first or most important action. Several options are often technically possible; the right one is usually the answer that follows governance and risk principles — clear ownership, a risk assessment before a decision, controls proportional to the risk — rather than the most technical fix.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying AI technology only. Governance and risk together make up 62% of the exam, so programme ownership, policies, metrics and risk treatment matter as much as attacks and controls.",
        "Answering as an engineer instead of a manager. Jumping to a technical tool before ownership, policy and risk assessment are in place is a typical wrong answer in management-level exams.",
        "Mixing up AI attack types. Know the difference between poisoning (corrupting training data), evasion (manipulated inputs at inference), model extraction (copying a model through its interface) and membership inference (learning whether a record was in the training data).",
        "Relying on prompt instructions as a security control. A system prompt telling a model to ignore malicious instructions is not a reliable control; least privilege, input and output handling and human approval are.",
        "Forgetting third-party AI. Many organisations consume AI as a service or download pre-trained models, so supplier due diligence, contracts and model supply chain controls belong in your preparation.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the AAISM exam have and how long is it?",
      answer:
        "The exam has 90 multiple-choice questions and lasts 2.5 hours (150 minutes). It covers three domains: AI Governance and Program Management (31%), AI Risk Management (31%) and AI Technologies and Controls (38%).",
    },
    {
      question: "Who can earn the AAISM certification?",
      answer:
        "AAISM is open to holders of an active CISM or CISSP. ISACA also expects candidates to have some experience assessing, implementing and maintaining AI systems. After passing, you pay a one-time US$50 application processing fee and apply within five years.",
    },
    {
      question: "How do I maintain AAISM?",
      answer:
        "You report at least 10 AI-related CPE hours each year and 30 over the three-year reporting period, pay the annual maintenance fee (US$20 for ISACA members, US$35 for non-members) and submit proof that your CISM or CISSP is still active.",
    },
    {
      question: "Can I take the AAISM exam online?",
      answer:
        "Yes. The exam is administered through PSI and can be taken with remote online proctoring or at an approved test centre.",
    },
    {
      question: "Are CertRamp's AAISM questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against ISACA's published AAISM exam content outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AAISM Exam Guide 2026: Domains, Format & Study Plan",
    description:
      "ISACA AAISM guide: 90 questions in 2.5 hours, CISM or CISSP required, AI governance, AI risk and AI controls domains, and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
