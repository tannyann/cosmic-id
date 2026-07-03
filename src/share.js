/**
 * SNS シェア用カード — Tree of Life ビジュアル。
 * ベース画像の上にライフパス番号と名前を重ねる。
 */

import { getContent, getUI } from './i18n/index.js';
import { escapeHtml, copyToClipboard, showToast } from './util.js';

/** ベース画像と同じ 9:16 */
const CARD_W = 1080;
const CARD_H = 1920;

const FONT_SERIF = '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif';
const FONT_DISPLAY = '"Hiragino Mincho ProN", "Yu Mincho", serif';

/** 576×1024 基準 → 1080×1920 へのレイアウト定数 */
const LAYOUT = {
  numeral: { cx: 540, cy: 598, coverRx: 210, coverRy: 195 },
  name: { cx: 540, cy: 1788, coverRx: 500, coverRy: 72 }
};

let baseImagePromise = null;

function assetUrl(file) {
  const base = import.meta.env.BASE_URL || './';
  return `${base}${file}`;
}

function loadBaseImage() {
  if (!baseImagePromise) {
    baseImagePromise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('share-card-base'));
      img.src = assetUrl('share-card-base.png');
    });
  }
  return baseImagePromise;
}

/**
 * @param {object} ctx — render() の currentContext
 */
export function buildShareSnapshot(ctx) {
  const { LIFE_PATH_MEANINGS } = getContent();
  const lpInfo = LIFE_PATH_MEANINGS[ctx.lp];
  return {
    name: ctx.name,
    lp: ctx.lp,
    lpLabel: lpInfo?.label ?? '',
    url: typeof window !== 'undefined' ? window.location.href.split('#')[0] : ''
  };
}

export function getShareTweetText(snap) {
  const s = getUI().share;
  const lines = [
    s.tweetStories(snap.name),
    s.tweetLifePath(snap.lp, snap.lpLabel),
    '',
    s.tweetFooter,
    '#COSMICID'
  ];
  if (snap.url) lines.push(snap.url);
  return lines.join('\n');
}

function waitForFonts(timeoutMs = 2500) {
  const timeout = new Promise(resolve => setTimeout(resolve, timeoutMs));
  if (document.fonts?.ready) {
    return Promise.race([document.fonts.ready.catch(() => undefined), timeout]);
  }
  return timeout;
}

/** テンプレートの数字・名前を隠すソフトマスク */
function paintCover(ctx, cx, cy, rx, ry) {
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
  g.addColorStop(0, 'rgba(7, 10, 20, 0.97)');
  g.addColorStop(0.55, 'rgba(7, 10, 20, 0.88)');
  g.addColorStop(1, 'rgba(7, 10, 20, 0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();
}

/** 参照画像の「7」スタイルに近い単一数字 */
function drawStylizedSeven(ctx, cx, cy) {
  const scale = 1.15;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  // 上の横棒（白）
  ctx.fillStyle = '#f5f3ee';
  roundRectPath(ctx, -52, -78, 104, 18, 4);
  ctx.fill();

  // 縦の細い軸
  ctx.strokeStyle = '#f5f3ee';
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(38, -68);
  ctx.quadraticCurveTo(18, 10, 0, 62);
  ctx.stroke();

  // 先端の金色の滴
  ctx.beginPath();
  ctx.moveTo(0, 62);
  ctx.bezierCurveTo(-10, 78, 10, 78, 0, 62);
  ctx.fillStyle = '#d4af5a';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 72, 7, 0, Math.PI * 2);
  const drop = ctx.createRadialGradient(0, 68, 0, 0, 72, 10);
  drop.addColorStop(0, '#f0d878');
  drop.addColorStop(1, '#b8922e');
  ctx.fillStyle = drop;
  ctx.fill();

  ctx.restore();
}

function roundRectPath(ctx, x, y, w, h, r) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

