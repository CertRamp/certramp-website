import Script from "next/script";
import { umami, umamiEnabled } from "@/lib/analytics";
import { siteConfig } from "@/config/site";

/**
 * Loads the Umami Cloud tracker (cookieless) when NEXT_PUBLIC_ANALYTICS_PROVIDER=umami
 * and NEXT_PUBLIC_UMAMI_WEBSITE_ID are set. Renders nothing otherwise.
 *
 * - data-domains: only counts visits on the production domain (no previews/localhost)
 * - data-do-not-track: respects the browser's "Do Not Track" setting
 */
export function AnalyticsScript() {
  if (!umamiEnabled) return null;
  const host = new URL(siteConfig.url).hostname;
  return (
    <Script
      src={umami.scriptUrl}
      data-website-id={umami.websiteId}
      data-domains={host}
      data-do-not-track="true"
      strategy="afterInteractive"
    />
  );
}
