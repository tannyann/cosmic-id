# 占術計算の正確性監査 — README 4大弱点「以外」の体系

対象: `/Users/mizutanikouyou/cosmic_id/src/calculations.js`(+ 辞書 `src/i18n/locales/{ja,en}/content.js`)
調査日: 2026-07-07 / 担当: 正確性監査(その他体系)
注: 九星気学・動物占い・マヤ暦・月星座は別担当のため本稿では原則触れない(接点がある箇所のみ言及)。
本稿は流派差の整理であり、どの流派を「正」とするかは決めない(経営判断事項)。コードは一切変更していない。

---

## TLDR

- **最もズレ(実害)が大きいのはタロット・バースカード**。流派差以前に**実装バグの疑いが濃厚**: 計算結果が 22(愚者)になったとき `TAROT_BY_NUM[22]` は存在せず(配列は 0〜21)、`name` が `undefined` になる。1930〜2025年生まれの機械的試算で **約1,754日分の誕生日(全体の約5%)** がこのケースに該当する。
- 次点は**六十干支・十二支・五行の「1月1日切替」問題**。1月〜2月上旬生まれ(人口の約1割)で、四柱推命系(立春切替)・中華圏の旧正月切替と結果が食い違う。しかも同アプリ内の九星計算(`kyuseiHonmei`)は2月4日切替を採用しており、**アプリ内部で年の区切りが不統一**。
- 太陽星座・ケルト樹木・数秘は「広く流布した簡易表・簡易式」としては概ね妥当だが、境界日±1日/マスターナンバーの出方/流派系統の明示、という定番の注意点がそれぞれ残る。

---

## 1. 六十干支・十二支・五行(`sixtyJikkan`, `chineseZodiac`, `gogyou`, `sixtyCycleIndex`)

| 項目 | 内容 |
|---|---|
| 現状の式 | `idx = (year - 4) % 60`(干支)、`(year - 4) % 12`(十二支)、`(year - 4) % 10`(五行=年干ベース)。**西暦1月1日で年が切り替わる**前提。1984=甲子、干→五行の割当(甲乙=木…壬癸=水)、陰陽(奇数干=陰)は標準どおりで妥当。 |
| 主要流派 | (a) **西暦1月1日切替** — 日本の年賀状・雑誌的な「今年の干支」慣習。(b) **立春切替** — 四柱推命・算命学・気学系の標準。年の始まりは立春(2月3〜5日、年により変動)。(c) **旧正月(旧暦元日)切替** — 中華圏の生肖の一般慣習(旧正月は1月下旬〜2月中旬で毎年変動)。流派により冬至・元日切替を採る説もある。 |
| ズレる実例 | **1985年1月15日生まれ**: 実装=乙丑(丑年・木)/立春流=甲子(子年・木)/旧正月流(1985年の旧正月は2月20日)=甲子(子年)。→ 実装だけ「丑(牛)年」、他は「子(鼠)年」。<br>**1990年2月1日生まれ**: 実装=庚午(馬・金)/立春流=己巳(蛇・土)※立春2月4日前/旧正月流(1990年旧正月=1月27日)=庚午(馬)。→ **3方式で分かれる**日付帯が存在。 |
| アプリ内不整合 | `kyuseiHonmei(year, month, day)` は「1月または2月4日より前」を前年扱いにする(=立春近似)。同じ1985/1/15生まれのユーザーが、九星は「1984年扱い」、干支・五行は「1985年扱い」で算出される。ユーザーから見ると理屈が通らない。 |
| 推奨対応の候補 | ① 立春切替(固定2/4近似)に揃えて九星と整合させる+「立春切替を採用」と明記(**おすすめ**: 実装コスト最小で内部整合が取れる)。② 旧正月テーブルを持ち中華圏流に対応(多言語展開するなら検討価値あり)。③ 現状維持+「1月1日切替(日本の慣習)」と流派注記を UI に出す。 |

