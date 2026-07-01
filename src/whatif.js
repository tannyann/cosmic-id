/**
 * Feature 3: What if モード — 差分計算。
 *
 * 元の生年月日と、シフトした生年月日で 19 体系の結果を並列計算し、
 * 変わった軸を差分として返す。
 */
import {
  lifePath, personalYear, sunSign, moonTrait,
  chineseZodiac, sixtyJikkan, kyuseiHonmei, gogyou,
  animalUranai, mayaKin, tarotBirthCard, celticTree,
  birthstone, birthflower, biorhythm, lifeStage
} from './calculations.js';

const CURRENT_YEAR = new Date().getFullYear();

/** ある生年月日から取れる主要 19 体系のスナップショット */
export function snapshotByDate(y, m, d) {
  return {
    lp:  lifePath(y, m, d),
    py:  personalYear(m, d, CURRENT_YEAR),
    sun: sunSign(m, d),
    mt:  moonTrait(y, m, d),
    cz:  chineseZodiac(y),
    sj:  sixtyJikkan(y),
    ks:  kyuseiHonmei(y, m, d),
    gg:  gogyou(y),
    an:  animalUranai(y, m, d),
    mk:  mayaKin(y, m, d),
    tb:  tarotBirthCard(y, m, d),
    ct:  celticTree(m, d),
    bs:  birthstone(m),
    bf:  birthflower(m),
    bio: biorhythm(y, m, d),
    ls:  lifeStage(y, m, d)
  };
}

/** 2 つのスナップショットの差分を検出 */
export function diffSnapshots(a, b) {
  const diffs = [];
  const check = (key, aVal, bVal, label) => {
    if (!isEqual(aVal, bVal)) diffs.push({ key, label, a: aVal, b: bVal });
  };

  check('lp',  a.lp,       b.lp,       'Life Path');
  check('py',  a.py,       b.py,       'Personal Year');
  check('sun', a.sun?.name, b.sun?.name, '太陽星座 / Sun');
  check('mt',  a.mt?.name,  b.mt?.name,  '月の傾向 / Moon tendency');
  check('cz',  a.cz?.name,  b.cz?.name,  '十二支 / Chinese zodiac');
  check('sj',  a.sj?.name,  b.sj?.name,  '六十干支 / Year pillar');
  check('ks',  a.ks?.name,  b.ks?.name,  '九星 / Nine Star');
  check('gg',  a.gg?.element, b.gg?.element, '五行 / Five Elements');
  check('an',  a.an?.name,  b.an?.name,  '動物占い / Animal');
  check('mk',  a.mk?.kin,   b.mk?.kin,   'マヤ KIN');
  check('tb',  a.tb?.name,  b.tb?.name,  'バースカード / Tarot birth');
  check('ct',  a.ct?.name,  b.ct?.name,  'ケルト樹 / Celtic tree');
  check('bs',  labelOf(a.bs), labelOf(b.bs), '誕生石 / Birthstone');
  check('bf',  labelOf(a.bf), labelOf(b.bf), '誕生花 / Birth flower');

  return diffs;
}

function labelOf(x) {
  if (!x) return null;
  return x.name ?? x.label ?? String(x);
}

function isEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  return String(a) === String(b);
}

/** 日付を N 日 / 月 / 年ずらす */
export function shiftDate(y, m, d, unit, delta) {
  const dt = new Date(y, m - 1, d);
  switch (unit) {
    case 'day':   dt.setDate(dt.getDate() + delta); break;
    case 'month': dt.setMonth(dt.getMonth() + delta); break;
    case 'year':  dt.setFullYear(dt.getFullYear() + delta); break;
    // 地球の裏側:太陽星座を反対の 6 ヶ月にずらす、が近似
    case 'antipode': dt.setMonth(dt.getMonth() + 6); break;
  }
  return { y: dt.getFullYear(), m: dt.getMonth() + 1, d: dt.getDate() };
}
