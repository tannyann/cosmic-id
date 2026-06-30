/**
 * 英語ベースの content をロケールパッチで深くマージする。
 * 配列はインデックスごと、オブジェクトはキーごとに再帰マージ。
 */
export function mergeDeep(base, patch) {
  if (patch === undefined || patch === null) return base;
  if (Array.isArray(base) && Array.isArray(patch)) {
    return base.map((item, i) => mergeDeep(item, patch[i]));
  }
  if (
    typeof base === 'object' && base !== null
    && typeof patch === 'object' && patch !== null
    && !Array.isArray(patch)
  ) {
    const out = { ...base };
    for (const key of Object.keys(patch)) {
      out[key] = mergeDeep(base[key], patch[key]);
    }
    return out;
  }
  return patch;
}

/** en/content モジュールにパッチを適用したオブジェクトを返す */
export function mergeContentModule(enModule, patchModule) {
  const out = {};
  for (const key of Object.keys(enModule)) {
    out[key] = key in patchModule
      ? mergeDeep(enModule[key], patchModule[key])
      : enModule[key];
  }
  return out;
}
