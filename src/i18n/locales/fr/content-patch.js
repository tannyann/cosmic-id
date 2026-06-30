/** French content patch — merged onto en/content.js */
export const patch = {
  LIFE_PATH_MEANINGS: {
    1:  { label: 'Leader · Pionnier',              desc: 'Une âme d\'indépendance et d\'esprit pionnier. Ici pour tracer de nouveaux chemins.' },
    2:  { label: 'Harmonisateur · Collaborateur',     desc: 'Relie les gens par une sensibilité délicate. Une personne d\'accueil et d\'intuition.' },
    3:  { label: 'Expressif · Artiste',            desc: 'Diffuse créativité et joie dans le monde. Un maître des mots et des couleurs.' },
    4:  { label: 'Bâtisseur · Artisan',           desc: 'Une âme qui pose les fondations avec constance. Façonne la forme par l\'ordre et la patience.' },
    5:  { label: 'Esprit libre · Aventurier',        desc: 'Se nourrit du changement et de l\'expérience. N\'aime pas les contraintes, comme le vent.' },
    6:  { label: 'Amoureux · Médiateur',              desc: 'Une affection profonde pour la famille et la communauté. Porte beauté et responsabilité.' },
    7:  { label: 'Chercheur · Mystique',               desc: 'Une âme qui plonge au plus profond. Un observateur silencieux en quête de vérité.' },
    8:  { label: 'Réalisateur · Dirigeant',          desc: 'Puissance sur les royaumes matériel et spirituel. Donne forme à l\'abondance.' },
    9:  { label: 'Humanitaire · Acheveur',      desc: 'Une âme qui aime largement et sait lâcher prise. L\'achèvement d\'un voyage.' },
    11: { label: 'Maître 11 — Illuminateur',       desc: 'Une âme qui porte la lumière par une intuition accrue. Vit entre tension et spiritualité.' },
    22: { label: 'Maître 22 — Créateur',           desc: 'Le pouvoir de transformer les rêves en structures dans le monde. Le plus pratique des mystiques.' },
    33: { label: 'Maître 33 — Enseignant de l\'amour',   desc: 'Une âme rare qui peut incarner l\'amour inconditionnel.' }
  },
  PERSONAL_YEAR_MEANINGS: {
    1: 'Une année pour semer. Le début d\'un nouveau cycle.',
    2: 'Une année pour nourrir. Coopération et patience sont essentielles.',
    3: 'Une année d\'expression. Savourez la joie et les liens sociaux.',
    4: 'Une année de construction. Renforcez vos fondations pas à pas.',
    5: 'Une année de changement. Mouvement et liberté sont recherchés.',
    6: 'Une année de responsabilité. Famille et amour au premier plan.',
    7: 'Une année d\'introspection. Un temps de calme et d\'apprentissage.',
    8: 'Une année de récolte. Le succès matériel prend forme.',
    9: 'Une année d\'achèvement. Une saison de lâcher-prise et de réflexion.'
  },
  EXPRESSION_MEANINGS: {
    1: 'Énergie du nom : individualité et esprit pionnier.',
    2: 'Énergie du nom : coopération et vibration médiane.',
    3: 'Énergie du nom : expression et joie.',
    4: 'Énergie du nom : constance et patience.',
    5: 'Énergie du nom : changement et aventure.',
    6: 'Énergie du nom : amour et responsabilité.',
    7: 'Énergie du nom : mystère et introspection.',
    8: 'Énergie du nom : pouvoir et manifestation.',
    9: 'Énergie du nom : amour large et achèvement.'
  },
  SUN_SIGNS: [
    { name: 'Capricorne',  element: 'Terre', desc: 'Ferme, responsable, poussé à accomplir.' },
    { name: 'Verseau',   element: 'Air',   desc: 'Innovation, indépendance, amour de l\'humanité.' },
    { name: 'Poissons',     element: 'Eau', desc: 'Sensibilité, rêves, un océan d\'empathie.' },
    { name: 'Bélier',      element: 'Feu',  desc: 'Action, esprit pionnier, passion pure.' },
    { name: 'Taureau',     element: 'Terre', desc: 'Stabilité, sensualité, plaisir des sens.' },
    { name: 'Gémeaux',     element: 'Air',   desc: 'Curiosité, intellect, communication.' },
    { name: 'Cancer',     element: 'Eau', desc: 'Émotion, foyer, amour protecteur.' },
    { name: 'Lion',        element: 'Feu',  desc: 'Expression de soi, créativité, présence royale.' },
    { name: 'Vierge',      element: 'Terre', desc: 'Analyse, service, amour du raffinement.' },
    { name: 'Balance',      element: 'Air',   desc: 'Harmonie, sens esthétique, relations.' },
    { name: 'Scorpion',    element: 'Eau', desc: 'Profondeur, transformation, passion absolue.' },
    { name: 'Sagittaire', element: 'Feu',  desc: 'Exploration, liberté, vision philosophique.' }
  ],
  MOON_TRAITS: [
    { name: 'Né(e) sous la Nouvelle Lune',        desc: 'Une âme née avec quelque chose de naissant en elle. Intuitive et instinctive.' },
    { name: 'Né(e) sous le Premier Quartier',   desc: 'Une âme née dans une vague de défi et d\'action. Forte envie d\'avancer.' },
    { name: 'Né(e) sous la Pleine Lune',       desc: 'Une âme où émotion et conscience se tirent l\'une vers l\'autre. Expressive et magnétique.' },
    { name: 'Né(e) sous le Dernier Quartier',    desc: 'Une âme née dans une vague de lâcher-prise et de réflexion. Porte profondeur et sagesse.' }
  ],
  CHINESE_ZODIAC: [
    { name: 'Zi (Rat)',       char: 'Rat',     desc: 'Vif et rusé. Rate rarement une occasion.' },
    { name: 'Chou (Bœuf)',      char: 'Bœuf',      desc: 'Patient et stable. Avance un pas sûr à la fois.' },
    { name: 'Yin (Tigre)',    char: 'Tigre',   desc: 'Brave et passionné. Se déplace comme le vent.' },
    { name: 'Mao (Lapin)',   char: 'Lapin',  desc: 'Gracieux et délicat. Honore l\'harmonie.' },
    { name: 'Chen (Dragon)',  char: 'Dragon',  desc: 'Idéalisme et noblesse. Une âme de grande envergure.' },
    { name: 'Si (Serpent)',     char: 'Serpent',   desc: 'Intuition et mystère. Voit profondément et en silence.' },
    { name: 'Wu (Cheval)',     char: 'Cheval',   desc: 'Liberté et rapidité. Laisse la passion courir libre.' },
    { name: 'Wei (Chèvre)',     char: 'Chèvre',    desc: 'Douceur et sens artistique. Un empathique chaleureux.' },
    { name: 'Shen (Singe)',  char: 'Singe',  desc: 'Intellect et esprit. Maître de la curiosité.' },
    { name: 'You (Coq)',  char: 'Coq', desc: 'Fier et méticuleux. Une présence qui a une voix.' },
    { name: 'Xu (Chien)',       char: 'Chien',     desc: 'Loyauté et justice. Gardien de la confiance.' },
    { name: 'Hai (Cochon)',     char: 'Cochon',    desc: 'Franc et courageux. Charge droit devant.' }
  ],
  KYUSEI_STARS: [
    null,
    { name: 'Étoile Une Blanche Eau',   element: 'Eau', desc: 'Souple et introspectif. Suit le courant et s\'enracine profondément.' },
    { name: 'Étoile Deux Noire Terre',   element: 'Terre', desc: 'Dévotion et diligence. Nourrit comme la terre elle-même.' },
    { name: 'Étoile Trois Verte Bois',  element: 'Bois',  desc: 'La vigueur des jeunes pousses. Une étoile d\'action et d\'ouverture.' },
    { name: 'Étoile Quatre Verte Bois',   element: 'Bois',  desc: 'Douce comme le vent. Apporte connexions et relations.' },
    { name: 'Étoile Cinq Jaune Terre', element: 'Terre', desc: 'L\'étoile centrale. Attire les gens par une forte force magnétique.' },
    { name: 'Étoile Six Blanche Métal',   element: 'Métal', desc: 'Ciel et autorité. Fier, aspirant à la perfection.' },
    { name: 'Étoile Sept Rouge Métal',   element: 'Métal', desc: 'Joie et sociabilité. Illumine toute réunion.' },
    { name: 'Étoile Huit Blanche Terre', element: 'Terre', desc: 'L\'étoile de la montagne. Changement, héritage, volonté inébranlable.' },
    { name: 'Étoile Neuf Violette Feu',  element: 'Feu',  desc: 'Lumière et sens esthétique. Rayonne une brillance intuitive.' }
  ],
  GOGYOU_DESCS: {
    '木': 'Le pouvoir de croître. Tourné vers l\'avenir, comme un matin de vert frais.',
    '火': 'Passion ardente. Illumine l\'entourage de lumière et de chaleur.',
    '土': 'Le pouvoir de recevoir. Repose fermement au centre.',
    '金': 'Le pouvoir d\'affiner. Intellect frais, beau, tranchant comme une lame.',
    '水': 'Le pouvoir de couler. Se déplace profondément et souplement à travers toutes choses.'
  },
  ANIMAL_DESC: {
    'Black Panther': 'Un œil aiguisé pour la beauté et la nouveauté. Charisme cool et naturel.',
    'Pegasus':       'Un génie libre. Les idées prennent leur envol.',
    'Monkey':        'Au service des autres et curieux. Lit la pièce comme un maître.',
    'Koala Bear':    'Réfléchi avec des préférences marquées. Un chercheur dans l\'âme.',
    'Tiger':         'Présence magnanime. Un roi qui avance sans hâte.',
    'Tanuki':        'Chaleureux et accessible. Un gardien de sagesse douce.',
    'Koala':         'Apaisant et observateur. Avance à son propre rythme.',
    'Elephant':      'Travailleur et puissant. Force par la persévérance.',
    'Cheetah':       'Vitesse éclatante et action solitaire. Fonce droit devant.',
    'Lion':          'Fierté et dignité. Né(e) sous une étoile qui attire les projecteurs.',
    'Wolf':          'Pense profondément seul. Porte un monde à soi.',
    'Sheep':         'Cœur chaleureux et coopératif. Brille en mouvant avec les autres.'
  },
  MAYA_SEALS: [
    'Dragon Rouge','Vent Blanc','Nuit Bleue','Graine Jaune','Serpent Rouge',
    'Pont-Monde Blanc','Main Bleue','Étoile Jaune','Lune Rouge','Chien Blanc',
    'Singe Bleu','Humain Jaune','Marcheur du Ciel Rouge','Sorcier Blanc','Aigle Bleu',
    'Guerrier Jaune','Terre Rouge','Miroir Blanc','Tempête Bleue','Soleil Jaune'
  ],
  MAYA_TONES: [
    'Magnétique ','Lunaire ','Électrique ','Auto-existant ','Surnombre ','Rythmique ',
    'Résonant ','Galactique ','Solaire ','Planétaire ','Spectral ','Cristal ','Cosmique '
  ],
  TAROT_MEANINGS: {
    'The Magician':       'Volonté et création. Façonne la possibilité en forme.',
    'The High Priestess': 'Intuition et mystère. Transmet beaucoup sans parler.',
    'The Empress':        'Abondance et amour. Symbole de puissance nourricière.',
    'The Emperor':        'Structure et autorité. Volonté qui bâtit la stabilité.',
    'The Hierophant':     'Tradition et enseignement. Celui qui relie les mondes.',
    'The Lovers':         'Choix et union. Un voyage pour décider la direction du cœur.',
    'The Chariot':        'Mouvement vers l\'avant et volonté. Avance en maîtrisant la difficulté.',
    'Strength':           'Courage tranquille. Montre la force par la douceur.',
    'The Hermit':         'Lumière intérieure. Cherche la vérité dans la solitude.',
    'Wheel of Fortune':   'Le tournant. Vit au sein des cycles.',
    'Justice':            'Équilibre et vérité. Un juge équitable.',
    'The Hanged Man':     'Un changement de perspective. Ce qui devient visible à l\'envers.',
    'Death':              'Grande transition et renouveau. Symbole de lâcher-prise vers un nouveau soi.',
    'Temperance':         'Harmonie et intégration. Mélange deux pôles ensemble.',
    'The Devil':          'Désir et ombre. Une confrontation avec la force primale.',
    'The Tower':          'Changement soudain et prise de conscience. Des cadres rigides peuvent s\'ouvrir à une nouvelle perspective.',
    'The Star':           'Espoir et guidance. Rayonne doucement la lumière.',
    'The Moon':           'Illusion et intuition. Voyage dans le royaume des rêves.',
    'The Sun':            'Joie et manifestation. La lumière elle-même.',
    'Judgement':          'Éveil et appel. Une convocation vers une nouvelle étape.',
    'The World':          'Achèvement et intégration. Une âme qui accomplit un voyage.',
    'The Fool':           'Début innocent. Liberté sans entraves.'
  },
  TAROT_BY_NUM: [
    'Le Fou','Le Magicien','La Grande Prêtresse','L\'Impératrice','L\'Empereur','Le Pape','Les Amoureux','Le Chariot','La Force','L\'Ermite',
    'La Roue de Fortune','La Justice','Le Pendu','La Mort','Tempérance','Le Diable','La Tour','L\'Étoile','La Lune','Le Soleil','Le Jugement','Le Monde'
  ],
  CELTIC_TREES: [
    { name: 'Bouleau',         desc: 'Débuts, purification, résilience.' },
    { name: 'Sorbier',         desc: 'Inspiration et protection.' },
    { name: 'Frêne',           desc: 'Sensibilité, rêverie, connexion.' },
    { name: 'Aulne',         desc: 'Courage et esprit pionnier.' },
    { name: 'Saule',        desc: 'Intuition lunaire.' },
    { name: 'Aubépine',      desc: 'Porte une flamme intérieure.' },
    { name: 'Chêne',           desc: 'Force et leadership.' },
    { name: 'Houx',         desc: 'Dignité et protection.' },
    { name: 'Noisetier',         desc: 'Connaissance et perspicacité.' },
    { name: 'Vigne',          desc: 'Sensibilité et sens de l\'équilibre.' },
    { name: 'Lierre',           desc: 'Patience et renouveau.' },
    { name: 'Roseau',          desc: 'Mystère et pouvoir caché.' },
    { name: 'Sureau',         desc: 'Achèvement et sagesse.' }
  ],
  BIRTHSTONES: {
    1:  { meaning: 'Amitié · vérité · dévotion' },
    2:  { meaning: 'Sincérité · paix intérieure' },
    3:  { meaning: 'Courage · clarté · bonheur' },
    4:  { meaning: 'Pureté · amour durable' },
    5:  { meaning: 'Bonne fortune · bonheur' },
    6:  { meaning: 'Santé · longévité · abondance' },
    7:  { meaning: 'Passion · victoire · dignité' },
    8:  { meaning: 'Bonheur conjugal · paix intérieure' },
    9:  { meaning: 'Sincérité · compassion' },
    10: { meaning: 'Espoir · bonheur · innocence' },
    11: { meaning: 'Amitié · espoir' },
    12: { meaning: 'Succès · prospérité' }
  },
  BIRTH_FLOWERS: {
    1: 'Œillet',   2: 'Violette',        3: 'Jonquille',
    4: 'Pois de senteur',   5: 'Muguet', 6: 'Rose',
    7: 'Lys',        8: 'Glaïeul',   9: 'Gentiane',
    10: 'Cosmos',     11: 'Chrysanthème', 12: 'Poinsettia'
  },
  MOON_PHASE_NAMES: [
    'Nouvelle Lune',
    'Premier croissant',
    'Premier quartier',
    'Gibbeuse croissante',
    'Pleine Lune',
    'Gibbeuse décroissante',
    'Dernier quartier',
    'Dernier croissant'
  ],
  LIFE_MILESTONES: [
    { name: 'Premier cycle achevé',         desc: 'Un temps où les fondations prennent forme.' },
    { name: 'Premier retour de Jupiter',         desc: 'La première expansion du regard sur le monde.' },
    { name: 'Seuil des nœuds lunaires',         desc: 'La direction de l\'âme commence à s\'éveiller.' },
    { name: 'Deuxième retour de Jupiter',        desc: 'La première expansion vers l\'indépendance.' },
    { name: 'Premier retour de Saturne',          desc: 'Un tournant pour reconstruire sa vie.' },
    { name: 'Troisième retour de Jupiter',         desc: 'Stabilisation du rôle social.' },
    { name: 'Opposition d\'Uranus',            desc: 'Un éveil de mi-parcours.' },
    { name: 'Quatrième retour de Jupiter',        desc: 'Une saison de maîtrise et d\'expression.' },
    { name: 'Deuxième retour de Saturne',         desc: 'Récolte et reconstruction après de longues années.' },
    { name: 'Soixantième anniversaire',            desc: 'Un nouveau départ après un cycle complet.' },
    { name: 'Sixième retour de Jupiter',         desc: 'Le seuil de l\'aînesse.' },
    { name: 'Retour d\'Uranus',                desc: 'Contempler une vie de révolution.' }
  ],
  LUCKY_COMPASS: {
    fire: {
      colors: ['Or', 'Corail', 'Ambre'],
      days: ['Mardi', 'Dimanche'],
      hint: 'Les tons chauds et les jours d\'avancement peuvent vous aider à vous sentir plus aligné(e) — non comme des règles, mais comme des ancres douces.'
    },
    earth: {
      colors: ['Olive', 'Sable', 'Brun'],
      days: ['Samedi', 'Mercredi'],
      hint: 'Des teintes ancrées et des journées posées peuvent soutenir patience et construction — une boussole, pas un ordre.'
    },
    air: {
      colors: ['Bleu ciel', 'Lilas', 'Argent'],
      days: ['Mercredi', 'Vendredi'],
      hint: 'Des couleurs légères et des jours de conversation peuvent aider les idées à circuler plus librement.'
    },
    water: {
      colors: ['Bleu profond', 'Vert marin', 'Perle'],
      days: ['Lundi', 'Jeudi'],
      hint: 'Des couleurs fluides et des journées réflexives peuvent inviter intuition et clarté émotionnelle.'
    },
    wood: {
      colors: ['Vert forêt', 'Sarcelle', 'Sauge'],
      days: ['Jeudi', 'Mardi'],
      hint: 'Des verts en croissance et des jours pour semer — au sens propre ou figuré — peuvent se sentir soutenants.'
    },
    metal: {
      colors: ['Blanc', 'Argent', 'Platine'],
      days: ['Vendredi', 'Dimanche'],
      hint: 'Des lignes nettes et des couleurs vives peuvent aider à affiner et lâcher ce qui ne sert plus.'
    }
  },
  PRODUCT_PHILOSOPHY: {
    freeBadge: 'Tout est gratuit',
    freeHeadline: 'Dix-neuf histoires, ouvertes à tous',
    freeLead: 'Avec seulement votre date de naissance et votre nom, vous obtenez des résultats croisés, un résumé, des lectures par carte, l\'amour et la compatibilité — le tout sans frais.',
    premiumHeadline: 'Allez plus loin, toujours gratuit',
    premiumLead: 'Les chapitres étendus de chaque carte sont débloqués pour tous.'
  },
  PREMIUM_COMING_SOON: {
    badge: 'Bientôt disponible',
    headline: 'Premium arrive bientôt',
    lead: 'Lectures plus profondes, chronologies plus longues, compatibilité — nous préparons tout cela. En attendant, profitez des dix-neuf systèmes gratuitement.',
    teasers: [
      'Lectures maîtres pour les 19 systèmes',
      'Chronologie de fortune sur 10 ans',
      'Compatibilité, rituels lunaires, et plus'
    ],
    modalHeadline: 'Premium arrive bientôt',
    modalLead: 'Les couches plus profondes seront disponibles après le lancement. Pour l\'instant, profitez des sections gratuites « Lire plus profondément ».',
    paymentCta: 'S\'abonner à Premium',
    paymentNote: 'Paiement sécurisé via Stripe. Annulation à tout moment.'
  },
  FREE_INCLUDES: [
    {
      title: 'Les dix-neuf systèmes',
      desc: 'Numérologie, astrologie occidentale, Kyusei, animal fortune… une saisie, une vue d\'ensemble et un résumé narratif.'
    },
    {
      title: 'Lectures carte par carte',
      desc: 'Touchez n\'importe quel système pour des lectures gratuites — y compris les chapitres profonds de chaque modal.'
    },
    {
      title: 'Lune de ce soir · biorythme',
      desc: 'Consultez la vague du jour et le rythme depuis votre date de naissance.'
    },
    {
      title: 'Cartes à partager',
      desc: 'Enregistrez les résultats en image ou partagez-les en texte.'
    }
  ],
  ALL_FREE_HIGHLIGHTS: [
    {
      title: 'Lectures profondes maîtres',
      desc: 'Chaque carte ouvre des chapitres étendus — chronologies, ombres et indices croisés. Sans paywall.'
    },
    {
      title: 'Archétype amoureux',
      desc: 'Votre type amoureux, votre phase et le petit pas de ce soir — inclus gratuitement.'
    },
    {
      title: 'Lecture de compatibilité',
      desc: 'Radar à cinq axes pour vous et une autre personne — partenaire, ami ou autre.'
    }
  ],
  PREMIUM_PRICING: {
    monthly: { label: 'Mensuel', per: '/ mois' },
    yearly: { label: 'Annuel', per: '/ an', badge: '2 mois offerts' },
    note: 'Une couche optionnelle au-dessus des fonctions gratuites. Annulation à tout moment (lorsque la facturation sera implémentée).'
  },
  PREMIUM_FEATURES: [
    {
      category: 'Lecture profonde',
      title: 'Interprétations maîtres pour les 19 systèmes',
      desc: 'Au-delà des lectures gratuites — chapitres plus profonds sur chaque carte. Lumière et ombre, indices sur de plus longues échelles de temps.'
    },
    {
      category: 'Chronologie',
      title: 'Chronologie de fortune sur 10 ans',
      desc: 'Années personnelles, jalons et transits tissés ensemble — une vue de la prochaine décennie.'
    },
    {
      category: 'Lune et cycles',
      title: 'Calendrier personnel nouvelle et pleine lune',
      desc: 'Douze mois de rituels et de dates à surveiller, alignés sur votre phase lunaire de naissance.'
    },
    {
      category: 'Compatibilité',
      title: 'Lecture de compatibilité',
      desc: 'Entrez un partenaire, un ami ou un collègue. Voyez comment vos dix-neuf histoires résonnent ensemble.'
    },
    {
      category: 'Design de vie',
      title: 'Aptitudes et éléments porte-bonheur',
      desc: 'Styles de travail qui peuvent vous convenir, couleurs, nombres et jours chanceux — une boussole, pas une prescription.'
    },
    {
      category: 'Personnel',
      title: 'Récit unifié par IA',
      desc: 'Tisse dix-neuf résultats en une histoire. Une lecture longue faite pour vous (bientôt).'
    },
    {
      category: 'Archives',
      title: 'Profils enregistrés',
      desc: 'Stockez des profils pour la famille et les partenaires. Revisitez et suivez l\'évolution dans le temps.'
    },
    {
      category: 'Partage',
      title: 'Cartes de partage Premium',
      desc: 'Haute résolution, plusieurs designs. Cartes de compatibilité et éditions « thème de l\'année » aussi.'
    },
    {
      category: 'Notifications',
      title: 'Rappels de jalons et de lune',
      desc: 'Douces alertes pour les changements d\'année personnelle, pleines lunes, et plus (bientôt).'
    }
  ],
  PREMIUM_PITCH_LINES: [
    'Les lectures gratuites sont déjà un riche point de départ',
    'Ce qui suit est optionnel — pour ceux qui veulent aller plus loin',
    'Rien ici n\'est définitif ; vous choisissez toujours ce que cela signifie'
  ],
  PREMIUM_ROADMAP: [
    { phase: 'Dans Premium', items: ['Interprétations profondes des cartes (démo disponible)'] },
    { phase: 'En développement', items: ['Chronologie 10 ans', 'Compatibilité', 'Calendrier lunaire'] },
    { phase: 'Concept', items: ['Récit unifié par IA', 'Profils enregistrés'] }
  ],
  COMPAT_AXIS_LABELS: {
    lifePath: 'Chemin de vie',
    sun: 'Signe solaire',
    zodiac: 'Zodiaque chinois',
    gogyou: 'Cinq Éléments',
    kyusei: 'Étoile Kyusei'
  },
  COMPAT_BANDS: [
    { label: 'Une résonance du destin' },
    { label: 'Un lien profond' },
    { label: 'Une connexion stable' },
    { label: 'Une relation d\'apprentissage' },
    { label: 'Un lien qui grandit avec le temps' },
    { label: 'Un contraste en miroir' }
  ],
  COMPAT_AXIS_HINTS: {
    lifePath: {
      high: 'Les chemins de vie se font écho — rythme et direction partagés.',
      mid: 'Des tempos différents, mais une marge pour s\'aligner avec le temps.',
      low: 'Des chemins contrastés. La curiosité face aux différences aide.'
    },
    sun: {
      high: 'Les signes solaires partagent élément ou harmonie — aisance naturelle.',
      mid: 'Des styles différents qui peuvent se compléter.',
      low: 'Énergies opposées. L\'équilibre vient du respect.'
    },
    zodiac: {
      high: 'Les signes du zodiaque chinois se soutiennent.',
      mid: 'Appariement neutre — l\'attention quotidienne compte le plus.',
      low: 'Signes de prudence traditionnelle — patience et humour aident.'
    },
    gogyou: {
      high: 'Les Cinq Éléments se nourrissent mutuellement.',
      mid: 'Cycle neutre — des habitudes stables construisent la confiance.',
      low: 'Cycle de contrôle — laissez de l\'espace l\'un à l\'autre.'
    },
    kyusei: {
      high: 'Les étoiles Kyusei circulent bien ensemble.',
      mid: 'Compatibilité modérée — les routines apportent la stabilité.',
      low: 'Énergies qui se croisent — honorez le rythme de chacun.'
    }
  }
};
