/**
 * UI レンダリング層。
 * 文言は getUI() / getContent()、深掘りは getDeeper() 経由。
 */

import {
  lifePath, personalYear, expressionProfile, sunSign, moonTrait,
  chineseZodiac, sixtyJikkan, kyuseiHonmei, gogyou, animalUranai,
  mayaKin, tarotBirthCard, dailyTarot, celticTree,
  birthstone, birthflower, biorhythm, moonPhaseToday, lifeStage, lifeTimeline
} from './calculations.js';

import { getContent, getUI, getDeeper, getLocale, isJapaneseLocale } from './i18n/index.js';
import { mountSharePanel } from './share.js';
import { bindLoveMode } from './love-ui.js';
import { bindCompatMode } from './compat-ui.js';
import { renderCyclesPlanner, bindCyclesPlanner } from './cyclesCalendar.js';
import { saveProfile } from './profileStorage.js';
import { mountNarrativePanel } from './narrative-ui.js';
import { generateNarrative } from './narrative.js';
import { mountCardDepth } from './card-depth-ui.js';
import { mountTimeline } from './timeline-ui.js';
import { bindWhatIfMode } from './whatif-ui.js';
import { bindStarMap } from './starmap-ui.js';
import {
  renderExtendedWidget, renderUnifiedModal, bindExtendedReading
} from './extendedReading.js';
import { renderDeepChapterBody, bindDeepChapters } from './deepChapters.js';
import {
  cardSystemHtml, renderGlossStrip, bindTermGloss
} from './termGloss.js';
import {
  escapeHtml, prefersReducedMotion
} from './util.js';

let currentContext = null;
let modalTrigger = null;
let lastRender = null;

// 現在開いているモーダルの 10年タイムライン用データ（年ノードのクリックで参照）
let activeTimeline = [];

// 10年タイムラインを出す時間系カード
const TIMELINE_CARDS = new Set(['personalYear', 'lifeStagePrev', 'lifeStageNext']);

// 相性診断モードから現在の自分側コンテキストを参照するため
export function getCurrentContext() {
  return currentContext;
}

export { escapeHtml };

function expressionMeaningKey(num, meanings) {
  if (meanings[num]) return num;
  let n = num;
  while (n > 9) {
    n = String(n).split('').reduce((s, c) => s + Number(c), 0);
  }
  return n;
}

function expressionDesc(num, meanings) {
  const key = expressionMeaningKey(num, meanings);
  const raw = meanings[key];
  if (!raw) return '';
  const colon = raw.indexOf(':');
  return colon >= 0 ? raw.slice(colon + 1).trim() : raw;
}

function romanNameFromForm() {
  if (!isJapaneseLocale()) return '';
  return document.getElementById('name-roman')?.value.trim() ?? '';
}

function romanNameForRender(stored = '') {
  return isJapaneseLocale() ? stored : '';
}

function buildExpressionCard(u, expr, nameRoman, meanings, jaDualMode) {
  if (!jaDualMode) {
    const num = expr.latin ?? expr.native;
    return card(
      'expression',
      u.cards.expression,
      num,
      u.cards.expressionLabel,
      expressionDesc(num, meanings)
    );
  }

  const nativeDesc = expressionDesc(expr.native, meanings);
  const romanTrimmed = nameRoman.trim();

  if (expr.latin != null && (expr.hasExplicitRoman || expr.latinSource === 'hepburn')) {
    const latinDesc = expressionDesc(expr.latin, meanings);
    const inferred = expr.latinSource === 'hepburn';
    return card(
      'expression',
      u.cards.expression,
      u.fmt.expressionValueDual(expr.native, expr.latin),
      inferred ? u.fmt.expressionLabelInferred : u.fmt.expressionLabelDual,
      inferred
        ? u.fmt.expressionDescInferred(expr.native, expr.latin, nativeDesc, latinDesc, expr.latinName)
        : u.fmt.expressionDescDual(expr.native, expr.latin, nativeDesc, latinDesc)
    );
  }

  const hint = romanTrimmed && expr.latin == null
    ? u.fmt.expressionLatinInvalid
    : u.fmt.expressionHintAddRoman;

  return card(
    'expression',
    u.cards.expression,
    expr.native,
    u.fmt.expressionLabelNative,
    u.fmt.expressionDescNative(nativeDesc, hint)
  );
}

