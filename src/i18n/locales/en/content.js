/**
 * Meaning, interpretation text, and data dictionaries for each divination system.
 * Maps calculation results (indices, names) to human-readable text.
 *
 * This file collects all "words."
 * When adding a new system, add its dictionary here before updating calculations.js.
 */

// ============ Numerology ============
export const LIFE_PATH_MEANINGS = {
  1:  { label: 'Leader · Pioneer',              desc: 'A soul of independence and trailblazing spirit. Here to carve new paths.' },
  2:  { label: 'Harmonizer · Collaborator',     desc: 'Connects people through delicate sensitivity. A person of acceptance and intuition.' },
  3:  { label: 'Expresser · Artist',            desc: 'Spreads creativity and joy into the world. A wielder of words and color.' },
  4:  { label: 'Builder · Craftsman',           desc: 'A soul that lays foundations with steadiness. Shapes form through order and patience.' },
  5:  { label: 'Free Spirit · Adventurer',        desc: 'Feeds on change and experience. Dislikes constraint, like the wind.' },
  6:  { label: 'Lover · Mediator',              desc: 'Deep affection for family and community. Bears beauty and responsibility.' },
  7:  { label: 'Seeker · Mystic',               desc: 'A soul that dives deep within. A quiet observer in search of truth.' },
  8:  { label: 'Achiever · Executive',          desc: 'Power over both material and spiritual realms. Shapes abundance into form.' },
  9:  { label: 'Humanitarian · Completer',      desc: 'A soul that loves widely and knows how to let go. The completion of one journey.' },
  11: { label: 'Master 11 — Illuminator',       desc: 'A soul that carries light through heightened intuition. Lives between tension and spirituality.' },
  22: { label: 'Master 22 — Creator',           desc: 'The power to turn dreams into structures in the world. The most practical of mystics.' },
  33: { label: 'Master 33 — Teacher of Love',   desc: 'A rare soul that embodies unconditional love.' }
};

export const PERSONAL_YEAR_MEANINGS = {
  1: 'A year of planting seeds. The beginning of a new cycle.',
  2: 'A year of nurturing. Cooperation and patience are key.',
  3: 'A year of expression. Enjoy joy and social connection.',
  4: 'A year of building. Steadily strengthen your foundations.',
  5: 'A year of change. Movement and freedom are sought.',
  6: 'A year of responsibility. Family and love take center stage.',
  7: 'A year of introspection. A time for stillness and learning.',
  8: 'A year of harvest. Material success takes shape.',
  9: 'A year of completion. A season of release and reflection.'
};

export const EXPRESSION_MEANINGS = {
  1: 'Name energy: individuality and pioneering spirit.',
  2: 'Name energy: cooperation and mediating vibration.',
  3: 'Name energy: expression and joy.',
  4: 'Name energy: steadiness and patience.',
  5: 'Name energy: change and adventure.',
  6: 'Name energy: love and responsibility.',
  7: 'Name energy: mystery and introspection.',
  8: 'Name energy: power and manifestation.',
  9: 'Name energy: broad love and completion.'
};

