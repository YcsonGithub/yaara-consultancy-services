import type { Metadata } from "next";
import { LegalBody } from "../legal-body";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Yaara Consultancy Services collects, uses, and protects your personal and business information when you engage us for accounting, tax, and compliance services.",
  alternates: { canonical: `${SITE.url}/legal/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalBody
      title="Privacy Policy"
      intro="How we handle your personal and business information when you engage us — in plain English, not legalese."
      sections={[
        {
          heading: "What we collect",
          body: "Name, email, phone number, business details, and the documents you share with us (PAN, Aadhaar, GSTIN, financial statements, and similar) for the purpose of providing accounting, tax, and compliance services. We collect only what's needed to do the work you've engaged us for.",
        },
        {
          heading: "How we use it",
          body: "Solely to deliver the services you've requested — filing returns, preparing documents, communicating with departments on your behalf, and reminding you of upcoming deadlines. We never sell your data, and we don't share it with third parties except where required by law or to your nominated CA partner for statutory sign-off.",
        },
        {
          heading: "How we store it",
          body: "Documents are received via WhatsApp Business or a secure encrypted upload. Records are retained only as long as needed for compliance and statutory limitation periods (typically 6–8 years for tax records in India). You can request a copy or deletion of your records at any time — email us and we'll action it within 7 working days.",
        },
        {
          heading: "Your rights",
          body: "You can ask to see what we hold, correct anything that's wrong, or request deletion (subject to legal retention requirements). Just email us and we'll respond within a working day. This policy may be updated as our practices evolve — material changes will be communicated to active clients in advance.",
        },
      ]}
    />
  );
}
