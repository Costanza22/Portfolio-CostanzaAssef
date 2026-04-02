import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper-elevated)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="experiencia"
          eyebrow="Trabalho"
          title="Onde já estive"
          description="Ordem meio cronológica ao contrário: o que faço agora primeiro, o estágio da WEG por último."
        />
        <ol className="relative space-y-0 border-l border-[var(--line)] pl-8 md:pl-10">
          {experience.map((job, i) => (
            <li key={`${job.org}-${i}`} className="relative pb-14 last:pb-0">
              <span
                className="absolute -left-[9px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-[var(--paper-elevated)] bg-[var(--accent)] md:-left-[11px]"
                aria-hidden
              />
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[var(--ink)]">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-[var(--ink-muted)]">
                    {job.org}
                    {"location" in job && job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>
                <time className="shrink-0 text-sm tabular-nums text-[var(--ink-muted)]">{job.period}</time>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--ink)] md:text-base">
                {job.bullets.map((b) => (
                  <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent)]">
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
