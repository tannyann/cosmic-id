# 動物占い 公式照合レポート(Issue #4)

**目的**: 実装の動物占い(`animalUranai` / `animalGroupIndex`)が、個性心理學(動物占い®)の公式判定とどこまで一致/不一致かを、出典付きで確定する。I-1決定「独自12分類と明記」の注記の正確さを裏付ける。

**調査担当**: サブエージェント(worktree `issue/I-4-animal-verify`)
**進め方**: 1件調べるごとに即追記コミット(途中失敗でも部分成果が残るように)。

---

## 0. 実装の式(現状)

`src/calculations.js`:

```js
export function animalUranai(year, month, day) {
  const ref = new Date(Date.UTC(1925, 3, 23));   // 1925-04-23 起点
  const birth = new Date(Date.UTC(year, month - 1, day));
  const days = Math.floor((birth - ref) / 86400000);
  const num = ((days % 60) + 60) % 60 + 1;        // 1..60 の通し番号
  const idx = (num - 1) % 12;                      // 60→12縮約
  return { num, name: ANIMAL_NAMES[idx] };
}
export function animalGroupIndex(animalIdx) {
  return animalIdx % 3;                            // 月0 / 地1 / 太陽2
}
```

`ANIMAL_NAMES`(`src/i18n/locales/ja/content.js`、idx 0..11):
`狼, こじか, 猿, チータ, 黒ひょう, ライオン, 虎, たぬき, 子守熊, ゾウ, ひつじ, ペガサス`

グループは `idx % 3` → idx0狼=月, idx1こじか=地, idx2猿=太陽, idx3チータ=月 …(配列順の単純ローテーション)。

### 実装の算出値(node実行・回帰ピン)

| 誕生日 | num(1..60) | idx | 実装の動物 | 実装グループ(idx%3) |
|---|---|---|---|---|
| 1990-05-15 | 4 | 3 | チータ | 月 |
| 1980-01-01 | 57 | 8 | 子守熊 | 太陽 |
| 2000-12-31 | 47 | 10 | ひつじ | 地 |
| 1975-06-15 | 16 | 3 | チータ | 月 |
| 1995-03-03 | 17 | 4 | 黒ひょう | 地 |

（上表は現状実装の固定値=回帰ピン。正しさの保証ではない。）

---

## 1. 動物占い(個性心理學)の公式計算方法

[調査中]

## 2. 実装 vs 公式 照合表(誕生日5件以上)

[調査中]

## 3. 起点位相・60→12縮約・グループ分けの正否

### 3.1 起点(1925-04-23 = num1)
[調査中]

### 3.2 60→12縮約 `(num-1)%12`
[調査中]

### 3.3 グループ分け `idx%3`(月・地・太陽)
[調査中]

## 4. 商標・公式コンテンツ転載の注意

[調査中]

## 5. 結論

[調査中]
