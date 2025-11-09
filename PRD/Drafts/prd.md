# CourseLLM – Product Requirements Document (PRD)

## Status
DRAFT (MVP - 2025-11-08)

## Owner
CourseLLM Project Team

## Vision
To help Teachers and Students in a University CS Department better teach and better learn using AI.

## Objectives (MVP)
* **Student Learning:** Enable students in the CS Dept to use the product to learn the material of existing courses more effectively.
* **Teacher Enablement:** Enable teachers in the CS Dept to use the product to better teach existing courses.
* **Enhancement, Not Replacement:** The product enhances the learning experience around existing material; it does not create new material or replace existing AI tools.

## Target Audience
* **Primary:** Students taking Courses in the CIS Faculty @BGU.
* **Secondary:** Teachers of Courses at the CIS Faculty @BGU.

## Problem & Motivation
* **Teacher Concern:** Teachers worry that students may use AI technology as a shortcut to avoid learning, even if they can still fulfill course requirements.
* **Student Desire:** Students want enhanced, personalized, and faster access to course material to learn better and deeper.

## MVP Scope (Capabilities)

### 1. Student Features
* **Scoped Chatbot:** A chatbot restricted to the specific course material.
    * Must provide a Socratic learning experience.
    * Must *not* answer questions directly; instead, it checks for misconceptions and analyzes intentions.
    * Answers must be adjusted to the student's current recorded level.
* **Personalized Practice:** Generate personalized quizzes, exams, and exercises to master content and verify understanding.
* **Platform Assistance:** Help students with course-related logistics, such as installing tools, debugging issues, and submitting assignments.
* **Motivation:** Provide context on *why* the material is important, beautiful, or relevant.
* **Resource Access:** Provide access to additional relevant resources (papers, videos, tutorials).

### 2. Teacher Features
* **Content Preparation:** Allow teachers to upload, prepare, and review the consistency of course content (notes, slides, exams, etc.).
* **Learning Trajectories:** Enable teachers to prepare "learning trajectories" (a sequence of topics to be mastered).
* **Assignment Generation:** Assist teachers in preparing quizzes, assignments, and exams that are testable, correspond to the material, and are "LLM resilient".
* **Progress Monitoring:** Allow teachers to monitor student progress, tracking what skills and content have been acquired against the learning trajectories.
* **Integrity Tools:** Assist teachers with grading assignments and detecting cheating.

### 3. Governance
* **RAG Implementation:** All content must be indexed to support a RAG (Retrieval-Augmented Generation) approach.
* **Metrics & Logging:** The product must produce logs of activity to monitor student progress and compute metrics that measure value.

## Non-Goals (MVP)
* The product will not create new course material.
* The product will not replace existing AI tools like NotebookLM or general-purpose chatbots.

## Success Metrics (MVP)
* **Student Adoption:** X% of students in a pilot course use the Socratic chatbot > 3 times per week.
* **Teacher Engagement:** Y% of teachers in the pilot program successfully upload their course content and define at least one "learning trajectory."
* **Learning Efficacy:** Z% of students who use the personalized quiz feature show measurable improvement in knowledge mastery.
* **Scope Adherence:** >99% of chatbot answers are successfully filtered to be within the scope of the course material.

## Assumptions & Constraints
* **Content Source:** Teachers must provide all course content (notes, slides, etc.) for the system to be effective.
* **Chatbot Scope:** The chatbot's scope *must* be strictly restricted to the provided course material.
* **Learning Model:** The chatbot must *not* answer questions directly and must adhere to a Socratic learning model.

## Release Plan (MVP)
* **Sprint 1 (Wk 1-2):** Ingestion pipeline (teachers upload content) and RAG indexing.
* **Sprint 2 (Wk 3):** Core Socratic chatbot (student-facing) with scope enforcement.
* **Sprint 3 (Wk 4):** Learning Trajectories and Student Progress Monitoring (v1).
* **Sprint 4 (Wk 5):** Personalized Quiz Generation (student) and Assignment Generation (teacher).
* **Sprint 5 (Wk 6):** Pilot launch with one CS course.

## Dependencies / Risks
* **Risk:** Poor quality or incomplete course materials uploaded by teachers will lead to a poor chatbot experience.
* **Risk:** The Socratic model may frustrate students who want a quick answer.
* **Dependency:** Requires a robust indexing and RAG system to ensure answers are grounded.

## References
* CourseLLM Project Brainstorm Notes (02 Nov 2025).
* PRD Workflow & Guidelines.
