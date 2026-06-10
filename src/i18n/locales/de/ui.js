/** Deutsch UI (Wahrsage-Inhalte vorerst auf Englisch) */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — Persönliche Kosmologie',
    description: 'Numerologie, Astrologie, Kyusei und mehr aus Geburtsdatum und Name.',
    ogTitle: 'COSMIC ID — Persönliche Kosmologie',
    ogDescription: 'Neunzehn Geschichten in dir geschrieben. Viele Systeme, eine Deutung.',
    label: 'Deutsch'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'Neunzehn Geschichten in dir geschrieben'
  },
  form: {
    nameLabel: 'Dein Name',
    namePlaceholder: 'z. B. Anna Müller',
    privacyNote: 'Deine Eingaben werden nur auf diesem Gerät verarbeitet — nichts wird an einen Server gesendet.',
    birthLabel: 'Geburtsdatum',
    submit: 'Enthüllen',
    freeBadge: 'Kostenlos — für immer',
    premiumDemo: 'Vorschau tiefer Deutungen (Demo)',
    premiumDemoTitle: 'Premium-Vorschau (Kernfunktion bleibt kostenlos)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'Jede Deutung ist eine Möglichkeit. Du schreibst deine Geschichte.'
  },
  lang: { label: 'Sprache' },
  sections: {
    numerology: ['Numerologie', 'Numerology'],
    western: ['Westliche Astrologie', 'Western Astrology'],
    eastern: ['Östliche Sterne', 'Eastern'],
    characters: ['Charaktere', 'Characters'],
    sacred: ['Maya & Tarot', 'Sacred Symbols'],
    nature: ['Natursymbole', 'Nature'],
    cycles: ['Wellen von heute', 'Cycles'],
    lifeMap: ['Lebenskarte', 'Life Map']
  },
  cards: {
    ...enUi.cards,
    lifepath: 'Lebenspfad-Zahl',
    personalYear: 'Persönliches Jahr',
    expression: 'Namenszahl',
    sun: 'Sonnenzeichen',
    zodiac: 'Chinesisches Tierkreiszeichen',
    animal: 'Tier-Archetyp',
    tarotDaily: 'Karte des Tages',
    moonTonight: 'Mond heute Nacht'
  },
  fmt: {
    ...enUi.fmt,
    bornOn: (y, m, d) => `Geboren am ${d}.${m}.${y}`,
    summaryLabel: 'Deine Geschichte',
    summaryHint: '↓ Tippe eine Karte für eine tiefere Deutung',
    cardMore: 'Tiefer lesen',
    cardMoreAria: '. Details öffnen',
    bioUp: '<strong>aufsteigende Phase</strong> (gut für Handeln)',
    bioDown: '<strong>nachdenkliche Phase</strong> (gut für Ruhe)',
    bioBalanced: '<strong>ausgewogene Phase</strong>'
  },
  bio: { physical: 'Körperlich', emotional: 'Emotional', intellectual: 'Intellektuell', intuitive: 'Intuitiv' },
  modal: {
    deepRead: 'Tiefer lesen',
    premiumBadge: 'Tiefere Deutung (Premium · optional)',
    premiumPitch: 'Noch tiefer',
    premiumCta: 'Premium-Inhalt ansehen',
    close: 'Schließen'
  },
  share: {
    ...enUi.share,
    panelTitle: 'Teilen-Karte',
    panelDesc: 'Teile deine neunzehn Geschichten als Bild oder Text',
    panelSteps: '① Bild speichern → ② Auf X oder LINE posten.',
    save: 'Bild speichern',
    copy: 'Text kopieren',
    loading: 'Wird erstellt…',
    saved: 'Bild gespeichert',
    copied: 'Text kopiert'
  },
  premiumShowcase: {
    roadmapSummary: 'Premium-Roadmap ansehen',
    freeIncludesTitle: 'Kostenlos enthalten',
    ariaLabel: 'Premium-Angebot'
  }
};
