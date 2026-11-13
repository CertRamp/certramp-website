import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlossaryView, glossaryCopy } from "@/components/blocks/GlossaryView";
import { getCertification } from "@/lib/certifications";
import { getAllCourseData, getCourseData, glossaryPath } from "@/lib/course-data";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };
const locale = "en" as const;
const l = glossaryCopy[locale];

export function generateStaticParams(): Params[] {
  return getAllCourseData()
    .filter((d) => d.glossary)
    .map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertification(slug);
  const data = getCourseData(slug);
  if (!cert || !data?.glossary) return {};
  return buildMetadata({
    title: l.seoTitle(cert.name),
    description: l.description(cert.name, data.glossary.terms.length),
    path: glossaryPath(slug, locale),
    locale,
    languages: { en: glossaryPath(slug, "en"), de: glossaryPath(slug, "de") },
  });
}

export default async function GlossaryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cert = getCertification(slug);
  const data = getCourseData(slug);
  if (!cert || !data?.glossary) notFound();
  return <GlossaryView cert={cert} data={data} locale={locale} />;
}
