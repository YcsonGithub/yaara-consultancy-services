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
 * SiteFooter — redesigned for clarity and trust.
 *
 * Structure (top → bottom):
 *  1. Main grid — brand + contact (left) and a 4-column sitemap (right).
 *  2. DPDP §8(9) grievance officer strip — single gold-tinted row, required
 *     to be "easily accessible" under the DPDP Act.
 *  3. Bottom bar — copyright, social, cookie preferences.
 *  4. Disclaimer line — "not a CA firm" honesty disclosure.
 *
 * The previous footer had 5 stacked sections (brand, sitemap, contact strip,
 * registered address, grievance card, social row, bottom bar) which felt
 * cluttered and buried the legal links. This version consolidates to 4
 * clearly-separated bands with stronger visual hierarchy.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface/50">
      <div className="gold-rule" />

      {/* ============ MAIN GRID ============ */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------- Brand + contact (left) ---------- */}
          <div className="lg:col-span-4">
            <YaaraLogo height={44} />
            <p className="mt-5 max-w-xs font-sans text-[0.92rem] leading-relaxed text-body">
              The accounting and compliance partner for Indian founders and
              small businesses who want a real person handling their numbers.
            </p>

            <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-gold-ink">
              {SITE.tagline}
            </p>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 font-sans text-[0.72rem] text-muted-foreground">
                <Lock className="h-3.5 w-3.5 text-success" strokeWidth={1.5} />
                Encrypted uploads
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 font-sans text-[0.72rem] text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-ink" strokeWidth={1.5} />
                DPDP compliant
              </span>
            </div>

            {/* Compact contact rows */}
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

          {/* ---------- Sitemap (right) — 4 columns ---------- */}
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
                  icon: "arrow",
                },
              ]}
            />

            <FooterColumn label="Resources" links={RESOURCE_LINKS} />

            <div>
              <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-ink">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5">
                {LEGAL_PAGES.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/legal/${l.slug}`}
                      className="font-sans text-[0.88rem] text-body transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-1 hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <ReopenConsentTrigger>Cookie preferences</ReopenConsentTrigger>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ============ DPDP GRIEVANCE OFFICER STRIP ============ */}
      <div className="border-t border-gold/20 bg-gold/[0.04]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3 sm:items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-card text-gold-ink">
                <UserCheck className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-gold-ink">
                  Grievance Officer · DPDP Act §8(9)
                </p>
                <p className="mt-0.5 font-sans text-[0.88rem] font-medium text-ink">
                  {GRIEVANCE_OFFICER.name}
                  <span className="font-normal text-muted-foreground">
                    {" "}&middot; {GRIEVANCE_OFFICER.role}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={`mailto:${GRIEVANCE_OFFICER.email}`}
                className="inline-flex items-center gap-1.5 font-sans text-[0.84rem] text-ink underline-offset-2 hover:text-gold-ink hover:underline"
              >
                <Mail className="h-3.5 w-3.5 text-gold-ink" strokeWidth={1.5} />
                <span className="break-all">{GRIEVANCE_OFFICER.email}</span>
              </a>
              <a
                href={GRIEVANCE_OFFICER.phoneHref}
                className="inline-flex items-center gap-1.5 font-sans text-[0.84rem] text-ink underline-offset-2 hover:text-gold-ink hover:underline"
              >
                <Phone className="h-3.5 w-3.5 text-gold-ink" strokeWidth={1.5} />
                {GRIEVANCE_OFFICER.phone}
              </a>
              <Link
                href="/legal/privacy"
                className="inline-flex items-center gap-1 font-sans text-[0.82rem] font-medium text-gold-ink hover:underline"
              >
                Full policy
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
          <p className="mt-2.5 font-sans text-[0.74rem] leading-relaxed text-muted-foreground">
            {GRIEVANCE_OFFICER.responseWindow}
          </p>
        </div>
      </div>

      {/* ============ BOTTOM BAR ============ */}
      <div className="border-t border-border bg-surface/70">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          {/* Top row: copyright + social */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="font-mono text-[0.74rem] text-muted-foreground">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-ink">{SITE.name}</span>
              </p>
              <span className="hidden text-border sm:inline" aria-hidden="true">
                &middot;
              </span>
              <p className="font-sans text-[0.76rem] text-muted-foreground">
                Founded by{" "}
                <Link
                  href="/about"
                  className="font-medium text-ink underline-offset-2 hover:text-gold-ink hover:underline"
                >
                  {SITE.founder}
                </Link>
              </p>
              <span className="hidden text-border sm:inline" aria-hidden="true">
                &middot;
              </span>
              <Link
                href="/book"
                className="inline-flex items-center gap-1 font-sans text-[0.78rem] font-medium text-ink hover:text-gold-ink"
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

          {/* Registered office — compact one-liner */}
          <p className="mt-4 font-sans text-[0.76rem] leading-relaxed text-muted-foreground">
            <span className="font-mono text-[0.68rem] uppercase tracking-wider text-gold-ink">
              Registered office:&nbsp;
            </span>
            {CONTACT.address.line1}, {CONTACT.address.line2},{" "}
            {CONTACT.address.line3}, {CONTACT.address.line4},{" "}
            {CONTACT.address.city}, {CONTACT.address.state}{" "}
            {CONTACT.address.pincode}, {CONTACT.address.country}.
          </p>

          {/* Honesty disclaimer */}
          <p className="mt-3 max-w-3xl font-sans text-[0.74rem] leading-relaxed text-muted-foreground">
            <span className="font-medium text-body">Not a Chartered Accountancy firm.</span>{" "}
            Statutory audit &amp; certification work is signed off via our
            empanelled CA partner network. See our{" "}
            <Link
              href="/legal/disclaimer"
              className="font-medium text-ink underline-offset-2 hover:text-gold-ink hover:underline"
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
      <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-ink">
        {label}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex items-center gap-1 font-sans text-[0.88rem] text-body transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-1 hover:underline-offset-4"
            >
              {l.label}
              {l.icon === "arrow" && (
                <ArrowUpRight className="h-3 w-3 text-gold-ink" strokeWidth={2} />
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
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-card text-ink">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="font-sans text-[0.84rem] font-medium text-ink break-words leading-tight">
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
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-ink transition-colors hover:border-gold/40 hover:bg-paper hover:text-gold-ink"
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}
