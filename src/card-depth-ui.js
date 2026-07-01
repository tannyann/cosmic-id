/**
 * Feature 1: カードモーダル 4 層化 UI。
 *
 * 既存の openModal() が呼ばれた後、モーダルボディの先頭にタブナビを差し込む。
 * タブ:What(既存)/ How(計算)/ Where(歴史)/ Who(有名人)
 *
 * 使い方:src/ui.js の renderModalBody() の末尾で mountCardDepth(key, ctx) を呼ぶ。
 */
import { getContent, getUI, getLocale } from './i18n/index.js';
import { escapeHtml } from './util.js';

/* ============================================================
 * カード key → CARD_DEPTHS の key マッピング(体系名の差異吸収)
 * ============================================================ */
function getDepth(cardKey) {
  const content = getContent();
  const depths = content.CARD_DEPTHS ?? {};
  return depths[cardKey];
}

/* ============================================================
 * 現在の結果値から famousBy の該当エントリを引く
 * ============================================================ */
function famousByCard(cardKey, ctx) {
  const depth = getDepth(cardKey);
  if (!depth?.famousBy) return [];
  const value = (() => {
    switch (cardKey) {
      case 'lifepath': return ctx.lp;
      case 'sun':      return ctx.sun?.name;
      case 'kyusei':   return ctx.ks?.name;
      default:         return null;
    }
  })();
  return depth.famousBy[value] ?? [];
}

/* ============================================================
 * How タブ:計算過程を段階アニメーションで表示
 * ============================================================ */
function renderComputation(cardKey, ctx) {
  const depth = getDepth(cardKey);
  if (!depth?.computation) return '<p class="depth-empty">' + escapeHtml(getUI().depth?.emptyComputation ?? '') + '</p>';

  const { caption, steps } = depth.computation;
  const trace = steps(ctx.y, ctx.m, ctx.d);

  const stepHtml = trace.map((s, i) => {
    const partHtml = s.parts
      ? `<div class="depth-parts">${s.parts.map(p => `<span class="depth-digit">${escapeHtml(String(p))}</span>`).join('')}</div>`
      : '';
    const valueHtml = s.value != null
      ? `<div class="depth-step-value ${s.final ? 'is-final' : ''} ${s.master ? 'is-master' : ''}">${escapeHtml(String(s.value))}</div>`
      : '';
    return `
      <li class="depth-step" style="animation-delay:${i * 0.35}s">
        <div class="depth-step-label">${escapeHtml(s.label)}</div>
        ${partHtml}
        ${valueHtml}
      </li>
    `;
  }).join('');

  return `
    <p class="depth-caption">${escapeHtml(caption)}</p>
    <ol class="depth-computation">${stepHtml}</ol>
  `;
}

/* ============================================================
 * Where タブ:起源・年表・現代における位置・参考文献
 * ============================================================ */
function renderHistory(cardKey) {
  const depth = getDepth(cardKey);
  if (!depth?.history) return '<p class="depth-empty">' + escapeHtml(getUI().depth?.emptyHistory ?? '') + '</p>';
  const { origin, evolution, modernStatus, references } = depth.history;
  const u = getUI().depth ?? {};

  const evolutionHtml = evolution.map(e => `
    <li class="depth-tl-item">
      <span class="depth-tl-year">${escapeHtml(String(e.year))}</span>
      <span class="depth-tl-event">${escapeHtml(e.event)}</span>
    </li>
  `).join('');

  const refsHtml = references?.map(r => `
    <li class="depth-ref">
      <span class="depth-ref-title">${escapeHtml(r.title)}</span>
      <span class="depth-ref-meta">— ${escapeHtml(r.author)} (${escapeHtml(String(r.year))})</span>
    </li>
  `).join('') ?? '';

  return `
    <p class="depth-origin">${escapeHtml(origin)}</p>
    <h5 class="depth-subheading">${escapeHtml(u.timelineTitle ?? 'Timeline')}</h5>
    <ol class="depth-timeline">${evolutionHtml}</ol>
    <h5 class="depth-subheading">${escapeHtml(u.modernTitle ?? 'Today')}</h5>
    <p class="depth-modern">${escapeHtml(modernStatus)}</p>
    ${refsHtml ? `<h5 class="depth-subheading">${escapeHtml(u.refsTitle ?? 'Further reading')}</h5><ul class="depth-refs">${refsHtml}</ul>` : ''}
  `;
}

/* ============================================================
 * Who タブ:結果値を共有する有名人
 * ============================================================ */
