# CourseLLM – Product Requirements Document

<!-- This is the live PRD. Update via Pull Requests only. -->

## Status
- **Version:** 0.1
- **Last Updated:** 2025-11-06
- **Approved By:** [Pending]
<!-- Ron -->
---

## 1. Overview & Vision

**Product Name:** CourseLLM

**Vision:**  
Help teachers and students in a Computer Science Department better teach and learn using AI that enhances existing course material.

**Core Principle:**  
CourseLLM enhances the learning experience around existing course material through intelligent, context-aware AI assistance, without creating new material or replacing existing tools.

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

<!-- Copilot: Sections below promoted from DraftPRD.md after review -->

### 5.1 Student Features

See [UserStories.md](UserStories.md) for detailed user stories.

- **F1: Course Material Chatbot** – AI-powered Q&A scoped to course content with socratic guidance
- **F2: Personalized Learning Trajectories** – Visual skill trees tracking mastery through topics
- **F3: Practice & Assessment Generation** – Adaptive quizzes and exercises with instant feedback
- **F4: Motivation & Context** – Real-world applications and historical context for topics
- **F5: Technical Support** – Installation help, debugging, submission validation
- **F6: Additional Resources** – Curated papers, videos, tutorials per topic

### 5.2 Teacher Features

See [UserStories.md](UserStories.md) for detailed user stories.

- **T1: Content Upload & Indexing** – Upload and index course materials for RAG
- **T2: Learning Trajectory Management** – Define topic dependencies and mastery criteria
- **T3: Assignment Creation & Validation** – Generate and test LLM-resilient assignments
- **T4: Progress Monitoring** – Dashboard showing class and individual student progress
- **T5: Grading Assistance** – AI-assisted grading with human review
- **T6: Cheating Detection** – Flag AI-generated and plagiarized submissions

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
- LLM API access (OpenAI, Anthropic, or open-source models)
- RAG infrastructure (vector database, embedding models)
- Integration APIs for course platforms

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

| Milestone | Deadline | Deliverables |
|-----------|----------|--------------|
| **M1: PRD Finalization** | Week 3 | Approved PRD, user stories, data model |
| **M2: Prototype (Student Chatbot)** | Week 6 | Basic RAG chatbot with course material |
| **M3: Teacher Dashboard MVP** | Week 9 | Content upload, progress monitoring |
| **M4: Beta Deployment** | Week 12 | Pilot with 1-2 courses |
| **M5: Final Presentation** | Week 15 | Demo, metrics, lessons learned |

---

## 9. References

- [DraftPRD.md](DraftPRD.md) – Working draft and brainstorming
- [CourseLLM.md](CourseLLM.md) – Original brainstorm notes
- [UserStories.md](UserStories.md) – Detailed user stories per persona
- [DataModel.md](DataModel.md) – Conceptual data model
- [Glossary.md](Glossary.md) – Project terminology
- [AcceptanceCriteria.md](AcceptanceCriteria.md) – Release conditions

---

**Document Control:**
- **Status:** Living Document
- **Version:** 0.1
- **Last Updated:** 2025-11-06
- **Next Review:** Week 3 (after user story validation)