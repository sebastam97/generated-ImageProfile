
export enum GeneratorStatus {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  GENERATING = 'GENERATING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface UploadedImage {
  id: string;
  url: string;
  data: string; // Base64
  mimeType: string;
}

export interface GeneratorState {
  status: GeneratorStatus;
  images: UploadedImage[];
  resultUrl: string | null;
  error: string | null;
}
