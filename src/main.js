/**
 * エントリポイント。
 */

import './styles.css';

import { initI18n, onLocaleChange } from './i18n/index.js';
import {
  bindForm, bindModalEvents, bindPremiumToggle, closeModal,
  renderPremiumShowcase, rerenderIfNeeded
} from './ui.js';
import { bindShareModalEvents, closeShareModal } from './share.js';

initI18n();
renderPremiumShowcase();
bindForm();
bindModalEvents();
bindPremiumToggle();
bindShareModalEvents();

onLocaleChange(() => {
  rerenderIfNeeded();
});

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const share = document.getElementById('share-modal');
  const detail = document.getElementById('modal');
  if (share?.classList.contains('open')) {
    closeShareModal();
    return;
  }
  if (detail?.classList.contains('open')) {
    closeModal();
  }
});
