import { alertFormFor } from "@/config/alerts";
import Link from "@/components/ui/Link";

const copy = {
  en: {
    title: "Notify me about changes to this exam",
    body: "One email when the official exam changes (new version, new outline, retirement). Nothing else.",
    email: "Email address",
    consent:
      "I agree that CertRamp Learning emails me when the {exam} exam changes. I can unsubscribe at any time with the link in every email. Details in the",
    privacy: "privacy policy",
    submit: "Subscribe",
    doi: "You will receive an email to confirm your address. No confirmation, no emails.",
    ok: "Almost done: please click the confirmation link we just sent you.",
    err: "That did not work. Please check the address and try again.",
  },
  de: {
    title: "Benachrichtige mich bei Änderungen an dieser Prüfung",
    body: "Eine E-Mail, wenn sich die offizielle Prüfung ändert (neue Version, neue Gliederung, Einstellung). Sonst nichts.",
    email: "E-Mail-Adresse",
    consent:
      "Ich willige ein, dass CertRamp Learning mich per E-Mail informiert, wenn sich die Prüfung {exam} ändert. Ich kann mich jederzeit über den Link in jeder E-Mail abmelden. Einzelheiten in der",
    privacy: "Datenschutzerklärung",
    submit: "Anmelden",
    doi: "Du erhältst eine E-Mail, um deine Adresse zu bestätigen. Ohne Bestätigung keine E-Mails.",
    ok: "Fast geschafft: Bitte klick auf den Bestätigungslink, den wir dir gerade geschickt haben.",
    err: "Das hat nicht geklappt. Bitte prüf die Adresse und versuch es erneut.",
  },
} as const;

/**
 * Double-opt-in sign-up posting to the provider's hosted form. Renders nothing
 * until a provider is configured in src/config/alerts.ts.
 */
export function ExamAlertSignup({ slug, exam, locale = "en", className }: { slug: string; exam: string; locale?: "en" | "de"; className?: string }) {
  const action = alertFormFor(slug);
  if (!action) return null;
  const l = copy[locale];
  const id = `alert-${slug}`;
  return (
    <form action={action} method="post" target="_blank" rel="noopener" data-alert-form data-ok={l.ok} data-err={l.err} className={className ?? "rounded-[var(--radius-card)] border border-line bg-white p-6"}>
      <p className="font-display text-lg font-semibold text-ink">{l.title}</p>
      <p className="mt-1 text-sm text-muted">{l.body}</p>
      {/* Brevo form fields: honeypot must stay empty; locale sets the language of Brevo's own pages. */}
      <input type="text" name="email_address_check" defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <input type="hidden" name="locale" value={locale} />
      <label htmlFor={`${id}-email`} className="mt-4 block text-sm font-semibold text-ink">
        {l.email}
      </label>
      <input id={`${id}-email`} name="EMAIL" type="email" required autoComplete="email" className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
      <label className="mt-3 flex items-start gap-2 text-sm text-body">
        <input type="checkbox" required className="mt-1" />
        <span>
          {l.consent.replace("{exam}", exam)}{" "}
          <Link href="/legal/privacy" className="underline">
            {l.privacy}
          </Link>
          .
        </span>
      </label>
      <button type="submit" className="mt-4 rounded-full bg-navy-900 px-5 py-2 text-sm font-semibold text-white">
        {l.submit}
      </button>
      <p className="mt-2 text-xs text-muted">{l.doi}</p>
      <p data-alert-status role="status" aria-live="polite" className="mt-2 text-sm font-semibold text-ink" />
    </form>
  );
}
