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
    birthMonthLabel: '月',
    birthDayLabel: '日',
    birthYearLabel: '年',
    birthMonthPlaceholder: '月',
    birthDayPlaceholder: '日',
    birthYearPlaceholder: '年',
    submit: '読み解く',
    freeBadge: 'すべて無料',
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
    lifeStageNext: '次の節目',
    timeline: '10年タイムライン',
    timelineLabel: 'これからの10年',
    timelineDesc: '個人年の波・実りの年・人生の節目を、年ごとにタップして読み解けます。',
    unified: '統合マスターリーディング',
    unifiedDesc: '十九の体系を一本の物語に。本質・恋愛・仕事・ラッキーコンパスまで。'
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
    premiumBadge: '拡張リーディング（無料）',
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
  timeline: {
    eyebrow: 'インタラクティブ・リーディング',
    title: '10年タイムライン',
    subtitle: 'これからの10年の、あなたの個人年リズム',
    intro: '一本一本の棒が個人年(1〜9)です。年をタップするとテーマが開き、✦は人生の節目を表します。',
    ageLabel: '年齢',
    pyLabel: '個人年',
    yearLabel: '年',
    milestoneLabel: '人生の節目',
    thisYear: '今年',
    milestoneHere: '節目の年',
    ageAt: (age) => `${age}歳になる年`,
    pyHeading: (py) => `個人年 ${py} ・ ${({
      1: '始まり', 2: '忍耐と絆', 3: '表現と喜び',
      4: '土台づくり', 5: '変化と自由', 6: '責任と愛',
      7: '内省', 8: '収穫', 9: '完成と手放し'
    })[py] ?? ''}`
  },
  master: {
    title: 'マスターリーディング',
    intro: '深層チャプターを誰でも開けます。タップして読み進めてください。',
    expandAll: 'すべて開く',
    collapseAll: 'すべて閉じる'
  },
  extended: {
    moon: {
      title: '12ヶ月の月カレンダー',
      intro: 'これからの新月・満月——日付をタップすると簡単なリチュアルが開きます。✦は誕生時の月相との共鳴を示します。',
      tapHint: '新月または満月の日付をタップしてください。',
      newMoon: '新月',
      fullMoon: '満月',
      resonance: 'この位相はあなたの誕生月相と共鳴しやすい——個人的な月の節目かもしれません。',
      ritualNew: '紙に一つだけ願いや意図を書く。種をまく——文字通りでも比喩でも。29日間見守れる小さな始まりを。',
      ritualFull: '感謝していることを三つ唱える。もう合わない習慣や物語を一つ手放す。月光は鏡であり、裁きではありません。'
    },
    biorhythm: {
      title: '90日バイオリズム予測',
      intro: '出生日からの四つの波——日をタップするとリズムが読めます。点はゼロを跨ぐクリティカルデーです。',
      legend: 'ティールの点＝クリティカルデー · 金枠＝今日',
      today: '今日',
      critical: 'クリティカルデー',
      rising: '上昇波',
      falling: '下降波',
      neutral: 'バランス付近',
      waves: {
        physical: '身体',
        emotional: '感情',
        intellectual: '知性',
        intuitive: '直感'
      },
      actionHint: (v) => v > 0.3
        ? '行動・運動・外への表現に向きやすい日かもしれません。'
        : v < -0.3
          ? '休息・守り・静かな固めに向きやすい日かもしれません。'
          : '過渡期——ピークでも谷でもない。ゆるやかに動く日です。'
    },
    unified: {
      eyebrow: '拡張リーディング',
      title: '統合マスターリーディング',
      subtitle: '十九の物語を、一本に編む',
      intro: '横断的な統合リーディング——断定ではなく、あなたのペースで読める地図です。',
      expandAll: 'すべて開く',
      collapseAll: 'すべて閉じる',
      footnote: 'ここにあるのは可能性のひとつ。意味を選ぶのは、いまでもあなたです。',
      chapterEssence: 'あなたの核となる本質',
      chapterYear: '今年のフォーカス',
      chapterLove: '愛とつながり',
      chapterWork: '仕事と表現',
      chapterShadow: '向き合うシャドウ',
      chapterLucky: 'ラッキーコンパス',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name}さん——<strong>${lpLabel}</strong>として、人生の主題はこう読めるとされます：${lpDesc}</p>
         <p>太陽<strong>${sun}</strong>、<strong>${zodiac}</strong>、<strong>${kyusei}</strong>は、同じ魂を別の言語で語る三つの音——体系ごとに違う響きが重なります。</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p><strong>${year}年</strong>の個人年は <strong>${py}</strong>。${pyMeaning}</p>
         <p>今年の波に逆らうより乗るとき、そのテンポをいちばん感じやすい季節かもしれません。</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>太陽の<strong>${sunEl}</strong>の温かさと<strong>${animal}</strong>のアーキタイプ——つながりは、やさしさと自立の両方を大切にすると流れやすいとされます。</p>
         <p>ライフパス <strong>${lp}</strong> は、与え方・受け取り方の繰り返しテーマとして現れることがあります。</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p><strong>${lpLabel}</strong>のエネルギーは、仕事において「生産」より「目的」として表れやすいとされます。生年の<strong>${gogyou}</strong>は、積み上げ方——着実・大胆・関係性——のヒントになることがあります。</p>
         ${exprNum ? `<p>名前の波動 <strong>${exprNum}</strong> が、世の中にどう見えるかにもう一層加わります。</p>` : ''}`,
      shadowBody: (lp) => {
        const hints = {
          1: 'リーダーシップがコントロールに傾く孤立',
          2: '平和のために自分を失うこと',
          3: '深さを避けて表面に留まること',
          4: '安全が脅かされるときの硬直',
          5: 'コミットを避ける落ち着きのなさ',
          6: 'ケアがコントロールになること',
          7: '世界がうるさすぎるときの退避',
          8: '力が足りないときの強さ',
          9: '身体を追い越す理想'
        };
        return `<p>どんな才能にも影があります。ライフパス <strong>${lp}</strong> の成長の縁は：${hints[lp] || '強みが行き過ぎる瞬間に気づくこと'}。</p>
                <p>影に名前をつけることは敗北ではなく、バランスへの第一歩かもしれません。</p>`;
      },
      luckyBody: (colors, numbers, days, hint) =>
        `<div class="lucky-compass">
           <div class="lucky-row"><span class="lucky-label">カラー</span>
             ${colors.map(c => `<span class="lucky-chip">${c}</span>`).join('')}</div>
           <div class="lucky-row"><span class="lucky-label">ナンバー</span>
             ${numbers.map(n => `<span class="lucky-chip">${n}</span>`).join('')}</div>
           <div class="lucky-row"><span class="lucky-label">曜日</span>
             ${days.map(d => `<span class="lucky-chip">${d}</span>`).join('')}</div>
           <p class="lucky-hint">${hint}</p>
         </div>`
    }
  },
  deep: {
    scrollMoon: '月カレンダーへジャンプ ↑',
    scrollBio: '90日予測へジャンプ ↑',
    scrollTimeline: '10年タイムラインへジャンプ ↑',
    prompts: {
      forChapter: (cardKey, index) => {
        const generic = [
          { q: 'これは何に気づかせようとしている？', a: 'チャプターのテーマを一分だけ味わってみて。最初に浮かぶ感覚や記憶が、あなたへのヒントかもしれません——断定ではありません。' },
          { q: '今週の小さな一歩は？', a: '今日終えられるくらい小さな行動を一つ。拡張リーディングは、宿題ではなくやさしい実験として使うのがおすすめです。' }
        ];
        if (index >= 2) return generic;
        return index === 1 ? [generic[0]] : generic;
      }
    },
    personalYear: {
      thisMonth: '今月',
      personalMonth: (n) => `個人月 ${n}`,
      tagAction: '動く',
      tagWait: '育む',
      tagWatch: '注意',
      ritualHint: '注意の月は、決断をゆるめ、休息を増やし、地に足をつける儀式が助けになることがあります。',
      noWatch: '今年は特に注意の個人月が少ない——比較的安定したリズムです。',
      keywords: (py, lp) => {
        const base = {
          1: ['種', '勇気', '始まり'],
          2: ['忍耐', '絆', '傾聴'],
          3: ['喜び', '表現', 'つながり'],
          4: ['構築', '秩序', '根'],
          5: ['変化', '自由', '探索'],
          6: ['愛', '家庭', 'ケア'],
          7: ['静けさ', '学び', '内面'],
          8: ['収穫', '力', '受け取り'],
          9: ['手放し', '完成', '赦し']
        }[py] || ['流れ', '信頼', '開く'];
        return [...base.slice(0, 2), `パス${lp}`];
      },
      encounters: (py, el) => {
        const types = {
          fire: ['火花', '師', '盟友'],
          water: ['癒し手', '鏡', '導き手'],
          earth: ['築き手', '錨', '師'],
          air: ['使者', '協働者', 'アイデアの運び手'],
          wood: ['育て手', '伴走者', '道標'],
          metal: ['研ぎ手', '挑戦者', '長老']
        }[el] || ['盟友', '鏡', '導き手'];
        return types.map((type) => ({
          type,
          hint: `個人年 ${py} のテーマが動いているときに現れやすい`,
          detail: `「${type}」と感じる縁は、${el}のエレメントの季節の反映かもしれません——今年の波を無理なく体現してくれる存在として注目してみてください。`
        }));
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) =>
        `ライフパス ${lp} × 個人年 ${py}：${pyMeaning}`,
      yearWaveHint: '10年全体は「人生の地図」の10年タイムラインカードでも読めます。',
      compatBands: (lp) => {
        const rd = (n) => { let x = n; while (x > 9) x = String(x).split('').reduce((s, c) => s + +c, 0); return x; };
        return [
          { kind: 'resonate', label: '共鳴しやすい', text: `パス ${rd(lp + 1)} や ${rd(lp + 2)} の人とは、説明が少なくてもリズムが合いやすいとされます。` },
          { kind: 'grow', label: '成長を促す', text: `パス ${rd(lp + 4)} や ${rd(lp + 5)} は摩擦を連れてくることがあります——好奇心があれば拡張のきっかけに。` },
          { kind: 'care', label: '丁寧に', text: `パス ${rd(lp + 8)} のエネルギーは強く感じられることも——善悪ではなく、境界線を意識するサインかもしれません。` }
        ];
      },
      careerPillars: (lp) => {
        const rd = (n) => { let x = n; while (x > 9) x = String(x).split('').reduce((s, c) => s + +c, 0); return x; };
        return [
          { title: '自然な適性', text: `ライフパス ${lp} の才能が無理なく光る役割——野心だけでなく「楽」とも重ねてみてください。` },
          { title: 'ストレッチ', text: `パス ${rd(lp + 3)} のエネルギーを借りた副業や学びが、隠れたスキルを開くことがあります。` },
          { title: '休息の形', text: `回復の仕方も人それぞれ。パス ${lp} には特定の「休み方」が持続可能性を支えることがあります。` }
        ];
      },
      soulPrompts: (lp) => [
        { q: '人生で繰り返していることは？', a: `ライフパス ${lp} は、違う衣装で同じレッスンを持ち込むことがあります——パターンに名前をつけるだけでも十分です。` },
        { q: '「十分」とはどんな状態？', a: '魂の課題は野心の中に隠れがち。この季節の「十分」を定義してみてください——永遠の答えでなくて大丈夫です。' }
      ],
      figures: (lp) => {
        const figs = {
          1: [{ name: '開拓者たち', note: '真似るためではなく、勇気の選択に注目。' }],
          2: [{ name: '橋渡し役', note: '主役にならずに人をつなぐ人が鏡になることがあります。' }],
          3: [{ name: '表現者', note: '喜びを vocation にする生き方。' }],
          4: [{ name: '職人', note: '忍耐が形になる人びと。' }],
          5: [{ name: '探検者', note: '自由と責任の両立。' }],
          6: [{ name: '守り手', note: '愛が窒息しないケア。' }],
          7: [{ name: '探求者', note: '快適さより真実。' }],
          8: [{ name: '遺産の築き手', note: '力を循環させる人。' }],
          9: [{ name: '人道主義者', note: '完成を贈りとして生きる。' }],
          11: [{ name: '光の運び手', note: '敏感さを奉仕に。' }],
          22: [{ name: 'マスタービルダー', note: '夢に土台を。' }],
          33: [{ name: '愛の教師', note: '無条件を完璧ではなく実践として。' }]
        };
        return figs[lp] || figs[9];
      }
    },
    sun: {
      elementMap: {
        fire: { direction: '南 · 火', season: '夏の熱はあなたの輝きを映すことがあります——エネルギーが上がるときに動いてみて。', ritual: 'キャンドル、日光、朝の運動で「始める」ことを祝う。' },
        earth: { direction: '中央 · 土', season: '収穫の季節が地に足をつける助けになることがあります——身体が安定しているときに築く。', ritual: '素足で土に触れる、ゆっくり料理、一つ形にするタスク。' },
        air: { direction: '東 · 風', season: '春の風はアイデアを運ぶことがあります——呼吸が軽いときに話し、つながる。', ritual: '三行日記、ヘッドホンなしの散歩、正直な一言を送る。' },
        water: { direction: '西 · 水', season: '冬の深さは内側を呼ぶことがあります——決める前に感じる。', ritual: '温かい風呂、月を見る、涙を物語なしで歓迎する。' },
        wood: { direction: '東 · 木', season: '成長の季節は種まきに向きます——小さく始め、よく世話する。', ritual: '緑の植物、29日続く小さな習慣。' },
        metal: { direction: '西 · 金', season: '秋の澄みわたりは整える助けになります——鈍くなったものを手放す。', ritual: '引き出し一つを空に、白い服、吐く息を長く。' }
      }
    },
    kyusei: {
      cyclePhase: (n) => ({
        1: 'サイクル1年目：本命星のテーマをまく——新しい方向の芽吹き。',
        2: '2年目：忍耐と協調——まいたものを育てる。',
        3: '3年目：表現と可視性——星を外に出す。',
        4: '4年目：土台——着実な仕事、雑音を減らす。',
        5: '5年目：変化と移動——旅や転換の呼び声。',
        6: '6年目：責任と家庭——関係が深まる。',
        7: '7年目：内省——学び、休息、スピリチュアルな手入れ。',
        8: '8年目：収穫——成果と認知が表に出やすい。',
        9: '9年目：完成——手放し、次の9年へ備える。'
      })[n] || '9年周期のひとつの地点です。'
    },
    tarot: {
      light: '光の顔',
      shadow: '影の顔',
      lightText: (name) => `${name} の正位置：魂のギフトがいちばん澄んで現れる向き——カードの最高の表現を体現する勇気。`,
      shadowText: (name) => `${name} の逆位置：罰ではなく統合の依頼——どこで重く感じますか？その重さは、変容がノックしているサインかもしれません。`
    },
    gogyou: {
      hint: '生まれ年には五行のうち一つの気が宿るとされます——タップして味わいを探ってみて。'
    },
    maya: {
      kin: 'KIN',
      tone: '銀河の音',
      seal: '太陽の紋章'
    },
    zodiac: {
      hint: '十二支をタップすると、伝統的な性格のイメージが読めます。'
    }
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
    note: 'すべての機能が無料です。各カードから深層チャプターをお読みください。',
    optionalEyebrow: '無料で含まれる',
    freeIncludesTitle: '無料でできること',
    allFreeTitle: 'これも無料 — 登録不要',
    allFreeNote: 'このページの機能はすべて無料です。解釈は可能性の一つ。物語はあなたが書きます。',
    ariaLabel: '含まれる機能'
  },
  gloss: {
    stripTitle: '用語のヒント — カードの ? をタップ',
    tipAria: (term) => `「${term}」とは？`
  }
};
