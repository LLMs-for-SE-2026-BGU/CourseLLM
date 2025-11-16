'use server';

/**
 * @fileOverview Explains the importance of a topic and its connection to later courses/real-world problems.
 *
 * - explainTopicImportance - A function that explains the importance of a topic.
 * - ExplainTopicImportanceInput - The input type for the explainTopicImportance function.
 * - ExplainTopicImportanceOutput - The return type for the explainTopicImportance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainTopicImportanceInputSchema = z.object({
  topic: z.string().describe('The topic to explain the importance of.'),
  courseName: z.string().describe('The name of the course the topic belongs to.'),
});
export type ExplainTopicImportanceInput = z.infer<typeof ExplainTopicImportanceInputSchema>;

const ExplainTopicImportanceOutputSchema = z.object({
  explanation: z.string().describe('An explanation of why the topic is important and how it connects to later courses/real-world problems.'),
});
export type ExplainTopicImportanceOutput = z.infer<typeof ExplainTopicImportanceOutputSchema>;

export async function explainTopicImportance(input: ExplainTopicImportanceInput): Promise<ExplainTopicImportanceOutput> {
  return explainTopicImportanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainTopicImportancePrompt',
  input: {schema: ExplainTopicImportanceInputSchema},
  output: {schema: ExplainTopicImportanceOutputSchema},
  prompt: `You are an expert tutor helping students understand why a topic is important.
  Explain why the topic "{{{topic}}}" from the course "{{{courseName}}}" is important and how it connects to later courses and real-world problems.
  Provide a clear and concise explanation that motivates the student to invest time in learning the topic.`,
});

const explainTopicImportanceFlow = ai.defineFlow(
  {
    name: 'explainTopicImportanceFlow',
    inputSchema: ExplainTopicImportanceInputSchema,
    outputSchema: ExplainTopicImportanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
