/**
 * 全カードの拡張リーディング＋深層チャプター用インタラクティブ UI。
 * 計算: calculations.js、文言: getUI() / getContent()
 */
import {
  personalYearMonthCalendar, kyuseiCycleYear, normalizeElementKey, luckyCompass,
  sixtyCycleIndex, mayaRelatedKin, mayaDayKin, kyuseiMonthStar, kyuseiDayStar,
  zodiacRelation, gogyouRelation, animalGroupIndex, dailyTarotWeek,
  lifeMilestonesAround, biorhythmCriticalDays, biorhythmForecast,
  lunarEventsAhead, birthMoonPhaseIndex, reduceDigit
} from './calculations.js';
import { getContent, getUI, getBundle } from './i18n/index.js';
import { ANIMAL_EMOJI } from './util.js';

function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));
}

function monthLabel(year, month) {
  const { htmlLang } = getBundle().meta;
  return new Intl.DateTimeFormat(htmlLang, { month: 'short' }).format(new Date(year, month - 1, 1));
}

function dateLabel(date) {
  const { htmlLang } = getBundle().meta;
  return new Intl.DateTimeFormat(htmlLang, { month: 'short', day: 'numeric' }).format(date);
}

function scrollBtn(className, label) {
  if (!label) return '';
  return `<button type="button" class="deep-scroll-btn" data-deep-scroll=".${className}">${esc(label)}</button>`;
}

function extWrap(cardKey, title, intro, body) {
  const u = getUI().extended?.[cardKey];
  return `
    <div class="extended-section ext-${esc(cardKey)}" data-extended="${esc(cardKey)}">
      <div class="modal-section-title">${esc(title ?? u?.title ?? '')}</div>
      ${intro ? `<p class="modal-intro">${esc(intro)}</p>` : ''}
      ${body}
    </div>`;
}

function pickerGrid(className, cells, detailId, initialHtml) {
  return `
    <div class="${className}-grid" role="group">${cells}</div>
    <div class="${className}-detail" id="${detailId}">${initialHtml}</div>`;
}

/* ============ 拡張リーディング（モーダル上部） ============ */

export function renderExtendedSection(cardKey, ctx) {
  switch (cardKey) {
    case 'lifepath': return renderExtLifepath(ctx);
    case 'personalYear': return renderExtPersonalYear(ctx);
    case 'expression': return renderExtExpression(ctx);
    case 'sun': return renderExtSun(ctx);
    case 'moonTrait': return renderExtMoonTrait(ctx);
    case 'zodiac': return renderExtZodiac(ctx);
    case 'sixty': return renderExtSixty(ctx);
    case 'kyusei': return renderExtKyusei(ctx);
    case 'gogyou': return renderExtGogyou(ctx);
    case 'animal': return renderExtAnimal(ctx);
    case 'celtic': return renderExtCeltic(ctx);
    case 'maya': return renderExtMaya(ctx);
    case 'tarotBirth': return renderExtTarotBirth(ctx);
    case 'tarotDaily': return renderExtTarotDaily(ctx);
    case 'birthstone': return renderExtBirthstone(ctx);
    case 'birthflower': return renderExtBirthflower(ctx);
    default: return '';
  }
}

function renderExtLifepath(ctx) {
  const u = getUI().extended?.lifepath ?? {};
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];
  const cells = nums.map(n => {
    const on = n === ctx.lp;
    return `<button type="button" class="lp-pick-cell${on ? ' is-you' : ''}" data-lp-num="${n}"
      aria-pressed="${on}">${n}</button>`;
  }).join('');
  const { LIFE_PATH_MEANINGS } = getContent();
  const init = LIFE_PATH_MEANINGS[ctx.lp]?.desc ?? '';
  return extWrap('lifepath', u.title, u.intro, pickerGrid('lp-pick', cells, 'lp-pick-detail', esc(init)));
}

function renderExtPersonalYear(ctx) {
  const u = getUI().extended?.personalYear ?? {};
  const { PERSONAL_YEAR_MEANINGS } = getContent();
  const cells = Array.from({ length: 9 }, (_, i) => {
    const n = i + 1;
    const on = n === ctx.py;
    return `<button type="button" class="py-wave-cell${on ? ' is-you' : ''}" data-py-wave="${n}"
      aria-pressed="${on}">${n}</button>`;
  }).join('');
  return extWrap('personalYear', u.title, u.intro, `
    ${pickerGrid('py-wave', cells, 'py-wave-detail', esc(PERSONAL_YEAR_MEANINGS[ctx.py] ?? ''))}
    <p class="deep-hint">${esc(u.hint ?? '')}</p>`);
}

function renderExtExpression(ctx) {
  const u = getUI().extended?.expression ?? {};
  const { expr } = ctx;
  const dual = expr?.hasLatinLetters && expr?.latin != null;
  return extWrap('expression', u.title, u.intro, `
    <div class="expr-dual-display">
      <div class="expr-dual-box${dual ? '' : ' is-solo'}">
        <span class="expr-dual-label">${esc(u.nativeLabel ?? 'Display')}</span>
        <span class="expr-dual-num">${expr?.native ?? ctx.en}</span>
      </div>
      ${dual ? `
        <div class="expr-dual-box">
          <span class="expr-dual-label">${esc(u.latinLabel ?? 'Roman')}</span>
          <span class="expr-dual-num">${expr.latin}</span>
        </div>` : ''}
    </div>
    <p class="deep-hint">${esc(u.hint ?? '')}</p>`);
}

function renderExtSun(ctx) {
  const u = getUI().extended?.sun ?? {};
  const { SUN_SIGNS } = getContent();
  const cells = SUN_SIGNS.map((s, i) => {
    const on = s.name === ctx.sun.name;
    return `<button type="button" class="sun-pick-cell${on ? ' is-you' : ''}" data-sun-idx="${i}"
      aria-pressed="${on}"><span>${esc(s.symbol)}</span><span>${esc(s.name)}</span></button>`;
  }).join('');
  return extWrap('sun', u.title, u.intro, pickerGrid('sun-pick', cells, 'sun-pick-detail', esc(ctx.sun.desc)));
}

function renderExtMoonTrait(ctx) {
  const u = getUI().extended?.moonTrait ?? {};
  const { MOON_TRAITS } = getContent();
  const MOON_ICONS = ['🌑', '🌓', '🌕', '🌗'];
  const cells = MOON_TRAITS.map((t, i) => {
    const on = t.name === ctx.mt.name;
    return `<button type="button" class="moon-trait-cell${on ? ' is-you' : ''}" data-mt-idx="${i}"
      aria-pressed="${on}"><span class="cell-emoji" aria-hidden="true">${MOON_ICONS[i]}</span><span class="cell-name">${esc(t.name.split(' ').slice(-2).join(' '))}</span></button>`;
  }).join('');
  return extWrap('moonTrait', u.title, u.intro, pickerGrid('moon-trait', cells, 'moon-trait-detail', esc(ctx.mt.desc)));
}

function renderExtZodiac(ctx) {
  const u = getUI().extended?.zodiac ?? {};
  const { CHINESE_ZODIAC } = getContent();
  const idx = ((ctx.y - 4) % 12 + 12) % 12;
  const cells = CHINESE_ZODIAC.map((z, i) => {
    const on = i === idx;
    return `<button type="button" class="zodiac-grid-cell${on ? ' is-you' : ''}" data-zodiac-idx="${i}"
      aria-pressed="${on}"><span class="zodiac-grid-char">${esc(z.char)}</span></button>`;
  }).join('');
  return extWrap('zodiac', u.title, u.intro, pickerGrid('zodiac-grid', cells, 'zodiac-ext-detail', esc(CHINESE_ZODIAC[idx].desc)));
}

