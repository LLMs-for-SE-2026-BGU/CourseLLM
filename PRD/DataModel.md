# Data Models - CourseLLM

## Overview

Python data models using SQLAlchemy ORM for the CourseLLM platform.

**Technology Stack:**

-   SQLAlchemy 2.0+
-   PostgreSQL 15+
-   Python 3.11+

## Base Setup

```python
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import String, Boolean, DateTime, Integer, Text, ForeignKey, Enum
from sqlalchemy.dialects.postgresql import ARRAY, JSON, UUID
from pgvector.sqlalchemy import Vector
from datetime import datetime
from decimal import Decimal
from typing import Optional, List
import enum
import uuid

class Base(DeclarativeBase):
    pass
```

## Enums

```python
class UserRole(str, enum.Enum):
    STUDENT = "student"
    TEACHER = "teacher"
    ADMIN = "admin"

class EnrollmentStatus(str, enum.Enum):
    ACTIVE = "active"
    COMPLETED = "completed"
    DROPPED = "dropped"

class DifficultyLevel(str, enum.Enum):
    BEGINNER = "beginner"
    INTERMEDIATE = "intermediate"
    ADVANCED = "advanced"
    EXPERT = "expert"

class DependencyStrength(str, enum.Enum):
    REQUIRED = "required"
    RECOMMENDED = "recommended"
    OPTIONAL = "optional"

class MasteryLevel(str, enum.Enum):
    NOT_STARTED = "not_started"
    IN_PROGRESS = "in_progress"
    MASTERED = "mastered"

class SenderType(str, enum.Enum):
    STUDENT = "student"
    ASSISTANT = "assistant"

class SentimentType(str, enum.Enum):
    POSITIVE = "positive"
    NEUTRAL = "neutral"
    NEGATIVE = "negative"
    CONFUSED = "confused"

class FileType(str, enum.Enum):
    PDF = "pdf"
    PPTX = "pptx"
    DOCX = "docx"
    MD = "md"
    TXT = "txt"
    OTHER = "other"

class IndexingStatus(str, enum.Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"

class QuestionType(str, enum.Enum):
    MULTIPLE_CHOICE = "multiple_choice"
    SHORT_ANSWER = "short_answer"
    CODING = "coding"
    TRUE_FALSE = "true_false"
```

## Models

### User

```python
class User(Base):
    __tablename__ = "users"

    user_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False, index=True)
    sso_id: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    role: Mapped[UserRole] = mapped_column(Enum(UserRole), nullable=False, index=True)
    first_name: Mapped[str] = mapped_column(String(100), nullable=False)
    last_name: Mapped[str] = mapped_column(String(100), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    last_login: Mapped[Optional[datetime]] = mapped_column(DateTime)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    taught_courses: Mapped[List["Course"]] = relationship(back_populates="instructor", foreign_keys="Course.instructor_id")
    enrollments: Mapped[List["Enrollment"]] = relationship(back_populates="student", cascade="all, delete-orphan")
    conversations: Mapped[List["Conversation"]] = relationship(back_populates="student", cascade="all, delete-orphan")
    uploaded_materials: Mapped[List["CourseMaterial"]] = relationship(back_populates="uploader")
```

### Course

```python
class Course(Base):
    __tablename__ = "courses"

    course_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    course_code: Mapped[str] = mapped_column(String(20), nullable=False)
    course_name: Mapped[str] = mapped_column(String(200), nullable=False)
    semester: Mapped[str] = mapped_column(String(20), nullable=False, index=True)
    year: Mapped[int] = mapped_column(Integer, nullable=False)
    description: Mapped[Optional[str]] = mapped_column(Text)
    instructor_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.user_id"), nullable=False, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    instructor: Mapped["User"] = relationship(back_populates="taught_courses", foreign_keys=[instructor_id])
    enrollments: Mapped[List["Enrollment"]] = relationship(back_populates="course", cascade="all, delete-orphan")
    concepts: Mapped[List["Concept"]] = relationship(back_populates="course", cascade="all, delete-orphan")
    materials: Mapped[List["CourseMaterial"]] = relationship(back_populates="course", cascade="all, delete-orphan")
    learning_trajectory: Mapped[Optional["LearningTrajectory"]] = relationship(back_populates="course", uselist=False, cascade="all, delete-orphan")
```

### Enrollment

```python
class Enrollment(Base):
    __tablename__ = "enrollments"

    enrollment_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    student_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.user_id"), nullable=False, index=True)
    course_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("courses.course_id"), nullable=False, index=True)
    enrollment_date: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    status: Mapped[EnrollmentStatus] = mapped_column(Enum(EnrollmentStatus), default=EnrollmentStatus.ACTIVE, nullable=False)
    final_grade: Mapped[Optional[Decimal]] = mapped_column()

    student: Mapped["User"] = relationship(back_populates="enrollments")
    course: Mapped["Course"] = relationship(back_populates="enrollments")
```

