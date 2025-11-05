## Detailed PRD Summary: Socratic AI Teaching Assistant

**Version:** 1.0
**Date:** November 5, 2025
**Project Duration:** 11 weeks

---

### 1. Overview and Objectives

#### Vision
Create a Socratic learning companion for Introduction to Computer Science students that guides them to solve problems independently rather than providing direct answers. The platform enhances the learning experience around existing course material without replacing traditional teaching methods or existing AI tools.

#### Key Objectives
1.  **Improve Problem-Solving Skills:** Help students develop deep understanding and independent problem-solving abilities rather than relying on AI for quick answers.
2.  **Reduce Academic Dishonesty:** Transform AI from a cheating tool into a legitimate learning companion by implementing guided learning rather than direct answer provision.
3.  **Scale Personalized Guidance:** Enable 10 teachers to provide personalized learning experiences to 400 students through AI-assisted monitoring and adaptive feedback.
4.  **Measure Actual Learning:** Track and validate genuine learning outcomes versus task completion through pre/post assessments and progress monitoring.
5.  **Support Evidence-Based Teaching:** Provide teachers with anonymized insights into common student misconceptions and knowledge gaps to improve course materials and teaching strategies.

#### Strategic Alignment
This product addresses the challenge of students using powerful AI tools to solve assignments instantly, which creates a false sense of competency without genuine learning. By embracing AI as a teaching tool, we aim to help students leverage AI ethically, provide teachers with visibility into student understanding, create data-driven insights for course improvement, and prepare students for AI-assisted work environments while ensuring foundational knowledge.

---

### 2. Target Audience & Problem Statement

#### Primary Users: Students (400)
* **Demographics:** BGU CS university students. 
* **Current Behaviors:** Use ChatGPT/Claude to get direct answers, feel confident they understand but struggle during exams.
* **Pain Points:**
    * Existing AI tools provide answers instead of teaching.
    * Hard to know if they truly understand or just copied solutions.
    * No personalized feedback on their specific knowledge gaps.
    * Difficulty assessing own progress and readiness for exams.

#### Primary Users: Teachers (10)
* **Demographics:** CS faculty members concerned about AI impact on learning, with limited time for individual mentoring (40 students per teacher).
* **Current Behaviors:** Spend time on repetitive questions, struggle to identify which students genuinely understand, cannot provide personalized feedback to all.
* **Pain Points:**
    * Cannot detect AI-assisted cheating reliably.
    * Lack visibility into student understanding until exam time.
    * No tools to identify common misconceptions across the class.
    * Creating "AI-proof" assignments is time-consuming.

#### Problem Statement
* **For students:** Existing AI tools solve problems instead of helping students learn how to solve problems independently, creating an illusion of competency.
* **For teachers:** There is no way to monitor whether students are actually learning when they use AI tools, and they lack visibility into student progress until it's too late.
* **Core Problem:** We need a middle ground where AI actively teaches rather than just answers.

---

### 3. Features and Functionality 

Features are prioritized for the 11-week timeline.

#### MUST HAVE Features (Core MVP)

**3.1 Socratic Chatbot Interface**
* **Description:** An AI-powered conversational interface that guides students through problem-solving using the Socratic method—asking clarifying questions and providing hints rather than direct answers.
* **Functional Requirements:**
    1.  **Socratic Dialog Engine:** Ask clarifying questions before hints, use DSPy framework, progressively reveal info, never provide complete solutions.
    2.  **Misconception Detection:** Analyze responses for misunderstandings, gently challenge incorrect assumptions.
    3.  **Scope Filtering:** Detect and redirect off-topic questions.
    4.  **Context Awareness:** Remember conversation history within a session.


