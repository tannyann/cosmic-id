/**
 * Modal "Read Deeper" content database (localized).
 */
import { createContentExports } from '../../createContent.js';
import { patch } from './content-patch.js';
import { personalYearPrev, personalYearNext } from '../../../util.js';

const {
  LIFE_PATH_MEANINGS,
  PERSONAL_YEAR_MEANINGS,
  EXPRESSION_MEANINGS,
  ANIMAL_DESC,
  TAROT_MEANINGS
} = createContentExports(patch);

export const LP_DETAILS = {
  1: [
    { t: 'Face lumineuse', d: "Élan et décision. Le pouvoir d'avancer avant les autres et ouvrir de nouveaux chemins. Une âme qui semble faite pour guider." },
    { t: "Face d'ombre", d: "Isolement, orgueil, entêtement. Quand vous cessez d'entendre les autres, vous pouvez dériver vers une présence dominatrice." },
    { t: 'But de vie', d: "Planter votre propre drapeau. Ne pas suivre les traces de quelqu'un d'autre, mais laisser votre propre sillage." }
  ],
  2: [
    { t: 'Face lumineuse', d: 'Empathie, harmonie, accord délicat. Lire la pièce et relier discrètement les gens entre eux.' },
    { t: "Face d'ombre", d: 'Indécision, dépendance, sacrifice excessif. Rester trop longtemps la « personne gentille » et se perdre.' },
    { t: 'But de vie', d: "Être un pont. Briller dans des relations qui ne peuvent s'achever seules." }
  ],
  3: [
    { t: 'Face lumineuse', d: "Expression, optimisme, créativité. Le pouvoir d'éclairer les gens par les mots, la couleur et le rire." },
    { t: "Face d'ombre", d: 'Saisonnalité, superficialité, légèreté. Une tendance à nager en surface et éviter la profondeur.' },
    { t: 'But de vie', d: "Ajouter de la joie au monde. Le simple fait de savourer la vie peut devenir le réconfort de quelqu'un d'autre." }
  ],
  4: [
    { t: 'Face lumineuse', d: "Diligence, patience, fiabilité. Une âme d'artisan qui construit couche par couche." },
    { t: "Face d'ombre", d: 'Rigidité, conservatisme, inflexibilité. La peur du changement peut vous enfermer dans une coquille.' },
    { t: 'But de vie', d: "Bâtir les fondations du monde. Pas tape-à-l'œil, mais devenir un pilier indispensable." }
  ],
  5: [
    { t: 'Face lumineuse', d: "Esprit d'aventure, flexibilité, polyvalence. Une âme semblable au vent qui se nourrit du changement." },
    { t: "Face d'ombre", d: 'Agitation, impulsivité, irresponsabilité. Une peur de rester assez longtemps avec quoi que ce soit.' },
    { t: 'But de vie', d: "Recueillir l'expérience. Ne pas rester au même endroit, mais graver la diversité du monde en soi." }
  ],
  6: [
    { t: 'Face lumineuse', d: 'Affection, responsabilité, médiation. Une présence chaleureuse souvent au centre de la famille ou de la communauté.' },
    { t: "Face d'ombre", d: 'Surprotection, ingérence, mentalité de martyr. Le moment où le soin peut devenir contrôle.' },
    { t: 'But de vie', d: "Apporter l'ordre par l'amour. Votre façon de prendre soin peut aider à guérir le monde." }
  ],
  7: [
    { t: 'Face lumineuse', d: 'Curiosité, intuition, profondeur analytique. Une âme qui plonge et ramène la vérité à la surface.' },
    { t: "Face d'ombre", d: 'Solitude, critique, retrait des gens. Fermer son cœur au monde alentour.' },
    { t: 'But de vie', d: 'Faire le pont du savoir. Rendre au monde ce que vous avez gagné dans la solitude.' }
  ],
  8: [
    { t: 'Face lumineuse', d: 'Exécution, leadership, le don de rendre les choses réelles. Une puissance qui peut gouverner matière et esprit.' },
    { t: "Face d'ombre", d: "Soif de pouvoir, force brutale, attachement à l'argent. Une fine ligne où la force peut devenir contrainte." },
    { t: 'But de vie', d: "Donner forme à l'abondance. Richesse, relations et énergie sont faites pour circuler, pas seulement être retenues." }
  ],
  9: [
    { t: 'Face lumineuse', d: "Amour large, esprit humanitaire, sagesse de l'achèvement. Une présence qui peut intégrer chaque nombre." },
    { t: "Face d'ombre", d: 'Évasion, mentalité de victime, idéalisme moralisateur. Épuisement face à des idéaux hors de portée.' },
    { t: 'But de vie', d: "Achever un cycle et le transmettre. Tenir le passé et le libérer vers l'avenir." }
  ],
  11: [
    { t: 'Face lumineuse', d: 'Intuition et spiritualité accrues. Guider les autres comme messager de lumière.' },
    { t: "Face d'ombre", d: "Tension nerveuse, tension intérieure, doute de soi. Recevoir trop jusqu'à ce que le cœur se sente submergé." },
    { t: 'But de vie', d: 'Donner forme visible aux choses invisibles. Parmi les bâtisseurs de ponts, peut-être le rôle le plus délicat.' }
  ],
  22: [
    { t: 'Face lumineuse', d: 'Maître Bâtisseur. Un pouvoir rare de transformer les rêves en structures dans le monde réel.' },
    { t: "Face d'ombre", d: 'Être écrasé par la responsabilité — ou la fuir.' },
    { t: 'But de vie', d: 'Réaliser une grande vision. Non seul, mais en rassemblant beaucoup de gens.' }
  ],
  33: [
    { t: 'Face lumineuse', d: "Maître Enseignant. Une âme qui peut incarner l'amour inconditionnel." },
    { t: "Face d'ombre", d: "Contrôle au nom de l'amour — ou épuisement de l'amour lui-même." },
    { t: 'But de vie', d: "Enseigner l'amour lui-même. Une vie qui peut devenir son propre manuel." }
  ]
};

