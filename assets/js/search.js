import { getData, normalize } from './data.js';
import { documentCard, emptyState } from './components.js';
import { esc } from './site-config.js';

function matches(doc, query, filters) {
  const haystack = normalize([doc.titulo, doc.resumo, doc.area, doc.colecao, doc.curso, doc.tipo, ...(doc.autores||[]), ...(doc.temas||[]), ...(doc.palavras_chave||[])].join(' '));
  return (!query || haystack.includes(normalize(query))) && (!filters.tipo || doc.tipo === filters.tipo) && (!filters.ano || String(doc.ano) === filters.ano) && (!filters.tema || (doc.temas||[]).includes(filters.tema)) && (!filters.curso || doc.curso === filters.curso) && (!filters.autor || (doc.autores||[]).includes(filters.autor)) && (!filters.colecao || doc.colecao === filters.colecao);
}
function setOptions(select, values, selected) { select.innerHTML += values.map(v => `<option value="${esc(v)}" ${selected === String(v) ? 'selected' : ''}>${esc(v)}</option>`).join(''); }
export async function mountSearch() {
  const {docs, cats, themes, courses, autores, anos} = await getData();
  const params = new URLSearchParams(location.search);
  const query = params.get('q') || '';
  const filters = {tipo: params.get('tipo')||'', ano: params.get('ano')||'', tema: params.get('tema')||'', curso: params.get('curso')||'', autor: params.get('autor')||'', colecao: params.get('colecao')||''};
  const form = document.querySelector('#search-form'); if (!form) return;
  form.querySelector('[name="q"]').value = query;
  setOptions(form.querySelector('[name="tipo"]'), cats.tipos, filters.tipo); setOptions(form.querySelector('[name="ano"]'), anos, filters.ano); setOptions(form.querySelector('[name="tema"]'), themes, filters.tema); setOptions(form.querySelector('[name="curso"]'), courses, filters.curso); setOptions(form.querySelector('[name="autor"]'), autores, filters.autor); setOptions(form.querySelector('[name="colecao"]'), cats.colecoes.map(c=>c.nome), filters.colecao);
  const render = () => { const found = docs.filter(d => matches(d, form.querySelector('[name="q"]').value.trim(), Object.fromEntries(new FormData(form).entries()))); document.querySelector('#result-count').textContent = `${found.length} ${found.length === 1 ? 'registro encontrado' : 'registros encontrados'}`; document.querySelector('#results').innerHTML = found.length ? found.map(documentCard).join('') : emptyState(); };
  form.addEventListener('input', render); form.addEventListener('change', render); form.addEventListener('submit', e => { e.preventDefault(); const q = new URLSearchParams(new FormData(form)); history.replaceState({},'',`documentos.html?${q}`); render(); });
  document.querySelector('#clear-filters')?.addEventListener('click', () => { form.reset(); history.replaceState({},'', 'documentos.html'); render(); });
  render();
}
