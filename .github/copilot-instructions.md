# AI Agent Instructions for CourseLLM Project

## Project Overview
CourseLLM is an educational technology project being developed at BGU-CS (Ben-Gurion University Computer Science Department) that aims to enhance teaching and learning experiences through AI integration. The project focuses on working with existing course materials rather than generating new content.

## Key Components & Architecture

### Student-Facing Features
- Socratic learning chatbot system that:
  - Restricts scope to course materials
  - Validates student understanding before providing answers
  - Tracks student progress along learning trajectories
- Quiz/exercise generation and validation
- Technical assistance (tooling, debugging, assignments)
- Resource aggregation and recommendation

### Teacher-Facing Features
- Course material preparation and indexing for RAG
- Student progress monitoring
- Learning trajectory management
- Assignment creation and validation
- Anti-cheating detection

## Development Guidelines

### RAG Implementation
- Course materials should be processed for retrieval-augmented generation
- Content indexing functions should preserve hierarchical relationships
- Focus on accurate context retrieval for student questions

### Chat System Development
- Implement strict scope filtering for course relevance
- Build student knowledge tracking into chat interactions
- Follow Socratic dialogue patterns in responses

### Data Privacy & Security
- Handle student progress data with appropriate privacy controls
- Implement secure storage for course materials
- Ensure assignment content is protected

### Testing
When implementing new features:
1. Verify course material scope restrictions
2. Test knowledge tracking accuracy
3. Validate RAG retrieval relevance
4. Check privacy/security compliance

## Critical Files & Directories
- `PRD/Drafts/CourseLLM.md` - Contains core project requirements and vision
- [Additional key files will be added as the project develops]

## Project-Specific Patterns
1. Student Interactions:
   - Always validate student knowledge level first
   - Use Socratic questioning methods
   - Keep interactions within course scope

2. Content Management:
   - Preserve original material integrity
   - Index for efficient retrieval
   - Track material dependencies

## Integration Points
1. Course Material Integration:
   - RAG system for content retrieval
   - Learning trajectory mapping
   - Progress tracking system

2. External Tools:
   - Development environment assistance
   - Assignment submission systems
   - Resource recommendation engine

## Next Steps for Development
The project is in its initial stages. Focus areas:
1. Core RAG infrastructure for course materials
2. Student interaction patterns and knowledge tracking
3. Teacher tools for content preparation
4. Security and privacy framework