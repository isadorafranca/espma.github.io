const paths = { docs: 'data/documentos.json', cats: 'data/categorias.json', themes: 'data/temas.json', courses: 'data/cursos.json' };
let cache;
export async function getData() {
  if (cache) return cache;
  const [docs, cats, themes, courses] = await Promise.all(Object.values(paths).map(path => fetch(path).then(r => { if (!r.ok) throw new Error(`Falha ao carregar ${path}`); return r.json(); })));
  const autores = [...new Set(docs.flatMap(d => d.autores || []))].sort((a,b) => a.localeCompare(b, 'pt-BR'));
  const anos = [...new Set(docs.map(d => d.ano).filter(Boolean))].sort((a,b) => b-a);
  cache = { docs, cats, themes, courses, autores, anos };
  return cache;
}
export function countBy(docs, key) {
  return docs.reduce((acc, doc) => { const values = Array.isArray(doc[key]) ? doc[key] : [doc[key] || 'Não informado']; values.forEach(v => acc[v] = (acc[v] || 0) + 1); return acc; }, {});
}
export function countAuthors(docs) { return countBy(docs, 'autores'); }
export function formatDate(value) { if (!value) return 'Não informado'; return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(`${value}T12:00:00`)); }
export function normalize(value) { return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
