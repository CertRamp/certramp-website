import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/marketing/Sections";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Placeholder, Val } from "@/components/ui/Placeholder";
import { Section, SectionHeader } from "@/components/ui/Section";
import { about } from "@/config/about";
import { plain } from "@/lib/placeholder";
import { getCatalogueStats } from "@/lib/certifications";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About CertRamp Learning",
  description:
    "CertRamp Learning is an independent exam-preparation brand creating progressive practice exams for IT, project management, cybersecurity and governance certifications.",
  path: "/about",
});

const principles: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "layers",
    title: "Structure over volume",
    body: "A thousand random questions can hide gaps. Six tests in a deliberate order expose them.",
  },
  {
    icon: "target",
    title: "Honest measurement",
    body: "A practice test is only useful if it tells you the truth about your readiness — including when you are not ready yet.",
  },
  {
    icon: "chart",
    title: "Harder than it needs to be",
    body: "We push beyond exam level on purpose, so certification day is not the hardest test you take.",
  },
  {
    icon: "shield",
    title: "Independent by design",
    body: "We have no official role in any certification. We say so clearly, and we never imply otherwise.",
  },
];

export default function AboutPage() {
  const stats = getCatalogueStats();
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About CertRamp"
        title="An independent exam-preparation brand"
        intro="CertRamp Learning creates progressive practice exams for professional certifications in IT, project management, cybersecurity and governance."
      />

      <Section labelledBy="what-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader id="what-title" eyebrow="What we do" title="Practice exams with a plan behind them" className="lg:col-span-5" />
          <div className="space-y-5 text-lg leading-relaxed text-body lg:col-span-7">
            <p>
              CertRamp publishes practice exams on Udemy for {stats.certifications} certifications — from ISACA and PRINCE2
              to Microsoft, AWS, CompTIA and ISTQB — in {stats.languages} languages. This site is the home of the
              brand: the place to find every CertRamp practice exam, and soon to take the CertRamp Exam Simulator
              directly.
            </p>
            <p>
              Every product follows the same idea — six tests that grow with you. You start by finding your level, build
              up to real exam level, then go beyond it.
            </p>
            <div>
              <Val value={about.story} block />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="principles-title">
        <SectionHeader id="principles-title" eyebrow="Principles" title="What we hold ourselves to" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p.title} className="rounded-[var(--radius-card)] border border-line bg-white p-7">
              <Icon name={p.icon} className="size-6 text-accent-600" />
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="not-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader
            id="not-title"
            eyebrow="Transparency"
            title="What CertRamp is not"
            intro="Clear boundaries build trust. Here is exactly what we don't do."
            className="lg:col-span-5"
          />
          <ul className="space-y-3 lg:col-span-7">
            {[
              "We are not a certification body and we do not issue certifications.",
              "We are not affiliated with, endorsed by or sponsored by any certification vendor.",
              "Our practice exams are not official exams and are not official exam questions.",
              "We do not guarantee that you will pass your exam. We help you find out whether you are ready.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-surface text-muted">
                  <Icon name="close" className="size-3.5" />
                </span>
                <span className="leading-relaxed text-body">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface" labelledBy="people-title">
        <SectionHeader id="people-title" eyebrow="The people behind CertRamp" title="Who writes the exams" />
        <div className="mt-12 grid gap-8 rounded-[1.5rem] border border-line bg-white p-7 sm:p-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            {about.founder.photo ? (
              <Image
                src={about.founder.photo}
                alt={plain(about.founder.photoAlt, "Portrait of the CertRamp founder")}
                width={480}
                height={480}
                className="aspect-square w-full max-w-72 rounded-2xl object-cover"
              />
            ) : (
              <div className="grid aspect-square w-full max-w-72 place-items-center rounded-2xl border-2 border-dashed border-warn-600/40 bg-warn-50 p-6 text-center">
                <Placeholder label="Founder photo (optional) — set about.founder.photo" />
              </div>
            )}
          </div>
          <div className="space-y-3 md:col-span-8">
            <p className="font-display text-2xl font-semibold text-ink">
              <Val value={about.founder.name} />
            </p>
            <p className="font-medium text-accent-600">
              <Val value={about.founder.role} />
            </p>
            <div className="leading-relaxed text-muted">
              <Val value={about.founder.bio} block />
            </div>
            <div className="pt-2 text-sm text-muted">
              Based in: <Val value={about.location} />
            </div>
            <div className="text-sm text-muted">
              <Val value={about.udemyNote} block />
            </div>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
