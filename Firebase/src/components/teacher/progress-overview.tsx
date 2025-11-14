import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Topic, StudentTopicProgress, Student } from "@/lib/definitions";

interface ProgressOverviewProps {
  topics: Topic[];
  allProgress: StudentTopicProgress[];
  students: Student[];
}

export function ProgressOverview({ topics, allProgress, students }: ProgressOverviewProps) {
  const totalStudents = students.length;

  const getTopicStats = (topicId: string) => {
    const progressForTopic = allProgress.filter(p => p.topicId === topicId);
    
    const studentsMastered = progressForTopic.filter(p => p.status === 'mastered').length;
    
    const allAttempts = progressForTopic.flatMap(p => p.quizAttempts);
    const avgScore = allAttempts.length > 0 
      ? allAttempts.reduce((acc, attempt) => acc + attempt.score, 0) / allAttempts.length
      : 0;

    const masteryRate = totalStudents > 0 ? (studentsMastered / totalStudents) * 100 : 0;
    
    return {
      avgScore: Math.round(avgScore),
      masteryRate: Math.round(masteryRate)
    };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Topic Mastery Overview</CardTitle>
        <CardDescription>
          Aggregated student performance across all topics in the course.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Topic</TableHead>
              <TableHead className="text-center">Average Quiz Score</TableHead>
              <TableHead className="w-[30%] text-right">Mastery Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.map((topic) => {
              const stats = getTopicStats(topic.id);
              return (
                <TableRow key={topic.id}>
                  <TableCell className="font-medium">{topic.name}</TableCell>
                  <TableCell className="text-center">
                    {stats.avgScore > 0 ? `${stats.avgScore}%` : 'N/A'}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="w-12 text-right">{stats.masteryRate}%</span>
                      <Progress value={stats.masteryRate} className="h-2 w-24" />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
