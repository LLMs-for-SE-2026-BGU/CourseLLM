
# Acceptance Criteria
## CS Learning Platform - BGU

**Version:** 1.0  
**Course:** Introduction to Computer Science

---

## Release Readiness Criteria

### MUST HAVE (Required for MVP Release)

#### 1. Core Functionality
- Socratic chatbot responds to student questions with guided hints (never direct answers)
- Pre/post quiz system measures learning per topic
- Student progress dashboard shows mastered vs. in-progress topics
- Teacher dashboard displays anonymous aggregate analytics
- RAG system retrieves relevant course materials for chatbot context

#### 2. Per-Topic Success Metrics
- Average pre/post improvement ≥40% per topic
- Topic mastery rate ≥60% (students scoring ≥80% on post-quiz)
- System tracks progress separately for each topic (no cross-topic assumptions)

#### 3. Privacy & Security
- Teachers CANNOT identify individual students from dashboard
- Zero ability to link conversations to specific student IDs
- Privacy audit completed and passed
- GDPR/Israeli privacy law compliance verified

#### 4. Performance
- Chat response time <5 seconds (90th percentile)
- Quiz loading <1 second
- Dashboard loading <3 seconds
- System supports 100 concurrent users

#### 5. Israeli/BGU Context
- Course materials from actual BGU Intro CS content
- Examples reference Israeli tech (Waze, Mobileye, Unit 8200)
- System accommodates students called for IDF reserves
- Hebrew + English language support (or English-only documented)

---

## Key Performance Indicators (KPIs)

### Student Learning Effectiveness (Primary)

**KPI-1: Pre/Post Quiz Improvement**
- **Definition:** Average percentage point improvement from pre to post-quiz per topic
- **Target:** ≥40% improvement
- **Measured:** Per topic, after every chatbot session
- **Example:** Pre-quiz 40%, Post-quiz 80% → 100% improvement ✓

**KPI-2: Topic Mastery Rate** 
- **Definition:** % of students scoring ≥80% on post-quiz per topic
- **Target:** ≥60% per topic
- **Measured:** Per topic, continuously updated

**KPI-3: Final Grade Correlation**
- **Definition:** Difference in final exam scores between active users (≥5 sessions) vs. non-users
- **Target:** +10 percentage points higher for active users
- **Measured:** End of semester

**KPI-4: Midterm Improvement**
- **Definition:** Midterm score difference for students using system vs. not using
- **Target:** +5 percentage points
- **Measured:** After midterm (Week 6-7)

**KPI-5: Learning Retention**
- **Definition:** Score on surprise quiz 1-2 weeks after mastering topic
- **Target:** ≥70% retention rate
- **Measured:** Per topic, 1-2 weeks post-mastery

### Teacher Value (Secondary)

**KPI-6: Early Warning System**
- **Definition:** Topics flagged where >30% students score <50% on post-quiz
- **Target:** Teachers receive alerts, take action, see improvement
- **Measured:** Weekly aggregate analysis

**KPI-7: Content Gap Detection**
- **Definition:** Identification of topics with low pre-quiz scores (<40%) indicating missing prerequisites
- **Target:** 2-3 problem topics identified per semester
- **Measured:** Monthly aggregate analysis

**KPI-8: Teacher Adoption**
- **Definition:** % of teachers uploading materials and checking dashboard weekly
- **Target:** ≥80% (8 of 10 teachers)
- **Measured:** Weekly tracking

### Student Engagement (Secondary)

**KPI-9: Weekly Active Users**
- **Definition:** % of students using chatbot ≥1 time per week
- **Target:** ≥60%
- **Measured:** Weekly

**KPI-10: Session Depth**
- **Definition:** Average message exchanges per chatbot session
- **Target:** 5-10 exchanges (indicates meaningful learning)
- **Measured:** Per topic, continuously

**KPI-11: Repeat Usage**
- **Definition:** % of students having 2+ sessions on same topic (re-learning)
- **Target:** ≥30%
- **Measured:** Per topic

### System Health (Operational)

**KPI-12: Scope Adherence**
- **Definition:** % of questions correctly classified as in-scope vs. out-of-scope
- **Target:** ≥90% accuracy
- **Measured:** Weekly spot checks (100 random questions)

