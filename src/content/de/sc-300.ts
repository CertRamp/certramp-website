import type { DeContent } from "@/config/types";

/**
 * German edition of the SC-300 guide and free practice questions.
 * Faithful translation of src/content/guides/sc-300.ts and
 * src/content/practice-questions/sc-300.ts. Domain and objective names follow
 * the official German Microsoft Learn study guide (de-de); for d2 the
 * "Qualifikationen auf einen Blick" wording and weight are used, as in English.
 */
const GUIDE = {
  label: "Microsoft Learn — Studienleitfaden für SC-300 (englische Fassung)",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-300",
};

export const sc300De: DeContent = {
  slug: "sc-300",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten; lokalisierte Fassungen werden laut Microsoft etwa acht Wochen nach der englischen Version aktualisiert.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "SC-300" },
    { label: "Dauer", value: "100 Minuten" },
    { label: "Bestehensgrenze", value: "700 oder mehr (Skala 1–1000)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Deutsch, Spanisch, Französisch, Italienisch, Japanisch, Koreanisch, Portugiesisch (Brasilien), Chinesisch (vereinfacht), Chinesisch (traditionell)",
    },
    { label: "Durchführung", value: "Beaufsichtigte Prüfung, Terminbuchung über Pearson VUE" },
    {
      label: "Voraussetzungen",
      value:
        "Keine formalen Voraussetzungen. Microsoft empfiehlt Vertrautheit mit Azure, Microsoft 365, AD DS, PowerShell und KQL. Verlängerung alle 12 Monate über eine kostenlose Online-Bewertung auf Microsoft Learn.",
    },
    {
      label: "Prüfungsversion",
      value: "Gemessene Fähigkeiten ab dem 28. Oktober 2026 (Aktualisierung der englischen Prüfung am 28. Oktober 2026)",
    },
  ],
  domains: [
    {
      id: "d1",
      name: "Implementieren und Verwalten von Benutzeridentitäten",
      weight: "20–25 %",
      objectives: [
        "Konfigurieren und Verwalten eines Microsoft Entra-Mandanten",
        "Erstellen, Konfigurieren und Verwalten von Microsoft Entra-Identitäten",
        "Implementieren und Verwalten von Identitäten für externe Benutzer und Mandanten",
        "Implementieren und Verwalten der Hybrididentität",
      ],
    },
    {
      id: "d2",
      name: "Implementieren von Authentifizierung und Zugriffsverwaltung",
      weight: "25–30 % (der Detailabschnitt des Studienleitfadens nennt 20–25 %)",
      objectives: [
        "Planen, Implementieren und Verwalten der Microsoft Entra-Benutzerauthentifizierung",
        "Planen, Implementieren und Verwalten des bedingten Zugriffs für Microsoft Entra",
        "Risikomanagement mithilfe von Microsoft Entra ID Protection",
        "Implementieren des globalen sicheren Zugriffs",
      ],
    },
    {
      id: "d3",
      name: "Planen und Implementieren von Workloadidentitäten",
      weight: "20–25 %",
      objectives: [
        "Planen und Implementieren von Identitäten für Anwendungen und Azure-Workloads",
        "Planen, Implementieren und Überwachen der Integration von Unternehmensanwendungen",
        "Planen und Implementieren von Anwendungsregistrierungen",
        "Verwalten und Überwachen des Anwendungszugriffs mithilfe von Microsoft Defender for Cloud-Apps",
      ],
    },
    {
      id: "d4",
      name: "Planen und Automatisieren der Identitäts-Governance",
      weight: "20–25 %",
      objectives: [
        "Planen und Implementieren der Berechtigungsverwaltung in Microsoft Entra",
        "Planen, Implementieren und Verwalten der Zugriffsüberprüfung in Microsoft Entra",
        "Planen und Implementieren von privilegiertem Zugriff",
        "Überwachen von Identitätsaktivitäten mithilfe von Protokollen, Arbeitsmappen und Berichten",
      ],
    },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "sc-300",
    summary:
      "SC-300 (Microsoft Identity and Access Administrator) prüft, ob Sie Identitäts- und Zugriffsverwaltung mit Microsoft Entra implementieren und betreiben können: Benutzer- und Hybrididentitäten, Authentifizierung und bedingter Zugriff (Conditional Access), Workload-Identitäten und Unternehmensanwendungen sowie Identity Governance. Die Prüfung dauert 100 Minuten, zum Bestehen benötigen Sie 700 Punkte, und die englische Prüfung wird am 28. Oktober 2026 auf die neue Liste der gemessenen Fähigkeiten umgestellt.",
    whoFor: [
      "Identitäts- und Zugriffsadministratoren, die Microsoft Entra ID im Tagesgeschäft betreuen",
      "Microsoft 365- und Azure-Administratoren, die für Anmeldesicherheit, Conditional Access oder App-Integration zuständig sind",
      "Security Engineers, die für privilegierten Zugriff, Zugriffsüberprüfungen und Zero-Trust-Identitätskontrollen verantwortlich sind",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was SC-300 tatsächlich prüft",
        paragraphs: [
          "SC-300 umfasst vier Fähigkeitsbereiche: Benutzeridentitäten implementieren und verwalten, Authentifizierung und Zugriffsverwaltung implementieren, Workload-Identitäten planen und implementieren sowie Identity Governance planen und automatisieren. Jeder Bereich macht etwa ein Viertel der Prüfung aus. Der Studienleitfaden von Microsoft gibt für Authentifizierung und Zugriffsverwaltung in der Zusammenfassung 25–30 % und im Detailabschnitt 20–25 % an; planen Sie diesen Bereich daher mindestens so umfangreich ein wie die anderen.",
          "Die meisten Fragen beschreiben eine Anforderung einer Organisation und fragen nach der passenden Entra-Funktion oder der passenden Einstellung. Typische Entscheidungen: Verwaltungseinheit oder mandantenweite Rolle, Kennworthashsynchronisierung oder Passthrough-Authentifizierung, welche Bedingung und welches Steuerelement im bedingten Zugriff (Conditional Access), system- oder benutzerseitig zugewiesene verwaltete Identität, Zugriffspaket oder Zugriffsüberprüfung sowie berechtigte oder aktive PIM-Zuweisung.",
        ],
      },
      {
        id: "october-2026-update",
        heading: "Was sich mit dem Update vom 28. Oktober 2026 ändert",
        paragraphs: [
          "Microsoft stuft die Änderungen vom Oktober 2026 als geringfügig ein. Angepasst wurden drei Unterbereiche: „Planen, Implementieren und Verwalten der Microsoft Entra-Benutzerauthentifizierung“ (Plan, implement, and manage Microsoft Entra user authentication), „Implementieren des globalen sicheren Zugriffs“ (Implement Global Secure Access) und „Planen und Implementieren von privilegiertem Zugriff“ (Plan and implement privileged access). Die übrigen Bereiche und das Zielgruppenprofil bleiben unverändert.",
          "Die aktuelle Gliederung erwartet, dass Sie moderne Authentifizierungsmethoden kennen (zertifikatbasierte Authentifizierung, Temporary Access Pass, Microsoft Authenticator und Passkeys), außerdem den globalen sicheren Zugriff (Global Secure Access) mit Microsoft Entra Private Access und Internet Access sowie PIM für Microsoft Entra-Rollen, Azure-Ressourcen und Gruppen. Lokalisierte Fassungen der Prüfung werden etwa acht Wochen nach der englischen Version aktualisiert.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den eigenen Stand am Studienleitfaden messen",
            body: "Gehen Sie jeden Punkt der offiziellen SC-300-Liste der gemessenen Fähigkeiten durch und markieren Sie ihn als bekannt, unsicher oder neu. Die vier Bereiche sind ähnlich gewichtet, lassen Sie also keinen aus.",
          },
          {
            title: "Einen Labormandanten aufbauen",
            body: "Verwenden Sie einen Microsoft 365 E5-Testmandanten (oder eine Entwickler-Sandbox, falls Ihr Visual Studio-Abonnement dafür berechtigt), damit Microsoft Entra ID P2-Features wie PIM, ID Protection und Zugriffsüberprüfungen verfügbar sind. Legen Sie Testbenutzer, Gruppen, Verwaltungseinheiten und einige Conditional-Access-Richtlinien im Nur-Bericht-Modus (Report-only) an.",
          },
          {
            title: "Den Identitätslebenszyklus vollständig durchspielen",
            body: "Laden Sie einen Gast ein, gewähren Sie ihm Zugriff über ein Zugriffspaket, überprüfen Sie diesen Zugriff und lassen Sie ihn ablaufen. Aktivieren Sie anschließend eine Rolle mit PIM und lesen Sie den Überwachungsverlauf. Wer den ganzen Zyklus einmal gesehen hat, beantwortet Governance-Fragen deutlich leichter.",
          },
          {
            title: "Die Microsoft-Learn-Lernpfade durcharbeiten",
            body: "Folgen Sie den kostenlosen SC-300-Lernpfaden und gleichen Sie jedes Modul mit der aktuellen Gliederung ab, insbesondere Global Secure Access und Workload-Identitäten.",
          },
          {
            title: "Unter Zeitdruck üben",
            body: "Legen Sie Übungsprüfungen mit 40–60 Fragen in 100 Minuten ab und lesen Sie jede Erklärung, auch bei Fragen, die Sie richtig beantwortet haben.",
          },
          {
            title: "Buchen, wenn Ihre Ergebnisse stabil sind",
            body: "Buchen Sie die Prüfung, sobald Sie mehrere Übungsprüfungen mit Abstand bestehen. Planen Sie die kostenlose jährliche Verlängerungsbewertung auf Microsoft Learn gleich mit ein.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Microsoft Entra-Rollen und Azure RBAC-Rollen verwechseln. Entra-Rollen verwalten das Verzeichnis und Microsoft 365, Azure-Rollen verwalten Azure-Ressourcen. PIM deckt beide ab, sie werden aber getrennt konfiguriert.",
          "Conditional Access nur als „MFA erzwingen“ lernen. Sie sollten Zuweisungen, Bedingungen, Gewährungs- und Sitzungssteuerungen, den Nur-Bericht-Modus, die fortlaufende Zugriffsevaluierung (Continuous Access Evaluation), den Authentifizierungskontext und geschützte Aktionen kennen.",
          "Hybrididentität als Randthema behandeln. Entra Connect Sync, Cloud Sync, Kennworthashsynchronisierung, Passthrough-Authentifizierung und nahtloses SSO stehen alle in der Gliederung.",
          "Workload-Identitäten überspringen. Verwaltete Identitäten, Dienstprinzipale, App-Registrierungen, Einwilligung (Consent) und Defender for Cloud Apps bilden einen ganzen Fähigkeitsbereich.",
          "Governance-Werkzeuge verwechseln. Die Berechtigungsverwaltung (Entitlement Management) gewährt Zugriff über Zugriffspakete; Zugriffsüberprüfungen prüfen, ob bestehender Zugriff noch benötigt wird; PIM steuert, wann privilegierte Rollen aktiv sind.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die SC-300-Prüfung und wie hoch ist die Bestehensgrenze?",
        answer:
          "Sie haben 100 Minuten Zeit. Microsoft verlangt zum Bestehen 700 Punkte oder mehr. Die genaue Fragenzahl für SC-300 veröffentlicht Microsoft nicht; laut Microsoft haben die meisten seiner Zertifizierungsprüfungen zwischen 40 und 60 Fragen.",
      },
      {
        question: "Wie verlängere ich die SC-300-Zertifizierung?",
        answer:
          "Die Zertifizierung Identity and Access Administrator Associate muss alle 12 Monate verlängert werden. Sie verlängern sie kostenlos, indem Sie innerhalb des sechsmonatigen Verlängerungszeitraums eine Online-Bewertung auf Microsoft Learn bestehen.",
      },
      {
        question: "Welche gemessenen Fähigkeiten ändern sich am 28. Oktober 2026?",
        answer:
          "Microsoft nennt geringfügige Änderungen in „Planen, Implementieren und Verwalten der Microsoft Entra-Benutzerauthentifizierung“, „Implementieren des globalen sicheren Zugriffs“ und „Planen und Implementieren von privilegiertem Zugriff“. Alle anderen Bereiche bleiben unverändert.",
      },
      {
        question: "Gibt es formale Voraussetzungen für SC-300?",
        answer:
          "Nein. Microsoft empfiehlt Vertrautheit mit Azure, Microsoft 365-Diensten und -Workloads, Active Directory Domain Services, PowerShell und der Kusto Query Language (KQL).",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. SC-300 wird auch auf Deutsch angeboten. Lokalisierte Fassungen werden laut Microsoft etwa acht Wochen nach der englischen Version aktualisiert, sodass die deutsche Fassung nach dem Update vom 28. Oktober 2026 vorübergehend noch der vorherigen Gliederung folgen kann.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach der von Microsoft veröffentlichten Gliederung der gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "SC-300 Prüfungsvorbereitung 2026: Inhalte & Lernplan",
      description:
        "SC-300 Leitfaden zum Stand 28.10.2026: 100 Minuten, Bestehensgrenze 700, Entra ID, Conditional Access, PIM, Governance und ein Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "sc-300",
    intro:
      "15 eigene SC-300-Übungsfragen zu den vier Fähigkeitsbereichen des Microsoft-Studienleitfadens (gemessene Fähigkeiten ab dem 28. Oktober 2026), ungefähr wie in der echten Prüfung gewichtet. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Antwortoption falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "SC-300 Übungsfragen mit Lösungen & Erklärungen (2026)",
      description:
        "15 kostenlose, eigene SC-300-Übungsfragen zu Microsoft Entra ID, Conditional Access, Workload-Identitäten, PIM und Governance – jeweils erklärt.",
    },
    questions: [
      /* ── Bereich 1: Implementieren und Verwalten von Benutzeridentitäten ── */
      {
        id: "sc300-d1-admin-units",
        domain: "d1",
        objective: "Konfigurieren und Verwalten eines Microsoft Entra-Mandanten",
        difficulty: "intermediate",
        question:
          "Regionale Supportmitarbeitende in Deutschland sollen Kennwörter nur für Benutzer der deutschen Tochtergesellschaft zurücksetzen können, nicht für andere Benutzer im Mandanten. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Die Rolle „Helpdeskadministrator“ mit Mandantenbereich zuweisen", rationale: "Eine mandantenweite Zuweisung würde den Mitarbeitenden erlauben, Kennwörter aller infrage kommenden Benutzer zurückzusetzen, nicht nur die der deutschen." },
          { id: "B", text: "Eine Verwaltungseinheit für die deutschen Benutzer erstellen und die Rolle „Helpdeskadministrator“ auf diese Einheit begrenzt zuweisen", rationale: "Richtig. Verwaltungseinheiten beschränken die Berechtigungen einer Rolle auf die Benutzer, Gruppen oder Geräte, die Sie ihnen hinzufügen." },
          { id: "C", text: "Eine Conditional-Access-Richtlinie für die deutschen Benutzer erstellen", rationale: "Conditional Access steuert, wie sich Benutzer anmelden; administrative Berechtigungen delegiert es nicht." },
          { id: "D", text: "Eine dynamische Gruppe für die deutschen Benutzer erstellen", rationale: "Eine Gruppe allein schränkt den Bereich einer Administratorrolle nicht ein." },
        ],
        answer: "B",
        explanation:
          "Verwaltungseinheiten (Administrative Units) sind der Standardweg, um die Verwaltung für einen Teil der Organisation zu delegieren, etwa für eine Region oder Abteilung. Wird eine Rolle ohne Verwaltungseinheit als Bereich zugewiesen, gilt sie für den gesamten Mandanten.",
        reference: { label: "Microsoft Learn — Verwaltungseinheiten in Microsoft Entra ID", url: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units" },
      },
      {
        id: "sc300-d1-cross-tenant-sync",
        domain: "d1",
        objective: "Implementieren und Verwalten von Identitäten für externe Benutzer und Mandanten",
        difficulty: "advanced",
        question:
          "Ihre Organisation nutzt nach einer Übernahme drei Microsoft Entra-Mandanten. Benutzer aus dem Hauptmandanten sollen automatisch Konten in den beiden anderen Mandanten erhalten, und diese Konten sollen aktualisiert und entfernt werden, wenn sich Benutzer ändern oder ausscheiden. Welches Feature sollten Sie implementieren?",
        options: [
          { id: "A", text: "Die Benutzer einzeln als B2B-Gäste einladen", rationale: "Manuelle Einladungen erstellen zwar Konten, halten sie aber nicht automatisch aktuell und entfernen sie nicht automatisch." },
          { id: "B", text: "Microsoft Entra Connect Sync", rationale: "Entra Connect Sync synchronisiert vom lokalen Active Directory nach Microsoft Entra ID, nicht zwischen Entra-Mandanten." },
          { id: "C", text: "Verwaltungseinheiten", rationale: "Verwaltungseinheiten begrenzen die Verwaltung innerhalb eines Mandanten; Konten in anderen Mandanten erstellen sie nicht." },
          { id: "D", text: "Mandantenübergreifende Synchronisierung (Cross-tenant synchronization)", rationale: "Richtig. Die mandantenübergreifende Synchronisierung automatisiert das Erstellen, Aktualisieren und Löschen von B2B-Collaboration-Benutzern über die Mandanten einer Organisation hinweg." },
        ],
        answer: "D",
        explanation:
          "Die mandantenübergreifende Synchronisierung ist für Organisationen mit mehreren Mandanten gedacht. Sie erstellt B2B-Collaboration-Benutzer in den Zielmandanten, standardmäßig als externe Mitglieder, und hält sie mit dem Quellmandanten synchron.",
        reference: { label: "Microsoft Learn — Übersicht über die mandantenübergreifende Synchronisierung", url: "https://learn.microsoft.com/en-us/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-overview" },
      },
      {
        id: "sc300-d1-pta",
        domain: "d1",
        objective: "Implementieren und Verwalten der Hybrididentität",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen synchronisiert sein lokales Active Directory mit Microsoft Entra ID. Die Sicherheitsrichtlinie verlangt, dass Cloudanmeldungen zum Anmeldezeitpunkt direkt gegen die lokalen Domänencontroller geprüft werden, damit lokale Kontorichtlinien wie Anmeldezeiten sofort greifen. Welche Anmeldemethode erfüllt diese Anforderung?",
        options: [
          { id: "A", text: "Passthrough-Authentifizierung", rationale: "Richtig. Bei der Passthrough-Authentifizierung prüfen lokale Agents das Kennwort bei der Anmeldung gegen Active Directory, sodass der lokale Kontostatus und lokale Richtlinien bei der Anmeldung durchgesetzt werden." },
          { id: "B", text: "Nur Kennworthashsynchronisierung", rationale: "Bei der Kennworthashsynchronisierung werden Anmeldungen in Microsoft Entra ID gegen einen synchronisierten Hash geprüft, nicht zum Anmeldezeitpunkt gegen die Domänencontroller." },
          { id: "C", text: "Reine Cloudkonten mit Self-Service-Kennwortzurücksetzung", rationale: "Reine Cloudkonten sind überhaupt nicht an das lokale Active Directory gebunden." },
          { id: "D", text: "Temporary Access Pass", rationale: "Ein Temporary Access Pass (temporärer Zugriffspass) ist ein zeitlich begrenzter Passcode für Onboarding oder Wiederherstellung, keine hybride Anmeldemethode." },
        ],
        answer: "A",
        explanation:
          "Die Kennworthashsynchronisierung ist einfach und ausfallsicher, die Authentifizierung findet aber in der Cloud statt. Muss die Prüfung bei der Anmeldung gegen lokale Domänencontroller erfolgen, ist die Passthrough-Authentifizierung die passende Wahl; nahtloses SSO lässt sich mit beiden Methoden kombinieren.",
        reference: GUIDE,
      },
      {
        id: "sc300-d1-dynamic-group",
        domain: "d1",
        objective: "Erstellen, Konfigurieren und Verwalten von Microsoft Entra-Identitäten",
        difficulty: "foundation",
        question:
          "Alle Benutzer, deren Attribut „department“ den Wert „Finance“ hat, sollen Mitglied einer Sicherheitsgruppe sein, und die Mitgliedschaft soll sich automatisch anpassen, wenn sich die Abteilung eines Benutzers ändert. Was sollten Sie erstellen?",
        options: [
          { id: "A", text: "Eine Sicherheitsgruppe mit zugewiesener Mitgliedschaft", rationale: "Bei zugewiesener Mitgliedschaft fügt ein Administrator Mitglieder manuell hinzu und entfernt sie manuell." },
          { id: "B", text: "Eine Verwaltungseinheit", rationale: "Verwaltungseinheiten begrenzen die Verwaltung; sie dienen nicht wie eine Sicherheitsgruppe dazu, Zugriff zu gewähren." },
          { id: "C", text: "Eine Sicherheitsgruppe mit dynamischer Mitgliedschaft auf Basis des Attributs „department“", rationale: "Richtig. Regeln für dynamische Mitgliedschaft fügen Benutzer anhand ihrer Attribute automatisch hinzu und entfernen sie wieder." },
          { id: "D", text: "Eine Verteilerliste in Exchange Online", rationale: "Verteilerlisten dienen dem E-Mail-Versand und sind keine Sicherheitsgruppen in Microsoft Entra ID." },
        ],
        answer: "C",
        explanation:
          "Gruppen mit dynamischer Mitgliedschaft halten die Mitgliedschaft im Einklang mit Benutzerattributen wie Abteilung oder Position. Das reduziert manuellen Aufwand und das Risiko vergessener Zugriffe, wenn Personen ihre Rolle wechseln.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Implementieren von Authentifizierung und Zugriffsverwaltung ── */
      {
        id: "sc300-d2-tap",
        domain: "d2",
        objective: "Planen, Implementieren und Verwalten der Microsoft Entra-Benutzerauthentifizierung",
        difficulty: "intermediate",
        question:
          "Neue Mitarbeitende sollen an ihrem ersten Arbeitstag einen Passkey (FIDO2) registrieren, ohne jemals ein Kennwort zu erhalten. Was sollte der Administrator ausstellen, damit sie sich zum ersten Mal anmelden können?",
        options: [
          { id: "A", text: "Einen Link zur Self-Service-Kennwortzurücksetzung", rationale: "SSPR setzt ein vorhandenes Kennwort zurück; ein Benutzer ohne Anmeldeinformationen kann sich damit nicht anmelden, um eine kennwortlose Methode zu registrieren." },
          { id: "B", text: "Einen Einmalcode per SMS, ohne registrierte Telefonnummer", rationale: "SMS setzt eine bereits für den Benutzer registrierte Telefonnummer voraus und vermeidet für sich allein kein Kennwort." },
          { id: "C", text: "Einen Temporary Access Pass", rationale: "Richtig. Ein Temporary Access Pass ist ein zeitlich begrenzter Passcode, mit dem sich Benutzer anmelden und kennwortlose Methoden wie Passkeys einrichten können." },
          { id: "D", text: "Eine Ausnahme von den Sicherheitsstandards", rationale: "Benutzer von den Sicherheitsstandards (Security Defaults) auszunehmen schwächt den Schutz und gibt ihnen keine Möglichkeit, sich anzumelden." },
        ],
        answer: "C",
        explanation:
          "Der Temporary Access Pass ist der Standardeinstieg für kennwortloses Onboarding und für die Wiederherstellung, wenn ein Benutzer eine starke Methode verliert. Er kann innerhalb seiner Gültigkeitsdauer für einmalige oder mehrfache Verwendung konfiguriert werden.",
        reference: { label: "Microsoft Learn — Temporary Access Pass", url: "https://learn.microsoft.com/en-us/entra/identity/authentication/howto-authentication-temporary-access-pass" },
      },
      {
        id: "sc300-d2-report-only",
        domain: "d2",
        objective: "Planen, Implementieren und Verwalten des bedingten Zugriffs für Microsoft Entra",
        difficulty: "foundation",
        question:
          "Sie haben eine Conditional-Access-Richtlinie geschrieben, die Legacy-Authentifizierung blockiert. Bevor Sie sie durchsetzen, möchten Sie sehen, welche Benutzer und Anmeldungen betroffen wären, ohne jemanden zu blockieren. Was sollten Sie tun?",
        options: [
          { id: "A", text: "Die Richtlinie in den Nur-Bericht-Modus setzen und die Ergebnisse in den Anmeldeprotokollen auswerten", rationale: "Richtig. Im Nur-Bericht-Modus (Report-only) wird die Richtlinie bei jeder Anmeldung ausgewertet und das Ergebnis protokolliert, aber nicht durchgesetzt." },
          { id: "B", text: "Die Richtlinie für alle Benutzer aktivieren und auf Helpdesk-Tickets warten", rationale: "Damit wird die Richtlinie sofort durchgesetzt, und Benutzer könnten ausgesperrt werden." },
          { id: "C", text: "Die Sicherheitsstandards aktivieren", rationale: "Die Sicherheitsstandards sind eine eigene Basiskonfiguration und zeigen nicht die Auswirkungen Ihrer benutzerdefinierten Richtlinie." },
          { id: "D", text: "Eine Zugriffsüberprüfung für die Richtlinie erstellen", rationale: "Zugriffsüberprüfungen prüfen den Zugriff auf Gruppen, Apps oder Rollen; Conditional-Access-Richtlinien simulieren sie nicht." },
        ],
        answer: "A",
        explanation:
          "Das Testen und die Fehlerbehebung von Richtlinien gehören zur Gliederung. Mit dem Nur-Bericht-Modus, dem What If-Tool und den Anmeldeprotokollen messen Sie die Auswirkungen, bevor Sie eine Richtlinie einschalten.",
        reference: GUIDE,
      },
      {
        id: "sc300-d2-user-risk",
        domain: "d2",
        objective: "Risikomanagement mithilfe von Microsoft Entra ID Protection",
        difficulty: "intermediate",
        question:
          "Microsoft Entra ID Protection erkennt bei einigen Benutzern kompromittierte Anmeldeinformationen und stuft ihr Benutzerrisiko als hoch ein. Diese Benutzer sollen das Problem bei der nächsten Anmeldung selbst beheben, ohne den Helpdesk einzuschalten. Welches Gewährungssteuerelement sollte die risikobasierte Richtlinie für bedingten Zugriff verlangen?",
        options: [
          { id: "A", text: "Zugriff dauerhaft blockieren", rationale: "Eine Blockierung stoppt den Angreifer, verhindert aber auch die Selbstbehebung und erfordert ein Eingreifen des Administrators." },
          { id: "B", text: "Nur ein konformes Gerät", rationale: "Ein konformes Gerät ändert nichts am kompromittierten Kennwort; das Risiko bleibt bestehen." },
          { id: "C", text: "Die Nutzungsbedingungen akzeptieren", rationale: "Nutzungsbedingungen haben nichts mit der Behebung kompromittierter Anmeldeinformationen zu tun." },
          { id: "D", text: "Mehrstufige Authentifizierung, gefolgt von einer sicheren Kennwortänderung", rationale: "Richtig. Wird bei Benutzerrisiko nach der MFA eine sichere Kennwortänderung verlangt, beheben Benutzer kompromittierte Anmeldeinformationen selbst, und das Risiko wird zurückgesetzt." },
        ],
        answer: "D",
        explanation:
          "Eine nützliche Faustregel: Anmelderisiko wird in der Regel mit MFA behoben, Benutzerrisiko mit einer sicheren Kennwortänderung. Beides setzt voraus, dass sich die Benutzer zuvor für MFA registriert haben. In aktuellen Conditional-Access-Richtlinien wird dies mit der Gewährungssteuerung „Require risk remediation“ konfiguriert, die Benutzer mit Kennwort zur MFA und anschließend zu einer sicheren Kennwortänderung auffordert.",
        reference: GUIDE,
      },
      {
        id: "sc300-d2-private-access",
        domain: "d2",
        objective: "Implementieren des globalen sicheren Zugriffs",
        difficulty: "advanced",
        question:
          "Mitarbeitende im Homeoffice nutzen derzeit ein VPN, um interne Dateiserver und Fachanwendungen über FQDN und IP-Adresse zu erreichen. Das Unternehmen möchte das VPN ablösen und Conditional Access auf diesen Datenverkehr anwenden. Welche Lösung sollten Sie bereitstellen?",
        options: [
          { id: "A", text: "Microsoft Entra Internet Access", rationale: "Internet Access sichert den Zugriff auf Internet- und SaaS-Ziele, nicht auf private interne Ressourcen." },
          { id: "B", text: "Microsoft Entra Private Access mit dem Global Secure Access-Client und privaten Netzwerkconnectors", rationale: "Richtig. Mit Private Access definieren Sie private FQDNs und IP-Bereiche, vermitteln Verbindungen über private Netzwerkconnectors und schützen den Zugriff mit Conditional Access – als Ersatz für ein VPN." },
          { id: "C", text: "Mandantenübergreifende Zugriffseinstellungen", rationale: "Diese steuern die Zusammenarbeit mit anderen Entra-Mandanten, nicht den Zugriff auf interne Server." },
          { id: "D", text: "Self-Service-Kennwortzurücksetzung", rationale: "Bei SSPR geht es um die Wiederherstellung von Kennwörtern; Netzwerkzugriff bietet es nicht." },
        ],
        answer: "B",
        explanation:
          "Global Secure Access hat getrennte Datenverkehrsprofile: Private Access für interne Ressourcen, Internet Access für Internet- und SaaS-Datenverkehr und das Microsoft-Datenverkehrsprofil für Microsoft 365. Benutzer verbinden sich über den Global Secure Access-Client.",
        reference: { label: "Microsoft Learn — Microsoft Entra Private Access", url: "https://learn.microsoft.com/en-us/entra/global-secure-access/concept-private-access" },
      },

      /* ── Bereich 3: Planen und Implementieren von Workloadidentitäten ── */
      {
        id: "sc300-d3-user-assigned-mi",
        domain: "d3",
        objective: "Planen und Implementieren von Identitäten für Anwendungen und Azure-Workloads",
        difficulty: "intermediate",
        question:
          "Zwanzig virtuelle Computer einer horizontal skalierten Anwendung benötigen alle dieselben Berechtigungen, um Geheimnisse aus einem Azure Key Vault zu lesen. Die Computer werden häufig erstellt und gelöscht. Welcher Identitätsansatz lässt sich am einfachsten verwalten?",
        options: [
          { id: "A", text: "Eine benutzerseitig zugewiesene verwaltete Identität, die allen virtuellen Computern zugeordnet ist", rationale: "Richtig. Eine benutzerseitig zugewiesene verwaltete Identität hat einen eigenen Lebenszyklus und kann von vielen Ressourcen gemeinsam genutzt werden; Sie gewähren den Key Vault-Zugriff also nur einmal." },
          { id: "B", text: "Eine systemseitig zugewiesene verwaltete Identität auf jedem virtuellen Computer", rationale: "Systemseitig zugewiesene Identitäten sind jeweils an genau eine Ressource gebunden; jeder neue Computer bräuchte eine eigene Zugriffsberechtigung, und die Identität wird mit dem Computer gelöscht." },
          { id: "C", text: "Ein Dienstprinzipal mit einem auf jedem Computer gespeicherten geheimen Clientschlüssel", rationale: "Geheimnisse auf Computern müssen rotiert und geschützt werden – genau das vermeiden verwaltete Identitäten." },
          { id: "D", text: "Ein gemeinsames Benutzerkonto, dessen Kennwort in einem Skript gespeichert ist", rationale: "Ein Benutzerkonto mit gespeichertem Kennwort für eine Workload zu verwenden ist unsicher und schwer zu verwalten." },
        ],
        answer: "A",
        explanation:
          "Systemseitig zugewiesene Identitäten teilen den Lebenszyklus ihrer Ressource und können nicht gemeinsam genutzt werden. Benutzerseitig zugewiesene Identitäten sind unabhängig und können mehr als einer Ressource zugeordnet werden – ideal für Gruppen austauschbarer Computer.",
        reference: { label: "Microsoft Learn — Verwaltete Identitäten für Azure-Ressourcen", url: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview" },
      },
      {
        id: "sc300-d3-app-proxy",
        domain: "d3",
        objective: "Planen, Implementieren und Überwachen der Integration von Unternehmensanwendungen",
        difficulty: "intermediate",
        question:
          "Eine ältere Webanwendung läuft auf einem internen Server und verwendet die integrierte Windows-Authentifizierung. Remotebenutzer sollen sie über die Microsoft Entra-Anmeldung und Conditional Access erreichen, ohne dass eingehende Firewallports geöffnet werden. Welches Feature nennt der Studienleitfaden für diese Integration?",
        options: [
          { id: "A", text: "Eine SAML-basierte Kataloganwendung", rationale: "SAML-Kataloganwendungen sind für Anwendungen gedacht, die einen Verbund unterstützen; diese App ist intern und nutzt Windows-Authentifizierung." },
          { id: "B", text: "Mandantenübergreifende Synchronisierung", rationale: "Diese synchronisiert Benutzer zwischen Mandanten und hat mit der Veröffentlichung von Apps nichts zu tun." },
          { id: "C", text: "Microsoft Entra Application Proxy", rationale: "Richtig. Application Proxy (Anwendungsproxy) veröffentlicht lokale Web-Apps über ausgehende Connectors, sodass sich Benutzer mit Microsoft Entra ID anmelden und Conditional Access greift." },
          { id: "D", text: "Microsoft Entra Connect Health", rationale: "Connect Health überwacht Komponenten der Hybrididentität; Anwendungen veröffentlicht es nicht." },
        ],
        answer: "C",
        explanation:
          "Die Gliederung nennt die Integration lokaler Apps mithilfe des Microsoft Entra-Anwendungsproxys (Design and implement integration for on-premises apps by using Microsoft Entra Application Proxy). Der Connector baut nur ausgehende Verbindungen auf, deshalb sind keine eingehenden Ports nötig.",
        reference: GUIDE,
      },
      {
        id: "sc300-d3-app-permissions",
        domain: "d3",
        objective: "Planen und Implementieren von Anwendungsregistrierungen",
        difficulty: "advanced",
        question:
          "Sie registrieren einen Hintergrunddienst, der jede Nacht ohne angemeldeten Benutzer läuft und über Microsoft Graph die Kalender aller Benutzer lesen muss. Welche Berechtigungskonfiguration ist erforderlich?",
        options: [
          { id: "A", text: "Delegierte Berechtigungen mit Benutzereinwilligung", rationale: "Delegierte Berechtigungen handeln im Namen eines angemeldeten Benutzers, dieser Dienst läuft aber ohne einen." },
          { id: "B", text: "Anwendungsberechtigungen mit Administratoreinwilligung", rationale: "Richtig. Dienste, die ohne angemeldeten Benutzer laufen, verwenden Anwendungsberechtigungen, für die ein Administrator die Einwilligung erteilen muss." },
          { id: "C", text: "Eine App-Rolle, die jedem Benutzer zugewiesen wird", rationale: "App-Rollen beschreiben Rollen innerhalb Ihrer eigenen Anwendung; Zugriff auf Microsoft Graph-Daten gewähren sie nicht." },
          { id: "D", text: "Eine Conditional-Access-Richtlinie für die App", rationale: "Conditional Access steuert die Zugriffsbedingungen; API-Berechtigungen gewährt es nicht." },
        ],
        answer: "B",
        explanation:
          "Delegierte Berechtigungen sind auf das beschränkt, was der angemeldete Benutzer tun darf; mit Anwendungsberechtigungen handelt die App mandantenweit in eigenem Namen. Weil Anwendungsberechtigungen weitreichend sein können, erfordern sie immer eine Administratoreinwilligung.",
        reference: GUIDE,
      },

      /* ── Bereich 4: Planen und Automatisieren der Identitäts-Governance ── */
      {
        id: "sc300-d4-access-package",
        domain: "d4",
        objective: "Planen und Implementieren der Berechtigungsverwaltung in Microsoft Entra",
        difficulty: "intermediate",
        question:
          "Mitarbeitende eines Partnerunternehmens benötigen für ein sechsmonatiges Projekt Zugriff auf ein Team in Teams, eine SharePoint-Website und eine App. Sie sollen den Zugriff selbst beantragen, eine Projektleitung soll ihn genehmigen, und der Zugriff soll automatisch enden. Was sollten Sie erstellen?",
        options: [
          { id: "A", text: "Eine Gasteinladung für jede Person, mit späterer manueller Entfernung", rationale: "Manuelle Einladungen und Entfernungen bieten weder Self-Service-Anträge noch Genehmigung oder automatischen Ablauf." },
          { id: "B", text: "Eine dynamische Gruppe auf Basis der E-Mail-Domäne des Partners", rationale: "Eine dynamische Gruppe bietet weder einen Antrags- und Genehmigungsprozess noch einen automatischen Ablauf." },
          { id: "C", text: "Eine berechtigte PIM-Zuweisung für jede Ressource", rationale: "PIM verwaltet privilegierte Rollen und Gruppen; es ist nicht das Werkzeug, um Projektressourcen für externe Benutzer zu bündeln." },
          { id: "D", text: "Ein Zugriffspaket in einem Katalog mit einer Richtlinie für die verbundene Organisation, die Genehmigung und Ablauf umfasst", rationale: "Richtig. Zugriffspakete bündeln Ressourcen und legen fest, wer sie anfordern kann, wer genehmigt und wann der Zugriff abläuft." },
        ],
        answer: "D",
        explanation:
          "Die Berechtigungsverwaltung deckt den gesamten Zugriffslebenszyklus für interne und externe Benutzer ab. Über verbundene Organisationen legen Sie fest, welche Partnerbenutzer ein Paket anfordern können, und der Ablauf entfernt den Zugriff ohne manuelles Aufräumen.",
        reference: GUIDE,
      },
      {
        id: "sc300-d4-access-review",
        domain: "d4",
        objective: "Planen, Implementieren und Verwalten der Zugriffsüberprüfung in Microsoft Entra",
        difficulty: "foundation",
        question:
          "Die Auditoren verlangen, dass die Gruppenbesitzer die Mitgliedschaft von Gastbenutzern in einer sensiblen Microsoft 365-Gruppe jedes Quartal bestätigen und dass der Zugriff entfernt wird, wenn er nicht bestätigt wird. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Eine wiederkehrende Zugriffsüberprüfung der Gruppe, auf Gastbenutzer beschränkt, mit automatischer Anwendung der Ergebnisse", rationale: "Richtig. Zugriffsüberprüfungen können vierteljährlich wiederkehren, sich auf Gäste beschränken, Gruppenbesitzer als Prüfer einsetzen und – je nach Einstellungen – abgelehnten oder nicht überprüften Zugriff automatisch entfernen." },
          { id: "B", text: "Eine Conditional-Access-Richtlinie für Gastbenutzer", rationale: "Conditional Access steuert Anmeldebedingungen; ob ein Zugriff noch benötigt wird, bestätigt es nicht." },
          { id: "C", text: "Nutzungsbedingungen", rationale: "Bei Nutzungsbedingungen akzeptieren Benutzer ein Dokument; Besitzer bestätigen damit keinen Zugriff." },
          { id: "D", text: "Eine Verwaltungseinheit für Gastbenutzer", rationale: "Verwaltungseinheiten begrenzen die Verwaltung; Zugriff überprüfen sie nicht." },
        ],
        answer: "A",
        explanation:
          "Zugriffsüberprüfungen beantworten die Frage „Braucht diese Person diesen Zugriff noch?“. Wiederholung, Wahl der Prüfer und automatische Anwendung machen sie zu einer prüfungssicheren Kontrolle.",
        reference: GUIDE,
      },
      {
        id: "sc300-d4-pim",
        domain: "d4",
        objective: "Planen und Implementieren von privilegiertem Zugriff",
        difficulty: "intermediate",
        question:
          "Administratoren sollen die Rolle „Exchange-Administrator“ nur dann innehaben, wenn sie sie benötigen – zeitlich begrenzt, nach Angabe einer Begründung und nach Genehmigung. Wie sollten Sie die Rolle in Privileged Identity Management zuweisen?",
        options: [
          { id: "A", text: "Als dauerhafte aktive Zuweisung", rationale: "Eine aktive Zuweisung gewährt die Rolle ständig, ohne Aktivierungsschritt." },
          { id: "B", text: "Über eine dynamische Gruppe, der die Rolle dauerhaft zugewiesen ist", rationale: "Gruppen mit dynamischer Mitgliedschaft können keine Microsoft Entra-Rollen zugewiesen werden, und eine dauerhafte Gruppenzuweisung brächte ohnehin weder Aktivierung noch Begründung oder Genehmigung." },
          { id: "C", text: "Als Authentifizierungskontext für Conditional Access", rationale: "Ein Authentifizierungskontext kann die Anforderungen für sensible Aktionen verschärfen, macht eine Rollenzuweisung aber nicht zu einer Just-in-Time-Zuweisung." },
          { id: "D", text: "Als berechtigte Zuweisung mit Rolleneinstellungen, die bei der Aktivierung Begründung und Genehmigung verlangen", rationale: "Richtig. Berechtigte Benutzer müssen die Rolle bei Bedarf aktivieren, und die PIM-Rolleneinstellungen können Begründung, MFA und Genehmigung bei begrenzter Aktivierungsdauer verlangen." },
        ],
        answer: "D",
        explanation:
          "Berechtigte und aktive Zuweisungen gewähren dieselben Rechte; der Unterschied ist, dass berechtigte Benutzer die Rolle zuerst aktivieren müssen. Die zeitlich begrenzte Just-in-Time-Aktivierung mit Genehmigung ist der Kerngedanke von PIM.",
        reference: { label: "Microsoft Learn — Was ist Privileged Identity Management?", url: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure" },
      },
      {
        id: "sc300-d4-diagnostic-settings",
        domain: "d4",
        objective: "Überwachen von Identitätsaktivitäten mithilfe von Protokollen, Arbeitsmappen und Berichten",
        difficulty: "intermediate",
        question:
          "Das Sicherheitsteam möchte die Anmelde- und Überwachungsprotokolle von Microsoft Entra länger aufbewahren als mit der integrierten Aufbewahrung und sie zusammen mit anderen Protokollen per KQL abfragen. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Eine Zugriffsüberprüfung der Protokolle", rationale: "Zugriffsüberprüfungen prüfen Zugriffsrechte; Protokolle speichern oder weiterleiten können sie nicht." },
          { id: "B", text: "Identity Secure Score", rationale: "Secure Score misst den Sicherheitsstatus; Protokolle exportiert er nicht." },
          { id: "C", text: "Diagnoseeinstellungen, die die Protokolle an einen Log Analytics-Arbeitsbereich senden", rationale: "Richtig. Diagnoseeinstellungen leiten Entra-Protokolle an Ziele wie einen Log Analytics-Arbeitsbereich weiter, wo Sie sie länger aufbewahren und mit KQL abfragen können." },
          { id: "D", text: "Ein täglicher CSV-Download aus dem Bereich der Anmeldeprotokolle", rationale: "Manuelle Downloads sind fehleranfällig und ermöglichen keine KQL-Abfragen zusammen mit anderen Protokollen." },
        ],
        answer: "C",
        explanation:
          "Diagnoseeinstellungen können Protokolle an einen Log Analytics-Arbeitsbereich, ein Speicherkonto oder Azure Event Hubs senden. Log Analytics ist die richtige Wahl, wenn Sie KQL-Abfragen und Arbeitsmappen nutzen möchten.",
        reference: GUIDE,
      },
    ],
  },
};
