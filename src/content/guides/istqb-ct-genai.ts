import type { ExamGuide } from "@/config/types";

/**
 * ISTQB CT-GenAI v1.1 exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts. This file holds CertRamp's
 * preparation advice.
 */
export const istqbCtGenaiGuide: ExamGuide = {
  slug: "istqb-ct-genai",
  summary:
    "The ISTQB Certified Tester Testing with Generative AI (CT-GenAI) tests whether you can use large language models for test tasks, manage the risks this brings and help a test organisation adopt GenAI. The exam has 40 multiple-choice questions worth 46 points in 60 minutes (75 minutes if the exam is not in your native language), and you pass with 30 points (65%). The current syllabus is v1.1 (April 2026), and you need the ISTQB Foundation Level (CTFL) certificate first.",
  whoFor: [
    "Testers and test automation engineers who already use, or are about to use, LLMs in their daily work",
    "Test managers and leads who need to plan how GenAI fits into their test process",
    "Developers and IT leaders who want a structured, vendor-neutral view of GenAI in software testing",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What CT-GenAI actually tests",
      paragraphs: [
        "The syllabus has five chapters: introduction to GenAI for software testing, prompt engineering for effective software testing, managing risks of GenAI in the software testing process, LLM-powered solutions for software testing, and deploying and integrating GenAI in test organisations. According to ISTQB's exam structure tables, prompt engineering carries the most weight with 11 questions and 16 of the 46 points, followed by risk management with 10 questions and 11 points.",
        "Prompt engineering is also where all five K3 (apply) objectives on test tasks sit: using GenAI for test analysis, test design and implementation, automated regression testing, and test monitoring and control, and choosing the right prompting technique. Expect short scenarios with a prompt or an LLM output, where you decide what is missing, what went wrong or which technique fits. The other chapters are mainly K1 and K2: definitions, comparisons and examples.",
      ],
    },
    {
      id: "exam-structure",
      heading: "How the exam is structured and what v1.1 changed",
      paragraphs: [
        "All 40 questions are multiple choice. The 8 K1 and 26 K2 questions are worth 1 point each, and the 6 K3 questions 2 points each. Exams are offered by ISTQB Member Boards and Exam Providers; candidates whose native language is not the exam language get 25% extra time.",
        "ISTQB approved CT-GenAI v1.0 on 25 July 2025 and announced v1.1 as a minor update on 27 April 2026. v1.1 brings corrections, terminology updates, refined descriptions of evaluation metrics, clarified risk content and more context on LLM-powered agents. ISTQB states that it does not change the structure, the learning objectives or the scope, so v1.0 material still covers the same objectives — but check terminology against v1.1.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Download the v1.1 syllabus and sample exam",
          body: "Get the CT-GenAI v1.1 syllabus, the release notes, the sample exam and the exam structure tables free from istqb.org. The syllabus defines every examinable term and learning objective.",
        },
        {
          title: "Get the basics straight",
          body: "Make sure you can explain tokens and the context window, the difference between foundation, instruction-tuned and reasoning LLMs, multimodal models, and the two interaction models: AI chatbots and LLM-powered testing applications.",
        },
        {
          title: "Practise prompting on real test tasks",
          body: "Use any LLM to generate acceptance criteria, test cases in Gherkin and keyword-driven scripts. Build prompts with the six components (role, context, instruction, input data, constraints, output format) and try prompt chaining, few-shot prompting and meta prompting. The hands-on objectives in the syllabus are a good exercise list.",
        },
        {
          title: "Learn the risks and their mitigations",
          body: "Know how to recognise hallucinations, reasoning errors and biases in LLM output, which data privacy and security risks apply when test data reaches an LLM, how task and model choice affect energy consumption, and examples of relevant regulations, standards and frameworks.",
        },
        {
          title: "Cover infrastructure and adoption",
          body: "Understand retrieval-augmented generation, LLM-powered agents, fine-tuning and LLMOps at an explanatory level, then the adoption roadmap and change management topics of chapter 5. These chapters are mostly K1 and K2, so precise definitions win points.",
        },
        {
          title: "Take timed practice exams",
          body: "Practise 40 questions in 60 minutes. That is about 90 seconds per question, so read scenario questions carefully but do not over-think the short K1 questions.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Relying on everyday ChatGPT experience. The exam uses ISTQB terminology — for example prompt chaining, meta prompting, system prompt and LLM-powered testing application — and expects the syllabus definitions.",
        "Confusing hallucinations with reasoning errors. A hallucination is invented content; a reasoning error is a flawed logical step or calculation.",
        "Mixing up RAG and fine-tuning. RAG adds retrieved information to the prompt at run time; fine-tuning changes the model by further training.",
        "Underestimating chapter 3. Risk management has 10 of the 40 questions, including data privacy, energy consumption and regulations.",
        "Studying only chapter 2. Chapters 4 and 5 together still carry 12 questions.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the CT-GenAI exam and what is the pass mark?",
      answer:
        "The exam has 40 multiple-choice questions worth 46 points, and you have 60 minutes. Candidates whose native language is not the exam language get 25% extra time (75 minutes). You pass with at least 30 points, which is 65%.",
    },
    {
      question: "Do I need the Foundation Level certificate first?",
      answer:
        "Yes. ISTQB requires the Certified Tester Foundation Level (CTFL) certificate before you take the CT-GenAI exam.",
    },
    {
      question: "Is there a difference between CT-GenAI v1.0 and v1.1?",
      answer:
        "v1.1 (27 April 2026) is a minor update with corrections, terminology updates and clarifications. ISTQB states that the structure, the learning objectives and the scope are unchanged.",
    },
    {
      question: "Is CT-GenAI the same as the ISTQB AI Testing certification (CT-AI)?",
      answer:
        "No. They are separate ISTQB certifications with separate syllabi and exams. CT-GenAI focuses on using generative AI to support software testing: prompting, risks, LLM-powered solutions and adoption in a test organisation.",
    },
    {
      question: "Are CertRamp's CT-GenAI questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the published ISTQB CT-GenAI v1.1 syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISTQB CT-GenAI v1.1 Exam Guide: Format, Syllabus & Study Plan",
    description:
      "CT-GenAI v1.1 guide: 40 questions, 46 points, 60 minutes, pass mark 30 (65%), prompt engineering, GenAI risks, RAG and agents, and a six-step plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