/** 円形ハロー + ライフパス数字 */
function drawNumeralCrown(ctx, cx, cy, lp) {
  const lpStr = String(lp);
  const r = 112;

  const halo = ctx.createRadialGradient(cx, cy, r * 0.15, cx, cy, r * 1.25);
  halo.addColorStop(0, 'rgba(28, 24, 48, 0.55)');
  halo.addColorStop(0.6, 'rgba(12, 16, 32, 0.35)');
  halo.addColorStop(1, 'rgba(8, 12, 24, 0)');
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, r - 10, 0, Math.PI * 2);
  ctx.stroke();

  if (lpStr === '7') {
    drawStylizedSeven(ctx, cx, cy + 6);
    return;
  }

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const size = lpStr.length > 1 ? 86 : 118;
  ctx.font = `300 ${size}px ${FONT_DISPLAY}`;
  ctx.fillStyle = '#f5f3ee';
  ctx.fillText(lpStr, cx, cy + 6);

  ctx.beginPath();
  ctx.arc(cx, cy + (lpStr.length > 1 ? 52 : 58), 5, 0, Math.PI * 2);
  const dot = ctx.createRadialGradient(cx, cy + 54, 0, cx, cy + 56, 8);
  dot.addColorStop(0, '#f0d878');
  dot.addColorStop(1, '#b8922e');
  ctx.fillStyle = dot;
  ctx.fill();
}

/** 底部の名前 — ラテンは字間広げ、CJK はそのまま */
function drawShareName(ctx, cx, y, name) {
  const trimmed = String(name).trim();
  const isLatin = /^[\x00-\x7F\s'.-]+$/.test(trimmed);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (isLatin) {
    const spaced = trimmed.toUpperCase().split('').join('  ');
    ctx.font = `300 46px ${FONT_DISPLAY}`;
    ctx.fillStyle = 'rgba(245, 243, 238, 0.94)';
    ctx.fillText(spaced, cx, y);
    return;
  }

  ctx.font = `400 54px ${FONT_SERIF}`;
  ctx.fillStyle = 'rgba(245, 243, 238, 0.94)';
  ctx.fillText(trimmed, cx, y);
}

function drawProceduralFallback(ctx) {
  const g = ctx.createLinearGradient(0, 0, 0, CARD_H);
  g.addColorStop(0, '#060a14');
  g.addColorStop(0.5, '#0c1224');
  g.addColorStop(1, '#080c18');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const stars = [
    [0.12, 0.08], [0.34, 0.15], [0.55, 0.06], [0.78, 0.12],
    [0.88, 0.22], [0.22, 0.28], [0.48, 0.18], [0.65, 0.1]
  ];
  stars.forEach(([sx, sy], i) => {
    ctx.beginPath();
    ctx.arc(sx * CARD_W, sy * CARD_H, i % 2 ? 1.5 : 2.2, 0, Math.PI * 2);
    ctx.fillStyle = i % 3 === 0 ? 'rgba(240, 216, 120, 0.8)' : 'rgba(255,255,255,0.6)';
    ctx.fill();
  });
}

