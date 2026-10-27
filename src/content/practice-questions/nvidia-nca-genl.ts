import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free NVIDIA NCA-GENL sample questions — ORIGINAL questions written by CertRamp
 * against the exam topics published on nvidia.com (checked 27 October 2026).
 * Not taken from the paid practice exams, not recalled exam content, and not
 * presented as real exam questions.
 */
const EXAM = {
  label: "NVIDIA — NCA-GENL Generative AI LLMs certification exam",
  url: "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/",
};
const PROMPTING = {
  label: "NVIDIA Technical Blog — An introduction to LLMs: prompt engineering and p-tuning",
  url: "https://developer.nvidia.com/blog/an-introduction-to-large-language-models-prompt-engineering-and-p-tuning/",
};
const RAG = {
  label: "NVIDIA Blog — What is retrieval-augmented generation?",
  url: "https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/",
};
const INFERENCE = {
  label: "NVIDIA Technical Blog — Mastering LLM techniques: inference optimization",
  url: "https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/",
};
const TRITON = {
  label: "NVIDIA Docs — Triton Inference Server quickstart",
  url: "https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/getting_started/quickstart.html",
};
const GUARDRAILS = {
  label: "NVIDIA Docs — NeMo Guardrails",
  url: "https://docs.nvidia.com/nemo/guardrails/latest/index.html",
};

