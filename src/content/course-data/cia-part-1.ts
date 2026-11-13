import type { CourseData } from "./types";

/**
 * CIA Part 1 (Internal Audit Fundamentals). Blueprint counts from the live Udemy course
 * on 13 Nov 2026 (125 questions per test). The IIA CIA 2025 page re-checked 13 Nov 2026.
 * German terms follow the usual German IIA/DIIR usage; the exam itself can be taken in German.
 * Course changelog not recorded yet.
 */
export const ciaPart1: CourseData = {
  slug: "cia-part-1",

  examWatch: {
    lastChecked: "2026-11-13",
    examVersion: {
      en: "2025 CIA syllabus (Part 1: Internal Audit Fundamentals), aligned with the Global Internal Audit Standards",
      de: "CIA-Syllabus 2025 (Teil 1: Internal Audit Fundamentals), ausgerichtet an den Globalen Standards für die Interne Revision",
    },
    source: { label: "The IIA: CIA exam 2025", url: "https://theiia.org/cia2025" },
    entries: [
      {
        date: "2027-01-04",
        summary: {
          en: "The IIA announces new CIA exam pricing from 4 January 2027.",
          de: "Die IIA kündigt neue Preise für die CIA-Prüfung ab dem 4. Januar 2027 an.",
        },
        domains: [],
        source: { label: "The IIA: CIA exam 2025", url: "https://theiia.org/cia2025" },
      },
      {
        date: "2026-12-28",
        summary: {
          en: "The Arabic exam moves from the 2019 to the 2025 syllabus on 28 December 2026; English and most other languages already use the 2025 syllabus.",
          de: "Die arabische Prüfung wechselt am 28. Dezember 2026 vom Syllabus 2019 auf den Syllabus 2025; Englisch und die meisten anderen Sprachen nutzen bereits den Syllabus 2025.",
        },
        domains: [],
        examVersion: { en: "2025 syllabus", de: "Syllabus 2025" },
        source: { label: "The IIA: CIA exam 2025", url: "https://theiia.org/cia2025" },
      },
    ],
  },

  blueprint: {
    rows: [
      { domain: "d1", perTest: [44, 44, 43, 44, 44, 44] },
      { domain: "d2", perTest: [25, 25, 25, 25, 25, 25] },
      { domain: "d3", perTest: [37, 38, 38, 37, 37, 37] },
      { domain: "d4", perTest: [19, 18, 19, 19, 19, 19] },
    ],
    examVersion: { en: "2025 CIA syllabus", de: "CIA-Syllabus 2025" },
    counted: "2026-11-13",
  },

  path: {
    before: [],
    after: [
      {
        name: "CIA Part 2: Internal Audit Engagement",
        code: "CIA Part 2",
        slug: "cia-part-2",
        relation: {
          en: "The second of the three CIA exams: planning, performing and communicating engagements. 100 questions in 120 minutes.",
          de: "Die zweite der drei CIA-Prüfungen: Prüfungsaufträge planen, durchführen und kommunizieren. 100 Fragen in 120 Minuten.",
        },
      },
      {
        name: "CIA Part 3: Internal Audit Function",
        code: "CIA Part 3",
        slug: "cia-part-3",
        relation: {
          en: "The third CIA exam: managing the internal audit function. All three parts must be passed within three years of applying.",
          de: "Die dritte CIA-Prüfung: Führung der Internen Revision. Alle drei Teile müssen innerhalb von drei Jahren nach der Anmeldung bestanden werden.",
        },
      },
    ],
    similar: [
      {
        name: "ISACA Certified Information Systems Auditor",
        code: "CISA",
        slug: "cisa",
        relation: {
          en: "Audit certification focused on information systems and IT controls; CIA covers internal auditing across the whole organisation.",
          de: "Prüfer-Zertifizierung mit Schwerpunkt Informationssysteme und IT-Kontrollen; die CIA deckt die Interne Revision der gesamten Organisation ab.",
        },
      },
    ],
    compare: ["cia-part-1-vs-cisa"],
    note: {
      en: "Part 1 is usually the first CIA exam, and The IIA waives it for active holders of its Internal Audit Practitioner (IAP) designation. Programme eligibility depends on education and experience.",
      de: "Teil 1 ist meist die erste CIA-Prüfung. Die IIA erlässt ihn aktiven Inhabern der Bezeichnung Internal Audit Practitioner (IAP). Die Zulassung zum Programm hängt von Ausbildung und Berufserfahrung ab.",
    },
    source: { label: "The IIA: Certified Internal Auditor", url: "https://www.theiia.org/en/certifications/cia/" },
    checked: "2026-11-13",
  },

  readiness: {},

  glossary: {
    reviewed: "2026-11-13",
    sources: [
      { label: "The IIA: Global Internal Audit Standards", url: "https://www.theiia.org/en/standards/" },
      { label: "The IIA: CIA Part 1 syllabus", url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-1-syllabus.pdf" },
    ],
    terms: [
      { id: "internal-auditing", term: "Internal auditing", domain: "d1", translations: { en: "Internal auditing", de: "Interne Revision" }, definition: { en: "An independent, objective assurance and advisory service designed to add value and improve an organisation's operations, as set out in the Purpose of Internal Auditing in the Global Internal Audit Standards.", de: "Unabhängige, objektive Prüfungs- und Beratungsleistung, die Mehrwert schaffen und die Geschäftsprozesse einer Organisation verbessern soll, wie im Zweck der Internen Revision in den Globalen Standards beschrieben." } },
      { id: "gias", term: "Global Internal Audit Standards", domain: "d1", translations: { en: "Global Internal Audit Standards", de: "Globale Standards für die Interne Revision" }, definition: { en: "The IIA's standards, effective 9 January 2025, organised in five domains: purpose, ethics and professionalism, governing, managing and performing internal audit services.", de: "Die Standards der IIA, gültig seit 9. Januar 2025, gegliedert in fünf Bereiche: Zweck, Ethik und Professionalität, Steuerung, Führung und Durchführung der Internen Revision." } },
      { id: "assurance-services", term: "Assurance services", domain: "d1", translations: { en: "Assurance services", de: "Prüfungsleistungen (Assurance)" }, definition: { en: "Objective assessments of evidence that give an opinion or conclusion on governance, risk management and control. Internal audit decides the nature and scope.", de: "Objektive Beurteilung von Nachweisen, die zu einem Urteil oder einer Schlussfolgerung über Governance, Risikomanagement und Kontrollen führt. Art und Umfang legt die Interne Revision fest." } },
      { id: "advisory-services", term: "Advisory services", domain: "d1", translations: { en: "Advisory services", de: "Beratungsleistungen" }, definition: { en: "Services whose nature and scope are agreed with the requester, such as advice or training. Management keeps responsibility for decisions.", de: "Leistungen, deren Art und Umfang mit dem Auftraggeber vereinbart werden, etwa Beratung oder Schulung. Die Verantwortung für Entscheidungen bleibt beim Management." } },
      { id: "internal-audit-mandate", term: "Internal audit mandate", domain: "d1", translations: { en: "Internal audit mandate", de: "Mandat der Internen Revision" }, definition: { en: "The authority, role and responsibilities given to internal audit by the board, by law or by regulation.", de: "Befugnisse, Rolle und Aufgaben, die der Internen Revision vom Überwachungsorgan, per Gesetz oder durch Aufsichtsrecht übertragen werden." } },
      { id: "internal-audit-charter", term: "Internal audit charter", domain: "d1", translations: { en: "Internal audit charter", de: "Geschäftsordnung der Internen Revision" }, definition: { en: "A formal document, approved by the board, that sets out internal audit's mandate, position, reporting lines, scope and types of services.", de: "Vom Überwachungsorgan genehmigtes Dokument, das Mandat, Stellung, Berichtswege, Umfang und Leistungsarten der Internen Revision festlegt." } },
      { id: "chief-audit-executive", term: "Chief audit executive", abbr: "CAE", domain: "d1", translations: { en: "Chief audit executive", de: "Leitung der Internen Revision" }, definition: { en: "The person responsible for leading the internal audit function, whatever the exact job title.", de: "Die Person, die die Interne Revision leitet, unabhängig von der genauen Stellenbezeichnung." } },
      { id: "board", term: "Board", domain: "d1", translations: { en: "Board", de: "Überwachungsorgan (Board)" }, definition: { en: "The highest governing body that oversees management, such as a board of directors, supervisory board or audit committee acting for it.", de: "Höchstes Leitungs- oder Aufsichtsgremium, das das Management überwacht, etwa Aufsichtsrat, Verwaltungsrat oder ein in seinem Auftrag handelnder Prüfungsausschuss." } },
      { id: "independence", term: "Independence", domain: "d1", translations: { en: "Independence", de: "Unabhängigkeit" }, definition: { en: "Freedom of the internal audit function from conditions that impair its ability to carry out its responsibilities without bias. It concerns the function's position, for example direct reporting to the board.", de: "Freiheit der Internen Revision von Umständen, die ihre unvoreingenommene Aufgabenerfüllung beeinträchtigen. Sie betrifft die Stellung der Funktion, etwa die direkte Berichtslinie an das Überwachungsorgan." } },
      { id: "objectivity", term: "Objectivity", domain: "d2", translations: { en: "Objectivity", de: "Objektivität" }, definition: { en: "An individual auditor's unbiased mental attitude. It is impaired, for example, when an auditor reviews work they were responsible for recently.", de: "Unvoreingenommene innere Haltung des einzelnen Revisors. Sie ist zum Beispiel beeinträchtigt, wenn jemand Tätigkeiten prüft, für die er kürzlich selbst verantwortlich war." } },
      { id: "integrity", term: "Integrity", domain: "d2", translations: { en: "Integrity", de: "Integrität" }, definition: { en: "The first ethics principle of the Standards: honesty, professional courage and lawful, ethical behaviour.", de: "Erster Ethikgrundsatz der Standards: Ehrlichkeit, berufliche Courage sowie rechtmäßiges und ethisches Verhalten." } },
      { id: "competency", term: "Competency", domain: "d2", translations: { en: "Competency", de: "Kompetenz" }, definition: { en: "Having the knowledge, skills and abilities needed for the work, and developing them continuously.", de: "Über das für die Arbeit nötige Wissen, die Fähigkeiten und Fertigkeiten verfügen und sie laufend weiterentwickeln." } },
      { id: "due-professional-care", term: "Due professional care", domain: "d2", translations: { en: "Due professional care", de: "Berufsübliche Sorgfalt" }, definition: { en: "Applying the care and skill expected of a reasonably prudent and competent internal auditor. It does not mean infallibility.", de: "Die Sorgfalt und Fachkunde anwenden, die von einem umsichtigen und kompetenten Revisor erwartet wird. Unfehlbarkeit ist damit nicht gemeint." } },
      { id: "confidentiality", term: "Confidentiality", domain: "d2", translations: { en: "Confidentiality", de: "Vertraulichkeit" }, definition: { en: "Using and protecting information obtained in the work appropriately and not disclosing it without authority, unless there is a legal or professional duty to do so.", de: "Im Rahmen der Arbeit erlangte Informationen angemessen nutzen und schützen und sie nicht ohne Befugnis weitergeben, sofern keine rechtliche oder berufliche Pflicht dazu besteht." } },
      { id: "conflict-of-interest", term: "Conflict of interest", domain: "d2", translations: { en: "Conflict of interest", de: "Interessenkonflikt" }, definition: { en: "A situation in which a personal or professional interest could undermine an auditor's objectivity. It must be avoided or disclosed.", de: "Situation, in der ein persönliches oder berufliches Interesse die Objektivität eines Revisors untergraben könnte. Er ist zu vermeiden oder offenzulegen." } },
      { id: "governance", term: "Governance", domain: "d3", translations: { en: "Governance", de: "Governance (Unternehmensführung und -überwachung)" }, definition: { en: "The combination of processes and structures the board uses to inform, direct, manage and monitor the organisation towards its objectives.", de: "Gesamtheit der Prozesse und Strukturen, mit denen das Überwachungsorgan die Organisation informiert, ausrichtet, steuert und überwacht, um ihre Ziele zu erreichen." } },
      { id: "three-lines-model", term: "Three Lines Model", domain: "d3", translations: { en: "Three Lines Model", de: "Drei-Linien-Modell" }, definition: { en: "The IIA's model of roles: management in first-line and second-line roles, internal audit in the third-line role giving independent assurance, all accountable to the governing body.", de: "Rollenmodell der IIA: das Management in Rollen der ersten und zweiten Linie, die Interne Revision in der dritten Linie mit unabhängiger Prüfung, alle gegenüber dem Leitungsorgan verantwortlich." } },
      { id: "risk-appetite", term: "Risk appetite", domain: "d3", translations: { en: "Risk appetite", de: "Risikoappetit" }, definition: { en: "The type and amount of risk an organisation is willing to accept in pursuit of its objectives.", de: "Art und Ausmaß der Risiken, die eine Organisation zur Erreichung ihrer Ziele einzugehen bereit ist." } },
      { id: "inherent-risk", term: "Inherent risk", domain: "d3", translations: { en: "Inherent risk", de: "Inhärentes Risiko" }, definition: { en: "The risk before any management action, such as controls, is taken into account.", de: "Risiko vor Berücksichtigung von Maßnahmen des Managements wie Kontrollen." } },
      { id: "residual-risk", term: "Residual risk", domain: "d3", translations: { en: "Residual risk", de: "Restrisiko" }, definition: { en: "The risk that remains after management's response, such as controls. It is compared with the risk appetite.", de: "Risiko, das nach der Reaktion des Managements, etwa durch Kontrollen, verbleibt. Es wird mit dem Risikoappetit verglichen." } },
      { id: "erm", term: "Enterprise risk management", abbr: "ERM", domain: "d3", translations: { en: "Enterprise risk management", de: "Unternehmensweites Risikomanagement (ERM)" }, definition: { en: "An organisation-wide approach to identifying, assessing and responding to risks in line with strategy, for example as described in COSO ERM or ISO 31000.", de: "Organisationsweiter Ansatz, Risiken im Einklang mit der Strategie zu erkennen, zu bewerten und zu steuern, etwa nach COSO ERM oder ISO 31000." } },
      { id: "control-environment", term: "Control environment", domain: "d3", translations: { en: "Control environment", de: "Kontrollumfeld" }, definition: { en: "The tone at the top and the standards, processes and structures that form the basis for internal control; the first component of the COSO Internal Control framework.", de: "Die Haltung der Führung sowie Standards, Prozesse und Strukturen, die die Grundlage des internen Kontrollsystems bilden; erste Komponente des COSO-Rahmenwerks Internal Control." } },
      { id: "preventive-control", term: "Preventive control", domain: "d3", translations: { en: "Preventive control", de: "Präventive Kontrolle" }, definition: { en: "A control designed to stop an error or irregularity from happening, such as segregation of duties or approval before payment.", de: "Kontrolle, die einen Fehler oder eine Unregelmäßigkeit verhindern soll, etwa Funktionstrennung oder Freigabe vor der Zahlung." } },
      { id: "detective-control", term: "Detective control", domain: "d3", translations: { en: "Detective control", de: "Detektive Kontrolle (aufdeckende Kontrolle)" }, definition: { en: "A control designed to find errors or irregularities after they have occurred, such as reconciliations or exception reports.", de: "Kontrolle, die Fehler oder Unregelmäßigkeiten nach ihrem Eintreten aufdecken soll, etwa Abstimmungen oder Ausnahmeberichte." } },
      { id: "corrective-control", term: "Corrective control", domain: "d3", translations: { en: "Corrective control", de: "Korrigierende Kontrolle" }, definition: { en: "A control that fixes a problem once it has been detected and limits its effect.", de: "Kontrolle, die ein erkanntes Problem behebt und seine Auswirkungen begrenzt." } },
      { id: "fraud-triangle", term: "Fraud triangle", domain: "d4", translations: { en: "Fraud triangle", de: "Betrugsdreieck (Fraud Triangle)" }, definition: { en: "The three conditions often present when fraud occurs: pressure or incentive, opportunity, and rationalisation.", de: "Die drei Bedingungen, die bei Betrug häufig vorliegen: Druck oder Anreiz, Gelegenheit und Rechtfertigung." } },
      { id: "red-flag", term: "Red flag", domain: "d4", translations: { en: "Red flag", de: "Warnsignal (Red Flag)" }, definition: { en: "An indicator that fraud may be present, such as missing documents, unusual transactions or an employee who never takes leave.", de: "Hinweis auf möglichen Betrug, etwa fehlende Belege, ungewöhnliche Buchungen oder ein Mitarbeiter, der nie Urlaub nimmt." } },
      { id: "fraud-risk-assessment", term: "Fraud risk assessment", domain: "d4", translations: { en: "Fraud risk assessment", de: "Bewertung von Betrugsrisiken" }, definition: { en: "Identifying how fraud could occur, how likely and significant it is, and whether controls address it. Management owns it; internal audit evaluates it.", de: "Ermitteln, wie Betrug entstehen könnte, wie wahrscheinlich und bedeutsam er wäre und ob Kontrollen ihn abdecken. Verantwortlich ist das Management; die Interne Revision beurteilt sie." } },
    ],
  },
};
