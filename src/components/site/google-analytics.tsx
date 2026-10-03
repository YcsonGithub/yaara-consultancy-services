"use client";

import Script from "next/script";

/** Consent-gated direct GA4 loader. GTM deployments should not render this. */
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
      <Script id="yaara-ga4-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId.replace(/'/g, "\\'")}', { anonymize_ip: true, send_page_view: true });`}
      </Script>
    </>
  );
}
