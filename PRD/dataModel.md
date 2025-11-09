# Data Model (MVP)

## Entities

- **Course**(id, name, term, staff[])
- **Material**(id, courseId, type, uri, sourceMeta, indexedAt)
- **Chunk**(id, materialId, text, vector, pageRef, terms[])
- **GlossaryTerm**(id, term, definition, aliases[])
- **LearningTrajectory**(id, courseId, nodes[], edges[])
- **Assessment**(id, courseId, type[quiz|exam], topics[], difficulty, items[])
- **AssessmentItem**(id, stem, choices[], answer, explanation, sourceRefs[])
- **StudentProgress**(id, studentId, courseId, topic, masteryScore, updatedAt)
- **QueryLog**(id, courseId, userId, query, retrievedRefs[], latencyMs, outcome)

## Relationships

- Course 1–N Material; Material 1–N Chunk
- Course 1–N GlossaryTerm
- Course 1–N LearningTrajectory
- Course 1–N Assessment
- Course 1–N StudentProgress
