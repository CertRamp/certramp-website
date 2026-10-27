import type { ExamGuide } from "@/config/types";

/**
 * IPMA Level D exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts (format details: PM-ZERT / GPM, Germany).
 * This file holds CertRamp's preparation advice.
 */
export const ipmaLevelDGuide: ExamGuide = {
  slug: "ipma-level-d",
  summary:
    "IPMA Level D (Certified Project Management Associate) is IPMA's entry-level project management certification, based on the IPMA Individual Competence Baseline (ICB4) with its three competence areas Perspective, People and Practice. In Germany, PM-ZERT (GPM) assesses it either with two 90-minute written exams or with one 90-minute written exam plus a project report, and you pass when at least 23 competence elements are rated as fulfilled. No project management experience is required, and the certificate is valid for five years.",
  whoFor: [
    "Students, apprentices and career starters who want a recognised project management qualification",
    "Project team members who want to prove solid project management knowledge",
    "Experienced professionals who want to document their practice with a certificate based on ICB4",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What IPMA Level D actually tests",
      paragraphs: [
        "Level D checks knowledge of the competence elements of the project management domain in ICB4. For projects, ICB4 defines 28 competence elements in three areas: Perspective (5 elements, such as strategy, governance and power and interest), People (10 elements, such as leadership, teamwork and conflict and crisis) and Practice (13 elements, such as scope, time, risk and opportunity and stakeholders).",
        "Expect questions that ask you to explain a concept and apply it to a project situation: build a work breakdown structure, plan a schedule, assess a risk, analyse stakeholders or handle a conflict in the team. The questions follow ICB4 terminology, so learn the elements by their official names.",
      ],
    },
    {
      id: "how-it-is-structured",
      heading: "How the certification works in Germany (PM-ZERT)",
      paragraphs: [
        "IPMA certification is run by national certification bodies, and the format differs from country to country. The details here are from PM-ZERT, the certification body of GPM in Germany (Level D guide version 24, valid from 1 August 2026).",
        "You choose a path when you apply, and you cannot switch later. Path 1 is one 90-minute written exam plus a report of up to 25 pages (plus up to 15 pages of appendix) on a project, uploaded at least two weeks before the exam and discussed in a feedback meeting of up to 20 minutes. Path 2 is two written exams of 90 minutes each. Holders of the GPM basic certificate can upgrade to Level D with a single 90-minute exam.",
        "Across all exam parts you must reach 23 competence elements rated as fulfilled. Each exam part can be repeated once within 12 months, and the whole procedure must finish within 18 months of admission. Exams are held in German or English, in person or online by video conference.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Choose your path early",
          body: "Decide between two written exams and exam plus report before you apply, because the choice is binding. The report path suits you if you can describe a real or planned project in depth; the two-exam path suits you if you prefer to prove everything in writing.",
        },
        {
          title: "Learn the 28 competence elements",
          body: "Make a one-page overview of all elements in Perspective, People and Practice with their official ICB4 names, and add the key ideas and methods for each. Many questions start from the exact meaning of an element.",
        },
        {
          title: "Practise the Practice methods",
          body: "Draw a work breakdown structure, a network plan with the critical path, a stakeholder map, a risk register with probability and impact, and a simple cost plan. Do each one for a small example project until it feels routine.",
        },
        {
          title: "Do not skip People and Perspective",
          body: "Leadership styles, team development, conflict escalation, negotiation, communication, governance and organisational culture are all part of ICB4. Write down a short example from your own experience for each element.",
        },
        {
          title: "Write the report early (Path 1)",
          body: "If you take Path 1, follow the prescribed report structure from PM-ZERT, stay within the page limits and upload it at least two weeks before the exam. Apply the methods to your project instead of explaining theory.",
        },
        {
          title: "Practise under time pressure",
          body: "Answer timed practice questions in 90-minute blocks and read every explanation, including for the questions you got right. Book or sit the exam once your results are stable.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Learning only the Practice methods. ICB4 gives People and Perspective equal standing, and all three areas are assessed.",
        "Using your company's terms instead of ICB4 terms. The assessment follows the ICB4 elements and their wording.",
        "Confusing scope with requirements and objectives. Scope defines the deliverables and work; requirements and objectives say what the stakeholders need and what the project must achieve.",
        "Treating risk as threats only. ICB4 calls the element risk and opportunity, and positive uncertainty must be managed too.",
        "Relying on rules from another country. Exam format, paths and pass criteria are set by the national certification body; check the current PM-ZERT guide if you certify in Germany.",
      ],
    },
  ],
  faq: [
    {
      question: "How is the IPMA Level D exam structured in Germany?",
      answer:
        "With PM-ZERT (GPM) you choose between two written exams of 90 minutes each, or one 90-minute written exam plus a report of up to 25 pages with a feedback meeting of up to 20 minutes. You pass when 23 competence elements are rated as fulfilled across all exam parts.",
    },
    {
      question: "Do I need project management experience for IPMA Level D?",
      answer:
        "No. PM-ZERT states that neither project management experience nor vocational training is required to apply. Level D assesses project management knowledge across the ICB4 competence elements.",
    },
    {
      question: "How long is the IPMA Level D certificate valid?",
      answer:
        "Five years. To recertify with PM-ZERT, you document at least 175 hours of continuing professional development since your last certification and submit your application through the certification portal before the certificate expires.",
    },
    {
      question: "Can I take IPMA Level D in English?",
      answer:
        "Yes. PM-ZERT runs certifications in German and English, with German as the default. Other IPMA member associations set their own languages and formats.",
    },
    {
      question: "Are CertRamp's IPMA Level D questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the published IPMA ICB4 competence elements. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "IPMA Level D Exam Guide 2026: ICB4, Format & Study Plan",
    description:
      "IPMA Level D guide: ICB4 competence areas, PM-ZERT exam paths (90-minute exams or report), the 23-element pass rule, recertification and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
