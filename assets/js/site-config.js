export const SITE = {
  name: 'Repositório Institucional ESP/MA',
  institution: 'Escola de Saúde Pública do Maranhão',
  shortInstitution: 'ESP/MA',
  description: 'Conhecimento, pesquisa e educação permanente para o fortalecimento do SUS no Maranhão.',
  origin: '',
  email: 'repositorio@saude.ma.gov.br'
};

export function esc(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

export function setMeta({title, description = SITE.description, type = 'website'} = {}) {
  document.title = title ? `${title} | ${SITE.shortInstitution}` : SITE.name;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = description;
  const set = (sel, value) => { const el = document.querySelector(sel); if (el && value) el.setAttribute('content', value); };
  set('meta[property="og:title"]', document.title); set('meta[property="og:description"]', description); set('meta[property="og:type"]', type);
  if (SITE.origin) {
    const canonical = `${SITE.origin.replace(/\/$/, '')}${location.pathname}${location.search}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = canonical;
  }
}

export function year() { return new Date().getFullYear(); }
