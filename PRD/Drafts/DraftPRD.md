# CourseLLM – Product Requirements Document (Draft)

<!-- Copilot: This is the initial draft. Review and refine sections before promoting to PRD.md -->
<!-- Ron -->
## 1. Overview & Vision

**Product Name:** CourseLLM (working title)

**Vision:**  
Help teachers and students in a Computer Science Department at university better teach and learn using AI that enhances existing course material.

**Core Principle:**  
CourseLLM does not create new material or replace existing AI tools (NotebookLM, chatbots). Instead, it enhances the learning experience around existing course material by providing intelligent, context-aware assistance.

---

## 2. Problem Statement

### For Students:
- Students want enhanced, personalized access to course material to learn better, deeper, and faster.
- Current tools lack integration with specific course context and learning trajectories.
- Students need help understanding "why" material matters, not just "how" it works.

### For Teachers:
- Teachers worry students use AI as shortcuts, avoiding deep learning while still meeting course requirements.
- Preparing, organizing, and maintaining course material for AI-enhanced learning is time-consuming.
- Detecting AI-assisted cheating and ensuring assessments are "LLM-resilient" is challenging.
- Monitoring individual student progress at scale is difficult.

---

## 3. Objectives & Success Metrics

### Primary Objectives:
1. **Student Learning Enhancement** – Enable deeper, personalized learning of existing course material.
2. **Teacher Efficiency** – Reduce time spent on content preparation, grading, and progress monitoring.
3. **Responsible AI Use** – Promote socratic learning, prevent shortcut behavior, ensure academic integrity.

### Success Metrics:
<!-- Copilot: suggest KPIs for each objective -->

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Student engagement with course chatbot | 70% weekly active users | Usage analytics |
| Student-reported learning improvement | 4+/5 satisfaction score | End-of-semester survey |
| Teacher time saved on grading | 30% reduction | Time-tracking survey |
| Cheating detection accuracy | 85%+ precision | Manual validation vs. system flags |
| LLM-resilient assignment completion | 90% of assignments pass resilience test | Internal assessment tool |

---

## 4. Target Audience & Personas

### Primary Personas:

#### **Persona 1: Computer Science Student**
- **Name:** Alex (Undergraduate, 2nd year)
- **Goals:** Understand course material deeply, prepare for exams, complete assignments efficiently.
- **Pain Points:** Material is dense, unclear where to start, wants personalized help without feeling "lost."
- **Needs:** Chatbot that guides learning, generates practice exercises, explains "why" topics matter.

#### **Persona 2: Course Instructor**
- **Name:** Dr. Sarah (CS Faculty, teaches Data Structures & Algorithms)
- **Goals:** Ensure students learn deeply, create fair assessments, monitor progress at scale.
- **Pain Points:** Time-consuming grading, difficulty detecting AI misuse, hard to personalize feedback.
- **Needs:** Tools to upload course material, track student progress, generate LLM-resilient assignments.

---

## 5. Features and Functionality

### 5.1 Student Features

#### **F1: Course Material Chatbot**
- **Description:** AI-powered chatbot scoped to specific course content.
- **Key Behaviors:**
  - Filter out off-topic questions.
  - Adjust responses to student's current knowledge level.
  - Use **socratic learning**: ask clarifying questions before answering.
