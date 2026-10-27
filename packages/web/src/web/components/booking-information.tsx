import "../booking-information.css";

const guidelines = [
  {
    title: "Reserva do horário",
    text: "Para confirmar o agendamento, é necessário pagar um sinal de 50% do valor do serviço. Em caso de desistência ou falta, o sinal não será reembolsado, pois o horário fica indisponível para outras clientes.",
  },
  {
    title: "Imprevistos e remarcação",
    text: "Se surgir um imprevisto, avise com 24 horas de antecedência para remarcar o seu horário.",
  },
  {
    title: "Pontualidade",
    text: "A tolerância de atraso é de 10 minutos.",
  },
  {
    title: "Acompanhantes",
    text: "Não é permitida a presença de acompanhantes e crianças.",
  },
  {
    title: "Antes do atendimento",
    text: "Evite vir com maquiagem ou rímel e retire as lentes de contato.",
  },
];

export function BookingInformation() {
  return (
    <section className="booking-info content-width" aria-labelledby="booking-info-title">
      <h2 id="booking-info-title" className="lash-services-heading booking-info__title">Informações</h2>
      <div className="booking-info__layout">
        <header className="booking-info__intro">
          <span className="section-kicker"><span aria-hidden="true" /> ANTES DE AGENDAR</span>
          <h3>Um cuidado<br />em cada <em>detalhe.</em></h3>
          <p>Confira as orientações para o seu agendamento e atendimento com Ester.</p>
        </header>
        <ol className="booking-info__list">
          {guidelines.map((item, index) => (
            <li key={item.title}>
              <span className="booking-info__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}