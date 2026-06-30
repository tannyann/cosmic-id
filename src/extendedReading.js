/**
 * 拡張リーディング UI — 月カレンダー・バイオリズム予測・統合マスターリーディング。
 * 計算は calculations.js、文言は getUI().extended / getContent()。
 */
import {
  lunarEventsAhead, birthMoonPhaseIndex, biorhythmForecast, luckyCompass
} from './calculations.js';
import { getBundle, getContent, getUI } from './i18n/index.js';
import { renderExtendedSection, bindCardInteractives } from './cardInteractives.js';

function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));
}

function formatDate(date) {
  const { htmlLang } = getBundle().meta;
  return new Intl.DateTimeFormat(htmlLang, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function formatMonthYear(year, month) {
  const { htmlLang } = getBundle().meta;
  return new Intl.DateTimeFormat(htmlLang, {
    month: 'long',
    year: 'numeric'
  }).format(new Date(year, month - 1, 1));
}

function groupLunarMonths(events) {
  const map = new Map();
  for (const e of events) {
    const key = `${e.date.getFullYear()}-${e.date.getMonth()}`;
    if (!map.has(key)) {
      map.set(key, {
        year: e.date.getFullYear(),
        month: e.date.getMonth() + 1,
        newMoon: null,
        fullMoon: null
      });
    }
    const row = map.get(key);
    if (e.type === 'new') row.newMoon = e;
    else row.fullMoon = e;
  }
  return Array.from(map.values()).slice(0, 12);
}

/* ============================================================
 * 月カレンダー（12ヶ月）
 * ============================================================ */
export function renderMoonCalendar(ctx) {
  const u = getUI().extended.moon;
  const birthIdx = birthMoonPhaseIndex(ctx.y, ctx.m, ctx.d);
  const events = lunarEventsAhead(new Date(), 400);
  const months = groupLunarMonths(events);

  const rows = months.map((row, i) => {
    const newRes = row.newMoon && birthIdx === 0;
    const fullRes = row.fullMoon && birthIdx === 2;
    const resonant = newRes || fullRes;

    const newCell = row.newMoon
      ? `<button type="button" class="moon-cal-event${newRes ? ' is-resonant' : ''}"
           data-moon-row="${i}" data-moon-type="new" aria-pressed="false">
           <span class="moon-cal-type">${esc(u.newMoon)}</span>
           <span class="moon-cal-date">${esc(formatDate(row.newMoon.date))}</span>
         </button>`
      : `<span class="moon-cal-empty">—</span>`;

    const fullCell = row.fullMoon
      ? `<button type="button" class="moon-cal-event${fullRes ? ' is-resonant' : ''}"
           data-moon-row="${i}" data-moon-type="full" aria-pressed="false">
           <span class="moon-cal-type">${esc(u.fullMoon)}</span>
           <span class="moon-cal-date">${esc(formatDate(row.fullMoon.date))}</span>
         </button>`
      : `<span class="moon-cal-empty">—</span>`;

    return `
      <div class="moon-cal-row${resonant ? ' has-resonance' : ''}" data-moon-row-wrap="${i}">
        <div class="moon-cal-month">${esc(formatMonthYear(row.year, row.month))}</div>
        <div class="moon-cal-events">${newCell}${fullCell}</div>
      </div>`;
  }).join('');

  return `
    <div class="extended-section moon-calendar" data-extended="moon">
      <div class="modal-section-title">${esc(u.title)}</div>
      <p class="modal-intro">${esc(u.intro)}</p>
      <p class="extended-hint">${esc(u.tapHint)}</p>
      <div class="moon-cal-list">${rows}</div>
      <div class="moon-cal-detail" id="moon-cal-detail" hidden></div>
    </div>
  `;
}

function moonDetailHtml(type, date, birthIdx) {
  const u = getUI().extended.moon;
  const resonant = (type === 'new' && birthIdx === 0) || (type === 'full' && birthIdx === 2);
  const ritual = type === 'new' ? u.ritualNew : u.ritualFull;
  const resonance = resonant ? `<p class="moon-cal-resonance">${esc(u.resonance)}</p>` : '';

  return `
    <p class="moon-cal-detail-date">${esc(formatDate(date))} · ${esc(type === 'new' ? u.newMoon : u.fullMoon)}</p>
    ${resonance}
    <p class="moon-cal-detail-text">${esc(ritual)}</p>
  `;
}

/* ============================================================
 * バイオリズム 90日予測
 * ============================================================ */
const BIO_WAVES = ['physical', 'emotional', 'intellectual', 'intuitive'];

export function renderBiorhythmForecast(ctx) {
  const u = getUI().extended.biorhythm;
  const rows = biorhythmForecast(ctx.y, ctx.m, ctx.d, 90);
  const tabs = BIO_WAVES.map((w, i) => `
    <button type="button" class="bio-tab${i === 1 ? ' active' : ''}" data-bio-wave="${w}"
            aria-pressed="${i === 1 ? 'true' : 'false'}">${esc(u.waves[w])}</button>
  `).join('');

  const days = rows.map((r, i) => {
    const h = Math.abs(r.emotional);
    return `
      <button type="button" class="bio-day${r.isToday ? ' is-today' : ''}${r.critical ? ' is-critical' : ''}"
              data-bio-i="${i}" style="--h:${(h * 100).toFixed(0)}%"
              aria-label="${esc(formatDate(r.date))}">
        <span class="bio-day-bar"></span>
        ${r.critical ? '<span class="bio-day-dot" aria-hidden="true"></span>' : ''}
      </button>`;
  }).join('');

  const first = rows[1] || rows[0];
  return `
    <div class="extended-section bio-forecast" data-extended="biorhythm">
      <div class="modal-section-title">${esc(u.title)}</div>
      <p class="modal-intro">${esc(u.intro)}</p>
      <div class="bio-tabs" role="tablist">${tabs}</div>
      <div class="bio-track" role="group">${days}</div>
      <p class="extended-hint">${esc(u.legend)}</p>
      <div class="bio-detail" id="bio-detail">${bioDetailHtml(first, 'emotional')}</div>
    </div>
  `;
}

function bioDetailHtml(row, wave) {
  const u = getUI().extended.biorhythm;
  const val = row[wave];
  const pct = (val * 100).toFixed(0);
  const sign = val >= 0 ? '+' : '';
  const phase = val > 0.3 ? u.rising : val < -0.3 ? u.falling : u.neutral;
  const crit = row.critical ? `<span class="bio-detail-critical">${esc(u.critical)}</span>` : '';

  return `
    <div class="bio-detail-head">
      <span class="bio-detail-date">${esc(formatDate(new Date(row.y, row.mo - 1, row.day)))}</span>
      ${row.isToday ? `<span class="timeline-detail-now">${esc(u.today)}</span>` : ''}
      ${crit}
    </div>
    <p><strong>${esc(u.waves[wave])}</strong> ${sign}${pct}% · ${esc(phase)}</p>
    <p class="bio-detail-hint">${esc(u.actionHint(val))}</p>
  `;
}

/* ============================================================
 * 統合マスターリーディング
 * ============================================================ */
export function buildUnifiedChapters(ctx) {
  const u = getUI().extended.unified;
  const {
    LIFE_PATH_MEANINGS, PERSONAL_YEAR_MEANINGS, EXPRESSION_MEANINGS
  } = getContent();
  const lp = LIFE_PATH_MEANINGS[ctx.lp];
  const py = PERSONAL_YEAR_MEANINGS[ctx.py];
  const lucky = luckyCompass(ctx.lp, ctx.sun.element, ctx.ks.element, ctx.gy.element);

  return [
    {
      id: 'essence',
      title: u.chapterEssence,
      body: u.essenceBody(ctx.name, lp?.label ?? '', ctx.sun.name, ctx.cz.name, ctx.ks.name, lp?.desc ?? '')
    },
    {
      id: 'year',
      title: u.chapterYear,
      body: u.yearBody(ctx.currentYear, ctx.py, py)
    },
    {
      id: 'love',
      title: u.chapterLove,
      body: u.loveBody(ctx.sun.element, ctx.an.name, ctx.lp)
    },
    {
      id: 'work',
      title: u.chapterWork,
      body: u.workBody(lp?.label ?? '', ctx.gy.element, ctx.expr?.latin ?? ctx.en)
    },
    {
      id: 'shadow',
      title: u.chapterShadow,
      body: u.shadowBody(ctx.lp)
    },
    {
      id: 'lucky',
      title: u.chapterLucky,
      body: u.luckyBody(lucky.colors, lucky.numbers, lucky.days, lucky.hint)
    }
  ];
}

export function renderUnifiedModal(ctx) {
  const u = getUI().extended.unified;
  const chapters = buildUnifiedChapters(ctx);
  const items = chapters.map((c, i) => `
    <div class="master-chapter${i === 0 ? ' open' : ''}" data-uc="${c.id}">
      <button type="button" class="master-chapter-head" aria-expanded="${i === 0}">
        <span class="master-chapter-index">${String(i + 1).padStart(2, '0')}</span>
        <span class="master-chapter-title">${esc(c.title)}</span>
        <span class="master-chapter-icon" aria-hidden="true"></span>
      </button>
      <div class="master-chapter-body unified-chapter-body"${i === 0 ? '' : ' hidden'}>${c.body}</div>
    </div>
  `).join('');

  return `
    <div class="modal-system" id="modal-heading">${esc(u.eyebrow)}</div>
    <div class="modal-value">${esc(u.title)}</div>
    <div class="modal-label">${esc(u.subtitle)}</div>
    <p class="modal-intro">${esc(u.intro)}</p>
    <div class="master-section unified-master">
      <div class="master-head">
        <button type="button" class="master-toggle-all" data-unified-toggle="open">${esc(u.expandAll)}</button>
      </div>
      <div class="master-chapters">${items}</div>
    </div>
    <p class="extended-foot">${esc(u.footnote)}</p>
  `;
}

/** カードキーに応じた拡張ウィジェット（モーダル内） */
export function renderExtendedWidget(cardKey, ctx) {
  if (cardKey === 'moon') return renderMoonCalendar(ctx);
  if (cardKey === 'biorhythm') return renderBiorhythmForecast(ctx);
  return renderExtendedSection(cardKey, ctx);
}

/** 拡張 UI のイベント配線 */
export function bindExtendedReading(root, cardKey, ctx) {
  if (!root || !ctx) return;

  if (cardKey === 'unified') {
    bindUnifiedAccordion(root);
    return;
  }

  if (cardKey === 'moon') {
    const birthIdx = birthMoonPhaseIndex(ctx.y, ctx.m, ctx.d);
    const detail = root.querySelector('#moon-cal-detail');
    root.querySelectorAll('[data-moon-type]').forEach(btn => {
      btn.addEventListener('click', () => {
        const row = Number(btn.dataset.moonRow);
        const type = btn.dataset.moonType;
        const months = groupLunarMonths(lunarEventsAhead(new Date(), 400));
        const ev = type === 'new' ? months[row]?.newMoon : months[row]?.fullMoon;
        if (!ev || !detail) return;
        root.querySelectorAll('[data-moon-type]').forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        detail.innerHTML = moonDetailHtml(type, ev.date, birthIdx);
        detail.removeAttribute('hidden');
      });
    });
  }

  if (cardKey === 'biorhythm') {
    const rows = biorhythmForecast(ctx.y, ctx.m, ctx.d, 90);
    let wave = 'emotional';
    const detail = root.querySelector('#bio-detail');
    const track = root.querySelector('.bio-track');

    const paint = () => {
      track?.querySelectorAll('.bio-day').forEach((btn, i) => {
        const r = rows[i];
        if (!r) return;
        const h = Math.abs(r[wave]);
        btn.style.setProperty('--h', `${(h * 100).toFixed(0)}%`);
      });
    };

    root.querySelectorAll('[data-bio-wave]').forEach(tab => {
      tab.addEventListener('click', () => {
        wave = tab.dataset.bioWave;
        root.querySelectorAll('[data-bio-wave]').forEach(t => {
          const on = t === tab;
          t.classList.toggle('active', on);
          t.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        paint();
        const sel = track?.querySelector('.bio-day.selected') || track?.querySelector('.bio-day.is-today');
        if (sel && detail) {
          const idx = Number(sel.dataset.bioI);
          detail.innerHTML = bioDetailHtml(rows[idx], wave);
        }
      });
    });

    track?.querySelectorAll('.bio-day').forEach(btn => {
      btn.addEventListener('click', () => {
        track.querySelectorAll('.bio-day').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const idx = Number(btn.dataset.bioI);
        if (detail) detail.innerHTML = bioDetailHtml(rows[idx], wave);
      });
    });

    const todayBtn = track?.querySelector('.bio-day.is-today');
    todayBtn?.classList.add('selected');
  }

  bindCardInteractives(root, cardKey, ctx);
}

function bindUnifiedAccordion(root) {
  const setChapter = (chapter, open) => {
    const head = chapter.querySelector('.master-chapter-head');
    const body = chapter.querySelector('.master-chapter-body');
    chapter.classList.toggle('open', open);
    head?.setAttribute('aria-expanded', String(open));
    if (open) body?.removeAttribute('hidden');
    else body?.setAttribute('hidden', '');
  };

  const chapters = () => Array.from(root.querySelectorAll('.master-chapter'));
  const toggle = root.querySelector('[data-unified-toggle]');

  const syncUnifiedToggle = () => {
    if (!toggle) return;
    const u = getUI().extended.unified;
    const allOpen = chapters().every(c => c.classList.contains('open'));
    toggle.textContent = allOpen ? u.collapseAll : u.expandAll;
    toggle.dataset.unifiedToggle = allOpen ? 'close' : 'open';
  };

  root.querySelectorAll('.master-chapter').forEach(chapter => {
    chapter.querySelector('.master-chapter-head')?.addEventListener('click', () => {
      setChapter(chapter, !chapter.classList.contains('open'));
      syncUnifiedToggle();
    });
  });

  toggle?.addEventListener('click', () => {
    const opening = toggle.dataset.unifiedToggle === 'open';
    chapters().forEach(c => setChapter(c, opening));
    syncUnifiedToggle();
  });
}
