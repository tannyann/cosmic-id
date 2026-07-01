/**
 * Feature 2: タイムラインモード — 純粋関数。
 *
 * 生年月日を軸に、以下の周期・イベントを 100 年分算出する:
 *   - Life Milestones(サターンリターン ~29.5歳、~59歳、木星リターン 12年ごと等)
 *   - Personal Year 1〜9 の 9 年サイクル
 *   - Biorhythm 4 波形(23 / 28 / 33 / 38 日)
 *   - Moon phase(-30日 〜 +30 日)
 */

const DAY_MS = 86400000;
const YEAR_DAYS = 365.25;

/* ============================================================
 * Life Milestones
 * ============================================================ */

const LIFE_MILESTONE_DEFS = [
  { key: 'saturn-return-1',  age: 29.5, labelKey: 'saturnReturn1'  },
  { key: 'saturn-return-2',  age: 58.5, labelKey: 'saturnReturn2'  },
  { key: 'saturn-return-3',  age: 88.5, labelKey: 'saturnReturn3'  },
  { key: 'jupiter-return-1', age: 12,   labelKey: 'jupiterReturn' },
  { key: 'jupiter-return-2', age: 24,   labelKey: 'jupiterReturn' },
  { key: 'jupiter-return-3', age: 36,   labelKey: 'jupiterReturn' },
  { key: 'jupiter-return-4', age: 48,   labelKey: 'jupiterReturn' },
  { key: 'jupiter-return-5', age: 60,   labelKey: 'jupiterReturn' },
  { key: 'jupiter-return-6', age: 72,   labelKey: 'jupiterReturn' },
  { key: 'jupiter-return-7', age: 84,   labelKey: 'jupiterReturn' },
  { key: 'midlife',          age: 40,   labelKey: 'midlife'        },
  { key: 'chiron-return',    age: 50.5, labelKey: 'chironReturn'   }
];

export function lifeMilestones(birthdate) {
  const b = new Date(birthdate);
  return LIFE_MILESTONE_DEFS.map(def => {
    const date = new Date(b.getTime() + def.age * YEAR_DAYS * DAY_MS);
    return { key: def.key, labelKey: def.labelKey, age: def.age, date };
  });
}

/* ============================================================
 * Personal Year cycles (9 年サイクル)
 * 誕生日ごとに切り替わり、その年の Personal Year 番号を返す
 * ============================================================ */

function reduceDigit(n) {
  while (n > 9) n = String(n).split('').reduce((s, c) => s + Number(c), 0);
  return n;
}

export function personalYearForDate(birthdate, targetDate) {
  const b = new Date(birthdate);
  const t = new Date(targetDate);
  let yearForCalc = t.getFullYear();
  // Personal Year は「今年の誕生日から次の誕生日まで」で切り替わる
  const anniv = new Date(yearForCalc, b.getMonth(), b.getDate());
  if (t < anniv) yearForCalc -= 1;
  const m = b.getMonth() + 1;
  const d = b.getDate();
  return reduceDigit(reduceDigit(m) + reduceDigit(d) + reduceDigit(yearForCalc));
}

/** 生年月日から始まって、100 年分の Personal Year 区間を配列で返す */
export function personalYearBands(birthdate, spanYears = 100) {
  const b = new Date(birthdate);
  const bands = [];
  for (let i = 0; i < spanYears; i++) {
    const start = new Date(b.getFullYear() + i, b.getMonth(), b.getDate());
    const end   = new Date(b.getFullYear() + i + 1, b.getMonth(), b.getDate() - 1);
    const py    = personalYearForDate(birthdate, new Date(start.getTime() + DAY_MS * 30));
    bands.push({ start, end, py });
  }
  return bands;
}

/* ============================================================
 * Biorhythm 合成波
 *
 * dayFromBirth を渡すと {physical, emotional, intellectual, intuitive}
 * の値(-1〜1)を返す
 * ============================================================ */

const BIO_CYCLES = { physical: 23, emotional: 28, intellectual: 33, intuitive: 38 };

export function biorhythmAt(birthdate, targetDate) {
  const days = Math.floor((new Date(targetDate) - new Date(birthdate)) / DAY_MS);
  return {
    days,
    physical: Math.sin(2 * Math.PI * days / BIO_CYCLES.physical),
    emotional: Math.sin(2 * Math.PI * days / BIO_CYCLES.emotional),
    intellectual: Math.sin(2 * Math.PI * days / BIO_CYCLES.intellectual),
    intuitive: Math.sin(2 * Math.PI * days / BIO_CYCLES.intuitive)
  };
}

/** タイムライン用に等間隔でサンプリング */
export function biorhythmSamples(birthdate, startDate, endDate, sampleDays = 1) {
  const samples = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  for (let t = start.getTime(); t <= end.getTime(); t += sampleDays * DAY_MS) {
    samples.push(biorhythmAt(birthdate, new Date(t)));
  }
  return samples;
}

/* ============================================================
 * Moon phase(現在の月相角度 0..1)
 * ============================================================ */

const REF_NEW_MOON = new Date(Date.UTC(2000, 0, 6, 18, 14)); // NASA 準拠
const SYNODIC_MONTH = 29.530588;

export function moonPhaseAt(targetDate) {
  const days = (new Date(targetDate) - REF_NEW_MOON) / DAY_MS;
  return (((days % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH) / SYNODIC_MONTH;
}

/** 今日を中心に前後 N 日の月相ピック */
export function moonPhaseWindow(centerDate, days = 30) {
  const list = [];
  const c = new Date(centerDate);
  for (let i = -days; i <= days; i++) {
    const t = new Date(c.getTime() + i * DAY_MS);
    list.push({ date: t, phase: moonPhaseAt(t) });
  }
  return list;
}

/* ============================================================
 * まとめて timeline データを組む
 * ============================================================ */

export function buildTimeline(birthdate, todayDate = new Date(), spanYears = 100) {
  return {
    birth: new Date(birthdate),
    today: new Date(todayDate),
    spanYears,
    milestones: lifeMilestones(birthdate),
    personalYears: personalYearBands(birthdate, spanYears),
    // biorhythm 全期間は重いので、上流(UI)で必要な区間だけ取得する
    biorhythmSample: (start, end) => biorhythmSamples(birthdate, start, end, 1),
    moonWindow: (center, days) => moonPhaseWindow(center, days)
  };
}
