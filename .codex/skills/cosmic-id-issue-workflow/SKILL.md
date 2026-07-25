---
name: cosmic-id-issue-workflow
description: Use when implementing or reviewing a COSMIC ID GitHub Issue, from a fresh issue branch through scoped commits, tests, push, pull request, and independent review.
---

# COSMIC ID Issue workflow

Use one Issue per branch and one PR per Issue. Work only in `/Users/mizutanikouyou/cosmic_id`, never in the older Claude or GitHub copies.

## Implementation

1. Read `AGENTS.md`, `docs/ORG.md`, the Issue's "first read" section, and relevant files under `docs/audit/` and `docs/learnings/`.
2. Run `git fetch origin`, then create or reset a uniquely named branch from `origin/main`: `issue/I-<number>-<slug>`. Do not edit main directly.
3. Implement the smallest change that meets the Issue's acceptance criteria. Preserve the separation: words in content/deeper, calculations in `src/calculations.js`, and rendering in `src/ui.js`.
4. For calculation changes, keep functions pure, retain dictionary ordering, document the chosen school or formula in a comment, and add tagged expectations: `[既知値]`, `[外部照合]`, or `[回帰ピン]`.
5. Commit meaningful units early enough to survive session interruption. Keep unrelated changes out. Push the branch only after local checks pass.
6. Create a PR with `Closes #N`, scope, exact test output, browser checks when applicable, and unconfirmed items. Use the project's Issue/PR format; do not merge it yourself.

## Review gate

Reviewers must read the full diff and independently rerun acceptance criteria. Calculation PRs require `npm test` plus one reviewer-selected case. UI PRs use the browser verification skill. Docs/CSS-only PRs get a focused diff review without unnecessary heavy testing. Two failed review cycles require escalation to the next model tier.

## Guardrails

- Never bypass `escapeHtml()` for user input, change Premium locks, or store unlock state in localStorage.
- Never choose a disputed fortune-telling school, Premium price, or unlock scope on behalf of the user; present options and stop at the decision gate.
- Do not run parallel agents on the same files. Keep parallel delegation to two agents maximum.
- Do not claim tests pass without actual output. A push is not proof that GitHub Pages deployed.
