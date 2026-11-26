import { alertsConfig, freeCodesAlertForm } from "@/config/alerts";
import Link from "@/components/ui/Link";

/**
 * Double-opt-in sign-up for "new free access codes" emails. Posts to its own
 * Brevo form and list (consent names this one purpose). public/site.js handles
 * the submit for every form[data-alert-form], same as ExamAlertSignup.
 */
export function FreeCodesSignup({ className }: { className?: string }) {
  if (!alertsConfig.live || !freeCodesAlertForm) return null;
  return (
    <form
      action={freeCodesAlertForm}
      method="post"
      target="_blank"
      rel="noopener"
      data-alert-form
      data-ok="Almost done: please click the confirmation link we just sent you."
      data-err="That did not work. Please check the address and try again."
      className={className ?? "rounded-[var(--radius-card)] border border-line bg-white p-6"}
    >
      <p className="font-display text-lg font-semibold text-ink">Get the next free codes by email</p>
      <p className="mt-1 text-sm text-muted">
        Codes are limited and run out fast. We email you when a new round of free CertRamp access codes is available. Nothing else.
      </p>
      {/* Brevo form fields: honeypot must stay empty; locale sets the language of Brevo's own pages. */}
      <input type="text" name="email_address_check" defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <input type="hidden" name="locale" value="en" />
      <label htmlFor="free-codes-email" className="mt-4 block text-sm font-semibold text-ink">
        Email address
      </label>
      <input id="free-codes-email" name="EMAIL" type="email" required autoComplete="email" className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
      <label className="mt-3 flex items-start gap-2 text-sm text-body">
        <input type="checkbox" required className="mt-1" />
        <span>
          I agree that CertRamp Learning emails me when new free access codes for CertRamp practice exams are available. I can
          unsubscribe at any time with the link in every email. Details in the{" "}
          <Link href="/legal/privacy" className="underline">
            privacy policy
          </Link>
          .
        </span>
      </label>
      <button type="submit" className="mt-4 rounded-full bg-navy-900 px-5 py-2 text-sm font-semibold text-white">
        Subscribe
      </button>
      <p className="mt-2 text-xs text-muted">You will receive an email to confirm your address. No confirmation, no emails.</p>
      <p data-alert-status role="status" aria-live="polite" className="mt-2 text-sm font-semibold text-ink" />
    </form>
  );
}
