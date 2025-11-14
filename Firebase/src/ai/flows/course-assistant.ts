'use server';

/**
 * @fileOverview A flow that acts as a course assistant to answer student questions.
 *
 * - answerStudentQuestion - A function that provides an answer to a student's question about a specific topic.
 * - AnswerStudentQuestionInput - The input type for the answerStudentQuestion function.
 * - AnswerStudentQuestionOutput - The return type for the answerStudentQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerStudentQuestionInputSchema = z.object({
  topicName: z.string().describe('The name of the course topic the student is asking about.'),
  question: z.string().describe("The student's question."),
});
export type AnswerStudentQuestionInput = z.infer<typeof AnswerStudentQuestionInputSchema>;

const AnswerStudentQuestionOutputSchema = z.object({
  response: z.string().describe("The AI assistant's helpful response to the student's question."),
});
export type AnswerStudentQuestionOutput = z.infer<typeof AnswerStudentQuestionOutputSchema>;

export async function answerStudentQuestion(input: AnswerStudentQuestionInput): Promise<AnswerStudentQuestionOutput> {
  return courseAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'courseAssistantPrompt',
  input: {schema: AnswerStudentQuestionInputSchema},
  output: {schema: AnswerStudentQuestionOutputSchema},
  prompt: `You are a friendly and helpful course assistant for a computer science class. Your goal is to help students understand the material.

A student is asking a question about the topic: "{{topicName}}".

Their question is: "{{question}}"

Provide a clear, concise, and helpful answer. If the question is outside the scope of the topic, gently guide them back to the relevant material.`,
});

const courseAssistantFlow = ai.defineFlow(
  {
    name: 'courseAssistantFlow',
    inputSchema: AnswerStudentQuestionInputSchema,
    outputSchema: AnswerStudentQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
