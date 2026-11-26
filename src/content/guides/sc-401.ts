import type { ExamGuide } from "@/config/types";

/**
 * Microsoft SC-401 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const sc401Guide: ExamGuide = {
  slug: "sc-401",
  summary:
    "SC-401: Administering Information Security in Microsoft 365 is the exam for the Information Security Administrator Associate certification. It lasts 100 minutes and you pass with 700 or more. Its three areas (information protection, data loss prevention and retention, and risks, alerts and activities) carry equal weight, 30–35% each.",
  whoFor: [
    "Microsoft 365 administrators responsible for data security and compliance",
    "Security and compliance specialists working in Microsoft Purview",
    "Administrators who protect sensitive data in Microsoft 365 and Copilot",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "SC-401 lasts 100 minutes and needs 700 or more. It is scheduled through Pearson VUE, may include interactive components and is offered in seven languages, including English and German. The skills measured were updated on 28 October 2026.",
        "There are no formal prerequisites. Microsoft expects familiarity with Microsoft 365 services, PowerShell, Microsoft Entra, the Defender portal and Defender for Cloud Apps. You renew every 12 months with a free online assessment.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Implement information protection, implement data loss prevention and retention, and manage risks, alerts and activities are equally weighted. There is no small area to skip.",
        "Know sensitivity labels and their policies, classification, DLP policies across locations, retention and records management, insider risk and the alert and audit tools, and when each one applies.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the SC-401 study guide", body: "Use the skills measured as of 28 October 2026 as your checklist." },
        { title: "Use a Microsoft 365 test tenant", body: "Create labels, DLP and retention policies yourself and watch how they behave." },
        { title: "Compare similar features", body: "Labels vs. retention labels, DLP vs. insider risk: many questions turn on these differences." },
        { title: "Practise investigations", body: "Use alerts, activity explorer and audit search to follow an incident." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 100 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying without hands-on work in Microsoft Purview.",
        "Mixing up sensitivity labels and retention labels.",
        "Using material from before the October 2026 update.",
      ],
    },
  ],
  faq: [
    { question: "How long is SC-401 and what is the passing score?", answer: "100 minutes. You need 700 or greater." },
    {
      question: "What are the SC-401 skills areas?",
      answer: "Implement information protection, implement data loss prevention and retention, and manage risks, alerts and activities, each 30–35%.",
    },
    { question: "Is SC-401 available in German?", answer: "Yes. It is offered in seven languages, including English and German." },
    { question: "How do I renew it?", answer: "Every 12 months with a free online assessment on Microsoft Learn." },
    {
      question: "Are CertRamp's SC-401 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "SC-401 Exam Guide 2026: Information Security Admin & Plan",
    description:
      "Prepare for SC-401 Microsoft 365 Information Security Administrator: 100 minutes, 700 to pass, three equally weighted skills areas and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
