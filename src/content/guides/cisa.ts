import type { ExamGuide } from "@/config/types";

/**
 * ISACA CISA exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const cisaGuide: ExamGuide = {
  slug: "cisa",
  summary:
    "The CISA exam has 150 questions across five domains of the exam content outline in force since 1 August 2024. The two largest domains, Information Systems Operations and Business Resilience and Protection of Information Assets, are 26% each. Anyone can sit the exam; certification requires 5 years of relevant work experience.",
  whoFor: [
    "IT auditors and internal auditors who review information systems",
    "Risk, compliance and control professionals who work with audit teams",
    "Security and IT professionals moving into assurance roles",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CISA is a computer-based exam with 150 questions. You take it at an authorised PSI test centre or remotely with a proctor.",
        "There are no prerequisites to sit the exam. To become certified you need at least 5 years of information systems auditing, control or security experience in the CISA job practice areas, gained in the 10 years before you apply, and you must apply within 5 years of passing.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Domains 4 (Information Systems Operations and Business Resilience) and 5 (Protection of Information Assets) are 26% each, together more than half the exam. Domains 1 (Information Systems Auditing Process) and 2 (Governance and Management of IT) are 18% each, and Domain 3 (Acquisition, Development and Implementation) is 12%.",
        "CISA questions take the auditor's point of view. The best answer is usually the one an independent auditor would do or recommend: assess risk, test controls, gather evidence and report. Answers where the auditor fixes the problem personally or takes over management decisions are usually wrong.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the CISA exam content outline",
          body: "Use ISACA's outline in force since 1 August 2024 as your checklist, and make sure your material follows it.",
        },
        {
          title: "Learn the audit process end to end",
          body: "Planning, risk assessment, sampling, evidence, testing and reporting appear across every domain, not only in Domain 1.",
        },
        {
          title: "Weight your time by domain",
          body: "Spend the most time on Domains 4 and 5, but do not skip Domain 3: 12% is still about 18 questions.",
        },
        {
          title: "Think like an auditor",
          body: "For each practice question, ask what an independent auditor would do first and what would compromise independence.",
        },
        {
          title: "Take timed practice exams",
          body: "Answer full 150-question practice exams and review the reasoning behind every option.",
        },
        {
          title: "Plan your certification application",
          body: "Check your experience against ISACA's 5-year requirement and remember to apply within 5 years of passing.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Answering as an IT manager instead of as an independent auditor.",
        "Using material written for the outline before August 2024.",
        "Studying technology details without the audit and control perspective.",
        "Neglecting governance topics in Domain 2.",
        "Confusing preventive, detective and corrective controls.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the CISA exam have?",
      answer: "150 questions.",
    },
    {
      question: "What are the CISA domains and weights?",
      answer:
        "Domain 1 Information Systems Auditing Process 18%, Domain 2 Governance and Management of IT 18%, Domain 3 Information Systems Acquisition, Development and Implementation 12%, Domain 4 Information Systems Operations and Business Resilience 26%, Domain 5 Protection of Information Assets 26%.",
    },
    {
      question: "Can I take CISA without work experience?",
      answer:
        "Yes, there are no prerequisites to sit the exam. To become certified you need 5 years of relevant experience gained in the 10 years before you apply, and you must apply within 5 years of passing.",
    },
    {
      question: "Where can I take the CISA exam?",
      answer: "At an authorised PSI test centre or remotely proctored.",
    },
    {
      question: "Are CertRamp's CISA questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISACA exam content outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CISA Exam Guide 2026: Domains, Weights & Study Plan",
    description:
      "Prepare for the ISACA CISA exam: 150 questions, the five domains of the August 2024 outline with weights, experience rules and a six-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
