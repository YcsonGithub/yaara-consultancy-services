import Image from "next/image";
import { Reveal } from "./reveal";
import { FounderSignature } from "./logo";

export function FounderNote() {
  return (
    <section id="about" className="paper-grain py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait — duotone navy treatment so it reads as a brand portrait */}
          <Reveal className="lg:col-span-5" y={24}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="duotone-navy relative overflow-hidden rounded-xl border border-border shadow-[0_30px_60px_-30px_rgba(14,42,71,0.45)]">
                <Image
                  src="/founder/founder-portrait.png"
                  alt="Portrait of the founder of Yaara Consultancy Services at her desk"
                  width={864}
                  height={1152}
                  className="h-full w-full object-cover"
                  priority={false}
                />
              </div>
              {/* name plate */}
              <div className="absolute -bottom-5 -right-3 max-w-[15rem] rotate-1 rounded-lg border border-border bg-paper px-4 py-3 shadow-[0_14px_30px_-16px_rgba(14,42,71,0.4)] sm:-right-5">
                <p className="font-serif text-[1rem] font-semibold text-ink">
                  Founder, Yaara
                </p>
                <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                  5 yrs hands-on &middot; personally involved
                </p>
              </div>
              {/* gold corner accent */}
              <div className="absolute -left-3 -top-3 h-10 w-10 rounded-tl-lg border-l-2 border-t-2 border-gold" />
            </div>
          </Reveal>

          {/* Note */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                03 — Founder&apos;s note
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <blockquote className="mt-5 font-serif text-[1.5rem] font-light italic leading-[1.45] text-ink sm:text-[1.9rem]">
                &ldquo;I started Yaara because the founders I kept helping on
                the side were being treated like ticket numbers by the portals
                they paid. You deserve a person who knows your name{" "}
                <span className="not-italic font-medium">and</span> your
                numbers.&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 space-y-4 font-sans text-[1rem] leading-[1.75] text-body">
                <p>
                  I&apos;m not a Chartered Accountant, and I won&apos;t pretend
                  to be. I have five years of hands-on accounting experience —
                  bookkeeping, GST, TDS, payroll, and ROC work for small
                  businesses and founders across India. Every client on this
                  page is handled by me, personally.
                </p>
                <p>
                  For the work that legally requires a practicing CA&apos;s
                  signature — statutory audits and certain certifications — I
                  work with an empanelled network of independent Chartered
                  Accountants. That&apos;s not a workaround; it&apos;s how every
                  reputable compliance platform in India operates, and it means
                  your sign-off is real and verifiable.
                </p>
                <p>
                  What you get with Yaara that the big firms and the faceless
                  portals can&apos;t offer: <span className="font-medium text-ink">me</span>.
                  A single point of contact who knows your books, answers on
                  WhatsApp, and treats your deadline like it&apos;s mine.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex items-end justify-between gap-6 border-t border-border pt-6">
                <FounderSignature />
                <div className="text-right">
                  <p className="font-sans text-[0.92rem] font-semibold text-ink">
                    — The Yaara Team
                  </p>
                  <p className="font-mono text-[0.72rem] uppercase tracking-wider text-muted-foreground">
                    Advise &middot; Analyze &middot; Achieve
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
