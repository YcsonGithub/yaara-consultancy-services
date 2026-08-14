import type { Metadata } from "next";
import { LegalBody } from "../legal-body";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms under which Yaara Consultancy Services provides accounting, tax, and compliance services to clients in India.",
  alternates: { canonical: `${SITE.url}/legal/terms` },
};

export default function TermsPage() {
  return (
    <LegalBody
      title="Terms of Service"
      intro="The terms under which we provide accounting, tax, and compliance services — and what you can expect from us in return."
      sections={[
        {
          heading: "Engagement",
          body: "Each engagement begins with a free 20-minute consultation and a written scope of work. Retainer services are billed monthly in advance; one-off services are invoiced at engagement. By sharing documents or making payment, you confirm your acceptance of the agreed scope and these terms.",
        },
        {
          heading: "Your responsibilities",
          body: "You agree to provide accurate, complete, and timely information — including documents, authorisations, and clarifications we request. Late or incomplete information may shift filing deadlines and incur statutory late fees; we'll always flag these in advance when possible, but ultimate responsibility for timely information rests with you.",
        },
        {
          heading: "Our responsibilities",
          body: "We agree to file accurately, on time, and in accordance with current Indian tax and corporate law. We'll communicate proactively, keep your data confidential per our privacy policy, and flag risks we spot in your books or filings. Statutory audits and certifications requiring a practicing CA's signature are handled via our empanelled CA partner network.",
        },
        {
          heading: "Fees & refunds",
          body: "Fees are quoted in INR and exclusive of government fees and taxes unless stated otherwise. Refund eligibility for one-off services is described in our refund policy. Retainer fees are non-refundable once a month's services have commenced, but you can cancel future months with 7 days' notice.",
        },
        {
          heading: "Liability",
          body: "Our liability is limited to the fees paid for the specific engagement giving rise to a claim. We are not liable for penalties arising from incomplete or inaccurate information you provide, nor for changes in law that take effect after a filing is made in good faith.",
        },
      ]}
    />
  );
}
