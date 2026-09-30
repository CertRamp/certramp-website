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

  "prince2-7-foundation": {
    featured: true,
    description:
      "360 practice questions in six timed mock exams for the PRINCE2 7th edition Foundation exam. Test 1 shows where you stand, Test 4 matches the real 60-question exam, and Tests 5 and 6 push beyond it — with an explanation for every answer option.",
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
        label: "PeopleCert — PRINCE2 7 Foundation",
        url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-foundation-3579",
      },
      { label: "PRINCE2 — Examination format", url: "https://www.prince2.com/usa/prince2-examination-format" },
    ],
    topics: [
      { title: "Principles", description: "The seven principles that make a project a PRINCE2 project." },
      { title: "Practices", description: "Business case, organizing, plans, quality, risk, issues and progress." },
      { title: "Processes", description: "From starting up a project to closing it — who does what, and when." },
      { title: "People & tailoring", description: "Roles, people management and adapting the method to the context." },
    ],
    faq: [
      {
        question: "Are these practice exams for PRINCE2 7th edition?",
        answer:
          "Yes. The questions are written for the PRINCE2 7th edition Foundation exam, not the earlier 6th edition.",
      },
    ],
    seo: {
      title: "PRINCE2 7 Foundation Practice Exams & Mock Tests",
      description:
        "360 PRINCE2 7 Foundation practice questions in six timed mock exams — from a diagnostic start to beyond exam level, with explanations for every option.",
    },
    lastReviewed: CHECKED,
  },

  "prince2-7-practitioner": {
    featured: true,
    description:
      "420 scenario-based practice questions in six full Practitioner mock exams for PRINCE2 7th edition. Practise applying the method to a scenario under time pressure, from your first attempt to beyond exam level, with an explanation for every option.",
    questionsPerTest: 70,
    examOverview: [
      { label: "Exam provider", value: "PeopleCert" },
      { label: "Format", value: "Scenario-based objective testing — 56 questions and sub-questions worth 70 marks" },
      { label: "Duration", value: "150 minutes" },
      { label: "Pass mark", value: "60%" },
      { label: "Book", value: "Open book — the official PRINCE2 7 manual only" },
      {
        label: "Prerequisites",
        value: "PRINCE2 7 Foundation or another qualifying certification (see PeopleCert for the full list)",
      },
    ],
    sources: [
      {
        label: "PeopleCert — PRINCE2 7 Practitioner",
        url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-practitioner-3581",
      },
      { label: "PRINCE2 — Examination format", url: "https://www.prince2.com/usa/prince2-examination-format" },
    ],
    seo: {
      title: "PRINCE2 7 Practitioner Practice Exams",
      description:
        "Six full PRINCE2 7 Practitioner mock exams with 420 scenario-based questions. Find out if you can apply the method under exam conditions.",
    },
    lastReviewed: CHECKED,
  },

  "ireb-cpre-foundation-level": {
    featured: true,
    description:
      "270 practice questions for the CPRE Foundation Level exam on syllabus 3.3: six full exams of 45 questions in 75 minutes, modelled on the real exam format. Test 1 shows your level at a 60% bar, Test 6 goes beyond the real exam at 80%.",
    questionsPerTest: 45,
    examOverview: [
      { label: "Exam provider", value: "IREB, via licensed certification bodies" },
      { label: "Format", value: "Approx. 45 questions — single choice, multiple choice and true/false" },
      { label: "Duration", value: "75 minutes (90 minutes for non-native speakers)" },
      { label: "Pass mark", value: "70% of total points" },
      { label: "Prerequisites", value: "None" },
      { label: "Syllabus", value: "Version 3.3.0 (April 2026)" },
    ],
    sources: [
      { label: "IREB — CPRE download centre", url: "https://cpre.ireb.org/en/knowledge-and-resources/downloads" },
      {
        label: "IREB — CPRE Foundation Level syllabus 3.3.0 (PDF)",
        url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf",
      },
      {
        label: "IREB — Examination regulations 5.6.2 (PDF)",
        url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-and-agile-primer-examination-regulations/a7858da873-1787039946/cpre_fl_and_primer_examination_regulations_en_v5.6.2.pdf",
      },
    ],
    topics: [
      { title: "Introduction and overview of RE" },
      { title: "Fundamental principles of RE" },
      { title: "Work products and documentation practices" },
      { title: "Practices for requirements elaboration" },
      { title: "Process and working structure" },
      { title: "Management practices for requirements" },
      { title: "Tool support" },
    ],
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
    lastReviewed: CHECKED,
  },

  "sc-200": {
    featured: true,
    description:
      "360 practice questions in six progressive mock exams for Microsoft SC-200: Security Operations Analyst. Find out where you stand on security operations, incident response and threat hunting before you book the real exam.",
    examOverview: [
      { label: "Exam provider", value: "Microsoft, delivered by Pearson VUE" },
      { label: "Duration", value: "100 minutes" },
      { label: "Passing score", value: "700 or greater" },
      { label: "Prerequisites", value: "No formal prerequisites" },
      { label: "Renewal", value: "Every 12 months, free, via an online assessment on Microsoft Learn" },
      { label: "Skills outline", value: "Skills measured updated on 21 October 2026 (English exam)" },
    ],
    sources: [
      {
        label: "Microsoft Learn — SC-200 study guide",
        url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200",
      },
      {
        label: "Microsoft Learn — Security Operations Analyst Associate",
        url: "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/",
      },
    ],
    topics: [
      { title: "Manage a security operations environment", description: "40–45% of the exam" },
      { title: "Respond to security incidents", description: "35–40% of the exam" },
      { title: "Perform threat hunting", description: "20–25% of the exam" },
    ],
    seo: {
      title: "SC-200 Practice Exams: Security Operations Analyst",
      description:
        "360 Microsoft SC-200 practice questions in six progressive mock exams — security operations, incident response and threat hunting, with full explanations.",
    },
    lastReviewed: CHECKED,
  },

  "isaca-aaism": {
    featured: true,
    description:
      "540 practice questions in six mock exams for ISACA AAISM — Advanced in AI Security Management. Six tests of rising difficulty across AI governance, AI risk and AI security controls, with an explanation for every option.",
    examOverview: [
      { label: "Exam provider", value: "ISACA, delivered through PSI" },
      { label: "Questions", value: "90, across three job practice domains" },
      { label: "Prerequisites", value: "An active CISM or CISSP" },
      { label: "Delivery", value: "PSI test centre, or remote proctoring where available" },
    ],
    sources: [
      { label: "ISACA — AAISM", url: "https://www.isaca.org/credentialing/aaism" },
      {
        label: "ISACA — AAISM exam content outline",
        url: "https://www.isaca.org/credentialing/aaism/aaism-exam-content-outline",
      },
    ],
    topics: [
      { title: "AI Governance and Program Management", description: "31% of the exam" },
      { title: "AI Risk Management", description: "31% of the exam" },
      { title: "AI Technologies and Controls", description: "38% of the exam" },
    ],
    seo: {
      title: "AAISM Practice Exams: ISACA AI Security Management",
      description:
        "540 ISACA AAISM practice questions in six progressive mock exams covering AI governance, AI risk management and AI technologies and controls.",
    },
    lastReviewed: CHECKED,
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
    examOverview: [
      { label: "Exam provider", value: "IAPP, delivered by Pearson VUE" },
      { label: "Questions", value: "100 multiple-choice questions" },
      { label: "Duration", value: "2.75 hours, including a 15-minute break" },
      { label: "Passing score", value: "300 on the IAPP scale of 100–500" },
      { label: "Prerequisites", value: "No formal education or experience requirements" },
      { label: "Delivery", value: "Online (OnVUE) or at a test centre" },
      { label: "Body of Knowledge", value: "Version 2.1, effective 2 February 2026" },
    ],
    sources: [
      { label: "IAPP — AIGP exam", url: "https://store.iapp.org/aigp-exam/" },
      { label: "IAPP — AIGP certification", url: "https://iapp.org/certify/aigp" },
      {
        label: "IAPP — Certification candidate handbook (PDF)",
        url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf",
      },
      {
        label: "IAPP — AIGP body of knowledge 2.1 (PDF)",
        url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt0d33152fd20bc134/AIGP_Cert%20BOK.pdf",
      },
    ],
    topics: [
      { title: "Foundations of AI governance" },
      { title: "How laws, standards and frameworks apply to AI" },
      { title: "Governing AI development" },
      { title: "Governing AI deployment and use" },
    ],
    seo: {
      title: "AIGP Practice Exams: IAPP AI Governance Professional",
      description:
        "600 IAPP AIGP practice questions in six full mock exams across all four domains of the AIGP body of knowledge, with explanations for every option.",
    },
    lastReviewed: CHECKED,
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
      "900 practice questions across six full-length mock exams, written to the ISC2 CCSP exam outline that took effect on 1 August 2026. Test 1 shows your level, Test 4 is set at real exam level and Test 6 goes beyond it.",
    examOverview: [
      { label: "Exam provider", value: "ISC2" },
      { label: "Format", value: "Computerized adaptive testing (CAT)" },
      { label: "Questions", value: "100 to 150" },
      { label: "Duration", value: "3 hours" },
      { label: "Experience requirement", value: "5 years of cumulative IT experience, incl. security and cloud (see ISC2 for details and waivers)" },
      { label: "Exam outline", value: "Effective 1 August 2026" },
    ],
    sources: [
      { label: "ISC2 — CCSP exam", url: "https://www.isc2.org/certifications/ccsp/ccsp-exam" },
      {
        label: "ISC2 — CCSP exam outline",
        url: "https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline",
      },
      { label: "ISC2 — Computerized adaptive testing", url: "https://www.isc2.org/certifications/computerized-adaptive-testing" },
    ],
    topics: [
      { title: "Cloud Concepts, Architecture and Design" },
      { title: "Cloud Data Security" },
      { title: "Cloud Platform and Infrastructure Security" },
      { title: "Cloud Application Security" },
      { title: "Cloud Security Operations" },
      { title: "Legal, Risk and Compliance" },
    ],
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
    lastReviewed: CHECKED,
  },
};

