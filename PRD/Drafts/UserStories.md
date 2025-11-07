# UserStories – CourseLLM (Draft)

Version: 1.0  
Date: November 7, 2025  
Scope: Derived from the MUST HAVE and SHOULD HAVE functional requirements defined in PRD.md.

---

## A. Persona: The Student (CS Student)

*Focus:* Socratic interaction, personalized practice, and progress visibility.

---

*US-S-1 – Socratic Chat*  
As a student, I want to ask course-related questions so that I receive Socratic guidance (hints and clarifying questions) instead of a direct final answer.  
Derived from PRD section 3.1.1.

*US-S-2 – Misconception Check*  
As a student, I want the chatbot to identify typical misunderstandings in my reasoning so that I can correct my errors and achieve genuine mastery of the topic.  
Derived from PRD section 3.1.2.

*US-S-3 – Scope Restriction*  
As a student, I want the system to reject or redirect questions outside the course material so that I stay focused on the required learning outcomes.  
Derived from PRD section 3.1.3.

*US-S-4 – Practice Generation*  
As a student, I want to select a course topic and generate 3–5 practice questions on it so that I can immediately test my knowledge.  
Derived from PRD section 3.3.1.

*US-S-5 – Progress View*  
As a student, I want to see a simple status report ("Needs Practice", "Getting There", or "Strong") for each topic I attempt so that I know where to focus my study efforts.  
Derived from PRD section 3.4.3.

*US-S-6 – Trajectory View*  
As a student, I want to see the prerequisites and dependencies between topics so that I can follow a logical learning path.  
Derived from PRD section 3.5.3.

*US-S-7 – Motivation Layer*  
As a student, I want to read a short explanation of why a topic matters so that I feel motivated to learn the material deeply.  
Derived from PRD section 3.7.2.

---

## B. Persona: The Teacher / TA (Instructor Persona)

*Focus:* Course material ingestion, question management, and aggregated analytics.

---

*US-T-1 – Material Upload*  
As a teacher, I want to upload course files (PDFs, slides, notes) so that the AI chatbot is grounded exclusively in the official course content.  
Derived from PRD section 3.2.1.

*US-T-2 – Practice Management*  
As a teacher, I want to generate, edit, and publish practice questions per topic so that I can quickly build a diverse pool of assessment items.  
Derived from PRD section 3.3.1.

*US-T-3 – Trajectory Definition*  
As a teacher, I want to define an ordered list of topics and their dependencies so that the system can guide students through the course material in sequence.  
Derived from PRD section 3.5.1.

*US-T-4 – Misconception Insight*  
As a teacher, I want to see anonymized insights into common misconceptions by topic so that I can adjust my lectures or assignments to address areas of confusion.  
Derived from PRD section 3.6.2.

*US-T-5 – Analytics Overview*  
As a teacher, I want to view aggregated usage and practice performance per topic on a dashboard so that I can monitor class progress without reviewing individual logs.  
Derived from PRD section 3.6.1.

---

## C. Summary

These user stories represent the *core needs of both primary personas*—students and teachers—within the MVP timeline of 11 weeks.  
They directly map to the CourseLLM PRD’s MUST and SHOULD requirements and ensure that development focuses on *learning impact, **teacher insight, and **AI-guided pedagogy* rather than automation or grading.

End of UserStories.md