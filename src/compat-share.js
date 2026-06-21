/**
 * 相性診断のシェアカード生成 + シェアパネル UI。
 *
 *  - 既存 share.js と同じ縦長 1080×1350 Canvas を採用
 *    (Instagram Story / Threads / X 縦長プレビューすべてに収まる)
 *  - Canvas は CORS 汚染を避けるためシステムフォントのみ使用
 *  - 中央に総合スコア大、上に二人の名前、下にミニレーダー
 *  - 保存 / X / LINE / テキストコピーの 4 動線
 */
import { copyToClipboard, showToast } from './util.js';

const CARD_W = 1080;
const CARD_H = 1350;

function waitForFonts(timeoutMs = 2500) {
  const timeout = new Promise(resolve => setTimeout(resolve, timeoutMs));
  if (document.fonts?.ready) {
    return Promise.race([document.fonts.ready.catch(() => undefined), timeout]);
  }
  return timeout;
}

const COLORS = {
  bg0: '#06050f', bg1: '#14102a', bg2: '#221838',
  gold: '#f0d878', goldDim: '#c9a227', cream: '#ede4d4',
  muted: '#9a8fb8', purple: '#9b6fd4', rose: '#d4799a',
  border: 'rgba(201, 162, 39, 0.35)'
};

const FONT_SERIF   = '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif';
const FONT_DISPLAY = '"Hiragino Mincho ProN", "Yu Mincho", serif';

const AXIS_LABELS = ['数秘', '太陽', '十二支', '五行', '九星'];
const AXIS_KEYS   = ['lifePath', 'sun', 'zodiac', 'gogyou', 'kyusei'];

