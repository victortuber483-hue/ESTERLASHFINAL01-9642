# Pink Glitter — Design

## Estrela orbital — Quem é Ester

- Refinamento: volta em 3,6 segundos, halo branco/rosa mais intenso e rastro luminoso; pré-renderizar estrela e partículas em sprites para reduzir o custo de desenho por frame.
- Somente no nome “Ester Lash”: estrela luminosa facetada com aparência 3D, branco/prata/rosa, orbitando 360° em elipse e deixando rastro de partículas de glitter que se dissipam.
- Volta suave de 6 segundos; efeito decorativo em canvas transparente, sem modificar foto, texto, layout ou outras seções. Nome permanece legível.
- Ajustar órbita ao tamanho real do nome no celular e desktop; pausar fora da tela/aba oculta e mostrar estrela estática em movimento reduzido.

## Rodapé — etapa atual aprovada

- Rodapé após Informações, com marca Ester Lash Designer, Instagram e WhatsApp existentes. Sem endereço ou horários inventados.
- Crédito “Este site foi criado pela VF Vertex Digital” e CTA “Clique para adquirir o seu” para https://vfsite.runable.site/, com a logo original enviada, preservando vermelho/branco e transparência.
- Fundo vinho/pink profundo, linha superior suave e tipografia atual; contatos acima e assinatura separada abaixo. Responsivo com empilhamento no celular e espaço para o botão fixo.
- WhatsApp flutuante visível desde o carregamento, inclusive sobre a hero; remover a condição de rolagem, mantendo estilo e link.
- Somente frontend, sem novas APIs ou tabelas; preservar todas as seções anteriores.

## Informações — etapa atual aprovada

- Adicionar “Informações” depois de “Quem é Ester”, sem criar rodapé e sem formas de pagamento.
- Cinco orientações do catálogo: sinal de 50% e não reembolso em desistência/falta; aviso de 24h para remarcar; tolerância de 10 minutos; sem acompanhantes e crianças; evitar maquiagem/rímel e retirar lentes de contato.
- Preservar o fundo pink/glitter, títulos Cormorant Garamond e texto Poppins branco/rosa claro. Lista editorial numerada, divisórias suaves, duas colunas no desktop e fluxo vertical no celular.
- Somente frontend: novo componente e CSS, compostos na página inicial. Nenhuma API ou tabela.

## Quem é Ester — reconstrução atual

- “Beleza com propósito” passa a ser uma legenda centralizada logo abaixo da foto, em desktop e celular. Não alterar nome, títulos, foto ou texto.
- Cancelado somente o pedido de foto lateral no celular: manter foto centralizada com texto abaixo. Preservar “Quem é Ester” como título da seção, no estilo de “Serviços”, e “Ester Lash” em destaque na apresentação. Desktop com foto à esquerda e apresentação à direita.
- Substituir a apresentação anterior pela nova foto IMG_7105 enviada pela usuária, intacta e com fundo original. Sem remover fundo, máscara, recorte de pessoa ou brilho na foto.
- Composição limpa: desktop foto à esquerda e texto à direita; celular título, foto centralizada e texto abaixo em largura normal. Nenhum texto contornando a foto.
- Foto completa na proporção original 2:3, cantos discretos. Título serifado com brilho suave somente no nome. Manter texto aprovado, fundo pink e todas as outras seções.

## Quem é Ester — seção aprovada

- Refinamento: retirar o fundo branco da foto com recorte transparente, eliminar moldura e integrar ao pink; preservar rosto, roupa e espelho originais.
- Título com “Ester” maior, brilho luminoso e destaque branco/rosa. No celular, título acima e retrato flutuante à direita: texto curto à esquerda da foto, retomando largura total abaixo dela.
- Adicionar somente a seção biográfica abaixo de todos os serviços, preservando integralmente hero, preços, cards e WhatsApp.
- Usar a foto original extraída da capa do catálogo, sem os textos sobrepostos do PDF, em moldura com topo curvo e contorno luminoso discreto.
- Texto aprovado em terceira pessoa; título “Quem é Ester”. Cormorant Garamond no título, Poppins nos parágrafos, branco e rosa claro sobre o fundo pink/glitter existente.
- Desktop: retrato à esquerda e texto à direita. Celular: retrato seguido do texto, com respiro e sem animação adicional. Sem novas APIs, tabelas ou botões.

