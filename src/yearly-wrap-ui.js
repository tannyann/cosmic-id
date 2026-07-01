/**
 * Feature 6: Yearly Wrap UI — Spotify Wrapped 風のフルスクリーンストーリー。
 * 12/15 頃〜1/15 のウィンドウに、トップページと結果画面に「Wrap を見る」バナーを差し込む。
 */
import { buildYearlyWrap, isWrapWindow, wrapYear } from './yearly-wrap.js';
import { getUI, getLocale } from './i18n/index.js';
import { escapeHtml } from './util.js';
import { getCurrentContext } from './ui.js';

const PY_COLORS = ['#e8b85e','#a8c8d8','#f0c878','#7da66d','#a7c6d8','#d4799a','#9bb0d4','#8b7355','#9b6fd4'];

function pyColor(py) { return PY_COLORS[(py - 1) % 9]; }

/* ============================================================
 * ストーリースライド 7 枚
 * ============================================================ */

function slideCover(wrap, u) {
  return `
    <div class="yw-slide yw-cover" data-slide="cover" style="--yw-accent: ${pyColor(wrap.personalYear.current)}">
      <p class="yw-eyebrow">${escapeHtml(u.eyebrow ?? 'YOUR YEAR IN')}</p>
      <h1 class="yw-year">${wrap.targetYear}</h1>
      <p class="yw-name">${escapeHtml(wrap.name)}</p>
      <p class="yw-hint">${escapeHtml(u.tapNext ?? 'Tap to begin →')}</p>
    </div>
  `;
}

function slideAxis(wrap, u) {
  return `
    <div class="yw-slide yw-axis" data-slide="axis" style="--yw-accent: ${pyColor(wrap.personalYear.current)}">
      <p class="yw-eyebrow">${escapeHtml(u.axisEyebrow ?? 'THE AXIS OF YOUR YEAR')}</p>
      <div class="yw-py-big">${wrap.personalYear.current}</div>
      <p class="yw-py-label">${escapeHtml(u.personalYearLabel ?? 'Personal Year')}</p>
      <p class="yw-line">${escapeHtml((u.axisLine ?? '{year} was your Personal Year of {py}.').replace('{year}', wrap.targetYear).replace('{py}', wrap.personalYear.current))}</p>
    </div>
  `;
}

function slideBiorhythm(wrap, u) {
  const peak = wrap.biorhythm.peak.date;
  const dip  = wrap.biorhythm.dip.date;
  const fmt = new Intl.DateTimeFormat(getLocale(), { month: 'long' });
  return `
    <div class="yw-slide yw-bio" data-slide="bio">
      <p class="yw-eyebrow">${escapeHtml(u.rhythmEyebrow ?? 'YOUR PEAKS & VALLEYS')}</p>
      <div class="yw-bio-lines">
        <div class="yw-bio-line yw-bio-peak">
          <span class="yw-bio-month">${escapeHtml(fmt.format(peak))}</span>
          <span class="yw-bio-note">${escapeHtml(u.peakNote ?? 'was your high point.')}</span>
        </div>
        <div class="yw-bio-line yw-bio-dip">
          <span class="yw-bio-month">${escapeHtml(fmt.format(dip))}</span>
          <span class="yw-bio-note">${escapeHtml(u.dipNote ?? 'asked you to slow down.')}</span>
        </div>
      </div>
    </div>
  `;
}

function slideMilestones(wrap, u) {
  const stones = wrap.milestones;
  if (!stones.length) {
    return `
      <div class="yw-slide yw-milestones" data-slide="milestones">
        <p class="yw-eyebrow">${escapeHtml(u.milestoneEyebrow ?? 'LIFE MILESTONES')}</p>
        <p class="yw-milestone-empty">${escapeHtml(u.noMilestones ?? 'No major astrological milestone hit this year — a year to gather.')}</p>
      </div>
    `;
  }
  const rows = stones.map(s => `
    <li class="yw-milestone-row">
      <span class="yw-milestone-age">age ${s.age}</span>
      <span class="yw-milestone-name">${escapeHtml(u[`ms_${s.key}`] ?? s.key)}</span>
    </li>
  `).join('');
  return `
    <div class="yw-slide yw-milestones" data-slide="milestones">
      <p class="yw-eyebrow">${escapeHtml(u.milestoneEyebrow ?? 'LIFE MILESTONES')}</p>
      <ul class="yw-milestone-list">${rows}</ul>
    </div>
  `;
}

