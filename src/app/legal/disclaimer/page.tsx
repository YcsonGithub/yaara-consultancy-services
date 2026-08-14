import type { Metadata } from "next";
import { LegalBody } from "../legal-body";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "The legal disclaimer for information provided by Yaara Consultancy Services — on our website, in our compliance calendar, and across our knowledge resources.",
  alternates: { canonical: `${SITE.url}/legal/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <LegalBody
      title="Disclaimer"
      intro="What our information is — and what it isn't. Please read this before relying on anything we publish."
      sections={[
        {
          heading: "Informational only",
          body: "Content on this website — including the compliance calendar, FAQs, knowledge center articles, and fee listings — is provided for general informational purposes only. It does not constitute professional tax, legal, or accounting advice, and should not be relied upon as the sole basis for filing decisions specific to your business.",
        },
        {
          heading: "Deadlines & dates",
          body: "Compliance deadlines shown in our calendar are indicative for common cases. Your exact due date can vary by turnover, state, scheme (e.g. QRMP), prior filings, and amendments notified by the department. Always confirm your specific deadline with us before relying on the calendar.",
        },
        {
          heading: "Not a Chartered Accountancy firm",
          body: "Yaara is an accounting, tax, and compliance consultancy — not a practicing Chartered Accountancy firm. Work that legally requires a CA's signature (statutory audits, certain certifications) is handled through our empanelled network of independent practicing CAs. We're upfront about this because being honest about it matters more than pretending otherwise.",
        },
        {
          heading: "No client relationship",
          body: "Viewing this website or sending us an enquiry does not create a client–consultant relationship. That relationship begins only when both parties sign a written engagement scope. Until then, please don't share confidential information via email or WhatsApp — we can't be responsible for its security before engagement.",
        },
        {
          heading: "External links",
          body: "Where we link to government portals (GSTN, Income Tax, MCA) or third-party sites, we don't control their content and aren't responsible for its accuracy. Always verify information on the official source before acting on it.",
        },
      ]}
    />
  );
}
