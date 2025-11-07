# User Stories – CourseLLM

## Format
Each user story follows this structure:
- **ID:** Unique identifier
- **As a...** (persona)
- **I want to...** (action)
- **So that...** (benefit)
- **Acceptance Criteria:** Specific, testable conditions

---

## Student User Stories

### F1: Course Material Chatbot

#### US-S1.1: Ask Course-Specific Questions
- **As a** Computer Science student (Alex)
- **I want to** ask questions about course material in natural language
- **So that** I can quickly clarify concepts without searching through slides
- **Acceptance Criteria:**
  - System responds only to questions within course scope
  - Off-topic questions receive polite redirection
  - Response time < 5 seconds

#### US-S1.2: Socratic Guidance
- **As a** student struggling with a concept
- **I want to** receive clarifying questions before getting direct answers
- **So that** I develop deeper understanding instead of memorizing solutions
- **Acceptance Criteria:**
  - Chatbot asks 1-2 clarifying questions before answering
  - Questions probe misconceptions, not just repeat the query
  - Student can request direct answer if stuck

#### US-S1.3: Level-Appropriate Responses
- **As a** student at a specific point in my learning journey
- **I want to** receive explanations adjusted to my current knowledge level
- **So that** I'm not overwhelmed with advanced concepts or bored with basics
- **Acceptance Criteria:**
  - System uses learning trajectory progress to adjust response complexity
  - Student can request "simpler" or "more detailed" explanations
  - Avoids forward references to untaught topics

---

### F2: Personalized Learning Trajectories

#### US-S2.1: View Learning Progress
- **As a** student
- **I want to** see my progress through course topics in a visual skill tree
- **So that** I understand what I've mastered and what's next
- **Acceptance Criteria:**
  - Skill tree shows completed, in-progress, and locked topics
  - Progress percentages per topic
  - Estimated time to complete remaining topics

#### US-S2.2: Recommended Next Steps
- **As a** student who just completed a topic
- **I want to** receive recommendations for what to study next, including both required next topics and optional advanced topics beyond the course syllabus
- **So that** I follow an optimal learning path and can explore deeper if interested
- **Acceptance Criteria:**
  - System suggests next required topic based on prerequisites
  - Optionally suggests advanced topics beyond the syllabus (clearly marked as "optional" and "not required for course completion")
  - Chatbot explicitly states when suggesting advanced content that it's supplementary
  - Explains why each topic is recommended
  - Allows student to choose alternative path

---

### F3: Practice & Assessment Generation

#### US-S3.1: Generate Practice Quiz
- **As a** student preparing for an exam
- **I want to** generate practice quizzes on specific topics
- **So that** I can test my understanding before the real exam
- **Acceptance Criteria:**
  - Student selects topics and difficulty level
  - Quiz contains 5-10 questions
  - Instant feedback with explanations
  - Performance saved to learning trajectory

#### US-S3.2: Adaptive Difficulty
- **As a** student practicing a topic
- **I want to** receive progressively harder or easier questions based on my performance, with questions becoming increasingly challenging as I demonstrate mastery
- **So that** I'm always challenged at the right level and can build deeper understanding through progressive difficulty
- **Acceptance Criteria:**
  - System adjusts difficulty after 3 consecutive correct/incorrect answers
  - Questions become progressively tougher within each practice session as student succeeds
  - Difficulty increase follows a structured progression (basic → intermediate → advanced → expert)
  - Can manually override difficulty

---

### F4: Motivation & Context

#### US-S4.1: Understand Real-World Applications
- **As a** student learning abstract concepts
- **I want to** see examples of how this material is used in industry/research
- **So that** I stay motivated and understand relevance
- **Acceptance Criteria:**
  - Each topic has 1-3 real-world case studies
  - Links to external resources (articles, videos)
  - Examples updated annually

#### US-S4.2: Explore Topic Beauty
- **As a** curious student
- **I want to** learn about the historical context and elegance of concepts
- **So that** I appreciate the intellectual journey of computer science
- **Acceptance Criteria:**
  - Historical notes, key contributors
  - Explanations of "why this solution is elegant"
  - Optional deep dives (not required for course)

