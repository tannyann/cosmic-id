/**
 * 多言語切替コア。
 * content / ui / deeper はロケールバンドルから取得する。
 */

import ja from './locales/ja/index.js';
import en from './locales/en/index.js';
import { ui as zhUi } from './locales/zh/ui.js';
import { ui as koUi } from './locales/ko/ui.js';
import { ui as esUi } from './locales/es/ui.js';
import { ui as frUi } from './locales/fr/ui.js';
import { ui as itUi } from './locales/it/ui.js';
import { ui as deUi } from './locales/de/ui.js';
import { ui as trUi } from './locales/tr/ui.js';
import { ui as heUi } from './locales/he/ui.js';
import { ui as arUi } from './locales/ar/ui.js';

const STORAGE_KEY = 'cosmic-id-locale';

/** @typedef {'ja'|'en'|'zh'|'ko'|'es'|'fr'|'it'|'de'|'tr'|'he'|'ar'} LocaleCode */

/** UI のみ翻訳・占術コンテンツは英語にフォールバック */
function uiLocale(ui, code, htmlLang, dir = 'ltr') {
  const base = { ...en, ui: { ...en.ui, ...ui }, meta: { code, label: ui.meta.label, htmlLang, dir } };
  return base;
}

const zh = uiLocale(zhUi, 'zh', 'zh-Hans');
const ko = uiLocale(koUi, 'ko', 'ko');
const es = uiLocale(esUi, 'es', 'es');
const fr = uiLocale(frUi, 'fr', 'fr');
const it = uiLocale(itUi, 'it', 'it');
const de = uiLocale(deUi, 'de', 'de');
const tr = uiLocale(trUi, 'tr', 'tr');
const he = uiLocale(heUi, 'he', 'he', 'rtl');
const ar = uiLocale(arUi, 'ar', 'ar', 'rtl');

ja.meta = { code: 'ja', label: ja.ui.meta.label, htmlLang: 'ja', dir: 'ltr' };
en.meta = { code: 'en', label: en.ui.meta.label, htmlLang: 'en', dir: 'ltr' };

/** @type {Record<LocaleCode, typeof ja>} */
export const LOCALES = { ja, en, zh, ko, es, fr, it, de, tr, he, ar };

/** @type {LocaleCode[]} */
export const LOCALE_CODES = ['ja', 'en', 'zh', 'ko', 'es', 'fr', 'it', 'de', 'tr', 'he', 'ar'];

const listeners = new Set();

/** @returns {LocaleCode} */
function detectLocale() {
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  if (saved && LOCALES[saved]) return /** @type {LocaleCode} */ (saved);
  // 初回訪問は英語。言語はセレクタで明示的に選んでもらう。
  return 'en';
}

let current = detectLocale();

/** @returns {LocaleCode} */
export function getLocale() {
  return current;
}

/** ローマ字入力欄を出すのは日本語 UI のみ */
export function isJapaneseLocale() {
  return current === 'ja';
}

/** 日本語以外に切り替わったときローマ字欄は CSS で非表示（入力値は保持） */
export function applyRomanNameFieldVisibility() {
  /* visibility is controlled by html[lang="ja"] in styles.css */
}

/** @returns {typeof ja} */
export function getBundle() {
  return LOCALES[current];
}

/** 占術辞書（旧 content.js 相当） */
export function getContent() {
  return getBundle().content;
}

/** UI 文言 */
export function getUI() {
  return getBundle().ui;
}

/** deeper モジュール */
export function getDeeper() {
  return getBundle().deeper;
}

/** @param {LocaleCode} code */
export function setLocale(code) {
  if (!LOCALES[/** @type {string} */ (code)] || code === current) return;
  current = /** @type {LocaleCode} */ (code);
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, code);
    }
  } catch {
    /* private mode 等で保存できなくても表示は切り替える */
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

/** 本番・開発で使うサイトのベース URL（末尾スラッシュなし） */
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
    inLanguage: bundle.meta.htmlLang
  };
  el.textContent = JSON.stringify(data);
}

/** 静的 HTML のラベルを現在ロケールで更新 */
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
  setText('form-free-badge', u.form.freeBadge);
  setText('footer-line1', u.footer.line1);
  setText('footer-line2', u.footer.line2);
  setAttr('name', 'placeholder', u.form.namePlaceholder);
  if (u.form.nameRomanPlaceholder) {
    setAttr('name-roman', 'placeholder', u.form.nameRomanPlaceholder);
  }

  applyRomanNameFieldVisibility();
  setText('btn-submit', u.form.submit);
  setText('form-privacy', u.form.privacyNote);
  setText('label-lang', u.lang.label);

  const shareClose = document.getElementById('share-modal-close');
  if (shareClose) shareClose.setAttribute('aria-label', u.modal.close);
  const modalClose = document.getElementById('modal-close');
  if (modalClose) modalClose.setAttribute('aria-label', u.modal.close);

  const shareModal = document.getElementById('share-modal');
  if (shareModal) shareModal.setAttribute('aria-label', u.share.panelTitle);
  const shareModalImg = document.getElementById('share-modal-img');
  if (shareModalImg) shareModalImg.alt = u.share.modalAlt;

  document.querySelectorAll('[data-share-modal="save"]').forEach(el => { el.textContent = u.share.save; });
  document.querySelectorAll('[data-share-modal="copy"]').forEach(el => { el.textContent = u.share.copy; });
  const nativeBtn = document.getElementById('share-modal-native');
  if (nativeBtn) nativeBtn.textContent = u.share.shareNative;

  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) langSwitcher.setAttribute('aria-label', u.lang.label);

  const premiumShowcase = document.getElementById('premium-showcase');
  if (premiumShowcase) {
    const cs = getContent().PREMIUM_COMING_SOON;
    premiumShowcase.setAttribute('aria-label', cs?.headline || u.premiumShowcase.ariaLabel || 'Premium');
  }
}

export function mountLanguageSwitcher() {
  const host = document.getElementById('lang-switcher');
  if (!host) return;
  refreshLanguageSwitcher();
  if (!host.dataset.bound) {
    const onPick = e => {
      setLocale(/** @type {HTMLSelectElement} */ (e.target).value);
    };
    host.addEventListener('change', onPick);
    host.addEventListener('input', onPick);
    host.dataset.bound = '1';
  }
}

export function refreshLanguageSwitcher() {
  const host = document.getElementById('lang-switcher');
  if (!host) return;
  host.innerHTML = LOCALE_CODES.map(code => {
    const loc = LOCALES[code];
    const selected = code === current ? ' selected' : '';
    return `<option value="${code}"${selected}>${loc.ui.meta.label}</option>`;
  }).join('');
  host.value = current;
}

export function initI18n() {
  applyDocumentLocale();
  applyStaticPageCopy();
  mountLanguageSwitcher();
}
