import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free SC-300 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 28 October 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — SC-300 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-300",
};

export const sc300Questions: PracticeQuestionSet = {
  slug: "sc-300",
  intro:
    "15 original SC-300 practice questions across the four skill areas of the Microsoft study guide (skills measured as of 28 October 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "SC-300 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original SC-300 practice questions on Microsoft Entra ID, Conditional Access, workload identities, PIM and identity governance — each fully explained.",
  },
  questions: [
    /* ── Domain 1: Implement and manage user identities ───────────────────── */
    {
      id: "sc300-d1-admin-units",
      domain: "d1",
      objective: "Configure and manage a Microsoft Entra tenant",
      difficulty: "intermediate",
      question:
        "Regional support staff in Germany must be able to reset passwords only for users in the German subsidiary, not for anyone else in the tenant. What should you configure?",
      options: [
        { id: "A", text: "Assign the Helpdesk Administrator role at tenant scope", rationale: "A tenant-wide assignment would let the staff reset passwords for every eligible user, not only the German ones." },
        { id: "B", text: "Create an administrative unit for the German users and assign the Helpdesk Administrator role scoped to it", rationale: "Correct. Administrative units restrict the permissions of a role to the users, groups or devices you place in them." },
        { id: "C", text: "Create a Conditional Access policy for the German users", rationale: "Conditional Access controls how users sign in; it does not delegate administrative permissions." },
        { id: "D", text: "Create a dynamic group for the German users", rationale: "A group alone does not limit the scope of an administrator role." },
      ],
      answer: "B",
      explanation:
        "Administrative units are the standard way to delegate administration to part of an organisation, such as a region or department. If a role is assigned without an administrative unit scope, it applies to the whole tenant.",
      reference: { label: "Microsoft Learn — Administrative units in Microsoft Entra ID", url: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units" },
    },
    {
      id: "sc300-d1-cross-tenant-sync",
      domain: "d1",
      objective: "Implement and manage identities for external users and tenants",
      difficulty: "advanced",
      question:
        "Your organisation uses three Microsoft Entra tenants after an acquisition. Users from the main tenant must automatically get accounts in the other two tenants, and those accounts must be updated and removed when users change or leave. Which feature should you implement?",
      options: [
        { id: "A", text: "Inviting the users individually as B2B guests", rationale: "Manual invitations create accounts but do not keep them updated or remove them automatically." },
        { id: "B", text: "Microsoft Entra Connect Sync", rationale: "Entra Connect Sync synchronises from on-premises Active Directory to Microsoft Entra ID, not between Entra tenants." },
        { id: "C", text: "Administrative units", rationale: "Administrative units scope administration within one tenant; they do not create accounts in other tenants." },
        { id: "D", text: "Cross-tenant synchronization", rationale: "Correct. Cross-tenant synchronization automates creating, updating and deleting B2B collaboration users across tenants in an organisation." },
      ],
      answer: "D",
      explanation:
        "Cross-tenant synchronization is built for multitenant organisations. It creates B2B collaboration users in the target tenants, by default as external members, and keeps them in line with the source tenant.",
      reference: { label: "Microsoft Learn — Cross-tenant synchronization overview", url: "https://learn.microsoft.com/en-us/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-overview" },
    },
    {
      id: "sc300-d1-pta",
      domain: "d1",
      objective: "Implement and manage hybrid identity",
      difficulty: "intermediate",
      question:
        "A company synchronises its on-premises Active Directory to Microsoft Entra ID. Its security policy requires that cloud sign-ins are validated directly against on-premises domain controllers at sign-in time, so that on-premises account policies such as sign-in hours apply immediately. Which sign-in method meets this requirement?",
      options: [
        { id: "A", text: "Pass-through authentication", rationale: "Correct. With pass-through authentication, agents on premises validate the password against Active Directory when the user signs in, so on-premises account state and policies are enforced at sign-in." },
        { id: "B", text: "Password hash synchronisation only", rationale: "Password hash synchronisation validates sign-ins in Microsoft Entra ID against a synchronised hash, not against the domain controllers at sign-in time." },
        { id: "C", text: "Cloud-only accounts with self-service password reset", rationale: "Cloud-only accounts are not tied to on-premises Active Directory at all." },
        { id: "D", text: "Temporary Access Pass", rationale: "A Temporary Access Pass is a time-limited passcode for onboarding or recovery, not a hybrid sign-in method." },
      ],
      answer: "A",
      explanation:
        "Password hash synchronisation is simple and resilient, but authentication happens in the cloud. When validation must happen against on-premises domain controllers at sign-in, pass-through authentication is the fit; seamless SSO can be added to either method.",
      reference: GUIDE,
    },
    {
      id: "sc300-d1-dynamic-group",
      domain: "d1",
      objective: "Create, configure, and manage Microsoft Entra identities",
      difficulty: "foundation",
      question:
        "All users whose department attribute is \"Finance\" must be members of a security group, and membership must update automatically when a user's department changes. What should you create?",
      options: [
        { id: "A", text: "A security group with assigned membership", rationale: "Assigned membership means an administrator adds and removes members manually." },
        { id: "B", text: "An administrative unit", rationale: "Administrative units scope administration; they are not used to grant access as a security group." },
        { id: "C", text: "A security group with dynamic membership based on the department attribute", rationale: "Correct. Dynamic membership rules add and remove users automatically based on their attributes." },
        { id: "D", text: "A distribution list in Exchange Online", rationale: "Distribution lists are for email and are not security groups in Microsoft Entra ID." },
      ],
      answer: "C",
      explanation:
        "Dynamic membership groups keep membership in line with user attributes such as department or job title. This reduces manual work and the risk of forgotten access when people change roles.",
      reference: GUIDE,
    },

    /* ── Domain 2: Implement authentication and access management ─────────── */
    {
      id: "sc300-d2-tap",
      domain: "d2",
      objective: "Plan, implement, and manage Microsoft Entra user authentication",
      difficulty: "intermediate",
      question:
        "New employees should register a passkey (FIDO2) on their first day without ever being given a password. What should the administrator issue so they can sign in for the first time?",
      options: [
        { id: "A", text: "A self-service password reset link", rationale: "SSPR resets an existing password; it does not let a user without credentials sign in to register a passwordless method." },
        { id: "B", text: "A text message one-time code with no registered phone", rationale: "SMS requires a phone number already registered for the user, and it does not by itself avoid a password." },
        { id: "C", text: "A Temporary Access Pass", rationale: "Correct. A Temporary Access Pass is a time-limited passcode that users can use to sign in and onboard passwordless methods such as passkeys." },
        { id: "D", text: "A security defaults exemption", rationale: "Excluding users from security defaults weakens protection and does not give them a way to sign in." },
      ],
      answer: "C",
      explanation:
        "The Temporary Access Pass is the standard bootstrap for passwordless onboarding and for recovery when a user loses a strong method. It can be configured for one-time or multiple use within its lifetime.",
      reference: { label: "Microsoft Learn — Temporary Access Pass", url: "https://learn.microsoft.com/en-us/entra/identity/authentication/howto-authentication-temporary-access-pass" },
    },
    {
      id: "sc300-d2-report-only",
      domain: "d2",
      objective: "Plan, implement, and manage Microsoft Entra Conditional Access",
      difficulty: "foundation",
      question:
        "You have written a Conditional Access policy that blocks legacy authentication. Before enforcing it, you want to see which users and sign-ins it would affect without blocking anyone. What should you do?",
      options: [
        { id: "A", text: "Set the policy to report-only mode and review the results in the sign-in logs", rationale: "Correct. Report-only mode evaluates the policy on every sign-in and records the result, but does not enforce it." },
        { id: "B", text: "Turn the policy on for all users and wait for help desk tickets", rationale: "This enforces the policy immediately and risks locking people out." },
        { id: "C", text: "Turn on security defaults", rationale: "Security defaults is a separate baseline and does not show the impact of your custom policy." },
        { id: "D", text: "Create an access review for the policy", rationale: "Access reviews check group, app or role access; they do not simulate Conditional Access policies." },
      ],
      answer: "A",
      explanation:
        "Testing and troubleshooting policies is part of the outline. Report-only mode, together with the What If tool and sign-in logs, lets you measure impact before you switch a policy on.",
      reference: GUIDE,
    },
    {
      id: "sc300-d2-user-risk",
      domain: "d2",
      objective: "Manage risk by using Microsoft Entra ID Protection",
      difficulty: "intermediate",
      question:
        "Microsoft Entra ID Protection detects leaked credentials for some users, raising their user risk to high. You want these users to fix the problem themselves the next time they sign in, without help desk involvement. Which control should the risk-based Conditional Access policy require?",
      options: [
        { id: "A", text: "Block access permanently", rationale: "Blocking stops the attacker, but it also prevents self-remediation and requires administrator action." },
        { id: "B", text: "A compliant device only", rationale: "A compliant device does not change the leaked password, so the risk remains." },
        { id: "C", text: "Accept the Terms of use", rationale: "Terms of use have nothing to do with remediating compromised credentials." },
        { id: "D", text: "Multifactor authentication followed by a secure password change", rationale: "Correct. For user risk, requiring a secure password change after MFA lets users remediate leaked credentials themselves and clears the risk." },
      ],
      answer: "D",
      explanation:
        "A useful rule of thumb: sign-in risk is usually remediated with MFA, user risk with a secure password change. Both depend on users having registered for MFA beforehand. In current Conditional Access policies this is configured with the Require risk remediation grant control, which prompts password users for MFA followed by a secure password change.",
      reference: GUIDE,
    },
    {
      id: "sc300-d2-private-access",
      domain: "d2",
      objective: "Implement Global Secure Access",
      difficulty: "advanced",
      question:
        "Remote employees currently use a VPN to reach internal file servers and line-of-business apps by FQDN and IP address. The company wants to replace the VPN and apply Conditional Access to this traffic. Which solution should you deploy?",
      options: [
        { id: "A", text: "Microsoft Entra Internet Access", rationale: "Internet Access secures access to internet and SaaS destinations, not private internal resources." },
        { id: "B", text: "Microsoft Entra Private Access with the Global Secure Access client and private network connectors", rationale: "Correct. Private Access lets you define private FQDNs and IP ranges, brokers connections through private network connectors and protects access with Conditional Access, replacing a VPN." },
        { id: "C", text: "Cross-tenant access settings", rationale: "These control collaboration with other Entra tenants, not access to internal servers." },
        { id: "D", text: "Self-service password reset", rationale: "SSPR is about password recovery and gives no network access." },
      ],
      answer: "B",
      explanation:
        "Global Secure Access has separate traffic profiles: Private Access for internal resources, Internet Access for internet and SaaS traffic, and the Microsoft traffic profile for Microsoft 365. Users connect through the Global Secure Access client.",
      reference: { label: "Microsoft Learn — Microsoft Entra Private Access", url: "https://learn.microsoft.com/en-us/entra/global-secure-access/concept-private-access" },
    },

    /* ── Domain 3: Plan and implement workload identities ─────────────────── */
    {
      id: "sc300-d3-user-assigned-mi",
      domain: "d3",
      objective: "Plan and implement identities for applications and Azure workloads",
      difficulty: "intermediate",
      question:
        "Twenty virtual machines in a scale-out application all need the same permissions to read secrets from one Azure Key Vault. Machines are created and deleted frequently. Which identity approach is easiest to manage?",
      options: [
        { id: "A", text: "One user-assigned managed identity attached to all the virtual machines", rationale: "Correct. A user-assigned managed identity has its own lifecycle and can be shared by many resources, so you grant Key Vault access once." },
        { id: "B", text: "A system-assigned managed identity on each virtual machine", rationale: "System-assigned identities are tied to one resource each, so every new machine would need its own access grant, and the identity is deleted with the machine." },
        { id: "C", text: "A service principal with a client secret stored on each machine", rationale: "Secrets on machines must be rotated and protected, which managed identities avoid." },
        { id: "D", text: "A shared user account whose password is stored in a script", rationale: "Using a user account and stored password for a workload is insecure and hard to manage." },
      ],
      answer: "A",
      explanation:
        "System-assigned identities share the lifecycle of their resource and cannot be shared. User-assigned identities are independent and can be associated with more than one resource, which suits groups of interchangeable machines.",
      reference: { label: "Microsoft Learn — Managed identities for Azure resources", url: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview" },
    },
    {
      id: "sc300-d3-app-proxy",
      domain: "d3",
      objective: "Plan, implement, and monitor the integration of enterprise applications",
      difficulty: "intermediate",
      question:
        "A legacy web application runs on an internal server and uses Integrated Windows Authentication. Remote users must reach it through Microsoft Entra sign-in and Conditional Access, without opening inbound firewall ports. Which feature does the study guide name for this integration?",
      options: [
        { id: "A", text: "A SAML-based gallery application", rationale: "Gallery SAML apps are for applications that support federation; this app is internal and uses Windows authentication." },
        { id: "B", text: "Cross-tenant synchronization", rationale: "This synchronises users between tenants and has nothing to do with publishing apps." },
        { id: "C", text: "Microsoft Entra Application Proxy", rationale: "Correct. Application Proxy publishes on-premises web apps through outbound connectors, so users sign in with Microsoft Entra ID and Conditional Access applies." },
        { id: "D", text: "Microsoft Entra Connect Health", rationale: "Connect Health monitors hybrid identity components; it does not publish applications." },
      ],
      answer: "C",
      explanation:
        "The outline lists \"Design and implement integration for on-premises apps by using Microsoft Entra Application Proxy\". The connector makes only outbound connections, which is why no inbound ports are needed.",
      reference: GUIDE,
    },
    {
      id: "sc300-d3-app-permissions",
      domain: "d3",
      objective: "Plan and implement app registrations",
      difficulty: "advanced",
      question:
        "You register a background service that runs every night with no signed-in user and must read all users' calendars through Microsoft Graph. Which permission configuration is required?",
      options: [
        { id: "A", text: "Delegated permissions with user consent", rationale: "Delegated permissions act on behalf of a signed-in user, but this service runs without one." },
        { id: "B", text: "Application permissions with admin consent", rationale: "Correct. Services that run without a signed-in user use application permissions, which require an administrator to grant consent." },
        { id: "C", text: "An app role assigned to each user", rationale: "App roles describe roles inside your own application; they do not grant access to Microsoft Graph data." },
        { id: "D", text: "A Conditional Access policy for the app", rationale: "Conditional Access controls access conditions; it does not grant API permissions." },
      ],
      answer: "B",
      explanation:
        "Delegated permissions are limited to what the signed-in user can do; application permissions let the app act as itself across the tenant. Because application permissions can be powerful, they always need admin consent.",
      reference: GUIDE,
    },

    /* ── Domain 4: Plan and automate identity governance ──────────────────── */
    {
      id: "sc300-d4-access-package",
      domain: "d4",
      objective: "Plan and implement entitlement management in Microsoft Entra",
      difficulty: "intermediate",
      question:
        "Staff from a partner company need access to a Teams team, a SharePoint site and an app for a six-month project. They should request access themselves, a project manager should approve it, and access should end automatically. What should you create?",
      options: [
        { id: "A", text: "A guest invitation for each person, with manual removal later", rationale: "Manual invitations and removals do not give self-service requests, approval or automatic expiry." },
        { id: "B", text: "A dynamic group based on the partner's email domain", rationale: "A dynamic group does not provide a request and approval process or automatic expiry." },
        { id: "C", text: "A PIM eligible assignment for each resource", rationale: "PIM manages privileged roles and groups; it is not the tool for bundling project resources for external users." },
        { id: "D", text: "An access package in a catalog, with a policy for the connected organisation that includes approval and expiration", rationale: "Correct. Access packages bundle resources and define who can request them, who approves, and when access expires." },
      ],
      answer: "D",
      explanation:
        "Entitlement management handles the full access lifecycle for internal and external users. Connected organisations let you define which partner users can request a package, and expiry removes access without manual clean-up.",
      reference: GUIDE,
    },
    {
      id: "sc300-d4-access-review",
      domain: "d4",
      objective: "Plan, implement, and manage access reviews in Microsoft Entra",
      difficulty: "foundation",
      question:
        "Auditors require that guest users' membership of a sensitive Microsoft 365 group is confirmed by the group owners every quarter, and that access is removed if it is not confirmed. What should you configure?",
      options: [
        { id: "A", text: "A recurring access review of the group, scoped to guest users, with auto-apply results", rationale: "Correct. Access reviews can recur quarterly, target guests, use group owners as reviewers and automatically remove access that is denied or not reviewed, depending on settings." },
        { id: "B", text: "A Conditional Access policy for guest users", rationale: "Conditional Access controls sign-in conditions; it does not confirm whether access is still needed." },
        { id: "C", text: "Terms of use", rationale: "Terms of use ask users to accept a document; they do not involve owners confirming access." },
        { id: "D", text: "An administrative unit for guest users", rationale: "Administrative units scope administration; they do not review access." },
      ],
      answer: "A",
      explanation:
        "Access reviews answer the question \"does this person still need this access?\". Recurrence, reviewer choice and auto-apply settings turn them into an audit-ready control.",
      reference: GUIDE,
    },
    {
      id: "sc300-d4-pim",
      domain: "d4",
      objective: "Plan and implement privileged access",
      difficulty: "intermediate",
      question:
        "Administrators should hold the Exchange Administrator role only when they need it, for a limited time, after giving a justification and getting approval. How should you assign the role in Privileged Identity Management?",
      options: [
        { id: "A", text: "As a permanent active assignment", rationale: "An active assignment grants the role all the time with no activation step." },
        { id: "B", text: "Through a dynamic group that has the role assigned permanently", rationale: "Dynamic membership groups cannot be assigned Microsoft Entra roles, and a permanent group assignment would add no activation, justification or approval anyway." },
        { id: "C", text: "As a Conditional Access authentication context", rationale: "Authentication context can strengthen requirements for sensitive actions, but it does not make a role assignment just-in-time." },
        { id: "D", text: "As an eligible assignment with role settings that require justification and approval on activation", rationale: "Correct. Eligible users must activate the role when needed, and PIM role settings can require justification, MFA and approval, with a limited activation duration." },
      ],
      answer: "D",
      explanation:
        "Eligible and active assignments give the same privileges; the difference is that eligible users must activate first. Just-in-time, time-bound activation with approval is the core idea of PIM.",
      reference: { label: "Microsoft Learn — What is Privileged Identity Management?", url: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure" },
    },
    {
      id: "sc300-d4-diagnostic-settings",
      domain: "d4",
      objective: "Monitor identity activity by using logs, workbooks, and reports",
      difficulty: "intermediate",
      question:
        "The security team wants to keep Microsoft Entra sign-in and audit logs longer than the built-in retention and query them with KQL alongside other logs. What should you configure?",
      options: [
        { id: "A", text: "An access review of the logs", rationale: "Access reviews check access rights; they do not store or route logs." },
        { id: "B", text: "Identity Secure Score", rationale: "Secure Score measures security posture; it does not export logs." },
        { id: "C", text: "Diagnostic settings that send the logs to a Log Analytics workspace", rationale: "Correct. Diagnostic settings route Entra logs to destinations such as a Log Analytics workspace, where you can keep them longer and query them with KQL." },
        { id: "D", text: "A daily CSV download from the sign-in logs blade", rationale: "Manual downloads are error-prone and do not support KQL queries alongside other logs." },
      ],
      answer: "C",
      explanation:
        "Diagnostic settings can send logs to a Log Analytics workspace, a storage account or Azure Event Hubs. Log Analytics is the choice when you want KQL queries and workbooks.",
      reference: GUIDE,
    },
  ],
};
