"use client";

import Link from "@/components/ui/Link";
import { useEffect, type ReactNode } from "react";
import { track, type AnalyticsEvent, type AnalyticsProps } from "@/lib/analytics";

/**
 * A link that fires an analytics event on click. Works for internal routes
 * (Next <Link>) and external URLs (ClassMarker, Udemy).
 */
export function TrackedLink({
  href,
  event,
  eventProps,
  external,
  className,
  children,
  ariaLabel,
  hrefLang,
}: {
  href: string;
  event: AnalyticsEvent;
  eventProps?: AnalyticsProps;
  external?: boolean;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  hrefLang?: string;
}) {
  const onClick = () => track(event, { destination: href, ...eventProps });
  // Data attributes let the static-page script (public/site.js) fire the same
  // event on pages that are served without React hydration.
  const data = { "data-track": event, "data-track-props": JSON.stringify({ destination: href, ...eventProps }) };

  if (external) {
    return (
      <a href={href} hrefLang={hrefLang} onClick={onClick} {...data} className={className} target="_blank" rel="noopener" aria-label={ariaLabel}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} {...data} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

/** Fires a page-view style event once when mounted. */
export function TrackOnView({ event, eventProps }: { event: AnalyticsEvent; eventProps?: AnalyticsProps }) {
  const key = JSON.stringify(eventProps ?? {});
  useEffect(() => {
    track(event, JSON.parse(key) as AnalyticsProps);
  }, [event, key]);
  return <span hidden data-track-view={event} data-track-props={key} />;
}
