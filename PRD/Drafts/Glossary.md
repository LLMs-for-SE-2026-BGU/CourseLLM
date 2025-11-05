# Glossary

This document is the single source of truth for all terminology used in the CS Learning Platform project. All other documents ([prd.md](prd.md), [userStories.md](userStories.md), etc.) MUST align with these definitions.

---

### Academic Integrity
**Definition:** The principle of honesty in academic work.
**Context:** In this project, it refers to features that help `Teacher`s detect or discourage cheating, such as identifying AI misuse patterns or plagiarism. (See `PRD.md` Req 3.4.5).

### Acceptance Criteria
**Definition:** The specific, testable conditions that a feature must meet to be considered complete and correct.
**Context:** Used in user stories to define the "done" state. E.g., "Each student answer includes at least one approved citation."

### Assessment
**Definition:** A mechanism for evaluating `Student` knowledge, such as a quiz, exam, or assignment.
**Context:** Can be `Teacher`-created (for grading) or `Student`-generated (for practice). (See `DataModel.md`, `Assessment`).

### ChatSession
**Definition:** A single, continuous conversation thread between a `Student` and the chatbot within a specific `Course`.
**Context:** Used to log interactions and maintain conversational history. (See `DataModel.md`, `ChatSession`).

### Citation (Grounded Citation)
**Definition:** A reference to a specific document, slide, or section within the `Source Material` that the system used to generate an answer.
**Context:** This provides verifiability for the `Student` and ensures all answers are grounded in course content. It links a `ChatMessage` to one or more `SourceMaterial` entries. (See `PRD.md` Req 3.1.4).

### Consistency Review
**Definition:** A feature that helps `Teacher`s identify contradictions or inconsistencies within their uploaded `Source Material`.
**Context:** Helps improve the quality of the `Knowledge Base` *before* it's exposed to students. (See `PRD.md` Req 3.3.4).

### Indexing
**Definition:** The technical process of reading all `Source Material`, breaking it into manageable chunks, and storing it (often as vectors) so it can be efficiently searched by the `RAG` system.
**Context:** This is the action `Teacher`s trigger when they upload new content. The `indexed_status` attribute on the `SourceMaterial` entity tracks this.

### is_socratic
**Definition:** A boolean attribute on a `ChatMessage` that flags whether the bot's response was a guiding question (`true`) or a direct answer/statement (`false`).
**Context:** This allows the system (and `Teacher`s) to audit the bot's adherence to the `Socratic Learning` requirement.

### Knowledge Base
**Definition:** The complete, `Indexed` collection of all `Source Material` for a given `Course`.
**Context:** This is the *only* information the chatbot is allowed to access to answer questions. It is the "ground truth" for the `RAG` system.

### Learning Trajectory
**Definition:** A `Teacher`-defined, ordered sequence of `Topic`s that represents a logical path through the course material.
**Context:** It is used to personalize answers (e.g., explain a `Topic` based on prerequisites) and to track `Student Progress`. (See `PRD.md` Req 3.4.1).

### LLM-resilient
**Definition:** A quality of a question or assignment. A question is "LLM-resilient" if it is difficult or impossible to answer correctly by simply using a generic, external Large Language Model.
**Context:** It requires conceptual understanding, application, or synthesis of the course's private `Source Material`, not just recall of public knowledge. (See `PRD.md` Req 3.4.4).

### MVP (Minimum Viable Product)
**Definition:** The version of the new product with the most essential features required to satisfy early adopters and gather feedback for future development.
**Context:** Used in the `UserStories.md` to define the initial, focused scope (e.g., "Acceptance Hints (MVP)").

### Persona
**Definition:** A fictional character profile created to represent a primary user type for the product.
**Context:** Our two primary personas are `Student` and `Teacher`.

### Retrieval-Augmented Generation (RAG)
**Definition:** The core AI architecture used by the chatbot. This model *retrieves* relevant information from the `Knowledge Base` *before* *generating* an answer.
**Context:** This architecture is what prevents hallucination and ensures all answers are grounded in the `Source Material`.

### Socratic Learning
**Definition:** The primary interaction style of the student-facing chatbot. Instead of providing a direct answer, the bot will ask guiding questions.
**Context:** The goal is to help the `Student` identify their own misconceptions and arrive at the correct solution. (See `PRD.md` Req 3.1.2). The `is_socratic` flag on `ChatMessage` is used to track this.

### Source Material
**Definition:** The raw content (e.g., PDFs, lecture slides, .md files, whitelisted URLs) uploaded by a `Teacher` for a specific `Course`.
**Context:** This forms the "ground truth" for the `Knowledge Base`. The `source_type` attribute (`UPLOAD` vs. `EXTERNAL_URL`) defines its origin. (See `DataModel.md`, `SourceMaterial`).

### Student
**Definition:** A primary persona. An end-user enrolled in a `Course`.
**Context:** `Student`s use the platform to ask questions, generate quizzes, and track their progress.

### Student Progress
**Definition:** A record of a `Student`'s mastery status (e.g., 'NOT_STARTED', 'IN_PROGRESS', 'MASTERED') for a specific `Topic`.
**Context:** This is tracked against the `Learning Trajectory` and used by the system to personalize answers. (See `DataModel.md`, `StudentProgress`).

### Teacher
**Definition:** A primary persona. An administrative user who creates and manages a `Course`.
**Context:** `Teacher`s are responsible for uploading `SourceMaterial`, defining `Learning Trajectories`, and monitoring `Student Progress`.

### Topic
**Definition:** A single, granular unit of knowledge or a skill defined by a `Teacher` (e.g., "Recursion", "Big-O Notation", "Python Dictionaries").
**Context:** `Topic`s are the building blocks of a `Learning Trajectory` and are used to tag `Assessment`s and `Student Progress`. (See `DataModel.md`, `Topic`).
```