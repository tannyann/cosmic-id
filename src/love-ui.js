/**
 * 恋愛診断 UI(i18n 対応版)。
 * 表示文字列は全て getUI().love から取得。
 */
import { computeLove } from './love.js';
import { getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';
import { getCurrentContext } from './ui.js';
import { mountLoveSharePanel } from './love-share.js';

function renderSection({ name, result, u }) {
  const { archetype, phase, action, matches } = result;

  const matchChips = matches
    .map(m => `<li class="love-match-chip"><span class="love-match-icon" aria-hidden="true">${m.icon}</span>${escapeHtml(m.name)}</li>`)
    .join('');

  const sweetSpots = archetype.sweetSpots.map(s => `<li>${escapeHtml(s)}</li>`).join('');
  const cares      = archetype.cares.map(c => `<li>${escapeHtml(c)}</li>`).join('');

  return `
    <header class="love-head">
      <p class="eyebrow">${escapeHtml(u.sectionEyebrow)}</p>
      <h2 class="love-pair-title">
        <span class="love-name">${escapeHtml(name)}</span>
        <span class="love-conjunction">${escapeHtml(u.headingSuffix)}</span>
      </h2>
    </header>

    <article class="love-hero" style="--love-accent: ${archetype.color}">
      <div class="love-hero-symbol" aria-hidden="true">${archetype.icon}</div>
      <p class="love-hero-id">${escapeHtml(u.noPrefix)} ${archetype.id}</p>
      <h3 class="love-hero-name" id="love-heading">${escapeHtml(archetype.name)}</h3>
      <p class="love-hero-catch">${escapeHtml(archetype.catch)}</p>
      <p class="love-hero-story">${escapeHtml(archetype.story)}</p>
    </article>

    <div class="love-phase">
      <p class="love-phase-label">${escapeHtml(u.phaseLabel)}</p>
      <p class="love-phase-name">${escapeHtml(phase.label)}</p>
      <p class="love-phase-text">${escapeHtml(phase.text)}</p>
    </div>

    <div class="love-grid">
      <section class="love-block love-block-sweet">
        <h4>${escapeHtml(u.sweetSpotsTitle)}</h4>
        <ul>${sweetSpots}</ul>
      </section>
      <section class="love-block love-block-care">
        <h4>${escapeHtml(u.caresTitle)}</h4>
        <ul>${cares}</ul>
      </section>
    </div>

    <section class="love-matches">
      <h4>${escapeHtml(u.matchesTitle)}</h4>
      <ul class="love-match-list">${matchChips}</ul>
    </section>

    <section class="love-action">
      <p class="love-action-label">${escapeHtml(u.actionLabel)}</p>
      <p class="love-action-text">${escapeHtml(action)}</p>
    </section>

    <div class="love-cta-wrap">
      <button type="button" class="love-cta" id="love-to-compat">
        ${escapeHtml(u.ctaCompat)}
      </button>
    </div>

    <p class="love-footnote">${escapeHtml(u.footnote)}</p>

    <div id="love-share-mount"></div>
  `;
}

export function bindLoveMode() {
  const results = document.getElementById('results');
  if (!results) return;
  // 既存があれば削除して再描画(ロケール切替時に refresh するため)
  document.getElementById('love-card')?.remove();

  const me = getCurrentContext();
  if (!me) return;

  let result;
  try { result = computeLove(me); }
  catch (err) { console.error('[love] computeLove failed:', err); return; }

  const u = getUI().love;

  const section = document.createElement('section');
  section.className = 'love-card';
  section.id = 'love-card';
  section.setAttribute('aria-labelledby', 'love-heading');
  section.innerHTML = renderSection({ name: me.name, result, u });

  const compat = document.getElementById('compat-card');
  if (compat) compat.before(section);
  else results.appendChild(section);

  section.querySelector('#love-to-compat')?.addEventListener('click', () => {
    const compatEl = document.getElementById('compat-card');
    if (!compatEl) return;
    compatEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => compatEl.querySelector('input')?.focus(), 500);
  });

  mountLoveSharePanel({ name: me.name, result, ctx: me });
}
