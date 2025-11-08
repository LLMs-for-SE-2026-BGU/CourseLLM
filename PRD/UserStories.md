# User Stories - CourseLLM

## User Personas

### Persona 1: First-Year CS Student

**Background:** A first-year CIS student at BGU taking introductory programming courses. This student learns at their own pace and sometimes struggles with understanding prerequisite concepts before moving forward.

**Goals:**

-   Understand course material thoroughly, not just complete assignments
-   Get help debugging code without directly getting solutions
-   Track their learning progress and identify knowledge gaps
-   Access additional resources matched to their current understanding level

**Pain Points:**

-   Fixed-pace lectures don't match their learning speed
-   Unclear which topics are prerequisites for current material
-   Cannot assess own understanding until exam time
-   Debugging issues block progress on learning core concepts

### Persona 2: Advanced CS Student

**Background:** A fourth-year CIS student taking advanced courses. This student is comfortable with AI tools but wants to ensure they're truly learning, not just completing assignments.

**Goals:**

-   Deep understanding of advanced topics for career preparation
-   Verify mastery of concepts before exams
-   Find relevant research papers and advanced materials
-   Practice with challenging problems that require real understanding

**Pain Points:**

-   Tempted to use ChatGPT for quick answers, risking shallow learning
-   Hard to find supplementary materials at the right difficulty level
-   Wants to confirm understanding between assignment submissions
-   Needs practice problems that can't be solved by AI shortcuts

### Persona 3: Course Instructor

**Background:** A faculty member who teaches a core algorithms course with 120 students. This instructor is concerned about students using AI to complete assignments without learning.

**Goals:**

-   Identify which concepts the class struggles with in real-time
-   Create assignments that resist AI shortcuts
-   Monitor class-wide progress without invading student privacy
-   Reduce repetitive office hours questions
-   Generate practice problems efficiently

**Pain Points:**

-   No visibility into student understanding between submissions
-   Assignments easily solved by copying prompts to ChatGPT
-   Cannot identify struggling concepts until exam results
-   Office hours consumed by repetitive questions
-   Creating good practice problems is time-consuming

### Persona 4: Teaching Assistant

**Background:** A graduate student assisting with multiple courses. This TA helps grade assignments and holds office hours.

**Goals:**

-   Support students effectively during office hours
-   Identify common misconceptions across the class
-   Help instructors create fair assessments
-   Monitor which course materials need clarification

**Pain Points:**

-   Same questions asked repeatedly by different students
-   Limited time to provide personalized help to all students
-   Difficult to gauge which topics need more explanation
-   Cannot track individual student progress across semester

## User Stories by Feature

### Feature 1: Course Material Chatbot

#### Student Stories

**US-1.1:** As a first-year student, I want to be able to ask questions about course material in natural language, so that I can get help understanding concepts when I'm stuck.

**Acceptance Criteria:**

-   Chatbot accepts text input questions
-   Questions must relate to uploaded course materials
-   System rejects off-topic questions with explanation
-   Response time under 3 seconds

**US-1.2:** As an advanced student, I want to be able to receive responses using Socratic method, so that I can develop deep understanding rather than memorizing answers.

**Acceptance Criteria:**

-   Chatbot asks clarifying questions before providing explanations
-   Responses guide student to discover answers
-   Direct answers only provided after student demonstrates reasoning
-   Follow-up questions test understanding of previous explanations

**US-1.3:** As a student, I want to be able to receive responses matched to my current knowledge level, so that I can understand explanations that aren't too simple or too complex.

**Acceptance Criteria:**

-   System tracks concepts student has demonstrated understanding of
-   Responses use terminology appropriate to student's progress level
-   Explanations reference previously mastered concepts
-   Difficulty level adjusts based on conversation history

**US-1.4:** As a student, I want to be able to see my conversation history, so that I can review previous explanations and track my learning progress.

**Acceptance Criteria:**

-   All conversations saved with timestamps
-   Student can search conversation history
-   Conversations organized by topic/concept
-   Export conversation history to text format

### Feature 2: Progress Tracking

#### Student Stories

**US-2.1:** As a student, I want to be able to see which concepts I have mastered, so that I can identify what I still need to learn.

**Acceptance Criteria:**

-   Visual display of mastered vs. not-mastered concepts
-   Color-coded status: mastered (green), in-progress (yellow), not-started (gray)
-   Percentage completion shown for each topic area
-   Updated automatically based on conversation analysis

**US-2.2:** As a student, I want to be able to view the learning trajectory for my course, so that I can understand prerequisite relationships between concepts.

**Acceptance Criteria:**

-   Graph visualization showing concept dependencies
-   Click on concept to see detailed description
-   Path highlighting showing recommended learning order
-   Indication of current position in trajectory

**US-2.3:** As a student, I want to be able to have the system identify my knowledge gaps, so that I can focus study efforts effectively.

**Acceptance Criteria:**

-   System analyzes conversation patterns to detect gaps
-   Gap identification shown in progress view
-   Suggestions provided for filling identified gaps
-   Gaps linked to specific course materials

