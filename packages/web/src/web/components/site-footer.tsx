import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../site-footer.css";

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Contatos e créditos">
      <div className="content-width">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <span className="site-footer__name">Ester</span>
            <span className="site-footer__descriptor">LASH DESIGNER</span>
            <p>Seu olhar. Seu destaque.</p>
          </div>
          <nav className="site-footer__contacts" aria-label="Fale com Ester">
            <h2>Vamos realçar o seu olhar?</h2>
            <a href="https://www.instagram.com/esterr_lashdesigner?mdxt=eGx0aG03ZTE4MjV5" target="_blank" rel="noopener noreferrer">
              <FaInstagram aria-hidden="true" />
              <span>@esterr_lashdesigner</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href="https://wa.me/5583991173570?text=Ol%C3%A1%2C%20Ester!%20Gostaria%20de%20agendar%20um%20atendimento." target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden="true" />
              <span>(83) 99117-3570</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
        <a className="site-footer__credit" href="https://vfsite.runable.site/" target="_blank" rel="noopener noreferrer">
          <img src="/images/vf-vertex-digital-logo.png" alt="VF Vertex Digital" width={720} height={378} loading="lazy" />
          <span className="site-footer__credit-copy">
            <span>Este site foi criado pela <strong>VF Vertex Digital.</strong></span>
            <span className="site-footer__credit-cta">Clique para adquirir o seu <ArrowUpRight size={16} aria-hidden="true" /></span>
          </span>
        </a>
      </div>
    </footer>
  );
}