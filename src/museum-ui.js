/**
 * Feature 13: Museum ルーティング + 描画。
 * URL: /#museum, /#museum/:id
 * リンク:ヘッダーに「Museum」ボタン、閉じるにはブラウザバック。
 */
import { getContent, getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';

function getExhibits() {
  return getContent().MUSEUM_EXHIBITS ?? [];
}

/** インデックス画面 */
function renderIndex() {
  const u = getUI().museum ?? {};
  const cards = getExhibits().map((ex, i) => `
    <a class="mu-card" href="#museum/${escapeHtml(ex.id)}" data-mu-link="${escapeHtml(ex.id)}">
      <span class="mu-card-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="mu-card-symbol" aria-hidden="true">${escapeHtml(ex.heroSymbol)}</span>
      <h3 class="mu-card-title">${escapeHtml(ex.title)}</h3>
      <p class="mu-card-sub">${escapeHtml(ex.subtitle)}</p>
      <p class="mu-card-era">${escapeHtml(ex.era)}</p>
    </a>
  `).join('');

  return `
    <header class="mu-hero">
      <p class="eyebrow">${escapeHtml(u.eyebrow ?? 'MUSEUM')}</p>
      <h1 class="mu-hero-title">${escapeHtml(u.title ?? '19 の物語の博物館')}</h1>
      <p class="mu-hero-lead">${escapeHtml(u.lead ?? 'それぞれの体系が、どこで、いつ、誰から生まれたのか。')}</p>
    </header>
    <section class="mu-grid">${cards || `<p class="mu-empty">${escapeHtml(u.empty ?? 'Exhibits coming soon.')}</p>`}</section>
    <a href="#" class="mu-back" data-mu-back>${escapeHtml(u.back ?? '← COSMIC ID に戻る')}</a>
  `;
}

/** 展示ページ */
function renderExhibit(ex) {
  const u = getUI().museum ?? {};
  const refsHtml = ex.references?.map(r =>
    `<li class="mu-ref">${escapeHtml(r.title)} — ${escapeHtml(r.author)} (${escapeHtml(String(r.year))})</li>`
  ).join('') ?? '';

  const section = (title, body) => `
    <section class="mu-section">
      <h2 class="mu-section-title">${escapeHtml(title)}</h2>
      <p class="mu-section-body">${escapeHtml(body)}</p>
    </section>
  `;

  return `
    <header class="mu-exhibit-head">
      <a href="#museum" data-mu-link="index" class="mu-crumb">${escapeHtml(u.indexLink ?? '← 展示一覧')}</a>
      <p class="mu-exhibit-era">${escapeHtml(ex.era)}</p>
      <span class="mu-exhibit-symbol" aria-hidden="true">${escapeHtml(ex.heroSymbol)}</span>
      <h1 class="mu-exhibit-title">${escapeHtml(ex.title)}</h1>
      <p class="mu-exhibit-sub">${escapeHtml(ex.subtitle)}</p>
    </header>
    ${section(ex.origin.title, ex.origin.body)}
    ${section(ex.evolution.title, ex.evolution.body)}
    ${section(ex.modern.title, ex.modern.body)}
    ${section(ex.critique.title, ex.critique.body)}
    ${section(ex.culturalPresence.title, ex.culturalPresence.body)}
    ${refsHtml ? `
      <section class="mu-section mu-refs-section">
        <h2 class="mu-section-title">${escapeHtml(u.refs ?? '参考文献')}</h2>
        <ul class="mu-refs">${refsHtml}</ul>
      </section>
    ` : ''}
    <a href="#" class="mu-back" data-mu-back>${escapeHtml(u.back ?? '← COSMIC ID に戻る')}</a>
  `;
}

/** ルーター */
function route() {
  const hash = location.hash.slice(1);
  const parts = hash.split('/');
  if (parts[0] !== 'museum') { closeMuseum(); return; }
  openMuseum();
  const id = parts[1];
  const mount = document.getElementById('mu-content');
  if (!mount) return;
  if (!id) {
    mount.innerHTML = renderIndex();
  } else {
    const ex = getExhibits().find(e => e.id === id);
    mount.innerHTML = ex ? renderExhibit(ex) : renderIndex();
    mount.scrollTop = 0;
  }
}

function openMuseum() {
  if (document.getElementById('mu-root')) return;
  const el = document.createElement('div');
  el.id = 'mu-root';
  el.className = 'mu-root';
  el.innerHTML = `<div id="mu-content" class="mu-content"></div>`;
  document.body.appendChild(el);
  document.documentElement.classList.add('mu-open');
}

function closeMuseum() {
  document.getElementById('mu-root')?.remove();
  document.documentElement.classList.remove('mu-open');
}

/** 公開:ヘッダーに Museum ボタン + ルーター起動 */
export function bindMuseum() {
  window.addEventListener('hashchange', route);
  document.addEventListener('click', (e) => {
    const back = e.target.closest('[data-mu-back]');
    if (back) { e.preventDefault(); history.pushState('', '', location.pathname); closeMuseum(); }
  });

  const host = document.querySelector('.header-top') ?? document.querySelector('header.site-header');
  if (host && !document.getElementById('mu-cta')) {
    const link = document.createElement('a');
    link.id = 'mu-cta';
    link.className = 'mu-cta';
    link.href = '#museum';
    link.textContent = getUI().museum?.navLink ?? 'Museum';
    host.appendChild(link);
  }

  // 初期ハッシュに museum が含まれていれば開く
  if (location.hash.startsWith('#museum')) route();
}
