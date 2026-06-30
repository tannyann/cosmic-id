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
    premiumBadge: 'Extended reading (free)',
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
    })[py] ?? ''}`
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
      }
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
      })[n] || 'A point in your 9-year honmei cycle.'
    },
    tarot: {
      light: 'Light face',
      shadow: 'Shadow face',
      lightText: (name) => `${name} upright: your soul's gift in its clearest form — courage to embody the card's highest expression.`,
      shadowText: (name) => `${name} reversed: not punishment — the card asking for integration. Where does its lesson feel heavy? That weight may be transformation knocking.`
    },
    gogyou: {
      hint: 'Each birth year carries one of five elemental moods — tap to explore.'
    },
    maya: {
      kin: 'KIN',
      tone: 'Galactic tone',
      seal: 'Solar seal'
    },
    zodiac: {
      hint: 'Tap an animal to read its traditional mood.'
    }
  },
  share: {
    panelTitle: 'Share card',
    panelDesc: 'Share your nineteen stories as an image or text',
    panelSteps: '① Save the image → ② Post on X or LINE. Your personal card is the face of what you share.',
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
    eyebrow: 'Love archetype',
    title: 'Love reading',
    phaseLabel: 'Current love phase',
    sweetTitle: 'Your sweet spots in love',
    careTitle: 'Gentle reminders',
    matchesTitle: 'Types you harmonize with',
    actionLabel: 'A small step tonight to invite connection',
    cta: 'Curious about someone? Try compatibility reading',
    footnote: 'This is one possibility. You write your own love story.',
    shareTitle: 'Share your love reading',
    shareDesc: 'Save the image and post on X or LINE.',
    sharePreviewAria: 'Love reading share card preview',
    shareAlt: (name) => `${name}'s love reading card`,
    shareSaved: 'Image saved',
    shareCopied: 'Text copied',
    shareCopyFail: 'Could not copy',
    shareFail: 'Could not share'
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
    note: 'All readings are free — tap any card to explore deeper chapters.',
    optionalEyebrow: 'Included free',
    freeIncludesTitle: 'Included free',
    allFreeTitle: 'Also included — no subscription',
    allFreeNote: 'Every feature on this page is free. Readings show possibilities; you write your story.',
    ariaLabel: 'What\'s included'
  },
  gloss: {
    stripTitle: 'Quick glossary — tap ? on any card',
    tipAria: (term) => `What does “${term}” mean?`
  }
};