/**
 * @param {ReturnType<typeof buildShareSnapshot>} snap
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function renderShareCardCanvas(snap) {
  await waitForFonts();

  const canvas = document.createElement('canvas');
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  const ctx = canvas.getContext('2d');

  try {
    const img = await loadBaseImage();
    ctx.drawImage(img, 0, 0, CARD_W, CARD_H);
  } catch {
    drawProceduralFallback(ctx);
  }

  const { numeral, name } = LAYOUT;
  paintCover(ctx, numeral.cx, numeral.cy, numeral.coverRx, numeral.coverRy);
  paintCover(ctx, name.cx, name.cy, name.coverRx, name.coverRy);

  drawNumeralCrown(ctx, numeral.cx, numeral.cy, snap.lp);
  drawShareName(ctx, name.cx, name.cy, snap.name);

  return canvas;
}

export function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    const msg = getUI().share.imageFail;
    canvas.toBlob(b => (b ? resolve(b) : reject(new Error(msg))), 'image/png');
  });
}

export function downloadShareImage(canvas, name) {
  const safe = name.replace(/[^\w\u3040-\u30ff\u4e00-\u9faf]/g, '') || 'cosmic';
  const a = document.createElement('a');
  a.download = `cosmic-id-${safe}.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
}

export function openTwitterShare(text) {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer,width=550,height=420');
}

export function openLineShare(pageUrl) {
  const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(pageUrl)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export async function copyShareText(text) {
  const ok = await copyToClipboard(text);
  if (!ok) throw new Error(getUI().share.copyFail);
}

export async function nativeShareImage(canvas, snap) {
  const blob = await canvasToBlob(canvas);
  const file = new File([blob], 'cosmic-id-share.png', { type: 'image/png' });
  const payload = {
    title: 'COSMIC ID',
    text: getShareTweetText(snap),
    files: [file]
  };
  if (navigator.canShare?.(payload)) {
    await navigator.share(payload);
    return true;
  }
  const textOnly = { title: 'COSMIC ID', text: getShareTweetText(snap), url: snap.url };
  if (navigator.canShare?.(textOnly)) {
    await navigator.share(textOnly);
    return true;
  }
  return false;
}

/**
 * @param {object} ctx — render() の currentContext
 * @param {{ narrativePromise?: Promise<import('./narrative.js').NarrativeResult> }} [opts]
 */
export async function mountSharePanel(ctx, opts = {}) {
  const prev = document.getElementById('share-panel');
  if (prev) prev.remove();

  const s = getUI().share;
  const snap = buildShareSnapshot(ctx);
  const tweetText = getShareTweetText(snap);

  const panel = document.createElement('section');
  panel.id = 'share-panel';
  panel.className = 'share-panel';
  panel.setAttribute('aria-label', s.panelTitle);
  panel.innerHTML = `
    <div class="share-panel-head">
      <h2 class="share-panel-title">${s.panelTitle}</h2>
      <p class="share-panel-desc">${s.panelDesc}</p>
      ${s.panelSteps ? `<p class="share-panel-steps">${s.panelSteps}</p>` : ''}
    </div>
    <div class="share-panel-block">
      <h3 class="share-block-title">${escapeHtml(s.cardSectionTitle ?? s.panelTitle)}</h3>
      <button type="button" class="share-preview-btn share-preview-btn--tall" id="share-preview-btn" aria-label="${s.previewAria}">
        <div class="share-preview-loading" id="share-preview-loading" aria-hidden="true">${s.loading}</div>
        <img id="share-preview-img" alt="${escapeHtml(s.previewAlt(ctx.name))}" width="216" height="384" loading="lazy" hidden>
        <span class="share-preview-hint">${s.previewHint}</span>
      </button>
      <div class="share-actions">
        <button type="button" class="share-btn share-btn-primary" data-share="save">
          <span class="share-btn-icon" aria-hidden="true">↓</span>${s.save}
        </button>
        <button type="button" class="share-btn" data-share="native" id="share-native-btn" hidden>
          ${s.shareNative}
        </button>
        <button type="button" class="share-btn" data-share="x">X</button>
        <button type="button" class="share-btn" data-share="line">LINE</button>
        <button type="button" class="share-btn" data-share="copy">${s.copy}</button>
      </div>
    </div>
    <div id="share-panel-instagram-mount"></div>
  `;

  const hero = document.querySelector('.hero-card');
  if (hero) hero.after(panel);

  let canvasCache = null;

  async function ensureCanvas() {
    if (!canvasCache) canvasCache = await renderShareCardCanvas(snap);
    return canvasCache;
  }

  async function refreshPreview() {
    const img = panel.querySelector('#share-preview-img');
    const loading = panel.querySelector('#share-preview-loading');
    loading?.removeAttribute('hidden');
    img?.setAttribute('hidden', '');
    try {
      const canvas = await ensureCanvas();
      img.src = canvas.toDataURL('image/png');
      img.removeAttribute('hidden');
      if (loading) loading.hidden = true;
    } catch (err) {
      console.error('Share card render failed:', err);
      if (loading) {
        loading.textContent = s.loadFail;
        loading.hidden = false;
      }
      showToast(s.imageFail);
    }
  }

  await refreshPreview();

  const canNative = typeof navigator.share === 'function';
  const nativeBtn = panel.querySelector('#share-native-btn');
  if (canNative) nativeBtn.hidden = false;

  panel.querySelector('#share-preview-btn').addEventListener('click', async () => {
    const canvas = await ensureCanvas();
    openShareModal(canvas, snap, tweetText);
  });

  panel.querySelectorAll('[data-share]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.share;
      try {
        const canvas = await ensureCanvas();
        if (action === 'save') {
          downloadShareImage(canvas, ctx.name);
          showToast(s.saved);
        } else if (action === 'x') {
          openTwitterShare(tweetText);
        } else if (action === 'line') {
          openLineShare(snap.url || window.location.href);
        } else if (action === 'copy') {
          await copyShareText(tweetText);
          showToast(s.copied);
        } else if (action === 'native') {
          const ok = await nativeShareImage(canvas, snap);
          if (!ok) showToast(s.nativeUnsupported);
        }
      } catch (err) {
        showToast(err.message || s.shareFail);
      }
    });
  });

  const igMount = panel.querySelector('#share-panel-instagram-mount');
  if (igMount && opts.narrativePromise) {
    const { renderNarrativeShareHtml, mountNarrativeShareSection } = await import('./narrativeShare.js');
    igMount.innerHTML = renderNarrativeShareHtml();
    opts.narrativePromise
      .then(narrative => mountNarrativeShareSection(panel, ctx, narrative))
      .catch(err => {
        console.error('Instagram share section:', err);
        const loading = panel.querySelector('#narrative-share-loading');
        if (loading) loading.textContent = getUI().narrativeShare.loadFail;
      });
  }
}

