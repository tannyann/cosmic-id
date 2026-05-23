/**
 * モーダル詳細コンテンツ — アクティブロケールから buildDeep を委譲。
 */
import { getDeeper } from './i18n/index.js';

export function buildDeep(cardKey, ctx) {
  return getDeeper().buildDeep(cardKey, ctx);
}
