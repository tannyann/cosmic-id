/**
 * Diagnosis-result UI overrides for non-ja/en locales.
 * Merged atop en.ui + locale ui.js via deepMerge in index.js.
 */

import { normalizeElementKey } from '../util.js';
import { IT_PATCH, TR_PATCH, HE_PATCH, AR_PATCH } from './localePatches/index.js';

/** @typedef {Partial<typeof import('./locales/en/ui.js').ui>} UiExtras */

/** @param {string} localeTag BCP 47 tag for number formatting */
function buildExtras(t, localeTag) {
  const pyThemes = t.timeline.pyThemes;
  const shadowHints = t.extended.unified.shadowHints;
  const pyKeywords = t.deep.personalYear.keywords;
  const encounterTypes = t.deep.personalYear.encounterTypes;
  const lifepathFigs = t.deep.lifepath.figures;
  const sunElements = t.deep.sun.elementMap;
  const kyuseiPhases = t.deep.kyusei.phases;

  return {
    ...(t.header ? { header: t.header } : {}),
    ...(t.sections ? { sections: t.sections } : {}),
    ...(t.bio ? { bio: t.bio } : {}),
    ...(t.modal ? { modal: t.modal } : {}),
    ...(t.premiumShowcase ? { premiumShowcase: t.premiumShowcase } : {}),
    ...(t.gloss ? { gloss: t.gloss } : {
      gloss: {
        stripTitle: 'Quick glossary — tap ? on any card',
        tipAria: (term) => `What does “${term}” mean?`
      }
    }),
    form: t.form,
    cards: t.cards,
    fmt: {
      ...(t.fmt.cardMore ? { cardMore: t.fmt.cardMore } : {}),
      ...(t.fmt.cardMoreAria ? { cardMoreAria: t.fmt.cardMoreAria } : {}),
      ...(t.fmt.cardAria ? { cardAria: t.fmt.cardAria } : {}),
      yearYou: (y) => t.fmt.yearYou(y),
      bornYearZodiac: (char) => t.fmt.bornYearZodiac(char),
      sixtyDesc: (el) => t.fmt.sixtyDesc(el),
      kyuseiStar: (el) => t.fmt.kyuseiStar(el),
      gogyouLabel: t.fmt.gogyouLabel,
      animalNum: (n) => t.fmt.animalNum(n),
      animalFallback: t.fmt.animalFallback,
      celticLabel: t.fmt.celticLabel,
      mayaDesc: t.fmt.mayaDesc,
      tarotMajor: (n) => t.fmt.tarotMajor(n),
      tarotDailyFor: (y, m, d) => t.fmt.tarotDailyFor(y, m, d),
      monthStone: (m) => t.fmt.monthStone(m),
      monthFlower: (m) => t.fmt.monthFlower(m),
      birthflowerDesc: t.fmt.birthflowerDesc,
      biorhythmDays: (days) => t.fmt.biorhythmDays(days, localeTag),
      moonPhasePct: (pct) => t.fmt.moonPhasePct(pct),
      bornOn: (y, m, d) => t.fmt.bornOn(y, m, d),
      ageNow: (age) => t.fmt.ageNow(age),
      nextMilestone: (age, name) => t.fmt.nextMilestone(age, name),
      nextMilestoneSummary: (age, name, years) => t.fmt.nextMilestoneSummary(age, name, years),
      elementOf: (el) => t.fmt.elementOf(el),
      ageYears: (n) => t.fmt.ageYears(n),
      summaryLabel: t.fmt.summaryLabel,
      summaryLead: (name, label) => t.fmt.summaryLead(name, label),
      summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
        t.fmt.summaryP2(sun, sunEl, cz, ks, gy, an, ct, my, tb),
      summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
        t.fmt.summaryP3(year, py, bioState, mt, mp, nextHtml),
      summaryHint: t.fmt.summaryHint,
      bioUp: t.fmt.bioUp,
      bioDown: t.fmt.bioDown,
      bioBalanced: t.fmt.bioBalanced,
      personalYearWave: (year) => t.fmt.personalYearWave(year),
      expressionHintAddRoman: t.fmt.expressionHintAddRoman,
      expressionLatinInvalid: t.fmt.expressionLatinInvalid
    },
    love: t.love,
    compat: t.compat,
    timeline: {
      eyebrow: t.timeline.eyebrow,
      title: t.timeline.title,
      subtitle: t.timeline.subtitle,
      intro: t.timeline.intro,
      ageLabel: t.timeline.ageLabel,
      pyLabel: t.timeline.pyLabel,
      yearLabel: t.timeline.yearLabel,
      milestoneLabel: t.timeline.milestoneLabel,
      thisYear: t.timeline.thisYear,
      milestoneHere: t.timeline.milestoneHere,
      ageAt: (age) => t.timeline.ageAt(age),
      pyHeading: (py) => t.timeline.pyHeading(py, pyThemes[py] ?? '')
    },
    master: t.master,
    extended: {
      moon: t.extended.moon,
      biorhythm: {
        title: t.extended.biorhythm.title,
        intro: t.extended.biorhythm.intro,
        legend: t.extended.biorhythm.legend,
        today: t.extended.biorhythm.today,
        critical: t.extended.biorhythm.critical,
        rising: t.extended.biorhythm.rising,
        falling: t.extended.biorhythm.falling,
        neutral: t.extended.biorhythm.neutral,
        waves: t.extended.biorhythm.waves,
        actionHint: (v) => v > 0.3
          ? t.extended.biorhythm.actionHigh
          : v < -0.3
            ? t.extended.biorhythm.actionLow
            : t.extended.biorhythm.actionMid
      },
      unified: {
        eyebrow: t.extended.unified.eyebrow,
        title: t.extended.unified.title,
        subtitle: t.extended.unified.subtitle,
        intro: t.extended.unified.intro,
        expandAll: t.extended.unified.expandAll,
        collapseAll: t.extended.unified.collapseAll,
        footnote: t.extended.unified.footnote,
        chapterEssence: t.extended.unified.chapterEssence,
        chapterYear: t.extended.unified.chapterYear,
        chapterLove: t.extended.unified.chapterLove,
        chapterWork: t.extended.unified.chapterWork,
        chapterShadow: t.extended.unified.chapterShadow,
        chapterLucky: t.extended.unified.chapterLucky,
        essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
          t.extended.unified.essenceBody(name, lpLabel, sun, zodiac, kyusei, lpDesc),
        yearBody: (year, py, pyMeaning) =>
          t.extended.unified.yearBody(year, py, pyMeaning),
        loveBody: (sunEl, animal, lp) =>
          t.extended.unified.loveBody(sunEl, animal, lp),
        workBody: (lpLabel, gogyou, exprNum) =>
          t.extended.unified.workBody(lpLabel, gogyou, exprNum),
        shadowBody: (lp) => {
          const hint = shadowHints[lp] || shadowHints.default;
          return t.extended.unified.shadowBody(lp, hint);
        },
        luckyBody: (colors, numbers, days, hint) =>
          t.extended.unified.luckyBody(colors, numbers, days, hint)
      }
    },
    deep: {
      scrollMoon: t.deep.scrollMoon,
      scrollBio: t.deep.scrollBio,
      scrollTimeline: t.deep.scrollTimeline ?? t.deep.scrollMoon,
      prompts: {
        forChapter: (cardKey, index) => {
          const generic = t.deep.prompts.generic;
          if (index >= 2) return generic;
          return index === 1 ? [generic[0]] : generic;
        }
      },
      personalYear: {
        thisMonth: t.deep.personalYear.thisMonth,
        personalMonth: (n) => t.deep.personalYear.personalMonth(n),
        tagAction: t.deep.personalYear.tagAction,
        tagWait: t.deep.personalYear.tagWait,
        tagWatch: t.deep.personalYear.tagWatch,
        ritualHint: t.deep.personalYear.ritualHint,
        noWatch: t.deep.personalYear.noWatch,
        keywords: (py, lp) => {
          const base = pyKeywords[py] || pyKeywords.default;
          return [...base.slice(0, 2), t.deep.personalYear.pathSuffix(lp)];
        },
        encounters: (py, el) => {
          const key = normalizeElementKey(el);
          const types = encounterTypes[key] || encounterTypes.default;
          return types.map((type) => ({
            type,
            hint: t.deep.personalYear.encounterHint(py),
            detail: t.deep.personalYear.encounterDetail(type, el, py)
          }));
        }
      },
      lifepath: {
        yearWave: (lp, py, pyMeaning) => t.deep.lifepath.yearWave(lp, py, pyMeaning),
        yearWaveHint: t.deep.lifepath.yearWaveHint,
        compatBands: (lp) => {
          const rd = (n) => { let x = n; while (x > 9) x = String(x).split('').reduce((s, c) => s + +c, 0); return x; };
          return [
            { kind: 'resonate', label: t.deep.lifepath.resonateLabel, text: t.deep.lifepath.resonateText(rd(lp + 1), rd(lp + 2)) },
            { kind: 'grow', label: t.deep.lifepath.growLabel, text: t.deep.lifepath.growText(rd(lp + 4), rd(lp + 5)) },
            { kind: 'care', label: t.deep.lifepath.careLabel, text: t.deep.lifepath.careText(rd(lp + 8)) }
          ];
        },
        careerPillars: (lp) => {
          const rd = (n) => { let x = n; while (x > 9) x = String(x).split('').reduce((s, c) => s + +c, 0); return x; };
          return [
            { title: t.deep.lifepath.careerNatural, text: t.deep.lifepath.careerNaturalText(lp) },
            { title: t.deep.lifepath.careerStretch, text: t.deep.lifepath.careerStretchText(rd(lp + 3)) },
            { title: t.deep.lifepath.careerRest, text: t.deep.lifepath.careerRestText(lp) }
          ];
        },
        soulPrompts: (lp) => [
          { q: t.deep.lifepath.soulQ1, a: t.deep.lifepath.soulA1(lp) },
          { q: t.deep.lifepath.soulQ2, a: t.deep.lifepath.soulA2 }
        ],
        figures: (lp) => lifepathFigs[lp] || lifepathFigs[9]
      },
      sun: { elementMap: sunElements },
      kyusei: {
        cyclePhase: (n) => kyuseiPhases[n] || kyuseiPhases.default
      },
      tarot: {
        light: t.deep.tarot.light,
        shadow: t.deep.tarot.shadow,
        lightText: (name) => t.deep.tarot.lightText(name),
        shadowText: (name) => t.deep.tarot.shadowText(name)
      },
      ...(t.deep.gogyou ? { gogyou: t.deep.gogyou } : {}),
      ...(t.deep.maya ? { maya: t.deep.maya } : {}),
      ...(t.deep.zodiac ? { zodiac: t.deep.zodiac } : {})
    }
  };
}

/** Deep-merge locale config objects (pre-buildExtras) */
function mergeConfig(base, patch) {
  const out = { ...base };
  for (const key of Object.keys(patch)) {
    const bVal = base[key];
    const pVal = patch[key];
    if (
      pVal && typeof pVal === 'object' && !Array.isArray(pVal) && typeof pVal !== 'function'
      && bVal && typeof bVal === 'object' && !Array.isArray(bVal) && typeof bVal !== 'function'
    ) {
      out[key] = mergeConfig(bVal, pVal);
    } else {
      out[key] = pVal;
    }
  }
  return out;
}

/** Shared lifepath figure rows: [name, note] per path */
function lpFigures(rows) {
  /** @type {Record<number, {name: string, note: string}[]>} */
  const out = {};
  for (const [lp, [name, note]] of Object.entries(rows)) {
    out[Number(lp)] = [{ name, note }];
  }
  return out;
}

/** Shared personal-year keyword map */
function pyKw(map, fallback) {
  return { ...map, default: fallback };
}

/** Shared encounter type lists */
function encTypes(map, fallback) {
  return { ...map, default: fallback };
}

/** Build extended.unified + deep sections from locale labels */
function makeExtendedDeep(labels) {
  const L = labels;
  return {
    extended: {
      moon: {
        title: L.moonTitle, intro: L.moonIntro, tapHint: L.moonTap, newMoon: L.newMoon, fullMoon: L.fullMoon,
        resonance: L.moonResonance, ritualNew: L.ritualNew, ritualFull: L.ritualFull
      },
      biorhythm: {
        title: L.bioTitle, intro: L.bioIntro, legend: L.bioLegend, today: L.today, critical: L.critical,
        rising: L.rising, falling: L.falling, neutral: L.neutral,
        waves: { physical: L.wavePhysical, emotional: L.waveEmotional, intellectual: L.waveIntellectual, intuitive: L.waveIntuitive },
        actionHigh: L.actionHigh, actionLow: L.actionLow, actionMid: L.actionMid
      },
      unified: {
        eyebrow: L.unifiedEyebrow, title: L.unifiedTitle, subtitle: L.unifiedSubtitle, intro: L.unifiedIntro,
        expandAll: L.expandAll, collapseAll: L.collapseAll, footnote: L.unifiedFootnote,
        chapterEssence: L.chEssence, chapterYear: L.chYear, chapterLove: L.chLove, chapterWork: L.chWork,
        chapterShadow: L.chShadow, chapterLucky: L.chLucky,
        essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) => L.essenceBody(name, lpLabel, sun, zodiac, kyusei, lpDesc),
        yearBody: (year, py, pyMeaning) => L.yearBody(year, py, pyMeaning),
        loveBody: (sunEl, animal, lp) => L.loveBody(sunEl, animal, lp),
        workBody: (lpLabel, gogyou, exprNum) => L.workBody(lpLabel, gogyou, exprNum),
        shadowHints: L.shadowHints,
        shadowBody: (lp, hint) => L.shadowBody(lp, hint),
        luckyBody: (colors, numbers, days, hint) =>
          luckyRow({ colors: L.luckyColors, numbers: L.luckyNumbers, days: L.luckyDays }, colors, numbers, days, hint)
      }
    },
    deep: {
      scrollMoon: L.scrollMoon, scrollBio: L.scrollBio,
      scrollTimeline: L.scrollTimeline ?? L.scrollMoon,
      prompts: { generic: L.promptsGeneric },
      personalYear: {
        thisMonth: L.thisMonth, personalMonth: (n) => L.personalMonth(n), tagAction: L.tagAction,
        tagWait: L.tagWait, tagWatch: L.tagWatch, ritualHint: L.ritualHint, noWatch: L.noWatch,
        pathSuffix: (lp) => L.pathSuffix(lp), encounterHint: (py) => L.encounterHint(py),
        encounterDetail: (type, el, py) => L.encounterDetail(type, el, py),
        keywords: pyKw(L.pyKeywords, L.pyKwDefault),
        encounterTypes: encTypes(L.encounterTypes, L.encounterDefault)
      },
      lifepath: {
        yearWave: (lp, py, pyMeaning) => L.yearWave(lp, py, pyMeaning), yearWaveHint: L.yearWaveHint,
        resonateLabel: L.resonateLabel, resonateText: (a, b) => L.resonateText(a, b),
        growLabel: L.growLabel, growText: (a, b) => L.growText(a, b),
        careLabel: L.careLabel, careText: (n) => L.careText(n),
        careerNatural: L.careerNatural, careerNaturalText: (lp) => L.careerNaturalText(lp),
        careerStretch: L.careerStretch, careerStretchText: (n) => L.careerStretchText(n),
        careerRest: L.careerRest, careerRestText: (lp) => L.careerRestText(lp),
        soulQ1: L.soulQ1, soulA1: (lp) => L.soulA1(lp), soulQ2: L.soulQ2, soulA2: L.soulA2,
        figures: lpFigures(L.figures)
      },
      sun: { elementMap: L.sunMap },
      kyusei: { phases: { ...L.kyuseiPhases, default: L.kyuseiDefault } },
      tarot: {
        light: L.tarotLight, shadow: L.tarotShadow,
        lightText: (name) => L.tarotLightText(name), shadowText: (name) => L.tarotShadowText(name)
      }
    }
  };
}

