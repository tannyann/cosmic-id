/**
 * 統合ナラティブ生成 — 十九体系を一本の散文に編む。
 * ローカル生成がデフォルト。VITE_NARRATIVE_API_URL があれば API を優先。
 */
import { luckyCompass } from './calculations.js';
import { getContent, getUI, getLocale } from './i18n/index.js';

/** @typedef {{ source: 'ai'|'local', paragraphs: string[], hook: string, caption: string }} NarrativeResult */

/** API 送信用の要約ペイロード */
export function buildNarrativePayload(ctx) {
  const { LIFE_PATH_MEANINGS, PERSONAL_YEAR_MEANINGS } = getContent();
  const lp = LIFE_PATH_MEANINGS[ctx.lp];
  return {
    locale: getLocale(),
    name: ctx.name,
    nameRoman: ctx.nameRoman || '',
    birth: { year: ctx.y, month: ctx.m, day: ctx.d },
    lifePath: { num: ctx.lp, label: lp?.label ?? '', desc: lp?.desc ?? '' },
    personalYear: { num: ctx.py, year: ctx.currentYear, theme: PERSONAL_YEAR_MEANINGS[ctx.py] ?? '' },
    sun: { name: ctx.sun.name, element: ctx.sun.element },
    moonTrait: ctx.mt.name,
    moonTonight: ctx.mp.name,
    zodiac: ctx.cz.name,
    kyusei: ctx.ks.name,
    gogyou: ctx.gy.element,
    animal: ctx.an.name,
    celtic: ctx.ct.name,
    maya: { kin: ctx.my.kin, seal: ctx.my.seal, tone: ctx.my.tone },
    sixty: ctx.sj.name,
    tarotBirth: ctx.tb.name,
    tarotDaily: ctx.dt.name,
    birthstone: ctx.bs.name,
    birthflower: ctx.bf,
    expression: ctx.expr?.latin ?? ctx.en,
    biorhythm: {
      physical: ctx.bio.physical,
      emotional: ctx.bio.emotional,
      intellectual: ctx.bio.intellectual,
      intuitive: ctx.bio.intuitive
    }
  };
}

/** @param {object} ctx @returns {Promise<NarrativeResult|null>} */
export async function fetchAiNarrative(ctx) {
  const url = import.meta.env.VITE_NARRATIVE_API_URL;
  if (!url) return null;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildNarrativePayload(ctx)),
      signal: AbortSignal.timeout(28000)
    });
    if (!res.ok) return null;
    const data = await res.json();
    const paragraphs = Array.isArray(data.paragraphs)
      ? data.paragraphs.map(String).filter(Boolean)
      : [];
    if (!paragraphs.length) return null;
    return {
      source: 'ai',
      paragraphs,
      hook: String(data.hook || paragraphs[0]),
      caption: data.caption ? String(data.caption) : ''
    };
  } catch {
    return null;
  }
}

/** @param {object} ctx @returns {NarrativeResult} */
export function generateLocalNarrative(ctx) {
  const n = getUI().narrative;
  const { LIFE_PATH_MEANINGS, PERSONAL_YEAR_MEANINGS } = getContent();
  const lp = LIFE_PATH_MEANINGS[ctx.lp];
  const pyTheme = PERSONAL_YEAR_MEANINGS[ctx.py] ?? '';
  const lucky = luckyCompass(ctx.lp, ctx.sun.element, ctx.ks.element, ctx.gy.element);
  const bioAvg = (ctx.bio.physical + ctx.bio.emotional + ctx.bio.intellectual + ctx.bio.intuitive) / 4;

  const paragraphs = [
    n.para1(ctx.name, lp?.label ?? '', lp?.desc ?? ''),
    n.para2(ctx.sun.name, ctx.sun.element, ctx.cz.name, ctx.ks.name, ctx.gy.element),
    n.para3(ctx.an.name, ctx.ct.name, ctx.my.kin, ctx.my.seal, ctx.sj.name),
    n.para4(ctx.tb.name, ctx.dt.name, ctx.bs.name, ctx.bf),
    n.para5(ctx.currentYear, ctx.py, pyTheme),
    n.para6(ctx.mp.name, bioAvg, ctx.mt.name),
    n.para7(ctx.sun.element, ctx.lp, ctx.expr?.latin ?? ctx.en),
    n.para8(lucky.colors[0], lucky.days[0], ctx.name)
  ];

  const hook = n.hook(ctx.name, lp?.label ?? '');
  const excerpt = paragraphs.slice(0, 2).join('\n\n');
  const caption = n.instagramCaption(ctx.name, hook, excerpt);

  return { source: 'local', paragraphs, hook, caption };
}

/** @param {object} ctx @returns {Promise<NarrativeResult>} */
export async function generateNarrative(ctx) {
  const ai = await fetchAiNarrative(ctx);
  if (ai) {
    const n = getUI().narrative;
    return {
      ...ai,
      caption: ai.caption || n.instagramCaption(
        ctx.name,
        ai.hook,
        ai.paragraphs.slice(0, 2).join('\n\n')
      )
    };
  }
  return generateLocalNarrative(ctx);
}