/* ───────────────────────────────────────────────────────────────────────────
 * TEMPLATE — full example of everything you can set for one slug.
 * (Illustrative structure only. Do not publish unverified facts.)
 *
 *  "prince2-7-foundation": {
 *    featured: true,
 *    description: "Your 2–3 sentence intro for candidates …",
 *    fullName: "PRINCE2 7th Edition Foundation",
 *    questionsPerTest: 60,
 *    price: { amount: 0, currency: "EUR", note: "incl. VAT" },   // your real price
 *    freeTestUrl: "https://…",        // or env CLASSMARKER_FREE_TEST_URL__PRINCE2_7_FOUNDATION
 *    premiumUrl: "https://…",         // or env CLASSMARKER_PREMIUM_TEST_URL__PRINCE2_7_FOUNDATION
 *    delivery: { freeTest: "embed", simulator: "redirect" },
 *    examOverview: [
 *      { label: "Exam provider", value: "PeopleCert" },
 *      { label: "Format", value: "…" },            // verified from the official exam guide
 *    ],
 *    topics: [{ title: "…", description: "…" }],
 *    features: ["…"],
 *    faq: [{ question: "…", answer: "…" }],
 *    seo: { title: "PRINCE2 7 Foundation Practice Exams", description: "…" },
 *    lastReviewed: "2026-10-01",
 *  },
 * ─────────────────────────────────────────────────────────────────────────── */