function slideThreeSides(wrap, u) {
  return `
    <div class="yw-slide yw-three" data-slide="three">
      <p class="yw-eyebrow">${escapeHtml(u.threeEyebrow ?? 'THREE FACES OF YOU')}</p>
      <div class="yw-three-grid">
        <div class="yw-three-item">
          <p class="yw-three-label">${escapeHtml(u.threeSun ?? 'Sun')}</p>
          <p class="yw-three-value">${escapeHtml(wrap.sun?.name ?? '')}</p>
        </div>
        <div class="yw-three-item">
          <p class="yw-three-label">${escapeHtml(u.threeZodiac ?? 'Zodiac')}</p>
          <p class="yw-three-value">${escapeHtml(wrap.zodiac?.name ?? wrap.zodiac?.char ?? '')}</p>
        </div>
        <div class="yw-three-item">
          <p class="yw-three-label">${escapeHtml(u.threeKyusei ?? 'Nine Star')}</p>
          <p class="yw-three-value">${escapeHtml(wrap.kyusei?.name ?? '')}</p>
        </div>
      </div>
    </div>
  `;
}

function slideNextYear(wrap, u) {
  return `
    <div class="yw-slide yw-next" data-slide="next" style="--yw-accent: ${pyColor(wrap.personalYear.next)}">
      <p class="yw-eyebrow">${escapeHtml(u.nextEyebrow ?? `LOOKING AHEAD`)}</p>
      <div class="yw-py-big">${wrap.personalYear.next}</div>
      <p class="yw-py-label">${escapeHtml(u.personalYearLabel ?? 'Personal Year')}</p>
      <p class="yw-line">${escapeHtml((u.nextLine ?? '{year} will be your Personal Year {py}. A time to {hint}.').replace('{year}', wrap.nextYear).replace('{py}', wrap.personalYear.next).replace('{hint}', pyHint(wrap.personalYear.next, u)))}</p>
    </div>
  `;
}

function pyHint(py, u) {
  const hints = u.pyHints ?? {};
  const defaults = ['plant seeds','build one connection','express and be seen','build foundations','let change in','tend what matters','turn inward','harvest what you built','release and complete'];
  return hints[py] ?? defaults[py - 1] ?? '';
}

function slideShare(wrap, u) {
  return `
    <div class="yw-slide yw-share" data-slide="share">
      <p class="yw-eyebrow">${escapeHtml(u.shareEyebrow ?? 'SHARE YOUR YEAR')}</p>
      <div class="yw-share-preview" id="yw-share-preview" aria-hidden="true"></div>
      <div class="yw-share-actions">
        <button class="yw-btn yw-btn-primary" data-yw-act="save">${escapeHtml(u.saveImage ?? 'Save image')}</button>
        <button class="yw-btn" data-yw-act="copy">${escapeHtml(u.copyText ?? 'Copy text')}</button>
      </div>
    </div>
  `;
}

/* ============================================================
 * シェア画像用の SVG(1080x1920)
 * ============================================================ */

