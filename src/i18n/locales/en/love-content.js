/**
 * Love reading content dictionary (English).
 * love.js reads these via getContent().LOVE_ARCHETYPES etc.
 */
export const LOVE_ARCHETYPES = [
  { id: 1, key: 'fire-warrior', color: '#d97a5e', icon: '⚔︎',
    name: 'Ember Warrior', catch: 'Love that burns straight',
    story: 'You lead with warmth rather than strategy. Speed and honesty are your gifts; you can light a spark in another heart.',
    sweetSpots: ['You can move first when someone else is stuck','You put feelings into plain words, which lets the other person exhale','You have the strength to protect a relationship through hard weather'],
    cares: ['Your pace runs hot; leaving room for their stride helps it last','Silence between you is also love — no need to rush the answer'],
    matches: ['moon-healer', 'forest-sage', 'spring-dancer']
  },
  { id: 2, key: 'sun-celebrant', color: '#e8b85e', icon: '☀︎',
    name: 'Sun Celebrant', catch: 'Love that shares abundantly',
    story: 'You can be genuinely glad for someone else\'s joy. Time with you tends to feel like a small festival.',
    sweetSpots: ['You show care openly, and the other person feels held','You can turn hard weeks into laughter and bring the light back','You honour anniversaries and small celebrations'],
    cares: ['Give as generously to yourself as you do to others','Listen for the quieter feelings a bright mood alone can miss'],
    matches: ['field-gardener', 'word-magician', 'spring-mercy']
  },
  { id: 3, key: 'spring-dancer', color: '#f0c878', icon: '✦',
    name: 'Spring Dancer', catch: 'Love where play is the spark',
    story: 'Time with you is light and playful. Humour and curiosity dissolve the other person\'s tension.',
    sweetSpots: ['Conversation flows; guards drop even on a first meeting','You can share new experiences without heaviness','You keep the wind blowing through the relationship'],
    cares: ['Behind the lightness, make room for the deeper feelings too','Watch for the moment when the other person\'s real voice appears'],
    matches: ['star-seeker', 'fire-warrior', 'feather-wanderer']
  },
  { id: 4, key: 'field-gardener', color: '#7da66d', icon: '✿',
    name: 'Field Gardener', catch: 'Love grown patient',
    story: 'You build closeness through small daily acts. Nothing dramatic — and yet years walk beside you before you notice.',
    sweetSpots: ['You honour rhythm and build a safe daily home together','Small promises kept become the mortar of trust','You notice the other person\'s slow changes and stay with them'],
    cares: ['Wanting stability shouldn\'t stall the relationship — change can be tended too','Feelings deserve words as well as actions'],
    matches: ['sun-celebrant', 'moon-healer', 'word-magician']
  },
  { id: 5, key: 'mountain-embrace', color: '#8b7355', icon: '⟁',
    name: 'Mountain Embrace', catch: 'Love that holds it all',
    story: 'You carry a grounded presence. People can bring their fear and softness to you and feel it is safe.',
    sweetSpots: ['You receive their honest voice without dismissing it','When their emotions run wild, you can stay calm beside them','Time makes your trust deeper, not lighter'],
    cares: ['Don\'t turn endurance into a virtue that silences you','Receiving and having your own opinion can co-exist'],
    matches: ['fire-warrior', 'ocean-teller', 'spring-mercy']
  },
  { id: 6, key: 'forest-sage', color: '#5e7a5e', icon: '⌘',
    name: 'Forest Sage', catch: 'Love that quietly protects',
    story: 'You don\'t say much, and yet you become the person\'s safest ground. Insight and patience carry long love.',
    sweetSpots: ['You see past the surface storm to what really moves them','You come into your strength precisely when things get hard','You build a trust that does not need constant words'],
    cares: ['Keep your inner air moving — don\'t hoard what troubles you','Unspoken kindness can go unfelt; let some of it out'],
    matches: ['moon-healer', 'star-seeker', 'fire-warrior']
  },
  { id: 7, key: 'feather-wanderer', color: '#a7c6d8', icon: '⤳',
    name: 'Feather Wanderer', catch: 'Love that leaves room to breathe',
    story: 'You know how to honour the other person\'s solitude, and the closeness deepens because of it.',
    sweetSpots: ['You cheer for their dreams and individuality','You build a partnership free of dependency','You keep long relationships fresh'],
    cares: ['Freedom is a gift — don\'t miss the moments that call for closeness','Name the distance out loud once in a while; it calms both hearts'],
    matches: ['spring-dancer', 'ocean-teller', 'star-seeker']
  },
  { id: 8, key: 'word-magician', color: '#b8a6d4', icon: '✎',
    name: 'Word Weaver', catch: 'Love that deepens by dialogue',
    story: 'You are at home weaving feeling into words. Small conversations pile up into a very deep relationship.',
    sweetSpots: ['You can name difficult things with care','You help the other person find the language for what they feel','You unwind misunderstandings by talking them through'],
    cares: ['Don\'t rely on words alone — some feelings live in silence','Sometimes action carries what language cannot'],
    matches: ['sun-celebrant', 'field-gardener', 'spring-mercy']
  },
  { id: 9, key: 'star-seeker', color: '#9bb0d4', icon: '✧',
    name: 'Star Seeker', catch: 'Love that meets in the mind',
    story: 'You bond not only through feelings but through shared thought. Wandering ideas together is one of your love languages.',
    sweetSpots: ['You enjoy sparring intellectually with the other person','You can design the arc of a relationship over years','You celebrate their growth as your own'],
    cares: ['Don\'t only think — let intuition arrive too','Subtle emotions need to be named, or they slip past'],
    matches: ['spring-dancer', 'feather-wanderer', 'forest-sage']
  },
  { id: 10, key: 'moon-healer', color: '#a8c8d8', icon: '☾',
    name: 'Moon Healer', catch: 'Love that stands beside',
    story: 'You feel the other person\'s feelings almost as your own, and you can be near them without crowding. Wordless understanding is your gift.',
    sweetSpots: ['You sense unspoken emotion and hold the right distance','You become "the place they can come back to"','Your warmth softens the whole relationship'],
    cares: ['Guard your own heart while carrying theirs','Check that kindness isn\'t quietly becoming vagueness'],
    matches: ['fire-warrior', 'field-gardener', 'forest-sage']
  },
  { id: 11, key: 'ocean-teller', color: '#6b89a8', icon: '⌬',
    name: 'Ocean Teller', catch: 'Love that resonates from the depths',
    story: 'Surface-level connection doesn\'t satisfy you. Once bonded, you build a relationship able to carry the weight of a life together.',
    sweetSpots: ['You can safely hold the other person\'s truth and fear','You seek a relationship of long, real substance','You sense their changes intuitively'],
    cares: ['Depth shouldn\'t hurry the honest talk','Trust that time is what deepens love; wait as if you already trust'],
    matches: ['mountain-embrace', 'feather-wanderer', 'fire-warrior']
  },
  { id: 12, key: 'spring-mercy', color: '#7da6a6', icon: '✺',
    name: 'Wellspring of Grace', catch: 'Love that fills you by giving',
    story: 'Their happiness becomes your own — a generous kind of love. Your kindness can even shift the course of a life.',
    sweetSpots: ['You give love without waiting for a return','You believe in the other person\'s potential and call it out','You bring meaning and depth into the relationship'],
    cares: ['Don\'t place yourself last again and again — you being full is the source of the love','Let love be received, not only offered'],
    matches: ['sun-celebrant', 'mountain-embrace', 'word-magician']
  }
];

