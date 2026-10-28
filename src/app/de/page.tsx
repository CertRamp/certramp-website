import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { deGuidePath, deHubPath, deQuestionsPath, getAllDe } from "@/lib/content-de";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Prüfungsvorbereitung auf Deutsch: Leitfäden & Übungsfragen",
  description:
    "Kostenlose Prüfungsleitfäden und Übungsfragen mit Lösungen auf Deutsch – für IT-Zertifizierungen von Microsoft, CompTIA, Cisco, IREB, IPMA und mehr.",
  path: deHubPath,
  locale: "de",
});

export default function DeHubPage() {
  const items = getAllDe()
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "de"));
  return (
    <div lang="de">
      <PageHero
        home={{ name: "Start", path: "/" }}
        crumbs={[{ name: "Auf Deutsch", path: deHubPath }]}
        eyebrow="CertRamp auf Deutsch"
        title="Prüfungsvorbereitung auf Deutsch"
        intro={
          <p>
            Leitfäden zu Format, Inhalten und Lernplan sowie kostenlose Übungsfragen mit Lösungen und Erklärungen – für
            Zertifizierungen, zu denen es CertRamp-Übungsprüfungen auf Deutsch gibt.
          </p>
        }
      />
      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ de, name, cert }) => (
            <li key={de.slug} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-6">
              <p className="text-sm text-muted">{cert.vendorName}</p>
              <h2 className="mt-1 text-xl font-semibold">{name}</h2>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">{de.languageNote}</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-display text-[0.9375rem] font-semibold">
                <Link href={deGuidePath(de.slug)} className="text-accent-600 hover:underline">
                  Leitfaden
                </Link>
                <Link href={deQuestionsPath(de.slug)} className="text-accent-600 hover:underline">
                  {de.questions.questions.length} Übungsfragen
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
