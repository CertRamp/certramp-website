/**
 * Legal pages: Imprint, Privacy Policy, Cookies (and Terms, once CertRamp sells directly).
 *
 * The Privacy Policy and Cookie texts describe what this website actually does today:
 *   - static website hosted by IONOS (server log files)
 *   - cookieless visitor statistics by IONOS Deploy Now, created from the server logs
 *     with IP addresses anonymised immediately (enabled in the Deploy Now project settings)
 *   - self-hosted fonts, no third-party scripts, no analytics, no cookies, no local storage
 *   - plain links to Udemy (nothing embedded)
 *   - contact by email
 * They were drafted with AI assistance and are not legal advice. UPDATE THEM whenever the
 * website changes — especially before enabling analytics, a newsletter, ClassMarker
 * embeds or direct sales (then Terms incl. withdrawal policy are required as well).
 *
 * `reviewed: false` → page shows a "LEGAL REVIEW REQUIRED" banner and is noindex.
 * `listed: false`   → page is not linked in the footer.
 */

export interface LegalPageConfig {
  slug: "imprint" | "privacy" | "terms" | "cookies";
  title: string;
  description: string;
  reviewed: boolean;
  listed: boolean;
  /** Page content as HTML. `null` renders the preparation checklist instead. */
  html: string | null;
  /** What still needs to be prepared — shown only while `html` is null. */
  checklist: string[];
  /** ISO date of the last content update, shown on the page. */
  updated?: string;
}

/** Provider identification (§ 5 DDG). Fields set to null are not shown. */
export const legalEntity = {
  name: "Joshua Ravnjak",
  tradingName: "CertRamp Learning",
  address: "Hansastr. 49, 81373 München, Germany",
  email: "hello@certramplearning.com",
  vatId: "DE295182475",
};

const UPDATED = "2026-10-01";

const imprintHtml = `
<h2>Information pursuant to § 5 DDG (German Digital Services Act)</h2>
<p>Joshua Ravnjak<br>CertRamp Learning<br>Hansastr. 49<br>81373 München<br>Germany</p>

<h2>Contact</h2>
<p>Email: <a href="mailto:hello@certramplearning.com">hello@certramplearning.com</a></p>

<h2>VAT identification number</h2>
<p>VAT ID pursuant to § 27a of the German VAT Act (UStG): DE295182475</p>

<h2>Responsible for content pursuant to § 18 (2) MStV</h2>
<p>Joshua Ravnjak, address as above</p>

<h2>Consumer dispute resolution</h2>
<p>We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>

<h2>Independent practice material</h2>
<p>CertRamp Learning is an independent provider of practice exams. We are not affiliated with, endorsed by or sponsored by any certification body and do not issue certifications. All certification names, exam codes and trademarks belong to their respective owners.</p>
`;

