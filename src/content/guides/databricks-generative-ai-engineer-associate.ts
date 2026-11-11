import type { ExamGuide } from "@/config/types";

/**
 * Databricks Certified Generative AI Engineer Associate exam guide. Exam facts
 * come from the verified `exam` record in src/config/certifications.ts and the
 * official Databricks exam guide (PDF). This file holds CertRamp's preparation
 * advice.
 */
export const databricksGenerativeAiEngineerAssociateGuide: ExamGuide = {
  slug: "databricks-generative-ai-engineer-associate",
  summary:
    "The Databricks Certified Generative AI Engineer Associate exam checks that you can design, build, deploy, govern and evaluate LLM applications such as RAG apps and agents on Databricks. It has 45 scored multiple-choice questions in 90 minutes (unscored items may be added), is offered in English, Japanese, Portuguese (Brazil) and Korean, and can be taken online with a proctor or at a test center. Databricks does not publish the passing score.",
  whoFor: [
    "Data scientists, ML engineers and developers who build RAG applications, LLM chains or agents on Databricks",
    "Data engineers who prepare unstructured data and vector indexes for generative AI apps",
    "Practitioners with around six months of hands-on experience with the generative AI tasks in the exam guide",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What the exam actually tests",
      paragraphs: [
        "Databricks publishes six sections with weights: Design Applications (14%), Data Preparation (14%), Application Development (30%), Assembling and Deploying Apps (22%), Governance (8%) and Evaluation and Monitoring (12%). Application Development and deployment together make up more than half of the exam, so that is where most of your preparation should go.",
        "Design Applications is about turning a business requirement into a pipeline: writing prompts that return a specific format, choosing the right model task, selecting chain components, ordering tools for multi-step reasoning and knowing when Agent Bricks fits. Data Preparation covers chunking strategies, filtering source content that would degrade retrieval, choosing Python packages to extract document content, writing chunks to Delta tables in Unity Catalog, evaluating retrieval and the role of re-ranking.",
        "Application Development covers LangChain and similar tools, prompt augmentation and prompt engineering, guardrails, choosing LLMs and embedding models (including context length and model cards), selecting models from experiment metrics, building agents with MLflow and the Agent Framework, and using Genie Spaces in multi-agent systems. Assembling and Deploying covers pyfunc models, MLflow registration to Unity Catalog, Vector Search indexes and endpoints, Model Serving with Foundation Model APIs, access control for serving endpoints, batch inference with ai_query(), MCP servers, prompt version control, CI/CD and user-facing interfaces.",
        "Governance is about masking, guardrails against malicious input, licensing of data sources and alternatives for problematic text. Evaluation and Monitoring covers choosing models from quantitative metrics, MLflow scoring and tracing, judges that need ground truth, custom scorers, inference tables, AI Gateway features such as usage tracking and rate limiting, cost control and SME feedback.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "The exam has 45 scored multiple-choice questions in 90 minutes. According to the exam guide, it may include up to 10 unscored items that are not identified, and the time limit already accounts for them. Questions can be multiple choice or multiple selection. No test aids are allowed. Machine learning code in questions is in Python; other data manipulation code may be in SQL.",
        "There are no formal prerequisites, but Databricks strongly recommends related training and about six months of hands-on experience. The recommended training is the instructor-led course Generative AI Engineering with Databricks, or the self-paced Databricks Academy courses on building RAG agents, agentic applications, agent evaluation, and deploying and monitoring agent applications. If you fail, you must wait 14 days before registering again.",
        "The certification is valid for two years. To recertify, you pass the current version of the exam. Databricks asks candidates to check the exam guide again about two weeks before the exam date, because the outline is updated when the platform changes.",
      ],
    },
    {
      id: "naming-note",
      heading: "A note on product names",
      paragraphs: [
        "Databricks renames generative AI features often. The exam guide uses names such as Mosaic AI Vector Search, AI Gateway and Agent Bricks Knowledge Assistant, while parts of the current documentation describe Vector Search as Databricks AI Search and gateway features under Unity Gateway, and mark Knowledge Assistant as a legacy offering. Learn the concepts behind the features (index types, sync, filtering, reranking, inference tables, rate limits) so a different label does not throw you, and use the names in the exam guide as your reference for the exam.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the exam guide line by line",
          body: "Download the official exam guide and rate yourself on every objective in all six sections. Section 3 alone has 13 objectives and Section 4 has 15, so expect breadth rather than depth.",
        },
        {
          title: "Build a RAG app end to end",
          body: "In a Databricks workspace or Databricks Free Edition, parse a set of PDFs, chunk them, write the chunks to a Delta table in Unity Catalog, create a Vector Search index, and query it with filters, hybrid search and the reranker.",
        },
        {
          title: "Wrap and deploy an agent",
          body: "Author an agent with MLflow (Databricks recommends the ResponsesAgent interface), log it with its resources, register it to Unity Catalog, deploy it to a serving endpoint and test it in AI Playground. Note which authentication method each resource uses.",
        },
        {
          title: "Evaluate like the exam expects",
          body: "Build a small evaluation data set, run MLflow evaluation with built-in judges and one custom scorer, and learn which judges need ground truth (for example Correctness) and which do not (for example Safety or RelevanceToQuery).",
        },
        {
          title: "Cover governance and operations",
          body: "Practise ai_query() for batch inference, ai_mask() for masking sensitive text, inference tables for logging, rate limits and usage tracking in AI Gateway, and the MLflow Prompt Registry with aliases for promotion and rollback.",
        },
        {
          title: "Practise under time pressure",
          body: "90 minutes for 45 scored questions (plus any unscored items) is about 1.5 to 2 minutes per question. Read multiple-selection questions carefully: they tell you how many answers to choose.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Picking chunk sizes without checking the embedding model's context window. Text beyond the token limit is truncated and silently lost.",
        "Using a real-time serving loop for large batch jobs. ai_query() is designed for batch inference over tables and handles parallelization and retries.",
        "Relying on the system prompt as the only guardrail. Use input and output checks, masking and least-privilege access as well.",
        "Hard-coding personal access tokens in agent code. Declare resources for automatic authentication passthrough, or use on-behalf-of-user authentication when each user's permissions must apply.",
        "Confusing evaluation with monitoring. Evaluation runs on curated data sets before release; monitoring tracks live traffic through tracing, inference tables and scorers on production requests.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on the exam and how long is it?",
      answer:
        "There are 45 scored multiple-choice questions and the time limit is 90 minutes. Databricks may add unscored items, which are not identified.",
    },
    {
      question: "What is the passing score?",
      answer:
        "Databricks does not publish the passing score for this exam.",
    },
    {
      question: "Which languages and delivery options are available?",
      answer:
        "The exam is offered in English, Japanese, Portuguese (Brazil) and Korean, online with a proctor or at a test center.",
    },
    {
      question: "How long is the certification valid?",
      answer:
        "Two years. You recertify by passing the current version of the exam.",
    },
    {
      question: "Which section should I study most?",
      answer:
        "Application Development (30%) and Assembling and Deploying Apps (22%) together account for just over half of the exam. Governance is the smallest section at 8%.",
    },
    {
      question: "Are CertRamp's Databricks questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the objectives in the official Databricks exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "Databricks GenAI Engineer Associate Exam Guide 2026",
    description:
      "Databricks Generative AI Engineer Associate guide: 45 scored questions, 90 minutes, six section weights, product name changes and a six-step study plan.",
  },
  published: "2026-11-11",
  updated: "2026-11-11",
};
