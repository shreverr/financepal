import { streamText, StreamTextResult, ToolSet } from "ai";
import { model } from "../lib/LLMClient";

export const getChatResponse = (message: string): StreamTextResult<ToolSet, never> => {
  const result = streamText({
    model: model,
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
  });

  return result
};