function renderExtSixty(ctx) {
  const u = getUI().extended?.sixty ?? {};
  const pos = sixtyCycleIndex(ctx.y);
  const cells = Array.from({ length: 60 }, (_, i) => {
    const on = i === pos;
    return `<button type="button" class="sixty-cell${on ? ' is-you' : ''}" data-sixty-idx="${i}"
      aria-pressed="${on}">${i + 1}</button>`;
  }).join('');
  const { HEAVENLY_STEMS, EARTHLY_BRANCHES } = getContent();
  const stem = HEAVENLY_STEMS[pos % 10];
  const branch = EARTHLY_BRANCHES[pos % 12];
  return extWrap('sixty', u.title, u.intro, `
    <div class="sixty-track-wrap"><div class="sixty-track" role="group">${cells}</div></div>
    <div class="sixty-detail" id="sixty-ext-detail">${esc(`${stem}${branch} · ${ctx.sj.yinyang} ${ctx.sj.element}`)}</div>`);
}

function renderExtKyusei(ctx) {
  const u = getUI().extended?.kyusei ?? {};
  const { KYUSEI_STARS } = getContent();
  const honmei = kyuseiCycleYear(ctx.y, ctx.currentYear);
  const cells = Array.from({ length: 9 }, (_, i) => {
    const n = i + 1;
    const on = n === honmei;
    return `<button type="button" class="ky-star-cell${on ? ' is-you' : ''}" data-ky-star="${n}"
      aria-pressed="${on}">${n}</button>`;
  }).join('');
  const star = KYUSEI_STARS[honmei];
  return extWrap('kyusei', u.title, u.intro, pickerGrid('ky-star', cells, 'ky-star-detail', esc(star?.desc ?? '')));
}

function renderExtGogyou(ctx) {
  const u = getUI().extended?.gogyou ?? {};
  const { FIVE_ELEMENTS, GOGYOU_DESCS } = getContent();
  const cells = FIVE_ELEMENTS.map(e => {
    const on = e === ctx.gy.element;
    return `<button type="button" class="gogy-cycle-node${on ? ' is-you' : ''}" data-gy-el="${esc(e)}"
      aria-pressed="${on}">${esc(e)}</button>`;
  }).join('');
  return extWrap('gogyou', u.title, u.intro, `
    <div class="gogy-cycle-track" role="group">${cells}</div>
    <div class="gogy-cycle-detail" id="gogy-ext-detail">${esc(GOGYOU_DESCS[ctx.gy.element] ?? '')}</div>`);
}

function renderExtAnimal(ctx) {
  const u = getUI().extended?.animal ?? {};
  const { ANIMAL_NAMES, ANIMAL_DESC } = getContent();
  const cells = ANIMAL_NAMES.map((name, i) => {
    const on = name === ctx.an.name;
    return `<button type="button" class="animal-cell${on ? ' is-you' : ''}" data-animal-idx="${i}"
      aria-pressed="${on}"><span class="cell-emoji" aria-hidden="true">${ANIMAL_EMOJI[i]}</span><span class="cell-name">${esc(name)}</span></button>`;
  }).join('');
  return extWrap('animal', u.title, u.intro, pickerGrid('animal', cells, 'animal-ext-detail', esc(ANIMAL_DESC[ctx.an.name] ?? '')));
}

function renderExtCeltic(ctx) {
  const u = getUI().extended?.celtic ?? {};
  const { CELTIC_TREES } = getContent();
  const cells = CELTIC_TREES.map((t, i) => {
    const on = t.name === ctx.ct.name;
    return `<button type="button" class="celtic-cell${on ? ' is-you' : ''}" data-celtic-idx="${i}"
      aria-pressed="${on}">${esc(t.name)}</button>`;
  }).join('');
  return extWrap('celtic', u.title, u.intro, pickerGrid('celtic', cells, 'celtic-ext-detail', esc(ctx.ct.desc)));
}

function renderExtMaya(ctx) {
  const u = getUI().extended?.maya ?? {};
  const { MAYA_SEALS } = getContent();
  const sealIdx = (ctx.my.kin - 1) % 20;
  const cells = MAYA_SEALS.map((s, i) => {
    const on = i === sealIdx;
    return `<button type="button" class="maya-seal-cell${on ? ' is-you' : ''}" data-maya-seal="${i}"
      aria-pressed="${on}">${esc(s.split(' ').pop())}</button>`;
  }).join('');
  return extWrap('maya', u.title, u.intro, `
    <div class="maya-kin-display">
      <div class="maya-kin-num"><span class="maya-kin-label">KIN</span> ${ctx.my.kin}</div>
    </div>
    ${pickerGrid('maya-seal', cells, 'maya-seal-detail', esc(`${ctx.my.tone}${ctx.my.seal}`))}`);
}

function renderExtTarotBirth(ctx) {
  const u = getUI().extended?.tarotBirth ?? {};
  const { TAROT_BY_NUM, TAROT_MEANINGS } = getContent();
  const cells = TAROT_BY_NUM.map((name, i) => {
    const num = i;
    const on = num === ctx.tb.num;
    return `<button type="button" class="tarot-major-cell${on ? ' is-you' : ''}" data-tarot-num="${num}"
      aria-pressed="${on}">${num}</button>`;
  }).join('');
  return extWrap('tarotBirth', u.title, u.intro, pickerGrid('tarot-major', cells, 'tarot-major-detail', esc(TAROT_MEANINGS[ctx.tb.name] ?? '')));
}

function renderExtTarotDaily(ctx) {
  const u = getUI().extended?.tarotDaily ?? {};
  const { TAROT_MEANINGS } = getContent();
  const keys = Object.keys(TAROT_MEANINGS);
  const week = dailyTarotWeek(ctx.name, keys, 7);
  const cells = week.map((row, i) => {
    const on = i === 0;
    return `<button type="button" class="tarot-day-cell${on ? ' is-you' : ''}" data-tarot-day="${i}"
      aria-pressed="${on}"><span>${esc(dateLabel(row.date))}</span><span>${esc(row.key)}</span></button>`;
  }).join('');
  return extWrap('tarotDaily', u.title, u.intro, pickerGrid('tarot-day', cells, 'tarot-day-detail', esc(TAROT_MEANINGS[week[0].key] ?? '')));
}

function renderExtBirthstone(ctx) {
  const u = getUI().extended?.birthstone ?? {};
  const { BIRTHSTONES } = getContent();
  const cells = Object.entries(BIRTHSTONES).map(([mo, st]) => {
    const on = Number(mo) === ctx.m;
    return `<button type="button" class="month-pick-cell${on ? ' is-you' : ''}" data-birth-mo="${mo}"
      aria-pressed="${on}">${esc(st.name)}</button>`;
  }).join('');
  const bs = BIRTHSTONES[ctx.m];
  return extWrap('birthstone', u.title, u.intro, pickerGrid('month-pick', cells, 'birthstone-detail', esc(bs?.meaning ?? '')));
}

function renderExtBirthflower(ctx) {
  const u = getUI().extended?.birthflower ?? {};
  const { BIRTH_FLOWERS } = getContent();
  const cells = Object.entries(BIRTH_FLOWERS).map(([mo, flower]) => {
    const on = Number(mo) === ctx.m;
    return `<button type="button" class="month-pick-cell${on ? ' is-you' : ''}" data-flower-mo="${mo}"
      aria-pressed="${on}">${esc(flower)}</button>`;
  }).join('');
  return extWrap('birthflower', u.title, u.intro, pickerGrid('month-pick', cells, 'birthflower-detail', esc(BIRTH_FLOWERS[ctx.m] ?? '')));
}

/* ============ 深層チャプター（未実装分） ============ */

