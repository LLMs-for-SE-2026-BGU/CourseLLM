# Data Model – CourseLLM (Conceptual)

## Overview
This document outlines the key entities, relationships, and attributes for the CourseLLM system at a high conceptual level. Implementation details including specific database technologies, optimization strategies, and scaling considerations will be determined during the technical design phase.

---

## Entity Relationship Diagram (Conceptual)

```
User
  ├─ Student
  └─ Instructor

Course
  ├─ has many CourseTopics
  ├─ has many CourseMaterials
  ├─ has many Assignments
  └─ has many Enrollments

Student
  ├─ enrolls in Courses (Enrollment)
  ├─ has LearningProgress per Topic
  ├─ has ChatSessions
  └─ submits Submissions

Instructor
  ├─ teaches Courses
  ├─ creates Assignments
  └─ reviews Submissions

CourseTopic (part of Learning Trajectory)
  ├─ has Prerequisites (other Topics)
  ├─ has MasteryCriteria
  ├─ tracked in LearningProgress
  └─ has many Resources

CourseMaterial (RAG content)
  ├─ belongs to Course
  ├─ has Embeddings (vector)
  └─ has Metadata (topic tags, source file)

Assignment
  ├─ belongs to Course
  ├─ targets Topics
  ├─ has Submissions
  └─ has GradingRubric

Submission
  ├─ by Student
  ├─ for Assignment
  ├─ has Grade
  └─ has CheatingFlag (optional)

ChatSession
  ├─ by Student
  ├─ for Course
  ├─ has Messages
  └─ tracked in LearningProgress

LearningProgress
  ├─ by Student
  ├─ for CourseTopic
  ├─ has MasteryLevel (0-100%)
  └─ updated by Submissions, ChatSessions, Quizzes
```

---

## Entity Definitions

### 1. User
Base entity for all users in the system.

| Attribute | Type | Description |
|-----------|------|-------------|
| `user_id` | UUID | Primary key |
| `email` | String | Unique, used for login |
| `name` | String | Full name |
| `role` | Enum | `student`, `instructor`, `admin` |
| `created_at` | Timestamp | Account creation date |

---

### 2. Student (extends User)
A student enrolled in one or more courses.

| Attribute | Type | Description |
|-----------|------|-------------|
| `student_id` | UUID | Primary key (same as user_id) |
| `enrollments` | List[Enrollment] | Courses enrolled in |
| `learning_progress` | List[LearningProgress] | Progress per topic |
| `chat_sessions` | List[ChatSession] | Chat history |

---

### 3. Instructor (extends User)
A teacher managing courses, assignments, grading.

| Attribute | Type | Description |
|-----------|------|-------------|
| `instructor_id` | UUID | Primary key (same as user_id) |
| `courses_taught` | List[Course] | Courses managed |

---

### 4. Course
Represents a university course (e.g., "Data Structures 2025").

| Attribute | Type | Description |
|-----------|------|-------------|
| `course_id` | UUID | Primary key |
| `title` | String | e.g., "Data Structures & Algorithms" |
| `code` | String | e.g., "CS201" |
| `semester` | String | e.g., "Spring 2025" |
| `instructor` | Instructor | Course owner |
| `topics` | List[CourseTopic] | Learning trajectory |
| `materials` | List[CourseMaterial] | Uploaded content |
| `assignments` | List[Assignment] | Quizzes, exams, projects |
| `enrollments` | List[Enrollment] | Students enrolled |
| `created_at` | Timestamp | Course creation date |

---

### 5. CourseTopic
A single topic in a course's learning trajectory (e.g., "Binary Search Trees").

| Attribute | Type | Description |
|-----------|------|-------------|
| `topic_id` | UUID | Primary key |
| `course` | Course | Parent course |
| `title` | String | Topic name |
| `description` | Text | Brief overview |
| `prerequisites` | List[CourseTopic] | Topics that must be mastered first |
| `mastery_criteria` | JSON | e.g., `{"quiz_score": 0.8, "exercises_completed": 5}` |
| `order` | Integer | Position in trajectory |
| `resources` | List[Resource] | Supplementary materials for this topic |

---

### 6. CourseMaterial
Uploaded files (slides, notes, etc.) indexed for RAG.

| Attribute | Type | Description |
|-----------|------|-------------|
| `material_id` | UUID | Primary key |
| `course` | Course | Parent course |
| `title` | String | e.g., "Lecture 3 Slides" |
| `file_path` | String | Storage location |
| `file_type` | String | e.g., "pdf", "pptx" |
| `topics` | List[CourseTopic] | Tagged topics |
| `embeddings` | Vector | For semantic search |
| `uploaded_at` | Timestamp | Upload date |

---

### 7. Assignment
A quiz, exam, project, or exercise.

| Attribute | Type | Description |
|-----------|------|-------------|
| `assignment_id` | UUID | Primary key |
| `course` | Course | Parent course |
| `title` | String | Assignment name |
| `type` | Enum | `quiz`, `coding`, `essay`, `exam` |
| `topics` | List[CourseTopic] | Topics assessed |
| `due_date` | Timestamp | Deadline |
| `rubric` | JSON | Grading criteria |
| `llm_resilience_score` | Float | 0-1, how "LLM-proof" it is |
| `submissions` | List[Submission] | Student submissions |
| `created_by` | Instructor | Assignment creator |

