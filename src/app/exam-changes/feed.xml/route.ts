import { absoluteUrl, siteConfig } from "@/config/site";
import { getAllCourseData, toTime } from "@/lib/course-data";
import { getCertification } from "@/lib/certifications";
import { examChangesFeedPath, examChangesPath, getExamChanges } from "@/lib/exam-changes";

/** RSS 2.0 feed of the exam change tracker plus per-certification exam watch entries. Built once (static export). */
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc822 = (d: string) => new Date(toTime(d)).toUTCString();

export function GET() {
  const items: { title: string; link: string; guid: string; date: string; description: string }[] = [];
  for (const c of getExamChanges()) {
    items.push({
      title: `${c.vendor} ${c.exam}: ${c.summary}`,
      link: absoluteUrl(`${examChangesPath}#change-${c.id}`),
      guid: `${c.id}@${c.verified}`,
      date: c.verified,
      description: `${c.summary} ${c.candidateAdvice} Official source: ${c.source.label} (${c.source.url})`,
    });
  }
  for (const d of getAllCourseData()) {
    const cert = getCertification(d.slug);
    if (!cert || !d.examWatch) continue;
    for (const e of d.examWatch.entries) {
      items.push({
        title: `${cert.vendorName} ${cert.name}: ${e.summary.en}`,
        link: absoluteUrl(`${cert.path}#watch-title`),
        guid: `${d.slug}-${e.date}`,
        date: e.date,
        description: `${e.summary.en} Official source: ${e.source.label} (${e.source.url})`,
      });
    }
  }
  items.sort((a, b) => toTime(b.date) - toTime(a.date));
  const latest = items[0]?.date ?? new Date().toISOString().slice(0, 10);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(`${siteConfig.name}: IT certification exam changes`)}</title>
<link>${absoluteUrl(examChangesPath)}</link>
<atom:link href="${absoluteUrl(examChangesFeedPath)}" rel="self" type="application/rss+xml"/>
<description>Retirements, replacements, new exam versions and outline updates, each with the official vendor source.</description>
<language>en</language>
<lastBuildDate>${rfc822(latest)}</lastBuildDate>
${items
  .map(
    (i) => `<item>
<title>${esc(i.title)}</title>
<link>${esc(i.link)}</link>
<guid isPermaLink="false">${esc(i.guid)}</guid>
<pubDate>${rfc822(i.date)}</pubDate>
<description>${esc(i.description)}</description>
</item>`,
  )
  .join("\n")}
</channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
