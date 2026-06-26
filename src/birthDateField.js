/**
 * 生年月日入力（月・日・年のセレクト）。
 * type=date は OS ロケールの表示（年/月/日）が混在するため使わない。
 */
import { getBundle, getUI } from './i18n/index.js';
import { formatBirthFromIso } from './i18n/dateFormat.js';

const YEAR_MIN = 1920;

function pad2(n) {
  return String(n).padStart(2, '0');
}

function yearMax() {
  return new Date().getFullYear();
}

function monthLabels(htmlLang) {
  return Array.from({ length: 12 }, (_, i) => {
    const label = new Intl.DateTimeFormat(htmlLang, {
      month: 'short',
      timeZone: 'UTC'
    }).format(new Date(Date.UTC(2020, i, 1)));
    return { value: i + 1, label };
  });
}

function isValidDate(y, m, d) {
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
}

function readParts(monthEl, dayEl, yearEl) {
  const y = Number(yearEl?.value);
  const m = Number(monthEl?.value);
  const d = Number(dayEl?.value);
  if (!y || !m || !d) return null;
  if (!isValidDate(y, m, d)) return null;
  return { y, m, d };
}

function syncHidden(monthEl, dayEl, yearEl, hiddenEl, hintEl) {
  const parts = readParts(monthEl, dayEl, yearEl);
  if (!parts) {
    if (hiddenEl) hiddenEl.value = '';
    if (hintEl) hintEl.textContent = '';
    return null;
  }
  const iso = `${parts.y}-${pad2(parts.m)}-${pad2(parts.d)}`;
  if (hiddenEl) hiddenEl.value = iso;
  if (hintEl) {
    hintEl.textContent = formatBirthFromIso(iso, getBundle().meta);
  }
  return parts;
}

function fillDayOptions(dayEl, maxDay = 31) {
  if (!dayEl) return;
  const current = dayEl.value;
  dayEl.innerHTML = [
    `<option value="">${getUI().form.birthDayPlaceholder ?? ''}</option>`,
    ...Array.from({ length: maxDay }, (_, i) => {
      const d = i + 1;
      return `<option value="${d}">${d}</option>`;
    })
  ].join('');
  if (current && Number(current) <= maxDay) dayEl.value = current;
}

function fillYearOptions(yearEl) {
  if (!yearEl) return;
  const current = yearEl.value;
  const max = yearMax();
  const u = getUI().form;
  const opts = [`<option value="">${u.birthYearPlaceholder ?? ''}</option>`];
  for (let y = max; y >= YEAR_MIN; y--) {
    opts.push(`<option value="${y}">${y}</option>`);
  }
  yearEl.innerHTML = opts.join('');
  if (current && Number(current) >= YEAR_MIN && Number(current) <= max) {
    yearEl.value = current;
  }
}

function fillMonthOptions(monthEl) {
  if (!monthEl) return;
  const current = monthEl.value;
  const u = getUI().form;
  const labels = monthLabels(getBundle().meta.htmlLang);
  monthEl.innerHTML = [
    `<option value="">${u.birthMonthPlaceholder ?? ''}</option>`,
    ...labels.map(({ value, label }) => `<option value="${value}">${label}</option>`)
  ].join('');
  if (current) monthEl.value = current;
}

/**
 * @param {{
 *   monthId: string,
 *   dayId: string,
 *   yearId: string,
 *   hiddenId: string,
 *   hintId?: string,
 *   labelMonthId?: string,
 *   labelDayId?: string,
 *   labelYearId?: string
 * }} ids
 */
