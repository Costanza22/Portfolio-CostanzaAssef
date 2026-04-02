import { languages, skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section className="bg-[var(--paper)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="habilidades"
          eyebrow="Ferramentas"
          title="Técnico + idiomas"
          description="Habilidades técnicas organizadas por categoria, e os idiomas que falo"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-[var(--paper)] px-3 py-1.5 text-sm text-[var(--ink)] ring-1 ring-[var(--line)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-[var(--line)] bg-[var(--paper-elevated)] p-8 md:p-10">
          <h3 className="font-serif text-xl text-[var(--ink)]">Idiomas</h3>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex flex-col border-l-2 border-[var(--accent)] pl-4">
                <dt className="text-sm font-medium text-[var(--ink)]">{lang.name}</dt>
                <dd className="text-sm text-[var(--ink-muted)]">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
