import { textResponseOpenAI } from "../../services";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { response } from "express";

export const openAITextToSpeechHandler = async (
  input: string,
  instructions: string,
  model = "gpt-4o-mini-tts",
  voice = "coral"
) => {
  const openai = new OpenAI();
  const speechFile = path.resolve("./speech.mp3");

  const mp3 = await openai.audio.speech.create({
    model,
    voice,
    input, // "Today is a wonderful day to build something people love!"  the text to be converted to speech
    instructions, // "Speak in a cheerful and positive tone.",
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);

  return { response: response };
};