// ============ Western Astrology ============
export const SUN_SIGNS = [
  { name: 'Capricorn',  symbol: '♑', element: 'Earth', from: [12, 22], to: [1, 19],  desc: 'Steadfast, responsible, driven to achieve.' },
  { name: 'Aquarius',   symbol: '♒', element: 'Air',   from: [1, 20],  to: [2, 18],  desc: 'Innovation, independence, love of humanity.' },
  { name: 'Pisces',     symbol: '♓', element: 'Water', from: [2, 19],  to: [3, 20],  desc: 'Sensitivity, dreams, an ocean of empathy.' },
  { name: 'Aries',      symbol: '♈', element: 'Fire',  from: [3, 21],  to: [4, 19],  desc: 'Action, pioneering spirit, pure passion.' },
  { name: 'Taurus',     symbol: '♉', element: 'Earth', from: [4, 20],  to: [5, 20],  desc: 'Stability, sensuality, pleasure of the senses.' },
  { name: 'Gemini',     symbol: '♊', element: 'Air',   from: [5, 21],  to: [6, 21],  desc: 'Curiosity, intellect, communication.' },
  { name: 'Cancer',     symbol: '♋', element: 'Water', from: [6, 22],  to: [7, 22],  desc: 'Emotion, home, protective love.' },
  { name: 'Leo',        symbol: '♌', element: 'Fire',  from: [7, 23],  to: [8, 22],  desc: 'Self-expression, creativity, regal presence.' },
  { name: 'Virgo',      symbol: '♍', element: 'Earth', from: [8, 23],  to: [9, 22],  desc: 'Analysis, service, love of refinement.' },
  { name: 'Libra',      symbol: '♎', element: 'Air',   from: [9, 23],  to: [10, 23], desc: 'Harmony, aesthetic sense, relationships.' },
  { name: 'Scorpio',    symbol: '♏', element: 'Water', from: [10, 24], to: [11, 22], desc: 'Depth, transformation, absolute passion.' },
  { name: 'Sagittarius', symbol: '♐', element: 'Fire',  from: [11, 23], to: [12, 21], desc: 'Exploration, freedom, philosophical vision.' }
];

export const MOON_TRAITS = [
  { name: 'Born in the New Moon phase',        desc: 'A soul born holding something budding within. Intuitive and instinctive.' },
  { name: 'Born in the First Quarter phase',   desc: 'A soul born in a wave of challenge and action. Strong drive to step forward.' },
  { name: 'Born in the Full Moon phase',       desc: 'A soul where emotion and consciousness pull against each other. Expressive and magnetic.' },
  { name: 'Born in the Last Quarter phase',    desc: 'A soul born in a wave of release and reflection. Holds depth and wisdom.' }
];

// ============ Eastern Divination ============
export const CHINESE_ZODIAC = [
  { name: 'Zi (Rat)',       char: 'Rat',     desc: 'Quick and clever. Rarely misses an opportunity.' },
  { name: 'Chou (Ox)',      char: 'Ox',      desc: 'Patient and steady. Moves forward one sure step at a time.' },
  { name: 'Yin (Tiger)',    char: 'Tiger',   desc: 'Brave and passionate. Moves like the wind.' },
  { name: 'Mao (Rabbit)',   char: 'Rabbit',  desc: 'Graceful and delicate. Honors harmony.' },
  { name: 'Chen (Dragon)',  char: 'Dragon',  desc: 'Idealism and nobility. A soul of grand scale.' },
  { name: 'Si (Snake)',     char: 'Snake',   desc: 'Intuition and mystery. Sees deeply and quietly.' },
  { name: 'Wu (Horse)',     char: 'Horse',   desc: 'Freedom and swiftness. Lets passion run free.' },
  { name: 'Wei (Goat)',     char: 'Goat',    desc: 'Gentleness and artistry. A warm empath.' },
  { name: 'Shen (Monkey)',  char: 'Monkey',  desc: 'Intellect and wit. A master of curiosity.' },
  { name: 'You (Rooster)',  char: 'Rooster', desc: 'Proud and meticulous. A presence with a voice.' },
  { name: 'Xu (Dog)',       char: 'Dog',     desc: 'Loyalty and justice. A guardian of trust.' },
  { name: 'Hai (Boar)',     char: 'Boar',    desc: 'Frank and courageous. Charges straight ahead.' }
];

export const HEAVENLY_STEMS  = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
export const EARTHLY_BRANCHES = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
export const FIVE_ELEMENTS    = ['木','火','土','金','水'];
export const YIN_YANG         = ['陽','陰'];

