/**
 * 複数モジュールで使う DOM / ブラウザ向けユーティリティ。
 */

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
