
import { GoogleGenAI, Type } from "@google/genai";

// Always use new GoogleGenAI({ apiKey: process.env.API_KEY }) directly
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCustomSalad = async (ingredients: string) => {
  const ai = getAI();
  const prompt = `Crie uma receita de salada deliciosa e saudável baseada nestes ingredientes: ${ingredients}. A resposta deve focar no emagrecimento e saúde.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Nome criativo da salada" },
            ingredients: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Lista de ingredientes necessários"
            },
            instructions: { type: Type.STRING, description: "Passo a passo simples de preparo" },
            benefits: { type: Type.STRING, description: "Benefícios nutricionais e detox desta salada" }
          },
          required: ["name", "ingredients", "instructions", "benefits"]
        }
      }
    });

    // Directly access the .text property (not a method) from GenerateContentResponse
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Error generating salad:", error);
    throw error;
  }
};