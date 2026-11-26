import type { ExamGuide } from "@/config/types";

/**
 * ISACA COBIT 7 Foundation exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts and the isaca-cobit-2019-foundation tracker entry.
 */
export const cobit7FoundationGuide: ExamGuide = {
  slug: "cobit-7-foundation",
  summary:
    "The COBIT 7 Foundation Certificate replaced COBIT 2019 Foundations on 19 November 2026. The exam has 75 multiple-choice questions in 2 hours, taken online with a remote proctor, and you pass with 65%. Governance System and Components (31%) and Governance and Management Objectives (25%) make up more than half of it.",
  whoFor: [
    "IT governance, risk and audit professionals",
    "IT managers who work with governance frameworks",
    "Candidates who had planned to take COBIT 2019 Foundation",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 75 multiple-choice questions in 2 hours. It is online and remotely proctored, and you need 65%. There are no prerequisites.",
        "COBIT 2019 Foundation can still be bought until 30 June 2027, but new starters should prepare for COBIT 7 Foundation.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Governance System and Components is 31% and Governance and Management Objectives 25%. Framework Introduction and Performance Management are 10% each, Principles and Implementation 8% each, Designing a Tailored Governance System 5% and Business Case 1%.",
        "Know the components of a governance system, the governance and management objectives and what each is for, and the difference between governance and management. Many questions turn on COBIT's exact terms.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Use COBIT 7 material", body: "Make sure your material covers COBIT 7, not COBIT 2019." },
        { title: "Focus on the two big sections", body: "Governance system components and the objectives together make up more than half the exam." },
        { title: "Build a glossary", body: "Write your own definitions of the key COBIT terms and check them against the framework." },
        { title: "Check your online setup", body: "The exam is remotely proctored only; test your computer and room in advance." },
        { title: "Take timed practice exams", body: "Answer full 75-question practice exams in 2 hours and aim clearly above 65%." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying COBIT 2019 material for the COBIT 7 exam.",
        "Confusing governance and management responsibilities.",
        "Spending time on tiny sections like the business case at the expense of the big ones.",
      ],
    },
  ],
  faq: [
    { question: "When did COBIT 7 Foundation replace COBIT 2019?", answer: "On 19 November 2026. The COBIT 2019 Foundation exam stays on sale until 30 June 2027." },
    { question: "How many questions does COBIT 7 Foundation have?", answer: "75 multiple-choice questions in 2 hours." },
    { question: "What is the passing score?", answer: "65%." },
    { question: "Can I take the exam at a test centre?", answer: "No. It is online and remotely proctored." },
    {
      question: "Are CertRamp's COBIT 7 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISACA material. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "COBIT 7 Foundation Exam Guide 2026: Format, Weights & Plan",
    description:
      "Prepare for ISACA COBIT 7 Foundation: 75 questions in 2 hours, 65% to pass, online proctored, section weights and what changed from COBIT 2019.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
