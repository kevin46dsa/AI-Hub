import { textResponseOpenAI } from "../../services";

export const openAITextHandler = async (body: string) => {
  // construct message object
  const message = [
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
  // const response = await textResponseOpenAI()

  return { message };
};
