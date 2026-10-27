import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CIPM sample questions — ORIGINAL questions written by CertRamp for the
 * IAPP CIPM body of knowledge and exam blueprint 4.2.0 (effective 1 September 2025).
 * Not taken from the paid practice exams, not recalled exam content, and not
 * presented as real exam questions.
 */
const BOK = {
  label: "IAPP — CIPM body of knowledge and exam blueprint 4.2.0 (PDF)",
  url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt39d7942c0a9a9f0f/CIPM_BoK_EBP.pdf",
};

export const iappCipmQuestions: PracticeQuestionSet = {
  slug: "iapp-cipm",
  intro:
    "15 original CIPM practice questions across the six domains of the IAPP body of knowledge and exam blueprint 4.2.0 (effective 1 September 2025), weighted roughly like the blueprint. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CIPM Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original IAPP CIPM practice questions on privacy programme governance, data assessment, metrics, audits, DSARs and incident response — fully explained.",
  },
  questions: [
    /* ── Domain I: Privacy Program: Developing a Framework ──────────────────── */
    {
      id: "cipm-d1-governance-model",
      domain: "d1",
      objective: "I.A Define program scope and develop a privacy strategy",
      difficulty: "intermediate",
      question:
        "A multinational group wants consistent privacy standards set at headquarters, but its subsidiaries operate under different national laws and need to handle local requirements themselves. Which governance model fits best?",
      options: [
        { id: "A", text: "Centralised", rationale: "A centralised model places decision-making in one team, which struggles to accommodate significant local legal differences." },
        { id: "B", text: "Local (decentralised)", rationale: "A purely local model lets each subsidiary set its own approach, which undermines the consistent group standards the organisation wants." },
        { id: "C", text: "Outsourced", rationale: "Outsourcing describes who performs work, not how privacy decision-making is distributed across the group." },
        { id: "D", text: "Hybrid", rationale: "Correct. A hybrid model combines central policy and oversight with local responsibility for jurisdiction-specific requirements." },
      ],
      answer: "D",
      explanation:
        "Choosing a governance model is part of defining programme scope and strategy. Hybrid models are common in multinational organisations because they balance consistency with local legal and cultural differences.",
      reference: BOK,
    },
    {
      id: "cipm-d1-awareness",
      domain: "d1",
      objective: "I.B Communicate organizational vision and mission statement",
      difficulty: "foundation",
      question:
        "A new privacy office finds that different departments use terms such as \"personal data\", \"customer data\" and \"confidential data\" interchangeably and inconsistently. What should the privacy manager do?",
      options: [
        { id: "A", text: "Establish a common understanding of privacy terms across the organisation, for example through a shared glossary communicated with the privacy programme", rationale: "Correct. Shared terminology is part of communicating the programme's vision and making policies understood consistently." },
        { id: "B", text: "Let each department keep its own definitions to avoid disruption", rationale: "Inconsistent terminology leads to inconsistent application of policies and controls." },
        { id: "C", text: "Replace all policies with the text of the applicable laws", rationale: "Legal text does not translate into operational guidance and does not resolve internal inconsistency." },
        { id: "D", text: "Restrict privacy terminology to the legal department", rationale: "Privacy responsibilities extend across the organisation; limiting understanding to one department defeats the purpose of the programme." },
      ],
      answer: "A",
      explanation:
        "Communicating the privacy programme includes creating awareness and a common understanding of privacy terms. Without it, employees interpret policies differently and controls are applied inconsistently.",
      reference: BOK,
    },
    {
      id: "cipm-d1-in-scope-laws",
      domain: "d1",
      objective: "I.C Indicate in-scope laws, regulations and standards applicable to the program",
      difficulty: "intermediate",
      question:
        "An online retailer based in one country plans to start selling directly to consumers in several new countries. What is the privacy manager's first step regarding legal requirements?",
      options: [
        { id: "A", text: "Apply only the laws of the country where the retailer is headquartered", rationale: "Many privacy laws have extraterritorial reach, so the headquarters' law alone is unlikely to be sufficient." },
        { id: "B", text: "Identify which territorial, sectoral and industry laws, regulations and codes apply in the new markets and how they affect the programme", rationale: "Correct. Determining in-scope requirements, including their territorial scope, is the basis for adapting the programme." },
        { id: "C", text: "Wait until a regulator in one of the new countries makes contact", rationale: "A reactive approach exposes the organisation to non-compliance from the start." },
        { id: "D", text: "Adopt the strictest law in the world as a single global policy without further analysis", rationale: "A high baseline can be useful, but it does not replace identifying the specific requirements, such as local notification rules, that apply in each market." },
      ],
      answer: "B",
      explanation:
        "A privacy programme must know which laws, regulations and standards are in scope. Expanding into new markets requires analysing territorial scope and the impact of non-compliance before operations start.",
      reference: BOK,
    },

    /* ── Domain II: Privacy Program: Establishing Program Governance ───────── */
    {
      id: "cipm-d2-retention-policy",
      domain: "d2",
      objective: "II.A Create policies and processes to be followed across all stages of the privacy program life cycle",
      difficulty: "intermediate",
      question:
        "An audit finds that a company keeps all customer records indefinitely \"in case they are needed\". Which action best addresses the finding at programme level?",
      options: [
        { id: "A", text: "Delete all customer records older than one year immediately", rationale: "An arbitrary deletion without considering legal retention requirements may breach other obligations and destroy needed records." },
        { id: "B", text: "Encrypt the old records and keep them", rationale: "Encryption reduces some risks but does not address keeping data longer than necessary." },
        { id: "C", text: "Create data retention and disposal policies and procedures based on legal, business and privacy requirements", rationale: "Correct. A retention schedule with disposal procedures sets defensible periods and ensures data is deleted or anonymised when they end." },
        { id: "D", text: "Ask each employee to decide what to keep", rationale: "Individual decisions without a policy lead to inconsistent and unjustifiable retention." },
      ],
      answer: "C",
      explanation:
        "Retention and disposal policies are a core part of programme governance. They balance legal retention obligations with the principle that personal data should not be kept longer than necessary.",
      reference: BOK,
    },
    {
      id: "cipm-d2-metrics-audience",
      domain: "d2",
      objective: "II.C Define privacy metrics for oversight and governance",
      difficulty: "intermediate",
      question:
        "The privacy manager is asked to report on the programme to the board of directors. Which approach to metrics is most appropriate?",
      options: [
        { id: "A", text: "Provide the full operational log of every data subject request", rationale: "Detailed operational data is useful to the privacy team but is not meaningful oversight information for a board." },
        { id: "B", text: "Use the same detailed metrics for every audience", rationale: "Metrics should be tailored to the audience and its purpose; one set rarely serves all stakeholders." },
        { id: "C", text: "Report metrics only after a data breach has occurred", rationale: "Oversight requires regular reporting, not reporting triggered only by incidents." },
        { id: "D", text: "Select a small set of metrics tailored to the board, such as risk trends and compliance status, with a clear explanation of their purpose and value", rationale: "Correct. Metrics should be designed per audience, with clear processes describing their purpose, value and reporting." },
      ],
      answer: "D",
      explanation:
        "The body of knowledge expects metrics to be created per audience. Boards need concise, risk-focused indicators that support oversight, while operational teams need more detailed measures.",
      reference: BOK,
    },
    {
      id: "cipm-d2-training",
      domain: "d2",
      objective: "II.D Establish training and awareness activities",
      difficulty: "foundation",
      question:
        "A company's annual privacy training is identical for all staff. Call-centre agents handling customer data still make frequent errors in verifying callers' identities. What is the best improvement?",
      options: [
        { id: "A", text: "Develop targeted, role-based training for call-centre agents on identity verification and handling customer data", rationale: "Correct. Targeted training addresses the specific risks of the role and supports compliance in daily work." },
        { id: "B", text: "Make the generic annual training longer", rationale: "More generic content does not address the specific task where errors occur." },
        { id: "C", text: "Remove call-centre agents' access to all customer data", rationale: "Agents need customer data to do their jobs; the issue is how they handle it." },
        { id: "D", text: "Send a single company-wide email reminding staff that privacy matters", rationale: "General reminders raise awareness but do not teach the procedure that is failing." },
      ],
      answer: "A",
      explanation:
        "Training and awareness should be targeted at employees, managers and contractors according to their roles. Role-based training addresses the risks people actually face in their work.",
      reference: BOK,
    },

    /* ── Domain III: Privacy Program Operational Life Cycle: Assessing Data ─── */
    {
      id: "cipm-d3-data-inventory",
      domain: "d3",
      objective: "III.A Document data governance systems",
      difficulty: "foundation",
      question:
        "A newly appointed privacy manager needs to understand what personal data the organisation holds, where it is stored and how it moves between systems. What should be done first?",
      options: [
        { id: "A", text: "Conduct a penetration test of all systems", rationale: "Penetration testing assesses security weaknesses, not what personal data exists and where it flows." },
        { id: "B", text: "Create a data inventory and map data flows and the data life cycle across systems", rationale: "Correct. Data inventories and data flow maps are the foundation for gap analysis, risk assessment and many legal obligations." },
        { id: "C", text: "Draft a new privacy notice", rationale: "An accurate privacy notice depends on first knowing what data is collected and how it is used." },
        { id: "D", text: "Purchase cyber insurance", rationale: "Insurance transfers some financial risk but provides no understanding of the data the organisation holds." },
      ],
      answer: "B",
      explanation:
        "Documenting data governance starts with mapping data inventories, flows, life cycle and system integrations. Without this, the organisation cannot measure compliance or identify gaps.",
      reference: BOK,
    },
    {
      id: "cipm-d3-vendor-assessment",
      domain: "d3",
      objective: "III.B Evaluate processors and third-party vendors",
      difficulty: "intermediate",
      question:
        "The marketing department wants to engage a new email service provider that will process customer contact details in another country. What should the privacy team require before the contract is signed?",
      options: [
        { id: "A", text: "Nothing, as long as the vendor is well known in the industry", rationale: "Reputation does not replace an assessment of the vendor's controls, contract terms and transfer requirements." },
        { id: "B", text: "A review only after the first data breach at the vendor", rationale: "Vendor risk must be assessed before personal data is shared, not after an incident." },
        { id: "C", text: "An assessment of the outsourcing risks, including contractual requirements and the rules on international data transfers", rationale: "Correct. Due diligence covers the vendor's privacy and security practices, the contract terms and the transfer mechanism." },
        { id: "D", text: "A promise from marketing that the data will be used responsibly", rationale: "An internal assurance does not assess the vendor or establish contractual safeguards." },
      ],
      answer: "C",
      explanation:
        "Evaluating processors and third-party vendors means identifying and assessing the risks of outsourcing personal data processing. Contractual requirements and international transfer rules are central to that assessment.",
      reference: BOK,
    },
    {
      id: "cipm-d3-ma-due-diligence",
      domain: "d3",
      objective: "III.E Evaluate risks associated with shared data in mergers, acquisitions and divestitures",
      difficulty: "advanced",
      question:
        "Your company is negotiating to acquire a smaller competitor that holds a large customer database. What should the privacy manager focus on during due diligence?",
      options: [
        { id: "A", text: "Integrating the target's customer database into existing marketing systems as soon as possible", rationale: "Integrating data before understanding the obligations attached to it risks unlawful use." },
        { id: "B", text: "Only the purchase price of the customer database", rationale: "The commercial value is relevant to the deal, but privacy due diligence concerns obligations and risk." },
        { id: "C", text: "Replacing the target's privacy notice with the acquirer's notice on day one", rationale: "Changing the notice does not retroactively alter the terms under which the data was collected." },
        { id: "D", text: "The target's privacy notices, consents and contractual obligations, any past incidents, and how they constrain future use of the data", rationale: "Correct. Due diligence evaluates the obligations, promises and risks attached to the data so that they can be reflected in the deal and integration plan." },
      ],
      answer: "D",
      explanation:
        "In mergers and acquisitions, personal data comes with the promises and obligations under which it was collected. Due diligence identifies these and aligns risks and controls before integration.",
      reference: BOK,
    },

    /* ── Domain IV: Privacy Program Operational Life Cycle: Protecting Personal Data ── */
    {
      id: "cipm-d4-privacy-by-design",
      domain: "d4",
      objective: "IV.B Integrate the main principles of Privacy by Design (PbD)",
      difficulty: "intermediate",
      question:
        "A product team plans to launch a new mobile app. It intends to involve the privacy team a week before launch for a final check. How should the privacy manager respond?",
      options: [
        { id: "A", text: "Accept, as long as the final check is thorough", rationale: "A late review can only identify problems that are expensive to fix; it does not build privacy in." },
        { id: "B", text: "Integrate privacy into the system development life cycle from the requirements stage, including privacy-protective defaults", rationale: "Correct. Privacy by Design embeds privacy proactively throughout development, with privacy as the default setting." },
        { id: "C", text: "Ask the team to delay the launch indefinitely", rationale: "An indefinite delay is not a constructive governance response and does not establish a better process." },
        { id: "D", text: "Leave privacy to the vendor that develops the app", rationale: "The organisation remains responsible for the privacy of its product even if development is outsourced." },
      ],
      answer: "B",
      explanation:
        "Privacy by Design is proactive rather than reactive. Integrating privacy into the SDLC and business processes from the start makes protections cheaper, more effective and part of the default design.",
      reference: BOK,
    },
    {
      id: "cipm-d4-secondary-use",
      domain: "d4",
      objective: "IV.C Apply organizational guidelines for data use and ensure technical controls are enforced",
      difficulty: "advanced",
      question:
        "The analytics team wants to use customer purchase data, collected for order fulfilment, to build a new product recommendation model. What should the privacy manager do?",
      options: [
        { id: "A", text: "Approve the use automatically because the data is already in the organisation's systems", rationale: "Holding the data does not mean every new use is permitted." },
        { id: "B", text: "Refuse all analytics use of customer data", rationale: "A blanket refusal ignores that secondary use may be permitted with appropriate assessment and safeguards." },
        { id: "C", text: "Verify that the guidelines for secondary uses of data are followed and work with privacy technologists on controls such as data minimisation or pseudonymisation", rationale: "Correct. The secondary use must be assessed against organisational guidelines, with technical controls applied to reduce risk." },
        { id: "D", text: "Ask the analytics team to delete the model after six months", rationale: "A deletion date does not address whether the use was permitted or adequately protected in the first place." },
      ],
      answer: "C",
      explanation:
        "Protecting personal data includes enforcing organisational guidelines on data use. Secondary uses need to be checked against those guidelines and supported by technical controls such as minimisation and obfuscation.",
      reference: BOK,
    },

    /* ── Domain V: Privacy Program Operational Life Cycle: Sustaining Program Performance ── */
    {
      id: "cipm-d5-metrics-objective",
      domain: "d5",
      objective: "V.A Use metrics to measure the performance of the privacy program",
      difficulty: "intermediate",
      question:
        "The privacy manager wants to show whether the programme's handling of data subject requests is improving over time. Which metric best serves this objective?",
      options: [
        { id: "A", text: "The percentage of requests answered within the required time frame, tracked month by month", rationale: "Correct. A trended timeliness measure links directly to a programme goal and a compliance requirement." },
        { id: "B", text: "The total number of employees in the organisation", rationale: "Headcount says nothing about the performance of the request-handling process." },
        { id: "C", text: "The number of pages in the privacy policy", rationale: "Policy length is not a measure of how well requests are handled." },
        { id: "D", text: "A one-off count of requests received last year", rationale: "A single count without a timeliness dimension or trend cannot show whether performance is improving." },
      ],
      answer: "A",
      explanation:
        "Metrics should match the objective, such as trending, and link to programme goals and compliance measures. Rights request response rates over time are a typical example given in the body of knowledge.",
      reference: BOK,
    },
    {
      id: "cipm-d5-assessment-types",
      domain: "d5",
      objective: "V.C Manage continuous assessment of the privacy program",
      difficulty: "advanced",
      question:
        "A team is planning a new processing activity and is unsure whether a full data protection impact assessment is needed. Which assessment is designed as an initial screening to determine whether further assessment is required?",
      options: [
        { id: "A", text: "Transfer impact assessment (TIA)", rationale: "A TIA evaluates the risks of transferring personal data to another country; it is not a general screening tool." },
        { id: "B", text: "Legitimate interests assessment (LIA)", rationale: "An LIA tests whether legitimate interests can be relied on as a lawful basis; it does not decide whether a DPIA is needed." },
        { id: "C", text: "Penetration test", rationale: "A penetration test is a security test, not a privacy screening assessment." },
        { id: "D", text: "Privacy threshold analysis (PTA)", rationale: "Correct. A PTA is a short initial assessment that determines whether a fuller PIA or DPIA is needed." },
      ],
      answer: "D",
      explanation:
        "Each assessment type has its own purpose and life cycle. A privacy threshold analysis screens activities so that resources for full PIAs and DPIAs are focused where risk is higher.",
      reference: BOK,
    },

    /* ── Domain VI: Privacy Program Operational Life Cycle: Responding to Requests and Incidents ── */
    {
      id: "cipm-d6-incident-containment",
      domain: "d6",
      objective: "VI.B Follow organizational incident handling and response procedures",
      difficulty: "intermediate",
      question:
        "An employee reports that a misconfigured cloud storage bucket containing customer records is publicly accessible. According to a typical incident response procedure, what should happen first?",
      options: [
        { id: "A", text: "Notify all customers immediately before anything else is known", rationale: "Notification decisions depend on the assessment; notifying before understanding the incident can be inaccurate and premature." },
        { id: "B", text: "Assess the incident and contain it, for example by removing public access, while preserving evidence", rationale: "Correct. Assessment and containment limit further exposure and provide the facts needed for notification decisions." },
        { id: "C", text: "Delete the bucket and all its contents", rationale: "Deleting the data destroys evidence needed to determine what was exposed and may breach retention obligations." },
        { id: "D", text: "Wait for the next scheduled security audit", rationale: "Delaying response allows continued exposure and may cause notification deadlines to be missed." },
      ],
      answer: "B",
      explanation:
        "Incident handling follows steps such as assessment, containment and remediation, with communication to stakeholders according to legal and business requirements. Containment while preserving evidence is the priority once an exposure is confirmed.",
      reference: BOK,
    },
    {
      id: "cipm-d6-post-incident",
      domain: "d6",
      objective: "VI.C Evaluate and modify current incident response plan",
      difficulty: "foundation",
      question:
        "After a data breach has been contained and the required notifications made, what should the privacy manager do to improve the organisation's readiness?",
      options: [
        { id: "A", text: "Close the incident file and move on", rationale: "Closing without review misses the opportunity to learn and to prevent recurrence." },
        { id: "B", text: "Discipline the employee who reported the breach", rationale: "Punishing reporters discourages reporting and weakens future detection." },
        { id: "C", text: "Carry out a post-incident review and implement changes to the response plan and controls", rationale: "Correct. Post-incident reviews identify what worked and what did not, and lead to changes that reduce the likelihood or impact of future breaches." },
        { id: "D", text: "Replace the incident response plan with the vendor's generic template", rationale: "A generic template ignores the specific lessons learned from the incident." },
      ],
      answer: "C",
      explanation:
        "Evaluating and modifying the incident response plan is a separate competency in the body of knowledge. Post-incident reviews turn experience into improvements to the plan and to controls.",
      reference: BOK,
    },
  ],
};
