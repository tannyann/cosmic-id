/**
 * 占術用語の簡易解説（タップで表示）。
 * 辞書は getContent().TERM_GLOSSARY、カード対応は CARD_GLOSS_KEYS。
 */
import { getContent, getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';

/** カード見出し：用語解説ボタン or プレーンテキスト */
export function cardSystemHtml(cardKey, fallbackLabel) {
  const { CARD_GLOSS_KEYS, TERM_GLOSSARY } = getContent();
  const termKey = CARD_GLOSS_KEYS?.[cardKey];
  const entry = termKey ? TERM_GLOSSARY?.[termKey] : null;
  if (!entry) return escapeHtml(fallbackLabel);
  return glossButtonHtml(termKey, entry);
}

function glossButtonHtml(termKey, entry) {
  const u = getUI().gloss ?? {};
  const tipId = `gloss-tip-${termKey}`;
  const aria = u.tipAria ? u.tipAria(entry.term) : entry.term;
  return `<button type="button" class="term-gloss" data-gloss-key="${escapeHtml(termKey)}"
    aria-describedby="${tipId}" aria-expanded="false" aria-label="${escapeHtml(aria)}">
    <span class="term-gloss-text">${escapeHtml(entry.term)}</span>
    <span class="term-gloss-mark" aria-hidden="true">?</span>
    <span id="${tipId}" class="term-gloss-tip" role="tooltip" hidden>${escapeHtml(entry.hint)}</span>
  </button>`;
}

/** サマリー直下の用語一覧 */
export function renderGlossStrip() {
  const { TERM_GLOSSARY, CARD_GLOSS_KEYS } = getContent();
  const u = getUI().gloss;
  if (!u?.stripTitle || !TERM_GLOSSARY) return '';

  const keys = [...new Set(Object.values(CARD_GLOSS_KEYS || {}))];
  const items = keys.map(k => ({ key: k, ...TERM_GLOSSARY[k] })).filter(i => i.term);

  if (!items.length) return '';

  return `
    <details class="gloss-strip">
      <summary class="gloss-strip-toggle">${escapeHtml(u.stripTitle)}</summary>
      <dl class="gloss-list">
        ${items.map(i => `
          <div class="gloss-item">
            <dt>${escapeHtml(i.term)}</dt>
            <dd>${escapeHtml(i.hint)}</dd>
          </div>
        `).join('')}
      </dl>
    </details>`;
}

/** クリックでツールチップ開閉（モバイル向け） */
export function bindTermGloss(root) {
  if (!root) return;
  root.querySelectorAll('.term-gloss').forEach(btn => {
    if (btn.dataset.glossBound) return;
    btn.dataset.glossBound = '1';
    const tip = btn.querySelector('.term-gloss-tip');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = btn.getAttribute('aria-expanded') === 'true';
      root.querySelectorAll('.term-gloss[aria-expanded="true"]').forEach(other => {
        if (other === btn) return;
        other.setAttribute('aria-expanded', 'false');
        other.classList.remove('open');
        const t = other.querySelector('.term-gloss-tip');
        if (t) t.hidden = true;
      });
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      btn.classList.toggle('open', !open);
      if (tip) tip.hidden = open;
    });
  });
}
