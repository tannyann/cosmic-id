/**
 * Feature 9: 季節・時刻でサイトが呼吸する。
 *
 * data-time-of-day / data-season / data-special-day を <html> に設定。
 * CSS 側で色調整をする。
 */

function computeTimeOfDay(hour) {
  if (hour >= 5 && hour < 7) return 'dawn';
  if (hour >= 7 && hour < 17) return 'day';
  if (hour >= 17 && hour < 19) return 'dusk';
  return 'night';
}

function computeSeason(month, hemisphere = 'north') {
  // 北半球基準
  const s = month >= 3 && month <= 5 ? 'spring'
          : month >= 6 && month <= 8 ? 'summer'
          : month >= 9 && month <= 11 ? 'autumn'
          : 'winter';
  if (hemisphere === 'south') {
    // 南半球は 6 ヶ月ズラす
    const flip = { spring: 'autumn', summer: 'winter', autumn: 'spring', winter: 'summer' };
    return flip[s];
  }
  return s;
}

/** 特別日を検出 */
function computeSpecialDay(date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const md = m * 100 + d;

  if (md === 1231 || md === 101) return 'new-year';
  if (md === 322 || md === 320 || md === 321) return 'spring-equinox';
  if (md === 621 || md === 620) return 'summer-solstice';
  if (md === 923 || md === 922) return 'autumn-equinox';
  if (md === 1222 || md === 1221) return 'winter-solstice';
  if (md === 214) return 'valentine';

  // 月相ベース(±12 時間で新月/満月)
  const phase = moonPhase(date);
  if (Math.abs(phase) < 0.02 || Math.abs(phase - 1) < 0.02) return 'new-moon';
  if (Math.abs(phase - 0.5) < 0.02) return 'full-moon';

  return null;
}

const REF_NEW_MOON = new Date(Date.UTC(2000, 0, 6, 18, 14));
const SYNODIC = 29.530588;
function moonPhase(date) {
  const days = (date - REF_NEW_MOON) / 86400000;
  return (((days % SYNODIC) + SYNODIC) % SYNODIC) / SYNODIC;
}

/** 半球検出(ユーザーのタイムゾーンから推定) */
function detectHemisphere() {
  const offset = -new Date().getTimezoneOffset() / 60;
  // 大まかに:UTC+5.5 (India) 〜 UTC+13 (NZ) を含む、南半球オーストラリア/ブラジル等は個別判定不能
  // 簡易:ブラウザ言語で判定
  const lang = (navigator.language || '').toLowerCase();
  if (lang.startsWith('pt-br') || lang.startsWith('es-ar') || lang.startsWith('en-au') || lang.startsWith('en-nz') || lang.startsWith('en-za')) {
    return 'south';
  }
  return 'north';
}

/** メイン:atmosphere を DOM に適用 */
export function applyAtmosphere(now = new Date()) {
  const hour = now.getHours();
  const month = now.getMonth() + 1;
  const hemisphere = detectHemisphere();

  const timeOfDay = computeTimeOfDay(hour);
  const season = computeSeason(month, hemisphere);
  const special = computeSpecialDay(now);

  document.documentElement.dataset.timeOfDay = timeOfDay;
  document.documentElement.dataset.season = season;
  if (special) document.documentElement.dataset.specialDay = special;
  else delete document.documentElement.dataset.specialDay;
}

/** 30 分ごとに再チェック */
export function startAtmosphereWatcher() {
  applyAtmosphere();
  setInterval(applyAtmosphere, 30 * 60 * 1000);
}
