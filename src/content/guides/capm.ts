import type { ExamGuide } from "@/config/types";

/**
 * CAPM exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 * CAPM, PMP and PMBOK are registered marks of the Project Management Institute;
 * they are used here only to name the certification and its reference material.
 */
export const capmGuide: ExamGuide = {
  slug: "capm",
  summary:
    "The PMI Certified Associate in Project Management (CAPM) exam tests foundational project management knowledge across four domains: fundamentals and core concepts (36%), predictive methods (17%), agile methods (20%) and business analysis (27%). You get 3 hours for 150 questions, of which 135 are scored, and you need a secondary diploma plus 23 hours of project management education to apply.",
  whoFor: [
    "Students and recent graduates who want a first, recognised project management credential",
    "Team members, coordinators and junior analysts who already work on projects and want to understand the whole picture",
    "Career changers who do not yet have the project experience that the PMP requires",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What the CAPM exam actually tests",
      paragraphs: [
        "The CAPM Examination Content Outline (2023 exam update) has four domains. Project Management Fundamentals and Core Concepts carries 36%: life cycles, planning, roles, executing planned strategies and problem-solving techniques. Business Analysis Frameworks follows with 27%, Agile Frameworks/Methodologies with 20% and Predictive, Plan-Based Methodologies with 17%.",
        "The questions check understanding rather than memorised process tables. Typical tasks: tell a risk from an issue, pick the right register or artefact, calculate a schedule or cost variance, find the critical path, decide whether a predictive or adaptive approach fits, choose a requirements-gathering technique, or say who owns the product backlog. PMI states that the exam is aligned with the PMBOK Guide, Seventh Edition, and that every question is supported by at least two references.",
      ],
    },
    {
      id: "exam-structure",
      heading: "How the exam is structured",
      paragraphs: [
        "The exam has 150 questions in 3 hours. 15 of them are unscored pretest questions placed at random, so treat every question as if it counts. After question 75 there is a 10-minute break; once you start it, you cannot go back to the first half. The optional tutorial and survey are not part of the 3 hours.",
        "Besides multiple choice, the outline lists drag-and-drop (matching), hot spot and animation or comic-strip items; online candidates see comic-strip items only. You can test at a Pearson VUE test centre or online with a proctor (in Mainland China the exam is paper-based). After your application is approved you have one year and up to three attempts to pass. The certification is then maintained in three-year cycles with 15 professional development units (PDUs).",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the content outline first",
          body: "Download the CAPM Examination Content Outline and go through every task and enabler. Mark each one as known, unsure or new, and plan your time by the domain weights — fundamentals and business analysis together make up 63%.",
        },
        {
          title: "Complete your 23 hours of education",
          body: "The 23 hours must be finished by the time you sit the exam. A course that follows the outline, such as one from a PMI Authorized Training Partner or PMI's own on-demand prep, covers the requirement and the content at the same time.",
        },
        {
          title: "Learn the predictive toolkit",
          body: "Practise work breakdown structures, network diagrams, the critical path and earned value variances (SV = EV − PV, CV = EV − AC) until you can do them quickly without notes.",
        },
        {
          title: "Learn agile and business analysis vocabulary",
          body: "Know the roles, events and artefacts of Scrum, the basics of Kanban, XP and SAFe, and the business analysis tools: user stories, use cases, the requirements traceability matrix, the product backlog, roadmaps and acceptance criteria.",
        },
        {
          title: "Practise under exam conditions",
          body: "Take timed practice exams with 75 questions per half and a short break in between. Read every explanation, including those for questions you answered correctly.",
        },
        {
          title: "Book when your results are stable",
          body: "Apply and book once you pass several practice exams with a margin. Remember that the one-year eligibility period starts when your application is approved.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Underestimating business analysis. At 27% it carries more weight than either the agile or the predictive domain, and many project management courses cover it only briefly.",
        "Studying only one approach. The outline expects you to know when predictive, adaptive or hybrid approaches fit — not just how one of them works.",
        "Confusing risks and issues. A risk is an uncertain future event; an issue is something that is already happening. They live in different logs.",
        "Mixing up roles. The sponsor funds and champions the project, the project manager leads the work and the product owner manages the backlog — expect questions on exactly these boundaries.",
        "Skipping the calculations. Critical path and variance questions are quick points if you practise them, and easy to lose under time pressure if you do not.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the CAPM exam have and how long is it?",
      answer:
        "150 questions in 3 hours. 135 questions are scored and 15 are unscored pretest questions. There is a 10-minute break after question 75, and you cannot return to the first half after starting it.",
    },
    {
      question: "What do I need to be eligible for the CAPM?",
      answer:
        "A high school diploma, GED or global equivalent, plus 23 hours of project management education completed by the time you take the exam. No project experience is required.",
    },
    {
      question: "How do I keep the CAPM certification?",
      answer:
        "The CAPM is renewed every three years through PMI's Continuing Certification Requirements programme. You need 15 PDUs per cycle; according to the CCR handbook at least 9 must be education PDUs, with at least 2 each in Ways of Working, Power Skills and Business Acumen.",
    },
    {
      question: "Which PMBOK Guide edition is the CAPM based on?",
      answer:
        "The current CAPM Examination Content Outline (2023 exam update) states that the exam is aligned with the PMBOK Guide, Seventh Edition. Check PMI's CAPM page before you book in case the outline changes.",
    },
    {
      question: "Are CertRamp's CAPM questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against PMI's published CAPM Examination Content Outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CAPM Exam Guide 2026: Domains, Format & Study Plan",
    description:
      "CAPM guide for the current PMI content outline: 150 questions in 3 hours, four domains with weights, eligibility, renewal and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
