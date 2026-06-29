/**
 * すべての占術計算ロジック。純粋関数で構成される。
 * 表示名・辞書は getContent() からロケールに応じて取得する。
 */

import { getContent } from './i18n/index.js';
import { hasKana, kanaToHepburn } from './kanaHepburn.js';

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

/** 個人月（個人年 + 暦月を還元） */
export function personalMonth(py, calendarMonth) {
  return reduceDigit(py + reduceDigit(calendarMonth));
}

/**
 * 指定年の12ヶ月ぶん個人月カレンダー。
 */
export function personalYearMonthCalendar(py, year) {
  const now = new Date();
  const curMo = now.getMonth() + 1;
  const curY = now.getFullYear();
  const out = [];
  for (let mo = 1; mo <= 12; mo++) {
    const pm = personalMonth(py, mo);
    out.push({
      month: mo,
      year,
      personalMonth: pm,
      isCurrent: mo === curMo && year === curY,
      isAction: pm === 1 || pm === 3 || pm === 8,
      isWait: pm === 2 || pm === 7,
      isWatch: pm === 5 || pm === 9
    });
  }
  return out;
}

/** 九星気学の年サイクル位置 1–9 */
export function kyuseiCycleYear(birthYear, currentYear) {
  return ((currentYear - birthYear) % 9 + 9) % 9 + 1;
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
 * ローマ字未入力時、かな部分をヘボン式に変換して国際式数秘の入力に使う。
 */
function inferLatinFromDisplay(displayName) {
  if (!hasKana(displayName)) return null;
  const hepburn = kanaToHepburn(displayName);
  if (!hepburn || !expressionNumberLatin(hepburn)) return null;
  return hepburn;
}

/**
 * 表示名 + ローマ字（任意）から二系統の名前数を返す。
 * @returns {{
 *   native: number,
 *   latin: number|null,
 *   latinName: string|null,
 *   latinSource: 'roman'|'hepburn'|null,
 *   hasExplicitRoman: boolean,
 *   hasLatinLetters: boolean
 * }}
 */
export function expressionProfile(displayName, romanName = '') {
  const latinTrimmed = romanName.trim();
  let latinName = latinTrimmed || null;
  let latinSource = latinTrimmed ? 'roman' : null;

  if (!latinName) {
    const inferred = inferLatinFromDisplay(displayName);
    if (inferred) {
      latinName = inferred;
      latinSource = 'hepburn';
    }
  }

  const latin = latinName ? expressionNumberLatin(latinName) : null;
  const native =
    expressionNumberNative(displayName) ??
    (latinTrimmed ? null : expressionNumberLatin(displayName)) ??
    1;

  return {
    native,
    latin,
    latinName: latin && latinName ? latinName : null,
    latinSource: latin ? latinSource : null,
    hasExplicitRoman: Boolean(latinTrimmed && latin != null),
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

/**
 * 今後 span 年ぶんの「個人年サイクル + 年齢 + その年に重なる人生の節目」を返す。
 * 10年タイムライン UI のためのデータ。純粋関数（startYear は引数で渡す）。
 *
 * @param {number} y 生まれ年
 * @param {number} m 生まれ月
 * @param {number} d 生まれ日
 * @param {number} startYear 起点の暦年（通常は今年）
 * @param {number} span 何年分か
 * @returns {Array<{ year:number, age:number, py:number, milestones:Array, isCurrent:boolean }>}
 */
export function lifeTimeline(y, m, d, startYear, span = 10) {
  const { LIFE_MILESTONES } = getContent();
  const out = [];
  for (let i = 0; i < span; i++) {
    const year = startYear + i;
    const age = year - y;
    const py = personalYear(m, d, year);
    const milestones = LIFE_MILESTONES.filter(ms => Math.floor(ms.age) === age);
    out.push({ year, age, py, milestones, isCurrent: i === 0 });
  }
  return out;
}

/** 任意日時の月相位相 0–1（0=新月付近, 0.5=満月付近） */
export function moonPhaseAt(date) {
  const ref = new Date(Date.UTC(2000, 0, 6, 18, 14));
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  const days = (d - ref) / 86400000;
  const cycle = 29.530588;
  return (((days % cycle) + cycle) % cycle) / cycle;
}

/**
 * 起点日から spanDays 先までの新月・満月イベント。
 * @returns {Array<{ date: Date, type: 'new'|'full', phase: number }>}
 */
export function lunarEventsAhead(startDate = new Date(), spanDays = 400) {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const events = [];
  let prev = moonPhaseAt(start);

  for (let i = 1; i <= spanDays; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const phase = moonPhaseAt(date);

    if (prev > 0.85 && phase < 0.2) {
      const last = events[events.length - 1];
      if (!last || last.type !== 'new' || (date - last.date) / 86400000 > 18) {
        events.push({ date: new Date(date), type: 'new', phase });
      }
    }
    if (prev < 0.48 && phase >= 0.5) {
      events.push({ date: new Date(date), type: 'full', phase });
    }
    prev = phase;
  }
  return events;
}

/** 誕生時の月相カテゴリ 0–3（moonTrait と同じ区分） */
export function birthMoonPhaseIndex(y, m, d) {
  const phase = moonPhaseAt(new Date(y, m - 1, d));
  if (phase < 0.25) return 0;
  if (phase < 0.5) return 1;
  if (phase < 0.75) return 2;
  return 3;
}

/**
 * 今後 span 日ぶんのバイオリズム予測。
 * @returns {Array<{ date:Date, y:number, mo:number, day:number, physical:number, emotional:number, intellectual:number, intuitive:number, critical:boolean, isToday:boolean }>}
 */
export function biorhythmForecast(y, m, d, span = 90, startOffset = 0) {
  const birth = new Date(y, m - 1, d);
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  const wave = (days, period) => Math.sin(2 * Math.PI * days / period);
  const crossesZero = (v, prev) => (prev < 0 && v >= 0) || (prev > 0 && v <= 0);

  const rows = [];
  let prevP = 0;
  let prevE = 0;
  let prevI = 0;
  let prevN = 0;

  for (let i = 0; i < span; i++) {
    const date = new Date(base);
    date.setDate(base.getDate() + startOffset + i);
    const days = Math.floor((date - birth) / 86400000);
    const physical = wave(days, 23);
    const emotional = wave(days, 28);
    const intellectual = wave(days, 33);
    const intuitive = wave(days, 38);
    const critical = crossesZero(physical, prevP) || crossesZero(emotional, prevE)
      || crossesZero(intellectual, prevI) || crossesZero(intuitive, prevN);

    rows.push({
      date,
      y: date.getFullYear(),
      mo: date.getMonth() + 1,
      day: date.getDate(),
      physical,
      emotional,
      intellectual,
      intuitive,
      critical,
      isToday: startOffset === 0 && i === 0
    });
    prevP = physical;
    prevE = emotional;
    prevI = intellectual;
    prevN = intuitive;
  }
  return rows;
}

/** 五行・西洋元素名を LUCKY_COMPASS のキーに正規化 */
export function normalizeElementKey(element) {
  const map = {
    Fire: 'fire', Earth: 'earth', Air: 'air', Water: 'water',
    Wood: 'wood', Metal: 'metal',
    火: 'fire', 土: 'earth', 金: 'metal', 水: 'water', 木: 'wood'
  };
  return map[element] || 'earth';
}

/**
 * ラッキー要素コンパス（数秘・太陽・九星・五行から合成）。
 * 辞書は getContent().LUCKY_COMPASS を参照。
 */
export function luckyCompass(lp, sunElement, kyuseiElement, gogyouElement) {
  const { LUCKY_COMPASS } = getContent();
  const primary = normalizeElementKey(kyuseiElement || sunElement);
  const secondary = normalizeElementKey(gogyouElement || sunElement);
  const base = LUCKY_COMPASS[primary] || LUCKY_COMPASS.earth;
  const alt = LUCKY_COMPASS[secondary] || base;
  const luckyNumbers = [...new Set([lp, reduceDigit(lp + 3), reduceDigit(lp + 5)])].sort((a, b) => a - b);
  return {
    primary,
    colors: [...new Set([...base.colors, ...alt.colors])].slice(0, 3),
    numbers: luckyNumbers,
    days: base.days,
    hint: base.hint
  };
}
