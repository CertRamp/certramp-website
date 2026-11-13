import { ExamAlertSignup } from "@/components/blocks/ExamAlertSignup";
import Link from "@/components/ui/Link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import type { CourseChangeKind, CourseData } from "@/content/course-data/types";
import { getCertification, type ResolvedCertification } from "@/lib/certifications";
import { comparePath } from "@/content/compare";
import {
  formatIsoDate,
  getComparison,
  getExamWatch,
  glossaryPath,
  questionsMadePath,
  readinessPath,
  sortedChangelog,
  t,
  type Locale,
} from "@/lib/course-data";
import { examChangesPath } from "@/lib/exam-changes";

/* ── Shared helpers ───────────────────────────────────────────────────── */

/** mailto link for reporting a mistake in a question (no form provider needed). */
export function reportErrorHref(certName: string, locale: Locale = "en"): string {
  const subject = locale === "de" ? `Fehler in einer Frage: ${certName}` : `Error in a question: ${certName}`;
  const body =
    locale === "de"
      ? `Kurs: ${certName}\nTest (1–6): \nFragennummer: \nWas ist falsch, und welche Quelle belegt es?\n\n`
      : `Course: ${certName}\nTest (1–6): \nQuestion number: \nWhat is wrong, and which source shows it?\n\n`;
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const kindLabel: Record<CourseChangeKind, { en: string; de: string }> = {
  launch: { en: "Course published", de: "Kurs veröffentlicht" },
  "new-questions": { en: "New questions", de: "Neue Fragen" },
  revision: { en: "Revision", de: "Überarbeitung" },
  correction: { en: "Correction", de: "Korrektur" },
  "exam-version": { en: "New exam version", de: "Neue Prüfungsversion" },
};

const domainName = (cert: ResolvedCertification, id: string) => cert.exam?.domains?.find((d) => d.id === id)?.name ?? id;

/* ── Baustein 1: exam watch on the detail page ────────────────────────── */

export function ExamWatchSection({ cert, tone = "white" }: { cert: ResolvedCertification; tone?: "white" | "surface" }) {
  const w = getExamWatch(cert);
  if (!w.lastChecked && w.entries.length === 0) return null;
  return (
    <Section tone={tone} labelledBy="watch-title" className="!py-16 sm:!py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            id="watch-title"
            eyebrow="Exam changes"
            title={`${cert.name} change log`}
            intro="We check the official sources regularly and record every change to the exam here, even when nothing has changed."
          />
          <p className="mt-6 text-sm">
            <Link href={examChangesPath} className="font-semibold text-accent-600 hover:underline">
              All exam changes across vendors
            </Link>
          </p>
        </div>
        <div className="lg:col-span-7">
          <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2">
            {w.lastChecked && (
              <div className="bg-white p-5">
                <dt className="text-sm text-muted">Last checked</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-ink">
                  <time dateTime={w.lastChecked}>{formatIsoDate(w.lastChecked, "en")}</time>
                </dd>
              </div>
            )}
            {w.examVersion && (
              <div className="bg-white p-5">
                <dt className="text-sm text-muted">Exam version in force</dt>
                <dd className="mt-1 text-[0.9375rem] font-semibold leading-snug text-ink">{t(w.examVersion, "en")}</dd>
              </div>
            )}
          </dl>
          {w.entries.length === 0 ? (
            <p className="mt-5 rounded-xl bg-surface p-4 text-[0.9375rem] text-body">
              No changes to the official exam recorded.
              {w.source && (
                <>
                  {" "}
                  Source:{" "}
                  <a href={w.source.url} target="_blank" rel="noopener nofollow" className="underline underline-offset-2">
                    {w.source.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </>
              )}
            </p>
          ) : (
            <ol className="mt-5 space-y-4">
              {w.entries.map((e) => (
                <li key={`${e.date}-${e.source.url}`} className="rounded-xl border border-line bg-white p-5">
                  <p className="text-sm font-semibold text-accent-600">
                    <time dateTime={e.date}>{formatIsoDate(e.date, "en")}</time>
                  </p>
                  <p className="mt-1 leading-relaxed text-body">{t(e.summary, "en")}</p>
                  <p className="mt-2 text-sm text-muted">
                    Domains affected: {e.domains.length ? e.domains.map((d) => domainName(cert, d)).join(", ") : "whole exam"}
                    {e.examVersion ? ` · Exam version: ${t(e.examVersion, "en")}` : ""}
                  </p>
                  <a href={e.source.url} target="_blank" rel="noopener nofollow" className="mt-2 inline-block text-sm text-muted underline underline-offset-2 hover:text-ink">
                    Official source: {e.source.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  {e.trackerId && (
                    <Link href={`${examChangesPath}#change-${e.trackerId}`} className="ml-4 text-sm font-semibold text-accent-600 hover:underline">
                      What it means for you
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          )}
          <ExamAlertSignup slug={cert.slug} exam={cert.name} className="mt-5 rounded-[var(--radius-card)] border border-line bg-white p-6" />
        </div>
      </div>
    </Section>
  );
}

/* ── Baustein 2: blueprint coverage ───────────────────────────────────── */

export function BlueprintSection({ cert, data, tone = "surface" }: { cert: ResolvedCertification; data: CourseData; tone?: "white" | "surface" }) {
  const bp = data.blueprint;
  const domains = cert.exam?.domains;
  if (!bp || !domains) return null;
  const rows = bp.rows.map((r) => {
    const d = domains.find((x) => x.id === r.domain)!;
    const total = r.perTest.reduce((a, b) => a + b, 0);
    return { ...r, name: d.name, weight: d.weight ?? "–", total };
  });
  const grand = rows.reduce((a, r) => a + r.total, 0);
  const weightNum = (w: string) => Number(w.match(/\d+/)?.[0] ?? 0);
  const hasWeights = rows.every((r) => r.weight !== "–");
  const sameMix = rows.every((r) => r.perTest.every((n) => n === r.perTest[0]));
  return (
    <Section tone={tone} labelledBy="blueprint-title" className="!py-16 sm:!py-20">
      <SectionHeader
        id="blueprint-title"
        eyebrow="Blueprint coverage"
        title={hasWeights ? "How the questions follow the official exam weights" : "How the questions cover the official exam domains"}
        intro={
          hasWeights
            ? `Every practice test mirrors the official ${cert.name} domain weights, so each result tells you something about the whole exam, not just one topic.`
            : `${cert.vendorName} does not publish weights for the ${cert.name} domains, so every practice test spreads its questions evenly across all of them.`
        }
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="overflow-x-auto lg:col-span-7">
          <table className="w-full min-w-[34rem] border-collapse text-left text-[0.9375rem]">
            <caption className="mb-3 text-left text-sm text-muted">
              Questions per domain in Test 1–6. Exam version: {t(bp.examVersion, "en")}. Counted from the live course on{" "}
              {formatIsoDate(bp.counted, "en")}.
            </caption>
            <thead>
              <tr className="border-b border-line-strong text-sm text-muted">
                <th scope="col" className="py-2 pr-3 font-semibold">Domain</th>
                <th scope="col" className="px-2 py-2 text-right font-semibold">Official weight</th>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <th key={n} scope="col" className="px-2 py-2 text-right font-semibold">
                    <abbr title={`Test ${n}`} className="no-underline">T{n}</abbr>
                  </th>
                ))}
                <th scope="col" className="py-2 pl-2 text-right font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.domain} className="border-b border-line">
                  <th scope="row" className="py-3 pr-3 font-semibold text-ink">{r.name}</th>
                  <td className="px-2 py-3 text-right">{r.weight}</td>
                  {r.perTest.map((n, i) => (
                    <td key={i} className="px-2 py-3 text-right tabular-nums">{n}</td>
                  ))}
                  <td className="py-3 pl-2 text-right font-semibold tabular-nums">
                    {r.total} <span className="font-normal text-muted">({Math.round((r.total / grand) * 100)}%)</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <figure className="lg:col-span-5">
          <figcaption className="text-sm font-semibold text-ink">{hasWeights ? "Official weight vs. share of our questions" : "Share of our questions per domain"}</figcaption>
          <ul className="mt-4 space-y-5" aria-hidden="true">
            {rows.map((r) => (
              <li key={r.domain}>
                <p className="text-sm text-body">{r.name}</p>
                <div className="mt-1.5 space-y-1">
                  {hasWeights && (
                    <div className="flex items-center gap-2">
                      <span className="h-3 rounded-sm bg-navy-900" style={{ width: `${weightNum(r.weight) * 2}%` }} />
                      <span className="text-xs text-muted">{r.weight} official</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="h-3 rounded-sm bg-accent-500" style={{ width: `${(r.total / grand) * 200}%` }} />
                    <span className="text-xs text-muted">{Math.round((r.total / grand) * 100)}% of our questions</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="sr-only">
            {rows
              .map((r) => `${r.name}: ${hasWeights ? `official weight ${r.weight}, ` : ""}${Math.round((r.total / grand) * 100)} percent of our questions.`)
              .join(" ")}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {sameMix ? "Each test has the same domain mix" : "Each test has almost the same domain mix (within a question or two)"}, so you can
            compare your domain results from test to test. The difficulty rises from Test 1 to Test 6; the weighting stays the same.
          </p>
        </figure>
      </div>
    </Section>
  );
}

/* ── Baustein 3: course changelog ─────────────────────────────────────── */

export function CourseChangelogSection({ cert, data, tone = "white" }: { cert: ResolvedCertification; data: CourseData; tone?: "white" | "surface" }) {
  const log = sortedChangelog(data);
  if (!log.length) return null;
  return (
    <Section tone={tone} labelledBy="changelog-title" className="!py-16 sm:!py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            id="changelog-title"
            eyebrow="Course updates"
            title="What changed in these practice tests"
            intro={
              <>
                Last updated <time dateTime={log[0].date}>{formatIsoDate(log[0].date, "en")}</time>. Every question is written by
                CertRamp, never taken from exam dumps.
              </>
            }
          />
          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href={questionsMadePath("en")} className="font-semibold text-accent-600 hover:underline">
              How our questions are made
            </Link>
            <a href={reportErrorHref(cert.name)} className="font-semibold text-accent-600 hover:underline">
              Report a mistake in a question
            </a>
          </p>
        </div>
        <ol className="space-y-3 lg:col-span-7">
          {log.map((c, i) => (
            <li key={`${c.date}-${i}`} className="rounded-xl border border-line bg-white p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <time dateTime={c.date} className="text-sm font-semibold text-accent-600">
                  {formatIsoDate(c.date, "en")}
                </time>
                <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-ink ring-1 ring-inset ring-line">
                  {kindLabel[c.kind].en}
                </span>
                <span className="text-sm text-muted">
                  {c.tests.length === 6 ? "All six tests" : `${c.tests.length > 1 ? "Tests" : "Test"} ${c.tests.join(" and ")}`} · {c.questions} questions
                </span>
              </div>
              {c.note && <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">{t(c.note, "en")}</p>}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ── Baustein 5: certification path ───────────────────────────────────── */

function PathList({ items, locale }: { items: NonNullable<CourseData["path"]>["after"]; locale: Locale }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((p) => {
        const cert = p.slug ? getCertification(p.slug) : undefined;
        return (
          <li key={p.name} className="rounded-xl border border-line bg-white p-5">
            <p className="font-semibold text-ink">
              {cert ? (
                <Link href={cert.path} className="hover:underline">
                  {p.code ? `${p.code}: ` : ""}
                  {p.name}
                </Link>
              ) : (
                <a href={p.url} target="_blank" rel="noopener nofollow" className="hover:underline">
                  {p.code ? `${p.code}: ` : ""}
                  {p.name}
                  <span className="sr-only"> ({locale === "de" ? "öffnet in neuem Tab" : "opens in a new tab"})</span>
                </a>
              )}
            </p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{t(p.relation, locale)}</p>
            {cert && (
              <p className="mt-2 text-sm">
                <Link href={cert.path} className="font-semibold text-accent-600 hover:underline">
                  {locale === "de" ? `${cert.name} Übungsprüfungen` : `${cert.name} practice exams`}
                </Link>
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function CertPathSection({ cert, data, tone = "surface" }: { cert: ResolvedCertification; data: CourseData; tone?: "white" | "surface" }) {
  const p = data.path;
  if (!p) return null;
  const compares = (p.compare ?? []).map((id) => getComparison(id)).filter((c) => c !== undefined);
  return (
    <Section tone={tone} labelledBy="path-title" className="!py-16 sm:!py-20">
      <SectionHeader
        id="path-title"
        eyebrow="Certification path"
        title={`What comes before and after ${cert.name}?`}
        intro={p.note ? t(p.note, "en") : undefined}
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Before</h3>
          {p.before.length ? <PathList items={p.before} locale="en" /> : <p className="mt-4 text-[0.9375rem] text-muted">No earlier {cert.vendorName} certification is required.</p>}
          <h3 className="mt-8 text-lg font-semibold">After, at {cert.vendorName}</h3>
          {p.after.length ? (
            <PathList items={p.after} locale="en" />
          ) : (
            <p className="mt-4 text-[0.9375rem] text-muted">{cert.vendorName} defines no follow-on certification for {cert.name}.</p>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">Similar certifications</h3>
          <PathList items={p.similar} locale="en" />
          {compares.length > 0 && (
            <>
              <h3 className="mt-8 text-lg font-semibold">Side-by-side comparisons</h3>
              <ul className="mt-3 space-y-2">
                {compares.map((c) => {
                  const a = getCertification(c.a.slug)!;
                  const b = getCertification(c.b.slug)!;
                  return (
                    <li key={c.id}>
                      <Link href={comparePath(c.id)} className="font-semibold text-accent-600 hover:underline">
                        {a.name} vs {b.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
      <p className="mt-8 text-xs text-muted">
        Source:{" "}
        <a href={p.source.url} target="_blank" rel="noopener nofollow" className="underline underline-offset-2">
          {p.source.label}
        </a>
        , checked {formatIsoDate(p.checked, "en")}.
      </p>
    </Section>
  );
}

/* ── Study tools strip (glossary + readiness check) ───────────────────── */

export function StudyToolsSection({ cert, data, tone = "white" }: { cert: ResolvedCertification; data: CourseData; tone?: "white" | "surface" }) {
  const items = [
    data.readiness && {
      href: readinessPath(cert.slug),
      title: "Readiness check and study planner",
      body: "Enter your practice test results and get an assessment along the six-test ramp, your weakest domains and a plan to exam day.",
      de: readinessPath(cert.slug, "de"),
    },
    data.glossary && {
      href: glossaryPath(cert.slug),
      title: `${cert.name} glossary`,
      body: `${data.glossary.terms.length} exam terms with short definitions, and the German equivalent for learners who study in German and sit the exam in English.`,
      de: glossaryPath(cert.slug, "de"),
    },
  ].filter((x): x is { href: string; title: string; body: string; de: string } => Boolean(x));
  if (!items.length) return null;
  return (
    <Section tone={tone} labelledBy="tools-title" className="!py-16 sm:!py-20">
      <SectionHeader id="tools-title" eyebrow="Free study tools" title={`Tools for your ${cert.name} preparation`} />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <li key={i.href} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
            <h3 className="text-lg font-semibold">
              <Link href={i.href} className="hover:underline">
                {i.title}
              </Link>
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{i.body}</p>
            <p className="mt-3 flex gap-4 text-sm">
              <Link href={i.href} className="font-semibold text-accent-600 hover:underline">
                Open
              </Link>
              <Link href={i.de} hrefLang="de" className="text-muted underline underline-offset-2 hover:text-ink">
                Auf Deutsch
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

