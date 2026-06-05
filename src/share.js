/**
 * SNS シェア用カードの生成と共有アクション。
 * 計算結果のスナップショットから画像・テキストを作る。
 */

import { getContent, getUI } from './i18n/index.js';
import { escapeHtml, copyToClipboard, showToast } from './util.js';

const CARD_W = 1080;
const CARD_H = 1350;

const COLORS = {
  bg0: '#06050f',
  bg1: '#14102a',
  bg2: '#221838',
  gold: '#f0d878',
  goldDim: '#c9a227',
  cream: '#ede4d4',
  muted: '#9a8fb8',
  purple: '#9b6fd4',
  rose: '#d4799a',
  border: 'rgba(201, 162, 39, 0.35)'
};

/* Canvas はクロスオリジン Web フォントで汚染されるためシステムフォントのみ */
const FONT_SERIF = '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif';
const FONT_DISPLAY = '"Hiragino Mincho ProN", "Yu Mincho", serif';

/**
 * シェア用に要約したデータ
 * @param {object} ctx — render() の currentContext
 */
export function buildShareSnapshot(ctx) {
  const { LIFE_PATH_MEANINGS } = getContent();
  const s = getUI().share;
  const lpInfo = LIFE_PATH_MEANINGS[ctx.lp];
  return {
    name: ctx.name,
    birth: s.birthDate(ctx.y, ctx.m, ctx.d),
    age: ctx.ls.years.toFixed(1),
    lp: ctx.lp,
    lpLabel: lpInfo.label,
    sun: `${ctx.sun.symbol} ${ctx.sun.name}`,
    zodiac: `${ctx.cz.char} ${ctx.cz.name}`,
    kyusei: ctx.ks.name,
    animal: ctx.an.name,
    tarot: ctx.tb.name,
    personalYear: ctx.py,
    moon: ctx.mp.name,
    year: ctx.currentYear,
    url: typeof window !== 'undefined' ? window.location.href.split('#')[0] : ''
  };
}

export function getShareTweetText(snap) {
  const s = getUI().share;
  const sep = s.tweetSep || ' | ';
  const lines = [
    s.tweetHeader,
    '',
    s.tweetStories(snap.name),
    `${s.tweetLifePath(snap.lp, snap.lpLabel)}${sep}${snap.sun}`,
    `${snap.zodiac}${sep}${snap.kyusei}${sep}${snap.animal}`,
    s.tweetTarot(snap.tarot),
    '',
    `${s.tweetPersonalYear(snap.year, snap.personalYear)}${sep}${s.tonightMoon(snap.moon)}`,
    '',
    s.tweetFooter,
    '#COSMICID'
  ];
  if (snap.url) lines.push(snap.url);
  return lines.join('\n');
}

function waitForFonts() {
  if (document.fonts?.load) {
    return Promise.all([
      document.fonts.load('400 48px ' + FONT_SERIF),
      document.fonts.load('300 56px ' + FONT_DISPLAY),
      document.fonts.ready
    ]).catch(() => undefined);
  }
  return Promise.resolve();
}

function roundRect(ctx, x, y, w, h, r) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

function drawBackground(ctx) {
  const g = ctx.createLinearGradient(0, 0, CARD_W, CARD_H);
  g.addColorStop(0, COLORS.bg0);
  g.addColorStop(0.45, COLORS.bg1);
  g.addColorStop(1, COLORS.bg2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const aurora = ctx.createRadialGradient(CARD_W * 0.2, 0, 0, CARD_W * 0.2, 0, CARD_W * 0.9);
  aurora.addColorStop(0, 'rgba(155, 111, 212, 0.22)');
  aurora.addColorStop(1, 'transparent');
  ctx.fillStyle = aurora;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const aurora2 = ctx.createRadialGradient(CARD_W * 0.85, CARD_H, 0, CARD_W * 0.85, CARD_H, CARD_W * 0.7);
  aurora2.addColorStop(0, 'rgba(212, 121, 154, 0.14)');
  aurora2.addColorStop(1, 'transparent');
  ctx.fillStyle = aurora2;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const stars = [
    [0.12, 0.18], [0.34, 0.42], [0.55, 0.12], [0.78, 0.28],
    [0.88, 0.55], [0.22, 0.72], [0.48, 0.85], [0.65, 0.38], [0.08, 0.48]
  ];
  stars.forEach(([sx, sy], i) => {
    ctx.beginPath();
    ctx.arc(sx * CARD_W, sy * CARD_H, i % 3 === 0 ? 2.2 : 1.2, 0, Math.PI * 2);
    ctx.fillStyle = i % 4 === 0 ? COLORS.gold : 'rgba(255,255,255,0.75)';
    ctx.fill();
  });
}

function drawFrame(ctx) {
  ctx.strokeStyle = COLORS.border;
  ctx.lineWidth = 2;
  roundRect(ctx, 48, 48, CARD_W - 96, CARD_H - 96, 28);
  ctx.stroke();

  const lg = ctx.createLinearGradient(48, 48, CARD_W - 48, 48);
  lg.addColorStop(0, 'transparent');
  lg.addColorStop(0.5, COLORS.gold);
  lg.addColorStop(1, 'transparent');
  ctx.strokeStyle = lg;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(120, 48);
  ctx.lineTo(CARD_W - 120, 48);
  ctx.stroke();
}

function drawStatBox(ctx, x, y, w, h, label, value, sub) {
  ctx.fillStyle = 'rgba(22, 18, 42, 0.72)';
  roundRect(ctx, x, y, w, h, 16);
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 162, 39, 0.2)';
  ctx.lineWidth = 1;
  roundRect(ctx, x, y, w, h, 16);
  ctx.stroke();

  ctx.font = `400 22px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.muted;
  ctx.textAlign = 'left';
  ctx.fillText(label, x + 24, y + 44);

  ctx.font = `500 36px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.gold;
  const valueLines = wrapText(ctx, value, w - 48, 36);
  valueLines.slice(0, 2).forEach((line, i) => {
    ctx.fillText(line, x + 24, y + 92 + i * 42);
  });

  if (sub) {
    ctx.font = `300 24px ${FONT_SERIF}`;
    ctx.fillStyle = COLORS.purple;
    ctx.fillText(sub, x + 24, y + h - 28);
  }
}

