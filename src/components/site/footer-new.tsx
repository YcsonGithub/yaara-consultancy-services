import Link from "next/link";
import { YaaraLogo } from "./logo";
import { ReopenConsentTrigger } from "./consent-provider";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram,
  ShieldCheck,
  Lock,
  ArrowUpRight,
  UserCheck,
  ArrowRight,
  Clock,
} from "lucide-react";
import { CONTACT, NAV_LINKS, SITE, GRIEVANCE_OFFICER, LEGAL_PAGES } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const SERVICE_LINKS = SERVICES.slice(0, 6).map((s) => ({
  label: s.shortTitle ?? s.title,
  href: `/services/${s.slug}`,
}));

const RESOURCE_LINKS = [
  { label: "Compliance calendar", href: "/resources/compliance-calendar" },
  { label: "FAQs", href: "/resources/faqs" },
  { label: "Knowledge center", href: "/resources#knowledge-center" },
  { label: "Industries we serve", href: "/industries" },
  { label: "Book a consultation", href: "/book" },
];

/**
 * SiteFooter — premium dark-navy footer with gold accents.
 *
 * The footer uses a deep navy (`bg-ink`) background — a deliberate contrast
 * with the warm-paper body — to create a strong visual "anchor" at the bottom
 * of every page. This is a classic high-end consultancy / editorial pattern
 * (think Goldman Sachs, McKinsey, boutique advisory firms) and signals
 * authority + permanence.
 *
 * Structure (top → bottom):
 *  1. Main grid — brand + sitemap on dark navy, with gold accents.
 *  2. DPDP §8(9) grievance officer band — gold-tinted inset within the navy.
 *  3. Bottom bar — copyright, social, registered office, disclaimer.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      {/* Gold hairline at the very top — brand signature */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* ============ MAIN GRID (dark navy) ============ */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------- Brand column ---------- */}
          <div className="lg:col-span-4">
            <YaaraLogo height={44} onDark />
            <p className="mt-5 max-w-xs font-sans text-[0.92rem] leading-relaxed text-paper/70">
              The accounting and compliance partner for Indian founders and
              small businesses who want a real person handling their numbers.
            </p>

            <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-gold-light">
              {SITE.tagline}
            </p>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-paper/15 bg-paper/5 px-2.5 py-1.5 font-sans text-[0.72rem] text-paper/80">
                <Lock className="h-3.5 w-3.5 text-success" strokeWidth={1.5} />
                Encrypted uploads
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-paper/15 bg-paper/5 px-2.5 py-1.5 font-sans text-[0.72rem] text-paper/80">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-light" strokeWidth={1.5} />
                DPDP compliant
              </span>
            </div>

            {/* Contact rows */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              <ContactRow
                icon={Phone}
                label="Call"
                value={CONTACT.phone}
                href={CONTACT.phoneHref}
              />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with us"
                href={CONTACT.whatsappHref}
                external
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactRow
                icon={MapPin}
                label="Office"
                value={`${CONTACT.address.city}, ${CONTACT.address.state}`}
                href="/contact"
              />
            </div>
          </div>

          {/* ---------- Sitemap (4 columns) ---------- */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-8">
            <FooterColumn
              label="Company"
              links={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))}
            />

            <FooterColumn
              label="Services"
              links={[
                ...SERVICE_LINKS,
                {
                  label: "View all services",
                  href: "/services",
                  icon: "arrow" as const,
                },
              ]}
            />

            <FooterColumn label="Resources" links={RESOURCE_LINKS} />

            <div>
              <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-gold-light">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5">
                {LEGAL_PAGES.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/legal/${l.slug}`}
                      className="font-sans text-[0.88rem] text-paper/70 transition-colors hover:text-paper hover:underline hover:decoration-gold-light hover:decoration-1 hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <ReopenConsentTrigger
                    className="font-sans text-[0.88rem] text-paper/70 transition-colors hover:text-paper hover:underline hover:decoration-gold-light hover:decoration-1 hover:underline-offset-4"
                  >
                    Cookie preferences
                  </ReopenConsentTrigger>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ============ DPDP GRIEVANCE OFFICER BAND (gold-tinted inset) ============ */}
      <div className="border-t border-paper/10 bg-paper/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center">
            {/* Left: officer identity */}
            <div className="flex items-start gap-3 lg:col-span-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gold-light/30 bg-gold-light/10 text-gold-light">
                <UserCheck className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-gold-light">
                  Grievance Officer · DPDP Act §8(9)
                </p>
                <p className="mt-1 font-serif text-[1.05rem] font-medium text-paper">
                  {GRIEVANCE_OFFICER.name}
                </p>
                <p className="font-sans text-[0.82rem] text-paper/60">
                  {GRIEVANCE_OFFICER.role}
                </p>
              </div>
            </div>

            {/* Middle: contact */}
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 lg:col-span-5">
              <a
                href={`mailto:${GRIEVANCE_OFFICER.email}`}
                className="inline-flex items-center gap-1.5 font-sans text-[0.86rem] text-paper/85 underline-offset-2 hover:text-gold-light hover:underline"
              >
                <Mail className="h-3.5 w-3.5 text-gold-light" strokeWidth={1.5} />
                <span className="break-all">{GRIEVANCE_OFFICER.email}</span>
              </a>
              <a
                href={GRIEVANCE_OFFICER.phoneHref}
                className="inline-flex items-center gap-1.5 font-sans text-[0.86rem] text-paper/85 underline-offset-2 hover:text-gold-light hover:underline"
              >
                <Phone className="h-3.5 w-3.5 text-gold-light" strokeWidth={1.5} />
                {GRIEVANCE_OFFICER.phone}
              </a>
            </div>

            {/* Right: SLA + full policy */}
            <div className="flex flex-col gap-2 lg:col-span-2 lg:items-end">
              <Link
                href="/legal/privacy"
                className="inline-flex items-center gap-1 font-sans text-[0.82rem] font-medium text-gold-light hover:underline"
              >
                Full policy
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* SLA caption — full width */}
          <p className="mt-3 flex items-center gap-1.5 font-sans text-[0.76rem] text-paper/55">
            <Clock className="h-3.5 w-3.5 text-gold-light/70" strokeWidth={1.5} />
            {GRIEVANCE_OFFICER.responseWindow}
          </p>
        </div>
      </div>

      {/* ============ BOTTOM BAR ============ */}
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          {/* Top row: copyright + CTA + social */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="font-mono text-[0.74rem] text-paper/55">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-paper">{SITE.name}</span>
              </p>
              <span className="hidden text-paper/20 sm:inline" aria-hidden="true">
                &middot;
              </span>
              <p className="font-sans text-[0.76rem] text-paper/55">
                Founded by{" "}
                <Link
                  href="/about"
                  className="font-medium text-paper underline-offset-2 hover:text-gold-light hover:underline"
                >
                  {SITE.founder}
                </Link>
              </p>
              <span className="hidden text-paper/20 sm:inline" aria-hidden="true">
                &middot;
              </span>
              <Link
                href="/book"
                className="inline-flex items-center gap-1 font-sans text-[0.78rem] font-medium text-gold-light hover:underline"
              >
                Book a consultation
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="flex items-center gap-2.5">
              <SocialLink
                icon={Linkedin}
                label="LinkedIn"
                href="https://www.linkedin.com/company/yaara-consultancy-services"
              />
              <SocialLink
                icon={Instagram}
                label="Instagram"
                href="https://www.instagram.com/yaara.consultancy"
              />
              <SocialLink
                icon={MessageCircle}
                label="WhatsApp"
                href={CONTACT.whatsappHref}
              />
            </div>
          </div>

          {/* Registered office */}
          <p className="mt-4 font-sans text-[0.76rem] leading-relaxed text-paper/50">
            <span className="font-mono text-[0.68rem] uppercase tracking-wider text-gold-light/80">
              Registered office:&nbsp;
            </span>
            {CONTACT.address.line1}, {CONTACT.address.line2},{" "}
            {CONTACT.address.line3}, {CONTACT.address.line4},{" "}
            {CONTACT.address.city}, {CONTACT.address.state}{" "}
            {CONTACT.address.pincode}, {CONTACT.address.country}.
          </p>

          {/* Honesty disclaimer */}
          <p className="mt-3 max-w-3xl font-sans text-[0.74rem] leading-relaxed text-paper/45">
            <span className="font-medium text-paper/70">
              Not a Chartered Accountancy firm.
            </span>{" "}
            Statutory audit &amp; certification work is signed off via our
            empanelled CA partner network. See our{" "}
            <Link
              href="/legal/disclaimer"
              className="font-medium text-paper/80 underline-offset-2 hover:text-gold-light hover:underline"
            >
              disclaimer
            </Link>{" "}
            for full details.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- sub-components ---------- */

function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string; icon?: "arrow" }[];
}) {
  return (
    <nav aria-label={label}>
      <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-gold-light">
        {label}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex items-center gap-1 font-sans text-[0.88rem] text-paper/70 transition-colors hover:text-paper hover:underline hover:decoration-gold-light hover:decoration-1 hover:underline-offset-4"
            >
              {l.label}
              {l.icon === "arrow" && (
                <ArrowUpRight className="h-3 w-3 text-gold-light" strokeWidth={2} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-paper/15 bg-paper/5 text-gold-light">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[0.6rem] uppercase tracking-wider text-paper/45">
          {label}
        </p>
        <p className="font-sans text-[0.84rem] font-medium text-paper break-words leading-tight">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return inner;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className="transition-opacity hover:opacity-80">
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="transition-opacity hover:opacity-80"
    >
      {inner}
    </a>
  );
}

function SocialLink({
  icon: Icon,
  label,
  href = "#",
}: {
  icon: typeof Phone;
  label: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-paper/15 bg-paper/5 text-paper/80 transition-colors hover:border-gold-light/40 hover:bg-gold-light/10 hover:text-gold-light"
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}
