import React, { useRef } from 'react';
import { UploadCloud, Plus, X, Trash2, User } from 'lucide-react';
import { UploadedImage } from '../types';
import { 
  Container, 
  Header, 
  Title, 
  ClearButton, 
  UploadBox, 
  IconWrapper, 
  UploadTextMain, 
  UploadTextSub,
  GridContainer,
  ImageCard,
  PreviewImage,
  RemoveButton,
  AddMoreButton
} from './styles/ReferenceUploader.styles';

interface Props {
  images: UploadedImage[];
  onAdd: (files: FileList | null) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  maxImages?: number;
}

export const ReferenceUploader: React.FC<Props> = ({ 
  images, 
  onAdd, 
  onRemove, 
  onClear,
  maxImages = 4 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => fileInputRef.current?.click();

  return (
    <Container>
      <Header>
        <Title>
          <User size={20} color="#3b82f6" />
          1. Tus Fotos ({images.length}/{maxImages})
        </Title>
        {images.length > 0 && (
          <ClearButton onClick={onClear}>
            <Trash2 size={12} /> Limpiar
          </ClearButton>
        )}
      </Header>

      <input 
        type="file" 
        ref={fileInputRef}
        onChange={(e) => onAdd(e.target.files)}
        accept="image/png, image/jpeg, image/webp"
        style={{ display: 'none' }}
        multiple
      />

      {images.length === 0 ? (
        <UploadBox onClick={handleBoxClick}>
          <IconWrapper>
            <UploadCloud size={32} color="#60a5fa" />
          </IconWrapper>
          <UploadTextMain>Sube tus fotos aquí</UploadTextMain>
          <UploadTextSub>
            Recomendamos 2-3 fotos con diferentes ángulos para mayor precisión.
          </UploadTextSub>
        </UploadBox>
      ) : (
        <GridContainer>
          {images.map((img) => (
            <ImageCard key={img.id}>
              <PreviewImage src={img.url} alt="Reference" />
              <RemoveButton onClick={() => onRemove(img.id)}>
                <X size={16} />
              </RemoveButton>
            </ImageCard>
          ))}
          
          {images.length < maxImages && (
            <AddMoreButton onClick={handleBoxClick}>
              <Plus size={32} style={{ marginBottom: '0.5rem', transition: 'transform 0.2s' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Añadir más</span>
            </AddMoreButton>
          )}
        </GridContainer>
      )}
    </Container>
  );
};