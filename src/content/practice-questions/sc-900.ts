import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free SC-900 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 21 October 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — SC-900 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900",
};

export const sc900Questions: PracticeQuestionSet = {
  slug: "sc-900",
  intro:
    "15 original SC-900 practice questions across the four skill areas of the Microsoft study guide (skills measured as of 21 October 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "SC-900 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original SC-900 practice questions on security concepts, Microsoft Entra, Defender, Sentinel and Purview — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: Describe the concepts of security, compliance, and identity ── */
    {
      id: "sc900-d1-shared-responsibility",
      domain: "d1",
      objective: "Describe security and compliance concepts",
      difficulty: "foundation",
      question:
        "Your organisation moves its email to a software as a service (SaaS) offering. Under the shared responsibility model, which of the following always remains the customer's responsibility?",
      options: [
        { id: "A", text: "Physical security of the datacentre", rationale: "Physical datacentre security moves entirely to the cloud provider for SaaS, PaaS and IaaS." },
        { id: "B", text: "The information and data stored in the service", rationale: "Correct. Whatever the service model, the customer remains responsible for its information and data, its devices, and its accounts and identities." },
        { id: "C", text: "Patching the operating system of the servers that run the service", rationale: "In SaaS, the provider manages the operating system and the application." },
        { id: "D", text: "The physical network inside the provider's datacentre", rationale: "The physical network is always the cloud provider's responsibility." },
      ],
      answer: "B",
      explanation:
        "The further you move from on-premises towards SaaS, the more the provider takes on. Information and data, devices, and accounts and identities stay with the customer in every model.",
      reference: GUIDE,
    },
    {
      id: "sc900-d1-federation",
      domain: "d1",
      objective: "Define identity concepts",
      difficulty: "intermediate",
      question:
        "Employees of a partner company must sign in to your organisation's web application with the credentials they already use at their own company. Your organisation should not create or manage passwords for them. Which identity concept makes this possible?",
      options: [
        { id: "A", text: "Directory synchronisation", rationale: "Synchronisation copies identities from one directory into another. Here the partner's users should keep authenticating with their own identity provider." },
        { id: "B", text: "Multifactor authentication", rationale: "MFA strengthens a sign-in with additional factors; it does not establish trust between two organisations." },
        { id: "C", text: "Role-based access control", rationale: "RBAC decides what a signed-in user may do. It does not let users authenticate with another organisation's credentials." },
        { id: "D", text: "Federation", rationale: "Correct. Federation creates a trust relationship between identity providers, so your application accepts authentication performed by the partner's identity provider." },
      ],
      answer: "D",
      explanation:
        "With federation, one organisation trusts the authentication performed by another. The user signs in once with their home identity provider, and the trusting service relies on that result instead of storing its own credentials.",
      reference: GUIDE,
    },

    /* ── Domain 2: Describe the capabilities of Microsoft Entra ─────────────── */
    {
      id: "sc900-d2-managed-identity",
      domain: "d2",
      objective: "Describe function and identity types of Microsoft Entra ID",
      difficulty: "intermediate",
      question:
        "An application running on an Azure virtual machine must read secrets from Azure Key Vault. Developers must not store any credentials in code or configuration files. Which type of identity should the application use?",
      options: [
        { id: "A", text: "A managed identity", rationale: "Correct. A managed identity is a workload identity in Microsoft Entra ID whose credentials Azure manages automatically, so no secret has to be stored by the developer." },
        { id: "B", text: "A guest user account", rationale: "Guest (B2B) accounts are for external people, not for applications." },
        { id: "C", text: "A dedicated user account whose password is stored in the configuration file", rationale: "This is exactly what the requirement rules out, and a stored password is a security risk." },
        { id: "D", text: "A security group", rationale: "Groups organise identities for access assignments; a group cannot sign in by itself." },
      ],
      answer: "A",
      explanation:
        "Workload identities are identities for software such as applications and services. Managed identities remove the burden of storing and rotating credentials for Azure resources that need to access other services.",
      reference: GUIDE,
    },
    {
      id: "sc900-d2-conditional-access",
      domain: "d2",
      objective: "Describe access management capabilities of Microsoft Entra ID",
      difficulty: "foundation",
      question:
        "Users must complete multifactor authentication when they sign in to Microsoft 365 from outside the corporate network, but not when they sign in from the office. Which Microsoft Entra feature enforces this?",
      options: [
        { id: "A", text: "Access reviews", rationale: "Access reviews check periodically whether users still need access; they do not evaluate individual sign-ins." },
        { id: "B", text: "Privileged Identity Management", rationale: "PIM manages just-in-time activation of privileged roles, not sign-in conditions for all users." },
        { id: "C", text: "Conditional Access", rationale: "Correct. Conditional Access policies evaluate signals such as location, device and application, and then grant, block or require MFA." },
        { id: "D", text: "Microsoft Entra Password Protection", rationale: "Password Protection blocks weak passwords; it does not decide when MFA is required." },
      ],
      answer: "C",
      explanation:
        "Conditional Access works as \"if this signal, then this control\". Location-based MFA is a classic example: named locations such as the office network can be treated differently from unknown locations.",
      reference: GUIDE,
    },
    {
      id: "sc900-d2-pim",
      domain: "d2",
      objective: "Describe identity protection and governance capabilities of Microsoft Entra",
      difficulty: "intermediate",
      question:
        "Administrators should hold the Global Administrator role only when they need it, for a limited time and after approval, and every activation should be audited. Which capability provides this?",
      options: [
        { id: "A", text: "Microsoft Entra ID Protection", rationale: "ID Protection detects risky users and sign-ins; it does not provide time-bound role activation." },
        { id: "B", text: "Microsoft Entra Privileged Identity Management", rationale: "Correct. PIM provides just-in-time, time-bound activation of privileged roles with approval workflows, justification and audit history." },
        { id: "C", text: "Self-service password reset", rationale: "SSPR lets users reset their own password; it has nothing to do with privileged roles." },
        { id: "D", text: "Hybrid identity synchronisation", rationale: "Synchronisation brings on-premises identities to the cloud; it does not control role activation." },
      ],
      answer: "B",
      explanation:
        "PIM reduces standing privileged access. Users are made eligible for a role and activate it only when needed, which limits the time a powerful account could be misused.",
      reference: GUIDE,
    },
    {
      id: "sc900-d2-password-protection",
      domain: "d2",
      objective: "Describe authentication capabilities of Microsoft Entra ID",
      difficulty: "intermediate",
      question:
        "Your security team wants to stop users from choosing passwords that contain the company name or local sports team names. Which capability should you use?",
      options: [
        { id: "A", text: "Conditional Access named locations", rationale: "Named locations describe trusted networks or countries for Conditional Access; they do not check password content." },
        { id: "B", text: "Access reviews", rationale: "Access reviews are about whether users still need access, not about password quality." },
        { id: "C", text: "A Microsoft Entra ID Protection sign-in risk policy", rationale: "Sign-in risk policies react to suspicious sign-ins; they do not prevent weak passwords from being set." },
        { id: "D", text: "Microsoft Entra Password Protection with a custom banned password list", rationale: "Correct. Password Protection blocks known weak passwords and lets you add organisation-specific terms to a custom banned password list." },
      ],
      answer: "D",
      explanation:
        "Password Protection combines a global banned password list with a custom list for terms specific to your organisation. It is part of the password protection and management capabilities named in the outline.",
      reference: GUIDE,
    },

    /* ── Domain 3: Describe the capabilities of Microsoft security solutions ── */
    {
      id: "sc900-d3-bastion",
      domain: "d3",
      objective: "Describe core infrastructure security services in Azure",
      difficulty: "foundation",
      question:
        "Administrators need RDP and SSH access to Azure virtual machines from the Azure portal over TLS, without giving the virtual machines public IP addresses. Which service meets this requirement?",
      options: [
        { id: "A", text: "Network security groups", rationale: "NSGs filter traffic by rules, but they do not provide browser-based RDP or SSH connectivity to VMs without public IPs." },
        { id: "B", text: "Azure DDoS Protection", rationale: "DDoS Protection defends public endpoints against volumetric attacks; it does not provide remote access." },
        { id: "C", text: "Azure Bastion", rationale: "Correct. Azure Bastion provides secure RDP and SSH connectivity to virtual machines directly from the Azure portal over TLS, so the VMs need no public IP address." },
        { id: "D", text: "Azure Key Vault", rationale: "Key Vault stores secrets, keys and certificates; it does not provide connectivity to virtual machines." },
      ],
      answer: "C",
      explanation:
        "Exposing RDP or SSH ports to the internet is a common attack path. Azure Bastion removes that exposure by brokering the session through the portal.",
      reference: GUIDE,
    },
    {
      id: "sc900-d3-waf",
      domain: "d3",
      objective: "Describe core infrastructure security services in Azure",
      difficulty: "intermediate",
      question:
        "A public web application must be protected against common web exploits such as SQL injection and cross-site scripting. Which Azure service is designed for this?",
      options: [
        { id: "A", text: "Azure Web Application Firewall", rationale: "Correct. Azure WAF inspects HTTP traffic and protects web applications against common exploits and vulnerabilities, including SQL injection and cross-site scripting." },
        { id: "B", text: "Network security groups", rationale: "NSGs filter by IP address, port and protocol; they do not inspect the content of HTTP requests." },
        { id: "C", text: "Azure DDoS Protection", rationale: "DDoS Protection mitigates traffic floods; it does not look for injection attacks in requests." },
        { id: "D", text: "Azure Bastion", rationale: "Bastion provides secure administrative access to VMs, not protection for web applications." },
      ],
      answer: "A",
      explanation:
        "Match the layer to the threat: NSGs and Azure Firewall control network traffic, DDoS Protection absorbs floods, and WAF protects the application layer of web apps.",
      reference: GUIDE,
    },
    {
      id: "sc900-d3-defender-for-cloud",
      domain: "d3",
      objective: "Describe security management capabilities of Azure",
      difficulty: "foundation",
      question:
        "Your manager wants a single measure of the security posture of your Azure resources, together with recommendations that would improve it. Which service provides this?",
      options: [
        { id: "A", text: "Microsoft Sentinel", rationale: "Sentinel is a SIEM and SOAR solution for detecting and responding to threats, not a posture score for Azure resources." },
        { id: "B", text: "Microsoft Purview Compliance Manager", rationale: "Compliance Manager provides a compliance score for regulatory requirements, not a security posture score with resource hardening recommendations." },
        { id: "C", text: "Microsoft Defender for Office 365", rationale: "Defender for Office 365 protects email and collaboration tools, not Azure resources." },
        { id: "D", text: "Microsoft Defender for Cloud", rationale: "Correct. Defender for Cloud's cloud security posture management assesses resources against security policies and standards, shows a secure score and lists recommendations." },
      ],
      answer: "D",
      explanation:
        "Defender for Cloud combines posture management (secure score, recommendations, standards) with workload protection plans. Do not confuse secure score with the compliance score in Microsoft Purview.",
      reference: GUIDE,
    },
    {
      id: "sc900-d3-soar",
      domain: "d3",
      objective: "Describe capabilities of Microsoft Sentinel",
      difficulty: "intermediate",
      question:
        "When a high-severity incident is created, your SOC wants a workflow to run automatically that disables the affected user account and opens a ticket in the service desk tool. Which concept does this describe?",
      options: [
        { id: "A", text: "Security information and event management (SIEM)", rationale: "SIEM collects and correlates data to detect threats. The automated response described here goes beyond that." },
        { id: "B", text: "Security orchestration automated response (SOAR)", rationale: "Correct. SOAR is about orchestrating and automating responses to incidents. In Microsoft Sentinel this is done with automation rules and playbooks." },
        { id: "C", text: "Cloud security posture management (CSPM)", rationale: "CSPM assesses and improves configuration posture; it does not run incident response workflows." },
        { id: "D", text: "Defence in depth", rationale: "Defence in depth is a layered security strategy, not an automation capability." },
      ],
      answer: "B",
      explanation:
        "Microsoft Sentinel is both a SIEM and a SOAR solution. SIEM gathers and analyses the signals; SOAR acts on the resulting incidents automatically.",
      reference: GUIDE,
    },
    {
      id: "sc900-d3-defender-office",
      domain: "d3",
      objective: "Describe threat protection with Microsoft Defender XDR",
      difficulty: "foundation",
      question:
        "Your organisation wants email attachments opened in a safe environment before delivery and URLs in messages checked at the moment a user selects them. Which Microsoft Defender XDR service provides this?",
      options: [
        { id: "A", text: "Microsoft Defender for Identity", rationale: "Defender for Identity uses on-premises Active Directory signals to detect identity attacks; it does not scan email." },
        { id: "B", text: "Microsoft Defender for Cloud Apps", rationale: "Defender for Cloud Apps is a cloud access security broker for SaaS apps, not an email scanning service." },
        { id: "C", text: "Microsoft Defender for Office 365", rationale: "Correct. Defender for Office 365 includes Safe Attachments and Safe Links, which protect against malicious attachments and URLs in email and collaboration tools." },
        { id: "D", text: "Microsoft Defender for Endpoint", rationale: "Defender for Endpoint protects devices; it does not detonate email attachments before delivery." },
      ],
      answer: "C",
      explanation:
        "Defender XDR brings together several services, each with its own focus: Office 365 for email and collaboration, Endpoint for devices, Identity for on-premises identities and Cloud Apps for SaaS applications.",
      reference: GUIDE,
    },
    {
      id: "sc900-d3-defender-identity",
      domain: "d3",
      objective: "Describe threat protection with Microsoft Defender XDR",
      difficulty: "advanced",
      question:
        "You need to detect pass-the-hash and other lateral movement attempts against your on-premises Active Directory Domain Services. Which service is designed for this?",
      options: [
        { id: "A", text: "Microsoft Defender for Identity", rationale: "Correct. Defender for Identity uses signals from on-premises Active Directory to identify compromised identities, lateral movement and other advanced attacks." },
        { id: "B", text: "Microsoft Defender for Cloud Apps", rationale: "Defender for Cloud Apps focuses on cloud application usage and shadow IT, not on-premises domain controllers." },
        { id: "C", text: "Microsoft Defender Vulnerability Management", rationale: "Vulnerability Management finds and prioritises weaknesses on devices; it does not detect identity attacks in progress." },
        { id: "D", text: "Microsoft Entra ID Protection", rationale: "ID Protection evaluates risk for cloud identities and sign-ins in Microsoft Entra ID, not attacks against on-premises AD DS." },
      ],
      answer: "A",
      explanation:
        "The word \"on-premises Active Directory\" points to Defender for Identity. Entra ID Protection is its cloud counterpart for risky users and sign-ins in Microsoft Entra ID.",
      reference: GUIDE,
    },

    /* ── Domain 4: Describe the capabilities of Microsoft compliance solutions ── */
    {
      id: "sc900-d4-service-trust-portal",
      domain: "d4",
      objective: "Describe Microsoft Service Trust Portal and privacy principles",
      difficulty: "foundation",
      question:
        "An external auditor asks for Microsoft's independent audit reports for its cloud services, such as ISO and SOC reports. Where do you find them?",
      options: [
        { id: "A", text: "Microsoft Purview Compliance Manager", rationale: "Compliance Manager helps you assess and improve your own compliance; it is not the library of Microsoft's audit reports." },
        { id: "B", text: "The Service Trust Portal", rationale: "Correct. The Service Trust Portal publishes Microsoft's audit reports, compliance documents and other resources about how Microsoft cloud services protect data." },
        { id: "C", text: "Microsoft Purview Audit", rationale: "Purview Audit records user and admin activities in your tenant, not Microsoft's third-party audit reports." },
        { id: "D", text: "The Microsoft Defender portal", rationale: "The Defender portal is for security operations, not for compliance documentation." },
      ],
      answer: "B",
      explanation:
        "The Service Trust Portal answers \"how does Microsoft protect its cloud?\". Compliance Manager answers \"how compliant is my organisation?\".",
      reference: GUIDE,
    },
    {
      id: "sc900-d4-dlp",
      domain: "d4",
      objective: "Describe information protection, data lifecycle management, and data governance capabilities of Microsoft Purview",
      difficulty: "intermediate",
      question:
        "Users must be prevented from sending credit card numbers to external recipients in email and Teams chats, and should see a policy tip explaining why. What should you implement?",
      options: [
        { id: "A", text: "A retention label", rationale: "Retention labels control how long content is kept or when it is deleted, not whether it can be shared." },
        { id: "B", text: "Insider risk management", rationale: "Insider risk management correlates signals to identify risky user behaviour; it is not the control that blocks a specific message containing sensitive data." },
        { id: "C", text: "A data loss prevention (DLP) policy", rationale: "Correct. DLP policies detect sensitive information types such as credit card numbers and can block sharing and show policy tips to users." },
        { id: "D", text: "An eDiscovery case", rationale: "eDiscovery identifies, preserves and exports content for legal matters; it does not prevent sharing." },
      ],
      answer: "C",
      explanation:
        "DLP protects sensitive information in use and in transit across locations such as Exchange, Teams, SharePoint and OneDrive. Policy tips help users understand and correct their behaviour.",
      reference: GUIDE,
    },
    {
      id: "sc900-d4-ediscovery",
      domain: "d4",
      objective: "Describe insider risk, eDiscovery, and audit capabilities in Microsoft Purview",
      difficulty: "intermediate",
      question:
        "Your legal team is preparing for litigation. It must preserve the mailboxes and OneDrive content of five employees, search that content and export the results for the lawyers. Which Microsoft Purview solution should it use?",
      options: [
        { id: "A", text: "eDiscovery", rationale: "Correct. eDiscovery in Microsoft Purview lets you place content on hold, search it and export results for legal and investigative cases." },
        { id: "B", text: "Compliance Manager", rationale: "Compliance Manager tracks regulatory controls and improvement actions; it does not preserve or export content." },
        { id: "C", text: "Content explorer", rationale: "Content explorer shows where sensitive or labelled content is stored, but it is not a case-based tool for holds and exports." },
        { id: "D", text: "Sensitivity labels", rationale: "Sensitivity labels classify and protect content; they do not preserve it for legal proceedings." },
      ],
      answer: "A",
      explanation:
        "eDiscovery is about identifying, preserving, collecting and exporting content for legal matters. Audit records what users did; eDiscovery deals with the content itself.",
      reference: GUIDE,
    },
  ],
};
