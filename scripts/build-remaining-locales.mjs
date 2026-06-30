/**
 * Builds DE/IT/TR/HE/AR locale constant blocks from ES template strings.
 * Run: node scripts/build-remaining-locales.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcPath = path.join(root, 'src/i18n/localeUiExtras.js');
let src = readFileSync(srcPath, 'utf8');

const locales = {
  de: {
    tag: 'de-DE',
    form: { birthMonthLabel: 'Monat', birthDayLabel: 'Tag', birthYearLabel: 'Jahr', birthMonthPlaceholder: 'Monat', birthDayPlaceholder: 'Tag', birthYearPlaceholder: 'Jahr' },
    pyHeading: (py, theme) => `Persönliches Jahr ${py} · ${theme}`,
    pyThemes: { 1: 'Neuanfang', 2: 'Geduld und Bindung', 3: 'Ausdruck und Freude', 4: 'Fundament', 5: 'Wandel und Freiheit', 6: 'Verantwortung und Liebe', 7: 'Innenschau', 8: 'Ernte', 9: 'Vollendung und Loslassen' },
    cards: {
      lifepath: 'Lebenspfad-Zahl', personalYear: 'Persönliches Jahr', expression: 'Namenszahl',
      expressionLabel: 'Schwingung deines Namens', sun: 'Sonnenzeichen', moonTrait: 'Mond-Tendenz',
      moonTraitLabel: 'Aus der Mondphase bei der Geburt', moonTraitNote: 'Das genaue Mondzeichen braucht die Geburtszeit',
      zodiac: 'Chinesisches Tierkreiszeichen', sixty: 'Jahressäule (60 Stämme-Zweige)', kyusei: 'Kyusei-Lebensstern',
      gogyou: 'Fünf Elemente', animal: 'Tier-Archetyp', celtic: 'Keltischer Baum', maya: 'Maya-KIN',
      tarotBirth: 'Tarot-Geburtskarte', tarotDaily: 'Karte des Tages', birthstone: 'Geburtsstein',
      birthflower: 'Geburtsblume', biorhythm: 'Biorhythmus', moonTonight: 'Mond heute Nacht',
      lifeStagePrev: 'Jüngster Meilenstein', lifeStageNext: 'Nächster Meilenstein', timeline: '10-Jahres-Zeitleiste',
      timelineLabel: 'Das kommende Jahrzehnt',
      timelineDesc: 'Deine persönliche Jahreswelle, Spitzenjahre und Meilensteine — tippe jedes Jahr an.',
      unified: 'Vereinte Meister-Lesung',
      unifiedDesc: 'Neunzehn Systeme zu einer Geschichte — Wesen, Liebe, Arbeit und Glückskompass.'
    },
    fmt: {
      yearYou: (y) => `Du in ${y}`, bornYearZodiac: (char) => `Geboren im Jahr des ${char}`,
      sixtyDesc: (el) => `Ein Siegel, das alle 60 Jahre zurückkehrt. Trägt die Natur von ${el}.`,
      kyuseiStar: (el) => `${el}-Stern`, gogyouLabel: 'Element des Geburtsjahres',
      animalNum: (n) => `Typ ${n}/60`, animalFallback: 'Eine Präsenz mit eigenem Charakter.',
      celticLabel: 'Einer von dreizehn heiligen Bäumen',
      mayaDesc: 'Dein Tag im heiligen Zähler von 260. Siegel ist Wesen; Ton ist Rhythmus.',
      tarotMajor: (n) => `Große Arkana ${n}`, tarotDailyFor: (y, m, d) => `Für dich am ${d}.${m}.${y}`,
      monthStone: (m) => `Stein des Monats ${m}`, monthFlower: (m) => `Blume des Monats ${m}`,
      birthflowerDesc: 'Symbol deines Geburtsmonats. In der Nähe kann es dich erden.',
      biorhythmDays: (days, tag) => `Biorhythmus — Tag ${days.toLocaleString(tag)} seit der Geburt`,
      moonPhasePct: (pct) => `Phase ${pct}% · Der Mond berührt alles Leben. Was fragt dich der Mond heute Nacht?`,
      bornOn: (y, m, d) => `Geboren am ${d}.${m}.${y}`, ageNow: (age) => `Jetzt <strong>${age}</strong> Jahre`,
      nextMilestone: (age, name) => `Nächster Meilenstein: <strong>${age} — ${name}</strong>`,
      nextMilestoneSummary: (age, name, years) =>
        `Dein nächster Lebensmeilenstein ist <strong>${name} mit ${age}</strong>. Etwa <strong>${years} Jahre</strong> entfernt.`,
      elementOf: (el) => `${el}-Element`, ageYears: (n) => `Alter ${n}`,
      summaryLabel: 'Deine Geschichte',
      summaryLead: (name, label) => `${name}, man sagt, du trägst die Seele von <strong>${label}</strong>.`,
      summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
        `In der westlichen Astrologie steht deine Sonne in <strong>${sun}</strong> (${sunEl}-Element); ` +
        `im östlichen Kalender <strong>${cz}</strong>; in Kyusei <strong>${ks}</strong>; ` +
        `mit <strong>${gy}</strong> im Kern. Tierweisheit nennt dich <strong>${an}</strong>; dein Schutzbaum ist <strong>${ct}</strong>. ` +
        `Im Maya-Zähler: <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>; Tarot-Archetyp: <strong>${tb}</strong>.`,
      summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
        `In ${year} reitest du die Welle des <strong>persönlichen Jahres ${py}</strong>. Der Biorhythmus deutet ${bioState}. ` +
        `Du trägst die Stimmung von <strong>${mt}</strong>; heute Nacht leuchtet <strong>${mp}</strong> auf dich. ${nextHtml}`,
      summaryHint: '↓ Tippe eine Karte für eine tiefere Lesung',
      bioUp: '<strong>aufsteigende Phase</strong> (gut für Handlung und Ausdruck)',
      bioDown: '<strong>nach innen gewandte Phase</strong> (gut für Ruhe und Ordnung)',
      bioBalanced: '<strong>ausgewogene Phase</strong>', personalYearWave: (year) => `Persönliches Jahr ${year}`,
      expressionHintAddRoman: 'Füge eine lateinische Schreibweise hinzu, um auch die internationale Namenszahl zu sehen.',
      expressionLatinInvalid: 'Keine A–Z-Buchstaben im römischen Feld — internationale Zahl nicht angezeigt.'
    },
    love: {
      eyebrow: 'Liebes-Archetyp', title: 'Liebes-Lesung', phaseLabel: 'Aktuelle Liebesphase',
      sweetTitle: 'Deine süßen Punkte in der Liebe', careTitle: 'Sanfte Erinnerungen',
      matchesTitle: 'Typen, mit denen du harmonierst', actionLabel: 'Ein kleiner Schritt heute Nacht für Verbindung',
      cta: 'Neugierig auf jemanden? Probiere die Kompatibilitäts-Lesung',
      footnote: 'Dies ist eine Möglichkeit. Du schreibst deine eigene Liebesgeschichte.',
      shareTitle: 'Liebes-Lesung teilen', shareDesc: 'Bild speichern und auf X oder LINE posten.',
      sharePreviewAria: 'Vorschau Liebes-Karte', shareAlt: (name) => `Liebes-Karte von ${name}`,
      shareSaved: 'Bild gespeichert', shareCopied: 'Text kopiert', shareCopyFail: 'Kopieren fehlgeschlagen', shareFail: 'Teilen fehlgeschlagen'
    },
    compat: {
      eyebrow: 'Kompatibilität', title: 'Kompatibilität gemeinsam lesen',
      lead: 'Gib einen anderen Namen und ein Geburtsdatum ein, um die Kompatibilität auf fünf Achsen zu spiegeln.',
      leadSub: 'Partner, Freund, Familie oder jemand, den du bewunderst.',
      nameLabel: 'Ihr Name', birthLabel: 'Ihr Geburtsdatum', namePlaceholder: 'z. B. Anna Müller',
      submit: 'Kompatibilität enthüllen',
      disclaimer: 'Lesungen zeigen Möglichkeiten. Eure echte Beziehung ist die Geschichte, die ihr zusammen schreibt.',
      resultEyebrow: 'Zwei Geschichten verwoben', overallLabel: 'Gesamt',
      footnote: 'Zahlen sind nur ein Wegweiser. Bindungen wandeln sich Tag für Tag.',
      radarAria: 'Kompatibilitäts-Radar mit fünf Achsen', lifePathValue: (n) => `Lebenspfad ${n}`
    },
    timeline: {
      eyebrow: 'Interaktive Lesung', title: '10-Jahres-Zeitleiste', subtitle: 'Dein persönliches Jahresrhythmus im kommenden Jahrzehnt',
      intro: 'Jeder Balken ist ein persönliches Jahr (1–9). Tippe ein Jahr für sein Thema; ✦ markiert einen Lebensmeilenstein.',
      ageLabel: 'Alter', pyLabel: 'Persönliches Jahr', yearLabel: 'Jahr', milestoneLabel: 'Lebensmeilenstein',
      thisYear: 'Dieses Jahr', milestoneHere: 'Meilenstein-Jahr', ageAt: (age) => `Mit ${age} Jahren`
    },
    master: { title: 'Meister-Lesung', intro: 'Tiefere Kapitel, für alle geöffnet. Tippe jedes an.', expandAll: 'Alle öffnen', collapseAll: 'Alle schließen' }
  }
};

// For brevity in script: clone ES extended/deep structure with locale-specific labels via runtime in generated file
// We'll emit DE block referencing same deep structure keys as ES with German text inlined in generated output

function emitLocale(name, L) {
  return `const ${name.toUpperCase()} = ${JSON.stringify({
    form: L.form,
    cards: L.cards,
    love: L.love,
    compat: L.compat,
    master: L.master
  }, null, 2).replace(/"(\w+)":/g, '$1:').slice(0, -1) /* broken - use manual */}`;
}

console.log('Use manual locale blocks - script documents DE card/fmt strings only');
process.exit(0);
