import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Val } from "@/components/ui/Placeholder";
import { categoryList } from "@/config/categories";
import { legalNav, mainNav, siteConfig } from "@/config/site";
import { isPlaceholder } from "@/lib/placeholder";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white/65" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block rounded-lg" aria-label="CertRamp Learning — home">
            <Logo invert />
          </Link>
          <p className="mt-5 max-w-xs font-display text-lg font-semibold leading-snug text-white">
            Practice harder.
            <br />
            Enter confident.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Independent, progressive practice exams for professional certifications.
          </p>
        </div>

        <nav aria-label="Practice exams" className="lg:col-span-3">
          <h3 className="font-display text-sm font-semibold tracking-normal text-white">Practice exams</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link className="hover:text-white" href="/practice-exams">
                All practice exams
              </Link>
            </li>
            {categoryList.map((c) => (
              <li key={c.id}>
                <Link className="hover:text-white" href={`/practice-exams#${c.id}`}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h3 className="font-display text-sm font-semibold tracking-normal text-white">CertRamp</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {mainNav
              .filter((i) => i.href !== "/practice-exams")
              .map((i) => (
                <li key={i.href}>
                  <Link className="hover:text-white" href={i.href}>
                    {i.label}
                  </Link>
                </li>
              ))}
            <li>
              {isPlaceholder(siteConfig.contact.email) ? (
                <span className="text-xs">
                  Contact: <Val value={siteConfig.contact.email} />
                </span>
              ) : (
                <a className="hover:text-white" href={`mailto:${siteConfig.contact.email}`}>
                  Contact
                </a>
              )}
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal" className="lg:col-span-3">
          <h3 className="font-display text-sm font-semibold tracking-normal text-white">Legal</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {legalNav.map((i) => (
              <li key={i.href}>
                <Link className="hover:text-white" href={i.href}>
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-8 text-xs leading-relaxed sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-3xl">
            CertRamp Learning is an independent provider of practice exams and exam-preparation material. We are not
            affiliated with, endorsed by or sponsored by any certification body, and we do not issue certifications.
            All certification names and trademarks belong to their respective owners and are used for identification
            only.
          </p>
          <p className="shrink-0">© {year} CertRamp Learning</p>
        </div>
      </div>
    </footer>
  );
}
