# TODO — Repositório Institucional ESP/MA

## Catálogo estático e arquitetura

- [x] Entregar um site estático compatível com GitHub Pages, sem depender de backend obrigatório ou banco externo.
- [x] Manter arquitetura profissional e expansível com `assets/`, `data/`, `documentos/`, páginas HTML, README e workflow de publicação.
- [x] Permitir que novos registros sejam adicionados editando `data/documentos.json` e colocando o PDF na pasta apropriada.

## Homepage institucional

- [x] Apresentar área reservada para a logomarca oficial, identificação institucional, menu principal, busca, coleções e acesso rápido.
- [x] Usar o título “Repositório Institucional da Escola de Saúde Pública do Maranhão” e o subtítulo “Conhecimento, pesquisa e educação permanente para o fortalecimento do SUS no Maranhão.”
- [x] Exibir indicadores dinâmicos de publicações, autores, coleções, cursos e documentos a partir dos dados.

## Coleções, busca e documentos

- [x] Implementar as dez coleções solicitadas, com título, descrição, quantidade dinâmica, ícone e ação “Explorar coleção”.
- [x] Implementar busca client-side por título, autor, resumo, palavras-chave, ano, tipo, curso, tema, área e coleção.
- [x] Permitir filtros combináveis e mostrar resultados em cards.
- [x] Criar página própria de documento com autores, ano, tipo, coleção, curso, instituição, resumo, palavras-chave, área, data, identificador, PDF, citação, DOI e licença quando disponíveis.
- [x] Exibir “Acessar documento” e “Baixar PDF” apenas quando houver arquivo/link no registro.

## Metadados e páginas de apoio

- [x] Adotar campos inspirados em Dublin Core, OpenAIRE, ORCID e DOI, mantendo taxonomias editáveis nos arquivos de dados.
- [x] Criar páginas de autores, temas e cursos, usando somente informações dos registros e sem inventar dados pessoais.
- [x] Criar a página “Panorama do Repositório” com produção por ano, tipo, área, curso, autores e evolução institucional.
- [x] Incluir seção “Governança do Repositório” com políticas futuras de depósito, preservação, acesso, direitos, submissão, revisão, metadados e responsabilidades.

## Design, acessibilidade e SEO

- [x] Aplicar estética contemporânea de instituição pública de ensino e pesquisa, com fundo claro, contraste adequado, tipografia legível, espaços em branco, cards discretos e referências visuais a saúde, educação, ciência e Maranhão.
- [x] Funcionar em computador, notebook, tablet e smartphone com abordagem mobile-first.
- [x] Implementar contraste, teclado, textos alternativos, hierarquia de títulos, foco visível, botões acessíveis, labels, fonte adequada e compatibilidade com leitores de tela, considerando WCAG 2.2.
- [x] Implementar title, meta description, Open Graph, Twitter Card, URLs amigáveis, sitemap, robots e Schema.org.

## Dados, privacidade e governança

- [x] Não publicar documentos fictícios como reais; registros de demonstração devem ser claramente identificados.
- [x] Não incluir CPF, telefone pessoal, endereço residencial, dados sensíveis ou documentos sem autorização.
- [x] Documentar LGPD, autorização institucional para publicação e a evolução futura para CMS, banco, DSpace, InvenioRDM, Dataverse, API, OAI-PMH, DOI, ORCID, Lattes, métricas e preservação digital.

## GitHub Pages e manutenção

- [x] Criar README com objetivo, descrição, tecnologias, arquitetura, instalação, adição de documentos, atualização de metadados, publicação no GitHub Pages, contribuição, licença e informações institucionais.
- [x] Criar workflow GitHub Actions para publicação automática no GitHub Pages.
- [x] Verificar links internos, responsividade, busca, filtros, carregamento JSON, abertura de registros, acessibilidade, SEO, GitHub Pages e ausência de dependências de backend.


> **Estado de entrega:** a implementação e as verificações locais foram concluídas. A publicação pública depende da criação/conexão do repositório GitHub da instituição e da substituição dos placeholders de domínio em `sitemap.xml` e `robots.txt`.
