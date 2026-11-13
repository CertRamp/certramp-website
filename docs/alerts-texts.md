# Exam change alert: consent and privacy texts (draft)

**Status: draft for legal review. Do not publish before a lawyer has checked these texts.**
Prepared 13 Nov 2026. Placeholders in square brackets: [Provider], [Provider address], [date].
The sign-up form stays hidden until a provider is set in `src/config/alerts.ts`.

Provider candidates (both offer a data processing agreement and EU hosting):

| | Brevo | CleverReach |
|---|---|---|
| Company | Brevo (formerly Sendinblue), Paris, France | CleverReach, Rastede, Germany |
| Hosting | EU data centers | Servers in Germany |
| DPA | Signed in the account | Available online |
| Double opt-in | Built-in for forms | Built-in for forms |
| Free plan | Up to 300 emails per day | Up to 250 contacts / 1,000 emails per month |

Check current plan limits and DPA terms on the provider's site before signing up.

---

## 1. Consent text next to the checkbox (form)

**EN**
> I agree that CertRamp Learning emails me when the [exam] exam changes (for example a new exam version, a new outline or a retirement). I can unsubscribe at any time with the link in every email. Details in the privacy policy.

**DE**
> Ich willige ein, dass CertRamp Learning mich per E-Mail informiert, wenn sich die Prüfung [Prüfung] ändert (zum Beispiel neue Prüfungsversion, neue Gliederung oder Einstellung). Ich kann mich jederzeit über den Link in jeder E-Mail abmelden. Einzelheiten in der Datenschutzerklärung.

Below the button:

**EN** You will receive an email to confirm your address. No confirmation, no emails.
**DE** Du erhältst eine E-Mail, um deine Adresse zu bestätigen. Ohne Bestätigung keine E-Mails.

## 2. Confirmation email (double opt-in)

**EN**
Subject: Please confirm: exam change alert for [exam]
> You (or someone using your address) asked to be notified when the [exam] exam changes. Please confirm with the button below. If you did not ask for this, ignore this email: you will not hear from us again.
> [Confirm my subscription]

**DE**
Betreff: Bitte bestätigen: Änderungsalarm für [Prüfung]
> Du (oder jemand mit deiner Adresse) möchtest benachrichtigt werden, wenn sich die Prüfung [Prüfung] ändert. Bitte bestätige das mit dem Button unten. Wenn du das nicht angefordert hast, ignorier diese E-Mail: Du hörst dann nichts mehr von uns.
> [Anmeldung bestätigen]

## 3. Footer of every alert email

**EN** You receive this email because you subscribed to change alerts for [exam] on certramplearning.com. [Unsubscribe] · [Privacy policy]
**DE** Du erhältst diese E-Mail, weil du auf certramplearning.com den Änderungsalarm für [Prüfung] abonniert hast. [Abmelden] · [Datenschutzerklärung]

## 4. Privacy policy section

**EN: Exam change alerts (email)**
> If you subscribe to an exam change alert, we process your email address, the certification you chose, the page language, the time of sign-up and confirmation, and the IP address used for confirmation. Purpose: to email you when the official exam you chose changes, and to be able to prove your consent. Legal basis: your consent (Art. 6(1)(a) GDPR). We use a double opt-in: you only receive alerts after you confirm your address through the link in our confirmation email.
>
> We send the emails with [Provider], [Provider address], which processes the data on our behalf under a data processing agreement (Art. 28 GDPR). The data is stored on servers in the European Union. [If the provider measures opens or clicks: describe it here and whether it can be switched off. Recommendation: switch tracking off.]
>
> You can withdraw your consent at any time with the unsubscribe link in every email or by writing to hello@certramplearning.com; this does not affect the lawfulness of processing before the withdrawal. We delete your data when you unsubscribe; we keep a record of the consent and the withdrawal for up to three years to be able to prove that we acted lawfully [period to be confirmed by your lawyer].

**DE: Änderungsalarm für Prüfungen (E-Mail)**
> Wenn du einen Änderungsalarm abonnierst, verarbeiten wir deine E-Mail-Adresse, die gewählte Zertifizierung, die Seitensprache, den Zeitpunkt von Anmeldung und Bestätigung sowie die bei der Bestätigung verwendete IP-Adresse. Zweck: dich per E-Mail zu informieren, wenn sich die gewählte offizielle Prüfung ändert, und deine Einwilligung nachweisen zu können. Rechtsgrundlage: deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Wir nutzen das Double-Opt-in-Verfahren: Du erhältst Benachrichtigungen erst, nachdem du deine Adresse über den Link in unserer Bestätigungs-E-Mail bestätigt hast.
>
> Für den Versand nutzen wir [Anbieter], [Anschrift des Anbieters], der die Daten in unserem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung (Art. 28 DSGVO) verarbeitet. Die Daten werden auf Servern in der Europäischen Union gespeichert. [Falls der Anbieter Öffnungen oder Klicks misst: hier beschreiben und ob es abschaltbar ist. Empfehlung: Tracking abschalten.]
>
> Du kannst deine Einwilligung jederzeit über den Abmeldelink in jeder E-Mail oder per E-Mail an hello@certramplearning.com widerrufen; die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt. Wir löschen deine Daten mit der Abmeldung; einen Nachweis über Einwilligung und Widerruf bewahren wir bis zu drei Jahre auf, um die Rechtmäßigkeit belegen zu können [Frist von deinem Anwalt bestätigen lassen].

## 5. Readiness check (no server storage): short privacy note

**EN** The readiness check stores your entries and notes only in your own browser (local storage) so they are still there next time. Nothing is sent to us. You can delete them with "Clear my entries" or by clearing your browser data.
**DE** Der Readiness-Check speichert deine Eingaben und Notizen nur in deinem eigenen Browser (lokaler Speicher), damit sie beim nächsten Besuch noch da sind. Nichts wird an uns übertragen. Du kannst sie mit „Meine Eingaben löschen“ oder über die Browserdaten entfernen.

Check whether your cookie/consent setup needs to mention this (local storage that is strictly necessary for a function the user requests is usually exempt under § 25 Abs. 2 Nr. 2 TDDDG; confirm with your lawyer).
