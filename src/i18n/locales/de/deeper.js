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
    { t: 'Lichtseite', d: 'Tatkraft und Entschlossenheit. Die Kraft, vor anderen voranzuschreiten und neue Wege zu öffnen. Eine Seele, die zu führen bestimmt scheint.' },
    { t: 'Schattenseite', d: 'Isolation, Stolz, Sturheit. Wenn Sie aufhören, andere zu hören, können Sie zu einer dominierenden Präsenz driften.' },
    { t: 'Lebenszweck', d: 'To raise your own flag. Not to follow in someone else\'s footsteps, but to leave your own trail.' }
  ],
  2: [
    { t: 'Lichtseite', d: 'Empathie, Harmonie, feine Abstimmung. Den Raum lesen und Menschen still miteinander verbinden.' },
    { t: 'Schattenseite', d: 'Unentschlossenheit, Abhängigkeit, übermäßiges Opfer. Zu lange der „nette Mensch“ bleiben und sich selbst verlieren.' },
    { t: 'Lebenszweck', d: 'Eine Brücke sein. In Beziehungen leuchten, die allein nicht vollendet werden können.' }
  ],
  3: [
    { t: 'Lichtseite', d: 'Ausdruck, Optimismus, Kreativität. Die Kraft, Menschen durch Worte, Farbe und Lachen zu erhellen.' },
    { t: 'Schattenseite', d: 'Launenhaftigkeit, Oberflächlichkeit, Leichtfertigkeit. Eine Tendenz, an der Oberfläche zu schwimmen und Tiefe zu meiden.' },
    { t: 'Lebenszweck', d: 'To add joy to the world. The very act of enjoying life may become someone else\'s comfort.' }
  ],
  4: [
    { t: 'Lichtseite', d: 'Fleiß, Geduld, Zuverlässigkeit. Eine handwerkliche Seele, die Schicht für Schicht baut.' },
    { t: 'Schattenseite', d: 'Starrheit, Konservatismus, Unbiegsamkeit. Die Angst vor Veränderung kann in eine geschlossene Hülle ziehen.' },
    { t: 'Lebenszweck', d: 'To build the world\'s foundation. Not flashy, yet becoming a pillar that cannot be done without.' }
  ],
  5: [
    { t: 'Lichtseite', d: 'Abenteuerlust, Flexibilität, Vielseitigkeit. Eine windähnliche Seele, die vom Wandel lebt und sich frei bewegt.' },
    { t: 'Schattenseite', d: 'Ruhelosigkeit, Impulsivität, Verantwortungslosigkeit. Angst, bei etwas lange genug zu bleiben.' },
    { t: 'Lebenszweck', d: 'To gather experience. Not to stay in one place, but to etch the world\'s variety into your being.' }
  ],
  6: [
    { t: 'Lichtseite', d: 'Zuneigung, Verantwortung, Vermittlung. Eine warme Präsenz oft im Zentrum von Familie oder Gemeinschaft.' },
    { t: 'Schattenseite', d: 'Überbehütung, Einmischung, Märtyrermentalität. Der Moment, in dem Fürsorge zu Kontrolle werden kann.' },
    { t: 'Lebenszweck', d: 'Ordnung durch Liebe bringen. Ihre Art zu sorgen kann die Welt heilen helfen.' }
  ],
  7: [
    { t: 'Lichtseite', d: 'Neugier, Intuition, analytische Tiefe. Eine Seele, die tief taucht und Wahrheit an die Oberfläche bringt.' },
    { t: 'Schattenseite', d: 'Einsamkeit, Kritik, Rückzug von Menschen. Das Herz vor der Welt verschließen.' },
    { t: 'Lebenszweck', d: 'Wissen überbrücken. Der Welt zurückgeben, was Sie in der Einsamkeit gewannen.' }
  ],
  8: [
    { t: 'Lichtseite', d: 'Umsetzung, Führung, das Geschenk, Dinge real zu machen. Kraft, die Materie und Geist regieren kann.' },
    { t: 'Schattenseite', d: 'Machtgier, Gewaltsamkeit, Anhaftung an Geld. Eine dünne Linie, wo Stärke zu Zwang werden kann.' },
    { t: 'Lebenszweck', d: 'Fülle Gestalt geben. Reichtum, Beziehungen und Energie sollen zirkulieren, nicht nur gehalten werden.' }
  ],
  9: [
    { t: 'Lichtseite', d: 'Weite Liebe, humanitärer Geist, Weisheit der Vollendung. Eine Präsenz, die jede Zahl integrieren kann.' },
    { t: 'Schattenseite', d: 'Flucht, Opfermentalität, selbstgerechter Idealismus. Erschöpfung durch unerreichbare Ideale.' },
    { t: 'Lebenszweck', d: 'Einen Zyklus vollenden und weitergeben. Die Vergangenheit halten und zur Zukunft freigeben.' }
  ],
  11: [
    { t: 'Lichtseite', d: 'Erhöhte Intuition und Spiritualität. Andere als Bote des Lichts führen.' },
    { t: 'Schattenseite', d: 'Nervöse Spannung, Anspannung, Selbstzweifel. Zu viel empfangen, bis das Herz überwältigt ist.' },
    { t: 'Lebenszweck', d: 'Unsichtbarem sichtbare Form geben. Unter Brückenbauern vielleicht die zarteste Rolle.' }
  ],
  22: [
    { t: 'Lichtseite', d: 'Meister-Baumeister. Eine seltene Kraft, Träume in Strukturen der realen Welt zu verwandeln.' },
    { t: 'Schattenseite', d: 'Von Verantwortung erdrückt werden — oder vor ihr fliehen.' },
    { t: 'Lebenszweck', d: 'Eine große Vision verwirklichen. Nicht allein, sondern indem man viele Menschen einbezieht.' }
  ],
  33: [
    { t: 'Lichtseite', d: 'Meister-Lehrer. Eine Seele, die bedingungslose Liebe verkörpern kann.' },
    { t: 'Schattenseite', d: 'Kontrolle im Namen der Liebe — oder Erschöpfung der Liebe selbst.' },
    { t: 'Lebenszweck', d: 'Liebe selbst lehren. Ein Leben, das sein eigenes Lehrbuch werden kann.' }
  ]
};

