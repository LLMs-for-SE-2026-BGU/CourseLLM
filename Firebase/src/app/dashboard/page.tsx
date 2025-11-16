import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProgressOverview } from "@/components/teacher/progress-overview";
import { getTopicsByCourse, getAllStudentsProgress, getStudents } from "@/lib/data";

const COURSE_ID = 'cs-101';

export default async function TeacherDashboard() {

  const topics = await getTopicsByCourse(COURSE_ID);
  const allProgress = await getAllStudentsProgress(COURSE_ID);
  const students = await getStudents();

  return (
    <div className="h-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Progress Overview</h2>
          <p className="text-muted-foreground">
            A summary of student progress in the course.
          </p>
        </div>
      </div>
      <ProgressOverview topics={topics} allProgress={allProgress} students={students} />
    </div>
  );
}
