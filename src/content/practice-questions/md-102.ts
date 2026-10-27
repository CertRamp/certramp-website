import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free MD-102 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 27 October 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — MD-102 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/md-102",
};

export const md102Questions: PracticeQuestionSet = {
  slug: "md-102",
  intro:
    "15 original MD-102 practice questions across all five skill areas of the Microsoft study guide (skills measured as of 27 October 2026). Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "MD-102 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original MD-102 practice questions on Intune enrollment, Autopilot, compliance, endpoint security, app protection and automation — with explanations.",
  },
  questions: [
    /* ── Domain 1: Prepare infrastructure for devices ─────────────────────── */
    {
      id: "md102-d1-join-type",
      domain: "d1",
      objective: "Add devices to Microsoft Entra ID",
      difficulty: "foundation",
      question:
        "Employees use their private Windows laptops to access company email and Teams. The company wants to know which devices are used, but the devices remain owned and managed by the employees. Which option fits best?",
      options: [
        { id: "A", text: "Microsoft Entra join", rationale: "Entra join is for organisation-owned devices where users sign in with their work account; it is not intended for private devices." },
        { id: "B", text: "Microsoft Entra registration", rationale: "Correct. Registration (often called workplace join) is designed for personal devices: users keep their own account and the device becomes known to Entra ID." },
        { id: "C", text: "Hybrid Microsoft Entra join", rationale: "Hybrid join requires the device to be joined to the on-premises Active Directory, which is not the case for private laptops." },
        { id: "D", text: "No identity relationship is possible", rationale: "Personal devices can be registered in Entra ID." },
      ],
      answer: "B",
      explanation:
        "Join types follow ownership: registration for personal devices (BYOD), Entra join for corporate devices that are cloud-managed, hybrid join for corporate devices that must also stay in on-premises AD.",
      reference: GUIDE,
    },
    {
      id: "md102-d1-abm",
      domain: "d1",
      objective: "Enroll devices to Microsoft Intune",
      difficulty: "intermediate",
      question:
        "The company buys 300 iPhones that should enroll into Intune automatically as corporate devices when they are switched on, without users being able to remove management. What do you set up?",
      options: [
        { id: "A", text: "User enrollment via the Company Portal only", rationale: "User-initiated enrollment is for personal devices; it does not give the supervised, non-removable corporate management required." },
        { id: "B", text: "Integration of Intune with Apple Business Manager and automated device enrollment", rationale: "Correct. Devices purchased through Apple Business Manager are assigned to Intune and enroll automatically during setup, with management that users cannot remove." },
        { id: "C", text: "Samsung Knox Mobile Enrollment", rationale: "Knox Mobile Enrollment is for Samsung Android devices, not iPhones." },
        { id: "D", text: "Windows Autopilot", rationale: "Autopilot is for Windows devices." },
      ],
      answer: "B",
      explanation:
        "For corporate Apple devices, Apple Business Manager plus automated device enrollment is the zero-touch path. The Android equivalents are Google zero-touch enrollment and Samsung Knox Mobile Enrollment.",
      reference: GUIDE,
    },
    {
      id: "md102-d1-compliance-ca",
      domain: "d1",
      objective: "Implement identity and compliance",
      difficulty: "intermediate",
      question:
        "Only devices that meet the company's requirements (encryption, minimum OS version, no jailbreak) may access SharePoint Online. How do you enforce this?",
      options: [
        { id: "A", text: "A device configuration profile that enables BitLocker", rationale: "A configuration profile can turn on encryption, but it does not block access for devices that are not compliant." },
        { id: "B", text: "Intune compliance policies combined with a Microsoft Entra Conditional Access policy that requires a compliant device", rationale: "Correct. Intune evaluates each device against the compliance policy, and Conditional Access uses that status to grant or block access." },
        { id: "C", text: "A scope tag", rationale: "Scope tags control which administrators see which objects; they do not control user access." },
        { id: "D", text: "An Enrollment Status Page", rationale: "The ESP shows provisioning progress during setup; it does not enforce access rules." },
      ],
      answer: "B",
      explanation:
        "Compliance policies decide whether a device is compliant; Conditional Access turns that decision into access control. You need both to block non-compliant devices from cloud apps.",
      reference: GUIDE,
    },

    /* ── Domain 2: Manage and maintain devices ────────────────────────────── */
    {
      id: "md102-d2-autopilot-preprov",
      domain: "d2",
      objective: "Deploy and upgrade Windows clients by using cloud-based tools",
      difficulty: "intermediate",
      question:
        "Your IT partner should install apps and policies on new laptops before they are shipped, so that users only need to sign in and finish a short user phase. Which Windows Autopilot mode supports this?",
      options: [
        { id: "A", text: "User-driven mode", rationale: "In user-driven mode the whole provisioning happens when the user unboxes the device; nothing is prepared in advance." },
        { id: "B", text: "Pre-provisioning", rationale: "Correct. Pre-provisioning (formerly white glove) lets IT or a partner complete the device phase in advance; the user only goes through the user phase." },
        { id: "C", text: "Self-deploying mode", rationale: "Self-deploying mode is for devices without an assigned user, such as kiosks; there is no user sign-in." },
        { id: "D", text: "Manual Company Portal enrollment", rationale: "This is not an Autopilot mode and does not prepare the device in advance." },
      ],
      answer: "B",
      explanation:
        "Know the three Autopilot modes: user-driven (user does everything), pre-provisioning (device phase done in advance) and self-deploying (no user, for shared devices and kiosks).",
      reference: GUIDE,
    },
    {
      id: "md102-d2-esp",
      domain: "d2",
      objective: "Deploy and upgrade Windows clients by using cloud-based tools",
      difficulty: "foundation",
      question:
        "Users complain that they reach the desktop before the required apps and security policies have finished installing. What should you configure so that users only get to the desktop once provisioning is complete?",
      options: [
        { id: "A", text: "An Enrollment Status Page (ESP) that blocks device use until required apps and policies are installed", rationale: "Correct. The ESP shows provisioning progress and can block access to the desktop until specified apps and policies are applied." },
        { id: "B", text: "A Windows update ring", rationale: "Update rings control Windows updates, not the provisioning experience." },
        { id: "C", text: "A device query with KQL", rationale: "A device query reads information from devices; it does not control provisioning." },
        { id: "D", text: "A security baseline only", rationale: "A baseline sets security settings but does not hold the user back until apps are installed." },
      ],
      answer: "A",
      explanation:
        "The Enrollment Status Page is the standard tool to make sure a device is ready before the user starts working, typically used together with Autopilot.",
      reference: GUIDE,
    },
    {
      id: "md102-d2-epm",
      domain: "d2",
      objective: "Implement Microsoft Intune Suite add-on capabilities",
      difficulty: "intermediate",
      question:
        "Developers sometimes need to run specific tools with administrator rights, but the company wants all users to work as standard users. Which Intune capability supports approved elevation without permanent admin rights?",
      options: [
        { id: "A", text: "Endpoint Privilege Management", rationale: "Correct. Endpoint Privilege Management lets standard users elevate approved applications according to elevation rules, with reporting on elevated actions." },
        { id: "B", text: "Remote Help", rationale: "Remote Help lets support staff connect to a user's device; it does not provide rule-based elevation for users." },
        { id: "C", text: "Cloud PKI", rationale: "Cloud PKI issues certificates; it does not control administrator rights." },
        { id: "D", text: "Delivery Optimization", rationale: "Delivery Optimization reduces bandwidth for downloads; it is unrelated to privileges." },
      ],
      answer: "A",
      explanation:
        "Endpoint Privilege Management is one of the Intune Suite add-ons in the outline. It supports least privilege: users stay standard users, and only defined apps or actions are elevated.",
      reference: GUIDE,
    },
    {
      id: "md102-d2-retire-wipe",
      domain: "d2",
      objective: "Perform remote actions on devices",
      difficulty: "foundation",
      question:
        "An employee leaves the company and keeps their personal phone, which was enrolled in Intune. You want to remove company data, apps and profiles but leave the employee's personal data untouched. Which action do you use?",
      options: [
        { id: "A", text: "Wipe", rationale: "A wipe restores the device to factory settings and would delete the employee's personal data." },
        { id: "B", text: "Retire", rationale: "Correct. Retire removes managed company data, apps and settings and unenrolls the device, while keeping personal data." },
        { id: "C", text: "Restart", rationale: "A restart removes nothing." },
        { id: "D", text: "Sync", rationale: "Sync only makes the device check in for new policies." },
      ],
      answer: "B",
      explanation:
        "Retire is the selective option for personal devices; wipe is for corporate devices that are lost, stolen or being reassigned.",
      reference: GUIDE,
    },

    /* ── Domain 3: Protect devices ────────────────────────────────────────── */
    {
      id: "md102-d3-update-rings",
      domain: "d3",
      objective: "Manage device updates",
      difficulty: "intermediate",
      question:
        "You want Windows quality updates to reach a small pilot group first and the rest of the company a week later, with a deadline after which devices restart automatically. What do you configure in Intune?",
      options: [
        { id: "A", text: "Two Windows update rings with different deferral periods and deadlines, assigned to the pilot and the broad group", rationale: "Correct. Update rings control deferral, deadlines and restart behaviour per group, which allows staged rollouts." },
        { id: "B", text: "One compliance policy that requires the latest build", rationale: "Compliance can flag outdated devices, but it does not schedule a staged rollout." },
        { id: "C", text: "An app protection policy", rationale: "App protection policies protect data in apps; they do not control Windows updates." },
        { id: "D", text: "A Remote Help session per device", rationale: "Remote Help is for support sessions, not update management." },
      ],
      answer: "A",
      explanation:
        "Update rings are the classic Intune tool for staged Windows updates. Windows Autopatch can automate the rollout further, and feature update policies pin devices to a specific Windows version.",
      reference: GUIDE,
    },
    {
      id: "md102-d3-bitlocker",
      domain: "d3",
      objective: "Configure endpoint security",
      difficulty: "foundation",
      question:
        "All corporate Windows laptops must be encrypted, and users should be able to retrieve their own BitLocker recovery key when they are locked out. Which Intune policy type do you start with?",
      options: [
        { id: "A", text: "An endpoint security disk encryption policy", rationale: "Correct. Disk encryption policies configure BitLocker, including recovery key handling; recovery keys stored in Entra ID can support self-service recovery." },
        { id: "B", text: "An antivirus policy", rationale: "Antivirus policies configure Defender Antivirus, not encryption." },
        { id: "C", text: "An app configuration policy", rationale: "App configuration policies pass settings to apps; they do not encrypt disks." },
        { id: "D", text: "A firewall policy", rationale: "Firewall policies control network traffic, not disk encryption." },
      ],
      answer: "A",
      explanation:
        "Endpoint security in Intune has separate policy types for antivirus, disk encryption, firewall, attack surface reduction and EDR. Know which requirement belongs to which type.",
      reference: GUIDE,
    },
    {
      id: "md102-d3-asr",
      domain: "d3",
      objective: "Configure endpoint security",
      difficulty: "advanced",
      question:
        "Attackers often use Office macros to start child processes such as PowerShell. Which Intune endpoint security policy type contains rules to block Office applications from creating child processes?",
      options: [
        { id: "A", text: "Attack surface reduction", rationale: "Correct. Attack surface reduction rules target behaviours such as Office apps creating child processes or executable content from email." },
        { id: "B", text: "Disk encryption", rationale: "Encryption protects data at rest; it does not stop malicious processes." },
        { id: "C", text: "Account protection", rationale: "Account protection covers features such as Windows Hello for Business and Credential Guard, not process behaviour." },
        { id: "D", text: "Windows update ring", rationale: "Updates fix vulnerabilities but do not block this behaviour." },
      ],
      answer: "A",
      explanation:
        "ASR rules reduce common attack paths. Start them in audit mode, check for business impact, then switch to block — a typical exam scenario.",
      reference: GUIDE,
    },

    /* ── Domain 4: Manage and secure applications ─────────────────────────── */
    {
      id: "md102-d4-app-protection",
      domain: "d4",
      objective: "Plan and implement app protection and app configuration policies",
      difficulty: "intermediate",
      question:
        "Employees may use Outlook and Teams on their private, non-enrolled phones, but company data must not be copied into personal apps. What do you configure?",
      options: [
        { id: "A", text: "A device compliance policy", rationale: "Compliance policies require enrolled devices, which is not the case here." },
        { id: "B", text: "An app protection policy (MAM) for the managed apps", rationale: "Correct. App protection policies protect company data at the app level — for example blocking copy-and-paste to unmanaged apps — even without device enrollment." },
        { id: "C", text: "A device configuration profile", rationale: "Configuration profiles need an enrolled device." },
        { id: "D", text: "A Windows Autopilot profile", rationale: "Autopilot is for Windows device provisioning, not phones." },
      ],
      answer: "B",
      explanation:
        "App protection policies are the answer for BYOD without enrollment. Combined with Conditional Access requiring an app protection policy, only protected apps can access company data.",
      reference: GUIDE,
    },
    {
      id: "md102-d4-win32",
      domain: "d4",
      objective: "Deploy and update apps",
      difficulty: "intermediate",
      question:
        "You need to deploy a legacy .exe installer with a custom detection rule and a dependency on another app. Which Intune app type should you use?",
      options: [
        { id: "A", text: "Win32 app (packaged as .intunewin)", rationale: "Correct. Win32 apps support .exe and .msi installers packaged with the Content Prep Tool, with detection rules, requirements, dependencies and supersedence." },
        { id: "B", text: "Microsoft Store app", rationale: "Store apps come from the Microsoft Store; you cannot add your own legacy .exe installer this way." },
        { id: "C", text: "Web link", rationale: "A web link only places a shortcut to a URL." },
        { id: "D", text: "iOS store app", rationale: "This app type is for iPhones and iPads." },
      ],
      answer: "A",
      explanation:
        "Win32 is the most flexible Windows app type in Intune. Line-of-business (LOB) apps are simpler but lack features such as dependencies and custom detection.",
      reference: GUIDE,
    },
    {
      id: "md102-d4-troubleshoot",
      domain: "d4",
      objective: "Deploy and update apps",
      difficulty: "foundation",
      question:
        "An app assignment shows \"Install failed\" on several devices. Where do you start troubleshooting in Intune?",
      options: [
        { id: "A", text: "The app's device and user install status reports in Intune", rationale: "Correct. The install status shows per device and user which installations failed and the error code, which is the starting point for troubleshooting." },
        { id: "B", text: "Delete the app and recreate it immediately", rationale: "This removes useful information before you know the cause." },
        { id: "C", text: "The Windows update ring report", rationale: "Update ring reports are about Windows updates, not app installations." },
        { id: "D", text: "The Conditional Access sign-in log only", rationale: "Sign-in logs help with access problems, not app installation failures." },
      ],
      answer: "A",
      explanation:
        "Monitoring app deployment status and troubleshooting installation failures is named in the outline. Start with the status reports, then check logs and diagnostics on the affected device.",
      reference: GUIDE,
    },

    /* ── Domain 5: Automation, monitoring and reporting ───────────────────── */
    {
      id: "md102-d5-remediations",
      domain: "d5",
      objective: "Monitor and optimize health",
      difficulty: "intermediate",
      question:
        "A known issue regularly fills a temporary folder on many Windows devices. You want Intune to detect the condition automatically and fix it on a schedule. What do you use?",
      options: [
        { id: "A", text: "Remediations (detection and remediation script pairs) in Endpoint Analytics", rationale: "Correct. Remediations run a detection script and, if the problem is found, a remediation script, on a schedule you define." },
        { id: "B", text: "A compliance policy", rationale: "Compliance can report a state, but it does not run a fix." },
        { id: "C", text: "A security baseline", rationale: "Baselines apply recommended security settings; they do not clean up folders." },
        { id: "D", text: "An Enrollment Status Page", rationale: "The ESP is only used during provisioning." },
      ],
      answer: "A",
      explanation:
        "Remediations are part of Endpoint Analytics and are the standard way to detect and fix recurring device issues proactively at scale.",
      reference: GUIDE,
    },
    {
      id: "md102-d5-graph",
      domain: "d5",
      objective: "Automate management tasks",
      difficulty: "advanced",
      question:
        "Every Monday you need to export a list of non-compliant devices and send it to the security team, without clicking through the Intune admin center. Which approach fits the outline best?",
      options: [
        { id: "A", text: "A PowerShell script that uses Microsoft Graph to query Intune and is run on a schedule", rationale: "Correct. Microsoft Graph exposes Intune data and actions; PowerShell with the Graph SDK is the standard way to automate such tasks." },
        { id: "B", text: "A device configuration profile", rationale: "Configuration profiles configure devices; they do not export reports." },
        { id: "C", text: "Self-deploying Autopilot mode", rationale: "This is a provisioning mode for devices without users." },
        { id: "D", text: "Manually taking screenshots of the report", rationale: "This is the manual process you want to replace." },
      ],
      answer: "A",
      explanation:
        "Automating Intune management with PowerShell and Microsoft Graph is a named skill. Anything you can do in the admin center is available through Graph.",
      reference: GUIDE,
    },
  ],
};
