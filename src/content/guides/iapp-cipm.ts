import type { ExamGuide } from "@/config/types";

/**
 * IAPP CIPM exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const iappCipmGuide: ExamGuide = {
  slug: "iapp-cipm",
  summary:
    "The IAPP CIPM (Certified Information Privacy Manager) tests whether you can build, run and improve a privacy programme: set its scope and governance, assess data and vendors, protect personal data, measure and audit performance, and respond to rights requests and incidents. The exam has 90 multiple-choice questions in 2.5 hours with an optional 15-minute break, you need 300 on the IAPP scale of 100–500 to pass, and it follows body of knowledge 4.2.0, effective 1 September 2025.",
  whoFor: [
    "Privacy programme managers, data protection officers and privacy team leads",
    "Compliance, risk and audit professionals who oversee privacy controls",
    "Security, legal and operations professionals who are moving into privacy management",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What the CIPM actually tests",
      paragraphs: [
        "The body of knowledge has six domains. Two cover setting up the programme: Privacy Program: Developing a Framework (14–18 questions) and Privacy Program: Establishing Program Governance (12–16). Four follow the privacy programme operational life cycle: Assessing Data (12–16), Protecting Personal Data (9–13), Sustaining Program Performance (7–9) and Responding to Requests and Incidents (10–14). The blueprint gives a minimum and maximum number of questions per domain rather than a percentage.",
        "Unlike the CIPP exams, the CIPM is not built around one jurisdiction's law. It asks how a privacy manager turns legal requirements into a working programme: strategy, governance model, policies, roles, metrics, training, data inventories, vendor and merger due diligence, privacy by design, audits, assessments such as PIAs and DPIAs, data subject requests and breach response.",
      ],
    },
    {
      id: "how-the-exam-is-structured",
      heading: "How the exam and blueprint are structured",
      paragraphs: [
        "Version 4.2.0 of the body of knowledge and exam blueprint took effect on 1 September 2025 and supersedes version 4.1.0. Each domain is broken into competencies (for example II.A \"Create policies and processes to be followed across all stages of the privacy program life cycle\") with their own question ranges, and each competency lists performance indicators. Among the performance indicators is understanding the privacy risks posed by the use of AI in the business environment (I.C).",
        "You sit the exam through Pearson VUE, at a test centre or online with OnVUE, in English, French, German, Chinese or Brazilian Portuguese. Halfway through you are offered a 15-minute break; whether or not you take it, you must finish and submit the first half first and cannot return to it afterwards. You may be asked to read a scenario about a fictional organisation and answer several questions about it.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the body of knowledge",
          body: "Download BoK 4.2.0 from the IAPP and rate every performance indicator as known, unsure or new. Use the blueprint's question ranges to decide where your time goes: Domain I alone is worth 14–18 questions.",
        },
        {
          title: "Learn the programme vocabulary",
          body: "Be precise about governance models (centralised, local, hybrid), the roles of the privacy team and stakeholders, and the difference between policies, procedures, standards and guidelines.",
        },
        {
          title: "Walk through the operational life cycle",
          body: "Take one organisation and follow it through assess, protect, sustain and respond: data inventory and gap analysis, vendor and merger due diligence, controls and privacy by design, metrics and audits, then rights requests and incident response.",
        },
        {
          title: "Know the assessment types",
          body: "Understand the purpose and timing of PIAs, DPIAs, transfer impact assessments, legitimate interests assessments and privacy threshold analyses, and when one leads to another.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams of 90 questions in 2.5 hours, including scenario questions, and read every explanation — including for the questions you answered correctly.",
        },
        {
          title: "Book when your results are stable",
          body: "Book once you pass several practice exams with a margin. The exam must be taken within one year of purchase, and once certified you need 20 CPE credits per two-year term and the certification maintenance fee.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying it like a law exam. The CIPM asks what a programme manager should do next, not which article says what.",
        "Picking the technical fix. Many questions reward the governance step — assigning ownership, updating a policy, consulting stakeholders — over a single technical control.",
        "Neglecting metrics and audits. Domain V is small, but metrics also appear in governance (II.C), and you need to know which metric suits which audience and objective.",
        "Treating incident response as notification only. The body of knowledge covers containment, remediation, an incident register and post-incident reviews that improve the plan.",
        "Forgetting mergers, acquisitions and divestitures. Due diligence on shared data and post-transaction risk mitigation appear in more than one domain.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the CIPM exam and what is the passing score?",
      answer:
        "The exam has 90 multiple-choice questions and an allotted time of 2.5 hours, with a 15-minute break offered halfway through. All core IAPP exams are scored on a scale of 100–500, and you need 300 or above to pass.",
    },
    {
      question: "Which version of the CIPM body of knowledge applies?",
      answer:
        "Body of knowledge and exam blueprint version 4.2.0, effective 1 September 2025. It has six domains and gives a minimum and maximum number of questions for each.",
    },
    {
      question: "How do I keep the CIPM certification?",
      answer:
        "You need 20 continuing privacy education (CPE) credits per two-year certification term and the certification maintenance fee. The fee is included in IAPP membership; the IAPP store lists it at USD 250 per two-year term for those without membership.",
    },
    {
      question: "In which languages can I take the CIPM?",
      answer:
        "English, French, German, Chinese and Brazilian Portuguese. The IAPP states that the translations were made by professional firms without machine translation.",
    },
    {
      question: "Are CertRamp's CIPM questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the IAPP's published body of knowledge and exam blueprint. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CIPM Exam Guide 2026: Domains, Format & Study Plan",
    description:
      "CIPM guide for body of knowledge 4.2.0: 90 questions, 2.5 hours, pass mark 300 of 500, the six privacy programme domains and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
