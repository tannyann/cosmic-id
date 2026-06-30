/**
 * 30日統合サイクルプランナー — 個人月・月相・バイオ・九星日盤。
 * 計算: calculations.js、文言: getUI().cyclesPlanner
 */
import { cyclesDayPlan } from './calculations.js';
import { getBundle, getContent, getUI, getLocale } from './i18n/index.js';

function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));
}

function formatDay(date) {
  const { htmlLang } = getBundle().meta;
  return new Intl.DateTimeFormat(htmlLang, {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

function dominantBio(row) {
  const waves = [
    ['physical', row.physical],
    ['emotional', row.emotional],
    ['intellectual', row.intellectual],
    ['intuitive', row.intuitive]
  ];
  waves.sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
  return { key: waves[0][0], value: waves[0][1] };
}

function dayDetailHtml(row, u, meanings, kyusei) {
  const dom = dominantBio(row);
  const bioLabel = u.bioLabels[dom.key] ?? dom.key;
  const bioState = row.critical
    ? u.bioCross
    : dom.value > 0.65
      ? u.bioPeak
      : dom.value < -0.65
        ? u.bioLow
        : u.bioMid;

  const lunar = row.lunar === 'new'
    ? u.lunarNew
    : row.lunar === 'full'
      ? u.lunarFull
      : '';

  const ks = kyusei[row.ksIdx];

  return `
    <p class="cycles-detail-date">
      <strong>${esc(formatDay(row.date))}</strong>
      ${row.isToday ? `<span class="timeline-detail-now">${esc(u.today)}</span>` : ''}
    </p>
    <div class="cycles-detail-grid">
      <div class="cycles-detail-item">
        <span class="cycles-detail-label">${esc(u.personalYearLabel)}</span>
        <span class="cycles-detail-value">${row.py}</span>
        <p>${esc(meanings[row.py] ?? '')}</p>
      </div>
      <div class="cycles-detail-item">
        <span class="cycles-detail-label">${esc(u.personalMonthLabel)}</span>
        <span class="cycles-detail-value">${row.pm}</span>
        <p>${esc(meanings[row.pm] ?? '')}</p>
      </div>
      <div class="cycles-detail-item">
        <span class="cycles-detail-label">${esc(u.moonLabel)}</span>
        <span class="cycles-detail-value">${esc(row.moonName)}</span>
        ${lunar ? `<p class="cycles-lunar-tag">${esc(lunar)}</p>` : ''}
      </div>
      <div class="cycles-detail-item">
        <span class="cycles-detail-label">${esc(u.bioLabel)}</span>
        <span class="cycles-detail-value">${esc(bioLabel)} · ${esc(bioState)}</span>
        <p>${esc(u.bioHint(dom.key, dom.value))}</p>
      </div>
      <div class="cycles-detail-item">
        <span class="cycles-detail-label">${esc(u.kyuseiDayLabel)}</span>
        <span class="cycles-detail-value">${esc(ks?.name ?? '')}</span>
        <p>${esc(ks?.desc ?? '')}</p>
      </div>
    </div>`;
}

export function renderCyclesPlanner(ctx) {
  const u = getUI().cyclesPlanner;
  if (!u) return '';
  const { PERSONAL_YEAR_MEANINGS, KYUSEI_STARS } = getContent();
  const rows = cyclesDayPlan(ctx.y, ctx.m, ctx.d, 30);
  const first = rows.find(r => r.isToday) ?? rows[0];

  const chips = rows.map((row, i) => {
    const tags = [
      row.isToday ? 'is-today' : '',
      row.lunar ? `is-lunar-${row.lunar}` : '',
      row.critical ? 'is-critical' : ''
    ].filter(Boolean).join(' ');
    const dom = dominantBio(row);
    const h = ((Math.abs(dom.value) + 1) / 2 * 100).toFixed(0);
    return `
      <button type="button" class="cycles-day${tags ? ` ${tags}` : ''}${i === 0 ? ' selected' : ''}"
        data-cycles-i="${i}" aria-pressed="${i === 0 ? 'true' : 'false'}">
        <span class="cycles-day-dow">${esc(new Intl.DateTimeFormat(getBundle().meta.htmlLang, { weekday: 'narrow' }).format(row.date))}</span>
        <span class="cycles-day-num">${row.day}</span>
        <span class="cycles-day-pm">${row.pm}</span>
        <span class="cycles-day-bar" style="--h:${h}%"></span>
        ${row.lunar ? `<span class="cycles-day-moon" aria-hidden="true">${row.lunar === 'new' ? '☽' : '◉'}</span>` : ''}
      </button>`;
  }).join('');

  return `
    <section class="cycles-planner" id="cycles-planner" aria-labelledby="cycles-planner-title">
      <h2 class="section-title" id="cycles-planner-title">${esc(u.title)}${
        getLocale() === 'en' ? `<span class="section-en">${esc(u.titleEn)}</span>` : ''
      }</h2>
      <p class="cycles-planner-intro">${esc(u.intro)}</p>
      <p class="cycles-planner-hint">${esc(u.tapHint)}</p>
      <div class="cycles-strip" role="group" aria-label="${esc(u.stripAria)}">${chips}</div>
      <div class="cycles-detail" id="cycles-detail">${dayDetailHtml(first, u, PERSONAL_YEAR_MEANINGS, KYUSEI_STARS)}</div>
    </section>`;
}

export function bindCyclesPlanner(root, ctx) {
  if (!root || !ctx) return;
  const section = root.querySelector('#cycles-planner');
  if (!section) return;

  const u = getUI().cyclesPlanner;
  const { PERSONAL_YEAR_MEANINGS, KYUSEI_STARS } = getContent();
  const rows = cyclesDayPlan(ctx.y, ctx.m, ctx.d, 30);
  const detail = section.querySelector('#cycles-detail');

  section.querySelectorAll('[data-cycles-i]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.cyclesI);
      section.querySelectorAll('[data-cycles-i]').forEach(b => {
        const on = b === btn;
        b.classList.toggle('selected', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      if (detail && rows[i]) {
        detail.innerHTML = dayDetailHtml(rows[i], u, PERSONAL_YEAR_MEANINGS, KYUSEI_STARS);
      }
    });
  });
}
