"use client";

import { useEffect } from "react";
import { trackEvent, type ConversionEventName } from "@/lib/analytics";

const EVENT_NAMES: ConversionEventName[] = [
  "phone_click",
  "whatsapp_click",
  "email_click",
  "service_cta_click",
];

function isEventName(value: string | undefined): value is ConversionEventName {
  return Boolean(value && EVENT_NAMES.includes(value as ConversionEventName));
}

/** Delegated tracking keeps phone, WhatsApp, email and CTA links reusable. */
export function AnalyticsEvents() {
  useEffect(() => {
    let formStarted = false;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const explicit = link.dataset.analyticsEvent;
      const name = isEventName(explicit)
        ? explicit
        : href.startsWith("tel:")
          ? "phone_click"
          : href.startsWith("https://wa.me/")
            ? "whatsapp_click"
            : href.startsWith("mailto:")
              ? "email_click"
              : undefined;
      if (!name) return;
      trackEvent(name, link.dataset.analyticsService ? { service: link.dataset.analyticsService } : {});
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest('form[data-analytics-form="consultation"]') || formStarted) return;
      formStarted = true;
      trackEvent("contact_form_start");
    };

    document.addEventListener("click", onClick);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, []);

  return null;
}
