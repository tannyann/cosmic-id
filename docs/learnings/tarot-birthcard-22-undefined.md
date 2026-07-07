# tarotBirthCard: 合計がちょうど22のとき name が undefined になる(バグ・未修正)

`src/calculations.js` の `tarotBirthCard` は `while (sum > 22)` で還元を止めるため
`num = 22` があり得るが、`TAROT_BY_NUM` は index 0〜21(21=世界)しかなく
`TAROT_BY_NUM[22]` は `undefined`。

- 再現: `tarotBirthCard(1930, 6, 12)` → `{ num: 22, name: undefined }`(1930+6+12=1948、桁和22)
- 影響: 1930〜2025年生まれの機械的試算で誕生日全体の約5%(parts/others.md §3)
- 一般的な流派(Mary K. Greer 系)では 22 は愚者(0)として扱う
- 方針判断(22→愚者 or 22を出さない還元)が必要なため**未修正**。
  `src/__tests__/calculations.test.js` に現状挙動を固定した「バグ報告」テストあり。修正時はそのテストを期待値に書き換える。
