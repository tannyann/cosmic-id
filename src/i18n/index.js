/**
 * 言語切替（日本語 / English のみ）。
 */
import ja from './locales/ja/index.js';
import en from './locales/en/index.js';
import { createDateFormatters } from './dateFormat.js';

const STORAGE_KEY = 'cosmic-id-locale';

/** @typedef {'ja'|'en'} LocaleCode */

ja.meta = { code: 'ja', label: ja.ui.meta.label, htmlLang: 'ja', dir: 'ltr' };
en.meta = { code: 'en', label: en.ui.meta.label, htmlLang: 'en', dir: 'ltr' };

/** @type {Record<LocaleCode, typeof ja>} */
export const LOCALES = { ja, en };

/** @type {LocaleCode[]} */
export const LOCALE_CODES = ['ja', 'en'];

const listeners = new Set();

/** @returns {LocaleCode} */
function detectLocale() {
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  if (saved === 'ja' || saved === 'en') return saved;
  if (typeof navigator !== 'undefined' && /^ja\b/i.test(navigator.language || '')) return 'ja';
  return 'en';
}

let current = detectLocale();

/** @returns {LocaleCode} */
export function getLocale() {
  return current;
}

export function isJapaneseLocale() {
  return current === 'ja';
}

export function applyRomanNameFieldVisibility() {
  /* visibility is controlled by html[lang="ja"] in styles.css */
}

/** @returns {typeof ja} */
export function getBundle() {
  return LOCALES[current];
}

export function getContent() {
  return getBundle().content;
}

export function getUI() {
  const bundle = getBundle();
  const dates = createDateFormatters(bundle.meta);
  const ui = bundle.ui;
  return {
    ...ui,
    fmt: { ...ui.fmt, ...dates },
    share: { ...ui.share, birthDate: dates.birthDate, bornLine: dates.bornLine }
  };
}

export function getDeeper() {
  return getBundle().deeper;
}

/** @param {LocaleCode} code */
export function setLocale(code) {
  if (code !== 'ja' && code !== 'en') return;
  if (code === current) return;
  current = code;
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, code);
    }
  } catch {
    /* private mode */
  }
  applyDocumentLocale();
  applyStaticPageCopy();
  refreshLanguageSwitcher();
  listeners.forEach(fn => fn(code));
}

/** @param {(code: LocaleCode) => void} fn */
export function onLocaleChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getSiteUrl() {
  if (typeof window !== 'undefined') {
    const base = import.meta.env.BASE_URL || '/';
    try {
      return new URL(base, window.location.origin).href.replace(/\/$/, '');
    } catch {
      const path = base.startsWith('/') ? base : `/${base}`;
      return `${window.location.origin}${path}`.replace(/\/$/, '');
    }
  }
  return 'https://tannyann.github.io/cosmic-id';
}

export function getOgImageUrl() {
  return `${getSiteUrl()}/og.png`;
}

export function applyDocumentLocale() {
  const b = getBundle();
  document.documentElement.lang = b.meta.htmlLang;
  document.documentElement.dir = b.meta.dir || 'ltr';
  document.title = b.ui.meta.title;

  const siteUrl = getSiteUrl();
  const ogImage = getOgImageUrl();

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', b.ui.meta.description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', b.ui.meta.ogTitle);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', b.ui.meta.ogDescription);
  const ogImageEl = document.getElementById('meta-og-image');
  if (ogImageEl) ogImageEl.setAttribute('content', ogImage);
  const ogUrl = document.getElementById('meta-og-url');
  if (ogUrl) ogUrl.setAttribute('content', siteUrl);
  const twitterImage = document.getElementById('meta-twitter-image');
  if (twitterImage) twitterImage.setAttribute('content', ogImage);

  applyStructuredData(b, siteUrl);
}

function applyStructuredData(bundle, siteUrl) {
  const el = document.getElementById('ld-json');
  if (!el) return;
  const u = bundle.ui.meta;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'COSMIC ID',
    url: siteUrl,
    description: u.description,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    inLanguage: [bundle.meta.htmlLang]
  };
  el.textContent = JSON.stringify(data);
}

export function applyStaticPageCopy() {
  const u = getUI();
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const setAttr = (id, attr, val) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, val);
  };

  setText('header-eyebrow', u.header.eyebrow);
  setText('header-subtitle', u.header.subtitle);
  setText('label-name', u.form.nameLabel);
  setText('hint-name', u.form.nameHint ?? '');
  setText('label-name-roman', u.form.nameRomanLabel ?? '');
  setText('hint-name-roman', u.form.nameRomanHint ?? '');
  setText('label-birth', u.form.birthLabel);
  setText('label-birth-month', u.form.birthMonthLabel);
  setText('label-birth-day', u.form.birthDayLabel);
  setText('label-birth-year', u.form.birthYearLabel);
  setText('form-free-badge', u.form.freeBadge);
  setText('footer-line1', u.footer.line1);
  setText('footer-line2', u.footer.line2);
  const footerLegal = document.getElementById('footer-legal');
  if (footerLegal && u.footer.legal) footerLegal.textContent = u.footer.legal;
  setAttr('name', 'placeholder', u.form.namePlaceholder);
  if (u.form.nameRomanPlaceholder) {
    setAttr('name-roman', 'placeholder', u.form.nameRomanPlaceholder);
  }

  applyRomanNameFieldVisibility();
  setText('btn-submit', u.form.submit);
  setText('form-privacy', u.form.privacyNote);
  const profileHint = document.getElementById('profile-restored-hint');
  if (profileHint && u.form.profileRestored) {
    profileHint.textContent = u.form.profileRestored;
  }

  const shareClose = document.getElementById('share-modal-close');
  if (shareClose) shareClose.setAttribute('aria-label', u.modal.close);
  const modalClose = document.getElementById('modal-close');
  if (modalClose) modalClose.setAttribute('aria-label', u.modal.close);

  const shareModal = document.getElementById('share-modal');
  if (shareModal) shareModal.setAttribute('aria-label', u.share.panelTitle);
  const shareModalImg = document.getElementById('share-modal-img');
  if (shareModalImg) shareModalImg.alt = u.share.modalAlt;

  document.querySelectorAll('[data-share-modal="save"]').forEach(el => { el.textContent = u.share.save; });
  const igBtn = document.getElementById('share-modal-instagram');
  if (igBtn) igBtn.textContent = u.share.shareInstagram;

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) langToggle.setAttribute('aria-label', u.lang.label);

  const premiumShowcase = document.getElementById('premium-showcase');
  if (premiumShowcase) {
    premiumShowcase.setAttribute('aria-label', u.premiumShowcase.ariaLabel || 'What\'s included');
  }
}

export function mountLanguageSwitcher() {
  const host = document.getElementById('lang-toggle');
  if (!host) return;
  refreshLanguageSwitcher();
  if (!host.dataset.bound) {
    host.querySelectorAll('[data-locale]').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = /** @type {LocaleCode} */ (btn.dataset.locale);
        setLocale(code);
      });
    });
    host.dataset.bound = '1';
  }
}

export function refreshLanguageSwitcher() {
  const host = document.getElementById('lang-toggle');
  if (!host) return;
  host.querySelectorAll('[data-locale]').forEach(btn => {
    const on = btn.dataset.locale === current;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

export function initI18n() {
  applyDocumentLocale();
  applyStaticPageCopy();
  mountLanguageSwitcher();
}
