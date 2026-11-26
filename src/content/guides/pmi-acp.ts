import type { ExamGuide } from "@/config/types";

/**
 * PMI-ACP exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const pmiAcpGuide: ExamGuide = {
  slug: "pmi-acp",
  summary:
    "The PMI Agile Certified Practitioner (PMI-ACP) exam has 120 questions (100 scored, 20 unscored) in 3 hours, with one 10-minute break after question 60. It follows the November 2024 Examination Content Outline (revised March 2026) with four domains: Mindset (28%), Leadership (25%), Product (19%) and Delivery (28%).",
  whoFor: [
    "Scrum masters, agile coaches and agile project managers",
    "Product owners and team leads in agile organisations",
    "PMP holders who want an agile-specific certification",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 120 questions, 20 of which are unscored, in 3 hours with one 10-minute break after question 60. Besides multiple choice you will see multiple response, drag-and-drop style items and exhibits. You can test at a centre or online with OnVUE.",
        "You need a secondary diploma and 21 hours of agile training, plus one of: 2 years of agile experience in the past 5 years; 1 year with a degree from a PMI GAC-accredited programme; 1 year with an active third-party agile certification held for more than a year; or an active PMP.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Mindset and Delivery are 28% each, Leadership 25% and Product 19%. The exam is method-neutral: it tests agile values and practices across frameworks, not one framework's rules.",
        "Questions describe team situations and ask what an agile practitioner should do. The best answer usually empowers the team, delivers value early, makes work visible and invites feedback.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Confirm eligibility", body: "Check your training hours and agile experience against PMI's options before you apply." },
        { title: "Read the Examination Content Outline", body: "Use the November 2024 outline (revised March 2026) and its four domains as your checklist." },
        { title: "Learn several frameworks", body: "Know the core ideas of Scrum, Kanban, Lean and XP, and when each practice helps." },
        { title: "Practise situational reasoning", body: "For each practice question, explain why the right answer fits agile values better than the others." },
        { title: "Take full-length practice exams", body: "Answer 120 questions in 3 hours with a break after 60, as on exam day." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Answering from one framework's rulebook instead of agile principles.",
        "Choosing command-and-control answers in leadership questions.",
        "Using material written for the older PMI-ACP outline.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does PMI-ACP have?", answer: "120 questions: 100 scored and 20 unscored pretest questions." },
    { question: "How long is the exam?", answer: "3 hours, with one 10-minute break after question 60." },
    { question: "What are the PMI-ACP domains?", answer: "Mindset 28%, Leadership 25%, Product 19% and Delivery 28%." },
    {
      question: "What do I need to apply?",
      answer:
        "A secondary diploma, 21 hours of agile training and one of the experience options: 2 years of agile experience in the past 5 years, or 1 year combined with a GAC-accredited degree, an active third-party agile certification or an active PMP.",
    },
    {
      question: "Are CertRamp's PMI-ACP questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published PMI Examination Content Outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "PMI-ACP Exam Guide 2026: Domains, Eligibility & Study Plan",
    description:
      "Prepare for PMI-ACP: 120 questions in 3 hours, Mindset, Leadership, Product and Delivery with weights, eligibility options and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
