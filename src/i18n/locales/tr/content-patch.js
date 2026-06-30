/** Turkish content patch — merged onto en/content.js */
export const patch = {
  LIFE_PATH_MEANINGS: {
    1:  { label: 'Lider · Öncü',                    desc: 'Bağımsızlık ve öncülük ruhu taşıyan bir ruh. Yeni yollar açmak için burada.' },
    2:  { label: 'Uyumlayıcı · İşbirlikçi',         desc: 'İnce bir duyarlılıkla insanları birbirine bağlar. Kabul ve sezgi insanı.' },
    3:  { label: 'İfade Eden · Sanatçı',              desc: 'Yaratıcılığı ve neşeyi dünyaya yayar. Söz ve rengin ustası.' },
    4:  { label: 'Kurucu · Zanaatkâr',                desc: 'Sağlam temeller atan bir ruh. Düzen ve sabırla biçim verir.' },
    5:  { label: 'Özgür Ruh · Maceracı',              desc: 'Değişim ve deneyimle beslenir. Rüzgâr gibi kısıtlamayı sevmez.' },
    6:  { label: 'Sevgi İnsanı · Arabulucu',          desc: 'Aile ve topluluğa derin sevgi. Güzelliği ve sorumluluğu taşır.' },
    7:  { label: 'Arayıcı · Mistik',                  desc: 'İçe derinlemesine dalan bir ruh. Gerçeği arayan sessiz bir gözlemci.' },
    8:  { label: 'Başaran · Yönetici',                desc: 'Hem maddi hem ruhsal alemlerde güç. Bolluğu biçime kavuşturur.' },
    9:  { label: 'Hümanist · Tamamlayıcı',            desc: 'Geniş sevgi ve bırakmayı bilen bir ruh. Bir yolculuğun tamamlanışı.' },
    11: { label: 'Usta 11 — Aydınlatıcı',             desc: 'Yükselmiş sezgiyle ışığı taşıyan bir ruh. Gerilim ve maneviyat arasında yaşar.' },
    22: { label: 'Usta 22 — Yaratıcı',                desc: 'Hayalleri dünyada yapılara dönüştürme gücü. En pratik mistik.' },
    33: { label: 'Usta 33 — Sevgi Öğretmeni',         desc: 'Koşulsuz sevgiyi somutlaştıran nadir bir ruh.' }
  },

  PERSONAL_YEAR_MEANINGS: {
    1: 'Tohum ekme yılı. Yeni bir döngünün başlangıcı.',
    2: 'Besleme yılı. İşbirliği ve sabır anahtardır.',
    3: 'İfade yılı. Neşe ve sosyal bağların tadını çıkarın.',
    4: 'İnşa yılı. Temellerinizi istikrarlı biçimde güçlendirin.',
    5: 'Değişim yılı. Hareket ve özgürlük aranır.',
    6: 'Sorumluluk yılı. Aile ve sevgi merkezde.',
    7: 'İçe dönüş yılı. Durgunluk ve öğrenme zamanı.',
    8: 'Hasat yılı. Maddi başarı biçim kazanır.',
    9: 'Tamamlanma yılı. Bırakma ve değerlendirme mevsimi.'
  },

  EXPRESSION_MEANINGS: {
    1: 'İsim enerjisi: bireysellik ve öncülük ruhu.',
    2: 'İsim enerjisi: işbirliği ve arabuluculuk titreşimi.',
    3: 'İsim enerjisi: ifade ve neşe.',
    4: 'İsim enerjisi: sağlamlık ve sabır.',
    5: 'İsim enerjisi: değişim ve macera.',
    6: 'İsim enerjisi: sevgi ve sorumluluk.',
    7: 'İsim enerjisi: gizem ve içe dönüş.',
    8: 'İsim enerjisi: güç ve somutlaştırma.',
    9: 'İsim enerjisi: geniş sevgi ve tamamlanma.'
  },

  SUN_SIGNS: [
    { name: 'Oğlak',      element: 'Toprak', desc: 'Sağlam, sorumlu, başarıya yönelik.' },
    { name: 'Kova',       element: 'Hava',   desc: 'Yenilik, bağımsızlık, insan sevgisi.' },
    { name: 'Balık',      element: 'Su',     desc: 'Hassasiyet, hayaller, empati okyanusu.' },
    { name: 'Koç',        element: 'Ateş',   desc: 'Eylem, öncülük ruhu, saf tutku.' },
    { name: 'Boğa',       element: 'Toprak', desc: 'İstikrar, duyusallık, duyuların zevki.' },
    { name: 'İkizler',    element: 'Hava',   desc: 'Merak, zeka, iletişim.' },
    { name: 'Yengeç',     element: 'Su',     desc: 'Duygu, yuva, koruyucu sevgi.' },
    { name: 'Aslan',      element: 'Ateş',   desc: 'Kendini ifade, yaratıcılık, asil duruş.' },
    { name: 'Başak',      element: 'Toprak', desc: 'Analiz, hizmet, incelik sevgisi.' },
    { name: 'Terazi',     element: 'Hava',   desc: 'Uyum, estetik duyu, ilişkiler.' },
    { name: 'Akrep',      element: 'Su',     desc: 'Derinlik, dönüşüm, mutlak tutku.' },
    { name: 'Yay',        element: 'Ateş',   desc: 'Keşif, özgürlük, felsefi vizyon.' }
  ],

  MOON_TRAITS: [
    { name: 'Yeni Ay evresinde doğmuş',        desc: 'İçinde filizlenen bir şeyi taşıyarak doğan ruh. Sezgisel ve içgüdüsel.' },
    { name: 'İlk Dördün evresinde doğmuş',     desc: 'Meydan okuma ve eylem dalgasında doğan ruh. İleriye adım atma gücü güçlü.' },
    { name: 'Dolunay evresinde doğmuş',        desc: 'Duygu ve bilincin birbirine çektiği ruh. İfadeci ve manyetik.' },
    { name: 'Son Dördün evresinde doğmuş',     desc: 'Bırakma ve içe dönüş dalgasında doğan ruh. Derinlik ve bilgelik taşır.' }
  ],

  CHINESE_ZODIAC: [
    { name: 'Zi (Sıçan)',    char: 'Sıçan',    desc: 'Çevik ve zeki. Fırsatları nadiren kaçırır.' },
    { name: 'Chou (Öküz)',   char: 'Öküz',     desc: 'Sabırlı ve sağlam. Her adımı emin biçimde atar.' },
    { name: 'Yin (Kaplan)',  char: 'Kaplan',   desc: 'Cesur ve tutkulu. Rüzgâr gibi hareket eder.' },
    { name: 'Mao (Tavşan)',  char: 'Tavşan',   desc: 'Zarif ve narin. Uyumu onurlandırır.' },
    { name: 'Chen (Ejderha)', char: 'Ejderha', desc: 'İdealizm ve asalet. Büyük ölçekli bir ruh.' },
    { name: 'Si (Yılan)',    char: 'Yılan',    desc: 'Sezgi ve gizem. Derin ve sessizce görür.' },
    { name: 'Wu (At)',       char: 'At',       desc: 'Özgürlük ve çeviklik. Tutkuyu serbest bırakır.' },
    { name: 'Wei (Keçi)',    char: 'Keçi',     desc: 'Yumuşaklık ve sanatsallık. Sıcak bir empati insanı.' },
    { name: 'Shen (Maymun)', char: 'Maymun',   desc: 'Zeka ve espri. Merakın ustası.' },
    { name: 'You (Horoz)',   char: 'Horoz',    desc: 'Gururlu ve titiz. Sesi olan bir varlık.' },
    { name: 'Xu (Köpek)',    char: 'Köpek',    desc: 'Sadakat ve adalet. Güvenin bekçisi.' },
    { name: 'Hai (Domuz)',   char: 'Domuz',    desc: 'Açık sözlü ve cesur. Dümdüz ilerler.' }
  ],

  KYUSEI_STARS: [
    null,
    { name: 'Bir Beyaz Su Yıldızı',   element: 'Su',     desc: 'Esnek ve içe dönük. Akışı takip eder ve derin kök salar.' },
    { name: 'İki Siyah Toprak Yıldızı', element: 'Toprak', desc: 'Adanmışlık ve çalışkanlık. Toprak gibi besler.' },
    { name: 'Üç Yeşil Ağaç Yıldızı', element: 'Ağaç',   desc: 'Yeni filizlerin gücü. Ulaşım ve eylemin yıldızı.' },
    { name: 'Dört Yeşil Ağaç Yıldızı', element: 'Ağaç', desc: 'Rüzgâr kadar yumuşak. Bağlantılar ve ilişkiler getirir.' },
    { name: 'Beş Sarı Toprak Yıldızı', element: 'Toprak', desc: 'Merkez yıldızı. Güçlü manyetik çekimle insanları çeker.' },
    { name: 'Altı Beyaz Metal Yıldızı', element: 'Metal', desc: 'Gök ve otorite. Gururlu, mükemmelliğe yönelir.' },
    { name: 'Yedi Kırmızı Metal Yıldızı', element: 'Metal', desc: 'Neşe ve sosyallik. Her toplantıyı aydınlatır.' },
    { name: 'Sekiz Beyaz Toprak Yıldızı', element: 'Toprak', desc: 'Dağ yıldızı. Değişim, miras, sarsılmaz irade.' },
    { name: 'Dokuz Mor Ateş Yıldızı', element: 'Ateş',   desc: 'Işık ve estetik duyu. Sezgisel olarak parıldar.' }
  ],

  GOGYOU_DESCS: {
    '木': 'Büyüme gücü. Taze yeşilin sabahı gibi ileriye dönük.',
    '火': 'Yanan tutku. Çevreyi ışık ve sıcaklıkla aydınlatır.',
    '土': 'Kabul etme gücü. Merkezde sağlamca oturur.',
    '金': 'Arındırma gücü. Soğuk, güzel, keskin zeka.',
    '水': 'Akış gücü. Her şeyin içinden derin ve esnek hareket eder.'
  },

  ANIMAL_NAMES: [
    'Siyah Panter', 'Pegasus', 'Maymun', 'Koala Ayı', 'Kaplan', 'Tanuki',
    'Koala', 'Fil', 'Çita', 'Aslan', 'Kurt', 'Koyun'
  ],

  ANIMAL_DESC: {
    'Siyah Panter': 'Güzellik ve yeniliğe keskin bir göz. Serin, zahmetsiz karizma.',
    'Pegasus':       'Özgür ruhlu bir dahi. Fikirler kanatlanır.',
    'Maymun':        'Hizmet odaklı ve meraklı. Ortamı usta gibi okur.',
    'Koala Ayı':     'Düşünceli ve güçlü tercihleri olan. İçten bir araştırmacı.',
    'Kaplan':        'Cömert bir duruş. Acele etmeyen bir kral.',
    'Tanuki':        'Sıcak ve yaklaşılabilir. Yumuşak bir bilgelik bekçisi.',
    'Koala':         'Yatıştırıcı ve gözlemci. Kendi ritminde hareket eder.',
    'Fil':           'Çalışkan ve güçlü. Süreklilikle kuvvet.',
    'Çita':          'Ani hız ve solo eylem. Dümdüz koşar.',
    'Aslan':         'Gurur ve onur. Spot ışığını çeken bir yıldızın altında doğmuş.',
    'Kurt':          'Yalnız derin düşünür. Kendi dünyasını taşır.',
    'Koyun':         'Sıcak kalpli ve işbirlikçi. Başkalarıyla hareket edince parlar.'
  },

  MAYA_SEALS: [
    'Kırmızı Ejderha', 'Beyaz Rüzgâr', 'Mavi Gece', 'Sarı Tohum', 'Kırmızı Yılan',
    'Beyaz Dünya Köprüsü', 'Mavi El', 'Sarı Yıldız', 'Kırmızı Ay', 'Beyaz Köpek',
    'Mavi Maymun', 'Sarı İnsan', 'Kırmızı Gökyürüyücü', 'Beyaz Büyücü', 'Mavi Kartal',
    'Sarı Savaşçı', 'Kırmızı Toprak', 'Beyaz Ayna', 'Mavi Fırtına', 'Sarı Güneş'
  ],

  MAYA_TONES: [
    'Manyetik ', 'Ay ', 'Elektrik ', 'Kendi Var Olan ', 'Aşırı Ton ', 'Ritmik ',
    'Rezonans ', 'Galaktik ', 'Güneş ', 'Gezegen ', 'Spektral ', 'Kristal ', 'Kozmik '
  ],

  TAROT_MEANINGS: {
    'Büyücü':              'İrade ve yaratım. Olasılığı biçime dönüştürür.',
    'Yüksek Rahibe':       'Sezgi ve gizem. Konuşmadan çok şey anlatır.',
    'İmparatoriçe':        'Bolluk ve sevgi. Besleyici gücün simgesi.',
    'İmparator':           'Yapı ve otorite. İstikrar kuran irade.',
    'Aziz':                'Gelenek ve öğreti. Dünyalar arasında köprü kuran.',
    'Aşıklar':             'Seçim ve birlik. Kalbin yönünü belirleme yolculuğu.',
    'Savaş Arabası':       'İleri hareket ve irade. Zorluğu yöneterek ilerler.',
    'Güç':                 'Sessiz cesaret. Yumuşaklıkla gücü gösterir.',
    'Ermiş':               'İç ışık. Yalnızlıkta gerçeği arar.',
    'Kader Çarkı':         'Dönüm noktası. Döngülerin içinde yaşar.',
    'Adalet':              'Denge ve gerçek. Adil bir yargıç.',
    'Asılan Adam':         'Bakış açısı değişimi. Baş aşağıyken görünenler.',
    'Ölüm':                'Büyük geçiş ve yenilenme. Bırakma ve yeni benliğe yönelme simgesi.',
    'Denge':               'Uyum ve bütünleşme. İki kutbu bir araya getirir.',
    'Şeytan':              'Arzu ve gölge. İlkel güçle yüzleşme.',
    'Kule':                'Ani değişim ve içgörü. Katı çerçeveler gevşeyip yeni perspektif açabilir.',
    'Yıldız':              'Umut ve rehberlik. Sessizce ışık saçar.',
    'Ay':                  'İllüzyon ve sezgi. Rüyalar diyarında yolculuk.',
    'Güneş':               'Neşe ve somutlaşma. Işığın kendisi.',
    'Mahkeme':             'Uyanış ve çağrı. Yeni bir aşamaya davet.',
    'Dünya':               'Tamamlanma ve bütünleşme. Bir yolculuğu tamamlayan ruh.',
    'Deli':                'Masum bir başlangıç. Hiçbir şeye bağlı olmayan özgürlük.'
  },

  TAROT_BY_NUM: [
    'Deli', 'Büyücü', 'Yüksek Rahibe', 'İmparatoriçe', 'İmparator', 'Aziz', 'Aşıklar', 'Savaş Arabası', 'Güç', 'Ermiş',
    'Kader Çarkı', 'Adalet', 'Asılan Adam', 'Ölüm', 'Denge', 'Şeytan', 'Kule', 'Yıldız', 'Ay', 'Güneş', 'Mahkeme', 'Dünya'
  ],

  CELTIC_TREES: [
    { name: 'Huş',         desc: 'Başlangıçlar, arınma, dayanıklılık.' },
    { name: 'Kuşburnu',    desc: 'İlham ve koruma.' },
    { name: 'Dişbudak',    desc: 'Hassasiyet, rüya, bağlantı.' },
    { name: 'Kızılağaç',   desc: 'Cesaret ve öncülük ruhu.' },
    { name: 'Söğüt',       desc: 'Ay gibi sezgi.' },
    { name: 'Alıç',        desc: 'İçinde bir alev taşır.' },
    { name: 'Meşe',        desc: 'Güç ve liderlik.' },
    { name: 'Çobanpüskülü', desc: 'Onur ve koruma.' },
    { name: 'Fındık',      desc: 'Bilgi ve içgörü.' },
    { name: 'Asma',        desc: 'Hassasiyet ve denge duygusu.' },
    { name: 'Sarmaşık',    desc: 'Sabır ve yenilenme.' },
    { name: 'Kamış',       desc: 'Gizem ve gizli güç.' },
    { name: 'Mürver',      desc: 'Tamamlanma ve bilgelik.' }
  ],

  BIRTHSTONES: {
    1:  { name: 'Lal',          meaning: 'Dostluk · gerçek · adanmışlık' },
    2:  { name: 'Ametist',      meaning: 'Samimiyet · iç huzuru' },
    3:  { name: 'Akuamarin',    meaning: 'Cesaret · berraklık · mutluluk' },
    4:  { name: 'Elmas',        meaning: 'Saflık · kalıcı sevgi' },
    5:  { name: 'Zümrüt',       meaning: 'İyi şans · mutluluk' },
    6:  { name: 'İnci',         meaning: 'Sağlık · uzun ömür · bolluk' },
    7:  { name: 'Yakut',        meaning: 'Tutku · zafer · onur' },
    8:  { name: 'Peridot',      meaning: 'Evlilik mutluluğu · iç huzuru' },
    9:  { name: 'Safir',        meaning: 'Samimiyet · şefkat' },
    10: { name: 'Opal',         meaning: 'Umut · mutluluk · masumiyet' },
    11: { name: 'Topaz',        meaning: 'Dostluk · umut' },
    12: { name: 'Turkuaz',      meaning: 'Başarı · refah' }
  },

  BIRTH_FLOWERS: {
    1: 'Karanfil', 2: 'Menekşe', 3: 'Nergis',
    4: 'Sümbül', 5: 'Müge', 6: 'Gül',
    7: 'Zambak', 8: 'Glayöl', 9: 'Gentiyan',
    10: 'Kozmos', 11: 'Krizantem', 12: 'Atatürk Çiçeği'
  },

  MOON_PHASE_NAMES: [
    'Yeni Ay',
    'Hilal',
    'İlk Dördün',
    'Şişkin Ay',
    'Dolunay',
    'Azalan Şişkin',
    'Son Dördün',
    'Azalan Hilal'
  ],

  LIFE_MILESTONES: [
    { name: 'İlk döngü tamamlandı',         desc: 'Temellerin şekillendiği bir zaman.' },
    { name: 'İlk Jüpiter dönüşü',           desc: 'Dünya görüşünün ilk genişlemesi.' },
    { name: 'Ay düğümü eşiği',              desc: 'Ruhun yönü hareketlenmeye başlar.' },
    { name: 'İkinci Jüpiter dönüşü',        desc: 'Bağımsızlığa ilk genişleme.' },
    { name: 'İlk Satürn dönüşü',            desc: 'Hayatı yeniden kurma dönüm noktası.' },
    { name: 'Üçüncü Jüpiter dönüşü',         desc: 'Sosyal rolün istikrar kazanması.' },
    { name: 'Uranüs karşıtlığı',            desc: 'Orta yaş uyanışı.' },
    { name: 'Dördüncü Jüpiter dönüşü',      desc: 'Ustalık ve ifade mevsimi.' },
    { name: 'İkinci Satürn dönüşü',         desc: 'Uzun yılların ardından hasat ve yeniden inşa.' },
    { name: 'Altmışıncı yaş',               desc: 'Tam bir döngünün ardından yeni başlangıç.' },
    { name: 'Altıncı Jüpiter dönüşü',       desc: 'Yaşlılık eşiği.' },
    { name: 'Uranüs dönüşü',                desc: 'Bir ömürlük devrimin özeti.' }
  ],

  LUCKY_COMPASS: {
    fire: {
      colors: ['Altın', 'Mercan', 'Kehribar'],
      days: ['Salı', 'Pazar'],
      hint: 'Sıcak tonlar ve ileriye giden günler daha uyumlu hissettirebilir — kural değil, nazik bir pusula olarak.'
    },
    earth: {
      colors: ['Zeytin', 'Kum', 'Kahverengi'],
      days: ['Cumartesi', 'Çarşamba'],
      hint: 'Topraklanmış renkler ve istikrarlı tempolu günler sabır ve inşayı destekleyebilir — emir değil, pusula.'
    },
    air: {
      colors: ['Gök mavisi', 'Leylak', 'Gümüş'],
      days: ['Çarşamba', 'Cuma'],
      hint: 'Hafif, havadar renkler ve sohbet günleri fikirlerin daha özgürce dolaşmasına yardımcı olabilir.'
    },
    water: {
      colors: ['Koyu mavi', 'Deniz yeşili', 'İnci'],
      days: ['Pazartesi', 'Perşembe'],
      hint: 'Akışkan renkler ve içe dönük günler sezgi ve duygusal berraklığı davet edebilir.'
    },
    wood: {
      colors: ['Orman yeşili', 'Teal', 'Adaçayı'],
      days: ['Perşembe', 'Salı'],
      hint: 'Büyüyen yeşiller ve tohum ekmek için günler — gerçek ya da mecazi — destekleyici hissedilebilir.'
    },
    metal: {
      colors: ['Beyaz', 'Gümüş', 'Platin'],
      days: ['Cuma', 'Pazar'],
      hint: 'Temiz çizgiler ve net renkler artık hizmet etmeyeni bırakmanıza ve arındırmanıza yardımcı olabilir.'
    }
  },

  PRODUCT_PHILOSOPHY: {
    freeBadge: 'Her şey ücretsiz',
    freeHeadline: 'On dokuz hikâye, herkese açık',
    freeLead: 'Sadece doğum tarihi ve adınızla çapraz sistem sonuçları, özet, kart yorumları, aşk ve uyum — hepsi ücretsiz.',
    premiumHeadline: 'Daha derine, yine ücretsiz',
    premiumLead: 'Her kart modalındaki genişletilmiş bölümler herkes için açık.'
  },

  PREMIUM_COMING_SOON: {
    badge: 'Yakında',
    headline: 'Premium yakında geliyor',
    lead: 'Daha derin yorumlar, uzun zaman çizgileri, uyum — şimdi hazırlıyoruz. O zamana kadar on dokuz sistemin tamamının tadını çıkarın.',
    teasers: [
      '19 sistemin tamamı için usta yorumları',
      '10 yıllık şans zaman çizelgesi',
      'Uyum ve ay ritüelleri ve daha fazlası'
    ],
    modalHeadline: 'Premium yakında geliyor',
    modalLead: 'Derin katmanlar lansman sonrası kullanılabilir olacak. Şimdilik ücretsiz "Daha derin oku" bölümlerinin tadını çıkarın.',
    paymentCta: 'Premium\'a abone ol',
    paymentNote: 'Stripe ile güvenli ödeme. İstediğiniz zaman iptal edin.'
  },

  FREE_INCLUDES: [
    { title: 'On dokuz sistemin tamamı', desc: 'Numeroloji, Batı astrolojisi, Dokuz Yıldız Ki, hayvan falı… tek girişle tam genel bakış ve hikâye özeti.' },
    { title: 'Kart kart yorumlar', desc: 'Herhangi bir sisteme dokunun — her modalda genişletilmiş derin bölümler dahil ücretsiz yorumlar.' },
    { title: 'Bu geceki ay · biyoritim', desc: 'Bugünün dalgasını ve doğum tarihinizden ritmi kontrol edin.' },
    { title: 'Paylaşım kartları', desc: 'Sonuçları görsel olarak kaydedin veya metin olarak paylaşın.' }
  ],

  ALL_FREE_HIGHLIGHTS: [
    { title: 'Usta derin yorumlar', desc: 'Her kart genişletilmiş bölümler açar — zaman çizgileri, gölgeler ve çapraz sistem ipuçları. Ödeme duvarı yok.' },
    { title: 'Aşk arketipi', desc: 'Aşk tipiniz, evreniz ve bu geceki küçük adımınız — ücretsiz dahil.' },
    { title: 'Uyum yorumu', desc: 'Siz ve başka biri için beş eksenli radar — partner, arkadaş veya herhangi biri.' }
  ],

  PREMIUM_PRICING: {
    monthly: { label: 'Aylık', price: '¥980', per: '/ ay' },
    yearly: { label: 'Yıllık', price: '¥9.800', per: '/ yıl', badge: '2 ay bedava' },
    note: 'Ücretsiz özelliklerin üzerine isteğe bağlı katman. İstediğiniz zaman iptal (faturalandırma uygulandığında).'
  },

  PREMIUM_FEATURES: [
    { category: 'Derin yorum', title: '19 sistemin tamamı için usta yorumları', desc: 'Ücretsiz yorumların ötesinde — her kartta daha derin bölümler. Işık ve gölge, uzun zaman ufku ipuçları.' },
    { category: 'Zaman çizelgesi', title: '10 yıllık şans zaman çizelgesi', desc: 'Kişisel yıllar, dönüm noktaları ve geçişler bir arada — önümüzdeki on yılın görünümü.' },
    { category: 'Ay ve döngüler', title: 'Yeni ve dolunay kişisel takvimi', desc: 'Doğum ay evrenizle uyumlu on iki aylık ritüeller ve dikkat günleri.' },
    { category: 'Uyum', title: 'Uyum yorumu', desc: 'Partner, arkadaş veya meslektaş girin. On dokuz hikâyenizin nasıl yankılandığını görün.' },
    { category: 'Yaşam tasarımı', title: 'Yatkınlık ve şanslı unsurlar', desc: 'Size uygun çalışma stilleri, şanslı renkler, sayılar ve günler — reçete değil, pusula.' },
    { category: 'Kişisel', title: 'Yapay zekâ birleşik anlatı', desc: 'On dokuz sonucu tek bir hikâyede örer. Size özel uzun yorum (yakında).' },
    { category: 'Kayıtlar', title: 'Kayıtlı profiller', desc: 'Aile ve partner profillerini saklayın. Zaman içindeki değişimi takip edin.' },
    { category: 'Paylaş', title: 'Premium paylaşım kartları', desc: 'Yüksek çözünürlük, çoklu tasarım. Uyum kartları ve "yılın teması" baskıları.' },
    { category: 'Bildirimler', title: 'Dönüm noktası ve ay hatırlatıcıları', desc: 'Kişisel yıl geçişleri, dolunaylar ve daha fazlası için sessiz uyarılar (yakında).' }
  ],

  PREMIUM_PITCH_LINES: [
    'Ücretsiz yorumlar zaten zengin bir başlangıç noktası',
    'Bundan sonrası isteğe bağlı — daha derine inmek isteyenler için',
    'Burada hiçbir şey kesin değil; anlamı yine siz seçersiniz'
  ],

  PREMIUM_ROADMAP: [
    { phase: 'Premium\'da', items: ['Derin kart yorumları (demo mevcut)'] },
    { phase: 'Geliştirmede', items: ['10 yıllık zaman çizelgesi', 'Uyum', 'Ay takvimi'] },
    { phase: 'Konsept', items: ['Yapay zekâ birleşik anlatı', 'Kayıtlı profiller'] }
  ],

  COMPAT_AXIS_LABELS: {
    lifePath: 'Yaşam Yolu',
    sun: 'Güneş burcu',
    zodiac: 'Çin burcu',
    gogyou: 'Beş Element',
    kyusei: 'Kyusei yıldızı'
  },

  COMPAT_BANDS: [
    { label: 'Kaderî bir yankı' },
    { label: 'Derin bir bağ' },
    { label: 'İstikrarlı bir bağlantı' },
    { label: 'Öğrenen bir ilişki' },
    { label: 'Zamanla büyüyen bir bağ' },
    { label: 'Ayna gibi bir karşıtlık' }
  ],

  COMPAT_AXIS_HINTS: {
    lifePath: {
      high: 'Yaşam yolları birbirini yankılar — ortak ritim ve yön.',
      mid: 'Farklı tempolar, ama zamanla uyum için alan var.',
      low: 'Zıt yollar. Farklılıklara merak yardımcı olur.'
    },
    sun: {
      high: 'Güneş burçları element veya uyum paylaşır — doğal kolaylık.',
      mid: 'Birbirini tamamlayabilecek farklı stiller.',
      low: 'Karşıt enerjiler. Denge saygıdan gelir.'
    },
    zodiac: {
      high: 'Çin burçları birbirini destekler.',
      mid: 'Nötr eşleşme — günlük özen en önemlisi.',
      low: 'Geleneksel dikkat burçları — sabır ve mizah yardımcı olur.'
    },
    gogyou: {
      high: 'Beş Element birbirini besler.',
      mid: 'Nötr döngü — istikrarlı alışkanlıklar güven inşa eder.',
      low: 'Kısıtlayıcı döngü — birbirinize alan verin.'
    },
    kyusei: {
      high: 'Kyusei yıldızları birlikte iyi döner.',
      mid: 'Orta uyum — rutinler istikrar getirir.',
      low: 'Kesişen enerjiler — birbirinizin temposuna saygı gösterin.'
    }
  }
};
