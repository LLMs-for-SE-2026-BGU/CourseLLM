# Copilot Instructions – CourseLLM PRD Workflow

## Project Context
This repository contains all PRD documentation for the CourseLLM project.

**Vision:**  
Help teachers and students in a CS Department learn and teach better using AI that enhances existing course material.  
**Scope:**  
Focus on improving accessibility, interactivity, and assessment while ensuring responsible AI use.

---

## Folder Structure Reference
- `/PRD/Drafts/` → working documents and brainstorming.
- `/PRD/PRD.md` → the live PRD file, updated via PRs.
- `/PRD/Drafts/Glossary.md` → defines project-wide terminology.
- `/PRD/Drafts/UserStories.md` → contains detailed user stories per persona.
- `/PRD/Drafts/AcceptanceCriteria.md` → measurable release conditions.
- `/PRD/Drafts/DataModel.md` → conceptual data model.

---

## Copilot Behavior Rules

### Tone & Style
- Write in professional yet approachable English.  
- Keep explanations concise but clear for both teachers and students.  
- Use structured Markdown: `##` for main sections, bullet points for lists, tables for KPIs.

### Document Structure for PRD.md
1. Overview & Vision  
2. Problem Statement  
3. Objectives & Success Metrics  
4. Target Audience & Personas  
5. Features and Functionality  
   - Student Features  
   - Teacher Features  
6. Constraints & Assumptions  
7. Dependencies & Risks  
8. Timeline / Milestones  
9. Glossary & References

### Workflow for Drafts
1. Generate early ideas in `/PRD/Drafts/DraftPRD.md`.  
2. Use the brainstorm content from `/PRD/Drafts/CourseLLM.md` as context.  
3. When ready, summarize and promote refined sections into `/PRD/PRD.md`.  
4. Maintain consistent terms using `/PRD/Drafts/Glossary.md`.  
5. Record key metrics and release checks in `/PRD/Drafts/AcceptanceCriteria.md`.  

### Collaboration Mode
- Always include comments like  
  `<!-- Copilot: suggest KPIs for this feature -->`  
  or  
  `<!-- Copilot: expand section using the CourseLLM.md context -->`.
- Copilot should assist in drafting, refining, and checking alignment — not make final decisions.  
- You (the human reviewer) approve all final text in PRD.md.

### Persona Simulation
Copilot may simulate:
- **Student** – focuses on usability and clarity.  
- **Teacher** – ensures educational alignment.  
- **Engineer** – checks technical feasibility.

---

## Review Policy
- Every AI-generated section must be manually reviewed for correctness and consistency.
- Do not let Copilot overwrite Glossary or Acceptance Criteria without review.
- Use clear commit messages when promoting drafts into `PRD.md`.

---

## Example Prompt
> “Using context from /PRD/Drafts/CourseLLM.md, expand the Student Features section in DraftPRD.md with user stories and measurable success metrics.”
