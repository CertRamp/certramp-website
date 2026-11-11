import type { ExamGuide } from "@/config/types";

/**
 * CompTIA SecAI+ (CY0-001) exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts. This file holds CertRamp's
 * preparation advice.
 */
export const comptiaSecaiPlusCy0001Guide: ExamGuide = {
  slug: "comptia-secai-plus-cy0-001",
  summary:
    "CompTIA SecAI+ (CY0-001) validates that a cybersecurity professional can secure AI systems, use AI to strengthen security operations and apply AI governance, risk and compliance. The exam has a maximum of 60 multiple-choice and performance-based questions in 60 minutes, you need 600 on a scale of 100 to 900 to pass, and Securing AI systems is by far the largest domain at 40%.",
  whoFor: [
    "Security analysts, engineers and architects who are asked to secure LLM applications, agents or ML pipelines",
    "SOC and incident response staff who want to use AI tools for triage, detection and automation",
    "Security+, CySA+ or PenTest+ holders looking for an AI-focused next step",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What SecAI+ actually tests",
      paragraphs: [
        "SecAI+ has four domains: Basic AI concepts related to cybersecurity (17%), Securing AI systems (40%), AI-assisted security (24%) and AI governance, risk, and compliance (19%). Two thirds of the exam is about protecting AI systems and using AI for defence, so it is a hands-on security exam rather than a data science exam.",
        "The CompTIA exam objectives break the domains into 16 objectives. Domain 1 covers AI types and training techniques (from machine learning and transformers to LLMs, SLMs, fine-tuning, pruning and quantization), prompt engineering, data security for AI including RAG and embeddings, and security across the AI life cycle with human-in-the-loop oversight. Domain 2 is the heart of the exam: using threat-modeling resources (OWASP LLM and ML Security Top 10, MITRE ATLAS, the MIT AI Risk Repository), implementing model and gateway controls, access controls for models, data, agents and APIs, data security controls, monitoring and auditing, and analysing evidence of attacks to suggest compensating controls.",
        "Domain 3 covers AI-enabled security tools (IDE, browser and CLI plug-ins, chatbots, MCP servers), how AI enhances attacks such as deepfakes and automated attack generation, and automating security tasks with AI agents, low-code scripting and CI/CD testing. Domain 4 covers governance structures and roles, responsible AI and AI risks including shadow AI, and the impact of compliance frameworks such as the EU AI Act, OECD standards, ISO AI standards and the NIST AI RMF.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "CY0-001 is version V1 of the exam and launched on 17 February 2026. It has a maximum of 60 questions, a mix of multiple-choice and performance-based items, and you have 60 minutes. The passing score is 600 on a scale of 100 to 900. The exam is offered in English and Japanese.",
        "There are no formal prerequisites, but CompTIA recommends 3 to 4 years in IT and at least 2 years of hands-on cybersecurity experience, with Security+, CySA+, PenTest+ or equivalent knowledge. CompTIA estimates that the exam will retire about three years after launch; no retirement date has been announced.",
        "With up to 60 questions in 60 minutes, time is tight. Performance-based questions usually take longer than multiple-choice ones, so budget your time and do not get stuck on a single scenario.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Download the exam objectives",
          body: "Work from the official CompTIA SecAI+ CY0-001 exam objectives and list all 16 objectives with their sub-bullets. Mark each as known, unsure or new, and give domain 2 (40%) the largest share of your time.",
        },
        {
          title: "Learn the AI vocabulary",
          body: "Be able to tell supervised, unsupervised, reinforcement and federated learning apart, explain what fine-tuning, pruning and quantization do, and describe how RAG uses embeddings and vector storage. Questions assume this language.",
        },
        {
          title: "Work through the threat-modeling resources",
          body: "Read the OWASP Top 10 for LLM Applications 2025 and the OWASP Machine Learning Security Top 10, and browse MITRE ATLAS. For every attack in objective 2.6 (prompt injection, poisoning, model inversion and theft, membership inference, excessive agency and so on), know the evidence it leaves and the compensating control.",
        },
        {
          title: "Build a small lab",
          body: "Put an LLM behind a simple gateway with rate and token limits, add a RAG knowledge base and an agent with one tool, and log prompts and responses. Then try a prompt injection through a retrieved document and see which controls help. This is the best preparation for performance-based questions.",
        },
        {
          title: "Cover the GRC domain properly",
          body: "Read the core functions and trustworthiness characteristics of the NIST AI RMF and the risk categories of the EU AI Act. Know the difference between sanctioned and unsanctioned AI use and why shadow AI is a data protection risk.",
        },
        {
          title: "Practise under time pressure",
          body: "Do timed sets at about one minute per question and review every explanation. Track your results by domain and revisit the objectives where you are weakest.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Treating the system prompt as a security control. OWASP warns that restrictions in the system prompt can be bypassed by prompt injection; authorisation and data access belong in deterministic controls outside the model.",
        "Giving agents broad permissions. Excessive agency comes from too much functionality, too many permissions or too much autonomy; least privilege and human approval for high-impact actions are the expected answers.",
        "Ignoring cost and availability. Rate limits, token limits and input quotas are security controls too, because unbounded consumption leads to denial of service and denial of wallet.",
        "Forgetting that logs are sensitive. Prompt and response logs can contain personal data and secrets and need sanitisation and access control.",
        "Underestimating domain 3. AI-assisted security is 24% of the exam; know how AI supports triage, detection and CI/CD testing, and where a human must stay in the loop.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on the SecAI+ exam and how long is it?",
      answer:
        "CY0-001 has a maximum of 60 questions, a mix of multiple-choice and performance-based items, and you have 60 minutes.",
    },
    {
      question: "What is the passing score for SecAI+?",
      answer: "The passing score is 600 on a scale of 100 to 900.",
    },
    {
      question: "Do I need Security+ before taking SecAI+?",
      answer:
        "No certification is required. CompTIA recommends 3 to 4 years in IT and at least 2 years of hands-on cybersecurity experience, and Security+, CySA+, PenTest+ or equivalent knowledge.",
    },
    {
      question: "Which languages is the SecAI+ exam offered in?",
      answer:
        "The exam is offered in English and Japanese. CertRamp's German practice course is preparation material only; the exam itself is not available in German.",
    },
    {
      question: "Are CertRamp's SecAI+ questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against CompTIA's published CY0-001 exam objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CompTIA SecAI+ (CY0-001) Exam Guide 2026: Domains & Study Plan",
    description:
      "CompTIA SecAI+ CY0-001 guide: up to 60 questions, 60 minutes, 600 on a 100 to 900 scale to pass, the four domains and weights, and a six-step study plan.",
  },
  published: "2026-11-11",
  updated: "2026-11-11",
};
