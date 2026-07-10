/**
 * SNS シェア用カード — Star Map × Tree of Life ビジュアル。
 * ベース画像の上に診断結果（LP・星座・名前・生年月日等）を重ねる。
 */

import { getContent, getUI, isJapaneseLocale } from './i18n/index.js';
import { escapeHtml, showToast } from './util.js';

/** ベース画像と同じ 9:16（576×1024 → 1080×1920） */
const CARD_W = 1080;
const CARD_H = 1920;

const FONT_SERIF = '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif';
const FONT_DISPLAY = '"Cormorant Garamond", "Hiragino Mincho ProN", "Yu Mincho", serif';
const FONT_SANS = '"Hiragino Sans", "Helvetica Neue", sans-serif';

const GOLD = '#e8c96a';
const GOLD_BRIGHT = '#f5e6b8';
const CREAM = 'rgba(245, 243, 238, 0.94)';
const MUTED = 'rgba(180, 170, 200, 0.85)';

/** 576×1024 基準の正規化座標 → 1080×1920 */
const LAYOUT = {
  lifePath: { cx: 0.5, cy: 0.278, w: 0.42, h: 0.16 },
  sunSign: { cx: 0.5, cy: 0.335, w: 0.28, h: 0.05 },
  leftBadge: { cx: 0.135, cy: 0.195, w: 0.14, h: 0.1 },
  rightBadge: { cx: 0.865, cy: 0.195, w: 0.14, h: 0.1 },
  name: { cx: 0.5, cy: 0.838, w: 0.88, h: 0.07 },
  date: { cx: 0.5, cy: 0.878, w: 0.65, h: 0.04 }
};

/** スター・マップ周辺の塗りつぶし色 */
const COVER_BG = '#12091f';

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

function layoutRect(key) {
  const r = LAYOUT[key];
  return {
    cx: r.cx * CARD_W,
    cy: r.cy * CARD_H,
    w: r.w * CARD_W,
    h: r.h * CARD_H
  };
}

/**
 * @param {object} ctx — render() の currentContext
 */
