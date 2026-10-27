import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CFE sample questions — ORIGINAL questions written by CertRamp for the
 * three-section CFE exam launched by the ACFE on 2 June 2026. Not taken from the
 * paid practice exams, not recalled exam content, and not presented as real exam questions.
 */
const FRAUD_TREE = {
  label: "ACFE — Fraud Tree (Occupational Fraud and Abuse Classification System)",
  url: "https://www.acfe.com/fraud-resources/fraud-risk-tools---coso/-/media/f7c3fc57fa5c46009eda18414bed130f.ashx",
};
const CODE_STANDARDS = {
  label: "ACFE — CFE Code of Professional Standards",
  url: "https://www.acfe.com/~/-/media/E805D87A1E144558BF27A7F4B0B8317B.ashx",
};
const REPORT_NATIONS = {
  label: "ACFE — Occupational Fraud 2026: A Report to the Nations",
  url: "https://www.acfe.com/report-to-the-nations",
};
const FEM_CHAPTER = {
  label: "ACFE — Fraud Examiners Manual sample chapter: Planning and Conducting a Fraud Examination",
  url: "https://cms.acfe.com/-/media/files/acfe/word-documents/fem_samplechapter_planning_and_conducting_2026.pdf",
};

export const cfeQuestions: PracticeQuestionSet = {
  slug: "cfe",
  intro:
    "15 original CFE practice questions across the three sections of the ACFE exam launched on 2 June 2026, weighted roughly by each section's question count. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CFE Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original CFE practice questions on fraud schemes, investigations, legal issues and fraud prevention — each with a full explanation.",
  },
  questions: [
    /* ── Section 1: Fraud Schemes and Financial Crimes ────────────────────── */
    {
      id: "cfe-d1-skimming-vs-larceny",
      domain: "d1",
      objective: "Types of fraud schemes and financial crimes committed against organizations and individuals",
      difficulty: "foundation",
      question:
        "A cashier rings up each sale correctly in the point-of-sale system. At the end of her shift, before the cash is counted, she removes some of the recorded cash from the drawer. How is this scheme classified in the ACFE Fraud Tree?",
      options: [
        { id: "A", text: "Skimming", rationale: "Skimming takes cash before the sale is recorded in the books. Here the sale was recorded first." },
        { id: "B", text: "Register disbursement", rationale: "Register disbursements use false refunds or false voids to remove cash. No refund or void was processed." },
        { id: "C", text: "Cash larceny", rationale: "Correct. Cash larceny is the theft of cash after it has been recorded, which leaves a shortage between the records and the cash on hand." },
        { id: "D", text: "Billing scheme", rationale: "Billing schemes cause the organisation to pay false or inflated invoices; they are fraudulent disbursements, not thefts from the till." },
      ],
      answer: "C",
      explanation:
        "The key question for theft of cash receipts is timing. Skimming happens before the transaction is recorded (an off-book fraud); cash larceny happens after it is recorded, so it creates an imbalance that reconciliations can reveal.",
      reference: FRAUD_TREE,
    },
    {
      id: "cfe-d1-ghost-employee",
      domain: "d1",
      objective: "Types of fraud schemes and financial crimes committed against organizations and individuals",
      difficulty: "foundation",
      question:
        "A payroll clerk adds a fictitious person to the payroll system and has the salary paid into a bank account she controls. Which category of fraudulent disbursement is this?",
      options: [
        { id: "A", text: "Payroll scheme — ghost employee", rationale: "Correct. A ghost employee is someone on the payroll who does not work for the organisation, with the pay going to the fraudster." },
        { id: "B", text: "Expense reimbursement scheme — fictitious expenses", rationale: "Expense reimbursement schemes involve claims for business expenses, not salary payments." },
        { id: "C", text: "Billing scheme — shell company", rationale: "A shell company scheme uses a fictitious vendor and false invoices, not a fictitious employee." },
        { id: "D", text: "Payroll scheme — commission scheme", rationale: "Commission schemes inflate the commission of a real salesperson; no fictitious person is involved." },
      ],
      answer: "A",
      explanation:
        "The Fraud Tree divides payroll schemes into ghost employees, falsified wages and commission schemes. Useful detection steps include comparing payroll to HR records and looking for duplicate bank accounts, addresses or tax identification numbers.",
      reference: FRAUD_TREE,
    },
    {
      id: "cfe-d1-lapping",
      domain: "d1",
      objective: "Types of fraud schemes and financial crimes committed against organizations and individuals",
      difficulty: "intermediate",
      question:
        "An accounts receivable clerk steals a payment from Customer A. To hide the theft, he applies Customer B's later payment to Customer A's account, then Customer C's payment to Customer B's account, and so on. What is this concealment technique called?",
      options: [
        { id: "A", text: "Kiting", rationale: "Kiting exploits the float between bank accounts to create artificial balances; it does not involve customer payments." },
        { id: "B", text: "Bid rigging", rationale: "Bid rigging is a corruption scheme in the procurement process." },
        { id: "C", text: "Write-off scheme", rationale: "A write-off scheme hides stolen receivables by writing the account off as bad debt or discounting it, not by shifting other customers' payments." },
        { id: "D", text: "Lapping", rationale: "Correct. Lapping covers a skimmed receivable by crediting it with a later customer's payment, creating a continuing chain that must be maintained." },
      ],
      answer: "D",
      explanation:
        "Lapping is a way of concealing skimmed receivables. Because each theft needs a newer payment to cover it, the scheme tends to grow and often comes to light through customer complaints, ageing analysis or when the perpetrator is absent.",
      reference: FRAUD_TREE,
    },
    {
      id: "cfe-d1-illegal-gratuity",
      domain: "d1",
      objective: "Types of fraud schemes and financial crimes committed against organizations and individuals",
      difficulty: "intermediate",
      question:
        "After a procurement manager awards a contract to a supplier through a fair and properly documented process, the supplier gives her an expensive holiday as a thank-you. Nothing was promised beforehand. In the Fraud Tree, this is best classified as:",
      options: [
        { id: "A", text: "Bribery — invoice kickback", rationale: "Bribery involves offering something of value to influence a decision. Here nothing was offered before the decision." },
        { id: "B", text: "An illegal gratuity", rationale: "Correct. An illegal gratuity is something of value given to reward a decision after it has been made, with no prior agreement to influence it." },
        { id: "C", text: "Economic extortion", rationale: "Economic extortion involves a demand by the employee, backed by a threat. The supplier offered the gift voluntarily." },
        { id: "D", text: "A conflict of interest — sales scheme", rationale: "A conflict of interest requires an undisclosed personal or economic interest in the transaction, which the scenario does not describe." },
      ],
      answer: "B",
      explanation:
        "The Fraud Tree lists four forms of corruption: conflicts of interest, bribery, illegal gratuities and economic extortion. The difference between bribery and an illegal gratuity is the intent to influence: gratuities reward a decision afterwards, and they can lead to bribery in future dealings.",
      reference: FRAUD_TREE,
    },
    {
      id: "cfe-d1-shell-company",
      domain: "d1",
      objective: "Measures fraud examiners can take to prevent and detect fraud schemes and financial crimes",
      difficulty: "intermediate",
      question:
        "A data analysis of the vendor master file is designed to detect shell company schemes. Which result is the strongest indicator worth following up?",
      options: [
        { id: "A", text: "A vendor that has supplied the company for ten years at stable prices", rationale: "A long, stable history is not in itself a red flag for a shell company." },
        { id: "B", text: "A vendor with many small invoices paid by bank transfer", rationale: "Bank transfer and frequent small invoices are common for genuine suppliers; this alone is weak evidence." },
        { id: "C", text: "A vendor whose address and bank account match those of an employee", rationale: "Correct. A match between vendor and employee data suggests the employee may control the vendor, which is a classic shell company indicator." },
        { id: "D", text: "A vendor that gives early-payment discounts", rationale: "Early-payment discounts are a normal commercial practice." },
      ],
      answer: "C",
      explanation:
        "Shell company schemes are billing schemes in which an employee sets up a fictitious vendor and submits false invoices. Matching vendor addresses, phone numbers, tax IDs and bank accounts against employee records is one of the most direct ways to find them.",
      reference: FRAUD_TREE,
    },
    {
      id: "cfe-d1-timing-differences",
      domain: "d1",
      objective: "Types of fraud schemes and financial crimes committed against organizations and individuals",
      difficulty: "advanced",
      question:
        "Near year-end, management records revenue for goods that will only be shipped and accepted by the customer in the next financial year, so that the current year's earnings target is met. In the Fraud Tree, this is an example of:",
      options: [
        { id: "A", text: "Net worth/net income overstatement — timing differences", rationale: "Correct. Recognising revenue in the wrong (earlier) period is a timing difference that overstates current-period income." },
        { id: "B", text: "Net worth/net income overstatement — concealed liabilities and expenses", rationale: "Concealed liabilities and expenses involve omitting or capitalising costs, not bringing revenue forward." },
        { id: "C", text: "Net worth/net income understatement — understated revenues", rationale: "The scheme increases current-year revenue, so it is an overstatement, not an understatement." },
        { id: "D", text: "Asset misappropriation — false sales and shipping", rationale: "False sales and shipping is used to conceal the theft of inventory; here no asset is stolen, the financial statements are misstated." },
      ],
      answer: "A",
      explanation:
        "Financial statement fraud in the Fraud Tree is split into overstatements and understatements, each with timing differences, revenue, liabilities and expenses, asset valuations and disclosures. Premature revenue recognition is the typical timing-difference scheme used to hit earnings targets.",
      reference: FRAUD_TREE,
    },

    /* ── Section 2: Fraud Investigations and Legal Issues ─────────────────── */
    {
      id: "cfe-d2-predication",
      domain: "d2",
      objective: "How to conduct a fraud investigation",
      difficulty: "foundation",
      question: "In fraud examination, what does \"predication\" mean?",
      options: [
        { id: "A", text: "The final conclusion that a specific person committed fraud", rationale: "Fraud examiners do not conclude on legal guilt, and predication is the starting point, not the conclusion." },
        { id: "B", text: "The totality of circumstances that would lead a reasonable, professionally trained and prudent person to believe a fraud has occurred, is occurring or will occur", rationale: "Correct. This is the ACFE definition. Predication is the basis for starting a fraud examination and each step within it." },
        { id: "C", text: "The prediction of future fraud losses in a fraud risk assessment", rationale: "Predication has nothing to do with forecasting losses." },
        { id: "D", text: "A court order authorising the examiner to collect evidence", rationale: "Predication is a factual basis for investigating, not a legal authorisation." },
      ],
      answer: "B",
      explanation:
        "Fraud examinations should not start without adequate predication, and examiners should keep reassessing whether predication still supports each new step. An anonymous tip, an audit finding or unusual data can all provide predication.",
      reference: FEM_CHAPTER,
    },
    {
      id: "cfe-d2-interview-order",
      domain: "d2",
      objective: "Conducting interviews",
      difficulty: "intermediate",
      question:
        "A fraud examiner plans the interviews in a suspected kickback case. Which order follows the ACFE's general-to-specific approach?",
      options: [
        { id: "A", text: "Primary suspect first, then co-workers, then neutral third parties", rationale: "Interviewing the suspect first would alert them before the examiner has the facts needed to evaluate their answers." },
        { id: "B", text: "Suspected accomplices first, then the primary suspect, then neutral witnesses", rationale: "Neutral witnesses should come first; they provide background information with the least risk." },
        { id: "C", text: "All witnesses at the same time in a group meeting", rationale: "Group interviews allow witnesses to influence each other and are not part of the recommended approach." },
        { id: "D", text: "Neutral third-party witnesses, then parties suspected of complicity, then the primary suspect last", rationale: "Correct. Interviews move from the least to the most involved, so the examiner has the full picture before interviewing the suspect." },
      ],
      answer: "D",
      explanation:
        "Fraud examinations move from the general to the specific. Neutral third parties are interviewed first, starting with the least knowledgeable; suspected accomplices follow, from least to most culpable; and the primary suspect is interviewed last.",
      reference: FEM_CHAPTER,
    },
    {
      id: "cfe-d2-fraud-theory",
      domain: "d2",
      objective: "How to conduct a fraud investigation",
      difficulty: "intermediate",
      question:
        "Under the fraud theory approach, what should an examiner do when new evidence does not support the current hypothesis?",
      options: [
        { id: "A", text: "Refine and amend the hypothesis, then test it again", rationale: "Correct. The fraud theory approach is iterative: analyse data, create a hypothesis, test it, then refine and amend it as the facts require." },
        { id: "B", text: "Disregard the new evidence because it conflicts with the theory", rationale: "Ignoring contrary evidence would breach the examiner's duty to be objective and to look for evidence that fraud did not occur." },
        { id: "C", text: "Close the case immediately as unfounded", rationale: "One unsupported hypothesis does not mean there was no fraud; other explanations may still need to be tested." },
        { id: "D", text: "Interview the suspect to obtain an admission", rationale: "An admission-seeking interview comes at the end, when the evidence supports a reasonable belief of guilt, not when the theory has just failed." },
      ],
      answer: "A",
      explanation:
        "The fraud theory approach has four steps: analysing available data, creating a hypothesis, testing it and refining or amending it. The process continues until the theory is supported, no fraud is found or the fraud cannot be proven.",
      reference: FEM_CHAPTER,
    },
    {
      id: "cfe-d2-report-opinion",
      domain: "d2",
      objective: "Report writing",
      difficulty: "foundation",
      question:
        "A fraud examiner has gathered strong documentary evidence and a signed confession. How should the final fraud examination report address the subject's responsibility?",
      options: [
        { id: "A", text: "State that the subject is guilty of fraud, because the evidence is conclusive", rationale: "Legal guilt is for a court or other trier of fact to decide, not the examiner." },
        { id: "B", text: "Recommend the sentence the subject should receive", rationale: "Sentencing is outside the examiner's role and would undermine the report's objectivity." },
        { id: "C", text: "Present the facts and evidence objectively, without expressing an opinion on the subject's legal guilt or innocence", rationale: "Correct. The CFE Code of Professional Standards states that no opinion shall be expressed on the legal guilt or innocence of any person or party." },
        { id: "D", text: "Leave out the confession, because confessions are not admissible as evidence", rationale: "A voluntary confession can be important evidence and should be reported accurately." },
      ],
      answer: "C",
      explanation:
        "Reports should be clear, accurate and unbiased and should let the facts speak for themselves. Stating that someone is guilty could expose the examiner and the organisation to legal risk and is prohibited by the CFE Code of Professional Standards.",
      reference: {
        label: "ACFE — CFE Code of Professional Standards",
        url: "https://www.acfe.com/~/-/media/E805D87A1E144558BF27A7F4B0B8317B.ashx",
      },
    },
    {
      id: "cfe-d2-chain-of-custody",
      domain: "d2",
      objective: "Rules and procedures for collecting evidence",
      difficulty: "intermediate",
      question:
        "An examiner seizes an employee's company laptop as evidence. Why is it important to keep a chain of custody record for the laptop?",
      options: [
        { id: "A", text: "It replaces the need for a forensic image of the hard drive", rationale: "A chain of custody record documents handling; it does not replace forensically sound imaging of the data." },
        { id: "B", text: "It shows who had possession of the evidence and when, so it can be shown that the evidence was not altered", rationale: "Correct. A documented chain of custody supports the integrity and authenticity of evidence, which affects its admissibility and weight." },
        { id: "C", text: "It gives the examiner the legal right to search the employee's personal devices", rationale: "Custody documentation creates no search rights. Searches must respect the employee's rights and applicable law." },
        { id: "D", text: "It is only needed if the employee confesses", rationale: "Evidence must be protected from the moment it is collected, because the outcome of the case is not known in advance." },
      ],
      answer: "B",
      explanation:
        "Fraud examiners should assume litigation will follow. Recording every transfer of an item of evidence — who, when, where and why — lets the examiner show in court that the evidence presented is the same item that was collected and has not been tampered with.",
      reference: CODE_STANDARDS,
    },
    {
      id: "cfe-d2-two-perspectives",
      domain: "d2",
      objective: "How to conduct a fraud investigation",
      difficulty: "advanced",
      question:
        "An examiner investigating suspected expense fraud gathers only the documents that support the allegation and does not review evidence that might explain the transactions innocently. Which principle of the ACFE fraud examination methodology is she failing to apply?",
      options: [
        { id: "A", text: "Assume litigation will follow", rationale: "This principle concerns preparing every step as if the case will go to court; it is not the main failure described." },
        { id: "B", text: "Act on predication", rationale: "The scenario does not question whether there was a sufficient basis to start the examination." },
        { id: "C", text: "Begin with the general before moving to the specific", rationale: "This concerns the order of the work, not one-sided collection of evidence." },
        { id: "D", text: "Approach investigations from two perspectives", rationale: "Correct. Examiners must look both for evidence that fraud occurred and for evidence that it did not, to stay objective." },
      ],
      answer: "D",
      explanation:
        "The ACFE methodology lists five principles: assume litigation will follow, act on predication, approach investigations from two perspectives, begin with the general before moving to the specific, and use the fraud theory approach. Looking at both sides protects objectivity and the credibility of the conclusions.",
      reference: FEM_CHAPTER,
    },

    /* ── Section 3: Fraud Prevention and Deterrence ───────────────────────── */
    {
      id: "cfe-d3-fraud-triangle",
      domain: "d3",
      objective: "Why people commit fraud",
      difficulty: "foundation",
      question:
        "An organisation introduces segregation of duties so that no single employee can both approve and pay invoices. Which element of the fraud triangle does this control address most directly?",
      options: [
        { id: "A", text: "Perceived opportunity", rationale: "Correct. Internal controls such as segregation of duties reduce the perceived opportunity to commit and conceal fraud." },
        { id: "B", text: "Pressure (non-shareable financial need)", rationale: "Pressure comes from the individual's circumstances; an invoice control does not change it." },
        { id: "C", text: "Rationalisation", rationale: "Rationalisation is how the fraudster justifies the act; it is addressed more by culture, ethics and tone at the top." },
        { id: "D", text: "Concealment", rationale: "Concealment is not one of the three elements of the fraud triangle." },
      ],
      answer: "A",
      explanation:
        "Donald Cressey's fraud triangle holds that fraud is likely when pressure, perceived opportunity and rationalisation come together. Of the three, opportunity is the element an organisation can influence most directly through controls.",
      reference: {
        label: "ACFE — Fraud 101: What is fraud?",
        url: "https://www.acfe.com/fraud-resources/fraud-101-what-is-fraud",
      },
    },
    {
      id: "cfe-d3-perception-of-detection",
      domain: "d3",
      objective: "How to manage fraud risk and build an effective fraud prevention program",
      difficulty: "intermediate",
      question:
        "A company wants to deter employee fraud. Which measure works mainly by increasing employees' perception that fraud will be detected?",
      options: [
        { id: "A", text: "Raising salaries across the board", rationale: "Higher pay may reduce some financial pressure, but it does not change the perceived chance of being caught." },
        { id: "B", text: "Publicising that surprise audits and continuous data monitoring are carried out", rationale: "Correct. Making employees aware that proactive detection is in place raises the perceived likelihood of detection, which is a strong deterrent." },
        { id: "C", text: "Keeping all fraud investigations and their results strictly secret", rationale: "Total secrecy can lower the perceived risk of detection; organisations often communicate in general terms that fraud is found and acted on." },
        { id: "D", text: "Increasing the maximum prison sentence for fraud", rationale: "Severity of punishment generally deters less than the perceived certainty of detection, and it is outside the company's control." },
      ],
      answer: "B",
      explanation:
        "Fraud prevention programmes rely heavily on deterrence. Surprise audits, proactive data analytics, hotlines and visible follow-up all increase the perception of detection, which discourages employees who might otherwise act on an opportunity.",
      reference: REPORT_NATIONS,
    },
    {
      id: "cfe-d3-vacation-red-flag",
      domain: "d3",
      objective: "How to manage fraud risk and build an effective fraud prevention program",
      difficulty: "intermediate",
      question:
        "A long-serving accounts payable supervisor has refused to take holidays for three years and insists on handling all queries from one particular vendor personally. Which control most directly addresses this risk?",
      options: [
        { id: "A", text: "Giving the supervisor a performance bonus for loyalty", rationale: "A bonus does nothing to expose a scheme that depends on the supervisor's constant presence." },
        { id: "B", text: "Asking the supervisor to sign a statement that no fraud has occurred", rationale: "A self-declaration provides little assurance if the person is concealing a scheme." },
        { id: "C", text: "Mandatory vacations combined with job rotation, so another employee handles the duties during the absence", rationale: "Correct. Schemes that need constant concealment often surface when someone else performs the work for a period." },
        { id: "D", text: "Reducing the number of vendors the company uses", rationale: "This does not address the behavioural red flags or the supervisor's control over the vendor relationship." },
      ],
      answer: "C",
      explanation:
        "Refusal to take vacations and an unusually close relationship with a vendor or customer are behavioural red flags the ACFE tracks in its Report to the Nations. Mandatory vacations and job rotation are classic controls because they force another person to handle the work and see any irregularities.",
      reference: {
        label: "ACFE — Occupational Fraud 2026: A Report to the Nations",
        url: "https://www.acfe.com/report-to-the-nations",
      },
    },
  ],
};
