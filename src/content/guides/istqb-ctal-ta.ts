import type { ExamGuide } from "@/config/types";

/**
 * ISTQB CTAL-TA v4.0 exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts. This file holds CertRamp's
 * preparation advice.
 */
export const istqbCtalTaGuide: ExamGuide = {
  slug: "istqb-ctal-ta",
  summary:
    "The ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0 tests whether you can apply test techniques, contribute to risk-based testing and help prevent defects as a test analyst. The exam has 45 multiple-choice questions worth 78 points in 120 minutes (150 minutes if the exam is not in your native language), and you pass with 51 points (65%). You need the ISTQB Foundation Level (CTFL) certificate first.",
  whoFor: [
    "Testers with Foundation Level who design and run tests on business-facing systems",
    "Test analysts moving from the retired v3.1 syllabus to v4.0",
    "Business analysts and requirements engineers who review test bases and want a formal testing qualification",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What CTAL-TA v4.0 actually tests",
      paragraphs: [
        "The v4.0 syllabus has five chapters: the tasks of the test analyst in the test process, the tasks of the test analyst in risk-based testing, test analysis and test design, testing quality characteristics, and software defect prevention. ISTQB's exam structure tables give chapter 3 (test analysis and test design) 22 of the 45 questions and 42 of the 78 points, so more than half of your score depends on test techniques.",
        "Chapter 3 is mostly at K3 (apply): domain testing, combinatorial testing, state transition testing, scenario-based testing, decision table testing, metamorphic testing, test charters for session-based testing and checklists. Expect small specifications where you must derive test cases, count coverage items or spot the missing test. Chapter 2 and chapter 5 each contain K4 (analyse) objectives — scoping regression testing from a change, and analysing test results to improve defect detection — worth 3 points per question.",
      ],
    },
    {
      id: "exam-structure",
      heading: "How the exam is structured and scored",
      paragraphs: [
        "All 45 questions are multiple choice. Points depend on the K-level of the learning objective: the 18 K2 questions are worth 1 point, the 21 K3 questions 2 points and the 6 K4 questions 3 points. There are no K1 questions, but the syllabus states that knowledge of the keywords listed for each chapter is also examined at K1 level.",
        "Exams are offered by ISTQB Member Boards and Exam Providers, which also set any experience requirements and handle the 25% time extension for candidates whose native language is not the exam language.",
      ],
    },
    {
      id: "whats-new-in-v4",
      heading: "What changed from v3.1 to v4.0",
      paragraphs: [
        "ISTQB released v4.0 on 2 May 2025 and describes the syllabus as rewritten from scratch. New or reworked topics include CRUD, random, crowd and metamorphic testing, quality criteria for test cases, test environment and test data requirements, the test oracle problem, the benefits and risks of automating test design, and a whole chapter on defect prevention: using models to find defects in specifications, analysing test results and supporting root cause analysis with defect classification.",
        "Chapter 4 now treats functional, usability, flexibility (for example adaptability) and compatibility (for example interoperability) testing in four short sections. English v3.1 training and exams ended on 16 May 2026; in other languages v3.1 remains available until 16 November 2026. Existing v3.1 certificates stay valid for life.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Download the v4.0 syllabus and sample exam",
          body: "Get the CTAL-TA v4.0 syllabus, the sample exam and the exam structure tables free from istqb.org. Check that any book or course you use is written for v4.0, not v3.1 — the chapter structure and many learning objectives are different.",
        },
        {
          title: "Refresh the Foundation Level techniques",
          body: "CTAL-TA builds on CTFL. Make sure equivalence partitioning, boundary value analysis, decision tables and state transition testing are second nature before moving to domain testing, combinatorial testing and metamorphic testing.",
        },
        {
          title: "Spend most of your time on chapter 3",
          body: "Chapter 3 has 615 of the syllabus's 1,215 training minutes and nearly half the exam questions. Work through every K3 objective with pen and paper: derive test cases, count coverage items and check your answers against the syllabus definitions.",
        },
        {
          title: "Practise the K4 objectives on scenarios",
          body: "Regression scope from a change, selecting techniques for given product risks and analysing test results (for example defect detection percentage per phase) are each worth 3 points per question. Practise reading a short scenario and justifying one choice over the others.",
        },
        {
          title: "Learn the glossary terms",
          body: "Use the ISTQB Glossary for every keyword listed at the start of each chapter. Many distractors differ from the correct answer by a single term, such as adaptability versus interoperability.",
        },
        {
          title: "Take timed practice exams",
          body: "Practise 45 questions in 120 minutes. K3 and K4 questions take far longer than K2 questions, so practise moving on and returning to long calculations rather than getting stuck.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying from v3.1 material. Topics such as CRUD testing, metamorphic testing, crowd testing and defect prevention are new in v4.0, and the chapter structure has changed.",
        "Treating chapter 3 as theory. Most of its objectives are at K3, so you must be able to apply each technique, not just describe it.",
        "Ignoring point values. A K4 question is worth three K2 questions; budget your time accordingly.",
        "Mixing up quality characteristics. Know which sub-characteristics belong to flexibility and which to compatibility, and where usability testing needs representative users.",
        "Skipping chapter 5. Defect prevention has 8 questions and 16 points, including a K4 objective on analysing test results.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the CTAL-TA exam and what is the pass mark?",
      answer:
        "The exam has 45 multiple-choice questions worth 78 points in total, and you have 120 minutes. Candidates whose native language is not the exam language get 25% extra time (150 minutes). You pass with at least 51 points, which is 65%.",
    },
    {
      question: "Do I need the Foundation Level certificate first?",
      answer:
        "Yes. You must hold the ISTQB Certified Tester Foundation Level (CTFL) certificate; ISTQB prefers v4.0 but accepts earlier versions. ISTQB also expects sufficient practical experience, and the exact criteria are set by the Member Board or Exam Provider you book with.",
    },
    {
      question: "Is my CTAL-TA v3.1 certificate still valid?",
      answer:
        "Yes. All ISTQB certificates remain valid for life. English v3.1 exams ended on 16 May 2026 and v3.1 exams in other languages end on 16 November 2026; after that, only v4.0 can be taken.",
    },
    {
      question: "Where can I take the CTAL-TA exam?",
      answer:
        "Through an ISTQB Member Board or an ISTQB-recognised Exam Provider. They decide the delivery options, languages and fees in your region.",
    },
    {
      question: "Are CertRamp's CTAL-TA questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the published ISTQB CTAL-TA v4.0 syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISTQB CTAL-TA v4.0 Exam Guide: Format, Syllabus & Study Plan",
    description:
      "CTAL-TA v4.0 guide: 45 questions, 78 points, 120 minutes, pass mark 51 (65%), the five chapters, what changed from v3.1 and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
