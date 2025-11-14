import { config } from 'dotenv';
config();

import '@/ai/flows/explain-topic-importance.ts';
import '@/ai/flows/personalized-practice-quizzes.ts';
import '@/ai/flows/recommend-next-topics.ts';
import '@/ai/flows/course-assistant.ts';
