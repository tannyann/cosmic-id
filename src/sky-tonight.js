/**
 * Feature 10: リアル天体データ連動(純粋計算)。
 *
 * astronomy-engine ライブラリを使用。事前に:
 *   npm install astronomy-engine
 */
import * as Astronomy from 'astronomy-engine';

const REF_NEW_MOON = new Date(Date.UTC(2000, 0, 6, 18, 14));
const SYNODIC = 29.530588;

/** 今夜の月相 0..1(0=新月, 0.5=満月) */
export function currentMoonPhase(now = new Date()) {
  const days = (now - REF_NEW_MOON) / 86400000;
  return (((days % SYNODIC) + SYNODIC) % SYNODIC) / SYNODIC;
}

export function moonPhaseName(phase) {
  if (phase < 0.03 || phase > 0.97) return 'New Moon';
  if (phase < 0.22) return 'Waxing Crescent';
  if (phase < 0.28) return 'First Quarter';
  if (phase < 0.47) return 'Waxing Gibbous';
  if (phase < 0.53) return 'Full Moon';
  if (phase < 0.72) return 'Waning Gibbous';
  if (phase < 0.78) return 'Last Quarter';
  return 'Waning Crescent';
}

/** 次の新月/満月までの日数 */
export function nextMoonEvents(now = new Date()) {
  const phase = currentMoonPhase(now);
  const untilNew  = (1 - phase) * SYNODIC;
  const untilFull = phase < 0.5 ? (0.5 - phase) * SYNODIC : (1.5 - phase) * SYNODIC;
  return { untilNew, untilFull };
}

/** 主要惑星の地平線上/下と現在の方角 */
export function planetVisibility(lat, lon, now = new Date()) {
  const observer = new Astronomy.Observer(lat, lon, 0);
  const planets = ['Mercury','Venus','Mars','Jupiter','Saturn'];
  return planets.map(name => {
    const body = Astronomy.Body[name];
    const eq = Astronomy.Equator(body, now, observer, true, true);
    const horiz = Astronomy.Horizon(now, observer, eq.ra, eq.dec, 'normal');
    return {
      name,
      altitude: horiz.altitude,   // 地平線上 = >0
      azimuth: horiz.azimuth,     // 0=北, 90=東, 180=南, 270=西
      visible: horiz.altitude > 0
    };
  });
}

/** 次の日食/月食までの日数(astronomy-engine 内蔵) */
export function nextEclipse(now = new Date()) {
  const solar = Astronomy.SearchLunarEclipse(now);
  const lunar = Astronomy.SearchGlobalSolarEclipse(now);
  return {
    lunar: solar ? { date: solar.peak.date, kind: solar.kind } : null,
    solar: lunar ? { date: lunar.peak.date, kind: lunar.kind } : null
  };
}

/** ユーザー位置(未取得なら東京デフォルト) */
export function getObserverLocation() {
  return new Promise((resolve) => {
    if (!('geolocation' in navigator)) {
      resolve({ lat: 35.6895, lon: 139.6917, source: 'default' });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude, source: 'geolocation' }),
      _err => resolve({ lat: 35.6895, lon: 139.6917, source: 'default' }),
      { timeout: 3000, maximumAge: 3600 * 1000 }
    );
  });
}