export const KYUSEI_STARS = [
  null,
  { name: 'One White Water Star',   element: 'Water', desc: 'Flexible and introspective. Follows the flow and roots deeply.' },
  { name: 'Two Black Earth Star',   element: 'Earth', desc: 'Devotion and diligence. Nurtures like the earth itself.' },
  { name: 'Three Green Wood Star',  element: 'Wood',  desc: 'The vigor of new shoots. A star of outreach and action.' },
  { name: 'Four Green Wood Star',   element: 'Wood',  desc: 'Gentle as the wind. Brings connections and relationships.' },
  { name: 'Five Yellow Earth Star', element: 'Earth', desc: 'The central star. Draws people with strong magnetic pull.' },
  { name: 'Six White Metal Star',   element: 'Metal', desc: 'Heaven and authority. Proud, aspiring toward perfection.' },
  { name: 'Seven Red Metal Star',   element: 'Metal', desc: 'Joy and sociability. Brightens any gathering.' },
  { name: 'Eight White Earth Star', element: 'Earth', desc: 'The mountain star. Change, inheritance, unwavering will.' },
  { name: 'Nine Purple Fire Star',  element: 'Fire',  desc: 'Light and aesthetic sense. Radiates brilliance intuitively.' }
];

export const GOGYOU_DESCS = {
  '木': 'The power to grow. Forward-looking, like a morning of fresh green.',
  '火': 'Burning passion. Illuminates those around with light and warmth.',
  '土': 'The power to receive. Sits firmly at the center.',
  '金': 'The power to refine. Cool, beautiful, blade-sharp intellect.',
  '水': 'The power to flow. Moves deeply and flexibly through all things.'
};

// ============ Animal Fortune ============
export const ANIMAL_NAMES = [
  'Black Panther','Pegasus','Monkey','Koala Bear','Tiger','Tanuki',
  'Koala','Elephant','Cheetah','Lion','Wolf','Sheep'
];

export const ANIMAL_DESC = {
  'Black Panther': 'A keen eye for beauty and novelty. Cool, effortless charisma.',
  'Pegasus':       'A free-spirited genius. Ideas take wing.',
  'Monkey':        'Service-minded and curious. Reads the room like a master.',
  'Koala Bear':    'Thoughtful with strong preferences. A researcher at heart.',
  'Tiger':         'Magnanimous presence. A king who moves at an unhurried pace.',
  'Tanuki':        'Warm and approachable. A gentle wisdom-keeper.',
  'Koala':         'Soothing and observant. Moves at their own rhythm.',
  'Elephant':      'Hardworking and powerful. Strength through persistence.',
  'Cheetah':       'Burst speed and solo action. Runs straight through.',
  'Lion':          'Pride and dignity. Born under a star that draws the spotlight.',
  'Wolf':          'Thinks deeply alone. Holds a world of their own.',
  'Sheep':         'Warm-hearted and cooperative. Shines when moving with others.'
};

// ============ Maya Calendar ============
export const MAYA_SEALS = [
  'Red Dragon','White Wind','Blue Night','Yellow Seed','Red Serpent',
  'White Worldbridger','Blue Hand','Yellow Star','Red Moon','White Dog',
  'Blue Monkey','Yellow Human','Red Skywalker','White Wizard','Blue Eagle',
  'Yellow Warrior','Red Earth','White Mirror','Blue Storm','Yellow Sun'
];

export const MAYA_TONES = [
  'Magnetic ','Lunar ','Electric ','Self-Existing ','Overtone ','Rhythmic ',
  'Resonant ','Galactic ','Solar ','Planetary ','Spectral ','Crystal ','Cosmic '
];

// ============ Tarot ============
export const TAROT_MEANINGS = {
  'The Magician':       'Will and creation. Shapes possibility into form.',
  'The High Priestess': 'Intuition and mystery. Conveys much without speaking.',
  'The Empress':        'Abundance and love. A symbol of nurturing power.',
  'The Emperor':        'Structure and authority. Will that builds stability.',
  'The Hierophant':     'Tradition and teaching. One who bridges worlds.',
  'The Lovers':         'Choice and union. A journey to decide the heart\'s direction.',
  'The Chariot':        'Forward motion and will. Advances by mastering difficulty.',
  'Strength':           'Quiet courage. Shows strength through softness.',
  'The Hermit':         'Inner light. Seeks truth in solitude.',
  'Wheel of Fortune':   'The turning point. Lives within cycles.',
  'Justice':            'Balance and truth. A fair judge.',
  'The Hanged Man':     'A shift in perspective. What becomes visible upside down.',
  'Death':              'Major transition and renewal. A symbol of letting go and moving toward a new self.',
  'Temperance':         'Harmony and integration. Blends two poles together.',
  'The Devil':          'Desire and shadow. A confrontation with primal force.',
  'The Tower':          'Sudden change and insight. Rigid frames may loosen and open new perspective.',
  'The Star':           'Hope and guidance. Quietly radiates light.',
  'The Moon':           'Illusion and intuition. Travels the realm of dreams.',
  'The Sun':            'Joy and manifestation. Light itself.',
  'Judgement':          'Awakening and calling. A summons to a new stage.',
  'The World':          'Completion and integration. A soul that fulfills one journey.',
  'The Fool':           'Innocent beginning. Freedom unbound by anything.'
};

