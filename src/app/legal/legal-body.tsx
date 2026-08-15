import Link from "next/link";
import type { ReactNode } from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  FileText,
  Shield,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { CONTACT, GRIEVANCE_OFFICER, SITE } from "@/lib/site";

/**
 * A single section of legal copy. `body` is a ReactNode so pages can render
 * multiple paragraphs, lists, tables, or cross-links — not just a single string.
 */
export type LegalSection = {
  /** Optional index label, e.g. "§ 1" or "01" — rendered in mono gold. */
  index?: string;
  heading: string;
  body: ReactNode;
};

/**
 * Shared layout for all legal pages (privacy, terms, refund, cookie, disclaimer).
 *
 * Behaviour:
 * - When `lastUpdated` is provided, the "This page is being finalised" notice
 *   is suppressed and replaced with a "Last updated: <date>" line.
 * - When `showGrievance` is true, a prominent gold-bordered callout renders the
 *   DPDP Act §8(9) Grievance Officer above the section list.
 * - `sections[].body` accepts any ReactNode, so pages can render rich content.
 * - `children` (optional) renders below the sections and above the contact box —
 *   used for things like the cookie table on the Cookie Policy page.
 *
 * Visual style stays consistent with the rest of the site: card with hairline
 * border on warm paper, gold accent file glyph, contact box, back links.
 */
export function LegalBody({
  title,
  intro,
  sections,
  lastUpdated,
  showGrievance = false,
  children,
}: {
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
  /** When provided, replaces the "being finalised" notice with "Last updated". */
  lastUpdated?: string;
  /** When true, renders the DPDP §8(9) Grievance Officer callout. */
  showGrievance?: boolean;
  /** Optional extra block (e.g. cookie table) rendered after the sections. */
  children?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-9">
              {/* Header — either "being finalised" notice OR "Last updated" line */}
              <div className="flex items-start gap-3 border-b border-border pb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/12 text-gold">
                  <FileText className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  {lastUpdated ? (
                    <>
                      <p className="font-serif text-[1.15rem] font-medium text-ink">
                        {title}
                      </p>
                      <p className="mt-1 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        Last updated: {lastUpdated} · {SITE.name}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-serif text-[1.15rem] font-medium text-ink">
                        This page is being finalised.
                      </p>
                      <p className="mt-1 font-sans text-[0.86rem] leading-relaxed text-body">
                        We&apos;re putting the finishing touches on the full
                        text. For any questions in the meantime, please contact
                        us directly — we&apos;re happy to clarify anything.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* DPDP §8(9) Grievance Officer callout */}
              {showGrievance && (
                <div className="mt-6 rounded-lg border border-gold/45 bg-gold/[0.06] p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    <span className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold">
                      Grievance Officer · DPDP Act §8(9)
                    </span>
                  </div>
                  <p className="mt-3 font-serif text-[1.08rem] font-medium text-ink">
                    {GRIEVANCE_OFFICER.name}
                  </p>
                  <p className="font-sans text-[0.84rem] text-body">
                    {GRIEVANCE_OFFICER.role}
                  </p>
                  <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2.5">
                    <a
                      href={`mailto:${GRIEVANCE_OFFICER.email}`}
                      className="inline-flex items-center gap-2 font-sans text-[0.88rem] font-medium text-ink underline-offset-2 hover:text-gold hover:underline"
                    >
                      <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      {GRIEVANCE_OFFICER.email}
                    </a>
                    <a
                      href={GRIEVANCE_OFFICER.phoneHref}
                      className="inline-flex items-center gap-2 font-sans text-[0.88rem] font-medium text-ink underline-offset-2 hover:text-gold hover:underline"
                    >
                      <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      {GRIEVANCE_OFFICER.phone}
                    </a>
                  </div>
                  <p className="mt-3 flex items-start gap-2 font-sans text-[0.82rem] leading-relaxed text-body">
                    <Clock
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
                      strokeWidth={1.5}
                    />
                    <span>{GRIEVANCE_OFFICER.responseWindow}</span>
                  </p>
                </div>
              )}

              {/* Section list */}
              {sections.length > 0 && (
                <div className="mt-6 space-y-7">
                  {sections.map((s) => (
                    <div key={s.heading} id={slugify(s.heading)}>
                      <div className="flex items-baseline gap-3">
                        {s.index && (
                          <span className="font-mono text-[0.72rem] font-medium text-gold">
                            {s.index}
                          </span>
                        )}
                        <h2 className="font-serif text-[1.15rem] font-medium leading-snug text-ink">
                          {s.heading}
                        </h2>
                      </div>
                      <div className="mt-2.5 space-y-3 font-sans text-[0.92rem] leading-[1.78] text-body [&_a]:font-medium [&_a]:text-ink [&_a]:underline-offset-2 [&_a:hover]:text-gold [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:leading-[1.7]">
                        {s.body}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional extra block (cookie table, etc.) */}
              {children && <div className="mt-8">{children}</div>}

              {/* Contact box */}
              <div className="mt-8 rounded-lg border border-border bg-surface/60 p-5">
                <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Contact
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group inline-flex items-center gap-2 font-sans text-[0.9rem] font-medium text-ink hover:text-gold"
                  >
                    <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    {CONTACT.email}
                  </a>
                  <a
                    href={CONTACT.phoneHref}
                    className="group inline-flex items-center gap-2 font-sans text-[0.9rem] font-medium text-ink hover:text-gold"
                  >
                    <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    {CONTACT.phone}
                  </a>
                </div>
                <p className="mt-3 font-sans text-[0.82rem] leading-relaxed text-muted-foreground">
                  {CONTACT.address.line1}, {CONTACT.address.line2},{" "}
                  {CONTACT.address.city}, {CONTACT.address.state}{" "}
                  {CONTACT.address.pincode}, {CONTACT.address.country}.
                </p>
              </div>

              {/* Footer line: last updated + back links */}
              <p className="mt-6 font-mono text-[0.68rem] leading-relaxed text-muted-foreground">
                {lastUpdated ? `Last updated: ${lastUpdated} · ` : ""}
                <Link
                  href="/"
                  className="text-ink underline-offset-2 hover:text-gold hover:underline"
                >
                  Back to home
                </Link>{" "}
                ·{" "}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-ink underline-offset-2 hover:text-gold hover:underline"
                >
                  Contact us
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/** Slugify a heading for use as an anchor id. */
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