const luckyRow = (labels, colors, numbers, days, hint) =>
  `<div class="lucky-compass">
     <div class="lucky-row"><span class="lucky-label">${labels.colors}</span>
       ${colors.map(c => `<span class="lucky-chip">${c}</span>`).join('')}</div>
     <div class="lucky-row"><span class="lucky-label">${labels.numbers}</span>
       ${numbers.map(n => `<span class="lucky-chip">${n}</span>`).join('')}</div>
     <div class="lucky-row"><span class="lucky-label">${labels.days}</span>
       ${days.map(d => `<span class="lucky-chip">${d}</span>`).join('')}</div>
     <p class="lucky-hint">${hint}</p>
   </div>`;

const ZH = {
  header: { eyebrow: '个人宇宙学', subtitle: '十九个故事，加上恋爱与相性解读' },
  sections: {
    numerology: ['数秘术', ''],
    western: ['西洋占星', ''],
    eastern: ['东方星命', ''],
    characters: ['角色占卜', ''],
    sacred: ['玛雅与塔罗', ''],
    nature: ['自然象征', ''],
    cycles: ['今日之波', ''],
    lifeMap: ['人生地图', '']
  },
  bio: { physical: '身体', emotional: '情感', intellectual: '智力', intuitive: '直觉' },
  modal: {
    deepRead: '深入解读',
    premiumBadge: '更深解读（免费）',
    premiumPitch: '继续深入',
    premiumCta: '查看深层内容',
    close: '关闭'
  },
  premiumShowcase: {
    roadmapSummary: '查看功能一览',
    note: '所有解读均为免费 — 点击任意卡片探索更深章节。',
    optionalEyebrow: '免费包含',
    freeIncludesTitle: '免费包含',
    allFreeTitle: '同样免费 — 无需订阅',
    allFreeNote: '本页所有功能均免费。解读展示可能性；故事由你书写。',
    ariaLabel: '包含内容'
  },
  gloss: {
    stripTitle: '术语提示 — 点击卡片上的 ?',
    tipAria: (term) => `「${term}」是什么意思？`
  },
  form: {
    birthMonthLabel: '月',
    birthDayLabel: '日',
    birthYearLabel: '年',
    birthMonthPlaceholder: '月',
    birthDayPlaceholder: '日',
    birthYearPlaceholder: '年'
  },
  cards: {
    lifepath: '生命路径数',
    personalYear: '个人年',
    expression: '姓名数字',
    expressionLabel: '名字振动的频率',
    sun: '太阳星座',
    moonTrait: '月亮倾向',
    moonTraitLabel: '来自出生时的月相',
    moonTraitNote: '精确的月亮星座需要出生时刻',
    zodiac: '生肖',
    sixty: '年柱（六十干支）',
    kyusei: '本命星（九星）',
    gogyou: '五行',
    animal: '动物占卜',
    celtic: '凯尔特树',
    maya: '玛雅历 KIN',
    tarotBirth: '塔罗出生牌',
    tarotDaily: '今日卡牌',
    birthstone: '诞生石',
    birthflower: '诞生花',
    biorhythm: '生物节律',
    moonTonight: '今夜之月',
    lifeStagePrev: '最近的里程碑',
    lifeStageNext: '下一个里程碑',
    timeline: '十年时间线',
    timelineLabel: '未来十年',
    timelineDesc: '个人年的波浪、高峰年份与人生里程碑——点按每一年深入探索。',
    unified: '统合大师解读',
    unifiedDesc: '十九个体系编织成一个故事——本质、爱情、工作与幸运罗盘。'
  },
  fmt: {
    yearYou: (y) => `${y}年的你`,
    bornYearZodiac: (char) => `${char}年出生`,
    sixtyDesc: (el) => `六十年才回返一次的印记，带有${el}的特质。`,
    kyuseiStar: (el) => `${el}星`,
    gogyouLabel: '出生年的元素',
    animalNum: (n) => `类型 ${n}/60`,
    animalFallback: '拥有独特气质的存在。',
    celticLabel: '十三棵圣树之一',
    mayaDesc: '神圣260日计数中你的一天。纹章是本质，音调是节奏。',
    tarotMajor: (n) => `大阿卡纳 ${n}`,
    tarotDailyFor: (y, m, d) => `${y}/${m}/${d} 给你的讯息`,
    monthStone: (m) => `${m}月的宝石`,
    monthFlower: (m) => `${m}月的花`,
    birthflowerDesc: '出生月的象征。放在身边，或许能让心更安定。',
    biorhythmDays: (days, tag) => `生物节律 — 出生第 ${days.toLocaleString(tag)} 天`,
    moonPhasePct: (pct) => `月相 ${pct}% · 月亮牵动一切生命。今夜它想问你什么？`,
    bornOn: (y, m, d) => `${y}年${m}月${d}日出生`,
    ageNow: (age) => `现在 <strong>${age}</strong> 岁`,
    nextMilestone: (age, name) => `下一个人生里程碑：<strong>${age}岁 — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `下一个人生里程碑是 <strong>${age}岁的${name}</strong>，大约还有 <strong>${years}年</strong>。`,
    elementOf: (el) => `${el}元素`,
    ageYears: (n) => `${n}岁`,
    summaryLabel: '你的故事',
    summaryLead: (name, label) => `${name}，据说你承载着<strong>${label}</strong>的灵魂。`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `西洋占星中，太阳落在<strong>${sun}</strong>（${sunEl}元素）；` +
      `东方历法中属<strong>${cz}</strong>；九星为<strong>${ks}</strong>；` +
      `核心带有<strong>${gy}</strong>。` +
      `动物智慧称你为<strong>${an}</strong>；守护树是<strong>${ct}</strong>。` +
      `玛雅圣历：<strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>；` +
      `塔罗原型：<strong>${tb}</strong>。`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `${year}年，你正乘着<strong>个人年 ${py}</strong>的波浪。` +
      `生物节律显示${bioState}。` +
      `你带着<strong>${mt}</strong>的气质；今夜<strong>${mp}</strong>照耀着你。` +
      ` ${nextHtml}`,
    summaryHint: '↓ 点按卡片查看更深解读',
    bioUp: '<strong>上升阶段</strong>（适合行动与表达）',
    bioDown: '<strong>内省阶段</strong>（适合休息与整理）',
    bioBalanced: '<strong>平衡阶段</strong>',
    personalYearWave: (year) => `个人年 ${year}`,
    cardMore: '深入解读',
    cardMoreAria: '。打开详情',
    cardAria: (system, value) => `${system}、${value}`,
    expressionHintAddRoman: '添加罗马字母拼写，也可查看国际姓名数字。',
    expressionLatinInvalid: '罗马字母栏未找到 A–Z 字母，因此未显示国际数字。'
  },
  love: {
    eyebrow: '恋爱原型',
    title: '恋爱解读',
    phaseLabel: '当下的恋爱阶段',
    sweetTitle: '恋爱中的甜蜜地带',
    careTitle: '温柔的提醒',
    matchesTitle: '容易共鸣的类型',
    actionLabel: '今晚可做的、邀请缘分的小事',
    cta: '在意某人？试试相性解读',
    footnote: '这只是一种可能。你的爱情故事由你书写。',
    shareTitle: '分享恋爱解读',
    shareDesc: '保存图片，发布到 X 或 LINE。',
    sharePreviewAria: '恋爱解读分享卡预览',
    shareAlt: (name) => `${name}的恋爱解读卡`,
    shareSaved: '图片已保存',
    shareCopied: '文字已复制',
    shareCopyFail: '无法复制',
    shareFail: '无法分享'
  },
  compat: {
    eyebrow: '相性',
    title: '一起解读相性',
    lead: '输入对方的姓名与出生日期，从五个维度映照相性。',
    leadSub: '恋人、朋友、家人，或你欣赏的人——任何人都可以。',
    nameLabel: '对方姓名',
    birthLabel: '对方出生日期',
    namePlaceholder: '例：李华',
    submit: '解读相性',
    disclaimer: '解读呈现可能性。真实的关系由你们共同书写。',
    resultEyebrow: '两个故事交织',
    overallLabel: '综合',
    footnote: '数字只是指引。缘分会随着你们日日相处而改变形状。',
    radarAria: '五维相性雷达图',
    lifePathValue: (n) => `生命路径 ${n}`
  },
  timeline: {
    eyebrow: '互动解读',
    title: '十年时间线',
    subtitle: '未来十年的个人年节奏',
    intro: '每一根柱代表个人年（1–9）。点按年份阅读主题；✦ 标记人生里程碑。',
    ageLabel: '年龄',
    pyLabel: '个人年',
    yearLabel: '年份',
    milestoneLabel: '人生里程碑',
    thisYear: '今年',
    milestoneHere: '里程碑之年',
    ageAt: (age) => `满 ${age} 岁`,
    pyHeading: (py, theme) => `个人年 ${py} · ${theme}`,
    pyThemes: {
      1: '新开始', 2: '耐心与羁绊', 3: '表达与喜悦',
      4: '筑基', 5: '变化与自由', 6: '责任与爱',
      7: '内省', 8: '收获', 9: '完成与放手'
    }
  },
  master: {
    title: '大师解读',
    intro: '更深的章节，向所有人敞开。点按逐一探索。',
    expandAll: '全部展开',
    collapseAll: '全部收起'
  },
  extended: {
    moon: {
      title: '十二个月亮历',
      intro: '即将到来的新月与满月——点按日期查看简单仪式。✦ 标记与出生月相的共鸣。',
      tapHint: '点按新月或满月日期，打开仪式建议。',
      newMoon: '新月',
      fullMoon: '满月',
      resonance: '此相位可能与你的出生月相共鸣——月循环中的个人转折点。',
      ritualNew: '在纸上写下一个愿望或意图。播下一颗种子，字面或隐喻皆可。开始一件你能守护29天的小事。',
      ritualFull: '说出三件感恩的事。放下一个不再适合的习惯或故事。让月光成为镜子，而非审判。'
    },
    biorhythm: {
      title: '90天生物节律预测',
      intro: '从出生日延伸的四条波浪——点按日期阅读节奏。圆点标记波浪过零的关键日。',
      legend: '青色圆点 = 关键日 · 金边 = 今天',
      today: '今天',
      critical: '关键日',
      rising: '上升波',
      falling: '下降波',
      neutral: '接近平衡',
      waves: { physical: '身体', emotional: '情感', intellectual: '智力', intuitive: '直觉' },
      actionHigh: '或许适合行动、运动与向外表达的一天。',
      actionLow: '或许适合休息、守护与安静沉淀的一天。',
      actionMid: '过渡之日——既非高峰也非低谷。温柔前行。'
    },
    unified: {
      eyebrow: '扩展解读',
      title: '统合大师解读',
      subtitle: '十九个故事，一条织线',
      intro: '跨体系综合——不是定论，而是可按自己节奏阅读的地圖。',
      expandAll: '全部展开',
      collapseAll: '全部收起',
      footnote: '这里的每一缕都是可能性之一。意义仍由你选择。',
      chapterEssence: '你的核心本质',
      chapterYear: '今年的焦点',
      chapterLove: '爱与连接',
      chapterWork: '工作与表达',
      chapterShadow: '值得面对的阴影',
      chapterLucky: '幸运罗盘',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name}——作为<strong>${lpLabel}</strong>，生命路径可能围绕：${lpDesc}</p>
         <p>太阳在<strong>${sun}</strong>、<strong>${zodiac}</strong>之年、<strong>${kyusei}</strong>，可能是同一灵魂的不同语言——每个体系是同一和弦的不同音符。</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p><strong>${year}</strong>年，你的个人年是<strong>${py}</strong>。${pyMeaning}</p>
         <p>今年的波浪或许邀请你顺流而行，而非逆流——一季有其自己的节拍。</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>太阳带有<strong>${sunEl}</strong>的温暖，又有<strong>${animal}</strong>的原型——连接或许在温柔与独立之间流动得最顺。</p>
         <p>生命路径<strong>${lp}</strong>可能着色你给予与接受的方式——不是固定类型，而是值得留意的反复主题。</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p><strong>${lpLabel}</strong>的能量或许通过工作表达为目的，而非单纯的生产力。出生年的<strong>${gogyou}</strong>元素可能暗示你如何建造——稳健、大胆，或经由关系。</p>
         ${exprNum ? `<p>姓名振动<strong>${exprNum}</strong>可能为你在世上的形象再添一层。</p>` : ''}`,
      shadowHints: {
        1: '留意领导变成控制时的孤立',
        2: '留意为和平而失去自我',
        3: '留意为避深度而停留表面',
        4: '留意安全感受威胁时的僵硬',
        5: '留意以不安逃避承诺',
        6: '留意关怀变成控制',
        7: '留意世界太吵时的退缩',
        8: '留意力量稀缺时的强硬',
        9: '留意理想超越身体',
        default: '留意优势滑向过度之时'
      },
      shadowBody: (lp, hint) =>
        `<p>每种天赋都有阴影。生命路径<strong>${lp}</strong>的成长边缘或许是：${hint}。</p>
         <p>为阴影命名不是失败——或许是走向平衡的第一步。</p>`,
      luckyBody: (colors, numbers, days, hint) =>
        luckyRow({ colors: '颜色', numbers: '数字', days: '日子' }, colors, numbers, days, hint)
    }
  },
  deep: {
    scrollMoon: '跳转到月亮历 ↑',
    scrollBio: '跳转到90天预测 ↑',
    scrollTimeline: '跳转到十年时间线 ↑',
    prompts: {
      generic: [
        { q: '这可能邀请我留意什么？', a: '与章节主题共处一分钟。最先浮现的感受或记忆或许是线索——不是定论。' },
        { q: '本周的一小步？', a: '选一个今天能完成的小事。扩展解读最好当作温柔的实验，而非作业。' }
      ]
    },
    personalYear: {
      thisMonth: '本月',
      personalMonth: (n) => `个人月 ${n}`,
      tagAction: '行动',
      tagWait: '培育',
      tagWatch: '留意',
      ritualHint: '留意的月份：放慢决定、多休息，一个接地仪式或许有帮助。',
      noWatch: '今年没有特别需要留意的个人月——整体节奏较稳。',
      pathSuffix: (lp) => `路径${lp}`,
      encounterHint: (py) => `个人年 ${py} 主题活跃时可能出现`,
      encounterDetail: (type, el, py) =>
        `被称为「${type}」的连接可能反映${el}元素的季节——留意谁帮你体现今年的波浪，而不强求结果。`,
      keywords: {
        1: ['种子', '勇气', '开始'], 2: ['耐心', '羁绊', '倾听'],
        3: ['喜悦', '表达', '连接'], 4: ['建造', '秩序', '扎根'],
        5: ['变化', '自由', '探索'], 6: ['爱', '家', '关怀'],
        7: ['静', '学习', '内在'], 8: ['收获', '力量', '接纳'],
        9: ['放手', '完成', '宽恕'], default: ['流动', '信任', '敞开']
      },
      encounterTypes: {
        fire: ['火花', '导师', '盟友'],
        water: ['疗愈者', '镜子', '引路人'],
        earth: ['建造者', '锚', '老师'],
        air: ['信使', '协作者', '创意携带者'],
        wood: ['培育者', '同伴', '探路者'],
        metal: ['精炼者', '挑战者', '长者'],
        default: ['盟友', '镜子', '引路人']
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) => `生命路径 ${lp} 遇见个人年 ${py}：${pyMeaning}`,
      yearWaveHint: '在人生地图中打开十年时间线卡片，查看完整十年。',
      resonateLabel: '可能共鸣',
      resonateText: (a, b) => `路径 ${a} 或 ${b} 的人或许感觉熟悉——节奏相近，少些解释。`,
      growLabel: '可能促进成长',
      growText: (a, b) => `路径 ${a} 或 ${b} 可能带来摩擦——若以好奇心相遇，或可成为扩展。`,
      careLabel: '宜细心对待',
      careText: (n) => `路径 ${n} 的能量或许强烈——非善恶，但值得有意识地设界。`,
      careerNatural: '自然契合',
      careerNaturalText: (lp) => `生命路径 ${lp} 的天赋无需强求即可发光——追随轻松，不只野心。`,
      careerStretch: '拉伸区',
      careerStretchText: (n) => `借用路径 ${n} 能量的副业或许解锁隐藏技能。`,
      careerRest: '休息形态',
      careerRestText: (lp) => `恢复方式很重要。路径 ${lp} 或许需要特定 downtime 才能可持续。`,
      soulQ1: '人生中什么在重复？',
      soulA1: (lp) => `生命路径 ${lp} 或许以不同外衣带回同一课——命名模式，不必评判。`,
      soulQ2: '「足够」是什么样子？',
      soulA2: '灵魂课题常藏在野心里。为这一季定义足够，而非永远。',
      figures: {
        1: [{ name: '开拓者', note: '不是模仿——而是留意勇气在他们选择中的样子。' }],
        2: [{ name: '搭桥者', note: '不在中心舞台却连接他人的人，或许映照你的天赋。' }],
        3: [{ name: '艺术家与说书人', note: '喜悦作为志业，而非逃避。' }],
        4: [{ name: '匠人', note: '耐心变得可见。' }],
        5: [{ name: '探索者', note: '自由与责任并存。' }],
        6: [{ name: '守护者', note: '爱不窒息的关怀。' }],
        7: [{ name: '追寻者', note: '真理胜过舒适。' }],
        8: [{ name: '遗产建造者', note: '力量流通，而非囤积。' }],
        9: [{ name: '人道者', note: '完成作为礼物。' }],
        11: [{ name: '照亮者', note: '敏感作为服务。' }],
        22: [{ name: '大师建造者', note: '有梦想也有地基。' }],
        33: [{ name: '爱的老师', note: '无条件是练习，非完美。' }]
      }
    },
    sun: {
      elementMap: {
        fire: { direction: '南 · 火', season: '夏热或许映照你的光芒——能量上升时行动。', ritual: '蜡烛、阳光或晨间运动，致敬主动的开始。' },
        earth: { direction: '中 · 土', season: '收获季或许让你接地——身体稳时建造。', ritual: '赤脚触土、慢煮一餐、完成一件有形小事。' },
        air: { direction: '东 · 风', season: '春风或许搅动想法——呼吸轻盈时言说与连接。', ritual: '写三句话日记、无耳机散步、发一条诚实讯息。' },
        water: { direction: '西 · 水', season: '冬深或许召唤内向——先感受再决定。', ritual: '温水浴、望月、欢迎泪水而不必编故事。' },
        wood: { direction: '东 · 木', season: '生长季利于播种——从小开始，常加照料。', ritual: '身旁放绿植、播种一个29天的小习惯。' },
        metal: { direction: '西 · 金', season: '秋澄或许帮你精炼——放下钝化的部分。', ritual: '清空一个抽屉、白衣、呼气长于吸气。' }
      }
    },
    kyusei: {
      phases: {
        1: '周期第1年：播种本命主题——新方向与新芽。',
        2: '第2年：耐心与伙伴——培育所播。',
        3: '第3年：表达与可见——让星被看见。',
        4: '第4年：地基——踏实工作，少分心。',
        5: '第5年：变化与移动——旅行或转变或许召唤。',
        6: '第6年：责任与家——关系加深。',
        7: '第7年：内省——学习、休息、灵性照料。',
        8: '第8年：收获——成果与认可或许浮现。',
        9: '第9年：完成——放手，为新九年做准备。',
        default: '九年本命周期中的一个点。'
      }
    },
    tarot: {
      light: '光明面',
      shadow: '阴影面',
      lightText: (name) => `${name}正位：灵魂天赋最清澈的形式——有勇气体现卡牌的最高表达。`,
      shadowText: (name) => `${name}逆位：不是惩罚——卡牌邀请整合。哪里感到沉重？那重量或许是转化在敲门。`
    }
  }
};

