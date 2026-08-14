"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { MessageCircle } from "lucide-react";

const FAQS = [
  {
    q: "Are you a Chartered Accountancy firm?",
    a: "No — and we think being straight about that matters more than pretending otherwise. Yaara is an accounting, tax, and compliance consultancy run by a practitioner with five years of hands-on accounting experience. For work that legally requires a practicing Chartered Accountant's signature — statutory audits and certain certifications — we engage an empanelled network of independent CAs. That's the same model every reputable compliance platform in India uses, and it means your sign-off is real, verifiable, and properly accountable.",
  },
  {
    q: "How are you different from ClearTax, Vakilsearch, or IndiaFilings?",
    a: "Those are good portals. The difference is who handles your work. With a portal, you're often a ticket in a queue; with Yaara, you get a single person who knows your name, your books, and your next deadline — reachable on WhatsApp, replying within a working day. If you want software, use a portal. If you want a person, use us.",
  },
  {
    q: "What if I've already missed a deadline?",
    a: "It happens more often than you'd think, and it's usually fixable. We assess what's pending, file the overdue return(s), handle any late fee or notice that's come in, and bring you fully current — then put you on a schedule so it doesn't happen again. The earlier you tell us, the smaller the damage.",
  },
  {
    q: "How do you handle my documents and data?",
    a: "Documents come in via WhatsApp Business or a secure, encrypted upload — whichever you prefer. We don't share your data with third parties, and we retain records only as long as needed for compliance and statutory limitation periods. You can request a copy or deletion of your records at any time.",
  },
  {
    q: "Do you work with businesses outside your state?",
    a: "Yes. GST, TDS, ITR, and ROC are central regimes — we handle them nationwide. A few things are state-specific (professional tax, certain trade licences), and we'll tell you upfront if your state needs a local touch or a partner referral.",
  },
  {
    q: "What's included in the free 20-minute consultation?",
    a: "A plain-English map of what your business actually owes, a transparent price, and a recommended next step. No sales script, no pressure to sign. If we're not the right fit, we'll say so and point you somewhere better.",
  },
  {
    q: "Can you take over mid-year from another accountant?",
    a: "Yes — this is one of the most common ways clients arrive. We do a handover review of what's been filed and what's pending, reconcile the books to date, and pick up cleanly from where your previous accountant left off. We'll also flag anything that looks off.",
  },
];

export function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — heading + ask CTA */}
          <Reveal className="lg:col-span-5">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
              07 — Questions, answered straight
            </span>
            <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
              The things founders{" "}
              <span className="italic font-light">actually ask us</span>.
            </h2>
            <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
              We&apos;d rather you ask the awkward question up front than find
              out the answer later. Here are the ones we hear most.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-surface/60 p-5">
              <p className="font-sans text-[0.9rem] font-medium text-ink">
                Still have a question?
              </p>
              <p className="mt-1 font-sans text-[0.86rem] text-body">
                Send it on WhatsApp &mdash; we usually reply the same working day.
              </p>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-10 items-center gap-2 rounded-md bg-ink px-4 font-sans text-[0.88rem] font-medium text-paper transition-colors hover:bg-ink-dark"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                Message us
              </a>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <Reveal className="lg:col-span-7" y={20}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="py-5 text-left font-serif text-[1.05rem] font-medium text-ink hover:no-underline hover:text-ink-dark">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-sans text-[0.94rem] leading-[1.7] text-body">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
