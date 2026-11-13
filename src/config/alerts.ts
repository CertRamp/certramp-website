/**
 * Exam change alerts ("Notify me about changes to this exam").
 *
 * Requirements (owner decision, 13 Nov 2026): explicit consent, double opt-in,
 * purpose named, unsubscribe link in every email, provider with a data
 * processing agreement and EU hosting. Candidates proposed: Brevo (Paris, EU
 * hosting) or CleverReach (Rastede, servers in Germany).
 *
 * While `provider` is null the sign-up form is NOT rendered anywhere. To switch it on:
 *  1. Choose the provider and sign the data processing agreement in its account.
 *  2. Create one list (or one attribute value) per certification and a
 *     double-opt-in form; copy the form's POST URL into `formAction`.
 *  3. Map the field names below to the provider's names.
 *  4. Have the consent text and privacy policy section reviewed (docs/alerts-texts.md).
 */
export const alertsConfig: {
  provider: null | "brevo" | "cleverreach";
  /** POST URL of the provider's hosted double-opt-in form. */
  formAction: string;
  fields: { email: string; certification: string; locale: string };
} = {
  provider: null,
  formAction: "",
  fields: { email: "EMAIL", certification: "CERTIFICATION", locale: "LOCALE" },
};

export const alertsEnabled = () => alertsConfig.provider !== null && /^https:\/\//.test(alertsConfig.formAction);
