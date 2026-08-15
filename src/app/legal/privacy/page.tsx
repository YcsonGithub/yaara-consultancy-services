import type { Metadata } from "next";
import Link from "next/link";
import { LegalBody } from "../legal-body";
import { CONTACT, GRIEVANCE_OFFICER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Yaara Consultancy Services collects, uses, stores, and protects personal data under the Digital Personal Data Protection Act, 2023 — including your rights and our Grievance Officer details.",
  alternates: { canonical: `${SITE.url}/legal/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalBody
      title="Privacy Policy"
      intro="How we collect, use, share, and protect your personal data when you engage us for accounting, tax, and compliance services — written to comply with the Digital Personal Data Protection Act, 2023 (DPDP Act)."
      lastUpdated="2026"
      showGrievance
      sections={[
        {
          index: "§ 1",
          heading: "Who we are and our role under the DPDP Act",
          body: (
            <>
              <p>
                {SITE.name} (&quot;<strong>Yaara</strong>&quot;, &quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;) is an accounting, tax, and
                compliance consultancy founded and led by{" "}
                <strong>{SITE.founder}</strong>, with its registered office at{" "}
                {CONTACT.address.line1}, {CONTACT.address.line2},{" "}
                {CONTACT.address.city}, {CONTACT.address.state}{" "}
                {CONTACT.address.pincode}, {CONTACT.address.country}.
              </p>
              <p>
                Under the DPDP Act, 2023, Yaara acts as a{" "}
                <strong>Data Fiduciary</strong> — the entity that, alone or in
                conjunction with others, determines the purpose and means of
                processing your personal data. We decide why and how your data
                is processed when you visit our website, contact us, or engage
                us for professional services. You, in turn, are the{" "}
                <strong>Data Principal</strong> (the individual to whom the
                personal data relates); where you engage us on behalf of a
                company, LLP, trust, or partnership, you are the{" "}
                <strong>Data Principal</strong> for your own personal data and
                the authorised representative of the data principals whose data
                you share with us (such as directors, partners, employees, or
                beneficial owners).
              </p>
              <p>
                This policy applies to all personal data processed by Yaara
                through this website ({SITE.domain}), over WhatsApp, email, and
                telephone, and during the delivery of our services. It does not
                apply to data processed by government portals (such as the GST
                portal, Income Tax e-filing portal, or MCA) once we submit a
                filing on your behalf — those portals are independent Data
                Fiduciaries with their own privacy policies.
              </p>
            </>
          ),
        },
        {
          index: "§ 2",
          heading: "Grievance Officer (DPDP Act §8(9))",
          body: (
            <>
              <p>
                As required by Section 8(9) of the DPDP Act, Yaara has
                designated a Grievance Officer to address any complaints,
                queries, or requests you may have regarding the processing of
                your personal data. The Grievance Officer&apos;s details are
                shown in the gold-bordered callout above this section. You may
                also reach the Grievance Officer by post at our registered
                office address.
              </p>
              <p>
                We acknowledge every complaint within{" "}
                <strong>24 (twenty-four) hours</strong> of receipt and resolve
                it within <strong>21 (twenty-one) days</strong> from the date of
                receipt, in accordance with the timelines prescribed under the
                DPDP Act. Where a resolution requires more time (for example,
                because we need to retrieve records from a prior period or
                coordinate with a CA partner), we will inform you of the
                extended timeline and the reasons for it within the initial
                21-day window.
              </p>
            </>
          ),
        },
        {
          index: "§ 3",
          heading: "Personal data we collect",
          body: (
            <>
              <p>
                We collect only the personal data that is necessary to deliver
                the services you engage us for, to communicate with you, and to
                comply with our legal obligations. The categories of personal
                data we typically process are:
              </p>
              <ul>
                <li>
                  <strong>Identity data:</strong> your name, father&apos;s or
                  spouse&apos;s name, date of birth, photograph, PAN, Aadhaar
                  (where required for a specific filing), DIN, and similar
                  identifiers required for statutory filings.
                </li>
                <li>
                  <strong>Contact data:</strong> your email address, phone
                  number, postal address, and WhatsApp number; for businesses,
                  the contact details of authorised signatories and finance
                  team members.
                </li>
                <li>
                  <strong>Business &amp; financial data:</strong> bank
                  statements, invoices, sales and purchase registers, books of
                  accounts, trial balances, financial statements, GST returns,
                  TDS challans, payroll registers, and similar records you
                  share with us to prepare filings or advise you.
                </li>
                <li>
                  <strong>KYC &amp; onboarding data:</strong> identity proofs,
                  address proofs, photographs, board resolutions, partnership
                  deeds, MOA/AOA, and other documents required to onboard you
                  as a client and to file on your behalf.
                </li>
                <li>
                  <strong>Communications data:</strong> the contents of emails,
                  WhatsApp messages, call notes, meeting records, and
                  consultation notes that we exchange with you, retained so we
                  can provide continuity of service.
                </li>
                <li>
                  <strong>Website &amp; usage data:</strong> IP address, browser
                  type, pages visited, and similar technical data collected
                  automatically when you visit our website, processed through
                  cookies and similar technologies as described in our{" "}
                  <Link href="/legal/cookie">Cookie Policy</Link>.
                </li>
              </ul>
              <p>
                We do not collect or process any personal data that falls within
                the definition of <strong>&quot;sensitive personal data&quot;</strong>{" "}
                or <strong>children&apos;s data</strong> beyond what is strictly
                necessary for statutory filings. We do not knowingly process
                the personal data of children under 18 unless you provide it to
                us as a parent or guardian in connection with a legitimate
                engagement (for example, a minor&apos;s income-tax filing).
              </p>
            </>
          ),
        },
        {
          index: "§ 4",
          heading: "Purposes of processing",
          body: (
            <>
              <p>We process your personal data for the following purposes:</p>
              <ul>
                <li>
                  <strong>Service delivery:</strong> preparing and filing your
                  income-tax returns, GST returns, TDS returns, ROC filings,
                  and other statutory documents; maintaining your books of
                  accounts; processing payroll; and delivering advisory
                  services you have engaged us for.
                </li>
                <li>
                  <strong>Communication:</strong> responding to your enquiries,
                  sending you reminders about upcoming deadlines, sharing
                  acknowledgements and filings, and providing ongoing
                  compliance support.
                </li>
                <li>
                  <strong>Compliance with legal obligations:</strong> meeting
                  our record-keeping and reporting obligations under the
                  Income-tax Act, 1961, the Central Goods and Services Tax
                  Act, 2017, the Companies Act, 2013, and other applicable
                  Indian law.
                </li>
                <li>
                  <strong>Statutory sign-off via CA partner network:</strong>{" "}
                  where a filing requires the signature of a practicing
                  Chartered Accountant (for example, a tax audit under section
                  44AB), sharing the minimum necessary data with an empanelled
                  CA to issue the audit report or certification.
                </li>
                <li>
                  <strong>Internal administration:</strong> maintaining client
                  records, conflict-of-interest checks, internal quality
                  review, and training of our team members under appropriate
                  confidentiality controls.
                </li>
              </ul>
              <p>
                We do not use your personal data for any purpose that is
                incompatible with the purposes for which it was collected. Where
                we intend to use data for a new purpose, we will seek your
                consent before doing so.
              </p>
            </>
          ),
        },
        {
          index: "§ 5",
          heading: "Legal basis for processing",
          body: (
            <>
              <p>
                Under the DPDP Act, our processing of your personal data is
                lawful where it is based on one or more of the following
                grounds:
              </p>
              <ul>
                <li>
                  <strong>Consent:</strong> you have given specific, informed,
                  and unambiguous consent to the processing of your personal
                  data for one or more specified purposes — for example, when
                  you submit an enquiry form, accept our engagement scope, or
                  consent to website analytics cookies via our consent banner.
                </li>
                <li>
                  <strong>Necessary for performance of a contract:</strong>{" "}
                  processing is necessary to deliver the services set out in
                  our written engagement scope — for example, filing your
                  income-tax return or processing your monthly payroll.
                </li>
                <li>
                  <strong>Compliance with a legal obligation:</strong>{" "}
                  processing is necessary to comply with Indian law — for
                  example, retaining tax records for the periods prescribed
                  under the Income-tax Act, or reporting specified
                  transactions under FATCA/CRS where applicable.
                </li>
                <li>
                  <strong>Legitimate interest:</strong> processing is necessary
                  for purposes such as fraud prevention, network and
                  information security, internal quality review, and dispute
                  resolution — always balanced against your reasonable
                  expectations and rights.
                </li>
              </ul>
              <p>
                Where processing is based on consent, you may withdraw your
                consent at any time by emailing our Grievance Officer at{" "}
                <a href={`mailto:${GRIEVANCE_OFFICER.email}`}>
                  {GRIEVANCE_OFFICER.email}
                </a>
                . Withdrawing consent does not affect the lawfulness of
                processing carried out before withdrawal, nor does it relieve us
                of any legal obligation to retain or process certain data.
              </p>
            </>
          ),
        },
        {
          index: "§ 6",
          heading: "Data retention",
          body: (
            <>
              <p>
                We retain your personal data only for as long as necessary to
                fulfil the purposes for which it was collected, including to
                meet our legal, regulatory, and statutory obligations. The
                principal retention periods we follow are:
              </p>
              <ul>
                <li>
                  <strong>Tax records:</strong> 6 to 8 years from the end of
                  the relevant assessment year, in line with the limitation
                  periods under section 149 of the Income-tax Act, 1961 (which
                  permits reassessment up to 6 years, extended in limited
                  cases).
                </li>
                <li>
                  <strong>GST records:</strong> until the expiry of 6 years
                  from the due date of furnishing the annual return for the
                  year concerned, as required under section 36 of the CGST Act,
                  2017.
                </li>
                <li>
                  <strong>Companies Act records:</strong> for the period
                  prescribed under the Companies Act, 2013 and applicable rules
                  — typically 8 financial years for statutory registers and
                  filed documents.
                </li>
                <li>
                  <strong>Payroll &amp; HR records:</strong> for the periods
                  prescribed under the Employees&apos; Provident Funds Act,
                  ESI Act, and Payment of Wages Act — typically 3 to 7 years
                  depending on the record type.
                </li>
                <li>
                  <strong>Communications &amp; enquiries:</strong> for the
                  duration of your engagement and for 2 years thereafter, after
                  which they are securely deleted unless required for an
                  ongoing matter.
                </li>
                <li>
                  <strong>Website analytics data:</strong> aggregated and
                  retained for up to 14 months, in line with our analytics
                  provider&apos;s default retention settings.
                </li>
              </ul>
              <p>
                When retention is no longer necessary, we either securely erase
                the data or anonymise it so that it can no longer be linked to
                you. Records held by government portals after a filing is
                submitted are governed by the retention policies of those
                portals and are outside our control.
              </p>
            </>
          ),
        },
        {
          index: "§ 7",
          heading: "Data sharing and recipients",
          body: (
            <>
              <p>
                We do not sell your personal data, and we do not share it with
                third parties for their own marketing or commercial purposes. We
                share personal data only with the following categories of
                recipients, and only the minimum necessary data for each
                purpose:
              </p>
              <ul>
                <li>
                  <strong>Government portals &amp; authorities:</strong> the
                  GST Network, the Income Tax Department, the Ministry of
                  Corporate Affairs, the Employees&apos; Provident Fund
                  Organisation, the ESIC, the Reserve Bank of India (where
                  applicable), and other regulators — for the purpose of
                  filing, reporting, and responding to notices on your behalf.
                </li>
                <li>
                  <strong>Empanelled CA partner network:</strong> independent
                  practicing Chartered Accountants engaged for statutory audit,
                  tax audit under section 44AB, GST audit under section 35(5),
                  and other certifications that legally require a practicing
                  CA&apos;s signature. Each CA partner is bound by a written
                  confidentiality agreement and by the ICAI Code of Ethics.
                </li>
                <li>
                  <strong>Banking &amp; payment partners:</strong> our bank and
                  payment service providers, for the purpose of receiving your
                  fees and disbursing payments on your behalf (such as advance
                  tax or statutory fees).
                </li>
                <li>
                  <strong>Cloud &amp; software providers:</strong> secure cloud
                  storage, accounting software, document management, and
                  communication tools used to deliver our services, each
                  contracted under data-processing terms that require
                  confidentiality and security.
                </li>
                <li>
                  <strong>Legal &amp; regulatory advisors:</strong> where
                  reasonably necessary to obtain legal advice or to respond to
                  a regulator, court, or law-enforcement request that is
                  legally binding on us.
                </li>
              </ul>
              <p>
                We do not transfer your personal data outside India except
                where it is incidental to using a global cloud or software
                provider (for example, email or accounting software with
                servers outside India). Where such a transfer occurs, we rely
                on the exemption under the DPDP Act for transfers to countries
                notified by the Central Government, and we require our
                providers to maintain equivalent levels of protection.
              </p>
            </>
          ),
        },
        {
          index: "§ 8",
          heading: "Your rights as a Data Principal",
          body: (
            <>
              <p>
                The DPDP Act grants you, as a Data Principal, the following
                rights in relation to your personal data processed by us. To
                exercise any of these rights, please email our Grievance
                Officer at{" "}
                <a href={`mailto:${GRIEVANCE_OFFICER.email}`}>
                  {GRIEVANCE_OFFICER.email}
                </a>{" "}
                — we will respond within the timelines set out in the callout
                above.
              </p>
              <ul>
                <li>
                  <strong>Right to access information:</strong> you may request
                  a summary of the personal data we hold about you, the
                  purposes for which it is processed, and the categories of
                  recipients with whom it has been shared.
                </li>
                <li>
                  <strong>Right to correction &amp; completion:</strong> you
                  may request that we correct any inaccurate, incomplete, or
                  outdated personal data, or update it to reflect your current
                  circumstances.
                </li>
                <li>
                  <strong>Right to erasure:</strong> you may request that we
                  erase your personal data, subject to our legal retention
                  obligations (for example, tax records that must be retained
                  for 6–8 years cannot be erased before the expiry of the
                  retention period).
                </li>
                <li>
                  <strong>Right to grievance redressal:</strong> you have the
                  right to lodge a complaint with our Grievance Officer and, if
                  not satisfied with our response, to approach the Data
                  Protection Board of India established under the DPDP Act.
                </li>
                <li>
                  <strong>Right to nominate:</strong> you may nominate any
                  other individual to exercise your rights under the DPDP Act
                  in the event of your death or incapacity. To make or update a
                  nomination, please email our Grievance Officer.
                </li>
              </ul>
              <p>
                We may ask you to verify your identity before responding to a
                request, particularly where the request involves sensitive
                records. We will not charge a fee for reasonable requests,
                though we may charge a reasonable fee for repeated or manifestly
                unfounded requests, in line with the rules prescribed under the
                DPDP Act.
              </p>
            </>
          ),
        },
        {
          index: "§ 9",
          heading: "Security measures",
          body: (
            <>
              <p>
                We take the security of your personal data seriously and have
                implemented a layered set of technical, organisational, and
                physical measures designed to protect it against unauthorised
                access, alteration, disclosure, or destruction:
              </p>
              <ul>
                <li>
                  <strong>Encrypted uploads:</strong> documents you share with
                  us are transmitted over TLS 1.2+ encryption and stored in
                  encrypted form on access-controlled cloud storage.
                </li>
                <li>
                  <strong>Access controls:</strong> access to your personal data
                  is restricted to authorised team members on a need-to-know
                  basis, protected by strong authentication, and logged for
                  audit.
                </li>
                <li>
                  <strong>Confidentiality agreements:</strong> every team
                  member and every CA partner in our network signs a written
                  confidentiality agreement before any access to client data is
                  granted.
                </li>
                <li>
                  <strong>Secure communication:</strong> we use WhatsApp
                  Business and email with appropriate security settings; for
                  highly sensitive engagements we will agree a more secure
                  channel.
                </li>
                <li>
                  <strong>Regular review:</strong> we periodically review our
                  security controls and update them in response to evolving
                  threats and the rules prescribed under the DPDP Act.
                </li>
              </ul>
              <p>
                In the unlikely event of a personal data breach that is likely
                to result in a significant harm to you, we will notify you and
                the Data Protection Board of India in accordance with the
                timelines and procedures set out in the DPDP Act and the rules
                made thereunder.
              </p>
            </>
          ),
        },
        {
          index: "§ 10",
          heading: "Cookies and similar technologies",
          body: (
            <>
              <p>
                Our website uses cookies and similar technologies to operate
                the site, remember your consent preferences, and — only if you
                consent — measure traffic through Google Analytics 4 with
                Google Consent Mode v2. We do not use cookies for cross-site
                advertising. The full list of cookies, their purposes, and how
                to disable them is set out in our{" "}
                <Link href="/legal/cookie">Cookie Policy</Link>.
              </p>
            </>
          ),
        },
        {
          index: "§ 11",
          heading: "Children's data",
          body: (
            <>
              <p>
                Our services are directed at businesses and adults engaging us
                for professional compliance work. We do not knowingly collect
                personal data directly from children under 18. Where a minor is
                a party to a filing (for example, a minor&apos;s income-tax
                return or a minor nominee in a trust), the data is provided by
                a parent or lawful guardian, and we process it only for the
                limited purpose of that filing, with verifiable parental
                consent as required under section 9 of the DPDP Act.
              </p>
            </>
          ),
        },
        {
          index: "§ 12",
          heading: "Changes to this policy",
          body: (
            <>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, the services we offer, or the DPDP
                Act and rules made thereunder. We will indicate the date of the
                last revision in the &quot;Last updated&quot; line above.
                Material changes will be communicated to active clients by
                email or WhatsApp at least 7 days before they take effect.
                Continued use of our services after a change takes effect
                constitutes acceptance of the updated policy.
              </p>
            </>
          ),
        },
        {
          index: "§ 13",
          heading: "Contact",
          body: (
            <>
              <p>
                If you have any questions about this Privacy Policy or the way
                we handle your personal data, please contact our Grievance
                Officer using the details in the callout above, or write to us
                at{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. You
                can also reach us by phone at{" "}
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> during working
                hours (Monday to Friday, 10:00 AM to 7:00 PM IST).
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
