# User Stories

This document outlines the user stories for the CS Learning Platform, derived from the main [prd.md](prd.md). It is organized by the primary personas: Students and Teachers.

---

## 1. Student Persona

As a **Student**, I want to...

### 1.1. Course Content & Understanding
* **...ask questions** about my course material in a chatbot, so that I can get immediate clarification without waiting for office hours.
* **...receive answers that are Socratic**, guiding me to the solution rather than just giving it to me, so that I can learn to solve problems myself.
* **...get explanations tailored to my current knowledge level** (e.g., what I've already mastered in the learning trajectory), so the answers are not too simple or too advanced.
* **...be motivated** by understanding *why* a topic is important, what it's used for, and how it connects to other topics, so I stay engaged.
* **...be assured** that the chatbot's answers are strictly limited to my course material, so I don't get confused by irrelevant or out-of-scope information.

### 1.2. Practice & Assessment
* **...generate personalized quizzes and exercises** on demand, so I can practice specific topics I find difficult.
* **...get immediate feedback** on my practice exercises, so I can check my understanding and learn from my mistakes in real-time.
* **...track my progress** through the course "learning trajectories," so I know which topics I've mastered and what I need to work on next.

### 1.3. Resources & Tooling
* **...get help with course-related technical issues**, such as installing tools, debugging my environment, or compiling code, so I can spend less time on setup and more time on learning.
* **...easily find additional relevant resources** (like papers, videos, or tutorials) that are connected to the course material, so I can explore topics in more depth.
* **...get help submitting my assignments** through the course platform, so I can be sure I'm following the correct procedure.

---

## 2. Teacher Persona

As a **Teacher**, I want to...

### 2.1. Content & Course Setup
* **...upload all my course materials** (notes, slides, documents, exams, exercises) into the system, so they can be used to power the student-facing chatbot.
* **...have the system index all my content** for a RAG-based chatbot, so that student questions are answered accurately based on *my* materials.
* **...define "learning trajectories"** for my course, specifying the sequence and dependency of topics, to create a clear path for students.
* **...have the system review my course materials for consistency**, so I can identify and fix any contradictory information before the course starts.

### 2.2. Assignment & Assessment Creation
* **...create new assignments**, quizzes, and exams, so I can assess student knowledge.
* **...receive help in generating "LLM-resilient" questions** that test true understanding rather than the ability to use an AI.
* **...verify** that the assignments I create are testable, correspond to the material taught, and are of the appropriate length and complexity.
* **...get assistance in grading** student assignments.

### 2.3. Student Monitoring & Integrity
* **...monitor the progress of my students** on their "learning trajectories," so I can see where individuals or the class as a whole are struggling.
* **...review analytics** on the types of questions students are asking the chatbot, so I can identify common points of confusion.
* **...have a tool to help detect cheating** on assignments, so I can ensure academic integrity.