/**
 * すべての占術計算ロジック。純粋関数で構成される。
 * 表示名・辞書は getContent() からロケールに応じて取得する。
 */

import { getContent } from './i18n/index.js';

// ============ ユーティリティ ============
/** 桁数を1桁まで詰める。keepMasterがtrueなら11/22/33は止める。 */
export function reduceDigit(n, keepMaster = false) {
  while (n > 9) {
    if (keepMaster && (n === 11 || n === 22 || n === 33)) return n;
    n = String(n).split('').reduce((s, c) => s + +c, 0);
  }
  return n;
}

function digitSum(n) {
  return String(n).split('').reduce((s, c) => s + +c, 0);
}

// ============ 数秘術 ============
export function lifePath(y, m, d) {
  return reduceDigit(digitSum(y) + digitSum(m) + digitSum(d), true);
}

export function personalYear(m, d, currentYear) {
  return reduceDigit(reduceDigit(m) + reduceDigit(d) + reduceDigit(currentYear));
}

/** A=1 … I=9, J=1 … R=9, S=1 … Z=8（ピタゴラス式） */
function pythagoreanLetterValue(ch) {
  const code = ch.toUpperCase().charCodeAt(0);
  if (code < 65 || code > 90) return 0;
  return ((code - 65) % 9) + 1;
}

/**
 * ローマ字・英字名向けの表現数（数秘の一般的な A–Z 換算）。
 * 英字が無い場合は null。
 */
export function expressionNumberLatin(name) {
  if (!name?.trim()) return null;
  let sum = 0;
  let letters = 0;
  for (const c of name) {
    if (/\s/.test(c)) continue;
    const v = pythagoreanLetterValue(c);
    if (v) {
      sum += v;
      letters++;
    }
  }
  if (!letters) return null;
  return reduceDigit(sum, true);
}

/**
 * 日本語・漢字など非ラテン文字向けの簡易響き（字形コードの合計）。
 * 国際式数秘とは別系統として扱う。
 */
export function expressionNumberNative(name) {
  let sum = 0;
  let glyphs = 0;
  for (const c of name) {
    if (/\s/.test(c)) continue;
    if (pythagoreanLetterValue(c)) continue;
    sum += c.codePointAt(0);
    glyphs++;
  }
  if (!glyphs) return null;
  const n = sum % 9;
  return n === 0 ? 9 : n;
}

/** @deprecated 互換用。native 計算に委譲 */
export function expressionNumber(name) {
  return expressionNumberNative(name) ?? expressionNumberLatin(name) ?? 1;
}

/**
 * 表示名 + ローマ字（任意）から二系統の名前数を返す。
 * @returns {{ native: number, latin: number|null, hasLatinLetters: boolean }}
 */
export function expressionProfile(displayName, romanName = '') {
  const latinTrimmed = romanName.trim();
  const latin = latinTrimmed ? expressionNumberLatin(latinTrimmed) : null;
  const native =
    expressionNumberNative(displayName) ??
    (latinTrimmed ? null : expressionNumberLatin(displayName)) ??
    1;
  return {
    native,
    latin,
    hasLatinLetters: Boolean(latinTrimmed && latin != null)
  };
}

// ============ 西洋占星術 ============
export function sunSign(month, day) {
  const { SUN_SIGNS } = getContent();
  for (const s of SUN_SIGNS) {
    const [fm, fd] = s.from;
    const [tm, td] = s.to;
    if (fm === tm) {
      if (month === fm && day >= fd && day <= td) return s;
    } else if ((month === fm && day >= fd) || (month === tm && day <= td)) {
      return s;
    }
  }
  return SUN_SIGNS[0];
}

export function moonTrait(y, m, d) {
  const { MOON_TRAITS } = getContent();
  const birth = new Date(Date.UTC(y, m - 1, d));
  const ref = new Date(Date.UTC(2000, 0, 6, 18, 14));
  const days = (birth - ref) / 86400000;
  const cycle = 29.530588;
  const phase = (((days % cycle) + cycle) % cycle) / cycle;
  if (phase < 0.25) return MOON_TRAITS[0];
  if (phase < 0.5)  return MOON_TRAITS[1];
  if (phase < 0.75) return MOON_TRAITS[2];
  return MOON_TRAITS[3];
}

// ============ 東洋占術 ============
export function chineseZodiac(year) {
  const { CHINESE_ZODIAC } = getContent();
  return CHINESE_ZODIAC[((year - 4) % 12 + 12) % 12];
}

