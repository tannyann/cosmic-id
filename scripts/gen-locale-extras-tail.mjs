/**
 * Generates FR/DE/IT/TR/HE/AR locale config blocks for localeUiExtras.js
 * Run: node scripts/gen-locale-extras-tail.mjs >> append to file manually
 */
import { readFileSync, writeFileSync } from 'fs';

const esBlock = readFileSync(new URL('../src/i18n/localeUiExtras.js', import.meta.url), 'utf8');
const esMatch = esBlock.match(/const ES = (\{[\s\S]*?\n\});/);
if (!esMatch) throw new Error('ES block not found');

const locales = {
  fr: {
    tag: 'fr-FR',
    form: { birthMonthLabel: 'Mois', birthDayLabel: 'Jour', birthYearLabel: 'Année', birthMonthPlaceholder: 'Mois', birthDayPlaceholder: 'Jour', birthYearPlaceholder: 'Année' },
    pyHeading: (py, theme) => `Année personnelle ${py} · ${theme}`,
    pyThemes: { 1: 'Nouveaux départs', 2: 'Patience et liens', 3: 'Expression et joie', 4: 'Fondations', 5: 'Changement et liberté', 6: 'Responsabilité et amour', 7: 'Introspection', 8: 'Récolte', 9: 'Achèvement et lâcher-prise' }
  },
  de: {
    tag: 'de-DE',
    form: { birthMonthLabel: 'Monat', birthDayLabel: 'Tag', birthYearLabel: 'Jahr', birthMonthPlaceholder: 'Monat', birthDayPlaceholder: 'Tag', birthYearPlaceholder: 'Jahr' },
    pyHeading: (py, theme) => `Persönliches Jahr ${py} · ${theme}`,
    pyThemes: { 1: 'Neuanfang', 2: 'Geduld und Bindung', 3: 'Ausdruck und Freude', 4: 'Fundament', 5: 'Wandel und Freiheit', 6: 'Verantwortung und Liebe', 7: 'Innenschau', 8: 'Ernte', 9: 'Vollendung und Loslassen' }
  },
  it: {
    tag: 'it-IT',
    form: { birthMonthLabel: 'Mese', birthDayLabel: 'Giorno', birthYearLabel: 'Anno', birthMonthPlaceholder: 'Mese', birthDayPlaceholder: 'Giorno', birthYearPlaceholder: 'Anno' },
    pyHeading: (py, theme) => `Anno personale ${py} · ${theme}`,
    pyThemes: { 1: 'Nuovi inizi', 2: 'Pazienza e legami', 3: 'Espressione e gioia', 4: 'Fondamenta', 5: 'Cambiamento e libertà', 6: 'Responsabilità e amore', 7: 'Introspezione', 8: 'Raccolto', 9: 'Completamento e rilascio' }
  },
  tr: {
    tag: 'tr-TR',
    form: { birthMonthLabel: 'Ay', birthDayLabel: 'Gün', birthYearLabel: 'Yıl', birthMonthPlaceholder: 'Ay', birthDayPlaceholder: 'Gün', birthYearPlaceholder: 'Yıl' },
    pyHeading: (py, theme) => `Kişisel yıl ${py} · ${theme}`,
    pyThemes: { 1: 'Yeni başlangıçlar', 2: 'Sabır ve bağlar', 3: 'İfade ve neşe', 4: 'Temel atma', 5: 'Değişim ve özgürlük', 6: 'Sorumluluk ve sevgi', 7: 'İçe dönüş', 8: 'Hasat', 9: 'Tamamlanma ve bırakma' }
  },
  he: {
    tag: 'he-IL',
    form: { birthMonthLabel: 'חודש', birthDayLabel: 'יום', birthYearLabel: 'שנה', birthMonthPlaceholder: 'חודש', birthDayPlaceholder: 'יום', birthYearPlaceholder: 'שנה' },
    pyHeading: (py, theme) => `שנה אישית ${py} · ${theme}`,
    pyThemes: { 1: 'התחלות חדשות', 2: 'סבלנות וקשרים', 3: 'ביטוי ושמחה', 4: 'בניית יסודות', 5: 'שינוי וחופש', 6: 'אחריות ואהבה', 7: 'התבוננות פנימה', 8: 'קציר', 9: 'השלמה ושחרור' }
  },
  ar: {
    tag: 'ar-SA',
    form: { birthMonthLabel: 'الشهر', birthDayLabel: 'اليوم', birthYearLabel: 'السنة', birthMonthPlaceholder: 'الشهر', birthDayPlaceholder: 'اليوم', birthYearPlaceholder: 'السنة' },
    pyHeading: (py, theme) => `السنة الشخصية ${py} · ${theme}`,
    pyThemes: { 1: 'بدايات جديدة', 2: 'صبر وروابط', 3: 'تعبير وفرح', 4: 'بناء الأساس', 5: 'تغيير وحريّة', 6: 'مسؤولية وحب', 7: 'تأمل داخلي', 8: 'حصاد', 9: 'إكمال وترك' }
  }
};

