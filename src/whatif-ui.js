/**
 * Feature 3: What if UI — 元の生年月日と変化させた生年月日を並列表示。
 *
 * ボタンプリセット(-1日/+1日/-1ヶ月/+1ヶ月/-1年/+1年/地球の裏側/カスタム)
 * 変わった軸だけハイライト
 */
import { snapshotByDate, diffSnapshots, shiftDate } from './whatif.js';
import { getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';
import { getCurrentContext } from './ui.js';

function renderSnapshotCard(snap, dateStr, labelText, isBase) {
  const rows = [
    ['Life Path', snap.lp],
    ['Personal Year', snap.py],
    ['Sun', snap.sun?.symbol + ' ' + snap.sun?.name],
    ['Zodiac', (snap.cz?.char ?? '') + ' ' + (snap.cz?.name ?? '')],
    ['Kyusei', snap.ks?.name],
    ['Five Elements', snap.gg?.element],
    ['Animal', snap.an?.name],
    ['Maya KIN', snap.mk?.kin],
    ['Tarot', snap.tb?.name],
    ['Celtic tree', snap.ct?.name]
  ];
  const rowHtml = rows.map(([label, value]) =>
    `<li class="wi-row"><span class="wi-row-label">${escapeHtml(label)}</span><span class="wi-row-value">${escapeHtml(String(value ?? '—'))}</span></li>`
  ).join('');
  return `
    <article class="wi-snap ${isBase ? 'is-base' : 'is-shift'}">
      <header class="wi-snap-head">
        <p class="wi-snap-title">${escapeHtml(labelText)}</p>
        <p class="wi-snap-date">${escapeHtml(dateStr)}</p>
      </header>
      <ul class="wi-list">${rowHtml}</ul>
    </article>
  `;
}

function highlightDiffs(section, diffs) {
  section.querySelectorAll('.wi-row').forEach(row => row.classList.remove('is-diff'));
  const changedLabels = new Set(diffs.map(d => d.label));
  const labelToRow = new Map();
  section.querySelectorAll('.wi-row').forEach(row => {
    const label = row.querySelector('.wi-row-label')?.textContent ?? '';
    labelToRow.set(label, row);
    // 簡易マッピング:label 部分一致で差分検出
    for (const changed of changedLabels) {
      const key = changed.split(' / ')[0].trim();
      if (label === key || label === changed) {
        row.classList.add('is-diff');
      }
    }
  });
}

function fmtDate(y, m, d) {
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

export function bindWhatIfMode() {
  const results = document.getElementById('results');
  if (!results) return;
  if (document.getElementById('wi-card')) return;

  const base = getCurrentContext();
  if (!base) return;

  const u = getUI().whatif ?? {};
  const section = document.createElement('section');
  section.className = 'wi-card';
  section.id = 'wi-card';
  section.innerHTML = `
    <header class="wi-head">
      <p class="eyebrow">WHAT IF</p>
      <h2 class="wi-title">${escapeHtml(u.title ?? 'もし別の日に生まれていたら?')}</h2>
      <p class="wi-lead">${escapeHtml(u.lead ?? '生年月日をずらしたら、19 体系の結果はどう変わる? 出生の偶発性を並べて見る。')}</p>
    </header>
    <nav class="wi-controls" aria-label="Shift controls">
      <button class="wi-btn" data-shift="-1 day">−1 day</button>
      <button class="wi-btn" data-shift="+1 day">+1 day</button>
      <button class="wi-btn" data-shift="-1 month">−1 month</button>
      <button class="wi-btn" data-shift="+1 month">+1 month</button>
      <button class="wi-btn" data-shift="-1 year">−1 year</button>
      <button class="wi-btn" data-shift="+1 year">+1 year</button>
      <button class="wi-btn wi-btn-emphasized" data-shift="antipode">${escapeHtml(u.antipode ?? '地球の裏側')}</button>
    </nav>
    <div class="wi-grid" id="wi-grid"></div>
    <p class="wi-diff-summary" id="wi-diff-summary"></p>
  `;

  const timeline = document.getElementById('tl-card');
  if (timeline) timeline.before(section);
  else results.appendChild(section);

  const grid = section.querySelector('#wi-grid');
  const summary = section.querySelector('#wi-diff-summary');

  function draw(shifted) {
    const baseSnap = snapshotByDate(base.y, base.m, base.d);
    const shiftSnap = snapshotByDate(shifted.y, shifted.m, shifted.d);
    const diffs = diffSnapshots(baseSnap, shiftSnap);

    grid.innerHTML = `
      ${renderSnapshotCard(baseSnap,  fmtDate(base.y, base.m, base.d),         u.base   ?? '元の日', true)}
      ${renderSnapshotCard(shiftSnap, fmtDate(shifted.y, shifted.m, shifted.d), u.shifted ?? '仮の日', false)}
    `;
    highlightDiffs(grid, diffs);
    const count = diffs.length;
    summary.textContent = count === 0
      ? (u.noDiff ?? 'この日付シフトでは、主要 14 軸に変化はありません。')
      : (u.diffTemplate ?? '{n} 軸が変わりました').replace('{n}', String(count));
  }

  draw(shiftDate(base.y, base.m, base.d, 'day', 1));

  section.querySelectorAll('[data-shift]').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.shift;
      let shifted;
      switch (s) {
        case '-1 day':   shifted = shiftDate(base.y, base.m, base.d, 'day',   -1); break;
        case '+1 day':   shifted = shiftDate(base.y, base.m, base.d, 'day',    1); break;
        case '-1 month': shifted = shiftDate(base.y, base.m, base.d, 'month', -1); break;
        case '+1 month': shifted = shiftDate(base.y, base.m, base.d, 'month',  1); break;
        case '-1 year':  shifted = shiftDate(base.y, base.m, base.d, 'year',  -1); break;
        case '+1 year':  shifted = shiftDate(base.y, base.m, base.d, 'year',   1); break;
        case 'antipode': shifted = shiftDate(base.y, base.m, base.d, 'antipode', 0); break;
      }
      draw(shifted);
    });
  });
}