export const TAROT_BY_NUM = [
  'The Fool','The Magician','The High Priestess','The Empress','The Emperor','The Hierophant','The Lovers','The Chariot','Strength','The Hermit',
  'Wheel of Fortune','Justice','The Hanged Man','Death','Temperance','The Devil','The Tower','The Star','The Moon','The Sun','Judgement','The World'
];

// ============ Celtic Tree Oracle ============
export const CELTIC_TREES = [
  { name: 'Birch',         range: [[12, 24], [1, 20]], desc: 'Beginnings, purification, resilience.' },
  { name: 'Rowan',         range: [[1, 21], [2, 17]],  desc: 'Inspiration and protection.' },
  { name: 'Ash',           range: [[2, 18], [3, 17]],  desc: 'Sensitivity, dreaming, connection.' },
  { name: 'Alder',         range: [[3, 18], [4, 14]],  desc: 'Courage and pioneering spirit.' },
  { name: 'Willow',        range: [[4, 15], [5, 12]],  desc: 'Moon-like intuition.' },
  { name: 'Hawthorn',      range: [[5, 13], [6, 9]],   desc: 'Holds an inner flame.' },
  { name: 'Oak',           range: [[6, 10], [7, 7]],   desc: 'Strength and leadership.' },
  { name: 'Holly',         range: [[7, 8], [8, 4]],    desc: 'Dignity and protection.' },
  { name: 'Hazel',         range: [[8, 5], [9, 1]],    desc: 'Knowledge and insight.' },
  { name: 'Vine',          range: [[9, 2], [9, 29]],   desc: 'Sensitivity and sense of balance.' },
  { name: 'Ivy',           range: [[9, 30], [10, 27]], desc: 'Patience and renewal.' },
  { name: 'Reed',          range: [[10, 28], [11, 24]], desc: 'Mystery and hidden power.' },
  { name: 'Elder',         range: [[11, 25], [12, 23]], desc: 'Completion and wisdom.' }
];

// ============ Birthstone · Birth Flower ============
export const BIRTHSTONES = {
  1:  { name: 'Garnet',     meaning: 'Friendship · truth · devotion' },
  2:  { name: 'Amethyst',   meaning: 'Sincerity · peace of mind' },
  3:  { name: 'Aquamarine', meaning: 'Courage · clarity · happiness' },
  4:  { name: 'Diamond',    meaning: 'Purity · enduring love' },
  5:  { name: 'Emerald',    meaning: 'Good fortune · happiness' },
  6:  { name: 'Pearl',      meaning: 'Health · longevity · abundance' },
  7:  { name: 'Ruby',       meaning: 'Passion · victory · dignity' },
  8:  { name: 'Peridot',    meaning: 'Marital happiness · peace of mind' },
  9:  { name: 'Sapphire',   meaning: 'Sincerity · compassion' },
  10: { name: 'Opal',       meaning: 'Hope · happiness · innocence' },
  11: { name: 'Topaz',      meaning: 'Friendship · hope' },
  12: { name: 'Turquoise',  meaning: 'Success · prosperity' }
};

export const BIRTH_FLOWERS = {
  1: 'Carnation',   2: 'Violet',        3: 'Daffodil',
  4: 'Sweet Pea',   5: 'Lily of the Valley', 6: 'Rose',
  7: 'Lily',        8: 'Gladiolus',   9: 'Gentian',
  10: 'Cosmos',     11: 'Chrysanthemum', 12: 'Poinsettia'
};

