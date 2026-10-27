import type { ExamGuide } from "@/config/types";

/**
 * GIAC GAIPS exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const giacGaipsGuide: ExamGuide = {
  slug: "giac-gaips",
  summary:
    "GIAC AI Platform Security (GAIPS) is a practitioner certification that validates your ability to audit and secure generative AI applications and LLM development pipelines, from RAG and agents to MLOps and hosting. The proctored exam has 54 questions in 2 hours, and GIAC sets the passing score at 65% for exam versions released on or after 25 July 2026.",
  whoFor: [
    "AI/ML engineers, software developers and application security engineers building or reviewing LLM applications",
    "Cloud security engineers responsible for hosting models, agents and AI pipelines",
    "Security managers, consultants, auditors and risk managers who need to assess AI systems",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What GAIPS actually tests",
      paragraphs: [
        "GIAC publishes eight exam certification objectives for GAIPS: Agentic Systems and AI Integrations; AI and LLM Foundations; AI Application Architecture and Development Frameworks; AI Infrastructure and Deployment Security; AI Risk Management and Strategic Application; Development Pipelines and MLOps Security; Knowledge Augmentation and Retrieval; and Model Customization and Alignment. GIAC does not publish weightings for these areas.",
        "The outcome statements describe a practitioner, not a theorist. You are expected to design and assess agentic systems (inter-agent communication, context management and protocol-level security), understand the attack surface of generative AI, spot supply chain and integration-layer weaknesses, choose controls for hosting models in the cloud and elsewhere, secure data workflows and training pipelines with MLOps and MLSecOps practices, assess the risks of vector databases and external knowledge sources, and understand the security implications of fine-tuning and moderation controls.",
        "In practice, the industry references are a good map of the vocabulary: the OWASP Top 10 for LLM Applications 2025 (prompt injection, excessive agency, vector and embedding weaknesses and so on), the NIST adversarial machine learning taxonomy (NIST AI 100-2 E2025) and the NIST AI Risk Management Framework.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "GAIPS is one proctored, web-based exam of 54 questions in 2 hours. GIAC set the 65% passing score through a psychometric standard-setting study for exam versions released on or after 25 July 2026, and asks candidates to confirm the score for their own attempt in the GIAC Certification Portal. GIAC lists GAIPS as a CyberLive exam, so expect hands-on questions in a virtual machine lab as well as conventional ones.",
        "Once your application is approved, the attempt is activated in your GIAC account and you have 120 days to sit it, either remotely through ProctorU or at a Pearson VUE test centre. GIAC exams are open book in the sense of hard-copy books and notes only — not open internet or open computer — and you get 15 minutes of break time. The certification is renewed every four years, either by collecting 36 CPE credits or by retaking the exam, plus a renewal fee.",
        "GIAC links the SANS course SEC545: GenAI and LLM Application Security as the associated training. Its five sections run from GenAI and LLM risks through agentic AI security, MLSecOps and AI threat modelling to AI for security.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the eight objectives",
          body: "Read GIAC's outcome statement for each objective and mark it as known, unsure or new. Agentic systems, RAG and MLOps are areas where many application security professionals have the least hands-on experience.",
        },
        {
          title: "Learn the shared vocabulary",
          body: "Work through the OWASP Top 10 for LLM Applications 2025 and the attack classes in NIST AI 100-2 E2025 (evasion, poisoning, privacy and generative AI attacks such as direct and indirect prompt injection). Be able to name the mitigation that fits each risk.",
        },
        {
          title: "Build a small lab",
          body: "Stand up a simple RAG application with a vector database, add an agent with one or two tools, and connect an MCP server. Then try indirect prompt injection through a retrieved document and see which controls actually stop it.",
        },
        {
          title: "Study the pipeline end to end",
          body: "Follow a model from data ingestion and training through serialisation, registry, signing and scanning to hosting. Know why pickle-based model files are dangerous to load from untrusted sources and what safer formats and integrity checks look like.",
        },
        {
          title: "Build your index",
          body: "GIAC exams are open book with hard-copy material only. Create a concise, well-organised index of your notes and course books so you can look things up quickly rather than reading under time pressure.",
        },
        {
          title: "Practise under time pressure",
          body: "Work through timed question sets at a pace of roughly 2 minutes per question, and include hands-on practice so that CyberLive-style tasks do not catch you out.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Treating the system prompt as a security control. OWASP is explicit that system prompts should not hold secrets and that authorisation belongs in deterministic code outside the model.",
        "Assuming RAG or fine-tuning fixes prompt injection. OWASP notes that research shows neither fully mitigates it; least privilege, output validation and human approval still matter.",
        "Securing the model but not the integrations. Tools, plugins, MCP servers, vector databases and downstream systems are where much of the real risk sits.",
        "Ignoring the supply chain. Third-party models, LoRA adapters, datasets and serialisation formats are all part of the attack surface.",
        "Relying on the open-book format. An index helps, but 54 questions in 2 hours leaves little time to read up on topics you have not studied.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the GAIPS exam and what is the passing score?",
      answer:
        "The exam has 54 questions and lasts 2 hours. GIAC sets the minimum passing score at 65% for candidates who receive the exam version released on or after 25 July 2026, and recommends checking the GIAC Certification Portal for the score that applies to your attempt.",
    },
    {
      question: "Is the GAIPS exam open book?",
      answer:
        "GIAC exams are open book: you may bring hard-copy books and notes, including your original course material. They are not open internet or open computer, and hard-copy material that looks like practice test or exam questions is not allowed.",
    },
    {
      question: "Where can I take the exam?",
      answer:
        "GIAC exams are web-based and must be proctored, either remotely through ProctorU or on site at a Pearson VUE test centre. You have 120 days from activation to complete your attempt.",
    },
    {
      question: "How do I renew GAIPS?",
      answer:
        "GIAC certifications are renewed every four years. You either collect 36 CPE credits during that period or retake the exam, and pay the renewal fee.",
    },
    {
      question: "Are CertRamp's GAIPS questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against GIAC's published exam certification objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "GIAC GAIPS Exam Guide 2026: Objectives, Format & Study Plan",
    description:
      "GIAC AI Platform Security (GAIPS) guide: 54 questions, 2 hours, 65% to pass, open book, the eight exam objectives and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
