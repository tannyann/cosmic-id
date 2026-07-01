/**
 * Feature 13: Museum exhibits (English) — 19 total.
 */

export const MUSEUM_EXHIBITS = [

  /* Existing 3 (carried from Phase 2) */
  {
    id: 'numerology',
    title: 'Numerology',
    subtitle: 'The philosophy of numbers',
    era: '6th c. BCE —',
    heroSymbol: '∴',
    origin: { title: 'Origins',
      body: 'In 6th-century BCE Croton, the Pythagorean school taught that "all is number." Pythagoras (c. 570-495 BCE) discovered that pitch is proportional to string length in whole-number ratios — number is the ordering principle of the universe, and the soul must correspond to number too.' },
    evolution: { title: 'Evolution',
      body: 'Pythagorean teachings survive only in fragments. Medieval Kabbalah systematized letter-number correspondence (gematria). Mrs. L. Dow Balliett published "The Philosophy of Numbers" (1901), founding modern numerology. Faith Javane and Dusty Bunker popularized the Life Path concept in the 1970s.' },
    modern: { title: 'Today',
      body: 'Psychological studies (Wagerman & Funder 2007) found no statistically significant correlations with personality. But numerology endures as a framework for self-reflection — the symbolic system "1 = beginning, 9 = completion" is useful vocabulary for goal-setting and yearly themes.' },
    critique: { title: 'Main critiques',
      body: 'The central critique: no causal mechanism explains why 1990-05-15 would be "The Explorer of Expression." Life Path reduction methods differ between schools (all-digit sum vs staged reduction), giving inconsistent results.' },
    culturalPresence: { title: 'In culture',
      body: 'Elvis Presley kept 8 as his fate number. Jim Carrey has a documented fascination with 23 (there\'s a film). Dan Brown\'s Da Vinci Code weaves Kabbalah into central puzzles. In Japan, 4 is avoided as a homophone for death — itself numerological thinking.' },
    references: [
      { title: 'Numerology and The Divine Triangle', author: 'Faith Javane & Dusty Bunker', year: 1979 },
      { title: 'The Complete Book of Numerology', author: 'David A. Phillips', year: 2005 }
    ]
  },

  {
    id: 'western-astrology',
    title: 'Western Astrology',
    subtitle: 'Sky as mirror',
    era: '2000 BCE —',
    heroSymbol: '☉',
    origin: { title: 'Origins',
      body: 'In 2nd-millennium BCE Babylonia, priest-astronomers recorded star movements on clay tablets. The 12-fold zodiac was established by ~1000 BCE. Then, astrology was for kingdoms and weather — not individuals.' },
    evolution: { title: 'Evolution',
      body: 'In the Hellenistic period, Alexandria transformed astrology into a tool for individual character. Ptolemy\'s Tetrabiblos (2nd c.) synthesized theory. The Islamic world advanced both. After the 17th-century scientific revolution, astrology parted from science. In the late 20th century, Liz Greene founded psychological astrology.' },
    modern: { title: 'Today',
      body: 'Shawn Carlson\'s Nature test (1985) found chance-level accuracy. Yet cultural presence is enormous — Co-Star and Sanctuary have millions of users. "Mercury retrograde" has become a self-deprecating meme.' },
    critique: { title: 'Main critiques',
      body: 'No physical mechanism (a midwife\'s gravity dwarfs a planet\'s). Empirical predictions do not rise above chance. Earth\'s precession has shifted the star positions ~24° from their ancient assignments.' },
    culturalPresence: { title: 'In culture',
      body: 'Shakespeare\'s "star-crossed lovers." Prada and Dior release zodiac-themed collections. Beyoncé\'s "XO" is understood as a Cancer self-reference.' },
    references: [
      { title: 'Tetrabiblos', author: 'Claudius Ptolemy', year: '2nd c. CE' },
      { title: 'A double-blind test of astrology (Nature 318)', author: 'Shawn Carlson', year: 1985 }
    ]
  },

  {
    id: 'kyusei-kigaku',
    title: 'Nine Star Ki',
    subtitle: '九星気学 — the ninefold sky',
    era: 'Zhou dynasty —',
    heroSymbol: '⑨',
    origin: { title: 'Origins',
      body: 'Rooted in ancient Chinese Yin-Yang / Five-Element philosophy (Zhou dynasty) and the Later Heaven arrangement of the I Ching. The Luo Shu magic square, where every row/column/diagonal sums to 15, is its mathematical base — among the earliest known magic squares.' },
    evolution: { title: 'Evolution',
      body: 'Formalized in the Tang-Song era. Reached Japan via onmyoji in the Heian era. Sonoda Shinjiro systematized modern Kyusei Kigaku in his "Kigaku Daizenshu" (1924).' },
    modern: { title: 'Today',
      body: 'Across East Asia, it functions as the base for Feng Shui and direction-choosing. In Hong Kong\'s business district, entrepreneurs still choose office entrances by nine-star geomancy. As a "yearly theme" framework it retains practical use.' },
    critique: { title: 'Main critiques',
      body: 'No causal mechanism links celestial cycles to individual fortune. The "year boundary" (Feb 4 vs Lunar New Year) differs across schools. Five-Element assignments of the nine stars vary subtly across traditions.' },
    culturalPresence: { title: 'In culture',
      body: 'East Asian films like "The Fengshui Master" foreground the practice. Japanese TV features Kyusei practitioners regularly.' },
    references: [
      { title: 'Kigaku Daizenshu', author: 'Sonoda Shinjiro', year: 1924 },
      { title: 'The Nine Star Ki', author: 'Bob Sachs', year: 1992 }
    ]
  },

  /* New 16 exhibits */

  {
    id: 'chinese-zodiac',
    title: 'Chinese Zodiac',
    subtitle: 'The 12 Earthly Branches',
    era: 'Shang dynasty —',
    heroSymbol: '龍',
    origin: { title: 'Origins',
      body: 'The twelve branches (子丑寅…) appear on Shang oracle bones (17th-11th c. BCE) as abstract markers for direction, hour, and season. Animal correspondences arrived later. Astronomically, the 12-year cycle corresponds to Jupiter\'s orbital period (11.86 years).' },
    evolution: { title: 'Evolution',
      body: 'From the Han dynasty, the twelve branches were assigned to years, months, days, and hours — the framework of Four Pillars astrology. Regional variations emerged: Vietnam replaces the rabbit with a cat, Thailand with a golden dragon. Japan received it in the Suikō court era.' },
    modern: { title: 'Today',
      body: '"Year of the Rabbit" cultural rituals span the East Asian region every Lunar New Year. Chinese Spring Festival goods, Japanese nengajō, Korean new-year fortune-telling all draw on it. Statistical correlation with personality is unproven.' },
    critique: { title: 'Main critiques',
      body: 'Animal-personality correspondence lacks causal explanation. Border-date births can be assigned different signs by different schools. The zodiac was originally a time coordinate system; personality projection is a later overlay.' },
    culturalPresence: { title: 'In culture',
      body: 'Disney\'s "Mulan" features the twelve animals symbolically. #YearOfThe... trends globally each Lunar New Year on social media. In Vietnam, zodiac woodcarving; in China, papercutting; in Korea, greeting-card illustration are all independent craft traditions.' },
    references: [
      { title: 'The Chinese Zodiac Story', author: 'James Palmer', year: 2010 },
      { title: 'A History of Chinese Astronomy', author: 'Chen Zunwei', year: 1955 }
    ]
  },

  {
    id: 'sixty-jia-zi',
    title: 'Sixty Jia Zi',
    subtitle: 'The 60-year cycle',
    era: 'Shang dynasty —',
    heroSymbol: '甲',
    origin: { title: 'Origins',
      body: 'Shang oracle bones (17th-11th c. BCE) already record dates using the ten Heavenly Stems (甲乙…) and twelve Earthly Branches, yielding 60 unique labels. Astronomically, 60 approximates 3× the Jupiter-Saturn conjunction (20 years) and the Saros eclipse cycle (18 years).' },
    evolution: { title: 'Evolution',
      body: 'In the Han dynasty, the 60 Jia Zi extended to years, months, days, and hours — the framework of Four Pillars astrology. Xu Ziping (Song dynasty) synthesized the theory into "Zipingtuiming" — the form still used today. In Japan, it grounds the "kanreki" 60th-birthday celebration.' },
    modern: { title: 'Today',
      body: 'Four Pillars is one of East Asia\'s most refined traditional divination systems. In Taiwan and Hong Kong, it dominates commercial fortune-telling. Post-Cultural Revolution China has seen a revival among urban youth.' },
    critique: { title: 'Main critiques',
      body: 'Four Pillars interpretations depend heavily on practitioner\'s intuition — different readers give different readings of the same chart. Without birth time, only three pillars can be computed. There is no independent evidence for the predictive claims.' },
    culturalPresence: { title: 'In culture',
      body: 'The red kanreki chanchanko (60th-birthday robe) is a shared East Asian ritual. Chinese period drama "The Untamed" and Japanese historical dramas use character birth pillars as narrative devices.' },
    references: [
      { title: 'Ditianzuichanwei', author: 'Ren Tiechao', year: '18th c.' },
      { title: 'The Complete Idiot\'s Guide to Feng Shui', author: 'Elizabeth Moran', year: 2002 }
    ]
  },

  {
    id: 'five-elements',
    title: 'Five Elements',
    subtitle: 'Wu Xing 五行',
    era: 'Warring States period —',
    heroSymbol: '五',
    origin: { title: 'Origins',
      body: 'Wu Xing (Wood, Fire, Earth, Metal, Water) matured in the Warring States period (8th-3rd c. BCE). Zou Yan systematized the "generation and control" cycles. Unlike the four elements of Greek philosophy, Wu Xing describes not just material categories but relationships of change.' },
    evolution: { title: 'Evolution',
      body: 'Han philosopher Dong Zhongshu integrated Wu Xing into political, ethical, and cosmological thought. Traditional Chinese Medicine uses the five organs, five tastes, five colors, five directions, five sounds framework — still active clinically. Japan received it via Buddhism.' },
    modern: { title: 'Today',
      body: 'WHO recognizes Traditional Chinese Medicine as traditional medicine. Acupuncture and herbal medicine, grounded in Wu Xing theory, are practiced worldwide. "Five Element Acupuncture" was popularized by J.R. Worsley in the 1970s.' },
    critique: { title: 'Main critiques',
      body: 'Wu Xing is entirely distinct from modern chemistry\'s elements — "Wood" refers not to actual wood but to the abstract quality of growth. Generation-and-control relationships have not been empirically tested for individual health prediction.' },
    culturalPresence: { title: 'In culture',
      body: 'Ghibli\'s "Princess Mononoke" is steeped in Wu Xing-like cyclical thinking about nature. Japanese and Chinese cuisine consciously balance the five tastes. Yoga and aromatherapy in the West have imported Wu Xing vocabulary.' },
    references: [
      { title: 'Huangdi Neijing', author: 'attributed to the Yellow Emperor', year: '3rd c. BCE' },
      { title: 'The Web That Has No Weaver', author: 'Ted Kaptchuk', year: 1983 }
    ]
  },

  {
    id: 'animal-fortune',
    title: 'Animal Fortune',
    subtitle: 'Kosei Shinrigaku (1990s)',
    era: '1990s —',
    heroSymbol: '獣',
    origin: { title: 'Origins',
      body: 'Animal fortune-telling was systematized by Gemmoto Genryu at the Individuality Psychology Institute in 1997. He extracted 60 patterns from the day and month pillars of Four Pillars astrology and mapped them to 12 animal symbols (wolf, deer, monkey, cheetah, black panther, lion, tiger, tanuki, koala, elephant, sheep, pegasus).' },
    evolution: { title: 'Evolution',
      body: 'The 2000 book "Animal Uranai" sold about 10 million copies in a year, becoming a Japanese cultural phenomenon. Related books, calendars, and even diet books proliferated. It has since become a fixture in corporate training and team-building workshops.' },
    modern: { title: 'Today',
      body: 'The Institute still offers detailed personality descriptions for the 60 patterns, plus compatibility and career suggestions. Used in corporate training, matchmaking events, and educational icebreakers. No psychological validation studies exist.' },
    critique: { title: 'Main critiques',
      body: 'The mapping from Four Pillars to animals is a unique interpretation of the founder. Barnum effects — general statements feeling personal — are strong. No statistical validation compared to Big Five or MBTI.' },
    culturalPresence: { title: 'In culture',
      body: 'Japanese magazines like "an·an" and "CanCam" ran regular features. The phrases "I\'m a wolf type" or "you\'re a pegasus" became casual introduction vocabulary among Japanese youth of the 2000s-2010s. Still used at matchmaking parties as an icebreaker.' },
    references: [
      { title: 'Animal Uranai', author: 'Gemmoto Genryu', year: 1999 },
      { title: 'Introduction to Individuality Psychology', author: 'Gemmoto Genryu', year: 2003 }
    ]
  },

  {
    id: 'celtic-trees',
    title: 'Celtic Tree Astrology',
    subtitle: 'A modern mythology',
    era: '1948 —',
    heroSymbol: '樹',
    origin: { title: 'Origins',
      body: 'Celtic tree astrology was first presented in Robert Graves\'s "The White Goddess" (1948). Graves — a poet and novelist — interpreted ancient Irish myths, poems, and Ogham (Celtic tree letters) to construct a 13-tree seasonal calendar. Graves himself noted in the preface that this was poetic invention, not historical fact.' },
    evolution: { title: 'Evolution',
      body: 'The 1960s counterculture and 1970s Neo-Paganism embraced Graves\'s tree calendar as "genuine ancient Celtic tradition." Helen Mitchell, Liz and Colin Murray developed the system further. The internet era made it ubiquitous in New Age publishing.' },
    modern: { title: 'Today',
      body: 'Established in Neo-Pagan and eco-spiritual communities as a way to anchor identity in trees and season. Ireland and Scotland have absorbed it into cultural tourism. Psychologically, it helps urban dwellers reclaim a lost sense of the natural.' },
    critique: { title: 'Main critiques',
      body: 'Historian Ronald Hutton\'s "Blood and Mistletoe" (2009) demonstrates that Graves\'s tree calendar has no direct connection to actual druidic tradition. It is a 20th-century poetic invention, not an ancient Celtic mystery.' },
    culturalPresence: { title: 'In culture',
      body: 'The tree species chosen for Harry Potter\'s wands (oak, hazel, willow) draw heavily on Graves-derived Celtic tree symbolism. Enya and Loreena McKennitt build entire musical worlds on these symbols — atmospheres of "ancient Celtic" that are in fact 20th-century recreations.' },
    references: [
      { title: 'The White Goddess', author: 'Robert Graves', year: 1948 },
      { title: 'Blood and Mistletoe', author: 'Ronald Hutton', year: 2009 }
    ]
  },

  {
    id: 'mayan-kin',
    title: 'Mayan Kin & Tzolkin',
    subtitle: 'The 13-Moon Calendar',
    era: 'Classic Maya / 1987 —',
    heroSymbol: '⧗',
    origin: { title: 'Origins',
      body: 'The ancient Maya (Classic period, 250-900 CE) used the Tzolkin — a 260-day calendar combining 20 seals and 13 tones. The origin of 260 is debated; a leading hypothesis relates it to Venus\'s synodic period (~584 days). Maya astronomers observed Venus\'s cycle to within 0.08% accuracy.' },
    evolution: { title: 'Evolution',
      body: 'Tzolkin survived the Spanish conquest and is still used by Guatemala\'s Kʼicheʼ daykeepers. In 1987, José Argüelles published "The Mayan Factor," reinterpreting Tzolkin as the "13-Moon Calendar" for individual personality reading. His system spread rapidly after the 1987 "Harmonic Convergence" event.' },
    modern: { title: 'Today',
      body: 'Multiple schools coexist — Argüelles\'s 13-Moon lineage, Ian Xel Lungold\'s system. Japan has a MIKA-lineage with strong influence. Maya scholars generally regard the modern interpretation as a departure from tradition.' },
    critique: { title: 'Main critiques',
      body: 'Ancient Tzolkin was primarily a date-tracking calendar; personality prediction is a modern overlay. Argüelles\'s "end of the Mayan calendar" prophecy for December 21, 2012 was widely criticized by Maya scholars as inconsistent with actual Mayan cosmology. Modern Mayan peoples themselves see it as a cycle boundary, not an end.' },
    culturalPresence: { title: 'In culture',
      body: 'Roland Emmerich\'s "2012" (2009) made the "Mayan end" trope a global phenomenon. Chichén Itzá and Tikal receive New Age tourism around Mayan calendar readings. Netflix short docs like "Bird of Zapatista" show the genuine contemporary daykeeper practice.' },
    references: [
      { title: 'The Mayan Factor', author: 'José Argüelles', year: 1987 },
      { title: 'Time and the Highland Maya', author: 'Barbara Tedlock', year: 1982 }
    ]
  },

  {
    id: 'tarot',
    title: 'Tarot',
    subtitle: 'From game to divination',
    era: '15th c. —',
    heroSymbol: '♛',
    origin: { title: 'Origins',
      body: 'Tarot cards emerged as an aristocratic game in 15th-century northern Italy. The oldest surviving complete deck is the Visconti-Sforza deck (1440s, Morgan Library). Originally not for divination.' },
    evolution: { title: 'Evolution',
      body: '1781: Antoine Court de Gébelin proposed the theory that Tarot originated in ancient Egypt (no historical basis). 19th c.: Éliphas Lévi linked Tarot to Hebrew letters and Kabbalah. 1909: The Rider-Waite deck by A. E. Waite and Pamela Colman Smith became the modern standard. Late 20th c.: Jung\'s student Sallie Nichols framed the Major Arcana as archetypal journey.' },
    modern: { title: 'Today',
      body: 'The most widely practiced Western divination. Some clinical psychologists use Tarot as a projective tool. The 2010s saw a Gen Z resurgence — #tarot on TikTok has 50B+ views. Etsy sales of decks have exploded.' },
    critique: { title: 'Main critiques',
      body: 'No statistical evidence for prediction. Card meanings depend on the reader\'s interpretation; two readers of the same spread give different readings. Framing Tarot as "ancient wisdom" is inaccurate — as divination, it\'s only about 240 years old.' },
    culturalPresence: { title: 'In culture',
      body: 'T.S. Eliot\'s "The Waste Land" (1922) opens with a Tarot reading. Salvador Dalí created his own deck (1978). HBO\'s "Euphoria" and Netflix\'s "Dark" use Tarot as narrative device. "Modern Witch Tarot" (2019) has sold 1M+ copies with an emphasis on diversity.' },
    references: [
      { title: 'The Pictorial Key to the Tarot', author: 'A. E. Waite', year: 1911 },
      { title: 'Jung and Tarot: An Archetypal Journey', author: 'Sallie Nichols', year: 1980 }
    ]
  },

  {
    id: 'birthstones',
    title: 'Birthstones',
    subtitle: 'From breastplate to gem shop',
    era: 'Ancient / 1912 —',
    heroSymbol: '◆',
    origin: { title: 'Origins',
      body: 'Birthstones trace back to the 12 stones on Aaron\'s breastplate (Exodus 28). Their transposition into monthly birthstones was proposed by 1st-century Jewish historian Josephus and church father Jerome. Medieval Polish and Austrian Jewish communities absorbed it as folk practice.' },
    evolution: { title: 'Evolution',
      body: '18th c.: Polish-Jewish merchants brought the custom to the US. 1912: The American National Association of Jewelers established the official list — the birth of modern birthstone culture. Revisions have added tanzanite, spinel, and others. Japan\'s Jewellery Association issued its own list in 1958, adding culturally-fitting stones like pearl and jade.' },
    modern: { title: 'Today',
      body: 'One of the strongest sales-promotion tools in gemstone retail. US gem sales concentrate 30-40% of annual revenue around Mother\'s Day and birth-month purchases. The 2000s brought a fair-trade and ethical-jewelry movement to birthstones.' },
    critique: { title: 'Main critiques',
      body: 'Month-stone correspondences have shifted many times historically. Lists differ across US, UK, Japan, India. The claim that "your birthstone has power" has commercial motivations behind it. No statistical validation for stone effects on personality or fortune.' },
    culturalPresence: { title: 'In culture',
      body: 'Marilyn Monroe\'s "Diamonds Are a Girl\'s Best Friend" (1953) symbolizes the cultural place of gems. De Beers\'s "A Diamond is Forever" campaign (1947) is the most successful gem-marketing campaign in history. Catherine, Princess of Wales inherited Diana\'s sapphire engagement ring.' },
    references: [
      { title: 'The Curious Lore of Precious Stones', author: 'George F. Kunz', year: 1913 },
      { title: 'Gemstones of the World', author: 'Walter Schumann', year: 2013 }
    ]
  },

  {
    id: 'birth-flowers',
    title: 'Birth Flowers',
    subtitle: 'Language of the Victorian garden',
    era: 'Victorian era —',
    heroSymbol: '❀',
    origin: { title: 'Origins',
      body: 'Assigning symbolic meanings to flowers traces to ancient Egypt, Greece, and Rome. But the list-form "monthly birth flowers" developed in Victorian Britain (1837-1901). The era was the golden age of the "language of flowers" (Floriography), with hundreds of interpretation books published, led by Charlotte de La Tour\'s Le Langage des Fleurs (1819).' },
    evolution: { title: 'Evolution',
      body: 'The Victorian flower-language culture was imported to Japan in the Meiji era, fusing with Japan\'s indigenous seasonal-flower poetics. Modern lists vary by country: the RHS in Britain, the Society of American Florists in the US. No unified "official" list exists.' },
    modern: { title: 'Today',
      body: 'Mother\'s Day, Father\'s Day, weddings, and birthdays all see florists promoting "birth flower" bouquets. Cut-flower markets globally (~$100B/year) partly rest on this culture. Horticultural therapy (validated for dementia, depression, PTSD) works in a related space.' },
    critique: { title: 'Main critiques',
      body: 'No unified origin — the "December is Poinsettia" and "December is Camellia" lists are both valid. No research links birth flowers to personality or fortune. Even flower meanings differ subtly across Victorian sources.' },
    culturalPresence: { title: 'In culture',
      body: 'Shakespeare\'s Ophelia distributes symbolic flowers in her mad scene — the language of flowers already existed in the Renaissance. Miyazaki\'s "The Wind Rises" (2013) shows careful floral symbolism. The 2020s have seen #birthflowertattoo trend into millions of posts on Instagram.' },
    references: [
      { title: 'The Language of Flowers', author: 'Kate Greenaway', year: 1884 },
      { title: 'Floriography', author: 'Sally Coulthard', year: 2020 }
    ]
  },

  {
    id: 'biorhythm',
    title: 'Biorhythm',
    subtitle: 'Fliess\'s cycles',
    era: '1897 —',
    heroSymbol: '∿',
    origin: { title: 'Origins',
      body: 'Biorhythm theory was proposed by Berlin ENT doctor Wilhelm Fliess (1858-1928) — Freud\'s friend. He derived the theory from his patients\' symptom records: "men run 23 days, women 28 days." His 1897 book "Der Ablauf des Lebens" launched it. Alfred Teltscher added the intellectual 33-day cycle in 1918; intuitive 38-day came later.' },
    evolution: { title: 'Evolution',
      body: 'In the 1930s-40s, German and Swiss factories used biorhythm for accident prevention. Swissair reportedly incorporated it into pilot scheduling — with unproven effect. 1970s: American calculators had biorhythm built in. Michael Jackson mentioned using it for tour scheduling. Japan popularized it in the 1980s as magazine content.' },
    modern: { title: 'Today',
      body: 'Biorhythm apps still get downloads. Psychologically, the field has essentially abandoned biorhythm since the late 20th century. Real biological rhythms (circadian, menstrual, sleep) hold research interest instead. "Biorhythm" as vocabulary lives on in everyday language.' },
    critique: { title: 'Main critiques',
      body: 'Terence Hines\'s meta-analysis of 40+ studies (1998, Psychological Reports 83) found no meaningful correlation between the cycles and real performance. Robert Todd Carroll\'s Skeptic\'s Dictionary classifies it as pseudoscience.' },
    culturalPresence: { title: 'In culture',
      body: 'Casio calculators with biorhythm functions were popular in 1980s Japan. Casino hotels in America offered biorhythm calculation as amenity. Murakami\'s "Norwegian Wood" (1987) touches on it. In the 2000s, Fitbit and Apple Health\'s real biological tracking has relegated biorhythm to a nostalgic curiosity.' },
    references: [
      { title: 'Der Ablauf des Lebens', author: 'Wilhelm Fliess', year: 1897 },
      { title: 'Comprehensive review of biorhythm theory', author: 'Terence Hines', year: 1998 }
    ]
  },

  {
    id: 'moon-phases',
    title: 'Moon Phases',
    subtitle: 'Lunar Cycles',
    era: 'Prehistoric —',
    heroSymbol: '☾',
    origin: { title: 'Origins',
      body: 'Calendars tracking the moon\'s phases trace back to Paleolithic bone carvings (Le Placard cave, France, ~35,000 years ago) — humanity\'s oldest known calendar. In ancient Babylonia, Egypt, and Greece, phase-based rituals were built into temple systems. Chinese and Japanese lunar calendars ruled long into modern times.' },
    evolution: { title: 'Evolution',
      body: 'Christianity and Islam suppressed some ancient moon-worship, but Gerald Gardner\'s Wicca (1954) revived it. Wicca framed the moon as maiden-mother-crone triple goddess. The 1970s feminist spirituality movement widely adopted this. Modern practice: new moon = write wishes, full moon = release.' },
    modern: { title: 'Today',
      body: 'Moon-phase apps have millions of downloads. Instagram\'s #newmoonritual and #fullmoonritual have billions of views combined. Moon-linked self-care products (The Moon Deck, moon-cycle journals) are a booming segment of the 2010s wellness market. Cajochen et al. (2013, Current Biology) found deep-sleep reduction of ~30% on full-moon nights (N=33, limited but replicated).' },
    critique: { title: 'Main critiques',
      body: 'Rotton & Kelly (1985) and later meta-analyses generally find no reliable moon-behavior correlations. The "full moon effect" is now considered largely a cognitive bias. Moonlight itself does affect sleep in some studies, but personality effects are not established. The tidal effect on the human body is negligible per physics calculation.' },
    culturalPresence: { title: 'In culture',
      body: 'Debussy\'s "Clair de lune," Beethoven\'s "Moonlight Sonata," Kenji Miyazawa\'s "Beast of a Moonlit Night." "Moon phase watches" are a traditional complication in luxury watchmaking — Patek Philippe, Vacheron Constantin. NASA and JAXA lunar missions add scientific reality alongside cultural symbolism.' },
    references: [
      { title: 'The Moon: A Biography', author: 'David Whitehouse', year: 2001 },
      { title: 'Evidence that the lunar cycle influences human sleep', author: 'Cajochen et al., Current Biology 23', year: 2013 }
    ]
  },

  {
    id: 'moon-astrology',
    title: 'Moon Sign Astrology',
    subtitle: 'The lunar sign in the birth chart',
    era: 'Hellenistic —',
    heroSymbol: '☽',
    origin: { title: 'Origins',
      body: 'Western astrology has read the "moon sign" alongside the sun sign since Hellenistic astrology (3rd c. BCE - 5th c. CE). The moon sign represents "emotion, inner life, childhood memory"; the sun, "conscious ego, social expression." Because the moon transits a sign in ~2.5 days, exact birth time is essential.' },
    evolution: { title: 'Evolution',
      body: 'Medieval Indian astrology (Jyotish) emphasizes the moon sign (rashi) even more than the sun. "What is your rashi?" is Indian astrology\'s first question. Late-20th-century psychological astrology (Liz Greene, Steven Forrest) reintroduced moon-sign focus in the West with a Jungian frame. Since 2010, apps like Co-Star input birth time to display the full chart including moon sign.' },
    modern: { title: 'Today',
      body: 'Instagram and TikTok astrology influencers give the moon sign equal or greater weight than the sun sign. "Moon in Pisces" tags associate with sensitivity, empathy, artistic tendencies. Romantic-compatibility readings often say "sun signs are the surface, moon signs are the depth."' },
    critique: { title: 'Main critiques',
      body: 'The moon sign shares the sun sign\'s empirical status — predictive validity is not statistically established. Accurate birth time is often uncertain in hospital records. The modern "moon = unconscious" interpretation is a 20th-century Jungian overlay, not the original Hellenistic reading.' },
    culturalPresence: { title: 'In culture',
      body: 'American artist SZA (born 1989) frequently mentions her moon sign is Scorpio in interviews and lyrics, energizing moon-sign awareness in her generation. Instagram\'s #moonsign has ~1.5B views. Astrology influencer @thebirthchart has millions of TikTok followers. Japanese astrologers like Kagami Ryuji have popularized moon-sign books since the 2010s.' },
    references: [
      { title: 'The Luminaries', author: 'Liz Greene & Howard Sasportas', year: 1992 },
      { title: 'Moon Signs', author: 'Yasmin Boland', year: 2016 }
    ]
  },

  {
    id: 'astrological-milestones',
    title: 'Astrological Milestones',
    subtitle: 'Saturn Return, Jupiter Return, and beyond',
    era: 'Ptolemaic —',
    heroSymbol: '⏂',
    origin: { title: 'Origins',
      body: 'Ptolemy\'s Tetrabiblos (2nd c.) already noted "Jupiter returns" as marking life changes. "Saturn Return" (Saturn returning to its natal position, ~29.5 years) became the most widely discussed concept in late-20th-century psychological astrology. Chiron Return (~50), Jupiter Return (every 12 years) are similar milestones.' },
    evolution: { title: 'Evolution',
      body: 'In 1970s-80s, Liz Greene\'s "Saturn: A New Look at an Old Devil" (1976) reframed Saturn Return as a crisis and opportunity of maturation, delivering the concept to the mass public. Developmental psychologist Daniel Levinson\'s "The Seasons of a Man\'s Life" (1978) and Gail Sheehy\'s "Passages" (1976) popularized life-stage thinking. These traditions cross-pollinated.' },
    modern: { title: 'Today',
      body: '"Saturn Return" is everyday English vocabulary for the 29-30 crisis among millennials. Some therapists refer to it in sessions with clients. Coaching services use astrological milestones as narrative frameworks for locating a client\'s current life stage.' },
    critique: { title: 'Main critiques',
      body: 'No evidence Saturn or Jupiter cause life changes. The 29-30 crisis overlaps Erik Erikson\'s intimacy-vs-isolation stage (18-40) and Levinson\'s early-adult transitions — the same life change can be explained without astrology. Framing changes as "caused by Saturn" may obscure understanding of the actual causes.' },
    culturalPresence: { title: 'In culture',
      body: 'Adele\'s album "30" (2021) is her Saturn Return album — divorce, motherhood, self-reinvention. "Saturn Returns" appears in songs by Caroline Polachek and others. British podcast "Saturn Returns with Caggie" features women in their Saturn Return years. Netflix\'s "Emily in Paris" S3 uses it as a plot device.' },
    references: [
      { title: 'Saturn: A New Look at an Old Devil', author: 'Liz Greene', year: 1976 },
      { title: 'The Seasons of a Man\'s Life', author: 'Daniel Levinson', year: 1978 }
    ]
  },

  {
    id: 'yin-yang',
    title: 'Yin-Yang & I Ching',
    subtitle: 'The two forces and 64 hexagrams',
    era: '3000 BCE —',
    heroSymbol: '☯',
    origin: { title: 'Origins',
      body: 'Yin-Yang duality is legendarily attributed to sage-king Fuxi (~2800 BCE). The 64-hexagram system of the I Ching, combining binary line pairs (broken/unbroken), was systematized in the Zhou dynasty. Both Laozi and Confucius comment extensively on it. Mathematically, 64 = 2^6 anticipates Leibniz\'s binary — Leibniz encountered the I Ching via Jesuit missionaries and marveled at it.' },
    evolution: { title: 'Evolution',
      body: 'In the Han dynasty, the I Ching became one of the Five Classics of Confucianism, remaining a backbone of East Asian thought for 2000 years. Song dynasty Zhu Xi wrote new commentaries that spread across East Asia. In the 20th century, Carl Jung studied the I Ching as an example of "synchronicity" (his foreword to Wilhelm\'s 1923 translation). The 1960s American counterculture embraced it — Bob Dylan, John Cage, Terence McKenna.' },
    modern: { title: 'Today',
      body: 'In mainland China, traditional I Ching studies revived after Reform and Opening. The taiji symbol (☯) is on the Korean flag. Tai Chi Chuan, Traditional Chinese Medicine, and Feng Shui all bear I Ching\'s imprint.' },
    critique: { title: 'Main critiques',
      body: 'I Ching prediction depends on coin-toss randomness. Interpreting "what came up" as "what the universe means" (Jung\'s synchronicity) cannot be statistically validated. Judgments and line texts are 3000-year-old classical Chinese — modern application requires creative translation, introducing arbitrariness. Yin=female, Yang=male binaries also face feminist critique.' },
    culturalPresence: { title: 'In culture',
      body: 'Ghibli\'s "Spirited Away" (2001) is threaded through with Yubaba/Zeniba yin-yang symbolism. K-pop group BTS used taiji imagery in "Yet To Come." Nickelodeon\'s "Avatar: The Last Airbender" (2005-2008) organized its world around four elements in a yin-yang-like dualistic structure. Terence McKenna\'s "Timewave Zero" theory used the 64 hexagrams as a temporal structure.' },
    references: [
      { title: 'I Ching, or Book of Changes (Wilhelm-Baynes)', author: 'trans. Wilhelm & Baynes', year: 1950 },
      { title: 'The I Ching: A Biography', author: 'Richard J. Smith', year: 2012 }
    ]
  },

  {
    id: 'love-archetypes',
    title: 'Love Archetypes',
    subtitle: 'From Jung to modern typologies',
    era: '20th c. —',
    heroSymbol: '♥',
    origin: { title: 'Origins',
      body: '"Love archetypes" apply Carl Jung\'s (1875-1961) archetype theory to romantic relationships. Jung positioned "Lover" as one of the core archetypes of the collective unconscious. His anima (feminine in men) / animus (masculine in women) concepts became widespread tools for analyzing romantic psychology in the late 20th century. 1970s-80s feminist psychology (Jean Shinoda Bolen\'s "Goddesses in Everywoman," 1984) framed goddess figures as women\'s archetypes.' },
    evolution: { title: 'Evolution',
      body: '1990s-2000s: John Gray\'s "Men Are from Mars, Women Are from Venus" (1992) popularized love typology. Susan Piver, Kate Northrup developed women\'s love-archetype workshops. Since the 2010s, Enneagram, attachment theory, and love languages have been fused with love-typology thinking.' },
    modern: { title: 'Today',
      body: 'Love archetypes are everyday vocabulary in matchmaking, couples counseling, and self-help. Japanese astrologers Kagami Ryuji, Shiitake, Suisho Tamago consistently produce bestsellers combining astrology and love psychology. COSMIC ID\'s 12 archetypes belong to this lineage — combining solar elements with numerology at the Jungian-astrological intersection.' },
    critique: { title: 'Main critiques',
      body: 'Love archetype typologies are highly vulnerable to Barnum effects. "You\'re an X so you match with a Y" oversimplifies actual relationship complexity. Statistical validation is far weaker than validated typologies (Big Five, attachment style). Use as a framework for self-observation and conversation is healthier than as prescription.' },
    culturalPresence: { title: 'In culture',
      body: 'The New York Times "Modern Love" podcast (with an Amazon dramatization) archives 2010s shifts in love typology. Korean dramas like "Crash Landing on You" and "Itaewon Class" build their storytelling on clear love-type contrasts. Instagram\'s #datingtypes and #lovearchetypes have billions of views. Dating apps like Feels and The League increasingly market on personality typology.' },
    references: [
      { title: 'The Archetypes and the Collective Unconscious', author: 'C. G. Jung', year: 1959 },
      { title: 'Goddesses in Everywoman', author: 'Jean Shinoda Bolen', year: 1984 },
      { title: 'The 5 Love Languages', author: 'Gary Chapman', year: 1992 }
    ]
  },

  {
    id: 'compatibility',
    title: 'History of Compatibility',
    subtitle: 'East and West',
    era: 'Ancient —',
    heroSymbol: '⚭',
    origin: { title: 'Origins',
      body: 'Traditions of judging compatibility span East and West. Ancient Indian Ayurvedic astrology uses Guna Milan — a 36-point matching system for marriage. Chinese Four Pillars astrology has "he hun" (marriage matching) based on birth pillars, with "six harmony," "three harmony," and "clash" relations at its base. Ptolemy\'s Tetrabiblos already describes synastry (comparing two natal charts).' },
    evolution: { title: 'Evolution',
      body: 'In the late 20th century, psychological astrology (Stephen Arroyo\'s "Relationships and Life Cycles," 1979) reframed synastry from prediction to "reading the challenges of the relationship." Numerology developed Life Path pairing systems via Faith Javane et al. Meanwhile, John Gottman\'s empirical relationship research analyzed thousands of hours of couple interactions to identify the "four horsemen" of collapse (criticism, contempt, defensiveness, stonewalling) — parallel evidence-based research.' },
    modern: { title: 'Today',
      body: 'The dating-app era has re-popularized compatibility. Tinder has generated 8B+ matches; Bumble has 50M+ users. Compatibility algorithms are trade secrets but often incorporate astrological UX elements. Co-Star and Sanctuary feature synastry as headline features. Wedding counselors and coaches use compatibility as a "conversation starter."' },
    critique: { title: 'Main critiques',
      body: 'Statistical studies of astrological compatibility with marriage success are essentially negative. Gottman\'s empirical conclusion is that "compatibility is decided by daily interaction, not initial conditions." Astrological compatibility neglects this dynamic view. Absolutizing a compatibility judgment can become a self-fulfilling prophecy — "we\'re incompatible, so give up."' },
    culturalPresence: { title: 'In culture',
      body: 'HBO\'s "Sex and the City" (1998-2004) weaves astrology and compatibility throughout — references to sun signs, Mr. Big\'s moon sign. K-dramas often use Four Pillars-style compatibility as narrative devices. In East Asian wedding speeches, "we consulted the fortune-teller" remains a cultural staple. Netflix\'s "Love Is Blind" and "The Ultimatum" show compatibility being tested through actual relationship trials.' },
    references: [
      { title: 'Relationships and Life Cycles', author: 'Stephen Arroyo', year: 1979 },
      { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', year: 1999 }
    ]
  }
];
