# DataModel – CourseLLM (Draft)

Version: 1.0  
Date: November 7, 2025  
Scope: MVP for 11-week semester project, aligned with PRD/Drafts/PRD.md

---

## 1. Purpose of This Document

This document describes the *conceptual and logical data model* for CourseLLM.

It is intended to:

- Support the *MUST* and *SHOULD* features in the PRD:
  - Course-bound Socratic chatbot
  - Course Material RAG system
  - Basic personalized practice (quiz/exercise generator)
  - Minimal progress & activity tracking
  - Learning trajectories
  - Teacher analytics dashboard
  - Motivational explanations per topic
- Provide a clear view of:
  - *Entities* in the relational database
  - *Relationships* between entities
  - *Vector store* structure for RAG
  - Which data is *MVP* and which is *future extension*

Implementation target: PostgreSQL (relational) + FAISS/Pinecone (vector) + file storage (for raw documents).

---

## 2. High-Level Data Architecture

CourseLLM data is split into three main layers:

1. *Relational DB (PostgreSQL)*  
   - Users, courses, topics, learning trajectories  
   - Chat sessions & messages  
   - Practice questions & attempts  
   - Progress / analytics data (or base data from which analytics is computed)

2. *Vector Store (FAISS / Pinecone)*  
   - Embeddings for *material chunks* derived from uploaded course files  
   - Used by the Course Material RAG system

3. *File Storage (Local / Cloud Bucket)*  
   - Raw uploaded files (PDFs, PPTX, text notes, etc.)  
   - Referenced by Material records

---

## 3. Entity Overview (Relational Model)

### Core Entities

- User
- Course
- Enrollment (linking users to courses with roles)
- Topic
- LearningTrajectory
- TrajectoryTopic (linking topics into trajectories)
- TopicPrerequisite (optional prerequisites between topics)

### Content & RAG

- Material (uploaded files)
- MaterialChunk (text chunks with links to vector store entries)

### Interaction & Practice

- ChatSession
- ChatMessage
- PracticeQuestion
- PracticeAttempt

### Motivation & Analytics

- TopicMotivation
- (Derived / materialized views for analytics, e.g. TopicStats, not strictly required as physical tables in MVP)

---

## 4. Detailed Entity Definitions

### 4.1 User

Represents any authenticated user (student, teacher, TA).

| Field              | Type          | Description                                             |
|--------------------|---------------|---------------------------------------------------------|
| user_id          | UUID (PK)     | Unique identifier                                       |
| email            | VARCHAR       | User email (may be university account)                  |
| full_name        | VARCHAR       | Display name                                            |
| global_role      | ENUM          | student, teacher, ta, admin                     |
| created_at       | TIMESTAMP     | When the account was created                            |
| last_login_at    | TIMESTAMP     | Last login time                                         |
| is_active        | BOOLEAN       | Soft delete / deactivation flag                         |

> *Privacy note:* For analytics, an internal *pseudonymous ID* (e.g. hash of user_id) may be used to avoid exposing identities directly.

---

### 4.2 Course

Represents a single course (e.g., “Data Structures”, “Intro to CS”).

| Field             | Type          | Description                                           |
|-------------------|---------------|-------------------------------------------------------|
| course_id       | UUID (PK)     | Unique identifier                                     |
| course_code     | VARCHAR       | Short code (e.g., “CS101”)                            |
| name            | VARCHAR       | Human-readable course name                            |
| description     | TEXT          | Optional description                                  |
| semester        | VARCHAR       | e.g. 2025A, 2025B                                |
| is_active       | BOOLEAN       | Whether the course is active in the system            |
| created_at      | TIMESTAMP     | Creation date                                         |
| created_by      | UUID (FK User)| Who created the course record                         |

---

### 4.3 Enrollment

Connects users to courses with a *role in that course*.

| Field             | Type           | Description                                      |
|-------------------|----------------|--------------------------------------------------|
| enrollment_id   | UUID (PK)      | Unique identifier                                |
| user_id         | UUID (FK User) | Enrolled user                                    |
| course_id       | UUID (FK Course)| Associated course                               |
| course_role     | ENUM           | student, teacher, ta                       |
| created_at      | TIMESTAMP      | When enrollment was created                      |

*Constraints:*

- (user_id, course_id) should be unique.

---

### 4.4 Topic

Core conceptual units used in learning trajectories and analytics.

| Field            | Type             | Description                                        |
|------------------|------------------|----------------------------------------------------|
| topic_id       | UUID (PK)        | Unique id                                          |
| course_id      | UUID (FK Course) | Course this topic belongs to                       |
| name           | VARCHAR          | Short name (e.g., “Recursion Basics”)             |
| slug           | VARCHAR          | Optional unique key per course                     |
| description    | TEXT             | Optional longer description                        |
| order_index    | INT              | Suggested ordering for display                     |
| is_active      | BOOLEAN          | Flag for logical deletion/inactivation             |
| created_at     | TIMESTAMP        | Creation time                                      |

