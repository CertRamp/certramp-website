# CertRamp Learning — Website

Marketing and discovery site for CertRamp Learning: independent, progressive practice exams.
**Practice harder. Enter confident.**

Stack: Next.js 16 (App Router, static generation) · TypeScript · Tailwind CSS 4. Runtime dependencies: `next`, `react`, `react-dom` and two self-hosted font packages. Nothing else.

---

## 1. Architecture

### Information architecture

| URL | Purpose | Indexed |
|---|---|---|
| `/` | Home: hero, categories, featured exams, methodology, how it works, why, reviews, FAQ, CTA | yes |
| `/practice-exams` | Catalogue of 80 certifications in 10 categories, with search and language filter | yes |
| `/practice-exams/[slug]` | **Certification landing page template** — one per slug in `data/udemy-courses.csv` (80 pages) | once it has a `description` |
| `/practice-exams/[slug]/free-test` | Hosts the free ClassMarker test (Option B: embed) | no |
| `/practice-exams/[slug]/exam-simulator` | Hosts the paid simulator (Option B: embed) | no |
| `/practice-exams/[slug]/result?score=72` | Readiness result → simulator upsell (ClassMarker finish redirect) | no |
| `/guides/[slug]` | **Exam guide** — verified exam facts, official domains, study plan, mistakes, FAQ. Only exists when `src/content/guides/<slug>.ts` exists | yes |
| `/practice-questions/[slug]` | **Free original practice questions** with answers and explanations. Only exists when `src/content/practice-questions/<slug>.ts` exists | yes |
| `/how-it-works` | The six-test methodology | yes |
| `/about` | Independent brand, principles, "what we are not", founder | yes |
| `/faq` | Grouped FAQ with FAQPage schema | yes |
| `/legal/imprint`, `/legal/privacy`, `/legal/terms`, `/legal/cookies` | Placeholders — **LEGAL REVIEW REQUIRED** | only once `reviewed: true` |
| `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/opengraph-image` | Generated | — |

Funnel (once ClassMarker URLs are set): search → `/practice-exams/[slug]` → free test (redirect or embed) → `/result` readiness → simulator checkout (ClassMarker). Secondary: landing page → “View on Udemy”.

### Folder structure

```
data/
  udemy-courses.csv       ← YOUR COURSE LIST (one row per Udemy course) — edit in Excel/Sheets
src/
  data/udemy-courses.json generated from the CSV on every build (do not edit)
  config/                 ← everything else you edit lives here
    certifications.ts     optional details per certification (description, ClassMarker URLs, price …)
    types.ts              data model for a certification
    categories.ts         the 10 catalogue categories (mapped from the CSV "Category" column)
    vendors.ts            the 23 providers + optional trademark notices
    product.ts            simulator conditions (attempts, access, explanations…) + readiness bands
    methodology.ts        the six tests
    faq.ts                site-wide FAQ + generic per-certification FAQ
    reviews.ts            genuine reviews / proof points (empty = placeholders)
    about.ts              About page facts
    legal.ts              legal entity + legal page status
    site.ts               name, URL, navigation, contact
  app/                    routes (see table above) + robots, sitemap, OG images
  components/
    ui/                   Button, Icon, Section, FaqList, Breadcrumbs, Placeholder
    layout/               SiteHeader, Nav (desktop + mobile), SiteFooter, PageHero
    marketing/            RampChart, Methodology, CertificationCard, CategoryGrid, Reviews, Sections
    certification/        CertCta, CertSections, VendorDisclaimer, ClassMarkerEmbed, TestHostPage, ReadinessResult
    analytics/            TrackedLink, TrackOnView
    seo/                  JsonLd
    brand/                Logo
  lib/                    certifications (resolver), seo, schema, analytics, placeholder, fonts, og, format
scripts/import-courses.mjs  CSV → JSON import with validation (runs before dev/build)
scripts/check-launch.mjs    pre-launch checklist
```

### Design system

- Colours (tokens in `src/app/globals.css`): midnight navy `#0a1130` / `#060a1f`, white, one electric-blue accent `#3a5cff`, surface `#f5f7fb`, amber reserved exclusively for placeholders.
- Type: Inter Tight (display) + Inter (text), self-hosted — no Google Fonts requests (GDPR-friendly).
- Signature visual: the **ramp** — six rising bars, the dashed “real exam level” line at Test 4, Test 6 in white/navy as “beyond the exam”. Reused in the hero, certification pages, results page and OG images.
- Rounded 20px cards, restrained shadows, subtle grid texture on dark sections, `prefers-reduced-motion` respected.

