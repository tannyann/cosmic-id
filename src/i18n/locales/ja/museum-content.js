/**
 * Feature 13: Origin Story Museum の展示コンテンツ(日本語)。
 * 各展示は 1500〜2000 字を想定。3 展示ぶんサンプル。
 * 残り 16 は次のフェーズで書く。
 */

export const MUSEUM_EXHIBITS = [
  {
    id: 'numerology',
    title: '数秘術',
    subtitle: 'Numerology',
    era: '紀元前 6 世紀 —',
    heroSymbol: '∴',
    origin: {
      title: '起源',
      body: '紀元前 6 世紀のギリシア、南イタリアのクロトンで、ピタゴラス学派は「万物は数」だと説いた。' +
        '幾何学者・音楽理論家として知られるピタゴラス(前 570 頃-495 頃)は、竪琴の弦の長さと音高の比率が単純な整数で表せることを発見した。' +
        'このことから、数こそが宇宙の秩序の根本原理であり、魂や性格もまた数と対応するはずだ、という思想が生まれた。'
    },
    evolution: {
      title: '進化',
      body: 'ピタゴラス学派の教義は口伝で守られ、書物としては断片的にしか残らない。中世に入ると、ユダヤ神秘主義カバラが数と文字の対応(gematria)を体系化する。' +
        'ヘブライ文字の各文字に数値を割り当て、単語の合計値から霊的意味を読み解く手法は、後の数秘術に決定的な影響を与えた。' +
        '20 世紀初頭のアメリカ、Mrs. L. Dow Balliett は 1901 年に「The Philosophy of Numbers」を発表し、現代数秘術の基礎を築いた。' +
        '1970 年代、Faith Javane と Dusty Bunker が「Life Path Number」概念を英米で普及させ、今日の姿になった。'
    },
    modern: {
      title: '現代における位置',
      body: '心理学的な検証研究では、Life Path や Expression Number と性格特性の相関は統計的に有意でない結果が続いている(Wagerman & Funder 2007 等)。' +
        'しかし数秘術は、予測装置としてではなく、自己反省の枠組みとして西洋圏で広く実践されている。' +
        '「1 は始まりの数」「9 は完成の数」といった象徴体系は、目標設定や年次テーマの言語として実用性を持つ。'
    },
    critique: {
      title: '主な批判',
      body: '批判の中心は「数と性格の対応に因果関係の説明がない」という点である。' +
        'なぜ 1990-05-15 生まれの人が「表現の探求者」になるのか、その因果メカニズムを提示できていない。' +
        'また、Life Path の計算方式は流派によって異なり(全桁足す vs 段階的還元)、同じ人でも異なる結果になりうる恣意性がある。'
    },
    culturalPresence: {
      title: '文化の中の数秘',
      body: 'ロサンゼルス在住の Elvis Presley は「8」を宿命の数として大切にし、多くのグラフィックデザインに用いた。' +
        'Jim Carrey は「23」を偏愛し、同名の映画も撮った。' +
        '西洋文学では Dan Brown の「ダ・ヴィンチ・コード」でフィボナッチ数列とカバラが重要な仕掛けとして登場する。' +
        '日本では「四」を忌み数として避ける文化があり、これも数秘的思考の一部と言える。'
    },
    references: [
      { title: 'Numerology and The Divine Triangle', author: 'Faith Javane & Dusty Bunker', year: 1979 },
      { title: 'The Complete Book of Numerology', author: 'David A. Phillips', year: 2005 },
      { title: 'Blood and Mistletoe: The History of the Druids in Britain', author: 'Ronald Hutton', year: 2009 }
    ]
  },
  {
    id: 'western-astrology',
    title: '西洋占星術',
    subtitle: 'Western Astrology',
    era: '紀元前 2000 年 —',
    heroSymbol: '☉',
    origin: {
      title: '起源',
      body: '紀元前 2 千年紀のバビロニア(現イラク)で、天文司祭たちは星の動きを粘土板に記録した。' +
        '彼らは天体の運行が地上の出来事に対応すると考え、王の運命を占うために天体観測を用いた。' +
        '12 の星座区分(黄道十二宮)は、紀元前 1000 年頃までにバビロニアで確立された。' +
        '当時の占星術は個人ではなく、王国と気候のためのものだった。'
    },
    evolution: {
      title: '進化',
      body: 'ヘレニズム時代(紀元前 4 世紀-1 世紀)、アレキサンドリアで占星術は個人の性格・運命を語る形に変質した。' +
        '2 世紀の科学者クラウディオス・プトレマイオスは「テトラビブロス(四つの書)」で当時の占星術理論を総合し、後の千年にわたって権威となった。' +
        '中世イスラム世界で天文学と占星術は密接に発展し、それがヨーロッパに伝わってケプラーやガリレオも占星術に取り組んだ。' +
        '17 世紀の科学革命以降、占星術は科学から分離し、20 世紀に入って新聞コラム占いによって大衆化した。' +
        '20 世紀後半、Carl Jung の弟子だった Liz Greene らが「心理占星術」を提唱し、元型的心理学と結びつけて再解釈する動きが生まれた。'
    },
    modern: {
      title: '現代における位置',
      body: '実証的な検証では、Shawn Carlson の Nature 論文(1985)で二重盲検テストされ、占星術師の的中率はチャンスレベルだった。' +
        'その後の大規模研究も否定的な結果が続いている。' +
        'しかし文化的存在感は絶大で、Co-Star や Sanctuary などのアプリはミレニアル世代を中心に数千万ダウンロードを記録した。' +
        '「Mercury retrograde だから」といった表現は、SNS 上で自嘲的なミームとして定着している。'
    },
    critique: {
      title: '主な批判',
      body: '批判の主要な柱は 3 つ。' +
        '第一に、惑星の重力や電磁場が個人の性格に因果的に作用するメカニズムがない(出生時の助産師の重力の方が数百倍強い)。' +
        '第二に、実証研究で予測精度がチャンス以上に上がらない。' +
        '第三に、地球の歳差運動によって天体位置が古代の割り当てから約 24 度ずれており、「あなたの太陽星座」は実際には隣の星座を指している。'
    },
    culturalPresence: {
      title: '文化の中の占星術',
      body: 'Shakespeare の「ロミオとジュリエット」冒頭「star-crossed lovers(星に呪われた恋人たち)」は占星術的世界観の名残である。' +
        'Renaissance の宮廷詩人 John Donne も星座を頻繁に詩に登場させた。' +
        '現代ではファッションブランド Prada や Christian Dior が星座モチーフのコレクションを定期的にリリース、Beyoncé の楽曲「XO」は Cancer(蟹座)への自己言及として知られる。'
    },
    references: [
      { title: 'Tetrabiblos', author: 'Claudius Ptolemy', year: '2 世紀' },
      { title: 'The Only Astrology Book You\'ll Ever Need', author: 'Joanna Martine Woolfolk', year: 2012 },
      { title: 'A double-blind test of astrology (Nature 318)', author: 'Shawn Carlson', year: 1985 },
      { title: 'Astrology and the Authentic Self', author: 'Demetra George', year: 2008 }
    ]
  },
  {
    id: 'kyusei-kigaku',
    title: '九星気学',
    subtitle: 'Nine Star Ki',
    era: '周代 —',
    heroSymbol: '⑨',
    origin: {
      title: '起源',
      body: '古代中国、周代(紀元前 11-3 世紀)に確立された陰陽五行思想と、易経の八卦体系が母体である。' +
        '中でも「洛書」と呼ばれる、9 つの数が魔方陣的に配列された図像が九星の基礎になった。' +
        '洛書は「大禹が黄河の支流・洛水で神亀の甲羅に見た模様」という伝説から名付けられた。' +
        '数学史的には、これは中国で発見された最古の魔方陣(縦横斜めの和が全て 15)である。'
    },
    evolution: {
      title: '進化',
      body: '唐宋期(7-13 世紀)に、九星は五行と結びつき方位学・風水学の中核として発展した。' +
        '「本命星」「月命星」の概念と、方位取り(引越や旅行の方位を選ぶ)という実践は、この時期に定型化した。' +
        '平安期(9-12 世紀)、陰陽師たちが遣唐使を通じて日本にこれを伝えた。' +
        '江戸期には民衆向けの暦や占本に組み込まれ、大衆的知識となる。' +
        '大正末年(1924)、園田真次郎が「気学大全集」で近代的な九星気学を体系化し、現代日本の運勢学の基盤となった。'
    },
    modern: {
      title: '現代における位置',
      body: '東アジア圏で「風水」「方位取り」の理論的基盤として実践されている。' +
        '香港のビジネス街では、オフィスの入口方位を九星に基づいて選ぶ企業家が今も多い。' +
        '日本では引越し・結婚式の方位、韓国では墓地の選定に用いられる。' +
        '心理学的検証はほぼ試みられていないが、「今年のテーマを決める」枠組みとしての実用性は指摘される。'
    },
    critique: {
      title: '主な批判',
      body: '第一に、天体の周期と個人の運勢を結びつける因果メカニズムがない。' +
        '第二に、立春(2 月 4 日)で年が切り替わる慣習と、旧暦春節で切り替える流派があり、生年月日境界の生まれは結果がぶれる。' +
        '第三に、九星の五行属性(木火土金水)の帰属自体が流派によって微妙に異なる。'
    },
    culturalPresence: {
      title: '文化の中の九星',
      body: '香港映画「風水先生 / Fengshui Master」など、風水と九星は東アジア映画の定番モチーフである。' +
        '日本のビジネス界でも、幕末〜昭和期の実業家(例:松下幸之助)は方位取りを重視した記録が残る。' +
        '現代日本では、TV 番組「突然ですが占ってもいいですか?」に九星気学の占い師が定期出演する。'
    },
    references: [
      { title: '気学大全集', author: '園田真次郎', year: 1924 },
      { title: 'The Nine Star Ki', author: 'Bob Sachs', year: 1992 },
      { title: '中国風水の歴史', author: '何暁昕', year: 1995 }
    ]
  }
  // TODO: 残り 16 展示(chinese-zodiac / sixty-jia-zi / five-elements /
  //   animal / celtic / maya / tarot / birthstone / birthflower /
  //   biorhythm / moon-phases / life-milestones / 恋愛アーケタイプ / etc.)
];
