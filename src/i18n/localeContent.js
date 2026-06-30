/**
 * ロケール別 content パッチを英語ベースにマージして返す。
 */
import * as enContent from './locales/en/content.js';
import { mergeContentModule } from './mergeContent.js';

import { patch as zhPatch } from './locales/zh/content-patch.js';
import { patch as koPatch } from './locales/ko/content-patch.js';
import { patch as esPatch } from './locales/es/content-patch.js';
import { patch as frPatch } from './locales/fr/content-patch.js';
import { patch as dePatch } from './locales/de/content-patch.js';
import { patch as itPatch } from './locales/it/content-patch.js';
import { patch as trPatch } from './locales/tr/content-patch.js';
import { patch as hePatch } from './locales/he/content-patch.js';
import { patch as arPatch } from './locales/ar/content-patch.js';

/** @type {Record<string, object>} */
const PATCHES = {
  zh: zhPatch,
  ko: koPatch,
  es: esPatch,
  fr: frPatch,
  de: dePatch,
  it: itPatch,
  tr: trPatch,
  he: hePatch,
  ar: arPatch
};

/** @param {string} code */
export function getLocaleContent(code) {
  const patch = PATCHES[code];
  if (!patch) return enContent;
  return mergeContentModule(enContent, patch);
}
