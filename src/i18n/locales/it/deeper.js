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
    { t: 'Lato luminoso', d: "Impulso e decisione. Il potere di avanzare prima degli altri e aprire nuovi sentieri. Un'anima che sembra destinata a guidare." },
    { t: 'Lato ombra', d: 'Isolamento, orgoglio, ostinazione. Quando smetti di ascoltare gli altri, puoi derivare verso una presenza dominante.' },
    { t: 'Scopo di vita', d: 'Issare la propria bandiera. Non seguire le orme di qualcun altro, ma lasciare la propria traccia.' }
  ],
  2: [
    { t: 'Lato luminoso', d: 'Empatia, armonia, sottile sintonia. Leggere la stanza e collegare silenziosamente le persone tra loro.' },
    { t: 'Lato ombra', d: 'Indecisione, dipendenza, eccessivo sacrificio. Restare troppo a lungo la « persona gentile » e perdersi.' },
    { t: 'Scopo di vita', d: 'Essere un ponte. Brillare in relazioni che non possono completarsi da sole.' }
  ],
  3: [
    { t: 'Lato luminoso', d: 'Espressione, ottimismo, creatività. Il potere di illuminare le persone con parole, colore e risate.' },
    { t: 'Lato ombra', d: 'Mutevolezza, superficialità, leggerezza. Una tendenza a nuotare in superficie ed evitare la profondità.' },
    { t: 'Scopo di vita', d: 'Aggiungere gioia al mondo. Il semplice atto di godersi la vita può diventare conforto per qualcun altro.' }
  ],
  4: [
    { t: 'Lato luminoso', d: "Diligenza, pazienza, affidabilità. Un'anima artigiana che costruisce strato dopo strato." },
    { t: 'Lato ombra', d: 'Rigidità, conservatorismo, inflessibilità. La paura del cambiamento può chiuderti in un guscio.' },
    { t: 'Scopo di vita', d: 'Costruire le fondamenta del mondo. Non appariscente, ma diventare un pilastro indispensabile.' }
  ],
  5: [
    { t: 'Lato luminoso', d: "Spirito avventuroso, flessibilità, versatilità. Un'anima simile al vento che si nutre del cambiamento." },
    { t: 'Lato ombra', d: 'Irrequietezza, impulsività, irresponsabilità. Paura di restare abbastanza a lungo con qualcosa.' },
    { t: 'Scopo di vita', d: 'Raccogliere esperienza. Non restare in un posto, ma incidere la varietà del mondo in te.' }
  ],
  6: [
    { t: 'Lato luminoso', d: 'Affetto, responsabilità, mediazione. Una presenza calorosa spesso al centro di famiglia o comunità.' },
    { t: 'Lato ombra', d: 'Surprotezione, ingerenza, mentalità da martire. Il momento in cui la cura può diventare controllo.' },
    { t: 'Scopo di vita', d: "Portare ordine attraverso l'amore. Il tuo modo di prenderti cura può aiutare a guarire il mondo." }
  ],
  7: [
    { t: 'Lato luminoso', d: "Curiosità, intuizione, profondità analitica. Un'anima che si immerge e riporta la verità in superficie." },
    { t: 'Lato ombra', d: 'Solitudine, critica, ritiro dalle persone. Chiudere il cuore al mondo intorno.' },
    { t: 'Scopo di vita', d: 'Fare da ponte alla conoscenza. Restituire al mondo ciò che hai guadagnato nella solitudine.' }
  ],
  8: [
    { t: 'Lato luminoso', d: 'Esecuzione, leadership, il dono di rendere le cose reali. Potere che può governare materia e spirito.' },
    { t: 'Lato ombra', d: 'Sete di potere, forza bruta, attaccamento al denaro. Una linea sottile dove la forza può diventare coercizione.' },
    { t: 'Scopo di vita', d: "Dare forma all'abbondanza. Ricchezza, relazioni ed energia sono fatte per circolare, non solo essere trattenute." }
  ],
  9: [
    { t: 'Lato luminoso', d: 'Amore ampio, spirito umanitario, saggezza del completamento. Una presenza che può integrare ogni numero.' },
    { t: 'Lato ombra', d: 'Evitamento, mentalità da vittima, idealismo moralizzatore. Esaurimento di ideali fuori portata.' },
    { t: 'Scopo di vita', d: 'Completare un ciclo e trametterlo. Tenere il passato e rilasciarlo verso il futuro.' }
  ],
  11: [
    { t: 'Lato luminoso', d: 'Intuizione e spiritualità accentuate. Guidare gli altri come messaggero di luce.' },
    { t: 'Lato ombra', d: 'Tensione nervosa, affaticamento, dubbio di sé. Ricevere troppo finché il cuore si sente sopraffatto.' },
    { t: 'Scopo di vita', d: 'Dare forma visibile alle cose invisibili. Tra i costruttori di ponti, forse il ruolo più delicato.' }
  ],
  22: [
    { t: 'Lato luminoso', d: 'Maestro Costruttore. Un raro potere di trasformare i sogni in strutture nel mondo reale.' },
    { t: 'Lato ombra', d: 'Essere schiacciato dalla responsabilità — o fuggirne.' },
    { t: 'Scopo di vita', d: 'Realizzare una grande visione. Non da solo, ma coinvolgendo molte persone.' }
  ],
  33: [
    { t: 'Lato luminoso', d: "Maestro Insegnante. Un'anima che può incarnare l'amore incondizionato." },
    { t: 'Lato ombra', d: "Controllo in nome dell'amore — o esaurimento dell'amore stesso." },
    { t: 'Scopo di vita', d: "Insegnare l'amore stesso. Una vita che può diventare il proprio manuale." }
  ]
};

