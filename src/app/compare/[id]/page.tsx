import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparisonView, comparePathFor } from "@/components/blocks/ComparisonView";
import { getCertification } from "@/lib/certifications";
import { getAllComparisons, getComparison, t } from "@/lib/course-data";
import { buildMetadata } from "@/lib/seo";

type Params = { id: string };
const locale = "en" as const;

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
    description: `${a.name} vs ${b.name} side by side: audience, level, exam topics and weights, format and prerequisites. ${t(c.summary, locale).split(". ")[0]}.`.slice(0, 158),
    path: comparePathFor(id, locale),
    ogType: "article",
    locale,
    languages: { en: comparePathFor(id, "en"), de: comparePathFor(id, "de") },
  });
}

export default async function ComparePage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  if (!getComparison(id)) notFound();
  const { c, a, b } = names(id);
  return <ComparisonView c={c} a={a} b={b} locale={locale} />;
}
