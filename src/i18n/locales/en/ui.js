/** English UI strings */
export const ui = {
  meta: {
    title: 'COSMIC ID — Personal Cosmology',
    description: 'Cross-read numerology, astrology, Kyusei, and more from your birth date and name.',
    ogTitle: 'COSMIC ID — Personal Cosmology',
    ogDescription: 'Nineteen stories written within you. Many systems, one reading.',
    label: 'English'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'Nineteen stories written within you'
  },
  form: {
    nameLabel: 'Your name',
    namePlaceholder: 'e.g. Alex Morgan',
    birthLabel: 'Date of birth',
    submit: 'Reveal',
    freeBadge: 'Free to use — always',
    premiumDemo: 'Preview deep readings (demo)',
    premiumDemoTitle: 'Preview Premium deep readings (core experience stays free)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'Every reading is one possibility. You write your story.'
  },
  lang: { label: 'Language' },
  sections: {
    numerology: ['Numerology', 'Numerology'],
    western: ['Western Astrology', 'Western Astrology'],
    eastern: ['Eastern Stars & Fate', 'Eastern'],
    characters: ['Character Divination', 'Characters'],
    sacred: ['Maya & Tarot', 'Sacred Symbols'],
    nature: ['Nature Symbols', 'Nature'],
    cycles: ["Today's Waves", 'Cycles'],
    lifeMap: ['Life Map', 'Life Map']
  },
  cards: {
    lifepath: 'Life Path Number',
    personalYear: 'Personal Year',
    expression: 'Name Number',
    expressionLabel: 'Vibration of your name',
    sun: 'Sun Sign',
    moonTrait: 'Moon Tendency',
    moonTraitLabel: 'From your birth moon phase',
    moonTraitNote: 'Exact moon sign requires birth time',
    zodiac: 'Chinese Zodiac',
    sixty: 'Year Pillar (60 Stem-Branch)',
    kyusei: 'Kyusei Life Star',
    gogyou: 'Five Elements',
    animal: 'Animal Archetype',
    celtic: 'Celtic Tree',
    maya: 'Maya Calendar KIN',
    tarotBirth: 'Tarot Birth Card',
    tarotDaily: "Today's Card",
    birthstone: 'Birthstone',
    birthflower: 'Birth Flower',
    biorhythm: 'Biorhythm',
    moonTonight: 'Tonight\'s Moon',
    lifeStagePrev: 'Recent Milestone',
    lifeStageNext: 'Next Milestone'
  },
  fmt: {
    yearYou: (y) => `You in ${y}`,
    bornYearZodiac: (char) => `Born in the year of ${char}`,
    sixtyDesc: (el) => `A seal that returns once in 60 years. Carries the nature of ${el}.`,
    kyuseiStar: (el) => `${el} star`,
    gogyouLabel: 'Element of birth year',
    animalNum: (n) => `Type ${n}/60`,
    animalFallback: 'A presence with its own distinct character.',
    celticLabel: 'One of thirteen sacred trees',
    mayaDesc: 'Your day in the 260-day sacred count. Seal is essence; tone is rhythm.',
    tarotMajor: (n) => `Major Arcana ${n}`,
    tarotDailyFor: (y, m, d) => `For you on ${y}/${m}/${d}`,
    monthStone: (m) => `Stone of month ${m}`,
    monthFlower: (m) => `Flower of month ${m}`,
    birthflowerDesc: 'A symbol of your birth month. Placing it nearby may help you feel grounded.',
    biorhythmDays: (days) => `Biorhythm — day ${days.toLocaleString('en-US')} since birth`,
    moonPhasePct: (pct) => `Phase ${pct}% · The moon touches all life. What might tonight ask of you?`,
    bornOn: (y, m, d) => `Born ${m}/${d}/${y}`,
    ageNow: (age) => `Now <strong>${age}</strong> years old`,
    nextMilestone: (age, name) => `Next milestone:<strong>age ${age} — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `Your next life milestone is <strong>${name} at ${age}</strong>. About <strong>${years} years</strong> away.`,
    elementOf: (el) => `${el} element`,
    ageYears: (n) => `Age ${n}`,
    cardMore: 'Read deeper',
    cardMoreAria: '. Open details',
    cardAria: (system, value) => `${system}, ${value}`,
    summaryLabel: 'Your story',
    summaryLead: (name, label) => {
      const article = /^[aeiouAEIOU]/.test(label.trim()) ? 'an' : 'a';
      return `${name}, you are said to carry the soul of ${article} <strong>${label}</strong>.`;
    },
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `In Western astrology, your Sun rests in <strong>${sun}</strong> (${sunEl} element);` +
      ` in the Eastern calendar, <strong>${cz}</strong>; under Kyusei, <strong>${ks}</strong>;` +
      ` with <strong>${gy}</strong> at your core.` +
      ` Animal wisdom names you <strong>${an}</strong>; your guardian tree is <strong>${ct}</strong>.` +
      ` In the Maya count: <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>;` +
      ` tarot archetype: <strong>${tb}</strong>.`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `In ${year}, you ride the wave of <strong>Personal Year ${py}</strong>.` +
      ` Biorhythm suggests ${bioState}.` +
      ` You carry the mood of <strong>${mt}</strong>; tonight, <strong>${mp}</strong> shines on you.` +
      ` ${nextHtml}`,
    summaryHint: '↓ Tap any card for a deeper reading',
    bioUp: '<strong>a rising phase</strong> (good for action and expression)',
    bioDown: '<strong>a reflective phase</strong> (good for rest and sorting)',
    bioBalanced: '<strong>a balanced phase</strong>',
    personalYearWave: (year) => `Personal Year ${year}`
  },
  bio: { physical: 'Physical', emotional: 'Emotional', intellectual: 'Intellectual', intuitive: 'Intuitive' },
  modal: {
    deepRead: 'Read deeper',
    premiumBadge: 'Deeper reading (Premium · optional)',
    premiumPitch: 'Go deeper',
    premiumSub: (line0, line1, chapters) =>
      `${line0} ${line1} (<strong>${chapters} chapters</strong> in this card).`,
    premiumCta: 'See Premium content',
    premiumUnlockPitch: 'Unlock the deep layer',
    premiumUnlockSub: (n) =>
      `Master-class readings span ${n} sections: ten-year cycles, compatibility, vocation, soul themes, and finer calculations.`,
    close: 'Close'
  },
  toast: {
    premiumDemo: 'Turn on “Preview deep readings” in the form to see Premium content in this demo'
  },
  share: {
    panelTitle: 'Share card',
    panelDesc: 'Share your nineteen stories as an image or text',
    previewHint: 'Tap to enlarge',
    previewAria: 'Enlarge share card',
    previewAlt: (name) => `${name}'s COSMIC ID share card`,
    save: 'Save image',
    shareNative: 'Share…',
    copy: 'Copy text',
    loading: 'Generating…',
    loadFail: 'Failed',
    saved: 'Image saved',
    copied: 'Text copied',
    copyFail: 'Could not copy',
    shareFail: 'Could not share',
    nativeUnsupported: 'Image sharing is not supported here. Try Save image.',
    imageFail: 'Could not generate share image',
    modalAlt: 'Share card preview',
    tweetStories: (name) => `${name}'s nineteen stories`,
    tweetFooter: 'Every reading is one possibility.',
    tonightMoon: (name) => `Tonight: ${name}`,
    canvasPersonal: 'Personal Cosmology',
    canvasFooter: 'Every reading is one possibility. You write your story.',
    statPersonalYear: (year, py) => `Personal Year ${py} in ${year}`,
    statBirthCard: 'Birth card',
    nameSuffix: '',
    bornLine: (birth, age) => `Born ${birth} · age ${age}`,
    lifePathLine: (lp, label) => `Life Path ${lp} — ${label}`,
    stats: {
      sun: 'Sun sign',
      zodiac: 'Chinese zodiac',
      kyusei: 'Kyusei star',
      animal: 'Animal type',
      tarot: 'Tarot',
      moon: 'Tonight\'s moon'
    },
    birthDate: (y, m, d) => `${m}/${d}/${y}`,
    tweetHeader: '✦ COSMIC ID ✦',
    tweetLifePath: (lp, label) => `Life Path ${lp} · ${label}`,
    tweetTarot: (name) => `Tarot: ${name}`,
    tweetPersonalYear: (year, py) => `${year} · Personal Year ${py}`,
    tweetSep: ' | '
  },
  premiumShowcase: {
    roadmapSummary: 'See Premium roadmap',
    note: 'Use “Preview deep readings (demo)” in the form to preview locked content. The core experience stays free.',
    optionalEyebrow: 'Optional · Premium',
    freeIncludesTitle: 'Included free',
    ariaLabel: 'Premium plan'
  }
};
