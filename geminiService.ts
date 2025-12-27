
import { GoogleGenAI } from "@google/genai";

export async function getTattooIdea(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert tattoo consultant at ARU TATTOO Studio in Dambadeniya. 
      A client has the following idea or story: "${prompt}". 
      Provide 2-3 specific, creative tattoo style suggestions (e.g., Neo-traditional, Geometric, Fine Line, Realistic) and a brief artistic justification for each. 
      Maintain a premium, encouraging, and artistic tone.`,
    });
    return response.text || "I couldn't generate an idea at the moment. Please visit ARU TATTOO in Dambadeniya for a personal consultation!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our creative ink-engine is currently offline. Let's discuss your art in person at ARU TATTOO!";
  }
}
