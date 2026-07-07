# CLAUDE.md — 最初に読む

**まず同リポジトリの `AGENTS.md`(規約の脳)を読んでから作業を始めること。**
関心の分離・コードスタイル・禁則・体系追加手順は全てそこにある。ここには即戦力の技術メモだけを置く。

## ここが正本

正本は `/Users/mizutanikouyou/cosmic_id`(remote: github.com/tannyann/cosmic-id)。
`~/Documents/Claude/cosmic_id` と `~/Documents/GitHub/cosmic-id` は**コピーなので編集しない**。

## コマンド

```bash
npm run dev       # Vite 開発サーバー (localhost:5173)
npm run build     # dist/ に本番ビルド
npm run preview   # 本番ビルド確認
npm test          # Vitest (calculations の回帰テスト)
```

スラッシュコマンド(`.claude/commands/`): `/test-calc`(テスト整備) `/mobile-audit`(375px監査+PWA) `/audit-fortune`(流派ズレ調査)。

## 変更後の検証(完了と言う前に)

- 計算(`src/calculations.js`)を触ったら `npm test` を実行し、pass/fail を実出力で報告。
- 文言を触ったら `src/i18n/locales/` の**全言語(en/ja)を同期**。片方だけで終わらない。
- UI を触ったら 375px 幅で崩れ確認(AGENTS.md のチェックリスト)。

## 絶対に壊さないもの

- `escapeHtml` を通さないユーザー入力描画を作らない。
- プレミアムのぼかしロック(`.premium-section.unlocked` / `isPremiumDemo`)を誤って外さない。
- 「言葉は content/deeper、計算は calculations、画面は ui」の分離。

## 場所の早見

- 残作業: `docs/HANDOFF.md` / 流派差の整理: `docs/audit/` / 学び: `docs/learnings/`(1件1ファイル)
- 既知の検証値(テストの種): `1990-05-15`→ライフパス3・午、`2024`→三碧木星・辰、立春前(2/1)生まれは九星が前年扱い