/** deepChapters の switch で未処理の index を補完 */
export function renderExtraChapter(cardKey, ctx, index) {
  const d = getUI().deep;
  const scroll = (cls, key = 'scrollExt') => scrollBtn(cls, d[key] ?? d.scrollMoon);

  switch (cardKey) {
    case 'expression':
      if (index === 0) return scroll('ext-expression', 'scrollExpression');
      if (index === 1) return renderLpCompat(ctx);
      if (index === 2) return renderLpCareer(ctx);
      if (index === 3) return renderLpSoul(ctx);
      if (index === 4) return renderLpFigures(ctx);
      break;
    case 'sun':
      if (index === 1) return renderSunHouses(ctx);
      if (index === 2) return renderSunTransits(ctx);
      if (index === 3) return renderSunElementCompat(ctx);
      if (index === 4) return renderReflectionBlock(cardKey, index);
      break;
    case 'moonTrait':
      if (index === 0) return scroll('ext-moonTrait', 'scrollMoonTrait');
      if (index === 1) return renderMoonLunarMini(ctx);
      if (index === 2) return renderMoonRitualPicker(ctx);
      break;
    case 'zodiac':
      if (index === 1) return renderZodiacCompat(ctx);
      if (index === 2) return renderZodiacBranches(ctx);
      break;
    case 'sixty':
      if (index === 0) return scroll('ext-sixty', 'scrollSixty');
      if (index === 1) return renderSixtyPillars(ctx);
      if (index === 2) return renderSixtyLuck(ctx);
      break;
    case 'kyusei':
      if (index === 1) return renderKyuseiStarsExtra(ctx);
      if (index === 2) return renderKyuseiDirections(ctx);
      if (index === 3) return renderKyuseiCompat(ctx);
      break;
    case 'gogyou':
      if (index === 1) return renderGogyouBalance(ctx);
      if (index === 2) return renderGogyouCompat(ctx);
      break;
    case 'animal':
      if (index === 0) return scroll('ext-animal', 'scrollAnimal');
      if (index === 1) return renderAnimalSixty(ctx);
      if (index === 2) return renderAnimalGroup(ctx);
      if (index === 3) return renderAnimalHidden(ctx);
      break;
    case 'celtic':
      if (index === 0) return scroll('ext-celtic', 'scrollCeltic');
      if (index === 1) return renderCelticOgham(ctx);
      if (index === 2) return renderCelticSeasons(ctx);
      if (index === 3) return renderCelticCompat(ctx);
      break;
    case 'maya':
      if (index === 1) return renderMayaRelated(ctx);
      if (index === 2) return renderMayaWavespell(ctx);
      if (index === 3) return renderMayaSignature(ctx);
      break;
    case 'tarotBirth':
      if (index === 1) return renderTarotSuits(ctx);
      if (index === 2) return renderTarotYearCard(ctx);
      if (index === 3) return `${renderTarotShadowNum(ctx)}${renderTarotSpread(ctx)}`;
      break;
    case 'tarotDaily':
      if (index === 0) return scroll('ext-tarotDaily', 'scrollTarotDaily');
      if (index === 1) return renderTarotWeekStrip(ctx);
      if (index === 2) return renderTarotSpread(ctx);
      break;
    case 'birthstone':
      if (index === 0) return scroll('ext-birthstone', 'scrollBirthstone');
      if (index === 1) return renderStoneTrio(ctx);
      if (index === 2) return renderStoneRituals(ctx);
      break;
    case 'birthflower':
      if (index === 0) return scroll('ext-birthflower', 'scrollBirthflower');
      if (index === 1) return renderFlowerCalendar(ctx);
      if (index === 2) return renderFlowerRemedies(ctx);
      break;
    case 'biorhythm':
      if (index === 1) return renderBioCritical(ctx);
      if (index === 2) return renderBioWavesCompare(ctx);
      break;
    case 'moon':
      if (index === 1) return renderMoonPersonal(ctx);
      if (index === 2) return renderMoonRitualPicker(ctx);
      break;
    case 'lifeStagePrev':
      if (index === 1) return renderMilestonesPassed(ctx);
      if (index === 2) return renderMilestonePatterns(ctx, 'prev');
      break;
    case 'lifeStageNext':
      if (index === 1) return renderMilestonesUpcoming(ctx);
      if (index === 2) return renderMilestonePatterns(ctx, 'next');
      break;
    case 'lifepath':
      break;
    case 'personalYear':
      break;
    default:
      break;
  }
  return renderReflectionBlock(cardKey, index);
}

/* --- 共有ウィジェット（lifepath 系） --- */
function renderLpCompat(ctx) {
  const d = getUI().deep.lifepath;
  const bands = d.compatBands(ctx.lp);
  return `<div class="deep-compat-grid">${bands.map(b => `
    <div class="deep-compat-card deep-compat-${b.kind}">
      <span class="deep-compat-label">${esc(b.label)}</span>
      <p>${esc(b.text)}</p>
    </div>`).join('')}</div>`;
}

function renderLpCareer(ctx) {
  const d = getUI().deep.lifepath;
  const pillars = d.careerPillars(ctx.lp);
  return `
    <div class="deep-pillar-tabs" role="tablist">
      ${pillars.map((p, i) => `
        <button type="button" class="deep-pillar-tab${i === 0 ? ' active' : ''}"
          data-lp-pillar="${i}" aria-pressed="${i === 0}">${esc(p.title)}</button>`).join('')}
    </div>
    <div class="deep-pillar-body" id="lp-pillar-body">${esc(pillars[0].text)}</div>`;
}

function renderLpSoul(ctx) {
  const d = getUI().deep.lifepath;
  return `<div class="deep-prompts">${d.soulPrompts(ctx.lp).map((p, i) => `
    <button type="button" class="deep-prompt" data-deep-prompt="${i}" aria-expanded="false">${esc(p.q)}</button>
    <div class="deep-prompt-answer" hidden>${esc(p.a)}</div>`).join('')}</div>`;
}

function renderLpFigures(ctx) {
  const d = getUI().deep.lifepath;
  return `<ul class="deep-figures">${d.figures(ctx.lp).map(f =>
    `<li><strong>${esc(f.name)}</strong> — ${esc(f.note)}</li>`).join('')}</ul>`;
}

function renderReflectionBlock(cardKey, index) {
  const d = getUI().deep?.prompts;
  if (!d) return '';
  const prompts = d.forChapter(cardKey, index);
  if (!prompts?.length) return '';
  return `<div class="deep-prompts">${prompts.map((p, i) => `
    <button type="button" class="deep-prompt" data-deep-prompt="${i}" aria-expanded="false">${esc(p.q)}</button>
    <div class="deep-prompt-answer" hidden>${esc(p.a)}</div>`).join('')}</div>`;
}

/* --- カード別チャプター --- */
function renderSunHouses(ctx) {
  const houses = getUI().deep?.sun?.houses ?? [];
  const cells = houses.map((h, i) =>
    `<button type="button" class="house-cell" data-house-idx="${i}" aria-pressed="false">${esc(h.short)}</button>`
  ).join('');
  const init = houses[0]?.text ?? '';
  return pickerGrid('house', cells, 'house-detail', esc(init));
}

function renderSunTransits(ctx) {
  const { PERSONAL_YEAR_MEANINGS } = getContent();
  const y0 = ctx.currentYear;
  const cells = [0, 1, 2].map(i => {
    const yr = y0 + i;
    const py = reduceDigit(ctx.m + ctx.d + reduceDigit(yr));
    return `<button type="button" class="transit-year-cell${i === 0 ? ' is-you' : ''}" data-transit-yr="${i}"
      aria-pressed="${i === 0}">${yr}</button>`;
  }).join('');
  const py0 = reduceDigit(ctx.m + ctx.d + reduceDigit(y0));
  return pickerGrid('transit-year', cells, 'transit-year-detail', esc(PERSONAL_YEAR_MEANINGS[py0] ?? ''));
}

