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
  '蟹座': '水', '蠍座': '水', '魚座': '水'
};

function compatSun(s1, s2) {
  const e1 = SIGN_ELEMENT[s1.name];
  const e2 = SIGN_ELEMENT[s2.name];
  if (!e1 || !e2) return 60;
  if (s1.name === s2.name) return 82;
  if (e1 === e2) return 88;                                                 // 同エレメント
  if ((e1 === '火' && e2 === '風') || (e1 === '風' && e2 === '火')) return 80;
  if ((e1 === '地' && e2 === '水') || (e1 === '水' && e2 === '地')) return 80;
  if ((e1 === '火' && e2 === '水') || (e1 === '水' && e2 === '火')) return 52;
  if ((e1 === '地' && e2 === '風') || (e1 === '風' && e2 === '地')) return 52;
  return 60;
}

/* ============================================================
 * 十二支(東洋占星術の伝統的相性)
 * 三合:申子辰 / 巳酉丑 / 寅午戌 / 亥卯未  → 強い好相性
 * 六合:子丑 寅亥 卯戌 辰酉 巳申 午未    → 安定した好相性
 * 沖 :子午 丑未 寅申 卯酉 辰戌 巳亥      → 対立(低いが「課題」の意味)
 * ============================================================ */

const SANGOH  = [['申', '子', '辰'], ['巳', '酉', '丑'], ['寅', '午', '戌'], ['亥', '卯', '未']];
const RIKUGOH = [['子', '丑'], ['寅', '亥'], ['卯', '戌'], ['辰', '酉'], ['巳', '申'], ['午', '未']];
const CHU     = [['子', '午'], ['丑', '未'], ['寅', '申'], ['卯', '酉'], ['辰', '戌'], ['巳', '亥']];

function compatZodiac(z1, z2) {
  const c1 = z1.char;
  const c2 = z2.char;
  if (!c1 || !c2) return 62;
  if (c1 === c2) return 72;
  if (SANGOH.some(g => g.includes(c1) && g.includes(c2))) return 92;
  if (RIKUGOH.some(p => p.includes(c1) && p.includes(c2))) return 85;
  if (CHU.some(p => p.includes(c1) && p.includes(c2))) return 38;
  return 62;
}

/* ============================================================
 * 五行(相生・相剋)
 * 相生(育てる): 木→火→土→金→水→木
 * 相剋(打ち消す): 木→土、土→水、水→火、火→金、金→木
 * ============================================================ */

const SEISEI = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
const SOKOKU = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

function elementOf(obj) {
  if (typeof obj === 'string') return obj;
  return obj?.element ?? obj?.name ?? null;
}

function compatGogyou(g1, g2) {
  const a = elementOf(g1);
  const b = elementOf(g2);
  if (!a || !b) return 60;
  if (a === b) return 78;                                  // 比和
  if (SEISEI[a] === b || SEISEI[b] === a) return 88;       // 相生
  if (SOKOKU[a] === b || SOKOKU[b] === a) return 42;       // 相剋
  return 60;
}

/* ============================================================
 * 九星気学(本命星の五行属性で相性判定)
 * ============================================================ */

const KYUSEI_ELEMENT = {
  '一白水星': '水', '二黒土星': '土', '三碧木星': '木', '四緑木星': '木',
  '五黄土星': '土', '六白金星': '金', '七赤金星': '金', '八白土星': '土',
  '九紫火星': '火'
};

function compatKyusei(k1, k2) {
  if (!k1?.name || !k2?.name) return 60;
  if (k1.name === k2.name) return 78;
  const a = KYUSEI_ELEMENT[k1.name];
  const b = KYUSEI_ELEMENT[k2.name];
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

const AXIS_TEXTS = {
  lifePath: {
    high: '人生の歩幅とリズムが自然に噛み合いやすい組合せ。',
    mid:  '価値観の違いが学びの種になる関係性。',
    low:  '別々の道を選びがち。だからこそ刺激し合える可能性を秘める。'
  },
  sun: {
    high: '感情の流れが似ていて、言葉にしなくても伝わりやすい傾向。',
    mid:  '表現の仕方は違うが、根っこの方向は重なっている。',
    low:  '世界の見方が異なる二人。違いを尊ぶ姿勢が鍵になる。'
  },
  zodiac: {
    high: '東洋占星術で「縁が強い」とされる組合せ。',
    mid:  '穏やかな相性。意図して関係を育てるのに向く。',
    low:  '伝統的には対立しやすいとされるが、それは課題ではなく地図。'
  },
  gogyou: {
    high: '五行のエネルギーが互いを育てる関係。',
    mid:  '同じ気を持つため、心地よくも刺激は少なめ。',
    low:  '相剋の関係。だからこそ得意分野の補完が生まれやすい。'
  },
  kyusei: {
    high: '本命星のエネルギーが循環し合う組合せ。',
    mid:  '中庸の相性。日々の習慣を整えると安定する。',
    low:  '勢いの方向が交差する関係。お互いの「間」を尊ぶこと。'
  }
};

export function axisHint(axisKey, axisResult) {
  const set = AXIS_TEXTS[axisKey];
  if (!set) return '';
  const s = axisResult.score;
  if (s >= 80) return set.high;
  if (s >= 60) return set.mid;
  return set.low;
}

/* ============================================================
 * 総合スコアのバンド分類
 * ============================================================ */

const BANDS = [
  { min: 90, key: 'fated',    label: '運命的な響き合い' },
  { min: 80, key: 'deep',     label: '深い縁で結ばれた組合せ' },
  { min: 70, key: 'stable',   label: '安定した結びつき' },
  { min: 60, key: 'learning', label: '学び合う関係性' },
  { min: 50, key: 'growing',  label: '時間と対話で育つ縁' },
  { min: 0,  key: 'mirror',   label: '鏡のような対比' }
];

function bandFor(score) {
  return BANDS.find(b => score >= b.min);
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

  const axes = {
    lifePath: { axisLabel: '数秘・ライフパス', score: compatLifePath(lp1, lp2), a: lp1, b: lp2 },
    sun:      { axisLabel: '太陽星座',         score: compatSun(sun1, sun2),    a: sun1, b: sun2 },
    zodiac:   { axisLabel: '十二支',           score: compatZodiac(cz1, cz2),   a: cz1, b: cz2 },
    gogyou:   { axisLabel: '五行',             score: compatGogyou(gg1, gg2),   a: gg1, b: gg2 },
    kyusei:   { axisLabel: '九星気学',         score: compatKyusei(ks1, ks2),   a: ks1, b: ks2 }
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
