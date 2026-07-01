/**
 * Feature 7: Milestone Notifications UI(フロント側)。
 *
 * 結果画面下部にオプトインフォーム。
 * 送信先は `/api/notifications/subscribe` を叩く(バックエンドは別途構築)。
 */
import { upcomingMilestones, nextPersonalYearTransition } from './milestones.js';
import { getUI } from './i18n/index.js';
import { escapeHtml } from './util.js';
import { getCurrentContext } from './ui.js';

const API_ENDPOINT = '/api/notifications/subscribe';

function preview(ctx) {
  const birth = new Date(ctx.y, ctx.m - 1, ctx.d);
  const ms = upcomingMilestones(birth, new Date(), 365 * 3);
  const py = nextPersonalYearTransition(birth, new Date(), 365);
  return { upcomingMs: ms.slice(0, 3), nextPY: py };
}

export function bindMilestoneCTA() {
  const results = document.getElementById('results');
  if (!results) return;
  if (document.getElementById('mn-card')) return;

  const ctx = getCurrentContext();
  if (!ctx) return;

  const u = getUI().milestones ?? {};
  const p = preview(ctx);

  const previewList = p.upcomingMs.length
    ? p.upcomingMs.map(m => `
        <li class="mn-preview-item">
          <span class="mn-preview-age">age ${m.age}</span>
          <span class="mn-preview-name">${escapeHtml(u[`ms_${m.key.replace(/-/g, '_')}`] ?? m.key)}</span>
          <span class="mn-preview-when">${m.daysUntil} ${escapeHtml(u.daysToGo ?? 'days to go')}</span>
        </li>
      `).join('')
    : `<li class="mn-preview-empty">${escapeHtml(u.noUpcoming ?? 'No major milestone in the next 3 years.')}</li>`;

  const section = document.createElement('section');
  section.id = 'mn-card';
  section.className = 'mn-card';
  section.innerHTML = `
    <header class="mn-head">
      <p class="eyebrow">${escapeHtml(u.eyebrow ?? 'MILESTONES AHEAD')}</p>
      <h2 class="mn-title">${escapeHtml(u.title ?? 'Get notified for your life\'s turning points')}</h2>
      <p class="mn-lead">${escapeHtml(u.lead ?? 'Saturn Return, Jupiter Return, Personal Year 1 — we\'ll send you a note when they arrive.')}</p>
    </header>
    <ul class="mn-preview">${previewList}</ul>
    <form class="mn-form" id="mn-form">
      <div class="mn-field">
        <label for="mn-email">${escapeHtml(u.emailLabel ?? 'Your email')}</label>
        <input type="email" id="mn-email" required placeholder="you@example.com" autocomplete="email">
      </div>
      <div class="mn-prefs">
        <label class="mn-check"><input type="checkbox" id="mn-pref-ms" checked>${escapeHtml(u.prefMs ?? 'Life milestones')}</label>
        <label class="mn-check"><input type="checkbox" id="mn-pref-py" checked>${escapeHtml(u.prefPY ?? 'Personal Year transitions')}</label>
        <label class="mn-check"><input type="checkbox" id="mn-pref-moon">${escapeHtml(u.prefMoon ?? 'New/Full Moon (twice a month)')}</label>
      </div>
      <div class="mn-actions">
        <button type="submit" class="mn-btn">${escapeHtml(u.subscribe ?? 'Subscribe')}</button>
      </div>
      <p class="mn-privacy">${escapeHtml(u.privacy ?? 'We never share your address. Unsubscribe from any email.')}</p>
      <p class="mn-status" id="mn-status" hidden></p>
    </form>
  `;

  const compat = document.getElementById('compat-card');
  if (compat) compat.after(section);
  else results.appendChild(section);

  const form = section.querySelector('#mn-form');
  const status = section.querySelector('#mn-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = section.querySelector('#mn-email').value.trim();
    const prefs = {
      milestones:   section.querySelector('#mn-pref-ms').checked,
      personalYear: section.querySelector('#mn-pref-py').checked,
      moon:         section.querySelector('#mn-pref-moon').checked
    };

    status.hidden = false;
    status.textContent = u.sending ?? 'Signing you up…';
    status.classList.remove('is-error');

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          birthdate: `${ctx.y}-${String(ctx.m).padStart(2,'0')}-${String(ctx.d).padStart(2,'0')}`,
          prefs
        })
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      status.textContent = u.success ?? 'Done — check your inbox for confirmation.';
    } catch (err) {
      status.textContent = u.error ?? 'Something went wrong. Try again later.';
      status.classList.add('is-error');
      console.error('[milestones] subscribe failed:', err);
    }
  });
}
