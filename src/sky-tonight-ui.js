/**
 * Feature 10: Sky Tonight ミニパネル UI。
 */
import {
  currentMoonPhase, moonPhaseName, nextMoonEvents,
  planetVisibility, nextEclipse, getObserverLocation
} from './sky-tonight.js';
import { getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';

const AZI_LABELS = ['N','NE','E','SE','S','SW','W','NW'];
function aziDir(deg) {
  return AZI_LABELS[Math.round(deg / 45) % 8];
}

function daysFmt(n) {
  const d = Math.round(n);
  return d === 0 ? 'today' : `${d}d`;
}

function moonSvg(phase, size = 60) {
  const r = size / 2;
  const cx = r, cy = r;
  const lit = phase < 0.5 ? phase * 2 : (1 - phase) * 2;
  const rx = r - lit * r * 2;
  const dark = phase < 0.5 ? 'left' : 'right';
  return `
    <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#f0d878"/>
      <ellipse cx="${cx + (dark === 'left' ? -rx/2 : rx/2)}" cy="${cy}" rx="${Math.abs(rx)}" ry="${r}" fill="#04030a"/>
    </svg>
  `;
}

async function renderSky() {
  const loc = await getObserverLocation();
  const now = new Date();
  const phase = currentMoonPhase(now);
  const events = nextMoonEvents(now);
  const planets = planetVisibility(loc.lat, loc.lon, now).filter(p => p.visible);
  const u = getUI().skyTonight ?? {};

  const planetList = planets.length
    ? planets.map(p => `
        <li class="sky-planet">
          <span class="sky-planet-name">${escapeHtml(p.name)}</span>
          <span class="sky-planet-alt">${p.altitude.toFixed(0)}°</span>
          <span class="sky-planet-azi">${aziDir(p.azimuth)}</span>
        </li>
      `).join('')
    : `<li class="sky-planet-empty">${escapeHtml(u.noVisible ?? 'No naked-eye planets above horizon.')}</li>`;

  return `
    <section class="sky-panel" aria-label="${escapeHtml(u.title ?? 'Sky tonight')}">
      <header class="sky-head">
        <p class="eyebrow">${escapeHtml(u.eyebrow ?? 'SKY TONIGHT')}</p>
        <p class="sky-loc">${escapeHtml(loc.source === 'geolocation' ? u.yourLocation ?? 'Your location' : u.defaultLocation ?? 'Tokyo (default)')}</p>
      </header>
      <div class="sky-moon-row">
        <div class="sky-moon-icon" aria-hidden="true">${moonSvg(phase, 72)}</div>
        <div class="sky-moon-meta">
          <p class="sky-moon-name">${escapeHtml(moonPhaseName(phase))}</p>
          <p class="sky-moon-sub">${escapeHtml((u.illuminated ?? '{p}% illuminated').replace('{p}', Math.round((phase < 0.5 ? phase * 2 : (1 - phase) * 2) * 100)))}</p>
          <p class="sky-moon-next">
            <span>${escapeHtml(u.newIn ?? 'New in')} ${daysFmt(events.untilNew)}</span>
            <span>${escapeHtml(u.fullIn ?? 'Full in')} ${daysFmt(events.untilFull)}</span>
          </p>
        </div>
      </div>
      <div class="sky-planets-row">
        <h4 class="sky-planets-title">${escapeHtml(u.planetsAbove ?? 'Above the horizon')}</h4>
        <ul class="sky-planets-list">${planetList}</ul>
      </div>
    </section>
  `;
}

export async function bindSkyTonight() {
  const results = document.getElementById('results');
  if (!results) return;
  if (document.getElementById('sky-panel-mount')) return;

  const mount = document.createElement('div');
  mount.id = 'sky-panel-mount';
  const hero = document.querySelector('.hero-card');
  if (hero) hero.after(mount);
  else results.prepend(mount);

  try {
    const html = await renderSky();
    mount.innerHTML = html;
  } catch (err) {
    console.warn('[sky-tonight] render failed:', err);
    mount.remove();
  }
}