export const LOVE_PHASE_BY_PY = {
  1: { label: 'Season of sprouting', text: 'Seeds of new bonds are stirring. A small courage may open an unexpected door.' },
  2: { label: 'Season of weaving',   text: 'A time to quietly grow a one-to-one connection. Depth is what warms it.' },
  3: { label: 'Season of colour',    text: 'A time of expression and play. Showing what you feel becomes the spark of attraction.' },
  4: { label: 'Season of foundation', text: 'A time to prepare the ground. Small daily acts become trust.' },
  5: { label: 'Season of change',    text: 'A new wind is entering the relationship. Loosen the form once, and a freer bond appears.' },
  6: { label: 'Season of tending',   text: 'Awareness of family and attachment grows. The more you care, the more it bonds.' },
  7: { label: 'Season of reflection', text: 'A time to look at the meaning of the relationship. Silent dialogue carries new understanding.' },
  8: { label: 'Season of fruit',     text: 'The relationship is ripening and taking form. Building together accelerates.' },
  9: { label: 'Season of release',   text: 'One chapter is completing, and the next begins. Letting go and gratitude are the keys.' }
};

export const LOVE_ACTIONS_BY_MOON = {
  'New Moon':        'Write one line of a wish in a notebook tonight. A night for planting seeds of connection.',
  'Waxing Crescent': 'Take one small "someday" promise and make it with yourself for this week.',
  'First Quarter':   'Send a short "how are you doing?" to the person you\'ve been thinking about.',
  'Waxing Gibbous':  'Go to a place people gather (a bookshop, a café, a small event) at an unusual time.',
  'Full Moon':       'Say "thank you" out loud for one thing about the relationships you already have. A night to receive.',
  'Waning Gibbous':  'Send a short update to an old friend or contact. Unexpected doors sometimes open.',
  'Last Quarter':    'Write down the small tensions in your relationships to see them clearly.',
  'Waning Crescent': 'Spend the time alone with care. Make room in yourself for what is next.'
};