出典: [四柱推命 - Wikipedia(年の始まりは立春)](https://ja.wikipedia.org/wiki/%E5%9B%9B%E6%9F%B1%E6%8E%A8%E5%91%BD) / [風水師ウメヤマ「立春を起年とする理由」](https://www.china-fusui.jp/archives/%E7%AB%8B%E6%98%A5%E3%82%92%E8%B5%B7%E5%B9%B4%E3%81%A8%E3%81%99%E3%82%8B%E7%90%86%E7%94%B1.html) / [護禄かご note(年の切替3パターン: 冬至・元日・立春)](https://note.com/kago_569/n/nb328e2e1b12a) / [China Highlights: Chinese Zodiac Years Chart(1985年丑年は1985/2/20開始、1990年午年は1990/1/27開始)](https://www.chinahighlights.com/travelguide/chinese-zodiac/years.htm)

---

## 2. 西洋占星術 太陽星座(`sunSign` + `SUN_SIGNS`)

| 項目 | 内容 |
|---|---|
| 現状の式 | 固定日付境界のルックアップ。ja/en 両ロケールで同一境界: 山羊 12/22–1/19、水瓶 1/20–2/18、魚 2/19–3/20、牡羊 3/21–4/19、牡牛 4/20–5/20、双子 5/21–6/21、蟹 6/22–7/22、獅子 7/23–8/22、乙女 8/23–9/22、天秤 9/23–10/23、**蠍 10/24–11/22**、射手 11/23–12/21。日付の抜け・重複なし(ロジック自体は健全)。 |
| 主要流派 | 本来はトロピカル黄経で太陽の入座時刻(イングレス)が基準。**入座日は年により±1日変動**する(例: 山羊座入り=冬至は12/21の年と12/22の年がある。水瓶座入りも1/19〜1/21で変動)。固定表はその近似であり、しかも近似表自体が2系統ある: 実装の境界は**日本の雑誌・占い慣習の表**(蠍=10/24開始、蟹=6/22開始)にほぼ一致。一方、**英語圏の一般表**は Scorpio **10/23**–11/21、Cancer 6/21–、Capricorn 12/21– とするものが多い(Wikipedia は Scorpio を Oct 23 – Nov 22 とする)。 |
| ズレる実例 | **10月23日生まれ**: 実装=天秤座 / 英語圏の一般表・多くの年の実際の入座=蠍座。en ロケールでも 10/24 開始のままなので、英語ユーザーは自認と食い違いやすい。<br>**12月21日生まれ(冬至が12/21の年、例: 2020年12月21日 19:02 JST 冬至以降の出生)**: 実装=射手座 / 実際の太陽位置=山羊座。※個別年の入座時刻は未確認(天文暦での再計算が必要)。 |
| 推奨対応の候補 | ① 境界日生まれ(前後1日)に「カスプのため出生年・時刻により隣の星座の可能性あり」と UI 注記(**おすすめ**: 低コストで誠実)。② en ロケールだけ英語圏標準の境界(蠍10/23等)に差し替え(ロケール間で結果が変わる点は要検討)。③ 天文計算(astronomia 等)で入座時刻から判定(READMEの将来構想と整合するが重い)。 |

出典: [Scorpio (astrology) - Wikipedia(Oct 23 – Nov 22)](https://en.wikipedia.org/wiki/Scorpio_(astrology)) / [Almanac.com: Scorpio Zodiac Sign](https://www.almanac.com/content/scorpio-zodiac-sign) / [UniGuide: Zodiac Sign Dates and Cusp Dates(入座日は年により変動、カスプは出生図で要確認)](https://www.uniguide.com/zodiac-signs) / [Today.com: What It Means to Be Born on a Cusp(太陽の星座移動日時は毎年ずれる)](https://www.today.com/life/astrology/cusp-signs-real-rcna32208)

---

## 3. タロット バースカード(`tarotBirthCard` + `TAROT_BY_NUM`)

| 項目 | 内容 |
|---|---|
| 現状の式 | `sum = y + m + d`(例 1990+5+6)→ `while (sum > 22) sum = digitSum(sum)`。つまり**数字和で還元し、22 で止める**(22=愚者扱いの意図)。 |
| 主要流派 | (a) **Mary K. Greer / Angeles Arrien 方式**: 生年月日を合計し数字和で還元、1〜22 を保持。**22=愚者(0)** として扱う。→ 実装の算法はこの系統に一致。(b) **The Tarot School(Amberstone)方式**: `MM + DD + 世紀2桁 + 年下2桁`(=合計を2桁ペアで足す)で、(a)と結果が変わることを同校自身が明言。(c) 22 を認めず 2+2=4(皇帝)へ還元する流儀もある(Greer 自身が「愚者を含めない人も多い」と言及)。 |
| **バグ疑い(重大)** | `TAROT_BY_NUM` は ja/en とも **長さ22の配列(index 0=愚者 … 21=世界)**。`sum` が 22 のとき `TAROT_BY_NUM[22]` は **undefined**。index 0(愚者)には決して到達しない(sum の最小値は1)。→ **22=愚者になるべき誕生日で名前が壊れる**。`narrative.js` `starmap.js` `share.js` は `ctx.tb.name` をそのまま使うため表示破損の恐れ。`cardInteractives.js:714,765` は `?? TAROT_BY_NUM[1]`(=魔術師)へフォールバックしており、**愚者の代わりに魔術師が表示される**。機械的試算では 1930〜2025年生まれのうち **1,754通りの誕生日**(例: 1949/12/14 → 1975 → 1+9+7+5=22)が該当。 |
| ズレる実例(流派差) | **1949年12月14日生まれ**: 実装/Greer 方式=22(愚者)/ Tarot School 方式=12+14+19+49=94→13(死神)。同じ人でカードが全く変わる。<br>(参考: 1990/5/6 はどちらも3=女帝で一致。多くの日付では両方式は一致する。) |
| 推奨対応の候補 | ① まず**バグ修正**: `sum === 22` を愚者(index 0)にマップするか、配列を1〜22キーの辞書にする(**おすすめ**: 流派選定以前の必須修正)。② 方式は Greer 系を継続採用し「Greer 方式(22=愚者)」と注記。③ Tarot School 方式やペアカード(例: 19→10→1 の3枚組)対応は差別化要素として別途検討。 |

出典: [Mary K. Greer's Tarot Blog: Birth Cards(数字和方式・22=愚者)](https://marykgreer.com/tag/birth-cards/) / [The Tarot School: Determining Your Birth Cards(MM+DD+19+YY 方式、他方式と結果が異なると明言)](https://tarotschool.com/BirthCards2.html) / [Angelorum: How to Calculate Your Tarot Birth Cards](https://angelorum.co/topics/divination/how-to-calculate-your-personality-sou/) / [benebell wen: Tarot Year Card (Archetypal Tarot)](https://benebellwen.com/2021/12/24/tarot-year-card-from-archetypal-tarot-by-mary-k-greer/)

---

## 4. 数秘術(`lifePath`, `personalYear`, `expressionNumberLatin` ほか)

| 項目 | 内容 |
|---|---|
| 現状の式 | **lifePath**: `digitSum(y)+digitSum(m)+digitSum(d)` を合計してから還元(=実質「全桁合計」方式)、11/22/33 は途中でも保持。**personalYear**: `reduce(m)+reduce(d)+reduce(currentYear)` を還元(マスター保持なし、暦年=1/1切替)。**expressionNumberLatin**: ピタゴラス式 A=1…I=9, J=1…Z=8、マスター保持。 |
| 主要流派(lifePath) | (a) **年・月・日を個別に還元してから合計**(その途中の 11/22 は保持)— Numerology.com、World Numerology(Decoz)等が「正式」とする主流方式。(b) 全桁を一気に合計(実装に近い)。(a)の解説では (b) を「マスターナンバーが出るべきでない所で出る/出るべき所で出ない」誤法と位置づける。 |
| ズレる実例(lifePath) | **1989年2月27日生まれ**: 実装(全桁系)= 27+2+9=38 → **11(マスター)** / 個別還元方式= (1989→27→9)+(2)+(27→9)=20 → **2**。<br>**2007年11月2日生まれ**: 実装= 9+2+2=13 → **4** / 個別還元方式= 9+11+2=22 → **22(マスター)**。<br>**1980年2月2日生まれ**: 実装= 18+2+2=22 → **22** / 個別還元= 9+2+2=13 → **4**。→ マスターナンバーの有無が方式でひっくり返る。 |
| 主要流派(personalYear) | 計算式(月+日+対象年)は主流と一致。ただし (a) **1/1切替(暦年)** が最多数派、(b) **誕生日切替**(誕生日から次の誕生日まで)を採る実務家もいる。また 11/22 をパーソナルイヤーでも保持する流儀と、1〜9のみとする流儀がある(実装は後者)。辞書 `PERSONAL_YEAR_MEANINGS` も1〜9のみで整合はしている。 |
| 主要流派(expression) | ピタゴラス式 A–Z 換算表・マスター保持は標準どおりで妥当。ただし本来は**出生証明書のフルネーム**を用いるのが正式(実装は入力された表示名/ローマ字。カジュアル用途としては一般的な簡略化)。別系統として **Chaldean 式**(1〜8割当)もある。**軽微な疑義**: ダイアクリティカル付き文字(é, ü 等)は 0 扱いでスキップされるため、欧州系の名前で字が無視される(主要数秘サイトは基底文字に正規化して数えるのが通例 — この点の「標準」扱いは各社まちまち、**未確認**)。`expressionNumberNative`(コードポイント合計 mod 9)は**いかなる数秘流派にも由来しない独自式**(コード内コメントでも別系統と明示済み)— UI 上でも「独自の簡易値」であることの明示を推奨。 |
| 推奨対応の候補 | ① lifePath を個別還元方式に変更 or 両方式併記(**おすすめ**: 「マスターナンバー」を売りにするなら主流方式(個別還元)に寄せ、変更時は既存ユーザーへの結果変動を告知)。② personalYear は現状維持+「暦年切替を採用」と注記(**おすすめ**)。③ expression は「正式には出生時のフルネーム」の注記と、ダイアクリティカル正規化の検討。 |

出典: [Numerology.com: Life Path Number(月・日・年を個別還元してから合計。全桁一括加算は誤りと明言)](https://www.numerology.com/articles/your-numerology-chart/life-path-number-meanings/) / [World Numerology: Life Path(個別還元方式でないとマスターナンバーが正しく出ないと説明)](https://www.worldnumerology.com/numerology-life-path/) / [Kari Samuels: Personal Year Calculator(暦年ベース)](https://karisamuels.com/personal-year-calculator-numerology-forecast/) / [astro-seek: Personal Year(誕生日切替説にも言及)](https://numerology.astro-seek.com/personal-year) / [dcode.fr: Pythagorean Numerology(A=1…Z=8 の換算表)](https://www.dcode.fr/pythagorean-numerology) / [NumroLab: Numerology Alphabet (Pythagorean & Chaldean)](https://numrolab.com/articles/numerology-alphabet)

---

## 5. ケルト樹木占い(`celticTree` + `CELTIC_TREES`)

| 項目 | 内容 |
|---|---|
| 現状の式 | 13樹木の固定日付表(樺 12/24–1/20、ロワン 1/21–2/17、アッシュ 2/18–3/17、アルダー 3/18–4/14、ウィロー 4/15–5/12、ホーソーン 5/13–6/9、オーク 6/10–7/7、ホリー 7/8–8/4、ヘーゼル 8/5–9/1、ヴァイン 9/2–9/29、アイヴィー 9/30–10/27、リード 10/28–11/24、エルダー 11/25–12/23)。日付の抜け・重複なし。 |
| 主要系統 | (a) **13樹木・オガム暦系**(Robert Graves『The White Goddess』由来、Liz & Colin Murray らが普及): 実装の日付表は流通している13樹木表(Birch=12/24–1/20 … Elder=11/25–12/23)と**完全一致**。(b) **21(22)樹木のドルイド樹木ホロスコープ系**(欧州大陸系。モミ・ニレ・イトスギ・リンゴ等を含み、多くの木が年2期間を持つ): 全く別の分類で、こちらを「ケルト樹木占い」と呼ぶサイトも多い。なお依頼時に言及のあった「Colin Murray 系=21分類」は確認できず — Murray 夫妻は13樹木(ないし12+エルダー3日)系に紐づく(**その細部は未確認**)。学術的には「ケルト人が樹木暦を使った証拠はない」(Graves の創作)とされる点も留意。 |
| ズレる実例 | 系統間の差なので全日付でズレる。例: **1月5日生まれ** → 実装(13樹木)=樺(バーチ)/ 21樹木系=モミ(Fir, 1/2–1/11)。**7月1日生まれ** → 実装=樫(オーク)/ 21樹木系ではオークは3/21(春分)の1日のみで、7/1はリンゴ等別の木になる。 |
| 表記の疑義(ja) | `錦木(エルダー)` — Elder(セイヨウニワトコ)の和名は「ニワトコ(接骨木)」。錦木(ニシキギ)は別種。また `榛(アルダー)` と `榛(ヘーゼル)` が同一漢字で衝突(榛はハンノキ/ハシバミ両方に読めるが、UI上区別がつかない)。計算には影響しないが修正推奨。 |
| 推奨対応の候補 | ① 現状の13樹木・Graves系を維持し「オガム暦(13樹木)系を採用。21樹木系とは別系統」と注記(**おすすめ**: 日付表は系統内で正確)。② ja の樹木和名2点を修正。③ 21樹木系の追加は別コンテンツとしてなら可。 |

出典: [Learn Religions: The 13 Months of the Celtic Tree Calendar(13樹木の日付表 — 実装と一致)](https://www.learnreligions.com/celtic-tree-months-2562403) / [Mary Jones: Celtic Tree Calendar(Graves 由来の経緯、Murray 夫妻への言及、史実性への疑義)](https://www.maryjones.us/jce/celtictreecalendar.html) / [astro-seek: Celtic Tree Horoscope(21樹木系の日付)](https://horoscopes.astro-seek.com/celtic-tree-zodiac-horoscope) / [myspiritualprofile: Druid Tree sign(21樹木リスト)](https://www.myspiritualprofile.com/astrology/celtic-tree-druid-zodiac-signs.htm)

---

## 6. その他の計算上の疑義(バグ疑い・要注記、修正はしていない)

| 箇所 | 疑義 | 深刻度 |
|---|---|---|
| `tarotBirthCard` / `TAROT_BY_NUM[22]` | 上記3のとおり index 22 が存在せず undefined。`cardInteractives.js:762-765` の「シャドウカード」`(num + 11) % 22 \|\| 22` も 22 を生成し同じ穴を踏む。 | **高(実装バグ)** |
| `kyuseiCycleYear(birthYear, currentYear)` | 単なる「経過年数 mod 9 + 1」。誕生年・現在年とも立春補正がなく、`kyuseiHonmei` が立春近似を採っているのと不整合(1月生まれ・年初の表示が1ずれる)。またこの「サイクル位置1–9」が気学の廻座(年盤上の本命星の位置)と対応する保証はない(**未確認**)。 | 中 |
| `kyuseiMonthStar(month+day)` / `kyuseiDayStar(day)` | コメントに「簡易式」とあるが、本来の月命星は節入りベースの月+本命星グループの対応表、日命星は日の干支(陽遁・陰遁)で決まる。数字和による当式は**いかなる流派の式でもない独自生成**とみられる(**未確認**=同型の式を採る流派は発見できず)。エンタメ値である旨の UI 注記推奨。 | 中 |
| `luckyCompass` | 数秘+九星+五行の**独自合成**(伝統的典拠なし)。計算としては安全(`reduceDigit(lp+3)` 等は破綻しない)が、「オリジナル指標」であることの明示推奨。 | 低 |
| `moonTrait` / `moonPhaseToday` / `moonPhaseAt` | 平均朔望月(29.530588日)×固定基準日(2000-01-06 18:14 UTC)の等速近似。実際の朔望は楕円軌道により平均から最大±0.5〜0.7日程度ずれる(境界付近の生まれでカテゴリが変わりうる)。※ズレ幅の正確な最大値は**未確認**。月星座本体は別担当。 | 低 |
| `personalYearMonthCalendar` | 純粋関数のはずのモジュール内で `new Date()` を直接参照(`isCurrent` 判定)。計算誤りではないがテスト容易性・SSR で問題になりうる。 | 低 |
| `renderTarotYearCard`(cardInteractives.js:712) | イヤーカード=`reduceDigit(py + lp)` は Greer のイヤーカード(月+日+対象年、1〜22保持)と別物の独自式。1〜9にしかならず大アルカナ10〜22が出ない。 | 低 |
| `zodiacRelation` / `gogyouRelation` | 六合・三合・冲、五行相生相剋の組み合わせは古典どおりで**問題なし**(六合: 子丑・寅亥・卯戌・辰酉・巳申・午未、三合: 申子辰・巳酉丑・寅午戌・亥卯未を確認)。 | — |

---

## 出典一覧

**干支・年の切替**
- 四柱推命 - Wikipedia: https://ja.wikipedia.org/wiki/四柱推命
- 風水師ウメヤマ「立春を起年とする理由」: https://www.china-fusui.jp/archives/立春を起年とする理由.html
- 護禄かご「四柱推命で一年が終わる日3パターン」: https://note.com/kago_569/n/nb328e2e1b12a
- China Highlights: Chinese Zodiac Years Chart: https://www.chinahighlights.com/travelguide/chinese-zodiac/years.htm

**太陽星座**
- Scorpio (astrology) - Wikipedia: https://en.wikipedia.org/wiki/Scorpio_(astrology)
- Almanac.com Scorpio: https://www.almanac.com/content/scorpio-zodiac-sign
- UniGuide Zodiac Sign Dates and Cusp Dates: https://www.uniguide.com/zodiac-signs
- Today.com "Are Zodiac Cusps Real?": https://www.today.com/life/astrology/cusp-signs-real-rcna32208

**タロット バースカード**
- Mary K. Greer's Tarot Blog (Birth Cards): https://marykgreer.com/tag/birth-cards/
- The Tarot School: Determining Your Birth Cards: https://tarotschool.com/BirthCards2.html
- Angelorum: How to Calculate Your Tarot Birth Cards: https://angelorum.co/topics/divination/how-to-calculate-your-personality-sou/
- benebell wen: Tarot Year Card (Archetypal Tarot): https://benebellwen.com/2021/12/24/tarot-year-card-from-archetypal-tarot-by-mary-k-greer/

**数秘術**
- Numerology.com: Life Path Number: https://www.numerology.com/articles/your-numerology-chart/life-path-number-meanings/
- World Numerology: Life Path: https://www.worldnumerology.com/numerology-life-path/
- Kari Samuels: Personal Year Calculator: https://karisamuels.com/personal-year-calculator-numerology-forecast/
- astro-seek: Personal Year: https://numerology.astro-seek.com/personal-year
- dcode.fr: Pythagorean Numerology: https://www.dcode.fr/pythagorean-numerology
- NumroLab: Numerology Alphabet (Pythagorean & Chaldean): https://numrolab.com/articles/numerology-alphabet

**ケルト樹木**
- Learn Religions: The 13 Months of the Celtic Tree Calendar: https://www.learnreligions.com/celtic-tree-months-2562403
- Mary Jones: Celtic Tree Calendar: https://www.maryjones.us/jce/celtictreecalendar.html
- astro-seek: Celtic Tree Horoscope (21樹木系): https://horoscopes.astro-seek.com/celtic-tree-zodiac-horoscope
- myspiritualprofile: Druid Tree signs (21樹木リスト): https://www.myspiritualprofile.com/astrology/celtic-tree-druid-zodiac-signs.htm

**未確認事項(明示)**
- 個別年の太陽イングレス正確時刻(10/23・12/21 の実例は「年により変わる」ことの一般論に基づく。天文暦での個別検証は未実施)
- Colin Murray の原著における樹木暦の正確な仕様(二次資料のみ確認)
- 平均朔望月近似の最大誤差の正確な値
- kyuseiCycleYear の「サイクル位置」がいずれかの気学流派の廻座定義と一致するか(一致する流派は発見できず)
- ダイアクリティカル付き文字の扱いに関する数秘各派の「標準」
