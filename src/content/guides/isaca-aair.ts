import type { ExamGuide } from "@/config/types";

/**
 * ISACA AAIR exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const isacaAairGuide: ExamGuide = {
  slug: "isaca-aair",
  summary:
    "ISACA Advanced in AI Risk (AAIR) tests whether an experienced risk, audit or advisory professional can identify, assess and manage the risks of AI across the enterprise. The computer-based exam has 90 questions across three domains, AI Risk Governance and Framework Integration (37%), AI Life Cycle Risk Management (21%) and AI Risk Program Management (42%), and only holders of an eligible certification such as CRISC, CISA, CISM, CISSP or CIA can earn the credential.",
  whoFor: [
    "CRISC, CISA, CISM, CGEIT and CDPSE holders who want to extend their risk practice to AI systems",
    "Internal auditors, enterprise risk managers and GRC professionals with an eligible designation (for example CIA, CGRC or PMI-RMP) who advise on AI use",
    "Risk and advisory professionals who assess AI models, vendors and use cases for their organisation or clients",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AAIR actually tests",
      paragraphs: [
        "The AAIR exam content outline has three domains. AI Risk Program Management carries the largest share at 42%, followed by AI Risk Governance and Framework Integration at 37% and AI Life Cycle Risk Management at 21%. Together, the governance and program domains make up almost four fifths of the exam, so this is a risk management exam about AI rather than a technical AI exam.",
        "Domain 1 covers AI models, frameworks, strategies and use cases; organisational processes and alignment; ownership, oversight and accountability; policies, procedures and training; regulatory compliance and legal considerations; and trustworthiness, ethical and societal implications such as ESG. Domain 2 follows an AI system from design, development or procurement through training, testing and validation to implementation, maintenance and decommissioning, plus data and asset management. Domain 3 is the classic risk cycle applied to AI: scenario identification and assessment (threats, vulnerabilities and attacks), risk treatment, controls management, metrics, monitoring and reporting, supply chain risk, and incident response, BIA, business continuity and disaster recovery.",
        "Note on naming: the AAIR certification page lists the areas as AI Enterprise Governance, AI Life Cycle Risk Management and AI Risk Program Management, while the exam content outline names domain 1 AI Risk Governance and Framework Integration. The outline is the document to study from, and it also lists additional skills such as integrating AI risk into enterprise risk programs, setting risk tolerances, advising on AI contracts and assessing human oversight at critical decision points.",
      ],
    },
    {
      id: "how-it-is-structured",
      heading: "How the exam and certification are structured",
      paragraphs: [
        "The exam has 90 questions and is computer-based. You take it at a PSI testing centre or through remote proctoring; candidates in India, Mainland China and Hong Kong must test at a testing centre. Registration is open continuously and your eligibility lasts six months from registration. You can book an appointment 48 hours after paying, and appointments are released up to 90 days in advance.",
        "ISACA's certification page and outline page do not state the exam duration, the passing score or the exam languages. Check the AAIR Exam Candidate Guide on isaca.org for the current timing, scoring and retake rules before you book.",
        "Passing the exam is not enough on its own. To be certified you must hold one of the eligible designations listed by ISACA (including CISA, CISM, CRISC, CGEIT, CDPSE, CISSP, CIA, CGRC and PMI-RMP), pay the application processing fee, agree to the ISACA Code of Professional Ethics, follow the CPE policy and apply within five years of passing. ISACA also expects proven experience in IT risk or advisory roles.",
      ],
    },
    {
      id: "frameworks",
      heading: "Frameworks worth knowing",
      paragraphs: [
        "The outline speaks of frameworks, regulatory compliance and controls without prescribing a single standard, so learn the common reference points well enough to apply them in a scenario.",
      ],
      bullets: [
        "NIST AI Risk Management Framework (AI RMF 1.0, NIST AI 100-1): the four functions Govern, Map, Measure and Manage, with Govern as the cross-cutting function, and the seven characteristics of trustworthy AI, with valid and reliable as the base condition.",
        "NIST AI 600-1, the Generative AI Profile of the AI RMF, for risks that are specific to generative AI.",
        "The EU AI Act's risk-based approach: prohibited practices, high-risk systems (for example CV sorting or credit scoring), transparency obligations for chatbots and generated content, and minimal-risk systems.",
        "OWASP Top 10 for LLM Applications 2025 and NIST AI 100-2 E2025 for the threat vocabulary behind domain 3A: prompt injection, data and model poisoning, sensitive information disclosure, excessive agency and unbounded consumption.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Start with the exam content outline",
          body: "List the 16 subdomains (1A to 1F, 2A to 2D, 3A to 3F) and mark each as known, unsure or new. Plan your time by the weights: roughly 42% for program management, 37% for governance and 21% for the life cycle.",
        },
        {
          title: "Map your existing risk knowledge to AI",
          body: "Take what you already know from CRISC, CISA or your audit practice (risk ownership, risk appetite and tolerance, the four treatment options, control testing, KRIs, third-party risk, BIA) and ask how each one changes when the asset is a model, its training data or an AI service from a vendor.",
        },
        {
          title: "Learn the AI life cycle and its failure points",
          body: "Follow a model from use case and data collection through training, validation, deployment, monitoring and retirement. For each stage, know what can go wrong (poor data provenance, overfitting, drift, silent vendor model changes, leftover access after decommissioning) and which control or document addresses it.",
        },
        {
          title: "Study one framework in depth",
          body: "Read the NIST AI RMF core and trustworthiness characteristics closely. Its Govern, Map, Measure and Manage functions give you a structure for almost any governance or program question, and the EU AI Act gives you the regulatory examples.",
        },
        {
          title: "Use ISACA's official resources",
          body: "ISACA publishes an AAIR review manual (digital and print), an online review course, a questions, answers and explanations database, a virtual workshop and a free five-question practice quiz. Use them alongside the outline, not instead of it.",
        },
        {
          title: "Practise the ISACA way of answering",
          body: "Take timed practice sets and read every explanation. ISACA questions often ask for the BEST, MOST or FIRST action, so train yourself to pick the answer that addresses risk at the governance or process level before jumping to a technical fix.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying AI technology instead of AI risk. You need to understand prompt injection or poisoning well enough to assess and treat the risk, not to build the model.",
        "Underweighting domain 3. At 42%, AI Risk Program Management is the largest domain; scenario assessment, treatment, KRIs, vendor risk and incident response deserve the most practice.",
        "Treating AI risk as an IT problem. Accountability for an AI use case sits with the business owner of the process, supported by the second and third lines.",
        "Accepting vendor claims as validation. Controls and third-party models need independent evaluation and monitoring, plus contract terms for model changes and incidents.",
        "Forgetting the end of the life cycle. Decommissioning, data retention and inventory updates are part of domain 2 and are easy to overlook.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on the AAIR exam?",
      answer:
        "The AAIR exam has 90 questions across three domains: AI Risk Governance and Framework Integration (37%), AI Life Cycle Risk Management (21%) and AI Risk Program Management (42%).",
    },
    {
      question: "How long is the AAIR exam and what score do I need?",
      answer:
        "ISACA's AAIR certification page and exam content outline page do not state the duration or the passing score. Check the AAIR Exam Candidate Guide on isaca.org for the current details before you book.",
    },
    {
      question: "Who can earn the AAIR certification?",
      answer:
        "You must hold an eligible certification or designation, for example CISA, CISM, CRISC, CGEIT, CDPSE, CISSP, CIA, CGRC or PMI-RMP (ISACA's page has the full list), and ISACA expects proven experience in IT risk or advisory roles. You then pass the exam and apply within five years.",
    },
    {
      question: "Can I take AAIR online?",
      answer:
        "Yes. The exam is computer-based and can be taken at a PSI testing centre or with remote proctoring. Candidates in India, Mainland China and Hong Kong must test at a testing centre.",
    },
    {
      question: "Are CertRamp's AAIR questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against ISACA's published AAIR exam content outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISACA AAIR Exam Guide 2026: Domains, Format & Study Plan",
    description:
      "ISACA Advanced in AI Risk (AAIR) guide: 90 questions, three domains weighted 37/21/42%, eligibility, frameworks to know and a six-step study plan.",
  },
  published: "2026-11-11",
  updated: "2026-11-11",
};