### Concept

```python
class Concept(Base):
    __tablename__ = "concepts"

    concept_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    course_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("courses.course_id"), nullable=False, index=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[Optional[str]] = mapped_column(Text)
    difficulty_level: Mapped[DifficultyLevel] = mapped_column(Enum(DifficultyLevel), nullable=False, index=True)
    estimated_hours: Mapped[Optional[Decimal]] = mapped_column()
    keywords: Mapped[Optional[List[str]]] = mapped_column(ARRAY(String))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    course: Mapped["Course"] = relationship(back_populates="concepts")
    prerequisites: Mapped[List["ConceptDependency"]] = relationship(foreign_keys="ConceptDependency.dependent_concept_id", back_populates="dependent_concept", cascade="all, delete-orphan")
    dependents: Mapped[List["ConceptDependency"]] = relationship(foreign_keys="ConceptDependency.prerequisite_concept_id", back_populates="prerequisite_concept", cascade="all, delete-orphan")
    student_progress: Mapped[List["StudentProgress"]] = relationship(back_populates="concept", cascade="all, delete-orphan")
```

### ConceptDependency

```python
class ConceptDependency(Base):
    __tablename__ = "concept_dependencies"

    dependency_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    prerequisite_concept_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("concepts.concept_id"), nullable=False, index=True)
    dependent_concept_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("concepts.concept_id"), nullable=False, index=True)
    dependency_strength: Mapped[DependencyStrength] = mapped_column(Enum(DependencyStrength), default=DependencyStrength.REQUIRED, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    prerequisite_concept: Mapped["Concept"] = relationship(foreign_keys=[prerequisite_concept_id], back_populates="dependents")
    dependent_concept: Mapped["Concept"] = relationship(foreign_keys=[dependent_concept_id], back_populates="prerequisites")
```

### StudentProgress

```python
class StudentProgress(Base):
    __tablename__ = "student_progress"

    progress_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    student_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.user_id"), nullable=False, index=True)
    concept_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("concepts.concept_id"), nullable=False, index=True)
    mastery_level: Mapped[MasteryLevel] = mapped_column(Enum(MasteryLevel), default=MasteryLevel.NOT_STARTED, nullable=False, index=True)
    confidence_score: Mapped[Optional[Decimal]] = mapped_column()
    first_interaction: Mapped[Optional[datetime]] = mapped_column(DateTime)
    last_interaction: Mapped[Optional[datetime]] = mapped_column(DateTime)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    total_time_spent: Mapped[int] = mapped_column(Integer, default=0)
    interaction_count: Mapped[int] = mapped_column(Integer, default=0, nullable=False)

    student: Mapped["User"] = relationship()
    concept: Mapped["Concept"] = relationship(back_populates="student_progress")
```

### Conversation

```python
class Conversation(Base):
    __tablename__ = "conversations"

    conversation_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    student_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.user_id"), nullable=False, index=True)
    course_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("courses.course_id"), nullable=False, index=True)
    title: Mapped[Optional[str]] = mapped_column(String(200))
    started_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False, index=True)
    ended_at: Mapped[Optional[datetime]] = mapped_column(DateTime)
    message_count: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    student: Mapped["User"] = relationship(back_populates="conversations")
    course: Mapped["Course"] = relationship()
    messages: Mapped[List["Message"]] = relationship(back_populates="conversation", cascade="all, delete-orphan", order_by="Message.timestamp")
```

### Message

```python
class Message(Base):
    __tablename__ = "messages"

    message_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    conversation_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("conversations.conversation_id"), nullable=False, index=True)
    sender_type: Mapped[SenderType] = mapped_column(Enum(SenderType), nullable=False, index=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    timestamp: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False, index=True)
    token_count: Mapped[Optional[int]] = mapped_column(Integer)
    llm_model: Mapped[Optional[str]] = mapped_column(String(50))
    response_time_ms: Mapped[Optional[int]] = mapped_column(Integer)
    contains_code: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    sentiment: Mapped[Optional[SentimentType]] = mapped_column(Enum(SentimentType))

    conversation: Mapped["Conversation"] = relationship(back_populates="messages")
    concept_discussions: Mapped[List["ConceptDiscussion"]] = relationship(back_populates="message", cascade="all, delete-orphan")
```

### ConceptDiscussion

```python
class ConceptDiscussion(Base):
    __tablename__ = "concept_discussions"

    discussion_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    message_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("messages.message_id"), nullable=False, index=True)
    concept_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("concepts.concept_id"), nullable=False, index=True)
    relevance_score: Mapped[Decimal] = mapped_column(nullable=False)
    detected_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    message: Mapped["Message"] = relationship(back_populates="concept_discussions")
    concept: Mapped["Concept"] = relationship()
```

### CourseMaterial

