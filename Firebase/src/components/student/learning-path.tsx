import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle2, Circle } from 'lucide-react';
import type { Topic, StudentTopicProgress } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';

interface LearningPathProps {
  topics: Topic[];
  progress: StudentTopicProgress[];
  selectedTopicId: string | null;
  courseName: string;
}

const statusIcons = {
  mastered: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  not_started: <Circle className="h-5 w-5 text-muted-foreground" />,
};

export function LearningPath({
  topics,
  progress,
  selectedTopicId,
  courseName,
}: LearningPathProps) {
  const getTopicProgress = (topicId: string) => {
    return progress.find((p) => p.topicId === topicId) || { status: 'not_started' };
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{courseName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">Your learning path</p>
        <ScrollArea className="h-[calc(100vh-220px)]">
          <div className="relative space-y-2 pr-4">
            <div className="absolute left-[9px] top-[10px] h-full w-0.5 bg-border -z-10" />
            {topics.map((topic, index) => {
              const topicProgress = getTopicProgress(topic.id);
              const isSelected = topic.id === selectedTopicId;

              return (
                <Link
                  href={`/?topic=${topic.id}`}
                  key={topic.id}
                  className={cn(
                    'block rounded-lg border-2 p-3 transition-all duration-200 hover:border-primary/50',
                    isSelected ? 'border-primary bg-primary/5' : 'border-transparent bg-card hover:bg-muted/50'
                  )}
                  scroll={false}
                >
                  <div className="flex items-center gap-3">
                    <div className="z-10 flex h-5 w-5 items-center justify-center rounded-full bg-background">
                       {statusIcons[topicProgress.status]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{topic.name}</h3>
                      <p className="text-xs text-muted-foreground">Topic {index + 1}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
