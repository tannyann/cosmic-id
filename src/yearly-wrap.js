/**
 * Feature 6: Yearly Wrap — 年鑑データ生成(純粋関数)。
 * 12/15 頃〜1/15 までのウィンドウ内で表示。
 */
import {
  lifePath, personalYear, sunSign, chineseZodiac,
  kyuseiHonmei, biorhythm, moonPhaseToday, lifeStage
} from './calculations.js';

const YEAR_DAYS = 365.25;
const DAY_MS = 86400000;

export function isWrapWindow(today = new Date()) {
  const m = today.getMonth() + 1;
  const d = today.getDate();
  return (m === 12 && d >= 15) || (m === 1 && d <= 15);
}

/** 対象年(今日 12/15-12/31 → 今年 / 今日 1/1-1/15 → 前年) */
export function wrapYear(today = new Date()) {
  return today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
}

/** その年 12 ヶ月ぶんの月盤テーマ(九星月盤の簡略版) */
function monthlyBoard(year) {
  return Array.from({ length: 12 }, (_, i) => {
    const monthNum = i + 1;
    // 九星月盤:年盤本命星 + 月数 で色/テーマを決める
    const themeSeed = (year + monthNum) % 9;
    return { month: monthNum, themeIndex: themeSeed + 1 };
  });
}

/** 年間のバイオリズム主要ピーク・谷を検出(月ごとに 4 波の合成をサンプリング) */
function biorhythmYearHighlights(y, m, d, targetYear) {
  const birth = new Date(y, m - 1, d);
  const start = new Date(targetYear, 0, 1);
  const end   = new Date(targetYear, 11, 31);
  const samples = [];
  for (let t = start.getTime(); t <= end.getTime(); t += DAY_MS * 7) {
    const days = Math.floor((t - birth.getTime()) / DAY_MS);
    const p = Math.sin(2 * Math.PI * days / 23);
    const e = Math.sin(2 * Math.PI * days / 28);
    const i = Math.sin(2 * Math.PI * days / 33);
    const q = Math.sin(2 * Math.PI * days / 38);
    samples.push({ date: new Date(t), physical: p, emotional: e, intellectual: i, intuitive: q, sum: p + e + i + q });
  }
  // 最高値・最低値を検出
  const peak = samples.reduce((a, s) => (s.sum > a.sum ? s : a), samples[0]);
  const dip  = samples.reduce((a, s) => (s.sum < a.sum ? s : a), samples[0]);
  return { peak, dip };
}

/** その年に迎える人生の節目 */
function milestonesInYear(y, m, d, targetYear) {
  const birth = new Date(y, m - 1, d);
  const startAge = (new Date(targetYear, 0, 1) - birth) / (YEAR_DAYS * DAY_MS);
  const endAge   = (new Date(targetYear, 11, 31) - birth) / (YEAR_DAYS * DAY_MS);
  const stones = [
    { key: 'saturn-return-1', age: 29.5 },
    { key: 'saturn-return-2', age: 58.5 },
    { key: 'jupiter-return',  age: null }, // 12, 24, 36, 48, 60, 72, 84
    { key: 'midlife',         age: 40 },
    { key: 'chiron-return',   age: 50.5 }
  ];
  const list = [];
  for (const s of stones) {
    if (s.key === 'jupiter-return') {
      for (let k = 1; k < 8; k++) {
        const age = k * 12;
        if (age >= startAge && age <= endAge) list.push({ key: s.key, age });
      }
    } else if (s.age >= startAge && s.age <= endAge) {
      list.push({ key: s.key, age: s.age });
    }
  }
  return list;
}

/** 年鑑データを組み立て */
export function buildYearlyWrap(ctx, targetYear, todayForNextYear = new Date()) {
  const nextYear = targetYear + 1;
  const nextPY = personalYear(ctx.m, ctx.d, nextYear);
  const currentPY = personalYear(ctx.m, ctx.d, targetYear);
  const bio = biorhythmYearHighlights(ctx.y, ctx.m, ctx.d, targetYear);
  const milestones = milestonesInYear(ctx.y, ctx.m, ctx.d, targetYear);
  const monthly = monthlyBoard(targetYear);

  return {
    targetYear,
    nextYear,
    name: ctx.name,
    personalYear: {
      current: currentPY,
      next:    nextPY
    },
    sun: sunSign(ctx.m, ctx.d),
    zodiac: chineseZodiac(ctx.y),
    kyusei: kyuseiHonmei(ctx.y, ctx.m, ctx.d),
    biorhythm: bio,
    milestones,
    monthlyBoard: monthly
  };
}
