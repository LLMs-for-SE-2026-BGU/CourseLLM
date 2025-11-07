## Detailed PRD Summary: *CourseLLM – AI Course Companion for CS Students*

Version: 1.0  
Date: November 7, 2025  
Project Duration: 11 weeks (one semester)

---

### 1. Overview and Objectives

#### Vision  
Build an AI-powered learning companion for Computer Science courses that *strengthens understanding of existing course material*.  
CourseLLM provides *course-specific, Socratic guidance* based on official resources (slides, notes, assignments) and helps teachers *monitor learning* rather than simply helping students “get answers”.

The system *does not generate new course content* and *does not replace generic AI tools*. Instead, it wraps existing materials with a controlled, measurable learning experience.

#### Key Objectives  

1. *Enhance Understanding of Course Material*  
   Guide students to reason about problems step-by-step instead of copying ready-made solutions from generic chatbots.

2. *Turn AI into a Pedagogical Tool (Not a Shortcut)*  
   Constrain the AI to course resources and Socratic patterns so that it promotes genuine learning, not answer-dumping.

3. *Support Teachers at Scale*  
   Allow a small number of instructors (e.g., 5–10 staff) to support hundreds of students with personalized guidance and analytics.

4. *Measure Learning, Not Just Activity*  
   Use quizzes, trajectories, and interaction logs to estimate what students know, how they improve, and where they struggle.

5. *Improve Courses Using Data*  
   Provide teachers with anonymized insights into common misconceptions and difficult topics, feeding back into course design.

#### Strategic Alignment  

- Students already use ChatGPT / Claude / Gemini on their own, often to bypass effort.  
- Teachers lack tools to *see what students do with AI* and to *ensure course outcomes are still met*.  
- CourseLLM aims to *embrace AI within clear boundaries*: all interactions are grounded in the course materials, logged, and summarized as learning signals.  
- This supports the faculty’s goals of maintaining academic integrity while preparing students for an AI-rich professional world.

---

### 2. Target Audience & Problem Statement

#### Primary Users: CS Students  

- *Demographics:* BGU CS students taking core courses (e.g., Intro to CS, Data Structures, Algorithms).  
- *Current Behavior:*  
  - Use general-purpose AI to solve homework quickly.  
  - Get confident during assignments but then underperform in exams.  
- *Pain Points:*  
  - Hard to tell if they truly understand or just followed AI instructions.  
  - Course materials can feel dry and disconnected from motivation.  
  - Lack timely, personalized feedback on specific weaknesses.  

#### Primary Users: Teachers & TAs  

- *Demographics:* CS lecturers and TAs responsible for course delivery and assessment.  
- *Current Behavior:*  
  - Answer repeated questions on Piazza/WhatsApp.  
  - Try to design “AI-resistant” assignments manually.  
  - See real understanding only at midterm or final.  
- *Pain Points:*  
  - Cannot monitor how students use AI tools.  
  - Little visibility into topic-level misconceptions.  
  - Time-consuming to create quizzes, exams, and variations.  

#### Problem Statement  

- *For students:* Generic AI tools provide solutions without context or pedagogy, making it too easy to “pass” assignments without mastering the material.  
- *For teachers:* There is no integrated way to provide AI-mediated help that is aligned with course materials and learning outcomes, while still preserving integrity.  

*Core problem:* We need a *course-specific AI companion* that teaches with the material, not around it, and that produces *measurable learning signals* for both students and teachers.

---

### 3. Features and Functionality  

Features are scoped and prioritized for the 11-week MVP.

---

#### MUST HAVE Features (Core MVP)

##### 3.1 Course-Bound Socratic Chatbot  

*Description:*  
A conversational interface where students ask questions and the AI responds *only based on course materials*, using a Socratic style (questions, hints, checks) rather than giving full solutions.

