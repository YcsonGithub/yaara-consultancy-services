import Link from "next/link";
import type { Metadata } from "next";
import { MessageCircle, ArrowRight, HelpCircle } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQS, CONTACT, SITE } from "@/lib/site";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Yaara Consultancy Services",
  description:
    "Plain-English answers to the questions founders actually ask: Are you a CA firm? How are you different from ClearTax? What if I've missed a deadline? — and more.",
  alternates: { canonical: `${SITE.url}/resources/faqs` },
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "FAQs", path: "/resources/faqs" },
        ])}
      />
      <PageHero
        eyebrow="Resources · FAQs"
        title={
          <>
            Questions, <span className="italic font-light">answered straight</span>.
          </>
        }
        intro="The things founders actually ask us — including the awkward ones about whether we're a CA firm."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* FAQ list */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="mb-6 flex items-center gap-2.5">
                  <HelpCircle className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {FAQS.length} questions · straight answers
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <Accordion
                  type="single"
                  collapsible
                  className="rounded-xl border border-border bg-card"
                >
                  {FAQS.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i + 1}`}
                      className="px-5 sm:px-7"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <span className="flex items-start gap-3 text-left">
                          <span className="mt-0.5 font-mono text-[0.72rem] font-semibold text-gold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-serif text-[1.08rem] font-medium leading-snug text-ink">
                            {faq.q}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pl-7">
                        <p className="font-sans text-[0.92rem] leading-[1.75] text-body">
                          {faq.a}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>

            {/* Sidebar callout */}
            <aside className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="sticky top-24 rounded-xl border border-border bg-surface/60 p-6 sm:p-7">
                  <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                    Still have a question?
                  </span>
                  <h3 className="mt-3 font-serif text-[1.5rem] font-medium leading-tight text-ink">
                    We answer fast — usually the same working day.
                  </h3>
                  <p className="mt-3 font-sans text-[0.9rem] leading-relaxed text-body">
                    If your situation doesn&apos;t fit a FAQ, message us
                    directly. A real person replies, not a bot.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-ink/25 hover:shadow-[0_12px_30px_-18px_rgba(14,42,71,0.4)]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-success/10 text-success">
                          <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                        <span>
                          <span className="block font-sans text-[0.86rem] font-semibold text-ink">
                            WhatsApp us
                          </span>
                          <span className="block font-mono text-[0.72rem] text-muted-foreground">
                            {CONTACT.phone}
                          </span>
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
                    </a>

                    <Link
                      href="/book"
                      className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-ink/25 hover:shadow-[0_12px_30px_-18px_rgba(14,42,71,0.4)]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold/12 text-gold">
                          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                        <span>
                          <span className="block font-sans text-[0.86rem] font-semibold text-ink">
                            Book a free call
                          </span>
                          <span className="block font-mono text-[0.72rem] text-muted-foreground">
                            20 minutes · no pitch
                          </span>
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-ink/25 hover:shadow-[0_12px_30px_-18px_rgba(14,42,71,0.4)]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink/8 text-ink">
                          <span className="font-mono text-[0.78rem] font-semibold">
                            @
                          </span>
                        </span>
                        <span>
                          <span className="block font-sans text-[0.86rem] font-semibold text-ink">
                            Email us
                          </span>
                          <span className="block font-mono text-[0.7rem] text-muted-foreground">
                            {CONTACT.email}
                          </span>
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a question we didn't answer?"
        desc="Send it on WhatsApp — we usually reply the same working day."
      />
    </>
  );
}
