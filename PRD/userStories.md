# User Stories

## Personas
* **Student:** An enrolled student in a CS Faculty course at BGU.
* **Teacher:** A teacher or TA for a CS Faculty course at BGU.

## Student Stories
* **As a Student, I want to** chat about my course material, **so that I can** learn the material better and deeper.
* **As a Student, I want to** receive Socratic guidance instead of direct answers, **so that I can** identify my own misconceptions and learn to solve problems myself.
* **As a Student, I want to** generate personalized quizzes, **so that I can** verify that I have mastered the content.
* **As a Student, I want to** get help with installing tools and debugging issues, **so that I can** make using the course "platform" easier.
* **As a Student, I want to** ask "Why is this important?", **so that I can** feel motivated and understand the context of what I'm learning.

## Teacher Stories
* **As a Teacher, I want to** upload all my course files (notes, slides, exercises), **so that I can** ensure the chatbot's scope is strictly restricted to my material.
* **As a Teacher, I want to** prepare "learning trajectories", **so that I can** define the sequence of topics my students should master.
* **As a Teacher, I want to** generate "LLM resilient" assignments, **so that I can** trust that my students are learning the material without taking shortcuts.
* **As a Teacher, I want to** monitor student progress, **so that I can** check what skills they have acquired and where they are lacking knowledge.
* **As a Teacher, I want** help detecting cheating and grading assignments, **so that I can** focus more on teaching.

## Acceptance Hints (MVP)
* A student query that is off-topic (e.g., "What's the weather?") *must* be filtered and refused.
* A student query asking for a direct answer (e.g., "What is the answer to HW1 Q3?") *must* be refused, and the bot must respond with a Socratic question.
* A generated personalized quiz *must* be based on the student's current recorded knowledge level.
* A teacher *must* be able to upload a PDF and have its content be part of the chatbot's knowledge base.
