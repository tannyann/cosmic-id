/**
 * ロケール別 content.js の共通パターン。
 * en をベースにパッチをマージし、en と同じ named export を再エクスポートする。
 */
import * as en from './locales/en/content.js';
import { mergeContentModule } from './mergeContent.js';

/** @param {Partial<typeof en>} patch */
export function createContentExports(patch) {
  return mergeContentModule(en, patch);
}
