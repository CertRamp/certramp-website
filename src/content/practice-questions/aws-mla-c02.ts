import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free MLA-C02 sample questions — ORIGINAL questions written by CertRamp for the
 * official MLA-C02 exam guide. Not taken from the paid practice exams, not
 * recalled exam content, and not presented as real exam questions.
 */
const GUIDE_BASE = "https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02";
const D2 = { label: "AWS — MLA-C02 exam guide, Content Domain 2", url: `${GUIDE_BASE}/machine-learning-engineer-associate-02-domain2.html` };

export const awsMlaC02Questions: PracticeQuestionSet = {
  slug: "aws-mla-c02",
  intro:
    "15 original MLA-C02 practice questions across the four content domains of the AWS exam guide, weighted roughly like the real exam. They cover both traditional ML on Amazon SageMaker AI and generative AI on Amazon Bedrock. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "MLA-C02 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original MLA-C02 practice questions on SageMaker AI, Bedrock, RAG, agents, MLOps, monitoring and security — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: Data Preparation for ML and AI ─────────────────────────── */
    {
      id: "mlac02-d1-parquet",
      domain: "d1",
      objective: "1.1 Collect and store data",
      difficulty: "foundation",
      question:
        "A team stores several terabytes of training data in Amazon S3 as CSV files with 300 columns. Most Amazon Athena queries and processing jobs read only 10–15 columns and filter on a few of them. Which change best reduces the amount of data scanned?",
      options: [
        { id: "A", text: "Convert the files to JSON Lines", rationale: "JSON is a row-based text format. Every record still has to be read in full, and the field names repeated in each record add size." },
        { id: "B", text: "Combine all CSV files into one large file", rationale: "File consolidation can reduce overhead from many small files, but a single CSV file is still row-based and is scanned in full." },
        { id: "C", text: "Convert the data to Apache Parquet", rationale: "Correct. Parquet is a columnar format with per-column compression, and block statistics allow engines such as Athena to skip data they do not need." },
        { id: "D", text: "Compress the CSV files with gzip", rationale: "Compression reduces storage, but a gzip CSV file still has to be decompressed and read row by row, including the unused columns." },
      ],
      answer: "C",
      explanation:
        "The exam guide asks you to choose data formats such as Parquet, JSON, CSV and ORC based on access patterns. When queries touch a few columns of wide tables, a columnar format like Parquet or ORC is the standard choice.",
      reference: { label: "Amazon Athena — Use columnar storage formats", url: "https://docs.aws.amazon.com/athena/latest/ug/columnar-storage.html" },
    },
    {
      id: "mlac02-d1-feature-store",
      domain: "d1",
      objective: "1.2 Perform data transformation, feature engineering, and pre-processing",
      difficulty: "intermediate",
      question:
        "A fraud model needs the latest customer features at inference time with low latency, and the data science team needs the full feature history to build training datasets. The team wants one managed service for both. What should you use?",
      options: [
        { id: "A", text: "Amazon SageMaker Feature Store with both the online store and the offline store enabled", rationale: "Correct. The online store serves the latest record for real-time lookup, the offline store keeps the full history in Amazon S3 for training, and by default each ingested record is written to both stores." },
        { id: "B", text: "Amazon SageMaker Feature Store with only the offline store enabled", rationale: "The offline store is for cases where sub-second reads are not needed, such as training and batch inference. It does not meet the low-latency requirement." },
        { id: "C", text: "AWS Glue DataBrew recipes", rationale: "DataBrew prepares and cleans data. It does not serve features to models at inference time." },
        { id: "D", text: "An Amazon S3 bucket queried with Amazon Athena at inference time", rationale: "Athena queries on S3 are not designed for low-latency lookups during real-time inference." },
      ],
      answer: "A",
      explanation:
        "Feature Store has two stores for two jobs: online for low-latency lookup of the latest values, offline for history used in training and batch inference. Ingesting into one feature group with both stores enabled helps keep training and serving features consistent.",
      reference: { label: "Amazon SageMaker AI — Feature Store concepts", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-concepts.html" },
    },
    {
      id: "mlac02-d1-hierarchical-chunking",
      domain: "d1",
      objective: "1.2 Perform data transformation, feature engineering, and pre-processing",
      difficulty: "advanced",
      question:
        "You are building an Amazon Bedrock knowledge base over long technical manuals. Retrieval must match on small, precise passages, but the model should then receive the wider surrounding section as context. Which chunking strategy fits best?",
      options: [
        { id: "A", text: "No chunking", rationale: "Each document becomes a single chunk, so retrieval cannot match precise passages within long manuals." },
        { id: "B", text: "Fixed-size chunking with a large overlap", rationale: "Overlap reduces the risk of cutting information at chunk boundaries, but every chunk is still one size, so you trade precision against context." },
        { id: "C", text: "Default chunking", rationale: "Default chunking splits text into chunks of roughly 300 tokens. It does not return a larger parent section after matching." },
        { id: "D", text: "Hierarchical chunking", rationale: "Correct. Hierarchical chunking creates parent and child chunks. Retrieval matches the small child chunks and replaces them with their parent chunks to give the model more context." },
      ],
      answer: "D",
      explanation:
        "Preparing documents for RAG, including chunking strategies, is a named skill in the exam guide. Hierarchical chunking separates the unit used for matching (child) from the unit passed to the model (parent).",
      reference: { label: "Amazon Bedrock — How content chunking works for knowledge bases", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/kb-chunking.html" },
    },
    {
      id: "mlac02-d1-clarify-ci",
      domain: "d1",
      objective: "1.3 Validate data quality and manage bias",
      difficulty: "intermediate",
      question:
        "Before training a loan approval model, you must check whether one age group is heavily under-represented in the training data compared with another. No model exists yet. Which approach is most appropriate?",
      options: [
        { id: "A", text: "Calculate SHAP values with SageMaker Clarify", rationale: "SHAP values explain how features influence a trained model's predictions, so they require a model." },
        { id: "B", text: "Run a SageMaker Clarify pre-training bias analysis and review the Class Imbalance (CI) metric for the age facet", rationale: "Correct. Pre-training bias metrics are computed on the raw dataset, and CI measures whether one facet has fewer samples than another." },
        { id: "C", text: "Deploy the model and compare predictions by age group", rationale: "This measures post-training bias and requires a trained model, which does not exist yet." },
        { id: "D", text: "Run AWS Glue Data Quality rules for completeness", rationale: "Completeness checks find missing values. They do not measure the representation of one group relative to another." },
      ],
      answer: "B",
      explanation:
        "Clarify's pre-training metrics are model-agnostic and run on the data alone. A CI value near −1 or 1 signals strong imbalance between facets, which you may want to fix by rebalancing the sample before training.",
      reference: { label: "Amazon SageMaker AI — Class Imbalance (CI)", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-bias-metric-class-imbalance.html" },
    },

    /* ── Domain 2: ML Model and Foundation Model (FM) Development ──────────── */
    {
      id: "mlac02-d2-textract",
      domain: "d2",
      objective: "2.1 Choose appropriate modeling approaches for ML and AI solutions",
      difficulty: "foundation",
      question:
        "An insurer receives thousands of scanned claim forms each day and needs to extract form fields and tables into a structured format. The team has no labelled data and wants the least development effort. What should you use?",
      options: [
        { id: "A", text: "Amazon Textract", rationale: "Correct. Textract is a managed AI service that detects typed and handwritten text and extracts forms and tables from documents, without training a model." },
        { id: "B", text: "Amazon Comprehend", rationale: "Comprehend analyses text, for example for entities or sentiment. It does not extract form fields and tables from scanned images." },
        { id: "C", text: "Amazon Rekognition", rationale: "Rekognition analyses images and video, such as objects and faces. It is not designed for structured document extraction." },
        { id: "D", text: "A custom computer vision model trained with SageMaker AI", rationale: "This is possible but requires labelled data and much more effort than a managed service built for the task." },
      ],
      answer: "A",
      explanation:
        "The exam guide expects you to apply AWS AI services to specific business problems and to weigh managed services against custom models. When a managed service already does the job, it is usually the lowest-effort answer.",
      reference: { label: "Amazon Textract — What is Amazon Textract?", url: "https://docs.aws.amazon.com/textract/latest/dg/what-is.html" },
    },
    {
      id: "mlac02-d2-spot-training",
      domain: "d2",
      objective: "2.1 Choose appropriate modeling approaches for ML and AI solutions",
      difficulty: "intermediate",
      question:
        "A training job runs for about 10 hours each week. It is not time-critical and the team wants to reduce training cost significantly. The training script can save its state. What should you configure?",
      options: [
        { id: "A", text: "A larger instance type so the job finishes sooner", rationale: "A larger instance may shorten the job, but it does not necessarily reduce cost, and it ignores the cheapest compute option available." },
        { id: "B", text: "A real-time endpoint that stays running between training runs", rationale: "Endpoints serve inference. Keeping one running adds cost and does not train the model." },
        { id: "C", text: "Managed spot training with checkpointing to Amazon S3", rationale: "Correct. Managed spot training uses Spot capacity, which AWS says can cut training costs by up to 90% compared with on-demand. Checkpoints let an interrupted job resume instead of restarting." },
        { id: "D", text: "Managed spot training without checkpointing and with MaxWaitTimeInSeconds equal to MaxRuntimeInSeconds", rationale: "Without checkpoints, every Spot interruption restarts the 10-hour job from the beginning, and a wait time equal to the runtime leaves no time to wait for Spot capacity or to recover from interruptions." },
      ],
      answer: "C",
      explanation:
        "Spot training trades guaranteed capacity for lower cost, which suits jobs that are not time-critical. Managed spot training does not fall back to on-demand instances, so checkpointing and a sensible wait time are essential.",
      reference: { label: "Amazon SageMaker AI — Managed Spot Training", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html" },
    },
    {
      id: "mlac02-d2-overfitting",
      domain: "d2",
      objective: "2.2 Train, fine-tune, and customize models for ML and AI solutions",
      difficulty: "foundation",
      question:
        "During training, the training loss keeps falling, but after epoch 12 the validation loss starts to rise steadily. What is happening, and what is a suitable response?",
      options: [
        { id: "A", text: "The model is underfitting; add more epochs", rationale: "Underfitting shows as high loss on both training and validation data. More epochs would make the observed problem worse." },
        { id: "B", text: "The model is overfitting; use early stopping or add regularisation", rationale: "Correct. A falling training loss with a rising validation loss means the model is memorising the training data. Early stopping, regularisation, dropout or more data help." },
        { id: "C", text: "The learning rate is too low; increase it sharply", rationale: "A learning rate that is too low slows both losses down. It does not explain diverging training and validation losses." },
        { id: "D", text: "The validation set is too large; remove most of it", rationale: "Shrinking the validation set only hides the problem and makes the evaluation less reliable." },
      ],
      answer: "B",
      explanation:
        "Preventing overfitting and underfitting is a named skill, and early stopping is listed as a training time reduction technique. Watch the gap between training and validation metrics, not the training loss alone.",
      reference: D2,
    },
    {
      id: "mlac02-d2-llm-judge",
      domain: "d2",
      objective: "2.3 Analyze and evaluate the performance of ML and AI systems",
      difficulty: "intermediate",
      question:
        "A team wants to compare two foundation models on 500 of its own prompts, scoring each response for quality with explanations. It does not have reference answers and cannot staff a human review team. Which approach fits best?",
      options: [
        { id: "A", text: "Calculate ROUGE scores", rationale: "ROUGE compares generated text with reference text. Without reference answers it cannot be calculated." },
        { id: "B", text: "Amazon Bedrock model evaluation jobs with a human work team", rationale: "Human evaluation is valuable, but the team cannot staff reviewers." },
        { id: "C", text: "Compare the CloudWatch invocation latency of both models", rationale: "Latency is a useful operational metric, but it says nothing about response quality." },
        { id: "D", text: "Amazon Bedrock model evaluation jobs that use a model as a judge, one for each model", rationale: "Correct. In LLM-as-a-judge evaluation, an evaluator model scores each prompt and response pair against the selected metrics and explains its scores. Each job evaluates one generator model, so you run one job per model and compare the results." },
      ],
      answer: "D",
      explanation:
        "The exam guide names LLM-as-a-judge frameworks, human-in-the-loop evaluation and NLP metrics such as BLEU and ROUGE. Pick the method that fits what you have: references, reviewers or neither.",
      reference: { label: "Amazon Bedrock — Model evaluation jobs that use a model as a judge", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html" },
    },

    /* ── Domain 3: Deployment and Orchestration of ML and AI Workflows ──────── */
    {
      id: "mlac02-d3-async-inference",
      domain: "d3",
      objective: "3.1 Manage deployment infrastructure for ML and AI model types",
      difficulty: "intermediate",
      question:
        "A model processes uploaded audio files of up to 500 MB. Each request takes 10–20 minutes, requests arrive irregularly with long idle periods, and users can wait for the result. Which SageMaker AI inference option fits best?",
      options: [
        { id: "A", text: "Asynchronous inference", rationale: "Correct. Asynchronous inference queues requests, supports payloads up to 1 GB stored in Amazon S3 and processing times up to one hour, and can scale to zero instances when idle." },
        { id: "B", text: "Real-time inference", rationale: "Real-time endpoints are designed for low-latency, interactive requests, not for large payloads that take many minutes to process." },
        { id: "C", text: "Serverless inference", rationale: "Serverless inference suits intermittent traffic with small, quick requests. It is not designed for 500 MB payloads and 20-minute processing." },
        { id: "D", text: "Batch transform scheduled once a month", rationale: "Batch transform processes whole datasets offline. A monthly schedule would leave users waiting far too long." },
      ],
      answer: "A",
      explanation:
        "Choosing between real-time, serverless, asynchronous and batch inference is a core deployment decision. Large payloads, long processing and near-real-time expectations point to asynchronous inference.",
      reference: { label: "Amazon SageMaker AI — Asynchronous inference", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/async-inference.html" },
    },
    {
      id: "mlac02-d3-custom-model-import",
      domain: "d3",
      objective: "3.1 Manage deployment infrastructure for ML and AI model types",
      difficulty: "advanced",
      question:
        "A team fine-tuned a Llama 3.1 model outside AWS and wants to call it through the same Amazon Bedrock APIs it uses for other models, without managing inference instances. What should it do?",
      options: [
        { id: "A", text: "Upload the model to an Amazon Bedrock knowledge base", rationale: "Knowledge bases store and retrieve documents for RAG. They do not host models." },
        { id: "B", text: "Package the model as a Bedrock agent action group", rationale: "Action groups define the actions an agent can call. They do not host a foundation model." },
        { id: "C", text: "Store the weights in Hugging Face format (including .safetensors files) in Amazon S3 and create an Amazon Bedrock Custom Model Import job", rationale: "Correct. Custom Model Import imports supported architectures such as Llama from Amazon S3 and lets you invoke the model with InvokeModel, with on-demand throughput." },
        { id: "D", text: "Convert the model with SageMaker Neo and deploy it to an edge device", rationale: "Neo optimises models for edge targets. That does not make the model callable through Amazon Bedrock." },
      ],
      answer: "C",
      explanation:
        "The exam guide names Amazon Bedrock Custom Model Import for deploying models built outside AWS. Check the supported architectures and file requirements, and remember that SageMaker AI is the alternative when you need full control of hosting.",
      reference: { label: "Amazon Bedrock — Custom Model Import", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html" },
    },
    {
      id: "mlac02-d3-agent-memory",
      domain: "d3",
      objective: "3.2 Provision and configure resources for ML and AI workloads based on existing architecture and requirements",
      difficulty: "intermediate",
      question:
        "A travel booking agent runs on Amazon Bedrock AgentCore. It must remember the context within a conversation and also recall user preferences, such as a preferred seat, in later sessions — without the team building its own storage layer. What should you use?",
      options: [
        { id: "A", text: "A larger context window on the model", rationale: "A larger context window helps within one request, but it does not persist preferences across separate sessions." },
        { id: "B", text: "AgentCore Memory with short-term and long-term memory", rationale: "Correct. Short-term memory keeps turn-by-turn context within a session, and long-term memory extracts and stores insights such as user preferences across sessions." },
        { id: "C", text: "Amazon Bedrock Prompt Management", rationale: "Prompt Management stores and versions prompts. It does not keep per-user conversation state." },
        { id: "D", text: "CloudWatch Logs Insights queries on past conversations", rationale: "Logs support troubleshooting and analysis. They are not a memory store the agent uses at runtime." },
      ],
      answer: "B",
      explanation:
        "Implementing agent state management systems is a new skill in MLA-C02. AgentCore Memory provides managed short-term and long-term memory, so agents are not stateless between interactions.",
      reference: { label: "Amazon Bedrock AgentCore — Memory", url: "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory.html" },
    },
    {
      id: "mlac02-d3-model-registry",
      domain: "d3",
      objective: "3.3 Implement automated orchestration and continuous integration and continuous delivery (CI/CD) pipelines for MLOps and AI workloads",
      difficulty: "intermediate",
      question:
        "A SageMaker AI pipeline retrains a model weekly. A reviewer must sign off each new model version before deployment, and the decision must be recorded for audits. Deployment should then start automatically. Which design fits best?",
      options: [
        { id: "A", text: "Deploy every new model to production and roll back if complaints arrive", rationale: "This skips the required sign-off and leaves no approval record." },
        { id: "B", text: "Email the model artefact location to the reviewer and deploy manually after a reply", rationale: "This is manual, error-prone and leaves no structured record linked to the model version." },
        { id: "C", text: "Store each model in a new S3 prefix and let the reviewer rename the folder", rationale: "S3 prefixes do not provide versioned approval status or deployment integration." },
        { id: "D", text: "Register each version in SageMaker Model Registry with the status PendingManualApproval, and let a change to Approved start the CI/CD deployment", rationale: "Correct. Model Registry tracks versions with an approval status, and with a SageMaker AI project template, approving a version initiates CI/CD deployment." },
      ],
      answer: "D",
      explanation:
        "The exam guide lists managing model versions for repeatability and audits, for example with SageMaker Model Registry. The approval status becomes the gate between training and deployment.",
      reference: { label: "Amazon SageMaker AI — Update the approval status of a model", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-approve.html" },
    },

    /* ── Domain 4: Operating, Monitoring, and Securing ML and AI Solutions ─── */
    {
      id: "mlac02-d4-ab-testing",
      domain: "d4",
      objective: "4.1 Monitor ML and AI model inference and performance",
      difficulty: "intermediate",
      question:
        "You want to send 10% of live traffic to a new model version on an existing SageMaker AI real-time endpoint, compare it with the current model, and then gradually shift traffic without redeploying the endpoint. What should you do?",
      options: [
        { id: "A", text: "Add the new model as a second production variant with a lower weight, compare per-variant metrics, then adjust weights with UpdateEndpointWeightsAndCapacities", rationale: "Correct. Production variant weights control the traffic split, and UpdateEndpointWeightsAndCapacities changes them without updating the endpoint." },
        { id: "B", text: "Deploy the new model to a separate endpoint and switch DNS once a week", rationale: "This creates an all-or-nothing switch and gives no controlled, weighted split on one endpoint." },
        { id: "C", text: "Run both models in a batch transform job each night", rationale: "Batch transform does not test the model on live traffic." },
        { id: "D", text: "Set TargetVariant on every request to the new model", rationale: "TargetVariant forces each request to one variant. Setting it on every request would send all traffic to the new model, not 10%." },
      ],
      answer: "A",
      explanation:
        "Monitoring model performance in production with A/B testing is a named skill. Weighted production variants give you a controlled split, and per-variant CloudWatch metrics show how each version behaves.",
      reference: { label: "Amazon SageMaker AI — Test models with production variants", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html" },
    },
    {
      id: "mlac02-d4-serverless",
      domain: "d4",
      objective: "4.2 Optimize and manage ML and AI infrastructure costs and performance",
      difficulty: "intermediate",
      question:
        "A small CPU-based model behind an internal tool receives a few hundred requests per day, mostly during office hours, and is idle overnight and at weekends. An always-on ml.m5.large endpoint is costing more than the tool is worth. Occasional cold-start latency is acceptable. What should you do?",
      options: [
        { id: "A", text: "Move the model to a GPU instance", rationale: "A GPU instance costs more and the CPU-based model does not need it." },
        { id: "B", text: "Deploy the model with SageMaker Serverless Inference", rationale: "Correct. Serverless Inference is pay-per-use, scales the endpoint down to zero when there are no requests and suits intermittent traffic where cold starts are acceptable." },
        { id: "C", text: "Add a second instance to the existing endpoint for availability", rationale: "This doubles the cost of an endpoint that is already underused." },
        { id: "D", text: "Use Provisioned Concurrency for 24 hours a day", rationale: "Provisioned Concurrency keeps capacity warm and is billed for it, which removes most of the saving for a mostly idle endpoint." },
      ],
      answer: "B",
      explanation:
        "Matching capacity to the traffic pattern is a core cost skill. Intermittent, unpredictable traffic with tolerance for cold starts points to serverless inference; predictable bursts may justify Provisioned Concurrency.",
      reference: { label: "Amazon SageMaker AI — Serverless Inference", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/serverless-endpoints.html" },
    },
    {
      id: "mlac02-d4-guardrails-pii",
      domain: "d4",
      objective: "4.3 Secure ML and AI workloads and model endpoints",
      difficulty: "advanced",
      question:
        "A customer support assistant built on Amazon Bedrock must never show email addresses or phone numbers in its responses. Responses should still be returned, with the personal data replaced by a placeholder. What should you configure?",
      options: [
        { id: "A", text: "A denied topic for personal data in Amazon Bedrock Guardrails", rationale: "Denied topics block whole subjects of conversation. They do not replace individual pieces of personal data inside an otherwise valid response." },
        { id: "B", text: "Encrypt the model invocation logs with an AWS KMS key", rationale: "Encryption protects stored logs. It does not change what the model returns to the user." },
        { id: "C", text: "An Amazon Bedrock guardrail with a sensitive information filter that masks EMAIL and PHONE in outputs", rationale: "Correct. Sensitive information filters can block or mask PII. Masking replaces the detected value with its type, such as {EMAIL}, and can be set separately for inputs and outputs." },
        { id: "D", text: "An IAM policy that denies bedrock:InvokeModel for responses containing PII", rationale: "IAM controls who may call an API. It cannot inspect or alter the content of a model response." },
      ],
      answer: "C",
      explanation:
        "The exam guide names Amazon Bedrock Guardrails for safeguards and sensitive data protection. Choose mask when the response should still be delivered, and block when any detection should stop the response.",
      reference: { label: "Amazon Bedrock — Remove PII from conversations by using sensitive information filters", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html" },
    },
  ],
};
