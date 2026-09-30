import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/marketing/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/ui/FaqList";
import { Section } from "@/components/ui/Section";
import { allGlobalFaqItems, globalFaq } from "@/config/faq";
import { faqSchema } from "@/lib/schema";
import { isVisible } from "@/lib/placeholder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Practice Exams, Access & the Exam Simulator",
  description:
    "Answers about CertRamp practice exams: how the six-test ramp works, official exams vs. practice tests, attempts, explanations, mobile access and Udemy vs. the Exam Simulator.",
  path: "/faq",
});

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function FaqPage() {
  const ld = faqSchema(allGlobalFaqItems());
  // Groups whose answers are all still placeholders are hidden in production.
  const groups = globalFaq.filter((g) => g.items.some((i) => isVisible(i.answer)));
  return (
    <>
      <PageHero
        crumbs={[{ name: "FAQ", path: "/faq" }]}
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="How CertRamp practice exams work, what they are and aren't, and how access works."
      >
        <nav aria-label="FAQ sections" className="mt-8 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a
              key={g.group}
              href={`#${slugify(g.group)}`}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
            >
              {g.group}
            </a>
          ))}
        </nav>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl space-y-16">
          {groups.map((g) => (
            <section key={g.group} id={slugify(g.group)} aria-labelledby={`${slugify(g.group)}-title`}>
              <h2 id={`${slugify(g.group)}-title`} className="text-2xl font-semibold">
                {g.group}
              </h2>
              <FaqList items={g.items} className="mt-6" />
            </section>
          ))}
        </div>
      </Section>

      <FinalCta
        title="Still deciding?"
        body="The quickest answer is Test 1, the diagnostic. Pick your certification and see where you stand."
        primary={{ label: "Explore Practice Exams", href: "/practice-exams" }}
        secondary={{ label: "How CertRamp Works", href: "/how-it-works" }}
      />
      {ld && <JsonLd data={ld} />}
    </>
  );
}
