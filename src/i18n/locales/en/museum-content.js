/**
 * Feature 13: Origin Story Museum exhibits (English).
 */

export const MUSEUM_EXHIBITS = [
  {
    id: 'numerology',
    title: 'Numerology',
    subtitle: 'The philosophy of numbers',
    era: '6th c. BCE —',
    heroSymbol: '∴',
    origin: {
      title: 'Origins',
      body: 'In 6th-century BCE Croton, southern Italy, the Pythagorean school taught that "all is number." ' +
        'Pythagoras (c. 570-495 BCE), known as a geometer and music theorist, discovered that the pitch of a plucked string is proportional to its length in simple whole-number ratios. ' +
        'From this arose the idea that number is the fundamental principle ordering the universe — and that the soul and character must correspond to number as well.'
    },
    evolution: {
      title: 'Evolution',
      body: 'Pythagorean teachings were transmitted orally and survive only in fragments. In the medieval period, Kabbalah systematized the correspondence between letters and numbers (gematria), assigning numerical values to Hebrew letters and reading spiritual meaning from word sums. ' +
        'This tradition profoundly shaped later numerology. In the early 20th century, Mrs. L. Dow Balliett published "The Philosophy of Numbers" (1901), founding modern Western numerology. ' +
        'In the 1970s, Faith Javane and Dusty Bunker popularized the Life Path Number in the English-speaking world.'
    },
    modern: {
      title: 'Today',
      body: 'Psychological validation studies (Wagerman & Funder 2007 and others) have not found statistically significant correlations between Life Path or Expression Number and personality traits. ' +
        'Numerology endures not as a predictor but as a framework for self-reflection. The symbolic system ("1 = beginning, 9 = completion") functions as a useful vocabulary for goal-setting and yearly themes.'
    },
    critique: {
      title: 'Main critiques',
      body: 'The central critique is that no causal mechanism connects numbers and personality — why should someone born 1990-05-15 be "The Explorer of Expression?" ' +
        'Additionally, Life Path reduction methods differ between schools (sum-all-digits vs stepped reduction), so the same person can get different results.'
    },
    culturalPresence: {
      title: 'In culture',
      body: 'Elvis Presley kept "8" as his fate number, using it in many personal designs. ' +
        'Jim Carrey has a documented fascination with "23," which inspired a film of that name. ' +
        'In literature, Dan Brown\'s The Da Vinci Code weaves Fibonacci and Kabbalah into central puzzles. ' +
        'In Japan, the number "4" is culturally avoided as a homophone for death — itself a form of numerological thinking.'
    },
    references: [
      { title: 'Numerology and The Divine Triangle', author: 'Faith Javane & Dusty Bunker', year: 1979 },
      { title: 'The Complete Book of Numerology', author: 'David A. Phillips', year: 2005 },
      { title: 'Blood and Mistletoe: The History of the Druids in Britain', author: 'Ronald Hutton', year: 2009 }
    ]
  },
  {
    id: 'western-astrology',
    title: 'Western Astrology',
    subtitle: 'Sky as mirror',
    era: '2000 BCE —',
    heroSymbol: '☉',
    origin: {
      title: 'Origins',
      body: 'In 2nd-millennium BCE Babylonia, priest-astronomers recorded star movements on clay tablets. ' +
        'They believed celestial motions corresponded to earthly events, and they used astronomical observation to divine the king\'s fortune. ' +
        'The 12-fold zodiac was established in Babylon by around 1000 BCE. At that time, astrology was for kingdoms and weather — not individuals.'
    },
    evolution: {
      title: 'Evolution',
      body: 'In the Hellenistic period (4th-1st c. BCE), astrology transformed in Alexandria into a tool for individual character and fate. ' +
        'In the 2nd century CE, Claudius Ptolemy\'s "Tetrabiblos" synthesized astrological theory and remained authoritative for a millennium. ' +
        'The medieval Islamic world advanced astronomy and astrology together; from there, both entered Europe, and even Kepler and Galileo practiced astrology. ' +
        'After the 17th-century scientific revolution, astrology parted from science and, in the 20th century, entered the mainstream via newspaper columns. ' +
        'Late in the 20th century, Liz Greene and other Jung-inspired writers proposed "psychological astrology," reinterpreting it through archetypal psychology.'
    },
    modern: {
      title: 'Today',
      body: 'Empirically, Shawn Carlson\'s double-blind Nature test (1985) found astrologers matched charts to profiles at chance levels. Subsequent large studies remain negative. ' +
        'Yet cultural presence is enormous. Apps like Co-Star and Sanctuary reached tens of millions of downloads among millennials. ' +
        'Phrases like "Mercury retrograde" have become self-deprecating memes on social media.'
    },
    critique: {
      title: 'Main critiques',
      body: 'Three main pillars. First, no known physical mechanism (a midwife\'s gravity at birth is hundreds of times stronger than a distant planet\'s). ' +
        'Second, empirical predictions do not rise above chance. ' +
        'Third, Earth\'s precession has shifted the constellations about 24° from their ancient assignments — your "Sun sign" actually points to the neighboring constellation.'
    },
    culturalPresence: {
      title: 'In culture',
      body: 'Shakespeare\'s "star-crossed lovers" (Romeo and Juliet) preserves the astrological worldview. ' +
        'Renaissance poet John Donne frequently invoked constellations. ' +
        'Modern brands like Prada and Christian Dior regularly release zodiac-themed collections. Beyoncé\'s "XO" is understood as a self-reference to Cancer.'
    },
    references: [
      { title: 'Tetrabiblos', author: 'Claudius Ptolemy', year: '2nd c. CE' },
      { title: 'The Only Astrology Book You\'ll Ever Need', author: 'Joanna Martine Woolfolk', year: 2012 },
      { title: 'A double-blind test of astrology (Nature 318)', author: 'Shawn Carlson', year: 1985 },
      { title: 'Astrology and the Authentic Self', author: 'Demetra George', year: 2008 }
    ]
  },
  {
    id: 'kyusei-kigaku',
    title: 'Nine Star Ki',
    subtitle: '九星気学 — the ninefold sky',
    era: 'Zhou dynasty —',
    heroSymbol: '⑨',
    origin: {
      title: 'Origins',
      body: 'The Nine Star system is rooted in ancient Chinese Yin-Yang / Five-Element philosophy (Zhou dynasty, 11th-3rd c. BCE) and the Later Heaven arrangement of the Yi Jing. ' +
        'A magic-square diagram called Luo Shu, where nine numbers sum to 15 in every row, column, and diagonal, forms its basis. ' +
        'By legend, the emperor Yu the Great saw the pattern on the shell of a turtle emerging from the river Luo. Mathematically, this is the oldest known magic square in China.'
    },
    evolution: {
      title: 'Evolution',
      body: 'During the Tang-Song era (7th-13th c.), the nine stars became core to directional geomancy and Feng Shui. ' +
        'The concepts of "main star" and "monthly star," plus direction-choosing (for moves and travel), took shape in this period. ' +
        'In Japan\'s Heian era (9th-12th c.), onmyoji priests brought the system across via the Tang embassies. It became folk knowledge through Edo-era almanacs. ' +
        'In 1924, Sonoda Shinjiro systematized modern Kyusei Kigaku in his "Kigaku Daizenshu," which became the base for modern Japanese practice.'
    },
    modern: {
      title: 'Today',
      body: 'Across East Asia, Nine Star Ki functions as the theoretical base for Feng Shui and direction-choosing. In Hong Kong\'s business district, many entrepreneurs still choose office entrances by nine-star geomancy. ' +
        'In Japan, it guides move-in dates and wedding directions; in Korea, cemetery placements. ' +
        'Psychological validation is essentially absent, but as a "yearly theme" framework it retains practical use.'
    },
    critique: {
      title: 'Main critiques',
      body: 'First, no causal mechanism links celestial cycles to individual fortune. ' +
        'Second, the "year boundary" (Feb 4 vs Lunar New Year) differs across schools, so borderline birthdays get inconsistent readings. ' +
        'Third, the Five-Element assignments of the nine stars themselves vary subtly across traditions.'
    },
    culturalPresence: {
      title: 'In culture',
      body: 'East Asian films like "The Fengshui Master" foreground the practice as a cultural motif. ' +
        'In modern Japan, TV programs such as "Toltsu desu ga uranatte mo ii desu ka?" regularly feature Kyusei practitioners.'
    },
    references: [
      { title: 'Kigaku Daizenshu', author: 'Sonoda Shinjiro', year: 1924 },
      { title: 'The Nine Star Ki', author: 'Bob Sachs', year: 1992 },
      { title: 'History of Chinese Feng Shui', author: 'He Xiaoxin', year: 1995 }
    ]
  }
];