---

### 4.5 LearningTrajectory

Represents a named *learning path* for a course.

| Field              | Type             | Description                                |
|--------------------|------------------|--------------------------------------------|
| trajectory_id    | UUID (PK)        | Unique id                                  |
| course_id        | UUID (FK Course) | Associated course                          |
| name             | VARCHAR          | Trajectory name (e.g. “Default Path”)      |
| description      | TEXT             | Optional explanation                       |
| is_default       | BOOLEAN          | Is this the default trajectory for course? |
| created_at       | TIMESTAMP        | Creation time                              |

---

### 4.6 TrajectoryTopic

Defines ordered topics within a trajectory.

| Field              | Type                 | Description                                           |
|--------------------|----------------------|-------------------------------------------------------|
| trajectory_topic_id | UUID (PK)        | Unique id                                             |
| trajectory_id    | UUID (FK Trajectory)| Associated learning trajectory                        |
| topic_id         | UUID (FK Topic)     | Topic included in this trajectory                     |
| position         | INT                 | Position/order in trajectory                          |

*Constraints:*

- (trajectory_id, topic_id) should be unique.

---

### 4.7 TopicPrerequisite (Optional Extension)

Captures dependency relations such as “Arrays must precede Linked Lists”.

| Field                   | Type           | Description                                                 |
|-------------------------|----------------|-------------------------------------------------------------|
| topic_prereq_id       | UUID (PK)      | Unique id                                                   |
| topic_id              | UUID (FK Topic)| Topic that depends on another                              |
| prerequisite_topic_id | UUID (FK Topic)| Topic that should be mastered before the dependent topic   |

> For MVP this table is *optional*; prerequisites can also be implied by TrajectoryTopic.position. It is included for clarity/future use.

---

### 4.8 Material

Uploaded course material (slides, PDFs, notes, etc.).

| Field            | Type              | Description                                                    |
|------------------|-------------------|----------------------------------------------------------------|
| material_id    | UUID (PK)         | Unique id                                                      |
| course_id      | UUID (FK Course)  | Course this material belongs to                                |
| uploader_id    | UUID (FK User)    | Teacher/TA who uploaded the file                               |
| title          | VARCHAR           | Human-readable title                                           |
| file_type      | ENUM              | pdf, pptx, txt, md, code, …                         |
| storage_path   | VARCHAR           | Path/URL to file in storage                                    |
| page_count     | INT               | Optional metadata                                              |
| processed_status | ENUM            | pending, processing, ready, failed                    |
| created_at     | TIMESTAMP         | Upload time                                                    |

---

### 4.9 MaterialChunk

Derived chunks used for RAG and linked to the vector store.

| Field              | Type                 | Description                                                    |
|--------------------|----------------------|----------------------------------------------------------------|
| chunk_id         | UUID (PK)            | Unique id                                                      |
| material_id      | UUID (FK Material)   | Source material                                                |
| chunk_index      | INT                  | Order of chunk within material                                |
| text             | TEXT                 | Extracted text for this chunk                                 |
| page_number      | INT                  | Original page/slide (if applicable)                           |
| vector_id        | VARCHAR              | Id/key pointing to embedding in vector store                  |
| topic_id         | UUID (FK Topic, nullable) | Optional linked topic                                   |

> *Vector Store:* Each MaterialChunk has a corresponding vector entry (vector_id, embedding_vector) stored in FAISS/Pinecone. The relational DB does *not* store the numeric embedding values.

---

### 4.10 ChatSession

Represents a single student–AI conversation session.

| Field            | Type                | Description                                      |
|------------------|---------------------|--------------------------------------------------|
| session_id     | UUID (PK)           | Unique id                                        |
| user_id        | UUID (FK User)      | Student (or teacher if in “preview” mode)       |
| course_id      | UUID (FK Course)    | Course context                                   |
| started_at     | TIMESTAMP           | Session start time                               |
| ended_at       | TIMESTAMP (nullable)| Session end time                                 |
| mode           | ENUM                | chat, practice_review (room for extension)   |

---

### 4.11 ChatMessage

Individual messages within a chat session.

| Field             | Type                     | Description                                          |
|-------------------|--------------------------|------------------------------------------------------|
| message_id      | UUID (PK)                | Unique id                                            |
| session_id      | UUID (FK ChatSession)    | Conversation this message belongs to                 |
| sender_type     | ENUM                     | student, assistant, system                     |
| content         | TEXT                     | Message text                                         |
| created_at      | TIMESTAMP                | Timestamp                                            |
| topic_id        | UUID (FK Topic, nullable)| Topic inferred or tagged for this message            |
| retrieved_chunk_ids | JSON/ARRAY (nullable)| IDs of MaterialChunk used to answer (RAG context) |
| misconception_tag | VARCHAR (nullable)     | Optional label for detected misconception            |

> For privacy, exported analytics will not expose message_id/content linked to real names; instead, pseudonymization/anonymization is applied.

---

### 4.12 PracticeQuestion