## Foto editorial — substituição atual

- Trocar somente a foto acima dos serviços pela nova imagem enviada em 27/10, preservando coração, contorno e ferramentas laterais.
- Enquadrar olho e sobrancelha no coração, sem alterar a foto ou o restante da página.

## Expansão — remoção química, sobrancelhas e buço

- Remoção química R$ 35 pertence ao catálogo de cílios, após os seis modelos, com elemento lateral de cílio.
- Nova seção “Sobrancelhas e buço” abaixo: Design de Sobrancelhas Personalizado R$ 25, Design de Sobrancelhas com Henna R$ 35 e Buço R$ 10.
- Manter os mesmos cards pink com glitter, largura, preços e CTA específico de WhatsApp. Nos designs de sobrancelhas, usar sobrancelha realista 3D recortada e flutuante na lateral, sem sobrepor o texto. Buço sem símbolo de cílio/sobrancelha para não confundir o serviço.
- Entrada permanece somente na descida; subida instantânea. Preservar hero, foto editorial e os seis cards existentes.

## Rolagem — entrada somente na descida

- Animar a entrada dos cards apenas ao descer a página. Na subida, mostrar imediatamente, sem rotação ou fade de entrada.
- Preservar flutuação, glitter, composição e acessibilidade de movimento reduzido.

## Catálogo de cílios — expansão atual

- Exibir os seis modelos do PDF enviado: Volume Brasileiro, Mega Brasileiro, Volume Egípcio (5D), Mega Egípcio, Fox Eyes e Volume Brown.
- Preservar a composição do card aprovado: gradiente pink com glitter, cílio 3D à direita, título, aplicação/manutenção, prazo e botão de WhatsApp específico por serviço.
- Manter a largura atual e empilhar os cards com respiro, com entrada rotacionada independente para cada um e flutuação preservada.
- Mega Egípcio mostra “Sem manutenção” e nenhum preço de manutenção. Não incluir sobrancelhas, buço ou remoção química.
- Preservar hero, foto editorial e demais seções. Dados ficam em `src/web/data/lash-services.ts`; sem novas APIs ou tabelas.

## Refinamento atual — moldura coração

- Substituir o recorte orgânico da foto por coração, inspirado no espelho rosa presente na imagem.
- Contorno luminoso acompanha o coração; ferramentas permanecem nas laterais. Preservar o card e todo o restante.

## Foto editorial — etapa atual

- Usar somente a nova foto com espelho, abaixo da introdução, em moldura orgânica curva com contorno luminoso e pontos de brilho.
- Pinça rosa, escovinha e cílio realista ficam nas laterais das bordas, sobrepostos discretamente, nunca no centro do resultado.
- Adicionar apenas o título “Serviços” acima do único card aprovado. Não replicar cards ou adicionar legendas, categorias ou carrossel.
- Preservar integralmente o card rosa com glitter e sua animação.

## Preview aprovado em direção — card rosa compacto

- Testar apenas Volume Brasileiro. Card rosa vivo em gradiente com glitter, acabamento 3D e cílio realista recortado à direita, sem ícone de olho.
- Ordem: título, valores, descrição/prazo, “Agende agora”. Texto não se sobrepõe ao cílio.
- Preservar entrada com rotação e flutuação da referência em camadas independentes; testar estado final no mobile.
- Nenhuma foto de cliente ou categoria adicional. Aguardar aprovação do card antes de replicar.

## Estado atual — preview removido

- Card de Volume Brasileiro removido. Manter apenas hero, transição e introdução textual. Aguardar novas instruções antes de criar cards.

## Preview atual — um card para aprovação

- Somente Volume Brasileiro: aplicação R$ 80, manutenção R$ 70, prazo de 15 a 20 dias, CTA “Agende agora” no WhatsApp.
- Card vinho profundo com gradiente pink e ícone interno. Entrada rotacionada e flutuação preservadas da referência VF, com wrappers independentes para evitar conflitos de transform no celular.
- Entregar um único card; aguardar aprovação antes de replicar. Não modificar hero, introdução ou adicionar outras categorias.

## Reversão atual

- Cards VF removidos a pedido do usuário. Estado visível: hero, transição original e introdução textual, sem cards ou fotos abaixo.

## Cards de cílios — referência VF autorizada

