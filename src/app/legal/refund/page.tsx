import type { Metadata } from "next";
import { LegalBody } from "../legal-body";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Our refund and cancellation policy for accounting, tax, and compliance services at Yaara Consultancy Services.",
  alternates: { canonical: `${SITE.url}/legal/refund` },
};

export default function RefundPage() {
  return (
    <LegalBody
      title="Refund Policy"
      intro="When you're eligible for a refund, how long it takes, and how to request one."
      sections={[
        {
          heading: "One-off services",
          body: "If a one-off service (e.g. ITR filing, GST registration) has not been started and you cancel within 48 hours of payment, you're eligible for a full refund. If work has commenced, we'll refund the unutilised portion based on what's been delivered. Government fees paid on your behalf are non-refundable once submitted to the department.",
        },
        {
          heading: "Retainer services",
          body: "Retainer fees are billed monthly in advance. You can cancel future months at any time with 7 days' notice — no penalty, no questions. Fees for a month in which services have already been delivered (filings done, books closed, payroll processed) are non-refundable, but we'll pro-rate and refund any unutilised portion.",
        },
        {
          heading: "How to request",
          body: "Email us with your invoice number and the reason for the request. We'll respond within 2 working days with a decision and, where eligible, process the refund to your original payment method within 7–10 working days.",
        },
        {
          heading: "Statutory fees",
          body: "Late fees, penalties, and statutory charges imposed by government departments are not refundable by us — they're paid to the department on your behalf. We'll always notify you before incurring such charges, and where possible we'll suggest alternatives to avoid them.",
        },
      ]}
    />
  );
}
