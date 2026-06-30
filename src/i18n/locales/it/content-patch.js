/** Italian content patch — merged onto en/content.js */
export const patch = {
  LIFE_PATH_MEANINGS: {
    1:  { label: 'Leader · Pioniere',              desc: 'Un\'anima di indipendenza e spirito pionieristico. Qui per tracciare nuovi sentieri.' },
    2:  { label: 'Armonizzatore · Collaboratore',     desc: 'Collega le persone con delicata sensibilità. Una persona di accoglienza e intuizione.' },
    3:  { label: 'Espressore · Artista',            desc: 'Diffonde creatività e gioia nel mondo. Un maestro di parole e colore.' },
    4:  { label: 'Costruttore · Artigiano',           desc: 'Un\'anima che pone fondamenta con costanza. Plasma la forma con ordine e pazienza.' },
    5:  { label: 'Spirito libero · Avventuriero',        desc: 'Si nutre di cambiamento ed esperienza. Non ama i vincoli, come il vento.' },
    6:  { label: 'Amante · Mediatore',              desc: 'Profondo affetto per famiglia e comunità. Porta bellezza e responsabilità.' },
    7:  { label: 'Cercatore · Mistico',               desc: 'Un\'anima che si immerge in profondità. Un osservatore silenzioso in cerca di verità.' },
    8:  { label: 'Realizzatore · Dirigente',          desc: 'Potere su regni materiali e spirituali. Dà forma all\'abbondanza.' },
    9:  { label: 'Umanitario · Completatore',      desc: 'Un\'anima che ama ampiamente e sa lasciare andare. Il completamento di un viaggio.' },
    11: { label: 'Maestro 11 — Illuminatore',       desc: 'Un\'anima che porta luce attraverso un\'intuizione accentuata. Vive tra tensione e spiritualità.' },
    22: { label: 'Maestro 22 — Creatore',           desc: 'Il potere di trasformare i sogni in strutture nel mondo. Il più pratico dei mistici.' },
    33: { label: 'Maestro 33 — Maestro dell\'amore',   desc: 'Un\'anima rara che può incarnare l\'amore incondizionato.' }
  },
  PERSONAL_YEAR_MEANINGS: {
    1: 'Un anno per seminare. L\'inizio di un nuovo ciclo.',
    2: 'Un anno per nutrire. Cooperazione e pazienza sono essenziali.',
    3: 'Un anno di espressione. Goditi la gioia e i legami sociali.',
    4: 'Un anno di costruzione. Rafforza le fondamenta passo dopo passo.',
    5: 'Un anno di cambiamento. Si cercano movimento e libertà.',
    6: 'Un anno di responsabilità. Famiglia e amore al centro.',
    7: 'Un anno di introspezione. Un tempo di quiete e apprendimento.',
    8: 'Un anno di raccolto. Il successo materiale prende forma.',
    9: 'Un anno di completamento. Una stagione di lasciar andare e riflessione.'
  },
  EXPRESSION_MEANINGS: {
    1: 'Energia del nome: individualità e spirito pionieristico.',
    2: 'Energia del nome: cooperazione e vibrazione mediatrice.',
    3: 'Energia del nome: espressione e gioia.',
    4: 'Energia del nome: costanza e pazienza.',
    5: 'Energia del nome: cambiamento e avventura.',
    6: 'Energia del nome: amore e responsabilità.',
    7: 'Energia del nome: mistero e introspezione.',
    8: 'Energia del nome: potere e manifestazione.',
    9: 'Energia del nome: amore ampio e completamento.'
  },
  SUN_SIGNS: [
    { name: 'Capricorno',  element: 'Terra', desc: 'Fermo, responsabile, spinto a realizzare.' },
    { name: 'Acquario',   element: 'Aria',   desc: 'Innovazione, indipendenza, amore per l\'umanità.' },
    { name: 'Pesci',     element: 'Acqua', desc: 'Sensibilità, sogni, un oceano di empatia.' },
    { name: 'Ariete',      element: 'Fuoco',  desc: 'Azione, spirito pionieristico, passione pura.' },
    { name: 'Toro',     element: 'Terra', desc: 'Stabilità, sensualità, piacere dei sensi.' },
    { name: 'Gemelli',     element: 'Aria',   desc: 'Curiosità, intelletto, comunicazione.' },
    { name: 'Cancro',     element: 'Acqua', desc: 'Emozione, casa, amore protettivo.' },
    { name: 'Leone',        element: 'Fuoco',  desc: 'Espressione di sé, creatività, presenza regale.' },
    { name: 'Vergine',      element: 'Terra', desc: 'Analisi, servizio, amore per il raffinamento.' },
    { name: 'Bilancia',      element: 'Aria',   desc: 'Armonia, senso estetico, relazioni.' },
    { name: 'Scorpione',    element: 'Acqua', desc: 'Profondità, trasformazione, passione assoluta.' },
    { name: 'Sagittario', element: 'Fuoco',  desc: 'Esplorazione, libertà, visione filosofica.' }
  ],
  MOON_TRAITS: [
    { name: 'Nato/a sotto la Luna Nuova',        desc: 'Un\'anima nata con qualcosa di germogliante dentro. Intuitiva e istintiva.' },
    { name: 'Nato/a sotto il Primo Quarto',   desc: 'Un\'anima nata in un\'onda di sfida e azione. Forte spinta ad avanzare.' },
    { name: 'Nato/a sotto la Luna Piena',       desc: 'Un\'anima dove emozione e coscienza si tirano l\'una verso l\'altra. Espressiva e magnetica.' },
    { name: 'Nato/a sotto l\'Ultimo Quarto',    desc: 'Un\'anima nata in un\'onda di lasciar andare e riflessione. Porta profondità e saggezza.' }
  ],
  CHINESE_ZODIAC: [
    { name: 'Zi (Topo)',       char: 'Topo',     desc: 'Veloce e astuto. Raramente perde un\'occasione.' },
    { name: 'Chou (Bue)',      char: 'Bue',      desc: 'Paziente e costante. Avanza un passo sicuro alla volta.' },
    { name: 'Yin (Tigre)',    char: 'Tigre',   desc: 'Coraggioso e appassionato. Si muove come il vento.' },
    { name: 'Mao (Coniglio)',   char: 'Coniglio',  desc: 'Grazioso e delicato. Onora l\'armonia.' },
    { name: 'Chen (Drago)',  char: 'Drago',  desc: 'Idealismo e nobiltà. Un\'anima di grande portata.' },
    { name: 'Si (Serpente)',     char: 'Serpente',   desc: 'Intuizione e mistero. Vede in profondità e in silenzio.' },
    { name: 'Wu (Cavallo)',     char: 'Cavallo',   desc: 'Libertà e rapidità. Lascia correre la passione.' },
    { name: 'Wei (Capra)',     char: 'Capra',    desc: 'Dolcezza e senso artistico. Un empatico caloroso.' },
    { name: 'Shen (Scimmia)',  char: 'Scimmia',  desc: 'Intelletto e arguzia. Maestro della curiosità.' },
    { name: 'You (Gallo)',  char: 'Gallo', desc: 'Orgoglioso e meticoloso. Una presenza con voce.' },
    { name: 'Xu (Cane)',       char: 'Cane',     desc: 'Lealtà e giustizia. Guardiano della fiducia.' },
    { name: 'Hai (Maiale)',     char: 'Maiale',    desc: 'Franco e coraggioso. Carica dritto avanti.' }
  ],
  KYUSEI_STARS: [
    null,
    { name: 'Stella Uno Bianca Acqua',   element: 'Acqua', desc: 'Flessibile e introspettivo. Segue il flusso e si radica in profondità.' },
    { name: 'Stella Due Nera Terra',   element: 'Terra', desc: 'Devozione e diligenza. Nutre come la terra stessa.' },
    { name: 'Stella Tre Verde Legno',  element: 'Legno',  desc: 'Il vigore dei germogli nuovi. Una stella di azione e apertura.' },
    { name: 'Stella Quattro Verde Legno',   element: 'Legno',  desc: 'Gentile come il vento. Porta connessioni e relazioni.' },
    { name: 'Stella Cinque Gialla Terra', element: 'Terra', desc: 'La stella centrale. Attira le persone con forte magnetismo.' },
    { name: 'Stella Sei Bianca Metallo',   element: 'Metallo', desc: 'Cielo e autorità. Orgogliosa, aspirando alla perfezione.' },
    { name: 'Stella Sette Rossa Metallo',   element: 'Metallo', desc: 'Gioia e socievolezza. Illumina ogni incontro.' },
    { name: 'Stella Otto Bianca Terra', element: 'Terra', desc: 'La stella della montagna. Cambiamento, eredità, volontà incrollabile.' },
    { name: 'Stella Nove Viola Fuoco',  element: 'Fuoco',  desc: 'Luce e senso estetico. Irradia brillantezza intuitivamente.' }
  ],
  GOGYOU_DESCS: {
    '木': 'Il potere di crescere. Volto al futuro, come un mattino di verde fresco.',
    '火': 'Passione ardente. Illumina chi sta intorno con luce e calore.',
    '土': 'Il potere di ricevere. Riposa saldamente al centro.',
    '金': 'Il potere di affinare. Intelletto fresco, bello, affilato come una lama.',
    '水': 'Il potere di fluire. Si muove in profondità e con flessibilità attraverso tutte le cose.'
  },
  ANIMAL_DESC: {
    'Black Panther': 'Occhio acuto per bellezza e novità. Carisma cool e naturale.',
    'Pegasus':       'Un genio libero. Le idee prendono il volo.',
    'Monkey':        'Al servizio degli altri e curioso. Legge la stanza come un maestro.',
    'Koala Bear':    'Riflessivo con preferenze forti. Un ricercatore nel cuore.',
    'Tiger':         'Presenza magnanima. Un re che si muove senza fretta.',
    'Tanuki':        'Caloroso e accessibile. Un custode di saggezza gentile.',
    'Koala':         'Rasserenante e osservatore. Si muove al proprio ritmo.',
    'Elephant':      'Laborioso e potente. Forza attraverso la perseveranza.',
    'Cheetah':       'Velocità esplosiva e azione solitaria. Corre dritto avanti.',
    'Lion':          'Orgoglio e dignità. Nato/a sotto una stella che attira i riflettori.',
    'Wolf':          'Pensa profondamente da solo. Porta un mondo tutto suo.',
    'Sheep':         'Cuore caloroso e cooperativo. Brilla muovendosi con gli altri.'
  },
  MAYA_SEALS: [
    'Drago Rosso','Vento Bianco','Notte Blu','Seme Giallo','Serpente Rosso',
    'Ponte-Mondo Bianco','Mano Blu','Stella Gialla','Luna Rossa','Cane Bianco',
    'Scimmia Blu','Umano Giallo','Camminatore del Cielo Rosso','Mago Bianco','Aquila Blu',
    'Guerriero Giallo','Terra Rossa','Specchio Bianco','Tempesta Blu','Sole Giallo'
  ],
  MAYA_TONES: [
    'Magnetico ','Lunare ','Elettrico ','Auto-esistente ','Sovratono ','Ritmico ',
    'Risonante ','Galattico ','Solare ','Planetario ','Spettrale ','Cristallo ','Cosmico '
  ],
  TAROT_MEANINGS: {
    'The Magician':       'Volontà e creazione. Plasma la possibilità in forma.',
    'The High Priestess': 'Intuizione e mistero. Trasmette molto senza parlare.',
    'The Empress':        'Abbondanza e amore. Simbolo di potere nutritivo.',
    'The Emperor':        'Struttura e autorità. Volontà che costruisce stabilità.',
    'The Hierophant':     'Tradizione e insegnamento. Colui che collega i mondi.',
    'The Lovers':         'Scelta e unione. Un viaggio per decidere la direzione del cuore.',
    'The Chariot':        'Movimento in avanti e volontà. Avanza padroneggiando la difficoltà.',
    'Strength':           'Coraggio quieto. Mostra forza attraverso la dolcezza.',
    'The Hermit':         'Luce interiore. Cerca la verità nella solitudine.',
    'Wheel of Fortune':   'Il punto di svolta. Vive nei cicli.',
    'Justice':            'Equilibrio e verità. Un giudice equo.',
    'The Hanged Man':     'Un cambio di prospettiva. Ciò che diventa visibile a testa in giù.',
    'Death':              'Grande transizione e rinnovamento. Simbolo di lasciar andare verso un nuovo sé.',
    'Temperance':         'Armonia e integrazione. Mescola due poli insieme.',
    'The Devil':          'Desiderio e ombra. Un confronto con la forza primordiale.',
    'The Tower':          'Cambiamento improvviso e intuizione. Cornici rigide possono aprirsi a nuova prospettiva.',
    'The Star':           'Speranza e guida. Irradia dolcemente la luce.',
    'The Moon':           'Illusione e intuizione. Viaggia nel regno dei sogni.',
    'The Sun':            'Gioia e manifestazione. La luce stessa.',
    'Judgement':          'Risveglio e chiamata. Una convocazione verso una nuova fase.',
    'The World':          'Completamento e integrazione. Un\'anima che compie un viaggio.',
    'The Fool':           'Inizio innocente. Libertà senza vincoli.'
  },
  TAROT_BY_NUM: [
    'Il Matto','Il Mago','La Papessa','L\'Imperatrice','L\'Imperatore','Il Papa','Gli Amanti','Il Carro','La Forza','L\'Eremita',
    'La Ruota della Fortuna','La Giustizia','L\'Appeso','La Morte','La Temperanza','Il Diavolo','La Torre','La Stella','La Luna','Il Sole','Il Giudizio','Il Mondo'
  ],
  CELTIC_TREES: [
    { name: 'Betulla',         desc: 'Inizi, purificazione, resilienza.' },
    { name: 'Sorbo',         desc: 'Ispirazione e protezione.' },
    { name: 'Frassino',           desc: 'Sensibilità, sogno, connessione.' },
    { name: 'Ontano',         desc: 'Coraggio e spirito pionieristico.' },
    { name: 'Salice',        desc: 'Intuizione simile alla luna.' },
    { name: 'Biancospino',      desc: 'Porta una fiamma interiore.' },
    { name: 'Quercia',           desc: 'Forza e leadership.' },
    { name: 'Agrifoglio',         desc: 'Dignità e protezione.' },
    { name: 'Nocciolo',         desc: 'Conoscenza e intuizione.' },
    { name: 'Vite',          desc: 'Sensibilità e senso dell\'equilibrio.' },
    { name: 'Edera',           desc: 'Pazienza e rinnovamento.' },
    { name: 'Cannella',          desc: 'Mistero e potere nascosto.' },
    { name: 'Sambuco',         desc: 'Completamento e saggezza.' }
  ],
  BIRTHSTONES: {
    1:  { meaning: 'Amicizia · verità · devozione' },
    2:  { meaning: 'Sincerità · pace interiore' },
    3:  { meaning: 'Coraggio · chiarezza · felicità' },
    4:  { meaning: 'Purezza · amore duraturo' },
    5:  { meaning: 'Buona sorte · felicità' },
    6:  { meaning: 'Salute · longevità · abbondanza' },
    7:  { meaning: 'Passione · vittoria · dignità' },
    8:  { meaning: 'Felicità coniugale · pace interiore' },
    9:  { meaning: 'Sincerità · compassione' },
    10: { meaning: 'Speranza · felicità · innocenza' },
    11: { meaning: 'Amicizia · speranza' },
    12: { meaning: 'Successo · prosperità' }
  },
  BIRTH_FLOWERS: {
    1: 'Garofano',   2: 'Viola',        3: 'Narciso',
    4: 'Pisello odoroso',   5: 'Mughetto', 6: 'Rosa',
    7: 'Giglio',        8: 'Gladiolo',   9: 'Genziana',
    10: 'Cosmo',     11: 'Crisantemo', 12: 'Stella di Natale'
  },
  MOON_PHASE_NAMES: [
    'Luna Nuova',
    'Luna Crescente',
    'Primo Quarto',
    'Gibbosa Crescente',
    'Luna Piena',
    'Gibbosa Calante',
    'Ultimo Quarto',
    'Luna Calante'
  ],
  LIFE_MILESTONES: [
    { name: 'Primo ciclo completato',         desc: 'Un tempo in cui le fondamenta prendono forma.' },
    { name: 'Primo ritorno di Giove',         desc: 'La prima espansione della visione del mondo.' },
    { name: 'Soglia dei nodi lunari',         desc: 'La direzione dell\'anima inizia a risvegliarsi.' },
    { name: 'Secondo ritorno di Giove',        desc: 'La prima espansione verso l\'indipendenza.' },
    { name: 'Primo ritorno di Saturno',          desc: 'Un punto di svolta per ricostruire la propria vita.' },
    { name: 'Terzo ritorno di Giove',         desc: 'Stabilizzazione del ruolo sociale.' },
    { name: 'Opposizione di Urano',            desc: 'Un risveglio di mezza età.' },
    { name: 'Quarto ritorno di Giove',        desc: 'Una stagione di maestria ed espressione.' },
    { name: 'Secondo ritorno di Saturno',         desc: 'Raccolto e ricostruzione dopo lunghi anni.' },
    { name: 'Sessantesimo compleanno',            desc: 'Un nuovo inizio dopo un ciclo completo.' },
    { name: 'Sesto ritorno di Giove',         desc: 'La soglia dell\'anzianità.' },
    { name: 'Ritorno di Urano',                desc: 'Contemplare una vita di rivoluzione.' }
  ],
  LUCKY_COMPASS: {
    fire: {
      colors: ['Oro', 'Corallo', 'Ambra'],
      days: ['Martedì', 'Domenica'],
      hint: 'Toni caldi e giorni di avanzamento possono aiutarti a sentirti più allineato/a — non come regole, ma come dolci ancore.'
    },
    earth: {
      colors: ['Oliva', 'Sabbia', 'Marrone'],
      days: ['Sabato', 'Mercoledì'],
      hint: 'Tonalità radicate e giornate tranquille possono sostenere pazienza e costruzione — una bussola, non un comando.'
    },
    air: {
      colors: ['Azzurro', 'Lilla', 'Argento'],
      days: ['Mercoledì', 'Venerdì'],
      hint: 'Colori leggeri e giorni di conversazione possono aiutare le idee a circolare più liberamente.'
    },
    water: {
      colors: ['Blu profondo', 'Verde mare', 'Perla'],
      days: ['Lunedì', 'Giovedì'],
      hint: 'Colori fluidi e giornate riflessive possono invitare intuizione e chiarezza emotiva.'
    },
    wood: {
      colors: ['Verde foresta', 'Verde petrolio', 'Salvia'],
      days: ['Giovedì', 'Martedì'],
      hint: 'Verdi in crescita e giorni per seminare — letteralmente o metaforicamente — possono sentirsi di supporto.'
    },
    metal: {
      colors: ['Bianco', 'Argento', 'Platino'],
      days: ['Venerdì', 'Domenica'],
      hint: 'Linee nette e colori nitidi possono aiutare ad affinare e lasciare ciò che non serve più.'
    }
  },
  PRODUCT_PHILOSOPHY: {
    freeBadge: 'Tutto è gratuito',
    freeHeadline: 'Diciannove storie, aperte a tutti',
    freeLead: 'Con solo data di nascita e nome, ottieni risultati incrociati, un riassunto, letture per carta, amore e compatibilità — tutto senza costo.',
    premiumHeadline: 'Approfondisci, sempre gratis',
    premiumLead: 'I capitoli estesi in ogni modale sono sbloccati per tutti.'
  },
  PREMIUM_COMING_SOON: {
    badge: 'In arrivo',
    headline: 'Premium in arrivo',
    lead: 'Letture più profonde, cronologie più lunghe, compatibilità — stiamo preparando tutto. Nel frattempo, goditi tutti i diciannove sistemi gratuitamente.',
    teasers: [
      'Letture maestre per tutti i 19 sistemi',
      'Cronologia della fortuna a 10 anni',
      'Compatibilità, rituali lunari e altro'
    ],
    modalHeadline: 'Premium in arrivo',
    modalLead: 'Livelli più profondi saranno disponibili dopo il lancio. Per ora, goditi le sezioni gratuite « Leggi più a fondo ».',
    paymentCta: 'Abbonati a Premium',
    paymentNote: 'Pagamento sicuro tramite Stripe. Annulla in qualsiasi momento.'
  },
  FREE_INCLUDES: [
    {
      title: 'Tutti i diciannove sistemi',
      desc: 'Numerologia, astrologia occidentale, Kyusei, fortuna animale… un input, una panoramica completa e riassunto narrativo.'
    },
    {
      title: 'Letture carta per carta',
      desc: 'Tocca qualsiasi sistema per letture gratuite — inclusi capitoli profondi estesi in ogni modale.'
    },
    {
      title: 'Luna di stasera · bioritmo',
      desc: 'Controlla l\'onda di oggi e il ritmo dalla tua data di nascita.'
    },
    {
      title: 'Carte da condividere',
      desc: 'Salva i risultati come immagine o condividili come testo.'
    }
  ],
  ALL_FREE_HIGHLIGHTS: [
    {
      title: 'Letture profonde maestre',
      desc: 'Ogni carta apre capitoli estesi — cronologie, ombre e indizi incrociati. Nessun paywall.'
    },
    {
      title: 'Archetipo amoroso',
      desc: 'Il tuo tipo amoroso, la tua fase e il piccolo passo di stasera — inclusi gratuitamente.'
    },
    {
      title: 'Lettura di compatibilità',
      desc: 'Radar a cinque assi per te e un\'altra persona — partner, amico o chiunque.'
    }
  ],
  PREMIUM_PRICING: {
    monthly: { label: 'Mensile', per: '/ mese' },
    yearly: { label: 'Annuale', per: '/ anno', badge: '2 mesi gratis' },
    note: 'Un livello opzionale sopra le funzioni gratuite. Annulla in qualsiasi momento (quando la fatturazione sarà implementata).'
  },
  PREMIUM_FEATURES: [
    {
      category: 'Lettura profonda',
      title: 'Interpretazioni maestre per tutti i 19 sistemi',
      desc: 'Oltre le letture gratuite — capitoli più profondi su ogni carta. Luce e ombra, indizi su orizzonti temporali più lunghi.'
    },
    {
      category: 'Cronologia',
      title: 'Cronologia della fortuna a 10 anni',
      desc: 'Anni personali, traguardi e transiti intrecciati — una vista del prossimo decennio.'
    },
    {
      category: 'Luna e cicli',
      title: 'Calendario personale luna nuova e piena',
      desc: 'Dodici mesi di rituali e date da osservare, allineati alla tua fase lunare di nascita.'
    },
    {
      category: 'Compatibilità',
      title: 'Lettura di compatibilità',
      desc: 'Inserisci partner, amico o collega. Vedi come le tue diciannove storie risuonano insieme.'
    },
    {
      category: 'Design di vita',
      title: 'Attitudini ed elementi fortunati',
      desc: 'Stili di lavoro che possono adattarsi a te, colori, numeri e giorni fortunati — una bussola, non una prescrizione.'
    },
    {
      category: 'Personale',
      title: 'Racconto unificato IA',
      desc: 'Intreccia diciannove risultati in una storia. Una lettura lunga fatta per te (in arrivo).'
    },
    {
      category: 'Archivi',
      title: 'Profili salvati',
      desc: 'Memorizza profili per famiglia e partner. Rivisita e traccia i cambiamenti nel tempo.'
    },
    {
      category: 'Condivisione',
      title: 'Carte condivisibili Premium',
      desc: 'Alta risoluzione, più design. Carte di compatibilità ed edizioni « tema dell\'anno » anche.'
    },
    {
      category: 'Notifiche',
      title: 'Promemoria traguardi e luna',
      desc: 'Dolci avvisi per cambi di anno personale, lune piene e altro (in arrivo).'
    }
  ],
  PREMIUM_PITCH_LINES: [
    'Le letture gratuite sono già un ricco punto di partenza',
    'Ciò che segue è opzionale — per chi vuole andare più a fondo',
    'Nulla qui è definitivo; scegli sempre tu cosa significa'
  ],
  PREMIUM_ROADMAP: [
    { phase: 'In Premium', items: ['Interpretazioni profonde delle carte (demo disponibile)'] },
    { phase: 'In sviluppo', items: ['Cronologia 10 anni', 'Compatibilità', 'Calendario lunare'] },
    { phase: 'Concetto', items: ['Racconto unificato IA', 'Profili salvati'] }
  ],
  COMPAT_AXIS_LABELS: {
    lifePath: 'Percorso di vita',
    sun: 'Segno solare',
    zodiac: 'Zodiaco cinese',
    gogyou: 'Cinque Elementi',
    kyusei: 'Stella Kyusei'
  },
  COMPAT_BANDS: [
    { label: 'Una risonanza del destino' },
    { label: 'Un legame profondo' },
    { label: 'Una connessione stabile' },
    { label: 'Una relazione di apprendimento' },
    { label: 'Un legame che cresce col tempo' },
    { label: 'Un contrasto a specchio' }
  ],
  COMPAT_AXIS_HINTS: {
    lifePath: {
      high: 'I percorsi di vita si fanno eco — ritmo e direzione condivisi.',
      mid: 'Tempi diversi, ma spazio per allinearsi col tempo.',
      low: 'Percorsi contrastanti. La curiosità verso le differenze aiuta.'
    },
    sun: {
      high: 'I segni solari condividono elemento o armonia — naturale facilità.',
      mid: 'Stili diversi che possono completarsi.',
      low: 'Energie opposte. L\'equilibrio viene dal rispetto.'
    },
    zodiac: {
      high: 'I segni dello zodiaco cinese si sostengono.',
      mid: 'Accoppiamento neutro — la cura quotidiana conta di più.',
      low: 'Segni di cautela tradizionale — pazienza e umorismo aiutano.'
    },
    gogyou: {
      high: 'I Cinque Elementi si nutrono a vicenda.',
      mid: 'Ciclo neutro — abitudini costanti costruiscono fiducia.',
      low: 'Ciclo di controllo — datevi spazio a vicenda.'
    },
    kyusei: {
      high: 'Le stelle Kyusei circolano bene insieme.',
      mid: 'Compatibilità moderata — le routine portano stabilità.',
      low: 'Energie che si incrociano — onorate il ritmo dell\'altro.'
    }
  }
};
