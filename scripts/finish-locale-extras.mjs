/**
 * Splices DE/IT/TR/HE/AR locale blocks into localeUiExtras.js
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = path.join(root, 'src/i18n/localeUiExtras.js');
let src = readFileSync(file, 'utf8');

const localeMeta = {
  de: { tag: 'de-DE', name: 'DE', pyHeading: (py, theme) => `Persönliches Jahr ${py} · ${theme}` },
  it: { tag: 'it-IT', name: 'IT', pyHeading: (py, theme) => `Anno personale ${py} · ${theme}` },
  tr: { tag: 'tr-TR', name: 'TR', pyHeading: (py, theme) => `Kişisel yıl ${py} · ${theme}` },
  he: { tag: 'he-IL', name: 'HE', pyHeading: (py, theme) => `שנה אישית ${py} · ${theme}` },
  ar: { tag: 'ar-SA', name: 'AR', pyHeading: (py, theme) => `السنة الشخصية ${py} · ${theme}` }
};

// Extract ES block as template
const esMatch = src.match(/const ES = (\{[\s\S]*?\n\});\n\nconst FR/);
if (!esMatch) throw new Error('ES block not found');
const esTemplate = esMatch[1];

const replacements = {
  de: [
    [/Número del camino de vida/g, 'Lebenspfad-Zahl'],
    [/Año personal/g, 'Persönliches Jahr'],
    [/Número del nombre/g, 'Namenszahl'],
    [/Vibración de tu nombre/g, 'Schwingung deines Namens'],
    [/Signo solar/g, 'Sonnenzeichen'],
    [/Tendencia lunar/g, 'Mond-Tendenz'],
    [/Según la fase lunar al nacer/g, 'Aus der Mondphase bei der Geburt'],
    [/El signo lunar exacto requiere la hora de nacimiento/g, 'Das genaue Mondzeichen braucht die Geburtszeit'],
    [/Zodiaco chino/g, 'Chinesisches Tierkreiszeichen'],
    [/Pilar del año \(60 Stem-Branch\)/g, 'Jahressäule (60 Stämme-Zweige)'],
    [/Estrella vital Kyusei/g, 'Kyusei-Lebensstern'],
    [/Cinco elementos/g, 'Fünf Elemente'],
    [/Arquetipo animal/g, 'Tier-Archetyp'],
    [/Árbol celta/g, 'Keltischer Baum'],
    [/KIN calendario maya/g, 'Maya-KIN'],
    [/Carta de nacimiento/g, 'Tarot-Geburtskarte'],
    [/Carta de hoy/g, 'Karte des Tages'],
    [/Piedra de nacimiento/g, 'Geburtsstein'],
    [/Flor de nacimiento/g, 'Geburtsblume'],
    [/Biorritmo/g, 'Biorhythmus'],
    [/Luna de esta noche/g, 'Mond heute Nacht'],
    [/Hito reciente/g, 'Jüngster Meilenstein'],
    [/Próximo hito/g, 'Nächster Meilenstein'],
    [/Línea de 10 años/g, '10-Jahres-Zeitleiste'],
    [/La década por venir/g, 'Das kommende Jahrzehnt'],
    [/Lectura maestra unificada/g, 'Vereinte Meister-Lesung'],
    [/Diecinueve sistemas tejidos/g, 'Neunzehn Systeme verwoben'],
    [/Tu historia/g, 'Deine Geschichte'],
    [/Toca cualquier carta/g, 'Tippe eine Karte'],
    [/Arquetipo amoroso/g, 'Liebes-Archetyp'],
    [/Lectura de amor/g, 'Liebes-Lesung'],
    [/Compatibilidad/g, 'Kompatibilität'],
    [/Lectura interactiva/g, 'Interaktive Lesung'],
    [/Lectura maestra/g, 'Meister-Lesung'],
    [/Mes/g, 'Monat'], [/Día/g, 'Tag'], [/Año/g, 'Jahr'],
    [/es-ES/g, 'de-DE'],
    [/Tú en /g, 'Du in '],
    [/Nacido en el año del /g, 'Geboren im Jahr des '],
    [/Elemento del año de nacimiento/g, 'Element des Geburtsjahres'],
    [/Colores/g, 'Farben'], [/Números/g, 'Zahlen'], [/Días/g, 'Tage'],
    [/Físico/g, 'Körperlich'], [/Emocional/g, 'Emotional'], [/Intelectual/g, 'Intellektuell'], [/Intuitivo/g, 'Intuitiv']
  ],
  it: [
    [/Número del camino de vida/g, 'Numero del percorso di vita'],
    [/Año personal/g, 'Anno personale'],
    [/Signo solar/g, 'Segno solare'],
    [/Compatibilidad/g, 'Compatibilità'],
    [/Lectura de amor/g, 'Lettura d\'amore'],
    [/Línea de 10 años/g, 'Linea del tempo di 10 anni'],
    [/Mes/g, 'Mese'], [/Día/g, 'Giorno'], [/Año/g, 'Anno'],
    [/es-ES/g, 'it-IT'],
    [/Tu historia/g, 'La tua storia'],
    [/Tú en /g, 'Tu nel '],
    [/Colores/g, 'Colori'], [/Números/g, 'Numeri'], [/Días/g, 'Giorni']
  ],
  tr: [
    [/Número del camino de vida/g, 'Yaşam yolu sayısı'],
    [/Año personal/g, 'Kişisel yıl'],
    [/Signo solar/g, 'Güneş burcu'],
    [/Compatibilidad/g, 'Uyumluluk'],
    [/Lectura de amor/g, 'Aşk okuması'],
    [/Línea de 10 años/g, '10 yıllık zaman çizelgesi'],
    [/Mes/g, 'Ay'], [/Día/g, 'Gün'], [/Año/g, 'Yıl'],
    [/es-ES/g, 'tr-TR'],
    [/Tu historia/g, 'Hikayen'],
    [/Tú en /g, `${''}Sen ${''}`],
    [/Colores/g, 'Renkler'], [/Números/g, 'Sayılar'], [/Días/g, 'Günler']
  ],
  he: [
    [/Número del camino de vida/g, 'מספר נתיב החיים'],
    [/Año personal/g, 'שנה אישית'],
    [/Signo solar/g, 'מזל השמש'],
    [/Compatibilidad/g, 'התאמה'],
    [/Lectura de amor/g, 'קריאת אהבה'],
    [/Línea de 10 años/g, 'ציר זמן של 10 שנים'],
    [/Mes/g, 'חודש'], [/Día/g, 'יום'], [/Año/g, 'שנה'],
    [/es-ES/g, 'he-IL'],
    [/Tu historia/g, 'הסיפור שלך'],
    [/Colores/g, 'צבעים'], [/Números/g, 'מספרים'], [/Días/g, 'ימים']
  ],
  ar: [
    [/Número del camino de vida/g, 'رقم مسار الحياة'],
    [/Año personal/g, 'السنة الشخصية'],
    [/Signo solar/g, 'برج الشمس'],
    [/Compatibilidad/g, 'التوافق'],
    [/Lectura de amor/g, 'قراءة الحب'],
    [/Línea de 10 años/g, 'خط زمني لعشر سنوات'],
    [/Mes/g, 'الشهر'], [/Día/g, 'اليوم'], [/Año/g, 'السنة'],
    [/es-ES/g, 'ar-SA'],
    [/Tu historia/g, 'قصتك'],
    [/Colores/g, 'الألوان'], [/Números/g, 'الأرقام'], [/Días/g, 'الأيام']
  ]
};

function applyReplacements(text, reps) {
  let out = text;
  for (const [re, sub] of reps) out = out.replace(re, sub);
  return out;
}

let blocks = '';
for (const [code, meta] of Object.entries(localeMeta)) {
  let body = applyReplacements(esTemplate, replacements[code]);
  body = body.replace(/yearYou: \(y\) => `[^`]+`/, `yearYou: (y) => \`${code === 'de' ? 'Du in' : code === 'it' ? 'Tu nel' : code === 'tr' ? 'Sen' : code === 'he' ? 'אתה ב' : 'أنت في'} \${y}\``);
  blocks += `\nconst ${meta.name} = ${body};\n`;
}

const exportMatch = src.match(/(\/\*\* @type[\s\S]*export const UI_EXTRAS = \{[\s\S]*?\};)/);
if (!exportMatch) throw new Error('export not found');

const newExport = `/** @type {Record<string, Partial<typeof import('./locales/en/ui.js').ui>>} */
export const UI_EXTRAS = {
  zh: buildExtras(ZH, 'zh-CN'),
  ko: buildExtras(KO, 'ko-KR'),
  es: buildExtras(ES, 'es-ES'),
  fr: buildExtras(FR, 'fr-FR'),
  de: buildExtras(DE, 'de-DE'),
  it: buildExtras(IT, 'it-IT'),
  tr: buildExtras(TR, 'tr-TR'),
  he: buildExtras(HE, 'he-IL'),
  ar: buildExtras(AR, 'ar-SA')
};`;

src = src.replace(/\nconst FR = \{[\s\S]*?\n\};\n\n\/\*\* @type[\s\S]*export const UI_EXTRAS = \{[\s\S]*?\};/, `\n${blocks}\n${newExport}`);

writeFileSync(file, src);
console.log('Patched', file);
