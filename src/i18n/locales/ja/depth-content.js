/**
 * カード深掘り 4 層コンテンツ辞書(日本語)。
 *
 * 各カードごとに 3 種の追加情報を持たせる:
 *   - computation:  How の中身(計算過程のステップ)
 *   - history:      Where from の中身(起源・年表・参考文献)
 *   - famousBy:     Who shares の中身(同じ結果値を持つ有名人)
 *
 * 意味(What)は既存の deeper.js から引き続き使うので、ここでは扱わない。
 *
 * 「TODO」と書かれた箇所は Cursor に埋めてもらうか、後追いで拡張してください。
 */

/* ============================================================
 * 各カード共通のヘルパー
 * ============================================================ */

// 数字を桁ごとに配列化(computation animation で使う)
function digits(n) {
  return String(Math.abs(n)).split('').map(Number);
}

/* ============================================================
 * ライフパス(数秘)
 * ============================================================ */

export const LIFEPATH_DEPTH = {
  computation: {
    caption: '生年月日の全桁を 1 桁(またはマスター数 11/22/33)まで還元します。',
    steps: (y, m, d) => {
      const all = [...digits(y), ...digits(m), ...digits(d)];
      const sum1 = all.reduce((s, x) => s + x, 0);
      const trace = [
        { label: '生年月日を並べる', parts: all },
        { label: '全部足す', value: `${all.join(' + ')} = ${sum1}` }
      ];
      let cur = sum1;
      while (cur > 9) {
        if (cur === 11 || cur === 22 || cur === 33) {
          trace.push({ label: `マスター数 ${cur} は還元しない`, value: cur, master: true });
          break;
        }
        const next = digits(cur).reduce((s, x) => s + x, 0);
        trace.push({ label: '1 桁になるまで足す', value: `${digits(cur).join(' + ')} = ${next}` });
        cur = next;
      }
      trace.push({ label: 'ライフパス', value: cur, final: true });
      return trace;
    }
  },
  history: {
    origin: 'ピタゴラス学派(紀元前 6 世紀)による「万物は数」思想。数を性格・宿命の器と見る発想は、ここに源流があります。',
    evolution: [
      { year: '紀元前 6 世紀', event: 'ピタゴラス学派、数と魂の一致を説く' },
      { year: '中世(9〜13 世紀)', event: 'ユダヤ神秘主義カバラで、ヘブライ文字と数の対応が体系化される' },
      { year: '1901 年', event: 'Mrs. L. Dow Balliett が現代数秘術の基礎「The Philosophy of Numbers」を出版' },
      { year: '1970 年代', event: 'Faith Javane と Dusty Bunker が Life Path Number 概念を英米で普及' },
      { year: '現代', event: '心理的自己観察のツールとして西洋圏で広く親しまれる' }
    ],
    modernStatus: '学術的な性格研究(Big Five、MBTI 等)との統計的相関は確認されていませんが、自己反省を促す枠組みとして今も現役です。',
    references: [
      { title: 'Numerology and The Divine Triangle', author: 'Faith Javane & Dusty Bunker', year: 1979 },
      { title: 'The Complete Book of Numerology', author: 'David A. Phillips', year: 2005 }
    ]
  },
  // ライフパス値ごとの有名人(名前・生年月日・国籍・簡単な業績)
  famousBy: {
    1: [
      { name: 'マーティン・ルーサー・キング Jr.', birth: '1929-01-15', nation: 'US', craft: '公民権運動' },
      { name: 'スコット・フィッツジェラルド', birth: '1896-09-24', nation: 'US', craft: '小説家' }
    ],
    2: [
      { name: 'マドンナ', birth: '1958-08-16', nation: 'US', craft: '音楽・パフォーマンス' },
      { name: 'ビル・クリントン', birth: '1946-08-19', nation: 'US', craft: '政治' }
    ],
    3: [
      { name: 'アルフレッド・ヒッチコック', birth: '1899-08-13', nation: 'UK', craft: '映画監督' },
      { name: 'サルヴァドール・ダリ', birth: '1904-05-11', nation: 'ES', craft: '画家' },
      { name: '宮崎駿', birth: '1941-01-05', nation: 'JP', craft: 'アニメーション' },
      { name: 'デヴィッド・ボウイ', birth: '1947-01-08', nation: 'UK', craft: '音楽' }
    ],
    4: [
      { name: 'ビル・ゲイツ', birth: '1955-10-28', nation: 'US', craft: '起業家' },
      { name: 'クリント・イーストウッド', birth: '1930-05-31', nation: 'US', craft: '俳優・監督' }
    ],
    5: [
      { name: 'エイブラハム・リンカーン', birth: '1809-02-12', nation: 'US', craft: '政治' },
      { name: 'アンジェリーナ・ジョリー', birth: '1975-06-04', nation: 'US', craft: '俳優' }
    ],
    6: [
      { name: 'アルベルト・アインシュタイン', birth: '1879-03-14', nation: 'DE', craft: '物理学' },
      { name: 'ジョン・レノン', birth: '1940-10-09', nation: 'UK', craft: '音楽' }
    ],
    7: [
      { name: 'マリリン・モンロー', birth: '1926-06-01', nation: 'US', craft: '俳優' },
      { name: 'ムハンマド・アリ', birth: '1942-01-17', nation: 'US', craft: 'ボクシング' }
    ],
    8: [
      { name: 'パブロ・ピカソ', birth: '1881-10-25', nation: 'ES', craft: '画家' },
      { name: 'バラク・オバマ', birth: '1961-08-04', nation: 'US', craft: '政治' }
    ],
    9: [
      { name: 'マハトマ・ガンジー', birth: '1869-10-02', nation: 'IN', craft: '独立運動' },
      { name: 'モハメド・アリ・ジンナ', birth: '1876-12-25', nation: 'PK', craft: '政治' }
    ],
    11: [
      { name: 'バラク・オバマ(誕生日再掲)', birth: '1961-08-04', nation: 'US', craft: '政治', note: '11 → 2 とも計算されるが、マスター数として扱う流派も多い' }
    ],
    22: [
      { name: 'ダライ・ラマ 14 世', birth: '1935-07-06', nation: 'TB', craft: '宗教指導者' }
    ],
    33: [
      { name: 'マザー・テレサ', birth: '1910-08-26', nation: 'MK', craft: '慈善活動' }
    ]
  }
};

