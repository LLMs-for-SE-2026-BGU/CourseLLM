### 5.3 Data Models

#### User (PostgreSQL)
```python
{
    "user_id": "uuid",
    "email": "string",
    "role": "student | teacher",
    "created_at": "timestamp",
    "last_login": "timestamp"
}
```

#### Topic (PostgreSQL)
```python
{
    "topic_id": "uuid",
    "name": "string",  # e.g., "Recursion"
    "course_id": "uuid",
    "prerequisite_topics": ["uuid[]"],  # Topics that must be mastered first
    "description": "string",
    "material_ids": ["uuid[]"]  # References to course materials
}
```

#### Quiz (PostgreSQL)
```python
{
    "quiz_id": "uuid",
    "user_id": "uuid",
    "topic_id": "uuid",
    "quiz_type": "pre | post",
    "questions": [
        {
            "question_id": "uuid",
            "student_answer": "string",
            "correct_answer": "string",
            "is_correct": "boolean",
            "time_spent_seconds": "integer"
        }
    ],
    "completed_at": "timestamp"
}
```

#### Quiz result:
```python
{
    "quiz_id": "uuid",
    "score": "integer"
}
```

#### Conversation (PostgreSQL)
```python
{
    "conversation_id": "uuid",
    "user_id": "uuid",
    "topic_id": "uuid",
    "messages": [
        {
            "role": "user | assistant",
            "content": "string",
            "timestamp": "timestamp"
        }
    ],
    "pre_quiz_id": "uuid",
    "post_quiz_id": "uuid",
    "started_at": "timestamp",
    "ended_at": "timestamp",
    "message_count": "integer",
    "hints_given": "integer"
}
```

#### Student Progress (PostgreSQL)
```python
{
    "progress_id": "uuid",
    "user_id": "uuid",
    "topic_id": "uuid",
    "mastery_level": "float",  # 0.0 to 1.0
    "attempts": "integer",
    "total_time_spent_seconds": "integer",
    "first_attempt_at": "timestamp",
    "last_attempt_at": "timestamp",
    "status": "not_started | in_progress | mastered"
}
```

#### Course Material (Vector DB)
```python
{
    "material_id": "uuid",
    "topic_id": "uuid",
    "title": "string",
    "content_type": "slide | note | code_example | exercise",
    "content": "string",  # Raw text
    "embedding": "float[]",  # Vector representation
    "metadata": {
        "source_file": "string",
        "page_number": "integer",
        "upload_date": "timestamp"
    }
}
```