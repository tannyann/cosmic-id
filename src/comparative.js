/**
 * Feature 12: Comparative Personality UI — カードモーダルに「現代枠組みで見る」セクションを追加。
 */
import { getContent, getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';

function getMappingForCard(cardKey, ctx) {
  const content = getContent();
  const cross = content.CROSS_FRAMEWORKS ?? {};
  switch (cardKey) {
    case 'lifepath': return cross.lifepath?.[ctx.lp];
    case 'sun':      return cross.sun?.[ctx.sun?.name];
    default: return null;
  }
}

export function mountComparative(cardKey, ctx) {
  const mapping = getMappingForCard(cardKey, ctx);
  if (!mapping) return;

  const body = document.getElementById('modal-body');
  if (!body || body.querySelector('.comp-frame')) return;

  const info = getContent().FRAMEWORK_INFO ?? {};
  const u = getUI().comparative ?? {};

  const rows = [
    { key: 'bigFive',   value: mapping.bigFive },
    { key: 'mbti',      value: mapping.mbti },
    { key: 'enneagram', value: mapping.enneagram },
    { key: 'strengths', value: Array.isArray(mapping.strengths) ? mapping.strengths.join(' / ') : mapping.strengths }
  ].map(({ key, value }) => `
    <li class="comp-row">
      <button class="comp-key" data-comp-info="${escapeHtml(key)}">
        ${escapeHtml(info[key]?.name ?? key)}
      </button>
      <span class="comp-value">≒ ${escapeHtml(String(value ?? '—'))}</span>
    </li>
  `).join('');

  const noteHtml = mapping.note
    ? `<p class="comp-note">${escapeHtml(mapping.note)}</p>`
    : '';

  const section = document.createElement('details');
  section.className = 'comp-frame';
  section.innerHTML = `
    <summary class="comp-summary">
      <span class="comp-summary-eyebrow">${escapeHtml(u.eyebrow ?? 'IN MODERN FRAMES')}</span>
      <span class="comp-summary-title">${escapeHtml(u.title ?? 'You, translated into today\'s vocabulary')}</span>
    </summary>
    <p class="comp-caveat comp-caveat-top">${escapeHtml(u.caveat ?? 'These mappings translate shared themes, not exact scientific correspondence.')}</p>
    <ul class="comp-list">${rows}</ul>
    ${noteHtml}
    <div class="comp-info" id="comp-info" hidden></div>
  `;
  body.appendChild(section);

  section.querySelectorAll('[data-comp-info]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.dataset.compInfo;
      const box = section.querySelector('#comp-info');
      const meta = info[key];
      if (!meta) return;
      box.innerHTML = `
        <h4 class="comp-info-name">${escapeHtml(meta.name)}</h4>
        <p class="comp-info-desc">${escapeHtml(meta.desc)}</p>
      `;
      box.hidden = false;
    });
  });
}
