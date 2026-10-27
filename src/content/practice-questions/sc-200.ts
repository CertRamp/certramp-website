import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free SC-200 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 21 October 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — SC-200 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200",
};

export const sc200Questions: PracticeQuestionSet = {
  slug: "sc-200",
  intro:
    "15 original SC-200 practice questions across the three skill areas of the Microsoft study guide (skills measured as of 21 October 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "SC-200 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original SC-200 practice questions on Microsoft Sentinel, Defender XDR, incident response and KQL threat hunting — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: Manage a security operations environment ───────────────── */
    {
      id: "sc200-d1-automation-rule",
      domain: "d1",
      objective: "Configure automation for Microsoft Defender XDR and Microsoft Sentinel",
      difficulty: "intermediate",
      question:
        "Your SOC wants every new Microsoft Sentinel incident from a specific analytics rule to be assigned to the Tier 1 queue and tagged automatically, without building a Logic Apps workflow. What should you create?",
      options: [
        { id: "A", text: "A playbook", rationale: "Playbooks are Logic Apps workflows. They are the right tool for complex actions, but the requirement explicitly avoids building one." },
        { id: "B", text: "An automation rule", rationale: "Correct. Automation rules can change incident properties such as owner, status, severity and tags directly, and can also run playbooks when needed." },
        { id: "C", text: "A workbook", rationale: "Workbooks visualise data; they do not act on incidents." },
        { id: "D", text: "A data collection rule", rationale: "Data collection rules control which data the Azure Monitor Agent collects, not how incidents are handled." },
      ],
      answer: "B",
      explanation:
        "Automation rules are the central, lightweight way to triage incidents in Sentinel. Use them for assignment, tagging, status changes and suppression, and let them call playbooks when you need workflows that reach other systems.",
      reference: GUIDE,
    },
    {
      id: "sc200-d1-nrt",
      domain: "d1",
      objective: "Configure detections",
      difficulty: "intermediate",
      question:
        "A detection for the creation of a new global administrator account must fire as quickly as possible after the event is ingested. Which Microsoft Sentinel analytics rule type is designed for this?",
      options: [
        { id: "A", text: "Near-real-time (NRT) rule", rationale: "Correct. NRT rules run about every minute over the most recent data, which suits high-priority detections that must fire quickly." },
        { id: "B", text: "Scheduled rule with a 24-hour frequency", rationale: "A daily schedule could delay the alert by up to a day." },
        { id: "C", text: "Threat intelligence rule", rationale: "Threat intelligence rules match indicators of compromise; they do not detect account creation." },
        { id: "D", text: "Anomaly rule", rationale: "Anomaly rules use machine learning to flag unusual behaviour; they are not designed for a precise, immediate detection of a known event." },
      ],
      answer: "A",
      explanation:
        "Sentinel offers scheduled, NRT, threat intelligence and machine learning rule types. NRT rules trade some flexibility for speed and are meant for a limited number of critical detections.",
      reference: GUIDE,
    },
    {
      id: "sc200-d1-ama-windows",
      domain: "d1",
      objective: "Ingest data into the Microsoft Sentinel SIEM and platform",
      difficulty: "intermediate",
      question:
        "You need to collect only selected Windows Security event IDs from a group of Azure virtual machines into Microsoft Sentinel. What do you configure?",
      options: [
        { id: "A", text: "The Windows Security Events via AMA connector with a data collection rule", rationale: "Correct. The Azure Monitor Agent uses data collection rules, which define which machines and which events (for example via XPath filters) are collected." },
        { id: "B", text: "The Syslog via AMA connector", rationale: "Syslog is the logging mechanism of Linux and network devices, not Windows Security events." },
        { id: "C", text: "A Sentinel workbook", rationale: "Workbooks display data that is already ingested; they do not collect it." },
        { id: "D", text: "A threat intelligence connector", rationale: "Threat intelligence connectors import indicators, not Windows event logs." },
      ],
      answer: "A",
      explanation:
        "With the Azure Monitor Agent, the data collection rule is where you scope collection — which machines, which event sets or which individual events. Filtering at collection time also keeps ingestion costs down.",
      reference: GUIDE,
    },
    {
      id: "sc200-d1-cef",
      domain: "d1",
      objective: "Ingest data into the Microsoft Sentinel SIEM and platform",
      difficulty: "advanced",
      question:
        "A firewall appliance can only send its logs in Common Event Format (CEF) over Syslog. How do you get these logs into Microsoft Sentinel?",
      options: [
        { id: "A", text: "Install the Azure Monitor Agent directly on the firewall appliance", rationale: "Appliances usually cannot run the agent. They forward logs to a separate collector machine instead." },
        { id: "B", text: "Forward the logs to a Linux log forwarder running the Azure Monitor Agent and use the CEF via AMA connector", rationale: "Correct. The appliance sends CEF over Syslog to a Linux forwarder; the Azure Monitor Agent there sends the data to the workspace based on a data collection rule." },
        { id: "C", text: "Use the Windows Security Events via AMA connector", rationale: "That connector collects Windows event logs, not CEF from network devices." },
        { id: "D", text: "Upload the logs manually to a workbook", rationale: "Workbooks are for visualisation, not ingestion." },
      ],
      answer: "B",
      explanation:
        "For Syslog and CEF sources that cannot host an agent, the standard pattern is a Linux log forwarder with the Azure Monitor Agent, configured through the Syslog via AMA or CEF via AMA connector.",
      reference: GUIDE,
    },
    {
      id: "sc200-d1-retention-tiers",
      domain: "d1",
      objective: "Configure the Microsoft Sentinel SIEM and platform",
      difficulty: "intermediate",
      question:
        "Compliance requires you to keep high-volume network flow logs for several years at low cost. Analysts rarely query them and do not need them for real-time analytics rules. Which storage option fits best?",
      options: [
        { id: "A", text: "The analytics tier with maximum interactive retention", rationale: "The analytics tier is meant for data used in real-time detection and frequent queries, and is the most expensive option for large volumes." },
        { id: "B", text: "The data lake tier", rationale: "Correct. The Sentinel data lake tier is designed for long-term, cost-effective storage of high-volume data that is queried less often, for example with KQL jobs." },
        { id: "C", text: "Delete the logs after 90 days and export a summary to Excel", rationale: "This would not meet the multi-year retention requirement." },
        { id: "D", text: "Store them as watchlists", rationale: "Watchlists hold small reference lists such as VIP users, not years of log data." },
      ],
      answer: "B",
      explanation:
        "The outline asks you to manage retention across the analytics, data lake and XDR tiers. Rule of thumb: detection-relevant, frequently queried data in the analytics tier; bulky, rarely used data in the data lake.",
      reference: GUIDE,
    },
    {
      id: "sc200-d1-mitre",
      domain: "d1",
      objective: "Configure detections",
      difficulty: "foundation",
      question:
        "Your manager asks which attacker tactics and techniques your current Microsoft Sentinel detections cover and where the gaps are. Which feature helps you answer this most directly?",
      options: [
        { id: "A", text: "The MITRE ATT&CK view of your detection coverage", rationale: "Correct. Sentinel maps analytics rules and hunting queries to MITRE ATT&CK tactics and techniques, which shows covered and uncovered areas." },
        { id: "B", text: "The incident queue", rationale: "The queue shows incidents that occurred, not the coverage of your detection rules." },
        { id: "C", text: "Data collection rules", rationale: "These control data collection; they say nothing about which techniques are detected." },
        { id: "D", text: "Device groups in Defender for Endpoint", rationale: "Device groups organise devices for permissions and automation levels, not detection coverage." },
      ],
      answer: "A",
      explanation:
        "Analysing attack vector coverage with the MITRE ATT&CK matrix is a named skill in the outline. It turns 'do we detect enough?' into a concrete list of techniques without coverage.",
      reference: GUIDE,
    },

    /* ── Domain 2: Respond to security incidents ──────────────────────────── */
    {
      id: "sc200-d2-isolate",
      domain: "d2",
      objective: "Respond to alerts and incidents in Microsoft Defender for Endpoint",
      difficulty: "foundation",
      question:
        "A laptop shows signs of active ransomware encryption. You must stop it from communicating with other devices immediately while keeping the connection to Defender for Endpoint for further investigation. Which action do you take?",
      options: [
        { id: "A", text: "Isolate the device", rationale: "Correct. Device isolation cuts the device off from the network while keeping its connection to the Defender service, so you can still investigate and release it later." },
        { id: "B", text: "Run an antivirus scan only", rationale: "A scan alone does not stop the device from spreading the attack to the network." },
        { id: "C", text: "Collect an investigation package only", rationale: "The package is useful evidence, but it does not contain the threat." },
        { id: "D", text: "Remove the device from Microsoft Entra ID", rationale: "This does not stop network traffic and makes the investigation harder." },
      ],
      answer: "A",
      explanation:
        "Containment comes first when an attack is active. Isolation is the standard device response action for this; evidence collection and live response follow once the device can no longer reach the network.",
      reference: GUIDE,
    },
    {
      id: "sc200-d2-investigation-package",
      domain: "d2",
      objective: "Respond to alerts and incidents in Microsoft Defender for Endpoint",
      difficulty: "intermediate",
      question:
        "For a forensic review you need a snapshot of a device's autoruns, installed programs, network connections, scheduled tasks and event logs, collected through the Defender portal. Which action provides this?",
      options: [
        { id: "A", text: "Collect investigation package", rationale: "Correct. The investigation package gathers forensic data such as autoruns, installed programs, network connections, scheduled tasks and logs into one downloadable file." },
        { id: "B", text: "Restrict app execution", rationale: "This blocks non-Microsoft-signed apps; it does not collect data." },
        { id: "C", text: "Device timeline export of the last hour only", rationale: "The timeline shows events, but it is not the package of system state described." },
        { id: "D", text: "Offboard the device", rationale: "Offboarding stops monitoring and would destroy your visibility." },
      ],
      answer: "A",
      explanation:
        "Collecting an investigation package and running live response are the two main ways to obtain evidence from a device in Defender for Endpoint.",
      reference: GUIDE,
    },
    {
      id: "sc200-d2-risky-user",
      domain: "d2",
      objective: "Respond to alerts and incidents in Microsoft Defender XDR",
      difficulty: "intermediate",
      question:
        "Microsoft Entra ID Protection flags a user as high risk after sign-ins from an unfamiliar country, and your investigation confirms the account was compromised. What is the most appropriate first remediation?",
      options: [
        { id: "A", text: "Dismiss the user risk", rationale: "Dismissing risk is for false positives; here the compromise is confirmed." },
        { id: "B", text: "Confirm the user as compromised, revoke sessions and require a secure password reset", rationale: "Correct. This invalidates the attacker's sessions and credentials and feeds the confirmed compromise back into Entra ID Protection." },
        { id: "C", text: "Lower the user's sign-in risk policy threshold for everyone", rationale: "Policy tuning may help later, but it does not remediate this account." },
        { id: "D", text: "Wait for the next sign-in to see whether the risk repeats", rationale: "Waiting leaves the attacker active in the account." },
      ],
      answer: "B",
      explanation:
        "For compromised identities, the response combines cutting off access (revoking sessions, resetting credentials, possibly blocking sign-in) with telling the system the risk was real, so its detections learn from it.",
      reference: GUIDE,
    },
    {
      id: "sc200-d2-purview-audit",
      domain: "d2",
      objective: "Investigate Microsoft 365 activities to identify threats",
      difficulty: "intermediate",
      question:
        "You suspect an attacker used a compromised account to read emails and create an inbox forwarding rule. Which tool lets you search Microsoft 365 user and admin activities such as mailbox access and rule creation?",
      options: [
        { id: "A", text: "Microsoft Purview Audit", rationale: "Correct. Purview Audit records user and admin activities across Microsoft 365 services, including Exchange mailbox actions and inbox rule changes." },
        { id: "B", text: "Microsoft Intune device compliance reports", rationale: "Compliance reports show device state, not mailbox activities." },
        { id: "C", text: "Defender for Endpoint device timeline", rationale: "The timeline shows events on a device, not activities inside Exchange Online." },
        { id: "D", text: "Azure Cost Management", rationale: "Cost Management has no security audit data." },
      ],
      answer: "A",
      explanation:
        "The outline lists three Microsoft 365 investigation tools: Purview Audit for activity records, eDiscovery content search for the content itself, and Microsoft Graph activity logs for API calls.",
      reference: GUIDE,
    },
    {
      id: "sc200-d2-attack-disruption",
      domain: "d2",
      objective: "Respond to alerts and incidents in Microsoft Defender XDR",
      difficulty: "advanced",
      question:
        "During a fast-moving business email compromise, Microsoft Defender XDR automatically disables the compromised user account and contains affected devices before an analyst opens the incident. Which capability did this?",
      options: [
        { id: "A", text: "Automatic attack disruption", rationale: "Correct. Automatic attack disruption uses high-confidence signals across Defender XDR to contain compromised users and devices automatically during attacks such as ransomware or BEC." },
        { id: "B", text: "A Sentinel workbook", rationale: "Workbooks only display data; they take no action." },
        { id: "C", text: "Threat analytics reports", rationale: "Threat analytics provides intelligence about threats; it does not contain assets." },
        { id: "D", text: "A data retention policy", rationale: "Retention controls how long data is kept, not how attacks are stopped." },
      ],
      answer: "A",
      explanation:
        "Automatic attack disruption buys the SOC time by containing assets in the middle of an attack. Analysts then investigate the incident and decide when to release the containment.",
      reference: GUIDE,
    },
    {
      id: "sc200-d2-lateral",
      domain: "d2",
      objective: "Respond to alerts and incidents in Microsoft Defender XDR",
      difficulty: "advanced",
      question:
        "An incident combines a phishing email, a suspicious process on one device and later sign-ins from that user to three servers. What is the best way to understand the full scope?",
      options: [
        { id: "A", text: "Close each alert individually as soon as it is remediated", rationale: "Closing alerts one by one hides the connection between them and the true extent of the attack." },
        { id: "B", text: "Investigate the correlated incident across email, endpoint and identity, including the affected entities and possible lateral movement", rationale: "Correct. Defender XDR correlates alerts from several domains into one incident so you can follow the attack chain from initial access to lateral movement." },
        { id: "C", text: "Only reimage the first device", rationale: "The attacker may already be on the servers; reimaging one device is not enough." },
        { id: "D", text: "Disable all users in the organisation", rationale: "This is disproportionate and not a scoping method." },
      ],
      answer: "B",
      explanation:
        "Multi-stage, multi-domain attacks are explicitly named in the outline. Work from the incident level, map every entity (users, devices, mailboxes, IPs) and check for lateral movement before deciding on remediation.",
      reference: GUIDE,
    },

    /* ── Domain 3: Perform threat hunting ─────────────────────────────────── */
    {
      id: "sc200-d3-table",
      domain: "d3",
      objective: "Detect threats by using Microsoft Defender XDR",
      difficulty: "foundation",
      question:
        "In Advanced Hunting, you want to find all devices on which powershell.exe was started with an encoded command line. Which table do you query?",
      options: [
        { id: "A", text: "DeviceProcessEvents", rationale: "Correct. DeviceProcessEvents records process creation, including the file name and the command line." },
        { id: "B", text: "EmailEvents", rationale: "EmailEvents contains email delivery information, not processes." },
        { id: "C", text: "IdentityLogonEvents", rationale: "This table contains authentication events, not process starts." },
        { id: "D", text: "DeviceNetworkEvents", rationale: "This table records network connections, not process creation." },
      ],
      answer: "A",
      explanation:
        "Picking the right table is half of every hunting question. Process starts are in DeviceProcessEvents; network connections in DeviceNetworkEvents; files in DeviceFileEvents; email in EmailEvents.",
      reference: GUIDE,
    },
    {
      id: "sc200-d3-kql-summarize",
      domain: "d3",
      objective: "Detect threats by using Microsoft Defender XDR",
      difficulty: "intermediate",
      question:
        "In Advanced Hunting, which query against IdentityLogonEvents counts failed sign-ins per account and returns only accounts with more than 20 failures?",
      options: [
        { id: "A", text: "IdentityLogonEvents | where ActionType == \"LogonFailed\" | summarize Failures = count() by AccountName | where Failures > 20", rationale: "Correct. Filter the failures first, aggregate per account with summarize, then filter the aggregated result." },
        { id: "B", text: "| summarize Failures = count() | where AccountName > 20", rationale: "There is no grouping by account, and AccountName is not a number." },
        { id: "C", text: "| project AccountName | take 20", rationale: "This only returns 20 rows; it does not count anything." },
        { id: "D", text: "| where Failures > 20 | summarize count() by AccountName", rationale: "Failures does not exist before the summarize step, so the filter fails." },
      ],
      answer: "A",
      explanation:
        "The pattern filter → summarize … by … → filter on the aggregate appears in many hunting and detection queries, such as brute-force or password-spray detection.",
      reference: GUIDE,
    },
    {
      id: "sc200-d3-summary-rules",
      domain: "d3",
      objective: "Detect threats by using the Microsoft Sentinel platform",
      difficulty: "advanced",
      question:
        "Hunters regularly need hourly aggregates of a very large, verbose log source. Querying the raw data each time is slow and expensive. Which Microsoft Sentinel feature produces pre-aggregated results in a table that can be queried efficiently?",
      options: [
        { id: "A", text: "Summary rules", rationale: "Correct. Summary rules run scheduled aggregations and write the results to a summary table, which makes later queries faster and cheaper." },
        { id: "B", text: "Watchlists", rationale: "Watchlists store small reference data, not aggregated log results." },
        { id: "C", text: "Automation rules", rationale: "Automation rules act on incidents; they do not aggregate log data." },
        { id: "D", text: "Device groups", rationale: "Device groups belong to Defender for Endpoint management, not log aggregation." },
      ],
      answer: "A",
      explanation:
        "The outline asks you to create and manage summary rule tables and KQL jobs in the data lake. Both help to work with large volumes efficiently instead of querying raw data again and again.",
      reference: GUIDE,
    },
  ],
};
