/**
 * 深層チャプター（旧 premium 配列）のインタラクティブ本文。
 * 文言: getUI().deep / getContent()、計算: calculations.js
 */
import {
  personalYearMonthCalendar, kyuseiCycleYear, normalizeElementKey, luckyCompass
} from './calculations.js';
import { getContent, getUI, getBundle } from './i18n/index.js';

function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));
}

function monthLabel(year, month) {
  const { htmlLang } = getBundle().meta;
  return new Intl.DateTimeFormat(htmlLang, { month: 'short' }).format(new Date(year, month - 1, 1));
}

/** 深層チャプター本文 HTML（インタラクティブ or 静的フォールバック） */
export function renderDeepChapterBody(cardKey, ctx, item, index) {
  const interactive = renderInteractiveChapter(cardKey, ctx, index);
  if (interactive) {
    return `<div class="deep-chapter-interactive" data-deep-card="${esc(cardKey)}" data-deep-idx="${index}">
      <p class="deep-chapter-lead">${esc(item.d)}</p>
      ${interactive}
    </div>`;
  }
  return `<div class="deep-chapter-static" data-deep-card="${esc(cardKey)}" data-deep-idx="${index}">
    <p>${esc(item.d)}</p>
    ${renderReflectionPrompts(cardKey, index)}
  </div>`;
}

function renderReflectionPrompts(cardKey, index) {
  const d = getUI().deep?.prompts;
  if (!d) return '';
  const prompts = d.forChapter(cardKey, index);
  if (!prompts?.length) return '';
  return `
    <div class="deep-prompts">
      ${prompts.map((p, i) => `
        <button type="button" class="deep-prompt" data-deep-prompt="${i}"
                aria-expanded="false">${esc(p.q)}</button>
        <div class="deep-prompt-answer" hidden>${esc(p.a)}</div>
      `).join('')}
    </div>`;
}

function renderInteractiveChapter(cardKey, ctx, index) {
  switch (cardKey) {
    case 'personalYear':
      if (index === 0) return renderPyMonthCalendar(ctx);
      if (index === 1) return renderPyKeywords(ctx);
      if (index === 2) return renderPyEncounters(ctx);
      if (index === 3) return renderPyWatchMonths(ctx);
      break;
    case 'lifepath':
      if (index === 0) return renderLpYearWave(ctx);
      if (index === 1) return renderLpCompat(ctx);
      if (index === 2) return renderLpCareer(ctx);
      if (index === 3) return renderLpSoul(ctx);
      if (index === 4) return renderLpFigures(ctx);
      break;
    case 'sun':
      if (index === 0) return renderSunElement(ctx);
      break;
    case 'kyusei':
      if (index === 0) return renderKyuseiCycle(ctx);
      break;
    case 'tarotBirth':
      if (index === 0) return renderTarotDual(ctx);
      break;
    case 'moon':
      if (index === 0) return renderScrollToWidget('moon-calendar', getUI().deep.scrollMoon);
      break;
    case 'biorhythm':
      if (index === 0) return renderScrollToWidget('bio-forecast', getUI().deep.scrollBio);
      break;
    default:
      break;
  }
  return null;
}

function renderScrollToWidget(selectorClass, label) {
  return `<button type="button" class="deep-scroll-btn" data-deep-scroll=".${selectorClass}">${esc(label)}</button>`;
}

/* --- personalYear --- */
function renderPyMonthCalendar(ctx) {
  const d = getUI().deep.personalYear;
  const { PERSONAL_YEAR_MEANINGS } = getContent();
  const months = personalYearMonthCalendar(ctx.py, ctx.currentYear);

  const cells = months.map((row, i) => {
    const tags = [
      row.isCurrent ? 'is-now' : '',
      row.isAction ? 'is-action' : '',
      row.isWait ? 'is-wait' : '',
      row.isWatch ? 'is-watch' : ''
    ].filter(Boolean).join(' ');
    return `
      <button type="button" class="py-month-cell ${tags}" data-py-month="${i}"
              aria-pressed="false">
        <span class="py-month-name">${esc(monthLabel(row.year, row.month))}</span>
        <span class="py-month-num">${row.personalMonth}</span>
      </button>`;
  }).join('');

  const first = months.find(m => m.isCurrent) || months[0];
  return `
    <div class="py-month-grid" role="group">${cells}</div>
    <div class="py-month-detail" id="py-month-detail">${pyMonthDetail(first, PERSONAL_YEAR_MEANINGS, d)}</div>
  `;
}