*Functional Requirements:*  
1. *Socratic Dialogue Engine*  
   - Ask clarifying questions before giving hints.  
   - Encourage students to write intermediate steps or reasoning.  
   - Avoid outputting full final answers for assignment-like questions.

2. *Misconception Detection*  
   - Identify typical misunderstandings (e.g., off-by-one errors, confusion between time complexity and runtime).  
   - Provide targeted follow-up questions or explanations.

3. *Scope Restriction*  
   - Use RAG over uploaded course materials (slides, notes, assignment PDFs, etc.).  
   - Reject or redirect questions that are clearly outside the course scope (“This system focuses on Data Structures; here’s how it relates…”).

4. *Session Context Awareness*  
   - Maintain local conversation state for each session (last N turns).  
   - Let students see the conversation history within a session.

---

##### 3.2 Course Material RAG System  

*Description:*  
A Retrieval-Augmented Generation pipeline that indexes course files and feeds relevant excerpts to the chatbot.

*Functional Requirements:*  
1. *Teacher Material Upload*  
   - Upload PDFs, PowerPoints, text notes, and simple code files.  
   - Extract and chunk text and basic structure (titles, sections).

2. *Vector Indexing*  
   - Create embeddings for content and store them in a vector database.  
   - Support semantic search by topic / question.

3. *Context Retrieval & Citation*  
   - Retrieve the top K relevant snippets per student question.  
   - Pass them to the LLM along with instructions.  
   - Make it possible (MVP simple form) to show “source snippet” or slide/page reference.

---

##### 3.3 Basic Personalized Practice (Quiz & Exercise Generator)  

*Description:*  
Generation of short practice items (questions/exercises) based on selected topics from course materials.

*Functional Requirements:*  
1. *Topic-Based Question Generation*  
   - Teacher chooses a topic (e.g., “Binary Search Trees – insert & search”).  
   - System generates several practice questions (MCQ and short answer) grounded in materials.

2. *Student Practice Mode*  
   - Student selects a topic and gets 3–5 practice questions.  
   - Immediate feedback: correct/incorrect, brief explanation.  

3. *Result Logging*  
   - Store which questions were attempted, scores, and timestamps.  
   - Associate with topics for later analytics.

> Note: Unlike the example PRD, we keep assessment *lighter*: short practice sessions instead of full pre/post test design, to fit the MVP scope.

---

##### 3.4 Minimal Progress & Activity Tracking  

*Description:*  
Logging interactions and practice results at a level sufficient to analyze learning signals and system use.

*Functional Requirements:*  
1. *Interaction Logs*  
   - Store each chat turn with: anonymized user identifier, course, topic (if inferred), timestamp.

2. *Practice Results*  
   - Store question-level correctness and topic tags.

3. *Student Self View (Basic)*  
   - Per topic: show “questions attempted” + “success rate” and a simple status: Needs Practice / Getting There / Strong.

4. *Privacy by Design*  
   - Teacher views are anonymized (no raw names in dashboards in MVP).  

---

#### SHOULD HAVE Features (Enhanced MVP)

##### 3.5 Learning Trajectory Definition  

*Description:*  
Allow teachers to define *ordered lists of topics* and their prerequisite relationships for a course.

*Functional Requirements:*  
1. *Trajectory Editor*  
   - Teacher defines topics (e.g., “Arrays → Linked Lists → Trees → Hash Maps”).  
   - Specify dependencies (topic A should precede topic B).

2. *Tagging Materials & Questions*  
   - Let teachers tag materials and practice questions by topic.  

3. *Per-Student Trajectory View (Simple)*  
   - For each student, compute approximate coverage: for each topic, % of practice questions attempted and success rate.

---

##### 3.6 Teacher Analytics Dashboard (Anonymized)  

*Description:*  
Dashboard for teachers to see how the class interacts with the system and which topics cause issues.

*Functional Requirements:*  
1. *Topic-Level Aggregates*  
   - Per topic: number of active students, average practice score, number of chat queries.  