function renderSunElementCompat(ctx) {
  const d = getUI().deep?.sun?.elementMap ?? {};
  const el = normalizeElementKey(ctx.sun.element);
  const keys = Object.keys(d);
  const cells = keys.map(k =>
    `<button type="button" class="el-compat-cell${k === el ? ' is-you' : ''}" data-el-key="${esc(k)}"
      aria-pressed="${k === el}">${esc(k)}</button>`
  ).join('');
  const info = d[el] || d.earth;
  return pickerGrid('el-compat', cells, 'el-compat-detail', esc(info?.season ?? ''));
}

function renderMoonLunarMini(ctx) {
  const events = lunarEventsAhead(new Date(), 180).slice(0, 8);
  const u = getUI().extended?.moon ?? {};
  const cells = events.map((e, i) =>
    `<button type="button" class="lunar-mini-cell" data-lunar-mini="${i}" aria-pressed="false">
      <span>${esc(dateLabel(e.date))}</span><span>${esc(e.type === 'new' ? u.newMoon : u.fullMoon)}</span>
    </button>`
  ).join('');
  const first = events[0];
  const init = first ? `${dateLabel(first.date)} · ${first.type}` : '';
  return pickerGrid('lunar-mini', cells, 'lunar-mini-detail', esc(init));
}

function renderMoonRitualPicker(ctx) {
  const u = getUI().deep?.moonTrait ?? getUI().deep?.moon ?? {};
  const rituals = u.rituals ?? [
    { id: 'new', label: 'New moon', text: u.ritualNew ?? '' },
    { id: 'full', label: 'Full moon', text: u.ritualFull ?? '' }
  ];
  return `<div class="ritual-picker">${rituals.map((r, i) => `
    <button type="button" class="ritual-pick-btn${i === 0 ? ' active' : ''}" data-ritual-id="${esc(r.id)}"
      aria-pressed="${i === 0}">${esc(r.label)}</button>`).join('')}
    <div class="ritual-pick-body" id="ritual-pick-body">${esc(rituals[0]?.text ?? '')}</div></div>`;
}

function renderMoonPersonal(ctx) {
  const birthIdx = birthMoonPhaseIndex(ctx.y, ctx.m, ctx.d);
  const todayIdx = Math.floor((ctx.mp?.phase ?? 0) * 8) % 8;
  const { MOON_PHASE_NAMES } = getContent();
  const u = getUI().deep?.moon ?? {};
  return `<p>${esc(u.personalBody?.(MOON_PHASE_NAMES[birthIdx], MOON_PHASE_NAMES[todayIdx]) ?? '')}</p>
    <p class="deep-hint">${esc(u.personalHint ?? '')}</p>`;
}

function renderZodiacCompat(ctx) {
  const { CHINESE_ZODIAC } = getContent();
  const myIdx = ((ctx.y - 4) % 12 + 12) % 12;
  const labels = getUI().deep?.zodiac?.relationLabels ?? {};
  const cells = CHINESE_ZODIAC.map((z, i) => {
    const rel = zodiacRelation(myIdx, i);
    return `<button type="button" class="zodiac-rel-cell zodiac-rel-${rel}${i === myIdx ? ' is-you' : ''}"
      data-zodiac-rel="${i}" aria-pressed="${i === myIdx}">
      <span>${esc(z.char)}</span><span class="zodiac-rel-tag">${esc(labels[rel] ?? rel)}</span></button>`;
  }).join('');
  return pickerGrid('zodiac-rel', cells, 'zodiac-rel-detail', esc(CHINESE_ZODIAC[myIdx].desc));
}

function renderZodiacBranches(ctx) {
  const { EARTHLY_BRANCHES, CHINESE_ZODIAC } = getContent();
  const branchIdx = ((ctx.y - 4) % 12 + 12) % 12;
  const cells = EARTHLY_BRANCHES.map((b, i) =>
    `<button type="button" class="branch-cell${i === branchIdx ? ' is-you' : ''}" data-branch-idx="${i}"
      aria-pressed="${i === branchIdx}">${esc(b)}</button>`
  ).join('');
  return pickerGrid('branch', cells, 'branch-detail', esc(CHINESE_ZODIAC[branchIdx].desc));
}

function renderSixtyPillars(ctx) {
  const { HEAVENLY_STEMS, EARTHLY_BRANCHES } = getContent();
  const pos = sixtyCycleIndex(ctx.y);
  return `<div class="pillar-display">
    <div class="pillar-row"><span>${esc(getUI().deep?.sixty?.stem ?? 'Stem')}</span> ${esc(HEAVENLY_STEMS[pos % 10])}</div>
    <div class="pillar-row"><span>${esc(getUI().deep?.sixty?.branch ?? 'Branch')}</span> ${esc(EARTHLY_BRANCHES[pos % 12])}</div>
    <div class="pillar-row"><span>${esc(getUI().deep?.sixty?.cycle ?? 'Cycle')}</span> ${pos + 1} / 60</div>
  </div>`;
}

function renderSixtyLuck(ctx) {
  const decades = [0, 1, 2, 3, 4, 5].map(i => {
    const start = i * 10;
    return `<button type="button" class="decade-cell" data-decade="${i}" aria-pressed="false">${start}–${start + 9}</button>`;
  }).join('');
  const u = getUI().deep?.sixty ?? {};
  return pickerGrid('decade', decades, 'decade-detail', esc(u.decadeHint ?? ''));
}

function renderKyuseiStarsExtra(ctx) {
  const { KYUSEI_STARS } = getContent();
  const honmei = kyuseiCycleYear(ctx.y, ctx.currentYear);
  const month = kyuseiMonthStar(ctx.m, ctx.d);
  const day = kyuseiDayStar(ctx.d);
  const u = getUI().deep?.kyusei ?? {};
  const rows = [
    { key: 'honmei', n: honmei, label: u.honmeiLabel ?? 'Honmei' },
    { key: 'month', n: month, label: u.monthLabel ?? 'Month' },
    { key: 'day', n: day, label: u.dayLabel ?? 'Day' }
  ];
  return `<div class="ky-trio">${rows.map(r => `
    <button type="button" class="ky-trio-cell${r.key === 'honmei' ? ' is-you' : ''}" data-ky-trio="${r.key}"
      aria-pressed="${r.key === 'honmei'}">
      <span>${esc(r.label)}</span><strong>${r.n}</strong>
    </button>`).join('')}
    <div class="ky-trio-detail" id="ky-trio-detail">${esc(KYUSEI_STARS[honmei]?.desc ?? '')}</div></div>`;
}

function renderKyuseiCompat(ctx) {
  const { KYUSEI_STARS } = getContent();
  const mine = kyuseiCycleYear(ctx.y, ctx.currentYear);
  const cells = Array.from({ length: 9 }, (_, i) => {
    const n = i + 1;
    return `<button type="button" class="ky-compat-cell${n === mine ? ' is-you' : ''}" data-ky-compat="${n}"
      aria-pressed="${n === mine}">${n}</button>`;
  }).join('');
  return pickerGrid('ky-compat', cells, 'ky-compat-detail', esc(KYUSEI_STARS[mine]?.desc ?? ''));
}

function renderGogyouBalance(ctx) {
  const { FIVE_ELEMENTS } = getContent();
  const el = ctx.gy.element;
  const bars = FIVE_ELEMENTS.map(e => {
    const pct = e === el ? 40 : 15;
    return `<div class="gogy-bar-row"><span>${esc(e)}</span><div class="gogy-bar-track"><div class="gogy-bar-fill" style="width:${pct}%"></div></div></div>`;
  }).join('');
  return `<div class="gogy-balance">${bars}</div>
    <p class="deep-hint">${esc(getUI().deep?.gogyou?.balanceHint ?? '')}</p>`;
}

