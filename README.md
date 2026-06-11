# COSMIC ID

**Live demo:** https://tannyann.github.io/cosmic-id/

個人統合占断プロトタイプ。生年月日と名前を入力するだけで、19 の占術・スピリチュアル体系を横断的に解釈し、一つの「物語」として読み解くウェブアプリ。

数秘術・西洋占星術・十二支・六十干支・九星気学・五行・動物占い・ケルト樹木占い・マヤ暦・タロット・誕生石・誕生花・バイオリズム・月相・人生の節目──これらを単一の入力から同時に算出し、文章サマリー + カード一覧 + クリックで深掘りモーダルの形で提示する。**コア体験は基本無料**。さらに深い解釈・横断機能は **Premium（任意）**。SNS 向けシェアカードにも対応。

---

## クイックスタート

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 が自動で開く。

```bash
npm run build       # dist/ に本番ビルドを出力
npm run preview     # 本番ビルドをローカルで確認
```

---

## 構成

```
cosmic_id/
├── index.html           # Vite エントリ。<script type="module" src="./src/main.js">
├── package.json
├── vite.config.js
├── src/
│   ├── main.js          # エントリ。CSS 読み込み・イベント束ね・Escape 制御
│   ├── styles.css       # 全 CSS
│   ├── util.js          # escapeHtml、日付、クリップボード、トースト等
│   ├── content.js       # 占術ごとの意味辞書(LIFE_PATH_MEANINGS など)
│   ├── calculations.js  # 純粋関数の計算ロジック(lifePath、sunSign 等)
│   ├── deeper.js        # モーダルの深掘りコンテンツ DB(buildDeep 関数)
│   ├── share.js         # SNS シェアカード生成・共有アクション
│   └── ui.js            # 描画・モーダル・サマリー生成・イベントバインド
├── README.md
└── AGENTS.md            # AI コーディング支援(Cursor/Claude)向け規約
```

### ファイル分割の方針

責務でレイヤーを分けている。**「言葉」と「計算」と「描画」は別の場所に置く** という単純なルール。

| ファイル | 役割 | 編集する場面 |
| --- | --- | --- |
| `content.js` | 静的辞書(占い結果のラベル・説明文) | 占い結果の文言を変えたい時 |
| `calculations.js` | 純粋関数の計算ロジック | 計算式を変えたい/新しい占術を追加したい時 |
| `deeper.js` | モーダル内の詳細・プレミアム解釈 | 課金後の体験を厚くしたい時 |
| `ui.js` | DOM 描画・イベント・モーダル | レイアウトや UI を変えたい時 |
| `styles.css` | デザイン全般(CSS 変数で配色管理) | 配色・タイポ・アニメーションを変えたい時 |

---

## 体系の一覧（19 data-key）

| キー(data-key) | 体系 | 入力 |
| --- | --- | --- |
| `lifepath` | 数秘術 ライフパスナンバー | 生年月日 |
| `personalYear` | 個人年(数秘術) | 生年月日+現在年 |
| `expression` | 名前の数秘 | 名前 |
| `sun` | 西洋占星術 太陽星座 | 月日 |
| `moonTrait` | 月の傾向(誕生時月相から) | 生年月日 |
| `zodiac` | 十二支 | 生年 |
| `sixty` | 年柱(六十干支) | 生年 |
| `kyusei` | 本命星(九星気学) | 生年月日(立春補正あり) |
| `gogyou` | 五行 | 生年 |
| `animal` | 動物占い 12 分類 | 生年月日 |
| `celtic` | ケルト樹木占い | 月日 |
| `maya` | マヤ暦 KIN(紋章+銀河の音) | 生年月日 |
| `tarotBirth` | タロット バースカード | 生年月日 |
| `tarotDaily` | 今日のカード | 名前+今日の日付 |
| `birthstone` | 誕生石 | 月 |
| `birthflower` | 誕生花 | 月 |
| `biorhythm` | バイオリズム(4 波) | 生年月日+今日 |
| `moon` | 今夜の月相 | 今日 |
| `lifeStagePrev` / `lifeStageNext` | 人生の節目 | 生年月日+現在年齢 |

