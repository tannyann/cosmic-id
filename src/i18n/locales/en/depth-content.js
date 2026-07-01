/**
 * Card depth 4-layer content dictionary (English).
 * Structure matches ja/depth-content.js.
 */

function digits(n) {
  return String(Math.abs(n)).split('').map(Number);
}

/* Life Path (Numerology) */

export const LIFEPATH_DEPTH = {
  computation: {
    caption: 'Reduce all digits of your birth date to a single digit (or master numbers 11/22/33).',
    steps: (y, m, d) => {
      const all = [...digits(y), ...digits(m), ...digits(d)];
      const sum1 = all.reduce((s, x) => s + x, 0);
      const trace = [
        { label: 'Line up the digits', parts: all },
        { label: 'Sum them all', value: `${all.join(' + ')} = ${sum1}` }
      ];
      let cur = sum1;
      while (cur > 9) {
        if (cur === 11 || cur === 22 || cur === 33) {
          trace.push({ label: `Master number ${cur} is not reduced`, value: cur, master: true });
          break;
        }
        const next = digits(cur).reduce((s, x) => s + x, 0);
        trace.push({ label: 'Reduce until single digit', value: `${digits(cur).join(' + ')} = ${next}` });
        cur = next;
      }
      trace.push({ label: 'Life Path', value: cur, final: true });
      return trace;
    }
  },
  history: {
    origin: 'The Pythagoreans (6th century BCE) taught "all is number" — a vision of numbers as vessels of character and fate. This is the source.',
    evolution: [
      { year: '6th c. BCE', event: 'Pythagorean school links numbers and soul' },
      { year: '9-13th c.', event: 'Kabbalah systematises the correspondence between Hebrew letters and numbers' },
      { year: '1901', event: 'Mrs. L. Dow Balliett publishes "The Philosophy of Numbers", founding modern numerology' },
      { year: '1970s', event: 'Faith Javane and Dusty Bunker popularize the Life Path concept in the English-speaking world' },
      { year: 'Today', event: 'Widely used across the West as a framework for self-reflection' }
    ],
    modernStatus: 'No statistically significant correlation with Big Five or MBTI personality traits has been demonstrated. It endures as a framework of self-reflection.',
    references: [
      { title: 'Numerology and The Divine Triangle', author: 'Faith Javane & Dusty Bunker', year: 1979 },
      { title: 'The Complete Book of Numerology', author: 'David A. Phillips', year: 2005 }
    ]
  },
  famousBy: {
    1: [
      { name: 'Martin Luther King Jr.', birth: '1929-01-15', nation: 'US', craft: 'Civil rights' },
      { name: 'F. Scott Fitzgerald', birth: '1896-09-24', nation: 'US', craft: 'Novelist' }
    ],
    2: [
      { name: 'Madonna', birth: '1958-08-16', nation: 'US', craft: 'Musician' },
      { name: 'Bill Clinton', birth: '1946-08-19', nation: 'US', craft: 'Politician' }
    ],
    3: [
      { name: 'Alfred Hitchcock', birth: '1899-08-13', nation: 'UK', craft: 'Film director' },
      { name: 'Salvador Dalí', birth: '1904-05-11', nation: 'ES', craft: 'Painter' },
      { name: 'Hayao Miyazaki', birth: '1941-01-05', nation: 'JP', craft: 'Animator' },
      { name: 'David Bowie', birth: '1947-01-08', nation: 'UK', craft: 'Musician' }
    ],
    4: [
      { name: 'Bill Gates', birth: '1955-10-28', nation: 'US', craft: 'Entrepreneur' },
      { name: 'Clint Eastwood', birth: '1930-05-31', nation: 'US', craft: 'Actor / director' }
    ],
    5: [
      { name: 'Abraham Lincoln', birth: '1809-02-12', nation: 'US', craft: 'Politician' },
      { name: 'Angelina Jolie', birth: '1975-06-04', nation: 'US', craft: 'Actor' }
    ],
    6: [
      { name: 'Albert Einstein', birth: '1879-03-14', nation: 'DE', craft: 'Physicist' },
      { name: 'John Lennon', birth: '1940-10-09', nation: 'UK', craft: 'Musician' }
    ],
    7: [
      { name: 'Marilyn Monroe', birth: '1926-06-01', nation: 'US', craft: 'Actor' },
      { name: 'Muhammad Ali', birth: '1942-01-17', nation: 'US', craft: 'Boxer' }
    ],
    8: [
      { name: 'Pablo Picasso', birth: '1881-10-25', nation: 'ES', craft: 'Painter' },
      { name: 'Barack Obama', birth: '1961-08-04', nation: 'US', craft: 'Politician' }
    ],
    9: [
      { name: 'Mahatma Gandhi', birth: '1869-10-02', nation: 'IN', craft: 'Independence movement' }
    ],
    11: [{ name: 'Barack Obama', birth: '1961-08-04', nation: 'US', craft: 'Politician' }],
    22: [{ name: 'Dalai Lama XIV', birth: '1935-07-06', nation: 'TB', craft: 'Religious leader' }],
    33: [{ name: 'Mother Teresa', birth: '1910-08-26', nation: 'MK', craft: 'Humanitarian' }]
  }
};

