import Link from "next/link";
import { Mail, Phone, ArrowUpRight, FileText } from "lucide-react";
import { PageHero } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { CONTACT } from "@/lib/site";

/**
 * Shared layout for legal placeholder pages (privacy, terms, refund, disclaimer).
 * Minimal, styled, and consistent with the rest of the site.
 */
export function LegalBody({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        intro={intro}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-9">
              <div className="flex items-start gap-3 border-b border-border pb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/12 text-gold">
                  <FileText className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-serif text-[1.15rem] font-medium text-ink">
                    This page is being finalised.
                  </p>
                  <p className="mt-1 font-sans text-[0.86rem] leading-relaxed text-body">
                    We&apos;re putting the finishing touches on the full text.
                    For any questions in the meantime, please contact us
                    directly — we&apos;re happy to clarify anything.
                  </p>
                </div>
              </div>

              {sections.length > 0 && (
                <div className="mt-6 space-y-6">
                  {sections.map((s) => (
                    <div key={s.heading}>
                      <h2 className="font-serif text-[1.1rem] font-medium text-ink">
                        {s.heading}
                      </h2>
                      <p className="mt-2 font-sans text-[0.9rem] leading-[1.75] text-body">
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 rounded-lg border border-border bg-surface/60 p-5">
                <p className="font-mono text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
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
                <p className="mt-3 font-sans text-[0.82rem] text-muted-foreground">
                  {CONTACT.address.line3}, {CONTACT.address.city},{" "}
                  {CONTACT.address.state} {CONTACT.address.pincode}
                </p>
              </div>

              <p className="mt-6 font-mono text-[0.7rem] leading-relaxed text-muted-foreground">
                Last updated: {new Date().getFullYear()} ·{" "}
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
