import { GoogleGenAI } from "@google/genai";

export const geminiApi = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
