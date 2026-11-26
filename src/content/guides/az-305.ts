import type { ExamGuide } from "@/config/types";

/**
 * Microsoft AZ-305 exam guide. Exam facts come from the verified `exam` record
 * in src/config/certifications.ts.
 */
export const az305Guide: ExamGuide = {
  slug: "az-305",
  summary:
    "AZ-305: Designing Microsoft Azure Infrastructure Solutions is the exam for the Azure Solutions Architect Expert certification. You pass with a scaled score of 700, and you also need the Azure Administrator Associate certification (AZ-104) to earn the Expert title. The skills measured (as of 17 April 2026) cover identity, governance and monitoring, data storage, business continuity and infrastructure.",
  whoFor: [
    "Azure administrators who want to move into solution architecture",
    "Architects and consultants who design Azure solutions for customers",
    "AZ-104 holders working toward the Azure Solutions Architect Expert certification",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AZ-305 is scheduled through Pearson VUE and offered in ten languages, including English and German. You need a scaled score of 700 or more to pass.",
        "Passing AZ-305 alone is not enough for the Azure Solutions Architect Expert certification: Microsoft also requires the Azure Administrator Associate certification (AZ-104). Microsoft recommends experience in IT operations, Azure administration, development and DevOps.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Design infrastructure solutions is the largest area at 30–35%: compute, application architecture, migrations and networking. Identity, governance and monitoring follows at 25–30%, data storage at 20–25% and business continuity at 15–20%.",
        "AZ-305 is a design exam, not an administration exam. Questions describe requirements and constraints and ask which service or design meets them. Know the trade-offs between similar services (for example storage options, database tiers or networking choices) rather than the steps to configure them.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the AZ-305 study guide",
          body: "Use Microsoft Learn's study guide with the skills measured as of 17 April 2026 as your checklist.",
        },
        {
          title: "Close your AZ-104 gaps first",
          body: "You need AZ-104 for the Expert certification anyway, and design questions assume solid administration knowledge.",
        },
        {
          title: "Build comparison tables",
          body: "For compute, storage, databases, networking and identity, list the options side by side with their limits, costs and availability features.",
        },
        {
          title: "Study reference architectures",
          body: "Work through Azure Architecture Center patterns for high availability, disaster recovery and migration, and explain why each design choice was made.",
        },
        {
          title: "Practise requirement-driven questions",
          body: "Answer timed practice exams and, for each scenario, identify the deciding requirement before choosing a service.",
        },
        {
          title: "Book with a buffer",
          body: "Book once you score clearly above the pass mark in several practice exams.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Preparing as for an administration exam: AZ-305 asks for design decisions.",
        "Underestimating identity, governance and monitoring, which is up to 30% of the exam.",
        "Forgetting that the Expert certification also needs AZ-104.",
        "Memorising service names without their limits and trade-offs.",
        "Using material that does not match the skills measured as of 17 April 2026.",
      ],
    },
  ],
  faq: [
    {
      question: "What is the AZ-305 passing score?",
      answer: "A scaled score of 700 or greater.",
    },
    {
      question: "Do I need AZ-104 for AZ-305?",
      answer:
        "You can take AZ-305 on its own, but the Microsoft Certified: Azure Administrator Associate certification (AZ-104) is required to earn the Azure Solutions Architect Expert certification.",
    },
    {
      question: "Which skills area is the largest?",
      answer:
        "Design infrastructure solutions with 30–35%, followed by identity, governance and monitoring (25–30%), data storage (20–25%) and business continuity (15–20%).",
    },
    {
      question: "Is AZ-305 available in German?",
      answer: "Yes. It is offered in ten languages, including English and German.",
    },
    {
      question: "Are CertRamp's AZ-305 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AZ-305 Exam Guide 2026: Skills Measured, Passing Score & Plan",
    description:
      "Prepare for AZ-305 Azure Solutions Architect Expert: skills measured as of April 2026 with weights, 700 to pass, the AZ-104 requirement and a six-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
