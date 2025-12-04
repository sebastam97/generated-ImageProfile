
import { useState, useCallback } from 'react';
import { GeneratorStatus, UploadedImage } from '../types';
import { generatePhoto } from '../api/gemini';

const MAX_IMAGES = 4;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const usePhotoGenerator = () => {
  const [status, setStatus] = useState<GeneratorStatus>(GeneratorStatus.IDLE);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addImages = useCallback((files: FileList | null) => {
    if (!files) return;

    if (images.length + files.length > MAX_IMAGES) {
      setError(`Solo puedes subir un máximo de ${MAX_IMAGES} imágenes.`);
      return;
    }

    setError(null);
    setStatus(GeneratorStatus.IDLE);
    setResultUrl(null);

    Array.from(files).forEach(file => {
      if (file.size > MAX_FILE_SIZE) {
        setError("Una imagen excede el tamaño máximo de 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const matches = result.match(/^data:(.+);base64,(.+)$/);
        
        if (matches) {
          setImages(prev => [
            ...prev,
            {
              id: Math.random().toString(36).substr(2, 9),
              url: result,
              mimeType: matches[1],
              data: matches[2]
            }
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  }, [images]);

  const removeImage = useCallback((id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  }, []);

  const reset = useCallback(() => {
    setImages([]);
    setResultUrl(null);
    setStatus(GeneratorStatus.IDLE);
    setError(null);
  }, []);

  const generate = useCallback(async () => {
    if (images.length === 0) return;

    try {
      setStatus(GeneratorStatus.GENERATING);
      setError(null);
      const url = await generatePhoto(images);
      setResultUrl(url);
      setStatus(GeneratorStatus.SUCCESS);
    } catch (err: any) {
      setStatus(GeneratorStatus.ERROR);
      
      // Handle specific error messages
      if (err.message === "API_KEY_MISSING") {
        setError("Por favor configura tu API Key de Gemini primero.");
      } else if (err.message?.includes("429") || err.message?.includes("quota")) {
        setError("Has excedido el límite de uso. Intenta más tarde o verifica tu facturación en Google Cloud.");
      } else {
        setError(err.message || "Error al generar la imagen.");
      }
    }
  }, [images]);

  return {
    status,
    images,
    resultUrl,
    error,
    addImages,
    removeImage,
    reset,
    generate,
    canGenerate: images.length > 0 && status !== GeneratorStatus.GENERATING
  };
};
