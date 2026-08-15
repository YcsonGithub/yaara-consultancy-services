import Link from "next/link";
import { Home, Search, FileQuestion, ArrowRight, Compass } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const metadata = {
  title: "Page not found (404)",
  description: "That page doesn't exist. Use the links to get back on track.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const popular = SERVICES.slice(0, 6);

  return (
    <section className="relative overflow-hidden">
      {/* soft navy glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--ink) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          <FileQuestion className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
          Error 404
        </span>

        <h1 className="mt-6 font-serif text-4xl font-medium text-ink sm:text-5xl">
          This page <span className="italic text-gold">isn&apos;t on the books.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl font-sans text-[0.98rem] leading-relaxed text-body">
          The page you&apos;re looking for may have moved, been renamed, or never
          existed. Don&apos;t worry — here are the quickest ways back to something
          useful.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-sans text-[0.9rem] font-medium text-paper transition-colors hover:bg-ink-dark"
          >
            <Home className="h-4 w-4" strokeWidth={1.5} />
            Back to home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-sans text-[0.9rem] font-medium text-ink transition-colors hover:bg-surface"
          >
            <Search className="h-4 w-4 text-gold" strokeWidth={1.5} />
            Browse all services
          </Link>
        </div>

        <div className="mt-14 text-left">
          <p className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
            <Compass className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
            Popular services
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {popular.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-ink/20 hover:bg-surface"
                >
                  <span className="font-sans text-[0.88rem] font-medium text-ink">
                    {s.title}
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-gold"
                    strokeWidth={1.5}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 font-sans text-[0.82rem] text-muted-foreground">
          Still stuck?{" "}
          <Link
            href="/contact"
            className="font-medium text-ink underline decoration-gold underline-offset-2 hover:text-gold"
          >
            Contact {SITE.shortName}
          </Link>{" "}
          and we&apos;ll point you to the right place.
        </p>
      </div>
    </section>
  );
}
