import { volunteering } from "@/lib/data";

export function VolunteerSection() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--forest)] py-16 text-[var(--paper)] md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div id="voluntariado" className="mb-12 scroll-mt-28 md:scroll-mt-32">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--sand)]">Comunidade</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-[var(--paper)] md:text-4xl">
            Voluntariado
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            A CyberDimension é uma comunidade em volta de segurança e tecnologia. Eu entro como voluntária: apoio divulgação de conteúdo, participo dos encontros e ajudo a puxar conversa sobre risco digital com linguagem acessível — sem misturar com o trabalho pago de suporte ou desenvolvimento.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {volunteering.map((v) => (
            <div
              key={v.org}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8"
            >
              <h3 className="font-serif text-xl text-[var(--paper)]">{v.role}</h3>
              <p className="mt-1 text-sm text-white/70">{v.org}</p>
              <time className="mt-3 block text-xs tabular-nums uppercase tracking-wider text-white/50">
                {v.period}
              </time>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/85">
                {v.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
