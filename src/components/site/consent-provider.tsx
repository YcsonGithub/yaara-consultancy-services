"use client";

/**
 * ConsentProvider — DPDP-compliant consent state manager.
 *
 * Uses `useSyncExternalStore` to read the consent decision from
 * localStorage (the correct React 18+ pattern for external stores — avoids
 * set-state-in-effect and hydration mismatches). The server snapshot is
 * `null`, so during SSR and the initial hydration render the banner is
 * suppressed; only after hydration does the real stored state take over.
 *
 * On consent change, Google Consent Mode v2 is updated (so GA4/GTM adjust
 * in-session) and — if GTM isn't configured but GA4 is — the gtag.js
 * fallback is loaded.
 */

import { useSyncExternalStore, useEffect, useCallback } from "react";
import { CookieBanner } from "./cookie-banner";
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  consentModeUpdateScript,
  ga4BootstrapScript,
  type ConsentState,
  type ConsentGranular,
} from "@/lib/analytics";
import { ANALYTICS } from "@/lib/site";

/* ---------- store ---------- */

let cached: ConsentState | null | undefined = undefined; // undefined = stale

function readStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function invalidate() {
  cached = undefined;
}

function getSnapshot(): ConsentState | null {
  if (cached === undefined) cached = readStoredConsent();
  return cached;
}

function getServerSnapshot(): ConsentState | null {
  return null;
}

function subscribe(cb: () => void) {
  const onChange = () => {
    invalidate();
    cb();
  };
  window.addEventListener("yaara-consent-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("yaara-consent-change", onChange);
    window.removeEventListener("storage", onChange);
  };
}

function writeConsent(state: ConsentState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* localStorage may be unavailable (private mode) — fail silently,
       the banner will simply re-show next visit. */
  }
  invalidate();
  window.dispatchEvent(new Event("yaara-consent-change"));
}

/* ---------- consent-mode side effects ---------- */

function applyConsentUpdate(choices: ConsentGranular) {
  // Replay the Google Consent Mode v2 update so GA4/GTM adjust in-session.
  try {
    new Function(consentModeUpdateScript(choices))();
  } catch {
    /* gtag may not be defined yet — GTM will read the dataLayer state on load. */
  }
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      consent_analytics: choices.analytics ? "granted" : "denied",
      consent_marketing: choices.marketing ? "granted" : "denied",
    });
  }

  // GA4 fallback: if GTM isn't configured but a GA4 id is, load gtag.js
  // now that analytics consent is granted. When GTM IS configured, GA4
  // loads as a tag inside the GTM container — no manual load needed.
  if (choices.analytics && !ANALYTICS.gtmEnabled && ANALYTICS.ga4Enabled) {
    const ga4 = ga4BootstrapScript();
    if (ga4) {
      try {
        new Function(ga4)();
      } catch {
        /* non-fatal */
      }
    }
  }
}

/* ---------- component ---------- */

export function ConsentProvider() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Sync to Google Consent Mode whenever the stored decision changes.
  useEffect(() => {
    if (state?.granted) {
      applyConsentUpdate(state.choices);
    }
  }, [state]);

  const decide = useCallback((choices: ConsentGranular) => {
    writeConsent({
      granted: true,
      when: Date.now(),
      version: CONSENT_VERSION,
      choices,
    });
  }, []);

  // `state === null` covers both "no decision yet" and "server snapshot".
  // The banner shows only when there is genuinely no stored decision.
  if (state && state.granted) return null;
  if (state === null) return <CookieBanner onDecide={decide} />;
  return null;
}

/**
 * Footer "Cookie preferences" trigger — clears the stored decision and
 * reloads so the banner reappears and Consent Mode resets to denied.
 */
export function ReopenConsentTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const clear = () => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    } catch {
      /* noop */
    }
    window.location.reload();
  };
  return (
    <button
      type="button"
      onClick={clear}
      className={
        className ??
        "font-sans text-[0.86rem] text-body transition-colors hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4"
      }
    >
      {children}
    </button>
  );
}
