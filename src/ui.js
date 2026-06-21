/**
 * UI レンダリング層。
 * 文言は getUI() / getContent()、深掘りは getDeeper() 経由。
 */

import {
  lifePath, personalYear, expressionProfile, sunSign, moonTrait,
  chineseZodiac, sixtyJikkan, kyuseiHonmei, gogyou, animalUranai,
  mayaKin, tarotBirthCard, dailyTarot, celticTree,
  birthstone, birthflower, biorhythm, moonPhaseToday, lifeStage
} from './calculations.js';

import { getContent, getUI, getDeeper, isJapaneseLocale } from './i18n/index.js';
import { mountSharePanel } from './share.js';
import { bindLoveMode } from './love-ui.js';
import { bindCompatMode } from './compat-ui.js';
import {
  escapeHtml, localDateInputMax, prefersReducedMotion
} from './util.js';

let currentContext = null;
let modalTrigger = null;
let lastRender = null;

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
  `;
}

export function card(key, system, value, label, desc) {
  const u = getUI();
  const safeValue = String(value).replace(/"/g, '');
  const aria = u.fmt.cardAria(system, safeValue);
  return `
    <div class="card" data-key="${key}" role="button" tabindex="0" aria-label="${escapeHtml(aria)}${u.fmt.cardMoreAria}">
      <div class="card-system">${system}</div>
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
    const open = () => openModal(el.dataset.key);
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
}

function sectionHeading(title, en) {
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
      ${card('sixty', u.cards.sixty, sj.name, `${sj.yinyang}${sj.element}`, u.fmt.sixtyDesc(sj.element))}
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
        <div class="card-system">${u.fmt.biorhythmDays(bio.days)}</div>
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
            <div class="card-system">${u.cards.moonTonight}</div>
            <div class="card-value">${mp.name}</div>
            <div class="card-desc">${u.fmt.moonPhasePct((mp.phase * 100).toFixed(1))}</div>
          </div>
        </div>
        <div class="card-more">${u.fmt.cardMore}</div>
      </div>
    </div>

    ${sectionHeading(...u.sections.lifeMap)}
    <div class="grid">
      ${ls.prev ? card('lifeStagePrev', u.cards.lifeStagePrev, u.fmt.ageYears(ls.prev.age), ls.prev.name, ls.prev.desc) : ''}
      ${ls.next ? card('lifeStageNext', u.cards.lifeStageNext, u.fmt.ageYears(ls.next.age), ls.next.name, ls.next.desc) : ''}
    </div>
  `;

  const r = document.getElementById('results');
  r.innerHTML = html;
  r.classList.add('active');
  bindResultCards(r);
  mountSharePanel(currentContext).catch(err => console.error('Share panel:', err));
  bindLoveMode();
  bindCompatMode();

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
  const data = getDeeper().buildDeep(cardKey, currentContext);
  if (!data) return;
  const modal = document.getElementById('modal');
  modal.dataset.cardKey = cardKey;
  document.getElementById('modal-body').innerHTML = renderModalBody(data);
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

function renderPremiumComingSoonBlock(variant = 'modal') {
  const cs = getContent().PREMIUM_COMING_SOON;
  const teasers = cs.teasers?.length && variant === 'showcase'
    ? `<ul class="premium-teaser-list">${cs.teasers.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>`
    : '';

  const headline = variant === 'modal' ? cs.modalHeadline : cs.headline;
  const lead = variant === 'modal' ? cs.modalLead : cs.lead;

  const paymentUrl = cs.paymentLinkUrl?.trim();
  const paymentBlock = paymentUrl
    ? `<a class="cta-button premium-payment-cta" href="${escapeHtml(paymentUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(cs.paymentCta)}</a>
       <p class="premium-payment-note">${escapeHtml(cs.paymentNote)}</p>`
    : '';

  return `
    <div class="premium-section premium-section--soon">
      <div class="premium-badge">${escapeHtml(cs.badge)}</div>
      <div class="premium-coming-soon-body">
        <p class="premium-pitch">${escapeHtml(headline)}</p>
        <p class="premium-sub">${escapeHtml(lead)}</p>
        ${teasers}
        ${paymentBlock}
      </div>
    </div>
  `;
}

function renderModalBody(d) {
  const u = getUI();
  const freeSection = d.free.length
    ? `
    <div class="modal-section">
      <div class="modal-section-title">${u.modal.deepRead}</div>
      <p class="modal-intro">${d.intro}</p>
      <div class="detail-list">
        ${d.free.map(item => `
          <div class="detail-item">
            <div class="detail-title">${item.t}</div>
            <div class="detail-text">${item.d}</div>
          </div>
        `).join('')}
      </div>
    </div>`
    : `<p class="modal-intro">${d.intro}</p>`;

  return `
    <div class="modal-system" id="modal-heading">${d.title}</div>
    <div class="modal-value">${d.value}</div>
    <div class="modal-label">${d.label}</div>
    ${freeSection}
    ${renderPremiumComingSoonBlock('modal')}
  `;
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

      ${renderPremiumComingSoonBlock('showcase')}
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
  /* Premium デモトグルは公開前のため無効 */
}

export function bindForm() {
  document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const bd = document.getElementById('birthdate').value;
    if (!name || !bd) return;
    const [y, m, d] = bd.split('-').map(Number);
    render(name, romanNameFromForm(), y, m, d);
  });

  document.getElementById('birthdate').max = localDateInputMax();
}
