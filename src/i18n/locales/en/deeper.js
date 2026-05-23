/**
 * Modal "Read Deeper" content database.
 *
 * Provides `buildDeep(cardKey, ctx)` returning detailed interpretation per divination card.
 * Return shape:
 *   { title, value, label, intro, free: [...], premium: [...] }
 *
 * - free: detailed interpretation shown for free (~3 items)
 * - premium: deeper content behind blur lock (3–5 items)
 *
 * When adding a new system card:
 *   1. Give the card `data-key="newKey"` in ui.js render()
 *   2. Add case 'newKey' to buildDeep() switch in this file
 *   3. Write both free and premium interpretations
 */

import { LIFE_PATH_MEANINGS, PERSONAL_YEAR_MEANINGS, EXPRESSION_MEANINGS, ANIMAL_DESC, TAROT_MEANINGS } from './content.js';
import { personalYearPrev, personalYearNext } from '../../../util.js';

// free: detailed interpretation visible for free (3–4 items)
// premium: deeper content locked behind premium (3–5 items)
export const LP_DETAILS = {
  1: [
    { t: 'Light side', d: 'Drive and decisiveness. The power to step forward before others and open new paths. A soul that seems meant to lead.' },
    { t: 'Shadow side', d: 'Isolation, pride, stubbornness. When you stop hearing others, you may drift toward a domineering presence.' },
    { t: 'Life purpose', d: 'To raise your own flag. Not to follow in someone else\'s footsteps, but to leave your own trail.' }
  ],
  2: [
    { t: 'Light side', d: 'Empathy, harmony, delicate attunement. Reading the room and quietly connecting people to one another.' },
    { t: 'Shadow side', d: 'Indecision, dependence, excessive self-sacrifice. Staying the "nice person" too long and losing yourself.' },
    { t: 'Life purpose', d: 'To be a bridge. To shine within relationships that cannot be completed alone.' }
  ],
  3: [
    { t: 'Light side', d: 'Expression, optimism, creativity. The power to brighten people through words, color, and laughter.' },
    { t: 'Shadow side', d: 'Moodiness, superficiality, flippancy. A tendency to swim on the surface and avoid depth.' },
    { t: 'Life purpose', d: 'To add joy to the world. The very act of enjoying life may become someone else\'s comfort.' }
  ],
  4: [
    { t: 'Light side', d: 'Diligence, patience, reliability. A craftsman-like soul that builds one layer at a time.' },
    { t: 'Shadow side', d: 'Rigidity, conservatism, inflexibility. Fear of change may pull you into a closed shell.' },
    { t: 'Life purpose', d: 'To build the world\'s foundation. Not flashy, yet becoming a pillar that cannot be done without.' }
  ],
  5: [
    { t: 'Light side', d: 'Adventurous spirit, flexibility, versatility. A wind-like soul that feeds on change and moves freely.' },
    { t: 'Shadow side', d: 'Restlessness, impulsiveness, irresponsibility. A fear of staying with anything long enough.' },
    { t: 'Life purpose', d: 'To gather experience. Not to stay in one place, but to etch the world\'s variety into your being.' }
  ],
  6: [
    { t: 'Light side', d: 'Affection, responsibility, mediation. A warm presence often found at the center of family or community.' },
    { t: 'Shadow side', d: 'Overprotection, meddling, martyr mentality. The moment when care may turn into control.' },
    { t: 'Life purpose', d: 'To bring order through love. Your way of caring may help heal the world.' }
  ],
  7: [
    { t: 'Light side', d: 'Curiosity, intuition, analytical depth. A soul that dives deep and brings truth back to the surface.' },
    { t: 'Shadow side', d: 'Loneliness, criticism, withdrawal from people. Closing your heart to the world around you.' },
    { t: 'Life purpose', d: 'To bridge knowledge. To return to the world what you gained in solitude.' }
  ],
  8: [
    { t: 'Light side', d: 'Execution, leadership, the gift of making things real. Power that may govern both matter and spirit.' },
    { t: 'Shadow side', d: 'Craving for power, forcefulness, attachment to money. A thin line where strength may become coercion.' },
    { t: 'Life purpose', d: 'To give abundance form. Wealth, relationships, and energy are meant to circulate, not merely be held.' }
  ],
  9: [
    { t: 'Light side', d: 'Broad love, humanitarian spirit, wisdom of completion. A presence that may integrate every number.' },
    { t: 'Shadow side', d: 'Escapism, victim mentality, self-righteous idealism. Exhaustion from ideals that feel out of reach.' },
    { t: 'Life purpose', d: 'To complete one cycle and pass it on. To hold the past and release it toward the future.' }
  ],
  11: [
    { t: 'Light side', d: 'Heightened intuition and spirituality. Guiding others as a messenger of light.' },
    { t: 'Shadow side', d: 'Nervous tension, strain, self-doubt. Receiving too much until the heart feels overwhelmed.' },
    { t: 'Life purpose', d: 'To give invisible things visible form. Among bridge-builders, perhaps the most delicate role.' }
  ],
  22: [
    { t: 'Light side', d: 'Master Builder. A rare power to turn dreams into structures in the real world.' },
    { t: 'Shadow side', d: 'Being crushed by responsibility—or running from it.' },
    { t: 'Life purpose', d: 'To realize a large vision. Not alone, but by drawing many people in.' }
  ],
  33: [
    { t: 'Light side', d: 'Master Teacher. A soul that may embody unconditional love.' },
    { t: 'Shadow side', d: 'Control in the name of love—or depletion of love itself.' },
    { t: 'Life purpose', d: 'To teach love itself. A life that may become its own textbook.' }
  ]
};

