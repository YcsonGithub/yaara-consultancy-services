import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  HelpCircle,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources — Compliance Calendar, FAQs & Knowledge Center",
  description:
    "Tools and knowledge for founders who file: live compliance deadlines for GST, TDS, ITR and ROC; plain-English FAQs; and a knowledge center of explainers.",
  alternates: { canonical: `${SITE.url}/resources` },
};

const RESOURCE_CARDS = [
  {
    href: "/resources/compliance-calendar",
    title: "Compliance Calendar",
    desc: "Live, always-current deadlines for GST, TDS, ITR, advance tax and ROC.",
    icon: CalendarClock,
    cta: "Open the calendar",
  },
  {
    href: "/resources/faqs",
    title: "Frequently Asked Questions",
    desc: "The things founders actually ask us — including the awkward ones.",
    icon: HelpCircle,
    cta: "Read the FAQs",
  },
  {
    href: "#knowledge-center",
    title: "Knowledge Center",
    desc: "Plain-English explainers on GST, ITR, and compliance (coming soon).",
    icon: BookOpen,
    cta: "Browse explainers",
  },
] as const;

const KNOWLEDGE_ARTICLES = [
  { title: "GST registration: when and how", tag: "GST" },
  { title: "ITR for freelancers: 44ADA explained", tag: "ITR" },
  { title: "TDS sections every founder should know", tag: "TDS" },
  { title: "ROC annual filings: a checklist", tag: "ROC" },
  { title: "Advance tax: the four instalments", tag: "Tax" },
  { title: "GST input credit: claim what's yours", tag: "GST" },
] as const;

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Tools and knowledge for{" "}
            <span className="italic font-light">founders who file</span>.
          </>
        }
        intro="Compliance deadlines, plain-English answers, and the reference material you need to stay on top of your obligations — without becoming a tax expert yourself."
      />

      {/* ============ RESOURCE CARDS ============ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCE_CARDS.map((card, i) => {
              const Icon = card.icon;
              const isAnchor = card.href.startsWith("#");
              return (
                <Reveal key={card.title} delay={(i % 3) * 0.06}>
                  <Link
                    href={card.href}
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.35)] sm:p-7"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface text-ink">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-serif text-[1.4rem] font-medium leading-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-[0.92rem] leading-relaxed text-body">
                      {card.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.9rem] font-medium text-gold">
                      {card.cta}
                      {!isAnchor && (
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                      {isAnchor && (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      )}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ KNOWLEDGE CENTER ============ */}
      <section
        id="knowledge-center"
        className="border-t border-border bg-surface/40 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
              <span className="mr-2 inline-block h-px w-7 align-middle bg-gold" />
              Knowledge Center
            </span>
            <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
              Plain-English explainers.{" "}
              <span className="italic font-light">Coming soon.</span>
            </h2>
            <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
              We&apos;re building a library of no-fluff explainers on GST, ITR,
              TDS and ROC — written by practitioners, not marketers. Drop us a
              line if there&apos;s a topic you&apos;d like us to prioritise.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KNOWLEDGE_ARTICLES.map((article, i) => (
              <Reveal key={article.title} delay={(i % 3) * 0.05}>
                <article className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.68rem] font-medium uppercase tracking-wider text-muted-foreground">
                        {article.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-gold ring-1 ring-gold/30">
                        <Sparkles className="h-3 w-3" strokeWidth={2} />
                        Coming soon
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-[1.18rem] font-medium leading-snug text-ink">
                      {article.title}
                    </h3>
                  </div>
                  <p className="mt-5 font-sans text-[0.82rem] leading-relaxed text-muted-foreground">
                    We&apos;re still writing this one. Want it sooner? Tell us
                    on WhatsApp.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
