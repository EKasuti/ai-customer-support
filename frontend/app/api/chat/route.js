import { NextResponse } from "next/server"; 
import OpenAI from "openai"; 

const systemPrompt = "Your name is Akiba, an AI financial agent for AInvest. You provide personalized information on investments and savings. Ask the user their desired risk level, time frame for investment, and which country they want to invest in. Provide available options based on the interest rate, including whether it's calculated daily or annually, and how soon they can liquidate their money after investing. Consider the country they are from and the country they want to invest in.";

const questions = [
  "As your financial agent, I will need some information from you to get you the best investment plan. What is your desired level or risk?",
  "What is your time frame for investment (short-term, medium-term, long-term)?",
  "Which country are you from?",
  "Which country do you want to invest in?"
];

const formatResponse = (content) => {
  content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  content = content.replace(/(\d+)\.\s/g, '\n$1. ');
  content = content.replace(/<br>/g, '\n');
  content = content.replace(/\n\s*\n/g, '\n\n');
  return content;
};

export async function POST(req) {
  const openai = new OpenAI(); 
  const data = await req.json(); 
  const userMessages = data.filter(message => message.role === "user");
  const currentQuestionIndex = userMessages.length;

  if (currentQuestionIndex >= questions.length) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: systemPrompt }, ...data],
      model: "gpt-4o-mini", 
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of completion) {
            let content = chunk.choices[0]?.delta?.content; 
            if (content) {
              content = formatResponse(content);
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
  } else {
    const nextQuestion = questions[currentQuestionIndex];
    return new NextResponse(nextQuestion, { status: 200 });
  }
}