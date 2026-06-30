/** Español — parche de campos de cadena de en/content.js */
export const patch = {
  LIFE_PATH_MEANINGS: {
    1:  { label: 'Líder · Pionero',              desc: 'Un alma de independencia y espíritu pionero. Aquí para abrir caminos nuevos.' },
    2:  { label: 'Armonizador · Colaborador',     desc: 'Conecta personas con sensibilidad delicada. Persona de acogida e intuición.' },
    3:  { label: 'Expresor · Artista',            desc: 'Difunde creatividad y alegría al mundo. Portador de palabras y color.' },
    4:  { label: 'Constructor · Artesano',           desc: 'Un alma que cimenta con firmeza. Da forma con orden y paciencia.' },
    5:  { label: 'Espíritu libre · Aventurero',        desc: 'Se nutre del cambio y la experiencia. No le gusta la restricción, como el viento.' },
    6:  { label: 'Amante · Mediador',              desc: 'Profundo afecto por la familia y la comunidad. Sostiene belleza y responsabilidad.' },
    7:  { label: 'Buscador · Místico',               desc: 'Un alma que se sumerge hacia dentro. Observador silencioso en busca de verdad.' },
    8:  { label: 'Realizador · Ejecutivo',          desc: 'Poder sobre los reinos material y espiritual. Da forma a la abundancia.' },
    9:  { label: 'Humanitario · Completador',      desc: 'Un alma que ama ampliamente y sabe soltar. La culminación de un viaje.' },
    11: { label: 'Maestro 11 — Iluminador',       desc: 'Un alma que lleva luz con intuición elevada. Vive entre tensión y espiritualidad.' },
    22: { label: 'Maestro 22 — Creador',           desc: 'El poder de convertir sueños en estructuras del mundo. El místico más práctico.' },
    33: { label: 'Maestro 33 — Maestro del amor',   desc: 'Un alma rara que puede encarnar el amor incondicional.' }
  },

  PERSONAL_YEAR_MEANINGS: {
    1: 'Un año de sembrar. El inicio de un nuevo ciclo.',
    2: 'Un año de nutrir. La cooperación y la paciencia son clave.',
    3: 'Un año de expresión. Disfruta la alegría y la conexión social.',
    4: 'Un año de construir. Refuerza tus cimientos con constancia.',
    5: 'Un año de cambio. Se buscan movimiento y libertad.',
    6: 'Un año de responsabilidad. La familia y el amor ocupan el centro.',
    7: 'Un año de introspección. Tiempo de quietud y aprendizaje.',
    8: 'Un año de cosecha. El éxito material toma forma.',
    9: 'Un año de culminación. Temporada de soltar y reflexionar.'
  },

  EXPRESSION_MEANINGS: {
    1: 'Energía del nombre: individualidad y espíritu pionero.',
    2: 'Energía del nombre: cooperación y vibración mediadora.',
    3: 'Energía del nombre: expresión y alegría.',
    4: 'Energía del nombre: firmeza y paciencia.',
    5: 'Energía del nombre: cambio y aventura.',
    6: 'Energía del nombre: amor y responsabilidad.',
    7: 'Energía del nombre: misterio e introspección.',
    8: 'Energía del nombre: poder y manifestación.',
    9: 'Energía del nombre: amor amplio y culminación.'
  },

  SUN_SIGNS: [
    { name: 'Capricornio',  element: 'Tierra', desc: 'Firme, responsable, impulsado a lograr.' },
    { name: 'Acuario',   element: 'Aire', desc: 'Innovación, independencia, amor a la humanidad.' },
    { name: 'Piscis',     element: 'Agua', desc: 'Sensibilidad, sueños, un océano de empatía.' },
    { name: 'Aries',      element: 'Fuego', desc: 'Acción, espíritu pionero, pasión pura.' },
    { name: 'Tauro',     element: 'Tierra', desc: 'Estabilidad, sensualidad, placer de los sentidos.' },
    { name: 'Géminis',     element: 'Aire', desc: 'Curiosidad, intelecto, comunicación.' },
    { name: 'Cáncer',     element: 'Agua', desc: 'Emoción, hogar, amor protector.' },
    { name: 'Leo',        element: 'Fuego', desc: 'Autoexpresión, creatividad, presencia regia.' },
    { name: 'Virgo',      element: 'Tierra', desc: 'Análisis, servicio, amor al refinamiento.' },
    { name: 'Libra',      element: 'Aire', desc: 'Armonía, sentido estético, relaciones.' },
    { name: 'Escorpio',    element: 'Agua', desc: 'Profundidad, transformación, pasión absoluta.' },
    { name: 'Sagitario', element: 'Fuego', desc: 'Exploración, libertad, visión filosófica.' }
  ],

  MOON_TRAITS: [
    { name: 'Nacido en fase de Luna nueva',        desc: 'Un alma que nace con algo en germen dentro. Intuitiva e instintiva.' },
    { name: 'Nacido en fase de Cuarto creciente',   desc: 'Un alma nacida en una ola de desafío y acción. Fuerte impulso de avanzar.' },
    { name: 'Nacido en fase de Luna llena',       desc: 'Un alma donde emoción y conciencia se tiran. Expresiva y magnética.' },
    { name: 'Nacido en fase de Cuarto menguante',    desc: 'Un alma nacida en una ola de soltar y reflexión. Profundidad y sabiduría.' }
  ],

  CHINESE_ZODIAC: [
    { name: 'Zi (Rata)',       char: 'Rata',     desc: 'Rápida e ingeniosa. Rara vez pierde una oportunidad.' },
    { name: 'Chou (Buey)',      char: 'Buey',      desc: 'Paciente y firme. Avanza paso seguro a paso seguro.' },
    { name: 'Yin (Tigre)',    char: 'Tigre',   desc: 'Valiente y apasionado. Se mueve como el viento.' },
    { name: 'Mao (Conejo)',   char: 'Conejo',  desc: 'Grácil y delicado. Honra la armonía.' },
    { name: 'Chen (Dragón)',  char: 'Dragón',  desc: 'Idealismo y nobleza. Un alma de gran escala.' },
    { name: 'Si (Serpiente)',     char: 'Serpiente',   desc: 'Intuición y misterio. Ve profundo y en silencio.' },
    { name: 'Wu (Caballo)',     char: 'Caballo',   desc: 'Libertad y rapidez. Deja correr la pasión.' },
    { name: 'Wei (Cabra)',     char: 'Cabra',    desc: 'Suavidad y arte. Un empático cálido.' },
    { name: 'Shen (Mono)',  char: 'Mono',  desc: 'Intelecto e ingenio. Maestro de la curiosidad.' },
    { name: 'You (Gallo)',  char: 'Gallo', desc: 'Orgulloso y meticuloso. Presencia con voz.' },
    { name: 'Xu (Perro)',       char: 'Perro',     desc: 'Lealtad y justicia. Guardián de la confianza.' },
    { name: 'Hai (Jabalí)',     char: 'Jabalí',    desc: 'Franco y valiente. Carga hacia adelante.' }
  ],

  KYUSEI_STARS: [
    null,
    { name: 'Estrella Uno Blanca Agua',   element: 'Agua', desc: 'Flexible e introspectiva. Sigue el flujo y echa raíces profundas.' },
    { name: 'Estrella Dos Negra Tierra',   element: 'Tierra', desc: 'Devoción y diligencia. Nutre como la tierra misma.' },
    { name: 'Estrella Tres Verde Madera',  element: 'Madera',  desc: 'El vigor de los brotes nuevos. Estrella de alcance y acción.' },
    { name: 'Estrella Cuatro Verde Madera',   element: 'Madera',  desc: 'Suave como el viento. Trae conexiones y relaciones.' },
    { name: 'Estrella Cinco Amarilla Tierra', element: 'Tierra', desc: 'La estrella central. Atrae con fuerte magnetismo.' },
    { name: 'Estrella Seis Blanca Metal',   element: 'Metal', desc: 'Cielo y autoridad. Orgullosa, aspira a la perfección.' },
    { name: 'Estrella Siete Roja Metal',   element: 'Metal', desc: 'Alegría y sociabilidad. Ilumina cualquier reunión.' },
    { name: 'Estrella Ocho Blanca Tierra', element: 'Tierra', desc: 'La estrella montaña. Cambio, herencia, voluntad inquebrantable.' },
    { name: 'Estrella Nueve Púrpura Fuego',  element: 'Fuego',  desc: 'Luz y sentido estético. Irradia brillantez con intuición.' }
  ],

  GOGYOU_DESCS: {
    '木': 'El poder de crecer. Mirada hacia adelante, como una mañana de verde fresco.',
    '火': 'Pasión ardiente. Ilumina alrededor con luz y calor.',
    '土': 'El poder de recibir. Se sienta firme en el centro.',
    '金': 'El poder de refinar. Intelecto frío, bello, afilado.',
    '水': 'El poder de fluir. Se mueve profundo y flexible entre todas las cosas.'
  },

  ANIMAL_NAMES: [
    'Pantera negra','Pegaso','Mono','Oso koala','Tigre','Mapache',
    'Koala','Elefante','Guepardo','León','Lobo','Oveja'
  ],

  ANIMAL_DESC: {
    'Pantera negra': 'Ojo agudo para belleza y novedad. Carisma frío y natural.',
    'Pegaso':       'Genio de espíritu libre. Las ideas toman alas.',
    'Mono':        'Servicial y curioso. Lee el ambiente como un maestro.',
    'Oso koala':    'Reflexivo con preferencias marcadas. Corazón de investigador.',
    'Tigre':         'Presencia magnánima. Un rey que avanza sin prisa.',
    'Mapache':        'Cálido y accesible. Guardián de sabiduría suave.',
    'Koala':         'Reconfortante y observador. Ritmo propio.',
    'Elefante':      'Trabajador y poderoso. Fuerza por persistencia.',
    'Guepardo':       'Velocidad explosiva y acción solitaria. Corre en línea recta.',
    'León':          'Orgullo y dignidad. Nacido bajo estrella que atrae miradas.',
    'Lobo':          'Piensa profundo en soledad. Mundo propio.',
    'Oveja':         'Corazón cálido y cooperativo. Brilla con otros.'
  },

  MAYA_SEALS: [
    'Dragón rojo','Viento blanco','Noche azul','Semilla amarilla','Serpiente roja',
    'Puente mundial blanco','Mano azul','Estrella amarilla','Luna roja','Perro blanco',
    'Mono azul','Humano amarillo','Caminante del cielo rojo','Mago blanco','Águila azul',
    'Guerrero amarillo','Tierra roja','Espejo blanco','Tormenta azul','Sol amarillo'
  ],

  MAYA_TONES: [
    'Magnético ','Lunar ','Eléctrico ','Autoexistente ','Sobretón ','Rítmico ',
    'Resonante ','Galáctico ','Solar ','Planetario ','Espectral ','Cristal ','Cósmico '
  ],

  TAROT_MEANINGS: {
    'El Mago':       'Voluntad y creación. Da forma a la posibilidad.',
    'La Sacerdotisa': 'Intuición y misterio. Transmite mucho sin hablar.',
    'La Emperatriz':        'Abundancia y amor. Símbolo del poder nutritivo.',
    'El Emperador':        'Estructura y autoridad. Voluntad que construye estabilidad.',
    'El Hierofante':     'Tradición y enseñanza. Quien tiende puentes entre mundos.',
    'Los Enamorados':         'Elección y unión. Viaje para decidir la dirección del corazón.',
    'El Carro':        'Avance y voluntad. Avanza dominando la dificultad.',
    'La Fuerza':           'Coraje silencioso. Muestra fuerza con suavidad.',
    'El Ermitaño':         'Luz interior. Busca verdad en soledad.',
    'La Rueda de la Fortuna':   'El punto de giro. Vive dentro de ciclos.',
    'La Justicia':            'Equilibrio y verdad. Juez justo.',
    'El Colgado':     'Cambio de perspectiva. Lo visible al revés.',
    'La Muerte':              'Gran transición y renovación. Símbolo de soltar y avanzar hacia un yo nuevo.',
    'La Templanza':         'Armonía e integración. Mezcla dos polos.',
    'El Diablo':          'Deseo y sombra. Encuentro con fuerza primordial.',
    'La Torre':          'Cambio repentino e insight. Marcos rígidos pueden aflojarse y abrir perspectiva.',
    'La Estrella':           'Esperanza y guía. Irradia luz en silencio.',
    'La Luna':           'Ilusión e intuición. Viaja el reino de los sueños.',
    'El Sol':            'Alegría y manifestación. La luz misma.',
    'El Juicio':          'Despertar y llamado. Convocatoria a una nueva etapa.',
    'El Mundo':          'Culminación e integración. Un alma que cumple un viaje.',
    'El Loco':           'Comienzo inocente. Libertad sin ataduras.'
  },

  TAROT_BY_NUM: [
    'El Loco','El Mago','La Sacerdotisa','La Emperatriz','El Emperador','El Hierofante','Los Enamorados','El Carro','La Fuerza','El Ermitaño',
    'La Rueda de la Fortuna','La Justicia','El Colgado','La Muerte','La Templanza','El Diablo','La Torre','La Estrella','La Luna','El Sol','El Juicio','El Mundo'
  ],

  CELTIC_TREES: [
    { name: 'Abedul',         desc: 'Comienzos, purificación, resiliencia.' },
    { name: 'Serbal',         desc: 'Inspiración y protección.' },
    { name: 'Fresno',           desc: 'Sensibilidad, sueño, conexión.' },
    { name: 'Aliso',         desc: 'Coraje y espíritu pionero.' },
    { name: 'Sauce',        desc: 'Intuición como la luna.' },
    { name: 'Espino',      desc: 'Guarda una llama interior.' },
    { name: 'Roble',           desc: 'Fuerza y liderazgo.' },
    { name: 'Acebo',         desc: 'Dignidad y protección.' },
    { name: 'Avellano',         desc: 'Conocimiento e insight.' },
    { name: 'Vid',          desc: 'Sensibilidad y sentido del equilibrio.' },
    { name: 'Hiedra',           desc: 'Paciencia y renovación.' },
    { name: 'Junco',          desc: 'Misterio y poder oculto.' },
    { name: 'Saúco',         desc: 'Culminación y sabiduría.' }
  ],

  BIRTHSTONES: {
    1:  { name: 'Granate',     meaning: 'Amistad · verdad · devoción' },
    2:  { name: 'Amatista',   meaning: 'Sinceridad · paz mental' },
    3:  { name: 'Aguamarina', meaning: 'Coraje · claridad · felicidad' },
    4:  { name: 'Diamante',    meaning: 'Pureza · amor duradero' },
    5:  { name: 'Esmeralda',    meaning: 'Buena fortuna · felicidad' },
    6:  { name: 'Perla',      meaning: 'Salud · longevidad · abundancia' },
    7:  { name: 'Rubí',       meaning: 'Pasión · victoria · dignidad' },
    8:  { name: 'Peridoto',    meaning: 'Felicidad conyugal · paz mental' },
    9:  { name: 'Zafiro',   meaning: 'Sinceridad · compasión' },
    10: { name: 'Ópalo',       meaning: 'Esperanza · felicidad · inocencia' },
    11: { name: 'Topacio',      meaning: 'Amistad · esperanza' },
    12: { name: 'Turquesa',  meaning: 'Éxito · prosperidad' }
  },

  BIRTH_FLOWERS: {
    1: 'Clavel',   2: 'Violeta',        3: 'Narciso',
    4: 'Guisante de olor',   5: 'Lirio del valle', 6: 'Rosa',
    7: 'Lirio',        8: 'Gladiolo',   9: 'Genciana',
    10: 'Cosmos',     11: 'Crisantemo', 12: 'Flor de Pascua'
  },

  MOON_PHASE_NAMES: [
    'Luna nueva',
    'Luna creciente',
    'Cuarto creciente',
    'Gibosa creciente',
    'Luna llena',
    'Gibosa menguante',
    'Cuarto menguante',
    'Luna menguante'
  ],

  LIFE_MILESTONES: [
    { name: 'Primer ciclo completo',         desc: 'Tiempo en que los cimientos toman forma.' },
    { name: 'Primer retorno de Júpiter',         desc: 'La primera expansión del mundo.' },
    { name: 'Umbral del nodo lunar',         desc: 'La dirección del alma empieza a moverse.' },
    { name: 'Segundo retorno de Júpiter',        desc: 'La primera expansión hacia la independencia.' },
    { name: 'Primer retorno de Saturno',          desc: 'Un punto de giro para reconstruir la vida.' },
    { name: 'Tercer retorno de Júpiter',         desc: 'Estabilización del rol social.' },
    { name: 'Oposición de Urano',            desc: 'Un despertar de mediana edad.' },
    { name: 'Cuarto retorno de Júpiter',        desc: 'Temporada de maestría y expresión.' },
    { name: 'Segundo retorno de Saturno',         desc: 'Cosecha y reconstrucción tras largos años.' },
    { name: 'Sexagésimo cumpleaños',            desc: 'Un nuevo comienzo tras un ciclo completo.' },
    { name: 'Sexto retorno de Júpiter',         desc: 'El umbral de la ancianía.' },
    { name: 'Retorno de Urano',                desc: 'Contemplar una vida de revolución.' }
  ],

  LUCKY_COMPASS: {
    fire: {
      colors: ['Oro', 'Coral', 'Ámbar'],
      days: ['Martes', 'Domingo'],
      hint: 'Tonos cálidos y días de avance pueden ayudarte a sentirte más alineado — no como reglas, sino como anclas suaves.'
    },
    earth: {
      colors: ['Oliva', 'Arena', 'Marrón'],
      days: ['Sábado', 'Miércoles'],
      hint: 'Colores arraigados y días de ritmo firme pueden apoyar paciencia y construcción — una brújula, no un mandato.'
    },
    air: {
      colors: ['Azul cielo', 'Lila', 'Plata'],
      days: ['Miércoles', 'Viernes'],
      hint: 'Colores ligeros y días de conversación pueden ayudar a que las ideas circulen con más libertad.'
    },
    water: {
      colors: ['Azul profundo', 'Verde mar', 'Perla'],
      days: ['Lunes', 'Jueves'],
      hint: 'Colores fluidos y días reflexivos pueden invitar intuición y claridad emocional.'
    },
    wood: {
      colors: ['Verde bosque', 'Verde azulado', 'Salvia'],
      days: ['Jueves', 'Martes'],
      hint: 'Verdes en crecimiento y días para sembrar — literal o metafórico — pueden sentirse de apoyo.'
    },
    metal: {
      colors: ['Blanco', 'Plata', 'Platino'],
      days: ['Viernes', 'Domingo'],
      hint: 'Líneas limpias y colores nítidos pueden ayudarte a refinar y soltar lo que ya no sirve.'
    }
  },

  PRODUCT_PHILOSOPHY: {
    freeBadge: 'Todo es gratis',
    freeHeadline: 'Diecinueve historias, abiertas para todos',
    freeLead: 'Solo con fecha de nacimiento y nombre obtienes resultados cruzados, resumen, lecturas de cartas, amor y compatibilidad — todo sin costo.',
    premiumHeadline: 'Más profundo, sigue siendo gratis',
    premiumLead: 'Los capítulos extendidos en cada modal de carta están desbloqueados para todos.'
  },

  PREMIUM_COMING_SOON: {
    badge: 'Próximamente',
    headline: 'Premium llegará pronto',
    lead: 'Lecturas más profundas, líneas de tiempo largas, compatibilidad — lo estamos preparando. Mientras tanto, disfruta los diecinueve sistemas gratis.',
    teasers: [
      'Lecturas maestras de los 19 sistemas',
      'Línea de tiempo de fortuna a 10 años',
      'Compatibilidad, rituales lunares y más'
    ],
    modalHeadline: 'Premium llegará pronto',
    modalLead: 'Las capas más profundas estarán disponibles tras el lanzamiento. Por ahora, disfruta las secciones gratis «Leer más profundo».',
    paymentCta: 'Suscribirse a Premium',
    paymentNote: 'Pago seguro vía Stripe. Cancela cuando quieras.'
  },

  FREE_INCLUDES: [
    {
      title: 'Los diecinueve sistemas',
      desc: 'Numerología, astrología occidental, Ki de nueve estrellas, animal fortune… una entrada, panorama completo y resumen narrativo.'
    },
    {
      title: 'Lecturas carta por carta',
      desc: 'Toca cualquier sistema para lecturas gratis — incluidos capítulos profundos extendidos en cada modal.'
    },
    {
      title: 'Luna de esta noche · biorritmo',
      desc: 'Consulta la ola de hoy y el ritmo desde tu fecha de nacimiento.'
    },
    {
      title: 'Tarjetas para compartir',
      desc: 'Guarda resultados como imagen o compártelos como texto.'
    }
  ],

  ALL_FREE_HIGHLIGHTS: [
    {
      title: 'Lecturas maestras profundas',
      desc: 'Cada carta abre capítulos extendidos — líneas de tiempo, sombras e indicaciones cruzadas. Sin muro de pago.'
    },
    {
      title: 'Arquetipo del amor',
      desc: 'Tu tipo amoroso, fase y pequeño paso de esta noche — incluido gratis.'
    },
    {
      title: 'Lectura de compatibilidad',
      desc: 'Radar de cinco ejes para ti y otra persona — pareja, amigo o quien sea.'
    }
  ],

  PREMIUM_PRICING: {
    monthly: { label: 'Mensual', price: '¥980', per: '/ mes' },
    yearly: { label: 'Anual', price: '¥9,800', per: '/ año', badge: '2 meses gratis' },
    note: 'Capa opcional sobre funciones gratis. Cancela cuando quieras (cuando se implemente el cobro).'
  },

  PREMIUM_FEATURES: [
    {
      category: 'Lectura profunda',
      title: 'Interpretaciones maestras de los 19 sistemas',
      desc: 'Más allá de lecturas gratis — capítulos más profundos en cada carta. Luz y sombra, pistas en horizontes largos.'
    },
    {
      category: 'Línea de tiempo',
      title: 'Línea de fortuna a 10 años',
      desc: 'Años personales, hitos y tránsitos entrelazados — vista de la próxima década.'
    },
    {
      category: 'Luna y ciclos',
      title: 'Calendario personal de lunas nuevas y llenas',
      desc: 'Doce meses de rituales y fechas de atención, alineados con tu fase lunar de nacimiento.'
    },
    {
      category: 'Compatibilidad',
      title: 'Lectura de compatibilidad',
      desc: 'Ingresa pareja, amigo o colega. Ve cómo resuenan juntas vuestras diecinueve historias.'
    },
    {
      category: 'Diseño de vida',
      title: 'Aptitud y elementos de suerte',
      desc: 'Estilos de trabajo que pueden encajarte, colores, números y días de suerte — brújula, no prescripción.'
    },
    {
      category: 'Personal',
      title: 'Narrativa unificada con IA',
      desc: 'Entrelaza diecinueve resultados en una historia. Lectura larga hecha para ti (próximamente).'
    },
    {
      category: 'Registros',
      title: 'Perfiles guardados',
      desc: 'Guarda perfiles de familia y parejas. Relee y sigue el cambio con el tiempo.'
    },
    {
      category: 'Compartir',
      title: 'Tarjetas Premium para compartir',
      desc: 'Alta resolución, varios diseños. Tarjetas de compatibilidad y ediciones «tema del año».'
    },
    {
      category: 'Notificaciones',
      title: 'Recordatorios de hitos y luna',
      desc: 'Avisos discretos por cambios de año personal, lunas llenas y más (próximamente).'
    }
  ],

  PREMIUM_PITCH_LINES: [
    'Las lecturas gratis ya son un punto de partida rico',
    'Lo que sigue es opcional — para quien quiera profundizar',
    'Nada aquí es definitivo; tú sigues eligiendo qué significa'
  ],

  PREMIUM_ROADMAP: [
    { phase: 'En Premium', items: ['Interpretaciones profundas de cartas (demo disponible)'] },
    { phase: 'En desarrollo', items: ['Línea de tiempo a 10 años', 'Compatibilidad', 'Calendario lunar'] },
    { phase: 'Concepto', items: ['Narrativa unificada con IA', 'Perfiles guardados'] }
  ],

  COMPAT_AXIS_LABELS: {
    lifePath: 'Camino de vida',
    sun: 'Signo solar',
    zodiac: 'Zodiaco chino',
    gogyou: 'Cinco elementos',
    kyusei: 'Estrella Ki'
  },

  COMPAT_BANDS: [
    { label: 'Una resonancia destinada' },
    { label: 'Un vínculo profundo' },
    { label: 'Una conexión estable' },
    { label: 'Una relación de aprendizaje' },
    { label: 'Un lazo que crece con el tiempo' },
    { label: 'Un contraste como espejo' }
  ],

  COMPAT_AXIS_HINTS: {
    lifePath: {
      high: 'Los caminos de vida se hacen eco — ritmo y dirección compartidos.',
      mid: 'Tempos distintos, pero hay espacio para alinearse con el tiempo.',
      low: 'Caminos contrastantes. La curiosidad por las diferencias ayuda.'
    },
    sun: {
      high: 'Los signos solares comparten elemento o armonía — facilidad natural.',
      mid: 'Estilos distintos que pueden complementarse.',
      low: 'Energías opuestas. El equilibrio viene del respeto.'
    },
    zodiac: {
      high: 'Los signos del zodiaco chino se apoyan mutuamente.',
      mid: 'Emparejamiento neutro — el cuidado diario importa más.',
      low: 'Signos de cautela tradicional — paciencia y humor ayudan.'
    },
    gogyou: {
      high: 'Los Cinco Elementos se nutren mutuamente.',
      mid: 'Ciclo neutro — hábitos firmes construyen confianza.',
      low: 'Ciclo de control — dad espacio mutuo.'
    },
    kyusei: {
      high: 'Las estrellas Ki circulan bien juntas.',
      mid: 'Ajuste moderado — las rutinas traen estabilidad.',
      low: 'Energías que se cruzan — honrad el ritmo del otro.'
    }
  }
};