// Due to file size, KO through AR follow the same structure with full translations.
// Each locale block is complete for diagnosis-result UI.

const KO = {
  header: { eyebrow: '개인 우주학', subtitle: '열아홉 가지 이야기와 연애·相性 진단' },
  sections: {
    numerology: ['수비학', ''],
    western: ['서양 점성술', ''],
    eastern: ['동양의 별과 운명', ''],
    characters: ['캐릭터占', ''],
    sacred: ['마야 & 타로', ''],
    nature: ['자연의 상징', ''],
    cycles: ['오늘의 파동', ''],
    lifeMap: ['인생 지도', '']
  },
  bio: { physical: '신체', emotional: '감정', intellectual: '지성', intuitive: '직관' },
  modal: {
    deepRead: '더 깊이 읽기',
    premiumBadge: '심층 해석（무료）',
    premiumPitch: '더 깊이',
    premiumCta: '심층 내용 보기',
    close: '닫기'
  },
  premiumShowcase: {
    roadmapSummary: '기능 안내 보기',
    note: '모든 해석이 무료입니다 — 카드를 눌러 더 깊은 챕터를 탐색하세요.',
    optionalEyebrow: '무료 포함',
    freeIncludesTitle: '무료 포함',
    allFreeTitle: '이것도 무료 — 구독 불필요',
    allFreeNote: '이 페이지의 모든 기능이 무료입니다. 해석은 가능성을 보여줍니다. 이야기는 당신이 씁니다.',
    ariaLabel: '포함 내용'
  },
  gloss: {
    stripTitle: '용어 힌트 — 카드의 ? 를 탭하세요',
    tipAria: (term) => `「${term}」이(가) 무엇인가요?`
  },
  form: {
    birthMonthLabel: '월', birthDayLabel: '일', birthYearLabel: '년',
    birthMonthPlaceholder: '월', birthDayPlaceholder: '일', birthYearPlaceholder: '년'
  },
  cards: {
    lifepath: '라이프 패스 번호', personalYear: '개인의 해', expression: '이름 숫자',
    expressionLabel: '이름에서 울리는 진동', sun: '태양 별자리', moonTrait: '달의 성향',
    moonTraitLabel: '출생 달의 위상에서', moonTraitNote: '정확한 달 별자리는 출생 시각이 필요합니다',
    zodiac: '띠', sixty: '년주(육십갑자)', kyusei: '본명성(구성)', gogyou: '오행',
    animal: '동물占', celtic: '켈트 나무', maya: '마야력 KIN', tarotBirth: '타로 탄생 카드',
    tarotDaily: '오늘의 카드', birthstone: '탄생석', birthflower: '탄생화', biorhythm: '바이오리듬',
    moonTonight: '오늘 밤의 달', lifeStagePrev: '최근 이정표', lifeStageNext: '다음 이정표',
    timeline: '10년 타임라인', timelineLabel: '앞으로의 10년',
    timelineDesc: '개인의 해 파동, 결실의 해, 인생 이정표를 연도별로 눌러 읽어보세요.',
    unified: '통합 마스터 리딩', unifiedDesc: '열아홉 체계를 한 이야기로 — 본질, 사랑, 일, 행운 나침반.'
  },
  fmt: {
    yearYou: (y) => `${y}년의 당신`, bornYearZodiac: (char) => `${char}년생`,
    sixtyDesc: (el) => `60년에 한 번 돌아오는 인장. ${el}의 성질을 품습니다.`,
    kyuseiStar: (el) => `${el}성`, gogyouLabel: '출생년의 원소',
    animalNum: (n) => `유형 ${n}/60`, animalFallback: '고유한 성격을 지닌 존재.',
    celticLabel: '13그루 신성한 나무 중 하나', mayaDesc: '260일 성스러운 수에서 당신의 하루. 문장은 본질, 음조는 리듬.',
    tarotMajor: (n) => `메이저 아르카나 ${n}`, tarotDailyFor: (y, m, d) => `${y}/${m}/${d} 당신에게`,
    monthStone: (m) => `${m}월의 보석`, monthFlower: (m) => `${m}월의 꽃`,
    birthflowerDesc: '탄생월의 상징. 곁에 두면 마음이 가라앉을 수 있습니다.',
    biorhythmDays: (days, tag) => `바이오리듬 — 출생 후 ${days.toLocaleString(tag)}일`,
    moonPhasePct: (pct) => `월상 ${pct}% · 달은 모든 생명에 닿습니다. 오늘 밤 달이 무엇을 묻나요?`,
    bornOn: (y, m, d) => `${y}년 ${m}월 ${d}일생`, ageNow: (age) => `현재 <strong>${age}</strong>세`,
    nextMilestone: (age, name) => `다음 이정표: <strong>${age}세 — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `다음 인생 이정표는 <strong>${age}세 ${name}</strong>. 약 <strong>${years}년</strong> 남았습니다.`,
    elementOf: (el) => `${el} 원소`, ageYears: (n) => `${n}세`,
    summaryLabel: '당신의 이야기',
    summaryLead: (name, label) => `${name}님은 <strong>${label}</strong>의 영혼을 품었다고 전해집니다.`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `서양 점성술에서 태양은 <strong>${sun}</strong>(${sunEl} 원소); 동양력에서는 <strong>${cz}</strong>; 구성에서는 <strong>${ks}</strong>; ` +
      `핵심에 <strong>${gy}</strong>를 품습니다. 동물占은 <strong>${an}</strong>; 수호 나무는 <strong>${ct}</strong>. ` +
      `마야 성력: <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>; 타로 원형: <strong>${tb}</strong>.`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `${year}년, 당신은 <strong>개인의 해 ${py}</strong>의 파동 위에 있습니다. 바이오리듬은 ${bioState}. ` +
      `<strong>${mt}</strong>의 기질을 지니며, 오늘 밤 <strong>${mp}</strong>이 당신을 비춥니다. ${nextHtml}`,
    summaryHint: '↓ 카드를 눌러 더 깊은 해석 보기',
    bioUp: '<strong>상승 국면</strong>(행동과 표현에 유리)', bioDown: '<strong>성찰 국면</strong>(휴식과 정리에 유리)',
    bioBalanced: '<strong>균형 국면</strong>',     personalYearWave: (year) => `개인의 해 ${year}`,
    cardMore: '더 깊이 읽기',
    cardMoreAria: '. 자세히 보기',
    cardAria: (system, value) => `${system}, ${value}`,
    expressionHintAddRoman: '로마자 표기를 추가하면 국제식 이름 숫자도 볼 수 있습니다.',
    expressionLatinInvalid: '로마자 칸에 A–Z가 없어 국제식 숫자를 표시하지 않았습니다.'
  },
  love: {
    eyebrow: '사랑 아키타입', title: '연애 리딩', phaseLabel: '지금의 연애 단계',
    sweetTitle: '사랑의 스위트 스팟', careTitle: '마음에 새길 말', matchesTitle: '共鳴하기 쉬운 유형',
    actionLabel: '오늘 밤 인연을 부르는 작은 한 걸음', cta: '마음에 두는 사람이 있나요? 相性 리딩 해보기',
    footnote: '이것은 하나의 가능성입니다. 당신의 사랑 이야기는 당신이 씁니다.',
    shareTitle: '연애 리딩 공유', shareDesc: '이미지를 저장해 X나 LINE에 올려보세요.',
    sharePreviewAria: '연애 리딩 공유 카드 미리보기', shareAlt: (name) => `${name}의 연애 리딩 카드`,
    shareSaved: '이미지 저장됨', shareCopied: '텍스트 복사됨', shareCopyFail: '복사할 수 없음', shareFail: '공유할 수 없음'
  },
  compat: {
    eyebrow: '相性', title: '둘의 相性 읽기', lead: '다른 이름과 생년월일을 입력하면 다섯 축에서 相性을 비춥니다.',
    leadSub: '연인, 친구, 가족, 존경하는 사람 — 누구와도.', nameLabel: '상대 이름', birthLabel: '상대 생년월일',
    namePlaceholder: '예: 김지은', submit: '相性 해석하기',
    disclaimer: '해석은 가능성을 보여줍니다. 실제 관계는 두 사람이 쓰는 이야기입니다.',
    resultEyebrow: '두 이야기가 엮임', overallLabel: '종합',
    footnote: '숫자는 하나의 안내일 뿐. 인연은 함께 사는 날들 속에서 모양을 바꿉니다.',
    radarAria: '5축 相性 레이더 차트', lifePathValue: (n) => `라이프 패스 ${n}`
  },
  timeline: {
    eyebrow: '인터랙티브 리딩', title: '10년 타임라인', subtitle: '앞으로 10년의 개인의 해 리듬',
    intro: '막대 하나가 개인의 해(1–9)입니다. 연도를 눌러 테마를 읽고, ✦는 인생 이정표입니다.',
    ageLabel: '나이', pyLabel: '개인의 해', yearLabel: '연도', milestoneLabel: '인생 이정표',
    thisYear: '올해', milestoneHere: '이정표의 해',     ageAt: (age) => `${age}세가 되는 해`,
    pyHeading: (py, theme) => `개인의 해 ${py} · ${theme}`,
    pyThemes: { 1: '새 시작', 2: '인내와 유대', 3: '표현과 기쁨', 4: '토대', 5: '변화와 자유', 6: '책임과 사랑', 7: '내성', 8: '수확', 9: '완성과 놓아줌' }
  },
  master: { title: '마스터 리딩', intro: '더 깊은 챕터를 모두에게 열었습니다. 눌러 탐색하세요.', expandAll: '모두 펼치기', collapseAll: '모두 접기' },
  extended: {
    moon: {
      title: '12개월 달 달력', intro: '다가올 신월·보름달 — 날짜를 눌러 간단한 의식을 보세요. ✦는 출생 월상과의 공명.',
      tapHint: '신월 또는 보름달 날짜를 눌러 의식 제안을 여세요.', newMoon: '신월', fullMoon: '보름달',
      resonance: '이 위상은 출생 달상과 울릴 수 있습니다 — 달 주기의 개인적 전환점.',
      ritualNew: '종이에 소원이나 의도를 하나 적으세요. 씨를 심으세요 — 문자 그대로든 은유든. 29일 돌볼 작은 시작을.',
      ritualFull: '감사한 것 세 가지를 말하세요. 더 이상 맞지 않는 습관이나 이야기 하나를 놓으세요. 달빛은 거울이지 심판이 아닙니다.'
    },
    biorhythm: {
      title: '90일 바이오리듬 예측', intro: '출생일에서 이어지는 네 파동 — 날을 눌러 리듬을 읽으세요. 점은 영점 교차일.',
      legend: '청록 점 = 크리티컬 데이 · 금테 = 오늘', today: '오늘', critical: '크리티컬 데이',
      rising: '상승 파동', falling: '하강 파동', neutral: '균형 근처',
      waves: { physical: '신체', emotional: '감정', intellectual: '지성', intuitive: '직관' },
      actionHigh: '행동·움직임·외향 표현에 맞을 수 있는 날.', actionLow: '휴식·보호·조용한 정리에 맞을 수 있는 날.',
      actionMid: '과도기 — 정점도 골짜기도 아님. 부드럽게 움직이세요.'
    },
    unified: {
      eyebrow: '확장 리딩', title: '통합 마스터 리딩', subtitle: '열아홉 이야기, 한 올',
      intro: '체계를 가로지르는 종합 — 판결이 아니라, 당신의 속도로 읽는 지도.',
      expandAll: '모두 펼치기', collapseAll: '모두 접기', footnote: '여기 모든 실은 가능성 중 하나. 의미를 고르는 것은 여전히 당신입니다.',
      chapterEssence: '핵심 본질', chapterYear: '올해의 초점', chapterLove: '사랑과 연결', chapterWork: '일과 표현',
      chapterShadow: '마주할 그림자', chapterLucky: '행운 나침반',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name} — <strong>${lpLabel}</strong>로서 인생 경로는 이렇게 읽힐 수 있습니다: ${lpDesc}</p>
         <p>태양 <strong>${sun}</strong>, <strong>${zodiac}</strong>의 해, <strong>${kyusei}</strong>는 같은 영혼의 다른 언어일 수 있습니다.</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p><strong>${year}</strong>년 개인의 해는 <strong>${py}</strong>. ${pyMeaning}</p>
         <p>올해의 파동에 역행하기보다 타는 계절일 수 있습니다.</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>태양의 <strong>${sunEl}</strong> 온기와 <strong>${animal}</strong> 아키타입 — 부드러움과 독립을 모두 존중할 때 연결이 흐르기 쉽습니다.</p>
         <p>라이프 패스 <strong>${lp}</strong>는 주고받는 방식의 반복 테마가 될 수 있습니다.</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p><strong>${lpLabel}</strong> 에너지는 일에서 생산보다 목적으로 드러날 수 있습니다. 출생년 <strong>${gogyou}</strong>는 쌓는 방식의 힌트일 수 있습니다.</p>
         ${exprNum ? `<p>이름 진동 <strong>${exprNum}</strong>이 세상에 비치는 모습에 한 겹 더합니다.</p>` : ''}`,
      shadowHints: {
        1: '리더십이 통제가 될 때의 고립', 2: '평화를 위해 자신을 잃음', 3: '깊이를 피해 표면에 머무름',
        4: '안전이 위협받을 때의 경직', 5: '약속을 피하는 불안', 6: '돌봄이 통제가 됨',
        7: '세상이 시끄러울 때의 후퇴', 8: '힘이 부족할 때의 강함', 9: '몸을 앞서는 이상',
        default: '강점이 과해질 때를 알아차리기'
      },
      shadowBody: (lp, hint) =>
        `<p>모든 재능에는 그림자가 있습니다. 라이프 패스 <strong>${lp}</strong>의 성장 가장자리: ${hint}.</p>
         <p>그림자에 이름을 붙이는 것은 패배가 아닙니다 — 균형의 첫걸음일 수 있습니다.</p>`,
      luckyBody: (colors, numbers, days, hint) =>
        luckyRow({ colors: '색', numbers: '숫자', days: '요일' }, colors, numbers, days, hint)
    }
  },
  deep: {
    scrollMoon: '달 달력으로 ↑', scrollBio: '90일 예측으로 ↑',
    scrollTimeline: '10년 타임라인으로 ↑',
    prompts: { generic: [
      { q: '이것이 무엇을 알아차리게 할까요?', a: '챕터 테마를 1분 머물러 보세요. 떠오른 감각이나 기억이 단서일 수 있습니다.' },
      { q: '이번 주 작은 한 걸음은?', a: '오늘 끝낼 만큼 작은 행동 하나. 확장 리딩은 숙제가 아닌 부드러운 실험으로.' }
    ]},
    personalYear: {
      thisMonth: '이번 달', personalMonth: (n) => `개인월 ${n}`, tagAction: '움직임', tagWait: '기르기', tagWatch: '주의',
      ritualHint: '주의의 달: 결정을 늦추고, 휴식을 늘리고, 땅에 닿는 의식이 도움이 될 수 있습니다.',
      noWatch: '올해는 특별히 주의할 개인월이 적습니다 — 비교적 안정된 리듬.',
      pathSuffix: (lp) => `패스${lp}`, encounterHint: (py) => `개인의 해 ${py} 테마가 활성일 때 나타날 수 있음`,
      encounterDetail: (type, el, py) => `「${type}」으로 느껴지는 인연은 ${el} 원소의 계절을 비출 수 있습니다.`,
      keywords: {
        1: ['씨앗', '용기', '시작'], 2: ['인내', '유대', '경청'], 3: ['기쁨', '표현', '연결'],
        4: ['구축', '질서', '뿌리'], 5: ['변화', '자유', '탐색'], 6: ['사랑', '가정', '돌봄'],
        7: ['고요', '학습', '내면'], 8: ['수확', '힘', '받아들임'], 9: ['놓아줌', '완성', '용서'],
        default: ['흐름', '신뢰', '열림']
      },
      encounterTypes: {
        fire: ['불꽃', '스승', '동맹'], water: ['치유자', '거울', '인도자'], earth: ['건설자', '닻', '스승'],
        air: ['전령', '협력자', '아이디어 운반자'], wood: ['키우는 이', '동행자', '길잡이'],
        metal: ['연마자', '도전자', '장로'], default: ['동맹', '거울', '인도자']
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) => `라이프 패스 ${lp} × 개인의 해 ${py}: ${pyMeaning}`,
      yearWaveHint: '인생 지도의 10년 타임라인 카드에서 전체를 읽을 수 있습니다.',
      resonateLabel: '共鳴하기 쉬움', resonateText: (a, b) => `패스 ${a}나 ${b}의 사람과는 설명이 적어도 리듬이 맞을 수 있습니다.`,
      growLabel: '성장을 촉진', growText: (a, b) => `패스 ${a}나 ${b}는 마찰을 가져올 수 있습니다 — 호기심이면 확장의 씨앗.`,
      careLabel: '세심하게', careText: (n) => `패스 ${n} 에너지는 강하게 느껴질 수 있습니다 — 선악이 아니라 경계를 의식하세요.`,
      careerNatural: '자연스러운 적성', careerNaturalText: (lp) => `라이프 패스 ${lp} 재능이 무리 없이 빛나는 역할.`,
      careerStretch: '스트레치', careerStretchText: (n) => `패스 ${n} 에너지를 빌린 부업이 숨은 기술을 열 수 있습니다.`,
      careerRest: '휴식 형태', careerRestText: (lp) => `회복 방식도 중요합니다. 패스 ${lp}에는 특정 휴식이 지속 가능성을 돕습니다.`,
      soulQ1: '인생에서 반복되는 것은?', soulA1: (lp) => `라이프 패스 ${lp}는 다른 옷으로 같은 수업을 가져올 수 있습니다.`,
      soulQ2: '「충분」은 어떤 모습?', soulA2: '영혼의 수업은 야심 속에 숨습니다. 이 계절의 충분을 정의해 보세요.',
      figures: {
        1: [{ name: '개척자들', note: '모방이 아니라 용기의 선택에 주목.' }],
        2: [{ name: '다리 놓는 이들', note: '중심이 아닌데도 연결하는 사람이 거울이 됩니다.' }],
        3: [{ name: '예술가·이야기꾼', note: '기쁨을 소명으로.' }],
        4: [{ name: '장인', note: '인내가 형태가 됨.' }],
        5: [{ name: '탐험가', note: '자유와 책임.' }],
        6: [{ name: '보호자', note: '숨 막히지 않는 사랑.' }],
        7: [{ name: '탐구자', note: '편안함보다 진실.' }],
        8: [{ name: '유산의 건축가', note: '힘을 순환.' }],
        9: [{ name: '인도주의자', note: '완성을 선물로.' }],
        11: [{ name: '빛을 전하는 이', note: '민감함을 봉사로.' }],
        22: [{ name: '마스터 빌더', note: '꿈에 기초를.' }],
        33: [{ name: '사랑의 스승', note: '무조건을 연습으로.' }]
      }
    },
    sun: {
      elementMap: {
        fire: { direction: '남 · 불', season: '여름 열기가 당신의 빛을 비출 수 있습니다.', ritual: '촛불, 햇빛, 아침 움직임.' },
        earth: { direction: '중앙 · 흙', season: '수확의 계절이 당신을 땅에 붙일 수 있습니다.', ritual: '맨발로 흙, 천천히 요리, 하나 완성하기.' },
        air: { direction: '동 · 바람', season: '봄바람이 아이디어를 일으킬 수 있습니다.', ritual: '세 줄 일기, 이어폰 없이 걷기.' },
        water: { direction: '서 · 물', season: '겨울 깊이가 안으로 부를 수 있습니다.', ritual: '따뜻한 목욕, 달 바라보기.' },
        wood: { direction: '동 · 나무', season: '성장의 계절에 씨뿌리기.', ritual: '녹색 식물, 29일 습관.' },
        metal: { direction: '서 · 금', season: '가을 맑음이 정제를 돕습니다.', ritual: '서랍 하나 비우기, 흰 옷.' }
      }
    },
    kyusei: {
      phases: {
        1: '주기 1년차: 본명 테마 심기.', 2: '2년차: 인내와 협력.', 3: '3년차: 표현과 가시성.',
        4: '4년차: 토대.', 5: '5년차: 변화와 이동.', 6: '6년차: 책임과 가정.',
        7: '7년차: 내성.', 8: '8년차: 수확.', 9: '9년차: 완성과 준비.', default: '9년 주기의 한 지점.'
      }
    },
    tarot: {
      light: '빛의 면', shadow: '그림자 면',
      lightText: (name) => `${name} 정위: 영혼의 선물이 가장 맑게 — 카드의 최고 표현을 담을 용기.`,
      shadowText: (name) => `${name} 역위: 벌이 아니라 통합의 요청 — 어디가 무겁나요? 그 무게가 변화의 노크일 수 있습니다.`
    }
  }
};

