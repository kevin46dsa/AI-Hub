import { geminiApi } from "../../services";

export const geminiTextHandler = async (
  body: string,
  model = "gemini-2.0-flash"
) => {
  const response = await geminiApi.models.generateContent({
    model,
    contents: body,
  });

  return { response: response };
};
