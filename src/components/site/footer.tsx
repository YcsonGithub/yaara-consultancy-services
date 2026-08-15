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
} from "lucide-react";
import { CONTACT, NAV_LINKS, SITE, GRIEVANCE_OFFICER, LEGAL_PAGES } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const SERVICE_LINKS = SERVICES.slice(0, 8).map((s) => ({
  label: s.shortTitle ?? s.title,
  href: `/services/${s.slug}`,
}));

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface/50">
      <div className="gold-rule" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        {/* top: brand + contact */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <YaaraLogo height={48} />
            <p className="mt-5 max-w-xs font-sans text-[0.92rem] leading-relaxed text-body">
              The accounting and compliance partner for Indian founders and
              small businesses who want a real person handling their numbers.
            </p>

            <p className="mt-5 font-mono text-[0.74rem] uppercase tracking-[0.2em] text-gold">
              {SITE.tagline}
            </p>

            {/* trust badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 font-sans text-[0.74rem] text-muted-foreground">
                <Lock className="h-3.5 w-3.5 text-success" />
                Encrypted uploads
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 font-sans text-[0.74rem] text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                GST Practitioner (pending)
              </span>
            </div>
          </div>

          {/* sitemap — 2 cols on mobile, 4 on sm+ */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-8">
            <nav aria-label="Pages">
              <h3 className="font-sans text-[0.8rem] font-semibold uppercase tracking-wider text-ink">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-[0.88rem] text-body transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-1 hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Popular services">
              <h3 className="font-sans text-[0.8rem] font-semibold uppercase tracking-wider text-ink">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {SERVICE_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-[0.88rem] text-body transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-1 hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 font-sans text-[0.88rem] font-medium text-ink hover:text-gold"
                  >
                    View all
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Resources">
              <h3 className="font-sans text-[0.8rem] font-semibold uppercase tracking-wider text-ink">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                <li><Link href="/resources/compliance-calendar" className="font-sans text-[0.88rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Compliance calendar</Link></li>
                <li><Link href="/resources/faqs" className="font-sans text-[0.88rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">FAQs</Link></li>
                <li><Link href="/resources#knowledge-center" className="font-sans text-[0.88rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Knowledge center</Link></li>
                <li><Link href="/industries" className="font-sans text-[0.88rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Industries we serve</Link></li>
                <li><Link href="/book" className="font-sans text-[0.88rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Book a consultation</Link></li>
              </ul>
            </nav>

            <nav aria-label="Legal">
              <h3 className="font-sans text-[0.8rem] font-semibold uppercase tracking-wider text-ink">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {LEGAL_PAGES.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/legal/${l.slug}`}
                      className="font-sans text-[0.88rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <ReopenConsentTrigger>Cookie preferences</ReopenConsentTrigger>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* contact strip */}
        <div className="mt-12 grid grid-cols-1 gap-5 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <ContactItem icon={Phone} label="Call" value={CONTACT.phone} href={CONTACT.phoneHref} />
          <ContactItem icon={MessageCircle} label="WhatsApp" value="Chat with us" href={CONTACT.whatsappHref} />
          <ContactItem icon={Mail} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <ContactItem icon={MapPin} label="Office" value="Hyderabad, Telangana" href="/contact" />
        </div>

        {/* registered address */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card/60 p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
              Registered office
            </p>
            <p className="mt-2 font-sans text-[0.88rem] leading-[1.7] text-body break-words">
              {CONTACT.address.line1}, {CONTACT.address.line2}, {CONTACT.address.line3}, {CONTACT.address.line4}, {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.pincode}, {CONTACT.address.country}
            </p>
          </div>

          {/* DPDP Act grievance officer */}
          <div className="rounded-lg border border-gold/30 bg-gold/[0.04] p-5">
            <p className="flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-gold">
              <UserCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
              Grievance officer · DPDP Act
            </p>
            <p className="mt-2 font-sans text-[0.88rem] font-medium text-ink">
              {GRIEVANCE_OFFICER.name}
            </p>
            <p className="font-sans text-[0.8rem] text-body">
              {GRIEVANCE_OFFICER.role}
            </p>
            <div className="mt-2 flex flex-col gap-1 font-sans text-[0.84rem]">
              <a
                href={`mailto:${GRIEVANCE_OFFICER.email}`}
                className="inline-flex items-center gap-1.5 text-ink underline-offset-2 hover:text-gold hover:underline"
              >
                <Mail className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                <span className="break-all">{GRIEVANCE_OFFICER.email}</span>
              </a>
              <a
                href={GRIEVANCE_OFFICER.phoneHref}
                className="inline-flex items-center gap-1.5 text-ink underline-offset-2 hover:text-gold hover:underline"
              >
                <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                {GRIEVANCE_OFFICER.phone}
              </a>
            </div>
            <p className="mt-2 font-sans text-[0.76rem] leading-relaxed text-muted-foreground">
              {GRIEVANCE_OFFICER.responseWindow}
            </p>
          </div>
        </div>

        {/* social + registered details */}
        <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <SocialLink icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/company/yaara-consultancy-services" />
            <SocialLink icon={Instagram} label="Instagram" href="https://www.instagram.com/yaara.consultancy" />
            <SocialLink icon={MessageCircle} label="WhatsApp" href={CONTACT.whatsappHref} />
          </div>

          <div className="font-mono text-[0.76rem] text-muted-foreground">
            <span className="text-ink">{SITE.name}</span> · Founded by {SITE.founder}
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.76rem] text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-md font-sans text-[0.76rem] leading-relaxed text-muted-foreground">
            Not a Chartered Accountancy firm. Statutory audit &amp; certification
            work is signed off via our empanelled CA partner network.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card text-ink">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div className="min-w-0">
        <p className="font-sans text-[0.74rem] uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="font-sans text-[0.92rem] font-medium text-ink break-words">{value}</p>
      </div>
    </div>
  );

  if (href) {
    // Internal routes use Next Link for client-side navigation;
    // external (tel:, mailto:, https://) use a plain anchor.
    if (href.startsWith("/")) {
      return (
        <Link href={href} className="transition-opacity hover:opacity-80">
          {content}
        </Link>
      );
    }
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }
  return content;
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
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-ink transition-colors hover:border-ink/30 hover:bg-surface"
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}