const ES = {
  header: { eyebrow: 'Cosmología personal', subtitle: 'Diecinueve historias, más amor y compatibilidad' },
  sections: {
    numerology: ['Numerología', ''],
    western: ['Astrología occidental', ''],
    eastern: ['Destino oriental', ''],
    characters: ['Arquetipos', ''],
    sacred: ['Maya y tarot', ''],
    nature: ['Símbolos de la naturaleza', ''],
    cycles: ['Ondas de hoy', ''],
    lifeMap: ['Mapa vital', '']
  },
  bio: { physical: 'Físico', emotional: 'Emocional', intellectual: 'Intelectual', intuitive: 'Intuitivo' },
  modal: {
    deepRead: 'Leer más',
    premiumBadge: 'Lectura profunda (gratis)',
    premiumPitch: 'Más profundo',
    premiumCta: 'Ver contenido profundo',
    close: 'Cerrar'
  },
  premiumShowcase: {
    roadmapSummary: 'Ver funciones',
    note: 'Todas las lecturas son gratis — toca cualquier carta para explorar capítulos más profundos.',
    optionalEyebrow: 'Incluido gratis',
    freeIncludesTitle: 'Incluido gratis',
    allFreeTitle: 'También incluido — sin suscripción',
    allFreeNote: 'Todas las funciones de esta página son gratis. Las lecturas muestran posibilidades; tú escribes tu historia.',
    ariaLabel: 'Qué incluye'
  },
  gloss: {
    stripTitle: 'Glosario rápido — toca ? en cualquier carta',
    tipAria: (term) => `¿Qué significa «${term}»?`
  },
  form: {
    birthMonthLabel: 'Mes', birthDayLabel: 'Día', birthYearLabel: 'Año',
    birthMonthPlaceholder: 'Mes', birthDayPlaceholder: 'Día', birthYearPlaceholder: 'Año'
  },
  cards: {
    lifepath: 'Número del camino de vida', personalYear: 'Año personal', expression: 'Número del nombre',
    expressionLabel: 'Vibración de tu nombre', sun: 'Signo solar', moonTrait: 'Tendencia lunar',
    moonTraitLabel: 'Según la fase lunar al nacer', moonTraitNote: 'El signo lunar exacto requiere la hora de nacimiento',
    zodiac: 'Zodiaco chino', sixty: 'Pilar del año (60 tallos-ramas)', kyusei: 'Estrella vital Kyusei',
    gogyou: 'Cinco elementos', animal: 'Arquetipo animal', celtic: 'Árbol celta', maya: 'KIN calendario maya',
    tarotBirth: 'Carta de nacimiento', tarotDaily: 'Carta de hoy', birthstone: 'Piedra de nacimiento',
    birthflower: 'Flor de nacimiento', biorhythm: 'Biorritmo', moonTonight: 'Luna de esta noche',
    lifeStagePrev: 'Hito reciente', lifeStageNext: 'Próximo hito', timeline: 'Línea de 10 años',
    timelineLabel: 'La década por venir',
    timelineDesc: 'La onda de tu año personal, años cumbre e hitos — toca cada año para explorar.',
    unified: 'Lectura maestra unificada',
    unifiedDesc: 'Diecinueve sistemas tejidos en una historia — esencia, amor, trabajo y brújula de la suerte.'
  },
  fmt: {
    yearYou: (y) => `Tú en ${y}`, bornYearZodiac: (char) => `Nacido en el año del ${char}`,
    sixtyDesc: (el) => `Un sello que vuelve cada 60 años. Lleva la naturaleza de ${el}.`,
    kyuseiStar: (el) => `Estrella ${el}`, gogyouLabel: 'Elemento del año de nacimiento',
    animalNum: (n) => `Tipo ${n}/60`, animalFallback: 'Una presencia con carácter propio.',
    celticLabel: 'Uno de los trece árboles sagrados', mayaDesc: 'Tu día en el conteo sagrado de 260. El sello es esencia; el tono, ritmo.',
    tarotMajor: (n) => `Arcano mayor ${n}`, tarotDailyFor: (y, m, d) => `Para ti el ${d}/${m}/${y}`,
    monthStone: (m) => `Piedra del mes ${m}`, monthFlower: (m) => `Flor del mes ${m}`,
    birthflowerDesc: 'Símbolo de tu mes de nacimiento. Tenerla cerca puede ayudarte a sentirte arraigado.',
    biorhythmDays: (days, tag) => `Biorritmo — día ${days.toLocaleString(tag)} desde el nacimiento`,
    moonPhasePct: (pct) => `Fase ${pct}% · La luna toca toda vida. ¿Qué podría preguntarte esta noche?`,
    bornOn: (y, m, d) => `Nacido el ${d}/${m}/${y}`, ageNow: (age) => `Ahora <strong>${age}</strong> años`,
    nextMilestone: (age, name) => `Próximo hito: <strong>${age} años — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `Tu próximo hito vital es <strong>${name} a los ${age}</strong>. A unos <strong>${years} años</strong>.`,
    elementOf: (el) => `elemento ${el}`, ageYears: (n) => `${n} años`,
    summaryLabel: 'Tu historia',
    summaryLead: (name, label) => `${name}, se dice que llevas el alma de <strong>${label}</strong>.`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `En astrología occidental, tu Sol está en <strong>${sun}</strong> (elemento ${sunEl}); ` +
      `en el calendario oriental, <strong>${cz}</strong>; en Kyusei, <strong>${ks}</strong>; ` +
      `con <strong>${gy}</strong> en el núcleo. La sabiduría animal te nombra <strong>${an}</strong>; tu árbol guardián es <strong>${ct}</strong>. ` +
      `En el conteo maya: <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>; arquetipo tarot: <strong>${tb}</strong>.`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `En ${year}, cabalgas la onda del <strong>Año personal ${py}</strong>. El biorritmo sugiere ${bioState}. ` +
      `Llevas el ánimo de <strong>${mt}</strong>; esta noche, <strong>${mp}</strong> te ilumina. ${nextHtml}`,
    summaryHint: '↓ Toca cualquier carta para una lectura más profunda',
    bioUp: '<strong>fase ascendente</strong> (buena para acción y expresión)',
    bioDown: '<strong>fase reflexiva</strong> (buena para descanso y orden)',
    bioBalanced: '<strong>fase equilibrada</strong>',     personalYearWave: (year) => `Año personal ${year}`,
    cardMore: 'Leer más',
    cardMoreAria: '. Abrir detalles',
    cardAria: (system, value) => `${system}, ${value}`,
    expressionHintAddRoman: 'Añade una grafía en letras latinas para ver también el número internacional del nombre.',
    expressionLatinInvalid: 'No se encontraron letras A–Z en el campo romano; no se mostró el número internacional.'
  },
  love: {
    eyebrow: 'Arquetipo amoroso', title: 'Lectura de amor', phaseLabel: 'Fase amorosa actual',
    sweetTitle: 'Tus puntos dulces en el amor', careTitle: 'Recordatorios suaves',
    matchesTitle: 'Tipos con los que armonizas', actionLabel: 'Un pequeño paso esta noche para invitar conexión',
    cta: '¿Curiosidad por alguien? Prueba la lectura de compatibilidad',
    footnote: 'Esta es una posibilidad. Tú escribes tu propia historia de amor.',
    shareTitle: 'Compartir lectura de amor', shareDesc: 'Guarda la imagen y publícala en X o LINE.',
    sharePreviewAria: 'Vista previa de tarjeta de amor', shareAlt: (name) => `Tarjeta de amor de ${name}`,
    shareSaved: 'Imagen guardada', shareCopied: 'Texto copiado', shareCopyFail: 'No se pudo copiar', shareFail: 'No se pudo compartir'
  },
  compat: {
    eyebrow: 'Compatibilidad', title: 'Leer compatibilidad juntos',
    lead: 'Introduce otro nombre y fecha de nacimiento para reflejar la compatibilidad en cinco ejes.',
    leadSub: 'Pareja, amigo, familia o alguien que admires — cualquiera.',
    nameLabel: 'Su nombre', birthLabel: 'Su fecha de nacimiento', namePlaceholder: 'ej. María García',
    submit: 'Revelar compatibilidad',
    disclaimer: 'Las lecturas muestran posibilidades. Vuestra relación real es la historia que escribís juntos.',
    resultEyebrow: 'Dos historias tejidas', overallLabel: 'Global',
    footnote: 'Los números son una guía. Los lazos cambian de forma día a día.',
    radarAria: 'Gráfico radar de compatibilidad en cinco ejes', lifePathValue: (n) => `Camino de vida ${n}`
  },
  timeline: {
    eyebrow: 'Lectura interactiva', title: 'Línea de 10 años', subtitle: 'Tu ritmo de año personal en la década venidera',
    intro: 'Cada barra es un año personal (1–9). Toca un año para leer su tema; ✦ marca un hito vital.',
    ageLabel: 'Edad', pyLabel: 'Año personal', yearLabel: 'Año', milestoneLabel: 'Hito vital',
    thisYear: 'Este año', milestoneHere: 'Año de hito',     ageAt: (age) => `Al cumplir ${age}`,
    pyHeading: (py, theme) => `Año personal ${py} · ${theme}`,
    pyThemes: { 1: 'Nuevos comienzos', 2: 'Paciencia y lazos', 3: 'Expresión y alegría', 4: 'Cimientos', 5: 'Cambio y libertad', 6: 'Responsabilidad y amor', 7: 'Introspección', 8: 'Cosecha', 9: 'Cierre y soltar' }
  },
  master: { title: 'Lectura maestra', intro: 'Capítulos más profundos, abiertos para todos. Toca cada uno para explorar.', expandAll: 'Abrir todo', collapseAll: 'Cerrar todo' },
  extended: {
    moon: {
      title: 'Calendario lunar de 12 meses',
      intro: 'Lunas nuevas y llenas por venir — toca una fecha para un ritual sencillo. ✦ marca resonancia con tu fase lunar de nacimiento.',
      tapHint: 'Toca una fecha de luna nueva o llena para abrir una sugerencia ritual.',
      newMoon: 'Luna nueva', fullMoon: 'Luna llena',
      resonance: 'Esta fase puede hacer eco de tu luna de nacimiento — un punto de giro personal en el ciclo lunar.',
      ritualNew: 'Escribe un deseo o intención en papel. Planta una semilla, literal o metafórica. Empieza algo pequeño que puedas cuidar 29 días.',
      ritualFull: 'Nombra tres cosas por las que estás agradecido. Suelta un hábito o historia que ya no encaje. Que la luz de luna sea espejo, no juez.'
    },
    biorhythm: {
      title: 'Pronóstico biorrítmico de 90 días',
      intro: 'Cuatro ondas desde tu nacimiento — toca un día para leer su ritmo. Los puntos marcan días críticos al cruzar cero.',
      legend: 'Punto turquesa = día crítico · borde dorado = hoy', today: 'Hoy', critical: 'Día crítico',
      rising: 'Onda ascendente', falling: 'Onda descendente', neutral: 'Cerca del equilibrio',
      waves: { physical: 'Físico', emotional: 'Emocional', intellectual: 'Intelectual', intuitive: 'Intuitivo' },
      actionHigh: 'Un día que puede favorecer acción, movimiento y expresión exterior.',
      actionLow: 'Un día que puede favorecer descanso, protección y consolidación tranquila.',
      actionMid: 'Día de transición — ni pico ni valle. Muévete con suavidad.'
    },
    unified: {
      eyebrow: 'Lectura ampliada', title: 'Lectura maestra unificada', subtitle: 'Diecinueve historias, un solo tejido',
      intro: 'Una síntesis entre sistemas — no un veredicto, sino un mapa a tu ritmo.',
      expandAll: 'Abrir todo', collapseAll: 'Cerrar todo', footnote: 'Cada hilo aquí es una posibilidad. Tú eliges qué significa.',
      chapterEssence: 'Tu esencia central', chapterYear: 'Enfoque de este año', chapterLove: 'Amor y conexión',
      chapterWork: 'Trabajo y expresión', chapterShadow: 'Sombra a honrar', chapterLucky: 'Brújula de la suerte',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name} — como <strong>${lpLabel}</strong>, tu camino de vida puede centrarse en: ${lpDesc}</p>
         <p>Tu sol en <strong>${sun}</strong>, año del <strong>${zodiac}</strong> y <strong>${kyusei}</strong> pueden tejerse como notas distintas del mismo acorde.</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p>En <strong>${year}</strong>, tu año personal es <strong>${py}</strong>. ${pyMeaning}</p>
         <p>La onda de este año puede invitarte a ir con su corriente, no contra ella.</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>Con la calidez <strong>${sunEl}</strong> de tu signo solar y el arquetipo <strong>${animal}</strong>, la conexión puede fluir mejor honrando ternura e independencia.</p>
         <p>El camino de vida <strong>${lp}</strong> puede colorear cómo das y recibes — no como tipo fijo, sino tema recurrente.</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p>La energía <strong>${lpLabel}</strong> puede expresarse en el trabajo como propósito, no solo productividad. El elemento <strong>${gogyou}</strong> de tu año de nacimiento sugiere cómo construyes.</p>
         ${exprNum ? `<p>Tu vibración nominal <strong>${exprNum}</strong> puede añadir otra capa a cómo te ven.</p>` : ''}`,
      shadowHints: {
        1: 'cuidado con el aislamiento cuando el liderazgo se vuelve control', 2: 'cuidado con perderse al mantener la paz',
        3: 'cuidado con quedarse en la superficie', 4: 'cuidado con la rigidez cuando la seguridad se siente amenazada',
        5: 'cuidado con la inquietud que evita el compromiso', 6: 'cuidado con el cuidado que se vuelve control',
        7: 'cuidado con el retiro cuando el mundo es demasiado ruidoso', 8: 'cuidado con la fuerza cuando el poder escasea',
        9: 'cuidado con ideales que superan al cuerpo', default: 'notar cuando tu fortaleza se inclina al exceso'
      },
      shadowBody: (lp, hint) =>
        `<p>Todo don proyecta sombra. Para el camino <strong>${lp}</strong>, el borde de crecimiento puede ser: ${hint}.</p>
         <p>Nombrar la sombra no es derrota — puede ser el primer paso hacia el equilibrio.</p>`,
      luckyBody: (colors, numbers, days, hint) =>
        luckyRow({ colors: 'Colores', numbers: 'Números', days: 'Días' }, colors, numbers, days, hint)
    }
  },
  deep: {
    scrollMoon: 'Ir al calendario lunar ↑', scrollBio: 'Ir al pronóstico de 90 días ↑',
    scrollTimeline: 'Ir a la línea de 10 años ↑',
    prompts: { generic: [
      { q: '¿Qué podría invitarme a notar?', a: 'Quédate un minuto con el tema del capítulo. Lo primero que surja puede ser tu pista — no un veredicto.' },
      { q: '¿Un pequeño paso esta semana?', a: 'Elige una acción pequeña para hoy. Las lecturas ampliadas funcionan mejor como experimentos suaves.' }
    ]},
    personalYear: {
      thisMonth: 'Este mes', personalMonth: (n) => `Mes personal ${n}`, tagAction: 'Mover', tagWait: 'Nutrir', tagWatch: 'Observar',
      ritualHint: 'En meses de observación: decisiones lentas, más descanso y un ritual de arraigo pueden ayudar.',
      noWatch: 'Sin meses personales de alta observación este año — un ritmo más estable.',
      pathSuffix: (lp) => `Camino-${lp}`, encounterHint: (py) => `Puede aparecer cuando los temas del Año personal ${py} estén activos`,
      encounterDetail: (type, el, py) => `Conexiones «${type}» pueden reflejar tu temporada de elemento ${el}.`,
      keywords: {
        1: ['Semilla', 'Valor', 'Comenzar'], 2: ['Paciencia', 'Lazo', 'Escuchar'], 3: ['Alegría', 'Expresar', 'Conectar'],
        4: ['Construir', 'Orden', 'Raíz'], 5: ['Cambio', 'Libertad', 'Explorar'], 6: ['Amor', 'Hogar', 'Cuidar'],
        7: ['Quietud', 'Estudio', 'Interior'], 8: ['Cosecha', 'Poder', 'Recibir'], 9: ['Soltar', 'Completar', 'Perdonar'],
        default: ['Fluir', 'Confiar', 'Abrir']
      },
      encounterTypes: {
        fire: ['Chispa', 'Mentor', 'Aliado'], water: ['Sanador', 'Espejo', 'Guía'], earth: ['Constructor', 'Ancla', 'Maestro'],
        air: ['Mensajero', 'Colaborador', 'Portador de ideas'], wood: ['Cultivador', 'Compañero', 'Explorador'],
        metal: ['Refinador', 'Desafiante', 'Anciano'], default: ['Aliado', 'Espejo', 'Guía']
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) => `Camino de vida ${lp} con Año personal ${py}: ${pyMeaning}`,
      yearWaveHint: 'Abre la carta de Línea de 10 años en el mapa vital para la década completa.',
      resonateLabel: 'Puede resonar', resonateText: (a, b) => `Otros en caminos ${a} o ${b} pueden sentirse familiares.`,
      growLabel: 'Puede estimular crecimiento', growText: (a, b) => `Caminos ${a} o ${b} pueden desafiarte — fricción que puede expandir con curiosidad.`,
      careLabel: 'Con cuidado', careText: (n) => `La energía del camino ${n} puede sentirse intensa — vale la pena poner límites conscientes.`,
      careerNatural: 'Encaje natural', careerNaturalText: (lp) => `Roles donde los dones del camino ${lp} brillan sin forzar.`,
      careerStretch: 'Zona de estiramiento', careerStretchText: (n) => `Proyectos que tomen energía del camino ${n} pueden desbloquear habilidades ocultas.`,
      careerRest: 'Forma de descanso', careerRestText: (lp) => `Cómo recuperas importa. El camino ${lp} puede necesitar un tipo específico de pausa.`,
      soulQ1: '¿Qué se repite en mi vida?', soulA1: (lp) => `El camino ${lp} puede traer la misma lección con distintos disfraces.`,
      soulQ2: '¿Cómo sería «suficiente»?', soulA2: 'Las lecciones del alma a menudo se esconden en la ambición. Define suficiente para esta temporada.',
      figures: {
        1: [{ name: 'Líderes pioneros', note: 'No para imitar — para notar cómo se ve el valor en sus elecciones.' }],
        2: [{ name: 'Constructores de puentes', note: 'Quienes conectan sin centro de escena.' }],
        3: [{ name: 'Artistas y narradores', note: 'La alegría como vocación.' }],
        4: [{ name: 'Artesanos', note: 'Paciencia hecha visible.' }],
        5: [{ name: 'Exploradores', note: 'Libertad con responsabilidad.' }],
        6: [{ name: 'Cuidadores', note: 'Amor que no ahoga.' }],
        7: [{ name: 'Buscadores', note: 'Verdad sobre comodidad.' }],
        8: [{ name: 'Constructores de legado', note: 'Poder circulado.' }],
        9: [{ name: 'Humanitarios', note: 'Completar como regalo.' }],
        11: [{ name: 'Iluminadores', note: 'Sensibilidad como servicio.' }],
        22: [{ name: 'Maestros constructores', note: 'Sueños con cimientos.' }],
        33: [{ name: 'Maestros del amor', note: 'Incondicional como práctica.' }]
      }
    },
    sun: {
      elementMap: {
        fire: { direction: 'Sur · Fuego', season: 'El calor del verano puede reflejar tu resplandor.', ritual: 'Vela, luz solar o movimiento matutino.' },
        earth: { direction: 'Centro · Tierra', season: 'Las cosechas pueden arraigarte.', ritual: 'Pies descalzos en tierra, comida cocinada despacio.' },
        air: { direction: 'Este · Aire', season: 'Los vientos de primavera pueden agitar ideas.', ritual: 'Diario de tres frases, caminar sin auriculares.' },
        water: { direction: 'Oeste · Agua', season: 'Las profundidades del invierno pueden llamarte hacia dentro.', ritual: 'Baño tibio, contemplar la luna.' },
        wood: { direction: 'Este · Madera', season: 'Las estaciones de crecimiento favorecen sembrar.', ritual: 'Planta verde, un hábito de 29 días.' },
        metal: { direction: 'Oeste · Metal', season: 'La claridad del otoño puede ayudarte a refinar.', ritual: 'Ordenar un cajón, ropa blanca.' }
      }
    },
    kyusei: {
      phases: {
        1: 'Año 1 del ciclo: sembrar temas honmei.', 2: 'Año 2: paciencia y asociación.', 3: 'Año 3: expresión y visibilidad.',
        4: 'Año 4: cimientos.', 5: 'Año 5: cambio y movimiento.', 6: 'Año 6: responsabilidad y hogar.',
        7: 'Año 7: introspección.', 8: 'Año 8: cosecha.', 9: 'Año 9: cierre — preparar nueva ronda.', default: 'Un punto en tu ciclo honmei de 9 años.'
      }
    },
    tarot: {
      light: 'Rostro de luz', shadow: 'Rostro de sombra',
      lightText: (name) => `${name} derecha: el don del alma en su forma más clara.`,
      shadowText: (name) => `${name} invertida: no castigo — la carta pide integración. ¿Dónde pesa? Ese peso puede ser transformación llamando.`
    }
  }
};