// ============ Moon phase names (for moonPhaseToday) ============
export const MOON_PHASE_NAMES = [
  'New Moon',
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent'
];

// ============ Life Milestones ============
export const LIFE_MILESTONES = [
  { age: 7,    name: 'First cycle complete',         desc: 'A time when foundations take shape.' },
  { age: 12,   name: 'First Jupiter return',         desc: 'The first expansion of worldview.' },
  { age: 18,   name: 'Lunar node threshold',         desc: 'The soul\'s direction begins to stir.' },
  { age: 24,   name: 'Second Jupiter return',        desc: 'The first expansion into independence.' },
  { age: 28.5, name: 'First Saturn return',          desc: 'A turning point to rebuild one\'s life.' },
  { age: 36,   name: 'Third Jupiter return',         desc: 'Stabilization of social role.' },
  { age: 42,   name: 'Uranus opposition',            desc: 'A midlife awakening.' },
  { age: 48,   name: 'Fourth Jupiter return',        desc: 'A season of mastery and expression.' },
  { age: 57,   name: 'Second Saturn return',         desc: 'Harvest and reconstruction after long years.' },
  { age: 60,   name: 'Sixtieth birthday',            desc: 'A new beginning after one full cycle.' },
  { age: 72,   name: 'Sixth Jupiter return',         desc: 'The threshold of elderhood.' },
  { age: 84,   name: 'Uranus return',                desc: 'Surveying a lifetime of revolution.' }
];

// ============ Free / Premium positioning (copy) ============
export const PRODUCT_PHILOSOPHY = {
  freeBadge: 'Core experience stays free',
  freeHeadline: 'Nineteen stories, open to everyone',
  freeLead: 'With just your birth date and name, you get cross-system results, a summary, and card interpretations across nineteen traditions. The core experience costs nothing.',
  premiumHeadline: 'For those who want to go deeper',
  premiumLead: 'When you want to read more, see a longer timeline, or explore compatibility — Premium opens that door.'
};

/** Pre-launch Premium copy (no pricing or billing yet) */
export const PREMIUM_COMING_SOON = {
  badge: 'Coming soon',
  headline: 'Premium is coming soon',
  lead: 'Deeper readings, longer timelines, compatibility — we\'re preparing it now. Until then, enjoy all nineteen systems for free.',
  teasers: [
    'Master readings for all 19 systems',
    '10-year fortune timeline',
    'Compatibility & moon rituals, and more'
  ],
  modalHeadline: 'Premium is coming soon',
  modalLead: 'Deeper layers will be available after launch. For now, enjoy the free "Read deeper" sections.',
  paymentLinkUrl: import.meta.env?.VITE_STRIPE_PAYMENT_LINK || '',
  paymentCta: 'Subscribe to Premium',
  paymentNote: 'Secure checkout via Stripe. Cancel anytime.'
};

/** What is always free (marketing copy) */
export const FREE_INCLUDES = [
  {
    icon: '○',
    title: 'All nineteen systems',
    desc: 'Numerology, Western astrology, Nine Star Ki, animal fortune… one input, a full overview and story summary.'
  },
  {
    icon: '○',
    title: 'Card-by-card readings',
    desc: 'Tap any system to open a free "Read deeper" interpretation.'
  },
  {
    icon: '○',
    title: 'Tonight\'s moon · biorhythm',
    desc: 'Check today\'s wave and the rhythm from your birth date.'
  },
  {
    icon: '○',
    title: 'Share cards',
    desc: 'Save results as an image or share them as text.'
  }
];

export const PREMIUM_PRICING = {
  monthly: { label: 'Monthly', price: '¥980', per: '/ month' },
  yearly: { label: 'Yearly', price: '¥9,800', per: '/ year', badge: '2 months free' },
  note: 'An optional layer on top of free features. Cancel anytime (when billing is implemented).'
};

