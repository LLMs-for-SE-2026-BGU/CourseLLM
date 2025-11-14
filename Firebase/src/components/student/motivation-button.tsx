'use client';

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Lightbulb, Sparkles } from 'lucide-react';
import { getMotivationAction } from '@/lib/actions';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal } from 'lucide-react';

interface MotivationButtonProps {
  topicName: string;
  courseName: string;
}

export function MotivationButton({ topicName, courseName }: MotivationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleGetExplanation = () => {
    startTransition(async () => {
      setError(null);
      setExplanation('');
      const result = await getMotivationAction({ topic: topicName, courseName });
      if (result.error) {
        setError(result.error);
      } else if (result.data) {
        setExplanation(result.data);
      }
    });
  };

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      handleGetExplanation();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Button onClick={() => onOpenChange(true)}>
        <Lightbulb />
        Why is this important?
      </Button>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
            <Sparkles className="h-6 w-6 text-accent" />
            Why '{topicName}' Matters
          </DialogTitle>
          <DialogDescription>
            Understanding the bigger picture can boost your motivation. Here's why this topic is crucial.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isPending && (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          )}
          {error && (
             <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {explanation && <p className="leading-relaxed text-foreground/90">{explanation}</p>}
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