- Reproduzir os cards bio-link-card de VFVERTEXDIGITALOFICIALFINAL-1087: fundo preto em gradiente, bordas arredondadas, placa violeta 3D sobreposta à esquerda, brilho no link e entrada rotacionada no scroll.
- Manter a paleta exata dos cards da referência, dentro do fundo pink existente.
- Apenas seis cards de cílios com aplicação, manutenção e prazos do catálogo. Não adicionar fotos, carrossel, sobrancelhas, remoção química ou seções novas.
- Preservar a introdução textual, hero, transição e WhatsApp existentes.

## Remoção solicitada — estado atual

- Manter hero, transição original e apenas o texto da introdução “Seu olhar. Seu destaque.”.
- Remover também a foto luminosa e a legenda “Beleza em cada detalhe.” da introdução.
- Remover o link “Explore os serviços” e todo o conteúdo posterior: carrossel, catálogo de cílios, remoção química e seção de sobrancelhas.
- Fotos e catálogo permanecem armazenados para futuras etapas.

## Implementação autorizada — serviços

- Preservar hero e transição original. Construir apenas cílios/manutenção e sobrancelhas, sem seção biográfica ou rodapé novo.
- Fotografia editorial assimétrica com recortes curvos, borda branca rosada e pequenos pontos de luz inspirados na referência enviada.
- Carrossel duplo automático, sentidos opostos, sem ampliação por clique; controle de pausa e versão estática em movimento reduzido.
- Cards tridimensionais com gradiente rosa profundo, glitter fino, reflexo de luz e preços/prazos fiéis ao catálogo recebido.
- Tipografia Cormorant Garamond e Poppins; hierarquia limpa em branco, respiro entre categorias e prioridade mobile.
- Nova foto de sobrancelhas usada na categoria correspondente; não inferir técnicas nas fotos de cílios.

## Transição aprovada — feixe de luz

- Substituir a névoa pink larga por uma borda curva acompanhada por feixe fino branco rosado e halo estreito.
- Recorte curvo na base da hero, com a mesma curva usada na luz; fundo pink inferior sobreposto apenas atrás dessa junção.
- Ponto luminoso percorre a curva lentamente, sem piscar; suprimir movimento quando prefers-reduced-motion estiver ativo.
- Manter tamanho compacto da hero, título/subtítulo, loop ping-pong e WhatsApp. Nenhum conteúdo novo abaixo.

## Informações e conteúdo — etapa atual

- Marca verificada no catálogo: Ester Lash Designer. Contexto completo em business-context.md; não publicar preços ou políticas por enquanto.
- Hero recebe título “Ester Lash Designer” e subtítulo “Extensão de cílios e sobrancelhas que realçam a sua beleza.” à esquerda, preservando rosto e animação à direita.
- Display Cormorant Garamond 500, texto Poppins 400/500; fontes locais em public/fonts. Branco sobre sombreado discreto apenas na lateral esquerda.
- WhatsApp fixo à direita em pink com símbolo branco e pulso suave, link para +55 83 99117-3570. Só aparece quando a hero sair totalmente da tela; esconde ao voltar à hero. Respeitar movimento reduzido.
- Manter altura atual da hero, loop ping-pong e transição pink. Não adicionar outros conteúdos abaixo.

## Loop aprovado — ping-pong

- Hero percorre os 192 frames do início ao fim e retorna em ordem inversa, repetindo sem corte ou dissolução entre poses.
- Não duplicar os frames das extremidades; ciclo de 382 passos a 24fps. Pré-carregamento acompanha a direção da reprodução.
- Preservar tamanho compacto no celular, fundo separado abaixo e transição visual suave entre as seções.

## Correção de layout — prioridade atual

- Hero é uma seção no topo em fluxo normal, não uma tela inteira. Desktop 16:9 com altura máxima de 720px; celular 4:3 com altura máxima de 360px (292,5px em largura de 390px).
- Usar a composição ampla dos frames, com foco horizontal na mulher no mobile; remover o close vertical exagerado.
- Área de conteúdo independente abaixo da hero, com o fundo pink e glitter originais. Inicialmente vazia, com pelo menos uma tela de altura, para receber os próximos conteúdos.
- Glitter fica contido na área inferior e acompanha seu tamanho.
- Transição atual: sobreposição de 64–150px apenas na junção, com máscara suave no rodapé da hero revelando o mesmo fundo pink e glitter da área inferior. Sem linha divisória; manter altura compacta da hero e conteúdo em fluxo normal, abaixo dela.

