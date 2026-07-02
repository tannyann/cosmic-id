/**
 * 拡張リーディング — カードモーダルに深層チャプターを差し込む。
 * Premium 有効時は 1 章目無料・2 章目以降ロック。
 */
import { getContent, getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';
import {
  isPremiumGateActive,
  PREMIUM_CONFIG,
  renderPremiumCtaPanel,
  bindPremiumCta
} from './premium.js';

function getChapters(cardKey) {
  const content = getContent();
  return content.DEEP_CHAPTERS?.[cardKey] ?? null;
}

function renderChapter(ch, ctx, i, locked) {
  const bodyText = typeof ch.body === 'function' ? ch.body(ctx) : ch.body;
  const title = typeof ch.title === 'function' ? ch.title(ctx) : ch.title;
  const u = getUI().premiumGate ?? {};
  const lockLabel = u.chapterLocked ?? 'Premium';
  return `
    <article class="dc-chapter${locked ? ' dc-locked' : ''}" style="animation-delay:${0.05 + i * 0.06}s"
      ${locked ? `aria-label="${escapeHtml(title)} — ${escapeHtml(lockLabel)}"` : ''}>
      <h4 class="dc-chapter-title">
        ${locked ? `<span class="dc-lock-badge" aria-hidden="true">🔒</span>` : ''}
        ${escapeHtml(title)}
      </h4>
      <p class="dc-chapter-body">${escapeHtml(bodyText)}</p>
      ${locked ? `<p class="dc-lock-hint">${escapeHtml(u.tapToUnlock ?? 'タップして解放方法を見る')}</p>` : ''}
    </article>
  `;
}

function bindReadMore(container) {
  const u = getUI().deepChapters ?? {};
  const items = container.querySelectorAll('.dc-chapter:not(.dc-locked)');
  if (items.length <= 2) return;

  items.forEach((c, i) => {
    if (i >= 2) c.classList.add('dc-hidden');
  });

  const moreBtn = document.createElement('button');
  moreBtn.className = 'dc-more';
  moreBtn.type = 'button';
  moreBtn.textContent = u.readMore ?? `もっと読む (${items.length - 2})`;
  container.appendChild(moreBtn);

  moreBtn.addEventListener('click', () => {
    items.forEach(c => c.classList.remove('dc-hidden'));
    moreBtn.remove();
  });
}

export function mountDeepChapters(cardKey, ctx) {
  const chapters = getChapters(cardKey);
  if (!chapters || !chapters.length) return;

  const whatPanel = document.querySelector('.depth-panel[data-depth-panel="what"]');
  const target = whatPanel ?? document.getElementById('modal-body');
  if (!target) return;
  if (target.querySelector('.dc-section')) return;

  const u = getUI().deepChapters ?? {};
  const gateActive = isPremiumGateActive();
  const freeCount = PREMIUM_CONFIG.freeChapterCount;

  const section = document.createElement('section');
  section.className = 'dc-section';
  section.innerHTML = `
    <header class="dc-header">
      <p class="dc-eyebrow">${escapeHtml(u.eyebrow ?? 'EXTENDED READING')}</p>
      <h3 class="dc-title">${escapeHtml(u.title ?? 'より深く読み解く')}</h3>
      <p class="dc-lead">${escapeHtml(u.lead ?? '')}</p>
    </header>
    <div class="dc-list">
      ${chapters.map((ch, i) => renderChapter(ch, ctx, i, gateActive && i >= freeCount)).join('')}
    </div>
    ${gateActive && chapters.length > freeCount ? renderPremiumCtaPanel() : ''}
  `;
  target.appendChild(section);

  const list = section.querySelector('.dc-list');
  if (gateActive) {
    bindPremiumCta(section);
  } else {
    bindReadMore(list);
  }
}
