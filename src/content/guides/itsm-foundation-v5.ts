import type { ExamGuide } from "@/config/types";

/**
 * PeopleCert IT Service Management Foundation (Version 5) exam guide (English).
 * Exam facts come from the verified `exam` record in src/config/certifications.ts
 * and the peoplecert-itsm-foundation-v4 tracker entry.
 */
export const itsmFoundationV5Guide: ExamGuide = {
  slug: "itsm-foundation-v5",
  summary:
    "The IT Service Management Foundation (Version 5) exam has 40 multiple-choice questions in 60 minutes. It is closed book and you pass with 65%. Version 4 remains available until PeopleCert's planned sunset on 31 December 2027, but newcomers should consider version 5.",
  whoFor: [
    "IT service management staff, service desk and operations teams",
    "Product and service managers in digital organisations",
    "Newcomers deciding between version 4 and version 5",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 40 multiple-choice questions in 60 minutes, closed book, and you need 65%. It is offered in nine languages, including English and German. The certification is renewed every 3 years with 60 CPD points or another exam from the same product suite.",
        "PeopleCert plans to sunset all version 4 modules on 31 December 2027. Version 4 holders who want to upgrade can take the Foundation Bridge (Version 5) exam until the same date.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The syllabus covers digital product and service management concepts, value co-creation, the dimensions of product and service management, the value system, the guiding principles, the product and service lifecycle, management practices, continual improvement and value stream mapping.",
        "Foundation questions test whether you know the definitions and how the parts fit together. Learn the terms exactly as the official material defines them.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Use Version 5 material", body: "Make sure your material is for Version 5, not version 4." },
        { title: "Build a glossary", body: "Write your own definitions of the key terms and check them against the official material." },
        { title: "Learn the guiding principles and value system", body: "These ideas appear across many questions." },
        { title: "Practise closed book", body: "Answer practice questions without notes, as in the real exam." },
        { title: "Take timed practice exams", body: "Answer full 40-question practice exams in 60 minutes and aim clearly above 65%." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying version 4 material for the Version 5 exam.",
        "Answering from company practice instead of the official definitions.",
        "Version 4 holders waiting too long for the Bridge exam, which ends on 31 December 2027.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does the Version 5 Foundation exam have?", answer: "40 multiple-choice questions in 60 minutes." },
    { question: "What is the passing score?", answer: "65%." },
    { question: "Is the exam open book?", answer: "No. It is closed book." },
    {
      question: "Should I take version 4 or Version 5?",
      answer: "Version 4 stays available until the planned sunset on 31 December 2027, but newcomers should consider Version 5 because it is the version that continues.",
    },
    { question: "Is the exam available in German?", answer: "Yes. It is offered in nine languages, including English and German." },
    {
      question: "Are CertRamp's questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ITSM Foundation Version 5 Exam Guide 2026: Format & Plan",
    description:
      "Prepare for IT Service Management Foundation (Version 5): 40 questions in 60 minutes, 65% to pass, closed book, the syllabus topics and the v4 sunset.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