**KPI-13: Response Quality**
- **Definition:** Student satisfaction rating after chat session (1-5 stars)
- **Target:** ≥4.0 average per topic
- **Measured:** Optional post-session survey

**KPI-14: API Cost Efficiency**
- **Definition:** API tokens per student achieving mastery
- **Target:** <$0.50 per student per mastered topic
- **Measured:** Continuously

**KPI-15: System Uptime**
- **Definition:** % of time system available
- **Target:** ≥99% during semester
- **Measured:** Automated monitoring

---

## Pilot Success Criteria (Week 10)

**Minimum Requirements for Pilot Success:**
- ≥50 students participated
- Average pre/post improvement ≥30% (lower bar for pilot)
- Student satisfaction ≥3.5/5 stars
- Teachers confirm they cannot identify individual students
- Zero privacy violations or security incidents
- System stable (no crashes during pilot)

---

## Definition of Done (Per Feature)

### Socratic Chatbot
-Bot asks clarifying questions before providing hints
-Bot never gives complete solutions
-Bot detects misconceptions and addresses them
-Bot stays scoped to course material (≥90% accuracy)
-Conversation depth 5-10 exchanges typical

### Pre/Post Quiz System  
- Pre-quiz administered before chatbot interaction
- Post-quiz has similar difficulty, different questions
- Results show clear improvement metrics
- Minimum 30 question pairs available for intro CS topics
- Quiz data stored per-topic for analytics

### Teacher Dashboard (Anonymous)
- Shows topic performance heatmap
- Displays aggregate pre/post improvement per topic
- Identifies common misconceptions
- Provides sample conversations (completely anonymous)
- Teachers confirm inability to identify students

### RAG System
- Retrieves relevant course materials (<2 seconds)
- Chatbot responses grounded in actual course content
- Teachers can upload PDFs, slides, code examples
- System indexes materials automatically
- Retrieval accuracy ≥90% (manual spot checks)

---

## Israeli/BGU Specific Criteria

**Cultural Fit:**
- Examples resonate with Israeli students (Waze, Mobileye, Unit 8200)
- System accommodates irregular attendance (IDF reserves)
- Terminology familiar to BGU students
- Beer Sheva / Negev context where relevant

**Language:**
- English primary language (course language)
- Hebrew support planned (if not in MVP, documented for future)

**Privacy Compliance:**
- Israeli privacy law compliance confirmed
- BGU data retention policies followed
- Student consent for anonymized research use obtained

---

## Non-Functional Requirements

**Security:**
- HTTPS only
- JWT authentication
- Input sanitization
- SQL injection prevention
- Rate limiting (10 questions/day)

**Scalability:**
- Handles 400 students
- Supports 100 concurrent chat sessions
- Database can store 10,000+ conversations

**Usability:**
- Interface intuitive (≥80% of students need no training)
- Mobile-responsive web design
- Accessible (screen reader compatible)

**Documentation:**
- Student user guide
- Teacher user guide
- API documentation
- Deployment guide

---

## Launch Checklist

### Pre-Launch (Week 9)
- Security audit completed
- Privacy audit completed  
- Performance testing (100 concurrent users)
- Bug fixes from testing
- User documentation finalized

### Pilot Launch (Week 10)
- 50-100 students recruited
- Teachers trained on dashboard
- Course materials uploaded for 2-3 topics
-   Monitoring dashboards active
- Support channel established

### Post-Pilot (Week 11)
- Pilot data analyzed
- Student feedback collected
- Teacher feedback collected
- Bugs documented
- Recommendations for improvements

---

## Success Threshold Summary

**PASS Criteria (Pilot):**
- 50+ participants
- 30%+ average improvement
- 3.5+ satisfaction
- Zero privacy breaches

**PASS Criteria (Full Semester):**
- 60%+ weekly active users
- 40%+ average improvement per topic
- 5+ points midterm improvement
- 80%+ teacher adoption
- 99%+ uptime

**EXCELLENCE Criteria:**
- 70%+ topic mastery rate
- 10+ points final exam improvement
- 70%+ retention after 2 weeks
- Students report "actually learned" not just "got answers"

---

**Document Owner:** QA Lead  
**Approved By:** Project Manager, Technical Lead  
**Last Updated:** November 5, 2025