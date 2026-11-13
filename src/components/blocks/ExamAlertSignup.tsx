import { alertsConfig, alertsEnabled } from "@/config/alerts";
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
  },
} as const;

/**
 * Double-opt-in sign-up posting to the provider's hosted form. Renders nothing
 * until a provider is configured in src/config/alerts.ts.
 */
export function ExamAlertSignup({ slug, exam, locale = "en", className }: { slug: string; exam: string; locale?: "en" | "de"; className?: string }) {
  if (!alertsEnabled()) return null;
  const l = copy[locale];
  const id = `alert-${slug}`;
  return (
    <form action={alertsConfig.formAction} method="post" target="_blank" className={className ?? "rounded-[var(--radius-card)] border border-line bg-white p-6"}>
      <p className="font-display text-lg font-semibold text-ink">{l.title}</p>
      <p className="mt-1 text-sm text-muted">{l.body}</p>
      <input type="hidden" name={alertsConfig.fields.certification} value={slug} />
      <input type="hidden" name={alertsConfig.fields.locale} value={locale} />
      <label htmlFor={`${id}-email`} className="mt-4 block text-sm font-semibold text-ink">
        {l.email}
      </label>
      <input id={`${id}-email`} name={alertsConfig.fields.email} type="email" required autoComplete="email" className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
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
    </form>
  );
}
