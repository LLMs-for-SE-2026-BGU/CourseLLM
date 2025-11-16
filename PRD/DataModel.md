# CourseLLM Data Model

## Core Entities

### Course
- **ID**: Unique identifier
- **Name**: Course name
- **Code**: Course code (e.g., CS101)
- **Description**: Course description
- **Semester**: Academic semester
- **Status**: Active/Archived
- **Materials**: Collection of course materials
- **LearningTrajectories**: Ordered sequence of learning objectives
- **Students**: Enrolled students
- **Teachers**: Associated teachers

### User
- **ID**: Unique identifier
- **Type**: Student/Teacher/Admin
- **Name**: Full name
- **Email**: University email
- **Courses**: Associated courses
- **Status**: Active/Inactive

### CourseContent
- **ID**: Unique identifier
- **Type**: Lecture/Assignment/Quiz/Resource
- **Title**: Content title
- **Description**: Content description
- **Format**: File format/type
- **Content**: Actual content or reference
- **Metadata**: For RAG indexing
- **Dependencies**: Prerequisites
- **Course**: Parent course

### LearningTrajectory
- **ID**: Unique identifier
- **Course**: Associated course
- **Topics**: Ordered list of topics
- **Dependencies**: Topic prerequisites
- **Objectives**: Learning objectives
- **Milestones**: Progress checkpoints

### StudentProgress
- **ID**: Unique identifier
- **Student**: Student reference
- **Course**: Course reference
- **Topics**: Map of topic mastery levels
- **Interactions**: Learning interactions history
- **Assessments**: Completed assessments
- **CurrentTrajectory**: Current learning path

### Interaction
- **ID**: Unique identifier
- **Student**: Student reference
- **Timestamp**: When interaction occurred
- **Context**: Topic/content reference
- **Type**: Question/Response/Assessment
- **Content**: Interaction content
- **Outcome**: Learning outcome
- **MasteryImpact**: Effect on mastery levels

### Assessment
- **ID**: Unique identifier
- **Type**: Quiz/Exercise/Assignment
- **Course**: Course reference
- **Topics**: Covered topics
- **Questions**: Assessment items
- **Validation**: Anti-cheating rules
- **Metrics**: Performance metrics

## Relationships

1. **Course <-> User**
   - Many-to-many through enrollment/teaching assignments
   - Tracks role-specific permissions and access

2. **Course <-> CourseContent**
   - One-to-many
   - Maintains content organization and dependencies

3. **Course <-> LearningTrajectory**
   - One-to-many
   - Defines different learning paths through course material

4. **Student <-> Progress**
   - One-to-many
   - Tracks individual progress across courses

5. **Progress <-> Interaction**
   - One-to-many
   - Records learning activities and outcomes

6. **Course <-> Assessment**
   - One-to-many
   - Manages evaluation tools and metrics