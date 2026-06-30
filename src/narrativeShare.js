/**
 * 統合ナラティブ用 Instagram シェアカード（1080×1350 · 4:5）
 */
import { getUI } from './i18n/index.js';
import { copyToClipboard, escapeHtml, showToast } from './util.js';
import { canvasToBlob, downloadShareImage } from './share.js';

const CARD_W = 1080;
const CARD_H = 1350;
const FONT = '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif';

const COLORS = {
  bg0: '#04030a',
  bg1: '#14102a',
  gold: '#f0d878',
  cream: '#ebe3d0',
  muted: '#8f84a8',
  purple: '#a67fd8',
  border: 'rgba(184, 149, 46, 0.35)'
};

function waitForFonts(timeoutMs = 2500) {
  const timeout = new Promise(resolve => setTimeout(resolve, timeoutMs));
  if (document.fonts?.ready) {
    return Promise.race([document.fonts.ready.catch(() => undefined), timeout]);
  }
  return timeout;
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

function wrapText(ctx, text, maxWidth, size, maxLines = 12) {
  ctx.font = `300 ${size}px ${FONT}`;
  const chars = [...text];
  const lines = [];
  let line = '';
  for (const ch of chars) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = ch;
      if (lines.length >= maxLines) break;
    } else {
      line = test;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines && line !== lines[lines.length - 1]) {
    const last = lines[lines.length - 1];
    lines[lines.length - 1] = last.length > 3 ? `${last.slice(0, -1)}…` : `${last}…`;
  }
  return lines;
}

/**
 * @param {object} ctx
 * @param {{ hook: string, paragraphs: string[] }} narrative
 */
export async function renderNarrativeInstagramCanvas(ctx, narrative) {
  await waitForFonts();
  const s = getUI().narrativeShare;
  const canvas = document.createElement('canvas');
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  const c = canvas.getContext('2d');

  const g = c.createLinearGradient(0, 0, CARD_W, CARD_H);
  g.addColorStop(0, COLORS.bg0);
  g.addColorStop(0.55, COLORS.bg1);
  g.addColorStop(1, '#1a1230');
  c.fillStyle = g;
  c.fillRect(0, 0, CARD_W, CARD_H);

  const aurora = c.createRadialGradient(CARD_W * 0.2, 0, 0, CARD_W * 0.2, 0, CARD_W);
  aurora.addColorStop(0, 'rgba(166, 127, 216, 0.28)');
  aurora.addColorStop(1, 'transparent');
  c.fillStyle = aurora;
  c.fillRect(0, 0, CARD_W, CARD_H);

  c.strokeStyle = COLORS.border;
  c.lineWidth = 2;
  roundRect(c, 56, 56, CARD_W - 112, CARD_H - 112, 32);
  c.stroke();

  c.textAlign = 'center';
  c.font = `400 26px ${FONT}`;
  c.fillStyle = COLORS.muted;
  c.fillText(s.canvasEyebrow, CARD_W / 2, 130);

  c.font = `300 48px ${FONT}`;
  c.fillStyle = COLORS.gold;
  c.fillText('✦  COSMIC ID  ✦', CARD_W / 2, 195);

  const suffix = s.nameSuffix ?? '';
  c.font = `500 56px ${FONT}`;
  c.fillStyle = COLORS.cream;
  const nameLines = wrapText(c, ctx.name + suffix, CARD_W - 140, 56, 2);
  nameLines.forEach((line, i) => c.fillText(line, CARD_W / 2, 280 + i * 64));

  const nameH = nameLines.length * 64;
  c.font = `500 38px ${FONT}`;
  c.fillStyle = COLORS.gold;
  const hookLines = wrapText(c, narrative.hook, CARD_W - 120, 38, 3);
  hookLines.forEach((line, i) => c.fillText(line, CARD_W / 2, 320 + nameH + i * 50));

  const hookH = hookLines.length * 50;
  const bodyY = 360 + nameH + hookH;
  const bodyText = narrative.paragraphs.slice(0, 3).join(' ');
  c.textAlign = 'left';
  c.font = `300 30px ${FONT}`;
  c.fillStyle = COLORS.cream;
  const bodyLines = wrapText(c, bodyText, CARD_W - 160, 30, 14);
  bodyLines.forEach((line, i) => c.fillText(line, 80, bodyY + i * 44));

  const statsY = CARD_H - 220;
  c.textAlign = 'center';
  c.font = `400 24px ${FONT}`;
  c.fillStyle = COLORS.muted;
  const stats = s.statsLine(ctx);
  wrapText(c, stats, CARD_W - 120, 24, 2).forEach((line, i) => {
    c.fillText(line, CARD_W / 2, statsY + i * 32);
  });

  c.font = `300 22px ${FONT}`;
  c.fillStyle = COLORS.purple;
  c.fillText(s.canvasFooter, CARD_W / 2, CARD_H - 100);

  c.font = `400 20px ${FONT}`;
  c.fillStyle = COLORS.gold;
  c.fillText('#COSMICID', CARD_W / 2, CARD_H - 68);

  return canvas;
}