export function generateSummary(name, results) {
  const u = getUI();
  const { LIFE_PATH_MEANINGS } = getContent();
  const { lp, sun, cz, ks, gy, an, ct, my, tb, py, currentYear, bio, mt, ls, mp } = results;
  const lpInfo = LIFE_PATH_MEANINGS[lp];
  const bioAvg = (bio.physical + bio.emotional + bio.intellectual + bio.intuitive) / 4;
  const bioState = bioAvg > 0.25 ? u.fmt.bioUp : bioAvg < -0.25 ? u.fmt.bioDown : u.fmt.bioBalanced;
  const nextHtml = ls.next
    ? u.fmt.nextMilestoneSummary(ls.next.age, ls.next.name, (ls.next.age - ls.years).toFixed(1))
    : '';

  return `
    <div class="summary-label">${u.fmt.summaryLabel}</div>
    <p class="summary-lead">${u.fmt.summaryLead(escapeHtml(name), lpInfo.label)}</p>
    <p>${u.fmt.summaryP2(sun.name, sun.element, cz.name, ks.name, gy.element, an.name, ct.name, my, tb.name)}</p>
    <p>${u.fmt.summaryP3(currentYear, py, bioState, mt.name, mp.name, nextHtml)}</p>
    <p class="summary-hint">${u.fmt.summaryHint}</p>
    ${renderGlossStrip()}
  `;
}

export function card(key, system, value, label, desc) {
  const u = getUI();
  const safeValue = String(value).replace(/"/g, '');
  const aria = u.fmt.cardAria(system, safeValue);
  return `
    <div class="card" data-key="${key}" role="button" tabindex="0" aria-label="${escapeHtml(aria)}${u.fmt.cardMoreAria}">
      <div class="card-system">${cardSystemHtml(key, system)}</div>
      <div class="card-value">${value}</div>
      <div class="card-label">${label}</div>
      <div class="card-desc">${desc}</div>
      <div class="card-more">${u.fmt.cardMore}</div>
    </div>
  `;
}

export function bioBar(label, val) {
  const width = Math.abs(val) * 50;
  const side = val >= 0 ? 'pos' : 'neg';
  const display = val >= 0 ? `+${(val * 100).toFixed(0)}` : (val * 100).toFixed(0);
  return `
    <div class="bio-bar">
      <div class="bio-label">${label}</div>
      <div class="bio-track">
        <div class="bio-center"></div>
        <div class="bio-fill ${side}" style="width:${width}%"></div>
      </div>
      <div class="bio-value">${display}</div>
    </div>
  `;
}

export function moonSvg(phase) {
  const cx = 50, cy = 50, r = 46;
  const dark = '#0a0816';
  const light = '#f5d76e';
  let leftHalf, rightHalf, ellipse;

  if (phase < 0.5) {
    leftHalf  = `<path d="M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${cy + r} Z" fill="${dark}"/>`;
    rightHalf = `<path d="M ${cx},${cy - r} A ${r},${r} 0 0,1 ${cx},${cy + r} Z" fill="${light}"/>`;
    const er = Math.abs(Math.cos(2 * Math.PI * phase)) * r;
    const fill = phase < 0.25 ? dark : light;
    ellipse = `<ellipse cx="${cx}" cy="${cy}" rx="${er}" ry="${r}" fill="${fill}"/>`;
  } else {
    leftHalf  = `<path d="M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${cy + r} Z" fill="${light}"/>`;
    rightHalf = `<path d="M ${cx},${cy - r} A ${r},${r} 0 0,1 ${cx},${cy + r} Z" fill="${dark}"/>`;
    const er = Math.abs(Math.cos(2 * Math.PI * phase)) * r;
    const fill = phase > 0.75 ? dark : light;
    ellipse = `<ellipse cx="${cx}" cy="${cy}" rx="${er}" ry="${r}" fill="${fill}"/>`;
  }

  return `<svg viewBox="0 0 100 100">
    <defs>
      <clipPath id="moonClip"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath>
    </defs>
    <g clip-path="url(#moonClip)">
      ${leftHalf}${rightHalf}${ellipse}
    </g>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(212,175,55,0.35)" stroke-width="1"/>
  </svg>`;
}

function bindResultCards(container) {
  container.querySelectorAll('.card[data-key]').forEach(el => {
    const open = (e) => {
      if (e?.target?.closest?.('.term-gloss')) return;
      openModal(el.dataset.key);
    };
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(e);
      }
    });
  });
  bindTermGloss(container);
}

