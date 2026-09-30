import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Trademark / non-affiliation disclaimer, customised per vendor and certification.
 * Required on every certification page. Vendor-specific trademark notices live in
 * src/config/vendors.ts; without one, a neutral attribution is used.
 */
export function VendorDisclaimer({
  vendorName,
  trademarkNotice,
  certificationName,
  note,
  className,
}: {
  vendorName: string;
  trademarkNotice: string | null;
  certificationName: string;
  note?: string | null;
  className?: string;
}) {
  return (
    <aside
      aria-labelledby="disclaimer-heading"
      className={cn("rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-8", className)}
    >
      <div className="flex items-start gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-muted ring-1 ring-line">
          <Icon name="info" className="size-4" />
        </span>
        <div className="space-y-3 text-sm leading-relaxed text-muted">
          <h2 id="disclaimer-heading" className="font-display text-base font-semibold tracking-normal text-ink">
            Independent practice material — disclaimer
          </h2>
          <p>
            CertRamp Learning is an independent provider of practice exams. These {certificationName} practice exams are
            not official exam material and are not affiliated with, endorsed by, sponsored by or approved by {vendorName}.
            CertRamp does not issue certifications, and completing these tests does not grant any certification or
            credential. The official exam is offered only by the certification body or its authorised exam providers.
          </p>
          <p>
            {trademarkNotice ??
              "All certification names, exam codes and logos mentioned on this page are trademarks of their respective owners and are used for identification only."}
          </p>
          {note && <p>{note}</p>}
        </div>
      </div>
    </aside>
  );
}
