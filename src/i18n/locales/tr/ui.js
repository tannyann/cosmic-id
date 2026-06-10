/** Türkçe UI (fal içerikleri şimdilik İngilizce) */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — Kişisel Kozmoloji',
    description: 'Doğum tarihi ve adınızdan numeroloji, astroloji, Kyusei ve daha fazlası.',
    ogTitle: 'COSMIC ID — Kişisel Kozmoloji',
    ogDescription: 'İçinizde yazılı on dokuz hikâye. Birçok sistem, tek okuma.',
    label: 'Türkçe'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'İçinizde yazılı on dokuz hikâye'
  },
  form: {
    nameLabel: 'Adınız',
    namePlaceholder: 'ör. Ayşe Yılmaz',
    privacyNote: 'Girdileriniz yalnızca bu cihazda işlenir — sunucuya gönderilmez.',
    birthLabel: 'Doğum tarihi',
    submit: 'Ortaya çıkar',
    freeBadge: 'Her zaman ücretsiz',
    premiumDemo: 'Derin okumalar önizlemesi (demo)',
    premiumDemoTitle: 'Premium önizleme (temel deneyim ücretsiz kalır)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'Her yorum bir olasılıktır. Hikâyenizi siz yazarsınız.'
  },
  lang: { label: 'Dil' },
  sections: {
    numerology: ['Numeroloji', 'Numerology'],
    western: ['Batı astrolojisi', 'Western Astrology'],
    eastern: ['Doğu yıldızları', 'Eastern'],
    characters: ['Karakter falı', 'Characters'],
    sacred: ['Maya ve Tarot', 'Sacred Symbols'],
    nature: ['Doğa sembolleri', 'Nature'],
    cycles: ['Bugünün dalgaları', 'Cycles'],
    lifeMap: ['Yaşam haritası', 'Life Map']
  },
  cards: {
    ...enUi.cards,
    lifepath: 'Yaşam yolu sayısı',
    personalYear: 'Kişisel yıl',
    expression: 'İsim sayısı',
    sun: 'Güneş burcu',
    zodiac: 'Çin burcu',
    animal: 'Hayvan arketipi',
    tarotDaily: 'Bugünün kartı',
    moonTonight: 'Bu geceki ay'
  },
  fmt: {
    ...enUi.fmt,
    bornOn: (y, m, d) => `${d}.${m}.${y} doğumlu`,
    summaryLabel: 'Hikâyeniz',
    summaryHint: '↓ Daha derin okuma için bir karta dokunun',
    cardMore: 'Daha derin oku',
    cardMoreAria: '. Ayrıntıları aç',
    bioUp: '<strong>yükselen faz</strong> (eylem için uygun)',
    bioDown: '<strong>içe dönük faz</strong> (dinlenme için uygun)',
    bioBalanced: '<strong>dengeli faz</strong>'
  },
  bio: { physical: 'Fiziksel', emotional: 'Duygusal', intellectual: 'Zihinsel', intuitive: 'Sezgisel' },
  modal: {
    deepRead: 'Daha derin oku',
    premiumBadge: 'Derin okuma (Premium · isteğe bağlı)',
    premiumPitch: 'Daha derine',
    premiumCta: 'Premium içeriği gör',
    close: 'Kapat'
  },
  share: {
    ...enUi.share,
    panelTitle: 'Paylaşım kartı',
    panelDesc: 'On dokuz hikâyenizi görsel veya metin olarak paylaşın',
    panelSteps: '① Görseli kaydet → ② X veya LINE\'da paylaş.',
    save: 'Görseli kaydet',
    copy: 'Metni kopyala',
    loading: 'Oluşturuluyor…',
    saved: 'Görsel kaydedildi',
    copied: 'Metin kopyalandı'
  },
  premiumShowcase: {
    roadmapSummary: 'Premium yol haritasını gör',
    freeIncludesTitle: 'Ücretsiz dahil',
    ariaLabel: 'Premium planı'
  }
};