function renderGogyouCompat(ctx) {
  const { FIVE_ELEMENTS, GOGYOU_DESCS } = getContent();
  const el = ctx.gy.element;
  const labels = getUI().deep?.gogyou?.relationLabels ?? {};
  const cells = FIVE_ELEMENTS.map(other => {
    const rel = gogyouRelation(el, other, FIVE_ELEMENTS);
    return `<button type="button" class="gogy-rel-cell${other === el ? ' is-you' : ''}" data-gogy-rel="${esc(other)}"
      aria-pressed="${other === el}"><span>${esc(other)}</span><span>${esc(labels[rel] ?? rel)}</span></button>`;
  }).join('');
  return pickerGrid('gogy-rel', cells, 'gogy-rel-detail', esc(GOGYOU_DESCS[el] ?? ''));
}

function renderAnimalSixty(ctx) {
  const u = getUI().deep?.animal ?? {};
  const cells = Array.from({ length: 12 }, (_, i) => {
    const num = ((ctx.an.num - 1 + i * 5) % 60) + 1;
    const on = num === ctx.an.num;
    return `<button type="button" class="animal-num-cell${on ? ' is-you' : ''}" data-an-num="${num}"
      aria-pressed="${on}">${num}</button>`;
  }).join('');
  return `${pickerGrid('animal-num', cells, 'animal-num-detail', esc(u.sixtyBody?.(ctx.an.num) ?? ''))}
    <p class="deep-hint">${esc(u.sixtyHint ?? '')}</p>`;
}

function renderAnimalGroup(ctx) {
  const u = getUI().deep?.animal ?? {};
  const groups = u.groups ?? [
    { id: 'moon', label: 'Moon' }, { id: 'earth', label: 'Earth' }, { id: 'sun', label: 'Sun' }
  ];
  const idx = animalGroupIndex((ctx.an.num - 1) % 12);
  return `<div class="animal-group-tabs">${groups.map((g, i) => `
    <button type="button" class="animal-group-tab${i === idx ? ' active' : ''}" data-an-group="${i}"
      aria-pressed="${i === idx}">${esc(g.label)}</button>`).join('')}
    <div class="animal-group-body" id="animal-group-body">${esc(groups[idx]?.text ?? u.groupBody?.(groups[idx]?.id) ?? '')}</div></div>`;
}

function renderAnimalCompat(ctx) {
  const { ANIMAL_NAMES, ANIMAL_DESC } = getContent();
  const myIdx = (ctx.an.num - 1) % 12;
  const cells = ANIMAL_NAMES.map((name, i) =>
    `<button type="button" class="animal-cell${i === myIdx ? ' is-you' : ''}" data-an-compat="${i}"
      aria-pressed="${i === myIdx}"><span class="cell-emoji" aria-hidden="true">${ANIMAL_EMOJI[i]}</span><span class="cell-name">${esc(name)}</span></button>`
  ).join('');
  return pickerGrid('animal', cells, 'animal-compat-detail', esc(ANIMAL_DESC[ctx.an.name] ?? ''));
}

function renderAnimalHidden(ctx) {
  const { ANIMAL_NAMES, ANIMAL_DESC } = getContent();
  const hiddenIdx = ((ctx.an.num - 1) + 6) % 12;
  const name = ANIMAL_NAMES[hiddenIdx];
  const u = getUI().deep?.animal ?? {};
  return `<p class="deep-hint">${esc(u.hiddenIntro ?? '')}</p>
    <div class="tarot-highlight"><strong>${esc(name)}</strong><p>${esc(ANIMAL_DESC[name] ?? '')}</p></div>`;
}

function renderCelticSeasons(ctx) {
  const seasons = getUI().deep?.celtic?.seasons ?? [
    { id: 'spring', label: 'Spring' }, { id: 'summer', label: 'Summer' },
    { id: 'autumn', label: 'Autumn' }, { id: 'winter', label: 'Winter' }
  ];
  return `<div class="season-tabs">${seasons.map((s, i) => `
    <button type="button" class="season-tab${i === 0 ? ' active' : ''}" data-celtic-season="${i}"
      aria-pressed="${i === 0}">${esc(s.label)}</button>`).join('')}
    <div class="season-body" id="celtic-season-body">${esc(seasons[0]?.ritual ?? '')}</div></div>`;
}

function renderCelticOgham(ctx) {
  const { CELTIC_TREES } = getContent();
  const idx = CELTIC_TREES.findIndex(t => t.name === ctx.ct.name);
  const cells = CELTIC_TREES.map((t, i) =>
    `<button type="button" class="celtic-cell${i === idx ? ' is-you' : ''}" data-celtic-ogham="${i}"
      aria-pressed="${i === idx}">${esc(t.name.slice(0, 3))}</button>`
  ).join('');
  return pickerGrid('celtic', cells, 'celtic-ogham-detail', esc(ctx.ct.desc));
}

function renderCelticCompat(ctx) {
  const { CELTIC_TREES } = getContent();
  const idx = CELTIC_TREES.findIndex(t => t.name === ctx.ct.name);
  const partners = [1, 4, 7].map(o => (idx + o) % CELTIC_TREES.length);
  return `<ul class="deep-figures">${partners.map(i =>
    `<li><strong>${esc(CELTIC_TREES[i].name)}</strong> — ${esc(CELTIC_TREES[i].desc)}</li>`).join('')}</ul>`;
}

function renderMayaRelated(ctx) {
  const rel = mayaRelatedKin(ctx.my.kin);
  const { MAYA_SEALS, MAYA_TONES } = getContent();
  const u = getUI().deep?.maya ?? {};
  const items = [
    { key: 'guide', kin: rel.guide, label: u.guideLabel ?? 'Guide' },
    { key: 'antipode', kin: rel.antipode, label: u.antipodeLabel ?? 'Antipode' },
    { key: 'occult', kin: rel.occult, label: u.occultLabel ?? 'Occult' }
  ];
  return `<div class="maya-related">${items.map(it => `
    <button type="button" class="maya-rel-card" data-maya-rel="${it.key}" aria-expanded="false">
      <span>${esc(it.label)}</span><strong>KIN ${it.kin}</strong>
      <span>${esc(MAYA_SEALS[(it.kin - 1) % 20])}</span>
    </button>
    <div class="maya-rel-body" hidden>${esc(MAYA_TONES[(it.kin - 1) % 13])}</div>`).join('')}</div>`;
}

function renderMayaWavespell(ctx) {
  const toneIdx = (ctx.my.kin - 1) % 13;
  const { MAYA_TONES } = getContent();
  const cells = MAYA_TONES.map((t, i) =>
    `<button type="button" class="maya-tone-cell${i === toneIdx ? ' is-you' : ''}" data-maya-tone="${i}"
      aria-pressed="${i === toneIdx}">${esc(t.trim())}</button>`
  ).join('');
  return pickerGrid('maya-tone', cells, 'maya-tone-detail', esc(MAYA_TONES[toneIdx]));
}

function renderMayaDailyKin(ctx) {
  const today = new Date();
  const { MAYA_SEALS } = getContent();
  const u = getUI().deep?.maya ?? {};
  // ドリームスペル公式(起点 KIN164・2/29 スキップ)の共通関数を使う(calculations.js)。
  const todayKin = mayaDayKin(today.getFullYear(), today.getMonth() + 1, today.getDate());
  return `<p>${esc(u.dailyBody?.(ctx.my.kin, todayKin) ?? `Your KIN ${ctx.my.kin} · Today KIN ${todayKin}`)}</p>
    <p class="deep-hint">${esc(MAYA_SEALS[(todayKin - 1) % 20])}</p>`;
}

function renderTarotYearCard(ctx) {
  const { TAROT_BY_NUM, TAROT_MEANINGS } = getContent();
  const num = reduceDigit(ctx.py + ctx.lp);
  const name = TAROT_BY_NUM[num] ?? TAROT_BY_NUM[1];
  return `<div class="tarot-highlight"><strong>${esc(name)}</strong><p>${esc(TAROT_MEANINGS[name] ?? '')}</p></div>`;
}