function sectionHeading(title, en) {
  if (getLocale() !== 'en') {
    return `<h2 class="section-title">${title}</h2>`;
  }
  return `<h2 class="section-title">${title}<span class="section-en">${en}</span></h2>`;
}

export function render(name, nameRoman, y, m, d) {
  const roman = romanNameForRender(nameRoman ?? '');
  lastRender = { name, nameRoman: roman, y, m, d };
  const u = getUI();
  const c = getContent();
  const {
    LIFE_PATH_MEANINGS, PERSONAL_YEAR_MEANINGS, EXPRESSION_MEANINGS,
    ANIMAL_DESC, TAROT_MEANINGS
  } = c;

  const today = new Date();
  const currentYear = today.getFullYear();
  const tarotKeys = Object.keys(TAROT_MEANINGS);

  const lp  = lifePath(y, m, d);
  const py  = personalYear(m, d, currentYear);
  const expr = expressionProfile(name, roman);
  const en = expr.native;
  const sun = sunSign(m, d);
  const mt  = moonTrait(y, m, d);
  const cz  = chineseZodiac(y);
  const sj  = sixtyJikkan(y);
  const ks  = kyuseiHonmei(y, m, d);
  const gy  = gogyou(y);
  const an  = animalUranai(y, m, d);
  const my  = mayaKin(y, m, d);
  const tb  = tarotBirthCard(y, m, d);
  const ct  = celticTree(m, d);
  const dtKey = dailyTarot(name, tarotKeys);
  const dt  = { name: dtKey, desc: TAROT_MEANINGS[dtKey] };
  const bs  = birthstone(m);
  const bf  = birthflower(m);
  const bio = biorhythm(y, m, d);
  const mp  = moonPhaseToday();
  const ls  = lifeStage(y, m, d);

  currentContext = {
    name, nameRoman: roman.trim(), y, m, d, currentYear,
    lp, py, en, expr, sun, mt, cz, sj, ks, gy, an, my, tb, ct, dt, bs, bf, bio, mp, ls
  };

  const summaryHtml = generateSummary(name, currentContext);

  const html = `
    <div class="hero-card">
      <div class="hero-name">${escapeHtml(name)}</div>
      ${isJapaneseLocale() && currentContext.nameRoman
        ? `<div class="hero-name-sub">${escapeHtml(currentContext.nameRoman)}</div>` : ''}
      <div class="hero-meta">
        ${u.fmt.bornOn(y, m, d)} ・ ${u.fmt.ageNow(ls.years.toFixed(2))}<br>
        ${ls.next ? u.fmt.nextMilestone(ls.next.age, ls.next.name) : ''}
      </div>
    </div>

    <div class="summary-card">${summaryHtml}</div>

    <div class="grid">
      <div class="card card-wide card-unified" data-key="unified" role="button" tabindex="0" aria-label="${escapeHtml(u.cards.unified)}${u.fmt.cardMoreAria}">
        <div class="card-system">${cardSystemHtml('unified', u.extended?.unified?.eyebrow ?? u.cards.unified)}</div>
        <div class="card-value card-unified-value">${escapeHtml(u.cards.unified)}</div>
        <div class="card-desc">${escapeHtml(u.cards.unifiedDesc)}</div>
        <div class="card-more">${u.fmt.cardMore}</div>
      </div>
    </div>

    ${sectionHeading(...u.sections.numerology)}
    <div class="grid">
      ${card('lifepath', u.cards.lifepath, lp, LIFE_PATH_MEANINGS[lp].label, LIFE_PATH_MEANINGS[lp].desc)}
      ${card('personalYear', u.cards.personalYear, py, u.fmt.yearYou(currentYear), PERSONAL_YEAR_MEANINGS[py])}
      ${buildExpressionCard(u, expr, roman, EXPRESSION_MEANINGS, isJapaneseLocale())}
    </div>

    ${sectionHeading(...u.sections.western)}
    <div class="grid">
      ${card('sun', u.cards.sun, `${sun.symbol} ${sun.name}`, u.fmt.elementOf(sun.element), sun.desc)}
      ${card('moonTrait', u.cards.moonTrait, mt.name, u.cards.moonTraitLabel, mt.desc + `<div class="note">${u.cards.moonTraitNote}</div>`)}
    </div>

    ${sectionHeading(...u.sections.eastern)}
    <div class="grid">
      ${card('zodiac', u.cards.zodiac, cz.name, u.fmt.bornYearZodiac(cz.char), cz.desc)}
      ${card('sixty', u.cards.sixty, sj.name, `${sj.yinyang}${(sj.yinyang.length > 1 || sj.element.length > 1) ? ' ' : ''}${sj.element}`, u.fmt.sixtyDesc(sj.element))}
      ${card('kyusei', u.cards.kyusei, ks.name, u.fmt.kyuseiStar(ks.element), ks.desc)}
      ${card('gogyou', u.cards.gogyou, gy.element, u.cards.gogyouLabel || u.fmt.gogyouLabel, gy.desc)}
    </div>

    ${sectionHeading(...u.sections.characters)}
    <div class="grid">
      ${card('animal', u.cards.animal, an.name, u.fmt.animalNum(an.num), ANIMAL_DESC[an.name] || u.fmt.animalFallback)}
      ${card('celtic', u.cards.celtic, ct.name, u.fmt.celticLabel, ct.desc)}
    </div>

    ${sectionHeading(...u.sections.sacred)}
    <div class="grid">
      ${card('maya', u.cards.maya, `KIN ${my.kin}`, `${my.tone}${my.seal}`, u.fmt.mayaDesc)}
      ${card('tarotBirth', u.cards.tarotBirth, tb.name, u.fmt.tarotMajor(tb.num), TAROT_MEANINGS[tb.name])}
      ${card('tarotDaily', u.cards.tarotDaily, dt.name, u.fmt.tarotDailyFor(today.getFullYear(), today.getMonth() + 1, today.getDate()), dt.desc)}
    </div>

    ${sectionHeading(...u.sections.nature)}
    <div class="grid">
      ${card('birthstone', u.cards.birthstone, bs.name, u.fmt.monthStone(m), bs.meaning)}
      ${card('birthflower', u.cards.birthflower, bf, u.fmt.monthFlower(m), u.fmt.birthflowerDesc)}
    </div>

    ${sectionHeading(...u.sections.cycles)}
    <div class="grid">
      <div class="card card-wide" data-key="biorhythm" role="button" tabindex="0" aria-label="${u.cards.biorhythm}${u.fmt.cardMoreAria}">
        <div class="card-system">${cardSystemHtml('biorhythm', u.fmt.biorhythmDays(bio.days))}</div>
        ${bioBar(u.bio.physical, bio.physical)}
        ${bioBar(u.bio.emotional, bio.emotional)}
        ${bioBar(u.bio.intellectual, bio.intellectual)}
        ${bioBar(u.bio.intuitive, bio.intuitive)}
        <div class="card-more">${u.fmt.cardMore}</div>
      </div>
      <div class="card card-wide" data-key="moon" role="button" tabindex="0" aria-label="${u.cards.moonTonight}: ${mp.name}${u.fmt.cardMoreAria}">
        <div class="moon-card-inner">
          <div class="moon">${moonSvg(mp.phase)}</div>
          <div>
            <div class="card-system">${cardSystemHtml('moon', u.cards.moonTonight)}</div>
            <div class="card-value">${mp.name}</div>
            <div class="card-desc">${u.fmt.moonPhasePct((mp.phase * 100).toFixed(1))}</div>
          </div>
        </div>
        <div class="card-more">${u.fmt.cardMore}</div>
      </div>
    </div>

    ${renderCyclesPlanner(currentContext)}

    ${sectionHeading(...u.sections.lifeMap)}
    <div class="grid">
      ${ls.prev ? card('lifeStagePrev', u.cards.lifeStagePrev, u.fmt.ageYears(ls.prev.age), ls.prev.name, ls.prev.desc) : ''}
      ${ls.next ? card('lifeStageNext', u.cards.lifeStageNext, u.fmt.ageYears(ls.next.age), ls.next.name, ls.next.desc) : ''}
    </div>
    <div class="grid">
      <div class="card card-wide card-timeline" data-key="timeline" role="button" tabindex="0" aria-label="${escapeHtml(u.cards.timeline)}${u.fmt.cardMoreAria}">
        <div class="card-system">${cardSystemHtml('timeline', u.cards.timeline)}</div>
        <div class="card-value card-timeline-value">${u.timeline.subtitle}</div>
        <div class="card-desc">${u.cards.timelineDesc}</div>
        <div class="card-more">${u.fmt.cardMore}</div>
      </div>
    </div>
  `;

  const r = document.getElementById('results');
  r.innerHTML = html;
  r.classList.add('active');
  bindResultCards(r);
  bindCyclesPlanner(r, currentContext);
  const narrativePromise = generateNarrative(currentContext);
  mountNarrativePanel(currentContext, narrativePromise).catch(err => console.error('Narrative panel:', err));
  mountSharePanel(currentContext, { narrativePromise }).catch(err => console.error('Share panel:', err));
  bindLoveMode();
  bindCompatMode();
  bindStarMap();
  mountTimeline();
  bindWhatIfMode();

  saveProfile({ name, nameRoman: roman, y, m, d });

  const scrollOpts = prefersReducedMotion() ? { block: 'start' } : { behavior: 'smooth', block: 'start' };
  setTimeout(() => r.scrollIntoView(scrollOpts), 100);
}

