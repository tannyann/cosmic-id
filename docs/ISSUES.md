# ISSUES.md — cosmic_id 実装タスクの設計と割り当て

設計: 2026-07-08(Fable)。運用ルールとエスカレーションは `docs/ORG.md`。
**2026-07-10 に GitHub Issues 化済み**(下表の GH# 列。リンク先が正式なチケット、本ファイルは設計書として残す)。
状態(☐/✅)は GitHub 側の Open/Closed を正とし、本ファイルは更新を都度反映する。

進行表(担当 / 状態):

| # | GH# | タイトル | 担当 | 依存 | 状態 |
|---|---|---|---|---|---|
| I-1 | [#1](https://github.com/tannyann/cosmic-id/issues/1) | 流派・方式の採否決定(5論点) | **人間** | なし(材料は揃っている) | ✅ |
| I-2 | [#2](https://github.com/tannyann/cosmic-id/issues/2) | マヤ暦KIN起点のWeb照合 | **Opus** | なし | ☐ |
| I-3 | [#3](https://github.com/tannyann/cosmic-id/issues/3) | 立春日テーブル(1900–2100)の作成と検証 | **Opus** | なし | ☐ |
| I-4 | [#4](https://github.com/tannyann/cosmic-id/issues/4) | 動物占い公式照合(起点・60→12対応) | **Opus** | なし | ☐ |
| I-5 | [#5](https://github.com/tannyann/cosmic-id/issues/5) | タロット22→愚者バグ修正 | **Sonnet** | I-1 | ☐ |
| I-6 | [#6](https://github.com/tannyann/cosmic-id/issues/6) | cyclesDayPlan 月相バグ修正 | **Sonnet** | なし | ☐ |
| I-7 | [#7](https://github.com/tannyann/cosmic-id/issues/7) | マヤ暦KIN修正(起点+うるう日+関連KIN) | **Opus**(レビュー: Fable) | I-1, I-2 | ☐ |
| I-8 | [#8](https://github.com/tannyann/cosmic-id/issues/8) | 年切替の立春統一(干支・五行・九星サイクル) | **Opus** | I-1, I-3 | ☐ |
| I-9 | [#9](https://github.com/tannyann/cosmic-id/issues/9) | 月星座の本実装(astronomy-engine) | **Opus** | I-1 | ☐ |
| I-10 | [#10](https://github.com/tannyann/cosmic-id/issues/10) | lifePath 方式の変更 or 併記 | **Sonnet** | I-1 | ☐ |
| I-11 | [#11](https://github.com/tannyann/cosmic-id/issues/11) | 注記・文言一式(独自指標の明示ほか) | **Sonnet** | I-1(一部は先行可) | ☐ |
| I-12 | [#12](https://github.com/tannyann/cosmic-id/issues/12) | 375px 監査と修正 | **Cursor**(検収: Sonnet) | なし | ☐ |
| I-13 | [#13](https://github.com/tannyann/cosmic-id/issues/13) | PWA 化(manifest + Service Worker) | **Sonnet** | I-12 | ☐ |
| I-14 | [#14](https://github.com/tannyann/cosmic-id/issues/14) | サイトデザイン改善 | **Cursor**(検収: Sonnet) | I-12 | ☐ |
| I-15 | [#15](https://github.com/tannyann/cosmic-id/issues/15) | 作業ツリーの未コミット変更の整理 | **人間** | なし | ☐ |
| I-16 | [#16](https://github.com/tannyann/cosmic-id/issues/16) | 決済(Stripe)の設計 | **人間**(補佐: Opus) | Premium方針確定後 | ☐ |

---

## Phase 0 — 意思決定(人間)

### I-1 流派・方式の採否決定(5論点)【担当: 人間】✅ **決定済み(2026-07-11)**

**背景**: 監査(`docs/audit/fortune-accuracy.md` §6、`docs/audit/parts/others.md`)で、経営判断が必要な論点が出揃った。以降の実装 Issue の多くがこの決定待ち。

**決定内容**(GitHub #1 コメント参照):
1. **マヤ暦KIN**: I-2 の照合が黒なら公式準拠に修正する(条件付き。I-2完了まで#7は保留)
2. **タロット22**: **愚者(0)にマップ**(おすすめ採用)→ #5 解禁
3. **lifePath**: **個別還元方式(主流)に変更**(現状の全桁合計から変更。マスターナンバーの出方が変わる実例あり)→ #10 解禁
4. **年の切替**: 干支・五行を九星と同じ**立春系に統一**(おすすめ採用)+ UI注記 → #8 は I-3 完了後に解禁
5. **動物占い**: **「独自12分類」明記**(おすすめ・即日)→ #11 の該当箇所解禁

**注記**: このプロジェクトはプロトタイプ段階でデータ永続化・アカウントが未実装(AGENTS.md)のため、lifePath方式変更等による「既存ユーザーへの結果変動」の実害は限定的と判断。正式な告知文の作成は不要とする。

**受け入れ基準**: 5論点に○×が付き、既存ユーザーへの結果変動の告知方針(変わる場合)が一言決まっていること。決定は本ファイルの各 Issue に追記する。

---

## Phase 1 — 検証・調査(Opus)

### I-2 マヤ暦KIN起点のWeb照合【担当: Opus】

**背景**: 実装は 2013-07-26 = KIN33 起点だが、公式ドリームスペルでは同日が KIN164「銀河の黄色い種」の疑い(約131KINの恒常ズレ)。事実なら全ユーザーの紋章・音が別物。
**最初に読む**: `docs/audit/fortune-accuracy.md` §3・§5、`src/calculations.js` の `mayaKin`/`mayaRelatedKin`
**やること**: 公式系計算機(13moon.com / Foundation for the Law of Time 等)で {2013-07-26, 2019-07-26, 1990-05-15, 2020-02-28, 2020-03-01} を照合。うるう日(2/29)スキップの実挙動も確認。関連KIN(ガイド=音依存 / オカルト=261−kin / 反対=+130)の公式ルールを出典付きで確定。
**受け入れ基準**: 5日付の照合表(出典URL付き)。「起点は白か黒か」「うるう日ルールの有無」の結論。fortune-accuracy.md §3 の[未確認]を全て置換。
**止まる条件**: 修正するかは決めない(I-1)。コードは触らない。

### I-3 立春日テーブル(1900–2100)の作成と検証【担当: Opus】

**背景**: 九星の年切替が「2/4固定」近似のため、立春が2/3・2/5の年に境界ズレ。干支の立春統一(I-8)にも同じテーブルが要る。
**最初に読む**: `docs/audit/fortune-accuracy.md` §1、`src/calculations.js` の `kyuseiHonmei`
**やること**: 国立天文台の暦要項等から各年の立春「日」(日本時間)を取得し、`{年: 立春日}` の JSON/JS テーブルを `src/data/`(新設)に作る。**2つの独立ソースで突合**し、食い違う年は「未確認」と明記。2/4以外の年の一覧をレポート。
**受け入れ基準**: 1900–2100 のテーブル+突合結果。テーブル自体のテスト(既知年: 2021=2/3、1984=2/5 等)を Vitest で追加し `npm test` 全pass。**calculations.js はまだ触らない**(組み込みは I-8)。

### I-4 動物占い公式照合【担当: Opus】

**背景**: 60→12縮約 `(num−1)%12` とグループ分け `%3` が公式対応表と不一致の疑い(`fortune-accuracy.md` §2)。
**やること**: 公式系の無料判定で誕生日5件以上(監査記載の実例含む)を照合し、(a)起点位相 (b)60→12対応 (c)月・地・太陽グループ の正否を確定。商標・著作権の注意点(コンテンツ転載の可否)も1段落で整理。
**受け入れ基準**: 照合表(出典付き)+「一致/不一致」の結論。fortune-accuracy.md §2 の[未確認]を置換。コードは触らない。

---

## Phase 2 — 計算修正(決定・検証後)

### I-5 タロット22→愚者バグ修正【担当: Sonnet】(I-1 の決定後)

**背景**: `tarotBirthCard` で合計22のとき `TAROT_BY_NUM[22]` が undefined(誕生日の約5%)。`cardInteractives.js` のシャドウカード `(num+11)%22||22` も同じ穴。詳細: `docs/learnings/tarot-birthcard-22-undefined.md`、`docs/audit/parts/others.md` §3。
**やること**: I-1 の決定(おすすめ: 22=愚者)に従い `calculations.js` と `cardInteractives.js:714,765` 付近を修正。「Greer 方式(22=愚者)に従う」コメントを付す。テストの「バグ報告」ケースを正しい期待値に書き換え、`tarotBirthCard(1930,6,12)` → 愚者を追加。
**受け入れ基準**: `npm test` 全pass(出力貼付)。1949-12-14 等の該当誕生日で UI 表示が壊れないこと(スクリーンショット)。
**エスカレーション**: 影響ファイルが calculations/cardInteractives の外に及ぶと判明したら Opus へ。

### I-6 cyclesDayPlan 月相バグ修正【担当: Sonnet】

**背景**: `moonPhaseAt`(数値を返す)を `moon.phase`/`moon.name` と参照しており月相列が全 undefined。詳細: `docs/learnings/cyclesdayplan-moonphase-undefined.md`。
**やること**: まず `cyclesCalendar.js` 等の表示側が何を期待しているか確認 → `cyclesDayPlan` を修正(`moonName` は `MOON_PHASE_NAMES` から引く)。テストの「バグ報告」ケースを正しい期待値へ。
**受け入れ基準**: `npm test` 全pass。サイクルプランナー UI に月相・新月/満月マークが実際に出るスクリーンショット。

### I-7 マヤ暦KIN修正【担当: Opus / レビュー: Fable(不在時は Opus+人間)】(I-1・I-2 の後)

**背景**: 全ユーザーの結果が変わる最重要修正。I-2 の照合結果が確定してから着手。
**やること**: 起点定数の修正、うるう日(2/29)スキップの実装、`mayaRelatedKin` を公式ルール(ガイド=音依存表 / オカルト=261−kin)へ。**MAYA_SEALS/TONES 辞書のインデックスは変えない**。テストは I-2 の照合表を[外部照合]として書き直す(回帰ピンの kin140 等は削除し、理由をコミットメッセージに)。
**受け入れ基準**: I-2 の全照合日付がテストで green。`npm test` 全pass。既存ユーザー向け告知文の下書き(I-1 の方針に従う)。
**制約**: 「ドリームスペル公式に従う」コメント必須。

### I-8 年切替の立春統一【担当: Opus】(I-1・I-3 の後)

**背景**: 干支・五行=1/1切替、九星=立春近似でアプリ内不統一(`parts/others.md` §1)。
**やること**: I-3 のテーブルを使い `chineseZodiac`/`sixtyJikkan`/`gogyou`/`kyuseiHonmei`/`kyuseiCycleYear` の年切替を立春(日単位)に統一。1月〜2月上旬生まれの境界テスト(1985-01-15、1990-02-01 等、監査の実例)を追加。
**受け入れ基準**: `npm test` 全pass。UI に「立春切替を採用」の注記(I-11 と整合)。

### I-9 月星座の本実装【担当: Opus】(I-1 の後)

**背景**: 現状は月相の傾向のみ。astronomy-engine は導入済み(`fortune-accuracy.md` §4)。
**やること**: 正午JST基準で月の黄経→星座を算出する純粋関数を追加(体系追加の5手順に従う)。境界日(その日の内に星座が移動)は両候補を表示。moonTrait は「月相の傾向」として存置。
**受け入れ基準**: 既知の月星座(外部サイト3例以上と照合)がテストで green。`npm test` 全pass。
**エスカレーション**: astronomy-engine の API で詰まったら Fable/人間に相談(自前の天文計算は書かない)。

### I-10 lifePath 方式の変更 or 併記【担当: Sonnet】(I-1 の後)

**背景**: 全桁合計(現状)と個別還元(主流)でマスターナンバーの出方が変わる(`parts/others.md` §4 に実例3件)。
**やること**: I-1 の決定に従い実装。変更なら監査の実例(1989-02-27、2007-11-02、1980-02-02)をテストに追加し、「○○方式に従う」コメント。
**受け入れ基準**: `npm test` 全pass。結果が変わる場合は変動regの告知文下書き。

---

## Phase 3 — UI・コンテンツ

### I-11 注記・文言一式【担当: Sonnet(fortune-content スキル使用)】

**背景**: 監査で「独自指標であることの明示」「系統の注記」推奨が多数。
**やること(en/ja 両方)**:
- 太陽星座: 境界±1日生まれに「カスプ」注記
- 月命星・日命星・luckyCompass・イヤーカード・expressionNumberNative: 「独自の簡易指標」明示
- ケルト: 「オガム暦(13樹木)系を採用」注記+ja 和名修正(`錦木(エルダー)`→ニワトコ、`榛` の重複解消)
- 動物占い: I-1 の決定に従う表記
**受け入れ基準**: en/ja 同期(キー構造一致)。トーン規約(断定しない)準拠。UI 崩れなし。

### I-12 375px 監査と修正【担当: Cursor / 検収: Sonnet】

`docs/CURSOR-BRIEFS.md` のブリーフ A を Cursor に貼って実行。検収は `.claude/commands/mobile-audit.md` の A 項基準(横スクロール・はみ出し・重なり・タップ領域)で Sonnet が 375px スクリーンショットを確認。

### I-13 PWA 化【担当: Sonnet】(I-12 の後)

`.claude/commands/mobile-audit.md` の B 項どおり。manifest(アイコン・theme_color・standalone)+ Service Worker でオフラインでもコア体験が開く。**インストール可能・オフライン起動を実挙動で確認してから「できた」と言う**。

### I-14 サイトデザイン改善【担当: Cursor / 検収: Sonnet】

`docs/CURSOR-BRIEFS.md` のブリーフ B。CSS 変数の範囲内でのポリッシュに限定(デザイン方向の変更は人間の判断)。

---

## Phase 4 — 運用・将来

### I-15 作業ツリーの未コミット変更の整理【担当: 人間】

`index.html` / `src/i18n/**` / `src/share.js` / `src/ui.js` / `public/share-card-base.png` / 削除された google 確認ファイル / `_ Star Map _ Tree of Life.png` が未コミットのまま。内容を確認してコミットするか破棄するか判断(AIは中身の要約まで手伝える)。

### I-16 決済(Stripe)の設計【担当: 人間(補佐: Opus)】

Premium ゲートは現在一時無効化中(全章無料)。価格・解放範囲の決定は人間。実装設計(Checkout / アンロック状態のサーバー検証、AGENTS.md の「localStorage に持たない」原則)は Opus が下書きし人間がレビュー。**課金まわりは AI が勝手に進めない。**
