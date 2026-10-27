import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/5583991173570?text=Ol%C3%A1%2C%20Ester!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Ester Lash Designer pelo WhatsApp"
      title="Fale comigo pelo WhatsApp"
    >
      <span className="whatsapp-button__icon"><FaWhatsapp aria-hidden="true" /></span>
    </a>
  );
}