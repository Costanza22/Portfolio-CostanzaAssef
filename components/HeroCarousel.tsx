import Image from "next/image";
import { person } from "@/lib/data";

export function HeroCarousel() {
  return (
    <div className="spotlight-carousel" aria-roledescription="carrossel" aria-label="Destaques no topo">
      <input
        className="spotlight-carousel__state"
        type="radio"
        name="hero-spot"
        id="hero-spot-1"
        defaultChecked
      />
      <input className="spotlight-carousel__state" type="radio" name="hero-spot" id="hero-spot-2" />
      <input className="spotlight-carousel__state" type="radio" name="hero-spot" id="hero-spot-3" />

      <div className="spotlight-carousel__stage">
        <div className="spotlight-carousel__arrow-rail spotlight-carousel__arrow-rail--prev" aria-hidden="true">
          <div className="spotlight-carousel__arrow-slot spotlight-carousel__arrow-slot--s1">
            <label htmlFor="hero-spot-3" className="spotlight-carousel__arrow" title="Anterior">
              <span aria-hidden>‹</span>
            </label>
          </div>
          <div className="spotlight-carousel__arrow-slot spotlight-carousel__arrow-slot--s2">
            <label htmlFor="hero-spot-1" className="spotlight-carousel__arrow" title="Anterior">
              <span aria-hidden>‹</span>
            </label>
          </div>
          <div className="spotlight-carousel__arrow-slot spotlight-carousel__arrow-slot--s3">
            <label htmlFor="hero-spot-2" className="spotlight-carousel__arrow" title="Anterior">
              <span aria-hidden>‹</span>
            </label>
          </div>
        </div>

        <div className="spotlight-carousel__viewport">
          <div className="spotlight-carousel__track">
            <figure className="spotlight-carousel__slide">
              <div className="spotlight-carousel__photo-shell">
                <div className="spotlight-carousel__photo-ring">
                  <div className="spotlight-carousel__photo-inner">
                    <Image
                      src="/costanza-profile.png"
                      alt={`${person.name} em retrato de estúdio`}
                      width={640}
                      height={640}
                      priority
                      sizes="(max-width: 768px) 85vw, 260px"
                    />
                  </div>
                </div>
                <figcaption className="spotlight-carousel__caption">
                  <strong>{person.name}</strong>
                  <span>Foto de estúdio, 2026</span>
                </figcaption>
              </div>
            </figure>

            <div className="spotlight-carousel__slide">
              <div className="spotlight-carousel__panel">
                <span className="spotlight-carousel__kicker">Lugar</span>
                <h3>Santa Catarina</h3>
                <p>
                  Moro em <strong>Santa Catarina</strong>. <strong>Tenho interesse em Florianópolis presencial</strong> ou{" "}
                  <strong> se for outra cidade, remoto</strong> 
                </p>
                <p>
                  Já fui estagiária de inteligência de mercado, passei por suporte com AD na Schulze Advogados
                  mas meu foco é desenvolvimento
                  
                </p>
              </div>
            </div>

            <div className="spotlight-carousel__slide">
              <div className="spotlight-carousel__panel">
                <span className="spotlight-carousel__kicker">O que uso</span>
                <h3>Minha stack</h3>
                <p>
                  <strong>Front-end:</strong> React,Next,TypeScript 
                </p>
                <p>
                  <strong>Back-end:</strong> Node.js,Python
                
                </p>
                <p>
                  <strong>Banco de dados:</strong> MySQL
                </p>
                <p>
                  <strong>DevOps e outras ferramentas:</strong> Git, Docker, Postman
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="spotlight-carousel__arrow-rail spotlight-carousel__arrow-rail--next" aria-hidden="true">
          <div className="spotlight-carousel__arrow-slot spotlight-carousel__arrow-slot--s1">
            <label htmlFor="hero-spot-2" className="spotlight-carousel__arrow" title="Próximo">
              <span aria-hidden>›</span>
            </label>
          </div>
          <div className="spotlight-carousel__arrow-slot spotlight-carousel__arrow-slot--s2">
            <label htmlFor="hero-spot-3" className="spotlight-carousel__arrow" title="Próximo">
              <span aria-hidden>›</span>
            </label>
          </div>
          <div className="spotlight-carousel__arrow-slot spotlight-carousel__arrow-slot--s3">
            <label htmlFor="hero-spot-1" className="spotlight-carousel__arrow" title="Próximo">
              <span aria-hidden>›</span>
            </label>
          </div>
        </div>
      </div>

      <div className="spotlight-carousel__dots" role="tablist" aria-label="Selecionar slide">
        <label htmlFor="hero-spot-1" className="spotlight-carousel__dot" title="Foto">
          <span className="sr-only">Slide 1 — foto</span>
        </label>
        <label htmlFor="hero-spot-2" className="spotlight-carousel__dot" title="Sobre">
          <span className="sr-only">Slide 2 — onde atuo</span>
        </label>
        <label htmlFor="hero-spot-3" className="spotlight-carousel__dot" title="Stack">
          <span className="sr-only">Slide 3 — stack</span>
        </label>
      </div>
    </div>
  );
}
