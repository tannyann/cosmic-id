/**
 * Feature 8: アンビエントサウンド。
 *
 * 太陽星座エレメント(火/地/風/水)ごとに違うループ音を再生。
 * localStorage で状態保存、初回は OFF。
 */
import { getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';
import { getCurrentContext } from './ui.js';

const STORAGE_KEY = 'cosmic-id-ambient';
const FADE_MS = 2000;

const ELEMENT_TO_TRACK = {
  '火':  '/audio/fire.mp3',
  '地':  '/audio/earth.mp3',
  '風':  '/audio/air.mp3',
  '水':  '/audio/water.mp3',
  'Fire':  '/audio/fire.mp3',
  'Earth': '/audio/earth.mp3',
  'Air':   '/audio/air.mp3',
  'Water': '/audio/water.mp3'
};

class AmbientPlayer {
  constructor() {
    this.audio = null;
    this.volume = 0.3;
    this.enabled = false;
    this.element = 'water';
  }

  init() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
    this.enabled = saved.enabled ?? false;
    this.volume = saved.volume ?? 0.3;
    this.element = saved.element ?? 'water';
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      enabled: this.enabled, volume: this.volume, element: this.element
    }));
  }

  ensureAudio() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.loop = true;
      this.audio.volume = 0;
    }
  }

  fadeTo(target, ms = FADE_MS) {
    if (!this.audio) return;
    const start = this.audio.volume;
    const delta = target - start;
    const t0 = performance.now();
    const step = () => {
      const t = performance.now() - t0;
      if (t >= ms) { this.audio.volume = target; return; }
      this.audio.volume = start + delta * (t / ms);
      requestAnimationFrame(step);
    };
    step();
  }

  play(track) {
    this.ensureAudio();
    if (track !== this.audio.src) {
      this.audio.src = track;
      this.audio.load();
    }
    return this.audio.play()
      .then(() => this.fadeTo(this.volume))
      .catch(err => console.warn('[ambient] play blocked:', err));
  }

  stop() {
    if (!this.audio) return;
    this.fadeTo(0, 500);
    setTimeout(() => this.audio?.pause(), 600);
  }

  setElement(element) {
    this.element = element;
    if (this.enabled) {
      const track = ELEMENT_TO_TRACK[element] ?? '/audio/water.mp3';
      this.play(track);
    }
    this.save();
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.audio && this.enabled) this.audio.volume = this.volume;
    this.save();
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      const track = ELEMENT_TO_TRACK[this.element] ?? '/audio/water.mp3';
      this.play(track);
    } else {
      this.stop();
    }
    this.save();
  }
}

const player = new AmbientPlayer();

/** 公開:結果画面右下に音声トグル UI を貼る */
export function bindAmbient() {
  player.init();
  const ctx = getCurrentContext();
  if (ctx?.sun?.element) {
    // 初回のみ:結果 sun のエレメントを既定に
    if (player.element === 'water' && !localStorage.getItem(STORAGE_KEY + '-user')) {
      player.element = ctx.sun.element;
      player.save();
    }
  }

  if (document.getElementById('ambient-toggle')) return;

  const u = getUI().ambient ?? {};
  const el = document.createElement('div');
  el.id = 'ambient-toggle';
  el.className = 'ambient-toggle';
  el.innerHTML = `
    <button class="ambient-btn" aria-pressed="${player.enabled}" aria-label="${escapeHtml(u.toggle ?? 'Toggle ambient sound')}">
      <span class="ambient-icon" aria-hidden="true">${player.enabled ? '🔊' : '🔈'}</span>
    </button>
    <div class="ambient-panel" hidden>
      <div class="ambient-panel-row">
        <span class="ambient-panel-label">${escapeHtml(u.mood ?? 'Mood')}</span>
        <div class="ambient-elements" role="radiogroup">
          <button class="ambient-el" data-el="火"  aria-pressed="${player.element==='火'||player.element==='Fire'}">${escapeHtml(u.fire ?? 'Fire')}</button>
          <button class="ambient-el" data-el="地"  aria-pressed="${player.element==='地'||player.element==='Earth'}">${escapeHtml(u.earth ?? 'Earth')}</button>
          <button class="ambient-el" data-el="風"  aria-pressed="${player.element==='風'||player.element==='Air'}">${escapeHtml(u.air ?? 'Air')}</button>
          <button class="ambient-el" data-el="水"  aria-pressed="${player.element==='水'||player.element==='Water'}">${escapeHtml(u.water ?? 'Water')}</button>
        </div>
      </div>
      <div class="ambient-panel-row">
        <span class="ambient-panel-label">${escapeHtml(u.volume ?? 'Volume')}</span>
        <input type="range" class="ambient-vol" min="0" max="100" value="${Math.round(player.volume * 100)}">
      </div>
    </div>
  `;
  document.body.appendChild(el);

  const btn = el.querySelector('.ambient-btn');
  const panel = el.querySelector('.ambient-panel');
  const icon = el.querySelector('.ambient-icon');
  const vol = el.querySelector('.ambient-vol');

  btn.addEventListener('click', () => {
    player.toggle();
    btn.setAttribute('aria-pressed', String(player.enabled));
    icon.textContent = player.enabled ? '🔊' : '🔈';
    panel.hidden = !player.enabled;
    localStorage.setItem(STORAGE_KEY + '-user', '1');
  });

  el.querySelectorAll('.ambient-el').forEach(b => {
    b.addEventListener('click', () => {
      el.querySelectorAll('.ambient-el').forEach(x => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      player.setElement(b.dataset.el);
    });
  });

  vol.addEventListener('input', () => player.setVolume(Number(vol.value) / 100));

  if (player.enabled) panel.hidden = false;
}
