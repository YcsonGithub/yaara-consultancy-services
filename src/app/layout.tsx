import type { Metadata, Viewport } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { ChatAssistant } from "@/components/site/chat-assistant";
import { ConsentProvider } from "@/components/site/consent-provider";
import { JsonLd } from "@/components/site/json-ld";
import { SITE, CONTACT, ANALYTICS } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import {
  consentModeDefaultScript,
  gtmBootstrapScript,
  gtmNoscriptIframe,
} from "@/lib/analytics";

// Fraunces — warm editorial variable serif for headings
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Work Sans — clean humanist sans for body / UI
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// IBM Plex Mono — reserved for numbers, deadlines, fees, data
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Accounting, Tax & Compliance for Founders`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "An Indian accounting and compliance partner for founders and small businesses who want a real person who understands their numbers. GST, ITR, business registration, ROC, bookkeeping, payroll, TDS, advisory and more — handled personally.",
  applicationName: SITE.name,
  keywords: [
    "GST registration India",
    "GST filing Hyderabad",
    "ITR filing India",
    "Udyam registration",
    "MSME registration",
    "company registration Hyderabad",
    "ROC compliance",
    "bookkeeping services",
    "TDS filing",
    "tax consultant Hyderabad",
    "accounting consultancy India",
    "virtual CFO India",
    "payroll services",
    "trademark registration",
  ],
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder,
  publisher: SITE.name,
  category: "Business Services",
  formatDetection: { telephone: true, address: true, email: true },
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/logo.svg" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${SITE.name} — Accounting & Compliance for Founders`,
    description:
      "Accounting, tax & compliance for founders and small businesses — handled by a real person, not a portal.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "Accounting, tax & compliance for founders and small businesses — handled by a real person, not a portal.",
    images: ["/opengraph-image"],
  },
  // Google site verification (set via env in production).
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0E2A47" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const gtmBootstrap = gtmBootstrapScript();
const gtmNoscript = gtmNoscriptIframe();
const consentDefault = consentModeDefaultScript();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${workSans.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {/*
          Consent Mode v2 default — MUST run before GTM / any tag.
          Raw inline <script> rendered first in the body so it executes in
          document order, ahead of the GTM bootstrap below. Sets every
          Google storage category to "denied" so GA4/GAds fire cookieless
          pings only until the visitor opts in (DPDP Act).
        */}
        <script
          // consent-default — generated from our own constants, not user input
          dangerouslySetInnerHTML={{ __html: consentDefault }}
        />
        {/*
          GTM bootstrap (only when NEXT_PUBLIC_GTM_ID is set). Runs after
          the consent default so tags respect Consent Mode from the start.
        */}
        {gtmBootstrap && (
          <script dangerouslySetInnerHTML={{ __html: gtmBootstrap }} />
        )}

        {/* GTM <noscript> fallback for no-JS visitors. */}
        {gtmNoscript && (
          <noscript dangerouslySetInnerHTML={{ __html: gtmNoscript }} />
        )}

        {/* Structured data — Organization + WebSite, site-wide. */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />

        {/*
          Skip-to-content link — the first focusable element on the page
          (WCAG 2.2 AA 2.4.1 Bypass Blocks). Visually hidden until focused.
        */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2.5 focus:font-sans focus:text-[0.86rem] focus:font-medium focus:text-paper focus:shadow-lg"
        >
          Skip to content
        </a>

        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <WhatsAppFloat />
        <ChatAssistant />
        <ConsentProvider />
        <Toaster />
      </body>
    </html>
  );
}