/* ============================================================
 * 太陽星座(西洋占星術)
 * ============================================================ */

export const SUN_DEPTH = {
  computation: {
    caption: '生まれた月日から、天球上を移動する太陽の位置(星座)を求めます。',
    steps: (y, m, d) => {
      const monthDay = m * 100 + d;
      return [
        { label: '月日を並べる', parts: [m, d] },
        { label: '境界日と照合', value: `${m}月${d}日` },
        { label: '該当する星座', final: true, value: '(結果を参照)' }
      ];
    }
  },
  history: {
    origin: '紀元前 2 千年紀のバビロニア天文学で 12 星座が確立。ヘレニズム時代のギリシア文化圏で個人の性格と結びつけられ、現在の形になりました。',
    evolution: [
      { year: '紀元前 2000 年頃', event: 'バビロニアの天文司祭が 12 の星座区分を用いた記録を残す' },
      { year: '紀元前 4 世紀', event: 'アリストテレス、天体と地上の対応を体系化' },
      { year: '2 世紀', event: 'プトレマイオス「テトラビブロス」で占星術理論が総合される' },
      { year: '中世〜近世', event: 'イスラム世界・ヨーロッパで発展、17 世紀以降は科学から分離' },
      { year: '20 世紀', event: '新聞コラム占いにより大衆化。心理占星術(ユング派)が理論的深化を試みる' }
    ],
    modernStatus: 'Shawn Carlson の Nature 論文(1985)などで予測精度は否定されていますが、自己語りの語彙・元型的心理学のツールとしては西洋文化に深く根付いています。',
    references: [
      { title: 'Tetrabiblos', author: 'Claudius Ptolemy', year: '2世紀' },
      { title: 'The Only Astrology Book You\'ll Ever Need', author: 'Joanna Martine Woolfolk', year: 2012 }
    ]
  },
  // 星座ごとの有名人
  famousBy: {
    '牡羊座': [{ name: 'レオナルド・ダ・ヴィンチ', birth: '1452-04-15', nation: 'IT', craft: '芸術・科学' }],
    '牡牛座': [{ name: 'ウィリアム・シェイクスピア', birth: '1564-04-23', nation: 'UK', craft: '劇作' }],
    '双子座': [{ name: 'ポール・マッカートニー', birth: '1942-06-18', nation: 'UK', craft: '音楽' }],
    '蟹座':   [{ name: 'ダライ・ラマ 14 世', birth: '1935-07-06', nation: 'TB', craft: '宗教指導者' }],
    '獅子座': [{ name: 'マドンナ', birth: '1958-08-16', nation: 'US', craft: '音楽' }],
    '乙女座': [{ name: 'マイケル・ジャクソン', birth: '1958-08-29', nation: 'US', craft: '音楽' }], // 境界
    '天秤座': [{ name: 'ジョン・レノン', birth: '1940-10-09', nation: 'UK', craft: '音楽' }],
    '蠍座':   [{ name: 'マリー・キュリー', birth: '1867-11-07', nation: 'PL', craft: '物理学' }],
    '射手座': [{ name: 'ジミ・ヘンドリックス', birth: '1942-11-27', nation: 'US', craft: '音楽' }],
    '山羊座': [{ name: 'アイザック・ニュートン', birth: '1643-01-04', nation: 'UK', craft: '物理学' }],
    '水瓶座': [{ name: 'モーツァルト', birth: '1756-01-27', nation: 'AT', craft: '音楽' }],
    '魚座':   [{ name: 'アルベルト・アインシュタイン', birth: '1879-03-14', nation: 'DE', craft: '物理学' }]
  }
};

