import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set
});

/**
 * Text Generation
 * Understands the text and generates a response
 *
 * @param message OpenAI.ChatCompletionMessageParam[]
 * @returns response from OpenAI
 */
export const textResponseOpenAI = async (
  message: OpenAI.ChatCompletionMessageParam[]
) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: message,
  });

  return completion.choices[0].message;
};

/**
 * Understands the image and generates a response
 * Image can be passed in as a URL or a base64 string
 *
 * @param model specify the model to use
 * @param message OpenAI.ChatCompletionMessageParam[]
 * @returns response from OpenAI
 */
export const understandImageOpenAI = async (
  model: string = "gpt-4o-mini",
  message: OpenAI.ChatCompletionMessageParam[]
) => {
  const completion = await openai.chat.completions.create({
    model: model,
    messages: message,
  });

  return completion.choices[0].message;
};
