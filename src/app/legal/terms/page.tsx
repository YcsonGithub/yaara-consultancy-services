import type { Metadata } from "next";
import Link from "next/link";
import { LegalBody } from "../legal-body";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms under which Yaara Consultancy Services provides accounting, tax, and compliance services — including client and Yaara responsibilities, fees, deadlines, liability, termination, and governing law.",
  alternates: { canonical: `${SITE.url}/legal/terms` },
};

export default function TermsPage() {
  return (
    <LegalBody
      title="Terms of Service"
      intro="The terms under which Yaara Consultancy Services provides accounting, tax, and compliance services to clients in India — and what each of us is responsible for when we work together."
      lastUpdated="2026"
      sections={[
        {
          index: "§ 1",
          heading: "Acceptance of terms",
          body: (
            <>
              <p>
                These Terms of Service (&quot;<strong>Terms</strong>&quot;)
                govern your engagement of {SITE.name} (&quot;{" "}
                <strong>Yaara</strong>&quot;, &quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;) for accounting, tax, and compliance services.
                By visiting our website, submitting an enquiry, sharing
                documents, or making a payment to us, you confirm that you have
                read, understood, and agreed to be bound by these Terms and our{" "}
                <Link href="/legal/privacy">Privacy Policy</Link> and{" "}
                <Link href="/legal/refund">Refund &amp; Cancellation Policy</Link>
                .
              </p>
              <p>
                If you are engaging us on behalf of a company, LLP,
                partnership, trust, or other entity, you confirm that you have
                the authority to bind that entity to these Terms. These Terms
                apply in addition to the written scope of work agreed for each
                engagement; where the two conflict, the written scope of work
                prevails for that engagement.
              </p>
            </>
          ),
        },
        {
          index: "§ 2",
          heading: "Engagement scope and services",
          body: (
            <>
              <p>
                Each engagement begins with a free 20-minute consultation in
                which we assess your needs, confirm the services we can
                deliver, and propose a written scope of work. The scope of work
                sets out the specific services, deliverables, timelines, fees,
                and any assumptions or exclusions. No binding engagement
                exists until both parties sign (or otherwise agree in writing)
                the scope of work.
              </p>
              <p>
                We offer services across five broad categories: (i) Tax &amp;
                Statutory Compliance, (ii) Business Registration &amp;
                Corporate, (iii) Accounting &amp; Bookkeeping, (iv) Payroll
                &amp; HR Compliance, and (v) Advisory &amp; Growth. Services
                may be engaged individually on a one-off basis or as a monthly
                retainer covering a defined set of recurring deliverables. The
                full catalog of services is published on our{" "}
                <Link href="/services">Services</Link> page, and our{" "}
                <Link href="/pricing">Fees</Link> page explains how we scope and
                quote: every engagement is priced in writing before work begins.
              </p>
              <p>
                Any service not expressly included in the written scope of work
                is out of scope and will be billed separately on a time-and-materials
                basis, with your prior written approval.
              </p>
            </>
          ),
        },
        {
          index: "§ 3",
          heading: "Yaara is not a Chartered Accountancy firm",
          body: (
            <>
              <p>
                <strong>This matters, and we are upfront about it:</strong>{" "}
                {SITE.name} is an accounting, tax, and compliance consultancy —
                not a practicing Chartered Accountancy firm registered with the
                Institute of Chartered Accountants of India (ICAI). Our founder,{" "}
                {SITE.founder}, is a practitioner with five years of hands-on
                accounting and compliance experience.
              </p>
              <p>
                Work that legally requires the signature of a practicing
                Chartered Accountant — including statutory audits under the
                Companies Act, 2013, tax audits under section 44AB of the
                Income-tax Act, 1961, GST audits under section 35(5) of the
                CGST Act, 2017, and certain certifications and attestations —
                is handled through our empanelled network of independent
                practicing Chartered Accountants. Each CA partner is engaged
                under a written agreement, is bound by the ICAI Code of Ethics,
                and signs off in their own capacity as a practicing CA. The
                same model is used by every reputable compliance platform in
                India.
              </p>
              <p>
                We are also not a law firm, and nothing we provide constitutes
                legal advice. Where a matter requires legal counsel, we will
                say so and recommend you engage a qualified advocate. See our{" "}
                <Link href="/legal/disclaimer">Disclaimer</Link> for the full
                scope of what our information does and does not constitute.
              </p>
            </>
          ),
        },
        {
          index: "§ 4",
          heading: "Your responsibilities as a client",
          body: (
            <>
              <p>
                To enable us to deliver accurate and timely work, you agree
                to:
              </p>
              <ul>
                <li>
                  Provide <strong>accurate, complete, and truthful</strong>{" "}
                  information, documents, and authorisations when requested,
                  including PAN, Aadhaar (where required), GSTIN, financial
                  statements, bank statements, and KYC records.
                </li>
                <li>
                  Share information <strong>promptly</strong> and within any
                  deadline we communicate, recognising that statutory due dates
                  are fixed by law and cannot be moved.
                </li>
                <li>
                  Review and <strong>approve filings before submission</strong>{" "}
                  where we share drafts with you for confirmation, and respond
                  to our queries within a reasonable time.
                </li>
                <li>
                  Maintain your own books of accounts and statutory registers
                  where that responsibility has not been expressly outsourced to
                  us in the scope of work.
                </li>
                <li>
                  Pay our fees and any statutory fees, taxes, or penalties
                  incurred on your behalf within the timelines set out in our
                  invoices.
                </li>
                <li>
                  Notify us promptly of any change in your business structure,
                  ownership, address, or contact details that may affect a
                  filing or ongoing engagement.
                </li>
              </ul>
            </>
          ),
        },
        {
          index: "§ 5",
          heading: "Our responsibilities",
          body: (
            <>
              <p>In return, we agree to:</p>
              <ul>
                <li>
                  Perform the agreed services with <strong>reasonable skill,
                  care, and diligence</strong>, in accordance with current
                  Indian tax, corporate, and GST law.
                </li>
                <li>
                  File returns and documents <strong>accurately and before the
                  statutory due date</strong>, provided you have shared the
                  required information within the timelines we communicate.
                </li>
                <li>
                  Maintain <strong>confidentiality</strong> of your personal
                  and business data in line with our{" "}
                  <Link href="/legal/privacy">Privacy Policy</Link> and the
                  DPDP Act, 2023.
                </li>
                <li>
                  Communicate proactively and <strong>flag risks</strong> we
                  spot in your books, filings, or compliance status, and
                  recommend corrective action.
                </li>
                <li>
                  Provide a <strong>single point of contact</strong> reachable
                  on WhatsApp or email during working hours (Monday to Friday,
                  10:00 AM to 7:00 PM IST), with a typical response time of one
                  working day.
                </li>
                <li>
                  Engage empanelled CA partners for statutory sign-off work
                  under written confidentiality terms, and disclose to you
                  which CA partner will sign your report.
                </li>
              </ul>
            </>
          ),
        },
        {
          index: "§ 6",
          heading: "Fees, invoicing, and payment",
          body: (
            <>
              <p>
                Fees are quoted in Indian Rupees (INR) and are exclusive of
                applicable government fees, taxes, and statutory charges unless
                expressly stated otherwise. The two fee structures we use are:
              </p>
              <ul>
                <li>
                  <strong>Retainer services</strong> — billed{" "}
                  <strong>monthly in advance</strong>. The first invoice is
                  raised at engagement and covers the month in which services
                  commence; subsequent invoices are raised on the first working
                  day of each month.
                </li>
                <li>
                  <strong>One-off services</strong> — invoiced{" "}
                  <strong>at engagement</strong>, before work commences. Any
                  government fee, duty, or penalty is billed at actuals on a
                  reimbursement basis.
                </li>
              </ul>
              <p>
                We accept UPI, bank transfer (NEFT/IMPS/RTGS), and cheques drawn
                in favour of {SITE.name}. All our invoices are GST-compliant
                where applicable. Unless otherwise agreed, invoices are payable
                within <strong>7 (seven) days</strong> of issue. Overdue
                invoices may attract interest at 1.5% per month or part thereof.
                Refund and cancellation terms are set out in our{" "}
                <Link href="/legal/refund">Refund &amp; Cancellation Policy</Link>
                .
              </p>
            </>
          ),
        },
        {
          index: "§ 7",
          heading: "Deadlines and timely information",
          body: (
            <>
              <p>
                Statutory due dates — for income-tax returns, GST returns, TDS
                returns, ROC filings, and payroll compliance — are{" "}
                <strong>fixed by law</strong> and cannot be extended by us.
                Many due dates depend on information that only you can provide
                (turnover, scheme opted, prior filings, etc.), and we will
                communicate a clear internal cut-off date by which we need your
                information to file on time.
              </p>
              <p>
                If you share information after the internal cut-off date, or if
                the information is incomplete or inconsistent, we will use
                reasonable efforts to file on time but{" "}
                <strong>cannot guarantee it</strong>. Yaara is not liable for
                late fees, penalties, or interest arising from delays caused by
                late, incomplete, or inaccurate information supplied by you or
                your team — though we will always flag the risk in writing as
                soon as we become aware of it.
              </p>
              <p>
                Our published <Link href="/resources/compliance-calendar">compliance
                calendar</Link> shows indicative due dates for common cases.
                Your exact due date can vary by turnover, state, scheme (e.g.
                QRMP), prior filings, and amendments notified by the
                department; please confirm your specific due date with us
                before relying on the calendar.
              </p>
            </>
          ),
        },
        {
          index: "§ 8",
          heading: "Intellectual property",
          body: (
            <>
              <p>
                All deliverables we create for you — including drafted returns,
                financial statements, MIS reports, advisory memoranda, and
                working papers — are <strong>assigned to you</strong> on full
                payment of the related invoice, to the extent they are
                originally created for your engagement. Pre-existing
                methodologies, templates, checklists, and tools we use remain
                our property and are licensed to you only for your internal use
                in connection with the engagement.
              </p>
              <p>
                You retain all rights, title, and interest in the documents and
                data you share with us. We do not use your data to train any
                machine-learning model, and we do not publish your name or
                identify you as a client without your prior written consent,
                except where required by law or by a regulator.
              </p>
            </>
          ),
        },
        {
          index: "§ 9",
          heading: "Confidentiality and data",
          body: (
            <>
              <p>
                We will hold your personal and business information in strict
                confidence and will not disclose it to any third party except:
                (i) to government portals and regulators for the purpose of
                filings on your behalf; (ii) to empanelled CA partners engaged
                for statutory sign-off, under written confidentiality terms;
                (iii) to our cloud and software providers under data-processing
                agreements; and (iv) where required by law, regulation, or a
                binding order of a court or regulator. Our full data handling
                practices are described in our{" "}
                <Link href="/legal/privacy">Privacy Policy</Link>.
              </p>
            </>
          ),
        },
        {
          index: "§ 10",
          heading: "Limitation of liability",
          body: (
            <>
              <p>
                To the fullest extent permitted by law, the total aggregate
                liability of {SITE.name}, its founder, team members, and CA
                partners for any claim arising out of or relating to an
                engagement is <strong>limited to the fees actually paid by you
                to us for the specific engagement</strong> giving rise to the
                claim in the 12 months preceding the event giving rise to the
                claim.
              </p>
              <p>
                In no event shall we be liable for indirect, incidental,
                special, consequential, or punitive damages, or for loss of
                profits, loss of business, loss of goodwill, or loss of
                anticipated savings. We are not liable for penalties, interest,
                or losses arising from: (i) incomplete, inaccurate, or delayed
                information you provide; (ii) changes in law that take effect
                after a filing is made in good faith; (iii) actions of
                government departments, banks, or third-party portals; or (iv)
                your failure to act on advice or filings we have provided.
              </p>
              <p>
                Nothing in these Terms limits liability that cannot be limited
                under applicable law, including liability for fraud, wilful
                misconduct, or gross negligence.
              </p>
            </>
          ),
        },
        {
          index: "§ 11",
          heading: "Termination",
          body: (
            <>
              <p>
                Either party may terminate an engagement at any time by giving{" "}
                <strong>7 (seven) days&apos; written notice</strong> to the
                other. On termination:
              </p>
              <ul>
                <li>
                  You will pay for all services rendered and expenses incurred
                  up to the effective date of termination.
                </li>
                <li>
                  Retainer fees for the month in which termination takes effect
                  are <strong>non-refundable</strong>; any retainer fee
                  collected for future months will be{" "}
                  <strong>pro-rated and refunded</strong> within 7–10 working
                  days, in line with our{" "}
                  <Link href="/legal/refund">Refund &amp; Cancellation Policy</Link>
                  .
                </li>
                <li>
                  We will hand over all completed work papers, filed returns,
                  and your records in an orderly manner, and will reasonably
                  cooperate to ensure a smooth transition to a successor
                  practitioner.
                </li>
                <li>
                  We may suspend or terminate services immediately if you breach
                  these Terms, fail to pay an undisputed invoice for more than
                  30 days, or engage in conduct that exposes us to legal or
                  reputational risk.
                </li>
              </ul>
            </>
          ),
        },
        {
          index: "§ 12",
          heading: "Governing law and jurisdiction",
          body: (
            <>
              <p>
                These Terms and any dispute arising out of or in connection
                with them or any engagement shall be governed by and construed
                in accordance with the laws of the Republic of India,
                specifically the laws in force in the State of{" "}
                <strong>Telangana</strong>.
              </p>
              <p>
                The parties submit to the <strong>exclusive jurisdiction of the
                courts at Hyderabad, Telangana</strong> for the resolution of
                any such dispute, without prejudice to our right to seek
                injunctive or equitable relief in any court of competent
                jurisdiction to protect our intellectual property or
                confidential information.
              </p>
            </>
          ),
        },
        {
          index: "§ 13",
          heading: "Changes to these Terms",
          body: (
            <>
              <p>
                We may update these Terms from time to time. The &quot;Last
                updated&quot; date at the top of this page indicates when the
                Terms were last revised. Material changes will be communicated
                to active clients by email or WhatsApp at least 7 days before
                they take effect. Continued engagement of our services after a
                change takes effect constitutes acceptance of the updated Terms.
              </p>
            </>
          ),
        },
        {
          index: "§ 14",
          heading: "Contact",
          body: (
            <>
              <p>
                If you have any questions about these Terms, please contact us
                at{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. You can also
                write to us at our registered office:{" "}
                {CONTACT.address.line1}, {CONTACT.address.line2},{" "}
                {CONTACT.address.city}, {CONTACT.address.state}{" "}
                {CONTACT.address.pincode}, {CONTACT.address.country}.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
