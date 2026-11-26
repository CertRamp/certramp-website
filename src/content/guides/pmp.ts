import type { ExamGuide } from "@/config/types";

/**
 * PMI PMP exam guide (July 2026 exam update). Exam facts come from the verified
 * `exam` record in src/config/certifications.ts.
 */
export const pmpGuide: ExamGuide = {
  slug: "pmp",
  summary:
    "The PMP exam has 180 questions (170 scored, 10 unscored) in 240 minutes with two 10-minute breaks. Since the July 2026 update it covers three domains: People (33%), Process (41%) and Business Environment (26%). You need 35 hours of project management education and 24 to 60 months of project leadership experience, depending on your education.",
  whoFor: [
    "Project managers who lead projects and want the most widely recognised PM certification",
    "Team leads and coordinators who already meet PMI's experience requirement",
    "CAPM holders moving on to the professional level",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The PMP exam has 180 questions, 10 of which are unscored pretest questions, and lasts 240 minutes with two 10-minute breaks. Besides single-response multiple choice you will see multiple response, scenario and graphic-based items; computer-based tests can also include matching, point-and-click and pull-down list items.",
        "You can test at a test centre or online with a proctor; in Mainland China the exam is paper-based only.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Process is the largest domain at 41%, covering planning, scope, value-based delivery, resources, procurement, finance, quality, schedule, status and closure. People (33%) is about vision, conflict, team leadership and stakeholders, and Business Environment (26%) about governance, compliance and change control.",
        "PMP questions are situational. They describe a project problem and ask what the project manager should do. Look for the answer that follows the right process, involves the right people and fits the delivery approach described, whether predictive, agile or hybrid.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Confirm your eligibility",
          body: "Check your 35 hours of education and your project leadership months against PMI's rules. From 1 December 2026, live training only counts if a PMI Authorized Training Partner, a China REP or an eligible accredited programme delivers it.",
        },
        {
          title: "Read the July 2026 Examination Content Outline",
          body: "Use the three domains and their tasks as your checklist, and make sure your material covers the July 2026 update.",
        },
        {
          title: "Learn predictive and agile side by side",
          body: "For each topic, know how a predictive and an agile team would handle it. Many questions only make sense once you know which approach the scenario uses.",
        },
        {
          title: "Practise situational reasoning",
          body: "For every practice question, write down why the right answer is the best next step and why the others come too early, too late or skip a stakeholder.",
        },
        {
          title: "Train your stamina",
          body: "Take full 180-question practice exams in 240 minutes, using the two breaks the way you will on exam day.",
        },
        {
          title: "Book with a buffer",
          body: "Book once you are consistently above your target in several full practice exams.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using material written for the exam before the July 2026 update.",
        "Answering from your company's habits instead of PMI's approach.",
        "Escalating to the sponsor too early when the project manager should act first.",
        "Ignoring agile and hybrid scenarios.",
        "Never practising a full-length exam, then running out of focus in the last hour.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the PMP exam have?",
      answer: "180 questions: 170 scored and 10 unscored pretest questions.",
    },
    {
      question: "How long is the PMP exam?",
      answer: "240 minutes, with two 10-minute breaks.",
    },
    {
      question: "What are the PMP domains and weights?",
      answer: "People 33%, Process 41% and Business Environment 26%, according to the July 2026 Examination Content Outline.",
    },
    {
      question: "What do I need to apply?",
      answer:
        "35 hours of project management education (waived for active CAPM holders) and experience leading projects in the last 10 years: 60 months with a secondary diploma, 48 months with an associate degree, 36 months with a bachelor's degree or higher, or 24 months with a degree from a PMI GAC-accredited programme.",
    },
    {
      question: "Are CertRamp's PMP questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published PMI Examination Content Outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "PMP Exam Guide 2026: July Update, Domains & Study Plan",
    description:
      "Prepare for the updated PMP exam: 180 questions in 240 minutes, People 33%, Process 41%, Business Environment 26%, eligibility rules and a six-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
