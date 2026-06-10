/** עברית UI (תוכן העיסוק באנגלית בינתיים) */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — קוסמולוגיה אישית',
    description: 'נומרולוגיה, אסטרולוגיה, Kyusei ועוד — מתאריך לידה ושם.',
    ogTitle: 'COSMIC ID — קוסמולוגיה אישית',
    ogDescription: 'תשע עשרה סיפורים שנכתבו בתוכך. מערכות רבות, קריאה אחת.',
    label: 'עברית'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'תשע עשרה סיפורים שנכתבו בתוכך'
  },
  form: {
    nameLabel: 'השם שלך',
    namePlaceholder: 'לדוגמה: דנה כהן',
    privacyNote: 'הנתונים מעובדים רק במכשיר הזה — לא נשלחים לשרת.',
    birthLabel: 'תאריך לידה',
    submit: 'גלה',
    freeBadge: 'חינם — תמיד',
    premiumDemo: 'תצוגה מקדימה של קריאות עמוקות (דמו)',
    premiumDemoTitle: 'תצוגה מקדימה Premium (החוויה הבסיסית נשארת חינמית)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'כל פרשנות היא אפשרות אחת. אתה כותב את הסיפור שלך.'
  },
  lang: { label: 'שפה' },
  sections: {
    numerology: ['נומרולוגיה', 'Numerology'],
    western: ['אסטרולוגיה מערבית', 'Western Astrology'],
    eastern: ['כוכבים מזרחיים', 'Eastern'],
    characters: ['דמויות', 'Characters'],
    sacred: ['מאיה וטארוט', 'Sacred Symbols'],
    nature: ['סמלי טבע', 'Nature'],
    cycles: ['גלים של היום', 'Cycles'],
    lifeMap: ['מפת חיים', 'Life Map']
  },
  cards: {
    ...enUi.cards,
    lifepath: 'מספר נתיב החיים',
    personalYear: 'שנה אישית',
    expression: 'מספר השם',
    sun: 'מזל שמש',
    zodiac: 'מזל סיני',
    animal: 'ארכיטיפ חיה',
    tarotDaily: 'קלף היום',
    moonTonight: 'ירח הלילה'
  },
  fmt: {
    ...enUi.fmt,
    bornOn: (y, m, d) => `נולד/ה ב-${d}/${m}/${y}`,
    summaryLabel: 'הסיפור שלך',
    summaryHint: '↓ הקש על כרטיס לקריאה מעמיקה יותר',
    cardMore: 'קרא עמוק יותר',
    cardMoreAria: '. פתח פרטים',
    bioUp: '<strong>שלב עולה</strong> (מתאים לפעולה)',
    bioDown: '<strong>שלב מרגיע</strong> (מתאים למנוחה)',
    bioBalanced: '<strong>שלב מאוזן</strong>'
  },
  bio: { physical: 'גופני', emotional: 'רגשי', intellectual: 'שכלי', intuitive: 'אינטואיטיבי' },
  modal: {
    deepRead: 'קרא עמוק יותר',
    premiumBadge: 'קריאה עמוקה (Premium · אופציונלי)',
    premiumPitch: 'העמק',
    premiumCta: 'ראה תוכן Premium',
    close: 'סגור'
  },
  share: {
    ...enUi.share,
    panelTitle: 'כרטיס שיתוף',
    panelDesc: 'שתף את תשע עשרת הסיפורים כתמונה או טקסט',
    panelSteps: '① שמור תמונה → ② פרסם ב-X או LINE.',
    save: 'שמור תמונה',
    copy: 'העתק טקסט',
    loading: 'יוצר…',
    saved: 'התמונה נשמרה',
    copied: 'הטקסט הועתק'
  },
  premiumShowcase: {
    roadmapSummary: 'ראה מפת דרכים Premium',
    freeIncludesTitle: 'כלול בחינם',
    ariaLabel: 'תוכנית Premium'
  }
};
