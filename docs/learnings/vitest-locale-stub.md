# テストで calculations.js を動かすには localStorage スタブでロケールを固定する

`calculations.js` → `i18n/index.js` はモジュール評価時に localStorage → navigator の順で
ロケールを自動判定する。Node(vitest)では navigator が無く **'en' に落ちる**ため、
AGENTS.md の既知値(日本語名)と比較するテストはそのままだと失敗する。

- `setLocale('ja')` は document を触るので Node では使えない(jsdom を足すのは過剰)
- 解: `src/__tests__/setup-locale.js` で `globalThis.localStorage` に
  `'cosmic-id-locale' → 'ja'` を返すスタブを置き、**calculations.js より先に import** する
  (ESM の評価順は import 宣言順なのでこれで確実に先行する)
- 月相系(moonPhaseAt 等)はローカルタイムゾーン依存 → 断言は幅を持たせる
- 「今日」依存の関数は `vi.setSystemTime` で固定(2026-01-01 を基準にしている)