```python
class CourseMaterial(Base):
    __tablename__ = "course_materials"

    material_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    course_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("courses.course_id"), nullable=False, index=True)
    uploader_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.user_id"), nullable=False)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    file_type: Mapped[FileType] = mapped_column(Enum(FileType), nullable=False)
    file_size_bytes: Mapped[int] = mapped_column(nullable=False)
    storage_path: Mapped[str] = mapped_column(String(500), unique=True, nullable=False)
    upload_date: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    indexed_at: Mapped[Optional[datetime]] = mapped_column(DateTime)
    indexing_status: Mapped[IndexingStatus] = mapped_column(Enum(IndexingStatus), default=IndexingStatus.PENDING, nullable=False, index=True)
    is_public: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    metadata: Mapped[Optional[dict]] = mapped_column(JSON)

    course: Mapped["Course"] = relationship(back_populates="materials")
    uploader: Mapped["User"] = relationship(back_populates="uploaded_materials")
    chunks: Mapped[List["MaterialChunk"]] = relationship(back_populates="material", cascade="all, delete-orphan")
```

### MaterialChunk

```python
class MaterialChunk(Base):
    __tablename__ = "material_chunks"

    chunk_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    material_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("course_materials.material_id"), nullable=False, index=True)
    chunk_index: Mapped[int] = mapped_column(Integer, nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    start_page: Mapped[Optional[int]] = mapped_column(Integer)
    end_page: Mapped[Optional[int]] = mapped_column(Integer)
    token_count: Mapped[int] = mapped_column(Integer, nullable=False)
    embedding_vector: Mapped[Optional[Vector]] = mapped_column(Vector(1536))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    material: Mapped["CourseMaterial"] = relationship(back_populates="chunks")
```

### PracticeQuestion

```python
class PracticeQuestion(Base):
    __tablename__ = "practice_questions"

    question_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    course_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("courses.course_id"), nullable=False, index=True)
    concept_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("concepts.concept_id"), nullable=False, index=True)
    created_by: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.user_id"), nullable=False)
    question_type: Mapped[QuestionType] = mapped_column(Enum(QuestionType), nullable=False)
    difficulty: Mapped[DifficultyLevel] = mapped_column(Enum(DifficultyLevel), nullable=False, index=True)
    question_text: Mapped[str] = mapped_column(Text, nullable=False)
    options: Mapped[Optional[dict]] = mapped_column(JSON)
    correct_answer: Mapped[Optional[str]] = mapped_column(Text)
    explanation: Mapped[Optional[str]] = mapped_column(Text)
    estimated_time_minutes: Mapped[Optional[int]] = mapped_column(Integer)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    course: Mapped["Course"] = relationship()
    concept: Mapped["Concept"] = relationship()
    creator: Mapped["User"] = relationship()
    attempts: Mapped[List["StudentAttempt"]] = relationship(back_populates="question", cascade="all, delete-orphan")
```

### StudentAttempt

```python
class StudentAttempt(Base):
    __tablename__ = "student_attempts"

    attempt_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    student_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.user_id"), nullable=False, index=True)
    question_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("practice_questions.question_id"), nullable=False, index=True)
    submitted_answer: Mapped[str] = mapped_column(Text, nullable=False)
    is_correct: Mapped[bool] = mapped_column(Boolean, nullable=False)
    score: Mapped[Optional[Decimal]] = mapped_column()
    time_taken_seconds: Mapped[Optional[int]] = mapped_column(Integer)
    hint_count: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    feedback: Mapped[Optional[str]] = mapped_column(Text)
    attempted_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False, index=True)

    student: Mapped["User"] = relationship()
    question: Mapped["PracticeQuestion"] = relationship(back_populates="attempts")
```

### LearningTrajectory

```python
class LearningTrajectory(Base):
    __tablename__ = "learning_trajectories"

    trajectory_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    course_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("courses.course_id"), unique=True, nullable=False)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[Optional[str]] = mapped_column(Text)
    concept_sequence: Mapped[List[str]] = mapped_column(ARRAY(String), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    course: Mapped["Course"] = relationship(back_populates="learning_trajectory")
```

### ClassAnalytics

```python
class ClassAnalytics(Base):
    __tablename__ = "class_analytics"

    analytics_id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    course_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("courses.course_id"), nullable=False, index=True)
    date: Mapped[datetime.date] = mapped_column(nullable=False, index=True)
    total_students: Mapped[int] = mapped_column(Integer, nullable=False)
    active_students: Mapped[int] = mapped_column(Integer, nullable=False)
    avg_questions_per_student: Mapped[Optional[Decimal]] = mapped_column()
    avg_time_spent_minutes: Mapped[Optional[Decimal]] = mapped_column()
    most_discussed_concepts: Mapped[Optional[List[str]]] = mapped_column(ARRAY(String))
    struggling_concepts: Mapped[Optional[List[str]]] = mapped_column(ARRAY(String))
    engagement_score: Mapped[Optional[Decimal]] = mapped_column()
    calculated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    course: Mapped["Course"] = relationship()
```
