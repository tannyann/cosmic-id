# cyclesDayPlan: moonPhase / moonName が常に undefined(バグ・未修正)

`src/calculations.js` の `cyclesDayPlan` は `const moon = moonPhaseAt(bio.date)` の戻り値を
`moon.phase` / `moon.name` とオブジェクト参照しているが、`moonPhaseAt` は **数値(0〜1)を返す**。

- 結果: 統合サイクルプランナーの月相列は全行 `undefined`、`lunar`(新月/満月フラグ)も常に `null`
- おそらく `moonPhaseToday()`(`{ phase, name }` を返す)と混同したまま流用された
- UI 側(cyclesCalendar.js)がこの列をどう表示しているか未確認 — 修正前に表示側の期待を確認すること
- 修正案: `const phase = moonPhaseAt(bio.date)` として `moonName` は MOON_PHASE_NAMES から引く。
  方針確認待ちのため**未修正**。テストに現状挙動を固定した「バグ報告」テストあり。