export const nvidiaNcaGenlQuestions: PracticeQuestionSet = {
  slug: "nvidia-nca-genl",
  intro:
    "15 original NCA-GENL practice questions across the five topic areas NVIDIA publishes for the Generative AI LLMs associate exam, weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "NCA-GENL Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original NVIDIA NCA-GENL practice questions on transformers, RAG, prompting, LoRA, RLHF, inference and trustworthy AI, each fully explained.",
  },
  questions: [
    /* ── Topic 1: Core Machine Learning and AI Knowledge (30%) ─────────────── */
    {
      id: "genl-d1-self-attention",
      domain: "d1",
      objective: "Read research papers (articles, conference papers, etc.) to identify emerging LLM trends and technologies.",
      difficulty: "foundation",
      question:
        "The paper \"Attention Is All You Need\" introduced the transformer architecture. What did the transformer replace in earlier sequence-to-sequence models?",
      options: [
        { id: "A", text: "Attention mechanisms, which it replaced with recurrence", rationale: "It is the other way round: the transformer keeps attention and removes recurrence." },
        { id: "B", text: "Tokenisation, which it replaced with character-level input", rationale: "The transformer still works on tokens; the paper is about the network architecture, not the input encoding." },
        { id: "C", text: "Recurrent and convolutional layers, which it replaced with attention", rationale: "Correct. The transformer relies solely on attention mechanisms and dispenses with recurrence and convolutions entirely." },
        { id: "D", text: "Backpropagation, which it replaced with reinforcement learning", rationale: "Transformers are trained with backpropagation and gradient descent like other neural networks." },
      ],
      answer: "C",
      explanation:
        "Because self-attention relates every token to every other token directly, transformers process a sequence in parallel instead of step by step. This made much larger training runs practical and is the basis of today's LLMs.",
      reference: { label: "arXiv — Attention Is All You Need (suggested reading on the NCA-GENL page)", url: "https://arxiv.org/abs/1706.03762" },
    },
    {
      id: "genl-d1-embedding-mismatch",
      domain: "d1",
      objective: "Select and use models to create text embeddings.",
      difficulty: "intermediate",
      question:
        "A team embedded its document collection with embedding model X. To save cost, a developer embeds user queries with a different, smaller embedding model Y. Retrieval quality collapses. What is the most likely cause?",
      options: [
        { id: "A", text: "The vector database cannot store vectors created on a GPU", rationale: "Vectors are just arrays of numbers; where they were computed does not matter." },
        { id: "B", text: "The LLM's context window is too small", rationale: "The problem occurs before the LLM is called: the wrong chunks are retrieved." },
        { id: "C", text: "The documents should have been tokenised with a stemmer first", rationale: "Embedding models use their own tokenisers; stemming is not required and would not explain the collapse." },
        { id: "D", text: "Query and document vectors come from different embedding spaces, so similarity scores are not meaningful", rationale: "Correct. Similarity search only works when queries and documents are embedded by the same model (or models trained to share a space)." },
      ],
      answer: "D",
      explanation:
        "Each embedding model learns its own vector space, and often its own dimensionality. Comparing a query vector from one model with document vectors from another gives meaningless distances, so the same model must be used for indexing and querying.",
      reference: RAG,
    },
    {
      id: "genl-d1-few-shot",
      domain: "d1",
      objective: "Use prompt engineering principles to create prompts to achieve desired results.",
      difficulty: "foundation",
      question:
        "You want an LLM to classify support tickets into three categories and return the label in a fixed format. You cannot change the model's weights. Which prompting technique most directly shows the model the expected behaviour?",
      options: [
        { id: "A", text: "Zero-shot prompting with only the ticket text", rationale: "Zero-shot gives no examples of the expected output, so format and labels are more likely to drift." },
        { id: "B", text: "Few-shot prompting with several example tickets and their correct labels", rationale: "Correct. A few worked examples in the prompt show the model the categories and the output format without any training." },
        { id: "C", text: "Raising the temperature to make the output more varied", rationale: "Higher temperature increases randomness, which works against a fixed label format." },
        { id: "D", text: "LoRA fine-tuning on the ticket history", rationale: "LoRA changes (adds) trainable weights, which the requirement rules out." },
      ],
      answer: "B",
      explanation:
        "Few-shot prompting lets the model learn the task from examples inside the prompt. It is usually the first step before considering parameter-efficient tuning or full fine-tuning.",
      reference: PROMPTING,
    },
    {
      id: "genl-d1-rag-use-case",
      domain: "d1",
      objective: "Build LLM use cases such as retrieval-augmented generation (RAG), chatbots, and summarizers.",
      difficulty: "intermediate",
      question:
        "An internal assistant must answer questions about company policies that change every week, and each answer must point to the policy document it came from. Which approach fits best?",
      options: [
        { id: "A", text: "Retrieval-augmented generation over an indexed copy of the policy documents", rationale: "Correct. RAG retrieves the current documents at query time, so updates take effect without retraining and the sources can be cited." },
        { id: "B", text: "Full fine-tuning of the LLM on the policies every week", rationale: "Weekly retraining is slow and expensive, and a fine-tuned model still cannot reliably cite which document an answer came from." },
        { id: "C", text: "A longer system prompt telling the model to be accurate", rationale: "Instructions alone do not give the model knowledge it does not have." },
        { id: "D", text: "Lowering the temperature to zero", rationale: "Deterministic decoding makes output repeatable but does not add current facts." },
      ],
      answer: "A",
      explanation:
        "RAG grounds answers in retrieved content, reduces hallucinations and lets the application show its sources. New documents only need to be embedded and added to the index.",
      reference: RAG,
    },
    {
      id: "genl-d1-cross-validation",
      domain: "d1",
      objective: "Familiarity with the fundamentals of machine learning (e.g., feature engineering, model comparison, cross validation).",
      difficulty: "foundation",
      question:
        "You have a small labelled dataset and want a reliable estimate of how two classifiers will perform on unseen data. What does k-fold cross-validation give you?",
      options: [
        { id: "A", text: "A larger dataset, because each record is duplicated k times", rationale: "Cross-validation does not create new data; it re-uses the existing data in different splits." },
        { id: "B", text: "An average score across k train/validation splits, so every record is used for validation exactly once", rationale: "Correct. The data is split into k folds; each fold serves once as the validation set while the others are used for training." },
        { id: "C", text: "A guarantee that the model will not overfit", rationale: "Cross-validation helps detect overfitting; it does not prevent it." },
        { id: "D", text: "The optimal learning rate for each model", rationale: "It can be used inside hyperparameter search, but by itself it only estimates performance." },
      ],
      answer: "B",
      explanation:
        "Averaging over k folds gives a more stable performance estimate than one train/test split, which matters most with small datasets. It is a standard way to compare models fairly.",
      reference: EXAM,
    },

    /* ── Topic 2: Data Analysis (14%) ──────────────────────────────────────── */
    {
      id: "genl-d2-r-squared",
      domain: "d2",
      objective: "Compare models using statistical performance metrics, such as loss functions or proportion of explained variance.",
      difficulty: "foundation",
      question:
        "A regression model predicting GPU inference latency has an R² of 0.82 on the test set. What does this mean?",
      options: [
        { id: "A", text: "82% of predictions are exactly correct", rationale: "R² is not an accuracy rate; regression predictions are rarely exactly correct." },
        { id: "B", text: "The model explains about 82% of the variance in latency", rationale: "Correct. R² (the coefficient of determination) is the proportion of variance in the target explained by the model." },
        { id: "C", text: "The mean squared error is 0.18", rationale: "R² is relative to the variance of the target; it cannot be converted to MSE without knowing that variance." },
        { id: "D", text: "The model is 82% likely to generalise", rationale: "R² describes fit on the evaluated data, not a probability of generalisation." },
      ],
      answer: "B",
      explanation:
        "R² compares the model's errors with those of simply predicting the mean. A value of 1 is a perfect fit, 0 is no better than the mean, and it can be negative for a model that is worse than the mean.",
      reference: EXAM,
    },
    {
      id: "genl-d2-loss-curves",
      domain: "d2",
      objective: "Identify relationships and trends or any factors that could affect the results of research.",
      difficulty: "intermediate",
      question:
        "You plot training and validation loss per epoch for a fine-tuning run. Training loss keeps falling, but validation loss starts rising after epoch 3. What does this trend indicate?",
      options: [
        { id: "A", text: "The learning rate is too low", rationale: "A too-low learning rate typically makes both losses fall slowly, not diverge." },
        { id: "B", text: "The model is underfitting", rationale: "Underfitting shows as high training loss; here the training loss keeps improving." },
        { id: "C", text: "The validation set is too large", rationale: "A larger validation set gives a more reliable estimate; it does not cause loss to rise." },
        { id: "D", text: "The model has started to overfit the training data", rationale: "Correct. Diverging curves mean the model is memorising training data instead of generalising." },
      ],
      answer: "D",
      explanation:
        "Plotting both curves is the quickest way to spot overfitting. Typical responses are early stopping at the best validation checkpoint, more or more varied data, or stronger regularisation.",
      reference: EXAM,
    },

    /* ── Topic 3: Experimentation (22%) ────────────────────────────────────── */
    {
      id: "genl-d3-subword-tokenisation",
      domain: "d3",
      objective: "Assist in preparing (e.g., scraping, tokenization) large datasets for pretraining, fine-tuning, and RLHF.",
      difficulty: "intermediate",
      question:
        "Why do most LLMs use subword tokenisation (for example byte-pair encoding) rather than a fixed vocabulary of whole words?",
      options: [
        { id: "A", text: "It guarantees that every word becomes exactly one token", rationale: "The opposite: rare words are split into several subword tokens." },
        { id: "B", text: "It removes the need for an embedding layer", rationale: "Tokens are still mapped to embedding vectors; subword tokenisation only changes what a token is." },
        { id: "C", text: "Rare or unseen words can be represented from smaller known pieces, keeping the vocabulary a manageable size", rationale: "Correct. Subword vocabularies avoid out-of-vocabulary failures while keeping common words as single tokens." },
        { id: "D", text: "It makes token counts identical across all languages", rationale: "Token counts vary considerably between languages and scripts with the same tokeniser." },
      ],
      answer: "C",
      explanation:
        "Subword tokenisers balance vocabulary size against sequence length. Because token counts drive context limits and cost, the tokeniser matters when you prepare datasets and estimate training or inference budgets.",
      reference: EXAM,
    },
    {
      id: "genl-d3-rlhf-reward-model",
      domain: "d3",
      objective: "Awareness of, and/or participation in, data collection from human subjects (e.g., RLHF).",
      difficulty: "intermediate",
      question:
        "In reinforcement learning from human feedback (RLHF), what data do human annotators typically provide to train the reward model?",
      options: [
        { id: "A", text: "Rankings or pairwise comparisons of several model responses to the same prompt", rationale: "Correct. Relative judgements are more consistent between annotators than absolute scores and are turned into a scalar reward." },
        { id: "B", text: "The model's weights adjusted by hand", rationale: "Humans never edit weights directly; the reward model and the RL step do the learning." },
        { id: "C", text: "Tokenised pretraining text scraped from the web", rationale: "That is pretraining data, not human preference data." },
        { id: "D", text: "Labelled validation loss curves", rationale: "Loss curves are training diagnostics, not feedback on response quality." },
      ],
      answer: "A",
      explanation:
        "RLHF trains a reward model on human preferences and then optimises the LLM against it with reinforcement learning, commonly PPO with a KL penalty that keeps it close to the original model. Collecting this data involves human subjects, which raises consent and quality considerations.",
      reference: EXAM,
    },
    {
      id: "genl-d3-lora",
      domain: "d3",
      objective: "Assist in model training and training optimization under the supervision of a senior team member.",
      difficulty: "advanced",
      question:
        "Your team must adapt a large pretrained LLM to a specialist domain on limited GPU memory and wants no extra inference latency after deployment. Which approach fits best?",
      options: [
        { id: "A", text: "Full fine-tuning of all weights with the Adam optimiser", rationale: "Updating every weight needs the most GPU memory, because gradients and optimiser states are kept for all parameters." },
        { id: "B", text: "Training a new model from scratch on the domain data", rationale: "Pretraining from scratch needs far more data and compute than adaptation." },
        { id: "C", text: "Adding adapter layers that run in sequence at inference", rationale: "Classic adapter layers add computation to the forward pass, which adds inference latency." },
        { id: "D", text: "LoRA, which freezes the pretrained weights and trains small low-rank matrices", rationale: "Correct. LoRA trains a tiny fraction of the parameters, and the learned matrices can be merged into the weights so inference is no slower." },
      ],
      answer: "D",
      explanation:
        "LoRA is a parameter-efficient fine-tuning (PEFT) method. Its paper reports about 10,000 times fewer trainable parameters and about three times less GPU memory than full fine-tuning of GPT-3 175B, with no additional inference latency.",
      reference: { label: "arXiv — LoRA: Low-Rank Adaptation of Large Language Models (suggested reading on the NCA-GENL page)", url: "https://arxiv.org/abs/2106.09685" },
    },

    /* ── Topic 4: Software Development (24%) ───────────────────────────────── */
    {
      id: "genl-d4-triton",
      domain: "d4",
      objective: "Identify system data, hardware, or software components required to meet user needs.",
      difficulty: "foundation",
      question:
        "A team must serve a PyTorch model, an ONNX model and a TensorRT-LLM engine from one inference service, exposed over HTTP and gRPC. Which NVIDIA component is designed for this?",
      options: [
        { id: "A", text: "RAPIDS cuDF", rationale: "cuDF is a GPU DataFrame library for data processing, not a model server." },
        { id: "B", text: "Triton Inference Server", rationale: "Correct. Triton serves models from a model repository through multiple framework backends and exposes HTTP and gRPC endpoints." },
        { id: "C", text: "NeMo Guardrails", rationale: "NeMo Guardrails adds safety and topic controls to LLM applications; it does not host models." },
        { id: "D", text: "spaCy", rationale: "spaCy is a Python NLP library, not an inference server." },
      ],
      answer: "B",
      explanation:
        "Triton loads models from a model repository and supports backends such as PyTorch, ONNX Runtime, TensorRT, TensorRT-LLM and Python. One server can host many models behind standard HTTP and gRPC APIs.",
      reference: TRITON,
    },
    {
      id: "genl-d4-kv-cache",
      domain: "d4",
      objective: "Assist in the deployment and evaluations of model scalability, performance, and reliability under the supervision of a senior team member.",
      difficulty: "advanced",
      question:
        "A model's weights fit comfortably in GPU memory, but the service runs out of memory when many users send long conversations at the same time. Which part of LLM inference grows with batch size and sequence length and most likely explains this?",
      options: [
        { id: "A", text: "The tokeniser vocabulary", rationale: "The vocabulary is fixed in size and does not grow with traffic." },
        { id: "B", text: "The model weights", rationale: "Weights are loaded once and shared across requests; their size does not depend on the number of users." },
        { id: "C", text: "The key-value (KV) cache", rationale: "Correct. The keys and values of previous tokens are cached for every layer and every sequence, so memory grows with batch size and context length." },
        { id: "D", text: "The softmax output of the final token only", rationale: "A single output distribution per step is small compared with the cached attention state." },
      ],
      answer: "C",
      explanation:
        "KV caching avoids recomputing attention for earlier tokens during decoding, but the cache scales with layers, hidden size, batch size and sequence length. Capacity planning must include it, not just the weights.",
      reference: INFERENCE,
    },
    {
      id: "genl-d4-quantisation",
      domain: "d4",
      objective: "Identify system data, hardware, or software components required to meet user needs.",
      difficulty: "intermediate",
      question:
        "The weights of a 7-billion-parameter model need about 14 GB of GPU memory in FP16. Roughly how much memory do the weights need after quantisation to 8-bit integers (ignoring KV cache and runtime overhead)?",
      options: [
        { id: "A", text: "About 28 GB", rationale: "That would be 4 bytes per parameter (FP32), which is larger, not smaller." },
        { id: "B", text: "About 14 GB", rationale: "That is the FP16 size; quantisation reduces the bytes per parameter." },
        { id: "C", text: "About 1.75 GB", rationale: "That would correspond to 2 bits per parameter, not 8." },
        { id: "D", text: "About 7 GB", rationale: "Correct. 8 bits is 1 byte per parameter, so 7 billion parameters need about 7 GB, half the FP16 size." },
      ],
      answer: "D",
      explanation:
        "Weight memory is roughly parameters × bytes per parameter: FP16 uses 2 bytes, INT8 uses 1. Quantisation lets larger models fit on the same hardware, usually with a small accuracy trade-off that should be measured.",
      reference: INFERENCE,
    },
    {
      id: "genl-d4-spacy-ner",
      domain: "d4",
      objective: "Familiarity with the capabilities of Python natural language packages (spaCy, NumPy, vector databases, etc.).",
      difficulty: "foundation",
      question:
        "Before indexing documents for a RAG system, you want to extract organisation and place names from the text with a lightweight, traditional NLP pipeline in Python. Which package is designed for this?",
      options: [
        { id: "A", text: "spaCy, using its named entity recognition component", rationale: "Correct. spaCy pipelines include tokenisation, part-of-speech tagging and named entity recognition." },
        { id: "B", text: "NumPy", rationale: "NumPy provides numerical arrays and maths, not language processing." },
        { id: "C", text: "Matplotlib", rationale: "Matplotlib creates charts and plots; it does not analyse text." },
        { id: "D", text: "A vector database such as Milvus", rationale: "A vector database stores and searches embeddings; it does not extract entities from text." },
      ],
      answer: "A",
      explanation:
        "Traditional NLP tools such as spaCy are still useful in LLM pipelines, for example to extract metadata, clean text or split sentences before chunking and embedding.",
      reference: { label: "spaCy usage documentation (suggested reading on the NCA-GENL page)", url: "https://spacy.io/usage" },
    },

    /* ── Topic 5: Trustworthy AI (10%) ─────────────────────────────────────── */
    {
      id: "genl-d5-guardrails",
      domain: "d5",
      objective: "Describe how to use NVIDIA and other technologies to improve AI trustworthiness.",
      difficulty: "intermediate",
      question:
        "A customer-service chatbot must refuse off-topic requests and check its responses before they reach the user, without retraining the underlying LLM. Which NVIDIA technology is designed for this?",
      options: [
        { id: "A", text: "TensorRT-LLM", rationale: "TensorRT-LLM optimises inference performance; it does not enforce conversation policies." },
        { id: "B", text: "RAPIDS cuML", rationale: "cuML provides GPU-accelerated classical machine learning algorithms, not chatbot safety controls." },
        { id: "C", text: "NeMo Guardrails", rationale: "Correct. NeMo Guardrails adds programmable rails, such as input, output, dialog and topical rails, around an LLM application." },
        { id: "D", text: "Triton Inference Server", rationale: "Triton serves models efficiently but does not decide which topics a chatbot may discuss." },
      ],
      answer: "C",
      explanation:
        "Guardrails sit between the user, the application and the LLM, so policies can be changed without retraining the model. They complement other trustworthy AI measures such as bias evaluation, privacy controls and human oversight.",
      reference: GUARDRAILS,
    },
  ],
};
