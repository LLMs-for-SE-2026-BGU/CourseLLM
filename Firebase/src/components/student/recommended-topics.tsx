'use client';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { recommendNextTopics } from '@/lib/actions';
import { Target, ArrowRight, AlertTriangle } from 'lucide-react';
import type { Topic } from '@/lib/definitions';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface RecommendedTopicsProps {
  currentTopicId: string;
  studentId: string;
  courseId: string;
  allTopics: Topic[];
}

export function RecommendedTopics({
  currentTopicId,
  studentId,
  courseId,
  allTopics,
}: RecommendedTopicsProps) {
  const [recommended, setRecommended] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      setIsLoading(true);
      setError(null);
      const result = await recommendNextTopics({
        studentId,
        courseId,
        currentTopicIds: [currentTopicId],
      });

      if (result.error) {
        setError(result.error);
      } else if (result.data) {
        const recommendedTopics = allTopics.filter((t) =>
          result.data.includes(t.id)
        );
        setRecommended(recommendedTopics);
      }
      setIsLoading(false);
    }
    fetchRecommendations();
  }, [currentTopicId, studentId, courseId, allTopics]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Target />
          What's Next?
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && <Skeleton className="h-10 w-full" />}
        {error && (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Could not fetch recommendations</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        {!isLoading && !error && (
            recommended.length > 0 ? (
                recommended.map(topic => (
                    <Link href={`/?topic=${topic.id}`} key={topic.id} passHref>
                        <Button variant="secondary" className="w-full justify-between">
                            <span>{topic.name}</span>
                            <ArrowRight />
                        </Button>
                    </Link>
                ))
            ) : (
                <p className="text-muted-foreground">You've reached the end of the path for now!</p>
            )
        )}
      </CardContent>
    </Card>
  );
}
