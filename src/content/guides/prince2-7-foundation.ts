import type { ExamGuide } from "@/config/types";

/**
 * PRINCE2 7 Foundation exam guide (English). Exam facts come from the verified
 * `exam` record in src/config/certifications.ts.
 */
export const prince27FoundationGuide: ExamGuide = {
  slug: "prince2-7-foundation",
  summary:
    "The PRINCE2 Project Management Foundation (Version 7) exam has 60 multiple-choice questions in 60 minutes. It is closed book and you pass with 60%. There are no prerequisites, and the certification is renewed every 3 years.",
  whoFor: [
    "Project managers and team members in organisations that use PRINCE2",
    "Newcomers to structured project management",
    "Candidates planning the PRINCE2 Practitioner exam",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 60 multiple-choice questions in 60 minutes, closed book, and you need 60%. It is available in 14 languages, including English and German.",
        "There are no prerequisites. The certification is renewed every 3 years, either with 60 CPD points via PeopleCert Plus or by passing another exam from the same product suite.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Version 7 is built around five integrated elements: principles, people, practices, processes and the project context with tailoring. Questions test whether you know the PRINCE2 terms and how the elements fit together.",
        "Learn the seven principles, the seven practices and the seven processes with their purposes, plus the roles in the project management team. Version 7 added the people element and changed some practice names, so older notes need checking.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Use Version 7 material", body: "Make sure your manual and course are for PRINCE2 7, not 2017." },
        { title: "Learn the sevens", body: "Principles, practices and processes: purpose and key ideas of each." },
        { title: "Learn the roles", body: "Know who is responsible for what in the project board, project manager and team roles." },
        { title: "Practise closed book", body: "Answer practice questions without notes, as in the real exam." },
        { title: "Take timed practice exams", body: "Answer full 60-question practice exams in 60 minutes and aim clearly above 60%." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying PRINCE2 2017 (Version 6) material.",
        "Answering from company practice instead of the PRINCE2 definitions.",
        "Mixing up practices and processes with similar names.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does PRINCE2 7 Foundation have?", answer: "60 multiple-choice questions." },
    { question: "How long is the exam and what is the passing score?", answer: "60 minutes. You need 60%." },
    { question: "Is the exam open book?", answer: "No. The Foundation exam is closed book." },
    { question: "Does PRINCE2 Foundation expire?", answer: "It is renewed every 3 years, with 60 CPD points via PeopleCert Plus or another exam from the same product suite." },
    { question: "Is the exam available in German?", answer: "Yes. It is offered in 14 languages, including English and German." },
    {
      question: "Are CertRamp's PRINCE2 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published PRINCE2 7 guidance. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "PRINCE2 7 Foundation Exam Guide 2026: Format & Study Plan",
    description:
      "Prepare for PRINCE2 Foundation (Version 7): 60 questions in 60 minutes, 60% to pass, closed book, the five elements and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
