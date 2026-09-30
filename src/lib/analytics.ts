/**
 * Provider-agnostic analytics hooks.
 *
 * The site never loads a tracking script by itself. `track()` forwards events to
 * whichever provider you have loaded (after consent, where legally required):
 *
 *   NEXT_PUBLIC_ANALYTICS_PROVIDER=gtm        → window.dataLayer.push({ event, ...props })
 *   NEXT_PUBLIC_ANALYTICS_PROVIDER=ga4        → window.gtag("event", name, props)
 *   NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible  → window.plausible(name, { props })
 *   NEXT_PUBLIC_ANALYTICS_PROVIDER=none       → no-op (logs to console in development)
 *
 * Every event is also dispatched as a DOM CustomEvent "certramp:analytics",
 * so you can wire up any other tool without touching components.
 */

export type AnalyticsEvent = "free_test_clicked" | "premium_exam_clicked" | "udemy_clicked" | "exam_page_viewed";

export type AnalyticsProps = {
  certification?: string;
  location?: string;
  destination?: string;
  [key: string]: string | number | boolean | undefined;
};

type Provider = "none" | "gtm" | "ga4" | "plausible";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

const provider = (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || "none") as Provider;

export function track(event: AnalyticsEvent, props: AnalyticsProps = {}): void {
  if (typeof window === "undefined") return;
  const clean = Object.fromEntries(Object.entries(props).filter(([, v]) => v !== undefined));

  try {
    window.dispatchEvent(new CustomEvent("certramp:analytics", { detail: { event, ...clean } }));

    switch (provider) {
      case "gtm":
        (window.dataLayer ??= []).push({ event, ...clean });
        break;
      case "ga4":
        window.gtag?.("event", event, clean);
        break;
      case "plausible":
        window.plausible?.(event, { props: clean });
        break;
      default:
        if (process.env.NODE_ENV === "development") {
          console.debug("[analytics]", event, clean);
        }
    }
  } catch {
    /* Analytics must never break navigation. */
  }
}