let shareModalTrigger = null;

function openShareModal(canvas, snap, tweetText) {
  const s = getUI().share;
  const modal = document.getElementById('share-modal');
  const img = document.getElementById('share-modal-img');
  if (!modal || !img) return;
  img.src = canvas.toDataURL('image/png');
  shareModalTrigger = document.activeElement;
  modal.removeAttribute('hidden');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.querySelector('.container')?.setAttribute('inert', '');

  const nativeModal = document.getElementById('share-modal-native');
  if (nativeModal) nativeModal.hidden = typeof navigator.share !== 'function';

  modal.querySelectorAll('[data-share-modal]').forEach(btn => {
    btn.onclick = async () => {
      const action = btn.dataset.shareModal;
      try {
        if (action === 'save') {
          downloadShareImage(canvas, snap.name);
          showToast(s.saved);
        } else if (action === 'x') {
          openTwitterShare(tweetText);
        } else if (action === 'line') {
          openLineShare(snap.url || window.location.href);
        } else if (action === 'copy') {
          await copyShareText(tweetText);
          showToast(s.copied);
        } else if (action === 'native') {
          await nativeShareImage(canvas, snap);
        }
      } catch (err) {
        showToast(err.message || s.shareFail);
      }
    };
  });

  const shareDialog = document.getElementById('share-modal-dialog');
  if (shareDialog) shareDialog.focus();
  else document.getElementById('share-modal-close')?.focus();
}

export function closeShareModal() {
  const modal = document.getElementById('share-modal');
  if (!modal?.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('hidden', '');
  document.querySelector('.container')?.removeAttribute('inert');
  if (!document.getElementById('modal')?.classList.contains('open')) {
    document.body.style.overflow = '';
  }
  shareModalTrigger?.focus();
  shareModalTrigger = null;
}

export function bindShareModalEvents() {
  const modal = document.getElementById('share-modal');
  if (!modal) return;
  document.getElementById('share-modal-close')?.addEventListener('click', closeShareModal);
  modal.addEventListener('click', e => {
    if (e.target.id === 'share-modal') closeShareModal();
  });
  const nativeModal = document.getElementById('share-modal-native');
  if (nativeModal && typeof navigator.share !== 'function') {
    nativeModal.hidden = true;
  }
}