---

### 8. Submission
A student's submitted work for an assignment.

| Attribute | Type | Description |
|-----------|------|-------------|
| `submission_id` | UUID | Primary key |
| `assignment` | Assignment | Assignment submitted for |
| `student` | Student | Submitter |
| `file_path` | String | Submission file location |
| `submitted_at` | Timestamp | Submission time |
| `grade` | Float | 0-100 or null if ungraded |
| `feedback` | Text | Instructor/AI comments |
| `cheating_flag` | JSON | `{"ai_generated": 0.85, "plagiarism": null}` |
| `reviewed_by` | Instructor | Human who reviewed (if graded) |

---

### 9. LearningProgress
Tracks a student's mastery of a specific topic.

| Attribute | Type | Description |
|-----------|------|-------------|
| `progress_id` | UUID | Primary key |
| `student` | Student | Learner |
| `topic` | CourseTopic | Topic being tracked |
| `mastery_level` | Float | 0.0-1.0 (0% - 100%) |
| `status` | Enum | `not_started`, `in_progress`, `mastered` |
| `last_activity` | Timestamp | Most recent interaction |
| `evidence` | JSON | Links to interactions that inform mastery, e.g., `{"quizzes": [quiz_id_1], "assignments": [sub_id_1], "chat_sessions": [session_id_1]}` |

---

### 10. ChatSession
A conversation between a student and the course chatbot.

| Attribute | Type | Description |
|-----------|------|-------------|
| `session_id` | UUID | Primary key |
| `student` | Student | Participant |
| `course` | Course | Course context |
| `messages` | List[ChatMessage] | Conversation history |
| `started_at` | Timestamp | Session start |
| `ended_at` | Timestamp | Session end (or null if active) |
| `topics_discussed` | List[CourseTopic] | Inferred from messages |

---

### 11. ChatMessage
A single message in a chat session.

| Attribute | Type | Description |
|-----------|------|-------------|
| `message_id` | UUID | Primary key |
| `session` | ChatSession | Parent session |
| `role` | Enum | `user`, `assistant` |
| `content` | Text | Message text |
| `timestamp` | Timestamp | Message time |
| `references` | List[CourseMaterial] | RAG sources cited |

---

### 12. Enrollment
Tracks which students are enrolled in which courses.

| Attribute | Type | Description |
|-----------|------|-------------|
| `enrollment_id` | UUID | Primary key |
| `student` | Student | Enrolled student |
| `course` | Course | Enrolled course |
| `enrolled_at` | Timestamp | Enrollment date |
| `status` | Enum | `active`, `dropped`, `completed` |

---

### 13. Resource
An external or supplementary piece of content linked to a topic (e.g., video, article, paper).

| Attribute | Type | Description |
|-----------|------|-------------|
| `resource_id` | UUID | Primary key |
| `title` | String | The title of the resource |
| `url` | String | The URL to the resource |
| `type` | Enum | `video`, `article`, `case_study`, `tutorial` |
| `topics` | List[CourseTopic] | Topics this resource is relevant to |
| `added_by` | Instructor | Who curated this resource |

---

## Relationships Summary

- **User** ↔ **Student/Instructor**: Inheritance (one-to-one)
- **Instructor** ↔ **Course**: One-to-many (instructor teaches many courses)
- **Student** ↔ **Enrollment** ↔ **Course**: Many-to-many (via Enrollment)
- **Course** ↔ **CourseTopic**: One-to-many (course has many topics)
- **CourseTopic** ↔ **CourseTopic**: Many-to-many (prerequisites)
- **CourseTopic** ↔ **Resource**: Many-to-many (a resource can cover multiple topics)
- **Course** ↔ **CourseMaterial**: One-to-many (course has many materials)
- **Course** ↔ **Assignment**: One-to-many (course has many assignments)
- **Assignment** ↔ **Submission**: One-to-many (assignment has many submissions)
- **Student** ↔ **Submission**: One-to-many (student submits many)
- **Student** ↔ **LearningProgress**: One-to-many (student has progress per topic)
- **Student** ↔ **ChatSession**: One-to-many (student has many chat sessions)

---

## Data Flow Examples

### Example 1: Student Asks Question
1. Student starts **ChatSession** for a **Course**.
2. Student sends **ChatMessage** (role: `user`).
3. System retrieves relevant **CourseMaterials** (RAG).
4. System generates **ChatMessage** (role: `assistant`), citing **CourseMaterials**.
5. System updates **LearningProgress** based on topics discussed.

### Example 2: Instructor Grades Assignment
1. Instructor views **Submissions** for an **Assignment**.
2. AI generates draft **grade** and **feedback** for each **Submission**.
3. Instructor reviews, adjusts, and publishes grades.
4. System updates **LearningProgress** for each **Student** based on grade and assignment **topics**.

### Example 3: Student Completes Learning Trajectory
1. Student masters a **CourseTopic** (reaches **mastery_criteria**).
2. **LearningProgress** status changes to `mastered`.
3. System unlocks dependent **CourseTopics** (where this topic was a prerequisite).
4. Dashboard recommends next **CourseTopic** to study.

---

**Status:** Draft  
**Last Updated:** 2025-11-06  
**Reviewed By:** [Pending]