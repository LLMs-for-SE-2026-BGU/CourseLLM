# CourseLLM
A course project (Sem a 2026 @ BGU-CS) for the "LLMs for SE" Course

CourseLLM is an AI-powered learning companion designed to improve real understanding in university CS courses — not to generate shortcuts or full solutions.

The system is grounded only on official course materials (slides, notes, assignments), uses Socratic dialogue patterns, and provides measurable learning signals for both students and instructors.

Project Goal

Transform AI from an answer-dumping tool into a controlled, pedagogical system that actually strengthens reasoning, understanding, and knowledge retention — while giving teachers real visibility over learning patterns.

Core MVP Capabilities (11-week scope)
Capability	Description
Socratic Course Chatbot	Interactive guidance based only on course materials. The AI asks questions, gives hints, and promotes reasoning.
RAG over Course Files	Teachers upload lecture slides, notes and assignments → system builds embeddings → responses grounded in course text only.
Personalized Practice	Topic-based practice questions (MCQ / short) with immediate feedback to reinforce understanding.
Progress Tracking & Analytics	Logs interactions, practice results and topic difficulty. Teacher dashboard shows aggregated/anonymized insights.
Users

Primary users:

CS Students — learning course content, preparing for exams, reviewing concepts.

CS Teachers / TAs — monitoring student understanding, improving course delivery.

Why This Matters

Students already use generic LLMs (ChatGPT / Claude / Gemini) which often bypass deep thinking.
CourseLLM provides a course-aligned, ethical, measured alternative.

Technology Stack
Layer	Tech
Backend	Python + FastAPI
Frontend	React + TypeScript
Vector Store	FAISS / Pinecone
DB	PostgreSQL
LLM	GPT-5 or equivalent, via RAG+Socratic prompting
Scope Constraints (Intentional)

No full assignment/exam solutions

No generating arbitrary new course content

All content grounded in uploaded course materials

Anonymous + privacy-first analytics

Success Metrics (MVP)

Students show improvement on practice tasks

Teachers gain topic-level insight into class misconceptions

≥50% weekly active usage in pilot course

Status

PRD v1 finalized.
MVP designed for one-semester (11 weeks) delivery.