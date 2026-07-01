/**
 * 拡張リーディング(無料) — カードモーダルに深層チャプターを差し込む。
 *
 * 呼び出し順(既存 renderModalBody の末尾で):
 *   mountCardDepth(key, ctx);        // Phase 1 の 4 タブ拡張(あれば)
 *   mountDeepChapters(key, ctx);     // ★ 今回追加
 *   mountComparative(key, ctx);      // Phase 2(あれば)
 *   mountSkepticNote(key);           // Phase 2(あれば)
 *
 * 4 タブ拡張と共存する場合は、'what' タブの中に挿入される。
 */
import { getContent, getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';

function getChapters(cardKey) {
  const content = getContent();
  return content.DEEP_CHAPTERS?.[cardKey] ?? null;
}

/** ctx を渡してチャプター 1 枚をレンダリング */
function renderChapter(ch, ctx, i) {
  const bodyText = typeof ch.body === 'function' ? ch.body(ctx) : ch.body;
  const title = typeof ch.title === 'function' ? ch.title(ctx) : ch.title;
  return `
    <article class="dc-chapter" style="animation-delay:${0.05 + i * 0.06}s">
      <h4 class="dc-chapter-title">${escapeHtml(title)}</h4>
      <p class="dc-chapter-body">${escapeHtml(bodyText)}</p>
    </article>
  `;
}

/** 「もっと読む」ボタン(初期状態は 2 章、押すと全部展開) */
function bindReadMore(container) {
  const u = getUI().deepChapters ?? {};
  const items = container.querySelectorAll('.dc-chapter');
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

/** 公開関数:モーダルボディに深層チャプターセクションを追加 */
export function mountDeepChapters(cardKey, ctx) {
  const chapters = getChapters(cardKey);
  if (!chapters || !chapters.length) return;

  // 4 タブ拡張と共存する場合、'what' パネルの中に入れる
  const whatPanel = document.querySelector('.depth-panel[data-depth-panel="what"]');
  const target = whatPanel ?? document.getElementById('modal-body');
  if (!target) return;
  if (target.querySelector('.dc-section')) return; // 二重挿入防止

  const u = getUI().deepChapters ?? {};
  const section = document.createElement('section');
  section.className = 'dc-section';
  section.innerHTML = `
    <header class="dc-header">
      <p class="dc-eyebrow">${escapeHtml(u.eyebrow ?? 'EXTENDED READING · FREE')}</p>
      <h3 class="dc-title">${escapeHtml(u.title ?? 'より深く読み解く')}</h3>
      <p class="dc-lead">${escapeHtml(u.lead ?? 'すべて無料。断定ではなく、可能性として提示しています。')}</p>
    </header>
    <div class="dc-list">
      ${chapters.map((ch, i) => renderChapter(ch, ctx, i)).join('')}
    </div>
  `;
  target.appendChild(section);

  bindReadMore(section.querySelector('.dc-list'));
}