**3.2 Pre/Post Assessment System**
* **Description:** Short quizzes administered before and after chatbot interaction to measure learning gains per topic.
* **Functional Requirements:**
    1.  **Pre-Assessment Quiz:** 3-5 questions, multiple choice/short answer, adaptive difficulty, results show weak areas.
    2.  **Post-Assessment Quiz:** 3-5 similar difficulty questions, shows comparison to pre-quiz.
    3.  **Quiz Generation & Management:** Question bank by topic, randomized selection, immediate feedback, store results.


**3.3 Course Material RAG System**
* **Description:** Retrieval-Augmented Generation system that indexes course materials and retrieves relevant content to ground chatbot responses in official course material.
* **Functional Requirements:**
    1.  **Material Upload & Processing:** Teachers upload PDFs, slides, notes, code, etc. System extracts and structures content.
    2.  **Vector Database Indexing:** Materials embedded and stored in vector DB for semantic search.
    3.  **Retrieval & Context Integration:** Retrieve top 3-5 relevant chunks, pass to DSPy, cite sources.


**3.4 Basic Progress Tracking**
* **Description:** Log and store all student interactions, quiz results, and topic progression.
* **Functional Requirements:**
    1.  **Interaction Logging:** Log every conversation with metadata, store quiz results, track hints. All data anonymized from teacher view.
    2.  **Student Progress Dashboard:** Student can view their own history, topics mastered vs. in-progress, improvement graphs.
    3.  **Data Storage:** Structured DB for metrics, separate log storage, privacy-compliant.

---

#### SHOULD HAVE Features (Enhanced MVP)

**3.5 Adaptive Difficulty System**
* **Description:** Dynamically adjust hint level and question difficulty based on student's demonstrated knowledge level.
* **Functional Requirements:**
    1.  **Knowledge Level Tracking:** Calculate "mastery level" per topic based on quizzes, hints needed, time.
    2.  **Adaptive Hint Generation:** Struggling students get more direct hints; advanced students get more abstract hints.
    3.  **Progressive Challenge:** Introduce more complex edge cases as student masters basics.

**3.6 Anonymized Teacher Dashboard**
* **Description:** Analytics dashboard showing aggregate class performance and common misconceptions without revealing individual student identities.
* **Functional Requirements:**
    1.  **Topic-Level Analytics:** Heatmap of class performance, average improvement, mastery rates.
    2.  **Misconception Detection:** Aggregate common incorrect answers, pattern detection.
    3.  **Anonymized Conversation Samples:** Random selection of excerpts, student IDs replaced.
    4.  **Early Warning System:** Alert when >30% of students score <50% on a post-quiz.


**3.7 Auto-Generated Quiz Bank**
* **Description:** Use LLM to automatically generate quiz questions based on course material, with teacher review and approval.
* **Functional Requirements:**
    1.  **Question Generation:** Analyze material, generate multiple question types (multiple choice, short answer, code completion, bug ID), and difficulty levels based on Bloom's taxonomy.
    2.  **Teacher Review Interface:** Teachers can view, edit, approve, or reject questions.
    3.  **Question Bank Management:** Organize questions by topic/difficulty, track usage.


**3.8 LLM-Resilient Assignment Generator**
* **Description:** Generate personalized variations of assignments to prevent students from sharing AI-generated solutions.
* **Functional Requirements:**
    1.  **Assignment Template Creation:** Teachers upload a base assignment with specified variation points (variables, data, context).
    2.  **Variation Generation:** Generate 400+ unique variations (syntactic, semantic, structural, conceptual).
    3.  **Example Variations:** E.g., "find max value" $\rightarrow$ "find min value" or "find second-largest value".
    4.  **Quality Assurance:** Verify all variations test the same concepts and have equivalent difficulty, generate reference solutions.
    5.  **Batch Export:** Export personalized assignments with student identifiers.

---

#### COULD HAVE Features (Nice-to-Have)

**3.9 Real-Time Collaboration Detection**
* **Description:** Detect when multiple students are working on the same problem simultaneously or submitting suspiciously similar solutions.
* **Scope:** Out of scope for initial 11-week release but included in design considerations.

