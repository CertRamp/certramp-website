import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CCSP sample questions — ORIGINAL questions written by CertRamp for the
 * 2026 ISC2 CCSP exam outline. Not taken from the paid practice exams, not
 * recalled exam content, and not presented as real exam questions.
 *
 * Objectives refer to the ISC2 CCSP exam outline effective 1 August 2026.
 */
const OUTLINE = { label: "ISC2 CCSP exam outline", url: "https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline" };

export const ccspQuestions: PracticeQuestionSet = {
  slug: "isc2-ccsp",
  intro:
    "24 original CCSP practice questions, four for each domain of the ISC2 exam outline effective 1 August 2026. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-01",
  updated: "2026-10-01",
  seo: {
    title: "CCSP Practice Questions with Answers & Explanations (2026)",
    description:
      "24 free, original CCSP practice questions across all six domains of the 2026 ISC2 exam outline — each with the answer and an explanation for every option.",
  },
  questions: [
    /* ── Domain 1: Cloud Concepts, Architecture and Design ─────────────── */
    {
      id: "ccsp-d1-measured-service",
      domain: "d1",
      objective: "1.1 Understand cloud computing concepts",
      difficulty: "foundation",
      question:
        "A finance team wants to charge each business unit for the cloud resources it actually consumes. Which essential characteristic of cloud computing makes this possible?",
      options: [
        { id: "A", text: "Rapid elasticity", rationale: "Elasticity is about scaling capacity up and down quickly, not about metering what was used." },
        { id: "B", text: "Measured service", rationale: "Correct. Resource usage is monitored, controlled and reported, which is the basis for chargeback and pay-per-use billing." },
        { id: "C", text: "Resource pooling", rationale: "Pooling describes the provider serving many tenants from shared resources; it does not by itself report consumption per consumer." },
        { id: "D", text: "Broad network access", rationale: "This describes access over the network from many client types, not usage reporting." },
      ],
      answer: "B",
      explanation:
        "NIST SP 800-145 lists five essential characteristics. Measured service is the one that makes usage transparent to both provider and customer — and therefore billable and chargeable.",
      reference: { label: "NIST SP 800-145, The NIST Definition of Cloud Computing", url: "https://csrc.nist.gov/pubs/sp/800/145/final" },
    },
    {
      id: "ccsp-d1-paas-responsibility",
      domain: "d1",
      objective: "1.1 Understand cloud computing concepts",
      difficulty: "intermediate",
      question:
        "A company deploys its own web application on a PaaS offering. The provider manages and patches the operating system and the runtime. Which task remains primarily the customer's responsibility?",
      options: [
        { id: "A", text: "Patching the operating system underneath the runtime", rationale: "In PaaS the provider manages the operating system, so patching it is the provider's job." },
        { id: "B", text: "Physical security of the data center", rationale: "Physical security is always the provider's responsibility in public cloud service models." },
        { id: "C", text: "Securing the application code and configuring access to its data", rationale: "Correct. In PaaS the customer still owns the application, its configuration, its identities and the data it processes." },
        { id: "D", text: "Maintaining the hypervisor", rationale: "The virtualization layer is part of the provider's infrastructure in every public cloud service model." },
      ],
      answer: "C",
      explanation:
        "The further up the stack a service goes (IaaS → PaaS → SaaS), the more the provider manages. In PaaS, the customer's responsibility shrinks to the application, its configuration, access management and the data.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d1-rpo",
      domain: "d1",
      objective: "1.4 Understand design principles of secure cloud computing",
      difficulty: "intermediate",
      question:
        "During a business impact analysis, the owner of an order system states that the business can afford to lose at most 15 minutes of transactions after an outage. Which metric has the owner just defined?",
      options: [
        { id: "A", text: "Recovery time objective (RTO)", rationale: "RTO is the target time to restore the service, not the amount of data that may be lost." },
        { id: "B", text: "Recovery point objective (RPO)", rationale: "Correct. RPO is the maximum tolerable data loss, expressed as a point in time before the incident." },
        { id: "C", text: "Maximum tolerable downtime (MTD)", rationale: "MTD is how long the business function can be unavailable before the damage becomes unacceptable." },
        { id: "D", text: "Service level agreement (SLA)", rationale: "An SLA is a contractual commitment; it may contain RPO/RTO values but is not itself the metric." },
      ],
      answer: "B",
      explanation:
        "RPO answers 'how much data can we lose?' and drives backup and replication frequency. RTO answers 'how fast must we be back?' and drives the recovery architecture.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d1-ml-poisoning",
      domain: "d1",
      objective: "1.6 Comprehend Artificial Intelligence/Machine Learning",
      difficulty: "intermediate",
      question:
        "A SOC uses a machine-learning model for anomaly detection that is retrained every week on recent telemetry. An attacker slowly increases malicious activity over several weeks so that the model learns to treat it as normal. Which control MOST directly reduces this risk?",
      options: [
        { id: "A", text: "Validating the training data before each retraining, for example against a trusted baseline with review of unexpected drift", rationale: "Correct. This is a training-data poisoning attack; checking what goes into the training set addresses the root cause." },
        { id: "B", text: "Encrypting the trained model at rest", rationale: "Encryption at rest protects the confidentiality of the stored model file, but the poisoned data arrives through the legitimate training pipeline." },
        { id: "C", text: "Requiring MFA for SOC analysts", rationale: "MFA protects analyst accounts; the attacker never needs analyst access to influence the telemetry." },
        { id: "D", text: "Increasing the size of the model", rationale: "A larger model learns the poisoned pattern just as well; capacity is not a security control." },
      ],
      answer: "A",
      explanation:
        "When a model learns from data an attacker can influence, the training data becomes an attack surface. Data source validation, baselining and human review of drift are the relevant controls.",
      reference: OUTLINE,
    },

    /* ── Domain 2: Cloud Data Security ─────────────────────────────────── */
    {
      id: "ccsp-d2-lifecycle-create",
      domain: "d2",
      objective: "2.1 Describe cloud data concepts",
      difficulty: "foundation",
      question:
        "In the cloud secure data lifecycle (create, store, use, share, archive, destroy), in which phase should data ideally be classified?",
      options: [
        { id: "A", text: "Create", rationale: "Correct. Classifying data when it is created or first acquired means the right controls can follow it through every later phase." },
        { id: "B", text: "Store", rationale: "Storage controls depend on the classification, so classification should already exist when data is stored." },
        { id: "C", text: "Share", rationale: "By the time data is shared, a missing classification may already have led to the wrong controls." },
        { id: "D", text: "Archive", rationale: "Archiving relies on the classification for retention decisions; it is far too late to classify then." },
      ],
      answer: "A",
      explanation:
        "Classification drives everything downstream — encryption, access, retention, deletion. The earliest point, creation, is therefore the right one.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d2-tokenization",
      domain: "d2",
      objective: "2.3 Design and apply data security technologies and strategies",
      difficulty: "intermediate",
      question:
        "An analytics platform must not hold real card numbers. The numbers are to be replaced with substitute values that have no mathematical relationship to the originals, while an authorised payment system can still look up the original through a separate, secured store. Which technique fits?",
      options: [
        { id: "A", text: "Hashing", rationale: "A hash is mathematically derived from the original and cannot be reversed to look up the original value." },
        { id: "B", text: "Format-preserving encryption", rationale: "The ciphertext is mathematically derived from the original using a key — exactly what the requirement excludes." },
        { id: "C", text: "Tokenization", rationale: "Correct. In vault-based tokenization, tokens are random substitutes and the mapping to the original lives only in a separate, secured token vault." },
        { id: "D", text: "Static data masking", rationale: "Masking replaces or hides values permanently; there is no secured store to look up the original." },
      ],
      answer: "C",
      explanation:
        "The key phrases are 'no mathematical relationship' and 'separate store to look up the original'. That is the definition of tokenization with a token vault.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d2-crypto-erasure",
      domain: "d2",
      objective: "2.7 Plan and implement data retention, deletion, and archiving policies",
      difficulty: "intermediate",
      question:
        "A customer leaves a public IaaS provider and must make sure its data on the provider's shared storage cannot be recovered. Physical destruction of the disks is not possible. What is the BEST approach?",
      options: [
        { id: "A", text: "Degaussing the storage media", rationale: "The customer has no physical access to multi-tenant media, and degaussing does not work on SSDs anyway." },
        { id: "B", text: "Cryptographic erasure — destroying the keys used to encrypt the data", rationale: "Correct. If all copies were encrypted and every copy of the key is destroyed, the remaining ciphertext is unreadable." },
        { id: "C", text: "Deleting the volumes through the provider's console", rationale: "A logical delete may leave recoverable data remnants on the underlying storage." },
        { id: "D", text: "Overwriting the volumes several times", rationale: "On virtualised, distributed storage the customer cannot verify that every physical copy and block was overwritten." },
      ],
      answer: "B",
      explanation:
        "In the cloud, crypto-shredding is the practical sanitisation method. It only works if all copies of the data were encrypted from the start and every copy of the key can be verifiably destroyed, which is easiest when the customer controls the keys.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d2-legal-hold",
      domain: "d2",
      objective: "2.7 Plan and implement data retention, deletion, and archiving policies",
      difficulty: "advanced",
      question:
        "Legal informs the security team that mailbox data of three employees is subject to a legal hold. The retention policy would automatically delete part of that data next week. What should the team do?",
      options: [
        { id: "A", text: "Let the retention policy run, because policies must be applied consistently", rationale: "Deleting data under a legal hold can amount to destruction of evidence; the hold takes precedence." },
        { id: "B", text: "Suspend deletion for the data in scope of the hold until Legal releases it", rationale: "Correct. A legal hold overrides normal retention and deletion for the data it covers." },
        { id: "C", text: "Archive the data to cheaper storage and delete the originals", rationale: "Changing location is fine only if integrity and the chain of custody are preserved — deleting originals as part of a workaround risks both." },
        { id: "D", text: "Delete the data now and restore it from backup if the court asks", rationale: "Backups may not exist or be complete, and intentional deletion would still breach the hold." },
      ],
      answer: "B",
      explanation:
        "Retention policies must provide a way to exempt data from deletion when a legal hold applies — and to release it again when the hold ends.",
      reference: OUTLINE,
    },

    /* ── Domain 3: Cloud Platform and Infrastructure Security ──────────── */
    {
      id: "ccsp-d3-type1-hypervisor",
      domain: "d3",
      objective: "3.1 Comprehend cloud infrastructure and platform components",
      difficulty: "foundation",
      question:
        "Why are Type 1 hypervisors generally preferred over Type 2 hypervisors in cloud data centers from a security perspective?",
      options: [
        { id: "A", text: "They run directly on the hardware, so there is no general-purpose host operating system to attack", rationale: "Correct. Removing the host OS layer reduces the attack surface." },
        { id: "B", text: "They encrypt all virtual machine memory automatically", rationale: "Memory encryption depends on specific hardware and configuration; it is not a property of Type 1 hypervisors as such." },
        { id: "C", text: "They never need to be patched", rationale: "Every hypervisor has vulnerabilities and must be patched." },
        { id: "D", text: "They let guest VMs share memory directly with each other", rationale: "Direct memory sharing between tenants would weaken isolation, not strengthen it." },
      ],
      answer: "A",
      explanation:
        "A Type 2 hypervisor runs as an application on a host OS, which adds that OS and everything running on it to the attack surface. A bare-metal Type 1 hypervisor avoids that layer.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d3-tier-iii",
      domain: "d3",
      objective: "3.2 Design a secure data center",
      difficulty: "intermediate",
      question:
        "A data center design must allow any component on the power and cooling paths to be taken offline for planned maintenance without affecting IT operations. Full fault tolerance against unplanned failures is not required. Which Uptime Institute tier matches this requirement?",
      options: [
        { id: "A", text: "Tier I", rationale: "Tier I is basic capacity without redundant components; maintenance usually requires a shutdown." },
        { id: "B", text: "Tier II", rationale: "Tier II adds redundant capacity components, but the distribution path is not concurrently maintainable." },
        { id: "C", text: "Tier III", rationale: "Correct. Tier III is defined as concurrently maintainable." },
        { id: "D", text: "Tier IV", rationale: "Tier IV adds fault tolerance, which goes beyond what the requirement asks for." },
      ],
      answer: "C",
      explanation:
        "The key words are 'planned maintenance without affecting operations' — concurrent maintainability, which is Tier III. Fault tolerance would point to Tier IV.",
      reference: { label: "Uptime Institute — Tier Classification System", url: "https://uptimeinstitute.com/tiers" },
    },
    {
      id: "ccsp-d3-risk-mitigation",
      domain: "d3",
      objective: "3.3 Analyze risks associated with cloud infrastructure and platforms",
      difficulty: "intermediate",
      question:
        "To limit the impact of a region-wide outage at its cloud provider, a company deploys a critical workload actively in two regions. Which risk treatment is this?",
      options: [
        { id: "A", text: "Risk transfer", rationale: "Transfer shifts the financial impact to a third party, for example through insurance or contract terms." },
        { id: "B", text: "Risk avoidance", rationale: "Avoidance would mean not running the workload in that environment at all." },
        { id: "C", text: "Risk mitigation", rationale: "Correct. The company adds a control that reduces the impact of the risk." },
        { id: "D", text: "Risk acceptance", rationale: "Acceptance would mean taking no further action and living with the risk." },
      ],
      answer: "C",
      explanation:
        "Adding redundancy is a classic mitigation: the risk still exists, but its likelihood of causing an outage or its impact is reduced.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d3-parallel-test",
      domain: "d3",
      objective: "3.5 Plan business continuity and disaster recovery",
      difficulty: "advanced",
      question:
        "A team wants to test its disaster recovery plan by actually bringing up systems at the recovery site and processing data there, while production keeps running normally. Which type of test is this?",
      options: [
        { id: "A", text: "Tabletop exercise", rationale: "A tabletop walks through the plan in discussion; no systems are actually brought up." },
        { id: "B", text: "Parallel test", rationale: "Correct. Recovery systems are activated and run alongside production, which is not interrupted." },
        { id: "C", text: "Full interruption test", rationale: "Here production is actually shut down and operations move to the recovery site — the most disruptive option." },
        { id: "D", text: "Checklist review", rationale: "A checklist review only verifies that the plan's contents and contact details are complete and current." },
      ],
      answer: "B",
      explanation:
        "Parallel tests give real evidence that the recovery site works without putting production at risk. Full interruption tests give the strongest evidence but carry real business risk.",
      reference: OUTLINE,
    },

    /* ── Domain 4: Cloud Application Security ──────────────────────────── */
    {
      id: "ccsp-d4-stride-repudiation",
      domain: "d4",
      objective: "4.3 Apply the Secure Software Development Life Cycle",
      difficulty: "foundation",
      question:
        "During threat modeling, the team notes that users could deny having approved a payment because the application does not record who approved what and when. Which STRIDE category does this threat belong to?",
      options: [
        { id: "A", text: "Spoofing", rationale: "Spoofing is pretending to be someone else, for example with stolen credentials." },
        { id: "B", text: "Tampering", rationale: "Tampering is unauthorised modification of data or code." },
        { id: "C", text: "Repudiation", rationale: "Correct. Repudiation is the ability to deny an action because there is no reliable evidence of it." },
        { id: "D", text: "Information disclosure", rationale: "Information disclosure means exposing data to people who should not see it." },
      ],
      answer: "C",
      explanation:
        "Repudiation threats are countered with non-repudiation controls: reliable, tamper-evident audit logs and, where needed, digital signatures.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d4-sca",
      domain: "d4",
      objective: "4.5 Use verified secure software",
      difficulty: "intermediate",
      question:
        "Developers want every build to fail automatically if it includes an open-source library with a known, published vulnerability. Which tool type should be added to the pipeline?",
      options: [
        { id: "A", text: "Static application security testing (SAST)", rationale: "SAST analyses your own source code for insecure patterns; it is not designed to inventory third-party libraries against vulnerability databases." },
        { id: "B", text: "Software composition analysis (SCA)", rationale: "Correct. SCA inventories dependencies and matches them against known vulnerabilities and licence data." },
        { id: "C", text: "Dynamic application security testing (DAST)", rationale: "DAST tests the running application from the outside and cannot reliably name the vulnerable library version." },
        { id: "D", text: "Fuzz testing", rationale: "Fuzzing feeds unexpected input to find unknown flaws; it does not check dependencies against known vulnerabilities." },
      ],
      answer: "B",
      explanation:
        "Third-party and open-source components are part of the software supply chain. SCA — ideally together with a software bill of materials — makes that supply chain visible.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d4-saml-sp",
      domain: "d4",
      objective: "4.7 Design appropriate Identity and Access Management solutions",
      difficulty: "intermediate",
      question:
        "Employees sign in to a SaaS application through the company's identity provider. The SaaS application accepts the SAML assertion it receives and grants access. In this federation, what role does the SaaS application play?",
      options: [
        { id: "A", text: "Identity provider", rationale: "The identity provider is the company system that authenticates users and issues assertions." },
        { id: "B", text: "Service provider (relying party)", rationale: "Correct. The SaaS application relies on assertions from the identity provider instead of authenticating users itself." },
        { id: "C", text: "Cloud access security broker", rationale: "A CASB sits between users and cloud services to enforce policy; it is not a party in the SAML trust relationship described." },
        { id: "D", text: "Certificate authority", rationale: "A certificate authority issues certificates; it does not consume authentication assertions." },
      ],
      answer: "B",
      explanation:
        "In federated identity, the identity provider authenticates and asserts; the service provider (relying party) trusts the assertion and authorises access.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d4-abuse-case",
      domain: "d4",
      objective: "4.4 Apply cloud software assurance and validation",
      difficulty: "advanced",
      question:
        "A tester replays the same 'apply discount' API call 50 times to check whether a single voucher can be redeemed more than once. Which kind of testing is this?",
      options: [
        { id: "A", text: "Regression testing", rationale: "Regression testing checks that existing functionality still works after a change." },
        { id: "B", text: "Load testing", rationale: "Load testing measures performance under volume; the goal here is misuse, not performance." },
        { id: "C", text: "Abuse case testing", rationale: "Correct. The tester deliberately misuses a legitimate feature to see whether business rules can be bypassed." },
        { id: "D", text: "Unit testing", rationale: "Unit tests check individual functions in isolation, usually written by developers for expected behaviour." },
      ],
      answer: "C",
      explanation:
        "Abuse (or misuse) cases describe how features can be used against the business. They complement functional tests, which only prove that the feature works as intended.",
      reference: OUTLINE,
    },

    /* ── Domain 5: Cloud Security Operations ───────────────────────────── */
    {
      id: "ccsp-d5-problem-management",
      domain: "d5",
      objective: "5.3 Implement operational controls and standards",
      difficulty: "foundation",
      question:
        "The same storage outage has caused three separate incidents this month. Each time the service was restored quickly, but nobody has found out why it keeps happening. Which process should take this on?",
      options: [
        { id: "A", text: "Incident management", rationale: "Incident management restores service as quickly as possible; it did that each time." },
        { id: "B", text: "Problem management", rationale: "Correct. Problem management identifies and removes the underlying root cause of recurring incidents." },
        { id: "C", text: "Release management", rationale: "Release management plans and controls the rollout of releases." },
        { id: "D", text: "Capacity management", rationale: "Capacity management ensures there are enough resources; it may contribute, but finding the root cause is problem management." },
      ],
      answer: "B",
      explanation:
        "Incidents are about restoring service; problems are about the cause. Recurring incidents are the typical trigger for a problem record.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d5-forensics-snapshot",
      domain: "d5",
      objective: "5.4 Support digital forensics",
      difficulty: "intermediate",
      question:
        "A virtual machine in IaaS shows clear signs of compromise. The organisation may need to take legal action later. What should be done FIRST from the options below?",
      options: [
        { id: "A", text: "Terminate the instance to stop the attack", rationale: "Terminating the instance destroys volatile evidence and possibly the disk." },
        { id: "B", text: "Capture memory and a disk snapshot, and record hashes of what was collected", rationale: "Correct. This preserves volatile and persistent evidence and supports the chain of custody." },
        { id: "C", text: "Reboot the instance to clear malicious processes", rationale: "A reboot wipes memory contents, which often hold the most valuable evidence." },
        { id: "D", text: "Restore the instance from the last clean backup", rationale: "Restoring overwrites the evidence before it has been collected." },
      ],
      answer: "B",
      explanation:
        "Collect in order of volatility and document everything. In IaaS, memory capture and snapshots are the customer's main tools, ideally alongside isolating the instance's network access. Anything at or below the hypervisor depends on the provider.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d5-pentest-policy",
      domain: "d5",
      objective: "5.6 Manage security operations",
      difficulty: "intermediate",
      question:
        "A company wants to run a penetration test against its own workloads hosted on a public cloud platform. What should it do FIRST?",
      options: [
        { id: "A", text: "Start with automated scans to keep the impact low", rationale: "Even scans may be restricted by the provider's terms; check the rules before testing anything." },
        { id: "B", text: "Review the provider's penetration testing policy and obtain any approvals it requires", rationale: "Correct. The provider's terms define what may be tested, how, and whether notification or approval is needed." },
        { id: "C", text: "Include the provider's management plane in scope to test it thoroughly", rationale: "Testing the provider's shared infrastructure is normally prohibited and could affect other tenants." },
        { id: "D", text: "Inform other tenants on the same hosts", rationale: "Customers cannot identify co-tenants, and testing must not target them in the first place." },
      ],
      answer: "B",
      explanation:
        "In the cloud you test your own resources within the provider's rules. Ignoring them can breach the contract and, in the worst case, affect other customers.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d5-regulator-communication",
      domain: "d5",
      objective: "5.5 Manage communication with relevant parties",
      difficulty: "advanced",
      question:
        "An EU-based company uses a SaaS provider to process its customers' personal data on its behalf. A personal data breach occurs at the provider. Under the GDPR, who is responsible for notifying the supervisory authority?",
      options: [
        { id: "A", text: "The SaaS provider, because the breach happened on its systems", rationale: "As a processor, the provider must inform the controller without undue delay — the notification to the authority is the controller's duty." },
        { id: "B", text: "The customer, as the controller", rationale: "Correct. Under GDPR Article 33, the controller notifies the supervisory authority; the processor must inform the controller." },
        { id: "C", text: "Nobody, if the data was stored outside the EU", rationale: "GDPR obligations can apply regardless of where the data is stored." },
        { id: "D", text: "The affected data subjects themselves", rationale: "Data subjects must be informed by the controller when the breach is likely to result in a high risk (Article 34), but they do not notify the authority." },
      ],
      answer: "B",
      explanation:
        "Communication duties follow data roles. That is why contracts with cloud providers must define how and how quickly the provider reports incidents to the customer.",
      reference: { label: "GDPR, Articles 33 and 34", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    },

    /* ── Domain 6: Legal, Risk and Compliance ──────────────────────────── */
    {
      id: "ccsp-d6-soc2-type2",
      domain: "d6",
      objective: "6.3 Understand audit process, methodologies, and required adaptations for a cloud environment",
      difficulty: "foundation",
      question:
        "A customer wants independent assurance that a cloud provider's security controls not only exist but operated effectively over a period of several months. Which report should the customer ask for?",
      options: [
        { id: "A", text: "SOC 1 Type I", rationale: "SOC 1 covers controls relevant to financial reporting, and Type I only looks at one point in time." },
        { id: "B", text: "SOC 2 Type I", rationale: "Type I assesses the design of controls at a single point in time, not their operation over a period." },
        { id: "C", text: "SOC 2 Type II", rationale: "Correct. SOC 2 covers security-related trust services criteria, and Type II tests operating effectiveness over a period." },
        { id: "D", text: "SOC 3", rationale: "A SOC 3 is a short general-use summary without the detailed test results." },
      ],
      answer: "C",
      explanation:
        "Two questions decide the report: what is covered (SOC 1 financial reporting, SOC 2 trust services criteria such as security) and when (Type I a point in time, Type II a period).",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d6-controller-processor",
      domain: "d6",
      objective: "6.4 Understand implications of cloud to enterprise risk management",
      difficulty: "intermediate",
      question:
        "A retailer stores its customers' personal data in a SaaS CRM. The CRM provider only processes the data on the retailer's documented instructions. Which roles do they have under the GDPR?",
      options: [
        { id: "A", text: "The retailer is the processor and the CRM provider is the controller", rationale: "The roles are reversed: the party that decides purposes and means is the controller." },
        { id: "B", text: "The retailer is the controller and the CRM provider is the processor", rationale: "Correct. The retailer decides why and how the data is processed; the provider processes it on the retailer's behalf." },
        { id: "C", text: "Both are joint controllers", rationale: "Joint control requires both to determine purposes and means together, which is not the case here." },
        { id: "D", text: "The CRM provider is the data subject", rationale: "Data subjects are the individuals the data is about — here, the retailer's customers." },
      ],
      answer: "B",
      explanation:
        "Accountability stays with the controller even when processing is outsourced. That is why the contract (a data processing agreement) and the provider's assurance reports matter.",
      reference: { label: "GDPR, Article 4 (definitions) and Article 28", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    },
    {
      id: "ccsp-d6-iso-27050",
      domain: "d6",
      objective: "6.1 Articulate legal requirements and unique risks within the cloud environment",
      difficulty: "intermediate",
      question: "Which ISO/IEC standard series provides guidance on electronic discovery (eDiscovery)?",
      options: [
        { id: "A", text: "ISO/IEC 27017", rationale: "ISO/IEC 27017 gives information security controls for cloud services." },
        { id: "B", text: "ISO/IEC 27018", rationale: "ISO/IEC 27018 covers the protection of personally identifiable information in public clouds." },
        { id: "C", text: "ISO/IEC 27037", rationale: "ISO/IEC 27037 covers identifying, collecting, acquiring and preserving digital evidence — related, but not eDiscovery." },
        { id: "D", text: "ISO/IEC 27050", rationale: "Correct. The ISO/IEC 27050 series addresses electronic discovery." },
      ],
      answer: "D",
      explanation:
        "Several 270xx standards appear in cloud security work. Knowing which one covers what — 27017 cloud controls, 27018 PII in public cloud, 27037 evidence handling, 27050 eDiscovery — helps you pick the right standard in a scenario.",
      reference: OUTLINE,
    },
    {
      id: "ccsp-d6-carve-out",
      domain: "d6",
      objective: "6.3 Understand audit process, methodologies, and required adaptations for a cloud environment",
      difficulty: "advanced",
      question:
        "A SaaS provider's SOC 2 report uses the carve-out method for the IaaS provider that hosts the service. What does this mean for the SaaS customer?",
      options: [
        { id: "A", text: "The IaaS provider's controls were tested as part of the SaaS provider's report", rationale: "That describes the inclusive method. With carve-out, the subservice organisation's controls are excluded." },
        { id: "B", text: "The customer should obtain other assurance for the IaaS provider, such as that provider's own report", rationale: "Correct. The carved-out controls are outside the auditor's opinion, so the customer needs separate assurance for them." },
        { id: "C", text: "The report is invalid and must be rejected", rationale: "Carve-out is a recognised and common method; it limits the scope but does not invalidate the report." },
        { id: "D", text: "The IaaS provider has no relevant controls", rationale: "The controls exist; they simply were not tested in this report." },
      ],
      answer: "B",
      explanation:
        "Always read the scope section of an audit report. Carved-out subservice organisations and complementary user entity controls show where your own assurance work starts.",
      reference: OUTLINE,
    },
  ],
};
