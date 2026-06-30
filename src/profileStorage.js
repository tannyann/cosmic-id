/**
 * 直近の入力プロフィールを localStorage に保存・復元（認証なしの簡易記憶）。
 */
import { MAIN_BIRTH_IDS, setBirthDateValue } from './birthDateField.js';
import { isJapaneseLocale } from './i18n/index.js';

const STORAGE_KEY = 'cosmic-id-profile';

/** @param {{ name: string, nameRoman?: string, y: number, m: number, d: number }} profile */
export function saveProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      name: profile.name,
      nameRoman: profile.nameRoman ?? '',
      y: profile.y,
      m: profile.m,
      d: profile.d,
      savedAt: Date.now()
    }));
  } catch {
    /* private mode */
  }
}

/** @returns {{ name: string, nameRoman: string, y: number, m: number, d: number } | null} */
export function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (!p?.name || !p?.y || !p?.m || !p?.d) return null;
    return p;
  } catch {
    return null;
  }
}

/** フォームへ前回の入力を復元。復元できたら true */
export function restoreProfileForm() {
  const p = loadProfile();
  if (!p) return false;

  const nameEl = document.getElementById('name');
  if (nameEl) nameEl.value = p.name;

  const romanEl = document.getElementById('name-roman');
  if (romanEl && isJapaneseLocale() && p.nameRoman) {
    romanEl.value = p.nameRoman;
  }

  setBirthDateValue(MAIN_BIRTH_IDS, p.y, p.m, p.d);

  const hint = document.getElementById('profile-restored-hint');
  if (hint) hint.hidden = false;

  return true;
}