---

### 4. User Experience (UX) Requirements

#### 4.1 Student User Flow
The primary learning flow is as follows:
1.  **Login & Course Selection:** Student logs in, sees available topics (Loops, Functions, etc.).
2.  **Select Topic:** Student clicks on a topic like "Recursion".
3.  **Pre-Assessment Quiz:** A 3-5 question quiz tests baseline understanding. Results are shown (e.g., "You scored 2/5 (40%)", "You need work on: Recursive call syntax").
4.  **Socratic Chatbot Interaction:** Student engages with the bot, which asks guiding questions (e.g., "What might prevent it from running forever?") and never gives direct answers.
5.  **Post-Assessment Quiz:** A 3-5 question quiz of similar difficulty tests the same concepts. Results show improvement (e.g., "You scored 4/5 (80%)", "🎉 Improvement: +40 percentage points!").
6.  **Progress Logging & Next Steps:** The topic is marked as "In Progress" or "Mastered," and the system suggests a next topic.

#### 4.2 Teacher User Flow
The teacher flow is as follows:
1.  **Login & Dashboard Access:** Teacher logs in and views the course dashboard.
2.  **Upload & Manage Course Materials:** Teacher uploads PDFs, notes, etc. The system processes and indexes the content.
3.  **Monitor Anonymized Analytics:** Teacher views a heatmap of topic performance (e.g., "Recursion: +25% ⚠️") and sees insights like "Arrays topic: 32% of students scored <50% on post".
4.  **Review Anonymized Conversation Samples:** Teacher clicks a topic to see random, anonymized conversation excerpts to understand student confusion.
5.  **Use AI Tools (Should Have):** Teacher uses the tool to generate quiz questions for review or create assignment variations.
6.  **Adjust Teaching Based on Data:** Teacher identifies topics needing clarification and updates course materials based on insights.

---

### 5. Technical Specifications

#### 5.1 Technology Stack
* **LLM Layer:**
    * Framework: DSPy (for structured prompting).
    * LLM Provider: OpenAI GPT-4 or Anthropic Claude.
    * Fallback: Local model (Llama 3).
* **Backend:**
    * Language: Python 3.11+.
    * Web Framework: FastAPI.
    * Task Queue: Celery.
    * Background Jobs: Redis.
* **Database:**
    * Primary Database: PostgreSQL 15+.
    * Vector Database: Pinecone or Weaviate.
    * Caching: Redis.
* **Frontend:**
    * Framework: React 18+ with TypeScript.
    * State Management: Redux Toolkit or Zustand.
    * UI Library: Material-UI or Tailwind CSS + shadcn/ui.
* **Infrastructure:**
    * Hosting: University servers or cloud (AWS/GCP/Azure).
    * Containerization: Docker + Docker Compose.
    * CI/CD: GitHub Actions.

#### 5.3 Security & Privacy
* **Authentication:** University single sign-on (SAML/OAuth).
* **Role-Based Access Control (RBAC):** Students access only their data; Teachers access only anonymized aggregate data.
* **Anonymization Strategy:** Teacher dashboard uses aggregate functions (COUNT, AVG); conversation samples are randomized and stripped of user_id.
* **API Security:** Rate limiting (10 questions/day per student), input validation, HTTPS only.

---

### 6. Release Plan & Timeline (11 Weeks)

* **Week 1-2: Requirements & Core Design**
    * **Deliverables:** Approved PRD (this document), system architecture diagram, wireframes, database schema, GitHub repos.
* **Week 3-4: MVP Backend Development**
    * **Deliverables:** User authentication, database models, core API endpoints (chat, quiz, progress), basic DSPy Socratic prompting (v1).
* **Week 5-6: RAG System + Chatbot Core**
    * **Deliverables:** Material upload functionality, vector DB integration, RAG retrieval in chatbot, pre/post quiz logic, 30-40 quiz question pairs created.
