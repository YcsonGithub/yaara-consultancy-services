import type { Metadata } from "next";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { LegalBody } from "../legal-body";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "The cookies and similar technologies used by Yaara Consultancy Services, including Google Analytics 4 with Google Consent Mode v2, how to manage your preferences, and how to disable cookies.",
  alternates: { canonical: `${SITE.url}/legal/cookie` },
};

/** The cookie inventory shown in the table on this page. */
const COOKIES = [
  {
    name: "yaara_consent",
    purpose:
      "Records the consent choices you make on our consent banner (essential, analytics, marketing) so we don't ask you again on every visit.",
    duration: "12 months",
    category: "Essential",
  },
  {
    name: "yaara_session",
    purpose:
      "Session identifier for the contact and booking forms; keeps your form input stable as you move between pages.",
    duration: "Session",
    category: "Essential",
  },
  {
    name: "_ga",
    purpose:
      "Google Analytics 4 — distinguishes unique users. Only set after you grant analytics consent.",
    duration: "2 years",
    category: "Analytics",
  },
  {
    name: "_ga_<container-id>",
    purpose:
      "Google Analytics 4 — maintains session state for the configured measurement stream. Only set after analytics consent.",
    duration: "2 years",
    category: "Analytics",
  },
  {
    name: "_gid",
    purpose:
      "Google Analytics — legacy distinguisher, retained for backward compatibility. Only set after analytics consent.",
    duration: "24 hours",
    category: "Analytics",
  },
  {
    name: "_gcl_au",
    purpose:
      "Google Ads / Conversion linker cookie. Reserved for future marketing use — currently no marketing campaigns are configured, but the slot is shown here for transparency.",
    duration: "90 days",
    category: "Marketing (reserved)",
  },
] as const;

