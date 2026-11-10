# Repositório Institucional ESP/MA

Site estático para organização, preservação e disseminação da produção técnico-científica, educacional e institucional da Escola de Saúde Pública do Maranhão. O projeto foi desenhado para funcionar como catálogo inicial no GitHub Pages e evoluir, no futuro, para uma plataforma interoperável.

## Objetivos

O repositório organiza artigos científicos, trabalhos acadêmicos, relatórios técnicos, projetos, materiais didáticos, livros, manuais, protocolos, documentos institucionais, produções de cursos e eventos relacionados à saúde pública e ao SUS no Maranhão. A versão atual é um catálogo client-side. Não há backend, autenticação ou banco externo.

Os registros incluídos na demonstração estão marcados como **Registro demonstrativo**. Antes de publicar dados reais, a equipe responsável deve validar autorização institucional, direitos autorais, dados pessoais e licença de cada arquivo.

## Identidade visual

A interface utiliza a logomarca institucional fornecida pela Escola de Saúde Pública do Maranhão, armazenada em `assets/logos/logo-espma.png`. A marca é apresentada no cabeçalho e no rodapé sem alterações de proporção.

## Tecnologias

A interface usa HTML5 semântico, CSS3, JavaScript ES modules e JSON. Não há dependência obrigatória de framework, CDN ou banco de dados. Os gráficos são SVG acessível gerado no navegador. O workflow `.github/workflows/deploy-pages.yml` publica os arquivos diretamente no GitHub Pages.

## Estrutura

- `index.html`: página inicial e indicadores.
- `documentos.html`: busca e filtros combináveis.
- `documento.html`: detalhe com metadados e acesso ao arquivo.
- `colecoes.html`, `temas.html`, `autores.html`, `autor.html`, `cursos.html`: navegação por taxonomias.
- `panorama.html`: visualizações do catálogo.
- `sobre-repositorio.html`, `sobre-espma.html`, `contato.html`: contexto, governança e contato.
- `data/`: fonte editável dos dados.
- `assets/css/`: estilos responsivos e acessíveis.
- `assets/js/`: dados, componentes, busca, gráficos e configuração pública.
- `documentos/`: PDFs autorizados, organizados por tipo ou coleção.

## Execução local

Com Python 3 instalado:

```bash
python3 -m http.server 3000 --bind 0.0.0.0
```

Abra `http://localhost:3000`. O uso de servidor local é necessário porque os módulos JavaScript carregam arquivos JSON via `fetch`.

Também é possível usar o script definido no `package.json`:

```bash
npm run dev
```

## Como adicionar um documento

1. Confirme autorização institucional para a disponibilização pública e revise direitos autorais e dados pessoais.
2. Coloque o PDF em uma pasta coerente dentro de `documentos/`, por exemplo `documentos/artigos/` ou `documentos/relatorios/`.
3. Abra `data/documentos.json` e adicione um objeto com `id`, `titulo`, `autores`, `ano`, `tipo`, `colecao`, `curso`, `temas`, `area`, `resumo`, `palavras_chave`, `arquivo`, `doi`, `orcid`, `licenca`, `data_publicacao`, `identificador`, `instituicao`, `idioma` e `direitos`.
4. Use caminho relativo no campo `arquivo`, como `documentos/artigos/meu-arquivo.pdf`.
5. Atualize `data/cursos.json` ou `data/temas.json` somente quando a taxonomia precisar de uma nova opção. Os filtros são derivados automaticamente dos dados.
6. Remova a identificação de demonstração somente quando o registro real estiver validado e autorizado.
7. Execute `npm run check` e revise a página do documento, filtros e links.

## Atualização de metadados

Os campos foram inspirados em Dublin Core e OpenAIRE e reservam espaço para ORCID, DOI e identificadores persistentes. Não invente ORCID, DOI, autores ou cursos. Quando um valor não existir, deixe vazio ou use `Não informado` na apresentação. As taxonomias de `categorias.json`, `cursos.json` e `temas.json` podem ser editadas sem alteração do código principal.

## GitHub Pages

1. Crie um repositório GitHub para o projeto e envie os arquivos para a branch principal.
2. Em **Settings → Pages**, selecione **GitHub Actions** como fonte de publicação.
3. O workflow deste projeto usa `actions/configure-pages`, `actions/upload-pages-artifact` e `actions/deploy-pages` para publicar a raiz do repositório.
4. Atualize `assets/js/site-config.js` com o domínio público final se quiser preencher canonical, Open Graph e sitemap com URLs absolutas. Não use URLs internas de Preview.
5. Se o projeto estiver em subpath, valide os links relativos e o domínio final antes de publicar.

## Governança, LGPD e evolução

A publicação pública deve seguir uma política de depósito, preservação digital, acesso, direitos autorais, critérios de submissão, revisão, padrões de metadados e responsabilidades institucionais. Não inclua CPF, telefone pessoal, endereço residencial, dados sensíveis ou documentos sem autorização.

A estrutura foi preparada para futura migração a CMS, banco de dados, DSpace, InvenioRDM, Dataverse ou API institucional. Também permite incorporar OAI-PMH, Dublin Core completo, DOI, ORCID, Lattes, métricas, estatísticas de acesso, preservação digital e identificadores persistentes.

## Contribuição e licença

Alterações devem preservar a acessibilidade, a identificação de registros demonstrativos e a integridade dos metadados. Recomenda-se revisar o conteúdo com a equipe institucional antes de cada publicação. O código pode receber uma licença permissiva definida pela ESP/MA; os documentos e seus metadados permanecem sujeitos às licenças e autorizações próprias de cada item.

## Fonte institucional

Para contexto institucional, cursos e informações oficiais, consulte [escola.saude.ma.gov.br](https://escola.saude.ma.gov.br/). O repositório não substitui o site oficial da Escola.
