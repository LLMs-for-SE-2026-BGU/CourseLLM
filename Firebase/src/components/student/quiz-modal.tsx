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
  DialogTrigger,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ClipboardCheck, CheckCircle, XCircle, Sparkles, AlertTriangle, Percent } from 'lucide-react';
import { generatePersonalizedQuiz, updateTopicStatusAction } from '@/lib/actions';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import type { Topic, QuizQuestion } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface QuizModalProps {
  topic: Topic;
  studentId: string;
}

export function QuizModal({ topic, studentId }: QuizModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [quiz, setQuiz] = useState<QuizQuestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isSubmitting, startSubmitTransition] = useTransition();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleGenerateQuiz = () => {
    startTransition(async () => {
      setError(null);
      setQuiz(null);
      setAnswers({});
      setSubmitted(false);
      setScore(null);
      
      const result = await generatePersonalizedQuiz({ topic: topic.name, studentLevel: 'beginner' });
      if (result.error) {
        setError(result.error);
      } else if (result.data) {
        setQuiz(result.data);
      }
    });
  };

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers(prev => ({...prev, [questionIndex]: value}));
  }

  const handleSubmit = () => {
    if (!quiz) return;
    
    startSubmitTransition(async () => {
      setSubmitted(true);
      let correctAnswers = 0;
      quiz.forEach((q, qIndex) => {
        if (answers[qIndex] === q.answer) {
          correctAnswers++;
        }
      });
      const calculatedScore = Math.round((correctAnswers / quiz.length) * 100);
      setScore(calculatedScore);

      if (calculatedScore >= 80) {
          await updateTopicStatusAction({studentId, topicId: topic.id, status: 'mastered'});
      }
    });
  };

  const getOptionLetter = (index: number) => String.fromCharCode(65 + index);
  
  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    if(open) {
        handleGenerateQuiz();
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ClipboardCheck />
          Take a Practice Quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
            <Sparkles className="h-6 w-6 text-accent" />
            Practice Quiz: {topic.name}
          </DialogTitle>
          <DialogDescription>
            Test your knowledge with these personalized questions. Score 80% or higher to mark this topic as complete.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto p-1">
          {isPending && <QuizSkeleton />}
          {error && (
             <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error Generating Quiz</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {quiz && (
            <div className="space-y-4">
              {submitted && score !== null && (
                <Card className={cn(
                    "border-2",
                    score >= 80 ? "bg-green-500/10 border-green-500/50" : "bg-red-500/10 border-red-500/50"
                )}>
                    <CardHeader className="text-center">
                        <CardTitle className="flex items-center justify-center gap-2 font-headline text-2xl">
                            <Percent /> Your Score
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-5xl font-bold">{score}%</p>
                         {score >= 80 ? (
                            <p className="text-center mt-2 text-green-700 dark:text-green-400">Great job! You've mastered this topic.</p>
                        ) : (
                            <p className="text-center mt-2 text-red-700 dark:text-red-400">Not quite! Review the material and try again.</p>
                        )}
                    </CardContent>
                </Card>
              )}
              {quiz.map((q, qIndex) => (
                <Card key={qIndex} className="p-4">
                  <p className="font-medium mb-4">
                    {qIndex + 1}. {q.question}
                  </p>
                  <RadioGroup
                    onValueChange={(value) => handleAnswerChange(qIndex, value)}
                    disabled={submitted}
                  >
                    {q.options.map((option, oIndex) => {
                      const optionLetter = getOptionLetter(oIndex);
                      const isCorrect = optionLetter === q.answer;
                      const isSelected = answers[qIndex] === optionLetter;

                      return (
                        <div
                          key={oIndex}
                          className={cn(
                            'flex items-center space-x-2 p-2 rounded-md transition-colors',
                            submitted && isCorrect && 'bg-green-500/10 border border-green-500/50',
                            submitted && !isCorrect && isSelected && 'bg-red-500/10 border-red-500/50'
                          )}
                        >
                          <RadioGroupItem
                            value={optionLetter}
                            id={`q${qIndex}-o${oIndex}`}
                          />
                          <Label
                            htmlFor={`q${qIndex}-o${oIndex}`}
                            className="flex-1 cursor-pointer"
                          >
                            {option}
                          </Label>
                          {submitted && isCorrect && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          {submitted && !isCorrect && isSelected && (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      );
                    })}
                  </RadioGroup>
                </Card>
              ))}
            </div>
          )}
        </div>
        <DialogFooter>
            {quiz && !submitted && <Button onClick={handleSubmit} disabled={isSubmitting || Object.keys(answers).length !== quiz.length}>{isSubmitting ? 'Submitting...' : 'Submit Answers'}</Button>}
            {submitted && <Button onClick={handleGenerateQuiz}>Try a New Quiz</Button>}
            <Button variant="secondary" onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function QuizSkeleton() {
    return (
        <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2 rounded-md border p-4">
                    <Skeleton className="h-5 w-1/4" />
                    <Skeleton className="h-4 w-full" />
                    <div className="pt-4 space-y-3">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-6 w-3/4" />
                    </div>
                </div>
            ))}
        </div>
    )
}
