import { NextResponse } from "next/server"; 
import OpenAI from "openai"; 

// System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt =
  "Your name is Akiba, an AI financial agent for AInvest. You provide personalized information on investments and savings. Ask the user their desired risk level, time frame for investment, and which country they want to invest in. Provide available options based on the interest rate, including whether it's calculated daily or annually, and how soon they can liquidate their money after investing. Consider the country they are from and the country they want to invest in.";

// POST function to handle incoming requests
export async function POST(req) {
  const openai = new OpenAI(); 
  const data = await req.json(); 

  // Create a chat completion request to the OpenAI API
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: systemPrompt }, ...data],
    model: "gpt-4o-mini", 
    stream: true,
  });

  // Create a ReadableStream to handle the streaming response
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        // Iterate over the streamed chunks of the response
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content; 
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text); 
          }
        }
      } catch (err) {
        controller.error(err); 
      } finally {
        controller.close(); 
      }
    },
  });

  return new NextResponse(stream);
}