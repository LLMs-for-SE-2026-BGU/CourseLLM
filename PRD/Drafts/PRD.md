
This is the temporary name of the project we will develop over the semester.
I copy the notes created during our first session (02 Nov 2025) brainstorm.
This is a pre-draft version of the PRD for our project.

# Vision
Help Teachers and Students in a CS Dept at University better teach and better learn
using AI.

# Objectives
* The product is used by students of the CS Dept to learn the material of existing courses.
* Teachers in the CS Dept use the product to better teach existing courses.
* The product does not create new material, it does not replace existing AI tools
    (notebookLM, existing chatbots) - it enhances the learning experience around existing
    material.

# Motivation
* Teachers worry students may use AI technology as a shortcut to avoid spending time on
    learning, and end-up not learning the material even though the students feel they can
    fulfill the course requirements easily.
* Students want to have enhanced access to course material to learn better, deeper, faster
    and in a more personalized manner.

# Target Audience
* Teachers of Courses at the CIS Faculty @ BGU
* Students taking Courses in the Faculty

# Features and Functionality

## Overview of Students Features
* Chatbot on Course Material
* Access to Additional relevant resources (papers, videos, tutorials, exercises)
* Make using the course "platform" easier: install tools, debug issues, compile, submit
    assignments...
* Motivate: Why do I learn this material? Why is it important? What depends on it? Why is
    it beautiful?
* Generate personalized quizzes, exams, exercises to exercise the content and verify that
    the content is mastered. Check that the tasks are performed correctly.

## Overview of Teacher Features
* Prepare content for the course material and make it accessible to students with AI
* Monitor students progress
* Prepare "learning trajectories" (sequence of topics, ordered by dependency, to be
    mastered by the students).
* Prepare assignments (create quizzes, assignments, exams, verify they are testable,
    correspond to the material taught, are "LLM resilient", are of the right length and
    complexity)
* Grade assignments
* Detect cheating

## Student: Chatbot on Course Material
* Ensure the scope of the chat sessions is restricted to the course material
* Filter out questions not related to the course
** Adjust answers to the current level of the student as recorded in the system
* Provide a socratic learning experience
* Do not answer questions directly - check misconceptions, analyze intentions, check
    perspectives behind the student questions before answering.

## Student: Monitor Student Progress
* Check what the student already knows and where the student is lacking knowledge
    (skills)
* Keep track of what skills and content the student has acquired (progress on
    "learning trajectories").

## Teacher: Prepare Content for the Course Chatbot
* Allow the teacher to upload relevant files about the course content (notes, documents,
    exams, slides, exercises, quizzes).
* Review the consistency of the course material.
* Index the course material to support a RAG approach.