/**
 * Modal "Daha Derin Oku" içerik veritabanı.
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
    { t: 'Işık tarafı', d: 'Güç ve kararlılık. Başkalarından önce adım atma ve yeni yollar açma gücü. Lider olmak için doğmuş gibi görünen bir ruh.' },
    { t: 'Gölge tarafı', d: 'Yalnızlık, gurur, inatçılık. Başkalarını dinlemeyi bıraktığınızda baskıcı bir varlığa kayabilirsiniz.' },
    { t: 'Yaşam amacı', d: 'Kendi bayrağınızı dikmek. Bir başkasının izinden gitmek değil, kendi izinizi bırakmak.' }
  ],
  2: [
    { t: 'Işık tarafı', d: 'Empati, uyum, ince ayar. Ortamı okumak ve insanları sessizce birbirine bağlamak.' },
    { t: 'Gölge tarafı', d: 'Kararsızlık, bağımlılık, aşırı fedakârlık. Çok uzun süre "iyi insan" kalarak kendinizi kaybetmek.' },
    { t: 'Yaşam amacı', d: 'Köprü olmak. Yalnız başına tamamlanamayan ilişkiler içinde parlamak.' }
  ],
  3: [
    { t: 'Işık tarafı', d: 'İfade, iyimserlik, yaratıcılık. Söz, renk ve kahkahayla insanları aydınlatma gücü.' },
    { t: 'Gölge tarafı', d: 'Ruh hali değişimleri, yüzeysellik, hafiflik. Yüzeyde kalmak ve derinlikten kaçınma eğilimi.' },
    { t: 'Yaşam amacı', d: 'Dünyaya neşe katmak. Hayattan zevk almanız başkasının tesellisi olabilir.' }
  ],
  4: [
    { t: 'Işık tarafı', d: 'Çalışkanlık, sabır, güvenilirlik. Katman katman inşa eden zanaatkâr bir ruh.' },
    { t: 'Gölge tarafı', d: 'Katılık, muhafazakârlık, esneksizlik. Değişim korkusu sizi kapalı bir kabuğa çekebilir.' },
    { t: 'Yaşam amacı', d: 'Dünyanın temelini kurmak. Gösterişli değil ama vazgeçilmez bir sütun olmak.' }
  ],
  5: [
    { t: 'Işık tarafı', d: 'Maceracı ruh, esneklik, çok yönlülük. Değişimle beslenen ve özgürce hareket eden rüzgâr gibi bir ruh.' },
    { t: 'Gölge tarafı', d: 'Huzursuzluk, dürtüsellik, sorumsuzluk. Bir şeyde yeterince uzun kalma korkusu.' },
    { t: 'Yaşam amacı', d: 'Deneyim toplamak. Bir yerde kalmamak, dünyanın çeşitliliğini varlığınıza kazımak.' }
  ],
  6: [
    { t: 'Işık tarafı', d: 'Sevgi, sorumluluk, arabuluculuk. Aile veya topluluğun merkezinde sık görülen sıcak bir varlık.' },
    { t: 'Gölge tarafı', d: 'Aşırı koruma, müdahale, şehitlik zihniyeti. Bakımın kontrole dönüştüğü an.' },
    { t: 'Yaşam amacı', d: 'Sevgiyle düzen getirmek. Bakma biçiminiz dünyayı iyileştirebilir.' }
  ],
  7: [
    { t: 'Işık tarafı', d: 'Merak, sezgi, analitik derinlik. Derine dalıp gerçeği yüzeye çıkaran bir ruh.' },
    { t: 'Gölge tarafı', d: 'Yalnızlık, eleştiri, insanlardan çekilme. Çevrenizdeki dünyaya kalbinizi kapatmak.' },
    { t: 'Yaşam amacı', d: 'Bilgiyi köprülemek. Yalnızlıkta kazandıklarınızı dünyaya geri vermek.' }
  ],
  8: [
    { t: 'Işık tarafı', d: 'Uygulama, liderlik, şeyleri gerçeğe dönüştürme yeteneği. Hem maddeyi hem ruhu yönetebilen güç.' },
    { t: 'Gölge tarafı', d: 'Güç arzusu, zorlayıcılık, paraya bağlılık. Gücün zorlamaya dönüşebileceği ince çizgi.' },
    { t: 'Yaşam amacı', d: 'Bolluğa biçim vermek. Zenginlik, ilişkiler ve enerji dolaşmalı, sadece tutulmamalı.' }
  ],
  9: [
    { t: 'Işık tarafı', d: 'Geniş sevgi, hümanist ruh, tamamlanma bilgeliği. Her sayıyı bütünleştirebilen bir varlık.' },
    { t: 'Gölge tarafı', d: 'Kaçış, kurban zihniyeti, kendini haklı gören idealizm. Ulaşılamaz ideallerden tükenme.' },
    { t: 'Yaşam amacı', d: 'Bir döngüyü tamamlayıp aktarmak. Geçmişi tutup geleceğe bırakmak.' }
  ],
  11: [
    { t: 'Işık tarafı', d: 'Yükselmiş sezgi ve maneviyat. Işığın habercisi olarak başkalarına rehberlik.' },
    { t: 'Gölge tarafı', d: 'Sinirsel gerilim, baskı, öz güvensizlik. Kalp bunalmış hissedene kadar çok fazla almak.' },
    { t: 'Yaşam amacı', d: 'Görünmez olanı görünür kılmak. Köprü kurucular arasında belki en narin rol.' }
  ],
  22: [
    { t: 'Işık tarafı', d: 'Usta İnşaatçı. Hayalleri gerçek dünyada yapılara dönüştüren nadir bir güç.' },
    { t: 'Gölge tarafı', d: 'Sorumluluk altında ezilmek — ya da ondan kaçmak.' },
    { t: 'Yaşam amacı', d: 'Büyük bir vizyonu gerçekleştirmek. Yalnız değil, birçok insanı çekerek.' }
  ],
  33: [
    { t: 'Işık tarafı', d: 'Usta Öğretmen. Koşulsuz sevgiyi somutlaştırabilen bir ruh.' },
    { t: 'Gölge tarafı', d: 'Sevgi adına kontrol — ya da sevginin tükenmesi.' },
    { t: 'Yaşam amacı', d: 'Sevginin kendisini öğretmek. Kendi ders kitabı olabilecek bir yaşam.' }
  ]
};

export function premiumGeneric(systemLabel, valueLabel) {
  return [
    { t: 'On yıllık şans dalgaları', d: `${systemLabel} içinde ${valueLabel} olarak 9 yıllık bir döngüde şansla hareket edebilirsiniz. Bir sonraki zirve yılı, dikkat yılı ve tohum ekmek için en iyi aylar hakkında ayrıntılar.` },
    { t: 'Uyum yorumu', d: '12 kadranlı tam rehber: enerjinizle yankılanabilecek tipler, büyümeyi uyaran tipler ve dikkatle yaklaşılması gereken tipler.' },
    { t: 'Kariyer uyumu', d: `${valueLabel} en çok nerede gelişebilir, nerede uyumsuz hissedebilir ve bunu yan işle nasıl ifade edebilirsiniz — modern bir kariyer haritasına göre.` },
    { t: 'Ruh dersi', d: 'Bu yaşamda karşılaşmak için burada olabileceğiniz en önemli ders ve erken işaretlerini nasıl tanıyacağınız.' },
    { t: 'Aynı işarete sahip tanınmış kişiler', d: 'Bu enerjiyi paylaşan 100 tarihi ve çağdaş figür listesi. Yaptıkları seçimlerden öğrenmek.' }
  ];
}

export function buildDeep(cardKey, ctx) {
  const { lp, py, en, expr, nameRoman, sun, mt, cz, sj, ks, gy, an, ct, my, tb, dt, bs, bf, bio, mp, ls } = ctx;

  switch (cardKey) {
    case 'lifepath': return {
      title: 'Yaşam Yolu Sayısı',
      value: lp,
      label: LIFE_PATH_MEANINGS[lp].label,
      intro: `Yaşam Yolu ${lp} hayatınızın ana temasıdır. Doğumdan önce ruhunuzun seçtiği rolü yansıtabilir. ${LIFE_PATH_MEANINGS[lp].desc}`,
      free: LP_DETAILS[lp] || [
        { t: 'Işık tarafı', d: 'En büyük armağanınız burada uyuyor olabilir.' },
        { t: 'Gölge tarafı', d: 'Denge kaybolduğunda bu taraf kendini gösterebilir.' },
        { t: 'Yaşam amacı', d: 'Bu yolu seçmenin anlamı.' }
      ],
      premium: premiumGeneric('Yaşam Yolu', String(lp))
    };

    case 'personalYear': return {
      title: 'Kişisel Yıl',
      value: py,
      label: `${ctx.currentYear} yılında siz`,
      intro: `Kişisel yılınız size özgü 9 yıllık bir ritim izler. Bu yıl ${py} yılıdır. ${PERSONAL_YEAR_MEANINGS[py]}Bu dalgayla birlikte hareket ettiğinizde şans daha akıcı olabilir.`,
      free: [
        { t: 'Bu yılın rüzgârı', d: `${PERSONAL_YEAR_MEANINGS[py]}Bu yönde hareket daha kolay kutsanabilir.` },
        { t: 'Bu yılın tuzakları', d: `Aksine, önceki dalgaya tutunmak — "${PERSONAL_YEAR_MEANINGS[personalYearPrev(py)]}" gibi bir şey — durgunluğa yol açabilir.` },
        { t: 'Gelecek yılın işaretleri', d: `Gelecek yıl Kişisel Yıl ${personalYearNext(py)}. ${PERSONAL_YEAR_MEANINGS[personalYearNext(py)] || 'Yeni bir döngüye dönüm noktası.'} Bu yılın seçimleri gelecek yılın başlangıç noktası olabilir.` }
      ],
      premium: [
        { t: 'Aylık şans takvimi', d: 'Kişisel ay ve kişisel güne göre on iki ay. Ne zaman hareket edeceğiniz, bekleyeceğiniz ve karar vereceğiniz.' },
        { t: 'Bu yılın anahtar kelimeleri', d: 'Bu yıl sadece size verilen üç anahtar kelime. Karar belirsiz hissettiğinde pusula.' },
        { t: 'Bu yılki karşılaşmalar', d: 'Ortaya çıkabilecek bağlantı türleri, hangi yönlerden gelebilecekleri ve nasıl tanınacakları.' },
        { t: 'Dikkat edilecek aylar', d: 'Sağlık, para veya ilişkilerin dengesiz hissedilebileceği dönemler — ve dengeyi geri getirebilecek ritüeller.' }
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
        title: 'İsim Sayısı',
        value: dual ? `${native} · ${latin}` : native,
        label: dual ? 'Görünen ad / Latin harfleri' : (EXPRESSION_MEANINGS[native] || '').replace('İsim enerjisi:', ''),
        intro: dual
          ? `Görünen adınızdan ${native} okunur; "${roman}" ifadesinden ${latin} okunur. İkisi de Yaşam Yolu ${lp} ayrı olarak nasıl çağrıldığınızı anlatır. Farklı sayılar hangisinin "doğru" olduğu yarışı değildir.`
          : `Adınız her söylendiğinde ${native} enerjisini yayar — Yaşam Yolu ${lp} ayrı olarak, nasıl çağrıldığınızın sayısı.`,
        free: [
          {
            t: 'Görünen yazı ad sayısı',
            d: `Görünen adınızdan: ${native}. Latin olmayan yazılar için basit bir Unicode glif toplamı kullanılır — klasik Batı numerolojisi değil. ${nativeTrait} bir mercek olarak önerebilir, hüküm değil.`
          },
          dual
            ? {
              t: 'Latin / Roma ad sayısı (Pisagor)',
              d: `"${roman}" ifadesi olağan A–Z tablosunda ${latin} ile eşleşir. ${latinTrait}Bu, uluslararası numerolojinin genelde ifade sayısı dediği şeye daha yakındır.`
            }
            : {
              t: 'Latin harflerinde ikinci eksen',
              d: roman && latin == null
                ? 'Latin alanında A–Z harfi bulunamadı, uluslararası sayı hesaplanmadı. Pasaport veya latinize yazım deneyin.'
                : 'Görünen adınızın yanında uluslararası A–Z ad sayısını da görmek için isteğe bağlı Latin yazım ekleyin.'
            },
          {
            t: 'Yaşam Yolu ile ilişki',
            d: dual
              ? `Yaşam Yolu ${lp}, görünen ${native} ve Latin ${latin} birlikte doğuş özü, günlük çağrı ve uluslararası yankıyı gösterebilir.`
              : `Yaşam Yolu ${lp} ile görünen ${native} iç öz ile nasıl çağrıldığınız arasındaki dengeyi gösterebilir.`
          },
          { t: 'Yeniden adlandırma ipuçları', d: 'Mevcut adınız ağır hissediyorsa, farklı sayılı bir takma veya iş adı başka bir dalga boyu davet edebilir.' }
        ],
        premium: premiumGeneric('İsim Sayısı', dual ? `${native}/${latin}` : String(native))
      };
    }

    case 'sun': return {
      title: 'Güneş Burcu',
      value: `${sun.symbol} ${sun.name}`,
      label: `${sun.element} elementi`,
      intro: `Güneş burcunuz benliğinizin özünü ortaya koyabilir. Güneş ${sun.name} burcundayken ${sun.desc}Her doğum gününde Güneş aynı burca döner ve yeniden size parlar.`,
      free: [
        { t: 'Bu burcun özü', d: `${sun.name} ${sun.element} elementine aittir ve kendine özgü bir dünya görüşü taşıyabilir. ${sun.desc}` },
        { t: 'Parladığınız anlar', d: `${sun.name}, elementiyle uyumlu ortamlarda en parlak parlayabilir. ${sun.element} niteliklerinin ifade edilebileceği yerleri seçin.` },
        { t: 'Gölgeyle yaşamak', d: 'Her burcun ışığı ve gölgesi vardır. Işığı seçmeye devam eden günlük alışkanlıklar yaşam kalitenizi değiştirebilir.' }
      ],
      premium: [
        { t: 'Ay burcu ve Yükselen', d: 'Güneş tek burcunuz değil. Doğum saati ve yerinden Ay ve Yükselen hesaplanabilir — üç yıldızın senfonisi.' },
        { t: 'Tam 12 ev analizi', d: 'Burcunuzun 12 evde (yaşam alanları) nasıl yerleşebileceğinin tam görünümü.' },
        { t: 'Büyük geçişler', d: 'Dış gezegenlerin önümüzdeki üç yıl boyunca haritanızı ay ay nasıl etkileyebileceği.' },
        { t: 'Uyum haritası', d: 'Partner veya aile ile beş katmanlı sinastri analizi.' },
        { t: 'Geçmiş yaşam haritası', d: 'Ay düğümleri aracılığıyla geçmiş yaşamlardan ruh temaları ve bu yaşamın ödevi.' }
      ]
    };

    case 'moonTrait': return {
      title: 'Ay Eğilimi',
      value: mt.name,
      label: 'Doğumdaki Ay evresinden',
      intro: `Doğumunuzdaki gökyüzündeki Ay şekli duygusal ritminizin "alışkanlığını" biçimlendirebilir. ${mt.desc}`,
      free: [
        { t: 'Duygusal örüntüler', d: 'Bu ay evresinde doğanlar için duyguların tipik hareket biçimleri.' },
        { t: 'Ay ile ilişki kurmak', d: 'Dolunay gecelerinde, yeni ay gecelerinde ve ilk veya son dördün günlerinde — neyin sizi yenilemiş hissettirdiğini keşfedebilirsiniz.' },
        { t: 'Rüya günlüğü', d: 'Güçlü ay eğilimleri olanlar rüyaların önemli mesajlar taşıdığını bulabilir. Sabah üç dakikalık kayıt deneyin.' }
      ],
      premium: [
        { t: 'Tam Ay burcu', d: 'Doğum saati ve yeriyle tamamen farklı bir burç ortaya çıkabilir — gerçek duygusal diliniz.' },
        { t: 'Ay evresi şansı', d: 'Önümüzdeki 12 ay için ay evresine göre şanslı eylemler.' },
        { t: 'Ay ritüelleri', d: 'Her ay size uygun yeni ay ve dolunay törenlerini nasıl oluşturacağınız.' }
      ]
    };

    case 'zodiac': return {
      title: 'Çin Burcu',
      value: cz.name,
      label: `${cz.char} Yılında doğmuş`,
      intro: `${cz.name}, Doğu takviminin 12 yıllık döngüsü içinde seçmiş olabileceğiniz hayvandır. ${cz.desc}Aynı burcu paylaşanlar her 12 yılda bir dönüm noktalarıyla buluşabilir.`,
      free: [
        { t: 'Bu burcun özü', d: cz.desc },
        { t: 'Benming yılı', d: 'Her 12 yılda kendi burç yılınız döner. "Benming yılı" denir ve yaşam dönüm noktası olabilir.' },
        { t: 'Uyum ipuçları', d: 'Liuhe (en güçlü eşleşme), Sanhe (iyi bağ), Chong (uyarıcı çatışma) — burçtaki kombinasyonlar derin anlam taşıyabilir.' }
      ],
      premium: [
        { t: 'Liuhe, Sanhe ve Chong haritası', d: 'Burcunuz ile diğerlerinin tam ilişki haritası. Aile, sevgili ve patronlarla dinamikler görünür olabilir.' },
        { t: 'Saat direği (doğum saati burcu)', d: 'Sadece doğum yılı değil — doğum saati de bir burç taşıyabilir. İç burcunuz olabilir.' },
        { t: 'On iki yaşam evresi', d: 'Doğum, büyüme, refah, düşüş, yenilenme arasında on iki evrenin neresinde olabileceğiniz…' }
      ]
    };

    case 'sixty': return {
      title: 'Yıl Direği (Altmışlı Döngü)',
      value: sj.name,
      label: `${sj.yinyang} ${sj.element}`,
      intro: `Altmışlı döngü on göksel kök ve on iki yersel daldan 60 iz oluşturur. Aynı yıl direği ancak 60 yılda bir döner. Yıl direğiniz ${sj.yinyang} ${sj.element} niteliğini taşır.`,
      free: [
        { t: 'Göksel kökünüz', d: `${sj.name[0]} kökü ${sj.yinyang} ${sj.element} temsil eder ve karakterin temelini oluşturabilir.` },
        { t: 'Yersel dalınız', d: `${sj.name[1]} dalı kaderin akışını gösterebilir, her 12 yılda aynı konuma döner.` },
        { t: 'Aynı direğin özellikleri', d: 'Bu iz ancak 60 yılda bir döndüğü için nesiller arası nadir ortak zemin paylaşabilirsiniz.' }
      ],
      premium: [
        { t: 'Dört direğin tamamı', d: 'Sadece yıl direği değil — ay, gün ve saat direkleri birlikte Dört Direk haritanızı tamamlayabilir.' },
        { t: 'On Tanrı ve On İki Evre', d: 'Dört Direk astrolojisinin özü. Sosyal yaşam, zenginlik, aile ve sağlık görünür olabilir.' },
        { t: 'On yıllık şans döngüleri', d: 'Büyük şans 10 yıllık dönemlere ayrılır. Şimdi hangi döngüde olabileceğiniz ve sırada ne gelebileceği.' }
      ]
    };

    case 'kyusei': return {
      title: 'Honmei Yıldızı (Dokuz Yıldız Ki)',
      value: ks.name,
      label: `${ks.element} yıldızı`,
      intro: `Dokuz Yıldız Ki doğum yılından "honmei yıldızınızı" türetir — Japonya'ya özgü bir fal. ${ks.name} honmei yıldızınız olarak ${ks.desc}Bu yıldız 9 yıllık bir şans döngüsü oluşturabilir.`,
      free: [
        { t: 'Honmei yıldızının özü', d: ks.desc },
        { t: 'Dokuz yıllık döngü', d: 'Honmei yıldızı şansı 9 yılda bir tur tamamlayabilir — ekim, besleme, hasat ve temizlik dönüşümlü.' },
        { t: 'Şanslı yönlerin temelleri', d: 'Dokuz Yıldız Ki\'de şanslı yönler honmei ve getsumei yıldızlarıyla belirlenebilir. Taşınma, seyahat veya kariyer yönü şansı değiştirebilir.' }
      ],
      premium: [
        { t: 'Getsumei ve Nichimei yıldızları', d: 'Honmei ötesinde — getsumei ve nichimei birlikte Ki profilinizi tamamlayabilir.' },
        { t: 'Bu yıl ve gelecek yıl şanslı yönler', d: 'Her yıl değişen kişisel şanslı yön takviminiz — en büyük şansın ayına kadar.' },
        { t: 'Dokai ve Hidokai yılları', d: 'Büyük dönüm noktalarının gelebileceği yıllar ve işaretlerini nasıl okuyacağınız.' },
        { t: 'Yıldız uyumu', d: 'Honmei yıldızları arasında beş katmanlı uyum tablosu — aile, aşk ve iş için.' }
      ]
    };

    case 'gogyou': return {
      title: 'Beş Element',
      value: gy.element,
      label: 'Doğum yılının elementi',
      intro: `Beş Element dünyayı oluşturabilecek beş temel güçtür. ${gy.element} ile geldiniz olabilirsiniz. ${gy.desc}`,
      free: [
        { t: 'Elementiniz', d: gy.desc },
        { t: 'Üreten (destekleyen) döngü', d: 'Ağaç Ateşi besler, Ateş Toprağı yaratır, Toprak Metali taşır, Metal Suyu toplar, Su Ağacı besler. Elementinizi destekleyen insanları bulabilirsiniz.' },
        { t: 'Aşan (kısıtlayan) döngü', d: 'Ağaç Toprağı kısıtlar, Toprak Suyu emer, Su Ateşi söndürür, Ateş Metali eritir, Metal Ağacı keser. Kısıtlayıcı ilişkiler gerilim ve büyüme yaratabilir.' }
      ],
      premium: [
        { t: 'Beş Element dengeniz', d: 'Doğum tarihi ve saatinden hesaplanan oranlar. Neyin bol ve neyin eksik olabileceği.' },
        { t: 'Eksik elementleri nasıl tamamlarsınız', d: 'Eksik hissedileni beslemek için pratik liste — renk, yiyecek, yön, taşlar, alışkanlıklar.' },
        { t: 'Beş Element uyum haritası', d: 'Başka birinin elementleriyle tam karşılaştırma. Kimin destekleyebileceği ve kimin tüketebileceği bir bakışta.' }
      ]
    };

    case 'animal': return {
      title: 'Hayvan Falı',
      value: an.name,
      label: `Kişilik numarası ${an.num}/60`,
      intro: `Hayvan falı doğum tarihinden 60 kişilik numarası türetir ve bunları 12 hayvana sınıflandırır. Siz ${an.name}siniz. ${ANIMAL_DESC[an.name] || ''}`,
      free: [
        { t: 'Temel karakter', d: ANIMAL_DESC[an.name] || '' },
        { t: 'Grup sınıflandırması', d: '12 hayvan üç gruba ayrılabilir: Ay (hayalperest), Toprak (realist) ve Güneş (hassas).' },
        { t: 'Kişilik numarasının anlamı', d: `Kişilik numaranız ${an.num}. 60 içindeki yeri karakterin ince tonlarını önerebilir.` }
      ],
      premium: [
        { t: 'Tam 60 tip profili', d: `Kişilik numarası ${an.num} için ayrıntılı yorum. Aynı numara ancak 60 günde bir görünebilir.` },
        { t: 'Lider tipi veya destekçi tipi', d: 'Aynı hayvan içinde bile lider ve destekçi tipler farklı olabilir. Gruptaki gerçek rolünüz.' },
        { t: '12 hayvanın tamamıyla uyum', d: 'Aşk, iş ve dostluk için tüm 60×60 eşleşmelerin tam haritası.' },
        { t: 'Gizli karakter', d: 'Yüzeyin altındaki başka bir siz — stres altında ortaya çıkabilecek hayvan.' }
      ]
    };

    case 'celtic': return {
      title: 'Kelt Ağaç Kehaneti',
      value: ct.name,
      label: 'On üç kutsal ağaçtan biri',
      intro: `Kadim Kelt druidleri yılı on üç ay döngüsüne böldü, her birini bir ağaçla eşleştirdi. Koruyucu ağacınız ${ct.name}. ${ct.desc}`,
      free: [
        { t: 'Koruyucu ağacın gücü', d: ct.desc },
        { t: 'Druid bilgeliği', d: 'Kelt ormanında her ağacın farklı bir ruh taşıdığı söylenir. Ağacınız ruhunuzun ormandan ödünç aldığı ruh olabilir.' },
        { t: 'Ağacınızla ritüeller', d: 'Koruyucu ağacınızın önünde derin nefes, tek bir yaprak toplamak — içinizde bir şey sessizce yerleşebilir.' }
      ],
      premium: [
        { t: 'Ogham harfleri', d: 'Her ağaçla eşleşen kadim Kelt harfleri. Tılsım olarak kazınmaya hazır kişisel sembolünüz.' },
        { t: 'Koruyucu hayvan ve taş', d: 'Ağacınızla birlikte ortaya çıkabilecek hayvan ve taş.' },
        { t: 'Mevsimsel ritüeller', d: 'Ekinoks ve gündönümünde ağacınızla törenler — dört mevsim festivali.' },
        { t: 'Uyumlu ağaçlar', d: 'Kelt ormanında sizinkiyle eşleştiğinde en zengin meyveyi verebilecek ağaçlar.' }
      ]
    };

    case 'maya': return {
      title: 'Maya Takvimi KIN',
      value: `KIN ${my.kin}`,
      label: `${my.tone} ${my.seal}`,
      intro: `Kutsal Maya Tzolk'in takvimi 260 günlük döngüde 260 KIN ile işler. KIN'iniz ${my.kin}, mühür "${my.seal}," galaktik ton "${my.tone}." Mühür özü; ton ritmi yansıtabilir.`,
      free: [
        { t: 'Mührün anlamı', d: `${my.seal} 20 mühürden biridir — özünüzü ifade edebilecek bir sembol.` },
        { t: 'Galaktik tonun anlamı', d: `${my.tone} 13 ritmik tondan biridir — yaşamınızın temposunu önerebilir.` },
        { t: 'KIN numarasının benzersizliği', d: 'Tam KIN\'inize sahip biri ancak 260 günde bir doğabilir. Dünya çapında yaklaşık 25 milyon akraba ruh olabilir.' }
      ],
      premium: [
        { t: 'Rehber, antipod ve benzer KIN', d: 'Size rehberlik edebilecek, aynalayabilecek ve enerjinizle yankılanan KIN — tam olarak tanımlanmış.' },
        { t: '13 günlük dalga', d: 'Yaşamınızın 13 günlük döngüsü. Şimdi nerede olabileceğiniz ve sırada hangi dalganın gelebileceği.' },
        { t: 'Galaktik imza', d: 'Tam galaktik adınız — KIN, mühür, ton, kale ve çakra bir arada.' },
        { t: 'Günlük KIN yorumu', d: 'Bugünün KIN\'inin sizinkiyle nasıl ilişkilendiğini yorumlayan günlük Maya takvimi.' }
      ]
    };

    case 'tarotBirth': return {
      title: 'Tarot Doğum Kartı',
      value: tb.name,
      label: `Büyük Arkana ${tb.num}`,
      intro: `22 Büyük Arkana arasında doğum tarihinden hesaplanan bir kart ruhunuzun tema kartı olabilir. Sizinki ${tb.name}. ${TAROT_MEANINGS[tb.name]}`,
      free: [
        { t: 'Bu kartın özü', d: TAROT_MEANINGS[tb.name] },
        { t: 'Sayının sembolizmi', d: `${tb.num} sayısı Tarot'ta kendi anlamını taşıyabilir. Yaşamınız bu sayının ördüğü bir yolculuk olabilir.` },
        { t: 'Gölge tarafı', d: 'Her kart ışık ve gölge taşır. Ağır hissettiğinde değişim veya bırakma sürecini yansıtabilir — hüküm değil.' }
      ],
      premium: [
        { t: 'Kişisel Küçük Arkana kartları', d: 'Büyük Arkana arkasında hareket eden Küçük Arkana takımlarını (Kılıçlar, Kupa, Asa, Tılsım) hesaplayın.' },
        { t: 'Bu yılın tema kartı', d: 'Her yıl değişen kart — ne öğreniyor ve ne bırakıyor olabileceğiniz.' },
        { t: 'Gölge kartı', d: 'Doğum kartınızın gölgesinde gizli başka bir siz — farkındalığın altındaki temalar.' },
        { t: 'Tam yedi kartlı açılım', d: 'Geçmiş, şimdi, gelecek, engel, umut, bilinçdışı ve sonuç boyunca yaşam açılımı.' }
      ]
    };

    case 'tarotDaily': return {
      title: 'Bugünün Kartı',
      value: dt.name,
      label: 'Bugün sizin için',
      intro: `Bu özel günde adınız ve bugünün tarihinden çekilen kart ${dt.name}. ${dt.desc}`,
      free: [
        { t: 'Bugünün mesajı', d: dt.desc },
        { t: 'Bu kart neden çıktı', d: 'Kartlar tesadüfen çıkmayabilir — gereken anda gereken mesajla gelebilirler.' },
        { t: 'Bugünü nasıl geçirmeli', d: 'Günü bu kartın enerjisiyle uyumladığınızda işler şaşırtıcı biçimde daha akıcı olabilir.' }
      ],
      premium: [
        { t: 'Yedi günlük kart yorumu', d: 'Bugünden itibaren yedi günlük açılım — her gün temalar ve seçilecek eylemler.' },
        { t: 'Bu ayın ana kartı', d: 'Ayınızı simgeleyebilecek tek kart — aylık tema.' },
        { t: 'Kelt Haçı açılımı', d: 'En klasik yorum — durumunuzu birçok açıdan analiz eden on kart.' }
      ]
    };

    case 'birthstone': return {
      title: 'Doğum Taşı',
      value: bs.name,
      label: `${ctx.m} doğum taşı`,
      intro: `Doğum taşı doğum ayınızla eşleşen mücevherdir. Sizinki ${bs.name}. ${bs.meaning} içinde yaşadığı söylenir ve uzun süredir tılsım olarak takılır.`,
      free: [
        { t: 'Taşın gücü', d: bs.meaning },
        { t: 'Nasıl takılır', d: 'Doğum taşları cilde yakın tutulduğunda en iyi çalışabilir — yüzük, kolye, bilezik gibi.' },
        { t: 'Arındırma yöntemleri', d: 'Taşlar da enerji emebilir. Ay ışığı, kristal kümeleri veya adaçayı dumanı düzenli arındırmaya yardımcı olabilir.' }
      ],
      premium: [
        { t: 'En iyi üç koruyucu taşınız', d: 'Doğum taşının ötesinde doğum tarihi ve honmei yıldızından türetilen üç destekleyici taş — sinerji için birleştirilmiş.' },
        { t: 'Değerli taş bilimi', d: 'Kristal yapısı, dalga boyu ve enerji — hem manevi hem bilimsel açılardan.' },
        { t: 'Taş ritüelleri', d: 'Taşlarla meditasyon ve farklı niyetler için oluşturulmuş kristal ızgaralar.' }
      ]
    };

    case 'birthflower': return {
      title: 'Doğum Çiçeği',
      value: bf,
      label: `${ctx.m} çiçeği`,
      intro: `Doğum çiçeği her ay için temsili bir çiçektir. Sizinki ${bf}. Çiçekler uzun süredir ruhun durumunu yansıtan aynalar olarak görülür.`,
      free: [
        { t: 'Çiçeğin sembolü', d: 'Doğum ayınızın sembolü. Yakında bulundurmak kalbi sakinleştirebilir.' },
        { t: 'Çiçek dili', d: 'Her çiçeğin kendi dili vardır — doğum çiçeğinin anlamı yaşamınız için mesaj işlevi görebilir.' },
        { t: 'Çiçeklerle yaşamak', d: 'Masada tek bir doğum çiçeği — bazı günler sadece bu bile tonu belirlemeye yeter.' }
      ],
      premium: [
        { t: 'Tarihe göre doğum çiçeği', d: 'Sadece aya göre değil — 365 doğum çiçeği takvim tarihine atanabilir. Tamamen size özel çiçek.' },
        { t: 'Çiçek şans takvimi', d: 'Her ay şanslı bir çiçek — yıl boyunca size uygun çiçekleri kullanarak.' },
        { t: 'Çiçek özleri', d: 'Bach çiçek özlerinden honmei yıldızınız ve numerolojinizle uyumlu 38 öz listesi.' }
      ]
    };

    case 'biorhythm': return {
      title: 'Biyoritim',
      value: `${bio.days.toLocaleString()} gün`,
      label: 'Doğumdan bu yana geçen gün',
      intro: `Biyoritim, doğumdan bu yana geçen günlerden fiziksel, duygusal, zihinsel ve sezgisel enerji dalgalarını hesaplayan 20. yüzyıl uygulamasıdır. Şimdi ${bio.days.toLocaleString()}. gündesiniz.`,
      free: [
        { t: 'Dört dalga', d: `Fiziksel: 23 günlük döngü; duygusal: 28 gün; zihinsel: 33 gün; sezgisel: 38 gün. Mevcut değerleriniz fiziksel ${(bio.physical*100).toFixed(0)}, duygusal ${(bio.emotional*100).toFixed(0)}, zihinsel ${(bio.intellectual*100).toFixed(0)}, sezgisel ${(bio.intuitive*100).toFixed(0)} olabilir.` },
        { t: 'Kritik günler', d: 'Bir dalganın sıfırı geçtiği günlere "kritik günler" denir — yargı hataları ve kazalar daha olası olabilir.' },
        { t: 'Dalgalar ve eylem', d: 'Yükselen: ilerle; düşen: koru; zirve: sergile; dip: dinlen. Dalga ile hareket etmek yorgunluğu azaltabilir.' }
      ],
      premium: [
        { t: '90 günlük tahmin takvimi', d: 'Önümüzdeki 90 gün için dört dalga tahmini — toplantılar, mülakatlar, randevular, taşınmalar için optimal tarihler.' },
        { t: 'İki kişi için birleşik biyoritim', d: 'Partner veya aile ile biyoritimleri üst üste koyarak birlikte hareket ve ayrı dinlenme günlerini bulun.' },
        { t: 'Kritik gün uyarıları', d: 'Kritik günler yaklaştığında önceden haber — belki en güçlü kaza önleme önlemi.' }
      ]
    };

    case 'moon': return {
      title: 'Bu Geceki Ay',
      value: mp.name,
      label: `Evre %${(mp.phase * 100).toFixed(1)}`,
      intro: `Bu gece gökyüzündeki Ay ${mp.name}. Evre %${(mp.phase * 100).toFixed(1)}. Ay döngüleri bitkileri, denizi, bedeni ve kalbi etkileyebilir. Şu an hissettikleriniz kısmen Ay'ın etkisi olabilir.`,
      free: [
        { t: 'Evrenin anlamı', d: 'Yeni ay: başlangıçlar; ilk dördün: meydan okuma; dolunay: tamamlanma; son dördün: bırakma. Bu geceki Ay ne davet ediyor olabilir?' },
        { t: 'Ay ve duygu', d: 'Dolunay veya yeni aydan üç gün önce ve sonra duygular daha kolay hareket edebilir — bir şeyi başlatmak veya bitirmek için iyi zaman.' },
        { t: 'Ay ritüelleri', d: 'Yeni ayda dilek yazın, dolunayda şükran sunun — ay enerjisiyle çalışmanın basit, kadim yolu.' }
      ],
      premium: [
        { t: '12 aylık yeni ve dolunay takvimi', d: 'Önümüzdeki 12 ayın yeni ve dolunayları, burçları ve sizi nasıl etkileyebilecekleri.' },
        { t: 'Kişisel ay döngüsü', d: 'Bugünün evresinin doğum ay evrenizle ilişkisi — yaşam dönüm noktaları burada görünebilir.' },
        { t: 'Ay ışığı banyosu töreni', d: 'Sadece size özel aylık dolunay ritüeli — dilekleri güçlendirme, artık hizmet etmeyeni bırakma.' }
      ]
    };

    case 'lifeStagePrev': return {
      title: 'Yakın Yaşam Dönüm Noktası',
      value: ls.prev ? `${ls.prev.age} yaş` : '—',
      label: ls.prev ? ls.prev.name : '',
      intro: ls.prev ? `${ls.prev.age} yaşında "${ls.prev.name}" dönüm noktasından geçmiş olabilirsiniz. ${ls.prev.desc}` : 'Henüz ilk büyük dönüm noktanıza ulaşmadınız.',
      free: ls.prev ? [
        { t: 'Bu dönüm noktasının anlamı', d: ls.prev.desc },
        { t: 'O civarda neler olabilir', d: 'Büyük yaşam dönüm noktalarında ilişkiler, iş veya ev genelde önemli ölçüde değişir.' },
        { t: 'Yansıma soruları', d: `${ls.prev.age} yaşında sizin için neler oluyordu? Şimdi yazmak yaşamınızdaki örüntüleri ortaya çıkarabilir.` }
      ] : [],
      premium: [
        { t: 'Geçmiş tüm dönüm noktalarının analizi', d: 'Doğumdan bugüne tüm dönüm noktalarının tam listesi — o zaman ne oldu, ne değişti.' },
        { t: 'Gizli dönüm noktaları', d: 'Yaygın bilinmeyen önemli astrolojik geçişler — yaşamınızdaki sessiz dönüm noktaları.' },
        { t: 'Dönüm noktası zinciri örüntüleri', d: 'Dönüm noktalarınızda tekrarlayabilecek temalar. Sırada ne gelebileceğine hazırlık.' }
      ]
    };

    case 'lifeStageNext': return {
      title: 'Sonraki Yaşam Dönüm Noktası',
      value: ls.next ? `${ls.next.age} yaş` : '—',
      label: ls.next ? ls.next.name : '',
      intro: ls.next ? `Sonraki yaşam dönüm noktanız ${ls.next.age} yaşında olabilir: "${ls.next.name}." Yaklaşık ${(ls.next.age - ls.years).toFixed(1)} yıl içinde gelebilir. ${ls.next.desc}` : 'Büyük dönüm noktaları arasında sessiz bir aralıkta olabilirsiniz.',
      free: ls.next ? [
        { t: 'Bu dönüm noktasının anlamı', d: ls.next.desc },
        { t: 'Neye hazırlanmalı', d: 'İşaretler büyük bir dönüm noktasından yıllar önce sessizce başlayabilir. İç sesi dinleyin.' },
        { t: 'Fırsat işaretleri', d: 'Bu dönüm noktası civarında yeni bağlantılar, yerler veya roller daha olası görünebilir. Açık kalmak yardımcı olabilir.' }
      ] : [],
      premium: [
        { t: 'Tam on yıllık zaman çizelgesi', d: 'Önümüzdeki on yılda gelebilecek her dönüm noktası, anlamı ve en iyi hazırlık.' },
        { t: 'Evlilik, doğum, kariyer değişikliği zamanlaması', d: 'Yaşamın büyük kararları için uygun zamanı belirlemek üzere geçiş analizi.' },
        { t: 'Sınav dönemleri ve karşılama', d: 'Dönüm noktaları genelde sınavlar getirir. Önceden bilmek kalbin hazırlanmasına yardımcı olabilir.' }
      ]
    };
  }
  return null;
}
