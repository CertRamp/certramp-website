import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { AuthorSection } from "@/components/marketing/AuthorSection";
import { getAllGuides, getResources, guidePath, guidesHubPath } from "@/lib/content";
import { deHubPath } from "@/lib/content-de";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Certification Exam Guides & Practice Questions",
  description:
    "Free exam guides with format, domains, study plan and sample questions with explanations for Microsoft, AWS, Cisco, ISACA, IAPP, ISTQB, IREB, IPMA and more.",
  path: guidesHubPath,
});

export default function GuidesHubPage() {
  const items = getAllGuides()
    .slice()
    .sort((a, b) => a.cert.name.localeCompare(b.cert.name, "en"));
  return (
    <div>
      <PageHero
        crumbs={[{ name: "Free Guides", path: guidesHubPath }]}
        eyebrow="Free study material"
        title="Free exam guides"
        intro={
          <p>
            {items.length} guides covering exam format, domains and weights, a study plan and common traps, each with a
            set of free practice questions and explanations. Start here before you take the full practice exams.
          </p>
        }
      >
        <p className="mt-6 text-sm text-white/70">
          Auf Deutsch:{" "}
          <Link href={deHubPath} lang="de" hrefLang="de" className="font-semibold text-white underline underline-offset-2">
            Leitfäden & Übungsfragen
          </Link>
        </p>
      </PageHero>
      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ guide, cert }) => {
            const res = getResources(guide.slug);
            return (
              <li key={guide.slug} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-6">
                <p className="text-sm text-muted">{cert.vendorName}</p>
                <h2 className="mt-1 text-xl font-semibold">{cert.name}</h2>
                <p className="mt-3 line-clamp-4 flex-1 text-[0.9375rem] leading-relaxed text-muted">{guide.summary}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-display text-[0.9375rem] font-semibold">
                  <Link href={guidePath(guide.slug)} className="text-accent-600 hover:underline">
                    Exam guide
                  </Link>
                  {res.questions && (
                    <Link href={res.questions.path} className="text-accent-600 hover:underline">
                      {res.questions.count} free questions
                    </Link>
                  )}
                  <Link href={cert.path} className="text-accent-600 hover:underline">
                    Practice exams
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>
      <AuthorSection tone="surface" location="guides-hub" />
    </div>
  );
}
