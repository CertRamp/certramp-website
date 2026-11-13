import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "@/components/ui/Link";
import { Section } from "@/components/ui/Section";
import { absoluteUrl } from "@/config/site";
import { comparePath } from "@/content/compare";
import { getCertification, type ResolvedCertification } from "@/lib/certifications";
import { formatIsoDate, getAllComparisons, getComparison, t } from "@/lib/course-data";
import { buildMetadata } from "@/lib/seo";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return getAllComparisons().map((c) => ({ id: c.id }));
}
export const dynamicParams = false;

function names(id: string) {
  const c = getComparison(id)!;
  return { c, a: getCertification(c.a.slug)!, b: getCertification(c.b.slug)! };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  if (!getComparison(id)) return {};
  const { c, a, b } = names(id);
  return buildMetadata({
    title: `${a.name} vs ${b.name}: Exam Comparison`,
    description: `${a.name} vs ${b.name} side by side: audience, level, exam topics and weights, format and prerequisites. ${t(c.summary, "en").split(". ")[0]}.`.slice(0, 158),
    path: comparePath(id),
    ogType: "article",
  });
}

const row = (label: string, a: string | undefined, b: string | undefined) => ({ label, a: a ?? "Not published", b: b ?? "Not published" });
const domains = (x: ResolvedCertification) => x.exam?.domains?.map((d) => `${d.name}${d.weight ? ` (${d.weight})` : ""}`).join("; ");

export default async function ComparePage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  if (!getComparison(id)) notFound();
  const { c, a, b } = names(id);
  const ea = a.exam;
  const eb = b.exam;
  const rows = [
    row("Vendor", a.vendorName, b.vendorName),
    row("Official name", ea?.officialName ?? a.fullName, eb?.officialName ?? b.fullName),
    row("Exam code", ea?.examCode, eb?.examCode),
    row("Level", t(c.a.level, "en"), t(c.b.level, "en")),
    row("Who it is for", t(c.a.audience, "en"), t(c.b.audience, "en")),
    row("What it covers", t(c.a.focus, "en"), t(c.b.focus, "en")),
    row("Exam domains (official weight)", domains(a), domains(b)),
    row("Questions", ea?.questionCount, eb?.questionCount),
    row("Duration", ea?.duration, eb?.duration),
    row("Format", ea?.format ?? ea?.questionTypes, eb?.format ?? eb?.questionTypes),
    row("Passing score", ea?.passingScore, eb?.passingScore),
    row("Exam languages", ea?.languages?.join(", "), eb?.languages?.join(", ")),
    row("Delivery", ea?.delivery, eb?.delivery),
    row("Prerequisites", ea?.prerequisites, eb?.prerequisites),
  ];
  const sources = [...(ea?.sources ?? []), ...(eb?.sources ?? [])].filter((s) => s.url);
  const title = `${a.name} vs ${b.name}`;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Practice Exams", path: "/practice-exams" }, { name: title, path: comparePath(id) }]}
        eyebrow="Certification comparison"
        title={title}
        intro={<p>{t(c.summary, "en")}</p>}
      >
        <p className="mt-6 text-sm text-white/60">Facts checked against the official exam pages on {formatIsoDate(c.checked, "en")}.</p>
      </PageHero>

      <Section className="!pt-12">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-[0.9375rem]">
            <caption className="sr-only">{title}: exam facts side by side</caption>
            <thead>
              <tr className="border-b border-line-strong">
                <th scope="col" className="w-1/5 py-3 pr-4 text-sm font-semibold text-muted">
                  <span className="sr-only">Fact</span>
                </th>
                <th scope="col" className="py-3 pr-4 font-display text-lg font-semibold text-ink">{a.name}</th>
                <th scope="col" className="py-3 font-display text-lg font-semibold text-ink">{b.name}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-line align-top">
                  <th scope="row" className="py-3 pr-4 text-sm font-semibold text-muted">{r.label}</th>
                  <td className="py-3 pr-4 leading-relaxed text-body">{r.a}</td>
                  <td className="py-3 leading-relaxed text-body">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            { cert: a, text: t(c.choose.a, "en") },
            { cert: b, text: t(c.choose.b, "en") },
          ].map(({ cert, text }) => (
            <div key={cert.slug} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
              <p className="leading-relaxed text-body">
                <span className="font-semibold text-ink">{cert.name}</span> fits if {text}
              </p>
              <Link href={cert.path} className="mt-4 inline-block font-semibold text-accent-600 hover:underline">
                {cert.name} practice exams
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          This comparison describes the exams as the vendor publishes them; it does not rank vendors or certifications. Exam
          details can change: confirm them on the official pages before you book.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-muted">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener nofollow" className="underline underline-offset-2 hover:text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description: t(c.summary, "en"),
          url: absoluteUrl(comparePath(id)),
          dateModified: c.checked,
          inLanguage: "en",
          publisher: { "@id": `${absoluteUrl("/")}#organization` },
        }}
      />
    </>
  );
}
