# Glossary

This document is the single source of truth for all terminology used in the CourseLLM project. All other documents ([PRD.md](PRD.md), [UserStories.md](UserStories.md), etc.) MUST align with these definitions.

---

### `Academic Integrity`
**Definition:** The principle of honesty in academic work.
**Context:** In this project, it refers to features that help `Teacher`s detect or discourage cheating, such as identifying AI misuse patterns or plagiarism. (See `PRD.md` Req 4.4).

### `Acceptance Criteria`
**Definition:** The specific, testable conditions that a feature must meet to be considered complete and correct.
**Context:** Used in `UserStories.md` to define the "done" state. E.g., "The chatbot provides an answer in under 5 seconds."

### `Assessment`
**Definition:** A mechanism for evaluating `Student` knowledge, such as a quiz, exam, or assignment.
**Context:** Can be `Teacher`-created (for grading) or `Student`-generated (for practice). (See `DataModel.md`, `Assessment`).

### `ChatSession`
**Definition:** A single, continuous conversation thread between a `Student` and the chatbot within a specific `Course`.
**Context:** Used to log interactions and maintain conversational history. (See `DataModel.md`, `ChatSession`).

### `Citation (Grounded Citation)`
**Definition:** A reference to a specific document, slide, or section within the `Source Material` that the system used to generate an answer.
**Context:** This provides verifiability for the `Student` and ensures all answers are grounded in course content. It links a `ChatMessage` to one or more `SourceMaterial` entries.

### `Consistency Review`
**Definition:** A feature that helps `Teacher`s identify contradictions or inconsistencies within their uploaded `Source Material`.
**Context:** Helps improve the quality of the `Knowledge Base` *before* it's exposed to students. (See `PRD.md` Req 4.3).

### `Course`
**Definition:** The top-level container for all content, settings, and users for a single class.
**Context:** A `Teacher` creates and manages a `Course`. `Student`s enroll in a `Course`. E.g., "Data Structures - Fall 2025".

### `Indexing`
**Definition:** The technical process of reading all `Source Material`, breaking it into manageable chunks, and storing it (often as vectors) so it can be efficiently searched by the `RAG` system.
**Context:** This is the action `Teacher`s trigger when they upload new content.

### `is_socratic`
**Definition:** A boolean attribute on a `ChatMessage` that flags whether the bot's response was a guiding question (`true`) or a direct answer/statement (`false`).
**Context:** This allows the system (and `Teacher`s) to audit the bot's adherence to the `Socratic Learning` requirement.

### `Knowledge Base`
**Definition:** The complete, `Indexed` collection of all `Source Material` for a given `Course`.
**Context:** This is the *only* information the chatbot is allowed to access to answer questions. It is the "ground truth" for the `RAG` system.

### `Learning Trajectory`
**Definition:** A `Teacher`-defined, ordered sequence of `Topic`s that represents a logical path through the course material.
**Context:** It is used to personalize answers (e.g., explain a `Topic` based on prerequisites) and to track `Student Progress`. (See `PRD.md` Req 4.3).

### `LLM-resilient`
**Definition:** A quality of a question or assignment. A question is "LLM-resilient" if it is difficult or impossible to answer correctly by simply using a generic, external Large Language Model.
**Context:** It requires conceptual understanding, application, or synthesis of the course's private `Source Material`, not just recall of public knowledge. (See `PRD.md` Req 4.4).

### `Metric (KPI)`
**Definition:** A quantifiable measure used to track the success and impact of the product.
**Context:** As defined in the `PRD.md`, all metrics must be measurable to show value.

### `MVP (Minimum Viable Product)`
**Definition:** The version of the new product with the most essential features required to satisfy early adopters and gather feedback for future development.
**Context:** Used to define the initial, focused scope.

### `Persona`
**Definition:** A fictional character profile created to represent a primary user type for the product.
**Context:** Our two primary personas are `Student` (Alex) and `Teacher` (Dr. Elena K.).

### `Retrieval-Augmented Generation (RAG)`
**Definition:** The core AI architecture used by the chatbot. This model *retrieves* relevant information from the `Knowledge Base` *before* *generating* an answer.
**Context:** This architecture is what prevents hallucination and ensures all answers are grounded in the `Source Material`.

### `Socratic Learning`
**Definition:** The primary interaction style of the student-facing chatbot. Instead of providing a direct answer, the bot will ask guiding questions.
**Context:** The goal is to help the `Student` identify their own misconceptions and arrive at the correct solution. (See `PRD.md` Req 4.1).

### `Source Material`
**Definition:** The raw content (e.g., PDFs, lecture slides, .md files, whitelisted URLs) uploaded by a `Teacher` for a specific `Course`.
**Context:** This forms the "ground truth" for the `Knowledge Base`. (See `DataModel.md`, `SourceMaterial`).

### `Student`
**Definition:** A primary persona. An end-user enrolled in a `Course`.
**Context:** `Student`s use the platform to ask questions, generate quizzes, and track their progress.

### `Student Adoption (Metric)`
**Definition:** A `Metric` that measures the percentage of students in a course who actively use the chatbot weekly.
**Context:** Measures the product's reach and initial value.

### `Student Engagement (Metric)`
**Definition:** A `Metric` that measures the average number of Socratic interactions per student, per week.
**Context:** Measures the depth of product use and its adherence to the core Socratic principle.

### `Student Progress`
**Definition:** A record of a `Student`'s mastery status (e.g., 'NOT_STARTED', 'IN_PROGRESS', 'MASTERED') for a specific `Topic`.
**Context:** This is tracked against the `Learning Trajectory` and used by the system to personalize answers. (See `DataModel.md`, `StudentProgress`).

### `Teacher`
**Definition:** A primary persona. An administrative user who creates and manages a `Course`.
**Context:** `Teacher`s are responsible for uploading `SourceMaterial`, defining `Learning Trajectories`, and monitoring `Student Progress`.

### `Topic`
**Definition:** A single, granular unit of knowledge or a skill defined by a `Teacher` (e.g., "Recursion", "Big-O Notation", "Python Dictionaries").
**Context:** `Topic`s are the building blocks of a `Learning Trajectory` and are used to tag `Assessment`s and `Student Progress`. (See `DataModel.md`, `Topic`).