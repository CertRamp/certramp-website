import type { ExamGuide } from "@/config/types";

/**
 * IAPP CIPP/E exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const iappCippEGuide: ExamGuide = {
  slug: "iapp-cipp-e",
  summary:
    "The IAPP CIPP/E (Certified Information Privacy Professional/Europe) tests whether you know European data protection law — above all the GDPR — well enough to apply it to real situations. The exam has 90 multiple-choice questions in 2.5 hours with a 15-minute break, you need 300 on the IAPP scale of 100–500 to pass, and it follows body of knowledge 1.3.3, effective 1 September 2025.",
  whoFor: [
    "Privacy, compliance and legal professionals who advise on the GDPR",
    "Data protection officers and privacy team members in organisations that process EU personal data",
    "Security, IT and HR professionals who need a structured understanding of European data protection law",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What the CIPP/E actually tests",
      paragraphs: [
        "The body of knowledge has five domains: Introduction to European Data Protection (7–13 questions), European Data Protection Law and Regulation (18–28), European Data Processing (13–21), European Data Protection: Scope and Accountability (8–18) and Compliance with European Data Protection Law and Regulation (8–16). The blueprint gives a minimum and maximum number of questions per domain rather than a percentage.",
        "The GDPR runs through every domain: key definitions, security and breach notification, data subject rights, the principles, lawful bases, transparency, international transfers, territorial and material scope, accountability, supervision and fines. Around it sit the history and institutions (Council of Europe Convention 108, the Data Protection Directive, the EU institutions) and the practical areas of employment, surveillance, direct marketing, cookies, cloud, social media and AI.",
      ],
    },
    {
      id: "how-the-exam-is-structured",
      heading: "How the exam and blueprint are structured",
      paragraphs: [
        "Version 1.3.3 of the body of knowledge and exam blueprint took effect on 1 September 2025. Each domain is broken into competencies (for example II.C \"Understand data subjects' rights\") with their own question ranges, and each competency lists performance indicators. The competencies with the most questions are data subjects' rights (II.C, 8–12) and data security (II.B, 7–11).",
        "You sit the exam through Pearson VUE, at a test centre or online with OnVUE. Halfway through you are offered a 15-minute break; you must submit the first half before the break ends and cannot return to it afterwards. Some questions are scenario-based, describing a fictional organisation and asking how the law applies. The exam is available in English, French and German.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the body of knowledge",
          body: "Download BoK 1.3.3 from the IAPP and rate every performance indicator as known, unsure or new. Use the blueprint's question ranges to decide where your time goes.",
        },
        {
          title: "Read the GDPR itself",
          body: "Read the articles, not only summaries — especially Articles 3–7, 9, 12–22, 24–39, 44–49 and 83. Note the exact time limits, thresholds and exceptions; many questions turn on them.",
        },
        {
          title: "Learn the context around the GDPR",
          body: "Cover Convention 108, Directive 95/46/EC, the roles of the EU institutions, the ePrivacy Directive for cookies and electronic marketing, and the Schrems rulings that shaped the transfer rules.",
        },
        {
          title: "Work through the practical areas",
          body: "Domain V applies the law to employment, surveillance, direct marketing and internet technology. Practise reasoning about lawful bases, transparency and proportionality in each setting.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams of 90 questions in 2.5 hours, including scenario questions, and read every explanation — including for the questions you answered correctly.",
        },
        {
          title: "Book when your results are stable",
          body: "Book once you pass several practice exams with a margin. The exam must be taken within one year of purchase, and once certified you need 20 CPE credits per two-year term.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Learning summaries instead of the text. Questions often hinge on a detail such as \"without undue delay\", \"one month\" or \"whichever is higher\".",
        "Treating consent as the default lawful basis. Know all six bases in Article 6 and when consent cannot be freely given, for example in employment.",
        "Confusing the controller's and the processor's duties, especially for breach notification and sub-processors.",
        "Skipping the history and institutions. Domain I is worth 7–13 questions and covers Convention 108, the Directive and the EU institutions.",
        "Mixing up the GDPR and the ePrivacy rules. Cookie consent and electronic marketing come from the ePrivacy Directive as implemented nationally, with the GDPR defining what valid consent means.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the CIPP/E exam and what is the passing score?",
      answer:
        "The exam has 90 multiple-choice questions and an allotted time of 2.5 hours, with a 15-minute break halfway through. All core IAPP exams are scored on a scale of 100–500, and you need 300 or above to pass.",
    },
    {
      question: "Which version of the CIPP/E body of knowledge applies?",
      answer:
        "Body of knowledge and exam blueprint version 1.3.3, effective 1 September 2025. It has five domains and gives a minimum and maximum number of questions for each.",
    },
    {
      question: "How do I keep the CIPP/E certification?",
      answer:
        "You need 20 continuing privacy education (CPE) credits per two-year certification term and the certification maintenance fee. The fee is included in IAPP membership; the IAPP store lists it at USD 250 per two-year term for those without membership.",
    },
    {
      question: "In which languages can I take the CIPP/E?",
      answer:
        "English, French and German. The IAPP states that the translations were made without machine translation.",
    },
    {
      question: "Are CertRamp's CIPP/E questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the IAPP's published body of knowledge and exam blueprint. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CIPP/E Exam Guide 2026: GDPR Domains, Format & Study Plan",
    description:
      "CIPP/E guide for body of knowledge 1.3.3: 90 questions, 2.5 hours, pass mark 300 of 500, the five domains and a six-step GDPR study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
