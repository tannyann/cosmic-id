/**
 * Premium gate — prototype client-side unlock.
 * Phase 2: replace isPremium() with server-verified rights (Stripe + Supabase).
 */
import { showToast } from './util.js';
import { getUI } from './i18n/index.js';

export const PREMIUM_CONFIG = {
  /** false にすると従来どおり全章無料 */
  enabled: true,
  checkoutUrl: import.meta.env?.VITE_STRIPE_PAYMENT_LINK || '',
  freeChapterCount: 1,
  storageKey: 'cosmic-id-premium-v1'
};

/** 平文コードは格納しない（SHA-256 hex） */
const UNLOCK_HASHES = new Set([
  'c3a8aae67a05a2499dbd0c84ebab66edc74aeb834c87c3fcfae81f7e1aadd3c6',
  '38b767c73a40efa0676e0597ab5cd65c39a61a129e746c42b9f0377e3561506c'
]);

async function hashCode(code) {
  const norm = code.trim().toUpperCase().replace(/\s+/g, '-');
  if (!crypto.subtle?.digest) return null;
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(norm));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

export function isPremium() {
  if (!PREMIUM_CONFIG.enabled) return true;
  try {
    return localStorage.getItem(PREMIUM_CONFIG.storageKey) === '1';
  } catch {
    return false;
  }
}

export function isPremiumGateActive() {
  return PREMIUM_CONFIG.enabled && !isPremium();
}

export function setPremiumUnlocked(unlocked = true) {
  try {
    if (unlocked) localStorage.setItem(PREMIUM_CONFIG.storageKey, '1');
    else localStorage.removeItem(PREMIUM_CONFIG.storageKey);
  } catch { /* private browsing */ }
  window.dispatchEvent(new CustomEvent('cosmic-premium-change'));
}

export async function tryUnlockCode(code) {
  const hash = await hashCode(code);
  if (!hash || !UNLOCK_HASHES.has(hash)) return false;
  setPremiumUnlocked(true);
  return true;
}

export function openCheckout() {
  const url = PREMIUM_CONFIG.checkoutUrl?.trim();
  if (!url) return false;
  window.open(url, '_blank', 'noopener,noreferrer');
  return true;
}

export function showCheckoutPreparingToast() {
  const u = getUI().premiumGate ?? {};
  showToast(u.checkoutPreparing ?? '準備中です');
}

/** モーダル内 CTA パネルの HTML */
export function renderPremiumCtaPanel() {
  const u = getUI().premiumGate ?? {};
  return `
    <aside class="premium-cta-panel" id="premium-cta-panel" hidden>
      <p class="premium-cta-eyebrow">${escape(u.eyebrow ?? 'Premium')}</p>
      <h4 class="premium-cta-title">${escape(u.title ?? '')}</h4>
      <p class="premium-cta-lead">${escape(u.lead ?? '')}</p>
      <button type="button" class="cta-button premium-cta-buy" data-premium-buy>
        ${escape(u.buyCta ?? 'Premium を購入する')}
      </button>
      <details class="premium-unlock-details">
        <summary>${escape(u.alreadyPurchased ?? '購入済みの方はこちら')}</summary>
        <form class="premium-unlock-form" data-premium-unlock-form>
          <label class="sr-only" for="premium-unlock-code">${escape(u.codeLabel ?? '')}</label>
          <input type="text" id="premium-unlock-code" class="premium-unlock-input"
            placeholder="${escape(u.codePlaceholder ?? '')}" autocomplete="off" spellcheck="false">
          <button type="submit" class="share-btn">${escape(u.unlockCta ?? 'コードで解放')}</button>
        </form>
        <p class="premium-cta-note">${escape(u.unlockNote ?? '')}</p>
      </details>
    </aside>
  `;
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/** CTA パネルとロック章のイベント配線 */
export function bindPremiumCta(root) {
  const panel = root.querySelector('#premium-cta-panel');
  if (!panel) return;

  const showPanel = () => {
    panel.hidden = false;
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  root.querySelectorAll('.dc-chapter.dc-locked').forEach(ch => {
    ch.setAttribute('tabindex', '0');
    ch.setAttribute('role', 'button');
    const open = () => showPanel();
    ch.addEventListener('click', open);
    ch.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });

  panel.querySelector('[data-premium-buy]')?.addEventListener('click', () => {
    if (!openCheckout()) showCheckoutPreparingToast();
  });

  panel.querySelector('[data-premium-unlock-form]')?.addEventListener('submit', async e => {
    e.preventDefault();
    const input = panel.querySelector('#premium-unlock-code');
    const code = input?.value?.trim();
    if (!code) return;
    const u = getUI().premiumGate ?? {};
    const ok = await tryUnlockCode(code);
    if (ok) {
      showToast(u.unlocked ?? 'Premium を解放しました');
      window.dispatchEvent(new CustomEvent('cosmic-premium-unlocked'));
    } else {
      showToast(u.invalidCode ?? 'コードが正しくありません');
    }
  });
}

export async function initPremium() {
  const params = new URLSearchParams(window.location.search);
  const unlock = params.get('unlock');
  if (!unlock) return;
  if (await tryUnlockCode(unlock)) {
    const u = getUI().premiumGate ?? {};
    showToast(u.unlocked ?? 'Premium を解放しました');
    params.delete('unlock');
    const qs = params.toString();
    const next = `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`;
    window.history.replaceState({}, '', next);
  }
}
