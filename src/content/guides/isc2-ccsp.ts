import type { ExamGuide } from "@/config/types";

/**
 * CCSP exam guide. Exam facts are NOT written here — they come from the
 * verified `exam` record in src/config/certifications.ts so they only exist once.
 * This file holds CertRamp's own preparation advice.
 */
export const ccspGuide: ExamGuide = {
  slug: "isc2-ccsp",
  summary:
    "The CCSP (Certified Cloud Security Professional) is ISC2's certification for experienced security professionals who design, manage and secure data, applications and infrastructure in the cloud. Since 1 August 2026 the exam follows a new exam outline. It is a computerized adaptive test of 100 to 150 items in up to three hours, covering six domains.",
  whoFor: [
    "Security architects, engineers and consultants who work with cloud platforms",
    "Security managers responsible for cloud governance, risk and compliance",
    "Experienced IT and security professionals moving into cloud security roles",
  ],
  sections: [
    {
      id: "adaptive-format",
      heading: "How the adaptive exam works",
      paragraphs: [
        "ISC2 delivers the CCSP exam as a computerized adaptive test (CAT). According to ISC2, every candidate starts with an item well below the passing standard, and with each answer the computer's estimate of the candidate's ability becomes more precise. The exam therefore does not have a fixed length: you will see between 100 and 150 items within the three-hour limit.",
        "For preparation this has two consequences. First, you cannot plan around a fixed number of questions — practise keeping a steady pace instead. Three hours for up to 150 items leaves a little over a minute per item. Second, items are drawn from all six domains of the outline, so plan to cover every domain rather than relying on your strongest ones.",
      ],
    },
    {
      id: "whats-in-the-outline",
      heading: "What the 2026 exam outline emphasises",
      paragraphs: [
        "The outline effective 1 August 2026 keeps the six familiar domains, from cloud concepts to legal, risk and compliance. It includes dedicated objectives on artificial intelligence and machine learning: Objective 1.6 lists cloud threat detection and analysis, data source validation and verification, SOAR, ethical concerns and regulatory requirements; objective 2.9 covers the privacy and security of data sets and models.",
        "ISC2 publishes the full list of objectives and sub-topics in the official exam outline. Use it as your checklist: every objective you cannot explain in your own words is a gap.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the official outline first",
          body: "Download the CCSP exam outline from ISC2 and mark every objective as strong, unsure or unknown. This is your baseline before you open a book.",
        },
        {
          title: "Measure where you stand",
          body: "Take a diagnostic practice test before studying. The score matters less than the pattern: which domains cost you the most points?",
        },
        {
          title: "Study by domain, weakest first",
          body: "Work through one domain at a time with the official study material or a reputable study guide. Start where the diagnostic showed the biggest gaps.",
        },
        {
          title: "Practise after every domain",
          body: "Answer domain-specific questions straight after studying and read every explanation — including for the questions you got right.",
        },
        {
          title: "Simulate the real exam",
          body: "Take full-length timed practice exams. Practise holding your concentration for three hours and keeping a steady pace.",
        },
        {
          title: "Close the last gaps, then book",
          body: "Book the exam once you score consistently above your target on exam-level practice tests — not after a single good result.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying one cloud provider's services instead of vendor-neutral concepts. The CCSP tests principles that apply across providers.",
        "Neglecting Domain 6. Legal, privacy, audit and contract topics are unfamiliar to many technical candidates and need dedicated time.",
        "Memorising definitions without applying them. Practise choosing the best option in a scenario, not just recognising a term.",
        "Answering as a hands-on engineer only. Many questions are about risk, governance and responsibility — think about who is accountable.",
        "Skipping the explanations. The reasoning behind wrong options is where most of the learning happens.",
        "Only practising in short sessions. A three-hour adaptive exam needs stamina that only full-length practice builds.",
      ],
    },
    {
      id: "question-style",
      heading: "How to approach scenario questions",
      bullets: [
        "Identify the role you are asked to take — customer, provider, auditor or manager.",
        "Look for qualifiers such as BEST, FIRST, MOST and PRIMARY; several options may be correct, but only one fits the qualifier.",
        "Map the scenario to the cloud service model (IaaS, PaaS, SaaS) before deciding who is responsible.",
        "Prefer answers that address the root cause or follow due process over quick technical fixes.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on the CCSP exam?",
      answer:
        "Between 100 and 150. The CCSP is a computerized adaptive test, so the number of items depends on how you answer. The time limit is three hours.",
    },
    {
      question: "Which languages is the CCSP exam available in?",
      answer: "ISC2 lists English, Chinese, Japanese and German.",
    },
    {
      question: "What changed in the CCSP exam on 1 August 2026?",
      answer:
        "A new exam outline took effect. It keeps six domains and includes dedicated objectives on artificial intelligence and machine learning (objectives 1.6 and 2.9). Check the official ISC2 outline for the full list of objectives.",
    },
    {
      question: "What experience do I need for the CCSP?",
      answer:
        "ISC2 requires at least five years of cumulative, full-time IT work experience. Three of those years must be in cybersecurity and one year in one or more of the six CCSP exam domains. According to ISC2, an active CISSP can replace the entire requirement, and CSA's CCSK or a relevant bachelor's or master's degree can each replace one year. Candidates without enough experience can pass the exam and become an Associate of ISC2. See ISC2's CCSP experience requirements page for details.",
    },
    {
      question: "Are CertRamp's CCSP questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against ISC2's published exam outline. They are not taken from the real exam, and nobody can legitimately offer real exam questions.",
    },
  ],
  seo: {
    title: "CCSP Exam Guide 2026: Format, Domains & Study Plan",
    description:
      "CCSP exam guide for the ISC2 outline effective 1 August 2026: adaptive format, 100–150 items in 3 hours, all six domains and a six-step study plan.",
  },
  published: "2026-10-01",
  updated: "2026-10-01",
};