/* Sun sign */

export const SUN_DEPTH = {
  computation: {
    caption: 'From the month and day of your birth, find where the Sun sat on the ecliptic.',
    steps: (y, m, d) => [
      { label: 'Line up month and day', parts: [m, d] },
      { label: 'Match against the boundary dates', value: `${m}/${d}` },
      { label: 'Sun sign', final: true, value: '(see result)' }
    ]
  },
  history: {
    origin: 'The Babylonians laid out 12 constellations along the ecliptic in the 2nd millennium BCE. The Hellenistic world tied them to individual character.',
    evolution: [
      { year: '2000 BCE', event: 'Babylonian priest-astronomers record the 12-fold zodiac' },
      { year: '4th c. BCE', event: 'Aristotle systematizes celestial-terrestrial correspondence' },
      { year: '2nd c. CE', event: 'Ptolemy\'s Tetrabiblos synthesizes astrological theory' },
      { year: 'Medieval-early modern', event: 'Developed further by Islamic and European scholars; splits from science after the 17th c.' },
      { year: '20th c.', event: 'Sun-sign columns bring it to the mainstream; Jungian psychological astrology brings a new depth' }
    ],
    modernStatus: 'Shawn Carlson\'s Nature paper (1985) and other studies find no predictive accuracy above chance. As a vocabulary of self-narration and a set of archetypes, it remains deeply embedded in Western culture.',
    references: [
      { title: 'Tetrabiblos', author: 'Claudius Ptolemy', year: '2nd c. CE' },
      { title: 'The Only Astrology Book You\'ll Ever Need', author: 'Joanna Martine Woolfolk', year: 2012 }
    ]
  },
  famousBy: {
    'Aries':       [{ name: 'Leonardo da Vinci', birth: '1452-04-15', nation: 'IT', craft: 'Polymath' }],
    'Taurus':      [{ name: 'William Shakespeare', birth: '1564-04-23', nation: 'UK', craft: 'Playwright' }],
    'Gemini':      [{ name: 'Paul McCartney', birth: '1942-06-18', nation: 'UK', craft: 'Musician' }],
    'Cancer':      [{ name: 'Dalai Lama XIV', birth: '1935-07-06', nation: 'TB', craft: 'Religious leader' }],
    'Leo':         [{ name: 'Madonna', birth: '1958-08-16', nation: 'US', craft: 'Musician' }],
    'Virgo':       [{ name: 'Michael Jackson', birth: '1958-08-29', nation: 'US', craft: 'Musician' }],
    'Libra':       [{ name: 'John Lennon', birth: '1940-10-09', nation: 'UK', craft: 'Musician' }],
    'Scorpio':     [{ name: 'Marie Curie', birth: '1867-11-07', nation: 'PL', craft: 'Physicist' }],
    'Sagittarius': [{ name: 'Jimi Hendrix', birth: '1942-11-27', nation: 'US', craft: 'Musician' }],
    'Capricorn':   [{ name: 'Isaac Newton', birth: '1643-01-04', nation: 'UK', craft: 'Physicist' }],
    'Aquarius':    [{ name: 'W. A. Mozart', birth: '1756-01-27', nation: 'AT', craft: 'Composer' }],
    'Pisces':      [{ name: 'Albert Einstein', birth: '1879-03-14', nation: 'DE', craft: 'Physicist' }]
  }
};

/* Nine Star (Kyusei) */

