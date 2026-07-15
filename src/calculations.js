/**
 * すべての占術計算ロジック。純粋関数で構成される。
 * 表示名・辞書は getContent() からロケールに応じて取得する。
 */

import * as Astronomy from 'astronomy-engine';
import { getContent } from './i18n/index.js';
import { hasKana, kanaToHepburn } from './kanaHepburn.js';
import { normalizeElementKey } from './util.js';
import { RISSHUN } from './data/risshun.js';

export { normalizeElementKey };

/**
 * 立春切替での「暦年(effective year)」を返す純粋関数。
 * 干支・五行・九星など東洋占術の年切替を、西暦1月1日ではなく立春に統一するための共通ヘルパー。
 * その年の立春(RISSHUN テーブルの [月, 日])より前の生まれは前年扱いにする。
 *
 * month/day を省略した場合は年をそのまま返す(＝立春補正なし)。
 * テーブル範囲外(1900未満・2100超)は立春日を [2, 4] にフォールバックし、例外は投げない。
 *
 * @param {number} year 西暦
 * @param {number} [month] 月(1–12)
 * @param {number} [day] 日
 * @returns {number} 立春切替での暦年
 */
export function risshunEffectiveYear(year, month, day) {
  const [rm, rd] = RISSHUN[year] ?? [2, 4];
  if (month < rm || (month === rm && day < rd)) return year - 1;
  return year;
}

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
/**
 * 個別還元方式(Numerology.com / Decoz 系)に従う。
 * 年・月・日をそれぞれ個別に還元(11/22/33は保持)してから合計し、
 * その合計をさらに還元(11/22/33は保持)する。
 * 全桁合計方式(旧実装)から2026-07変更(Issue #10)。
 */
