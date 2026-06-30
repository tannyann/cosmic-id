/**
 * 複数モジュールで使う DOM / ブラウザ向けユーティリティ。
 */

/** 五行・西洋元素名を LUCKY_COMPASS / deep.elementMap のキーに正規化 */
export function normalizeElementKey(element) {
  if (!element) return 'earth';
  const map = {
    Fire: 'fire', Earth: 'earth', Air: 'air', Water: 'water', Wood: 'wood', Metal: 'metal',
    火: 'fire', 土: 'earth', 金: 'metal', 水: 'water', 木: 'wood', 风: 'air', 風: 'air',
    불: 'fire', 땅: 'earth', 공기: 'air', 물: 'water', 나무: 'wood', 금: 'metal',
    Fuego: 'fire', Tierra: 'earth', Aire: 'air', Agua: 'water', Madera: 'wood',
    Feu: 'fire', Terre: 'earth', Eau: 'water', Bois: 'wood', Métal: 'metal',
    Erde: 'earth', Luft: 'air', Wasser: 'water', Holz: 'wood', Metall: 'metal',
    Fuoco: 'fire', Terra: 'earth', Aria: 'air', Acqua: 'water', Legno: 'wood', Metallo: 'metal',
    Ateş: 'fire', Toprak: 'earth', Hava: 'air', Su: 'water', Ağaç: 'wood',
    אש: 'fire', אדמה: 'earth', אוויר: 'air', מים: 'water', עץ: 'wood', מתכת: 'metal',
    نار: 'fire', تراب: 'earth', هواء: 'air', ماء: 'water', خشب: 'wood', معدن: 'metal'
  };
  if (map[element]) return map[element];
  const lower = String(element).toLowerCase();
  const byLower = {
    fire: 'fire', earth: 'earth', air: 'air', water: 'water', wood: 'wood', metal: 'metal'
  };
  return byLower[lower] || 'earth';
}

export function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/** input[type=date] の max 用 — ローカル暦の今日 (UTC ずれを避ける) */
export function localDateInputMax() {
  const t = new Date();
  const y = t.getFullYear();
  const m = String(t.getMonth() + 1).padStart(2, '0');
  const d = String(t.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

export async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch { /* fallback */ }
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } finally {
    document.body.removeChild(ta);
  }
  return ok;
}

/** 個人年 1–9 の前後 */
export function personalYearPrev(py) {
  return py === 1 ? 9 : py - 1;
}

export function personalYearNext(py) {
  return py === 9 ? 1 : py + 1;
}

export function showToast(message, durationMs = 2800) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('visible');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => el.classList.remove('visible'), durationMs);
}
