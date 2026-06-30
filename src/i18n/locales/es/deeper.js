/**
 * Base de contenido del modal «Leer más profundo» (español).
 */
import { createContentExports } from '../../createContent.js';
import { patch } from './content-patch.js';
import { personalYearPrev, personalYearNext } from '../../../util.js';
const C = createContentExports(patch);
const { LIFE_PATH_MEANINGS, PERSONAL_YEAR_MEANINGS, EXPRESSION_MEANINGS, ANIMAL_DESC, TAROT_MEANINGS } = C;

export const LP_DETAILS = {
  1: [
    { t: 'Lado luminoso', d: 'Impulso y decisión. El poder de avanzar antes que otros y abrir caminos nuevos. Un alma que parece destinada a liderar.' },
    { t: 'Lado sombra', d: 'Aislamiento, orgullo, terquedad. Cuando dejas de escuchar, puedes inclinarte hacia lo dominante.' },
    { t: 'Propósito de vida', d: 'Alzar tu propia bandera. No seguir huellas ajenas, sino dejar las tuyas.' }
  ],
  2: [
    { t: 'Lado luminoso', d: 'Empatía, armonía, sintonía delicada. Leer el ambiente y conectar personas en silencio.' },
    { t: 'Lado sombra', d: 'Indecisión, dependencia, sacrificio excesivo. Ser demasiado tiempo «la persona buena» y perderse.' },
    { t: 'Propósito de vida', d: 'Ser un puente. Brillar en relaciones que no se completan solas.' }
  ],
  3: [
    { t: 'Lado luminoso', d: 'Expresión, optimismo, creatividad. Iluminar con palabras, color y risa.' },
    { t: 'Lado sombra', d: 'Cambios de humor, superficialidad, ligereza. Nadar en la superficie y evitar profundidad.' },
    { t: 'Propósito de vida', d: 'Añadir alegría al mundo. Disfrutar la vida puede ser consuelo para alguien más.' }
  ],
  4: [
    { t: 'Lado luminoso', d: 'Diligencia, paciencia, fiabilidad. Un alma artesana que construye capa a capa.' },
    { t: 'Lado sombra', d: 'Rigidez, conservadurismo, inflexibilidad. Miedo al cambio que encierra en un caparazón.' },
    { t: 'Propósito de vida', d: 'Construir el cimiento del mundo. No llamativo, pero pilar indispensable.' }
  ],
  5: [
    { t: 'Lado luminoso', d: 'Espíritu aventurero, flexibilidad, versatilidad. Alma de viento que se nutre del cambio.' },
    { t: 'Lado sombra', d: 'Inquietud, impulsividad, irresponsabilidad. Miedo a permanecer en algo el tiempo suficiente.' },
    { t: 'Propósito de vida', d: 'Acumular experiencia. No quedarse en un lugar, sino grabar la variedad del mundo.' }
  ],
  6: [
    { t: 'Lado luminoso', d: 'Afecto, responsabilidad, mediación. Presencia cálida en el centro de familia o comunidad.' },
    { t: 'Lado sombra', d: 'Sobreprotección, entrometimiento, mentalidad de mártir. Cuando el cuidado puede volverse control.' },
    { t: 'Propósito de vida', d: 'Traer orden con amor. Tu forma de cuidar puede sanar el mundo.' }
  ],
  7: [
    { t: 'Lado luminoso', d: 'Curiosidad, intuición, profundidad analítica. Sumergirse y traer verdad a la superficie.' },
    { t: 'Lado sombra', d: 'Soledad, crítica, retiro del mundo. Cerrar el corazón a lo que rodea.' },
    { t: 'Propósito de vida', d: 'Tender puentes al conocimiento. Devolver al mundo lo ganado en soledad.' }
  ],
  8: [
    { t: 'Lado luminoso', d: 'Ejecución, liderazgo, don de hacer real. Poder que puede gobernar materia y espíritu.' },
    { t: 'Lado sombra', d: 'Ansia de poder, fuerza bruta, apego al dinero. Línea fina donde la fuerza puede coercionar.' },
    { t: 'Propósito de vida', d: 'Dar forma a la abundancia. Riqueza, relaciones y energía deben circular, no solo acumularse.' }
  ],
  9: [
    { t: 'Lado luminoso', d: 'Amor amplio, espíritu humanitario, sabiduría de culminación. Presencia que integra todos los números.' },
    { t: 'Lado sombra', d: 'Escape, mentalidad de víctima, idealismo autojustificado. Agotamiento por ideales lejanos.' },
    { t: 'Propósito de vida', d: 'Completar un ciclo y pasarlo. Sostener el pasado y soltarlo hacia el futuro.' }
  ],
  11: [
    { t: 'Lado luminoso', d: 'Intuición y espiritualidad elevadas. Guiar como mensajero de luz.' },
    { t: 'Lado sombra', d: 'Tensión nerviosa, presión, autoduda. Recibir demasiado hasta sentirse abrumado.' },
    { t: 'Propósito de vida', d: 'Dar forma visible a lo invisible. Quizá el rol más delicado entre quienes tienden puentes.' }
  ],
  22: [
    { t: 'Lado luminoso', d: 'Maestro Constructor. Poder raro de convertir sueños en estructuras reales.' },
    { t: 'Lado sombra', d: 'Aplastado por la responsabilidad — o huir de ella.' },
    { t: 'Propósito de vida', d: 'Realizar una gran visión. No solo, sino convocando a muchos.' }
  ],
  33: [
    { t: 'Lado luminoso', d: 'Maestro Maestro. Alma que puede encarnar amor incondicional.' },
    { t: 'Lado sombra', d: 'Control en nombre del amor — o agotamiento del amor mismo.' },
    { t: 'Propósito de vida', d: 'Enseñar el amor mismo. Una vida que puede ser su propio libro.' }
  ]
};

