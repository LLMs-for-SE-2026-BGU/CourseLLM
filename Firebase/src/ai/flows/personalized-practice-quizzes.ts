'use server';

/**
 * @fileOverview A flow that generates personalized practice quizzes for a specific topic.
 *
 * - generatePersonalizedQuiz - A function that generates a personalized quiz for a given topic.
 * - PersonalizedQuizInput - The input type for the generatePersonalizedQuiz function.
 * - PersonalizedQuizOutput - The return type for the generatePersonalizedQuiz function.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'genkit';

const PersonalizedQuizInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate a quiz.'),
  studentLevel: z.string().describe('The current level of the student (e.g., beginner, intermediate, advanced).'),
});
export type PersonalizedQuizInput = z.infer<typeof PersonalizedQuizInputSchema>;

const QuizQuestionSchema = z.object({
  question: z.string().describe('The question text.'),
  options: z.array(z.string()).describe('An array of 4 multiple-choice options.'),
  answer: z.string().describe('The letter (A, B, C, or D) corresponding to the correct option.'),
});

const PersonalizedQuizOutputSchema = z.object({
  quiz: z.array(QuizQuestionSchema).describe('An array of 5 quiz questions.'),
});
export type PersonalizedQuizOutput = z.infer<typeof PersonalizedQuizOutputSchema>;

export async function generatePersonalizedQuiz(input: PersonalizedQuizInput): Promise<PersonalizedQuizOutput> {
  return personalizedQuizFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedQuizPrompt',
  input: {schema: PersonalizedQuizInputSchema},
  output: {schema: PersonalizedQuizOutputSchema},
  prompt: `You are an expert quiz generator for CS courses. Generate a 5-question multiple-choice quiz on the topic of "{{topic}}" for a {{studentLevel}} student. For each question, provide 4 options (A, B, C, D) and indicate the correct answer.

Generate a JSON object that strictly follows this format:
{
  "quiz": [
    {
      "question": "Your question here",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "A"
    }
  ]
}
`,
});

const personalizedQuizFlow = ai.defineFlow(
  {
    name: 'personalizedQuizFlow',
    inputSchema: PersonalizedQuizInputSchema,
    outputSchema: PersonalizedQuizOutputSchema,
  },
  async input => {
    const {output} = await prompt(input, {model: 'googleai/gemini-2.5-pro'});
    return output!;
  }
);
