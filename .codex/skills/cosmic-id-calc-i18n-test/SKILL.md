---
name: cosmic-id-calc-i18n-test
description: Use when changing COSMIC ID calculation functions or Japanese/English locale content, so regression expectations and locale key synchronization stay explicit and testable.
---

# COSMIC ID calculation and i18n verification

Keep calculation tests honest about where an expected value came from and keep `src/i18n/locales/ja` and `src/i18n/locales/en` synchronized.

## Calculation changes

1. Read `AGENTS.md` and the target function. Import `setup-locale.js` before `calculations.js` in tests.
2. Add or update tests with a source tag in the comment: `[既知値]` for project documentation, `[外部照合]` for an independently verified fact, or `[回帰ピン]` for current behavior that is intentionally pinned but not proof of correctness.
3. Freeze time with `vi.setSystemTime` for today-dependent functions. Allow a justified range for timezone-sensitive moon calculations.
4. Include boundary cases: 2/1 before立春, 2/29, 12/31, tarot total 22, and changed function call sites where applicable.
5. Run `npm test` and report the real output. Never change an authoritative expectation merely to make a test pass; report an implementation mismatch.

## Locale changes

1. Treat `src/i18n/locales/{ja,en}/` as canonical. The root `content.js` is an old remnant and must not be used as the source of truth.
2. Update the same key in both locales in one commit. Recursively compare keys with a focused Node script and allow only documented Japanese-only romanization keys.
3. Review tone manually: mysterious but non-deterministic, non-pressuring, and free of negative certainty. Do not add medical, legal, or financial advice.

## Completion gate

The task is complete only when `npm test` passes, the locale comparison reports zero new asymmetries, changed calculations preserve pure functions and dictionary ordering, and the diff contains no accidental Premium-lock or input-escaping changes.
