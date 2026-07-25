# AI_INSTRUCTIONS.md — AIエージェント共通の入口(索引)

**このファイルは索引です。内容は各正本ファイルにあり、ここでは繰り返しません**(二重管理を防ぐため)。
Claude / Codex / ChatGPT / Cursor いずれも、まずこの順で読んでください。

## 0. 大前提

- **正本のコード置き場**: `/Users/mizutanikouyou/cosmic_id`(remote: `github.com/tannyann/cosmic-id`)。
  `~/Documents/Claude/cosmic_id` と `~/Documents/GitHub/cosmic-id` は**古いコピー。絶対に編集しない**。
- **正本の情報源は GitHub**。作業を終えたら必ず push すること(未pushのまま終えると他のAIから見えず、正本がズレる)。

## 1. 読む順序

| 順 | ファイル | 何が書いてあるか |
|---|---|---|
| 1 | `AGENTS.md` | **規約の脳**。関心の分離・コードスタイル・禁則(escapeHtml/プレミアムロック等)・既知の検証値・テスト運用 |
| 2 | `docs/ORG.md` | **運用の憲法**。担当モデルの割り当て・レビュー品質ゲート・コスト効率ルール(v2)・push規律 |
| 3 | `DECISIONS.md` | **確定済みの意思決定**。ここに載っている決定は蒸し返さない |
| 4 | `docs/プロジェクト引き継ぎ書.md` | 現状監査(目的/完成・未完成/リスク/優先タスク/禁止事項/5分版) |

必要に応じて: `README.md`(機能一覧)、`docs/audit/`(占術の流派差調査)、`docs/learnings/`(教訓1件1ファイル)、`docs/HANDOFF.md`(残作業の手順)。

## 2. タスク管理の正本

**GitHub Issues が唯一の正本**です。`TASKS.md` のようなファイルは**意図的に作りません**(ファイルとIssueの二重管理は必ず腐るため)。

- 一覧: `gh issue list --repo tannyann/cosmic-id`
- ラベル: `agent:*`(担当= human/fable/opus/sonnet/cursor)、`phase:*`(段階)
- `docs/ISSUES.md` は**設計書**であり進捗の正本ではない(状態はGitHub側が正)

## 3. ツール別の補足ファイル

| ツール | ファイル | 備考 |
|---|---|---|
| Claude Code | `CLAUDE.md` | AGENTS.md のダイジェスト+即戦力コマンド |
| Cursor | `.cursor/rules/*.mdc` | 常時適用+ファイル別自動アタッチの規約 |
| Codex | `.codex/skills/cosmic-id-*/` | プロジェクト専用スキル4本(下記の同期に注意) |

### Codexスキルの同期について

Codex は実行時に `~/.codex/skills/`(ユーザーのローカル)を読みます。リポジトリ内の `.codex/skills/` は
**他のAIからも見えるようにするための共有コピー**です。片方を編集したらもう片方へ反映してください。

```bash
# リポジトリ → ローカル(他AIの更新を取り込む)
cp -R .codex/skills/cosmic-id-* ~/.codex/skills/
# ローカル → リポジトリ(自分の更新を共有する)
cp -R ~/.codex/skills/cosmic-id-* .codex/skills/
```

プロジェクト横断のスキル(`claude-codex-git-handoff` 等)は個人環境のみに置き、このリポジトリには含めません。

## 4. 作業の型(詳細は docs/ORG.md)

1. 着手前に `git fetch origin` → `main` から `issue/I-<番号>-<slug>` を切る
2. 意味のある単位ごとに commit(途中で中断しても成果が残る)
3. `npm test` の**実行結果**を確認 → push → PR(本文に `Closes #N` と実行結果)
4. **レビューは作者以外**。マージは人間
5. **終了時に必ず push**(未pushで終えない)

## 5. AIが勝手にやってはいけないこと

`AGENTS.md`「やってはいけないこと」と `docs/プロジェクト引き継ぎ書.md` §8 が正本。特に:

- 課金・価格・Premium解放範囲の決定(人間の判断)
- Stripe管理画面・APIキー・Webhook秘密鍵の操作(人間)
- 占術の流派選定(`DECISIONS.md` 記載済みのものは変更しない)
- PRのマージ(人間)
- 破壊的操作・外部公開(事前確認)
