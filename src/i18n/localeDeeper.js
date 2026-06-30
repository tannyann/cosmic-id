/**
 * ロケール別 deeper モジュール。
 */
import * as enDeeper from './locales/en/deeper.js';
import * as jaDeeper from './locales/ja/deeper.js';
import * as zhDeeper from './locales/zh/deeper.js';
import * as koDeeper from './locales/ko/deeper.js';
import * as esDeeper from './locales/es/deeper.js';
import * as frDeeper from './locales/fr/deeper.js';
import * as deDeeper from './locales/de/deeper.js';
import * as itDeeper from './locales/it/deeper.js';
import * as trDeeper from './locales/tr/deeper.js';
import * as heDeeper from './locales/he/deeper.js';
import * as arDeeper from './locales/ar/deeper.js';

/** @type {Record<string, typeof enDeeper>} */
const DEEPER = {
  en: enDeeper,
  ja: jaDeeper,
  zh: zhDeeper,
  ko: koDeeper,
  es: esDeeper,
  fr: frDeeper,
  de: deDeeper,
  it: itDeeper,
  tr: trDeeper,
  he: heDeeper,
  ar: arDeeper
};

/** @param {string} code */
export function getLocaleDeeper(code) {
  return DEEPER[code] ?? enDeeper;
}
