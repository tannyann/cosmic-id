# マヤ暦: 2/29 生まれは「2/28 と同じ KIN」を返す暫定仕様

## 事実(ドリームスペル公式)

公式ドリームスペル(13の月の暦)では **2/29 は KIN を持たない日**(0.0 Hunab Ku)としてスキップする。
起点と対象日の間にある 2/29 は日数から除外して 260 剰余する(`src/calculations.js` の `mayaDayKin`)。

## 判断: 2/29 生まれの入力は null にしない

公式に厳密なら 2/29 生まれは「KIN なし」だが、`mayaKin` の戻り値(`kin`/`seal`/`tone`)は
`src/ui.js`(266行 `mayaKin(y,m,d)`)・`src/cardInteractives.js`・`src/whatif.js` が
KIN 番号・紋章・音を必ず前提に描画する。ここで null を返すと `MAYA_SEALS[(null-1)%20]` 等が
`undefined` になり UI が壊れる。

そのため **2/29 生まれは 2/28 と同じ KIN を返す暫定仕様**とした
(`mayaDayKin` 冒頭で `month===2 && day===29 → day=28`)。

## 影響範囲・今後

- 影響: 2/29 生まれのユーザーのみ。頻度は低い(4年に1日)。
- 正式対応の候補: 「あなたの誕生日は暦のはざま(0.0 Hunab Ku)」といった専用文言を用意し、
  UI 側で 2/29 を特別扱いする。文言追加は content/deeper、分岐は ui の責務。
- 参照: Issue #7、`docs/audit/verify/maya-verification.md`、`docs/audit/fortune-accuracy.md` §3。
