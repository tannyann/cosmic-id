# I-8: risshunEffectiveYear 導入だけでは呼び出し元が直らない

`chineseZodiac`/`sixtyJikkan`/`gogyou` に `(year, month, day)` を追加し
`risshunEffectiveYear` で立春補正しても、**既存の呼び出し元が `year` だけを渡し続けていると
補正は効かない**(month/day が undefined だと `risshunEffectiveYear` は素通しで year をそのまま返す設計にしたため)。

- 該当箇所: `src/ui.js`(メインの render 経路)、`src/whatif.js`、`src/compat.js`、`src/yearly-wrap.js`
- 実際、これら4箇所はすべて呼び出し元スコープに month/day(`m,d` / `p1.m,p1.d` / `ctx.m,ctx.d`)を
  持っていたにもかかわらず、関数呼び出しは `chineseZodiac(y)` のように year のみだった
- **I-8 の本来の目的(九星と干支/五行の暦年不一致解消)は、関数のシグネチャを変えるだけでは
  達成されない。呼び出し元を1つずつ grep して全部直すまでがセット**
- 再発防止: `src/__tests__/calculations.test.js` に「同じ生年月日で kyuseiHonmei が使う暦年と
  chineseZodiac/sixtyJikkan/gogyou が使う暦年が一致する」ことを直接検証するテストを追加した
  (`risshunEffectiveYear` を通した期待値と実出力を比較)。関数単体のテストだけでは
  呼び出し元の直し忘れを検知できないため、この手のテストが要る。
