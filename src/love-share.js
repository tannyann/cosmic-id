/**
 * 恋愛診断シェアカード(縦長 1080×1350、Instagram Story / X 縦長対応)
 *
 * 中央に大きく「アーケタイプ名」+ キャッチ、
 * 下部に「今のフェーズ」と「ライフパス / 太陽星座」を添える。
 *
 * Canvas は CORS 汚染回避でシステムフォントのみ。
 */
import { copyToClipboard, showToast, escapeHtml } from './util.js';
import { getUI } from './i18n/index.js';

const CARD_W = 1080;
const CARD_H = 1350;

function waitForFonts(timeoutMs = 2500) {
  const timeout = new Promise(resolve => setTimeout(resolve, timeoutMs));
  if (document.fonts?.ready) {
    return Promise.race([document.fonts.ready.catch(() => undefined), timeout]);
  }
  return timeout;
}

const FONT = '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif';

const COLORS = {
  bg0: '#06050f',
  bg1: '#14102a',
  bg2: '#1f1336',
  gold: '#f0d878',
  goldDim: '#c9a227',
  cream: '#ede4d4',
  muted: '#9a8fb8',
  rose: '#d4799a',
  purple: '#9b6fd4',
  border: 'rgba(232, 212, 154, 0.32)'
};

/* ---- 描画ヘルパー ---- */

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

