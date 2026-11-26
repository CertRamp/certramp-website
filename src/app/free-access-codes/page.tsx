import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { buttonClasses } from "@/components/ui/Button";
import { TrackedLink } from "@/components/analytics/Tracked";
import { getAllCertifications } from "@/lib/certifications";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

/**
 * Lists every course with an active Udemy coupon (src/config/coupons.ts) at build time.
 * When no coupon is active the page stays reachable but is not indexed.
 */
function activeOffers() {
  return getAllCertifications()
    .flatMap((cert) => cert.courses.filter((c) => c.coupon).map((course) => ({ cert, course, coupon: course.coupon! })))
    .sort((a, b) => a.cert.name.localeCompare(b.cert.name));
}

const offers = activeOffers();
const lastDay = offers.map((o) => o.coupon.lastDay).sort().at(0);

export const metadata: Metadata = buildMetadata({
  title: "Free Practice Exam Access Codes",
  description: offers.length
    ? `Free Udemy access codes for ${offers.length} CertRamp practice exam courses, limited redemptions${lastDay ? ` until ${formatDate(lastDay)}` : ""}. CISSP, CISA, AWS, Microsoft, ISACA and more.`
    : "Free access codes for CertRamp practice exams on Udemy, when available.",
  path: "/free-access-codes",
  noindex: offers.length === 0,
});

export default function FreeAccessCodesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Free access codes", path: "/free-access-codes" }]}
        eyebrow="Free access codes"
        title="Free practice exams, while codes last"
        intro={
          offers.length
            ? `${offers.length} CertRamp courses are free on Udemy right now. Each code works for a limited number of learners${lastDay ? ` until ${formatDate(lastDay)}` : ""}. The code is already in the link.`
            : "There are no free access codes right now. Every course still has a free Test 1 on its practice exam page."
        }
      />
      <Section labelledBy="codes-title">
        <h2 id="codes-title" className="sr-only">
          Courses with a free access code
        </h2>
        {offers.length > 0 ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {offers.map(({ cert, course, coupon }) => (
              <li key={course.id} className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  {cert.vendorName} · {course.languageLabel}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{cert.fullName}</h3>
                <p className="mt-1 text-[0.9375rem] text-muted" lang={course.languageCode}>
                  {course.title}
                </p>
                <p className="mt-4 text-sm text-muted">
                  Code <code className="font-semibold text-ink">{coupon.code}</code>
                  {coupon.maxUses ? ` · first ${coupon.maxUses} learners` : ""} · until {formatDate(coupon.lastDay)}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <TrackedLink
                    href={course.url}
                    external
                    hrefLang={course.languageCode}
                    event="udemy_clicked"
                    eventProps={{ certification: cert.slug, location: "free_codes", language: course.languageCode }}
                    className={buttonClasses("primary", "md")}
                  >
                    Get free access on Udemy
                  </TrackedLink>
                  <Link href={cert.path} className="text-sm font-medium underline underline-offset-2">
                    Exam facts and free Test 1
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <Link href="/practice-exams" className="font-semibold underline underline-offset-2">
              Browse all practice exams
            </Link>
          </p>
        )}
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          If a code no longer works, its redemptions are used up or it has expired; Udemy then shows the regular price. After you have
          worked through the tests, an honest rating on Udemy helps other candidates decide. CertRamp questions are original practice
          questions, not real exam questions.
        </p>
      </Section>
    </>
  );
}
