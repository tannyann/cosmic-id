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
import { restoreProfileForm } from './profileStorage.js';
import { bindShareModalEvents, closeShareModal } from './share.js';
import { startAtmosphereWatcher } from './atmosphere.js';
import { bindMuseum } from './museum-ui.js';
import { bindSkepticToggle } from './skeptic.js';
import { initPremium } from './premium.js';

initI18n();
initPremium();
startAtmosphereWatcher();
bindMuseum();
bindSkepticToggle();
mountBirthDateField(MAIN_BIRTH_IDS);
restoreProfileForm();
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

// PWA: 本番ビルドでのみ Service Worker を登録する(開発時の HMR を妨げないため)。
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`)
      .catch(err => console.warn('[sw] registration failed', err));
  });
}
