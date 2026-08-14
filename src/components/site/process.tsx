import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Consult",
    desc: "A free 20-minute call. We understand your business and what's actually due — no jargon, no pressure.",
  },
  {
    n: "02",
    title: "Document",
    desc: "You share what's needed over WhatsApp or a secure upload. We confirm receipt and flag anything missing immediately.",
  },
  {
    n: "03",
    title: "File",
    desc: "We prepare, walk you through it, and file with the right authority — accurately and before the deadline.",
  },
  {
    n: "04",
    title: "Confirm",
    desc: "You get filed acknowledgements, a clear record, and the next deadline already on your calendar.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-surface/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
              02 — How we work
            </span>
            <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
              What actually happens after you{" "}
              <span className="italic font-light">hand over documents</span>.
            </h2>
            <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
              Compliance clients are rightly anxious about the &ldquo;black
              box&rdquo; after they send their papers. Here is the whole process,
              in four steps &mdash; nothing hidden.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          {/* connecting line — horizontal on desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
          <div className="absolute left-0 top-7 hidden h-px bg-gold/60 lg:block" style={{ width: "100%" }} />

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.08} className="relative">
                {/* step node */}
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-paper font-mono text-[1rem] font-semibold text-ink shadow-[0_6px_18px_-10px_rgba(14,42,71,0.3)]">
                    {s.n}
                  </span>
                  <h3 className="font-serif text-[1.4rem] font-medium text-ink lg:mt-5">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 font-sans text-[0.92rem] leading-relaxed text-body lg:mt-3">
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