### SEO

- Unique titles (`%s | CertRamp Learning`), meta descriptions, canonical URLs, Open Graph + Twitter cards and generated OG images per certification.
- Structured data: Organization, WebSite, BreadcrumbList, FAQPage (only real answers), ItemList (catalogue), Product + Offer (only for `live` products with a real price and checkout URL). No ratings are ever emitted.
- `robots.txt` + `sitemap.xml` generated from config; placeholder products, test pages and unreviewed legal pages are excluded.
- **Safety switch:** unless `NEXT_PUBLIC_ALLOW_INDEXING=true`, every page is `noindex` and robots.txt disallows everything — previews can never be indexed.
- Landing page titles target transactional intent (“[cert] Practice Exams”, “Exam Simulator”, “free practice test”) without keyword stuffing.
- All pages statically generated; no client JS except the mobile menu, analytics hooks and the result page.

---

## 2. Run locally

Requires Node.js ≥ 20.9.

```bash
npm install
cp .env.example .env.local     # optional
npm run dev                    # http://localhost:3000
npm run build                  # static site in ./out
npx serve out                  # preview the static build locally
npm run lint && npm run typecheck
npm run check:launch           # lists everything still missing before go-live
```

## 3. Deploy

The site is a **static export**: `npm run build` writes the complete website to `out/` (all pages pre-rendered, no server needed).

**Current setup: IONOS Deploy Now** (GitHub → IONOS, rebuilds on every push to `main`)
- Framework/build: Node.js, build command `npm ci && npm run build`, publish directory `out`.
- Production settings are committed in `.env.production` (public values only): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ALLOW_INDEXING`, `NEXT_PUBLIC_ANALYTICS_PROVIDER`.
- `public/.htaccess` adds security headers, the 404 page, HTTPS + www redirect and the image type for Open Graph images (Apache).

**Go-live switch:** set `NEXT_PUBLIC_ALLOW_INDEXING=true` in `.env.production` and push — only after Impressum/Datenschutz are final.

**ClassMarker env overrides** (`CLASSMARKER_*__<SLUG>`) are read at build time. Either put the URLs into `src/config/certifications.ts` (simplest) or add them to `.env.production`.

**Alternatives:** any static host works with the same `out/` folder (Netlify, Cloudflare Pages, Vercel, classic webspace via FTP).

## 4. ClassMarker integration

Per certification, in `certifications.ts`:

```ts
links: { freeTestUrl: null, premiumUrl: null, udemyUrl: null },   // or set via env
delivery: { freeTest: "redirect", simulator: "redirect" },       // or "embed"
```

- **Option A — `redirect`:** CTAs link straight to the ClassMarker URL (new tab).
- **Option B — `embed`:** CTAs go to `/practice-exams/[slug]/free-test` or `/exam-simulator`, which show ClassMarker in an iframe under CertRamp branding.
- **URL resolution:** env var `CLASSMARKER_FREE_TEST_URL__<SLUG>` → value in `certifications.ts` → `null`. `<SLUG>` = slug in UPPER_SNAKE_CASE (`az-900-foundation` → `PRINCE2_FOUNDATION`).
- **No URL configured → no link.** The button renders disabled with a visible hint. No fake URLs anywhere.
- **Readiness result:** in ClassMarker, set the free test’s finish redirect to `https://your-domain/practice-exams/<slug>/result` and append the percentage as `?score=`, `?percentage=` or `?pct=` (check which result variables your ClassMarker plan supports). Bands are in `product.ts` and are clearly labelled as CertRamp guidance, not an official pass mark.
- For branding: use your own logo, colours and custom domain options inside ClassMarker where your plan allows it.

## 5. Analytics

`src/lib/analytics.ts` fires `free_test_clicked`, `premium_exam_clicked`, `udemy_clicked` (on click, with `certification`, `location`, `destination`) and `exam_page_viewed` (on landing page view). Set `NEXT_PUBLIC_ANALYTICS_PROVIDER` to forward to GTM (`dataLayer`), GA4 (`gtag`) or Plausible. The site loads **no tracking script itself** — add one yourself, behind a consent banner where legally required. Every event is also dispatched as a `certramp:analytics` DOM event.