function renderKyuseiDirections(ctx) {
  const lucky = luckyCompass(ctx.lp, ctx.sun.element, ctx.ks.element, ctx.gy.element);
  const u = getUI().deep?.kyusei ?? {};
  return `<div class="lucky-compass">
    <div class="lucky-row"><span class="lucky-label">${esc(u.directionLabel ?? 'Lucky')}</span>
      ${lucky.colors.map(c => `<span class="lucky-chip">${esc(c)}</span>`).join('')}</div>
    <p class="lucky-hint">${esc(lucky.hint)}</p></div>`;
}

function renderGogyouSupplement(ctx) {
  const tips = getUI().deep?.gogyou?.supplements?.(ctx.gy.element) ?? [
    'Color', 'Food', 'Direction', 'Habit'
  ];
  return `<div class="deep-keyword-row">${tips.map(t =>
    `<span class="deep-keyword">${esc(t)}</span>`).join('')}</div>
    <p class="deep-hint">${esc(getUI().deep?.gogyou?.supplementHint ?? '')}</p>`;
}

function renderMayaSignature(ctx) {
  const my = ctx.my;
  const u = getUI().deep?.maya ?? {};
  return `<div class="maya-kin-display">
    <div class="maya-kin-row"><span>${esc(u.kin ?? 'KIN')}</span> ${my.kin}</div>
    <div class="maya-kin-row"><span>${esc(u.tone ?? 'Tone')}</span> ${esc(my.tone)}</div>
    <div class="maya-kin-row"><span>${esc(u.seal ?? 'Seal')}</span> ${esc(my.seal)}</div>
    <p class="deep-hint">${esc(u.signatureHint ?? '')}</p>
  </div>`;
}

function renderTarotSuits(ctx) {
  const suits = getUI().deep?.tarot?.suits ?? [
    { id: 'wands', label: 'Wands', text: 'Fire · action · will' },
    { id: 'cups', label: 'Cups', text: 'Water · feeling · bonds' },
    { id: 'swords', label: 'Swords', text: 'Air · thought · truth' },
    { id: 'pentacles', label: 'Pentacles', text: 'Earth · body · craft' }
  ];
  const idx = ctx.tb.num % 4;
  return `<div class="tarot-suit-tabs">${suits.map((s, i) => `
    <button type="button" class="tarot-suit-tab${i === idx ? ' active' : ''}" data-tarot-suit="${i}"
      aria-pressed="${i === idx}">${esc(s.label)}</button>`).join('')}
    <div class="tarot-suit-body" id="tarot-suit-body">${esc(suits[idx]?.text ?? '')}</div></div>`;
}

function renderTarotShadowNum(ctx) {
  const { TAROT_BY_NUM } = getContent();
  // TAROT_BY_NUM は index 0..21。剰余の結果 0(愚者)は有効なので 22 に読み替えない。
  const shadow = (ctx.tb.num + 11) % 22;
  const d = getUI().deep?.tarot ?? {};
  return `<p>${esc(d.shadowText(TAROT_BY_NUM[shadow] ?? ctx.tb.name))}</p>`;
}

function renderTarotWeekStrip(ctx) {
  const { TAROT_MEANINGS } = getContent();
  const keys = Object.keys(TAROT_MEANINGS);
  const week = dailyTarotWeek(ctx.name, keys, 7);
  const cells = week.map((row, i) =>
    `<button type="button" class="tarot-day-cell${i === 0 ? ' is-you' : ''}" data-tarot-week="${i}"
      aria-pressed="${i === 0}"><span>${esc(dateLabel(row.date))}</span><span>${esc(row.key)}</span></button>`
  ).join('');
  return pickerGrid('tarot-day', cells, 'tarot-week-detail', esc(TAROT_MEANINGS[week[0].key] ?? ''));
}

function renderTarotSpread(ctx) {
  const positions = getUI().deep?.tarotDaily?.spreadPositions ?? [
    'Past', 'Present', 'Future', 'Challenge', 'Above', 'Below', 'Advice'
  ];
  const { TAROT_MEANINGS } = getContent();
  const keys = Object.keys(TAROT_MEANINGS);
  const cells = positions.map((p, i) =>
    `<button type="button" class="spread-pos-cell" data-spread-pos="${i}" aria-pressed="false">${esc(p)}</button>`
  ).join('');
  return pickerGrid('spread-pos', cells, 'spread-pos-detail', esc(TAROT_MEANINGS[keys[ctx.lp % keys.length]] ?? ''));
}

function renderStoneTrio(ctx) {
  const lucky = luckyCompass(ctx.lp, ctx.sun.element, ctx.ks.element, ctx.gy.element);
  const { BIRTHSTONES } = getContent();
  const primary = BIRTHSTONES[ctx.m];
  const u = getUI().deep?.birthstone ?? {};
  return `<ul class="deep-figures">
    <li><strong>${esc(primary?.name ?? '')}</strong> — ${esc(primary?.meaning ?? '')}</li>
    ${lucky.colors.map(c => `<li><strong>${esc(c)}</strong> — ${esc(u.colorHint ?? '')}</li>`).slice(0, 2).join('')}
  </ul>`;
}

function renderStoneRituals(ctx) {
  const steps = getUI().deep?.birthstone?.rituals ?? [
    'Hold the stone in your palm for three breaths.',
    'Name one quality you wish to invite — without forcing outcome.',
    'Wear it close to skin when you need a gentle anchor.'
  ];
  return `<ol class="ritual-steps">${steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>`;
}

function renderFlowerCalendar(ctx) {
  const { BIRTH_FLOWERS } = getContent();
  const cells = Object.entries(BIRTH_FLOWERS).map(([mo, flower]) => {
    const on = Number(mo) === ctx.m;
    return `<button type="button" class="month-pick-cell${on ? ' is-you' : ''}" data-flower-cal="${mo}"
      aria-pressed="${on}">${esc(flower)}</button>`;
  }).join('');
  return pickerGrid('month-pick', cells, 'flower-cal-detail', esc(BIRTH_FLOWERS[ctx.m] ?? ''));
}

function renderFlowerRemedies(ctx) {
  const essences = getUI().deep?.birthflower?.essences ?? [
    'Gentleness', 'Clarity', 'Courage', 'Joy'
  ];
  return `<div class="deep-keyword-row">${essences.map(e =>
    `<span class="deep-keyword">${esc(e)}</span>`).join('')}</div>`;
}

function renderBioCritical(ctx) {
  const days = biorhythmCriticalDays(ctx.y, ctx.m, ctx.d, 90);
  const u = getUI().deep?.biorhythm ?? {};
  if (!days.length) return `<p>${esc(u.noCritical ?? '')}</p>`;
  return `<ul class="deep-watch-list">${days.slice(0, 12).map(r =>
    `<li><strong>${esc(dateLabel(new Date(r.y, r.mo - 1, r.day)))}</strong> — ${esc(u.criticalNote ?? '')}</li>`
  ).join('')}</ul>`;
}

function renderBioWavesCompare(ctx) {
  const u = getUI().extended?.biorhythm ?? {};
  const waves = ['physical', 'emotional', 'intellectual', 'intuitive'];
  const cells = waves.map((w, i) => {
    const v = ctx.bio[w];
    const pct = (v * 100).toFixed(0);
    return `<button type="button" class="bio-wave-compare${i === 0 ? ' active' : ''}" data-bio-cmp="${w}"
      aria-pressed="${i === 0}">${esc(u.waves?.[w] ?? w)} <strong>${pct}%</strong></button>`;
  }).join('');
  return `<div class="bio-cmp-tabs">${cells}</div>
    <div class="bio-cmp-body" id="bio-cmp-body">${esc(u.actionHint?.(ctx.bio.physical) ?? '')}</div>`;
}

