# Plano de implementação — Repositório Institucional ESP/MA

## Escopo aprovado no briefing

Construir um catálogo/repositório institucional digital para a Escola de Saúde Pública do Maranhão (ESP/MA), com publicação estática compatível com GitHub Pages. A primeira versão prioriza organização acadêmica, busca local, metadados, acessibilidade, SEO, governança e manutenção simples por arquivos JSON. Não haverá backend, autenticação ou banco de dados nesta etapa.

A interface terá páginas de início, sobre o repositório, coleções, produções/documentos, detalhe de documento, autores, temas, cursos, panorama institucional e contato. Os registros de demonstração serão explicitamente rotulados como “Registro demonstrativo”; nenhum dado pessoal ou documento será apresentado como produção real sem fonte/autorização.

## Abordagem de implementação

- **Stack:** HTML5 semântico, CSS3 moderno e JavaScript ES modules, sem dependências externas obrigatórias. A escolha mantém o projeto sustentável no GitHub Pages e permite uso direto em hospedagem estática.
- **Dados:** JSON em `data/`, carregado no cliente com `fetch`. O módulo de dados normaliza autores, temas, cursos e indicadores a partir de `documentos.json`, evitando duplicação manual.
- **Navegação:** páginas HTML estáticas e URLs amigáveis. A página `documentos.html` usa query strings para busca e filtros; `documento.html?id=...` apresenta o registro selecionado. Assim, não há necessidade de roteador ou servidor.
- **Busca e filtros:** um módulo compartilhado aplica busca textual em título, autores, resumo, palavras-chave, tema, tipo, curso, área e coleção, com filtros combináveis e estado refletido na URL.
- **Visualizações:** gráficos simples, responsivos e acessíveis em SVG gerado por JavaScript, sem CDN ou biblioteca obrigatória. Cada gráfico terá título, descrição textual e tabela/resumo alternativo quando apropriado.
- **SEO:** HTML inicial com conteúdo significativo em cada página, títulos e descrições específicos, Open Graph/Twitter Card, Schema.org, `sitemap.xml`, `robots.txt` e canonical configurável. Como o domínio GitHub Pages final ainda não está definido, URLs absolutas de compartilhamento e canonical ficarão parametrizadas em `assets/js/site-config.js`, sem inventar domínio.
- **Acessibilidade:** landmarks semânticos, skip link, foco visível, `aria-live` para resultados, labels explícitos, navegação por teclado, contraste alto, estados vazios claros e suporte a `prefers-reduced-motion`.
- **Publicação:** `package.json` com comando local mínimo baseado em servidor estático; workflow GitHub Actions que publica a raiz do repositório no GitHub Pages. O projeto não exigirá build complexo para ser hospedado.

## Estrutura de projeto

```text
/
├── .github/workflows/deploy-pages.yml   # publicação automática no GitHub Pages
├── assets/
│   ├── css/styles.css                   # tokens, layout, componentes e responsividade
│   ├── js/site-config.js                # configuração pública e utilidades de URL
│   ├── js/data.js                       # carregamento, normalização e agregações
│   ├── js/components.js                 # cabeçalho, rodapé, cards e estados
│   ├── js/search.js                     # busca, filtros e renderização de resultados
│   ├── js/charts.js                     # gráficos SVG acessíveis
│   └── logos/README.md                  # reserva para logotipo oficial autorizado
├── data/
│   ├── documentos.json                  # catálogo editável
│   ├── autores.json                     # taxonomia/apoio editorial
│   ├── categorias.json                  # tipos e coleções
│   ├── cursos.json                      # cursos editáveis
│   └── temas.json                       # taxonomia temática editável
├── documentos/                          # PDFs autorizados, organizados por coleção/tipo
├── pages/                               # páginas secundárias
├── index.html
├── documentos.html
├── documento.html
├── colecoes.html
├── autores.html
├── autor.html
├── temas.html
├── cursos.html
├── panorama.html
├── sobre-repositorio.html
├── sobre-espma.html
├── contato.html
├── sitemap.xml
├── robots.txt
├── README.md
├── TODO.md
├── plan.md
└── package.json
```

## Direção visual

### Alternativas consideradas

