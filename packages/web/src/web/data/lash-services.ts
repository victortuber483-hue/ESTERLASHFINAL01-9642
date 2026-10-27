// Fonte: catálogo Valores cílios e sobrancelhas enviado pela proprietária.
export type ServiceCardData = {
  id: string;
  name: string;
  lines: string[];
  price: number;
  maintenance: number | null;
  period: string;
  priceLabel?: string;
  art?: "lash" | "brow" | "none";
};

export const lashServices: ServiceCardData[] = [
  { id: "volume-brasileiro", name: "Volume Brasileiro", lines: ["Volume", "Brasileiro"], price: 80, maintenance: 70, period: "Manutenção em 15 a 20 dias" },
  { id: "mega-brasileiro", name: "Mega Brasileiro", lines: ["Mega", "Brasileiro"], price: 100, maintenance: 90, period: "Manutenção em 15 a 25 dias" },
  { id: "volume-egipcio", name: "Volume Egípcio (5D)", lines: ["Volume", "Egípcio (5D)"], price: 90, maintenance: 80, period: "Manutenção em 15 a 20 dias" },
  { id: "mega-egipcio", name: "Mega Egípcio", lines: ["Mega", "Egípcio"], price: 120, maintenance: null, period: "Sem manutenção" },
  { id: "fox-eyes", name: "Fox Eyes", lines: ["Fox", "Eyes"], price: 120, maintenance: 105, period: "Manutenção em 15 a 20 dias" },
  { id: "volume-brown", name: "Volume Brown", lines: ["Volume", "Brown"], price: 100, maintenance: 80, period: "Manutenção em 15 a 20 dias" },
  { id: "remocao-quimica", name: "Remoção Química", lines: ["Remoção", "Química"], price: 35, maintenance: null, period: "Remoção de extensão de cílios", priceLabel: "Valor" },
];

export const browServices: ServiceCardData[] = [
  { id: "design-personalizado", name: "Design de Sobrancelhas Personalizado", lines: ["Design de", "Sobrancelhas"], price: 25, maintenance: null, period: "Design personalizado", priceLabel: "Valor", art: "brow" },
  { id: "design-henna", name: "Design de Sobrancelhas com Henna", lines: ["Design de", "Sobrancelhas"], price: 35, maintenance: null, period: "Com henna", priceLabel: "Valor", art: "brow" },
  { id: "buco", name: "Buço", lines: ["Buço"], price: 10, maintenance: null, period: "Depilação de buço", priceLabel: "Valor", art: "none" },
];