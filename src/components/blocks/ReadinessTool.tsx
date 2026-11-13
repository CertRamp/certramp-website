"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { TestThreshold } from "@/content/course-data/types";
import {
  TESTS,
  bandFor,
  buildPlan,
  daysUntil,
  nextStep,
  overallReading,
  parseDomain,
  parsePercent,
  weakestDomains,
  type Band,
  type DomainInfo,
  type TestNo,
} from "@/lib/readiness";

export interface ToolDomain extends DomainInfo {
  weightLabel: string;
  /** Questions in this domain per test (index 0 = Test 1), when known. */
  perTest?: number[];
}

export interface ToolLink {
  label: string;
  href: string;
}

type Saved = {
  scores: Record<string, string>;
  domains: Record<string, Record<string, string>>;
  notes: Record<string, string>;
  examDate: string;
};

const EMPTY: Saved = { scores: {}, domains: {}, notes: {}, examDate: "" };

const copy = {
  en: {
    stepInputs: "1. Your results",
    inputsIntro: "Enter the overall percentage for each practice test you have taken. You don't need all six.",
    test: "Test",
    testNames: ["Baseline", "Building depth", "Exam readiness", "Exam simulation", "Above exam level", "Final check"],
    overall: "Overall score in %",
    domainToggle: "Add domain results (optional)",
    domainHelp: "Enter correct / total, e.g. 15/20, or the percentage, e.g. 75%.",
    udemyTitle: "Where do I find these values in Udemy?",
    udemy:
      "Open the practice test in your Udemy course and go to its result page (also later, under the test's previous attempts). Udemy shows your overall percentage and, below it, your result per knowledge area. The knowledge areas are the exam domains.",
    notes: "Three concepts I will review before the next test",
    notesPh: "1.\n2.\n3.",
    examDate: "Exam date (optional)",
    errFormat: "Please enter a number, e.g. 72 or 72,5 %.",
    errRange: "Please enter a value between 0 and 100 (for domains: correct must not exceed total).",
    errTotal: "Please enter correct / total, e.g. 15/20.",
    stepResult: "2. Your assessment",
    noData: "Enter at least one test result to see your assessment.",
    disclaimer:
      "This is study guidance based on the CertRamp test ramp, not a prediction and not a guarantee. Official exams are scored by the vendor, often with unpublished pass marks.",
    bands: { "on-track": "On track", developing: "Developing", building: "Building the base" } as Record<Band, string>,
    reading4: {
      "on-track": "Your Test 4 result is in the range we read as on track for exam level. Use Tests 5 and 6 to build a margin.",
      developing: "Your Test 4 result is close to exam level. Close the gaps in your weakest domains, then retake Test 4 or move on to Test 5.",
      building: "Your Test 4 result shows gaps at exam level. Review the explanations of Tests 3 and 4 by domain before you go on.",
    } as Record<Band, string>,
    readingOther: (n: number, band: string) =>
      `You have no exam-level result yet. Your latest result (Test ${n}) reads as "${band}" for that stage. Test 4 gives the most telling reading.`,
    testNotes: {
      1: "Test 1 is a starting point: it shows where you stand, not whether you are ready.",
      2: "Test 2 builds depth across all domains.",
      3: "Test 3 moves towards exam level.",
      4: "Test 4 is written at exam level and is the most telling result.",
      5: "Test 5 is harder than the exam on purpose: a lower score than in Test 4 is expected.",
      6: "Test 6 is the hardest test: a lower score than in Test 4 is expected.",
    } as Record<TestNo, string>,
    chartTitle: "Your results across the six tests",
    chartAlt: "Results as a table",
    threshold: "on-track mark",
    notTaken: "not taken",
    weakTitle: "Weakest domains",
    weakIntro: "Ranked by how much exam weight your gap is worth: (100 % − your score) × official domain weight.",
    weakNone: "Add domain results to a test to see your weakest domains.",
    weakRow: (acc: number, c: number, t: number, w: string) => `${acc}% correct (${c}/${t}) · official weight ${w}`,
    nextTitle: "Recommended next step",
    nextTest: (n: number, name: string) => `Take Test ${n} (${name}).`,
    reviewFirst: (n: number) => `First review the explanations of Test ${n}, especially the questions you missed.`,
    focusFirst: (d: string) => `Start with the domain ${d}.`,
    allDone: "You have taken all six tests. Retake the test with your weakest result after reviewing its explanations.",
    planTitle: "Study plan to exam day",
    planNone: "Add your exam date to get a simple plan.",
    planPast: "This date has passed. Enter your new exam date.",
    planToday: "Your exam is today. No new tests: skim your notes and get some rest.",
    planTight: "You have fewer days than tests left. Prioritise Test 4, then your weakest domain.",
    week: "Week",
    day: "Day",
    takeTests: (t: number[]) => `Take Test ${t.join(" and ")}`,
    review: (d: string) => `Review: ${d}`,
    finalBlock: "Review your notes and your weakest domains. No new test the day before the exam.",
    daysLeft: (d: number) => `${d} days to go`,
    linksTitle: "Keep learning",
    print: "Print or save as PDF",
    reset: "Clear my entries",
    resetConfirm: "Your entries were cleared.",
    saved: "Saved in this browser only. Nothing is sent to us.",
    notSaved: "Your browser does not allow saving: your entries stay until you close the page.",
  },
  de: {
    stepInputs: "1. Deine Ergebnisse",
    inputsIntro: "Trag für jeden Übungstest, den du gemacht hast, das Gesamtergebnis in Prozent ein. Es müssen nicht alle sechs sein.",
    test: "Test",
    testNames: ["Standortbestimmung", "Vertiefung", "Prüfungsnähe", "Prüfungssimulation", "Über Prüfungsniveau", "Abschlusstest"],
    overall: "Gesamtergebnis in %",
    domainToggle: "Ergebnisse je Domain ergänzen (optional)",
    domainHelp: "Trag richtig / gesamt ein, z. B. 15/20, oder den Prozentwert, z. B. 75 %.",
    udemyTitle: "Wo finde ich diese Werte in Udemy?",
    udemy:
      "Öffne den Übungstest in deinem Udemy-Kurs und geh auf die Ergebnisseite (auch später über die bisherigen Versuche des Tests). Udemy zeigt dein Gesamtergebnis in Prozent und darunter dein Ergebnis je Wissensbereich. Die Wissensbereiche sind die Prüfungsdomains.",
    notes: "Drei Konzepte, die ich vor dem nächsten Test wiederhole",
    notesPh: "1.\n2.\n3.",
    examDate: "Prüfungsdatum (optional)",
    errFormat: "Bitte eine Zahl eingeben, z. B. 72 oder 72,5 %.",
    errRange: "Bitte einen Wert zwischen 0 und 100 eingeben (bei Domains: richtig darf nicht größer als gesamt sein).",
    errTotal: "Bitte richtig / gesamt eingeben, z. B. 15/20.",
    stepResult: "2. Deine Einordnung",
    noData: "Trag mindestens ein Testergebnis ein, um deine Einordnung zu sehen.",
    disclaimer:
      "Das ist eine Lernhilfe entlang der CertRamp-Testreihe, keine Vorhersage und keine Garantie. Offizielle Prüfungen bewertet der Anbieter, oft mit unveröffentlichter Bestehensgrenze.",
    bands: { "on-track": "Auf Kurs", developing: "Auf dem Weg", building: "Grundlagen aufbauen" } as Record<Band, string>,
    reading4: {
      "on-track": "Dein Ergebnis in Test 4 liegt in dem Bereich, den wir als auf Kurs für das Prüfungsniveau einordnen. Nutz Test 5 und 6, um Reserve aufzubauen.",
      developing: "Dein Ergebnis in Test 4 liegt nahe am Prüfungsniveau. Schließ die Lücken in deinen schwächsten Domains, dann wiederhol Test 4 oder geh zu Test 5.",
      building: "Dein Ergebnis in Test 4 zeigt Lücken auf Prüfungsniveau. Geh die Erklärungen von Test 3 und 4 nach Domains durch, bevor du weitermachst.",
    } as Record<Band, string>,
    readingOther: (n: number, band: string) =>
      `Du hast noch kein Ergebnis auf Prüfungsniveau. Dein letztes Ergebnis (Test ${n}) ordnen wir für diese Stufe als „${band}“ ein. Am aussagekräftigsten ist Test 4.`,
    testNotes: {
      1: "Test 1 ist eine Standortbestimmung: Er zeigt, wo du stehst, nicht ob du bereit bist.",
      2: "Test 2 vertieft alle Domains.",
      3: "Test 3 führt an das Prüfungsniveau heran.",
      4: "Test 4 entspricht dem Prüfungsniveau und ist am aussagekräftigsten.",
      5: "Test 5 ist bewusst schwerer als die Prüfung: Ein niedrigeres Ergebnis als in Test 4 ist zu erwarten.",
      6: "Test 6 ist der schwerste Test: Ein niedrigeres Ergebnis als in Test 4 ist zu erwarten.",
    } as Record<TestNo, string>,
    chartTitle: "Deine Ergebnisse über die sechs Tests",
    chartAlt: "Ergebnisse als Tabelle",
    threshold: "Marke für „auf Kurs“",
    notTaken: "nicht gemacht",
    weakTitle: "Schwächste Domains",
    weakIntro: "Sortiert danach, wie viel Prüfungsgewicht deine Lücke ausmacht: (100 % − dein Ergebnis) × offizielle Gewichtung.",
    weakNone: "Ergänz bei einem Test die Ergebnisse je Domain, um deine schwächsten Domains zu sehen.",
    weakRow: (acc: number, c: number, t: number, w: string) => `${acc} % richtig (${c}/${t}) · offizielle Gewichtung ${w}`,
    nextTitle: "Empfohlener nächster Schritt",
    nextTest: (n: number, name: string) => `Mach Test ${n} (${name}).`,
    reviewFirst: (n: number) => `Geh zuerst die Erklärungen von Test ${n} durch, vor allem die Fragen, die du falsch hattest.`,
    focusFirst: (d: string) => `Fang mit der Domain ${d} an.`,
    allDone: "Du hast alle sechs Tests gemacht. Wiederhol den Test mit deinem schwächsten Ergebnis, nachdem du seine Erklärungen durchgegangen bist.",
    planTitle: "Lernplan bis zur Prüfung",
    planNone: "Trag dein Prüfungsdatum ein, um einen einfachen Plan zu erhalten.",
    planPast: "Dieses Datum liegt in der Vergangenheit. Trag dein neues Prüfungsdatum ein.",
    planToday: "Deine Prüfung ist heute. Keine neuen Tests: Lies deine Notizen und ruh dich aus.",
    planTight: "Du hast weniger Tage als offene Tests. Mach zuerst Test 4, dann deine schwächste Domain.",
    week: "Woche",
    day: "Tag",
    takeTests: (t: number[]) => `Mach Test ${t.join(" und ")}`,
    review: (d: string) => `Wiederholen: ${d}`,
    finalBlock: "Notizen und schwächste Domains wiederholen. Am Tag vor der Prüfung kein neuer Test.",
    daysLeft: (d: number) => `noch ${d} Tage`,
    linksTitle: "Weiterlernen",
    print: "Drucken oder als PDF speichern",
    reset: "Meine Eingaben löschen",
    resetConfirm: "Deine Eingaben wurden gelöscht.",
    saved: "Nur in diesem Browser gespeichert. Nichts wird an uns gesendet.",
    notSaved: "Dein Browser erlaubt kein Speichern: Deine Eingaben bleiben, bis du die Seite schließt.",
  },
};