const FR = {
  header: { eyebrow: 'Cosmologie personnelle', subtitle: 'Dix-neuf histoires, plus amour et compatibilité' },
  sections: {
    numerology: ['Numérologie', ''],
    western: ['Astrologie occidentale', ''],
    eastern: ['Destin oriental', ''],
    characters: ['Archétypes', ''],
    sacred: ['Maya et tarot', ''],
    nature: ['Symboles de la nature', ''],
    cycles: ['Ondes du jour', ''],
    lifeMap: ['Carte de vie', '']
  },
  bio: { physical: 'Physique', emotional: 'Émotionnel', intellectual: 'Intellectuel', intuitive: 'Intuitif' },
  modal: {
    deepRead: 'Lire plus',
    premiumBadge: 'Lecture profonde (gratuite)',
    premiumPitch: 'Plus profond',
    premiumCta: 'Voir le contenu profond',
    close: 'Fermer'
  },
  premiumShowcase: {
    roadmapSummary: 'Voir les fonctions',
    note: 'Toutes les lectures sont gratuites — touchez une carte pour explorer des chapitres plus profonds.',
    optionalEyebrow: 'Inclus gratuitement',
    freeIncludesTitle: 'Inclus gratuitement',
    allFreeTitle: 'Également inclus — sans abonnement',
    allFreeNote: 'Toutes les fonctions de cette page sont gratuites. Les lectures montrent des possibilités ; vous écrivez votre histoire.',
    ariaLabel: 'Ce qui est inclus'
  },
  gloss: {
    stripTitle: 'Glossaire rapide — touchez ? sur une carte',
    tipAria: (term) => `Que signifie « ${term} » ?`
  },
  form: {
    birthMonthLabel: 'Mois', birthDayLabel: 'Jour', birthYearLabel: 'Année',
    birthMonthPlaceholder: 'Mois', birthDayPlaceholder: 'Jour', birthYearPlaceholder: 'Année'
  },
  cards: {
    lifepath: 'Nombre du chemin de vie', personalYear: 'Année personnelle', expression: 'Nombre du nom',
    expressionLabel: 'Vibration de votre nom', sun: 'Signe solaire', moonTrait: 'Tendance lunaire',
    moonTraitLabel: 'Selon la phase lunaire à la naissance', moonTraitNote: 'Le signe lunaire exact exige l\'heure de naissance',
    zodiac: 'Zodiaque chinois', sixty: 'Pilier de l\'année (60 tiges-branches)', kyusei: 'Étoile vitale Kyusei',
    gogyou: 'Cinq éléments', animal: 'Archétype animal', celtic: 'Arbre celtique', maya: 'KIN maya',
    tarotBirth: 'Carte de naissance', tarotDaily: 'Carte du jour', birthstone: 'Pierre de naissance',
    birthflower: 'Fleur de naissance', biorhythm: 'Biorythme', moonTonight: 'Lune de ce soir',
    lifeStagePrev: 'Jalon récent', lifeStageNext: 'Prochain jalon', timeline: 'Chronologie de 10 ans',
    timelineLabel: 'La décennie à venir',
    timelineDesc: 'La vague de votre année personnelle, les années culminantes et les jalons — touchez chaque année pour explorer.',
    unified: 'Lecture maître unifiée',
    unifiedDesc: 'Dix-neuf systèmes tissés en une histoire — essence, amour, travail et boussole de chance.'
  },
  fmt: {
    yearYou: (y) => `Vous en ${y}`, bornYearZodiac: (char) => `Né·e sous le signe du ${char}`,
    sixtyDesc: (el) => `Un sceau qui revient tous les 60 ans. Porte la nature de ${el}.`,
    kyuseiStar: (el) => `Étoile ${el}`, gogyouLabel: 'Élément de l\'année de naissance',
    animalNum: (n) => `Type ${n}/60`, animalFallback: 'Une présence au caractère distinct.',
    celticLabel: 'Un des treize arbres sacrés', mayaDesc: 'Votre jour dans le compte sacré de 260. Le sceau est l\'essence ; le ton, le rythme.',
    tarotMajor: (n) => `Arcane majeur ${n}`, tarotDailyFor: (y, m, d) => `Pour vous le ${d}/${m}/${y}`,
    monthStone: (m) => `Pierre du mois ${m}`, monthFlower: (m) => `Fleur du mois ${m}`,
    birthflowerDesc: 'Symbole de votre mois de naissance. L\'avoir près de vous peut vous ancrer.',
    biorhythmDays: (days, tag) => `Biorythme — jour ${days.toLocaleString(tag)} depuis la naissance`,
    moonPhasePct: (pct) => `Phase ${pct}% · La lune touche toute vie. Que pourrait vous demander la lune ce soir ?`,
    bornOn: (y, m, d) => `Né·e le ${d}/${m}/${y}`, ageNow: (age) => `Maintenant <strong>${age}</strong> ans`,
    nextMilestone: (age, name) => `Prochain jalon : <strong>${age} ans — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `Votre prochain jalon vital est <strong>${name} à ${age} ans</strong>. Environ <strong>${years} ans</strong>.`,
    elementOf: (el) => `élément ${el}`, ageYears: (n) => `${n} ans`,
    summaryLabel: 'Votre histoire',
    summaryLead: (name, label) => `${name}, on dit que vous portez l\'âme de <strong>${label}</strong>.`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `En astrologie occidentale, votre Soleil est en <strong>${sun}</strong> (élément ${sunEl}) ; ` +
      `dans le calendrier oriental, <strong>${cz}</strong> ; en Kyusei, <strong>${ks}</strong> ; ` +
      `avec <strong>${gy}</strong> au cœur. La sagesse animale vous nomme <strong>${an}</strong> ; votre arbre gardien est <strong>${ct}</strong>. ` +
      `Dans le compte maya : <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong> ; archétype tarot : <strong>${tb}</strong>.`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `En ${year}, vous chevauchez la vague de l'<strong>année personnelle ${py}</strong>. Le biorythme suggère ${bioState}. ` +
      `Vous portez l'humeur de <strong>${mt}</strong> ; ce soir, <strong>${mp}</strong> vous éclaire. ${nextHtml}`,
    summaryHint: '↓ Touchez une carte pour une lecture plus profonde',
    bioUp: '<strong>phase ascendante</strong> (favorable à l\'action et à l\'expression)',
    bioDown: '<strong>phase réflexive</strong> (favorable au repos et au tri)',
    bioBalanced: '<strong>phase équilibrée</strong>',     personalYearWave: (year) => `Année personnelle ${year}`,
    cardMore: 'Lire plus',
    cardMoreAria: '. Ouvrir les détails',
    cardAria: (system, value) => `${system}, ${value}`,
    expressionHintAddRoman: 'Ajoutez une graphie en lettres latines pour voir aussi le nombre international du nom.',
    expressionLatinInvalid: 'Aucune lettre A–Z trouvée dans le champ romain ; le nombre international n\'a pas été affiché.'
  },
  love: {
    eyebrow: 'Archétype amoureux', title: 'Lecture amoureuse', phaseLabel: 'Phase amoureuse actuelle',
    sweetTitle: 'Vos points doux en amour', careTitle: 'Rappels bienveillants',
    matchesTitle: 'Types avec lesquels vous harmonisez', actionLabel: 'Un petit pas ce soir pour inviter la connexion',
    cta: 'Curieux·se de quelqu\'un ? Essayez la lecture de compatibilité',
    footnote: 'C\'est une possibilité. Vous écrivez votre propre histoire d\'amour.',
    shareTitle: 'Partager la lecture amoureuse', shareDesc: 'Enregistrez l\'image et publiez sur X ou LINE.',
    sharePreviewAria: 'Aperçu de la carte amoureuse', shareAlt: (name) => `Carte amoureuse de ${name}`,
    shareSaved: 'Image enregistrée', shareCopied: 'Texte copié', shareCopyFail: 'Copie impossible', shareFail: 'Partage impossible'
  },
  compat: {
    eyebrow: 'Compatibilité', title: 'Lire la compatibilité à deux',
    lead: 'Entrez un autre nom et une date de naissance pour refléter la compatibilité sur cinq axes.',
    leadSub: 'Partenaire, ami, famille ou quelqu\'un que vous admirez.',
    nameLabel: 'Son nom', birthLabel: 'Sa date de naissance', namePlaceholder: 'ex. Marie Dupont',
    submit: 'Révéler la compatibilité',
    disclaimer: 'Les lectures montrent des possibilités. Votre relation réelle est l\'histoire que vous écrivez ensemble.',
    resultEyebrow: 'Deux histoires tissées', overallLabel: 'Global',
    footnote: 'Les nombres ne sont qu\'un guide. Les liens changent au fil des jours vécus ensemble.',
    radarAria: 'Graphique radar de compatibilité à cinq axes', lifePathValue: (n) => `Chemin de vie ${n}`
  },
  timeline: {
    eyebrow: 'Lecture interactive', title: 'Chronologie de 10 ans', subtitle: 'Votre rythme d\'année personnelle pour la décennie à venir',
    intro: 'Chaque barre est une année personnelle (1–9). Touchez une année pour lire son thème ; ✦ marque un jalon de vie.',
    ageLabel: 'Âge', pyLabel: 'Année personnelle', yearLabel: 'Année', milestoneLabel: 'Jalon de vie',
    thisYear: 'Cette année', milestoneHere: 'Année de jalon', ageAt: (age) => `En atteignant ${age} ans`,
    pyHeading: (py, theme) => `Année personnelle ${py} · ${theme}`,
    pyThemes: { 1: 'Nouveaux départs', 2: 'Patience et liens', 3: 'Expression et joie', 4: 'Fondations', 5: 'Changement et liberté', 6: 'Responsabilité et amour', 7: 'Introspection', 8: 'Récolte', 9: 'Achèvement et lâcher-prise' }
  },
  master: { title: 'Lecture maître', intro: 'Des chapitres plus profonds, ouverts à tous. Touchez chacun pour explorer.', expandAll: 'Tout ouvrir', collapseAll: 'Tout fermer' },
  extended: {
    moon: {
      title: 'Calendrier lunaire sur 12 mois',
      intro: 'Nouvelles et pleines lunes à venir — touchez une date pour un rituel simple. ✦ marque la résonance avec votre phase lunaire de naissance.',
      tapHint: 'Touchez une date de nouvelle ou pleine lune pour ouvrir une suggestion rituelle.',
      newMoon: 'Nouvelle lune', fullMoon: 'Pleine lune',
      resonance: 'Cette phase peut faire écho à votre lune de naissance — un tournant personnel dans le cycle lunaire.',
      ritualNew: 'Écrivez un souhait ou une intention sur papier. Plantez une graine, au sens propre ou figuré. Commencez quelque chose de petit à garder 29 jours.',
      ritualFull: 'Nommez trois choses dont vous êtes reconnaissant·e. Lâchez une habitude ou une histoire qui ne convient plus. Que la clarté de lune soit un miroir, pas un juge.'
    },
    biorhythm: {
      title: 'Prévision biorythmique sur 90 jours',
      intro: 'Quatre vagues depuis votre naissance — touchez un jour pour lire son rythme. Les points marquent les jours critiques au passage par zéro.',
      legend: 'Point turquoise = jour critique · bordure dorée = aujourd\'hui', today: 'Aujourd\'hui', critical: 'Jour critique',
      rising: 'Vague ascendante', falling: 'Vague descendante', neutral: 'Proche de l\'équilibre',
      waves: { physical: 'Physique', emotional: 'Émotionnel', intellectual: 'Intellectuel', intuitive: 'Intuitif' },
      actionHigh: 'Un jour qui peut favoriser l\'action, le mouvement et l\'expression extérieure.',
      actionLow: 'Un jour qui peut favoriser le repos, la protection et une consolidation tranquille.',
      actionMid: 'Jour de transition — ni pic ni creux. Avancez avec douceur.'
    },
    unified: {
      eyebrow: 'Lecture étendue', title: 'Lecture maître unifiée', subtitle: 'Dix-neuf histoires, un seul tissu',
      intro: 'Une synthèse transversale — pas un verdict, mais une carte à lire à votre rythme.',
      expandAll: 'Tout ouvrir', collapseAll: 'Tout fermer', footnote: 'Chaque fil ici est une possibilité. Vous choisissez encore ce que cela signifie.',
      chapterEssence: 'Votre essence centrale', chapterYear: 'Focus de cette année', chapterLove: 'Amour et connexion',
      chapterWork: 'Travail et expression', chapterShadow: 'Ombre à honorer', chapterLucky: 'Boussole de chance',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name} — en tant que <strong>${lpLabel}</strong>, votre chemin de vie peut tourner autour de : ${lpDesc}</p>
         <p>Votre soleil en <strong>${sun}</strong>, année du <strong>${zodiac}</strong> et <strong>${kyusei}</strong> peuvent se tisser comme des notes distinctes du même accord.</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p>En <strong>${year}</strong>, votre année personnelle est <strong>${py}</strong>. ${pyMeaning}</p>
         <p>La vague de cette année peut vous inviter à aller avec le courant plutôt que contre lui.</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>Avec la chaleur <strong>${sunEl}</strong> de votre signe solaire et l'archétype <strong>${animal}</strong>, la connexion peut mieux couler en honorant tendresse et indépendance.</p>
         <p>Le chemin de vie <strong>${lp}</strong> peut colorer comment vous donnez et recevez — thème récurrent à observer.</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p>L'énergie <strong>${lpLabel}</strong> peut s'exprimer au travail comme un sens plutôt qu'une simple productivité. L'élément <strong>${gogyou}</strong> de votre année de naissance suggère comment vous construisez.</p>
         ${exprNum ? `<p>Votre vibration nominale <strong>${exprNum}</strong> peut ajouter une couche à votre image dans le monde.</p>` : ''}`,
      shadowHints: {
        1: 'attention à l\'isolement quand le leadership devient contrôle', 2: 'attention à se perdre en gardant la paix',
        3: 'attention à rester en surface', 4: 'attention à la rigidité quand la sécurité est menacée',
        5: 'attention à l\'agitation qui évite l\'engagement', 6: 'attention au soin qui devient contrôle',
        7: 'attention au retrait quand le monde est trop bruyant', 8: 'attention à la force quand le pouvoir manque',
        9: 'attention aux idéaux qui dépassent le corps', default: 'remarquer quand votre force bascule vers l\'excès'
      },
      shadowBody: (lp, hint) =>
        `<p>Chaque don projette une ombre. Pour le chemin <strong>${lp}</strong>, le bord de croissance peut être : ${hint}.</p>
         <p>Nommer l'ombre n'est pas une défaite — cela peut être le premier pas vers l'équilibre.</p>`,
      luckyBody: (colors, numbers, days, hint) =>
        luckyRow({ colors: 'Couleurs', numbers: 'Nombres', days: 'Jours' }, colors, numbers, days, hint)
    }
  },
  deep: {
    scrollMoon: 'Aller au calendrier lunaire ↑', scrollBio: 'Aller à la prévision de 90 jours ↑',
    scrollTimeline: 'Aller à la frise de 10 ans ↑',
    prompts: { generic: [
      { q: 'Qu\'est-ce que cela pourrait m\'inviter à remarquer ?', a: 'Restez une minute avec le thème du chapitre. Ce qui surgit en premier peut être votre indice — pas un verdict.' },
      { q: 'Un petit pas cette semaine ?', a: 'Choisissez une action assez petite pour aujourd\'hui. Les lectures étendues fonctionnent mieux comme expériences douces.' }
    ]},
    personalYear: {
      thisMonth: 'Ce mois', personalMonth: (n) => `Mois personnel ${n}`, tagAction: 'Agir', tagWait: 'Nourrir', tagWatch: 'Observer',
      ritualHint: 'Les mois d\'observation : ralentir les décisions, plus de repos, un rituel d\'ancrage peut aider.',
      noWatch: 'Pas de mois personnels à haute vigilance cette année — un rythme plus stable.',
      pathSuffix: (lp) => `Chemin-${lp}`, encounterHint: (py) => `Peut apparaître quand les thèmes de l'année personnelle ${py} sont actifs`,
      encounterDetail: (type, el, py) => `Les liens « ${type} » peuvent refléter votre saison d'élément ${el}.`,
      keywords: {
        1: ['Graine', 'Courage', 'Commencer'], 2: ['Patience', 'Lien', 'Écouter'], 3: ['Joie', 'Exprimer', 'Relier'],
        4: ['Bâtir', 'Ordre', 'Racine'], 5: ['Changement', 'Liberté', 'Explorer'], 6: ['Amour', 'Foyer', 'Soigner'],
        7: ['Calme', 'Étude', 'Intérieur'], 8: ['Récolte', 'Puissance', 'Recevoir'], 9: ['Lâcher', 'Achever', 'Pardonner'],
        default: ['Flux', 'Confiance', 'Ouvrir']
      },
      encounterTypes: {
        fire: ['Étincelle', 'Mentor', 'Allié'], water: ['Guérisseur', 'Miroir', 'Guide'], earth: ['Bâtisseur', 'Ancre', 'Maître'],
        air: ['Messager', 'Collaborateur', 'Porteur d\'idées'], wood: ['Cultivateur', 'Compagnon', 'Éclaireur'],
        metal: ['Affineur', 'Défieur', 'Aîné'], default: ['Allié', 'Miroir', 'Guide']
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) => `Chemin de vie ${lp} avec année personnelle ${py} : ${pyMeaning}`,
      yearWaveHint: 'Ouvrez la carte Chronologie de 10 ans dans la carte de vie pour la décennie complète.',
      resonateLabel: 'Peut résonner', resonateText: (a, b) => `D'autres sur les chemins ${a} ou ${b} peuvent sembler familiers.`,
      growLabel: 'Peut stimuler la croissance', growText: (a, b) => `Les chemins ${a} ou ${b} peuvent vous défier — friction qui peut s'élargir avec curiosité.`,
      careLabel: 'Avec attention', careText: (n) => `L'énergie du chemin ${n} peut sembler intense — des limites conscientes peuvent aider.`,
      careerNatural: 'Ajustement naturel', careerNaturalText: (lp) => `Rôles où les dons du chemin ${lp} brillent sans forcer.`,
      careerStretch: 'Zone d\'étirement', careerStretchText: (n) => `Des projets empruntant l'énergie du chemin ${n} peuvent révéler des talents cachés.`,
      careerRest: 'Forme de repos', careerRestText: (lp) => `Comment vous récupérez compte. Le chemin ${lp} peut avoir besoin d'un repos particulier.`,
      soulQ1: 'Qu\'est-ce qui se répète dans ma vie ?', soulA1: (lp) => `Le chemin ${lp} peut ramener la même leçon sous d'autres habits.`,
      soulQ2: 'À quoi ressemblerait « assez » ?', soulA2: 'Les leçons de l\'âme se cachent souvent dans l\'ambition. Définissez assez pour cette saison.',
      figures: {
        1: [{ name: 'Pionniers', note: 'Pas pour imiter — pour voir le courage dans leurs choix.' }],
        2: [{ name: 'Bâtisseurs de ponts', note: 'Ceux qui relient sans être au centre.' }],
        3: [{ name: 'Artistes et conteurs', note: 'La joie comme vocation.' }],
        4: [{ name: 'Artisans', note: 'La patience rendue visible.' }],
        5: [{ name: 'Explorateurs', note: 'Liberté avec responsabilité.' }],
        6: [{ name: 'Gardiens', note: 'Un amour qui n\'étouffe pas.' }],
        7: [{ name: 'Chercheurs', note: 'Vérité plutôt que confort.' }],
        8: [{ name: 'Bâtisseurs d\'héritage', note: 'Le pouvoir circulé.' }],
        9: [{ name: 'Humanitaires', note: 'L\'achèvement comme don.' }],
        11: [{ name: 'Illuminateurs', note: 'La sensibilité au service.' }],
        22: [{ name: 'Maîtres bâtisseurs', note: 'Des rêves avec des fondations.' }],
        33: [{ name: 'Enseignants de l\'amour', note: 'L\'inconditionnel comme pratique.' }]
      }
    },
    sun: {
      elementMap: {
        fire: { direction: 'Sud · Feu', season: 'La chaleur d\'été peut refléter votre rayonnement.', ritual: 'Bougie, lumière du soleil ou mouvement matinal.' },
        earth: { direction: 'Centre · Terre', season: 'Les saisons de récolte peuvent vous ancrer.', ritual: 'Pieds nus sur la terre, repas cuisiné lentement.' },
        air: { direction: 'Est · Air', season: 'Les vents de printemps peuvent soulever des idées.', ritual: 'Journal de trois phrases, marche sans écouteurs.' },
        water: { direction: 'Ouest · Eau', season: 'Les profondeurs d\'hiver peuvent vous appeler vers l\'intérieur.', ritual: 'Bain tiède, contempler la lune.' },
        wood: { direction: 'Est · Bois', season: 'Les saisons de croissance favorisent le semis.', ritual: 'Plante verte, une habitude de 29 jours.' },
        metal: { direction: 'Ouest · Métal', season: 'La clarté de l\'automne peut vous aider à affiner.', ritual: 'Désencombrer un tiroir, vêtements blancs.' }
      }
    },
    kyusei: {
      phases: {
        1: 'Année 1 du cycle : semer les thèmes honmei.', 2: 'Année 2 : patience et partenariat.', 3: 'Année 3 : expression et visibilité.',
        4: 'Année 4 : fondations.', 5: 'Année 5 : changement et mouvement.', 6: 'Année 6 : responsabilité et foyer.',
        7: 'Année 7 : introspection.', 8: 'Année 8 : récolte.', 9: 'Année 9 : achèvement — préparer un nouveau cycle.', default: 'Un point dans votre cycle honmei de 9 ans.'
      }
    },
    tarot: {
      light: 'Face de lumière', shadow: 'Face d\'ombre',
      lightText: (name) => `${name} à l'endroit : le don de l'âme dans sa forme la plus claire.`,
      shadowText: (name) => `${name} renversée : pas une punition — la carte demande l'intégration. Où est-ce lourd ? Ce poids peut être la transformation qui frappe.`
    }
  }
};

