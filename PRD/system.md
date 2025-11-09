# System Perspective

## High-Level Architecture (MVP)

- **Ingestion & Indexing**
  - Accept: MD, PDF, exported slides; Teacher-managed sources.
  - Chunk + embed; store vectors per course with metadata (source, page).
- **Scoped RAG Answering**
  - Query → retriever (course scope) → LLM with citations only from retrieved chunks.
  - Guardrails: refuse out-of-scope; suggest relevant course topics instead.
- **Socratic Orchestrator**
  - Prompting layer that (a) clarifies intent, (b) probes misconceptions, (c) reveals hints, (d) reveals final explanation last.
- **Assessment Generation**
  - Templates for quizzes/exams from selected topics + difficulty; auto-check for answerability from sources.
- **Progress & Analytics**
  - Event logs: question, retrieved sources, answer length, time-to-answer, quiz scores.

## Key APIs (sketch)

- `POST /courses/{id}/materials` – upload/ingest.
- `POST /courses/{id}/query` – student query with course scope; returns answer + citations.
- `POST /courses/{id}/quizzes` – generate quiz (topics, count, difficulty); returns Q/A set.
- `GET /courses/{id}/progress?student=...` – aggregated mastery metrics.

## Non-Functional

- Latency p95 ≤ 3s (cached embeddings, fast retriever).
- Data privacy per course; access control for staff vs students.
- Observability: logs + dashboards for KPIs.

## Safety & Integrity

- Answer scope enforcement (retrieval-only context; deny when no relevant sources).
- Plagiarism/cheating heuristics for assessments.