2. *Common Misconceptions (Qualitative)*  
   - Automatically cluster or list frequent patterns of wrong answers or flagged misconceptions.  

3. *Representative, Anonymized Snippets*  
   - Show a few example (anonymized) questions and anonymized AI replies, so teachers see what students ask.

---

##### 3.7 Motivational Explanations Layer  

*Description:*  
Short, contextual explanations that answer: “Why should I care about this topic?”

*Functional Requirements:*  
1. *Motivation Prompts*  
   - For each topic, generate 1–2 paragraphs linking it to later courses, real-world applications, or research areas.  
   - Teacher can edit/approve descriptions.

2. *Student Access*  
   - From topic list or after a difficult question, student can ask “Why is this important?” and see the curated explanation.

---

#### COULD HAVE Features (Nice-to-Have in Design, Not Core MVP)

##### 3.8 Cheating Pattern Detection (Future)  

*Description:*  
Heuristics to detect patterns suggesting misuse (e.g., asking for full assignment solutions, copy-pasting full exam questions).

Out of scope for 11-week MVP implementation, but considered in architecture (logging, flags, metadata).

---

### 4. User Experience (UX) Requirements

#### 4.1 Student User Flow  

1. *Login & Course Selection*  
   - Student logs in (using university account or simple auth) and sees enrolled courses supported by CourseLLM.

2. *Choose Learning Mode*  
   - Ask a Question (chatbot) or Practice (topic-based questions).

3. *Chatbot Interaction*  
   - Student types a course-related question.  
   - System runs RAG, then responds with clarifying questions + hints, possibly referencing course material.  
   - Student iterates until they feel they understand.

4. *Practice Session*  
   - Student selects a topic from the course’s topic list.  
   - System gives 3–5 questions with instant feedback.  
   - Student sees brief summary of performance and link to “review with chatbot”.

5. *Progress Overview*  
   - On a simple dashboard, student sees for each topic: Questions attempted, Success rate, and a basic label like “Needs more practice”.

---

#### 4.2 Teacher / TA User Flow  

1. *Login & Course Setup*  
   - Teacher logs in and selects one of their courses.  

2. *Upload Materials*  
   - Teacher uploads lecture notes/slides/assignments.  
   - System processes and shows which files are indexed.

3. *Configure Topics & (Optional) Trajectory*  
   - Teacher defines main topics for the course and (optionally) the dependency graph.  
   - Can link certain files to topics.

4. *Generate Practice Questions (Optional for MVP)*  
   - Teacher selects a topic and asks the system to generate practice questions.  
   - Teacher can edit/remove questions and publish them.

5. *View Analytics Dashboard*  
   - Teacher sees per-topic stats (e.g., “Recursion: avg practice score 45%, many questions”).  
   - Teacher inspects anonymized examples of student misconceptions and uses this to adapt teaching.

---

### 5. Technical Specifications

#### 5.1 Technology Stack (Proposed)

- *LLM Layer*  
  - Provider: GPT-4/GPT-5 or comparable model (via API).  
  - Pattern: RAG (retrieval + prompt template enforcing Socratic behavior).  

- *Backend*  
  - Language: Python 3.11+  
  - Framework: FastAPI (REST APIs)  
  - Authentication: Simple auth or university SSO (if available and feasible in time)  
  - Logging & Metrics: Structured logs (JSON), basic analytics aggregation.

- *Data & Storage*  
  - Relational DB: PostgreSQL (courses, users, topics, logs metadata, practice results).  
  - Vector DB: Open-source FAISS or hosted (e.g., Pinecone) for document embeddings.  
  - File Storage: Local or cloud bucket for raw uploaded files.

- *Frontend*  
  - Framework: React 18 with TypeScript.  
  - UI: Simple, responsive design; basic components (chat window, topic list, dashboards).  

- *Infrastructure*  
  - Containerization: Docker + docker-compose.  
  - Deployment: University server or cloud service (e.g., Render / AWS).  
  - CI: GitHub Actions for automated tests and formatting checks (if time allows).

