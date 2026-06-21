/** Español UI (contenido de adivinación en inglés por ahora) */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — Cosmología personal',
    description: 'Cruza numerología, astrología, Kyusei y más desde tu fecha y nombre. Incluye arquetipo amoroso y compatibilidad.',
    ogTitle: 'COSMIC ID — Cosmología personal',
    ogDescription: 'Diecinueve historias, tu tipo amoroso y compatibilidad. Muchos sistemas, una lectura.',
    label: 'Español'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'Diecinueve historias, amor y compatibilidad'
  },
  form: {
    nameLabel: 'Tu nombre',
    namePlaceholder: 'ej. María García',
    privacyNote: 'Tus datos se procesan solo en este dispositivo; no se envían a ningún servidor.',
    birthLabel: 'Fecha de nacimiento',
    submit: 'Revelar',
    freeBadge: 'Gratis para siempre',
    premiumDemo: 'Vista previa de lecturas profundas (demo)',
    premiumDemoTitle: 'Vista previa Premium (la experiencia base sigue siendo gratis)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'Cada lectura es una posibilidad. Tú escribes tu historia.'
  },
  lang: { label: 'Idioma' },
  sections: {
    numerology: ['Numerología', 'Numerology'],
    western: ['Astrología occidental', 'Western Astrology'],
    eastern: ['Estrellas orientales', 'Eastern'],
    characters: ['Personajes', 'Characters'],
    sacred: ['Maya y Tarot', 'Sacred Symbols'],
    nature: ['Símbolos naturales', 'Nature'],
    cycles: ['Olas de hoy', 'Cycles'],
    lifeMap: ['Mapa de vida', 'Life Map']
  },
  fmt: {
    ...enUi.fmt,
    summaryLabel: 'Tu historia',
    summaryHint: '↓ Toca una tarjeta para leer más',
    cardMore: 'Leer más'
  },
  bio: { physical: 'Físico', emotional: 'Emocional', intellectual: 'Intelectual', intuitive: 'Intuitivo' },
  modal: {
    deepRead: 'Leer más',
    premiumBadge: 'Lectura profunda (Premium · opcional)',
    premiumPitch: 'Ir más profundo',
    premiumCta: 'Ver contenido Premium',
    close: 'Cerrar'
  },
  share: {
    ...enUi.share,
    panelTitle: 'Tarjeta para compartir',
    save: 'Guardar imagen',
    copy: 'Copiar texto',
    loading: 'Generando…'
  },
  premiumShowcase: {
    roadmapSummary: 'Ver hoja de ruta Premium',
    freeIncludesTitle: 'Incluido gratis',
    ariaLabel: 'Plan Premium'
  }
};
