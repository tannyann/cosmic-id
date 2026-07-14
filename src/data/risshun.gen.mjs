/**
 * risshun.gen.mjs — 立春日テーブル(1900–2100)の再生成スクリプト。
 *
 * 立春 = 太陽の視黄経が 315° になる瞬間。これを astronomy-engine の
 * `SearchSunLongitude(315, ...)` で求め、JST(UTC+9)に換算して「日」を取る。
 * astronomy-engine は ΔT(地球自転の遅れ)を内部で補正するため、
 * 現在から離れた年でも天文的に妥当な値が得られる。
 *
 * 使い方:
 *   node src/data/risshun.gen.mjs          # src/data/risshun.js を上書き生成
 *   node src/data/risshun.gen.mjs --check   # 生成せず既知値の照合のみ表示
 *
 * ある特定の暦(◯◯流の暦注)ではなく、天文計算(太陽黄経315°の瞬間の
 * JST日付)を採用している。暦要項の掲載値とは稀に境界年で解釈が分かれ得るが、
 * 本テーブルは「天文計算 + JST変換」の一貫した定義で機械生成する。
 */
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { writeFileSync } from 'node:fs';
import * as Astro from 'astronomy-engine';

const START_YEAR = 1900;
const END_YEAR = 2100;
const JST_OFFSET_MS = 9 * 3600 * 1000;

/**
 * 指定年の立春(JST)を [月, 日] で返す純粋関数。
 * @param {number} year
 * @returns {[number, number]}
 */
export function risshunJst(year) {
  // 立春は毎年 2/3〜2/5 頃。1/20(UTC)を起点に 25 日窓で探索すれば必ず含まれる。
  const start = new Date(Date.UTC(year, 0, 20, 0, 0, 0));
  const t = Astro.SearchSunLongitude(315, start, 25);
  if (!t) throw new Error(`SearchSunLongitude returned null for ${year}`);
  const jst = new Date(t.date.getTime() + JST_OFFSET_MS);
  return [jst.getUTCMonth() + 1, jst.getUTCDate()];
}

function buildTable() {
  const table = {};
  for (let y = START_YEAR; y <= END_YEAR; y++) {
    table[y] = risshunJst(y);
  }
  return table;
}

function render(table) {
  const lines = [];
  lines.push('/**');
  lines.push(' * risshun.js — 立春日テーブル(1900–2100 / 日本時間)。');
  lines.push(' *');
  lines.push(' * 【自動生成ファイル】手で編集しない。再生成は `node src/data/risshun.gen.mjs`。');
  lines.push(' *');
  lines.push(' * 立春 = 太陽の視黄経が 315° になる瞬間を astronomy-engine の');
  lines.push(' * SearchSunLongitude(315, ...) で計算し、JST(UTC+9)に換算して「日」を取ったもの。');
  lines.push(' * astronomy-engine が ΔT を内部補正するため、現在から離れた年も天文的に妥当。');
  lines.push(' * ある特定の暦注(◯◯流の暦)ではなく、天文計算(太陽黄経315°のJST日付)を採用している。');
  lines.push(' *');
  lines.push(' * 形: { 西暦: [月, 日] }。月は全て 2(2月)。');
  lines.push(' */');
  lines.push('export const RISSHUN = {');
  for (let y = START_YEAR; y <= END_YEAR; y++) {
    const [m, d] = table[y];
    lines.push(`  ${y}: [${m}, ${d}],`);
  }
  lines.push('};');
  lines.push('');
  lines.push('/**');
  lines.push(' * 指定年の立春日(JST)を [月, 日] で返す。範囲外は undefined。');
  lines.push(' * @param {number} year 西暦(1900–2100)');
  lines.push(' * @returns {[number, number] | undefined}');
  lines.push(' */');
  lines.push('export function risshunDay(year) {');
  lines.push('  return RISSHUN[year];');
  lines.push('}');
  lines.push('');
  return lines.join('\n');
}

function runCheck() {
  const known = { 2021: [2, 3], 1984: [2, 5], 2000: [2, 4] };
  let ok = true;
  for (const [y, exp] of Object.entries(known)) {
    const got = risshunJst(Number(y));
    const pass = got[0] === exp[0] && got[1] === exp[1];
    if (!pass) ok = false;
    console.log(`${y}: got ${got[0]}/${got[1]} expected ${exp[0]}/${exp[1]} ${pass ? 'OK' : 'MISMATCH'}`);
  }
  return ok;
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  if (process.argv.includes('--check')) {
    process.exit(runCheck() ? 0 : 1);
  } else {
    if (!runCheck()) {
      console.error('既知値照合に失敗。生成を中止。');
      process.exit(1);
    }
    const table = buildTable();
    const out = join(dirname(fileURLToPath(import.meta.url)), 'risshun.js');
    writeFileSync(out, render(table));
    // 2/4 以外の年を集計して報告
    const others = Object.entries(table).filter(([, [, d]]) => d !== 4);
    console.log(`\n生成完了: ${out}`);
    console.log(`2/4 以外の年: ${others.length} 件`);
    console.log(others.map(([y, [m, d]]) => `${y}:${m}/${d}`).join(' '));
  }
}
