import type { ExamGuide } from "@/config/types";

/**
 * CFE exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const cfeGuide: ExamGuide = {
  slug: "cfe",
  summary:
    "The ACFE Certified Fraud Examiner (CFE) exam has three sections since 2 June 2026: Fraud Schemes and Financial Crimes (120 questions, 2.5 hours), Fraud Investigations and Legal Issues (120 questions, 2.5 hours) and Fraud Prevention and Deterrence (70 questions, 1.5 hours). You need at least 75% in each section, and all sections must be taken within a 60-day eligibility window, online or at a Prometric testing centre.",
  whoFor: [
    "Internal and external auditors, compliance officers and accountants who want a fraud-specific credential",
    "Investigators, loss prevention and corporate security professionals who examine fraud allegations",
    "Risk, legal and anti-fraud specialists who design fraud prevention programmes",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What the CFE exam actually tests",
      paragraphs: [
        "Fraud Schemes and Financial Crimes covers how fraud schemes and financial crimes against organisations and individuals work, and how fraud examiners prevent and detect them. Expect the occupational fraud schemes of the ACFE Fraud Tree — asset misappropriation, corruption and financial statement fraud — and how each one is concealed and uncovered. It also includes basic accounting principles and financial statement fraud.",
        "Fraud Investigations and Legal Issues covers running an investigation and its legal side: employee rights during investigations, rules and procedures for collecting evidence, gathering and analysing data, conducting interviews, report writing and navigating the legal system. Fraud Prevention and Deterrence covers why people commit fraud, corporate governance, the role of managers and auditors, fraud risk assessment, fraud risk management, building a fraud prevention programme and ethics in fraud examination.",
        "The questions are multiple choice and true/false, and every section is closed book. The ACFE does not publish weights beyond the question counts, but the two 120-question sections together make up most of the exam.",
      ],
    },
    {
      id: "june-2026-update",
      heading: "What changed with the June 2026 exam",
      paragraphs: [
        "The ACFE launched a new version of the CFE exam on 2 June 2026, based on its 2024 Job Task Analysis. The old four sections (Financial Transactions and Fraud Schemes, Law, Investigation, and Fraud Prevention and Deterrence) were replaced by three sections with new question counts and time limits. The ACFE states that the rigour and difficulty are comparable to the old exam.",
        "If you passed sections of the old exam, they carry over (subject to the ACFE's attempt and result-expiration policies): Financial Transactions and Fraud Schemes counts towards Fraud Schemes and Financial Crimes, Fraud Prevention and Deterrence carries over directly, and Law and Investigation count towards Fraud Investigations and Legal Issues only if you passed both. The ACFE does not recommend studying with materials bought before March 2026, so check that your prep material targets the new structure.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Check your eligibility first",
          body: "You must be an ACFE Associate Member and need 40 eligibility points to sit the exam (a bachelor's degree typically gives 40). To be certified you need 50 points and at least two years of fraud-related professional experience. Use the ACFE eligibility calculator before you plan your dates.",
        },
        {
          title: "Map yourself against the content outline",
          body: "Go through the ACFE CFE Exam Content Outline for the 2026 exam and mark each topic as known, unsure or new. Lawyers often need more time on schemes and accounting; accountants often need more on interviews, evidence and legal procedure.",
        },
        {
          title: "Learn the Fraud Tree and the investigation method",
          body: "Know every branch of the Fraud Tree well enough to classify a scheme from a short case description. For investigations, learn predication, the fraud theory approach, the order of interviews and the rules for handling evidence and writing reports.",
        },
        {
          title: "Study with official material",
          body: "Work through the Fraud Examiners Manual or the ACFE's own exam preparation options. Make sure the edition matches the June 2026 exam.",
        },
        {
          title: "Practise each section under time pressure",
          body: "Take timed practice exams per section: 120 questions in 2.5 hours, or 70 questions in 1.5 hours, works out at a little over one minute per question. Read every explanation, including for the questions you got right.",
        },
        {
          title: "Plan the 60-day window",
          body: "Only activate your eligibility when you are ready to sit all sections within 60 days. Book each section separately, ideally about 30 days ahead. If you fail a section, the ACFE issues a new 60-day window for the retake once you pay the retake fee.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Mixing up skimming and cash larceny. Skimming takes cash before it is recorded in the books; cash larceny takes it after it has been recorded.",
        "Treating illegal gratuities as bribery. A gratuity rewards a decision after it has been made; a bribe is offered to influence the decision.",
        "Ignoring the legal side. Fraud Investigations and Legal Issues now combines the old Law and Investigation sections, so evidence rules and legal procedure are tested alongside interviewing and report writing.",
        "Giving opinions on guilt. Fraud examination reports state facts; the CFE Code of Professional Standards says no opinion is expressed on the legal guilt or innocence of any person.",
        "Using pre-2026 material without checking. Section names, question counts and time limits changed on 2 June 2026.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the CFE exam have and what is the passing score?",
      answer:
        "310 questions across three sections: 120 in Fraud Schemes and Financial Crimes, 120 in Fraud Investigations and Legal Issues and 70 in Fraud Prevention and Deterrence. To pass, you must answer at least 75% of the questions in each section correctly.",
    },
    {
      question: "How long do I have to complete all sections?",
      answer:
        "Your eligibility window is 60 days from activation. Each section is scheduled separately and taken in one sitting. If you need a retake, the ACFE issues a new 60-day window. You have up to five attempts per section, and you must pass all sections within your two-year application window (a one-year extension is available).",
    },
    {
      question: "Can I take the CFE exam online, and in which languages?",
      answer:
        "Yes. The exam is live-proctored online through Prometric's ProProctor platform or taken at a Prometric testing centre. It is available only in English; the ACFE provides translated key terms in several languages with its study materials.",
    },
    {
      question: "What do I need to do to keep the CFE credential?",
      answer:
        "CFEs must earn at least 20 CPE credits in each annual compliance period, of which at least 10 relate to fraud detection and deterrence and 2 to ethics, and keep their ACFE membership current.",
    },
    {
      question: "Are CertRamp's CFE questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the ACFE's published CFE exam content. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CFE Exam Guide 2026: Sections, Format & Study Plan",
    description:
      "CFE guide for the three-section ACFE exam launched June 2026: 310 questions, 75% per section, 60-day window, eligibility points and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
