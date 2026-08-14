import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  MessageCircle,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ConsultationForm } from "@/components/site/consultation-form";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free 20-Minute Consultation",
  description:
    "Book a free 20-minute consultation with Yaara Consultancy Services. We'll map your obligations in plain English, give you a transparent price, and a clear next step — no pitch, no commitment.",
  alternates: { canonical: `${SITE.url}/book` },
};

const PROMISES = [
  {
    icon: Clock,
    title: "Reply within 1 working day",
    desc: "Usually much faster. Mornings get same-day replies.",
  },
  {
    icon: ShieldCheck,
    title: "Private & encrypted",
    desc: "Your details are never shared, retained only for compliance.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp follow-up",
    desc: "After the call, we continue on WhatsApp — lower friction than a portal login.",
  },
] as const;

const ALT_CHANNELS = [
  {
    icon: Phone,
    label: "Call",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.phone,
    href: CONTACT.whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
] as const;

export default function BookPage() {
  return (
    <>
      {/* ============ BOOKING (navy) ============ */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="gold-rule absolute inset-x-0 top-0" />
        <div
          className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(184,135,59,0.5), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(184,135,59,0.45), transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: heading + promises */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold-light">
                <span className="mr-2 inline-block h-px w-7 align-middle bg-gold-light" />
                Free consultation
              </span>
              <h1 className="mt-5 font-serif text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] text-paper sm:text-[3rem] lg:text-[3.2rem]">
                Book a free 20-minute consultation.
              </h1>
              <p className="mt-6 max-w-md font-sans text-[1.02rem] leading-[1.7] text-paper/75">
                Tell us about your business. We&apos;ll reply within one working
                day with a clear next step, a transparent price, and an honest
                answer on whether we&apos;re the right fit — no script, no
                pressure to sign.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <ul className="space-y-5">
                {PROMISES.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.title} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-paper/20 bg-paper/5 text-gold-light">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="font-sans text-[0.95rem] font-semibold text-paper">
                          {p.title}
                        </p>
                        <p className="mt-0.5 font-sans text-[0.85rem] leading-relaxed text-paper/65">
                          {p.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ConsultationForm variant="dark" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ OTHER WAYS TO REACH US ============ */}
      <section className="border-t border-border bg-surface/40 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
              Other ways to reach us
            </span>
            <h2 className="mt-3 font-serif text-[1.8rem] font-medium leading-tight text-ink sm:text-[2.2rem]">
              Prefer not to fill a form?
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-sans text-[0.95rem] leading-relaxed text-body">
              Pick whichever channel works for you. They all land in the same
              inbox — and the same person replies.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {ALT_CHANNELS.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <Reveal key={ch.label} delay={i * 0.06}>
                  <a
                    href={ch.href}
                    target={ch.external ? "_blank" : undefined}
                    rel={ch.external ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col items-start rounded-xl border border-border bg-card p-6 transition-all hover:border-ink/25 hover:shadow-[0_16px_40px_-26px_rgba(14,42,71,0.4)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink/8 text-ink">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <p className="mt-4 font-mono text-[0.66rem] font-medium uppercase tracking-wider text-muted-foreground">
                      {ch.label}
                    </p>
                    <p className="mt-1 font-serif text-[1.05rem] font-medium text-ink">
                      {ch.value}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-[0.84rem] font-medium text-gold">
                      Reach out
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.18} className="mt-10 text-center">
            <p className="font-sans text-[0.86rem] text-muted-foreground">
              Or visit us at our office in{" "}
              <Link
                href="/contact"
                className="font-medium text-ink underline-offset-2 hover:text-gold hover:underline"
              >
                Hi Tech City, Hyderabad
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
