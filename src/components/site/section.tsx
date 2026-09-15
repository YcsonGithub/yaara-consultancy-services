import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

/** Consistent section eyebrow + heading block used across pages */
export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold-ink">
          {index ? `${index} — ` : ""}
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">{intro}</p>
      )}
    </Reveal>
  );
}

/** Page-level hero used at the top of interior pages */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  aside,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  /** Optional bespoke artwork panel rendered beside the copy on lg+ screens. */
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border paper-grain">
      <div className="gold-rule absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
        <div
          className={cn(
            "grid grid-cols-1",
            aside && "lg:grid-cols-12 lg:items-center lg:gap-12"
          )}
        >
          <Reveal className={cn(aside && "lg:col-span-7")}>
            {eyebrow && (
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold-ink">
                <span className="mr-2 inline-block h-px w-7 align-middle bg-gold-ink" />
                {eyebrow}
              </span>
            )}
            <h1 className="mt-5 max-w-4xl font-serif text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3.2rem] lg:text-[3.6rem]">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 max-w-2xl font-sans text-[1.05rem] leading-[1.7] text-body">
                {intro}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </Reveal>

          {aside && (
            <Reveal className="mt-10 lg:col-span-5 lg:mt-0" delay={0.12} y={20}>
              <div className="relative">
                <div className="overflow-hidden rounded-xl border border-border shadow-[0_28px_60px_-34px_rgba(14,42,71,0.45)]">
                  {aside}
                </div>
                {/* gold corner accent — brand signature */}
                <div className="pointer-events-none absolute -left-3 -top-3 h-10 w-10 rounded-tl-lg border-l-2 border-t-2 border-gold" />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/** Final CTA band used at the bottom of interior pages */
export function CtaBand({
  title = "Not sure where to start?",
  desc = "Book a free 20-minute call. We'll map your obligations in plain English — no sales pitch, no commitment.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-14 text-paper sm:py-20 lg:py-24">
      <div className="gold-rule absolute inset-x-0 top-0" />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(184,135,59,0.5), transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="font-serif text-[2rem] font-medium leading-tight text-paper sm:text-[2.4rem]">
            {title}
          </h2>
          <p className="mt-4 font-sans text-[1rem] leading-relaxed text-paper/75">
            {desc}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/book"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-sans text-[0.97rem] font-semibold text-ink transition-all hover:bg-gold-light"
          >
            Book a free consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md border border-paper/25 px-7 font-sans text-[0.97rem] font-medium text-paper transition-colors hover:bg-paper/10"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