function renderMilestonesPassed(ctx) {
  const { passed } = lifeMilestonesAround(ctx.y, ctx.m, ctx.d);
  return `<ul class="deep-watch-list">${passed.map(ms =>
    `<li><strong>${esc(String(ms.age))}</strong> · ${esc(ms.name)}<br><span>${esc(ms.desc)}</span></li>`
  ).join('')}</ul>`;
}

function renderMilestonesUpcoming(ctx) {
  const { upcoming } = lifeMilestonesAround(ctx.y, ctx.m, ctx.d);
  return `<ul class="deep-watch-list">${upcoming.map(ms =>
    `<li><strong>${esc(String(ms.age))}</strong> · ${esc(ms.name)}<br><span>${esc(ms.desc)}</span></li>`
  ).join('')}</ul>`;
}

function renderMilestonePatterns(ctx, mode) {
  const u = getUI().deep?.lifeStage ?? {};
  const tags = mode === 'prev'
    ? (u.pastTags?.(ctx.lp) ?? ['Foundation', 'Expansion', 'Integration'])
    : (u.futureTags?.(ctx.py) ?? ['Seed', 'Growth', 'Harvest']);
  return `<div class="deep-keyword-row">${tags.map(t =>
    `<span class="deep-keyword">${esc(t)}</span>`).join('')}</div>`;
}

/* ============ イベント配線 ============ */

export function bindCardInteractives(root, cardKey, ctx) {
  if (!root || !ctx) return;

  bindPicker(root, '[data-lp-num]', 'lp-pick-detail', (btn) => {
    const { LIFE_PATH_MEANINGS } = getContent();
    return LIFE_PATH_MEANINGS[Number(btn.dataset.lpNum)]?.desc ?? '';
  }, 'lp-pick-cell');

  bindPicker(root, '[data-py-wave]', 'py-wave-detail', (btn) => {
    const { PERSONAL_YEAR_MEANINGS } = getContent();
    return PERSONAL_YEAR_MEANINGS[Number(btn.dataset.pyWave)] ?? '';
  }, 'py-wave-cell');

  bindPicker(root, '[data-sun-idx]', 'sun-pick-detail', (btn) => {
    return getContent().SUN_SIGNS[Number(btn.dataset.sunIdx)]?.desc ?? '';
  }, 'sun-pick-cell');

  bindPicker(root, '[data-mt-idx]', 'moon-trait-detail', (btn) => {
    return getContent().MOON_TRAITS[Number(btn.dataset.mtIdx)]?.desc ?? '';
  }, 'moon-trait-cell');

  bindZodiacPickers(root);
  bindSixty(root);
  bindKyuseiExtended(root, ctx);
  bindGogyouExtended(root);
  bindAnimalExtended(root, ctx);
  bindCelticExtended(root, ctx);
  bindMayaExtended(root, ctx);
  bindTarotExtended(root, ctx);
  bindMonthPickers(root);
  bindMisc(root, ctx);
}

function bindPicker(root, sel, detailId, getText, cellClass) {
  const detail = root.querySelector(`#${detailId}`);
  root.querySelectorAll(sel).forEach(btn => {
    btn.addEventListener('click', () => {
      root.querySelectorAll(`.${cellClass}`).forEach(b => {
        b.classList.toggle('is-you', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      if (detail) detail.textContent = getText(btn);
    });
  });
}

function bindZodiacPickers(root) {
  const zodiacDetail = (id) => root.querySelector(`#${id}`);
  const pick = (sel, detailId, cellClass) => {
    root.querySelectorAll(sel).forEach(btn => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.zodiacIdx ?? btn.dataset.zodiacRel);
        root.querySelectorAll(`.${cellClass}`).forEach(b => {
          b.classList.toggle('is-you', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        const detail = zodiacDetail(detailId);
        if (detail) detail.textContent = getContent().CHINESE_ZODIAC[i]?.desc ?? '';
      });
    });
  };
  pick('[data-zodiac-idx]', 'zodiac-ext-detail', 'zodiac-grid-cell');
  pick('[data-zodiac-rel]', 'zodiac-rel-detail', 'zodiac-rel-cell');
  bindPicker(root, '[data-branch-idx]', 'branch-detail', (btn) =>
    getContent().CHINESE_ZODIAC[Number(btn.dataset.branchIdx)]?.desc ?? '', 'branch-cell');
}

function bindSixty(root) {
  const { HEAVENLY_STEMS, EARTHLY_BRANCHES } = getContent();
  const detail = root.querySelector('#sixty-ext-detail');
  root.querySelectorAll('[data-sixty-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.sixtyIdx);
      root.querySelectorAll('.sixty-cell').forEach(b => {
        b.classList.toggle('is-you', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      if (detail) detail.textContent = `${HEAVENLY_STEMS[i % 10]}${EARTHLY_BRANCHES[i % 12]}`;
    });
  });
  const decadeDetail = root.querySelector('#decade-detail');
  root.querySelectorAll('[data-decade]').forEach(btn => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('.decade-cell').forEach(b => b.classList.toggle('active', b === btn));
      if (decadeDetail) decadeDetail.textContent = getUI().deep?.sixty?.decadeHint ?? '';
    });
  });
}

function bindKyuseiExtended(root, ctx) {
  const { KYUSEI_STARS } = getContent();
  bindPicker(root, '[data-ky-star]', 'ky-star-detail', (btn) =>
    KYUSEI_STARS[Number(btn.dataset.kyStar)]?.desc ?? '', 'ky-star-cell');
  const trioDetail = root.querySelector('#ky-trio-detail');
  const honmei = kyuseiCycleYear(ctx.y, ctx.currentYear);
  const map = { honmei, month: kyuseiMonthStar(ctx.m, ctx.d), day: kyuseiDayStar(ctx.d) };
  root.querySelectorAll('[data-ky-trio]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.kyTrio;
      root.querySelectorAll('.ky-trio-cell').forEach(b => {
        b.classList.toggle('is-you', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      if (trioDetail) trioDetail.textContent = KYUSEI_STARS[map[key]]?.desc ?? '';
    });
  });
  bindPicker(root, '[data-ky-compat]', 'ky-compat-detail', (btn) =>
    KYUSEI_STARS[Number(btn.dataset.kyCompat)]?.desc ?? '', 'ky-compat-cell');
}

function bindGogyouExtended(root) {
  const { GOGYOU_DESCS, FIVE_ELEMENTS } = getContent();
  const extDetail = root.querySelector('#gogy-ext-detail');
  root.querySelectorAll('[data-gy-el]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = btn.dataset.gyEl;
      root.querySelectorAll('.gogy-cycle-node').forEach(b => {
        b.classList.toggle('is-you', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      const text = GOGYOU_DESCS[el] ?? '';
      if (extDetail) extDetail.textContent = text;
      const cycleDetail = root.querySelector('#gogy-cycle-detail');
      if (cycleDetail) cycleDetail.textContent = text;
    });
  });
  bindPicker(root, '[data-gogy-rel]', 'gogy-rel-detail', (btn) =>
    GOGYOU_DESCS[btn.dataset.gogyRel] ?? '', 'gogy-rel-cell');
}

function bindAnimalExtended(root, ctx) {
  const { ANIMAL_NAMES, ANIMAL_DESC } = getContent();
  const showAnimal = (idx, detailId) => {
    const detail = root.querySelector(`#${detailId}`);
    if (detail) detail.textContent = ANIMAL_DESC[ANIMAL_NAMES[idx]] ?? '';
  };
  root.querySelectorAll('[data-animal-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.animalIdx);
      root.querySelectorAll('.animal-cell').forEach(b => {
        b.classList.toggle('is-you', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      showAnimal(i, 'animal-ext-detail');
      showAnimal(i, 'animal-compat-detail');
    });
  });
  const groups = getUI().deep?.animal?.groups ?? [];
  const groupBody = root.querySelector('#animal-group-body');
  root.querySelectorAll('[data-an-group]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.anGroup);
      root.querySelectorAll('.animal-group-tab').forEach(t => {
        t.classList.toggle('active', t === btn);
        t.setAttribute('aria-pressed', t === btn ? 'true' : 'false');
      });
      if (groupBody) groupBody.textContent = groups[i]?.text ?? getUI().deep?.animal?.groupBody?.(groups[i]?.id) ?? '';
    });
  });
}

