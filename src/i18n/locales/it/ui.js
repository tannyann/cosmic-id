/** Italiano UI (contenuti divinatori in inglese per ora) */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — Cosmologia personale',
    description: 'Numerologia, astrologia, Kyusei e altro da data di nascita e nome. Include archetipo amoroso e compatibilità.',
    ogTitle: 'COSMIC ID — Cosmologia personale',
    ogDescription: 'Diciannove storie, il tuo tipo amoroso e la compatibilità. Molti sistemi, una lettura.',
    label: 'Italiano'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'Diciannove storie, amore e compatibilità'
  },
  form: {
    nameLabel: 'Il tuo nome',
    namePlaceholder: 'es. Maria Rossi',
    privacyNote: 'I dati vengono elaborati solo su questo dispositivo — nulla viene inviato a un server.',
    birthLabel: 'Data di nascita',
    submit: 'Rivela',
    freeBadge: 'Gratis — per sempre',
    premiumDemo: 'Anteprima letture profonde (demo)',
    premiumDemoTitle: 'Anteprima Premium (l\'esperienza base resta gratuita)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'Ogni lettura è una possibilità. Tu scrivi la tua storia.'
  },
  lang: { label: 'Lingua' },
  sections: {
    numerology: ['Numerologia', 'Numerology'],
    western: ['Astrologia occidentale', 'Western Astrology'],
    eastern: ['Stelle orientali', 'Eastern'],
    characters: ['Personaggi', 'Characters'],
    sacred: ['Maya e Tarot', 'Sacred Symbols'],
    nature: ['Simboli naturali', 'Nature'],
    cycles: ['Onde di oggi', 'Cycles'],
    lifeMap: ['Mappa della vita', 'Life Map']
  },
  cards: {
    ...enUi.cards,
    lifepath: 'Numero del percorso di vita',
    personalYear: 'Anno personale',
    expression: 'Numero del nome',
    sun: 'Segno solare',
    zodiac: 'Zodiaco cinese',
    animal: 'Archetipo animale',
    tarotDaily: 'Carta di oggi',
    moonTonight: 'Luna di stasera'
  },
  fmt: {
    ...enUi.fmt,
    bornOn: (y, m, d) => `Nato/a il ${d}/${m}/${y}`,
    summaryLabel: 'La tua storia',
    summaryHint: '↓ Tocca una carta per una lettura più profonda',
    cardMore: 'Leggi più',
    cardMoreAria: '. Apri dettagli',
    bioUp: '<strong>fase ascendente</strong> (adatta all\'azione)',
    bioDown: '<strong>fase riflessiva</strong> (adatta al riposo)',
    bioBalanced: '<strong>fase equilibrata</strong>'
  },
  bio: { physical: 'Fisico', emotional: 'Emotivo', intellectual: 'Intellettuale', intuitive: 'Intuitivo' },
  modal: {
    deepRead: 'Leggi più',
    premiumBadge: 'Lettura profonda (Premium · opzionale)',
    premiumPitch: 'Approfondisci',
    premiumCta: 'Vedi contenuto Premium',
    close: 'Chiudi'
  },
  share: {
    ...enUi.share,
    panelTitle: 'Carta da condividere',
    panelDesc: 'Condividi le tue diciannove storie come immagine o testo',
    panelSteps: '① Salva l\'immagine → ② Pubblica su X o LINE.',
    save: 'Salva immagine',
    copy: 'Copia testo',
    loading: 'Generazione…',
    saved: 'Immagine salvata',
    copied: 'Testo copiato'
  },
  premiumShowcase: {
    roadmapSummary: 'Vedi roadmap Premium',
    freeIncludesTitle: 'Incluso gratis',
    ariaLabel: 'Piano Premium'
  }
};
