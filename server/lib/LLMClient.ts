import { AppError } from './appError';
import { createGoogleGenerativeAI, google } from '@ai-sdk/google';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  new AppError(
    "GEMINI_API_KEY Error",
    500,
    "GEMINI_API_KEY not provied",
    false,
  )
} 
export const llmClient = createGoogleGenerativeAI({
  apiKey: apiKey,
});

export const model = llmClient('gemini-2.0-flash', {
  safetySettings: [
    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
  ],
});
