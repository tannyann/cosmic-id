/**
 * calculations.js の回帰テスト。
 *
 * 期待値の出どころは3種類あり、コメントで区別している:
 *  - [既知値]   AGENTS.md「テストとデバッグ」/ README の手動チェックリスト
 *  - [外部照合] 一般に知られる暦・干支等の事実(例: 2024年=甲辰)
 *  - [回帰ピン] 現状実装の出力を固定したもの。正しさの保証ではなく
 *               「変わったら気づく」ための安全網。流派妥当性は docs/audit/ 参照。
 *
 * 「今日」に依存する関数(biorhythm / moonPhaseToday / dailyTarot / lifeStage 等)は
 * vi.setSystemTime で日付を固定して決定的にテストする。
 * 月相系は実行環境のタイムゾーンに依存するため、境界に近い断言は幅を持たせている。
 */
import './setup-locale.js';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getContent } from '../i18n/index.js';
import {
  reduceDigit, lifePath, personalYear, personalMonth, personalYearMonthCalendar,
  kyuseiCycleYear, expressionNumberLatin, expressionNumberNative, expressionNumber,
  expressionProfile, sunSign, moonTrait, chineseZodiac, sixtyJikkan, kyuseiHonmei,
  gogyou, animalUranai, mayaKin, tarotBirthCard, dailyTarot, celticTree,
  birthstone, birthflower, biorhythm, moonPhaseToday, lifeStage, lifeTimeline,
  moonPhaseAt, lunarEventsAhead, birthMoonPhaseIndex, biorhythmForecast,
  luckyCompass, sixtyCycleIndex, mayaRelatedKin, kyuseiMonthStar, kyuseiDayStar,
  zodiacRelation, gogyouRelation, animalGroupIndex, dailyTarotForDate,
  dailyTarotWeek, lifeMilestonesAround, biorhythmCriticalDays, lunarMilestoneType,
  cyclesDayPlan, normalizeElementKey
} from '../calculations.js';

// ============ ユーティリティ ============
describe('reduceDigit', () => {
  it('1桁まで還元する', () => {
    expect(reduceDigit(30)).toBe(3);
    expect(reduceDigit(9)).toBe(9);
    expect(reduceDigit(10)).toBe(1);
  });
  it('keepMaster=true なら 11/22/33 で止まる(途中経過で現れた場合も)', () => {
    expect(reduceDigit(11, true)).toBe(11);
    expect(reduceDigit(22, true)).toBe(22);
    expect(reduceDigit(33, true)).toBe(33);
    expect(reduceDigit(38, true)).toBe(11); // 38 → 11 で停止
  });
  it('keepMaster=false ならマスターナンバーも還元する', () => {
    expect(reduceDigit(11)).toBe(2);
    expect(reduceDigit(38)).toBe(2);
  });
});

// ============ 数秘術 ============
describe('lifePath', () => {
  it('[既知値] 1990-05-15 → 3', () => {
    expect(lifePath(1990, 5, 15)).toBe(3);
  });
  it('[既知値] 2000-01-01 → 4', () => {
    expect(lifePath(2000, 1, 1)).toBe(4);
  });
  it('マスターナンバーを保持する(全桁合計方式)', () => {
    expect(lifePath(2000, 4, 5)).toBe(11);  // 2+4+5=11
    expect(lifePath(1972, 2, 1)).toBe(22);  // 19+2+1=22
    expect(lifePath(1984, 3, 8)).toBe(33);  // 22+3+8=33
  });
});

describe('personalYear / personalMonth', () => {
  it('個人年: 5/15 生まれの 2026 年 → 3', () => {
    // reduce(5)+reduce(15)+reduce(2026) = 5+6+1 = 12 → 3
    expect(personalYear(5, 15, 2026)).toBe(3);
  });
  it('個人月は個人年+暦月の還元', () => {
    expect(personalMonth(3, 12)).toBe(6); // 3 + reduce(12)=3 → 6
    expect(personalMonth(9, 9)).toBe(9);  // 18 → 9
  });
});

