import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { ChatAssistant } from "@/components/site/chat-assistant";
import { SITE, CONTACT } from "@/lib/site";

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
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.name,
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: SITE.name,
    description:
      "Accounting, tax & compliance for founders and small businesses — handled by a real person, not a portal.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "Accounting, tax & compliance for founders and small businesses — handled by a real person, not a portal.",
  },
  contact: {
    email: CONTACT.email,
    telephone: CONTACT.phone,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization structured data for SEO
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description:
      "Accounting, tax, and business-compliance consultancy for founders and small businesses in India.",
    url: SITE.url,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    founder: { "@type": "Person", name: SITE.founder },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.line3}`,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.pincode,
      addressCountry: "IN",
    },
    areaServed: "IN",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${workSans.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <WhatsAppFloat />
        <ChatAssistant />
        <Toaster />
      </body>
    </html>
  );
}
