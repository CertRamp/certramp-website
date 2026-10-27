import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CIPP/E sample questions — ORIGINAL questions written by CertRamp for the
 * IAPP CIPP/E body of knowledge and exam blueprint 1.3.3 (effective 1 September 2025).
 * Not taken from the paid practice exams, not recalled exam content, and not
 * presented as real exam questions.
 */
const BOK = {
  label: "IAPP — CIPP/E body of knowledge and exam blueprint 1.3.3 (PDF)",
  url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blte39ae9567661b3d2/IAPP_Training-CIPPE_BOK.pdf",
};

const gdpr = (articles: string) => ({
  label: `GDPR (Regulation (EU) 2016/679), ${articles} — EUR-Lex`,
  url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
});

export const iappCippEQuestions: PracticeQuestionSet = {
  slug: "iapp-cipp-e",
  intro:
    "15 original CIPP/E practice questions across the five domains of the IAPP body of knowledge and exam blueprint 1.3.3 (effective 1 September 2025), weighted roughly like the blueprint. Each one comes with the answer, a short explanation, the reason every other option is wrong and a link to the relevant GDPR article or IAPP document.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CIPP/E Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original CIPP/E practice questions on GDPR concepts, data subject rights, lawful bases, transfers and fines — each with a full explanation.",
  },
  questions: [
    /* ── Domain I: Introduction to European Data Protection ─────────────────── */
    {
      id: "cippe-d1-convention-108",
      domain: "d1",
      objective: "I.A Understand the origins and historical context of European data protection laws",
      difficulty: "foundation",
      question:
        "Which instrument, opened for signature in 1981, was the first legally binding international treaty on the protection of individuals with regard to the automatic processing of personal data?",
      options: [
        { id: "A", text: "The OECD Guidelines on the Protection of Privacy and Transborder Flows of Personal Data", rationale: "The OECD Guidelines were adopted in 1980, but they are recommendations, not a legally binding treaty." },
        { id: "B", text: "Council of Europe Convention 108", rationale: "Correct. Convention 108 of the Council of Europe was opened for signature in January 1981 and binds the states that ratify it." },
        { id: "C", text: "Directive 95/46/EC", rationale: "The Data Protection Directive dates from 1995 and is EU secondary law, not an international treaty." },
        { id: "D", text: "The Charter of Fundamental Rights of the European Union", rationale: "The Charter was proclaimed in 2000 and only became legally binding with the Treaty of Lisbon in 2009." },
      ],
      answer: "B",
      explanation:
        "Convention 108 is the foundation of European data protection law and is open to non-European states as well. It was modernised in 2018 (Convention 108+), and its principles strongly influenced Directive 95/46/EC and later the GDPR.",
      reference: BOK,
    },
    {
      id: "cippe-d1-commission",
      domain: "d1",
      objective: "I.B Understand the roles and functions of significant European Union institutions",
      difficulty: "foundation",
      question:
        "Under the ordinary legislative procedure, which EU institution has the right to propose new legislation, as it did with the proposal for the GDPR in 2012?",
      options: [
        { id: "A", text: "The European Parliament", rationale: "Parliament amends and adopts legislation together with the Council, but it does not formally propose it." },
        { id: "B", text: "The Court of Justice of the European Union", rationale: "The CJEU interprets EU law and rules on its validity; it plays no part in proposing legislation." },
        { id: "C", text: "The European Commission", rationale: "Correct. The Commission holds the right of initiative and presented the proposal for the General Data Protection Regulation in January 2012." },
        { id: "D", text: "The European Council", rationale: "The European Council of heads of state or government sets overall political direction but does not legislate." },
      ],
      answer: "C",
      explanation:
        "In the ordinary legislative procedure the Commission proposes, and the European Parliament and the Council of the EU negotiate and adopt. Keep the European Council (heads of state or government) and the Council of the EU (ministers) apart — they are different bodies.",
      reference: BOK,
    },

    /* ── Domain II: European Data Protection Law and Regulation ─────────────── */
    {
      id: "cippe-d2-pseudonymisation",
      domain: "d2",
      objective: "II.A Understand basic GDPR data protection concepts",
      difficulty: "intermediate",
      question:
        "A research team replaces patients' names with random codes. The key linking codes to names is held securely by a separate team in the same organisation. How does the GDPR treat the coded data set?",
      options: [
        { id: "A", text: "As anonymous data outside the scope of the GDPR", rationale: "Anonymous data cannot be attributed to a person by any means reasonably likely to be used. Here the organisation itself holds the key." },
        { id: "B", text: "As personal data only while the research team has access to the key", rationale: "The status of the data does not depend on which team holds the key; the data can still be attributed to individuals using additional information." },
        { id: "C", text: "As special category data that may only be processed with explicit consent", rationale: "Health data is a special category, but Article 9 offers several conditions besides explicit consent, such as scientific research under Article 9(2)(j)." },
        { id: "D", text: "As pseudonymised data, which remains personal data", rationale: "Correct. Under Article 4(5) and Recital 26, data that can be attributed to a person using additional information kept separately is pseudonymised and still personal data." },
      ],
      answer: "D",
      explanation:
        "Pseudonymisation reduces risk and is recognised as a safeguard, but it does not take data outside the GDPR. Only truly anonymous data, where re-identification is not reasonably likely, falls outside the Regulation.",
      reference: gdpr("Article 4(5) and Recital 26"),
    },
    {
      id: "cippe-d2-processor-breach",
      domain: "d2",
      objective: "II.B Understand the requirements involved in maintaining the security of personal data",
      difficulty: "intermediate",
      question:
        "A payroll processor discovers that an unauthorised person accessed one client's employee records. What does the GDPR require the processor to do?",
      options: [
        { id: "A", text: "Notify the competent supervisory authority within 72 hours", rationale: "The 72-hour notification to the supervisory authority is the controller's obligation under Article 33(1), not the processor's." },
        { id: "B", text: "Notify the controller without undue delay after becoming aware of the breach", rationale: "Correct. Article 33(2) requires the processor to notify the controller without undue delay; the controller then decides on notification to the authority and data subjects." },
        { id: "C", text: "Inform the affected employees directly", rationale: "Communication to data subjects under Article 34 is the controller's decision and duty." },
        { id: "D", text: "Nothing, as long as the breach is documented in the processor's records", rationale: "Documenting breaches is required of the controller under Article 33(5), but it does not replace the processor's duty to inform the controller." },
      ],
      answer: "B",
      explanation:
        "The controller remains responsible for breach notification. The processor's role is to alert the controller promptly and assist it, so the controller can meet the 72-hour deadline that runs from when it becomes aware of the breach.",
      reference: gdpr("Article 33"),
    },
    {
      id: "cippe-d2-breach-encryption",
      domain: "d2",
      objective: "II.B Understand the requirements involved in maintaining the security of personal data",
      difficulty: "advanced",
      question:
        "A breach is likely to result in a high risk to individuals' rights and freedoms. In which situation is the controller nevertheless NOT required to communicate the breach to the affected data subjects?",
      options: [
        { id: "A", text: "The affected data was protected by state-of-the-art encryption and the key was not compromised", rationale: "Correct. Article 34(3)(a) exempts communication where measures such as encryption render the data unintelligible to unauthorised persons." },
        { id: "B", text: "The controller has already notified the supervisory authority", rationale: "Notifying the authority under Article 33 does not discharge the separate duty to inform data subjects under Article 34." },
        { id: "C", text: "Fewer than 100 data subjects are affected", rationale: "The GDPR sets no numerical threshold for communicating a breach to data subjects." },
        { id: "D", text: "The breach was caused by the controller's processor", rationale: "Responsibility for communication stays with the controller, regardless of where the breach happened." },
      ],
      answer: "A",
      explanation:
        "Article 34(3) lists three exceptions: the data was made unintelligible (for example by encryption), subsequent measures mean the high risk is no longer likely to materialise, or individual communication would involve disproportionate effort, in which case a public communication is used instead.",
      reference: gdpr("Article 34"),
    },
    {
      id: "cippe-d2-access-deadline",
      domain: "d2",
      objective: "II.C Understand data subjects' rights",
      difficulty: "foundation",
      question:
        "A customer submits a subject access request. Within what period must the controller respond, as a general rule?",
      options: [
        { id: "A", text: "Within 72 hours", rationale: "72 hours is the deadline for notifying a personal data breach to the supervisory authority, not for answering requests." },
        { id: "B", text: "Within 30 working days, extendable without limit for complex requests", rationale: "The GDPR uses calendar months, and the extension is capped at two further months." },
        { id: "C", text: "Without undue delay and in any event within one month, extendable by two further months where necessary", rationale: "Correct. Article 12(3) sets one month, extendable by two months for complex or numerous requests, provided the data subject is told of the extension and the reasons within the first month." },
        { id: "D", text: "Within 40 days", rationale: "There is no 40-day period in the GDPR." },
      ],
      answer: "C",
      explanation:
        "The one-month rule in Article 12(3) applies to all data subject rights in Articles 15 to 22. If the controller does not act on a request, it must explain why within one month and tell the data subject about the right to complain and seek a judicial remedy.",
      reference: gdpr("Article 12(3)"),
    },
    {
      id: "cippe-d2-portability",
      domain: "d2",
      objective: "II.C Understand data subjects' rights",
      difficulty: "intermediate",
      question:
        "In which situation does the right to data portability under Article 20 apply?",
      options: [
        { id: "A", text: "A tax authority holds paper records about a citizen to perform a task in the public interest", rationale: "Portability does not apply to processing necessary for a task carried out in the public interest, and the records are not processed by automated means." },
        { id: "B", text: "An employer processes salary data because labour law requires it", rationale: "Processing based on a legal obligation is not covered by the right to data portability." },
        { id: "C", text: "A bank derives a credit score about a customer from its own analysis", rationale: "Portability covers data the data subject has provided, not scores or inferences the controller has created." },
        { id: "D", text: "A fitness app processes activity data a user uploaded, based on the user's consent, in an automated system", rationale: "Correct. Portability applies to data the data subject provided, where processing is based on consent or contract and carried out by automated means." },
      ],
      answer: "D",
      explanation:
        "Article 20 has three conditions: the data concerns and was provided by the data subject, the lawful basis is consent or contract, and processing is automated. Where technically feasible, the data subject can also have the data transmitted directly to another controller.",
      reference: gdpr("Article 20"),
    },

    /* ── Domain III: European Data Processing ────────────────────────────────── */
    {
      id: "cippe-d3-public-authority-li",
      domain: "d3",
      objective: "III.B Know what constitutes a lawful processing basis",
      difficulty: "intermediate",
      question:
        "A municipal authority processes residents' personal data in the performance of its official tasks. Which lawful basis under Article 6(1) can it NOT rely on for this processing?",
      options: [
        { id: "A", text: "Legitimate interests (Article 6(1)(f))", rationale: "Correct. The last subparagraph of Article 6(1) states that point (f) does not apply to processing carried out by public authorities in the performance of their tasks." },
        { id: "B", text: "Performance of a task carried out in the public interest or in the exercise of official authority (Article 6(1)(e))", rationale: "This is the typical basis for public authorities carrying out their tasks, provided the task is laid down by law." },
        { id: "C", text: "Compliance with a legal obligation (Article 6(1)(c))", rationale: "Public authorities can rely on legal obligations set out in Union or Member State law." },
        { id: "D", text: "Protection of vital interests (Article 6(1)(d))", rationale: "Vital interests is available to any controller where processing is needed to protect someone's life, although Recital 46 says processing for another person's vital interests should in principle take place only where no other basis is manifestly available." },
      ],
      answer: "A",
      explanation:
        "The legislature should provide the legal basis for public authorities, so they cannot use the flexible legitimate interests test for their official tasks. They usually rely on Article 6(1)(c) or (e), both of which require a basis in Union or Member State law.",
      reference: gdpr("Article 6(1)"),
    },
    {
      id: "cippe-d3-art14-timing",
      domain: "d3",
      objective: "III.C Understand information provision obligations",
      difficulty: "advanced",
      question:
        "A company obtains business contact details from a trade association, not from the individuals themselves. It does not plan to contact them or disclose the data to anyone else in the near future. By when must it provide the Article 14 information?",
      options: [
        { id: "A", text: "Only when an individual asks for it", rationale: "Article 14 imposes a proactive duty; the controller must provide the information without waiting for a request." },
        { id: "B", text: "At the time the data is collected from the trade association", rationale: "That is the rule in Article 13 for data collected directly from the data subject." },
        { id: "C", text: "At the time of the first communication with each individual", rationale: "This deadline applies only where the data is to be used for communicating with the data subject, which is not planned here." },
        { id: "D", text: "Within a reasonable period after obtaining the data, and at the latest within one month", rationale: "Correct. Article 14(3)(a) sets this outer limit, having regard to the specific circumstances of the processing." },
      ],
      answer: "D",
      explanation:
        "Article 14(3) has three timing rules: within a reasonable period and at the latest one month; at the first communication if the data is used to contact the person; and at the latest on first disclosure if disclosure to another recipient is envisaged. Exceptions in Article 14(5), such as disproportionate effort, are narrow.",
      reference: gdpr("Article 14"),
    },
    {
      id: "cippe-d3-schrems-ii",
      domain: "d3",
      objective: "III.D Understand the principles of, and the risks involved in, international data transfers",
      difficulty: "advanced",
      question:
        "Following the CJEU's Schrems II judgment (C-311/18), what is expected of a data exporter that relies on standard contractual clauses to transfer personal data to a country without an adequacy decision?",
      options: [
        { id: "A", text: "To switch to the EU-US Privacy Shield, which the judgment confirmed as valid", rationale: "Schrems II invalidated the Privacy Shield adequacy decision." },
        { id: "B", text: "To assess whether the law and practice of the destination country allow the clauses to be complied with, and to adopt supplementary measures where needed", rationale: "Correct. The Court upheld the clauses but placed the responsibility on the exporter to verify, case by case, that an essentially equivalent level of protection is ensured." },
        { id: "C", text: "To stop all transfers, because the judgment declared standard contractual clauses invalid", rationale: "The Court confirmed the validity of the Commission's standard contractual clauses decision." },
        { id: "D", text: "To obtain prior authorisation from the supervisory authority for each transfer", rationale: "Standard contractual clauses adopted by the Commission do not require specific authorisation under Article 46(2)(c)." },
      ],
      answer: "B",
      explanation:
        "Schrems II (2020) struck down the Privacy Shield but kept standard contractual clauses, on condition that exporters assess the destination country and add supplementary measures where necessary. If effective protection cannot be ensured, the transfer must be suspended or ended. This assessment is what is now commonly called a transfer impact assessment.",
      reference: {
        label: "CJEU, Case C-311/18 (Schrems II) — EUR-Lex",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62018CJ0311",
      },
    },

    /* ── Domain IV: European Data Protection: Scope and Accountability ──────── */
    {
      id: "cippe-d4-territorial-scope",
      domain: "d4",
      objective: "IV.A Understand issues related to the territorial and material scope of the GDPR",
      difficulty: "intermediate",
      question:
        "An online shop based in Canada has no establishment in the EU. Its website is available in German, prices goods in euros and ships to customers in Germany and Austria. How does the GDPR apply?",
      options: [
        { id: "A", text: "It does not apply, because the shop has no establishment in the Union", rationale: "Article 3(2) extends the GDPR to controllers outside the Union that target individuals in the Union." },
        { id: "B", text: "It applies only if the shop stores the data on servers in the EU", rationale: "The location of servers is not the test under Article 3; targeting individuals in the Union is." },
        { id: "C", text: "It applies to the processing of data of customers in the Union, and the shop must generally designate a representative in the Union", rationale: "Correct. Offering goods to individuals in the Union brings the shop under Article 3(2)(a), and Article 27 generally requires a representative." },
        { id: "D", text: "It applies only to customers who are EU citizens", rationale: "Article 3(2) refers to data subjects who are in the Union, not to their nationality." },
      ],
      answer: "C",
      explanation:
        "Indicators such as an EU language, euro pricing and delivery to Member States show an intention to offer goods to individuals in the Union. The Article 27 representative is not required where processing is occasional, does not include large-scale processing of special category or criminal offence data, and is unlikely to result in a risk to individuals, or for public authorities.",
      reference: gdpr("Articles 3 and 27"),
    },
    {
      id: "cippe-d4-dpo",
      domain: "d4",
      objective: "IV.B Understand the various accountability requirements under the GDPR",
      difficulty: "foundation",
      question:
        "Which of these organisations is required by Article 37(1) to designate a data protection officer?",
      options: [
        { id: "A", text: "A city council processing residents' data in the course of its public duties", rationale: "Correct. Article 37(1)(a) requires a DPO for every public authority or body, except courts acting in their judicial capacity." },
        { id: "B", text: "A manufacturing company that processes only its own employees' HR data", rationale: "HR processing is an ancillary activity, not a core activity involving large-scale monitoring or special category data." },
        { id: "C", text: "A small accountancy firm processing client contact and billing data", rationale: "This is neither large-scale systematic monitoring nor large-scale special category processing, so a DPO is not mandatory under the GDPR (national law may add requirements)." },
        { id: "D", text: "Any organisation with more than 250 employees", rationale: "The GDPR does not link the DPO requirement to headcount; the 250-employee figure relates to the record-keeping exemption in Article 30(5)." },
      ],
      answer: "A",
      explanation:
        "Article 37(1) makes a DPO mandatory for public authorities, and for controllers or processors whose core activities consist of large-scale regular and systematic monitoring or large-scale processing of special category or criminal offence data. Member State law can extend the requirement, as Germany does.",
      reference: gdpr("Article 37"),
    },
    {
      id: "cippe-d4-fines",
      domain: "d4",
      objective: "IV.D Understand the consequences for GDPR violations",
      difficulty: "intermediate",
      question:
        "A company transfers personal data to a third country without an adequacy decision, appropriate safeguards or an applicable derogation. What is the maximum administrative fine that can be imposed for this infringement?",
      options: [
        { id: "A", text: "Up to EUR 10 million or 2% of total worldwide annual turnover, whichever is higher", rationale: "This lower tier in Article 83(4) applies to obligations such as security, records and DPIAs, not to the transfer rules." },
        { id: "B", text: "Up to EUR 20 million or 4% of total worldwide annual turnover, whichever is lower", rationale: "The GDPR uses whichever is higher, not lower." },
        { id: "C", text: "Up to 4% of the turnover of the EU subsidiary only", rationale: "For an undertaking, the percentage is based on total worldwide annual turnover of the preceding financial year." },
        { id: "D", text: "Up to EUR 20 million or 4% of total worldwide annual turnover of the preceding financial year, whichever is higher", rationale: "Correct. Article 83(5)(c) places infringements of the transfer rules in Articles 44–49 in the higher tier." },
      ],
      answer: "D",
      explanation:
        "Article 83(5) covers the basic principles and conditions for consent, data subject rights, international transfers and non-compliance with a supervisory authority's order. Fines must be effective, proportionate and dissuasive, and the authority weighs the factors listed in Article 83(2).",
      reference: gdpr("Article 83"),
    },

    /* ── Domain V: Compliance with European Data Protection Law and Regulation ─ */
    {
      id: "cippe-d5-employee-consent",
      domain: "d5",
      objective:
        "V.A Understand how to comply with European data protection laws and regulations in the workplace, specifically as they relate to employment relationships",
      difficulty: "intermediate",
      question:
        "An employer plans to monitor employees' use of company email for security reasons and wants all staff to sign a consent form. What is the main problem with this approach?",
      options: [
        { id: "A", text: "Consent must be given in writing on paper, not electronically", rationale: "The GDPR does not require paper; consent can be given by any clear affirmative act, including electronically." },
        { id: "B", text: "Because of the imbalance of power, employee consent is rarely freely given, so another lawful basis is normally more appropriate", rationale: "Correct. Recital 43 and EDPB Guidelines 05/2020 on consent warn that consent is unlikely to be freely given where there is a clear imbalance, as in employment, because employees may fear the consequences of refusing. Legitimate interests with a proportionality assessment is the more usual basis." },
        { id: "C", text: "Email monitoring is prohibited outright by the GDPR", rationale: "The GDPR does not ban workplace monitoring; it must be lawful, necessary, proportionate and transparent." },
        { id: "D", text: "Consent cannot be withdrawn once given in an employment context", rationale: "Article 7(3) allows consent to be withdrawn at any time, which is one reason it is unreliable in employment." },
      ],
      answer: "B",
      explanation:
        "Valid consent must be freely given (Articles 4(11) and 7), which is difficult when the person asking is your employer. Monitoring is usually based on legitimate interests, supported by a clear policy, data minimisation and, where required, a DPIA. Member States may also set more specific employment rules under Article 88, including works council involvement.",
      reference: gdpr("Articles 7, 88 and Recital 43"),
    },
    {
      id: "cippe-d5-cookies",
      domain: "d5",
      objective:
        "V.D Understand how to comply with European data protection laws and regulations related to internet technology and communications",
      difficulty: "intermediate",
      question:
        "Under Article 5(3) of the ePrivacy Directive, which of these cookies can a web shop set without the user's consent?",
      options: [
        { id: "A", text: "A third-party advertising cookie used for behavioural targeting", rationale: "Advertising cookies are not strictly necessary for the service the user requested and require prior consent." },
        { id: "B", text: "A first-party analytics cookie measuring visits to improve the website", rationale: "Analytics cookies are generally not strictly necessary for the service the user explicitly requested, so consent is the rule, subject to any narrow national exemptions." },
        { id: "C", text: "A session cookie that remembers the items in the user's shopping basket", rationale: "Correct. It is strictly necessary to provide the service the user explicitly requested, so it falls under the exemption in Article 5(3)." },
        { id: "D", text: "A social media plug-in cookie that tracks users across websites", rationale: "Cross-site tracking cookies are not strictly necessary and need consent." },
      ],
      answer: "C",
      explanation:
        "Article 5(3) requires consent for storing or accessing information on a user's device, except where it is solely for transmitting a communication or strictly necessary for a service the user explicitly requested. Where consent is needed, it must meet the GDPR standard: freely given, specific, informed and unambiguous.",
      reference: {
        label: "ePrivacy Directive 2002/58/EC, Article 5(3) — EUR-Lex",
        url: "https://eur-lex.europa.eu/eli/dir/2002/58/oj",
      },
    },
  ],
};
