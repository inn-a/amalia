const T = {
  it: {
    nav_about:        'About',
    nav_projects:     'Progetti',
    nav_publications: 'Pubblicazioni',
    home_title: 'Ricercatrice in sociologia e antropologia',
    home_sub:   'Università di Anversa',
    home_p1: 'Sono Amalia. Conduco ricerca all\'Università di Anversa, dove il mio lavoro si situa all\'intersezione tra sociologia e antropologia.',
    home_p2: 'La mia formazione accademica include un master of research ad Amsterdam, una laurea magistrale in sociologia all\'Università di Milano Bicocca e una triennale in pedagogia all\'Università di Genova.',
    home_p3: 'Queste pagine raccolgono il mio curriculum vitae, una selezione di progetti (anche di natura quantitativa), le pubblicazioni e le collaborazioni in corso.',
    recent_pubs: 'Pubblicazioni recenti',
    read: '→ leggi',
    map_caption: 'Clicca per vedere maggiori dettagli',
    map_title: 'Mappatura Geografica degli Spostamenti - Python &amp; Natural Earth',
    map_p1: 'Questa mappa è stata realizzata come parte integrante di una pubblicazione di ricerca, contribuendo alla documentazione visiva dello sfollamento forzato e dei campi profughi nel Corno d\'Africa e oltre.',
    map_p2: '<strong>Metodologia:</strong> I luoghi menzionati nel documento sono stati convertiti in coordinate geografiche tramite Google Maps. Le coordinate sono state raccolte in un file Excel per garantire trasparenza e riproducibilità. La mappa è stata costruita in Python utilizzando la proiezione di Mercatore e i dati geografici open source di Natural Earth, che rappresenta i confini secondo lo status de facto piuttosto che de jure. La visualizzazione include sia una mappa mondiale che uno zoom specifico sul Corno d\'Africa. La struttura modulare del codice consente aggiornamenti rapidi: aggiungere nuovi luoghi, modificare colori o cambiare la tipologia di mappa richiede un intervento minimo.',
    geo_caption: 'Clicca per vedere meglio l\'animazione grafica realizzata in R',
    geo_title: 'Migranti dispersi e morti nel mondo',
    geo_sub: 'Data Visualisation and Analytics in R — Vrije Universiteit Amsterdam, Master in Antropologia sociale e culturale',
    geo_p1: 'Questo progetto analizza dati globali sui migranti morti o dispersi a causa dei regimi di frontiera, con l\'obiettivo di identificare le aree geografiche e le rotte migratorie più critiche.',
    geo_p2: '<strong>Fonte dei dati:</strong> Il dataset è stato prodotto dall\'<strong>IOM</strong> (Organizzazione Internazionale per le Migrazioni) e copre il periodo <strong>2014–2024</strong>, includendo casi come le morti nel <strong>Mar Mediterraneo</strong> e le sparizioni lungo il confine tra gli <strong>Stati Uniti e il Messico</strong>. I dati sono stati scaricati direttamente dal portale open data dell\'IOM.',
    geo_p3: '<strong>Metodologia:</strong> L\'analisi è stata condotta in <strong>R</strong>. La fase di pulizia dei dati ha previsto la separazione di un\'unica variabile contenente le coordinate geografiche in due variabili numeriche distinte per <strong>longitudine</strong> e <strong>latitudine</strong>, e la rimozione delle osservazioni incomplete. Sono stati successivamente costruiti database individuali per ciascuna area geografica, consentendo un filtraggio per anno e regione. I risultati sono stati presentati attraverso <strong>visualizzazioni interattive</strong> che mappano la distribuzione di morti e dispersi a livello mondiale.',
    tw_card_title: 'Il papa su Twitter: tra cyberteologia e secolarizzazione',
    tw_card_desc: 'Analisi di 3.200 tweet da <strong>@pontifex_it</strong> per studiare il rapporto tra comunicazione religiosa online, <strong>cyberteologia</strong> e secolarizzazione.',
    tw_title: 'Il papa su Twitter: tra cyberteologia e secolarizzazione',
    tw_sub: 'Corso di Globalizzazione e culture politiche · Università degli Studi Milano-Bicocca · LM Analisi dei Processi Sociali · 2021/2022',
    tw_p1: 'Questo progetto analizza la comunicazione religiosa online attraverso lo studio del profilo <strong>Twitter</strong> ufficiale del Papa (<strong>@pontifex_it</strong>), esplorando il rapporto tra <strong>cyberteologia</strong> e secolarizzazione.',
    tw_p2: '<strong>Metodologia:</strong> Tramite il software statistico <strong>Stata</strong> e il comando <strong>twitter2stata</strong>, sono stati estratti <strong>3.200 tweet</strong> dall\'account <strong>@pontifex_it</strong>, sfruttando le <strong>API</strong> di Twitter a livello <strong>Elevated</strong>. Dal corpus totale sono stati selezionati i tweet con il maggior e il minor numero di <strong>like</strong> e <strong>retweet</strong>, combinando un\'analisi quantitativa con un approfondimento qualitativo dei contenuti più rilevanti.',
    tw_p3: 'L\'analisi ha indagato quali temi religiosi ottengono maggiore consenso online e in che misura la logica della rete influenzi e condizioni la comunicazione dei contenuti religiosi, con particolare attenzione all\'assenza di temi sensibili come l\'<strong>aborto</strong> e l\'<strong>eutanasia</strong> nei contenuti digitali.',
  },
  en: {
    nav_about:        'About',
    nav_projects:     'Projects',
    nav_publications: 'Publications',
    home_title: 'Researcher in sociology and anthropology',
    home_sub:   'University of Antwerp',
    home_p1: 'I\'m Amalia. I conduct research at the University of Antwerp, where my work sits at the intersection of sociology and anthropology.',
    home_p2: 'My academic training includes a research master\'s from Amsterdam, a master\'s in sociology from the University of Milan Bicocca, and a bachelor\'s in pedagogy from the University of Genova.',
    home_p3: 'These pages bring together my curriculum vitae, a selection of projects (including quantitative work), my publications and ongoing collaborations.',
    recent_pubs: 'Recent publications',
    read: '→ read',
    map_caption: 'Click to view more details',
    map_title: 'Geographic Mapping of Displacement - Python &amp; Natural Earth',
    map_p1: 'This map was developed as an integral part of a research publication, contributing to the visual documentation of forced displacement and refugee camps in the Horn of Africa and beyond.',
    map_p2: '<strong>Methodology:</strong> Locations mentioned in the source document were converted into geographic coordinates using Google Maps. The coordinates were compiled in an Excel file to ensure transparency and reproducibility. The map was built in Python using the Mercator projection and open-source geographic boundary data from Natural Earth, which represents borders according to de facto rather than de jure status. The visualisation includes both a world map and a zoomed view focused on the Horn of Africa. The modular structure of the code allows for rapid updates: adding new locations, adjusting colours, or switching the base map style requires minimal effort.',
    geo_caption: 'Click to view the R animation up close',
    geo_title: 'Missing and dead migrants around the globe',
    geo_sub: 'Data Visualisation and Analytics in R course — Vrije Universiteit Amsterdam, Master\'s Degree in Social and Cultural Anthropology',
    geo_p1: 'This project analyses global data on migrants who have died or gone missing as a result of border regimes, with a focus on identifying the most critical geographical areas and migration routes.',
    geo_p2: '<strong>Data Source:</strong> The dataset was produced by the <strong>IOM</strong> (International Organisation for Migration) and covers the period <strong>2014–2024</strong>, including cases such as deaths in the <strong>Mediterranean Sea</strong> and disappearances along the <strong>US-Mexico border</strong>. Data was retrieved directly from the IOM open data portal.',
    geo_p3: '<strong>Methodology:</strong> The analysis was carried out in <strong>R</strong>. The data cleaning phase involved splitting a single coordinate variable into two separate numeric variables for <strong>longitude</strong> and <strong>latitude</strong>, and removing incomplete observations. Individual databases were then built for each geographical area to allow for more granular filtering by year and region. The results were presented through <strong>interactive visualisations</strong> that mapped the distribution of deaths and disappearances worldwide.',
    tw_card_title: 'The pope on Twitter: between cybertheology and secularisation',
    tw_card_desc: 'Analysis of 3,200 tweets from <strong>@pontifex_it</strong> to study the relationship between online religious communication, <strong>cybertheology</strong> and secularisation.',
    tw_title: 'The pope on Twitter: between cybertheology and secularisation',
    tw_sub: 'Globalisation and Political Cultures · Università degli Studi Milano-Bicocca · MA Social Process Analysis · 2021/2022',
    tw_p1: 'This project analyses religious communication online through the study of the Pope\'s official <strong>Twitter</strong> profile (<strong>@pontifex_it</strong>), exploring the relationship between <strong>cybertheology</strong> and secularisation.',
    tw_p2: '<strong>Methodology:</strong> Using the statistical software <strong>Stata</strong> and the <strong>twitter2stata</strong> command, <strong>3,200 tweets</strong> were extracted from the <strong>@pontifex_it</strong> account via the Twitter <strong>Elevated API</strong>. From the total corpus, the tweets with the highest and lowest number of <strong>likes</strong> and <strong>retweets</strong> were selected, combining a quantitative analysis with a qualitative examination of the most relevant content.',
    tw_p3: 'The analysis investigated which religious themes gain the most traction online and to what extent the logic of the network shapes and conditions the communication of religious content, with particular attention to the absence of sensitive topics such as <strong>abortion</strong> and <strong>euthanasia</strong> from digital content.',
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