function bindCelticExtended(root, ctx) {
  const { CELTIC_TREES } = getContent();
  bindPicker(root, '[data-celtic-idx]', 'celtic-ext-detail', (btn) =>
    CELTIC_TREES[Number(btn.dataset.celticIdx)]?.desc ?? '', 'celtic-cell');
  bindPicker(root, '[data-celtic-ogham]', 'celtic-ogham-detail', (btn) =>
    CELTIC_TREES[Number(btn.dataset.celticOgham)]?.desc ?? '', 'celtic-cell');
  const seasons = getUI().deep?.celtic?.seasons ?? [];
  const seasonBody = root.querySelector('#celtic-season-body');
  root.querySelectorAll('[data-celtic-season]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.celticSeason);
      root.querySelectorAll('.season-tab').forEach(t => t.classList.toggle('active', t === btn));
      if (seasonBody) seasonBody.textContent = seasons[i]?.ritual ?? '';
    });
  });
}

function bindMayaExtended(root, ctx) {
  const { MAYA_SEALS, MAYA_TONES } = getContent();
  bindPicker(root, '[data-maya-seal]', 'maya-seal-detail', (btn) => {
    const i = Number(btn.dataset.mayaSeal);
    return `${MAYA_TONES[i % 13]}${MAYA_SEALS[i]}`;
  }, 'maya-seal-cell');
  bindPicker(root, '[data-maya-tone]', 'maya-tone-detail', (btn) =>
    MAYA_TONES[Number(btn.dataset.mayaTone)], 'maya-tone-cell');
  root.querySelectorAll('[data-maya-rel]').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (body?.classList.contains('maya-rel-body')) body.hidden = open;
    });
  });
}

function bindTarotExtended(root, ctx) {
  const { TAROT_BY_NUM, TAROT_MEANINGS } = getContent();
  bindPicker(root, '[data-tarot-num]', 'tarot-major-detail', (btn) =>
    TAROT_MEANINGS[TAROT_BY_NUM[Number(btn.dataset.tarotNum)]] ?? '', 'tarot-major-cell');
  const weekDetail = (id) => root.querySelector(`#${id}`);
  const bindWeek = (sel, id) => {
    const keys = Object.keys(TAROT_MEANINGS);
    const week = dailyTarotWeek(ctx.name, keys, 7);
    root.querySelectorAll(sel).forEach(btn => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.tarotDay ?? btn.dataset.tarotWeek);
        root.querySelectorAll('.tarot-day-cell').forEach(b => {
          b.classList.toggle('is-you', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        const d = weekDetail(id);
        if (d) d.textContent = TAROT_MEANINGS[week[i]?.key] ?? '';
      });
    });
  };
  bindWeek('[data-tarot-day]', 'tarot-day-detail');
  bindWeek('[data-tarot-week]', 'tarot-week-detail');
  const keys = Object.keys(TAROT_MEANINGS);
  bindPicker(root, '[data-spread-pos]', 'spread-pos-detail', (btn) =>
    TAROT_MEANINGS[keys[(ctx.lp + Number(btn.dataset.spreadPos)) % keys.length]] ?? '', 'spread-pos-cell');
}

function bindMonthPickers(root) {
  const { BIRTHSTONES, BIRTH_FLOWERS } = getContent();
  root.querySelectorAll('[data-birth-mo]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mo = btn.dataset.birthMo;
      root.querySelectorAll('[data-birth-mo]').forEach(b => {
        b.classList.toggle('is-you', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      const detail = root.querySelector('#birthstone-detail');
      if (detail) detail.textContent = BIRTHSTONES[mo]?.meaning ?? '';
    });
  });
  root.querySelectorAll('[data-flower-mo], [data-flower-cal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mo = btn.dataset.flowerMo ?? btn.dataset.flowerCal;
      root.querySelectorAll('[data-flower-mo], [data-flower-cal]').forEach(b => {
        b.classList.toggle('is-you', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      const d1 = root.querySelector('#birthflower-detail');
      const d2 = root.querySelector('#flower-cal-detail');
      const text = BIRTH_FLOWERS[mo] ?? '';
      if (d1) d1.textContent = text;
      if (d2) d2.textContent = text;
    });
  });
}

function bindMisc(root, ctx) {
  const houses = getUI().deep?.sun?.houses ?? [];
  bindPicker(root, '[data-house-idx]', 'house-detail', (btn) =>
    houses[Number(btn.dataset.houseIdx)]?.text ?? '', 'house-cell');

  const { PERSONAL_YEAR_MEANINGS } = getContent();
  const y0 = ctx.currentYear;
  bindPicker(root, '[data-transit-yr]', 'transit-year-detail', (btn) => {
    const yr = y0 + Number(btn.dataset.transitYr);
    const py = reduceDigit(ctx.m + ctx.d + reduceDigit(yr));
    return PERSONAL_YEAR_MEANINGS[py] ?? '';
  }, 'transit-year-cell');

  const elMap = getUI().deep?.sun?.elementMap ?? {};
  bindPicker(root, '[data-el-key]', 'el-compat-detail', (btn) =>
    elMap[btn.dataset.elKey]?.season ?? '', 'el-compat-cell');

  const events = lunarEventsAhead(new Date(), 180).slice(0, 8);
  bindPicker(root, '[data-lunar-mini]', 'lunar-mini-detail', (btn) => {
    const e = events[Number(btn.dataset.lunarMini)];
    return e ? `${dateLabel(e.date)} · ${e.type}` : '';
  }, 'lunar-mini-cell');

  const rituals = getUI().deep?.moonTrait?.rituals ?? getUI().deep?.moon?.rituals ?? [];
  const ritualBody = root.querySelector('#ritual-pick-body');
  root.querySelectorAll('[data-ritual-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('.ritual-pick-btn').forEach(b => b.classList.toggle('active', b === btn));
      const r = rituals.find(x => x.id === btn.dataset.ritualId);
      if (ritualBody && r) ritualBody.textContent = r.text;
    });
  });

  const uBio = getUI().extended?.biorhythm ?? {};
  const cmpBody = root.querySelector('#bio-cmp-body');
  root.querySelectorAll('[data-bio-cmp]').forEach(btn => {
    btn.addEventListener('click', () => {
      const w = btn.dataset.bioCmp;
      root.querySelectorAll('.bio-wave-compare').forEach(b => b.classList.toggle('active', b === btn));
      if (cmpBody) cmpBody.textContent = uBio.actionHint?.(ctx.bio[w]) ?? '';
    });
  });

  const pillars = getUI().deep.lifepath?.careerPillars?.(ctx.lp);
  const pillarBody = root.querySelector('#lp-pillar-body');
  root.querySelectorAll('[data-lp-pillar]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.lpPillar);
      root.querySelectorAll('[data-lp-pillar]').forEach(t => {
        t.classList.toggle('active', t === btn);
        t.setAttribute('aria-pressed', t === btn ? 'true' : 'false');
      });
      if (pillarBody && pillars) pillarBody.textContent = pillars[i]?.text ?? '';
    });
  });

  const suits = getUI().deep?.tarot?.suits ?? [];
  const suitBody = root.querySelector('#tarot-suit-body');
  root.querySelectorAll('[data-tarot-suit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.tarotSuit);
      root.querySelectorAll('.tarot-suit-tab').forEach(t => {
        t.classList.toggle('active', t === btn);
        t.setAttribute('aria-pressed', t === btn ? 'true' : 'false');
      });
      if (suitBody) suitBody.textContent = suits[i]?.text ?? '';
    });
  });
}