const DE_L = {
  moonTitle: '12-Monats-Mondkalender',
  moonIntro: 'Kommende Neumonde und Vollmonde — tippe ein Datum für ein einfaches Ritual. ✦ markiert Resonanz mit deiner Geburtsmondphase.',
  moonTap: 'Tippe ein Neumond- oder Vollmonddatum für einen Ritualvorschlag.',
  newMoon: 'Neumond', fullMoon: 'Vollmond',
  moonResonance: 'Diese Phase kann deinem Geburtsmond entsprechen — ein persönlicher Wendepunkt im Mondzyklus.',
  ritualNew: 'Schreibe einen Wunsch oder eine Absicht auf Papier. Pflanze einen Samen — wörtlich oder bildlich. Beginne etwas Kleines für 29 Tage.',
  ritualFull: 'Nenne drei Dinge, für die du dankbar bist. Lass eine Gewohnheit oder Geschichte los, die nicht mehr passt. Mondlicht als Spiegel, nicht als Richter.',
  bioTitle: '90-Tage-Biorhythmus-Prognose',
  bioIntro: 'Vier Wellen ab deinem Geburtstag — tippe einen Tag für seinen Rhythmus. Punkte markieren kritische Tage beim Null-Durchgang.',
  bioLegend: 'Türkiser Punkt = kritischer Tag · goldener Rand = heute',
  today: 'Heute', critical: 'Kritischer Tag', rising: 'Steigende Welle', falling: 'Fallende Welle', neutral: 'Nahe Balance',
  wavePhysical: 'Körperlich', waveEmotional: 'Emotional', waveIntellectual: 'Intellektuell', waveIntuitive: 'Intuitiv',
  actionHigh: 'Ein Tag, der Handlung, Bewegung und äußeren Ausdruck begünstigen kann.',
  actionLow: 'Ein Tag, der Ruhe, Schutz und stille Festigung begünstigen kann.',
  actionMid: 'Übergangstag — weder Peak noch Tal. Bewege dich sanft.',
  unifiedEyebrow: 'Erweiterte Lesung', unifiedTitle: 'Vereinte Meister-Lesung', unifiedSubtitle: 'Neunzehn Geschichten, ein Gewebe',
  unifiedIntro: 'Eine systemübergreifende Synthese — kein Urteil, sondern eine Karte in deinem Tempo.',
  expandAll: 'Alle öffnen', collapseAll: 'Alle schließen',
  unifiedFootnote: 'Jeder Faden hier ist eine Möglichkeit. Du wählst noch, was es bedeutet.',
  chEssence: 'Deine Kernessenz', chYear: 'Fokus dieses Jahres', chLove: 'Liebe und Verbindung',
  chWork: 'Arbeit und Ausdruck', chShadow: 'Schatten zu ehren', chLucky: 'Glückskompass',
  essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
    `<p>${name} — als <strong>${lpLabel}</strong> kann dein Lebenspfad kreisen um: ${lpDesc}</p>
     <p>Deine Sonne in <strong>${sun}</strong>, Jahr des <strong>${zodiac}</strong> und <strong>${kyusei}</strong> können sich als verschiedene Töne derselben Seele weben.</p>`,
  yearBody: (year, py, pyMeaning) =>
    `<p>In <strong>${year}</strong> ist dein persönliches Jahr <strong>${py}</strong>. ${pyMeaning}</p>
     <p>Die Welle dieses Jahres lädt dich ein, mit der Strömung zu gehen.</p>`,
  loveBody: (sunEl, animal, lp) =>
    `<p>Mit <strong>${sunEl}</strong>-Wärme in deinem Sonnenzeichen und dem <strong>${animal}</strong>-Archetyp fließt Verbindung vielleicht am besten, wenn du Zärtlichkeit und Unabhängigkeit ehrst.</p>
     <p>Lebenspfad <strong>${lp}</strong> färbt, wie du gibst und empfängst — ein wiederkehrendes Thema.</p>`,
  workBody: (lpLabel, gogyou, exprNum) =>
    `<p><strong>${lpLabel}</strong>-Energie kann sich in der Arbeit als Sinn zeigen, nicht nur Produktivität. Das <strong>${gogyou}</strong>-Element deines Geburtsjahres deutet, wie du baust.</p>
     ${exprNum ? `<p>Deine Namensschwingung <strong>${exprNum}</strong> fügt eine weitere Schicht hinzu.</p>` : ''}`,
  shadowHints: {
    1: 'Isolation beachten, wenn Führung zu Kontrolle wird', 2: 'sich verlieren beim Frieden halten',
    3: 'an der Oberfläche bleiben', 4: 'Starre, wenn Sicherheit bedroht wirkt',
    5: 'Ruhelosigkeit, die Bindung meidet', 6: 'Fürsorge, die zur Kontrolle wird',
    7: 'Rückzug, wenn die Welt zu laut ist', 8: 'Härte, wenn Macht knapp scheint',
    9: 'Ideale, die den Körper überholen', default: 'bemerken, wenn Stärke ins Überschwang kippt'
  },
  shadowBody: (lp, hint) =>
    `<p>Jede Gabe wirft einen Schatten. Für Lebenspfad <strong>${lp}</strong> kann die Wachstumskante sein: ${hint}.</p>
     <p>Den Schatten zu benennen ist keine Niederlage — vielleicht der erste Schritt zur Balance.</p>`,
  luckyColors: 'Farben', luckyNumbers: 'Zahlen', luckyDays: 'Tage',
  scrollMoon: 'Zum Mondkalender ↑', scrollBio: 'Zur 90-Tage-Prognose ↑',
  scrollTimeline: 'Zur 10-Jahres-Zeitleiste ↑',
  promptsGeneric: [
    { q: 'Worauf könnte mich das einladen zu achten?', a: 'Verweile eine Minute beim Kapitelthema. Was zuerst auftaucht, kann dein Hinweis sein — kein Urteil.' },
    { q: 'Ein kleiner Schritt diese Woche?', a: 'Wähle eine Handlung, klein genug für heute. Erweiterte Lesungen als sanfte Experimente nutzen.' }
  ],
  thisMonth: 'Dieser Monat', personalMonth: (n) => `Persönlicher Monat ${n}`,
  tagAction: 'Handeln', tagWait: 'Pflegen', tagWatch: 'Beobachten',
  ritualHint: 'In Beobachtungsmonaten: Entscheidungen verlangsamen, mehr Ruhe, ein Erdungsritual kann helfen.',
  noWatch: 'Keine besonders wachsamen persönlichen Monate dieses Jahr — insgesamt ruhigerer Rhythmus.',
  pathSuffix: (lp) => `Pfad-${lp}`,
  encounterHint: (py) => `Kann erscheinen, wenn Themen des persönlichen Jahres ${py} aktiv sind`,
  encounterDetail: (type, el, py) => `Verbindungen als „${type}" können deine ${el}-Element-Saison spiegeln.`,
  pyKeywords: {
    1: ['Samen', 'Mut', 'Beginn'], 2: ['Geduld', 'Bindung', 'Zuhören'], 3: ['Freude', 'Ausdruck', 'Verbinden'],
    4: ['Bauen', 'Ordnung', 'Wurzel'], 5: ['Wandel', 'Freiheit', 'Erkunden'], 6: ['Liebe', 'Zuhause', 'Fürsorge'],
    7: ['Stille', 'Studium', 'Inneres'], 8: ['Ernte', 'Kraft', 'Empfangen'], 9: ['Loslassen', 'Vollenden', 'Vergeben']
  },
  pyKwDefault: ['Fluss', 'Vertrauen', 'Öffnen'],
  encounterTypes: {
    fire: ['Funke', 'Mentor', 'Verbündeter'], water: ['Heiler', 'Spiegel', 'Führer'], earth: ['Bauer', 'Anker', 'Lehrer'],
    air: ['Bote', 'Mitgestalter', 'Ideen-Träger'], wood: ['Züchter', 'Begleiter', 'Wegweiser'],
    metal: ['Verfeinerer', 'Herausforderer', 'Ältester']
  },
  encounterDefault: ['Verbündeter', 'Spiegel', 'Führer'],
  yearWave: (lp, py, pyMeaning) => `Lebenspfad ${lp} trifft persönliches Jahr ${py}: ${pyMeaning}`,
  yearWaveHint: 'Öffne die 10-Jahres-Zeitleiste in der Lebenskarte für die volle Dekade.',
  resonateLabel: 'Kann resonieren', resonateText: (a, b) => `Andere auf Pfaden ${a} oder ${b} können vertraut wirken.`,
  growLabel: 'Kann Wachstum anregen', growText: (a, b) => `Pfade ${a} oder ${b} können herausfordern — Reibung kann mit Neugier wachsen.`,
  careLabel: 'Mit Sorgfalt', careText: (n) => `Pfad-${n}-Energie kann intensiv wirken — bewusste Grenzen können helfen.`,
  careerNatural: 'Natürliche Passung', careerNaturalText: (lp) => `Rollen, in denen Lebenspfad-${lp}-Gaben ohne Zwang leuchten.`,
  careerStretch: 'Dehnungszone', careerStretchText: (n) => `Nebenprojekte mit Pfad-${n}-Energie können verborgene Fähigkeiten öffnen.`,
  careerRest: 'Ruheform', careerRestText: (lp) => `Erholung zählt. Pfad ${lp} braucht vielleicht eine bestimmte Art Pause.`,
  soulQ1: 'Was wiederholt sich in meinem Leben?', soulA1: (lp) => `Lebenspfad ${lp} kann dieselbe Lektion in anderen Gewändern bringen.`,
  soulQ2: 'Wie sähe „genug" aus?', soulA2: 'Seelenlektionen verbergen sich oft in Ambition. Definiere genug für diese Saison.',
  figures: {
    1: ['Pioniere', 'Nicht nachahmen — Mut in ihren Entscheidungen sehen.'],
    2: ['Brückenbauer', 'Verbinden ohne Mittelpunkt.'],
    3: ['Künstler und Erzähler', 'Freude als Berufung.'],
    4: ['Handwerker', 'Geduld sichtbar gemacht.'],
    5: ['Entdecker', 'Freiheit mit Verantwortung.'],
    6: ['Hüter', 'Liebe, die nicht erstickt.'],
    7: ['Sucher', 'Wahrheit vor Komfort.'],
    8: ['Erbauer von Vermächtnis', 'Macht im Fluss.'],
    9: ['Humanisten', 'Vollendung als Gabe.'],
    11: ['Erleuchter', 'Sensibilität als Dienst.'],
    22: ['Meisterbauer', 'Träume mit Fundament.'],
    33: ['Lehrer der Liebe', 'Unbedingtheit als Übung.']
  },
  sunMap: {
    fire: { direction: 'Süd · Feuer', season: 'Sommerhitze kann dein Strahlen spiegeln.', ritual: 'Kerze, Sonnenlicht, Morgenbewegung.' },
    earth: { direction: 'Mitte · Erde', season: 'Erntezeiten können dich erden.', ritual: 'Barfuß auf Erde, langsam kochen.' },
    air: { direction: 'Ost · Luft', season: 'Frühlingswinde können Ideen rühren.', ritual: 'Drei Sätze Tagebuch, Spaziergang ohne Kopfhörer.' },
    water: { direction: 'West · Wasser', season: 'Wintertiefen können nach innen rufen.', ritual: 'Warmes Bad, Mond betrachten.' },
    wood: { direction: 'Ost · Holz', season: 'Wachstumsjahreszeiten begünstigen Säen.', ritual: 'Grüne Pflanze, 29-Tage-Gewohnheit.' },
    metal: { direction: 'West · Metall', season: 'Herbstklarheit kann verfeinern helfen.', ritual: 'Eine Schublade leeren, weiße Kleidung.' }
  },
  kyuseiPhases: {
    1: 'Jahr 1 des Zyklus: honmei-Themen säen.', 2: 'Jahr 2: Geduld und Partnerschaft.', 3: 'Jahr 3: Ausdruck und Sichtbarkeit.',
    4: 'Jahr 4: Fundamente.', 5: 'Jahr 5: Wandel und Bewegung.', 6: 'Jahr 6: Verantwortung und Zuhause.',
    7: 'Jahr 7: Innenschau.', 8: 'Jahr 8: Ernte.', 9: 'Jahr 9: Abschluss — neue Runde vorbereiten.'
  },
  kyuseiDefault: 'Ein Punkt in deinem 9-Jahres-honmei-Zyklus.',
  tarotLight: 'Lichtseite', tarotShadow: 'Schattenseite',
  tarotLightText: (name) => `${name} aufrecht: die Gabe der Seele in klarster Form.`,
  tarotShadowText: (name) => `${name} umgekehrt: keine Strafe — die Karte bittet um Integration. Wo fühlt es sich schwer an?`
};