/* ============================================================
 * 九星気学(本命星)
 * ============================================================ */

export const KYUSEI_DEPTH = {
  computation: {
    caption: '生年の全桁を足し、11 から引く(立春前は前年扱い)。',
    steps: (y, m, d) => {
      let yy = y;
      const boundary = (m === 1 || (m === 2 && d < 4)) ? true : false;
      if (boundary) yy = y - 1;
      const yDigits = digits(yy);
      const sum1 = yDigits.reduce((s, x) => s + x, 0);
      const trace = [{ label: '生年の桁を並べる', parts: yDigits }];
      if (boundary) trace.unshift({ label: '立春前 → 前年扱い', value: `${y} → ${yy}` });
      trace.push({ label: '足す', value: `${yDigits.join(' + ')} = ${sum1}` });
      let cur = sum1;
      while (cur > 9) {
        const next = digits(cur).reduce((s, x) => s + x, 0);
        trace.push({ label: '1 桁になるまで還元', value: `${digits(cur).join(' + ')} = ${next}` });
        cur = next;
      }
      let star = 11 - cur;
      trace.push({ label: '11 から引く', value: `11 − ${cur} = ${star}` });
      if (star > 9) { star -= 9; trace.push({ label: '9 を超えたら 9 を引く', value: star }); }
      if (star < 1) { star += 9; trace.push({ label: '1 未満なら 9 を足す', value: star }); }
      trace.push({ label: '本命星番号', value: star, final: true });
      return trace;
    }
  },
  history: {
    origin: '中国古代の陰陽五行思想(周 → 漢代に体系化)と後天八卦(易経)が母体。九星への割り振りは唐宋期に整い、日本には平安期に伝来しました。',
    evolution: [
      { year: '周〜漢代', event: '陰陽五行と天干地支の理論が確立' },
      { year: '唐宋期', event: '九宮・洛書との対応が確立、風水学の一部となる' },
      { year: '平安期', event: '陰陽師によって日本に伝来、暦学と結びつく' },
      { year: '大正〜昭和初期', event: '園田真次郎が九星気学を体系化、大衆的知識に' },
      { year: '現代', event: '運勢学・方位取り・改名の判断素材として親しまれる' }
    ],
    modernStatus: '風水学・地理学の系譜として東アジアで広く実践。学術的な根拠は乏しいが、生活儀礼として文化的に定着しています。',
    references: [
      { title: '気学大全集', author: '園田真次郎', year: 1924 },
      { title: 'The Nine Star Ki', author: 'Bob Sachs', year: 1992 }
    ]
  },
  famousBy: {
    // 九星ごとの著名人(誕生年の九星として算出)
    '一白水星': [{ name: 'デビッド・ボウイ(1947)', birth: '1947-01-08', nation: 'UK', craft: '音楽' }],
    '二黒土星': [{ name: 'アルバート・アインシュタイン(1879)', birth: '1879-03-14', nation: 'DE', craft: '物理学' }],
    '三碧木星': [{ name: 'モーツァルト(1756)', birth: '1756-01-27', nation: 'AT', craft: '音楽' }],
    '四緑木星': [{ name: 'ジョン・レノン(1940)', birth: '1940-10-09', nation: 'UK', craft: '音楽' }],
    '五黄土星': [{ name: '宮崎駿(1941)', birth: '1941-01-05', nation: 'JP', craft: 'アニメーション' }],
    '六白金星': [{ name: 'マリリン・モンロー(1926)', birth: '1926-06-01', nation: 'US', craft: '俳優' }],
    '七赤金星': [{ name: 'マハトマ・ガンジー(1869)', birth: '1869-10-02', nation: 'IN', craft: '独立運動' }],
    '八白土星': [{ name: 'マドンナ(1958)', birth: '1958-08-16', nation: 'US', craft: '音楽' }],
    '九紫火星': [{ name: 'マザー・テレサ(1910)', birth: '1910-08-26', nation: 'MK', craft: '慈善' }]
  }
};

/* ============================================================
 * 全カードの深さ辞書を統合してエクスポート
 *
 * 未執筆のカードは Cursor に依頼するか、後追いで追加してください。
 * 構造は上記 3 種と同じ:{ computation, history, famousBy }
 * ============================================================ */

export const CARD_DEPTHS = {
  lifepath: LIFEPATH_DEPTH,
  sun: SUN_DEPTH,
  kyusei: KYUSEI_DEPTH
  // TODO: 残り 16 体系(personalYear / expression / moonTrait / zodiac / sixty /
  //        gogyou / animal / celtic / maya / tarotBirth / tarotDaily /
  //        birthstone / birthflower / biorhythm / moon / lifeStage)
};