const privacyHtml = `
<p>This privacy policy explains what personal data is processed when you visit this website and when you contact us. We keep data processing to the minimum needed to run the website.</p>

<h2>1. Controller</h2>
<p>Joshua Ravnjak, CertRamp Learning<br>Hansastr. 49, 81373 München, Germany<br>Email: <a href="mailto:hello@certramplearning.com">hello@certramplearning.com</a></p>

<h2>2. Hosting and server log files</h2>
<p>This website is hosted by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. When you open a page, your browser automatically sends information that the server records in log files: IP address, date and time of the request, the page requested, the referring page (referrer), and browser and operating system information.</p>
<p>This data is required to deliver the website and to keep it secure and stable, for example to detect and defend against attacks. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest is the secure and reliable operation of the website. The log data is stored only as long as necessary for these purposes and is then deleted or anonymised. We have concluded a data processing agreement with IONOS pursuant to Art. 28 GDPR.</p>

<h2>3. Visitor statistics</h2>
<p>Our host IONOS creates anonymous visitor statistics for us from the server log files (IONOS Deploy Now visitor statistics). The following data is evaluated: the referring page (referrer), the page or file requested, browser type and version, operating system, device type, time of access and the IP address in anonymised form. According to IONOS, the IP address is anonymised immediately after transmission, so the statistics are processed without reference to any person. No cookies are set or read, and no script is loaded in your browser for this purpose.</p>
<p>We use these statistics to understand which pages are used and to improve the website. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest lies in the needs-based design and improvement of our website. The processing is carried out by IONOS on our behalf under the data processing agreement mentioned in section 2.</p>

<h2>4. No cookies, no tracking tools</h2>
<p>This website does not set cookies and does not use comparable technologies such as local storage. Apart from the cookieless visitor statistics described in section 3, we do not use web analytics, advertising, social media plugins or other tracking tools. Fonts are hosted on our own server, so no connection to third-party font services (such as Google Fonts) is made. See also our <a href="/legal/cookies/">cookie information</a>.</p>

<h2>5. Contact by email</h2>
<p>If you contact us by email, we process the data you send us (usually your email address, your name and the content of your message) to answer your enquiry. The legal basis is Art. 6(1)(b) GDPR where your enquiry relates to a contract or pre-contractual measures, and Art. 6(1)(f) GDPR otherwise; our legitimate interest is responding to enquiries. We delete the data once your enquiry has been dealt with, unless statutory retention obligations (for example under German commercial or tax law) require us to keep it longer.</p>

<h2>6. Links to Udemy and other websites</h2>
<p>This website contains links to our courses on Udemy and to other external websites, such as official certification bodies. These are plain links: no data is transmitted to these providers until you click a link. After you follow a link, the privacy policy of the respective provider applies — for Udemy, see <a href="https://www.udemy.com/terms/privacy/" rel="noopener nofollow">udemy.com/terms/privacy</a>.</p>

<h2>7. Recipients and transfers to third countries</h2>
<p>We do not sell personal data. Data is only passed to our hosting and email provider IONOS (see section 2) as a processor (hosting, visitor statistics and email). Personal data from your visit is not transferred to countries outside the EU/EEA.</p>

<h2>8. Your rights</h2>
<p>You have the right to access your personal data (Art. 15 GDPR), to rectification (Art. 16), to erasure (Art. 17), to restriction of processing (Art. 18), to data portability (Art. 20) and to object to processing based on legitimate interests (Art. 21). To exercise these rights, send an email to <a href="mailto:hello@certramplearning.com">hello@certramplearning.com</a>.</p>
<p>You also have the right to lodge a complaint with a data protection supervisory authority. The authority responsible for us is the Bavarian Data Protection Authority (Bayerisches Landesamt für Datenschutzaufsicht, BayLDA), Promenade 18, 91522 Ansbach, Germany.</p>

<h2>9. No automated decision-making</h2>
<p>We do not use automated decision-making or profiling within the meaning of Art. 22 GDPR.</p>

<h2>10. Changes to this policy</h2>
<p>We update this privacy policy when the website or the legal requirements change. The current version is always available on this page.</p>
`;

const cookiesHtml = `
<p><strong>This website does not use cookies.</strong></p>
<p>We do not store any information on your device and do not read any information from it — neither with cookies nor with comparable technologies such as local storage or tracking pixels. For this reason, no cookie banner is shown and no consent is required.</p>
<p>We do not use advertising, social media tools or analytics tools that run in your browser. Our host creates anonymous visitor statistics from the server log files without cookies — see section 3 of our <a href="/legal/privacy/">privacy policy</a>. Fonts are served from our own server.</p>
<p>If you follow a link to another website, such as Udemy, that website may use cookies under its own cookie and privacy policy.</p>
<p>Should we introduce cookies or similar technologies in the future, we will update this page and ask for your consent where the law requires it. More details: <a href="/legal/privacy/">privacy policy</a>.</p>
`;

export const legalPages: Record<LegalPageConfig["slug"], LegalPageConfig> = {
  imprint: {
    slug: "imprint",
    title: "Imprint / Legal Notice",
    description: "Legal notice (Impressum) for CertRamp Learning.",
    reviewed: true,
    listed: true,
    html: imprintHtml,
    checklist: [],
    updated: UPDATED,
  },
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    description: "How CertRamp Learning processes personal data on this website.",
    reviewed: true,
    listed: true,
    html: privacyHtml,
    checklist: [],
    updated: UPDATED,
  },
  cookies: {
    slug: "cookies",
    title: "Cookie Information",
    description: "This website does not use cookies or similar technologies.",
    reviewed: true,
    listed: true,
    html: cookiesHtml,
    checklist: [],
    updated: UPDATED,
  },
  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    description: "Terms for purchasing and using the CertRamp Exam Simulator.",
    // Only needed once CertRamp sells directly (ClassMarker checkout). Not linked until then.
    reviewed: false,
    listed: false,
    html: null,
    checklist: [
      "Scope and contracting party",
      "Description of the digital product and access period",
      "Prices, taxes and payment",
      "Right of withdrawal for digital content (consumers) and its expiry conditions",
      "Usage rights and prohibited sharing of test content",
      "Disclaimer: independent practice material, no official affiliation, no pass guarantee",
      "Liability, governing law and jurisdiction",
    ],
  },
};