export function buildShareSnapshot(ctx) {
  const { LIFE_PATH_MEANINGS } = getContent();
  const lpInfo = LIFE_PATH_MEANINGS[ctx.lp];
  const roman = ctx.nameRoman?.trim();
  const displayName = (roman && /^[\x00-\x7F\s'.-]+$/.test(roman)) ? roman : ctx.name;
  const animalIdx = ((ctx.an?.num ?? 1) - 1) % 12;
  const mayaTone = ((ctx.my?.kin ?? 1) - 1) % 13 + 1;
  const tarotGlyph = firstGlyph(ctx.tb?.name ?? '');
  const animalGlyph = firstGlyph(ctx.an?.name ?? '');

  return {
    name: displayName,
    lp: ctx.lp,
    lpLabel: lpInfo?.label ?? '',
    sunName: ctx.sun?.name ?? '',
    y: ctx.y,
    m: ctx.m,
    d: ctx.d,
    leftGlyph: tarotGlyph,
    leftNum: mayaTone,
    rightGlyph: animalGlyph,
    rightNum: animalIdx,
    url: typeof window !== 'undefined' ? window.location.href.split('#')[0] : ''
  };
}

function firstGlyph(str) {
  const trimmed = String(str).trim();
  if (!trimmed) return '';
  if (/^[\x00-\x7F]/.test(trimmed)) return trimmed[0].toUpperCase();
  return [...trimmed][0] ?? '';
}

function formatShareDate(snap) {
  const pad = n => String(n).padStart(2, '0');
  if (isJapaneseLocale()) {
    return `${snap.y} · ${pad(snap.m)} · ${pad(snap.d)}`;
  }
  return `${snap.y} · ${pad(snap.m)} · ${pad(snap.d)}`;
}

function waitForFonts(timeoutMs = 2500) {
  const timeout = new Promise(resolve => setTimeout(resolve, timeoutMs));
  if (document.fonts?.ready) {
    return Promise.race([document.fonts.ready.catch(() => undefined), timeout]);
  }
  return timeout;
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

/** テンプレートの固定テキストを消す */
function paintRegionCover(ctx, cx, cy, w, h, feather = 40) {
  const x = cx - w / 2;
  const y = cy - h / 2;

  ctx.save();
  ctx.fillStyle = COVER_BG;
  ctx.shadowColor = COVER_BG;
  ctx.shadowBlur = feather;
  roundRectPath(ctx, x, y, w, h, 12);
  ctx.fill();
  ctx.shadowBlur = 0;
  roundRectPath(ctx, x + 6, y + 6, w - 12, h - 12, 8);
  ctx.fill();
  ctx.restore();

  const g = ctx.createRadialGradient(cx, cy, Math.min(w, h) * 0.2, cx, cy, Math.max(w, h) * 0.55);
  g.addColorStop(0, 'rgba(18, 9, 31, 0)');
  g.addColorStop(0.8, 'rgba(18, 9, 31, 0.5)');
  g.addColorStop(1, 'rgba(18, 9, 31, 0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.5, h * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawGoldText(ctx, text, cx, cy, size, weight = '300') {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${weight} ${size}px ${FONT_DISPLAY}`;
  ctx.shadowColor = 'rgba(232, 201, 106, 0.55)';
  ctx.shadowBlur = size * 0.12;
  const grad = ctx.createLinearGradient(cx, cy - size * 0.5, cx, cy + size * 0.5);
  grad.addColorStop(0, GOLD_BRIGHT);
  grad.addColorStop(1, GOLD);
  ctx.fillStyle = grad;
  ctx.fillText(text, cx, cy);
  ctx.restore();
}

function drawLifePath(ctx, snap) {
  const { cx, cy } = layoutRect('lifePath');
  const lpStr = String(snap.lp);
  const size = lpStr.length > 1 ? 148 : 196;
  drawGoldText(ctx, lpStr, cx, cy, size);
}

function drawSunSign(ctx, snap) {
  const { cx, cy } = layoutRect('sunSign');
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `500 34px ${FONT_SERIF}`;
  ctx.shadowColor = 'rgba(232, 201, 106, 0.45)';
  ctx.shadowBlur = 12;
  ctx.fillStyle = GOLD_BRIGHT;
  ctx.fillText(snap.sunName, cx, cy);
  ctx.restore();
}

function drawSideBadge(ctx, cx, cy, glyph, num) {
  paintRegionCover(ctx, cx, cy, 130, 110, 28);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.font = `400 36px ${FONT_SERIF}`;
  ctx.fillStyle = CREAM;
  ctx.fillText(glyph, cx, cy - 16);

  ctx.font = `300 28px ${FONT_DISPLAY}`;
  ctx.fillStyle = MUTED;
  ctx.fillText(String(num), cx, cy + 22);
}

function drawShareName(ctx, snap) {
  const { cx, cy } = layoutRect('name');
  const trimmed = String(snap.name).trim();
  const isLatin = /^[\x00-\x7F\s'.-]+$/.test(trimmed);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (isLatin) {
    ctx.font = `300 44px ${FONT_DISPLAY}`;
    ctx.fillStyle = CREAM;
    ctx.fillText(trimmed.toUpperCase(), cx, cy);
    return;
  }

  ctx.font = `400 52px ${FONT_SERIF}`;
  ctx.fillStyle = CREAM;
  ctx.fillText(trimmed, cx, cy);
}

function drawShareDate(ctx, snap) {
  const { cx, cy } = layoutRect('date');
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `300 26px ${FONT_SANS}`;
  ctx.fillStyle = MUTED;
  ctx.fillText(formatShareDate(snap), cx, cy);
}

function drawProceduralFallback(ctx) {
  const g = ctx.createLinearGradient(0, 0, 0, CARD_H);
  g.addColorStop(0, '#0a0614');
  g.addColorStop(0.45, '#140a22');
  g.addColorStop(1, '#080510');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, CARD_W, CARD_H);
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

  const lpR = layoutRect('lifePath');
  const sunR = layoutRect('sunSign');
  const nameR = layoutRect('name');
  const dateR = layoutRect('date');
  const leftR = layoutRect('leftBadge');
  const rightR = layoutRect('rightBadge');

  paintRegionCover(ctx, lpR.cx, lpR.cy, lpR.w, lpR.h);
  paintRegionCover(ctx, sunR.cx, sunR.cy, sunR.w, sunR.h, 24);
  paintRegionCover(ctx, leftR.cx, leftR.cy, leftR.w, leftR.h, 20);
  paintRegionCover(ctx, rightR.cx, rightR.cy, rightR.w, rightR.h, 20);
  paintRegionCover(ctx, nameR.cx, nameR.cy, nameR.w, nameR.h, 28);
  paintRegionCover(ctx, dateR.cx, dateR.cy, dateR.w, dateR.h, 20);

  drawLifePath(ctx, snap);
  drawSunSign(ctx, snap);
  drawSideBadge(ctx, leftR.cx, leftR.cy, snap.leftGlyph, snap.leftNum);
  drawSideBadge(ctx, rightR.cx, rightR.cy, snap.rightGlyph, snap.rightNum);
  drawShareName(ctx, snap);
  drawShareDate(ctx, snap);

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
  a.download = `cosmic-id-star-map-${safe}.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
}

/** Instagram 等へ画像ファイルを共有（Web Share API） */
export async function shareImageToInstagram(canvas) {
  const blob = await canvasToBlob(canvas);
  const file = new File([blob], 'cosmic-id-star-map.png', { type: 'image/png' });
  const payload = { files: [file] };
  if (navigator.canShare?.(payload)) {
    await navigator.share(payload);
    return true;
  }
  return false;
}

/**
 * @param {object} ctx — render() の currentContext
 */
export async function mountSharePanel(ctx) {
  const prev = document.getElementById('share-panel');
  if (prev) prev.remove();

  const s = getUI().share;
  const snap = buildShareSnapshot(ctx);

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
      <button type="button" class="share-preview-btn share-preview-btn--tall" id="share-preview-btn" aria-label="${s.previewAria}">
        <div class="share-preview-loading" id="share-preview-loading" aria-hidden="true">${s.loading}</div>
        <img id="share-preview-img" alt="${escapeHtml(s.previewAlt(ctx.name))}" width="216" height="384" loading="lazy" hidden>
        <span class="share-preview-hint">${s.previewHint}</span>
      </button>
      <div class="share-actions share-actions--instagram">
        <button type="button" class="share-btn share-btn-primary share-btn-instagram" data-share="instagram" id="share-instagram-btn">
          <span class="share-btn-icon" aria-hidden="true">◎</span>${s.shareInstagram}
        </button>
        <button type="button" class="share-btn" data-share="save">
          <span class="share-btn-icon" aria-hidden="true">↓</span>${s.save}
        </button>
      </div>
    </div>
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

  panel.querySelector('#share-preview-btn').addEventListener('click', async () => {
    const canvas = await ensureCanvas();
    openShareModal(canvas, ctx.name);
  });

  panel.querySelectorAll('[data-share]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.share;
      try {
        const canvas = await ensureCanvas();
        if (action === 'save') {
          downloadShareImage(canvas, ctx.name);
          showToast(s.saved);
        } else if (action === 'instagram') {
          const ok = await shareImageToInstagram(canvas);
          if (!ok) showToast(s.instagramUnsupported);
        }
      } catch (err) {
        showToast(err.message || s.shareFail);
      }
    });
  });
}

let shareModalTrigger = null;

function openShareModal(canvas, name) {
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

  modal.querySelectorAll('[data-share-modal]').forEach(btn => {
    btn.onclick = async () => {
      const action = btn.dataset.shareModal;
      try {
        if (action === 'save') {
          downloadShareImage(canvas, name);
          showToast(s.saved);
        } else if (action === 'instagram') {
          const ok = await shareImageToInstagram(canvas);
          if (!ok) showToast(s.instagramUnsupported);
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
}
