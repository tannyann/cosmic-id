/** Hebrew diagnosis UI patch — merged onto ES via mergeConfig */
import { luckyBody } from './helpers.js';

export const HE_PATCH = {
  header: { eyebrow: 'קוסמולוגיה אישית', subtitle: 'תשע עשרה סיפורים, אהבה והתאמה' },
  sections: {
    numerology: ['נומרולוגיה', ''],
    western: ['אסטרולוגיה מערבית', ''],
    eastern: ['גורל מזרחי', ''],
    characters: ['ארכיטיפים', ''],
    sacred: ['מאיה וטארוט', ''],
    nature: ['סמלי טבע', ''],
    cycles: ['גלים של היום', ''],
    lifeMap: ['מפת חיים', '']
  },
  bio: { physical: 'גופני', emotional: 'רגשי', intellectual: 'שכלי', intuitive: 'אינטואיטיבי' },
  modal: {
    deepRead: 'קרא עמוק יותר',
    premiumBadge: 'קריאה עמוקה (חינם)',
    premiumPitch: 'העמק',
    premiumCta: 'ראה תוכן עמוק',
    close: 'סגור'
  },
  premiumShowcase: {
    roadmapSummary: 'ראה את התכונות',
    note: 'כל הקריאות חינם — הקש על כרטיס כדי לחקור פרקים עמוקים יותר.',
    optionalEyebrow: 'כלול בחינם',
    freeIncludesTitle: 'כלול בחינם',
    allFreeTitle: 'גם זה כלול — ללא מנוי',
    allFreeNote: 'כל התכונות בדף זה חינם. הקריאות מציגות אפשרויות; את/ה כותב/ת את הסיפור שלך.',
    ariaLabel: 'מה כלול'
  },
  gloss: {
    stripTitle: 'מילון מהיר — הקש על ? בכל כרטיס',
    tipAria: (term) => `מה פירוש «${term}»?`
  },
  form: {
    birthMonthLabel: 'חודש', birthDayLabel: 'יום', birthYearLabel: 'שנה',
    birthMonthPlaceholder: 'חודש', birthDayPlaceholder: 'יום', birthYearPlaceholder: 'שנה'
  },
  cards: {
    lifepath: 'מספר נתיב החיים', personalYear: 'שנה אישית', expression: 'מספר השם',
    expressionLabel: 'תדירות השם שלך', sun: 'מזל השמש', moonTrait: 'נטיית הירח',
    moonTraitLabel: 'משלב הירח בלידה', moonTraitNote: 'מזל ירח מדויק דורש שעת לידה',
    zodiac: 'המזל הסיני', sixty: 'עמוד השנה (60 גזעים-ענפים)', kyusei: 'כוכב החיים קיוסי',
    gogyou: 'חמשת האלמנטים', animal: 'ארכיטיפ חיה', celtic: 'עץ קלטי', maya: 'KIN מאיה',
    tarotBirth: 'קלף לידה', tarotDaily: 'קלף היום', birthstone: 'אבן לידה',
    birthflower: 'פרח לידה', biorhythm: 'ביוריתם', moonTonight: 'הירח הלילה',
    lifeStagePrev: 'אבן דרך אחרונה', lifeStageNext: 'אבן דרך הבאה', timeline: 'ציר זמן של 10 שנים',
    timelineLabel: 'העשור הקרוב',
    timelineDesc: 'גל השנה האישית, שנות שיא ואבני דרך — הקש על כל שנה לחקור.',
    unified: 'קריאה מאסטר מאוחדת',
    unifiedDesc: 'תשעה עשר מערכות בסיפור אחד — מהות, אהבה, עבודה ומצפן מזל.'
  },
  fmt: {
    yearYou: (y) => `את/ה ב-${y}`,
    bornYearZodiac: (char) => `נולד/ה בשנת ה${char}`,
    sixtyDesc: (el) => `חותם שחוזר כל 60 שנה. נושא את טבע ה${el}.`,
    kyuseiStar: (el) => `כוכב ${el}`,
    gogyouLabel: 'אלמנט שנת הלידה',
    animalNum: (n) => `סוג ${n}/60`,
    animalFallback: 'נוכחות עם אופי ייחודי.',
    celticLabel: 'אחד משלושה עשר העצים הקדושים',
    mayaDesc: 'היום שלך בספירה הקדושה של 260. החותם הוא מהות; הטון, קצב.',
    tarotMajor: (n) => `ארקנה ראשית ${n}`,
    tarotDailyFor: (y, m, d) => `בשבילך ב-${d}/${m}/${y}`,
    monthStone: (m) => `אבן של חודש ${m}`,
    monthFlower: (m) => `פרח של חודש ${m}`,
    birthflowerDesc: 'סמל של חודש הלידה שלך. להחזיק אותו קרוב עשוי לעזור להרגיש מעוגן.',
    biorhythmDays: (days, tag) => `ביוריתם — יום ${days.toLocaleString(tag)} מאז הלידה`,
    moonPhasePct: (pct) => `שלב ${pct}% · הירח נוגע בכל חיים. מה הוא עשוי לשאול אותך הלילה?`,
    bornOn: (y, m, d) => `נולד/ה ב-${d}/${m}/${y}`,
    ageNow: (age) => `עכשיו <strong>${age}</strong> שנים`,
    nextMilestone: (age, name) => `אבן דרך הבאה: <strong>${age} שנים — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `אבן הדרך הבאה שלך היא <strong>${name} בגיל ${age}</strong>. בעוד כ-<strong>${years} שנים</strong>.`,
    elementOf: (el) => `אלמנט ${el}`,
    ageYears: (n) => `${n} שנים`,
    summaryLabel: 'הסיפור שלך',
    summaryLead: (name, label) => `${name}, נאמר שאת/ה נושא/ת את נשמת <strong>${label}</strong>.`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `באסטרולוגיה מערבית, השמש שלך ב<strong>${sun}</strong> (אלמנט ${sunEl}); ` +
      `בלוח המזרחי, <strong>${cz}</strong>; בקיוסי, <strong>${ks}</strong>; ` +
      `עם <strong>${gy}</strong> בליבה. חוכמת החיות קוראת לך <strong>${an}</strong>; עץ השמירה שלך הוא <strong>${ct}</strong>. ` +
      `בספירה המאיה: <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>; ארכיטיפ טארוט: <strong>${tb}</strong>.`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `ב-${year}, את/ה גולש/ת על גל <strong>שנה אישית ${py}</strong>. הביוריתם מציע ${bioState}. ` +
      `את/ה נושא/ת את מצב הרוח של <strong>${mt}</strong>; הלילה, <strong>${mp}</strong> מאיר/ה אותך. ${nextHtml}`,
    summaryHint: '↓ הקש על כרטיס לקריאה עמוקה יותר',
    bioUp: '<strong>שלב עולה</strong> (מתאים לפעולה וביטוי)',
    bioDown: '<strong>שלב של התבוננות פנימה</strong> (מתאים למנוחה וסידור)',
    bioBalanced: '<strong>שלב מאוזן</strong>',
    personalYearWave: (year) => `שנה אישית ${year}`,
    cardMore: 'קרא עמוק יותר',
    cardMoreAria: '. פתח פרטים',
    cardAria: (system, value) => `${system}, ${value}`,
    expressionHintAddRoman: 'הוסף/י כתיב לטיני כדי לראות גם את מספר השם הבינלאומי.',
    expressionLatinInvalid: 'לא נמצאו אותיות A–Z בשדה הרומי — המספר הבינלאומי לא הוצג.'
  },
  love: {
    eyebrow: 'ארכיטיפ אהבה', title: 'קריאת אהבה', phaseLabel: 'שלב אהבה נוכחי',
    sweetTitle: 'נקודות המתוקות שלך באהבה', careTitle: 'תזכורות עדינות',
    matchesTitle: 'סוגים שאת/ה מתיישב/ת איתם', actionLabel: 'צעד קטן הלילה להזמנת קשר',
    cta: 'סקרן/ית לגבי מישהו? נסה/י קריאת התאמה',
    footnote: 'זו אפשרות אחת. את/ה כותב/ת את סיפור האהבה שלך.',
    shareTitle: 'שתף/י קריאת אהבה', shareDesc: 'שמור/י את התמונה ופרסם/י ב-X או LINE.',
    sharePreviewAria: 'תצוגה מקדימה של כרטיס אהבה', shareAlt: (name) => `כרטיס אהבה של ${name}`,
    shareSaved: 'התמונה נשמרה', shareCopied: 'הטקסט הועתק', shareCopyFail: 'לא ניתן להעתיק', shareFail: 'לא ניתן לשתף'
  },
  compat: {
    eyebrow: 'התאמה', title: 'קרא/י התאמה יחד',
    lead: 'הזן/י שם ותאריך לידה נוספים כדי לשקף התאמה בחמישה צירים.',
    leadSub: 'בן/בת זוג, חבר/ה, משפחה או מישהו שאת/ה מעריך/ה — כל אחד.',
    nameLabel: 'שמו/ה', birthLabel: 'תאריך הלידה שלו/ה', namePlaceholder: 'לדוגמה: דנה כהן',
    submit: 'הצג התאמה',
    disclaimer: 'הקריאות מציגות אפשרויות. הקשר האמיתי שלכם הוא הסיפור שאתם כותבים יחד.',
    resultEyebrow: 'שני סיפורים שזורים', overallLabel: 'כללי',
    footnote: 'המספרים הם מדריך בלבד. הקשרים משנים צורה יום אחר יום.',
    radarAria: 'תרשים רדאר התאמה בחמישה צירים', lifePathValue: (n) => `נתיב חיים ${n}`
  },
  timeline: {
    eyebrow: 'קריאה אינטראקטיבית', title: 'ציר זמן של 10 שנים', subtitle: 'קצב השנה האישית שלך בעשור הקרוב',
    intro: 'כל עמודה היא שנה אישית (1–9). הקש/י על שנה לקרוא את נושאה; ✦ מסמן אבן דרך בחיים.',
    ageLabel: 'גיל', pyLabel: 'שנה אישית', yearLabel: 'שנה', milestoneLabel: 'אבן דרך בחיים',
    thisYear: 'השנה', milestoneHere: 'שנת אבן דרך', ageAt: (age) => `בגיל ${age}`,
    pyHeading: (py, theme) => `שנה אישית ${py} · ${theme}`,
    pyThemes: {
      1: 'התחלות חדשות', 2: 'סבלנות וקשרים', 3: 'ביטוי ושמחה',
      4: 'בניית יסודות', 5: 'שינוי וחופש', 6: 'אחריות ואהבה',
      7: 'התבוננות פנימה', 8: 'קציר', 9: 'השלמה ושחרור'
    }
  },
  master: {
    title: 'קריאת מאסטר', intro: 'פרקים עמוקים יותר, פתוחים לכולם. הקש/י על כל אחד לחקור.',
    expandAll: 'פתח הכל', collapseAll: 'סגור הכל'
  },
  extended: {
    moon: {
      title: 'לוח ירח ל-12 חודשים',
      intro: 'מולדות וירחים מלאים קרובים — הקש/י על תאריך לטקס פשוט. ✦ מסמן תהודה עם שלב הירח בלידה.',
      tapHint: 'הקש/י על תאריך מולד או ירח מלא כדי לפתוח הצעת טקס.',
      newMoon: 'מולד', fullMoon: 'ירח מלא',
      resonance: 'שלב זה עשוי להדהד את ירח הלידה שלך — נקודת מפנה אישית במחזור הירח.',
      ritualNew: 'כתוב/י משאלה או כוונה על נייר. שתול/י זרע, ממשי או במטפורה. התחל/י משהו קטן שתוכל/י לטפל בו 29 יום.',
      ritualFull: 'אמור/י שלושה דברים שאת/ה אסיר/ת תודה עליהם. שחרר/י הרגל או סיפור שכבר לא מתאים. תן/י לאור הירח להיות מראה, לא שופט.'
    },
    biorhythm: {
      title: 'תחזית ביוריתם ל-90 יום',
      intro: 'ארבע גלים מהלידה — הקש/י על יום לקרוא את קצבו. נקודות מסמנות ימים קריטיים בחציית אפס.',
      legend: 'נקודה טורקיז = יום קריטי · מסגרת זהובה = היום', today: 'היום', critical: 'יום קריטי',
      rising: 'גל עולה', falling: 'גל יורד', neutral: 'קרוב לאיזון',
      waves: { physical: 'גופני', emotional: 'רגשי', intellectual: 'שכלי', intuitive: 'אינטואיטיבי' },
      actionHigh: 'יום שעשוי לטוב לפעולה, תנועה וביטוי חיצוני.',
      actionLow: 'יום שעשוי לטוב למנוחה, הגנה וסידור שקט.',
      actionMid: 'יום מעבר — לא שיא ולא שפל. התקדם/י בעדינות.'
    },
    unified: {
      eyebrow: 'קריאה מורחבת', title: 'קריאה מאסטר מאוחדת', subtitle: 'תשע עשרה סיפורים, חוט אחד',
      intro: 'סינתזה בין-מערכתית — לא פסק דין, אלא מפה בקצב שלך.',
      expandAll: 'פתח הכל', collapseAll: 'סגור הכל',
      footnote: 'כל חוט כאן הוא אפשרות אחת. את/ה בוחר/ת מה זה אומר.',
      chapterEssence: 'המהות המרכזית שלך', chapterYear: 'מוקד השנה', chapterLove: 'אהבה וקשר',
      chapterWork: 'עבודה וביטוי', chapterShadow: 'צל לכבד', chapterLucky: 'מצפן מזל',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name} — כ<strong>${lpLabel}</strong>, נתיב החיים שלך עשוי להתמקד ב: ${lpDesc}</p>
         <p>השמש שלך ב<strong>${sun}</strong>, שנת ה<strong>${zodiac}</strong> ו<strong>${kyusei}</strong> עשויים להישזר כתווים שונים של אותו אקורד.</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p>ב-<strong>${year}</strong>, השנה האישית שלך היא <strong>${py}</strong>. ${pyMeaning}</p>
         <p>גל השנה עשוי להזמין אותך ללכת עם הזרם, לא נגדו.</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>עם החום <strong>${sunEl}</strong> של מזל השמש והארכיטיפ <strong>${animal}</strong>, קשר עשוי לזרום טוב יותר כשמכבדים עדינות ועצמאות.</p>
         <p>נתיב חיים <strong>${lp}</strong> עשוי לצבוע איך את/ה נותן/ת ומקבל/ת — לא כסוג קבוע, אלא נושא חוזר.</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p>אנרגיית <strong>${lpLabel}</strong> עשויה להתבטא בעבודה כמטרה, לא רק כיעילות.</p>
         ${exprNum ? `<p>תדירות השם <strong>${exprNum}</strong> עשויה להוסיף שכבה נוספת לאיך רואים אותך.</p>` : ''}`,
      shadowHints: {
        1: 'שים/י לב לבידוד כשמנהיגות הופכת לשליטה',
        2: 'שים/י לב לאיבוד עצמך בשם שמירת שלום',
        3: 'שים/י לב להישאר על פני השטח',
        4: 'שים/י לב לנוקשות כשביטחון מרגיש מאוים',
        5: 'שים/י לב לחוסר מנוחה שממנעת מחויבות',
        6: 'שים/י לב לטיפול שהופך לשליטה',
        7: 'שים/י לב לנסיגה כשהעולם רועש מדי',
        8: 'שים/י לב לקשיחות כשכוח נדיר',
        9: 'שים/י לב לאידיאלים שעולים על הגוף',
        default: 'שים/י לב כשהחוזק שלך נוטה ליתר'
      },
      shadowBody: (lp, hint) =>
        `<p>לכל מתנה יש צל. עבור נתיב <strong>${lp}</strong>, קצה הצמיחה עשוי להיות: ${hint}.</p>
         <p>לתת שם לצל אינו תבוסה — אולי זה הצעד הראשון לאיזון.</p>`,
      luckyBody: (colors, numbers, days, hint) =>
        luckyBody({ colors: 'צבעים', numbers: 'מספרים', days: 'ימים' }, colors, numbers, days, hint)
    }
  },
  deep: {
    scrollMoon: 'עבור ללוח הירח ↑', scrollBio: 'עבור לתחזית 90 יום ↑',
    scrollTimeline: 'עבור לציר הזמן של 10 שנים ↑',
    prompts: {
      generic: [
        { q: 'למה זה עשוי להזמין אותי לשים לב?', a: 'שהה/י דקה עם נושא הפרק. מה שעולה ראשון עשוי להיות הרמז שלך — לא פסק דין.' },
        { q: 'צעד קטן השבוע?', a: 'בחר/י פעולה קטנה מספיק להיום. קריאות מורחבות עובדות טוב יותר כניסויים עדינים.' }
      ]
    },
    personalYear: {
      thisMonth: 'החודש', personalMonth: (n) => `חודש אישי ${n}`,
      tagAction: 'פעולה', tagWait: 'טיפוח', tagWatch: 'שימת לב',
      ritualHint: 'בחודשי שימת לב: החלטות איטיות, יותר מנוחה וטקס של היציבות עשויים לעזור.',
      noWatch: 'אין חודשים אישיים של שימת לב גבוהה השנה — קצב יציב יותר.',
      pathSuffix: (lp) => `נתיב-${lp}`,
      encounterHint: (py) => `עשוי להופיע כשנושאי שנה אישית ${py} פעילים`,
      encounterDetail: (type, el, py) => `קשרים «${type}» עשויים לשקף את עונת אלמנט ${el} שלך.`,
      keywords: {
        1: ['זרע', 'אומץ', 'התחלה'], 2: ['סבלנות', 'קשר', 'הקשבה'],
        3: ['שמחה', 'ביטוי', 'חיבור'], 4: ['בנייה', 'סדר', 'שורש'],
        5: ['שינוי', 'חופש', 'חקירה'], 6: ['אהבה', 'בית', 'טיפול'],
        7: ['שקט', 'לימוד', 'פנימיות'], 8: ['קציר', 'כוח', 'קבלה'],
        9: ['שחרור', 'השלמה', 'סליחה'], default: ['זרימה', 'אמון', 'פתיחות']
      },
      encounterTypes: {
        fire: ['ניצוץ', 'מדריך/ה', 'בעל ברית'],
        water: ['מרפא/ה', 'מראה', 'מדריך/ה'],
        earth: ['בונה/ת', 'עוגן', 'מורה/ה'],
        air: ['שליח/ה', 'שותף/ה', 'נושא/ת רעיונות'],
        wood: ['מטפח/ת', 'בן/בת לוויה', 'סייר/ת'],
        metal: ['מזקק/ת', 'מאתגר/ת', 'זקן/נה'],
        default: ['בעל ברית', 'מראה', 'מדריך/ה']
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) => `נתיב חיים ${lp} עם שנה אישית ${py}: ${pyMeaning}`,
      yearWaveHint: 'פתח/י את כרטיס ציר הזמן של 10 שנים במפת החיים לעשור המלא.',
      resonateLabel: 'עשוי להדהד', resonateText: (a, b) => `אחרים בנתיבים ${a} או ${b} עשויים להרגיש מוכרים.`,
      growLabel: 'עשוי לעודד צמיחה', growText: (a, b) => `נתיבים ${a} או ${b} עשויים לאתגר — חיכוך שעשוי להרחיב עם סקרנות.`,
      careLabel: 'בזהירות', careText: (n) => `אנרגיית נתיב ${n} עשויה להרגיש אינטנסיבית — כדאי לשים גבולות מודעים.`,
      careerNatural: 'התאמה טבעית', careerNaturalText: (lp) => `תפקידים שבהם מתנות נתיב ${lp} זורחות בלי מאמץ.`,
      careerStretch: 'אזור מתיחה', careerStretchText: (n) => `פרויקטים שלוקחים אנרגיה מנתיב ${n} עשויים לפתוח כישורים נסתרים.`,
      careerRest: 'צורת מנוחה', careerRestText: (lp) => `איך את/ה משתקם/ת חשוב. נתיב ${lp} עשוי לדרוש סוג מסוים של הפסקה.`,
      soulQ1: 'מה חוזר בחיים שלי?', soulA1: (lp) => `נתיב ${lp} עשוי להביא את אותו שיעור בלבושים שונים.`,
      soulQ2: 'איך «מספיק» נראה?', soulA2: 'שיעורי הנשמה לעיתים מסתתרים בשאיפה. הגדר/י מספיק לעונה הזו.',
      figures: {
        1: [{ name: 'חלוצים', note: 'לא לחקות — לשים לב איך אומץ נראה בבחירות שלהם.' }],
        2: [{ name: 'בוני גשרים', note: 'מי שמחברים בלי להיות במרכז.' }],
        3: [{ name: 'אמנים וספררים', note: 'שמחה כשליחות.' }],
        4: [{ name: 'אומנים', note: 'סבלנות שנעשית גלויה.' }],
        5: [{ name: 'חוקרים', note: 'חופש עם אחריות.' }],
        6: [{ name: 'מגינים', note: 'אהבה שלא חונקת.' }],
        7: [{ name: 'מחפשים', note: 'אמת על פני נוחות.' }],
        8: [{ name: 'בוני מורשת', note: 'כוח שזורם.' }],
        9: [{ name: 'אנשי שליחות', note: 'השלמה כמתנה.' }],
        11: [{ name: 'מאירים', note: 'רגישות כשירות.' }],
        22: [{ name: 'בוני מאסטר', note: 'חלומות עם יסודות.' }],
        33: [{ name: 'מורים לאהבה', note: 'ללא תנאי כתרגול.' }]
      }
    },
    sun: {
      elementMap: {
        fire: { direction: 'דרום · אש', season: 'חום הקיץ עשוי לשקף את זוהרך — פעל/י כשהאנרגיה עולה.', ritual: 'נר, אור שמש או תנועה בוקר.' },
        earth: { direction: 'מרכז · אדמה', season: 'עונות הקציר עשויות לעגן אותך — בנה/י כשהגוף יציב.', ritual: 'רגליים יחפות באדמה, בישול איטי, השלמת משהו מוחשי.' },
        air: { direction: 'מזרח · אוויר', season: 'רוחות האביב עשויות לעורר רעיונות — דבר/י כשהנשימה קלה.', ritual: 'יומן של שלוש משפטים, הליכה בלי אוזניות, הודעה כנה.' },
        water: { direction: 'מערב · מים', season: 'עומק החורף עשוי לקרוא פנימה — הרגש/י לפני שמחליטים.', ritual: 'אמבטיה חמה, התבוננות בירח, קבלת דמעות בלי סיפור.' },
        wood: { direction: 'מזרח · עץ', season: 'עונות הצמיחה מעודדות זריעה — התחל/י קטן, דאג/י לעיתים קרובות.', ritual: 'צמח ירוק לידך, הרגל של 29 יום.' },
        metal: { direction: 'מערב · מתכת', season: 'בהירות הסתיו עשויה לעזור לזקק — שחרר/י מה שכבר לא חד.', ritual: 'רוקן/י מגירה אחת, בגדים לבנים, נשיפה ארוכה מהשאיפה.' }
      }
    },
    kyusei: {
      phases: {
        1: 'שנה 1 במחזור: זריעת נושאי honmei.', 2: 'שנה 2: סבלנות ושותפות.',
        3: 'שנה 3: ביטוי ונראות.', 4: 'שנה 4: יסודות.',
        5: 'שנה 5: שינוי ותנועה.', 6: 'שנה 6: אחריות ובית.',
        7: 'שנה 7: התבוננות פנימה.', 8: 'שנה 8: קציר.',
        9: 'שנה 9: סיום — הכנה לסיבוב חדש.', default: 'נקודה במחזור honmei של 9 שנים.'
      }
    },
    tarot: {
      light: 'פנים של אור', shadow: 'פנים של צל',
      lightText: (name) => `${name} ישרה: מתנת הנשמה בצורתה הברורה ביותר.`,
      shadowText: (name) => `${name} הפוכה: לא עונש — הקלף מבקש שילוב. איפה זה כבד? המשקל הזה עשוי להיות שינוי שדופק בדלת.`
    }
  }
};
