/**
 * 恋愛診断:i18n 対応版。
 * すべての表示文字列は getContent() / getUI() から取得。
 */
import { getContent, getUI } from './i18n/index.js';

function reduceLP(n) {
  let x = n;
  while (x > 9) x = String(x).split('').reduce((a,b)=>a+Number(b), 0);
  return x;
}

const ELEMENT_BASE = { '火': 0, '地': 3, '風': 6, '水': 9,
                       'Fire': 0, 'Earth': 3, 'Air': 6, 'Water': 9 };

function pickArchetypeIndex(sun, lp) {
  const base = ELEMENT_BASE[sun?.element] ?? 0;
  const r = reduceLP(lp);
  const sub = (r - 1) % 3;
  return base + sub;
}

function matchesByKey(matches) {
  const archetypes = getContent().LOVE_ARCHETYPES ?? [];
  return matches
    .map(k => archetypes.find(a => a.key === k))
    .filter(Boolean);
}

export function computeLove(ctx) {
  if (!ctx) throw new Error('[love] context required');

  const archetypes = getContent().LOVE_ARCHETYPES;
  const phasesMap  = getContent().LOVE_PHASE_BY_PY;
  const actionsMap = getContent().LOVE_ACTIONS_BY_MOON;
  if (!archetypes || !phasesMap || !actionsMap) {
    throw new Error('[love] LOVE_* content not registered in the current locale');
  }

  const idx = pickArchetypeIndex(ctx.sun, ctx.lp);
  const archetype = archetypes[idx];
  const phase = phasesMap[reduceLP(ctx.py)] ?? phasesMap[1];
  const action = actionsMap[ctx.mp?.name] ?? Object.values(actionsMap)[0];
  const matches = matchesByKey(archetype.matches);

  const u = getUI().love;
  const summaryLine = `${archetype.name} — ${archetype.catch}. ${u.phaseLabel}: ${phase.label}`;

  return { archetype, phase, action, matches, summaryLine };
}
