import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { PageHero } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { ConsultationForm } from "@/components/site/consultation-form";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Yaara Consultancy Services",
  description:
    "Get in touch with Yaara Consultancy Services. Call, WhatsApp, email, or use the form — we usually respond within one working day. Office in Hi Tech City, Hyderabad.",
  alternates: { canonical: `${SITE.url}/contact` },
};

const CONTACT_ROWS = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    note: "Mon–Sat, 10 AM – 7 PM IST",
    iconBg: "bg-ink/8 text-ink",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.phone,
    href: CONTACT.whatsappHref,
    note: "Fastest reply — usually within hours",
    iconBg: "bg-success/12 text-success",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: "For documents, scopes, and longer notes",
    iconBg: "bg-gold/15 text-gold",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Get in touch. <span className="italic font-light">We reply fast.</span>
          </>
        }
        intro="Call, WhatsApp, email, or use the form below. Whichever works for you — we usually respond within one working day."
      />

      {/* Contact details + form */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* LEFT: contact details */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                  Direct lines
                </span>
                <h2 className="mt-3 font-serif text-[1.8rem] font-medium leading-tight text-ink sm:text-[2.1rem]">
                  Reach a real person.
                </h2>
                <p className="mt-4 font-sans text-[0.95rem] leading-relaxed text-body">
                  No ticket queue, no IVR maze. Whichever channel you pick lands
                  in front of someone who&apos;ll know your name by the second
                  reply.
                </p>
              </Reveal>

              <Reveal delay={0.06} className="mt-8 space-y-4">
                {CONTACT_ROWS.map((row) => {
                  const Icon = row.icon;
                  return (
                    <a
                      key={row.label}
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-ink/25 hover:shadow-[0_14px_36px_-22px_rgba(14,42,71,0.4)]"
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${row.iconBg}`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[0.66rem] font-medium uppercase tracking-wider text-muted-foreground">
                          {row.label}
                        </p>
                        <p className="mt-0.5 font-serif text-[1.05rem] font-medium text-ink break-words">
                          {row.value}
                        </p>
                        <p className="mt-1 font-sans text-[0.82rem] text-body">
                          {row.note}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}

                {/* Office address */}
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink/8 text-ink">
                      <MapPin className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[0.66rem] font-medium uppercase tracking-wider text-muted-foreground">
                        Office
                      </p>
                      <address className="mt-1 font-sans text-[0.9rem] not-italic leading-relaxed text-body">
                        {CONTACT.address.line1}
                        <br />
                        {CONTACT.address.line2}
                        <br />
                        {CONTACT.address.line3}
                        <br />
                        {CONTACT.address.line4}
                        <br />
                        <span className="font-medium text-ink">
                          {CONTACT.address.city}
                        </span>
                        , {CONTACT.address.state}{" "}
                        <span className="font-mono font-medium text-ink">
                          {CONTACT.address.pincode}
                        </span>
                        <br />
                        {CONTACT.address.country}
                      </address>
                    </div>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface/60 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/12 text-gold">
                    <Clock className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[0.66rem] font-medium uppercase tracking-wider text-muted-foreground">
                      Working hours
                    </p>
                    <p className="mt-1 font-sans text-[0.92rem] font-medium text-ink">
                      Mon–Sat, 10:00 AM – 7:00 PM IST
                    </p>
                    <p className="mt-1 font-sans text-[0.82rem] text-body">
                      WhatsApp messages outside hours get a reply the next
                      working morning.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT: form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <div className="mb-6 flex items-baseline justify-between">
                  <h2 className="font-serif text-[1.8rem] font-medium leading-tight text-ink sm:text-[2.1rem]">
                    Send us a message
                  </h2>
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    1-day reply
                  </span>
                </div>
                <ConsultationForm variant="light" />
                <p className="mt-4 font-sans text-[0.82rem] leading-relaxed text-muted-foreground">
                  By submitting, you agree to be contacted about your enquiry.
                  We don&apos;t share your details with third parties — see our{" "}
                  <Link
                    href="/legal/privacy"
                    className="text-ink underline-offset-2 hover:text-gold hover:underline"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-6 flex items-baseline justify-between">
            <div>
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                Find us
              </span>
              <h2 className="mt-2 font-serif text-[1.6rem] font-medium leading-tight text-ink sm:text-[2rem]">
                Hi Tech City, Hyderabad
              </h2>
            </div>
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                [
                  CONTACT.address.line3,
                  CONTACT.address.city,
                  CONTACT.address.state,
                  CONTACT.address.pincode,
                ].join(", ")
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 font-sans text-[0.9rem] font-medium text-ink hover:text-gold sm:inline-flex"
            >
              Open in Google Maps
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="relative">
              {/* On mobile, the map is covered by an overlay until tap,
                  so page scroll isn't trapped by the iframe. */}
              <iframe
                title="Yaara Consultancy Services office location — Hi Tech City, Hyderabad"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  [
                    CONTACT.address.line1,
                    CONTACT.address.line3,
                    CONTACT.address.city,
                    CONTACT.address.state,
                    CONTACT.address.pincode,
                  ].join(", ")
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[400px] w-full rounded-xl border border-border pointer-events-none sm:pointer-events-auto"
              />
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  [
                    CONTACT.address.line1,
                    CONTACT.address.line3,
                    CONTACT.address.city,
                    CONTACT.address.state,
                    CONTACT.address.pincode,
                  ].join(", ")
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center rounded-xl bg-ink/5 sm:hidden"
                aria-label="Open map in Google Maps"
              >
                <span className="rounded-md bg-paper/90 px-4 py-2 font-sans text-[0.86rem] font-medium text-ink shadow">
                  Tap to open map
                </span>
              </a>
            </div>
            <p className="mt-3 font-sans text-[0.82rem] text-muted-foreground">
              {CONTACT.address.line1}, {CONTACT.address.line3},{" "}
              {CONTACT.address.city}, {CONTACT.address.state}{" "}
              {CONTACT.address.pincode}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
