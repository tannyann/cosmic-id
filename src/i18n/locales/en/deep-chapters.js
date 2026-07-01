/**
 * Free extended reading — all 21 cards\' deep chapters (English).
 */

const currentYear = () => new Date().getFullYear();
const age = (y, m, d) => Math.floor((new Date() - new Date(y, m - 1, d)) / (365.25 * 86400000));

export const DEEP_CHAPTERS = {
  unified: [
    {
      title: 'Where three traditions overlap',
      body: (c) => `Western astrology sees you as ${c.sun?.name}, the Chinese zodiac names you ${c.cz?.name}, and the Japanese Nine Star places you at ${c.ks?.name}. Three ancient civilizations sketched the same person under different light. Where they agree, something consistent in you shines through. Where they diverge, that is where your multi-sidedness lives.`
    },
    {
      title: 'The axis of this year',
      body: (c) => `In ${currentYear()} you walk your Personal Year ${c.py}. In numerology\'s 9-year cycle, this is a year of ${c.py === 1 ? 'planting seeds' : c.py === 2 ? 'quiet connection' : c.py === 3 ? 'expression' : c.py === 4 ? 'foundations' : c.py === 5 ? 'change' : c.py === 6 ? 'nurturing' : c.py === 7 ? 'inward turn' : c.py === 8 ? 'harvest' : 'release'}. The reading is a signpost — the path is yours to choose.`
    },
    {
      title: 'On holding many stories at once',
      body: () => `Look at one system alone and its answer feels definitive. Line 19 up and you see there is no single answer. That is not the weakness of divination; it is its richness. A human being can be described in 19 different vocabularies because we are that layered. What numerology cannot catch, the moon phase picks up; what a star sign cannot say, the animal reading names.`
    },
    {
      title: 'You are the one who chooses meaning',
      body: () => `When a reading feels true, that is because you chose to read it that way. Psychology calls it the Forer effect: vague statements about everyone feel personal to you. Use divination not as prophecy but as a mirror. What you do with what you see is the only thing that moves the story.`
    }
  ],

  lifepath: [
    {
      title: 'The light and shadow of your number',
      body: (c) => `Life Path ${c.lp}\'s bright side leans toward ${c.lp === 1 ? 'independence and initiative' : c.lp === 2 ? 'empathy and connection' : c.lp === 3 ? 'expression and joy' : c.lp === 4 ? 'building and trust' : c.lp === 5 ? 'freedom and adventure' : c.lp === 6 ? 'care and responsibility' : c.lp === 7 ? 'inward truth' : c.lp === 8 ? 'power and completion' : 'wholeness and service'}. Its shadow shows when the bright side runs to extremes: ${c.lp === 1 ? 'isolation' : c.lp === 2 ? 'dependence' : c.lp === 3 ? 'scattering' : c.lp === 4 ? 'rigidity' : c.lp === 5 ? 'instability' : c.lp === 6 ? 'interference' : c.lp === 7 ? 'doubt' : c.lp === 8 ? 'control' : 'martyrdom'}. The work isn\'t to suppress the shadow, but to know it as part of you.`
    },
    {
      title: 'Numbers as music',
      body: (c) => `Pythagoras heard music in the ratio of a plucked string and concluded number is music. Your ${c.lp} is one note in a nine-note scale. Combined with your other numbers — birthday, destiny, name — it becomes chord and melody. The Life Path is your main line; the harmony is your whole song.`
    },
    {
      title: 'Meeting your number in this year',
      body: (c) => `In ${currentYear()}, your Life Path ${c.lp} resonates with Personal Year ${c.py}. The combination points to "${c.lp === c.py ? 'a return to your essential self' : Math.abs(c.lp - c.py) <= 2 ? 'a year that strengthens your natural gifts' : 'a year that stretches muscles you don\'t usually use'}". No need to rush, but try things. What seed do you want to hand to yourself a year from now?`
    },
    {
      title: 'The 9-year rhythm',
      body: (c) => `Numerology sees life as a series of 9-year cycles. Your current Personal Year ${c.py} is one chapter within one. Think back nine years — you were in the same Personal Year. What ended, what began? The pattern often reveals itself.`
    }
  ],

  personalYear: [
    {
      title: (c) => `This year\'s theme: "${c.py === 1 ? 'beginning' : c.py === 2 ? 'nurture' : c.py === 3 ? 'expression' : c.py === 4 ? 'foundation' : c.py === 5 ? 'change' : c.py === 6 ? 'care' : c.py === 7 ? 'reflection' : c.py === 8 ? 'harvest' : 'release'}"`,
      body: (c) => `Your Personal Year ${c.py} in ${currentYear()} highlights ${c.py === 1 ? 'new beginnings, leadership, self-expression' : c.py === 2 ? 'partnership, patience, attention to detail' : c.py === 3 ? 'creativity, sociability, play' : c.py === 4 ? 'planning, structure, steady effort' : c.py === 5 ? 'change, freedom, adventure' : c.py === 6 ? 'family, responsibility, love' : c.py === 7 ? 'introspection, spirituality, study' : c.py === 8 ? 'success, money, power' : 'completion, service, letting go'}. What to release: ${c.py === 1 ? 'attachment to the past' : c.py === 2 ? 'carrying everything alone' : c.py === 3 ? 'perfectionism' : c.py === 4 ? 'impulsive change' : c.py === 5 ? 'clinging to stability' : c.py === 6 ? 'over-involvement in others' : c.py === 7 ? 'seeking external approval' : c.py === 8 ? 'decisions driven by fear' : 'rushing to begin'}.`
    },
    {
      title: 'The rhythm within the year',
      body: (c) => `Within a Personal Year there are Personal Months. Starting from your birth month (${c.m}), the Personal Month begins at the same number as your Personal Year and cycles by one each month. Expect a reset near your birthday and a turning-point feeling around six months later (${((c.m + 5) % 12) + 1}).`
    },
    {
      title: 'Reading years as a line, not a point',
      body: (c) => {
        const prev = c.py === 1 ? 9 : c.py - 1;
        const next = c.py === 9 ? 1 : c.py + 1;
        return `What you completed in ${currentYear() - 1} (Personal Year ${prev}) is the ground of this year\'s ${c.py}. And you\'re quietly preparing for ${currentYear() + 1} (Personal Year ${next}) inside this one. Divination reveals meaning as a line more than a point.`;
      }
    },
    {
      title: 'Wearing the number',
      body: (c) => `Small rituals that carry the Personal Year ${c.py} into daily life: ${c.py === 1 ? 'spend one minute at dawn on what you want to begin' : c.py === 2 ? 'thank one person carefully each day' : c.py === 3 ? 'write or draw one feeling each day' : c.py === 4 ? 'give a place five minutes of care' : c.py === 5 ? 'change your route once a week' : c.py === 6 ? 'say a caring word to someone close' : c.py === 7 ? 'write three lines before sleep' : c.py === 8 ? 'acknowledge yourself once a day' : 'release one thing you no longer need'}. Small rituals last.`
    }
  ],

  expression: [
    {
      title: 'The frequency your name carries',
      body: (c) => `Your name is sound uttered hundreds of times a day. That sound is the doorway through which others recognize you. Expression Number ${c.en ?? '-'} is the natural frequency you emit through your name — a frequency around which people and opportunities gather without your effort.`
    },
    {
      title: 'The name you\'re called and the name that calls you',
      body: () => `Modern people carry many names: given, common, nickname, handle. Numerology reads each as a different energy — the given name as your soul\'s blueprint, the common name as your current face, the handle as the self you chose. Together they compose your dimension.`
    },
    {
      title: 'When name and action align',
      body: () => `Anthropologist Victor Turner made "the coherence of name and action" central to ritual analysis. When your name\'s number and your daily action move in the same direction, an inner harmony forms. When they diverge, moving either — the name or the action — can restore the balance.`
    }
  ],

  sun: [
    {
      title: 'The star sign and the breath of the season',
      body: (c) => `While the Sun crosses ${c.sun?.name} in the northern hemisphere, the season is ${c.sun?.name === 'Aries' ? 'the beginning of spring, budding' : c.sun?.name === 'Taurus' ? 'mid-spring, blossoming' : c.sun?.name === 'Gemini' ? 'early summer, growth' : c.sun?.name === 'Cancer' ? 'near the summer solstice, abundance' : c.sun?.name === 'Leo' ? 'high summer, completion' : c.sun?.name === 'Virgo' ? 'late summer, preparing for harvest' : c.sun?.name === 'Libra' ? 'near the autumn equinox, balance' : c.sun?.name === 'Scorpio' ? 'deep autumn, turning inward' : c.sun?.name === 'Sagittarius' ? 'early winter, seeking' : c.sun?.name === 'Capricorn' ? 'near the winter solstice, focus' : c.sun?.name === 'Aquarius' ? 'deep winter, seeds of innovation' : 'the thaw, the promise of spring'}. Your solar energy answers this seasonal rhythm.`
    },
    {
      title: 'The psychological astrology view',
      body: (c) => `In the late 20th century, Liz Greene and Steven Forrest rebuilt astrology around psychology rather than prediction. In their view, ${c.sun?.name} is your primary mode of engaging the world — not your personality. Two people with the same sign can wear it very differently.`
    },
    {
      title: 'The triangle: Sun, Moon, Ascendant',
      body: () => `Astrology holds that the Sun alone doesn\'t tell your story. The Sun is conscious self; the Moon is emotion and unconscious; the Ascendant is the impression others receive. Three points make a dimensional shape. If you want to go deeper, find your birth time and calculate your Ascendant.`
    },
    {
      title: 'Precession and the "actual" star sign',
      body: () => `A skeptic\'s note: Earth\'s precession has shifted the star positions about 30° in the two millennia since ancient Babylonia named the zodiac. The Sun today actually sits in the neighboring constellation from the one your sign points to. Astrologers use the "tropical zodiac" (seasonal), so the sign is really a name for a season, not a physical location in the sky.`
    }
  ],

  moonTrait: [
    {
      title: 'The natal moon phase and temperament',
      body: (c) => `Astrology holds that the moon phase at your birth shapes the base of your emotional pattern. A ${c.mp?.name ?? 'lunar'} birth is said to bring ${c.mp?.name === 'New Moon' ? 'a drive to begin, a hunger to build from nothing' : c.mp?.name === 'Waxing Crescent' ? 'quiet perseverance in nurturing seeds' : c.mp?.name === 'First Quarter' ? 'decisiveness to move forward' : c.mp?.name === 'Waxing Gibbous' ? 'insight and attention to detail' : c.mp?.name === 'Full Moon' ? 'a duality of shining and receiving' : c.mp?.name === 'Waning Gibbous' ? 'the sharing of wisdom, a teaching quality' : c.mp?.name === 'Last Quarter' ? 'the ability to see what to release' : 'preparation for release and the next turning'}.`
    },
    {
      title: 'The moon and the body',
      body: () => `Studies of moon phase and human rhythm have accumulated. Correlations are limited, but a few — like Cajochen et al. (2013, Current Biology) — do find lunar light affecting sleep. Whether or not you accept astrological meaning, moonlight-sensitive rhythms are worth noticing in your own body.`
    },
    {
      title: 'Rituals of new and full moon',
      body: () => `Modern spiritual practice often includes writing wishes at new moon and letting go at full moon. Psychologically these are exercises in verbalizing intention and reflecting on what happened. The writing itself is what does the work; the moon phase is just a cue.`
    },
    {
      title: 'Keeping a mood log',
      body: () => `Try one month of a simple 1-10 daily mood log and compare it later to the moon phase. Most people find their own body less erratic than they imagined. The astrological language of "answering the moon" is a doorway into observing yourself. Data settles what belief cannot.`
    }
  ],

  zodiac: [
    {
      title: 'The clock inside the zodiac',
      body: (c) => `The twelve signs are assigned not only to years but to months, days, and hours. Your birth-year is ${c.cz?.char} (${c.cz?.name}), and combined with month, day, and hour pillars, you get the Four Pillars of Destiny. The year pillar is your "social face," the day pillar your "essence" in many schools.`
    },
    {
      title: 'San He and Liu He bonds',
      body: (c) => `In Chinese astrology, some signs form strong bonds. Your ${c.cz?.char} makes a "San He" (triangle harmony) with ${c.cz?.char === '子' ? '申 and 辰' : c.cz?.char === '丑' ? '巳 and 酉' : c.cz?.char === '寅' ? '午 and 戌' : c.cz?.char === '卯' ? '亥 and 未' : c.cz?.char === '辰' ? '申 and 子' : c.cz?.char === '巳' ? '酉 and 丑' : c.cz?.char === '午' ? '寅 and 戌' : c.cz?.char === '未' ? '亥 and 卯' : c.cz?.char === '申' ? '子 and 辰' : c.cz?.char === '酉' ? '丑 and 巳' : c.cz?.char === '戌' ? '午 and 寅' : '卯 and 未'} birthdays — those tend to feel like natural collaborators.`
    },
    {
      title: 'The calendar behind the animals',
      body: () => `The twelve-fold zodiac isn\'t simply mythology; it\'s a sophisticated calendar. The 12-year cycle tracks Jupiter\'s orbital period (about 11.86 years). The 60-year Chinese calendar aligns with important solar-eclipse cycles. Even setting divination aside, East Asian calendrical astronomy was remarkably precise.`
    }
  ],

  sixty: [
    {
      title: 'The great 60-year wheel',
      body: (c) => `The Sixty Jia Zi combines 10 heavenly stems and 12 earthly branches to make 60 unique labels. Your ${c.sj?.name} is one position. Sixty years from your birth, the same label returns — this is the origin of the "kanreki" 60th-birthday celebration observed for over a millennium in East Asia. Your kanreki lands near the year ${c.y + 60}.`
    },
    {
      title: 'Na Yin and the texture of the elements',
      body: (c) => `The Sixty Jia Zi carries a "Na Yin" element classification that adds nuance to your Five Elements attribution (${c.sj?.element ?? '—'}). Just as a great old oak differs in texture from a young willow, Na Yin refines the flavor of an element. Advanced Four-Pillars readings depend on this layer.`
    },
    {
      title: 'The astronomy behind sixty',
      body: () => `The 60-year cycle approximates Jupiter–Saturn conjunctions (roughly every 20 years, 3× = 60) and Saros eclipse cycles (18 years). Ancient Chinese astronomer-priests understood that 60 was a "magic" number for approximating multiple celestial rhythms. Setting divination aside, the sixty-year cycle is a highlight of ancient observational astronomy.`
    }
  ],

  kyusei: [
    {
      title: 'The duet of main star and monthly star',
      body: (c) => `Nine Star Ki reads not only the main star but the monthly star. Your main is ${c.ks?.name}; combined with the monthly star, you get an inner-and-outer picture. Main is often described as "the you others see," monthly as "the you at home."`
    },
    {
      title: 'Direction-choosing as ancient decision-making',
      body: (c) => `The practical center of Nine Star Ki is direction-choosing — selecting cardinal directions for moves, travel, and important decisions. Empirical support is thin, but the effect of "choosing a direction consciously" as a focus tool is well-recognized in modern psychology. Your main ${c.ks?.name} has favorable and cautionary directions.`
    },
    {
      title: 'Luo Shu — the world\'s oldest known magic square',
      body: () => `Nine Star Ki rests on Luo Shu, a 3×3 magic square in which every row, column, and diagonal sums to 15. Chinese legend has Emperor Yu the Great seeing the pattern on a divine turtle in the River Luo. Mathematically, this is among the earliest magic squares ever devised. Nine Star Ki grew from that mathematical elegance.`
    },
    {
      title: 'Why the year turns at Setsubun',
      body: (c) => `Nine Star Ki changes the year at Setsubun (around Feb 4), not January 1 — a remnant of a solar agricultural calendar. Setsubun is the 315° position of the Sun\'s ecliptic longitude, the first of the 24 solar terms. Astronomically, the year turns at a specific point in Earth\'s orbit. If you were born in January or early February, your Nine Star may be counted as the previous year.`
    }
  ],

  gogyou: [
    {
      title: 'The Five Elements and the body today',
      body: (c) => `The Five Elements (Wood, Fire, Earth, Metal, Water) were ancient China\'s integrated model of body, season, and emotion. Your ${c.gg?.element ?? 'element'} traditionally connects to ${c.gg?.element === 'Wood' ? 'liver and gallbladder, spring, anger' : c.gg?.element === 'Fire' ? 'heart and small intestine, summer, joy' : c.gg?.element === 'Earth' ? 'spleen and stomach, seasonal transitions, thought' : c.gg?.element === 'Metal' ? 'lung and large intestine, autumn, grief' : 'kidney and bladder, winter, fear'}. Traditional Chinese Medicine and acupuncture still use this framework.`
    },
    {
      title: 'The cycles of generation and control',
      body: (c) => `The Five Elements\' power is in two relationships: generation (nourishes) and control (checks). What strengthens your ${c.gg?.element} is ${c.gg?.element === 'Wood' ? 'Water' : c.gg?.element === 'Fire' ? 'Wood' : c.gg?.element === 'Earth' ? 'Fire' : c.gg?.element === 'Metal' ? 'Earth' : 'Metal'}; what you generate is ${c.gg?.element === 'Wood' ? 'Fire' : c.gg?.element === 'Fire' ? 'Earth' : c.gg?.element === 'Earth' ? 'Metal' : c.gg?.element === 'Metal' ? 'Water' : 'Wood'}. Applied to relationships, this gives you two natural directions: those who nourish you and those you nourish.`
    },
    {
      title: 'Everyday colors and tastes',
      body: (c) => `Each element has color and taste. To tune to your ${c.gg?.element}, colors are ${c.gg?.element === 'Wood' ? 'blue and green' : c.gg?.element === 'Fire' ? 'red' : c.gg?.element === 'Earth' ? 'yellow and brown' : c.gg?.element === 'Metal' ? 'white and silver' : 'black and deep blue'}, tastes are ${c.gg?.element === 'Wood' ? 'sour' : c.gg?.element === 'Fire' ? 'bitter' : c.gg?.element === 'Earth' ? 'sweet' : c.gg?.element === 'Metal' ? 'pungent' : 'salty'}. This isn\'t medical advice — it\'s vocabulary for noticing your surroundings.`
    }
  ],

  animal: [
    {
      title: 'The animal system as personality psychology',
      body: (c) => `The Animal reading was systematized in 1990s Japan by Genryu Genmoto and the Individuality Psychology Institute. It extracts a 60-pattern taxonomy from the day and month pillars of Four Pillars astrology, presented with concrete animal metaphors. Your ${c.an?.name} is one type within that layer.`
    },
    {
      title: 'The psychology of animal symbols',
      body: (c) => `Jungian archetype theory holds that humans recognize aspects of themselves through animal symbols. When you say "I\'m a ${c.an?.name} type," you project onto that image. Feeling it "fits" is a signal that you noticed something in yourself.`
    },
    {
      title: 'The 60-type detail and MBTI',
      body: () => `The 12-category version is a doorway to the full 60. If you want more granularity, the Institute\'s books offer 60 types with much finer descriptions. Where MBTI uses abstract axes with 16 types, this system uses 60 concrete scenes. Abstract thinkers often prefer MBTI; storytellers often prefer this. Which are you?`
    }
  ],

  celtic: [
    {
      title: 'The Celtic tree calendar as modern creation',
      body: (c) => `The Celtic tree calendar was proposed by Robert Graves in "The White Goddess" (1948). Historians (Ronald Hutton in particular) have concluded it isn\'t a genuine druidic tradition. That doesn\'t empty it of value — it is a modern spirituality that anchors identity in trees and season. Your ${c.ct?.name} lives inside that reimagined mythology.`
    },
    {
      title: 'What the tree really is',
      body: (c) => `The ${c.ct?.name} in real botany has ${c.ct?.name === 'Birch' ? 'white bark, cold-climate resilience, rapid new growth' : c.ct?.name === 'Rowan' ? 'red berries, folklore of warding' : c.ct?.name === 'Ash' ? 'firm elastic wood, the World Tree of Norse myth' : c.ct?.name === 'Hawthorn' ? 'white spring flowers, symbol of fertility and boundary' : c.ct?.name === 'Oak' ? 'longevity, ancient association with lightning' : c.ct?.name === 'Holly' ? 'evergreen with thorns, hero of the winter solstice' : c.ct?.name === 'Hazel' ? 'the nut of wisdom, the diviner\'s wand' : c.ct?.name === 'Vine' ? 'symbol of sweetness and fermentation' : c.ct?.name === 'Ivy' ? 'clinging life force' : c.ct?.name === 'Reed' ? 'flexibility in wind' : c.ct?.name === 'Elder' ? 'renewal and threshold' : 'deep root and stillness'}. Knowing the actual plant deepens the symbol.`
    },
    {
      title: 'A modern way to speak self through nature',
      body: () => `The Celtic tree calendar spread rapidly in the late 20th century amid urbanization and ecological concern. Locating identity in trees rebuilds a lost feeling for nature. Whether or not the tradition is ancient, the practice of "your tree" changes how you look at the natural world.`
    }
  ],

  maya: [
    {
      title: 'Mayan Kin and the 13-month calendar',
      body: (c) => `Your KIN ${c.mk?.kin} is derived from combinations of the Tzolkin (260-day) and Haab (365-day) calendars. The modern Mayan reading (José Argüelles\'s "13-Moon Calendar") builds on the ancient Tzolkin with 20th-century personality interpretations. Scholars generally see this as a departure from tradition, but as a self-observation framework, it has enthusiasts.`
    },
    {
      title: '20 seals × 13 tones',
      body: (c) => `KIN is expressed as one of 20 Sun Seals combined with one of 13 Galactic Tones. Your seal is ${c.mk?.seal?.name ?? '-'}, your tone ${c.mk?.tone?.name ?? '-'}. The seal is said to reflect your essential quality, the tone how your energy works. Together they form your Galactic Signature. People sharing your KIN, some say, feel a subtle closeness on the 260-day cycle.`
    },
    {
      title: 'What ancient Maya actually saw',
      body: () => `The ancient Maya were renowned for astronomical precision. They tracked Venus\'s synodic period to within 0.08% and predicted eclipses. The Tzolkin\'s 260-day period may relate to Venus\'s 8 rotations (583.92 × 8 ≈ 260 × 18). Setting aside modern interpretive traditions, Maya astronomy is a standalone achievement in the history of science.`
    }
  ],

  tarotBirth: [
    {
      title: 'Birth cards are a late-20th-century idea',
      body: (c) => `The birth-card concept was systematized by Mary K. Greer (1988) and Angeles Arrien. It doesn\'t exist in traditional tarot; it\'s a modern practice. Digit-sum your birthday, reduce below 22, and the corresponding Major Arcana is your "soul theme." Your ${c.tb?.name ?? '-'} was drawn this way.`
    },
    {
      title: 'Tarot and Jungian archetypes',
      body: () => `In the late 20th century, Sallie Nichols (a Jung student) framed the Major Arcana as a sequence of archetypes — the journey from Fool to World as individuation itself. Some clinical psychologists use tarot as a projective test today.`
    },
    {
      title: 'The art of talking with a card',
      body: (c) => `Try holding the image of ${c.tb?.name ?? 'your card'} in mind and observing where it appears in your life — in the street, in dreams. Jung called this "synchronicity." It doesn\'t stand up to statistical testing, but the patterns you find by paying attention are real.`
    }
  ],

  tarotDaily: [
    {
      title: 'The one-a-day practice',
      body: () => `A card a morning is the basic ritual for many tarot practitioners. It offers a lens for the day\'s experience. The randomness isn\'t a predictor; it\'s a prompt for how you\'ll notice. Combined with three lines of journaling, it deepens quickly.`
    },
    {
      title: 'Upright and reversed',
      body: () => `Cards come in upright and reversed positions. Modern reading treats reversed not as "opposite" but as "inward, excess, or lack." If upright is outward, reversed is inward; if upright is realization, reversed is preparation. Same theme, different phase.`
    },
    {
      title: 'Clinical uses of tarot',
      body: () => `Clinical psychologists such as Art Rosengarten (Tarot and Psychology) use tarot as a projective tool — asking clients to speak the associations the images evoke. That draws out unconscious material. Not divination, but a mirror. Your daily card can serve that same use, if you ask yourself what it made you feel.`
    }
  ],

  birthstone: [
    {
      title: 'A history split between tradition and commerce',
      body: (c) => `Birthstones trace back to the 12 stones on Aaron\'s breastplate (Exodus 28), but modern lists are the 1912 American National Association of Jewelers standard. Japan\'s Jewellery Association issued its own list in 1958 and has updated it. Your ${c.m}-month stone may differ by cultural context — a relatively fluid tradition.`
    },
    {
      title: 'The mineralogy for its own sake',
      body: (c) => `Set divination aside and stones are fascinating. Month ${c.m}\'s ${c.m === 1 ? 'garnet is a deep-red silicate colored by iron' : c.m === 2 ? 'amethyst is quartz whose purple comes from trace iron and natural radiation' : c.m === 3 ? 'aquamarine is a beryl species colored by iron' : c.m === 4 ? 'diamond is pure carbon crystallized in deep earth' : c.m === 5 ? 'emerald is a beryl species with chromium giving forest green' : c.m === 6 ? 'pearl is an organic gem formed by mollusks around irritants' : c.m === 7 ? 'ruby is corundum reddened by chromium' : c.m === 8 ? 'peridot is olivine, found in meteorites too' : c.m === 9 ? 'sapphire is corundum blued by iron and titanium' : c.m === 10 ? 'opal is a hydrated silica with play-of-color' : c.m === 11 ? 'topaz is a fluorine-bearing silicate' : 'turquoise is a copper-aluminium phosphate'}. Mineralogy is its own kind of enchantment.`
    },
    {
      title: 'What crystal healing actually does',
      body: () => `Crystal healing has no scientific backing as a physical remedy. But "wearing a stone" or "looking at a stone" as a focus practice does affect attention and self-observation. Including placebo effects, using stones as tools of intention is harmless and can be effective. Try it and see what changes.`
    }
  ],

  birthflower: [
    {
      title: 'Origins and cultural variety',
      body: (c) => `Birth-flower lists have no unified origin. Japan, UK, Korea — all differ. Your month ${c.m}, in one tradition, points to ${c.m === 1 ? 'Carnation (UK) or Narcissus (Japan)' : c.m === 2 ? 'Iris or Violet' : c.m === 3 ? 'Daffodil or Cherry' : c.m === 4 ? 'Daisy or Wisteria' : c.m === 5 ? 'Lily of the valley or Carnation' : c.m === 6 ? 'Rose' : c.m === 7 ? 'Sunflower or Lily' : c.m === 8 ? 'Gladiolus' : c.m === 9 ? 'Aster or Osmanthus' : c.m === 10 ? 'Cosmos' : c.m === 11 ? 'Chrysanthemum' : 'Poinsettia or Camellia'}. Flower-meaning also varies — layered stories on one flower.`
    },
    {
      title: 'Flowers and mind therapy',
      body: () => `Horticultural therapy is a validated psychiatric practice using plants for mental health. Effects on dementia, depression, and PTSD have been shown in research. Beyond birth-flower folklore, "flowers around you" has measurable benefit. Try one small ritual: place your birth flower in your home each year in your month.`
    },
    {
      title: 'The cultural anthropology of flower language',
      body: () => `The language of flowers flourished in Victorian Europe. Under strict social norms, unsaid feelings were sent through flowers. Japan imported and adapted it in the Meiji era. This vocabulary handles emotional nuance that words often cannot. The classical ritual of attaching a birth flower to a letter is still alive.`
    }
  ],

  biorhythm: [
    {
      title: 'The origin of the theory',
      body: (c) => `Biorhythm was proposed by Wilhelm Fliess, a friend of Freud\'s, in the early 20th century. He argued physical rhythm ran on 23 days, emotional on 28, intellectual on 33 (intuitive at 38 was added later). ${c.bio?.days ?? '?'} days have passed since your birth — the sine values give you the three phases you\'re in today.`
    },
    {
      title: 'The meta-analysis',
      body: () => `Terence Hines\'s meta-analysis of 40+ studies (1998, Psychological Reports 83) found no meaningful correlation between biorhythm phases and actual performance. Claims that "accidents spike on critical days" or "grades drop with poor biorhythm" aren\'t supported statistically. Looking at sine waves as a prompt for reflection, however, is harmless.`
    },
    {
      title: 'Real biological rhythms',
      body: () => `More trustworthy cycles are the ones that actually exist: the 24-hour circadian rhythm, the 90-minute sleep cycles (ultradian), the monthly menstrual cycle. These are validated and connect directly to health. Let biorhythm be a stepping-stone toward noticing those real rhythms.`
    },
    {
      title: 'Actually measure yourself',
      body: () => `Log daily mood and energy on a 1-10 scale for a month, then compare to your biorhythm wave. Most people discover they\'re steadier than they thought. Real data always beats prediction. Let biorhythm be the prompt for that experiment.`
    }
  ],

  moon: [
    {
      title: 'What moon phases actually do to the body',
      body: () => `Research on the moon and human behavior is extensive. The conclusion: effects are smaller than expected. But moonlight itself affects sleep in several papers (Cajochen et al., 2013). Basel researchers found 30% less deep sleep on full-moon nights (N=33, limited). The moon\'s light is real, and its effect on your own sleep is worth noticing.`
    },
    {
      title: 'New- and full-moon rituals',
      body: () => `Modern spiritual practice enshrines writing wishes at new moon and letting go at full. Psychologically, these are exercises in intention and reflection. The writing does the work; the moon phase is the cue. No spirituality required — the effect is real.`
    },
    {
      title: 'What the eight phases mean',
      body: () => `The eight lunar phases (new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, last quarter, waning crescent) map onto astrology\'s eight arc from initiation to release. Ask which phase your current project is in — new? First quarter? Waning? The moon becomes a metaphor for decision-making.`
    },
    {
      title: 'Moon and tides — the physics',
      body: () => `The Moon does cause ocean tides, physically. But the human body\'s water sits in a small enclosed volume, so tidal forces are negligible on us — this comes from direct calculation. The felt sense of "the moon pulls" is poetic, not physical. Still, the emotion of looking up at the moon is real.`
    }
  ],

  lifeStagePrev: [
    {
      title: (c) => `Looking back to the ${c.ls?.prev?.age ?? '?'}-year threshold`,
      body: (c) => {
        const prevAge = c.ls?.prev?.age ?? '?';
        const nowAge = age(c.y, c.m, c.d);
        return `Astrology holds you passed a threshold around ${prevAge}. Jupiter Return (12 years), Saturn Return (29–30), Chiron Return (~50), Jupiter-Saturn conjunction (~20). At ${nowAge}, looking back at that threshold reveals how the choices made then compound into now — not as prophecy but as self-understanding after the fact.`;
      }
    },
    {
      title: 'Overlap with developmental psychology',
      body: () => `Erik Erikson divided life into eight developmental stages. Adolescent "identity vs role diffusion" (12–18), early adult "intimacy vs isolation" (18–40), midlife "generativity vs stagnation" (40–65). Astrology\'s Saturn Return (29–30) sits at the climax of the intimacy stage. Divination and psychology may name the same phenomena in different vocabularies.`
    },
    {
      title: 'Journaling the threshold',
      body: () => `Writing life turning points on paper is a psychology-recommended self-understanding practice. Left column "events," right column "how I felt then." Ten entries reveals patterns. Astrology\'s milestone calendar is a catalyst for the timing. Belief in the calendar isn\'t needed — the writing does the work.`
    }
  ],

  lifeStageNext: [
    {
      title: (c) => `Next around ${c.ls?.next?.age ?? '?'}`,
      body: (c) => {
        const nextAge = c.ls?.next?.age ?? '?';
        const nowAge = age(c.y, c.m, c.d);
        const yearsToGo = nextAge - nowAge;
        return `Astrology says you will meet another threshold around ${nextAge} — about ${yearsToGo} years away. Treat this not as prophecy but as a nudge to keep attention there. Psychologist Daniel Levinson argued adulthood alternates between developmental periods and transitional periods. Astrological milestones overlap with those transitions.`;
      }
    },
    {
      title: 'Using the milestone as a "trailer"',
      body: () => `Thinking about what to prepare for the next milestone quietly shifts your present awareness. Peter Gollwitzer\'s research showed subjects who set "if-X-then-Y" implementation intentions in advance succeeded at goals significantly more often. Milestone calendars work as anchors for implementation intentions.`
    },
    {
      title: 'Three preparations for any threshold',
      body: () => `Traditional wisdom and modern psychology converge on three: (1) tend the relationships that support you, (2) build financial resilience, (3) maintain mental practices (meditation, movement, journaling). These beat any specific "fortune." Divination can be the trigger for these preparations, and there its use is genuinely helpful.`
    }
  ]
};