export function premiumGeneric(systemLabel, valueLabel) {
  return [
    { t: 'Olas de fortuna a diez años', d: `Como ${valueLabel} en ${systemLabel}, puedes moverte en un ciclo de 9 años. Detalles de tu próximo año pico, año de cautela y mejores meses para sembrar.` },
    { t: 'Lectura de compatibilidad', d: 'Guía completa en 12 cuadrantes: tipos que pueden resonar, tipos que estimulan crecimiento y tipos a abordar con cuidado.' },
    { t: 'Encaje profesional', d: `Roles donde ${valueLabel} puede florecer, roles desalineados y cómo expresarlo en trabajo paralelo — leído contra un mapa de carrera moderno.` },
    { t: 'Lección del alma', d: 'La lección más importante que puedes encontrar en esta vida y cómo reconocer sus primeras señales.' },
    { t: 'Personas notables con el mismo signo', d: 'Lista de 100 figuras históricas y contemporáneas que comparten esta energía. Aprender de sus elecciones.' }
  ];
}

export function buildDeep(cardKey, ctx) {
  const { lp, py, en, expr, nameRoman, sun, mt, cz, sj, ks, gy, an, ct, my, tb, dt, bs, bf, bio, mp, ls } = ctx;

  switch (cardKey) {
    case 'lifepath': return {
      title: 'Número del camino de vida',
      value: lp,
      label: LIFE_PATH_MEANINGS[lp].label,
      intro: `El camino de vida ${lp} es el tema principal de tu vida. Puede reflejar el rol que tu alma eligió antes de nacer. ${LIFE_PATH_MEANINGS[lp].desc}`,
      free: LP_DETAILS[lp] || [
        { t: 'Lado luminoso', d: 'Tu mayor don puede dormir aquí.' },
        { t: 'Lado sombra', d: 'Cuando se pierde el equilibrio, este lado puede mostrarse.' },
        { t: 'Propósito de vida', d: 'El significado de elegir este camino.' }
      ],
      premium: premiumGeneric('Camino de vida', String(lp))
    };

    case 'personalYear': return {
      title: 'Año personal',
      value: py,
      label: `Tú en ${ctx.currentYear}`,
      intro: `Tu año personal sigue un ritmo de 9 años único. Este año es ${py}. ${PERSONAL_YEAR_MEANINGS[py]}Si te mueves con esta ola y no contra ella, la fortuna puede fluir con más suavidad.`,
      free: [
        { t: 'Vientos a favor este año', d: `${PERSONAL_YEAR_MEANINGS[py]}El movimiento en esta dirección puede bendecirse con más facilidad.` },
        { t: 'Trampas este año', d: `Al revés, aferrarse a la ola anterior — algo como «${PERSONAL_YEAR_MEANINGS[personalYearPrev(py)]}» — puede traer estancamiento.` },
        { t: 'Señales del próximo año', d: `El próximo año es Año Personal ${personalYearNext(py)}. ${PERSONAL_YEAR_MEANINGS[personalYearNext(py)] || 'Un punto de giro hacia un ciclo nuevo.'} Las elecciones de este año pueden ser el inicio del próximo.` }
      ],
      premium: [
        { t: 'Calendario de fortuna mensual', d: 'Doce meses desglosados por mes y día personal. Cuándo actuar, esperar y decidir.' },
        { t: 'Palabras clave de este año', d: 'Tres palabras solo para ti este año. Brújula cuando el juicio se nubla.' },
        { t: 'Encuentros este año', d: 'Tipos de vínculos que pueden aparecer, de dónde y cómo reconocerlos.' },
        { t: 'Meses a vigilar', d: 'Períodos donde salud, dinero o relaciones pueden sentirse inestables — y rituales que pueden restaurar equilibrio.' }
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
        title: 'Número del nombre',
        value: dual ? `${native} · ${latin}` : native,
        label: dual ? 'Nombre mostrado / letras romanas' : (EXPRESSION_MEANINGS[native] || '').replace('Energía del nombre:', ''),
        intro: dual
          ? `De tu nombre mostrado leemos ${native}; de «${roman}» leemos ${latin}. Ambos describen cómo te llaman — aparte del camino de vida ${lp}. Números distintos no compiten por cuál es «correcto».`
          : `Tu nombre libera la energía de ${native} cada vez que se pronuncia — aparte del camino de vida ${lp}, el número de cómo te llaman.`,
        free: [
          {
            t: 'Número del nombre en escritura mostrada',
            d: `De tu nombre mostrado: ${native}. Suma simple de glifos Unicode para escrituras no latinas — no numerología occidental clásica. Puede sugerir ${nativeTrait} como lente, no veredicto.`
          },
          dual
            ? {
              t: 'Número del nombre romano/latino (pitagórico)',
              d: `«${roman}» corresponde a ${latin} en la tabla A–Z habitual. ${latinTrait}La numerología internacional suele llamarlo número de expresión.`
            }
            : {
              t: 'Un segundo eje en letras romanas',
              d: roman && latin == null
                ? 'No se encontraron letras A–Z en el campo romano, así que no se calculó el número internacional. Prueba pasaporte o romanización.'
                : 'Añade una ortografía romana o latina opcional para ver también el número A–Z internacional junto a tu nombre mostrado.'
            },
          {
            t: 'Relación con el camino de vida',
            d: dual
              ? `Camino de vida ${lp}, mostrado ${native} y romano ${latin} pueden mostrar esencia de nacimiento, llamado cotidiano y resonancia internacional.`
              : `Camino de vida ${lp} con mostrado ${native} puede mostrar el equilibrio entre esencia interior y cómo te llaman.`
          },
          { t: 'Pistas para renombrar', d: 'Si tu nombre actual pesa, un apodo o nombre comercial con otro número puede invitar otra longitud de onda.' }
        ],
        premium: premiumGeneric('Número del nombre', dual ? `${native}/${latin}` : String(native))
      };
    }

    case 'sun': return {
      title: 'Signo solar',
      value: `${sun.symbol} ${sun.name}`,
      label: `Elemento ${sun.element}`,
      intro: `Tu signo solar puede revelar el núcleo del yo. Con el Sol en ${sun.name}, puedes encarnar ${sun.desc}Cada cumpleaños, el Sol vuelve al mismo signo y te ilumina.`,
      free: [
        { t: 'Núcleo de este signo', d: `${sun.name} pertenece al elemento ${sun.element} y puede tener una visión del mundo distinta. ${sun.desc}` },
        { t: 'Momentos de brillo', d: `${sun.name} puede brillar más en entornos alineados con su elemento. Elige lugares donde expresar cualidades de ${sun.element}.` },
        { t: 'Vivir con la sombra', d: 'Todo signo tiene luz y sombra. Hábitos diarios que eligen la luz pueden cambiar la calidad de tu vida.' }
      ],
      premium: [
        { t: 'Signo lunar y ascendente', d: 'El Sol no es tu único signo. Con hora y lugar de nacimiento se calculan Luna y ascendente — sinfonía de tres estrellas.' },
        { t: 'Análisis completo de 12 casas', d: 'Vista completa de cómo tu signo puede colocarse en las 12 casas (áreas de vida).' },
        { t: 'Tránsitos mayores', d: 'Cómo los planetas exteriores pueden afectar tu carta en los próximos tres años, mes a mes.' },
        { t: 'Carta de compatibilidad', d: 'Análisis de sinastría en cinco capas con pareja o familia.' },
        { t: 'Carta de vidas pasadas', d: 'Temas del alma en vidas pasadas y tarea de esta vida, leídos por los nodos lunares.' }
      ]
    };

    case 'moonTrait': return {
      title: 'Tendencia lunar',
      value: mt.name,
      label: 'Desde la fase lunar al nacer',
      intro: `La forma de la Luna en el cielo al nacer puede moldear el «hábito» de tu ritmo emocional. ${mt.desc}`,
      free: [
        { t: 'Patrones emocionales', d: 'Formas típicas en que pueden moverse los sentimientos de quienes nacieron bajo esta fase.' },
        { t: 'Relacionarse con la Luna', d: 'En noches de luna llena, luna nueva y cuartos — puedes descubrir qué te restaura.' },
        { t: 'Diario de sueños', d: 'Quienes tienen fuerte tendencia lunar pueden encontrar mensajes importantes en los sueños. Prueba tres minutos de registro matutino.' }
      ],
      premium: [
        { t: 'Signo lunar exacto', d: 'Con hora y lugar de nacimiento puede aparecer otro signo — tu verdadero lenguaje emocional.' },
        { t: 'Fortuna por fase lunar', d: 'Acciones de suerte por fase lunar en los próximos 12 meses.' },
        { t: 'Rituales lunares', d: 'Cómo componer ceremonias de luna nueva y llena cada mes adaptadas a ti.' }
      ]
    };

    case 'zodiac': return {
      title: 'Zodiaco chino',
      value: cz.name,
      label: `Nacido en año del ${cz.char}`,
      intro: `${cz.name} es el animal que puedes haber elegido en el ciclo oriental de 12 años. ${cz.desc}Quienes comparten signo pueden encontrar hitos cada 12 años.`,
      free: [
        { t: 'Núcleo de este signo', d: cz.desc },
        { t: 'Año del signo natal', d: 'Cada 12 años vuelve tu propio signo. Llamado «año del signo natal», puede ser hito de vida.' },
        { t: 'Pistas de compatibilidad', d: 'Liuhe (mejor emparejamiento), Sanhe (buen vínculo), Chong (choque estimulante) — combinaciones con significado profundo.' }
      ],
      premium: [
        { t: 'Mapa Liuhe, Sanhe y Chong', d: 'Mapa completo de relación entre tu signo y todos los demás. Dinámicas con familia, amantes y jefes.' },
        { t: 'Pilar de hora (zodiaco de hora de nacimiento)', d: 'No solo el año — la hora de nacimiento también tiene signo. Puede ser tu zodiaco interior.' },
        { t: 'Doce etapas de vida', d: 'Dónde puedes estar entre las doce etapas: nacimiento, crecimiento, prosperidad, declive, renovación…' }
      ]
    };

    case 'sixty': return {
      title: 'Pilar del año (ciclo sexagenario)',
      value: sj.name,
      label: `${sj.yinyang} ${sj.element}`,
      intro: `El ciclo sexagenario crea 60 improntas de diez tallos celestes y doce ramas terrestres. El mismo pilar del año vuelve solo cada 60 años. Tu pilar lleva la cualidad de ${sj.yinyang} ${sj.element}.`,
      free: [
        { t: 'Tu tallo celestial', d: `El tallo ${sj.name[0]} representa ${sj.yinyang} ${sj.element} y puede formar la base del carácter.` },
        { t: 'Tu rama terrestre', d: `La rama ${sj.name[1]} puede mostrar el flujo del destino, volviendo a la misma posición cada 12 años.` },
        { t: 'Rasgos del mismo pilar', d: 'Como esta impronta vuelve solo cada 60 años, puedes compartir terreno raro entre generaciones.' }
      ],
      premium: [
        { t: 'Los cuatro pilares', d: 'No solo el año — pilares de mes, día y hora juntos pueden completar tu carta de Cuatro Pilares.' },
        { t: 'Diez Dioses y Doce Etapas', d: 'El corazón de la astrología de Cuatro Pilares. Vida social, riqueza, familia y salud pueden verse.' },
        { t: 'Ciclos de suerte de diez años', d: 'Gran suerte dividida en períodos de 10 años. En qué ciclo puedes estar y qué puede venir.' }
      ]
    };

    case 'kyusei': return {
      title: 'Estrella honmei (Ki de nueve estrellas)',
      value: ks.name,
      label: `Estrella ${ks.element}`,
      intro: `El Ki de nueve estrellas deriva tu «estrella honmei» del año de nacimiento — adivinación única de Japón. Con ${ks.name} como honmei, puedes encarnar ${ks.desc}Esta estrella puede crear un ciclo de fortuna de 9 años.`,
      free: [
        { t: 'Esencia de la estrella honmei', d: ks.desc },
        { t: 'Ciclo de nueve años', d: 'La fortuna honmei puede completar una vuelta en 9 años — sembrar, nutrir, cosechar y limpiar en rotación.' },
        { t: 'Básicos de direcciones de suerte', d: 'En Ki de nueve estrellas, las direcciones de suerte se determinan por honmei y getsumei. Mudanza, viaje o dirección profesional pueden cambiar la fortuna.' }
      ],
      premium: [
        { t: 'Estrellas getsumei y nichimei', d: 'Más allá del honmei — getsumei y nichimei juntos pueden completar tu perfil Ki.' },
        { t: 'Direcciones de suerte este año y el próximo', d: 'Tu calendario personal de direcciones de suerte, cambiando cada año — hasta el mes de mayor fortuna.' },
        { t: 'Años dokai y hidokai', d: 'Años cuando pueden llegar grandes puntos de giro y cómo leer sus señales.' },
        { t: 'Compatibilidad de estrellas', d: 'Tabla de compatibilidad en cinco capas entre estrellas honmei — familia, amor y trabajo.' }
      ]
    };

    case 'gogyou': return {
      title: 'Cinco elementos',
      value: gy.element,
      label: 'Elemento del año de nacimiento',
      intro: `Los Cinco Elementos son las cinco fuerzas básicas que pueden componer el mundo. Puedes haber venido con ${gy.element} en el núcleo. ${gy.desc}`,
      free: [
        { t: 'Tu elemento', d: gy.desc },
        { t: 'Ciclo generador (que nutre)', d: 'Madera alimenta Fuego, Fuego crea Tierra, Tierra produce Metal, Metal recoge Agua, Agua nutre Madera. Puedes encontrar personas cuyo elemento te apoya.' },
        { t: 'Ciclo vencedor (que frena)', d: 'Madera frena Tierra, Tierra absorbe Agua, Agua apaga Fuego, Fuego derrite Metal, Metal corta Madera. Relaciones de control pueden crear tensión y crecimiento.' }
      ],
      premium: [
        { t: 'Tu balance de Cinco Elementos', d: 'Proporciones calculadas de fecha y hora de nacimiento. Qué puede abundar y qué faltar.' },
        { t: 'Cómo complementar elementos faltantes', d: 'Lista práctica — color, comida, dirección, piedras, hábitos — para nutrir lo ausente.' },
        { t: 'Mapa de compatibilidad de Cinco Elementos', d: 'Carta completa comparada con los elementos de otra persona. Quién apoya y quién agota, de un vistazo.' }
      ]
    };

    case 'animal': return {
      title: 'Fortuna animal',
      value: an.name,
      label: `Número de personalidad ${an.num}/60`,
      intro: `La fortuna animal deriva uno de 60 números de personalidad de la fecha de nacimiento y los clasifica en 12 animales. Eres ${an.name}. ${ANIMAL_DESC[an.name] || ''}`,
      free: [
        { t: 'Carácter básico', d: ANIMAL_DESC[an.name] || '' },
        { t: 'Clasificación de grupo', d: 'Los 12 animales pueden dividirse en tres grupos: Luna (soñador), Tierra (realista) y Sol (sensible).' },
        { t: 'Significado del número de personalidad', d: `Tu número es ${an.num}. Su lugar entre 60 puede sugerir matices más finos.` }
      ],
      premium: [
        { t: 'Perfil completo de 60 tipos', d: `Lectura detallada del número ${an.num}. El mismo número puede aparecer solo una vez cada 60 días.` },
        { t: 'Tipo líder o tipo apoyo', d: 'Incluso en el mismo animal, líder y apoyo pueden diferir. Tu verdadero rol en el grupo.' },
        { t: 'Compatibilidad con los 12 animales', d: 'Mapeo completo para amor, trabajo y amistad en todos los emparejamientos 60×60.' },
        { t: 'Carácter oculto', d: 'Otro tú bajo la superficie — el animal que puede emerger bajo estrés.' }
      ]
    };

    case 'celtic': return {
      title: 'Oráculo de árboles celtas',
      value: ct.name,
      label: 'Uno de trece árboles sagrados',
      intro: `Los druidas celtas antiguos dividieron el año en trece meses lunares, cada uno con un árbol. Tu árbol guardián es ${ct.name}. ${ct.desc}`,
      free: [
        { t: 'Poder del árbol guardián', d: ct.desc },
        { t: 'Sabiduría druídica', d: 'En el bosque celta, cada árbol decía tener un espíritu distinto. Tu árbol puede ser el espíritu que tu alma tomó prestado del bosque.' },
        { t: 'Rituales con tu árbol', d: 'Respirar profundo ante tu árbol guardián, recoger una hoja — algo en ti puede asentarse en silencio.' }
      ],
      premium: [
        { t: 'Letras ogham', d: 'Letras celtas antiguas emparejadas con cada árbol. Tu símbolo personal, listo para tallar como talismán.' },
        { t: 'Animal y piedra guardián', d: 'El animal y la piedra que pueden aparecer junto a tu árbol.' },
        { t: 'Rituales estacionales', d: 'Ceremonias con tu árbol en equinoccios y solsticios — las cuatro fiestas de temporada.' },
        { t: 'Árboles compatibles', d: 'Qué árboles del bosque celta pueden dar el fruto más rico emparejados con el tuyo.' }
      ]
    };

    case 'maya': return {
      title: 'Calendario maya KIN',
      value: `KIN ${my.kin}`,
      label: `${my.tone} ${my.seal}`,
      intro: `El sagrado calendario Tzolk'in maya corre en un ciclo de 260 días con 260 KIN. Tu KIN es ${my.kin}, sello «${my.seal}», tono galáctico «${my.tone}». El sello puede reflejar esencia; el tono, ritmo.`,
      free: [
        { t: 'Significado del sello', d: `${my.seal} es uno de 20 sellos — un símbolo que puede expresar tu esencia.` },
        { t: 'Significado del tono galáctico', d: `${my.tone} es uno de 13 tonos rítmicos — puede sugerir el tempo de tu vida.` },
        { t: 'Unicidad del número KIN', d: 'Alguien con tu KIN exacto puede nacer solo una vez cada 260 días. Unos 25 millones de almas afines en el mundo.' }
      ],
      premium: [
        { t: 'KIN guía, antípoda y análogo', d: 'El KIN que puede guiarte, reflejarte y resonar con tu energía — plenamente identificado.' },
        { t: 'Onda de 13 días', d: 'Tu ciclo de 13 días de vida. Dónde puedes estar y qué ola puede venir.' },
        { t: 'Firma galáctica', d: 'Tu nombre galáctico completo — KIN, sello, tono, castillo y chakra juntos.' },
        { t: 'Lectura diaria de KIN', d: 'Un calendario maya diario que interpreta cómo el KIN de hoy se relaciona con el tuyo.' }
      ]
    };

    case 'tarotBirth': return {
      title: 'Carta de nacimiento del tarot',
      value: tb.name,
      label: `Arcano mayor ${tb.num}`,
      intro: `Entre los 22 Arcanos Mayores, una carta calculada de la fecha de nacimiento puede ser la carta temática de tu alma. La tuya es ${tb.name}. ${TAROT_MEANINGS[tb.name]}`,
      free: [
        { t: 'Núcleo de esta carta', d: TAROT_MEANINGS[tb.name] },
        { t: 'Simbolismo del número', d: `El número ${tb.num} puede tener su propio significado en el tarot. Tu vida puede ser un viaje tejido por este número.` },
        { t: 'Lado sombra', d: 'Toda carta tiene luz y sombra. Cuando pesa, puede reflejar un proceso de cambio o soltar — no un veredicto.' }
      ],
      premium: [
        { t: 'Cartas personales del arcano menor', d: 'Calcula los palos del arcano menor (Espadas, Copas, Bastos, Pentáculos) detrás del arcano mayor.' },
        { t: 'Carta temática de este año', d: 'La carta que cambia cada año — qué puedes estar aprendiendo y soltando.' },
        { t: 'Carta sombra', d: 'Otro tú oculto en la sombra de tu carta de nacimiento — temas bajo la conciencia.' },
        { t: 'Tirada completa de siete cartas', d: 'Una tirada de vida: pasado, presente, futuro, obstáculo, esperanza, inconsciente y resultado.' }
      ]
    };

    case 'tarotDaily': return {
      title: 'Carta de hoy',
      value: dt.name,
      label: 'Para ti hoy',
      intro: `En este día particular, la carta extraída de tu nombre y la fecha de hoy es ${dt.name}. ${dt.desc}`,
      free: [
        { t: 'Mensaje de hoy', d: dt.desc },
        { t: 'Por qué apareció esta carta', d: 'Las cartas pueden no aparecer por accidente — pueden traer el mensaje necesario en el momento necesario.' },
        { t: 'Cómo pasar el día', d: 'Cuando alineas el día con la energía de esta carta, las cosas pueden fluir con sorpresa.' }
      ],
      premium: [
        { t: 'Lectura de cartas de siete días', d: 'Una tirada de siete días desde hoy — temas y acciones a elegir cada día.' },
        { t: 'Carta principal de este mes', d: 'La carta que puede simbolizar tu mes — tema mensual.' },
        { t: 'Tirada Cruz Celta', d: 'La lectura más clásica — diez cartas analizando tu situación desde muchos ángulos.' }
      ]
    };

    case 'birthstone': return {
      title: 'Piedra de nacimiento',
      value: bs.name,
      label: `Piedra de ${ctx.m}`,
      intro: `Una piedra de nacimiento es la gema emparejada con tu mes de nacimiento. La tuya es ${bs.name}. Se dice que ${bs.meaning} habita en ella, y se ha llevado como talismán desde hace tiempo.`,
      free: [
        { t: 'Poder de la gema', d: bs.meaning },
        { t: 'Cómo llevarla', d: 'Las piedras de nacimiento pueden funcionar mejor cerca de la piel — anillos, collares, pulseras.' },
        { t: 'Métodos de limpieza', d: 'Las piedras también absorben energía. Luz lunar, racimos de cristal o humo de salvia pueden ayudar a limpiar regularmente.' }
      ],
      premium: [
        { t: 'Tus tres piedras guardián principales', d: 'Tres piedras de apoyo más allá de la de nacimiento, derivadas de fecha y estrella honmei — combinadas para sinergia.' },
        { t: 'Ciencia de las gemas', d: 'Estructura cristalina, longitud de onda y energía — leídas desde ángulos espiritual y científico.' },
        { t: 'Rituales con gemas', d: 'Meditación con piedras y rejillas de cristal compuestas para distintas intenciones.' }
      ]
    };

    case 'birthflower': return {
      title: 'Flor de nacimiento',
      value: bf,
      label: `Flor de ${ctx.m}`,
      intro: `Una flor de nacimiento es una flor representativa de cada mes. La tuya es ${bf}. Las flores se han visto como espejos del estado del alma.`,
      free: [
        { t: 'Símbolo de la flor', d: 'Símbolo de tu mes de nacimiento. Tenerla cerca puede ayudar a asentar el corazón.' },
        { t: 'Lenguaje de las flores', d: 'Cada flor tiene su lenguaje — el de tu flor de nacimiento puede funcionar como mensaje para tu vida.' },
        { t: 'Vivir con flores', d: 'Una sola flor de nacimiento en tu escritorio — algunos días, eso basta para marcar el tono.' }
      ],
      premium: [
        { t: 'Flor de nacimiento por fecha', d: 'No solo por mes — 365 flores asignadas por fecha. Tu propia flor.' },
        { t: 'Calendario de fortuna floral', d: 'Una flor de suerte cada mes — usando flores que te convienen todo el año.' },
        { t: 'Remedios florales', d: 'De los remedios florales de Bach, una lista de 38 esencias alineadas con tu estrella honmei y numerología.' }
      ]
    };

    case 'biorhythm': return {
      title: 'Biorritmo',
      value: `Día ${bio.days.toLocaleString()}`,
      label: 'Días desde el nacimiento',
      intro: `El biorritmo es una práctica del siglo XX que calcula ondas de energía física, emocional, intelectual e intuitiva desde los días desde el nacimiento. Estás en el día ${bio.days.toLocaleString()}.`,
      free: [
        { t: 'Cuatro ondas', d: `Física: ciclo de 23 días; emocional: 28; intelectual: 33; intuitiva: 38. Tus valores actuales pueden ser físico ${(bio.physical*100).toFixed(0)}, emocional ${(bio.emotional*100).toFixed(0)}, intelectual ${(bio.intellectual*100).toFixed(0)}, intuitivo ${(bio.intuitive*100).toFixed(0)}.` },
        { t: 'Días críticos', d: 'Los días en que una onda cruza cero se llaman «días críticos» — errores de juicio y accidentes pueden ser más probables.' },
        { t: 'Ondas y acción', d: 'Subiendo: avanzar; bajando: proteger; pico: mostrar; valle: descansar. Moverse con la onda puede reducir el agotamiento.' }
      ],
      premium: [
        { t: 'Calendario de pronóstico de 90 días', d: 'Pronóstico de cuatro ondas para los próximos 90 días — fechas óptimas para reuniones, entrevistas, citas, mudanzas y más.' },
        { t: 'Biorritmo combinado para dos', d: 'Superpone biorritmos con pareja o familia para encontrar días de moverse juntos y días de descansar aparte.' },
        { t: 'Alertas de días críticos', d: 'Aviso anticipado cuando se acercan días críticos — quizá la medida de prevención de accidentes más fuerte.' }
      ]
    };

    case 'moon': return {
      title: 'Luna de esta noche',
      value: mp.name,
      label: `Fase ${(mp.phase * 100).toFixed(1)}%`,
      intro: `La Luna en el cielo de esta noche es ${mp.name}. La fase es ${(mp.phase * 100).toFixed(1)}%. Los ciclos lunares pueden afectar plantas, mar, cuerpo y corazón. Lo que sientes ahora puede ser en parte influencia de la Luna.`,
      free: [
        { t: 'Significado de la fase', d: 'Luna nueva: comienzos; cuarto creciente: desafío; luna llena: culminación; cuarto menguante: soltar. ¿Qué puede invitar la Luna de esta noche?' },
        { t: 'Luna y emoción', d: 'Tres días antes y después de luna llena o nueva, los sentimientos pueden moverse con más facilidad — buen momento para rituales de empezar o terminar algo.' },
        { t: 'Rituales lunares', d: 'Escribir deseos en luna nueva, ofrecer gratitud en luna llena — forma simple y antigua de trabajar con energía lunar.' }
      ],
      premium: [
        { t: 'Calendario de lunas nuevas y llenas de 12 meses', d: 'Lunas nuevas y llenas de los próximos 12 meses, sus signos y cómo pueden afectarte.' },
        { t: 'Ciclo lunar personal', d: 'Cómo la fase de hoy se relaciona con tu fase lunar de nacimiento — puntos de giro en la vida pueden aparecer aquí.' },
        { t: 'Ceremonia de baño de luz lunar', d: 'Un ritual mensual de luna llena solo para ti — fortalecer deseos, soltar lo que ya no sirve.' }
      ]
    };

    case 'lifeStagePrev': return {
      title: 'Hito de vida reciente',
      value: ls.prev ? `Edad ${ls.prev.age}` : '—',
      label: ls.prev ? ls.prev.name : '',
      intro: ls.prev ? `A los ${ls.prev.age} años, puedes haber pasado por «${ls.prev.name}.» ${ls.prev.desc}` : 'Aún no has alcanzado tu primer hito mayor.',
      free: ls.prev ? [
        { t: 'Significado de este hito', d: ls.prev.desc },
        { t: 'Qué puede pasar entonces', d: 'En hitos mayores de vida, relaciones, trabajo o hogar suelen moverse mucho.' },
        { t: 'Preguntas de reflexión', d: `A los ${ls.prev.age} años, ¿qué ocurría para ti? Escribirlo ahora puede revelar patrones en tu vida.` }
      ] : [],
      premium: [
        { t: 'Análisis de todos los hitos pasados', d: 'Lista completa de hitos desde el nacimiento hasta hoy — qué pasó entonces, qué cambió.' },
        { t: 'Hitos ocultos', d: 'Tránsitos astrológicos importantes poco conocidos — puntos de giro silenciosos en tu vida.' },
        { t: 'Patrones en cadena de hitos', d: 'Temas que pueden repetirse en tus hitos. Preparación para lo que puede venir.' }
      ]
    };

    case 'lifeStageNext': return {
      title: 'Próximo hito de vida',
      value: ls.next ? `Edad ${ls.next.age}` : '—',
      label: ls.next ? ls.next.name : '',
      intro: ls.next ? `Tu próximo hito de vida puede ser a los ${ls.next.age}: «${ls.next.name}.» Puede llegar en unos ${(ls.next.age - ls.years).toFixed(1)} años. ${ls.next.desc}` : 'Puedes estar en un tramo tranquilo entre hitos mayores.',
      free: ls.next ? [
        { t: 'Significado de este hito', d: ls.next.desc },
        { t: 'Qué preparar', d: 'Las señales pueden empezar en silencio varios años antes de un hito mayor. Escucha la voz interior.' },
        { t: 'Señales de oportunidad', d: 'Alrededor de este hito, nuevos vínculos, lugares o roles pueden ser más probables. Mantenerse abierto puede ayudar.' }
      ] : [],
      premium: [
        { t: 'Línea de tiempo completa de diez años', d: 'Cada hito que puede llegar en los próximos diez años, su significado y cómo prepararse mejor.' },
        { t: 'Momento para matrimonio, nacimiento, cambio de carrera', d: 'Análisis de tránsitos para identificar timing favorable para decisiones mayores de vida.' },
        { t: 'Períodos de prueba y cómo enfrentarlos', d: 'Los hitos suelen traer pruebas. Saberlo de antemano puede preparar el corazón.' }
      ]
    };
  }
  return null;
}
