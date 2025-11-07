# AcceptanceCriteria – CourseLLM (Draft)

*Version:* 1.0  
*Date:* November 7, 2025  
*Scope:* Defines measurable success conditions for the MVP described in `PRD.md`.

---

## 1. Purpose
This document specifies **what must be true** for the CourseLLM MVP to be considered successfully implemented.  
It aligns with the PRD and focuses on validating both **functional behavior** and **learning outcomes**.

---

## 2. MUST-HAVE Features

### 2.1 Socratic Chatbot
- **Socratic Interaction:**  
  The chatbot must use clarifying questions, hints, and stepwise reasoning rather than final answers.  
  At least 90% of responses should guide the student instead of providing direct solutions.

- **Course-Bound Context:**  
  The chatbot answers only questions related to uploaded course materials.  
  When unrelated queries are asked, it must respond with a clear “restricted to course scope” message.

- **Misconception Handling:**  
  When students provide incorrect or incomplete explanations, the chatbot identifies the misconception and follows up with a guiding question.

- **Session Continuity:**  
  A chat session must maintain short-term memory of at least the previous five dialogue turns for coherent discussion flow.

---

### 2.2 Course Material RAG System
- **File Upload and Processing:**  
  Teachers can upload PDFs, slides, or text documents, which the system automatically processes and stores as searchable chunks.

- **Retrieval Accuracy:**  
  When a user asks course-related questions, the top three retrieved chunks must contain relevant content at least 80% of the time during testing.

- **Citation Display:**  
  Every chatbot response must reference the source document or page/slide from which it drew its information.

- **Error Handling:**  
  Invalid file uploads are rejected gracefully with a clear error message and logged for teacher review.

---

### 2.3 Practice Generation and Feedback
- **Question Creation:**  
  The system can generate or store at least five valid questions per topic, each linked to official course materials.

- **Student Practice Flow:**  
  Students can select a topic, attempt 3–5 practice questions, receive instant feedback, and see explanations.

- **Scoring and Logging:**  
  The system must calculate correctness, record attempts with timestamps, and store data under the student’s anonymized ID.

---

### 2.4 Progress and Activity Tracking
- **Student Dashboard:**  
  Each student can see their mastery per topic labeled as *Needs Practice*, *Getting There*, or *Strong* based on success rate.

- **Teacher Overview:**  
  Teachers can view aggregated class statistics per topic — average score, number of attempts, and engagement trends.

- **Data Privacy:**  
  No personal identifiers are visible to teachers. All displayed analytics must use anonymized or aggregated data only.

---

## 3. SHOULD-HAVE Features

### 3.1 Learning Trajectories
- Teachers can define a sequence of at least five topics and their dependencies.  
- The system calculates a student’s overall trajectory completion percentage.  
- After a topic is completed, the system suggests the next logical topic to study.

### 3.2 Teacher Analytics Dashboard
- Teachers can access an anonymized dashboard summarizing class performance.  
- The system visualizes topic mastery through graphs or heatmaps.  
- Common misconceptions are detected automatically from chatbot logs and presented to teachers for review.  
- Data summaries can optionally be exported as a file for further analysis.

### 3.3 Motivational Explanations
- For each topic, an AI-generated paragraph explains why the topic matters and how it connects to other subjects.  
- Teachers can edit or approve these explanations before publishing.  
- Students can view these motivations either during chatbot interactions or from their topic dashboard.

---

## 4. Technical and Security Requirements

- **System Availability:**  
  The deployed platform should remain accessible with at least 95% uptime during testing.

- **Performance:**  
  Average chatbot response time (retrieval + generation) must not exceed 5 seconds under moderate load (up to 50 users).

- **Database Integrity:**  
  All relational and vector data must pass validation — no duplicate keys or missing references.

- **API Stability:**  
  All API endpoints (authentication, chat, upload, practice) must respond with appropriate codes and structured error messages.

- **Containerization:**  
  The application must be fully deployable through Docker Compose with clear setup documentation.

- **Security and Privacy:**  
  All external connections use HTTPS. Authentication is required for both teachers and students.  
  Logs and analytics must remain pseudonymized and comply with university data policy.

---

## 5. Educational Impact Criteria (KPIs)

These criteria assess whether CourseLLM actually improves learning outcomes and engagement.

### Learning and Understanding
- Students show at least a **20% improvement** in topic practice scores between first and last attempts.  
- Frequency of major misconceptions decreases by **30%** across the semester.

### Teacher Value
- At least **two pilot teachers** upload materials and actively use the dashboard weekly.  
- Teachers can identify and respond to at least **three topics** needing review based on analytics data.

### Student Engagement
- At least **50% of students** in pilot courses use the chatbot or practice system each week.  
- Average chatbot session includes **four or more turns**, indicating real engagement.  
- Overall student satisfaction in post-pilot surveys reaches **80% or higher**.

---

## 6. Validation Guidelines
- All features must be demonstrated within a real course pilot (e.g., Intro to CS at BGU).  
- Data collection and analysis must follow anonymization policies.  
- Educational KPIs must be supported by actual logs or survey data.  
- For metrics based on small samples, results can be normalized or adjusted with clear reasoning.  
- Acceptance will be determined jointly by the project team and course instructors during the final presentation.

---

## 7. Completion Review Checklist

**Functional Validation**
- [ ] Socratic Chatbot meets conversational and scope requirements  
- [ ] RAG system correctly retrieves and cites course materials  
- [ ] Practice and feedback cycle works end-to-end  
- [ ] Student and teacher dashboards display accurate data  

**Technical Validation**
- [ ] System runs via Docker Compose  
- [ ] Database schema passes integrity tests  
- [ ] Security and privacy verified in logs  
- [ ] Response time within limits  

**Educational Validation**
- [ ] Measurable learning improvement  
- [ ] Active teacher participation  
- [ ] High engagement and satisfaction from students  

---

*End of AcceptanceCriteria.md*