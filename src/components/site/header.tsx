"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { YaaraLogo } from "./logo";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "How we work", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(220,217,207,0.9),0_8px_24px_-12px_rgba(14,42,71,0.18)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label="Yaara Consultancy Services — home"
        >
          <YaaraLogo />
        </a>

        {/* Desktop nav — real nav, not a hamburger when there's room */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-underline font-sans text-[0.92rem] font-medium text-body hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-[0.88rem] font-medium text-body hover:text-ink transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-gold" />
            WhatsApp
          </a>
          <a
            href="#book"
            className="inline-flex h-10 items-center rounded-md bg-ink px-5 font-sans text-[0.9rem] font-medium text-paper transition-colors hover:bg-ink-dark"
          >
            Book a free consultation
          </a>
        </div>

        {/* Mobile */}
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
              <YaaraLogo />
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
              {NAV.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-3 font-sans text-[1rem] font-medium text-ink hover:bg-surface"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto space-y-3 border-t border-border px-5 py-5">
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 font-sans text-[0.92rem] font-medium text-ink"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                Chat on WhatsApp
              </a>
              <SheetClose asChild>
                <a
                  href="#book"
                  className="flex h-11 items-center justify-center rounded-md bg-ink px-4 font-sans text-[0.95rem] font-medium text-paper"
                >
                  Book a free consultation
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