describe('expressionNumber (名前の数秘)', () => {
  it('ピタゴラス式 A–Z 換算', () => {
    expect(expressionNumberLatin('JOHN')).toBe(2);      // 1+6+8+5=20→2
    expect(expressionNumberLatin('Mary Kate')).toBe(4); // 31→4
    expect(expressionNumberLatin('BI')).toBe(11);       // マスター保持
    expect(expressionNumberLatin('')).toBeNull();
    expect(expressionNumberLatin('12345')).toBeNull();  // 英字なし
  });
  it('[回帰ピン] 非ラテン文字はコードポイント合計 mod 9(独自系統)', () => {
    expect(expressionNumberNative('あ')).toBe(6); // U+3042=12354 → mod 9 = 6
    expect(expressionNumberNative('abc')).toBeNull(); // ラテン文字は対象外
  });
  it('expressionNumber は native → latin → 1 の順にフォールバック', () => {
    expect(expressionNumber('')).toBe(1);
    expect(expressionNumber('JOHN')).toBe(2);
  });
  it('expressionProfile: ローマ字明示入力', () => {
    const p = expressionProfile('山田', 'Yamada');
    expect(p.latin).toBe(9); // Y7+A1+M4+A1+D4+A1=18→9
    expect(p.latinSource).toBe('roman');
    expect(p.hasExplicitRoman).toBe(true);
    expect(p.native).toBeGreaterThanOrEqual(1);
    expect(p.native).toBeLessThanOrEqual(9);
  });
  it('expressionProfile: かな名からヘボン式を推定する', () => {
    const p = expressionProfile('やまだ', '');
    expect(p.latinSource).toBe('hepburn');
    expect(p.latin).toBe(9); // yamada → 18 → 9
    expect(p.hasExplicitRoman).toBe(false);
  });
  it('expressionProfile: 英字のみの表示名は native がラテン換算になる', () => {
    const p = expressionProfile('Taro', '');
    expect(p.native).toBe(9); // T2+A1+R9+O6=18→9
    expect(p.latin).toBeNull();
  });
});

// ============ 西洋占星術 ============
describe('sunSign', () => {
  it('[既知値] 12/31 と 12/24 は山羊座(冬至境界)', () => {
    expect(sunSign(12, 31).name).toBe('山羊座');
    expect(sunSign(12, 24).name).toBe('山羊座');
  });
  it('年またぎ境界: 12/21 射手座, 12/22 山羊座, 1/19 山羊座, 1/20 水瓶座', () => {
    expect(sunSign(12, 21).name).toBe('射手座');
    expect(sunSign(12, 22).name).toBe('山羊座');
    expect(sunSign(1, 19).name).toBe('山羊座');
    expect(sunSign(1, 20).name).toBe('水瓶座');
  });
  it('年内境界: 4/19 牡羊座, 4/20 牡牛座', () => {
    expect(sunSign(4, 19).name).toBe('牡羊座');
    expect(sunSign(4, 20).name).toBe('牡牛座');
  });
});

describe('moonTrait / birthMoonPhaseIndex', () => {
  it('[回帰ピン] 2000-01-07(基準新月の翌日・UTC計算)は新月期', () => {
    expect(moonTrait(2000, 1, 7).name).toBe('新月期生まれ');
  });
  it('常に MOON_TRAITS のいずれかを返す', () => {
    const { MOON_TRAITS } = getContent();
    expect(MOON_TRAITS).toContain(moonTrait(1990, 5, 15));
  });
  it('birthMoonPhaseIndex は 0–3 を返す', () => {
    const idx = birthMoonPhaseIndex(1990, 5, 15);
    expect([0, 1, 2, 3]).toContain(idx);
  });
});

// ============ 東洋占術 ============
describe('chineseZodiac', () => {
  it('[既知値] 1990 → 午年', () => {
    expect(chineseZodiac(1990).name).toContain('午');
  });
  it('[既知値] 2024 → 辰年', () => {
    expect(chineseZodiac(2024).name).toContain('辰');
  });
  it('[外部照合] 1984 → 子年(六十干支の起点)', () => {
    expect(chineseZodiac(1984).name).toContain('子');
  });
});

describe('sixtyJikkan / sixtyCycleIndex', () => {
  it('[外部照合] 1984 → 甲子(木・陽)', () => {
    const s = sixtyJikkan(1984);
    expect(s.name).toBe('甲子');
    expect(s.element).toBe('木');
    expect(s.yinyang).toBe('陽');
  });
  it('[外部照合] 2024 → 甲辰、1990 → 庚午(金・陽)', () => {
    expect(sixtyJikkan(2024).name).toBe('甲辰');
    const s = sixtyJikkan(1990);
    expect(s.name).toBe('庚午');
    expect(s.element).toBe('金');
  });
  it('sixtyCycleIndex は 0–59 で循環する', () => {
    expect(sixtyCycleIndex(1984)).toBe(0);
    expect(sixtyCycleIndex(2024)).toBe(40);
    expect(sixtyCycleIndex(1900)).toBe(36);
  });
});

