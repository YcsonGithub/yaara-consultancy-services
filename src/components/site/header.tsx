"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { YaaraLogo } from "./logo";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONTACT } from "@/lib/site";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(220,217,207,0.9),0_8px_24px_-12px_rgba(14,42,71,0.18)]"
          : "bg-paper/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label="Yaara Consultancy Services — home"
        >
          <YaaraLogo height={42} />
        </Link>

        {/* Desktop nav — visible at lg+ (1024px and up) */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className="nav-underline font-sans text-[0.86rem] font-medium text-body hover:text-ink transition-colors xl:text-[0.9rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-1.5 font-sans text-[0.84rem] font-medium text-body hover:text-ink transition-colors xl:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            {CONTACT.phone}
          </a>
          <Link
            href="/book"
            className="inline-flex h-10 items-center rounded-md bg-ink px-4 font-sans text-[0.84rem] font-medium text-paper transition-colors hover:bg-ink-dark xl:px-5 xl:text-[0.88rem]"
          >
            Book a call
          </Link>
        </div>

        {/* Mobile — hamburger below lg */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85vw] max-w-sm border-border bg-paper p-0"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <YaaraLogo height={38} />
              <SheetClose asChild>
                <button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ink"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetClose>
            </div>
            <nav className="flex flex-col px-3 py-4">
              {NAV_LINKS.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-3 font-sans text-[1rem] font-medium",
                      isActive(item.href)
                        ? "bg-surface text-ink"
                        : "text-ink hover:bg-surface"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto space-y-3 border-t border-border px-5 py-5">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 font-sans text-[0.92rem] font-medium text-ink"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                WhatsApp us
              </a>
              <SheetClose asChild>
                <Link
                  href="/book"
                  className="flex h-11 items-center justify-center rounded-md bg-ink px-4 font-sans text-[0.95rem] font-medium text-paper"
                >
                  Book a free consultation
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
