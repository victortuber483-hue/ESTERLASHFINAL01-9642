import { Fragment, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { lashServices, browServices, type ServiceCardData } from "../data/lash-services";

function LashServiceCard({ service }: { service: ServiceCardData }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let lastScrollY = window.scrollY;
    let scrollingDown = true;
    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY !== lastScrollY) scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", updateDirection, { passive: true });
    const observer = new IntersectionObserver(([entry]) => {
      updateDirection();
      element.classList.toggle("instant-entry", !entry.isIntersecting || !scrollingDown);
      element.classList.toggle("is-visible", entry.isIntersecting);
    }, { threshold: .15 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateDirection);
    };
  }, []);

  return <div className="ester-card-entry" ref={ref}>
      <article className={`ester-lash-card${service.art === "brow" ? " ester-lash-card--brow" : ""}`} aria-labelledby={`${service.id}-title`}>
        <div className="ester-lash-card__body">
        <h3 id={`${service.id}-title`}>{service.lines.map((line, index) => <Fragment key={line}>{index > 0 && <br />}{line}</Fragment>)}</h3>
        <div className="ester-lash-card__prices">
          <div><span>{service.priceLabel ?? "Aplicação"}</span><strong>R$ {service.price}</strong></div>
          {service.maintenance !== null && <div><span>Manutenção</span><strong>R$ {service.maintenance}</strong></div>}
        </div>
        <p className="ester-lash-card__period">{service.period}</p>
        </div>
        {service.art !== "none" && <div className={`ester-lash-card__art${service.art === "brow" ? " ester-lash-card__art--brow" : ""}`} aria-hidden="true"><img src={service.art === "brow" ? "/images/brow-3d.png" : "/images/lash-3d.png"} alt="" /><i /><i /><i /></div>}
        <a className="ester-lash-card__cta" aria-label={`Agende ${service.name} pelo WhatsApp`} href={`https://wa.me/5583991173570?text=${encodeURIComponent(`Olá! Gostaria de agendar ${service.name}. Quais horários estão disponíveis?`)}`} target="_blank" rel="noopener noreferrer"><span>Agende agora</span><ArrowUpRight size={19} /></a>
      </article>
  </div>;
}

export function LashCardPreview() {
  return <div className="ester-card-preview">
    {lashServices.map(service => <LashServiceCard key={service.id} service={service} />)}
  </div>;
}

export function BrowCardCatalog() {
  return <div className="ester-card-preview">
    {browServices.map(service => <LashServiceCard key={service.id} service={service} />)}
  </div>;
}