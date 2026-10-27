import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free AI-901 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 15 April 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — AI-901 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901",
};

export const ai901Questions: PracticeQuestionSet = {
  slug: "ai-901",
  intro:
    "15 original AI-901 practice questions across the two skill areas of the Microsoft study guide (skills measured as of 15 April 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AI-901 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original AI-901 practice questions on responsible AI, generative AI, agents, speech, vision and Microsoft Foundry — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: Identify AI concepts and capabilities ──────────────────── */
    {
      id: "ai901-d1-transparency",
      domain: "d1",
      objective: "Describe principles of responsible AI",
      difficulty: "foundation",
      question:
        "A bank's loan assistant tells applicants that an AI system was involved in their decision and explains, in plain language, which factors the system considered. Which responsible AI principle does this mainly address?",
      options: [
        { id: "A", text: "Inclusiveness", rationale: "Inclusiveness is about designing AI that empowers and works for people with a wide range of abilities and backgrounds." },
        { id: "B", text: "Reliability and safety", rationale: "Reliability and safety concern consistent, safe behaviour under expected and unexpected conditions, not explaining decisions." },
        { id: "C", text: "Transparency", rationale: "Correct. Transparency means people understand that AI is being used and how it reaches its outputs and limitations." },
        { id: "D", text: "Privacy and security", rationale: "Privacy and security concern protecting personal data and the system, not explaining how decisions are made." },
      ],
      answer: "C",
      explanation:
        "Disclosing that AI is used and explaining the factors behind its output is the core of transparency. Accountability is related but is about people remaining responsible for how the system operates.",
      reference: GUIDE,
    },
    {
      id: "ai901-d1-fairness",
      domain: "d1",
      objective: "Describe principles of responsible AI",
      difficulty: "foundation",
      question:
        "During testing, a recruitment screening model rejects equally qualified applicants from one age group more often than others. Which responsible AI principle is at risk?",
      options: [
        { id: "A", text: "Fairness", rationale: "Correct. Fairness requires that an AI system treats all people equitably and does not disadvantage groups with similar qualifications." },
        { id: "B", text: "Transparency", rationale: "Transparency is about explaining the system; the problem here is unequal treatment, not missing explanations." },
        { id: "C", text: "Accountability", rationale: "Accountability is about who answers for the system. It matters for fixing the issue but is not the principle being violated." },
        { id: "D", text: "Privacy and security", rationale: "Nothing in the scenario involves exposing or misusing personal data." },
      ],
      answer: "A",
      explanation:
        "Different outcomes for similar people based on a characteristic such as age is a fairness problem. Testing outcomes across groups is a typical way to detect it.",
      reference: GUIDE,
    },
    {
      id: "ai901-d1-accountability",
      domain: "d1",
      objective: "Describe principles of responsible AI",
      difficulty: "intermediate",
      question:
        "A company sets up a review board that signs off every AI system before release and remains answerable for how each system behaves in production. Which responsible AI principle does this support most directly?",
      options: [
        { id: "A", text: "Inclusiveness", rationale: "Inclusiveness is about serving people of all abilities and backgrounds, not about governance and ownership." },
        { id: "B", text: "Accountability", rationale: "Correct. Accountability means people, not the AI system, remain responsible for how it is designed, deployed and operated." },
        { id: "C", text: "Reliability and safety", rationale: "A review board may check reliability, but the defining feature here is human responsibility for the system." },
        { id: "D", text: "Fairness", rationale: "Fairness is about equitable treatment of people affected by the system." },
      ],
      answer: "B",
      explanation:
        "Governance structures that keep humans answerable for AI systems put accountability into practice. The other principles describe qualities of the system rather than who is responsible for it.",
      reference: GUIDE,
    },
    {
      id: "ai901-d1-temperature",
      domain: "d1",
      objective: "Identify AI model components and configurations",
      difficulty: "intermediate",
      question:
        "A chat model deployed in Microsoft Foundry gives answers that vary too much when the same factual question is asked several times. Which parameter change is most likely to make responses more consistent?",
      options: [
        { id: "A", text: "Increase the maximum response length", rationale: "A longer limit allows longer answers; it does not reduce variation between answers." },
        { id: "B", text: "Increase the temperature", rationale: "A higher temperature makes the model sample more randomly, which increases variation." },
        { id: "C", text: "Add more stop sequences", rationale: "Stop sequences only end generation at given text; they do not control randomness." },
        { id: "D", text: "Lower the temperature", rationale: "Correct. A lower temperature makes the model favour the most likely tokens, so outputs become more focused and repeatable." },
      ],
      answer: "D",
      explanation:
        "Temperature controls how random the model's token selection is. Low values suit factual, consistent answers; higher values suit creative tasks.",
      reference: GUIDE,
    },
    {
      id: "ai901-d1-how-genai-works",
      domain: "d1",
      objective: "Identify AI model components and configurations",
      difficulty: "foundation",
      question:
        "Which statement best describes how a large language model generates a text response?",
      options: [
        { id: "A", text: "It looks up a stored answer in a database of approved responses", rationale: "Language models do not retrieve fixed answers; that would describe a rules-based FAQ bot." },
        { id: "B", text: "It runs a hand-written rule for each type of question", rationale: "Generative models learn patterns from training data rather than following hand-written rules." },
        { id: "C", text: "It predicts the next token repeatedly, based on the prompt and the tokens generated so far", rationale: "Correct. The model breaks text into tokens and generates a response one token at a time from learned probabilities." },
        { id: "D", text: "It always searches the internet before answering", rationale: "A model only uses external sources if an application or agent gives it a tool or grounding data to do so." },
      ],
      answer: "C",
      explanation:
        "Language models are trained on large amounts of text and generate output by predicting likely next tokens. This is also why they can produce fluent but incorrect content, and why grounding and review matter.",
      reference: GUIDE,
    },
    {
      id: "ai901-d1-sentiment",
      domain: "d1",
      objective: "Identify AI workloads",
      difficulty: "foundation",
      question:
        "A hotel chain wants to know automatically whether each online review is positive, negative or neutral. Which text analysis technique fits?",
      options: [
        { id: "A", text: "Sentiment analysis", rationale: "Correct. Sentiment analysis classifies the opinion expressed in text as positive, negative, neutral or mixed." },
        { id: "B", text: "Keyword extraction", rationale: "Keyword extraction returns the main terms in a text, not whether the opinion is positive or negative." },
        { id: "C", text: "Entity detection", rationale: "Entity detection finds things such as people, places and dates in the text." },
        { id: "D", text: "Speech synthesis", rationale: "Speech synthesis turns text into audio; it does not analyse opinion." },
      ],
      answer: "A",
      explanation:
        "The study guide names keyword extraction, entity detection, sentiment analysis and summarisation as common text analysis techniques. Match the technique to the output the business needs.",
      reference: GUIDE,
    },
    {
      id: "ai901-d1-speech-synthesis",
      domain: "d1",
      objective: "Identify AI workloads",
      difficulty: "foundation",
      question:
        "A train operator wants written delay notices to be read aloud automatically over station loudspeakers in a natural-sounding voice. Which AI capability is required?",
      options: [
        { id: "A", text: "Speech recognition", rationale: "Speech recognition converts spoken audio into text — the opposite direction." },
        { id: "B", text: "Image generation", rationale: "Image generation produces pictures, not audio." },
        { id: "C", text: "Entity detection", rationale: "Entity detection analyses text; it does not produce speech." },
        { id: "D", text: "Speech synthesis", rationale: "Correct. Speech synthesis (text to speech) generates spoken audio from text." },
      ],
      answer: "D",
      explanation:
        "Speech recognition is speech to text; speech synthesis is text to speech. Many exam scenarios simply test whether you can tell the direction apart.",
      reference: GUIDE,
    },

    /* ── Domain 2: Implement AI solutions by using Microsoft Foundry ──────── */
    {
      id: "ai901-d2-system-prompt",
      domain: "d2",
      objective: "Implement generative AI apps and agents by using Foundry",
      difficulty: "foundation",
      question:
        "You build a support chat app on a model deployed in Microsoft Foundry. The assistant must always answer politely, only discuss your company's products and refuse unrelated requests. Where should you put these instructions?",
      options: [
        { id: "A", text: "In the system prompt", rationale: "Correct. The system prompt sets the model's role, tone and boundaries for the whole conversation." },
        { id: "B", text: "In every user prompt, typed by the customer", rationale: "Customers cannot be relied on to add instructions, and they could change or remove them." },
        { id: "C", text: "In the model's deployment name", rationale: "The deployment name only identifies the deployment; the model does not read it as instructions." },
        { id: "D", text: "In the maximum response length setting", rationale: "This parameter limits output length; it cannot express behavioural rules." },
      ],
      answer: "A",
      explanation:
        "System prompts define how the model should behave; user prompts carry the individual requests. Clear, specific system instructions are a key part of effective prompt design.",
      reference: GUIDE,
    },
    {
      id: "ai901-d2-deploy-before-sdk",
      domain: "d2",
      objective: "Implement generative AI apps and agents by using Foundry",
      difficulty: "intermediate",
      question:
        "You want a lightweight Python chat client to call a model from the Foundry model catalogue. What must exist in your Foundry project before the client can send prompts to the model?",
      options: [
        { id: "A", text: "A fine-tuned version of the model", rationale: "Fine-tuning is optional; base models can be used directly." },
        { id: "B", text: "A deployment of the model", rationale: "Correct. The client calls a model deployment through its endpoint; a catalogue entry alone cannot be called." },
        { id: "C", text: "A Content Understanding analyser", rationale: "Content Understanding is for information extraction and is not needed for a chat client." },
        { id: "D", text: "A speech resource", rationale: "Speech is only needed for audio features, not for text chat." },
      ],
      answer: "B",
      explanation:
        "In Foundry you deploy a model first, test it in the portal and then call the deployment from code with the Foundry SDK. The code refers to the deployment, not just the catalogue model.",
      reference: GUIDE,
    },
    {
      id: "ai901-d2-agent-vs-chat",
      domain: "d2",
      objective: "Implement generative AI apps and agents by using Foundry",
      difficulty: "intermediate",
      question:
        "A team wants an assistant that not only answers questions but can also look up order status by calling a company API when needed. In Microsoft Foundry, what should they create?",
      options: [
        { id: "A", text: "A model deployment with a higher temperature", rationale: "Temperature changes randomness; it does not let the model call an API." },
        { id: "B", text: "A text analysis application", rationale: "Text analysis extracts information from text; it does not take actions." },
        { id: "C", text: "An agent with the API configured as a tool", rationale: "Correct. An agent combines a model with instructions and tools, so it can decide to call the API to complete a task." },
        { id: "D", text: "An image-generation deployment", rationale: "Image generation creates pictures and is unrelated to looking up orders." },
      ],
      answer: "C",
      explanation:
        "The difference between a chat app and an agent is the ability to use tools and act. The study guide expects you to create and test a single-agent solution in the Foundry portal.",
      reference: GUIDE,
    },
    {
      id: "ai901-d2-spoken-prompt",
      domain: "d2",
      objective: "Implement AI solutions for text and speech by using Foundry",
      difficulty: "intermediate",
      question:
        "A field engineer records a spoken question on a phone, and the app must answer it in a single step without a separate transcription service. Which approach fits?",
      options: [
        { id: "A", text: "Send the audio to a deployed multimodal model that accepts audio input", rationale: "Correct. A multimodal model that supports audio can take the spoken prompt directly and respond to it." },
        { id: "B", text: "Send the audio to an image-generation model", rationale: "Image-generation models create images from prompts; they do not answer spoken questions." },
        { id: "C", text: "Run sentiment analysis on the audio file", rationale: "Sentiment analysis works on text and only returns an opinion label, not an answer." },
        { id: "D", text: "Use speech synthesis on the recording", rationale: "Speech synthesis creates audio from text; it does not understand audio input." },
      ],
      answer: "A",
      explanation:
        "The study guide covers two routes for speech: responding to spoken prompts with a multimodal model, and building apps with Azure Speech in Foundry Tools. Here the single-step requirement points to the multimodal model.",
      reference: GUIDE,
    },
    {
      id: "ai901-d2-azure-speech",
      domain: "d2",
      objective: "Implement AI solutions for text and speech by using Foundry",
      difficulty: "foundation",
      question:
        "A contact centre needs live transcripts of customer calls so that agents can read along. Which Foundry Tools service should the developer use?",
      options: [
        { id: "A", text: "Azure Content Understanding, image analysis only", rationale: "Image analysis cannot transcribe call audio." },
        { id: "B", text: "An image-generation model", rationale: "Image generation does not process audio." },
        { id: "C", text: "A text analysis key phrase feature", rationale: "Key phrase extraction needs text as input; it cannot turn audio into text." },
        { id: "D", text: "Azure Speech, using speech to text", rationale: "Correct. Azure Speech provides speech recognition that converts spoken audio into text." },
      ],
      answer: "D",
      explanation:
        "Speech to text is the speech recognition capability of Azure Speech. Text analysis features could then be applied to the transcript, but they cannot replace transcription.",
      reference: GUIDE,
    },
    {
      id: "ai901-d2-vision-prompt",
      domain: "d2",
      objective: "Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
      difficulty: "intermediate",
      question:
        "An insurance app lets customers upload a photo of car damage and ask \"What parts look damaged?\". Which approach uses the photo directly in the conversation?",
      options: [
        { id: "A", text: "Send the image as text with speech synthesis", rationale: "Speech synthesis produces audio and cannot interpret images." },
        { id: "B", text: "Include the image in the prompt to a deployed multimodal model", rationale: "Correct. Multimodal models can interpret visual input in prompts and answer questions about it." },
        { id: "C", text: "Use an image-generation model to create a new picture of the car", rationale: "Image generation creates new images; it does not analyse the uploaded one." },
        { id: "D", text: "Run sentiment analysis on the image file name", rationale: "The file name says nothing about the damage, and sentiment analysis does not answer questions." },
      ],
      answer: "B",
      explanation:
        "Interpreting visual input in prompts is an explicit AI-901 skill. Keep apart understanding images (multimodal input) and creating images (generative image models).",
      reference: GUIDE,
    },
    {
      id: "ai901-d2-image-generation",
      domain: "d2",
      objective: "Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
      difficulty: "foundation",
      question:
        "A marketing team wants to produce original illustrations for a campaign from text descriptions such as \"a cyclist at sunrise in a flat, pastel style\". What should they use?",
      options: [
        { id: "A", text: "A speech recognition model", rationale: "Speech recognition converts audio to text and cannot create images." },
        { id: "B", text: "Content Understanding to extract fields from images", rationale: "Content Understanding extracts information from existing content; it does not create new images." },
        { id: "C", text: "An image-generation model deployed in Foundry", rationale: "Correct. Image-generation models create new visual outputs from text prompts." },
        { id: "D", text: "Entity detection", rationale: "Entity detection finds named items in text; it does not produce images." },
      ],
      answer: "C",
      explanation:
        "Creating new visual outputs with generative models is part of the vision skills. Responsible AI still applies: review generated images before use.",
      reference: GUIDE,
    },
    {
      id: "ai901-d2-content-understanding",
      domain: "d2",
      objective: "Implement AI solutions for information extraction by using Foundry",
      difficulty: "intermediate",
      question:
        "An accounts team receives thousands of supplier invoices as PDFs and scans. They need the invoice number, date and total extracted into structured fields for their finance system. Which service should the developer use?",
      options: [
        { id: "A", text: "Azure Speech", rationale: "Azure Speech handles spoken audio, not documents." },
        { id: "B", text: "An image-generation model", rationale: "Image generation creates images and cannot extract fields." },
        { id: "C", text: "Sentiment analysis", rationale: "Sentiment analysis only returns an opinion label for text." },
        { id: "D", text: "Azure Content Understanding in Foundry Tools", rationale: "Correct. Content Understanding extracts information from documents and forms (as well as images, audio and video) into structured output." },
      ],
      answer: "D",
      explanation:
        "The information extraction skills centre on Azure Content Understanding. It works across documents, images, audio and video, and the study guide expects you to build a lightweight application that uses it.",
      reference: GUIDE,
    },
  ],
};
