/**
 * Feature 4: Star map UI — 結果画面に「Star map を見る」ボタン + モーダル表示 + ダウンロード。
 */
import { generateStarMap } from './starmap.js';
import { getUI, getLocale } from './i18n/index.js';
import { escapeHtml } from './util.js';
import { showToast } from './util.js';
import { getCurrentContext } from './ui.js';

/* ============================================================
 * SVG → PNG 変換(canvas 経由)
 * ============================================================ */

function svgToPngBlob(svgString, width = 1080, height = 1080) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    canvas.width = width; canvas.height = height;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      canvas.toBlob((b) => b ? resolve(b) : reject(new Error('PNG blob failed')), 'image/png');
    };
    img.onerror = (e) => { URL.revokeObjectURL(url); reject(new Error('SVG image load failed')); };
    img.src = url;
  });
}

function download(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function safeName(name) {
  return String(name || 'cosmic').replace(/[^\w぀-ヿ一-龯-]/g, '').slice(0, 16) || 'cosmic';
}

/* ============================================================
 * モーダル表示
 * ============================================================ */

let cachedSvg = null;

function openStarMapModal(ctx) {
  const u = getUI().starmap ?? {};
  cachedSvg = generateStarMap(ctx, { locale: getLocale() });

  const backdrop = document.createElement('div');
  backdrop.className = 'sm-backdrop';
  backdrop.innerHTML = `
    <div class="sm-modal" role="dialog" aria-labelledby="sm-title" aria-modal="true" tabindex="-1">
      <button type="button" class="sm-close" aria-label="${escapeHtml(u.close ?? 'Close')}">×</button>
      <div class="sm-frame">${cachedSvg}</div>
      <div class="sm-actions">
        <button class="sm-btn sm-btn-primary" data-sm-act="svg">${escapeHtml(u.downloadSVG ?? 'Download SVG')}</button>
        <button class="sm-btn"                data-sm-act="png">${escapeHtml(u.downloadPNG ?? 'Download PNG')}</button>
        <button class="sm-btn"                data-sm-act="print">${escapeHtml(u.print ?? 'Print')}</button>
      </div>
      <p class="sm-caption">${escapeHtml(u.caption ?? 'あなただけの星図。壁に飾るか、SNS に貼るか。')}</p>
    </div>
  `;
  document.body.appendChild(backdrop);
  document.body.style.overflow = 'hidden';
  backdrop.querySelector('.sm-modal').focus();

  function close() {
    backdrop.remove();
    document.body.style.overflow = '';
  }
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
  backdrop.querySelector('.sm-close').addEventListener('click', close);
  document.addEventListener('keydown', function onEsc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
  });

  backdrop.querySelectorAll('[data-sm-act]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const act = btn.dataset.smAct;
      const name = safeName(ctx.name);
      try {
        if (act === 'svg') {
          const blob = new Blob([cachedSvg], { type: 'image/svg+xml' });
          download(blob, `cosmic-id-starmap-${name}.svg`);
          showToast?.(u.saved ?? 'SVG を保存しました');
        } else if (act === 'png') {
          const blob = await svgToPngBlob(cachedSvg);
          download(blob, `cosmic-id-starmap-${name}.png`);
          showToast?.(u.saved ?? 'PNG を保存しました');
        } else if (act === 'print') {
          const w = window.open('', '_blank', 'width=1080,height=1080');
          w.document.write(`<!doctype html><html><head><title>Star map</title></head><body style="margin:0;background:#000">${cachedSvg}</body></html>`);
          w.document.close();
          setTimeout(() => w.print(), 300);
        }
      } catch (err) {
        console.error('starmap action failed:', err);
      }
    });
  });
}

/* ============================================================
 * 公開関数:結果画面に Star map ボタンをマウント
 * ============================================================ */

export function bindStarMap() {
  const results = document.getElementById('results');
  if (!results) return;
  if (document.getElementById('sm-cta')) return;

  const ctx = getCurrentContext();
  if (!ctx) return;

  const u = getUI().starmap ?? {};
  const wrap = document.createElement('div');
  wrap.id = 'sm-cta';
  wrap.className = 'sm-cta-wrap';
  wrap.innerHTML = `
    <button class="sm-cta-btn">
      <span class="sm-cta-icon" aria-hidden="true">✧</span>
      ${escapeHtml(u.ctaLabel ?? 'あなたの星図を見る')}
    </button>
  `;

  // ヒーローカードの直下に置く
  const hero = document.querySelector('.hero-card');
  if (hero) hero.after(wrap);
  else results.appendChild(wrap);

  wrap.querySelector('button').addEventListener('click', () => openStarMapModal(ctx));
}