describe('kyuseiHonmei (本命星・立春補正)', () => {
  it('[既知値] 2024年生まれ(立春後) → 三碧木星', () => {
    expect(kyuseiHonmei(2024, 6, 1).name).toBe('三碧木星');
  });
  it('[既知値] 2000-01-01 → 立春補正で一白水星(前年 1999 扱い)', () => {
    expect(kyuseiHonmei(2000, 1, 1).name).toBe('一白水星');
  });
  it('[既知値] 補正がなければ 2000 年は九紫火星(2/4 以降生まれ)', () => {
    expect(kyuseiHonmei(2000, 2, 4).name).toBe('九紫火星');
  });
  it('[既知値] 立春前(2/1)生まれは前年扱いになる', () => {
    expect(kyuseiHonmei(2000, 2, 1).name).toBe('一白水星'); // 1999 扱い
    expect(kyuseiHonmei(2000, 2, 3).name).toBe('一白水星'); // 2/3 も前年
  });
  it('[外部照合] 1990-05-15 → 一白水星', () => {
    expect(kyuseiHonmei(1990, 5, 15).name).toBe('一白水星');
  });
});

describe('kyuseiCycleYear / kyuseiMonthStar / kyuseiDayStar (簡易式)', () => {
  it('年サイクルは 1–9 で循環する', () => {
    expect(kyuseiCycleYear(1990, 2026)).toBe(1); // 36 % 9 = 0 → 1
    expect(kyuseiCycleYear(2020, 2026)).toBe(7);
  });
  it('[回帰ピン] 月命星・日命星は数字還元の簡易式(流派式との乖離は docs/audit 参照)', () => {
    expect(kyuseiMonthStar(12, 31)).toBe(7); // 43 → 7
    expect(kyuseiDayStar(29)).toBe(2);       // 29 → 11 → 2
    expect(kyuseiDayStar(9)).toBe(9);
  });
});

describe('gogyou', () => {
  it('[外部照合] 1990(庚) → 金、2024(甲) → 木', () => {
    expect(gogyou(1990).element).toBe('金');
    expect(gogyou(2024).element).toBe('木');
    expect(gogyou(1990).desc).toBeTruthy();
  });
});

describe('animalUranai (12分類・簡易60日サイクル)', () => {
  it('[回帰ピン] 起点 1925-04-23 は num=1(狼)', () => {
    expect(animalUranai(1925, 4, 23)).toEqual({ num: 1, name: '狼' });
  });
  it('[回帰ピン] 1990-05-15 → num=4 チータ', () => {
    expect(animalUranai(1990, 5, 15)).toEqual({ num: 4, name: 'チータ' });
  });
  it('60日で一周する', () => {
    const a = animalUranai(2000, 1, 1);
    const b = animalUranai(2000, 3, 1); // +60日
    expect(b.num).toBe(a.num);
  });
  it('animalGroupIndex は 0–2(月・地・太陽)', () => {
    expect(animalGroupIndex(0)).toBe(0);
    expect(animalGroupIndex(4)).toBe(1);
    expect(animalGroupIndex(11)).toBe(2);
  });
});

describe('mayaKin (ドリームスペル起点 2013-07-26 = KIN33)', () => {
  it('起点日は KIN 33', () => {
    const k = mayaKin(2013, 7, 26);
    expect(k.kin).toBe(33);
    expect(k.seal).toBe('赤い空歩く人'); // (33-1) % 20 = 12
    expect(k.tone).toBe('共振の');       // (33-1) % 13 = 6
  });
  it('260日で一周する(2014-04-12 = KIN33)', () => {
    expect(mayaKin(2014, 4, 12).kin).toBe(33);
  });
  it('[回帰ピン] 1990-05-15 → KIN140(現実装はうるう日もカウントする連続日数方式)', () => {
    const k = mayaKin(1990, 5, 15);
    expect(k.kin).toBe(140);
    expect(k.seal).toBe('黄色い太陽');
    expect(k.tone).toBe('惑星の');
  });
  it('mayaRelatedKin は 1–260 に折り返す', () => {
    expect(mayaRelatedKin(33)).toEqual({ guide: 52, antipode: 163, occult: 98 });
    expect(mayaRelatedKin(260)).toEqual({ guide: 19, antipode: 130, occult: 65 });
  });
});