export function rerenderIfNeeded() {
  if (lastRender) {
    const { name, nameRoman, y, m, d } = lastRender;
    render(name, romanNameForRender(nameRoman ?? ''), y, m, d);
  }
  renderPremiumShowcase();
  const modal = document.getElementById('modal');
  if (modal?.classList.contains('open') && modal.dataset.cardKey) {
    openModal(modal.dataset.cardKey);
  }
}

export function openModal(cardKey) {
  if (!currentContext) return;
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');

  if (cardKey === 'timeline') {
    const u = getUI();
    const t = u.timeline ?? {};
    body.innerHTML = `
      <div class="modal-system" id="modal-heading">${escapeHtml(t.eyebrow ?? '')}</div>
      <div class="modal-value">${escapeHtml(t.title ?? '')}</div>
      <div class="modal-label">${escapeHtml(t.subtitle ?? '')}</div>
      ${renderTimeline(currentContext, { heading: false })}
    `;
    bindModalInteractions(body, cardKey);
  } else if (cardKey === 'unified') {
    body.innerHTML = renderUnifiedModal(currentContext);
    bindExtendedReading(body, 'unified', currentContext);
  } else {
    const data = getDeeper().buildDeep(cardKey, currentContext);
    if (!data) return;
    body.innerHTML = renderModalBody(data, cardKey, currentContext);
    bindModalInteractions(body, cardKey);
    mountCardDepth(cardKey, currentContext);
  }

  modal.dataset.cardKey = cardKey;
  modalTrigger = document.activeElement;
  modal.removeAttribute('hidden');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.querySelector('.container')?.setAttribute('inert', '');

  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.setAttribute('aria-label', getUI().modal.close);
  // ダイアログ本体へフォーカス（閉じるボタンは inert 外でもフォーカス競合を避ける）
  const dialog = document.getElementById('modal-dialog');
  if (dialog) dialog.focus();
  else closeBtn?.focus();
}

