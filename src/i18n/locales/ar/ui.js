/** العربية UI (محتوى العرافة بالإنجليزية مؤقتًا) */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — كوسمولوجيا شخصية',
    description: 'علم الأعداد والتنجيم وKyusei والمزيد من تاريخ الميلاد والاسم. يتضمن نمط الحب وتحليل التوافق.',
    ogTitle: 'COSMIC ID — كосمولوجيا شخصية',
    ogDescription: 'تسعة عشر قصة، نوع حبك وتوافقك. أنظمة متعددة، قراءة واحدة.',
    label: 'العربية'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: 'تسعة عشر قصة، الحب والتوافق'
  },
  form: {
    nameLabel: 'اسمك',
    namePlaceholder: 'مثال: فاطمة أحمد',
    privacyNote: 'تُعالَج بياناتك على هذا الجهاز فقط — لا تُرسل إلى أي خادم.',
    birthLabel: 'تاريخ الميلاد',
    submit: 'اكشف',
    freeBadge: 'مجاني — دائمًا',
    premiumDemo: 'معاينة القراءات العميقة (تجريبي)',
    premiumDemoTitle: 'معاينة Premium (التجربة الأساسية تبقى مجانية)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: 'كل قراءة هي إمكانية واحدة. أنت تكتب قصتك.'
  },
  lang: { label: 'اللغة' },
  sections: {
    numerology: ['علم الأعداد', 'Numerology'],
    western: ['التنجيم الغربي', 'Western Astrology'],
    eastern: ['نجوم الشرق', 'Eastern'],
    characters: ['شخصيات', 'Characters'],
    sacred: ['المايا والتاروت', 'Sacred Symbols'],
    nature: ['رموز الطبيعة', 'Nature'],
    cycles: ['أمواج اليوم', 'Cycles'],
    lifeMap: ['خريطة الحياة', 'Life Map']
  },
  cards: {
    ...enUi.cards,
    lifepath: 'رقم مسار الحياة',
    personalYear: 'السنة الشخصية',
    expression: 'رقم الاسم',
    sun: 'برج الشمس',
    zodiac: 'الأبراج الصينية',
    animal: 'نمط الحيوان',
    tarotDaily: 'بطاقة اليوم',
    moonTonight: 'قمر الليلة'
  },
  fmt: {
    ...enUi.fmt,
    bornOn: (y, m, d) => `وُلد في ${d}/${m}/${y}`,
    summaryLabel: 'قصتك',
    summaryHint: '↓ اضغط على بطاقة لقراءة أعمق',
    cardMore: 'اقرأ أعمق',
    cardMoreAria: '. افتح التفاصيل',
    bioUp: '<strong>مرحلة صاعدة</strong> (مناسبة للفعل)',
    bioDown: '<strong>مرحلة تأملية</strong> (مناسبة للراحة)',
    bioBalanced: '<strong>مرحلة متوازنة</strong>'
  },
  bio: { physical: 'جسدي', emotional: 'عاطفي', intellectual: 'فكري', intuitive: 'حدسي' },
  modal: {
    deepRead: 'اقرأ أعمق',
    premiumBadge: 'قراءة أعمق (Premium · اختياري)',
    premiumPitch: 'تعمّق',
    premiumCta: 'عرض محتوى Premium',
    close: 'إغلاق'
  },
  share: {
    ...enUi.share,
    panelTitle: 'بطاقة المشاركة',
    panelDesc: 'شارك قصصك التسعة عشر كصورة أو نص',
    panelSteps: '① احفظ الصورة → ② انشر على X أو LINE.',
    save: 'حفظ الصورة',
    copy: 'نسخ النص',
    loading: 'جارٍ الإنشاء…',
    saved: 'تم حفظ الصورة',
    copied: 'تم نسخ النص'
  },
  premiumShowcase: {
    roadmapSummary: 'عرض خارطة Premium',
    freeIncludesTitle: 'مشمول مجانًا',
    ariaLabel: 'خطة Premium'
  }
};
