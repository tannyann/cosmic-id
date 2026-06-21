/**
 * 相性診断モードの UI 層。
 *  - 既存 ui.js の render() が #results を埋めた最後に bindCompatMode() を呼ぶ
 *  - フォーム送信で computeCompat() を実行し、結果を描画
 *  - 結果末尾にシェアパネル(compat-share.js)をマウント
 *
 * AGENTS.md の規約:
 *  - 計算は compat.js に委譲。ここは DOM とイベントのみ。
 *  - ユーザー入力は必ず escapeHtml() を通してから挿入する。
 *  - 文言は強い断定を避け、可能性として提示する。
 */
import { computeCompat, axisHint } from './compat.js';
import { escapeHtml, localDateInputMax } from './util.js';
import { getCurrentContext } from './ui.js';
import { getUI } from './i18n/index.js';
import { mountCompatSharePanel } from './compat-share.js';

const AXIS_ORDER = ['lifePath', 'sun', 'zodiac', 'gogyou', 'kyusei'];

function formHtml() {
  const c = getUI().compat;
  return `
<section class="compat-card" id="compat-card" aria-labelledby="compat-heading">
  <header class="compat-head">
    <p class="eyebrow">${escapeHtml(c.eyebrow)}</p>
    <h2 id="compat-heading" class="compat-title">${escapeHtml(c.title)}</h2>
    <p class="compat-lead">
      ${escapeHtml(c.lead)}<br>
      <span class="compat-lead-sub">${escapeHtml(c.leadSub)}</span>
    </p>
  </header>
  <form id="compat-form" class="compat-form" novalidate>
    <div class="compat-form-grid">
      <div class="field">
        <label for="compat-name">${escapeHtml(c.nameLabel)}</label>
        <input type="text" id="compat-name" placeholder="${escapeHtml(c.namePlaceholder)}" autocomplete="off" required>
      </div>
      <div class="field">
        <label for="compat-birth">${escapeHtml(c.birthLabel)}</label>
        <input type="date" id="compat-birth" required>
      </div>
    </div>
    <div class="compat-form-actions">
      <button type="submit" class="btn-primary">${escapeHtml(c.submit)}</button>
    </div>
    <p class="compat-disclaimer">
      ${escapeHtml(c.disclaimer)}
    </p>
  </form>
  <div id="compat-result" class="compat-result" hidden></div>
</section>
`;
}

function valueLabel(axisKey, side) {
  const c = getUI().compat;
  switch (axisKey) {
    case 'lifePath': return c.lifePathValue(side);
    case 'sun':      return `${side.symbol ?? ''} ${side.name}`.trim();
    case 'zodiac':   return side.name ?? '—';
    case 'gogyou':   return side.element ?? side.name ?? '—';
    case 'kyusei':   return side.name ?? '—';
    default:         return String(side ?? '');
  }
}

function renderRadar(axes, radarAria) {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const r  = size / 2 - 36;
  const n  = AXIS_ORDER.length;

  const angle = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const vertex = (i, ratio) => [
    cx + r * ratio * Math.cos(angle(i)),
    cy + r * ratio * Math.sin(angle(i))
  ];

  const rings = [0.25, 0.5, 0.75, 1].map(ratio => {
    const pts = AXIS_ORDER.map((_, i) => vertex(i, ratio).join(',')).join(' ');
    return `<polygon points="${pts}" fill="none" stroke="rgba(201,162,39,0.18)" stroke-width="1"/>`;
  }).join('');

  const spokes = AXIS_ORDER.map((_, i) => {
    const [x, y] = vertex(i, 1);
    return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(201,162,39,0.15)" stroke-width="1"/>`;
  }).join('');

  const dataPts = AXIS_ORDER.map((k, i) => vertex(i, Math.max(axes[k].score, 5) / 100).join(',')).join(' ');
  const shape = `
    <polygon points="${dataPts}"
      fill="url(#compatGrad)" stroke="#e6cf93" stroke-width="1.5"
      style="filter:drop-shadow(0 0 14px rgba(155,111,212,0.45))"/>
  `;

  const labels = AXIS_ORDER.map((k, i) => {
    const [x, y] = vertex(i, 1.18);
    return `
      <text x="${x}" y="${y - 6}" text-anchor="middle"
            fill="#ede4d4" font-size="10" letter-spacing="0.12em"
            font-family="serif">${axes[k].axisLabel}</text>
      <text x="${x}" y="${y + 10}" text-anchor="middle"
            fill="#e6cf93" font-size="13" font-weight="600">${axes[k].score}</text>
    `;
  }).join('');

  return `
    <svg viewBox="0 0 ${size} ${size}" class="compat-radar"
         role="img" aria-label="${escapeHtml(radarAria)}">
      <defs>
        <radialGradient id="compatGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%"   stop-color="#9b6fd4" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#d4799a" stop-opacity="0.18"/>
        </radialGradient>
      </defs>
      ${rings}
      ${spokes}
      ${shape}
      ${labels}
    </svg>
  `;
}

