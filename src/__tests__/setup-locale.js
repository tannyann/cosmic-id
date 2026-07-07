/**
 * テスト用ロケール固定。i18n/index.js はモジュール評価時に
 * localStorage → navigator の順でロケールを決めるため、
 * calculations.js を import する前にこのファイルを import して
 * 'ja' に固定する(AGENTS.md の既知値は日本語名で書かれている)。
 */
globalThis.localStorage = {
  getItem: (k) => (k === 'cosmic-id-locale' ? 'ja' : null),
  setItem() {},
  removeItem() {}
};