#### 5.2 Security & Privacy  

- HTTPS for all external traffic (where deployed).  
- Minimal personal data stored (pseudonymized student IDs where possible).  
- Teacher dashboards show *aggregated and anonymized* statistics only.  
- Logs stored in a way that allows later research but respects university policies.

---

### 6. Release Plan & Timeline (11 Weeks)

> Exact weeks can be adjusted to your course schedule – this is the high-level structure.

*Week 1–2: Requirements & Design*  
- Finalize PRD, define exact pilot course(s).  
- Sketch UX wireframes and architecture diagrams.  
- Set up repo structure and basic CI.

*Week 3–4: Core Backend & Data Layer*  
- Implement user & course models, file upload, DB schema.  
- Integrate vector store + embedding pipeline.  
- Implement basic RAG API (no UI yet).

*Week 5–6: Chatbot MVP + Basic Frontend*  
- Implement Socratic prompt templates + scope restriction.  
- Build simple React UI for chat and course selection.  
- Log interactions in DB.

*Week 7–8: Practice System & Teacher Tools (SHOULD-Have Focus)*  
- Implement topic management + simple trajectory model.  
- Add practice session generation & evaluation.  
- Build simplified teacher dashboard (per-topic aggregates).

*Week 9: Integration & Hardening*  
- End-to-end flows for student and teacher.  
- Basic load testing (tens of concurrent users).  
- Bug fixing and UX polishing.

*Week 10: Pilot Use & Feedback*  
- Onboard small group of students/teachers for 1–2 topics.  
- Collect qualitative feedback + basic usage metrics.

*Week 11: Documentation & Final Presentation*  
- Finalize technical docs and “how to use” guides.  
- Prepare presentation/demo showing learning insights and MVP metrics.  

---

### 7. Metrics for Success

#### 7.1 Learning & Understanding  

1. *Topic Practice Improvement*  
   - Compare performance on first vs. later practice sets for the same topic.  
   - Target: On average, students improve by ≥20 percentage points in topic practice scores.

2. *Conceptual Error Reduction*  
   - Frequency of typical misconceptions (e.g., wrong loop bounds) in chatbot interactions decreases over time.  
   - Target: ≥30% reduction for major misconceptions in pilot topics.

3. *Exam / Quiz Correlation (If Data Available)*  
   - Compare topic-specific exam questions for users vs. non-users.  
   - Target: Active users score ≥5–10 points higher on related questions.

#### 7.2 Teacher Value  

4. *Teacher Adoption*  
   - Number of teachers who upload materials and check analytics at least weekly.  
   - Target: ≥2–3 pilot teachers for MVP.

5. *Identified Problem Topics*  
   - Count topics where teachers adjusted teaching based on dashboard insights.  
   - Target: ≥3 topics flagged and addressed per pilot course.

#### 7.3 Student Engagement  

6. *Weekly Active Users (WAU)*  
   - % of enrolled students who use CourseLLM at least once per week.  
   - Target: ≥50–60% in pilot courses.

7. *Session Depth*  
   - Average number of back-and-forth turns in chat sessions.  
   - Target: 4–8 turns per session (indicates beyond “one-shot” answer requests).

---

### 8. Assumptions and Constraints

#### Assumptions  

- Teachers are willing to provide course files and basic topic/trajectory definitions.  
- Students have web access and are open to using CourseLLM as a study tool.  
- LLM API access is available during the semester within free/academic limits.  
- Simple anonymization is acceptable for research/analytics within university policy.

#### Constraints  

- *Time:* 11 weeks → strict scope control; focus on MUST-have features first.  
- *Budget:* Prefer free tiers / open-source components.  
- *Policy:* System must not actively help students cheat on graded assignments; prompts and UI must clearly express this.  
- *Language:* MVP likely in English (or Hebrew if course material is Hebrew); multi-language beyond scope.