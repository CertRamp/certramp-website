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
      "360 practice questions in six timed mock exams for the 7th edition Foundation exam of the widely used process-based project management method. Test 1 shows where you stand, Test 4 matches the real 60-question exam, and Tests 5 and 6 push beyond it, with an explanation for every answer option.",
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
        label: "PeopleCert: Foundation exam page (7th edition)",
        url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-foundation-3579",
      },
      { label: "Official examination format", url: "https://www.prince2.com/usa/prince2-examination-format" },
    ],
    topics: [
      { title: "Principles", description: "The seven principles every project under the method must follow." },
      { title: "Practices", description: "Business case, organizing, plans, quality, risk, issues and progress." },
      { title: "Processes", description: "From starting up a project to closing it, who does what, and when." },
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
        "360 practice questions in six timed mock exams for the 7th edition project management Foundation exam, from a diagnostic start to beyond exam level.",
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
      { label: "Format", value: "Scenario-based objective testing: 56 questions and sub-questions worth 70 marks" },
      { label: "Duration", value: "150 minutes" },
      { label: "Pass mark", value: "60%" },
      { label: "Book", value: "Open book: the official manual only" },
      {
        label: "Prerequisites",
        value: "The 7th edition Foundation or another qualifying certification (see PeopleCert for the full list)",
      },
    ],
    sources: [
      {
        label: "PeopleCert: Practitioner exam page (7th edition)",
        url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-practitioner-3581",
      },
      { label: "Official examination format", url: "https://www.prince2.com/usa/prince2-examination-format" },
    ],
    seo: {
      title: "PM Practitioner (7th Edition) Practice Exams",
      description:
        "Six full Practitioner mock exams with 420 scenario-based questions for the 7th edition project management method: apply it under exam conditions.",
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
      officialName: "Certified Professional for Requirements Engineering (CPRE): Foundation Level",
      examVersion: "Syllabus 3.3.0 (1 April 2026)",
      questionCount: "Approx. 45",
      questionTypes: "Multiple choice: single choice (A), pick several (P) and true/false (K); 1–3 points per question",
      duration: "75 minutes (90 minutes for non-native speakers, on written request)",
      passingScore: "At least 70% of the total points",
      // Languages per IREB fact sheet 1.0.0 (exam language list).
      languages: ["English", "German", "Chinese", "Spanish", "French", "Italian", "Persian", "Dutch", "Polish", "Portuguese (Brazil)", "Russian", "Swedish"],
      delivery: "Through IREB-licensed certification bodies, at exam centres or, with some bodies, remotely",
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
        { label: "IREB: CPRE Foundation Level syllabus 3.3.0 (PDF)", url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf" },
        { label: "IREB: Examination regulations 5.6.2 (PDF)", url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf" },
        { label: "IREB: CPRE Foundation Level fact sheet (PDF)", url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-fact-sheet/2c800f6747-1787039938/factsheet-cpre-fl-en.pdf" },
        { label: "IREB: Certification bodies", url: "https://cpre.ireb.org/en/training-certification/certification-bodies" },
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
        { label: "Microsoft Learn: SC-200 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200" },
        { label: "Microsoft Learn: Security Operations Analyst Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "SC-200 Practice Exams: Security Operations Analyst",
      description:
        "360 Microsoft SC-200 practice questions in six progressive mock exams: security operations, incident response and threat hunting, with full explanations.",
    },
  },

  "isaca-aaism": {
    featured: true,
    description:
      "540 practice questions in six mock exams for ISACA AAISM: Advanced in AI Security Management. Six tests of rising difficulty across AI governance, AI risk and AI security controls, with an explanation for every option.",
    fullName: "ISACA Advanced in AI Security Management (AAISM)",
    exam: {
      officialName: "ISACA Advanced in AI Security Management (AAISM)",
      questionCount: "90 multiple-choice questions",
      duration: "2.5 hours (150 minutes)",
      format: "Multiple choice",
      delivery: "Administered through PSI: remotely proctored online or at an approved test centre (test centre only in India, Mainland China and Hong Kong)",
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
        { label: "ISACA: Get AAISM certified", url: "https://www.isaca.org/credentialing/aaism/get-aaism-certified" },
        { label: "ISACA: Maintain AAISM certification", url: "https://www.isaca.org/credentialing/aaism/maintain-aaism-certification" },
        {
          label: "ISACA Now blog: AAISM FAQs",
          url: "https://www.isaca.org/resources/news-and-trends/isaca-now-blog/2025/isaca-advanced-in-ai-security-management-aaism-faqs",
        },
        {
          label: "ISACA press release: AAISM launch (2025)",
          url: "https://www.isaca.org/about-us/newsroom/press-releases/2025/isaca-introduces-first-and-only-ai-centric-security-management-certification",
        },
        {
          label: "ISACA Madrid Chapter: AAISM certification (questions, duration, domain weights, delivery)",
          url: "https://engage.isaca.org/madridchapter/certificaciones/certiaaism",
        },
        {
          label: "ISACA Engage: AAISM beta exam (150 minutes, PSI scheduling)",
          url: "https://engage.isaca.org/volunteeropportunities/opportunities-list-public/volunteer-opportunity-details?VolunteerOpportunityKey=d7efd869-6467-45bc-81d2-01971787be05",
        },
        { label: "ISACA: AAISM exam content outline", url: "https://www.isaca.org/credentialing/aaism/aaism-exam-content-outline" },
        { label: "ISACA: Exam candidate guides", url: "https://www.isaca.org/credentialing/exam-candidate-guides" },
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
      "120 practice questions in six short mock exams for the version 5 Foundation Bridge exam: built for certificate holders upgrading from version 4. Focus on what changed, from a diagnostic start to beyond exam level.",
    examOverview: [
      { label: "Exam provider", value: "PeopleCert" },
      { label: "Format", value: "20 multiple-choice questions, closed book" },
      { label: "Duration", value: "30 minutes" },
      { label: "Pass mark", value: "65%" },
      { label: "Prerequisites", value: "A qualifying version 4 certification (see PeopleCert for exclusions)" },
      { label: "Availability", value: "The Bridge exam is scheduled to be withdrawn on 31 December 2027" },
    ],
    sources: [
      { label: "PeopleCert: Foundation Bridge (Version 5) exam page", url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158" },
      { label: "PeopleCert: certification FAQ", url: "https://www.peoplecert.org/help-and-support/faq-itil" },
    ],
    seo: {
      title: "Foundation Bridge V5 Practice Exams",
      description:
        "120 practice questions in six mock exams for the version 5 Foundation Bridge exam, for version 4 certificate holders upgrading to version 5.",
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
      { label: "PeopleCert: Foundation (Version 5) exam page", url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-5-foundation-version-50-4154" },
      { label: "PeopleCert: certification FAQ", url: "https://www.peoplecert.org/help-and-support/faq-itil" },
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
        "240 practice questions in six mock exams for the version 5 IT service management Foundation exam: 40 questions per test, rising to beyond exam level.",
    },
    lastReviewed: CHECKED,
  },

  "iapp-aigp": {
    description:
      "600 practice questions in six full mock exams for the IAPP AIGP: Artificial Intelligence Governance Professional. Practise all four domains of the AIGP body of knowledge, from your baseline to beyond exam level.",
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
        { label: "IAPP: AIGP certification", url: "https://iapp.org/certify/aigp" },
        { label: "IAPP store: AIGP exam", url: "https://store.iapp.org/aigp-exam/" },
        {
          label: "IAPP: AIGP body of knowledge and exam blueprint 2.1 (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt0d33152fd20bc134/AIGP_Cert%20BOK.pdf",
        },
        {
          label: "IAPP: Certification candidate handbook (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf",
        },
        {
          label: "IAPP: CPE policy (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt25df7f1b0d8c84f7/CPE_Policy.pdf",
        },
        { label: "IAPP store: Certification maintenance fee", url: "https://store.iapp.org/certification-maintenance-fee" },
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
      { label: "PeopleCert: AI Governance (Version 5) exam page", url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-ai-governance-version-5-4234" },
      { label: "PeopleCert: certification FAQ", url: "https://www.peoplecert.org/help-and-support/faq-itil" },
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
        "240 practice questions in six mock exams for PeopleCert's version 5 AI Governance exam: AI risk, governance models and regulation.",
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
        { label: "ISC2: CCSP exam", url: "https://www.isc2.org/certifications/ccsp/ccsp-exam" },
        { label: "ISC2: CCSP exam outline", url: "https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline" },
        { label: "ISC2: Computerized adaptive testing", url: "https://www.isc2.org/certifications/computerized-adaptive-testing" },
        { label: "ISC2: CCSP certification", url: "https://www.isc2.org/certifications/ccsp" },
        { label: "ISC2: CCSP experience requirements", url: "https://www.isc2.org/certifications/ccsp/ccsp-experience-requirements" },
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
        "900 CCSP practice questions in six full-length mock exams, written to the ISC2 exam outline effective 1 August 2026, from diagnostic to beyond exam level.",
    },
  },

  /* ── Content batch October 2026 (top Udemy earners, Aug–Oct 2026) ─────────
   * Exam facts verified 27 Oct 2026 against Microsoft Learn. Prices are left
   * out on purpose: Microsoft only states "based on country or region".     */

  "pl-900": {
    description:
      "Practice exams for Microsoft PL-900: Power Platform Fundamentals, written to the skills measured as of 24 July 2026 (Dataverse, Power Apps, Power Automate, administration and the new Copilot Studio agents). Find your gaps before the 45-minute exam.",
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
        { label: "Microsoft Learn: PL-900 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-900" },
        { label: "Microsoft Learn: Power Platform Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
      "Practice exams for Microsoft MD-102: Endpoint Administrator, written to the skills measured as of 27 October 2026 (Intune enrollment, Autopilot, compliance, endpoint security, app management and Security Copilot agents). Check your level before the 100-minute exam.",
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
        { label: "Microsoft Learn: MD-102 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/md-102" },
        { label: "Microsoft Learn: Endpoint Administrator Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/modern-desktop/" },
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
      "Practice exams for Microsoft AI-103: Developing AI Apps and Agents on Azure, the successor to the retired AI-102. Written to the skills measured as of 16 April 2026: Foundry, generative AI and agents, RAG, vision, language and document extraction.",
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
        { label: "Microsoft Learn: AI-103 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103" },
        { label: "Microsoft Learn: Azure AI Apps and Agents Developer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/" },
        { label: "Microsoft Learn, Retired certification exams (AI-102: 30 June 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
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
      "Practice exams for IPMA Level D (Certified Project Management Associate), written against the 28 project management competence elements of the IPMA Individual Competence Baseline ICB4: Perspective, People and Practice. Available in English and German, they help you prepare for the written exams, including the PM-ZERT (GPM) format in Germany.",
    fullName: "IPMA Level D: Certified Project Management Associate",
    // Verified 27 Oct 2026. Format details are for Germany (PM-ZERT / GPM); other IPMA member associations differ.
    exam: {
      officialName: "IPMA Level D: Certified Project Management Associate",
      examVersion: "IPMA Individual Competence Baseline ICB4; PM-ZERT Level D guide version 24 (valid from 1 August 2026)",
      duration: "Germany (PM-ZERT): two written exams of 90 minutes each, or one 90-minute written exam plus a report",
      format:
        "Germany (PM-ZERT): Path 1: one 90-minute written exam plus a report of up to 25 pages (plus up to 15 pages of appendix) and a feedback meeting of up to 20 minutes; Path 2: two 90-minute written exams. The path cannot be changed after admission.",
      passingScore: "Germany (PM-ZERT): 23 competence elements rated as fulfilled across all exam parts",
      languages: ["German", "English"],
      delivery: "Germany (PM-ZERT): in person or online via video conference (Zoom or Teams)",
      prerequisites:
        "None, no project management experience or vocational training required (PM-ZERT). Certificate valid for five years; recertification with at least 175 hours of continuing professional development.",
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
        { label: "PM-ZERT: IPMA Level D certification", url: "https://www.pm-zert.de/zertifizierungsprodukte/projektmanagement/ipma-level-d" },
        { label: "PM-ZERT: Leitfaden Zertifizierung Level D, V24 (PDF)", url: "https://www.pm-zert.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Ab_September_2024/Z01D_Leitfaden-Level-D_V24.pdf" },
        { label: "PM-ZERT: Leitfaden Allgemein für Zertifizierungen, V18 (PDF)", url: "https://www.pm-zert.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Ab_September_2024/Z01_Leitfaden-Allgemein-Zertifizierung.pdf" },
        { label: "PM-ZERT: Leitfaden Online-Zertifizierung, V10 (PDF)", url: "https://www.pm-zert.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Ab_September_2024/Z01O_Leitfaden-Online-Zertifizierung.pdf" },
        { label: "PM-ZERT: Leitfaden Level D Rezertifizierung, V07 (PDF)", url: "https://www.pm-zert.de/fileadmin/pm_zert_upload/Zertifizierung/Rezertifizierung/Ab_September_2024/Z01DRZ_Leitfaden-Rezertifzierung-Level-D.pdf" },
        { label: "PM-ZERT (GPM): General guide Level D–A, ICB4 competence elements (PDF)", url: "https://www.gpm-ipma.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Z01_PM_General_Guide_ICB4.pdf" },
        { label: "IPMA: Individual certification", url: "https://ipma.world/individuals/certification/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "IPMA Level D Practice Exams: ICB4 Exam Prep (2026)",
      description:
        "IPMA Level D practice exams on the ICB4 competence elements (Perspective, People and Practice) in English and German, with full explanations.",
    },
  },

  "aws-aib-c01": {
    description:
      "Practice exams for AWS AIB-C01: AWS Certified AI Business Strategist, written to the official AIB-C01 exam guide (AI fundamentals, AI strategy and business value, governance and responsible AI, and business readiness and transformation). Test your business judgement before the beta exam, with no coding required.",
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
        { label: "AWS: AWS Certified AI Business Strategist (beta exam)", url: "https://aws.amazon.com/certification/certified-ai-business-strategist/" },
        { label: "AWS: AIB-C01 exam guide", url: "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01.html" },
        { label: "AWS Training and Certification Blog: Introducing AWS Certified AI Business Strategist (1 September 2026)", url: "https://aws.amazon.com/blogs/training-and-certification/introducing-aws-certified-ai-business-strategist-built-for-the-people-who-scale-ai/" },
        { label: "AWS, Before testing policies (beta exams)", url: "https://aws.amazon.com/certification/policies/before-testing/" },
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
      "Practice exams for CIA Part 1: Internal Audit Fundamentals, written to The IIA's 2025 CIA syllabus and the Global Internal Audit Standards (foundations of internal auditing, ethics and professionalism, governance, risk management and control, and fraud risks). Test yourself against the 125-question, 150-minute format before exam day.",
    fullName: "CIA Part 1: Internal Audit Fundamentals",
    exam: {
      officialName: "Certified Internal Auditor (CIA), Part 1: Internal Audit Fundamentals",
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
        { label: "The IIA: CIA Part 1 syllabus (Expanded Test Specifications)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-1-syllabus.pdf" },
        { label: "The IIA: Certified Internal Auditor (eligibility, programme time limits, languages)", url: "https://www.theiia.org/en/certifications/cia/" },
        { label: "The IIA: CIA exam syllabus (2025)", url: "https://www.theiia.org/en/certifications/cia/exam-prep-resources/exam-syllabus/" },
        { label: "The IIA, CIA Exam: Why and How It's Changing (questions and minutes per part)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-exam-why-and-how-it-is-changing2.pdf" },
        { label: "The IIA: Certification Candidate Handbook (scoring, retakes, Pearson VUE)", url: "https://www.theiia.org/globalassets/site/certifications/certification-candidate-handbook.pdf" },
        { label: "The IIA: Global Internal Audit Standards", url: "https://www.theiia.org/en/standards/" },
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
      "Practice exams for CIA Part 2: Internal Audit Engagement, written to The IIA's 2025 CIA syllabus and the Global Internal Audit Standards (engagement planning, gathering and evaluating evidence, data analytics, workpapers and supervision). Test yourself against the 100-question, 120-minute format before exam day.",
    fullName: "CIA Part 2: Internal Audit Engagement",
    exam: {
      officialName: "Certified Internal Auditor (CIA), Part 2: Internal Audit Engagement",
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
        { label: "The IIA: CIA Part 2 syllabus (Expanded Test Specifications)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-2-syllabus.pdf" },
        { label: "The IIA: Certified Internal Auditor (eligibility, programme time limits, languages)", url: "https://www.theiia.org/en/certifications/cia/" },
        { label: "The IIA: CIA exam syllabus (2025)", url: "https://www.theiia.org/en/certifications/cia/exam-prep-resources/exam-syllabus/" },
        { label: "The IIA, CIA Exam: Why and How It's Changing (questions and minutes per part)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-exam-why-and-how-it-is-changing2.pdf" },
        { label: "The IIA: Certification Candidate Handbook (scoring, retakes, Pearson VUE)", url: "https://www.theiia.org/globalassets/site/certifications/certification-candidate-handbook.pdf" },
        { label: "The IIA: Global Internal Audit Standards", url: "https://www.theiia.org/en/standards/" },
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
      "Practice exams for CIA Part 3: Internal Audit Function, written to The IIA's 2025 CIA syllabus and the Global Internal Audit Standards (internal audit operations, the risk-based audit plan, quality assurance, and communicating results and monitoring action plans). Test yourself against the 100-question, 120-minute format before exam day.",
    fullName: "CIA Part 3: Internal Audit Function",
    exam: {
      officialName: "Certified Internal Auditor (CIA), Part 3: Internal Audit Function",
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
        { label: "The IIA: CIA Part 3 syllabus (Expanded Test Specifications)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-3-syllabus.pdf" },
        { label: "The IIA: Certified Internal Auditor (eligibility, programme time limits, languages)", url: "https://www.theiia.org/en/certifications/cia/" },
        { label: "The IIA: CIA exam syllabus (2025)", url: "https://www.theiia.org/en/certifications/cia/exam-prep-resources/exam-syllabus/" },
        { label: "The IIA, CIA Exam: Why and How It's Changing (questions and minutes per part)", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-exam-why-and-how-it-is-changing2.pdf" },
        { label: "The IIA: Certification Candidate Handbook (scoring, retakes, Pearson VUE)", url: "https://www.theiia.org/globalassets/site/certifications/certification-candidate-handbook.pdf" },
        { label: "The IIA: Global Internal Audit Standards", url: "https://www.theiia.org/en/standards/" },
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
        { label: "IAPP: CIPP/E certification", url: "https://iapp.org/certify/cippe/" },
        { label: "IAPP store: CIPP/E exam", url: "https://store.iapp.org/cipp-e-exam/" },
        {
          label: "IAPP: CIPP/E body of knowledge and exam blueprint 1.3.3 (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blte39ae9567661b3d2/IAPP_Training-CIPPE_BOK.pdf",
        },
        {
          label: "IAPP: Certification candidate handbook (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf",
        },
        {
          label: "IAPP: CPE policy (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt25df7f1b0d8c84f7/CPE_Policy.pdf",
        },
        { label: "IAPP store: Certification maintenance fee", url: "https://store.iapp.org/certification-maintenance-fee" },
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
      "Practice exams for Microsoft AI-901: Azure AI Fundamentals, the successor to AI-900, written to the skills measured as of 15 April 2026 (responsible AI, generative AI and agents, speech, vision and information extraction with Microsoft Foundry). Find your gaps before you book.",
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
        { label: "Microsoft Learn: AI-901 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901" },
        { label: "Microsoft Learn: Exam AI-901", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" },
        { label: "Microsoft Learn: Azure AI Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/" },
        { label: "Microsoft Learn, Retired certification exams (AI-900: 30 June 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
      "Practice exams for Microsoft AZ-104: Azure Administrator, written to the skills measured as of 17 April 2026 (Entra ID and governance, storage, VMs, containers and App Service, virtual networking, monitoring and backup). Check your level before the 100-minute exam.",
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
        { label: "Microsoft Learn: AZ-104 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104" },
        { label: "Microsoft Learn: Azure Administrator Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" },
        { label: "Microsoft Learn: Exam duration and exam experience", url: "https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
      "Practice exams for the NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL), written to the five weighted exam topics NVIDIA publishes (core ML and AI knowledge, data analysis, experimentation, software development and trustworthy AI). Check your understanding of transformers, RAG, prompt engineering, fine-tuning and NVIDIA inference tooling before the 1-hour exam.",
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
      passingScore: "Pass/fail: NVIDIA does not report a score",
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
        { label: "NVIDIA: NCA-GENL Generative AI LLMs certification exam", url: "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/" },
        { label: "NVIDIA: Certification FAQs and exam policies", url: "https://www.nvidia.com/en-us/learn/certification/" },
        { label: "NVIDIA: NCA-GENL exam study guide (PDF)", url: "https://dam-cdn.nvd.orangelogic.com/AssetLink/ik3amm6oy7871nv371600i4h7drvex5m.pdf" },
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
      "Practice exams for CompTIA Security+ SY0-701 (V7), written to the official exam objectives (V7): security controls, threats and mitigations, architecture, security operations and governance. SY0-701 retires on 11 June 2027 in English and 13 August 2027 in the other languages; its successor SY0-801 (V8) is expected to launch on or around 17 November 2026.",
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
        { label: "CompTIA: Security+ V7 (SY0-701) exam details", url: "https://www.comptia.org/en-us/certifications/security/v7/" },
        { label: "CompTIA: Security+ SY0-701 V7 Exam Objectives (PDF)", url: "https://lecbyo.files.cmp.optimizely.com/download/cf25ec24b8a511ef9ecbb69c0f9687be" },
        { label: "CompTIA: Security+ V8 (SY0-801), expected on or around 17 November 2026", url: "https://www.comptia.org/en-us/certifications/security/v8/" },
        { label: "CompTIA: How long does the Security+ certification last?", url: "https://www.comptia.org/en-us/blog/how-long-does-the-comptia-security-certification-last/" },
        { label: "CompTIA: CE renewal cycle", url: "https://www.comptia.org/en-us/resources/ce/learn/how-to-renew/ce-renewal-cycle/" },
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
      "Practice exams for Microsoft AZ-900: Azure Fundamentals, written to the skills measured as of 20 July 2026 (cloud concepts, Azure architecture and services, and management and governance). Find your gaps before the 45-minute exam.",
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
        { label: "Microsoft Learn: AZ-900 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" },
        { label: "Microsoft Learn: Azure Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
    outlineBadge: { en: "Updated for the 28 October 2026 skills outline", de: "Aktualisiert für die Gliederung vom 28. Oktober 2026" },
    description:
      "Practice exams for Microsoft SC-300: Identity and Access Administrator, written to the skills measured as of 28 October 2026 (Microsoft Entra user and hybrid identities, authentication and Conditional Access, Global Secure Access, workload identities and identity governance). Check your level before the 100-minute exam.",
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
        { label: "Microsoft Learn: SC-300 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-300" },
        { label: "Microsoft Learn: Identity and Access Administrator Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
      "Practice exams for Microsoft AB-100: Agentic AI Business Solutions Architect, written to the skills measured as of 16 November 2026 (AI strategy and ROI, agent design in Copilot Studio, Microsoft 365 Copilot and Microsoft Foundry, ALM, testing and responsible AI). Find your gaps before you book the Expert-level exam.",
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
        { label: "Microsoft Learn, AB-100 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-100" },
        { label: "Microsoft Learn: Exam AB-100", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-100/" },
        { label: "Microsoft Learn: Agentic AI Business Solutions Architect Expert", url: "https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-business-solutions-architect/" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
        { label: "IAPP: CIPM certification", url: "https://iapp.org/certify/cipm" },
        { label: "IAPP store: CIPM exam", url: "https://store.iapp.org/cipm-exam/" },
        {
          label: "IAPP: CIPM body of knowledge and exam blueprint 4.2.0 (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt39d7942c0a9a9f0f/CIPM_BoK_EBP.pdf",
        },
        {
          label: "IAPP: Certification candidate handbook (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf",
        },
        {
          label: "IAPP: CPE policy (PDF)",
          url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt25df7f1b0d8c84f7/CPE_Policy.pdf",
        },
        { label: "IAPP store: Certification maintenance fee", url: "https://store.iapp.org/certification-maintenance-fee" },
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
      "Practice exams for the Google Cloud Professional Agentic Architect certification, written against the five sections of the official exam guide and the current Gemini Enterprise Agent Platform product names: low-code agents, coding agents, custom agents with ADK, evaluation and deployment, and agent security. Check your level before the 3-hour multiple-choice exam (beta format, about 80 questions).",
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
        { label: "Google Cloud: Professional Agentic Architect certification", url: "https://cloud.google.com/learn/certification/agentic-architect" },
        { label: "Google Cloud: Professional Agentic Architect exam guide (PDF)", url: "https://services.google.com/fh/files/misc/professional_agentic_architect_exam_guide_english.pdf" },
        { label: "Google Cloud: Gemini Enterprise Agent Platform name changes", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes" },
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
      "Practice exams for the ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA), written to syllabus v4.0: test analyst tasks, risk-based testing, data-, behaviour- and rule-based test techniques, quality characteristics and defect prevention. Check your level before the 45-question, 120-minute exam.",
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
        { label: "ISTQB: Certified Tester Advanced Level Test Analyst (CTAL-TA)", url: "https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/" },
        { label: "ISTQB: CTAL-TA Syllabus v4.0 (PDF)", url: "https://www.istqb.org/wp-content/uploads/sdm-uploads/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf" },
        { label: "ISTQB: CTAL-TA Learning Objectives, new vs. old syllabus (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=6363" },
        { label: "ISTQB: Exam Structure and Rules Tables v1.19 (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=3832" },
        { label: "ISTQB: Exam Structures and Rules v1.2 (PDF)", url: "https://istqb.org/wp-content/uploads/sdm-uploads/ISTQB_Exam-Structures-and-Rules_v1.2.pdf" },
        { label: "ISTQB: CTAL-TA v4.0 FAQ", url: "https://istqb.org/help/test-analyst/" },
        { label: "ISTQB: CTAL-TA v3.1 retirement", url: "https://istqb.org/certifications/certified-tester-advanced-level-test-analyst-retiring/" },
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
      "Practice exams for the ISTQB Certified Tester Testing with Generative AI (CT-GenAI), written to syllabus v1.1: GenAI and LLM basics, prompt engineering for test tasks, hallucinations and data privacy risks, RAG and agents, and adopting GenAI in a test organisation. Check your level before the 40-question, 60-minute exam.",
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
        { label: "ISTQB: Certified Tester Testing with Generative AI (CT-GenAI)", url: "https://istqb.org/certifications/gen-ai/" },
        { label: "ISTQB: Minor update to CT-GenAI (v1.1)", url: "https://istqb.org/istqb-announces-minor-update-to-certified-tester-testing-with-generative-ai-ct-genai/" },
        { label: "ISTQB: CT-GenAI launch press release", url: "https://istqb.org/istqb-certified-tester-specialist-level-testing-with-generative-ai-ct-genai-press-release/" },
        { label: "ISTQB: Exam Structure and Rules Tables v1.19 (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=3832" },
        { label: "ISTQB: Exam Structures and Rules v1.2 (PDF)", url: "https://istqb.org/wp-content/uploads/sdm-uploads/ISTQB_Exam-Structures-and-Rules_v1.2.pdf" },
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
      "Practice exams for AWS MLA-C02: AWS Certified Machine Learning Engineer (Associate, written to the official MLA-C02 exam guide that replaces MLA-C01). Covers data preparation, model and foundation model development, deployment and orchestration, and operating, monitoring and securing ML and AI solutions, including Amazon SageMaker AI, Amazon Bedrock, RAG and agents.",
    fullName: "AWS Certified Machine Learning Engineer: Associate",
    exam: {
      officialName: "AWS Certified Machine Learning Engineer: Associate",
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
        { label: "AWS, AWS Certified Machine Learning Engineer, Associate", url: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/" },
        { label: "AWS: MLA-C02 exam guide", url: "https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html" },
        { label: "AWS: Comparison of MLA-C01 and MLA-C02", url: "https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/mla-02-comparison.html" },
        { label: "AWS Training and Certification Blog, Certification updates: September 2026 (1 September 2026)", url: "https://aws.amazon.com/blogs/training-and-certification/september-2026-new-offerings/" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "MLA-C02 Practice Exams: AWS ML Engineer Associate (2026)",
      description:
        "MLA-C02 practice exams for AWS Certified Machine Learning Engineer (Associate: data prep, SageMaker AI, Bedrock, RAG, agents, MLOps and security, explained).",
    },
  },

  "cfe": {
    description:
      "Practice exams for the ACFE Certified Fraud Examiner (CFE) exam, written to the new three-section exam that launched on 2 June 2026: Fraud Schemes and Financial Crimes, Fraud Investigations and Legal Issues, and Fraud Prevention and Deterrence. Find your weak areas before you start your 60-day eligibility window, where you need at least 75% in every section.",
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
        { label: "ACFE: 2026 CFE Exam Update (sections, questions, time, transition)", url: "https://www.acfe.com/cfe-credential/about-the-cfe-exam/2026-cfe-exam-update" },
        { label: "ACFE: About the CFE Exam (delivery, 60-day window)", url: "https://www.acfe.com/cfe-credential/about-the-cfe-exam" },
        { label: "ACFE: CFE Exam FAQs (passing score, language, retakes)", url: "https://www.acfe.com/cfe-credential/about-the-cfe-exam/cfe-exam-faqs" },
        { label: "ACFE: CFE Exam Content Outline", url: "https://www.acfe.com/cfe-credential/about-the-cfe-exam/exam-blueprint" },
        { label: "ACFE: CFE Credential Eligibility", url: "https://www.acfe.com/cfe-credential/eligibility" },
        { label: "ACFE: CPE requirements", url: "https://www.acfe.com/cfe-credential/continuing-professional-education-cpe-requirements" },
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
      "Practice exams for GIAC AI Platform Security (GAIPS), written against GIAC's eight published exam certification objectives: agentic systems, LLM foundations, application architecture, infrastructure, risk management, MLOps, retrieval and model customisation. Test yourself before the 54-question, 2-hour exam.",
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
        { label: "GIAC: AI Platform Security (GAIPS)", url: "https://www.giac.org/certifications/ai-security-platform-security-gaips" },
        { label: "GIAC: Proctored exams and open book guidelines", url: "https://www.giac.org/knowledge-base/proctor" },
        { label: "GIAC: How to renew", url: "https://giac.org/renewal/how-to-renew" },
        { label: "SANS (SEC545: GenAI and LLM Application Security)", url: "https://www.sans.org/cyber-security-courses/genai-llm-application-security-5day" },
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
      "Practice exams for Cisco CCNA 200-301 (Implementing and Administering Cisco Solutions). v1.1 can be taken until 2 February 2027 and v2.0 goes live on 3 February 2027; the domains below follow the official v2.0 exam topics: addressing and subnetting, switching, OSPF, NAT, ACLs, Layer 2 security and AI in network operations. Check your level before the 120-minute exam.",
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
        { label: "Cisco: 200-301 CCNA v2.0 exam topics (PDF)", url: "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf" },
        { label: "Cisco: 200-301 CCNA v1.1 exam topics (PDF)", url: "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf" },
        { label: "Cisco Learning blog (Stay on track: get certified before the CCNA refresh)", url: "https://blogs.cisco.com/learning/stay-on-track-get-certified-before-the-ccna-refresh" },
        { label: "Cisco: CCNA certification", url: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html" },
        { label: "Cisco: 200-301 CCNA exam", url: "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html" },
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
      "Practice exams for Microsoft SC-900: Security, Compliance, and Identity Fundamentals, written to the skills measured as of 21 October 2026 (security and identity concepts, Microsoft Entra, Defender for Cloud, Sentinel, Defender XDR and Microsoft Purview). Find your gaps before the 45-minute exam.",
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
        { label: "Microsoft Learn: SC-900 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900" },
        { label: "Microsoft Learn: Security, Compliance, and Identity Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
      "Practice exams for Microsoft SC-500: Implementing End-to-End Security Controls for Cloud and AI Workloads, the exam for the Cloud and AI Security Engineer Associate certification that follows the retired AZ-500. Written to the current SC-500 study guide: identity and governance, storage, databases and networking, compute and AI security, Defender for Cloud, Sentinel and Security Copilot.",
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
        { label: "Microsoft Learn: SC-500 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-500" },
        { label: "Microsoft Learn: Cloud and AI Security Engineer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/cloud-and-ai-security-engineer-associate/" },
        { label: "Microsoft Partner Center: May 2026 announcements (AZ-500 transitions to SC-500)", url: "https://learn.microsoft.com/en-us/partner-center/announcements/2026-may" },
        { label: "Microsoft Learn: Azure Security Engineer Associate (retired 31 August 2026)", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
      "Practice exams for the PMI Certified Associate in Project Management (CAPM), written to PMI's CAPM Examination Content Outline (2023 exam update): project fundamentals, predictive and agile methods, and business analysis. Check your level before the 150-question, 3-hour exam.",
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
        { label: "PMI: CAPM Examination Content Outline (2023 exam update)", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/capm-exam-content-outline-english.pdf" },
        { label: "PMI: CAPM 2023 Exam Update FAQ", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/faq-capm-exam-change-2023-final-chapters-volunteers.pdf" },
        { label: "PMI: Certification Handbook (revised June 2026)", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/generic-certification-handbook.pdf" },
        { label: "PMI: Continuing Certification Requirements Handbook (April 2026)", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/ccr-certification-requirements-handbook.pdf" },
        { label: "PMI: CAPM certification", url: "https://www.pmi.org/certifications/certified-associate-capm" },
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
      "Practice exams for Microsoft AI-200: Developing AI Cloud Solutions on Azure, the new developer associate exam, introduced as AZ-204 retired on 31 July 2026. Written to the skills measured as of 7 October 2026: containers, vector search in Cosmos DB, PostgreSQL and Redis, messaging, Functions, Key Vault and monitoring. Check your level before the 120-minute exam.",
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
        { label: "Microsoft Learn: AI-200 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200" },
        { label: "Microsoft Learn: Azure AI Cloud Developer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-cloud-developer-associate/" },
        { label: "Microsoft Learn, Retired certification exams (AZ-204: 31 July 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AI-200 Practice Exams: Azure AI Cloud Developer Associate (2026)",
      description:
        "AI-200 practice exams for the Oct 2026 skills outline: containers, vector search in Cosmos DB, PostgreSQL and Redis, messaging, Functions and monitoring.",
    },
  },

  "dp-600": {
    description:
      "Practice exams for Microsoft DP-600: Implementing Analytics Solutions Using Microsoft Fabric, written to the skills measured as of 19 October 2026 (security and governance, deployment pipelines, lakehouses, warehouses and eventhouses, SQL, KQL and DAX, and semantic models with Direct Lake). Find your gaps before the 100-minute exam.",
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
        { label: "Microsoft Learn: DP-600 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-600" },
        { label: "Microsoft Learn: Exam DP-600", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/dp-600/" },
        { label: "Microsoft Learn: Fabric Analytics Engineer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
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
      "Practice exams for Microsoft AB-620: Designing and Building Integrated AI Agent Solutions in Copilot Studio, written against the current Microsoft study guide (last updated 16 October 2026). Covers agent planning, agent flows and topics, MCP and REST tools, multi-agent solutions, Azure integration, evaluation and ALM. Check your level before the 120-minute exam.",
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
        { label: "Microsoft Learn, AB-620 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-620" },
        { label: "Microsoft Learn: AI Agent Builder Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/ai-agent-builder-associate/" },
        { label: "Microsoft Learn: Renew your certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification" },
      ],
      lastVerified: "2026-10-27",
    },
    seo: {
      title: "AB-620 Practice Exams: AI Agent Builder Associate (2026)",
      description:
        "AB-620 practice exams for Copilot Studio: agent flows, topics, MCP and REST tools, multi-agent solutions, Azure integration, evaluation and ALM.",
    },
  },

  /* ── November 2026: top-searched exams, enriched and indexable ───────────────
   * Facts from official sources only, drafted and then checked independently on 3 Nov 2026. */
  "aws-saa-c03": {
    description:
      "Practice exams for AWS SAA-C03: Certified Solutions Architect - Associate, written to the official exam guide (secure, resilient, high-performing and cost-optimized architectures). Find your gaps before the 130-minute exam.",
    fullName: "AWS Certified Solutions Architect - Associate",
    // Verified 2026-11-03 against the AWS certification page, the SAA-C03 exam guide (overview, domain 1-4 pages, revisions v1.1 of 29 Oct 2026).
    // Status: no successor (SAA-C04) announced on official pages. The Italian-language exam is retired after 31 Dec 2026 (not relevant to English course).
    // Note: AWS certification page does not list a passing score; 720 is from the exam guide.
    exam: {
      officialName: "AWS Certified Solutions Architect - Associate",
      examCode: "SAA-C03",
      examVersion: "Exam guide SAA-C03, version 1.1 (29 October 2026)",
      questionCount: "65 questions (50 scored, 15 unscored)",
      duration: "130 minutes",
      format: "Multiple choice and multiple response; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "720 (scaled)",
      questionTypes: "Multiple choice (one correct response and three distractors) and multiple response (two or more correct responses out of five or more options)",
      languages: ["English", "French (France)", "Italian", "Japanese", "Korean", "Portuguese (Brazil)", "Spanish (Latin America)", "Spanish (Spain)", "Simplified Chinese", "Traditional Chinese"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Recommended: at least 1 year of hands-on experience designing cloud solutions that use AWS services.",
      status: "current",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html",
      domains: [
        { id: "d1", name: "Design Secure Architectures", weight: "30%", objectives: ["Design secure access to AWS resources", "Design secure workloads and applications", "Determine appropriate data security controls"] },
        { id: "d2", name: "Design Resilient Architectures", weight: "26%", objectives: ["Design scalable and loosely coupled architectures", "Design highly available and/or fault-tolerant architectures"] },
        { id: "d3", name: "Design High-Performing Architectures", weight: "24%", objectives: ["Determine high-performing and/or scalable storage solutions", "Design high-performing and elastic compute solutions", "Determine high-performing database solutions", "Determine high-performing and/or scalable network architectures", "Determine high-performing data ingestion and transformation solutions"] },
        { id: "d4", name: "Design Cost-Optimized Architectures", weight: "20%", objectives: ["Design cost-optimized storage solutions", "Design cost-optimized compute solutions", "Design cost-optimized database solutions", "Design cost-optimized network architectures"] },
      ],
      sources: [
        { label: "AWS: Certified Solutions Architect - Associate", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
        { label: "AWS: SAA-C03 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html" },
        { label: "AWS: SAA-C03 Exam Guide revisions", url: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-03-revisions.html" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "SAA-C03 Practice Exams: AWS Solutions Architect (2026)",
      description: "SAA-C03 practice exams for AWS Solutions Architect - Associate: secure, resilient, high-performing and cost-optimized architecture questions by domain.",
    },
  },
  "aws-clf-c02": {
    description:
      "German-language practice exams for AWS CLF-C02: Certified Cloud Practitioner, written to the official exam guide, to learn the content in German. AWS retires the German-language exam after 31 December 2026 and will keep offering it in English and other languages.",
    fullName: "AWS Certified Cloud Practitioner",
    // Verified 2026-11-03 against the AWS certification page, the CLF-C02 exam guide (overview, domain 1-4 pages, revisions v1.3 of 29 Oct 2026).
    // Status: CLF-C02 is current; no successor announced on official pages.
    // IMPORTANT: AWS certification page states the Cloud Practitioner exam in Italian and German "will be retired after December 31, 2026" (confirmed 2026-11-03). The course is German only. Languages array below is the certification page list, which still includes German and Italian until retirement.
    // Note: AWS certification page does not list a passing score; 700 is from the exam guide. Exam guide overview does not list languages or prerequisites (taken from certification page).
    exam: {
      officialName: "AWS Certified Cloud Practitioner",
      examCode: "CLF-C02",
      examVersion: "Exam guide CLF-C02, version 1.3 (29 October 2026)",
      questionCount: "65 questions (50 scored, 15 unscored)",
      duration: "90 minutes",
      format: "Multiple choice and multiple response; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "700 (scaled)",
      questionTypes: "Multiple choice (one correct response and three distractors) and multiple response (two or more correct responses out of five or more options)",
      languages: ["Arabic", "English", "French (France)", "German", "Italian", "Japanese", "Korean", "Portuguese (Brazil)", "Spanish (Latin America)", "Spanish (Spain)", "Simplified Chinese", "Traditional Chinese"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Target candidate has up to 6 months of AWS Cloud exposure (not required).",
      status: "current",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html",
      domains: [
        { id: "d1", name: "Cloud Concepts", weight: "24%", objectives: ["Define the benefits of the AWS Cloud.", "Identify design principles of the AWS Cloud.", "Understand the benefits of and strategies for migration to the AWS Cloud.", "Understand concepts of cloud economics."] },
        { id: "d2", name: "Security and Compliance", weight: "30%", objectives: ["Understand the AWS shared responsibility model.", "Understand AWS Cloud security, governance, and compliance concepts.", "Identify AWS access management capabilities.", "Identify components and resources for security."] },
        { id: "d3", name: "Cloud Technology and Services", weight: "34%", objectives: ["Define methods of deploying and operating in the AWS Cloud.", "Define the AWS global infrastructure.", "Identify AWS compute services.", "Identify AWS database services.", "Identify AWS network services.", "Identify AWS storage services.", "Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services.", "Identify services from other in-scope AWS service categories."] },
        { id: "d4", name: "Billing, Pricing, and Support", weight: "12%", objectives: ["Compare AWS pricing models.", "Understand resources for billing, budget, and cost management.", "Identify AWS technical resources and AWS Support options."] },
      ],
      sources: [
        { label: "AWS: Certified Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
        { label: "AWS: CLF-C02 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html" },
        { label: "AWS: CLF-C02 Exam Guide revisions", url: "https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "CLF-C02 Practice Exams in German: AWS Cloud Practitioner",
      description: "German-language CLF-C02 practice exams for AWS Certified Cloud Practitioner: cloud concepts, security, services, billing, pricing and support, by domain.",
    },
  },
  "aws-aif-c01": {
    description:
      "German-language practice exams for AWS AIF-C01: Certified AI Practitioner, written to the official exam guide, to learn the content in German. AWS retired the German-language exam after 15 October 2026 and still offers it in English and other languages.",
    fullName: "AWS Certified AI Practitioner",
    // Verified 2026-11-03 against the AWS certification page, the AIF-C01 exam guide (overview, domain 1-5 pages, revisions v1.2 of 29 Oct 2026).
    // Status: AIF-C01 is current; no successor announced on official pages.
    // IMPORTANT: AWS certification page states the AI Practitioner exam in Italian and German "will be retired after October 15, 2026" (confirmed 2026-11-03; date has passed). The course is German only, so the description says German exam is retired. German and Italian removed from the languages list below.
    // Note: exam guide overview gives no duration or languages (taken from certification page). Question types per exam guide include ordering and matching.
    exam: {
      officialName: "AWS Certified AI Practitioner",
      examCode: "AIF-C01",
      examVersion: "Exam guide AIF-C01, version 1.2 (29 October 2026)",
      questionCount: "65 questions (50 scored, 15 unscored)",
      duration: "90 minutes",
      format: "Multiple choice, multiple response, ordering and matching; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "700 (scaled)",
      questionTypes: "Multiple choice, multiple response (two or more correct responses out of five or more options), ordering (3 to 5 responses placed in the correct sequence) and matching (3 to 7 prompts matched to a list of responses)",
      languages: ["Arabic", "English", "French (France)", "Japanese", "Korean", "Portuguese (Brazil)", "Spanish (Latin America)", "Spanish (Spain)", "Simplified Chinese", "Traditional Chinese"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Target candidate has up to 6 months of exposure to AI/ML on AWS.",
      status: "current",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html",
      domains: [
        { id: "d1", name: "Fundamentals of AI and ML", weight: "20%", objectives: ["Explain basic AI concepts and terminologies.", "Identify practical use cases for AI.", "Describe the AI/ML development lifecycle."] },
        { id: "d2", name: "Fundamentals of GenAI", weight: "24%", objectives: ["Explain the basic concepts of generative AI (GenAI).", "Understand the capabilities and limitations of GenAI for solving business problems.", "Describe AWS infrastructure and technologies for building GenAI applications."] },
        { id: "d3", name: "Applications of Foundation Models", weight: "28%", objectives: ["Describe design considerations for applications that use foundation models (FMs).", "Choose effective prompt engineering techniques.", "Describe the training and fine-tuning process for FMs.", "Describe methods to evaluate FM performance."] },
        { id: "d4", name: "Guidelines for Responsible AI", weight: "14%", objectives: ["Explain the development of AI systems that are responsible.", "Recognize the importance of transparent and explainable models."] },
        { id: "d5", name: "Security, Compliance, and Governance for AI Solutions", weight: "14%", objectives: ["Explain methods to secure AI systems.", "Recognize governance and compliance regulations for AI systems."] },
      ],
      sources: [
        { label: "AWS: Certified AI Practitioner", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" },
        { label: "AWS: AIF-C01 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html" },
        { label: "AWS: AIF-C01 Exam Guide revisions", url: "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/aif-01-revisions.html" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "AIF-C01 Practice Exams in German: AWS AI Practitioner",
      description: "German-language AIF-C01 practice exams for AWS Certified AI Practitioner: AI/ML basics, GenAI, foundation models, responsible AI, security and governance.",
    },
  },
  "comptia-a-plus-core-1-220-1201": {
    description:
      "German-language practice exams for CompTIA A+ Core 1 (220-1201), organised by the exam domains: mobile devices, networking, hardware, virtualization and cloud computing, and hardware and network troubleshooting. Find your gaps before the 90-minute exam.",
    fullName: "CompTIA A+ Core 1",
    // Verified 2026-11-03 against the CompTIA A+ certification page and the A+ Core 1 (V15) exam page on comptia.org.
    // Objectives PDF not reachable (pages link to none, comptia.org objectives files blocked), so objectives omitted. Delivery not stated on the page, omitted.
    // CompTIA states retirement only as "usually three years after launch (estimated 2028)"; no firm date announced, so retirementDate omitted.
    // A+ certification requires passing both Core 1 (220-1201) and Core 2 (220-1202).
    exam: {
      officialName: "CompTIA A+ Core 1",
      examCode: "220-1201",
      examVersion: "V15",
      questionCount: "Maximum of 90",
      duration: "90 minutes",
      format: "Multiple-choice and performance-based questions",
      passingScore: "675 (on a scale of 100–900)",
      questionTypes: "Multiple-choice (single and multiple response), drag-and-drop, and performance-based",
      languages: ["English", "German", "Japanese"],
      prerequisites: "None required. CompTIA recommends 12 months of hands-on experience in an IT support specialist role.",
      status: "current",
      launchDate: "2025-03-25",
      officialCertificationUrl: "https://www.comptia.org/en-us/certifications/a/",
      officialExamUrl: "https://www.comptia.org/en-us/certifications/a/core-1-v15/",
      domains: [
        { id: "d1", name: "Mobile devices", weight: "13%" },
        { id: "d2", name: "Networking", weight: "23%" },
        { id: "d3", name: "Hardware", weight: "25%" },
        { id: "d4", name: "Virtualization and cloud computing", weight: "11%" },
        { id: "d5", name: "Hardware and network troubleshooting", weight: "28%" },
      ],
      sources: [
        { label: "CompTIA: A+ certification", url: "https://www.comptia.org/en-us/certifications/a/" },
        { label: "CompTIA: A+ Core 1 (V15)", url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "CompTIA A+ Core 1 (220-1201) Practice Exams",
      description: "German-language practice exams for CompTIA A+ Core 1 (220-1201): mobile devices, networking, hardware, virtualization, cloud and troubleshooting.",
    },
  },
  "comptia-a-plus-core-2-220-1202": {
    description:
      "German-language practice exams for CompTIA A+ Core 2 (220-1202), organised by the exam domains: operating systems, security, software troubleshooting, and operational procedures. Find your gaps before the 90-minute exam.",
    fullName: "CompTIA A+ Core 2",
    // Verified 2026-11-03 against the CompTIA A+ certification page and the A+ Core 2 (V15) exam page on comptia.org.
    // Objectives PDF not reachable (page links to none), so objectives omitted. Delivery not stated on the page, omitted.
    // CompTIA states retirement only as "usually three years after launch (estimated 2028)"; no firm date announced, so retirementDate omitted.
    // A+ certification requires passing both Core 1 (220-1201) and Core 2 (220-1202); both must be from the same version (V15).
    exam: {
      officialName: "CompTIA A+ Core 2",
      examCode: "220-1202",
      examVersion: "V15",
      questionCount: "Maximum of 90",
      duration: "90 minutes",
      format: "Multiple-choice and performance-based questions",
      passingScore: "700 (on a scale of 100–900)",
      questionTypes: "Multiple-choice (single and multiple response), drag-and-drop, and performance-based",
      languages: ["English", "German", "Japanese"],
      prerequisites: "None required. CompTIA recommends 12 months of hands-on experience in an IT support specialist role.",
      status: "current",
      launchDate: "2025-03-25",
      officialCertificationUrl: "https://www.comptia.org/en-us/certifications/a/",
      officialExamUrl: "https://www.comptia.org/en-us/certifications/a/core-2-v15/",
      domains: [
        { id: "d1", name: "Operating systems", weight: "28%" },
        { id: "d2", name: "Security", weight: "28%" },
        { id: "d3", name: "Software troubleshooting", weight: "23%" },
        { id: "d4", name: "Operational procedures", weight: "21%" },
      ],
      sources: [
        { label: "CompTIA: A+ certification", url: "https://www.comptia.org/en-us/certifications/a/" },
        { label: "CompTIA: A+ Core 2 (V15)", url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "CompTIA A+ Core 2 (220-1202) Practice Exams",
      description: "German-language practice exams for CompTIA A+ Core 2 (220-1202): operating systems, security, software troubleshooting and operational procedures.",
    },
  },
  "comptia-network-plus-n10-009": {
    description:
      "German-language practice exams for CompTIA Network+ (N10-009), organised by the exam domains: networking concepts, network implementation, network operations, network security, and network troubleshooting. Find your gaps before the 90-minute exam.",
    fullName: "CompTIA Network+",
    // Verified 2026-11-03 against the CompTIA Network+ certification page on comptia.org (exam details are on the same page).
    // Objectives PDF not reachable (page links to none), so objectives omitted. Delivery not stated on the page, omitted.
    // CompTIA states retirement only as "usually three years after launch (estimated 2027)"; no firm date announced, so retirementDate omitted.
    // CompTIA lists a DRAFT Network+ V10 objectives document under development (no launch date given); N10-009 remains the current exam on the certification page.
    // The page gives no longer formal exam title than "Network+".
    exam: {
      officialName: "CompTIA Network+",
      examCode: "N10-009",
      examVersion: "V9",
      questionCount: "Maximum of 90",
      duration: "90 minutes",
      format: "Multiple-choice and performance-based questions",
      passingScore: "720 (on a scale of 100–900)",
      questionTypes: "Multiple-choice and performance-based",
      languages: ["English", "German", "Japanese", "Portuguese", "Spanish"],
      prerequisites: "None required. CompTIA recommends A+ and 9–12 months of hands-on experience as a junior network administrator or network support technician.",
      status: "current",
      launchDate: "2024-06-20",
      officialCertificationUrl: "https://www.comptia.org/en-us/certifications/network/",
      officialExamUrl: "https://www.comptia.org/en-us/certifications/network/",
      domains: [
        { id: "d1", name: "Networking concepts", weight: "23%" },
        { id: "d2", name: "Network implementation", weight: "20%" },
        { id: "d3", name: "Network operations", weight: "19%" },
        { id: "d4", name: "Network security", weight: "14%" },
        { id: "d5", name: "Network troubleshooting", weight: "24%" },
      ],
      sources: [
        { label: "CompTIA: Network+ certification", url: "https://www.comptia.org/en-us/certifications/network/" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "CompTIA Network+ (N10-009) Practice Exams",
      description: "German-language practice exams for CompTIA Network+ (N10-009): concepts, implementation, operations, security and troubleshooting.",
    },
  },
  "isc2-cissp": {
    description:
      "Practice exams for ISC2 CISSP, written to the exam outline effective 15 April 2024 (security and risk management, asset security, security architecture and engineering, and the other five domains). Find your gaps before the adaptive exam.",
    fullName: "ISC2 Certified Information Systems Security Professional",
    // Verified 2026-11-03 against isc2.org: CISSP certification page, CISSP exam outline page (effective date, domains, subdomains), CISSP exam refresh FAQ, CAT-for-CISSP-in-all-languages article (Feb 2024), CAT format updates article (May 2025), Associate of ISC2 page.
    // UNVERIFIED and omitted: domain weights (not rendered on the outline page), passing score, question types, delivery, exam code. No new CISSP outline found on isc2.org as of this date (the 15 April 2024 outline is the latest published).
    // NOTE: the May 2025 CAT article table lists CISSP at 100-150 items / 3 hours, but its text only names CC, SSCP and CCSP as moving to CAT on 1 Oct 2025; the Feb 2024 article confirms CISSP CAT in all languages from April 2024 (as few as 100 items, 3-hour maximum).
    // Re-verified 2026-11-03: domain weights not readable on any ISC2 page (outline page lists tasks only); the 5-year figure is from the CISSP certification page (eligible domains per experience page meta description), the six-year Associate window from the Associate of ISC2 page. Waiver rules were updated 1 April 2026 (ISC2 article, May 2026), details not readable.
    exam: {
      officialName: "Certified Information Systems Security Professional (CISSP)",
      examVersion: "Exam outline effective 15 April 2024",
      questionCount: "100–150 items (computerized adaptive testing)",
      duration: "3 hours (maximum)",
      format: "Computerized adaptive testing (CAT), used for all CISSP exam languages since April 2024",
      languages: ["English", "Chinese", "Japanese", "German", "Spanish"],
      prerequisites:
        "ISC2 lists 5 years of required work experience in eligible security domains. Candidates who pass without the experience can become an Associate of ISC2 and have up to 6 years to earn it.",
      status: "current",
      officialCertificationUrl: "https://www.isc2.org/certifications/cissp",
      officialExamUrl: "https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline",
      domains: [
        { id: "d1", name: "Security and Risk Management" },
        { id: "d2", name: "Asset Security" },
        { id: "d3", name: "Security Architecture and Engineering" },
        { id: "d4", name: "Communication and Network Security" },
        { id: "d5", name: "Identity and Access Management (IAM)" },
        { id: "d6", name: "Security Assessment and Testing" },
        { id: "d7", name: "Security Operations" },
        { id: "d8", name: "Software Development Security" },
      ],
      sources: [
        { label: "ISC2: CISSP certification", url: "https://www.isc2.org/certifications/cissp" },
        { label: "ISC2: CISSP certification exam outline", url: "https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline" },
        { label: "ISC2: CISSP exam refresh FAQ", url: "https://www.isc2.org/certifications/cissp/cissp-exam-refresh-faq" },
        { label: "ISC2: Computerized adaptive testing for CISSP in all languages", url: "https://www.isc2.org/Insights/2024/02/Computerized-Adaptive-Testing-CISSP-Examinations-All-Languages" },
        { label: "ISC2: Computerized adaptive testing exam format updates", url: "https://www.isc2.org/Insights/2025/05/computerized-adaptive-testing-examination-format-updates" },
        { label: "ISC2: Associate of ISC2", url: "https://www.isc2.org/certifications/associate" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "ISC2 CISSP Practice Exams",
      description:
        "CISSP practice exams for the April 2024 outline: security and risk management, asset security, IAM, security operations and software development.",
    },
  },
  "isc2-cc": {
    description:
      "Practice exams for ISC2 Certified in Cybersecurity (CC), written to the exam outline effective 1 September 2026 (security principles, security governance, IAM concepts, networking and cloud security, and security operations and incident response). The course is available in English and German.",
    fullName: "ISC2 Certified in Cybersecurity",
    // Verified 2026-11-03 against isc2.org: CC certification page, CC exam outline page (effective date, domains, subdomains), "What's New for Entry-Level Cybersecurity" (6 Aug 2026, body not readable), ISC2 FAQ, CAT format updates article (May 2025), German CC training page, CC languages article (Feb 2023).
    // CONFLICT: the ISC2 FAQ still lists the OLD five CC domains (e.g. Business Continuity, Disaster Recovery & Incident Response Concepts) and 100-125 items / 2 hours; the outline page effective 1 Sept 2026 lists the NEW domains used here. Item count and duration come from the FAQ and May 2025 article and are not confirmed for the 2026 outline.
    // REMOVED after re-check: questionCount and duration (100-125 items / 2 hours appear only on the FAQ and May 2025 article, which still describe the old outline; not stated for the 2026 outline), questionTypes, the 9-month application window and Code of Ethics line (not found on a readable official page). Exam languages (five) come from the ISC2 FAQ, which may predate the 2026 outline. Weights could not be read on any ISC2 page.
    // UNVERIFIED and omitted: domain weights (not on outline page), passing score (ISC2 does not release scores), exam code, question-type detail beyond "multiple-choice and advanced item types".
    exam: {
      officialName: "Certified in Cybersecurity (CC)",
      examVersion: "Exam outline effective 1 September 2026",
      format: "Computerized adaptive testing (CAT)",
      languages: ["English", "Simplified Chinese", "German", "Japanese", "Spanish"],
      delivery: "In person only at ISC2-authorized Pearson test centers",
      prerequisites:
        "No work experience required.",
      status: "current",
      officialCertificationUrl: "https://www.isc2.org/certifications/cc",
      officialExamUrl: "https://www.isc2.org/certifications/cc/cc-certification-exam-outline",
      domains: [
        { id: "d1", name: "Security Principles" },
        { id: "d2", name: "Security Governance" },
        { id: "d3", name: "Identity And Access Management (IAM) Concepts" },
        { id: "d4", name: "Networking and Cloud Security Concepts" },
        { id: "d5", name: "Security Operations and Incident Response" },
      ],
      sources: [
        { label: "ISC2: Certified in Cybersecurity", url: "https://www.isc2.org/certifications/cc" },
        { label: "ISC2: CC certification exam outline", url: "https://www.isc2.org/certifications/cc/cc-certification-exam-outline" },
        { label: "ISC2: What's new for entry-level cybersecurity", url: "https://www.isc2.org/Insights/2026/08/inside-the-updated-isc2-cc-exam" },
        { label: "ISC2: Frequently asked questions", url: "https://www.isc2.org/frequently-asked-questions" },
        { label: "ISC2: Computerized adaptive testing exam format updates", url: "https://www.isc2.org/Insights/2025/05/computerized-adaptive-testing-examination-format-updates" },
        { label: "ISC2: CC training and exam in German", url: "https://www.isc2.org/training/online-self-paced/german" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "ISC2 CC Practice Exams (English, German)",
      description:
        "ISC2 CC practice exams in English and German for the Sept 2026 outline: security principles, governance, IAM, network and cloud security.",
    },
  },
  "az-305": {
    description:
      "Practice exams for Microsoft AZ-305: Designing Microsoft Azure Infrastructure Solutions, written to the skills measured as of 17 April 2026 (identity, governance and monitoring, data storage, business continuity, and infrastructure). Find your gaps before the exam for the Azure Solutions Architect Expert certification.",
    fullName: "Microsoft Azure Solutions Architect Expert",
    // Verified 2026-11-03 against the Microsoft Learn AZ-305 study guide, AZ-305 exam page, Azure Solutions Architect Expert certification page and Azure Administrator Associate certification page.
    // Not published on the AZ-305 pages, so omitted: question count, duration, format, question types. (AZ-104 page states 100 minutes, but that is a different exam.)
    // The certification page says the prerequisite is the Azure Administrator Associate certification (earned via AZ-104, per the Azure Administrator page); it does not name the exam itself.
    exam: {
      officialName: "Exam AZ-305: Designing Microsoft Azure Infrastructure Solutions",
      examCode: "AZ-305",
      examVersion: "Skills measured as of 17 April 2026",
      passingScore: "700 or greater (scaled score)",
      languages: ["English", "Japanese", "Chinese (Simplified)", "Korean", "German", "French", "Spanish", "Portuguese (Brazil)", "Chinese (Traditional)", "Italian"],
      delivery: "Scheduled through Pearson VUE",
      prerequisites: "Microsoft Certified: Azure Administrator Associate certification (AZ-104) is required before earning Azure Solutions Architect Expert. The exam page also recommends experience in IT operations, Azure administration, Azure development and DevOps.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-305/",
      domains: [
        {
          id: "d1",
          name: "Design identity, governance, and monitoring solutions",
          weight: "25–30%",
          objectives: [
            "Design solutions for logging and monitoring",
            "Design authentication and authorization solutions",
            "Design governance",
          ],
        },
        {
          id: "d2",
          name: "Design data storage solutions",
          weight: "20–25%",
          objectives: [
            "Design data storage solutions for relational data",
            "Design data storage solutions for semi-structured and unstructured data",
            "Design data integration",
          ],
        },
        {
          id: "d3",
          name: "Design business continuity solutions",
          weight: "15–20%",
          objectives: [
            "Design solutions for backup and disaster recovery",
            "Design for high availability",
          ],
        },
        {
          id: "d4",
          name: "Design infrastructure solutions",
          weight: "30–35%",
          objectives: [
            "Design compute solutions",
            "Design an application architecture",
            "Design migrations",
            "Design network solutions",
          ],
        },
      ],
      sources: [
        { label: "Microsoft Learn: AZ-305 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-305" },
        { label: "Microsoft Learn: Exam AZ-305", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-305/" },
        { label: "Microsoft Learn: Azure Solutions Architect Expert certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/" },
        { label: "Microsoft Learn: Azure Administrator Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "AZ-305 Practice Exams: Azure Solutions Architect",
      description: "AZ-305 practice exams on identity, governance, monitoring, data storage, business continuity and infrastructure design. Skills measured as of April 2026.",
    },
  },
  cka: {
    description:
      "Practice exams for the Certified Kubernetes Administrator (CKA) from The Linux Foundation and CNCF, written to the current curriculum for Kubernetes v1.37 (troubleshooting, cluster architecture, services and networking, workloads and scheduling, and storage). These are question-based practice tests to find your gaps before the 2-hour performance-based exam.",
    fullName: "Certified Kubernetes Administrator",
    // Verified 2026-11-03 against training.linuxfoundation.org CKA page, docs.linuxfoundation.org CKA/CKAD tips page and CKA/CKAD/CKS FAQ, and github.com/cncf/curriculum (CKA_Curriculum_v1.37.pdf).
    // Not published on official pages, so omitted: a fixed question count (the tips page says 15 to 20 performance-based tasks).
    // Name conflict: the LF page says "Services & Networking" and "Cluster Architecture, Installation & Configuration"; the CNCF PDF prints "Servicing and Networking" (apparent typo) and "Installation and Configuration". LF page wording used.
    // Other official facts (no schema field): one retake included with the exam (LF page; FAQ says retake offered when eligible); Killer.sh simulator, 2 attempts with 36 hours each (LF page and FAQ); certification valid 2 years; exam environment moves to the latest Kubernetes minor roughly 4 to 8 weeks after each release.
    // The LF CKA page did not list passing score or languages; both come from the LF FAQ (docs.linuxfoundation.org).
    exam: {
      officialName: "Certified Kubernetes Administrator (CKA)",
      examCode: "CKA",
      examVersion: "Kubernetes v1.37 (CKA curriculum v1.37)",
      duration: "2 hours",
      format: "Online, proctored, performance-based exam solved from a command line running Kubernetes",
      passingScore: "66%",
      questionTypes: "Performance-based tasks completed on the Linux command line (15 to 20 tasks)",
      languages: ["English", "Simplified Chinese", "Japanese"],
      delivery: "Online, remotely proctored (PSI Bridge platform with the PSI Secure Browser)",
      prerequisites: "None",
      status: "current",
      officialCertificationUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
      officialExamUrl: "https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad",
      domains: [
        {
          id: "d1",
          name: "Troubleshooting",
          weight: "30%",
          objectives: [
            "Troubleshoot clusters and nodes",
            "Troubleshoot cluster components",
            "Monitor cluster and application resource usage",
            "Manage and evaluate container output streams",
            "Troubleshoot services and networking",
          ],
        },
        {
          id: "d2",
          name: "Cluster Architecture, Installation & Configuration",
          weight: "25%",
          objectives: [
            "Manage role based access control (RBAC)",
            "Prepare underlying infrastructure for installing a Kubernetes cluster",
            "Create and manage Kubernetes clusters using kubeadm",
            "Manage the lifecycle of Kubernetes clusters",
            "Implement and configure a highly-available control plane",
            "Use Helm and Kustomize to install cluster components",
            "Understand extension interfaces (CNI, CSI, CRI, etc.)",
            "Understand CRDs, install and configure operators",
          ],
        },
        {
          id: "d3",
          name: "Services & Networking",
          weight: "20%",
          objectives: [
            "Understand connectivity between Pods",
            "Define and enforce Network Policies",
            "Use ClusterIP, NodePort, LoadBalancer service types and endpoints",
            "Use the Gateway API to manage Ingress traffic",
            "Know how to use Ingress controllers and Ingress resources",
            "Understand and use CoreDNS",
          ],
        },
        {
          id: "d4",
          name: "Workloads & Scheduling",
          weight: "15%",
          objectives: [
            "Understand application deployments and how to perform rolling update and rollbacks",
            "Use ConfigMaps and Secrets to configure applications",
            "Configure workload autoscaling",
            "Understand the primitives used to create robust, self-healing, application deployments",
            "Configure Pod admission and scheduling (limits, node affinity, etc.)",
          ],
        },
        {
          id: "d5",
          name: "Storage",
          weight: "10%",
          objectives: [
            "Implement storage classes and dynamic volume provisioning",
            "Configure volume types, access modes and reclaim policies",
            "Manage persistent volumes and persistent volume claims",
          ],
        },
      ],
      sources: [
        { label: "Linux Foundation Training: CKA certification page", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" },
        { label: "Linux Foundation docs: CKA and CKAD exam tips and instructions", url: "https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad" },
        { label: "Linux Foundation docs: CKA, CKAD and CKS FAQ", url: "https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks" },
        { label: "CNCF curriculum: CKA curriculum v1.37", url: "https://github.com/cncf/curriculum" },
      ],
      lastVerified: "2026-11-03",
    },
    seo: {
      title: "CKA Practice Exams: Kubernetes Administrator",
      description: "CKA practice exams for Kubernetes v1.37: troubleshooting, cluster architecture, services and networking, workloads and scheduling, and storage.",
    },
  },


  /* ── November 2026, batch 2: enriched and indexable ─────────────────────────
   * Facts from official sources only, drafted and then checked independently on 4 Nov 2026.
   * aws-sap-c02 deliberately left out: SAP-C02 retires 16 Nov 2026 (SAP-C03 from 17 Nov). */
  "pmp": {
    description:
      "Practice exams for the PMI Project Management Professional (PMP), written to the July 2026 exam content outline: people, process and business environment across predictive, agile and hybrid approaches. Check your level before the 180-question, 240-minute exam.",
    fullName: "Project Management Professional (PMP)",
    // Verified 2026-11-04 against pmi.org: PMP certification page, "What's new in the updated PMP exam" page (new-exam), and the PMP Examination Content Outline PDF (cover "July 2026 PMP Certification Exam Update", footer "revised 11 August 2026").
    // Status: the updated exam launched in July 2026 (PMI states "In July 2026, we updated the PMP exam"); no specific launch day is published. No newer version announced.
    // Note: exam languages are not stated on any PMI page fetched (the 2021-era handbook PDF is outdated), so languages are omitted. No passing score is published by PMI.
    // Note: eligibility taken from the August 2026 ECO (10-year experience window, 24 to 60 months). The PMP certification page as fetched still showed the older 36/60 months within 8 years; the ECO and the new-exam page (10-year window) were used.
    // Other official facts (no schema field): about 40% predictive and 60% adaptive/agile or hybrid content; from late Q4 2026 (ECO: effective 1 December 2026) live training counts toward the 35 hours only from PMI Authorized Training Partners, China Registered Education Providers or eligible accredited academic programs. Fees on the PMP page: US$405 members, US$555 non-members.
    exam: {
      officialName: "Project Management Professional (PMP)",
      examVersion: "PMP Examination Content Outline, July 2026 exam update (revised 11 August 2026)",
      questionCount: "180 questions (170 scored, 10 unscored pretest questions)",
      duration: "240 minutes, with two 10-minute breaks",
      questionTypes:
        "Multiple choice (single response), multiple response, case or scenario, and graphic-based items in all modalities; enhanced matching, point and click, matching and pull-down list items in computer-based testing only",
      delivery: "Test center or online proctored; Mainland China via paper-based testing only",
      prerequisites:
        "35 hours of project management education (waived for active CAPM holders) plus experience leading projects within the last 10 years: 60 months with a secondary diploma, 48 months with an associate-level degree, 36 months with a bachelor's degree or higher, or 24 months with a degree from a PMI GAC-accredited program.",
      status: "current",
      launchDate: "July 2026",
      officialCertificationUrl: "https://www.pmi.org/certifications/project-management-pmp",
      officialExamUrl: "https://www.pmi.org/certifications/project-management-pmp/new-exam",
      domains: [
        {
          id: "d1",
          name: "People",
          weight: "33%",
          objectives: [
            "Develop a common vision",
            "Manage conflicts",
            "Lead the project team",
            "Engage stakeholders",
            "Align stakeholder expectations",
            "Manage stakeholder expectations",
            "Help ensure knowledge transfer",
            "Plan and manage communication",
          ],
        },
        {
          id: "d2",
          name: "Process",
          weight: "41%",
          objectives: [
            "Develop an integrated project management plan and plan delivery",
            "Develop and manage project scope",
            "Help ensure value-based delivery",
            "Plan and manage resources",
            "Plan and manage procurement",
            "Plan and manage finance",
            "Plan and optimize quality of products/deliverables",
            "Plan and manage schedule",
            "Evaluate project status",
            "Manage project closure",
          ],
        },
        {
          id: "d3",
          name: "Business Environment",
          weight: "26%",
          objectives: [
            "Define and establish project governance",
            "Plan and manage project compliance",
            "Manage and control changes",
            "Remove impediments and manage issues",
            "Plan and manage risk",
            "Continuous improvement",
            "Support organizational change",
            "Evaluate external business environment changes",
          ],
        },
      ],
      sources: [
        { label: "PMI: Project Management Professional (PMP)", url: "https://www.pmi.org/certifications/project-management-pmp" },
        { label: "PMI: What's new in the updated PMP exam", url: "https://www.pmi.org/certifications/project-management-pmp/new-exam" },
        { label: "PMI: PMP Examination Content Outline (July 2026 exam update)", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/pmp/pmp-examination-content-outline.pdf" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "PMP Practice Exams for the July 2026 Exam",
      description:
        "PMP practice exams for the July 2026 content outline: people, process and business environment across predictive, agile and hybrid approaches.",
    },
  },
  "pmi-acp": {
    description:
      "Practice exams for the PMI Agile Certified Practitioner (PMI-ACP), written to PMI's Examination Content Outline (November 2024, revised March 2026): mindset, leadership, product and delivery. Find your gaps before the 120-question, 3-hour exam.",
    fullName: "PMI Agile Certified Practitioner (PMI-ACP)",
    // Verified 2026-11-04 against pmi.org: PMI-ACP certification page and the PMI-ACP Examination Content Outline PDF (cover dated November 2024, running header "Examination Content Outline - March 2026").
    // Status: current; no newer PMI-ACP exam announced on official pages. The ECO does not state the launch date of the current exam (cover date November 2024).
    // Note: the PMI-ACP certification page as fetched still showed older eligibility (12 months general plus 8 months agile experience) and a shorter language list (English, Arabic, Japanese, Korean, Portuguese, Spanish). The March 2026 ECO was used for eligibility and languages (English, plus the listed translations the ECO says were to be offered by March 2025, Korean by June).
    // Not published, so omitted: passing score, exam code.
    // Other official facts (no schema field): fees on the PMI-ACP page US$435 members, US$495 non-members; renewal with 30 PDUs every 3 years (ECO).
    exam: {
      officialName: "PMI Agile Certified Practitioner (PMI-ACP)",
      examVersion: "PMI-ACP Examination Content Outline, November 2024 (revised March 2026)",
      questionCount: "120 questions (100 scored, 20 unscored pretest questions)",
      duration: "3 hours, with one 10-minute break after question 60",
      questionTypes: "Multiple choice, multiple response, drag-and-drop style items and exhibits",
      // Note: languages omitted; the ECO (rev. March 2026) lists translations planned by March 2025, while the certification page lists English, Arabic, Japanese, Korean, Portuguese, Spanish.
      delivery: "Test center or online proctored (OnVUE)",
      prerequisites:
        "Secondary diploma and 21 hours of training in agile practices, plus one of: 2 years of agile experience within the past 5 years; 1 year of agile experience with a degree from a PMI GAC-accredited program; 1 year of agile experience with an active third-party agile certification held for more than a year; or an active PMP.",
      status: "current",
      officialCertificationUrl: "https://www.pmi.org/certifications/agile-acp",
      officialExamUrl: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/agile-certified-exam-outline.pdf",
      domains: [
        {
          id: "d1",
          name: "Mindset",
          weight: "28%",
          objectives: [
            "Experiment early",
            "Embrace agile mindset",
            "Promote collaborative team environment",
            "Build transparency",
            "Foster psychological safety",
            "Shorten feedback loops",
            "Embrace change",
          ],
        },
        {
          id: "d2",
          name: "Leadership",
          weight: "25%",
          objectives: [
            "Empower teams",
            "Facilitate problem resolution",
            "Promote knowledge sharing",
            "Promote agile mindset principles and practices",
            "Promote shared vision and purpose",
            "Facilitate conflict management",
          ],
        },
        {
          id: "d3",
          name: "Product",
          weight: "19%",
          objectives: ["Refine product backlog", "Manage increments", "Visualize work", "Manage value delivery"],
        },
        {
          id: "d4",
          name: "Delivery",
          weight: "28%",
          objectives: [
            "Seek early feedback",
            "Manage agile metrics",
            "Manage impediments and risk",
            "Recognize and eliminate waste",
            "Perform continuous improvements",
            "Actively engage customers",
            "Optimize flow",
          ],
        },
      ],
      sources: [
        { label: "PMI: PMI Agile Certified Practitioner (PMI-ACP)", url: "https://www.pmi.org/certifications/agile-acp" },
        { label: "PMI: PMI-ACP Examination Content Outline", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/agile-certified-exam-outline.pdf" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "PMI-ACP Practice Exams: Agile Certified Practitioner",
      description:
        "PMI-ACP practice exams for the current content outline: agile mindset, leadership, product and delivery, across all four exam domains.",
    },
  },
  "cism": {
    description:
      "Practice exams for ISACA CISM: Certified Information Security Manager, covering the four job practice domains: governance, risk management, security program and incident management. ISACA's updated exam content outline applies to exams from 3 November 2026.",
    fullName: "ISACA Certified Information Security Manager (CISM)",
    // Verified 2026-11-04 against isaca.org: CISM credential page, Get CISM certified page, CISM exam content outline page, and the ISACA press release of 10 September 2026 on the updated CISM exam content outline.
    // Status: the updated CISM exam has been available since 3 November 2026 (one day before this check). Domains unchanged, weights shifted to 18/20/33/29; ISACA adds content on enterprise architecture and information security architecture. The outline page now shows the new weights.
    // DOUBT: the description does not claim the Udemy course was written to the 3 November 2026 outline; confirm the questions were reviewed against it before adding an outlineBadge or stronger wording.
    // UNVERIFIED and omitted: duration, passing score, exam languages and question types. They are in the ISACA Exam Candidate Guide PDF (version 1.26), which could not be fetched (robots disallowed / proxy blocked); support.isaca.org did not render.
    // Other official facts (no schema field): exam fee US$575 members, US$760 non-members; US$50 application processing fee; apply within 5 years of passing; 120 CPE hours per 3-year cycle, at least 20 per year.
    exam: {
      officialName: "Certified Information Security Manager (CISM)",
      examVersion: "CISM exam content outline, updated exam available from 3 November 2026",
      questionCount: "150 questions",
      delivery: "Computer-based, at authorized PSI testing centers or remotely proctored",
      prerequisites:
        "None to sit the exam. For certification: at least 5 years of information security management work experience across at least three of the four CISM domains, gained within the 10 years before the application, and an application within 5 years of passing.",
      status: "current",
      launchDate: "3 November 2026 (updated exam content outline)",
      officialCertificationUrl: "https://www.isaca.org/credentialing/cism",
      officialExamUrl: "https://www.isaca.org/credentialing/cism/cism-exam-content-outline",
      domains: [
        { id: "d1", name: "Information Security Governance", weight: "18%", objectives: ["Enterprise Governance", "Information Security Strategy"] },
        { id: "d2", name: "Information Security Risk Management", weight: "20%", objectives: ["Information Security Risk Identification and Assessment", "Information Security Risk Response"] },
        { id: "d3", name: "Information Security Program", weight: "33%", objectives: ["Information Security Program Development", "Information Security Program Management"] },
        { id: "d4", name: "Incident Management", weight: "29%", objectives: ["Incident Management Readiness", "Incident Management Operations"] },
      ],
      sources: [
        { label: "ISACA: CISM certification", url: "https://www.isaca.org/credentialing/cism" },
        { label: "ISACA: Get CISM certified", url: "https://www.isaca.org/credentialing/cism/get-cism-certified" },
        { label: "ISACA: CISM exam content outline", url: "https://www.isaca.org/credentialing/cism/cism-exam-content-outline" },
        {
          label: "ISACA press release: updated CISM exam content outline (10 September 2026)",
          url: "https://www.isaca.org/about-us/newsroom/press-releases/2026/isaca-updates-cism-exam-content-outline-factoring-in-todays-technologies-security-responsibilities",
        },
        { label: "ISACA: Exam candidate guides", url: "https://www.isaca.org/credentialing/exam-candidate-guides" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ISACA CISM Practice Exams",
      description:
        "CISM practice exams across the four ISACA domains: security governance, risk management, security program and incident management.",
    },
  },
  "cisa": {
    description:
      "Practice exams for ISACA CISA: Certified Information Systems Auditor, written to the exam content outline in effect since 1 August 2024: audit process, IT governance, acquisition and development, operations and resilience, and protection of information assets.",
    fullName: "ISACA Certified Information Systems Auditor (CISA)",
    // Verified 2026-11-04 against isaca.org: CISA credential page, Get CISA certified page, CISA exam content outline page, and the ISACA press release of 1 May 2024 (updated CISA exam available 1 August 2024).
    // Status: current. No newer CISA outline announced on isaca.org as of this date.
    // UNVERIFIED and omitted: duration, passing score, exam languages and question types. They are in the ISACA Exam Candidate Guide PDF (version 1.26), which could not be fetched (robots disallowed / proxy blocked); support.isaca.org did not render.
    // Other official facts (no schema field): exam fee US$575 members, US$760 non-members; US$50 application processing fee; apply within 5 years of passing; 120 CPE hours per 3-year cycle, at least 20 per year. The Get CISA certified page mentions no experience waivers.
    exam: {
      officialName: "Certified Information Systems Auditor (CISA)",
      examVersion: "CISA exam content outline, updated exam available from 1 August 2024",
      questionCount: "150 questions",
      delivery: "Computer-based, at authorized PSI testing centers or remotely proctored",
      prerequisites:
        "None to sit the exam. For certification: at least 5 years of professional information systems auditing, control or security work experience in the CISA job practice areas, gained within the 10 years before the application, and an application within 5 years of passing.",
      status: "current",
      launchDate: "1 August 2024 (current exam content outline)",
      officialCertificationUrl: "https://www.isaca.org/credentialing/cisa",
      officialExamUrl: "https://www.isaca.org/credentialing/cisa/cisa-exam-content-outline",
      domains: [
        { id: "d1", name: "Information Systems Auditing Process", weight: "18%", objectives: ["Planning", "Execution"] },
        { id: "d2", name: "Governance and Management of IT", weight: "18%", objectives: ["IT Governance", "IT Management"] },
        { id: "d3", name: "Information Systems Acquisition, Development and Implementation", weight: "12%", objectives: ["Information Systems Acquisition and Development", "Information Systems Implementation"] },
        { id: "d4", name: "Information Systems Operations and Business Resilience", weight: "26%", objectives: ["Information Systems Operations", "Business Resilience"] },
        { id: "d5", name: "Protection of Information Assets", weight: "26%", objectives: ["Information Asset Security and Control", "Security Event Management"] },
      ],
      sources: [
        { label: "ISACA: CISA certification", url: "https://www.isaca.org/credentialing/cisa" },
        { label: "ISACA: Get CISA certified", url: "https://www.isaca.org/credentialing/cisa/get-cisa-certified" },
        { label: "ISACA: CISA exam content outline", url: "https://www.isaca.org/credentialing/cisa/cisa-exam-content-outline" },
        {
          label: "ISACA press release: updated CISA exam (1 May 2024)",
          url: "https://www.isaca.org/about-us/newsroom/press-releases/2024/isacas-cisa-exam-updated-to-reflect-innovations-and-evolving-technologies-impacting-it-audit",
        },
        { label: "ISACA: Exam candidate guides", url: "https://www.isaca.org/credentialing/exam-candidate-guides" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ISACA CISA Practice Exams",
      description:
        "CISA practice exams for the current ISACA outline: audit process, IT governance, acquisition, operations and resilience, and asset protection.",
    },
  },
  "crisc": {
    description:
      "Practice exams for ISACA CRISC: Certified in Risk and Information Systems Control, written to the exam content outline in effect since 3 November 2025: governance, risk assessment, risk response and reporting, and technology and security.",
    fullName: "ISACA Certified in Risk and Information Systems Control (CRISC)",
    // Verified 2026-11-04 against isaca.org: CRISC credential page, Get CRISC certified page, CRISC exam content outline page, and the ISACA press release of 7 April 2025 (updated CRISC exam available 3 November 2025; domains unchanged, Risk Assessment 22%, Technology and Security 20%).
    // Status: current. No newer CRISC outline announced on isaca.org as of this date.
    // Note: the outline page prints the first Domain 4 heading as "A - Technology and Security" (same as the domain name); used as published.
    // UNVERIFIED and omitted: duration, passing score, exam languages and question types. They are in the ISACA Exam Candidate Guide PDF (version 1.26), which could not be fetched (robots disallowed / proxy blocked); support.isaca.org did not render.
    // Other official facts (no schema field): exam fee US$575 members, US$760 non-members; US$50 application processing fee; apply within 5 years of passing; 120 CPE hours per 3-year cycle, at least 20 per year. The Get CRISC certified page mentions no experience waivers.
    exam: {
      officialName: "Certified in Risk and Information Systems Control (CRISC)",
      examVersion: "CRISC exam content outline, updated exam available from 3 November 2025",
      questionCount: "150 questions",
      delivery: "Computer-based, at authorized PSI testing centers or remotely proctored",
      prerequisites:
        "None to sit the exam. For certification: at least 3 years of CRISC professional work experience across at least two of the four CRISC domains, gained within the 10 years before the application and verified by a supervisor or manager, and an application within 5 years of passing.",
      status: "current",
      launchDate: "3 November 2025 (current exam content outline)",
      officialCertificationUrl: "https://www.isaca.org/credentialing/crisc",
      officialExamUrl: "https://www.isaca.org/credentialing/crisc/crisc-exam-content-outline",
      domains: [
        { id: "d1", name: "Governance", weight: "26%", objectives: ["Organizational Governance", "Risk Governance"] },
        { id: "d2", name: "Risk Assessment", weight: "22%", objectives: ["Risk Identification", "Risk Analysis"] },
        { id: "d3", name: "Risk Response and Reporting", weight: "32%", objectives: ["Risk Response", "Control Design and Implementation", "Risk Monitoring and Reporting"] },
        { id: "d4", name: "Technology and Security", weight: "20%", objectives: ["Technology and Security", "Information Security Principles"] },
      ],
      sources: [
        { label: "ISACA: CRISC certification", url: "https://www.isaca.org/credentialing/crisc" },
        { label: "ISACA: Get CRISC certified", url: "https://www.isaca.org/credentialing/crisc/get-crisc-certified" },
        { label: "ISACA: CRISC exam content outline", url: "https://www.isaca.org/credentialing/crisc/crisc-exam-content-outline" },
        {
          label: "ISACA press release: updated CDPSE and CRISC exams (7 April 2025)",
          url: "https://www.isaca.org/about-us/newsroom/press-releases/2025/isaca-updates-cdpse-and-crisc-exams-to-reflect-latest-risk-and-privacy-priorities",
        },
        { label: "ISACA: Exam candidate guides", url: "https://www.isaca.org/credentialing/exam-candidate-guides" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ISACA CRISC Practice Exams",
      description:
        "CRISC practice exams for the November 2025 ISACA outline: governance, risk assessment, risk response and reporting, technology and security.",
    },
  },
  "sc-100": {
    description:
      "English and German practice exams for Microsoft SC-100 (Cybersecurity Architect), covering best practices, security operations, identity, compliance, infrastructure, apps and data. The English exam had minor updates on 21 October 2026; German follows about eight weeks later.",
    fullName: "Microsoft Certified: Cybersecurity Architect Expert",
    // Verified 2026-11-04 against the Microsoft Learn SC-100 study guide, SC-100 exam page and Cybersecurity Architect Expert certification page.
    // Status: exam page shows "Retirement date: none" and no successor. English version updated 21 Oct 2026 (change log: minor changes to "Design solutions for security operations" and "Evaluate solutions for securing Microsoft 365"); localized versions (incl. German) are updated approximately eight weeks later, so the German exam may still follow the previous skills outline until about mid-December 2026.
    // Not published on the SC-100 pages, so omitted: question count, duration, format, question types.
    // Note: the study guide gives the passing score; the exam page also states "Passing score: 700".
    exam: {
      officialName: "Exam SC-100: Microsoft Cybersecurity Architect",
      examCode: "SC-100",
      examVersion: "Skills measured as of 21 October 2026",
      passingScore: "700 or greater (scaled score)",
      languages: ["English", "Japanese", "Chinese (Simplified)", "Korean", "German", "French", "Spanish", "Portuguese (Brazil)", "Chinese (Traditional)", "Italian"],
      delivery: "Scheduled through Pearson VUE",
      prerequisites: "To earn Cybersecurity Architect Expert you must also hold at least one of: Microsoft Certified: Identity and Access Administrator Associate, Security Operations Analyst Associate, or Cloud and AI Security Engineer Associate. Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/cybersecurity-architect-expert/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-100/",
      domains: [
        {
          id: "d1",
          name: "Design solutions that align with security best practices and priorities",
          weight: "20–25%",
          objectives: [
            "Design a resiliency strategy for ransomware and other attacks based on Microsoft Security Best Practices",
            "Design solutions that align with the Microsoft Cybersecurity Reference Architectures (MCRA) and Microsoft Cloud Security Benchmark (MCSB)",
            "Design solutions that align with the Microsoft Cloud Adoption Framework for Azure (CAF) and the Azure Well-Architected Framework",
          ],
        },
        {
          id: "d2",
          name: "Design security operations, identity, and compliance capabilities",
          weight: "25–30%",
          objectives: [
            "Design solutions for security operations",
            "Design solutions for identity and access management",
            "Design solutions for securing privileged access",
            "Design solutions for regulatory compliance",
          ],
        },
        {
          id: "d3",
          name: "Design security solutions for infrastructure",
          weight: "25–30%",
          objectives: [
            "Design solutions for security posture management in hybrid and multicloud environments",
            "Specify requirements for securing server and client endpoints",
            "Specify requirements for securing SaaS, PaaS, and IaaS services",
            "Evaluate solutions for network security and Security Service Edge (SSE)",
          ],
        },
        {
          id: "d4",
          name: "Design security solutions for applications and data",
          weight: "20–25%",
          objectives: [
            "Evaluate solutions for securing Microsoft 365",
            "Design solutions for securing applications",
            "Design solutions for securing an organization's data",
          ],
        },
      ],
      sources: [
        { label: "Microsoft Learn: SC-100 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-100" },
        { label: "Microsoft Learn: Exam SC-100", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-100/" },
        { label: "Microsoft Learn: Cybersecurity Architect Expert certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/cybersecurity-architect-expert/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "SC-100 Practice Exams: Cybersecurity Architect",
      description: "SC-100 practice exams in English and German: security best practices, SecOps, identity, compliance, infrastructure, apps and data by domain.",
    },
  },
  "sc-401": {
    description:
      "Practice exams for Microsoft SC-401: Administering Information Security in Microsoft 365, covering Purview labels, DLP, retention, insider risk and AI data protection. Microsoft made a minor update to the sensitivity label objectives on 28 October 2026.",
    fullName: "Microsoft Certified: Information Security Administrator Associate",
    // Verified 2026-11-04 against the Microsoft Learn SC-401 study guide, SC-401 exam page and Information Security Administrator Associate certification page.
    // Status: no retirement or replacement notice on the official pages. English version updated 28 Oct 2026 (change log: minor change to "Implement and manage sensitivity labels in Purview").
    // Note: the course title says "ex SC-400"; the official SC-401 pages fetched do not mention SC-400, so the predecessor is not stated here.
    // Not published on the SC-401 pages, so omitted: question count, format, question types. Passing score is from the study guide (the exam page does not state it).
    exam: {
      officialName: "Exam SC-401: Administering Information Security in Microsoft 365",
      examCode: "SC-401",
      examVersion: "Skills measured as of 28 October 2026",
      duration: "100 minutes",
      passingScore: "700 or greater (scaled score)",
      languages: ["English", "Portuguese (Brazil)", "French", "German", "Japanese", "Chinese (Simplified)", "Spanish"],
      delivery: "Proctored exam scheduled through Pearson VUE; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects familiarity with all Microsoft 365 services, PowerShell, Microsoft Entra, the Microsoft Defender portal and Microsoft Defender for Cloud Apps. Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/information-security-administrator/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-401/",
      domains: [
        {
          id: "d1",
          name: "Implement information protection",
          weight: "30–35%",
          objectives: [
            "Implement and manage data classification",
            "Implement and manage sensitivity labels in Microsoft Purview",
            "Implement information protection for Windows, file shares, and Exchange",
          ],
        },
        {
          id: "d2",
          name: "Implement data loss prevention and retention",
          weight: "30–35%",
          objectives: [
            "Create and configure data loss prevention policies",
            "Implement and monitor Microsoft Purview Endpoint DLP",
            "Implement and manage retention",
          ],
        },
        {
          id: "d3",
          name: "Manage risks, alerts, and activities",
          weight: "30–35%",
          objectives: [
            "Implement and manage Microsoft Purview Insider Risk Management",
            "Manage information security alerts and activities",
            "Protect data used by AI services",
          ],
        },
      ],
      sources: [
        { label: "Microsoft Learn: SC-401 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-401" },
        { label: "Microsoft Learn: Exam SC-401", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-401/" },
        { label: "Microsoft Learn: Information Security Administrator Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/information-security-administrator/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "SC-401 Practice Exams: Information Security Admin",
      description: "SC-401 practice exams covering Purview sensitivity labels, DLP, retention, insider risk, alerts and AI data protection in Microsoft 365.",
    },
  },
  "az-700": {
    description:
      "Practice exams for Microsoft AZ-700: Azure Networking Solutions, written to the skills measured as of 27 July 2026 (core networking, hybrid connectivity, application delivery, private access and network security).",
    fullName: "Microsoft Certified: Azure Network Engineer Associate",
    // Verified 2026-11-04 against the Microsoft Learn AZ-700 study guide, AZ-700 exam page and Azure Network Engineer Associate certification page.
    // Status: no retirement or replacement notice on the official pages. English version updated 27 Jul 2026 (change log: minor changes to IP addressing, Monitor networks, and network security groups).
    // Not published on the AZ-700 pages, so omitted: question count, format, question types. Passing score is from the study guide (exam and certification pages do not state it).
    exam: {
      officialName: "Exam AZ-700: Designing and Implementing Microsoft Azure Networking Solutions",
      examCode: "AZ-700",
      examVersion: "Skills measured as of 27 July 2026",
      duration: "100 minutes",
      passingScore: "700 or greater (scaled score)",
      languages: ["English", "German", "Spanish", "French", "Italian", "Japanese", "Korean", "Portuguese (Brazil)", "Chinese (Simplified)", "Chinese (Traditional)"],
      delivery: "Proctored exam scheduled through Pearson VUE; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects experience creating and managing compute, storage and networking resources in Azure, and an understanding of name resolution, network protocols and network address management. Renewal every 12 months via a free online assessment on Microsoft Learn.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-network-engineer-associate/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-700/",
      domains: [
        {
          id: "d1",
          name: "Design and implement core networking infrastructure",
          weight: "25–30%",
          objectives: [
            "Design and implement IP addressing for Azure resources",
            "Design and implement name resolution",
            "Design and implement VNet connectivity and routing",
            "Monitor networks",
          ],
        },
        {
          id: "d2",
          name: "Design, implement, and manage connectivity services",
          weight: "20–25%",
          objectives: [
            "Design, implement, and manage a site-to-site VPN connection",
            "Design, implement, and manage a point-to-site VPN connection",
            "Design, implement, and manage Azure ExpressRoute",
            "Design and implement an Azure Virtual WAN architecture",
          ],
        },
        {
          id: "d3",
          name: "Design and implement application delivery services",
          weight: "15–20%",
          objectives: [
            "Design and implement Azure Load Balancer and Azure Traffic Manager",
            "Design and implement Azure Application Gateway",
            "Design and implement Azure Front Door",
          ],
        },
        {
          id: "d4",
          name: "Design and implement private access to Azure services",
          weight: "10–15%",
          objectives: [
            "Design and implement Azure Private Link service and Azure private endpoints",
            "Design and implement service endpoints",
          ],
        },
        {
          id: "d5",
          name: "Design and implement Azure network security services",
          weight: "15–20%",
          objectives: [
            "Implement and manage network security groups",
            "Design and implement Azure Firewall and Azure Firewall Manager",
            "Design and implement a Web Application Firewall (WAF) deployment",
          ],
        },
      ],
      sources: [
        { label: "Microsoft Learn: AZ-700 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-700" },
        { label: "Microsoft Learn: Exam AZ-700", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-700/" },
        { label: "Microsoft Learn: Azure Network Engineer Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-network-engineer-associate/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AZ-700 Practice Exams: Azure Network Engineer",
      description: "AZ-700 practice exams for the July 2026 skills outline: VNets, routing, DNS, VPN, ExpressRoute, Virtual WAN, load balancing, Private Link and firewalls.",
    },
  },
  "ab-900": {
    description:
      "German-language practice exams for Microsoft AB-900 (Copilot and Agent Administration Fundamentals): Microsoft 365 basics, Purview, and Copilot and agent admin. The English exam had a minor update on 14 October 2026; German follows about eight weeks later.",
    fullName: "Microsoft 365 Certified: Copilot and Agent Administration Fundamentals",
    // Verified 2026-11-04 against the Microsoft Learn AB-900 study guide, AB-900 exam page and Copilot and Agent Administration Fundamentals certification page.
    // Status: no retirement or replacement notice on the official pages. English version updated 14 Oct 2026 (change log: minor change to "Identify the core security features of Microsoft 365 services"). Localized versions (incl. German) are updated approximately eight weeks after the English version, so the German exam may follow the previous outline until about early December 2026.
    // Not published on the AB-900 pages, so omitted: question count, format, question types, renewal (Fundamentals certifications are not listed as expiring). Passing score is from the study guide (exam and certification pages do not state it).
    // Note: the official pages do not say whether AB-900 replaces MS-900, so no predecessor is stated.
    exam: {
      officialName: "Exam AB-900: Microsoft 365 Copilot and Agent Administration Fundamentals",
      examCode: "AB-900",
      examVersion: "Skills measured as of 14 October 2026",
      duration: "45 minutes",
      passingScore: "700 or greater (scaled score)",
      languages: ["English", "Arabic (Saudi Arabia)", "Japanese", "Chinese (Simplified)", "Chinese (Traditional)", "Korean", "German", "French", "Indonesian (Indonesia)", "Italian", "Portuguese (Brazil)", "Russian", "Spanish"],
      delivery: "Proctored exam scheduled through Pearson VUE, or through Certiport for students and educators; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects familiarity with Microsoft 365 core services, security, identity and access, data protection and governance, Microsoft 365 Copilot and agents, and the admin centers for Exchange Online, SharePoint, Teams, Microsoft Entra and Microsoft Purview.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/copilot-and-agent-administration-fundamentals/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-900/",
      domains: [
        {
          id: "d1",
          name: "Identify the core features and objects of Microsoft 365 services",
          weight: "30–35%",
          objectives: [
            "Identify the core objects of Microsoft 365 services",
            "Understand the Microsoft 365 security principles",
            "Identify the core security features of Microsoft 365 services",
          ],
        },
        {
          id: "d2",
          name: "Understand data protection and governance tasks for Microsoft 365 and Copilot",
          weight: "35–40%",
          objectives: [
            "Understand Microsoft Purview",
            "Understand data security implications of Copilot",
            "Identify data protection and governance risks for Microsoft 365 and Copilot",
            "Identify and monitor oversharing in SharePoint in Microsoft 365",
          ],
        },
        {
          id: "d3",
          name: "Perform basic administrative tasks for Copilot and agents",
          weight: "25–30%",
          objectives: [
            "Understand features and capabilities of Copilot and agents",
            "Perform basic administrative tasks for Copilot",
            "Perform basic administrative tasks for agents",
          ],
        },
      ],
      sources: [
        { label: "Microsoft Learn: AB-900 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900" },
        { label: "Microsoft Learn: Exam AB-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-900/" },
        { label: "Microsoft Learn: Copilot and Agent Administration Fundamentals certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/copilot-and-agent-administration-fundamentals/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AB-900 Practice Exams (German): Copilot Admin",
      description: "German-language AB-900 practice exams: Microsoft 365 core features, Purview data protection, oversharing, and Copilot and agent administration.",
    },
  },
  "github-copilot-gh-300": {
    description:
      "Practice exams for GH-300: GitHub Copilot, written to the skills measured as of 7 August 2026 (responsible AI, IDE and CLI features, data and architecture, prompt engineering, productivity and privacy).",
    fullName: "GitHub Copilot Certification",
    // Verified 2026-11-04 against the Microsoft Learn GH-300 study guide and the GitHub Copilot certification page on Microsoft Learn. The exam page /exams/gh-300/ could not be retrieved (site error).
    // Status: no retirement or replacement notice. English version updated 7 Aug 2026 (change log: minor changes to Copilot in the IDE, features and capabilities, and safeguards). The certification page says GitHub is moving to Microsoft's recertification process.
    // Note: the study guide's "Skills at a glance" list also contains a duplicate item "GitHub Copilot features (25–30%)" with no objectives; it is omitted here (the six domains below have objectives and match the "Skills measured" section).
    // Not published on the official pages, so omitted: question count, format, question types. Passing score is from the study guide (the certification page does not state it).
    exam: {
      officialName: "Exam GH-300: GitHub Copilot",
      examCode: "GH-300",
      examVersion: "Skills measured as of 7 August 2026",
      duration: "100 minutes",
      passingScore: "700 or greater (scaled score)",
      languages: ["English", "Spanish", "Portuguese (Brazil)", "Korean", "Japanese"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. GitHub expects familiarity with GitHub fundamentals and experience with one or more programming languages. GitHub certifications are valid for 2 years.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/",
      domains: [
        {
          id: "d1",
          name: "Use GitHub Copilot responsibly",
          weight: "15–20%",
          objectives: [
            "Understand responsible AI principles",
            "Validate and operate AI tools",
          ],
        },
        {
          id: "d2",
          name: "Use GitHub Copilot features",
          weight: "25–30%",
          objectives: [
            "Use GitHub Copilot in the IDE",
            "Use GitHub Copilot CLI",
            "Use GitHub Copilot features and capabilities",
            "Manage organization-wide settings and policies",
          ],
        },
        {
          id: "d3",
          name: "Understand GitHub Copilot data and architecture",
          weight: "10–15%",
          objectives: [
            "Describe data handling and flow",
            "Understand lifecycle and limitations",
          ],
        },
        {
          id: "d4",
          name: "Apply prompt engineering and context crafting",
          weight: "10–15%",
          objectives: [
            "Craft effective prompts",
            "Engineer prompts for performance",
          ],
        },
        {
          id: "d5",
          name: "Improve developer productivity with GitHub Copilot",
          weight: "10–15%",
          objectives: [
            "Enhance productivity and code quality",
            "Support testing and security",
          ],
        },
        {
          id: "d6",
          name: "Configure privacy, content exclusions, and safeguards",
          weight: "10–15%",
          objectives: [
            "Manage privacy settings and exclusions",
            "Apply safeguards and troubleshoot",
          ],
        },
      ],
      sources: [
        { label: "Microsoft Learn: GH-300 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300" },
        { label: "Microsoft Learn: GitHub Copilot certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "GH-300 Practice Exams: GitHub Copilot Certification",
      description: "GH-300 practice exams for the Aug 2026 skills outline: responsible AI, Copilot in the IDE and CLI, agent mode, prompts, privacy and content exclusions.",
    },
  },
  "aws-dva-c03": {
    description:
      "Practice exams for AWS DVA-C03: Certified Developer - Associate, written to the new exam guide, including AI-assisted development and AI service security. DVA-C03 replaces DVA-C02 on 1 December 2026; the last day to take DVA-C02 is 30 November 2026.",
    fullName: "AWS Certified Developer - Associate",
    // Verified 2026-11-04 against the AWS certification page, the AWS exam guides index, the DVA-C03 exam guide (overview, domain 1-4 pages, DVA-C02 vs DVA-C03 comparison, PDF).
    // Status: exam guides index lists DVA-C02 "being updated", last day to take 30 Nov 2026, and DVA-C03 "registration opens December 1, 2026". Comparison page: DVA-C02 "in use until November 30, 2026", DVA-C03 "in use beginning December 1, 2026".
    // Domain changes vs DVA-C02: D1 32% to 30%, D2 26% unchanged, D3 renamed "Deployment" to "Testing and Deployment" 24% to 22%, D4 18% to 22%; new Task 2.3 on AI service security.
    // Note: exam guide version number/date not stated (revisions page did not render), so examVersion gives only the code. AWS certification page does not list a passing score; 720 is from the exam guide.
    // Note: languages are the certification page list; AWS does not state separately whether every language is available for DVA-C03 from day one.
    exam: {
      officialName: "AWS Certified Developer - Associate",
      examCode: "DVA-C03",
      examVersion: "Exam guide DVA-C03 (replaces DVA-C02)",
      questionCount: "65 questions (50 scored, 15 unscored)",
      duration: "130 minutes",
      format: "Multiple choice and multiple response; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "720 (scaled)",
      questionTypes: "Multiple choice (one correct response and three distractors) and multiple response (two or more correct responses out of five or more options)",
      languages: ["English", "Japanese", "Korean", "Portuguese (Brazil)", "Simplified Chinese", "Spanish (Latin America)"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Recommended: 1 or more years of hands-on experience developing and maintaining applications by using AWS services.",
      status: "upcoming",
      launchDate: "2026-12-01",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-developer-associate/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/developer-associate-03/developer-associate-03.html",
      domains: [
        { id: "d1", name: "Development with AWS Services", weight: "30%", objectives: ["Develop code for applications that are hosted on AWS.", "Develop code for AWS Lambda.", "Use data stores during application development."] },
        { id: "d2", name: "Security", weight: "26%", objectives: ["Implement authentication and authorization mechanisms for applications and AWS services.", "Implement encryption and manage sensitive data by using AWS services.", "Identify and mitigate security risks associated with using and integrating AI services into application development."] },
        { id: "d3", name: "Testing and Deployment", weight: "22%", objectives: ["Prepare application artifacts to be deployed to AWS.", "Implement and automate application testing in AWS environments.", "Deploy code by using AWS continuous integration and continuous delivery (CI/CD) services."] },
        { id: "d4", name: "Troubleshooting and Optimization", weight: "22%", objectives: ["Assist in a root cause analysis.", "Apply logging, monitoring, and observability best practices.", "Optimize applications by using AWS services and features."] },
      ],
      sources: [
        { label: "AWS: Certified Developer - Associate", url: "https://aws.amazon.com/certification/certified-developer-associate/" },
        { label: "AWS: Certification exam guides (DVA-C02 last day, DVA-C03 registration)", url: "https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html" },
        { label: "AWS: DVA-C03 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/developer-associate-03/developer-associate-03.html" },
        { label: "AWS: Comparison of DVA-C02 and DVA-C03", url: "https://docs.aws.amazon.com/aws-certification/latest/developer-associate-03/dva-03-comparison.html" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "DVA-C03 Practice Exams: AWS Developer Associate (2026)",
      description: "DVA-C03 practice exams for AWS Developer - Associate: development, security, testing and deployment, troubleshooting. Replaces DVA-C02 on 1 Dec 2026.",
    },
  },
  "aws-soa-c03": {
    description:
      "Practice exams for AWS SOA-C03: Certified CloudOps Engineer - Associate (formerly SysOps Administrator), written to the official exam guide: monitoring, reliability, deployment and automation, security, and networking. Check your level before the exam.",
    fullName: "AWS Certified CloudOps Engineer - Associate",
    // Verified 2026-11-04 against the AWS certification page, the AWS exam guides index, the SOA-C03 exam guide (overview, domain 1-5 pages, SOA-C02 vs SOA-C03 comparison, revisions v1.2 of 29 Oct 2026).
    // Status: SOA-C03 is current. Comparison page: SOA-C02 "in use until September 29, 2025", SOA-C03 "in use beginning September 30, 2025". Exam guides index has no update note for SOA-C03.
    // Rename: certification page says the SysOps Administrator - Associate name changed to CloudOps Engineer - Associate with the latest exam update; existing SysOps holders stay certified for 3 years from the date earned.
    // IMPORTANT: AWS certification page: the exam "in Simplified Chinese and Korean will be retired after November 19, 2026" (not relevant to the English course). Languages array is the page list, which still includes both until then.
    // Note: AWS certification page does not list a passing score; 720 is from the exam guide.
    exam: {
      officialName: "AWS Certified CloudOps Engineer - Associate",
      examCode: "SOA-C03",
      examVersion: "Exam guide SOA-C03, version 1.2 (29 October 2026)",
      questionCount: "65 questions (50 scored, 15 unscored)",
      duration: "130 minutes",
      format: "Multiple choice and multiple response; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "720 (scaled)",
      questionTypes: "Multiple choice (one correct response and three distractors) and multiple response (two or more correct responses out of five or more options)",
      languages: ["English", "Japanese", "Korean (until 19 November 2026)", "Simplified Chinese (until 19 November 2026)"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Recommended: about 1 year of experience deploying, managing, and operating workloads on AWS, plus at least 1 year in a related operations role.",
      status: "current",
      launchDate: "2025-09-30",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-cloudops-engineer-associate/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/sysops-administrator-associate-03/sysops-administrator-associate-03.html",
      domains: [
        { id: "d1", name: "Monitoring, Logging, Analysis, Remediation, and Performance Optimization", weight: "22%", objectives: ["Implement metrics, alarms, and filters by using AWS monitoring and logging services.", "Identify and remediate issues by using monitoring and availability metrics.", "Implement performance optimization strategies for compute, storage, and database resources."] },
        { id: "d2", name: "Reliability and Business Continuity", weight: "22%", objectives: ["Implement scalability and elasticity.", "Implement highly available and resilient environments.", "Implement backup and restore strategies."] },
        { id: "d3", name: "Deployment, Provisioning, and Automation", weight: "22%", objectives: ["Provision and maintain cloud resources.", "Automate the management of existing resources."] },
        { id: "d4", name: "Security and Compliance", weight: "16%", objectives: ["Implement and manage security and compliance tools and policies.", "Implement strategies to protect data and infrastructure."] },
        { id: "d5", name: "Networking and Content Delivery", weight: "18%", objectives: ["Implement and optimize networking features and connectivity.", "Configure domains, DNS services, and content delivery.", "Troubleshoot network connectivity issues."] },
      ],
      sources: [
        { label: "AWS: Certified CloudOps Engineer - Associate", url: "https://aws.amazon.com/certification/certified-cloudops-engineer-associate/" },
        { label: "AWS: SOA-C03 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/sysops-administrator-associate-03/sysops-administrator-associate-03.html" },
        { label: "AWS: Comparison of SOA-C02 and SOA-C03", url: "https://docs.aws.amazon.com/aws-certification/latest/sysops-administrator-associate-03/sysops-administrator-associate-03-comparison.html" },
        { label: "AWS: SOA-C03 Exam Guide revisions", url: "https://docs.aws.amazon.com/aws-certification/latest/sysops-administrator-associate-03/soa-03-revisions.html" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "SOA-C03 Practice Exams: AWS CloudOps Engineer (2026)",
      description: "SOA-C03 practice exams for AWS CloudOps Engineer - Associate (ex SysOps): monitoring, reliability, automation, security and networking, by domain.",
    },
  },
  "terraform-associate-004": {
    description:
      "Practice exams for HashiCorp Certified: Terraform Associate (004), written to the official exam objectives for Terraform 1.12: IaC concepts, core workflow, configuration, modules, state and HCP Terraform. Check your level before the one-hour exam.",
    fullName: "HashiCorp Certified: Terraform Associate (004)",
    // Verified 2026-11-04 against the HashiCorp Terraform Associate (004) certification page, the HashiCorp certifications overview, and the 004 study and review tutorials on developer.hashicorp.com.
    // Status: 004 is the only version on the official certification page; the 003 review tutorial calls 004 "the new version". 004 adds objectives 4f, 4g, 4h (ephemeral values, write-only arguments) and 8c and tests Terraform 1.12.
    // UNVERIFIED and omitted: launch date of 004 / last day of 003. No official HashiCorp page I could fetch states it; third-party sources (e.g. dev.to) say 004 replaced 003 on 8 January 2026.
    // UNVERIFIED and omitted: question count and passing score (not published on the official pages). Format is "multiple choice" only; no further question-type detail.
    // Objectives below are the official domain headings only; sub-objectives (1a, 1b, ...) are not copied.
    exam: {
      officialName: "HashiCorp Certified: Terraform Associate (004)",
      examCode: "Terraform Associate (004)",
      examVersion: "004 (tests Terraform 1.12, includes HCP Terraform content)",
      duration: "1 hour",
      format: "Multiple choice, online proctored",
      questionTypes: "Multiple choice",
      languages: ["English"],
      delivery: "Online proctored",
      prerequisites: "None required. Recommended: basic terminal skills and an understanding of on-premises and cloud architecture; professional experience recommended, or practice of the objectives in a personal demo environment.",
      status: "current",
      officialCertificationUrl: "https://developer.hashicorp.com/certifications/terraform-associate",
      officialExamUrl: "https://developer.hashicorp.com/certifications/terraform-associate",
      domains: [
        { id: "d1", name: "Infrastructure as Code (IaC) with Terraform" },
        { id: "d2", name: "Terraform fundamentals" },
        { id: "d3", name: "Core Terraform workflow" },
        { id: "d4", name: "Terraform configuration" },
        { id: "d5", name: "Terraform modules" },
        { id: "d6", name: "Terraform state management" },
        { id: "d7", name: "Maintain infrastructure with Terraform" },
        { id: "d8", name: "HCP Terraform" },
      ],
      sources: [
        { label: "HashiCorp: Terraform Associate (004) certification", url: "https://developer.hashicorp.com/certifications/terraform-associate" },
        { label: "HashiCorp: Infrastructure automation certifications", url: "https://developer.hashicorp.com/certifications/infrastructure-automation" },
        { label: "HashiCorp: Terraform Associate (004) study guide", url: "https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-study-004" },
        { label: "HashiCorp: Terraform Associate 004 exam content list", url: "https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-review-004" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "Terraform Associate 004 Practice Exams (2026)",
      description: "Terraform Associate (004) practice exams for Terraform 1.12: IaC, core workflow, configuration, modules, state management and HCP Terraform.",
    },
  },
  "comptia-security-plus-sy0-801": {
    description:
      "Practice exams for CompTIA Security+ SY0-801 (V8), written to the official V8 exam objectives, including AI-related threats. V8 launches on or around 17 November 2026 in English; SY0-701 stays available until 11 June 2027 in English.",
    fullName: "CompTIA Security+ (SY0-801)",
    // Verified 2026-11-04 against the CompTIA Security+ V8 page, the Security+ certification page, the SY0-801 exam objectives PDF (document version 2.0) and the Security+ V7 page.
    // Status: V8 page gives launch "November 17, 2026" and "on or around November 17, 2026"; certification page says V8 is "expected to launch on or around November 17, 2026". V8 retirement "estimated 3 years after launch".
    // Predecessor: V7 page states SY0-701 retirement English: 11 June 2027; Japanese, Portuguese, Spanish and Thai: 13 August 2027.
    // Note: V8 page lists English only and gives no date for other languages. Delivery method and price not stated on the V8 page, omitted.
    // Domain names changed vs V7: domain 2 is now "Threats, Vulnerabilities, and Attacks"; new objective 2.6 on AI usage.
    exam: {
      officialName: "CompTIA Security+",
      examCode: "SY0-801",
      examVersion: "Security+ V8 (exam objectives document version 2.0)",
      questionCount: "Maximum of 90",
      duration: "90 minutes",
      format: "Multiple-choice and performance-based questions",
      passingScore: "750 (on a scale of 100 to 900)",
      questionTypes: "Multiple-choice and performance-based",
      languages: ["English"],
      prerequisites: "None required. Recommended experience: security administrator with two years of hands-on experience.",
      status: "upcoming",
      launchDate: "2026-11-17",
      officialCertificationUrl: "https://www.comptia.org/en-us/certifications/security/",
      officialExamUrl: "https://www.comptia.org/en-us/certifications/security/v8/",
      domains: [
        { id: "d1", name: "General Security Concepts", weight: "16%", objectives: ["1.1 Explain security concepts and controls.", "1.2 Given a scenario, demonstrate the impact of change management processes on security.", "1.3 Explain the importance of using appropriate cryptographic solutions."] },
        { id: "d2", name: "Threats, Vulnerabilities, and Attacks", weight: "24%", objectives: ["2.1 Explain characteristics of threats and vulnerabilities.", "2.2 Describe common threat actors and motivations.", "2.3 Describe threat vectors and sources.", "2.4 Explain types of vulnerabilities and attack surfaces.", "2.5 Given a scenario, analyze indicators of malicious activity.", "2.6 Summarize threats and vulnerabilities associated with artificial intelligence (AI) usage."] },
        { id: "d3", name: "Security Architecture", weight: "19%", objectives: ["3.1 Compare and contrast security implications of different architecture models.", "3.2 Given a scenario, manage the security architecture to best protect the infrastructure.", "3.3 Summarize concepts and strategies used to protect data.", "3.4 Explain the importance of resilience and recovery in security architecture."] },
        { id: "d4", name: "Security Operations", weight: "27%", objectives: ["4.1 Given a scenario, apply mitigating controls, techniques, and solutions to secure the environment.", "4.2 Explain the security implications of proper hardware, software, and data asset management.", "4.3 Given a scenario, perform tasks associated with vulnerability management.", "4.4 Explain security alerting and monitoring concepts and tools.", "4.5 Given a scenario, apply concepts related to identity and access management.", "4.6 Given a scenario, apply automation and orchestration solutions to secure operations.", "4.7 Summarize concepts associated with incident response activities.", "4.8 Given a scenario, use data, artifacts and sources to support a security investigation."] },
        { id: "d5", name: "Security Program Management and Oversight", weight: "14%", objectives: ["5.1 Explain the importance of governance, risk, and compliance artifacts.", "5.2 Explain the impact of risk management processes on the security of the organization.", "5.3 Explain the assessment and management processes associated with third-party risk.", "5.4 Summarize elements of effective security compliance.", "5.5 Explain concepts associated with audit and assessment activities.", "5.6 Given a scenario, apply security awareness concepts to improve organizational security."] },
      ],
      sources: [
        { label: "CompTIA: Security+ V8 (SY0-801) exam details", url: "https://www.comptia.org/en-us/certifications/security/v8/" },
        { label: "CompTIA: Security+ SY0-801 V8 Exam Objectives (PDF)", url: "https://lecbyo.files.cmp.optimizely.com/download/77f3bd3223ac11f180820e495f189928" },
        { label: "CompTIA: Security+ certification", url: "https://www.comptia.org/en-us/certifications/security/" },
        { label: "CompTIA: Security+ V7 (SY0-701) retirement dates", url: "https://www.comptia.org/en-us/certifications/security/v7/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CompTIA Security+ SY0-801 (V8) Practice Exams",
      description: "CompTIA Security+ SY0-801 (V8) practice exams, launch on or around 17 Nov 2026: security concepts, threats incl. AI, architecture, operations, governance.",
    },
  },
  "ckad": {
    description:
      "Practice tests for the Certified Kubernetes Application Developer (CKAD) from The Linux Foundation and CNCF, written to the Kubernetes v1.37 curriculum. Question-based tests on all five domains to find your gaps before the 2-hour performance-based exam.",
    fullName: "Certified Kubernetes Application Developer",
    // Verified 2026-11-04 against training.linuxfoundation.org CKAD page, docs.linuxfoundation.org CKA/CKAD tips page and CKA/CKAD/CKS FAQ, and github.com/cncf/curriculum (CKAD_Curriculum_v1.37.pdf). Objective wording from the CNCF PDF.
    // Not published as a fixed number, so omitted: question count (the tips page says the exams consist of 15 to 20 performance-based tasks).
    // CONFLICT on the LF CKAD page: the "CKAD includes" list says "Two exam attempts" while the "Includes" section says "One Retake". The FAQ says a retake is offered "when eligible". Not put in a field.
    // Other official facts (no schema field): Killer.sh simulator, 2 attempts with 36 hours each; 12 months to schedule; certification valid 2 years; exam environment moves to the latest Kubernetes minor roughly 4 to 8 weeks after each release.
    // Objective "Understand API depreciations" is spelled that way in the CNCF PDF (sic); written here as "deprecations".
    exam: {
      officialName: "Certified Kubernetes Application Developer (CKAD)",
      examCode: "CKAD",
      examVersion: "Kubernetes v1.37 (CKAD curriculum v1.37)",
      duration: "2 hours",
      format: "Online, proctored, performance-based exam solved from a command line running Kubernetes",
      passingScore: "66%",
      questionTypes: "Performance-based tasks completed on the command line (15 to 20 tasks)",
      languages: ["English", "Simplified Chinese", "Japanese"],
      delivery: "Online, remotely proctored (PSI Bridge platform with the PSI Secure Browser)",
      prerequisites: "None",
      status: "current",
      officialCertificationUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
      officialExamUrl: "https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad",
      domains: [
        {
          id: "d1",
          name: "Application Design and Build",
          weight: "20%",
          objectives: [
            "Define, build and modify container images",
            "Choose and use the right workload resource (Deployment, DaemonSet, CronJob, etc.)",
            "Understand multi-container Pod design patterns (e.g. sidecar, init and others)",
            "Utilize persistent and ephemeral volumes",
          ],
        },
        {
          id: "d2",
          name: "Application Deployment",
          weight: "20%",
          objectives: [
            "Use Kubernetes primitives to implement common deployment strategies (e.g. blue/green or canary)",
            "Understand Deployments and how to perform rolling updates",
            "Use the Helm package manager to deploy existing packages",
            "Kustomize",
          ],
        },
        {
          id: "d3",
          name: "Application Observability and Maintenance",
          weight: "15%",
          objectives: [
            "Understand API deprecations",
            "Implement probes and health checks",
            "Use built-in CLI tools to monitor Kubernetes applications",
            "Utilize container logs",
            "Debugging in Kubernetes",
          ],
        },
        {
          id: "d4",
          name: "Application Environment, Configuration and Security",
          weight: "25%",
          objectives: [
            "Discover and use resources that extend Kubernetes (CRD, Operators)",
            "Understand authentication, authorization and admission control",
            "Understand requests, limits, quotas",
            "Define resource requirements",
            "Understand ConfigMaps",
            "Create and consume Secrets",
            "Understand ServiceAccounts",
            "Understand Application Security (SecurityContexts, Capabilities, etc.)",
          ],
        },
        {
          id: "d5",
          name: "Services and Networking",
          weight: "20%",
          objectives: [
            "Demonstrate basic understanding of NetworkPolicies",
            "Provide and troubleshoot access to applications via services",
            "Use Ingress rules to expose applications",
          ],
        },
      ],
      sources: [
        { label: "Linux Foundation Training: CKAD certification page", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/" },
        { label: "Linux Foundation docs: CKA and CKAD exam tips and instructions", url: "https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad" },
        { label: "Linux Foundation docs: CKA, CKAD and CKS FAQ", url: "https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks" },
        { label: "CNCF curriculum: CKAD curriculum v1.37", url: "https://github.com/cncf/curriculum" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CKAD Practice Tests: Kubernetes App Developer",
      description: "CKAD practice tests for Kubernetes v1.37: application design and build, deployment, observability, configuration and security, services and networking.",
    },
  },
  "cks": {
    description:
      "Practice tests for the Certified Kubernetes Security Specialist (CKS) from The Linux Foundation and CNCF, covering all six domains from cluster setup and hardening to supply chain and runtime security. Find gaps before the 2-hour performance-based exam.",
    fullName: "Certified Kubernetes Security Specialist",
    // Verified 2026-11-04 against training.linuxfoundation.org CKS page, docs.linuxfoundation.org CKS important instructions page and CKA/CKAD/CKS FAQ, and github.com/cncf/curriculum ("CKS_Curriculum v1.37.pdf"). Objective wording from the CNCF PDF.
    // CONFLICT on Kubernetes version: the LF CKS page and the CNCF curriculum file say v1.37; the CKS instructions page ("currently running Kubernetes v1.35") and the FAQ say the exam environment runs v1.35. examVersion states both; the description avoids naming a version.
    // Not published as a fixed number, so omitted: question count (the instructions page says 15 to 20 performance-based tasks).
    // Prerequisite: LF page and FAQ say candidates must have taken and passed the CKA exam; neither page says whether the CKA must still be active, so that is not claimed.
    // Other official facts (no schema field): one retake included (LF page); Killer.sh simulator, 2 attempts with 36 hours each; 12 months to schedule; certification valid 2 years.
    exam: {
      officialName: "Certified Kubernetes Security Specialist (CKS)",
      examCode: "CKS",
      examVersion: "CKS curriculum v1.37 (LF docs state the exam environment currently runs Kubernetes v1.35)",
      duration: "2 hours",
      format: "Online, proctored, performance-based exam solved from a command line running Kubernetes",
      passingScore: "67%",
      questionTypes: "Performance-based tasks completed on the command line (15 to 20 tasks)",
      languages: ["English", "Simplified Chinese", "Japanese"],
      delivery: "Online, remotely proctored (PSI Bridge platform with the PSI Secure Browser)",
      prerequisites: "Candidates must have taken and passed the Certified Kubernetes Administrator (CKA) exam before attempting the CKS exam.",
      status: "current",
      officialCertificationUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/",
      officialExamUrl: "https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-cks",
      domains: [
        {
          id: "d1",
          name: "Cluster Setup",
          weight: "15%",
          objectives: [
            "Use network security policies to restrict cluster level access",
            "Use CIS benchmark to review the security configuration of Kubernetes components (etcd, kubelet, kubedns, kubeapi)",
            "Properly set up Ingress objects with TLS",
            "Protect node metadata and endpoints",
            "Verify platform binaries before deploying",
          ],
        },
        {
          id: "d2",
          name: "Cluster Hardening",
          weight: "15%",
          objectives: [
            "Use Role Based Access Controls to minimize exposure",
            "Exercise caution in using service accounts e.g. disable defaults, minimize permissions on newly created ones",
            "Restrict access to Kubernetes API",
            "Upgrade Kubernetes to avoid vulnerabilities",
          ],
        },
        {
          id: "d3",
          name: "System Hardening",
          weight: "10%",
          objectives: [
            "Minimize host OS footprint (reduce attack surface)",
            "Using least-privilege identity and access management",
            "Minimize external access to the network",
            "Appropriately use kernel hardening tools such as AppArmor, seccomp",
          ],
        },
        {
          id: "d4",
          name: "Minimize Microservice Vulnerabilities",
          weight: "20%",
          objectives: [
            "Use appropriate pod security standards",
            "Manage Kubernetes secrets",
            "Understand and implement isolation techniques (multi-tenancy, sandboxed containers, etc.)",
            "Implement Pod-to-Pod encryption (Cilium, Istio)",
          ],
        },
        {
          id: "d5",
          name: "Supply Chain Security",
          weight: "20%",
          objectives: [
            "Minimize base image footprint",
            "Understand your supply chain (e.g. SBOM, CI/CD, artifact repositories)",
            "Secure your supply chain (permitted registries, sign and validate artifacts, etc.)",
            "Perform static analysis of user workloads and container images (e.g. Kubesec, KubeLinter)",
          ],
        },
        {
          id: "d6",
          name: "Monitoring, Logging and Runtime Security",
          weight: "20%",
          objectives: [
            "Perform behavioral analytics to detect malicious activities",
            "Detect threats within physical infrastructure, apps, networks, data, users and workloads",
            "Investigate and identify phases of attack and bad actors within the environment",
            "Ensure immutability of containers at runtime",
            "Use Kubernetes audit logs to monitor access",
          ],
        },
      ],
      sources: [
        { label: "Linux Foundation Training: CKS certification page", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/" },
        { label: "Linux Foundation docs: CKS important instructions", url: "https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-cks" },
        { label: "Linux Foundation docs: CKA, CKAD and CKS FAQ", url: "https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks" },
        { label: "CNCF curriculum: CKS curriculum v1.37", url: "https://github.com/cncf/curriculum" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CKS Practice Tests: Kubernetes Security Specialist",
      description: "CKS practice tests for all six domains: cluster setup and hardening, system hardening, microservice vulnerabilities, supply chain and runtime security.",
    },
  },
  "istqb-ctfl-4": {
    description:
      "German- and Portuguese-language practice exams for the ISTQB Certified Tester Foundation Level (CTFL) v4.0, written to syllabus v4.0.1. Practise all six chapters, from testing fundamentals to test techniques and management, before the 40-question, 60-minute exam.",
    fullName: "ISTQB Certified Tester Foundation Level",
    // Verified 2026-11-04 against istqb.org: CTFL v4.0 certification page (exam structure), CTFL Syllabus v4.0.1 (revision history: released 15.09.2024) and Exam Structure and Rules Tables v1.20 (dated 25 Oct 2026).
    // Chapter question counts and K-levels from the Exam Structure and Rules Tables v1.20; objectives are the syllabus section headings.
    // Not stated on the official pages read, so omitted: exam languages, delivery details (the page only links to "Find exam provider"), certificate validity, and any entry requirement. No newer CTFL version or v4.0 retirement was announced on the pages read.
    exam: {
      officialName: "ISTQB Certified Tester Foundation Level (CTFL) v4.0",
      examCode: "CTFL",
      examVersion: "Syllabus v4.0.1 (released 15 September 2024)",
      questionCount: "40",
      duration: "60 minutes (plus 25% if the exam is not in your native language)",
      format: "40 multiple-choice questions, 1 point each (40 points in total)",
      passingScore: "26 of 40 points (65%)",
      questionTypes: "Multiple choice; 8 K1, 24 K2 and 8 K3 questions",
      status: "current",
      officialCertificationUrl: "https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/",
      domains: [
        {
          id: "d1",
          name: "Fundamentals of Testing",
          weight: "8 questions",
          objectives: [
            "1.1 What is Testing?",
            "1.2 Why is Testing Necessary?",
            "1.3 Testing Principles",
            "1.4 Test Activities, Testware and Test Roles",
            "1.5 Essential Skills and Good Practices in Testing",
          ],
        },
        {
          id: "d2",
          name: "Testing Throughout the Software Development Lifecycle",
          weight: "6 questions",
          objectives: [
            "2.1 Testing in the Context of a Software Development Lifecycle (SDLC)",
            "2.2 Test Levels and Test Types",
            "2.3 Maintenance Testing",
          ],
        },
        {
          id: "d3",
          name: "Static Testing",
          weight: "4 questions",
          objectives: [
            "3.1 Static Testing Basics",
            "3.2 Feedback and Review Process",
          ],
        },
        {
          id: "d4",
          name: "Test Analysis and Design",
          weight: "11 questions",
          objectives: [
            "4.1 Test Techniques Overview",
            "4.2 Black-Box Test Techniques",
            "4.3 White-Box Test Techniques",
            "4.4 Experience-based Test Techniques",
            "4.5 Collaboration-based Test Approaches",
          ],
        },
        {
          id: "d5",
          name: "Managing the Test Activities",
          weight: "9 questions",
          objectives: [
            "5.1 Test Planning",
            "5.2 Risk Management",
            "5.3 Test Monitoring, Test Control and Test Completion",
            "5.4 Configuration Management",
            "5.5 Defect Management",
          ],
        },
        {
          id: "d6",
          name: "Test Tools",
          weight: "2 questions",
          objectives: [
            "6.1 Tool Support for Testing",
            "6.2 Benefits and Risks of Test Automation",
          ],
        },
      ],
      sources: [
        { label: "ISTQB: Certified Tester Foundation Level (CTFL) v4.0", url: "https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" },
        { label: "ISTQB: CTFL Syllabus v4.0.1", url: "https://istqb.org/?sdm_process_download=1&download_id=3345" },
        { label: "ISTQB: Exam Structure and Rules Tables v1.20", url: "https://istqb.org/?sdm_process_download=1&download_id=3832" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ISTQB CTFL 4.0 Practice Exams (German, Portuguese)",
      description: "ISTQB CTFL v4.0 practice exams in German and Portuguese for syllabus v4.0.1: all six chapters, matching the 40-question, 60-minute exam format.",
    },
  },
  "togaf-10-foundation-ogea-101": {
    description:
      "Practice exams for the TOGAF Enterprise Architecture Part 1 exam (OGEA-101) from The Open Group, based on the TOGAF Standard, 10th Edition. Practise concepts, the ADM, ADM techniques, governance and architecture content before the 40-question exam.",
    fullName: "TOGAF Enterprise Architecture Foundation (OGEA-101)",
    // Verified 2026-11-04 against certification.opengroup.org: TOGAF Enterprise Architecture Part 1 Exam page (node/712), TOGAF Examinations page (node/14), and The Open Group help article on the OGEA-101 exam plan.
    // Domains are the exam plan sections; "weight" gives the official number of questions per section (8 + 14 + 6 + 4 + 3 + 5 = 40). No objectives listed under each section on the pages read, so none given.
    // Languages: the exam page lists OGEA-101 as English; the Examinations page lists other language versions of Part 1 under separate codes, OGEA-F101 (French) and OGEA-C101 (Simplified Chinese). Only English is put in the field because it is the OGEA-101 code itself.
    // Other official facts (no schema field): passing Part 1 gives TOGAF Enterprise Architecture Foundation and partial credit toward TOGAF Enterprise Architecture Practitioner; extra time may be given to non-native English speakers.
    // No withdrawal or new version announced on the pages read.
    exam: {
      officialName: "TOGAF Enterprise Architecture Part 1 Exam",
      examCode: "OGEA-101",
      examVersion: "TOGAF Standard, 10th Edition",
      questionCount: "40",
      duration: "60 minutes (additional time may be provided for non-native English speakers)",
      format: "Multiple choice, supervised, closed book",
      passingScore: "60% (24 of 40 questions)",
      languages: ["English"],
      delivery: "Authorized examination provider test centers and OnVUE online proctoring",
      prerequisites: "None",
      status: "current",
      officialCertificationUrl: "https://certification.opengroup.org/node/14",
      officialExamUrl: "https://certification.opengroup.org/node/712",
      domains: [
        { id: "d1", name: "Concepts", weight: "8 questions" },
        { id: "d2", name: "Introduction to the ADM", weight: "14 questions" },
        { id: "d3", name: "Introduction to the ADM Techniques", weight: "6 questions" },
        { id: "d4", name: "Introduction to Applying the ADM", weight: "4 questions" },
        { id: "d5", name: "Introduction to Architecture Governance", weight: "3 questions" },
        { id: "d6", name: "Architecture Content", weight: "5 questions" },
      ],
      sources: [
        { label: "The Open Group: TOGAF Enterprise Architecture Part 1 Exam", url: "https://certification.opengroup.org/node/712" },
        { label: "The Open Group: TOGAF Examinations", url: "https://certification.opengroup.org/node/14" },
        { label: "The Open Group help: OGEA-101 exam plan", url: "https://help.opengroup.org/hc/en-us/articles/32158230604050-What-Is-the-Exam-Plan-for-the-OGEA-101-TOGAF-Enterprise-Architecture-Part-1-Exam" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "OGEA-101 Practice Exams: TOGAF 10 Foundation",
      description: "OGEA-101 practice exams for TOGAF Enterprise Architecture Part 1 (TOGAF Standard, 10th Edition): concepts, the ADM, techniques, governance and content.",
    },
  },
  "itsm-foundation-v4": {
    description:
      "French-, Spanish- and Portuguese-language practice exams for the version 4 IT service management Foundation exam from PeopleCert. PeopleCert currently plans to sunset all version 4 modules on 31 December 2027, with the version 5 Foundation now available alongside it.",
    fullName: "IT Service Management Foundation (Version 4)",
    // Verified 2026-11-04 against peoplecert.org: Foundation (Version 4) product page and the certification FAQ page.
    // Status: the PeopleCert FAQ says "The current plan is to sunset all ITIL 4 modules on 31 December 2027"; no separate date is given for Foundation and voucher validity dates are still to be announced. ITIL 4 and ITIL (Version 5) run in parallel for a period. Hence status "retiring".
    // Domains are the learning outcomes listed on the PeopleCert product page (wording as published, e.g. "Continuous improvement"). PeopleCert does not publish weights there, so none given.
    // Not stated on the pages read, so omitted: exam code, delivery mode (the page shows proctored time-slot booking and a "Web Based Exam Driver" link, but does not say online or test centre), and any language withdrawal.
    // Naming: PeopleCert trademark rule (README): no framework mark in names, headings, meta or copy.
    // Other official facts (no schema field): certification renewal every 3 years (60 CPD points or another course in the same product suite); ITIL 4 holders can renew by passing any ITIL (Version 5) certification; optional Foundation Bridge (Version 5) for ITIL 4 Foundation holders, scheduled to retire 31 December 2027.
    exam: {
      officialName: "IT Service Management Foundation (Version 4)",
      questionCount: "40",
      duration: "60 minutes",
      format: "Multiple choice, closed book",
      passingScore: "65%",
      languages: ["English", "Chinese", "Dutch", "French", "German", "Hungarian", "Italian", "Japanese", "Polish", "Portuguese (Brazil)", "Spanish", "Thai"],
      prerequisites: "None stated",
      status: "retiring",
      retirementDate: "31 December 2027 (current PeopleCert plan to sunset all version 4 modules)",
      officialCertificationUrl: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565",
      domains: [
        { id: "d1", name: "Service management concepts" },
        { id: "d2", name: "Service value system" },
        { id: "d3", name: "Four dimensions of service management" },
        { id: "d4", name: "Guiding principles" },
        { id: "d5", name: "Service Value Chain" },
        { id: "d6", name: "Management practices" },
        { id: "d7", name: "Continuous improvement" },
        { id: "d8", name: "Service Level Agreements" },
        { id: "d9", name: "Key metrics and performance indicators" },
      ],
      sources: [
        { label: "PeopleCert: Foundation (Version 4) exam page", url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565" },
        { label: "PeopleCert: certification FAQ", url: "https://www.peoplecert.org/help-and-support/faq-itil" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ITSM Foundation V4 Practice Exams (FR, ES, PT)",
      description: "Version 4 IT service management Foundation practice exams in French, Spanish and Portuguese for the 40-question, 60-minute exam. Sunset planned 31 Dec 2027.",
    },
  },

  /* ── November 2026, batch 3: enriched and indexable ─────────────────────────
   * Facts from official sources only, drafted and then checked independently on 4 Nov 2026.
   * Kept noindex (official pages unreachable, too thin): databricks-data-engineer-professional, databricks-generative-ai-engineer-associate, mongodb-associate-dba, salesforce-plat-arch-202, servicenow-csa. */
  "ab-400": {
    description:
      "Practice exams for Microsoft AB-400: Extending Microsoft Power Platform Solutions with Code and AI, which replaced PL-400 in October 2026. Covers ALM, client scripting, PCF and code apps, plug-ins, APIs, Azure Functions, Foundry agents and connectors.",
    fullName: "Microsoft Certified: Power Platform Developer Associate",
    // Verified 2026-11-04 against Microsoft Learn (AB-400 study guide, AB-400 exam page, Power Platform Developer Associate certification page, retired certification exams list).
    // Certification page: "PL-400 is transitioning to AB-400"; PL-400 registration closed 16 Oct 2026, PL-400 could be taken through 30 Oct 2026 (retired-exams list: PL-400 retired 30 Oct 2026).
    // The study guide shows no "skills measured as of" date and no change log (page last updated 30 Oct 2026), so no examVersion is given.
    // Not published on the pages fetched, so omitted: duration, question count, question types.
    exam: {
      officialName: "Exam AB-400: Extending Microsoft Power Platform Solutions with Code and AI",
      examCode: "AB-400",
      passingScore: "700 or greater",
      languages: ["English"],
      prerequisites: "No formal prerequisites. Microsoft expects development experience with Power Platform, JavaScript, JSON, TypeScript, Power Fx, C#, Python, HTML, YAML, RESTful Web APIs, Azure, Microsoft Foundry and Copilot Studio. Renewal via a free online assessment on Microsoft Learn.",
      status: "current",
      launchDate: "16 October 2026 (updated AB-400 exam available)",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-developer-associate/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-400/",
      domains: [
        { id: "d1", name: "Build Microsoft Power Platform solutions", weight: "15–20%", objectives: ["Design the technical architecture", "Design solution components", "Implement application lifecycle management (ALM)"] },
        { id: "d2", name: "Extend the user experience", weight: "25–30%", objectives: ["Apply business logic in model-driven apps by using client scripting", "Create PCF code components", "Build Power Apps code apps", "Deploy and manage Power Apps code apps"] },
        { id: "d3", name: "Extend Microsoft Power Platform", weight: "35–40%", objectives: ["Create a Dataverse plug-in", "Perform operations by using platform APIs", "Process workloads by using Microsoft Azure Functions", "Configure Power Automate cloud flows and Copilot Studio workflows", "Build Microsoft Foundry agents by using code that integrates with the Microsoft Power Platform"] },
        { id: "d4", name: "Develop integrations", weight: "10–15%", objectives: ["Publish and consume Dataverse events", "Implement synchronization for Dataverse data", "Create custom connectors"] },
      ],
      sources: [
        { label: "Microsoft Learn: AB-400 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-400" },
        { label: "Microsoft Learn: Exam AB-400", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-400/" },
        { label: "Microsoft Learn: Power Platform Developer Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-developer-associate/" },
        { label: "Microsoft Learn: Retired certification exams (PL-400: 30 October 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AB-400 Practice Exams: Power Platform Developer",
      description: "AB-400 practice exams, the successor to PL-400: ALM, client scripting, PCF and code apps, plug-ins, APIs, Azure Functions, Foundry agents, connectors.",
    },
  },
  "ab-650": {
    description:
      "Practice exams for Microsoft AB-650: Administering Microsoft 365 and AI Services, currently in beta. Covers tenants and workloads, Entra identity and access, Defender and Purview, and managing Microsoft 365 Copilot and agents with Agent 365.",
    fullName: "Microsoft 365 Certified: Microsoft 365 and AI Services Administrator Associate",
    // Verified 2026-11-04 against Microsoft Learn (AB-650 study guide, AB-650 exam page, certification page, MS-102 / Administrator Expert page, retired certification exams list).
    // Status: exam page and certification page both still show "(beta)" (certification page updated 4 Sep 2026). A Microsoft Tech Community post (Skills Hub blog) said general availability of the certification was expected in October 2026; no GA notice found on Learn.
    // 30 November 2026: NOT confirmed as an AB-650 outline change on any official page fetched. The study guide (last updated 27 Jul 2026) says "We have included two versions of the Skills Measured objectives depending on when you are taking the exam" but shows only one version and no dates or change log. The only official 30 Nov 2026 date found is the retirement of MS-102 / Microsoft 365 Certified: Administrator Expert (Administrator Expert page and retired-exams list). No official page fetched names AB-650 as the MS-102 replacement. Re-check the study guide for a second skills version before adding examVersion.
    // Not published on the pages fetched, so omitted: examVersion, duration, question count, question types.
    exam: {
      officialName: "Exam AB-650: Administering Microsoft 365 and AI Services (beta)",
      examCode: "AB-650",
      passingScore: "700 (beta exams are not scored immediately)",
      languages: ["English"],
      prerequisites: "No formal prerequisites. Microsoft expects experience with Microsoft 365 workloads and Microsoft Entra ID, an understanding of Defender XDR capabilities and familiarity with Microsoft Graph PowerShell.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/ai-services-administrator-associate/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-650/",
      domains: [
        { id: "d1", name: "Configure and manage Microsoft 365 tenants and workloads", weight: "20–25%", objectives: ["Configure and manage a Microsoft 365 tenant", "Manage Microsoft 365 workloads"] },
        { id: "d2", name: "Govern and secure Microsoft 365 tenants and workloads", weight: "40–45%", objectives: ["Manage identities in Microsoft Entra", "Implement and manage authentication and access in Microsoft Entra", "Secure Microsoft 365 workloads", "Protect data in Microsoft 365 by using Microsoft Purview"] },
        { id: "d3", name: "Manage and secure AI services in Microsoft 365", weight: "35–40%", objectives: ["Enable and manage Microsoft 365 Copilot", "Implement and manage agents in Microsoft 365 and Agent 365", "Secure and govern agents by using Agent 365", "Monitor AI services in Microsoft 365"] },
      ],
      sources: [
        { label: "Microsoft Learn: AB-650 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-650" },
        { label: "Microsoft Learn: Exam AB-650", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-650/" },
        { label: "Microsoft Learn: Microsoft 365 and AI Services Administrator Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/ai-services-administrator-associate/" },
        { label: "Microsoft Learn: Microsoft 365 Administrator Expert (MS-102 retires 30 November 2026)", url: "https://learn.microsoft.com/en-us/credentials/certifications/m365-administrator-expert/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AB-650 Practice Exams: Microsoft 365 AI Services Admin",
      description: "AB-650 (beta) practice exams: Microsoft 365 tenants, Entra identity and access, Defender and Purview, Copilot and agent management with Agent 365.",
    },
  },
  "ab-730": {
    description:
      "German-language practice exams for Microsoft AB-730: AI Business Professional: generative AI fundamentals, Microsoft 365 Copilot prompts, chats, content and meetings, and agents. Microsoft updated the English exam on 20 October 2026; localized versions follow about eight weeks later.",
    fullName: "Microsoft Certified: AI Business Professional",
    // Verified 2026-11-04 against Microsoft Learn (AB-730 study guide, AI Business Professional certification page).
    // The study guide change log (skills measured as of 20 Oct 2026) removed "Create and manage Microsoft 365 Copilot agents" and added the new area "Drive business outcomes by using agents" (prebuilt agents, Copilot Cowork).
    // Localized exams (including German) are updated about eight weeks after the English version, per the study guide, so the German exam may still follow the pre-20 Oct 2026 outline until about mid-December 2026.
    // Note: the /exams/ab-730/ page still showed the old skill names and listed only English; the certification page (updated 20 Oct 2026) lists 13 languages and the new skills. The certification page is used here.
    // Not published on the pages fetched, so omitted: question count, question types, renewal/expiry.
    exam: {
      officialName: "Exam AB-730: AI Business Professional",
      examCode: "AB-730",
      examVersion: "Skills measured as of 20 October 2026",
      duration: "45 minutes",
      passingScore: "700 or greater",
      languages: ["English", "Arabic (Saudi Arabia)", "Chinese (Simplified)", "Chinese (Traditional)", "French", "German", "Indonesian (Indonesia)", "Italian", "Korean", "Japanese", "Portuguese (Brazil)", "Russian", "Spanish"],
      delivery: "Proctored exam scheduled through Pearson VUE; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects experience with Microsoft 365 Copilot, Copilot Cowork and prebuilt agents, generative AI basics (prompt and context engineering, large language models) and the Microsoft 365 core apps. No coding required.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/ai-business-professional/",
      domains: [
        { id: "d1", name: "Understand generative AI fundamentals", weight: "25–30%", objectives: ["Understand generative AI capabilities across Microsoft 365 experiences", "Identify responsible AI and data protection practices"] },
        { id: "d2", name: "Manage prompts and chats by using Microsoft 365 Copilot", weight: "20–25%", objectives: ["Create and manage prompts in Microsoft 365 Copilot", "Manage chats in Microsoft 365 Copilot"] },
        { id: "d3", name: "Manage business content and collaboration by using Microsoft 365 Copilot", weight: "20–25%", objectives: ["Draft and analyze business content by using Microsoft 365 Copilot", "Manage meetings and collaboration by using Microsoft 365 Copilot"] },
        { id: "d4", name: "Drive business outcomes by using agents", weight: "20–25%", objectives: ["Select and apply prebuilt Microsoft 365 Copilot agents", "Perform business tasks by using Microsoft Copilot Cowork"] },
      ],
      sources: [
        { label: "Microsoft Learn: AB-730 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-730" },
        { label: "Microsoft Learn: AI Business Professional certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/ai-business-professional/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AB-730 Practice Exams (German): AI Business Professional",
      description: "German-language AB-730 practice exams: generative AI basics, Microsoft 365 Copilot prompts, chats, business content, meetings and agents.",
    },
  },
  "ab-731": {
    description:
      "Practice exams for Microsoft AB-731: AI Transformation Leader, based on the skills measured as of 22 July 2026: business value of generative AI, Microsoft 365 Copilot and Foundry Tools, and responsible AI and adoption. The exam takes 45 minutes.",
    fullName: "Microsoft Certified: AI Transformation Leader",
    // Verified 2026-11-04 against Microsoft Learn (AB-731 study guide, AI Transformation Leader certification page).
    // Not published on the pages fetched, so omitted: question count, question types, renewal/expiry.
    exam: {
      officialName: "Exam AB-731: AI Transformation Leader",
      examCode: "AB-731",
      examVersion: "Skills measured as of 22 July 2026",
      duration: "45 minutes",
      passingScore: "700 or greater",
      languages: ["English", "Arabic (Saudi Arabia)", "Chinese (Simplified)", "Chinese (Traditional)", "French", "German", "Indonesian (Indonesia)", "Italian", "Korean", "Japanese", "Portuguese (Brazil)", "Russian", "Spanish"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. Aimed at business decision-makers; Microsoft expects experience leading adoption or change management and familiarity with Microsoft 365 services, Microsoft Foundry and general AI capabilities. No coding required.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/ai-transformation-leader/",
      domains: [
        { id: "d1", name: "Identify the business value of generative AI solutions", weight: "35–40%", objectives: ["Identify the foundational concepts of generative AI", "Identify benefits and capabilities of generative AI solutions"] },
        { id: "d2", name: "Identify benefits, capabilities, and opportunities for Microsoft's AI apps and services", weight: "35–40%", objectives: ["Identify benefits and capabilities of Microsoft 365 Copilot and Microsoft Copilot", "Identify benefits and capabilities of Foundry Tools"] },
        { id: "d3", name: "Identify an implementation and adoption strategy for Microsoft's AI apps and services", weight: "20–25%", objectives: ["Align an AI strategy with Microsoft responsible AI policies", "Plan for AI adoption across the organization"] },
      ],
      sources: [
        { label: "Microsoft Learn: AB-731 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-731" },
        { label: "Microsoft Learn: AI Transformation Leader certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/ai-transformation-leader/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AB-731 Practice Exams: AI Transformation Leader",
      description: "AB-731 practice exams for the July 2026 skills: business value of generative AI, Microsoft 365 Copilot, Foundry Tools, responsible AI and adoption.",
    },
  },
  // Agile variant of the process-based project management method (Version 2). Trademarked method names are not used on this
  // website (PeopleCert request, October 2026). Keep all copy neutral; links to official PeopleCert pages are fine.
  "agile-project-management-foundation-v2": {
    description:
      "Practice exams for the Version 2 Foundation exam that blends agile ways of working with the widely used process-based project management method: agile mindset, roles, risk and change, progress tracking and scaling. Check your level before the 40-question exam.",
    fullName: "Project Management Agile Foundation (Version 2)",
    // Verified 2026-11-04 against the PeopleCert exam page for the agile Foundation exam (Version 2).
    // Status: current; the page shows no retirement notice and no newer version. Launch date not given, omitted.
    // Not stated on the page, so omitted: delivery mode (the page shows exam time slots and proctor language selection, but does not say online or classroom), exam code.
    // Prerequisites: none listed on the page (described as suitable for "any career stage"), so written as "None listed".
    // Domains below are the page's learning outcome headings (no weights published). Heading 2 names the trademarked method and is reworded neutrally here.
    exam: {
      officialName: "Agile Foundation (Version 2)",
      examVersion: "Version 2",
      questionCount: "40",
      duration: "60 minutes",
      format: "Multiple choice, closed book",
      passingScore: "60%",
      questionTypes: "Multiple choice",
      languages: ["English", "Chinese", "Dutch", "French", "German", "Italian", "Japanese", "Polish", "Portuguese (Brazil)", "Spanish"],
      prerequisites: "None listed",
      status: "current",
      officialCertificationUrl: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-Agile-28/prince2-agile-foundation-4074",
      officialExamUrl: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-Agile-28/prince2-agile-foundation-4074",
      domains: [
        { id: "d1", name: "The agile mindset" },
        { id: "d2", name: "Blending agile with the process-based project management method" },
        { id: "d3", name: "Stakeholder engagement" },
        { id: "d4", name: "Agile leadership basics" },
        { id: "d5", name: "Risk and change control" },
        { id: "d6", name: "Progress tracking" },
        { id: "d7", name: "Agile roles and duties" },
        { id: "d8", name: "Scalable agility" },
        { id: "d9", name: "Value-driven thinking" },
      ],
      sources: [
        { label: "PeopleCert: agile Foundation (Version 2) exam page", url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-Agile-28/prince2-agile-foundation-4074" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "PM Agile Foundation (Version 2) Practice Exams",
      description: "Practice exams for the Version 2 agile Foundation exam of the process-based project management method: agile mindset, roles, risk, progress and scaling.",
    },
  },
  "ai-300": {
    description:
      "Practice exams for Microsoft AI-300: Operationalizing Machine Learning and Generative AI Solutions. Covers MLOps in Azure Machine Learning and GenAIOps in Microsoft Foundry: IaC, training, deployment, monitoring, evaluation, RAG and fine-tuning.",
    fullName: "Microsoft Certified: Machine Learning Operations Engineer Associate",
    // Verified 2026-11-04 against Microsoft Learn (AI-300 study guide, AI-300 exam/certification page, retired certification exams list, Azure Data Scientist Associate page).
    // The study guide shows no "skills measured as of" date and no change log (page last updated 15 Oct 2026), so no examVersion is given.
    // DP-100 (Azure Data Scientist Associate) retired on 1 June 2026 per the retired-exams list. No official page fetched names AI-300 as its direct replacement, so that is not stated here.
    // Not published on the pages fetched, so omitted: question count, question types.
    exam: {
      officialName: "Exam AI-300: Operationalizing Machine Learning and Generative AI Solutions",
      examCode: "AI-300",
      duration: "120 minutes",
      passingScore: "700 or greater",
      languages: ["English"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects a data science background with Python, entry-level DevOps (GitHub Actions, CLIs), and experience with Azure Machine Learning, Microsoft Foundry and infrastructure as code with Bicep and Azure CLI.",
      status: "current",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-300/",
      domains: [
        { id: "d1", name: "Design and implement an MLOps infrastructure", weight: "15–20%", objectives: ["Create and manage resources in a Machine Learning workspace", "Create and manage assets in a Machine Learning workspace", "Implement IaC for Machine Learning"] },
        { id: "d2", name: "Implement machine learning model lifecycle and operations", weight: "25–30%", objectives: ["Orchestrate model training", "Implement model registration and versioning", "Deploy machine learning models for production environments", "Monitor and maintain machine learning models in production"] },
        { id: "d3", name: "Design and implement a GenAIOps infrastructure", weight: "20–25%", objectives: ["Implement Foundry environments and platform configuration", "Deploy and manage foundation models for production workloads", "Implement prompt versioning and management with source control"] },
        { id: "d4", name: "Implement generative AI quality assurance and observability", weight: "10–15%", objectives: ["Configure evaluation and validation for generative AI applications and agents", "Implement observability for generative AI applications and agents"] },
        { id: "d5", name: "Optimize generative AI systems and model performance", weight: "10–15%", objectives: ["Optimize retrieval-augmented generation (RAG) performance and accuracy", "Implement advanced fine-tuning and model customization"] },
      ],
      sources: [
        { label: "Microsoft Learn: AI-300 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-300" },
        { label: "Microsoft Learn: Exam AI-300", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-300/" },
        { label: "Microsoft Learn: Retired certification exams (DP-100: 1 June 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AI-300 Practice Exams: MLOps Engineer Associate",
      description: "AI-300 practice exams: Azure Machine Learning workspaces, IaC, training, deployment and monitoring, plus GenAIOps in Foundry, evaluation, RAG and fine-tuning.",
    },
  },
  "aws-ans-c01": {
    description:
      "Practice exams for AWS ANS-C01: Certified Advanced Networking - Specialty, written to the official exam guide: network design, implementation, management and security. AWS is retiring this exam; the last day to take it is 31 December 2026.",
    fullName: "AWS Certified Advanced Networking - Specialty",
    // Verified 2026-11-04 against the AWS certification page, the AWS exam guides index and the ANS-C01 exam guide (overview, domain 1-4 pages).
    // IMPORTANT: AWS certification page: "This exam is being retired. The last day to take the exam is December 31, 2026." Certifications earned before retirement stay active for the standard three-year period; no new certifications are issued after retirement. No successor exam is named.
    // Note: the exam guides index has no retirement note for ANS-C01 (only the certification page states it).
    // Note: the exam guide lists only two question types (multiple response and matching); the certification page says "multiple choice or multiple response". questionTypes follows the exam guide. No revisions page or version date published. Passing score 750 is from the exam guide.
    exam: {
      officialName: "AWS Certified Advanced Networking - Specialty",
      examCode: "ANS-C01",
      questionCount: "65 questions (50 scored, 15 unscored)",
      duration: "170 minutes",
      format: "Pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "750 (scaled)",
      questionTypes: "Exam guide: multiple response (two or more correct responses out of five or more options) and matching (3 to 7 prompts matched to a list of responses). Certification page: multiple choice or multiple response.",
      languages: ["English", "Japanese", "Korean", "Simplified Chinese"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Recommended: 5 or more years of networking experience with 2 or more years of cloud and hybrid networking experience.",
      status: "retiring",
      retirementDate: "2026-12-31",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/advanced-networking-specialty-01/advanced-networking-specialty-01.html",
      domains: [
        { id: "d1", name: "Network Design", weight: "30%", objectives: ["Design a solution that incorporates edge network services to optimize user performance and traffic management for global architectures", "Design DNS solutions that meet public, private, and hybrid requirements", "Design solutions that integrate load balancing to meet high availability, scalability, and security requirements", "Define logging and monitoring requirements across AWS and hybrid networks", "Design a routing strategy and connectivity architecture between on-premises networks and the AWS Cloud", "Design a routing strategy and connectivity architecture that include multiple AWS accounts, AWS Regions, and VPCs to support different connectivity patterns"] },
        { id: "d2", name: "Network Implementation", weight: "26%", objectives: ["Implement routing and connectivity between on-premises networks and the AWS Cloud", "Implement routing and connectivity across multiple AWS accounts, Regions, and VPCs to support different connectivity patterns", "Implement complex hybrid and multi-account DNS architectures", "Automate and configure network infrastructure"] },
        { id: "d3", name: "Network Management and Operation", weight: "20%", objectives: ["Maintain routing and connectivity on AWS and hybrid networks", "Monitor and analyze network traffic to troubleshoot and optimize connectivity patterns", "Optimize AWS networks for performance, reliability, and cost-effectiveness"] },
        { id: "d4", name: "Network Security, Compliance, and Governance", weight: "24%", objectives: ["Implement and maintain network features to meet security and compliance needs and requirements", "Validate and audit security by using network monitoring and logging services", "Implement and maintain confidentiality of data and communications of the network"] },
      ],
      sources: [
        { label: "AWS: Certified Advanced Networking - Specialty (retirement notice)", url: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/" },
        { label: "AWS: ANS-C01 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/advanced-networking-specialty-01/advanced-networking-specialty-01.html" },
        { label: "AWS: Certification exam guides", url: "https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ANS-C01 Practice Exams: AWS Advanced Networking",
      description: "ANS-C01 practice exams for AWS Advanced Networking - Specialty: design, implementation, operations and security. Exam retires after 31 December 2026.",
    },
  },
  "aws-dea-c01": {
    description:
      "Practice exams for AWS DEA-C01: Certified Data Engineer - Associate, written to the official exam guide: ingestion and transformation, data store management, data operations and support, and security and governance. Check your level before the 130-minute exam.",
    fullName: "AWS Certified Data Engineer - Associate",
    // Verified 2026-11-04 against the AWS certification page, the AWS exam guides index, the DEA-C01 exam guide (overview, domain 1-4 pages, revisions v1.1 of 12 Dec 2025).
    // Status: DEA-C01 is current. Exam guides index has no update note; certification page lists no new version, retirement or language retirement. No DEA-C02 announced on official pages.
    // Note: AWS certification page does not list a passing score; 720 is from the exam guide.
    exam: {
      officialName: "AWS Certified Data Engineer - Associate",
      examCode: "DEA-C01",
      examVersion: "Exam guide DEA-C01, version 1.1 (12 December 2025)",
      questionCount: "65 questions (50 scored, 15 unscored)",
      duration: "130 minutes",
      format: "Multiple choice and multiple response; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "720 (scaled)",
      questionTypes: "Multiple choice (one correct response and three distractors) and multiple response (two or more correct responses out of five or more options)",
      languages: ["English", "Japanese", "Korean", "Simplified Chinese"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Recommended: the equivalent of 2 to 3 years of experience in data engineering and at least 1 to 2 years of hands-on experience with AWS services.",
      status: "current",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-data-engineer-associate/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01.html",
      domains: [
        { id: "d1", name: "Data Ingestion and Transformation", weight: "34%", objectives: ["Perform data ingestion", "Transform and process data", "Orchestrate data pipelines", "Apply programming concepts"] },
        { id: "d2", name: "Data Store Management", weight: "26%", objectives: ["Choose a data store", "Understand data cataloging systems", "Manage the lifecycle of data", "Design data models and schema evolution"] },
        { id: "d3", name: "Data Operations and Support", weight: "22%", objectives: ["Automate data processing by using AWS services", "Analyze data by using AWS services", "Maintain and monitor data pipelines", "Ensure data quality"] },
        { id: "d4", name: "Data Security and Governance", weight: "18%", objectives: ["Apply authentication mechanisms", "Apply authorization mechanisms", "Ensure data encryption and masking", "Prepare logs for audit", "Understand data privacy and governance"] },
      ],
      sources: [
        { label: "AWS: Certified Data Engineer - Associate", url: "https://aws.amazon.com/certification/certified-data-engineer-associate/" },
        { label: "AWS: DEA-C01 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01.html" },
        { label: "AWS: DEA-C01 Exam Guide revisions", url: "https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/dea-01-revisions.html" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "DEA-C01 Practice Exams: AWS Data Engineer Associate",
      description: "DEA-C01 practice exams for AWS Data Engineer - Associate: ingestion and transformation, data stores, operations and support, security and governance.",
    },
  },
  "aws-dop-c02": {
    description:
      "Practice exams for AWS DOP-C02: Certified DevOps Engineer - Professional, written to the official exam guide: SDLC automation, configuration management and IaC, resilience, monitoring, incident response and security. Check your level before the 180-minute exam.",
    fullName: "AWS Certified DevOps Engineer - Professional",
    // Verified 2026-11-04 against the AWS certification page, the AWS exam guides index and the DOP-C02 exam guide (overview, domain 1-6 pages).
    // Status: DOP-C02 is current. Exam guides index has no update note; no DOP-C03 announced on official pages.
    // IMPORTANT: AWS certification page: "The AWS Certified DevOps Engineer - Professional exam in Korean will be retired after December 31, 2026." (not relevant to the English course). Languages array is the page list, which still includes Korean until then.
    // Note: no revisions page or version date published for the DOP-C02 guide, and no launch date stated, so examVersion and launchDate are omitted. AWS certification page does not list a passing score; 750 is from the exam guide.
    exam: {
      officialName: "AWS Certified DevOps Engineer - Professional",
      examCode: "DOP-C02",
      questionCount: "75 questions (65 scored, 10 unscored)",
      duration: "180 minutes",
      format: "Multiple choice and multiple response; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "750 (scaled)",
      questionTypes: "Multiple choice (one correct response and three distractors) and multiple response (two or more correct responses out of five or more options)",
      languages: ["English", "Japanese", "Korean (until 31 December 2026)", "Simplified Chinese"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Recommended: 2 or more years of experience provisioning, operating, and managing AWS environments, plus experience with the software development lifecycle and programming and/or scripting.",
      status: "current",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html",
      domains: [
        { id: "d1", name: "SDLC Automation", weight: "22%", objectives: ["Implement CI/CD pipelines.", "Integrate automated testing into CI/CD pipelines.", "Build and manage artifacts.", "Implement deployment strategies for instance, container, and serverless environments."] },
        { id: "d2", name: "Configuration Management and IaC", weight: "17%", objectives: ["Define cloud infrastructure and reusable components to provision and manage systems throughout their lifecycle.", "Deploy automation to create, onboard, and secure AWS accounts in a multi-account or multi-Region environment.", "Design and build automated solutions for complex tasks and large-scale environments."] },
        { id: "d3", name: "Resilient Cloud Solutions", weight: "15%", objectives: ["Implement highly available solutions to meet resilience and business requirements.", "Implement solutions that are scalable to meet business requirements.", "Implement automated recovery processes to meet RTO and RPO requirements."] },
        { id: "d4", name: "Monitoring and Logging", weight: "15%", objectives: ["Configure the collection, aggregation, and storage of logs and metrics.", "Audit, monitor, and analyze logs and metrics to detect issues.", "Automate monitoring and event management of complex environments."] },
        { id: "d5", name: "Incident and Event Response", weight: "14%", objectives: ["Manage event sources to process, notify, and take action in response to events.", "Implement configuration changes in response to events.", "Troubleshoot system and application failures."] },
        { id: "d6", name: "Security and Compliance", weight: "17%", objectives: ["Implement techniques for identity and access management at scale.", "Apply automation for security controls and data protection.", "Implement security monitoring and auditing solutions."] },
      ],
      sources: [
        { label: "AWS: Certified DevOps Engineer - Professional", url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/" },
        { label: "AWS: DOP-C02 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html" },
        { label: "AWS: Certification exam guides", url: "https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "DOP-C02 Practice Exams: AWS DevOps Engineer Pro (2026)",
      description: "DOP-C02 practice exams for AWS DevOps Engineer - Professional: SDLC automation, IaC, resilience, monitoring, incident response and security.",
    },
  },
  "aws-sap-c03": {
    description:
      "Practice exams for AWS SAP-C03: Certified Solutions Architect - Professional, covering the five domains of the new exam guide, including AI/ML integration, security and governance. SAP-C03 replaces SAP-C02 on 17 November 2026; the last day to take SAP-C02 is 16 November 2026.",
    fullName: "AWS Certified Solutions Architect - Professional",
    // Verified 2026-11-04 against the AWS certification page, the AWS exam guides index, the SAP-C03 exam guide (overview, domain 1-5 pages, SAP-C02 vs SAP-C03 comparison).
    // Status: exam guides index: "Registration for the updated version (SAP-C03) opens on October 27, 2026. The last day to take the current exam (SAP-C02) is November 16, 2026." Comparison page: SAP-C02 "in use until November 16, 2026", SAP-C03 "in use beginning November 17, 2026".
    // Domain changes vs SAP-C02: four domains (26/29/25/20%) replaced by five (25/25/15/15/20%). New content per comparison page includes Amazon Bedrock and GenAI/RAG/agent architectures, VPC Lattice, IPv6 migration, post-quantum cryptography, data residency.
    // Question count: exam guide gives 65 scored + 10 unscored; certification page gives 75 questions and 180 minutes.
    // Note: no revisions page or version date for the SAP-C03 guide, so examVersion gives only the code. AWS certification page does not list a passing score; 720 is from the exam guide.
    // Note: languages are the certification page list; AWS does not state separately whether every language is available for SAP-C03 from day one.
    exam: {
      officialName: "AWS Certified Solutions Architect - Professional",
      examCode: "SAP-C03",
      examVersion: "Exam guide SAP-C03 (replaces SAP-C02)",
      questionCount: "75 questions (65 scored, 10 unscored)",
      duration: "180 minutes",
      format: "Multiple choice and multiple response; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "720 (scaled)",
      questionTypes: "Multiple choice (one correct response and three distractors) and multiple response (two or more correct responses out of five or more options)",
      languages: ["English", "Japanese", "Korean", "Portuguese (Brazil)", "Simplified Chinese", "Spanish (Latin America)"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Recommended: 2 or more years of experience using AWS services to design and implement cloud solutions.",
      status: "upcoming",
      launchDate: "2026-11-17",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-professional-03/solutions-architect-professional-03.html",
      domains: [
        { id: "d1", name: "Architecture Design and Implementation Built for the Cloud", weight: "25%", objectives: ["Design architectures built for the cloud.", "Integrate AI and ML services into architectures.", "Design hybrid cloud integration patterns.", "Design network architectures.", "Design data, storage, and database architectures."] },
        { id: "d2", name: "Security, Compliance, and Governance", weight: "25%", objectives: ["Design identity security architectures.", "Design solutions to implement encryption and key management strategies.", "Design multi-account governance and compliance solutions.", "Design architectures to meet compliance requirements.", "Design security and responsible AI controls."] },
        { id: "d3", name: "Cost-Optimized Architecture Design", weight: "15%", objectives: ["Design architectures based on AWS pricing models.", "Optimize data transfer and network costs.", "Design cost allocation and visibility solutions.", "Optimize storage and database costs."] },
        { id: "d4", name: "Resilience, Migration, and Business Continuity", weight: "15%", objectives: ["Design migration strategies by using AWS frameworks.", "Design disaster recovery architectures.", "Design solutions to meet business continuity and resiliency requirements."] },
        { id: "d5", name: "Operational Excellence and Automation", weight: "20%", objectives: ["Design infrastructure as code.", "Design CI/CD and DevSecOps pipelines.", "Design observability and monitoring solutions.", "Design operational automation and resilient systems."] },
      ],
      sources: [
        { label: "AWS: Certified Solutions Architect - Professional", url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/" },
        { label: "AWS: Certification exam guides (SAP-C02 last day, SAP-C03 registration)", url: "https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html" },
        { label: "AWS: SAP-C03 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-professional-03/solutions-architect-professional-03.html" },
        { label: "AWS: Comparison of SAP-C02 and SAP-C03", url: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-professional-03/sap-03-comparison.html" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "SAP-C03 Practice Exams: AWS Solutions Architect Pro",
      description: "SAP-C03 practice exams for AWS Solutions Architect - Professional: cloud and AI design, security, cost, resilience, automation. Replaces SAP-C02 17 Nov 2026.",
    },
  },
  "aws-scs-c03": {
    description:
      "Practice exams for AWS SCS-C03: Certified Security - Specialty, written to the current exam guide that replaced SCS-C02: detection, incident response, infrastructure security, IAM, data protection and governance. Check your level before the 170-minute exam.",
    fullName: "AWS Certified Security - Specialty",
    // Verified 2026-11-04 against the AWS certification page, the AWS exam guides index, the SCS-C03 exam guide (overview, domain 1-6 pages, SCS-C02 vs SCS-C03 comparison appendix, revisions v1.0 of 26 Mar 2026).
    // Status: SCS-C03 is current. Comparison appendix: SCS-C02 "in use until December 1, 2025", SCS-C03 "in use beginning December 2, 2025". Exam guides index has no update note for SCS-C03; no successor announced.
    // IMPORTANT: AWS certification page: the Simplified Chinese, Spanish (Latin America) and Portuguese (Brazil) versions retire after December 31, 2026 (not relevant to the English course).
    // Note: the certification page says "multiple choice or multiple response"; the exam guide also lists ordering and matching question types, so questionTypes follows the exam guide. AWS certification page does not list a passing score; 750 is from the exam guide.
    exam: {
      officialName: "AWS Certified Security - Specialty",
      examCode: "SCS-C03",
      examVersion: "Exam guide SCS-C03, version 1.0 (26 March 2026)",
      questionCount: "65 questions (50 scored, 15 unscored)",
      duration: "170 minutes",
      format: "Multiple choice, multiple response, ordering and matching; pass/fail with a scaled score of 100 to 1,000 (compensatory scoring)",
      passingScore: "750 (scaled)",
      questionTypes: "Multiple choice, multiple response (two or more correct responses out of five or more options), ordering (3 to 5 responses placed in the correct order) and matching (3 to 7 prompts matched to a list of responses)",
      languages: ["English", "Japanese", "Korean", "Portuguese (Brazil) (until 31 December 2026)", "Simplified Chinese (until 31 December 2026)", "Spanish (Latin America) (until 31 December 2026)"],
      delivery: "Pearson VUE testing center or online proctored exam",
      prerequisites: "No formal prerequisites. Exam guide: the equivalent of 3 to 5 years of experience securing cloud solutions. Certification page: 5 years of IT security experience and 2 or more years of hands-on experience securing AWS workloads.",
      status: "current",
      launchDate: "2025-12-02",
      officialCertificationUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
      officialExamUrl: "https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03/security-specialty-03.html",
      domains: [
        { id: "d1", name: "Detection", weight: "16%", objectives: ["Design and implement monitoring and alerting solutions for an AWS account or organization", "Design and implement logging solutions", "Troubleshoot security monitoring, logging, and alerting solutions"] },
        { id: "d2", name: "Incident Response", weight: "14%", objectives: ["Design and test an incident response plan", "Respond to security events"] },
        { id: "d3", name: "Infrastructure Security", weight: "18%", objectives: ["Design, implement, and troubleshoot security controls for network edge services", "Design, implement, and troubleshoot security controls for compute workloads", "Design and troubleshoot network security controls"] },
        { id: "d4", name: "Identity and Access Management", weight: "20%", objectives: ["Design, implement, and troubleshoot authentication strategies", "Design, implement, and troubleshoot authorization strategies"] },
        { id: "d5", name: "Data Protection", weight: "18%", objectives: ["Design and implement controls for data in transit", "Design and implement controls for data at rest", "Design and implement controls to protect confidential data, credentials, secrets, and cryptographic key materials"] },
        { id: "d6", name: "Security Foundations and Governance", weight: "14%", objectives: ["Develop a strategy to centrally deploy and manage AWS accounts", "Implement a secure and consistent deployment strategy for cloud resources", "Evaluate the compliance of AWS resources"] },
      ],
      sources: [
        { label: "AWS: Certified Security - Specialty", url: "https://aws.amazon.com/certification/certified-security-specialty/" },
        { label: "AWS: SCS-C03 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03/security-specialty-03.html" },
        { label: "AWS: Comparison of SCS-C02 and SCS-C03", url: "https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03/security-specialty-03-appendix-b.html" },
        { label: "AWS: SCS-C03 Exam Guide revisions", url: "https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03/scs03-revisions.html" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "SCS-C03 Practice Exams: AWS Security Specialty (2026)",
      description: "SCS-C03 practice exams for AWS Security - Specialty: detection, incident response, infrastructure security, IAM, data protection and governance.",
    },
  },
  "az-802": {
    description:
      "Practice exams for Microsoft AZ-802: Administering Windows Server, the replacement exam after AZ-800 and AZ-801 retired on 30 September 2026. Covers AD DS, hybrid management, Hyper-V, networking, storage, security and troubleshooting.",
    fullName: "Microsoft Certified: Windows Server Administrator Associate",
    // Verified 2026-11-04 against Microsoft Learn (AZ-802 study guide, AZ-802 exam page, Windows Server Administrator Associate certification page, retired certification exams list).
    // Certification page: "Exam AZ-800 and Exam AZ-801 were retired on September 30, 2026. You can view the replacement exam, AZ-802."
    // The study guide shows no "skills measured as of" date and no change log (page last updated 19 Oct 2026), so no examVersion is given.
    // Not published on the pages fetched, so omitted: question count, question types.
    exam: {
      officialName: "Exam AZ-802: Administering Windows Server",
      examCode: "AZ-802",
      duration: "120 minutes",
      passingScore: "700 or greater",
      languages: ["English"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects experience administering Windows Server with Windows Admin Center, Hyper-V, PowerShell, Azure Arc, Azure Monitor, Azure Update Manager and Microsoft Defender for Cloud, and familiarity with AD DS.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/windows-server-administrator-associate/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-802/",
      domains: [
        { id: "d1", name: "Deploy and manage AD DS", weight: "20–25%", objectives: ["Deploy and manage AD DS domain controllers", "Configure and manage multi-site, multi-domain, and multi-forest environments", "Create and manage AD DS security principals", "Manage Windows Server by using domain-based Group Policies"] },
        { id: "d2", name: "Manage Windows Server instances and workloads in a hybrid environment", weight: "10–15%", objectives: ["Configure remote management for Windows Server instances in a hybrid environment", "Manage Windows Server instances and workloads by using Azure services in a hybrid environment"] },
        { id: "d3", name: "Manage virtual machines", weight: "10–15%", objectives: ["Manage Hyper-V and guest VM", "Manage Windows Server VMs in Azure"] },
        { id: "d4", name: "Implement and manage an on-premises and hybrid networking infrastructure", weight: "10–15%", objectives: ["Implement on-premises and hybrid name resolution", "Manage IP addressing in on-premises and hybrid scenarios"] },
        { id: "d5", name: "Manage storage and file services", weight: "15–20%", objectives: ["Configure and manage Azure Files", "Configure and manage Windows Server file shares", "Configure Windows Server storage"] },
        { id: "d6", name: "Secure Windows Server infrastructure", weight: "10–15%", objectives: ["Secure Windows Server operating system", "Secure AD DS"] },
        { id: "d7", name: "Monitor and troubleshoot Windows Server environments", weight: "15–20%", objectives: ["Monitor by using Windows Server tools and Azure services", "Troubleshoot Windows Server issues", "Troubleshoot Active Directory"] },
      ],
      sources: [
        { label: "Microsoft Learn: AZ-802 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-802" },
        { label: "Microsoft Learn: Exam AZ-802", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-802/" },
        { label: "Microsoft Learn: Windows Server Administrator Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/windows-server-administrator-associate/" },
        { label: "Microsoft Learn: Retired certification exams (AZ-800 and AZ-801: 30 September 2026)", url: "https://learn.microsoft.com/en-us/credentials/retired-certification-exams" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AZ-802 Practice Exams: Windows Server Administrator",
      description: "AZ-802 practice exams, the replacement for AZ-800 and AZ-801: AD DS, hybrid management, Hyper-V, networking, storage, security and troubleshooting.",
    },
  },
  "ccat": {
    description:
      "Practice tests for the Criteria Cognitive Aptitude Test (CCAT), the 15-minute, 50-question pre-employment test from Criteria Corp that measures spatial reasoning, verbal ability, and math and logic.",
    fullName: "Criteria Cognitive Aptitude Test (CCAT)",
    // Verified 2026-11-04 against Criteria Corp sources: candidate CCAT prep page (criteriacorp.com/candidates/ccat-prep), Criteria help center CCAT article (criteriacorp.helpdocs.io, last modified 2 Nov 2026) and the Criteria InfoBrief CCAT PDF.
    // The CCAT is a pre-employment aptitude test, not a certification: there is no passing score. Employers see a raw score (out of 50) and a percentile, and may compare it with suggested score ranges for a role.
    // Not published on the official pages, so omitted: available languages, a version or form number, a fixed passing score.
    // Delivery: the InfoBrief says the CCAT can be taken remotely over the internet under unsupervised conditions on any device; candidates take it via the employer's invite. Calculator not allowed (candidate prep page).
    // Other official facts (no schema field): no penalty for wrong answers; Criteria says fewer than 1% of candidates answer all 50 questions (candidate prep page).
    // Domains: Criteria names three ability areas but publishes no weights.
    exam: {
      officialName: "Criteria Cognitive Aptitude Test (CCAT)",
      examCode: "CCAT",
      questionCount: "50",
      duration: "15 minutes",
      format: "Timed online multiple-choice aptitude test; results reported as a raw score and a percentile",
      questionTypes: "Multiple choice (verbal, math and logic, spatial reasoning)",
      delivery: "Online on any device via the employer's invitation; may be taken remotely and unsupervised. No calculators allowed",
      prerequisites: "None (taken at an employer's invitation)",
      status: "current",
      officialExamUrl: "https://www.criteriacorp.com/candidates/ccat-prep",
      domains: [
        {
          id: "d1",
          name: "Spatial Reasoning",
          objectives: ["Visualizing objects in space and making spatial judgments"],
        },
        {
          id: "d2",
          name: "Verbal Ability",
          objectives: ["Reading comprehension, word reasoning and attention to detail"],
        },
        {
          id: "d3",
          name: "Math and Logic",
          objectives: ["Reasoning with numbers and analytical thinking"],
        },
      ],
      sources: [
        { label: "Criteria Corp: CCAT prep for candidates", url: "https://www.criteriacorp.com/candidates/ccat-prep" },
        { label: "Criteria help center: Criteria Cognitive Aptitude Test (CCAT)", url: "https://criteriacorp.helpdocs.io/article/7zc8hihlvi-criteria-cognitive-aptitude-test-ccat" },
        { label: "Criteria Corp: InfoBrief CCAT (PDF)", url: "https://www.criteriacorp.com/files/Criteria-InfoBrief-CCAT.pdf" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CCAT Practice Tests: Criteria Cognitive Aptitude Test",
      description: "CCAT practice tests: 50 questions in 15 minutes covering spatial reasoning, verbal ability, and math and logic, scored as raw score and percentile.",
    },
  },
  "claude-certified-architect-ccar-f": {
    description:
      "Practice exams for Anthropic's Claude Certified Architect: Foundations exam (CCAR-F), written to the official exam guide: agentic architecture, tool design and MCP, Claude Code, prompt engineering and context management.",
    fullName: "Claude Certified Architect: Foundations",
    // Verified 2026-11-04 against the official CCAR-F Exam Guide (v1.0, effective July 2026, linked from the Anthropic Partner Academy exam page), the Partner Academy exam page, the Partner Academy "Who can take an exam" and Certification FAQ pages, and the claude.com article on the four role-based certifications.
    // Status: current and purchasable (USD 125 per the exam page and FAQ, raised from USD 99 on 30 June 2026; partner-tier discounts apply). A separate, more advanced "Claude Certified Architect: Professional" exam exists; it does not replace CCAR-F.
    // Eligibility: exams are only open to people at Claude Partner Network organizations (partner company email, 18+, government ID); customers and non-partners are currently not eligible (FAQ).
    // Note: the Udemy course title says "CCA-F"; Anthropic's exam guide uses the code CCAR-F. Exam guide overview lists "Number of items 60"; it does not mention scored vs unscored items. Credential valid 12 months (exam guide, FAQ); renewal via a free non-proctored assessment.
    exam: {
      officialName: "Claude Certified Architect: Foundations",
      examCode: "CCAR-F",
      examVersion: "Exam guide version 1.0 (effective July 2026)",
      questionCount: "60 items",
      duration: "120 minutes",
      format: "Scenario-based: 4 scenarios drawn at random from a bank of 6; closed book; pass/fail with a scaled score of 100 to 1,000 and percent correct per domain",
      passingScore: "720 (scaled)",
      questionTypes: "Multiple choice and multiple response (each item states how many responses to select)",
      languages: ["English", "Japanese"],
      delivery: "Pearson VUE: online proctored (OnVUE) or at a Pearson test center",
      prerequisites: "No formal prerequisites. Open only to staff of Claude Partner Network organizations. Target candidate: solution architect with typically 6+ months of hands-on experience with the Claude APIs, Agent SDK, Claude Code and MCP.",
      status: "current",
      officialCertificationUrl: "https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification",
      officialExamUrl: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542750/Claude+Certified+Architect+%E2%80%93+Foundations+Exam+Guide.pdf",
      domains: [
        { id: "d1", name: "Agentic Architecture & Orchestration", weight: "27%", objectives: ["Design and implement agentic loops for autonomous task execution", "Orchestrate multi-agent systems with coordinator-subagent patterns", "Configure subagent invocation, context passing, and spawning", "Implement multi-step workflows with enforcement and handoff patterns", "Apply Agent SDK hooks for tool call interception and data normalization", "Design task decomposition strategies for complex workflows", "Manage session state, resumption, and forking"] },
        { id: "d2", name: "Tool Design & MCP Integration", weight: "18%", objectives: ["Design effective tool interfaces with clear descriptions and boundaries", "Implement structured error responses for MCP tools", "Distribute tools appropriately across agents and configure tool choice", "Integrate MCP servers into Claude Code and agent workflows", "Select and apply built-in tools (Read, Write, Edit, Bash, Grep, Glob) effectively"] },
        { id: "d3", name: "Claude Code Configuration & Workflows", weight: "20%", objectives: ["Configure CLAUDE.md files with appropriate hierarchy, scoping, and modular organization", "Create and configure custom slash commands and skills", "Apply path-specific rules for conditional convention loading", "Determine when to use plan mode vs direct execution", "Apply iterative refinement techniques for progressive improvement", "Integrate Claude Code into CI/CD pipelines"] },
        { id: "d4", name: "Prompt Engineering & Structured Output", weight: "20%", objectives: ["Design prompts with explicit criteria to improve precision and reduce false positives", "Apply few-shot prompting to improve output consistency and quality", "Enforce structured output using tool use and JSON schemas", "Implement validation, retry, and feedback loops for extraction quality", "Design efficient batch processing strategies", "Design multi-instance and multi-pass review architectures"] },
        { id: "d5", name: "Context Management & Reliability", weight: "15%", objectives: ["Manage conversation context to preserve critical information across long interactions", "Design effective escalation and ambiguity resolution patterns", "Implement error propagation strategies across multi-agent systems", "Manage context effectively in large codebase exploration", "Design human review workflows and confidence calibration", "Preserve information provenance and handle uncertainty in multi-source synthesis"] },
      ],
      sources: [
        { label: "Anthropic Partner Academy: Claude Certified Architect: Foundations exam", url: "https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification" },
        { label: "Anthropic: Claude Certified Architect: Foundations Exam Guide (PDF)", url: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542750/Claude+Certified+Architect+%E2%80%93+Foundations+Exam+Guide.pdf" },
        { label: "Anthropic Partner Academy: Certification FAQ", url: "https://anthropic-partners.skilljar.com/page/faq-certifications" },
        { label: "Anthropic Partner Academy: Who can take an exam", url: "https://anthropic-partners.skilljar.com/page/certification-eligibility" },
        { label: "Claude: Four role-based Claude certifications", url: "https://claude.com/resources/articles/four-role-based-claude-certifications" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CCAR-F Practice Exams: Claude Certified Architect",
      description: "CCAR-F practice exams for Claude Certified Architect: Foundations: agentic architecture, MCP tools, Claude Code, prompting and context management.",
    },
  },
  "claude-certified-associate-ccao-f": {
    description:
      "Practice exams for Anthropic's Claude Certified Associate: Foundations exam (CCAO-F), written to the official exam guide: prompting, output validation, product and model choice, workflows, configuration, governance and troubleshooting.",
    fullName: "Claude Certified Associate: Foundations",
    // Verified 2026-11-04 against the official CCAO-F Exam Guide (v1.0, effective July 2026), the Anthropic Partner Academy exam page (purchasable, USD 99), the Partner Academy "Who can take an exam" and Certification FAQ pages, and the claude.com article on the four role-based certifications.
    // Status: current; announced as new in the claude.com article. No successor announced.
    // Eligibility: only staff of Claude Partner Network organizations (partner company email, 18+, government ID); customers and non-partners currently not eligible. Per the FAQ, the Associate does not count toward Claude Partner Network tier criteria.
    // Note: credential valid 12 months (exam guide, FAQ).
    exam: {
      officialName: "Claude Certified Associate: Foundations",
      examCode: "CCAO-F",
      examVersion: "Exam guide version 1.0 (effective July 2026)",
      questionCount: "60 items",
      duration: "120 minutes",
      format: "Closed book; pass/fail with a scaled score of 100 to 1,000 and percent correct per domain",
      passingScore: "720 (scaled)",
      questionTypes: "Multiple choice and multiple response (each item states how many responses to select)",
      languages: ["English", "Japanese"],
      delivery: "Pearson VUE: online proctored (OnVUE) or at a Pearson test center",
      prerequisites: "No mandatory prerequisites or required courses; no software development or API experience needed. Open only to staff of Claude Partner Network organizations. Target candidate uses Claude as a core productivity tool.",
      status: "current",
      officialCertificationUrl: "https://anthropic-partners.skilljar.com/claude-certified-associate-foundations-certification",
      officialExamUrl: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542847/Claude+Certified+Associate+%E2%80%93+Foundations+Exam+Guide.pdf",
      domains: [
        { id: "d1", name: "Prompting and Task Execution", weight: "14%", objectives: ["Create effective prompts for business and technical tasks", "Apply task decomposition techniques to structure complex requests", "Iterate prompts to improve output quality", "Adapt prompting strategies based on task type (analysis, research, drafting, brainstorming)"] },
        { id: "d2", name: "Output Evaluation and Validation", weight: "21%", objectives: ["Evaluate Claude-generated outputs for accuracy and completeness", "Identify hallucinations, inconsistencies, and biases in responses", "Apply fact-checking and validation techniques", "Determine when human review or additional verification is required", "Edit, adapt, refine, and compare outputs for the intended audience", "Organize and curate information and select appropriate output formats (artifacts, inline, structured data)"] },
        { id: "d3", name: "Product and Model Selection", weight: "12%", objectives: ["Select appropriate Claude product features (Projects, research mode, chat, artifacts)", "Differentiate between Claude model types (Haiku, Sonnet, Opus)", "Align model selection with task requirements (cost, speed, quality)", "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)"] },
        { id: "d4", name: "Workflow Integration and Solution Design", weight: "16%", objectives: ["Apply Claude to analyze requirements and use cases", "Leverage Claude for research, planning, and process optimization", "Use Claude to support solution design, development, and iteration", "Integrate Claude into existing workflows to augment or redesign them", "Communicate Claude's value and limitations to stakeholders"] },
        { id: "d5", name: "Configuration and Knowledge Management", weight: "12%", objectives: ["Configure Claude Projects with instructions and knowledge sources", "Manage uploaded knowledge and connectors (e.g., Google Drive, Gmail)", "Create effective system-level instructions", "Inform, maintain, and update Claude configurations, knowledge sources, and instructions"] },
        { id: "d6", name: "Governance, Risk, and Responsible Use", weight: "15%", objectives: ["Identify appropriate and inappropriate use cases", "Apply data sensitivity, regulatory, and privacy considerations", "Follow organizational AI policies and governance standards", "Understand the ethical implications of AI usage"] },
        { id: "d7", name: "Troubleshooting and Optimization", weight: "10%", objectives: ["Identify, diagnose, and resolve issues with underperforming prompts or poor outputs", "Adjust approach based on feedback and results", "Optimize workflows for efficiency and effectiveness"] },
      ],
      sources: [
        { label: "Anthropic Partner Academy: Claude Certified Associate: Foundations exam", url: "https://anthropic-partners.skilljar.com/claude-certified-associate-foundations-certification" },
        { label: "Anthropic: Claude Certified Associate: Foundations Exam Guide (PDF)", url: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542847/Claude+Certified+Associate+%E2%80%93+Foundations+Exam+Guide.pdf" },
        { label: "Anthropic Partner Academy: Certification FAQ", url: "https://anthropic-partners.skilljar.com/page/faq-certifications" },
        { label: "Anthropic Partner Academy: Who can take an exam", url: "https://anthropic-partners.skilljar.com/page/certification-eligibility" },
        { label: "Claude: Four role-based Claude certifications", url: "https://claude.com/resources/articles/four-role-based-claude-certifications" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CCAO-F Practice Exams: Claude Certified Associate",
      description: "CCAO-F practice exams for Claude Certified Associate: Foundations: prompting, output validation, model choice, Projects, governance and troubleshooting.",
    },
  },
  "claude-certified-developer-ccdv-f": {
    description:
      "Practice tests for Anthropic's Claude Certified Developer: Foundations exam (CCDV-F), written to the official exam guide: agents, Claude API applications, model selection, prompt and context engineering, security, tools and MCP.",
    fullName: "Claude Certified Developer: Foundations",
    // Verified 2026-11-04 against the official CCDV-F Exam Guide (v1.0, effective July 2026), the Anthropic Partner Academy exam page (purchasable, USD 125), the Partner Academy "Who can take an exam" and Certification FAQ pages, and the claude.com article on the four role-based certifications.
    // Status: current; announced as new in the claude.com article. No successor announced.
    // Eligibility: only staff of Claude Partner Network organizations (partner company email, 18+, government ID); customers and non-partners currently not eligible.
    // Note: domain weights are the exam guide's own decimal figures (they sum to 100%); objectives below are the guide's skill headings with their weights. Credential valid 12 months.
    exam: {
      officialName: "Claude Certified Developer: Foundations",
      examCode: "CCDV-F",
      examVersion: "Exam guide version 1.0 (effective July 2026)",
      questionCount: "53 items",
      duration: "120 minutes",
      format: "Closed book; pass/fail with a scaled score of 100 to 1,000 and percent correct per domain",
      passingScore: "720 (scaled)",
      questionTypes: "Multiple choice and multiple response (each item states how many responses to select)",
      languages: ["English", "Japanese"],
      delivery: "Pearson VUE: online proctored (OnVUE) or at a Pearson test center",
      prerequisites: "No mandatory prerequisites or required courses. Open only to staff of Claude Partner Network organizations. Target candidate: 1 to 5 years in software engineering, at least 6 months hands-on with Claude or comparable LLM systems, Python and/or TypeScript.",
      status: "current",
      officialCertificationUrl: "https://anthropic-partners.skilljar.com/claude-certified-developer-foundations-certification",
      officialExamUrl: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542875/Claude+Certified+Developer+%E2%80%93+Foundations+Exam+Guide.pdf",
      domains: [
        { id: "d1", name: "Agents and Workflows", weight: "14.7%", objectives: ["Agent Architecture (4.5%)", "Agent Construction with Claude (5.3%)", "Agent Patterns and Frameworks (4.9%)"] },
        { id: "d2", name: "Applications and Integration", weight: "33.1%", objectives: ["Understanding Requirements (3.4%)", "Systems Life Cycle (2.8%)", "Claude API Mechanics (6.8%)", "Software Engineering Foundations (7.4%)", "Claude Application Design (8.6%)", "Configuration Management (4.1%)"] },
        { id: "d3", name: "Claude Code", weight: "3.1%", objectives: ["Claude Code Operation (3.1%)"] },
        { id: "d4", name: "Eval, Testing, and Debugging", weight: "2.6%", objectives: ["Debugging and Error Handling (2.6%)"] },
        { id: "d5", name: "Model Selection and Optimization", weight: "16.8%", objectives: ["LLM Fundamentals (5.2%)", "Technical Fundamentals (6.1%)", "Model Selection and Tradeoffs (2.7%)", "Cost and Token Management (2.8%)"] },
        { id: "d6", name: "Prompt and Context Engineering", weight: "11.0%", objectives: ["Context Engineering (3.8%)", "Prompt Engineering (4.6%)", "Output Handling (2.6%)"] },
        { id: "d7", name: "Security and Safety", weight: "8.1%", objectives: ["AI Application Security (3.2%)", "Guardrails and Safe Deployment (2.3%)", "Claude Hooks (1.0%)", "Identity, Secrets, and Key Management (1.6%)"] },
        { id: "d8", name: "Tools and MCPs", weight: "10.6%", objectives: ["Tool Implementation (4.4%)", "MCP Server Development (2.1%)", "Agentic Customization (4.1%)"] },
      ],
      sources: [
        { label: "Anthropic Partner Academy: Claude Certified Developer: Foundations exam", url: "https://anthropic-partners.skilljar.com/claude-certified-developer-foundations-certification" },
        { label: "Anthropic: Claude Certified Developer: Foundations Exam Guide (PDF)", url: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542875/Claude+Certified+Developer+%E2%80%93+Foundations+Exam+Guide.pdf" },
        { label: "Anthropic Partner Academy: Certification FAQ", url: "https://anthropic-partners.skilljar.com/page/faq-certifications" },
        { label: "Anthropic Partner Academy: Who can take an exam", url: "https://anthropic-partners.skilljar.com/page/certification-eligibility" },
        { label: "Claude: Four role-based Claude certifications", url: "https://claude.com/resources/articles/four-role-based-claude-certifications" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CCDV-F Practice Tests: Claude Certified Developer",
      description: "CCDV-F practice tests for Claude Certified Developer: Foundations: agents, Claude API apps, model choice, prompting, security, tools and MCP.",
    },
  },
  "cobit-2019-foundation": {
    description:
      "Practice exams for the ISACA COBIT 2019 Foundation Certificate, covering all eight exam domains. ISACA replaces this certificate with the COBIT 7 Foundation Certificate on 19 November 2026; the last day to purchase the COBIT 2019 exam is 30 June 2027.",
    fullName: "ISACA COBIT 2019 Foundation Certificate",
    // Verified 2026-11-04 against the ISACA COBIT Foundation page (isaca.org). Certification body: ISACA (course descriptor "ISACA COBIT 2019 Foundation").
    // STATUS: ISACA states the COBIT 2019 Foundations Certificate program "will be replaced by the COBIT 7 Foundation Certificate" on 19 November 2026 and sunset; last day to purchase the current exam or exam prep is 30 June 2027. ISACA gives no last date to sit the exam.
    // DOUBT: the exam facts (75 questions, 2 hours, 65%, weights) are on the COBIT Foundation page without naming a version; they are taken as the current COBIT 2019 exam. Recheck after 19 November 2026, when the page may switch to COBIT 7.
    // Languages: not stated on the page, omitted. No COBIT-specific exam guide PDF is linked.
    exam: {
      officialName: "COBIT 2019 Foundation Certificate",
      questionCount: "75",
      duration: "2 hours",
      format: "Multiple choice; computer-based, online, remotely proctored",
      passingScore: "65%",
      delivery: "Online, remotely proctored",
      prerequisites: "None",
      status: "retiring",
      retirementDate: "Replaced by the COBIT 7 Foundation Certificate on 19 November 2026; last day to purchase the COBIT 2019 exam: 30 June 2027",
      officialCertificationUrl: "https://www.isaca.org/credentialing/cobit/cobit-foundation",
      officialExamUrl: "https://www.isaca.org/credentialing/cobit/cobit-foundation",
      domains: [
        { id: "d1", name: "Framework Introduction", weight: "12%" },
        { id: "d2", name: "Principles", weight: "13%" },
        { id: "d3", name: "Governance System and Components", weight: "30%" },
        { id: "d4", name: "Governance and Management Objectives", weight: "23%" },
        { id: "d5", name: "Performance Management", weight: "4%" },
        { id: "d6", name: "Designing a Tailored Governance System", weight: "7%" },
        { id: "d7", name: "Business Case", weight: "3%" },
        { id: "d8", name: "Implementation", weight: "8%" },
      ],
      sources: [
        { label: "ISACA: COBIT Foundation Certificate", url: "https://www.isaca.org/credentialing/cobit/cobit-foundation" },
        { label: "ISACA: Exam candidate guides", url: "https://www.isaca.org/credentialing/exam-candidate-guides" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "COBIT 2019 Foundation Practice Exams (450 Qs)",
      description:
        "COBIT 2019 Foundation practice exams covering all eight ISACA exam domains. ISACA moves to the COBIT 7 Foundation Certificate on 19 Nov 2026.",
    },
  },
  "comptia-cloud-plus-cv0-004": {
    description:
      "Practice exams for CompTIA Cloud+ (CV0-004), written to the official exam objectives: cloud architecture, deployment, operations, security, DevOps fundamentals and troubleshooting. Find your gaps before the 90-minute exam.",
    fullName: "CompTIA Cloud+",
    // Verified 2026-11-04 against the CompTIA Cloud+ certification page on comptia.org (exam details on the same page) and the CV0-004 exam objectives PDF version 1.2 (hosted by CompTIA Japan, comptia.jp).
    // Status: CV0-004 (V4) is current. CompTIA states retirement only as "usually three years after launch (estimated 2027)"; no firm date and no successor exam announced, so retirementDate omitted.
    // Not stated on the certification page, so omitted: delivery (test center / online). The objectives PDF leaves question count, length and passing score blank; those come from the certification page.
    // Domain names: certification page uses sentence case ("Cloud architecture"); objectives PDF title case. PDF wording used with the objective headings.
    exam: {
      officialName: "CompTIA Cloud+",
      examCode: "CV0-004",
      examVersion: "V4 (exam objectives version 1.2)",
      questionCount: "Maximum of 90",
      duration: "90 minutes",
      format: "Multiple-choice and performance-based questions",
      passingScore: "750 (on a scale of 100–900)",
      questionTypes: "Multiple-choice and performance-based",
      languages: ["English", "Japanese"],
      prerequisites: "None required. CompTIA recommends 2–3 years of hands-on experience as a systems administrator or cloud engineer; the objectives also recommend Network+ and Server+ or equivalent knowledge.",
      status: "current",
      launchDate: "2024-09-24",
      officialCertificationUrl: "https://www.comptia.org/en-us/certifications/cloud/",
      officialExamUrl: "https://www.comptia.jp/pdf/CompTIA%20Cloud%2B%20CV0-004%20Exam%20Objectives%20%281.2%29.pdf",
      domains: [
        {
          id: "d1",
          name: "Cloud Architecture",
          weight: "23%",
          objectives: [
            "1.1 Given a scenario, use the appropriate cloud service model.",
            "1.2 Explain concepts related to service availability.",
            "1.3 Explain cloud networking concepts.",
            "1.4 Compare and contrast storage resources and technologies.",
            "1.5 Explain the purpose of cloud-native design concepts.",
            "1.6 Compare and contrast containerization concepts.",
            "1.7 Compare and contrast virtualization concepts.",
            "1.8 Summarize cost considerations related to cloud usage.",
            "1.9 Explain the importance of database concepts.",
            "1.10 Compare and contrast methods for optimizing workloads using cloud resources.",
            "1.11 Identify evolving technologies in the cloud.",
          ],
        },
        {
          id: "d2",
          name: "Deployment",
          weight: "19%",
          objectives: [
            "2.1 Compare and contrast cloud deployment models.",
            "2.2 Given a scenario, implement appropriate deployment strategies.",
            "2.3 Summarize aspects of cloud migration.",
            "2.4 Given a scenario, use code to deploy and configure cloud resources.",
            "2.5 Given a set of requirements, provision the appropriate cloud resources.",
          ],
        },
        {
          id: "d3",
          name: "Operations",
          weight: "17%",
          objectives: [
            "3.1 Given a scenario, configure appropriate resources to achieve observability.",
            "3.2 Given a scenario, configure appropriate scaling approaches.",
            "3.3 Given a scenario, use appropriate backup and recovery methods.",
            "3.4 Given a scenario, manage the life cycle of cloud resources.",
          ],
        },
        {
          id: "d4",
          name: "Security",
          weight: "19%",
          objectives: [
            "4.1 Explain vulnerability management concepts.",
            "4.2 Compare and contrast aspects of compliance and regulation.",
            "4.3 Given a scenario, implement identity and access management.",
            "4.4 Given a scenario, apply security best practices.",
            "4.5 Given a scenario, apply security controls in the cloud.",
            "4.6 Given a scenario, monitor suspicious activities to identify common attacks.",
          ],
        },
        {
          id: "d5",
          name: "DevOps Fundamentals",
          weight: "10%",
          objectives: [
            "5.1 Explain source control concepts.",
            "5.2 Explain concepts related to continuous integration/continuous deployment (CI/CD) pipelines.",
            "5.3 Explain concepts related to integration of systems.",
            "5.4 Explain the importance of tools used in DevOps environments.",
          ],
        },
        {
          id: "d6",
          name: "Troubleshooting",
          weight: "12%",
          objectives: [
            "6.1 Given a scenario, troubleshoot deployment issues.",
            "6.2 Given a scenario, troubleshoot network issues.",
            "6.3 Given a scenario, troubleshoot security issues.",
          ],
        },
      ],
      sources: [
        { label: "CompTIA: Cloud+ certification", url: "https://www.comptia.org/en-us/certifications/cloud/" },
        { label: "CompTIA Japan: Cloud+ CV0-004 exam objectives 1.2 (PDF)", url: "https://www.comptia.jp/pdf/CompTIA%20Cloud%2B%20CV0-004%20Exam%20Objectives%20%281.2%29.pdf" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CompTIA Cloud+ (CV0-004) Practice Exams",
      description: "Practice exams for CompTIA Cloud+ (CV0-004): cloud architecture, deployment, operations, security, DevOps fundamentals and troubleshooting.",
    },
  },
  "comptia-secai-plus-cy0-001": {
    description:
      "Practice exams for CompTIA SecAI+ (CY0-001), organised by the four exam domains: basic AI concepts related to cybersecurity, securing AI systems, AI-assisted security, and AI governance, risk and compliance. The course is available in English and German.",
    fullName: "CompTIA SecAI+",
    // Verified 2026-11-04 against the CompTIA SecAI+ certification page on comptia.org (exam details on the same page).
    // The page links no objectives PDF, only an objectives summary, so objectives are omitted. Delivery (test center / online) not stated on the page, omitted.
    // Retirement only stated as "3 years after launch" (estimated); no date announced, so retirementDate omitted. No successor version announced.
    // Note: exam languages are English and Japanese only; the German course is practice material, the exam itself is not offered in German.
    exam: {
      officialName: "CompTIA SecAI+",
      examCode: "CY0-001",
      examVersion: "V1",
      questionCount: "Maximum of 60",
      duration: "60 minutes",
      format: "Multiple-choice and performance-based questions",
      passingScore: "600 (on a scale of 100–900)",
      questionTypes: "Multiple-choice and performance-based",
      languages: ["English", "Japanese"],
      prerequisites:
        "None required. CompTIA recommends 3–4 years in IT and 2+ years of hands-on cybersecurity experience; Security+, CySA+, PenTest+ or equivalent recommended.",
      status: "current",
      launchDate: "2026-02-17",
      officialCertificationUrl: "https://www.comptia.org/en-us/certifications/secai/",
      officialExamUrl: "https://www.comptia.org/en-us/certifications/secai/",
      domains: [
        { id: "d1", name: "Basic AI concepts related to cybersecurity", weight: "17%" },
        { id: "d2", name: "Securing AI systems", weight: "40%" },
        { id: "d3", name: "AI-assisted security", weight: "24%" },
        { id: "d4", name: "AI governance, risk, and compliance", weight: "19%" },
      ],
      sources: [
        { label: "CompTIA: SecAI+ certification", url: "https://www.comptia.org/en-us/certifications/secai/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "CompTIA SecAI+ (CY0-001) Practice Exams",
      description:
        "CompTIA SecAI+ (CY0-001) practice exams in English and German: AI concepts, securing AI systems, AI-assisted security and AI governance.",
    },
  },
  "dp-750": {
    description:
      "Practice exams for Microsoft DP-750: Implementing Data Engineering Solutions Using Azure Databricks, written to the skills measured as of 11 March 2026: compute, Unity Catalog security and governance, data processing and Lakeflow Jobs.",
    fullName: "Microsoft Certified: Azure Databricks Data Engineer Associate",
    // Verified 2026-11-04 against Microsoft Learn (DP-750 study guide, Azure Databricks Data Engineer Associate certification page).
    // The exam page /exams/dp-750/ could not be retrieved; duration and languages come from the certification page.
    // Not published on the pages fetched, so omitted: question count, question types.
    exam: {
      officialName: "Exam DP-750: Implementing Data Engineering Solutions Using Azure Databricks",
      examCode: "DP-750",
      examVersion: "Skills measured as of 11 March 2026",
      duration: "120 minutes",
      passingScore: "700 or greater",
      languages: ["English", "Japanese", "Chinese (Simplified)", "Chinese (Traditional)", "Korean", "German", "French", "Italian", "Portuguese (Brazil)", "Spanish"],
      delivery: "Proctored exam; may include interactive components",
      prerequisites: "No formal prerequisites. Microsoft expects expertise in integrating and modeling data, building and deploying pipelines, and maintaining workloads in Azure Databricks, plus data quality and governance in Unity Catalog.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/implementing-data-engineering-solutions-using-azure-databricks/",
      domains: [
        { id: "d1", name: "Set up and configure an Azure Databricks environment", weight: "15–20%", objectives: ["Select and configure compute in a workspace", "Create and organize objects in Unity Catalog"] },
        { id: "d2", name: "Secure and govern Unity Catalog objects", weight: "15–20%", objectives: ["Secure Unity Catalog objects", "Govern Unity Catalog objects"] },
        { id: "d3", name: "Prepare and process data", weight: "30–35%", objectives: ["Design and implement data modeling in Unity Catalog", "Ingest data into Unity Catalog", "Cleanse, transform, and load data into Unity Catalog", "Implement and manage data quality constraints in Unity Catalog"] },
        { id: "d4", name: "Deploy and maintain data pipelines and workloads", weight: "30–35%", objectives: ["Design and implement data pipelines", "Implement Lakeflow Jobs", "Implement development lifecycle processes in Azure Databricks", "Monitor, troubleshoot, and optimize workloads in Azure Databricks"] },
      ],
      sources: [
        { label: "Microsoft Learn: DP-750 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-750" },
        { label: "Microsoft Learn: Azure Databricks Data Engineer Associate certification", url: "https://learn.microsoft.com/en-us/credentials/certifications/implementing-data-engineering-solutions-using-azure-databricks/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "DP-750 Practice Exams: Azure Databricks Data Engineer",
      description: "DP-750 practice exams for the March 2026 skills: Databricks compute, Unity Catalog security and governance, ingestion, transformation, Lakeflow Jobs.",
    },
  },
  "google-cloud-professional-cloud-architect": {
    description:
      "Practice exams for the Google Cloud Professional Cloud Architect, organised by the six exam guide sections: solution design and planning, provisioning, security and compliance, process analysis, implementation and operations excellence.",
    fullName: "Google Cloud Professional Cloud Architect",
    // Verified 2026-11-04 against the Google Cloud certification page (cloud.google.com) and the official exam guide PDF (services.google.com), which carries no version or date.
    // Status: current. The certification page says only "This exam was updated to reflect recent branding changes. Refer to the exam guide to review product names used on the exam." (no date). No new exam version or beta announced. No exam code exists.
    // Not published by Google, so omitted: passing score.
    // Other official facts (no schema field): each exam includes 2 case studies, and case study questions make up 20-30% of the exam. The exam guide lists 4 case studies: Altostrat Media, Cymbal Retail, EHR Healthcare and KnightMotives Automotive. Fee US$200 (plus tax). Certification valid 2 years; a 1-hour, 25-question renewal exam (US$100) is offered.
    exam: {
      officialName: "Professional Cloud Architect",
      questionCount: "50–60",
      duration: "2 hours",
      format: "Multiple choice and multiple select, including case study questions (20–30% of the exam)",
      questionTypes: "Multiple choice and multiple select",
      languages: ["English", "Japanese"],
      delivery: "Online-proctored from a remote location, or onsite-proctored at a testing center",
      prerequisites:
        "None. Recommended: 3+ years of industry experience, including 1+ years designing and managing solutions using Google Cloud.",
      status: "current",
      officialCertificationUrl: "https://cloud.google.com/learn/certification/cloud-architect",
      officialExamUrl: "https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf",
      domains: [
        {
          id: "d1",
          name: "Designing and planning a cloud solution architecture",
          weight: "~25%",
          objectives: [
            "1.1 Designing a cloud solution infrastructure that meets business requirements",
            "1.2 Designing a cloud solution infrastructure that meets technical requirements",
            "1.3 Designing network, storage, and compute resources",
            "1.4 Creating a migration plan (i.e., documents and architectural diagrams)",
            "1.5 Envisioning future solution improvements",
          ],
        },
        {
          id: "d2",
          name: "Managing and provisioning a cloud solution infrastructure",
          weight: "~17.5%",
          objectives: [
            "2.1 Configuring network topologies",
            "2.2 Configuring individual storage systems",
            "2.3 Configuring compute systems",
            "2.4 Leveraging Gemini Enterprise Agent Platform for end-to-end ML workflows",
            "2.5 Configuring prebuilt solutions or APIs with Agent Platform",
          ],
        },
        {
          id: "d3",
          name: "Designing for security and compliance",
          weight: "~17.5%",
          objectives: ["3.1 Designing for security", "3.2 Designing for compliance"],
        },
        {
          id: "d4",
          name: "Analyzing and optimizing technical and business processes",
          weight: "~15%",
          objectives: ["4.1 Analyzing and defining technical processes", "4.2 Analyzing and defining business processes"],
        },
        {
          id: "d5",
          name: "Managing implementation",
          weight: "~12.5%",
          objectives: [
            "5.1 Advising development and operation teams to ensure the successful deployment of the solution",
            "5.2 Interacting with Google Cloud programmatically",
          ],
        },
        {
          id: "d6",
          name: "Ensuring solution and operations excellence",
          weight: "~12.5%",
          objectives: [
            "6.1 Understanding the principles and recommendations of the operational excellence pillar of the Google Cloud Well-Architected Framework",
            "6.2 Familiarity with Google Cloud Observability solutions",
            "6.3 Deployment and release management",
            "6.4 Assisting with the support of deployed solutions",
            "6.5 Evaluating quality control measures",
            "6.6 Ensuring the reliability of solutions in production (e.g., chaos engineering, penetration testing, and load testing)",
          ],
        },
      ],
      sources: [
        { label: "Google Cloud: Professional Cloud Architect", url: "https://cloud.google.com/learn/certification/cloud-architect" },
        { label: "Google Cloud: Professional Cloud Architect exam guide (PDF)", url: "https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "Google Professional Cloud Architect Practice Exams",
      description:
        "Practice exams for Google Cloud Professional Cloud Architect: solution design, provisioning, security, processes, implementation and operations.",
    },
  },
  "google-cloud-professional-cloud-security-engineer": {
    description:
      "Practice exams for the Google Cloud Professional Cloud Security Engineer, organised by the five exam guide sections: configuring access, securing communications and boundary protection, data protection (including securing AI workloads), operations, and compliance.",
    fullName: "Google Cloud Professional Cloud Security Engineer",
    // Verified 2026-11-04 against the Google Cloud certification page (cloud.google.com) and the official exam guide PDF (services.google.com), which carries no version or date.
    // The certification page mentions no new version, beta or updated exam guide. Passing score not published by Google, omitted. No exam code exists.
    exam: {
      officialName: "Professional Cloud Security Engineer",
      questionCount: "50–60",
      duration: "2 hours",
      format: "Multiple choice",
      languages: ["English", "Japanese"],
      delivery: "Online-proctored from a remote location, or onsite-proctored at a testing center",
      prerequisites:
        "None. Recommended: 3+ years of industry experience, including more than 1 year designing and managing solutions using Google Cloud.",
      status: "current",
      officialCertificationUrl: "https://cloud.google.com/learn/certification/cloud-security-engineer",
      officialExamUrl: "https://services.google.com/fh/files/misc/professional_cloud_security_engineer_exam_guide_english.pdf",
      domains: [
        {
          id: "d1",
          name: "Configuring access",
          weight: "~25%",
          objectives: [
            "1.1 Managing Cloud Identity",
            "1.2 Managing service accounts",
            "1.3 Managing authentication",
            "1.4 Managing and implementing authorization controls",
            "1.5 Defining the resource hierarchy",
          ],
        },
        {
          id: "d2",
          name: "Securing communications and establishing boundary protection",
          weight: "~22%",
          objectives: [
            "2.1 Designing and configuring perimeter security",
            "2.2 Configuring boundary segmentation",
            "2.3 Establishing private connectivity",
          ],
        },
        {
          id: "d3",
          name: "Ensuring data protection",
          weight: "~23%",
          objectives: [
            "3.1 Protecting sensitive data and preventing data loss",
            "3.2 Managing encryption at rest, in transit, and in use",
            "3.3 Securing AI workloads",
          ],
        },
        {
          id: "d4",
          name: "Managing operations",
          weight: "~19%",
          objectives: [
            "4.1 Automating infrastructure and application security",
            "4.2 Configuring logging, monitoring, and detection",
          ],
        },
        {
          id: "d5",
          name: "Supporting compliance requirements",
          weight: "~11%",
          objectives: [
            "5.1 Adhering to regulatory and industry standards requirements for the cloud",
          ],
        },
      ],
      sources: [
        { label: "Google Cloud: Professional Cloud Security Engineer", url: "https://cloud.google.com/learn/certification/cloud-security-engineer" },
        { label: "Google Cloud: Professional Cloud Security Engineer exam guide (PDF)", url: "https://services.google.com/fh/files/misc/professional_cloud_security_engineer_exam_guide_english.pdf" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "Google Cloud Security Engineer Practice Exams",
      description:
        "Practice exams for Google Cloud Professional Cloud Security Engineer: access, boundary protection, data protection, operations and compliance.",
    },
  },
  "isaca-aair": {
    description:
      "Practice exams for ISACA Advanced in AI Risk (AAIR), written to the official exam content outline: AI risk governance and framework integration, AI life cycle risk management, and AI risk program management.",
    fullName: "ISACA Advanced in AI Risk (AAIR)",
    // Verified 2026-11-04 against the ISACA AAIR certification page and the AAIR Exam Content Outline page on isaca.org.
    // Status: current; ISACA states registration and prep materials are available. No successor or retirement announced.
    // NAMING: the AAIR certification page lists the areas as "AI Enterprise Governance", "AI Life Cycle Risk Management" and "AI Risk Program Management"; the exam content outline (used below, with weights) names domain 1 "AI Risk Governance and Framework Integration".
    // UNVERIFIED and omitted: exam duration, passing score/scale and exam languages (not on the certification page or outline page; the AAIR Exam Candidate Guide PDF and ISACA general candidate guide could not be fetched, robots-blocked). Outline effective date not stated.
    // Note: exam fee USD 459 (member) / USD 599 (non-member); USD 50 application fee after passing; apply within 5 years of passing (certification page).
    exam: {
      officialName: "Advanced in AI Risk (AAIR)",
      examCode: "AAIR",
      questionCount: "90 questions",
      format: "Computer-based exam",
      delivery: "PSI testing center or remote proctoring (testing center required in India, Mainland China and Hong Kong)",
      prerequisites: "Hold an eligible certification or designation, such as CISA, CISM, CRISC, CGEIT, CDPSE, CISSP, CIA, CGRC or PMI-RMP (full list on the ISACA page), plus proven experience in IT risk or advisory roles.",
      status: "current",
      officialCertificationUrl: "https://www.isaca.org/credentialing/aair",
      officialExamUrl: "https://www.isaca.org/credentialing/aair/aair-exam-content-outline",
      domains: [
        { id: "d1", name: "AI Risk Governance and Framework Integration", weight: "37%", objectives: ["1A AI Models, Frameworks, Strategies, and Use Cases", "1B AI Organizational Processes and Alignment", "1C AI Ownership, Oversight, and Accountability", "1D AI Policies, Procedures, and Organizational Training", "1E AI Regulatory Compliance and Legal Considerations", "1F AI Trustworthiness, Ethical and Societal Implications (e.g., ESG)"] },
        { id: "d2", name: "AI Life Cycle Risk Management", weight: "21%", objectives: ["2A AI Design, Development/Procurement, and Documentation", "2B AI Model Training, Testing, and Validation", "2C AI Implementation, Maintenance, and Decommissioning", "2D AI Data and Asset Management"] },
        { id: "d3", name: "AI Risk Program Management", weight: "42%", objectives: ["3A AI Risk Scenario Identification and Assessment (e.g., threats, vulnerabilities, and attacks)", "3B AI Risk Treatment Strategies", "3C AI Controls Management (e.g., Evaluation, Selection, Validation)", "3D AI Risk Metrics, Monitoring, and Reporting", "3E AI Supply Chain Risk Management (e.g., third party resources)", "3F AI Incident Response, BIA, Business Continuity, and Disaster Recovery"] },
      ],
      sources: [
        { label: "ISACA: AAIR Certification", url: "https://www.isaca.org/credentialing/aair" },
        { label: "ISACA: AAIR Exam Content Outline", url: "https://www.isaca.org/credentialing/aair/aair-exam-content-outline" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "AAIR Practice Exams: ISACA Advanced in AI Risk",
      description: "AAIR practice exams for ISACA Advanced in AI Risk: AI risk governance, AI life cycle risk management and AI risk program management, by domain.",
    },
  },
  "iso-27001-lead-implementer": {
    description:
      "Practice exams for the PECB ISO/IEC 27001 Lead Implementer exam, covering the seven competency domains, from ISMS concepts and requirements to implementation, monitoring, improvement and audit readiness. Available in English and German.",
    fullName: "PECB Certified ISO/IEC 27001 Lead Implementer",
    // Verified 2026-11-04 against pecb.com: ISO/IEC 27001 Lead Implementer course page, Candidate Handbook (multiple-choice, version 1.5, ©2026), ISO/IEC 27001 certification scheme (version 4.7, dated 2025-12-17).
    // Certification body: PECB (both Udemy course titles name PECB).
    // Duration (3 hours) comes from the certification scheme PDF; the course page and handbook do not state it.
    // Exam languages: not stated on the pages read. PECB's "List of PECB Exams" (help.pecb.com) could not be fetched, so languages are omitted.
    // The handbook does not name the edition, but the scheme references ISO/IEC 27001:2022 (93 Annex A controls in the handbook match it).
    // Domain names as on the PECB course page (Lead Implementer competency domains). Domain weights are derived from the handbook's question count per domain (e.g. 15 of 80 = 18.75%).
    exam: {
      officialName: "PECB Certified ISO/IEC 27001 Lead Implementer",
      examVersion: "Candidate Handbook version 1.5; certification scheme version 4.7 (ISO/IEC 27001:2022)",
      questionCount: "80",
      duration: "3 hours",
      format: "Multiple choice, open book (hard copy of ISO/IEC 27001, training course materials and personal notes allowed)",
      passingScore: "70%",
      questionTypes: "Multiple-choice questions with three options; standalone and scenario-based (five questions per scenario)",
      delivery: "Online via the PECB Exams application (remotely invigilated), or paper-based at a session with a PECB-approved invigilator",
      prerequisites:
        "None to take the exam. The Lead Implementer credential requires 5 years of professional experience (2 in information security management), 300 hours of ISMS project activity and signing the PECB Code of Ethics; candidates with less experience can hold the Provisional Implementer or Implementer credential.",
      status: "current",
      officialCertificationUrl: "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001/iso-iec-27001-lead-implementer",
      officialExamUrl: "https://pecb.com/pdf/candidate-handbooks/pecb-candidate-handbook-iso-27001-lead-implementer-mc.pdf",
      domains: [
        { id: "d1", name: "Fundamental principles and concepts of an information security management system", weight: "18.75%" },
        { id: "d2", name: "Information security management system requirements", weight: "15%" },
        { id: "d3", name: "Planning of an ISMS implementation based on ISO/IEC 27001", weight: "22.5%" },
        { id: "d4", name: "Implementation of an ISMS based on ISO/IEC 27001", weight: "17.5%" },
        { id: "d5", name: "Monitoring and measurement of an ISMS based on ISO/IEC 27001", weight: "12.5%" },
        { id: "d6", name: "Continual improvement of an ISMS based on ISO/IEC 27001", weight: "7.5%" },
        { id: "d7", name: "Preparation for an ISMS certification audit", weight: "6.25%" },
      ],
      sources: [
        { label: "PECB: ISO/IEC 27001 Lead Implementer", url: "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001/iso-iec-27001-lead-implementer" },
        { label: "PECB: ISO/IEC 27001 Lead Implementer Candidate Handbook (PDF)", url: "https://pecb.com/pdf/candidate-handbooks/pecb-candidate-handbook-iso-27001-lead-implementer-mc.pdf" },
        { label: "PECB: ISO/IEC 27001 certification scheme (PDF)", url: "https://pecb.com/pdf/brochures/isoiec-27001-certification-scheme.pdf" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "PECB ISO 27001 Lead Implementer Practice Exams",
      description:
        "PECB ISO/IEC 27001 Lead Implementer practice exams in English and German, covering all seven competency domains of the 80-question exam.",
    },
  },
  "iso-iec-42001-foundation": {
    description:
      "Practice exams for the PECB ISO/IEC 42001 Foundation exam, covering the fundamental principles and concepts of an artificial intelligence management system (AIMS) and the AIMS requirements of ISO/IEC 42001.",
    fullName: "PECB ISO/IEC 42001 Foundation (AI Management Systems)",
    // Verified 2026-11-04 against the PECB ISO/IEC 42001 Foundation course page, the PECB one-page brochure (exam duration, domains), the PECB eLearning brochure (online exam via PECB Exams) and PECB Exam Rules and Policies (Foundation exams are multiple choice, closed book).
    // Status: current; no successor or retirement noted by PECB.
    // Question count (40, three options each), passing score (70%) and per-domain question counts (15 and 25, giving 37.5% and 62.5%) are from the PECB ISO/IEC 42001 Foundation Candidate Handbook.
    // UNVERIFIED and omitted: exam languages (PECB points to its "List of PECB Exams" page, which could not be fetched). The course page lists English sessions and some French sessions, but that is training language, not a stated exam language list.
    // Note: credential is "PECB Certificate Holder in ISO/IEC 42001 Foundation" (pass the exam and sign the PECB Code of Ethics). One free retake within 12 months for course participants. Course is 2 days, 14 CPD credits.
    exam: {
      officialName: "PECB Certificate Holder in ISO/IEC 42001 Foundation",
      questionCount: "40",
      duration: "1 hour",
      format: "Multiple choice, closed book",
      passingScore: "70%",
      questionTypes: "Multiple-choice questions with three options",
      delivery: "Online via the PECB Exams application with remote invigilation, or at the end of PECB classroom or live online training",
      prerequisites: "None. No professional, audit or project experience required.",
      status: "current",
      officialCertificationUrl: "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001/iso-iec-42001-foundation",
      officialExamUrl: "https://pecb.com/pdf/candidate-handbooks/pecb-candidate-handbook-iso-iec-42001-foundation.pdf",
      domains: [
        { id: "d1", name: "Fundamental principles and concepts of an artificial intelligence management system (AIMS)", weight: "37.5%" },
        { id: "d2", name: "Artificial intelligence management system (AIMS)", weight: "62.5%" },
      ],
      sources: [
        { label: "PECB: ISO/IEC 42001 Foundation", url: "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001/iso-iec-42001-foundation" },
        { label: "PECB: ISO/IEC 42001 Foundation Candidate Handbook (PDF)", url: "https://pecb.com/pdf/candidate-handbooks/pecb-candidate-handbook-iso-iec-42001-foundation.pdf" },
        { label: "PECB: ISO/IEC 42001 Foundation brochure (PDF)", url: "https://pecb.com/pdf/brochures/1/iso-iec-42001-foundation_1p.pdf" },
        { label: "PECB: ISO/IEC 42001 Foundation eLearning brochure (PDF)", url: "https://pecb.com/pdf/brochures/iso-iec-42001-foundation-elearning.pdf" },
        { label: "PECB: Exam Rules and Policies", url: "https://pecb.com/en/exam-rules-and-policies" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ISO/IEC 42001 Foundation Practice Exams (PECB AIMS)",
      description: "Six ISO/IEC 42001 Foundation practice exams for the PECB AIMS exam: AI management system principles, concepts and ISO/IEC 42001 requirements.",
    },
  },
  "istqb-ct-ai": {
    description:
      "English and German practice exams for the ISTQB Certified Tester AI Testing (CT-AI) v2.0 syllabus, covering AI quality characteristics, machine learning, testing generative AI and LLMs, input data testing and model testing for ML systems.",
    fullName: "ISTQB Certified Tester AI Testing (CT-AI) v2.0",
    // Verified 2026-11-04 against istqb.org: CT-AI certification page, CT-AI v2.0 FAQ (istqb.org/help/ct-ai-v2/), CT-AI v2.0 syllabus PDF (Version 2.0, "Release for GA" 2026/04/17), ISTQB news (CT-AI v2.0 released 21 April 2026) and Exam Structures and Rules v1.2 (2 May 2025).
    // Status: v2.0 is the current version. CT-AI v1.0 is retiring: English training and exams (including retakes) until 21 April 2027, other languages until 21 October 2027. v1.0 certificates remain valid; there is no bridging exam.
    // Not published on the official pages, so omitted: list of exam languages, per-chapter exam weights, delivery method (exams are run by ISTQB Member Boards and Exam Providers).
    // Domain weights omitted. For reference only, the syllabus gives minimum training time per chapter: Ch1 120 min, Ch2 45, Ch3 375, Ch4 195, Ch5 180, Ch6 225, Ch7 30 (these are not exam weights).
    // Pass mark: certification page says 29 of 44 points; FAQ says 65%. Points value used.
    // Hands-on exercise headings in the syllabus (3.1.3, 3.2.2, 3.3.2, 3.3.3, 3.4.2, 4.2.3, 5.1.7, 6.1.6) left out of the objectives lists.
    exam: {
      officialName: "ISTQB Certified Tester AI Testing (CT-AI) v2.0",
      examCode: "CT-AI",
      examVersion: "Syllabus v2.0 (released for GA 17 April 2026)",
      questionCount: "40",
      duration: "60 minutes (plus 25% for candidates taking the exam in a non-native language)",
      format: "Multiple-choice exam",
      passingScore: "29 of 44 points (65%)",
      questionTypes: "Multiple choice",
      delivery: "Through ISTQB Member Boards and accredited Exam Providers",
      prerequisites: "ISTQB Certified Tester Foundation Level (CTFL)",
      status: "current",
      officialCertificationUrl: "https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/",
      officialExamUrl: "https://istqb.org/help/ct-ai-v2/",
      domains: [
        {
          id: "d1",
          name: "Introduction to Artificial Intelligence",
          objectives: [
            "1.1.1 AI-Based and Conventional Systems",
            "1.1.2 Narrow AI, General AI, and Super AI",
            "1.1.3 Different Types of AI Technologies",
            "1.1.4 Generative AI",
            "1.1.5 Hardware for Machine Learning Systems",
            "1.1.6 Development and Hosting of AI Models",
            "1.1.7 Machine Learning Development Frameworks",
            "1.1.8 Regulations and Standards for AI",
          ],
        },
        {
          id: "d2",
          name: "Quality Characteristics for AI-Based Systems",
          objectives: [
            "2.1.1 AI-Specific Quality Characteristics",
            "2.1.2 AI and Safety",
            "2.2.1 Acceptance Criteria for AI-Based Systems",
          ],
        },
        {
          id: "d3",
          name: "Machine Learning",
          objectives: [
            "3.1.1 Different Forms of Machine Learning",
            "3.1.2 Machine Learning Workflow",
            "3.1.4 Pretrained Models, Fine-Tuning, and Retrieval-Augmented Generation",
            "3.2.1 Activities in Data Preparation",
            "3.2.3 Training, Validation, and Test Datasets",
            "3.3.1 Calculation of Machine Learning Functional Performance Metrics",
            "3.4.1 Structure and Working of a Deep Neural Network",
            "3.4.3 Coverage Measures for Neural Networks",
          ],
        },
        {
          id: "d4",
          name: "Testing AI-Based Systems",
          objectives: [
            "4.1.1 Locked and Adaptive AI-Based Systems",
            "4.1.2 Rationale for a Statistical Approach to Testing AI-Based Systems",
            "4.1.3 Test Oracles for AI-Based Systems",
            "4.2.1 Testing Generative AI",
            "4.2.2 Red Teaming",
            "4.3.1 Test Levels for Machine Learning Systems",
            "4.3.2 Risk-Based Testing of Machine Learning Systems",
          ],
        },
        {
          id: "d5",
          name: "Input Data Testing for Machine Learning Systems",
          objectives: [
            "5.1.1 Input Data Risks and Mitigations",
            "5.1.2 Testing for Bias",
            "5.1.3 Data Pipeline Testing",
            "5.1.4 Testing for Data Representativeness",
            "5.1.5 Dataset Constraint Testing",
            "5.1.6 Label Correctness Testing",
          ],
        },
        {
          id: "d6",
          name: "Model Testing for Machine Learning Systems",
          objectives: [
            "6.1.1 Machine Learning Model Risks and Mitigations",
            "6.1.2 Machine Learning Model Documentation and Review",
            "6.1.3 ML Functional Performance Testing of Probabilistic Machine Learning Systems",
            "6.1.4 Adversarial Testing of Machine Learning Systems",
            "6.1.5 Metamorphic Testing",
            "6.1.7 Drift Testing",
            "6.1.8 Testing for Overfitting and Underfitting",
            "6.1.9 A/B Testing",
            "6.1.10 Back-to-Back Testing",
          ],
        },
        {
          id: "d7",
          name: "Machine Learning Development Testing",
          objectives: [
            "7.1.1 Machine Learning Development Risks and Mitigations",
            "7.1.2 Machine Learning System Deployment Testing",
          ],
        },
      ],
      sources: [
        { label: "ISTQB: Certified Tester AI Testing (CT-AI) certification page", url: "https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/" },
        { label: "ISTQB: CT-AI v2.0 FAQ", url: "https://istqb.org/help/ct-ai-v2/" },
        { label: "ISTQB: CT-AI Syllabus v2.0 (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=9558" },
        { label: "ISTQB: Exam Structures and Rules v1.2 (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=3829" },
        { label: "ISTQB News: CT-AI Syllabus Version 2.0 released (21 April 2026)", url: "https://istqb.org/news/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ISTQB CT-AI v2.0 Practice Exams: AI Testing",
      description: "English and German practice exams for ISTQB CT-AI v2.0: AI quality, machine learning, generative AI and LLM testing, data and model testing.",
    },
  },
  "istqb-ctal-tm": {
    description:
      "Practice exams for the ISTQB Certified Tester Advanced Level Test Management (CTAL-TM) v3.0 syllabus, covering test process and context, risk-based testing, test strategy, metrics, estimation, defect management and the test team.",
    fullName: "ISTQB Certified Tester Advanced Level Test Management (CTAL-TM) v3.0",
    // Verified 2026-11-04 against istqb.org: CTAL-TM v3.0 certification page, CTAL-TM v3.0 syllabus PDF (V3.0, released by the ISTQB General Assembly on 3 May 2024), Exam Structures and Rules v1.2 (2 May 2025) and the ISTQB news page.
    // Status: v3.0 is current. No successor version or retirement is announced on istqb.org as of 4 Nov 2026 (latest Advanced Level release news is CTAL-AT v2.0 on 6 May 2026, not Test Management).
    // Not published on the official pages, so omitted: exam languages, chapter exam weights, K-level distribution (in the separate Exam Structures & Rules Tables), delivery method (run by Member Boards and Exam Providers).
    // For reference only, the syllabus gives training time per chapter: Ch1 750 min, Ch2 390 min, Ch3 225 min (not exam weights).
    // Other official facts (no schema field): certificate valid for life, no renewal; two official sample exams (A and B).
    exam: {
      officialName: "ISTQB Certified Tester Advanced Level Test Management (CTAL-TM) v3.0",
      examCode: "CTAL-TM",
      examVersion: "Syllabus v3.0 (released 3 May 2024)",
      questionCount: "50",
      duration: "120 minutes (plus 25% for candidates taking the exam in a non-native language)",
      format: "Multiple-choice exam",
      passingScore: "58 of 88 points",
      questionTypes: "Multiple choice",
      delivery: "Through ISTQB Member Boards and accredited Exam Providers",
      prerequisites: "ISTQB Certified Tester Foundation Level (v4.0 or an earlier version) and sufficient practical experience, as defined by the Member Board or Exam Provider",
      status: "current",
      officialCertificationUrl: "https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/",
      domains: [
        {
          id: "d1",
          name: "Managing the Test Activities",
          objectives: [
            "1.1 The Test Process",
            "1.2 The Context of Testing",
            "1.3 Risk-Based Testing",
            "1.4 The Project Test Strategy",
            "1.5 Improving the Test Process",
            "1.6 Test Tools",
          ],
        },
        {
          id: "d2",
          name: "Managing the Product",
          objectives: [
            "2.1 Test Metrics",
            "2.2 Test Estimation",
            "2.3 Defect Management",
          ],
        },
        {
          id: "d3",
          name: "Managing the Team",
          objectives: [
            "3.1 The Test Team",
            "3.2 Stakeholder Relationships",
          ],
        },
      ],
      sources: [
        { label: "ISTQB: CTAL-TM v3.0 certification page", url: "https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/" },
        { label: "ISTQB: CTAL-TM Syllabus v3.0 (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=3445" },
        { label: "ISTQB: Exam Structures and Rules v1.2 (PDF)", url: "https://istqb.org/?sdm_process_download=1&download_id=3829" },
        { label: "ISTQB News", url: "https://istqb.org/news/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "ISTQB CTAL-TM v3.0 Practice Exams: Test Management",
      description: "Practice exams for ISTQB CTAL-TM v3.0: test process, risk-based testing, test strategy, metrics, estimation, defect management and the test team.",
    },
  },
  "mo-200": {
    description:
      "Practice exams for Microsoft Office Specialist MO-200: Microsoft Excel (Office 2019): worksheets and workbooks, cells and ranges, tables, formulas and functions, and charts. Certiport lists Office 2019 as a previous MOS version.",
    fullName: "Microsoft Office Specialist: Excel Associate (Office 2019)",
    // Verified 2026-11-04 against Microsoft Learn (MO-200 exam page, MOS Excel Associate (Office 2019) certification page) and Certiport (Office 2019 MOS page).
    // Status: Microsoft Learn shows "Retirement date: none"; Certiport calls Office 2019 "a previous version" of the MOS program and points to Microsoft 365 Apps as current. No retirement date found.
    // Weights come from the Microsoft Learn exam page (the certification page lists the areas without weights).
    // Languages: the certification page lists Vietnamese (Vietnam) in addition to the exam page list; the certification page is used.
    // Blocked/not readable: the MO-200 skills outline PDF (arch-center.azureedge.net) and Certiport objective domain and exam-languages pages, so no sub-objectives are given.
    // Not published on the pages fetched, so omitted: passing score, question count.
    exam: {
      officialName: "Exam MO-200: Microsoft Excel (Office 2019)",
      examCode: "MO-200",
      duration: "50 minutes",
      format: "Live-in-the-Application (LITA) testing (Certiport)",
      languages: ["English", "English (Malaysia)", "Dutch", "French", "German", "Indonesian (Indonesia)", "Korean", "Portuguese (Brazil)", "Spanish", "Italian", "Russian", "Japanese", "Polish", "Greek (Greece)", "Chinese (Simplified)", "Chinese (Traditional)", "Arabic (Saudi Arabia)", "Vietnamese (Vietnam)"],
      delivery: "Proctored; scheduled through Certiport (Pearson VUE)",
      prerequisites: "No formal prerequisites. Certification renewal frequency: 60 months.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/mos-excel-2019/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/mo-200/",
      domains: [
        { id: "d1", name: "Manage worksheets and workbooks", weight: "10–15%" },
        { id: "d2", name: "Manage data cells and ranges", weight: "20–25%" },
        { id: "d3", name: "Manage tables and table data", weight: "15–20%" },
        { id: "d4", name: "Perform operations by using formulas and functions", weight: "20–25%" },
        { id: "d5", name: "Manage charts", weight: "20–25%" },
      ],
      sources: [
        { label: "Microsoft Learn: Exam MO-200", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/mo-200/" },
        { label: "Microsoft Learn: MOS Excel Associate (Office 2019)", url: "https://learn.microsoft.com/en-us/credentials/certifications/mos-excel-2019/" },
        { label: "Certiport: Microsoft Office Specialist Office 2019", url: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Certify/Office-2019.aspx" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "MO-200 Practice Exams: MOS Excel Associate (2019)",
      description: "MO-200 practice exams for MOS Excel Associate (Office 2019): worksheets and workbooks, cells and ranges, tables, formulas and functions, charts.",
    },
  },
  "mo-210": {
    description:
      "Practice exams for Microsoft Office Specialist MO-210: Excel Associate (Microsoft 365 Apps): worksheets and workbooks, cells and ranges, tables, formulas and functions, and charts. The exam takes 50 minutes and is delivered through Certiport.",
    fullName: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)",
    // Verified 2026-11-04 against Microsoft Learn (MOS Excel Associate (Microsoft 365 Apps) certification page, MO-210 exam page) and Certiport (Microsoft 365 Apps MOS page).
    // Status: no retirement notice on Microsoft Learn or Certiport; Certiport presents Microsoft 365 Apps as the current MOS version.
    // Microsoft Learn lists the five skill areas without weights. The "Exam MO-210 skills outline" link on Learn points to an unrelated PDF (security operations analyst), and the Certiport objective domain page could not be fetched, so no weights or sub-objectives are given.
    // Not published on the pages fetched, so omitted: passing score, question count.
    exam: {
      officialName: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)",
      examCode: "MO-210",
      duration: "50 minutes",
      format: "Live-in-the-Application (LITA) testing (Certiport)",
      languages: ["English", "Arabic (Saudi Arabia)", "Chinese (Simplified)", "Chinese (Traditional)", "German", "Greek (Greece)", "Spanish", "French", "Italian", "Japanese", "Polish", "Dutch", "Portuguese (Brazil)", "Russian", "Vietnamese (Vietnam)"],
      delivery: "Proctored; scheduled through Certiport (Pearson VUE)",
      prerequisites: "No formal prerequisites. Certification renewal frequency: 60 months.",
      status: "current",
      officialCertificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/mos-excel-associate-m365-apps/",
      officialExamUrl: "https://learn.microsoft.com/en-us/credentials/certifications/exams/mo-210/",
      domains: [
        { id: "d1", name: "Manage worksheets and workbooks" },
        { id: "d2", name: "Manage data cells and ranges" },
        { id: "d3", name: "Manage tables and table data" },
        { id: "d4", name: "Perform operations by using formulas and functions" },
        { id: "d5", name: "Manage charts" },
      ],
      sources: [
        { label: "Microsoft Learn: MOS Excel Associate (Microsoft 365 Apps)", url: "https://learn.microsoft.com/en-us/credentials/certifications/mos-excel-associate-m365-apps/" },
        { label: "Microsoft Learn: Exam MO-210", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/mo-210/" },
        { label: "Certiport: Microsoft Office Specialist Microsoft 365 Apps", url: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Certify/365-Apps.aspx" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "MO-210 Practice Exams: MOS Excel Associate (365 Apps)",
      description: "MO-210 practice exams for MOS Excel Associate (Microsoft 365 Apps): worksheets, cells and ranges, tables, formulas and functions, and charts.",
    },
  },
  "nppe": {
    description:
      "Practice exams for the National Professional Practice Examination (NPPE), the professionalism, law and ethics exam used by Canadian engineering and geoscience regulators: 6 full tests with 660 multiple-choice questions.",
    fullName: "National Professional Practice Examination (NPPE)",
    // Verified 2026-11-04 against regulator sources: APEGA NPPE pages (apega.ca/apply/professional-member/nppe/ and apega.ca/apply/exams/nppe), APEGNB "National Professional Practice Exam: Application to Write" (May 2025) and the NPPE Candidate Guide V12 (draft 19 June 2023) hosted by PEO.
    // Status: current. APEGA lists 2027 sessions (11-13 Jan, 22-24 Mar, 7-9 Jun, 23-25 Aug, 1-3 Nov 2027); five sessions a year, each over three days.
    // Count of regulators: APEGA now says fourteen; the 2023 candidate guide says thirteen. The newer APEGA figure is used.
    // Not verified, so omitted: exam languages (no official source fetched states them), blueprint subject areas and weights (published only on nppexam.ca, which could not be fetched; the candidate guide says there are six subject areas), and the essay variant used by some regulators (2023 guide mentions EGBC; not confirmed as current).
    // Other official facts (no schema field): maximum four attempts at most regulators (PEO allows three per the 2023 guide); APEGA fee $250 plus GST; failing candidates get a Mastery Report by subject area; accommodations available.
    exam: {
      officialName: "National Professional Practice Examination (NPPE)",
      examCode: "NPPE",
      questionCount: "110",
      duration: "2.5 hours",
      format: "Computer-based multiple-choice exam on professionalism, law and ethics; pass/fail result",
      passingScore: "Equated (scaled) score of 65; this is not 65% correct",
      questionTypes: "Multiple choice, four options with one correct answer; no penalty for wrong answers",
      delivery: "Meazure Learning; remote proctoring is the main method, test centres in limited cases",
      prerequisites: "Application for professional membership with a participating Canadian engineering or geoscience regulator",
      status: "current",
      officialExamUrl: "https://www.apega.ca/apply/professional-member/nppe/",
      sources: [
        { label: "APEGA: National Professional Practice Examination", url: "https://www.apega.ca/apply/professional-member/nppe/" },
        { label: "APEGA: NPPE exam dates", url: "https://www.apega.ca/apply/exams/nppe" },
        { label: "APEGNB: National Professional Practice Exam, Application to Write (May 2025, PDF)", url: "https://www.apegnb.com/wp-content/uploads/NPPE-MAY2025_EN.pdf" },
        { label: "NPPE Candidate Guide V12 (2023, PDF, hosted by PEO)", url: "https://www.peo.on.ca/sites/default/files/2024-03/NPPECandidateGuide.pdf" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "NPPE Practice Exams: Professional Practice Exam",
      description: "NPPE practice exams for Canadian engineers and geoscientists: 6 full tests, 660 questions on professionalism, law and ethics.",
    },
  },
  "nvidia-nca-aiio": {
    description:
      "Practice tests for NVIDIA-Certified Associate: AI Infrastructure and Operations (NCA-AIIO), written to the official exam topics: essential AI knowledge, AI infrastructure and AI operations. The exam has 50 questions in 60 minutes.",
    fullName: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
    // Verified 2026-11-04 against the NVIDIA NCA-AIIO certification page (HTML and .md version; page dated 3 Nov 2026).
    // Status: current; no new version or retirement notice on the page.
    // UNVERIFIED and omitted: passing score (not published on the page), exam version date. The NVIDIA exam study guide PDF (dam-cdn.nvd.orangelogic.com) could not be fetched.
    // Note: price USD 125; certification valid 2 years, recertify by retaking the exam.
    exam: {
      officialName: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
      examCode: "NCA-AIIO",
      questionCount: "50 questions",
      duration: "60 minutes",
      languages: ["English"],
      delivery: "Online, remotely proctored (Certiverse account required)",
      prerequisites: "A basic understanding of data center infrastructure.",
      status: "current",
      officialCertificationUrl: "https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-operations-associate/",
      domains: [
        { id: "d1", name: "Essential AI Knowledge", weight: "38%", objectives: ["Describe the NVIDIA software stack used in an AI environment.", "Compare and contrast training and inference architecture requirements and considerations.", "Differentiate the concepts of AI, machine learning, and deep learning.", "Explain the factors contributing to recent rapid improvements and adoption of AI.", "Explain the key AI use cases and industries.", "Explain the purpose and use case of various NVIDIA solutions.", "Describe the software components related to the life cycle of AI development and deployment.", "Compare and contrast GPU and CPU architectures."] },
        { id: "d2", name: "AI Infrastructure", weight: "40%", objectives: ["Identify hardware requirements for specific AI training task use cases.", "Scale a GPU infrastructure for different use cases.", "Identify key concepts and high-level specifications related to power and cooling requirements within a data center.", "Articulate the key advantages, challenges, and considerations related to on-prem vs cloud infrastructures.", "Identify key components and considerations of a cluster of an accelerated infrastructure.", "Identify facility requirements.", "Determine networking requirements for AI workloads.", "Identify and describe data center networking protocols and key concepts.", "Identify high-speed data center network options and their use cases.", "Explain the purpose and benefits of a DPU in a data center."] },
        { id: "d3", name: "AI Operations", weight: "22%", objectives: ["Describe AI data center management and monitoring essentials.", "Describe AI cluster orchestration and job scheduling essentials.", "Articulate the key measures and criteria related to monitoring GPUs.", "Identify the key considerations for virtualizing accelerated infrastructure."] },
      ],
      sources: [
        { label: "NVIDIA: AI Infrastructure and Operations Associate (NCA-AIIO)", url: "https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-operations-associate/" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "NCA-AIIO Practice Tests: NVIDIA AI Infrastructure",
      description: "NCA-AIIO practice tests for NVIDIA-Certified Associate: AI Infrastructure and Operations: AI basics, GPU infrastructure, networking and AI operations.",
    },
  },
  "palo-alto-netsec-analyst": {
    description:
      "Practice tests for the Palo Alto Networks Certified Network Security Analyst exam, organised by the four datasheet domains: object configuration, policy creation, management and operations with Strata Cloud Manager, and troubleshooting.",
    fullName: "Palo Alto Networks Certified Network Security Analyst",
    // Verified 2026-11-04 against paloaltonetworks.com: certification portfolio page, Network Security Analyst page, exam datasheet (August 2025), Certification Program FAQs (September 2026).
    // NOT stated on any page read: exam code, number of questions, duration, passing score, question types. These are omitted.
    // The Certification Handbook PDF (panw-certification-handbook.pdf) and Pearson VUE page could not be fetched in this session.
    exam: {
      officialName: "Palo Alto Networks Certified Network Security Analyst",
      examVersion: "Exam datasheet dated August 2025",
      languages: ["English"],
      delivery: "Registration through Pearson VUE",
      prerequisites:
        "None stated. Palo Alto Networks recommends reviewing the datasheet topics and completing the digital learning path.",
      status: "current",
      officialCertificationUrl: "https://www.paloaltonetworks.com/services/education/palo-alto-networks-netsec-analyst",
      officialExamUrl: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/netsec-analyst-datasheet.pdf",
      domains: [
        {
          id: "d1",
          name: "Object Configuration Creation and Application",
          weight: "30%",
          objectives: [
            "1.1 Create and apply security profiles and security profile groups",
            "1.2 Create and apply decryption profiles",
            "1.3 Create and apply external dynamic lists",
            "1.4 Create and apply custom objects (e.g., URL categories, signatures, data patterns)",
            "1.5 Create and apply Log Forwarding profile",
            "1.6 Create and apply data security profiles",
            "1.7 Create and apply internet of things (IoT) security profiles",
            "1.8 Create and apply DoS protection profiles",
            "1.9 Create and apply SD-WAN profiles and templates",
          ],
        },
        {
          id: "d2",
          name: "Policy Creation and Application",
          weight: "30%",
          objectives: [
            "2.1 Create and apply Security policies (i.e., App-ID, User-ID, Content-ID)",
            "2.2 Create and apply NAT policies",
            "2.3 Create and apply decryption policies",
            "2.4 Create and apply application override policies",
            "2.5 Create and apply Policy Based Forwarding (PBF) policies",
            "2.6 Create and apply SD-WAN routing and service-level agreement (SLA) policies",
          ],
        },
        {
          id: "d3",
          name: "Management and Operations",
          weight: "26%",
          objectives: [
            "3.1 Use centralized management system",
            "3.2 Use Command Center, Activity Insights, and Policy Optimizer to improve security posture",
            "3.3 Use Log Viewer and the Incidents and Alerts page to remediate incidents and alerts",
          ],
        },
        {
          id: "d4",
          name: "Troubleshooting",
          weight: "14%",
          objectives: [
            "4.1 Troubleshoot misconfigurations across all management and on-box options",
            "4.2 Troubleshoot runtime and commit / push errors",
            "4.3 Troubleshoot device usage and health",
          ],
        },
      ],
      sources: [
        { label: "Palo Alto Networks: Network Security Analyst", url: "https://www.paloaltonetworks.com/services/education/palo-alto-networks-netsec-analyst" },
        { label: "Palo Alto Networks: Network Security Analyst datasheet (PDF)", url: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/netsec-analyst-datasheet.pdf" },
        { label: "Palo Alto Networks: Certification Program FAQs (PDF)", url: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/certification-faq.pdf" },
        { label: "Palo Alto Networks: Certification portfolio", url: "https://www.paloaltonetworks.com/services/education/certification" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "Palo Alto NetSec Analyst Practice Tests",
      description:
        "Practice tests for Palo Alto Networks Certified Network Security Analyst: objects, policies, Strata Cloud Manager operations and troubleshooting.",
    },
  },
  "palo-alto-netsec-pro": {
    description:
      "Practice tests for the Palo Alto Networks Certified Network Security Professional exam, organised by the six datasheet domains, from network security fundamentals and NGFW and SASE functionality to Cloud-Delivered Security Services, connectivity and security.",
    fullName: "Palo Alto Networks Certified Network Security Professional",
    // Verified 2026-11-04 against paloaltonetworks.com: certification portfolio page, Network Security Professional page, exam datasheet (June 2026), Certification Program FAQs (September 2026).
    // NOT stated on any page read: exam code, number of questions, duration, passing score, question types. These are omitted.
    // NOT verified: that this certification was formerly "Network Security Generalist" (the course title says "ex Generalist"). No official page read states the rename; "Network Security Generalist" appears only in the page's meta keywords. Kept out of the copy.
    // The Certification Handbook PDF could not be fetched in this session.
    // Objective headings with long parentheticals are shortened to the main clause.
    exam: {
      officialName: "Palo Alto Networks Certified Network Security Professional",
      examVersion: "Exam datasheet dated June 2026",
      languages: ["English"],
      delivery: "Registration through Pearson VUE",
      prerequisites:
        "None stated. Recommended: basic network security knowledge, configuring Strata and Prisma SASE products, and using Panorama and Strata Cloud Manager.",
      status: "current",
      officialCertificationUrl: "https://www.paloaltonetworks.com/services/education/palo-alto-networks-netsec-professional",
      officialExamUrl: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/netsec-professional-datasheet.pdf",
      domains: [
        {
          id: "d1",
          name: "Network Security Fundamentals",
          weight: "17%",
          objectives: [
            "1.1 Explain Application Layer inspection for Strata and SASE products",
            "1.2 Explain the functionality of slow path and fast path for packet inspection",
            "1.3 Explain the use of decryption on Strata and SASE products",
            "1.4 Explain the application of network hardening methods for enhanced security on Strata and SASE products",
          ],
        },
        {
          id: "d2",
          name: "NGFW and SASE Solution Functionality",
          weight: "13%",
          objectives: [
            "2.1 Explain the function of Cloud NGFWs, PA-Series, CN-Series, and VM-Series firewalls",
            "2.2 Explain the function of Prisma SD-WAN",
            "2.3 Explain the function of Prisma Access",
            "2.4 Explain the functionality of Panorama and Strata Cloud Manager (SCM) for managing Strata and SASE solutions",
          ],
        },
        {
          id: "d3",
          name: "Platform Solutions, Services, and Tools",
          weight: "30%",
          objectives: [
            "3.1 Explain the security efficacy of Palo Alto Networks NGFW and Prisma SASE products",
            "3.2 Explain the functionality of Cloud-Delivered Security Services (CDSS) components",
            "3.3 Explain the alignment of AIOps to Palo Alto Networks best practices",
            "3.4 Explain how Next-Generation Trust Security (NGTS) supports identity governance and trust relationships",
            "3.5 Identify and describe quantum security risks",
            "3.6 Identify and describe AI-related security risks and mitigation techniques",
          ],
        },
        {
          id: "d4",
          name: "NGFW and SASE Solution Maintenance and Configuration",
          weight: "10%",
          objectives: [
            "4.1 Explain the configuration and maintenance of Palo Alto Networks hardware firewalls and VM-Series firewalls",
            "4.2 Explain the configuration and maintenance of Prisma Access",
          ],
        },
        {
          id: "d5",
          name: "Infrastructure Management and CDSS",
          weight: "17%",
          objectives: [
            "5.1 Explain the function of Security policies, profiles, and updates in the configuration and maintenance of CDSS",
            "5.2 Explain the function of Security policies, Device-IDs, and monitoring and logging in the configuration and maintenance of IoT security",
            "5.3 Explain the function of data encryption, access control, and monitoring and logging in the configuration and maintenance of Enterprise DLP and Enterprise SaaS Security",
            "5.4 Explain the function of supported products, new device addition, reporting, and configuration management in SCM and Panorama in network security environments",
          ],
        },
        {
          id: "d6",
          name: "Connectivity and Security",
          weight: "13%",
          objectives: [
            "6.1 Explain the configuration and maintenance of network security for on-premises, cloud, and hybrid networks",
            "6.2 Identify and describe the components used to maintain connectivity and security of remote users",
          ],
        },
      ],
      sources: [
        { label: "Palo Alto Networks: Network Security Professional", url: "https://www.paloaltonetworks.com/services/education/palo-alto-networks-netsec-professional" },
        { label: "Palo Alto Networks: Network Security Professional datasheet (PDF)", url: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/netsec-professional-datasheet.pdf" },
        { label: "Palo Alto Networks: Certification Program FAQs (PDF)", url: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/certification-faq.pdf" },
        { label: "Palo Alto Networks: Certification portfolio", url: "https://www.paloaltonetworks.com/services/education/certification" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "Palo Alto NetSec Professional Practice Tests",
      description:
        "Practice tests for Palo Alto Networks Certified Network Security Professional: NGFW, SASE, CDSS, platform tools, connectivity and security.",
    },
  },
  "palo-alto-ngfw-engineer": {
    description:
      "Practice tests for the Palo Alto Networks Certified Next-Generation Firewall Engineer exam, organised by the three datasheet domains: PAN-OS networking configuration, PAN-OS device setting configuration, and integration and automation, including Panorama.",
    fullName: "Palo Alto Networks Certified Next-Generation Firewall Engineer",
    // Verified 2026-11-04 against paloaltonetworks.com: certification portfolio page, Next-Generation Firewall Engineer page, exam datasheet (November 2025), Certification Program FAQs (September 2026).
    // NOT stated on any page read: exam code, number of questions, duration, passing score, question types. These are omitted.
    // NOT verified: that this certification replaces PCNSE (the course title says "ex PCNSE"). No official page read states it; the community article "What Is Replacing the PCNSE?" on live.paloaltonetworks.com could not be fetched. Kept out of the copy.
    // The Certification Handbook PDF could not be fetched in this session.
    // Datasheet tasks are unnumbered; listed as given (top-level tasks only).
    exam: {
      officialName: "Palo Alto Networks Certified Next-Generation Firewall Engineer",
      examVersion: "Exam datasheet dated November 2025",
      languages: ["English"],
      delivery: "Registration through Pearson VUE",
      prerequisites:
        "None stated. Recommended: 2 to 3 years in IT security, including 2 years with Palo Alto Networks NGFW solutions; Network Security Professional and Network Security Analyst certifications recommended.",
      status: "current",
      officialCertificationUrl: "https://www.paloaltonetworks.com/services/education/palo-alto-networks-ngfw-engineer",
      officialExamUrl: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/ngfw-engineer-datasheet.pdf",
      domains: [
        {
          id: "d1",
          name: "PAN-OS Networking Configuration",
          weight: "40%",
          objectives: [
            "Configure interface",
            "Configure zones",
            "Configure high availability (HA)",
            "Configure routing",
            "Configure GlobalProtect",
            "Configure tunnels",
          ],
        },
        {
          id: "d2",
          name: "PAN-OS Device Setting Configuration",
          weight: "40%",
          objectives: [
            "Implement authentication roles, profiles, and sequences",
            "Configure virtual systems (VSYS)",
            "Configure logging",
            "Implement PAN-OS software updates",
            "Configure certificates",
            "Configure on-premises and Cloud Identity Engine User-ID",
            "Configure web proxy on PAN-OS",
          ],
        },
        {
          id: "d3",
          name: "Integration and Automation",
          weight: "20%",
          objectives: [
            "Install the selected deployment option",
            "Use APIs to automate deployment",
            "Manage third-party services to deploy NGFWs (e.g., Kubernetes, hypervisors, CSPs, Terraform, Ansible)",
            "Use on-premises centralized management",
            "Build Application Command Center (ACC) dashboards and custom reports",
          ],
        },
      ],
      sources: [
        { label: "Palo Alto Networks: Next-Generation Firewall Engineer", url: "https://www.paloaltonetworks.com/services/education/palo-alto-networks-ngfw-engineer" },
        { label: "Palo Alto Networks: Next-Generation Firewall Engineer datasheet (PDF)", url: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/ngfw-engineer-datasheet.pdf" },
        { label: "Palo Alto Networks: Certification Program FAQs (PDF)", url: "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/certification-faq.pdf" },
        { label: "Palo Alto Networks: Certification portfolio", url: "https://www.paloaltonetworks.com/services/education/certification" },
      ],
      lastVerified: "2026-11-04",
    },
    seo: {
      title: "Palo Alto NGFW Engineer Practice Tests",
      description:
        "Practice tests for Palo Alto Networks Certified Next-Generation Firewall Engineer: PAN-OS networking, device settings, integration and automation.",
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
