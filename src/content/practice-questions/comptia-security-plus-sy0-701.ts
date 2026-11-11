import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CompTIA Security+ SY0-701 sample questions, ORIGINAL questions written by
 * CertRamp against the SY0-701 exam objectives (V7). Not taken from the paid
 * practice exams, not recalled exam content, and not presented as real exam questions.
 */
const OBJECTIVES = {
  label: "CompTIA: Security+ V7 (SY0-701) exam details and objectives",
  url: "https://www.comptia.org/en-us/certifications/security/v7/",
};

export const comptiaSecurityPlusSy0701Questions: PracticeQuestionSet = {
  slug: "comptia-security-plus-sy0-701",
  intro:
    "30 original CompTIA Security+ SY0-701 practice questions across the five domains of the official exam objectives (V7), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-11-11",
  seo: {
    title: "Security+ SY0-701 Practice Questions with Answers (2026)",
    description:
      "30 free, original Security+ SY0-701 practice questions on security controls, threats, architecture, operations and governance, each with a full explanation.",
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

    {
      id: "secplus701-d1-zero-trust-pep",
      domain: "d1",
      objective: "1.2 Summarize fundamental security concepts.",
      difficulty: "advanced",
      question:
        "A company is building a zero trust architecture with a control plane and a data plane. When a user requests an internal application, one component decides whether to grant access, and another component in the data plane actually allows, monitors and terminates the connection. Which component is the second one?",
      options: [
        { id: "A", text: "Policy engine", rationale: "The policy engine makes the grant or deny decision from policy and signals. It sits in the control plane and does not carry the connection." },
        { id: "B", text: "Policy administrator", rationale: "The policy administrator turns the decision into commands that open or close the path. It is also a control plane component, not the point in the data path." },
        { id: "C", text: "Policy enforcement point", rationale: "Correct. The policy enforcement point sits in the data plane between subject and resource and enables, monitors and ends the session as instructed." },
        { id: "D", text: "Implicit trust zone", rationale: "An implicit trust zone is the area behind the enforcement point where entities are trusted. It is a zone, not a component that enforces decisions." },
      ],
      answer: "C",
      explanation:
        "In the zero trust model the policy engine decides, the policy administrator relays the decision, and the policy enforcement point applies it in the data plane. Every request passes through the enforcement point instead of being trusted because of its network location.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d1-backout-plan",
      domain: "d1",
      objective: "1.3 Explain the importance of change management processes and the impact to security.",
      difficulty: "foundation",
      question:
        "A change advisory board is reviewing a request to upgrade the firmware on the core firewall during Saturday night's maintenance window. Before approving it, the board asks how the team will return the firewall to its previous working state if the upgrade causes an outage. Which part of the change request answers this?",
      options: [
        { id: "A", text: "Impact analysis", rationale: "Impact analysis assesses which systems and users the change could affect and how risky it is. It does not define the steps for reverting." },
        { id: "B", text: "Backout plan", rationale: "Correct. A backout plan documents how to roll the change back and restore the previous state if it fails." },
        { id: "C", text: "Maintenance window", rationale: "The maintenance window defines when the change is carried out, not how to undo it." },
        { id: "D", text: "Standard operating procedure", rationale: "An SOP documents the routine way to perform a task. It is not the change-specific plan for reverting a failed upgrade." },
      ],
      answer: "B",
      explanation:
        "The objectives list approval, impact analysis, test results, backout plan, maintenance window and SOPs as parts of change management. A tested backout plan keeps downtime short when a change goes wrong.",
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

    {
      id: "secplus701-d2-hacktivist",
      domain: "d2",
      objective: "2.1 Compare and contrast common threat actors and motivations.",
      difficulty: "foundation",
      question:
        "Shortly after a chemical company announces a new pipeline project, its public website is defaced with a message criticising the project's environmental impact, and a group claims responsibility on social media. No data was stolen and no ransom was demanded. Which threat actor is most likely responsible?",
      options: [
        { id: "A", text: "Organized crime", rationale: "Organized crime is driven by financial gain. With no ransom and no data theft, there is no money in this attack." },
        { id: "B", text: "Nation-state", rationale: "Nation-state actors are well resourced and usually pursue espionage or strategic goals quietly. A public defacement over an environmental issue does not fit." },
        { id: "C", text: "Insider threat", rationale: "Nothing points to an employee or contractor. The attackers are an outside group claiming the attack publicly." },
        { id: "D", text: "Hacktivist", rationale: "Correct. Hacktivists act on philosophical or political beliefs, and defacement with a public claim of responsibility is a typical tactic." },
      ],
      answer: "D",
      explanation:
        "Motivation is the key to identifying a threat actor: financial gain points to organized crime, espionage to nation-states, and philosophical or political beliefs to hacktivists. Defacing a website and announcing it publicly serves the message, not profit.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d2-race-condition",
      domain: "d2",
      objective: "2.3 Explain various types of vulnerabilities.",
      difficulty: "intermediate",
      question:
        "A program running with elevated privileges checks that a temporary file belongs to the calling user and then, a few milliseconds later, opens the file and writes to it. In the gap between the check and the write, an attacker replaces the file with a link to a system configuration file. Which type of vulnerability is being exploited?",
      options: [
        { id: "A", text: "Race condition (time-of-check to time-of-use)", rationale: "Correct. The state of the file changes between the moment it is checked and the moment it is used, which is a TOC/TOU race condition." },
        { id: "B", text: "Buffer overflow", rationale: "A buffer overflow writes data beyond the bounds of allocated memory. The problem here is timing, not memory size." },
        { id: "C", text: "Memory injection", rationale: "Memory injection places malicious code into the memory of a running process. The attacker here swaps a file on disk." },
        { id: "D", text: "Directory traversal", rationale: "Directory traversal uses sequences such as ../ in input to reach files outside the intended folder. The attacker does not manipulate a path in the program's input." },
      ],
      answer: "A",
      explanation:
        "A time-of-check to time-of-use flaw exists whenever a program trusts a check that may no longer be true when it acts. The fix is to make check and use a single atomic operation, for example by opening the file once and verifying the opened handle.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d2-impossible-travel",
      domain: "d2",
      objective: "2.4 Given a scenario, analyze indicators of malicious activity.",
      difficulty: "intermediate",
      question:
        "A SIEM shows that a user signed in to the company VPN from Hamburg at 08:55 and signed out at 09:05. At 09:30 the same account signed in successfully from an IP address in São Paulo. The user says they have been at their desk in Hamburg all morning. Which indicator best describes this activity?",
      options: [
        { id: "A", text: "Concurrent session usage", rationale: "Concurrent session usage means the account is active in two sessions at the same time. The Hamburg session had already ended." },
        { id: "B", text: "Impossible travel", rationale: "Correct. Nobody can travel from Hamburg to São Paulo in 25 minutes, so the second sign-in very likely uses stolen credentials." },
        { id: "C", text: "Account lockout", rationale: "No account was locked; both sign-ins succeeded." },
        { id: "D", text: "Out-of-cycle logging", rationale: "Out-of-cycle logging refers to log entries generated at unusual times or outside normal schedules. The log timing itself is unremarkable here." },
      ],
      answer: "B",
      explanation:
        "Impossible travel compares the locations and times of successive sign-ins and flags distances that could not be covered in the time between them. The usual response is to revoke sessions, reset the credentials and review how the account is protected by MFA.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d2-watering-hole",
      domain: "d2",
      objective: "2.2 Explain common threat vectors and attack surfaces.",
      difficulty: "intermediate",
      question:
        "Attackers want to compromise the engineers of a small aerospace supplier, but the supplier's email filtering is strong. Instead, they plant malicious code on an industry forum the engineers visit regularly, so that it runs when the engineers browse the site. Which technique is this?",
      options: [
        { id: "A", text: "Pretexting", rationale: "Pretexting uses an invented scenario to manipulate a person, usually through direct contact. Nobody is contacted here." },
        { id: "B", text: "Business email compromise", rationale: "Business email compromise abuses compromised or impersonated email accounts. The attackers deliberately avoided email." },
        { id: "C", text: "Brand impersonation", rationale: "Brand impersonation imitates a well-known brand. The real forum is compromised, not imitated." },
        { id: "D", text: "Watering hole", rationale: "Correct. A watering hole attack compromises a site the target group already trusts and visits, and waits for the victims to arrive." },
      ],
      answer: "D",
      explanation:
        "Watering hole attacks bypass email defences by exploiting trust in a legitimate third-party site. Patched browsers, web filtering and browser isolation reduce the risk.",
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

    {
      id: "secplus701-d3-iaas-responsibility",
      domain: "d3",
      objective: "3.1 Compare and contrast security implications of different architecture models.",
      difficulty: "foundation",
      question:
        "A company runs its web application on virtual machines rented from an infrastructure as a service (IaaS) provider. According to the cloud responsibility matrix, which task remains the company's responsibility?",
      options: [
        { id: "A", text: "Patching the hypervisor", rationale: "In IaaS the provider operates and patches the virtualization layer that hosts the customers' virtual machines." },
        { id: "B", text: "Physical security of the data center", rationale: "Physical facilities, access control and environmental protection are the provider's responsibility in every cloud model." },
        { id: "C", text: "Patching the guest operating system", rationale: "Correct. In IaaS the customer manages everything from the guest operating system upward, including its patches." },
        { id: "D", text: "Replacing failed storage hardware", rationale: "The provider owns and maintains the physical hardware, including disks and storage arrays." },
      ],
      answer: "C",
      explanation:
        "The responsibility matrix shows where the provider's duties end and the customer's begin. In IaaS the provider covers facilities, hardware and the hypervisor, while the customer covers the operating system, applications, data and configuration; in PaaS and SaaS the line moves further up.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d3-802-1x",
      domain: "d3",
      objective: "3.2 Given a scenario, apply security principles to secure enterprise infrastructure.",
      difficulty: "intermediate",
      question:
        "A company wants every device plugged into a wall port in its offices to authenticate before it receives any network access. The switches should pass the credentials to a central RADIUS server using EAP and keep the port blocked until authentication succeeds. What should the company implement?",
      options: [
        { id: "A", text: "Port-based network access control with IEEE 802.1X", rationale: "Correct. 802.1X keeps the switch port closed until the device authenticates through EAP against an authentication server such as RADIUS." },
        { id: "B", text: "MAC address filtering on the switches", rationale: "MAC filtering only allows listed hardware addresses. It uses no credentials or RADIUS exchange, and MAC addresses are easy to spoof." },
        { id: "C", text: "A jump server for each office", rationale: "A jump server provides a controlled path for administrative access. It does not control which devices may join the network." },
        { id: "D", text: "Port mirroring to an intrusion detection system", rationale: "Port mirroring copies traffic for monitoring. It does not authenticate devices or block ports." },
      ],
      answer: "A",
      explanation:
        "802.1X defines three roles: the supplicant (the device), the authenticator (the switch) and the authentication server (usually RADIUS). The objectives list 802.1X and EAP under port security.",
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
        { id: "C", text: "Eradication", rationale: "Correct. Isolation is containment; the next step is eradication: removing the malware and its persistence from the affected systems." },
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
        { id: "B", text: "False negative", rationale: "A false negative is a real vulnerability the scanner missed: the opposite situation." },
        { id: "C", text: "Exception", rationale: "An exception is a documented decision to accept a real vulnerability, not a classification for an incorrect finding." },
        { id: "D", text: "False positive", rationale: "Correct. The scanner reported a vulnerability that does not exist on the system." },
      ],
      answer: "D",
      explanation:
        "Validating scan results is part of the vulnerability analysis step. Confirmed false positives should be documented so they do not waste remediation effort, while false negatives are the more dangerous error because they go unnoticed.",
      reference: OBJECTIVES,
    },

    {
      id: "secplus701-d4-wpa3-sae",
      domain: "d4",
      objective: "4.1 Given a scenario, apply common security techniques to computing resources.",
      difficulty: "intermediate",
      question:
        "A small office is replacing its wireless network. It has no RADIUS server and wants staff to join with a shared passphrase. The previous network was attacked by capturing the handshake and running an offline dictionary attack against it. Which configuration best meets the requirements?",
      options: [
        { id: "A", text: "WPA2-Personal with a longer pre-shared key", rationale: "A longer key makes guessing harder, but a captured WPA2-PSK handshake can still be attacked offline." },
        { id: "B", text: "WPA3-Personal using SAE", rationale: "Correct. Simultaneous Authentication of Equals keeps the shared passphrase but resists offline dictionary attacks on captured handshakes." },
        { id: "C", text: "WPA2-Enterprise with PEAP", rationale: "Enterprise mode authenticates users individually through a RADIUS server, which the office does not have." },
        { id: "D", text: "A hidden SSID combined with MAC filtering", rationale: "Hiding the SSID and filtering MAC addresses are easily bypassed and do nothing to protect the handshake." },
      ],
      answer: "B",
      explanation:
        "WPA3 replaces the WPA2 pre-shared key exchange with SAE, so capturing the handshake no longer gives an attacker material for offline guessing. Enterprise authentication is stronger still, but it needs AAA infrastructure such as RADIUS.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d4-dns-logs",
      domain: "d4",
      objective: "4.9 Given a scenario, use data sources to support an investigation.",
      difficulty: "advanced",
      question:
        "Threat intelligence reports that a malware family contacts a command-and-control domain whose IP addresses change every few minutes. An analyst needs to find which internal hosts tried to reach that domain during the last week. Which data source is most useful?",
      options: [
        { id: "A", text: "Firewall logs", rationale: "Firewall logs normally record IP addresses and ports rather than the domain names that were looked up. With constantly rotating addresses, matching them to the domain is unreliable." },
        { id: "B", text: "Vulnerability scan output", rationale: "Scan output shows weaknesses on systems, not which hosts communicated with a destination in the past." },
        { id: "C", text: "Application logs on the company web server", rationale: "These record events of the web application itself, not outbound lookups made by internal workstations." },
        { id: "D", text: "DNS server query logs", rationale: "Correct. DNS logs show which client asked to resolve which name and when, regardless of the IP address returned." },
      ],
      answer: "D",
      explanation:
        "Choose the data source that records the indicator you actually have. When the indicator is a domain name and its addresses keep changing, DNS query logs tie the name directly to the requesting hosts.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d4-just-in-time",
      domain: "d4",
      objective: "4.6 Given a scenario, implement and maintain identity and access management.",
      difficulty: "intermediate",
      question:
        "An organisation wants administrators to hold no standing administrative rights. When administrators need elevated access, they request it for a specific task, and the rights are granted for a limited time and removed automatically afterward. Which privileged access management capability is described?",
      options: [
        { id: "A", text: "Just-in-time permissions", rationale: "Correct. Just-in-time permissions grant elevated rights only when needed and only for a limited period." },
        { id: "B", text: "Password vaulting", rationale: "Password vaulting stores and controls access to privileged credentials. The privileged account itself still keeps its standing rights." },
        { id: "C", text: "Role-based access control", rationale: "RBAC assigns permissions based on job role. The permissions persist as long as the role assignment does, without time limits per task." },
        { id: "D", text: "Single sign-on", rationale: "SSO lets users authenticate once for many applications. It does not control how long privileges last." },
      ],
      answer: "A",
      explanation:
        "The objectives list just-in-time permissions, password vaulting and ephemeral credentials as privileged access management tools. Removing standing privileges shrinks the window in which a compromised admin account can be abused.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d4-sanitization",
      domain: "d4",
      objective: "4.2 Explain the security implications of proper hardware, software, and data asset management.",
      difficulty: "foundation",
      question:
        "A company plans to sell 200 retired laptops to a refurbisher. The drives must remain usable for the buyer, but no company data may be recoverable from them. Which disposal approach fits?",
      options: [
        { id: "A", text: "Destruction", rationale: "Destruction (shredding, degaussing, incineration) makes the media unusable, but the buyer needs working drives." },
        { id: "B", text: "Data retention", rationale: "Data retention defines how long data must be kept. It does not remove data from devices leaving the company." },
        { id: "C", text: "Sanitization", rationale: "Correct. Sanitization, such as secure overwriting or cryptographic erasure, removes the data while leaving the drive usable." },
        { id: "D", text: "Certification", rationale: "Certification documents that disposal was carried out. It proves the work but does not itself remove the data." },
      ],
      answer: "C",
      explanation:
        "Disposal choices depend on what happens to the hardware next: sanitize media that will be reused or resold, destroy media that will not. In both cases a certificate provides evidence for audits.",
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
        { id: "D", text: "2,500", rationale: "This applies the exposure factor a second time (200,000 × 0.25 × 0.25 × 0.2 = 2,500). The exposure factor belongs in the SLE only once." },
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
    {
      id: "secplus701-d5-data-custodian",
      domain: "d5",
      objective: "5.1 Summarize elements of effective security governance.",
      difficulty: "intermediate",
      question:
        "In a company, the head of HR decides how employee records are classified and who may access them. The database administrators run daily backups, apply the access permissions HR has approved and maintain the database's security controls. Which role do the database administrators hold for this data?",
      options: [
        { id: "A", text: "Data owner", rationale: "The owner is accountable for the data and decides on classification and access. Here that is the head of HR." },
        { id: "B", text: "Data subject", rationale: "The data subjects are the employees the records describe, not the people who manage the database." },
        { id: "C", text: "Data processor", rationale: "A processor is a separate party that processes personal data on behalf of the controller, such as an outsourced payroll provider. The administrators are internal staff carrying out technical safeguards." },
        { id: "D", text: "Data custodian", rationale: "Correct. Custodians handle the day-to-day protection of data, such as backups and applying controls, according to the owner's decisions." },
      ],
      answer: "D",
      explanation:
        "Owners decide and are accountable; custodians implement and maintain the protection. Separating the two makes it clear who sets the rules and who operates them.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d5-rpo",
      domain: "d5",
      objective: "5.2 Explain elements of the risk management process.",
      difficulty: "foundation",
      question:
        "During a business impact analysis, the finance department states that if the accounting system fails, it can accept losing at most the last four hours of entered transactions. Which metric does this define?",
      options: [
        { id: "A", text: "Recovery time objective (RTO)", rationale: "RTO is the maximum time allowed to restore the system, not the amount of data that may be lost." },
        { id: "B", text: "Recovery point objective (RPO)", rationale: "Correct. RPO is the maximum acceptable data loss, measured as time back from the failure to the last usable copy." },
        { id: "C", text: "Mean time to repair (MTTR)", rationale: "MTTR is the average time needed to fix a failed component. It describes repair speed, not tolerable data loss." },
        { id: "D", text: "Mean time between failures (MTBF)", rationale: "MTBF measures reliability as the average operating time between failures." },
      ],
      answer: "B",
      explanation:
        "RPO drives backup and replication frequency: a four-hour RPO needs a usable copy at least every four hours. RTO, by contrast, drives how quickly recovery must happen and therefore the choice of recovery site and process.",
      reference: OBJECTIVES,
    },
    {
      id: "secplus701-d5-right-to-be-forgotten",
      domain: "d5",
      objective: "5.4 Summarize elements of effective security compliance.",
      difficulty: "foundation",
      question:
        "A former customer in the European Union asks an online shop to delete all personal data it holds about them. Which privacy concept is the customer exercising?",
      options: [
        { id: "A", text: "Data retention", rationale: "Data retention defines how long data is kept. Legal retention periods can limit what may be deleted, but they are not the customer's request." },
        { id: "B", text: "Data sovereignty", rationale: "Data sovereignty means data is subject to the laws of the country where it is stored. It does not give an individual a right to deletion." },
        { id: "C", text: "Right to be forgotten", rationale: "Correct. The right to be forgotten lets a data subject ask an organisation to erase their personal data." },
        { id: "D", text: "Attestation and acknowledgement", rationale: "Attestation and acknowledgement confirm that people have read and accepted policies, a compliance monitoring activity." },
      ],
      answer: "C",
      explanation:
        "The objectives list the right to be forgotten under privacy. Honouring it requires a data inventory that shows every place the person's data is stored, while legal retention duties can override erasure for some records.",
      reference: OBJECTIVES,
    },
  ],
};
