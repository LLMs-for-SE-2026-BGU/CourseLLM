# System Perspective

## High-Level Architecture (MVP)
* **Ingestion Pipeline**
    * Teachers upload course files (notes, documents, exams, slides, etc.).
    * System reviews material for consistency.
    * System indexes all material to support a RAG approach.
* **Scoped RAG Chatbot**
    * Queries are checked against course scope; non-related questions are filtered out.
    * A Socratic orchestrator prevents direct answers and probes for misconceptions.
* **Personalization Engine**
    * Retrieves `StudentProgress` to adjust the chatbot's answers to the student's current level.
    * Logs student skills and content acquisition back to the `StudentProgress` profile.
* **Teacher Console**
    * A dashboard for teachers to monitor student progress and define "learning trajectories".
    * An interface to generate "LLM resilient" assignments.

## Key APIs (Sketch)
* `POST /api/course/{id}/upload`
    * **Role:** Teacher
    * **Action:** Uploads course materials. Triggers indexing job.
* `POST /api/course/{id}/chat`
    * **Role:** Student
    * **Action:** Submits a query. System returns a Socratic response.
* `GET /api/student/{id}/progress?course={id}`
    * **Role:** Student (self), Teacher (all students)
    * **Action:** Retrieves current progress on learning trajectories.
* `POST /api/course/{id}/quiz/generate`
    * **Role:** Student
    * **Action:** Generates a personalized quiz.
* `POST /api/course/{id}/assignment/generate`
    * **Role:** Teacher
    * **Action:** Generates a draft, LLM-resilient assignment.

## Non-Functional Requirements
* **Scope Enforcement:** The system *must* filter out questions not related to the course.
* **Socratic Adherence:** The chatbot *must not* answer questions directly.
* **Personalization:** All Socratic responses *must* be adjusted based on the student's recorded knowledge level.

## Safety & Integrity
* **Cheating Detection:** The system must provide features to assist teachers in detecting cheating.
* **Assignment Validation:** All teacher-generated assignments must be verified as testable and corresponding to the taught material.
