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
} from "lucide-react";

const COLUMNS = [
  {
    title: "Services",
    links: [
      "GST registration & filing",
      "Income Tax Return (ITR)",
      "Business registration",
      "Udyam (MSME)",
      "ROC compliance",
      "Bookkeeping & accounting",
    ],
  },
  {
    title: "Company",
    links: [
      "About / Founder's story",
      "CA partner network",
      "How we work",
      "Pricing",
      "Book a consultation",
      "Contact",
    ],
  },
  {
    title: "Resources",
    links: [
      "Compliance calendar",
      "Knowledge center",
      "GST due dates",
      "ITR deadlines",
      "FAQs",
      "Blog",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy policy",
      "Terms of service",
      "Refund policy",
      "Data protection",
      "Disclaimer",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface/50">
      {/* gold hairline accent */}
      <div className="gold-rule" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        {/* top: brand + contact */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <YaaraLogo />
            <p className="mt-5 max-w-xs font-sans text-[0.9rem] leading-relaxed text-body">
              The accounting and compliance partner for Indian founders and
              small businesses who want a real person handling their numbers.
            </p>

            <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-gold">
              Advise &middot; Analyze &middot; Achieve
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
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-wider text-ink">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#book"
                        className="font-sans text-[0.86rem] text-body transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-1 hover:underline-offset-4"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* contact strip */}
        <div className="mt-12 grid grid-cols-1 gap-5 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <ContactItem
            icon={Phone}
            label="Call"
            value="+91 90000 00000"
            href="tel:+919000000000"
          />
          <ContactItem
            icon={MessageCircle}
            label="WhatsApp"
            value="Chat with us"
            href="https://wa.me/919000000000"
          />
          <ContactItem
            icon={Mail}
            label="Email"
            value="hello@yaara.in"
            href="mailto:hello@yaara.in"
          />
          <ContactItem
            icon={MapPin}
            label="Office"
            value="Bengaluru, Karnataka, India"
          />
        </div>

        {/* social + registered details */}
        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <SocialLink icon={Linkedin} label="LinkedIn" />
            <SocialLink icon={Instagram} label="Instagram" />
            <SocialLink icon={MessageCircle} label="WhatsApp" />
          </div>

          <div className="font-mono text-[0.74rem] text-muted-foreground">
            <span className="text-ink">Yaara Consultancy Services</span> &middot;
            Udyam &amp; GSTIN: <span className="text-muted-foreground">to be updated on registration</span>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.74rem] text-muted-foreground">
            &copy; {new Date().getFullYear()} Yaara Consultancy Services. All
            rights reserved.
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
}: {
  icon: typeof Phone;
  label: string;
}) {
  return (
    <a
      href="#book"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-ink transition-colors hover:border-ink/30 hover:bg-surface"
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}
