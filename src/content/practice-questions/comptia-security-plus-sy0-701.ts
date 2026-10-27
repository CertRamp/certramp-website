import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CompTIA Security+ SY0-701 sample questions — ORIGINAL questions written by
 * CertRamp against the SY0-701 exam objectives (V7). Not taken from the paid
 * practice exams, not recalled exam content, and not presented as real exam questions.
 */
const OBJECTIVES = {
  label: "CompTIA — Security+ V7 (SY0-701) exam details and objectives",
  url: "https://www.comptia.org/en-us/certifications/security/v7/",
};

export const comptiaSecurityPlusSy0701Questions: PracticeQuestionSet = {
  slug: "comptia-security-plus-sy0-701",
  intro:
    "15 original CompTIA Security+ SY0-701 practice questions across the five domains of the official exam objectives (V7), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "Security+ SY0-701 Practice Questions with Answers (2026)",
    description:
      "15 free, original Security+ SY0-701 practice questions on security controls, threats, architecture, operations and governance — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: General Security Concepts (12%) ───────────────────────── */
    {
      id: "secplus701-d1-deterrent-control",
      domain: "d1",
      objective: "1.1 Compare and contrast various types of security controls.",
      difficulty: "foundation",
      question:
        "A company fixes signs at every entrance stating that the premises are monitored by CCTV and that intruders will be prosecuted. Which type of control do the signs primarily represent?",
      options: [
        { id: "A", text: "Preventive", rationale: "A preventive control physically or technically stops an action, such as a locked door. A sign does not stop anyone from entering." },
        { id: "B", text: "Deterrent", rationale: "Correct. The signs aim to discourage an attacker from trying in the first place, which is the purpose of a deterrent control." },
        { id: "C", text: "Compensating", rationale: "A compensating control replaces a control that cannot be implemented. Nothing here is being substituted." },
        { id: "D", text: "Corrective", rationale: "Corrective controls fix or limit damage after an incident, such as restoring from backup." },
      ],
      answer: "B",
      explanation:
        "Deterrent controls work on the attacker's decision: warning signs, visible cameras and login banners make an attack look less attractive. The CCTV system itself would be detective, but the sign announcing it is a deterrent.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d1-tokenisation",
      domain: "d1",
      objective: "1.4 Explain the importance of using appropriate cryptographic solutions.",
      difficulty: "intermediate",
      question:
        "An online retailer wants to stop storing card numbers in its order database. Each card number should be replaced with a random value that has no mathematical relationship to the original, while a separate secured system can map the value back when a refund is processed. Which technique meets this requirement?",
      options: [
        { id: "A", text: "Hashing", rationale: "Hashing is one-way. The original card number cannot be recovered for a refund." },
        { id: "B", text: "Data masking", rationale: "Masking hides part of the value (for example showing only the last four digits); it does not provide a mapped substitute that can be reversed through a separate system." },
        { id: "C", text: "Steganography", rationale: "Steganography hides data inside other data, such as an image. It does not remove card numbers from the database." },
        { id: "D", text: "Tokenisation", rationale: "Correct. Tokenisation replaces sensitive data with a random token and keeps the mapping in a separate, protected token vault." },
      ],
      answer: "D",
      explanation:
        "Tokenisation removes the sensitive value from the application's systems entirely, because the token cannot be reversed mathematically. Only the token vault can map it back, which narrows the scope of systems that hold card data.",
      reference: OBJECTIVES,
    },

    /* ── Domain 2: Threats, Vulnerabilities, and Mitigations (22%) ───────── */
    {
      id: "secplus701-d2-password-spraying",
      domain: "d2",
      objective: "2.4 Given a scenario, analyze indicators of malicious activity.",
      difficulty: "intermediate",
      question:
        "Authentication logs show one external IP address attempting to sign in to 400 different user accounts over an hour. Each account receives only one or two attempts, all using the password \"Autumn2026!\". No account is locked out. What is the most likely attack?",
      options: [
        { id: "A", text: "Password spraying", rationale: "Correct. One or a few common passwords tried against many accounts, slowly enough to avoid lockout, is the signature of password spraying." },
        { id: "B", text: "Brute force against a single account", rationale: "A brute-force attack tries many passwords against one account and would usually trigger lockout." },
        { id: "C", text: "Privilege escalation", rationale: "Privilege escalation happens after access is gained; these are failed sign-in attempts." },
        { id: "D", text: "Birthday attack", rationale: "A birthday attack targets hash collisions, not online logins." },
      ],
      answer: "A",
      explanation:
        "Spraying turns the usual brute-force pattern around: many accounts, few passwords. Look for many distinct usernames from one source, a repeated password and attempts that stay below the lockout threshold.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d2-smishing",
      domain: "d2",
      objective: "2.2 Explain common threat vectors and attack surfaces.",
      difficulty: "foundation",
      question:
        "Several employees receive a text message on their mobile phones claiming to be from the company's parcel courier, asking them to follow a link to pay a small customs fee. Which threat vector is being used?",
      options: [
        { id: "A", text: "Vishing", rationale: "Vishing uses voice calls, not text messages." },
        { id: "B", text: "Whaling", rationale: "Whaling targets senior executives specifically; this message went to ordinary employees." },
        { id: "C", text: "Smishing", rationale: "Correct. Smishing is phishing delivered by SMS or other text messages." },
        { id: "D", text: "Typosquatting", rationale: "Typosquatting relies on users mistyping a domain name; here the user is sent a link directly." },
      ],
      answer: "C",
      explanation:
        "The objectives list message-based vectors such as SMS and instant messaging alongside email and voice. The delivery channel gives the attack its name: phishing by email, smishing by text, vishing by voice.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d2-legacy-segmentation",
      domain: "d2",
      objective: "2.5 Explain the purpose of mitigation techniques used to secure the enterprise.",
      difficulty: "intermediate",
      question:
        "A factory runs a legacy controller whose operating system is end-of-life and can no longer be patched. Production depends on it for another two years. Which mitigation best reduces the risk in the meantime?",
      options: [
        { id: "A", text: "Encrypt the controller's local storage", rationale: "Encryption protects data at rest but does nothing against network-based exploitation of the unpatched operating system." },
        { id: "B", text: "Isolate it on a dedicated network segment with strict access control lists", rationale: "Correct. Segmentation and ACLs limit which systems can reach the controller, shrinking the attack surface when patching is impossible." },
        { id: "C", text: "Enable automatic updates", rationale: "The system is end-of-life; no further updates will be delivered." },
        { id: "D", text: "Decommission it immediately", rationale: "Decommissioning removes the risk but ignores the stated business requirement to keep it running." },
      ],
      answer: "B",
      explanation:
        "When a vulnerable system cannot be patched or retired, reduce who can talk to it. Segmentation, isolation and access control lists are the standard compensating approach for legacy and operational technology.",
      reference: OBJECTIVES,
    },

    /* ── Domain 3: Security Architecture (18%) ───────────────────────────── */
    {
      id: "secplus701-d3-warm-site",
      domain: "d3",
      objective: "3.4 Explain the importance of resilience and recovery in security architecture.",
      difficulty: "intermediate",
      question:
        "A company needs a recovery site that can be operational within a day of a disaster. Budget rules out a fully mirrored facility, but leaving the site empty would take weeks to equip. Which option fits best?",
      options: [
        { id: "A", text: "Hot site", rationale: "A hot site is ready almost immediately with current data, but it is the most expensive option, which the budget rules out." },
        { id: "B", text: "Cold site", rationale: "A cold site provides space and power only; equipping it would take far longer than a day." },
        { id: "C", text: "Snapshot of the main servers", rationale: "Snapshots help restore systems, but they are not a recovery location." },
        { id: "D", text: "Warm site", rationale: "Correct. A warm site has hardware and connectivity in place; data and configuration must be brought up to date, which typically takes hours to a day." },
      ],
      answer: "D",
      explanation:
        "Recovery sites trade cost against recovery time: hot is fastest and most expensive, cold is cheapest and slowest, warm sits in between. Match the site to the required recovery time and the budget.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d3-ips-inline",
      domain: "d3",
      objective: "3.2 Given a scenario, apply security principles to secure enterprise infrastructure.",
      difficulty: "intermediate",
      question:
        "A security architect must deploy a device that inspects traffic between the internet and the web servers and automatically drops packets matching known exploit signatures. How should the device be deployed?",
      options: [
        { id: "A", text: "As an intrusion prevention system placed inline", rationale: "Correct. An IPS must sit in the traffic path (inline) so it can block malicious packets before they reach the servers." },
        { id: "B", text: "As an intrusion detection system connected to a SPAN port", rationale: "A passive IDS on a mirrored port only sees copies of traffic and can alert, but cannot drop the original packets." },
        { id: "C", text: "As a jump server in the DMZ", rationale: "A jump server provides controlled administrative access; it does not inspect or block traffic." },
        { id: "D", text: "As a load balancer in front of the web servers", rationale: "A load balancer distributes traffic for availability; signature-based blocking is not its role." },
      ],
      answer: "A",
      explanation:
        "The objectives distinguish active versus passive and inline versus tap/monitor placement. Only an active, inline device can stop traffic; passive monitoring can only detect and alert.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d3-data-sovereignty",
      domain: "d3",
      objective: "3.3 Compare and contrast concepts and strategies to protect data.",
      difficulty: "foundation",
      question:
        "A national regulation states that personal data about the country's citizens is subject to that country's laws and must be stored and processed within its borders. Which concept does this describe?",
      options: [
        { id: "A", text: "Data masking", rationale: "Masking hides parts of data values; it says nothing about where data must be kept." },
        { id: "B", text: "Data classification", rationale: "Classification labels data by sensitivity, such as confidential or public, not by legal jurisdiction." },
        { id: "C", text: "Data sovereignty", rationale: "Correct. Data sovereignty means data is subject to the laws of the country where it is collected or stored, which drives location requirements like this one." },
        { id: "D", text: "Data in transit", rationale: "Data in transit is a data state (moving across a network), not a legal concept." },
      ],
      answer: "C",
      explanation:
        "Data sovereignty affects cloud and backup design, because replicas in another region could break the rule. Geographic restrictions and geolocation-based controls are the usual technical answers.",
      reference: OBJECTIVES,
    },

    /* ── Domain 4: Security Operations (28%) ─────────────────────────────── */
    {
      id: "secplus701-d4-saml",
      domain: "d4",
      objective: "4.6 Given a scenario, implement and maintain identity and access management.",
      difficulty: "advanced",
      question:
        "Employees should sign in to a third-party web application with their corporate credentials. The company's identity provider will authenticate users and send the application a signed XML assertion. Which standard is being used?",
      options: [
        { id: "A", text: "LDAP", rationale: "LDAP is a directory access protocol used inside the organisation; it does not issue signed assertions to external web applications." },
        { id: "B", text: "SAML", rationale: "Correct. Security Assertion Markup Language exchanges signed XML assertions between an identity provider and a service provider to enable federated single sign-on." },
        { id: "C", text: "OAuth", rationale: "OAuth is an authorisation framework for delegated access using tokens; it is not defined around XML authentication assertions." },
        { id: "D", text: "RADIUS", rationale: "RADIUS provides AAA for network access such as VPN or Wi-Fi, not web application federation." },
      ],
      answer: "B",
      explanation:
        "SAML is the classic federation standard for browser-based SSO: the identity provider authenticates the user and the service provider trusts its signed assertion. The XML assertion is the key clue that separates it from OAuth.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d4-ir-eradication",
      domain: "d4",
      objective: "4.8 Explain appropriate incident response activities.",
      difficulty: "foundation",
      question:
        "During an incident, the response team has isolated all malware-infected workstations from the network. Following the incident response process, which phase comes next?",
      options: [
        { id: "A", text: "Preparation", rationale: "Preparation happens before an incident occurs." },
        { id: "B", text: "Lessons learned", rationale: "Lessons learned comes at the end, after recovery." },
        { id: "C", text: "Eradication", rationale: "Correct. Isolation is containment; the next step is eradication — removing the malware and its persistence from the affected systems." },
        { id: "D", text: "Detection", rationale: "Detection has already happened; the team is responding to a known incident." },
      ],
      answer: "C",
      explanation:
        "The process in the objectives runs preparation, detection, analysis, containment, eradication, recovery and lessons learned. Recovering systems before eradication risks reinfection.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d4-dmarc",
      domain: "d4",
      objective: "4.5 Given a scenario, modify enterprise capabilities to enhance security.",
      difficulty: "intermediate",
      question:
        "Attackers are sending phishing emails that spoof the company's domain. The company already publishes SPF records and signs outgoing mail with DKIM. It now wants receiving mail servers to reject messages that fail these checks and to send it reports. What should it publish?",
      options: [
        { id: "A", text: "A DMARC policy", rationale: "Correct. DMARC tells receivers what to do with mail that fails SPF and DKIM alignment (none, quarantine or reject) and where to send aggregate reports." },
        { id: "B", text: "Another DKIM key", rationale: "DKIM signs messages, but it does not tell receivers what to do when a check fails or where to report." },
        { id: "C", text: "A stricter SPF record", rationale: "SPF lists authorised sending servers; on its own it does not define a reporting mechanism or a policy covering both checks." },
        { id: "D", text: "DNS filtering", rationale: "DNS filtering blocks users from resolving malicious domains; it does not affect how other organisations treat spoofed mail." },
      ],
      answer: "A",
      explanation:
        "SPF, DKIM and DMARC work together: SPF authorises senders, DKIM proves integrity and origin, and DMARC sets the policy and reporting. Rejecting spoofed mail requires a DMARC policy of reject.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d4-false-positive",
      domain: "d4",
      objective: "4.3 Explain various activities associated with vulnerability management.",
      difficulty: "foundation",
      question:
        "A vulnerability scan flags a web server for a flaw in a software version that, after manual checking, is not installed on that server. How should the analyst classify the finding?",
      options: [
        { id: "A", text: "True positive", rationale: "A true positive is a real vulnerability that was correctly reported. Here the vulnerability is not present." },
        { id: "B", text: "False negative", rationale: "A false negative is a real vulnerability the scanner missed — the opposite situation." },
        { id: "C", text: "Exception", rationale: "An exception is a documented decision to accept a real vulnerability, not a classification for an incorrect finding." },
        { id: "D", text: "False positive", rationale: "Correct. The scanner reported a vulnerability that does not exist on the system." },
      ],
      answer: "D",
      explanation:
        "Validating scan results is part of the vulnerability analysis step. Confirmed false positives should be documented so they do not waste remediation effort, while false negatives are the more dangerous error because they go unnoticed.",
      reference: OBJECTIVES,
    },

    /* ── Domain 5: Security Program Management and Oversight (20%) ───────── */
    {
      id: "secplus701-d5-ale",
      domain: "d5",
      objective: "5.2 Explain elements of the risk management process.",
      difficulty: "advanced",
      question:
        "A server worth 200,000 would lose 25% of its value in a flood. A flood is expected once every five years. What is the annualised loss expectancy (ALE)?",
      options: [
        { id: "A", text: "50,000", rationale: "This is the single loss expectancy (200,000 × 0.25); it has not been multiplied by the annualised rate of occurrence." },
        { id: "B", text: "40,000", rationale: "This multiplies the full asset value by the annual rate (200,000 × 0.2) and ignores the exposure factor." },
        { id: "C", text: "10,000", rationale: "Correct. SLE = 200,000 × 0.25 = 50,000. ARO = 1/5 = 0.2. ALE = 50,000 × 0.2 = 10,000." },
        { id: "D", text: "2,500", rationale: "This applies the exposure factor twice or otherwise misuses the formula." },
      ],
      answer: "C",
      explanation:
        "Quantitative risk analysis uses SLE = asset value × exposure factor and ALE = SLE × ARO. An event that happens once every five years has an ARO of 0.2.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d5-right-to-audit",
      domain: "d5",
      objective: "5.3 Explain the processes associated with third-party risk assessment and management.",
      difficulty: "intermediate",
      question:
        "A company is signing a contract with a cloud payroll provider. It wants the contractual right to assess the provider's security controls itself or through an independent assessor. Which contract element provides this?",
      options: [
        { id: "A", text: "Right-to-audit clause", rationale: "Correct. A right-to-audit clause gives the customer the contractual right to examine the vendor's controls and records." },
        { id: "B", text: "Non-disclosure agreement", rationale: "An NDA protects confidential information shared between the parties; it does not grant audit rights." },
        { id: "C", text: "Service-level agreement", rationale: "An SLA defines measurable service levels such as availability and response times, not audit access." },
        { id: "D", text: "Memorandum of understanding", rationale: "An MOU records a general, usually non-binding, intent to cooperate; it is too weak to secure audit rights." },
      ],
      answer: "A",
      explanation:
        "Third-party risk management combines assessment before signing with ongoing monitoring. A right-to-audit clause makes independent verification possible instead of relying only on the vendor's own statements.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d5-unknown-environment",
      domain: "d5",
      objective: "5.5 Explain types and purposes of audits and assessments.",
      difficulty: "foundation",
      question:
        "A company hires a penetration testing firm and deliberately gives the testers no network diagrams, credentials or system details, so that the test simulates an outside attacker. What type of test is this?",
      options: [
        { id: "A", text: "Known environment", rationale: "In a known-environment test the testers receive full information about the target." },
        { id: "B", text: "Unknown environment", rationale: "Correct. Testers start with no information about the target, just like an external attacker." },
        { id: "C", text: "Partially known environment", rationale: "A partially known test gives the testers some information, such as a network range or a user account." },
        { id: "D", text: "Passive reconnaissance", rationale: "Passive reconnaissance is an information-gathering technique, not a type of penetration test defined by how much the testers are told." },
      ],
      answer: "B",
      explanation:
        "Penetration tests are classified by what the testers know in advance: known, partially known or unknown environment. Unknown-environment tests are the most realistic for an outside attacker but may cover less of the estate in the time available.",
      reference: OBJECTIVES,
    },
  ],
};
