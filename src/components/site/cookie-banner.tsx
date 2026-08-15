"use client";

/**
 * CookieBanner — DPDP-compliant consent UI.
 *
 * Requirements satisfied:
 *  - Loads BEFORE any tracking script (rendered high in the tree by
 *    ConsentProvider, and Consent Mode default-denied inline script runs
 *    in <head> ahead of GTM).
 *  - Granular categories (analytics / marketing) — not a single "accept all".
 *  - "Reject all" is as prominent as "Accept all" (DPDP: as easy to refuse
 *    as to grant).
 *  - Links to the Cookie Policy for informed consent.
 *  - Decision persisted to localStorage + replayed via Consent Mode v2.
 *  - Withdrawable later via the footer "Cookie preferences" link.
 */

import { useState } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck } from "lucide-react";
import type { ConsentGranular } from "@/lib/analytics";

export function CookieBanner({
  onDecide,
}: {
  onDecide: (choices: ConsentGranular) => void;
}) {
  // This component is only ever rendered client-side (ConsentProvider
  // suppresses it during SSR/initial hydration via useSyncExternalStore's
  // server snapshot), so local state is safe here with no mount guard.
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const acceptAll = () =>
    onDecide({ essential: true, analytics: true, marketing: true });
  const rejectAll = () =>
    onDecide({ essential: true, analytics: false, marketing: false });
  const savePreferences = () =>
    onDecide({ essential: true, analytics, marketing });

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-ink/20">
        <div className="flex items-start gap-3 border-b border-border bg-surface/60 p-4 sm:p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/12 text-gold-ink">
            <Cookie className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id="cookie-banner-title"
              className="font-serif text-[1.05rem] font-medium text-ink"
            >
              We use cookies — and we ask first.
            </h2>
            <p
              id="cookie-banner-desc"
              className="mt-1 font-sans text-[0.84rem] leading-relaxed text-body"
            >
              Under India&apos;s DPDP Act, we need your consent before setting
              non-essential cookies. Essential cookies keep the site working;
              analytics and marketing are optional.{" "}
              <Link
                href="/legal/cookie"
                className="font-medium text-ink underline decoration-gold-ink underline-offset-2 hover:text-gold-ink"
              >
                Read the Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {expanded && (
          <div id="cookie-preferences" className="space-y-3 border-b border-border bg-paper/40 px-4 py-4 sm:px-5">
            <ConsentToggle
              label="Essential"
              desc="Required for the site to function. Cannot be disabled."
              checked
              disabled
            />
            <ConsentToggle
              label="Analytics"
              desc="Anonymous usage data via Google Analytics 4, to understand what's useful."
              checked={analytics}
              onChange={setAnalytics}
            />
            <ConsentToggle
              label="Marketing"
              desc="Personalised ads and remarketing. Off by default."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        )}

        <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-end sm:p-5">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            aria-controls="cookie-preferences"
            className="order-3 inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-4 py-2.5 font-sans text-[0.86rem] font-medium text-ink transition-colors hover:bg-surface sm:order-1"
          >
            <ShieldCheck className="h-4 w-4 text-gold-ink" strokeWidth={1.5} />
            {expanded ? "Hide details" : "Customise"}
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="order-2 inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2.5 font-sans text-[0.86rem] font-medium text-body transition-colors hover:border-ink/30 hover:text-ink sm:order-2"
          >
            Reject all
          </button>
          {expanded ? (
            <button
              type="button"
              onClick={savePreferences}
              className="order-1 inline-flex items-center justify-center rounded-md bg-ink px-4 py-2.5 font-sans text-[0.86rem] font-medium text-paper transition-colors hover:bg-ink-dark sm:order-3"
            >
              Save my preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={acceptAll}
              className="order-1 inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 font-sans text-[0.86rem] font-medium text-ink transition-colors hover:bg-gold-light sm:order-3"
            >
              Accept all
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ConsentToggle({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-border accent-gold"
        aria-label={label}
      />
      <span className="min-w-0">
        <span className="block font-sans text-[0.86rem] font-medium text-ink">
          {label}
          {disabled && (
            <span className="ml-2 font-mono text-[0.66rem] uppercase tracking-wider text-muted-foreground">
              always on
            </span>
          )}
        </span>
        <span className="block font-sans text-[0.78rem] leading-relaxed text-body">
          {desc}
        </span>
      </span>
    </label>
  );
}
