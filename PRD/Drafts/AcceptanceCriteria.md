# Acceptance Criteria – CourseLLM

<!-- Copilot: Define measurable release conditions. Update as features are scoped. -->

## Purpose
This document defines the **measurable conditions** that must be met before CourseLLM (or individual features) can be released to users. Each criterion is specific, testable, and outcome-focused.

---

## Release Philosophy
- **MVP (Minimum Viable Product)**: Focuses on core student chatbot and instructor content upload.
- **Beta**: Adds progress monitoring, practice quiz generation, grading assistance.
- **V1.0**: Full feature set including cheating detection, LLM-resilient assignment validation.

---

## General Acceptance Criteria (All Releases)

### GA-1: Security & Privacy
- [ ] All student data encrypted at rest and in transit (TLS 1.3+).
- [ ] GDPR/FERPA compliance verified by legal review.
- [ ] Role-based access control: students cannot access other students' data.
- [ ] Audit logs for all data access by instructors/admins.

### GA-2: Performance
- [ ] Chatbot response time ≤ 5 seconds (95th percentile).
- [ ] System uptime ≥ 99.5% during semester.
- [ ] Supports ≥ 200 concurrent users (1 course of 200 students).

### GA-3: Usability
- [ ] User interface passes accessibility audit (WCAG 2.1 AA).
- [ ] Mobile-responsive design (works on tablets, phones).
- [ ] Onboarding tutorial for new students and instructors.

### GA-4: Testing
- [ ] ≥ 80% unit test coverage for core modules.
- [ ] End-to-end tests for all critical user flows (chat, submission, grading).
- [ ] Load testing confirms performance targets.

---

## MVP Acceptance Criteria (Week 6 Target)

### MVP-1: Student Chatbot (Feature F1)
- [ ] Students can log in and select a course.
- [ ] Chatbot answers questions using RAG on uploaded course materials.
- [ ] Off-topic questions receive polite redirection (tested with 20 sample queries).
- [ ] Responses cite specific course materials (links to source files).
- [ ] Chatbot uses socratic mode: asks ≥1 clarifying question before direct answer (70% of queries).
- [ ] Average student satisfaction ≥ 3.5/5 in initial pilot (10 students, 1 week).

### MVP-2: Instructor Content Upload (Feature T1)
- [ ] Instructors can upload PDF, PPTX, DOCX, Markdown files.
- [ ] Batch upload (drag-and-drop folder) works for ≥20 files.
- [ ] Indexing completes within 10 minutes for a typical course (100 pages of content).
- [ ] Sample queries return relevant excerpts (manual verification by instructor).
- [ ] Content consistency report flags ≥3 types of issues (e.g., terminology mismatches).

### MVP-3: Basic Progress Tracking (Feature F2, partial)
- [ ] System records which topics are discussed in chat sessions.
- [ ] Students can view a list of topics they've interacted with.
- [ ] (Full learning trajectory visualization deferred to Beta.)

---

## Beta Acceptance Criteria (Week 9 Target)

### Beta-1: Learning Trajectory Visualization (Feature F2)
- [ ] Students see a skill tree with completed, in-progress, locked topics.
- [ ] Progress percentages per topic (0-100%).
- [ ] Visual indicators for prerequisites (grayed-out until unlocked).
- [ ] "Next recommended topic" suggestion based on progress.

### Beta-2: Practice Quiz Generation (Feature F3)
- [ ] Students can generate quizzes on 1-3 selected topics.
- [ ] Quiz contains 5-10 questions at selected difficulty level.
- [ ] Instant feedback with explanations.
- [ ] Performance updates learning progress (mastery level).
- [ ] 90% of generated questions are factually correct (manual review of 100 questions).

### Beta-3: Teacher Progress Dashboard (Feature T4)
- [ ] Instructor sees heatmap of students × topics (color-coded by mastery).
- [ ] Dashboard identifies topics where ≥30% of students struggle.
- [ ] Export data as CSV.
- [ ] Alerts for students ≥2 weeks behind median progress.

### Beta-4: Grading Assistance (Feature T5, MVP)
- [ ] AI provides draft grades for multiple-choice quizzes (100% accuracy).
- [ ] AI provides draft feedback for essay questions (instructor reviews ≥90%).
- [ ] Instructor can approve/reject/edit AI suggestions.
- [ ] Grading time reduced by ≥20% (time-tracking survey with 3 instructors).

---

## V1.0 Acceptance Criteria (Week 12 Target)

### V1.0-1: LLM-Resilient Assignment Validation (Feature T3)
- [ ] System tests assignments by running them through LLM (GPT-4).
- [ ] Flags assignments solvable in <30 seconds as "too easy."
- [ ] Suggests ≥2 modifications per flagged assignment (e.g., "require explanation").
- [ ] 80% of modified assignments require >5 minutes of LLM reasoning (manual verification).

### V1.0-2: Cheating Detection (Feature T6)
- [ ] AI detection identifies AI-generated text with ≥85% precision, ≥80% recall (validated on test set).
- [ ] Plagiarism detection flags submissions with ≥70% overlap.
- [ ] Instructor receives flagged submissions in dedicated review queue.
- [ ] False positive rate ≤10% (manual review of 100 submissions).

