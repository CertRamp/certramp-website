import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for Microsoft AB-900 (Microsoft 365 Copilot
 * and Agent Administration Fundamentals). Exam facts follow the verified record in
 * src/config/certifications.ts (Microsoft Learn study guide, exam and certification
 * pages, checked 2026-11-04). Domain and objective names follow the German study guide
 * (skills measured as of 14 October 2026, read 2026-11-25), with obvious
 * capitalisation slips of the machine translation corrected.
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn: Studienleitfaden für Prüfung AB-900",
  url: "https://learn.microsoft.com/de-de/credentials/certifications/resources/study-guides/ab-900",
};

export const ab900De: DeContent = {
  slug: "ab-900",
  name: "Microsoft AB-900: Copilot and Agent Administration Fundamentals",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten. Die englische Fassung wurde am 14. Oktober 2026 geringfügig aktualisiert; lokalisierte Fassungen folgen laut Microsoft etwa acht Wochen später.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "AB-900" },
    { label: "Dauer", value: "45 Minuten" },
    { label: "Bestehensgrenze", value: "700 oder mehr (skaliert)" },
    {
      label: "Prüfungssprachen",
      value:
        "13, darunter Deutsch, Englisch, Französisch, Italienisch, Spanisch, Japanisch, Koreanisch und Russisch",
    },
    {
      label: "Durchführung",
      value: "Beaufsichtigte Prüfung über Pearson VUE, für Lernende und Lehrkräfte auch über Certiport; kann interaktive Aufgaben enthalten",
    },
    {
      label: "Voraussetzungen",
      value: "Keine formalen. Microsoft erwartet Vertrautheit mit Microsoft 365, Sicherheit, Identität, Purview, Copilot und Agents sowie den Admin Centern",
    },
    { label: "Prüfungsversion", value: "Gemessene Fähigkeiten ab dem 14. Oktober 2026 (englische Fassung)" },
  ],
  domains: [
    { id: "d1", name: "Identifizieren der wichtigsten Features und Objekte von Microsoft 365-Diensten", weight: "30–35 %" },
    { id: "d2", name: "Grundlegendes zu Datenschutz- und Governanceaufgaben für Microsoft 365 und Copilot", weight: "35–40 %" },
    { id: "d3", name: "Ausführen grundlegender administrativer Aufgaben für Copilot und Agents", weight: "25–30 %" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "ab-900",
    summary:
      "AB-900 ist die Fundamentals-Prüfung zur Verwaltung von Microsoft 365 Copilot und Agents. Du hast 45 Minuten und bestehst mit 700 Punkten. Der größte Bereich ist Datenschutz und Governance mit Microsoft Purview (35 bis 40 %), gefolgt von den Grundlagen von Microsoft 365 einschließlich Sicherheit (30 bis 35 %) und der Verwaltung von Copilot und Agents (25 bis 30 %). Die Prüfung gibt es auch auf Deutsch.",
    whoFor: [
      "Microsoft-365-Administratoren, die Copilot und Agents im Unternehmen einführen",
      "IT-Fachleute aus Support und Betrieb, die einen Einstieg in die Copilot-Verwaltung suchen",
      "Datenschutz- und Compliance-Verantwortliche, die Copilot-Risiken bewerten",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung dauert 45 Minuten, bestanden ist ab 700 Punkten. Microsoft nennt keine feste Fragenzahl; die Prüfung kann interaktive Aufgaben enthalten. Du buchst sie über Pearson VUE, Lernende und Lehrkräfte auch über Certiport. Mit der Prüfungs-Sandbox und der kostenlosen Übungsbewertung im AI Skills Navigator kannst du dich auf Format und Inhalte vorbereiten.",
          "Die englische Fassung wurde am 14. Oktober 2026 geringfügig angepasst, betroffen sind die zentralen Sicherheitsfeatures von Microsoft 365. Die deutsche Fassung folgt laut Microsoft etwa acht Wochen später. Ist deine bevorzugte Sprache nicht verfügbar, kannst du 30 Minuten zusätzliche Zeit beantragen.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Datenschutz und Governance (35 bis 40 %) ist der größte Bereich: Microsoft Purview mit Vertraulichkeitsbezeichnungen, Data Loss Prevention, Insider-Risikomanagement, Kommunikationscompliance, Datenlebenszyklusverwaltung und DSPM für KI. Dazu kommt, wie Copilot über Microsoft Graph auf Daten zugreift und dabei vorhandene Berechtigungen beachtet, und wie du Übersharing in SharePoint mit Berichten zur Datenzugriffs-Governance und SharePoint Advanced Management erkennst und begrenzt.",
          "Microsoft-365-Grundlagen (30 bis 35 %) umfassen Lizenzen, das Microsoft 365 Admin Center, Exchange-, SharePoint- und Teams-Objekte, Zero Trust, Authentifizierung, bedingten Zugriff, SSO, Defender XDR, PIM und Überwachungsprotokolle. Die Verwaltung von Copilot und Agents (25 bis 30 %) fragt nach Lizenzmodellen einschließlich Pay-as-you-go, Copilot-Einstellungen, den Agents Researcher und Analyst, benutzerdefinierten Agents, Nutzungsberichten sowie Zugriff, Genehmigung und Lebenszyklus von Agents.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den Studienleitfaden lesen",
            body: "Arbeite den Studienleitfaden zu AB-900 durch und hake jedes Lernziel ab. Achte auf die Werkzeugnamen, denn viele Fragen fragen nach dem passenden Admin Center oder Purview-Werkzeug.",
          },
          {
            title: "Eine Testumgebung nutzen",
            body: "Mit einer Microsoft-365-Testumgebung kannst du Admin Center, Purview-Portal und Copilot-Einstellungen selbst ansehen. Schon das Durchklicken der Menüs hilft bei der Zuordnung.",
          },
          {
            title: "Purview-Werkzeuge trennen",
            body: "Lege eine Tabelle an: Werkzeug, Zweck, typischer Anwendungsfall. Information Protection, DLP, Insider-Risikomanagement, Kommunikationscompliance, Aufbewahrung, Daten-Explorer, Aktivitäts-Explorer, DSPM für KI und eDiscovery werden leicht verwechselt.",
          },
          {
            title: "Das Copilot-Berechtigungsmodell verstehen",
            body: "Copilot sieht nur, was der Benutzer ohnehin sehen darf. Übe, warum deshalb Übersharing das Hauptrisiko ist und mit welchen Werkzeugen es erkannt und behoben wird.",
          },
          {
            title: "Agents verwalten lernen",
            body: "Verstehe, wie Benutzer Zugriff auf Agents erhalten, wie Agents genehmigt werden und wo du Nutzung und Lebenszyklus überwachst, im Microsoft 365 Admin Center und im Power Platform Admin Center.",
          },
          {
            title: "Mit der Übungsbewertung testen",
            body: "Nutze die kostenlose Übungsbewertung von Microsoft und eigene Übungsfragen. Buche die Prüfung, wenn du sicher über 80 % liegst.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Annehmen, Copilot umgehe Berechtigungen. Copilot nutzt die Berechtigungen des Benutzers; zu weit gefasste Freigaben werden aber schneller sichtbar.",
          "DLP und Vertraulichkeitsbezeichnungen verwechseln: Bezeichnungen klassifizieren und schützen Inhalte, DLP verhindert das unerwünschte Teilen sensibler Informationen.",
          "Daten-Explorer und Aktivitäts-Explorer verwechseln: Der eine zeigt, wo sensible Inhalte liegen, der andere, was Benutzer mit gekennzeichneten Inhalten getan haben.",
          "Die Sicherheitsgrundlagen unterschätzen. Bedingter Zugriff, MFA, SSO, PIM und Überwachungsprotokolle machen einen großen Teil des ersten Bereichs aus.",
          "Agent-Verwaltung nur im Microsoft 365 Admin Center suchen. Für viele Agents ist auch das Power Platform Admin Center wichtig.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die AB-900-Prüfung?",
        answer: "45 Minuten. Bestanden ist ab 700 Punkten. Eine feste Fragenzahl nennt Microsoft nicht.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer: "Ja. AB-900 wird in 13 Sprachen angeboten, darunter Deutsch.",
      },
      {
        question: "Welcher Bereich ist am wichtigsten?",
        answer:
          "Datenschutz und Governance für Microsoft 365 und Copilot mit 35 bis 40 %, gefolgt von den Microsoft-365-Grundlagen mit 30 bis 35 % und der Verwaltung von Copilot und Agents mit 25 bis 30 %.",
      },
      {
        question: "Brauche ich Programmierkenntnisse?",
        answer: "Nein. Die Prüfung richtet sich an Administratoren und prüft Grundlagenwissen zu Verwaltung, Sicherheit und Governance.",
      },
      {
        question: "Was hat sich am 14. Oktober 2026 geändert?",
        answer:
          "Es gab eine geringfügige Änderung bei den zentralen Sicherheitsfeatures von Microsoft 365. Die Gewichtung der drei Bereiche blieb gleich.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach dem offiziellen Studienleitfaden erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "AB-900 auf Deutsch: Copilot- und Agent-Verwaltung, Prüfung & Lernplan",
      description:
        "Microsoft AB-900 auf Deutsch vorbereiten: 45 Minuten, 700 Punkte, Purview, Übersharing, Copilot-Lizenzen und Agent-Verwaltung, alle drei Bereiche mit Gewichtung.",
    },
    published: "2026-11-25",
    updated: "2026-11-25",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "ab-900",
    intro:
      "30 eigene Übungsfragen zu Microsoft AB-900 aus allen drei Bereichen des Studienleitfadens, gewichtet wie in der Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-25",
    updated: "2026-11-25",
    seo: {
      title: "AB-900 Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose AB-900 Übungsfragen auf Deutsch: Microsoft 365, bedingter Zugriff, Purview, DLP, Übersharing, Copilot-Lizenzen und Agents, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Microsoft-365-Grundlagen ───────────────────────────── */
      {
        id: "ab900-d1-license",
        domain: "d1",
        objective: "Erläutern, wie sich Lizenztypen, die Benutzern und Gruppen zugewiesen sind, auf den Zugriff auf Microsoft 365-Features auswirken",
        difficulty: "foundation",
        question:
          "Eine neue Mitarbeiterin kann sich anmelden, sieht aber weder Outlook noch Teams. Was ist die wahrscheinlichste Ursache?",
        options: [
          { id: "A", text: "Ihr Kennwort ist zu kurz", rationale: "Mit einem zu kurzen Kennwort wäre schon die Anmeldung nicht möglich." },
          { id: "B", text: "Ihr wurde keine passende Microsoft-365-Lizenz zugewiesen", rationale: "Richtig. Ohne Lizenz stehen die Dienste und Apps eines Plans nicht zur Verfügung, auch wenn das Konto existiert." },
          { id: "C", text: "Der Mandant hat keine Domäne", rationale: "Jeder Mandant hat mindestens die onmicrosoft.com-Domäne." },
          { id: "D", text: "Teams ist für alle Benutzer weltweit abgeschaltet", rationale: "Das ist keine realistische Ursache für ein einzelnes Konto." },
        ],
        answer: "B",
        explanation:
          "Lizenzen können einzelnen Benutzern oder über gruppenbasierte Lizenzierung ganzen Gruppen zugewiesen werden. Einzelne Dienste eines Plans lassen sich bei Bedarf deaktivieren.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-exchange-objects",
        domain: "d1",
        objective: "Identifizieren der geeigneten Objekte, die mithilfe des Exchange Admin Centers konfiguriert werden sollen (Postfächer und Verteilergruppen)",
        difficulty: "foundation",
        question:
          "Ein Vertriebsteam möchte E-Mails an eine Adresse wie vertrieb@firma.de senden, die dann bei allen Teammitgliedern ankommen. Was richtet der Administrator im Exchange Admin Center ein?",
        options: [
          { id: "A", text: "Eine Verteilergruppe", rationale: "Richtig. Eine Verteilergruppe leitet E-Mails an die Adresse an alle Mitglieder weiter." },
          { id: "B", text: "Eine SharePoint-Bibliothek", rationale: "Bibliotheken speichern Dateien und werden im SharePoint Admin Center verwaltet." },
          { id: "C", text: "Eine Richtlinie für bedingten Zugriff", rationale: "Bedingter Zugriff steuert Anmeldungen, nicht die E-Mail-Verteilung." },
          { id: "D", text: "Eine App-Registrierung", rationale: "App-Registrierungen betreffen Anwendungen in Microsoft Entra ID." },
        ],
        answer: "A",
        explanation:
          "Im Exchange Admin Center werden Postfächer, freigegebene Postfächer, Verteilergruppen und Nachrichtenflussregeln verwaltet. Teams, Kanäle und Richtlinien gehören ins Teams Admin Center.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-sharepoint-roles",
        domain: "d1",
        objective: "Identifizieren der entsprechenden Rollen und Berechtigungen für Websites in SharePoint in Microsoft 365",
        difficulty: "intermediate",
        question:
          "Externe Projektpartner sollen Dokumente einer SharePoint-Website lesen, aber nicht bearbeiten oder löschen können. Welche Berechtigungsstufe passt?",
        options: [
          { id: "A", text: "Vollzugriff", rationale: "Vollzugriff erlaubt auch das Verwalten der Website und ihrer Berechtigungen." },
          { id: "B", text: "Bearbeiten", rationale: "Bearbeiten erlaubt das Ändern und Löschen von Inhalten." },
          { id: "C", text: "Lesen", rationale: "Richtig. Die Stufe Lesen erlaubt das Anzeigen und Herunterladen, aber keine Änderungen." },
          { id: "D", text: "Websitesammlungsadministrator", rationale: "Das ist die höchste Berechtigung für eine Website." },
        ],
        answer: "C",
        explanation:
          "SharePoint-Standardgruppen sind Besitzer, Mitglieder und Besucher. Nach dem Prinzip der geringsten Rechte erhalten Benutzer nur die Stufe, die sie für ihre Arbeit brauchen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-zero-trust",
        domain: "d1",
        objective: "Erläutern der wichtigsten Zero Trust-Prinzipien",
        difficulty: "foundation",
        question: "Welche Aussage beschreibt ein Grundprinzip von Zero Trust?",
        options: [
          { id: "A", text: "Geräte im Firmennetz gelten automatisch als vertrauenswürdig", rationale: "Zero Trust lehnt Vertrauen aufgrund des Netzwerkstandorts ab." },
          { id: "B", text: "Ein Kennwort genügt, wenn es lang genug ist", rationale: "Zero Trust verlangt explizite Prüfung anhand mehrerer Signale, nicht nur ein Kennwort." },
          { id: "C", text: "Administratoren erhalten dauerhaft alle Rechte", rationale: "Das widerspricht dem Prinzip der geringsten Rechte." },
          { id: "D", text: "Von einer Kompromittierung ausgehen und den möglichen Schaden begrenzen", rationale: "Richtig. Neben „explizit verifizieren“ und „geringste Rechte“ ist „von einer Kompromittierung ausgehen“ ein Grundprinzip." },
        ],
        answer: "D",
        explanation:
          "Zero Trust prüft jede Anfrage anhand von Identität, Gerät, Standort und Risiko, vergibt nur nötige Rechte und segmentiert, um Schäden zu begrenzen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-conditional-access",
        domain: "d1",
        objective: "Bedingter Zugriff: Richtlinien verstehen",
        difficulty: "intermediate",
        question:
          "Benutzer sollen sich von außerhalb des Firmennetzes nur mit MFA und nur von verwalteten Geräten bei Microsoft 365 anmelden können. Womit setzt der Administrator das um?",
        options: [
          { id: "A", text: "Mit einer Richtlinie für bedingten Zugriff in Microsoft Entra ID", rationale: "Richtig. Bedingter Zugriff kombiniert Bedingungen wie Standort und Gerätestatus mit Anforderungen wie MFA." },
          { id: "B", text: "Mit einer Verteilergruppe in Exchange", rationale: "Verteilergruppen verteilen E-Mails und steuern keine Anmeldungen." },
          { id: "C", text: "Mit einer Aufbewahrungsrichtlinie in Purview", rationale: "Aufbewahrungsrichtlinien regeln, wie lange Inhalte aufbewahrt werden." },
          { id: "D", text: "Mit einer Teams-Besprechungsrichtlinie", rationale: "Besprechungsrichtlinien steuern Funktionen in Teams-Besprechungen." },
        ],
        answer: "A",
        explanation:
          "Bedingter Zugriff folgt dem Muster „Wenn diese Bedingungen zutreffen, dann gewähre oder blockiere den Zugriff unter diesen Anforderungen“. Neue Richtlinien lassen sich zuerst im Nur-Bericht-Modus testen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-sso",
        domain: "d1",
        objective: "Verstehen des Zwecks und der Vorteile von SSO",
        difficulty: "foundation",
        question: "Welcher Vorteil ergibt sich aus einmaligem Anmelden (Single Sign-On) mit Microsoft Entra ID?",
        options: [
          { id: "A", text: "Benutzer brauchen gar keine Authentifizierung mehr", rationale: "Benutzer authentifizieren sich weiterhin, nur eben einmal zentral." },
          { id: "B", text: "Jede Anwendung erhält ein eigenes Kennwort", rationale: "Das ist genau das Gegenteil von SSO." },
          { id: "C", text: "Benutzer melden sich einmal an und greifen auf viele Anwendungen zu; die Anmeldung wird zentral gesteuert und geschützt", rationale: "Richtig. SSO reduziert Kennwörter, verbessert die Benutzerfreundlichkeit und ermöglicht zentrale Kontrollen wie MFA und bedingten Zugriff." },
          { id: "D", text: "SSO ersetzt Lizenzen", rationale: "SSO betrifft die Anmeldung, nicht die Lizenzierung." },
        ],
        answer: "C",
        explanation:
          "Damit Drittanbieter-Apps SSO nutzen, werden sie als Unternehmensanwendungen in Microsoft Entra ID eingebunden. App-Registrierungen beschreiben dagegen selbst entwickelte Anwendungen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-risky-signins",
        domain: "d1",
        objective: "Identifizieren Sie die geeigneten Tools zur Behandlung allgemeiner Anmeldeprobleme (MFA, bedingter Zugriff und riskante Anmeldungen)",
        difficulty: "intermediate",
        question:
          "Ein Benutzer meldet, dass seine Anmeldung blockiert wurde, obwohl das Kennwort stimmt. Wo prüft der Administrator zuerst, welche Richtlinie gegriffen hat?",
        options: [
          { id: "A", text: "Im Exchange-Nachrichtenablauf", rationale: "Der Nachrichtenablauf betrifft E-Mails, nicht Anmeldungen." },
          { id: "B", text: "In den Anmeldeprotokollen von Microsoft Entra ID", rationale: "Richtig. Die Anmeldeprotokolle zeigen Ergebnis, Fehlercode, angewendete Richtlinien für bedingten Zugriff und Risikoinformationen." },
          { id: "C", text: "In der SharePoint-Speicherübersicht", rationale: "Die Speicherübersicht hat keinen Bezug zu Anmeldungen." },
          { id: "D", text: "Im Teams-Anrufprotokoll", rationale: "Anrufprotokolle enthalten keine Informationen zu Anmeldeblockaden." },
        ],
        answer: "B",
        explanation:
          "Für riskante Anmeldungen und riskante Benutzer gibt es eigene Berichte in Microsoft Entra ID Protection. Das What-If-Werkzeug zeigt, welche Richtlinien für bedingten Zugriff greifen würden.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-pim",
        domain: "d1",
        objective: "Identifizieren der Rolle von Privileged Identity Management (PIM) in einer Organisation",
        difficulty: "intermediate",
        question: "Wozu dient Microsoft Entra Privileged Identity Management (PIM)?",
        options: [
          { id: "A", text: "Zum Versand von Newslettern", rationale: "PIM hat nichts mit E-Mail-Versand zu tun." },
          { id: "B", text: "Zur Speicherung von Dateien", rationale: "Dateien werden in OneDrive oder SharePoint gespeichert." },
          { id: "C", text: "Zur Übersetzung von Dokumenten", rationale: "Übersetzung ist keine Funktion von PIM." },
          { id: "D", text: "Um privilegierte Rollen nur bei Bedarf und zeitlich begrenzt zu aktivieren, mit Genehmigung, MFA und Protokollierung", rationale: "Richtig. PIM reduziert dauerhafte Administratorrechte durch Just-in-Time-Zugriff." },
        ],
        answer: "D",
        explanation:
          "PIM unterstützt außerdem Zugriffsüberprüfungen für Rollen und Benachrichtigungen bei Aktivierungen. Für PIM ist eine Microsoft Entra ID P2- oder Entra ID Governance-Lizenz erforderlich.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-audit-log",
        domain: "d1",
        objective: "Verwenden Sie die entsprechenden Tools, um Überwachungsprotokolle für Benutzer- und Administratoraktivitäten zu überprüfen",
        difficulty: "intermediate",
        question:
          "Die Revision möchte wissen, wer in der vergangenen Woche eine vertrauliche Datei in SharePoint gelöscht hat. Welches Werkzeug ist dafür vorgesehen?",
        options: [
          { id: "A", text: "Die Überwachung (Audit) in Microsoft Purview", rationale: "Richtig. Das einheitliche Überwachungsprotokoll erfasst Benutzer- und Administratoraktivitäten in Microsoft-365-Diensten, etwa das Löschen von Dateien." },
          { id: "B", text: "Die Lizenzübersicht im Microsoft 365 Admin Center", rationale: "Sie zeigt Lizenzen, nicht einzelne Aktivitäten." },
          { id: "C", text: "Die Teams-Besprechungsrichtlinien", rationale: "Diese steuern Besprechungsfunktionen." },
          { id: "D", text: "Die Domäneneinstellungen", rationale: "Domäneneinstellungen enthalten keine Aktivitätsdaten." },
        ],
        answer: "A",
        explanation:
          "Audit (Standard) und Audit (Premium) unterscheiden sich unter anderem in der Aufbewahrungsdauer der Protokolle und zusätzlichen Ereignissen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d1-defender-xdr",
        domain: "d1",
        objective: "Grundlegendes zu Features und Funktionen von Microsoft Defender XDR",
        difficulty: "intermediate",
        question:
          "Ein Phishing-Angriff beginnt mit einer E-Mail, kompromittiert ein Benutzerkonto und führt dann zu verdächtigen Aktivitäten auf einem Notebook. Welcher Vorteil von Microsoft Defender XDR hilft hier am meisten?",
        options: [
          { id: "A", text: "Es verwaltet Postfachgrößen", rationale: "Postfachgrößen werden in Exchange verwaltet." },
          { id: "B", text: "Es ersetzt die Microsoft-365-Lizenzen", rationale: "Defender XDR ist kein Ersatz für Lizenzen." },
          { id: "C", text: "Es korreliert Signale aus E-Mail, Identität, Endpunkten und Cloud-Apps zu einem gemeinsamen Vorfall", rationale: "Richtig. So wird der gesamte Angriff sichtbar und kann gemeinsam untersucht und behoben werden." },
          { id: "D", text: "Es erstellt automatisch Teams-Kanäle", rationale: "Das ist keine Funktion von Defender XDR." },
        ],
        answer: "C",
        explanation:
          "Defender XDR umfasst unter anderem Defender for Office 365, Defender for Endpoint, Defender for Identity und Defender for Cloud Apps, mit gemeinsamer Vorfallsansicht und automatischer Untersuchung.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Datenschutz und Governance ─────────────────────────── */
      {
        id: "ab900-d2-graph",
        domain: "d2",
        objective: "Verstehen, wie Microsoft Graph Copilot-Antworten beeinflusst",
        difficulty: "intermediate",
        question: "Wie nutzt Microsoft 365 Copilot die Daten einer Organisation, um Antworten zu erzeugen?",
        options: [
          { id: "A", text: "Copilot liest alle Daten des Mandanten unabhängig von Berechtigungen", rationale: "Copilot respektiert die Berechtigungen des jeweiligen Benutzers." },
          { id: "B", text: "Copilot nutzt nur öffentliche Internetseiten", rationale: "Copilot bezieht Organisationsdaten über Microsoft Graph ein, soweit der Benutzer Zugriff hat." },
          { id: "C", text: "Copilot ruft über Microsoft Graph relevante Inhalte ab, auf die der Benutzer Zugriff hat, und bezieht sie in die Antwort ein (Grounding)", rationale: "Richtig. Microsoft Graph liefert E-Mails, Dateien, Chats und Kalenderdaten im Rahmen der Benutzerberechtigungen." },
          { id: "D", text: "Copilot verwendet die Daten des Mandanten, um das zugrunde liegende Sprachmodell für alle Kunden zu trainieren", rationale: "Laut Microsoft werden Organisationsdaten nicht zum Training der Basismodelle verwendet." },
        ],
        answer: "C",
        explanation:
          "Weil Copilot die vorhandenen Berechtigungen nutzt, werden zu weit gefasste Freigaben schneller sichtbar. Darum sind Übersharing-Kontrollen ein Schwerpunkt der Prüfung.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-sensitivity-labels",
        domain: "d2",
        objective: "Identifizieren der Anwendungsfälle für Vertraulichkeitsbezeichnungen in Microsoft Purview",
        difficulty: "foundation",
        question:
          "Dokumente mit Gehaltsdaten sollen gekennzeichnet, verschlüsselt und nur für die Personalabteilung lesbar sein, auch wenn sie das Unternehmen verlassen. Welche Funktion passt?",
        options: [
          { id: "A", text: "Eine Verteilergruppe", rationale: "Eine Verteilergruppe verteilt E-Mails, schützt aber keine Dokumente." },
          { id: "B", text: "Eine Vertraulichkeitsbezeichnung mit Verschlüsselung", rationale: "Richtig. Vertraulichkeitsbezeichnungen klassifizieren Inhalte und können Verschlüsselung und Zugriffsrechte anwenden, die mit der Datei mitreisen." },
          { id: "C", text: "Eine Teams-Kanalrichtlinie", rationale: "Kanalrichtlinien steuern Funktionen in Teams, nicht den Schutz einzelner Dateien." },
          { id: "D", text: "Eine größere Postfachquote", rationale: "Die Postfachgröße hat nichts mit dem Schutz von Dokumenten zu tun." },
        ],
        answer: "B",
        explanation:
          "Bezeichnungen können manuell, als Standard oder automatisch angewendet werden. Copilot berücksichtigt Bezeichnungen, etwa indem neue Inhalte die Bezeichnung der Quelle übernehmen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-dlp",
        domain: "d2",
        objective: "Identifizieren und Beantworten von Warnungen, die von Microsoft Purview DLP generiert werden",
        difficulty: "intermediate",
        question:
          "Mitarbeitende sollen keine Kreditkartennummern per E-Mail oder Teams-Chat an Externe senden können. Welche Purview-Lösung ist dafür vorgesehen?",
        options: [
          { id: "A", text: "Microsoft Purview Data Loss Prevention", rationale: "Richtig. DLP-Richtlinien erkennen sensible Informationen und können das Teilen blockieren, warnen und Warnungen erzeugen." },
          { id: "B", text: "Microsoft Purview eDiscovery", rationale: "eDiscovery sucht und sichert Inhalte für rechtliche Verfahren, verhindert aber kein Teilen." },
          { id: "C", text: "Microsoft Purview Compliance-Manager", rationale: "Der Compliance-Manager bewertet den Erfüllungsgrad von Vorschriften, blockiert aber keine Nachrichten." },
          { id: "D", text: "Microsoft Purview Datenlebenszyklusverwaltung", rationale: "Sie regelt Aufbewahrung und Löschung, nicht das Teilen sensibler Daten." },
        ],
        answer: "A",
        explanation:
          "DLP nutzt vertrauliche Informationstypen wie Kreditkartennummern oder IBAN, aber auch Bezeichnungen und trainierbare Klassifizierer. Richtlinientipps informieren Benutzer direkt beim Teilen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-insider-risk",
        domain: "d2",
        objective: "Identifizieren von Risiken mithilfe des Insider-Risikomanagements",
        difficulty: "intermediate",
        question:
          "Ein Mitarbeiter hat gekündigt und lädt in seinen letzten Tagen ungewöhnlich viele vertrauliche Dateien herunter. Welche Lösung erkennt solche Muster?",
        options: [
          { id: "A", text: "Kommunikationscompliance", rationale: "Kommunikationscompliance prüft Nachrichteninhalte auf Richtlinienverstöße, etwa unangemessene Sprache." },
          { id: "B", text: "Microsoft Purview Insider-Risikomanagement", rationale: "Richtig. Es korreliert Signale wie Kündigung und massenhafte Downloads, um riskante Aktivitäten von Insidern zu erkennen." },
          { id: "C", text: "Das Exchange Admin Center", rationale: "Es verwaltet Postfächer, erkennt aber keine Insider-Risiken." },
          { id: "D", text: "Die Domäneneinstellungen", rationale: "Domäneneinstellungen enthalten keine Risikoanalysen." },
        ],
        answer: "B",
        explanation:
          "Insider-Risikomanagement arbeitet mit Richtlinienvorlagen, etwa für Datendiebstahl durch ausscheidende Mitarbeitende, und pseudonymisiert Benutzer standardmäßig zum Schutz der Privatsphäre.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-dspm-ai",
        domain: "d2",
        objective: "Entdecken und Verwalten von KI-Aktivitäten mithilfe von DSPM für KI",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte sehen, welche KI-Anwendungen genutzt werden, ob dabei vertrauliche Daten in Prompts landen, und passende Schutzrichtlinien empfohlen bekommen. Welches Werkzeug passt?",
        options: [
          { id: "A", text: "Das Teams Admin Center", rationale: "Es verwaltet Teams und Richtlinien für Teams, nicht KI-Datenrisiken." },
          { id: "B", text: "Die Lizenzverwaltung", rationale: "Lizenzen zeigen keine KI-Interaktionen mit vertraulichen Daten." },
          { id: "C", text: "Exchange-Nachrichtenablaufregeln", rationale: "Diese steuern E-Mails, nicht KI-Interaktionen." },
          { id: "D", text: "Microsoft Purview Datensicherheitsstatus-Management (DSPM) für KI", rationale: "Richtig. DSPM für KI zeigt KI-Aktivitäten und Risiken mit vertraulichen Daten und empfiehlt Richtlinien." },
        ],
        answer: "D",
        explanation:
          "DSPM für KI deckt Microsoft 365 Copilot und weitere KI-Apps ab und bietet Berichte sowie empfohlene DLP- und Insider-Risiko-Richtlinien mit wenigen Klicks.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-content-explorer",
        domain: "d2",
        objective: "Identifizieren vertraulicher Informationen mithilfe des Microsoft Purview-Daten-Explorers",
        difficulty: "intermediate",
        question:
          "Ein Administrator möchte sehen, in welchen SharePoint-Websites und Postfächern Dokumente mit Personalausweisnummern liegen. Welches Werkzeug ist dafür gedacht?",
        options: [
          { id: "A", text: "Der Aktivitäts-Explorer", rationale: "Der Aktivitäts-Explorer zeigt, was Benutzer mit Inhalten getan haben, nicht, wo sie liegen." },
          { id: "B", text: "Der Microsoft-365-Nutzungsbericht", rationale: "Nutzungsberichte zeigen Aktivität in Diensten, aber keine Fundorte sensibler Inhalte." },
          { id: "C", text: "Der Daten-Explorer (Content Explorer)", rationale: "Richtig. Der Daten-Explorer zeigt, wo Elemente mit vertraulichen Informationstypen oder Bezeichnungen gespeichert sind." },
          { id: "D", text: "Das Teams Admin Center", rationale: "Das Teams Admin Center zeigt keine vertraulichen Informationen in Dokumenten." },
        ],
        answer: "C",
        explanation:
          "Der Zugriff auf den Daten-Explorer erfordert eigene Rollen, weil er Inhalte sichtbar machen kann. Die Datenklassifizierung zeigt zusätzlich Übersichten nach Informationstypen und Bezeichnungen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-retention",
        domain: "d2",
        objective: "Verständnis der Aufbewahrung",
        difficulty: "intermediate",
        question:
          "Geschäftsbriefe in Exchange und SharePoint müssen aus rechtlichen Gründen zehn Jahre aufbewahrt und danach gelöscht werden. Was richtet der Administrator ein?",
        options: [
          { id: "A", text: "Eine Aufbewahrungsrichtlinie oder Aufbewahrungsbezeichnung in Microsoft Purview", rationale: "Richtig. Aufbewahrungsrichtlinien und -bezeichnungen sorgen dafür, dass Inhalte für eine festgelegte Zeit erhalten und danach gelöscht werden." },
          { id: "B", text: "Eine Richtlinie für bedingten Zugriff", rationale: "Bedingter Zugriff steuert Anmeldungen, nicht die Aufbewahrung." },
          { id: "C", text: "Eine Verteilergruppe", rationale: "Verteilergruppen verteilen E-Mails." },
          { id: "D", text: "Eine DLP-Richtlinie", rationale: "DLP verhindert das Teilen sensibler Daten, regelt aber nicht die Aufbewahrungsdauer." },
        ],
        answer: "A",
        explanation:
          "Die Datenlebenszyklusverwaltung umfasst Aufbewahrungsrichtlinien, Aufbewahrungsbezeichnungen und Archivpostfächer. Auch Copilot-Interaktionen können Aufbewahrungsrichtlinien unterliegen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-oversharing-report",
        domain: "d2",
        objective: "Ausführung eines Berichts zur Datenzugriffs-Governance in SharePoint",
        difficulty: "intermediate",
        question:
          "Vor der Copilot-Einführung möchte ein Administrator herausfinden, welche SharePoint-Websites Inhalte mit „Jeder“-Links oder mit Freigaben für die gesamte Organisation enthalten. Was nutzt er?",
        options: [
          { id: "A", text: "Den Lizenzbericht", rationale: "Er zeigt zugewiesene Lizenzen, nicht Freigaben." },
          { id: "B", text: "Die Berichte zur Datenzugriffs-Governance im SharePoint Admin Center", rationale: "Richtig. Sie zeigen unter anderem Websites mit vielen Freigabelinks oder Freigaben für „Alle außer externen Benutzern“." },
          { id: "C", text: "Die Exchange-Nachrichtenablaufverfolgung", rationale: "Sie verfolgt E-Mails, nicht SharePoint-Freigaben." },
          { id: "D", text: "Das Teams-Anrufqualitätsdashboard", rationale: "Es zeigt Anrufqualität, nicht Freigaben." },
        ],
        answer: "B",
        explanation:
          "Datenzugriffs-Governance ist Teil von SharePoint Advanced Management. Die Ergebnisse helfen, Websitebesitzer um Überprüfung zu bitten und Übersharing gezielt zu beheben.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-restricted-access",
        domain: "d2",
        objective: "Grundlegendes zu Features und Funktionen von SharePoint Advanced Management, einschließlich eingeschränkter Zugriffssteuerung",
        difficulty: "intermediate",
        question:
          "Eine SharePoint-Website mit Vorstandsunterlagen soll nur für Mitglieder einer bestimmten Gruppe zugänglich sein, selbst wenn einzelne Dateien versehentlich breiter freigegeben wurden. Welche Funktion passt?",
        options: [
          { id: "A", text: "Eine größere Speicherquote", rationale: "Die Speicherquote hat keinen Einfluss auf den Zugriff." },
          { id: "B", text: "Eine öffentliche Website-Vorlage", rationale: "Das würde den Zugriff eher erweitern." },
          { id: "C", text: "Eine neue Domäne", rationale: "Eine Domäne steuert keinen Zugriff auf einzelne Websites." },
          { id: "D", text: "Die eingeschränkte Zugriffssteuerung (Restricted Access Control) aus SharePoint Advanced Management", rationale: "Richtig. Sie beschränkt den Zugriff auf die Website auf festgelegte Gruppen, unabhängig von einzelnen Freigaben." },
        ],
        answer: "D",
        explanation:
          "Weitere SharePoint-Advanced-Management-Funktionen sind Zugriffsüberprüfungen durch Websitebesitzer, Richtlinien für inaktive Websites und die eingeschränkte Inhaltserkennung für Copilot.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-compliance-manager",
        domain: "d2",
        objective: "Identifizieren von Compliancerisiken und Empfehlungen mithilfe von Microsoft Purview Compliance Manager",
        difficulty: "foundation",
        question:
          "Die Geschäftsleitung möchte eine Übersicht, wie gut die Microsoft-365-Umgebung die Anforderungen der DSGVO erfüllt, mit konkreten Verbesserungsmaßnahmen. Welches Werkzeug passt?",
        options: [
          { id: "A", text: "Microsoft Purview Compliance-Manager", rationale: "Richtig. Er bietet Bewertungen für Vorschriften, einen Compliance-Score und empfohlene Verbesserungsmaßnahmen." },
          { id: "B", text: "Das Exchange Admin Center", rationale: "Es verwaltet E-Mail-Objekte, bewertet aber keine Compliance." },
          { id: "C", text: "Microsoft Teams", rationale: "Teams dient der Zusammenarbeit." },
          { id: "D", text: "Die Self-Service-Kennwortzurücksetzung", rationale: "Sie erlaubt Benutzern, Kennwörter selbst zurückzusetzen." },
        ],
        answer: "A",
        explanation:
          "Der Compliance-Score zeigt den Fortschritt bei der Umsetzung von Maßnahmen. Einige Maßnahmen werden von Microsoft erfüllt, andere muss die Organisation selbst umsetzen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d2-ediscovery",
        domain: "d2",
        objective: "Suchen nach Dateien und E-Mails mithilfe der Inhaltssuche in Microsoft Purview eDiscovery",
        difficulty: "foundation",
        question:
          "Die Rechtsabteilung braucht alle E-Mails und Dateien zu einem bestimmten Projektnamen aus den letzten zwei Jahren. Welches Werkzeug ist dafür gedacht?",
        options: [
          { id: "A", text: "Die Inhaltssuche in Microsoft Purview eDiscovery", rationale: "Richtig. Sie durchsucht Postfächer, SharePoint, OneDrive und Teams nach Stichwörtern und Bedingungen." },
          { id: "B", text: "Der Copilot-Nutzungsbericht", rationale: "Er zeigt Nutzungszahlen, aber keine Inhalte zu einem Projekt." },
          { id: "C", text: "Eine Teams-Besprechungsrichtlinie", rationale: "Sie steuert Besprechungsfunktionen." },
          { id: "D", text: "Die Domänenverwaltung", rationale: "Sie verwaltet Domänen, nicht Inhalte." },
        ],
        answer: "A",
        explanation:
          "eDiscovery-Fälle ermöglichen zusätzlich Aufbewahrungssperren (Holds), Prüfung und Export. Auch Copilot-Interaktionen können durchsucht werden.",
        reference: GUIDE,
      },

      /* ── Bereich 3: Copilot und Agents verwalten ───────────────────────── */
      {
        id: "ab900-d3-assign-license",
        domain: "d3",
        objective: "Zuweisen von Copilot-Lizenzen",
        difficulty: "foundation",
        question:
          "Fünfzig Mitarbeitende einer Abteilung sollen Microsoft 365 Copilot erhalten. Wie wird das am effizientesten umgesetzt?",
        options: [
          { id: "A", text: "Jeder Mitarbeitende kauft selbst eine private Lizenz", rationale: "Private Lizenzen bieten keine zentrale Verwaltung im Unternehmen." },
          { id: "B", text: "Die Copilot-Lizenz über eine Gruppe zuweisen, deren Mitglieder die Abteilung sind", rationale: "Richtig. Gruppenbasierte Lizenzierung weist Lizenzen automatisch allen Mitgliedern zu und vereinfacht Zu- und Abgänge." },
          { id: "C", text: "Copilot ohne Lizenz für alle aktivieren", rationale: "Für Microsoft 365 Copilot ist eine Lizenz erforderlich." },
          { id: "D", text: "Die Lizenz dem globalen Administrator zuweisen und das Konto teilen", rationale: "Geteilte Konten verletzen Sicherheits- und Lizenzbedingungen." },
        ],
        answer: "B",
        explanation:
          "Lizenzen lassen sich im Microsoft 365 Admin Center, in Microsoft Entra ID oder per PowerShell zuweisen. Microsoft 365 Copilot setzt eine passende Microsoft-365-Basislizenz voraus.",
        reference: GUIDE,
      },
      {
        id: "ab900-d3-payg",
        domain: "d3",
        objective: "Vergleich des monatlichen Lizenzmodells von Copilot mit Pay-as-you-go",
        difficulty: "intermediate",
        question:
          "Einige Mitarbeitende ohne Copilot-Lizenz sollen gelegentlich Agents nutzen, die auf SharePoint-Inhalte zugreifen. Eine volle Lizenz pro Person lohnt sich nicht. Welches Modell passt?",
        options: [
          { id: "A", text: "Für alle Mitarbeitenden eine monatliche Copilot-Lizenz kaufen", rationale: "Das wäre für gelegentliche Nutzung unwirtschaftlich." },
          { id: "B", text: "Agents grundsätzlich verbieten", rationale: "Das verhindert sinnvolle Nutzung statt eine passende Abrechnung zu wählen." },
          { id: "C", text: "Nutzungsbasierte Abrechnung (Pay-as-you-go) über ein Azure-Abonnement mit Richtlinien und Budget", rationale: "Richtig. Pay-as-you-go rechnet nach tatsächlicher Nutzung ab und lässt sich über Richtlinien auf bestimmte Benutzer und Agents begrenzen." },
          { id: "D", text: "Eine kostenlose Testversion dauerhaft verlängern", rationale: "Testversionen sind zeitlich begrenzt und kein Lizenzmodell für den Dauerbetrieb." },
        ],
        answer: "C",
        explanation:
          "Die monatliche Lizenz lohnt sich für regelmäßige Nutzer mit vollem Copilot-Funktionsumfang; Pay-as-you-go eignet sich für gelegentliche Nutzung, etwa von Agents. Administratoren überwachen die Kosten über Richtlinien und Budgets.",
        reference: GUIDE,
      },
      {
        id: "ab900-d3-researcher-analyst",
        domain: "d3",
        objective: "Anwendungsfälle für Researcher und Analyst identifizieren",
        difficulty: "intermediate",
        question:
          "Eine Controllerin möchte Rohdaten aus mehreren Excel-Dateien auswerten lassen, mit Berechnungen, Trends und Diagrammen. Welcher integrierte Agent passt am besten?",
        options: [
          { id: "A", text: "Researcher", rationale: "Researcher eignet sich für mehrstufige Recherchen über Web- und Arbeitsquellen mit ausführlichen Berichten, weniger für Datenanalysen mit Berechnungen." },
          { id: "B", text: "Ein Teams-Kanal-Bot ohne Datenzugriff", rationale: "Ohne Zugriff auf die Dateien ist keine Auswertung möglich." },
          { id: "C", text: "Die Rechtschreibprüfung", rationale: "Sie prüft Texte, analysiert aber keine Daten." },
          { id: "D", text: "Analyst", rationale: "Richtig. Analyst ist für Datenanalysen gedacht und kann dafür Code ausführen, um Berechnungen und Visualisierungen zu erstellen." },
        ],
        answer: "D",
        explanation:
          "Researcher und Analyst sind integrierte Reasoning-Agents in Microsoft 365 Copilot. Administratoren können steuern, welche Benutzer Zugriff auf sie haben.",
        reference: GUIDE,
      },
      {
        id: "ab900-d3-usage",
        domain: "d3",
        objective: "Überwachen der Copilot-Nutzung und -Einführung, einschließlich Copilot-Analysen und des Microsoft 365 Admin Centers",
        difficulty: "foundation",
        question:
          "Die IT-Leitung möchte wissen, wie viele lizenzierte Benutzer Copilot tatsächlich nutzen und in welchen Apps. Wo findet sie diese Informationen?",
        options: [
          { id: "A", text: "Im Copilot-Nutzungsbericht im Microsoft 365 Admin Center und in Copilot-Analysen", rationale: "Richtig. Dort sind aktive Benutzer, Nutzung nach App und Trends zur Einführung zu sehen." },
          { id: "B", text: "Im Exchange-Nachrichtenablauf", rationale: "Er zeigt E-Mail-Zustellungen, nicht die Copilot-Nutzung." },
          { id: "C", text: "In den Richtlinien für bedingten Zugriff", rationale: "Diese steuern Anmeldungen, zeigen aber keine Nutzung." },
          { id: "D", text: "Im Daten-Explorer von Purview", rationale: "Der Daten-Explorer zeigt Fundorte sensibler Inhalte." },
        ],
        answer: "A",
        explanation:
          "Copilot-Analysen bieten zusätzlich Dashboards zu Einführung und Wirkung. Die Daten helfen, Lizenzen gezielt zu verteilen und Schulungen zu planen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d3-features-toggle",
        domain: "d3",
        objective: "Ermitteln, welche Copilot-Features aktiviert oder deaktiviert werden können",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte verhindern, dass Copilot Websuche in seine Antworten einbezieht, Copilot aber sonst weiter nutzen. Was ist der richtige Ansatz?",
        options: [
          { id: "A", text: "Alle Copilot-Lizenzen entziehen", rationale: "Das würde Copilot vollständig abschalten und ist unnötig." },
          { id: "B", text: "Die Webinhalte für Copilot über die entsprechende Einstellung beziehungsweise Richtlinie deaktivieren", rationale: "Richtig. Die Nutzung von Webinhalten für Copilot lässt sich durch Administratoren gezielt steuern." },
          { id: "C", text: "Die Internetverbindung aller Geräte trennen", rationale: "Das würde auch Microsoft 365 selbst unbrauchbar machen." },
          { id: "D", text: "Den Mandanten löschen", rationale: "Das ist offensichtlich unverhältnismäßig." },
        ],
        answer: "B",
        explanation:
          "Administratoren können verschiedene Copilot-Funktionen steuern, etwa Webinhalte, den Zugriff auf Agents, Plugins und Connectors oder bestimmte App-Integrationen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d3-agent-approval",
        domain: "d3",
        objective: "Grundlegendes zum Genehmigungsprozess für Agents",
        difficulty: "intermediate",
        question:
          "Ein Mitarbeiter hat einen Agent erstellt und möchte ihn für die gesamte Organisation bereitstellen. Was sollte laut einem kontrollierten Vorgehen passieren?",
        options: [
          { id: "A", text: "Der Agent wird automatisch und ohne Prüfung für alle sichtbar", rationale: "Eine organisationsweite Bereitstellung sollte geprüft und genehmigt werden." },
          { id: "B", text: "Der Mitarbeiter teilt den Agent per privatem Link mit allen", rationale: "Das umgeht die zentrale Kontrolle." },
          { id: "C", text: "Der Agent wird zur Prüfung eingereicht, und ein Administrator genehmigt oder blockiert ihn im Microsoft 365 Admin Center", rationale: "Richtig. Über den Genehmigungsprozess behält die IT die Kontrolle darüber, welche Agents organisationsweit verfügbar sind." },
          { id: "D", text: "Agents dürfen grundsätzlich nur von Microsoft bereitgestellt werden", rationale: "Organisationen können eigene Agents erstellen und bereitstellen." },
        ],
        answer: "C",
        explanation:
          "Administratoren steuern, welche Benutzer welche Agents nutzen dürfen, prüfen Datenquellen und Berechtigungen der Agents und können Agents bei Bedarf sperren oder entfernen.",
        reference: GUIDE,
      },
      {
        id: "ab900-d3-agent-monitoring",
        domain: "d3",
        objective: "Überwachen von Agents mit dem Microsoft 365 Admin Center und dem Microsoft Power Platform Admin Center",
        difficulty: "intermediate",
        question:
          "Ein Administrator möchte für mit Copilot Studio erstellte Agents Betriebsdaten, Umgebungen und Datenrichtlinien prüfen. Welches Admin Center ist dafür neben dem Microsoft 365 Admin Center besonders wichtig?",
        options: [
          { id: "A", text: "Das Exchange Admin Center", rationale: "Es verwaltet E-Mail, nicht Agent-Umgebungen." },
          { id: "B", text: "Das SharePoint Admin Center", rationale: "Es verwaltet Websites, nicht Copilot-Studio-Umgebungen." },
          { id: "C", text: "Das Teams Admin Center", rationale: "Es verwaltet Teams-Einstellungen; die Umgebungen und Datenrichtlinien von Copilot Studio liegen woanders." },
          { id: "D", text: "Das Microsoft Power Platform Admin Center", rationale: "Richtig. Dort werden Umgebungen, Datenrichtlinien, Kapazität und Analysen für Copilot-Studio-Agents verwaltet." },
        ],
        answer: "D",
        explanation:
          "Das Microsoft 365 Admin Center zeigt Agents, Zugriff und Nutzung im Microsoft-365-Kontext; das Power Platform Admin Center deckt die technische Verwaltung von Copilot Studio ab.",
        reference: GUIDE,
      },
      {
        id: "ab900-d3-prompts",
        domain: "d3",
        objective: "Verwalten von Eingabeaufforderungen, einschließlich des Speicherns, Freigebens, Planens und Löschens",
        difficulty: "foundation",
        question:
          "Eine Teamleiterin nutzt jeden Montag denselben Copilot-Prompt, um die Aufgaben der Woche zusammenzufassen. Welche Funktion erleichtert das am meisten?",
        options: [
          { id: "A", text: "Den Prompt jedes Mal neu eintippen", rationale: "Das ist umständlich und fehleranfällig." },
          { id: "B", text: "Den Prompt in einer privaten E-Mail an sich selbst speichern", rationale: "Das ist ein Umweg und bietet keine Planung." },
          { id: "C", text: "Den Prompt speichern und einen geplanten Prompt einrichten, der jeden Montag automatisch läuft", rationale: "Richtig. Gespeicherte und geplante Prompts sparen Zeit und lassen sich bei Bedarf mit dem Team teilen." },
          { id: "D", text: "Copilot für die gesamte Abteilung deaktivieren", rationale: "Das verhindert die Nutzung, statt sie zu erleichtern." },
        ],
        answer: "C",
        explanation:
          "Gespeicherte Prompts lassen sich teilen, bearbeiten und löschen. Für Administratoren ist wichtig, welche dieser Funktionen in der Organisation verfügbar sind.",
        reference: GUIDE,
      },
      {
        id: "ab900-d3-custom-agent",
        domain: "d3",
        objective: "Identifizieren von Anwendungsfällen für benutzerdefinierte Agents",
        difficulty: "intermediate",
        question:
          "Die Personalabteilung möchte, dass Mitarbeitende Fragen zu Urlaubsregeln, Reisekosten und Elternzeit stellen können und Antworten ausschließlich aus den internen Richtlinien auf einer bestimmten SharePoint-Website erhalten. Was passt am besten?",
        options: [
          { id: "A", text: "Der integrierte Agent Analyst", rationale: "Analyst ist für Datenanalysen gedacht, nicht für Fragen zu festgelegten Richtliniendokumenten." },
          { id: "B", text: "Eine Verteilergruppe für Personalfragen", rationale: "Eine Verteilergruppe beantwortet keine Fragen automatisch." },
          { id: "C", text: "Eine DLP-Richtlinie", rationale: "DLP schützt sensible Daten, beantwortet aber keine Fragen." },
          { id: "D", text: "Ein benutzerdefinierter Agent mit Anweisungen und der SharePoint-Website als Wissensquelle", rationale: "Richtig. Benutzerdefinierte Agents lassen sich auf bestimmte Aufgaben und Wissensquellen zuschneiden." },
        ],
        answer: "D",
        explanation:
          "Einfache Agents lassen sich ohne Code im Agent Builder von Microsoft 365 Copilot erstellen, komplexere mit Copilot Studio. Administratoren steuern Zugriff, Genehmigung und Lebenszyklus.",
        reference: GUIDE,
      },
    ],
  },
};
