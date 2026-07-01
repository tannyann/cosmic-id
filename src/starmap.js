/**
 * Feature 4: Star map ジェネレーター(純粋関数)。
 *
 * 生年月日と名前のスナップショットから、1080×1080 の抽象星図 SVG を生成する。
 * 決定論的で、同じ入力からは常に同じ絵。
 *
 * 構図(中心 → 外周):
 *   - center: Life Path 数字(大きな装飾字)
 *   - inner ring: 12 太陽星座、該当を強調
 *   - middle ring: 12 十二支、該当を強調
 *   - outer ring: 9 九星、該当を強調
 *   - halo:      個人年サイクル 1..9 の色帯
 *   - scattered: 4 つの補助シンボル(動物・ケルト樹・マヤ紋章・タロット)
 *   - bottom:    名前(セリフ)と生年月日
 */

const W = 1080, H = 1080, CX = W / 2, CY = H / 2;

const ZODIAC_JA = ['山羊座','水瓶座','魚座','牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座'];
const ZODIAC_EN = ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'];
const CHINESE_ZODIAC_CHARS = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const KYUSEI_NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function polar(cx, cy, r, degrees) {
  const rad = (degrees - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function esc(s) {
  return String(s ?? '').replace(/[<>&"']/g, c => ({ '<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;' }[c]));
}

/* ============================================================
 * バックグラウンド:オーロラ + 星
 * ============================================================ */

function background() {
  const stars = Array.from({ length: 60 }, (_, i) => {
    // 決定論的擬似ランダム
    const seed = (i * 2654435761) >>> 0;
    const sx = (seed % 1024) / 1024 * W;
    const sy = ((seed * 3 + 7) % 1024) / 1024 * H;
    const r  = ((seed >> 5) % 3) * 0.5 + 0.8;
    const op = 0.4 + ((seed >> 7) % 100) / 200;
    return `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${r.toFixed(2)}" fill="white" opacity="${op.toFixed(2)}"/>`;
  }).join('');

  return `
    <defs>
      <radialGradient id="sm-bg" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#14102a"/>
        <stop offset="100%" stop-color="#04030a"/>
      </radialGradient>
      <radialGradient id="sm-aurora1" cx="25%" cy="30%" r="60%">
        <stop offset="0%" stop-color="rgba(155,111,212,0.35)"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
      <radialGradient id="sm-aurora2" cx="80%" cy="80%" r="60%">
        <stop offset="0%" stop-color="rgba(212,121,154,0.2)"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
      <linearGradient id="sm-gold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f0d878"/>
        <stop offset="100%" stop-color="#c9a227"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#sm-bg)"/>
    <rect width="${W}" height="${H}" fill="url(#sm-aurora1)"/>
    <rect width="${W}" height="${H}" fill="url(#sm-aurora2)"/>
    ${stars}
  `;
}

/* ============================================================
 * 円環ラベル
 * ============================================================ */

function ringLabels(labels, radius, hitIndex, fontSize = 14, opacity = 0.55) {
  const n = labels.length;
  return labels.map((label, i) => {
    const angle = (i / n) * 360;
    const p = polar(CX, CY, radius, angle);
    const isHit = i === hitIndex;
    const fill = isHit ? 'url(#sm-gold)' : '#ede4d4';
    const op = isHit ? 1 : opacity;
    const size = isHit ? fontSize * 1.6 : fontSize;
    const weight = isHit ? '600' : '400';
    return `
      <text x="${p.x.toFixed(1)}" y="${p.y.toFixed(1)}"
            fill="${fill}" opacity="${op}"
            font-size="${size}" font-weight="${weight}"
            text-anchor="middle" dominant-baseline="middle"
            font-family="serif">${esc(label)}</text>
    `;
  }).join('');
}

function ringCircle(radius, opacity = 0.15) {
  return `<circle cx="${CX}" cy="${CY}" r="${radius}" fill="none" stroke="rgba(232,212,154,${opacity})" stroke-width="1"/>`;
}

/* ============================================================
 * ハロ:個人年サイクル 1..9 の色帯
 * ============================================================ */

const PY_HALO_COLORS = ['#e8b85e','#a8c8d8','#f0c878','#7da66d','#a7c6d8','#d4799a','#9bb0d4','#8b7355','#9b6fd4'];

function personalYearHalo(radius, currentPY) {
  return Array.from({ length: 9 }, (_, i) => {
    const startAngle = (i / 9) * 360 - 90;
    const endAngle   = ((i + 1) / 9) * 360 - 90;
    const p0 = polar(CX, CY, radius, startAngle + 90);
    const p1 = polar(CX, CY, radius, endAngle + 90);
    const large = 0;
    const isCurrent = (i + 1) === currentPY;
    const strokeW = isCurrent ? 14 : 6;
    const op = isCurrent ? 0.95 : 0.35;
    return `
      <path d="M${p0.x.toFixed(1)},${p0.y.toFixed(1)} A${radius},${radius} 0 ${large} 1 ${p1.x.toFixed(1)},${p1.y.toFixed(1)}"
            fill="none" stroke="${PY_HALO_COLORS[i]}" stroke-width="${strokeW}"
            opacity="${op}" stroke-linecap="round"/>
    `;
  }).join('');
}

/* ============================================================
 * 中央のライフパス数字
 * ============================================================ */

function coreLifePath(lp) {
  return `
    <text x="${CX}" y="${CY + 30}" text-anchor="middle" dominant-baseline="middle"
          font-family="serif" font-size="260" fill="url(#sm-gold)"
          filter="drop-shadow(0 0 40px rgba(232,212,154,0.5))">${esc(lp)}</text>
    <text x="${CX}" y="${CY - 120}" text-anchor="middle"
          font-size="18" fill="#8f84a8" letter-spacing="0.3em" font-family="serif">
      LIFE PATH
    </text>
  `;
}

/* ============================================================
 * 散らばる補助シンボル
 * ============================================================ */

function scatteredSymbols(ctx) {
  const items = [
    { symbol: ctx.an?.name?.[0]  ?? '', label: 'Animal',      angle: 45,  r: 480 },
    { symbol: ctx.ct?.name?.[0]  ?? '', label: 'Celtic tree', angle: 135, r: 480 },
    { symbol: String(ctx.mk?.kin ?? ''), label: 'Maya KIN',   angle: 225, r: 480 },
    { symbol: ctx.tb?.name?.[0]  ?? '', label: 'Tarot',       angle: 315, r: 480 }
  ];
  return items.map(it => {
    const p = polar(CX, CY, it.r, it.angle);
    return `
      <g>
        <circle cx="${p.x}" cy="${p.y}" r="26" fill="rgba(22,18,42,0.7)" stroke="rgba(232,212,154,0.4)" stroke-width="1"/>
        <text x="${p.x}" y="${p.y + 8}" text-anchor="middle" font-size="22" fill="#ede4d4" font-family="serif">${esc(it.symbol)}</text>
        <text x="${p.x}" y="${p.y + 46}" text-anchor="middle" font-size="10" fill="#8f84a8" letter-spacing="0.2em" font-family="serif">${esc(it.label)}</text>
      </g>
    `;
  }).join('');
}

/* ============================================================
 * 下部の名前 + 生年月日 + ブランド
 * ============================================================ */

function footer(ctx, opts) {
  return `
    <text x="${CX}" y="${H - 90}" text-anchor="middle"
          font-family="serif" font-size="42" fill="#ede4d4"
          letter-spacing="0.1em">${esc(ctx.name)}</text>
    <text x="${CX}" y="${H - 50}" text-anchor="middle"
          font-family="serif" font-size="20" fill="#8f84a8" letter-spacing="0.15em">
      ${esc(`${ctx.y}-${String(ctx.m).padStart(2,'0')}-${String(ctx.d).padStart(2,'0')}`)}
    </text>
    <text x="${CX}" y="70" text-anchor="middle"
          font-family="serif" font-size="16" fill="#c9a227" letter-spacing="0.35em">
      ✦ COSMIC ID ✦
    </text>
    <text x="${CX}" y="98" text-anchor="middle"
          font-family="serif" font-size="12" fill="#8f84a8" letter-spacing="0.25em">
      STAR MAP
    </text>
  `;
}

/* ============================================================
 * 公開関数:1080x1080 の SVG を返す
 * ============================================================ */

export function generateStarMap(ctx, opts = {}) {
  const useEnglish = opts.locale === 'en';
  const zodiacLabels = useEnglish ? ZODIAC_EN : ZODIAC_JA;

  // 太陽星座の hit index
  const sunHit = zodiacLabels.findIndex(z =>
    z === ctx.sun?.name || z === (useEnglish ? ctx.sun?.name : ctx.sun?.name)
  );

  const chineseHit = CHINESE_ZODIAC_CHARS.findIndex(c => c === ctx.cz?.char);
  const kyuseiHit  = KYUSEI_NUMS.findIndex(n => n === (parseInt(ctx.ks?.name?.match(/\d/)?.[0], 10) || null));

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
    ${background()}
    ${footer(ctx, opts)}
    <!-- rings -->
    ${ringCircle(200)}
    ${ringCircle(320)}
    ${ringCircle(440)}
    <!-- personal year halo -->
    ${personalYearHalo(500, ctx.py)}
    <!-- ring labels -->
    ${ringLabels(zodiacLabels,            200, sunHit,    18, 0.4)}
    ${ringLabels(CHINESE_ZODIAC_CHARS,    320, chineseHit,24, 0.4)}
    ${ringLabels(KYUSEI_NUMS.map(String), 440, kyuseiHit, 20, 0.35)}
    <!-- scattered symbols -->
    ${scatteredSymbols(ctx)}
    <!-- core -->
    ${coreLifePath(ctx.lp)}
  </svg>`;
}
