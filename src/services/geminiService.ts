import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function editImage(base64ImageData: string, mimeType: string, prompt: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: base64ImageData,
            mimeType: mimeType,
          },
        },
        {
          text: prompt,
        },
      ],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
    }
  }
  
  throw new Error("No image returned from Gemini");
}

export async function urlToBase64(url: string): Promise<{ base64: string, mimeType: string }> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      const [prefix, base64] = dataUrl.split(',');
      const mimeType = prefix.split(':')[1].split(';')[0];
      resolve({ base64, mimeType });
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
