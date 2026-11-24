import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for AWS Certified Cloud Practitioner
 * (CLF-C02). Exam facts follow the verified English facts in
 * src/config/certifications.ts (AWS certification page and CLF-C02 exam guide
 * v1.3, checked 2026-11-03). AWS service names stay in English, as in the
 * German exam and the German AWS documentation.
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const GUIDE = {
  label: "AWS: Prüfungsleitfaden CLF-C02",
  url: "https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html",
};

export const awsClfC02De: DeContent = {
  slug: "aws-clf-c02",
  name: "AWS Certified Cloud Practitioner (CLF-C02)",
  languageNote:
    "Laut AWS wird die Prüfung auf Deutsch nach dem 31. Dezember 2026 eingestellt; danach legst du sie zum Beispiel auf Englisch ab. Die Inhalte kannst du trotzdem auf Deutsch lernen.",
  facts: [
    { label: "Prüfungsanbieter", value: "AWS, über Pearson VUE" },
    { label: "Fragen", value: "65 (50 bewertet, 15 unbewertet)" },
    { label: "Dauer", value: "90 Minuten" },
    { label: "Bestehensgrenze", value: "700 von 1.000 Punkten (skaliert)" },
    {
      label: "Fragetypen",
      value: "Multiple Choice (eine richtige Antwort) und Multiple Response (zwei oder mehr richtige aus fünf oder mehr Optionen)",
    },
    { label: "Durchführung", value: "Im Pearson-VUE-Testcenter oder online mit Aufsicht" },
    { label: "Voraussetzungen", value: "Keine; empfohlen sind bis zu sechs Monate Erfahrung mit der AWS Cloud" },
    { label: "Prüfungsversion", value: "Prüfungsleitfaden CLF-C02, Version 1.3 (29. Oktober 2026)" },
  ],
  domains: [
    { id: "d1", name: "Cloud-Konzepte", weight: "24 %" },
    { id: "d2", name: "Sicherheit und Compliance", weight: "30 %" },
    { id: "d3", name: "Cloud-Technologie und -Services", weight: "34 %" },
    { id: "d4", name: "Abrechnung, Preise und Support", weight: "12 %" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "aws-clf-c02",
    summary:
      "Der AWS Certified Cloud Practitioner (CLF-C02) ist das Einstiegszertifikat von AWS. Die Prüfung hat 65 Fragen in 90 Minuten, davon 50 bewertet, und du bestehst mit 700 von 1.000 skalierten Punkten. Am stärksten gewichtet sind Cloud-Technologie und -Services mit 34 % sowie Sicherheit und Compliance mit 30 %. Die deutschsprachige Prüfung stellt AWS nach dem 31. Dezember 2026 ein.",
    whoFor: [
      "Einsteiger in die Cloud, auch ohne technische Ausbildung",
      "Vertrieb, Einkauf, Projektleitung und Management, die mit AWS-Projekten arbeiten",
      "IT-Fachleute, die vor einer Associate-Zertifizierung die AWS-Grundlagen belegen wollen",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung umfasst 65 Fragen in 90 Minuten. 50 davon werden bewertet, 15 sind unbewertete Testfragen, die du nicht erkennen kannst; beantworte also jede Frage ernsthaft. Es gibt zwei Fragetypen: Multiple Choice mit einer richtigen Antwort und Multiple Response mit zwei oder mehr richtigen Antworten aus fünf oder mehr Optionen. Das Ergebnis wird auf einer Skala von 100 bis 1.000 angegeben, bestanden ist ab 700. Schwächen in einem Bereich kannst du mit Stärken in einem anderen ausgleichen.",
          "Du legst die Prüfung in einem Pearson-VUE-Testcenter oder online mit Aufsicht ab. Wichtig für deutschsprachige Kandidaten: Laut AWS wird die Prüfung auf Deutsch nach dem 31. Dezember 2026 eingestellt. Wer danach prüft, wählt eine andere Sprache, etwa Englisch. Lerne deshalb die englischen Servicenamen mit, sie bleiben in jeder Sprache gleich.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Mit 34 % ist Cloud-Technologie und -Services der größte Bereich. Hier musst du die wichtigsten Services ihrem Zweck zuordnen: EC2, Lambda und Fargate für Rechenleistung, S3, EBS und EFS für Speicher, RDS, Aurora und DynamoDB für Datenbanken, VPC, Route 53 und CloudFront für Netzwerke. Dazu kommt die globale Infrastruktur mit Regionen, Availability Zones und Edge-Standorten.",
          "Sicherheit und Compliance bringen 30 %. Kernthema ist das Modell der geteilten Verantwortung: Was übernimmt AWS, was bleibt bei dir? Außerdem gehören IAM mit Benutzern, Gruppen, Rollen und dem Prinzip der geringsten Rechte dazu sowie Sicherheitsservices wie GuardDuty, Inspector, Shield, WAF, CloudTrail und AWS Artifact. Cloud-Konzepte mit 24 % fragen nach Vorteilen der Cloud, dem Well-Architected Framework und Migrationsstrategien; Abrechnung und Support mit 12 % nach Preismodellen und Kostenwerkzeugen.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den Prüfungsleitfaden lesen",
            body: "Der offizielle Prüfungsleitfaden zu CLF-C02 listet alle Aufgabenbereiche und die Services, die geprüft werden können. Er ist die verbindliche Grundlage für deine Vorbereitung.",
          },
          {
            title: "Ein kostenloses AWS-Konto anlegen",
            body: "Mit dem kostenlosen Kontingent kannst du die Konsole kennenlernen, einen S3-Bucket anlegen oder eine kleine EC2-Instanz starten. Richte vorher ein Budget mit Warnung ein, damit keine unerwarteten Kosten entstehen.",
          },
          {
            title: "Services nach Kategorien lernen",
            body: "Lege dir eine Tabelle an: Service, Kategorie, typischer Einsatz, ähnlicher Service. Viele Fragen unterscheiden zwischen ähnlich klingenden Services, etwa GuardDuty und Inspector oder CloudTrail und CloudWatch.",
          },
          {
            title: "Die geteilte Verantwortung an Beispielen üben",
            body: "Ordne Aufgaben für EC2, RDS, Lambda und S3 jeweils AWS oder dem Kunden zu. Je stärker ein Service verwaltet ist, desto mehr übernimmt AWS.",
          },
          {
            title: "Mit Zeitlimit üben",
            body: "Bearbeite vollständige Übungsprüfungen mit 65 Fragen in 90 Minuten, auch mit Multiple-Response-Fragen, und lies jede Erklärung.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Buche die Prüfung, wenn du in mehreren Übungsprüfungen sicher über 80 % liegst. Wenn du auf Deutsch prüfen willst, plane den Termin vor Ende 2026 ein.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Ähnliche Services verwechseln: CloudTrail protokolliert API-Aufrufe, CloudWatch überwacht Metriken und Logs, AWS Config bewertet Konfigurationen.",
          "Bei der geteilten Verantwortung annehmen, AWS kümmere sich um alles. Daten, Zugriffsrechte und die Konfiguration von Sicherheitsgruppen bleiben beim Kunden.",
          "Preismodelle verwechseln: Spot-Instanzen sind am günstigsten, können aber unterbrochen werden; Savings Plans und Reserved Instances belohnen eine Bindung über ein oder drei Jahre.",
          "Nur Definitionen lernen. Viele Fragen beschreiben ein Szenario und fragen nach dem passenden Service.",
          "Den Sprachwechsel übersehen. Nach dem 31. Dezember 2026 gibt es die Prüfung laut AWS nicht mehr auf Deutsch.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die CLF-C02-Prüfung?",
        answer:
          "65 Fragen, davon 50 bewertet und 15 unbewertet. Du hast 90 Minuten Zeit und bestehst mit 700 von 1.000 skalierten Punkten.",
      },
      {
        question: "Kann ich die Prüfung auf Deutsch ablegen?",
        answer:
          "Noch bis Ende 2026. Laut AWS wird die Prüfung auf Deutsch nach dem 31. Dezember 2026 eingestellt. Danach kannst du sie unter anderem auf Englisch ablegen.",
      },
      {
        question: "Welcher Bereich ist am wichtigsten?",
        answer:
          "Cloud-Technologie und -Services mit 34 %, gefolgt von Sicherheit und Compliance mit 30 %. Cloud-Konzepte machen 24 % aus, Abrechnung, Preise und Support 12 %.",
      },
      {
        question: "Brauche ich technische Vorkenntnisse?",
        answer:
          "Nein. Es gibt keine formalen Voraussetzungen. AWS empfiehlt bis zu sechs Monate Erfahrung mit der AWS Cloud, aber auch ohne technischen Hintergrund ist die Prüfung mit guter Vorbereitung machbar.",
      },
      {
        question: "Wo lege ich die Prüfung ab?",
        answer: "Bei Pearson VUE, entweder in einem Testcenter oder online mit Aufsicht von zu Hause oder vom Büro aus.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach dem offiziellen AWS-Prüfungsleitfaden erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "AWS Cloud Practitioner CLF-C02 auf Deutsch: Prüfung & Lernplan",
      description:
        "AWS CLF-C02 auf Deutsch vorbereiten: 65 Fragen, 90 Minuten, 700 Punkte zum Bestehen, alle vier Bereiche mit Gewichtung, Lernplan und deutsche Prüfung bis Ende 2026.",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "aws-clf-c02",
    intro:
      "30 eigene Übungsfragen zum AWS Certified Cloud Practitioner (CLF-C02) aus allen vier Bereichen des Prüfungsleitfadens, gewichtet wie in der Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-24",
    updated: "2026-11-24",
    seo: {
      title: "AWS CLF-C02 Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose AWS Cloud Practitioner Übungsfragen auf Deutsch: geteilte Verantwortung, IAM, EC2, S3, Datenbanken, Preismodelle, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Cloud-Konzepte ─────────────────────────────────────── */
      {
        id: "clf-d1-elasticity",
        domain: "d1",
        objective: "Aufgabe 1.1 Die Vorteile der AWS Cloud definieren",
        difficulty: "foundation",
        question:
          "Ein Onlineshop hat im Dezember fünfmal so viele Besucher wie im Rest des Jahres. Welcher Vorteil der Cloud hilft am meisten, nur für die tatsächlich benötigte Kapazität zu zahlen?",
        options: [
          { id: "A", text: "Hohe Verfügbarkeit", rationale: "Hohe Verfügbarkeit bedeutet, dass ein System trotz Ausfällen erreichbar bleibt; sie passt die Kapazität nicht an die Last an." },
          { id: "B", text: "Globale Reichweite", rationale: "Globale Reichweite erlaubt Bereitstellungen weltweit in wenigen Minuten, löst aber nicht das Problem schwankender Last." },
          { id: "C", text: "Elastizität", rationale: "Richtig. Elastizität bedeutet, Ressourcen bei Bedarf automatisch zu erhöhen und wieder zu verringern, sodass du nur für die genutzte Kapazität zahlst." },
          { id: "D", text: "Agilität", rationale: "Agilität beschreibt, wie schnell neue Ressourcen und Ideen bereitgestellt werden können, nicht die laufende Anpassung an schwankende Last." },
        ],
        answer: "C",
        explanation:
          "Statt Server für die Spitzenlast zu kaufen, passt du in der Cloud die Kapazität an den Bedarf an. Mit Auto Scaling werden zum Beispiel EC2-Instanzen automatisch hinzugefügt und wieder entfernt.",
        reference: GUIDE,
      },
      {
        id: "clf-d1-capex-opex",
        domain: "d1",
        objective: "Aufgabe 1.4 Die Konzepte der Cloud-Ökonomie verstehen",
        difficulty: "foundation",
        question: "Wie verändert sich die Kostenstruktur typischerweise, wenn ein Unternehmen vom eigenen Rechenzentrum in die AWS Cloud wechselt?",
        options: [
          { id: "A", text: "Feste Investitionsausgaben werden durch variable Betriebsausgaben ersetzt", rationale: "Richtig. Statt vorab in Hardware zu investieren, zahlt das Unternehmen laufend nach Nutzung." },
          { id: "B", text: "Variable Betriebsausgaben werden durch feste Investitionsausgaben ersetzt", rationale: "Die Richtung ist umgekehrt: Die Cloud reduziert Vorabinvestitionen." },
          { id: "C", text: "Es entstehen keinerlei laufende Kosten mehr", rationale: "Auch in der Cloud entstehen Kosten, allerdings nutzungsabhängig." },
          { id: "D", text: "Die Kosten für Lizenzen entfallen grundsätzlich", rationale: "Lizenzkosten können weiterhin anfallen, etwa für kommerzielle Betriebssysteme oder Software." },
        ],
        answer: "A",
        explanation:
          "Zu den Vorteilen der Cloud gehört der Wechsel von Investitionsausgaben (CapEx) zu variablen Ausgaben (OpEx). Hinzu kommen Skaleneffekte von AWS, die zu niedrigeren Preisen pro Einheit führen.",
        reference: GUIDE,
      },
      {
        id: "clf-d1-well-architected",
        domain: "d1",
        objective: "Aufgabe 1.2 Gestaltungsprinzipien der AWS Cloud identifizieren",
        difficulty: "intermediate",
        question: "Welche Säule des AWS Well-Architected Framework befasst sich vor allem damit, Systeme nach Ausfällen schnell wiederherzustellen und Lastspitzen standzuhalten?",
        options: [
          { id: "A", text: "Leistungseffizienz", rationale: "Diese Säule befasst sich mit dem effizienten Einsatz von Ressourcen für die Anforderungen, nicht vor allem mit der Wiederherstellung nach Ausfällen." },
          { id: "B", text: "Kostenoptimierung", rationale: "Diese Säule zielt darauf, unnötige Kosten zu vermeiden." },
          { id: "C", text: "Nachhaltigkeit", rationale: "Diese Säule zielt darauf, die Umweltauswirkungen von Workloads zu verringern." },
          { id: "D", text: "Zuverlässigkeit", rationale: "Richtig. Die Säule Zuverlässigkeit betrifft die Fähigkeit, Ausfälle zu verkraften, sich zu erholen und Anforderungen dauerhaft zu erfüllen." },
        ],
        answer: "D",
        explanation:
          "Das Well-Architected Framework hat sechs Säulen: operative Exzellenz, Sicherheit, Zuverlässigkeit, Leistungseffizienz, Kostenoptimierung und Nachhaltigkeit.",
        reference: GUIDE,
      },
      {
        id: "clf-d1-migration-rehost",
        domain: "d1",
        objective: "Aufgabe 1.3 Vorteile und Strategien der Migration in die AWS Cloud verstehen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen will eine Anwendung möglichst schnell und ohne Änderungen am Code auf EC2-Instanzen umziehen. Welche Migrationsstrategie ist das?",
        options: [
          { id: "A", text: "Refactor", rationale: "Beim Refactoring wird die Anwendung umgebaut, etwa für serverlose oder Cloud-native Dienste; das widerspricht „ohne Änderungen“." },
          { id: "B", text: "Rehost (Lift and Shift)", rationale: "Richtig. Beim Rehosting wird die Anwendung unverändert auf Cloud-Infrastruktur verschoben." },
          { id: "C", text: "Repurchase", rationale: "Beim Repurchasing wird auf ein anderes Produkt gewechselt, oft auf SaaS." },
          { id: "D", text: "Retire", rationale: "Beim Retiring wird eine Anwendung abgeschaltet, nicht migriert." },
        ],
        answer: "B",
        explanation:
          "Die gängigen Migrationsstrategien sind Retire, Retain, Rehost, Relocate, Repurchase, Replatform und Refactor. Rehost ist meist der schnellste Weg in die Cloud; Optimierungen folgen später.",
        reference: GUIDE,
      },
      {
        id: "clf-d1-caf",
        domain: "d1",
        objective: "Aufgabe 1.3 Vorteile und Strategien der Migration in die AWS Cloud verstehen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen nutzt das AWS Cloud Adoption Framework (AWS CAF). Welche Perspektive befasst sich mit Schulung, Unternehmenskultur und dem Wandel der Organisation?",
        options: [
          { id: "A", text: "Personen (People)", rationale: "Richtig. Die Perspektive Personen verbindet Technologie und Geschäft und befasst sich mit Kultur, Organisationsstruktur, Führung und Fähigkeiten." },
          { id: "B", text: "Plattform", rationale: "Die Perspektive Plattform befasst sich mit der Architektur und dem Aufbau der Cloud-Umgebung." },
          { id: "C", text: "Betrieb (Operations)", rationale: "Die Perspektive Betrieb sorgt dafür, dass Cloud-Services im vereinbarten Umfang bereitgestellt werden." },
          { id: "D", text: "Sicherheit", rationale: "Die Perspektive Sicherheit befasst sich mit Vertraulichkeit, Integrität und Verfügbarkeit von Daten und Workloads." },
        ],
        answer: "A",
        explanation:
          "Das AWS CAF hat sechs Perspektiven: Geschäft, Personen, Governance, Plattform, Sicherheit und Betrieb. Die ersten drei sind eher geschäftsorientiert, die letzten drei technisch.",
        reference: GUIDE,
      },
      {
        id: "clf-d1-design-loose-coupling",
        domain: "d1",
        objective: "Aufgabe 1.2 Gestaltungsprinzipien der AWS Cloud identifizieren",
        difficulty: "intermediate",
        question:
          "Eine Bestellanwendung soll weiterarbeiten, wenn die nachgelagerte Rechnungsstellung kurzzeitig ausfällt. Welches Gestaltungsprinzip hilft dabei am meisten?",
        options: [
          { id: "A", text: "Alle Komponenten auf einer großen EC2-Instanz betreiben", rationale: "Das schafft einen einzelnen Ausfallpunkt und koppelt die Komponenten noch stärker." },
          { id: "B", text: "Die Komponenten lose koppeln, etwa mit einer Warteschlange in Amazon SQS", rationale: "Richtig. Eine Warteschlange puffert Nachrichten, bis die Rechnungsstellung wieder verfügbar ist; ein Ausfall breitet sich nicht aus." },
          { id: "C", text: "Die Rechnungsstellung synchron vor jeder Bestellbestätigung aufrufen", rationale: "Synchrone Aufrufe koppeln die Komponenten eng; fällt die Rechnungsstellung aus, scheitert auch die Bestellung." },
          { id: "D", text: "Die Kapazität für die erwartete Spitzenlast fest bereitstellen", rationale: "Feste Kapazität hilft nicht, wenn eine nachgelagerte Komponente ausfällt." },
        ],
        answer: "B",
        explanation:
          "Lose Kopplung ist ein zentrales Gestaltungsprinzip der Cloud: Komponenten kommunizieren über Warteschlangen oder Ereignisse, sodass Ausfälle oder Lastspitzen einzelner Teile das Gesamtsystem nicht lahmlegen.",
        reference: GUIDE,
      },
      {
        id: "clf-d1-economies-of-scale",
        domain: "d1",
        objective: "Aufgabe 1.1 Die Vorteile der AWS Cloud definieren",
        difficulty: "foundation",
        question: "Warum kann AWS Rechenleistung oft günstiger anbieten, als ein einzelnes Unternehmen sie selbst betreiben könnte?",
        options: [
          { id: "A", text: "Weil AWS keine Rechenzentren betreibt", rationale: "AWS betreibt weltweit eigene Rechenzentren." },
          { id: "B", text: "Weil Kunden keine Daten speichern dürfen", rationale: "Kunden können in AWS selbstverständlich Daten speichern." },
          { id: "C", text: "Weil die Nutzung grundsätzlich kostenlos ist", rationale: "Es gibt ein kostenloses Kontingent, die Nutzung ist aber grundsätzlich kostenpflichtig." },
          { id: "D", text: "Wegen Skaleneffekten durch die gebündelte Nutzung sehr vieler Kunden", rationale: "Richtig. Die gebündelte Nachfrage vieler Kunden senkt die Kosten pro Einheit, und AWS gibt einen Teil davon über niedrigere Preise weiter." },
        ],
        answer: "D",
        explanation:
          "Skaleneffekte gehören zu den klassischen Vorteilen der Cloud, neben dem Wechsel zu variablen Kosten, dem Wegfall von Kapazitätsschätzungen, mehr Geschwindigkeit und globaler Reichweite.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Sicherheit und Compliance ──────────────────────────── */
      {
        id: "clf-d2-shared-ec2",
        domain: "d2",
        objective: "Aufgabe 2.1 Das AWS-Modell der geteilten Verantwortung verstehen",
        difficulty: "foundation",
        question: "Ein Unternehmen betreibt eine Anwendung auf Amazon EC2. Wer ist laut Modell der geteilten Verantwortung für die Sicherheitsupdates des Gastbetriebssystems zuständig?",
        options: [
          { id: "A", text: "AWS", rationale: "AWS ist für die Infrastruktur bis zum Hypervisor zuständig, nicht für das Betriebssystem auf der Instanz." },
          { id: "B", text: "Der Kunde", rationale: "Richtig. Bei EC2 verwaltet der Kunde das Gastbetriebssystem einschließlich Patches, Anwendungen und Sicherheitsgruppen." },
          { id: "C", text: "Der Internetanbieter des Kunden", rationale: "Der Internetanbieter hat keine Verantwortung für Instanzen in AWS." },
          { id: "D", text: "AWS und der Kunde zu gleichen Teilen", rationale: "Die Verantwortung für das Gastbetriebssystem ist eindeutig dem Kunden zugeordnet." },
        ],
        answer: "B",
        explanation:
          "AWS ist für die Sicherheit der Cloud zuständig, also Hardware, Rechenzentren und globale Infrastruktur. Der Kunde ist für die Sicherheit in der Cloud zuständig, bei EC2 unter anderem für Betriebssystem, Anwendungen, Daten und Firewall-Einstellungen.",
        reference: GUIDE,
      },
      {
        id: "clf-d2-shared-rds",
        domain: "d2",
        objective: "Aufgabe 2.1 Das AWS-Modell der geteilten Verantwortung verstehen",
        difficulty: "intermediate",
        question: "Ein Team wechselt von einer selbst betriebenen Datenbank auf EC2 zu Amazon RDS. Welche Aufgabe übernimmt dadurch AWS?",
        options: [
          { id: "A", text: "Festlegen, welche Benutzer auf die Datenbank zugreifen dürfen", rationale: "Zugriffsrechte und Benutzerverwaltung bleiben beim Kunden." },
          { id: "B", text: "Entscheiden, ob die Daten verschlüsselt werden", rationale: "Ob Verschlüsselung aktiviert wird, entscheidet der Kunde." },
          { id: "C", text: "Das Patchen des Betriebssystems und der Datenbanksoftware", rationale: "Richtig. Bei einem verwalteten Service wie RDS übernimmt AWS Betriebssystem und Datenbanksoftware einschließlich Patches." },
          { id: "D", text: "Die Qualität der gespeicherten Daten sicherstellen", rationale: "Die Daten und ihre Qualität bleiben immer in der Verantwortung des Kunden." },
        ],
        answer: "C",
        explanation:
          "Je stärker ein Service verwaltet ist, desto mehr Aufgaben übernimmt AWS. Bei RDS kümmert sich AWS um Betriebssystem, Datenbanksoftware und Infrastruktur; Daten, Zugriffsrechte und Einstellungen wie die Verschlüsselung bleiben beim Kunden.",
        reference: GUIDE,
      },
      {
        id: "clf-d2-root-user",
        domain: "d2",
        objective: "Aufgabe 2.3 Funktionen der AWS-Zugriffsverwaltung identifizieren",
        difficulty: "foundation",
        question: "Welche Empfehlung gilt für den Root-Benutzer eines AWS-Kontos?",
        options: [
          { id: "A", text: "MFA aktivieren und den Root-Benutzer nur für Aufgaben nutzen, die ihn zwingend erfordern", rationale: "Richtig. Der Root-Benutzer hat uneingeschränkten Zugriff; er sollte mit MFA geschützt und im Alltag nicht verwendet werden." },
          { id: "B", text: "Den Root-Benutzer für die tägliche Administration verwenden", rationale: "Für die tägliche Arbeit sollen Identitäten mit eingeschränkten Rechten verwendet werden." },
          { id: "C", text: "Die Zugangsdaten des Root-Benutzers im Team teilen", rationale: "Geteilte Zugangsdaten verhindern Nachvollziehbarkeit und erhöhen das Risiko eines Missbrauchs." },
          { id: "D", text: "Für den Root-Benutzer Zugriffsschlüssel für Skripte erstellen", rationale: "Für den Root-Benutzer sollten keine Zugriffsschlüssel existieren." },
        ],
        answer: "A",
        explanation:
          "Bewährte Praxis ist, den Root-Benutzer mit einem starken Kennwort und MFA zu sichern, keine Zugriffsschlüssel dafür anzulegen und für den Alltag IAM-Identitäten mit den geringsten nötigen Rechten zu verwenden.",
        reference: GUIDE,
      },
      {
        id: "clf-d2-iam-role",
        domain: "d2",
        objective: "Aufgabe 2.3 Funktionen der AWS-Zugriffsverwaltung identifizieren",
        difficulty: "intermediate",
        question:
          "Eine Anwendung auf einer EC2-Instanz muss Dateien in einen S3-Bucket schreiben. Wie wird der Zugriff am sichersten gewährt?",
        options: [
          { id: "A", text: "Zugriffsschlüssel eines IAM-Benutzers im Code hinterlegen", rationale: "Fest hinterlegte Schlüssel können offengelegt werden und müssen manuell rotiert werden." },
          { id: "B", text: "Den S3-Bucket öffentlich beschreibbar machen", rationale: "Ein öffentlich beschreibbarer Bucket ist ein erhebliches Sicherheitsrisiko." },
          { id: "C", text: "Die Zugangsdaten des Root-Benutzers auf der Instanz speichern", rationale: "Der Root-Benutzer hat uneingeschränkte Rechte und darf nie so verwendet werden." },
          { id: "D", text: "Der Instanz eine IAM-Rolle mit Schreibrecht auf genau diesen Bucket zuweisen", rationale: "Richtig. Eine IAM-Rolle liefert automatisch rotierende temporäre Anmeldeinformationen und lässt sich auf die geringsten nötigen Rechte beschränken." },
        ],
        answer: "D",
        explanation:
          "IAM-Rollen vergeben temporäre Berechtigungen an AWS-Services, Anwendungen oder Benutzer. Für Anwendungen auf EC2 ist eine Rolle mit eng gefasster Richtlinie die empfohlene Lösung.",
        reference: GUIDE,
      },
      {
        id: "clf-d2-guardduty",
        domain: "d2",
        objective: "Aufgabe 2.4 Komponenten und Ressourcen für die Sicherheit identifizieren",
        difficulty: "intermediate",
        question:
          "Ein Sicherheitsteam möchte verdächtige Aktivitäten im AWS-Konto erkennen, etwa ungewöhnliche API-Aufrufe oder Kommunikation mit bekannten bösartigen IP-Adressen. Welcher Service passt?",
        options: [
          { id: "A", text: "Amazon Inspector", rationale: "Inspector sucht nach Software-Schwachstellen und ungewollter Netzwerkerreichbarkeit, etwa bei EC2-Instanzen und Container-Images." },
          { id: "B", text: "Amazon GuardDuty", rationale: "Richtig. GuardDuty ist ein Service zur Bedrohungserkennung, der unter anderem CloudTrail-Ereignisse, VPC-Flow-Logs und DNS-Logs auf verdächtige Aktivitäten analysiert." },
          { id: "C", text: "Amazon Macie", rationale: "Macie erkennt sensible Daten wie personenbezogene Informationen in S3." },
          { id: "D", text: "AWS Artifact", rationale: "Artifact stellt Compliance-Berichte und Vereinbarungen bereit." },
        ],
        answer: "B",
        explanation:
          "GuardDuty erkennt Bedrohungen anhand von Logdaten und Bedrohungsinformationen, Inspector bewertet Schwachstellen, Macie findet sensible Daten, und Security Hub bündelt Sicherheitsbefunde aus mehreren Services.",
        reference: GUIDE,
      },
      {
        id: "clf-d2-artifact",
        domain: "d2",
        objective: "Aufgabe 2.2 Konzepte zu Sicherheit, Governance und Compliance in der AWS Cloud verstehen",
        difficulty: "foundation",
        question: "Ein Prüfer verlangt die ISO-27001-Zertifizierung und SOC-Berichte von AWS. Wo lädt das Unternehmen diese Dokumente herunter?",
        options: [
          { id: "A", text: "AWS Artifact", rationale: "Richtig. AWS Artifact ist das Portal für Compliance-Berichte von AWS und für bestimmte Vereinbarungen." },
          { id: "B", text: "AWS Config", rationale: "AWS Config bewertet die Konfiguration der eigenen Ressourcen, stellt aber keine Prüfberichte von AWS bereit." },
          { id: "C", text: "AWS CloudTrail", rationale: "CloudTrail protokolliert API-Aufrufe im eigenen Konto." },
          { id: "D", text: "AWS Trusted Advisor", rationale: "Trusted Advisor gibt Empfehlungen zu Kosten, Sicherheit und Leistung, aber keine Compliance-Berichte." },
        ],
        answer: "A",
        explanation:
          "AWS Artifact bietet Zugriff auf Sicherheits- und Compliance-Berichte von AWS, etwa ISO-Zertifikate und SOC-Berichte, sowie auf Vereinbarungen, die für bestimmte Vorschriften nötig sind.",
        reference: GUIDE,
      },
      {
        id: "clf-d2-cloudtrail",
        domain: "d2",
        objective: "Aufgabe 2.2 Konzepte zu Sicherheit, Governance und Compliance in der AWS Cloud verstehen",
        difficulty: "intermediate",
        question: "Ein Unternehmen muss nachweisen, wer wann welche Sicherheitsgruppe geändert hat. Welcher Service liefert diese Information?",
        options: [
          { id: "A", text: "Amazon CloudWatch", rationale: "CloudWatch überwacht Metriken, Logs und Alarme, protokolliert aber nicht standardmäßig, wer welchen API-Aufruf ausgeführt hat." },
          { id: "B", text: "AWS Trusted Advisor", rationale: "Trusted Advisor prüft das Konto auf Best Practices, liefert aber keine Aufzeichnung einzelner Änderungen." },
          { id: "C", text: "AWS CloudTrail", rationale: "Richtig. CloudTrail zeichnet API-Aufrufe mit Benutzer, Zeitpunkt und Quell-IP auf und ermöglicht so die Nachverfolgung von Änderungen." },
          { id: "D", text: "Amazon Inspector", rationale: "Inspector sucht nach Schwachstellen, nicht nach Änderungen durch Benutzer." },
        ],
        answer: "C",
        explanation:
          "CloudTrail beantwortet die Frage „wer hat was wann getan?“ für Aktionen in AWS. CloudWatch dient der Überwachung von Metriken und Logs, AWS Config dokumentiert Konfigurationen und bewertet sie gegen Regeln.",
        reference: GUIDE,
      },
      {
        id: "clf-d2-shield-waf",
        domain: "d2",
        objective: "Aufgabe 2.4 Komponenten und Ressourcen für die Sicherheit identifizieren",
        difficulty: "intermediate",
        question:
          "Eine Webanwendung hinter Amazon CloudFront soll vor SQL-Injection und Cross-Site-Scripting geschützt werden. Welcher Service passt dafür?",
        options: [
          { id: "A", text: "AWS Shield Standard", rationale: "Shield Standard schützt automatisch vor gängigen DDoS-Angriffen auf Netzwerk- und Transportebene, nicht gezielt vor SQL-Injection." },
          { id: "B", text: "Amazon Macie", rationale: "Macie erkennt sensible Daten in S3 und filtert keinen Webverkehr." },
          { id: "C", text: "AWS Key Management Service", rationale: "KMS verwaltet Schlüssel für die Verschlüsselung, filtert aber keine Anfragen." },
          { id: "D", text: "AWS WAF", rationale: "Richtig. AWS WAF ist eine Web Application Firewall, die Anfragen anhand von Regeln filtert, etwa gegen SQL-Injection und Cross-Site-Scripting." },
        ],
        answer: "D",
        explanation:
          "AWS WAF schützt Webanwendungen auf Anwendungsebene mit Regeln und verwalteten Regelgruppen. AWS Shield schützt vor DDoS-Angriffen; Shield Standard ist ohne Zusatzkosten aktiv, Shield Advanced bietet erweiterten Schutz.",
        reference: GUIDE,
      },
      {
        id: "clf-d2-encryption",
        domain: "d2",
        objective: "Aufgabe 2.2 Konzepte zu Sicherheit, Governance und Compliance in der AWS Cloud verstehen",
        difficulty: "foundation",
        question: "Mit welchem Service erstellt und verwaltet ein Unternehmen kryptografische Schlüssel, um Daten in S3 und EBS zu verschlüsseln?",
        options: [
          { id: "A", text: "AWS Key Management Service (AWS KMS)", rationale: "Richtig. AWS KMS erstellt und verwaltet Schlüssel und ist mit vielen Services wie S3 und EBS integriert." },
          { id: "B", text: "AWS Identity and Access Management (IAM)", rationale: "IAM verwaltet Identitäten und Berechtigungen, keine Verschlüsselungsschlüssel." },
          { id: "C", text: "Amazon GuardDuty", rationale: "GuardDuty erkennt Bedrohungen, verschlüsselt aber keine Daten." },
          { id: "D", text: "AWS Organizations", rationale: "Organizations verwaltet mehrere Konten zentral." },
        ],
        answer: "A",
        explanation:
          "Verschlüsselung im Ruhezustand wird in AWS meist mit KMS-Schlüsseln umgesetzt. Für Verschlüsselung bei der Übertragung werden TLS-Zertifikate eingesetzt, etwa über AWS Certificate Manager.",
        reference: GUIDE,
      },

      /* ── Bereich 3: Cloud-Technologie und -Services ────────────────────── */
      {
        id: "clf-d3-regions-azs",
        domain: "d3",
        objective: "Aufgabe 3.2 Die globale AWS-Infrastruktur definieren",
        difficulty: "foundation",
        question: "Wie erreicht ein Unternehmen eine hohe Verfügbarkeit seiner Anwendung innerhalb einer AWS-Region?",
        options: [
          { id: "A", text: "Alle Instanzen in derselben Availability Zone betreiben", rationale: "Fällt diese Availability Zone aus, ist die gesamte Anwendung betroffen." },
          { id: "B", text: "Die Anwendung nur über einen Edge-Standort ausliefern", rationale: "Edge-Standorte dienen dem Caching von Inhalten, nicht dem Betrieb der Anwendung." },
          { id: "C", text: "Die Anwendung auf mehrere Availability Zones verteilen", rationale: "Richtig. Availability Zones sind voneinander getrennte Rechenzentrumsgruppen in einer Region; die Verteilung schützt vor dem Ausfall einer einzelnen Zone." },
          { id: "D", text: "Eine größere Instanz wählen", rationale: "Eine größere Instanz bleibt ein einzelner Ausfallpunkt." },
        ],
        answer: "C",
        explanation:
          "Eine Region besteht aus mehreren isolierten Availability Zones mit eigener Stromversorgung und Netzanbindung. Für hohe Verfügbarkeit werden Workloads über mehrere Availability Zones verteilt, für Notfallwiederherstellung oft zusätzlich über Regionen.",
        reference: GUIDE,
      },
      {
        id: "clf-d3-lambda",
        domain: "d3",
        objective: "Aufgabe 3.3 AWS-Compute-Services identifizieren",
        difficulty: "foundation",
        question:
          "Ein Entwickler möchte Code ausführen, sobald eine Datei in einen S3-Bucket hochgeladen wird, ohne Server zu verwalten und nur für die tatsächliche Laufzeit zu bezahlen. Welcher Service passt?",
        options: [
          { id: "A", text: "AWS Lambda", rationale: "Richtig. Lambda führt Code ereignisgesteuert und serverlos aus und rechnet nach Anzahl der Aufrufe und Laufzeit ab." },
          { id: "B", text: "Amazon EC2", rationale: "EC2-Instanzen sind virtuelle Server, die du selbst verwaltest und für die Laufzeit der Instanz bezahlst." },
          { id: "C", text: "Amazon Lightsail", rationale: "Lightsail bietet einfache virtuelle Server zu festen Monatspreisen, keine ereignisgesteuerte Ausführung." },
          { id: "D", text: "AWS Outposts", rationale: "Outposts bringt AWS-Infrastruktur ins eigene Rechenzentrum." },
        ],
        answer: "A",
        explanation:
          "Lambda ist der zentrale serverlose Compute-Service. Er reagiert auf Ereignisse, etwa aus S3, DynamoDB oder API Gateway, und skaliert automatisch.",
        reference: GUIDE,
      },
      {
        id: "clf-d3-s3-glacier",
        domain: "d3",
        objective: "Aufgabe 3.6 AWS-Speicherservices identifizieren",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen muss Protokolldaten zehn Jahre aufbewahren. Die Daten werden fast nie gelesen, und eine Bereitstellungszeit von bis zu einigen Stunden ist akzeptabel. Welche Speicherklasse ist am kostengünstigsten?",
        options: [
          { id: "A", text: "S3 Standard", rationale: "S3 Standard eignet sich für häufig genutzte Daten und ist für selten gelesene Archivdaten zu teuer." },
          { id: "B", text: "S3 Standard-Infrequent Access", rationale: "Diese Klasse ist für seltenen, aber schnellen Zugriff gedacht und teurer als die Archivklassen." },
          { id: "C", text: "S3 Glacier Instant Retrieval", rationale: "Diese Klasse bietet Abruf in Millisekunden; dafür zahlt man mehr als für Deep Archive." },
          { id: "D", text: "S3 Glacier Deep Archive", rationale: "Richtig. Deep Archive ist die günstigste S3-Speicherklasse für langfristige Archivierung mit Abrufzeiten von Stunden." },
        ],
        answer: "D",
        explanation:
          "Die S3-Speicherklassen reichen von S3 Standard für häufige Zugriffe über Standard-IA und One Zone-IA bis zu den Glacier-Klassen für Archive. S3 Intelligent-Tiering verschiebt Objekte automatisch, wenn das Zugriffsmuster unbekannt ist.",
        reference: GUIDE,
      },
      {
        id: "clf-d3-ebs-efs",
        domain: "d3",
        objective: "Aufgabe 3.6 AWS-Speicherservices identifizieren",
        difficulty: "intermediate",
        question:
          "Mehrere Linux-EC2-Instanzen in verschiedenen Availability Zones sollen gleichzeitig auf dasselbe Dateisystem zugreifen. Welcher Service passt?",
        options: [
          { id: "A", text: "Amazon EBS", rationale: "Ein EBS-Volume ist Blockspeicher in einer Availability Zone und wird normalerweise an eine einzelne Instanz angehängt." },
          { id: "B", text: "Amazon EFS", rationale: "Richtig. EFS ist ein verwaltetes, elastisches Dateisystem für Linux, auf das viele Instanzen über mehrere Availability Zones gleichzeitig zugreifen können." },
          { id: "C", text: "Instance Store", rationale: "Instance Store ist flüchtiger Speicher einer einzelnen Instanz." },
          { id: "D", text: "Amazon S3 Glacier Flexible Retrieval", rationale: "Glacier ist ein Archivspeicher und kein gemeinsam eingebundenes Dateisystem." },
        ],
        answer: "B",
        explanation:
          "EBS liefert Blockspeicher für einzelne Instanzen, EFS ein gemeinsam nutzbares Dateisystem für Linux, Amazon FSx verwaltete Dateisysteme wie Windows File Server, und S3 ist Objektspeicher.",
        reference: GUIDE,
      },
      {
        id: "clf-d3-dynamodb",
        domain: "d3",
        objective: "Aufgabe 3.4 AWS-Datenbankservices identifizieren",
        difficulty: "intermediate",
        question:
          "Eine mobile App speichert Benutzerprofile als Schlüssel-Wert-Daten und braucht bei Millionen Zugriffen Antwortzeiten im einstelligen Millisekundenbereich, ohne Server zu verwalten. Welcher Datenbankservice passt?",
        options: [
          { id: "A", text: "Amazon Redshift", rationale: "Redshift ist ein Data Warehouse für analytische Abfragen über große Datenmengen, nicht für schnelle Einzelzugriffe einer App." },
          { id: "B", text: "Amazon RDS for MySQL", rationale: "RDS ist eine relationale Datenbank; für einfache Schlüssel-Wert-Zugriffe in dieser Größenordnung ist DynamoDB die passendere Wahl." },
          { id: "C", text: "Amazon DynamoDB", rationale: "Richtig. DynamoDB ist eine vollständig verwaltete NoSQL-Datenbank für Schlüssel-Wert- und Dokumentdaten mit konstant niedrigen Latenzen." },
          { id: "D", text: "Amazon Neptune", rationale: "Neptune ist eine Graphdatenbank für stark vernetzte Daten." },
        ],
        answer: "C",
        explanation:
          "Faustregel: relationale Daten mit SQL → RDS oder Aurora; Schlüssel-Wert und Dokumente mit hoher Skalierung → DynamoDB; Analysen → Redshift; In-Memory-Cache → ElastiCache; Graphen → Neptune.",
        reference: GUIDE,
      },
      {
        id: "clf-d3-security-group",
        domain: "d3",
        objective: "Aufgabe 3.5 AWS-Netzwerkservices identifizieren",
        difficulty: "intermediate",
        question: "Welche Aussage zu Sicherheitsgruppen in einer Amazon VPC ist richtig?",
        options: [
          { id: "A", text: "Sie wirken auf Ebene der Instanz und sind zustandsbehaftet", rationale: "Richtig. Sicherheitsgruppen sind virtuelle Firewalls für Instanzen; erlaubter eingehender Verkehr darf automatisch antworten." },
          { id: "B", text: "Sie wirken auf Ebene des Subnetzes und sind zustandslos", rationale: "Das beschreibt Netzwerk-ACLs, nicht Sicherheitsgruppen." },
          { id: "C", text: "Sie verschlüsseln den gesamten Datenverkehr in der VPC", rationale: "Sicherheitsgruppen filtern Verkehr, verschlüsseln ihn aber nicht." },
          { id: "D", text: "Sie verbinden die VPC mit dem eigenen Rechenzentrum", rationale: "Dafür gibt es AWS Site-to-Site VPN oder AWS Direct Connect." },
        ],
        answer: "A",
        explanation:
          "Sicherheitsgruppen arbeiten auf Instanzebene, sind zustandsbehaftet und kennen nur Erlaubnisregeln. Netzwerk-ACLs arbeiten auf Subnetzebene, sind zustandslos und kennen Erlaubnis- und Verweigerungsregeln.",
        reference: GUIDE,
      },
      {
        id: "clf-d3-cloudfront",
        domain: "d3",
        objective: "Aufgabe 3.5 AWS-Netzwerkservices identifizieren",
        difficulty: "foundation",
        question: "Eine Website mit vielen Bildern und Videos soll für Nutzer weltweit schneller laden. Welcher Service hilft am meisten?",
        options: [
          { id: "A", text: "Amazon Route 53", rationale: "Route 53 ist ein DNS-Service; er beschleunigt die Auslieferung von Inhalten nicht durch Caching." },
          { id: "B", text: "AWS Direct Connect", rationale: "Direct Connect ist eine dedizierte Verbindung zwischen eigenem Rechenzentrum und AWS." },
          { id: "C", text: "Amazon VPC", rationale: "Eine VPC ist ein isoliertes Netzwerk in AWS, keine Lösung zur weltweiten Auslieferung." },
          { id: "D", text: "Amazon CloudFront", rationale: "Richtig. CloudFront ist ein Content Delivery Network, das Inhalte an Edge-Standorten nahe bei den Nutzern zwischenspeichert." },
        ],
        answer: "D",
        explanation:
          "CloudFront nutzt das weltweite Netz von Edge-Standorten, um Inhalte mit geringer Latenz auszuliefern. Route 53 übernimmt die Namensauflösung, Global Accelerator verbessert die Leistung über das AWS-Netz.",
        reference: GUIDE,
      },
      {
        id: "clf-d3-ai-services",
        domain: "d3",
        objective: "Aufgabe 3.7 AWS-Services für KI/ML und Analysen identifizieren",
        difficulty: "intermediate",
        question: "Ein Callcenter möchte aufgezeichnete Kundengespräche automatisch in Text umwandeln. Welcher AWS-Service ist dafür vorgesehen?",
        options: [
          { id: "A", text: "Amazon Polly", rationale: "Polly macht das Gegenteil: Es wandelt Text in natürlich klingende Sprache um." },
          { id: "B", text: "Amazon Transcribe", rationale: "Richtig. Transcribe wandelt gesprochene Sprache automatisch in Text um." },
          { id: "C", text: "Amazon Rekognition", rationale: "Rekognition analysiert Bilder und Videos." },
          { id: "D", text: "Amazon Translate", rationale: "Translate übersetzt Text zwischen Sprachen, wandelt aber keine Audioaufnahmen um." },
        ],
        answer: "B",
        explanation:
          "Wichtige KI-Services: Transcribe (Sprache zu Text), Polly (Text zu Sprache), Translate (Übersetzung), Comprehend (Textanalyse), Rekognition (Bilder und Videos), Textract (Dokumente), Lex (Chatbots), Amazon Bedrock (generative KI mit Basismodellen) und SageMaker AI (eigene ML-Modelle).",
        reference: GUIDE,
      },

      {
        id: "clf-d3-cloudformation",
        domain: "d3",
        objective: "Aufgabe 3.1 Methoden zur Bereitstellung und zum Betrieb in der AWS Cloud definieren",
        difficulty: "intermediate",
        question:
          "Ein Team möchte dieselbe Umgebung aus VPC, EC2-Instanzen und Datenbank wiederholt und identisch in mehreren Regionen aufbauen, beschrieben in einer Vorlagendatei. Welcher Service passt?",
        options: [
          { id: "A", text: "AWS Trusted Advisor", rationale: "Trusted Advisor gibt Empfehlungen, stellt aber keine Ressourcen bereit." },
          { id: "B", text: "AWS Management Console", rationale: "Mit der Konsole klickt man Ressourcen manuell zusammen; das ist fehleranfällig und nicht wiederholbar." },
          { id: "C", text: "AWS CloudFormation", rationale: "Richtig. CloudFormation stellt Ressourcen als Infrastructure as Code aus Vorlagen bereit, wiederholbar und einheitlich." },
          { id: "D", text: "Amazon CloudWatch", rationale: "CloudWatch überwacht Ressourcen, legt sie aber nicht an." },
        ],
        answer: "C",
        explanation:
          "Zugriff auf AWS gibt es über die Konsole, die AWS CLI, SDKs und Infrastructure as Code. CloudFormation und das AWS CDK beschreiben Infrastruktur als Code und machen Bereitstellungen wiederholbar.",
        reference: GUIDE,
      },
      {
        id: "clf-d3-elb",
        domain: "d3",
        objective: "Aufgabe 3.3 AWS-Compute-Services identifizieren",
        difficulty: "foundation",
        question:
          "Eingehende Anfragen an eine Webanwendung sollen gleichmäßig auf mehrere EC2-Instanzen in verschiedenen Availability Zones verteilt werden; fehlerhafte Instanzen sollen keine Anfragen mehr erhalten. Welcher Service passt?",
        options: [
          { id: "A", text: "Amazon Route 53 Resolver", rationale: "Der Resolver beantwortet DNS-Anfragen innerhalb von VPCs und verteilt keine Last auf Instanzen." },
          { id: "B", text: "AWS Direct Connect", rationale: "Direct Connect ist eine dedizierte Netzwerkverbindung ins eigene Rechenzentrum." },
          { id: "C", text: "Elastic Load Balancing", rationale: "Richtig. Elastic Load Balancing verteilt Anfragen auf mehrere Ziele und leitet anhand von Zustandsprüfungen nur an gesunde Instanzen weiter." },
          { id: "D", text: "Amazon EBS", rationale: "EBS ist Blockspeicher für Instanzen." },
        ],
        answer: "C",
        explanation:
          "Elastic Load Balancing und EC2 Auto Scaling werden oft kombiniert: Auto Scaling passt die Anzahl der Instanzen an die Last an, der Load Balancer verteilt die Anfragen auf die gesunden Instanzen.",
        reference: GUIDE,
      },

      /* ── Bereich 4: Abrechnung, Preise und Support ─────────────────────── */
      {
        id: "clf-d4-spot",
        domain: "d4",
        objective: "Aufgabe 4.1 AWS-Preismodelle vergleichen",
        difficulty: "intermediate",
        question:
          "Ein Forschungsteam rechnet Simulationen, die jederzeit unterbrochen und später fortgesetzt werden können. Welche EC2-Kaufoption ist am kostengünstigsten?",
        options: [
          { id: "A", text: "On-Demand-Instanzen", rationale: "On-Demand ist flexibel, aber teurer als Spot für unterbrechbare Workloads." },
          { id: "B", text: "Dedicated Hosts", rationale: "Dedicated Hosts sind physische Server für einen Kunden, etwa für Lizenzanforderungen, und vergleichsweise teuer." },
          { id: "C", text: "Spot-Instanzen", rationale: "Richtig. Spot-Instanzen nutzen freie Kapazität mit hohem Rabatt; AWS kann sie mit kurzer Vorwarnung unterbrechen, was hier akzeptabel ist." },
          { id: "D", text: "Reserved Instances mit dreijähriger Laufzeit", rationale: "Reserved Instances lohnen sich für dauerhafte, planbare Last, nicht für unterbrechbare Einzelberechnungen." },
        ],
        answer: "C",
        explanation:
          "On-Demand: flexibel ohne Bindung. Savings Plans und Reserved Instances: Rabatt gegen Bindung über ein oder drei Jahre. Spot: größter Rabatt für unterbrechbare Workloads. Dedicated Hosts: physische Server für Lizenz- oder Compliance-Anforderungen.",
        reference: GUIDE,
      },
      {
        id: "clf-d4-budgets",
        domain: "d4",
        objective: "Aufgabe 4.2 Ressourcen für Abrechnung, Budget und Kostenmanagement verstehen",
        difficulty: "foundation",
        question: "Ein Start-up möchte per E-Mail gewarnt werden, sobald die voraussichtlichen monatlichen AWS-Kosten 500 US-Dollar überschreiten. Welcher Service passt?",
        options: [
          { id: "A", text: "AWS Budgets", rationale: "Richtig. Mit AWS Budgets legst du Kosten- oder Nutzungsgrenzen fest und erhältst Warnungen bei tatsächlicher oder prognostizierter Überschreitung." },
          { id: "B", text: "AWS Pricing Calculator", rationale: "Der Pricing Calculator schätzt Kosten vor einer Bereitstellung, warnt aber nicht im laufenden Betrieb." },
          { id: "C", text: "AWS Artifact", rationale: "Artifact stellt Compliance-Berichte bereit." },
          { id: "D", text: "Amazon Inspector", rationale: "Inspector sucht nach Schwachstellen." },
        ],
        answer: "A",
        explanation:
          "Kostenwerkzeuge im Überblick: Pricing Calculator für Schätzungen vorab, Cost Explorer für die Analyse vergangener und prognostizierter Kosten, Budgets für Grenzen und Warnungen, der Cost and Usage Report für detaillierte Abrechnungsdaten.",
        reference: GUIDE,
      },
      {
        id: "clf-d4-consolidated-billing",
        domain: "d4",
        objective: "Aufgabe 4.2 Ressourcen für Abrechnung, Budget und Kostenmanagement verstehen",
        difficulty: "intermediate",
        question:
          "Ein Konzern hat zwölf AWS-Konten für verschiedene Abteilungen und möchte eine gemeinsame Rechnung sowie Mengenrabatte über alle Konten hinweg. Welche Funktion passt?",
        options: [
          { id: "A", text: "Eine IAM-Gruppe pro Abteilung", rationale: "IAM-Gruppen verwalten Berechtigungen innerhalb eines Kontos, nicht die Abrechnung mehrerer Konten." },
          { id: "B", text: "Konsolidierte Fakturierung mit AWS Organizations", rationale: "Richtig. Mit AWS Organizations werden die Konten unter einem Verwaltungskonto zusammengefasst; die Nutzung wird für Mengenrabatte gebündelt und auf einer Rechnung ausgewiesen." },
          { id: "C", text: "Für jedes Konto einen eigenen Pricing Calculator", rationale: "Der Pricing Calculator schätzt Kosten, fasst aber keine Rechnungen zusammen." },
          { id: "D", text: "Amazon CloudWatch-Dashboards", rationale: "CloudWatch überwacht Ressourcen, ist aber kein Abrechnungswerkzeug." },
        ],
        answer: "B",
        explanation:
          "AWS Organizations ermöglicht konsolidierte Fakturierung und zentrale Richtlinien wie Service Control Policies. Kostenzuordnungs-Tags helfen zusätzlich, Kosten nach Abteilungen oder Projekten aufzuschlüsseln.",
        reference: GUIDE,
      },
      {
        id: "clf-d4-trusted-advisor",
        domain: "d4",
        objective: "Aufgabe 4.3 Technische Ressourcen und Support-Optionen von AWS identifizieren",
        difficulty: "intermediate",
        question: "Welcher Service prüft ein AWS-Konto auf Best Practices und gibt Empfehlungen, etwa zu ungenutzten Ressourcen, offenen Sicherheitsgruppen oder Servicekontingenten?",
        options: [
          { id: "A", text: "AWS CloudTrail", rationale: "CloudTrail protokolliert API-Aufrufe, gibt aber keine Empfehlungen." },
          { id: "B", text: "AWS Artifact", rationale: "Artifact stellt Compliance-Berichte bereit." },
          { id: "C", text: "AWS Marketplace", rationale: "Der Marketplace ist ein Katalog für Software von Drittanbietern." },
          { id: "D", text: "AWS Trusted Advisor", rationale: "Richtig. Trusted Advisor prüft das Konto in Kategorien wie Kostenoptimierung, Sicherheit, Fehlertoleranz, Leistung und Servicekontingente; der Umfang der Prüfungen hängt vom Supportplan ab." },
        ],
        answer: "D",
        explanation:
          "Für technische Hilfe gibt es neben den Supportplänen unter anderem AWS Trusted Advisor, AWS re:Post, das AWS Knowledge Center, die Dokumentation und AWS Health für Informationen zu Ereignissen, die deine Ressourcen betreffen.",
        reference: GUIDE,
      },
    ],
  },
};
