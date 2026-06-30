/**
 * ロケール別 deeper（ja / en のみ）。
 */
import * as enDeeper from './locales/en/deeper.js';
import * as jaDeeper from './locales/ja/deeper.js';

/** @type {Record<string, typeof enDeeper>} */
const DEEPER = { en: enDeeper, ja: jaDeeper };

/** @param {string} code */
export function getLocaleDeeper(code) {
  return DEEPER[code] ?? enDeeper;
}
