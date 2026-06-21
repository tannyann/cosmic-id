/**
 * 相性診断:2人の入力から多軸の相性スコアを算出する純粋関数群。
 *
 * AGENTS.md の規約:
 *  - 計算は純粋関数のみ。DOM / localStorage / グローバル状態を持たない。
 *  - スコアは「広く流布する一般化された相性論」を採用。流派は問わない MVP。
 *  - スコア範囲: 0–100、平均化して総合点を出す。
 *  - 文言は強い断定を避け、可能性として提示する。
 */
import {
  lifePath,
  sunSign,
  chineseZodiac,
  kyuseiHonmei,
  gogyou
} from './calculations.js';
import { getContent } from './i18n/index.js';

/* ============================================================
 * 数秘 ライフパス
 * マスター数(11/22/33)は単純な相性マトリクスでは扱いづらいので
 * 単一桁に還元してから判定する。
 * ============================================================ */

function reduceMaster(n) {
  let x = n;
  while (x > 9) {
    x = String(x).split('').reduce((a, b) => a + Number(b), 0);
  }
  return x;
}

// 数秘 1–9 の相性スコア。順序を問わない(対称行列)
const LP_MATRIX = {
  '1-1': 75, '1-2': 80, '1-3': 85, '1-4': 60, '1-5': 78, '1-6': 65, '1-7': 60, '1-8': 70, '1-9': 72,
  '2-2': 70, '2-3': 65, '2-4': 82, '2-5': 60, '2-6': 90, '2-7': 75, '2-8': 75, '2-9': 70,
  '3-3': 72, '3-4': 55, '3-5': 85, '3-6': 80, '3-7': 62, '3-8': 65, '3-9': 80,
  '4-4': 78, '4-5': 52, '4-6': 75, '4-7': 78, '4-8': 88, '4-9': 60,
  '5-5': 75, '5-6': 60, '5-7': 82, '5-8': 65, '5-9': 75,
  '6-6': 80, '6-7': 65, '6-8': 75, '6-9': 88,
  '7-7': 72, '7-8': 60, '7-9': 75,
  '8-8': 75, '8-9': 70,
  '9-9': 78
};

function compatLifePath(a, b) {
  const x = reduceMaster(a);
  const y = reduceMaster(b);
  const key = x <= y ? `${x}-${y}` : `${y}-${x}`;
  return LP_MATRIX[key] ?? 65;
}

/* ============================================================
 * 西洋占星術 太陽星座
 * エレメント論(火・地・風・水)で相性を採点。
 * ============================================================ */

const SIGN_ELEMENT = {
  '牡羊座': '火', '獅子座': '火', '射手座': '火',
  '牡牛座': '地', '乙女座': '地', '山羊座': '地',
  '双子座': '風', '天秤座': '風', '水瓶座': '風',
  '蟹座': '水', '蠍座': '水', '魚座': '水',
  Aries: '火', Leo: '火', Sagittarius: '火',
  Taurus: '地', Capricorn: '地', Virgo: '地',
  Gemini: '風', Libra: '風', Aquarius: '風',
  Cancer: '水', Scorpio: '水', Pisces: '水'
};

const ELEMENT_GROUP = {
  '火': 'fire', Fire: 'fire',
  '地': 'earth', Earth: 'earth',
  '風': 'air', Air: 'air',
  '水': 'water', Water: 'water'
};

function sunElementGroup(sign) {
  const raw = sign?.element ?? SIGN_ELEMENT[sign?.name];
  return ELEMENT_GROUP[raw] ?? null;
}

function compatSun(s1, s2) {
  const g1 = sunElementGroup(s1);
  const g2 = sunElementGroup(s2);
  if (!g1 || !g2) return 60;
  if (s1.name === s2.name) return 82;
  if (g1 === g2) return 88;
  if ((g1 === 'fire' && g2 === 'air') || (g1 === 'air' && g2 === 'fire')) return 80;
  if ((g1 === 'earth' && g2 === 'water') || (g1 === 'water' && g2 === 'earth')) return 80;
  if ((g1 === 'fire' && g2 === 'water') || (g1 === 'water' && g2 === 'fire')) return 52;
  if ((g1 === 'earth' && g2 === 'air') || (g1 === 'air' && g2 === 'earth')) return 52;
  return 60;
}

/* ============================================================
 * 十二支(東洋占星術の伝統的相性)
 * 三合:申子辰 / 巳酉丑 / 寅午戌 / 亥卯未  → 強い好相性
 * 六合:子丑 寅亥 卯戌 辰酉 巳申 午未    → 安定した好相性
 * 沖 :子午 丑未 寅申 卯酉 辰戌 巳亥      → 対立(低いが「課題」の意味)
 * ============================================================ */

const SANGOH_IDX  = [[8, 0, 4], [5, 9, 1], [2, 6, 10], [11, 3, 7]];
const RIKUGOH_IDX = [[0, 1], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]];
const CHU_IDX     = [[0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11]];

function zodiacBranchIndex(year) {
  return ((year - 4) % 12 + 12) % 12;
}

function compatZodiacYears(y1, y2) {
  const i1 = zodiacBranchIndex(y1);
  const i2 = zodiacBranchIndex(y2);
  if (i1 === i2) return 72;
  if (SANGOH_IDX.some(g => g.includes(i1) && g.includes(i2))) return 92;
  if (RIKUGOH_IDX.some(p => p.includes(i1) && p.includes(i2))) return 85;
  if (CHU_IDX.some(p => p.includes(i1) && p.includes(i2))) return 38;
  return 62;
}