Represents a stored or generated practice question.

| Field               | Type                     | Description                                             |
|---------------------|--------------------------|---------------------------------------------------------|
| question_id       | UUID (PK)                | Unique id                                               |
| course_id         | UUID (FK Course)         | Course context                                          |
| topic_id          | UUID (FK Topic)          | Related topic                                           |
| source_type       | ENUM                     | generated, manual                                  |
| question_type     | ENUM                     | mcq, short_answer, code, …                       |
| stem              | TEXT                     | The main question text                                 |
| options_json      | JSON (nullable)          | For MCQ – options & labels                             |
| correct_answer    | TEXT                     | Canonical correct answer / pattern                     |
| explanation       | TEXT                     | Explanation shown after answering                      |
| difficulty_level  | ENUM                     | easy, medium, hard                               |
| created_by        | UUID (FK User, nullable) | Teacher/provenance                                     |
| created_at        | TIMESTAMP                | Creation time                                          |

---

### 4.13 PracticeAttempt

Records a student’s attempt at a practice question.

| Field               | Type                     | Description                                             |
|---------------------|--------------------------|---------------------------------------------------------|
| attempt_id        | UUID (PK)                | Unique id                                               |
| question_id       | UUID (FK PracticeQuestion)| Question attempted                                     |
| user_id           | UUID (FK User)           | Student who attempted                                  |
| course_id         | UUID (FK Course)         | Redundant for faster querying                          |
| topic_id          | UUID (FK Topic)          | Redundant for faster querying                          |
| session_id        | UUID (FK ChatSession, nullable)| If attempt is linked to a chat session             |
| submitted_answer  | TEXT                     | Student’s answer                                       |
| is_correct        | BOOLEAN                  | Evaluation result                                      |
| hints_used        | INT                      | Number of hints used (if tracked)                      |
| started_at        | TIMESTAMP                | Start time                                             |
| completed_at      | TIMESTAMP                | Completion time                                        |

> These records are the foundation for *progress computation* and *topic-level analytics* described in the PRD.

---

### 4.14 TopicMotivation

Stores curated or generated motivational explanations for topics.

| Field              | Type             | Description                                          |
|--------------------|------------------|------------------------------------------------------|
| topic_motivation_id | UUID (PK)    | Unique id                                            |
| topic_id         | UUID (FK Topic) | Topic this text belongs to                           |
| text             | TEXT            | Explanation of “Why this topic matters”              |
| created_by       | UUID (FK User)  | Teacher/TA who created/approved it                   |
| created_at       | TIMESTAMP       | Creation time                                        |
| is_approved      | BOOLEAN         | Has a teacher approved this explanation?             |

---

## 5. Analytics & Derived Data

Some analytics may be computed on the fly (via SQL queries or code), or materialized into *views / summary tables* if needed for performance.

Examples (not necessarily physical tables in MVP):

### 5.1 TopicStats (View / Materialized View)

Aggregated performance per topic (used in teacher dashboard):

- course_id
- topic_id
- num_students_active – count of distinct students with attempts or chat in topic
- avg_score – average is_correct over attempts
- num_attempts – total practice attempts
- num_chat_messages – total chat messages tagged with topic
- last_activity_at – last time any interaction on this topic occurred

### 5.2 StudentTopicProgress (View / Computed)

Per student per topic:

- user_id
- course_id
- topic_id
- attempt_count
- success_rate
- last_attempt_at
- status – derived label needs_practice, getting_there, strong

These structures support:

- *Student self-view* in the progress dashboard  
- *Teacher analytics* for topic-level heatmaps

---

## 6. MVP vs Future Extensions

### Included in MVP

- Core entities required for:
  - Course-bound Socratic chat (User, Course, Enrollment, ChatSession, ChatMessage, Material, MaterialChunk)
  - RAG (MaterialChunk + vector store)
  - Practice & progress (Topic, PracticeQuestion, PracticeAttempt)
  - Basic trajectories & analytics (LearningTrajectory, TrajectoryTopic, TopicMotivation, derived views)

### Reserved for Future Work (Not Mandatory for 11 Weeks)

- TopicPrerequisite full dependency graph beyond simple ordering  
- More detailed *misconception taxonomy* table  
- Additional entities for *cheating pattern detection*  
- Fine-grained *event logging* for every UI interaction (beyond chat & practice)

---

## 7. Consistency With PRD

This data model directly supports:

- *MUST Have*
  - Socratic chatbot (sessions + messages + RAG via material chunks)
  - Course material RAG (material + chunks + vector store references)
  - Basic personalized practice (questions + attempts)
  - Minimal progress & activity tracking (attempts + logs + derived views)

- *SHOULD Have*
  - Learning trajectories (trajectory + trajectory_topic)
  - Teacher analytics dashboard (aggregations over attempts/messages)
  - Motivational explanations (topic_motivation)

This document should be kept in sync with any future updates to PRD.md.  
When adding features, first update the PRD, then extend this data model accordingly.