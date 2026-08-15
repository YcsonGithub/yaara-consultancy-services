import Link from "next/link";
import { YaaraLogo } from "./logo";
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
} from "lucide-react";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const SERVICE_LINKS = SERVICES.slice(0, 8).map((s) => ({
  label: s.shortTitle ?? s.title,
  href: `/services/${s.slug}`,
}));

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface/50">
      <div className="gold-rule" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        {/* top: brand + contact */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <YaaraLogo height={48} />
            <p className="mt-5 max-w-xs font-sans text-[0.9rem] leading-relaxed text-body">
              The accounting and compliance partner for Indian founders and
              small businesses who want a real person handling their numbers.
            </p>

            <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-gold">
              {SITE.tagline}
            </p>

            {/* trust badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 font-sans text-[0.72rem] text-muted-foreground">
                <Lock className="h-3.5 w-3.5 text-success" />
                Encrypted uploads
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 font-sans text-[0.72rem] text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                GST Practitioner (pending)
              </span>
            </div>
          </div>

          {/* sitemap */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <nav aria-label="Pages">
              <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-ink">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-[0.86rem] text-body transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-1 hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Popular services">
              <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-ink">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SERVICE_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-[0.86rem] text-body transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-1 hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 font-sans text-[0.86rem] font-medium text-ink hover:text-gold"
                  >
                    View all
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Resources">
              <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-ink">
                Resources
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/resources/compliance-calendar" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Compliance calendar</Link></li>
                <li><Link href="/resources/faqs" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">FAQs</Link></li>
                <li><Link href="/resources#knowledge-center" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Knowledge center</Link></li>
                <li><Link href="/industries" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Industries we serve</Link></li>
                <li><Link href="/book" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Book a consultation</Link></li>
              </ul>
            </nav>

            <nav aria-label="Legal">
              <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-ink">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/legal/privacy" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Privacy policy</Link></li>
                <li><Link href="/legal/terms" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Terms of service</Link></li>
                <li><Link href="/legal/refund" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Refund policy</Link></li>
                <li><Link href="/legal/disclaimer" className="font-sans text-[0.86rem] text-body hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-4">Disclaimer</Link></li>
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
        <div className="mt-8 rounded-lg border border-border bg-card/60 p-5">
          <p className="font-mono text-[0.66rem] uppercase tracking-wider text-muted-foreground">
            Registered office
          </p>
          <p className="mt-1.5 font-sans text-[0.86rem] leading-relaxed text-body">
            {CONTACT.address.line1}, {CONTACT.address.line2}, {CONTACT.address.line3}, {CONTACT.address.line4}, {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.pincode}, {CONTACT.address.country}
          </p>
        </div>

        {/* social + registered details */}
        <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <SocialLink icon={Linkedin} label="LinkedIn" />
            <SocialLink icon={Instagram} label="Instagram" />
            <SocialLink icon={MessageCircle} label="WhatsApp" href={CONTACT.whatsappHref} />
          </div>

          <div className="font-mono text-[0.74rem] text-muted-foreground">
            <span className="text-ink">{SITE.name}</span> · Founded by {SITE.founder}
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.74rem] text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-sans text-[0.74rem] text-muted-foreground">
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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-ink">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div>
        <p className="font-sans text-[0.72rem] uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="font-sans text-[0.9rem] font-medium text-ink">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity hover:opacity-80">
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