export function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  modal.setAttribute('hidden', '');
  document.querySelector('.container')?.removeAttribute('inert');
  if (!document.getElementById('share-modal')?.classList.contains('open')) {
    document.body.style.overflow = '';
  }
  modalTrigger?.focus();
  modalTrigger = null;
}

/**
 * マスターリーディング：深層チャプターをクリックで開閉するアコーディオン。
 * 旧 premium 配列をインタラクティブに見せる。
 */
function renderMasterReading(d, cardKey, ctx) {
  const u = getUI();
  if (!d.premium?.length) return '';
  const m = u.master ?? {};

  const chapters = d.premium.map((item, i) => `
    <div class="master-chapter${i === 0 ? ' open' : ''}" data-deep-chapter="${i}">
      <button type="button" class="master-chapter-head" aria-expanded="${i === 0 ? 'true' : 'false'}">
        <span class="master-chapter-index" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <span class="master-chapter-title">${escapeHtml(item.t)}</span>
        <span class="master-chapter-icon" aria-hidden="true"></span>
      </button>
      <div class="master-chapter-body"${i === 0 ? '' : ' hidden'}>
        ${ctx ? renderDeepChapterBody(cardKey, ctx, item, i) : `<p>${escapeHtml(item.d)}</p>`}
      </div>
    </div>
  `).join('');

  return `
    <div class="master-section">
      <div class="master-head">
        <div class="premium-badge">${escapeHtml(u.modal.premiumBadge)}</div>
        <p class="master-intro">${escapeHtml(m.intro ?? '')}</p>
        <button type="button" class="master-toggle-all" data-master-toggle="open">${escapeHtml(m.expandAll ?? 'Open all')}</button>
      </div>
      <div class="master-chapters">
        ${chapters}
      </div>
    </div>
  `;
}

