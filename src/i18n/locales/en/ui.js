/** English UI strings */
export const ui = {
  meta: {
    title: 'COSMIC ID — Personal Cosmology',
    description: 'Cross-read numerology, astrology, Kyusei, and more from your birth date and name. Includes love archetype and compatibility readings.',
    ogTitle: 'COSMIC ID — Personal Cosmology',
    ogDescription: 'Nineteen stories within you — plus your love type and compatibility. Many systems, one reading.',
    label: 'English'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'Nineteen stories — plus love and compatibility readings'
  },
  form: {
    nameLabel: 'Your name',
    namePlaceholder: 'e.g. Alex Morgan',
    privacyNote: 'Your input is processed only on this device — nothing is sent to a server.',
    birthLabel: 'Date of birth',
    birthMonthLabel: 'Month',
    birthDayLabel: 'Day',
    birthYearLabel: 'Year',
    birthMonthPlaceholder: 'Month',
    birthDayPlaceholder: 'Day',
    birthYearPlaceholder: 'Year',
    submit: 'Reveal',
    freeBadge: 'Everything is free',
    premiumDemo: 'Preview deep readings (demo)',
    premiumDemoTitle: 'Preview Premium deep readings (core experience stays free)',
    profileRestored: 'Restored your last entry. Saved on this device only.'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'Every reading is one possibility. You write your story.',
    legal: 'Legal'
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
    lifeStageNext: 'Next Milestone',
    timeline: '10-Year Timeline',
    timelineLabel: 'The decade ahead',
    timelineDesc: 'Your personal-year wave, peak years, and milestones — tap to explore each year.',
    unified: 'Unified Master Reading',
    unifiedDesc: 'Nineteen systems woven into one story — essence, love, work, and your lucky compass.'
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
    personalYearWave: (year) => `Personal Year ${year}`,
    expressionValueDual: (n, l) => `${n} · ${l}`,
    expressionLabelDual: 'Display name / Roman letters',
    expressionLabelNative: 'Name vibration (display script)',
    expressionDescDual: (n, l, nativeDesc, latinDesc) =>
      `<p class="expression-line"><strong>${n}</strong> (glyph sketch) — ${nativeDesc}</p>` +
      `<p class="expression-line"><strong>${l}</strong> (Pythagorean A–Z) — ${latinDesc}</p>` +
      '<div class="note">Glyph counting is not classical Western numerology. Roman letters follow the usual A–Z chart (master numbers 11, 22, 33 may appear).</div>',
    expressionDescNative: (desc, hint) =>
      `${desc}<div class="note">Non-Latin scripts use a simple Unicode glyph sum — exploratory, not traditional. ${hint}</div>`,
    expressionHintAddRoman: 'Add a Roman or Latin spelling to also see the international name number.',
    expressionLatinInvalid: 'No A–Z letters were found in the Roman field, so the international number was not shown.'
  },
  bio: { physical: 'Physical', emotional: 'Emotional', intellectual: 'Intellectual', intuitive: 'Intuitive' },
  modal: {
    deepRead: 'Read deeper',
    premiumBadge: 'Extended reading',
    premiumPitch: 'Go deeper',
    premiumSub: (line0, line1, chapters) =>
      `${line0} ${line1} (<strong>${chapters} chapters</strong> in this card).`,
    premiumCta: 'See Premium content',
    premiumUnlockPitch: 'Unlock the deep layer',
    premiumUnlockSub: (n) =>
      `Master-class readings span ${n} sections: ten-year cycles, compatibility, vocation, soul themes, and finer calculations.`,
    close: 'Close'
  },
  cyclesPlanner: {
    title: '30-Day Cycle Planner',
    titleEn: 'Cycles',
    intro: 'Personal month, lunar phase, biorhythm, and Kyusei day star — the next 30 days at a glance. Tap a date to read more.',
    tapHint: 'Tap any day for details.',
    stripAria: 'Next 30 days',
    today: 'Today',
    personalYearLabel: 'Personal year',
    personalMonthLabel: 'Personal month',
    moonLabel: 'Moon phase',
    bioLabel: 'Biorhythm',
    kyuseiDayLabel: 'Kyusei day star',
    lunarNew: 'New moon',
    lunarFull: 'Full moon',
    bioPeak: 'High',
    bioLow: 'Low',
    bioMid: 'Mid',
    bioCross: 'Zero crossing',
    bioLabels: {
      physical: 'Physical',
      emotional: 'Emotional',
      intellectual: 'Intellectual',
      intuitive: 'Intuitive'
    },
    bioHint: (key, val) => ({
      physical: val > 0 ? 'A day when movement may feel natural.' : 'Rest and recovery may serve you better.',
      emotional: val > 0 ? 'Emotional waves may run higher.' : 'A good day to tend your inner world.',
      intellectual: val > 0 ? 'Mental clarity may peak.' : 'Deep thinking might wait — let the mind breathe.',
      intuitive: val > 0 ? 'Insights may arrive easily.' : 'Trust feeling over logic for now.'
    })[key] ?? ''
  },
  timeline: {
    eyebrow: 'Interactive reading',
    title: '10-Year Timeline',
    subtitle: 'Your personal-year rhythm for the decade ahead',
    intro: 'Each bar is a personal year (1–9). Tap a year to read its theme; ✦ marks a life milestone.',
    ageLabel: 'Age',
    pyLabel: 'Personal Year',
    yearLabel: 'Year',
    milestoneLabel: 'Life milestone',
    thisYear: 'This year',
    milestoneHere: 'A milestone year',
    ageAt: (age) => `Turning ${age}`,
    pyHeading: (py) => `Personal Year ${py} · ${({
      1: 'New beginnings', 2: 'Patience & bonds', 3: 'Expression & joy',
      4: 'Building foundations', 5: 'Change & freedom', 6: 'Responsibility & love',
      7: 'Introspection', 8: 'Harvest', 9: 'Completion & release'
    })[py] ?? ''}`,
    sectionTitle: 'Your 100-year clock',
    sectionLead: 'Personal Year cycles, life milestones, and biorhythm woven into one map.',
    today: 'TODAY',
    legendPY: 'Personal Year',
    legendMS: 'Life Milestones',
    legendBio: 'Biorhythm (±60 days)',
    dateLabel: 'Date',
    saturnReturn1: 'First Saturn Return',
    saturnReturn2: 'Second Saturn Return',
    saturnReturn3: 'Third Saturn Return',
    jupiterReturn: 'Jupiter Return',
    midlife: 'Midlife threshold',
    chironReturn: 'Chiron Return',
    footnote: 'Drag along the timeline to look at any moment.'
  },
  depth: {
    tabWhat: 'Meaning',
    tabHow: 'Computation',
    tabWhere: 'History',
    tabWho: 'Resonant lives',
    timelineTitle: 'Timeline',
    modernTitle: 'Today',
    refsTitle: 'Further reading',
    emptyComputation: 'No computation trace yet.',
    emptyHistory: 'No history yet.',
    emptyFamous: 'No matching entries yet.',
    famousCaption: 'People who share {value}'
  },
  whatif: {
    title: 'What if you were born on a different day?',
    lead: 'Shift your birth date and see how the 19 systems shift with you. Read your own contingency.',
    base: 'Actual day',
    shifted: 'What-if day',
    antipode: 'Other side of the Earth',
    noDiff: 'This shift leaves the main 14 axes unchanged.',
    diffTemplate: '{n} axes changed'
  },
  starmap: {
    ctaLabel: 'Reveal your star map',
    close: 'Close',
    downloadSVG: 'Download SVG',
    downloadPNG: 'Download PNG',
    print: 'Print',
    saved: 'Saved',
    caption: 'Your personal star map. Frame it, share it.'
  },
  master: {
    title: 'Master reading',
    intro: 'Deeper chapters, opened for everyone. Tap each to explore.',
    expandAll: 'Open all',
    collapseAll: 'Close all'
  },
  extended: {
    moon: {
      title: '12-month moon calendar',
      intro: 'New and full moons ahead — tap a date for a simple ritual. ✦ marks resonance with your birth moon phase.',
      tapHint: 'Tap a new or full moon date to open a ritual suggestion.',
      newMoon: 'New moon',
      fullMoon: 'Full moon',
      resonance: 'This phase may echo your birth moon — a personal turning point in the lunar cycle.',
      ritualNew: 'Write one wish or intention on paper. Plant a seed, literal or metaphorical. Begin something small you can tend for 29 days.',
      ritualFull: 'Name three things you are grateful for. Release one habit or story that no longer fits. Let the moonlight be a mirror, not a judge.'
    },
    biorhythm: {
      title: '90-day biorhythm forecast',
      intro: 'Four waves from your birth date — tap a day to read its rhythm. Dots mark critical days when a wave crosses zero.',
      legend: 'Teal dot = critical day · gold border = today',
      today: 'Today',
      critical: 'Critical day',
      rising: 'Rising wave',
      falling: 'Falling wave',
      neutral: 'Near balance',
      waves: {
        physical: 'Physical',
        emotional: 'Emotional',
        intellectual: 'Intellectual',
        intuitive: 'Intuitive'
      },
      actionHint: (v) => v > 0.3
        ? 'A day that may favor action, movement, and outward expression.'
        : v < -0.3
          ? 'A day that may favor rest, protection, and quiet consolidation.'
          : 'A transitional day — neither peak nor trough. Move gently.'
    },
    lifepath: { title: 'Life path explorer', intro: 'Tap a number to explore its mood — your path is highlighted.' },
    personalYear: { title: '9-year wave', intro: 'Where you are in your personal year cycle this calendar year.', hint: 'Open the 10-year timeline in Life Map for the full decade.' },
    expression: { title: 'Name vibrations', intro: 'How your display name and optional Roman spelling may read differently.', nativeLabel: 'Display name', latinLabel: 'Roman / Latin', hint: 'Different numbers are lenses — not a contest for which is correct.' },
    sun: { title: 'Sun sign map', intro: 'Twelve signs of the zodiac — tap to explore each mood.' },
    moonTrait: { title: 'Birth moon phases', intro: 'Four phase families — tap to read emotional rhythm.' },
    zodiac: { title: 'Chinese zodiac wheel', intro: 'Twelve animals of the year cycle.' },
    sixty: { title: '60-year pillar cycle', intro: 'Your position in the sexagenary cycle — scroll and tap.' },
    kyusei: { title: 'Nine Star Ki map', intro: 'Nine honmei stars — tap to explore each quality.' },
    gogyou: { title: 'Five elements', intro: 'Wood, fire, earth, metal, water — tap each mood.' },
    animal: { title: 'Animal archetypes', intro: 'Twelve animal types in the 60-day personality cycle.' },
    celtic: { title: 'Celtic tree wheel', intro: 'Thirteen sacred trees — tap to explore.' },
    maya: { title: 'Maya seals', intro: 'Twenty solar seals on the 260-day Tzolk\'in.' },
    tarotBirth: { title: 'Major Arcana', intro: 'Twenty-two soul cards — tap a number.' },
    tarotDaily: { title: 'Seven-day card strip', intro: 'Cards drawn from your name and each date — tap a day.' },
    birthstone: { title: 'Birthstone calendar', intro: 'Twelve months, twelve guardian gems.' },
    birthflower: { title: 'Birth flower calendar', intro: 'Twelve blooms — tap to explore.' },
    unified: {
      eyebrow: 'Extended reading',
      title: 'Unified Master Reading',
      subtitle: 'Nineteen stories, one weave',
      intro: 'A cross-system synthesis — not a verdict, but a map you can read at your own pace.',
      expandAll: 'Open all',
      collapseAll: 'Close all',
      footnote: 'Every thread here is one possibility. You still choose what it means.',
      chapterEssence: 'Your core essence',
      chapterYear: `This year's focus`,
      chapterLove: 'Love & connection',
      chapterWork: 'Work & expression',
      chapterShadow: 'Shadow to honor',
      chapterLucky: 'Lucky compass',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name} — as <strong>${lpLabel}</strong>, your life path may center on: ${lpDesc}</p>
         <p>Your sun in <strong>${sun}</strong>, year of the <strong>${zodiac}</strong>, and <strong>${kyusei}</strong> may weave together as distinct notes in the same chord — each system a different language for the same soul.</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p>In <strong>${year}</strong>, your personal year is <strong>${py}</strong>. ${pyMeaning}</p>
         <p>This year's wave may ask you to move with its current rather than against it — a season with its own tempo.</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>With <strong>${sunEl}</strong> warmth in your sun sign and the <strong>${animal}</strong> archetype, connection may flow best when you honor both tenderness and independence.</p>
         <p>Life path <strong>${lp}</strong> may color how you give and receive — not as a fixed type, but as a recurring theme to notice.</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p><strong>${lpLabel}</strong> energy may express through work as purpose rather than mere productivity. The <strong>${gogyou}</strong> element of your birth year may suggest how you build — steadily, boldly, or through relationship.</p>
         ${exprNum ? `<p>Your name vibration <strong>${exprNum}</strong> may add another layer to how you are seen in the world.</p>` : ''}`,
      shadowBody: (lp) => {
        const hints = {
          1: 'watch for isolation when leadership becomes control',
          2: 'watch for losing yourself while keeping peace',
          3: 'watch for staying on the surface to avoid depth',
          4: 'watch for rigidity when security feels threatened',
          5: 'watch for restlessness that avoids commitment',
          6: 'watch for care that becomes control',
          7: 'watch for withdrawal when the world feels too loud',
          8: 'watch for force when power feels scarce',
          9: 'watch for ideals that outpace the body'
        };
        return `<p>Every gift casts a shadow. For life path <strong>${lp}</strong>, the growth edge may be: ${hints[lp] || 'to notice when your strength tips into excess'}.</p>
                <p>Naming the shadow is not defeat — it may be the first step toward balance.</p>`;
      },
      luckyBody: (colors, numbers, days, hint) =>
        `<div class="lucky-compass">
           <div class="lucky-row"><span class="lucky-label">Colors</span>
             ${colors.map(c => `<span class="lucky-chip">${c}</span>`).join('')}</div>
           <div class="lucky-row"><span class="lucky-label">Numbers</span>
             ${numbers.map(n => `<span class="lucky-chip">${n}</span>`).join('')}</div>
           <div class="lucky-row"><span class="lucky-label">Days</span>
             ${days.map(d => `<span class="lucky-chip">${d}</span>`).join('')}</div>
           <p class="lucky-hint">${hint}</p>
         </div>`
    }
  },
  deep: {
    scrollMoon: 'Jump to moon calendar ↑',
    scrollBio: 'Jump to 90-day forecast ↑',
    scrollTimeline: 'Jump to 10-year timeline ↑',
    scrollExt: 'Jump to interactive explorer ↑',
    scrollExpression: 'Jump to name explorer ↑',
    scrollMoonTrait: 'Jump to moon phases ↑',
    scrollSixty: 'Jump to 60-year cycle ↑',
    scrollAnimal: 'Jump to animal map ↑',
    scrollCeltic: 'Jump to tree wheel ↑',
    scrollTarotDaily: 'Jump to 7-day cards ↑',
    scrollBirthstone: 'Jump to stone calendar ↑',
    scrollBirthflower: 'Jump to flower calendar ↑',
    prompts: {
      forChapter: (cardKey, index) => {
        const generic = [
          { q: 'What might this invite me to notice?', a: 'Sit with the chapter theme for a minute. What feeling or memory surfaces first may be your clue — not a verdict.' },
          { q: 'One small step for this week?', a: 'Choose one action small enough to finish today. Extended readings work best as gentle experiments, not homework.' }
        ];
        if (index >= 2) return generic;
        return index === 1 ? [generic[0]] : generic;
      }
    },
    personalYear: {
      thisMonth: 'This month',
      personalMonth: (n) => `Personal Month ${n}`,
      tagAction: 'Move',
      tagWait: 'Nurture',
      tagWatch: 'Watch',
      ritualHint: 'On watch months: slow decisions, extra rest, and one grounding ritual may help.',
      noWatch: 'No high-watch personal months this year — a steadier rhythm overall.',
      keywords: (py, lp) => {
        const base = {
          1: ['Seed', 'Courage', 'Begin'],
          2: ['Patience', 'Bond', 'Listen'],
          3: ['Joy', 'Express', 'Connect'],
          4: ['Build', 'Order', 'Root'],
          5: ['Change', 'Freedom', 'Explore'],
          6: ['Love', 'Home', 'Care'],
          7: ['Stillness', 'Study', 'Inner'],
          8: ['Harvest', 'Power', 'Receive'],
          9: ['Release', 'Complete', 'Forgive']
        }[py] || ['Flow', 'Trust', 'Open'];
        return [...base.slice(0, 2), `Path-${lp}`];
      },
      encounters: (py, el) => {
        const types = {
          fire: ['Spark', 'Mentor', 'Ally'],
          water: ['Healer', 'Mirror', 'Guide'],
          earth: ['Builder', 'Anchor', 'Teacher'],
          air: ['Messenger', 'Collaborator', 'Idea-bearer'],
          wood: ['Grower', 'Companion', 'Pathfinder'],
          metal: ['Refiner', 'Challenger', 'Elder']
        }[el] || ['Ally', 'Mirror', 'Guide'];
        return types.map((type, i) => ({
          type,
          hint: `May arrive when Personal Year ${py} themes are active`,
          detail: `Connections labeled "${type}" may reflect your ${el} element season — notice who helps you embody this year's wave without forcing outcomes.`
        }));
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) =>
        `Life Path ${lp} meeting Personal Year ${py}: ${pyMeaning}`,
      yearWaveHint: 'Open the 10-Year Timeline card in Life Map for the full decade view.',
      compatBands: (lp) => {
        const rd = (n) => { let x = n; while (x > 9) x = String(x).split('').reduce((s, c) => s + +c, 0); return x; };
        return [
          { kind: 'resonate', label: 'May resonate', text: `Others on paths ${rd(lp + 1)} or ${rd(lp + 2)} may feel familiar — shared rhythm, less explanation needed.` },
          { kind: 'grow', label: 'May stimulate growth', text: `Paths ${rd(lp + 4)} or ${rd(lp + 5)} may challenge you — friction that can become expansion if met with curiosity.` },
          { kind: 'care', label: 'Approach with care', text: `Path ${rd(lp + 8)} energy may feel intense — neither good nor bad, but worth conscious boundaries.` }
        ];
      },
      careerPillars: (lp) => {
        const rd = (n) => { let x = n; while (x > 9) x = String(x).split('').reduce((s, c) => s + +c, 0); return x; };
        return [
          { title: 'Natural fit', text: `Roles where Life Path ${lp} gifts shine without forcing — follow ease, not only ambition.` },
          { title: 'Stretch zone', text: `Side projects that borrow energy from path ${rd(lp + 3)} may unlock hidden skills.` },
          { title: 'Rest shape', text: `How you recover matters. Path ${lp} may need a specific kind of downtime to stay sustainable.` }
        ];
      },
      soulPrompts: (lp) => [
        { q: 'What keeps repeating in my life?', a: `Life Path ${lp} may return to the same lesson in different costumes — name the pattern without judging it.` },
        { q: 'What would "enough" look like?', a: 'Soul lessons often hide inside ambition. Define enough for this season, not forever.' }
      ],
      figures: (lp) => {
        const figs = {
          1: [{ name: 'Pioneering leaders', note: 'Not to imitate — to notice what courage looks like in their choices.' }],
          2: [{ name: 'Bridge-builders', note: 'Those who connect without center stage may mirror your gift.' }],
          3: [{ name: 'Artists & storytellers', note: 'Joy as vocation, not escape.' }],
          4: [{ name: 'Craftspeople', note: 'Patience made visible.' }],
          5: [{ name: 'Explorers', note: 'Freedom with responsibility.' }],
          6: [{ name: 'Caretakers', note: 'Love that does not smother.' }],
          7: [{ name: 'Seekers', note: 'Truth over comfort.' }],
          8: [{ name: 'Builders of legacy', note: 'Power circulated, not hoarded.' }],
          9: [{ name: 'Humanitarians', note: 'Completion as gift.' }],
          11: [{ name: 'Illuminators', note: 'Sensitivity as service.' }],
          22: [{ name: 'Master builders', note: 'Dreams with foundations.' }],
          33: [{ name: 'Teachers of love', note: 'Unconditional as practice, not perfection.' }]
        };
        return figs[lp] || figs[9];
      }
    },
    sun: {
      elementMap: {
        fire: { direction: 'South · Fire', season: 'Summer heat may mirror your radiance — act when energy rises.', ritual: 'Candle, sunlight, or morning movement to honor initiative.' },
        earth: { direction: 'Center · Earth', season: 'Harvest seasons may ground you — build when the body feels steady.', ritual: 'Bare feet on soil, meal cooked slowly, one tangible finished task.' },
        air: { direction: 'East · Air', season: 'Spring winds may stir ideas — speak and connect when breath feels light.', ritual: 'Journal three sentences, walk without headphones, send one honest message.' },
        water: { direction: 'West · Water', season: 'Winter depths may call you inward — feel before deciding.', ritual: 'Warm bath, moon gazing, tears welcomed without story.' },
        wood: { direction: 'East · Wood', season: 'Growth seasons favor planting — start small, tend often.', ritual: 'Green plant nearby, one habit seeded for 29 days.' },
        metal: { direction: 'West · Metal', season: 'Autumn clarity may help you refine — release what dulls.', ritual: 'Declutter one drawer, white clothing, breath to exhale longer than inhale.' }
      },
      houses: [
        { short: 'I', text: 'Self, vitality, first impressions — how you enter a room.' },
        { short: 'II', text: 'Resources, values, what you build and hold.' },
        { short: 'III', text: 'Communication, siblings, short journeys of the mind.' },
        { short: 'IV', text: 'Home, roots, private emotional ground.' },
        { short: 'V', text: 'Creativity, joy, romance, what you birth into the world.' },
        { short: 'VI', text: 'Daily rhythm, service, body care, small useful acts.' },
        { short: 'VII', text: 'Partnership, mirrors, contracts and open dialogue.' },
        { short: 'VIII', text: 'Shared depth, transformation, what is merged or released.' },
        { short: 'IX', text: 'Meaning, travel, philosophy, horizons beyond the familiar.' },
        { short: 'X', text: 'Vocation, reputation, the path others can see.' },
        { short: 'XI', text: 'Community, hopes, friends who stretch your vision.' },
        { short: 'XII', text: 'Dreams, solitude, what works quietly beneath awareness.' }
      ]
    },
    kyusei: {
      cyclePhase: (n) => ({
        1: 'Year 1 of cycle: planting honmei themes — beginnings and fresh direction.',
        2: 'Year 2: patience and partnership — nurture what was planted.',
        3: 'Year 3: expression and visibility — let your star be seen.',
        4: 'Year 4: foundations — steady work, fewer distractions.',
        5: 'Year 5: change and movement — travel or shift may call.',
        6: 'Year 6: responsibility and home — relationships deepen.',
        7: 'Year 7: introspection — study, rest, spiritual tending.',
        8: 'Year 8: harvest — results and recognition may surface.',
        9: 'Year 9: completion — release and prepare for a new 9-year round.'
      })[n] || 'A point in your 9-year honmei cycle.',
      honmeiLabel: 'Honmei star',
      monthLabel: 'Month star',
      dayLabel: 'Day star',
      directionLabel: 'Lucky tones'
    },
    tarot: {
      light: 'Light face',
      shadow: 'Shadow face',
      lightText: (name) => `${name} upright: your soul's gift in its clearest form — courage to embody the card's highest expression.`,
      shadowText: (name) => `${name} reversed: not punishment — the card asking for integration. Where does its lesson feel heavy? That weight may be transformation knocking.`,
      suits: [
        { id: 'wands', label: 'Wands', text: 'Fire · action · will — how you move and initiate.' },
        { id: 'cups', label: 'Cups', text: 'Water · feeling · bonds — how you love and receive.' },
        { id: 'swords', label: 'Swords', text: 'Air · thought · truth — how you name and decide.' },
        { id: 'pentacles', label: 'Pentacles', text: 'Earth · body · craft — how you build and tend.' }
      ]
    },
    gogyou: {
      hint: 'Each birth year carries one of five elemental moods — tap to explore.',
      balanceHint: 'A simplified snapshot — your birth year element may feel strongest.',
      relationLabels: { same: 'Same', generate: 'Supports', overcome: 'Shapes', generated: 'Fed by', overcame: 'Tempered by', neutral: 'Neutral' }
    },
    maya: {
      kin: 'KIN',
      tone: 'Galactic tone',
      seal: 'Solar seal',
      guideLabel: 'Guide KIN',
      antipodeLabel: 'Antipode KIN',
      occultLabel: 'Occult KIN',
      signatureHint: 'Seal, tone, and number together — your galactic signature in brief.'
    },
    zodiac: {
      hint: 'Tap an animal to read its traditional mood.',
      relationLabels: { liuhe: 'Liuhe bond', sanhe: 'Sanhe harmony', chong: 'Chong spark', neutral: 'Neutral' }
    },
    sixty: { stem: 'Heavenly stem', branch: 'Earthly branch', cycle: 'Cycle position', decadeHint: 'Each decade may carry a different shade of your pillar energy.' },
    animal: {
      sixtyHint: 'Personality numbers cycle every 60 days — yours is highlighted.',
      sixtyBody: (n) => `Personality number ${n} — a finer shade within your animal type.`,
      groups: [
        { id: 'moon', label: 'Moon group', text: 'Dreamer types — intuition and imagination may lead.' },
        { id: 'earth', label: 'Earth group', text: 'Realist types — steadiness and practical care.' },
        { id: 'sun', label: 'Sun group', text: 'Sensitive types — warmth and expressive feeling.' }
      ],
      hiddenIntro: 'Under stress, another archetype may surface — not wrong, just a second voice.'
    },
    celtic: {
      seasons: [
        { label: 'Spring', ritual: 'Plant a wish with birch or willow nearby — beginnings honored gently.' },
        { label: 'Summer', ritual: 'Stand in sunlight at oak or holly — strength acknowledged without force.' },
        { label: 'Autumn', ritual: 'Gather one leaf from your tree — release named with gratitude.' },
        { label: 'Winter', ritual: 'Quiet breath before elder or reed — wisdom without hurry.' }
      ]
    },
    moon: {
      personalBody: (birth, today) => `Birth phase: ${birth}. Tonight: ${today}. Notice what repeats when these rhythms meet.`,
      personalHint: 'Not exact moon sign — a gentle lunar mood map.',
      rituals: [
        { id: 'new', label: 'New moon', text: 'Write one intention. Begin something small you can tend for 29 days.' },
        { id: 'full', label: 'Full moon', text: 'Name three gratitudes. Release one story that no longer fits.' }
      ]
    },
    moonTrait: {
      rituals: [
        { id: 'new', label: 'New moon ritual', text: 'Honor beginnings — one page, one seed, one honest sentence.' },
        { id: 'full', label: 'Full moon ritual', text: 'Honor completion — gratitude, tears welcome, no verdict required.' }
      ]
    },
    biorhythm: { noCritical: 'No critical days in the next 90 days — a relatively smooth stretch.', criticalNote: 'Wave crossing zero — move gently, double-check decisions.' },
    birthstone: { colorHint: 'Element color from your lucky compass.', rituals: ['Three breaths with stone at heart.', 'Name one quality to invite.', 'Wear close to skin when you need anchoring.'] },
    birthflower: { essences: ['Gentleness', 'Clarity', 'Courage', 'Joy', 'Patience', 'Devotion'] },
    tarotDaily: { spreadPositions: ['Past', 'Present', 'Future', 'Challenge', 'Crown', 'Root', 'Advice'] },
    lifeStage: {
      pastTags: (lp) => ['Foundation', `Path-${lp}`, 'Integration'],
      futureTags: (py) => ['Seed', `Year-${py}`, 'Harvest']
    },
  },
  narrative: {
    badge: 'AI',
    panelTitle: 'Unified Narrative',
    panelLead: 'Nineteen systems woven into one story — from your birth date and name to this very moment.',
    generating: 'Weaving your story…',
    generateFail: 'Could not generate the narrative',
    sourceLocal: 'Generated from nineteen systems · on your device',
    sourceAi: 'AI-generated from your nineteen systems',
    footnote: 'This is one possibility among many. You still choose what it means.',
    hook: (name, lpLabel) => `${name} — a cosmology written for a soul walking as ${lpLabel}.`,
    para1: (name, lpLabel, lpDesc) =>
      `${name}, numerology may read you as Life Path ${lpLabel ? `"${lpLabel}"` : ''}. ${lpDesc} This is less a fixed personality label than a theme that may return in different costumes across your life.`,
    para2: (sun, sunEl, zodiac, kyusei, gogyou) =>
      `Your sun sign ${sun} (${sunEl}) may show where consciousness likes to shine. In the East, ${zodiac}, Kyusei star ${kyusei}, and Five Elements ${gogyou} — the same soul spoken in different tongues.`,
    para3: (animal, celtic, kin, seal, sixty) =>
      `Animal fortune ${animal}, Celtic tree ${celtic}, Maya KIN ${kin} (seal ${seal}), and stem-branch ${sixty} — character and sacred symbols as mirrors for instinct and daily rhythm.`,
    para4: (tarotBirth, tarotDaily, birthstone, birthflower) =>
      `Tarot birth card "${tarotBirth}" holds a soul theme; today's card "${tarotDaily}" reflects the wind right now. Birthstone ${birthstone} and flower ${birthflower} may anchor you in nature's symbols.`,
    para5: (year, py, pyTheme) =>
      `Personal Year ${py} in ${year}: ${pyTheme} You may move more easily when you ride the year's tempo rather than fight it.`,
    para6: (moonTonight, bioAvg, moonTrait) => {
      const bio = bioAvg > 0.25 ? 'energy may lean upward overall' : bioAvg < -0.25 ? 'rest and reflection may serve you best' : 'a balanced middle phase';
      return `Tonight's moon is ${moonTonight}. Your birth moon phase "${moonTrait}" colors emotional rhythm. Biorhythm suggests ${bio} right now.`;
    },
    para7: (sunEl, lp, expr) => {
      const exprBit = expr ? `Expression number ${expr} may add another layer to how you appear in the world. ` : '';
      return `In love, ${sunEl} warmth and Life Path ${lp} themes of giving and receiving may intertwine. In work, purpose often matters more than output alone. ${exprBit}`;
    },
    para8: (color, day, name) =>
      `Your lucky compass may suggest ${color} tones and small steps on ${day}. ${name}, these nineteen stories are only part of the map — you write the next line.`,
    instagramCaption: (name, hook, excerpt) =>
      `${hook}\n\n${excerpt}\n\n— COSMIC ID\n#COSMICID #cosmology #spirituality #selfdiscovery #astrology #numerology #tarot\n${name}'s nineteen stories`
  },
  narrativeShare: {
    panelTitle: 'Share on Instagram',
    panelDesc: 'Your unified narrative as a 4:5 image card — ready for feed or story.',
    instagramSteps: '① Save image → ② Copy caption → ③ Post on Instagram',
    previewHint: 'Tap to save image',
    saveInstagram: 'Save for Instagram',
    copyCaption: 'Copy caption',
    shareNative: 'Share to Instagram…',
    loading: 'Creating card…',
    loadFail: 'Failed',
    saved: 'Image saved',
    captionCopied: 'Caption copied',
    copyFail: 'Could not copy',
    shareFail: 'Could not share',
    nativeUnsupported: 'Save the image, then open Instagram',
    imageFail: 'Could not generate share image',
    canvasEyebrow: 'Unified Narrative',
    canvasFooter: 'You write your story',
    nameSuffix: '',
    statsLine: (ctx) =>
      `Life Path ${ctx.lp} · ${ctx.sun.symbol} ${ctx.sun.name} · ${ctx.cz.char} · ${ctx.ks.name} · KIN ${ctx.my.kin}`
  },
  share: {
    panelTitle: 'Share',
    panelDesc: 'Share your nineteen-stories card and Instagram narrative image from here',
    panelSteps: '① Save image → ② Post on X, LINE, or Instagram',
    cardSectionTitle: 'Tree of Life card',
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
  love: {
    sectionEyebrow: 'LOVE ARCHETYPE',
    sectionTitle: 'Love reading',
    headingSuffix: '\'s love',
    noPrefix: 'No.',
    phaseLabel: 'Current love phase',
    sweetSpotsTitle: 'Where your love shines',
    caresTitle: 'What to keep in mind',
    matchesTitle: 'Archetypes that resonate',
    actionLabel: 'A small step tonight to invite connection',
    ctaCompat: 'Curious about someone? Try compatibility reading →',
    footnote: 'This is one possibility. You write your own love story.',
    share: {
      panelTitle: 'Share your love reading',
      panelDesc: 'Save the image and post on X or LINE.',
      save: 'Save image',
      copy: 'Copy text',
      canvasHeader: 'Love Archetype',
      canvasTagline: 'A love story only you can write',
      canvasSubtitle: 'Love reading',
      saved: 'Image saved',
      copied: 'Text copied',
      copyFail: 'Copy failed',
      shareFail: 'Share failed',
      imageFail: 'Image generation failed',
      tweetHashtags: '#COSMICID #LoveArchetype',
      tweetCta: 'Read your love archetype →'
    }
  },
  compat: {
    eyebrow: 'Compatibility',
    title: 'Read compatibility together',
    lead: 'Enter another name and birth date to reflect compatibility across five axes.',
    leadSub: 'Partner, friend, family, or someone you admire — anyone.',
    nameLabel: 'Their name',
    birthLabel: 'Their date of birth',
    namePlaceholder: 'e.g. Alex Morgan',
    submit: 'Reveal compatibility',
    disclaimer: 'Readings show possibilities. Your real relationship is the story you two write.',
    resultEyebrow: 'Two stories woven',
    overallLabel: 'Overall',
    footnote: 'Numbers are one guide. Bonds shift shape as you live day by day together.',
    radarAria: 'Five-axis compatibility radar chart',
    lifePathValue: (n) => `Life Path ${n}`
  },
  premiumShowcase: {
    roadmapSummary: 'See Premium roadmap',
    note: 'Core experience stays free. Extended chapters: chapter 1 free, continue with Premium.',
    optionalEyebrow: 'Included free',
    freeIncludesTitle: 'Included free',
    allFreeTitle: 'Also included — no sign-up',
    allFreeNote: 'Nineteen systems, love, compatibility, and sharing stay free. Deeper chapters unlock with Premium.',
    ariaLabel: 'What\'s included'
  },
  gloss: {
    stripTitle: 'Quick glossary — tap ? on any card',
    tipAria: (term) => `What does “${term}” mean?`
  },
  yearlyWrap: {
    bannerTitle: 'Your {year} story',
    bannerSub: 'A one-minute look back at your year',
    close: 'Close',
    eyebrow: 'YOUR YEAR IN',
    tapNext: 'Tap to begin →',
    axisEyebrow: 'This year\'s axis',
    personalYearLabel: 'Personal Year',
    axisLine: '{year} was your Personal Year {py}.',
    rhythmEyebrow: 'Peaks and valleys',
    peakNote: 'was your high wave',
    dipNote: 'was a time to rest',
    milestoneEyebrow: 'Life milestones',
    noMilestones: 'A year without major astrological thresholds — a year to gather strength',
    ms_saturn_return_1: 'First Saturn Return',
    ms_saturn_return_2: 'Second Saturn Return',
    ms_jupiter_return: 'Jupiter Return',
    ms_midlife: 'Midlife threshold',
    ms_chiron_return: 'Chiron Return',
    threeEyebrow: 'Your three faces',
    threeSun: 'Sun',
    threeZodiac: 'Zodiac',
    threeKyusei: 'Kyusei',
    nextEyebrow: 'Looking ahead',
    nextLine: '{year} brings Personal Year {py} — a year to {hint}.',
    pyHints: {
      1: 'plant seeds', 2: 'weave bonds', 3: 'express', 4: 'build foundations',
      5: 'embrace change', 6: 'nurture', 7: 'turn inward', 8: 'harvest', 9: 'release'
    },
    shareEyebrow: 'Share this year',
    saveImage: 'Save image',
    copyText: 'Copy text'
  },
  milestones: {
    eyebrow: 'Milestones ahead',
    title: 'Get notified for life\'s turning points',
    lead: 'Saturn Return, Jupiter Return, Personal Year 1 — we\'ll email you when they draw near.',
    emailLabel: 'Email address',
    prefMs: 'Life milestones',
    prefPY: 'Personal Year transitions',
    prefMoon: 'New/Full Moon (twice a month)',
    subscribe: 'Subscribe',
    privacy: 'We never share your address. Unsubscribe anytime.',
    sending: 'Signing you up…',
    success: 'Done — check your inbox for confirmation.',
    error: 'Something went wrong. Try again later.',
    daysToGo: 'days to go',
    ms_saturn_return_1: 'First Saturn Return',
    ms_saturn_return_2: 'Second Saturn Return',
    ms_jupiter_return: 'Jupiter Return',
    ms_midlife: 'Midlife threshold',
    ms_chiron_return: 'Chiron Return',
    noUpcoming: 'No major milestone in the next 3 years.'
  },
  ambient: {
    toggle: 'Ambient sound',
    mood: 'Mood',
    volume: 'Volume',
    fire: 'Fire',
    earth: 'Earth',
    air: 'Air',
    water: 'Water'
  },
  skyTonight: {
    title: 'Sky tonight',
    eyebrow: 'SKY TONIGHT',
    yourLocation: 'Your location',
    defaultLocation: 'Tokyo (default)',
    illuminated: '{p}% illuminated',
    newIn: 'New in',
    fullIn: 'Full in',
    planetsAbove: 'Above the horizon',
    noVisible: 'No major planets visible to the naked eye.'
  },
  skeptic: {
    toggle: 'Science mode',
    header: 'Skeptic note',
    counter: 'On the other hand'
  },
  comparative: {
    eyebrow: 'IN MODERN FRAMES',
    title: 'You, translated into today\'s vocabulary',
    caveat: 'A birth date cannot determine your MBTI or Big Five profile. These are thematic parallels only (≒ means "close in theme") — take an official assessment for your actual type.'
  },
  museum: {
    navLink: 'Museum',
    eyebrow: 'MUSEUM',
    title: 'Museum of 19 stories',
    lead: 'When, where, and from whom each system was born.',
    empty: 'This exhibit is being prepared.',
    back: '← Back to COSMIC ID',
    indexLink: '← All exhibits',
    refs: 'References'
  },
  deepChapters: {
    eyebrow: 'EXTENDED READING',
    title: 'Read deeper',
    lead: 'Chapter 1 is free. Chapters 2+ unlock with Premium. Written as possibilities, not verdicts.',
    readMore: 'Read more'
  },
  premiumGate: {
    eyebrow: 'Premium',
    title: 'Continue the deep reading',
    lead: 'Chapters 2 and beyond unlock with Premium — a one-time purchase on this device.',
    buyCta: 'Get Premium',
    alreadyPurchased: 'Already purchased?',
    codeLabel: 'Unlock code',
    codePlaceholder: 'COSMIC-XXXX-XXXX',
    unlockCta: 'Unlock with code',
    unlockNote: 'Enter the code from your purchase confirmation email.',
    chapterLocked: 'Premium',
    tapToUnlock: 'Tap to see how to unlock',
    checkoutPreparing: 'Checkout is being set up. Please check back soon.',
    unlocked: 'Premium unlocked',
    invalidCode: 'That code didn\'t work'
  }
};