1. **Saúde pública editorial** — 0,07: linguagem de biblioteca pública contemporânea, com azul profundo, verde clínico e blocos editoriais.
2. **Painel cívico de evidências** — 0,06: interface mais analítica, com dados em primeiro plano e navegação densa.
3. **Caderno de campo maranhense** — 0,04: identidade mais territorial, com terracota, texturas e referências cartográficas.

### Escolha: Saúde pública editorial

- **Movimento:** editorial institucional contemporâneo, combinando a clareza de um catálogo acadêmico com a serenidade visual de uma escola de saúde pública.
- **Princípios:** evidência antes de ornamento; hierarquia tipográfica clara; acolhimento sem informalidade; cada interação deve revelar o acervo e não competir com ele.
- **Filosofia de cor:** azul petróleo para confiança e continuidade institucional; verde folha para saúde e ação; areia clara para aproximar a interface do território maranhense sem simular uma paleta oficial; amarelo âmbar apenas como acento de descoberta e foco.
- **Paradigma de layout:** composição assimétrica com uma coluna editorial principal e uma “margem de evidências” para indicadores, metadados e filtros. O conteúdo não ficará preso a um grid central uniforme; cards e seções terão ritmos diferentes, mantendo alinhamentos consistentes.
- **Elementos de assinatura:** marcador vertical de coleção; linhas finas inspiradas em fichas de catalogação; pequenos pontos/selos para tipo de documento, acesso e demonstração.
- **Interação:** busca e filtros funcionam como instrumentos de consulta: feedback imediato, contagens transparentes, estado vazio instrutivo e URL compartilhável. Nada dependerá apenas de cor ou animação.
- **Animação:** entrada suave e curta apenas em cabeçalhos e resultados; respeito a `prefers-reduced-motion`; sem carrossel automático ou efeitos que prejudiquem leitura.
- **Tipografia:** `Source Sans 3` para leitura e interface, com fallback do sistema; `DM Sans` para títulos e números, criando contraste contemporâneo sem aparência comercial. Escala com títulos compactos em mobile e largura de leitura controlada.
- **Essência:** um ponto confiável para localizar, compreender e preservar a produção de formação e saúde pública da ESP/MA. Personalidade: rigorosa, acolhedora, pública.
- **Voz:** títulos diretos e institucionais; CTAs orientados à consulta. Exemplos: “Explore o conhecimento produzido no SUS do Maranhão.” e “Encontre registros por tema, autoria ou tipo de documento.”
- **Marca/logotipo:** não será inventado logotipo oficial. O cabeçalho terá uma área de reserva claramente identificada para receber a marca autorizada, acompanhada do nome institucional em tipografia própria da interface.
- **Cor proprietária da interface:** azul petróleo `#0C5961`, usado como eixo visual do repositório sem se declarar cor oficial da ESP/MA.

## Fluxo completo de construção e publicação

1. Criar `TODO.md` com os requisitos de resultado e critérios de aceitação do briefing após a aprovação deste plano.
2. Implementar a base estática, dados demonstrativos, componentes compartilhados, páginas, busca, filtros, detalhe de documento e panorama.
3. Configurar diagnósticos para HTML/CSS/JavaScript/JSON e corrigir problemas acionáveis.
4. Iniciar o servidor em `0.0.0.0:3000`, verificar as rotas e a carga dos dados por HTTP, e revisar a interface no Preview quando necessário.
5. Configurar a declaração de build estático (`command: true`, saída na raiz) e preparar o workflow de GitHub Pages no repositório.
6. Fazer a validação final por inspeção de código, checks automáticos, links internos, JSON, SEO, manifest de rotas, responsividade e fluxos de busca/detalhe.
7. Commitar no repositório canônico do projeto. A publicação pública no GitHub Pages dependerá da conexão/repositório GitHub escolhido pelo responsável; esta implementação não inventará um repositório ou domínio.

## Limites e decisões de transparência

- O logotipo oficial, PDFs reais e dados institucionais não disponíveis não serão fabricados.
- O conteúdo demonstrativo serve apenas para provar a interface e será sinalizado em todos os pontos relevantes.
- Canonicals e links de download ficam prontos para receber URLs reais quando o repositório e o domínio final forem definidos.
- A arquitetura deixa pontos claros para futura migração a CMS, DSpace, InvenioRDM, Dataverse, API, OAI-PMH, DOI, ORCID e identificadores persistentes, mas não simula essas integrações na versão estática.
