import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const accentClass = {
  coral: "border-l-[var(--accent)] bg-[var(--accent-soft)]",
  teal: "border-l-[var(--teal)] bg-[var(--teal-soft)]",
} as const;

export function ProjectsSection() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="projetos"
          eyebrow="Autorais"
          title="Projetos"
          description="No topo: trabalhos com IA aplicada e visão computacional (TCC FindThem, BHT em produção). Em seguida, apps web e mobile. Tudo autoral — ideia e implementação minhas."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border border-[var(--line)] border-l-4 bg-[var(--paper-elevated)] p-8 shadow-sm transition hover:shadow-md md:p-10 ${accentClass[p.accent]} ${
                "featured" in p && p.featured === "ia"
                  ? "ring-2 ring-[var(--teal)]/35 shadow-[0_20px_50px_-28px_rgba(42,125,114,0.35)]"
                  : ""
              }`}
            >
              {"featured" in p && p.featured === "ia" ? (
                <span className="absolute right-6 top-6 rounded-full border border-[var(--teal)] bg-[var(--teal-soft)] px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
                  IA aplicada
                </span>
              ) : null}
              <div className="flex flex-wrap items-baseline justify-between gap-2 pr-16">
                <h3 className="font-serif text-2xl text-[var(--ink)]">{p.name}</h3>
                <time className="text-sm tabular-nums text-[var(--ink-muted)]">{p.period}</time>
              </div>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">{p.tagline}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-[var(--ink-muted)]">{p.context}</p>
              <p className="mt-5 text-sm leading-relaxed text-[var(--ink)] md:text-base">{p.description}</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--paper)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] transition hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]"
                  >
                    {link.label}
                    <span className="ml-1 opacity-60" aria-hidden>
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
