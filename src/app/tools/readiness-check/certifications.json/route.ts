import { getAllCourseData } from "@/lib/course-data";
import { getCertification } from "@/lib/certifications";

/**
 * Certifications with a readiness check, for the certification switcher on the
 * tool pages (public/readiness.js loads it once instead of every page carrying
 * the full list). Built once (static export).
 */
export const dynamic = "force-static";

export function GET() {
  const list = getAllCourseData()
    .filter((d) => d.readiness)
    .map((d) => getCertification(d.slug))
    .filter((c) => c !== undefined)
    .map((c) => ({ s: c.slug, n: c.name }))
    .sort((a, b) => a.n.localeCompare(b.n, "en"));
  return Response.json(list);
}
