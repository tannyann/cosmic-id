/**
 * Feature 7: Milestone 検出(純粋関数)。
 * バックエンドの cron ジョブから呼ばれる想定と、フロントでの近未来通知プレビュー用。
 */

const DAY_MS = 86400000;
const YEAR_DAYS = 365.25;

const MILESTONE_DEFS = [
  { key: 'saturn-return-1',  age: 29.5, tier: 'major' },
  { key: 'saturn-return-2',  age: 58.5, tier: 'major' },
  { key: 'saturn-return-3',  age: 88.5, tier: 'major' },
  { key: 'jupiter-return',   ages: [12, 24, 36, 48, 60, 72, 84], tier: 'medium' },
  { key: 'midlife',          age: 40, tier: 'medium' },
  { key: 'chiron-return',    age: 50.5, tier: 'major' }
];

/** birthdate と today から、次に来るマイルストーンを days_until つきで返す */
export function upcomingMilestones(birthdate, today = new Date(), windowDays = 60) {
  const b = new Date(birthdate);
  const t = new Date(today);
  const list = [];
  for (const def of MILESTONE_DEFS) {
    const ages = def.ages ?? [def.age];
    for (const age of ages) {
      const eventDate = new Date(b.getTime() + age * YEAR_DAYS * DAY_MS);
      const days = Math.floor((eventDate - t) / DAY_MS);
      if (days >= 0 && days <= windowDays) {
        list.push({ key: def.key, tier: def.tier, age, date: eventDate, daysUntil: days });
      }
    }
  }
  return list.sort((a, b) => a.daysUntil - b.daysUntil);
}

/** Personal Year 1 の始まりが近づいているか(誕生月の 7 日前まで) */
export function nextPersonalYearTransition(birthdate, today = new Date(), windowDays = 14) {
  const b = new Date(birthdate);
  const t = new Date(today);
  const yearNow = t.getFullYear();
  const anniv = new Date(yearNow, b.getMonth(), b.getDate());
  const alt = anniv < t ? new Date(yearNow + 1, b.getMonth(), b.getDate()) : anniv;
  const days = Math.floor((alt - t) / DAY_MS);
  return (days >= 0 && days <= windowDays) ? { date: alt, daysUntil: days } : null;
}

/** 次の新月/満月まで(±14日ウィンドウ) */
const REF_NEW = new Date(Date.UTC(2000, 0, 6, 18, 14));
const SYNODIC = 29.530588;

export function nextMoonEvents(today = new Date(), windowDays = 14) {
  const days = (today - REF_NEW) / DAY_MS;
  const phase = ((days % SYNODIC) + SYNODIC) % SYNODIC;
  const untilNew  = (SYNODIC - phase) % SYNODIC;
  const untilFull = (phase < SYNODIC / 2) ? (SYNODIC / 2 - phase) : (SYNODIC + SYNODIC / 2 - phase);
  const events = [];
  if (untilNew <= windowDays) events.push({ type: 'new-moon',  daysUntil: Math.round(untilNew) });
  if (untilFull <= windowDays) events.push({ type: 'full-moon', daysUntil: Math.round(untilFull) });
  return events;
}

/**
 * バックエンド用 API:登録された全ユーザーに対して、今日通知すべき人と内容を列挙
 * サーバー cron から日次で呼ぶ。
 *
 * @param users [{ id, email, birthdate, prefs }]
 * @returns [{ userId, email, kind, payload }]
 */
export function batchNotificationTargets(users, today = new Date()) {
  const outbox = [];
  for (const u of users) {
    if (u.prefs?.milestones) {
      const ms = upcomingMilestones(u.birthdate, today, 30);
      for (const m of ms) {
        if (m.daysUntil === 30 || m.daysUntil === 7 || m.daysUntil === 0) {
          outbox.push({ userId: u.id, email: u.email, kind: 'milestone', payload: m });
        }
      }
    }
    if (u.prefs?.personalYear) {
      const py = nextPersonalYearTransition(u.birthdate, today, 7);
      if (py && py.daysUntil === 7) {
        outbox.push({ userId: u.id, email: u.email, kind: 'personal-year', payload: py });
      }
    }
    if (u.prefs?.moon) {
      const moons = nextMoonEvents(today, 3);
      for (const ev of moons) {
        if (ev.daysUntil === 0) {
          outbox.push({ userId: u.id, email: u.email, kind: 'moon', payload: ev });
        }
      }
    }
  }
  return outbox;
}
