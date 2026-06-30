import { luckyBody } from './helpers.js';

/** Turkish diagnosis UI patch — merged onto ES via mergeConfig(ES, TR_PATCH) */
export const TR_PATCH = {
  header: { eyebrow: 'Kişisel kozmoloji', subtitle: 'On dokuz hikâye, aşk ve uyumluluk okumasıyla' },
  sections: {
    numerology: ['Numeroloji', ''],
    western: ['Batı astrolojisi', ''],
    eastern: ['Doğu kaderi', ''],
    characters: ['Arketipler', ''],
    sacred: ['Maya ve tarot', ''],
    nature: ['Doğanın sembolleri', ''],
    cycles: ['Bugünün dalgaları', ''],
    lifeMap: ['Yaşam haritası', '']
  },
  bio: { physical: 'Fiziksel', emotional: 'Duygusal', intellectual: 'Zihinsel', intuitive: 'Sezgisel' },
  modal: {
    deepRead: 'Daha derin oku',
    premiumBadge: 'Derin okuma (ücretsiz)',
    premiumPitch: 'Daha derin',
    premiumCta: 'Derin içeriği gör',
    close: 'Kapat'
  },
  premiumShowcase: {
    roadmapSummary: 'Özellikleri gör',
    note: 'Tüm okumalar ücretsiz — daha derin bölümler için herhangi bir karta dokun.',
    optionalEyebrow: 'Ücretsiz dahil',
    freeIncludesTitle: 'Ücretsiz dahil',
    allFreeTitle: 'Bunlar da dahil — abonelik gerekmez',
    allFreeNote: 'Bu sayfadaki tüm özellikler ücretsiz. Okumalar olasılıkları gösterir; hikâyeyi sen yazarsın.',
    ariaLabel: 'Neler dahil'
  },
  gloss: {
    stripTitle: 'Hızlı sözlük — karttaki ? simgesine dokun',
    tipAria: (term) => `«${term}» ne anlama geliyor?`
  },
  form: {
    birthMonthLabel: 'Ay', birthDayLabel: 'Gün', birthYearLabel: 'Yıl',
    birthMonthPlaceholder: 'Ay', birthDayPlaceholder: 'Gün', birthYearPlaceholder: 'Yıl'
  },
  cards: {
    lifepath: 'Yaşam yolu sayısı', personalYear: 'Kişisel yıl', expression: 'İsim sayısı',
    expressionLabel: 'Adının titreşimi', sun: 'Güneş burcu', moonTrait: 'Ay eğilimi',
    moonTraitLabel: 'Doğumdaki ay evresinden', moonTraitNote: 'Kesin ay burcu için doğum saati gerekir',
    zodiac: 'Çin zodyağı', sixty: 'Yıl sütunu (60 kök-dal)', kyusei: 'Kyusei yaşam yıldızı',
    gogyou: 'Beş element', animal: 'Hayvan arketipi', celtic: 'Kelt ağacı', maya: 'Maya KIN',
    tarotBirth: 'Doğum tarot kartı', tarotDaily: 'Bugünün kartı', birthstone: 'Doğum taşı',
    birthflower: 'Doğum çiçeği', biorhythm: 'Biyoritim', moonTonight: 'Bu geceki ay',
    lifeStagePrev: 'Yakın dönüm noktası', lifeStageNext: 'Sonraki dönüm noktası', timeline: '10 yıllık zaman çizelgesi',
    timelineLabel: 'Önündeki on yıl',
    timelineDesc: 'Kişisel yıl dalgan, zirve yıllar ve dönüm noktaları — her yıla dokunarak keşfet.',
    unified: 'Birleşik usta okuması',
    unifiedDesc: 'On dokuz sistem tek bir hikâyede — öz, aşk, iş ve şans pusulası.'
  },
  fmt: {
    yearYou: (y) => `Sen ${y} yılında`,
    bornYearZodiac: (char) => `${char} yılında doğdun`,
    sixtyDesc: (el) => `Her 60 yılda bir dönen bir mühür. ${el} doğasını taşır.`,
    kyuseiStar: (el) => `${el} yıldızı`,
    gogyouLabel: 'Doğum yılı elementi',
    animalNum: (n) => `Tip ${n}/60`,
    animalFallback: 'Kendine özgü bir karaktere sahip bir varlık.',
    celticLabel: 'On üç kutsal ağaçtan biri',
    mayaDesc: '260 günlük kutsal sayımda senin günün. Mührü özü, tonu ritmi taşır.',
    tarotMajor: (n) => `Büyük arkan ${n}`,
    tarotDailyFor: (y, m, d) => `${d}/${m}/${y} senin için`,
    monthStone: (m) => `${m}. ayın taşı`,
    monthFlower: (m) => `${m}. ayın çiçeği`,
    birthflowerDesc: 'Doğum ayının sembolü. Yanında tutmak seni köklenmiş hissettirebilir.',
    biorhythmDays: (days, tag) => `Biyoritim — doğumdan ${days.toLocaleString(tag)}. gün`,
    moonPhasePct: (pct) => `Evre %${pct} · Ay tüm yaşamı etkiler. Bu gece sana ne sorabilir?`,
    bornOn: (y, m, d) => `${d}/${m}/${y} doğumlu`,
    ageNow: (age) => `Şimdi <strong>${age}</strong> yaşındasın`,
    nextMilestone: (age, name) => `Sonraki dönüm noktası: <strong>${age} yaş — ${name}</strong>`,
    nextMilestoneSummary: (age, name, years) =>
      `Bir sonraki yaşam dönüm noktan <strong>${age} yaşında ${name}</strong>. Yaklaşık <strong>${years} yıl</strong> kaldı.`,
    elementOf: (el) => `${el} elementi`,
    ageYears: (n) => `${n} yaş`,
    summaryLabel: 'Hikâyen',
    summaryLead: (name, label) => `${name}, <strong>${label}</strong> ruhunu taşıdığın söylenir.`,
    summaryP2: (sun, sunEl, cz, ks, gy, an, ct, my, tb) =>
      `Batı astrolojisinde Güneşin <strong>${sun}</strong> burcunda (${sunEl} elementi); ` +
      `Doğu takviminde <strong>${cz}</strong>; Kyusei'de <strong>${ks}</strong>; ` +
      `özünde <strong>${gy}</strong> var. Hayvan bilgeliği seni <strong>${an}</strong> olarak adlandırır; koruyucu ağacın <strong>${ct}</strong>. ` +
      `Maya sayımında: <strong>KIN ${my.kin} · ${my.tone}${my.seal}</strong>; tarot arketipi: <strong>${tb}</strong>.`,
    summaryP3: (year, py, bioState, mt, mp, nextHtml) =>
      `${year} yılında <strong>Kişisel yıl ${py}</strong> dalgasının üzerindesin. Biyoritim ${bioState} öneriyor. ` +
      `<strong>${mt}</strong> havasını taşıyorsun; bu gece <strong>${mp}</strong> seni aydınlatıyor. ${nextHtml}`,
    summaryHint: '↓ Daha derin okuma için bir karta dokun',
    bioUp: '<strong>yükselen evre</strong> (eylem ve ifade için uygun)',
    bioDown: '<strong>içe dönüş evresi</strong> (dinlenme ve düzenleme için uygun)',
    bioBalanced: '<strong>dengeli evre</strong>',
    personalYearWave: (year) => `Kişisel yıl ${year}`,
    cardMore: 'Daha derin oku',
    cardMoreAria: '. Ayrıntıları aç',
    cardAria: (system, value) => `${system}, ${value}`,
    expressionHintAddRoman: 'Uluslararası isim sayısını görmek için Latin harfli yazım ekle.',
    expressionLatinInvalid: 'Romen alanında A–Z harfi bulunamadı — uluslararası sayı gösterilmedi.'
  },
  love: {
    eyebrow: 'Aşk arketipi', title: 'Aşk okuması', phaseLabel: 'Mevcut aşk evresi',
    sweetTitle: 'Aşktaki tatlı noktaların', careTitle: 'Nazik hatırlatmalar',
    matchesTitle: 'Uyumlu olduğun tipler', actionLabel: 'Bağlantıyı davet etmek için bu gece küçük bir adım',
    cta: 'Merak ettiğin biri var mı? Uyumluluk okumasını dene',
    footnote: 'Bu bir olasılıktır. Aşk hikâyeni sen yazarsın.',
    shareTitle: 'Aşk okumasını paylaş', shareDesc: 'Görseli kaydet ve X veya LINE\'da paylaş.',
    sharePreviewAria: 'Aşk okuması paylaşım kartı önizlemesi', shareAlt: (name) => `${name} aşk okuması kartı`,
    shareSaved: 'Görsel kaydedildi', shareCopied: 'Metin kopyalandı', shareCopyFail: 'Kopyalanamadı', shareFail: 'Paylaşılamadı'
  },
  compat: {
    eyebrow: 'Uyumluluk', title: 'Uyumluluğu birlikte oku',
    lead: 'Beş eksende uyumluluğu yansıtmak için başka bir isim ve doğum tarihi gir.',
    leadSub: 'Sevgili, arkadaş, aile veya hayran olduğun biri — herkes olabilir.',
    nameLabel: 'Onun adı', birthLabel: 'Onun doğum tarihi', namePlaceholder: 'örn. Ayşe Yılmaz',
    submit: 'Uyumluluğu göster',
    disclaimer: 'Okumalar olasılıkları gösterir. Gerçek ilişkiniz birlikte yazdığınız hikâyedir.',
    resultEyebrow: 'İki hikâye örülüyor', overallLabel: 'Genel',
    footnote: 'Sayılar yalnızca bir rehber. Bağlar birlikte geçirdiğiniz günlerle şekil değiştirir.',
    radarAria: 'Beş eksenli uyumluluk radar grafiği', lifePathValue: (n) => `Yaşam yolu ${n}`
  },
  timeline: {
    eyebrow: 'Etkileşimli okuma', title: '10 yıllık zaman çizelgesi', subtitle: 'Önündeki on yıldaki kişisel yıl ritmin',
    intro: 'Her çubuk bir kişisel yılı (1–9) temsil eder. Temasını okumak için bir yıla dokun; ✦ bir yaşam dönüm noktasını işaretler.',
    ageLabel: 'Yaş', pyLabel: 'Kişisel yıl', yearLabel: 'Yıl', milestoneLabel: 'Yaşam dönüm noktası',
    thisYear: 'Bu yıl', milestoneHere: 'Dönüm noktası yılı', ageAt: (age) => `${age} yaşına geldiğinde`,
    pyHeading: (py, theme) => `Kişisel yıl ${py} · ${theme}`,
    pyThemes: {
      1: 'Yeni başlangıçlar', 2: 'Sabır ve bağlar', 3: 'İfade ve neşe', 4: 'Temel atma',
      5: 'Değişim ve özgürlük', 6: 'Sorumluluk ve sevgi', 7: 'İçe dönüş', 8: 'Hasat', 9: 'Tamamlanma ve bırakma'
    }
  },
  master: {
    title: 'Usta okuma',
    intro: 'Daha derin bölümler herkese açık. Keşfetmek için her birine dokun.',
    expandAll: 'Tümünü aç',
    collapseAll: 'Tümünü kapat'
  },
  extended: {
    moon: {
      title: '12 aylık ay takvimi',
      intro: 'Yaklaşan yeni ve dolunaylar — basit bir ritüel için bir tarihe dokun. ✦ doğum ay evrenle rezonansı işaretler.',
      tapHint: 'Ritüel önerisi için yeni veya dolunay tarihine dokun.',
      newMoon: 'Yeni ay', fullMoon: 'Dolunay',
      resonance: 'Bu evre doğum ayınla yankılanabilir — ay döngüsünde kişisel bir dönüm noktası.',
      ritualNew: 'Kağıda bir dilek veya niyet yaz. Tohum ek — gerçek veya mecazi. 29 gün boyunca koruyabileceğin küçük bir şeye başla.',
      ritualFull: 'Minnet duyduğun üç şeyi söyle. Artık uygun olmayan bir alışkanlığı veya hikâyeyi bırak. Ay ışığı yargıç değil, ayna olsun.'
    },
    biorhythm: {
      title: '90 günlük biyoritim tahmini',
      intro: 'Doğumundan uzanan dört dalga — ritmini okumak için bir güne dokun. Noktalar sıfır geçişindeki kritik günleri işaretler.',
      legend: 'Turkuaz nokta = kritik gün · altın kenar = bugün', today: 'Bugün', critical: 'Kritik gün',
      rising: 'Yükselen dalga', falling: 'Alçalan dalga', neutral: 'Dengeye yakın',
      waves: { physical: 'Fiziksel', emotional: 'Duygusal', intellectual: 'Zihinsel', intuitive: 'Sezgisel' },
      actionHigh: 'Eylem, hareket ve dışa ifade için uygun olabilecek bir gün.',
      actionLow: 'Dinlenme, koruma ve sessiz toparlanma için uygun olabilecek bir gün.',
      actionMid: 'Geçiş günü — ne zirve ne dip. Yumuşak ilerle.'
    },
    unified: {
      eyebrow: 'Genişletilmiş okuma', title: 'Birleşik usta okuması', subtitle: 'On dokuz hikâye, tek bir dokuma',
      intro: 'Sistemler arası bir sentez — bir hüküm değil, kendi ritminde okuyacağın bir harita.',
      expandAll: 'Tümünü aç', collapseAll: 'Tümünü kapat', footnote: 'Buradaki her ip bir olasılık. Anlamı hâlâ sen seçersin.',
      chapterEssence: 'Özün', chapterYear: 'Bu yılın odağı', chapterLove: 'Aşk ve bağ',
      chapterWork: 'İş ve ifade', chapterShadow: 'Onurlandırılacak gölge', chapterLucky: 'Şans pusulası',
      essenceBody: (name, lpLabel, sun, zodiac, kyusei, lpDesc) =>
        `<p>${name} — <strong>${lpLabel}</strong> olarak yaşam yolun şu etrafında dönebilir: ${lpDesc}</p>
         <p><strong>${sun}</strong> burcundaki Güneşin, <strong>${zodiac}</strong> yılı ve <strong>${kyusei}</strong> aynı ruhun farklı notaları gibi örülebilir.</p>`,
      yearBody: (year, py, pyMeaning) =>
        `<p><strong>${year}</strong> yılında kişisel yılın <strong>${py}</strong>. ${pyMeaning}</p>
         <p>Bu yılın dalgası seni akıntıya karşı değil, akıntıyla gitmeye davet edebilir.</p>`,
      loveBody: (sunEl, animal, lp) =>
        `<p>Güneş burcundaki <strong>${sunEl}</strong> sıcaklığı ve <strong>${animal}</strong> arketipiyle bağ, nazikliği ve bağımsızlığı onurlandırdığında daha akıcı olabilir.</p>
         <p>Yaşam yolu <strong>${lp}</strong>, verme ve alma biçimini renklendirebilir — sabit bir tip değil, tekrar eden bir tema.</p>`,
      workBody: (lpLabel, gogyou, exprNum) =>
        `<p><strong>${lpLabel}</strong> enerjisi işte yalnızca verimlilik değil, amaç olarak kendini gösterebilir. Doğum yılı <strong>${gogyou}</strong> elementi nasıl inşa ettiğine işaret edebilir.</p>
         ${exprNum ? `<p>İsim titreşimin <strong>${exprNum}</strong>, dünyadaki görünümüne bir katman daha ekleyebilir.</p>` : ''}`,
      shadowHints: {
        1: 'liderlik kontrole dönüştüğünde yalnızlığa dikkat',
        2: 'barışı korumak için kendini kaybetmeye dikkat',
        3: 'derinlikten kaçınmak için yüzeyde kalmaya dikkat',
        4: 'güvenlik tehdit altındayken katılığa dikkat',
        5: 'bağlılıktan kaçan huzursuzluğa dikkat',
        6: 'ilginin kontrole dönüşmesine dikkat',
        7: 'dünya çok gürültülüyken içe çekilmeye dikkat',
        8: 'güç kıt olduğunda sertliğe dikkat',
        9: 'ideallerin bedeni aşmasına dikkat',
        default: 'gücünün aşırıya kaydığı anları fark et'
      },
      shadowBody: (lp, hint) =>
        `<p>Her armağanın bir gölgesi vardır. Yaşam yolu <strong>${lp}</strong> için büyüme kenarı şu olabilir: ${hint}.</p>
         <p>Gölgeye isim vermek yenilgi değildir — dengeye giden ilk adım olabilir.</p>`,
      luckyBody: (colors, numbers, days, hint) =>
        luckyBody({ colors: 'Renkler', numbers: 'Sayılar', days: 'Günler' }, colors, numbers, days, hint)
    }
  },
  deep: {
    scrollMoon: 'Ay takvimine git ↑', scrollBio: '90 günlük tahmine git ↑',
    scrollTimeline: '10 yıllık zaman çizelgesine git ↑',
    prompts: { generic: [
      { q: 'Bu beni neyi fark etmeye davet edebilir?', a: 'Bölüm temasıyla bir dakika kal. İlk yükselen duygu veya anı bir ipucu olabilir — bir hüküm değil.' },
      { q: 'Bu hafta küçük bir adım?', a: 'Bugün bitirebileceğin kadar küçük bir eylem seç. Genişletilmiş okumalar en iyi yumuşak deneyler olarak işler.' }
    ]},
    personalYear: {
      thisMonth: 'Bu ay', personalMonth: (n) => `Kişisel ay ${n}`, tagAction: 'Hareket', tagWait: 'Besle', tagWatch: 'Gözlemle',
      ritualHint: 'Gözlem aylarında: kararları yavaşlat, daha çok dinlen, topraklanma ritüeli yardımcı olabilir.',
      noWatch: 'Bu yıl yüksek gözlem gerektiren kişisel ay yok — daha dengeli bir ritim.',
      pathSuffix: (lp) => `Yol-${lp}`, encounterHint: (py) => `Kişisel yıl ${py} temaları aktifken ortaya çıkabilir`,
      encounterDetail: (type, el, py) => `«${type}» bağlantıları ${el} elementi mevsimini yansıtabilir.`,
      keywords: {
        1: ['Tohum', 'Cesaret', 'Başlangıç'], 2: ['Sabır', 'Bağ', 'Dinle'],
        3: ['Neşe', 'İfade', 'Bağlan'], 4: ['İnşa', 'Düzen', 'Kök'],
        5: ['Değişim', 'Özgürlük', 'Keşfet'], 6: ['Sevgi', 'Yuva', 'Bakım'],
        7: ['Sessizlik', 'Öğrenme', 'İç'], 8: ['Hasat', 'Güç', 'Al'],
        9: ['Bırak', 'Tamamla', 'Affet'], default: ['Akış', 'Güven', 'Açıl']
      },
      encounterTypes: {
        fire: ['Kıvılcım', 'Mentor', 'Müttefik'], water: ['Şifacı', 'Ayna', 'Rehber'], earth: ['İnşaatçı', 'Çapa', 'Usta'],
        air: ['Elçi', 'Ortak', 'Fikir taşıyıcı'], wood: ['Yetiştirici', 'Yol arkadaşı', 'Kaşif'],
        metal: ['Arıtıcı', 'Meydan okuyan', 'Bilge'], default: ['Müttefik', 'Ayna', 'Rehber']
      }
    },
    lifepath: {
      yearWave: (lp, py, pyMeaning) => `Yaşam yolu ${lp} ve Kişisel yıl ${py}: ${pyMeaning}`,
      yearWaveHint: 'Tam on yıl için yaşam haritasındaki 10 Yıllık Zaman Çizelgesi kartını aç.',
      resonateLabel: 'Yankılanabilir', resonateText: (a, b) => `${a} veya ${b} yolundakiler tanıdık gelebilir.`,
      growLabel: 'Büyümeyi tetikleyebilir', growText: (a, b) => `${a} veya ${b} yolları seni zorlayabilir — merakla karşılandığında genişleme olabilir.`,
      careLabel: 'Özenle', careText: (n) => `Yol ${n} enerjisi yoğun hissedilebilir — bilinçli sınırlar koymak değerli olabilir.`,
      careerNatural: 'Doğal uyum', careerNaturalText: (lp) => `Yol ${lp} armağanlarının zorlanmadan parladığı roller.`,
      careerStretch: 'Gerilme alanı', careerStretchText: (n) => `Yol ${n} enerjisini ödünç alan projeler gizli yetenekleri açabilir.`,
      careerRest: 'Dinlenme biçimi', careerRestText: (lp) => `Nasıl toparlandığın önemli. Yol ${lp} belirli bir dinlenme türüne ihtiyaç duyabilir.`,
      soulQ1: 'Hayatımda ne tekrar ediyor?', soulA1: (lp) => `Yol ${lp} aynı dersi farklı kılıklarla getirebilir.`,
      soulQ2: '«Yeterli» neye benzer?', soulA2: 'Ruh dersleri çoğu zaman hırsın içinde saklanır. Bu mevsim için yeterliyi tanımla.',
      figures: {
        1: [{ name: 'Öncü liderler', note: 'Taklit için değil — cesaretin onların seçimlerinde nasıl göründüğünü fark et.' }],
        2: [{ name: 'Köprü kurucular', note: 'Sahne merkezinde olmadan bağ kuranlar.' }],
        3: [{ name: 'Sanatçılar ve hikâye anlatıcıları', note: 'Neşe bir meslek olarak.' }],
        4: [{ name: 'Zanaatkârlar', note: 'Sabır görünür hale gelir.' }],
        5: [{ name: 'Kaşifler', note: 'Özgürlük sorumlulukla birlikte.' }],
        6: [{ name: 'Koruyucular', note: 'Boğmayan sevgi.' }],
        7: [{ name: 'Arayanlar', note: 'Konfordan çok gerçek.' }],
        8: [{ name: 'Miras inşaatçıları', note: 'Güç dolaşımda kalır.' }],
        9: [{ name: 'Hümanistler', note: 'Tamamlanma bir armağan olarak.' }],
        11: [{ name: 'Aydınlatıcılar', note: 'Hassasiyet bir hizmet olarak.' }],
        22: [{ name: 'Usta inşaatçılar', note: 'Temeli olan hayaller.' }],
        33: [{ name: 'Sevgi öğretmenleri', note: 'Koşulsuzluk bir pratik olarak.' }]
      }
    },
    sun: {
      elementMap: {
        fire: { direction: 'Güney · Ateş', season: 'Yaz sıcağı parıltını yansıtabilir.', ritual: 'Mum, güneş ışığı veya sabah hareketi.' },
        earth: { direction: 'Merkez · Toprak', season: 'Hasat mevsimleri seni kökleyebilir.', ritual: 'Ayakların çıplak toprakta, yavaş pişirilmiş yemek.' },
        air: { direction: 'Doğu · Hava', season: 'İlkbahar rüzgârları fikirleri hareketlendirebilir.', ritual: 'Üç cümlelik günlük, kulaklıksız yürüyüş.' },
        water: { direction: 'Batı · Su', season: 'Kış derinlikleri seni içe çekebilir.', ritual: 'Ilık banyo, ayı seyretmek.' },
        wood: { direction: 'Doğu · Ağaç', season: 'Büyüme mevsimleri ekim için uygundur.', ritual: 'Yeşil bitki, 29 günlük bir alışkanlık.' },
        metal: { direction: 'Batı · Metal', season: 'Sonbahar berraklığı arıtmaya yardımcı olabilir.', ritual: 'Bir çekmeceyi boşalt, beyaz giysi.' }
      }
    },
    kyusei: {
      phases: {
        1: 'Döngünün 1. yılı: honmei temalarını ek.', 2: '2. yıl: sabır ve ortaklık.', 3: '3. yıl: ifade ve görünürlük.',
        4: '4. yıl: temeller.', 5: '5. yıl: değişim ve hareket.', 6: '6. yıl: sorumluluk ve yuva.',
        7: '7. yıl: içe dönüş.', 8: '8. yıl: hasat.', 9: '9. yıl: tamamlanma — yeni tura hazırlık.', default: '9 yıllık honmei döngünde bir nokta.'
      }
    },
    tarot: {
      light: 'Işık yüzü', shadow: 'Gölge yüzü',
      lightText: (name) => `${name} düz: ruh armağanının en berrak hali.`,
      shadowText: (name) => `${name} ters: ceza değil — kart entegrasyon ister. Nerede ağır? O ağırlık dönüşümün kapı çalması olabilir.`
    }
  }
};
