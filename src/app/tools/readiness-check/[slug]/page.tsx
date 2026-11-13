import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReadinessView, readinessCopy } from "@/components/blocks/ReadinessView";
import { getCertification } from "@/lib/certifications";
import { getAllCourseData, getCourseData, readinessPath } from "@/lib/course-data";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };
const locale = "en" as const;
const l = readinessCopy[locale];

export function generateStaticParams(): Params[] {
  return getAllCourseData()
    .filter((d) => d.readiness)
    .map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert || !getCourseData(slug)?.readiness) return {};
  return buildMetadata({
    title: l.seoTitle(cert.name),
    description: l.description(cert.name),
    path: readinessPath(slug, locale),
    locale,
    languages: { en: readinessPath(slug, "en"), de: readinessPath(slug, "de") },
  });
}

export default async function ReadinessPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cert = getCertification(slug);
  const data = getCourseData(slug);
  if (!cert || !data?.readiness) notFound();
  return <ReadinessView cert={cert} data={data} locale={locale} />;
}