function drawBackground(ctx, accent) {
  const g = ctx.createLinearGradient(0, 0, CARD_W, CARD_H);
  g.addColorStop(0, COLORS.bg0);
  g.addColorStop(0.5, COLORS.bg1);
  g.addColorStop(1, COLORS.bg2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  // アーケタイプ色のオーロラ
  const a1 = ctx.createRadialGradient(CARD_W * 0.3, CARD_H * 0.3, 0, CARD_W * 0.3, CARD_H * 0.3, CARD_W * 0.8);
  a1.addColorStop(0, hexA(accent, 0.35));
  a1.addColorStop(1, 'transparent');
  ctx.fillStyle = a1;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const a2 = ctx.createRadialGradient(CARD_W * 0.8, CARD_H * 0.85, 0, CARD_W * 0.8, CARD_H * 0.85, CARD_W * 0.7);
  a2.addColorStop(0, 'rgba(212, 121, 154, 0.18)');
  a2.addColorStop(1, 'transparent');
  ctx.fillStyle = a2;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  // 星
  const stars = [
    [0.12, 0.16], [0.36, 0.34], [0.58, 0.12], [0.82, 0.26],
    [0.88, 0.6], [0.22, 0.74], [0.5, 0.85], [0.7, 0.42], [0.08, 0.5]
  ];
  stars.forEach(([sx, sy], i) => {
    ctx.beginPath();
    ctx.arc(sx * CARD_W, sy * CARD_H, i % 3 === 0 ? 2.2 : 1.2, 0, Math.PI * 2);
    ctx.fillStyle = i % 4 === 0 ? COLORS.gold : 'rgba(255,255,255,0.75)';
    ctx.fill();
  });
}

function hexA(hex, alpha) {
  // #RRGGBB → rgba(R,G,B,alpha)
  if (!hex || hex[0] !== '#' || hex.length < 7) return `rgba(155,111,212,${alpha})`;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
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

function wrapText(ctx, text, maxWidth, size, weight = 500) {
  ctx.font = `${weight} ${size}px ${FONT}`;
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

/* ---- カード本体 ---- */

async function renderLoveCardCanvas({ name, result, ctx: birthCtx }) {
  await waitForFonts();

  const canvas = document.createElement('canvas');
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  const ctx = canvas.getContext('2d');

  const { archetype, phase } = result;

  drawBackground(ctx, archetype.color);
  drawFrame(ctx);

  ctx.textAlign = 'center';

  // ヘッダー
  ctx.font = `400 26px ${FONT}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText('Love Archetype', CARD_W / 2, 130);

  ctx.font = `300 48px ${FONT}`;
  ctx.fillStyle = COLORS.gold;
  ctx.fillText('✦ COSMIC ID ✦', CARD_W / 2, 200);

  // 名前(任意で表示)
  ctx.font = `400 32px ${FONT}`;
  ctx.fillStyle = COLORS.cream;
  ctx.fillText('恋愛診断', CARD_W / 2, 280);

  // アーケタイプ シンボル(大)
  ctx.font = `300 200px ${FONT}`;
  ctx.fillStyle = archetype.color;
  ctx.fillText(archetype.icon, CARD_W / 2, 530);

  // No.
  ctx.font = `300 24px ${FONT}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText(`No. ${archetype.id}`, CARD_W / 2, 600);

  // アーケタイプ名
  const nameLines = wrapText(ctx, archetype.name, CARD_W - 200, 84, 500);
  ctx.font = `500 84px ${FONT}`;
  ctx.fillStyle = COLORS.cream;
  nameLines.slice(0, 2).forEach((line, i) => {
    ctx.fillText(line, CARD_W / 2, 690 + i * 100);
  });

  // キャッチ
  const offsetCatch = (nameLines.length - 1) * 100;
  ctx.font = `400 34px ${FONT}`;
  ctx.fillStyle = archetype.color;
  ctx.fillText(archetype.catch, CARD_W / 2, 780 + offsetCatch);

  // フェーズボックス
  const boxY = 880 + offsetCatch;
  roundRect(ctx, 120, boxY, CARD_W - 240, 160, 18);
  ctx.fillStyle = 'rgba(22, 18, 42, 0.7)';
  ctx.fill();
  ctx.strokeStyle = COLORS.border;
  ctx.lineWidth = 1;
  roundRect(ctx, 120, boxY, CARD_W - 240, 160, 18);
  ctx.stroke();

  ctx.font = `400 22px ${FONT}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText('今の恋愛フェーズ', CARD_W / 2, boxY + 50);

  ctx.font = `500 38px ${FONT}`;
  ctx.fillStyle = COLORS.gold;
  ctx.fillText(phase.label, CARD_W / 2, boxY + 105);

  // メタ情報(下部)
  ctx.font = `400 22px ${FONT}`;
  ctx.fillStyle = COLORS.muted;
  const meta = `${birthCtx.sun?.symbol ?? ''} ${birthCtx.sun?.name ?? ''}  ·  Life Path ${birthCtx.lp}`;
  ctx.fillText(meta, CARD_W / 2, CARD_H - 160);

  // フッター
  ctx.font = `300 22px ${FONT}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText('恋の物語は、あなたの手で書かれていく', CARD_W / 2, CARD_H - 110);

  ctx.font = `400 20px ${FONT}`;
  ctx.fillStyle = COLORS.goldDim;
  let host = 'COSMIC ID';
  try { host = new URL(location.href).host; } catch {}
  ctx.fillText(host, CARD_W / 2, CARD_H - 75);

  return canvas;
}

/* ---- シェアテキスト ---- */

function tweetText({ name, result }) {
  const url = typeof window !== 'undefined'
    ? location.href.split('?')[0].split('#')[0]
    : '';
  return [
    `${name} の COSMIC ID 恋愛タイプ`,
    `${result.archetype.icon} ${result.archetype.name} — ${result.archetype.catch}`,
    `今は「${result.phase.label}」`,
    '',
    'あなたの愛のかたちを読み解く →',
    url,
    '#COSMICID #恋愛タイプ'
  ].filter(Boolean).join('\n');
}

function safeFilename(name) {
  const safe = name.replace(/[^\w぀-ヿ一-龯\-]/g, '').slice(0, 16);
  return `cosmic-id-love-${safe}.png`;
}

/* ---- 公開関数:シェアパネルマウント ---- */

export async function mountLoveSharePanel({ name, result, ctx: birthCtx }) {
  const mount = document.getElementById('love-share-mount');
  if (!mount) return;

  const love = getUI().love;
  const share = getUI().share;

  mount.innerHTML = `
    <div class="share-panel love-share-panel" aria-label="${escapeHtml(love.shareTitle)}">
      <div class="share-panel-head">
        <h3 class="share-panel-title">${escapeHtml(love.shareTitle)}</h3>
        <p class="share-panel-desc">${escapeHtml(love.shareDesc)}</p>
      </div>
      <button type="button" class="share-preview-btn" id="love-share-preview" aria-label="${escapeHtml(love.sharePreviewAria)}">
        <div class="share-preview-loading" id="love-share-loading">${escapeHtml(share.loading)}</div>
        <img id="love-share-img" alt="${escapeHtml(love.shareAlt(name))}" width="270" height="338" hidden>
      </button>
      <div class="share-actions">
        <button type="button" class="share-btn share-btn-primary" data-love-share="save">
          <span aria-hidden="true">↓</span> ${escapeHtml(share.save)}
        </button>
        <button type="button" class="share-btn" data-love-share="x">X</button>
        <button type="button" class="share-btn" data-love-share="line">LINE</button>
        <button type="button" class="share-btn" data-love-share="copy">${escapeHtml(share.copy)}</button>
      </div>
    </div>
  `;

  let canvas;
  const loading = mount.querySelector('#love-share-loading');
  const img = mount.querySelector('#love-share-img');
  try {
    canvas = await renderLoveCardCanvas({ name, result, ctx: birthCtx });
  } catch (err) {
    console.error('[love-share] render failed:', err);
    if (loading) loading.textContent = share.loadFail;
    showToast(share.imageFail);
    return;
  }

  img.src = canvas.toDataURL('image/png');
  img.hidden = false;
  if (loading) loading.hidden = true;

  const text = tweetText({ name, result });

  mount.querySelectorAll('[data-love-share]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.loveShare;
      try {
        if (action === 'save') {
          const a = document.createElement('a');
          a.download = safeFilename(name);
          a.href = canvas.toDataURL('image/png');
          a.click();
          showToast(love.shareSaved);
        } else if (action === 'x') {
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
            '_blank', 'noopener,noreferrer,width=550,height=420'
          );
        } else if (action === 'line') {
          const url = location.href.split('?')[0].split('#')[0];
          window.open(
            `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
            '_blank', 'noopener,noreferrer'
          );
        } else if (action === 'copy') {
          const ok = await copyToClipboard(text);
          showToast(ok ? love.shareCopied : love.shareCopyFail);
        }
      } catch (err) {
        showToast(err.message || love.shareFail);
      }
    });
  });
}
