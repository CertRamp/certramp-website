import type { ExamGuide } from "@/config/types";

/**
 * ISC2 CISSP exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const isc2CisspGuide: ExamGuide = {
  slug: "isc2-cissp",
  summary:
    "The CISSP exam uses computerized adaptive testing: 100 to 150 items in a maximum of 3 hours, across eight domains of the outline effective 15 April 2024. ISC2 requires 5 years of eligible work experience for full certification; candidates who pass without it can become an Associate of ISC2.",
  whoFor: [
    "Security managers, architects and consultants with several years of hands-on security work",
    "IT and audit professionals moving into a security leadership role",
    "Candidates who need a broad, management-level security certification for their career or employer",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CISSP is delivered as a computerized adaptive test (CAT) in every exam language. The exam picks each next item based on your previous answers, so it can end anywhere between 100 and 150 items. You cannot skip questions or go back to change an answer, which makes time management and calm, one-pass reading essential.",
        "The exam covers eight domains, from Security and Risk Management to Software Development Security. Because the test adapts across all domains, a weak domain can keep the exam going longer, so broad coverage matters more than depth in your favourite area.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "CISSP rewards a manager's view. Many questions ask what you should do first, best or most, and the expected answer usually puts risk, business goals, policy and human safety ahead of a purely technical fix. Practise picking the answer that addresses the root cause at the right level of the organisation.",
        "Learn the vocabulary precisely across all eight domains: risk terms, data roles (owner, custodian, steward), security models, cryptography basics, access control types, testing methods, incident and recovery phases and secure development practices. Many items turn on the difference between two similar terms.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the official exam outline",
          body: "Download the CISSP outline effective 15 April 2024 from ISC2 and use its eight domains as your checklist. Make sure your book or course follows this version.",
        },
        {
          title: "Map your gaps",
          body: "Rate yourself per domain before you start. Most candidates are strong in one or two areas from their job and weak in others, such as cryptography or software development security.",
        },
        {
          title: "Build the manager mindset",
          body: "For every topic, ask who decides, what the business impact is and what the first correct step would be. Write down the reasoning, not just the fact.",
        },
        {
          title: "Practise one-pass answering",
          body: "Because you cannot go back on a CAT exam, practise reading each question once, eliminating clearly wrong options and committing to an answer without second-guessing.",
        },
        {
          title: "Take full-length timed practice exams",
          body: "Work through complete practice exams under a 3-hour limit and review every explanation, especially for questions you got right by guessing.",
        },
        {
          title: "Plan your experience path",
          body: "Check your eligible work experience against ISC2's requirement of 5 years. If you are short, you can still sit the exam and become an Associate of ISC2 while you earn the experience.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Answering like an engineer when the question asks for a manager's decision.",
        "Studying only your strongest domains; the adaptive exam will find the weak ones.",
        "Using material written for the outline before April 2024.",
        "Spending too long on single items: you cannot return to them later.",
        "Memorising lists without understanding when each control or model applies.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the CISSP exam have?",
      answer: "Between 100 and 150 items. The exam is a computerized adaptive test, so the number depends on how you answer.",
    },
    {
      question: "How long is the CISSP exam?",
      answer: "Up to 3 hours.",
    },
    {
      question: "Which exam outline is current?",
      answer: "The CISSP exam outline effective 15 April 2024, with eight domains.",
    },
    {
      question: "Can I take CISSP without 5 years of experience?",
      answer:
        "Yes. ISC2 lists 5 years of eligible work experience for the certification, but candidates who pass without it can become an Associate of ISC2 and have up to 6 years to earn the experience.",
    },
    {
      question: "In which languages is CISSP offered?",
      answer: "English, Chinese, Japanese, German and Spanish.",
    },
    {
      question: "Are CertRamp's CISSP questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISC2 outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CISSP Exam Guide 2026: CAT Format, 8 Domains & Study Plan",
    description:
      "Prepare for the ISC2 CISSP exam: 100–150 adaptive items in 3 hours, the eight domains of the April 2024 outline, a six-step study plan and the mistakes to avoid.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