### V1.0-3: Real-World Motivation (Feature F4)
- [ ] Each topic has ≥1 real-world case study.
- [ ] Links to external resources (papers, videos) are functional.
- [ ] Historical context and "beauty" explanations present for ≥80% of topics.
- [ ] Student survey: ≥70% report increased motivation after reading case studies.

### V1.0-4: Technical Support (Feature F5)
- [ ] Chatbot diagnoses ≥5 common installation errors (e.g., missing Python, version mismatch).
- [ ] Provides OS-specific instructions (Windows, macOS, Linux).
- [ ] Pre-submission validator checks file format, naming, completeness (tested with 20 sample submissions).
- [ ] Escalates unresolved issues to TA (tested with 5 edge cases).

---

## Feature-Specific Acceptance Criteria

### F1: Course Material Chatbot
| Criterion | Test Method | Target |
|-----------|-------------|--------|
| **Scope filtering** | 100 test queries (50 on-topic, 50 off-topic) | ≥90% accuracy |
| **Socratic mode** | Manual review of 50 chat sessions | ≥70% include clarifying question |
| **Level-appropriate responses** | Expert review of responses to beginner/advanced queries | ≥80% rated appropriate |
| **Response grounding** | Verify citations in 100 responses | ≥95% cite valid course materials |

### F2: Personalized Learning Trajectories
| Criterion | Test Method | Target |
|-----------|-------------|--------|
| **Dependency enforcement** | Test with 10 sample trajectories | No circular dependencies |
| **Mastery detection** | Simulate 20 student progress paths | Unlock next topic only when criteria met |
| **Progress visualization** | Usability test with 10 students | ≥4/5 satisfaction score |

### F3: Practice & Assessment Generation
| Criterion | Test Method | Target |
|-----------|-------------|--------|
| **Question quality** | Manual review of 100 generated questions | ≥90% factually correct |
| **Difficulty adaptation** | Simulate 10 quiz sessions | Difficulty adjusts after 3 correct/incorrect |
| **Feedback clarity** | Student survey | ≥4/5 usefulness rating |

### T1: Content Upload & Indexing
| Criterion | Test Method | Target |
|-----------|-------------|--------|
| **Upload success rate** | Test with 50 files (various formats) | ≥98% success |
| **Indexing time** | Measure for 100-page course | ≤10 minutes |
| **Consistency report accuracy** | Manual review of 10 courses | ≥80% of flagged issues are valid |

### T3: Assignment Creation & Validation
| Criterion | Test Method | Target |
|-----------|-------------|--------|
| **Template generation** | Instructor review of 10 generated assignments | ≥70% require minor edits only |
| **LLM resilience test** | Run 20 assignments through GPT-4 | Correctly flag ≥80% of "too easy" |
| **Ambiguity detection** | Test with 20 ambiguous questions | Flag ≥70% |

### T6: Cheating Detection
| Criterion | Test Method | Target |
|-----------|-------------|--------|
| **AI detection precision** | Test set of 100 submissions (50 AI, 50 human) | ≥85% precision, ≥80% recall |
| **Plagiarism detection** | Test with 20 known plagiarized pairs | ≥90% detection rate |
| **False positive rate** | Manual review of 100 flagged submissions | ≤10% false positives |

---

## User Acceptance Criteria (Pilot Feedback)

### Student Feedback (Survey, End of Semester)
- [ ] ≥70% of students report chatbot helped them learn.
- [ ] ≥60% used practice quiz feature ≥3 times.
- [ ] ≥4/5 overall satisfaction with CourseLLM.
- [ ] ≥50% report increased motivation due to real-world examples.

### Instructor Feedback (Survey, End of Semester)
- [ ] ≥80% of instructors report time savings on grading.
- [ ] ≥70% trust cheating detection flags.
- [ ] ≥4/5 satisfaction with progress monitoring dashboard.
- [ ] ≥60% plan to use CourseLLM in next semester.

---

## Non-Functional Requirements

### NFR-1: Scalability
- [ ] System scales to ≥5 courses simultaneously (1,000 students total).
- [ ] Database queries complete in ≤1 second (95th percentile).

### NFR-2: Maintainability
- [ ] Codebase follows PEP 8 (Python) or equivalent style guide.
- [ ] ≥80% of functions have docstrings.
- [ ] CI/CD pipeline runs tests on every commit.

### NFR-3: Extensibility
- [ ] Plugin architecture allows adding new assignment types without core changes.
- [ ] RAG supports swapping embedding models (OpenAI, HuggingFace, etc.).

---

## Release Checklist

### Pre-Release (Any Version)
- [ ] All acceptance criteria for target release met.
- [ ] Security audit passed (no critical vulnerabilities).
- [ ] User documentation complete (student guide, instructor guide).
- [ ] Training session held for pilot instructors.
- [ ] Rollback plan documented.

### Post-Release (Any Version)
- [ ] Monitor error rates for 1 week (daily review).
- [ ] Collect user feedback via in-app survey.
- [ ] Retrospective meeting with development team.
- [ ] Update roadmap based on lessons learned.

---

**Status:** Draft  
**Last Updated:** 2025-01-XX  
**Reviewed By:** [Pending]