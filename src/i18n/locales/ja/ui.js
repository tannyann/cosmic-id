/** 日本語 UI 文言 */
export const ui = {
  meta: {
    title: 'COSMIC ID — 個人統合占断',
    description: '生年月日と名前から、数秘・占星・九星・動物占いなど複数体系を横断解読。恋愛診断（12アーケタイプ）と相性診断付きの COSMIC ID。',
    ogTitle: 'COSMIC ID — 個人統合占断',
    ogDescription: '十九の物語に加え、恋愛タイプと相性も読み解く。複数の占術をひとつに。',
    label: '日本語'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: '十九の物語に、恋愛診断と相性診断を添えて'
  },
  form: {
    nameLabel: 'お名前',
    namePlaceholder: '例: 山田 太郎 / ジョン・スミス',
    nameHint: '漢字・かなでお名前を。外国の方も当て字で入力できます。',
    nameRomanLabel: 'ローマ字（任意）',
    nameRomanPlaceholder: '例: YAMADA TARO / JOHN SMITH',
    nameRomanHint: '国際式の数秘（A–Z）用。パスポート名や母国語のローマ字表記を入れると、表示名とは別の響きも読めます。',
    privacyNote: '入力情報は端末内でのみ処理され、サーバーには送信されません。',
    birthLabel: '生年月日',
    submit: '読み解く',
    freeBadge: '基本はずっと無料',
    premiumDemo: '深層解釈をプレビュー（デモ）',
    premiumDemoTitle: '深層解釈のプレビュー（通常は無料のまま利用できます）'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'すべての解釈は一つの可能性。あなたの物語はあなたが書く。'
  },
  lang: { label: '言語' },
  sections: {
    numerology: ['数秘術', 'Numerology'],
    western: ['西洋占星術', 'Western Astrology'],
    eastern: ['東洋の星と命', 'Eastern'],
    characters: ['キャラクター占い', 'Characters'],
    sacred: ['マヤ暦・タロット', 'Sacred Symbols'],
    nature: ['自然のシンボル', 'Nature'],
    cycles: ['今日の波', 'Cycles'],
    lifeMap: ['人生の地図', 'Life Map']
  },
  cards: {
    lifepath: 'ライフパスナンバー',
    personalYear: '今年の個人年',
    expression: 'お名前の数字',
    expressionLabel: '名前から響く波動',
    sun: '太陽星座',
    moonTrait: '月の傾向',
    moonTraitLabel: '誕生時の月の位相から',
    moonTraitNote: '正確な月星座は出生時刻が必要です',
    zodiac: '十二支',
    sixty: '年柱(六十干支)',
    kyusei: '本命星(九星気学)',
    gogyou: '五行',
    animal: '動物占い',
    celtic: 'ケルト樹木占い',
    maya: 'マヤ暦 KIN',
    tarotBirth: 'タロット バースカード',
    tarotDaily: '今日のカード',
    birthstone: '誕生石',
    birthflower: '誕生花',
    biorhythm: 'バイオリズム',
    moonTonight: '今夜の月',
    lifeStagePrev: '直近の節目',
    lifeStageNext: '次の節目'
  },
  fmt: {
    yearYou: (y) => `${y}年のあなた`,
    bornYearZodiac: (char) => `${char}年生まれ`,
    sixtyDesc: (el) => `60年に一度しか巡らない刻印。${el}の性質を帯びる。`,
    kyuseiStar: (el) => `${el}の星`,
    gogyouLabel: '生まれ年の元素',
    animalNum: (n) => `個性番号 ${n}/60`,
    animalFallback: '独自の個性を持つ存在。',
    celticLabel: '13本の木のうちの一本',
    mayaDesc: '260日の聖なる暦の中の、あなたの一日。紋章は本質、銀河の音はリズム。',
    tarotMajor: (n) => `大アルカナ ${n}`,
    tarotDailyFor: (y, m, d) => `${y}/${m}/${d} のあなたへ`,
    monthStone: (m) => `${m}月の石`,
    monthFlower: (m) => `${m}月の花`,
    birthflowerDesc: '誕生月の象徴。あなたの周りに置くと心が整う。',
    biorhythmDays: (days) => `バイオリズム — 出生から ${days.toLocaleString('ja-JP')} 日目`,
    moonPhasePct: (pct) => `月相 ${pct}% ・ 月の満ち欠けはすべての生命に影響する。今夜の月はあなたに何を告げる?`,
    bornOn: (y, m, d) => `${y}年 ${m}月 ${d}日 生まれ`,
    ageNow: (age) => `現在 <strong>${age}</strong> 歳`,
    nextMilestone: (age, name) => `次の人生の節目:<strong>${age}歳 — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `次の人生の節目は <strong>${age}歳の${name}</strong>。あと <strong>${years}年</strong> 先です。`,
    elementOf: (el) => `${el}のエレメント`,
    ageYears: (n) => `${n}歳`,
    cardMore: '深く読み解く',
    cardMoreAria: '。詳しく読む',
    cardAria: (system, value) => `${system}、${value}`,
    summaryLabel: 'あなたの物語',
    summaryLead: (name, label) =>
      `${name}さんは、<strong>${label}</strong>の魂を持って生まれた人です。`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `西洋占星術では <strong>${sun}</strong>(${sunEl}のエレメント)を太陽に宿し、` +
      ` 東洋の暦では <strong>${cz}</strong>、九星では <strong>${ks}</strong> のもと、` +
      ` <strong>${gy}</strong> の元素を芯に持っています。` +
      ` 動物占いでは <strong>${an}</strong>、ケルトの森ではあなたの守護樹は <strong>${ct}</strong>。` +
      ` マヤの聖暦では <strong>KIN ${my.kin} ・ ${my.tone}${my.seal}</strong>、` +
      ` タロットの原型は <strong>${tb}</strong> です。`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `${year}年の今、あなたは <strong>個人年 ${py}</strong> の波にいます。` +
      ` バイオリズム的には ${bioState}。` +
      ` ${mt}としての気質を背負いながら、今夜は <strong>${mp}</strong> があなたを照らします。` +
      ` ${nextHtml}`,
    summaryHint: '↓ 各カードをタップすると、より深い解釈が開きます',
    bioUp: '<strong>上昇のフェーズ</strong>(行動と発信に向く)',
    bioDown: '<strong>内省のフェーズ</strong>(休息と整理に向く)',
    bioBalanced: '<strong>バランスの取れたフェーズ</strong>',
    personalYearWave: (year) => `${year}年の個人年`,
    expressionValueDual: (n, l) => `${n} · ${l}`,
    expressionLabelDual: '日本表記 / ローマ字',
    expressionLabelNative: '日本表記の響き',
    expressionDescDual: (n, l, nativeDesc, latinDesc) =>
      `<p class="expression-line"><strong>${n}</strong>（字形の試し読み）— ${nativeDesc}</p>` +
      `<p class="expression-line"><strong>${l}</strong>（ピタゴラス式 A–Z）— ${latinDesc}</p>` +
      '<div class="note">字形換算は古典数秘の公式とは別系統です。ローマ字は一般的な英字名数秘に近い読み方です。</div>',
    expressionDescNative: (desc, hint) =>
      `${desc}<div class="note">日本語・漢字は Unicode の字形から簡易換算しています。${hint}</div>`,
    expressionHintAddRoman: 'ローマ字欄にヘボン式などを入れると、国際式の名前数も並べて読めます。',
    expressionLatinInvalid: 'ローマ字欄に A–Z の英字がないため、国際式は表示されませんでした。',
    expressionLabelInferred: '日本表記 / かなから推定',
    expressionDescInferred: (n, l, nativeDesc, latinDesc, latinName) =>
      `<p class="expression-line"><strong>${n}</strong>（字形の試し読み）— ${nativeDesc}</p>` +
      `<p class="expression-line"><strong>${l}</strong>（かな→${latinName} の推定）— ${latinDesc}</p>` +
      '<div class="note">ローマ字未入力のため、かな部分をヘボン式に換算して国際式を推定しました。パスポート表記がある場合はローマ字欄に入れるとより正確です。</div>'
  },
  bio: { physical: '身体', emotional: '感情', intellectual: '知性', intuitive: '直感' },
  modal: {
    deepRead: '深く読み解く',
    premiumBadge: 'さらに深い解釈（Premium・任意）',
    premiumPitch: 'さらに深く読む',
    premiumSub: (line0, line1, chapters) =>
      `${line0}。${line1}（全 <strong>${chapters} 章</strong>）。`,
    premiumCta: 'Premium の内容を見る',
    premiumUnlockPitch: '深層を解き放つ',
    premiumUnlockSub: (n) =>
      `マスタークラスのリーディングは ${n} つのセクションに広がります。10年運気、相性、職業適性、魂の課題、より精密な計算まで。`,
    close: '閉じる'
  },
  toast: {
    premiumDemo: 'デモでは「深層解釈をプレビュー」をONにすると Premium の中身が見られます'
  },
  share: {
    panelTitle: 'シェアカード',
    panelDesc: '十九の物語を、画像やテキストで共有できます',
    panelSteps: '① 画像を保存 → ② X や LINE に投稿。あなた専用のカードが拡散の「顔」になります。',
    previewHint: 'タップで拡大',
    previewAria: 'シェアカードを拡大表示',
    previewAlt: (name) => `${name}さんの COSMIC ID シェアカード`,
    save: '画像を保存',
    shareNative: '共有…',
    copy: 'テキストをコピー',
    loading: '生成中…',
    loadFail: '生成に失敗',
    saved: '画像を保存しました',
    copied: 'テキストをコピーしました',
    copyFail: 'コピーできませんでした',
    shareFail: '共有できませんでした',
    nativeUnsupported: 'この端末では画像共有に未対応です。保存をお試しください',
    imageFail: 'シェア画像の生成に失敗しました',
    modalAlt: 'シェアカードのプレビュー',
    tweetStories: (name) => `${name}さんの十九の物語`,
    tweetFooter: 'すべての解釈は一つの可能性。',
    tonightMoon: (name) => `今夜は${name}`,
    canvasPersonal: 'Personal Cosmology',
    canvasFooter: 'すべての解釈は一つの可能性。あなたの物語はあなたが書く。',
    statPersonalYear: (year, py) => `${year}年の個人年 ${py}`,
    statBirthCard: 'バースカード',
    nameSuffix: 'さん',
    bornLine: (birth, age) => `${birth} 生まれ ・ ${age} 歳`,
    lifePathLine: (lp, label) => `ライフパス ${lp} — ${label}`,
    stats: {
      sun: '太陽星座',
      zodiac: '十二支',
      kyusei: '九星気学',
      animal: '動物占い',
      tarot: 'タロット',
      moon: '今夜の月'
    },
    birthDate: (y, m, d) => `${y}年${m}月${d}日`,
    tweetHeader: '✦ COSMIC ID ✦',
    tweetLifePath: (lp, label) => `ライフパス ${lp}・${label}`,
    tweetTarot: (name) => `タロット: ${name}`,
    tweetPersonalYear: (year, py) => `${year}年 個人年 ${py}`,
    tweetSep: ' ｜ '
  },
  love: {
    eyebrow: 'Love archetype',
    title: '恋愛診断',
    phaseLabel: '今の恋愛フェーズ',
    sweetTitle: '愛し方のスイートスポット',
    careTitle: '心に留めておきたいこと',
    matchesTitle: '響き合いやすいタイプ',
    actionLabel: '今夜できる、出会いを呼ぶ小さなこと',
    cta: '気になる人がいるなら、相性診断へ',
    footnote: 'この結果は一つの可能性です。あなたの恋の物語は、あなたの手で書かれていきます。',
    shareTitle: '恋愛診断をシェア',
    shareDesc: '画像を保存して、X や LINE に貼り付けてください。',
    sharePreviewAria: 'シェアカードのプレビュー',
    shareAlt: (name) => `${name} の恋愛タイプカード`,
    shareSaved: '画像を保存しました',
    shareCopied: 'テキストをコピーしました',
    shareCopyFail: 'コピーに失敗しました',
    shareFail: 'シェアに失敗しました'
  },
  compat: {
    eyebrow: 'Compatibility',
    title: '二人の相性を読み解く',
    lead: 'もう一人の名前と生年月日を入力すると、5 つの軸から相性を映し出します。',
    leadSub: '恋人・家族・友人・推し — 誰とでも。',
    nameLabel: 'お相手のお名前',
    birthLabel: 'お相手の生年月日',
    namePlaceholder: '例: 山田 花子',
    submit: '相性を読み解く',
    disclaimer: '占いは可能性の一つ。実際の関係は、あなたと相手の物語が決めていきます。',
    resultEyebrow: 'Two stories woven',
    overallLabel: '総合',
    footnote: '数値は一つの目安。実際の縁は、二人が日々を積み重ねるなかで形を変えていきます。',
    radarAria: '5軸の相性レーダーチャート',
    lifePathValue: (n) => `ライフパス ${n}`
  },
  premiumShowcase: {
    roadmapSummary: 'Premium の開発予定を見る',
    note: 'フォーム上の「深層解釈をプレビュー（デモ）」で、深層解釈のプレビューができます。通常は無料のままお使いいただけます。',
    optionalEyebrow: 'Optional · Premium',
    freeIncludesTitle: '無料でできること',
    ariaLabel: 'プレミアムプラン'
  }
};