export async function shareNarrativeToInstagram(canvas, caption) {
  const s = getUI().narrativeShare;
  const blob = await canvasToBlob(canvas);
  const file = new File([blob], 'cosmic-id-narrative.png', { type: 'image/png' });
  const payload = { title: 'COSMIC ID', text: caption, files: [file] };
  if (navigator.canShare?.(payload)) {
    await navigator.share(payload);
    return true;
  }
  return false;
}

export async function mountNarrativeShareActions(panel, ctx, narrative) {
  const s = getUI().narrativeShare;
  let canvasCache = null;

  async function ensureCanvas() {
    if (!canvasCache) {
      canvasCache = await renderNarrativeInstagramCanvas(ctx, narrative);
    }
    return canvasCache;
  }

  const preview = panel.querySelector('#narrative-share-preview');
  const loading = panel.querySelector('#narrative-share-loading');

  try {
    const canvas = await ensureCanvas();
    if (preview) {
      preview.src = canvas.toDataURL('image/png');
      preview.hidden = false;
    }
    if (loading) loading.hidden = true;
  } catch (err) {
    console.error('Narrative share card:', err);
    if (loading) loading.textContent = s.loadFail;
    showToast(s.imageFail);
    return;
  }

  const nativeBtn = panel.querySelector('[data-narrative-share="native"]');
  if (nativeBtn && typeof navigator.share === 'function') {
    nativeBtn.hidden = false;
  }

  panel.querySelector('#narrative-share-preview-btn')?.addEventListener('click', async () => {
    const canvas = await ensureCanvas();
    downloadShareImage(canvas, ctx.name);
    showToast(s.saved);
  });

  panel.querySelectorAll('[data-narrative-share]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.narrativeShare;
      try {
        const canvas = await ensureCanvas();
        if (action === 'save') {
          downloadShareImage(canvas, `${ctx.name}-narrative`);
          showToast(s.saved);
        } else if (action === 'caption') {
          const ok = await copyToClipboard(narrative.caption);
          if (!ok) throw new Error(s.copyFail);
          showToast(s.captionCopied);
        } else if (action === 'native') {
          const ok = await shareNarrativeToInstagram(canvas, narrative.caption);
          if (!ok) showToast(s.nativeUnsupported);
        }
      } catch (err) {
        showToast(err.message || s.shareFail);
      }
    });
  });
}

export function renderNarrativeShareHtml(narrative) {
  const s = getUI().narrativeShare;
  return `
    <div class="narrative-share" id="narrative-share">
      <h3 class="narrative-share-title">${escapeHtml(s.panelTitle)}</h3>
      <p class="narrative-share-desc">${escapeHtml(s.panelDesc)}</p>
      <p class="narrative-share-steps">${escapeHtml(s.instagramSteps)}</p>
      <button type="button" class="narrative-share-preview-btn" id="narrative-share-preview-btn">
        <div class="narrative-share-loading" id="narrative-share-loading">${escapeHtml(s.loading)}</div>
        <img id="narrative-share-preview" class="narrative-share-preview-img" alt="" width="216" height="270" hidden>
        <span class="narrative-share-preview-hint">${escapeHtml(s.previewHint)}</span>
      </button>
      <div class="narrative-share-actions">
        <button type="button" class="share-btn share-btn-primary share-btn-instagram" data-narrative-share="save">
          <span class="share-btn-icon" aria-hidden="true">◎</span>${escapeHtml(s.saveInstagram)}
        </button>
        <button type="button" class="share-btn" data-narrative-share="caption">${escapeHtml(s.copyCaption)}</button>
        <button type="button" class="share-btn" data-narrative-share="native" hidden>${escapeHtml(s.shareNative)}</button>
      </div>
    </div>`;
}