/** @param {object} core form/cards/fmt/love/compat/timeline/master */
function withWesternDeep(core, labels) {
  return { ...core, ...makeExtendedDeep(labels) };
}

const DE = withWesternDeep({
  header: { eyebrow: 'Persönliche Kosmologie', subtitle: 'Neunzehn Geschichten plus Liebe und Kompatibilität' },
  sections: {
    numerology: ['Numerologie', ''],
    western: ['Westliche Astrologie', ''],
    eastern: ['Östliches Schicksal', ''],
    characters: ['Archetypen', ''],
    sacred: ['Maya & Tarot', ''],
    nature: ['Natursymbole', ''],
    cycles: ['Wellen von heute', ''],
    lifeMap: ['Lebenskarte', '']
  },
  bio: { physical: 'Körperlich', emotional: 'Emotional', intellectual: 'Intellektuell', intuitive: 'Intuitiv' },
  modal: {
    deepRead: 'Tiefer lesen',
    premiumBadge: 'Tiefenlesung (kostenlos)',
    premiumPitch: 'Tiefer',
    premiumCta: 'Tiefeninhalt ansehen',
    close: 'Schließen'
  },
  premiumShowcase: {
    roadmapSummary: 'Funktionen ansehen',
    note: 'Alle Lesungen sind kostenlos — tippe eine Karte für tiefere Kapitel.',
    optionalEyebrow: 'Kostenlos enthalten',
    freeIncludesTitle: 'Kostenlos enthalten',
    allFreeTitle: 'Ebenfalls enthalten — kein Abo',
    allFreeNote: 'Alle Funktionen auf dieser Seite sind kostenlos. Lesungen zeigen Möglichkeiten; du schreibst deine Geschichte.',
    ariaLabel: 'Was enthalten ist'
  },
  gloss: {
    stripTitle: 'Kurzes Glossar — ? auf einer Karte tippen',
    tipAria: (term) => `Was bedeutet „${term}“?`
  },
  form: {
    birthMonthLabel: 'Monat', birthDayLabel: 'Tag', birthYearLabel: 'Jahr',
    birthMonthPlaceholder: 'Monat', birthDayPlaceholder: 'Tag', birthYearPlaceholder: 'Jahr'
  },
  cards: {
    lifepath: 'Lebenspfad-Zahl', personalYear: 'Persönliches Jahr', expression: 'Namenszahl',
    expressionLabel: 'Schwingung deines Namens', sun: 'Sonnenzeichen', moonTrait: 'Mond-Tendenz',
    moonTraitLabel: 'Aus der Mondphase bei der Geburt', moonTraitNote: 'Das genaue Mondzeichen braucht die Geburtszeit',
    zodiac: 'Chinesisches Tierkreiszeichen', sixty: 'Jahressäule (60 Stämme-Zweige)', kyusei: 'Kyusei-Lebensstern',
    gogyou: 'Fünf Elemente', animal: 'Tier-Archetyp', celtic: 'Keltischer Baum', maya: 'Maya-KIN',
    tarotBirth: 'Tarot-Geburtskarte', tarotDaily: 'Karte des Tages', birthstone: 'Geburtsstein',
    birthflower: 'Geburtsblume', biorhythm: 'Biorhythmus', moonTonight: 'Mond heute Nacht',
    lifeStagePrev: 'Jüngster Meilenstein', lifeStageNext: 'Nächster Meilenstein', timeline: '10-Jahres-Zeitleiste',
    timelineLabel: 'Das kommende Jahrzehnt',
    timelineDesc: 'Deine persönliche Jahreswelle, Spitzenjahre und Meilensteine — tippe jedes Jahr an.',
    unified: 'Vereinte Meister-Lesung',
    unifiedDesc: 'Neunzehn Systeme zu einer Geschichte — Wesen, Liebe, Arbeit und Glückskompass.'
  },
  fmt: {
    yearYou: (y) => `Du in ${y}`, bornYearZodiac: (char) => `Geboren im Jahr des ${char}`,
    sixtyDesc: (el) => `Ein Siegel, das alle 60 Jahre zurückkehrt. Trägt die Natur von ${el}.`,
    kyuseiStar: (el) => `${el}-Stern`, gogyouLabel: 'Element des Geburtsjahres',
    animalNum: (n) => `Typ ${n}/60`, animalFallback: 'Eine Präsenz mit eigenem Charakter.',
    celticLabel: 'Einer von dreizehn heiligen Bäumen',
    mayaDesc: 'Dein Tag im heiligen Zähler von 260. Siegel ist Wesen; Ton ist Rhythmus.',
    tarotMajor: (n) => `Große Arkana ${n}`, tarotDailyFor: (y, m, d) => `Für dich am ${d}.${m}.${y}`,
    monthStone: (m) => `Stein des Monats ${m}`, monthFlower: (m) => `Blume des Monats ${m}`,
    birthflowerDesc: 'Symbol deines Geburtsmonats. In der Nähe kann es dich erden.',
    biorhythmDays: (days, tag) => `Biorhythmus — Tag ${days.toLocaleString(tag)} seit der Geburt`,
    moonPhasePct: (pct) => `Phase ${pct}% · Der Mond berührt alles Leben. Was fragt dich der Mond heute Nacht?`,
    bornOn: (y, m, d) => `Geboren am ${d}.${m}.${y}`, ageNow: (age) => `Jetzt <strong>${age}</strong> Jahre`,
    nextMilestone: (age, name) => `Nächster Meilenstein: <strong>${age} — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `Dein nächster Lebensmeilenstein ist <strong>${name} mit ${age}</strong>. Etwa <strong>${years} Jahre</strong> entfernt.`,
    elementOf: (el) => `${el}-Element`, ageYears: (n) => `Alter ${n}`,
    summaryLabel: 'Deine Geschichte',
    summaryLead: (name, label) => `${name}, man sagt, du trägst die Seele von <strong>${label}</strong>.`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `In der westlichen Astrologie steht deine Sonne in <strong>${sun}</strong> (${sunEl}-Element); ` +
      `im östlichen Kalender <strong>${cz}</strong>; in Kyusei <strong>${ks}</strong>; ` +
      `mit <strong>${gy}</strong> im Kern. Tierweisheit nennt dich <strong>${an}</strong>; dein Schutzbaum ist <strong>${ct}</strong>. ` +
      `Im Maya-Zähler: <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>; Tarot-Archetyp: <strong>${tb}</strong>.`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `In ${year} reitest du die Welle des <strong>persönlichen Jahres ${py}</strong>. Der Biorhythmus deutet ${bioState}. ` +
      `Du trägst die Stimmung von <strong>${mt}</strong>; heute Nacht leuchtet <strong>${mp}</strong> auf dich. ${nextHtml}`,
    summaryHint: '↓ Tippe eine Karte für eine tiefere Lesung',
    bioUp: '<strong>aufsteigende Phase</strong> (gut für Handlung und Ausdruck)',
    bioDown: '<strong>nach innen gewandte Phase</strong> (gut für Ruhe und Ordnung)',
    bioBalanced: '<strong>ausgewogene Phase</strong>',     personalYearWave: (year) => `Persönliches Jahr ${year}`,
    cardMore: 'Tiefer lesen',
    cardMoreAria: '. Details öffnen',
    cardAria: (system, value) => `${system}, ${value}`,
    expressionHintAddRoman: 'Füge eine lateinische Schreibweise hinzu, um auch die internationale Namenszahl zu sehen.',
    expressionLatinInvalid: 'Keine A–Z-Buchstaben im römischen Feld — internationale Zahl nicht angezeigt.'
  },
  love: {
    eyebrow: 'Liebes-Archetyp', title: 'Liebes-Lesung', phaseLabel: 'Aktuelle Liebesphase',
    sweetTitle: 'Deine süßen Punkte in der Liebe', careTitle: 'Sanfte Erinnerungen',
    matchesTitle: 'Typen, mit denen du harmonierst', actionLabel: 'Ein kleiner Schritt heute Nacht für Verbindung',
    cta: 'Neugierig auf jemanden? Probiere die Kompatibilitäts-Lesung',
    footnote: 'Dies ist eine Möglichkeit. Du schreibst deine eigene Liebesgeschichte.',
    shareTitle: 'Liebes-Lesung teilen', shareDesc: 'Bild speichern und auf X oder LINE posten.',
    sharePreviewAria: 'Vorschau Liebes-Karte', shareAlt: (name) => `Liebes-Karte von ${name}`,
    shareSaved: 'Bild gespeichert', shareCopied: 'Text kopiert', shareCopyFail: 'Kopieren fehlgeschlagen', shareFail: 'Teilen fehlgeschlagen'
  },
  compat: {
    eyebrow: 'Kompatibilität', title: 'Kompatibilität gemeinsam lesen',
    lead: 'Gib einen anderen Namen und ein Geburtsdatum ein, um die Kompatibilität auf fünf Achsen zu spiegeln.',
    leadSub: 'Partner, Freund, Familie oder jemand, den du bewunderst.',
    nameLabel: 'Ihr Name', birthLabel: 'Ihr Geburtsdatum', namePlaceholder: 'z. B. Anna Müller',
    submit: 'Kompatibilität enthüllen',
    disclaimer: 'Lesungen zeigen Möglichkeiten. Eure echte Beziehung ist die Geschichte, die ihr zusammen schreibt.',
    resultEyebrow: 'Zwei Geschichten verwoben', overallLabel: 'Gesamt',
    footnote: 'Zahlen sind nur ein Wegweiser. Bindungen wandeln sich Tag für Tag.',
    radarAria: 'Kompatibilitäts-Radar mit fünf Achsen', lifePathValue: (n) => `Lebenspfad ${n}`
  },
  timeline: {
    eyebrow: 'Interaktive Lesung', title: '10-Jahres-Zeitleiste', subtitle: 'Dein persönliches Jahresrhythmus im kommenden Jahrzehnt',
    intro: 'Jeder Balken ist ein persönliches Jahr (1–9). Tippe ein Jahr für sein Thema; ✦ markiert einen Lebensmeilenstein.',
    ageLabel: 'Alter', pyLabel: 'Persönliches Jahr', yearLabel: 'Jahr', milestoneLabel: 'Lebensmeilenstein',
    thisYear: 'Dieses Jahr', milestoneHere: 'Meilenstein-Jahr', ageAt: (age) => `Mit ${age} Jahren`,
    pyHeading: (py, theme) => `Persönliches Jahr ${py} · ${theme}`,
    pyThemes: { 1: 'Neuanfang', 2: 'Geduld und Bindung', 3: 'Ausdruck und Freude', 4: 'Fundament', 5: 'Wandel und Freiheit', 6: 'Verantwortung und Liebe', 7: 'Innenschau', 8: 'Ernte', 9: 'Vollendung und Loslassen' }
  },
  master: { title: 'Meister-Lesung', intro: 'Tiefere Kapitel, für alle geöffnet. Tippe jedes an.', expandAll: 'Alle öffnen', collapseAll: 'Alle schließen' }
}, DE_L);

const IT = mergeConfig(ES, IT_PATCH);
const TR = mergeConfig(ES, TR_PATCH);
const HE = mergeConfig(ES, HE_PATCH);
const AR = mergeConfig(ES, AR_PATCH);

/** @type {Record<string, Partial<typeof import('./locales/en/ui.js').ui>>} */
export const UI_EXTRAS = {
  zh: buildExtras(ZH, 'zh-CN'),
  ko: buildExtras(KO, 'ko-KR'),
  es: buildExtras(ES, 'es-ES'),
  fr: buildExtras(FR, 'fr-FR'),
  de: buildExtras(DE, 'de-DE'),
  it: buildExtras(IT, 'it-IT'),
  tr: buildExtras(TR, 'tr-TR'),
  he: buildExtras(HE, 'he-IL'),
  ar: buildExtras(AR, 'ar-SA')
};
