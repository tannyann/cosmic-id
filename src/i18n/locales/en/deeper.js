/**
 * Modal "Read Deeper" content database.
 *
 * Provides `buildDeep(cardKey, ctx)` returning detailed interpretation per divination card.
 * Return shape:
 *   { title, value, label, intro, free: [...], premium: [] }
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
  const { lp, py, en, expr, nameRoman, sun, mt, cz, sj, ks, gy, an, ct, my, tb, dt, bs, bf, bio, mp, ls } = ctx;

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
      premium: []
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
      premium: []
    };

    case 'expression': {
      const profile = expr ?? { native: en, latin: null, hasLatinLetters: false };
      const { native, latin, hasLatinLetters } = profile;
      const roman = nameRoman || '';
      const dual = hasLatinLetters && latin != null;
      const traitOf = (n) => {
        let key = n;
        while (!EXPRESSION_MEANINGS[key] && key > 9) {
          key = String(key).split('').reduce((s, c) => s + +c, 0);
        }
        const raw = EXPRESSION_MEANINGS[key];
        if (!raw) return '';
        const i = raw.indexOf(':');
        return i >= 0 ? raw.slice(i + 1) : raw;
      };
      const nativeTrait = traitOf(native);
      const latinTrait = dual ? traitOf(latin) : '';

      return {
        title: 'Name Number',
        value: dual ? `${native} · ${latin}` : native,
        label: dual ? 'Display name / Roman letters' : (EXPRESSION_MEANINGS[native] || '').replace('Name energy:', ''),
        intro: dual
          ? `From your display name we read ${native}; from "${roman}" we read ${latin}. Both describe how you are called—separate from Life Path ${lp}. Different numbers are not a contest for which is "correct."`
          : `Your name releases the energy of ${native} each time it is spoken—separate from Life Path ${lp}, the number of how you are called.`,
        free: [
          {
            t: 'Display-script name number',
            d: `From your display name: ${native}. This uses a simple Unicode glyph sum for non-Latin scripts—not classical Western numerology. It may suggest ${nativeTrait} as a lens, not a verdict.`
          },
          dual
            ? {
              t: 'Roman / Latin name number (Pythagorean)',
              d: `"${roman}" maps to ${latin} on the usual A–Z chart. ${latinTrait}This is closer to what international numerology often calls the expression number.`
            }
            : {
              t: 'A second axis in Roman letters',
              d: roman && latin == null
                ? 'No A–Z letters were found in the Roman field, so the international number was not calculated. Try a passport or romanized spelling.'
                : 'Add an optional Roman or Latin spelling to also see the international A–Z name number alongside your display name.'
            },
          {
            t: 'Relationship to Life Path',
            d: dual
              ? `Life Path ${lp}, display ${native}, and Roman ${latin} together may show birth essence, everyday calling, and international resonance.`
              : `Life Path ${lp} with display ${native} may show the balance between inner essence and how you are called.`
          },
          { t: 'Hints for renaming', d: 'If your current name feels heavy, a nickname or business name with a different number may invite another wavelength.' }
        ],
        premium: []
      };
    }

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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
    };

    case 'tarotBirth': return {
      title: 'Tarot Birth Card',
      value: tb.name,
      label: `Major Arcana ${tb.num}`,
      intro: `Among the 22 Major Arcana, one card calculated from birth date may be your soul's theme card. Yours is ${tb.name}. ${TAROT_MEANINGS[tb.name]}`,
      free: [
        { t: 'Core of this card', d: TAROT_MEANINGS[tb.name] },
        { t: 'Symbolism of the number', d: `The number ${tb.num} may hold its own meaning in Tarot. Your life may be a journey woven by this number.` },
        { t: 'Shadow side', d: 'Every card holds light and shadow. When it feels heavy, it may reflect a process of change or letting go—not a verdict.' }
      ],
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
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
      premium: []
    };
  }
  return null;
}
