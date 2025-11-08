# System Perspective — CourseLLM

## Architecture
1. **Frontend:** React + TypeScript  
2. **Backend:** FastAPI (Python)  
3. **Database:** PostgreSQL  
4. **Vector Store:** FAISS / Pinecone  
5. **LLM:** GPT-5 or Claude via API  

## Main APIs
- `POST /materials` — upload and index course materials.  
- `POST /query` — ask course-bound question; returns Socratic answer + citations.  
- `POST /practice` — generate questions by topic.  
- `GET /progress` — retrieve student topic mastery.  

## Non-Functional
- p95 latency ≤ 6s  
- 95% uptime during testing  
- HTTPS + authentication for all routes  

---
