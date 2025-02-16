import { textResponseOpenAI } from "../../services";
import OpenAI from "openai";

export const openAITextHandler = async (body: string) => {
  // construct message object
  const message: OpenAI.ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
    {
      role: "user",
      content: body,
    },
  ];

  // call the openAI service
  const response = await textResponseOpenAI(message);

  return { response: response };
};