/** タイムライン1年ぶんの詳細パネル HTML（クリックで差し替え）。 */
function timelineDetailHtml(entry) {
  const u = getUI();
  const t = u.timeline ?? {};
  const { PERSONAL_YEAR_MEANINGS } = getContent();
  const meaning = PERSONAL_YEAR_MEANINGS?.[entry.py] ?? '';
  const milestoneHtml = entry.milestones.length
    ? `
      <div class="timeline-detail-milestones">
        ${entry.milestones.map(ms => `
          <div class="timeline-detail-milestone">
            <span class="timeline-milestone-label">${escapeHtml(t.milestoneLabel ?? '')}</span>
            <strong>${escapeHtml(ms.name)}</strong>
            <span>${escapeHtml(ms.desc)}</span>
          </div>
        `).join('')}
      </div>`
    : '';

  return `
    <div class="timeline-detail-head">
      <span class="timeline-detail-year">${entry.year}</span>
      <span class="timeline-detail-age">${escapeHtml((t.ageAt ? t.ageAt(entry.age) : String(entry.age)))}</span>
      ${entry.isCurrent ? `<span class="timeline-detail-now">${escapeHtml(t.thisYear ?? '')}</span>` : ''}
    </div>
    <div class="timeline-detail-py">
      <span class="timeline-detail-py-num" data-py="${entry.py}">${entry.py}</span>
      <div class="timeline-detail-py-text">
        <strong>${escapeHtml(t.pyHeading ? t.pyHeading(entry.py) : '')}</strong>
        <p>${escapeHtml(meaning)}</p>
      </div>
    </div>
    ${milestoneHtml}
  `;
}

