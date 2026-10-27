import "../about-ester.css";
import { NameGlitterOrbit } from "./name-glitter-orbit";

export function AboutEster() {
  return (
    <section className="about-ester content-width" aria-labelledby="about-ester-title">
      <h2 id="about-ester-title" className="lash-services-heading about-ester__section-title">Quem é Ester</h2>
      <header className="about-ester__heading">
        <h3><span className="about-ester__name"><em>Ester Lash</em><NameGlitterOrbit /></span></h3>
      </header>
      <div className="about-ester__visual">
        <img
          src="/images/ester-original.jpg"
          alt="Ester em seu espaço de atendimento, segurando o espelho Ester Lash Designer"
          width={1024}
          height={1536}
          loading="lazy"
        />
        <span className="section-kicker about-ester__caption"><span aria-hidden="true" /> BELEZA COM PROPÓSITO</span>
      </div>
      <div className="about-ester__copy">
        <p>
          Ester é lash designer e designer de sobrancelhas, dedicada a realçar a
          beleza natural de cada mulher com cuidado e atenção aos detalhes.
        </p>
        <p>
          Seu trabalho valoriza a individualidade de cada cliente, com extensões
          de cílios e designs de sobrancelhas que harmonizam com seus traços e seu
          estilo.
        </p>
        <p>
          Mais do que transformar o olhar, seu propósito é proporcionar uma
          experiência acolhedora, para que você se sinta bonita e confiante.
        </p>
      </div>
    </section>
  );
}