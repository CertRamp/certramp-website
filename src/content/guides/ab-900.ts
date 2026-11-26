import type { ExamGuide } from "@/config/types";

/**
 * Microsoft AB-900 exam guide (English). Exam facts come from the verified `exam`
 * record in src/config/certifications.ts.
 */
export const ab900Guide: ExamGuide = {
  slug: "ab-900",
  summary:
    "AB-900: Microsoft 365 Copilot and Agent Administration Fundamentals is a 45-minute exam; you pass with 700 or more. Data protection and governance for Microsoft 365 and Copilot is the largest area at 35–40%.",
  whoFor: [
    "Microsoft 365 administrators who start managing Copilot and agents",
    "IT staff, students and career changers who want a Microsoft 365 fundamentals certificate",
    "Candidates who had planned to take MS-900",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AB-900 lasts 45 minutes and needs 700 or more. You take it through Pearson VUE, or through Certiport if you are a student or educator, and it may include interactive components. It is offered in 13 languages, including English and German. The skills measured were updated on 14 October 2026.",
        "There are no formal prerequisites. Microsoft expects familiarity with Microsoft 365 core services, security, identity, data protection, Copilot and agents, and the main admin centres.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Data protection and governance for Microsoft 365 and Copilot is 35–40%, core features and objects of Microsoft 365 services 30–35%, and basic administration of Copilot and agents 25–30%.",
        "Know how Copilot uses organisational data and permissions, how sensitivity labels and governance tools limit what it can access, and where in the admin centres you manage Copilot and agents.",
      ],
    },
    {
      id: "study-plan",
      heading: "A four-step preparation plan",
      steps: [
        { title: "Read the AB-900 study guide", body: "Use the skills measured as of 14 October 2026 as your checklist." },
        { title: "Explore the admin centres", body: "Open the Microsoft 365, Entra, Purview, Exchange, SharePoint and Teams admin centres in a trial tenant." },
        { title: "Focus on data governance", body: "It is the largest area: labels, permissions, oversharing and how Copilot respects them." },
        { title: "Take timed practice exams", body: "With only 45 minutes, practise answering quickly and accurately." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Treating AB-900 as a pure Copilot user exam: it is about administration and governance.",
        "Skipping core Microsoft 365 service basics.",
        "Running out of time in the short 45-minute exam.",
      ],
    },
  ],
  faq: [
    { question: "How long is AB-900 and what is the passing score?", answer: "45 minutes. You need 700 or greater." },
    {
      question: "What are the AB-900 skills areas?",
      answer:
        "Core features and objects of Microsoft 365 services 30–35%, data protection and governance for Microsoft 365 and Copilot 35–40%, basic administrative tasks for Copilot and agents 25–30%.",
    },
    { question: "Is AB-900 available in German?", answer: "Yes. It is offered in 13 languages, including English and German." },
    {
      question: "Are CertRamp's AB-900 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AB-900 Exam Guide 2026: Copilot & Agent Admin Fundamentals",
    description:
      "Prepare for AB-900 Microsoft 365 Copilot and Agent Administration Fundamentals: 45 minutes, 700 to pass, skills areas with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
