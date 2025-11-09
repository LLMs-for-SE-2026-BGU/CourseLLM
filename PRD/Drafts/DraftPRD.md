# DraftPRD - CourseLLM Project
*High-Level Ideas and Brainstorming Notes*

---

## 1. Overview and Objectives

**Product Name:** CourseLLM

**Vision:** AI-powered conversational platform that mediates between CS students and course materials, enabling personalized learning while giving teachers insight into class-wide understanding.

**Objectives:**
- Provide students with guided, Socratic interaction with course materials
- Enable teachers to monitor class-wide progress and identify knowledge gaps
- Create learning experiences that cannot be shortcut by directly prompting general AI tools
- Measure student understanding through logged interactions rather than just assignment completion

**Alignment with Strategy:** 
Addresses growing concern in CS education that students complete courses using AI tools without developing deep understanding. Positions BGU CIS Faculty as leader in AI-enhanced pedagogy.

---

## 2. Target Audience & Problem Statement

### Primary Users

**Students - CIS Faculty, BGU**
- Taking courses with substantial programming/technical content
- Currently use ChatGPT, Copilot for coursework
- Range from 1st year (learning fundamentals) to 4th year (advanced topics)

**Teachers - CIS Faculty, BGU**
- Teach courses with varying class sizes
- Create assignments, grade submissions, answer student questions
- Concerned about students using AI without learning

### Problem Statements

**Student Problems:**
1. Course materials present content at fixed pace; students need different speeds
2. Unclear which topics are prerequisites for current material
3. Cannot gauge own understanding until exams
4. Debugging and tool setup block progress on learning actual content
5. Hard to find relevant supplementary materials

**Teacher Problems:**
1. Assignments solvable by copying prompt to ChatGPT
2. Cannot identify which concepts class struggles with until exam results
3. Repetitive student questions consume office hours
4. No visibility into student understanding between assignment submissions
5. Creating good practice problems is time-consuming

---

## 3. Features and Functionality

### Student Features

**3.1 Course Material Chatbot**
- Accepts questions in natural language
- Rejects queries outside course scope
- Responds at complexity level matching student's recorded progress
- Uses Socratic method: responds with clarifying questions before giving explanations
- Logs all conversations for progress tracking

**3.2 Progress Tracking**
- Displays concepts student has demonstrated understanding of
- Shows learning trajectory: prerequisite relationships between concepts
- Identifies knowledge gaps based on conversation patterns
- Visual representation of progress through course material

**3.3 Resource Linking**
- References specific sections of course materials (slides, notes, textbook pages)
- Links to relevant papers, videos, tutorials
- Suggests exercises at appropriate difficulty

**3.4 Technical Assistance**
- Guides through tool installation
- Helps interpret error messages
- Provides debugging strategies without solving problems directly

**3.5 Practice Generation**
- Generates quiz questions on specific topics
- Creates coding exercises
- Checks solutions and provides feedback
- Difficulty adapts to student level

### Teacher Features

**3.6 Content Upload & Indexing**
- Upload lecture slides, notes, assignments, past exams
- System indexes content for RAG-based retrieval
- Validates terminology consistency across materials

**3.7 Class-Wide Dashboard**
- Shows distribution of student progress across learning trajectories
- Identifies concepts where many students struggle
- Displays engagement metrics: questions asked, time spent, topics discussed
- Highlights common misconceptions based on conversation patterns
- **Privacy Note:** No individual student lookup available; all views are aggregated to class level

**3.8 Learning Trajectory Definition**
- Define prerequisite relationships between concepts
- Set difficulty levels
- Specify order of topic presentation

**3.9 Assignment Generation**
- Generate quiz/exam questions from course material
- Verify questions test relevant concepts
- Estimate difficulty and time requirements
- Design multi-step problems requiring understanding

**3.10 Assignment Validation**
- Check if assignments can be solved by direct AI prompting
- Suggest modifications to increase resistance to AI shortcuts
- Test against GPT-4/Claude to see if solvable without understanding

---

## 4. User Experience (UX) Requirements

### Student Interface

**Chat Interface:**
- Simple text input for questions
- Conversation history visible
- References to course materials shown inline (e.g., "See slide 23")
- Progress bar showing concepts mastered

**Progress View:**
- Graph showing learning trajectory with completed/incomplete nodes
- Color coding: mastered (green), in-progress (yellow), not-started (gray)
- Click on concept to see related conversations

### Teacher Interface

