import { GoogleGenAI } from '@google/genai';
import { AppError } from './appError';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  new AppError(
    "GEMINI_API_KEY Error",
    500,
    "GEMINI_API_KEY not provied",
    false,
  )
} 

const ai = new GoogleGenAI({
  apiKey: apiKey,
});

export default ai
