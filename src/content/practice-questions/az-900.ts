import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free AZ-900 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 20 July 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — AZ-900 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900",
};

export const az900Questions: PracticeQuestionSet = {
  slug: "az-900",
  intro:
    "15 original AZ-900 practice questions across the three skill areas of the Microsoft study guide (skills measured as of 20 July 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AZ-900 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original AZ-900 practice questions on cloud concepts, Azure architecture, storage, identity, governance and monitoring — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: Describe cloud concepts ────────────────────────────────── */
    {
      id: "az900-d1-shared-responsibility",
      domain: "d1",
      objective: "Describe the shared responsibility model",
      difficulty: "foundation",
      question:
        "Your company moves its email to a software as a service (SaaS) offering. Under the shared responsibility model, which responsibility stays with your company?",
      options: [
        { id: "A", text: "Patching the operating system of the mail servers", rationale: "With SaaS, the provider runs and patches the underlying servers and operating systems." },
        { id: "B", text: "Physical security of the datacentre", rationale: "Physical security is always the cloud provider's responsibility." },
        { id: "C", text: "The data stored in the service and the user accounts that access it", rationale: "Correct. Whatever the service type, the customer remains responsible for its information and data, its devices, and its accounts and identities." },
        { id: "D", text: "Maintaining the network hardware", rationale: "Network hardware belongs to the provider in every cloud service type." },
      ],
      answer: "C",
      explanation:
        "The further you move from IaaS towards SaaS, the more the provider takes over. Data, devices, accounts and identities never move to the provider, so they remain the customer's job even with SaaS.",
      reference: GUIDE,
    },
    {
      id: "az900-d1-consumption",
      domain: "d1",
      objective: "Describe the consumption-based model",
      difficulty: "foundation",
      question:
        "A start-up wants to avoid buying servers up front and pay only for the compute it actually uses each month. Which characteristic of cloud computing does this describe?",
      options: [
        { id: "A", text: "The consumption-based model", rationale: "Correct. In a consumption-based model you pay for the resources you use, with no up-front infrastructure cost, which turns capital expenditure into operational expenditure." },
        { id: "B", text: "High availability", rationale: "High availability is about keeping services running, not about how you pay." },
        { id: "C", text: "The shared responsibility model", rationale: "This model splits security and management duties; it does not describe billing." },
        { id: "D", text: "A private cloud", rationale: "A private cloud is usually owned or dedicated to one organisation and often requires the up-front investment the start-up wants to avoid." },
      ],
      answer: "A",
      explanation:
        "Pay-as-you-go billing is the core of the consumption-based model. It removes up-front hardware costs and lets you stop paying when you stop using resources.",
      reference: GUIDE,
    },
    {
      id: "az900-d1-hybrid",
      domain: "d1",
      objective: "Identify appropriate use cases for each cloud model",
      difficulty: "intermediate",
      question:
        "A bank must keep a legacy core system in its own datacentre for regulatory reasons, but wants to run its new customer web apps in Azure and connect the two. Which cloud model fits?",
      options: [
        { id: "A", text: "Public cloud only", rationale: "Public cloud only would mean moving the legacy system out of the bank's datacentre, which the regulation does not allow." },
        { id: "B", text: "Hybrid cloud", rationale: "Correct. A hybrid cloud combines on-premises or private infrastructure with public cloud resources that work together." },
        { id: "C", text: "Private cloud only", rationale: "Private cloud only would leave out Azure for the new web apps." },
        { id: "D", text: "Software as a service", rationale: "SaaS is a service type, not a cloud model, and does not describe how on-premises and cloud resources are combined." },
      ],
      answer: "B",
      explanation:
        "Hybrid is the answer whenever some workloads must stay on premises or in a private cloud while others run in the public cloud. Do not confuse cloud models (public, private, hybrid) with service types (IaaS, PaaS, SaaS).",
      reference: GUIDE,
    },
    {
      id: "az900-d1-paas",
      domain: "d1",
      objective: "Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)",
      difficulty: "intermediate",
      question:
        "Developers want to deploy their web application code without managing virtual machines, operating system updates or the web server, while still controlling the application itself. Which service type should they choose?",
      options: [
        { id: "A", text: "Infrastructure as a service (IaaS)", rationale: "With IaaS the developers would still manage the operating system and web server on the virtual machines." },
        { id: "B", text: "Software as a service (SaaS)", rationale: "SaaS delivers a finished application; the developers could not deploy their own code." },
        { id: "C", text: "On-premises hosting", rationale: "On premises they would manage everything, including the hardware." },
        { id: "D", text: "Platform as a service (PaaS)", rationale: "Correct. PaaS provides a managed platform, so developers focus on their application and data while the provider handles the operating system and runtime." },
      ],
      answer: "D",
      explanation:
        "PaaS is the middle ground: you bring the application, the provider runs the platform. Azure App Service is a typical example of PaaS for web apps.",
      reference: GUIDE,
    },

    /* ── Domain 2: Describe Azure architecture and services ───────────────── */
    {
      id: "az900-d2-availability-zones",
      domain: "d2",
      objective: "Describe availability zones",
      difficulty: "foundation",
      question:
        "You want an application to keep running if one datacentre in an Azure region fails, without deploying to a second region. What should you use?",
      options: [
        { id: "A", text: "A second resource group", rationale: "Resource groups are logical containers; they do not place resources in separate datacentres." },
        { id: "B", text: "Availability zones", rationale: "Correct. Availability zones are physically separate datacentre locations within one Azure region, each with independent power, cooling and networking." },
        { id: "C", text: "A sovereign region", rationale: "Sovereign regions are isolated instances of Azure for compliance or legal reasons; they are not a resilience feature inside a region." },
        { id: "D", text: "A management group", rationale: "Management groups organise subscriptions for governance; they have no effect on where resources run." },
      ],
      answer: "B",
      explanation:
        "Spreading resources across availability zones protects against the loss of a datacentre within a region. Protection against the loss of a whole region needs a second region, for example its region pair.",
      reference: GUIDE,
    },
    {
      id: "az900-d2-hierarchy",
      domain: "d2",
      objective: "Describe the hierarchy of resource groups, subscriptions, and management groups",
      difficulty: "intermediate",
      question:
        "Your organisation has 12 subscriptions and wants to apply one Azure Policy assignment to all of them at once. At which level should you assign it?",
      options: [
        { id: "A", text: "A management group that contains the subscriptions", rationale: "Correct. Management groups sit above subscriptions, and policies and access assigned there are inherited by every subscription inside them." },
        { id: "B", text: "Each resource group separately", rationale: "This works in principle but means many separate assignments, which is exactly what the organisation wants to avoid." },
        { id: "C", text: "A single virtual network", rationale: "A virtual network is a resource; it is not a scope that contains subscriptions." },
        { id: "D", text: "An availability zone", rationale: "Availability zones are physical locations, not a governance scope." },
      ],
      answer: "A",
      explanation:
        "The hierarchy from top to bottom is management groups, subscriptions, resource groups and resources. Settings applied at a higher level are inherited by everything below it.",
      reference: GUIDE,
    },
    {
      id: "az900-d2-redundancy",
      domain: "d2",
      objective: "Describe redundancy options",
      difficulty: "advanced",
      question:
        "A storage account must survive a full regional outage, and the application must be able to read the data from the secondary region even before Microsoft initiates a failover. Which redundancy option meets this requirement?",
      options: [
        { id: "A", text: "Locally redundant storage (LRS)", rationale: "LRS keeps all copies in a single datacentre in the primary region, so a regional outage would make the data unavailable." },
        { id: "B", text: "Zone-redundant storage (ZRS)", rationale: "ZRS spreads copies across availability zones in one region but does not replicate to a second region." },
        { id: "C", text: "Read-access geo-redundant storage (RA-GRS)", rationale: "Correct. RA-GRS replicates data to a secondary region and permits read access to that secondary copy." },
        { id: "D", text: "Geo-redundant storage (GRS) without read access", rationale: "GRS replicates to a secondary region, but without the read-access option the secondary data cannot be read until a failover." },
      ],
      answer: "C",
      explanation:
        "LRS and ZRS protect within one region; GRS and GZRS add a copy in a secondary region. Only the read-access variants (RA-GRS and RA-GZRS) let the application read from the secondary region.",
      reference: { label: "Microsoft Learn — Azure Storage redundancy", url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy" },
    },
    {
      id: "az900-d2-archive-tier",
      domain: "d2",
      objective: "Describe storage tiers",
      difficulty: "intermediate",
      question:
        "You must keep scanned contracts for ten years at the lowest storage cost. They are almost never read, and a retrieval delay of several hours is acceptable. Which blob access tier fits best?",
      options: [
        { id: "A", text: "Hot", rationale: "The hot tier has the highest storage cost and is meant for frequently accessed data." },
        { id: "B", text: "Cool", rationale: "The cool tier is cheaper than hot but is still an online tier priced for data that is read occasionally." },
        { id: "C", text: "Cold", rationale: "The cold tier is for rarely accessed data that still needs fast retrieval, which costs more to store than the requirement needs." },
        { id: "D", text: "Archive", rationale: "Correct. The archive tier is an offline tier for rarely accessed data with flexible latency requirements; blobs must be rehydrated to an online tier before they can be read." },
      ],
      answer: "D",
      explanation:
        "Hot, cool and cold are online tiers; archive is offline and has the lowest storage cost. Reading archived data requires rehydration, which can take hours.",
      reference: { label: "Microsoft Learn — Access tiers for blob data", url: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview" },
    },
    {
      id: "az900-d2-expressroute",
      domain: "d2",
      objective: "Describe Azure compute and networking services",
      difficulty: "intermediate",
      question:
        "A company needs a private connection between its on-premises network and Azure that does not travel over the public internet. Which service provides this?",
      options: [
        { id: "A", text: "Azure ExpressRoute", rationale: "Correct. ExpressRoute provides a private, dedicated connection from on-premises networks to Microsoft cloud services through a connectivity provider, without going over the public internet." },
        { id: "B", text: "Azure VPN Gateway with a site-to-site VPN", rationale: "A site-to-site VPN is encrypted, but its traffic still travels over the public internet." },
        { id: "C", text: "Virtual network peering", rationale: "Peering connects Azure virtual networks to each other, not an on-premises network to Azure." },
        { id: "D", text: "Azure DNS", rationale: "Azure DNS hosts DNS domains and resolves names; it does not provide connectivity." },
      ],
      answer: "A",
      explanation:
        "Both VPN Gateway and ExpressRoute connect on-premises networks to Azure. The deciding detail is the path: VPN uses an encrypted tunnel over the internet, while ExpressRoute uses a private connection.",
      reference: GUIDE,
    },
    {
      id: "az900-d2-conditional-access",
      domain: "d2",
      objective: "Describe Microsoft Entra Conditional Access",
      difficulty: "intermediate",
      question:
        "Users should be required to complete multifactor authentication only when they sign in from outside the corporate network. Which feature enforces this?",
      options: [
        { id: "A", text: "Azure role-based access control (RBAC)", rationale: "RBAC decides what a signed-in user can do with Azure resources; it does not evaluate sign-in conditions such as location." },
        { id: "B", text: "Resource locks", rationale: "Resource locks protect resources from deletion or modification; they have nothing to do with sign-ins." },
        { id: "C", text: "Microsoft Entra Conditional Access", rationale: "Correct. Conditional Access evaluates signals such as user, location and device during sign-in and can require MFA, allow or block access." },
        { id: "D", text: "Azure Policy", rationale: "Azure Policy evaluates resource properties, not user sign-ins." },
      ],
      answer: "C",
      explanation:
        "Conditional Access works like an if-then rule at sign-in: if certain conditions are met, then a control such as MFA applies. That allows stronger checks in risky situations without burdening every sign-in.",
      reference: GUIDE,
    },

    /* ── Domain 3: Describe Azure management and governance ───────────────── */
    {
      id: "az900-d3-resource-lock",
      domain: "d3",
      objective: "Describe the purpose of resource locks",
      difficulty: "foundation",
      question:
        "Administrators must still be able to change the settings of a production database, but nobody, including owners, should be able to delete it by accident. What should you apply?",
      options: [
        { id: "A", text: "A ReadOnly lock", rationale: "A ReadOnly lock would also block the required changes to settings." },
        { id: "B", text: "A CanNotDelete (Delete) lock", rationale: "Correct. A CanNotDelete lock lets authorised users read and modify the resource but prevents deletion until the lock is removed." },
        { id: "C", text: "A tag named \"DoNotDelete\"", rationale: "Tags are metadata; they do not enforce anything." },
        { id: "D", text: "Moving it to a new subscription", rationale: "A new subscription does not by itself protect a resource from deletion." },
      ],
      answer: "B",
      explanation:
        "Resource locks apply even to users with high permissions. CanNotDelete still allows changes; ReadOnly blocks both changes and deletion.",
      reference: { label: "Microsoft Learn — Lock your resources", url: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources" },
    },
    {
      id: "az900-d3-policy",
      domain: "d3",
      objective: "Describe the purpose of Azure Policy",
      difficulty: "intermediate",
      question:
        "For data residency, your company wants to make sure that new resources can only be created in two specific Azure regions. Which service enforces this?",
      options: [
        { id: "A", text: "Azure Advisor", rationale: "Advisor makes recommendations; it does not prevent resources from being created." },
        { id: "B", text: "Azure role-based access control (RBAC)", rationale: "RBAC controls who can create resources, not which properties such as location they may have." },
        { id: "C", text: "Microsoft Defender for Cloud", rationale: "Defender for Cloud assesses and improves security posture; it is not the tool for enforcing allowed locations." },
        { id: "D", text: "Azure Policy", rationale: "Correct. Azure Policy evaluates resource properties against rules and can deny the creation of resources that do not comply, for example with an allowed locations rule." },
      ],
      answer: "D",
      explanation:
        "Think of RBAC as \"who can act\" and Azure Policy as \"what is allowed to exist\". Restricting regions, SKUs or required tags is a typical Azure Policy task.",
      reference: GUIDE,
    },
    {
      id: "az900-d3-tags",
      domain: "d3",
      objective: "Describe the purpose of tags",
      difficulty: "foundation",
      question:
        "Finance wants to see Azure costs per department, even though resources from several departments share the same resource groups. What is the simplest way to make this possible?",
      options: [
        { id: "A", text: "Add a department tag to each resource and group costs by that tag", rationale: "Correct. Tags are name-value pairs on resources that you can use to organise resources and to filter and group costs." },
        { id: "B", text: "Apply a ReadOnly lock to each resource group", rationale: "Locks prevent changes; they do not help attribute costs." },
        { id: "C", text: "Create a separate Microsoft Entra tenant for each department", rationale: "This is a large organisational change and is not needed to report costs." },
        { id: "D", text: "Use the pricing calculator", rationale: "The pricing calculator estimates the cost of planned resources; it does not report actual spending per department." },
      ],
      answer: "A",
      explanation:
        "Tags add business information such as department, cost centre or environment to resources. Cost management can then filter and group actual costs by those tags.",
      reference: GUIDE,
    },
    {
      id: "az900-d3-monitoring",
      domain: "d3",
      objective: "Describe monitoring tools in Azure",
      difficulty: "intermediate",
      question:
        "Your team wants personalised recommendations to improve the reliability, security, performance and cost of its existing Azure resources. Which tool provides this?",
      options: [
        { id: "A", text: "Azure Service Health", rationale: "Service Health informs you about Azure service incidents, planned maintenance and health advisories that affect you, not about optimising your own resources." },
        { id: "B", text: "Azure Monitor alerts", rationale: "Alerts notify you when a condition in your monitoring data is met; they do not give best-practice recommendations." },
        { id: "C", text: "Azure Advisor", rationale: "Correct. Azure Advisor analyses your resource configuration and usage and gives personalised best-practice recommendations." },
        { id: "D", text: "The pricing calculator", rationale: "The pricing calculator estimates costs before you deploy; it does not analyse existing resources." },
      ],
      answer: "C",
      explanation:
        "Remember the three monitoring tools by their question: Advisor asks \"how can I improve my resources?\", Service Health \"is Azure itself having a problem that affects me?\", and Azure Monitor \"what are my resources and applications doing?\".",
      reference: GUIDE,
    },
    {
      id: "az900-d3-arc",
      domain: "d3",
      objective: "Describe the purpose of Azure Arc",
      difficulty: "advanced",
      question:
        "A company runs servers on premises and in another cloud provider. It wants to manage and govern them from Azure, for example with Azure Policy, as if they were Azure resources. Which service should it use?",
      options: [
        { id: "A", text: "Azure Resource Manager templates", rationale: "ARM templates deploy Azure resources as code; on their own they do not bring external servers under Azure management." },
        { id: "B", text: "Azure Arc", rationale: "Correct. Azure Arc extends Azure management and governance to resources outside Azure, such as on-premises and multicloud servers." },
        { id: "C", text: "Azure Cloud Shell", rationale: "Cloud Shell is a browser-based shell for running Azure CLI and PowerShell; it does not project external servers into Azure." },
        { id: "D", text: "Azure Migrate", rationale: "Azure Migrate helps you move workloads into Azure; the requirement is to manage them where they are." },
      ],
      answer: "B",
      explanation:
        "Azure Arc is the answer when resources stay outside Azure but should be managed with Azure tools. Azure Migrate is the answer when they should move into Azure.",
      reference: GUIDE,
    },
  ],
};
