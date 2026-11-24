import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for CompTIA A+ Core 2 (220-1202, V15).
 * Exam facts follow the verified record in src/config/certifications.ts
 * (CompTIA A+ certification page and Core 2 V15 exam page, checked 2026-11-03).
 * The objectives PDF was not reachable, so questions reference the exam domains only.
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const EXAM = {
  label: "CompTIA: A+ Core 2 (V15)",
  url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/",
};

export const comptiaAPlusCore2De: DeContent = {
  slug: "comptia-a-plus-core-2-220-1202",
  name: "CompTIA A+ Core 2 (220-1202)",
  languageNote:
    "CompTIA bietet die Prüfung 220-1202 unter anderem auf Deutsch an. Befehle wie ipconfig, chkdsk oder sfc und viele Menünamen in Windows bleiben trotzdem englisch oder unterscheiden sich je nach Sprachversion; lerne beide Bezeichnungen.",
  facts: [
    { label: "Prüfungsanbieter", value: "CompTIA" },
    { label: "Prüfungscode", value: "220-1202 (A+ V15)" },
    { label: "Fragen", value: "Maximal 90" },
    { label: "Dauer", value: "90 Minuten" },
    { label: "Bestehensgrenze", value: "700 (auf einer Skala von 100 bis 900)" },
    {
      label: "Fragetypen",
      value: "Multiple Choice (eine oder mehrere Antworten), Drag-and-Drop und performancebasierte Aufgaben",
    },
    { label: "Prüfungssprachen", value: "Englisch, Deutsch, Japanisch" },
    {
      label: "Voraussetzungen",
      value: "Keine; CompTIA empfiehlt 12 Monate praktische Erfahrung im IT-Support",
    },
    {
      label: "Zertifizierung",
      value: "Für CompTIA A+ brauchst du Core 1 (220-1201) und Core 2 (220-1202) aus derselben Version (V15)",
    },
  ],
  domains: [
    { id: "d1", name: "Betriebssysteme", weight: "28%" },
    { id: "d2", name: "Sicherheit", weight: "28%" },
    { id: "d3", name: "Fehlerbehebung bei Software", weight: "23%" },
    { id: "d4", name: "Betriebliche Abläufe", weight: "21%" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "comptia-a-plus-core-2-220-1202",
    summary:
      "CompTIA A+ Core 2 (220-1202) ist die zweite Prüfung für die CompTIA-A+-Zertifizierung. Du hast 90 Minuten für maximal 90 Fragen und bestehst mit 700 von 900 Punkten. Betriebssysteme und Sicherheit machen je 28 % aus, Fehlerbehebung bei Software 23 % und betriebliche Abläufe 21 %. Die Prüfung gibt es auch auf Deutsch.",
    whoFor: [
      "Einsteiger in IT-Support, Helpdesk und Service Desk",
      "Auszubildende und Umschüler im IT-Bereich",
      "Alle, die Core 1 bestanden haben und die A+-Zertifizierung abschließen wollen",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung umfasst maximal 90 Fragen in 90 Minuten: Multiple Choice mit einer oder mehreren richtigen Antworten, Drag-and-Drop und performancebasierte Aufgaben (PBQs), in denen du etwa Windows-Einstellungen in einer Simulation vornimmst oder Schritte zur Malware-Entfernung in die richtige Reihenfolge bringst. Bestanden ist ab 700 von 900 Punkten, also etwas höher als bei Core 1 (675).",
          "Core 2 ist stärker auf Software und Abläufe ausgerichtet als Core 1. Du solltest Windows sicher bedienen, die wichtigsten Befehle der Kommandozeile kennen und auch macOS und Linux in Grundzügen beherrschen. Dazu kommen Sicherheitsgrundlagen und professionelles Arbeiten im Support, von Tickets bis zum Änderungsmanagement.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Betriebssysteme (28 %): Windows-Editionen und ihre Unterschiede, Installation und Upgrades, Systemsteuerung und Einstellungen, Verwaltungswerkzeuge wie Task-Manager, Ereignisanzeige, Datenträgerverwaltung und Dienste, Befehle wie ipconfig, ping, chkdsk, sfc, gpupdate und robocopy, außerdem Dateisysteme und Grundlagen zu macOS und Linux.",
          "Sicherheit (28 %): Malware-Arten und ihre Entfernung, Social Engineering, Authentifizierung mit MFA, Windows-Sicherheitsfunktionen wie Defender, Firewall, BitLocker und Benutzerkontensteuerung, WLAN-Sicherheit und Datenvernichtung. Fehlerbehebung bei Software (23 %) umfasst Windows-Probleme, Malware-Symptome und mobile Apps. Betriebliche Abläufe (21 %) decken Dokumentation, Änderungsmanagement, Backups, Arbeitssicherheit, Umweltschutz, Kommunikation und Skripting-Grundlagen ab.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Die Prüfungsziele besorgen",
            body: "Lade auf der CompTIA-Seite zu Core 2 (V15) die Prüfungsziele herunter und hake jedes Thema ab, das du sicher beherrschst.",
          },
          {
            title: "Eine Übungs-VM einrichten",
            body: "Installiere Windows und eine Linux-Distribution in einer virtuellen Maschine. Probiere Befehle, Benutzerverwaltung, Freigaben und Systemwiederherstellung aus, ohne deinen eigenen Rechner zu gefährden.",
          },
          {
            title: "Befehle in einer Tabelle sammeln",
            body: "Notiere zu jedem Befehl Zweck und Beispiel: ipconfig /all, sfc /scannow, chkdsk /f, gpupdate /force, net use, robocopy und unter Linux ls, chmod, sudo, grep und ps.",
          },
          {
            title: "Die Schritte zur Malware-Entfernung lernen",
            body: "CompTIA prüft die Reihenfolge: Symptome erkennen, System isolieren, Systemwiederherstellung deaktivieren, Malware entfernen, Updates und Scans, Systemwiederherstellung wieder aktivieren, Benutzer schulen.",
          },
          {
            title: "Mit Zeitlimit üben",
            body: "Bearbeite vollständige Übungsprüfungen in 90 Minuten und lies zu jeder falschen Antwort die Erklärung. PBQs bearbeitest du am besten am Ende.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Buche die Prüfung, wenn du in mehreren Übungsprüfungen sicher über 80 % liegst. Denke daran, dass Core 2 mit 700 Punkten eine etwas höhere Hürde hat als Core 1.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Nur Windows lernen. macOS- und Linux-Grundlagen kommen regelmäßig vor.",
          "Die Reihenfolge der Malware-Entfernung nicht kennen, besonders wann die Systemwiederherstellung deaktiviert und wieder aktiviert wird.",
          "Windows-Editionen verwechseln: BitLocker, Gruppenrichtlinien-Editor und Domänenbeitritt gibt es nicht in Windows Home.",
          "Betriebliche Abläufe unterschätzen. Fragen zu Änderungsmanagement, Backups, Datenschutz und Kommunikation sind leicht zu holen, wenn man sie gelernt hat.",
          "Bei Social-Engineering-Fragen Phishing, Vishing, Smishing, Tailgating und Shoulder Surfing nicht sauber unterscheiden.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die Prüfung 220-1202?",
        answer: "Maximal 90 Fragen in 90 Minuten, darunter Multiple-Choice-, Drag-and-Drop- und performancebasierte Aufgaben.",
      },
      {
        question: "Wie viele Punkte brauche ich zum Bestehen?",
        answer: "700 Punkte auf einer Skala von 100 bis 900. Bei Core 1 sind es 675.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer: "Ja. CompTIA bietet Core 2 (220-1202) auf Englisch, Deutsch und Japanisch an.",
      },
      {
        question: "Kann ich Core 2 aus V15 mit Core 1 aus einer älteren Version kombinieren?",
        answer: "Nein. Für die A+-Zertifizierung müssen beide Prüfungen aus derselben Version stammen, also 220-1201 und 220-1202.",
      },
      {
        question: "Muss ich Linux und macOS können?",
        answer:
          "In Grundzügen ja. Der Schwerpunkt liegt auf Windows, aber grundlegende Befehle, Werkzeuge und Einstellungen von macOS und Linux gehören zum Prüfungsstoff.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den Prüfungsbereichen von CompTIA erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "CompTIA A+ Core 2 (220-1202) auf Deutsch: Prüfung & Lernplan",
      description:
        "CompTIA A+ Core 2 220-1202 auf Deutsch vorbereiten: maximal 90 Fragen, 90 Minuten, 700 Punkte zum Bestehen, alle vier Bereiche mit Gewichtung und Lernplan.",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "comptia-a-plus-core-2-220-1202",
    intro:
      "30 eigene Übungsfragen zu CompTIA A+ Core 2 (220-1202) aus allen vier Prüfungsbereichen, gewichtet wie in der Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-24",
    updated: "2026-11-24",
    seo: {
      title: "CompTIA A+ 220-1202 Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose CompTIA A+ Core 2 Übungsfragen auf Deutsch: Windows, Linux, Befehle, Malware, Social Engineering und Betriebsabläufe, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Betriebssysteme ────────────────────────────────────── */
      {
        id: "a2-d1-sfc",
        domain: "d1",
        objective: "Bereich 1.0 Betriebssysteme",
        difficulty: "foundation",
        question: "Windows verhält sich instabil, und der Techniker vermutet beschädigte Systemdateien. Welcher Befehl prüft und repariert geschützte Windows-Systemdateien?",
        options: [
          { id: "A", text: "sfc /scannow", rationale: "Richtig. Der System File Checker prüft geschützte Systemdateien und ersetzt beschädigte Versionen." },
          { id: "B", text: "ipconfig /flushdns", rationale: "Dieser Befehl leert den DNS-Cache." },
          { id: "C", text: "gpupdate /force", rationale: "Dieser Befehl wendet Gruppenrichtlinien erneut an." },
          { id: "D", text: "netstat -an", rationale: "netstat zeigt Netzwerkverbindungen und offene Ports." },
        ],
        answer: "A",
        explanation:
          "Reicht sfc nicht aus, kann DISM /Online /Cleanup-Image /RestoreHealth das Windows-Abbild reparieren. chkdsk prüft dagegen das Dateisystem und den Datenträger.",
        reference: EXAM,
      },
      {
        id: "a2-d1-home-edition",
        domain: "d1",
        objective: "Bereich 1.0 Betriebssysteme",
        difficulty: "intermediate",
        question:
          "Ein Kunde möchte seinen neuen Laptop einer Active-Directory-Domäne hinzufügen und BitLocker nutzen. Auf dem Gerät ist Windows 11 Home installiert. Was ist zu tun?",
        options: [
          { id: "A", text: "Nur die Netzwerkeinstellungen ändern", rationale: "Die Netzwerkkonfiguration allein schaltet die fehlenden Funktionen nicht frei." },
          { id: "B", text: "Ein Upgrade auf Windows 11 Pro durchführen", rationale: "Richtig. Domänenbeitritt, BitLocker und der Gruppenrichtlinien-Editor sind in der Home-Edition nicht enthalten, wohl aber in Pro." },
          { id: "C", text: "Den Laptop über Bluetooth mit dem Domänencontroller koppeln", rationale: "Ein Domänenbeitritt erfolgt nicht über Bluetooth." },
          { id: "D", text: "Den Benutzer zum lokalen Administrator machen", rationale: "Administratorrechte ändern nichts an den Funktionen der Edition." },
        ],
        answer: "B",
        explanation:
          "Windows Home ist für Privatanwender gedacht. Pro, Enterprise und Education bieten Unternehmensfunktionen wie Domänenbeitritt, BitLocker, Remotedesktop-Host und Gruppenrichtlinien.",
        reference: EXAM,
      },
      {
        id: "a2-d1-ntfs",
        domain: "d1",
        objective: "Bereich 1.0 Betriebssysteme",
        difficulty: "foundation",
        question: "Welches Dateisystem ist der Standard für die Systempartition von Windows und unterstützt Dateiberechtigungen und Verschlüsselung?",
        options: [
          { id: "A", text: "FAT32", rationale: "FAT32 unterstützt keine Dateiberechtigungen und Dateien nur bis 4 GB." },
          { id: "B", text: "ext4", rationale: "ext4 ist ein typisches Linux-Dateisystem." },
          { id: "C", text: "NTFS", rationale: "Richtig. NTFS unterstützt Berechtigungen, Verschlüsselung (EFS), Komprimierung und große Dateien." },
          { id: "D", text: "APFS", rationale: "APFS ist das Dateisystem von macOS." },
        ],
        answer: "C",
        explanation:
          "exFAT eignet sich für USB-Sticks und Speicherkarten, die zwischen Windows und macOS ausgetauscht werden, und unterstützt Dateien über 4 GB.",
        reference: EXAM,
      },
      {
        id: "a2-d1-task-manager",
        domain: "d1",
        objective: "Bereich 1.0 Betriebssysteme",
        difficulty: "foundation",
        question:
          "Ein Benutzer meldet, dass sein PC seit einigen Minuten sehr langsam ist. Mit welchem Werkzeug sieht der Techniker am schnellsten, welcher Prozess CPU und Arbeitsspeicher stark belastet?",
        options: [
          { id: "A", text: "Datenträgerverwaltung", rationale: "Die Datenträgerverwaltung verwaltet Partitionen und Laufwerke." },
          { id: "B", text: "Geräte-Manager", rationale: "Der Geräte-Manager zeigt Hardware und Treiber, aber keine Prozessauslastung." },
          { id: "C", text: "Ereignisanzeige", rationale: "Die Ereignisanzeige zeigt Protokolle, aber keine aktuelle Auslastung einzelner Prozesse." },
          { id: "D", text: "Task-Manager", rationale: "Richtig. Der Task-Manager zeigt laufende Prozesse mit CPU-, Speicher-, Datenträger- und Netzwerkauslastung." },
        ],
        answer: "D",
        explanation:
          "Für genauere Analysen über längere Zeit gibt es den Ressourcenmonitor und die Leistungsüberwachung. Der Task-Manager verwaltet außerdem Autostart-Programme.",
        reference: EXAM,
      },
      {
        id: "a2-d1-linux-chmod",
        domain: "d1",
        objective: "Bereich 1.0 Betriebssysteme",
        difficulty: "intermediate",
        question: "Mit welchem Linux-Befehl ändert ein Administrator die Zugriffsrechte einer Datei, etwa um ein Skript ausführbar zu machen?",
        options: [
          { id: "A", text: "chmod", rationale: "Richtig. chmod ändert die Lese-, Schreib- und Ausführungsrechte, zum Beispiel chmod +x skript.sh." },
          { id: "B", text: "chown", rationale: "chown ändert den Besitzer einer Datei, nicht die Rechte." },
          { id: "C", text: "grep", rationale: "grep durchsucht Text nach Mustern." },
          { id: "D", text: "pwd", rationale: "pwd zeigt das aktuelle Verzeichnis an." },
        ],
        answer: "A",
        explanation:
          "Weitere wichtige Linux-Befehle: ls, cd, cp, mv, rm, sudo, apt bzw. dnf, ps, top, ip, df, nano. sudo führt Befehle mit erhöhten Rechten aus.",
        reference: EXAM,
      },
      {
        id: "a2-d1-macos-time-machine",
        domain: "d1",
        objective: "Bereich 1.0 Betriebssysteme",
        difficulty: "foundation",
        question: "Welches integrierte macOS-Werkzeug erstellt automatische, regelmäßige Backups auf ein externes Laufwerk?",
        options: [
          { id: "A", text: "Spotlight", rationale: "Spotlight ist die Suchfunktion von macOS." },
          { id: "B", text: "FileVault", rationale: "FileVault verschlüsselt das Startvolume, erstellt aber keine Backups." },
          { id: "C", text: "Time Machine", rationale: "Richtig. Time Machine sichert das System automatisch und ermöglicht die Wiederherstellung einzelner Dateien oder des ganzen Systems." },
          { id: "D", text: "Mission Control", rationale: "Mission Control zeigt offene Fenster und Schreibtische." },
        ],
        answer: "C",
        explanation:
          "Weitere macOS-Werkzeuge: Festplattendienstprogramm, Schlüsselbund für Kennwörter, Terminal, Aktivitätsanzeige als Gegenstück zum Task-Manager.",
        reference: EXAM,
      },
      {
        id: "a2-d1-upgrade-path",
        domain: "d1",
        objective: "Bereich 1.0 Betriebssysteme",
        difficulty: "intermediate",
        question:
          "Ein älterer PC soll von Windows 10 auf Windows 11 aktualisiert werden, das Upgrade wird aber verweigert. Welche Hardwarevoraussetzung fehlt am häufigsten?",
        options: [
          { id: "A", text: "Eine optische Laufwerkseinheit", rationale: "Windows 11 setzt kein optisches Laufwerk voraus." },
          { id: "B", text: "Eine dedizierte Grafikkarte", rationale: "Eine integrierte Grafik mit DirectX-12-Unterstützung genügt." },
          { id: "C", text: "Eine kabelgebundene Netzwerkkarte", rationale: "Eine kabelgebundene Netzwerkkarte ist keine Voraussetzung." },
          { id: "D", text: "TPM 2.0 und UEFI mit Secure Boot oder eine unterstützte CPU", rationale: "Richtig. Viele ältere PCs scheitern an TPM 2.0, Secure-Boot-Fähigkeit oder einer nicht unterstützten CPU." },
        ],
        answer: "D",
        explanation:
          "Windows 11 verlangt unter anderem eine kompatible 64-Bit-CPU, mindestens 4 GB RAM, 64 GB Speicher, UEFI mit Secure Boot und TPM 2.0. Oft ist TPM nur im UEFI deaktiviert.",
        reference: EXAM,
      },
      {
        id: "a2-d1-robocopy",
        domain: "d1",
        objective: "Bereich 1.0 Betriebssysteme",
        difficulty: "intermediate",
        question:
          "Ein Techniker soll einen großen Ordner mit allen Unterordnern und Berechtigungen auf einen neuen Dateiserver kopieren und den Vorgang bei Abbruch fortsetzen können. Welcher Windows-Befehl eignet sich am besten?",
        options: [
          { id: "A", text: "copy", rationale: "copy kopiert einzelne Dateien und keine Verzeichnisbäume mit Berechtigungen." },
          { id: "B", text: "robocopy", rationale: "Richtig. robocopy kopiert ganze Verzeichnisbäume robust, mit Berechtigungen, Wiederaufnahme und Protokollierung." },
          { id: "C", text: "format", rationale: "format formatiert Datenträger und löscht dabei Daten." },
          { id: "D", text: "diskpart", rationale: "diskpart verwaltet Partitionen und Datenträger." },
        ],
        answer: "B",
        explanation:
          "robocopy (Robust File Copy) unterstützt Spiegelung, Wiederholungsversuche und das Kopieren von NTFS-Berechtigungen, etwa mit /E, /COPYALL und /Z.",
        reference: EXAM,
      },

      /* ── Bereich 2: Sicherheit ─────────────────────────────────────────── */
      {
        id: "a2-d2-phishing",
        domain: "d2",
        objective: "Bereich 2.0 Sicherheit",
        difficulty: "foundation",
        question:
          "Ein Mitarbeiter erhält eine SMS angeblich von seiner Bank mit einem Link, über den er sein Konto „sofort bestätigen“ soll. Wie nennt man diese Angriffsform?",
        options: [
          { id: "A", text: "Tailgating", rationale: "Tailgating bedeutet, einer berechtigten Person durch eine Zugangstür zu folgen." },
          { id: "B", text: "Shoulder Surfing", rationale: "Shoulder Surfing ist das Mitlesen über die Schulter." },
          { id: "C", text: "Smishing", rationale: "Richtig. Smishing ist Phishing per SMS." },
          { id: "D", text: "Vishing", rationale: "Vishing ist Phishing per Telefonanruf." },
        ],
        answer: "C",
        explanation:
          "Phishing (E-Mail), Spear-Phishing (gezielt), Whaling (gegen Führungskräfte), Vishing (Telefon), Smishing (SMS). Gegenmaßnahme ist vor allem die Schulung der Benutzer.",
        reference: EXAM,
      },
      {
        id: "a2-d2-ransomware",
        domain: "d2",
        objective: "Bereich 2.0 Sicherheit",
        difficulty: "foundation",
        question: "Auf einem PC sind plötzlich alle Dokumente verschlüsselt, und eine Meldung fordert eine Zahlung in Kryptowährung. Um welche Malware handelt es sich?",
        options: [
          { id: "A", text: "Ransomware", rationale: "Richtig. Ransomware verschlüsselt Daten und fordert Lösegeld für die Entschlüsselung." },
          { id: "B", text: "Keylogger", rationale: "Ein Keylogger zeichnet Tastatureingaben heimlich auf." },
          { id: "C", text: "Adware", rationale: "Adware blendet unerwünschte Werbung ein." },
          { id: "D", text: "Rootkit", rationale: "Ein Rootkit versteckt sich tief im System, verschlüsselt aber nicht typischerweise Daten." },
        ],
        answer: "A",
        explanation:
          "Der beste Schutz vor Ransomware sind regelmäßige, getrennt aufbewahrte Backups, aktuelle Updates, Endpoint-Schutz und geschulte Benutzer.",
        reference: EXAM,
      },
      {
        id: "a2-d2-mfa",
        domain: "d2",
        objective: "Bereich 2.0 Sicherheit",
        difficulty: "intermediate",
        question: "Welche Kombination ist eine echte Multi-Faktor-Authentifizierung?",
        options: [
          { id: "A", text: "Kennwort und Sicherheitsfrage", rationale: "Beides ist Wissen; das ist nur ein Faktor." },
          { id: "B", text: "Zwei verschiedene Kennwörter", rationale: "Zwei Kennwörter sind beide Wissen, also nur ein Faktor." },
          { id: "C", text: "Fingerabdruck und Gesichtserkennung", rationale: "Beides sind biometrische Merkmale, also derselbe Faktor (Sein)." },
          { id: "D", text: "Kennwort und Einmalcode aus einer Authenticator-App", rationale: "Richtig. Das kombiniert Wissen (Kennwort) mit Besitz (Smartphone mit App)." },
        ],
        answer: "D",
        explanation:
          "Faktoren: etwas, das du weißt (Kennwort, PIN), etwas, das du hast (Token, Smartphone, Smartcard), etwas, das du bist (Biometrie). MFA kombiniert mindestens zwei verschiedene Faktoren.",
        reference: EXAM,
      },
      {
        id: "a2-d2-wpa3",
        domain: "d2",
        objective: "Bereich 2.0 Sicherheit",
        difficulty: "intermediate",
        question: "Ein kleines Büro richtet einen neuen WLAN-Router ein. Welche Einstellung bietet die stärkste Sicherheit?",
        options: [
          { id: "A", text: "WEP", rationale: "WEP gilt seit Langem als gebrochen." },
          { id: "B", text: "WPA3", rationale: "Richtig. WPA3 ist der aktuelle Standard und schützt mit SAE besser gegen das Erraten von Kennwörtern." },
          { id: "C", text: "WPA mit TKIP", rationale: "WPA mit TKIP ist veraltet und unsicher." },
          { id: "D", text: "Offenes Netz mit verborgener SSID", rationale: "Ein verborgener Netzwerkname schützt nicht; ohne Verschlüsselung ist der Verkehr lesbar." },
        ],
        answer: "B",
        explanation:
          "Weitere Maßnahmen: Standardkennwort des Routers ändern, Firmware aktualisieren, WPS deaktivieren und Gäste in ein eigenes Netz trennen.",
        reference: EXAM,
      },
      {
        id: "a2-d2-least-privilege",
        domain: "d2",
        objective: "Bereich 2.0 Sicherheit",
        difficulty: "foundation",
        question:
          "Ein Mitarbeiter der Buchhaltung arbeitet täglich mit einem Konto, das lokale Administratorrechte hat. Welches Sicherheitsprinzip wird dadurch verletzt?",
        options: [
          { id: "A", text: "Prinzip der geringsten Rechte", rationale: "Richtig. Benutzer sollen nur die Rechte haben, die sie für ihre Aufgaben brauchen; Administratorrechte im Alltag erhöhen den Schaden durch Malware." },
          { id: "B", text: "Defense in Depth", rationale: "Defense in Depth beschreibt mehrere Schutzschichten, nicht die Rechtevergabe an einzelne Benutzer." },
          { id: "C", text: "Hochverfügbarkeit", rationale: "Hochverfügbarkeit betrifft die Erreichbarkeit von Systemen." },
          { id: "D", text: "Datenaufbewahrung", rationale: "Datenaufbewahrung regelt, wie lange Daten gespeichert werden." },
        ],
        answer: "A",
        explanation:
          "Für Verwaltungsaufgaben wird ein getrenntes Administratorkonto verwendet. Die Benutzerkontensteuerung (UAC) fragt bei Änderungen nach Bestätigung oder Zugangsdaten.",
        reference: EXAM,
      },
      {
        id: "a2-d2-data-destruction",
        domain: "d2",
        objective: "Bereich 2.0 Sicherheit",
        difficulty: "intermediate",
        question:
          "Alte Festplatten mit Kundendaten sollen entsorgt werden. Das Unternehmen braucht einen Nachweis, dass die Daten nicht wiederherstellbar sind. Was ist die beste Lösung?",
        options: [
          { id: "A", text: "Die Dateien löschen und den Papierkorb leeren", rationale: "Gelöschte Dateien lassen sich oft mit einfachen Werkzeugen wiederherstellen." },
          { id: "B", text: "Eine Schnellformatierung durchführen", rationale: "Bei einer Schnellformatierung bleiben die Daten physisch erhalten." },
          { id: "C", text: "Eine zertifizierte Vernichtung, etwa durch Schreddern, mit Vernichtungsnachweis", rationale: "Richtig. Ein zertifizierter Dienstleister zerstört die Laufwerke physisch und stellt ein Zertifikat als Nachweis aus." },
          { id: "D", text: "Die Laufwerke in einem Schrank aufbewahren", rationale: "Aufbewahren ist keine Vernichtung; die Daten bleiben lesbar." },
        ],
        answer: "C",
        explanation:
          "Methoden: Überschreiben oder Secure Erase (zur Wiederverwendung), Entmagnetisieren (nur Magnetplatten), physische Zerstörung wie Schreddern, Bohren oder Verbrennen. Externe Dienstleister liefern einen Vernichtungsnachweis.",
        reference: EXAM,
      },
      {
        id: "a2-d2-firewall",
        domain: "d2",
        objective: "Bereich 2.0 Sicherheit",
        difficulty: "intermediate",
        question:
          "Ein neues Buchhaltungsprogramm auf einem Windows-PC muss Verbindungen über einen bestimmten Port annehmen. Wo richtet der Techniker das am gezieltesten ein?",
        options: [
          { id: "A", text: "Im Geräte-Manager", rationale: "Der Geräte-Manager verwaltet Hardware und Treiber, keine Netzwerkregeln." },
          { id: "B", text: "In der Datenträgerverwaltung", rationale: "Die Datenträgerverwaltung hat mit Netzwerkzugriff nichts zu tun." },
          { id: "C", text: "Durch vollständiges Deaktivieren der Windows-Firewall", rationale: "Das öffnet alle Ports und schwächt die Sicherheit unnötig." },
          { id: "D", text: "Mit einer eingehenden Regel in der Windows Defender Firewall für diesen Port oder dieses Programm", rationale: "Richtig. Eine gezielte Ausnahme erlaubt nur den benötigten Verkehr." },
        ],
        answer: "D",
        explanation:
          "In der Windows Defender Firewall mit erweiterter Sicherheit lassen sich eingehende und ausgehende Regeln nach Programm, Port, Protokoll und Netzwerkprofil definieren.",
        reference: EXAM,
      },
      {
        id: "a2-d2-tailgating",
        domain: "d2",
        objective: "Bereich 2.0 Sicherheit",
        difficulty: "foundation",
        question:
          "Eine unbekannte Person mit vollen Händen bittet einen Mitarbeiter, ihr die gesicherte Tür zum Serverraum aufzuhalten. Welche Maßnahme verhindert solche Angriffe am wirksamsten?",
        options: [
          { id: "A", text: "Ein stärkeres WLAN-Kennwort", rationale: "Das WLAN-Kennwort schützt nicht vor physischem Zutritt." },
          { id: "B", text: "Eine Zutrittsschleuse (Access Control Vestibule) und Schulung der Mitarbeiter", rationale: "Richtig. Eine Schleuse lässt nur eine Person durch, und geschulte Mitarbeiter halten Unbekannten keine gesicherten Türen auf." },
          { id: "C", text: "Ein Virenscanner auf allen PCs", rationale: "Ein Virenscanner schützt nicht vor unbefugtem Betreten." },
          { id: "D", text: "Längere Kennwörter für Benutzerkonten", rationale: "Kennwörter schützen keine physischen Bereiche." },
        ],
        answer: "B",
        explanation:
          "Physische Sicherheit umfasst Ausweise, Schlösser, Zutrittsschleusen, Videoüberwachung, Sicherheitspersonal und Besucherprotokolle.",
        reference: EXAM,
      },

      /* ── Bereich 3: Fehlerbehebung bei Software ────────────────────────── */
      {
        id: "a2-d3-malware-steps",
        domain: "d3",
        objective: "Bereich 3.0 Fehlerbehebung bei Software",
        difficulty: "intermediate",
        question:
          "Ein Techniker hat die Symptome einer Malware-Infektion bestätigt und den PC vom Netzwerk getrennt. Was ist laut CompTIA-Vorgehen der nächste Schritt?",
        options: [
          { id: "A", text: "Die Systemwiederherstellung in Windows deaktivieren", rationale: "Richtig. So wird verhindert, dass Malware in Wiederherstellungspunkten überlebt und später zurückkehrt." },
          { id: "B", text: "Den Benutzer schulen", rationale: "Die Schulung ist der letzte Schritt." },
          { id: "C", text: "Einen neuen Wiederherstellungspunkt erstellen", rationale: "Ein Wiederherstellungspunkt wird erst nach der Bereinigung erstellt." },
          { id: "D", text: "Den PC sofort wieder ans Netz anschließen", rationale: "Das würde die Malware erneut verbreiten können." },
        ],
        answer: "A",
        explanation:
          "Ablauf: 1. Symptome untersuchen und bestätigen, 2. infiziertes System isolieren, 3. Systemwiederherstellung deaktivieren, 4. Malware entfernen (Updates, Scans), 5. Scans und Updates planen, 6. Systemwiederherstellung aktivieren und Wiederherstellungspunkt erstellen, 7. Benutzer schulen.",
        reference: EXAM,
      },
      {
        id: "a2-d3-browser-redirect",
        domain: "d3",
        objective: "Bereich 3.0 Fehlerbehebung bei Software",
        difficulty: "intermediate",
        question:
          "Ein Browser öffnet ständig unerwünschte Werbeseiten, die Startseite wurde geändert, und eine unbekannte Symbolleiste ist erschienen. Was ist die wahrscheinlichste Ursache?",
        options: [
          { id: "A", text: "Ein defekter Arbeitsspeicher", rationale: "RAM-Fehler führen zu Abstürzen, nicht zu gezielten Weiterleitungen." },
          { id: "B", text: "Ein falsch eingestelltes Standard-Gateway", rationale: "Dann würde gar keine Internetverbindung funktionieren." },
          { id: "C", text: "Eine abgelaufene Windows-Lizenz", rationale: "Eine Lizenzwarnung ändert nicht die Startseite des Browsers." },
          { id: "D", text: "Adware oder ein Browser-Hijacker, oft über eine unerwünschte Erweiterung", rationale: "Richtig. Solche Symptome deuten auf schädliche Erweiterungen oder Adware hin." },
        ],
        answer: "D",
        explanation:
          "Abhilfe: Erweiterungen prüfen und entfernen, Browser zurücksetzen, einen Malware-Scan durchführen und die Proxy- und DNS-Einstellungen kontrollieren.",
        reference: EXAM,
      },
      {
        id: "a2-d3-safe-mode",
        domain: "d3",
        objective: "Bereich 3.0 Fehlerbehebung bei Software",
        difficulty: "intermediate",
        question:
          "Nach der Installation eines neuen Grafiktreibers startet Windows nur noch mit schwarzem Bildschirm. Welcher erste Schritt ist am sinnvollsten?",
        options: [
          { id: "A", text: "Die Festplatte formatieren und Windows neu installieren", rationale: "Das ist unverhältnismäßig und führt zu Datenverlust." },
          { id: "B", text: "Im abgesicherten Modus starten und den Treiber zurücksetzen oder deinstallieren", rationale: "Richtig. Der abgesicherte Modus lädt nur Standardtreiber; im Geräte-Manager lässt sich der vorherige Treiber wiederherstellen." },
          { id: "C", text: "Die CMOS-Batterie austauschen", rationale: "Die CMOS-Batterie hat mit einem Treiberproblem nichts zu tun." },
          { id: "D", text: "Den Monitor gegen einen größeren tauschen", rationale: "Die Ursache ist der Treiber, nicht der Monitor." },
        ],
        answer: "B",
        explanation:
          "Bei Startproblemen helfen die Windows-Wiederherstellungsumgebung, der abgesicherte Modus, die Systemwiederherstellung und die Starthilfe. Erst wenn das nicht hilft, kommt ein Zurücksetzen in Frage.",
        reference: EXAM,
      },
      {
        id: "a2-d3-app-crash-mobile",
        domain: "d3",
        objective: "Bereich 3.0 Fehlerbehebung bei Software",
        difficulty: "foundation",
        question:
          "Eine App auf dem Firmensmartphone stürzt beim Start sofort ab, andere Apps funktionieren. Welcher Schritt sollte zuerst versucht werden?",
        options: [
          { id: "A", text: "Die App schließen erzwingen, aktualisieren oder ihren Cache leeren", rationale: "Richtig. Das sind die einfachsten Schritte, die das Problem oft lösen, ohne Daten zu verlieren." },
          { id: "B", text: "Das Smartphone auf Werkseinstellungen zurücksetzen", rationale: "Ein Zurücksetzen ist der letzte Schritt und löscht alle Daten." },
          { id: "C", text: "Den Akku tauschen", rationale: "Ein Akkuproblem würde nicht nur eine einzelne App betreffen." },
          { id: "D", text: "Den Mobilfunkvertrag wechseln", rationale: "Der Vertrag hat keinen Einfluss auf eine abstürzende App." },
        ],
        answer: "A",
        explanation:
          "Typische Reihenfolge: App beenden, Gerät neu starten, App und Betriebssystem aktualisieren, Cache oder Daten der App löschen, App neu installieren, zuletzt Gerät zurücksetzen.",
        reference: EXAM,
      },
      {
        id: "a2-d3-bsod",
        domain: "d3",
        objective: "Bereich 3.0 Fehlerbehebung bei Software",
        difficulty: "intermediate",
        question:
          "Ein PC zeigt seit einigen Tagen gelegentlich einen Bluescreen. Wo findet der Techniker in Windows am ehesten Hinweise auf die Ursache und den Zeitpunkt der Abstürze?",
        options: [
          { id: "A", text: "In der Datenträgerbereinigung", rationale: "Die Datenträgerbereinigung entfernt temporäre Dateien." },
          { id: "B", text: "In den Anzeigeeinstellungen", rationale: "Dort werden Auflösung und Skalierung eingestellt." },
          { id: "C", text: "In der Ereignisanzeige und der Zuverlässigkeitsüberwachung", rationale: "Richtig. Beide zeigen kritische Fehler, Absturzzeitpunkte und oft das beteiligte Modul oder den Treiber." },
          { id: "D", text: "Im Datei-Explorer unter Downloads", rationale: "Der Downloads-Ordner enthält keine Absturzprotokolle." },
        ],
        answer: "C",
        explanation:
          "Bluescreens werden häufig durch Treiber, fehlerhaften RAM oder Hardwareprobleme verursacht. Speicherabbilder (Dumps) und der Stoppcode helfen bei der Eingrenzung.",
        reference: EXAM,
      },
      {
        id: "a2-d3-certificate-warning",
        domain: "d3",
        objective: "Bereich 3.0 Fehlerbehebung bei Software",
        difficulty: "intermediate",
        question:
          "Auf einem PC zeigen plötzlich alle HTTPS-Websites Zertifikatswarnungen. Bei der Prüfung fällt auf, dass die Uhrzeit des PCs um mehrere Jahre falsch ist. Was ist die wahrscheinlichste Lösung?",
        options: [
          { id: "A", text: "Den Browser deinstallieren", rationale: "Der Browser ist nicht die Ursache; die Prüfung der Zertifikate hängt vom Datum ab." },
          { id: "B", text: "Die Bildschirmauflösung anpassen", rationale: "Die Auflösung hat keinen Einfluss auf Zertifikate." },
          { id: "C", text: "Alle Zertifikatswarnungen im Browser abschalten", rationale: "Das würde echte Warnungen ebenfalls unterdrücken und ist unsicher." },
          { id: "D", text: "Datum und Uhrzeit korrigieren und die Zeitsynchronisierung aktivieren; ggf. die CMOS-Batterie tauschen", rationale: "Richtig. Mit falschem Datum erscheinen gültige Zertifikate als abgelaufen oder noch nicht gültig." },
        ],
        answer: "D",
        explanation:
          "Geht die Uhrzeit nach jedem Ausschalten verloren, ist oft die CMOS-Batterie leer. Zertifikatswarnungen bei korrekter Zeit können dagegen auf Angriffe oder falsch konfigurierte Server hindeuten.",
        reference: EXAM,
      },

      {
        id: "a2-d3-slow-startup",
        domain: "d3",
        objective: "Bereich 3.0 Fehlerbehebung bei Software",
        difficulty: "foundation",
        question:
          "Ein Windows-PC braucht nach der Anmeldung mehrere Minuten, bis er benutzbar ist. Im Infobereich laufen viele Programme, die der Benutzer nicht braucht. Was hilft zuerst?",
        options: [
          { id: "A", text: "Unnötige Autostart-Programme im Task-Manager deaktivieren", rationale: "Richtig. Viele Autostart-Einträge verlängern die Anmeldung; im Task-Manager lassen sie sich einzeln deaktivieren." },
          { id: "B", text: "Die Festplatte in FAT32 umformatieren", rationale: "Das löscht Daten und macht das System nicht schneller." },
          { id: "C", text: "Die Windows-Firewall abschalten", rationale: "Das schwächt die Sicherheit und beschleunigt den Start nicht nennenswert." },
          { id: "D", text: "Den Bildschirmschoner ändern", rationale: "Der Bildschirmschoner hat keinen Einfluss auf die Startzeit." },
        ],
        answer: "A",
        explanation:
          "Bei langsamem Start helfen außerdem Updates, ein Malware-Scan, ausreichend freier Speicherplatz und gegebenenfalls ein Wechsel auf eine SSD.",
        reference: EXAM,
      },

      /* ── Bereich 4: Betriebliche Abläufe ───────────────────────────────── */
      {
        id: "a2-d4-change-management",
        domain: "d4",
        objective: "Bereich 4.0 Betriebliche Abläufe",
        difficulty: "intermediate",
        question:
          "Ein Team möchte am Freitag ein Update auf allen Servern einspielen. Was gehört laut Änderungsmanagement vor der Umsetzung dazu?",
        options: [
          { id: "A", text: "Die Änderung sofort umsetzen und danach dokumentieren", rationale: "Änderungen werden vorher geplant und genehmigt, nicht nachträglich dokumentiert." },
          { id: "B", text: "Ein Änderungsantrag mit Zweck, Umfang, Risikoanalyse, Rückfallplan und Genehmigung", rationale: "Richtig. Ein formaler Antrag mit Rollback-Plan und Genehmigung, etwa durch ein Change Advisory Board, ist Kern des Änderungsmanagements." },
          { id: "C", text: "Nur die Benutzer per E-Mail informieren", rationale: "Information der Benutzer gehört dazu, ersetzt aber nicht Planung, Risikoanalyse und Genehmigung." },
          { id: "D", text: "Die Änderung zuerst auf allen Produktivsystemen testen", rationale: "Getestet wird vorher in einer Testumgebung, nicht auf allen Produktivsystemen." },
        ],
        answer: "B",
        explanation:
          "Zum Änderungsmanagement gehören Antrag, Zweck, Umfang, Risikoanalyse, Test in einer Sandbox, Rückfallplan, Wartungsfenster, Genehmigung, Information der Betroffenen und Dokumentation.",
        reference: EXAM,
      },
      {
        id: "a2-d4-backup-321",
        domain: "d4",
        objective: "Bereich 4.0 Betriebliche Abläufe",
        difficulty: "intermediate",
        question: "Was besagt die 3-2-1-Backup-Regel?",
        options: [
          { id: "A", text: "Drei Backups pro Tag, zwei pro Nacht, eines am Wochenende", rationale: "Die Regel bezieht sich auf Kopien und Speicherorte, nicht auf Zeitpunkte." },
          { id: "B", text: "Drei Administratoren, zwei Kennwörter, ein Server", rationale: "Das hat nichts mit der Backup-Regel zu tun." },
          { id: "C", text: "Drei Kopien der Daten auf zwei verschiedenen Medientypen, eine davon außer Haus", rationale: "Richtig. So schützt man sich gegen Medienausfälle und lokale Katastrophen wie Brand oder Diebstahl." },
          { id: "D", text: "Drei Vollbackups pro Monat, zwei differenzielle, ein inkrementelles", rationale: "Das beschreibt einen Zeitplan, nicht die 3-2-1-Regel." },
        ],
        answer: "C",
        explanation:
          "Backup-Arten: Vollbackup, inkrementell (Änderungen seit dem letzten Backup) und differenziell (Änderungen seit dem letzten Vollbackup). Backups müssen regelmäßig per Wiederherstellungstest geprüft werden.",
        reference: EXAM,
      },
      {
        id: "a2-d4-esd",
        domain: "d4",
        objective: "Bereich 4.0 Betriebliche Abläufe",
        difficulty: "foundation",
        question: "Ein Techniker baut Arbeitsspeicher in einen PC ein. Wie schützt er die Bauteile am besten vor elektrostatischer Entladung (ESD)?",
        options: [
          { id: "A", text: "Ein ESD-Armband tragen, das mit Masse verbunden ist, und auf einer ESD-Matte arbeiten", rationale: "Richtig. So wird statische Ladung kontrolliert abgeleitet, bevor sie Bauteile beschädigt." },
          { id: "B", text: "Den PC eingeschaltet lassen, damit er geerdet ist", rationale: "An eingeschalteten Geräten zu arbeiten ist gefährlich und kann Bauteile beschädigen." },
          { id: "C", text: "Auf einem Teppich arbeiten", rationale: "Teppiche fördern statische Aufladung." },
          { id: "D", text: "Wollhandschuhe tragen", rationale: "Wolle kann statische Ladung erzeugen und bietet keinen Schutz." },
        ],
        answer: "A",
        explanation:
          "Bauteile werden in antistatischen Beuteln aufbewahrt und am Rand angefasst. Vor Arbeiten im Gehäuse wird das Gerät ausgeschaltet und vom Strom getrennt.",
        reference: EXAM,
      },
      {
        id: "a2-d4-battery-disposal",
        domain: "d4",
        objective: "Bereich 4.0 Betriebliche Abläufe",
        difficulty: "foundation",
        question: "Wie werden ausgediente Lithium-Ionen-Akkus aus Notebooks richtig entsorgt?",
        options: [
          { id: "A", text: "Im normalen Hausmüll", rationale: "Akkus gehören nicht in den Hausmüll; sie enthalten Schadstoffe und können Brände auslösen." },
          { id: "B", text: "Durch Verbrennen im Werkstattofen", rationale: "Das ist gefährlich und verboten." },
          { id: "C", text: "Im Altpapier", rationale: "Akkus sind kein Papier und gefährden dort die Entsorgung." },
          { id: "D", text: "Nach den örtlichen Vorschriften über eine Sammelstelle oder ein Recyclingprogramm", rationale: "Richtig. Akkus werden gemäß lokalen Vorschriften und Sicherheitsdatenblättern recycelt." },
        ],
        answer: "D",
        explanation:
          "Für Toner, Akkus und Elektroschrott gelten besondere Entsorgungsvorschriften. Das Sicherheitsdatenblatt (SDB/SDS) gibt Auskunft über Umgang und Entsorgung.",
        reference: EXAM,
      },
      {
        id: "a2-d4-ticket",
        domain: "d4",
        objective: "Bereich 4.0 Betriebliche Abläufe",
        difficulty: "foundation",
        question: "Was gehört in ein gut geführtes Support-Ticket, nachdem ein Problem gelöst wurde?",
        options: [
          { id: "A", text: "Nur der Name des Technikers", rationale: "Der Name allein hilft niemandem, das Problem nachzuvollziehen." },
          { id: "B", text: "Problembeschreibung, durchgeführte Schritte, Lösung und Bestätigung durch den Benutzer", rationale: "Richtig. So können andere den Fall nachvollziehen, und ähnliche Probleme lassen sich schneller lösen." },
          { id: "C", text: "Das Kennwort des Benutzers zur späteren Verwendung", rationale: "Kennwörter dürfen niemals in Tickets gespeichert werden." },
          { id: "D", text: "Eine persönliche Bewertung des Benutzers", rationale: "Persönliche Bewertungen gehören nicht in ein Ticket." },
        ],
        answer: "B",
        explanation:
          "Gute Dokumentation umfasst Kategorie, Priorität, Beschreibung, Fortschrittsnotizen und Abschlussnotizen. Häufige Lösungen werden in einer Wissensdatenbank festgehalten.",
        reference: EXAM,
      },
      {
        id: "a2-d4-script",
        domain: "d4",
        objective: "Bereich 4.0 Betriebliche Abläufe",
        difficulty: "intermediate",
        question: "Welche Dateiendung gehört zu einem Windows-PowerShell-Skript?",
        options: [
          { id: "A", text: ".sh", rationale: ".sh ist die übliche Endung für Shell-Skripte unter Linux und macOS." },
          { id: "B", text: ".py", rationale: ".py ist die Endung für Python-Skripte." },
          { id: "C", text: ".ps1", rationale: "Richtig. PowerShell-Skripte haben die Endung .ps1." },
          { id: "D", text: ".js", rationale: ".js ist die Endung für JavaScript." },
        ],
        answer: "C",
        explanation:
          "Weitere Skripttypen: .bat (Batch), .vbs (VBScript), .sh (Shell), .py (Python), .js (JavaScript). Skripte automatisieren zum Beispiel Backups, Neustarts oder Treiberinstallationen; sie sollten vor dem Einsatz getestet werden.",
        reference: EXAM,
      },
      {
        id: "a2-d4-pii",
        domain: "d4",
        objective: "Bereich 4.0 Betriebliche Abläufe",
        difficulty: "intermediate",
        question:
          "Bei einer Reparatur sieht ein Techniker auf dem Desktop eines Kunden eine geöffnete Tabelle mit Namen, Adressen und Kontonummern. Wie verhält er sich professionell?",
        options: [
          { id: "A", text: "Die Datei zur Sicherheit auf einen eigenen USB-Stick kopieren", rationale: "Das Kopieren fremder personenbezogener Daten ist ein Datenschutzverstoß." },
          { id: "B", text: "Die Datei löschen, damit niemand sie sieht", rationale: "Kundendaten eigenmächtig zu löschen ist nicht seine Aufgabe und kann Schaden anrichten." },
          { id: "C", text: "Den Inhalt mit Kollegen besprechen", rationale: "Vertrauliche Daten dürfen nicht weitergegeben werden." },
          { id: "D", text: "Die Daten nicht ansehen oder weitergeben und nur die beauftragte Arbeit erledigen", rationale: "Richtig. Vertrauliche und personenbezogene Daten werden respektiert; der Techniker greift nur auf das zu, was für den Auftrag nötig ist." },
        ],
        answer: "D",
        explanation:
          "Zu professionellem Verhalten gehören Vertraulichkeit, Pünktlichkeit, klare Kommunikation ohne Fachjargon und das Einhalten von Datenschutzvorgaben wie der DSGVO.",
        reference: EXAM,
      },
    ],
  },
};