/* ------------------------------------------------------------
 * 描画ヘルパー
 * ------------------------------------------------------------ */

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
  g.addColorStop(0.5, COLORS.bg1);
  g.addColorStop(1, COLORS.bg2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const a1 = ctx.createRadialGradient(CARD_W * 0.25, CARD_H * 0.15, 0, CARD_W * 0.25, CARD_H * 0.15, CARD_W * 0.75);
  a1.addColorStop(0, 'rgba(155, 111, 212, 0.28)');
  a1.addColorStop(1, 'transparent');
  ctx.fillStyle = a1;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  const a2 = ctx.createRadialGradient(CARD_W * 0.8, CARD_H * 0.85, 0, CARD_W * 0.8, CARD_H * 0.85, CARD_W * 0.7);
  a2.addColorStop(0, 'rgba(212, 121, 154, 0.18)');
  a2.addColorStop(1, 'transparent');
  ctx.fillStyle = a2;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  // ささやかな星
  const stars = [
    [0.14, 0.18], [0.36, 0.42], [0.58, 0.12], [0.78, 0.32],
    [0.88, 0.6], [0.22, 0.74], [0.5, 0.86], [0.7, 0.4], [0.1, 0.5]
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

function drawRadar(ctx, axes, cx, cy, radius) {
  const n = AXIS_KEYS.length;
  const angle = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const pt = (i, ratio) => [
    cx + radius * ratio * Math.cos(angle(i)),
    cy + radius * ratio * Math.sin(angle(i))
  ];

  [0.25, 0.5, 0.75, 1].forEach(r => {
    ctx.beginPath();
    AXIS_KEYS.forEach((_, i) => {
      const [x, y] = pt(i, r);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(201, 162, 39, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  AXIS_KEYS.forEach((_, i) => {
    const [x, y] = pt(i, 1);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(201, 162, 39, 0.16)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  ctx.beginPath();
  AXIS_KEYS.forEach((k, i) => {
    const [x, y] = pt(i, Math.max(axes[k].score, 5) / 100);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
  grad.addColorStop(0, 'rgba(155, 111, 212, 0.6)');
  grad.addColorStop(1, 'rgba(212, 121, 154, 0.22)');
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#e6cf93';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.font = `400 22px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.cream;
  ctx.textAlign = 'center';
  AXIS_LABELS.forEach((label, i) => {
    const [x, y] = pt(i, 1.18);
    ctx.fillText(label, x, y + 6);
  });
}

function wrapText(ctx, text, maxWidth, size, font) {
  ctx.font = `500 ${size}px ${font}`;
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

/* ------------------------------------------------------------
 * Canvas 生成本体
 * ------------------------------------------------------------ */

async function renderCompatCardCanvas({ name1, name2, result }) {
  await waitForFonts();

  const canvas = document.createElement('canvas');
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  const ctx = canvas.getContext('2d');

  drawBackground(ctx);
  drawFrame(ctx);

  ctx.textAlign = 'center';

  ctx.font = `400 26px ${FONT_DISPLAY}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText('Two Stories Woven', CARD_W / 2, 130);

  ctx.font = `300 50px ${FONT_DISPLAY}`;
  ctx.fillStyle = COLORS.gold;
  ctx.fillText('✦ COSMIC ID ✦', CARD_W / 2, 200);

  // 名前 (上)
  const nameLines1 = wrapText(ctx, name1, CARD_W - 180, 56, FONT_SERIF);
  ctx.font = `500 56px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.cream;
  nameLines1.slice(0, 1).forEach((line) => {
    ctx.fillText(line, CARD_W / 2, 310);
  });

  // ×
  ctx.font = `300 36px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.gold;
  ctx.fillText('×', CARD_W / 2, 380);

  // 名前 (下)
  const nameLines2 = wrapText(ctx, name2, CARD_W - 180, 56, FONT_SERIF);
  ctx.font = `500 56px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.cream;
  nameLines2.slice(0, 1).forEach((line) => {
    ctx.fillText(line, CARD_W / 2, 450);
  });

  // 総合スコア
  ctx.font = `300 140px ${FONT_DISPLAY}`;
  ctx.fillStyle = COLORS.gold;
  ctx.fillText(String(result.overall), CARD_W / 2, 640);

  ctx.font = `400 30px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.purple;
  ctx.fillText(result.band.label, CARD_W / 2, 700);

  // レーダー
  drawRadar(ctx, result.axes, CARD_W / 2, 960, 200);

  // フッター
  ctx.font = `300 24px ${FONT_SERIF}`;
  ctx.fillStyle = COLORS.muted;
  ctx.fillText('二人の物語を、可能性として読み解く', CARD_W / 2, CARD_H - 130);

  ctx.font = `400 22px ${FONT_DISPLAY}`;
  ctx.fillStyle = COLORS.goldDim;
  let host = 'COSMIC ID';
  try {
    if (typeof window !== 'undefined') host = new URL(location.href).host;
  } catch { /* noop */ }
  ctx.fillText(host, CARD_W / 2, CARD_H - 90);

  return canvas;
}

/* ------------------------------------------------------------
 * シェア用テキスト
 * ------------------------------------------------------------ */

function tweetText({ name1, name2, result }) {
  const url = typeof window !== 'undefined'
    ? location.href.split('?')[0].split('#')[0]
    : '';
  return [
    `${name1} × ${name2} の COSMIC ID 相性`,
    `${result.overall} 点 — ${result.band.label}`,
    '',
    'あなたとあの人の相性を読み解く →',
    url,
    '#COSMICID'
  ].filter(Boolean).join('\n');
}

function safeFilename(name1, name2) {
  const safe = (s) => s.replace(/[^\w぀-ヿ一-龯\-]/g, '').slice(0, 12);
  return `cosmic-id-compat-${safe(name1)}-${safe(name2)}.png`;
}

/* ------------------------------------------------------------
 * 公開関数:シェアパネルを compat 結果末尾にマウント
 * ------------------------------------------------------------ */

export async function mountCompatSharePanel({ name1, name2, result }) {
  const mount = document.getElementById('compat-share-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="share-panel compat-share-panel" aria-label="相性カードをシェア">
      <div class="share-panel-head">
        <h3 class="share-panel-title">二人の物語をシェア</h3>
        <p class="share-panel-desc">画像を保存して、X や LINE に貼り付けてください。</p>
      </div>
      <button type="button" class="share-preview-btn" id="compat-share-preview" aria-label="シェアカードのプレビュー">
        <div class="share-preview-loading" id="compat-share-loading">画像を生成中…</div>
        <img id="compat-share-img"
             alt="${name1} × ${name2} の相性カード"
             width="270" height="338" hidden>
      </button>
      <div class="share-actions">
        <button type="button" class="share-btn share-btn-primary" data-compat-share="save">
          <span aria-hidden="true">↓</span> 画像を保存
        </button>
        <button type="button" class="share-btn" data-compat-share="x">X</button>
        <button type="button" class="share-btn" data-compat-share="line">LINE</button>
        <button type="button" class="share-btn" data-compat-share="copy">テキストをコピー</button>
      </div>
    </div>
  `;

  let canvas;
  const loading = mount.querySelector('#compat-share-loading');
  const img = mount.querySelector('#compat-share-img');
  try {
    canvas = await renderCompatCardCanvas({ name1, name2, result });
  } catch (err) {
    console.error('compat-share render failed:', err);
    if (loading) loading.textContent = '生成に失敗しました';
    showToast('画像の生成に失敗しました');
    return;
  }

  img.src = canvas.toDataURL('image/png');
  img.hidden = false;
  if (loading) loading.hidden = true;

  const text = tweetText({ name1, name2, result });

  mount.querySelectorAll('[data-compat-share]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.compatShare;
      try {
        if (action === 'save') {
          const a = document.createElement('a');
          a.download = safeFilename(name1, name2);
          a.href = canvas.toDataURL('image/png');
          a.click();
          showToast('画像を保存しました');
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
          showToast(ok ? 'テキストをコピーしました' : 'コピーに失敗しました');
        }
      } catch (err) {
        showToast(err.message || 'シェアに失敗しました');
      }
    });
  });

  document.getElementById('compat-share-preview')?.addEventListener('click', () => {
    // 既存のシェアモーダル(#share-modal)を流用する場合はここで openShareModal を呼ぶ。
    // MVP では拡大なしで OK。後でやる時の差し替え場所。
  });
}
