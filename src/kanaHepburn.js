/**
 * ひらがな・カタカナを簡易ヘボン式ローマ字に変換（数秘の A–Z 換算用フォールバック）。
 * 漢字・英字はスキップ。変換できた文字が無ければ空文字。
 */

const BASE = {
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', ゐ: 'i', ゑ: 'e', を: 'o', ん: 'n',
  ゔ: 'vu', ゕ: 'ka', ゖ: 'ke'
};

const SMALL_Y = { ゃ: 'ya', ゅ: 'yu', ょ: 'yo', ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o' };

/** カタカナ → ひらがな */
function toHiragana(ch) {
  const code = ch.charCodeAt(0);
  if (code >= 0x30a1 && code <= 0x30f6) {
    return String.fromCharCode(code - 0x60);
  }
  return ch;
}

/**
 * @param {string} text
 * @returns {string}
 */
export function kanaToHepburn(text) {
  if (!text?.trim()) return '';
  const normalized = [...text].map(toHiragana).join('');
  let out = '';
  let i = 0;

  while (i < normalized.length) {
    const ch = normalized[i];

    if (/\s/.test(ch)) {
      out += ' ';
      i++;
      continue;
    }

    if (ch === 'ー') {
      if (out.length) {
        const last = out[out.length - 1];
        if ('aiueo'.includes(last)) out += last;
        else if (last === 'u' && out.endsWith('u')) out += 'u';
      }
      i++;
      continue;
    }

    if (ch === 'っ') {
      const next = normalized[i + 1];
      const nextRom = BASE[next];
      if (nextRom) {
        out += nextRom[0];
        i++;
        continue;
      }
      i++;
      continue;
    }

    const small = normalized[i + 1];
    const smallY = small && SMALL_Y[small];
    const baseRom = BASE[ch];

    if (baseRom && smallY) {
      const stem = baseRom.slice(0, -1) || baseRom;
      out += stem + smallY;
      i += 2;
      continue;
    }

    if (baseRom) {
      out += baseRom;
      i++;
      continue;
    }

    i++;
  }

  return out.replace(/\s+/g, ' ').trim();
}

/** かなが含まれていれば true */
export function hasKana(text) {
  return /[\u3040-\u309f\u30a0-\u30ff]/.test(text);
}
