# Data Model

This document outlines the core data entities, attributes, and relationships required to support the CourseLLM project, as defined in the master [PRD.md](PRD.md).

## 1. Entity Relationship Diagram (ERD)



[Image of an entity-relationship diagram for this data model]


### Relationship Summary (Text Version)

* A `Teacher` (User) **owns one or more** `Course`s.
* A `Student` (User) **enrolls in one or more** `Course`s (via `CourseEnrollment`).
* A `Course` **has many** `SourceMaterial` entries.
* A `Course` **has many** `Topic`s.
* A `Course` **has one or more** `LearningTrajectory`s.
* A `LearningTrajectory` **is composed of many** `Topic`s (via `TrajectoryTopicLink`).
* A `Student` **has many** `StudentProgress` records (one for each `Topic`).
* A `Student` **has many** `ChatSession`s.
* A `ChatSession` **has many** `ChatMessage`s.
* A `BOT`'s `ChatMessage` **can have many** `MessageCitation`s.
* A `MessageCitation` **points to one** `SourceMaterial` entry.
* A `Course` **has many** `Assessment`s.
* An `Assessment` **has many** `AssessmentQuestion`s.
* A `Student` **provides many** `StudentAnswer`s for an `Assessment`.

---

## 2. Entity Definitions

### 2.1. Core User & Course Entities

* **User**
    * **Description:** Represents any individual interacting with the system. Their permissions are defined by their `role`.
    * **Attributes:**
        * `user_id (string)`
        * `name (string)`
        * `email (string)`
        * `role (enum: 'Student', 'Teacher')`

* **Course**
    * **Description:** The main container for all content. Owned by a `Teacher` and enrolled in by `Student`s.
    * **Attributes:**
        * `course_id (string)`
        * `name (string)`
        * `department (string)`
        * `owner_user_id (string)` (links to `User`)

* **CourseEnrollment**
    * **Description:** (Junction Table) Links `Student`s to the `Course`s they are taking.
    * **Attributes:**
        * `user_id (string)` (links to `User`)
        * `course_id (string)` (links to `Course`)

### 2.2. Content & Knowledge Base Entities

* **SourceMaterial**
    * **Description:** A single piece of content (PDF, slide deck, .md file, whitelisted URL) uploaded by a `Teacher`. This is the corpus for the RAG system.
    * **Attributes:**
        * `material_id (string)`
        * `course_id (string)` (links to `Course`)
        * `source_type (enum: 'UPLOAD', 'EXTERNAL_URL')`
        * `path_or_url (string)`
        * `indexed_status (enum: 'PENDING', 'INDEXED', 'ERROR')`

* **Topic**
    * **Description:** A granular concept or skill within a course, defined by a `Teacher`. (e.g., "Recursion", "Big-O Notation").
    * **Attributes:**
        * `topic_id (string)`
        * `course_id (string)` (links to `Course`)
        * `name (string)`
        * `description (string)`

* **LearningTrajectory**
    * **Description:** A `Teacher`-defined sequence of `Topic`s that represents a logical path through the course material.
    * **Attributes:**
        * `trajectory_id (string)`
        * `course_id (string)` (links to `Course`)
        * `name (string)` (e.g., "Core Concepts", "Advanced Topics")

* **TrajectoryTopicLink**
    * **Description:** (Junction Table) Links `Topic`s to a `LearningTrajectory` and defines their specific `order`.
    * **Attributes:**
        * `trajectory_id (string)` (links to `LearningTrajectory`)
        * `topic_id (string)` (links to `Topic`)
        * `order (integer)` (e.g., 1, 2, 3...)

* **StudentProgress**
    * **Description:** Tracks a single `Student`'s mastery of a single `Topic`.
    * **Attributes:**
        * `user_id (string)` (links to `User`)
        * `topic_id (string)` (links to `Topic`)
        * `status (enum: 'NOT_STARTED', 'IN_PROGRESS', 'MASTERED')`

### 2.3. Chat & Logging Entities

* **ChatSession**
    * **Description:** A container for a single conversational thread between a `Student` and the bot for a specific `Course`.
    * **Attributes:**
        * `session_id (string)`
        * `user_id (string)` (links to `User`)
        * `course_id (string)` (links to `Course`)
        * `created_at (datetime)`

* **ChatMessage**
    * **Description:** A single message sent by either the `USER` or the `BOT` within a `ChatSession`.
    * **Attributes:**
        * `message_id (string)`
        * `session_id (string)` (links to `ChatSession`)
        * `timestamp (datetime)`
        * `sender (enum: 'USER', 'BOT')`
        * `content (string)`
        * `is_socratic (boolean)` (Null if sender is 'USER')

* **MessageCitation**
    * **Description:** (Junction Table) Links a specific `ChatMessage` (from the bot) to the `SourceMaterial`(s) it used to generate the answer.
    * **Attributes:**
        * `message_id (string)` (links to `ChatMessage`)
        * `material_id (string)` (links to `SourceMaterial`)
        * `snippet (string)` (The specific text snippet used for the citation)

### 2.4. Assessment Entities

* **Assessment**
    * **Description:** A quiz, exam, or assignment created by a `Teacher` or generated by a `Student` for practice.
    * **Attributes:**
        * `assessment_id (string)`
        * `course_id (string)` (links to `Course`)
        * `creator_user_id (string)` (links to `User`)
        * `type (enum: 'QUIZ', 'EXAM', 'ASSIGNMENT', 'PRACTICE_QUIZ')`
        * `title (string)`
        * `created_at (datetime)`

* **AssessmentTopicLink**
    * **Description:** (Junction Table) Links an `Assessment` to the `Topic`(s) it covers.
    * **Attributes:**
        * `assessment_id (string)` (links to `Assessment`)
        * `topic_id (string)` (links to `Topic`)

* **AssessmentQuestion**
    * **Description:** A single question within an `Assessment`.
    * **Attributes:**
        * `question_id (string)`
        * `assessment_id (string)` (links to `Assessment`)
        * `question_text (string)`
        * `question_type (enum: 'MULTIPLE_CHOICE', 'SHORT_ANSWER', 'CODE')`
        * `options (jsonb)` (e.g., `{"a": "Option 1", "b": "Option 2"}`)
        * `correct_answer (string)` (e.g., "a" or the full text answer)

* **StudentAnswer**
    * **Description:** A `Student`'s specific answer to a single `AssessmentQuestion`.
    * **Attributes:**
        * `answer_id (string)`
        * `question_id (string)` (links to `AssessmentQuestion`)
        * `user_id (string)` (links to `User`)
        * `answer_text (string)`
        * `is_correct (boolean)` (Can be null if not auto-gradable)
        * `graded_at (datetime)`