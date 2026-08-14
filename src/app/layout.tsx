import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Yaara Consultancy Services — Accounting, Tax & Compliance for Founders",
  description:
    "An Indian accounting and compliance partner for founders and small businesses who want a real person who understands their numbers. GST, ITR, business registration, ROC, bookkeeping, payroll, TDS and more — handled personally.",
  keywords: [
    "GST registration India",
    "GST filing",
    "ITR filing India",
    "Udyam registration",
    "MSME registration",
    "company registration",
    "ROC compliance",
    "bookkeeping services",
    "TDS filing",
    "tax consultant",
    "accounting consultancy India",
  ],
  authors: [{ name: "Yaara Consultancy Services" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Yaara Consultancy Services",
    description:
      "Accounting, tax & compliance for founders and small businesses — handled by a real person, not a portal.",
    siteName: "Yaara Consultancy Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaara Consultancy Services",
    description:
      "Accounting, tax & compliance for founders and small businesses — handled by a real person, not a portal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${workSans.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
