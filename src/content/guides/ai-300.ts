import type { ExamGuide } from "@/config/types";

/**
 * Microsoft AI-300 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts and the microsoft-dp-100 tracker entry.
 */
export const ai300Guide: ExamGuide = {
  slug: "ai-300",
  summary:
    "AI-300: Operationalizing Machine Learning and Generative AI Solutions is the exam for the Machine Learning Operations (MLOps) Engineer Associate certification, the replacement for DP-100. It lasts 120 minutes and you pass with 700 or more. Machine learning model lifecycle and operations is the largest area at 25–30%.",
  whoFor: [
    "Data scientists and ML engineers who deploy and operate models on Azure",
    "Former DP-100 candidates, since DP-100 retired on 1 June 2026",
    "Engineers running generative AI solutions in production",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AI-300 lasts 120 minutes and needs 700 or more. It is a proctored exam that may include interactive components.",
        "Microsoft expects a data science background with Python, entry-level DevOps (GitHub Actions, command-line tools) and experience with Azure Machine Learning, Microsoft Foundry and infrastructure as code with Bicep and Azure CLI.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Model lifecycle and operations is 25–30%, GenAIOps infrastructure 20–25% and MLOps infrastructure 15–20%. Generative AI quality assurance and observability, and optimising generative AI systems, are 10–15% each.",
        "Unlike DP-100, AI-300 is about operating models, not only training them: pipelines, deployment, monitoring, evaluation and automation for both classic ML and generative AI.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the AI-300 study guide", body: "Use Microsoft Learn's skills measured as your checklist." },
        { title: "Build an MLOps pipeline", body: "Train, register and deploy a model in Azure Machine Learning, automated with GitHub Actions and Bicep." },
        { title: "Add a GenAIOps workflow", body: "Deploy a generative AI solution in Microsoft Foundry and set up evaluation and monitoring." },
        { title: "Practise observability", body: "Track quality, cost and latency, and decide when and how to optimise." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 120 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Preparing with DP-100 material, which focuses on training rather than operations.",
        "Skipping the generative AI areas, which together make up roughly half the exam.",
        "Never automating anything with pipelines or infrastructure as code.",
      ],
    },
  ],
  faq: [
    { question: "Does AI-300 replace DP-100?", answer: "Yes. DP-100 retired on 1 June 2026, and Microsoft names AI-300 as the replacement for this role." },
    { question: "How long is AI-300 and what is the passing score?", answer: "120 minutes. You need 700 or greater." },
    { question: "What is the largest skills area?", answer: "Implement machine learning model lifecycle and operations with 25–30%." },
    {
      question: "Are CertRamp's AI-300 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AI-300 Exam Guide 2026: MLOps Engineer Skills & Study Plan",
    description:
      "Prepare for AI-300, the DP-100 replacement: 120 minutes, 700 to pass, MLOps and GenAIOps skills areas with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