export function premiumGeneric(systemLabel, valueLabel) {
  return [
    { t: 'Vagues de fortune sur dix ans', d: `As ${valueLabel} in ${systemLabel}, you may move through fortune in a 9-year cycle. Details on your next peak year, caution year, and best months for planting seeds.` },
    { t: 'Lecture de compatibilité', d: 'Un guide complet sur 12 quadrants : types qui peuvent résonner avec votre énergie, types qui stimulent la croissance, et types à aborder avec soin.' },
    { t: 'Adéquation professionnelle', d: `Roles where ${valueLabel} may thrive most, roles that may feel misaligned, and how to express it through side work—read against a modern career map.` },
    { t: "Leçon de l'âme", d: 'La leçon la plus importante que vous êtes peut-être venu(e) rencontrer dans cette vie, et comment reconnaître ses premiers signes.' },
    { t: 'Personnes notables partageant la même énergie', d: "Une liste de 100 figures historiques et contemporaines partageant cette énergie. Apprendre des choix qu'elles ont faits." }
  ];
}

export function buildDeep(cardKey, ctx) {
  const { lp, py, en, expr, nameRoman, sun, mt, cz, sj, ks, gy, an, ct, my, tb, dt, bs, bf, bio, mp, ls } = ctx;

  switch (cardKey) {
    case 'lifepath': return {
      title: 'Nombre du chemin de vie',
      value: lp,
      label: LIFE_PATH_MEANINGS[lp].label,
      intro: `Life Path ${lp} is the main theme of your life. It may reflect the role your soul chose before birth. ${LIFE_PATH_MEANINGS[lp].desc}`,
      free: LP_DETAILS[lp] || [
        { t: 'Face lumineuse', d: 'Votre plus grand don peut dormir ici.' },
        { t: "Face d'ombre", d: "Quand l'équilibre se perd, ce côté peut se manifester." },
        { t: 'But de vie', d: 'Le sens de choisir ce chemin.' }
      ],
      premium: premiumGeneric('Chemin de vie', String(lp))
    };

    case 'personalYear': return {
      title: 'Année personnelle',
      value: py,
      label: `You in ${ctx.currentYear}`,
      intro: `Your personal year follows a 9-year rhythm unique to you. This year is a ${py} year. ${PERSONAL_YEAR_MEANINGS[py]}When you move with this wave rather than against it, fortune may flow more smoothly.`,
      free: [
        { t: 'Vents favorables cette année', d: `${PERSONAL_YEAR_MEANINGS[py]}Movement in this direction may be more easily blessed.` },
        { t: 'Écueils cette année', d: `Conversely, holding on to the previous wave—something like "${PERSONAL_YEAR_MEANINGS[personalYearPrev(py)]}"—may tend to bring stagnation.` },
        { t: "Signes pour l'année prochaine", d: `Next year is Personal Year ${personalYearNext(py)}. ${PERSONAL_YEAR_MEANINGS[personalYearNext(py)] || 'Un tournant vers un nouveau cycle.'} This year\'s choices may become next year\'s starting point.` }
      ],
      premium: [
        { t: 'Calendrier de fortune mensuel', d: 'Douze mois détaillés par mois personnel et jour personnel. Identifier quand agir, attendre et décider.' },
        { t: 'Mots-clés pour cette année', d: 'Trois mots-clés donnés uniquement à vous pour cette année. Une boussole quand le jugement semble incertain.' },
        { t: 'Rencontres cette année', d: "Les types de liens qui peuvent apparaître, d'où ils peuvent venir, et comment les reconnaître." },
        { t: 'Mois à surveiller', d: "Périodes où santé, argent ou relations peuvent sembler instables — et rituels qui peuvent aider à rétablir l'équilibre." }
      ]
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
        title: 'Nombre du nom',
        value: dual ? `${native} · ${latin}` : native,
        label: dual ? 'Nom affiché / lettres romaines' : (EXPRESSION_MEANINGS[native] || '').replace('Énergie du nom :', ''),
        intro: dual
          ? `From your display name we read ${native}; from "${roman}" we read ${latin}. Both describe how you are called—separate from Life Path ${lp}. Different numbers are not a contest for which is "correct."`
          : `Your name releases the energy of ${native} each time it is spoken—separate from Life Path ${lp}, the number of how you are called.`,
        free: [
          {
            t: 'Nombre du nom en écriture affichée',
            d: `From your display name: ${native}. This uses a simple Unicode glyph sum for non-Latin scripts—not classical Western numerology. It may suggest ${nativeTrait} as a lens, not a verdict.`
          },
          dual
            ? {
              t: 'Nombre du nom romain / latin (pythagoricien)',
              d: `"${roman}" maps to ${latin} on the usual A–Z chart. ${latinTrait}This is closer to what international numerology often calls the expression number.`
            }
            : {
              t: 'Un second axe en lettres romaines',
              d: roman && latin == null
                ? "Aucune lettre A–Z n'a été trouvée dans le champ romain, donc le nombre international n'a pas été calculé. Essayez un passeport ou une orthographe romanisée."
                : 'Ajoutez une orthographe romaine ou latine optionnelle pour voir aussi le nombre international A–Z à côté de votre nom affiché.'
            },
          {
            t: 'Relation au chemin de vie',
            d: dual
              ? `Life Path ${lp}, display ${native}, and Roman ${latin} together may show birth essence, everyday calling, and international resonance.`
              : `Life Path ${lp} with display ${native} may show the balance between inner essence and how you are called.`
          },
          { t: 'Indices pour renommer', d: "Si votre nom actuel semble lourd, un surnom ou nom commercial avec un autre nombre peut inviter une autre longueur d'onde." }
        ],
        premium: premiumGeneric('Nombre du nom', dual ? `${native}/${latin}` : String(native))
      };
    }

    case 'sun': return {
      title: 'Signe solaire',
      value: `${sun.symbol} ${sun.name}`,
      label: `${sun.element} element`,
      intro: `Your sun sign may reveal the core of your self. With the Sun in ${sun.name}, you may embody ${sun.desc}Each birthday, the Sun returns to the same sign and shines on you again.`,
      free: [
        { t: 'Cœur de ce signe', d: `${sun.name} belongs to the ${sun.element} element and may hold a distinct worldview. ${sun.desc}` },
        { t: 'Moments de rayonnement', d: `${sun.name} may shine brightest in environments aligned with its element. Choose places where ${sun.element} qualities can be expressed.` },
        { t: "Vivre avec l'ombre", d: 'Chaque signe a sa lumière et son ombre. Des habitudes quotidiennes qui choisissent la lumière peuvent changer la qualité de votre vie.' }
      ],
      premium: [
        { t: 'Signe lunaire et ascendant', d: "Le Soleil n'est pas votre seul signe. À partir de l'heure et du lieu de naissance, Lune et Ascendant peuvent être calculés — une symphonie de trois astres." },
        { t: 'Analyse complète des 12 maisons', d: 'Une vue complète de comment votre signe peut se placer dans les 12 maisons (domaines de vie).' },
        { t: 'Grands transits', d: 'Comment les planètes extérieures peuvent affecter votre thème sur les trois prochaines années, mois par mois.' },
        { t: 'Thème de compatibilité', d: 'Analyse de synastrie à cinq couches avec partenaire ou famille.' },
        { t: 'Thème des vies antérieures', d: "Thèmes d'âme des vies passées et devoirs de cette vie, lus à travers les nœuds lunaires." }
      ]
    };

    case 'moonTrait': return {
      title: 'Tendance lunaire',
      value: mt.name,
      label: "D'après la phase lunaire à la naissance",
      intro: `The shape of the Moon in the sky at your birth may shape the "habit" of your emotional rhythm. ${mt.desc}`,
      free: [
        { t: 'Schémas émotionnels', d: 'Façons typiques dont les sentiments peuvent se mouvoir pour les personnes nées sous cette phase lunaire.' },
        { t: 'Comment se relier à la Lune', d: 'Les nuits de pleine lune, de nouvelle lune, et les jours de premier ou dernier quartier — vous pouvez découvrir ce qui vous restaure.' },
        { t: 'Journal des rêves', d: "Ceux avec de fortes tendances lunaires peuvent trouver que les rêves portent des messages importants. Essayez trois minutes d'écriture le matin." }
      ],
      premium: [
        { t: 'Signe lunaire exact', d: 'Avec heure et lieu de naissance, un tout autre signe peut apparaître — votre vrai langage émotionnel.' },
        { t: 'Fortune selon la phase lunaire', d: 'Actions favorables par phase lunaire pour les 12 prochains mois.' },
        { t: 'Rituels lunaires', d: 'Comment composer chaque mois des cérémonies de nouvelle et pleine lune adaptées à vous.' }
      ]
    };

    case 'zodiac': return {
      title: 'Zodiaque chinois',
      value: cz.name,
      label: `Born in the Year of the ${cz.char}`,
      intro: `${cz.name} is the animal you may have chosen within the 12-year cycle of the Eastern calendar. ${cz.desc}People sharing the same sign may meet milestones every 12 years.`,
      free: [
        { t: 'Cœur de ce signe', d: cz.desc },
        { t: 'Année benming', d: 'Tous les 12 ans revient votre propre année zodiacale. Appelée « année benming », elle peut devenir un jalon de vie.' },
        { t: 'Indices de compatibilité', d: 'Liuhe (meilleure affinité), Sanhe (bon lien), Chong (choc stimulant) — les combinaisons du zodiaque peuvent porter un sens profond.' }
      ],
      premium: [
        { t: 'Carte Liuhe, Sanhe et Chong', d: 'Une carte relationnelle complète entre votre signe et tous les autres. Les dynamiques avec famille, amants et supérieurs peuvent devenir visibles.' },
        { t: "Pilier de l'heure (zodiaque de l'heure de naissance)", d: "Pas seulement l'année de naissance — l'heure peut aussi porter un signe. Ce peut être votre zodiaque intérieur." },
        { t: 'Douze étapes de vie', d: 'Où vous pouvez être parmi les douze étapes : naissance, croissance, prospérité, déclin, renouveau…' }
      ]
    };

    case 'sixty': return {
      title: "Pilier de l'année (cycle sexagénaire)",
      value: sj.name,
      label: `${sj.yinyang} ${sj.element}`,
      intro: `The sexagenary cycle creates 60 imprints from the ten heavenly stems and twelve earthly branches. The same year pillar may return only once every 60 years. Your year pillar carries the quality of ${sj.yinyang} ${sj.element}.`,
      free: [
        { t: 'Votre tronc céleste', d: `The stem ${sj.name[0]} represents ${sj.yinyang} ${sj.element} and may form the foundation of character.` },
        { t: 'Votre branche terrestre', d: `The branch ${sj.name[1]} may show the flow of fate, returning to the same position every 12 years.` },
        { t: 'Traits du même pilier', d: 'Comme cette empreinte ne revient que tous les 60 ans, vous pouvez partager un terrain rare entre générations.' }
      ],
      premium: [
        { t: 'Les quatre piliers', d: "Pas seulement le pilier de l'année — mois, jour et heure ensemble peuvent compléter votre thème des Quatre Piliers." },
        { t: 'Dix Dieux et Douze Étapes', d: "Le cœur de l'astrologie des Quatre Piliers. Vie sociale, richesse, famille et santé peuvent tous entrer en vue." },
        { t: 'Cycles de chance de dix ans', d: 'Grande chance divisée en périodes de 10 ans. Dans quel cycle vous êtes peut-être maintenant, et ce qui peut suivre.' }
      ]
    };

    case 'kyusei': return {
      title: 'Étoile Honmei (Kyusei)',
      value: ks.name,
      label: `${ks.element} star`,
      intro: `Nine Star Ki derives your "honmei star" from birth year—a divination unique to Japan. With ${ks.name} as your honmei star, you may embody ${ks.desc}This star may create a 9-year cycle of fortune.`,
      free: [
        { t: "Essence de l'étoile honmei", d: ks.desc },
        { t: 'Cycle de neuf ans', d: 'La fortune honmei peut achever un tour en 9 ans — semer, nourrir, récolter et clarifier en rotation.' },
        { t: 'Bases des directions favorables', d: 'En Kyusei, les directions favorables peuvent être déterminées par honmei et getsumei. Déménagement, voyage ou orientation professionnelle peuvent modifier la fortune.' }
      ],
      premium: [
        { t: 'Étoiles Getsumei et Nichimei', d: 'Au-delà de honmei — getsumei et nichimei calculés ensemble peuvent compléter votre profil Ki.' },
        { t: 'Directions favorables cette année et la suivante', d: "Votre calendrier personnel de directions favorables, changeant chaque année — jusqu'au mois de plus grande fortune." },
        { t: 'Années Dokai et Hidokai', d: "Années où d'importants tournants peuvent arriver, et comment lire leurs signes." },
        { t: 'Compatibilité des étoiles', d: 'Un tableau de compatibilité à cinq couches entre étoiles honmei — pour famille, amour et travail.' }
      ]
    };

    case 'gogyou': return {
      title: 'Cinq Éléments',
      value: gy.element,
      label: "Élément de l'année de naissance",
      intro: `The Five Elements are the five basic forces that may compose the world. You may have come with ${gy.element} at your core. ${gy.desc}`,
      free: [
        { t: 'Votre élément', d: gy.desc },
        { t: 'Cycle de génération (soutien)', d: "Le Bois nourrit le Feu, le Feu crée la Terre, la Terre porte le Métal, le Métal recueille l'Eau, l'Eau nourrit le Bois. Vous pouvez trouver des personnes dont l'élément soutient le vôtre." },
        { t: 'Cycle de domination (contrainte)', d: "Le Bois contraint la Terre, la Terre absorbe l'Eau, l'Eau éteint le Feu, le Feu fond le Métal, le Métal coupe le Bois. Les relations de contrainte peuvent créer tension et croissance." }
      ],
      premium: [
        { t: 'Votre équilibre des Cinq Éléments', d: "Ratios calculés à partir de la date et l'heure de naissance. Ce qui peut être abondant et ce qui peut manquer." },
        { t: 'Comment compléter les éléments manquants', d: 'Une liste pratique — couleur, nourriture, direction, pierres, habitudes — pour nourrir ce qui semble absent.' },
        { t: 'Carte de compatibilité des Cinq Éléments', d: "Un tableau complet comparé aux éléments d'une autre personne. Qui peut vous soutenir et qui peut vous épuiser, d'un coup d'œil." }
      ]
    };

    case 'animal': return {
      title: 'Fortune animale',
      value: an.name,
      label: `Personality number ${an.num}/60`,
      intro: `Animal fortune derives one of 60 personality numbers from birth date and classifies them into 12 animals. You are ${an.name}. ${ANIMAL_DESC[an.name] || ''}`,
      free: [
        { t: 'Caractère de base', d: ANIMAL_DESC[an.name] || '' },
        { t: 'Classification de groupe', d: 'Les 12 animaux peuvent se diviser en trois groupes : Lune (rêveur), Terre (réaliste) et Soleil (sensible).' },
        { t: 'Sens du numéro de personnalité', d: `Your personality number is ${an.num}. Its place among 60 may suggest finer shades of character.` }
      ],
      premium: [
        { t: 'Profil complet des 60 types', d: `Detailed reading for personality number ${an.num}. The same number may appear only once every 60 days.` },
        { t: 'Type leader ou type soutien', d: 'Même au sein du même animal, types leader et soutien peuvent différer. Votre vrai rôle dans le groupe.' },
        { t: 'Compatibilité avec les 12 animaux', d: 'Cartographie complète pour amour, travail et amitié sur toutes les paires 60×60.' },
        { t: 'Caractère caché', d: "Un autre vous sous la surface — l'animal qui peut émerger sous le stress." }
      ]
    };

    case 'celtic': return {
      title: 'Oracle des arbres celtiques',
      value: ct.name,
      label: 'Un des treize arbres sacrés',
      intro: `Ancient Celtic druids divided the year into thirteen lunar months, each paired with a tree. Your guardian tree is ${ct.name}. ${ct.desc}`,
      free: [
        { t: "Pouvoir de l'arbre gardien", d: ct.desc },
        { t: 'Sagesse druidique', d: "Dans la forêt celtique, chaque arbre était dit porter un esprit différent. Votre arbre peut être l'esprit que votre âme a emprunté aux bois." },
        { t: 'Rituels avec votre arbre', d: "Respiration profonde devant votre arbre gardien, ramasser une feuille — quelque chose en vous peut s'apaiser doucement." }
      ],
      premium: [
        { t: 'Lettres Ogham', d: 'Lettres celtiques anciennes associées à chaque arbre. Votre symbole personnel, prêt à graver comme talisman.' },
        { t: 'Animal gardien et pierre', d: "L'animal et la pierre qui peuvent apparaître aux côtés de votre arbre." },
        { t: 'Rituels saisonniers', d: 'Cérémonies avec votre arbre aux équinoxes et solstices — les quatre fêtes saisonnières.' },
        { t: 'Arbres compatibles', d: 'Quels arbres de la forêt celtique peuvent donner les fruits les plus riches associés au vôtre.' }
      ]
    };

    case 'maya': return {
      title: 'Calendrier maya KIN',
      value: `KIN ${my.kin}`,
      label: `${my.tone} ${my.seal}`,
      intro: `The sacred Mayan Tzolk'in calendar runs in a 260-day cycle with 260 KIN. Your KIN is ${my.kin}, seal "${my.seal}," galactic tone "${my.tone}." The seal may reflect essence; the tone, rhythm.`,
      free: [
        { t: 'Sens du sceau', d: `${my.seal} is one of 20 seals—a symbol that may express your essence.` },
        { t: 'Sens du ton galactique', d: `${my.tone} is one of 13 rhythmic tones—it may suggest the tempo of your life.` },
        { t: 'Unicité du numéro KIN', d: "Quelqu'un avec votre KIN exact peut naître seulement une fois tous les 260 jours. Environ 25 millions d'âmes sœurs peuvent exister dans le monde." }
      ],
      premium: [
        { t: 'KIN guide, antipode et analogue', d: 'Le KIN qui peut vous guider, vous refléter et résonner avec votre énergie — pleinement identifié.' },
        { t: 'Vague de 13 jours', d: 'Le cycle de 13 jours de votre vie. Où vous êtes peut-être maintenant, et quelle vague peut suivre.' },
        { t: 'Signature galactique', d: 'Votre nom galactique complet — KIN, sceau, ton, château et chakra ensemble.' },
        { t: 'Lecture KIN quotidienne', d: "Un calendrier maya quotidien interprétant comment le KIN d'aujourd'hui se rapporte au vôtre." }
      ]
    };

    case 'tarotBirth': return {
      title: 'Carte de naissance Tarot',
      value: tb.name,
      label: `Major Arcana ${tb.num}`,
      intro: `Among the 22 Major Arcana, one card calculated from birth date may be your soul's theme card. Yours is ${tb.name}. ${TAROT_MEANINGS[tb.name]}`,
      free: [
        { t: 'Cœur de cette carte', d: TAROT_MEANINGS[tb.name] },
        { t: 'Symbolisme du nombre', d: `The number ${tb.num} may hold its own meaning in Tarot. Your life may be a journey woven by this number.` },
        { t: "Face d'ombre", d: 'Chaque carte porte lumière et ombre. Quand elle semble lourde, cela peut refléter un processus de changement ou de lâcher-prise — pas un verdict.' }
      ],
      premium: [
        { t: 'Cartes personnelles des arcanes mineurs', d: 'Calculer les couleurs des arcanes mineurs (Épées, Coupes, Bâtons, Deniers) derrière les arcanes majeurs.' },
        { t: 'Carte-thème de cette année', d: 'La carte qui change chaque année — ce que vous apprenez peut-être et ce que vous lâchez.' },
        { t: "Carte d'ombre", d: "Un autre vous caché dans l'ombre de votre carte de naissance — thèmes sous la conscience." },
        { t: 'Tirage complet à sept cartes', d: 'Un tirage de vie à travers passé, présent, futur, obstacle, espoir, inconscient et issue.' }
      ]
    };

    case 'tarotDaily': return {
      title: 'Carte du jour',
      value: dt.name,
      label: "Pour vous aujourd'hui",
      intro: `On this particular day, the card drawn from your name and today's date is ${dt.name}. ${dt.desc}`,
      free: [
        { t: 'Message du jour', d: dt.desc },
        { t: 'Pourquoi cette carte est apparue', d: "Les cartes n'apparaissent peut-être pas par hasard — elles peuvent arriver avec le message nécessaire au moment nécessaire." },
        { t: 'Comment passer la journée', d: "Quand vous alignez la journée sur l'énergie de cette carte, les choses peuvent couler plus doucement." }
      ],
      premium: [
        { t: 'Lecture sur sept jours', d: "Un tirage de sept jours à partir d'aujourd'hui — thèmes et actions à choisir chaque jour." },
        { t: 'Carte principale du mois', d: 'La carte qui peut symboliser votre mois — un thème mensuel.' },
        { t: 'Tirage en croix celtique', d: 'La lecture la plus classique — dix cartes analysant votre situation sous plusieurs angles.' }
      ]
    };

    case 'birthstone': return {
      title: 'Pierre de naissance',
      value: bs.name,
      label: `${ctx.m} birthstone`,
      intro: `A birthstone is the gem paired with your birth month. Yours is ${bs.name}. ${bs.meaning} is said to dwell within it, and it has long been worn as a talisman.`,
      free: [
        { t: 'Pouvoir de la pierre', d: bs.meaning },
        { t: 'Comment la porter', d: 'Les pierres de naissance peuvent agir mieux près de la peau — bagues, colliers, bracelets, etc.' },
        { t: 'Méthodes de purification', d: "Les pierres peuvent aussi absorber l'énergie. Lumière lunaire, amas de cristaux ou fumée de sauge peuvent aider à les purifier régulièrement." }
      ],
      premium: [
        { t: 'Vos trois pierres gardiennes', d: "Trois pierres de soutien au-delà de la pierre de naissance, dérivées de la date et de l'étoile honmei — combinées pour la synergie." },
        { t: 'Science des gemmes', d: "Structure cristalline, longueur d'onde et énergie — lues sous des angles spirituel et scientifique." },
        { t: 'Rituels des pierres', d: 'Méditation avec les pierres et grilles de cristaux composées pour différentes intentions.' }
      ]
    };

    case 'birthflower': return {
      title: 'Fleur de naissance',
      value: bf,
      label: `${ctx.m} flower`,
      intro: `A birth flower is a representative bloom for each month. Yours is ${bf}. Flowers have long been seen as mirrors reflecting the state of the soul.`,
      free: [
        { t: 'Symbole de la fleur', d: "Un symbole de votre mois de naissance. L'avoir près de soi peut apaiser le cœur." },
        { t: 'Langage des fleurs', d: 'Chaque fleur a son langage — le sens de la fleur de naissance peut être un message pour votre vie.' },
        { t: 'Vivre avec les fleurs', d: 'Une seule fleur de naissance sur votre bureau — certains jours, cela seul peut suffire à donner le ton.' }
      ],
      premium: [
        { t: 'Fleur de naissance par date', d: 'Pas seulement par mois — 365 fleurs de naissance peuvent être assignées par date. Votre floraison à vous.' },
        { t: 'Calendrier de fortune florale', d: "Une fleur chanceuse chaque mois — des floraisons adaptées à vous tout au long de l'année." },
        { t: 'Remèdes floraux', d: 'Des remèdes floraux de Bach, une liste de 38 essences alignées sur votre étoile honmei et votre numérologie.' }
      ]
    };

    case 'biorhythm': return {
      title: 'Biorythme',
      value: `Day ${bio.days.toLocaleString()}`,
      label: 'Jours depuis la naissance',
      intro: `Biorhythm is a 20th-century practice that calculates waves of physical, emotional, intellectual, and intuitive energy from days since birth. You are now on day ${bio.days.toLocaleString()}.`,
      free: [
        { t: 'Quatre vagues', d: `Physical: 23-day cycle; emotional: 28 days; intellectual: 33 days; intuitive: 38 days. Your current values may be physical ${(bio.physical*100).toFixed(0)}, emotional ${(bio.emotional*100).toFixed(0)}, intellectual ${(bio.intellectual*100).toFixed(0)}, intuitive ${(bio.intuitive*100).toFixed(0)}.` },
        { t: 'Jours critiques', d: 'Les jours où une vague croise zéro sont appelés « jours critiques » — erreurs de jugement et accidents peuvent être plus probables.' },
        { t: 'Vagues et action', d: "Montée : avancer ; descente : protéger ; pic : montrer ; creux : se reposer. Avancer avec la vague peut réduire l'épuisement." }
      ],
      premium: [
        { t: 'Calendrier prévisionnel sur 90 jours', d: 'Prévision à quatre vagues pour les 90 prochains jours — dates optimales pour réunions, entretiens, rendez-vous, déménagements, etc.' },
        { t: 'Biorythme combiné à deux', d: "Superposer les biorythmes avec partenaire ou famille pour trouver les jours d'action commune et de repos séparé." },
        { t: 'Alertes jours critiques', d: 'Préavis quand les jours critiques approchent — peut-être la mesure la plus forte de prévention des accidents.' }
      ]
    };

    case 'moon': return {
      title: 'Lune de ce soir',
      value: mp.name,
      label: `Phase ${(mp.phase * 100).toFixed(1)}%`,
      intro: `The Moon in tonight's sky is ${mp.name}. The phase is ${(mp.phase * 100).toFixed(1)}%. Lunar cycles may affect plants, the sea, the body, and the heart. What you feel right now may partly be the Moon's influence.`,
      free: [
        { t: 'Sens de la phase', d: 'Nouvelle lune : débuts ; premier quartier : défi ; pleine lune : achèvement ; dernier quartier : lâcher-prise. Que peut inviter la Lune de ce soir ?' },
        { t: 'Lune et émotion', d: 'Trois jours avant et après pleine ou nouvelle lune, les sentiments peuvent bouger plus facilement — bon moment pour des rituels de début ou de fin.' },
        { t: 'Rituels lunaires', d: "Écrire des vœux à la nouvelle lune, offrir gratitude à la pleine lune — une façon simple et ancienne de travailler avec l'énergie lunaire." }
      ],
      premium: [
        { t: 'Calendrier 12 mois nouvelle et pleine lune', d: 'Nouvelles et pleines lunes pour les 12 prochains mois, leurs signes, et comment elles peuvent vous affecter.' },
        { t: 'Cycle lunaire personnel', d: "Comment la phase d'aujourd'hui se rapporte à votre phase lunaire de naissance — des tournants de vie peuvent apparaître ici." },
        { t: 'Cérémonie de bain de clair de lune', d: 'Un rituel mensuel de pleine lune rien que pour vous — renforcer les vœux, libérer ce qui ne sert plus.' }
      ]
    };

    case 'lifeStagePrev': return {
      title: 'Jalon de vie récent',
      value: ls.prev ? `Age ${ls.prev.age}` : '—',
      label: ls.prev ? ls.prev.name : '',
      intro: ls.prev ? `At age ${ls.prev.age}, you may have passed through "${ls.prev.name}." ${ls.prev.desc}` : "Vous n'avez pas encore atteint votre premier grand jalon.",
      free: ls.prev ? [
        { t: 'Sens de ce jalon', d: ls.prev.desc },
        { t: 'Ce qui peut se passer autour de cette époque', d: 'Aux grands jalons de vie, relations, travail ou foyer peuvent souvent changer significativement.' },
        { t: 'Questions de réflexion', d: `At age ${ls.prev.age}, what was happening for you? Writing it out now may reveal patterns in your life.` }
      ] : [],
      premium: [
        { t: 'Analyse de tous les jalons passés', d: "Une liste complète des jalons de la naissance à aujourd'hui — ce qui s'est passé alors, ce qui a changé." },
        { t: 'Jalons cachés', d: 'Transits astrologiques importants peu connus — tournants discrets dans votre vie.' },
        { t: 'Motifs en chaîne des jalons', d: 'Thèmes qui peuvent se répéter à vos jalons. Préparation pour ce qui peut suivre.' }
      ]
    };

    case 'lifeStageNext': return {
      title: 'Prochain jalon de vie',
      value: ls.next ? `Age ${ls.next.age}` : '—',
      label: ls.next ? ls.next.name : '',
      intro: ls.next ? `Your next life milestone may be at age ${ls.next.age}: "${ls.next.name}." It may arrive in about ${(ls.next.age - ls.years).toFixed(1)} years. ${ls.next.desc}` : 'Vous êtes peut-être dans une période calme entre grands jalons.',
      free: ls.next ? [
        { t: 'Sens de ce jalon', d: ls.next.desc },
        { t: "Ce qu'il faut préparer", d: 'Les signes peuvent commencer discrètement plusieurs années avant un grand jalon. Écoutez la voix intérieure.' },
        { t: "Signes d'opportunité", d: "Autour de ce jalon, de nouveaux liens, lieux ou rôles peuvent être plus susceptibles d'apparaître. Rester ouvert(e) peut aider." }
      ] : [],
      premium: [
        { t: 'Chronologie complète sur dix ans', d: 'Chaque jalon qui peut arriver dans les dix prochaines années, son sens, et comment mieux se préparer.' },
        { t: 'Timing pour mariage, naissance, changement de carrière', d: 'Analyse des transits pour identifier le timing favorable aux grandes décisions de vie.' },
        { t: "Périodes d'épreuve et comment les traverser", d: "Les jalons peuvent souvent apporter des épreuves. Savoir à l'avance peut aider le cœur à se préparer." }
      ]
    };
  }
  return null;
}
