---
name: cosmic-id-fortune-audit
description: Use when auditing a COSMIC ID divination calculation, comparing schools or sources, or documenting uncertainty without silently changing the project's chosen method.
---

# COSMIC ID fortune audit

The goal is an evidence-backed comparison, not an AI decision about which tradition is correct. Preserve the current implementation until the user chooses a change.

## Workflow

1. Read `AGENTS.md`, the target function in `src/calculations.js`, related tests, and the closest report under `docs/audit/`.
2. State the current formula and implementation assumptions. Separate calculation logic from content wording and UI behavior.
3. Consult primary or authoritative sources for the relevant school. Record direct URLs and access dates. If a claim cannot be verified, label it `[未確認]`.
4. Test at least three concrete birth dates, including a boundary date when relevant. Show current output, source output, and the difference; never cherry-pick only a matching example.
5. Save a report in `docs/audit/` with: current method, comparison sources, examples, confidence/unknowns, options with trade-offs, and a recommended next step.
6. Add or update tests only when the expected value has a tagged source. If the difference is a human choice of school, stop for the user's decision instead of editing the formula.

## Guardrails

- Do not convert an "independent" or simplified system into an official trademarked system without explicit approval and source work.
- Do not write deterministic predictions or medical, legal, or financial advice.
- Keep the tone exploratory: the result is a narrative catalyst, not a fact about a person's future.
- If the research session may be interrupted, write and commit one confirmed finding at a time.
