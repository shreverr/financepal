import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "Finance Chat",
  version: "1.0.0"
});

server.prompt(
  "give-advice",
  { chatMessage: z.string() },
  ({ chatMessage }) => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: `Please give financial advice based on the following message: ${chatMessage}`
      }
    }]
  })
);