export function sixtyJikkan(year) {
  const { HEAVENLY_STEMS, EARTHLY_BRANCHES, FIVE_ELEMENTS, YIN_YANG } = getContent();
  const idx = ((year - 4) % 60 + 60) % 60;
  return {
    name: HEAVENLY_STEMS[idx % 10] + EARTHLY_BRANCHES[idx % 12],
    element: FIVE_ELEMENTS[Math.floor((idx % 10) / 2)],
    yinyang: YIN_YANG[(idx % 10) % 2]
  };
}

export function kyuseiHonmei(year, month, day) {
  const { KYUSEI_STARS } = getContent();
  let y = year;
  if (month === 1 || (month === 2 && day < 4)) y = year - 1;
  const sum = reduceDigit(digitSum(y));
  let star = 11 - sum;
  if (star > 9) star -= 9;
  if (star < 1) star += 9;
  return KYUSEI_STARS[star];
}

export function gogyou(year) {
  const { FIVE_ELEMENTS, GOGYOU_DESCS } = getContent();
  const idx = (((year - 4) % 10) + 10) % 10;
  const element = FIVE_ELEMENTS[Math.floor(idx / 2)];
  return { element, desc: GOGYOU_DESCS[element] };
}

export function animalUranai(year, month, day) {
  const { ANIMAL_NAMES } = getContent();
  const ref = new Date(Date.UTC(1925, 3, 23));
  const birth = new Date(Date.UTC(year, month - 1, day));
  const days = Math.floor((birth - ref) / 86400000);
  const num = ((days % 60) + 60) % 60 + 1;
  const idx = (num - 1) % 12;
  return { num, name: ANIMAL_NAMES[idx] };
}

export function mayaKin(year, month, day) {
  const { MAYA_SEALS, MAYA_TONES } = getContent();
  const ref = new Date(Date.UTC(2013, 6, 26));
  const birth = new Date(Date.UTC(year, month - 1, day));
  const days = Math.floor((birth - ref) / 86400000);
  const kin = (((days + 33 - 1) % 260) + 260) % 260 + 1;
  return {
    kin,
    seal: MAYA_SEALS[(kin - 1) % 20],
    tone: MAYA_TONES[(kin - 1) % 13]
  };
}

export function tarotBirthCard(y, m, d) {
  const { TAROT_BY_NUM } = getContent();
  let sum = y + m + d;
  while (sum > 22) sum = digitSum(sum);
  return { num: sum, name: TAROT_BY_NUM[sum] };
}

export function dailyTarot(name, tarotKeys) {
  const today = new Date();
  let h = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  for (const c of name) h = (h * 31 + c.codePointAt(0)) % 1000003;
  return tarotKeys[h % tarotKeys.length];
}

export function celticTree(month, day) {
  const { CELTIC_TREES } = getContent();
  for (const t of CELTIC_TREES) {
    const [[fm, fd], [tm, td]] = t.range;
    if (fm === tm) {
      if (month === fm && day >= fd && day <= td) return t;
    } else if ((month === fm && day >= fd) || (month === tm && day <= td)) {
      return t;
    }
  }
  return CELTIC_TREES[0];
}

export const birthstone = (month) => getContent().BIRTHSTONES[month];
export const birthflower = (month) => getContent().BIRTH_FLOWERS[month];

export function biorhythm(y, m, d) {
  const birth = new Date(y, m - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.floor((today - birth) / 86400000);
  return {
    days,
    physical:     Math.sin(2 * Math.PI * days / 23),
    emotional:    Math.sin(2 * Math.PI * days / 28),
    intellectual: Math.sin(2 * Math.PI * days / 33),
    intuitive:    Math.sin(2 * Math.PI * days / 38)
  };
}

export function moonPhaseToday() {
  const { MOON_PHASE_NAMES } = getContent();
  const ref = new Date(Date.UTC(2000, 0, 6, 18, 14));
  const now = new Date();
  const days = (now - ref) / 86400000;
  const cycle = 29.530588;
  const phase = (((days % cycle) + cycle) % cycle) / cycle;
  let idx;
  if (phase < 0.03 || phase > 0.97)      idx = 0;
  else if (phase < 0.22)                  idx = 1;
  else if (phase < 0.28)                  idx = 2;
  else if (phase < 0.47)                  idx = 3;
  else if (phase < 0.53)                  idx = 4;
  else if (phase < 0.72)                  idx = 5;
  else if (phase < 0.78)                  idx = 6;
  else                                    idx = 7;
  return { phase, name: MOON_PHASE_NAMES[idx] };
}

export function lifeStage(y, m, d) {
  const { LIFE_MILESTONES } = getContent();
  const birth = new Date(y, m - 1, d);
  const today = new Date();
  const years = (today - birth) / (365.25 * 86400000);
  let next = null, prev = null;
  for (const ms of LIFE_MILESTONES) {
    if (ms.age >= years) { next = ms; break; }
    prev = ms;
  }
  return { years, next, prev };
}