// ============ タロット ============
describe('tarotBirthCard', () => {
  it('[回帰ピン] 1990-05-15 → 3 女帝', () => {
    expect(tarotBirthCard(1990, 5, 15)).toEqual({ num: 3, name: '女帝' });
  });
  it('[回帰ピン] 2000-01-01 → 4 皇帝', () => {
    expect(tarotBirthCard(2000, 1, 1)).toEqual({ num: 4, name: '皇帝' });
  });
  it('【バグ報告】sum がちょうど 22 のとき name が undefined になる', () => {
    // 1930+6+12=1948 → 桁和 22 で停止するが、TAROT_BY_NUM は index 0–21(22=世界は21)。
    // 一般的な流派では 22 → 愚者(0) に読み替える。修正方針は依頼主判断のため、
    // ここでは現状の挙動を固定して「直したらこのテストを更新する」目印にする。
    const t = tarotBirthCard(1930, 6, 12);
    expect(t.num).toBe(22);
    expect(t.name).toBeUndefined(); // ← バグ。修正時はこの行を期待値に置き換える
  });
});

describe('dailyTarot 系(日付を固定して決定的に)', () => {
  const keys = ['魔術師', '女教皇', '女帝', '皇帝', '教皇'];
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 0, 1, 9, 0, 0));
  });
  afterEach(() => vi.useRealTimers());

  it('同じ名前・同じ日なら同じカード', () => {
    expect(dailyTarot('花子', keys)).toBe(dailyTarot('花子', keys));
    expect(keys).toContain(dailyTarot('花子', keys));
  });
  it('dailyTarot は「今日」の dailyTarotForDate と一致する', () => {
    expect(dailyTarot('花子', keys)).toBe(dailyTarotForDate('花子', keys, new Date()));
  });
  it('dailyTarotWeek は連続 7 日ぶんを返し、各日は dailyTarotForDate と一致', () => {
    const week = dailyTarotWeek('花子', keys, 7, new Date(2026, 0, 1));
    expect(week).toHaveLength(7);
    expect(week[0].date.getDate()).toBe(1);
    expect(week[6].date.getDate()).toBe(7);
    for (const { date, key } of week) {
      expect(key).toBe(dailyTarotForDate('花子', keys, date));
    }
  });
});

// ============ ケルト樹木 ============
describe('celticTree', () => {
  it('年またぎ境界: 12/24 と 1/20 は樺、1/21 はロワン', () => {
    expect(celticTree(12, 24).name).toContain('樺');
    expect(celticTree(1, 20).name).toContain('樺');
    expect(celticTree(1, 21).name).toContain('ロワン');
  });
  it('年内: 6/15 は樫', () => {
    expect(celticTree(6, 15).name).toContain('樫');
  });
});

// ============ 誕生石・誕生花 ============
describe('birthstone / birthflower', () => {
  it('月の辞書エントリをそのまま返す', () => {
    const { BIRTHSTONES, BIRTH_FLOWERS } = getContent();
    for (let m = 1; m <= 12; m++) {
      expect(birthstone(m)).toBe(BIRTHSTONES[m]);
      expect(birthflower(m)).toBe(BIRTH_FLOWERS[m]);
    }
  });
});

