import {
  getCourseById,
  getStudentProgress,
  getTopicsByCourse,
  getPrerequisitesForTopic,
} from '@/lib/data';
import { LearningPath } from '@/components/student/learning-path';
import { TopicDetails } from '@/components/student/topic-details';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BookOpenCheck } from 'lucide-react';
import type { Topic } from '@/lib/definitions';
import { Suspense } from 'react';
import { TopicDetailsSkeleton } from '@/components/student/topic-details';

// For this demo, we'll hardcode the student and course IDs.
const STUDENT_ID = 'student-1';
const COURSE_ID = 'cs-101';

export default async function StudentDashboard({
  searchParams,
}: {
  searchParams?: { topic?: string };
}) {
  const course = await getCourseById(COURSE_ID);
  const topics = await getTopicsByCourse(COURSE_ID);
  const studentProgress = await getStudentProgress(STUDENT_ID, COURSE_ID);

  if (!course) {
    notFound();
  }

  const selectedTopicId = searchParams?.topic || topics[0]?.id;
  const selectedTopic = topics.find((t) => t.id === selectedTopicId);

  const prerequisites = selectedTopic
    ? await getPrerequisitesForTopic(selectedTopic.id)
    : [];

  const prerequisiteTopics = topics.filter((t) =>
    prerequisites.some((p) => p.prerequisiteTopicId === t.id)
  );

  return (
    <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4">
      <div className="lg:col-span-1 xl:col-span-1">
        <LearningPath
          topics={topics}
          progress={studentProgress}
          selectedTopicId={selectedTopicId}
          courseName={course.name}
        />
      </div>

      <div className="h-full lg:col-span-2 xl:col-span-3">
        {selectedTopic ? (
          <Suspense fallback={<TopicDetailsSkeleton />}>
            <TopicDetails
              key={selectedTopic.id} // Add key to force re-render on topic change
              topic={selectedTopic}
              courseName={course.name}
              studentId={STUDENT_ID}
              prerequisites={prerequisiteTopics}
              allTopics={topics}
            />
          </Suspense>
        ) : (
          <Card className="flex h-full min-h-[60vh] items-center justify-center">
            <CardHeader>
              <CardContent className="flex flex-col items-center text-center">
                <BookOpenCheck className="mb-4 h-12 w-12 text-muted-foreground" />
                <CardTitle className="mb-2">Welcome to {course.name}</CardTitle>
                <p className="text-muted-foreground">
                  Select a topic from the learning path to get started.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
}
