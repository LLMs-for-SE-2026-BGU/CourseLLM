'use server';

/**
 * @fileOverview Recommends the next topics for a student to study based on their progress and the learning trajectory.
 *
 * - recommendNextTopics - A function that recommends the next topics for a student to study.
 * - RecommendNextTopicsInput - The input type for the recommendNextTopics function.
 * - RecommendNextTopicsOutput - The return type for the recommendNextTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendNextTopicsInputSchema = z.object({
  studentId: z.string().describe('The ID of the student.'),
  courseId: z.string().describe('The ID of the course.'),
  currentTopicIds: z
    .array(z.string())
    .describe('The IDs of the topics the student is currently studying.'),
});
export type RecommendNextTopicsInput = z.infer<
  typeof RecommendNextTopicsInputSchema
>;

const RecommendNextTopicsOutputSchema = z.object({
  recommendedTopicIds: z
    .array(z.string())
    .describe('The IDs of the recommended next topics to study.'),
});
export type RecommendNextTopicsOutput = z.infer<
  typeof RecommendNextTopicsOutputSchema
>;

export async function recommendNextTopics(
  input: RecommendNextTopicsInput
): Promise<RecommendNextTopicsOutput> {
  return recommendNextTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendNextTopicsPrompt',
  input: {schema: RecommendNextTopicsInputSchema},
  output: {schema: RecommendNextTopicsOutputSchema},
  prompt: `You are a helpful AI assistant that suggests the next topics for a student to study in a course.

You are provided with the student ID, the course ID, and the IDs of the topics the student is currently studying.

Based on this information, recommend the IDs of the next topics the student should study.

Student ID: {{{studentId}}}
Course ID: {{{courseId}}}
Current Topic IDs: {{#each currentTopicIds}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Output the recommended topic IDs in a JSON format:
{
  "recommendedTopicIds": ["topic_id_1", "topic_id_2", ...]
}`,
});

const recommendNextTopicsFlow = ai.defineFlow(
  {
    name: 'recommendNextTopicsFlow',
    inputSchema: RecommendNextTopicsInputSchema,
    outputSchema: RecommendNextTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
