/** 简体中文 UI（占术内容暂用英文） */
import { ui as enUi } from '../en/ui.js';

export const ui = {
  ...enUi,
  meta: {
    ...enUi.meta,
    title: 'COSMIC ID — 个人宇宙解读',
    description: '根据出生日期与姓名，横览数秘、占星、九星等多种体系。含恋爱类型与相性分析。',
    ogTitle: 'COSMIC ID — 个人宇宙解读',
    ogDescription: '十九个故事，加上恋爱类型与相性。多种占卜，一次读懂。',
    label: '中文'
  },
  header: {
    eyebrow: 'Personal Cosmology',
    subtitle: '十九个故事，加上恋爱与相性解读'
  },
  form: {
    nameLabel: '姓名',
    namePlaceholder: '例：王明',
    privacyNote: '输入信息仅在您的设备上处理，不会发送到服务器。',
    birthLabel: '出生日期',
    submit: '解读',
    freeBadge: '核心功能永久免费',
    premiumDemo: '预览深层解读（演示）',
    premiumDemoTitle: '预览 Premium 深层解读（核心体验仍免费）'
  },
  footer: {
    line1: 'COSMIC ID — Personal Cosmology Prototype',
    line2: '每种解读只是一种可能。你的故事由你书写。'
  },
  lang: { label: '语言' },
  sections: {
    numerology: ['数秘术', 'Numerology'],
    western: ['西洋占星', 'Western Astrology'],
    eastern: ['东方星命', 'Eastern'],
    characters: ['角色占卜', 'Characters'],
    sacred: ['玛雅与塔罗', 'Sacred Symbols'],
    nature: ['自然象征', 'Nature'],
    cycles: ['今日之波', 'Cycles'],
    lifeMap: ['人生地图', 'Life Map']
  },
  cards: {
    ...enUi.cards,
    lifepath: '生命路径数',
    personalYear: '个人年',
    expression: '姓名数字',
    sun: '太阳星座',
    zodiac: '生肖',
    animal: '动物占卜',
    tarotDaily: '今日卡牌',
    moonTonight: '今夜之月'
  },
  fmt: {
    ...enUi.fmt,
    cardAria: (system, value) => `${system}、${value}`,
    summaryLabel: '你的故事',
    summaryHint: '↓ 点击卡片查看更深解读',
    cardMore: '深入解读',
    bioUp: '<strong>上升阶段</strong>（适合行动与表达）',
    bioDown: '<strong>内省阶段</strong>（适合休息与整理）',
    bioBalanced: '<strong>平衡阶段</strong>'
  },
  bio: { physical: '身体', emotional: '情感', intellectual: '智力', intuitive: '直觉' },
  modal: {
    deepRead: '深入解读',
    premiumBadge: '更深解读（Premium · 可选）',
    premiumPitch: '继续深入',
    premiumCta: '查看 Premium 内容',
    close: '关闭'
  },
  share: {
    ...enUi.share,
    panelTitle: '分享卡片',
    panelDesc: '将十九个故事以图片或文字分享',
    save: '保存图片',
    copy: '复制文字',
    loading: '生成中…',
    canvasFooter: '每种解读只是一种可能。你的故事由你书写。'
  },
  premiumShowcase: {
    roadmapSummary: '查看 Premium 路线图',
    freeIncludesTitle: '免费包含',
    ariaLabel: 'Premium 方案'
  }
};
