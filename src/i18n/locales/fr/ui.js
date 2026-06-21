/** Français UI (contenu divinatoire en anglais pour l'instant) */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — Cosmologie personnelle',
    description: 'Numérologie, astrologie, Kyusei et plus depuis votre date de naissance et votre nom. Arquétype amoureux et compatibilité inclus.',
    ogTitle: 'COSMIC ID — Cosmologie personnelle',
    ogDescription: 'Dix-neuf histoires, votre type amoureux et la compatibilité. De nombreux systèmes, une seule lecture.',
    label: 'Français'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'Dix-neuf histoires, amour et compatibilité'
  },
  form: {
    nameLabel: 'Votre nom',
    namePlaceholder: 'ex. Marie Dupont',
    privacyNote: 'Vos données sont traitées uniquement sur cet appareil — rien n\'est envoyé à un serveur.',
    birthLabel: 'Date de naissance',
    submit: 'Révéler',
    freeBadge: 'Gratuit — pour toujours',
    premiumDemo: 'Aperçu des lectures approfondies (démo)',
    premiumDemoTitle: 'Aperçu Premium (l\'expérience de base reste gratuite)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'Chaque lecture n\'est qu\'une possibilité. Vous écrivez votre histoire.'
  },
  lang: { label: 'Langue' },
  sections: {
    numerology: ['Numérologie', 'Numerology'],
    western: ['Astrologie occidentale', 'Western Astrology'],
    eastern: ['Étoiles orientales', 'Eastern'],
    characters: ['Personnages', 'Characters'],
    sacred: ['Maya et Tarot', 'Sacred Symbols'],
    nature: ['Symboles naturels', 'Nature'],
    cycles: ['Vagues du jour', 'Cycles'],
    lifeMap: ['Carte de vie', 'Life Map']
  },
  cards: {
    ...enUi.cards,
    lifepath: 'Chemin de vie',
    personalYear: 'Année personnelle',
    expression: 'Nombre du nom',
    sun: 'Signe solaire',
    zodiac: 'Zodiaque chinois',
    animal: 'Archétype animal',
    tarotDaily: 'Carte du jour',
    moonTonight: 'Lune de ce soir'
  },
  fmt: {
    ...enUi.fmt,
    bornOn: (y, m, d) => `Né(e) le ${d}/${m}/${y}`,
    summaryLabel: 'Votre histoire',
    summaryHint: '↓ Touchez une carte pour une lecture plus profonde',
    cardMore: 'Lire plus',
    cardMoreAria: '. Ouvrir les détails',
    bioUp: '<strong>phase ascendante</strong> (favorable à l\'action)',
    bioDown: '<strong>phase réflexive</strong> (favorable au repos)',
    bioBalanced: '<strong>phase équilibrée</strong>'
  },
  bio: { physical: 'Physique', emotional: 'Émotionnel', intellectual: 'Intellectuel', intuitive: 'Intuitif' },
  modal: {
    deepRead: 'Lire plus',
    premiumBadge: 'Lecture approfondie (Premium · optionnel)',
    premiumPitch: 'Aller plus loin',
    premiumCta: 'Voir le contenu Premium',
    close: 'Fermer'
  },
  share: {
    ...enUi.share,
    panelTitle: 'Carte à partager',
    panelDesc: 'Partagez vos dix-neuf histoires en image ou en texte',
    panelSteps: '① Enregistrez l\'image → ② Publiez sur X ou LINE.',
    save: 'Enregistrer l\'image',
    copy: 'Copier le texte',
    loading: 'Génération…',
    saved: 'Image enregistrée',
    copied: 'Texte copié'
  },
  premiumShowcase: {
    roadmapSummary: 'Voir la feuille de route Premium',
    freeIncludesTitle: 'Inclus gratuitement',
    ariaLabel: 'Offre Premium'
  }
};
