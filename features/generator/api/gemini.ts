
import { GoogleGenAI } from "@google/genai";
import { UploadedImage } from "../types";

// Model for image generation - requires billing enabled
const MODEL_NAME = 'gemini-2.5-flash-image';

/**
 * Gets the API key from localStorage
 */
const getApiKey = (): string => {
  const apiKey = localStorage.getItem('gemini_api_key');
  if (!apiKey) {
    throw new Error("API_KEY_MISSING");
  }
  return apiKey;
};

/**
 * Generates a professional photo using the Gemini API.
 * Follows Single Responsibility Principle: Only handles API communication.
 */
export const generatePhoto = async (referenceImages: UploadedImage[]): Promise<string> => {
  if (!referenceImages.length) {
    throw new Error("No reference images provided");
  }

  const apiKey = getApiKey();
  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    Generate a photorealistic professional LinkedIn profile headshot based on the provided reference images.
    
    Guidelines:
    - Subject: The person in the reference photos. Preserve facial identity strictly.
    - Attire: Professional business suit (Dark blue, Charcoal or Black).
    - Background: Blurred professional office environment or neutral studio gradient.
    - Lighting: Soft, high-quality studio lighting (Rembrandt style).
    - Style: 85mm DSLR portrait, high resolution, sharp focus.
    
    Return ONLY the image.
  `;

  const imageParts = referenceImages.map(img => ({
    inlineData: {
      data: img.data,
      mimeType: img.mimeType,
    },
  }));

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: {
        parts: [...imageParts, { text: prompt }],
      },
      config: {
        responseModalities: ['Text', 'Image'],
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    const candidate = response.candidates?.[0];

    if (!candidate) {
      throw new Error("No candidates returned from the model.");
    }

    // Check for safety blocks
    if (candidate.finishReason === 'SAFETY') {
      throw new Error("The image generation was blocked by safety filters. Please try a different reference photo.");
    }

    // Try to find the image part
    const imagePart = candidate.content?.parts?.find(p => p.inlineData);

    if (imagePart?.inlineData?.data) {
      return `data:${imagePart.inlineData.mimeType || 'image/png'};base64,${imagePart.inlineData.data}`;
    }

    // If no image, check if the model returned a text refusal
    const textPart = candidate.content?.parts?.find(p => p.text);
    if (textPart?.text) {
      console.warn("Model refusal:", textPart.text);
      throw new Error(`The model could not generate the image: "${textPart.text.substring(0, 100)}..."`);
    }

    throw new Error("No image data found in response. The model may have failed to generate content.");

  } catch (error: any) {
    console.error("Gemini API Error details:", error);
    // Return the clean error message to the UI
    throw new Error(error.message || "Failed to generate image. Please try again.");
  }
};