export default function CookiePage() {
  return (
    <LegalBody
      title="Cookie Policy"
      intro="The cookies and similar technologies this website uses, what each one does, how long it lasts, and how to switch it off. This policy supports our Privacy Policy and is written to align with Google Consent Mode v2."
      lastUpdated="2026"
      sections={[
        {
          index: "§ 1",
          heading: "What cookies are",
          body: (
            <>
              <p>
                A <strong>cookie</strong> is a small text file that a website
                stores in your browser when you visit it. Cookies allow a site
                to remember your actions and preferences over time — for
                example, that you have already dismissed a consent banner, or
                that you are signed in to a form. They are widely used across
                the web to make sites work, to measure traffic, and to deliver
                relevant content.
              </p>
              <p>
                Cookies are not programs; they cannot execute code on your
                device or access your files. They contain a small amount of
                data — usually a unique identifier and a few preference fields
                — and can be read back only by the site (or third party) that
                set them. Modern browsers let you inspect, block, or delete
                any cookie at any time.
              </p>
            </>
          ),
        },
        {
          index: "§ 2",
          heading: "Cookie categories we use",
          body: (
            <>
              <p>
                We group the cookies we use into three categories, mirroring
                the choices you see on our consent banner:
              </p>
              <ul>
                <li>
                  <strong>Essential</strong> — required for the website to
                  function. These cannot be disabled in our system, because
                  they enable core features such as remembering your consent
                  choice and keeping form sessions stable.
                </li>
                <li>
                  <strong>Analytics</strong> — used to measure how visitors use
                  the site (which pages are read, where traffic comes from, how
                  long visits last) so we can improve the content. We use{" "}
                  <strong>Google Analytics 4 (GA4)</strong> with{" "}
                  <strong>Google Consent Mode v2</strong>; these cookies are set
                  only after you grant analytics consent.
                </li>
                <li>
                  <strong>Marketing</strong> — used to deliver relevant ads and
                  measure ad performance. <strong>We do not currently run any
                  paid marketing campaigns</strong>, so no marketing cookies are
                  set today. The category is reserved here so that, if we ever
                  do, this policy and the consent banner will already cover it
                  transparently.
                </li>
              </ul>
            </>
          ),
        },
        {
          index: "§ 3",
          heading: "How Google Consent Mode v2 works",
          body: (
            <>
              <p>
                Our website is wired with Google Consent Mode v2. This means
                that, before you make a choice on our consent banner, Google&apos;s
                tags operate in a <strong>cookieless mode</strong>: instead of
                writing cookies, they send &quot;cookieless pings&quot; to
                Google&apos;s servers that carry no identifying information about
                you. These pings allow Google to model aggregate traffic trends
                without setting cookies on your device.
              </p>
              <p>
                Once you interact with the banner — granting or denying consent
                for analytics and/or marketing — Google&apos;s tags adjust their
                behaviour. If you grant analytics consent, GA4 sets its cookies
                and collects full measurement data. If you deny, GA4 continues
                to send cookieless pings and uses{" "}
                <strong>modelled conversions</strong> to estimate aggregate
                traffic without identifying you. In both cases, your choice is
                respected and recorded in the <code>yaara_consent</code>{" "}
                cookie for 12 months.
              </p>
              <p>
                Consent Mode v2 is the mechanism Google requires advertisers and
                publishers to use to comply with the EU Digital Markets Act and
                the DPDP Act, 2023. It is the most privacy-preserving option
                available for sites that still want to understand aggregate
                traffic.
              </p>
            </>
          ),
        },
        {
          index: "§ 4",
          heading: "Third-party providers",
          body: (
            <>
              <p>
                The only third party that sets cookies on this website is{" "}
                <strong>Google</strong>, via Google Tag Manager and/or Google
                Analytics 4. Google is an independent Data Fiduciary (or Data
                Processor, as the case may be) for the data it collects through
                these cookies, and its own privacy and cookie policies govern
                how that data is used. You can review Google&apos;s policies
                here:
              </p>
              <ul>
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://policies.google.com/technologies/cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Cookies Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/tagmanager/answer/10718564"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Consent Mode v2 documentation
                  </a>
                </li>
              </ul>
              <p>
                We do not embed third-party advertising pixels, social-media
                embeds that set cookies, or chat widgets that store identifiers
                beyond the conversation context. If we add any such service in
                future, we will update this policy and add a corresponding
                category to the consent banner before turning it on.
              </p>
            </>
          ),
        },
        {
          index: "§ 5",
          heading: "Managing and disabling cookies",
          body: (
            <>
              <p>You have three layers of control over cookies on this site:</p>
              <ul>
                <li>
                  <strong>Our consent banner:</strong> the first time you visit,
                  a banner asks you to accept or reject analytics (and any
                  future marketing) cookies. You can change your choice at any
                  time by clicking the &quot;Cookie preferences&quot; link in
                  the footer of any page.
                </li>
                <li>
                  <strong>Your browser settings:</strong> all major browsers let
                  you block, delete, or ask before setting cookies. The links
                  below open the official help pages for the most common
                  browsers:
                  <ul className="mt-1.5">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Safari
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Opt out of Google Analytics:</strong> you can install
                  Google&apos;s{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    official browser add-on to disable Google Analytics
                  </a>{" "}
                  across all sites, including ours.
                </li>
              </ul>
              <p>
                Blocking essential cookies may affect the functioning of the
                website — in particular, the consent banner may reappear on
                every visit, and contact-form sessions may not persist across
                pages.
              </p>
            </>
          ),
        },
        {
          index: "§ 6",
          heading: "Updates to this policy",
          body: (
            <>
              <p>
                We will update this Cookie Policy whenever we add, remove, or
                change a cookie or third-party service. The &quot;Last
                updated&quot; date at the top of this page reflects the most
                recent revision. If we add a new non-essential cookie, we will
                re-prompt for consent the next time you visit.
              </p>
            </>
          ),
        },
        {
          index: "§ 7",
          heading: "Cross-reference and contact",
          body: (
            <>
              <p>
                This Cookie Policy forms part of our{" "}
                <Link href="/legal/privacy">Privacy Policy</Link> and should be
                read alongside it. If you have any questions about how we use
                cookies, please email us at{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or
                contact our Grievance Officer using the details in the Privacy
                Policy.
              </p>
            </>
          ),
        },
      ]}
    >
      {/* Cookie inventory table — rendered via LegalBody's `children` slot. */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <Cookie className="h-4 w-4 text-gold" strokeWidth={1.5} />
          <span className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold">
            Cookie inventory
          </span>
        </div>
        <h2 className="font-serif text-[1.15rem] font-medium leading-snug text-ink">
          Cookies we set
        </h2>
        <p className="mt-2 font-sans text-[0.9rem] leading-[1.78] text-body">
          The complete list of cookies this website may set in your browser.
          Names shown in angle brackets (e.g. <code>&lt;container-id&gt;</code>)
          are placeholders for unique identifiers that vary by property.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-surface">
                <th
                  scope="col"
                  className="border-b border-border px-4 py-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-ink"
                >
                  Cookie
                </th>
                <th
                  scope="col"
                  className="border-b border-border px-4 py-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-ink"
                >
                  Purpose
                </th>
                <th
                  scope="col"
                  className="border-b border-border px-4 py-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-ink"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="border-b border-border px-4 py-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-ink"
                >
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((c) => (
                <tr key={c.name} className="align-top">
                  <td className="border-b border-border px-4 py-3 font-mono text-[0.8rem] font-medium text-ink">
                    {c.name}
                  </td>
                  <td className="border-b border-border px-4 py-3 font-sans text-[0.82rem] leading-[1.7] text-body">
                    {c.purpose}
                  </td>
                  <td className="border-b border-border px-4 py-3 font-mono text-[0.78rem] text-body">
                    {c.duration}
                  </td>
                  <td className="border-b border-border px-4 py-3 font-sans text-[0.78rem] font-medium text-ink">
                    {c.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-sans text-[0.82rem] leading-[1.7] text-muted-foreground">
          Note: cookies set by government portals (GSTN, Income Tax, MCA) when
          you follow links from our site are governed by those portals&apos;
          own cookie policies, not by this one.
        </p>
      </div>
    </LegalBody>
  );
}