/* ============================================================
 * 五行(相生・相剋)
 * 相生(育てる): 木→火→土→金→水→木
 * 相剋(打ち消す): 木→土、土→水、水→火、火→金、金→木
 * ============================================================ */

const WUXING_GROUP = {
  '木': 'wood', Wood: 'wood',
  '火': 'fire', Fire: 'fire',
  '土': 'earth', Earth: 'earth',
  '金': 'metal', Metal: 'metal',
  '水': 'water', Water: 'water'
};

const SEISEI = { wood: 'fire', fire: 'earth', earth: 'metal', metal: 'water', water: 'wood' };
const SOKOKU = { wood: 'earth', earth: 'water', water: 'fire', fire: 'metal', metal: 'wood' };

function wuxingGroup(el) {
  if (!el) return null;
  return WUXING_GROUP[el] ?? null;
}

function elementOf(obj) {
  if (typeof obj === 'string') return obj;
  return obj?.element ?? obj?.name ?? null;
}

function compatGogyou(g1, g2) {
  const a = wuxingGroup(elementOf(g1));
  const b = wuxingGroup(elementOf(g2));
  if (!a || !b) return 60;
  if (a === b) return 78;
  if (SEISEI[a] === b || SEISEI[b] === a) return 88;
  if (SOKOKU[a] === b || SOKOKU[b] === a) return 42;
  return 60;
}

/* ============================================================
 * 九星気学(本命星の五行属性で相性判定)
 * ============================================================ */

const KYUSEI_ELEMENT = {
  '一白水星': '水', '二黒土星': '土', '三碧木星': '木', '四緑木星': '木',
  '五黄土星': '土', '六白金星': '金', '七赤金星': '金', '八白土星': '土',
  '九紫火星': '火',
  'One White Water Star': '水', 'Two Black Earth Star': '土', 'Three Green Wood Star': '木',
  'Four Green Wood Star': '木', 'Five Yellow Earth Star': '土', 'Six White Metal Star': '金',
  'Seven Red Metal Star': '金', 'Eight White Earth Star': '土', 'Nine Purple Fire Star': '火'
};

function compatKyusei(k1, k2) {
  if (!k1?.name || !k2?.name) return 60;
  if (k1.name === k2.name) return 78;
  const a = wuxingGroup(k1.element ?? KYUSEI_ELEMENT[k1.name]);
  const b = wuxingGroup(k2.element ?? KYUSEI_ELEMENT[k2.name]);
  if (!a || !b) return 60;
  if (a === b) return 70;
  if (SEISEI[a] === b || SEISEI[b] === a) return 86;
  if (SOKOKU[a] === b || SOKOKU[b] === a) return 44;
  return 60;
}

/* ============================================================
 * 軸ごとの一行解説。score の高低で 3 段階に分岐。
 * AGENTS.md: 強い断定とネガティブ語(絶望/終わり等)を避ける。
 * ============================================================ */

export function axisHint(axisKey, axisResult) {
  const set = getContent().COMPAT_AXIS_HINTS?.[axisKey];
  if (!set) return '';
  const s = axisResult.score;
  if (s >= 80) return set.high;
  if (s >= 60) return set.mid;
  return set.low;
}

function bandFor(score) {
  const bands = getContent().COMPAT_BANDS ?? [];
  return bands.find(b => score >= b.min);
}

/* ============================================================
 * 公開関数:2 人の入力から相性を算出
 *
 * @param {{name:string, y:number, m:number, d:number}} p1
 * @param {{name:string, y:number, m:number, d:number}} p2
 * @returns {{ axes: object, overall: number, band: object }}
 * ============================================================ */

export function computeCompat(p1, p2) {
  const lp1 = lifePath(p1.y, p1.m, p1.d);
  const lp2 = lifePath(p2.y, p2.m, p2.d);
  const sun1 = sunSign(p1.m, p1.d);
  const sun2 = sunSign(p2.m, p2.d);
  const cz1  = chineseZodiac(p1.y);
  const cz2  = chineseZodiac(p2.y);
  const gg1  = gogyou(p1.y);
  const gg2  = gogyou(p2.y);
  const ks1  = kyuseiHonmei(p1.y, p1.m, p1.d);
  const ks2  = kyuseiHonmei(p2.y, p2.m, p2.d);

  const labels = getContent().COMPAT_AXIS_LABELS ?? {};

  const axes = {
    lifePath: { axisLabel: labels.lifePath ?? 'Life Path', score: compatLifePath(lp1, lp2), a: lp1, b: lp2 },
    sun:      { axisLabel: labels.sun ?? 'Sun sign', score: compatSun(sun1, sun2), a: sun1, b: sun2 },
    zodiac:   { axisLabel: labels.zodiac ?? 'Chinese zodiac', score: compatZodiacYears(p1.y, p2.y), a: cz1, b: cz2 },
    gogyou:   { axisLabel: labels.gogyou ?? 'Five Elements', score: compatGogyou(gg1, gg2), a: gg1, b: gg2 },
    kyusei:   { axisLabel: labels.kyusei ?? 'Kyusei star', score: compatKyusei(ks1, ks2), a: ks1, b: ks2 }
  };

  const values = Object.values(axes);
  const overall = Math.round(values.reduce((s, ax) => s + ax.score, 0) / values.length);

  return { axes, overall, band: bandFor(overall) };
}

/* ============================================================
 * 開発時の自己検証用(コンソールから呼べる)
 *   computeCompat({name:'koyo', y:1990, m:5, d:15},
 *                 {name:'A',    y:1992, m:8, d:20})
 * を実行して全軸が 0–100 の整数で返ることを確認する。
 * ============================================================ */