* **Week 7-8: Frontend + Teacher Tools (Should Have)**
    * **Deliverables:** Complete React frontend (chat, quiz, student dashboard), anonymized teacher dashboard, Quiz Bank Generator, Assignment Variation Generator (Prototype).
* **Week 9: Integration, Testing & Optimization**
    * **Deliverables:** End-to-end user flow testing, performance testing (load test 100 users, response time < 5s), security audit (verify anonymization), API cost optimization.
* **Week 10: Pilot Testing + Iteration**
    * **Deliverables:** Pilot launch (2-3 topics, 50-100 students), data collection (100+ conversations), student/teacher feedback surveys, analysis of learning gains, critical bug fixes.
* **Week 11: Final Documentation + Presentation**
    * **Deliverables:** Complete PRD, technical documentation, user guides, Pilot Study Report (with key metrics), final presentation with live demo.

---

### 7. Metrics for Success

#### 7.2 Primary Success Metrics (Learning)
* **Metric 1: Pre/Post Quiz Improvement (Primary KPI):** Percentage point improvement from pre-quiz to post-quiz per topic.
    * **Target:** Average $\geq$ 40% improvement per topic.
* **Metric 2: Topic Mastery Rate:** Percentage of students who achieve $\geq$80% on post-quiz per topic.
    * **Target:** $\geq$60% of students reach mastery per topic.
* **Metric 3: Learning Retention (1-2 Weeks Later):** Score on surprise mini-quiz on a previously "mastered" topic.
    * **Target:** $\geq$70% retention rate.
* **Metric 4: Final Grade Correlation (Overall):** Comparison of final course grades between active users vs. non-users.
    * **Target:** Active users score 10+ percentage points higher on final exam.
* **Metric 5: Midterm Improvement (Aggregate):** Comparison of midterm scores for users vs. non-users.
    * **Target:** Active users score 5+ percentage points higher on midterm.

#### 7.4 Teacher Value Metrics
* **Metric 8: Early Warning System Effectiveness:** Number of "high struggle" topics flagged and successfully addressed by teacher intervention.
    * **Target:** Teachers receive alerts for 3-5 topics, adjust teaching, and see improvement.
* **Metric 11: Teacher Adoption Rate:** Percentage of teachers who actively use the dashboard and upload materials.
    * **Target:** $\geq$80% of teachers (8 out of 10) upload materials and check dashboard weekly.

#### 7.5 Student Engagement Metrics
* **Metric 12: Weekly Active Users:** Percentage of enrolled students who use the chatbot at least once per week.
    * **Target:** $\geq$60% weekly active users.
* **Metric 13: Session Depth:** Average number of back-and-forth message exchanges per session.
    * **Target:** 5-10 exchanges per session (indicates meaningful engagement).

---

### 8. Assumptions and Constraints

#### 8.1 Assumptions
* **Student Motivation:** Students are genuinely interested in learning, not just getting grades.
* **Teacher Willingness:** Teachers will upload course materials and are willing to spend 2-3 hours on setup.
* **Teacher Trust:** Teachers accept they cannot see individual student conversations due to the privacy design.
* **API Access:** Free/sponsored LLM API access continues for the project duration.
* **DSPy Effectiveness:** The DSPy framework can effectively implement Socratic prompting.

#### 8.2 Constraints
* **Budget:** Zero monetary budget. Must use free tiers and open-source tools.
* **API Costs:** Risk of exceeding free limits. Mitigated by rate limiting and caching.
* **Time:** Very tight 11-week timeline. Mitigated by ruthless prioritization of MUST HAVE features.
* **Privacy & Compliance:** Must protect student data. Anonymization is a hard constraint.
* **Academic Integrity:** System must not enable cheating; the Socratic method is a hard constraint.
* **LLM Limitations:** Cannot control model behavior 100%; it may occasionally give direct answers despite prompting.
* **Scope:** Limited to a single course (Intro to CS) and English-only for the MVP.