function pyMonthDetail(row, meanings, d) {
  const meaning = meanings[row.personalMonth] ?? '';
  const tag = row.isWatch ? d.tagWatch : row.isAction ? d.tagAction : row.isWait ? d.tagWait : '';
  return `
    <p class="py-month-detail-head">
      <strong>${esc(monthLabel(row.year, row.month))}</strong>
      ${tag ? `<span class="py-month-tag">${esc(tag)}</span>` : ''}
      ${row.isCurrent ? `<span class="timeline-detail-now">${esc(d.thisMonth)}</span>` : ''}
    </p>
    <p><strong>${esc(d.personalMonth(row.personalMonth))}</strong> ${esc(meaning)}</p>
  `;
}

function renderPyKeywords(ctx) {
  const d = getUI().deep.personalYear;
  const words = d.keywords(ctx.py, ctx.lp);
  return `<div class="deep-keyword-row">${words.map(w =>
    `<span class="deep-keyword">${esc(w)}</span>`
  ).join('')}</div>`;
}

function renderPyEncounters(ctx) {
  const d = getUI().deep.personalYear;
  const el = normalizeElementKey(ctx.sun.element);
  const cards = d.encounters(ctx.py, el);
  return `<div class="deep-encounter-grid">${cards.map((c, i) => `
    <button type="button" class="deep-encounter-card" data-encounter="${i}" aria-expanded="false">
      <span class="deep-encounter-type">${esc(c.type)}</span>
      <span class="deep-encounter-hint">${esc(c.hint)}</span>
    </button>
    <div class="deep-encounter-body" hidden>${esc(c.detail)}</div>
  `).join('')}</div>`;
}

function renderPyWatchMonths(ctx) {
  const d = getUI().deep.personalYear;
  const { PERSONAL_YEAR_MEANINGS } = getContent();
  const months = personalYearMonthCalendar(ctx.py, ctx.currentYear).filter(m => m.isWatch);
  if (!months.length) return `<p>${esc(d.noWatch)}</p>`;
  return `
    <ul class="deep-watch-list">
      ${months.map(m => `
        <li>
          <strong>${esc(monthLabel(m.year, m.month))}</strong> · ${esc(d.personalMonth(m.personalMonth))}
          <br><span>${esc(PERSONAL_YEAR_MEANINGS[m.personalMonth])}</span>
          <br><em>${esc(d.ritualHint)}</em>
        </li>
      `).join('')}
    </ul>`;
}

/* --- lifepath --- */
function renderLpYearWave(ctx) {
  const d = getUI().deep.lifepath;
  const { PERSONAL_YEAR_MEANINGS } = getContent();
  return `
    <p>${esc(d.yearWave(ctx.lp, ctx.py, PERSONAL_YEAR_MEANINGS[ctx.py]))}</p>
    <p class="deep-hint">${esc(d.yearWaveHint)}</p>`;
}

function renderLpCompat(ctx) {
  const d = getUI().deep.lifepath;
  const bands = d.compatBands(ctx.lp);
  return `<div class="deep-compat-grid">${bands.map(b => `
    <div class="deep-compat-card deep-compat-${b.kind}">
      <span class="deep-compat-label">${esc(b.label)}</span>
      <p>${esc(b.text)}</p>
    </div>
  `).join('')}</div>`;
}

function renderLpCareer(ctx) {
  const d = getUI().deep.lifepath;
  const pillars = d.careerPillars(ctx.lp);
  return `
    <div class="deep-pillar-tabs" role="tablist">
      ${pillars.map((p, i) => `
        <button type="button" class="deep-pillar-tab${i === 0 ? ' active' : ''}"
                data-lp-pillar="${i}" aria-pressed="${i === 0}">${esc(p.title)}</button>
      `).join('')}
    </div>
    <div class="deep-pillar-body" id="lp-pillar-body">${esc(pillars[0].text)}</div>`;
}

function renderLpSoul(ctx) {
  const d = getUI().deep.lifepath;
  return `<div class="deep-prompts">
    ${d.soulPrompts(ctx.lp).map((p, i) => `
      <button type="button" class="deep-prompt" data-deep-prompt="${i}" aria-expanded="false">${esc(p.q)}</button>
      <div class="deep-prompt-answer" hidden>${esc(p.a)}</div>
    `).join('')}
  </div>`;
}

function renderLpFigures(ctx) {
  const d = getUI().deep.lifepath;
  const figures = d.figures(ctx.lp);
  return `<ul class="deep-figures">${figures.map(f =>
    `<li><strong>${esc(f.name)}</strong> — ${esc(f.note)}</li>`
  ).join('')}</ul>`;
}

