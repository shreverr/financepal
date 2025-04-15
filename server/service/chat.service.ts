import { streamText, StreamTextResult, tool, ToolSet } from "ai";
import { model } from "../lib/LLMClient";
import { z } from "zod";
import { createResource } from "../model/resource.model";
import { findRelevantContent } from "../lib/ai/embedding";

export const getChatResponse = (message: string): any => {
  const result = streamText({
    model: model,
    system: `You are a sophisticated AI financial advisor specializing in retirement planning.
    Your purpose is to provide personalized investment recommendations by analyzing users' financial situations, 
    risk tolerance, and market conditions while maintaining persistent memory of key financial details across conversations.
    You are a sophisticated AI financial advisor specializing in retirement planning. 
    Your purpose is to provide personalized investment recommendations by analyzing users' financial situations, risk tolerance, and market conditions while maintaining persistent memory of key financial details across conversations.
    . 

    make sure to Check your knowledge base before answering any questions.
    if any information is provided call the tool to save relevent info.
    you can respond to questions using information from tool calls."`,
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
    tools: {
      addResource: tool({
        description: `add a resource to your knowledge base.
          If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
        parameters: z.object({
          content: z
            .string()
            .describe('the content or resource to add to the knowledge base'),
        }),
        execute: async ({ content }) => createResource({ content }),
      }),
      getInformation: tool({
        description: `get information from your knowledge base to answer questions.`,
        parameters: z.object({
          question: z.string().describe('the users question'),
        }),
        execute: async ({ question }) => findRelevantContent(question),
      }),
    },
    maxSteps: 5,
  });

  return result
};