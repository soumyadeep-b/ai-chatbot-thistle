import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_API_KEY,
});

const tools = [
  { googleSearch: {} },
];

export async function response(prompt) {
  const result = await ai.models.generateContent({
    model: 'gemini-3.5-flash-lite',
    contents: prompt,
    config: {
      temperature: 1,
      maxOutputTokens: 65536,
      topP: 0.95,
     // tools: tools,
    },
  });

  console.log(result.text);
  return result.text;
}