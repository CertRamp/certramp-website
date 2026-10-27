import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free SC-500 sample questions — ORIGINAL questions written by CertRamp for the
 * published SC-500 study guide. Not taken from the paid practice exams, not
 * recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — SC-500 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-500",
};

export const sc500Questions: PracticeQuestionSet = {
  slug: "sc-500",
  intro:
    "15 original SC-500 practice questions across the four skill areas of the Microsoft study guide for Implementing End-to-End Security Controls for Cloud and AI Workloads, weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "SC-500 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original SC-500 practice questions on Entra ID, Key Vault, network security, AI and VM security, Defender for Cloud and Sentinel — fully explained.",
  },
  questions: [
    /* ── Domain 1: Manage identity, access, and governance ────────────────── */
    {
      id: "sc500-d1-pim-eligible",
      domain: "d1",
      objective: "Secure access to resources by using Microsoft Entra ID",
      difficulty: "intermediate",
      question:
        "Three engineers occasionally need the Owner role on a production subscription. The role must not be active permanently, each activation must require approval and justification, and access must end automatically after a few hours. What should you configure?",
      options: [
        { id: "A", text: "A permanent (active) Owner assignment with a Conditional Access policy requiring MFA", rationale: "MFA strengthens sign-in, but the role would still be active all the time, which the requirement rules out." },
        { id: "B", text: "A custom Azure role with fewer permissions than Owner", rationale: "Least privilege is good practice, but a custom role assigned permanently still does not give time-bound activation with approval." },
        { id: "C", text: "An eligible assignment of the Owner role in Privileged Identity Management, with approval required on activation", rationale: "Correct. PIM eligible assignments must be activated before use, can require approval and justification, and expire after the configured activation duration." },
        { id: "D", text: "An access review of the Owner role every quarter", rationale: "Access reviews find assignments that are no longer needed, but they do not make access just-in-time." },
      ],
      answer: "C",
      explanation:
        "Privileged Identity Management turns standing access into just-in-time access. Eligible assignments, activation settings (duration, approval, MFA, justification) and audit history are its core features for Azure resource roles and Microsoft Entra roles.",
      reference: GUIDE,
    },
    {
      id: "sc500-d1-keyvault-rbac",
      domain: "d1",
      objective: "Secure secrets and keys by using Azure Key Vault",
      difficulty: "intermediate",
      question:
        "A key vault uses the Azure RBAC permission model. An application's managed identity must be able to read the values of secrets, but must not create, change or delete them. Which built-in role should you assign at the key vault scope?",
      options: [
        { id: "A", text: "Key Vault Secrets User", rationale: "Correct. Key Vault Secrets User allows reading secret contents and nothing more, which matches the least-privilege requirement." },
        { id: "B", text: "Key Vault Reader", rationale: "Key Vault Reader can read metadata of the vault and its objects, but not the secret values the application needs." },
        { id: "C", text: "Key Vault Secrets Officer", rationale: "Secrets Officer can also create, update and delete secrets, which exceeds the requirement." },
        { id: "D", text: "Contributor", rationale: "Contributor manages the vault resource itself (management plane); it does not grant data-plane access to read secret values." },
      ],
      answer: "A",
      explanation:
        "With the RBAC permission model, data-plane access to keys, secrets and certificates is granted through dedicated Key Vault roles. Management-plane roles such as Contributor do not grant access to secret values.",
      reference: GUIDE,
    },
    {
      id: "sc500-d1-resource-lock",
      domain: "d1",
      objective: "Implement governance to enforce security and regulatory compliance",
      difficulty: "foundation",
      question:
        "Administrators must still be able to change the configuration of a production virtual network, but nobody should be able to delete it by accident, not even an Owner, without first removing a protection. What should you apply?",
      options: [
        { id: "A", text: "A ReadOnly resource lock", rationale: "ReadOnly blocks deletion but also blocks configuration changes, which administrators still need to make." },
        { id: "B", text: "An Azure Policy assignment with the Audit effect", rationale: "Audit only reports non-compliance; it does not prevent anything." },
        { id: "C", text: "Removing the Owner role from all administrators", rationale: "This would stop administrators from managing the network at all and does not specifically prevent accidental deletion by remaining privileged users." },
        { id: "D", text: "A CanNotDelete (Delete) resource lock", rationale: "Correct. A CanNotDelete lock allows authorised users to read and modify the resource but prevents deletion until the lock is removed." },
      ],
      answer: "D",
      explanation:
        "Resource locks apply to all users and roles, including Owners. CanNotDelete protects against deletion while allowing changes; ReadOnly protects against both, which can break normal operations.",
      reference: GUIDE,
    },
    {
      id: "sc500-d1-policy-deny",
      domain: "d1",
      objective: "Implement governance to enforce security and regulatory compliance",
      difficulty: "intermediate",
      question:
        "Security standards require that no storage account in your subscriptions can be created or updated with public network access enabled. Non-compliant deployments must fail. What should you implement?",
      options: [
        { id: "A", text: "A Defender for Cloud recommendation", rationale: "Recommendations show and help remediate non-compliant resources, but by themselves they do not block deployments." },
        { id: "B", text: "An Azure Policy assignment that uses the Deny effect for storage accounts with public network access enabled", rationale: "Correct. A policy with the Deny effect is evaluated during create and update requests and rejects resources that do not meet the rule." },
        { id: "C", text: "A CanNotDelete resource lock on each storage account", rationale: "Locks prevent deletion; they do not control which settings a new resource may have." },
        { id: "D", text: "A custom Azure role without storage permissions", rationale: "Removing permissions would block all storage deployments rather than enforcing a specific secure configuration." },
      ],
      answer: "B",
      explanation:
        "Azure Policy enforces rules at deployment time. Use Deny to prevent non-compliant configurations, Audit to report them, and remediation effects such as Modify or DeployIfNotExists to fix them.",
      reference: GUIDE,
    },

    /* ── Domain 2: Secure storage, databases, and networking ──────────────── */
    {
      id: "sc500-d2-private-endpoint",
      domain: "d2",
      objective: "Implement security for Azure network services",
      difficulty: "intermediate",
      question:
        "Applications in a virtual network must reach an Azure SQL Database through a private IP address in that virtual network, and the database must not be reachable over its public endpoint. What should you configure?",
      options: [
        { id: "A", text: "A virtual network service endpoint for Microsoft.Sql", rationale: "Service endpoints route traffic over the Azure backbone, but the database keeps its public endpoint and does not get a private IP address in your virtual network." },
        { id: "B", text: "A private endpoint for the logical server, and disable public network access", rationale: "Correct. A private endpoint gives the PaaS resource a private IP address in your virtual network; disabling public network access closes the public endpoint." },
        { id: "C", text: "A network security group on the database", rationale: "NSGs are applied to subnets and network interfaces, not to the Azure SQL Database service itself." },
        { id: "D", text: "Azure Bastion", rationale: "Bastion provides RDP and SSH access to virtual machines; it does not provide private connectivity to PaaS services." },
      ],
      answer: "B",
      explanation:
        "Private endpoints bring a PaaS resource into your virtual network through Azure Private Link. Combine them with private DNS so that the service name resolves to the private IP address.",
      reference: GUIDE,
    },
    {
      id: "sc500-d2-asg",
      domain: "d2",
      objective: "Implement security for Azure network services",
      difficulty: "intermediate",
      question:
        "Web servers and database servers share one subnet, and VMs are added and removed frequently. You want NSG rules such as \"allow TCP 1433 from web servers to database servers\" without maintaining lists of IP addresses. What should you use?",
      options: [
        { id: "A", text: "Application security groups as the source and destination in the NSG rule", rationale: "Correct. Application security groups group VM network interfaces by role, and NSG rules can refer to them instead of to IP addresses." },
        { id: "B", text: "Service tags", rationale: "Service tags represent Azure services such as Storage or Sql, not your own groups of VMs." },
        { id: "C", text: "A separate route table for each VM", rationale: "Route tables control where traffic is sent; they do not allow or deny it by workload role." },
        { id: "D", text: "Azure DDoS Protection", rationale: "DDoS Protection defends against volumetric attacks; it does not define traffic rules between VMs." },
      ],
      answer: "A",
      explanation:
        "Application security groups let you express network policy in terms of workloads. When a new VM's network interface joins the right group, the existing NSG rules apply automatically.",
      reference: GUIDE,
    },
    {
      id: "sc500-d2-stored-access-policy",
      domain: "d2",
      objective: "Implement security for storage accounts",
      difficulty: "advanced",
      question:
        "A partner receives service SAS tokens to read blobs in one container. If a token leaks, you must be able to revoke it quickly without rotating the storage account keys, which other applications use. What should you do when issuing the tokens?",
      options: [
        { id: "A", text: "Issue account SAS tokens with a very long expiry", rationale: "An account SAS is broader than needed, and a long expiry makes a leak worse. Ad hoc tokens can only be revoked by rotating the signing key." },
        { id: "B", text: "Make the container public instead of using SAS", rationale: "Anonymous public access removes all control over who reads the data." },
        { id: "C", text: "Share the storage account key with the partner", rationale: "The account key grants full access to the whole storage account and cannot be scoped or revoked without rotation." },
        { id: "D", text: "Associate the service SAS tokens with a stored access policy on the container", rationale: "Correct. A service SAS linked to a stored access policy can be revoked by changing or deleting the policy, without rotating the account keys." },
      ],
      answer: "D",
      explanation:
        "Stored access policies give server-side control over the start time, expiry and permissions of service SAS tokens. A user delegation SAS signed with Microsoft Entra credentials is another way to avoid using account keys.",
      reference: GUIDE,
    },
    {
      id: "sc500-d2-network-watcher",
      domain: "d2",
      objective: "Implement security for Azure network services",
      difficulty: "intermediate",
      question:
        "A VM cannot reach a back-end server on TCP 443. Several NSGs are applied at subnet and network interface level, and you need to find out quickly whether traffic is allowed or denied and which rule decides. Which tool should you use?",
      options: [
        { id: "A", text: "Azure Monitor metric alerts", rationale: "Metric alerts notify you about thresholds; they do not evaluate NSG rules for a specific flow." },
        { id: "B", text: "Microsoft Defender External Attack Surface Management", rationale: "EASM discovers internet-facing assets; it does not diagnose traffic between two VMs." },
        { id: "C", text: "Azure Network Watcher IP flow verify", rationale: "Correct. IP flow verify checks whether a packet to or from a VM is allowed or denied and names the security rule that made the decision." },
        { id: "D", text: "Azure Advisor cost recommendations", rationale: "Cost recommendations are unrelated to network security rule evaluation." },
      ],
      answer: "C",
      explanation:
        "Network Watcher diagnostics such as IP flow verify and effective security rules show the combined result of all NSGs that apply to a network interface, which is faster and more reliable than reading each NSG manually.",
      reference: GUIDE,
    },

    /* ── Domain 3: Secure compute ─────────────────────────────────────────── */
    {
      id: "sc500-d3-jit",
      domain: "d3",
      objective: "Implement security for servers and virtual machines (VMs)",
      difficulty: "foundation",
      question:
        "Management ports (RDP and SSH) on your Azure VMs should be closed by default and opened only for an approved user, from that user's IP address, for a limited time. Which feature provides this?",
      options: [
        { id: "A", text: "Azure Disk Encryption", rationale: "Disk encryption protects data at rest; it does not control network access to management ports." },
        { id: "B", text: "Azure Machine Configuration", rationale: "Machine Configuration audits and enforces settings inside the operating system; it does not open ports on request." },
        { id: "C", text: "Just-in-time (JIT) VM access in Defender for Servers", rationale: "Correct. JIT VM access locks down management ports with NSG or Azure Firewall rules and opens them on request for a specific source and time window." },
        { id: "D", text: "Agentless scanning for VMs", rationale: "Agentless scanning looks for vulnerabilities and secrets on disks; it does not control port access." },
      ],
      answer: "C",
      explanation:
        "JIT VM access reduces exposure to brute-force attacks on management ports. Azure Bastion is the complementary option when you want to remove public exposure of those ports altogether.",
      reference: GUIDE,
    },
    {
      id: "sc500-d3-defender-ai",
      domain: "d3",
      objective: "Implement security for AI",
      difficulty: "intermediate",
      question:
        "Your company runs generative AI applications built on Microsoft Foundry. The security team wants alerts on threats such as jailbreak attempts and sensitive data leakage in those AI workloads, surfaced in Defender for Cloud. What should you enable?",
      options: [
        { id: "A", text: "The Defender for AI Services plan in Defender for Cloud", rationale: "Correct. Defender for AI Services provides threat protection for AI workloads and raises security alerts, such as for jailbreak attempts and data leakage, in Defender for Cloud." },
        { id: "B", text: "Defender for Storage", rationale: "Defender for Storage protects storage accounts against threats such as malware uploads; it does not monitor AI model interactions." },
        { id: "C", text: "Azure DDoS Protection", rationale: "DDoS Protection handles network floods, not prompt-based attacks on AI applications." },
        { id: "D", text: "A ReadOnly resource lock on the Foundry resource", rationale: "Locks stop configuration changes and deletion; they do not detect threats." },
      ],
      answer: "A",
      explanation:
        "The outline lists enabling Defender for AI Services in cloud workload protection alongside Foundry guardrails and the Data and AI security dashboard. Guardrails reduce risky input and output; Defender for AI Services detects and alerts on threats.",
      reference: GUIDE,
    },
    {
      id: "sc500-d3-dspm-ai",
      domain: "d3",
      objective: "Implement security for AI",
      difficulty: "advanced",
      question:
        "Before rolling out Microsoft 365 Copilot more widely, the CISO wants to understand risks such as sensitive data being shared in prompts to AI apps and users interacting with unsanctioned AI tools. Which solution is designed to identify these risks?",
      options: [
        { id: "A", text: "Azure Firewall Premium", rationale: "Azure Firewall inspects network traffic in Azure; it does not assess data security risks in Copilot and AI app usage." },
        { id: "B", text: "Microsoft Entra Privileged Identity Management", rationale: "PIM controls privileged role activation, not data risks in AI interactions." },
        { id: "C", text: "Defender for Servers", rationale: "Defender for Servers protects VMs and servers, not Microsoft 365 Copilot data use." },
        { id: "D", text: "Microsoft Purview Data Security Posture Management (DSPM)", rationale: "Correct. The outline names Purview DSPM to identify risks related to Microsoft Copilot and AI apps, giving visibility into AI activity involving sensitive data and recommended policies." },
      ],
      answer: "D",
      explanation:
        "AI security starts with data. Purview DSPM shows how sensitive data is used with Copilot and other AI apps, while checking SharePoint for overexposed content reduces what Copilot can surface to users who should not see it.",
      reference: GUIDE,
    },
    {
      id: "sc500-d3-trusted-launch",
      domain: "d3",
      objective: "Implement security for servers and virtual machines (VMs)",
      difficulty: "intermediate",
      question:
        "New Azure VMs must be protected against boot kits and rootkits, with secure boot, a virtual TPM and boot integrity monitoring. Which setting should you choose when creating the VMs?",
      options: [
        { id: "A", text: "Standard security type with Azure Disk Encryption", rationale: "Disk encryption protects data at rest; the Standard security type does not provide secure boot or a vTPM." },
        { id: "B", text: "Trusted launch security type", rationale: "Correct. Trusted launch enables secure boot, a virtual TPM and boot integrity monitoring on Generation 2 VMs." },
        { id: "C", text: "An availability set", rationale: "Availability sets improve resilience against hardware failures; they add no boot protection." },
        { id: "D", text: "A network security group on the VM's network interface", rationale: "NSGs filter network traffic; they cannot protect the boot process." },
      ],
      answer: "B",
      explanation:
        "The VM security type is chosen at creation time. Trusted launch is the baseline for boot integrity; confidential VMs add hardware-based memory protection for more sensitive workloads.",
      reference: GUIDE,
    },

    /* ── Domain 4: Manage and monitor security posture ────────────────────── */
    {
      id: "sc500-d4-attack-path",
      domain: "d4",
      objective: "Manage security posture by using Defender for Cloud",
      difficulty: "advanced",
      question:
        "The security team wants Defender for Cloud to show how an attacker could chain an internet-exposed VM with a known vulnerability to reach a storage account containing sensitive data. Which capability, and which plan, provides this?",
      options: [
        { id: "A", text: "Attack path analysis, which requires the Defender CSPM plan", rationale: "Correct. Attack path analysis is a Defender CSPM capability that uses the cloud security graph to show exploitable paths to critical assets." },
        { id: "B", text: "Secure score, available with foundational CSPM", rationale: "Secure score summarises posture, but it does not show multi-step paths between resources." },
        { id: "C", text: "Regulatory compliance dashboard", rationale: "The compliance dashboard maps controls to standards; it does not model attack paths." },
        { id: "D", text: "Just-in-time VM access", rationale: "JIT reduces port exposure, but it does not analyse attack paths across resources." },
      ],
      answer: "A",
      explanation:
        "Foundational CSPM gives you recommendations and secure score. Defender CSPM adds advanced posture features such as attack path analysis, the cloud security explorer and agentless discovery.",
      reference: GUIDE,
    },
    {
      id: "sc500-d4-sentinel-roles",
      domain: "d4",
      objective: "Implement activity and event collection in Microsoft Sentinel",
      difficulty: "intermediate",
      question:
        "Tier 1 analysts must be able to assign incidents, change their status and add comments in Microsoft Sentinel, but must not create or edit analytics rules or workbooks. Which built-in role follows least privilege?",
      options: [
        { id: "A", text: "Microsoft Sentinel Reader", rationale: "Readers can view data, incidents and workbooks but cannot change incidents." },
        { id: "B", text: "Microsoft Sentinel Contributor", rationale: "Contributors can also create and edit analytics rules and workbooks, which exceeds the requirement." },
        { id: "C", text: "Microsoft Sentinel Responder", rationale: "Correct. Responders have Reader permissions plus the ability to manage incidents, such as assigning, changing status and commenting." },
        { id: "D", text: "Owner on the subscription", rationale: "Owner grants far more than needed, including the right to assign access to others." },
      ],
      answer: "C",
      explanation:
        "Sentinel's built-in roles build on each other: Reader views, Responder also manages incidents, Contributor also creates and edits content. Assign roles at the narrowest scope that works, usually the workspace or resource group.",
      reference: GUIDE,
    },
    {
      id: "sc500-d4-aws-connector",
      domain: "d4",
      objective: "Manage security posture by using Defender for Cloud",
      difficulty: "foundation",
      question:
        "Your organisation also runs workloads in Amazon Web Services. You want their security posture and recommendations to appear in Defender for Cloud alongside your Azure resources. What should you do?",
      options: [
        { id: "A", text: "Deploy Azure Bastion in the AWS account", rationale: "Bastion is an Azure service for VM access; it cannot be deployed into AWS and does not provide posture data." },
        { id: "B", text: "Add an AWS connector for the account in Defender for Cloud environment settings", rationale: "Correct. Defender for Cloud connects AWS accounts (and GCP projects) through native connectors, then assesses them and shows recommendations next to Azure resources." },
        { id: "C", text: "Create a Microsoft Sentinel watchlist of AWS resources", rationale: "Watchlists hold reference data for queries; they do not assess security posture." },
        { id: "D", text: "Assign an Azure Policy with the Deny effect to the AWS account", rationale: "Azure Policy assignments target Azure scopes; this alone does not onboard AWS into Defender for Cloud." },
      ],
      answer: "B",
      explanation:
        "Multicloud support is part of the posture area of SC-500. Connectors bring AWS and GCP into Defender for Cloud, and Azure Arc extends server protection to hybrid and multicloud machines.",
      reference: GUIDE,
    },
  ],
};