---

## 6. The catalogue: adding courses and certifications (no design changes)

**Source of truth: `data/udemy-courses.csv`** — currently 114 courses → 80 certification pages, 23 providers, 5 languages.

| Column | Meaning |
|---|---|
| `#` | Any unique id |
| `Title` | Udemy course title (shown on the certification page) |
| `Certification` | Human-readable grouping key |
| `Slug` | **URL** `/practice-exams/<slug>` — rows with the same slug form ONE page. Never change after launch. |
| `Name` | Short name used in headings, e.g. `AZ-900`, `CISA`, `PM Foundation (7th Edition)` |
| `Descriptor` | One line under the name, e.g. `Microsoft Azure Fundamentals` |
| `Provider` | Must match a key in `src/config/vendors.ts` (unknown providers still work) |
| `Category` | Must match a `csvName` in `src/config/categories.ts` |
| `Language` | English, German, French, Spanish, Portuguese |
| `Questions` | Optional total question count |
| `Udemy URL` | Course link |

**Add a new course in another language:** add a row with the existing slug → it appears as an extra "Also on Udemy in …" button.
**Add a new certification:** add a row with a new slug → page, catalogue card, category count, OG image and (once enriched) sitemap entry are generated automatically.
Then run `npm run build` (the import runs automatically and stops with a clear message if a row is invalid).

**Enrich a certification** in `src/config/certifications.ts` (keyed by slug): `description` (makes the page indexable), verified `examOverview`, `topics`, `faq`, `price`, `freeTestUrl` / `premiumUrl`, `delivery`, `featured`, `seo`, `lastReviewed`. A full TEMPLATE is at the bottom of that file.

**How pages behave without enrichment:** public and linked, primary CTA = "View on Udemy" (English course first, other languages as extra buttons), simulator shown as "Coming soon", exam overview shows only provider/area/languages, **`noindex`** until a `description` is added. As soon as `freeTestUrl` / `premiumUrl` exist, the free-test → result → simulator funnel takes over automatically.

**Merged in the CSV:** the two CCNA courses (v2.0 English, v1.1 German) share one page `/practice-exams/ccna-200-301`. Security+ SY0-701 and SY0-801 stay separate (different exam codes).

## 6b. Certification content clusters (exam guide + practice questions)

Each certification can grow into a cluster of three pages that link to each other automatically:

```
/practice-exams/<slug>/      commercial page (Udemy / ClassMarker)
/guides/<slug>/              exam guide            (search intent: "<cert> exam", "how to prepare")
/practice-questions/<slug>/  free sample questions (search intent: "<cert> practice questions")
```

**Pilot:** `isc2-ccsp` (guide + 24 questions, independently fact-checked on 1 Oct 2026).

**Step by step for the next certification:**

1. **Verified exam data** — in `src/config/certifications.ts` add an `exam` object to the slug (type `ExamInfo` in `src/config/types.ts`): official name, format, question count, duration, languages, domains (+ weights only if officially published), official URLs, `sources` and `lastVerified`. Only official provider sources. Leave out what you cannot verify. The landing page's exam overview, topics and sources are derived from it automatically.
2. **Guide** — copy `src/content/guides/isc2-ccsp.ts` to `src/content/guides/<slug>.ts` and write the preparation content. Never repeat exam facts there; they come from step 1.
3. **Questions** — copy `src/content/practice-questions/isc2-ccsp.ts`. Rules: ORIGINAL questions only — never copied from the paid courses, never recalled/leaked exam content, never presented as real exam questions. Every question needs a domain id from step 1, an official objective, an answer, an explanation and a rationale for every option. Have them reviewed before publishing.
4. **Register** both in `src/content/index.ts`.
5. `npm run build` — the build fails with a clear message if the slug, a domain id or an answer key is wrong.

Generated automatically: pages, metadata, canonical URLs, sitemap entries, breadcrumbs, cross-links on all three pages, and structured data (`EducationalOccupationalCredential` for the certification, `Article` for the guide, `Quiz` for the questions, `FAQPage`).

## 7. What you still need to provide

Run `npm run check:launch` for the exact, current list.

