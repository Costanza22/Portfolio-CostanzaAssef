import { education } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper-elevated)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="formacao"
          eyebrow="Estudos"
          title="Formação"
          description="Graduação em Joinville; especialização na UFPR em andamento"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <article
              key={e.degree}
              className="group rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-8 transition hover:border-[var(--ink-muted)] md:p-9"
            >
              <h3 className="font-serif text-xl leading-snug text-[var(--ink)] group-hover:text-[var(--accent)]">
                {e.degree}
              </h3>
              <p className="mt-3 text-sm font-medium text-[var(--ink-muted)]">{e.school}</p>
              {"location" in e && e.location ? (
                <p className="mt-1 text-sm text-[var(--ink-muted)]">{e.location}</p>
              ) : null}
              <time className="mt-4 inline-block text-sm tabular-nums text-[var(--ink)]">{e.period}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