function shareSvg(wrap) {
  const W = 1080, H = 1920;
  const accent = pyColor(wrap.personalYear.current);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
    <defs>
      <radialGradient id="ywbg" cx="50%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#1e0c3c"/>
        <stop offset="100%" stop-color="#04030a"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#ywbg)"/>
    <text x="${W/2}" y="180" text-anchor="middle" font-family="serif" font-size="42" fill="#c9a227" letter-spacing="0.4em">✦ COSMIC ID ✦</text>
    <text x="${W/2}" y="260" text-anchor="middle" font-family="serif" font-size="28" fill="#8f84a8" letter-spacing="0.3em">YOUR YEAR IN</text>
    <text x="${W/2}" y="420" text-anchor="middle" font-family="serif" font-size="220" fill="#f0d878">${wrap.targetYear}</text>
    <text x="${W/2}" y="520" text-anchor="middle" font-family="serif" font-size="44" fill="#ede4d4" letter-spacing="0.15em">${escapeHtml(wrap.name)}</text>
    <text x="${W/2}" y="720" text-anchor="middle" font-family="serif" font-size="28" fill="#9a8fb8" letter-spacing="0.3em">PERSONAL YEAR</text>
    <text x="${W/2}" y="1000" text-anchor="middle" font-family="serif" font-size="480" fill="${accent}" opacity="0.95">${wrap.personalYear.current}</text>
    <text x="${W/2}" y="1200" text-anchor="middle" font-family="serif" font-size="36" fill="#ede4d4">${escapeHtml(wrap.sun?.name ?? '')} · ${escapeHtml(wrap.kyusei?.name ?? '')}</text>
    <text x="${W/2}" y="${H-180}" text-anchor="middle" font-family="serif" font-size="28" fill="#8f84a8" letter-spacing="0.2em">Looking ahead → Personal Year ${wrap.personalYear.next}</text>
    <text x="${W/2}" y="${H-100}" text-anchor="middle" font-family="serif" font-size="22" fill="#c9a227" letter-spacing="0.3em">tannyann.github.io/cosmic-id</text>
  </svg>`;
}

/* ============================================================
 * モーダル: 縦スクロール(スライド)ストーリー
 * ============================================================ */

function openWrapModal(wrap) {
  const u = getUI().yearlyWrap ?? {};
  const slides = [
    slideCover(wrap, u),
    slideAxis(wrap, u),
    slideBiorhythm(wrap, u),
    slideMilestones(wrap, u),
    slideThreeSides(wrap, u),
    slideNextYear(wrap, u),
    slideShare(wrap, u)
  ].join('');

  const back = document.createElement('div');
  back.className = 'yw-backdrop';
  back.innerHTML = `
    <button class="yw-close" aria-label="${escapeHtml(u.close ?? 'Close')}">×</button>
    <div class="yw-track" tabindex="0">${slides}</div>
    <div class="yw-progress" id="yw-progress" aria-hidden="true"></div>
  `;
  document.body.appendChild(back);
  document.body.style.overflow = 'hidden';

  const track = back.querySelector('.yw-track');
  const total = 7;
  const progress = back.querySelector('#yw-progress');
  progress.innerHTML = Array.from({ length: total }, (_, i) =>
    `<span class="yw-dot ${i === 0 ? 'is-active' : ''}"></span>`).join('');

  function close() {
    back.remove();
    document.body.style.overflow = '';
  }
  back.querySelector('.yw-close').addEventListener('click', close);
  document.addEventListener('keydown', function onEsc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
  });

  // スライドスクロール検出
  const slideEls = back.querySelectorAll('.yw-slide');
  track.addEventListener('scroll', () => {
    const y = track.scrollTop;
    const h = track.clientHeight;
    const idx = Math.round(y / h);
    progress.querySelectorAll('.yw-dot').forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }, { passive: true });

  // シェア画像プレビュー
  const preview = back.querySelector('#yw-share-preview');
  if (preview) preview.innerHTML = shareSvg(wrap);

  // シェアアクション
  back.querySelectorAll('[data-yw-act]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const act = btn.dataset.ywAct;
      if (act === 'save') {
        const svg = shareSvg(wrap);
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const a = document.createElement('a');
        a.download = `cosmic-id-wrap-${wrap.targetYear}.svg`;
        a.href = URL.createObjectURL(blob);
        a.click();
      } else if (act === 'copy') {
        const text = `${wrap.name} — COSMIC ID Year Wrap ${wrap.targetYear}\nPersonal Year: ${wrap.personalYear.current}\nSun: ${wrap.sun?.name}\nNext year: PY ${wrap.personalYear.next}\n#COSMICID`;
        await navigator.clipboard?.writeText(text);
      }
    });
  });
}

/* ============================================================
 * 公開関数:結果画面に「Wrap を見る」バナーを差し込む
 * ============================================================ */

export function bindYearlyWrap() {
  if (!isWrapWindow()) return; // ウィンドウ外なら何もしない

  const results = document.getElementById('results');
  if (!results) return;
  if (document.getElementById('yw-banner')) return;

  const ctx = getCurrentContext();
  if (!ctx) return;

  const targetYear = wrapYear();
  const wrap = buildYearlyWrap(ctx, targetYear);
  const u = getUI().yearlyWrap ?? {};

  const banner = document.createElement('div');
  banner.id = 'yw-banner';
  banner.className = 'yw-banner';
  banner.innerHTML = `
    <button class="yw-banner-btn">
      <span class="yw-banner-icon" aria-hidden="true">✦</span>
      <span class="yw-banner-text">
        <span class="yw-banner-title">${escapeHtml((u.bannerTitle ?? 'Your {year} Wrap is ready').replace('{year}', targetYear))}</span>
        <span class="yw-banner-sub">${escapeHtml(u.bannerSub ?? 'Tap to see your year in one story')}</span>
      </span>
      <span class="yw-banner-arrow" aria-hidden="true">→</span>
    </button>
  `;

  const hero = document.querySelector('.hero-card');
  if (hero) hero.before(banner);
  else results.prepend(banner);

  banner.querySelector('.yw-banner-btn').addEventListener('click', () => openWrapModal(wrap));
}