**Per certification (`certifications.ts`):** the top 10 by September revenue are enriched (description, exam facts checked against official sources on 30 Sep 2026, topics, sources, SEO) and indexable. Remaining 70: add a description + verified facts to make them indexable. For all: price and ClassMarker free test + premium URLs when you sell directly. Re-check exam facts at least every 6 months (`lastReviewed`).

**Product conditions (`product.ts`):** attempts, access period, explanations, mobile access, results feedback, timing, refunds/withdrawal, free test scope, payment methods, access delivery, Udemy vs Simulator difference. Confirm or adjust the readiness bands.

**Brand/site:** production domain, contact email, LinkedIn (optional), founding story, founder photo (optional), location (optional), Udemy track record (optional, with source), genuine reviews with permission. Founder name, role and bio were taken from your public Udemy profile — edit in `about.ts`.

**Vendors (optional):** vendor-specific trademark notices in `vendors.ts` (a neutral notice is used otherwise).

**Legal (`legal.ts`):** legal entity details and final, reviewed legal texts.

**Data to double-check in the CSV:** question counts were taken only where a title or the Udemy listing states them; the ISO/IEC 42001 Foundation course targets the PECB exam (provider set to PECB).

## 8. Placeholders that must be replaced before going live

Every unfinished value is written as `P("…")` and renders as a **dashed amber “Placeholder:” badge** — impossible to overlook.

- [ ] Descriptions for further certification pages you want indexed (10 of 80 done)
- [ ] All `P(...)` values in `certifications.ts`, `product.ts`, `vendors.ts`, `about.ts`, `site.ts`, `legal.ts`
- [ ] Review placeholder cards on the home page (`reviews.ts`) — or remove the section in `src/app/page.tsx`
- [ ] 4 legal pages showing **“LEGAL REVIEW REQUIRED BEFORE PUBLICATION”** → set `reviewed: true` only after review
- [ ] `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_ALLOW_INDEXING=true` in production
- [ ] ClassMarker URLs for the certifications you sell directly (until then pages link to Udemy and show the simulator as “Coming soon”)

### Copy statements to confirm

These are written from the brief, not from confirmed product facts — please check they are true for every product:

- “Original practice questions written by CertRamp” / “not official exam questions” (FAQ, methodology section).
- “Selected CertRamp practice exams are also available on Udemy” and the About page summary of the Udemy catalogue (catalogue, About).
- Every product has six tests following the Diagnostic → CertRamp Challenge ramp, Test 4 at real exam level, Test 6 above it.
- The free test requires no payment.

No reviews, pass rates, student numbers, prices, affiliations or endorsements have been invented anywhere.

---

## 9. Quality review performed

- Production build, TypeScript strict and ESLint (Next core-web-vitals): clean.
- Responsive: all main pages rendered at 1440 / 820 / 390 px — no horizontal overflow; mobile menu (focus, Escape, scroll lock) verified.
- Accessibility: axe-core (WCAG 2 A/AA + best practice) on all main pages — 0 violations. Skip link, landmarks, `aria-current`, native `<details>` FAQ, visible focus rings, reduced motion.
- Links: 32 internal links and anchors checked — no broken links.
- SEO: one `h1` per page, canonical, robots and structured data verified; production-mode robots.txt and sitemap verified (placeholders excluded).
- Claims: copy scanned for fabricated statistics, guarantees and generic phrases.

Recommended before launch: test ClassMarker embeds in Safari/iOS (third-party cookie restrictions can affect iframes — fall back to `redirect` if needed), run Lighthouse on the deployed URL, and add a Content-Security-Policy in `next.config.ts` once your final third-party domains are known.


## Trademark note (PeopleCert)

PeopleCert has asked CertRamp not to use its trademarks (e.g. the names of its project management and IT service management frameworks) in course names. The website follows the same rule: those certification pages use neutral names (`PM Foundation (7th Edition)`, `ITSM Foundation V5`, …). Do not reintroduce these marks in names, headings, slugs, meta data or copy. Links to official PeopleCert pages are fine.

## Placeholders in production

`NEXT_PUBLIC_SHOW_PLACEHOLDERS=false` (set in `.env.production`) hides every element whose content is still a `P("…")` placeholder — FAQ answers, review cards, methodology tiles, About blocks. Locally (`npm run dev`) they are shown as amber badges so you can see what is missing. `npm run check:launch` lists them.
