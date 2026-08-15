import type { Metadata } from "next";
import Link from "next/link";
import { LegalBody } from "../legal-body";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "When you are eligible for a refund at Yaara Consultancy Services, how to request one, processing timelines, and the cases where fees are non-refundable — including statutory fees, completed filings, and registrations.",
  alternates: { canonical: `${SITE.url}/legal/refund` },
};

export default function RefundPage() {
  return (
    <LegalBody
      title="Refund & Cancellation Policy"
      intro="When you are eligible for a refund, how long it takes, how to request one, and the cases where fees cannot be refunded — written in plain English."
      lastUpdated="2026"
      sections={[
        {
          index: "§ 1",
          heading: "Scope and principles",
          body: (
            <>
              <p>
                This policy applies to all fees paid to {SITE.name} for
                accounting, tax, and compliance services, whether charged as a
                monthly retainer or as a one-off engagement. It works alongside
                our <Link href="/legal/terms">Terms of Service</Link>; in case
                of any conflict on refund matters, this policy prevails.
              </p>
              <p>
                Our guiding principle is fairness: where we have not yet begun
                work, you should get your money back; where work has been
                delivered or money has been paid to a government department on
                your behalf, we cannot return what we no longer hold. We will
                always be transparent about which bucket your case falls into.
              </p>
            </>
          ),
        },
        {
          index: "§ 2",
          heading: "One-off services",
          body: (
            <>
              <p>
                For one-off services — such as ITR filing, GST registration,
                trademark filing, or company incorporation — the refund
                position depends on whether work has commenced:
              </p>
              <ul>
                <li>
                  <strong>Before work has commenced:</strong> if you cancel
                  before we have started any work on your engagement, you are
                  eligible for a <strong>full refund</strong> of our
                  professional fee. &quot;Work has commenced&quot; includes
                  data collection, drafting, portal login on your behalf, or
                  any internal allocation of the matter to a team member.
                </li>
                <li>
                  <strong>After work has commenced but before filing:</strong>{" "}
                  if we have started work but the filing or registration has not
                  yet been submitted to the authority, we will refund the{" "}
                  <strong>unutilised portion</strong> of our professional fee
                  based on what has been delivered. Any government fee already
                  paid on your behalf is non-refundable (see § 4 below).
                </li>
                <li>
                  <strong>After filing or registration is initiated:</strong>{" "}
                  once a return has been filed, a registration submitted, or a
                  statutory fee paid to the authority, our professional fee
                  becomes <strong>non-refundable</strong>. The work has been
                  delivered and the matter is closed from our side.
                </li>
              </ul>
            </>
          ),
        },
        {
          index: "§ 3",
          heading: "Retainer services",
          body: (
            <>
              <p>
                Retainer services — monthly bookkeeping, GST, TDS, payroll,
                ROC, and similar recurring engagements — can be cancelled at
                any time subject to the following terms:
              </p>
              <ul>
                <li>
                  <strong>Notice:</strong> 7 (seven) days&apos; written notice
                  by email or WhatsApp. No penalty, no questions.
                </li>
                <li>
                  <strong>Current month:</strong> the fee for the month in
                  which termination takes effect is{" "}
                  <strong>non-refundable</strong>, because the team has been
                  allocated and recurring work (books, returns, payroll) is
                  already underway.
                </li>
                <li>
                  <strong>Future months:</strong> any retainer fee collected in
                  advance for months after the effective date of termination
                  will be <strong>pro-rated and refunded</strong> within 7–10
                  working days.
                </li>
                <li>
                  <strong>Mid-cycle filings:</strong> if a statutory filing
                  falls within the notice period (for example, a monthly GSTR-3B
                  due on the 20th), we will complete that filing as part of the
                  current month&apos;s fee.
                </li>
              </ul>
            </>
          ),
        },
        {
          index: "§ 4",
          heading: "Statutory and government fees",
          body: (
            <>
              <p>
                Statutory fees, duties, taxes, and penalties paid to government
                departments on your behalf are{" "}
                <strong>never refundable by us</strong> once they have been
                remitted to the authority. This includes:
              </p>
              <ul>
                <li>GST registration or amendment fees;</li>
                <li>MCA (Ministry of Corporate Affairs) filing and incorporation fees;</li>
                <li>Income-tax advance tax, self-assessment tax, and demand payments;</li>
                <li>TDS challans deposited to the government;</li>
                <li>Trademark and IP India filing fees;</li>
                <li>
                  Late fees, penalties, and interest imposed by any department
                  or tribunal.
                </li>
              </ul>
              <p>
                We will always notify you before incurring such charges, and
                where possible we will suggest alternatives to avoid them. If
                you believe a government fee has been erroneously charged by a
                department, we will support you in pursuing a refund from that
                department under the relevant procedure — but the department&apos;s
                decision, not ours, governs the outcome.
              </p>
            </>
          ),
        },
        {
          index: "§ 5",
          heading: "How to request a refund",
          body: (
            <>
              <p>
                To request a refund, please email us at{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with:
              </p>
              <ul>
                <li>Your name and the entity you engaged us for;</li>
                <li>The invoice number(s) and date(s) of payment;</li>
                <li>The reason for the refund request; and</li>
                <li>Your preferred refund method (original payment method, UPI, or bank transfer).</li>
              </ul>
              <p>
                We will acknowledge your request within{" "}
                <strong>2 (two) working days</strong> and respond with a
                decision within <strong>5 (five) working days</strong>. Where
                the request is approved, the refund will be processed to your
                original payment method (or to a bank account you specify)
                within <strong>7–10 (seven to ten) working days</strong> from
                the date of approval.
              </p>
            </>
          ),
        },
        {
          index: "§ 6",
          heading: "Cases of no refund",
          body: (
            <>
              <p>
                For clarity, refunds will <strong>not</strong> be issued in the
                following cases:
              </p>
              <ul>
                <li>
                  Where a filing or registration has already been submitted to
                  the authority, even if it is later withdrawn or revised at
                  your request.
                </li>
                <li>
                  Where a registration, licence, or certification has been
                  completed and delivered to you (GSTIN, PAN, trademark
                  certificate, certificate of incorporation, etc.).
                </li>
                <li>
                  Where we have handled a notice, scrutiny, or appeal and
                  submitted a response or representation on your behalf.
                </li>
                <li>
                  Where statutory fees, duties, or penalties have been paid to a
                  government department on your behalf.
                </li>
                <li>
                  Where the request is made more than{" "}
                  <strong>30 (thirty) days</strong> after the date of payment
                  and work has been delivered in the interim.
                </li>
                <li>
                  Where the engagement has been terminated for cause under our{" "}
                  <Link href="/legal/terms">Terms of Service</Link> (e.g.
                  non-payment, breach, or fraud).
                </li>
              </ul>
            </>
          ),
        },
        {
          index: "§ 7",
          heading: "Chargebacks and disputes",
          body: (
            <>
              <p>
                If you believe a charge is incorrect, please contact us at{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> before
                initiating a chargeback with your bank or card issuer. We will
                make every effort to resolve the dispute within 5 working days.
                Initiating a chargeback without first contacting us may result
                in suspension of ongoing services until the dispute is
                resolved.
              </p>
            </>
          ),
        },
        {
          index: "§ 8",
          heading: "Changes to this policy",
          body: (
            <>
              <p>
                We may update this Refund &amp; Cancellation Policy from time
                to time. The &quot;Last updated&quot; date at the top of this
                page indicates when the policy was last revised. Changes will
                apply prospectively to fees paid after the effective date of the
                change; fees already paid continue to be governed by the policy
                in force at the time of payment.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
