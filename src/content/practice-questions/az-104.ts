import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free AZ-104 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 17 April 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — AZ-104 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104",
};

export const az104Questions: PracticeQuestionSet = {
  slug: "az-104",
  intro:
    "15 original AZ-104 practice questions across the five skill areas of the Microsoft study guide (skills measured as of 17 April 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AZ-104 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original AZ-104 practice questions on Entra ID, RBAC, Azure Policy, storage, VMs, networking and backup — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: Manage Azure identities and governance ─────────────────── */
    {
      id: "az104-d1-rbac-scope",
      domain: "d1",
      objective: "Manage access to Azure resources",
      difficulty: "intermediate",
      question:
        "A developer must be able to create and manage all resources in the resource group RG-Dev, but must not be able to grant access to other users. The access must not apply to any other resource group. What should you do?",
      options: [
        { id: "A", text: "Assign the Owner role at the subscription scope", rationale: "Owner can grant access to others, and the subscription scope covers every resource group." },
        { id: "B", text: "Assign the Contributor role at the RG-Dev resource group scope", rationale: "Correct. Contributor can manage all resources but cannot assign roles, and the resource group scope limits it to RG-Dev." },
        { id: "C", text: "Assign the Reader role at the RG-Dev resource group scope", rationale: "Reader can only view resources; the developer could not create or change anything." },
        { id: "D", text: "Assign the User Access Administrator role at the RG-Dev scope", rationale: "This role manages access assignments only, which is exactly what the developer must not do." },
      ],
      answer: "B",
      explanation:
        "Pick the least-privileged built-in role and the narrowest scope that meets the need. Role assignments are inherited downwards, so a subscription-level assignment would reach every resource group.",
      reference: GUIDE,
    },
    {
      id: "az104-d1-policy-vs-lock",
      domain: "d1",
      objective: "Manage Azure subscriptions and governance",
      difficulty: "intermediate",
      question:
        "Your organisation requires that new resources can only be created in the West Europe and North Europe regions. Requests for other regions must be blocked. What should you use?",
      options: [
        { id: "A", text: "A ReadOnly resource lock on the subscription", rationale: "A ReadOnly lock blocks changes to all resources regardless of region; it cannot allow some regions and deny others." },
        { id: "B", text: "A tag named Region on every resource group", rationale: "Tags are metadata; on their own they do not block deployments." },
        { id: "C", text: "An Azure Policy assignment that uses the allowed locations definition", rationale: "Correct. Azure Policy can deny deployments whose location is not in an approved list." },
        { id: "D", text: "A budget with an alert at 100%", rationale: "Budgets track spending and raise alerts; they do not control where resources are deployed." },
      ],
      answer: "C",
      explanation:
        "Azure Policy evaluates resource properties such as location, SKU or tags and can deny non-compliant requests. Resource locks protect existing resources from deletion or modification but cannot apply conditions.",
      reference: GUIDE,
    },
    {
      id: "az104-d1-lock",
      domain: "d1",
      objective: "Manage Azure subscriptions and governance",
      difficulty: "foundation",
      question:
        "A production resource group contains critical resources. Administrators must still be able to change settings on these resources, but nobody should be able to delete them by accident. What should you configure?",
      options: [
        { id: "A", text: "A CanNotDelete (Delete) lock on the resource group", rationale: "Correct. A delete lock allows reading and modifying resources but prevents deleting them." },
        { id: "B", text: "A ReadOnly lock on the resource group", rationale: "A ReadOnly lock would also block the required configuration changes." },
        { id: "C", text: "The Reader role for all administrators", rationale: "Reader would stop administrators from changing settings at all." },
        { id: "D", text: "A tag named DoNotDelete", rationale: "Tags do not enforce anything by themselves." },
      ],
      answer: "A",
      explanation:
        "Azure has two lock levels: CanNotDelete (shown as Delete in the portal) and ReadOnly. Locks apply to all users, including Owners, until the lock is removed.",
      reference: GUIDE,
    },
    {
      id: "az104-d1-sspr",
      domain: "d1",
      objective: "Manage Microsoft Entra users and groups",
      difficulty: "foundation",
      question:
        "The help desk spends a lot of time resetting forgotten passwords. You want a pilot group of users to be able to reset their own passwords after verifying their identity. What should you configure in Microsoft Entra ID?",
      options: [
        { id: "A", text: "Azure Policy", rationale: "Azure Policy governs Azure resources, not user password resets." },
        { id: "B", text: "A resource lock on the directory", rationale: "Resource locks apply to Azure resources and have nothing to do with passwords." },
        { id: "C", text: "Guest user access", rationale: "Guest access concerns external users, not password resets for employees." },
        { id: "D", text: "Self-service password reset (SSPR) scoped to the pilot group", rationale: "Correct. SSPR can be enabled for a selected group and requires users to verify their identity with the configured methods." },
      ],
      answer: "D",
      explanation:
        "SSPR can be enabled for none, selected or all users. Starting with a selected group is a common way to pilot it before rolling it out to everyone.",
      reference: GUIDE,
    },

    /* ── Domain 2: Implement and manage storage ───────────────────────────── */
    {
      id: "az104-d2-stored-access-policy",
      domain: "d2",
      objective: "Configure access to storage",
      difficulty: "advanced",
      question:
        "You issue several service SAS tokens for a blob container to a partner. You need the ability to revoke all of them at once later without regenerating the storage account keys. What should you do when creating the tokens?",
      options: [
        { id: "A", text: "Create them as account SAS tokens", rationale: "An account SAS cannot be linked to a stored access policy; revoking it requires rotating the key that signed it." },
        { id: "B", text: "Associate them with a stored access policy on the container", rationale: "Correct. Changing or deleting the stored access policy revokes every service SAS linked to it." },
        { id: "C", text: "Set a very long expiry time", rationale: "A long expiry makes the problem worse and does not provide revocation." },
        { id: "D", text: "Enable blob versioning", rationale: "Versioning keeps previous versions of blobs; it does not control SAS validity." },
      ],
      answer: "B",
      explanation:
        "A stored access policy defines start, expiry and permissions on the container side. Service SAS tokens that reference it can be revoked centrally, which is not possible for ad hoc tokens without key rotation.",
      reference: GUIDE,
    },
    {
      id: "az104-d2-redundancy",
      domain: "d2",
      objective: "Configure and manage storage accounts",
      difficulty: "intermediate",
      question:
        "A storage account must stay available if a single datacentre in the primary region fails, and data must also be copied to a secondary region in case the whole primary region is lost. Which redundancy option meets both requirements?",
      options: [
        { id: "A", text: "Locally redundant storage (LRS)", rationale: "LRS keeps copies within one datacentre only, so it protects against neither a datacentre nor a regional outage." },
        { id: "B", text: "Zone-redundant storage (ZRS)", rationale: "ZRS spreads data across availability zones in one region but does not copy it to a secondary region." },
        { id: "C", text: "Geo-zone-redundant storage (GZRS)", rationale: "Correct. GZRS replicates across availability zones in the primary region and asynchronously to a secondary region." },
        { id: "D", text: "Geo-redundant storage (GRS)", rationale: "GRS copies to a secondary region, but within the primary region it uses LRS, so a single datacentre failure is not covered by zones." },
      ],
      answer: "C",
      explanation:
        "Remember the two dimensions: zones within the primary region (ZRS) and a copy in a secondary region (GRS). GZRS combines both; RA-GZRS adds read access to the secondary.",
      reference: GUIDE,
    },
    {
      id: "az104-d2-lifecycle",
      domain: "d2",
      objective: "Configure Azure Files and Azure Blob Storage",
      difficulty: "intermediate",
      question:
        "Log files in a blob container are read often in their first month, rarely afterwards, and must be deleted after one year. You want this handled automatically with minimal cost. What should you configure?",
      options: [
        { id: "A", text: "A blob lifecycle management policy that moves blobs to cooler tiers by age and deletes them after 365 days", rationale: "Correct. Lifecycle management rules can tier and delete blobs automatically based on age." },
        { id: "B", text: "Soft delete for blobs with a 365-day retention period", rationale: "Soft delete only keeps deleted blobs recoverable; it neither tiers nor deletes data automatically." },
        { id: "C", text: "Object replication to a second storage account", rationale: "Object replication copies blobs to another account, which adds cost rather than reducing it." },
        { id: "D", text: "Blob versioning", rationale: "Versioning keeps previous versions of blobs and does not tier or expire the current ones." },
      ],
      answer: "A",
      explanation:
        "Lifecycle management policies use rules based on conditions such as days since modification to move blobs between access tiers or delete them. This is the standard way to cut storage costs for ageing data.",
      reference: GUIDE,
    },

    /* ── Domain 3: Deploy and manage Azure compute resources ──────────────── */
    {
      id: "az104-d3-availability-zones",
      domain: "d3",
      objective: "Create and configure virtual machines",
      difficulty: "intermediate",
      question:
        "Two virtual machines run the same web application. The solution must keep running if an entire datacentre in the region becomes unavailable. How should you deploy the VMs?",
      options: [
        { id: "A", text: "In the same availability set", rationale: "Availability sets spread VMs across fault and update domains within one datacentre, so a full datacentre outage would affect both." },
        { id: "B", text: "In different resource groups", rationale: "Resource groups are a management boundary, not a physical one." },
        { id: "C", text: "On the same dedicated host", rationale: "A single host is a single point of failure." },
        { id: "D", text: "In different availability zones", rationale: "Correct. Availability zones are physically separate locations within a region, so one zone can fail while the other keeps running." },
      ],
      answer: "D",
      explanation:
        "Availability sets protect against rack-level hardware failures and maintenance; availability zones protect against the loss of a whole datacentre. Pick the option that matches the failure the scenario describes.",
      reference: GUIDE,
    },
    {
      id: "az104-d3-bicep-export",
      domain: "d3",
      objective: "Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files",
      difficulty: "intermediate",
      question:
        "Your team has an existing ARM template in JSON and wants to maintain it as a Bicep file from now on. What is the most efficient way to start?",
      options: [
        { id: "A", text: "Rewrite the template by hand in PowerShell", rationale: "PowerShell scripts are not Bicep, and rewriting by hand is slow and error-prone." },
        { id: "B", text: "Decompile the ARM template into a Bicep file with the Bicep tooling, then review the result", rationale: "Correct. The Bicep CLI can decompile JSON templates into Bicep; the output should be reviewed and tidied." },
        { id: "C", text: "Rename the .json file to .bicep", rationale: "Bicep has its own syntax; renaming the file does not convert it." },
        { id: "D", text: "Deploy the template and then delete it", rationale: "Deploying does not produce a Bicep file to maintain." },
      ],
      answer: "B",
      explanation:
        "The outline includes exporting a deployment as an ARM template and converting an ARM template to a Bicep file. Decompiling gives a starting point, but you should still check names, parameters and any warnings.",
      reference: GUIDE,
    },
    {
      id: "az104-d3-deployment-slots",
      domain: "d3",
      objective: "Create and configure Azure App Service",
      difficulty: "intermediate",
      question:
        "You need to test a new version of an App Service web app in Azure and then release it to production with no downtime, with the option to switch back quickly if problems appear. What should you use?",
      options: [
        { id: "A", text: "A second App Service plan in another region", rationale: "This creates a separate deployment but provides no built-in swap or quick rollback." },
        { id: "B", text: "Scale out the App Service plan to more instances", rationale: "Scaling adds capacity; it does not separate test and production versions." },
        { id: "C", text: "A staging deployment slot and a slot swap", rationale: "Correct. You deploy to a staging slot, warm it up, swap it with production and can swap back if needed." },
        { id: "D", text: "An App Service backup", rationale: "Backups support restoring an app, not zero-downtime releases." },
      ],
      answer: "C",
      explanation:
        "Deployment slots are live apps with their own host names. Swapping exchanges them without downtime, and swapping again is a fast rollback. Slots require a pricing tier that supports them.",
      reference: GUIDE,
    },

    /* ── Domain 4: Implement and manage virtual networking ────────────────── */
    {
      id: "az104-d4-peering",
      domain: "d4",
      objective: "Configure and manage virtual networks in Azure",
      difficulty: "intermediate",
      question:
        "VNet-A (10.1.0.0/16) is peered with VNet-B, and VNet-B is peered with VNet-C. There is no network virtual appliance or gateway transit. Virtual machines in VNet-A cannot reach VNet-C. What is the simplest fix?",
      options: [
        { id: "A", text: "Create a peering between VNet-A and VNet-C", rationale: "Correct. Virtual network peering is not transitive, so VNet-A and VNet-C need their own peering." },
        { id: "B", text: "Add a second address space to VNet-B", rationale: "Changing VNet-B's address space does not make peering transitive." },
        { id: "C", text: "Create a public IP address for each VM in VNet-C", rationale: "This exposes VMs to the internet instead of fixing private connectivity." },
        { id: "D", text: "Add a DNS zone for VNet-C", rationale: "Name resolution does not create a network path." },
      ],
      answer: "A",
      explanation:
        "Peering connects exactly two virtual networks. To route through a hub you need a network virtual appliance or gateway with user-defined routes; otherwise peer the networks directly.",
      reference: GUIDE,
    },
    {
      id: "az104-d4-private-endpoint",
      domain: "d4",
      objective: "Configure secure access to virtual networks",
      difficulty: "advanced",
      question:
        "An Azure SQL database must be reachable from your virtual network and from on-premises through a VPN, using a private IP address, and public network access must be disabled. What should you configure?",
      options: [
        { id: "A", text: "A service endpoint for Microsoft.Sql on the subnet", rationale: "Service endpoints keep traffic on the Azure backbone, but the service still uses its public endpoint and there is no private IP address for on-premises clients." },
        { id: "B", text: "An NSG rule that allows port 1433", rationale: "An NSG filters traffic but does not give the database a private address." },
        { id: "C", text: "Azure Bastion", rationale: "Bastion provides RDP and SSH access to VMs, not private access to PaaS services." },
        { id: "D", text: "A private endpoint for the database in the virtual network", rationale: "Correct. A private endpoint gives the service a private IP address in your VNet, reachable from peered networks and on-premises." },
      ],
      answer: "D",
      explanation:
        "Private endpoints bring the PaaS service into your address space, so public access can be turned off. Plan DNS so that clients resolve the service name to the private IP address.",
      reference: GUIDE,
    },
    {
      id: "az104-d4-nsg",
      domain: "d4",
      objective: "Configure secure access to virtual networks",
      difficulty: "advanced",
      question:
        "An NSG on a subnet has an inbound rule allowing TCP 443 from any source with priority 200, and an inbound rule denying all traffic from the internet with priority 100. Will HTTPS traffic from the internet reach the VMs in the subnet?",
      options: [
        { id: "A", text: "Yes, because allow rules always take precedence over deny rules", rationale: "NSGs do not favour allow rules; they process rules by priority." },
        { id: "B", text: "Yes, because port 443 is always open in Azure", rationale: "No port is open by default for inbound internet traffic unless a rule allows it." },
        { id: "C", text: "No, because the deny rule has a lower number and is processed first", rationale: "Correct. Lower numbers mean higher priority. Processing stops at the first match, so the deny rule at 100 blocks the traffic." },
        { id: "D", text: "No, because NSGs cannot filter traffic on subnets", rationale: "NSGs can be associated with subnets and network interfaces." },
      ],
      answer: "C",
      explanation:
        "Evaluating effective security rules means following priority order: the lowest number is checked first and the first matching rule wins. Moving the allow rule below 100 would let HTTPS through.",
      reference: GUIDE,
    },

    /* ── Domain 5: Monitor and maintain Azure resources ───────────────────── */
    {
      id: "az104-d5-action-group",
      domain: "d5",
      objective: "Monitor resources in Azure",
      difficulty: "foundation",
      question:
        "When CPU usage on a production VM stays above 90% for 15 minutes, the operations team must receive an email and an SMS. What do you configure in Azure Monitor?",
      options: [
        { id: "A", text: "A diagnostic setting that sends metrics to a storage account", rationale: "Diagnostic settings route data; they do not notify anyone." },
        { id: "B", text: "A metric alert rule with an action group that contains email and SMS notifications", rationale: "Correct. The alert rule defines the condition; the action group defines who is notified and how." },
        { id: "C", text: "A resource lock on the VM", rationale: "Locks protect resources from changes and have nothing to do with alerts." },
        { id: "D", text: "An Azure Advisor recommendation", rationale: "Advisor gives best-practice recommendations; it does not alert on live metrics." },
      ],
      answer: "B",
      explanation:
        "Alert rules, action groups and alert processing rules work together: the rule detects, the action group notifies or acts, and processing rules can suppress or add actions, for example during maintenance.",
      reference: GUIDE,
    },
    {
      id: "az104-d5-site-recovery",
      domain: "d5",
      objective: "Implement backup and recovery",
      difficulty: "intermediate",
      question:
        "Business-critical Azure VMs must be replicated continuously to a secondary region so that you can fail over within minutes if the primary region becomes unavailable. Which service should you configure?",
      options: [
        { id: "A", text: "Azure Backup with a daily backup policy", rationale: "Daily backups allow restore, but not continuous replication and fast regional failover." },
        { id: "B", text: "Blob soft delete", rationale: "Soft delete protects blobs against accidental deletion, not VMs against regional outages." },
        { id: "C", text: "Azure Monitor VM insights", rationale: "VM insights monitor performance and dependencies; they do not replicate VMs." },
        { id: "D", text: "Azure Site Recovery", rationale: "Correct. Site Recovery replicates Azure VMs to another region and orchestrates failover and failback." },
      ],
      answer: "D",
      explanation:
        "Azure Backup is for point-in-time restore; Site Recovery is for disaster recovery with replication and failover. Many solutions use both.",
      reference: GUIDE,
    },
  ],
};