export function premiumGeneric(systemLabel, valueLabel) {
  return [
    { t: 'Ten-year fortune waves', d: `As ${valueLabel} in ${systemLabel}, you may move through fortune in a 9-year cycle. Details on your next peak year, caution year, and best months for planting seeds.` },
    { t: 'Compatibility reading', d: 'A full guide across 12 quadrants: types that may resonate with your energy, types that stimulate growth, and types worth approaching with care.' },
    { t: 'Career fit', d: `Roles where ${valueLabel} may thrive most, roles that may feel misaligned, and how to express it through side work—read against a modern career map.` },
    { t: 'Soul lesson', d: 'The most important lesson you may be here to meet in this life, and how to recognize its early signs.' },
    { t: 'Notable people with the same sign', d: 'A list of 100 historical and contemporary figures who share this energy. Learning from the choices they made.' }
  ];
}

export function buildDeep(cardKey, ctx) {
  const { lp, py, en, sun, mt, cz, sj, ks, gy, an, ct, my, tb, dt, bs, bf, bio, mp, ls } = ctx;

  switch (cardKey) {
    case 'lifepath': return {
      title: 'Life Path Number',
      value: lp,
      label: LIFE_PATH_MEANINGS[lp].label,
      intro: `Life Path ${lp} is the main theme of your life. It may reflect the role your soul chose before birth. ${LIFE_PATH_MEANINGS[lp].desc}`,
      free: LP_DETAILS[lp] || [
        { t: 'Light side', d: 'Your greatest gift may be sleeping here.' },
        { t: 'Shadow side', d: 'When balance is lost, this side may show itself.' },
        { t: 'Life purpose', d: 'The meaning of choosing this path.' }
      ],
      premium: premiumGeneric('Life Path', String(lp))
    };

    case 'personalYear': return {
      title: 'Personal Year',
      value: py,
      label: `You in ${ctx.currentYear}`,
      intro: `Your personal year follows a 9-year rhythm unique to you. This year is a ${py} year. ${PERSONAL_YEAR_MEANINGS[py]}When you move with this wave rather than against it, fortune may flow more smoothly.`,
      free: [
        { t: 'Tailwinds this year', d: `${PERSONAL_YEAR_MEANINGS[py]}Movement in this direction may be more easily blessed.` },
        { t: 'Pitfalls this year', d: `Conversely, holding on to the previous wave—something like "${PERSONAL_YEAR_MEANINGS[personalYearPrev(py)]}"—may tend to bring stagnation.` },
        { t: 'Signs for next year', d: `Next year is Personal Year ${personalYearNext(py)}. ${PERSONAL_YEAR_MEANINGS[personalYearNext(py)] || 'A turning point toward a new cycle.'} This year\'s choices may become next year\'s starting point.` }
      ],
      premium: [
        { t: 'Monthly fortune calendar', d: 'Twelve months broken down by personal month and personal day. Identify when to act, when to wait, and when to decide.' },
        { t: 'Keywords for this year', d: 'Three keywords given only to you for this year. A compass when judgment feels unclear.' },
        { t: 'Encounters this year', d: 'The kinds of connections that may appear, the directions they may come from, and how to recognize them.' },
        { t: 'Months to watch', d: 'Periods when health, money, or relationships may feel unstable—and rituals that may help restore balance.' }
      ]
    };

    case 'expression': return {
      title: 'Name Number',
      value: en,
      label: EXPRESSION_MEANINGS[en].replace('Name energy:', ''),
      intro: `Your name releases the energy of ${en} into the world each time it is spoken. This is separate from the number of your birth moment (Life Path)—the number of "how you are called."`,
      free: [
        { t: 'What your name calls in', d: `The vibration of ${en} may carry a quality of ${EXPRESSION_MEANINGS[en].split(':')[1]} to those around you.` },
        { t: 'Relationship to Life Path', d: `Combined with Life Path ${lp}, you may see the balance between inner essence and outer resonance.` },
        { t: 'Hints for renaming', d: 'If your current name feels heavy, a nickname or business name with a different number may invite another wavelength.' }
      ],
      premium: premiumGeneric('Name Number', String(en))
    };

    case 'sun': return {
      title: 'Sun Sign',
      value: `${sun.symbol} ${sun.name}`,
      label: `${sun.element} element`,
      intro: `Your sun sign may reveal the core of your self. With the Sun in ${sun.name}, you may embody ${sun.desc}Each birthday, the Sun returns to the same sign and shines on you again.`,
      free: [
        { t: 'Core of this sign', d: `${sun.name} belongs to the ${sun.element} element and may hold a distinct worldview. ${sun.desc}` },
        { t: 'Moments of radiance', d: `${sun.name} may shine brightest in environments aligned with its element. Choose places where ${sun.element} qualities can be expressed.` },
        { t: 'Living with shadow', d: 'Every sign has light and shadow. Daily habits that keep choosing the light may change the quality of your life.' }
      ],
      premium: [
        { t: 'Moon sign and Ascendant', d: 'The Sun is not your only sign. From birth time and place, Moon and Rising may be calculated—a symphony of three stars.' },
        { t: 'Full 12-house analysis', d: 'A complete view of how your sign may be placed across the 12 houses (life areas).' },
        { t: 'Major transits', d: 'How outer planets may affect your chart over the next three years, month by month.' },
        { t: 'Compatibility chart', d: 'Five-layer synastry analysis with partners or family.' },
        { t: 'Past-life chart', d: 'Soul themes from past lives and this life\'s homework, read through the lunar nodes.' }
      ]
    };

    case 'moonTrait': return {
      title: 'Moon Tendency',
      value: mt.name,
      label: 'From the Moon phase at birth',
      intro: `The shape of the Moon in the sky at your birth may shape the "habit" of your emotional rhythm. ${mt.desc}`,
      free: [
        { t: 'Emotional patterns', d: 'Typical ways feelings may move for people born under this lunar phase.' },
        { t: 'How to relate to the Moon', d: 'On full moon nights, new moon nights, and first or last quarter days—you may discover what helps you feel restored.' },
        { t: 'Dream journaling', d: 'Those with strong lunar tendencies may find dreams carrying important messages. Try three minutes of morning recording.' }
      ],
      premium: [
        { t: 'Exact Moon sign', d: 'With birth time and place, another sign entirely may appear—your true emotional language.' },
        { t: 'Moon phase fortune', d: 'Lucky actions by lunar phase for the next 12 months.' },
        { t: 'Moon rituals', d: 'How to compose new moon and full moon ceremonies suited to you each month.' }
      ]
    };

    case 'zodiac': return {
      title: 'Chinese Zodiac',
      value: cz.name,
      label: `Born in the Year of the ${cz.char}`,
      intro: `${cz.name} is the animal you may have chosen within the 12-year cycle of the Eastern calendar. ${cz.desc}People sharing the same sign may meet milestones every 12 years.`,
      free: [
        { t: 'Core of this sign', d: cz.desc },
        { t: 'Benming year', d: 'Every 12 years your own zodiac year returns. Called the "benming year," it may become a life milestone.' },
        { t: 'Compatibility hints', d: 'Liuhe (strongest match), Sanhe (good bond), Chong (stimulating clash)—combinations in the zodiac may carry deep meaning.' }
      ],
      premium: [
        { t: 'Liuhe, Sanhe, and Chong map', d: 'A full relationship map between your sign and all others. Dynamics with family, lovers, and bosses may become visible.' },
        { t: 'Hour pillar (birth-hour zodiac)', d: 'Not only birth year—birth hour may also hold a zodiac sign. This may be your inner zodiac.' },
        { t: 'Twelve life stages', d: 'Where you may be among life\'s twelve stages: birth, growth, prosperity, decline, renewal…' }
      ]
    };

    case 'sixty': return {
      title: 'Year Pillar (Sexagenary Cycle)',
      value: sj.name,
      label: `${sj.yinyang} ${sj.element}`,
      intro: `The sexagenary cycle creates 60 imprints from the ten heavenly stems and twelve earthly branches. The same year pillar may return only once every 60 years. Your year pillar carries the quality of ${sj.yinyang} ${sj.element}.`,
      free: [
        { t: 'Your heavenly stem', d: `The stem ${sj.name[0]} represents ${sj.yinyang} ${sj.element} and may form the foundation of character.` },
        { t: 'Your earthly branch', d: `The branch ${sj.name[1]} may show the flow of fate, returning to the same position every 12 years.` },
        { t: 'Traits of the same pillar', d: 'Because this imprint returns only every 60 years, you may share rare common ground across generations.' }
      ],
      premium: [
        { t: 'All four pillars', d: 'Not only the year pillar—month, day, and hour pillars calculated together may complete your Four Pillars chart.' },
        { t: 'Ten Gods and Twelve Stages', d: 'The heart of Four Pillars astrology. Social life, wealth, family, and health may all come into view.' },
        { t: 'Ten-year luck cycles', d: 'Major luck divided into 10-year periods. Which cycle you may be in now, and what may come next.' }
      ]
    };

    case 'kyusei': return {
      title: 'Honmei Star (Nine Star Ki)',
      value: ks.name,
      label: `${ks.element} star`,
      intro: `Nine Star Ki derives your "honmei star" from birth year—a divination unique to Japan. With ${ks.name} as your honmei star, you may embody ${ks.desc}This star may create a 9-year cycle of fortune.`,
      free: [
        { t: 'Essence of the honmei star', d: ks.desc },
        { t: 'Nine-year cycle', d: 'Honmei star fortune may complete one round in 9 years—planting, nurturing, harvest, and clearing in rotation.' },
        { t: 'Basics of lucky directions', d: 'In Nine Star Ki, lucky directions may be determined by honmei and getsumei stars. Moving, travel, or career direction may shift fortune.' }
      ],
      premium: [
        { t: 'Getsumei and Nichimei stars', d: 'Beyond honmei—getsumei and nichimei calculated together may complete your Ki profile.' },
        { t: 'Lucky directions this year and next', d: 'Your personal lucky-direction calendar, changing each year—down to the month of greatest fortune.' },
        { t: 'Dokai and Hidokai years', d: 'Years when major turning points may arrive, and how to read their signs.' },
        { t: 'Star compatibility', d: 'A five-layer compatibility table between honmei stars—for family, love, and work.' }
      ]
    };

    case 'gogyou': return {
      title: 'Five Elements',
      value: gy.element,
      label: 'Element of birth year',
      intro: `The Five Elements are the five basic forces that may compose the world. You may have come with ${gy.element} at your core. ${gy.desc}`,
      free: [
        { t: 'Your element', d: gy.desc },
        { t: 'Generating (supporting) cycle', d: 'Wood feeds Fire, Fire creates Earth, Earth bears Metal, Metal collects Water, Water nourishes Wood. You may find people whose element supports yours.' },
        { t: 'Overcoming (restraining) cycle', d: 'Wood restrains Earth, Earth absorbs Water, Water extinguishes Fire, Fire melts Metal, Metal cuts Wood. Restraining relationships may create tension and growth.' }
      ],
      premium: [
        { t: 'Your Five Elements balance', d: 'Ratios calculated from birth date and time. What may be abundant and what may be lacking.' },
        { t: 'How to supplement missing elements', d: 'A practical list—color, food, direction, stones, habits—to nourish what feels absent.' },
        { t: 'Five Elements compatibility map', d: 'A full chart compared with another person\'s elements. Who may support you and who may drain you, at a glance.' }
      ]
    };

    case 'animal': return {
      title: 'Animal Fortune',
      value: an.name,
      label: `Personality number ${an.num}/60`,
      intro: `Animal fortune derives one of 60 personality numbers from birth date and classifies them into 12 animals. You are ${an.name}. ${ANIMAL_DESC[an.name] || ''}`,
      free: [
        { t: 'Basic character', d: ANIMAL_DESC[an.name] || '' },
        { t: 'Group classification', d: 'The 12 animals may divide into three groups: Moon (dreamer), Earth (realist), and Sun (sensitive).' },
        { t: 'Meaning of personality number', d: `Your personality number is ${an.num}. Its place among 60 may suggest finer shades of character.` }
      ],
      premium: [
        { t: 'Full 60-type profile', d: `Detailed reading for personality number ${an.num}. The same number may appear only once every 60 days.` },
        { t: 'Leader type or supporter type', d: 'Even within the same animal, leader and supporter types may differ. Your true role in the group.' },
        { t: 'Compatibility with all 12 animals', d: 'Complete mapping for love, work, and friendship across all 60×60 pairings.' },
        { t: 'Hidden character', d: 'Another you beneath the surface—the animal that may emerge under stress.' }
      ]
    };

    case 'celtic': return {
      title: 'Celtic Tree Oracle',
      value: ct.name,
      label: 'One of thirteen sacred trees',
      intro: `Ancient Celtic druids divided the year into thirteen lunar months, each paired with a tree. Your guardian tree is ${ct.name}. ${ct.desc}`,
      free: [
        { t: 'Power of the guardian tree', d: ct.desc },
        { t: 'Druid wisdom', d: 'In the Celtic forest, every tree was said to hold a different spirit. Your tree may be the spirit your soul borrowed from the woods.' },
        { t: 'Rituals with your tree', d: 'Deep breathing before your guardian tree, picking up a single leaf—something in you may quietly settle.' }
      ],
      premium: [
        { t: 'Ogham letters', d: 'Ancient Celtic letters paired with each tree. Your personal symbol, ready to carve as a talisman.' },
        { t: 'Guardian animal and stone', d: 'The animal and stone that may appear alongside your tree.' },
        { t: 'Seasonal rituals', d: 'Ceremonies with your tree at the equinoxes and solstices—the four seasonal festivals.' },
        { t: 'Compatible trees', d: 'Which trees in the Celtic forest may yield the richest fruit when paired with yours.' }
      ]
    };

    case 'maya': return {
      title: 'Mayan Calendar KIN',
      value: `KIN ${my.kin}`,
      label: `${my.tone} ${my.seal}`,
      intro: `The sacred Mayan Tzolk'in calendar runs in a 260-day cycle with 260 KIN. Your KIN is ${my.kin}, seal "${my.seal}," galactic tone "${my.tone}." The seal may reflect essence; the tone, rhythm.`,
      free: [
        { t: 'Meaning of the seal', d: `${my.seal} is one of 20 seals—a symbol that may express your essence.` },
        { t: 'Meaning of galactic tone', d: `${my.tone} is one of 13 rhythmic tones—it may suggest the tempo of your life.` },
        { t: 'Uniqueness of KIN number', d: 'Someone with your exact KIN may be born only once every 260 days. Roughly 25 million kindred spirits may exist worldwide.' }
      ],
      premium: [
        { t: 'Guide, antipode, and analogous KIN', d: 'The KIN that may guide you, mirror you, and resonate with your energy—fully identified.' },
        { t: '13-day wavespell', d: 'Your life\'s 13-day cycle. Where you may be now, and what wave may come next.' },
        { t: 'Galactic signature', d: 'Your complete galactic name—KIN, seal, tone, castle, and chakra together.' },
        { t: 'Daily KIN reading', d: 'A daily Mayan calendar interpreting how today\'s KIN relates to yours.' }
      ]
    };

    case 'tarotBirth': return {
      title: 'Tarot Birth Card',
      value: tb.name,
      label: `Major Arcana ${tb.num}`,
      intro: `Among the 22 Major Arcana, one card calculated from birth date may be your soul's theme card. Yours is ${tb.name}. ${TAROT_MEANINGS[tb.name]}`,
      free: [
        { t: 'Core of this card', d: TAROT_MEANINGS[tb.name] },
        { t: 'Symbolism of the number', d: `The number ${tb.num} may hold its own meaning in Tarot. Your life may be a journey woven by this number.` },
        { t: 'Reversed warning', d: 'Every card has a shadow. When your card appears reversed, you may learn what is asking for attention.' }
      ],
      premium: [
        { t: 'Personal Minor Arcana cards', d: 'Calculate the Minor Arcana suits (Swords, Cups, Wands, Pentacles) moving behind the Major Arcana.' },
        { t: 'Theme card for this year', d: 'The card that changes each year—what you may be learning and what you may be releasing.' },
        { t: 'Shadow card', d: 'Another you hidden in the shadow of your birth card—themes beneath awareness.' },
        { t: 'Full seven-card spread', d: 'A life spread across past, present, future, obstacle, hope, unconscious, and outcome.' }
      ]
    };

    case 'tarotDaily': return {
      title: 'Today\'s Card',
      value: dt.name,
      label: 'For you today',
      intro: `On this particular day, the card drawn from your name and today's date is ${dt.name}. ${dt.desc}`,
      free: [
        { t: 'Today\'s message', d: dt.desc },
        { t: 'Why this card appeared', d: 'Cards may not appear by accident—they may arrive with the message needed at the needed moment.' },
        { t: 'How to spend today', d: 'When you align the day with this card\'s energy, things may surprisingly flow more smoothly.' }
      ],
      premium: [
        { t: 'Seven-day card reading', d: 'A seven-day spread from today—themes and actions to choose each day.' },
        { t: 'Main card for this month', d: 'The one card that may symbolize your month—a monthly theme.' },
        { t: 'Celtic Cross spread', d: 'The most classical reading—ten cards analyzing your situation from many angles.' }
      ]
    };

    case 'birthstone': return {
      title: 'Birthstone',
      value: bs.name,
      label: `${ctx.m} birthstone`,
      intro: `A birthstone is the gem paired with your birth month. Yours is ${bs.name}. ${bs.meaning} is said to dwell within it, and it has long been worn as a talisman.`,
      free: [
        { t: 'Power of the gem', d: bs.meaning },
        { t: 'How to wear it', d: 'Birthstones may work best when kept close to the skin—rings, necklaces, bracelets, and the like.' },
        { t: 'Cleansing methods', d: 'Stones may absorb energy too. Moonlight, crystal clusters, or sage smoke may help with regular cleansing.' }
      ],
      premium: [
        { t: 'Your top three guardian stones', d: 'Three supporting stones beyond your birthstone, derived from birth date and honmei star—combined for synergy.' },
        { t: 'Science of gemstones', d: 'Crystal structure, wavelength, and energy—read from both spiritual and scientific angles.' },
        { t: 'Gem rituals', d: 'Meditation with stones and crystal grids composed for different intentions.' }
      ]
    };

    case 'birthflower': return {
      title: 'Birth Flower',
      value: bf,
      label: `${ctx.m} flower`,
      intro: `A birth flower is a representative bloom for each month. Yours is ${bf}. Flowers have long been seen as mirrors reflecting the state of the soul.`,
      free: [
        { t: 'Symbol of the flower', d: 'A symbol of your birth month. Having it nearby may help settle the heart.' },
        { t: 'Language of flowers', d: 'Every flower has its own language—the birth flower\'s meaning may function as a message for your life.' },
        { t: 'Living with flowers', d: 'A single birth flower on your desk—some days, that alone may be enough to set the tone.' }
      ],
      premium: [
        { t: 'Birth flower by date', d: 'Not only by month—365 birth flowers may be assigned by calendar date. Your very own bloom.' },
        { t: 'Flower fortune calendar', d: 'A lucky flower each month—using blooms suited to you throughout the year.' },
        { t: 'Flower remedies', d: 'From Bach flower remedies, a list of 38 essences aligned with your honmei star and numerology.' }
      ]
    };

    case 'biorhythm': return {
      title: 'Biorhythm',
      value: `Day ${bio.days.toLocaleString()}`,
      label: 'Days since birth',
      intro: `Biorhythm is a 20th-century practice that calculates waves of physical, emotional, intellectual, and intuitive energy from days since birth. You are now on day ${bio.days.toLocaleString()}.`,
      free: [
        { t: 'Four waves', d: `Physical: 23-day cycle; emotional: 28 days; intellectual: 33 days; intuitive: 38 days. Your current values may be physical ${(bio.physical*100).toFixed(0)}, emotional ${(bio.emotional*100).toFixed(0)}, intellectual ${(bio.intellectual*100).toFixed(0)}, intuitive ${(bio.intuitive*100).toFixed(0)}.` },
        { t: 'Critical days', d: 'Days when a wave crosses zero are called "critical days"—judgment errors and accidents may be more likely.' },
        { t: 'Waves and action', d: 'Rising: advance; falling: protect; peak: showcase; trough: rest. Moving with the wave may reduce exhaustion.' }
      ],
      premium: [
        { t: '90-day forecast calendar', d: 'Four-wave forecast for the next 90 days—optimal dates for meetings, interviews, dates, moves, and more.' },
        { t: 'Combined biorhythm for two', d: 'Overlay biorhythms with a partner or family to find days to move together and days to rest apart.' },
        { t: 'Critical day alerts', d: 'Advance notice when critical days approach—perhaps the strongest accident-prevention measure.' }
      ]
    };

    case 'moon': return {
      title: 'Tonight\'s Moon',
      value: mp.name,
      label: `Phase ${(mp.phase * 100).toFixed(1)}%`,
      intro: `The Moon in tonight's sky is ${mp.name}. The phase is ${(mp.phase * 100).toFixed(1)}%. Lunar cycles may affect plants, the sea, the body, and the heart. What you feel right now may partly be the Moon's influence.`,
      free: [
        { t: 'Meaning of the phase', d: 'New moon: beginnings; first quarter: challenge; full moon: completion; last quarter: release. What may tonight\'s Moon be inviting?' },
        { t: 'Moon and emotion', d: 'Three days before and after full or new moon, feelings may move more easily—good timing for rituals to begin or end something.' },
        { t: 'Moon rituals', d: 'Write wishes at new moon, offer gratitude at full moon—a simple, ancient way to work with lunar energy.' }
      ],
      premium: [
        { t: '12-month new and full moon calendar', d: 'New and full moons for the next 12 months, their signs, and how they may affect you.' },
        { t: 'Personal lunar cycle', d: 'How today\'s phase relates to your birth moon phase—turning points in life may appear here.' },
        { t: 'Moonlight bathing ceremony', d: 'A monthly full-moon ritual just for you—strengthening wishes, releasing what no longer serves.' }
      ]
    };

    case 'lifeStagePrev': return {
      title: 'Recent Life Milestone',
      value: ls.prev ? `Age ${ls.prev.age}` : '—',
      label: ls.prev ? ls.prev.name : '',
      intro: ls.prev ? `At age ${ls.prev.age}, you may have passed through "${ls.prev.name}." ${ls.prev.desc}` : 'You have not yet reached your first major milestone.',
      free: ls.prev ? [
        { t: 'Meaning of this milestone', d: ls.prev.desc },
        { t: 'What may happen around then', d: 'At major life milestones, relationships, work, or home may often shift significantly.' },
        { t: 'Reflection questions', d: `At age ${ls.prev.age}, what was happening for you? Writing it out now may reveal patterns in your life.` }
      ] : [],
      premium: [
        { t: 'Analysis of all past milestones', d: 'A complete list of milestones from birth to today—what happened then, what changed.' },
        { t: 'Hidden milestones', d: 'Important astrological transits not widely known—quiet turning points in your life.' },
        { t: 'Milestone chain patterns', d: 'Themes that may repeat at your milestones. Preparation for what may come next.' }
      ]
    };

    case 'lifeStageNext': return {
      title: 'Next Life Milestone',
      value: ls.next ? `Age ${ls.next.age}` : '—',
      label: ls.next ? ls.next.name : '',
      intro: ls.next ? `Your next life milestone may be at age ${ls.next.age}: "${ls.next.name}." It may arrive in about ${(ls.next.age - ls.years).toFixed(1)} years. ${ls.next.desc}` : 'You may be in a quiet stretch between major milestones.',
      free: ls.next ? [
        { t: 'Meaning of this milestone', d: ls.next.desc },
        { t: 'What to prepare', d: 'Signs may begin quietly several years before a major milestone. Listen to the inner voice.' },
        { t: 'Signs of opportunity', d: 'Around this milestone, new connections, places, or roles may be more likely to appear. Staying open may help.' }
      ] : [],
      premium: [
        { t: 'Complete ten-year timeline', d: 'Every milestone that may arrive in the next ten years, its meaning, and how best to prepare.' },
        { t: 'Timing for marriage, birth, career change', d: 'Transit analysis to identify favorable timing for life\'s major decisions.' },
        { t: 'Trial periods and how to meet them', d: 'Milestones may often bring trials. Knowing ahead may help the heart prepare.' }
      ]
    };
  }
  return null;
}
