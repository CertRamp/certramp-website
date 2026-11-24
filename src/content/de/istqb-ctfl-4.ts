import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for ISTQB Certified Tester
 * Foundation Level (CTFL) v4.0. Exam facts follow the verified English facts in
 * src/config/certifications.ts (istqb.org, Exam Structure and Rules Tables v1.20);
 * terminology follows the German syllabus edition of the Austrian, German and
 * Swiss Testing Boards (Lehrplan 4.0.1).
 * ORIGINAL CertRamp questions — not real exam questions.
 */
const SYLLABUS = {
  label: "ATB, GTB, STB: ISTQB Certified Tester Lehrplan Foundation Level 4.0.1 (deutschsprachige Ausgabe)",
  url: "https://gasq.org/files/content/gasq/downloads/certification/ISTQB%20Syllabi/ISTQB_CTFL_Lehrplan%202023_V4.0.1_DE.pdf",
};

export const istqbCtfl4De: DeContent = {
  slug: "istqb-ctfl-4",
  name: "ISTQB Certified Tester Foundation Level",
  languageNote:
    "Den deutschsprachigen Lehrplan geben das Austrian, das German und das Swiss Testing Board heraus; lizenzierte Zertifizierungsstellen bieten die Prüfung auch auf Deutsch an.",
  facts: [
    { label: "Prüfungsanbieter", value: "ISTQB, über lizenzierte Zertifizierungsstellen" },
    { label: "Fragen", value: "40" },
    { label: "Dauer", value: "60 Minuten (25 % mehr, wenn die Prüfung nicht in deiner Muttersprache stattfindet)" },
    { label: "Bestehensgrenze", value: "26 von 40 Punkten (65 %)" },
    { label: "Fragetypen", value: "Multiple Choice, 1 Punkt pro Frage; 8 Fragen auf K1, 24 auf K2 und 8 auf K3" },
    { label: "Prüfungsversion", value: "Lehrplan 4.0.1" },
  ],
  domains: [
    { id: "d1", name: "Grundlagen des Testens", weight: "8 Fragen" },
    { id: "d2", name: "Testen im Kontext eines Softwareentwicklungslebenszyklus", weight: "6 Fragen" },
    { id: "d3", name: "Statischer Test", weight: "4 Fragen" },
    { id: "d4", name: "Testanalyse und -entwurf", weight: "11 Fragen" },
    { id: "d5", name: "Management der Testaktivitäten", weight: "9 Fragen" },
    { id: "d6", name: "Testwerkzeuge", weight: "2 Fragen" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "istqb-ctfl-4",
    summary:
      "Der ISTQB Certified Tester Foundation Level (CTFL) ist das international verbreitetste Einstiegszertifikat für Softwaretest. Die Prüfung zum Lehrplan 4.0 hat 40 Multiple-Choice-Fragen in 60 Minuten, und du bestehst mit 26 von 40 Punkten (65 %). Am stärksten gewichtet sind Testanalyse und -entwurf mit 11 Fragen sowie das Management der Testaktivitäten mit 9.",
    whoFor: [
      "Testerinnen und Tester, die ihr Wissen mit einem anerkannten Zertifikat belegen wollen",
      "Entwickler, Product Owner und Business-Analysten in agilen Teams, die Qualität mitverantworten",
      "Quereinsteiger und Studierende, die ins Testen einsteigen möchten",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung umfasst 40 Multiple-Choice-Fragen mit je einem Punkt. Du hast 60 Minuten Zeit; legst du die Prüfung nicht in deiner Muttersprache ab, verlängert sich die Zeit um 25 %. Zum Bestehen brauchst du 26 Punkte, also 65 %. Abgenommen wird die Prüfung von lizenzierten Zertifizierungsstellen, oft direkt nach einer akkreditierten Schulung, aber auch einzeln.",
          "Die Fragen sind nach kognitiven Stufen verteilt: 8 Fragen auf K1 (Erinnern), 24 auf K2 (Verstehen) und 8 auf K3 (Anwenden). Die K3-Fragen stammen vor allem aus Kapitel 4: Du musst Testverfahren wie Äquivalenzklassenbildung, Grenzwertanalyse, Entscheidungstabellen und Zustandsübergänge auf ein kurzes Beispiel anwenden und zum Beispiel die Zahl der nötigen Testfälle bestimmen.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Kapitel 4 (Testanalyse und -entwurf) liefert mit 11 Fragen über ein Viertel der Prüfung und die meisten Rechenaufgaben. Übe die Black-Box-Verfahren so lange, bis du Klassen, Grenzwerte, Regeln und Übergänge sicher zählst, und verstehe, warum 100 % Zweigüberdeckung immer 100 % Anweisungsüberdeckung bedeuten, aber nicht umgekehrt.",
          "Kapitel 5 (Management der Testaktivitäten) bringt 9 Fragen, etwa zu Eingangs- und Endekriterien, Schätzverfahren wie der Drei-Punkt-Schätzung, risikobasiertem Testen, Testquadranten und Fehlerberichten. Kapitel 1 mit 8 Fragen ist vor allem Begriffsarbeit: die sieben Grundsätze, die Kette aus Fehlhandlung, Fehlerzustand und Fehlerwirkung sowie die Testaktivitäten. Die kurzen Kapitel 3 (statischer Test) und 6 (Testwerkzeuge) bringen zusammen nur 6 Fragen, die du mit sauberer Begriffskenntnis gut holst.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den aktuellen Lehrplan besorgen",
            body: "Lade den kostenlosen deutschsprachigen Lehrplan 4.0.1 herunter. Achte bei Büchern und Kursen darauf, dass sie Version 4.0 abdecken; Material zu 2018 (v3.1) hat eine andere Kapitelstruktur und andere Schwerpunkte.",
          },
          {
            title: "Das ISTQB-Glossar nutzen",
            body: "Die Prüfung verwendet die Begriffe exakt im Sinne des ISTQB-Glossars. Lerne Paare, die gern verwechselt werden: Fehlerzustand und Fehlerwirkung, Verifizierung und Validierung, Fehlernachtest und Regressionstest, Testbasis und Testmittel.",
          },
          {
            title: "Die Testverfahren rechnen",
            body: "Erstelle für Äquivalenzklassen, Grenzwerte, Entscheidungstabellen und Zustandsübergangsdiagramme jeweils mehrere eigene Beispiele und zähle die nötigen Testfälle. Rechne außerdem Anweisungs- und Zweigüberdeckung für kleine Codeausschnitte.",
          },
          {
            title: "Management-Themen an Beispielen festigen",
            body: "Übe die Drei-Punkt-Schätzung, ordne Tests den vier Testquadranten zu und priorisiere Risiken nach Eintrittswahrscheinlichkeit und Schadensausmaß.",
          },
          {
            title: "Mit Zeitlimit üben",
            body: "Bearbeite vollständige Übungsprüfungen mit 40 Fragen in 60 Minuten. Plane für Rechenaufgaben etwas mehr Zeit ein und lies jede Erklärung, auch bei richtig beantworteten Fragen.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Du brauchst 65 %. Buche die Prüfung, wenn du in mehreren Übungsprüfungen sicher über 75 % liegst, damit ein paar knifflige Fragen am Prüfungstag nicht den Ausschlag geben.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Mit Material zum alten Lehrplan 2018 lernen. Version 4.0 hat Inhalte zu agilen Vorgehensweisen, Shift-Left und auf Zusammenarbeit basierenden Testansätzen neu aufgenommen.",
          "Aus der eigenen Projekterfahrung antworten statt nach dem Lehrplan. Die Prüfung folgt den ISTQB-Definitionen, auch wenn dein Team Begriffe anders verwendet.",
          "Fehlerzustand und Fehlerwirkung verwechseln: Der Fehlerzustand steckt im Arbeitsergebnis, die Fehlerwirkung zeigt sich bei der Ausführung.",
          "Bei der Grenzwertanalyse die Variante übersehen. Die 2-Wert- und die 3-Wert-Grenzwertanalyse führen zu unterschiedlich vielen Testfällen.",
          "Die Rechenaufgaben aus Kapitel 4 nur lesen statt selbst durchzurechnen. Gerade dort lassen sich Punkte mit Übung sicher holen.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die CTFL-Prüfung?",
        answer:
          "40 Multiple-Choice-Fragen mit je einem Punkt. Zum Bestehen brauchst du 26 Punkte, also 65 %.",
      },
      {
        question: "Wie lange dauert die Prüfung?",
        answer:
          "60 Minuten. Wenn die Prüfung nicht in deiner Muttersprache stattfindet, verlängert sich die Zeit um 25 %.",
      },
      {
        question: "Welcher Lehrplan ist aktuell?",
        answer:
          "Der Lehrplan Foundation Level 4.0, aktuell in der Fassung 4.0.1. Er hat sechs Kapitel, von den Grundlagen des Testens bis zu den Testwerkzeugen.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. Austrian, German und Swiss Testing Board geben einen deutschsprachigen Lehrplan heraus, und lizenzierte Zertifizierungsstellen bieten die Prüfung auch auf Deutsch an. Welche Termine und Sprachen konkret verfügbar sind, erfährst du bei deiner Zertifizierungsstelle.",
      },
      {
        question: "Welches Kapitel ist am wichtigsten?",
        answer:
          "Kapitel 4, Testanalyse und -entwurf, mit 11 von 40 Fragen. Danach folgen Kapitel 5 mit 9 und Kapitel 1 mit 8 Fragen.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach dem veröffentlichten ISTQB-Lehrplan erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "ISTQB CTFL 4.0 Prüfung: Ablauf, Kapitel & Lernplan",
      description:
        "ISTQB Certified Tester Foundation Level 4.0 auf Deutsch vorbereiten: 40 Fragen, 60 Minuten, 65 % zum Bestehen, Gewichtung aller sechs Kapitel und ein Lernplan.",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "istqb-ctfl-4",
    intro:
      "30 eigene Übungsfragen zum ISTQB Certified Tester Foundation Level 4.0 aus allen sechs Kapiteln, mit mehr Fragen zu den stark gewichteten Kapiteln 4 und 5 und mehreren Rechenaufgaben zu den Testverfahren. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-24",
    updated: "2026-11-24",
    seo: {
      title: "ISTQB CTFL 4.0 Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose ISTQB CTFL 4.0 Übungsfragen auf Deutsch: Grundsätze, Teststufen, Reviews, Grenzwertanalyse, Entscheidungstabellen, Risiken, mit Erklärung.",
    },
    questions: [
      /* ── Kapitel 1: Grundlagen des Testens ─────────────────────────────── */
      {
        id: "ctfl-c1-error-defect-failure",
        domain: "d1",
        objective: "Lehrplan 4.0.1, Abschnitt 1.2 Warum ist Testen notwendig?",
        difficulty: "foundation",
        question:
          "Eine Entwicklerin verwechselt unter Zeitdruck zwei Variablen. Dadurch enthält der Code eine falsche Berechnung, und im Betrieb zeigt die Rechnungsübersicht einen zu hohen Betrag. Was ist der zu hohe Betrag in der Rechnungsübersicht?",
        options: [
          { id: "A", text: "Eine Fehlhandlung", rationale: "Die Fehlhandlung ist die menschliche Handlung, hier das Verwechseln der Variablen." },
          { id: "B", text: "Ein Fehlerzustand", rationale: "Der Fehlerzustand ist die falsche Berechnung im Code, nicht das sichtbare Ergebnis bei der Ausführung." },
          { id: "C", text: "Eine Fehlerwirkung", rationale: "Richtig. Die Fehlerwirkung ist die beobachtbare Abweichung vom erwarteten Verhalten bei der Ausführung." },
          { id: "D", text: "Eine Grundursache", rationale: "Die Grundursache ist der tiefere Grund für die Fehlhandlung, hier etwa der Zeitdruck." },
        ],
        answer: "C",
        explanation:
          "Eine Fehlhandlung eines Menschen kann zu einem Fehlerzustand in einem Arbeitsergebnis führen. Wird der fehlerhafte Code ausgeführt, kann sich das als Fehlerwirkung zeigen. Die Grundursache erklärt, warum die Fehlhandlung passiert ist.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c1-principle-pesticide",
        domain: "d1",
        objective: "Lehrplan 4.0.1, Abschnitt 1.3 Grundsätze des Testens",
        difficulty: "foundation",
        question:
          "Ein Team führt seit zwei Jahren dieselbe Regressionstestsuite aus. Sie findet kaum noch neue Fehlerzustände, obwohl Nutzer weiterhin Fehler melden. Welcher Grundsatz des Testens beschreibt diese Lage am besten?",
        options: [
          { id: "A", text: "Fehlerzustände treten gehäuft auf", rationale: "Dieser Grundsatz besagt, dass sich die meisten Fehlerzustände auf wenige Komponenten konzentrieren. Das erklärt nicht, warum dieselben Tests nichts Neues mehr finden." },
          { id: "B", text: "Tests nutzen sich ab", rationale: "Richtig. Werden dieselben Tests immer wieder ausgeführt, finden sie immer weniger neue Fehlerzustände; Tests und Testdaten müssen daher angepasst werden." },
          { id: "C", text: "Frühes Testen spart Zeit und Geld", rationale: "Dieser Grundsatz betrifft den Zeitpunkt des Testens im Lebenszyklus, nicht die nachlassende Wirksamkeit unveränderter Tests." },
          { id: "D", text: "Vollständiges Testen ist nicht möglich", rationale: "Dieser Grundsatz begründet die Priorisierung von Tests, erklärt aber nicht, warum eine unveränderte Suite an Wirkung verliert." },
        ],
        answer: "B",
        explanation:
          "Die sieben Grundsätze sind: Testen zeigt die Anwesenheit von Fehlerzuständen, nicht deren Abwesenheit; vollständiges Testen ist nicht möglich; frühes Testen spart Zeit und Geld; Fehlerzustände treten gehäuft auf; Tests nutzen sich ab; Testen ist kontextabhängig; Trugschluss „keine Fehler“.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c1-absence-of-defects",
        domain: "d1",
        objective: "Lehrplan 4.0.1, Abschnitt 1.3 Grundsätze des Testens",
        difficulty: "intermediate",
        question:
          "Ein neues Kundenportal besteht alle Tests gegen die Spezifikation fehlerfrei. Nach dem Start nutzt kaum jemand das Portal, weil wichtige Abläufe der Kunden fehlen. Welcher Grundsatz wird hier sichtbar?",
        options: [
          { id: "A", text: "Testen ist kontextabhängig", rationale: "Kontextabhängigkeit bedeutet, dass das Testvorgehen vom Umfeld abhängt. Das Problem hier ist ein System, das die Bedürfnisse nicht erfüllt." },
          { id: "B", text: "Testen zeigt die Anwesenheit von Fehlerzuständen", rationale: "Dieser Grundsatz betont, dass Tests keine Fehlerfreiheit beweisen. Hier geht es darum, dass ein korrektes System trotzdem nutzlos sein kann." },
          { id: "C", text: "Tests nutzen sich ab", rationale: "Es geht nicht um nachlassende Wirksamkeit wiederholter Tests." },
          { id: "D", text: "Trugschluss „keine Fehler“", rationale: "Richtig. Ein System, das die Spezifikation erfüllt, ist nicht automatisch erfolgreich; es muss auch die Bedürfnisse der Nutzer treffen, deshalb gehört Validierung dazu." },
        ],
        answer: "D",
        explanation:
          "Der Trugschluss „keine Fehler“ warnt davor, aus erfolgreicher Verifizierung auf den Erfolg des Systems zu schließen. Neben der Verifizierung gegen Anforderungen braucht es Validierung: Erfüllt das System die Bedürfnisse der Nutzer und anderen Stakeholder?",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c1-test-activities",
        domain: "d1",
        objective: "Lehrplan 4.0.1, Abschnitt 1.4 Testaktivitäten, Testmittel und Rollen des Testens",
        difficulty: "intermediate",
        question:
          "Ein Tester prüft die User Stories des nächsten Sprints und leitet daraus ab, was getestet werden soll, zum Beispiel „Rabatt bei Bestellungen ab 100 Euro“. Er erstellt noch keine Testfälle. Welche Testaktivität führt er aus?",
        options: [
          { id: "A", text: "Testanalyse", rationale: "Richtig. In der Testanalyse wird die Testbasis untersucht, um testbare Merkmale zu identifizieren und Testbedingungen festzulegen: Sie beantwortet die Frage „Was soll getestet werden?“." },
          { id: "B", text: "Testentwurf", rationale: "Der Testentwurf macht aus Testbedingungen Testfälle und beantwortet „Wie soll getestet werden?“. Testfälle entstehen hier aber noch nicht." },
          { id: "C", text: "Testrealisierung", rationale: "In der Testrealisierung werden Testmittel für die Durchführung vorbereitet, etwa Testabläufe und Testdaten." },
          { id: "D", text: "Testüberwachung", rationale: "Die Testüberwachung vergleicht den Testfortschritt laufend mit dem Plan." },
        ],
        answer: "A",
        explanation:
          "Der Lehrplan unterscheidet Testplanung, Testüberwachung und Teststeuerung, Testanalyse, Testentwurf, Testrealisierung, Testdurchführung und Testabschluss. Die Testanalyse liefert Testbedingungen; der Testentwurf leitet daraus Testfälle ab.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c1-testware",
        domain: "d1",
        objective: "Lehrplan 4.0.1, Abschnitt 1.4 Testaktivitäten, Testmittel und Rollen des Testens",
        difficulty: "foundation",
        question: "Welches Arbeitsergebnis entsteht typischerweise beim Testabschluss?",
        options: [
          { id: "A", text: "Eine priorisierte Liste von Testbedingungen", rationale: "Testbedingungen sind ein Ergebnis der Testanalyse." },
          { id: "B", text: "Ein Testabschlussbericht mit Lessons Learned und Verbesserungsmaßnahmen", rationale: "Richtig. Der Testabschluss fasst Ergebnisse zusammen, archiviert Testmittel und hält Erkenntnisse für künftige Projekte fest." },
          { id: "C", text: "Testabläufe und Testdaten für die Ausführung", rationale: "Testabläufe und Testdaten entstehen in der Testrealisierung." },
          { id: "D", text: "Ein Testkonzept mit Zielen und Vorgehensweise", rationale: "Das Testkonzept ist ein Ergebnis der Testplanung." },
        ],
        answer: "B",
        explanation:
          "Jede Testaktivität erzeugt eigene Testmittel: Testplanung das Testkonzept, Testanalyse Testbedingungen, Testentwurf Testfälle, Testrealisierung Testabläufe und Testdaten, Testdurchführung Testprotokolle und Fehlerberichte, Testabschluss den Testabschlussbericht.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c1-independence",
        domain: "d1",
        objective: "Lehrplan 4.0.1, Abschnitt 1.5 Wesentliche Kompetenzen und bewährte Praktiken beim Testen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen lässt das Testen vollständig von einem externen, räumlich getrennten Testteam durchführen. Welcher Nachteil ist dabei laut Lehrplan typisch?",
        options: [
          { id: "A", text: "Die Tester übersehen Fehlerzustände, weil sie dieselben Annahmen wie die Entwickler treffen", rationale: "Dieses Risiko ist bei geringer Unabhängigkeit typisch, etwa wenn Entwickler ihren eigenen Code testen." },
          { id: "B", text: "Die Tester erkennen weniger unterschiedliche Fehlerarten", rationale: "Unabhängige Tester erkennen eher andere Fehlerarten, weil sie einen anderen Hintergrund und andere Sichtweisen mitbringen." },
          { id: "C", text: "Das Testteam kann isoliert sein, und Entwickler fühlen sich weniger für Qualität verantwortlich", rationale: "Richtig. Hohe Unabhängigkeit kann zu Isolation, Kommunikationsproblemen und Engpässen führen und die Verantwortung der Entwickler für die Qualität schwächen." },
          { id: "D", text: "Unabhängiges Testen ist laut Lehrplan grundsätzlich unwirksam", rationale: "Der Lehrplan beschreibt Vorteile und Nachteile; unabhängiges Testen ist nicht grundsätzlich unwirksam." },
        ],
        answer: "C",
        explanation:
          "Unabhängigkeit hilft, Fehlerzustände zu finden, die Entwickler wegen eigener Annahmen übersehen. Zu viel Trennung kann aber zu Isolation, Verzögerungen und dem Gefühl führen, Qualität sei allein Sache der Tester.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 2: Testen im Softwareentwicklungslebenszyklus ─────────── */
      {
        id: "ctfl-c2-shift-left",
        domain: "d2",
        objective: "Lehrplan 4.0.1, Abschnitt 2.1 Testen im Kontext eines Softwareentwicklungslebenszyklus",
        difficulty: "foundation",
        question: "Welche Maßnahme ist ein typisches Beispiel für den Shift-Left-Ansatz?",
        options: [
          { id: "A", text: "Die Testabdeckung erst im Abnahmetest messen", rationale: "Das verlagert Aktivitäten nach hinten, nicht nach vorn." },
          { id: "B", text: "Anforderungen aus Testsicht reviewen, bevor mit der Implementierung begonnen wird", rationale: "Richtig. Shift-Left bedeutet, Tests früher im Lebenszyklus anzusetzen, etwa durch Reviews der Spezifikation aus Testsicht." },
          { id: "C", text: "Regressionstests nur vor großen Releases ausführen", rationale: "Das ist eher ein spätes, seltenes Testen und widerspricht der Idee von Shift-Left." },
          { id: "D", text: "Nicht-funktionale Tests auf die Zeit nach der Inbetriebnahme verschieben", rationale: "Shift-Left empfiehlt, auch nicht-funktionale Tests möglichst früh, etwa auf Komponentenebene, zu beginnen." },
        ],
        answer: "B",
        explanation:
          "Beispiele für Shift-Left sind Reviews der Spezifikation aus Testsicht, das Schreiben von Testfällen vor dem Code, kontinuierliche Integration mit schnellem Feedback, statische Analyse vor dynamischen Tests und frühe nicht-funktionale Tests auf Komponentenebene.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c2-test-levels",
        domain: "d2",
        objective: "Lehrplan 4.0.1, Abschnitt 2.2 Teststufen und Testarten",
        difficulty: "intermediate",
        question:
          "Ein Onlineshop wird mit dem externen System eines Zahlungsdienstleisters verbunden. Getestet werden soll, ob Bestellungen korrekt an den Dienstleister übergeben und dessen Antworten richtig verarbeitet werden. Welche Teststufe passt?",
        options: [
          { id: "A", text: "Komponententest", rationale: "Der Komponententest prüft einzelne Komponenten isoliert, nicht das Zusammenspiel mit externen Systemen." },
          { id: "B", text: "Komponentenintegrationstest", rationale: "Dieser Test prüft Schnittstellen zwischen Komponenten innerhalb des Systems, nicht zu externen Systemen." },
          { id: "C", text: "Systemintegrationstest", rationale: "Richtig. Der Systemintegrationstest prüft die Schnittstellen zu anderen Systemen und externen Diensten." },
          { id: "D", text: "Abnahmetest", rationale: "Der Abnahmetest prüft die Eignung für den Einsatz aus Sicht der Nutzer oder Betreiber, nicht gezielt die Schnittstelle zu einem Fremdsystem." },
        ],
        answer: "C",
        explanation:
          "Die Teststufen sind Komponententest, Komponentenintegrationstest, Systemtest, Systemintegrationstest und Abnahmetest. Der Systemintegrationstest konzentriert sich auf das Zusammenspiel mit anderen Systemen und externen Diensten.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c2-confirmation-regression",
        domain: "d2",
        objective: "Lehrplan 4.0.1, Abschnitt 2.2 Teststufen und Testarten",
        difficulty: "foundation",
        question:
          "Ein gemeldeter Fehlerzustand in der Suchfunktion wurde behoben. Das Team führt den fehlgeschlagenen Test erneut aus und prüft zusätzlich, ob Filter und Sortierung weiterhin funktionieren. Wie heißen die beiden Testarten?",
        options: [
          { id: "A", text: "Erst Fehlernachtest, dann Regressionstest", rationale: "Richtig. Der Fehlernachtest bestätigt die Behebung, der Regressionstest prüft, ob die Änderung unerwünschte Auswirkungen an anderer Stelle hat." },
          { id: "B", text: "Erst Regressionstest, dann Fehlernachtest", rationale: "Die Zuordnung ist vertauscht: Das erneute Ausführen des fehlgeschlagenen Tests ist der Fehlernachtest." },
          { id: "C", text: "Beides sind Wartungstests", rationale: "Wartungstests beziehen sich auf Änderungen an einem System im Betrieb; die Frage zielt auf die Unterscheidung von Fehlernachtest und Regressionstest." },
          { id: "D", text: "Beides sind Abnahmetests", rationale: "Abnahmetest ist eine Teststufe, keine Bezeichnung für diese beiden änderungsbezogenen Tests." },
        ],
        answer: "A",
        explanation:
          "Fehlernachtests bestätigen, dass ein Fehlerzustand behoben ist. Regressionstests prüfen, ob eine Änderung, auch eine Fehlerbehebung, an anderer Stelle Fehlerwirkungen verursacht hat. Regressionstests eignen sich gut zur Automatisierung.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c2-maintenance",
        domain: "d2",
        objective: "Lehrplan 4.0.1, Abschnitt 2.3 Wartungstest",
        difficulty: "intermediate",
        question: "Welche Situation ist laut Lehrplan ein Auslöser für einen Wartungstest?",
        options: [
          { id: "A", text: "Das Team schreibt die ersten User Stories für ein neues Produkt", rationale: "Das betrifft eine Neuentwicklung; Wartungstests beziehen sich auf Systeme im Betrieb." },
          { id: "B", text: "Ein Entwickler schreibt Unit-Tests für eine neue Klasse vor der ersten Auslieferung", rationale: "Das ist Komponententest in der Entwicklung, kein Wartungstest." },
          { id: "C", text: "Ein Kunde unterschreibt den Vertrag für ein neues System", rationale: "Ein Vertragsabschluss löst keine Wartungstests aus." },
          { id: "D", text: "Ein Altsystem im Betrieb wird stillgelegt und seine Daten werden archiviert", rationale: "Richtig. Neben Änderungen und Migrationen ist auch die Außerbetriebnahme ein Auslöser; dann kann etwa die Datenarchivierung zu testen sein." },
        ],
        answer: "D",
        explanation:
          "Auslöser für Wartungstests sind Änderungen wie Erweiterungen, Korrekturen oder Patches, ein Umzug in eine andere Betriebsumgebung oder Migration von Daten sowie die Außerbetriebnahme eines Systems.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c2-atdd",
        domain: "d2",
        objective: "Lehrplan 4.0.1, Abschnitt 2.1 Testen im Kontext eines Softwareentwicklungslebenszyklus",
        difficulty: "intermediate",
        question:
          "Vor der Umsetzung einer User Story formulieren Product Owner, Entwickler und Tester gemeinsam Tests aus den Akzeptanzkriterien, die anschließend als Grundlage für die Implementierung dienen. Welcher Ansatz ist das?",
        options: [
          { id: "A", text: "Testgetriebene Entwicklung (TDD)", rationale: "TDD steuert das Codieren über Komponententests, die der Entwickler vor dem Code schreibt, nicht über gemeinsam formulierte Akzeptanztests." },
          { id: "B", text: "Abnahmetestgetriebene Entwicklung (ATDD)", rationale: "Richtig. Bei ATDD leiten die Beteiligten Tests aus Akzeptanzkriterien ab, bevor die Story umgesetzt wird." },
          { id: "C", text: "Explorativer Test", rationale: "Explorative Tests werden während der Durchführung entworfen, nicht vorab aus Akzeptanzkriterien." },
          { id: "D", text: "Wartungstest", rationale: "Wartungstests betreffen Änderungen an Systemen im Betrieb." },
        ],
        answer: "B",
        explanation:
          "TDD, ATDD und BDD sind testgetriebene Ansätze: Tests werden vor dem Code definiert. TDD arbeitet mit Komponententests, ATDD mit Akzeptanztests aus den Akzeptanzkriterien, BDD mit Beispielen im Format Given/When/Then.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 3: Statischer Test ───────────────────────────────────── */
      {
        id: "ctfl-c3-static-benefit",
        domain: "d3",
        objective: "Lehrplan 4.0.1, Abschnitt 3.1 Grundlagen des statischen Tests",
        difficulty: "foundation",
        question: "Welcher Nutzen ist typisch für den statischen Test im Vergleich zum dynamischen Test?",
        options: [
          { id: "A", text: "Er findet Fehlerzustände, bevor Code ausgeführt wird, etwa Widersprüche in Anforderungen", rationale: "Richtig. Statische Tests finden Fehlerzustände direkt in Arbeitsergebnissen und können früh im Lebenszyklus angewendet werden." },
          { id: "B", text: "Er misst das Laufzeitverhalten, zum Beispiel die Antwortzeit", rationale: "Laufzeitverhalten lässt sich nur durch Ausführung, also dynamisch, messen." },
          { id: "C", text: "Er macht dynamische Tests überflüssig", rationale: "Statische und dynamische Tests ergänzen sich; sie finden unterschiedliche Arten von Fehlerzuständen." },
          { id: "D", text: "Er findet ausschließlich Fehlerwirkungen", rationale: "Statische Tests finden Fehlerzustände direkt, ohne dass es zu Fehlerwirkungen kommen muss." },
        ],
        answer: "A",
        explanation:
          "Statischer Test prüft Arbeitsergebnisse ohne Ausführung, durch Reviews oder statische Analyse. Er findet Fehlerzustände früh und damit oft günstiger, auch solche, die dynamisch schwer zu finden sind, etwa unerreichbaren Code oder Mehrdeutigkeiten in Anforderungen.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c3-review-roles",
        domain: "d3",
        objective: "Lehrplan 4.0.1, Abschnitt 3.2 Feedback- und Reviewprozess",
        difficulty: "intermediate",
        question:
          "In einem Review sorgt eine Person dafür, dass die Sitzungen effektiv ablaufen, vermittelt bei Meinungsverschiedenheiten und achtet darauf, dass sich alle frei äußern können. Welche Rolle hat sie?",
        options: [
          { id: "A", text: "Autor", rationale: "Der Autor erstellt das Arbeitsergebnis und behebt die gefundenen Fehlerzustände." },
          { id: "B", text: "Protokollant", rationale: "Der Protokollant sammelt Anomalien und hält Informationen und Entscheidungen fest." },
          { id: "C", text: "Manager", rationale: "Der Manager entscheidet, was reviewt wird, und stellt Personal und Zeit bereit." },
          { id: "D", text: "Moderator", rationale: "Richtig. Der Moderator sorgt für einen effektiven Ablauf der Reviewsitzungen, vermittelt und schafft ein sicheres Umfeld." },
        ],
        answer: "D",
        explanation:
          "Die Rollen bei Reviews sind Manager, Autor, Moderator, Protokollant, Gutachter und Review-Leiter. Der Review-Leiter trägt die Gesamtverantwortung für das Review; der Moderator kümmert sich um den Ablauf der Sitzungen.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c3-review-types",
        domain: "d3",
        objective: "Lehrplan 4.0.1, Abschnitt 3.2 Feedback- und Reviewprozess",
        difficulty: "intermediate",
        question:
          "Ein Team plant ein Review mit festgelegtem Prozess, definierten Rollen und Eingangs- und Endekriterien. Es sollen möglichst viele Anomalien gefunden und Metriken zur Verbesserung des Prozesses gesammelt werden. Welche Reviewart passt am besten?",
        options: [
          { id: "A", text: "Inspektion", rationale: "Richtig. Die Inspektion ist die formalste Reviewart mit generischem Prozess, Metriken und dem Ziel, möglichst viele Anomalien zu finden." },
          { id: "B", text: "Informelles Review", rationale: "Informelle Reviews folgen keinem definierten Prozess und erfordern kein formales Ergebnis." },
          { id: "C", text: "Walkthrough", rationale: "Ein Walkthrough wird vom Autor geleitet und dient vor allem Wissensaustausch und Konsens; Metriken sind nicht typisch." },
          { id: "D", text: "Technisches Review", rationale: "Technische Reviews dienen vor allem dem Konsens und technischen Entscheidungen; die umfassende Metrikerhebung ist für die Inspektion typisch." },
        ],
        answer: "A",
        explanation:
          "Der Lehrplan nennt informelles Review, Walkthrough, technisches Review und Inspektion. Die Inspektion ist am formalsten: Sie folgt dem vollständigen generischen Prozess, sammelt Metriken und schließt aus, dass der Autor als Review-Leiter oder Protokollant auftritt.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 4: Testanalyse und -entwurf ──────────────────────────── */
      {
        id: "ctfl-c4-ep",
        domain: "d4",
        objective: "Lehrplan 4.0.1, Abschnitt 4.2 Black-Box-Testverfahren (Äquivalenzklassenbildung)",
        difficulty: "intermediate",
        question:
          "Ein Feld für das Alter akzeptiert ganze Zahlen. Unter 18 Jahren wird die Anmeldung abgelehnt, von 18 bis 64 gilt der Normaltarif, ab 65 der Seniorentarif. Wie viele Testfälle braucht man mindestens, um 100 % Äquivalenzklassenüberdeckung der gültigen und ungültigen Klassen zu erreichen, wenn negative Zahlen eine eigene ungültige Klasse bilden?",
        options: [
          { id: "A", text: "3", rationale: "Drei Testfälle decken nur 0 bis 17, 18 bis 64 und ab 65 ab; die Klasse der negativen Zahlen bliebe ungetestet." },
          { id: "B", text: "4", rationale: "Richtig. Es gibt vier Klassen: negative Zahlen, 0 bis 17, 18 bis 64 und ab 65. Je ein Testfall pro Klasse genügt." },
          { id: "C", text: "6", rationale: "Sechs Testfälle wären nötig, wenn man zusätzlich Grenzwerte testen würde; das verlangt die Äquivalenzklassenüberdeckung nicht." },
          { id: "D", text: "2", rationale: "Zwei Testfälle können vier Klassen nicht abdecken, da jeder Wert nur zu einer Klasse gehört." },
        ],
        answer: "B",
        explanation:
          "Für 100 % Äquivalenzklassenüberdeckung muss jede Klasse durch mindestens einen Testfall abgedeckt sein. Da jeder Wert genau einer Klasse angehört, entspricht die Mindestzahl der Anzahl der Klassen, hier vier.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c4-bva",
        domain: "d4",
        objective: "Lehrplan 4.0.1, Abschnitt 4.2 Black-Box-Testverfahren (Grenzwertanalyse)",
        difficulty: "intermediate",
        question:
          "Ein Gutscheinfeld akzeptiert Beträge von 10 bis 50 Euro in ganzen Euro. Welche Testwerte ergeben sich bei der 2-Wert-Grenzwertanalyse für diesen Bereich?",
        options: [
          { id: "A", text: "10 und 50", rationale: "Das sind nur die Grenzwerte der gültigen Klasse; die angrenzenden Werte der ungültigen Klassen fehlen." },
          { id: "B", text: "9, 10, 11, 49, 50, 51", rationale: "Das wäre die 3-Wert-Grenzwertanalyse mit je einem Wert auf und beidseits jeder Grenze." },
          { id: "C", text: "9, 10, 50, 51", rationale: "Richtig. Bei der 2-Wert-Variante testet man jeden Grenzwert und seinen nächstgelegenen Nachbarn in der angrenzenden Klasse." },
          { id: "D", text: "0, 10, 50, 100", rationale: "0 und 100 sind keine Nachbarn der Grenzen und damit keine Grenzwerte im Sinne des Verfahrens." },
        ],
        answer: "C",
        explanation:
          "Bei der 2-Wert-Grenzwertanalyse werden pro Grenze zwei Werte getestet: der Grenzwert und der nächstgelegene Wert der benachbarten Klasse. Bei der 3-Wert-Variante kommt der Nachbar auf der anderen Seite des Grenzwerts hinzu.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c4-decision-table",
        domain: "d4",
        objective: "Lehrplan 4.0.1, Abschnitt 4.2 Black-Box-Testverfahren (Entscheidungstabellentest)",
        difficulty: "intermediate",
        question:
          "Eine Versandregel hängt von drei voneinander unabhängigen Bedingungen ab, die jeweils wahr oder falsch sein können: Premiumkunde, Bestellwert über 50 Euro, Lieferung ins Inland. Wie viele Spalten hat die vollständige Entscheidungstabelle vor einer Vereinfachung?",
        options: [
          { id: "A", text: "3", rationale: "3 ist die Zahl der Bedingungen, nicht die Zahl der Kombinationen." },
          { id: "B", text: "6", rationale: "6 ergibt sich aus 3 mal 2; die Kombinationen multiplizieren sich aber: 2 hoch 3." },
          { id: "C", text: "9", rationale: "9 wäre 3 hoch 2; richtig ist 2 hoch 3." },
          { id: "D", text: "8", rationale: "Richtig. Drei Bedingungen mit je zwei Werten ergeben 2 × 2 × 2 = 8 Kombinationen, also 8 Spalten." },
        ],
        answer: "D",
        explanation:
          "Eine vollständige Entscheidungstabelle enthält jede Kombination der Bedingungen. Bei n binären Bedingungen sind das 2 hoch n Spalten. Unmögliche Kombinationen können gestrichen und Spalten ohne Einfluss zusammengefasst werden.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c4-state-transition",
        domain: "d4",
        objective: "Lehrplan 4.0.1, Abschnitt 4.2 Black-Box-Testverfahren (Zustandsübergangstest)",
        difficulty: "advanced",
        question:
          "Ein Konto hat die Zustände Aktiv, Gesperrt und Geschlossen. Gültige Übergänge: Aktiv → Gesperrt (drei Fehlversuche), Gesperrt → Aktiv (Entsperren), Aktiv → Geschlossen (Kündigen), Gesperrt → Geschlossen (Kündigen). Jeder Testfall startet im Zustand Aktiv. Wie viele Testfälle braucht man mindestens, um alle gültigen Übergänge abzudecken?",
        options: [
          { id: "A", text: "1", rationale: "Ein Testfall endet beim ersten Übergang nach Geschlossen; da Geschlossen keine ausgehenden Übergänge hat, können nicht beide Kündigungsübergänge in einem Testfall liegen." },
          { id: "B", text: "2", rationale: "Richtig. Zum Beispiel: Aktiv → Gesperrt → Aktiv → Geschlossen, und Aktiv → Gesperrt → Geschlossen. Damit sind alle vier Übergänge abgedeckt." },
          { id: "C", text: "3", rationale: "Drei Testfälle sind möglich, aber nicht das Minimum." },
          { id: "D", text: "4", rationale: "Ein Testfall pro Übergang ist unnötig, weil sich mehrere Übergänge in einem Testfall verketten lassen." },
        ],
        answer: "B",
        explanation:
          "Für 100 % Abdeckung gültiger Übergänge muss jeder gültige Übergang mindestens einmal ausgeführt werden. Weil Geschlossen ein Endzustand ist, braucht man für die beiden Kündigungsübergänge zwei Testfälle; die übrigen Übergänge lassen sich davor einbauen.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c4-branch-statement",
        domain: "d4",
        objective: "Lehrplan 4.0.1, Abschnitt 4.3 White-Box-Testverfahren",
        difficulty: "intermediate",
        question: "Ein Testsatz erreicht 100 % Zweigüberdeckung. Was folgt daraus für die Anweisungsüberdeckung?",
        options: [
          { id: "A", text: "Sie beträgt ebenfalls 100 %", rationale: "Richtig. Wer jeden Zweig ausführt, führt dabei jede Anweisung aus; 100 % Zweigüberdeckung schließt 100 % Anweisungsüberdeckung ein." },
          { id: "B", text: "Sie kann beliebig niedrig sein", rationale: "Das gilt umgekehrt: 100 % Anweisungsüberdeckung garantiert keine 100 % Zweigüberdeckung." },
          { id: "C", text: "Sie beträgt mindestens 50 %", rationale: "Die Folgerung ist stärker: Es sind immer 100 %." },
          { id: "D", text: "Darüber lässt sich keine Aussage treffen", rationale: "Doch: Zweigüberdeckung subsumiert Anweisungsüberdeckung." },
        ],
        answer: "A",
        explanation:
          "Zweigüberdeckung ist stärker als Anweisungsüberdeckung. Eine if-Anweisung ohne else-Teil zeigt den Unterschied: Ein Testfall mit wahrer Bedingung erreicht alle Anweisungen, aber nicht den Zweig für die falsche Bedingung.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c4-statement-count",
        domain: "d4",
        objective: "Lehrplan 4.0.1, Abschnitt 4.3 White-Box-Testverfahren",
        difficulty: "advanced",
        question:
          "Gegeben ist folgender Ablauf: Wenn der Warenkorb leer ist, wird eine Meldung angezeigt. Andernfalls wird der Gesamtpreis berechnet, und wenn der Gesamtpreis über 100 Euro liegt, wird zusätzlich ein Rabatt abgezogen. Wie viele Testfälle braucht man mindestens für 100 % Anweisungsüberdeckung?",
        options: [
          { id: "A", text: "1", rationale: "Ein einziger Testfall kann nicht sowohl die Meldung bei leerem Warenkorb als auch die Rabattberechnung ausführen." },
          { id: "B", text: "3", rationale: "Drei Testfälle wären nötig, um auch den Zweig ohne Rabatt abzudecken; für Anweisungsüberdeckung ist das nicht erforderlich." },
          { id: "C", text: "2", rationale: "Richtig. Ein Testfall mit leerem Warenkorb führt die Meldung aus, ein Testfall mit über 100 Euro führt Preisberechnung und Rabatt aus." },
          { id: "D", text: "4", rationale: "Vier Testfälle sind mehr als nötig; jede Anweisung muss nur einmal ausgeführt werden." },
        ],
        answer: "C",
        explanation:
          "Für Anweisungsüberdeckung zählt, dass jede ausführbare Anweisung mindestens einmal durchlaufen wird. Der Fall „nicht leer, aber unter 100 Euro“ enthält keine eigene Anweisung und wird erst für die Zweigüberdeckung gebraucht.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c4-experience",
        domain: "d4",
        objective: "Lehrplan 4.0.1, Abschnitt 4.4 Erfahrungsbasierte Testverfahren",
        difficulty: "intermediate",
        question:
          "Die Spezifikation einer neuen App ist lückenhaft, und die Zeit ist knapp. Eine erfahrene Testerin entwirft, führt aus und bewertet Tests gleichzeitig und lernt dabei laufend über das Testobjekt hinzu, gesteuert durch eine zeitlich begrenzte Test-Charta. Welches Verfahren wendet sie an?",
        options: [
          { id: "A", text: "Checklistenbasierter Test", rationale: "Dabei werden Tests aus einer vorhandenen Checkliste abgeleitet; das gleichzeitige Entwerfen und Lernen ist typisch für exploratives Testen." },
          { id: "B", text: "Explorativer Test", rationale: "Richtig. Beim explorativen Test werden Tests gleichzeitig entworfen, durchgeführt und bewertet, oft sitzungsbasiert mit Test-Charta." },
          { id: "C", text: "Entscheidungstabellentest", rationale: "Das ist ein Black-Box-Verfahren, das eine vorhandene Logik systematisch auswertet." },
          { id: "D", text: "Zweigtest", rationale: "Das ist ein White-Box-Verfahren auf Basis des Codes." },
        ],
        answer: "B",
        explanation:
          "Erfahrungsbasierte Verfahren sind intuitive Testfallermittlung, explorativer Test und checklistenbasierter Test. Explorativer Test eignet sich besonders bei unvollständiger Spezifikation oder Zeitdruck und ergänzt systematische Verfahren.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c4-acceptance-criteria",
        domain: "d4",
        objective: "Lehrplan 4.0.1, Abschnitt 4.5 Auf Zusammenarbeit basierende Testansätze",
        difficulty: "intermediate",
        question: "Welches Format eignet sich laut Lehrplan zum Schreiben von Akzeptanzkriterien für eine User Story?",
        options: [
          { id: "A", text: "Ein Kontrollflussgraph des Codes", rationale: "Kontrollflussgraphen dienen dem White-Box-Test, nicht dem Formulieren von Akzeptanzkriterien." },
          { id: "B", text: "Eine Liste der Teststufen", rationale: "Teststufen beschreiben, wo getestet wird, nicht, wann eine Story erfüllt ist." },
          { id: "C", text: "Szenarioorientiert im Format Given/When/Then", rationale: "Richtig. Neben regelorientierten Formaten wie Aufzählungen oder Ein-/Ausgabetabellen sind szenarioorientierte Formate wie Given/When/Then üblich." },
          { id: "D", text: "Ein Fehlerbericht", rationale: "Ein Fehlerbericht dokumentiert Anomalien, keine Akzeptanzkriterien." },
        ],
        answer: "C",
        explanation:
          "Akzeptanzkriterien legen fest, wann eine User Story aus Sicht der Stakeholder erfüllt ist. Der Lehrplan nennt szenarioorientierte Formate wie Given/When/Then und regelorientierte Formate wie Aufzählungen oder Tabellen mit Ein- und Ausgaben.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 5: Management der Testaktivitäten ────────────────────── */
      {
        id: "ctfl-c5-entry-exit",
        domain: "d5",
        objective: "Lehrplan 4.0.1, Abschnitt 5.1 Testplanung",
        difficulty: "foundation",
        question: "Welche Aussage ist ein typisches Endekriterium?",
        options: [
          { id: "A", text: "Die Testumgebung ist verfügbar", rationale: "Die Verfügbarkeit der Testumgebung ist ein typisches Eingangskriterium." },
          { id: "B", text: "Die Testbasis liegt in testbarer Form vor", rationale: "Auch das ist eine Voraussetzung für den Teststart, also ein Eingangskriterium." },
          { id: "C", text: "Die Tester haben die nötige Schulung erhalten", rationale: "Verfügbare und qualifizierte Ressourcen sind ein Eingangskriterium." },
          { id: "D", text: "Die geplante Abdeckung ist erreicht und keine kritischen Fehlerzustände sind offen", rationale: "Richtig. Endekriterien beschreiben, wann eine Testaktivität als abgeschlossen gilt, etwa über Abdeckung und verbleibende Fehlerzustände." },
        ],
        answer: "D",
        explanation:
          "Eingangskriterien legen die Voraussetzungen für den Start einer Aktivität fest, Endekriterien die Bedingungen für ihren Abschluss. In agilen Teams heißen sie oft Definition of Ready und Definition of Done.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c5-three-point",
        domain: "d5",
        objective: "Lehrplan 4.0.1, Abschnitt 5.1 Testplanung (Schätzverfahren)",
        difficulty: "advanced",
        question:
          "Für eine Testaktivität schätzt das Team optimistisch 4 Tage, am wahrscheinlichsten 7 Tage und pessimistisch 16 Tage. Welcher Erwartungswert ergibt sich nach der Drei-Punkt-Schätzung?",
        options: [
          { id: "A", text: "7 Tage", rationale: "Das ist nur der wahrscheinlichste Wert; die Drei-Punkt-Schätzung gewichtet alle drei Werte." },
          { id: "B", text: "8 Tage", rationale: "Richtig. E = (a + 4m + b) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8." },
          { id: "C", text: "9 Tage", rationale: "9 ergibt sich aus dem einfachen Mittelwert (4 + 7 + 16) / 3, nicht aus der gewichteten Formel." },
          { id: "D", text: "10 Tage", rationale: "10 ist das arithmetische Mittel aus optimistischem und pessimistischem Wert; der wahrscheinlichste Wert fehlt." },
        ],
        answer: "B",
        explanation:
          "Bei der Drei-Punkt-Schätzung gilt E = (a + 4m + b) / 6, mit a optimistisch, m wahrscheinlichst und b pessimistisch. Die Standardabweichung schätzt man mit (b − a) / 6, hier also 2 Tage.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c5-quadrants",
        domain: "d5",
        objective: "Lehrplan 4.0.1, Abschnitt 5.1 Testplanung (Testquadranten)",
        difficulty: "intermediate",
        question:
          "Ein agiles Team ordnet seine Tests den Testquadranten zu. In welchen Quadranten gehören Last- und Sicherheitstests, die technologieorientiert sind und das Produkt kritisch hinterfragen?",
        options: [
          { id: "A", text: "Q1", rationale: "Q1 ist technologieorientiert und unterstützt das Team, etwa mit Komponententests." },
          { id: "B", text: "Q2", rationale: "Q2 ist geschäftsorientiert und unterstützt das Team, etwa mit funktionalen Tests und Beispielen." },
          { id: "C", text: "Q3", rationale: "Q3 ist geschäftsorientiert und kritisiert das Produkt, etwa mit explorativen Tests und Benutzbarkeitstests." },
          { id: "D", text: "Q4", rationale: "Richtig. Q4 ist technologieorientiert und kritisiert das Produkt; typisch sind nicht-funktionale Tests wie Last-, Performance- und Sicherheitstests." },
        ],
        answer: "D",
        explanation:
          "Die Testquadranten ordnen Tests nach zwei Achsen: geschäfts- oder technologieorientiert und teamunterstützend oder produktkritisierend. Sie helfen, alle nötigen Testarten und Teststufen einzuplanen und mit Stakeholdern zu besprechen.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c5-risk-level",
        domain: "d5",
        objective: "Lehrplan 4.0.1, Abschnitt 5.2 Risikomanagement",
        difficulty: "intermediate",
        question:
          "Vier Produktrisiken werden auf einer Skala von 1 bis 5 bewertet. Welches Risiko hat die höchste Risikostufe, wenn sie als Produkt aus Eintrittswahrscheinlichkeit und Schadensausmaß berechnet wird?",
        options: [
          { id: "A", text: "Wahrscheinlichkeit 5, Schaden 1", rationale: "5 × 1 = 5." },
          { id: "B", text: "Wahrscheinlichkeit 2, Schaden 5", rationale: "2 × 5 = 10." },
          { id: "C", text: "Wahrscheinlichkeit 3, Schaden 4", rationale: "Richtig. 3 × 4 = 12 ist der höchste Wert." },
          { id: "D", text: "Wahrscheinlichkeit 4, Schaden 2", rationale: "4 × 2 = 8." },
        ],
        answer: "C",
        explanation:
          "Die Risikostufe ergibt sich aus Eintrittswahrscheinlichkeit und Schadensausmaß, quantitativ oft als Produkt. Beim risikobasierten Testen bestimmt sie, welche Bereiche zuerst und wie gründlich getestet werden.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c5-project-vs-product",
        domain: "d5",
        objective: "Lehrplan 4.0.1, Abschnitt 5.2 Risikomanagement",
        difficulty: "foundation",
        question: "Welches der folgenden Risiken ist ein Projektrisiko und kein Produktrisiko?",
        options: [
          { id: "A", text: "Die Berechnung der Zinsen könnte bei hohen Beträgen falsch sein", rationale: "Das betrifft die Qualität des Produkts und ist damit ein Produktrisiko." },
          { id: "B", text: "Der einzige Experte für die Testumgebung könnte das Projekt verlassen", rationale: "Richtig. Personal, Zeitplan, Budget und Lieferanten betreffen das Projekt; das ist ein Projektrisiko." },
          { id: "C", text: "Die App könnte bei vielen gleichzeitigen Nutzern zu langsam reagieren", rationale: "Mangelhafte Performance ist ein Qualitätsmerkmal des Produkts, also ein Produktrisiko." },
          { id: "D", text: "Persönliche Daten könnten unverschlüsselt gespeichert werden", rationale: "Eine Sicherheitslücke im Produkt ist ein Produktrisiko." },
        ],
        answer: "B",
        explanation:
          "Projektrisiken betreffen Management und Steuerung des Projekts, etwa Organisation, Personal, Technik und Lieferanten. Produktrisiken betreffen die Qualitätsmerkmale des Produkts, etwa fehlende Funktionen, falsche Berechnungen oder schlechte Performance.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c5-defect-report",
        domain: "d5",
        objective: "Lehrplan 4.0.1, Abschnitt 5.5 Fehlermanagement",
        difficulty: "intermediate",
        question: "Welche Angabe ist für einen guten Fehlerbericht besonders wichtig, damit Entwickler die Fehlerwirkung nachvollziehen können?",
        options: [
          { id: "A", text: "Die Schritte zur Reproduktion mit Testumgebung, erwartetem und tatsächlichem Ergebnis", rationale: "Richtig. Ohne reproduzierbare Schritte, Umgebung und den Vergleich von erwartetem und tatsächlichem Ergebnis lässt sich eine Fehlerwirkung kaum analysieren." },
          { id: "B", text: "Eine Einschätzung, welcher Entwickler den Fehler verursacht hat", rationale: "Schuldzuweisungen gehören nicht in einen Fehlerbericht; er soll sachlich informieren." },
          { id: "C", text: "Die vollständige Testsuite als Anhang", rationale: "Relevant sind die konkreten Testfälle und Belege, nicht die gesamte Suite." },
          { id: "D", text: "Eine Liste aller anderen offenen Fehlerberichte", rationale: "Querverweise können hilfreich sein, ersetzen aber nicht die Beschreibung der Fehlerwirkung." },
        ],
        answer: "A",
        explanation:
          "Ein Fehlerbericht enthält unter anderem eine eindeutige Kennung, Titel und Zusammenfassung, Datum und Ersteller, Testobjekt und Testumgebung, Kontext, die Schritte zur Reproduktion, erwartete und tatsächliche Ergebnisse, Schweregrad und Priorität sowie den Status.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 6: Testwerkzeuge ─────────────────────────────────────── */
      {
        id: "ctfl-c6-automation-risk",
        domain: "d6",
        objective: "Lehrplan 4.0.1, Abschnitt 6.2 Nutzen und Risiken der Testautomatisierung",
        difficulty: "foundation",
        question: "Welches der folgenden Risiken wird im Zusammenhang mit Testautomatisierung typischerweise genannt?",
        options: [
          { id: "A", text: "Regressionstests laufen schneller und wiederholbarer", rationale: "Das ist ein Vorteil der Automatisierung, kein Risiko." },
          { id: "B", text: "Testergebnisse werden objektiver bewertet", rationale: "Auch das ist ein Vorteil." },
          { id: "C", text: "Unrealistische Erwartungen an das Werkzeug und unterschätzter Aufwand für Einführung und Wartung", rationale: "Richtig. Zu den Risiken gehören unrealistische Erwartungen, ungenaue Schätzungen von Zeit und Kosten sowie die Abhängigkeit vom Werkzeuganbieter." },
          { id: "D", text: "Testberichte stehen schneller zur Verfügung", rationale: "Schnelleres Feedback ist ein Vorteil der Automatisierung." },
        ],
        answer: "C",
        explanation:
          "Vorteile sind unter anderem weniger manuelle Wiederholungsarbeit, mehr Konsistenz und schnelleres Feedback. Risiken sind unrealistische Erwartungen, ungenaue Schätzungen für Einführung und Wartung, ein Werkzeug als Selbstzweck, Abhängigkeit vom Anbieter und zu viel Vertrauen in das Werkzeug.",
        reference: SYLLABUS,
      },
      {
        id: "ctfl-c6-tool-types",
        domain: "d6",
        objective: "Lehrplan 4.0.1, Abschnitt 6.1 Werkzeugunterstützung für das Testen",
        difficulty: "foundation",
        question: "Ein Team möchte Code automatisch auf Verstöße gegen Programmierrichtlinien und auf mögliche Nullzeiger untersuchen, ohne ihn auszuführen. Welche Art von Werkzeug eignet sich?",
        options: [
          { id: "A", text: "Ein Werkzeug für den statischen Test", rationale: "Richtig. Werkzeuge für statische Analyse prüfen Code ohne Ausführung, etwa auf Richtlinienverstöße und Anomalien im Datenfluss." },
          { id: "B", text: "Ein Werkzeug für nicht-funktionale Tests", rationale: "Diese Werkzeuge messen zum Beispiel Last oder Performance und erfordern die Ausführung." },
          { id: "C", text: "Ein Werkzeug für das Testmanagement", rationale: "Testmanagementwerkzeuge verwalten Anforderungen, Tests, Fehler und Berichte, analysieren aber keinen Code." },
          { id: "D", text: "Ein Werkzeug für die Testdurchführung", rationale: "Diese Werkzeuge führen Tests aus; hier soll der Code gerade nicht ausgeführt werden." },
        ],
        answer: "A",
        explanation:
          "Der Lehrplan nennt unter anderem Werkzeuge für Testmanagement, statischen Test, Testentwurf und -realisierung, Testdurchführung und Überdeckungsmessung, nicht-funktionale Tests, DevOps sowie Zusammenarbeit.",
        reference: SYLLABUS,
      },
    ],
  },
};