function wrapText(ctx, text, maxWidth, size) {
  ctx.font = `500 ${size}px ${FONT_SERIF}`;
  const chars = [...text];
  const lines = [];
  let line = '';
  for (const ch of chars) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * @param {ReturnType<typeof buildShareSnapshot>} snap
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function renderShareCardCanvas(snap) {
  await waitForFonts();
  const s = getUI().share;

  const canvas = document.createElement('canvas');
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  const ctx = canvas.getContext('2d');

  drawBackground(ctx);
  drawFrame(ctx);

  ctx.textAlign = 'center';

  ctx.font = `400 28px ${FONT_DISPLAY}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText(s.canvasPersonal, CARD_W / 2, 130);

  ctx.font = `300 52px ${FONT_DISPLAY}`;
  ctx.fillStyle = COLORS.gold;
  ctx.fillText('✦  COSMIC ID  ✦', CARD_W / 2, 200);

  ctx.font = `500 64px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.cream;
  const displayName = snap.name + (s.nameSuffix || '');
  const nameLines = wrapText(ctx, displayName, CARD_W - 160, 64);
  nameLines.forEach((line, i) => {
    ctx.fillText(line, CARD_W / 2, 300 + i * 72);
  });

  const nameOffset = nameLines.length * 72;
  ctx.font = `300 30px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText(s.bornLine(snap.birth, snap.age), CARD_W / 2, 320 + nameOffset);

  ctx.font = `400 34px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.gold;
  ctx.fillText(s.lifePathLine(snap.lp, snap.lpLabel), CARD_W / 2, 400 + nameOffset);

  const gridY = 480 + nameOffset;
  const colW = 440;
  const rowH = 168;
  const gap = 24;
  const left = 80;
  const stats = [
    [s.stats.sun, snap.sun, s.statPersonalYear(snap.year, snap.personalYear)],
    [s.stats.zodiac, snap.zodiac, ''],
    [s.stats.kyusei, snap.kyusei, ''],
    [s.stats.animal, snap.animal, ''],
    [s.stats.tarot, snap.tarot, s.statBirthCard],
    [s.stats.moon, snap.moon, '']
  ];

  stats.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    drawStatBox(
      ctx,
      left + col * (colW + gap),
      gridY + row * (rowH + gap),
      colW,
      rowH,
      item[0],
      item[1],
      item[2]
    );
  });

  const footerY = CARD_H - 120;
  ctx.font = `300 26px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText(s.canvasFooter, CARD_W / 2, footerY);

  ctx.font = `400 22px ${FONT_DISPLAY}`;
  ctx.fillStyle = COLORS.goldDim;
  let host = 'COSMIC ID';
  try {
    if (snap.url) host = new URL(snap.url).host;
  } catch { /* noop */ }
  ctx.fillText(host, CARD_W / 2, footerY + 40);

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
 * 結果表示後にシェア UI をマウント
 * @param {object} ctx — render() の currentContext
 */
export async function mountSharePanel(ctx) {
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
    <button type="button" class="share-preview-btn" id="share-preview-btn" aria-label="${s.previewAria}">
      <div class="share-preview-loading" id="share-preview-loading" aria-hidden="true">${s.loading}</div>
      <img id="share-preview-img" alt="${escapeHtml(s.previewAlt(ctx.name))}" width="270" height="338" loading="lazy" hidden>
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
      loading?.setAttribute('hidden', '');
    } catch (err) {
      console.error('Share card render failed:', err);
      loading.textContent = s.loadFail;
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