export const KYUSEI_DEPTH = {
  computation: {
    caption: 'Sum the digits of your birth year (or the previous year if before Feb 4), then subtract from 11.',
    steps: (y, m, d) => {
      let yy = y;
      const boundary = (m === 1 || (m === 2 && d < 4));
      if (boundary) yy = y - 1;
      const yDigits = digits(yy);
      const sum1 = yDigits.reduce((s, x) => s + x, 0);
      const trace = [{ label: 'Digits of the birth year', parts: yDigits }];
      if (boundary) trace.unshift({ label: 'Before Feb 4 → previous year', value: `${y} → ${yy}` });
      trace.push({ label: 'Sum', value: `${yDigits.join(' + ')} = ${sum1}` });
      let cur = sum1;
      while (cur > 9) {
        const next = digits(cur).reduce((s, x) => s + x, 0);
        trace.push({ label: 'Reduce to a single digit', value: `${digits(cur).join(' + ')} = ${next}` });
        cur = next;
      }
      let star = 11 - cur;
      trace.push({ label: 'Subtract from 11', value: `11 − ${cur} = ${star}` });
      if (star > 9) { star -= 9; trace.push({ label: 'If over 9, subtract 9', value: star }); }
      if (star < 1) { star += 9; trace.push({ label: 'If under 1, add 9', value: star }); }
      trace.push({ label: 'Nine Star', value: star, final: true });
      return trace;
    }
  },
  history: {
    origin: 'Rooted in ancient Chinese Yin-Yang / Five Element thought (Zhou–Han dynasties) and the Later Heaven arrangement of the Yi Jing. The Nine Star assignment matured in the Tang–Song era, and reached Japan in the Heian period.',
    evolution: [
      { year: 'Zhou-Han', event: 'Yin-Yang, five-element and heavenly-stem theory established' },
      { year: 'Tang-Song', event: 'Nine Palaces / Luo Shu correspondence solidifies, becomes part of Feng Shui' },
      { year: 'Heian Japan (9th-12th c.)', event: 'Onmyoji priests bring the system to Japan; ties to the calendar' },
      { year: 'Early 20th c.', event: 'Sonoda Shinjiro systematizes Kyusei Kigaku, bringing it to the public' },
      { year: 'Today', event: 'Used across East Asia for fortune, geomancy, and direction choices' }
    ],
    modernStatus: 'Practiced widely in East Asia as part of Feng Shui and geomancy. Little empirical support, but deeply embedded as a cultural ritual.',
    references: [
      { title: 'Kigaku Daizenshu', author: 'Sonoda Shinjiro', year: 1924 },
      { title: 'The Nine Star Ki', author: 'Bob Sachs', year: 1992 }
    ]
  },
  famousBy: {
    'One White Water Star':    [{ name: 'David Bowie (1947)', birth: '1947-01-08', nation: 'UK', craft: 'Musician' }],
    'Two Black Earth Star':    [{ name: 'Albert Einstein (1879)', birth: '1879-03-14', nation: 'DE', craft: 'Physicist' }],
    'Three Green Wood Star':   [{ name: 'W. A. Mozart (1756)', birth: '1756-01-27', nation: 'AT', craft: 'Composer' }],
    'Four Green Wood Star':    [{ name: 'John Lennon (1940)', birth: '1940-10-09', nation: 'UK', craft: 'Musician' }],
    'Five Yellow Earth Star':  [{ name: 'Hayao Miyazaki (1941)', birth: '1941-01-05', nation: 'JP', craft: 'Animator' }],
    'Six White Metal Star':    [{ name: 'Marilyn Monroe (1926)', birth: '1926-06-01', nation: 'US', craft: 'Actor' }],
    'Seven Red Metal Star':    [{ name: 'Mahatma Gandhi (1869)', birth: '1869-10-02', nation: 'IN', craft: 'Independence' }],
    'Eight White Earth Star':  [{ name: 'Madonna (1958)', birth: '1958-08-16', nation: 'US', craft: 'Musician' }],
    'Nine Purple Fire Star':   [{ name: 'Mother Teresa (1910)', birth: '1910-08-26', nation: 'MK', craft: 'Humanitarian' }]
  }
};

export const CARD_DEPTHS = {
  lifepath: LIFEPATH_DEPTH,
  sun: SUN_DEPTH,
  kyusei: KYUSEI_DEPTH
  // TODO: fill in for the remaining 16 systems
};
