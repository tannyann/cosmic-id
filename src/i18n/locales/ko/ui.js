/** 한국어 UI（점술 콘텐츠는 영어 폴백） */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — 개인 우주 해석',
    description: '생년월일과 이름으로 수비학, 점성술, 구성 등 여러 체계를 한눈에. 연애 유형·相性 진단 포함.',
    ogTitle: 'COSMIC ID — 개인 우주 해석',
    ogDescription: '열아홉 가지 이야기와 연애 유형·相性. 여러 점술을 하나로.',
    label: '한국어'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: '열아홉 가지 이야기와 연애·相性 진단'
  },
  form: {
    nameLabel: '이름',
    namePlaceholder: '예: 김민수',
    privacyNote: '입력 정보는 기기 안에서만 처리되며 서버로 전송되지 않습니다.',
    birthLabel: '생년월일',
    submit: '해석하기',
    freeBadge: '핵심 기능은 항상 무료',
    premiumDemo: '심층 해석 미리보기(데모)',
    premiumDemoTitle: 'Premium 심층 해석 미리보기(핵심은 무료)'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: '모든 해석은 하나의 가능성일 뿐. 당신의 이야기는 당신이 씁니다.'
  },
  lang: { label: '언어' },
  sections: {
    numerology: ['수비학', 'Numerology'],
    western: ['서양 점성술', 'Western Astrology'],
    eastern: ['동양의 별과 운명', 'Eastern'],
    characters: ['캐릭터占', 'Characters'],
    sacred: ['마야 & 타로', 'Sacred Symbols'],
    nature: ['자연의 상징', 'Nature'],
    cycles: ['오늘의 파동', 'Cycles'],
    lifeMap: ['인생 지도', 'Life Map']
  },
  cards: {
    ...enUi.cards,
    lifepath: '라이프 패스 번호',
    personalYear: '개인의 해',
    sun: '태양 별자리',
    zodiac: '띠',
    animal: '동물占',
    moonTonight: '오늘 밤의 달'
  },
  fmt: {
    ...enUi.fmt,
    cardAria: (system, value) => `${system}, ${value}`,
    summaryLabel: '당신의 이야기',
    summaryHint: '↓ 카드를 눌러 더 깊은 해석 보기',
    cardMore: '더 깊이 읽기'
  },
  bio: { physical: '신체', emotional: '감정', intellectual: '지성', intuitive: '직관' },
  modal: {
    deepRead: '더 깊이 읽기',
    premiumBadge: '더 깊은 해석(Premium · 선택)',
    premiumPitch: '더 깊이',
    premiumCta: 'Premium 내용 보기',
    close: '닫기'
  },
  share: {
    ...enUi.share,
    panelTitle: '공유 카드',
    save: '이미지 저장',
    copy: '텍스트 복사',
    loading: '생성 중…'
  },
  premiumShowcase: {
    roadmapSummary: 'Premium 로드맵 보기',
    freeIncludesTitle: '무료 포함',
    ariaLabel: 'Premium 플랜'
  }
};
