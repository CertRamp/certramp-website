import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free ISTQB CT-GenAI sample questions — ORIGINAL questions written by CertRamp
 * for the CT-GenAI v1.1 syllabus. Not taken from the paid practice exams, not
 * taken from the ISTQB sample exam, not recalled exam content, and not
 * presented as real exam questions.
 */
const CERT_PAGE = {
  label: "ISTQB — CT-GenAI certification page (syllabus v1.1)",
  url: "https://istqb.org/certifications/gen-ai/",
};

export const istqbCtGenaiQuestions: PracticeQuestionSet = {
  slug: "istqb-ct-genai",
  intro:
    "15 original CT-GenAI practice questions across all five chapters of the ISTQB Testing with Generative AI syllabus v1.1, weighted roughly like the real exam — with the most questions on prompt engineering and GenAI risks. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "ISTQB CT-GenAI Practice Questions with Answers (v1.1)",
    description:
      "15 free, original CT-GenAI v1.1 practice questions on LLM basics, prompt engineering, hallucinations, data privacy, RAG and GenAI adoption, explained.",
  },
  questions: [
    /* ── Chapter 1: Introduction to GenAI for software testing ────────────── */
    {
      id: "genai-d1-llm-types",
      domain: "d1",
      objective: "GenAI-1.1.3 Distinguish between foundation, instruction-tuned and reasoning LLMs",
      difficulty: "foundation",
      question:
        "A test team needs a model that works through a complex business rule step by step, checking intermediate conclusions before deriving test conditions. Which type of LLM is designed for this kind of task?",
      options: [
        { id: "A", text: "A foundation LLM", rationale: "Foundation LLMs are general-purpose models trained on broad data and usually need further adaptation to follow instructions well." },
        { id: "B", text: "An instruction-tuned LLM", rationale: "Instruction-tuned LLMs follow instructions better than foundation models, but are not specifically extended for multi-step reasoning." },
        { id: "C", text: "A small language model fine-tuned on test reports", rationale: "Fine-tuning adds domain knowledge; it does not by itself make a model suited to multi-step reasoning." },
        { id: "D", text: "A reasoning LLM", rationale: "Correct. Reasoning LLMs extend instruction-tuned models with logical inference and multi-step, chain-of-thought problem solving." },
      ],
      answer: "D",
      explanation:
        "Foundation models are trained on broad data, instruction-tuned models are further trained on prompt–response pairs to follow instructions, and reasoning models add multi-step logical problem solving on top. Choose the type that matches the complexity of the test task.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d1-context-window",
      domain: "d1",
      objective: "GenAI-1.1.2 Explain the basics of generative AI and large language models",
      difficulty: "foundation",
      question:
        "A tester pastes a very long requirements document into an LLM chat and notices that the answers ignore requirements from the beginning of the document. Which concept best explains this?",
      options: [
        { id: "A", text: "The context window: the model can only consider a limited number of tokens at once", rationale: "Correct. Text beyond the context window, measured in tokens, cannot be taken into account by the model." },
        { id: "B", text: "Temperature: the model is set too high and becomes random", rationale: "Higher temperature increases variability, but it does not make the model lose earlier parts of the input." },
        { id: "C", text: "Fine-tuning: the model has not been trained on requirements", rationale: "Lack of fine-tuning affects domain knowledge, not whether earlier input is considered." },
        { id: "D", text: "Multimodality: the model cannot read text documents", rationale: "The model clearly processes text; multimodality concerns combining text with images or other data types." },
      ],
      answer: "A",
      explanation:
        "LLMs split input into tokens and can only consider a limited amount of preceding text — the context window. Larger windows help with long documents but increase computational complexity and processing time, so splitting or summarising input is often necessary.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d1-interaction-models",
      domain: "d1",
      objective: "GenAI-1.2.2 Compare interaction models when using GenAI for software testing",
      difficulty: "intermediate",
      question:
        "A company wants GenAI to generate draft test cases automatically for every new user story in its backlog tool, using the same prompts and output format each time, for hundreds of stories per month. Which interaction model fits best?",
      options: [
        { id: "A", text: "Individual testers using a public AI chatbot", rationale: "Chatbots suit ad hoc and exploratory work, but they do not scale well to repeatable, automated generation for hundreds of stories." },
        { id: "B", text: "An LLM-powered testing application integrated through an API", rationale: "Correct. Integrating LLM capabilities through APIs into a testing application suits well-defined, automated and scalable tasks with consistent prompts." },
        { id: "C", text: "A vision-language model reviewing screenshots", rationale: "Vision-language models add image understanding; this does not address the integration need." },
        { id: "D", text: "Manual prompting by the product owner in a chatbot", rationale: "Same limitation as any chatbot use, and it moves test design away from the testers." },
      ],
      answer: "B",
      explanation:
        "AI chatbots offer direct, conversational interaction suited to routine and exploratory tasks. LLM-powered testing applications embed the model through APIs, which gives more customisation and scalability for well-defined tasks.",
      reference: CERT_PAGE,
    },

    /* ── Chapter 2: Prompt engineering for effective software testing ─────── */
    {
      id: "genai-d2-prompt-structure",
      domain: "d2",
      objective: "GenAI-2.1.1 Give examples of the structure of prompts used in generative AI for software testing",
      difficulty: "foundation",
      question:
        "A prompt reads: \"You are an experienced test analyst. Our app is a hotel booking system. Derive test conditions from the user story below. Consider only the cancellation rules. Return a numbered list.\" The user story follows. Which prompt component has been placed in the sentence \"Consider only the cancellation rules\"?",
      options: [
        { id: "A", text: "Role", rationale: "The role is \"You are an experienced test analyst\"." },
        { id: "B", text: "Output format", rationale: "The output format is \"Return a numbered list\"." },
        { id: "C", text: "Constraints", rationale: "Correct. Constraints set restrictions or special considerations the LLM must follow — here, only the cancellation rules." },
        { id: "D", text: "Context", rationale: "The context is the background information \"Our app is a hotel booking system\"." },
      ],
      answer: "C",
      explanation:
        "A structured prompt for test tasks combines role, context, instruction, input data, constraints and output format. Recognising each component helps you spot what is missing when an LLM's output disappoints.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d2-few-shot",
      domain: "d2",
      objective: "GenAI-2.2.2 Apply generative AI to test design and test implementation tasks",
      difficulty: "intermediate",
      question:
        "A team wants an LLM to write test cases in their company's specific Gherkin style, with fixed naming rules and step phrasing. Plain instructions have produced inconsistent results. Which prompting technique is most likely to help?",
      options: [
        { id: "A", text: "Zero-shot prompting with a longer instruction", rationale: "Zero-shot prompts contain no examples, and the team has already seen that instructions alone give inconsistent style." },
        { id: "B", text: "Few-shot prompting with several examples of correctly written scenarios", rationale: "Correct. Examples in the prompt show the model the exact style to imitate, which is the strength of few-shot prompting." },
        { id: "C", text: "Raising the temperature", rationale: "A higher temperature increases variability, which makes style consistency worse." },
        { id: "D", text: "Removing the role from the prompt", rationale: "Removing a prompt component does not teach the model the required style." },
      ],
      answer: "B",
      explanation:
        "Few-shot prompting includes several input–output examples in the prompt, so the model can follow a specific format or style. It is especially useful for generating test cases or scripts that must match existing conventions.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d2-prompt-chaining",
      domain: "d2",
      objective: "GenAI-2.2.5 Select and apply appropriate prompting techniques for a given context and test task",
      difficulty: "advanced",
      question:
        "A tester wants to use an LLM to analyse a complex epic: first identify ambiguities, then propose acceptance criteria, then derive prioritised test conditions. Each intermediate result must be checked by the tester before it is used. Which technique fits best?",
      options: [
        { id: "A", text: "Meta prompting", rationale: "Meta prompting lets the LLM generate or improve prompts; it does not structure a task into verified intermediate steps." },
        { id: "B", text: "One single prompt that asks for all three results at once", rationale: "A single large prompt gives no opportunity to verify intermediate results and increases the risk of compounding errors." },
        { id: "C", text: "One-shot prompting with one example epic", rationale: "One example may help with format, but it does not provide step-by-step verification." },
        { id: "D", text: "Prompt chaining", rationale: "Correct. Prompt chaining splits the task into steps, and each output is checked or refined before it becomes the input to the next prompt." },
      ],
      answer: "D",
      explanation:
        "Prompt chaining suits complex test tasks that break down naturally into stages, because the tester can verify each intermediate result. This human verification between steps also reduces the impact of hallucinations and reasoning errors.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d2-metrics",
      domain: "d2",
      objective: "GenAI-2.3.1 Understand the metrics for evaluating the results of Generative AI on test tasks",
      difficulty: "intermediate",
      question:
        "An LLM generates 50 automated test scripts. The team measures that 42 of them run successfully in the CI pipeline without manual changes. Which evaluation metric are they measuring?",
      options: [
        { id: "A", text: "Execution success rate", rationale: "Correct. This metric is the share of generated tests or scripts that execute successfully — here 84%." },
        { id: "B", text: "Recall", rationale: "Recall is about finding all relevant instances, such as covering every equivalence partition, not about scripts running." },
        { id: "C", text: "Diversity", rationale: "Diversity measures how varied the generated inputs and scenarios are." },
        { id: "D", text: "Time efficiency", rationale: "Time efficiency compares the time needed with GenAI against manual creation." },
      ],
      answer: "A",
      explanation:
        "GenAI results for test tasks can be evaluated with metrics such as accuracy, precision, recall, relevance and contextual fit, diversity, execution success rate and time efficiency. Because LLM output is non-deterministic, these metrics should be based on enough runs to be meaningful.",
      reference: CERT_PAGE,
    },

    /* ── Chapter 3: Managing risks of GenAI in software testing ───────────── */
    {
      id: "genai-d3-hallucination",
      domain: "d3",
      objective: "GenAI-3.1.2 Identify hallucinations, reasoning errors and biases in LLM output",
      difficulty: "intermediate",
      question:
        "Asked to derive test cases from a user story about password reset, an LLM adds a test for \"reset via SMS code\". Neither the user story nor any other input mentions SMS, and the product has no SMS feature. What kind of problem is this?",
      options: [
        { id: "A", text: "A reasoning error", rationale: "A reasoning error is a flaw in logical steps, such as a wrong calculation or conclusion; here content has been invented." },
        { id: "B", text: "A bias", rationale: "Bias means systematically favouring certain information or assumptions; a single invented feature is better described otherwise." },
        { id: "C", text: "A hallucination", rationale: "Correct. The output contains content that is factually incorrect or not grounded in the input — a hallucination." },
        { id: "D", text: "Non-deterministic behaviour", rationale: "Non-determinism means the output varies between runs; it does not describe invented content." },
      ],
      answer: "C",
      explanation:
        "Hallucinations are outputs that look plausible but are incorrect or irrelevant to the task. Testers must check generated test artefacts against the test basis, because hallucinated test cases waste effort and can create false expectations.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d3-non-determinism",
      domain: "d3",
      objective: "GenAI-3.1.4 Recall mitigation techniques for non-deterministic behavior of LLMs",
      difficulty: "foundation",
      question:
        "A team uses an LLM in its pipeline to classify failed test results, but the same input sometimes gets a different classification. Which measure reduces this variability?",
      options: [
        { id: "A", text: "Increasing the temperature", rationale: "A higher temperature makes the output more random, not less." },
        { id: "B", text: "Lowering the temperature and setting a fixed random seed where the model supports it", rationale: "Correct. A lower temperature reduces randomness, and a fixed seed improves reproducibility, although full reproducibility is not guaranteed." },
        { id: "C", text: "Switching to a larger context window", rationale: "A larger context window lets the model consider more text; it does not make the output deterministic." },
        { id: "D", text: "Adding more examples with different classifications", rationale: "More varied examples may even increase variation; it does not address non-determinism directly." },
      ],
      answer: "B",
      explanation:
        "LLM output is non-deterministic by nature. Lowering the temperature and fixing seeds reduce variation, but because reproducibility cannot be fully guaranteed, automated verification of outputs is still recommended.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d3-data-privacy",
      domain: "d3",
      objective: "GenAI-3.2.3 Summarize mitigation strategies to protect data privacy and enhance security in Generative AI for software testing",
      difficulty: "intermediate",
      question:
        "Testers want to use a third-party LLM service to analyse failed transactions that contain real customer names and account numbers. Which measure most directly reduces the data privacy risk?",
      options: [
        { id: "A", text: "Asking the LLM in the prompt not to store the data", rationale: "A prompt instruction does not control how the provider processes or retains data." },
        { id: "B", text: "Using a reasoning LLM instead of an instruction-tuned LLM", rationale: "The model type does not change what personal data leaves the organisation." },
        { id: "C", text: "Increasing the number of human reviewers of the output", rationale: "Output review helps with quality, but the personal data has already been sent to the service." },
        { id: "D", text: "Anonymising or pseudonymising the data and sending only what the task needs", rationale: "Correct. Data minimisation and anonymisation or pseudonymisation limit what personal data is exposed in the first place." },
      ],
      answer: "D",
      explanation:
        "Key privacy risks of GenAI in testing include unintended data exposure and loss of control over how data is used, with compliance consequences such as under the GDPR. Mitigations include data minimisation, anonymisation or pseudonymisation, secure storage and transmission, and regular security audits.",
      reference: CERT_PAGE,
    },

    {
      id: "genai-d3-energy",
      domain: "d3",
      objective: "GenAI-3.3.1 Explain the impact of task characteristics and model usage on the energy consumption of Generative AI in software testing",
      difficulty: "foundation",
      question:
        "A team's nightly pipeline calls a large LLM to regenerate all 5,000 test cases from scratch, even though only a few requirements change each day. Which change would most reduce the energy consumption of this GenAI use?",
      options: [
        { id: "A", text: "Only send the changed requirements to the LLM and avoid unnecessary model interactions", rationale: "Correct. Energy consumption rises with usage volume and task complexity, so limiting unnecessary interactions reduces it directly." },
        { id: "B", text: "Run the same pipeline at night when energy is cheaper", rationale: "The time of day changes the cost, not the amount of energy the model interactions consume." },
        { id: "C", text: "Lower the temperature", rationale: "Temperature controls output randomness, not the computational effort of the requests." },
        { id: "D", text: "Ask the LLM to produce longer, more detailed test cases", rationale: "Longer outputs need more tokens to be generated, which increases rather than reduces consumption." },
      ],
      answer: "A",
      explanation:
        "The energy use of GenAI depends on task complexity, the model used and how often it is called, and it adds up across many users and runs. Choosing an appropriately sized model and avoiding unnecessary interactions are the most direct levers.",
      reference: CERT_PAGE,
    },

    /* ── Chapter 4: LLM-powered solutions for software testing ────────────── */
    {
      id: "genai-d4-rag",
      domain: "d4",
      objective: "GenAI-4.1.2 Summarize Retrieval-Augmented Generation",
      difficulty: "intermediate",
      question:
        "A team wants an LLM to answer questions about its own, frequently updated test documentation without retraining the model each time the documents change. Which approach fits best?",
      options: [
        { id: "A", text: "Retrieval-augmented generation (RAG): retrieve relevant document chunks from a vector database and add them to the prompt", rationale: "Correct. RAG grounds the response in retrieved, current content at run time, without changing the model itself." },
        { id: "B", text: "Fine-tuning the LLM after every documentation change", rationale: "Fine-tuning changes the model by further training; repeating it after every change is costly and slow." },
        { id: "C", text: "Raising the temperature to make the model more creative", rationale: "Creativity does not give the model access to the team's documents." },
        { id: "D", text: "Switching to a model with a smaller context window", rationale: "A smaller context window makes it harder, not easier, to provide relevant documentation." },
      ],
      answer: "A",
      explanation:
        "RAG splits documents into chunks, stores them as embeddings in a vector database, retrieves the most relevant chunks for each query and passes them to the LLM as context. This keeps answers grounded in up-to-date project knowledge.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d4-agents",
      domain: "d4",
      objective: "GenAI-4.1.3 Explain the role and application of LLM-powered agents in automating test processes",
      difficulty: "intermediate",
      question:
        "Which statement about LLM-powered agents in test automation is correct?",
      options: [
        { id: "A", text: "Agents eliminate hallucinations because they call external tools", rationale: "Agents are built on LLMs and carry the same risks of hallucinations, reasoning errors and bias." },
        { id: "B", text: "Agents can only answer questions and cannot perform actions", rationale: "Agents can invoke predefined tools to perform actions, which distinguishes them from a plain chat interaction." },
        { id: "C", text: "Agents can process instructions, retrieve context and invoke predefined tools, and several agents can be coordinated through orchestration", rationale: "Correct. This describes semi-autonomous or autonomous agents and multi-agent systems." },
        { id: "D", text: "Agents should always run fully autonomously, even for critical test tasks", rationale: "For critical tasks, semi-autonomous agents with human or automated verification are a recommended mitigation." },
      ],
      answer: "C",
      explanation:
        "LLM-powered agents combine an LLM with context retrieval and tool use to carry out multi-step test tasks. Because they inherit LLM risks, critical work needs verification, for example through semi-autonomous operation.",
      reference: CERT_PAGE,
    },

    /* ── Chapter 5: Deploying and integrating GenAI in test organisations ─── */
    {
      id: "genai-d5-shadow-ai",
      domain: "d5",
      objective: "GenAI-5.1.1 Recall the risks of shadow AI",
      difficulty: "foundation",
      question:
        "Before any official GenAI strategy exists, several testers paste requirements and test data into personal accounts of public AI chatbots. What is the main risk of this \"shadow AI\" use?",
      options: [
        { id: "A", text: "The test cases will be generated too slowly", rationale: "Speed is not the concern with unapproved tool use." },
        { id: "B", text: "Confidential data may leave the organisation without control, creating security and compliance risks", rationale: "Correct. Unapproved GenAI use bypasses the organisation's data protection, security and compliance controls." },
        { id: "C", text: "Public chatbots cannot process requirements written in natural language", rationale: "Public chatbots can process natural language; the issue is control, not capability." },
        { id: "D", text: "The testers will need a Foundation Level certificate first", rationale: "Certification is unrelated to the risk of uncontrolled tool use." },
      ],
      answer: "B",
      explanation:
        "Shadow AI is staff using personal or unapproved GenAI tools outside the organisation's policies. It risks data exposure, compliance breaches and intellectual-property disputes, which is why a GenAI strategy defines approved tools and rules for sensitive data.",
      reference: CERT_PAGE,
    },
    {
      id: "genai-d5-change",
      domain: "d5",
      objective: "GenAI-5.2.2 Recall strategies for cultivating AI skills within test teams to support the adoption of Generative AI in test activities",
      difficulty: "intermediate",
      question:
        "A test organisation has selected an approved LLM-powered tool. Several experienced testers are sceptical and keep working the old way. Which action best supports the change?",
      options: [
        { id: "A", text: "Make the tool mandatory immediately and measure each tester's usage", rationale: "Enforcement without building skills and trust tends to increase resistance rather than adoption." },
        { id: "B", text: "Wait until the sceptical testers leave the team", rationale: "Ignoring resistance does not manage the change and loses experienced staff." },
        { id: "C", text: "Replace manual test design entirely so the old way is no longer possible", rationale: "Removing human test design ignores the need for human verification of GenAI output." },
        { id: "D", text: "Build skills through hands-on practice with the tool on real test tasks, guided learning, and a community of practice that shares prompts and lessons learned", rationale: "Correct. The syllabus recommends building GenAI capability through hands-on practice, guided learning, communities of practice and shared prompt libraries, not through theory or mandates alone." },
      ],
      answer: "D",
      explanation:
        "Adopting GenAI changes testers' tasks and responsibilities; without structured change management, tools are underused, misused or resisted. Capability grows from basic prompting to reusable, test-specific prompt patterns, while testers stay accountable for reviewing GenAI output.",
      reference: CERT_PAGE,
    },
  ],
};
