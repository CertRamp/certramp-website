/**
 * Exam change alerts ("Notify me about changes to this exam").
 *
 * Requirements (owner decision, 13 Nov 2026): explicit consent, double opt-in,
 * purpose named, unsubscribe link in every email, provider with a data
 * processing agreement and EU hosting. Provider: Brevo (free plan; the DPA is
 * part of Brevo's General Conditions of Use).
 *
 * One Brevo form + list per certification, so the consent names exactly one exam.
 * Brevo account set-up (13 Nov 2026): list #3 "Exam Change Alerts (Double Opt-in)"
 * for NCA-AIIO, form "Exam change alert EN" with double opt-in, bilingual DOI email
 * and bilingual form messages.
 *
 * `live` stays false until the sender address in Brevo is hello@certramplearning.com
 * with an authenticated domain (no private address as sender).
 */
export const alertsConfig: {
  provider: null | "brevo";
  live: boolean;
  /** Brevo form POST URL per certification slug. */
  forms: Record<string, string>;
} = {
  provider: "brevo",
  live: false,
  forms: {
    "nvidia-nca-aiio":
      "https://11007e05.sibforms.com/serve/MUIFAIq8yEEC59ks-ZDMBm3OE3GtOVp466kT-m0pTDqkU783iC9HXEdqkrMWZVHLbve6nyghrAh7KXWU_534mcR38tlSBjnlq5tNo6Owm8lejc7OW4Ktx5efFkB8x-su3aYbFV1JrfM3OYRQVsUmCIYRxK4KcmkXdWoLy6vebRjX-3sZIanbmV9D5Op1-Mz1VP_L167iV2gBw9tbtw==",
  },
};

/** Form URL for a certification when alerts are live, else null. */
export function alertFormFor(slug: string): string | null {
  if (!alertsConfig.provider || !alertsConfig.live) return null;
  const url = alertsConfig.forms[slug];
  return url && /^https:\/\//.test(url) ? url : null;
}
