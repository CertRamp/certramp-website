import type { DeContent } from "@/config/types";

/**
 * German edition of the IPMA Level D guide and free practice questions.
 * Faithful translation of the verified English content in
 * src/content/guides/ipma-level-d.ts and src/content/practice-questions/ipma-level-d.ts,
 * using the element names of the German ICB4 (GPM, "Individual Competence
 * Baseline für Projektmanagement", Version 4.0) and PM-ZERT terminology.
 * ORIGINAL CertRamp questions — not real exam questions.
 */
const ICB4 = {
  label: "PM-ZERT (GPM): General Guide für IPMA Level D–A, ICB4-Kompetenzelemente (PDF)",
  url: "https://www.gpm-ipma.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Z01_PM_General_Guide_ICB4.pdf",
};

export const ipmaLevelDDe: DeContent = {
  slug: "ipma-level-d",
  name: "IPMA Level D (ICB4)",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten, bei PM-ZERT ist Deutsch die Standardsprache, Englisch ist ebenfalls möglich.",
  facts: [
    { label: "Prüfungsanbieter", value: "IPMA / PM-ZERT (GPM)" },
    {
      label: "Format",
      value:
        "Deutschland (PM-ZERT): Pfad 1: eine 90-minütige schriftliche Prüfung plus ein Report von bis zu 25 Seiten (plus bis zu 15 Seiten Anhang) und ein Feedbackgespräch von bis zu 20 Minuten; Pfad 2: zwei 90-minütige schriftliche Prüfungen. Der Pfad kann nach der Zulassung nicht mehr gewechselt werden.",
    },
    {
      label: "Dauer",
      value:
        "Deutschland (PM-ZERT): zwei schriftliche Prüfungen von je 90 Minuten oder eine 90-minütige schriftliche Prüfung plus Report",
    },
    {
      label: "Bestehensgrenze",
      value: "Deutschland (PM-ZERT): 23 als erfüllt bewertete Kompetenzelemente über alle Prüfungsteile",
    },
    { label: "Prüfungssprachen", value: "Deutsch, Englisch" },
    {
      label: "Durchführung",
      value: "Deutschland (PM-ZERT): in Präsenz oder online per Videokonferenz (Zoom oder Teams)",
    },
    {
      label: "Voraussetzungen",
      value:
        "Keine: weder Projektmanagementerfahrung noch Berufsausbildung erforderlich (PM-ZERT). Das Zertifikat ist fünf Jahre gültig; Rezertifizierung mit mindestens 175 Stunden Weiterbildung.",
    },
    {
      label: "Prüfungsversion",
      value:
        "IPMA Individual Competence Baseline ICB4; PM-ZERT-Leitfaden Level D, Version 24 (gültig ab 1. August 2026)",
    },
  ],
  domains: [
    {
      id: "d1",
      name: "Kontext-Kompetenzen (Perspective)",
      objectives: [
        "4.3.1 Strategie",
        "4.3.2 Governance, Strukturen und Prozesse",
        "4.3.3 Compliance, Standards und Regularien",
        "4.3.4 Macht und Interessen",
        "4.3.5 Kultur und Werte",
      ],
    },
    {
      id: "d2",
      name: "Persönliche und Soziale Kompetenzen (People)",
      objectives: [
        "4.4.1 Selbstreflexion und Selbstmanagement",
        "4.4.2 Persönliche Integrität und Verlässlichkeit",
        "4.4.3 Persönliche Kommunikation",
        "4.4.4 Beziehungen und Engagement",
        "4.4.5 Führung",
        "4.4.6 Teamarbeit",
        "4.4.7 Konflikte und Krisen",
        "4.4.8 Vielseitigkeit",
        "4.4.9 Verhandlungen",
        "4.4.10 Ergebnisorientierung",
      ],
    },
    {
      id: "d3",
      name: "Technische Kompetenzen (Practice)",
      objectives: [
        "4.5.1 Projektdesign",
        "4.5.2 Anforderungen und Ziele",
        "4.5.3 Leistungsumfang und Lieferobjekte",
        "4.5.4 Ablauf und Termine",
        "4.5.5 Organisation, Information und Dokumentation",
        "4.5.6 Qualität",
        "4.5.7 Kosten und Finanzierung",
        "4.5.8 Ressourcen",
        "4.5.9 Beschaffung",
        "4.5.10 Planung und Steuerung",
        "4.5.11 Chancen und Risiken",
        "4.5.12 Stakeholder",
        "4.5.13 Change und Transformation",
      ],
    },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "ipma-level-d",
    summary:
      "IPMA Level D (Certified Project Management Associate) ist die Einstiegszertifizierung der IPMA im Projektmanagement. Sie basiert auf der IPMA Individual Competence Baseline (ICB4) mit ihren drei Kompetenzbereichen Kontext-Kompetenzen, Persönliche und Soziale Kompetenzen sowie Technische Kompetenzen (Perspective, People, Practice). In Deutschland prüft PM-ZERT (GPM) entweder mit zwei 90-minütigen schriftlichen Prüfungen oder mit einer 90-minütigen schriftlichen Prüfung plus Projektreport; du bestehst, wenn mindestens 23 Kompetenzelemente als erfüllt bewertet werden. Projektmanagementerfahrung ist nicht erforderlich, und das Zertifikat ist fünf Jahre gültig.",
    whoFor: [
      "Studierende, Auszubildende und Berufseinsteiger, die eine anerkannte Projektmanagement-Qualifikation erwerben möchten",
      "Mitglieder von Projektteams, die fundiertes Projektmanagementwissen nachweisen möchten",
      "Erfahrene Fachkräfte, die ihre Praxis mit einem Zertifikat auf Basis der ICB4 belegen möchten",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was IPMA Level D tatsächlich prüft",
        paragraphs: [
          "Level D prüft das Wissen zu den Kompetenzelementen der ICB4 für Projektmanagement. Für Projekte definiert die ICB4 28 Kompetenzelemente in drei Bereichen: Kontext-Kompetenzen (5 Elemente, etwa Strategie, Governance sowie Macht und Interessen), Persönliche und Soziale Kompetenzen (10 Elemente, etwa Führung, Teamarbeit sowie Konflikte und Krisen) und Technische Kompetenzen (13 Elemente, etwa Leistungsumfang und Lieferobjekte, Ablauf und Termine, Chancen und Risiken sowie Stakeholder).",
          "Rechne mit Fragen, in denen du ein Konzept erklärst und auf eine Projektsituation anwendest: einen Projektstrukturplan erstellen, einen Terminplan aufstellen, ein Risiko bewerten, Stakeholder analysieren oder einen Konflikt im Team lösen. Die Fragen folgen der Terminologie der ICB4; lerne die Elemente daher unter ihren offiziellen Namen.",
        ],
      },
      {
        id: "how-it-is-structured",
        heading: "So funktioniert die Zertifizierung in Deutschland (PM-ZERT)",
        paragraphs: [
          "Die IPMA-Zertifizierung wird von nationalen Zertifizierungsstellen durchgeführt, und das Format unterscheidet sich von Land zu Land. Die Angaben hier stammen von PM-ZERT, der Zertifizierungsstelle der GPM in Deutschland (Leitfaden Level D, Version 24, gültig ab 1. August 2026).",
          "Du wählst deinen Pfad bei der Antragstellung und kannst später nicht mehr wechseln. Pfad 1 besteht aus einer 90-minütigen schriftlichen Prüfung plus einem Report von bis zu 25 Seiten (plus bis zu 15 Seiten Anhang) über ein Projekt, der mindestens zwei Wochen vor der Prüfung hochgeladen und in einem Feedbackgespräch von bis zu 20 Minuten besprochen wird. Pfad 2 besteht aus zwei schriftlichen Prüfungen von je 90 Minuten. Inhaber des GPM-Basiszertifikats können über eine Höherzertifizierung mit einer einzigen 90-minütigen Prüfung Level D erreichen.",
          "Über alle Prüfungsteile hinweg müssen 23 Kompetenzelemente als erfüllt bewertet werden. Jeder Prüfungsteil kann innerhalb von 12 Monaten einmal wiederholt werden, und das gesamte Verfahren muss innerhalb von 18 Monaten nach der Zulassung abgeschlossen sein. Geprüft wird auf Deutsch oder Englisch, in Präsenz oder online per Videokonferenz.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den Pfad früh wählen",
            body: "Entscheide dich vor der Antragstellung zwischen zwei schriftlichen Prüfungen und Prüfung plus Report, denn die Wahl ist verbindlich. Der Report-Pfad passt zu dir, wenn du ein reales oder geplantes Projekt ausführlich beschreiben kannst; der Pfad mit zwei Prüfungen passt, wenn du lieber alles schriftlich nachweisen möchtest.",
          },
          {
            title: "Die 28 Kompetenzelemente lernen",
            body: "Erstelle eine einseitige Übersicht aller Elemente der Kontext-Kompetenzen, der Persönlichen und Sozialen Kompetenzen und der Technischen Kompetenzen mit ihren offiziellen ICB4-Namen, und ergänze zu jedem Element die zentralen Gedanken und Methoden. Viele Fragen gehen von der genauen Bedeutung eines Elements aus.",
          },
          {
            title: "Die Methoden der Technischen Kompetenzen üben",
            body: "Zeichne einen Projektstrukturplan, einen Netzplan mit kritischem Pfad, eine Stakeholder-Landkarte, ein Risikoregister mit Eintrittswahrscheinlichkeit und Auswirkung sowie einen einfachen Kostenplan. Bearbeite jede dieser Methoden an einem kleinen Beispielprojekt, bis sie zur Routine wird.",
          },
          {
            title: "Persönliche und Soziale Kompetenzen sowie Kontext-Kompetenzen nicht auslassen",
            body: "Führungsstile, Teamentwicklung, Konflikteskalation, Verhandlung, Kommunikation, Governance und Organisationskultur gehören alle zur ICB4. Notiere zu jedem Element ein kurzes Beispiel aus deiner eigenen Erfahrung.",
          },
          {
            title: "Den Report früh schreiben (Pfad 1)",
            body: "Wenn du Pfad 1 wählst, halte dich an die von PM-ZERT vorgegebene Gliederung des Reports, bleibe innerhalb der Seitenbegrenzung und lade ihn mindestens zwei Wochen vor der Prüfung hoch. Wende die Methoden auf dein Projekt an, statt Theorie zu erklären.",
          },
          {
            title: "Unter Zeitdruck üben",
            body: "Beantworte Übungsfragen mit Zeitlimit in 90-Minuten-Blöcken und lies jede Erklärung, auch bei den Fragen, die du richtig beantwortet hast. Melde dich zur Prüfung an bzw. lege sie ab, sobald deine Ergebnisse stabil sind.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Nur die Methoden der Technischen Kompetenzen lernen. Level D prüft das Wissen zu allen 28 ICB4-Kompetenzelementen, auch zu den Persönlichen und Sozialen Kompetenzen und den Kontext-Kompetenzen.",
          "Die Begriffe des eigenen Unternehmens statt der ICB4-Begriffe verwenden. Die Bewertung folgt den ICB4-Elementen und ihrem Wortlaut.",
          "Leistungsumfang mit Anforderungen und Zielen verwechseln. Der Leistungsumfang legt die Lieferobjekte und die Arbeit fest; Anforderungen und Ziele beschreiben, was die Stakeholder brauchen und was das Projekt erreichen muss.",
          "Risiken nur als Bedrohungen betrachten. Die ICB4 nennt das Element „Chancen und Risiken“, und auch positive Unsicherheit muss gesteuert werden.",
          "Sich auf Regeln aus einem anderen Land verlassen. Prüfungsformat, Pfade und Bestehenskriterien legt die nationale Zertifizierungsstelle fest; prüfe den aktuellen PM-ZERT-Leitfaden, wenn du dich in Deutschland zertifizieren lässt.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie ist die Prüfung zu IPMA Level D in Deutschland aufgebaut?",
        answer:
          "Bei PM-ZERT (GPM) wählst du zwischen zwei schriftlichen Prüfungen von je 90 Minuten oder einer 90-minütigen schriftlichen Prüfung plus einem Report von bis zu 25 Seiten mit einem Feedbackgespräch von bis zu 20 Minuten. Du bestehst, wenn über alle Prüfungsteile 23 Kompetenzelemente als erfüllt bewertet werden.",
      },
      {
        question: "Brauche ich für IPMA Level D Projektmanagementerfahrung?",
        answer:
          "Nein. Laut PM-ZERT sind für die Antragstellung weder Projektmanagementerfahrung noch eine Berufsausbildung erforderlich. Level D prüft Projektmanagementwissen über die ICB4-Kompetenzelemente hinweg.",
      },
      {
        question: "Wie lange ist das Zertifikat IPMA Level D gültig?",
        answer:
          "Fünf Jahre. Für die Rezertifizierung bei PM-ZERT weist du mindestens 175 Stunden Weiterbildung seit deiner letzten Zertifizierung nach und reichst deine Unterlagen spätestens sechs Wochen vor Ablauf des Zertifikats über das Zertifizierungsportal ein.",
      },
      {
        question: "Kann ich IPMA Level D auf Englisch ablegen?",
        answer:
          "Ja. PM-ZERT führt Zertifizierungen auf Deutsch und Englisch durch, wobei Deutsch der Standard ist; wenn du Englisch wünschst, wende dich vor der Antragstellung per E-Mail an PM-ZERT. Andere IPMA-Mitgliedsverbände legen ihre eigenen Sprachen und Formate fest.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. Bei PM-ZERT, der Zertifizierungsstelle der GPM in Deutschland, ist Deutsch die Standardsprache der Zertifizierung; Englisch ist ebenfalls möglich. Grundlage ist die deutsche Fassung der ICB4 mit den hier verwendeten Elementnamen.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den veröffentlichten ICB4-Kompetenzelementen der IPMA erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "IPMA Level D Prüfung 2026: Ablauf, ICB4 & Lernplan",
      description:
        "IPMA Level D Prüfungsvorbereitung: ICB4-Kompetenzbereiche, PM-ZERT-Pfade (Prüfungen oder Report), 23-Elemente-Regel, Rezertifizierung und Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "ipma-level-d",
    intro:
      "30 eigene Übungsfragen zu IPMA Level D aus allen drei ICB4-Kompetenzbereichen: Kontext-Kompetenzen, Persönliche und Soziale Kompetenzen sowie Technische Kompetenzen. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-11-09",
    seo: {
      title: "IPMA Level D Prüfungsfragen üben: mit Lösungen (ICB4)",
      description:
        "30 kostenlose IPMA Level D Übungsfragen zur ICB4 (Stakeholder, Risiken, Planung, Führung, Konflikte und Governance) jeweils mit ausführlicher Erklärung.",
    },
    questions: [
      /* ── Bereich 1: Kontext-Kompetenzen ───────────────────────────────── */
      {
        id: "ipmad-d1-strategy",
        domain: "d1",
        objective: "4.3.1 Strategie",
        difficulty: "foundation",
        question:
          "Ein Lenkungsausschuss muss entscheiden, welches von zwei vorgeschlagenen Projekten gestartet wird, weil das Budget nur für eines reicht. Welche Frage ist aus Sicht des Kompetenzelements Strategie am wichtigsten?",
        options: [
          { id: "A", text: "Welches Projekt hat den erfahreneren Projektleiter?", rationale: "Die Erfahrung des Projektleiters beeinflusst das Umsetzungsrisiko, sagt aber nichts darüber, ob das Projekt den Zielen der Organisation dient." },
          { id: "B", text: "Welches Projekt kann zuerst starten?", rationale: "Ein früher Start sagt nichts über den Wert aus, den das Projekt für die Organisation schafft." },
          { id: "C", text: "Welches Projekt trägt stärker zu den strategischen Zielen der Organisation bei?", rationale: "Richtig. Beim Element Strategie geht es darum, das Projekt an Mission, Vision und strategischen Zielen der Organisation auszurichten und es auf dieser Grundlage zu begründen." },
          { id: "D", text: "Welches Projekt benötigt weniger Dokumente?", rationale: "Der Dokumentationsaufwand ist kein sinnvolles Kriterium für die Projektauswahl." },
        ],
        answer: "C",
        explanation:
          "Projekte sollen Nutzen für die Organisation schaffen. Ein Projekt, das gut geführt wird, aber die Strategie nicht unterstützt, ist trotzdem das falsche Projekt. Deshalb kommt die strategische Passung vor Überlegungen zur Umsetzung.",
        reference: ICB4,
      },
      {
        id: "ipmad-d1-power-interest",
        domain: "d1",
        objective: "4.3.4 Macht und Interessen",
        difficulty: "intermediate",
        question:
          "Eine Abteilungsleiterin unterstützt dein Projekt offiziell, doch du bemerkst, dass sie die Freistellung ihrer Mitarbeitenden immer wieder hinauszögert, weil das Projekt den Einfluss ihrer Abteilung verringern würde. Welches Kompetenzelement ist am unmittelbarsten gefragt, um dies zu erkennen und damit umzugehen?",
        options: [
          { id: "A", text: "Macht und Interessen", rationale: "Richtig. Dieses Element umfasst das Verständnis informeller persönlicher und Gruppeninteressen, von Einfluss und Politik und deren Wirkung auf das Projekt." },
          { id: "B", text: "Qualität", rationale: "Qualität betrifft die Eignung der Projektergebnisse und -prozesse, nicht verdeckte Interessen." },
          { id: "C", text: "Kosten und Finanzierung", rationale: "Dieses Element befasst sich mit Budgets und Kostensteuerung, nicht mit informellen Machtstrukturen." },
          { id: "D", text: "Leistungsumfang und Lieferobjekte", rationale: "Der Leistungsumfang legt fest, was das Projekt liefert, nicht, warum jemand Widerstand leistet." },
        ],
        answer: "A",
        explanation:
          "Formale Unterstützung und tatsächliches Verhalten können auseinanderfallen. Wer informelle Interessen und Macht erkennt, kann das eigentliche Anliegen ansprechen, etwa indem er die Abteilungsleiterin in die Frage einbindet, wie sich die Veränderung auf ihren Bereich auswirkt.",
        reference: ICB4,
      },
      {
        id: "ipmad-d1-governance",
        domain: "d1",
        objective: "4.3.2 Governance, Strukturen und Prozesse",
        difficulty: "intermediate",
        question:
          "Deine Organisation hat ein Projektmanagement-Office (PMO), definierte Phasenübergänge (Gates) und die Regel, dass Projekte ab einem bestimmten Budget eine Freigabe durch die Geschäftsleitung benötigen. Welches Kompetenzelement umfasst das Verständnis dieser Regelungen und das Arbeiten innerhalb dieser Regelungen?",
        options: [
          { id: "A", text: "Kultur und Werte", rationale: "Kultur und Werte umfassen Normen und ungeschriebene Regeln. Formale Freigabestufen und Phasenübergänge gehören zu Strukturen und Prozessen." },
          { id: "B", text: "Governance, Strukturen und Prozesse", rationale: "Richtig. Dieses Element umfasst, wie die Organisation Projekte steuert: Gremien, Entscheidungsbefugnisse, PMOs, Phasenmodelle und Berichtswege." },
          { id: "C", text: "Persönliche Integrität und Verlässlichkeit", rationale: "Das ist ein Element der Persönlichen und Sozialen Kompetenzen zu ethischem, konsistentem persönlichem Verhalten, nicht zu Organisationsstrukturen." },
          { id: "D", text: "Beschaffung", rationale: "Beschaffung betrifft den Einkauf von Waren und Dienstleistungen bei Lieferanten." },
        ],
        answer: "B",
        explanation:
          "Kontext-Kompetenzen beschreiben das Umfeld, in dem ein Projekt stattfindet. Wer weiß, wer was entscheidet, wann eine Freigabe nötig ist und welche Standardprozesse gelten, kann als Projektleiter innerhalb der Governance der Organisation handeln.",
        reference: ICB4,
      },
      {
        id: "ipmad-d1-compliance-data-protection",
        domain: "d1",
        objective: "4.3.3 Compliance, Standards und Regularien",
        difficulty: "foundation",
        question:
          "Dein Team möchte ein neues Kundenportal mit einer Kopie der echten Kundendatenbank testen, weil realistische Daten das Testen beschleunigen. Was solltest du als Projektleiter zuerst tun?",
        options: [
          { id: "A", text: "Zustimmen, weil die Daten das Firmennetz nie verlassen", rationale: "Dass die Daten im Netz bleiben, macht die Nutzung personenbezogener Daten nicht rechtmäßig; der Datenschutz gilt trotzdem." },
          { id: "B", text: "Die rechtlichen Anforderungen klären, den Datenschutzbeauftragten einbinden und bei Bedarf anonymisierte Daten verwenden", rationale: "Richtig. Das Element Compliance erwartet, dass du die für das Projekt geltenden Gesetze und Regeln erkennst und sicherstellst, dass das Projekt sie einhält." },
          { id: "C", text: "Jeden Tester selbst entscheiden lassen, wie sorgfältig er mit den Daten umgeht", rationale: "Compliance lässt sich nicht dem Ermessen Einzelner überlassen; das Projekt muss sicherstellen, dass die Regeln eingehalten werden." },
          { id: "D", text: "Die Frage verschieben, bis das Portal live ist und das Audit beginnt", rationale: "Rechtliche Anforderungen spät zu behandeln erzeugt Risiken und teure Nacharbeit; sie gehören in die Planung." },
        ],
        answer: "B",
        explanation:
          "Projekte müssen sich an Gesetze, Vorschriften und interne Standards halten. Wer früh erkennt, dass personenbezogene Daten betroffen sind, und die richtigen Fachleute einbindet, schützt Organisation und Projekt vor rechtlichem Schaden und Imageschaden.",
        reference: ICB4,
      },
      {
        id: "ipmad-d1-culture-international",
        domain: "d1",
        objective: "4.3.5 Kultur und Werte",
        difficulty: "intermediate",
        question:
          "In deinem internationalen Projekt äußern die Kolleginnen und Kollegen eines Standorts in der wöchentlichen Besprechung nie Bedenken, obwohl sich später zeigt, dass ihnen Probleme bekannt waren. In ihrer Organisation ist es unüblich, einer Führungskraft offen zu widersprechen. Wie reagierst du am angemessensten?",
        options: [
          { id: "A", text: "Ihnen sagen, dass hier offene Kritik erwartet wird, und es dabei belassen", rationale: "Eine bloße Anweisung übergeht tief verankerte Normen und wird das Verhalten kaum ändern." },
          { id: "B", text: "Den Standort beim Lenkungsausschuss melden, weil er Informationen zurückhält", rationale: "Einen kulturellen Unterschied als Fehlverhalten zu behandeln, zerstört Vertrauen und löst das Problem nicht." },
          { id: "C", text: "Sie nicht mehr nach ihrer Meinung fragen, da sie ohnehin nichts beitragen", rationale: "Sie auszuschließen, verschenkt wertvolles Wissen und vergrößert die Informationslücke." },
          { id: "D", text: "Den kulturellen Unterschied erkennen und andere Wege anbieten, etwa Einzelgespräche oder schriftliche Beiträge vor der Besprechung", rationale: "Richtig. Das Element Kultur und Werte erwartet, dass du unterschiedliche Normen verstehst und die Arbeitsweise im Projekt so anpasst, dass sich alle einbringen können." },
        ],
        answer: "D",
        explanation:
          "Organisationen und Länder haben unterschiedliche Normen zu Hierarchie und Offenheit. Wer diese Unterschiede erkennt, kann die Kommunikationsformate anpassen, statt Schweigen fälschlich als Zustimmung zu deuten.",
        reference: ICB4,
      },
      {
        id: "ipmad-d1-programme-portfolio",
        domain: "d1",
        objective: "4.3.2 Governance, Strukturen und Prozesse",
        difficulty: "foundation",
        question:
          "Um einen neuen Markt zu erschließen, startet ein Unternehmen mehrere zusammenhängende Projekte (ein neues Produkt, eine Vertriebsorganisation und eine IT-Plattform), die gemeinsam gesteuert werden, um ein strategisches Ziel zu erreichen. Wie nennt man diese Gruppe von Projekten?",
        options: [
          { id: "A", text: "Ein Programm", rationale: "Richtig. Ein Programm ist eine Gruppe zusammenhängender Projekte und Aktivitäten, die gemeinsam gesteuert werden, um ein gemeinsames strategisches Ziel oder eine Veränderung zu erreichen." },
          { id: "B", text: "Ein Portfolio", rationale: "Ein Portfolio ist eine Sammlung von Projekten und Programmen, die gemeinsam gesteuert werden, um Ressourcen und strategischen Beitrag zu optimieren; sie müssen kein gemeinsames Ziel verfolgen." },
          { id: "C", text: "Ein Projektmanagement-Office", rationale: "Ein PMO ist eine unterstützende Organisationseinheit, keine Gruppe von Projekten." },
          { id: "D", text: "Ein Projektstrukturplan", rationale: "Ein PSP gliedert den Leistungsumfang eines einzelnen Projekts in Arbeitspakete." },
        ],
        answer: "A",
        explanation:
          "Organisationen steuern zeitlich begrenzte Vorhaben auf verschiedenen Ebenen: Projekte, Programme und Portfolios. Wer den Unterschied kennt, versteht, wo das eigene Projekt eingeordnet ist und wer welche Entscheidungen trifft.",
        reference: ICB4,
      },

      /* ── Bereich 2: Persönliche und Soziale Kompetenzen ───────────────── */
      {
        id: "ipmad-d2-conflict-escalation",
        domain: "d2",
        objective: "4.4.7 Konflikte und Krisen",
        difficulty: "intermediate",
        question:
          "Zwei erfahrene Entwickler sind sich über einen technischen Lösungsansatz uneinig. Ihre Diskussion ist persönlich geworden, und sie gehen sich in Besprechungen inzwischen aus dem Weg. Was ist der angemessenste erste Schritt für den Projektleiter?",
        options: [
          { id: "A", text: "Ignorieren, weil sich Konflikte meist von selbst lösen", rationale: "Konflikte, die persönlich geworden sind, eskalieren meist weiter und schaden dem Team, wenn man sie sich selbst überlässt." },
          { id: "B", text: "Zugunsten des erfahreneren Entwicklers entscheiden, um den Streit zu beenden", rationale: "Eine Entscheidung zu erzwingen, ohne den Konflikt zu verstehen, klärt vielleicht die technische Frage, lässt aber das Beziehungsproblem ungelöst." },
          { id: "C", text: "Sofort an die Linienvorgesetzten beider Entwickler eskalieren", rationale: "Eine Eskalation ist angebracht, wenn der Projektleiter den Konflikt nicht lösen kann, nicht als erster Schritt." },
          { id: "D", text: "Mit beiden sprechen, Ursache und Eskalationsstufe des Konflikts analysieren und ein lösungsorientiertes Gespräch moderieren", rationale: "Richtig. Indem der Projektleiter den Konflikt analysiert und früh moderiert, verhindert er eine weitere Eskalation und lenkt die Diskussion zurück auf die Aufgabe." },
        ],
        answer: "D",
        explanation:
          "Der Umgang mit Konflikten beginnt mit Verstehen: Worum geht es, und wie weit ist der Konflikt eskaliert? Je früher der Projektleiter eingreift und moderiert, desto wahrscheinlicher können die Beteiligten ihn noch gemeinsam lösen.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-leadership-situational",
        domain: "d2",
        objective: "4.4.5 Führung",
        difficulty: "intermediate",
        question:
          "Eine neue Kollegin im Team ist hoch motiviert, hat die ihr übertragene Aufgabe aber noch nie ausgeführt. Welcher Führungsansatz passt in dieser Phase am besten?",
        options: [
          { id: "A", text: "Die Aufgabe vollständig delegieren und das Ergebnis am Ende prüfen", rationale: "Vollständige Delegation passt zu Personen, die sowohl fähig als auch willens sind. Ohne Erfahrung bliebe sie ohne die Anleitung, die sie braucht." },
          { id: "B", text: "Klare Anweisungen geben und eng begleiten, bis sie die nötigen Fähigkeiten aufgebaut hat", rationale: "Richtig. Situationsgerechte Führung heißt, mehr anzuleiten, solange die Kompetenz noch gering ist, und sich zurückzunehmen, wenn sie wächst." },
          { id: "C", text: "Sie es selbst herausfinden lassen, um ihre Selbstständigkeit zu fördern", rationale: "Das riskiert Fehler und Frustration und verschenkt ihre Motivation." },
          { id: "D", text: "Aus Gründen der Fairness bei allen Teammitgliedern denselben Führungsstil anwenden", rationale: "Ein einheitlicher Stil übersieht, dass sich Menschen in Fähigkeiten und Motivation unterscheiden; wirksame Führung passt sich an Person und Situation an." },
        ],
        answer: "B",
        explanation:
          "Führung in Projekten bedeutet, einen Stil zu wählen, der zur Person, zur Aufgabe und zur Situation passt. Motivation ohne Erfahrung erfordert Anleitung und Unterstützung, die mit wachsender Kompetenz reduziert werden können.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-teamwork",
        domain: "d2",
        objective: "4.4.6 Teamarbeit",
        difficulty: "foundation",
        question:
          "Ein neu gebildetes Projektteam beginnt einige Wochen nach dem Kick-off, über Rollen und Arbeitsweisen zu streiten. Wie sollte der Projektleiter dies nach gängigen Modellen der Teamentwicklung deuten?",
        options: [
          { id: "A", text: "Als Zeichen, dass das Team schlecht ausgewählt wurde und ersetzt werden sollte", rationale: "Reibung in dieser Phase ist normal und für sich genommen kein Beleg für eine falsche Teamzusammensetzung." },
          { id: "B", text: "Als normale Storming-Phase, die der Projektleiter begleiten sollte, indem er Rollen klärt und Teamregeln vereinbart", rationale: "Richtig. Teams durchlaufen typischerweise die Phasen Forming, Storming, Norming und Performing; im Storming helfen klare Rollen und vereinbarte Regeln dem Team weiter." },
          { id: "C", text: "Als Beleg, dass das Team bereits in der Performing-Phase ist", rationale: "Teams in der Performing-Phase arbeiten wirksam zusammen; offene Streitigkeiten über Rollen deuten auf eine frühere Phase hin." },
          { id: "D", text: "Als Anlass, alle Teambesprechungen auszusetzen, bis die Streitigkeiten enden", rationale: "Weniger Kommunikation würde die Teamentwicklung bremsen, statt die Probleme zu lösen." },
        ],
        answer: "B",
        explanation:
          "Teamentwicklung ist ein Prozess. Wer die Phasen kennt, kann als Projektleiter richtig reagieren, zum Beispiel Rollen klären und Arbeitsregeln vereinbaren, wenn sich das Team im Storming befindet.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-negotiation",
        domain: "d2",
        objective: "4.4.9 Verhandlungen",
        difficulty: "advanced",
        question:
          "Du verhandelst mit einem Linienvorgesetzten über zwei Spezialisten. Er besteht darauf, nur einen freizustellen; du bestehst auf zwei. Wie kommst du am besten zu einer Einigung, die beide Seiten akzeptieren können?",
        options: [
          { id: "A", text: "Die eigene Forderung so lange wiederholen, bis er nachgibt", rationale: "Positionsbezogenes Verhandeln verhärtet die Positionen und schadet der Beziehung, die du später noch brauchst." },
          { id: "B", text: "Sofort einen Spezialisten akzeptieren, um einen Konflikt zu vermeiden", rationale: "Nachzugeben, ohne Optionen auszuloten, kann das Projekt gefährden und geht nicht auf den eigentlichen Bedarf ein." },
          { id: "C", text: "Die Interessen hinter beiden Positionen ergründen und nach Optionen wie einer gestaffelten Freistellung oder Teilzeitverfügbarkeit suchen", rationale: "Richtig. Wer sich auf Interessen statt auf Positionen konzentriert, eröffnet Optionen, die beide Seiten zufriedenstellen können." },
          { id: "D", text: "Noch vor Ende des ersten Gesprächs an den Lenkungsausschuss eskalieren", rationale: "Eine Eskalation kann das letzte Mittel sein, sollte aber einen ehrlichen Verhandlungsversuch nicht ersetzen." },
        ],
        answer: "C",
        explanation:
          "Gutes Verhandeln trennt Positionen („einer“ oder „zwei“) von Interessen (die Auslastung seiner Abteilung, der Termin deines Projekts). Auf Interessen aufgebaute Optionen führen zu tragfähigen Vereinbarungen und schützen die Arbeitsbeziehung.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-communication",
        domain: "d2",
        objective: "4.4.3 Persönliche Kommunikation",
        difficulty: "foundation",
        question:
          "Nachdem der Projektleiter dem Team eine Änderung der Prioritäten erklärt hat, möchte er sicherstellen, dass die Botschaft wie beabsichtigt verstanden wurde. Was ist die wirksamste Technik?",
        options: [
          { id: "A", text: "Die Teammitglieder bitten, die wichtigsten Punkte in eigenen Worten zusammenzufassen", rationale: "Richtig. Die Bitte um eine Zusammenfassung prüft das Verständnis und gibt dem Projektleiter Rückmeldung, ob die Botschaft wie beabsichtigt angekommen ist." },
          { id: "B", text: "Die Botschaft lauter wiederholen", rationale: "Lautstärke verbessert das Verständnis nicht." },
          { id: "C", text: "Denselben Text noch einmal per E-Mail senden, ohne zu Rückfragen aufzufordern", rationale: "Wiederholte Einwegkommunikation zeigt nicht, ob die Botschaft verstanden wurde." },
          { id: "D", text: "Davon ausgehen, dass Schweigen Zustimmung bedeutet", rationale: "Schweigen kann Verwirrung, Ablehnung oder Unsicherheit bedeuten; es ist keine Bestätigung." },
        ],
        answer: "A",
        explanation:
          "Kommunikation ist nur dann wirksam, wenn der Empfänger die Botschaft so versteht, wie sie gemeint ist. Feedbacktechniken wie die Bitte um eine Zusammenfassung oder aktives Zuhören schließen diesen Kreis.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-self-management",
        domain: "d2",
        objective: "4.4.1 Selbstreflexion und Selbstmanagement",
        difficulty: "foundation",
        question:
          "Ein Projektleiter bemerkt, dass er bei knappen Terminen ungeduldig wird und andere unterbricht, was das Team verärgert. Was erwartet das Kompetenzelement Selbstreflexion und Selbstmanagement von ihm?",
        options: [
          { id: "A", text: "Das Muster erkennen, über die Auslöser nachdenken und Wege entwickeln, seine Reaktion zu steuern", rationale: "Richtig. Bei diesem Element geht es darum, sich der eigenen Emotionen, des eigenen Verhaltens und Stresses bewusst zu sein und konstruktiv damit umzugehen." },
          { id: "B", text: "Das Team bitten, vor Terminen keine Probleme mehr anzusprechen", rationale: "Das schiebt die Verantwortung auf das Team und unterdrückt wichtige Informationen." },
          { id: "C", text: "Das Verhalten als Teil seiner Persönlichkeit akzeptieren", rationale: "Selbstmanagement bedeutet, an Verhalten zu arbeiten, das anderen schadet, statt es hinzunehmen." },
          { id: "D", text: "Teambesprechungen kurz vor Terminen meiden", rationale: "Vermeidung nimmt Kommunikation genau dann weg, wenn sie am dringendsten gebraucht wird." },
        ],
        answer: "A",
        explanation:
          "Persönliche und Soziale Kompetenzen beginnen bei dir selbst. Die eigenen Reaktionen zu reflektieren, besonders unter Druck, ist die Grundlage dafür, andere wirksam zu führen und mit ihnen zusammenzuarbeiten.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-integrity-status-report",
        domain: "d2",
        objective: "4.4.2 Persönliche Integrität und Verlässlichkeit",
        difficulty: "intermediate",
        question:
          "Vor einer Sitzung der Geschäftsleitung bittet dich dein Auftraggeber, den Projektstatus als grün darzustellen, obwohl du weißt, dass ein wichtiger Meilenstein um drei Wochen verfehlt wird. Wie verhältst du dich angemessen?",
        options: [
          { id: "A", text: "Den Status wie gewünscht als grün darstellen, da der Auftraggeber für den Bericht verantwortlich ist", rationale: "Einen Status zu berichten, von dem du weißt, dass er falsch ist, verletzt deine Integrität, egal wer darum gebeten hat." },
          { id: "B", text: "Den Status als grün darstellen und den Rückstand still aufholen, bevor es jemand merkt", rationale: "So wird das Problem vor denjenigen verborgen, die darüber entscheiden müssen, und du setzt auf Hoffnung statt auf Fakten." },
          { id: "C", text: "Dem Auftraggeber erklären, warum du den tatsächlichen Status berichtest, und Gegenmaßnahmen vorschlagen, die du zusammen mit dem Status vorstellst", rationale: "Richtig. Integrität heißt, im Einklang mit ethischen Werten zu handeln und ehrlich zu berichten und den Auftraggeber dabei mit einem konstruktiven Weg nach vorn zu unterstützen." },
          { id: "D", text: "Dem Konflikt ausweichen, indem du nicht an der Sitzung teilnimmst", rationale: "Fernbleiben korrigiert das falsche Bild nicht und untergräbt deine Verlässlichkeit." },
        ],
        answer: "C",
        explanation:
          "Persönliche Integrität und Verlässlichkeit sind die Grundlage für Vertrauen in den Projektleiter. Ehrliche Statusberichte, verbunden mit Lösungen, ermöglichen den Entscheidern rechtzeitiges Handeln und schützen deine Glaubwürdigkeit.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-relations-remote",
        domain: "d2",
        objective: "4.4.4 Beziehungen und Engagement",
        difficulty: "foundation",
        question:
          "Ein Spezialist eines Partnerunternehmens arbeitet remote in deinem Team mit. Nach einigen Wochen sagt er in Videocalls kaum noch etwas und erledigt nur das Nötigste. Was ist der beste erste Schritt?",
        options: [
          { id: "A", text: "Dir Zeit für ein persönliches Gespräch nehmen, echtes Interesse an seiner Situation zeigen und zuhören, was er braucht", rationale: "Richtig. Bei Beziehungen und Engagement geht es darum, durch persönlichen Kontakt, Zuhören und Interesse an anderen Vertrauen aufzubauen." },
          { id: "B", text: "Ihm eine schriftliche Erinnerung an seine vertraglichen Pflichten schicken", rationale: "Eine formale Erinnerung kann später nötig sein, baut aber keine Beziehung auf und deckt die Ursache nicht auf." },
          { id: "C", text: "Ihn so schnell wie möglich durch jemanden aus deinem eigenen Unternehmen ersetzen", rationale: "Ihn zu ersetzen, bevor die Ursache bekannt ist, kostet Know-how und übergeht die Beziehungsebene." },
          { id: "D", text: "Abwarten, bis er sich von selbst stärker engagiert", rationale: "Remote arbeitende Teammitglieder können leicht den Anschluss verlieren; Abwarten vergrößert die Distanz." },
        ],
        answer: "A",
        explanation:
          "Menschen engagieren sich für ein Projekt, wenn sie sich wahrgenommen und verbunden fühlen. Gerade in Remote-Situationen muss der Projektleiter Beziehungen aktiv aufbauen, statt sich auf Verträge oder zufällige Begegnungen zu verlassen.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-resourcefulness-creativity",
        domain: "d2",
        objective: "4.4.8 Vielseitigkeit",
        difficulty: "intermediate",
        question:
          "Dein Team kommt seit Tagen bei einem technischen Problem nicht weiter, und die üblichen Lösungen haben versagt. Du organisierst ein Brainstorming. Welche Regel ist in der Phase der Ideensammlung am wichtigsten?",
        options: [
          { id: "A", text: "Nur erfahrene Teammitglieder dürfen Ideen vorschlagen", rationale: "Eine eingeschränkte Teilnahme verringert die Vielfalt der Perspektiven, die das Brainstorming gerade einbringen soll." },
          { id: "B", text: "Jede Idee wird sofort bewertet, damit keine Zeit verloren geht", rationale: "Eine sofortige Bewertung hemmt ungewöhnliche Ideen; die Bewertung folgt in einem späteren Schritt." },
          { id: "C", text: "Es dürfen nur Ideen genannt werden, die ins aktuelle Budget passen", rationale: "Ideen zu früh einzuschränken, blockiert kreative Lösungen, die sich später noch anpassen ließen." },
          { id: "D", text: "Kritik wird zurückgestellt, und die Menge der Ideen geht vor ihrer Qualität", rationale: "Richtig. Wer die Bewertung zurückstellt, ermutigt alle, auch ungewöhnliche Ideen zu teilen, und genau das ist der Zweck von Kreativitätstechniken." },
        ],
        answer: "D",
        explanation:
          "Zur Vielseitigkeit gehört, Techniken einzusetzen, die beim Umdenken helfen, wenn Standardansätze scheitern. Die Trennung von Ideensammlung und Bewertung ist das zentrale Prinzip des Brainstormings.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-results-orientation",
        domain: "d2",
        objective: "4.4.10 Ergebnisorientierung",
        difficulty: "advanced",
        question:
          "Dein Team verwendet viel Zeit darauf, eine Funktion zu perfektionieren, die der Kunde als „nice to have“ eingestuft hat, während ein zentrales Lieferobjekt für den nächsten Meilenstein in Rückstand gerät. Was verlangt Ergebnisorientierung von dir?",
        options: [
          { id: "A", text: "Das Team weitermachen lassen, weil hohe Qualität bei jeder Funktion motiviert", rationale: "Motivation ist wichtig, aber Aufwand für wenig wertvolle Arbeit auf Kosten der vereinbarten Ergebnisse dient dem Projekt nicht." },
          { id: "B", text: "Das Team wieder auf die Lieferobjekte ausrichten, die am meisten zu den vereinbarten Zielen beitragen, und gemeinsam Prioritäten setzen", rationale: "Richtig. Ergebnisorientierung heißt, den eigenen Einsatz und den des Teams auf die Ergebnisse zu konzentrieren, die für die Stakeholder am wichtigsten sind." },
          { id: "C", text: "Den Meilenstein verschieben, damit beides in hoher Qualität fertig wird", rationale: "Den Meilenstein ohne Not zu verschieben, nimmt ein schlechteres Gesamtergebnis in Kauf, statt Prioritäten zu setzen." },
          { id: "D", text: "Das zentrale Lieferobjekt selbst übernehmen, damit das Team nicht gestört wird", rationale: "Die Arbeit selbst zu erledigen, umgeht das Team und lässt das eigentliche Priorisierungsproblem ungelöst." },
        ],
        answer: "B",
        explanation:
          "Beschäftigt zu sein ist nicht dasselbe, wie Ergebnisse zu liefern. Der Projektleiter hält das Team auf die Ergebnisse fokussiert, die Nutzen stiften, und macht Prioritäten ausdrücklich, wenn die Zeit knapp ist.",
        reference: ICB4,
      },
      {
        id: "ipmad-d2-crisis-go-live",
        domain: "d2",
        objective: "4.4.7 Konflikte und Krisen",
        difficulty: "advanced",
        question:
          "Zwei Tage vor dem Go-live fällt beim Kunden der zentrale Server aus, und der Start ist ernsthaft gefährdet. Was sollte der Projektleiter zuerst tun?",
        options: [
          { id: "A", text: "Herausfinden, wer den Ausfall verursacht hat, bevor weitere Schritte erfolgen", rationale: "Die Suche nach dem Verantwortlichen kostet Zeit; die Ursachenanalyse gehört in die Phase, nachdem die Lage unter Kontrolle ist." },
          { id: "B", text: "Mit der Information warten, bis die vollständige Analyse vorliegt", rationale: "Verzögerte Information hindert Auftraggeber und Stakeholder am Handeln und schadet dem Vertrauen." },
          { id: "C", text: "Die Lage schnell einschätzen, den Auftraggeber informieren und ein kleines Krisenteam einberufen, das über Sofortmaßnahmen entscheidet", rationale: "Richtig. In einer Krise muss der Projektleiter schnell handeln, die richtigen Personen informieren und Entscheidungen organisieren, um die Lage zu stabilisieren." },
          { id: "D", text: "Am Go-live-Plan festhalten und hoffen, dass der Server rechtzeitig repariert wird", rationale: "Wer eine Krise ignoriert, macht eine gesteuerte Reaktion unmöglich und vergrößert den Schaden." },
        ],
        answer: "C",
        explanation:
          "Eine Krise erfordert schnelles, strukturiertes Handeln statt des langsameren Vorgehens bei Konflikten. Sobald die Lage stabil ist, können die Ursachen analysiert und Lessons Learned festgehalten werden.",
        reference: ICB4,
      },

      /* ── Bereich 3: Technische Kompetenzen ────────────────────────────── */
      {
        id: "ipmad-d3-stakeholder-analysis",
        domain: "d3",
        objective: "4.5.12 Stakeholder",
        difficulty: "foundation",
        question:
          "In einer Stakeholderanalyse stufst du den Betriebsrat mit hohem Einfluss auf das Projekt und einer negativen Haltung dazu ein. Welche Strategie ist am angemessensten?",
        options: [
          { id: "A", text: "Ihn erst nach Projektabschluss informieren", rationale: "Wer einen einflussreichen kritischen Stakeholder ausschließt, erhöht das Risiko, dass er das Projekt später blockiert." },
          { id: "B", text: "Ihn früh einbinden, seine Bedenken verstehen und ihn aktiv beteiligen", rationale: "Richtig. Stakeholder mit hohem Einfluss und kritischer Haltung brauchen eine enge, frühe Einbindung, damit auf ihre Bedenken eingegangen werden kann." },
          { id: "C", text: "Ihn wie alle anderen Stakeholder mit dem Standard-Newsletter behandeln", rationale: "Eine Stakeholderanalyse dient gerade dazu, die Einbindung gezielt anzupassen; einflussreiche Kritiker brauchen mehr als Standardinformationen." },
          { id: "D", text: "Ihn von der Stakeholderliste streichen, weil er dagegen ist", rationale: "Ablehnung verringert seinen Einfluss nicht; wer ihn ignoriert, wird ihn dadurch nicht los." },
        ],
        answer: "B",
        explanation:
          "Stakeholdermanagement heißt, Stakeholder zu identifizieren, ihren Einfluss und ihre Haltung zu analysieren und für jeden eine Strategie zur Einbindung zu wählen. Einflussreiche Kritiker haben Vorrang bei der aktiven Beteiligung.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-risk-opportunity",
        domain: "d3",
        objective: "4.5.11 Chancen und Risiken",
        difficulty: "intermediate",
        question:
          "Ein Risiko hat eine geschätzte Eintrittswahrscheinlichkeit von 20 % und einen möglichen Schaden von 50.000 EUR. Wie hoch ist sein Erwartungswert (Risikowert)?",
        options: [
          { id: "A", text: "2.500 EUR", rationale: "Das entspräche 5 % des möglichen Schadens, nicht 20 %." },
          { id: "B", text: "50.000 EUR", rationale: "Das ist der volle Schaden, ohne die Wahrscheinlichkeit zu berücksichtigen." },
          { id: "C", text: "250.000 EUR", rationale: "Hier wird der Schaden mit 5 statt mit 0,2 multipliziert." },
          { id: "D", text: "10.000 EUR", rationale: "Richtig. Erwartungswert = Wahrscheinlichkeit × Auswirkung = 0,2 × 50.000 EUR = 10.000 EUR." },
        ],
        answer: "D",
        explanation:
          "Das Produkt aus Wahrscheinlichkeit und Auswirkung liefert einen vergleichbaren Wert, um Risiken zu priorisieren und Reserven zu bemessen. Dieselbe Logik gilt für Chancen, bei denen die Auswirkung ein Nutzen statt eines Verlusts ist.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-wbs",
        domain: "d3",
        objective: "4.5.3 Leistungsumfang und Lieferobjekte",
        difficulty: "foundation",
        question: "Was ist der Hauptzweck eines Projektstrukturplans (PSP)?",
        options: [
          { id: "A", text: "Reihenfolge und Abhängigkeiten der Vorgänge im Zeitverlauf darzustellen", rationale: "Reihenfolge und Abhängigkeiten zeigt der Netzplan oder Terminplan, nicht der PSP." },
          { id: "B", text: "Die Stakeholder des Projekts und ihren Einfluss aufzulisten", rationale: "Das leistet das Stakeholderregister bzw. die Stakeholderanalyse." },
          { id: "C", text: "Den gesamten Leistungsumfang hierarchisch in überschaubare Arbeitspakete zu gliedern", rationale: "Richtig. Der PSP gliedert die gesamte Arbeit des Projekts in Lieferobjekte und Arbeitspakete, die dann als Grundlage für Terminplanung, Aufwandsschätzung und die Zuordnung von Verantwortung dienen." },
          { id: "D", text: "Die Budgetfreigaben des Projekts zu dokumentieren", rationale: "Budgetfreigaben gehören zur Finanz- und Governance-Dokumentation." },
        ],
        answer: "C",
        explanation:
          "Der PSP beantwortet die Frage „Was ist zu tun?“ für den gesamten Leistungsumfang des Projekts. Arbeit, die nicht im PSP steht, gehört nicht zum Projekt. Damit ist er die Referenz für die Planung und für die Steuerung des Leistungsumfangs.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-critical-path",
        domain: "d3",
        objective: "4.5.4 Ablauf und Termine",
        difficulty: "advanced",
        question:
          "Ein Projekt hat drei Pfade vom Start bis zum Ende: A–B–E dauert 12 Tage, A–C–E 15 Tage und A–D–E 10 Tage. Vorgang B verzögert sich um 2 Tage. Was passiert mit dem Projektendtermin, wenn sich sonst nichts ändert?",
        options: [
          { id: "A", text: "Er verschiebt sich um 2 Tage", rationale: "B liegt nicht auf dem kritischen Pfad. A–B–E dauert dann 14 Tage und ist damit immer noch kürzer als A–C–E." },
          { id: "B", text: "Er ändert sich nicht", rationale: "Richtig. Der kritische Pfad A–C–E bestimmt die Dauer von 15 Tagen. Pfad A–B–E hat 3 Tage Puffer, daher wird eine Verzögerung von B um 2 Tage aufgefangen." },
          { id: "C", text: "Er verschiebt sich um 3 Tage", rationale: "Die Verzögerung beträgt 2 Tage und wird vom Puffer aufgefangen, nicht hinzuaddiert." },
          { id: "D", text: "Er verschiebt sich um 5 Tage", rationale: "Hier wird die Verzögerung zum Puffer addiert, statt die Pfadlängen zu vergleichen." },
        ],
        answer: "B",
        explanation:
          "Der längste Pfad durch den Netzplan ist der kritische Pfad und bestimmt die Projektdauer. Vorgänge auf anderen Pfaden haben Puffer; eine Verzögerung verschiebt den Endtermin nur, wenn sie diesen Puffer übersteigt.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-objectives",
        domain: "d3",
        objective: "4.5.2 Anforderungen und Ziele",
        difficulty: "intermediate",
        question: "Welches Projektziel ist am besten formuliert?",
        options: [
          { id: "A", text: "Die Kundenzufriedenheit so weit wie möglich verbessern", rationale: "Das ist weder spezifisch noch messbar und hat keinen Termin." },
          { id: "B", text: "Das neue CRM-System bald einführen", rationale: "„Bald“ ist kein festgelegter Termin, und es gibt kein messbares Ergebnis." },
          { id: "C", text: "Die Website besser machen", rationale: "„Besser“ lässt sich am Projektende nicht überprüfen." },
          { id: "D", text: "Die durchschnittliche Bearbeitungszeit für Kundenbeschwerden bis zum 30. Juni von 10 auf 5 Arbeitstage senken", rationale: "Richtig. Das Ziel ist spezifisch, messbar und terminiert und kann daher beim Projektabschluss überprüft werden." },
        ],
        answer: "D",
        explanation:
          "Ziele müssen überprüfbar sein; deshalb sind Kriterien wie SMART weit verbreitet. Ein klares Ziel ermöglicht es dem Projekt und seinen Stakeholdern, sich darauf zu einigen, wann das Projekt erfolgreich ist.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-change-control",
        domain: "d3",
        objective: "4.5.10 Planung und Steuerung",
        difficulty: "intermediate",
        question:
          "Mitten im Projekt wünscht sich der Kunde eine zusätzliche Funktion. Das Team könnte sie umsetzen, aber das hätte Auswirkungen auf Kosten und Termine. Was sollte der Projektleiter tun?",
        options: [
          { id: "A", text: "Sie stillschweigend umsetzen, damit der Kunde zufrieden ist", rationale: "Ungesteuerte Ergänzungen führen zu Scope Creep und untergraben die vereinbarte Baseline für Kosten und Zeit." },
          { id: "B", text: "Nach Freigabe des Plans alle Änderungen ablehnen", rationale: "Änderungen sind in Projekten normal; Ziel ist es, sie zu steuern, nicht sie zu verbieten." },
          { id: "C", text: "Die Auswirkungen auf Leistungsumfang, Kosten, Termine und Risiken bewerten und über den vereinbarten Änderungsprozess zur Entscheidung vorlegen", rationale: "Richtig. Ein gesteuerter Änderungsprozess macht die Folgen sichtbar und lässt das befugte Gremium entscheiden, bevor die Baseline angepasst wird." },
          { id: "D", text: "Das Team allein entscheiden lassen, ob die Funktion aufgenommen wird", rationale: "Das Team kann den Aufwand schätzen, aber die Freigabe von Änderungen an der Baseline ist Sache des befugten Gremiums." },
        ],
        answer: "C",
        explanation:
          "Zu Planung und Steuerung gehört das Management von Änderungen gegenüber einer vereinbarten Baseline. Eine Auswirkungsanalyse mit anschließender formaler Entscheidung hält Leistungsumfang, Kosten und Termine konsistent und für alle Stakeholder transparent.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-project-design-approach",
        domain: "d3",
        objective: "4.5.1 Projektdesign",
        difficulty: "intermediate",
        question:
          "Zu Projektbeginn kann der Kunde die Anforderungen nur grob beschreiben und erwartet, dass sie sich ändern, ist aber bereit, alle zwei Wochen Feedback zu geben. Welches Vorgehen passt beim Projektdesign am besten?",
        options: [
          { id: "A", text: "Ein iteratives, agiles Vorgehen, das in kurzen Zyklen liefert und sich am Feedback ausrichtet", rationale: "Richtig. Projektdesign heißt, ein Vorgehen zu wählen, das zum Kontext des Projekts passt; unsichere, sich ändernde Anforderungen und regelmäßiges Feedback sprechen für iteratives Liefern." },
          { id: "B", text: "Ein streng sequenzielles Vorgehen, das alle Anforderungen vor Arbeitsbeginn im Detail festlegt", rationale: "Anforderungen im Detail festzulegen, ist schwierig, solange sie unklar sind und sich ändern werden, und führt zu häufiger Nacharbeit." },
          { id: "C", text: "Ohne vereinbartes Vorgehen starten, damit das Team flexibel bleibt", rationale: "Auch Flexibilität braucht ein bewusst gewähltes Vorgehen, Rollen und Regeln; ohne sie entsteht Chaos." },
          { id: "D", text: "Dasselbe Vorgehen wie im letzten Projekt verwenden, um Zeit bei Entscheidungen zu sparen", rationale: "Das Vorgehen sollte für den aktuellen Kontext gewählt und nicht von einem Projekt mit anderen Bedingungen übernommen werden." },
        ],
        answer: "A",
        explanation:
          "Beim Projektdesign wird das Projekt auf seinen Kontext zugeschnitten, einschließlich Vorgehen, Erfolgskriterien und wichtiger Weichenstellungen zu Beginn. Sind die Anforderungen unsicher, verringern kurze Zyklen mit regelmäßigem Feedback das Risiko, das Falsche zu bauen.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-responsibility-matrix",
        domain: "d3",
        objective: "4.5.5 Organisation, Information und Dokumentation",
        difficulty: "foundation",
        question:
          "In deinem Projekt gibt es immer wieder Unklarheit darüber, wer ein Lieferobjekt freigeben muss, wer konsultiert werden soll und wer nur informiert werden muss. Welches Werkzeug hilft am meisten, das zu klären?",
        options: [
          { id: "A", text: "Ein Balkenplan (Gantt-Diagramm)", rationale: "Ein Balkenplan zeigt Vorgänge im Zeitverlauf, nicht, wer welche Rolle dabei hat." },
          { id: "B", text: "Ein Risikoregister", rationale: "Ein Risikoregister erfasst Risiken und Maßnahmen, keine Verantwortlichkeiten für Lieferobjekte." },
          { id: "C", text: "Eine Kostenbaseline", rationale: "Eine Kostenbaseline zeigt geplante Kosten im Zeitverlauf, keine Rollen und Entscheidungsbefugnisse." },
          { id: "D", text: "Eine Verantwortlichkeitsmatrix, etwa eine RACI-Matrix", rationale: "Richtig. Eine Verantwortlichkeitsmatrix ordnet für jede Aufgabe oder jedes Lieferobjekt Rollen wie durchführend (Responsible), verantwortlich (Accountable), konsultiert (Consulted) und informiert (Informed) zu." },
        ],
        answer: "D",
        explanation:
          "Das Element Organisation, Information und Dokumentation umfasst Projektrollen, Verantwortlichkeiten und den Informationsfluss. Eine Verantwortlichkeitsmatrix macht diese Rollen ausdrücklich und verhindert Lücken und Überschneidungen.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-quality-prevention",
        domain: "d3",
        objective: "4.5.6 Qualität",
        difficulty: "intermediate",
        question:
          "In deinem Projekt werden viele Fehler erst beim abschließenden Abnahmetest entdeckt, was zu teurer Nacharbeit führt. Welcher Ansatz setzt am besten an der Ursache an?",
        options: [
          { id: "A", text: "Am Projektende einen zweiten, längeren Abnahmetest ergänzen", rationale: "Mehr Tests am Ende finden Fehler weiterhin spät und verhindern sie nicht; die Nacharbeit bleibt teuer." },
          { id: "B", text: "Qualität durch vereinbarte Standards, Reviews und frühe Tests in die Arbeit einbauen", rationale: "Richtig. Fehler durch Qualitätssicherung während des Projekts zu vermeiden, ist günstiger und wirksamer, als sie am Ende zu finden." },
          { id: "C", text: "Die Abnahmekriterien senken, damit weniger Fehler gezählt werden", rationale: "Gesenkte Kriterien verdecken das Problem und gefährden die Zufriedenheit des Kunden." },
          { id: "D", text: "Den Kunden bitten, die Fehler zu akzeptieren und nach der Übergabe zu beheben", rationale: "Das verlagert das Problem auf den Kunden und verbessert die Arbeitsweise nicht." },
        ],
        answer: "B",
        explanation:
          "Qualitätsmanagement umfasst sowohl die Qualität der Ergebnisse als auch die der Prozesse, die sie hervorbringen. Je später ein Fehler gefunden wird, desto teurer ist er; deshalb ist Vorbeugen während der Arbeit besser als Prüfen am Ende.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-earned-value",
        domain: "d3",
        objective: "4.5.7 Kosten und Finanzierung",
        difficulty: "advanced",
        question:
          "Zum Berichtsstichtag beträgt der Planwert (PV) 100.000 EUR, der Fertigstellungswert (EV) 80.000 EUR und die Ist-Kosten (AC) 100.000 EUR. Wie ist der Projektstatus zu beurteilen?",
        options: [
          { id: "A", text: "Im Budget und im Plan, weil die Ist-Kosten dem Planwert entsprechen", rationale: "Der Vergleich von AC mit PV vermischt Kosten und Termine; maßgeblich ist der Wert der tatsächlich erledigten Arbeit (EV)." },
          { id: "B", text: "Unter Budget und im Terminverzug", rationale: "Die Terminaussage stimmt, aber AC ist höher als EV, das Projekt liegt also über Budget." },
          { id: "C", text: "Über Budget und im Terminverzug", rationale: "Richtig. CPI = EV / AC = 0,8, es wurde also mehr ausgegeben, als die Arbeit wert ist; SPI = EV / PV = 0,8, es wurde also weniger Arbeit erledigt als geplant." },
          { id: "D", text: "Über Budget, aber dem Plan voraus", rationale: "EV ist niedriger als PV, es wurde also weniger Arbeit erledigt als geplant, nicht mehr." },
        ],
        answer: "C",
        explanation:
          "Die Earned-Value-Analyse vergleicht Planwert, Fertigstellungswert und Ist-Kosten. Nur wenn du den Wert der erledigten Arbeit misst, erkennst du, ob ein Projekt über Budget, im Terminverzug oder beides ist.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-resource-levelling",
        domain: "d3",
        objective: "4.5.8 Ressourcen",
        difficulty: "intermediate",
        question:
          "Der Ressourcenplan zeigt, dass eine Datenbankspezialistin in Woche 12 mit 150 % ihrer Kapazität eingeplant ist. Einige ihrer Vorgänge in dieser Woche liegen nicht auf dem kritischen Pfad und haben Puffer. Was ist der beste erste Schritt?",
        options: [
          { id: "A", text: "Ihre nicht kritischen Vorgänge innerhalb ihres Puffers verschieben, um die Auslastung auszugleichen", rationale: "Richtig. Beim Kapazitätsabgleich innerhalb der vorhandenen Puffer (Resource Smoothing) verschwindet die Überlastung, ohne dass sich der Projektendtermin verschiebt." },
          { id: "B", text: "Sie bitten, so lange wie nötig Überstunden zu machen", rationale: "Dauerhafte Überstunden sind eine kurzfristige Notlösung, die das Risiko von Fehlern und Erschöpfung erhöht." },
          { id: "C", text: "Den Projektendtermin sofort um eine Woche verschieben", rationale: "Den Endtermin zu verschieben ist unnötig, solange der Puffer die Überlastung auffangen kann." },
          { id: "D", text: "Den Plan unverändert lassen, weil sich Überlastungen meist von selbst erledigen", rationale: "Eine ungelöste Überlastung macht den Plan unrealistisch und führt zu Verzögerungen." },
        ],
        answer: "A",
        explanation:
          "Die Ressourcenplanung stellt den Bedarf an Ressourcen ihrer Verfügbarkeit gegenüber. Wer Puffer nutzt, um Spitzen auszugleichen, löst Überlastungen, ohne den kritischen Pfad und den Endtermin zu verändern.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-contract-type",
        domain: "d3",
        objective: "4.5.9 Beschaffung",
        difficulty: "advanced",
        question:
          "Du musst ein klar spezifiziertes Softwaremodul bei einem externen Lieferanten einkaufen. Der Leistungsumfang ist stabil, und deine Organisation möchte ihr eigenes Kostenrisiko möglichst gering halten. Welche Vertragsart passt am besten?",
        options: [
          { id: "A", text: "Ein Vertrag nach Aufwand (Time and Materials)", rationale: "Bei Abrechnung nach Aufwand zahlt der Auftraggeber den tatsächlich angefallenen Aufwand, das Kostenrisiko bleibt also bei ihm." },
          { id: "B", text: "Ein Festpreisvertrag", rationale: "Richtig. Beim Festpreis trägt der Lieferant den größten Teil des Kostenrisikos; das funktioniert gut, wenn der Leistungsumfang klar definiert und stabil ist." },
          { id: "C", text: "Ein Selbstkostenerstattungsvertrag mit prozentualem Aufschlag", rationale: "Der Auftraggeber erstattet alle Kosten plus einen Aufschlag, das Kostenrisiko liegt also überwiegend bei ihm." },
          { id: "D", text: "Eine formlose mündliche Absprache", rationale: "Ohne schriftlichen Vertrag lassen sich Leistungsumfang, Preis und Verantwortlichkeiten kaum nachweisen und durchsetzen, was das Risiko erhöht." },
        ],
        answer: "B",
        explanation:
          "Die Wahl der Vertragsart entscheidet darüber, wer das Kostenrisiko trägt. Festpreisverträge passen zu einem stabilen, klar definierten Leistungsumfang, Verträge nach Aufwand zu Arbeiten, deren Umfang noch unklar ist.",
        reference: ICB4,
      },
      {
        id: "ipmad-d3-change-adoption",
        domain: "d3",
        objective: "4.5.13 Change und Transformation",
        difficulty: "foundation",
        question:
          "Dein Projekt hat eine neue Planungssoftware termingerecht und im Budget eingeführt. Drei Monate später nutzen die meisten Mitarbeitenden immer noch ihre alten Tabellen. Was hätte mehr Aufmerksamkeit verdient?",
        options: [
          { id: "A", text: "Eine detailliertere technische Spezifikation der Software", rationale: "Die Software funktioniert; das Problem ist, dass die Menschen sie nicht nutzen, und das ist keine technische Frage." },
          { id: "B", text: "Die neue Software ab dem ersten Tag per Anordnung der Geschäftsleitung verpflichtend machen", rationale: "Eine Anordnung ohne Erklärung und Unterstützung verstärkt oft den Widerstand, statt die Nutzung zu fördern." },
          { id: "C", text: "Die menschliche Seite der Veränderung: das Warum erklären, die Nutzer einbinden, schulen und beim Übergang unterstützen", rationale: "Richtig. Beim Element Change und Transformation geht es darum, Menschen und Organisation dabei zu helfen, die Veränderung anzunehmen, damit der beabsichtigte Nutzen entsteht." },
          { id: "D", text: "Ein schnellerer Projektabschluss, damit das Team zum nächsten Projekt wechseln kann", rationale: "Ein schnellerer Abschluss hätte den Mitarbeitenden nicht geholfen, die neue Arbeitsweise anzunehmen." },
        ],
        answer: "C",
        explanation:
          "Ein Ergebnis zu liefern ist nicht dasselbe, wie die Veränderung zu erreichen. Nutzen entsteht erst, wenn die Menschen die neue Arbeitsweise tatsächlich übernehmen; deshalb gehören Kommunikation, Einbindung und Unterstützung zur Aufgabe des Projekts.",
        reference: ICB4,
      },
    ],
  },
};
