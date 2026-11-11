import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free Claude Certified Associate: Foundations (CCAO-F) sample questions.
 * ORIGINAL questions written by CertRamp against Anthropic's published CCAO-F
 * exam guide (v1.0) and official Anthropic documentation (verified
 * 11 November 2026). Not taken from the paid practice tests, not recalled exam
 * content, and not presented as real exam questions.
 */
const PLATFORM = (label: string, path: string) => ({
  label: `Claude Platform Docs: ${label}`,
  url: `https://platform.claude.com/docs/en/${path}`,
});

const EXAM_GUIDE = {
  label: "Anthropic: Claude Certified Associate: Foundations Exam Guide (PDF)",
  url: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542847/Claude+Certified+Associate+%E2%80%93+Foundations+Exam+Guide.pdf",
};

const PROJECTS = {
  label: "Claude Help Center: What are projects?",
  url: "https://support.claude.com/en/articles/9517075-what-are-projects",
};

const PROMPTING = PLATFORM("Be clear and direct (prompting best practices)", "build-with-claude/prompt-engineering/be-clear-and-direct");
const HALLUCINATIONS = PLATFORM("Reduce hallucinations", "test-and-evaluate/strengthen-guardrails/reduce-hallucinations");

export const claudeCertifiedAssociateCcaoFQuestions: PracticeQuestionSet = {
  slug: "claude-certified-associate-ccao-f",
  intro:
    "15 original CCAO-F practice questions across all seven domains of Anthropic's Claude Certified Associate: Foundations exam guide, weighted roughly like the real exam (three on Output Evaluation and Validation, two on each other domain). Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-11-11",
  updated: "2026-11-11",
  seo: {
    title: "CCAO-F Practice Questions with Answers (2026)",
    description:
      "15 free, original Claude Certified Associate (CCAO-F) practice questions on prompting, hallucinations, model choice, Projects and responsible use, with explanations.",
  },
  questions: [
    /* ── d1: Prompting and Task Execution (14%) ───────────────────────────── */
    {
      id: "ccaof-d1-add-context",
      domain: "d1",
      objective: "Create effective prompts for business and technical tasks",
      difficulty: "foundation",
      question:
        "A coordinator asks Claude: \"Write an email about the new expense policy.\" The draft is generic and far too long. Which revised prompt is most likely to fix this in one attempt?",
      options: [
        { id: "A", text: "\"Write a better, more specific email about the new expense policy.\"", rationale: "Asking for \"better\" and \"more specific\" gives Claude no new information to be specific with." },
        { id: "B", text: "Name the audience, the purpose, the three changes, a tone and a 150-word limit", rationale: "Correct. Audience (for example field sales staff), purpose (receipts due within 10 days), key facts and constraints give Claude what it needs; a colleague with no background could follow this prompt too." },
        { id: "C", text: "\"You are an award-winning copywriter. Write an email about the new expense policy.\"", rationale: "A role can shape tone, but the prompt still lacks the facts, audience and length the email needs." },
        { id: "D", text: "\"Do not write a long or generic email about the expense policy.\"", rationale: "Anthropic recommends telling Claude what to do rather than what not to do, and this version still adds no content." },
      ],
      answer: "B",
      explanation:
        "Anthropic's test for a clear prompt is whether a colleague with minimal context could follow it. Explaining the context and motivation behind a request, plus concrete constraints such as length, leads to more targeted output than general demands for quality.",
      reference: PROMPTING,
    },
    {
      id: "ccaof-d1-decompose-steps",
      domain: "d1",
      objective: "Apply task decomposition techniques to structure complex requests",
      difficulty: "intermediate",
      question:
        "A project manager asked Claude in one prompt to read three vendor proposals, compare them against eight requirements and write a recommendation memo. The memo reads well, but she cannot tell whether the comparison behind it is correct. What is the best way to restructure the work?",
      options: [
        { id: "A", text: "First a requirement-by-requirement table she checks, then the memo from it", rationale: "Correct. Breaking the task into steps creates intermediate results she can inspect and correct before the final memo is written." },
        { id: "B", text: "Run the same prompt several times and send the most persuasive memo", rationale: "Comparing several runs can reveal inconsistencies, but picking the most persuasive memo does nothing to make the comparison checkable." },
        { id: "C", text: "Ask for a shorter memo with fewer details so that it is quicker to review", rationale: "A shorter memo hides the comparison even more; length is not the problem." },
        { id: "D", text: "Add \"be careful, accurate and thorough\" to the original all-in-one prompt", rationale: "A general appeal to accuracy does not produce anything she can verify." },
      ],
      answer: "A",
      explanation:
        "Chaining a task into separate steps is useful when you need to inspect intermediate outputs or enforce a fixed sequence. A common pattern is draft, review against criteria, then refine.",
      reference: PLATFORM("Chain complex prompts (prompting best practices)", "build-with-claude/prompt-engineering/chain-prompts"),
    },

    /* ── d2: Output Evaluation and Validation (21%) ───────────────────────── */
    {
      id: "ccaof-d2-verify-statistic",
      domain: "d2",
      objective: "Apply fact-checking and validation techniques",
      difficulty: "foundation",
      question:
        "Claude's draft of a market overview for a client states that \"the segment grew 23% last year, according to a 2025 industry report\". That report is not among the documents you gave Claude. What should you do before the draft goes out?",
      options: [
        { id: "A", text: "Keep the sentence, because Claude has named its source", rationale: "A named source can itself be invented or misattributed; naming it is not evidence that it exists or says this." },
        { id: "B", text: "Ask Claude whether it is sure and keep the figure if it confirms", rationale: "Asking the same model to confirm itself is not independent verification." },
        { id: "C", text: "Delete the report's name but keep the 23% figure", rationale: "This hides the problem: the number is still unverified and now has no attribution at all." },
        { id: "D", text: "Check the figure against the primary source, or remove it", rationale: "Correct. If the original source cannot be found and confirmed, the claim must be removed or replaced. Critical facts in client-facing material need to be checked against the original source before use." },
      ],
      answer: "D",
      explanation:
        "Anthropic notes that its hallucination-reduction techniques reduce errors but do not remove them, and advises always validating critical information. Specific numbers with a citation that was not in the provided material are a classic warning sign.",
      reference: HALLUCINATIONS,
    },
    {
      id: "ccaof-d2-quote-grounding",
      domain: "d2",
      objective: "Identify hallucinations, inconsistencies, and biases in responses",
      difficulty: "intermediate",
      question:
        "You ask Claude to summarise a 60-page supplier contract and list your company's termination rights. You want to reduce the risk of invented or misread clauses. Which prompt technique does Anthropic recommend?",
      options: [
        { id: "A", text: "Have Claude quote the relevant clauses first and support every point with a quote", rationale: "Correct. Grounding the answer in word-for-word quotes and having Claude retract claims without a supporting quote makes the result auditable." },
        { id: "B", text: "Ask for the answer as a table with one row per termination right and its clause number", rationale: "A table changes the layout, not whether the content is grounded in the contract." },
        { id: "C", text: "Begin the prompt with \"You are a senior contract lawyer\"", rationale: "A role focuses tone and approach, but it does not tie each statement to the text of this contract." },
        { id: "D", text: "Tell Claude to fill gaps from its general knowledge of standard supplier contracts", rationale: "This invites exactly the kind of invented content you want to avoid; Anthropic suggests restricting Claude to the provided documents." },
      ],
      answer: "A",
      explanation:
        "For long documents Anthropic recommends extracting quotes before doing the task and verifying each claim with a citation. You can still review the cited passages yourself, which is far quicker than rereading the whole contract.",
      reference: HALLUCINATIONS,
    },
    {
      id: "ccaof-d2-when-human-review",
      domain: "d2",
      objective: "Determine when human review or additional verification is required",
      difficulty: "foundation",
      question:
        "Which of these Claude outputs most clearly needs careful human verification before it is used?",
      options: [
        { id: "A", text: "A first list of brainstormed ideas for the agenda of next month's team offsite", rationale: "Brainstormed ideas are a starting point; a wrong idea is simply not used." },
        { id: "B", text: "Five alternative subject lines for an internal newsletter", rationale: "Low stakes: the author picks one and an imperfect option causes little harm." },
        { id: "C", text: "Revenue figures and growth rates Claude calculated for a board report", rationale: "Correct. Numbers that drive decisions at board level are high stakes, and an error would be repeated in every decision based on them." },
        { id: "D", text: "A friendlier rewrite of an announcement the author has already written", rationale: "The author knows the content and will read the rewrite anyway; the risk is mainly stylistic." },
      ],
      answer: "C",
      explanation:
        "The level of review should match the stakes and the cost of an error. Anthropic's guidance is to validate critical information especially for high-stakes decisions, while low-risk creative or stylistic outputs need only normal reading.",
      reference: HALLUCINATIONS,
    },

    /* ── d3: Product and Model Selection (12%) ────────────────────────────── */
    {
      id: "ccaof-d3-haiku-volume",
      domain: "d3",
      objective: "Align model selection with task requirements (cost, speed, quality)",
      difficulty: "foundation",
      question:
        "Each week a team must sort about 20,000 short customer comments into five fixed categories. The task is simple, and speed and cost matter most. Which model family fits best?",
      options: [
        { id: "A", text: "Opus, because the most capable model always gives the best value", rationale: "Opus is a strong default for demanding work, but for a simple, high-volume task its extra capability costs more and responds more slowly than needed." },
        { id: "B", text: "Haiku, the fastest family, positioned for high-volume classification", rationale: "Correct. Anthropic describes Haiku as the fastest model and positions it for classification, extraction and routing at volume." },
        { id: "C", text: "Sonnet, because it is the only family that supports classification", rationale: "All current Claude models handle tasks like classification; the choice is about cost, speed and quality, not capability gaps." },
        { id: "D", text: "Whichever model has the largest context window, so all comments fit into one chat", rationale: "Putting 20,000 comments into one conversation is not the deciding factor, and context size does not make simple sorting cheaper or faster." },
      ],
      answer: "B",
      explanation:
        "Model choice balances cost, speed and quality against the task. Simple, repetitive, high-volume work usually suits the fastest model, while the most capable models are reserved for complex reasoning where their quality pays off.",
      reference: PLATFORM("Models overview", "about-claude/models/overview"),
    },
    {
      id: "ccaof-d3-long-chat-restart",
      domain: "d3",
      objective: "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
      difficulty: "intermediate",
      question:
        "After a very long chat about a project plan, Claude starts contradicting decisions that were agreed near the beginning. What is the most effective next step?",
      options: [
        { id: "A", text: "Stay in the same chat and repeat the earlier decisions whenever Claude contradicts them", rationale: "This keeps growing the same overloaded conversation, which is the source of the problem." },
        { id: "B", text: "Switch to a faster model and continue in the same chat", rationale: "A faster model does not make a long, crowded context easier to use accurately." },
        { id: "C", text: "Paste the complete transcript of the chat into a new chat", rationale: "This recreates the same long context in a new place instead of reducing it to what matters." },
        { id: "D", text: "Summarise the agreed decisions, check the summary and continue in a new chat", rationale: "Correct. A checked summary keeps what matters and drops the noise; for ongoing work it can also be stored as project knowledge." },
      ],
      answer: "D",
      explanation:
        "Everything in a conversation accumulates in the context window, and Anthropic notes that accuracy and recall degrade as the token count grows (context rot). Summarising and restarting, or persisting key facts in a Project, keeps the essentials in focus.",
      reference: PLATFORM("Context windows", "build-with-claude/context-windows"),
    },

    /* ── d4: Workflow Integration and Solution Design (16%) ───────────────── */
    {
      id: "ccaof-d4-augment-workflow",
      domain: "d4",
      objective: "Integrate Claude into existing workflows to augment or redesign them",
      difficulty: "intermediate",
      question:
        "An operations team spends several hours a week turning raw incident logs into a status report for management. They want to bring Claude into this workflow. What is the most sensible first step?",
      options: [
        { id: "A", text: "Let Claude draft the summary, keep human approval and compare results for a few weeks", rationale: "Correct. Mapping the workflow, starting with the step where Claude clearly adds value (drafting from the logs), keeping review in place and measuring results is a controlled way to augment a workflow." },
        { id: "B", text: "Replace the whole process at once and stop producing the manual report immediately", rationale: "Switching everything at once removes the baseline and the safety net before anyone knows how well the new process works." },
        { id: "C", text: "Give Claude access to every company system so it can find anything that might be relevant", rationale: "Broad access raises data and governance risks without being needed for this report." },
        { id: "D", text: "Wait until Claude can run the entire process without any errors before changing anything", rationale: "No tool is error-free; waiting for perfection means the team never gains the time savings." },
      ],
      answer: "A",
      explanation:
        "Integrating Claude well means analysing the existing process, choosing where to augment it, and keeping humans in the loop where judgement matters. Comparing results against the old process gives evidence for further rollout.",
      reference: EXAM_GUIDE,
    },
    {
      id: "ccaof-d4-explain-limitations",
      domain: "d4",
      objective: "Communicate Claude's value and limitations to stakeholders",
      difficulty: "intermediate",
      question:
        "A sales director wants Claude to answer customer questions about contract terms automatically, with nobody checking the answers, because \"AI is always right now\". How should you respond?",
      options: [
        { id: "A", text: "Agree, since hallucinations are no longer an issue in current models", rationale: "Anthropic states that its techniques reduce hallucinations but do not eliminate them." },
        { id: "B", text: "Refuse to use Claude for anything related to contracts, since the risk is too high", rationale: "This ignores real value: Claude can draft accurate answers quickly when grounded in the contract documents." },
        { id: "C", text: "Explain the value and the remaining error risk, and propose a reviewed pilot", rationale: "Correct. Claude can draft answers quickly from the contract documents but can still make mistakes; a pilot with grounded answers checked by a person states both honestly and offers a measured way forward." },
        { id: "D", text: "Agree, provided the most capable model available is used for every single answer", rationale: "A more capable model makes fewer mistakes, but it still makes some; capability does not replace review." },
      ],
      answer: "C",
      explanation:
        "Stakeholders need a balanced picture: speed and quality gains on one side, residual error and the need for validation on the other. Proposing a grounded, reviewed pilot turns that message into a concrete plan.",
      reference: HALLUCINATIONS,
    },

    /* ── d5: Configuration and Knowledge Management (12%) ─────────────────── */
    {
      id: "ccaof-d5-project-setup",
      domain: "d5",
      objective: "Configure Claude Projects with instructions and knowledge sources",
      difficulty: "foundation",
      question:
        "A communications team does all its annual report work in Claude. Every chat should use the current brand style guide and always write in British English with a formal tone. Which setup fits best?",
      options: [
        { id: "A", text: "Create a Project: style guide as knowledge, standing rules as instructions", rationale: "Correct. Project knowledge supplies reference documents for the chats in that Project, and project instructions tailor Claude's responses there." },
        { id: "B", text: "Paste the full style guide and the rules at the start of every new chat", rationale: "This can work, but it is repetitive and easy to forget or do inconsistently across the team." },
        { id: "C", text: "Do all annual report work in one very long chat so the guide only has to be pasted once", rationale: "A single ever-growing chat runs into context limits and loses accuracy over time." },
        { id: "D", text: "Store the style guide in a shared folder and mention the folder name in each chat", rationale: "Mentioning a folder name does not give Claude the file's content unless it is uploaded or made available through a connector." },
      ],
      answer: "A",
      explanation:
        "Projects are self-contained workspaces with their own chat histories and knowledge bases, and each Project can have instructions that tailor Claude's responses. On Team and Enterprise plans a Project can also be shared with colleagues.",
      reference: PROJECTS,
    },
    {
      id: "ccaof-d5-positive-instructions",
      domain: "d5",
      objective: "Create effective system-level instructions",
      difficulty: "intermediate",
      question:
        "A Project's instructions read: \"Do not use bullet points. Do not be too long. Do not use jargon.\" The responses still vary widely in format and length. Which rewrite follows Anthropic's prompting guidance?",
      options: [
        { id: "A", text: "Add more prohibitions, for example \"Do not use headings either.\"", rationale: "More prohibitions still leave Claude guessing what the desired output looks like." },
        { id: "B", text: "Repeat the same rules in capital letters so they stand out", rationale: "Emphasis does not tell Claude what to produce instead, and the vague \"too long\" remains undefined." },
        { id: "C", text: "\"Write flowing prose of at most 200 words in plain language.\"", rationale: "Correct. It describes the target format, a concrete length and the reading level, which is what Anthropic recommends." },
        { id: "D", text: "Move the same three rules into each user message instead of the instructions", rationale: "Changing where the rules sit does not fix the way they are written." },
      ],
      answer: "C",
      explanation:
        "Anthropic's formatting advice starts with telling Claude what to do instead of what not to do. Positive, specific instructions with measurable limits make outputs more consistent than lists of prohibitions.",
      reference: PROMPTING,
    },

    /* ── d6: Governance, Risk, and Responsible Use (15%) ──────────────────── */
    {
      id: "ccaof-d6-sensitive-data",
      domain: "d6",
      objective: "Apply data sensitivity, regulatory, and privacy considerations",
      difficulty: "intermediate",
      question:
        "An HR coordinator wants Claude's help with a staffing plan and is about to paste a spreadsheet with employees' names, home addresses and sick-leave records. The company has an AI policy and an approved Claude workspace. The plan only needs headcounts per team and week. What should the coordinator do?",
      options: [
        { id: "A", text: "Use a personal Claude account so the data stays out of company systems", rationale: "Moving sensitive company data into a personal account bypasses the organisation's policy and controls." },
        { id: "B", text: "Use the approved workspace and share only aggregated headcounts", rationale: "Correct. Following the AI policy, leaving out names, addresses and health data, and working in the approved, governed environment meets the task's needs without exposing sensitive personal data." },
        { id: "C", text: "Paste the full spreadsheet, since the data is only being used internally", rationale: "Internal use does not remove privacy obligations, and health data is especially sensitive." },
        { id: "D", text: "Paste the full spreadsheet and ask Claude to forget the data afterwards", rationale: "An instruction to the model is not a data protection control, and the sensitive data was never needed." },
      ],
      answer: "B",
      explanation:
        "Responsible use means following organisational AI policy and applying data sensitivity and privacy considerations before anything is shared. Sharing only the data a task requires is the simplest and strongest safeguard.",
      reference: EXAM_GUIDE,
    },
    {
      id: "ccaof-d6-high-risk-use",
      domain: "d6",
      objective: "Identify appropriate and inappropriate use cases",
      difficulty: "intermediate",
      question:
        "Under Anthropic's Usage Policy, which of these planned uses is a high-risk area where a qualified person must meaningfully review Claude's recommendation before it is used, and affected people must be told that AI was involved?",
      options: [
        { id: "A", text: "Drafting agendas for internal team meetings", rationale: "An ordinary productivity use with no decision about an individual's rights or opportunities." },
        { id: "B", text: "Summarising public news articles for an internal newsletter", rationale: "A low-risk summarisation task that the policy does not list as a high-risk area." },
        { id: "C", text: "Translating the FAQ page of a product website", rationale: "A routine content task; translation quality matters, but it is not a high-risk decision about a person." },
        { id: "D", text: "Ranking job applicants and recommending rejections", rationale: "Correct. Screening, ranking, advancing or rejecting candidates is listed under employment as a high-risk area, with human review and disclosure requirements." },
      ],
      answer: "D",
      explanation:
        "Anthropic's Usage Policy names high-risk areas such as legal, healthcare, insurance, finance, employment, housing and academic testing. For these, a qualified person with authority to change the recommendation must review it, and the people affected must be told AI was used.",
      reference: { label: "Anthropic Usage Policy", url: "https://www.anthropic.com/legal/aup" },
    },

    /* ── d7: Troubleshooting and Optimization (10%) ───────────────────────── */
    {
      id: "ccaof-d7-diverse-examples",
      domain: "d7",
      objective: "Adjust approach based on feedback and results",
      difficulty: "intermediate",
      question:
        "Your prompt for product descriptions includes three examples. All three describe kitchen gadgets, open with a question and are about 50 words long. Now every new description, even for office chairs, opens with a question and mentions cooking. What is the best fix?",
      options: [
        { id: "A", text: "Remove all examples and describe the style in words only", rationale: "Examples are one of the most reliable ways to steer output; dropping them throws away a useful tool instead of fixing it." },
        { id: "B", text: "Add three more kitchen-gadget examples in the same style", rationale: "More of the same examples strengthens the unwanted pattern." },
        { id: "C", text: "Use 3 to 5 relevant but varied examples, wrapped in example tags", rationale: "Correct. Varying products, openings and lengths removes the accidental pattern; Anthropic recommends relevant, diverse examples that cover edge cases without unintended patterns, structured with example tags." },
        { id: "D", text: "Keep the examples and add \"ignore the examples\" at the end of the prompt", rationale: "This contradicts the rest of the prompt and leaves the misleading examples in place." },
      ],
      answer: "C",
      explanation:
        "Claude picks up patterns from examples, including ones you did not intend. Varying the examples and separating them clearly from the instructions keeps the useful signal while removing accidental features.",
      reference: PROMPTING,
    },
    {
      id: "ccaof-d7-stale-knowledge",
      domain: "d7",
      objective: "Identify, diagnose, and resolve issues with underperforming prompts or poor outputs",
      difficulty: "foundation",
      question:
        "A sales team's Claude Project keeps quoting last year's prices. Its project knowledge contains both \"Price list 2025.pdf\" and \"Price list 2026.pdf\". What should the project owner do?",
      options: [
        { id: "A", text: "Ask every team member to remind Claude in each chat to use the 2026 file", rationale: "This depends on every user remembering and treats the symptom, while the conflicting file stays in place." },
        { id: "B", text: "Remove the 2025 file and name the authoritative price list in the instructions", rationale: "Correct. Removing the conflicting source fixes the cause, and the instruction prevents the same confusion when files are updated in future." },
        { id: "C", text: "Switch the Project to a more capable model so it picks the right file", rationale: "A different model still sees two conflicting price lists; the knowledge itself needs fixing." },
        { id: "D", text: "Upload the 2026 price list a second time so it outweighs the old one", rationale: "Duplicates add clutter and leave the outdated information available to Claude." },
      ],
      answer: "B",
      explanation:
        "Claude uses project knowledge as background for the chats in a Project, so outdated or conflicting files lead directly to wrong answers. Diagnosing the source of a poor output, then correcting the knowledge and instructions, is more durable than per-chat workarounds.",
      reference: PROJECTS,
    },
  ],
};
