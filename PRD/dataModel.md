# Data Model — LLMRnD MVP

## Entities
- **User**(id, name, email, role[student|teacher], createdAt)
- **Course**(id, name, term, createdBy)
- **Material**(id, courseId, title, fileType, path, status)
- **Chunk**(id, materialId, text, page, vectorId, topicId)
- **Topic**(id, courseId, name, order)
- **PracticeQuestion**(id, topicId, question, options[], correctAnswer, explanation)
- **PracticeAttempt**(id, userId, questionId, isCorrect, createdAt)
- **ChatSession**(id, userId, courseId, startedAt)
- **ChatMessage**(id, sessionId, sender, content, retrievedChunkIds[])

## Relationships
- Course 1–N Material; Material 1–N Chunk  
- Course 1–N Topic; Topic 1–N PracticeQuestion  
- User 1–N ChatSession; ChatSession 1–N ChatMessage  

## Storage
- PostgreSQL for relational entities  
- FAISS/Pinecone for vector embeddings  
- Local/cloud bucket for uploaded files  

---
