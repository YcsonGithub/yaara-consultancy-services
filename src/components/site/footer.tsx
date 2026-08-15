import Link from "next/link";
import { YaaraLogo } from "./logo";
import { ReopenConsentTrigger } from "./consent-provider";
import { NewsletterForm } from "./newsletter-form";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { CONTACT, NAV_LINKS, SITE, LEGAL_PAGES } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const SERVICE_LINKS = SERVICES.slice(0, 5).map((s) => ({
  label: s.shortTitle ?? s.title,
  href: `/services/${s.slug}`,
}));

const PAGE_LINKS = NAV_LINKS.filter((l) => l.href !== "/");

/**
 * SiteFooter — clean, asymmetric 4-column dark navy footer.
 *
 * Design references the "premium dark footer" pattern: a heavy left
 * column (brand + newsletter + socials) balanced against three simple
 * link columns on the right. The DPDP §8(9) grievance officer info
 * lives on /legal/privacy (linked from the bottom legal bar) rather
 * than crowding the footer itself.
 *
 * Structure:
 *  1. Main grid (4 cols, asymmetric — left col spans 5/12)
 *     - Left: logo, blurb, newsletter form, social icons
 *     - Pages, Services, Contact (with gold icons)
 *  2. Meta bar: contact one-liner + "Back to top"
 *  3. Legal bar: copyright (left) | legal links (right)
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      {/* Gold hairline — brand signature */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* ============ MAIN GRID ============ */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* ---------- LEFT: Brand + Newsletter + Socials (heavy column) ---------- */}
          <div className="lg:col-span-5">
            <YaaraLogo height={44} onDark />

            <p className="mt-5 max-w-sm font-sans text-[0.92rem] leading-relaxed text-paper/65">
              The accounting and compliance partner for Indian founders and
              small businesses who want a real person handling their numbers.
            </p>

            {/* Newsletter signup — the "hero" of the footer */}
            <div className="mt-7">
              <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold-light">
                The Monthly Ledger
              </p>
              <p className="mt-1 font-sans text-[0.82rem] text-paper/55">
                One compliance deadline, one practical tip — every month.
              </p>
              <div className="mt-3 max-w-md">
                <NewsletterForm />
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-2.5">
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

          {/* ---------- RIGHT: 3 link columns ---------- */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            {/* Pages */}
            <nav aria-label="Pages">
              <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-light">
                Pages
              </h3>
              <ul className="mt-4 space-y-2.5">
                {PAGE_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-[0.9rem] text-paper/70 transition-colors hover:text-paper hover:underline hover:decoration-gold-light hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Services">
              <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-light">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SERVICE_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-[0.9rem] text-paper/70 transition-colors hover:text-paper hover:underline hover:decoration-gold-light hover:underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 font-sans text-[0.88rem] font-medium text-gold-light hover:underline"
                  >
                    View all
                    <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact — with gold icons */}
            <nav aria-label="Contact">
              <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-light">
                Contact
              </h3>
              <ul className="mt-4 space-y-3.5">
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-start gap-2.5"
                  >
                    <Mail
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-[0.86rem] text-paper/70 break-all transition-colors group-hover:text-paper">
                      {CONTACT.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    className="group flex items-start gap-2.5"
                  >
                    <Phone
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-[0.86rem] text-paper/70 transition-colors group-hover:text-paper">
                      {CONTACT.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group flex items-start gap-2.5"
                  >
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-[0.86rem] leading-relaxed text-paper/70 transition-colors group-hover:text-paper">
                      {CONTACT.address.line3}, {CONTACT.address.city},{" "}
                      {CONTACT.address.state} {CONTACT.address.pincode}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ============ META BAR ============ */}
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[0.8rem] text-paper/55">
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-gold-light"
              >
                {CONTACT.email}
              </a>
              <span aria-hidden="true" className="text-paper/20">
                &middot;
              </span>
              <a
                href={CONTACT.phoneHref}
                className="hover:text-gold-light"
              >
                {CONTACT.phone}
              </a>
              <span aria-hidden="true" className="text-paper/20">
                &middot;
              </span>
              <span>
                {CONTACT.address.city}, {CONTACT.address.state}
              </span>
            </div>

            <a
              href="#main-content"
              className="inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-medium text-paper/65 hover:text-gold-light"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
              Back to top
            </a>
          </div>
        </div>
      </div>

      {/* ============ LEGAL BAR ============ */}
      <div className="border-t border-paper/10 bg-ink-dark/40">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[0.78rem] text-paper/50">
              &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>

            {/* Legal links — single horizontal row */}
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {LEGAL_PAGES.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/legal/${l.slug}`}
                      className="font-sans text-[0.78rem] text-paper/55 transition-colors hover:text-gold-light hover:underline hover:underline-offset-2"
                    >
                      {l.label === "Refund & Cancellation Policy"
                        ? "Refund"
                        : l.label === "Cookie Policy"
                        ? "Cookies"
                        : l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <ReopenConsentTrigger className="font-sans text-[0.78rem] text-paper/55 transition-colors hover:text-gold-light hover:underline hover:underline-offset-2">
                    Cookie settings
                  </ReopenConsentTrigger>
                </li>
              </ul>
            </nav>
          </div>

          {/* Honesty disclaimer — one compact line */}
          <p className="mt-3 font-sans text-[0.72rem] leading-relaxed text-paper/40">
            Not a Chartered Accountancy firm. Statutory audit &amp; certification
            work is signed off via our empanelled CA partner network.{" "}
            <Link
              href="/legal/disclaimer"
              className="text-paper/60 underline-offset-2 hover:text-gold-light hover:underline"
            >
              Full disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- sub-components ---------- */

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
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-paper/15 bg-paper/5 text-paper/75 transition-colors hover:border-gold-light/40 hover:bg-gold-light/10 hover:text-gold-light"
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}