**Dashboard View:**
- Class progress heatmap showing concept mastery distribution
- Timeline of engagement over semester
- List of most-discussed topics
- Flagged concepts where multiple students show confusion
- All data presented as aggregated class statistics (no individual student identification)

**Content Management:**
- File upload interface with drag-drop
- List view of uploaded materials with edit/delete
- Learning trajectory editor: drag nodes to define prerequisites

---

## 5. Technical Specifications

### Technology Stack (Preliminary)

**Backend:**
- Python with FastAPI
- PostgreSQL for structured data (user accounts, progress tracking)
- Vector database (Pinecone/Weaviate) for RAG
- LLM: GPT-4 or Claude Sonnet via API

**Frontend:**
- React for web interface
- Mobile-responsive design

**Infrastructure:**
- Cloud hosted (AWS/GCP)
- Authentication via university SSO

### Performance Requirements
- Chat response latency: low (sub-second goal)
- Support multiple concurrent users
- RAG retrieval: fast response time

### Security
- Student conversation data encrypted at rest
- Teacher access limited to aggregated class data only (no individual student lookup)
- GDPR/privacy compliance for educational data
- Role-based access control (student/teacher/admin)

### Integrations
- University SSO for authentication
- Consider future: LMS integration (Moodle, Canvas)

---

## 6. Metrics for Success

### Logged Activity Data
System must log:
- All student-chatbot conversations with timestamps (anonymized for teacher view)
- Concepts discussed in each conversation
- Questions asked and answer patterns
- Practice problems attempted and results
- Time spent in system
- Resources accessed

### Key Performance Indicators

**Student Learning Outcomes:**
- Exam scores compared to previous semesters (target: improved average)
- Concept retention measured in follow-up courses
- Time to concept mastery (logged conversation to demonstrated understanding)
- Student self-reported confidence in material

**System Engagement:**
- Average questions per student per week (target: regular usage)
- Percentage of concepts discussed before exam (target: substantial coverage)
- Return rate: students using system multiple times per week (target: high retention)

**Teacher Efficiency:**
- Office hours questions reduced (target: measurable decrease)
- Time to create practice problems (target: measurable decrease)
- Accuracy of dashboard insights (teacher validation survey)

**Academic Integrity:**
- Assignment submission similarity scores
- Correlation between chat history and assignment quality

### Analysis Methods
- Automated weekly reports from logged data (aggregated only)
- A/B testing: courses using system vs. control courses
- Pre/post surveys on student confidence
- Teacher interviews on dashboard usefulness

---

## 7. Assumptions and Constraints

### Assumptions
1. Students will engage with chatbot if it provides value over ChatGPT
2. Teachers willing to upload course materials to system
3. Socratic dialogue improves learning more than direct answers
4. Conversation logs are valid indicators of understanding
5. BGU provides university SSO access
6. Students have reliable internet access
7. Aggregated class data sufficient for teachers (no individual student access needed)

### Constraints

**Technical:**
- LLM API costs must stay within budget constraints
- Cannot guarantee chatbot never gives direct answers to homework
- RAG accuracy depends on quality of uploaded materials
- Socratic dialogue may frustrate some students initially

**Resource:**
- Small development team over academic year
- No dedicated UX designer
- Limited budget for cloud infrastructure
- Testing limited to courses team members can access

**Privacy/Regulatory:**
- Cannot show individual student data to teachers (design constraint)
- Must comply with university data policies
- Student consent required for data collection
- Data retention limits (delete after graduation?)

**Scope:**
- Single department pilot (CIS Faculty only)
- No new content generation (uses existing materials)
- No replacement for lectures or in-person teaching
- No automatic grading without teacher review

### Risks
1. **Low adoption:** Students prefer ChatGPT because it gives direct answers
   - Mitigation: Demonstrate superior learning outcomes early
   
2. **Poor RAG quality:** Chatbot gives incorrect information from materials
   - Mitigation: Extensive testing, teacher review of responses
   
3. **Privacy concerns:** Students uncomfortable with conversation logging
   - Mitigation: Clear consent process, demonstrate privacy protections
   
4. **Teacher resistance:** Don't trust dashboard insights without individual student data
   - Mitigation: Pilot with early adopter teachers, show value of aggregated insights
   
5. **API costs exceed budget:** More usage than expected
   - Mitigation: Rate limiting, caching, monitoring costs weekly

---

*Document Status: Brainstorming / Initial Draft*  
*Date: November 2025*  
*Next Review: Convert to formal PRD structure*

LLM Chat:
https://claude.ai/share/f9066c75-ab76-4ae0-b5a2-eebd3f7522b7