/* --- sun / kyusei / tarot --- */
function renderSunElement(ctx) {
  const d = getUI().deep.sun;
  const el = normalizeElementKey(ctx.sun.element);
  const info = d.elementMap[el] || d.elementMap.earth;
  return `
    <div class="deep-element-card">
      <span class="deep-element-dir">${esc(info.direction)}</span>
      <p>${esc(info.season)}</p>
      <p class="deep-hint">${esc(info.ritual)}</p>
    </div>`;
}

function renderKyuseiCycle(ctx) {
  const d = getUI().deep.kyusei;
  const pos = kyuseiCycleYear(ctx.y, ctx.currentYear);
  const nodes = Array.from({ length: 9 }, (_, i) => {
    const n = i + 1;
    const cls = n === pos ? 'is-now' : '';
    return `<button type="button" class="kyusei-cycle-node ${cls}" data-ky-node="${n}"
            aria-pressed="${n === pos}">${n}</button>`;
  }).join('');
  return `
    <div class="kyusei-cycle-track" role="group">${nodes}</div>
    <div class="kyusei-cycle-detail" id="kyusei-cycle-detail">${esc(d.cyclePhase(pos))}</div>`;
}

function renderTarotDual(ctx) {
  const d = getUI().deep.tarot;
  const name = ctx.tb.name;
  return `
    <div class="tarot-dual-tabs">
      <button type="button" class="tarot-dual-tab active" data-tarot-side="light" aria-pressed="true">${esc(d.light)}</button>
      <button type="button" class="tarot-dual-tab" data-tarot-side="shadow" aria-pressed="false">${esc(d.shadow)}</button>
    </div>
    <div class="tarot-dual-body" id="tarot-dual-body">${esc(d.lightText(name))}</div>`;
}

/* --- イベント配線 --- */
export function bindDeepChapters(root, cardKey, ctx) {
  if (!root || !ctx) return;

  root.querySelectorAll('[data-deep-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sel = btn.dataset.deepScroll;
      root.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  root.querySelectorAll('.deep-prompt').forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = btn.nextElementSibling;
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (ans?.classList.contains('deep-prompt-answer')) ans.hidden = open;
    });
  });

  if (cardKey === 'personalYear') {
    const { PERSONAL_YEAR_MEANINGS } = getContent();
    const d = getUI().deep.personalYear;
    const months = personalYearMonthCalendar(ctx.py, ctx.currentYear);
    const detail = root.querySelector('#py-month-detail');
    root.querySelectorAll('[data-py-month]').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.pyMonth);
        root.querySelectorAll('[data-py-month]').forEach(b => {
          b.classList.remove('selected');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('selected');
        btn.setAttribute('aria-pressed', 'true');
        if (detail) detail.innerHTML = pyMonthDetail(months[i], PERSONAL_YEAR_MEANINGS, d);
      });
    });
    root.querySelector('.py-month-cell.is-now')?.classList.add('selected');

    root.querySelectorAll('[data-encounter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        if (body) body.hidden = open;
      });
    });
  }

  if (cardKey === 'lifepath') {
    const pillars = getUI().deep.lifepath.careerPillars(ctx.lp);
    const body = root.querySelector('#lp-pillar-body');
    root.querySelectorAll('[data-lp-pillar]').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.lpPillar);
        root.querySelectorAll('[data-lp-pillar]').forEach(t => {
          t.classList.toggle('active', t === btn);
          t.setAttribute('aria-pressed', t === btn ? 'true' : 'false');
        });
        if (body) body.textContent = pillars[i]?.text ?? '';
      });
    });
  }

  if (cardKey === 'kyusei') {
    const d = getUI().deep.kyusei;
    const detail = root.querySelector('#kyusei-cycle-detail');
    root.querySelectorAll('[data-ky-node]').forEach(btn => {
      btn.addEventListener('click', () => {
        const n = Number(btn.dataset.kyNode);
        root.querySelectorAll('[data-ky-node]').forEach(b => {
          b.classList.toggle('is-now', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        if (detail) detail.textContent = d.cyclePhase(n);
      });
    });
  }

  if (cardKey === 'tarotBirth') {
    const d = getUI().deep.tarot;
    const body = root.querySelector('#tarot-dual-body');
    root.querySelectorAll('[data-tarot-side]').forEach(btn => {
      btn.addEventListener('click', () => {
        const side = btn.dataset.tarotSide;
        root.querySelectorAll('[data-tarot-side]').forEach(t => {
          t.classList.toggle('active', t === btn);
          t.setAttribute('aria-pressed', t === btn ? 'true' : 'false');
        });
        if (body) {
          body.textContent = side === 'light' ? d.lightText(ctx.tb.name) : d.shadowText(ctx.tb.name);
        }
      });
    });
  }
}
