const T = {
  it: {
    nav_about:        'About',
    nav_projects:     'Progetti',
    nav_publications: 'Pubblicazioni',
    home_title: 'Ricercatrice in sociologia e antropologia',
    home_sub:   'Università di Anversa',
    home_p1: 'Sono Elena Ferrante. Conduco ricerca all\'Università di Anversa, dove il mio lavoro si situa all\'intersezione tra sociologia e antropologia.',
    home_p2: 'La mia formazione accademica include un master of research ad Amsterdam, una laurea magistrale in sociologia all\'Università di Milano Bicocca e una triennale in pedagogia all\'Università di Genova.',
    home_p3: 'Queste pagine raccolgono il mio curriculum vitae, una selezione di progetti — anche di natura quantitativa —, le pubblicazioni e le collaborazioni in corso.',
    recent_pubs: 'Pubblicazioni recenti',
    read: '→ leggi',
  },
  en: {
    nav_about:        'About',
    nav_projects:     'Projects',
    nav_publications: 'Publications',
    home_title: 'Researcher in sociology and anthropology',
    home_sub:   'University of Antwerp',
    home_p1: 'I\'m Elena Ferrante. I conduct research at the University of Antwerp, where my work sits at the intersection of sociology and anthropology.',
    home_p2: 'My academic training includes a research master\'s from Amsterdam, a master\'s in sociology from the University of Milan Bicocca, and a bachelor\'s in pedagogy from the University of Genova.',
    home_p3: 'These pages bring together my curriculum vitae, a selection of projects — including quantitative work —, my publications and ongoing collaborations.',
    recent_pubs: 'Recent publications',
    read: '→ read',
  },
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang] && T[lang][key] !== undefined) {
      el.innerHTML = T[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  const saved = localStorage.getItem('lang') || 'it';
  applyLang(saved);
});