export function premiumGeneric(systemLabel, valueLabel) {
  return [
    { t: 'Onde di fortuna decennali', d: `As ${valueLabel} in ${systemLabel}, you may move through fortune in a 9-year cycle. Details on your next peak year, caution year, and best months for planting seeds.` },
    { t: 'Lettura di compatibilità', d: 'Un guide complet su 12 quadrants : types che possono risuonare con tuo energia, types che stimulent la croissance, et types à aborder con soin.' },
    { t: 'Adeguatezza professionale', d: `Roles where ${valueLabel} may thrive most, roles that may feel misaligned, and how to express it through side work—read against a modern career map.` },
    { t: "Lezione dell'anima", d: 'La lezione più importante che forse sei venuto/a a incontrare in questa vita, e come riconoscere i suoi primi segni.' },
    { t: 'Persone note che condividono la stessa energia', d: "Une liste de 100 figures historiques et contemporaines partageant cette énergie. Apprendre des choix qu'elles ont faits." }
  ];
}

export function buildDeep(cardKey, ctx) {
  const { lp, py, en, expr, nameRoman, sun, mt, cz, sj, ks, gy, an, ct, my, tb, dt, bs, bf, bio, mp, ls } = ctx;

  switch (cardKey) {
    case 'lifepath': return {
      title: 'Numero del percorso di vita',
      value: lp,
      label: LIFE_PATH_MEANINGS[lp].label,
      intro: `Life Path ${lp} is the main theme of your life. It may reflect the role your soul chose before birth. ${LIFE_PATH_MEANINGS[lp].desc}`,
      free: LP_DETAILS[lp] || [
        { t: 'Lato luminoso', d: 'Il tuo più grande dono potrebbe dormire qui.' },
        { t: 'Lato ombra', d: "Quando l'equilibrio si perde, questo lato può manifestarsi." },
        { t: 'Scopo di vita', d: 'Il significato di scegliere questo percorso.' }
      ],
      premium: premiumGeneric('Percorso di vita', String(lp))
    };

    case 'personalYear': return {
      title: 'Anno personale',
      value: py,
      label: `You in ${ctx.currentYear}`,
      intro: `Your personal year follows a 9-year rhythm unique to you. This year is a ${py} year. ${PERSONAL_YEAR_MEANINGS[py]}When you move with this wave rather than against it, fortune may flow more smoothly.`,
      free: [
        { t: "Venti favorevoli quest'anno", d: `${PERSONAL_YEAR_MEANINGS[py]}Movement in this direction may be more easily blessed.` },
        { t: "Insidie quest'anno", d: `Conversely, holding on to the previous wave—something like "${PERSONAL_YEAR_MEANINGS[personalYearPrev(py)]}"—may tend to bring stagnation.` },
        { t: "Segni per l'anno prossimo", d: `Next year is Personal Year ${personalYearNext(py)}. ${PERSONAL_YEAR_MEANINGS[personalYearNext(py)] || 'Un punto di svolta verso un nuovo ciclo.'} This year\'s choices may become next year\'s starting point.` }
      ],
      premium: [
        { t: 'Calendario di fortuna mensile', d: 'Douze mois détaillés par mois personnel et jour personnel. Identifier quand agir, attendre et décider.' },
        { t: "Parole chiave per quest'anno", d: "Tre parole chiave date solo a te per quest'anno. Una bussola quando il giudizio sembra incerto." },
        { t: "Incontri quest'anno", d: "Les types de liens qui peuvent apparaître, d'où ils peuvent venir, et comment les reconnaître." },
        { t: 'Mesi da osservare', d: "Périodes où santé, argent ou relations peuvent sembler instables — et rituels qui peuvent aider à rétablir l'équilibre." }
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
        title: 'Numero del nome',
        value: dual ? `${native} · ${latin}` : native,
        label: dual ? 'Nome visualizzato / lettere romane' : (EXPRESSION_MEANINGS[native] || '').replace('Energia del nome:', ''),
        intro: dual
          ? `From your display name we read ${native}; from "${roman}" we read ${latin}. Both describe how you are called—separate from Life Path ${lp}. Different numbers are not a contest for which is "correct."`
          : `Your name releases the energy of ${native} each time it is spoken—separate from Life Path ${lp}, the number of how you are called.`,
        free: [
          {
            t: 'Numero del nome in scrittura visualizzata',
            d: `From your display name: ${native}. This uses a simple Unicode glyph sum for non-Latin scripts—not classical Western numerology. It may suggest ${nativeTrait} as a lens, not a verdict.`
          },
          dual
            ? {
              t: 'Numero del nome romano / latino (pitagorico)',
              d: `"${roman}" maps to ${latin} on the usual A–Z chart. ${latinTrait}This is closer to what international numerology often calls the expression number.`
            }
            : {
              t: 'Un secondo asse in lettere romane',
              d: roman && latin == null
                ? "Aucune lettre A–Z n'a été trouvée dans le champ romain, donc le nombre international n'a pas été calculé. Essayez un passeport ou une orthographe romanisée."
                : 'Aggiungi une orthographe romaine ou latine optionnelle per voir aussi le nombre international A–Z à côté de tuo nom affiché.'
            },
          {
            t: 'Relazione con il percorso di vita',
            d: dual
              ? `Life Path ${lp}, display ${native}, and Roman ${latin} together may show birth essence, everyday calling, and international resonance.`
              : `Life Path ${lp} with display ${native} may show the balance between inner essence and how you are called.`
          },
          { t: 'Suggerimenti per rinominare', d: "Si tuo nom actuel semble lourd, un surnom ou nom commercial con un autre nombre può inviter une autre longueur d'onde." }
        ],
        premium: premiumGeneric('Numero del nome', dual ? `${native}/${latin}` : String(native))
      };
    }

    case 'sun': return {
      title: 'Segno solare',
      value: `${sun.symbol} ${sun.name}`,
      label: `${sun.element} element`,
      intro: `Your sun sign may reveal the core of your self. With the Sun in ${sun.name}, you may embody ${sun.desc}Each birthday, the Sun returns to the same sign and shines on you again.`,
      free: [
        { t: 'Cuore di questo segno', d: `${sun.name} belongs to the ${sun.element} element and may hold a distinct worldview. ${sun.desc}` },
        { t: 'Momenti di radiosità', d: `${sun.name} may shine brightest in environments aligned with its element. Choose places where ${sun.element} qualities can be expressed.` },
        { t: "Vivere con l'ombra", d: 'Ogni signe a sa lumière et son ombre. Dei habitudes quotidiennes che choisissent la lumière possono changer la qualité de tuo vita.' }
      ],
      premium: [
        { t: 'Segno lunare e ascendente', d: "Il Sole n'è pas tuo seul signe. À partir de l'heure et du lieu de nascita, luna et Ascendant possono essere calculés — une symphonie de trois astres." },
        { t: 'Analisi completa delle 12 case', d: 'Una vue complète de comment tuo signe può se placer in les 12 maisons (domaines de vita).' },
        { t: 'Grandi transiti', d: 'Come les planètes extérieures possono affecter tuo tema su les trois prochaines annos, mese par mese.' },
        { t: 'Tema di compatibilità', d: 'Analyse de synastrie à cinq couches avec partenaire ou famille.' },
        { t: 'Tema delle vite passate', d: "Thèmes d'âme des vies passées et devoirs de cette vie, lus à travers les nœuds lunaires." }
      ]
    };

    case 'moonTrait': return {
      title: 'Tendenza lunare',
      value: mt.name,
      label: 'Dalla fase lunare alla nascita',
      intro: `The shape of the Moon in the sky at your birth may shape the "habit" of your emotional rhythm. ${mt.desc}`,
      free: [
        { t: 'Schemi emotivi', d: 'Façons typiques dont les sentiments peuvent se mouvoir pour les personnes nées sous cette phase lunaire.' },
        { t: 'Come relazionarsi alla Luna', d: 'Nelle notti di luna piena, luna nuova e nei giorni di primo o ultimo quarto — puoi scoprire cosa ti fa sentire rinnovato/a.' },
        { t: 'Diario dei sogni', d: "Ceux avec de fortes tendances lunaires peuvent trouver que les rêves portent des messages importants. Essayez trois minutes d'écriture le matin." }
      ],
      premium: [
        { t: 'Segno lunare esatto', d: 'Con heure et lieu de nascita, un tutto autre signe può apparaître — tuo vrai linguaggio émotionnel.' },
        { t: 'Fortuna secondo la fase lunare', d: 'Actions favorables par phase lunaire pour les 12 prochains mois.' },
        { t: 'Rituali lunari', d: 'Come comporre ogni mese cerimonie di luna nuova e piena adatte a te.' }
      ]
    };

    case 'zodiac': return {
      title: 'Zodiaco cinese',
      value: cz.name,
      label: `Born in the Year of the ${cz.char}`,
      intro: `${cz.name} is the animal you may have chosen within the 12-year cycle of the Eastern calendar. ${cz.desc}People sharing the same sign may meet milestones every 12 years.`,
      free: [
        { t: 'Cuore di questo segno', d: cz.desc },
        { t: 'Anno benming', d: 'Tutti i 12 ans revitant tuo propre anno zodiacale. Appelée « anno benming », elle può devenir un traguardo de vita.' },
        { t: 'Suggerimenti di compatibilità', d: 'Liuhe (meilleure affinité), Sanhe (bon lien), Chong (choc stimulant) — les combinaisons du zodiaque peuvent porter un sens profond.' }
      ],
      premium: [
        { t: 'Carte Liuhe, Sanhe et Chong', d: 'Una carta relationnelle complète tra tuo signe et tutti les autres. Il dynamiques con famille, amants et supérieurs possono devenir visibles.' },
        { t: "Pilier de l'heure (zodiaque de l'heure de naissance)", d: "Non solo l'anno de nascita — l'heure può aussi porter un signe. Ce può essere tuo zodiache intérieur." },
        { t: 'Dodici fasi di vita', d: 'Dove puoi trovarti tra le dodici fasi della vita: nascita, crescita, prosperità, declino, rinnovamento…' }
      ]
    };

    case 'sixty': return {
      title: "Pilastro dell'anno (ciclo sexagenario)",
      value: sj.name,
      label: `${sj.yinyang} ${sj.element}`,
      intro: `The sexagenary cycle creates 60 imprints from the ten heavenly stems and twelve earthly branches. The same year pillar may return only once every 60 years. Your year pillar carries the quality of ${sj.yinyang} ${sj.element}.`,
      free: [
        { t: 'Il tuo tronco celeste', d: `The stem ${sj.name[0]} represents ${sj.yinyang} ${sj.element} and may form the foundation of character.` },
        { t: 'Il tuo ramo terrestre', d: `The branch ${sj.name[1]} may show the flow of fate, returning to the same position every 12 years.` },
        { t: 'Tratti dello stesso pilastro', d: 'Poiché questa impronta ritorna solo ogni 60 anni, puoi condividere raro terreno comune tra generazioni.' }
      ],
      premium: [
        { t: 'I quattro pilastri', d: "Non solo le pilier de l'anno — mese, giorno et heure ensemble possono compléter tuo tema des Quatre Piliers." },
        { t: 'Dieci Dei e Dodici Stadi', d: "Le cœur de l'astrologie des Quatre Piliers. Vie sociale, richesse, famille et santé peuvent tous entrer en vue." },
        { t: 'Cicli di fortuna decennali', d: 'Grande fortuna divisa in periodi di 10 anni. In quale ciclo potresti essere ora e cosa può seguire.' }
      ]
    };

    case 'kyusei': return {
      title: 'Stella Honmei (Kyusei)',
      value: ks.name,
      label: `${ks.element} star`,
      intro: `Nine Star Ki derives your "honmei star" from birth year—a divination unique to Japan. With ${ks.name} as your honmei star, you may embody ${ks.desc}This star may create a 9-year cycle of fortune.`,
      free: [
        { t: 'Essenza della stella honmei', d: ks.desc },
        { t: 'Ciclo di nove anni', d: 'La fortune honmei peut achever un tour en 9 ans — semer, nourrir, récolter et clarifier en rotation.' },
        { t: 'Basi delle direzioni fortunate', d: 'En Kyusei, les directions favorables peuvent être déterminées par honmei et getsumei. Déménagement, voyage ou orientation professionnelle peuvent modifier la fortune.' }
      ],
      premium: [
        { t: 'Étoiles Getsumei et Nichimei', d: 'Oltre de honmei — getsumei et nichimei calculés ensemble possono compléter tuo profil Ki.' },
        { t: "Direzioni fortunate quest'anno e il prossimo", d: 'Il tuo calendario personale di direzioni fortunate, che cambia ogni anno — fino al mese di maggiore fortuna.' },
        { t: 'Années Dokai et Hidokai', d: "Années où d'importants tournants peuvent arriver, et comment lire leurs signes." },
        { t: 'Compatibilité des étoiles', d: 'Un tableau de compatibilité à cinq couches entre étoiles honmei — pour famille, amour et travail.' }
      ]
    };

    case 'gogyou': return {
      title: 'Cinque Elementi',
      value: gy.element,
      label: "Elemento dell'anno di nascita",
      intro: `The Five Elements are the five basic forces that may compose the world. You may have come with ${gy.element} at your core. ${gy.desc}`,
      free: [
        { t: 'Il tuo elemento', d: gy.desc },
        { t: 'Ciclo di generazione (sostegno)', d: "Le Bois nourrit le Feu, le Feu crée la Terre, la Terre porte le Métal, le Métal recueille l'Eau, l'Eau nourrit le Bois. Vous pouvez trouver des personnes dont l'élément soutient le vôtre." },
        { t: 'Ciclo di dominazione (vincolo)', d: "Le Bois contraint la Terre, la Terre absorbe l'Eau, l'Eau éteint le Feu, le Feu fond le Métal, le Métal coupe le Bois. Les relations de contrainte peuvent créer tension et croissance." }
      ],
      premium: [
        { t: 'Il tuo equilibrio dei Cinque Elementi', d: 'Rapporti calcolati da data e ora di nascita. Cosa può essere abbondante e cosa può mancare.' },
        { t: 'Comment compléter les éléments manquants', d: 'Une liste pratique — couleur, nourriture, direction, pierres, habitudes — pour nourrir ce qui semble absent.' },
        { t: 'Mappa di compatibilità dei Cinque Elementi', d: "Un quadro completo rispetto agli elementi di un'altra persona. Chi può sostenerti e chi può prosciugarti, a colpo d'occhio." }
      ]
    };

    case 'animal': return {
      title: 'Fortuna animale',
      value: an.name,
      label: `Personality number ${an.num}/60`,
      intro: `Animal fortune derives one of 60 personality numbers from birth date and classifies them into 12 animals. You are ${an.name}. ${ANIMAL_DESC[an.name] || ''}`,
      free: [
        { t: 'Carattere di base', d: ANIMAL_DESC[an.name] || '' },
        { t: 'Classificazione di gruppo', d: 'Les 12 animaux peuvent se diviser en trois groupes : Lune (rêveur), Terre (réaliste) et Soleil (sensible).' },
        { t: 'Significato del numero di personalità', d: `Your personality number is ${an.num}. Its place among 60 may suggest finer shades of character.` }
      ],
      premium: [
        { t: 'Profil complet des 60 types', d: `Detailed reading for personality number ${an.num}. The same number may appear only once every 60 days.` },
        { t: 'Tipo leader o tipo di supporto', d: 'Anche nello stesso animale, tipi leader e di supporto possono differire. Il tuo vero ruolo nel gruppo.' },
        { t: 'Compatibilité avec les 12 animaux', d: 'Cartographie complète pour amour, travail et amitié sur toutes les paires 60×60.' },
        { t: 'Carattere nascosto', d: "Un altro te sotto la superficie — l'animale che può emergere sotto stress." }
      ]
    };

    case 'celtic': return {
      title: 'Oracolo degli alberi celtici',
      value: ct.name,
      label: 'Uno dei tredici alberi sacri',
      intro: `Ancient Celtic druids divided the year into thirteen lunar months, each paired with a tree. Your guardian tree is ${ct.name}. ${ct.desc}`,
      free: [
        { t: "Potere dell'albero guardiano", d: ct.desc },
        { t: 'Saggezza druidica', d: 'Nella foresta celtica, ogni albero si diceva portare uno spirito diverso. Il tuo albero può essere lo spirito che la tua anima ha preso in prestito dal bosco.' },
        { t: 'Rituali con il tuo albero', d: 'Respiro profondo davanti al tuo albero guardiano, raccogliere una singola foglia — qualcosa in te può calmarsi dolcemente.' }
      ],
      premium: [
        { t: 'Lettres Ogham', d: 'Antiche lettere celtiche associate a ogni albero. Il tuo simbolo personale, pronto da incidere come talismano.' },
        { t: 'Animal gardien et pierre', d: "L'animal et la pierre che possono apparaître aux côtés de tuo albero." },
        { t: 'Rituels saisonniers', d: 'Cérémonies con tuo albero aux équinoxes et solstiquesti — les quatre fêtes saisonnières.' },
        { t: 'Arbres compatibles', d: 'Quels arbres de la forêt celtique peuvent donner les fruits les plus riches associés au vôtre.' }
      ]
    };

    case 'maya': return {
      title: 'Calendario maya KIN',
      value: `KIN ${my.kin}`,
      label: `${my.tone} ${my.seal}`,
      intro: `The sacred Mayan Tzolk'in calendar runs in a 260-day cycle with 260 KIN. Your KIN is ${my.kin}, seal "${my.seal}," galactic tone "${my.tone}." The seal may reflect essence; the tone, rhythm.`,
      free: [
        { t: 'Significato del sigillo', d: `${my.seal} is one of 20 seals—a symbol that may express your essence.` },
        { t: 'Significato del tono galattico', d: `${my.tone} is one of 13 rhythmic tones—it may suggest the tempo of your life.` },
        { t: 'Unicità del numero KIN', d: "Qualcuno con tuo KIN exact può naître seulement une fois tutti les 260 giornos. Environ 25 millions d'animas sœurs possono exister in le mondo." }
      ],
      premium: [
        { t: 'KIN guida, antipode e analogo', d: 'Il KIN che può guidarti, rifletterti e risuonare con la tua energia — pienamente identificato.' },
        { t: 'Onda di 13 giorni', d: 'Il ciclo di 13 giorni della tua vita. Dove potresti essere ora e quale onda può seguire.' },
        { t: 'Firma galattica', d: 'Il tuo nome galattico completo — KIN, sigillo, tono, castello e chakra insieme.' },
        { t: 'Lecture KIN quotidienne', d: "Un calendrier maya quotidien interprétant comment le KIN d'aujourd'hui se rapporte au vôtre." }
      ]
    };

    case 'tarotBirth': return {
      title: 'Carta di nascita Tarot',
      value: tb.name,
      label: `Major Arcana ${tb.num}`,
      intro: `Among the 22 Major Arcana, one card calculated from birth date may be your soul's theme card. Yours is ${tb.name}. ${TAROT_MEANINGS[tb.name]}`,
      free: [
        { t: 'Cuore di questa carta', d: TAROT_MEANINGS[tb.name] },
        { t: 'Simbolismo del numero', d: `The number ${tb.num} may hold its own meaning in Tarot. Your life may be a journey woven by this number.` },
        { t: 'Lato ombra', d: 'Chaque carte porte lumière et ombre. Quand elle semble lourde, cela peut refléter un processus de changement ou de lâcher-prise — pas un verdict.' }
      ],
      premium: [
        { t: 'Cartes personnelles des arcanes mineurs', d: 'Calculer les couleurs des arcanes mineurs (Épées, Coupes, Bâtons, Deniers) derrière les arcanes majeurs.' },
        { t: "Carta-tema di quest'anno", d: 'La carta che cambia ogni anno — cosa stai imparando e cosa stai lasciando andare.' },
        { t: "Carta d'ombra", d: "Un altro te nascosto nell'ombra della tua carta di nascita — temi sotto la coscienza." },
        { t: 'Tirage complet à sept cartes', d: 'Un tirage de vie à travers passé, présent, futur, obstacle, espoir, inconscient et issue.' }
      ]
    };

    case 'tarotDaily': return {
      title: 'Carta di oggi',
      value: dt.name,
      label: 'Per te oggi',
      intro: `On this particular day, the card drawn from your name and today's date is ${dt.name}. ${dt.desc}`,
      free: [
        { t: 'Messaggio di oggi', d: dt.desc },
        { t: 'Perché è apparsa questa carta', d: "Les cartes n'apparaissent peut-être pas par hasard — elles peuvent arriver avec le message nécessaire au moment nécessaire." },
        { t: 'Come trascorrere la giornata', d: "Quando allinei la giornata all'energia di questa carta, le cose possono scorrere sorprendentemente più dolcemente." }
      ],
      premium: [
        { t: 'Lecture sur sept jours', d: "Un tirage de sept jours à partir d'aujourd'hui — thèmes et actions à choisir chaque jour." },
        { t: 'Carte principale du mois', d: 'La carta che può symboliser tuo mese — un tema mensuel.' },
        { t: 'Tirage en croix celtique', d: 'La lettura la plus classiche — dix cartas analysant tuo situazione sotto plusieurs angles.' }
      ]
    };

    case 'birthstone': return {
      title: 'Pietra di nascita',
      value: bs.name,
      label: `${ctx.m} birthstone`,
      intro: `A birthstone is the gem paired with your birth month. Yours is ${bs.name}. ${bs.meaning} is said to dwell within it, and it has long been worn as a talisman.`,
      free: [
        { t: 'Potere della gemma', d: bs.meaning },
        { t: 'Come indossarla', d: 'Les pierres de naissance peuvent agir mieux près de la peau — bagues, colliers, bracelets, etc.' },
        { t: 'Metodi di purificazione', d: "Les pierres peuvent aussi absorber l'énergie. Lumière lunaire, amas de cristaux ou fumée de sauge peuvent aider à les purifier régulièrement." }
      ],
      premium: [
        { t: 'Vos trois pierres gardiennes', d: "Trois pierres de soutien au-delà de la pierre de naissance, dérivées de la date et de l'étoile honmei — combinées pour la synergie." },
        { t: 'Science des gemmes', d: "Structure cristalline, longueur d'onde et énergie — lues sous des angles spirituel et scientifique." },
        { t: 'Rituels des pierres', d: 'Méditation avec les pierres et grilles de cristaux composées pour différentes intentions.' }
      ]
    };

    case 'birthflower': return {
      title: 'Fiore di nascita',
      value: bf,
      label: `${ctx.m} flower`,
      intro: `A birth flower is a representative bloom for each month. Yours is ${bf}. Flowers have long been seen as mirrors reflecting the state of the soul.`,
      free: [
        { t: 'Simbolo del fiore', d: "Un simbolo de tuo mese de nascita. L'avere près de soi può apaiser le cuore." },
        { t: 'Linguaggio dei fiori', d: 'Ogni fiore a son linguaggio — le sens de la fiore de nascita può essere un message per tuo vita.' },
        { t: 'Vivere con i fiori', d: 'Una seule fiore de nascita su tuo scrivania — certains giornos, ciò seul può suffire à dare le ton.' }
      ],
      premium: [
        { t: 'Fiore di nascita per data', d: 'Non solo per mese — 365 fiori di nascita possono essere assegnati per data. Il tuo fiore tutto tuo.' },
        { t: 'Calendario di fortuna floreale', d: "Un fiore fortunato ogni mese — fioriture adatte a te per tutto l'anno." },
        { t: 'Remèdes floraux', d: 'Dei rimedi floreali di Bach, une lista di 38 essenze allineate su tuo stella honmei et tuo numerologia.' }
      ]
    };

    case 'biorhythm': return {
      title: 'Bioritmo',
      value: `Day ${bio.days.toLocaleString()}`,
      label: 'Giorni dalla nascita',
      intro: `Biorhythm is a 20th-century practice that calculates waves of physical, emotional, intellectual, and intuitive energy from days since birth. You are now on day ${bio.days.toLocaleString()}.`,
      free: [
        { t: 'Quattro onde', d: `Physical: 23-day cycle; emotional: 28 days; intellectual: 33 days; intuitive: 38 days. Your current values may be physical ${(bio.physical*100).toFixed(0)}, emotional ${(bio.emotional*100).toFixed(0)}, intellectual ${(bio.intellectual*100).toFixed(0)}, intuitive ${(bio.intuitive*100).toFixed(0)}.` },
        { t: 'Giorni critici', d: 'Les jours où une vague croise zéro sont appelés « jours critiques » — erreurs de jugement et accidents peuvent être plus probables.' },
        { t: 'Onde e azione', d: "Montée : avancer ; descente : protéger ; pic : montrer ; creux : se reposer. Avancer avec la vague peut réduire l'épuisement." }
      ],
      premium: [
        { t: 'Calendrier prévisionnel sur 90 jours', d: 'Previsione à quatre vagues per les 90 prochains giornos — dates optimales per riunioni, colloqui, appuntamenti, traslochi, etc.' },
        { t: 'Biorythme combiné à deux', d: "Superposer les biorythmes avec partenaire ou famille pour trouver les jours d'action commune et de repos séparé." },
        { t: 'Alertes jours critiques', d: 'Préavis quand les jours critiques approchent — peut-être la mesure la plus forte de prévention des accidents.' }
      ]
    };

    case 'moon': return {
      title: 'Luna di stasera',
      value: mp.name,
      label: `Phase ${(mp.phase * 100).toFixed(1)}%`,
      intro: `The Moon in tonight's sky is ${mp.name}. The phase is ${(mp.phase * 100).toFixed(1)}%. Lunar cycles may affect plants, the sea, the body, and the heart. What you feel right now may partly be the Moon's influence.`,
      free: [
        { t: 'Significato della fase', d: 'Nouvelle lune : débuts ; premier quartier : défi ; pleine lune : achèvement ; dernier quartier : lâcher-prise. Que peut inviter la Lune de ce soir ?' },
        { t: 'Luna ed emozione', d: 'Trois jours avant et après pleine ou nouvelle lune, les sentiments peuvent bouger plus facilement — bon moment pour des rituels de début ou de fin.' },
        { t: 'Rituali lunari', d: "Écrire des vœux à la nouvelle lune, offrir gratitude à la pleine lune — une façon simple et ancienne de travailler avec l'énergie lunaire." }
      ],
      premium: [
        { t: 'Calendario 12 mesi luna nuova e piena', d: 'Lune nuove e piene per i prossimi 12 mesi, i loro segni e come possono influenzarti.' },
        { t: 'Cycle lunaire personnel', d: "Come la phase d'augiornod'hui se rapporte à tuo phase lunaire de nascita — des svolte de vita possono apparaître ici." },
        { t: 'Cerimonia del bagno di luce lunare', d: 'Un rituale mensile di luna piena solo per te — rafforzare i desideri, liberare ciò che non serve più.' }
      ]
    };

    case 'lifeStagePrev': return {
      title: 'Traguardo di vita recente',
      value: ls.prev ? `Age ${ls.prev.age}` : '—',
      label: ls.prev ? ls.prev.name : '',
      intro: ls.prev ? `At age ${ls.prev.age}, you may have passed through "${ls.prev.name}." ${ls.prev.desc}` : 'Non hai ancora raggiunto il tuo primo grande traguardo.',
      free: ls.prev ? [
        { t: 'Significato di questo traguardo', d: ls.prev.desc },
        { t: 'Cosa può accadere in quel periodo', d: 'Aux grands jalons de vie, relations, travail ou foyer peuvent souvent changer significativement.' },
        { t: 'Domande di riflessione', d: `At age ${ls.prev.age}, what was happening for you? Writing it out now may reveal patterns in your life.` }
      ] : [],
      premium: [
        { t: 'Analyse de tous les jalons passés', d: "Une liste complète des jalons de la naissance à aujourd'hui — ce qui s'est passé alors, ce qui a changé." },
        { t: 'Jalons cachés', d: 'Transits astrologiques importants peu connus — svolte discreti in tuo vita.' },
        { t: 'Motifs en chaîne des jalons', d: 'Thèmes qui peuvent se répéter à vos jalons. Préparation pour ce qui peut suivre.' }
      ]
    };

    case 'lifeStageNext': return {
      title: 'Prossimo traguardo di vita',
      value: ls.next ? `Age ${ls.next.age}` : '—',
      label: ls.next ? ls.next.name : '',
      intro: ls.next ? `Your next life milestone may be at age ${ls.next.age}: "${ls.next.name}." It may arrive in about ${(ls.next.age - ls.years).toFixed(1)} years. ${ls.next.desc}` : 'Potresti essere in un periodo tranquillo tra grandi traguardi.',
      free: ls.next ? [
        { t: 'Significato di questo traguardo', d: ls.next.desc },
        { t: 'Cosa preparare', d: 'Les signes peuvent commencer discrètement plusieurs années avant un grand jalon. Écoutez la voix intérieure.' },
        { t: 'Segni di opportunità', d: "Autour de ce jalon, de nouveaux liens, lieux ou rôles peuvent être plus susceptibles d'apparaître. Rester ouvert(e) peut aider." }
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
