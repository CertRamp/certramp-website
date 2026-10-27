import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free AWS AIB-C01 sample questions — ORIGINAL questions written by CertRamp for
 * the official AIB-C01 exam guide. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const D1 = {
  label: "AWS — AIB-C01 exam guide, Domain 1: AI Fundamentals and Literacy",
  url: "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01-domain1.html",
};
const D2 = {
  label: "AWS — AIB-C01 exam guide, Domain 2: AI Strategy and Business Value Creation",
  url: "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01-domain2.html",
};
const D3 = {
  label: "AWS — AIB-C01 exam guide, Domain 3: AI Governance and Responsible AI Leadership",
  url: "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01-domain3.html",
};
const D4 = {
  label: "AWS — AIB-C01 exam guide, Domain 4: Business Readiness, Leadership, and AI Transformation",
  url: "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01-domain4.html",
};

export const awsAibC01Questions: PracticeQuestionSet = {
  slug: "aws-aib-c01",
  intro:
    "15 original AIB-C01 practice questions across the four content domains of the official AWS Certified AI Business Strategist exam guide, weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AIB-C01 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original AWS AI Business Strategist (AIB-C01) practice questions on AI literacy, ROI, responsible AI governance and scaling AI, each fully explained.",
  },
  questions: [
    /* ── Domain 1: AI Fundamentals and Literacy (24%) ─────────────────────── */
    {
      id: "aibc01-d1-rules-vs-ai",
      domain: "d1",
      objective: "1.2 Identify and select appropriate AI solution types",
      difficulty: "foundation",
      question:
        "A finance team wants to route every supplier invoice above 10,000 EUR to a manager for approval. The threshold and the routing never change, and every decision must be fully predictable for auditors. Which approach fits best?",
      options: [
        { id: "A", text: "A machine learning model trained on past approvals", rationale: "Training a model on history adds cost and uncertainty to a decision that is already fully defined by a fixed rule." },
        { id: "B", text: "A generative AI assistant that decides on each invoice", rationale: "A generative model's output is not deterministic, which conflicts with the requirement for fully predictable decisions." },
        { id: "C", text: "Rule-based automation", rationale: "Correct. The logic is explicit, stable and must be predictable, which is exactly what deterministic rules deliver at low cost." },
        { id: "D", text: "An AI agent that orchestrates several tools", rationale: "Agents suit open-ended, multi-step tasks; a single fixed threshold does not need autonomy or tool use." },
      ],
      answer: "C",
      explanation:
        "Rule-based automation is the right choice when the logic is known, stable and must be fully explainable. AI earns its place when patterns are too complex or variable to write down as rules, such as reading unstructured documents or predicting outcomes.",
      reference: D1,
    },
    {
      id: "aibc01-d1-rag-vs-finetune",
      domain: "d1",
      objective: "1.3 Apply GenAI concepts and techniques",
      difficulty: "intermediate",
      question:
        "A support organisation wants its generative AI assistant to answer questions using the company's product manuals, which are updated every week. Answers must reflect the latest version without retraining the model each time. Which technique should the business sponsor recommend?",
      options: [
        { id: "A", text: "Fine-tune the model on the manuals every week", rationale: "Weekly fine-tuning is costly and slow, and the model would still lag behind the latest content between training runs." },
        { id: "B", text: "Retrieval Augmented Generation (RAG) over the manuals", rationale: "Correct. RAG retrieves relevant passages from the current documents at query time and supplies them to the model, so updated manuals are reflected without retraining." },
        { id: "C", text: "Increase the model's temperature setting", rationale: "Temperature controls randomness of the output; it gives the model no access to new information." },
        { id: "D", text: "Write a longer system prompt describing the products", rationale: "A hand-written prompt cannot hold weekly-changing manuals at scale and is limited by the context window." },
      ],
      answer: "B",
      explanation:
        "RAG grounds answers in an external, up-to-date knowledge source at the moment of the question. Fine-tuning adapts a model's behaviour, tone or domain style through extra training, but it is a poor fit for knowledge that changes frequently.",
      reference: D1,
    },
    {
      id: "aibc01-d1-context-window",
      domain: "d1",
      objective: "1.3 Apply GenAI concepts and techniques",
      difficulty: "intermediate",
      question:
        "A legal team pastes a 600-page contract bundle into a generative AI chat and asks for a summary. The summary ignores clauses that appear near the start of the bundle. What is the most likely cause?",
      options: [
        { id: "A", text: "The input exceeded the model's context window, so part of the text was not processed", rationale: "Correct. A model can only consider a limited number of tokens at once; text beyond that limit is truncated or dropped." },
        { id: "B", text: "The model has drifted since it was trained", rationale: "Model drift describes performance changes over time as real-world data changes; it does not explain missing parts of one long input." },
        { id: "C", text: "The contract contains structured data the model cannot read", rationale: "Contracts are unstructured text, which is precisely what language models process." },
        { id: "D", text: "The prompt did not specify an output format", rationale: "A missing format instruction affects the shape of the answer, not whether whole sections of the input are considered." },
      ],
      answer: "A",
      explanation:
        "Tokens and context windows limit how much text a model can take in at once. For very long inputs, the business options are to split the content, summarise in stages, or retrieve only the relevant passages with RAG.",
      reference: D1,
    },
    {
      id: "aibc01-d1-shadow-ai",
      domain: "d1",
      objective: "1.2 Identify and select appropriate AI solution types",
      difficulty: "foundation",
      question:
        "Employees across several departments are using unapproved public AI chat tools to draft customer emails, sometimes pasting in customer data. Leadership does not want to stop AI use altogether. What is the most appropriate first step?",
      options: [
        { id: "A", text: "Block all AI websites at the network level permanently", rationale: "A blanket ban stops legitimate productivity gains and tends to push usage further out of sight." },
        { id: "B", text: "Ask each department to choose its own tools freely", rationale: "Uncoordinated choices are what created the shadow AI risk in the first place." },
        { id: "C", text: "Wait for an incident before acting", rationale: "Customer data is already being exposed; a reactive approach accepts avoidable risk." },
        { id: "D", text: "Publish a transparent classification of AI tools as approved, blocked or under evaluation", rationale: "Correct. A clear, visible classification gives employees safe options and sets boundaries, reducing shadow AI without halting adoption." },
      ],
      answer: "D",
      explanation:
        "Shadow AI grows when people lack approved alternatives and clear guidance. A transparent tool classification, combined with an evaluation path for new tools, balances productivity with data protection.",
      reference: D1,
    },

    /* ── Domain 2: AI Strategy and Business Value Creation (28%) ─────────── */
    {
      id: "aibc01-d2-baseline",
      domain: "d2",
      objective: "2.2 Measure and demonstrate AI business value",
      difficulty: "foundation",
      question:
        "A contact centre plans to roll out an AI assistant for agents next quarter and wants to prove its impact on average handling time to the board. What should the programme lead do before launch?",
      options: [
        { id: "A", text: "Survey agents after launch about whether calls feel shorter", rationale: "Perception surveys after the fact are useful as an intangible indicator but cannot prove a change in handling time." },
        { id: "B", text: "Record current average handling time and related metrics as a baseline", rationale: "Correct. Without a pre-launch baseline, there is nothing to compare post-launch results against." },
        { id: "C", text: "Set the ROI target only once the first results arrive", rationale: "Defining success after seeing the data invites bias and weakens credibility with the board." },
        { id: "D", text: "Compare against a competitor's published handling times", rationale: "External figures reflect different processes and customers; they cannot isolate the effect of your AI assistant." },
      ],
      answer: "B",
      explanation:
        "Baseline metrics captured before implementation are the reference point for measuring AI's effect. Define the KPIs and targets up front, then compare like for like after launch.",
      reference: D2,
    },
    {
      id: "aibc01-d2-build-buy-partner",
      domain: "d2",
      objective: "2.1 Develop AI strategies that align with business objectives",
      difficulty: "intermediate",
      question:
        "A mid-sized insurer with no in-house ML team needs AI-assisted document extraction for claims within four months. Several mature commercial products already cover its claim types. Which option best fits a build-buy-partner evaluation?",
      options: [
        { id: "A", text: "Build a custom model from scratch to keep full control", rationale: "Without an ML team and with a four-month deadline, building from scratch is high risk and unlikely to beat mature products." },
        { id: "B", text: "Delay the project until an internal ML team has been hired", rationale: "Delay misses the business timeline when suitable solutions already exist." },
        { id: "C", text: "Buy a proven solution, for example via AWS Marketplace, after checking compliance and data handling", rationale: "Correct. Limited internal capability, a short timeline and mature market options point to buying, with due diligence on regulatory and data requirements." },
        { id: "D", text: "Fine-tune a large language model internally on all historical claims", rationale: "Fine-tuning still needs specialist skills and data preparation the insurer lacks, and it adds compliance work." },
      ],
      answer: "C",
      explanation:
        "Build-buy-partner decisions weigh budget, timelines, internal capabilities, vendor proposals and regulatory requirements. When mature solutions exist and internal skills are thin, buying or partnering usually delivers value faster and with less risk.",
      reference: D2,
    },
    {
      id: "aibc01-d2-not-ai",
      domain: "d2",
      objective: "2.1 Develop AI strategies that align with business objectives",
      difficulty: "advanced",
      question:
        "A retailer proposes an AI model to forecast demand for a product line that sells about 20 units a year, with no recorded sales history before last year. The forecast would feed a decision worth a few hundred euros. What is the best recommendation?",
      options: [
        { id: "A", text: "Do not use AI here; use a simple manual or rule-based approach", rationale: "Correct. Too little data and too little value at stake mean AI cannot be trained reliably or justify its cost." },
        { id: "B", text: "Proceed with a custom model to build AI experience", rationale: "Building skills is a valid aim, but not on a use case that cannot produce reliable results or business value." },
        { id: "C", text: "Use a generative AI model to invent synthetic sales history", rationale: "Synthetic data does not fix the absence of real demand signals and adds a risk of misleading forecasts." },
        { id: "D", text: "Fine-tune a foundation model on the single year of data", rationale: "One year of sparse data is not enough to adapt a model meaningfully, and the cost outweighs the decision's value." },
      ],
      answer: "A",
      explanation:
        "Recognising when AI is not the right tool is part of good AI strategy. Insufficient data, low business value or a problem that simple logic can handle are all signals to choose a non-AI solution.",
      reference: D2,
    },
    {
      id: "aibc01-d2-portfolio",
      domain: "d2",
      objective: "2.1 Develop AI strategies that align with business objectives",
      difficulty: "advanced",
      question:
        "An AI steering committee reviews four pilots. Which pilot is the strongest candidate to pause or terminate?",
      options: [
        { id: "A", text: "A pilot meeting its KPIs that now needs budget to scale", rationale: "Meeting KPIs is a reason to consider scaling, not stopping." },
        { id: "B", text: "A pilot slightly behind schedule but with strong early adoption by users", rationale: "Strong adoption is a positive leading indicator; a small delay alone does not justify stopping." },
        { id: "C", text: "A pilot with high strategic alignment that is waiting on a data-sharing agreement", rationale: "The blocker is specific and solvable; pausing may be needed briefly, but the strategic case remains strong." },
        { id: "D", text: "A pilot with no defined business owner, low user adoption and no measurable link to strategic goals", rationale: "Correct. It lacks accountability, value evidence and strategic alignment, the main criteria for continuing an initiative." },
      ],
      answer: "D",
      explanation:
        "AI initiatives should be prioritised on business value, feasibility, sustainability and strategic alignment. Leading indicators such as adoption and clear ownership help decide whether to scale, pause or terminate.",
      reference: D2,
    },

    /* ── Domain 3: AI Governance and Responsible AI Leadership (24%) ──────── */
    {
      id: "aibc01-d3-human-oversight",
      domain: "d3",
      objective: "3.1 Apply responsible AI principles to business decisions",
      difficulty: "intermediate",
      question:
        "A bank wants to use a generative AI assistant to draft responses to customer complaints about loan decisions. Which safeguard is most appropriate before responses reach customers?",
      options: [
        { id: "A", text: "Send AI drafts automatically to speed up response times", rationale: "Fully automated replies on sensitive financial matters risk inaccurate or harmful statements reaching customers." },
        { id: "B", text: "Guardrails on the output plus human review, with clear criteria for escalation", rationale: "Correct. High-impact customer communication calls for guardrails, hallucination checks and a human in the loop with defined escalation rules." },
        { id: "C", text: "Disable logging so customer data is not stored", rationale: "Removing logs undermines auditability and does nothing to prevent incorrect responses." },
        { id: "D", text: "Rely on the model provider's general content filters only", rationale: "Generic filters do not cover business-specific accuracy, tone or regulatory requirements." },
      ],
      answer: "B",
      explanation:
        "Human oversight is needed where AI outputs can significantly affect people or carry regulatory risk. Guardrails (such as those in Amazon Bedrock) reduce harmful outputs, but a human reviewer and escalation criteria remain the key control for high-stakes decisions.",
      reference: D3,
    },
    {
      id: "aibc01-d3-governance-board",
      domain: "d3",
      objective: "3.2 Establish AI governance structures and ensure regulatory compliance",
      difficulty: "foundation",
      question:
        "A company is setting up an AI governance board to approve high-risk AI use cases. Which composition best supports clear accountability and balanced decisions?",
      options: [
        { id: "A", text: "Business leads, technical experts, legal, compliance and risk, with a named accountable executive", rationale: "Correct. Cross-functional representation brings all relevant perspectives, and a named owner makes accountability clear." },
        { id: "B", text: "Data scientists only, because they understand the models best", rationale: "Technical expertise alone misses legal, ethical and business considerations." },
        { id: "C", text: "The external AI vendor, which knows its product's risks", rationale: "A vendor cannot own the customer's accountability and has a commercial interest in approval." },
        { id: "D", text: "An informal group that meets when someone raises a concern", rationale: "Ad hoc arrangements lack defined decision rights and consistent oversight." },
      ],
      answer: "A",
      explanation:
        "Effective AI governance needs cross-functional membership and clear accountability. Each high-risk decision should have an identifiable owner and documented criteria for approval.",
      reference: D3,
    },
    {
      id: "aibc01-d3-risk-classification",
      domain: "d3",
      objective: "3.2 Establish AI governance structures and ensure regulatory compliance",
      difficulty: "advanced",
      question:
        "A governance team must decide where to focus limited review capacity across 40 proposed AI use cases, ranging from internal meeting summaries to automated screening of job applicants. What should it apply?",
      options: [
        { id: "A", text: "Review use cases in the order they were submitted", rationale: "Submission order has nothing to do with the potential for harm or regulatory exposure." },
        { id: "B", text: "Apply the same full review to every use case", rationale: "Equal treatment wastes scarce capacity on low-risk cases and delays the high-risk ones." },
        { id: "C", text: "An AI risk classification framework that sets review depth by risk tier", rationale: "Correct. Classifying use cases by impact and regulatory exposure lets the team apply proportionate controls, with the deepest scrutiny on cases such as candidate screening." },
        { id: "D", text: "Approve all internal use cases automatically and review only customer-facing ones", rationale: "Internal does not mean low-risk: applicant screening is internal but affects people significantly." },
      ],
      answer: "C",
      explanation:
        "Risk classification prioritises governance and compliance effort across the AI lifecycle. Use cases that affect people's rights, safety or access to opportunities warrant stronger controls than low-impact productivity tools.",
      reference: D3,
    },
    {
      id: "aibc01-d3-bias-drift",
      domain: "d3",
      objective: "3.3 Identify enterprise AI risks and direct mitigation strategies",
      difficulty: "intermediate",
      question:
        "A credit-scoring model passed a fairness review at launch. A year later, the customer base has shifted towards younger applicants. What should the business owner ensure?",
      options: [
        { id: "A", text: "No action is needed because the model passed its fairness review", rationale: "A one-time check cannot detect bias that emerges as the population and data change." },
        { id: "B", text: "Ongoing monitoring of model outcomes for bias drift across groups, with defined actions if thresholds are breached", rationale: "Correct. Bias can arise at any stage of the AI lifecycle, including in production as data shifts, so continuous monitoring is needed." },
        { id: "C", text: "Remove age from the input data and assume the problem is solved", rationale: "Removing a feature does not eliminate bias from proxy variables and does not replace monitoring." },
        { id: "D", text: "Replace the model with a larger one", rationale: "Model size does not address shifts in the population or fairness of outcomes." },
      ],
      answer: "B",
      explanation:
        "Bias is not fixed at launch: data shifts can introduce or amplify it over time. Production AI systems need risk controls and monitoring that track fairness alongside accuracy.",
      reference: D3,
    },

    /* ── Domain 4: Business Readiness, Leadership, and AI Transformation (24%) */
    {
      id: "aibc01-d4-data-silos",
      domain: "d4",
      objective: "4.2 Establish data and infrastructure foundations for AI",
      difficulty: "intermediate",
      question:
        "A manufacturer wants AI-driven predictive maintenance, but sensor data sits in plant-level systems, maintenance records are in a separate tool and no one owns the combined data set. What should leadership address first?",
      options: [
        { id: "A", text: "Purchase the most capable AI model available", rationale: "A better model cannot compensate for data that is fragmented, inaccessible and unowned." },
        { id: "B", text: "Launch the AI pilot at every plant at once", rationale: "Scaling before the data foundation exists multiplies the problem." },
        { id: "C", text: "Hire additional data scientists to work around the gaps", rationale: "Extra staff help, but without data ownership and sharing rules they will keep hitting the same barriers." },
        { id: "D", text: "A data strategy with clear data ownership and sharing agreements to break down the silos", rationale: "Correct. Accessible, owned, quality data is the foundation that the AI use case depends on." },
      ],
      answer: "D",
      explanation:
        "Data readiness — quality, accessibility and the effect of silos — often decides whether an AI initiative can succeed. Data strategy, ownership and sharing frameworks come before model choice.",
      reference: D4,
    },
    {
      id: "aibc01-d4-change-management",
      domain: "d4",
      objective: "4.3 Lead enterprise-wide change and build AI-ready workforce capabilities",
      difficulty: "foundation",
      question:
        "After an AI document-processing tool is announced, back-office staff fear job losses and adoption stalls. Which leadership action best addresses this?",
      options: [
        { id: "A", text: "Transparent communication about timelines, expected outcomes and how roles will change, backed by training", rationale: "Correct. Addressing workforce concerns openly and building skills reduces resistance and supports adoption." },
        { id: "B", text: "Make the tool mandatory and track usage per employee", rationale: "Compulsion without addressing fears tends to deepen resistance and damage trust." },
        { id: "C", text: "Postpone communication until the tool is fully deployed", rationale: "Silence fuels speculation and fear; concerns grow rather than disappear." },
        { id: "D", text: "Limit information about the project to the IT department", rationale: "Excluding affected staff removes the people whose adoption determines success." },
      ],
      answer: "A",
      explanation:
        "Cultural barriers such as fear and resistance to change are a common reason AI initiatives stall. Clear communication about workforce effects, combined with AI literacy and role transition plans, builds trust and momentum.",
      reference: D4,
    },
    {
      id: "aibc01-d4-scale-coe",
      domain: "d4",
      objective: "4.4 Scale AI from pilots to enterprise-wide deployments",
      difficulty: "advanced",
      question:
        "A company has five successful but isolated AI pilots, each built by a different team with its own tools, standards and governance approach. It now wants to scale AI across the enterprise. What is the most effective next step?",
      options: [
        { id: "A", text: "Let each team scale its own pilot independently", rationale: "Independent scaling multiplies inconsistent standards, duplicated costs and governance gaps." },
        { id: "B", text: "Establish an AI centre of excellence to share standards, reusable components and governance across teams", rationale: "Correct. A COE provides the cross-functional collaboration, common practices and governance that let pilots move to production-grade, enterprise-wide deployment." },
        { id: "C", text: "Stop all pilots and restart with a single enterprise-wide programme", rationale: "Discarding proven short-term wins wastes value and momentum." },
        { id: "D", text: "Move all five pilots into production unchanged at the same time", rationale: "Pilots typically lack the governance and operational requirements needed for production-grade use." },
      ],
      answer: "B",
      explanation:
        "Scaling AI works best iteratively, building on short-term wins. A centre of excellence and cross-functional mechanisms help standardise governance, reuse what works and address the operational requirements of production.",
      reference: D4,
    },
  ],
};
