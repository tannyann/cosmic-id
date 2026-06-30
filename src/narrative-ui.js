/**
 * 統合ナラティブ UI — 生成・表示・Instagram シェア。
 */
import { generateNarrative } from './narrative.js';
import { getUI } from './i18n/index.js';
import { escapeHtml, showToast } from './util.js';
import { mountNarrativeShareActions, renderNarrativeShareHtml } from './narrativeShare.js';

function esc(s) {
  return escapeHtml(String(s ?? ''));
}

/**
 * @param {object} ctx — render() の currentContext
 */
export async function mountNarrativePanel(ctx) {
  document.getElementById('narrative-panel')?.remove();

  const u = getUI().narrative;
  const panel = document.createElement('section');
  panel.id = 'narrative-panel';
  panel.className = 'narrative-panel';
  panel.setAttribute('aria-label', u.panelTitle);
  panel.innerHTML = `
    <header class="narrative-head">
      <span class="narrative-badge">${esc(u.badge)}</span>
      <h2 class="narrative-title">${esc(u.panelTitle)}</h2>
      <p class="narrative-lead">${esc(u.panelLead)}</p>
    </header>
    <div class="narrative-status" id="narrative-status" aria-live="polite">
      <div class="narrative-spinner" aria-hidden="true"></div>
      <p>${esc(u.generating)}</p>
    </div>
    <div class="narrative-body" id="narrative-body" hidden></div>
  `;

  const summary = document.querySelector('.summary-card');
  if (summary) summary.after(panel);
  else document.querySelector('.hero-card')?.after(panel);

  let narrative;
  try {
    narrative = await generateNarrative(ctx);
  } catch (err) {
    console.error('Narrative generation failed:', err);
    const status = panel.querySelector('#narrative-status');
    if (status) status.innerHTML = `<p class="narrative-error">${esc(u.generateFail)}</p>`;
    showToast(u.generateFail);
    return;
  }

  const status = panel.querySelector('#narrative-status');
  const body = panel.querySelector('#narrative-body');
  if (!body) return;

  const sourceNote = narrative.source === 'ai' ? u.sourceAi : u.sourceLocal;
  const hookHtml = `<p class="narrative-hook">${esc(narrative.hook)}</p>`;
  const parasHtml = narrative.paragraphs.map((p, i) => `
    <p class="narrative-para" style="--delay:${i * 0.08}s">${esc(p)}</p>
  `).join('');

  body.innerHTML = `
    <p class="narrative-source">${esc(sourceNote)}</p>
    ${hookHtml}
    <div class="narrative-paras">${parasHtml}</div>
    <p class="narrative-footnote">${esc(u.footnote)}</p>
    ${renderNarrativeShareHtml(narrative)}
  `;

  if (status) status.hidden = true;
  body.hidden = false;

  await mountNarrativeShareActions(body, ctx, narrative);
}