- **User Stories:** See [UserStories.md](UserStories.md#F1)

#### **F2: Personalized Learning Trajectories**
- **Description:** System tracks student progress through ordered topics (learning trajectories).
- **Key Behaviors:**
  - Recommend next topics based on mastery of prerequisites.
  - Visualize progress on skill trees.
- **User Stories:** See [UserStories.md](UserStories.md#F2)

#### **F3: Practice & Assessment Generation**
- **Description:** Generate personalized quizzes, exercises, and exams.
- **Key Behaviors:**
  - Adjust difficulty based on student level.
  - Provide instant feedback and explanations.
- **User Stories:** See [UserStories.md](UserStories.md#F3)

#### **F4: Motivation & Context**
- **Description:** Explain "why" material matters—real-world applications, beauty, dependencies.
- **Key Behaviors:**
  - Provide case studies, historical context, interdisciplinary connections.
- **User Stories:** See [UserStories.md](UserStories.md#F4)

#### **F5: Technical Support**
- **Description:** Help with course platform: install tools, debug code, compile, submit assignments.
- **Key Behaviors:**
  - Troubleshoot common errors.
  - Guide through submission workflows.
- **User Stories:** See [UserStories.md](UserStories.md#F5)

#### **F6: Additional Resources**
- **Description:** Curated access to papers, videos, tutorials, exercises.
- **Key Behaviors:**
  - Recommend resources based on current topic.
- **User Stories:** See [UserStories.md](UserStories.md#F6)

---

### 5.2 Teacher Features

#### **T1: Content Upload & Indexing**
- **Description:** Upload course materials (notes, slides, exams, exercises) for RAG-based chatbot.
- **Key Behaviors:**
  - Validate consistency of uploaded material.
  - Index content for semantic search.
- **User Stories:** See [UserStories.md](UserStories.md#T1)

#### **T2: Learning Trajectory Management**
- **Description:** Define topic sequences, dependencies, and mastery criteria.
- **Key Behaviors:**
  - Visual editor for dependency graphs.
- **User Stories:** See [UserStories.md](UserStories.md#T2)

#### **T3: Assignment Creation & Validation**
- **Description:** Create quizzes, assignments, exams; ensure they are testable, LLM-resilient, appropriate length/complexity.
- **Key Behaviors:**
  - AI checks for ambiguity, LLM-solvability.
- **User Stories:** See [UserStories.md](UserStories.md#T3)

#### **T4: Progress Monitoring**
- **Description:** Dashboard showing individual and cohort-level progress on learning trajectories.
- **Key Behaviors:**
  - Identify struggling students early.
- **User Stories:** See [UserStories.md](UserStories.md#T4)

#### **T5: Grading Assistance**
- **Description:** AI-assisted grading for open-ended assignments.
- **Key Behaviors:**
  - Provide draft grades and feedback for teacher review.
- **User Stories:** See [UserStories.md](UserStories.md#T5)

#### **T6: Cheating Detection**
- **Description:** Identify AI-generated submissions, anomalous patterns.
- **Key Behaviors:**
  - Flag suspicious submissions for manual review.
- **User Stories:** See [UserStories.md](UserStories.md#T6)

---

## 6. Constraints & Assumptions

### Constraints:
- Must integrate with existing course platforms (Moodle, Canvas, etc.).
- Privacy: Student data must remain confidential, GDPR/FERPA compliant.
- Teachers must manually review AI-generated grades and cheating flags.

### Assumptions:
- Teachers provide high-quality, consistent course material.
- Students have reliable internet access.
- Faculty approval for pilot deployment in 1-2 courses.

---

## 7. Dependencies & Risks

### Dependencies:
- LLM API access (OpenAI, Anthropic, or open-source models).
- RAG infrastructure (vector database, embedding models).
- Integration APIs for course platforms.

### Risks:

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Students rely on chatbot instead of learning | High | Socratic mode, progress tracking |
| Teachers distrust AI grading | Medium | Require manual review, transparency |
| Privacy breach of student data | High | Encryption, access controls, compliance audit |
| LLM generates incorrect answers | Medium | RAG grounding, confidence scores, feedback loop |
| Adoption resistance from faculty | Medium | Pilot with early adopters, training sessions |

---

## 8. Timeline / Milestones

<!-- Copilot: adjust based on semester schedule -->

| Milestone | Deadline | Deliverables |
|-----------|----------|--------------|
| **M1: PRD Finalization** | Week 3 | Approved PRD, user stories, data model |
| **M2: Prototype (Student Chatbot)** | Week 6 | Basic RAG chatbot with course material |
| **M3: Teacher Dashboard MVP** | Week 9 | Content upload, progress monitoring |
| **M4: Beta Deployment** | Week 12 | Pilot with 1-2 courses |
| **M5: Final Presentation** | Week 15 | Demo, metrics, lessons learned |

---

## 9. Glossary & References

See [Glossary.md](Glossary.md) for term definitions.

Key references:
- [CourseLLM.md](CourseLLM.md) – original brainstorm notes
- [UserStories.md](UserStories.md) – detailed user stories
- [AcceptanceCriteria.md](AcceptanceCriteria.md) – release conditions
- [DataModel.md](DataModel.md) – conceptual data model

---

**Status:** Draft  
**Last Updated:** 2025-11-06  
**Reviewed By:** [Pending]