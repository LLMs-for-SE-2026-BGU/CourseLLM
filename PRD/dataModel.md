# Data Model (MVP)

## Entities
* **Student** (student_id, name, enrolled_course_ids)
* **Teacher** (teacher_id, name, course_ids)
* **Course** (course_id, teacher_id, title, material_ids, trajectory_ids)
* **CourseMaterial** (material_id, course_id, source_type [notes, slides, exam, quiz], original_filename, status [uploaded, indexed])
* **MaterialChunk** (chunk_id, material_id, chunk_text, text_vector, metadata_json)
* **LearningTrajectory** (trajectory_id, course_id, name, topic_sequence_json [e.g., {"topic1": {"depends_on": []}}])
* **StudentProgress** (progress_id, student_id, course_id, knowledge_level, acquired_skills_map, current_trajectory_node)
* **Assignment** (assignment_id, course_id, type [quiz, exam], is_llm_resilient_flag, items_json)
* **ChatSession** (session_id, student_id, course_id, start_time, end_time)
* **ChatLog** (log_id, session_id, timestamp, query_text, response_text, is_socratic, is_off_topic_flag)

## Relationships
* **Teacher** 1..N **Course**
* **Course** 1..N **Student** (via enrollment, managed by `Student.enrolled_course_ids`)
* **Course** 1..N **CourseMaterial**
* **CourseMaterial** 1..N **MaterialChunk**
* **Course** 1..N **LearningTrajectory**
* **Course** 1..N **Assignment**
* **Student** 1..N **StudentProgress** (one per course)
* **Student** 1..N **ChatSession**
* **ChatSession** 1..N **ChatLog**
