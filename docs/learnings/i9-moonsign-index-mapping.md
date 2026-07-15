# I-9: 月/太陽の黄経→星座インデックス変換にはオフセットが要る

astronomy-engine の `EclipticGeoMoon(time).lon` はトロピカル黄経(0–360度、**0度=牡羊座**)を返す。
一方 `SUN_SIGNS`(`content.js`)の配列並びは**index0=山羊座始まり**(`from:[12,22]`)。

- そのまま `Math.floor(lon/30)` を SUN_SIGNS の index として使うと**3つずれる**(0度=牡羊座のはずが山羊座になる)
- 正しい変換: `tropicalIdx = floor(lon/30)`(0=牡羊座)→ `(tropicalIdx + 3) % 12` で SUN_SIGNS の index に変換
- 検証方法: 太陽の黄経は同じ規約(0度=牡羊座=春分点)に従うので、`SunPosition()` で春分(3/20頃, 黄経≈0度)・
  冬至(12/22頃, 黄経≈270度)を計算し、`sunSign()` の既存の日付境界(3/21牡羊座入り・12/22山羊座入り)と
  一致することで、この変換式が正しいことを外部照合なしで検証できた(このセッションではWeb照合は未実施)。

## cuspSign(境界日)判定のバグ

初版は「日の始まり(00:00)と終わり(23:59)で星座indexが違えば境界日」として、単純に
`endIdx` を cuspSign にしていたが、これだと**正午の星座(表示するsign)と同じ星座が
cuspSignとして重複表示される**ケースがあった(遷移が正午より前に起きた日など)。

正しくは、正午の星座(`noonIdx`)と異なる方(start または end)を cuspSign にする:
```js
let cuspIdx = null;
if (startIdx !== noonIdx) cuspIdx = startIdx;
else if (endIdx !== noonIdx) cuspIdx = endIdx;
```