export function lifePath(y, m, d) {
  const yr = reduceDigit(digitSum(y), true);
  const mo = reduceDigit(m, true);
  const dy = reduceDigit(d, true);
  return reduceDigit(yr + mo + dy, true);
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

const NON_LEAP_MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/** うるう年を無視した通算日(1〜365)。月境界の前後比較専用の内部ヘルパー。 */
function dayOfYearApprox(month, day) {
  let doy = day;
  for (let i = 0; i < month - 1; i++) doy += NON_LEAP_MONTH_DAYS[i];
  return doy;
}

/**
 * 太陽星座の境界日(カスプ)から±1日以内かどうか。
 * 実際の入座(トロピカル黄経の切替)は年により前後1日程度ずれるため、
 * 固定表の境界付近の生まれは隣の星座になる場合がある(docs/audit/parts/others.md §2)。
 */
export function isSunSignCusp(month, day) {
  const { SUN_SIGNS } = getContent();
  const target = dayOfYearApprox(month, day);
  for (const s of SUN_SIGNS) {
    for (const [bm, bd] of [s.from, s.to]) {
      const b = dayOfYearApprox(bm, bd);
      const diff = Math.min(Math.abs(target - b), 365 - Math.abs(target - b));
      if (diff <= 1) return true;
    }
  }
  return false;
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

/**
 * 月の地心黄経(トロピカル)を astronomy-engine で計算する。
 * @returns {number} 0–360度
 */
function moonEclipticLongitude(y, m, d, hourUTC) {
  const time = Astronomy.MakeTime(new Date(Date.UTC(y, m - 1, d, hourUTC, 0, 0)));
  return Astronomy.EclipticGeoMoon(time).lon;
}

/**
 * トロピカル黄経(0–360度)を SUN_SIGNS の index(0=山羊座…)に変換する。
 * 黄経0度=牡羊座(SUN_SIGNS[3])を基準に、SUN_SIGNS の並び順(山羊座始まり)へオフセットする。
 * 太陽の春分点(黄経0度≒3/20 牡羊座入り)・冬至点(黄経270度≒12/22 山羊座入り)と
 * SUN_SIGNS の日付境界が一致することで検証済み。
 */
function eclipticLongitudeToSignIndex(lon) {
  const tropicalIdx = Math.floor(lon / 30); // 0=牡羊座 … 11=魚座
  return (tropicalIdx + 3) % 12;
}

/**
 * 月星座(西洋占星術)。出生時刻不明のため正午JST(UTC 03:00)で計算する。
 * astronomy-engine の地心黄経を SUN_SIGNS の星座名にマップする(太陽星座と同じ辞書を流用。
 * 月と太陽で星座名自体は共通のため新規辞書は不要)。
 * 月は約2.2〜2.5日で星座を移動するため、当日の始まり(00:00 JST)と終わり(23:59 JST)で
 * 星座が変わる場合は「境界日」とみなし、両方の星座名を返す。
 * @returns {{ sign: object, cuspSign: object|null }}
 */
export function moonSign(y, m, d) {
  const { SUN_SIGNS } = getContent();
  const noonLon = moonEclipticLongitude(y, m, d, 3); // 正午JST = UTC 03:00
  const noonIdx = eclipticLongitudeToSignIndex(noonLon);
  const sign = SUN_SIGNS[noonIdx];

  // JST の日の始まり(UTC前日15:00)と終わり(UTC当日14:59)で星座が変わるかを見て境界日を判定する。
  // 正午の星座と異なる方(遷移前 or 遷移後)を cuspSign として返す。
  const startIdx = eclipticLongitudeToSignIndex(moonEclipticLongitude(y, m, d - 1, 15));
  const endIdx = eclipticLongitudeToSignIndex(moonEclipticLongitude(y, m, d, 14));
  let cuspIdx = null;
  if (startIdx !== noonIdx) cuspIdx = startIdx;
  else if (endIdx !== noonIdx) cuspIdx = endIdx;
  const cuspSign = cuspIdx !== null ? SUN_SIGNS[cuspIdx] : null;

  return { sign, cuspSign };
}

// ============ 東洋占術 ============
export function chineseZodiac(year, month, day) {
  const { CHINESE_ZODIAC } = getContent();
  const y = risshunEffectiveYear(year, month, day);
  return CHINESE_ZODIAC[((y - 4) % 12 + 12) % 12];
}

export function sixtyJikkan(year, month, day) {
  const { HEAVENLY_STEMS, EARTHLY_BRANCHES, FIVE_ELEMENTS, YIN_YANG } = getContent();
  const y = risshunEffectiveYear(year, month, day);
  const idx = ((y - 4) % 60 + 60) % 60;
  const stem = HEAVENLY_STEMS[idx % 10];
  const branch = EARTHLY_BRANCHES[idx % 12];
  const glue = (stem.length > 1 || branch.length > 1) ? ' ' : '';
  return {
    name: stem + glue + branch,
    element: FIVE_ELEMENTS[Math.floor((idx % 10) / 2)],
    yinyang: YIN_YANG[(idx % 10) % 2]
  };
}

export function kyuseiHonmei(year, month, day) {
  const { KYUSEI_STARS } = getContent();
  const y = risshunEffectiveYear(year, month, day);
  const sum = reduceDigit(digitSum(y));
  let star = 11 - sum;
  if (star > 9) star -= 9;
  if (star < 1) star += 9;
  return KYUSEI_STARS[star];
}

export function gogyou(year, month, day) {
  const { FIVE_ELEMENTS, GOGYOU_DESCS } = getContent();
  const y = risshunEffectiveYear(year, month, day);
  const idx = (((y - 4) % 10) + 10) % 10;
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

const MAYA_EPOCH = Date.UTC(2013, 6, 26); // 2013-07-26 = KIN 164「銀河の黄色い種」(ドリームスペル公式)
const MAYA_EPOCH_KIN = 164;

// 半開区間 (a, b]（a < b, UTC ミリ秒）に含まれる 2/29 の個数。
function countLeapDays(a, b) {
  let count = 0;
  const ya = new Date(a).getUTCFullYear();
  const yb = new Date(b).getUTCFullYear();
  for (let y = ya; y <= yb; y++) {
    const feb29 = Date.UTC(y, 1, 29);
    if (new Date(feb29).getUTCDate() === 29 && feb29 > a && feb29 <= b) count++;
  }
  return count;
}

/**
 * 任意日のマヤ暦 KIN(1–260)を返す共通関数。
 * ドリームスペル公式(2/29 は KIN を持たない日としてスキップ)に従う。
 * 起点 2013-07-26 = KIN 164 を基準に、起点と対象日の間にある 2/29 を日数から除外して 260 剰余する。
 * 過去方向(起点より前)も正しく動く。
 * ※ 2/29 生まれ自体は公式では「KIN なし(0.0 Hunab Ku)」だが、UI 破壊を避けるため
 *   2/28 と同じ KIN を返す暫定仕様(docs/learnings/maya-feb29-no-kin.md 参照)。
 */
export function mayaDayKin(year, month, day) {
  if (month === 2 && day === 29) day = 28; // 2/29 は 2/28 と同じ KIN(暫定)
  const target = Date.UTC(year, month - 1, day);
  const raw = Math.round((target - MAYA_EPOCH) / 86400000);
  const net = target >= MAYA_EPOCH
    ? raw - countLeapDays(MAYA_EPOCH, target)
    : raw + countLeapDays(target, MAYA_EPOCH);
  return (((net + MAYA_EPOCH_KIN - 1) % 260) + 260) % 260 + 1;
}

export function mayaKin(year, month, day) {
  const { MAYA_SEALS, MAYA_TONES } = getContent();
  const kin = mayaDayKin(year, month, day);
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
  // Mary K. Greer 方式に従う: 還元結果 22 は愚者(0)に対応する。
  // TAROT_BY_NUM は index 0=愚者 … 21=世界 なので 22 を 0 に写す。
  if (sum === 22) sum = 0;
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

/** 月相位相 0–1 を8分類の月相名に写す（MOON_PHASE_NAMES を引く）。 */
export function moonPhaseName(phase) {
  const { MOON_PHASE_NAMES } = getContent();
  let idx;
  if (phase < 0.03 || phase > 0.97)      idx = 0;
  else if (phase < 0.22)                  idx = 1;
  else if (phase < 0.28)                  idx = 2;
  else if (phase < 0.47)                  idx = 3;
  else if (phase < 0.53)                  idx = 4;
  else if (phase < 0.72)                  idx = 5;
  else if (phase < 0.78)                  idx = 6;
  else                                    idx = 7;
  return MOON_PHASE_NAMES[idx];
}

export function moonPhaseToday() {
  const ref = new Date(Date.UTC(2000, 0, 6, 18, 14));
  const now = new Date();
  const days = (now - ref) / 86400000;
  const cycle = 29.530588;
  const phase = (((days % cycle) + cycle) % cycle) / cycle;
  return { phase, name: moonPhaseName(phase) };
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

/** 六十干支のサイクル位置（0–59）。month/day を渡すと立春切替で年を補正する。 */
export function sixtyCycleIndex(year, month, day) {
  const y = risshunEffectiveYear(year, month, day);
  return ((y - 4) % 60 + 60) % 60;
}

/** マヤ暦の関連 KIN（ガイド・アンチポッド・オカルト）
 * ドリームスペル公式(広く流通する定説。一次照合は未確認)に従う:
 * - オカルト(神秘) = 261 − kin(2つの KIN の合計が 261 になる相手)
 * - アンチポッド(反対) = kin + 130(同じ音・対極の紋章)
 * - ガイド(導き) = 自分と同じ音を持ち、紋章が音で決まるオフセット分ずれた KIN。
 *   音1/6/11=同紋章, 音2/7/12=紋章+12, 音3/8/13=紋章−4, 音4/9=紋章+4, 音5/10=紋章+8。
 *   紋章と音から KIN を求めるのは「kin ≡ sealIdx (mod 20) かつ kin ≡ toneIdx (mod 13)」を満たす
 *   1..260 の探索でよい(音は自分と同じなので guide の音は必ず一致する)。
 */
export function mayaRelatedKin(kin) {
  const mod = (n) => (((n - 1) % 260) + 260) % 260 + 1;
  const sealIdx = (kin - 1) % 20;
  const toneIdx = (kin - 1) % 13;
  const tone = toneIdx + 1;
  let off;
  if (tone === 1 || tone === 6 || tone === 11) off = 0;
  else if (tone === 2 || tone === 7 || tone === 12) off = 12;
  else if (tone === 3 || tone === 8 || tone === 13) off = -4;
  else if (tone === 4 || tone === 9) off = 4;
  else off = 8; // 音 5・10
  const guideSeal = (((sealIdx + off) % 20) + 20) % 20;
  let guide = kin;
  for (let g = 1; g <= 260; g++) {
    if ((g - 1) % 20 === guideSeal && (g - 1) % 13 === toneIdx) { guide = g; break; }
  }
  return { guide, antipode: mod(kin + 130), occult: 261 - kin };
}

/** 九星気学の月命星（簡易式） */
export function kyuseiMonthStar(month, day) {
  let s = reduceDigit(month + day);
  while (s > 9) s = digitSum(s);
  return s || 1;
}

/** 九星気学の日命星（簡易式） */
export function kyuseiDayStar(day) {
  let s = reduceDigit(day);
  while (s > 9) s = digitSum(s);
  return s || 1;
}

/** 十二支の関係（六合・三合・冲・中立） */
export function zodiacRelation(a, b) {
  const liuhe = [[0, 1], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]];
  if (liuhe.some(([x, y]) => (x === a && y === b) || (x === b && y === a))) return 'liuhe';
  const sanhe = [[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7, 11]];
  if (sanhe.some(g => g.includes(a) && g.includes(b) && a !== b)) return 'sanhe';
  if ((a - b + 12) % 12 === 6) return 'chong';
  return 'neutral';
}

/** 五行の相生・相克関係 */
export function gogyouRelation(el, other, elements) {
  const els = elements || getContent().FIVE_ELEMENTS;
  const i = els.indexOf(el);
  const j = els.indexOf(other);
  if (i < 0 || j < 0) return 'neutral';
  if (i === j) return 'same';
  if ((i + 1) % 5 === j) return 'generate';
  if ((i + 2) % 5 === j) return 'overcome';
  if ((j + 1) % 5 === i) return 'generated';
  if ((j + 2) % 5 === i) return 'overcame';
  return 'neutral';
}

/** 動物占いのグループ（月・地・太陽） */
export function animalGroupIndex(animalIdx) {
  return animalIdx % 3;
}

/** 指定日のデイリータロット */
export function dailyTarotForDate(name, tarotKeys, date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  let h = y * 10000 + m * 100 + d;
  for (const c of name) h = (h * 31 + c.codePointAt(0)) % 1000003;
  return tarotKeys[h % tarotKeys.length];
}

/** 連続日のデイリータロット */
export function dailyTarotWeek(name, tarotKeys, days = 7, start = new Date()) {
  const out = [];
  for (let i = 0; i < days; i++) {
    const dt = new Date(start);
    dt.setDate(dt.getDate() + i);
    out.push({ date: dt, key: dailyTarotForDate(name, tarotKeys, dt) });
  }
  return out;
}

/** 通過済み・これからの人生節目 */
export function lifeMilestonesAround(y, m, d, spanYears = 15) {
  const { LIFE_MILESTONES } = getContent();
  const { years } = lifeStage(y, m, d);
  const passed = LIFE_MILESTONES.filter(ms => ms.age <= years + 0.01);
  const upcoming = LIFE_MILESTONES.filter(ms => ms.age > years && ms.age <= years + spanYears);
  return { passed, upcoming, years };
}

/** バイオリズムのクリティカル日一覧 */
export function biorhythmCriticalDays(y, m, d, span = 90) {
  return biorhythmForecast(y, m, d, span).filter(r => r.critical);
}

/** 月相が新月・満月に近いか（簡易判定） */
export function lunarMilestoneType(phase) {
  const p = ((phase % 1) + 1) % 1;
  if (p < 0.04 || p > 0.96) return 'new';
  if (p > 0.46 && p < 0.54) return 'full';
  return null;
}

/**
 * 統合サイクルプランナー用：個人月・月相・バイオ・九星日盤を日ごとに並べる。
 * @returns {Array<ReturnType<typeof biorhythmForecast>[number] & { py:number, pm:number, moonPhase:number, moonName:string, lunar:'new'|'full'|null, ksIdx:number }>}
 */
export function cyclesDayPlan(y, m, d, days = 30, startOffset = 0) {
  const bioRows = biorhythmForecast(y, m, d, days, startOffset);
  return bioRows.map(bio => {
    const py = personalYear(m, d, bio.y);
    const pm = personalMonth(py, bio.mo);
    // moonPhaseAt は位相の数値(0–1)を返す。名前・新満は位相から導く
    // （旧実装は moon.phase/moon.name とオブジェクト参照して常に undefined になっていた）。
    const moonPhase = moonPhaseAt(bio.date);
    return {
      ...bio,
      py,
      pm,
      moonPhase,
      moonName: moonPhaseName(moonPhase),
      lunar: lunarMilestoneType(moonPhase),
      ksIdx: kyuseiDayStar(bio.day)
    };
  });
}
