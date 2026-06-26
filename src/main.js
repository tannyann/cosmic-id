/**
 * エントリポイント。
 */

import './styles.css';

import { initI18n, onLocaleChange } from './i18n/index.js';
import {
  mountBirthDateField, refreshBirthDateFieldLabels,
  MAIN_BIRTH_IDS, COMPAT_BIRTH_IDS
} from './birthDateField.js';
import {
  bindForm, bindModalEvents, bindPremiumToggle, closeModal,
  renderPremiumShowcase, rerenderIfNeeded
} from './ui.js';
import { bindShareModalEvents, closeShareModal } from './share.js';

initI18n();
mountBirthDateField(MAIN_BIRTH_IDS);
renderPremiumShowcase();
bindForm();
bindModalEvents();
bindPremiumToggle();
bindShareModalEvents();

onLocaleChange(() => {
  refreshBirthDateFieldLabels(MAIN_BIRTH_IDS);
  if (document.getElementById(COMPAT_BIRTH_IDS.monthId)) {
    refreshBirthDateFieldLabels(COMPAT_BIRTH_IDS);
  }
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