// ============ 「今日」依存の関数(日付固定) ============
describe('biorhythm / lifeStage / タイムライン(2026-01-01 に固定)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 0, 1, 9, 0, 0));
  });
  afterEach(() => vi.useRealTimers());

  it('biorhythm: 1990-05-15 生まれは 13015 日目', () => {
    const b = biorhythm(1990, 5, 15);
    expect(b.days).toBe(13015);
    expect(b.physical).toBeCloseTo(Math.sin(2 * Math.PI * 13015 / 23), 12);
    expect(b.emotional).toBeCloseTo(Math.sin(2 * Math.PI * 13015 / 28), 12);
    expect(b.intellectual).toBeCloseTo(Math.sin(2 * Math.PI * 13015 / 33), 12);
    expect(b.intuitive).toBeCloseTo(Math.sin(2 * Math.PI * 13015 / 38), 12);
  });
  it('biorhythm: 周期ちょうど(生後23日)で physical はゼロ点', () => {
    vi.setSystemTime(new Date(1990, 5, 7)); // 1990-06-07 = +23日
    const b = biorhythm(1990, 5, 15);
    expect(b.days).toBe(23);
    expect(b.physical).toBeCloseTo(0, 10);
  });
  it('lifeStage: 35.6 歳 → prev=28.5 サターンリターン, next=36 木星回帰', () => {
    const s = lifeStage(1990, 5, 15);
    expect(s.years).toBeGreaterThan(35.5);
    expect(s.years).toBeLessThan(35.8);
    expect(s.prev.age).toBe(28.5);
    expect(s.next.age).toBe(36);
  });
  it('lifeTimeline: 2026 起点 10 年ぶん、年齢・個人年・節目が並ぶ', () => {
    const tl = lifeTimeline(1990, 5, 15, 2026, 10);
    expect(tl).toHaveLength(10);
    expect(tl[0]).toMatchObject({ year: 2026, age: 36, py: 3, isCurrent: true });
    expect(tl[0].milestones.map(m => m.age)).toEqual([36]); // 第三木星回帰
    expect(tl[1].isCurrent).toBe(false);
    expect(tl[9]).toMatchObject({ year: 2035, age: 45 });
  });
  it('lifeMilestonesAround: 通過済みは years 以下、これからは span 以内', () => {
    const { passed, upcoming, years } = lifeMilestonesAround(1990, 5, 15, 15);
    expect(passed.every(ms => ms.age <= years + 0.01)).toBe(true);
    expect(upcoming.every(ms => ms.age > years && ms.age <= years + 15)).toBe(true);
    expect(passed.map(m => m.age)).toContain(28.5);
    expect(upcoming.map(m => m.age)).toContain(36);
  });
  it('personalYearMonthCalendar: 12ヶ月ぶん・現在月フラグ・行動月フラグ', () => {
    const cal = personalYearMonthCalendar(3, 2026);
    expect(cal).toHaveLength(12);
    expect(cal[0]).toMatchObject({ month: 1, personalMonth: 4, isCurrent: true });
    expect(cal[4]).toMatchObject({ month: 5, personalMonth: 8, isAction: true });  // 3+5=8
    expect(cal[1]).toMatchObject({ month: 2, personalMonth: 5, isWatch: true });   // 3+2=5
    expect(cal[3]).toMatchObject({ month: 4, personalMonth: 7, isWait: true });    // 3+4=7
    expect(cal.filter(c => c.isCurrent)).toHaveLength(1);
  });
  it('biorhythmForecast: 行数・isToday・日付の連番', () => {
    const rows = biorhythmForecast(1990, 5, 15, 10);
    expect(rows).toHaveLength(10);
    expect(rows[0].isToday).toBe(true);
    expect(rows[0]).toMatchObject({ y: 2026, mo: 1, day: 1 });
    expect(rows[9].day).toBe(10);
    expect(rows[0].critical).toBe(false); // 初日は前日値が無いため必ず false
    const off = biorhythmForecast(1990, 5, 15, 5, 3);
    expect(off[0].isToday).toBe(false);
    expect(off[0].day).toBe(4);
  });
  it('biorhythmCriticalDays: critical な行だけを返す', () => {
    const days = biorhythmCriticalDays(1990, 5, 15, 60);
    expect(days.length).toBeGreaterThan(0);
    expect(days.every(r => r.critical)).toBe(true);
  });
  it('moonPhaseToday: phase は 0–1、名前は月相辞書から', () => {
    const { MOON_PHASE_NAMES } = getContent();
    const m = moonPhaseToday();
    expect(m.phase).toBeGreaterThanOrEqual(0);
    expect(m.phase).toBeLessThan(1);
    expect(MOON_PHASE_NAMES).toContain(m.name);
  });
});

// ============ 月相(タイムゾーン依存のため幅を持たせる) ============
describe('moonPhaseAt / lunarEventsAhead / lunarMilestoneType', () => {
  it('[外部照合] 2000-01-21 は満月 → phase ≈ 0.5', () => {
    const p = moonPhaseAt(new Date(2000, 0, 21));
    expect(p).toBeGreaterThan(0.42);
    expect(p).toBeLessThan(0.56);
  });
  it('lunarEventsAhead: 60日間に新月・満月がそれぞれ 1 回以上、型は new/full のみ', () => {
    const events = lunarEventsAhead(new Date(2026, 0, 1), 60);
    const types = events.map(e => e.type);
    expect(types).toContain('new');
    expect(types).toContain('full');
    expect(types.every(t => t === 'new' || t === 'full')).toBe(true);
    // 同種イベントは朔望月(約29.5日)程度離れる
    for (const type of ['new', 'full']) {
      const same = events.filter(e => e.type === type);
      for (let i = 1; i < same.length; i++) {
        expect((same[i].date - same[i - 1].date) / 86400000).toBeGreaterThan(25);
      }
    }
  });
  it('lunarMilestoneType の境界', () => {
    expect(lunarMilestoneType(0.01)).toBe('new');
    expect(lunarMilestoneType(0.97)).toBe('new');
    expect(lunarMilestoneType(0.5)).toBe('full');
    expect(lunarMilestoneType(0.3)).toBeNull();
    expect(lunarMilestoneType(1.02)).toBe('new'); // 折り返し
  });
});

