# Product Requirements Document (PRD): CourseLLM

**Status:** Draft
**Version:** 0.1
**Last Updated:** 07 Nov 2025

This document is the "single source of truth" for the CourseLLM project, outlining its purpose, features, and requirements. It is a living document intended to be updated.

## 1. Overview and Objectives

### 1.1. Vision

To help Teachers and Students in a Computer Science Department better teach and better learn using AI.

### 1.2. Objectives

* **For Students:** Provide an AI-enhanced learning experience that allows students to learn course material better, deeper, faster, and in a more personalized manner.

* **For Teachers:** Provide tools that help teachers better teach existing courses, monitor student progress, and manage assignments.

* **Product Goal:** This product *enhances* the learning experience around *existing* course material. It does not create new material or replace existing general-purpose AI tools.

## 2. Problem Statement

* **Teachers** are concerned that students may use general AI tools as a shortcut to complete assignments, leading to a superficial understanding and a failure to learn the core material.

* **Students** want to use modern tools to enhance their learning, but find general AI chatbots often provide answers that are too direct, out-of-scope, or don't align with the specific methods taught in their course. They desire a more personalized and guided learning path.

## 3. Target Audience & User Personas

### 3.1. Persona 1: Student

* **Name:** Alex

* **Role:** 2nd-year CS Student @ BGU

* **Goals:**

  * To deeply understand complex topics from their "Data Structures" course.

  * To get help debugging a compilation error at 2 AM without waiting for TA hours.

  * To test their own knowledge before an exam with personalized questions.

* **Pain Points:**

  * "I used a public chatbot to explain a concept, and it gave me an answer that used a library my professor told us not to use. It was confusing."

  * "I get stuck on small technical issues (like setting up my environment) and it wastes hours of my study time."

  * "I want to know *why* this topic is important for my future classes or for a job."

### 3.2. Persona 2: Teacher

* **Name:** Dr. Elena K.

* **Role:** Professor, CS Faculty @ BGU

* **Goals:**

  * To ensure students are genuinely engaging with the course material and developing critical thinking skills.

  * To easily provide all course materials (slides, notes, exams) as a single source of truth for an AI assistant.

  * To monitor which topics the class as a whole is struggling with.

* **Pain Points:**

  * "I can't tell if a student's assignment submission is their own work or from an AI."

  * "I spend hours creating new, "LLM-resilient" exam questions."

  * "I want my students to have 24/7 help, but I need that help to be in line with my teaching methods and restricted to the course content."

## 4. Features and Functionality

### 4.1. Core Module: Course-Scoped Socratic Chatbot (Student)

* **Description:** A chatbot that answers student questions based *only* on the course materials provided by the teacher.

* **Requirements:**

  * Must use a RAG (Retrieval-Augmented Generation) approach, indexing all teacher-uploaded files (notes, slides, exams, etc.).

  * Must filter out and refuse to answer questions not related to the course material.

  * Must provide a Socratic learning experience:

    * Avoid giving direct answers to "solve this for me" prompts.

    * Instead, check for student misconceptions.

    * Analyze the student's intention and check their perspective before answering (e.g., "What have you tried so far?", "What part of the lecture notes did you find confusing?").

  * Must be able to adjust its answers based on the student's current progress in the "learning trajectory."

### 4.2. Core Module: Student Success & Motivation (Student)

* **Description:** A set of features to help students with meta-learning, motivation, and practical tasks.

* **Requirements:**

  * **Motivation:** Answer questions like "Why is this material important?", "What does this depend on?".

  * **Personalized Practice:** Generate personalized quizzes, exams, and exercises to verify mastery.

  * **Task-Based Help:** Assist with practical platform tasks: installing tools, debugging compilation errors, and understanding submission procedures.

### 4.3. Core Module: Content & Course Management (Teacher)

* **Description:** A portal for teachers to set up and manage their AI-powered course.

* **Requirements:**

  * Allow teachers to upload all relevant course content (docs, PDFs, slides, exercises).

  * Provide a tool to review the consistency of the course material.

  * Allow teachers to define "learning trajectories" (a sequence of topics and dependencies).

### 4.4. Core Module: Analytics & Assignments (Teacher)

* **Description:** Tools for teachers to monitor progress and manage assessments.

* **Requirements:**

  * **Progress Monitoring:**

    * Track what skills and content a student has acquired (progress on "learning trajectories").

    * Provide an anonymized dashboard of class-wide progress and common misconceptions.

  * **Assignment Tools:**

    * Assist in creating quizzes, assignments, and exams.

    * Verify assignments are testable and correspond to the material taught.

    * Assist in grading and detecting cheating.

## 5. Assumptions and Constraints

* **Assumption:** The university (BGU, CS Faculty) will approve the use of this tool.

* **Assumption:** Teachers are willing to upload their course materials to the platform.

* **Constraint:** The product *must not* create new course material. It only works with the material provided.

* **Constraint:** The product *must not* replace existing tools like NotebookLM, but rather integrate with the learning experience.

## 6. Metrics for Success (Initial Thoughts)

* **Student Adoption:** % of students in a course who actively use the chatbot weekly.

* **Student Engagement:** Average number of Socratic interactions per student.

* **Teacher Adoption:** % of teachers in the department who set up their course with the tool.

* **Perceived Learning:** Student self-reported surveys on how much the tool helped their understanding.

## 7. Out of Scope (for Version 1.0)

* Creating new course content from scratch.

* A general-purpose chatbot that can answer questions about other courses or non-academic topics.

* Directly integrating with the university's official gradebook (re: grading assignments).

* Replacing the official course submission platform.