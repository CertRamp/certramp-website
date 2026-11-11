import type { ExamGuide } from "@/config/types";

/**
 * PECB ISO/IEC 42001 Foundation exam guide. Exam facts come from the verified
 * `exam` record in src/config/certifications.ts (PECB course page, candidate
 * handbook, brochure and Exam Rules and Policies). This file holds CertRamp's
 * preparation advice. No text of the standard is reproduced beyond clause titles.
 */
export const isoIec42001FoundationGuide: ExamGuide = {
  slug: "iso-iec-42001-foundation",
  summary:
    "The PECB ISO/IEC 42001 Foundation exam confirms that you understand the core concepts of artificial intelligence and the requirements of ISO/IEC 42001 for an AI management system (AIMS). It is a closed-book exam of 40 multiple-choice questions with three options each, it lasts 1 hour, and you need 70% to pass. Passing it, together with the training and signing the PECB Code of Ethics, leads to the entry-level credential PECB Certificate Holder in ISO/IEC 42001 Foundation.",
  whoFor: [
    "Professionals who need a fundamental understanding of ISO/IEC 42001 and AI management",
    "Managers and consultants who advise on AI governance or plan to implement an AIMS",
    "People who manage, implement or oversee AI systems and AI-related projects",
    "Anyone planning to continue to the PECB ISO/IEC 42001 Lead Implementer or Lead Auditor courses",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What the exam actually tests",
      paragraphs: [
        "PECB splits the exam into two competency domains. Domain 1, Fundamental principles and concepts of an artificial intelligence management system (AIMS), has 15 of the 40 questions (37.5%). Domain 2, Artificial intelligence management system (AIMS), has the other 25 (62.5%). The candidate handbook lists the knowledge each domain covers, so it is the best checklist you have.",
        "Domain 1 is about vocabulary and background. Expect the purpose, scope and applicability of ISO/IEC 42001, the other ISO AI standards and what they are for, core AI concepts and terminology including AI agents, machine learning approaches such as supervised learning and deep learning, the structure of artificial neural networks, semantic and soft computing, management system concepts, the stages of the AI system life cycle, and the principles of responsible and trustworthy AI such as transparency.",
        "Domain 2 follows the requirements of the standard. It covers governance roles and responsibilities, AI risk criteria and the AI risk management process, AI system impact assessments and their effect on individuals, groups and society, third-party and customer relationships, context of the organization and interested parties, leadership and the AI policy, AI life cycle requirements up to decommissioning, Annex A controls and the statement of applicability, first-, second- and third-party audits, corrective action and the reporting of concerns, and operational monitoring such as event logging and anomaly detection.",
      ],
    },
    {
      id: "the-standard-in-brief",
      heading: "ISO/IEC 42001 in brief",
      paragraphs: [
        "ISO/IEC 42001:2023 was published on 18 December 2023 by ISO/IEC JTC 1/SC 42. It specifies requirements for establishing, implementing, maintaining and continually improving an AI management system, and it applies to organizations of any type and size that provide or use AI-based products or services. ISO describes it as the first AI management system standard and builds it on the Plan-Do-Check-Act approach.",
        "Like ISO/IEC 27001 and ISO 9001, it uses the common management system structure: clause 4 Context of the organization, 5 Leadership, 6 Planning, 7 Support, 8 Operation, 9 Performance evaluation and 10 Improvement. Clauses 4 to 10 are the requirements; Annex A lists reference controls, and the other annexes give guidance. If you already know another ISO management system standard, most of the structure will be familiar, and your study time goes into the AI-specific parts: AI risk assessment and treatment, the AI system impact assessment, the statement of applicability and the AI life cycle.",
        "Know the neighbouring standards by purpose: ISO/IEC 22989 for AI concepts and terminology, ISO/IEC 23053 for a framework for AI systems using machine learning, ISO/IEC 23894 for guidance on AI risk management, and ISO/IEC 42005 (published May 2025) for guidance on AI system impact assessments.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "The exam has 40 multiple-choice questions, each with three options and one correct answer, and lasts 1 hour. It is closed book: no training material, standards or notes are allowed. The passing score is 70%, which means at least 28 correct answers. If you take the exam in a language that is not your native language, you can request 10 extra minutes on the day of the exam.",
        "You take the exam either online through the PECB Exams application, supervised by a remote PECB invigilator through your camera, or on paper at the end of a classroom or live online course run by a PECB partner. For online multiple-choice exams the result is shown immediately; paper-based results arrive by email within two to four weeks. If you fail, the email lists the domains where you performed poorly.",
        "The PECB training course lasts two days (Day 1: Introduction to AIMS and ISO/IEC 42001; Day 2: AIMS and certificate exam) and earns 14 CPD credits. There are no prerequisites. Course participants who fail can retake the exam once for free within 12 months of the initial exam date; PECB requires a 15-day wait after a failed first attempt.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        {
          title: "Use the handbook as your checklist",
          body: "Copy the knowledge statements for both domains from the PECB candidate handbook and rate yourself on each. Domain 2 carries 25 questions, so most of your time belongs there.",
        },
        {
          title: "Learn the clause map",
          body: "Be able to say which clause a requirement sits in: interested parties in clause 4, the AI policy in clause 5, AI risk assessment, treatment and impact assessment in clause 6, competence and documented information in clause 7, operational controls in clause 8, internal audit and management review in clause 9, nonconformity and corrective action in clause 10.",
        },
        {
          title: "Separate risk from impact",
          body: "Practise explaining the difference between an AI risk assessment (identifying, analysing and evaluating risks against the organization's AI risk criteria and objectives) and an AI system impact assessment (focused on the potential consequences of a specific AI system for individuals, groups of individuals and society). Many questions turn on this distinction.",
        },
        {
          title: "Refresh the AI basics",
          body: "Revise supervised, unsupervised and reinforcement learning, what makes deep learning different, the layers of a neural network and the stages of the AI system life cycle. ISO/IEC 22989 and ISO/IEC 23053 use the same vocabulary.",
        },
        {
          title: "Practise at exam pace",
          body: "40 questions in 60 minutes is 1.5 minutes per question. Work through timed sets and review every wrong answer against the handbook statement it tests.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Treating the impact assessment as another name for the risk assessment. ISO/IEC 42001 requires both, and the impact assessment looks specifically at consequences for people and society.",
        "Assuming Annex A controls are all mandatory. The organization determines which controls are necessary and records the inclusions, exclusions and justifications in its statement of applicability.",
        "Thinking that using a supplier's AI model takes the system out of scope. Third-party and customer relationships are part of the AIMS.",
        "Mixing up audit types: an internal audit is first party, a customer auditing its supplier is second party, and a certification body audit is third party.",
        "Ignoring Domain 1 because it looks technical. It is 15 questions, and basic machine learning and neural network terms are easy points if you revise them.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on the ISO/IEC 42001 Foundation exam and how long is it?",
      answer:
        "The exam has 40 multiple-choice questions with three options each and lasts 1 hour. Domain 1 has 15 questions and Domain 2 has 25.",
    },
    {
      question: "What is the passing score?",
      answer:
        "You need 70%, which is at least 28 of the 40 questions.",
    },
    {
      question: "Is the exam open book?",
      answer:
        "No. The Foundation exam is closed book, so you cannot use the standard, training material or notes.",
    },
    {
      question: "Do I need experience to get the certificate?",
      answer:
        "No. The credential PECB Certificate Holder in ISO/IEC 42001 Foundation requires the training course, a passed exam and signing the PECB Code of Ethics. No professional, project or audit experience is needed.",
    },
    {
      question: "Can I retake the exam?",
      answer:
        "Yes. PECB does not limit the number of retakes, but you must wait 15 days after a failed first attempt. Course participants get one free retake within 12 months of the initial exam date.",
    },
    {
      question: "Are CertRamp's ISO/IEC 42001 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the knowledge statements in the PECB candidate handbook. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISO/IEC 42001 Foundation Exam Guide 2026 (PECB AIMS)",
    description:
      "PECB ISO/IEC 42001 Foundation guide: 40 questions, 1 hour, 70% to pass, closed book, both competency domains, the clause map and a five-step study plan.",
  },
  published: "2026-11-11",
  updated: "2026-11-11",
};