const bandTone: Record<Band, string> = {
  "on-track": "bg-success-50 text-success-500 ring-success-500/20",
  developing: "bg-accent-50 text-accent-700 ring-accent-100",
  building: "bg-warn-100 text-warn-600 ring-warn-600/20",
};

function Chart({ scores, th }: { scores: Partial<Record<TestNo, number>>; th: Record<TestNo, TestThreshold> }) {
  const W = 600;
  const H = 220;
  const pad = { l: 36, r: 8, t: 10, b: 28 };
  const cw = (W - pad.l - pad.r) / 6;
  const y = (v: number) => pad.t + (H - pad.t - pad.b) * (1 - v / 100);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden="true">
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} className="stroke-line" strokeWidth={1} />
          <text x={pad.l - 6} y={y(v) + 4} textAnchor="end" className="fill-muted text-[11px]">
            {v}
          </text>
        </g>
      ))}
      {TESTS.map((n, i) => {
        const x = pad.l + i * cw;
        const s = scores[n];
        return (
          <g key={n}>
            {s !== undefined && <rect x={x + cw * 0.22} width={cw * 0.56} y={y(s)} height={y(0) - y(s)} rx={4} className="fill-accent-500" />}
            {s !== undefined && (
              <text x={x + cw / 2} y={y(s) - 5} textAnchor="middle" className="fill-ink text-[12px] font-semibold">
                {Math.round(s)}
              </text>
            )}
            <line x1={x + cw * 0.12} x2={x + cw * 0.88} y1={y(th[n].onTrack)} y2={y(th[n].onTrack)} className="stroke-navy-900" strokeWidth={2} strokeDasharray="5 4" />
            <text x={x + cw / 2} y={H - 8} textAnchor="middle" className="fill-body text-[12px]">
              T{n}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function ReadinessTool({
  slug,
  certName,
  locale,
  domains,
  thresholds,
  links,
  alert,
  otherCerts,
}: {
  slug: string;
  certName: string;
  locale: "en" | "de";
  domains: ToolDomain[];
  thresholds: Record<TestNo, TestThreshold>;
  links: ToolLink[];
  alert?: ReactNode;
  otherCerts?: { slug: string; name: string; href: string }[];
}) {
  const l = copy[locale];
  const key = `certramp:readiness:${slug}`;
  const [s, setS] = useState<Saved>(EMPTY);
  const [storage, setStorage] = useState<"ok" | "blocked" | "unknown">("unknown");
  const [status, setStatus] = useState("");

  // Restore saved entries after mount (localStorage is not available during the static render).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setS({ ...EMPTY, ...(JSON.parse(raw) as Saved) });
      setStorage("ok");
    } catch {
      setStorage("blocked");
    }
  }, [key]);
  /* eslint-enable react-hooks/set-state-in-effect */

  function update(next: Saved) {
    setS(next);
    try {
      window.localStorage.setItem(key, JSON.stringify(next));
      setStorage("ok");
    } catch {
      setStorage("blocked");
    }
  }

  function reset() {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
    setS(EMPTY);
    setStatus(l.resetConfirm);
  }

  const parsed = useMemo(() => {
    const scores: Partial<Record<TestNo, number>> = {};
    const scoreErr: Partial<Record<TestNo, string>> = {};
    const dom: Partial<Record<TestNo, Record<string, { correct: number; total: number } | null>>> = {};
    const domErr: Record<string, string> = {};
    const msg = (e: "format" | "range" | "total") => (e === "format" ? l.errFormat : e === "range" ? l.errRange : l.errTotal);
    for (const n of TESTS) {
      const p = parsePercent(s.scores[n] ?? "");
      if (!p.ok) scoreErr[n] = msg(p.error);
      else if (p.value !== null) scores[n] = p.value;
      for (const d of domains) {
        const raw = s.domains[n]?.[d.id] ?? "";
        const r = parseDomain(raw, d.perTest?.[n - 1]);
        if (!r.ok) domErr[`${n}-${d.id}`] = msg(r.error);
        else if (r.value) (dom[n] ??= {})[d.id] = r.value;
      }
    }
    return { scores, scoreErr, dom, domErr };
  }, [s, domains, l]);

  const taken = TESTS.filter((n) => parsed.scores[n] !== undefined);
  const overall = overallReading(parsed.scores, thresholds);
  const weak = weakestDomains(domains, parsed.dom);
  const next = nextStep(parsed.scores, thresholds);
  const days = s.examDate ? daysUntil(s.examDate) : null;
  const remaining = TESTS.filter((n) => parsed.scores[n] === undefined && (taken.length === 0 || n > Math.max(...taken)));
  const focusNames = (weak.length ? weak.map((w) => w.name) : [...domains].sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0)).map((d) => d.name)).slice(0, 3);
  const plan = days !== null && days > 0 ? buildPlan(days, remaining, focusNames) : [];

  const field = "w-full rounded-lg border border-line-strong bg-white px-3 py-2 text-base outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20";

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      {/* ── Inputs ── */}
      <section aria-labelledby="rc-inputs" className="lg:col-span-6 print:hidden">
        <h2 id="rc-inputs" className="text-2xl font-semibold">{l.stepInputs}</h2>
        <p className="mt-2 text-muted">{l.inputsIntro}</p>
        {otherCerts && otherCerts.length > 1 && (
          <p className="mt-4">
            <label className="text-sm font-semibold text-ink">
              {locale === "de" ? "Zertifizierung" : "Certification"}{" "}
              <select
                className={`${field} mt-1`}
                value={slug}
                onChange={(e) => {
                  const target = otherCerts.find((c) => c.slug === e.target.value);
                  if (target) window.location.href = target.href;
                }}
              >
                {otherCerts.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
          </p>
        )}

        <details className="mt-5 rounded-xl bg-surface p-4 text-sm">
          <summary className="cursor-pointer font-semibold text-ink">{l.udemyTitle}</summary>
          <p className="mt-2 leading-relaxed text-body">{l.udemy}</p>
        </details>

        <ol className="mt-6 space-y-4">
          {TESTS.map((n) => {
            const err = parsed.scoreErr[n];
            const id = `rc-t${n}`;
            return (
              <li key={n} className="rounded-[var(--radius-card)] border border-line bg-white p-5">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <label htmlFor={id} className="font-semibold text-ink">
                    {l.test} {n}: <span className="font-normal text-muted">{l.testNames[n - 1]}</span>
                    <span className="mt-0.5 block text-sm font-normal text-muted">{l.overall}</span>
                  </label>
                  <input
                    id={id}
                    inputMode="decimal"
                    autoComplete="off"
                    value={s.scores[n] ?? ""}
                    onChange={(e) => update({ ...s, scores: { ...s.scores, [n]: e.target.value } })}
                    aria-invalid={Boolean(err)}
                    aria-describedby={err ? `${id}-err` : undefined}
                    className={`${field} max-w-[8rem] text-right`}
                    placeholder={locale === "de" ? "z. B. 72" : "e.g. 72"}
                  />
                </div>
                {err && (
                  <p id={`${id}-err`} className="mt-2 text-sm text-warn-600">
                    {err}
                  </p>
                )}
                <details className="mt-3" open={domains.some((d) => s.domains[n]?.[d.id])}>
                  <summary className="cursor-pointer text-sm font-semibold text-accent-600">{l.domainToggle}</summary>
                  <p className="mt-2 text-sm text-muted">{l.domainHelp}</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {domains.map((d) => {
                      const did = `${id}-${d.id}`;
                      const derr = parsed.domErr[`${n}-${d.id}`];
                      const total = d.perTest?.[n - 1];
                      return (
                        <div key={d.id}>
                          <label htmlFor={did} className="block text-sm text-body" lang="en">
                            {d.name}
                            {total ? <span className="text-muted"> (/{total})</span> : null}
                          </label>
                          <input
                            id={did}
                            autoComplete="off"
                            value={s.domains[n]?.[d.id] ?? ""}
                            onChange={(e) => update({ ...s, domains: { ...s.domains, [n]: { ...(s.domains[n] ?? {}), [d.id]: e.target.value } } })}
                            aria-invalid={Boolean(derr)}
                            aria-describedby={derr ? `${did}-err` : undefined}
                            className={`${field} mt-1`}
                            placeholder={total ? `${Math.round(total * 0.75)}/${total}` : "15/20"}
                          />
                          {derr && (
                            <p id={`${did}-err`} className="mt-1 text-xs text-warn-600">
                              {derr}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </details>
                <label htmlFor={`${id}-notes`} className="mt-4 block text-sm font-semibold text-ink">
                  {l.notes}
                </label>
                <textarea
                  id={`${id}-notes`}
                  rows={3}
                  value={s.notes[n] ?? ""}
                  onChange={(e) => update({ ...s, notes: { ...s.notes, [n]: e.target.value } })}
                  placeholder={l.notesPh}
                  className={`${field} mt-1`}
                />
              </li>
            );
          })}
        </ol>

        <div className="mt-6 rounded-[var(--radius-card)] border border-line bg-white p-5">
          <label htmlFor="rc-date" className="font-semibold text-ink">
            {l.examDate}
          </label>
          <input id="rc-date" type="date" value={s.examDate} onChange={(e) => update({ ...s, examDate: e.target.value })} className={`${field} mt-2 max-w-[14rem]`} />
        </div>

        <p className="mt-4 text-sm text-muted">{storage === "blocked" ? l.notSaved : l.saved}</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="rounded-full px-4 py-2 text-sm font-semibold text-ink ring-1 ring-inset ring-line hover:ring-line-strong">
            {l.reset}
          </button>
          <p className="self-center text-sm text-muted" aria-live="polite">
            {status}
          </p>
        </div>
      </section>

      {/* ── Results ── */}
      <section aria-labelledby="rc-result" className="lg:col-span-6 print:col-span-12">
        <div className="lg:sticky lg:top-24">
          <h2 id="rc-result" className="text-2xl font-semibold">
            {l.stepResult}
            <span className="hidden print:inline">: {certName}</span>
          </h2>
          <p className="mt-3 rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-body" role="note">
            {l.disclaimer}
          </p>

          <div aria-live="polite">
            {taken.length === 0 ? (
              <p className="mt-6 text-muted">{l.noData}</p>
            ) : (
              <>
                {/* Overall reading */}
                {overall.basis && overall.band && (
                  <div className="mt-6 rounded-[var(--radius-card)] border border-line bg-white p-6">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${bandTone[overall.band]}`}>
                      {l.test} {overall.basis}: {l.bands[overall.band]}
                    </span>
                    <p className="mt-3 leading-relaxed text-body">
                      {overall.examLevel ? l.reading4[overall.band] : l.readingOther(overall.basis, l.bands[overall.band])}
                    </p>
                  </div>
                )}

                {/* Progression chart */}
                <figure className="mt-6 rounded-[var(--radius-card)] border border-line bg-white p-5">
                  <figcaption className="text-sm font-semibold text-ink">{l.chartTitle}</figcaption>
                  <div className="mt-3">
                    <Chart scores={parsed.scores} th={thresholds} />
                  </div>
                  <p className="mt-2 flex items-center gap-2 text-xs text-muted">
                    <svg width="24" height="6" aria-hidden="true">
                      <line x1="0" x2="24" y1="3" y2="3" className="stroke-navy-900" strokeWidth={2} strokeDasharray="5 4" />
                    </svg>
                    {l.threshold}
                  </p>
                  <table className="mt-4 w-full text-left text-sm">
                    <caption className="mb-1 text-left text-xs font-semibold text-muted">{l.chartAlt}</caption>
                    <tbody>
                      {TESTS.map((n) => {
                        const v = parsed.scores[n];
                        return (
                          <tr key={n} className="border-t border-line">
                            <th scope="row" className="py-1.5 pr-2 font-semibold text-ink">
                              {l.test} {n}
                            </th>
                            <td className="py-1.5 pr-2 tabular-nums">{v === undefined ? <span className="text-muted">{l.notTaken}</span> : `${v.toLocaleString(locale)} %`}</td>
                            <td className="py-1.5 text-muted">
                              {v === undefined ? "" : `${l.bands[bandFor(n, v, thresholds)]} (${l.threshold}: ${thresholds[n].onTrack} %)`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <ul className="mt-3 space-y-1 text-xs text-muted">
                    {taken.map((n) => (
                      <li key={n}>{l.testNotes[n]}</li>
                    ))}
                  </ul>
                </figure>

                {/* Weakest domains */}
                <div className="mt-6 rounded-[var(--radius-card)] border border-line bg-white p-6">
                  <h3 className="text-lg font-semibold">{l.weakTitle}</h3>
                  {weak.length === 0 ? (
                    <p className="mt-2 text-sm text-muted">{l.weakNone}</p>
                  ) : (
                    <>
                      <p className="mt-1 text-sm text-muted">{l.weakIntro}</p>
                      <ol className="mt-3 space-y-2">
                        {weak.map((w, i) => (
                          <li key={w.id} className={i === 0 ? "font-semibold text-ink" : "text-body"}>
                            <span lang="en">{w.name}</span>
                            <span className="block text-sm font-normal text-muted">
                              {l.weakRow(Math.round(w.accuracy * 100), w.correct, w.total, domains.find((d) => d.id === w.id)?.weightLabel ?? "–")}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </>
                  )}
                </div>

                {/* Next step */}
                <div className="mt-6 rounded-[var(--radius-card)] bg-navy-900 p-6 text-white">
                  <h3 className="text-lg font-semibold text-white">{l.nextTitle}</h3>
                  <ul className="mt-2 space-y-1.5 text-white/80">
                    {next.reviewFirst && <li>{l.reviewFirst(next.reviewFirst)}</li>}
                    {weak[0] && <li>{l.focusFirst(weak[0].name)}</li>}
                    <li>{next.test ? l.nextTest(next.test, l.testNames[next.test - 1]) : l.allDone}</li>
                  </ul>
                </div>
              </>
            )}

            {/* Plan */}
            <div className="mt-6 rounded-[var(--radius-card)] border border-line bg-white p-6">
              <h3 className="text-lg font-semibold">
                {l.planTitle}
                {days !== null && days > 0 && <span className="ml-2 text-sm font-normal text-muted">{l.daysLeft(days)}</span>}
              </h3>
              {days === null ? (
                <p className="mt-2 text-sm text-muted">{l.planNone}</p>
              ) : days < 0 ? (
                <p className="mt-2 text-sm text-warn-600">{l.planPast}</p>
              ) : days === 0 ? (
                <p className="mt-2 text-sm text-body">{l.planToday}</p>
              ) : (
                <>
                  {days < remaining.length + 1 && <p className="mt-2 text-sm text-warn-600">{l.planTight}</p>}
                  <ol className="mt-3 space-y-2 text-[0.9375rem]">
                    {plan.map((b) => (
                      <li key={b.index} className="flex gap-3 border-t border-line pt-2 first:border-0 first:pt-0">
                        <span className="w-20 shrink-0 font-semibold text-ink">
                          {b.unit === "week" ? l.week : l.day} {b.index}
                        </span>
                        <span className="text-body">
                          {b.final
                            ? l.finalBlock
                            : [b.tests.length ? l.takeTests(b.tests) : null, b.focus[0] ? l.review(b.focus[0]) : null].filter(Boolean).join(" · ")}
                        </span>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>

            {/* Notes summary for print */}
            {TESTS.some((n) => s.notes[n]) && (
              <div className="mt-6 hidden rounded-[var(--radius-card)] border border-line p-6 print:block">
                <h3 className="text-lg font-semibold">{l.notes}</h3>
                {TESTS.filter((n) => s.notes[n]).map((n) => (
                  <p key={n} className="mt-2 whitespace-pre-line text-sm">
                    <strong>
                      {l.test} {n}:
                    </strong>{" "}
                    {s.notes[n]}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Links + alert */}
          <div className="mt-6 print:hidden">
            <h3 className="text-lg font-semibold">{l.linksTitle}</h3>
            <ul className="mt-2 space-y-1.5">
              {links.map((k) => (
                <li key={k.href}>
                  <a href={k.href} className="font-semibold text-accent-600 hover:underline">
                    {k.label}
                  </a>
                </li>
              ))}
            </ul>
            {alert}
            <button
              type="button"
              onClick={() => window.print()}
              className="mt-6 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
            >
              {l.print}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