## Direção aprovada — etapa 2

- Hero no topo composta por frames extraídos do arquivo enviado (8 segundos, 24 fps, 1280 × 720), renderizados em canvas em loop automático. Sem elemento video, controles ou áudio.
- A animação é a própria seção de abertura: tela inteira, sem card, borda ou player; enquadramento central responsivo.
- Manter o pink com glitter existente abaixo da hero e criar transição suave na borda inferior.
- Nenhum texto, botão ou seção adicional nesta etapa. Marca d’água continua removida.
- Carregar frames progressivamente com cache limitado; pausar em abas ocultas e mostrar frame estático para movimento reduzido.
- Alterações somente no frontend web: componente hero, página inicial, CSS e frames em public/images/hero-frames. Sem novas APIs ou tabelas.
- Prioridade mobile: sequência própria 720 × 1080, recorte centrado no rosto, redimensionamento Lanczos e nitidez moderada sem inventar detalhes. Cache menor para celular. Altura baseada em svh para navegadores móveis; desktop mantém o enquadramento original.

## Direção aprovada — etapa 1

Somente fundo pink vivo de tela inteira, com glitter animado e luzes cintilantes. Sem hero, textos, botões ou novas seções até o próximo comando do usuário.

- Paleta: #ed087e dominante, #ff168f e #cd0063 para profundidade discreta; glitter branco, prata e rosa claro.
- Glitter fino e denso com estrelas pequenas e brilho suave, sem bolhas grandes.
- Layout responsivo de tela inteira, sem margens ou rolagem.
- Canvas decorativo; respeitar prefers-reduced-motion e pausar em abas ocultas.
- Tipografia futura: Poppins, sans-serif. Nenhum texto nesta etapa.
- Web apenas. Nenhuma API ou tabela nova.

---

> Starter design brief. Replace this content with the app you're building before writing any UI.
> Keep it short and concrete — it's the single source of truth for palette, typography, pages,
> screens, and flows across web, mobile, and desktop.

One-line description of the app, the platforms it ships on, the visual direction (style, feel), and the core job it does for the user.

## Brand & Colors

One token set, consumed per platform:

- **Web & desktop**: CSS variables in `packages/web/src/web/styles.css` (desktop loads the web UI).
- **Mobile**: `Colors.light` / `Colors.dark` in `packages/mobile/constants/theme.ts`, read via `useColors()`; `userInterfaceStyle: "automatic"` follows the system light/dark setting.

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| primary | #1F1F1F | #E5E5E5 | Buttons, active tab, accents |
| background | #FFFFFF | #0A0A0A | Page/screen background |
| card | #FFFFFF | #1A1A1A | Cards, surfaces |
| foreground | #171717 | #FAFAFA | Primary text |
| mutedForeground | #737373 | #A3A3A3 | Secondary text |
| border | #E5E5E5 | #262626 | Hairlines |
| destructive | #DC2626 | #EF4444 | Delete / errors |

## Typography

Name the display + body pairing here. Web: set font families in `styles.css` (self-hosted files go in `packages/web/public/fonts/`). Mobile: system font by default; load custom fonts with `useFonts` from `expo-font` and reference them via `Fonts` in `constants/theme.ts`.

## Pages & Screens

List each page/screen, its route file, and what it shows. Example:

- **Web — Home** (`packages/web/src/web/pages/index.tsx`) — what the user sees first.
- **Mobile — Home** (`packages/mobile/app/(tabs)/index.tsx`) — main tab.
- Add web pages under `src/web/pages/` (+ route in `app.tsx`); mobile tabs under `app/(tabs)/`, stack/modal screens under `app/`.

## Key User Flows

1. Describe the primary flow end to end (open → action → result).
2. ...

## Architecture

- **API**: typed oRPC client (`lib/api.ts` in each package) → the backend in `@template/web`. Query/mutation hooks live in `queries/` (one file per feature); pages/screens call them with `@tanstack/react-query`.
- **State/sync**: TanStack Query with optimistic updates for instant-feel interactions.
- **Auth / payments / uploads**: see `skills/app/references/` when those features are needed.
