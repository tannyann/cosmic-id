/**
 * 恋愛診断 UI。
 *  - 結果画面の compat セクションより前に「恋愛タイプ」セクションを追加
 *  - 1 枚のアーケタイプヒーローカード + フェーズ + 強み + 留意点 + 相性 + 今夜のアクション
 *  - 末尾に compat への CTA(「気になる人と相性診断する→」)
 *
 * AGENTS.md:
 *  - 計算は love.js に委譲
 *  - ユーザー入力(名前)は escapeHtml で必ずエスケープ
 */
import { computeLove } from './love.js';
import { escapeHtml } from './util.js';
import { getCurrentContext } from './ui.js';
import { mountLoveSharePanel } from './love-share.js';

/* ============================================================
 * セクション全体の HTML を組み立てる
 * ============================================================ */

function renderSection({ name, result }) {
  const { archetype, phase, action, matches } = result;

  const matchChips = matches
    .map(m => `<li class="love-match-chip"><span class="love-match-icon" aria-hidden="true">${m.icon}</span>${escapeHtml(m.name)}</li>`)
    .join('');

  const sweetSpots = archetype.sweetSpots
    .map(s => `<li>${escapeHtml(s)}</li>`)
    .join('');

  const cares = archetype.cares
    .map(c => `<li>${escapeHtml(c)}</li>`)
    .join('');

  return `
    <header class="love-head">
      <p class="eyebrow">Love archetype</p>
      <h2 class="love-pair-title" id="love-heading">恋愛診断</h2>
    </header>

    <article class="love-hero" style="--love-accent: ${archetype.color}">
      <div class="love-hero-symbol" aria-hidden="true">${archetype.icon}</div>
      <p class="love-hero-id">No. ${archetype.id}</p>
      <h3 class="love-hero-name">${escapeHtml(archetype.name)}</h3>
      <p class="love-hero-catch">${escapeHtml(archetype.catch)}</p>
      <p class="love-hero-story">${escapeHtml(archetype.story)}</p>
    </article>

    <div class="love-phase">
      <p class="love-phase-label">今の恋愛フェーズ</p>
      <p class="love-phase-name">${escapeHtml(phase.label)}</p>
      <p class="love-phase-text">${escapeHtml(phase.text)}</p>
    </div>

    <div class="love-grid">
      <section class="love-block love-block-sweet">
        <h4>愛し方のスイートスポット</h4>
        <ul>${sweetSpots}</ul>
      </section>
      <section class="love-block love-block-care">
        <h4>心に留めておきたいこと</h4>
        <ul>${cares}</ul>
      </section>
    </div>

    <section class="love-matches">
      <h4>響き合いやすいタイプ</h4>
      <ul class="love-match-list">${matchChips}</ul>
    </section>

    <section class="love-action">
      <p class="love-action-label">今夜できる、出会いを呼ぶ小さなこと</p>
      <p class="love-action-text">${escapeHtml(action)}</p>
    </section>

    <div class="love-cta-wrap">
      <button type="button" class="love-cta" id="love-to-compat">
        気になる人がいるなら、相性診断へ <span aria-hidden="true">→</span>
      </button>
    </div>

    <p class="love-footnote">
      この結果は一つの可能性です。あなたの恋の物語は、あなたの手で書かれていきます。
    </p>

    <div id="love-share-mount"></div>
  `;
}

/* ============================================================
 * 公開関数:結果画面に恋愛診断セクションを差し込む
 *  - #results の末尾(compat より前)に挿入
 *  - 二重バインド防止のため #love-card があれば何もしない
 *  - 「相性診断へ」CTA は #compat-card にスクロール + フォーカス
 * ============================================================ */

export function bindLoveMode() {
  const results = document.getElementById('results');
  if (!results) return;
  if (document.getElementById('love-card')) return;

  const me = getCurrentContext();
  if (!me) {
    console.warn('[love] context not ready');
    return;
  }

  let result;
  try {
    result = computeLove(me);
  } catch (err) {
    console.error('[love] computeLove failed:', err);
    return;
  }

  const section = document.createElement('section');
  section.className = 'love-card';
  section.id = 'love-card';
  section.setAttribute('aria-labelledby', 'love-heading');
  section.innerHTML = renderSection({ name: me.name, result });

  // compat-card より前に置く(compat があれば前へ、無ければ末尾へ)
  const compat = document.getElementById('compat-card');
  if (compat) compat.before(section);
  else results.appendChild(section);

  // 「相性診断へ」CTA
  section.querySelector('#love-to-compat')?.addEventListener('click', () => {
    const compatEl = document.getElementById('compat-card');
    if (!compatEl) return;
    compatEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const firstInput = compatEl.querySelector('input');
    setTimeout(() => firstInput?.focus(), 500);
  });

  // シェアパネル
  mountLoveSharePanel({ name: me.name, result, ctx: me });
}