### Feature 3: Resource Linking

#### Student Stories

**US-3.1:** As a student, I want to be able to receive chatbot responses that reference specific course materials, so that I can review original sources.

**Acceptance Criteria:**

-   References include slide numbers, page numbers, or section titles
-   Links are clickable to view referenced material
-   Multiple sources provided when relevant
-   References are accurate and verifiable

**US-3.2:** As a student, I want to be able to access links to additional resources (papers, videos, tutorials), so that I can explore topics more deeply.

**Acceptance Criteria:**

-   External resources matched to student's level
-   Resources tagged by topic and difficulty
-   Brief description provided for each resource
-   Resources curated by course instructor

**US-3.3:** As a student, I want to be able to receive exercise suggestions at appropriate difficulty, so that I can practice concepts effectively.

**Acceptance Criteria:**

-   Exercises matched to current skill level
-   Difficulty increases as student progresses
-   Mix of problem types (conceptual, coding, debugging)
-   Solutions available after genuine attempt

### Feature 4: Technical Assistance

#### Student Stories

**US-4.1:** As a first-year student, I want to be able to receive step-by-step guidance for tool installation, so that I can overcome setup issues that might prevent me from learning course content.

**Acceptance Criteria:**

-   Platform-specific installation instructions (Windows, Mac, Linux)
-   Common error messages and solutions provided
-   Verification steps to confirm successful installation
-   Links to official documentation

**US-4.2:** As a student, I want to be able to receive help interpreting error messages, so that I can debug my code independently.

**Acceptance Criteria:**

-   System explains what error message means
-   Suggests common causes for the error
-   Provides debugging strategies without giving direct solution
-   References relevant course materials about error handling

**US-4.3:** As a student, I want to be able to receive debugging strategies without direct solutions, so that I can learn problem-solving skills.

**Acceptance Criteria:**

-   Chatbot asks diagnostic questions before suggesting fixes
-   Guides through systematic debugging process
-   Explains reasoning behind debugging approach
-   Never provides complete solution to homework problems

### Feature 5: Practice Generation

#### Student Stories

**US-5.1:** As a student, I want to be able to generate quiz questions on specific topics, so that I can test my understanding.

**Acceptance Criteria:**

-   Quiz questions generated from course materials
-   Difficulty level selectable by student
-   Mix of multiple choice and free response questions
-   Immediate feedback on answers

**US-5.2:** As a student, I want to be able to receive coding exercises that adapt to my level, so that I can practice at the right difficulty.

**Acceptance Criteria:**

-   Exercises start at current student level
-   Difficulty increases with successful completion
-   Partial credit for incomplete solutions
-   Hints available without giving away full solution

**US-5.3:** As a student, I want to be able to have my practice solutions checked with detailed feedback, so that I can learn from mistakes.

**Acceptance Criteria:**

-   Automated checking of code correctness
-   Explanation of what's wrong, not just "incorrect"
-   Suggestions for improvement without direct solution
-   Test cases shown to illustrate errors

### Feature 6: Content Upload & Indexing

#### Teacher Stories

**US-6.1:** As an instructor, I want to be able to upload course materials (slides, notes, assignments), so that I can make them accessible to students through the chatbot.

**Acceptance Criteria:**

-   Drag-and-drop file upload interface
-   Support for documents PDF, PPTX, DOCX, MD formats
-   Support for Audio and Video formats
-   Support for referencing external online resources 
-   Bulk upload of multiple files
-   Upload progress indicator

**US-6.2:** As an instructor, I want to be able to have the system index uploaded content, so that I can ensure the chatbot retrieves relevant information accurately.

**Acceptance Criteria:**

-   Indexing completes within 5 minutes of upload
-   Content searchable by keywords
-   Vector embeddings created for RAG retrieval
-   Indexing status visible to instructor

**US-6.3:** As an instructor, I want to be able to have terminology consistency validated across materials, so that I can ensure students aren't confused by different terms for the same concepts.

**Acceptance Criteria:**

-   System identifies inconsistent terminology
-   Warnings shown for detected inconsistencies
-   Suggestions provided for standardization
-   Manual override option available

### Feature 7: Class-Wide Dashboard

#### Teacher Stories

**US-7.1:** As an instructor, I want to be able to see class-wide progress distribution, so that I can identify topics that need more attention in lectures.

**Acceptance Criteria:**

-   Heatmap showing concept mastery across class
-   Percentage of students at each level (mastered, in-progress, not-started)
-   Data aggregated with no individual student identification
-   Updated in real-time as students use system

**US-7.2:** As an instructor, I want to be able to identify concepts where many students struggle, so that I can provide targeted help.

**Acceptance Criteria:**

-   Concepts automatically flagged when >30% of class shows confusion
-   Flagged concepts highlighted on dashboard
-   Common misconceptions extracted from conversations
-   Historical trend showing if concept difficulty is improving

