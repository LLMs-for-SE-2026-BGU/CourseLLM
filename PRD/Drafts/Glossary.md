3. Glossary :
# Glossary – CourseLLM (Compact Draft)

Version: 1.0  
Date: November 7, 2025  
Scope: Core terms, definitions, and contexts used consistently in PRD.md and DataModel.md.

---

## Purpose
This glossary defines the essential terminology specific to *CourseLLM*, providing concise meanings and context of use within the system.  
Trivial or generic software terms are excluded for clarity.

---

### *CourseLLM*
*Definition:* The overall system — an AI-powered learning companion designed for university CS courses.  
*Context:* Provides course-bound Socratic assistance, personalized practice, and teacher analytics grounded in course materials.

---

### *MVP (Minimum Viable Product)*
*Definition:* The first deliverable prototype completed in 11 weeks.  
*Context:* Implements only MUST-HAVE features — Socratic chatbot, RAG system, practice generation, and progress tracking.

---

### *LLM (Large Language Model)*
*Definition:* AI model (e.g., GPT-5, Claude) capable of generating and understanding human language.  
*Context:* Powers the chatbot; responses are restricted to course content through RAG.

---

### *RAG (Retrieval-Augmented Generation)*
*Definition:* Architecture combining document retrieval with language generation.  
*Context:* Ensures chatbot answers are based only on uploaded course materials, retrieved from a vector database.

---

### *Socratic Chatbot*
*Definition:* The conversational AI that teaches by questioning and guiding, not by providing answers.  
*Context:* Detects misconceptions, asks probing questions, and references course notes or slides for accuracy.

---

### *Teacher Dashboard*
*Definition:* An anonymized analytics interface for instructors.  
*Context:* Displays topic-level performance, engagement, and common misconceptions derived from student interactions.

---

### *Learning Trajectory*
*Definition:* Ordered sequence of topics defining a logical learning path for a course.  
*Context:* Used to track progress and suggest next topics; defined by teachers.

---

### *Topic*
*Definition:* A discrete learning unit (e.g., “Recursion Basics”).  
*Context:* Used to tag materials, practice questions, and analytics results.

---

### *Material*
*Definition:* Uploaded course document (PDF, PPTX, notes, code).  
*Context:* Processed and chunked into retrievable sections for RAG.

---

### *Material Chunk*
*Definition:* A small extract of a course file used for semantic retrieval.  
*Context:* Each chunk is embedded in a vector database; retrieved to ground chatbot responses.

---

### *Vector Database*
*Definition:* Storage for semantic embeddings enabling contextual search.  
*Context:* Supports RAG by finding the most relevant material chunks per query.

---

### *Practice Question*
*Definition:* AI-generated or teacher-created quiz item linked to a topic.  
*Context:* Used for personalized practice sessions with automatic feedback.

---

### *Practice Attempt*
*Definition:* A student’s recorded response to a practice question.  
*Context:* Feeds progress tracking and analytics dashboards.

---

### *Progress Tracking*
*Definition:* Mechanism for quantifying learning improvement and topic mastery.  
*Context:* Based on attempts, chat data, and topic coverage; visible to students and teachers.

---

### *Topic Motivation*
*Definition:* Short explanation of why a topic matters.  
*Context:* AI-generated or teacher-curated; displayed in chatbot or dashboard.

---

### *Misconception Detection*
*Definition:* Identifying patterns of incorrect reasoning or misunderstanding.  
*Context:* Used by chatbot for adaptive questioning and by teachers to refine instruction.

---

### *Anonymization*
*Definition:* Removal of personal identifiers before data is visible to teachers.  
*Context:* Required for all analytics views; only aggregated statistics are shown.

---

### *Chat Session*
*Definition:* One continuous student–AI conversation.  
*Context:* Logs all exchanged messages with timestamps and topics for later analysis.

---

### *Chat Message*
*Definition:* Single utterance in a chat session (from student or assistant).  
*Context:* Contains content, timestamp, and optional reference to retrieved materials.

---

### *Trajectory Coverage*
*Definition:* Percentage of topics a student has practiced or discussed relative to a trajectory.  
*Context:* Displayed in the progress dashboard.

---

### *Topic Mastery Level*
*Definition:* Computed label representing a student’s proficiency per topic.  
*Context:* Categories: Needs Practice, Getting There, Strong; derived from success rate.

---

### *Course Role*
*Definition:* A user’s role within a specific course.  
*Context:* Determines permissions — student, teacher, or ta.

---

### *Anonymized Analytics*
*Definition:* Aggregated, privacy-compliant insights derived from student interactions.  
*Context:* Shown in the teacher dashboard without personal identifiers.

---

### *LLM-Resilient Assignment*
*Definition:* Assignment designed to encourage reasoning even when AI tools are available.  
*Context:* Planned for future versions, not in MVP scope.

---

### *DSPy (Prompt Framework)*
*Definition:* Framework for defining structured, multi-step prompts.  
*Context:* Used to enforce consistent Socratic dialogue behavior in the chatbot.

---

### *Engagement Metrics*
*Definition:* Quantitative indicators of student activity.  
*Context:* Includes Weekly Active Users (WAU) and Session Depth (average conversation length).

---

### *RAG Scope Restriction*
*Definition:* Limitation ensuring chatbot access only to authorized materials.  
*Context:* Enforced through retrieval filters and structured prompting.

---

### *KPI (Key Performance Indicator)*
*Definition:* Quantitative measure of success for learning outcomes or engagement.  
*Context:* Examples — quiz score improvement, teacher adoption rate, weekly active users.

---

### *Data Model*
*Definition:* Structured schema defining entities, relationships, and data storage layers.  
*Context:* Implemented in PostgreSQL (relational) and FAISS/Pinecone (vector) databases.

---

### *User Story*
*Definition:* Short requirement describing a user’s goal and benefit.  
*Context:* Format: As a [persona], I want to [action] so that [benefit].

---

### *Anonymized Session Data*
*Definition:* Logs of chatbot interactions stripped of identifying details.  
*Context:* Used for aggregated analytics and academic research.

---

End of Glossary.md