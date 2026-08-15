/**
 * Analytics + consent layer.
 *
 * DPDP Act (India, 2023) requires explicit, affirmative, informed consent
 * BEFORE any non-essential cookie or tracking script is dropped. We implement
 * Google Consent Mode v2 so that, until a visitor opts in, GA4/GTM run in
 * "consentless" mode (cookieless pings only) — and once they accept, the
 * real tags fire.
 *
 * No third-party IDs are hardcoded. Read from env (ANALYTICS in site.ts).
 * If env IDs are absent, NO third-party script is ever injected — the
 * consent banner still records preferences locally.
 */

import { ANALYTICS } from "@/lib/site";

export type ConsentGranular = {
  /** Required — always on. Anonymous cookieless pings, no identifiers. */
  essential: true;
  /** GA4 / GTM analytics cookies. */
  analytics: boolean;
  /** Meta Pixel, Google Ads, remarketing. Off by default. */
  marketing: boolean;
};

export type ConsentState = {
  granted: boolean; // true once the user has interacted with the banner
  when: number | null; // epoch ms of the decision
  version: number; // banner copy version — bump to re-prompt after changes
  choices: ConsentGranular;
};

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "yaara-consent-v1";

/** Default (denied) state used before the visitor interacts. */
export const DEFAULT_CONSENT: ConsentState = {
  granted: false,
  when: null,
  version: CONSENT_VERSION,
  choices: { essential: true, analytics: false, marketing: false },
};

/**
 * Inline script emitted into <head> BEFORE any other script.
 * Sets Google Consent Mode v2 to "denied" by default so tags that respect
 * Consent Mode (GA4, Google Ads) fire cookieless pings only until the
 * visitor opts in. This must run synchronously, ahead of GTM.
 */
export function consentModeDefaultScript(): string {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",functionality_storage:"denied",security_storage:"granted",wait_for_update:500});`;
}

/**
 * Inline script emitted AFTER the visitor accepts — flips Consent Mode to
 * granted for the categories they approved.
 */
export function consentModeUpdateScript(choices: ConsentGranular): string {
  const analytics = choices.analytics ? "granted" : "denied";
  const marketing = choices.marketing ? "granted" : "denied";
  return `function gtag(){window.dataLayer.push(arguments);}gtag("consent","update",{analytics_storage:"${analytics}",ad_storage:"${marketing}",ad_user_data:"${marketing}",ad_personalization:"${marketing}",functionality_storage:"${analytics}"});`;
}

/**
 * GTM bootstrap snippet (consent-aware). Returns the <script> body for GTM,
 * or null when no GTM id is configured.
 */
export function gtmBootstrapScript(): string | null {
  if (!ANALYTICS.gtmEnabled || !ANALYTICS.gtmId) return null;
  const id = ANALYTICS.gtmId.replace(/^['"]|['"]$/g, "");
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","${id}");`;
}

/** The GTM <noscript> iframe body, for the <body> fallback. */
export function gtmNoscriptIframe(): string | null {
  if (!ANALYTICS.gtmEnabled || !ANALYTICS.gtmId) return null;
  const id = ANALYTICS.gtmId.replace(/^['"]|['"]$/g, "");
  return `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>`;
}

/**
 * GA4 gtag.js fallback (used only when GTM is NOT configured but a GA4 id is).
 * Loads synchronously after consent is granted.
 */
export function ga4BootstrapScript(): string | null {
  if (!ANALYTICS.ga4Enabled || !ANALYTICS.ga4Id || ANALYTICS.gtmEnabled) return null;
  const id = ANALYTICS.ga4Id.replace(/^['"]|['"]$/g, "");
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${id}",{anonymize_ip:true,send_page_view:true});var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id=${id}";document.head.appendChild(s);`;
}
