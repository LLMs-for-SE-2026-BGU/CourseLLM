# PRD – CourseLLM

This folder holds the Product Requirements (Markdown-only) managed via Pull Requests.

## Files

- `Drafts/` – early feature notes and spikes.
- `prd.md` – the consolidated, **single source of truth**.
- `userStories.md` – user-perspective summaries (by persona).
- `system.md` – system/architecture/API requirements.
- `dataModel.md` – entities, fields, and relationships.
- `glossary.md` – canonical terminology; **update on every new term**.

## Workflow (PR-only)

1. Create a branch (e.g., `feature/onboarding-v2`).
2. Draft in `Drafts/...`.
3. When ready, **integrate** into:
   - `prd.md`
   - `glossary.md` (required if terms changed/added)
   - `userStories.md`, `system.md`, `dataModel.md` as needed
4. Open a PR → CI runs:
   - `prd_linter` (Markdown/style, metadata blocks)
   - `consistency_agent` (LLM checks: glossary terms, cross-file consistency)
5. Human review + CI pass → merge.

> Rationale and details align with the course’s PRD+LLM workflow.