---

### F5: Technical Support

#### US-S5.1: Debug Installation Issues
- **As a** student setting up course tools
- **I want to** get step-by-step help when installation fails
- **So that** I don't waste hours on environment setup
- **Acceptance Criteria:**
  - System diagnoses common errors (missing dependencies, version mismatches)
  - Provides OS-specific instructions
  - Escalates to TA if issue unresolved

#### US-S5.2: Submission Help
- **As a** student ready to submit an assignment
- **I want to** verify my submission format is correct before deadline
- **So that** I don't lose points for technical errors
- **Acceptance Criteria:**
  - Pre-submission validator checks file format, naming, completeness
  - Clear error messages if validation fails
  - Confirmation message on successful submission

---

### F6: Additional Resources

#### US-S6.1: Discover Supplementary Materials
- **As a** student wanting to go deeper
- **I want to** find curated papers, videos, tutorials on current topic
- **So that** I can explore beyond course slides
- **Acceptance Criteria:**
  - Resources tagged by topic, difficulty, type
  - 3-5 top resources per topic

---

## Teacher User Stories

### T1: Content Upload & Indexing

#### US-T1.1: Upload Course Materials
- **As a** course instructor (Dr. Sarah)
- **I want to** upload slides, notes, exams, and exercises to the system
- **So that** students can access AI-enhanced learning on my existing content
- **Acceptance Criteria:**
  - Supports PDF, PPTX, DOCX, Markdown
  - Batch upload (drag-and-drop folder)
  - Progress indicator during upload

#### US-T1.2: Review Content Consistency
- **As a** instructor who uploaded multiple files
- **I want to** see a report on inconsistencies (contradictions, gaps, redundancies)
- **So that** I can fix issues before students encounter them
- **Acceptance Criteria:**
  - System flags terminology mismatches
  - Identifies missing prerequisite explanations
  - Suggests reordering topics for logical flow

#### US-T1.3: Index for RAG
- **As a** instructor
- **I want to** confirm my materials are indexed and searchable
- **So that** the chatbot gives accurate, grounded answers
- **Acceptance Criteria:**
  - Indexing completes within 10 minutes per course (system converts documents to text, splits into chunks, generates embeddings using LLM, stores in vector database)
  - Sample queries return relevant excerpts with source citations
  - Teacher can view indexing status and statistics (number of chunks, topics covered)
  - Teacher can re-index after updates (manual trigger or automatic detection of file changes)

---

### T2: Learning Trajectory Management

#### US-T2.1: Define Topic Dependencies
- **As a** instructor
- **I want to** create a dependency graph (Topic A → Topic B → Topic C)
- **So that** students follow a logical learning path
- **Acceptance Criteria:**
  - Visual editor with drag-and-drop nodes
  - Cycle detection (prevent circular dependencies)
  - Export/import as JSON

#### US-T2.2: Set Mastery Criteria
- **As a** instructor
- **I want to** define what "mastery" means for each topic (e.g., 80% on quiz)
- **So that** students know when they're ready to move on
- **Acceptance Criteria:**
  - Per-topic thresholds (quiz score, exercise completion)
  - Optional: require TA/instructor verification
  - Default criteria suggested by system

---

### T3: Assignment Creation & Validation

#### US-T3.1: Generate Assignment Template
- **As a** instructor
- **I want to** generate a draft assignment on a specific topic
- **So that** I save time on initial creation
- **Acceptance Criteria:**
  - Specify topic, type (quiz, coding, essay), difficulty
  - System generates 3-5 questions/tasks
  - Teacher edits before publishing

#### US-T3.2: Validate Testability
- **As a** instructor
- **I want to** verify all questions have clear, unambiguous correct answers and test LLM resilience
- **So that** grading is fair and consistent and assignments require deeper thinking
- **Acceptance Criteria:**
  - System flags ambiguous wording
  - System runs assignment through LLM and provides sample solutions
  - Flags assignments as "too easy" if LLM solves in < 30 seconds
  - Suggests modifications to increase LLM resilience (require code explanation, add constraints, require multi-step reasoning)
  - Suggests rubric criteria for open-ended questions
  - Teacher approves before final publish

