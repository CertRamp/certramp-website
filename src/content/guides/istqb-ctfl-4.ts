import type { ExamGuide } from "@/config/types";

/**
 * ISTQB CTFL v4.0 exam guide (English). Exam facts come from the verified `exam`
 * record in src/config/certifications.ts (syllabus v4.0.1).
 */
export const istqbCtfl4Guide: ExamGuide = {
  slug: "istqb-ctfl-4",
  summary:
    "The ISTQB Certified Tester Foundation Level (CTFL) v4.0 exam has 40 multiple-choice questions in 60 minutes (plus 25% if it is not in your native language). You pass with 26 of 40 points (65%). Test Analysis and Design is the largest chapter with 11 questions.",
  whoFor: [
    "Software testers and QA engineers at the start of their career",
    "Developers, analysts and product owners who work closely with testing",
    "Candidates who need CTFL before an ISTQB Advanced Level or specialist module",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 40 multiple-choice questions, each worth 1 point. You have 60 minutes, or 25% more if the exam is not in your native language. You need 26 points (65%). It is based on syllabus v4.0.1, released on 15 September 2024.",
        "Questions are spread across cognitive levels: 8 K1 (remember), 24 K2 (understand) and 8 K3 (apply). The K3 questions usually ask you to apply a test technique to a small example.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The number of questions per chapter is fixed: Fundamentals of Testing 8, Testing Throughout the SDLC 6, Static Testing 4, Test Analysis and Design 11, Managing the Test Activities 9, Test Tools 2.",
        "Test Analysis and Design is where most K3 questions come from: equivalence partitioning, boundary value analysis, decision tables and state transition testing. Practise them until you can work through an example quickly and without errors.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Download syllabus v4.0.1", body: "Use it as your checklist and make sure your material covers v4.0, not 2018 v3.1." },
        { title: "Learn the glossary terms", body: "K1 and K2 questions turn on exact ISTQB definitions." },
        { title: "Drill the test techniques", body: "Work through many small examples of each black-box technique until the K3 questions feel routine." },
        { title: "Know test management basics", body: "Test planning, estimation, risk, monitoring and defect reports make up 9 questions." },
        { title: "Take timed practice exams", body: "Answer full 40-question practice exams in 60 minutes and aim clearly above 26." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying with material for the old 2018 syllabus.",
        "Answering from company practice instead of ISTQB definitions.",
        "Making arithmetic slips in boundary value and equivalence partition questions.",
        "Skipping the short chapters on static testing and tools.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does CTFL v4.0 have?", answer: "40 multiple-choice questions, 1 point each." },
    { question: "How long is the exam and what is the passing score?", answer: "60 minutes (plus 25% if not in your native language). You need 26 of 40 points (65%)." },
    { question: "Which syllabus is current?", answer: "Syllabus v4.0.1, released on 15 September 2024." },
    {
      question: "How many questions come from each chapter?",
      answer: "Fundamentals 8, SDLC 6, Static Testing 4, Test Analysis and Design 11, Managing the Test Activities 9, Test Tools 2.",
    },
    {
      question: "Are CertRamp's CTFL questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISTQB syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISTQB CTFL v4.0 Exam Guide 2026: Syllabus, Format & Plan",
    description:
      "Prepare for ISTQB CTFL v4.0: 40 questions in 60 minutes, 26 to pass, questions per chapter, K-levels and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
