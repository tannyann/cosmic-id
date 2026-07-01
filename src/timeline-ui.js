/**
 * Feature 2: タイムライン SVG レンダラー。
 *
 * 100 年ぶんの人生を横スクロールで見せる。
 * レイヤー(上から):Life Milestones ドット / Personal Year 色帯 /
 * Biorhythm 4 波(拡大時のみ)/ 現在マーカー
 */
import { buildTimeline } from './timeline.js';
import { getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';
import { getCurrentContext } from './ui.js';

const DAY_MS = 86400000;
const CANVAS_H = 320;
const PX_PER_YEAR = 60; // 100 年 = 6000px

// Personal Year 番号ごとの色(視覚的に判別しやすいシーケンス)
const PY_COLORS = {
  1: '#e8b85e', 2: '#a8c8d8', 3: '#f0c878', 4: '#7da66d',
  5: '#a7c6d8', 6: '#d4799a', 7: '#9bb0d4', 8: '#8b7355', 9: '#9b6fd4'
};

/* ============================================================
 * SVG 全体の組み立て
 * ============================================================ */

function xAt(birth, date) {
  const days = (date - birth) / DAY_MS;
  return (days / 365.25) * PX_PER_YEAR;
}

function renderTimelineSvg(tl) {
  const totalW = tl.spanYears * PX_PER_YEAR;
  const H = CANVAS_H;

  // 背景グリッド(10 年ごとに縦線)
  const gridLines = Array.from({ length: tl.spanYears / 10 + 1 }, (_, i) => {
    const x = i * 10 * PX_PER_YEAR;
    return `
      <line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="rgba(201,162,39,0.15)" stroke-width="1"/>
      <text x="${x + 6}" y="14" fill="#8f84a8" font-size="10" font-family="serif">${i * 10}y</text>
    `;
  }).join('');

  // Personal Year 色帯(ページ上端 90-130px)
  const pyBands = tl.personalYears.map(band => {
    const x1 = xAt(tl.birth, band.start);
    const x2 = xAt(tl.birth, band.end);
    const w = Math.max(x2 - x1, 1);
    return `
      <rect x="${x1}" y="90" width="${w}" height="40"
            fill="${PY_COLORS[band.py]}" opacity="0.35"/>
      <text x="${x1 + w / 2}" y="115" fill="#ede4d4" font-size="11"
            text-anchor="middle" font-family="serif" opacity="0.85">${band.py}</text>
    `;
  }).join('');

  // Life Milestones(160-230px 帯)
  const milestones = tl.milestones.map(m => {
    const x = xAt(tl.birth, m.date);
    if (x < 0 || x > totalW) return '';
    const label = getUI().timeline?.[m.labelKey] ?? m.key;
    return `
      <g class="tl-milestone" data-key="${escapeHtml(m.key)}" data-age="${m.age}"
         data-date="${m.date.toISOString().slice(0,10)}" data-label="${escapeHtml(label)}">
        <line x1="${x}" y1="140" x2="${x}" y2="230" stroke="#e6cf93" stroke-width="1.2" opacity="0.6"/>
        <circle cx="${x}" cy="230" r="6" fill="#e6cf93" stroke="#f0d878" stroke-width="1"/>
        <text x="${x}" y="248" fill="#ede4d4" font-size="10" text-anchor="middle" font-family="serif" opacity="0.9">
          ${escapeHtml(String(m.age))}y
        </text>
      </g>
    `;
  }).join('');

  // 現在マーカー(TODAY)
  const todayX = xAt(tl.birth, tl.today);
  const todayMarker = `
    <g class="tl-today">
      <line x1="${todayX}" y1="60" x2="${todayX}" y2="${H - 20}"
            stroke="#f0d878" stroke-width="2" stroke-dasharray="4 4"/>
      <text x="${todayX + 6}" y="72" fill="#f0d878" font-size="12" font-family="serif" font-weight="600">
        ${escapeHtml(getUI().timeline?.today ?? 'TODAY')}
      </text>
    </g>
  `;

  // Biorhythm(現在±60日のみを高解像度描画)
  const bioStart = new Date(tl.today.getTime() - 60 * DAY_MS);
  const bioEnd   = new Date(tl.today.getTime() + 60 * DAY_MS);
  const bioSamples = tl.biorhythmSample(bioStart, bioEnd);
  const bioBaseY = 270;
  const bioAmp = 30;
  function bioPath(pick) {
    return bioSamples.map((s, i) => {
      const t = new Date(bioStart.getTime() + i * DAY_MS);
      const x = xAt(tl.birth, t);
      const y = bioBaseY - s[pick] * bioAmp;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join('');
  }
  const biorhythmLayer = `
    <g class="tl-biorhythm" opacity="0.85">
      <line x1="${xAt(tl.birth, bioStart)}" y1="${bioBaseY}" x2="${xAt(tl.birth, bioEnd)}" y2="${bioBaseY}" stroke="rgba(232,212,154,0.2)"/>
      <path d="${bioPath('physical')}"    fill="none" stroke="#d97a5e" stroke-width="1.2"/>
      <path d="${bioPath('emotional')}"   fill="none" stroke="#d4799a" stroke-width="1.2"/>
      <path d="${bioPath('intellectual')}" fill="none" stroke="#9b6fd4" stroke-width="1.2"/>
      <path d="${bioPath('intuitive')}"    fill="none" stroke="#7da6a6" stroke-width="1.2"/>
    </g>
  `;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="tl-svg" viewBox="0 0 ${totalW} ${H}" preserveAspectRatio="xMinYMid meet" style="width:${totalW}px;height:${H}px">
      ${gridLines}
      ${pyBands}
      ${milestones}
      ${biorhythmLayer}
      ${todayMarker}
    </svg>
  `;
}

/* ============================================================
 * 詳細ポップアップ(マイルストーン clicked 時)
 * ============================================================ */

function showMilestoneDetail(g) {
  const label = g.dataset.label;
  const age = g.dataset.age;
  const date = g.dataset.date;
  const u = getUI().timeline ?? {};
  const box = document.getElementById('tl-detail');
  if (!box) return;
  box.innerHTML = `
    <h4 class="tl-detail-title">${escapeHtml(label)}</h4>
    <p class="tl-detail-meta">
      <span>${escapeHtml(u.ageLabel ?? '年齢')}: ${escapeHtml(age)}</span>
      <span>${escapeHtml(u.dateLabel ?? '日付')}: ${escapeHtml(date)}</span>
    </p>
  `;
  box.removeAttribute('hidden');
}

/* ============================================================
 * 公開関数:結果画面末尾にタイムラインセクションをマウント
 * ============================================================ */

export function mountTimeline() {
  const results = document.getElementById('results');
  if (!results) return;
  if (document.getElementById('tl-card')) return;

  const ctx = getCurrentContext();
  if (!ctx) return;

  const u = getUI().timeline ?? {};
  const birth = new Date(ctx.y, ctx.m - 1, ctx.d);
  const tl = buildTimeline(birth);

  const section = document.createElement('section');
  section.className = 'tl-card';
  section.id = 'tl-card';
  section.setAttribute('aria-labelledby', 'tl-heading');
  section.innerHTML = `
    <header class="tl-head">
      <p class="eyebrow">TIMELINE</p>
      <h2 id="tl-heading" class="tl-title">${escapeHtml(u.sectionTitle ?? u.title ?? '100 年のあなたの時刻表')}</h2>
      <p class="tl-lead">${escapeHtml(u.sectionLead ?? u.lead ?? '個人年サイクル・人生の節目・バイオリズムを一枚にまとめました。ドラッグしてスクロール、マーカーで詳細。')}</p>
    </header>
    <div class="tl-scroll" tabindex="0">
      ${renderTimelineSvg(tl)}
    </div>
    <div class="tl-legend">
      <span class="tl-legend-item"><span class="tl-legend-swatch tl-legend-py"></span>${escapeHtml(u.legendPY ?? 'Personal Year')}</span>
      <span class="tl-legend-item"><span class="tl-legend-swatch tl-legend-ms"></span>${escapeHtml(u.legendMS ?? 'Life Milestones')}</span>
      <span class="tl-legend-item"><span class="tl-legend-swatch tl-legend-bio"></span>${escapeHtml(u.legendBio ?? 'Biorhythm (±60 days)')}</span>
    </div>
    <div class="tl-detail" id="tl-detail" hidden></div>
    <p class="tl-footnote">${escapeHtml(u.footnote ?? '未来の日付にドラッグすると、その頃のあなたを見られます。')}</p>
  `;

  // 恋愛・compat セクションの前に置く
  const love = document.getElementById('love-card');
  if (love) love.before(section);
  else results.appendChild(section);

  // スクロールを TODAY 位置に初期セット
  const scroller = section.querySelector('.tl-scroll');
  const todayX = xAt(tl.birth, tl.today);
  scroller.scrollLeft = Math.max(0, todayX - scroller.clientWidth / 2);

  // マイルストーンクリック → 詳細表示
  section.querySelectorAll('.tl-milestone').forEach(g => {
    g.style.cursor = 'pointer';
    g.addEventListener('click', () => showMilestoneDetail(g));
  });

  // ホイールで横スクロール(縦ホイールを横に変換)
  scroller.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
  }, { passive: false });
}