export function mountBirthDateField(ids) {
  const monthEl = document.getElementById(ids.monthId);
  const dayEl = document.getElementById(ids.dayId);
  const yearEl = document.getElementById(ids.yearId);
  const hiddenEl = document.getElementById(ids.hiddenId);
  const hintEl = ids.hintId ? document.getElementById(ids.hintId) : null;

  if (!monthEl || !dayEl || !yearEl || !hiddenEl) return;

  fillMonthOptions(monthEl);
  fillDayOptions(dayEl);
  fillYearOptions(yearEl);

  const onChange = () => {
    const m = Number(monthEl.value);
    const y = Number(yearEl.value);
    let maxDay = 31;
    if (m && y) {
      maxDay = new Date(y, m, 0).getDate();
      if (Number(dayEl.value) > maxDay) dayEl.value = '';
    }
    if (m && y) fillDayOptions(dayEl, maxDay);
    syncHidden(monthEl, dayEl, yearEl, hiddenEl, hintEl);
  };

  if (!monthEl.dataset.bound) {
    monthEl.addEventListener('change', onChange);
    dayEl.addEventListener('change', onChange);
    yearEl.addEventListener('change', onChange);
    monthEl.dataset.bound = '1';
    dayEl.dataset.bound = '1';
    yearEl.dataset.bound = '1';
  }

  onChange();
}

/** セレクトの表示文言を現在ロケールで更新（値は保持） */
export function refreshBirthDateField(ids) {
  const monthEl = document.getElementById(ids.monthId);
  const dayEl = document.getElementById(ids.dayId);
  const yearEl = document.getElementById(ids.yearId);
  const hiddenEl = document.getElementById(ids.hiddenId);
  const hintEl = ids.hintId ? document.getElementById(ids.hintId) : null;

  if (!monthEl || !dayEl || !yearEl) return;

  const saved = readParts(monthEl, dayEl, yearEl)
    ?? (hiddenEl?.value ? parseIso(hiddenEl.value) : null);

  fillMonthOptions(monthEl);
  fillYearOptions(yearEl);
  if (saved) {
    monthEl.value = String(saved.m);
    yearEl.value = String(saved.y);
    fillDayOptions(dayEl, new Date(saved.y, saved.m, 0).getDate());
    dayEl.value = String(saved.d);
  } else {
    fillDayOptions(dayEl);
  }

  syncHidden(monthEl, dayEl, yearEl, hiddenEl, hintEl);
}

export function refreshBirthDateFieldLabels(ids) {
  const u = getUI().form;
  const set = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  if (ids.labelMonthId) set(ids.labelMonthId, u.birthMonthLabel);
  if (ids.labelDayId) set(ids.labelDayId, u.birthDayLabel);
  if (ids.labelYearId) set(ids.labelYearId, u.birthYearLabel);
  refreshBirthDateField(ids);
}

function parseIso(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d || !isValidDate(y, m, d)) return null;
  return { y, m, d };
}

/** @param {string} hiddenId */
export function getBirthDateValue(hiddenId) {
  const hidden = document.getElementById(hiddenId);
  if (!hidden?.value) return null;
  return parseIso(hidden.value);
}

/** @param {string} hiddenId @param {number} y @param {number} m @param {number} d */
export function setBirthDateValue(ids, y, m, d) {
  const monthEl = document.getElementById(ids.monthId);
  const dayEl = document.getElementById(ids.dayId);
  const yearEl = document.getElementById(ids.yearId);
  const hiddenEl = document.getElementById(ids.hiddenId);
  const hintEl = ids.hintId ? document.getElementById(ids.hintId) : null;
  if (!monthEl || !dayEl || !yearEl || !isValidDate(y, m, d)) return;

  yearEl.value = String(y);
  monthEl.value = String(m);
  fillDayOptions(dayEl, new Date(y, m, 0).getDate());
  dayEl.value = String(d);
  syncHidden(monthEl, dayEl, yearEl, hiddenEl, hintEl);
}

export const MAIN_BIRTH_IDS = {
  monthId: 'birth-month',
  dayId: 'birth-day',
  yearId: 'birth-year',
  hiddenId: 'birthdate',
  hintId: 'hint-birth',
  labelMonthId: 'label-birth-month',
  labelDayId: 'label-birth-day',
  labelYearId: 'label-birth-year'
};

export const COMPAT_BIRTH_IDS = {
  monthId: 'compat-birth-month',
  dayId: 'compat-birth-day',
  yearId: 'compat-birth-year',
  hiddenId: 'compat-birth',
  hintId: 'hint-compat-birth',
  labelMonthId: 'label-compat-birth-month',
  labelDayId: 'label-compat-birth-day',
  labelYearId: 'label-compat-birth-year'
};
