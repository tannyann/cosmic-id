/**
 * ロケールに応じた日付・数値の表示。
 * fmt / share の日付関数は getUI() 経由でここを参照する。
 */

/** @param {string} htmlLang @param {number} y @param {number} m @param {number} d */
function utcDate(y, m, d) {
  return new Date(Date.UTC(y, m - 1, d));
}

/** @param {string} htmlLang */
function intlLong(htmlLang, y, m, d) {
  return new Intl.DateTimeFormat(htmlLang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(utcDate(y, m, d));
}

/** @param {string} htmlLang */
function intlNumeric(htmlLang, y, m, d) {
  return new Intl.DateTimeFormat(htmlLang, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(utcDate(y, m, d));
}

/**
 * @param {{ code: string, htmlLang: string }} meta
 */
export function createDateFormatters(meta) {
  const { code, htmlLang } = meta;

  const birthDate = (y, m, d) => {
    if (code === 'ja') return `${y}年${m}月${d}日`;
    return intlNumeric(htmlLang, y, m, d);
  };

  const bornOn = (y, m, d) => {
    switch (code) {
      case 'ja':
        return `${y}年 ${m}月 ${d}日 生まれ`;
      case 'en':
        return `Born ${intlLong(htmlLang, y, m, d)}`;
      case 'ko':
        return `${birthDate(y, m, d)} 출생`;
      case 'zh':
        return `${birthDate(y, m, d)} 出生`;
      case 'fr':
        return `Né(e) le ${intlLong(htmlLang, y, m, d)}`;
      case 'de':
        return `Geboren am ${intlLong(htmlLang, y, m, d)}`;
      case 'it':
        return `Nato/a il ${intlLong(htmlLang, y, m, d)}`;
      case 'es':
        return `Nacido/a el ${intlLong(htmlLang, y, m, d)}`;
      case 'tr':
        return `${intlNumeric(htmlLang, y, m, d)} doğumlu`;
      case 'he':
        return `נולד/ה ב-${intlNumeric(htmlLang, y, m, d)}`;
      case 'ar':
        return `وُلد في ${intlNumeric(htmlLang, y, m, d)}`;
      default:
        return intlLong(htmlLang, y, m, d);
    }
  };

  const tarotDailyFor = (y, m, d) => {
    const dStr = intlNumeric(htmlLang, y, m, d);
    switch (code) {
      case 'ja':
        return `${y}/${m}/${d} のあなたへ`;
      case 'en':
        return `For you on ${dStr}`;
      case 'ko':
        return `${dStr} — 당신을 위한 카드`;
      case 'zh':
        return `${dStr} · 今日予你`;
      case 'fr':
        return `Pour vous le ${dStr}`;
      case 'de':
        return `Für Sie am ${dStr}`;
      case 'it':
        return `Per te il ${dStr}`;
      case 'es':
        return `Para ti el ${dStr}`;
      case 'tr':
        return `${dStr} — senin için`;
      case 'he':
        return `ב-${dStr} — בשבילך`;
      case 'ar':
        return `في ${dStr} — لك`;
      default:
        return `For you on ${dStr}`;
    }
  };

  const biorhythmDays = (days) => {
    const n = days.toLocaleString(htmlLang);
    switch (code) {
      case 'ja':
        return `バイオリズム — 出生から ${n} 日目`;
      case 'en':
        return `Biorhythm — day ${n} since birth`;
      case 'ko':
        return `바이오리듬 — 출생 후 ${n}일째`;
      case 'zh':
        return `生物节律 — 出生第 ${n} 天`;
      case 'fr':
        return `Biorythme — jour ${n} depuis la naissance`;
      case 'de':
        return `Biorhythmus — Tag ${n} seit der Geburt`;
      case 'it':
        return `Bioritmo — giorno ${n} dalla nascita`;
      case 'es':
        return `Biorritmo — día ${n} desde el nacimiento`;
      case 'tr':
        return `Biyoritim — doğuştan ${n}. gün`;
      case 'he':
        return `ביוריתם — יום ${n} מאז הלידה`;
      case 'ar':
        return `إيقاع حيوي — اليوم ${n} منذ الولادة`;
      default:
        return `Biorhythm — day ${n} since birth`;
    }
  };

  const bornLine = (birth, age) => {
    switch (code) {
      case 'ja':
        return `${birth} 生まれ ・ ${age} 歳`;
      case 'en':
        return `Born ${birth} · age ${age}`;
      case 'ko':
        return `${birth} 출생 · ${age}세`;
      case 'zh':
        return `${birth} 出生 · ${age} 岁`;
      case 'fr':
        return `Né(e) le ${birth} · ${age} ans`;
      case 'de':
        return `Geboren ${birth} · ${age} Jahre`;
      case 'it':
        return `Nato/a il ${birth} · ${age} anni`;
      case 'es':
        return `Nacido/a el ${birth} · ${age} años`;
      case 'tr':
        return `${birth} · ${age} yaş`;
      case 'he':
        return `${birth} · גיל ${age}`;
      case 'ar':
        return `${birth} · العمر ${age}`;
      default:
        return `Born ${birth} · age ${age}`;
    }
  };

  return { birthDate, bornOn, tarotDailyFor, biorhythmDays, bornLine };
}

/** ISO yyyy-mm-dd → 表示用（フォームのヒント等） */
export function formatBirthFromIso(iso, meta) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return '';
  return createDateFormatters(meta).birthDate(y, m, d);
}
