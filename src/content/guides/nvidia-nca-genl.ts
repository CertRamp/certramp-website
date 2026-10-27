import type { ExamGuide } from "@/config/types";

/**
 * NVIDIA NCA-GENL exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const nvidiaNcaGenlGuide: ExamGuide = {
  slug: "nvidia-nca-genl",
  summary:
    "NCA-GENL (NVIDIA-Certified Associate: Generative AI LLMs) checks that you can work on generative AI and large language model projects under supervision: machine learning and LLM fundamentals, data analysis, experimentation, software development and trustworthy AI. The exam has 50–60 multiple-choice questions in 1 hour, is pass/fail, and the certification is valid for two years.",
  whoFor: [
    "Developers and data scientists starting to build LLM applications such as RAG pipelines, chatbots and summarisers",
    "Machine learning engineers who want an entry-level credential for generative AI on NVIDIA tooling",
    "Technical team members who help prepare datasets, run experiments or test LLM systems",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What NCA-GENL actually tests",
      paragraphs: [
        "NVIDIA publishes five topic areas with fixed weights: Core Machine Learning and AI Knowledge (30%), Software Development (24%), Experimentation (22%), Data Analysis (14%) and Trustworthy AI (10%). The topic bullets are written for an associate who works under the supervision of a senior team member, so the exam tests understanding and sound judgement rather than deep research expertise.",
        "In practice that means transformer and attention basics, prompt engineering, text embeddings and retrieval-augmented generation (RAG), fine-tuning approaches such as LoRA, tokenisation and dataset preparation, RLHF, model evaluation and benchmarking, classical machine learning fundamentals such as cross-validation, and the statistics used to compare models. Trustworthy AI covers ethical principles, privacy and consent, bias and the technologies used to make AI systems more trustworthy.",
        "The suggested readings on the exam page point to NVIDIA tooling as well as general sources: TensorRT, Triton Inference Server, NeMo, RAPIDS cuDF and cuML, alongside papers such as \"Attention Is All You Need\", the LoRA and BERT papers, and the Hugging Face LLM course.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "The exam has 50–60 multiple-choice questions and you have 1 hour, so plan for roughly one minute per question. It is offered in English. NVIDIA exams are pass/fail: you do not receive a score, and for most exams the result is shown on screen at the end and sent by email.",
        "You register through a Certiverse account. NVIDIA's certification FAQ describes remotely proctored online exams: you install a secure browser, you are monitored by camera and microphone, and breaks are not allowed. If you fail, you can buy the exam again after a 14-day waiting period, with a maximum of five attempts in 12 months.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the topic list",
          body: "Go through every bullet on the official NCA-GENL page and mark it as known, unsure or new. Weight your time by the published percentages: Core Machine Learning and AI Knowledge alone is 30%.",
        },
        {
          title: "Close the fundamentals gaps",
          body: "Revise supervised learning, feature engineering, cross-validation, loss functions and metrics such as R². NVIDIA lists the Fundamentals of Deep Learning course material as recommended training.",
        },
        {
          title: "Learn how LLMs work, not just how to call them",
          body: "Read \"Attention Is All You Need\" for the transformer architecture, then cover tokenisation, embeddings, prompt engineering (zero-shot, few-shot, chain-of-thought) and parameter-efficient fine-tuning with LoRA and p-tuning.",
        },
        {
          title: "Build a small RAG application",
          body: "Chunk and embed a document set, store it in a vector database, retrieve context for a query and pass it to an LLM. NVIDIA's Rapid Application Development With LLMs course and the GenerativeAIExamples repository are good starting points.",
        },
        {
          title: "Cover deployment and trustworthy AI",
          body: "Understand what Triton Inference Server and TensorRT do, why quantisation, KV caching and in-flight batching matter, and how guardrails, bias checks and data consent make an LLM system more trustworthy.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice sets of about 50–60 questions in 60 minutes and read every explanation. Book the exam once you pass consistently with a margin, remembering that you will only get a pass or fail result.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying only LLMs. Core Machine Learning, Data Analysis and Experimentation include classical ML fundamentals, statistical model comparison and visualisation.",
        "Confusing fine-tuning methods. Full fine-tuning updates all weights, LoRA trains small low-rank matrices on a frozen model, and p-tuning learns virtual tokens; prompt engineering changes no weights at all.",
        "Treating RAG as retraining. RAG retrieves relevant content at query time and adds it to the prompt; the model's weights stay unchanged.",
        "Mixing up NVIDIA components. Know which tool trains or customises models, which optimises inference and which serves models in production.",
        "Skipping Trustworthy AI because it is only 10%. Its four objectives are narrow (ethical principles, privacy and consent, trustworthiness technologies, bias), so a short review of NVIDIA's trustworthy AI readings covers them.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on NCA-GENL and how long is the exam?",
      answer:
        "NVIDIA states 50–60 multiple-choice questions and a duration of 1 hour. The exam is in English. NVIDIA exams are pass/fail, so you will not receive a numeric score.",
    },
    {
      question: "How much does the NCA-GENL exam cost?",
      answer:
        "NVIDIA's US exam page lists the price as $125. Check the registration page for the price that applies in your region before you book.",
    },
    {
      question: "How long is the certification valid?",
      answer:
        "The certification is valid for two years from issuance. To recertify, you retake the exam.",
    },
    {
      question: "Are there prerequisites?",
      answer:
        "There are no formal prerequisites. NVIDIA recommends a basic understanding of generative AI and large language models; its study guide additionally recommends Python programming skills and a solid understanding of neural networks and deep learning.",
    },
    {
      question: "Are CertRamp's NCA-GENL questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against NVIDIA's published exam topics. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "NCA-GENL Exam Guide 2026: Topics, Format & Study Plan",
    description:
      "NVIDIA NCA-GENL guide: 50–60 questions in 1 hour, five weighted topic areas from ML fundamentals to trustworthy AI, and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
