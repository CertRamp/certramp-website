import type { ExamGuide } from "@/config/types";

/**
 * Microsoft SC-100 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const sc100Guide: ExamGuide = {
  slug: "sc-100",
  summary:
    "SC-100: Microsoft Cybersecurity Architect is the exam for the Cybersecurity Architect Expert certification. You pass with 700 or more, and you also need one of three security associate certifications (SC-300, SC-200 or SC-500). The skills measured were updated on 21 October 2026.",
  whoFor: [
    "Security architects who design Microsoft security solutions",
    "Holders of SC-200, SC-300 or SC-500 moving to the Expert level",
    "Consultants who advise on Zero Trust and security strategy",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "SC-100 is scheduled through Pearson VUE and needs a scaled score of 700 or more.",
        "To earn Cybersecurity Architect Expert you must also hold Identity and Access Administrator Associate, Security Operations Analyst Associate or Cloud and AI Security Engineer Associate. You renew every 12 months with a free online assessment on Microsoft Learn.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Security operations, identity and compliance, and infrastructure security are 25–30% each. Aligning with security best practices, and applications and data, are 20–25% each.",
        "SC-100 is a design exam. Questions ask which strategy, framework or combination of services best meets a security goal, often framed around Zero Trust. The October 2026 update made minor changes to security operations and Microsoft 365 security.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the SC-100 study guide", body: "Use the skills measured as of 21 October 2026 as your checklist." },
        { title: "Plan your associate certification", body: "Pick SC-200, SC-300 or SC-500 if you do not hold one yet; you need it for the Expert title." },
        { title: "Learn the reference frameworks", body: "Study Microsoft's Zero Trust guidance and security reference architectures and explain why each design choice is made." },
        { title: "Practise design trade-offs", body: "For each scenario, decide which capability meets the goal with the least complexity." },
        { title: "Take timed practice exams", body: "Answer full practice exams and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying configuration steps instead of design decisions.",
        "Forgetting the associate certification needed for the Expert title.",
        "Using material from before the October 2026 update.",
      ],
    },
  ],
  faq: [
    { question: "What is the SC-100 passing score?", answer: "700 or greater (scaled score)." },
    {
      question: "What else do I need for Cybersecurity Architect Expert?",
      answer: "One of: Identity and Access Administrator Associate, Security Operations Analyst Associate, or Cloud and AI Security Engineer Associate.",
    },
    { question: "How do I renew it?", answer: "Every 12 months with a free online assessment on Microsoft Learn." },
    {
      question: "Are CertRamp's SC-100 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "SC-100 Exam Guide 2026: Cybersecurity Architect Skills & Plan",
    description:
      "Prepare for SC-100 Microsoft Cybersecurity Architect: skills measured as of October 2026 with weights, 700 to pass, the associate requirement and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
