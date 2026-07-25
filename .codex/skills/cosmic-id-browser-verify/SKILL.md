---
name: cosmic-id-browser-verify
description: Use when a COSMIC ID change affects the UI, form flow, responsive layout, PWA behavior, or deployment smoke test and needs an efficient browser-based verification.
---

# COSMIC ID browser verification

Use this only for UI-impacting work. Start from the canonical repository and avoid spending screenshots or tokens on checks that can be machine-tested.

## Workflow

1. Read `AGENTS.md` and identify the branch under test. Run `npm run build`; fix build failures before starting the preview.
2. Start the built preview on an available port. Exercise the form with the standard date `1990-05-15` and a safe test name.
3. Run machine checks in the page: the result contains no `undefined`, expected cards and modal controls exist, user-entered strings are escaped, and at 375px `scrollWidth === clientWidth`.
4. For PWA changes, verify the manifest, service worker scope, installability signals, and a real offline result after the page is cached. Kill the preview server after checking.
5. Take at most one screenshot per PR, only when visual evidence adds information beyond the machine checks. Record the exact JSON-like results in the PR report.
6. For a deployed site, verify the public URL after CI reports success. CI green alone is insufficient.

## Guardrails

- Do not use broad DOM dumps that include thousands of `<option>` values; query the target elements or execute focused JavaScript.
- Do not report a browser check as complete if the server was not reachable, the viewport was not set, or offline behavior was not actually tested.
- Do not alter product copy, fortune-telling claims, or Premium gating while doing a visual check.