// ============ 相性・関係ロジック ============
describe('zodiacRelation (十二支の関係)', () => {
  it('六合・三合・冲・中立', () => {
    expect(zodiacRelation(0, 1)).toBe('liuhe');   // 子丑
    expect(zodiacRelation(0, 4)).toBe('sanhe');   // 子辰(申子辰)
    expect(zodiacRelation(0, 6)).toBe('chong');   // 子午
    expect(zodiacRelation(6, 0)).toBe('chong');   // 対称
    expect(zodiacRelation(0, 2)).toBe('neutral');
  });
});

describe('gogyouRelation (五行の相生・相克)', () => {
  it('木を中心にした関係(木生火・木克土・水生木・金克木)', () => {
    expect(gogyouRelation('木', '木')).toBe('same');
    expect(gogyouRelation('木', '火')).toBe('generate');   // 木生火
    expect(gogyouRelation('木', '土')).toBe('overcome');   // 木克土
    expect(gogyouRelation('火', '木')).toBe('generated');  // 木に生かされる
    expect(gogyouRelation('木', '水')).toBe('generated');  // 水生木
    expect(gogyouRelation('木', '金')).toBe('overcame');   // 金克木
    expect(gogyouRelation('謎', '木')).toBe('neutral');
  });
});

describe('luckyCompass', () => {
  it('九星の五行を主、五行(年干)を副として辞書を引く', () => {
    const c = luckyCompass(3, '火', '水', '木');
    expect(c.primary).toBe('water');
    expect(c.numbers).toEqual([3, 6, 8]); // lp, lp+3, lp+5 を還元・重複除去・昇順
    expect(c.colors.length).toBeLessThanOrEqual(3);
    expect(c.days).toBeTruthy();
    expect(c.hint).toBeTruthy();
  });
  it('九星欠損時は太陽星座エレメントにフォールバック', () => {
    const c = luckyCompass(9, '火', null, null);
    expect(c.primary).toBe('fire');
    expect(c.numbers).toEqual([3, 5, 9]); // 9, 12→3, 14→5
  });
});

describe('normalizeElementKey', () => {
  it('多言語の五行・四元素表記を正規化する', () => {
    expect(normalizeElementKey('火')).toBe('fire');
    expect(normalizeElementKey('Metal')).toBe('metal');
    expect(normalizeElementKey('WATER')).toBe('water');
    expect(normalizeElementKey('')).toBe('earth');      // 既定値
    expect(normalizeElementKey('unknown')).toBe('earth');
  });
});

// ============ 統合プランナー ============
describe('cyclesDayPlan(日付固定)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 0, 1, 9, 0, 0));
  });
  afterEach(() => vi.useRealTimers());

  it('個人年・個人月・日命星がバイオリズム行に合成される', () => {
    const rows = cyclesDayPlan(1990, 5, 15, 5);
    expect(rows).toHaveLength(5);
    expect(rows[0].py).toBe(personalYear(5, 15, 2026));
    expect(rows[0].pm).toBe(personalMonth(rows[0].py, 1));
    expect(rows[0].ksIdx).toBe(kyuseiDayStar(1));
  });
  it('月相(moonPhase / moonName / lunar)が実際に埋まる(I-6 修正)', () => {
    // 旧実装は moonPhaseAt() の戻り値(数値)を moon.phase/moon.name と参照して全て undefined だった。
    const { MOON_PHASE_NAMES } = getContent();
    const rows = cyclesDayPlan(1990, 5, 15, 40);
    expect(rows.every(r => typeof r.moonPhase === 'number' && r.moonPhase >= 0 && r.moonPhase < 1)).toBe(true);
    expect(rows.every(r => MOON_PHASE_NAMES.includes(r.moonName))).toBe(true);
    expect(rows.every(r => r.lunar === 'new' || r.lunar === 'full' || r.lunar === null)).toBe(true);
    // 40日間(朔望月 ~29.5日超)には新月・満月が最低1回ずつ現れるはず
    expect(rows.some(r => r.lunar === 'new')).toBe(true);
    expect(rows.some(r => r.lunar === 'full')).toBe(true);
  });
});
