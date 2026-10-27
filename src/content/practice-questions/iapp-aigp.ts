import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free AIGP sample questions — ORIGINAL questions written by CertRamp for the
 * IAPP AIGP body of knowledge and exam blueprint 2.1 (effective 2 February 2026).
 * Not taken from the paid practice exams, not recalled exam content, and not
 * presented as real exam questions.
 */
const BOK = {
  label: "IAPP — AIGP body of knowledge and exam blueprint 2.1 (PDF)",
  url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt0d33152fd20bc134/AIGP_Cert%20BOK.pdf",
};

const aiAct = (articles: string) => ({
  label: `EU AI Act (Regulation (EU) 2024/1689), ${articles} — EUR-Lex`,
  url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
});

const GDPR = {
  label: "GDPR (Regulation (EU) 2016/679), Articles 5, 6 and 13 — EUR-Lex",
  url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
};

const NIST_RMF = {
  label: "NIST — AI Risk Management Framework",
  url: "https://www.nist.gov/itl/ai-risk-management-framework",
};

export const iappAigpQuestions: PracticeQuestionSet = {
  slug: "iapp-aigp",
  intro:
    "15 original AIGP practice questions across the four domains of the IAPP body of knowledge and exam blueprint 2.1 (effective 2 February 2026), weighted roughly like the blueprint. Each one comes with the answer, a short explanation, the reason every other option is wrong and a link to the relevant IAPP document or legal text.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AIGP Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original IAPP AIGP practice questions on AI governance, the EU AI Act, NIST AI RMF, AI development and deployment — each with a full explanation.",
  },
  questions: [
    /* ── Domain I: Understanding the foundations of AI governance ───────────── */
    {
      id: "aigp-d1-ai-definition",
      domain: "d1",
      objective: "I.A Understand what AI is and why it needs governance",
      difficulty: "foundation",
      question:
        "The OECD and the EU AI Act both define an AI system in similar terms. Which characteristic in these definitions most clearly separates an AI system from conventional, rule-based software?",
      options: [
        { id: "A", text: "It runs on cloud infrastructure and processes large volumes of data", rationale: "Where software runs and how much data it handles are not part of the definition; conventional software can do both." },
        { id: "B", text: "It infers from the input it receives how to generate outputs such as predictions, content, recommendations or decisions", rationale: "Correct. The capability to infer how to produce outputs, rather than only executing rules written by people, is the core element of both definitions." },
        { id: "C", text: "It is able to operate without any human involvement", rationale: "The definitions refer to varying levels of autonomy. Full autonomy is not required, and many AI systems operate with a human in the loop." },
        { id: "D", text: "It always continues to learn after deployment", rationale: "Adaptiveness after deployment is something an AI system may exhibit, not a defining requirement." },
      ],
      answer: "B",
      explanation:
        "Inference is what makes a system \"AI\" for regulatory purposes: the system derives how to generate outputs from inputs and data. Autonomy and adaptiveness vary between systems, which is why both definitions describe them as possible rather than essential features.",
      reference: aiAct("Article 3(1)"),
    },
    {
      id: "aigp-d1-roles",
      domain: "d1",
      objective: "I.B Establish and communicate organizational expectations for AI governance",
      difficulty: "intermediate",
      question:
        "An organisation has dozens of AI use cases spread across business units. Audits show that nobody can say who approved several of the systems or who is responsible for monitoring them. What should the AI governance lead do first?",
      options: [
        { id: "A", text: "Ask the data science team to take responsibility for all AI systems", rationale: "Data scientists are key stakeholders, but business ownership, legal, privacy and risk accountability cannot sit with one technical team." },
        { id: "B", text: "Pause all AI use until a regulator issues guidance", rationale: "Waiting for external guidance does not fix an internal accountability gap and is disproportionate for low-risk use cases." },
        { id: "C", text: "Define and document roles and responsibilities, including an accountable owner for each AI system and a cross-functional oversight body", rationale: "Correct. Clear roles, named owners and a cross-functional body (for example legal, privacy, security, risk and business) close the accountability gap the audit revealed." },
        { id: "D", text: "Purchase an AI monitoring tool for every business unit", rationale: "Tools can support oversight, but without defined responsibilities nobody is accountable for acting on what they show." },
      ],
      answer: "C",
      explanation:
        "Accountability starts with defined roles and responsibilities for AI governance stakeholders. Each AI system needs an accountable owner, and cross-functional oversight ensures that legal, ethical, privacy and security perspectives are considered.",
      reference: BOK,
    },
    {
      id: "aigp-d1-third-party-policy",
      domain: "d1",
      objective: "I.C Establish policies and procedures to apply throughout the AI life cycle",
      difficulty: "intermediate",
      question:
        "A software vendor adds a generative AI feature to a service your organisation has used for years. The feature was switched on in an update without passing through your AI governance review. Which policy change best prevents this from happening again?",
      options: [
        { id: "A", text: "Update procurement and third-party risk policies so that new or changed AI functionality in existing vendor products triggers an AI governance review", rationale: "Correct. Third-party risk policies need to cover AI that arrives through renewals and product updates, not only new purchases." },
        { id: "B", text: "Ban all vendor products that contain AI", rationale: "A blanket ban is rarely workable and ignores the risk-based approach that AI governance relies on." },
        { id: "C", text: "Add an AI clause to the employee acceptable use policy", rationale: "Acceptable use rules guide staff behaviour but do not control what vendors introduce into contracted services." },
        { id: "D", text: "Rely on the vendor's own responsible AI statement", rationale: "A vendor statement is useful input, but the organisation remains responsible for assessing how the feature affects its own use and obligations." },
      ],
      answer: "A",
      explanation:
        "The body of knowledge expects policies that manage third-party risk across the AI life cycle. AI capabilities often appear in existing products, so review triggers must cover changes to vendor services, not only new procurements.",
      reference: BOK,
    },

    /* ── Domain II: Understanding how laws, standards and frameworks apply to AI ── */
    {
      id: "aigp-d2-purpose-limitation",
      domain: "d2",
      objective: "II.A Understand how existing data privacy laws apply to AI",
      difficulty: "intermediate",
      question:
        "A company subject to the GDPR wants to use customer support chat transcripts, originally collected to resolve customer queries, to fine-tune a language model. Which step is required before it does so?",
      options: [
        { id: "A", text: "None — data the company already holds can be reused for any internal purpose", rationale: "The purpose limitation principle does not allow unrestricted reuse of personal data for new purposes." },
        { id: "B", text: "Anonymise the transcripts by removing customer names only", rationale: "Removing names alone rarely makes free-text transcripts anonymous; other identifiers and context usually remain." },
        { id: "C", text: "Obtain approval from the supervisory authority", rationale: "The GDPR does not require prior approval from the supervisory authority for a new processing purpose (prior consultation applies only in specific high-risk cases after a DPIA)." },
        { id: "D", text: "Assess whether the new purpose is compatible with the original one, identify a lawful basis and provide transparent information to the individuals", rationale: "Correct. Reuse for model training is a further purpose that must meet purpose limitation, have a lawful basis and be explained to data subjects." },
      ],
      answer: "D",
      explanation:
        "Privacy law applies to AI training just as it does to any other processing. Purpose limitation, lawful basis and transparency are the first questions to answer when existing personal data is reused to build or fine-tune a model.",
      reference: GDPR,
    },
    {
      id: "aigp-d2-nondiscrimination",
      domain: "d2",
      objective: "II.B Understand how other types of existing laws apply to AI",
      difficulty: "intermediate",
      question:
        "An employer uses a vendor's AI tool to screen job applications. Analysis shows that the tool rejects applicants from a protected group at a markedly higher rate. Which statement best reflects how non-discrimination law applies?",
      options: [
        { id: "A", text: "Only the vendor can be liable, because it designed the model", rationale: "Liability is not shifted entirely to the vendor; the employer makes the hiring decision using the tool." },
        { id: "B", text: "There is no issue as long as the tool does not use the protected characteristic as an input", rationale: "Proxy variables can produce discriminatory outcomes even when the protected characteristic itself is excluded." },
        { id: "C", text: "Non-discrimination law does not apply to automated decisions", rationale: "Existing employment non-discrimination laws apply regardless of whether a person or a system makes the decision." },
        { id: "D", text: "The employer can be responsible for the discriminatory outcome even though a third party built the tool", rationale: "Correct. Employers remain subject to non-discrimination law for their hiring decisions, including decisions made with the help of AI tools." },
      ],
      answer: "D",
      explanation:
        "Using AI does not remove existing legal duties. Employment, credit, housing and insurance decisions remain subject to non-discrimination law, and organisations need to test for and address disparate outcomes, including those caused by proxies.",
      reference: BOK,
    },
    {
      id: "aigp-d2-prohibited-emotion",
      domain: "d2",
      objective: "II.C Understand the main elements of AI-specific laws",
      difficulty: "advanced",
      question:
        "A company in the EU plans to use an AI system that infers employees' emotions from webcam footage during working hours to measure engagement. There is no medical or safety reason. How does the EU AI Act classify this use?",
      options: [
        { id: "A", text: "Prohibited AI practice", rationale: "Correct. The AI Act prohibits AI systems that infer the emotions of natural persons in the workplace and in education institutions, except for medical or safety reasons." },
        { id: "B", text: "High-risk AI system that may be used after a conformity assessment", rationale: "Some emotion recognition systems are high-risk, but this specific workplace use falls under the prohibitions, so no conformity assessment can make it lawful." },
        { id: "C", text: "Limited-risk system subject only to transparency obligations", rationale: "Transparency duties for emotion recognition apply to permitted uses; they do not legitimise a prohibited one." },
        { id: "D", text: "Minimal-risk system with no specific obligations", rationale: "Emotion inference in the workplace is expressly addressed by the Act and is not minimal risk." },
      ],
      answer: "A",
      explanation:
        "The AI Act's risk-based structure starts with a list of prohibited practices. Emotion recognition in the workplace and in education is on that list unless it is used for medical or safety reasons.",
      reference: aiAct("Article 5(1)(f)"),
    },
    {
      id: "aigp-d2-nist-govern",
      domain: "d2",
      objective: "II.D Understand the main industry standards and tools that apply to AI",
      difficulty: "foundation",
      question:
        "The NIST AI Risk Management Framework organises its core into four functions. Which function is designed to be cross-cutting, informing and being infused throughout the other three?",
      options: [
        { id: "A", text: "Map", rationale: "Map establishes the context and identifies risks for a specific AI system; it is not the cross-cutting function." },
        { id: "B", text: "Govern", rationale: "Correct. Govern cultivates a risk management culture, policies and accountability, and applies across Map, Measure and Manage." },
        { id: "C", text: "Measure", rationale: "Measure analyses, assesses and tracks identified risks; it builds on Map rather than spanning all functions." },
        { id: "D", text: "Manage", rationale: "Manage prioritises and acts on risks; it depends on Govern, Map and Measure." },
      ],
      answer: "B",
      explanation:
        "The four AI RMF functions are Govern, Map, Measure and Manage. Govern is the foundation that runs through the others, while Map, Measure and Manage are applied in the context of specific AI systems and life-cycle stages.",
      reference: NIST_RMF,
    },

    /* ── Domain III: Understanding how to govern AI development ─────────────── */
    {
      id: "aigp-d3-impact-assessment",
      domain: "d3",
      objective: "III.A Govern the designing and building of the AI system",
      difficulty: "intermediate",
      question:
        "A team is about to start building an AI system that will prioritise patient appointment requests. When should the AI impact assessment be performed?",
      options: [
        { id: "A", text: "After the model has been trained, when its accuracy is known", rationale: "Waiting until after training means design choices that create risk have already been made and are costly to change." },
        { id: "B", text: "Only if a regulator asks for it", rationale: "Impact assessments are a governance tool to identify and reduce risk, not just a response to regulatory requests." },
        { id: "C", text: "During design, before building starts, and revisited as the system changes through its life cycle", rationale: "Correct. Assessing early lets the findings shape requirements, data choices and controls, and revisiting it keeps it current." },
        { id: "D", text: "Once, immediately before release into production", rationale: "A single pre-release check misses the chance to design risk out and ignores changes after release." },
      ],
      answer: "C",
      explanation:
        "Impact assessments are most effective when they influence design decisions. They should start at the design stage and be updated when the system, its data or its context changes significantly.",
      reference: BOK,
    },
    {
      id: "aigp-d3-data-provenance",
      domain: "d3",
      objective: "III.B Govern the collection and use of data in training and testing the AI model and system",
      difficulty: "intermediate",
      question:
        "During a review, the development team cannot show where parts of its training dataset came from or under which terms they were obtained. Which governance practice addresses this gap most directly?",
      options: [
        { id: "A", text: "Increasing the size of the training dataset", rationale: "More data does not explain where existing data came from and may add further data of unknown origin." },
        { id: "B", text: "Establishing and documenting data lineage and provenance, including the source and lawful rights to use each dataset", rationale: "Correct. Documented lineage and provenance show where data came from, how it was transformed and whether the organisation may use it for training." },
        { id: "C", text: "Encrypting the training dataset at rest", rationale: "Encryption protects confidentiality but says nothing about origin or usage rights." },
        { id: "D", text: "Retraining the model more frequently", rationale: "Retraining frequency does not resolve uncertainty about the data the model is trained on." },
      ],
      answer: "B",
      explanation:
        "Data governance for AI includes knowing the source of data, the rights to collect and use it, and how it has been processed. Lineage and provenance documentation supports legal compliance, quality assessment and accountability.",
      reference: BOK,
    },
    {
      id: "aigp-d3-monitoring-drift",
      domain: "d3",
      objective: "III.C Govern the release, monitoring and maintenance of the AI system",
      difficulty: "intermediate",
      question:
        "Six months after release, a fraud detection model's precision has fallen steadily because customer behaviour has changed. Which governance control should have been in place to detect and address this?",
      options: [
        { id: "A", text: "A one-time validation report signed off at release", rationale: "Release validation confirms performance at one point in time and cannot detect later changes." },
        { id: "B", text: "A larger test dataset before release", rationale: "Better testing before release does not reveal changes in real-world data that occur afterwards." },
        { id: "C", text: "Restricting access to the model to the fraud team", rationale: "Access control is a security measure and does not detect performance degradation." },
        { id: "D", text: "Continuous monitoring against defined performance thresholds, with a schedule for maintenance and retraining", rationale: "Correct. Ongoing monitoring detects drift, and defined thresholds and a maintenance schedule ensure it leads to action." },
      ],
      answer: "D",
      explanation:
        "Model performance can degrade when the data or environment changes after release. Governance therefore requires continuous monitoring, thresholds that trigger review and a regular schedule for maintenance and retraining.",
      reference: BOK,
    },
    {
      id: "aigp-d3-business-context",
      domain: "d3",
      objective: "III.A Govern the designing and building of the AI system",
      difficulty: "foundation",
      question:
        "A business unit asks the data science team to \"build an AI model for customer churn\". Before any model architecture is chosen, what should governance require?",
      options: [
        { id: "A", text: "A documented business context and use case, including the intended purpose, affected stakeholders and success criteria", rationale: "Correct. Defining the business context and use case is the starting point for assessing risk, choosing data and setting acceptance criteria." },
        { id: "B", text: "A comparison of the accuracy of several candidate models", rationale: "Model comparison comes later; without a defined use case there are no criteria to compare against." },
        { id: "C", text: "A budget for cloud computing resources", rationale: "Budgeting is a project task, not the governance foundation for design decisions." },
        { id: "D", text: "A press release announcing the AI initiative", rationale: "External communication is not a design-stage governance requirement." },
      ],
      answer: "A",
      explanation:
        "Governing design begins with understanding why the system is needed, whom it affects and what success looks like. These decisions drive the impact assessment, data requirements and testing criteria.",
      reference: BOK,
    },

    /* ── Domain IV: Understanding how to govern AI deployment and use ───────── */
    {
      id: "aigp-d4-deployment-options",
      domain: "d4",
      objective: "IV.A Evaluate key factors and risks relevant to the decision to deploy the AI system",
      difficulty: "advanced",
      question:
        "A bank wants to use a large language model to summarise internal documents that contain confidential customer data. Contractual and regulatory requirements say the data must stay within infrastructure the bank controls. Which deployment option best fits these requirements?",
      options: [
        { id: "A", text: "Hosting an open-weight model on the bank's own controlled infrastructure", rationale: "Correct. Self-hosting keeps data processing within infrastructure the bank controls, which matches the stated requirement." },
        { id: "B", text: "Using a public consumer chatbot through employees' personal accounts", rationale: "Consumer services offer the least control over data handling and may not meet contractual or regulatory obligations." },
        { id: "C", text: "Calling a third-party model through a public API with default settings", rationale: "A third-party API sends data to the provider's environment, which conflicts with the requirement unless specific contractual and technical safeguards are agreed." },
        { id: "D", text: "Fine-tuning a vendor-hosted model with the confidential data", rationale: "This sends the confidential data to the vendor's environment and embeds it in a model the bank does not control." },
      ],
      answer: "A",
      explanation:
        "Deployment decisions depend on model type and deployment option as well as business goals. Where data must stay under the organisation's control, self-hosting is the option that meets the requirement, at the cost of operating the model itself.",
      reference: BOK,
    },
    {
      id: "aigp-d4-vendor-terms",
      domain: "d4",
      objective: "IV.B Perform key activities to assess the AI system",
      difficulty: "intermediate",
      question:
        "Your organisation is negotiating a licence for a vendor's AI writing assistant that staff will use with internal business documents. Which contract term is most important to review from an AI governance perspective?",
      options: [
        { id: "A", text: "The number of user licences included", rationale: "Licence volume is a commercial term with no direct bearing on AI risk." },
        { id: "B", text: "The colour scheme and branding options", rationale: "Branding options have no governance relevance." },
        { id: "C", text: "The vendor's office locations", rationale: "Office locations may matter little; where data is processed and stored is the relevant question." },
        { id: "D", text: "Whether the vendor may use your inputs and outputs to train or improve its models", rationale: "Correct. Use of customer data for model training affects confidentiality, intellectual property and privacy, and must be addressed in the contract." },
      ],
      answer: "D",
      explanation:
        "Assessing a third-party AI system includes reviewing key terms and risks in vendor or licensing agreements. Data use for training, confidentiality, intellectual property, liability and audit rights are typical areas to examine.",
      reference: BOK,
    },
    {
      id: "aigp-d4-human-oversight",
      domain: "d4",
      objective: "IV.C Govern the deployment and use of the AI system",
      difficulty: "advanced",
      question:
        "A company deploys a high-risk AI system under the EU AI Act to support decisions about access to essential services. Which obligation does the AI Act place on the company as deployer regarding human oversight?",
      options: [
        { id: "A", text: "Redesign the system so that it cannot produce automated outputs", rationale: "Design obligations for human oversight sit with the provider; the deployer is not required to redesign the system." },
        { id: "B", text: "Assign human oversight to natural persons who have the necessary competence, training and authority, as well as the necessary support", rationale: "Correct. Deployers of high-risk AI systems must assign oversight to people who are competent, trained and empowered to act." },
        { id: "C", text: "Delegate oversight entirely to the provider", rationale: "The deployer uses the system in its own context and cannot hand over its oversight duty to the provider." },
        { id: "D", text: "Obtain explicit consent from every affected person before each use", rationale: "The AI Act does not make consent a condition for using a high-risk system; human oversight is a separate obligation." },
      ],
      answer: "B",
      explanation:
        "The AI Act splits duties between provider and deployer. Providers design systems to allow effective oversight, while deployers must assign that oversight to people with the competence, training, authority and support to carry it out.",
      reference: aiAct("Article 26(2)"),
    },
    {
      id: "aigp-d4-external-communication",
      domain: "d4",
      objective: "IV.C Govern the deployment and use of the AI system",
      difficulty: "intermediate",
      question:
        "A retailer is about to launch an AI chatbot that answers customer questions on its website. As part of governing the deployment, what should the external communication plan include?",
      options: [
        { id: "A", text: "Nothing — customer-facing communication is the vendor's responsibility", rationale: "The retailer deploys the chatbot to its own customers and is responsible for how it communicates about its use." },
        { id: "B", text: "Only a marketing announcement of the new feature", rationale: "Promotional messages do not tell customers what they need to know about interacting with an AI system." },
        { id: "C", text: "Clear disclosure that customers are interacting with an AI system, its purpose and limitations, and how to reach a human or raise a concern", rationale: "Correct. Transparent external communication covers the fact of AI use, what it is for, its limits and the channels for help, complaints or redress." },
        { id: "D", text: "The full technical documentation and model weights", rationale: "Publishing technical internals is neither necessary nor useful for customers and may expose confidential information." },
      ],
      answer: "C",
      explanation:
        "Establishing external communication plans is part of governing deployment. People interacting with an AI system should know that they are doing so, understand its purpose and limits, and have a route to a human or to raise a concern.",
      reference: BOK,
    },
  ],
};