function renderResult({ name1, name2, result }) {
  const c = getUI().compat;
  const { axes, overall, band } = result;

  const axisRows = AXIS_ORDER.map(k => {
    const ax = axes[k];
    const v1 = valueLabel(k, ax.a);
    const v2 = valueLabel(k, ax.b);
    return `
      <div class="compat-axis-row">
        <div class="compat-axis-head">
          <span class="compat-axis-name">${escapeHtml(ax.axisLabel)}</span>
          <span class="compat-axis-score">${ax.score}</span>
        </div>
        <div class="compat-axis-pair">
          <span class="compat-axis-side">${escapeHtml(String(v1))}</span>
          <span class="compat-axis-arrow" aria-hidden="true">×</span>
          <span class="compat-axis-side">${escapeHtml(String(v2))}</span>
        </div>
        <p class="compat-axis-hint">${escapeHtml(axisHint(k, ax))}</p>
      </div>
    `;
  }).join('');

  return `
    <header class="compat-result-head">
      <p class="eyebrow">${escapeHtml(c.resultEyebrow)}</p>
      <h3 class="compat-pair-names">
        <span>${escapeHtml(name1)}</span>
        <span class="compat-pair-and" aria-hidden="true">×</span>
        <span>${escapeHtml(name2)}</span>
      </h3>
    </header>

    <div class="compat-summary">
      <div class="compat-overall">
        <span class="compat-overall-label">${escapeHtml(c.overallLabel)}</span>
        <span class="compat-overall-score">${overall}</span>
        <span class="compat-overall-band">${escapeHtml(band.label)}</span>
      </div>
      <div class="compat-radar-wrap">${renderRadar(axes, c.radarAria)}</div>
    </div>

    <div class="compat-axes">${axisRows}</div>

    <p class="compat-footnote">
      ${escapeHtml(c.footnote)}
    </p>

    <div id="compat-share-mount"></div>
  `;
}

export function bindCompatMode() {
  const results = document.getElementById('results');
  if (!results) return;

  document.getElementById('compat-card')?.remove();

  results.insertAdjacentHTML('beforeend', formHtml());

  const form = document.getElementById('compat-form');
  const nameInput  = document.getElementById('compat-name');
  const birthInput = document.getElementById('compat-birth');
  const resultEl   = document.getElementById('compat-result');

  if (birthInput) birthInput.max = localDateInputMax();

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name2 = (nameInput?.value || '').trim();
    const birth = birthInput?.value || '';
    if (!name2 || !birth) return;

    const [y, m, d] = birth.split('-').map(Number);
    if (!y || !m || !d) return;

    const me = getCurrentContext();
    if (!me) {
      console.warn('[compat] context not ready');
      return;
    }

    const result = computeCompat(
      { name: me.name, y: me.y, m: me.m, d: me.d },
      { name: name2,   y, m, d }
    );

    if (resultEl) {
      resultEl.hidden = false;
      resultEl.innerHTML = renderResult({ name1: me.name, name2, result });
      resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    mountCompatSharePanel({
      name1: me.name,
      name2,
      result
    });
  });
}
