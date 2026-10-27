import type { ExamGuide } from "@/config/types";

/**
 * IREB CPRE Foundation Level exam guide. Exam facts come from the verified
 * `exam` record in src/config/certifications.ts. This file holds CertRamp's
 * preparation advice.
 */
export const irebCpreGuide: ExamGuide = {
  slug: "ireb-cpre-foundation-level",
  summary:
    "The IREB CPRE Foundation Level is the international entry certification for requirements engineering. The exam has about 45 multiple-choice questions in 75 minutes (90 minutes for non-native speakers on request), and you pass with at least 70% of the points. It is based on syllabus 3.3.0 (dated 1 April 2026) with seven chapters.",
  whoFor: [
    "Business analysts, product owners and requirements engineers",
    "Developers, testers and architects who work with requirements every day",
    "Project managers and consultants who want a shared RE vocabulary with their teams",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam is run by IREB-licensed certification bodies, either right after a training course or as a stand-alone exam at an exam centre; some bodies also offer remote exams. There are no formal prerequisites, although the syllabus expects basic knowledge of plan-driven and agile system development.",
        "All questions are multiple choice, in three kinds: single choice (A), questions where you pick several answers (P), and true/false sets (K). A question is worth one to three points, shown in its header. Because P and K questions have several parts, read every statement carefully — partial knowledge costs points quickly.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The syllabus gives no exam weights per chapter, but it does give training times, and these show where the depth is. Chapter 3 (work products and documentation practices) has seven hours and chapter 4 (practices for requirements elaboration) four and a half — together almost two thirds of the 17 h 45 min total. Both are at cognitive level L3, which means you must apply the content, for example writing a requirement with a template or identifying stakeholders and writing a stakeholder list.",
        "Do not neglect the short chapters. The nine principles of chapter 2, the process facets and configurations of chapter 5 and the traceability and prioritisation topics of chapter 6 produce many compact, easy-to-score questions if you know the terms exactly.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read syllabus 3.3.0 completely",
          body: "Download the free syllabus from IREB. It defines exactly what can be examined, including every learning objective. Make sure your book or course follows version 3.3.0.",
        },
        {
          title: "Learn the terms precisely",
          body: "Build your own glossary: requirement types, the nine principles, quality criteria, conflict types, view types, traceability. Many questions turn on the exact meaning of a term.",
        },
        {
          title: "Practise the L3 skills",
          body: "Write requirements with phrase templates (e.g. EARS or Rupp's template), a user story in the Cohn format and a use case with a form template. Draw a simple UML class diagram and UML activity diagram, and practise reading context diagrams and state machines.",
        },
        {
          title: "Learn the decision tables",
          body: "Which elicitation technique for which situation, which conflict resolution technique, which validation technique, which process configuration: practise these choices, because they test the L2 and L3 objectives.",
        },
        {
          title: "Practise with timed exams",
          body: "Answer full practice exams of 45 questions in 75 minutes, including the multi-part P and K question types, and read every explanation.",
        },
        {
          title: "Book with a buffer",
          body: "You need 70%. Book once you reach clearly more than that in several practice exams, so that a few tricky questions on the day do not decide the result.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Preparing with material for older syllabus versions. Check that your sources cover syllabus 3.3.0.",
        "Answering from personal project experience instead of the syllabus. The exam follows IREB's definitions, which may differ from your company's usage.",
        "Mixing up the quality criteria for single requirements with those for work products.",
        "Confusing system boundary and context boundary, or gathering techniques with design and idea-generating techniques.",
        "Rushing the K and P questions. Each statement counts, so read every option on its own merits.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the CPRE Foundation Level exam have?",
      answer:
        "About 45 multiple-choice questions according to the IREB examination regulations. Each question is worth one to three points, and you need at least 70% of the total points to pass.",
    },
    {
      question: "How long is the exam?",
      answer:
        "75 minutes. Candidates taking the exam in a language other than their native language can request 90 minutes in writing with a justification, ideally with the exam application and at the latest before the exam starts.",
    },
    {
      question: "Which syllabus is current?",
      answer: "Syllabus version 3.3.0, dated 1 April 2026. It has seven chapters, from the introduction to requirements engineering to tool support.",
    },
    {
      question: "Where can I take the exam?",
      answer:
        "Through one of the certification bodies licensed by IREB, such as iSQI, GASQ or Certible. Some offer remote exams. Prices are set by each certification body.",
    },
    {
      question: "Are CertRamp's CPRE questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published IREB syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "IREB CPRE Foundation Level Exam Guide (Syllabus 3.3.0)",
    description:
      "CPRE Foundation Level guide for syllabus 3.3.0: about 45 questions, 75 minutes, 70% to pass, all seven chapters explained and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