---

## 主要機能

### 1. 文章サマリー(冒頭)

`generateSummary(name, results)`(`ui.js`)が、複数体系の結果を散文に編んで表示する。ライフパス・太陽星座・十二支・九星・動物占い・ケルト樹・マヤ KIN・タロットを 1 つの文章にまとめ、最後にバイオリズムの今日のフェーズと次の人生の節目までの年数を添える。

### 2. クリックで深掘り(モーダル)

全カードに `data-key="..."` が付与され、クリックで `openModal(key)` が呼ばれる。
`buildDeep(key, ctx)` が `{ title, value, label, intro, free[], premium[] }` を返し、モーダルが描画される。

### 3. プレミアム課金導線

- 各モーダルにロックされたプレミアムセクションが表示される(`filter: blur(5px)` + オーバーレイ)
- 「プレミアム体験(デモ)」トグルを ON にすると、すべてのモーダルでぼかしが解除される(投資家デモ・社内検証用)
- CTA ボタン押下時の処理は現在 `alert()`。実装する時は `ui.js` の `renderModalBody()` の `onclick` を Stripe / RevenueCat 等に差し替え

---

## 新しい占術を追加する

たとえば「血液型占い」を追加するなら:

1. **`src/content.js`** に辞書を追加
    ```js
    export const BLOOD_TYPES = {
      A: { label: '誠実型', desc: '...' },
      B: { label: '自由型', desc: '...' },
      // ...
    };
    ```

2. **`src/calculations.js`** に計算関数を追加
    ```js
    import { BLOOD_TYPES } from './content.js';
    export function bloodType(typeLetter) {
      return BLOOD_TYPES[typeLetter] ?? null;
    }
    ```

3. **`index.html`** に入力欄を追加(または既存フォームを拡張)

4. **`src/ui.js`** の `render()` でカードを描画
    ```js
    ${card('blood', '血液型占い', bt.label, '...', bt.desc)}
    ```

5. **`src/deeper.js`** の `buildDeep()` switch に case を追加
    ```js
    case 'blood': return {
      title: '血液型占い',
      value: bt.label,
      label: '...',
      intro: '...',
      free: [...],
      premium: premiumGeneric('血液型', bt.label)
    };
    ```

---

## 将来の拡張ロードマップ

- **AI 生成の個別文章**:プレミアム解放後の本文を、その場で LLM 生成(数秘・星座・名前等を文脈に入れる)
- **決済連携**:Stripe Checkout / Subscriptions または RevenueCat
- **アカウント・データ永続化**:Supabase で家族や友人を保存、横断比較ダッシュボード
- **相性診断モード**:2 人分の入力で相性を多軸スコア化
- **時系列カレンダー**:バイオリズム+月の満ち欠け+九星日盤を未来日付で並べる
- **PDF 出力**:自分専用「取扱説明書」として書き出し
- **OG 画像生成**:結果を「あなたの宇宙 ID」として SNS 共有できる画像
- **モバイル PWA 化**:Service Worker + manifest

---

## 計算の正確性について

計算ロジックは「広く流布している式」を採用しているが、流派によって異なる結果になる占術もある(特に九星気学・動物占い・マヤ暦)。

- **九星気学**:立春(2月4日)で切り替えるシンプル版。実際には毎年の立春時刻まで考慮する流派もある
- **動物占い(個性心理学)**:1925-04-23 を起点とした 60 日サイクルから 12 動物に分類する簡易版。公式の 60 分類とは差異あり
- **マヤ暦 KIN**:ホセ・アグエイアスの 13 月の暦に基づき、2013-07-26 = KIN 33 を起点としている
- **月星座**:出生時刻が必要なため、現在は「月相からの傾向」のみ提示

本格的なサービス化を目指す場合は、信頼できる計算ライブラリ(`astronomia`、`SwissEph` 等)への置き換えを検討する。

---

## 元の単一 HTML 版

`../cosmic_id.html`(プロジェクトの 1 階層上)に元の単一 HTML 版が残っている。ビルド不要で動くスタンドアロン版として参考に。

---

## ライセンス

MIT(プロトタイプにつき暫定)
