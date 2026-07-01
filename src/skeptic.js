/**
 * Feature 11: Skeptic Mode トグル + 各カードモーダルへの注釈挿入。
 */
import { getContent, getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';

const STORAGE_KEY = 'cosmic-id-skeptic';

export function isSkepticMode() {
  return localStorage.getItem(STORAGE_KEY) === '1';
}

export function setSkepticMode(v) {
  if (v) localStorage.setItem(STORAGE_KEY, '1');
  else localStorage.removeItem(STORAGE_KEY);
  document.documentElement.dataset.skeptic = v ? '1' : '0';
}

/** カードモーダル本体に注釈ブロックを追加(mountCardDepth の後に呼ぶ) */
export function mountSkepticNote(cardKey) {
  const content = getContent();
  const notes = content.SKEPTIC_NOTES ?? {};
  const note = notes[cardKey];
  if (!note) return;

  const body = document.getElementById('modal-body');
  if (!body || body.querySelector('.skeptic-note')) return;

  const u = getUI().skeptic ?? {};
  const box = document.createElement('aside');
  box.className = 'skeptic-note';
  box.innerHTML = `
    <p class="skeptic-header">
      <span class="skeptic-icon" aria-hidden="true">⚠</span>
      ${escapeHtml(u.header ?? 'Skeptic note')}
    </p>
    <p class="skeptic-body">${escapeHtml(note.note)}</p>
    ${note.counterView ? `<p class="skeptic-counter"><span class="skeptic-counter-label">${escapeHtml(u.counter ?? 'On the other hand')}:</span> ${escapeHtml(note.counterView)}</p>` : ''}
    ${note.citations?.length ? `
      <ul class="skeptic-refs">
        ${note.citations.map(c => `<li>${escapeHtml(c.title)}${c.url ? ` <a href="${escapeHtml(c.url)}" target="_blank" rel="noopener">↗</a>` : ''}</li>`).join('')}
      </ul>
    ` : ''}
  `;
  body.appendChild(box);
}

/** 公開:ヘッダーにトグル UI を挿入 */
export function bindSkepticToggle() {
  const host = document.querySelector('.header-top') ?? document.querySelector('header.site-header');
  if (!host) return;
  if (document.getElementById('skeptic-toggle')) return;

  const u = getUI().skeptic ?? {};
  const wrap = document.createElement('div');
  wrap.id = 'skeptic-toggle';
  wrap.className = 'skeptic-toggle-wrap';
  wrap.innerHTML = `
    <label class="skeptic-toggle-label">
      <input type="checkbox" id="skeptic-check" ${isSkepticMode() ? 'checked' : ''}>
      <span class="skeptic-toggle-track" aria-hidden="true"></span>
      <span class="skeptic-toggle-text">${escapeHtml(u.toggle ?? 'Skeptic mode')}</span>
    </label>
  `;
  host.appendChild(wrap);

  // 初期状態
  document.documentElement.dataset.skeptic = isSkepticMode() ? '1' : '0';

  wrap.querySelector('#skeptic-check').addEventListener('change', (e) => {
    setSkepticMode(e.target.checked);
  });
}
