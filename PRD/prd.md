# CourseLLM – Product Requirements Document (PRD)

## Status

LIVE (MVP draft – 2025-11-05)

## Owner

PM: Daniel Gal

## Vision

Enable CS students to learn **better, deeper, faster** and help teachers **teach more effectively** with AI guidance grounded in existing course materials—without replacing them. [source: course brainstorm]

## Objectives (MVP)

- Improve **students’ mastery** of existing course content via guided Q&A and personalized practice.
- Help **teachers author, curate, and validate** materials, quizzes, and assignments; monitor progress and detect issues.
- Enforce **scoped assistance** (answers remain within course content) and **consistent terminology** via a shared glossary.

## Target Audience

- Primary: **Students** in the CS Faculty @ BGU.
- Secondary: **Course staff** (lecturers/TAs) authoring and monitoring content.

## Problem & Motivation

- Teachers worry AI can become a shortcut that **bypasses real learning**; students want **faster, clearer, more personalized** study help.
- The tool augments learning around **existing** content (notes, slides, exams), integrates additional vetted resources, and guides study trajectories.

## MVP Scope (Capabilities)

1. **Student assistant (scoped chatbot)**

   - Retrieval-augmented Q&A strictly over course materials and vetted links.
   - Socratic mode: clarify intent, confront misconceptions, and avoid direct spoon-feeding.
   - Personalized practice: auto-generate quizzes/exercises from selected topics.

2. **Teacher console**

   - Upload & index course files; manage resource curation.
   - Define “learning trajectories” (topic graph, prerequisites).
   - Generate assignments/exams; verify testability and “LLM resilience”.
   - Progress monitoring; flag knowledge gaps; basic plagiarism/cheating detection.

3. **Governance**
   - **Glossary-first** terminology; answers conform to course-defined terms.
   - **Logging & metrics** for learning impact (usage, mastery, coverage).

## Non-Goals (MVP)

- Replace existing general-purpose LLM tools.
- Create new course content from scratch unrelated to materials.
- Full LMS replacement.

## Success Metrics (MVP)

- ≥ X% improvement in quiz mastery per student after N sessions.
- ≥ Y% reduction in staff time to author/validate assignments.
- ≥ Z% of answers sourced from **approved** materials (scope adherence).
- Latency SLO: p95 answer ≤ 3s over indexed courses.

## Assumptions & Constraints

- Materials are provided in readable formats (PDF, MD, PPTX export).
- Compliant logging for analytics; respect privacy and academic policy.
- Model choice may be local or API-based; must support RAG and safety filters.

## Release Plan (MVP)

- Week 1–2: Indexing + scoped Q&A on 1 pilot course.
- Week 3: Quiz generation + trajectory authoring.
- Week 4: Progress dashboards + basic cheating signals.
- Week 5: Class pilot and evaluation.

## Dependencies / Risks

- Content quality and coverage; permission to use materials.
- Guardrails to avoid out-of-scope or hallucinated content.
- Fair-use and academic integrity policies.

## References

- CourseLLM brainstorm notes and workflow overview.
