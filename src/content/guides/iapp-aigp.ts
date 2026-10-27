import type { ExamGuide } from "@/config/types";

/**
 * IAPP AIGP exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const iappAigpGuide: ExamGuide = {
  slug: "iapp-aigp",
  summary:
    "The IAPP AIGP (Artificial Intelligence Governance Professional) tests whether you can govern AI across its life cycle: set up governance structures and policies, apply privacy, AI-specific and other laws and standards, and oversee both the development and the deployment of AI systems. The exam has 100 questions in 2.75 hours with an optional 15-minute break, you need 300 on the IAPP scale of 100–500 to pass, and it follows body of knowledge 2.1, effective 2 February 2026.",
  whoFor: [
    "Privacy, legal and compliance professionals who are taking on responsibility for AI",
    "Risk, governance and ethics leads who build or run an AI governance programme",
    "Product, data science and procurement professionals who develop, buy or deploy AI systems",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What the AIGP actually tests",
      paragraphs: [
        "The body of knowledge has four domains: Understanding the foundations of AI governance (16–20 questions), Understanding how laws, standards and frameworks apply to AI (19–23), Understanding how to govern AI development (21–25) and Understanding how to govern AI deployment and use (21–25). The blueprint gives a minimum and maximum number of questions per domain rather than a percentage.",
        "Two of the four domains follow the AI life cycle from two angles: the organisation that designs, trains and releases an AI system, and the organisation that decides to deploy and use one, often from a vendor. Around them sit the foundations (what AI is, its risks and harms, roles, training and policies) and the legal domain: existing privacy law, intellectual property and non-discrimination law, AI-specific laws such as the EU AI Act, and standards and frameworks such as the OECD AI principles, the NIST AI Risk Management Framework and ISO AI standards.",
      ],
    },
    {
      id: "how-the-exam-is-structured",
      heading: "How the exam and blueprint are structured",
      paragraphs: [
        "Version 2.1 of the body of knowledge and exam blueprint took effect on 2 February 2026 and supersedes version 2.0.1. Each domain is broken into competencies (for example II.C \"Understand the main elements of AI-specific laws\") with their own question ranges, and each competency lists performance indicators. The competencies with the most questions are IV.C, governing the deployment and use of the AI system (9–11), and III.C, governing the release, monitoring and maintenance of the AI system (8–10).",
        "You sit the exam through Pearson VUE, at a test centre or online with OnVUE, and it is offered in English. Halfway through you are offered a 15-minute break; whether or not you take it, you must finish and submit the first half first and cannot return to it afterwards. IAPP exams use multiple-choice questions, some with more than one correct answer, and you may be asked to read a scenario and answer several questions about it.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the body of knowledge",
          body: "Download BoK 2.1 from the IAPP and rate every performance indicator as known, unsure or new. Use the blueprint's question ranges to decide where your time goes: the two life-cycle domains together account for 42–50 questions.",
        },
        {
          title: "Learn the AI basics in governance terms",
          body: "You do not need to build models, but you must know the main types of AI, how machine learning systems are trained, tested and monitored, and the typical risks and harms — bias, opacity, drift, security and privacy failures.",
        },
        {
          title: "Read the core legal and framework texts",
          body: "Work through the EU AI Act (prohibited practices, high-risk classification, transparency duties, general-purpose AI models and the roles of provider and deployer), the NIST AI RMF and its Playbook, and the OECD AI principles. Then note how the GDPR and other privacy laws apply to AI.",
        },
        {
          title: "Follow one AI system through its life cycle",
          body: "Take an example use case and walk it from business case and impact assessment through data governance, testing, release and monitoring, then repeat from the deployer's side: vendor due diligence, contract terms, human oversight and decommissioning.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams of 100 questions in 2.75 hours, including scenario questions, and read every explanation — including for the questions you answered correctly.",
        },
        {
          title: "Book when your results are stable",
          body: "Book once you pass several practice exams with a margin. The exam must be taken within one year of purchase, and once certified you need 20 continuing education credits per two-year term.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying only the EU AI Act. It matters, but the legal domain also covers privacy, intellectual property, non-discrimination and product liability law as well as standards and frameworks.",
        "Confusing the provider's and the deployer's duties. Many questions turn on which party in the AI value chain is responsible for a given obligation.",
        "Treating governance as a one-off approval. The body of knowledge expects monitoring, maintenance, retraining, incident handling and decommissioning throughout the life cycle.",
        "Skipping the vendor side. Domain IV covers buying and licensing AI, including contract terms, vendor risk and impact assessments of third-party systems.",
        "Mixing up the four NIST AI RMF functions. Know what Govern, Map, Measure and Manage each cover and that Govern is cross-cutting.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the AIGP exam and what is the passing score?",
      answer:
        "The exam has 100 questions and an allotted time of 2.75 hours, with a 15-minute break offered halfway through. All core IAPP exams are scored on a scale of 100–500, and you need 300 or above to pass.",
    },
    {
      question: "Which version of the AIGP body of knowledge applies?",
      answer:
        "Body of knowledge and exam blueprint version 2.1, effective 2 February 2026. It has four domains and gives a minimum and maximum number of questions for each.",
    },
    {
      question: "How do I keep the AIGP certification?",
      answer:
        "The certification term is two years, starting the day after you pass. You need 20 continuing education credits that correspond to the AIGP body of knowledge and the certification maintenance fee. The fee is included in IAPP membership; the IAPP store lists it at USD 250 per two-year term for those without membership.",
    },
    {
      question: "Do I need a technical background to pass the AIGP?",
      answer:
        "The IAPP does not set formal prerequisites for the exam. The body of knowledge focuses on governance — policies, laws, risk and life-cycle oversight — but expects you to understand the main types of AI and how systems are built, tested and monitored.",
    },
    {
      question: "Are CertRamp's AIGP questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the IAPP's published body of knowledge and exam blueprint. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AIGP Exam Guide 2026: Domains, Format & Study Plan",
    description:
      "AIGP guide for body of knowledge 2.1: 100 questions, 2.75 hours, pass mark 300 of 500, the four AI governance domains and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