export function premiumGeneric(systemLabel, valueLabel) {
  return [
    { t: 'Zehn-Jahres-Schicksalswellen', d: `Als ${valueLabel} in ${systemLabel} können Sie das Schicksal in einem 9-Jahres-Zyklus durchlaufen. Details zu Ihrem nächsten Spitzenjahr, Vorsichtsjahr und besten Monaten zum Säen.` },
    { t: 'Kompatibilitätslesung', d: 'Ein vollständiger Leitfaden über 12 Quadranten: Typen, die mit Ihrer Energie mitschwingen, Typen, die Wachstum anregen, und Typen, die mit Sorgfalt angegangen werden sollten.' },
    { t: 'Berufliche Passung', d: `Rollen, in denen ${valueLabel} am besten gedeihen kann, Rollen, die sich falsch anfühlen, und wie man es durch Nebenarbeit ausdrückt — gelesen auf einer modernen Karrierekarte.` },
    { t: 'Seelenlektion', d: 'Die wichtigste Lektion, die Sie in diesem Leben vielleicht treffen sollen, und wie man ihre frühen Zeichen erkennt.' },
    { t: 'Bekannte Menschen mit derselben Energie', d: 'Eine Liste von 100 historischen und zeitgenössischen Persönlichkeiten mit derselben Energie. Von ihren Entscheidungen lernen.' }
  ];
}