**US-7.3:** As an instructor, I want to be able to view engagement metrics (questions asked, time spent, topics discussed), so that I can assess course effectiveness.

**Acceptance Criteria:**

-   Metrics displayed as charts and graphs
-   Time-series data showing engagement over semester
-   Breakdown by topic and week
-   Comparison to previous semester (if available)

**US-7.4:** As an instructor, I want to be able to have all data views aggregated at class level, so that I can ensure student privacy is protected.

**Acceptance Criteria:**

-   No individual student lookup functionality
-   All metrics show class-level statistics only
-   Minimum aggregation threshold (e.g., at least 5 students)
-   Privacy policy clearly communicated

### Feature 8: Learning Trajectory Definition

#### Teacher Stories

**US-8.1:** As an instructor, I want to be able to define prerequisite relationships between concepts, so that I can ensure students learn topics in the correct order.

**Acceptance Criteria:**

-   Visual graph editor for creating dependency relationships
-   Drag-and-drop concept nodes
-   Connect nodes to define prerequisites
-   Validate no circular dependencies

**US-8.2:** As an instructor, I want to be able to set difficulty levels for concepts, so that I can ensure the system adapts explanations appropriately.

**Acceptance Criteria:**

-   Difficulty scale: beginner, intermediate, advanced, expert
-   Difficulty affects chatbot response complexity
-   Visual indication of difficulty in trajectory graph
-   Bulk edit difficulty for related concepts

**US-8.3:** As an instructor, I want to be able to specify order of topic presentation, so that I can ensure the chatbot guides students through logical progression.

**Acceptance Criteria:**

-   Numbered or sequenced concept order
-   Chatbot suggests next topic after mastery
-   Student can view recommended learning path
-   Manual override by student allowed (with warning)

### Feature 9: Assignment Generation

#### Teacher Stories

**US-9.1:** As an instructor, I want to be able to generate quiz questions from course material, so that I can create assessments efficiently.

**Acceptance Criteria:**

-   Questions generated from uploaded materials
-   Specify number of questions and difficulty
-   Mix of question types (multiple choice, short answer, coding)
-   Edit generated questions before use

**US-9.2:** As an instructor, I want to be able to have questions verified to test relevant concepts, so that I can ensure assessments measure actual understanding.

**Acceptance Criteria:**

-   Each question tagged with concepts tested
-   Coverage report showing which concepts are assessed
-   Warning if important concepts not covered
-   Difficulty distribution report

**US-9.3:** As an instructor, I want to be able to receive estimated difficulty and time requirements for assignments, so that I can ensure workload is appropriate.

**Acceptance Criteria:**

-   Time estimate based on question complexity and count
-   Difficulty rating for overall assignment
-   Comparison to previous assignments
-   Adjustment suggestions if too easy/hard

### Feature 10: Assignment Validation

#### Teacher Stories

**US-10.1:** As an instructor, I want to be able to check if assignments can be solved by direct AI prompting, so that I can ensure academic integrity.

**Acceptance Criteria:**

-   System tests assignment against GPT-4 and Claude
-   Report shows if AI can solve without course knowledge
-   Specific problems flagged as "AI-solvable"
-   Detailed explanation of AI's solution approach

**US-10.2:** As an instructor, I want to be able to receive suggestions for modifications to increase AI-resistance, so that I can ensure assignments require genuine understanding.

**Acceptance Criteria:**

-   Specific modification suggestions for each flagged problem
-   Examples of multi-step problems requiring comprehension
-   Techniques for increasing problem complexity
-   Before/after comparison of AI-resistance

**US-10.3:** As an instructor, I want to be able to verify multi-step problems require understanding, so that I can ensure students must engage with course material.

**Acceptance Criteria:**

-   Analysis of prerequisite concepts required
-   Verification that solution requires multiple concept integration
-   Check that problem cannot be decomposed into simple prompts
-   Rating of problem quality (low/medium/high resistance)

---

## Epic Summary

| Epic ID | Epic Name                      | User Stories                   |
| ------- | ------------------------------ | ------------------------------ |
| E1      | Course Material Chatbot        | US-1.1, US-1.2, US-1.3, US-1.4 |
| E2      | Progress Tracking              | US-2.1, US-2.2, US-2.3         |
| E3      | Resource Linking               | US-3.1, US-3.2, US-3.3         |
| E4      | Technical Assistance           | US-4.1, US-4.2, US-4.3         |
| E5      | Practice Generation            | US-5.1, US-5.2, US-5.3         |
| E6      | Content Upload & Indexing      | US-6.1, US-6.2, US-6.3         |
| E7      | Class-Wide Dashboard           | US-7.1, US-7.2, US-7.3, US-7.4 |
| E8      | Learning Trajectory Definition | US-8.1, US-8.2, US-8.3         |
| E9      | Assignment Generation          | US-9.1, US-9.2, US-9.3         |
| E10     | Assignment Validation          | US-10.1, US-10.2, US-10.3      |

---

_Document Version: 1.0_  
_Last Updated: November 2025_  
_Status: Ready for Development Planning_
