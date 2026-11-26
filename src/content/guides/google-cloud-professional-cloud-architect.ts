import type { ExamGuide } from "@/config/types";

/**
 * Google Cloud Professional Cloud Architect exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts.
 */
export const gcpProfessionalCloudArchitectGuide: ExamGuide = {
  slug: "google-cloud-professional-cloud-architect",
  summary:
    "The Google Cloud Professional Cloud Architect exam has 50 to 60 multiple-choice and multiple-select questions in 2 hours, and 20–30% of them are case study questions. Designing and planning a cloud solution architecture is the largest section at about 25%.",
  whoFor: [
    "Cloud architects who design solutions on Google Cloud",
    "Engineers moving from AWS or Azure architecture to Google Cloud",
    "Consultants who advise on Google Cloud migrations",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 50 to 60 questions in 2 hours, multiple choice and multiple select. Between 20% and 30% are based on case studies, fictional companies with business and technical requirements. You can take it online or at a test centre, in English or Japanese.",
        "There are no prerequisites. Google recommends 3+ years of industry experience, including at least a year designing and managing solutions on Google Cloud.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Designing and planning a solution architecture is about 25%, managing and provisioning infrastructure and designing for security and compliance about 17.5% each, analysing and optimising processes about 15%, and managing implementation and ensuring operations excellence about 12.5% each.",
        "Read the official case studies before the exam. Questions about them reward linking each design choice to a stated business or technical requirement.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the exam guide and case studies", body: "Use the six sections as your checklist and study each published case study in detail." },
        { title: "Learn services by decision", body: "For compute, storage, databases, networking and security, know which option to choose under which constraints." },
        { title: "Practise requirement mapping", body: "For each case study, write down which requirement drives which design choice." },
        { title: "Build in a Google Cloud project", body: "Hands-on work with IAM, networking and managed services makes scenarios easier to judge." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 2 hours, including case study questions." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Seeing the case studies for the first time in the exam.",
        "Choosing technically elegant designs that ignore a business requirement.",
        "Mapping everything to AWS or Azure services instead of learning Google Cloud's own options.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does the Professional Cloud Architect exam have?", answer: "50 to 60 multiple-choice and multiple-select questions." },
    { question: "How long is the exam?", answer: "2 hours." },
    { question: "Are there case study questions?", answer: "Yes. They make up 20–30% of the exam." },
    { question: "In which languages is it offered?", answer: "English and Japanese." },
    {
      question: "Are CertRamp's questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Google Cloud exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "Google Cloud Professional Cloud Architect Exam Guide 2026",
    description:
      "Prepare for Google Cloud Professional Cloud Architect: 50–60 questions in 2 hours, case studies, the six sections with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
