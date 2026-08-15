import type { Metadata } from "next";
import Link from "next/link";
import { LegalBody } from "../legal-body";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "The legal disclaimer for information provided by Yaara Consultancy Services — on our website, in our compliance calendar, and across our knowledge resources. Informational only; not professional advice.",
  alternates: { canonical: `${SITE.url}/legal/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <LegalBody
      title="Disclaimer"
      intro="What our information is — and what it is not. Please read this before relying on anything we publish, including the compliance calendar, FAQs, fee listings, and knowledge articles."
      lastUpdated="2026"
      sections={[
        {
          index: "§ 1",
          heading: "Informational nature of this website",
          body: (
            <>
              <p>
                All content on this website — including the compliance
                calendar, FAQs, fee listings, service descriptions, knowledge
                articles, blog posts, and any downloadable templates — is
                provided for <strong>general informational purposes only</strong>.
                It is intended to help you understand common Indian tax, GST,
                corporate, and payroll obligations in plain language. It is not
                a substitute for professional advice tailored to your specific
                circumstances.
              </p>
              <p>
                Tax and corporate law in India changes frequently — through
                annual Finance Acts, GST Council notifications, circulars,
                instructions, and judicial decisions. Information that was
                correct when published may become outdated. We make reasonable
                efforts to keep published content current, but we do not
                warrant that any item on this site is up to date at the moment
                you read it.
              </p>
              <p>
                You should not act or refrain from acting on the basis of
                anything published on this website without first obtaining
                specific professional advice. Engaging us for a paid engagement
                — through a signed scope of work — is the way to get advice
                that takes your actual facts into account.
              </p>
            </>
          ),
        },
        {
          index: "§ 2",
          heading: "Not legal, tax, or accounting advice",
          body: (
            <>
              <p>
                Nothing on this website constitutes{" "}
                <strong>legal, tax, accounting, or investment advice</strong>,
                nor does it create any practitioner-client, attorney-client, or
                accountant-client relationship until a written engagement scope
                is signed by both parties. The general descriptions of
                treatments, schemes, and deadlines are simplified for
                readability and may not capture every condition, exception, or
                interaction that applies to your situation.
              </p>
              <p>
                Specific matters — such as whether you qualify for presumptive
                taxation under section 44ADA or 44AD, whether GST applies to a
                particular supply, whether a transaction is taxable under
                capital gains or business income, or whether a section 8 company
                is the right vehicle for your non-profit — depend on facts and
                documentation that we cannot assess through a website. Please{" "}
                <Link href="/book">book a consultation</Link> before relying on
                any conclusion that matters to your business.
              </p>
            </>
          ),
        },
        {
          index: "§ 3",
          heading: "Deadlines and the compliance calendar",
          body: (
            <>
              <p>
                The due dates shown in our{" "}
                <Link href="/resources/compliance-calendar">compliance
                calendar</Link> are <strong>indicative</strong> and apply to
                common, standard cases. Your actual statutory due date can vary
                based on several factors, including:
              </p>
              <ul>
                <li>Your turnover, gross receipts, or scale of business;</li>
                <li>The state(s) in which you operate or are registered;</li>
                <li>
                  The scheme you have opted into or out of (e.g. GST QRMP, GST
                  composition, presumptive taxation under sections 44AD / 44ADA
                  / 44AE);
                </li>
                <li>Your prior filing history and any pending defaults;</li>
                <li>
                  Notifications, circulars, or extensions issued by the CBIC,
                  CBDT, MCA, or your state&apos;s commercial tax department;
                </li>
                <li>
                  Whether you are a company, LLP, proprietorship, trust,
                  AOP, or individual.
                </li>
              </ul>
              <p>
                The calendar is a <strong>guide, not a substitute</strong> for
                confirming your specific due dates with us before each filing.
                We will not be liable for any loss arising from your reliance on
                a calendar date that turned out not to apply to your case.
              </p>
            </>
          ),
        },
        {
          index: "§ 4",
          heading: "Yaara is not a Chartered Accountancy firm",
          body: (
            <>
              <p>
                {SITE.name} is an accounting, tax, and compliance consultancy —
                not a practicing Chartered Accountancy firm registered with the
                Institute of Chartered Accountants of India (ICAI). Work that
                legally requires a practicing CA&apos;s signature — statutory
                audits under the Companies Act, 2013; tax audits under section
                44AB of the Income-tax Act, 1961; GST audits under section
                35(5) of the CGST Act, 2017; and certain certifications — is
                handled through our empanelled network of independent practicing
                Chartered Accountants, each of whom signs in their own capacity
                and is bound by the ICAI Code of Ethics.
              </p>
              <p>
                We are also not a law firm, and nothing on this website
                constitutes legal advice. Where a matter requires legal counsel,
                we will say so and recommend you engage a qualified advocate.
                Full engagement terms are set out in our{" "}
                <Link href="/legal/terms">Terms of Service</Link>.
              </p>
              <p>
                We mention this openly because being honest about it matters
                more to us than appearing to be something we are not. The same
                model is used by every reputable compliance platform in India.
              </p>
            </>
          ),
        },
        {
          index: "§ 5",
          heading: "No client-practitioner relationship by site visit",
          body: (
            <>
              <p>
                Visiting this website, sending us an enquiry email, completing
                a contact form, or following us on social media does{" "}
                <strong>not</strong> create a client-practitioner relationship
                between you and {SITE.name}. That relationship begins only when
                both parties sign a written engagement scope (or otherwise
                agree in writing) for a specific matter.
              </p>
              <p>
                Until an engagement is formal, please do not share confidential
                information — such as bank statements, PAN/Aadhaar, or
                unpublished financials — over email or WhatsApp. We cannot be
                responsible for the security of information you send us before
                an engagement is in place, and we may not be able to treat it as
                privileged. Once you are a client, our{" "}
                <Link href="/legal/privacy">Privacy Policy</Link> governs how we
                handle your data.
              </p>
            </>
          ),
        },
        {
          index: "§ 6",
          heading: "External links policy",
          body: (
            <>
              <p>
                This website contains links to external resources — including
                the GST portal (GSTN), the Income Tax e-filing portal, the
                Ministry of Corporate Affairs (MCA), the EPFO, the ESIC, RBI,
                and other government and regulatory sites. We also occasionally
                link to reputable third-party publications, news articles, and
                reference materials.
              </p>
              <p>
                We do not control these external sites and are not responsible
                for their content, accuracy, availability, privacy practices, or
                any opinions expressed in them. The presence of a link does not
                constitute an endorsement. Always verify information directly on
                the official source before acting on it, particularly where a
                statutory deadline, fee, or procedure is involved.
              </p>
              <p>
                If you find a broken link on our site, please let us know at{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> — we
                appreciate the heads-up.
              </p>
            </>
          ),
        },
        {
          index: "§ 7",
          heading: "Accuracy of content",
          body: (
            <>
              <p>
                We make reasonable efforts to ensure that the information
                published on this website is accurate when posted. However,
                Indian tax, GST, and corporate law changes frequently, and
                errors can occur despite our review process. We do not warrant
                the completeness, accuracy, reliability, or timeliness of any
                information on this site, and we disclaim all liability for any
                loss or damage arising from reliance on it.
              </p>
              <p>
                If you spot an error or an outdated figure, please write to us
                at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> — we
                take corrections seriously and will update published content as
                quickly as we can verify the change.
              </p>
            </>
          ),
        },
        {
          index: "§ 8",
          heading: "Limitation of liability",
          body: (
            <>
              <p>
                To the fullest extent permitted by law, neither {SITE.name} nor
                its founder, team members, or CA partners shall be liable for
                any direct, indirect, incidental, consequential, special, or
                exemplary damages arising from your use of, or reliance on, any
                information published on this website. This disclaimer does not
                affect any rights you may have under the Consumer Protection
                Act, 2019 or any other law that cannot be excluded by contract.
              </p>
            </>
          ),
        },
        {
          index: "§ 9",
          heading: "Changes to this disclaimer",
          body: (
            <>
              <p>
                We may update this Disclaimer from time to time. The &quot;Last
                updated&quot; date at the top of this page reflects the most
                recent revision. We encourage you to revisit this page
                periodically.
              </p>
            </>
          ),
        },
        {
          index: "§ 10",
          heading: "Contact",
          body: (
            <>
              <p>
                If you have any questions about this Disclaimer or any content
                on this website, please contact us at{" "}
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