/**
 * インタラクティブ 10年タイムライン。
 * 個人年の波（1〜9）を年ノードで表し、人生の節目をマークする。
 */
function renderTimeline(ctx, { heading = true } = {}) {
  const u = getUI();
  const t = u.timeline ?? {};
  const startYear = new Date().getFullYear();
  activeTimeline = lifeTimeline(ctx.y, ctx.m, ctx.d, startYear, 10);

  const nodes = activeTimeline.map((e, i) => `
    <button type="button"
      class="timeline-node${e.isCurrent ? ' current' : ''}${i === 0 ? ' selected' : ''}${e.milestones.length ? ' has-milestone' : ''}"
      data-tl-index="${i}"
      aria-pressed="${i === 0 ? 'true' : 'false'}"
      style="--py-level:${e.py}"
      title="${e.year} · ${escapeHtml(t.pyLabel ?? '')} ${e.py}">
      <span class="timeline-node-bar"><span class="timeline-node-fill"></span></span>
      <span class="timeline-node-py">${e.py}</span>
      <span class="timeline-node-year">${String(e.year).slice(2)}</span>
      ${e.milestones.length ? '<span class="timeline-node-dot" aria-hidden="true"></span>' : ''}
    </button>
  `).join('');

  const head = heading
    ? `<div class="modal-section-title">${escapeHtml(t.title ?? '')}</div>
       <p class="modal-intro">${escapeHtml(t.intro ?? '')}</p>`
    : `<p class="modal-intro">${escapeHtml(t.intro ?? '')}</p>`;

  return `
    <div class="timeline-section" data-timeline>
      ${head}
      <div class="timeline-track" role="group">${nodes}</div>
      <div class="timeline-detail" data-timeline-detail>${timelineDetailHtml(activeTimeline[0])}</div>
    </div>
  `;
}

function renderAllFreeHighlights() {
  const u = getUI();
  const { ALL_FREE_HIGHLIGHTS } = getContent();
  if (!ALL_FREE_HIGHLIGHTS?.length) return '';

  return `
    <div class="free-includes free-includes-deep">
      <h3 class="free-includes-title">${escapeHtml(u.premiumShowcase.allFreeTitle)}</h3>
      <div class="free-includes-grid">
        ${ALL_FREE_HIGHLIGHTS.map(f => `
          <article class="free-include-card">
            <span class="free-include-mark" aria-hidden="true">${f.icon}</span>
            <h4>${escapeHtml(f.title)}</h4>
            <p>${escapeHtml(f.desc)}</p>
          </article>
        `).join('')}
      </div>
      <p class="premium-showcase-note">${escapeHtml(u.premiumShowcase.allFreeNote)}</p>
    </div>
  `;
}

function renderModalBody(d, cardKey, ctx) {
  const u = getUI();
  const freeSection = d.free.length
    ? `
    <div class="modal-section">
      <div class="modal-section-title">${u.modal.deepRead}</div>
      <p class="modal-intro">${d.intro}</p>
      <div class="detail-list">
        ${d.free.map(item => `
          <div class="detail-item">
            <div class="detail-title">${escapeHtml(item.t)}</div>
            <div class="detail-text">${item.d}</div>
          </div>
        `).join('')}
      </div>
    </div>`
    : `<p class="modal-intro">${d.intro}</p>`;

  const timelineSection =
    ctx && TIMELINE_CARDS.has(cardKey) ? renderTimeline(ctx) : '';

  const extendedSection =
    ctx ? renderExtendedWidget(cardKey, ctx) : '';

  return `
    <div class="modal-system" id="modal-heading">${escapeHtml(d.title)}</div>
    <div class="modal-value">${escapeHtml(String(d.value))}</div>
    <div class="modal-label">${escapeHtml(d.label)}</div>
    ${freeSection}
    ${timelineSection}
    ${extendedSection}
    ${renderMasterReading(d, cardKey, ctx)}
  `;
}

