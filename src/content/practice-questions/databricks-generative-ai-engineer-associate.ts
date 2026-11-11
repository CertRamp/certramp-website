import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free Databricks Certified Generative AI Engineer Associate sample questions:
 * ORIGINAL questions written by CertRamp against the objectives in the official
 * Databricks exam guide (verified 11 November 2026). Not taken from the paid
 * practice exams, not recalled exam content, and not presented as real exam
 * questions.
 */
const DOCS = (label: string, path: string) => ({
  label: `Databricks documentation: ${label}`,
  url: `https://docs.databricks.com/aws/en/${path}`,
});

const JUDGES = DOCS("Built-in LLM judges", "mlflow3/genai/eval-monitor/concepts/judges/");
const GATEWAY = DOCS("AI Gateway", "ai-gateway/");
const RAG_PIPELINE = DOCS("Build an unstructured data pipeline for RAG", "agents/tutorials/ai-cookbook/quality-data-pipeline-rag");

export const databricksGenerativeAiEngineerAssociateQuestions: PracticeQuestionSet = {
  slug: "databricks-generative-ai-engineer-associate",
  intro:
    "15 original Databricks Generative AI Engineer Associate practice questions across all six exam sections, weighted like the official exam guide: 2 on Design Applications, 2 on Data Preparation, 5 on Application Development, 3 on Assembling and Deploying Apps, 1 on Governance and 2 on Evaluation and Monitoring. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-11-11",
  updated: "2026-11-11",
  seo: {
    title: "Databricks GenAI Engineer Associate Practice Questions",
    description:
      "15 free, original Databricks Generative AI Engineer Associate practice questions on RAG, Vector Search, MLflow agents, ai_query, guardrails and evaluation, with explanations.",
  },
  questions: [
    /* ── d1: Design Applications ──────────────────────────────────────────── */
    {
      id: "dbx-genai-d1-routing-task",
      domain: "d1",
      objective: "Select model tasks to accomplish a given business requirement",
      difficulty: "foundation",
      question:
        "A company receives thousands of emails a day and wants each one assigned automatically to exactly one of five departments (billing, technical support, sales, returns, other) stored in a Delta table. Which model task fits this requirement?",
      options: [
        { id: "A", text: "Summarization", rationale: "Summarization condenses text; it does not assign an email to one of a fixed set of departments." },
        { id: "B", text: "Named entity recognition", rationale: "Entity recognition extracts items such as names or order numbers from text, which may help routing but does not choose the department." },
        { id: "C", text: "Text classification into a fixed set of labels", rationale: "Correct. Assigning each input to one of a predefined set of labels is classification; on Databricks, ai_classify() does exactly this over table data." },
        { id: "D", text: "Open-ended text generation", rationale: "Free-form generation produces new text and makes it harder to guarantee one of the five valid labels." },
      ],
      answer: "C",
      explanation:
        "Mapping the business requirement to the right task is the first design step. A fixed label set points to classification, which is easier to evaluate and constrain than free-form generation.",
      reference: DOCS("ai_classify function", "sql/language-manual/functions/ai_classify"),
    },
    {
      id: "dbx-genai-d1-structured-output",
      domain: "d1",
      objective: "Design a prompt that elicits a specifically formatted response",
      difficulty: "intermediate",
      question:
        "A downstream job parses an LLM's answer into three columns: product, issue_type and severity. The current prompt asks the model to \"describe the issue briefly\" and the job fails on most responses. What is the most reliable fix on a Foundation Model APIs endpoint?",
      options: [
        { id: "A", text: "Pass a JSON schema with the three fields as response_format", rationale: "Correct. Structured outputs return JSON that follows the schema you define, which is designed for converting unstructured text into a fixed structure." },
        { id: "B", text: "Increase the temperature so the model explores more phrasings", rationale: "Higher temperature increases variability, which makes parsing less reliable." },
        { id: "C", text: "Increase max_tokens so the answer is never cut off", rationale: "Truncation is not the problem; the response has no predictable structure." },
        { id: "D", text: "Add \"please be concise and use the same style every time\" to the existing prompt", rationale: "A vague style instruction does not specify field names or a parseable format." },
      ],
      answer: "A",
      explanation:
        "When code consumes the output, specify the exact format rather than hoping for it. Databricks structured outputs accept a json_schema response_format; keep schemas flat, since deep nesting reduces quality.",
      reference: DOCS("Structured outputs", "machine-learning/model-serving/structured-outputs"),
    },

    /* ── d2: Data Preparation ─────────────────────────────────────────────── */
    {
      id: "dbx-genai-d2-embedding-token-limit",
      domain: "d2",
      objective: "Apply a chunking strategy for a given document structure and model constraints",
      difficulty: "intermediate",
      question:
        "A team embeds chunks of about 1,500 tokens with an embedding model whose maximum input is 512 tokens. Retrieval often misses facts that appear late in a chunk. What is the most likely cause?",
      options: [
        { id: "A", text: "The vector index uses the wrong similarity metric for long chunks", rationale: "The metric does not explain why content late in each chunk specifically goes missing." },
        { id: "B", text: "Chunk overlap is too small", rationale: "Overlap helps continuity between chunks but does not stop text beyond the token limit from being dropped." },
        { id: "C", text: "The LLM's context window is too small to hold the retrieved chunks", rationale: "The problem appears at retrieval, before the LLM sees anything." },
        { id: "D", text: "Text past the 512-token limit is truncated before embedding", rationale: "Correct. Chunks that exceed the embedding model's maximum are truncated, so their later content cannot be found by similarity search. Chunk size should fit the model's limit." },
      ],
      answer: "D",
      explanation:
        "Every embedding model has a maximum token length, for example 512 tokens for bge-large-en-v1.5. Size chunks to fit it, and balance smaller chunks (precise detail) against larger ones (more context).",
      reference: RAG_PIPELINE,
    },
    {
      id: "dbx-genai-d2-reranking",
      domain: "d2",
      objective: "Explain the role of re-ranking in the information retrieval process",
      difficulty: "intermediate",
      question:
        "Evaluation shows that the correct passage is usually among the top 50 results of a Vector Search query, but often not in the top 5 that are passed to the LLM. Which change addresses this most directly?",
      options: [
        { id: "A", text: "Switch the index to Direct Vector Access so embeddings are written through the API", rationale: "The index type controls how embeddings are updated, not how results are ordered." },
        { id: "B", text: "Enable the reranker on the query", rationale: "Correct. Reranking is a second pass over retrieved results that improves the order, so relevant passages move into the top results passed to the LLM." },
        { id: "C", text: "Lower the LLM's temperature", rationale: "Temperature affects generation, not which passages are retrieved." },
        { id: "D", text: "Increase num_results to 50 and send all of them to the LLM", rationale: "This adds cost, latency and noise to the prompt instead of putting the right passage near the top." },
      ],
      answer: "B",
      explanation:
        "First-stage retrieval optimizes for recall at scale; a reranker improves precision at the top of the list. Databricks reports that the reranker typically adds under a second of latency.",
      reference: DOCS("Query a vector search index", "vector-search/query-vector-search"),
    },

    /* ── d3: Application Development ──────────────────────────────────────── */
    {
      id: "dbx-genai-d3-guardrails",
      domain: "d3",
      objective: "Implement LLM guardrails to prevent negative outcomes",
      difficulty: "intermediate",
      question:
        "A public-facing assistant occasionally produces unsafe content when users try to manipulate it. The team has already added rules to the system prompt. What should they add next?",
      options: [
        { id: "A", text: "Input and output guardrails at the serving layer", rationale: "Correct. Guardrails applied to inputs and outputs, for example through gateway service policies, still work when a user talks the model out of its system prompt." },
        { id: "B", text: "A longer system prompt that repeats the rules several times and warns the model about manipulation", rationale: "More prompt text can still be overridden by manipulation; it is not an independent control." },
        { id: "C", text: "A larger model, since bigger models never produce unsafe content", rationale: "Model size does not guarantee safe output." },
        { id: "D", text: "A higher rate limit so users can retry blocked requests", rationale: "Rate limits manage capacity and cost; raising them does nothing for content safety." },
      ],
      answer: "A",
      explanation:
        "Guardrails should not depend only on the model obeying instructions. Layer independent input and output checks on top of prompt design, and monitor what gets blocked.",
      reference: GATEWAY,
    },
    {
      id: "dbx-genai-d3-model-selection-metrics",
      domain: "d3",
      objective: "Select the best model for a given task based on common metrics generated in experiments",
      difficulty: "intermediate",
      question:
        "Three candidate LLMs are being considered for a RAG app. How should the team choose between them?",
      options: [
        { id: "A", text: "Pick the model with the largest parameter count", rationale: "Size alone says nothing about quality on this task, and it usually raises cost and latency." },
        { id: "B", text: "Ask each model a handful of questions in the playground and choose the one whose answers feel best", rationale: "Informal spot checks are useful early on but are not repeatable or measurable." },
        { id: "C", text: "Compare MLflow evaluation results, latency and cost on one shared data set", rationale: "Correct. Comparing experiment metrics on a shared data set gives an objective, repeatable basis for choosing a model." },
        { id: "D", text: "Pick the model with the most downloads in the model hub", rationale: "Popularity does not show how well the model performs on your data and requirements." },
      ],
      answer: "C",
      explanation:
        "Model choice should be driven by measured results on representative data. MLflow evaluation runs make quality, cost and latency comparable across candidates.",
      reference: JUDGES,
    },
    {
      id: "dbx-genai-d3-evaluation-vs-monitoring",
      domain: "d3",
      objective: "Compare the evaluation and monitoring phases of the Gen AI application life cycle",
      difficulty: "foundation",
      question:
        "Which statement correctly contrasts evaluation and monitoring of a generative AI application?",
      options: [
        { id: "A", text: "Monitoring happens before release; evaluation happens only after users report problems", rationale: "This reverses the usual order: evaluation is done during development, monitoring after deployment." },
        { id: "B", text: "Evaluation and monitoring are the same activity with different names", rationale: "They use similar scorers but differ in data source and timing." },
        { id: "C", text: "Monitoring needs ground truth for every request, while evaluation never uses it", rationale: "Live traffic rarely has ground truth; curated evaluation data sets are where expected answers are usually available." },
        { id: "D", text: "Evaluation uses curated data before release; monitoring uses live traffic", rationale: "Correct. Evaluation guides development decisions before release, and monitoring watches the deployed app, often reusing scorers that do not need ground truth." },
      ],
      answer: "D",
      explanation:
        "Both phases matter: evaluation tells you whether a version is good enough to ship, monitoring tells you whether it stays that way. Databricks recommends running the same scorers on a sample of production traffic, which works for judges that do not need ground truth, such as Safety or RelevanceToQuery.",
      reference: DOCS("Evaluation and monitoring concepts", "mlflow3/genai/eval-monitor/concepts"),
    },
    {
      id: "dbx-genai-d3-format-chunking",
      domain: "d3",
      objective: "Select chunking strategy based on model & retrieval evaluation",
      difficulty: "advanced",
      question:
        "A knowledge base consists of well-structured Markdown pages with headings. Fixed-size 300-token chunks score poorly in retrieval evaluation because answers are split across chunks mid-section. Which strategy should the team try next?",
      options: [
        { id: "A", text: "Keep fixed-size chunks but remove all overlap", rationale: "Removing overlap makes split sections even harder to retrieve." },
        { id: "B", text: "Split on Markdown headings and re-run the evaluation", rationale: "Correct. Splitting on structural markers keeps each section together, and re-evaluating confirms whether retrieval actually improved." },
        { id: "C", text: "Embed each complete page as a single chunk regardless of length, so no section is ever split", rationale: "Long pages may exceed the embedding model's limit and dilute the embedding with unrelated content." },
        { id: "D", text: "Split the text into single sentences", rationale: "Very small chunks lose surrounding context, which is the opposite of what the evaluation shows is missing." },
      ],
      answer: "B",
      explanation:
        "Databricks notes that fixed-size chunking rarely works for production applications. When documents have clear structure, use it for chunk boundaries and let evaluation results decide between strategies.",
      reference: RAG_PIPELINE,
    },
    {
      id: "dbx-genai-d3-responses-agent",
      domain: "d3",
      objective: "Utilize MLflow and Agent Framework for developing agentic systems",
      difficulty: "intermediate",
      question:
        "A team has built an agent in a third-party framework and wants to log, evaluate, deploy and monitor it with MLflow on Databricks. Which approach does the Databricks documentation recommend for authoring it?",
      options: [
        { id: "A", text: "Wrap the agent in the MLflow ResponsesAgent interface", rationale: "Correct. Databricks recommends ResponsesAgent: agents from any framework can be wrapped, MLflow infers a compatible signature, and streaming and tracing are supported." },
        { id: "B", text: "Rewrite the agent as a single SQL query using ai_query()", rationale: "ai_query() is for applying models to table data, not for hosting a multi-step agent." },
        { id: "C", text: "Save the agent as a pickle file in a Unity Catalog volume and load it in each notebook", rationale: "That bypasses the MLflow interface, signature and serving integration the tools rely on." },
        { id: "D", text: "Deploy the framework's own web server on a cluster and call it over HTTP", rationale: "A self-managed server would not integrate with Playground, evaluation and monitoring out of the box." },
      ],
      answer: "A",
      explanation:
        "The ResponsesAgent interface is the bridge between a framework-specific agent and Databricks tooling. It is compatible with the OpenAI Responses schema and supports streaming, tool calling and multi-agent patterns.",
      reference: DOCS("Author AI agents in code", "generative-ai/agent-framework/author-agent"),
    },

    /* ── d4: Assembling and Deploying Apps ────────────────────────────────── */
    {
      id: "dbx-genai-d4-ai-query-batch",
      domain: "d4",
      objective: "Identify batch inference workloads and apply ai_query() appropriately",
      difficulty: "intermediate",
      question:
        "Every night, two million new product reviews land in a Delta table and each needs a sentiment label from an LLM. Which approach does Databricks recommend for this workload?",
      options: [
        { id: "A", text: "A Python loop that calls a real-time serving endpoint once per row", rationale: "Row-by-row calls to a real-time endpoint are slow to orchestrate and require you to handle parallelism and retries yourself." },
        { id: "B", text: "Provisioned throughput sized for the peak of the batch run", rationale: "Capacity sizing is not the recommended pattern here: Databricks says its provisionless, Databricks-hosted model endpoints work best for batch processing with ai_query()." },
        { id: "C", text: "ai_query() in a scheduled SQL or Lakeflow job, submitting the full data set in one query", rationale: "Correct. AI Functions handle parallelization, retries and scaling, and Databricks recommends submitting the whole data set in one query." },
        { id: "D", text: "Send the reviews to an interactive chatbot built with Databricks Apps", rationale: "A user-facing app is meant for interactive use, not scheduled bulk processing." },
      ],
      answer: "C",
      explanation:
        "Batch inference over tables is the job ai_query() was built for. It runs from SQL, notebooks, Lakeflow pipelines and jobs, and keeps results in the lakehouse.",
      reference: DOCS("AI Functions", "large-language-models/ai-functions"),
    },
    {
      id: "dbx-genai-d4-auth-passthrough",
      domain: "d4",
      objective: "Control access to resources from model serving endpoints",
      difficulty: "advanced",
      question:
        "An agent deployed on Model Serving queries a Vector Search index and a Unity Catalog function. All users should get the same results, and the team wants to avoid managing long-lived credentials. How should access be configured?",
      options: [
        { id: "A", text: "Store a personal access token in the agent code", rationale: "Hard-coded long-lived tokens are a security risk and must be rotated manually." },
        { id: "B", text: "Declare both as resources when logging the agent", rationale: "Correct. With declared resources, Databricks provisions a service principal with access to them and injects and rotates short-lived OAuth tokens." },
        { id: "C", text: "Use on-behalf-of-user authentication for all resources so each request runs as the end user", rationale: "On-behalf-of-user is for per-user permissions and auditing; it is not needed when every user should see the same data." },
        { id: "D", text: "Grant ALL PRIVILEGES on the catalog to all account users", rationale: "This violates least privilege and does not by itself give the endpoint credentials." },
      ],
      answer: "B",
      explanation:
        "Automatic authentication passthrough is the simplest secure option for Databricks-managed resources. Choose on-behalf-of-user when results must reflect each user's permissions, and manual authentication with secrets for resources that passthrough does not support.",
      reference: DOCS("Authentication for AI agents on Model Serving", "generative-ai/agent-framework/agent-authentication-model-serving"),
    },
    {
      id: "dbx-genai-d4-index-type",
      domain: "d4",
      objective: "Create and query a Vector Search index",
      difficulty: "foundation",
      question:
        "Chunked text is stored in a Delta table in Unity Catalog. The team wants Databricks to compute the embeddings and keep the index in step with the table as rows change, without writing embedding code. Which index type should they create?",
      options: [
        { id: "A", text: "Direct Vector Access index", rationale: "With Direct Vector Access you write and update vectors yourself through the API; there is no automatic sync from a table." },
        { id: "B", text: "Delta Sync index with self-managed embeddings", rationale: "Self-managed embeddings require the source table to already contain the vectors you computed." },
        { id: "C", text: "Full-text index", rationale: "A full-text index uses keyword scoring without embeddings, so it does not meet the requirement for semantic vectors." },
        { id: "D", text: "Delta Sync index with Databricks-managed embeddings", rationale: "Correct. Databricks generates embeddings from a text column using the embedding model you choose and keeps the index synced with the source Delta table." },
      ],
      answer: "D",
      explanation:
        "Index type follows from who computes embeddings and how updates arrive. Managed embeddings give the least code; a self-managed index cannot later be converted to managed embeddings without rebuilding it.",
      reference: DOCS("Vector Search", "generative-ai/vector-search"),
    },

    /* ── d5: Governance ───────────────────────────────────────────────────── */
    {
      id: "dbx-genai-d5-ai-mask",
      domain: "d5",
      objective: "Use masking techniques as guard rails to meet a performance objective",
      difficulty: "intermediate",
      question:
        "Support tickets contain customer names and email addresses. Before the text is chunked and indexed for a RAG app, these values must be replaced, while the rest of the text stays usable. Which Databricks SQL function fits?",
      options: [
        { id: "A", text: "ai_mask(content, array('person', 'email'))", rationale: "Correct. ai_mask uses an AI model to detect the listed entity types and replaces each match with [MASKED], leaving the rest of the text intact." },
        { id: "B", text: "ai_classify(content, '[\"person\", \"email\"]')", rationale: "ai_classify assigns labels to the text; it does not remove anything from it." },
        { id: "C", text: "A row filter on the tickets table", rationale: "Row filters hide whole rows from some users; they do not redact values inside the text." },
        { id: "D", text: "ai_query() with a prompt asking for a summary of each ticket", rationale: "A summary may still contain personal data and loses detail the RAG app needs." },
      ],
      answer: "A",
      explanation:
        "Masking sensitive entities before indexing keeps personal data out of the vector store and out of prompts. Because detection is model-based, spot-check the results.",
      reference: DOCS("ai_mask function", "sql/language-manual/functions/ai_mask"),
    },

    /* ── d6: Evaluation and Monitoring ────────────────────────────────────── */
    {
      id: "dbx-genai-d6-ground-truth-judges",
      domain: "d6",
      objective: "Identify evaluation judges that require ground truth",
      difficulty: "intermediate",
      question:
        "A team wants to score production traces, which have no expected answers. Which built-in MLflow judge can they NOT use in this setting because it requires ground truth?",
      options: [
        { id: "A", text: "Safety", rationale: "Safety checks for harmful or toxic content and does not need expectations." },
        { id: "B", text: "RelevanceToQuery", rationale: "RelevanceToQuery judges whether the response addresses the request, without ground truth." },
        { id: "C", text: "Correctness", rationale: "Correct. Correctness compares the response with provided ground truth in expectations, so it needs expected answers or facts." },
        { id: "D", text: "RetrievalGroundedness", rationale: "RetrievalGroundedness checks whether the response is supported by the retrieved context, which does not require ground truth." },
      ],
      answer: "C",
      explanation:
        "Judges such as Correctness and RetrievalSufficiency need expectations, so they fit curated evaluation data sets. Judges that do not, such as Safety, RelevanceToQuery and RetrievalGroundedness, can also run on live traffic.",
      reference: JUDGES,
    },
    {
      id: "dbx-genai-d6-gateway-monitoring",
      domain: "d6",
      objective: "Use AI Gateway (Inference Tables, Usage Tables, and rate limiting) to track an LLM or agent deployed via Agent Framework",
      difficulty: "intermediate",
      question:
        "A platform team needs to cap how much one department can consume from a shared LLM endpoint and keep an auditable record of request and response payloads. Which combination of features meets both needs?",
      options: [
        { id: "A", text: "MLflow tracing in development notebooks and a weekly cost report", rationale: "Development traces do not cover production payloads, and a report does not enforce a cap." },
        { id: "B", text: "Rate limits on the endpoint and inference tables that log payloads to Unity Catalog Delta tables", rationale: "Correct. Rate limits cap consumption, and inference tables record requests and responses for auditing, debugging and monitoring." },
        { id: "C", text: "Provisioned throughput and a larger embedding model", rationale: "Provisioned throughput guarantees capacity rather than limiting a consumer, and the embedding model is unrelated." },
        { id: "D", text: "Continuous sync on the Vector Search index", rationale: "Index sync keeps retrieval data current; it neither limits usage nor logs payloads." },
      ],
      answer: "B",
      explanation:
        "Gateway features give central control over deployed models: rate limits and budgets for consumption, usage tracking in system tables, and inference tables for payload logging.",
      reference: GATEWAY,
    },
  ],
};
