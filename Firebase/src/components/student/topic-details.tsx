import type { Topic } from '@/lib/definitions';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Lightbulb, ClipboardCheck, ArrowRight, Target, Info } from 'lucide-react';
import { MotivationButton } from './motivation-button';
import { QuizModal } from './quiz-modal';
import { RecommendedTopics } from './recommended-topics';
import { ChatPanel } from './chat-panel';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '../ui/skeleton';

interface TopicDetailsProps {
  topic: Topic;
  courseName: string;
  studentId: string;
  prerequisites: Topic[];
  allTopics: Topic[];
}

export function TopicDetails({ topic, courseName, studentId, prerequisites, allTopics }: TopicDetailsProps) {
  
  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-4 xl:grid-cols-3">
      <div className="row-start-1 flex flex-col gap-4 xl:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">{topic.name}</CardTitle>
            <CardDescription className="text-base">{topic.description}</CardDescription>
          </CardHeader>
          {prerequisites.length > 0 && (
            <CardContent>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold">Prerequisites:</h4>
                <div className="flex flex-wrap gap-2">
                  {prerequisites.map((p) => (
                    <Badge key={p.id} variant="secondary">
                      {p.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          )}
          <CardFooter className="flex flex-wrap gap-2">
            <MotivationButton topicName={topic.name} courseName={courseName} />
            <QuizModal topic={topic} studentId={studentId} />
          </CardFooter>
        </Card>
        
        <RecommendedTopics
            currentTopicId={topic.id}
            studentId={studentId}
            courseId={topic.courseId}
            allTopics={allTopics}
        />
      </div>

      <div className="row-start-2 h-full min-h-[300px] xl:col-span-3 xl:col-start-3 xl:row-start-1">
        <ChatPanel topic={topic} />
      </div>
    </div>
  );
}

export function TopicDetailsSkeleton() {
  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-4 xl:grid-cols-3">
      <div className="row-start-1 flex flex-col gap-4 xl:col-span-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-9 w-3/4 rounded-md" />
            <Skeleton className="mt-2 h-5 w-full rounded-md" />
             <Skeleton className="mt-1 h-5 w-2/3 rounded-md" />
          </CardHeader>
          <CardContent>
             <Skeleton className="h-6 w-1/3 rounded-md" />
          </CardContent>
          <CardFooter className="flex gap-2">
            <Skeleton className="h-10 w-44 rounded-md" />
            <Skeleton className="h-10 w-44 rounded-md" />
          </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <Skeleton className="h-6 w-1/4 rounded-md" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-8 w-full rounded-md" />
            </CardContent>
        </Card>
      </div>
      <div className="row-start-2 h-full min-h-[300px] xl:col-span-3 xl:col-start-3 xl:row-start-1">
        <Skeleton className="h-full w-full rounded-lg" />
      </div>
    </div>
  );
}