/** モーダル内のインタラクティブ要素（タイムライン・マスターリーディング・拡張）を配線。 */
function bindModalInteractions(root, cardKey) {
  // 10年タイムライン：年ノードのクリックで詳細を更新
  const track = root.querySelector('.timeline-track');
  const detail = root.querySelector('[data-timeline-detail]');
  if (track && detail) {
    track.addEventListener('click', e => {
      const node = e.target.closest('.timeline-node');
      if (!node) return;
      const idx = Number(node.dataset.tlIndex);
      const entry = activeTimeline[idx];
      if (!entry) return;
      track.querySelectorAll('.timeline-node').forEach(n => {
        const on = n === node;
        n.classList.toggle('selected', on);
        n.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      detail.innerHTML = timelineDetailHtml(entry);
    });
  }

  // マスターリーディング：チャプターの開閉
  root.querySelectorAll('.master-chapter-head').forEach(head => {
    head.addEventListener('click', () => {
      const chapter = head.closest('.master-chapter');
      const bodyEl = chapter.querySelector('.master-chapter-body');
      const open = head.getAttribute('aria-expanded') === 'true';
      head.setAttribute('aria-expanded', open ? 'false' : 'true');
      chapter.classList.toggle('open', !open);
      if (bodyEl) bodyEl.hidden = open;
    });
  });

  // すべて開く / すべて閉じる
  const toggleAll = root.querySelector('[data-master-toggle]');
  if (toggleAll) {
    toggleAll.addEventListener('click', () => {
      const u = getUI();
      const m = u.master ?? {};
      const opening = toggleAll.dataset.masterToggle === 'open';
      root.querySelectorAll('.master-chapter').forEach(chapter => {
        const head = chapter.querySelector('.master-chapter-head');
        const bodyEl = chapter.querySelector('.master-chapter-body');
        head?.setAttribute('aria-expanded', opening ? 'true' : 'false');
        chapter.classList.toggle('open', opening);
        if (bodyEl) bodyEl.hidden = !opening;
      });
      toggleAll.dataset.masterToggle = opening ? 'close' : 'open';
      toggleAll.textContent = opening
        ? (m.collapseAll ?? 'Close all')
        : (m.expandAll ?? 'Open all');
    });
  }

  if (cardKey && currentContext) {
    bindExtendedReading(root, cardKey, currentContext);
    bindDeepChapters(root, cardKey, currentContext);
  }
  bindTermGloss(root);
}

export function renderPremiumShowcase() {
  const el = document.getElementById('premium-showcase');
  if (!el) return;

  const u = getUI();
  const { PRODUCT_PHILOSOPHY, FREE_INCLUDES } = getContent();
  const phil = PRODUCT_PHILOSOPHY;

  el.innerHTML = `
    <div class="premium-showcase-inner">
      <header class="plan-philosophy">
        <span class="free-badge">${phil.freeBadge}</span>
        <h2 class="plan-philosophy-title">${phil.freeHeadline}</h2>
        <p class="plan-philosophy-lead">${phil.freeLead}</p>
      </header>

      <div class="free-includes">
        <h3 class="free-includes-title">${u.premiumShowcase.freeIncludesTitle}</h3>
        <div class="free-includes-grid">
          ${FREE_INCLUDES.map(f => `
            <article class="free-include-card">
              <span class="free-include-mark" aria-hidden="true">${f.icon}</span>
              <h4>${escapeHtml(f.title)}</h4>
              <p>${escapeHtml(f.desc)}</p>
            </article>
          `).join('')}
        </div>
      </div>

      ${renderAllFreeHighlights()}
    </div>
  `;
}

export function bindModalEvents() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
  });
}

export function bindPremiumToggle() {
  /* 全機能無料解放のためトグル不要 */
}

export function bindForm() {
  document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const bd = document.getElementById('birthdate').value;
    if (!name || !bd) return;
    const [y, m, d] = bd.split('-').map(Number);
    if (!y || !m || !d) return;
    render(name, romanNameFromForm(), y, m, d);
  });
}
