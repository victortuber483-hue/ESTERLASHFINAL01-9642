import { useEffect, useRef } from "react";
import { Eye } from "lucide-react";

const services = [
  { name: "Volume Brasileiro", price: 80, maintenance: 70, days: "15 a 20 dias" },
  { name: "Mega Brasileiro", price: 100, maintenance: 90, days: "15 a 25 dias" },
  { name: "Volume Egípcio (5D)", price: 90, maintenance: 80, days: "15 a 20 dias" },
  { name: "Mega Egípcio", price: 120, maintenance: null, days: "Sem manutenção" },
  { name: "Fox Eyes", price: 120, maintenance: 105, days: "15 a 20 dias" },
  { name: "Volume Brown", price: 100, maintenance: 80, days: "15 a 20 dias" },
];

export function LashReferenceCards() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cards = root.current?.querySelectorAll<HTMLElement>(".lash-vf-reveal");
    if (!cards) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle("is-visible", entry.isIntersecting));
    }, { threshold: 0.12 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return <div className="lash-vf-column" ref={root} aria-label="Serviços de extensão de cílios">
    <div className="lash-vf-links">
      {services.map((service, index) => <div className="lash-vf-reveal" key={service.name} data-side={index % 2 ? "right" : "left"}>
        <a className="lash-vf-card" href={`https://wa.me/5583991173570?text=${encodeURIComponent(`Olá! Gostaria de consultar horários para ${service.name}.`)}`} target="_blank" rel="noopener noreferrer">
          <span className="lash-vf-icon" aria-hidden="true"><Eye strokeWidth={1.5} /></span>
          <div>
            <h3>{service.name}</h3>
            <p>Aplicação: <strong>R$ {service.price}</strong><br />{service.maintenance !== null ? <>Manutenção: <strong>R$ {service.maintenance}</strong><br /><span className="lash-vf-period">{service.days}</span></> : <span className="lash-vf-period">Sem manutenção</span>}</p>
            <span className="lash-vf-label">Clique para agendar</span>
          </div>
        </a>
      </div>)}
    </div>
  </div>;
}