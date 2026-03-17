"use client";

import { CTA_URL } from "./constants";

/**
 * Tracks CTA click events. Replace with your analytics provider.
 */
export function trackCtaClick(label: string) {
  if (typeof window !== "undefined" && "gtag" in window) {
    const gtag = (window as Record<string, unknown>)["gtag"] as
      | ((...args: unknown[]) => void)
      | undefined;
    gtag?.("event", "cta_click", {
      event_label: label,
      destination: CTA_URL,
    });
  }
  // Placeholder: add your analytics call here
  console.log(`[CTA Click] ${label}`);
}
