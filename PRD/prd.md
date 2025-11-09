# CourseLLM — MVP PRD Draft  
**Team:** LLMRnD  
**Members:** Moshe Arzuan, Yuval Nachman, Alon Ganot, Nitzan Mor  

---

## Vision
Create a course-specific AI learning companion that helps Computer Science students at BGU learn better, deeper, and faster — while giving teachers insights into learning patterns.

---

## Objectives
- Provide **Socratic AI chatbot** guidance based only on course materials.  
- Allow teachers to **upload and tag slides, notes, and assignments**.  
- Support **practice questions** per topic with automatic feedback.  
- Track and visualize progress anonymously for both students and teachers.

---

## MVP Scope (11 weeks)
| Feature | Description |
|----------|-------------|
| **Chatbot** | Ask questions; AI answers with hints and guiding questions only. |
| **RAG system** | Retrieve answers only from uploaded course materials (PDF, PPTX, text). |
| **Practice generator** | 3–5 short questions per topic with instant feedback. |
| **Progress tracking** | Basic mastery view per topic: Needs Practice / Getting There / Strong. |

---

## Out of Scope
- Full LMS replacement.  
- Mobile app.  
- Full analytics dashboards (planned for next phase).  

---

## Success Criteria
- ≥ 90% of chatbot answers include a citation to source material.  
- ≥ 50% weekly active users in pilot course.  
- ≥ 20% improvement in student topic-practice scores.  
- p95 response time ≤ 6 seconds.

---

## Risks
- Hallucinations → mitigated by strict RAG + citations.  
- Scope creep → focus on MVP only.  
- Data privacy → anonymized logs only.

---