export function buildDeep(cardKey, ctx) {
  const { lp, py, en, expr, nameRoman, sun, mt, cz, sj, ks, gy, an, ct, my, tb, dt, bs, bf, bio, mp, ls } = ctx;

  switch (cardKey) {
    case 'lifepath': return {
      title: 'Lebenspfadzahl',
      value: lp,
      label: LIFE_PATH_MEANINGS[lp].label,
      intro: `Lebenspfad ${lp} ist das Hauptthema Ihres Lebens. Er kann die Rolle widerspiegeln, die Ihre Seele vor der Geburt wählte. ${LIFE_PATH_MEANINGS[lp].desc}`,
      free: LP_DETAILS[lp] || [
        { t: 'Lichtseite', d: 'Ihr größtes Geschenk schläft vielleicht hier.' },
        { t: 'Schattenseite', d: 'Wenn das Gleichgewicht verloren geht, kann sich diese Seite zeigen.' },
        { t: 'Lebenszweck', d: 'Die Bedeutung, diesen Weg zu wählen.' }
      ],
      premium: premiumGeneric('Lebenspfad', String(lp))
    };

    case 'personalYear': return {
      title: 'Persönliches Jahr',
      value: py,
      label: `Sie in ${ctx.currentYear}`,
      intro: `Ihr persönliches Jahr folgt einem 9-Jahres-Rhythmus, der Ihnen eigen ist. Dieses Jahr ist ein ${py}-Jahr. ${PERSONAL_YEAR_MEANINGS[py]}Wenn Sie mit dieser Welle gehen statt dagegen, kann das Schicksal fließender werden.`,
      free: [
        { t: 'Rückenwind dieses Jahr', d: `${PERSONAL_YEAR_MEANINGS[py]}Bewegung in diese Richtung kann leichter gesegnet sein.` },
        { t: 'Fallstricke dieses Jahr', d: `Umgekehrt kann das Festhalten an der vorherigen Welle — etwas wie „${PERSONAL_YEAR_MEANINGS[personalYearPrev(py)]}“ — tendenziell Stagnation bringen.` },
        { t: 'Zeichen für das nächste Jahr', d: `Nächstes Jahr ist persönliches Jahr ${personalYearNext(py)}. ${PERSONAL_YEAR_MEANINGS[personalYearNext(py)] || 'Ein Wendepunkt zu einem neuen Zyklus.'} This year\'s choices may become next year\'s Sternting point.` }
      ],
      premium: [
        { t: 'Monatlicher Schicksalskalender', d: 'Zwölf Monate aufgeschlüsselt nach persönlichem Monat und Tag. Erkennen, wann zu handeln, warten und entscheiden ist.' },
        { t: 'Schlüsselwörter für dieses Jahr', d: 'Drei Schlüsselwörter nur für Sie in diesem Jahr. Ein Kompass, wenn das Urteil unklar ist.' },
        { t: 'Begegnungen dieses Jahr', d: 'Welche Verbindungen erscheinen können, aus welcher Richtung, und wie man sie erkennt.' },
        { t: 'Monate im Blick', d: 'Zeiten, in denen Gesundheit, Geld oder Beziehungen instabil wirken können — und Rituale, die Balance wiederherstellen können.' }
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
        title: 'Namenszahl',
        value: dual ? `${native} · ${latin}` : native,
        label: dual ? 'Anzeigename / römische Buchstaben' : (EXPRESSION_MEANINGS[native] || '').replace('Namensenergie:', ''),
        intro: dual
          ? `Aus Ihrem Anzeigenamen lesen wir ${native}; aus „${roman}“ lesen wir ${latin}. Beides beschreibt, wie Sie gerufen werden — getrennt vom Lebenspfad ${lp}. Verschiedene Zahlen sind kein Wettstreit um die „richtige“.`
          : `Ihr Name setzt die Energie von ${native} frei, sobald er gesprochen wird — getrennt vom Lebenspfad ${lp}, der Zahl dessen, wie Sie gerufen werden.`,
        free: [
          {
            t: 'Namenszahl der Anzeigeschrift',
            d: `Aus Ihrem Anzeigenamen: ${native}. Dies nutzt eine einfache Unicode-Glyphensumme für nicht-lateinische Schriften — keine klassische westliche Numerologie. Es kann ${nativeTrait} als Linse vorschlagen, nicht als Urteil.`
          },
          dual
            ? {
              t: 'Römische / lateinische Namenszahl (pythagoreisch)',
              d: `„${roman}“ entspricht ${latin} auf der üblichen A–Z-Tabelle. ${latinTrait}Dies entspricht eher dem, was internationale Numerologie oft Ausdruckszahl nennt.`
            }
            : {
              t: 'Eine zweite Achse in römischen Buchstaben',
              d: roman && latin == null
                ? 'Keine A–Z-Buchstaben im römischen Feld gefunden, daher wurde die internationale Zahl nicht berechnet. Versuchen Sie Reisepass oder romanisierte Schreibweise.'
                : 'Fügen Sie optional eine römische oder lateinische Schreibweise hinzu, um auch die internationale A–Z-Namenszahl neben Ihrem Anzeigenamen zu sehen.'
            },
          {
            t: 'Bezug zum Lebenspfad',
            d: dual
              ? `Lebenspfad ${lp}, Anzeige ${native} und römisch ${latin} zusammen können Geburtsessenz, alltäglichen Ruf und internationale Resonanz zeigen.`
              : `Lebenspfad ${lp} mit Anzeige ${native} kann das Gleichgewicht zwischen innerer Essenz und Ruf zeigen.`
          },
          { t: 'Hinweise zum Umbenennen', d: 'Wenn Ihr aktueller Name schwer wirkt, kann ein Spitzname oder Geschäftsname mit anderer Zahl eine andere Wellenlänge einladen.' }
        ],
        premium: premiumGeneric('Namenszahl', dual ? `${native}/${latin}` : String(native))
      };
    }

    case 'sun': return {
      title: 'Sonnenzeichen',
      value: `${sun.symbol} ${sun.name}`,
      label: `${sun.element} Element`,
      intro: `Ihr Sonnenzeichen kann den Kern Ihres Selbst offenbaren. Mit der Sonne in ${sun.name} können Sie ${sun.desc}Jedes Geburtstags kehrt die Sonne zum gleichen Zeichen zurück und scheint wieder auf Sie.`,
      free: [
        { t: 'Kern dieses Zeichens', d: `${sun.name} gehört zum Element ${sun.element} und kann eine eigene Weltanschauung tragen. ${sun.desc}` },
        { t: 'Momente des Strahlens', d: `${sun.name} kann am hellsten leuchten in Umgebungen, die zu seinem Element passen. Wählen Sie Orte, wo ${sun.element}-Qualitäten ausgedrückt werden können.` },
        { t: 'Mit dem Schatten leben', d: 'Jedes Zeichen hat Licht und Schatten. Tägliche Gewohnheiten, die das Licht wählen, können die Qualität Ihres Lebens verändern.' }
      ],
      premium: [
        { t: 'Mondzeichen und Aszendent', d: 'Die Sonne ist nicht Ihr einziges Zeichen. Aus Geburtszeit und -ort können Mond und Aszendent berechnet werden — eine Symphonie dreier Sterne.' },
        { t: 'Vollständige 12-Häuser-Analyse', d: 'Ein vollständiger Blick, wie Ihr Zeichen in den 12 Häusern (Lebensbereichen) platziert sein kann.' },
        { t: 'Große Transite', d: 'Wie äußere Planeten Ihr Horoskop in den nächsten drei Jahren Monat für Monat beeinflussen können.' },
        { t: 'Kompatibilitätshoroskop', d: 'Fünfschichtige Synastrie-Analyse mit Partner oder Familie.' },
        { t: 'Vergangenheitsleben-Horoskop', d: 'Soul themes from past lives and this life\'s homework, read through the lunar nodes.' }
      ]
    };

    case 'moonTrait': return {
      title: 'Mondtendenz',
      value: mt.name,
      label: 'Aus der Mondphase bei der Geburt',
      intro: `Die Form des Mondes am Himmel bei Ihrer Geburt kann die „Gewohnheit“ Ihres emotionalen Rhythmus prägen. ${mt.desc}`,
      free: [
        { t: 'Emotionale Muster', d: 'Typische Bewegungen der Gefühle bei Menschen, die unter dieser Mondphase geboren wurden.' },
        { t: 'Wie man sich zum Mond verhält', d: 'An Vollmond-, Neumondnächten und Erst-/Letztvierteltagen — Sie können entdecken, was Sie erneuert.' },
        { t: 'Traumtagebuch', d: 'Wer Sternke Mondtendenzen hat, findet vielleicht wichtige Botschaften in Träumen. Versuchen Sie drei Minuten morgendliches Aufschreiben.' }
      ],
      premium: [
        { t: 'Exaktes Mondzeichen', d: 'Mit Geburtszeit und -ort kann ein ganz anderes Zeichen erscheinen — Ihre wahre emotionale Sprache.' },
        { t: 'Mondphasen-Schicksal', d: 'Glückbringende Handlungen nach Mondphase für die nächsten 12 Monate.' },
        { t: 'Mondrituale', d: 'Wie Sie jeden Monat Neumond- und Vollmondzeremonien für sich gestalten.' }
      ]
    };

    case 'zodiac': return {
      title: 'Chinesisches Tierkreiszeichen',
      value: cz.name,
      label: `Geboren im Jahr des ${cz.char}`,
      intro: `${cz.name} ist das Tier, das Sie im 12-Jahres-Zyklus des östlichen Kalenders vielleicht gewählt haben. ${cz.desc}Menschen mit dem gleichen Zeichen können alle 12 Jahre Meilensteine erleben.`,
      free: [
        { t: 'Kern dieses Zeichens', d: cz.desc },
        { t: 'Benming-Jahr', d: 'Alle 12 Jahre kehrt Ihr eigenes Tierkreisjahr zurück. Das „Benming-Jahr“ kann ein Lebensmeilenstein werden.' },
        { t: 'Kompatibilitätshinweise', d: 'Liuhe (stärkste Übereinstimmung), Sanhe (gute Bindung), Chong (anregender Konflikt) — Kombinationen im Tierkreis können tiefen Sinn tragen.' }
      ],
      premium: [
        { t: 'Liuhe-, Sanhe- und Chong-Karte', d: 'Eine vollständige Beziehungskarte zwischen Ihrem Zeichen und allen anderen. Dynamiken mit Familie, Liebenden und Vorgesetzten können sichtbar werden.' },
        { t: 'Stundensäule (Tierkreis der Geburtsstunde)', d: 'Nicht nur Geburtsjahr — die Geburtsstunde kann auch ein Tierkreiszeichen tragen. Das kann Ihr inneres Tierkreiszeichen sein.' },
        { t: 'Zwölf Lebensstufen', d: 'Where you may be among life\'s twelve stages: birth, growth, prosperity, decline, renewal…' }
      ]
    };

    case 'sixty': return {
      title: 'Jahressäule (Sexagenar-Zyklus)',
      value: sj.name,
      label: `${sj.yinyang} ${sj.element}`,
      intro: `Der Sexagenar-Zyklus schafft 60 Abdrücke aus zehn Himmelsstämmen und zwölf Erdzweigen. Dieselbe Jahressäule kehrt nur alle 60 Jahre zurück. Ihre Jahressäule trägt die Qualität ${sj.yinyang} ${sj.element}.`,
      free: [
        { t: 'Ihr Himmelsstamm', d: `Der Stamm ${sj.name[0]} steht für ${sj.yinyang} ${sj.element} und kann das Fundament des Charakters bilden.` },
        { t: 'Ihr Erdzweig', d: `Der Zweig ${sj.name[1]} kann den Schicksalsfluss zeigen, der alle 12 Jahre zur gleichen Position zurückkehrt.` },
        { t: 'Eigenschaften derselben Säule', d: 'Weil dieser Abdruck nur alle 60 Jahre zurückkehrt, können Sie seltene Gemeinsamkeiten über Generationen teilen.' }
      ],
      premium: [
        { t: 'Alle vier Säulen', d: 'Nicht nur die Jahressäule — Monat, Tag und Stunde zusammen können Ihr Vier-Säulen-Horoskop vervollständigen.' },
        { t: 'Zehn Götter und Zwölf Stufen', d: 'Das Herz der Vier-Säulen-Astrologie. Soziales Leben, Reichtum, Familie und Gesundheit können alle sichtbar werden.' },
        { t: 'Zehn-Jahres-Glückszyklen', d: 'Großes Glück in 10-Jahres-Perioden. In welchem Zyklus Sie jetzt sein können und was folgen mag.' }
      ]
    };

    case 'kyusei': return {
      title: 'Honmei-Stern (Kyusei)',
      value: ks.name,
      label: `${ks.element} Stern`,
      intro: `Kyusei leitet Ihren „Honmei-Stern“ aus dem Geburtsjahr ab — eine japanische Wahrsagung. Mit ${ks.name} als Honmei können Sie ${ks.desc}Dieser Stern kann einen 9-Jahres-Schicksalszyklus schaffen.`,
      free: [
        { t: 'Essenz des Honmei-Sterns', d: ks.desc },
        { t: 'Neun-Jahres-Zyklus', d: 'Honmei-Schicksal kann in 9 Jahren eine Runde vollenden — Säen, Nähren, Ernten und Klären im Wechsel.' },
        { t: 'Grundlagen glücklicher Richtungen', d: 'Im Kyusei können glückliche Richtungen durch Honmei- und Getsumei-Sterne bestimmt werden. Umzug, Reise oder Berufsrichtung können das Schicksal verschieben.' }
      ],
      premium: [
        { t: 'Getsumei- und Nichimei-Sterne', d: 'Über Honmei hinaus — Getsumei und Nichimei zusammen können Ihr Ki-Profil vervollständigen.' },
        { t: 'Glückliche Richtungen dieses und nächstes Jahr', d: 'Ihr persönlicher Glücksrichtungskalender, der sich jährlich ändert — bis zum Monat größten Glücks.' },
        { t: 'Dokai- und Hidokai-Jahre', d: 'Jahre, in denen große Wendepunkte kommen können, und wie man ihre Zeichen liest.' },
        { t: 'Sternenkompatibilität', d: 'Eine fünfschichtige Kompatibilitätstabelle zwischen Honmei-Sternen — für Familie, Liebe und Arbeit.' }
      ]
    };

    case 'gogyou': return {
      title: 'Fünf Elemente',
      value: gy.element,
      label: 'Element des Geburtsjahres',
      intro: `Die Fünf Elemente sind die fünf Grundkräfte, die die Welt bilden können. Sie sind vielleicht mit ${gy.element} im Kern gekommen. ${gy.desc}`,
      free: [
        { t: 'Ihr Element', d: gy.desc },
        { t: 'Erzeugungszyklus (Unterstützung)', d: 'Holz nährt Feuer, Feuer schafft Erde, Erde trägt Metall, Metall sammelt Wasser, Wasser nährt Holz. Sie können Menschen finden, deren Element Ihres unterstützt.' },
        { t: 'Überwindungszyklus (Einschränkung)', d: 'Holz bremst Erde, Erde absorbiert Wasser, Wasser löscht Feuer, Feuer schmilzt Metall, Metall schneidet Holz. Einschränkende Beziehungen können Spannung und Wachstum schaffen.' }
      ],
      premium: [
        { t: 'Ihr Fünf-Elemente-Gleichgewicht', d: 'Verhältnisse aus Geburtsdatum und -zeit. Was reichlich sein kann und was fehlen mag.' },
        { t: 'Wie fehlende Elemente ergänzt werden', d: 'Eine praktische Liste — Farbe, Nahrung, Richtung, Steine, Gewohnheiten — um zu nähren, was fehlt.' },
        { t: 'Fünf-Elemente-Kompatibilitätskarte', d: 'A full chart compared with another person\'s Elements. Who may support you and who may drain you, at a glance.' }
      ]
    };

    case 'animal': return {
      title: 'Tierhoroskop',
      value: an.name,
      label: `Persönlichkeitsnummer ${an.num}/60`,
      intro: `Das Tierhoroskop leitet eine von 60 Persönlichkeitsnummern aus dem Geburtsdatum ab und ordnet sie 12 Tieren zu. Sie sind ${an.name}. ${ANIMAL_DESC[an.name] || ''}`,
      free: [
        { t: 'Grundcharakter', d: ANIMAL_DESC[an.name] || '' },
        { t: 'Gruppenklassifikation', d: 'Die 12 Tiere können sich in drei Gruppen teilen: Mond (Träumer), Erde (Realist) und Sonne (Sensibel).' },
        { t: 'Bedeutung der Persönlichkeitsnummer', d: `Ihre Persönlichkeitsnummer ist ${an.num}. Ihr Platz unter 60 kann feinere Charakternuancen andeuten.` }
      ],
      premium: [
        { t: 'Vollständiges 60-Typen-Profil', d: `Detaillierte Lesung für Nummer ${an.num}. Dieselbe Nummer kann nur einmal alle 60 Tage erscheinen.` },
        { t: 'Führertyp oder Unterstützertyp', d: 'Selbst beim gleichen Tier können Führer- und Unterstützertypen sich unterscheiden. Ihre wahre Rolle in der Gruppe.' },
        { t: 'Kompatibilität mit allen 12 Tieren', d: 'Vollständige Zuordnung für Liebe, Arbeit und Freundschaft über alle 60×60 Paarungen.' },
        { t: 'Verborgener Charakter', d: 'Ein anderes Sie unter der Oberfläche — das Tier, das unter Stress hervortreten kann.' }
      ]
    };

    case 'celtic': return {
      title: 'Keltisches Baumorakel',
      value: ct.name,
      label: 'Einer von dreizehn heiligen Bäumen',
      intro: `Alte keltische Druiden teilten das Jahr in dreizehn Mondmonate, jeweils mit einem Baum. Ihr Schutzbaum ist ${ct.name}. ${ct.desc}`,
      free: [
        { t: 'Kraft des Schutzbaums', d: ct.desc },
        { t: 'Druidenweisheit', d: 'Im keltischen Wald soll jeder Baum einen anderen Geist tragen. Ihr Baum kann der Geist sein, den Ihre Seele aus dem Wald entlieh.' },
        { t: 'Rituale mit Ihrem Baum', d: 'Tiefes Atmen vor Ihrem Schutzbaum, ein einzelnes Blatt aufheben — etwas in Ihnen kann sich still beruhigen.' }
      ],
      premium: [
        { t: 'Ogham-Buchstaben', d: 'Alte keltische Buchstaben zu jedem Baum. Ihr persönliches Symbol, bereit als Talisman zu schnitzen.' },
        { t: 'Schutztier und Stein', d: 'Das Tier und der Stein, die neben Ihrem Baum erscheinen können.' },
        { t: 'Saisonale Rituale', d: 'Zeremonien mit Ihrem Baum an Tag- und Nachtgleichen und Sonnenwenden — die vier Jahresfeste.' },
        { t: 'Kompatible Bäume', d: 'Welche Bäume im keltischen Wald mit Ihrem die reichste Frucht tragen können.' }
      ]
    };

    case 'maya': return {
      title: 'Maya-Kalender KIN',
      value: `KIN ${my.kin}`,
      label: `${my.tone} ${my.seal}`,
      intro: `Der heilige Maya-Tzolk'in-Kalender läuft in einem 260-Tage-Zyklus mit 260 KIN. Ihr KIN ist ${my.kin}, Siegel „${my.seal}“, galaktischer Ton „${my.tone}“. Das Siegel kann Essenz widerspiegeln; der Ton, Rhythmus.`,
      free: [
        { t: 'Bedeutung des Siegels', d: `${my.seal} ist eines von 20 Siegeln — ein Symbol, das Ihre Essenz ausdrücken kann.` },
        { t: 'Bedeutung des galaktischen Tons', d: `${my.tone} ist einer von 13 rhythmischen Tönen — er kann das Tempo Ihres Lebens andeuten.` },
        { t: 'Einzigartigkeit der KIN-Nummer', d: 'Jemand mit Ihrem exakten KIN kann nur einmal alle 260 Tage geboren werden. Etwa 25 Millionen Seelenverwandte mögen weltweit existieren.' }
      ],
      premium: [
        { t: 'Führer-, Antipoden- und analoges KIN', d: 'Das KIN, das Sie führen, spiegeln und mit Ihrer Energie mitschwingen kann — vollständig identifiziert.' },
        { t: '13-Tage-Wellenzauber', d: 'Your life\'s 13-day cycle. Where you may be now, and what wave may come next.' },
        { t: 'Galaktische Signatur', d: 'Ihr vollständiger galaktischer Name — KIN, Siegel, Ton, Burg und Chakra zusammen.' },
        { t: 'Tägliche KIN-Lesung', d: 'A daily Mayan calendar interpreting how today\'s KIN relates to yours.' }
      ]
    };

    case 'tarotBirth': return {
      title: 'Tarot-Geburtskarte',
      value: tb.name,
      label: `Große Arkana ${tb.num}`,
      intro: `Unter den 22 Großen Arkana kann eine aus dem Geburtsdatum berechnete Karte Ihre Seelen-Themenkarte sein. Ihre ist ${tb.name}. ${TAROT_MEANINGS[tb.name]}`,
      free: [
        { t: 'Kern dieser Karte', d: TAROT_MEANINGS[tb.name] },
        { t: 'Symbolik der Zahl', d: `Die Zahl ${tb.num} kann im Tarot ihre eigene Bedeutung tragen. Ihr Leben kann eine von dieser Zahl gewobene Reise sein.` },
        { t: 'Schattenseite', d: 'Jede Karte trägt Licht und Schatten. Wenn sie schwer wirkt, kann das einen Wandel oder Loslassen widerspiegeln — kein Urteil.' }
      ],
      premium: [
        { t: 'Persönliche kleine Arkana-Karten', d: 'Die Farben der kleinen Arkana (Schwerter, Kelche, Stäbe, Münzen) hinter den Großen Arkana berechnen.' },
        { t: 'Themenkarte für dieses Jahr', d: 'Die Karte, die sich jedes Jahr ändert — was Sie lernen und loslassen können.' },
        { t: 'Schattenkarte', d: 'Ein anderes Sie im Schatten Ihrer Geburtskarte — Themen unterhalb des Bewusstseins.' },
        { t: 'Vollständige Sieben-Karten-Legung', d: 'Eine Lebenslegung über Vergangenheit, Gegenwart, Zukunft, Hindernis, Hoffnung, Unbewusstes und Ergebnis.' }
      ]
    };

    case 'tarotDaily': return {
      title: 'Today\'s Card',
      value: dt.name,
      label: 'Für Sie heute',
      intro: `An diesem besonderen Tag ist die aus Ihrem Namen und dem heutigen Datum gezogene Karte ${dt.name}. ${dt.desc}`,
      free: [
        { t: 'Today\'s message', d: dt.desc },
        { t: 'Warum diese Karte erschien', d: 'Karten erscheinen vielleicht nicht zufällig — sie können mit der nötigen Botschaft im nötigen Moment kommen.' },
        { t: 'Wie Sie den Tag verbringen', d: 'When you align the day with this card\'s energy, things may surprisingly flow more smoothly.' }
      ],
      premium: [
        { t: 'Sieben-Tage-Kartenlesung', d: 'Eine Sieben-Tage-Legung ab heute — Themen und Handlungen für jeden Tag.' },
        { t: 'Hauptkarte für diesen Monat', d: 'Die eine Karte, die Ihren Monat symbolisieren kann — ein Monatsthema.' },
        { t: 'Keltisches-Kreuz-Legung', d: 'Die klassischste Lesung — zehn Karten analysieren Ihre Situation aus vielen Blickwinkeln.' }
      ]
    };

    case 'birthstone': return {
      title: 'Geburtsstein',
      value: bs.name,
      label: `${ctx.m} Geburtsstein`,
      intro: `Ein Geburtsstein ist der Edelstein Ihres Geburtsmonats. Ihrer ist ${bs.name}. Man sagt, ${bs.meaning} wohne in ihm, und er wird lange als Talisman getragen.`,
      free: [
        { t: 'Kraft des Steins', d: bs.meaning },
        { t: 'Wie man ihn trägt', d: 'Geburtssteine wirken am besten nah an der Haut — Ringe, Halsketten, Armbänder und dergleichen.' },
        { t: 'Reinigungsmethoden', d: 'Steine können auch Energie absorbieren. Mondlicht, Kristallcluster oder Salbei-Rauch können bei regelmäßiger Reinigung helfen.' }
      ],
      premium: [
        { t: 'Ihre drei Schutzsteine', d: 'Drei unterstützende Steine neben dem Geburtsstein, aus Geburtsdatum und Honmei-Stern — kombiniert für Synergie.' },
        { t: 'Wissenschaft der Edelsteine', d: 'Kristallstruktur, Wellenlänge und Energie — aus spiritueller und wissenschaftlicher Sicht gelesen.' },
        { t: 'Steinrituale', d: 'Meditation mit Steinen und Kristallgittern für verschiedene Absichten.' }
      ]
    };

    case 'birthflower': return {
      title: 'Geburtsblume',
      value: bf,
      label: `${ctx.m} Blume`,
      intro: `Eine Geburtsblume ist die repräsentative Blüte jedes Monats. Ihre ist ${bf}. Blumen gelten lange als Spiegel des Seelenzustands.`,
      free: [
        { t: 'Symbol der Blume', d: 'Ein Symbol Ihres Geburtsmonats. In der Nähe kann es das Herz beruhigen helfen.' },
        { t: 'Blumensprache', d: 'Every Blume has its own language—the birth Blume\'s meaning may function as a message for your life.' },
        { t: 'Mit Blumen leben', d: 'Eine einzelne Geburtsblume auf dem Schreibtisch — manche Tage reicht das allein für die Stimmung.' }
      ],
      premium: [
        { t: 'Geburtsblume nach Datum', d: 'Nicht nur nach Monat — 365 Geburtsblumen können nach Kalenderdatum zugeordnet werden. Ihre ganz eigene Blüte.' },
        { t: 'Blumenschicksalskalender', d: 'Eine Glücksblume jeden Monat — Blüten, die zu Ihnen passen, das ganze Jahr.' },
        { t: 'Blütenessenzen', d: 'Aus Bach-Blütenessenzen eine Liste von 38 Essenzen, abgestimmt auf Honmei-Stern und Numerologie.' }
      ]
    };

    case 'biorhythm': return {
      title: 'Biorhythmus',
      value: `Tag ${bio.days.toLocaleString()}`,
      label: 'Tage seit der Geburt',
      intro: `Biorhythmusus ist eine Praxis des 20. Jahrhunderts, die Wellen physischer, emotionaler, intellektueller und intuitiver Energie aus Tagen seit der Geburt berechnet. Sie sind jetzt am Tag ${bio.days.toLocaleString()}.`,
      free: [
        { t: 'Vier Wellen', d: `Physisch: 23-Tage-Zyklus; emotional: 28 Tage; intellektuell: 33 Tage; intuitiv: 38 Tage. Ihre aktuellen Werte können physisch ${(bio.physical*100).toFixed(0)}, emotional ${(bio.emotional*100).toFixed(0)}, intellektuell ${(bio.intellectual*100).toFixed(0)}, intuitiv ${(bio.intuitive*100).toFixed(0)} sein.` },
        { t: 'Kritische Tage', d: 'Tage, an denen eine Welle Null kreuzt, heißen „kritische Tage“ — Urteilsfehler und Unfälle können wahrscheinlicher sein.' },
        { t: 'Wellen und Handlung', d: 'Steigend: voran; fallend: schützen; Spitze: zeigen; Tal: ruhen. Mit der Welle zu gehen kann Erschöpfung mindern.' }
      ],
      premium: [
        { t: '90-Tage-Prognosekalender', d: 'Vier-Wellen-Prognose für die nächsten 90 Tage — optimale Termine für Treffen, Interviews, Dates, Umzüge und mehr.' },
        { t: 'Kombinierter Biorhythmusus zu zweit', d: 'Biorhythmusen mit Partner oder Familie überlagern, um gemeinsame Aktions- und Ruhetage zu finden.' },
        { t: 'Warnungen vor kritischen Tagen', d: 'Vorwarnung bei nahenden kritischen Tagen — vielleicht die stärkste Unfallprävention.' }
      ]
    };

    case 'moon': return {
      title: 'Tonight\'s Moon',
      value: mp.name,
      label: `Phase ${(mp.phase * 100).toFixed(1)} %`,
      intro: `Der Mond am Himmel heute Nacht ist ${mp.name}. Die Phase beträgt ${(mp.phase * 100).toFixed(1)} %. Mondzyklen können Pflanzen, Meer, Körper und Herz beeinflussen. Was Sie jetzt fühlen, kann teils Mond-Einfluss sein.`,
      free: [
        { t: 'Bedeutung der Phase', d: 'New moon: beginnings; first quarter: challenge; full moon: completion; last quarter: release. What may tonight\'s Moon be inviting?' },
        { t: 'Mond und Emotion', d: 'Drei Tage vor und nach Voll- oder Neumond können Gefühle leichter fließen — gute Zeit für Rituale des Beginns oder Endes.' },
        { t: 'Mondrituale', d: 'Wünsche beim Neumond schreiben, Dank beim Vollmond — ein einfacher, alter Weg mit Mondenergie.' }
      ],
      premium: [
        { t: '12-Monats-Neu- und Vollmondkalender', d: 'Neu- und Vollmonde der nächsten 12 Monate, ihre Zeichen und wie sie Sie beeinflussen können.' },
        { t: 'Persönlicher Mondzyklus', d: 'How today\'s phase relates to your birth moon phase—turning points in life may appear here.' },
        { t: 'Mondlicht-Bad-Zeremonie', d: 'Ein monatliches Vollmondritual nur für Sie — Wünsche stärken, Loslassen dessen, was nicht mehr dient.' }
      ]
    };

    case 'lifeStagePrev': return {
      title: 'Jüngster Lebensmeilenstein',
      value: ls.prev ? `Alter ${ls.prev.age}` : '—',
      label: ls.prev ? ls.prev.name : '',
      intro: ls.prev ? `Im Alter von ${ls.prev.age} haben Sie vielleicht „${ls.prev.name}“ durchlaufen. ${ls.prev.desc}` : 'Sie haben Ihren ersten großen Meilenstein noch nicht erreicht.',
      free: ls.prev ? [
        { t: 'Bedeutung dieses Meilensteins', d: ls.prev.desc },
        { t: 'Was damals geschehen kann', d: 'Bei großen Lebensmeilensteinen können Beziehungen, Arbeit oder Zuhause oft deutlich wechseln.' },
        { t: 'Reflexionsfragen', d: `Im Alter von ${ls.prev.age}, was geschah für Sie? Es jetzt aufzuschreiben kann Muster in Ihrem Leben offenbaren.` }
      ] : [],
      premium: [
        { t: 'Analyse aller vergangenen Meilensteine', d: 'Eine vollständige Liste der Meilensteine von der Geburt bis heute — was damals geschah, was sich änderte.' },
        { t: 'Verborgene Meilensteine', d: 'Wichtige, wenig bekannte astrologische Transite — stille Wendepunkte in Ihrem Leben.' },
        { t: 'Meilenstein-Kettenmuster', d: 'Themen, die sich an Ihren Meilensteinen wiederholen können. Vorbereitung auf das Nächste.' }
      ]
    };

    case 'lifeStageNext': return {
      title: 'Nächster Lebensmeilenstein',
      value: ls.next ? `Alter ${ls.next.age}` : '—',
      label: ls.next ? ls.next.name : '',
      intro: ls.next ? `Ihr nächster Lebensmeilenstein kann im Alter von ${ls.next.age} sein: „${ls.next.name}“. Er kann in etwa ${(ls.next.age - ls.years).toFixed(1)} Jahren kommen. ${ls.next.desc}` : 'Sie können in einer ruhigen Phase zwischen großen Meilensteinen sein.',
      free: ls.next ? [
        { t: 'Bedeutung dieses Meilensteins', d: ls.next.desc },
        { t: 'Was vorzubereiten ist', d: 'Zeichen können leise mehrere Jahre vor einem großen Meilenstein beginnen. Hören Sie auf die innere Stimme.' },
        { t: 'Zeichen der Gelegenheit', d: 'Um diesen Meilenstein können neue Verbindungen, Orte oder Rollen eher erscheinen. Offen bleiben kann helfen.' }
      ] : [],
      premium: [
        { t: 'Vollständige Zehn-Jahres-Zeitlinie', d: 'Jeder Meilenstein der nächsten zehn Jahre, seine Bedeutung und wie man sich am besten vorbereitet.' },
        { t: 'Timing für Heirat, Geburt, Berufswechsel', d: 'Transit analysis to identify favorable timing for life\'s major decisions.' },
        { t: 'Prüfungszeiten und wie man sie begegnet', d: 'Meilensteine bringen oft Prüfungen. Vorher zu wissen kann das Herz vorbereiten helfen.' }
      ]
    };
  }
  return null;
}