/** What Premium unlocks (layer on top of free) */
export const PREMIUM_FEATURES = [
  {
    icon: '✦',
    category: 'Deep reading',
    title: 'Master interpretations for all 19 systems',
    desc: 'Beyond free readings — deeper chapters on each card. Light and shadow, hints across longer time horizons.'
  },
  {
    icon: '◈',
    category: 'Timeline',
    title: '10-year fortune timeline',
    desc: 'Personal years, milestones, and transits woven together — a view of the next decade.'
  },
  {
    icon: '☽',
    category: 'Moon & cycles',
    title: 'New & full moon personal calendar',
    desc: 'Twelve months of rituals and watch dates, aligned with your birth moon phase.'
  },
  {
    icon: '♡',
    category: 'Compatibility',
    title: 'Compatibility reading',
    desc: 'Enter a partner, friend, or colleague. See how your nineteen stories resonate together.'
  },
  {
    icon: '◎',
    category: 'Life design',
    title: 'Aptitude & lucky elements',
    desc: 'Work styles that may suit you, lucky colors, numbers, and days — a compass, not a prescription.'
  },
  {
    icon: '❋',
    category: 'Personal',
    title: 'AI unified narrative',
    desc: 'Weaves nineteen results into one story. A long-form reading made for you (coming soon).'
  },
  {
    icon: '▣',
    category: 'Records',
    title: 'Saved profiles',
    desc: 'Store profiles for family and partners. Revisit and track change over time.'
  },
  {
    icon: '↗',
    category: 'Share',
    title: 'Premium share cards',
    desc: 'High resolution, multiple designs. Compatibility cards and "theme of the year" editions too.'
  },
  {
    icon: '◇',
    category: 'Notifications',
    title: 'Milestone & moon reminders',
    desc: 'Quiet nudges for personal year shifts, full moons, and more (coming soon).'
  }
];

/** Modal overlay copy */
export const PREMIUM_PITCH_LINES = [
  'The free readings are already a rich starting point',
  'What follows is optional — for those who want to go deeper',
  'Nothing here is definitive; you still choose what it means'
];

/** Premium roadmap (idea shelf · outside free scope) */
export const PREMIUM_ROADMAP = [
  { phase: 'In Premium', items: ['Deep card interpretations (demo available)'] },
  { phase: 'In development', items: ['10-year timeline', 'Compatibility', 'Moon calendar'] },
  { phase: 'Concept', items: ['AI unified narrative', 'Saved profiles'] }
];

/** Compatibility mode — axis labels, bands, hints */
export const COMPAT_AXIS_LABELS = {
  lifePath: 'Life Path',
  sun: 'Sun sign',
  zodiac: 'Chinese zodiac',
  gogyou: 'Five Elements',
  kyusei: 'Kyusei star'
};

export const COMPAT_BANDS = [
  { min: 90, key: 'fated', label: 'A fated resonance' },
  { min: 80, key: 'deep', label: 'A deep bond' },
  { min: 70, key: 'stable', label: 'A steady connection' },
  { min: 60, key: 'learning', label: 'A learning relationship' },
  { min: 50, key: 'growing', label: 'A bond that grows with time' },
  { min: 0, key: 'mirror', label: 'A mirror-like contrast' }
];

export const COMPAT_AXIS_HINTS = {
  lifePath: {
    high: 'Life paths echo each other — shared rhythm and direction.',
    mid: 'Different tempos, but room to align over time.',
    low: 'Contrasting paths. Curiosity about differences helps.'
  },
  sun: {
    high: 'Sun signs share element or harmony — natural ease.',
    mid: 'Different styles that can complement each other.',
    low: 'Opposite energies. Balance comes from respect.'
  },
  zodiac: {
    high: 'Chinese zodiac signs support each other.',
    mid: 'Neutral pairing — daily care matters most.',
    low: 'Traditional caution signs — patience and humor help.'
  },
  gogyou: {
    high: 'Five Elements nourish each other.',
    mid: 'Neutral cycle — steady habits build trust.',
    low: 'Controlling cycle — give each other space.'
  },
  kyusei: {
    high: 'Kyusei stars circulate well together.',
    mid: 'Moderate fit — routines bring stability.',
    low: 'Crossing energies — honor each other\'s pace.'
  }
};