function renderFamous(cardKey, ctx) {
  const list = famousByCard(cardKey, ctx);
  const u = getUI().depth ?? {};
  if (!list.length) return `<p class="depth-empty">${escapeHtml(u.emptyFamous ?? 'No entries yet.')}</p>`;
  const items = list.map(p => `
    <li class="depth-famous">
      <div class="depth-famous-name">${escapeHtml(p.name)}</div>
      <div class="depth-famous-meta">
        <span class="depth-famous-birth">${escapeHtml(p.birth)}</span>
        <span class="depth-famous-nation">${escapeHtml(p.nation)}</span>
        <span class="depth-famous-craft">${escapeHtml(p.craft)}</span>
      </div>
      ${p.note ? `<p class="depth-famous-note">${escapeHtml(p.note)}</p>` : ''}
    </li>
  `).join('');
  const caption = (u.famousCaption ?? '同じ結果を持つ人たち').replace('{value}', getResultLabel(cardKey, ctx));
  return `
    <p class="depth-caption">${escapeHtml(caption)}</p>
    <ul class="depth-famous-list">${items}</ul>
  `;
}

function getResultLabel(cardKey, ctx) {
  switch (cardKey) {
    case 'lifepath': return `Life Path ${ctx.lp}`;
    case 'sun':      return ctx.sun?.name ?? '';
    case 'kyusei':   return ctx.ks?.name ?? '';
    default:         return '';
  }
}

/* ============================================================
 * 公開関数:openModal 完了後にタブナビと 3 タブを追加
 *
 * @param cardKey  data-key(例:'lifepath')
 * @param ctx      currentContext(y, m, d, lp, sun, ks 等)
 * ============================================================ */
export function mountCardDepth(cardKey, ctx) {
  if (!getDepth(cardKey)) return; // 深掘り未整備のカードはスキップ

  const body = document.getElementById('modal-body');
  if (!body) return;

  // 既存の What コンテンツをラップして "what" タブに
  const whatWrap = document.createElement('div');
  whatWrap.className = 'depth-panel is-active';
  whatWrap.dataset.depthPanel = 'what';
  // 既存の子要素をすべて whatWrap の中に移す
  while (body.firstChild) whatWrap.appendChild(body.firstChild);

  const u = getUI().depth ?? {};
  const nav = document.createElement('nav');
  nav.className = 'depth-tabs';
  nav.setAttribute('role', 'tablist');
  nav.innerHTML = `
    <button role="tab" class="depth-tab is-active" data-depth-tab="what"  aria-selected="true">${escapeHtml(u.tabWhat  ?? '意味')}</button>
    <button role="tab" class="depth-tab"           data-depth-tab="how"   aria-selected="false">${escapeHtml(u.tabHow   ?? '計算')}</button>
    <button role="tab" class="depth-tab"           data-depth-tab="where" aria-selected="false">${escapeHtml(u.tabWhere ?? '歴史')}</button>
    <button role="tab" class="depth-tab"           data-depth-tab="who"   aria-selected="false">${escapeHtml(u.tabWho   ?? '響き合う人')}</button>
  `;
  body.appendChild(nav);
  body.appendChild(whatWrap);

  // 残り 3 タブのパネルを追加(遅延生成でも OK だが軽いので即時生成)
  const howPanel = document.createElement('div');
  howPanel.className = 'depth-panel';
  howPanel.dataset.depthPanel = 'how';
  howPanel.innerHTML = renderComputation(cardKey, ctx);
  body.appendChild(howPanel);

  const wherePanel = document.createElement('div');
  wherePanel.className = 'depth-panel';
  wherePanel.dataset.depthPanel = 'where';
  wherePanel.innerHTML = renderHistory(cardKey);
  body.appendChild(wherePanel);

  const whoPanel = document.createElement('div');
  whoPanel.className = 'depth-panel';
  whoPanel.dataset.depthPanel = 'who';
  whoPanel.innerHTML = renderFamous(cardKey, ctx);
  body.appendChild(whoPanel);

  // タブ切り替え
  nav.querySelectorAll('.depth-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.depthTab;
      nav.querySelectorAll('.depth-tab').forEach(t => {
        const isActive = t.dataset.depthTab === target;
        t.classList.toggle('is-active', isActive);
        t.setAttribute('aria-selected', String(isActive));
      });
      body.querySelectorAll('.depth-panel').forEach(p => {
        p.classList.toggle('is-active', p.dataset.depthPanel === target);
      });

      // URL ハッシュに保存(#lifepath/how のような形)
      const hash = `#${cardKey}/${target}`;
      history.replaceState(null, '', hash);
    });
  });

  // ハッシュ初期化(#lifepath/where のようにアクセスされた場合)
  const hash = location.hash.slice(1);
  const [hk, ht] = hash.split('/');
  if (hk === cardKey && ht && ['what', 'how', 'where', 'who'].includes(ht)) {
    nav.querySelector(`.depth-tab[data-depth-tab="${ht}"]`)?.click();
  }
}