---

### T4: Progress Monitoring

#### US-T4.1: View Class Dashboard
- **As a** instructor
- **I want to** see aggregate progress of all students on learning trajectories
- **So that** I know if the class is on track or needs intervention
- **Acceptance Criteria:**
  - Heatmap: students × topics, color-coded by mastery
  - Identify topics where >30% of students struggle
  - Export data as CSV

#### US-T4.2: Identify At-Risk Students
- **As a** instructor
- **I want to** receive alerts when a student falls significantly behind
- **So that** I can offer help before they fail
- **Acceptance Criteria:**
  - Alert if student 2+ weeks behind median progress
  - Shows student's specific struggles (topic-level)
  - One-click email template to student

---

### T5: Grading Assistance

#### US-T5.1: Automated Code Validation
- **As a** instructor grading coding assignments
- **I want to** automatically run a suite of unit tests against all student submissions
- **So that** I can quickly verify code correctness, style, and efficiency at scale.
- **Acceptance Criteria:**
  - System suggests unit tests for the assignment based on requirements (teacher reviews and approves).
  - Runs the approved test suite against all submissions in a sandboxed environment.
  - Provides a dashboard showing correctness scores (pass/fail), code style reports, and efficiency metrics for each submission.
  - Teacher can view detailed test results for each student.

#### US-T5.2: Suspicious Submission Flagging
- **As a** instructor grading coding assignments
- **I want the system to** automatically flag submissions with unusual patterns
- **So that** I can manually investigate potential plagiarism or AI-generated code.
- **Acceptance Criteria:**
  - System flags submissions with high similarity to other submissions in the class.
  - System flags submissions with code patterns that are unusually sophisticated or stylistically different from the student's prior work.
  - Flagged submissions are presented in a dedicated review queue with a summary of the reason for the flag.
  - The system does not assign guilt, it only flags for manual review.

#### US-T5.3: AI-Assisted Essay Grading
- **As a** instructor grading essay or open-ended submissions
- **I want to** receive draft grades and feedback from AI
- **So that** I focus on edge cases and nuanced evaluation instead of repeating common feedback.
- **Acceptance Criteria:**
  - AI grades based on a rubric provided by the teacher.
  - Provides sentence-level comments and suggestions aligned with the rubric.
  - Identifies common themes or misconceptions across all submissions.
  - Teacher reviews, edits, and approves all AI-generated feedback before publishing.
  - System learns from teacher corrections to improve future suggestions.

---

### T6: Cheating Detection

#### US-T6.1: Detect AI-Generated Submissions
- **As a** instructor
- **I want to** identify submissions likely written by ChatGPT/Copilot
- **So that** I can investigate academic integrity violations
- **Acceptance Criteria:**
  - AI detection score (0-100%) per submission
  - Highlights suspicious sections
  - Teacher decides on action (not auto-penalized)

#### US-T6.2: Identify Plagiarism Patterns
- **As a** instructor
- **I want to** detect copy-paste between student submissions
- **So that** I ensure individual work
- **Acceptance Criteria:**
  - Similarity matrix across all submissions
  - Threshold alerts (>70% overlap)
  - Diff view for suspected pairs

---

## System/Admin User Stories

#### US-A1: Manage Courses
- **As a** system administrator
- **I want to** create, archive, and manage courses
- **So that** instructors can onboard easily each semester
- **Acceptance Criteria:**
  - Course creation wizard
  - Import course from previous semester
  - Archive old courses (data retained, not searchable)

#### US-A2: Monitor System Health
- **As a** system administrator
- **I want to** see API usage, error rates, response times
- **So that** I ensure system reliability
- **Acceptance Criteria:**
  - Dashboard with real-time metrics
  - Alerts if error rate > 5%
  - Logs accessible for debugging

---

**Status:** Draft  
**Last Updated:** 2025-11-06  