// Translation maps keyed by path - applied to deep-cloned ES structure
const maps = {
  fr: {
    'cards.lifepath': 'Nombre du chemin de vie', 'cards.personalYear': 'Année personnelle', 'cards.expression': 'Nombre du nom',
    'cards.expressionLabel': 'Vibration de votre nom', 'cards.sun': 'Signe solaire', 'cards.moonTrait': 'Tendance lunaire',
    'cards.moonTraitLabel': 'Selon la phase lunaire à la naissance', 'cards.moonTraitNote': 'Le signe lunaire exact exige l\'heure de naissance',
    'cards.zodiac': 'Zodiaque chinois', 'cards.sixty': 'Pilier de l\'année (60 tiges-branches)', 'cards.kyusei': 'Étoile vitale Kyusei',
    'cards.gogyou': 'Cinq éléments', 'cards.animal': 'Archétype animal', 'cards.celtic': 'Arbre celtique', 'cards.maya': 'KIN maya',
    'cards.tarotBirth': 'Carte de naissance', 'cards.tarotDaily': 'Carte du jour', 'cards.birthstone': 'Pierre de naissance',
    'cards.birthflower': 'Fleur de naissance', 'cards.biorhythm': 'Biorythme', 'cards.moonTonight': 'Lune de ce soir',
    'cards.lifeStagePrev': 'Jalon récent', 'cards.lifeStageNext': 'Prochain jalon', 'cards.timeline': 'Chronologie de 10 ans',
    'cards.timelineLabel': 'La décennie à venir',
    'cards.timelineDesc': 'La vague de votre année personnelle, les années culminantes et les jalons — touchez chaque année pour explorer.',
    'cards.unified': 'Lecture maître unifiée',
    'cards.unifiedDesc': 'Dix-neuf systèmes tissés en une histoire — essence, amour, travail et boussole de chance.',
    'fmt.summaryLabel': 'Votre histoire', 'fmt.summaryHint': '↓ Touchez une carte pour une lecture plus profonde',
    'fmt.gogyouLabel': 'Élément de l\'année de naissance', 'fmt.animalFallback': 'Une présence au caractère distinct.',
    'fmt.celticLabel': 'Un des treize arbres sacrés',
    'fmt.mayaDesc': 'Votre jour dans le compte sacré de 260. Le sceau est l\'essence ; le ton, le rythme.',
    'fmt.birthflowerDesc': 'Symbole de votre mois de naissance. L\'avoir près de vous peut vous ancrer.',
    'fmt.bioUp': '<strong>phase ascendante</strong> (favorable à l\'action et à l\'expression)',
    'fmt.bioDown': '<strong>phase réflexive</strong> (favorable au repos et au tri)',
    'fmt.bioBalanced': '<strong>phase équilibrée</strong>',
    'fmt.expressionHintAddRoman': 'Ajoutez une graphie en lettres latines pour voir aussi le nombre international du nom.',
    'fmt.expressionLatinInvalid': 'Aucune lettre A–Z trouvée dans le champ romain ; le nombre international n\'a pas été affiché.',
    'love.eyebrow': 'Archétype amoureux', 'love.title': 'Lecture amoureuse', 'love.phaseLabel': 'Phase amoureuse actuelle',
    'love.sweetTitle': 'Vos points doux en amour', 'love.careTitle': 'Rappels bienveillants',
    'love.matchesTitle': 'Types avec lesquels vous harmonisez', 'love.actionLabel': 'Un petit pas ce soir pour inviter la connexion',
    'love.cta': 'Curieux·se de quelqu\'un ? Essayez la lecture de compatibilité',
    'love.footnote': 'C\'est une possibilité. Vous écrivez votre propre histoire d\'amour.',
    'compat.eyebrow': 'Compatibilité', 'compat.title': 'Lire la compatibilité à deux',
    'compat.lead': 'Entrez un autre nom et une date de naissance pour refléter la compatibilité sur cinq axes.',
    'compat.leadSub': 'Partenaire, ami, famille ou quelqu\'un que vous admirez.',
    'compat.nameLabel': 'Son nom', 'compat.birthLabel': 'Sa date de naissance', 'compat.namePlaceholder': 'ex. Marie Dupont',
    'compat.submit': 'Révéler la compatibilité',
    'compat.disclaimer': 'Les lectures montrent des possibilités. Votre relation réelle est l\'histoire que vous écrivez ensemble.',
    'compat.resultEyebrow': 'Deux histoires tissées', 'compat.overallLabel': 'Global',
    'compat.footnote': 'Les nombres ne sont qu\'un guide. Les liens changent au fil des jours vécus ensemble.',
    'compat.radarAria': 'Graphique radar de compatibilité à cinq axes',
    'timeline.eyebrow': 'Lecture interactive', 'timeline.title': 'Chronologie de 10 ans',
    'timeline.subtitle': 'Votre rythme d\'année personnelle pour la décennie à venir',
    'timeline.intro': 'Chaque barre est une année personnelle (1–9). Touchez une année pour lire son thème ; ✦ marque un jalon de vie.',
    'timeline.ageLabel': 'Âge', 'timeline.pyLabel': 'Année personnelle', 'timeline.yearLabel': 'Année',
    'timeline.milestoneLabel': 'Jalon de vie', 'timeline.thisYear': 'Cette année', 'timeline.milestoneHere': 'Année de jalon',
    'master.title': 'Lecture maître', 'master.intro': 'Des chapitres plus profonds, ouverts à tous. Touchez chacun pour explorer.',
    'master.expandAll': 'Tout ouvrir', 'master.collapseAll': 'Tout fermer',
    'extended.moon.title': 'Calendrier lunaire sur 12 mois',
    'extended.unified.title': 'Lecture maître unifiée', 'extended.unified.subtitle': 'Dix-neuf histoires, un seul tissu',
    'deep.tarot.light': 'Face de lumière', 'deep.tarot.shadow': 'Face d\'ombre'
  }
};

console.log('// generator placeholder - use manual locale blocks');
process.exit(0);
