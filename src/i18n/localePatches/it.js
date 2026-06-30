import { luckyBody } from './helpers.js';

/** Italian locale patch — merged onto ES via mergeConfig(ES, IT_PATCH) */
export const IT_PATCH = {
  header: { eyebrow: 'Cosmologia personale', subtitle: 'Diciannove storie, più amore e compatibilità' },
  sections: {
    numerology: ['Numerologia', ''],
    western: ['Astrologia occidentale', ''],
    eastern: ['Destino orientale', ''],
    characters: ['Archetipi', ''],
    sacred: ['Maya e tarot', ''],
    nature: ['Simboli della natura', ''],
    cycles: ['Onde di oggi', ''],
    lifeMap: ['Mappa vitale', '']
  },
  bio: { physical: 'Fisico', emotional: 'Emotivo', intellectual: 'Intellettuale', intuitive: 'Intuitivo' },
  modal: {
    deepRead: 'Leggi di più',
    premiumBadge: 'Lettura profonda (gratuita)',
    premiumPitch: 'Più in profondità',
    premiumCta: 'Vedi contenuto profondo',
    close: 'Chiudi'
  },
  premiumShowcase: {
    roadmapSummary: 'Vedi funzioni',
    note: 'Tutte le letture sono gratuite — tocca una carta per esplorare capitoli più profondi.',
    optionalEyebrow: 'Incluso gratuitamente',
    freeIncludesTitle: 'Incluso gratuitamente',
    allFreeTitle: 'Anche incluso — senza abbonamento',
    allFreeNote: 'Tutte le funzioni di questa pagina sono gratuite. Le letture mostrano possibilità; tu scrivi la tua storia.',
    ariaLabel: 'Cosa include'
  },
  gloss: {
    stripTitle: 'Glossario rapido — tocca ? su una carta',
    tipAria: (term) => `Cosa significa «${term}»?`
  },
  form: {
    birthMonthLabel: 'Mese', birthDayLabel: 'Giorno', birthYearLabel: 'Anno',
    birthMonthPlaceholder: 'Mese', birthDayPlaceholder: 'Giorno', birthYearPlaceholder: 'Anno'
  },
  cards: {
    lifepath: 'Numero del percorso di vita', personalYear: 'Anno personale', expression: 'Numero del nome',
    expressionLabel: 'Vibrazione del tuo nome', sun: 'Segno solare', moonTrait: 'Tendenza lunare',
    moonTraitLabel: 'Dalla fase lunare alla nascita', moonTraitNote: 'Il segno lunare esatto richiede l\'ora di nascita',
    zodiac: 'Zodiaco cinese', sixty: 'Pilastro dell\'anno (60 steli-rami)', kyusei: 'Stella vitale Kyusei',
    gogyou: 'Cinque elementi', animal: 'Archetipo animale', celtic: 'Albero celtico', maya: 'KIN calendario maya',
    tarotBirth: 'Carta di nascita', tarotDaily: 'Carta di oggi', birthstone: 'Pietra di nascita',
    birthflower: 'Fiore di nascita', biorhythm: 'Bioritmo', moonTonight: 'Luna di stasera',
    lifeStagePrev: 'Traguardo recente', lifeStageNext: 'Prossimo traguardo', timeline: 'Linea del tempo di 10 anni',
    timelineLabel: 'Il decennio a venire',
    timelineDesc: 'La tua onda dell\'anno personale, anni culmine e traguardi — tocca ogni anno per esplorare.',
    unified: 'Lettura maestra unificata',
    unifiedDesc: 'Diciannove sistemi intrecciati in una storia — essenza, amore, lavoro e bussola fortunata.'
  },
  fmt: {
    yearYou: (y) => `Tu nel ${y}`,
    bornYearZodiac: (char) => `Nato nell'anno del ${char}`,
    sixtyDesc: (el) => `Un sigillo che ritorna ogni 60 anni. Porta la natura di ${el}.`,
    kyuseiStar: (el) => `Stella ${el}`,
    gogyouLabel: 'Elemento dell\'anno di nascita',
    animalNum: (n) => `Tipo ${n}/60`,
    animalFallback: 'Una presenza con carattere proprio.',
    celticLabel: 'Uno dei tredici alberi sacri',
    mayaDesc: 'Il tuo giorno nel conteggio sacro di 260. Il sigillo è essenza; il tono, ritmo.',
    tarotMajor: (n) => `Arcano maggiore ${n}`,
    tarotDailyFor: (y, m, d) => `Per te il ${d}/${m}/${y}`,
    monthStone: (m) => `Pietra del mese ${m}`,
    monthFlower: (m) => `Fiore del mese ${m}`,
    birthflowerDesc: 'Simbolo del tuo mese di nascita. Tenerlo vicino può aiutarti a sentirti radicato.',
    biorhythmDays: (days, tag) => `Bioritmo — giorno ${days.toLocaleString(tag)} dalla nascita`,
    moonPhasePct: (pct) => `Fase ${pct}% · La luna tocca ogni vita. Cosa potrebbe chiederti stasera?`,
    bornOn: (y, m, d) => `Nato il ${d}/${m}/${y}`,
    ageNow: (age) => `Ora <strong>${age}</strong> anni`,
    nextMilestone: (age, name) => `Prossimo traguardo: <strong>${age} anni — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `Il tuo prossimo traguardo vitale è <strong>${name} a ${age} anni</strong>. Tra circa <strong>${years} anni</strong>.`,
    elementOf: (el) => `elemento ${el}`,
    ageYears: (n) => `${n} anni`,
    summaryLabel: 'La tua storia',
    summaryLead: (name, label) => `${name}, si dice che porti l'anima di <strong>${label}</strong>.`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `In astrologia occidentale, il tuo Sole è in <strong>${sun}</strong> (elemento ${sunEl}); ` +
      `nel calendario orientale, <strong>${cz}</strong>; in Kyusei, <strong>${ks}</strong>; ` +
      `con <strong>${gy}</strong> al nucleo. La saggezza animale ti nomina <strong>${an}</strong>; il tuo albero custode è <strong>${ct}</strong>. ` +
      `Nel conteggio maya: <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>; archetipo tarot: <strong>${tb}</strong>.`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `Nel ${year}, cavalchi l'onda dell'<strong>anno personale ${py}</strong>. Il bioritmo suggerisce ${bioState}. ` +
      `Porti l'umore di <strong>${mt}</strong>; stasera, <strong>${mp}</strong> ti illumina. ${nextHtml}`,
    summaryHint: '↓ Tocca una carta per una lettura più profonda',
    bioUp: '<strong>fase ascendente</strong> (adatta all\'azione e all\'espressione)',
    bioDown: '<strong>fase riflessiva</strong> (adatta al riposo e all\'ordine)',
    bioBalanced: '<strong>fase equilibrata</strong>',
    personalYearWave: (year) => `Anno personale ${year}`,
    cardMore: 'Leggi di più',
    cardMoreAria: '. Apri dettagli',
    cardAria: (system, value) => `${system}, ${value}`,
    expressionHintAddRoman: 'Aggiungi una grafia in lettere latine per vedere anche il numero internazionale del nome.',
    expressionLatinInvalid: 'Nessuna lettera A–Z trovata nel campo romano; il numero internazionale non è stato mostrato.'
  },
  love: {
    eyebrow: 'Archetipo amoroso', title: 'Lettura d\'amore', phaseLabel: 'Fase amorosa attuale',
    sweetTitle: 'I tuoi punti dolci in amore', careTitle: 'Promemoria gentili',
    matchesTitle: 'Tipi con cui armonizzi', actionLabel: 'Un piccolo passo stasera per invitare connessione',
    cta: 'Curioso di qualcuno? Prova la lettura di compatibilità',
    footnote: 'Questa è una possibilità. Scrivi la tua storia d\'amore.',
    shareTitle: 'Condividi lettura d\'amore', shareDesc: 'Salva l\'immagine e pubblicala su X o LINE.',
    sharePreviewAria: 'Anteprima carta d\'amore', shareAlt: (name) => `Carta d\'amore di ${name}`,
    shareSaved: 'Immagine salvata', shareCopied: 'Testo copiato', shareCopyFail: 'Impossibile copiare', shareFail: 'Impossibile condividere'
  },
  compat: {
    eyebrow: 'Compatibilità', title: 'Leggere la compatibilità insieme',
    lead: 'Inserisci un altro nome e una data di nascita per riflettere la compatibilità su cinque assi.',
    leadSub: 'Partner, amico, famiglia o qualcuno che ammiri — chiunque.',
    nameLabel: 'Il suo nome', birthLabel: 'La sua data di nascita', namePlaceholder: 'es. Maria Rossi',
    submit: 'Rivela compatibilità',
    disclaimer: 'Le letture mostrano possibilità. La vostra relazione reale è la storia che scrivete insieme.',
    resultEyebrow: 'Due storie intrecciate', overallLabel: 'Complessivo',
    footnote: 'I numeri sono una guida. I legami cambiano forma giorno dopo giorno.',
    radarAria: 'Grafico radar di compatibilità su cinque assi', lifePathValue: (n) => `Percorso di vita ${n}`
  },
  timeline: {
    eyebrow: 'Lettura interattiva', title: 'Linea del tempo di 10 anni', subtitle: 'Il tuo ritmo dell\'anno personale nel decennio a venire',
    intro: 'Ogni barra è un anno personale (1–9). Tocca un anno per leggerne il tema; ✦ segna un traguardo vitale.',
    ageLabel: 'Età', pyLabel: 'Anno personale', yearLabel: 'Anno', milestoneLabel: 'Traguardo vitale',
    thisYear: 'Quest\'anno', milestoneHere: 'Anno di traguardo',
    ageAt: (age) => `Al compimento dei ${age} anni`,
    pyHeading: (py, theme) => `Anno personale ${py} · ${theme}`,
    pyThemes: {
      1: 'Nuovi inizi', 2: 'Pazienza e legami', 3: 'Espressione e gioia', 4: 'Fondamenta',
      5: 'Cambiamento e libertà', 6: 'Responsabilità e amore', 7: 'Introspezione', 8: 'Raccolto', 9: 'Completamento e rilascio'
    }
  },
  master: {
    title: 'Lettura maestra',
    intro: 'Capitoli più profondi, aperti a tutti. Tocca ciascuno per esplorare.',
    expandAll: 'Apri tutto',
    collapseAll: 'Chiudi tutto'
  },
  extended: {
    moon: {
      title: 'Calendario lunare di 12 mesi',
      intro: 'Lune nuove e piene in arrivo — tocca una data per un rituale semplice. ✦ segna la risonanza con la tua fase lunare di nascita.',
      tapHint: 'Tocca una data di luna nuova o piena per aprire un suggerimento rituale.',
      newMoon: 'Luna nuova', fullMoon: 'Luna piena',
      resonance: 'Questa fase può fare eco alla tua luna di nascita — un punto di svolta personale nel ciclo lunare.',
      ritualNew: 'Scrivi un desiderio o un\'intenzione su carta. Pianta un seme, letterale o metaforico. Inizia qualcosa di piccolo che possa curare per 29 giorni.',
      ritualFull: 'Nomina tre cose per cui sei grato. Lascia andare un\'abitudine o una storia che non ti serve più. Che la luce lunare sia specchio, non giudice.'
    },
    biorhythm: {
      title: 'Previsione bioritmica di 90 giorni',
      intro: 'Quattro onde dalla tua nascita — tocca un giorno per leggerne il ritmo. I punti segnano i giorni critici al passaggio dello zero.',
      legend: 'Punto turchese = giorno critico · bordo dorato = oggi',
      today: 'Oggi', critical: 'Giorno critico',
      rising: 'Onda ascendente', falling: 'Onda discendente', neutral: 'Vicino all\'equilibrio',
      waves: { physical: 'Fisico', emotional: 'Emotivo', intellectual: 'Intellettuale', intuitive: 'Intuitivo' },
      actionHigh: 'Un giorno che può favorire azione, movimento ed espressione esteriore.',
      actionLow: 'Un giorno che può favorire riposo, protezione e consolidamento tranquillo.',
      actionMid: 'Giorno di transizione — né picco né valle. Muoviti con dolcezza.'
    },
    unified: {
      eyebrow: 'Lettura ampliata', title: 'Lettura maestra unificata', subtitle: 'Diciannove storie, un solo tessuto',
      intro: 'Una sintesi tra sistemi — non un verdetto, ma una mappa al tuo ritmo.',
      expandAll: 'Apri tutto', collapseAll: 'Chiudi tutto',
      footnote: 'Ogni filo qui è una possibilità. Tu scegli cosa significa.',
      chapterEssence: 'La tua essenza centrale', chapterYear: 'Focus di quest\'anno', chapterLove: 'Amore e connessione',
      chapterWork: 'Lavoro ed espressione', chapterShadow: 'Ombra da onorare', chapterLucky: 'Bussola fortunata',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name} — come <strong>${lpLabel}</strong>, il tuo percorso di vita può concentrarsi su: ${lpDesc}</p>
         <p>Il tuo sole in <strong>${sun}</strong>, l'anno del <strong>${zodiac}</strong> e <strong>${kyusei}</strong> possono intrecciarsi come note distinte dello stesso accordo.</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p>Nel <strong>${year}</strong>, il tuo anno personale è <strong>${py}</strong>. ${pyMeaning}</p>
         <p>L'onda di quest'anno può invitarti ad andare con la sua corrente, non contro di essa.</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>Con il calore <strong>${sunEl}</strong> del tuo segno solare e l'archetipo <strong>${animal}</strong>, la connessione può fluire meglio onorando tenerezza e indipendenza.</p>
         <p>Il percorso di vita <strong>${lp}</strong> può colorare come dai e ricevi — non come tipo fisso, ma come tema ricorrente.</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p>L'energia <strong>${lpLabel}</strong> può esprimersi nel lavoro come scopo, non solo produttività. L'elemento <strong>${gogyou}</strong> del tuo anno di nascita suggerisce come costruisci.</p>
         ${exprNum ? `<p>La tua vibrazione nominale <strong>${exprNum}</strong> può aggiungere un altro strato a come ti vedono.</p>` : ''}`,
      shadowHints: {
        1: 'attenzione all\'isolamento quando la leadership diventa controllo',
        2: 'attenzione a perdersi nel mantenere la pace',
        3: 'attenzione a restare in superficie',
        4: 'attenzione alla rigidità quando la sicurezza sembra minacciata',
        5: 'attenzione all\'irrequietezza che evita l\'impegno',
        6: 'attenzione alla cura che diventa controllo',
        7: 'attenzione al ritiro quando il mondo è troppo rumoroso',
        8: 'attenzione alla durezza quando il potere scarseggia',
        9: 'attenzione agli ideali che superano il corpo',
        default: 'notare quando la tua forza inclina verso l\'eccesso'
      },
      shadowBody: (lp, hint) =>
        `<p>Ogni dono proietta un'ombra. Per il percorso <strong>${lp}</strong>, il bordo di crescita può essere: ${hint}.</p>
         <p>Nominare l'ombra non è sconfitta — può essere il primo passo verso l'equilibrio.</p>`,
      luckyBody: (colors, numbers, days, hint) =>
        luckyBody({ colors: 'Colori', numbers: 'Numeri', days: 'Giorni' }, colors, numbers, days, hint)
    }
  },
  deep: {
    scrollMoon: 'Vai al calendario lunare ↑',
    scrollBio: 'Vai alla previsione di 90 giorni ↑',
    scrollTimeline: 'Vai alla linea del tempo di 10 anni ↑',
    prompts: {
      generic: [
        { q: 'Cosa potrebbe invitarmi a notare?', a: 'Resta un minuto con il tema del capitolo. La prima cosa che emerge può essere il tuo indizio — non un verdetto.' },
        { q: 'Un piccolo passo questa settimana?', a: 'Scegli un\'azione piccola per oggi. Le letture ampliate funzionano meglio come esperimenti gentili.' }
      ]
    },
    personalYear: {
      thisMonth: 'Questo mese',
      personalMonth: (n) => `Mese personale ${n}`,
      tagAction: 'Agire', tagWait: 'Nutrire', tagWatch: 'Osservare',
      ritualHint: 'Nei mesi di osservazione: decisioni lente, più riposo e un rituale di radicamento possono aiutare.',
      noWatch: 'Nessun mese personale ad alta osservazione quest\'anno — un ritmo più stabile.',
      pathSuffix: (lp) => `Percorso-${lp}`,
      encounterHint: (py) => `Può apparire quando i temi dell'anno personale ${py} sono attivi`,
      encounterDetail: (type, el, py) => `Connessioni «${type}» possono riflettere la tua stagione dell'elemento ${el}.`,
      keywords: {
        1: ['Seme', 'Coraggio', 'Iniziare'],
        2: ['Pazienza', 'Legame', 'Ascoltare'],
        3: ['Gioia', 'Esprimere', 'Connettere'],
        4: ['Costruire', 'Ordine', 'Radice'],
        5: ['Cambiamento', 'Libertà', 'Esplorare'],
        6: ['Amore', 'Casa', 'Prendersi cura'],
        7: ['Quietudine', 'Studio', 'Interiore'],
        8: ['Raccolto', 'Potere', 'Ricevere'],
        9: ['Lasciare andare', 'Completare', 'Perdonare'],
        default: ['Fluire', 'Fidarsi', 'Aprire']
      },
      encounterTypes: {
        fire: ['Scintilla', 'Mentore', 'Alleato'],
        water: ['Guaritore', 'Specchio', 'Guida'],
        earth: ['Costruttore', 'Ancora', 'Maestro'],
        air: ['Messaggero', 'Collaboratore', 'Portatore di idee'],
        wood: ['Coltivatore', 'Compagno', 'Esploratore'],
        metal: ['Raffinatore', 'Sfidante', 'Anziano'],
        default: ['Alleato', 'Specchio', 'Guida']
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) => `Percorso di vita ${lp} con anno personale ${py}: ${pyMeaning}`,
      yearWaveHint: 'Apri la carta Linea del tempo di 10 anni nella mappa vitale per l\'intero decennio.',
      resonateLabel: 'Può risuonare',
      resonateText: (a, b) => `Altri sui percorsi ${a} o ${b} possono sembrare familiari.`,
      growLabel: 'Può stimolare crescita',
      growText: (a, b) => `I percorsi ${a} o ${b} possono sfidarti — attrito che può espandersi con curiosità.`,
      careLabel: 'Con attenzione',
      careText: (n) => `L'energia del percorso ${n} può sentirsi intensa — vale la pena porre limiti consapevoli.`,
      careerNatural: 'Adattamento naturale',
      careerNaturalText: (lp) => `Ruoli in cui i doni del percorso ${lp} brillano senza forzare.`,
      careerStretch: 'Zona di espansione',
      careerStretchText: (n) => `Progetti che prendono energia dal percorso ${n} possono sbloccare abilità nascoste.`,
      careerRest: 'Forma di riposo',
      careerRestText: (lp) => `Come recuperi conta. Il percorso ${lp} può aver bisogno di un tipo specifico di pausa.`,
      soulQ1: 'Cosa si ripete nella mia vita?',
      soulA1: (lp) => `Il percorso ${lp} può portare la stessa lezione con abiti diversi.`,
      soulQ2: 'Com\'è «abbastanza»?',
      soulA2: 'Le lezioni dell\'anima spesso si nascondono nell\'ambizione. Definisci abbastanza per questa stagione.',
      figures: {
        1: [{ name: 'Pionieri', note: 'Non per imitare — per notare come appare il coraggio nelle loro scelte.' }],
        2: [{ name: 'Costruttori di ponti', note: 'Chi connette senza essere al centro della scena.' }],
        3: [{ name: 'Artisti e narratori', note: 'La gioia come vocazione.' }],
        4: [{ name: 'Artigiani', note: 'Pazienza resa visibile.' }],
        5: [{ name: 'Esploratori', note: 'Libertà con responsabilità.' }],
        6: [{ name: 'Custodi', note: 'Amore che non soffoca.' }],
        7: [{ name: 'Cercatori', note: 'Verità prima del comfort.' }],
        8: [{ name: 'Costruttori di eredità', note: 'Potere che circola.' }],
        9: [{ name: 'Umanitari', note: 'Completare come dono.' }],
        11: [{ name: 'Illuminatori', note: 'Sensibilità come servizio.' }],
        22: [{ name: 'Maestri costruttori', note: 'Sogni con fondamenta.' }],
        33: [{ name: 'Maestri dell\'amore', note: 'Incondizionato come pratica.' }]
      }
    },
    sun: {
      elementMap: {
        fire: { direction: 'Sud · Fuoco', season: 'Il calore estivo può riflettere il tuo splendore.', ritual: 'Candela, luce solare o movimento mattutino.' },
        earth: { direction: 'Centro · Terra', season: 'I raccolti possono radicarti.', ritual: 'Piedi nudi sulla terra, cibo cucinato lentamente.' },
        air: { direction: 'Est · Aria', season: 'I venti di primavera possono agitare le idee.', ritual: 'Diario di tre frasi, camminata senza cuffie.' },
        water: { direction: 'Ovest · Acqua', season: 'Le profondità invernali possono chiamarti verso l\'interno.', ritual: 'Bagno tiepido, contemplare la luna.' },
        wood: { direction: 'Est · Legno', season: 'Le stagioni di crescita favoriscono la semina.', ritual: 'Pianta verde, un\'abitudine di 29 giorni.' },
        metal: { direction: 'Ovest · Metallo', season: 'La chiarezza autunnale può aiutarti a raffinare.', ritual: 'Riordinare un cassetto, abiti bianchi.' }
      }
    },
    kyusei: {
      phases: {
        1: 'Anno 1 del ciclo: seminare i temi honmei.',
        2: 'Anno 2: pazienza e partnership.',
        3: 'Anno 3: espressione e visibilità.',
        4: 'Anno 4: fondamenta.',
        5: 'Anno 5: cambiamento e movimento.',
        6: 'Anno 6: responsabilità e casa.',
        7: 'Anno 7: introspezione.',
        8: 'Anno 8: raccolto.',
        9: 'Anno 9: completamento — preparare un nuovo ciclo.',
        default: 'Un punto nel tuo ciclo honmei di 9 anni.'
      }
    },
    tarot: {
      light: 'Volto di luce',
      shadow: 'Volto d\'ombra',
      lightText: (name) => `${name} dritta: il dono dell'anima nella sua forma più chiara.`,
      shadowText: (name) => `${name} rovesciata: non punizione — la carta chiede integrazione. Dove pesa? Quel peso può essere trasformazione che bussa.`
    }
  }
};
