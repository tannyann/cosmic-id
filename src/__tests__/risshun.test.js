/**
 * risshun.js(立春日テーブル 1900–2100)の検証テスト。
 *
 * 期待値の出どころ:
 *  - [既知値]   暦年で確認できる立春日(2021=2/3, 1984=2/5, 2000=2/4)。
 *               天文計算(太陽黄経315°のJST日付)がこれと一致することを固定する。
 *  - [回帰ピン] テーブルの構造的性質(範囲・連続性)。生成ロジックが壊れたら気づくための網。
 *
 * テーブルは astronomy-engine で機械生成した静的データ。純粋な入出力のみを検証する。
 */
import { describe, it, expect } from 'vitest';
import { RISSHUN, risshunDay } from '../data/risshun.js';

describe('RISSHUN 立春日テーブル', () => {
  it('[既知値] 2021年の立春は 2月3日', () => {
    expect(RISSHUN[2021]).toEqual([2, 3]);
  });

  it('[既知値] 1984年の立春は 2月5日', () => {
    expect(RISSHUN[1984]).toEqual([2, 5]);
  });

  it('[既知値] 2000年の立春は 2月4日', () => {
    expect(RISSHUN[2000]).toEqual([2, 4]);
  });

  it('risshunDay(year) はテーブルと同じ値を返す', () => {
    expect(risshunDay(2021)).toEqual([2, 3]);
    expect(risshunDay(2000)).toEqual([2, 4]);
    expect(risshunDay(1899)).toBeUndefined();
    expect(risshunDay(2101)).toBeUndefined();
  });

  it('[回帰ピン] キーは 1900〜2100 で連続している(201年・欠けなし)', () => {
    const keys = Object.keys(RISSHUN).map(Number).sort((a, b) => a - b);
    expect(keys.length).toBe(201);
    expect(keys[0]).toBe(1900);
    expect(keys[keys.length - 1]).toBe(2100);
    for (let y = 1900; y <= 2100; y++) {
      expect(RISSHUN[y], `year ${y} missing`).toBeDefined();
    }
  });

  it('[回帰ピン] 全年が 2月2〜5日 の範囲に収まる', () => {
    for (let y = 1900; y <= 2100; y++) {
      const [month, day] = RISSHUN[y];
      expect(month, `year ${y} month`).toBe(2);
      expect(day, `year ${y} day`).toBeGreaterThanOrEqual(2);
      expect(day, `year ${y} day`).toBeLessThanOrEqual(5);
    }
  });

  it('[回帰ピン] 各要素は [月, 日] の2要素・整数', () => {
    for (let y = 1900; y <= 2100; y++) {
      const entry = RISSHUN[y];
      expect(Array.isArray(entry)).toBe(true);
      expect(entry.length).toBe(2);
      expect(Number.isInteger(entry[0])).toBe(true);
      expect(Number.isInteger(entry[1])).toBe(true);
    }
  });
});
