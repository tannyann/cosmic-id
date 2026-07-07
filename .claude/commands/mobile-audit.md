---
description: 幅375px でのレイアウト崩れを全ページ監査し、PWA 化する
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

## 目的（なぜ）

COSMIC ID のコアユーザーはスマホ利用が多い想定。AGENTS.md のチェックリストにも「幅375px(iPhone SE 相当)で崩れないか」があり、ロードマップに PWA 化がある。
あなたの成果物は、スマホで開いた瞬間に破綻していない状態と、ホーム画面に追加できるアプリ体験。

## 最初に読む（これがあなたの脳）

- `AGENTS.md` — 関心の分離（UI変更は index.html → styles.css → ui.js の順）、やってはいけないこと
- `README.md` — 機能一覧（サマリー/深掘りモーダル/シェアカード/各UIモジュール）
- `src/styles.css` と `src/*-ui.js` — レイアウトの実体
- `public/manifest.webmanifest` — 既存の manifest 有無

## やること

### A. 375px 崩れ監査
1. `npm run build` → `npm run preview` で本番ビルドを 375px 幅で確認できるようにする。
2. **全ての主要画面**（入力フォーム、サマリー、各カード一覧、深掘りモーダル、相性/ラブ/タイムライン/ミュージアム等の -ui モジュール、シェアカード）を 375px で点検。
3. 崩れ（横スクロール発生・要素はみ出し・文字重なり・タップ領域が小さすぎ)を洗い出し、`styles.css` 中心に修正。レイアウト変更は index.html→styles.css→ui.js の順を守る。

### B. PWA 化
4. `manifest.webmanifest`（アイコン・theme_color・display:standalone）と Service Worker を整備し、オフラインでコア体験が開くようにする。既存の `public/` の資産を使う。

## 制約

- **一番シンプルに直すことだけやる。** CSS フレームワーク導入・全面リファクタ・デザイン刷新は禁止。既存の CSS 変数(配色管理)を維持する。
- プレミアムのぼかしロック(`.premium-section.unlocked` と `isPremiumDemo` の関係)を誤って外さない。
- `escapeHtml` を通さずにユーザー入力を描画しない。

## 止まる条件

止まってよいのは、デザインの方向性変更が要る・破壊的な構造変更が必要・こちらにしか出せない判断のとき**だけ**。「あとで直します」を残さない。

## 報告（結論から）

まず TLDR：崩れが見つかったページ数と、致命度の高い順の一覧から書く。
- 主張は**実際の確認結果**に基づき、未確認の画面は「未確認」と明記。可能なら before/after の該当箇所を示す。
- PWA はインストール可能・オフライン起動を実挙動で確認してから「できた」と言う。
- 学びは `docs/learnings/` に 1件1ファイルで記録。
