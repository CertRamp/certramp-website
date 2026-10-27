import type { CertificationDetails } from "./types";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  CERTIFICATION DETAILS
 * ───────────────────────────────────────────────────────────────────────────
 *
 *  WHICH certifications exist comes from data/udemy-courses.csv (one row per
 *  Udemy course, grouped by the Slug column). Every slug in the CSV gets a
 *  landing page at /practice-exams/<slug> automatically.
 *
 *  THIS file adds optional details per slug: your own description, verified
 *  exam facts, topics, ClassMarker URLs, price, featured flag, SEO overrides.
 *
 *  Indexing rule: a page is indexed by search engines only once it has a
 *  `description`. Until then it is public and linked, but `noindex` — 80
 *  near-identical templated pages would count as thin content.
 *
 *  Never add facts you have not verified. Leave a field out instead.
 */
/** Date the exam facts below were checked against the official sources. */
const CHECKED = "2026-09-30";

export const certificationDetails: Record<string, CertificationDetails> = {
  /* ── Top 10 by September 2026 Udemy revenue — enriched and indexable ─────────
   * Exam facts: official sources only, checked 30 Sep 2026. Facts that could
   * only be found on third-party sites are deliberately left out.            */

  // Project management method (7th edition). Trademarked method names are not used on this
  // website — see the request from PeopleCert (October 2026). Keep all copy neutral.
  "project-management-foundation-7th-edition": {
    featured: true,
    description:
      "360 practice questions in six timed mock exams for the 7th edition Foundation exam of the widely used process-based project management method. Test 1 shows where you stand, Test 4 matches the real 60-question exam, and Tests 5 and 6 push beyond it — with an explanation for every answer option.",
    examOverview: [
      { label: "Exam provider", value: "PeopleCert" },
      { label: "Format", value: "60 multiple-choice questions, closed book" },
      { label: "Duration", value: "60 minutes" },
      { label: "Pass mark", value: "60%" },
      { label: "Prerequisites", value: "None" },
      { label: "Delivery", value: "Online, remotely proctored" },
    ],
    sources: [
      {
        label: "PeopleCert — Foundation exam page (7th edition)",
        url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-foundation-3579",
      },
      { label: "Official examination format", url: "https://www.prince2.com/usa/prince2-examination-format" },
    ],
    topics: [
      { title: "Principles", description: "The seven principles every project under the method must follow." },
      { title: "Practices", description: "Business case, organizing, plans, quality, risk, issues and progress." },
      { title: "Processes", description: "From starting up a project to closing it — who does what, and when." },
      { title: "People & tailoring", description: "Roles, people management and adapting the method to the context." },
    ],
    faq: [
      {
        question: "Are these practice exams for the 7th edition?",
        answer: "Yes. The questions are written for the 7th edition Foundation exam, not the earlier 6th edition.",
      },
    ],
    seo: {
      title: "PM Foundation (7th Edition) Practice Exams",
      description:
        "360 practice questions in six timed mock exams for the 7th edition project management Foundation exam — from a diagnostic start to beyond exam level.",
    },
    lastReviewed: CHECKED,
  },

  "project-management-practitioner-7th-edition": {
    featured: true,
    description:
      "420 scenario-based practice questions in six full Practitioner mock exams for the 7th edition of the method. Practise applying it to a scenario under time pressure, from your first attempt to beyond exam level, with an explanation for every option.",
    questionsPerTest: 70,
    examOverview: [
      { label: "Exam provider", value: "PeopleCert" },
      { label: "Format", value: "Scenario-based objective testing — 56 questions and sub-questions worth 70 marks" },
      { label: "Duration", value: "150 minutes" },
      { label: "Pass mark", value: "60%" },
      { label: "Book", value: "Open book — the official manual only" },
      {
        label: "Prerequisites",
        value: "The 7th edition Foundation or another qualifying certification (see PeopleCert for the full list)",
      },
    ],
    sources: [
      {
        label: "PeopleCert — Practitioner exam page (7th edition)",
        url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-practitioner-3581",
      },
      { label: "Official examination format", url: "https://www.prince2.com/usa/prince2-examination-format" },
    ],
    seo: {
      title: "PM Practitioner (7th Edition) Practice Exams",
      description:
        "Six full Practitioner mock exams with 420 scenario-based questions for the 7th edition project management method — apply it under exam conditions.",
    },
    lastReviewed: CHECKED,
  },

  "ireb-cpre-foundation-level": {
    featured: true,
    description:
      "270 practice questions for the CPRE Foundation Level exam on syllabus 3.3: six full exams of 45 questions in 75 minutes, modelled on the real exam format. Test 1 shows your level at a 60% bar, Test 6 goes beyond the real exam at 80%.",
    questionsPerTest: 45,
    // Verified 27 Oct 2026 against IREB syllabus 3.3.0, exam regulations 5.6.2 and fact sheet.
    exam: {
      officialName: "Certified Professional for Requirements Engineering (CPRE) — Foundation Level",
      examVersion: "Syllabus 3.3.0 (1 April 2026)",
      questionCount: "Approx. 45",
      questionTypes: "Multiple choice: single choice (A), pick several (P) and true/false (K); 1–3 points per question",
      duration: "75 minutes (90 minutes for non-native speakers, on written request)",
      passingScore: "At least 70% of the total points",
      delivery: "Through IREB-licensed certification bodies, at exam centres or — with some bodies — remotely",
      prerequisites: "None",
      status: "current",
      officialCertificationUrl: "https://cpre.ireb.org/en",
      domains: [
        { id: "d1", name: "Introduction and Overview of Requirements Engineering" },
        { id: "d2", name: "Fundamental Principles of Requirements Engineering" },
        { id: "d3", name: "Work Products and Documentation Practices" },
        { id: "d4", name: "Practices for Requirements Elaboration" },
        { id: "d5", name: "Process and Working Structure" },
        { id: "d6", name: "Management Practices for Requirements" },
        { id: "d7", name: "Tool Support" },
      ],
      sources: [
        { label: "IREB — CPRE Foundation Level syllabus 3.3.0 (PDF)", url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf" },
        { label: "IREB — Examination regulations 5.6.2 (PDF)", url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf" },
        { label: "IREB — CPRE Foundation Level fact sheet (PDF)", url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-fact-sheet/2c800f6747-1787039938/factsheet-cpre-fl-en.pdf" },
        { label: "IREB — Certification bodies", url: "https://cpre.ireb.org/en/training-certification/certification-bodies" },
      ],
      lastVerified: "2026-10-27",
    },
    features: ["Timed tests modelled on the real format: 45 questions in 75 minutes"],
    faq: [
      {
        question: "Which syllabus do the practice exams follow?",
        answer: "The CPRE Foundation Level syllabus version 3.3, the current version published by IREB in April 2026.",
      },
    ],
    seo: {
      title: "IREB CPRE Foundation Level Practice Exams (Syllabus 3.3)",
      description:
        "270 CPRE Foundation Level practice questions on syllabus 3.3: six timed exams of 45 questions in 75 minutes, from a 60% start to beyond exam level.",
    },
  },

  "sc-200": {
    featured: true,
    description:
      "360 practice questions in six progressive mock exams for Microsoft SC-200: Security Operations Analyst. Find out where you stand on security operations, incident response and threat hunting before you book the real exam.",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide + certification page).
    exam: {
      officialName: "Microsoft Certified: Security Operations Analyst Associate",
      examCode: "SC-200",
      examVersion: "Skills measured as of 21 October 2026",
      duration: "100 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Japanese", "Chinese (Simplified)", "Korean", "French", "German", "Spanish", "Portuguese (Brazil)", "Chinese (Traditional)", "Italian"],
      delivery: "Proctored exam via Pearson VUE, at a test centre or online",
      prerequisites: "No formal prerequisites. Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/",
      domains: [
        { id: "d1", name: "Manage a security operations environment", weight: "40–45%", objectives: ["Configure automation for Microsoft Defender XDR and Microsoft Sentinel", "Configure the Microsoft Sentinel SIEM and platform", "Ingest data into the Microsoft Sentinel SIEM and platform", "Configure detections"] },
        { id: "d2", name: "Respond to security incidents", weight: "35–40%", objectives: ["Respond to alerts and incidents in Microsoft Defender XDR", "Respond to alerts and incidents in Microsoft Defender for Endpoint", "Investigate Microsoft 365 activities to identify threats"] },
        { id: "d3", name: "Perform threat hunting", weight: "20–25%", objectives: ["Detect threats by using Microsoft Defender XDR", "Detect threats by using the Microsoft Sentinel platform"] },
      ],
      sources: [
        { label: "Microsoft Learn — SC-200 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200" },
        { label: "Microsoft Learn — Security Operations Analyst Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "SC-200 Practice Exams: Security Operations Analyst",
      description:
        "360 Microsoft SC-200 practice questions in six progressive mock exams — security operations, incident response and threat hunting, with full explanations.",
    },
  },

  "isaca-aaism": {
    featured: true,
    description:
      "540 practice questions in six mock exams for ISACA AAISM — Advanced in AI Security Management. Six tests of rising difficulty across AI governance, AI risk and AI security controls, with an explanation for every option.",
    fullName: "ISACA Advanced in AI Security Management (AAISM)",
    exam: {
      officialName: "ISACA Advanced in AI Security Management (AAISM)",
      questionCount: "90 multiple-choice questions",
      duration: "2.5 hours (150 minutes)",
      format: "Multiple choice",
      delivery: "Administered through PSI — remotely proctored online or at an approved test centre (test centre only in India, Mainland China and Hong Kong)",
      prerequisites:
        "An active CISM or CISSP. After passing: a one-time US$50 application processing fee and an application within five years of passing the exam. Maintenance: at least 10 CPE hours relevant to AAISM each year and 30 over the three-year cycle, an annual maintenance fee (US$20 for ISACA members, US$35 for non-members) and proof of an active CISM or CISSP.",
      status: "current",
      officialCertificationUrl: "https://www.isaca.org/credentialing/aaism",
      officialExamUrl: "https://www.isaca.org/credentialing/aaism/aaism-exam-content-outline",
      domains: [
        { id: "d1", name: "AI Governance and Program Management", weight: "31%", objectives: ["Stakeholder considerations, industry frameworks, and regulatory requirements", "AI-related strategies, policies, and procedures", "AI asset and data life cycle management", "AI security program development and management", "Business continuity and incident response"] },
        { id: "d2", name: "AI Risk Management", weight: "31%", objectives: ["AI risk assessment, thresholds, and treatment", "AI threat and vulnerability management", "AI vendor and supply chain management"] },
        { id: "d3", name: "AI Technologies and Controls", weight: "38%", objectives: ["AI security architecture and design", "AI life cycle (e.g., model selection, training, and validation)", "Data management controls", "Privacy, ethical, trust, and safety controls", "Security controls and monitoring"] },
      ],
      sources: [
        { label: "ISACA — Get AAISM certified", url: "https://www.isaca.org/credentialing/aaism/get-aaism-certified" },
        { label: "ISACA — Maintain AAISM certification", url: "https://www.isaca.org/credentialing/aaism/maintain-aaism-certification" },
        {
          label: "ISACA Now blog — AAISM FAQs",
          url: "https://www.isaca.org/resources/news-and-trends/isaca-now-blog/2025/isaca-advanced-in-ai-security-management-aaism-faqs",
        },
        {
          label: "ISACA press release — AAISM launch (2025)",
          url: "https://www.isaca.org/about-us/newsroom/press-releases/2025/isaca-introduces-first-and-only-ai-centric-security-management-certification",
        },
        {
          label: "ISACA Madrid Chapter — AAISM certification (questions, duration, domain weights, delivery)",
          url: "https://engage.isaca.org/madridchapter/certificaciones/certiaaism",
        },
        {
          label: "ISACA Engage — AAISM beta exam (150 minutes, PSI scheduling)",
          url: "https://engage.isaca.org/volunteeropportunities/opportunities-list-public/volunteer-opportunity-details?VolunteerOpportunityKey=d7efd869-6467-45bc-81d2-01971787be05",
        },
        { label: "ISACA — AAISM exam content outline", url: "https://www.isaca.org/credentialing/aaism/aaism-exam-content-outline" },
        { label: "ISACA — Exam candidate guides", url: "https://www.isaca.org/credentialing/exam-candidate-guides" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AAISM Practice Exams: ISACA AI Security Management",
      description:
        "540 ISACA AAISM practice questions in six progressive mock exams covering AI governance, AI risk management and AI technologies and controls.",
    },
  },

  "itsm-foundation-bridge-v5": {
    description:
      "120 practice questions in six short mock exams for the version 5 Foundation Bridge exam — built for certificate holders upgrading from version 4. Focus on what changed, from a diagnostic start to beyond exam level.",
    examOverview: [
      { label: "Exam provider", value: "PeopleCert" },
      { label: "Format", value: "20 multiple-choice questions, closed book" },
      { label: "Duration", value: "30 minutes" },
      { label: "Pass mark", value: "65%" },
      { label: "Prerequisites", value: "A qualifying version 4 certification (see PeopleCert for exclusions)" },
      { label: "Availability", value: "The Bridge exam is scheduled to be withdrawn on 31 December 2027" },
    ],
    sources: [
      { label: "PeopleCert — Foundation Bridge (Version 5) exam page", url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158" },
      { label: "PeopleCert — certification FAQ", url: "https://www.peoplecert.org/help-and-support/faq-itil" },
    ],
    seo: {
      title: "Foundation Bridge V5 Practice Exams",
      description:
        "120 practice questions in six mock exams for the version 5 Foundation Bridge exam — for version 4 certificate holders upgrading to version 5.",
    },
    lastReviewed: CHECKED,
  },

  "itsm-foundation-v5": {
    featured: true,
    description:
      "240 practice questions in six mock exams for the version 5 IT service management Foundation exam. Each test matches the real 40-question format, and difficulty rises from a diagnostic start to beyond exam level.",
    examOverview: [
      { label: "Exam provider", value: "PeopleCert" },
      { label: "Format", value: "40 multiple-choice questions, closed book" },
      { label: "Duration", value: "60 minutes" },
      { label: "Pass mark", value: "65%" },
    ],
    sources: [
      { label: "PeopleCert — Foundation (Version 5) exam page", url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-5-foundation-version-50-4154" },
      { label: "PeopleCert — certification FAQ", url: "https://www.peoplecert.org/help-and-support/faq-itil" },
    ],
    topics: [
      { title: "Product and service management concepts" },
      { title: "Value co-creation and the value system" },
      { title: "Guiding principles and the four dimensions" },
      { title: "Lifecycle, practices and continual improvement" },
    ],
    seo: {
      title: "ITSM Foundation V5 Practice Exams",
      description:
        "240 practice questions in six mock exams for the version 5 IT service management Foundation exam — 40 questions per test, rising to beyond exam level.",
    },
    lastReviewed: CHECKED,
  },

  "iapp-aigp": {
    description:
      "600 practice questions in six full mock exams for the IAPP AIGP — Artificial Intelligence Governance Professional. Practise all four domains of the AIGP body of knowledge, from your baseline to beyond exam level.",
    fullName: "IAPP Artificial Intelligence Governance Professional (AIGP)",
    exam: {
      officialName: "Artificial Intelligence Governance Professional (AIGP)",
      examVersion: "Body of knowledge and exam blueprint 2.1, effective 2 February 2026",
      questionCount: "100 questions",
      duration: "2.75 hours, with an optional 15-minute break offered halfway through",
      format: "Multiple choice; some questions may be scenario-based",
      passingScore: "300 or above (scale 100–500)",
      languages: ["English"],
      delivery: "Pearson VUE, at a test centre or online via OnVUE remote proctoring",
      prerequisites: "No formal prerequisites stated. Maintenance: 20 continuing education credits per two-year term, corresponding to the AIGP body of knowledge, plus the certification maintenance fee (included in IAPP membership).",
      status: "current",
      officialCertificationUrl: "https://iapp.org/certify/aigp",
      officialExamUrl: "https://store.iapp.org/aigp-exam/",
      domains: [
        {
          id: "d1",
          name: "Understanding the foundations of AI governance",
          weight: "16–20 questions",
          objectives: [
            "I.A Understand what AI is and why it needs governance",
            "I.B Establish and communicate organizational expectations for AI governance",
            "I.C Establish policies and procedures to apply throughout the AI life cycle",
          ],
        },
        {
          id: "d2",
          name: "Understanding how laws, standards and frameworks apply to AI",
          weight: "19–23 questions",
          objectives: [
            "II.A Understand how existing data privacy laws apply to AI",
            "II.B Understand how other types of existing laws apply to AI",
            "II.C Understand the main elements of AI-specific laws",
            "II.D Understand the main industry standards and tools that apply to AI",
          ],
        },
        {
          id: "d3",
          name: "Understanding how to govern AI development",
          weight: "21–25 questions",
          objectives: [
            "III.A Govern the designing and building of the AI system",
            "III.B Govern the collection and use of data in training and testing the AI model and system",
            "III.C Govern the release, monitoring and maintenance of the AI system",
          ],
        },
        {
          id: "d4",
          name: "Understanding how to govern AI deployment and use",
          weight: "21–25 questions",
          objectives: [
            "IV.A Evaluate key factors and risks relevant to the decision to deploy the AI system",
            "IV.B Perform key activities to assess the AI system",
            "IV.C Govern the deployment and use of the AI system",
          ],
        },
      ],
      sources: [
        { label: "IAPP — AIGP certification", url: "https://iapp.org/certify/aigp" },
        { label: "IAPP store — AIGP exam", url: "https://store.iapp.org/aigp-exam/" },
        {
          label: "IAPP — AIGP body of knowledge and exam blueprint 2.1 (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt0d33152fd20bc134/AIGP_Cert%20BOK.pdf",
        },
        {
          label: "IAPP — Certification candidate handbook (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf",
        },
        {
          label: "IAPP — CPE policy (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt25df7f1b0d8c84f7/CPE_Policy.pdf",
        },
        { label: "IAPP store — Certification maintenance fee", url: "https://store.iapp.org/certification-maintenance-fee" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AIGP Practice Exams: IAPP AI Governance Professional",
      description:
        "600 IAPP AIGP practice questions in six full mock exams across all four domains of the AIGP body of knowledge, with explanations for every option.",
    },
  },

  "ai-governance-v5": {
    description:
      "240 practice questions in six mock exams for the version 5 AI Governance exam from PeopleCert. Test your understanding of AI benefits and risks, governance models and regulation, from a diagnostic start to beyond exam level.",
    examOverview: [
      { label: "Exam provider", value: "PeopleCert" },
      { label: "Format", value: "40 multiple-choice questions, open book" },
      { label: "Duration", value: "90 minutes" },
      { label: "Pass mark", value: "70%" },
      { label: "Prerequisites", value: "None" },
    ],
    sources: [
      { label: "PeopleCert — AI Governance (Version 5) exam page", url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-ai-governance-version-5-4234" },
      { label: "PeopleCert — certification FAQ", url: "https://www.peoplecert.org/help-and-support/faq-itil" },
    ],
    topics: [
      { title: "AI fundamentals, benefits and risks" },
      { title: "AI in organizational contexts" },
      { title: "Good AI governance and capability models" },
      { title: "Regulation and other frameworks" },
    ],
    seo: {
      title: "AI Governance V5 Practice Exams",
      description:
        "240 practice questions in six mock exams for PeopleCert's version 5 AI Governance exam — AI risk, governance models and regulation.",
    },
    lastReviewed: CHECKED,
  },

  "isc2-ccsp": {
    description:
      "900 practice questions across six full-length mock exams, written to the ISC2 CCSP exam outline that took effect on 1 August 2026. Test 1 shows your level, Test 4 is designed to match exam-level difficulty and Test 6 is deliberately harder.",
    // Verified 1 Oct 2026 against isc2.org (exam page, exam outline, CAT page).
    // Domain weights for the 2026 outline could not be confirmed from ISC2 — deliberately omitted.
    exam: {
      officialName: "Certified Cloud Security Professional",
      examVersion: "Exam outline effective 1 August 2026",
      format: "Computerized adaptive testing (CAT)",
      questionCount: "100 to 150",
      duration: "3 hours",
      languages: ["English", "Chinese", "Japanese", "German"],
      prerequisites: "5 years cumulative full-time IT experience: 3 in cybersecurity and 1 in one or more CCSP domains (waivers and Associate path: see ISC2)",
      status: "current",
      officialCertificationUrl: "https://www.isc2.org/certifications/ccsp",
      officialExamUrl: "https://www.isc2.org/certifications/ccsp/ccsp-exam",
      domains: [
        {
          id: "d1",
          name: "Cloud Concepts, Architecture and Design",
          objectives: [
            "1.1 Understand cloud computing concepts",
            "1.2 Describe cloud reference architecture",
            "1.3 Understand security concepts relevant to cloud computing",
            "1.4 Understand design principles of secure cloud computing",
            "1.5 Evaluate Cloud Service Providers",
            "1.6 Comprehend Artificial Intelligence/Machine Learning",
          ],
        },
        {
          id: "d2",
          name: "Cloud Data Security",
          objectives: [
            "2.1 Describe cloud data concepts",
            "2.2 Design and implement cloud data storage architectures",
            "2.3 Design and apply data security technologies and strategies",
            "2.4 Implement data discovery",
            "2.5 Plan and implement data classification",
            "2.6 Design and implement Information Rights Management",
            "2.7 Plan and implement data retention, deletion, and archiving policies",
            "2.8 Design and implement auditability, traceability, and accountability of data events",
            "2.9 Comprehend data protection of Artificial Intelligence and Machine Learning data",
          ],
        },
        {
          id: "d3",
          name: "Cloud Platform and Infrastructure Security",
          objectives: [
            "3.1 Comprehend cloud infrastructure and platform components",
            "3.2 Design a secure data center",
            "3.3 Analyze risks associated with cloud infrastructure and platforms",
            "3.4 Plan and implementation of security controls",
            "3.5 Plan business continuity and disaster recovery",
          ],
        },
        {
          id: "d4",
          name: "Cloud Application Security",
          objectives: [
            "4.1 Advocate training and awareness for application security",
            "4.2 Describe the Secure Software Development Life Cycle process",
            "4.3 Apply the Secure Software Development Life Cycle",
            "4.4 Apply cloud software assurance and validation",
            "4.5 Use verified secure software",
            "4.6 Comprehend and apply the specifics of cloud application architecture",
            "4.7 Design appropriate Identity and Access Management solutions",
          ],
        },
        {
          id: "d5",
          name: "Cloud Security Operations",
          objectives: [
            "5.1 Build and implement physical and logical infrastructure for cloud environment",
            "5.2 Operate and maintain physical and logical infrastructure for cloud environment",
            "5.3 Implement operational controls and standards",
            "5.4 Support digital forensics",
            "5.5 Manage communication with relevant parties",
            "5.6 Manage security operations",
          ],
        },
        {
          id: "d6",
          name: "Legal, Risk and Compliance",
          objectives: [
            "6.1 Articulate legal requirements and unique risks within the cloud environment",
            "6.2 Understand privacy issues",
            "6.3 Understand audit process, methodologies, and required adaptations for a cloud environment",
            "6.4 Understand implications of cloud to enterprise risk management",
            "6.5 Understand outsourcing and cloud contract design",
          ],
        },
      ],
      sources: [
        { label: "ISC2 — CCSP exam", url: "https://www.isc2.org/certifications/ccsp/ccsp-exam" },
        { label: "ISC2 — CCSP exam outline", url: "https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline" },
        { label: "ISC2 — Computerized adaptive testing", url: "https://www.isc2.org/certifications/computerized-adaptive-testing" },
        { label: "ISC2 — CCSP certification", url: "https://www.isc2.org/certifications/ccsp" },
        { label: "ISC2 — CCSP experience requirements", url: "https://www.isc2.org/certifications/ccsp/ccsp-experience-requirements" },
      ],
      lastVerified: "2026-10-01",
    },
    faq: [
      {
        question: "Do the practice exams cover the new CCSP exam outline?",
        answer: "Yes. The questions are written to the ISC2 CCSP exam outline that took effect on 1 August 2026.",
      },
    ],
    seo: {
      title: "CCSP Practice Exams (New 2026 ISC2 Exam Outline)",
      description:
        "900 CCSP practice questions in six full-length mock exams, written to the ISC2 exam outline effective 1 August 2026 — from diagnostic to beyond exam level.",
    },
  },

  /* ── Content batch October 2026 (top Udemy earners, Aug–Oct 2026) ─────────
   * Exam facts verified 27 Oct 2026 against Microsoft Learn. Prices are left
   * out on purpose: Microsoft only states "based on country or region".     */

  "pl-900": {
    description:
      "Practice exams for Microsoft PL-900: Power Platform Fundamentals, written to the skills measured as of 24 July 2026 — Dataverse, Power Apps, Power Automate, administration and the new Copilot Studio agents. Find your gaps before the 45-minute exam.",
    fullName: "Microsoft Power Platform Fundamentals",
    exam: {
      officialName: "Microsoft Certified: Power Platform Fundamentals",
      examCode: "PL-900",
      examVersion: "Skills measured as of 24 July 2026",
      duration: "45 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Spanish", "German", "Chinese (Simplified)", "French", "Korean", "Japanese", "Portuguese (Brazil)", "Russian", "Arabic (Saudi Arabia)", "Chinese (Traditional)", "Italian"],
      delivery: "Proctored exam via Pearson VUE, at a test centre or online",
      prerequisites: "None. Fundamentals certifications do not expire.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/pl-900/",
      domains: [
        { id: "d1", name: "Describe the business value of Microsoft Power Platform", weight: "5–10%", objectives: ["Describe the business value of Microsoft Power Platform services"] },
        { id: "d2", name: "Manage the Microsoft Power Platform environment", weight: "20–25%", objectives: ["Describe Microsoft Dataverse", "Describe Microsoft Power Platform administration and governance"] },
        { id: "d3", name: "Demonstrate the capabilities of Power Apps", weight: "20–25%", objectives: ["Describe Power Apps capabilities and use cases", "Describe how to build basic apps by using Power Apps"] },
        { id: "d4", name: "Demonstrate the capabilities of Power Automate", weight: "20–25%", objectives: ["Describe Power Automate use cases and capabilities", "Describe how to build basic flows by using Power Automate"] },
        { id: "d5", name: "Describe features and capabilities of agents in Microsoft Copilot Studio", weight: "20–25%", objectives: ["Describe how to build agents in Copilot Studio", "Describe how to manage agents in Copilot Studio"] },
      ],
      sources: [
        { label: "Microsoft Learn — PL-900 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-900" },
        { label: "Microsoft Learn — Power Platform Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "PL-900 Practice Exams: Power Platform Fundamentals (2026)",
      description:
        "PL-900 practice exams for the July 2026 skills outline: Dataverse, Power Apps, Power Automate, administration and Copilot Studio agents, with explanations.",
    },
  },

  "md-102": {
    description:
      "Practice exams for Microsoft MD-102: Endpoint Administrator, written to the skills measured as of 27 October 2026 — Intune enrollment, Autopilot, compliance, endpoint security, app management and Security Copilot agents. Check your level before the 100-minute exam.",
    fullName: "Microsoft 365 Endpoint Administrator",
    exam: {
      officialName: "Microsoft 365 Certified: Endpoint Administrator Associate",
      examCode: "MD-102",
      examVersion: "Skills measured as of 27 October 2026",
      duration: "100 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Chinese (Simplified)", "German", "Spanish", "French", "Japanese", "Portuguese (Brazil)"],
      delivery: "Proctored exam via Pearson VUE, at a test centre or online",
      prerequisites: "No formal prerequisites. Renewal every 12 months via a free online assessment.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/modern-desktop/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/md-102",
      domains: [
        { id: "d1", name: "Prepare infrastructure for devices", weight: "20–25%", objectives: ["Add devices to Microsoft Entra ID", "Enroll devices to Microsoft Intune", "Implement identity and compliance"] },
        { id: "d2", name: "Manage and maintain devices", weight: "25–30%", objectives: ["Deploy and upgrade Windows clients by using cloud-based tools", "Plan and implement device configuration profiles", "Implement Microsoft Intune Suite add-on capabilities", "Perform remote actions on devices"] },
        { id: "d3", name: "Protect devices", weight: "15–20%", objectives: ["Configure endpoint security", "Manage device updates"] },
        { id: "d4", name: "Manage and secure applications", weight: "15–20%", objectives: ["Deploy and update apps", "Plan and implement app protection and app configuration policies"] },
        { id: "d5", name: "Optimize endpoint operations by using automation, monitoring, and reporting", weight: "10–15%", objectives: ["Automate management tasks", "Monitor and optimize health"] },
      ],
      sources: [
        { label: "Microsoft Learn — MD-102 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/md-102" },
        { label: "Microsoft Learn — Endpoint Administrator Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/modern-desktop/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "MD-102 Practice Exams: Endpoint Administrator (Oct 2026)",
      description:
        "MD-102 practice exams for the skills measured as of 27 Oct 2026: Intune, Autopilot, compliance, endpoint security, apps and automation, with explanations.",
    },
  },

  "ai-103": {
    description:
      "Practice exams for Microsoft AI-103: Developing AI Apps and Agents on Azure, the successor to the retired AI-102. Written to the skills measured as of 16 April 2026 — Foundry, generative AI and agents, RAG, vision, language and document extraction.",
    fullName: "Developing AI Apps and Agents on Azure",
    exam: {
      officialName: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
      examCode: "AI-103",
      examVersion: "Skills measured as of 16 April 2026",
      duration: "120 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Chinese (Simplified)", "Chinese (Traditional)", "French", "German", "Japanese", "Korean", "Italian", "Portuguese (Brazil)", "Spanish"],
      delivery: "Proctored exam via Pearson VUE, at a test centre or online",
      prerequisites: "No formal prerequisites. Microsoft expects experience developing apps with Python. Renewal every 12 months via a free online assessment.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/",
      domains: [
        { id: "d1", name: "Plan and manage an Azure AI solution", weight: "25–30%", objectives: ["Choose the appropriate Foundry services for generative AI and agents", "Set up AI solutions in Foundry", "Manage, monitor, and secure AI systems", "Implement responsible AI across generative AI and agentic systems"] },
        { id: "d2", name: "Implement generative AI and agentic solutions", weight: "30–35%", objectives: ["Build generative applications by using Foundry", "Build agents by using Foundry", "Optimize and operationalize generative AI systems"] },
        { id: "d3", name: "Implement computer vision solutions", weight: "10–15%", objectives: ["Design and implement image- and video-generation solutions", "Design and implement multimodal understanding workflows", "Implement responsible AI for multimodal content"] },
        { id: "d4", name: "Implement text analysis solutions", weight: "10–15%", objectives: ["Apply language model text analysis", "Implement speech solutions"] },
        { id: "d5", name: "Implement information extraction solutions", weight: "10–15%", objectives: ["Build retrieval and grounding pipelines", "Extract content from documents"] },
      ],
      sources: [
        { label: "Microsoft Learn — AI-103 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103" },
        { label: "Microsoft Learn — Azure AI Apps and Agents Developer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/" },
        { label: "Microsoft Learn — Retired certification exams (AI-102: 30 June 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AI-103 Practice Exams: Azure AI Apps and Agents (ex AI-102)",
      description:
        "AI-103 practice exams for Developing AI Apps and Agents on Azure: Foundry, generative AI, agents, RAG, vision, language and document extraction.",
    },
  },


  /* ── Content batch 2, October 2026 — exam facts verified 27 Oct 2026 against the
   * official provider sources listed in each entry. ──────────────────────── */

  "ipma-level-d": {
    description:
      "Practice exams for IPMA Level D (Certified Project Management Associate), written against the 28 project management competence elements of the IPMA Individual Competence Baseline ICB4 — Perspective, People and Practice. Available in English and German, they help you prepare for the written exams, including the PM-ZERT (GPM) format in Germany.",
    fullName: "IPMA Level D — Certified Project Management Associate",
    // Verified 27 Oct 2026. Format details are for Germany (PM-ZERT / GPM); other IPMA member associations differ.
    exam: {
      officialName: "IPMA Level D — Certified Project Management Associate",
      examVersion: "IPMA Individual Competence Baseline ICB4; PM-ZERT Level D guide version 24 (valid from 1 August 2026)",
      duration: "Germany (PM-ZERT): two written exams of 90 minutes each, or one 90-minute written exam plus a report",
      format:
        "Germany (PM-ZERT): Path 1 — one 90-minute written exam plus a report of up to 25 pages (plus up to 15 pages of appendix) and a feedback meeting of up to 20 minutes; Path 2 — two 90-minute written exams. The path cannot be changed after admission.",
      passingScore: "Germany (PM-ZERT): 23 competence elements rated as fulfilled across all exam parts",
      languages: ["German", "English"],
      delivery: "Germany (PM-ZERT): in person or online via video conference (Zoom or Teams)",
      prerequisites:
        "None — no project management experience or vocational training required (PM-ZERT). Certificate valid for five years; recertification with at least 175 hours of continuing professional development.",
      status: "current",
      officialCertificationUrl: "https://www.pm-zert.de/zertifizierungsprodukte/projektmanagement/ipma-level-d",
      domains: [
        {
          id: "d1",
          name: "Perspective competences",
          objectives: [
            "4.3.1 Strategy",
            "4.3.2 Governance, structures and processes",
            "4.3.3 Compliance, standards and regulations",
            "4.3.4 Power and interest",
            "4.3.5 Culture and values",
          ],
        },
        {
          id: "d2",
          name: "People competences",
          objectives: [
            "4.4.1 Self-reflection and self-management",
            "4.4.2 Personal integrity and reliability",
            "4.4.3 Personal communication",
            "4.4.4 Relations and engagement",
            "4.4.5 Leadership",
            "4.4.6 Teamwork",
            "4.4.7 Conflict and crisis",
            "4.4.8 Resourcefulness",
            "4.4.9 Negotiation",
            "4.4.10 Results orientation",
          ],
        },
        {
          id: "d3",
          name: "Practice competences",
          objectives: [
            "4.5.1 Project design",
            "4.5.2 Requirements and objectives",
            "4.5.3 Scope",
            "4.5.4 Time",
            "4.5.5 Organisation and information",
            "4.5.6 Quality",
            "4.5.7 Finance",
            "4.5.8 Resources",
            "4.5.9 Procurement",
            "4.5.10 Plan and control",
            "4.5.11 Risk and opportunity",
            "4.5.12 Stakeholders",
            "4.5.13 Change and transformation",
          ],
        },
      ],
      sources: [
        { label: "PM-ZERT — IPMA Level D certification", url: "https://www.pm-zert.de/zertifizierungsprodukte/projektmanagement/ipma-level-d" },
        { label: "PM-ZERT — Leitfaden Zertifizierung Level D, V24 (PDF)", url: "https://www.pm-zert.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Ab_September_2024/Z01D_Leitfaden-Level-D_V24.pdf" },
        { label: "PM-ZERT — Leitfaden Allgemein für Zertifizierungen, V18 (PDF)", url: "https://www.pm-zert.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Ab_September_2024/Z01_Leitfaden-Allgemein-Zertifizierung.pdf" },
        { label: "PM-ZERT — Leitfaden Online-Zertifizierung, V10 (PDF)", url: "https://www.pm-zert.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Ab_September_2024/Z01O_Leitfaden-Online-Zertifizierung.pdf" },
        { label: "PM-ZERT — Leitfaden Level D Rezertifizierung, V07 (PDF)", url: "https://www.pm-zert.de/fileadmin/pm_zert_upload/Zertifizierung/Rezertifizierung/Ab_September_2024/Z01DRZ_Leitfaden-Rezertifzierung-Level-D.pdf" },
        { label: "PM-ZERT (GPM) — General guide Level D–A, ICB4 competence elements (PDF)", url: "https://www.gpm-ipma.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Z01_PM_General_Guide_ICB4.pdf" },
        { label: "IPMA — Individual certification", url: "https://ipma.world/individuals/certification/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "IPMA Level D Practice Exams: ICB4 Exam Prep (2026)",
      description:
        "IPMA Level D practice exams on the ICB4 competence elements — Perspective, People and Practice — in English and German, with full explanations.",
    },
  },

  "aws-aib-c01": {
    description:
      "Practice exams for AWS AIB-C01: AWS Certified AI Business Strategist, written to the official AIB-C01 exam guide — AI fundamentals, AI strategy and business value, governance and responsible AI, and business readiness and transformation. Test your business judgement before the beta exam, with no coding required.",
    fullName: "AWS Certified AI Business Strategist",
    exam: {
      officialName: "AWS Certified AI Business Strategist",
      examCode: "AIB-C01",
      examVersion: "AIB-C01 exam guide (beta exam)",
      questionCount: "85 questions (beta exam)",
      duration: "170 minutes for the beta exam (AWS certification page); the exam guide states 130 minutes",
      format: "Multiple choice and multiple response",
      passingScore: "700 (scaled score 100–1,000, compensatory scoring)",
      questionTypes: "Multiple choice (one correct response out of four options) and multiple response (two or more correct responses out of five or more options). Unanswered questions are scored as incorrect; there is no penalty for guessing.",
      languages: ["English", "Japanese"],
      delivery: "Pearson VUE testing centre or online proctored exam",
      prerequisites: "None. No coding or hands-on AWS implementation experience required. AWS recommends about six months of experience working with or alongside AI initiatives and basic familiarity with AI concepts and AWS AI services at a business level.",
      status: "current",
      launchDate: "Beta registration opened 1 September 2026; beta exam delivery began 29 September 2026",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-ai-business-strategist/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01.html",
      domains: [
        { id: "d1", name: "AI Fundamentals and Literacy", weight: "24%", objectives: ["1.1 Describe core AI concepts and define terminology", "1.2 Identify and select appropriate AI solution types", "1.3 Apply GenAI concepts and techniques"] },
        { id: "d2", name: "AI Strategy and Business Value Creation", weight: "28%", objectives: ["2.1 Develop AI strategies that align with business objectives", "2.2 Measure and demonstrate AI business value", "2.3 Position AI for competitive advantage"] },
        { id: "d3", name: "AI Governance and Responsible AI Leadership", weight: "24%", objectives: ["3.1 Apply responsible AI principles to business decisions", "3.2 Establish AI governance structures and ensure regulatory compliance", "3.3 Identify enterprise AI risks and direct mitigation strategies"] },
        { id: "d4", name: "Business Readiness, Leadership, and AI Transformation", weight: "24%", objectives: ["4.1 Assess AI business readiness and maturity", "4.2 Establish data and infrastructure foundations for AI", "4.3 Lead enterprise-wide change and build AI-ready workforce capabilities", "4.4 Scale AI from pilots to enterprise-wide deployments"] },
      ],
      sources: [
        { label: "AWS — AWS Certified AI Business Strategist (beta exam)", url: "https://aws.amazon.com/certification/certified-ai-business-strategist/" },
        { label: "AWS — AIB-C01 exam guide", url: "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01.html" },
        { label: "AWS Training and Certification Blog — Introducing AWS Certified AI Business Strategist (1 September 2026)", url: "https://aws.amazon.com/blogs/training-and-certification/introducing-aws-certified-ai-business-strategist-built-for-the-people-who-scale-ai/" },
        { label: "AWS — Before testing policies (beta exams)", url: "https://aws.amazon.com/certification/policies/before-testing/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AIB-C01 Practice Exams: AWS AI Business Strategist (2026)",
      description:
        "AIB-C01 practice exams for AWS Certified AI Business Strategist: AI literacy, strategy and ROI, responsible AI governance and transformation, with explanations.",
    },
  },

  "cia-part-1": {
    description:
      "Practice exams for CIA Part 1: Internal Audit Fundamentals, written to The IIA's 2025 CIA syllabus and the Global Internal Audit Standards — foundations of internal auditing, ethics and professionalism, governance, risk management and control, and fraud risks. Test yourself against the 125-question, 150-minute format before exam day.",
    fullName: "CIA Part 1: Internal Audit Fundamentals",
    exam: {
      officialName: "Certified Internal Auditor (CIA) — Part 1: Internal Audit Fundamentals",
      examCode: "CIA Part 1",
      examVersion: "2025 CIA exam syllabus (Expanded Test Specifications V2.09.2024), aligned with the Global Internal Audit Standards",
      questionCount: "125",
      duration: "150 minutes",
      passingScore: "600 or higher (scaled score, reporting scale 250–750)",
      delivery: "Computer-based testing at Pearson VUE test centres",
      prerequisites: "Programme eligibility depends on education and experience (for example 1 year of internal audit experience with a master's degree, 2 years with a bachelor's). All three parts must be passed within 3 years of applying. Part 1 is waived for active IAP holders.",
      status: "current",
      officialCertificationUrl: "https://www.theiia.org/en/certifications/cia/",
      officialExamUrl: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-1-syllabus.pdf",
      domains: [
        { id: "d1", name: "Foundations of Internal Auditing", weight: "35%", objectives: ["A.1 Describe the Purpose of Internal Auditing according to the Global Internal Audit Standards", "A.2 Explain the internal audit mandate and responsibilities of the board and chief audit executive", "A.3 Recognize the requirements of an internal audit charter", "A.4 Interpret the differences between assurance services and advisory services provided by the internal audit function", "A.5 Describe the types of assurance services performed by the internal audit function", "A.6 Describe the types of advisory services performed by the internal audit function", "A.7 Identify situations where the independence of the internal audit function may be impaired", "A.8 Recognize the internal audit function's role in the organization's risk management process"] },
        { id: "d2", name: "Ethics and Professionalism", weight: "20%", objectives: ["B.1 Demonstrate integrity", "B.2 Assess whether an individual internal auditor has any impairments to objectivity", "B.3 Analyze policies that promote objectivity and potential options to mitigate impairments", "B.4 Apply the knowledge, skills, and competencies required (whether developed or procured) to fulfill the responsibilities of the internal audit function", "B.5 Demonstrate due professional care", "B.6 Maintain confidentiality and use information appropriately during engagements"] },
        { id: "d3", name: "Governance, Risk Management, and Control", weight: "30%", objectives: ["C.1 Describe the concept of organizational governance", "C.2 Recognize the impact of organizational culture on the overall control environment and individual engagement risks and controls", "C.3 Recognize ethical and compliance-related issues", "C.4 Interpret fundamental concepts of risk type", "C.5 Interpret fundamental concepts of the risk management process", "C.6 Describe risk management within organizational processes and functions", "C.7 Interpret internal control concepts and types of controls", "C.8 Recognize the importance of the design, effectiveness, and efficiency of internal controls (financial and nonfinancial)"] },
        { id: "d4", name: "Fraud Risks", weight: "15%", objectives: ["D.1 Describe concepts of fraud risks and types of fraud", "D.2 Determine whether fraud risks require special consideration during an engagement", "D.3 Evaluate the potential for fraud and how the organization detects and manages fraud risks", "D.4 Describe controls to prevent and detect fraud", "D.5 Recognize techniques and the internal audit function's role related to fraud investigation"] },
      ],
      sources: [
        { label: "The IIA — CIA Part 1 syllabus (Expanded Test Specifications)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-1-syllabus.pdf" },
        { label: "The IIA — Certified Internal Auditor (eligibility, programme time limits, languages)", url: "https://www.theiia.org/en/certifications/cia/" },
        { label: "The IIA — CIA exam syllabus (2025)", url: "https://www.theiia.org/en/certifications/cia/exam-prep-resources/exam-syllabus/" },
        { label: "The IIA — CIA Exam: Why and How It's Changing (questions and minutes per part)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-exam-why-and-how-it-is-changing2.pdf" },
        { label: "The IIA — Certification Candidate Handbook (scoring, retakes, Pearson VUE)", url: "https://www.theiia.org/globalassets/site/certifications/certification-candidate-handbook.pdf" },
        { label: "The IIA — Global Internal Audit Standards", url: "https://www.theiia.org/en/standards/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "CIA Part 1 Practice Exams: Internal Audit Fundamentals (2026)",
      description:
        "CIA Part 1 practice exams for the 2025 syllabus: Global Internal Audit Standards, ethics, governance, risk, control and fraud, with full explanations.",
    },
  },

  "cia-part-2": {
    description:
      "Practice exams for CIA Part 2: Internal Audit Engagement, written to The IIA's 2025 CIA syllabus and the Global Internal Audit Standards — engagement planning, gathering and evaluating evidence, data analytics, workpapers and supervision. Test yourself against the 100-question, 120-minute format before exam day.",
    fullName: "CIA Part 2: Internal Audit Engagement",
    exam: {
      officialName: "Certified Internal Auditor (CIA) — Part 2: Internal Audit Engagement",
      examCode: "CIA Part 2",
      examVersion: "2025 CIA exam syllabus (Expanded Test Specifications V2.09.2024), aligned with the Global Internal Audit Standards",
      questionCount: "100",
      duration: "120 minutes",
      passingScore: "600 or higher (scaled score, reporting scale 250–750)",
      delivery: "Computer-based testing at Pearson VUE test centres",
      prerequisites: "Programme eligibility depends on education and experience (for example 1 year of internal audit experience with a master's degree, 2 years with a bachelor's). All three parts must be passed within 3 years of applying.",
      status: "current",
      officialCertificationUrl: "https://www.theiia.org/en/certifications/cia/",
      officialExamUrl: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-2-syllabus.pdf",
      domains: [
        { id: "d1", name: "Engagement Planning", weight: "50%", objectives: ["A.1 Determine engagement objectives and scope", "A.2 Determine evaluation criteria based on relevant information gathered", "A.3 Plan the engagement to assess key risks and controls", "A.4 Determine the appropriate approach for an engagement", "A.5 Complete a detailed risk assessment of each activity under review", "A.6 Determine engagement procedures and prepare the engagement work program", "A.7 Determine the level of resources and skills needed for the engagement"] },
        { id: "d2", name: "Information Gathering, Analysis, and Evaluation", weight: "40%", objectives: ["B.1 Identify sources of information to support engagement objectives and procedures", "B.2 Evaluate the relevance, sufficiency, and reliability of evidence gathered to support engagement objectives", "B.3 Evaluate technology options that internal auditors may use to develop and support engagement findings and conclusions", "B.4 Apply appropriate analytical approaches and process mapping techniques", "B.5 Apply analytical review techniques", "B.6 Determine whether there is a difference between evaluation criteria and existing conditions and evaluate the significance of each finding", "B.7 Prepare workpapers, including relevant information to support conclusions and engagement results", "B.8 Summarize and develop engagement conclusions"] },
        { id: "d3", name: "Engagement Supervision and Communication", weight: "10%", objectives: ["C.1 Apply appropriate supervision throughout the engagement", "C.2 Apply appropriate communication with stakeholders throughout the engagement"] },
      ],
      sources: [
        { label: "The IIA — CIA Part 2 syllabus (Expanded Test Specifications)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-2-syllabus.pdf" },
        { label: "The IIA — Certified Internal Auditor (eligibility, programme time limits, languages)", url: "https://www.theiia.org/en/certifications/cia/" },
        { label: "The IIA — CIA exam syllabus (2025)", url: "https://www.theiia.org/en/certifications/cia/exam-prep-resources/exam-syllabus/" },
        { label: "The IIA — CIA Exam: Why and How It's Changing (questions and minutes per part)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-exam-why-and-how-it-is-changing2.pdf" },
        { label: "The IIA — Certification Candidate Handbook (scoring, retakes, Pearson VUE)", url: "https://www.theiia.org/globalassets/site/certifications/certification-candidate-handbook.pdf" },
        { label: "The IIA — Global Internal Audit Standards", url: "https://www.theiia.org/en/standards/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "CIA Part 2 Practice Exams: Internal Audit Engagement (2026)",
      description:
        "CIA Part 2 practice exams for the 2025 syllabus: engagement planning, evidence, data analytics, findings and supervision, with full explanations.",
    },
  },

  "cia-part-3": {
    description:
      "Practice exams for CIA Part 3: Internal Audit Function, written to The IIA's 2025 CIA syllabus and the Global Internal Audit Standards — internal audit operations, the risk-based audit plan, quality assurance, and communicating results and monitoring action plans. Test yourself against the 100-question, 120-minute format before exam day.",
    fullName: "CIA Part 3: Internal Audit Function",
    exam: {
      officialName: "Certified Internal Auditor (CIA) — Part 3: Internal Audit Function",
      examCode: "CIA Part 3",
      examVersion: "2025 CIA exam syllabus (Expanded Test Specifications V2.09.2024), aligned with the Global Internal Audit Standards",
      questionCount: "100",
      duration: "120 minutes",
      passingScore: "600 or higher (scaled score, reporting scale 250–750)",
      delivery: "Computer-based testing at Pearson VUE test centres",
      prerequisites: "Programme eligibility depends on education and experience (for example 1 year of internal audit experience with a master's degree, 2 years with a bachelor's). All three parts must be passed within 3 years of applying.",
      status: "current",
      officialCertificationUrl: "https://www.theiia.org/en/certifications/cia/",
      officialExamUrl: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-3-syllabus.pdf",
      domains: [
        { id: "d1", name: "Internal Audit Operations", weight: "25%", objectives: ["A.1 Describe methodologies for the planning, organizing, directing, and monitoring of internal audit operations", "A.2 Describe key activities for managing financial, human, and IT resources within the internal audit function", "A.3 Describe the key elements required to align internal audit strategy to stakeholder expectations", "A.4 Recognize the chief audit executive's responsibilities for building relationships and communicating with senior management and the board about various matters"] },
        { id: "d2", name: "Internal Audit Plan", weight: "15%", objectives: ["B.1 Identify sources of potential engagements", "B.2 Describe the processes to develop a risk-based audit plan", "B.3 Recognize the importance for internal auditors to coordinate with other assurance providers and leverage their work"] },
        { id: "d3", name: "Quality of the Internal Audit Function", weight: "15%", objectives: ["C.1 Describe the required elements of the quality assurance and improvement program", "C.2 Identify appropriate disclosure of nonconformance with The IIA's Global Internal Audit Standards", "C.3 Recognize practical methods for establishing internal audit key performance indicators or scorecard metrics that the chief audit executive communicates to senior management and the board"] },
        { id: "d4", name: "Engagement Results and Monitoring", weight: "45%", objectives: ["D.1 Recognize attributes of effective engagement results communication", "D.2 Demonstrate effective communication of engagement results", "D.3 Determine whether to develop recommendations, request action plans from management, or collaborate with management to agree on actions", "D.4 Describe the engagement closing communication and reporting process", "D.5 Describe the chief audit executive's responsibility for assessing residual risk for the engagement", "D.6 Describe the process for communicating risk acceptance (when management has accepted a level of risk that may be unacceptable to the organization)", "D.7 Describe the process for monitoring and confirming the implementation of management action plans", "D.8 Describe the escalation process if management has not adequately implemented an action plan"] },
      ],
      sources: [
        { label: "The IIA — CIA Part 3 syllabus (Expanded Test Specifications)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-3-syllabus.pdf" },
        { label: "The IIA — Certified Internal Auditor (eligibility, programme time limits, languages)", url: "https://www.theiia.org/en/certifications/cia/" },
        { label: "The IIA — CIA exam syllabus (2025)", url: "https://www.theiia.org/en/certifications/cia/exam-prep-resources/exam-syllabus/" },
        { label: "The IIA — CIA Exam: Why and How It's Changing (questions and minutes per part)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-exam-why-and-how-it-is-changing2.pdf" },
        { label: "The IIA — Certification Candidate Handbook (scoring, retakes, Pearson VUE)", url: "https://www.theiia.org/globalassets/site/certifications/certification-candidate-handbook.pdf" },
        { label: "The IIA — Global Internal Audit Standards", url: "https://www.theiia.org/en/standards/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "CIA Part 3 Practice Exams: Internal Audit Function (2026)",
      description:
        "CIA Part 3 practice exams for the 2025 syllabus: audit operations, the audit plan, quality, reporting, risk acceptance and follow-up, with explanations.",
    },
  },

  "iapp-cipp-e": {
    description:
      "Practice exams for the IAPP CIPP/E, written against body of knowledge and exam blueprint version 1.3.3 (effective 1 September 2025): European data protection history and institutions, GDPR concepts, data subject rights, lawful processing, international transfers, accountability and enforcement, and the workplace, marketing and online rules. Find your gaps before the 90-question exam.",
    fullName: "IAPP Certified Information Privacy Professional/Europe (CIPP/E)",
    exam: {
      officialName: "Certified Information Privacy Professional/Europe (CIPP/E)",
      examVersion: "Body of knowledge and exam blueprint 1.3.3, effective 1 September 2025",
      questionCount: "90 multiple-choice questions",
      duration: "2.5 hours, with an optional 15-minute break offered halfway through",
      format: "Multiple choice, including scenario-based questions",
      passingScore: "300 or above (scale 100–500)",
      languages: ["English", "French", "German"],
      delivery: "Pearson VUE, at a test centre or online via OnVUE remote proctoring",
      prerequisites: "No formal prerequisites stated. Maintenance: 20 CPE credits per two-year term plus the certification maintenance fee (included in IAPP membership).",
      status: "current",
      officialCertificationUrl: "https://iapp.org/certify/cippe/",
      officialExamUrl: "https://store.iapp.org/cipp-e-exam/",
      domains: [
        {
          id: "d1",
          name: "Introduction to European Data Protection",
          weight: "7–13 questions",
          objectives: [
            "I.A Understand the origins and historical context of European data protection laws",
            "I.B Understand the roles and functions of significant European Union institutions",
            "I.C Understand the legislative framework underpinning the principles of European data protection",
          ],
        },
        {
          id: "d2",
          name: "European Data Protection Law and Regulation",
          weight: "18–28 questions",
          objectives: [
            "II.A Understand basic GDPR data protection concepts",
            "II.B Understand the requirements involved in maintaining the security of personal data",
            "II.C Understand data subjects' rights",
          ],
        },
        {
          id: "d3",
          name: "European Data Processing",
          weight: "13–21 questions",
          objectives: [
            "III.A Understand the principles of European data processing",
            "III.B Know what constitutes a lawful processing basis",
            "III.C Understand information provision obligations",
            "III.D Understand the principles of, and the risks involved in, international data transfers",
          ],
        },
        {
          id: "d4",
          name: "European Data Protection: Scope and Accountability",
          weight: "8–18 questions",
          objectives: [
            "IV.A Understand issues related to the territorial and material scope of the GDPR",
            "IV.B Understand the various accountability requirements under the GDPR",
            "IV.C Understand the European data protection supervision and enforcement structure",
            "IV.D Understand the consequences for GDPR violations",
          ],
        },
        {
          id: "d5",
          name: "Compliance with European Data Protection Law and Regulation",
          weight: "8–16 questions",
          objectives: [
            "V.A Understand how to comply with European data protection laws and regulations in the workplace, specifically as they relate to employment relationships",
            "V.B Understand how to comply with European data protection laws and regulations related to surveillance activities",
            "V.C Understand how to comply with European data protection laws and regulations related to direct marketing",
            "V.D Understand how to comply with European data protection laws and regulations related to internet technology and communications",
          ],
        },
      ],
      sources: [
        { label: "IAPP — CIPP/E certification", url: "https://iapp.org/certify/cippe/" },
        { label: "IAPP store — CIPP/E exam", url: "https://store.iapp.org/cipp-e-exam/" },
        {
          label: "IAPP — CIPP/E body of knowledge and exam blueprint 1.3.3 (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blte39ae9567661b3d2/IAPP_Training-CIPPE_BOK.pdf",
        },
        {
          label: "IAPP — Certification candidate handbook (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf",
        },
        {
          label: "IAPP — CPE policy (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt25df7f1b0d8c84f7/CPE_Policy.pdf",
        },
        { label: "IAPP store — Certification maintenance fee", url: "https://store.iapp.org/certification-maintenance-fee" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "CIPP/E Practice Exams: IAPP GDPR Privacy Professional (2026)",
      description:
        "CIPP/E practice exams for body of knowledge 1.3.3: GDPR concepts, data subject rights, lawful bases, transfers, accountability and fines, with explanations.",
    },
  },

  "ai-901": {
    description:
      "Practice exams for Microsoft AI-901: Azure AI Fundamentals, the successor to AI-900, written to the skills measured as of 15 April 2026 — responsible AI, generative AI and agents, speech, vision and information extraction with Microsoft Foundry. Find your gaps before you book.",
    fullName: "Microsoft Azure AI Fundamentals",
    exam: {
      officialName: "Microsoft Certified: Azure AI Fundamentals",
      examCode: "AI-901",
      examVersion: "Skills measured as of 15 April 2026",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Arabic (Saudi Arabia)", "Chinese (Simplified)", "Chinese (Traditional)", "French", "German", "Indonesian (Indonesia)", "Italian", "Japanese", "Korean", "Portuguese (Brazil)", "Russian", "Spanish"],
      prerequisites: "None. Microsoft expects conceptual knowledge of AI solutions in Azure, knowledge of Python coding syntax and familiarity with Azure resources. Fundamentals certifications do not expire.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/",
      domains: [
        { id: "d1", name: "Identify AI concepts and capabilities", weight: "40–45%", objectives: ["Describe principles of responsible AI", "Identify AI model components and configurations", "Identify AI workloads"] },
        { id: "d2", name: "Implement AI solutions by using Microsoft Foundry", weight: "55–60%", objectives: ["Implement generative AI apps and agents by using Foundry", "Implement AI solutions for text and speech by using Foundry", "Implement AI solutions with computer vision and image-generation capabilities by using Foundry", "Implement AI solutions for information extraction by using Foundry"] },
      ],
      sources: [
        { label: "Microsoft Learn — AI-901 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901" },
        { label: "Microsoft Learn — Exam AI-901", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" },
        { label: "Microsoft Learn — Azure AI Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/" },
        { label: "Microsoft Learn — Retired certification exams (AI-900: 30 June 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AI-901 Practice Exams: Azure AI Fundamentals (2026)",
      description:
        "AI-901 practice exams for the April 2026 skills outline: responsible AI, generative AI, agents, speech, vision and Microsoft Foundry, with explanations.",
    },
  },

  "az-104": {
    description:
      "Practice exams for Microsoft AZ-104: Azure Administrator, written to the skills measured as of 17 April 2026 — Entra ID and governance, storage, VMs, containers and App Service, virtual networking, monitoring and backup. Check your level before the 100-minute exam.",
    fullName: "Microsoft Azure Administrator",
    exam: {
      officialName: "Microsoft Certified: Azure Administrator Associate",
      examCode: "AZ-104",
      examVersion: "Skills measured as of 17 April 2026",
      duration: "100 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Chinese (Simplified)", "Korean", "Japanese", "French", "Spanish", "German", "Portuguese (Brazil)", "Chinese (Traditional)", "Italian"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects experience with PowerShell, Azure CLI, the Azure portal, ARM templates or Bicep, and Microsoft Entra ID. Renewal every 12 months via a free online assessment.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-104/",
      domains: [
        { id: "d1", name: "Manage Azure identities and governance", weight: "20–25%", objectives: ["Manage Microsoft Entra users and groups", "Manage access to Azure resources", "Manage Azure subscriptions and governance"] },
        { id: "d2", name: "Implement and manage storage", weight: "15–20%", objectives: ["Configure access to storage", "Configure and manage storage accounts", "Configure Azure Files and Azure Blob Storage"] },
        { id: "d3", name: "Deploy and manage Azure compute resources", weight: "20–25%", objectives: ["Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files", "Create and configure virtual machines", "Provision and manage containers in the Azure portal", "Create and configure Azure App Service"] },
        { id: "d4", name: "Implement and manage virtual networking", weight: "15–20%", objectives: ["Configure and manage virtual networks in Azure", "Configure secure access to virtual networks", "Configure name resolution and load balancing"] },
        { id: "d5", name: "Monitor and maintain Azure resources", weight: "10–15%", objectives: ["Monitor resources in Azure", "Implement backup and recovery"] },
      ],
      sources: [
        { label: "Microsoft Learn — AZ-104 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104" },
        { label: "Microsoft Learn — Azure Administrator Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" },
        { label: "Microsoft Learn — Exam duration and exam experience", url: "https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AZ-104 Practice Exams: Azure Administrator (2026)",
      description:
        "AZ-104 practice exams for the April 2026 skills outline: identity and governance, storage, compute, networking, monitoring and backup, with explanations.",
    },
  },

  "nvidia-nca-genl": {
    description:
      "Practice exams for the NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL), written to the five weighted exam topics NVIDIA publishes — core ML and AI knowledge, data analysis, experimentation, software development and trustworthy AI. Check your understanding of transformers, RAG, prompt engineering, fine-tuning and NVIDIA inference tooling before the 1-hour exam.",
    fullName: "NVIDIA-Certified Associate: Generative AI LLMs",
    // Verified 27 Oct 2026 against nvidia.com (exam page, certification FAQ) and the
    // official NCA-GENL study guide PDF (footer "Jan25"). Delivery details come from the
    // general certification FAQ; the exam page itself only names Certiverse for registration.
    exam: {
      officialName: "NVIDIA-Certified Associate: Generative AI LLMs",
      examCode: "NCA-GENL",
      questionCount: "50–60",
      duration: "1 hour",
      format: "Multiple choice",
      passingScore: "Pass/fail — NVIDIA does not report a score",
      languages: ["English"],
      delivery: "Registration via a Certiverse account; NVIDIA's FAQ describes remotely proctored online exams (secure browser, camera and audio monitoring, no breaks)",
      prerequisites: "No formal prerequisites; a basic understanding of generative AI and large language models is recommended. Valid for two years; recertify by retaking the exam.",
      status: "current",
      officialCertificationUrl: "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/",
      officialExamUrl: "https://www.certiverse.com/#/checkout/nvidia/store-exam/NCA-GENL",
      domains: [
        {
          id: "d1",
          name: "Core Machine Learning and AI Knowledge",
          weight: "30%",
          objectives: [
            "Assist in deployment and evaluation of model scalability, performance, and reliability under the supervision of senior team members.",
            "Awareness of the process of extracting insights from large datasets using data mining, data visualization, and similar techniques.",
            "Build LLM use cases such as retrieval-augmented generation (RAG), chatbots, and summarizers.",
            "Curate and embed content datasets for RAGs.",
            "Familiarity with the fundamentals of machine learning (e.g., feature engineering, model comparison, cross validation).",
            "Familiarity with the capabilities of Python natural language packages (spaCy, NumPy, vector databases, etc.).",
            "Read research papers (articles, conference papers, etc.) to identify emerging LLM trends and technologies.",
            "Select and use models to create text embeddings.",
            "Use prompt engineering principles to create prompts to achieve desired results.",
            "Use Python packages (spaCy, NumPy, Keras, etc.) to implement specific traditional machine learning analyses.",
          ],
        },
        {
          id: "d2",
          name: "Data Analysis",
          weight: "14%",
          objectives: [
            "Awareness of the process of extracting insights from large datasets using data mining, data visualization, and similar techniques.",
            "Compare models using statistical performance metrics, such as loss functions or proportion of explained variance.",
            "Conduct data analysis under the supervision of a senior team member.",
            "Create graphs, charts, or other visualizations to convey the results of data analysis using specialized software.",
            "Identify relationships and trends or any factors that could affect the results of research.",
          ],
        },
        {
          id: "d3",
          name: "Experimentation",
          weight: "22%",
          objectives: [
            "Assist in model training and training optimization under the supervision of a senior team member.",
            "Assist in preparing (e.g., scraping, tokenization) large datasets for pretraining, fine-tuning, and RLHF.",
            "Assist in the design and conduct of hardware or software tests for LLM applications.",
            "Assist in the evaluation of current or emerging technologies to consider factors such as cost, portability, compatibility, or usability.",
            "Awareness of, and/or participation in, data collection from human subjects (e.g., RLHF).",
            "Evaluate and refine existing models / benchmarking.",
            "Executes experimentation to evaluate models and pipelines.",
          ],
        },
        {
          id: "d4",
          name: "Software Development",
          weight: "24%",
          objectives: [
            "Assist in the deployment and evaluations of model scalability, performance, and reliability under the supervision of a senior team member.",
            "Build LLM use cases such as RAGs, chatbots, and summarizers.",
            "Familiarity with the capabilities of Python natural language packages (spaCy, NumPy, vector databases, etc.).",
            "Identify system data, hardware, or software components required to meet user needs.",
            "Monitor functioning of data collection, experiments, and other software processes.",
            "Use Python packages (spaCy, NumPy, Keras, etc.) to implement specific traditional machine learning analyses.",
            "Write software components or scripts under the supervision of a senior team member.",
          ],
        },
        {
          id: "d5",
          name: "Trustworthy AI",
          weight: "10%",
          objectives: [
            "Describe the ethical principles of trustworthy AI.",
            "Describe the balance between data privacy and the importance of data consent.",
            "Describe how to use NVIDIA and other technologies to improve AI trustworthiness.",
            "Describe how to minimize bias in AI systems.",
          ],
        },
      ],
      sources: [
        { label: "NVIDIA — NCA-GENL Generative AI LLMs certification exam", url: "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/" },
        { label: "NVIDIA — Certification FAQs and exam policies", url: "https://www.nvidia.com/en-us/learn/certification/" },
        { label: "NVIDIA — NCA-GENL exam study guide (PDF)", url: "https://dam-cdn.nvd.orangelogic.com/AssetLink/ik3amm6oy7871nv371600i4h7drvex5m.pdf" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "NCA-GENL Practice Exams: NVIDIA Generative AI LLMs (2026)",
      description:
        "NVIDIA NCA-GENL practice exams across all five weighted topics: ML fundamentals, RAG, prompting, LoRA, RLHF, inference tooling and trustworthy AI.",
    },
  },


  /* ── Content batch 3, October 2026 — exam facts verified 27 Oct 2026 against the
   * official provider sources listed in each entry. ──────────────────────── */

  "comptia-security-plus-sy0-701": {
    description:
      "Practice exams for CompTIA Security+ SY0-701 (V7), written to the official exam objectives (V7) — security controls, threats and mitigations, architecture, security operations and governance. SY0-701 retires on 11 June 2027 in English and 13 August 2027 in the other languages; its successor SY0-801 (V8) is expected to launch on or around 17 November 2026.",
    fullName: "CompTIA Security+ (SY0-701)",
    exam: {
      officialName: "CompTIA Security+",
      examCode: "SY0-701",
      examVersion: "Security+ V7 (exam objectives document version 7.0)",
      questionCount: "Maximum of 90",
      duration: "90 minutes",
      passingScore: "750 (on a scale of 100–900)",
      questionTypes: "Multiple-choice and performance-based",
      languages: ["English", "Japanese", "Portuguese", "Spanish", "Thai"],
      prerequisites: "Recommended experience: CompTIA Network+ and two years of experience working in a security/systems administrator job role. Valid for three years; renew with 50 CEUs.",
      status: "retiring",
      launchDate: "7 November 2023",
      retirementDate: "English: 11 June 2027; Japanese, Portuguese, Spanish and Thai: 13 August 2027",
      officialCertificationUrl: "https://www.comptia.org/en-us/certifications/security/",
      officialExamUrl: "https://www.comptia.org/en-us/certifications/security/v7/",
      domains: [
        {
          id: "d1",
          name: "General Security Concepts",
          weight: "12%",
          objectives: [
            "1.1 Compare and contrast various types of security controls.",
            "1.2 Summarize fundamental security concepts.",
            "1.3 Explain the importance of change management processes and the impact to security.",
            "1.4 Explain the importance of using appropriate cryptographic solutions.",
          ],
        },
        {
          id: "d2",
          name: "Threats, Vulnerabilities, and Mitigations",
          weight: "22%",
          objectives: [
            "2.1 Compare and contrast common threat actors and motivations.",
            "2.2 Explain common threat vectors and attack surfaces.",
            "2.3 Explain various types of vulnerabilities.",
            "2.4 Given a scenario, analyze indicators of malicious activity.",
            "2.5 Explain the purpose of mitigation techniques used to secure the enterprise.",
          ],
        },
        {
          id: "d3",
          name: "Security Architecture",
          weight: "18%",
          objectives: [
            "3.1 Compare and contrast security implications of different architecture models.",
            "3.2 Given a scenario, apply security principles to secure enterprise infrastructure.",
            "3.3 Compare and contrast concepts and strategies to protect data.",
            "3.4 Explain the importance of resilience and recovery in security architecture.",
          ],
        },
        {
          id: "d4",
          name: "Security Operations",
          weight: "28%",
          objectives: [
            "4.1 Given a scenario, apply common security techniques to computing resources.",
            "4.2 Explain the security implications of proper hardware, software, and data asset management.",
            "4.3 Explain various activities associated with vulnerability management.",
            "4.4 Explain security alerting and monitoring concepts and tools.",
            "4.5 Given a scenario, modify enterprise capabilities to enhance security.",
            "4.6 Given a scenario, implement and maintain identity and access management.",
            "4.7 Explain the importance of automation and orchestration related to secure operations.",
            "4.8 Explain appropriate incident response activities.",
            "4.9 Given a scenario, use data sources to support an investigation.",
          ],
        },
        {
          id: "d5",
          name: "Security Program Management and Oversight",
          weight: "20%",
          objectives: [
            "5.1 Summarize elements of effective security governance.",
            "5.2 Explain elements of the risk management process.",
            "5.3 Explain the processes associated with third-party risk assessment and management.",
            "5.4 Summarize elements of effective security compliance.",
            "5.5 Explain types and purposes of audits and assessments.",
            "5.6 Given a scenario, implement security awareness practices.",
          ],
        },
      ],
      sources: [
        { label: "CompTIA — Security+ V7 (SY0-701) exam details", url: "https://www.comptia.org/en-us/certifications/security/v7/" },
        { label: "CompTIA — Security+ SY0-701 V7 Exam Objectives (PDF)", url: "https://lecbyo.files.cmp.optimizely.com/download/cf25ec24b8a511ef9ecbb69c0f9687be" },
        { label: "CompTIA — Security+ V8 (SY0-801), expected on or around 17 November 2026", url: "https://www.comptia.org/en-us/certifications/security/v8/" },
        { label: "CompTIA — How long does the Security+ certification last?", url: "https://www.comptia.org/en-us/blog/how-long-does-the-comptia-security-certification-last/" },
        { label: "CompTIA — CE renewal cycle", url: "https://www.comptia.org/en-us/resources/ce/learn/how-to-renew/ce-renewal-cycle/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "Security+ SY0-701 Practice Exams (V7, 2026)",
      description:
        "CompTIA Security+ SY0-701 practice exams for the five official domains, with explanations. Max 90 questions, 90 minutes, pass mark 750; retires June 2027.",
    },
  },

  "az-900": {
    description:
      "Practice exams for Microsoft AZ-900: Azure Fundamentals, written to the skills measured as of 20 July 2026 — cloud concepts, Azure architecture and services, and management and governance. Find your gaps before the 45-minute exam.",
    fullName: "Microsoft Azure Fundamentals",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide, certification page, exam page, renewal page).
    exam: {
      officialName: "Microsoft Certified: Azure Fundamentals",
      examCode: "AZ-900",
      examVersion: "Skills measured as of 20 July 2026",
      duration: "45 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Japanese", "Chinese (Simplified)", "Korean", "Spanish", "German", "French", "Indonesian (Indonesia)", "Arabic (Saudi Arabia)", "Chinese (Traditional)", "Italian", "Portuguese (Brazil)", "Russian"],
      delivery: "Proctored exam scheduled through Pearson VUE; students and educators can schedule through Certiport",
      prerequisites: "None. Fundamentals certifications do not expire.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-900/",
      domains: [
        { id: "d1", name: "Describe cloud concepts", weight: "25–30%", objectives: ["Describe cloud computing", "Describe the benefits of using cloud services", "Describe cloud service types"] },
        { id: "d2", name: "Describe Azure architecture and services", weight: "35–40%", objectives: ["Describe the core architectural components of Azure", "Describe Azure compute and networking services", "Describe Azure storage services", "Describe Azure identity, access, and security"] },
        { id: "d3", name: "Describe Azure management and governance", weight: "30–35%", objectives: ["Describe cost management in Azure", "Describe features and tools in Azure for governance and compliance", "Describe features and tools for managing and deploying Azure resources", "Describe monitoring tools in Azure"] },
      ],
      sources: [
        { label: "Microsoft Learn — AZ-900 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" },
        { label: "Microsoft Learn — Azure Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AZ-900 Practice Exams: Azure Fundamentals (2026)",
      description:
        "AZ-900 practice exams for the July 2026 skills outline: cloud concepts, Azure architecture, storage, identity, governance and monitoring, with explanations.",
    },
  },

  "sc-300": {
    description:
      "Practice exams for Microsoft SC-300: Identity and Access Administrator, written to the skills measured as of 28 October 2026 — Microsoft Entra user and hybrid identities, authentication and Conditional Access, Global Secure Access, workload identities and identity governance. Check your level before the 100-minute exam.",
    fullName: "Microsoft Identity and Access Administrator",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide + certification page).
    // Note: the study guide's "Skills at a glance" gives d2 as 25–30%, its detailed heading says 20–25%; the summary figure is used.
    exam: {
      officialName: "Microsoft Certified: Identity and Access Administrator Associate",
      examCode: "SC-300",
      examVersion: "Skills measured as of 28 October 2026 (English exam update on 28 October 2026)",
      duration: "100 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "German", "Spanish", "French", "Italian", "Japanese", "Korean", "Portuguese (Brazil)", "Chinese (Simplified)", "Chinese (Traditional)"],
      delivery: "Proctored exam scheduled through Pearson VUE",
      prerequisites: "No formal prerequisites. Microsoft recommends familiarity with Azure, Microsoft 365, AD DS, PowerShell and KQL. Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-300/",
      domains: [
        { id: "d1", name: "Implement and manage user identities", weight: "20–25%", objectives: ["Configure and manage a Microsoft Entra tenant", "Create, configure, and manage Microsoft Entra identities", "Implement and manage identities for external users and tenants", "Implement and manage hybrid identity"] },
        { id: "d2", name: "Implement authentication and access management", weight: "25–30% (detailed section of the study guide says 20–25%)", objectives: ["Plan, implement, and manage Microsoft Entra user authentication", "Plan, implement, and manage Microsoft Entra Conditional Access", "Manage risk by using Microsoft Entra ID Protection", "Implement Global Secure Access"] },
        { id: "d3", name: "Plan and implement workload identities", weight: "20–25%", objectives: ["Plan and implement identities for applications and Azure workloads", "Plan, implement, and monitor the integration of enterprise applications", "Plan and implement app registrations", "Manage and monitor app access by using Microsoft Defender for Cloud Apps"] },
        { id: "d4", name: "Plan and automate identity governance", weight: "20–25%", objectives: ["Plan and implement entitlement management in Microsoft Entra", "Plan, implement, and manage access reviews in Microsoft Entra", "Plan and implement privileged access", "Monitor identity activity by using logs, workbooks, and reports"] },
      ],
      sources: [
        { label: "Microsoft Learn — SC-300 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-300" },
        { label: "Microsoft Learn — Identity and Access Administrator Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "SC-300 Practice Exams: Identity and Access Administrator",
      description:
        "SC-300 practice exams for the Oct 2026 skills outline: Entra ID, Conditional Access, Global Secure Access, workload identities, PIM and governance, explained.",
    },
  },

  "ab-100": {
    description:
      "Practice exams for Microsoft AB-100: Agentic AI Business Solutions Architect, written to the skills measured as of 16 November 2026 — AI strategy and ROI, agent design in Copilot Studio, Microsoft 365 Copilot and Microsoft Foundry, ALM, testing and responsible AI. Find your gaps before you book the Expert-level exam.",
    fullName: "Agentic AI Business Solutions Architect",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide, exam page, certification page).
    // Exam duration is not stated on any AB-100 page, so it is left out.
    exam: {
      officialName: "Microsoft Certified: Agentic AI Business Solutions Architect Expert",
      examCode: "AB-100",
      examVersion: "Skills measured as of 16 November 2026 (English exam update on 16 November 2026)",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Arabic (Saudi Arabia)", "Japanese", "Chinese (Simplified)", "Chinese (Traditional)", "Korean", "German", "French", "Indonesian (Indonesia)", "Italian", "Portuguese (Brazil)", "Russian", "Spanish"],
      delivery: "Proctored exam scheduled through Pearson VUE",
      prerequisites: "To earn the Expert certification you must pass AB-100 and hold at least one of the prerequisite associate certifications listed by Microsoft (for example Power Platform Developer, Azure AI Apps and Agents Developer or a Dynamics 365 associate). Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-business-solutions-architect/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-100/",
      domains: [
        { id: "d1", name: "Plan AI-powered business solutions", weight: "35–40%", objectives: ["Analyze requirements for AI-powered business solutions", "Design overall AI strategy for business solutions", "Evaluate the costs and benefits of an AI-powered business solution"] },
        { id: "d2", name: "Design AI-powered business solutions", weight: "30–35%", objectives: ["Design AI and agents for business solutions", "Design extensibility of AI solutions", "Orchestrate configuration for prebuilt agents and apps"] },
        { id: "d3", name: "Deploy AI-powered business solutions", weight: "20–25%", objectives: ["Analyze, monitor, and tune AI-powered business solutions", "Manage the testing of AI-powered business solutions", "Design the ALM process for AI-powered business solutions", "Design responsible AI, security, governance, risk management, and compliance"] },
      ],
      sources: [
        { label: "Microsoft Learn — AB-100 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-100" },
        { label: "Microsoft Learn — Exam AB-100", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-100/" },
        { label: "Microsoft Learn — Agentic AI Business Solutions Architect Expert", url: "https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-business-solutions-architect/" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AB-100 Practice Exams: Agentic AI Business Solutions Architect",
      description:
        "AB-100 practice exams for the Nov 2026 skills outline: AI strategy, ROI, agent design in Copilot Studio and Foundry, ALM, testing and responsible AI.",
    },
  },

  "iapp-cipm": {
    description:
      "Practice exams for the IAPP CIPM, written against body of knowledge and exam blueprint version 4.2.0 (effective 1 September 2025): building a privacy programme framework and governance, assessing data and vendors, protecting personal data, measuring and auditing the programme, and handling rights requests and incidents. Find your gaps before the 90-question exam.",
    fullName: "IAPP Certified Information Privacy Manager (CIPM)",
    exam: {
      officialName: "Certified Information Privacy Manager (CIPM)",
      examVersion: "Body of knowledge and exam blueprint 4.2.0, effective 1 September 2025",
      questionCount: "90 multiple-choice questions",
      duration: "2.5 hours, with an optional 15-minute break offered halfway through",
      format: "Multiple choice (some questions with more than one correct answer); some questions may be scenario-based",
      passingScore: "300 or above (scale 100–500)",
      languages: ["English", "French", "German", "Simplified Chinese", "Brazilian Portuguese"],
      delivery: "Pearson VUE, at a test centre or online via OnVUE remote proctoring",
      prerequisites: "No formal prerequisites stated. Maintenance: 20 CPE credits per two-year term plus the certification maintenance fee (included in IAPP membership).",
      status: "current",
      officialCertificationUrl: "https://iapp.org/certify/cipm",
      officialExamUrl: "https://store.iapp.org/cipm-exam/",
      domains: [
        {
          id: "d1",
          name: "Privacy Program: Developing a Framework",
          weight: "14–18 questions",
          objectives: [
            "I.A Define program scope and develop a privacy strategy",
            "I.B Communicate organizational vision and mission statement",
            "I.C Indicate in-scope laws, regulations and standards applicable to the program",
          ],
        },
        {
          id: "d2",
          name: "Privacy Program: Establishing Program Governance",
          weight: "12–16 questions",
          objectives: [
            "II.A Create policies and processes to be followed across all stages of the privacy program life cycle",
            "II.B Clarify roles and responsibilities",
            "II.C Define privacy metrics for oversight and governance",
            "II.D Establish training and awareness activities",
          ],
        },
        {
          id: "d3",
          name: "Privacy Program Operational Life Cycle: Assessing Data",
          weight: "12–16 questions",
          objectives: [
            "III.A Document data governance systems",
            "III.B Evaluate processors and third-party vendors",
            "III.C Evaluate physical and environmental controls",
            "III.D Evaluate technical controls",
            "III.E Evaluate risks associated with shared data in mergers, acquisitions and divestitures",
          ],
        },
        {
          id: "d4",
          name: "Privacy Program Operational Life Cycle: Protecting Personal Data",
          weight: "9–13 questions",
          objectives: [
            "IV.A Apply information security practices and policies",
            "IV.B Integrate the main principles of Privacy by Design (PbD)",
            "IV.C Apply organizational guidelines for data use and ensure technical controls are enforced",
          ],
        },
        {
          id: "d5",
          name: "Privacy Program Operational Life Cycle: Sustaining Program Performance",
          weight: "7–9 questions",
          objectives: [
            "V.A Use metrics to measure the performance of the privacy program",
            "V.B Audit the privacy program",
            "V.C Manage continuous assessment of the privacy program",
          ],
        },
        {
          id: "d6",
          name: "Privacy Program Operational Life Cycle: Responding to Requests and Incidents",
          weight: "10–14 questions",
          objectives: [
            "VI.A Respond to data subject access requests and privacy rights",
            "VI.B Follow organizational incident handling and response procedures",
            "VI.C Evaluate and modify current incident response plan",
          ],
        },
      ],
      sources: [
        { label: "IAPP — CIPM certification", url: "https://iapp.org/certify/cipm" },
        { label: "IAPP store — CIPM exam", url: "https://store.iapp.org/cipm-exam/" },
        {
          label: "IAPP — CIPM body of knowledge and exam blueprint 4.2.0 (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt39d7942c0a9a9f0f/CIPM_BoK_EBP.pdf",
        },
        {
          label: "IAPP — Certification candidate handbook (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf",
        },
        {
          label: "IAPP — CPE policy (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt25df7f1b0d8c84f7/CPE_Policy.pdf",
        },
        { label: "IAPP store — Certification maintenance fee", url: "https://store.iapp.org/certification-maintenance-fee" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "CIPM Practice Exams: IAPP Certified Privacy Manager (2026)",
      description:
        "CIPM practice exams for body of knowledge 4.2.0: privacy programme framework, governance, data assessment, protection, metrics, audits, DSARs and incidents.",
    },
  },

  "google-cloud-agentic-architect": {
    description:
      "Practice exams for the Google Cloud Professional Agentic Architect certification, written against the five sections of the official exam guide and the current Gemini Enterprise Agent Platform product names — low-code agents, coding agents, custom agents with ADK, evaluation and deployment, and agent security. Check your level before the 3-hour multiple-choice exam (beta format, about 80 questions).",
    fullName: "Google Cloud Certified Professional Agentic Architect",
    exam: {
      officialName: "Professional Agentic Architect",
      examVersion: "Beta exam; Google states the GA exam launches in mid-November 2026",
      questionCount: "About 80 (beta exam)",
      duration: "3 hours (beta exam)",
      format: "Part 1: proctored multiple-choice exam. Part 2: PAA hands-on labs in Google Skills, unlocked after passing Part 1",
      questionTypes: "Multiple choice",
      languages: ["English"],
      delivery: "Part 1 delivered by Pearson, online-proctored or onsite-proctored; Part 2 labs in Google Skills",
      prerequisites: "None. Recommended: 3+ years of hands-on experience building, testing, deploying and managing cloud solutions, including 1+ years building agentic solutions using Google Cloud. Certification valid for 1 year.",
      status: "current",
      officialCertificationUrl: "https://cloud.google.com/learn/certification/agentic-architect",
      domains: [
        { id: "d1", name: "Building agents using low-code tools", weight: "~13%", objectives: ["1.1 Configuring agentic workflows and behavior using low-code tools", "1.2 Connecting enterprise data to Gemini Enterprise"] },
        { id: "d2", name: "Using coding agents for application development", weight: "~17%", objectives: ["2.1 Using coding agents effectively", "2.2 Customizing coding agents for enterprise workflows"] },
        { id: "d3", name: "Developing custom agents", weight: "~33%", objectives: ["3.1 Designing and building agentic workflows in code", "3.2 Integrating enterprise domain knowledge", "3.3 Orchestrating and coordinating agentic workflows"] },
        { id: "d4", name: "Evaluating and deploying agentic workflows", weight: "~22%", objectives: ["4.1 Evaluating agents in development and in production", "4.2 Deploying and scaling production workloads"] },
        { id: "d5", name: "Securing and governing agentic workflows", weight: "~15%", objectives: ["5.1 Configuring agent security and governance", "5.2 Implementing secure agent behavior and execution"] },
      ],
      sources: [
        { label: "Google Cloud — Professional Agentic Architect certification", url: "https://cloud.google.com/learn/certification/agentic-architect" },
        { label: "Google Cloud — Professional Agentic Architect exam guide (PDF)", url: "https://services.google.com/fh/files/misc/professional_agentic_architect_exam_guide_english.pdf" },
        { label: "Google Cloud — Gemini Enterprise Agent Platform name changes", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "Google Cloud Agentic Architect Practice Exams (PAA 2026)",
      description:
        "Professional Agentic Architect practice exams for all five exam guide sections: low-code agents, coding agents, ADK, evaluation, deployment and security.",
    },
  },

  "istqb-ctal-ta": {
    description:
      "Practice exams for the ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA), written to syllabus v4.0 — test analyst tasks, risk-based testing, data-, behaviour- and rule-based test techniques, quality characteristics and defect prevention. Check your level before the 45-question, 120-minute exam.",
    fullName: "ISTQB Certified Tester Advanced Level Test Analyst",
    // Verified 27 Oct 2026 against istqb.org (certification page, CTAL-TA v4.0 syllabus, LO new vs. old syllabus,
    // Exam Structures and Rules v1.2, Exam Structure and Rules Tables v1.19, v4.0 FAQ and v3.1 retirement page).
    exam: {
      officialName: "ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA)",
      examCode: "CTAL-TA",
      examVersion: "Syllabus v4.0 (released 2 May 2025)",
      questionCount: "45",
      duration: "120 minutes (150 minutes with the 25% extension if the exam language is not your native language)",
      format: "45 multiple-choice questions worth 78 points in total",
      passingScore: "51 of 78 points (65%)",
      questionTypes: "Multiple choice; 18 K2 questions worth 1 point, 21 K3 questions worth 2 points and 6 K4 questions worth 3 points",
      delivery: "Through ISTQB Member Boards and Exam Providers",
      prerequisites: "ISTQB Certified Tester Foundation Level (CTFL) certificate (v4.0 preferred, earlier versions accepted). ISTQB also expects sufficient practical experience; the criteria are set by the Member Board or Exam Provider. ISTQB certificates are valid for life.",
      status: "current",
      officialCertificationUrl: "https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/",
      domains: [
        {
          id: "d1",
          name: "The Tasks of the Test Analyst in the Test Process",
          weight: "8 questions, 9 of 78 points",
          objectives: [
            "TA-1.1.1 (K2) Summarize the involvement of the test analyst in various software development lifecycles",
            "TA-1.2.1 (K2) Summarize the tasks performed by the test analyst as part of test analysis",
            "TA-1.2.2 (K2) Summarize the tasks performed by the test analyst as part of test design",
            "TA-1.2.3 (K2) Summarize the tasks performed by the test analyst as part of test implementation",
            "TA-1.2.4 (K2) Summarize the tasks performed by the test analyst as part of test execution",
            "TA-1.3.1 (K2) Differentiate between high-level test cases and low-level test cases",
            "TA-1.3.2 (K2) Explain the quality criteria for test cases",
            "TA-1.3.3 (K2) Give examples of test environment requirements",
            "TA-1.3.4 (K2) Explain the test oracle problem and potential solutions",
            "TA-1.3.5 (K2) Give examples of test data requirements",
            "TA-1.3.6 (K3) Use keyword-driven testing to develop test scripts",
            "TA-1.3.7 (K2) Summarize the types of tools to manage the testware",
          ],
        },
        {
          id: "d2",
          name: "The Tasks of the Test Analyst in Risk-Based Testing",
          weight: "3 questions, 7 of 78 points",
          objectives: [
            "TA-2.1.1 (K2) Summarize the test analyst's contribution to product risk analysis",
            "TA-2.2.1 (K4) Analyze the impact of changes to determine the scope of regression testing",
          ],
        },
        {
          id: "d3",
          name: "Test Analysis and Test Design",
          weight: "22 questions, 42 of 78 points",
          objectives: [
            "TA-3.1.1 (K3) Apply domain testing",
            "TA-3.1.2 (K3) Apply combinatorial testing",
            "TA-3.1.3 (K2) Summarize the benefits and limitations of random testing",
            "TA-3.2.1 (K2) Explain CRUD testing",
            "TA-3.2.2 (K3) Apply state transition testing",
            "TA-3.2.3 (K3) Apply scenario-based testing",
            "TA-3.3.1 (K3) Apply decision table testing",
            "TA-3.3.2 (K3) Apply metamorphic testing",
            "TA-3.4.1 (K3) Prepare test charters for session-based testing",
            "TA-3.4.2 (K3) Prepare checklists that support experience-based testing",
            "TA-3.4.3 (K2) Give examples of the benefits and limitations of crowd testing",
            "TA-3.5.1 (K4) Select appropriate test techniques to mitigate product risks for a given situation",
            "TA-3.5.2 (K2) Explain the benefits and risks of automating the test design",
          ],
        },
        {
          id: "d4",
          name: "Testing Quality Characteristics",
          weight: "4 questions, 4 of 78 points",
          objectives: [
            "TA-4.1.1 (K2) Differentiate between functional correctness, functional appropriateness, and functional completeness testing",
            "TA-4.2.1 (K2) Explain how the test analyst contributes to usability testing",
            "TA-4.3.1 (K2) Explain how the test analyst contributes to adaptability and installability testing",
            "TA-4.4.1 (K2) Explain how the test analyst contributes to interoperability testing",
          ],
        },
        {
          id: "d5",
          name: "Software Defect Prevention",
          weight: "8 questions, 16 of 78 points",
          objectives: [
            "TA-5.1.1 (K2) Explain how the test analyst can contribute to defect prevention",
            "TA-5.2.1 (K3) Use a model of the test object to detect defects in a specification",
            "TA-5.2.2 (K3) Apply a review technique to a test basis to find defects",
            "TA-5.3.1 (K4) Analyze test results to identify potential improvements to defect detection",
            "TA-5.3.2 (K2) Explain how defect classification supports root cause analysis",
          ],
        },
      ],
      sources: [
        { label: "ISTQB — Certified Tester Advanced Level Test Analyst (CTAL-TA)", url: "https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/" },
        { label: "ISTQB — CTAL-TA Syllabus v4.0 (PDF)", url: "https://www.istqb.org/wp-content/uploads/sdm-uploads/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf" },
        { label: "ISTQB — CTAL-TA Learning Objectives, new vs. old syllabus (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=6363" },
        { label: "ISTQB — Exam Structure and Rules Tables v1.19 (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=3832" },
        { label: "ISTQB — Exam Structures and Rules v1.2 (PDF)", url: "https://istqb.org/wp-content/uploads/sdm-uploads/ISTQB_Exam-Structures-and-Rules_v1.2.pdf" },
        { label: "ISTQB — CTAL-TA v4.0 FAQ", url: "https://istqb.org/help/test-analyst/" },
        { label: "ISTQB — CTAL-TA v3.1 retirement", url: "https://istqb.org/certifications/certified-tester-advanced-level-test-analyst-retiring/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "ISTQB CTAL-TA v4.0 Practice Exams: Test Analyst (2026)",
      description:
        "CTAL-TA v4.0 practice exams: test analyst tasks, risk-based testing, test techniques, quality characteristics and defect prevention, with explanations.",
    },
  },

  "istqb-ct-genai": {
    description:
      "Practice exams for the ISTQB Certified Tester Testing with Generative AI (CT-GenAI), written to syllabus v1.1 — GenAI and LLM basics, prompt engineering for test tasks, hallucinations and data privacy risks, RAG and agents, and adopting GenAI in a test organisation. Check your level before the 40-question, 60-minute exam.",
    fullName: "ISTQB Certified Tester Testing with Generative AI",
    // Verified 27 Oct 2026 against istqb.org (certification page, v1.1 announcement, Exam Structures and Rules v1.2,
    // Exam Structure and Rules Tables v1.19) and the ISTQB CT-GenAI syllabus (v1.0 EN, v1.1 FR revision history).
    exam: {
      officialName: "ISTQB Certified Tester Testing with Generative AI (CT-GenAI)",
      examCode: "CT-GenAI",
      examVersion: "Syllabus v1.1 (minor update of 27 April 2026; learning objectives unchanged from v1.0 of 25 July 2025)",
      questionCount: "40",
      duration: "60 minutes (75 minutes with the 25% extension if the exam language is not your native language)",
      format: "40 multiple-choice questions worth 46 points in total",
      passingScore: "30 of 46 points (65%)",
      questionTypes: "Multiple choice; 8 K1 and 26 K2 questions worth 1 point, 6 K3 questions worth 2 points",
      delivery: "Through ISTQB Member Boards and Exam Providers",
      prerequisites: "ISTQB Certified Tester Foundation Level (CTFL) certificate",
      status: "current",
      officialCertificationUrl: "https://istqb.org/certifications/gen-ai/",
      domains: [
        {
          id: "d1",
          name: "Introduction to GenAI for Software Testing",
          weight: "7 questions, 7 of 46 points",
          objectives: [
            "GenAI-1.1.1 (K1) Recall different types of AI: symbolic AI, classical machine learning, deep learning, and generative AI",
            "GenAI-1.1.2 (K2) Explain the basics of generative AI and large language models",
            "GenAI-1.1.3 (K2) Distinguish between foundation, instruction-tuned and reasoning LLMs",
            "GenAI-1.1.4 (K2) Summarize the basic principles of multimodal LLMs and vision-language models",
            "GenAI-1.2.1 (K2) Give examples of key LLM capabilities for test tasks",
            "GenAI-1.2.2 (K2) Compare interaction models when using GenAI for software testing",
          ],
        },
        {
          id: "d2",
          name: "Prompt Engineering for Effective Software Testing",
          weight: "11 questions, 16 of 46 points",
          objectives: [
            "GenAI-2.1.1 (K2) Give examples of the structure of prompts used in generative AI for software testing",
            "GenAI-2.1.2 (K2) Differentiate core prompting techniques for software testing",
            "GenAI-2.1.3 (K2) Distinguish between system prompts and user prompts",
            "GenAI-2.2.1 (K3) Apply generative AI to test analysis tasks",
            "GenAI-2.2.2 (K3) Apply generative AI to test design and test implementation tasks",
            "GenAI-2.2.3 (K3) Apply generative AI to automated regression testing",
            "GenAI-2.2.4 (K3) Apply generative AI to test control and monitoring tasks",
            "GenAI-2.2.5 (K3) Select and apply appropriate prompting techniques for a given context and test task",
            "GenAI-2.3.1 (K2) Understand the metrics for evaluating the results of Generative AI on test tasks",
            "GenAI-2.3.2 (K2) Give examples of techniques for evaluating and iteratively refining prompts",
          ],
        },
        {
          id: "d3",
          name: "Managing Risks of GenAI in Software Testing Process",
          weight: "10 questions, 11 of 46 points",
          objectives: [
            "GenAI-3.1.1 (K1) Recall the definitions of hallucinations, reasoning errors and biases in Generative AI systems",
            "GenAI-3.1.2 (K3) Identify hallucinations, reasoning errors and biases in LLM output",
            "GenAI-3.1.3 (K2) Summarize mitigation techniques for GenAI hallucinations, reasoning errors and biases in software test tasks",
            "GenAI-3.1.4 (K1) Recall mitigation techniques for non-deterministic behavior of LLMs",
            "GenAI-3.2.1 (K2) Explain key data privacy and security risks associated with using generative AI in software testing",
            "GenAI-3.2.2 (K2) Give examples of data privacy and vulnerabilities in using Generative AI in software testing",
            "GenAI-3.2.3 (K2) Summarize mitigation strategies to protect data privacy and enhance security in Generative AI for software testing",
            "GenAI-3.3.1 (K2) Explain the impact of task characteristics and model usage on the energy consumption of Generative AI in software testing",
            "GenAI-3.4.1 (K1) Recall examples of AI regulations, standards and best practice frameworks relevant to Generative AI in software testing",
          ],
        },
        {
          id: "d4",
          name: "LLM-Powered Solutions for Software Testing",
          weight: "5 questions, 5 of 46 points",
          objectives: [
            "GenAI-4.1.1 (K2) Explain key architectural components and concepts of LLM-powered test infrastructure",
            "GenAI-4.1.2 (K2) Summarize Retrieval-Augmented Generation",
            "GenAI-4.1.3 (K2) Explain the role and application of LLM-powered agents in automating test processes",
            "GenAI-4.2.1 (K2) Explain the fine-tuning of language models for specific test tasks",
            "GenAI-4.2.2 (K2) Explain LLMOps and its role in deploying and managing LLMs for test tasks",
          ],
        },
        {
          id: "d5",
          name: "Deploying and Integrating GenAI in Test Organizations",
          weight: "7 questions, 7 of 46 points",
          objectives: [
            "GenAI-5.1.1 (K1) Recall the risks of shadow AI",
            "GenAI-5.1.2 (K2) Explain the key aspects to consider when defining a Generative AI strategy for software testing",
            "GenAI-5.1.3 (K2) Summarize key criteria for selecting LLMs/SLMs for software test tasks in a given context",
            "GenAI-5.1.4 (K1) Recall key phases in the adoption of Generative AI in a test organization",
            "GenAI-5.2.1 (K2) Explain the essential skills and knowledge areas required for testers to work effectively with generative AI in test processes",
            "GenAI-5.2.2 (K1) Recall strategies for cultivating AI skills within test teams to support the adoption of Generative AI in test activities",
            "GenAI-5.2.3 (K1) Recognize how test processes and responsibilities shift within a test organization when adopting Generative AI",
          ],
        },
      ],
      sources: [
        { label: "ISTQB — Certified Tester Testing with Generative AI (CT-GenAI)", url: "https://istqb.org/certifications/gen-ai/" },
        { label: "ISTQB — Minor update to CT-GenAI (v1.1)", url: "https://istqb.org/istqb-announces-minor-update-to-certified-tester-testing-with-generative-ai-ct-genai/" },
        { label: "ISTQB — CT-GenAI launch press release", url: "https://istqb.org/istqb-certified-tester-specialist-level-testing-with-generative-ai-ct-genai-press-release/" },
        { label: "ISTQB — Exam Structure and Rules Tables v1.19 (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=3832" },
        { label: "ISTQB — Exam Structures and Rules v1.2 (PDF)", url: "https://istqb.org/wp-content/uploads/sdm-uploads/ISTQB_Exam-Structures-and-Rules_v1.2.pdf" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "ISTQB CT-GenAI v1.1 Practice Exams: Testing with GenAI",
      description:
        "CT-GenAI v1.1 practice exams: LLM basics, prompt engineering for testing, hallucinations, data privacy, RAG, agents and GenAI adoption, with explanations.",
    },
  },


  /* ── Content batch 4, October 2026 — exam facts verified 27 Oct 2026 against the
   * official provider sources listed in each entry. ──────────────────────── */

  "aws-mla-c02": {
    description:
      "Practice exams for AWS MLA-C02: AWS Certified Machine Learning Engineer – Associate, written to the official MLA-C02 exam guide that replaces MLA-C01. Covers data preparation, model and foundation model development, deployment and orchestration, and operating, monitoring and securing ML and AI solutions — including Amazon SageMaker AI, Amazon Bedrock, RAG and agents.",
    fullName: "AWS Certified Machine Learning Engineer – Associate",
    exam: {
      officialName: "AWS Certified Machine Learning Engineer – Associate",
      examCode: "MLA-C02",
      examVersion: "MLA-C02 exam guide (beta exam; successor to MLA-C01)",
      questionCount: "85 questions in the beta exam; the exam guide specifies 50 scored and 15 unscored questions",
      duration: "170 minutes (beta exam)",
      format: "Multiple choice and multiple response",
      passingScore: "720 (scaled score 100–1,000, compensatory scoring)",
      questionTypes:
        "Multiple choice (one correct response and three distractors) and multiple response (two or more correct responses out of five or more options; all correct responses must be selected). Unanswered questions are scored as incorrect; there is no penalty for guessing. Unscored questions are not identified.",
      languages: ["English (beta exam); Japanese, Korean and Simplified Chinese at general availability"],
      delivery: "Pearson VUE testing centre or online proctored exam",
      prerequisites:
        "No formal prerequisites. AWS recommends at least 1 year of experience using Amazon SageMaker AI, Amazon Bedrock and other AWS services for ML engineering, at least 1 year in a related role (for example backend developer, DevOps developer, data engineer or data scientist), and experience with both traditional ML and generative AI. The certification is valid for 3 years.",
      status: "current",
      launchDate:
        "Beta registration opened 1 September 2026; beta exam delivery began 29 September 2026. AWS announced general availability for 14 January 2027 (the certification page currently lists GA dates as TBD).",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
      officialExamUrl:
        "https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html",
      domains: [
        {
          id: "d1",
          name: "Data Preparation for ML and AI",
          weight: "28%",
          objectives: [
            "1.1 Collect and store data",
            "1.2 Perform data transformation, feature engineering, and pre-processing",
            "1.3 Validate data quality and manage bias",
          ],
        },
        {
          id: "d2",
          name: "ML Model and Foundation Model (FM) Development",
          weight: "24%",
          objectives: [
            "2.1 Choose appropriate modeling approaches for ML and AI solutions",
            "2.2 Train, fine-tune, and customize models for ML and AI solutions",
            "2.3 Analyze and evaluate the performance of ML and AI systems",
          ],
        },
        {
          id: "d3",
          name: "Deployment and Orchestration of ML and AI Workflows",
          weight: "24%",
          objectives: [
            "3.1 Manage deployment infrastructure for ML and AI model types",
            "3.2 Provision and configure resources for ML and AI workloads based on existing architecture and requirements",
            "3.3 Implement automated orchestration and continuous integration and continuous delivery (CI/CD) pipelines for MLOps and AI workloads",
          ],
        },
        {
          id: "d4",
          name: "Operating, Monitoring, and Securing ML and AI Solutions",
          weight: "24%",
          objectives: [
            "4.1 Monitor ML and AI model inference and performance",
            "4.2 Optimize and manage ML and AI infrastructure costs and performance",
            "4.3 Secure ML and AI workloads and model endpoints",
          ],
        },
      ],
      sources: [
        { label: "AWS — AWS Certified Machine Learning Engineer – Associate", url: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/" },
        { label: "AWS — MLA-C02 exam guide", url: "https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html" },
        { label: "AWS — Comparison of MLA-C01 and MLA-C02", url: "https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/mla-02-comparison.html" },
        { label: "AWS Training and Certification Blog — Certification updates: September 2026 (1 September 2026)", url: "https://aws.amazon.com/blogs/training-and-certification/september-2026-new-offerings/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "MLA-C02 Practice Exams: AWS ML Engineer Associate (2026)",
      description:
        "MLA-C02 practice exams for AWS Certified Machine Learning Engineer – Associate: data prep, SageMaker AI, Bedrock, RAG, agents, MLOps and security, explained.",
    },
  },

  "cfe": {
    description:
      "Practice exams for the ACFE Certified Fraud Examiner (CFE) exam, written to the new three-section exam that launched on 2 June 2026 — Fraud Schemes and Financial Crimes, Fraud Investigations and Legal Issues, and Fraud Prevention and Deterrence. Find your weak areas before you start your 60-day eligibility window, where you need at least 75% in every section.",
    fullName: "Certified Fraud Examiner (CFE)",
    exam: {
      officialName: "Certified Fraud Examiner (CFE)",
      examCode: "CFE Exam",
      examVersion: "New exam version based on the 2024 Job Task Analysis, launched 2 June 2026",
      questionCount: "310 in total: 120 (Fraud Schemes and Financial Crimes), 120 (Fraud Investigations and Legal Issues), 70 (Fraud Prevention and Deterrence)",
      duration: "6.5 hours in total: 2.5 hours, 2.5 hours and 1.5 hours; each section is a separately timed exam taken in one sitting",
      format: "Three separately administered, closed-book sections; all sections must be completed within a 60-day eligibility window",
      passingScore: "At least 75% of the questions in each section answered correctly",
      questionTypes: "Multiple choice and true/false",
      languages: ["English"],
      delivery: "Live-proctored: online via Prometric ProProctor or at a Prometric testing centre; paper-based only at in-person CFE Exam Review Courses delivered by the ACFE",
      prerequisites: "ACFE Associate Membership and 40 eligibility points (education and fraud-related experience) to sit the exam; 50 points and at least two years of fraud-related professional experience to be certified. Up to five attempts per section. CFEs earn at least 20 CPE credits per annual compliance period (at least 10 on fraud detection and deterrence, 2 on ethics).",
      status: "current",
      launchDate: "2026-06-02",
      officialCertificationUrl: "https://www.acfe.com/cfe-credential/how-to-earn-your-cfe-credential",
      officialExamUrl: "https://www.acfe.com/cfe-credential/about-the-cfe-exam",
      domains: [
        { id: "d1", name: "Fraud Schemes and Financial Crimes", objectives: ["Types of fraud schemes and financial crimes committed against organizations and individuals", "Measures fraud examiners can take to prevent and detect fraud schemes and financial crimes"] },
        { id: "d2", name: "Fraud Investigations and Legal Issues", objectives: ["How to conduct a fraud investigation", "Employee rights during investigations", "Rules and procedures for collecting evidence", "Gathering and analyzing data", "Conducting interviews", "Report writing", "How to navigate the legal system"] },
        { id: "d3", name: "Fraud Prevention and Deterrence", objectives: ["Why people commit fraud", "Corporate governance", "The role of managers and auditors in combatting fraud", "How to conduct a fraud risk assessment", "How to manage fraud risk and build an effective fraud prevention program", "Ethical considerations in fraud examination"] },
      ],
      sources: [
        { label: "ACFE — 2026 CFE Exam Update (sections, questions, time, transition)", url: "https://www.acfe.com/cfe-credential/about-the-cfe-exam/2026-cfe-exam-update" },
        { label: "ACFE — About the CFE Exam (delivery, 60-day window)", url: "https://www.acfe.com/cfe-credential/about-the-cfe-exam" },
        { label: "ACFE — CFE Exam FAQs (passing score, language, retakes)", url: "https://www.acfe.com/cfe-credential/about-the-cfe-exam/cfe-exam-faqs" },
        { label: "ACFE — CFE Exam Content Outline", url: "https://www.acfe.com/cfe-credential/about-the-cfe-exam/exam-blueprint" },
        { label: "ACFE — CFE Credential Eligibility", url: "https://www.acfe.com/cfe-credential/eligibility" },
        { label: "ACFE — CPE requirements", url: "https://www.acfe.com/cfe-credential/continuing-professional-education-cpe-requirements" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "CFE Practice Exams: Certified Fraud Examiner (2026 Exam)",
      description:
        "CFE practice exams for the three-section ACFE exam launched June 2026: fraud schemes, investigations and legal issues, prevention and deterrence.",
    },
  },

  "giac-gaips": {
    description:
      "Practice exams for GIAC AI Platform Security (GAIPS), written against GIAC's eight published exam certification objectives — agentic systems, LLM foundations, application architecture, infrastructure, risk management, MLOps, retrieval and model customisation. Test yourself before the 54-question, 2-hour exam.",
    fullName: "GIAC AI Platform Security (GAIPS)",
    exam: {
      officialName: "GIAC AI Platform Security (GAIPS)",
      examCode: "GAIPS",
      examVersion: "Exam version released on or after 25 July 2026",
      questionCount: "54",
      duration: "2 hours",
      passingScore: "65% (exam versions released on or after 25 July 2026; confirm in the GIAC Certification Portal)",
      format: "1 proctored, web-based exam; open book (hard-copy books and notes only, not open internet or open computer); CyberLive hands-on format; 15 minutes of break time",
      delivery: "Remotely proctored via ProctorU or on site at a Pearson VUE test centre; 120 days from activation to complete the attempt",
      prerequisites: "None. Certification renewed every 4 years by earning 36 CPE credits or retaking the exam, plus a renewal fee.",
      status: "current",
      officialCertificationUrl: "https://www.giac.org/certifications/ai-security-platform-security-gaips",
      domains: [
        { id: "d1", name: "Agentic Systems and AI Integrations" },
        { id: "d2", name: "AI and LLM Foundations" },
        { id: "d3", name: "AI Application Architecture and Development Frameworks" },
        { id: "d4", name: "AI Infrastructure and Deployment Security" },
        { id: "d5", name: "AI Risk Management and Strategic Application" },
        { id: "d6", name: "Development Pipelines and MLOps Security" },
        { id: "d7", name: "Knowledge Augmentation and Retrieval" },
        { id: "d8", name: "Model Customization and Alignment" },
      ],
      sources: [
        { label: "GIAC — AI Platform Security (GAIPS)", url: "https://www.giac.org/certifications/ai-security-platform-security-gaips" },
        { label: "GIAC — Proctored exams and open book guidelines", url: "https://www.giac.org/knowledge-base/proctor" },
        { label: "GIAC — How to renew", url: "https://giac.org/renewal/how-to-renew" },
        { label: "SANS — SEC545: GenAI and LLM Application Security", url: "https://www.sans.org/cyber-security-courses/genai-llm-application-security-5day" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "GIAC GAIPS Practice Exams: AI Platform Security (2026)",
      description:
        "GIAC GAIPS practice exams for all eight objectives: agentic AI, LLM foundations, RAG, MLOps, infrastructure and AI risk management, with explanations.",
    },
  },

  "ccna-200-301": {
    description:
      "Practice exams for Cisco CCNA 200-301 (Implementing and Administering Cisco Solutions). v1.1 can be taken until 2 February 2027 and v2.0 goes live on 3 February 2027; the domains below follow the official v2.0 exam topics — addressing and subnetting, switching, OSPF, NAT, ACLs, Layer 2 security and AI in network operations. Check your level before the 120-minute exam.",
    fullName: "Cisco Certified Network Associate (CCNA)",
    exam: {
      officialName: "Cisco Certified Network Associate (CCNA)",
      examCode: "200-301 CCNA",
      examVersion: "v1.1 until 2 February 2027; v2.0 from 3 February 2027 (domains shown: v2.0 exam topics)",
      duration: "120 minutes",
      format: "Graded pass/fail",
      languages: ["English", "Japanese"],
      prerequisites: "None. The CCNA is valid for three years; recertify by passing qualifying exams or by earning 30 Continuing Education credits.",
      status: "current",
      launchDate: "3 February 2027 (v2.0, first day of testing)",
      retirementDate: "2 February 2027 (v1.1, last day of testing)",
      officialCertificationUrl: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
      officialExamUrl: "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html",
      domains: [
        {
          id: "d1",
          name: "Network Infrastructure and Connectivity",
          weight: "25%",
          objectives: [
            "1.1 Diagnose interface and cable (copper and fiber) issues",
            "1.2 Describe the role and function of hypervisors, virtual machines, and containers",
            "1.3 Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private)",
            "1.4 Troubleshoot IPv6 address configuration, assignment, and prefix sizing (unicast and modified EUI 64)",
            "1.5 Describe wireless principles",
            "1.6 Troubleshoot wired and wireless client connectivity (…)",
            "1.7 Troubleshoot DHCPv4 client, server, and relay on IOS devices",
          ],
        },
        {
          id: "d2",
          name: "Switching and Network Access",
          weight: "25%",
          objectives: [
            "2.1 Configure network infrastructure connectivity (switch-to-switch and switch-to-router)",
            "2.2 Configure Layer 2 switch port attributes for edge-host connectivity (VLAN, PoE, port channel, and LACP)",
            "2.3 Validate the accuracy of network documentation using CDP and LLDP",
            "2.4 Troubleshoot basic Layer 2/Layer 3 connectivity and device operations using show commands (including show logs), ping, extended ping, trace route, and packet capture output",
            "2.5 Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+)",
          ],
        },
        {
          id: "d3",
          name: "IP Routing",
          weight: "20%",
          objectives: [
            "3.1 Interpret a routing table to identify the next hop for a packet (routing protocol, prefix/mask, administrative distance, metric, and default route)",
            "3.2 Troubleshoot IPv4 and IPv6 static routing",
            "3.3 Configure single area OSPFv2 for IPv4 and OSPFv3 for IPv6",
            "3.4 Interpret the operational status of First Hop Redundancy Protocols (HSRP and VRRP)",
          ],
        },
        {
          id: "d4",
          name: "Network Services and Security",
          weight: "20%",
          objectives: [
            "4.1 Configure network devices with local usernames and as an AAA client (TACACS+ and RADIUS) for management",
            "4.2 Manage device configuration and software files using secure file transfer operations with SFTP/SCP",
            "4.3 Configure NAT/PAT on IOS XE routers",
            "4.4 Diagnose issues with DNS records (A, AAAA, CNAME, MX, NS, and PTR) to support host, web application, and mail server access by name",
            "4.5 Describe IPsec remote access and site-to-site VPNs (protocols and transport modes)",
            "4.6 Configure IPv4 access control lists (standard, extended, numbered, and named ACLs)",
            "4.7 Configure Layer 2 security features",
          ],
        },
        {
          id: "d5",
          name: "AI, and Network Operations and Management",
          weight: "10%",
          objectives: [
            "5.1 Describe the role of agentic AI in network operations",
            "5.2 Select a prompt to send to a generative AI system to support network operations, considering prompt components such as data classification, output format, persona, and instructions",
            "5.3 Describe network management approaches (device-based, cloud-based, controller-based, automation-based, and infrastructure as code)",
            "5.4 Describe the function of SNMP in network operations",
            "5.5 Use configuration management mechanisms such as Ansible to execute commands",
            "5.6 Interpret syslog message content, severity levels, and facilities",
          ],
        },
      ],
      sources: [
        { label: "Cisco — 200-301 CCNA v2.0 exam topics (PDF)", url: "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf" },
        { label: "Cisco — 200-301 CCNA v1.1 exam topics (PDF)", url: "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf" },
        { label: "Cisco Learning blog — Stay on track: get certified before the CCNA refresh", url: "https://blogs.cisco.com/learning/stay-on-track-get-certified-before-the-ccna-refresh" },
        { label: "Cisco — CCNA certification", url: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html" },
        { label: "Cisco — 200-301 CCNA exam", url: "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "CCNA 200-301 Practice Exams: v1.1 & v2.0 (2026–2027)",
      description:
        "CCNA 200-301 practice exams for the v2.0 exam topics (live 3 Feb 2027) and v1.1: subnetting, switching, OSPF, NAT, ACLs, security and AI, with explanations.",
    },
  },

  "sc-900": {
    description:
      "Practice exams for Microsoft SC-900: Security, Compliance, and Identity Fundamentals, written to the skills measured as of 21 October 2026 — security and identity concepts, Microsoft Entra, Defender for Cloud, Sentinel, Defender XDR and Microsoft Purview. Find your gaps before the 45-minute exam.",
    fullName: "Microsoft Security, Compliance, and Identity Fundamentals",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide, certification page, exam page, renewal page).
    exam: {
      officialName: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      examCode: "SC-900",
      examVersion: "Skills measured as of 21 October 2026",
      duration: "45 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Japanese", "Chinese (Simplified)", "Korean", "French", "Spanish", "Portuguese (Brazil)", "Russian", "Arabic (Saudi Arabia)", "Indonesian (Indonesia)", "German", "Chinese (Traditional)", "Italian"],
      delivery: "Proctored exam, scheduled through Pearson VUE",
      prerequisites: "None. Fundamentals certifications do not expire.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-900/",
      domains: [
        { id: "d1", name: "Describe the concepts of security, compliance, and identity", weight: "10–15%", objectives: ["Describe security and compliance concepts", "Define identity concepts"] },
        { id: "d2", name: "Describe the capabilities of Microsoft Entra", weight: "25–30%", objectives: ["Describe function and identity types of Microsoft Entra ID", "Describe authentication capabilities of Microsoft Entra ID", "Describe access management capabilities of Microsoft Entra ID", "Describe identity protection and governance capabilities of Microsoft Entra"] },
        { id: "d3", name: "Describe the capabilities of Microsoft security solutions", weight: "35–40%", objectives: ["Describe core infrastructure security services in Azure", "Describe security management capabilities of Azure", "Describe capabilities of Microsoft Sentinel", "Describe threat protection with Microsoft Defender XDR"] },
        { id: "d4", name: "Describe the capabilities of Microsoft compliance solutions", weight: "20–25%", objectives: ["Describe Microsoft Service Trust Portal and privacy principles", "Describe compliance management capabilities of Microsoft Purview", "Describe information protection, data lifecycle management, and data governance capabilities of Microsoft Purview", "Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview"] },
      ],
      sources: [
        { label: "Microsoft Learn — SC-900 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900" },
        { label: "Microsoft Learn — Security, Compliance, and Identity Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "SC-900 Practice Exams: Security, Compliance & Identity",
      description:
        "SC-900 practice exams for the Oct 2026 skills outline: security concepts, Microsoft Entra, Defender, Sentinel and Purview, with full explanations.",
    },
  },

  "sc-500": {
    description:
      "Practice exams for Microsoft SC-500: Implementing End-to-End Security Controls for Cloud and AI Workloads, the exam for the Cloud and AI Security Engineer Associate certification that follows the retired AZ-500. Written to the current SC-500 study guide — identity and governance, storage, databases and networking, compute and AI security, Defender for Cloud, Sentinel and Security Copilot.",
    fullName: "Microsoft Cloud and AI Security Engineer Associate",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide, certification page, retired exams list,
    // Partner Center announcement of 6 May 2026, renewal page). The study guide publishes no
    // "skills measured as of" date and no change log; its visible date is 13 May 2026.
    exam: {
      officialName: "Microsoft Certified: Cloud and AI Security Engineer Associate",
      examCode: "SC-500",
      examVersion: "Exam SC-500: Implementing End-to-End Security Controls for Cloud and AI Workloads (study guide shows 'Last updated' 13 May 2026; no skills-measured date published)",
      duration: "120 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Japanese", "Chinese (Simplified)", "Chinese (Traditional)", "Korean", "German", "French", "Italian", "Portuguese (Brazil)", "Spanish"],
      delivery: "Proctored exam, scheduled through Pearson VUE; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft recommends practical experience administering Azure and hybrid environments, strong familiarity with Microsoft Entra ID and familiarity with Microsoft 365 administration. Role-based certifications are renewed annually via a free online assessment on Microsoft Learn.",
      status: "current",
      launchDate: "Beta from May 2026; Microsoft stated training and exam were expected in July 2026 (Partner Center announcement, 6 May 2026)",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/cloud-and-ai-security-engineer-associate/",
      domains: [
        { id: "d1", name: "Manage identity, access, and governance", weight: "20–25%", objectives: ["Secure access to resources by using Microsoft Entra ID", "Secure secrets and keys by using Azure Key Vault", "Implement governance to enforce security and regulatory compliance"] },
        { id: "d2", name: "Secure storage, databases, and networking", weight: "25–30%", objectives: ["Implement security for storage accounts", "Implement security for databases", "Implement security for Azure network services"] },
        { id: "d3", name: "Secure compute", weight: "20–25%", objectives: ["Implement security for AI", "Implement security for servers and virtual machines (VMs)", "Implement security for application platform services"] },
        { id: "d4", name: "Manage and monitor security posture", weight: "20–25%", objectives: ["Manage security posture by using Defender for Cloud", "Implement activity and event collection in Microsoft Sentinel", "Implement Microsoft Security Copilot"] },
      ],
      sources: [
        { label: "Microsoft Learn — SC-500 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-500" },
        { label: "Microsoft Learn — Cloud and AI Security Engineer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/cloud-and-ai-security-engineer-associate/" },
        { label: "Microsoft Partner Center — May 2026 announcements (AZ-500 transitions to SC-500)", url: "https://learn.microsoft.com/en-us/partner-center/announcements/2026-may" },
        { label: "Microsoft Learn — Azure Security Engineer Associate (retired 31 August 2026)", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "SC-500 Practice Exams: Cloud & AI Security Engineer",
      description:
        "SC-500 practice exams for the AZ-500 successor: Entra ID, Key Vault, network and storage security, AI and VM security, Defender for Cloud and Sentinel.",
    },
  },

  "capm": {
    description:
      "Practice exams for the PMI Certified Associate in Project Management (CAPM), written to PMI's CAPM Examination Content Outline (2023 exam update) — project fundamentals, predictive and agile methods, and business analysis. Check your level before the 150-question, 3-hour exam.",
    fullName: "Certified Associate in Project Management (CAPM)",
    exam: {
      officialName: "Certified Associate in Project Management (CAPM)",
      examVersion: "CAPM Examination Content Outline, 2023 exam update (exam launched 25 July 2023; aligned with the PMBOK Guide, Seventh Edition)",
      questionCount: "150 questions (135 scored, 15 unscored pretest questions)",
      duration: "3 hours, with a 10-minute break after question 75",
      questionTypes: "Multiple choice, drag-and-drop (enhanced matching), hot spot and animation or comic-strip items (online-proctored candidates get comic-strip items instead of animations)",
      // Languages per PMI's 2023 CAPM exam update FAQ — check PMI's current translation list before booking.
      languages: ["English", "Spanish", "French", "Arabic", "German", "Portuguese (Brazil)", "Italian", "Japanese", "Chinese (Simplified, Mainland China only)"],
      delivery: "Pearson VUE test centre or online proctored; paper-based only in Mainland China",
      prerequisites: "High school diploma, GED or global equivalent, plus 23 hours of project management education completed by the time of the exam. One-year eligibility period with up to three attempts. Renewal every 3 years with 15 PDUs.",
      status: "current",
      officialCertificationUrl: "https://www.pmi.org/certifications/certified-associate-capm",
      domains: [
        {
          id: "d1",
          name: "Project Management Fundamentals and Core Concepts",
          weight: "36%",
          objectives: [
            "Demonstrate an understanding of the various project life cycles and processes",
            "Demonstrate an understanding of project management planning",
            "Demonstrate an understanding of project roles and responsibilities",
            "Determine how to follow and execute planned strategies or frameworks (e.g., communication, risks, etc.)",
            "Demonstrate an understanding of common problem-solving tools and techniques",
          ],
        },
        {
          id: "d2",
          name: "Predictive, Plan-Based Methodologies",
          weight: "17%",
          objectives: [
            "Explain when it is appropriate to use a predictive, plan-based approach",
            "Demonstrate an understanding of a project management plan schedule",
            "Determine how to document project controls of predictive, plan-based projects",
          ],
        },
        {
          id: "d3",
          name: "Agile Frameworks/Methodologies",
          weight: "20%",
          objectives: [
            "Explain when it is appropriate to use an adaptive approach",
            "Determine how to plan project iterations",
            "Determine how to document project controls for an adaptive project",
            "Explain the components of an adaptive plan",
            "Determine how to prepare and execute task management steps",
          ],
        },
        {
          id: "d4",
          name: "Business Analysis Frameworks",
          weight: "27%",
          objectives: [
            "Demonstrate an understanding of business analysis (BA) roles and responsibilities",
            "Determine how to conduct stakeholder communication",
            "Determine how to gather requirements",
            "Demonstrate an understanding of product roadmaps",
            "Determine how project methodologies influence business analysis processes",
            "Validate requirements through product delivery",
          ],
        },
      ],
      sources: [
        { label: "PMI — CAPM Examination Content Outline (2023 exam update)", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/capm-exam-content-outline-english.pdf" },
        { label: "PMI — CAPM 2023 Exam Update FAQ", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/faq-capm-exam-change-2023-final-chapters-volunteers.pdf" },
        { label: "PMI — Certification Handbook (revised June 2026)", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/generic-certification-handbook.pdf" },
        { label: "PMI — Continuing Certification Requirements Handbook (April 2026)", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/ccr-certification-requirements-handbook.pdf" },
        { label: "PMI — CAPM certification", url: "https://www.pmi.org/certifications/certified-associate-capm" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "CAPM Practice Exams: PMI Certified Associate (2026)",
      description:
        "CAPM practice exams for PMI's current content outline: project fundamentals, predictive and agile methods and business analysis, with full explanations.",
    },
  },

  "ai-200": {
    description:
      "Practice exams for Microsoft AI-200: Developing AI Cloud Solutions on Azure, the developer associate exam that follows the retired AZ-204. Written to the skills measured as of 7 October 2026 — containers, vector search in Cosmos DB, PostgreSQL and Redis, messaging, Functions, Key Vault and monitoring. Check your level before the 120-minute exam.",
    fullName: "Developing AI Cloud Solutions on Azure",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide, certification page, retired-exams list).
    // The exam page /exams/ai-200/ could not be retrieved; duration and languages come from the certification page.
    // Weight of d2 left out: the English study guide shows 30–35% under "Skills at a glance" but 25–30% in the
    // section heading (change log: "% of exam increased" on 7 Oct 2026). Re-check before adding a figure.
    exam: {
      officialName: "Microsoft Certified: Azure AI Cloud Developer Associate",
      examCode: "AI-200",
      examVersion: "Skills measured as of 7 October 2026",
      duration: "120 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Arabic (Saudi Arabia)", "Chinese (Simplified)", "Chinese (Traditional)", "French", "German", "Indonesian (Indonesia)", "Italian", "Japanese", "Korean", "Portuguese (Brazil)", "Russian", "Spanish"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects proficiency in Python, Azure SDKs, Azure data management services, vector databases, messaging and eventing, monitoring and containerised applications. Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-cloud-developer-associate/",
      domains: [
        { id: "d1", name: "Develop containerized solutions on Azure", weight: "20–25%", objectives: ["Implement container application hosting", "Implement container-orchestrated solutions"] },
        { id: "d2", name: "Develop AI solutions by using Azure data management services", objectives: ["Develop AI solutions by using Azure Cosmos DB for NoSQL", "Develop AI solutions by using Azure Database for PostgreSQL", "Integrate Azure Managed Redis in AI solutions"] },
        { id: "d3", name: "Connect to and consume Azure services", weight: "20–25%", objectives: ["Develop event- and message-based AI solutions", "Develop and implement Azure Functions"] },
        { id: "d4", name: "Secure, monitor, and troubleshoot Azure solutions", weight: "20–25%", objectives: ["Implement secure Azure solutions", "Monitor and troubleshoot Azure solutions"] },
      ],
      sources: [
        { label: "Microsoft Learn — AI-200 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200" },
        { label: "Microsoft Learn — Azure AI Cloud Developer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-cloud-developer-associate/" },
        { label: "Microsoft Learn — Retired certification exams (AZ-204: 31 July 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AI-200 Practice Exams: Azure AI Cloud Developer (ex AZ-204)",
      description:
        "AI-200 practice exams for the Oct 2026 skills outline: containers, vector search in Cosmos DB, PostgreSQL and Redis, messaging, Functions and monitoring.",
    },
  },

  "dp-600": {
    description:
      "Practice exams for Microsoft DP-600: Implementing Analytics Solutions Using Microsoft Fabric, written to the skills measured as of 19 October 2026 — security and governance, deployment pipelines, lakehouses, warehouses and eventhouses, SQL, KQL and DAX, and semantic models with Direct Lake. Find your gaps before the 100-minute exam.",
    fullName: "Microsoft Fabric Analytics Engineer",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide, exam page, certification page).
    exam: {
      officialName: "Microsoft Certified: Fabric Analytics Engineer Associate",
      examCode: "DP-600",
      examVersion: "Skills measured as of 19 October 2026",
      duration: "100 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Japanese", "Chinese (Simplified)", "German", "French", "Spanish", "Portuguese (Brazil)"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects expertise in designing, creating and managing semantic models, warehouses or lakehouses, and querying with SQL, KQL and DAX. Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/dp-600/",
      domains: [
        { id: "d1", name: "Maintain a data analytics solution", weight: "25–30%", objectives: ["Implement security and governance", "Maintain the analytics development lifecycle"] },
        { id: "d2", name: "Prepare data", weight: "45–50%", objectives: ["Get data", "Transform data", "Query and analyze data"] },
        { id: "d3", name: "Implement and manage semantic models", weight: "25–30%", objectives: ["Design and build semantic models", "Optimize enterprise-scale semantic models"] },
      ],
      sources: [
        { label: "Microsoft Learn — DP-600 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-600" },
        { label: "Microsoft Learn — Exam DP-600", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/dp-600/" },
        { label: "Microsoft Learn — Fabric Analytics Engineer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "DP-600 Practice Exams: Fabric Analytics Engineer (Oct 2026)",
      description:
        "DP-600 practice exams for the skills measured as of 19 Oct 2026: Fabric lakehouses, warehouses, SQL, KQL, DAX, semantic models and Direct Lake.",
    },
  },

  "ab-620": {
    description:
      "Practice exams for Microsoft AB-620: Designing and Building Integrated AI Agent Solutions in Copilot Studio, written against the current Microsoft study guide (last updated 16 October 2026) — agent planning, agent flows and topics, MCP and REST tools, multi-agent solutions, Azure integration, evaluation and ALM. Check your level before the 120-minute exam.",
    fullName: "AI Agent Builder Associate (Copilot Studio)",
    // Verified 27 Oct 2026 against Microsoft Learn (study guide, certification page).
    // The exam page /exams/ab-620/ could not be retrieved; duration and languages come from the certification page.
    // The study guide shows no "skills measured as of" date and no change log, so only its last-updated date is cited.
    exam: {
      officialName: "Microsoft Certified: AI Agent Builder Associate",
      examCode: "AB-620",
      examVersion: "Study guide last updated 16 October 2026 (no \"skills measured as of\" date published)",
      duration: "120 minutes",
      passingScore: "700 or greater (scale 1–1000)",
      languages: ["English", "Arabic (Saudi Arabia)", "Chinese (Simplified)", "Chinese (Traditional)", "French", "German", "Indonesian (Indonesia)", "Italian", "Japanese", "Korean", "Portuguese (Brazil)", "Russian", "Spanish"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects familiarity with Power Fx, Dataverse, Power Platform environments, Microsoft 365 Copilot, Microsoft Foundry and adaptive cards, intermediate generative AI knowledge (RAG, MCP, A2A), REST APIs and experience configuring agents in Copilot Studio. Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/ai-agent-builder-associate/",
      domains: [
        { id: "d1", name: "Plan and configure agent solutions", weight: "30–35%", objectives: ["Plan an agent solution", "Create and monitor agent flows in Copilot Studio", "Configure topics"] },
        { id: "d2", name: "Integrate and extend agents in Copilot Studio", weight: "40–45%", objectives: ["Connect to enterprise knowledge sources", "Add tools to agents", "Configure multi-agent collaboration from Copilot Studio", "Integrate agents with Azure"] },
        { id: "d3", name: "Test and manage agents", weight: "20–25%", objectives: ["Evaluate agent performance", "Implement application lifecycle management (ALM) for agents in Copilot Studio"] },
      ],
      sources: [
        { label: "Microsoft Learn — AB-620 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-620" },
        { label: "Microsoft Learn — AI Agent Builder Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/ai-agent-builder-associate/" },
        { label: "Microsoft Learn — Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AB-620 Practice Exams: AI Agent Builder Associate (2026)",
      description:
        "AB-620 practice exams for Copilot Studio: agent flows, topics, MCP and REST tools, multi-agent solutions, Azure integration, evaluation and ALM.",
    },
  },

};

/* ───────────────────────────────────────────────────────────────────────────
 * TEMPLATE — full example of everything you can set for one slug.
 * (Illustrative structure only. Do not publish unverified facts.)
 *
 *  "az-900": {
 *    featured: true,
 *    description: "Your 2–3 sentence intro for candidates …",
 *    fullName: "Microsoft Azure Fundamentals",
 *    questionsPerTest: 60,
 *    price: { amount: 0, currency: "EUR", note: "incl. VAT" },   // your real price
 *    freeTestUrl: "https://…",        // or env CLASSMARKER_FREE_TEST_URL__AZ_900
 *    premiumUrl: "https://…",         // or env CLASSMARKER_PREMIUM_TEST_URL__AZ_900
 *    delivery: { freeTest: "embed", simulator: "redirect" },
 *    examOverview: [
 *      { label: "Exam provider", value: "PeopleCert" },
 *      { label: "Format", value: "…" },            // verified from the official exam guide
 *    ],
 *    topics: [{ title: "…", description: "…" }],
 *    features: ["…"],
 *    faq: [{ question: "…", answer: "…" }],
 *    seo: { title: "AZ-900 Practice Exams", description: "…" },
 *    lastReviewed: "2026-10-01",
 *  },
 * ─────────────────────────────────────────────────────────────────────────── */
