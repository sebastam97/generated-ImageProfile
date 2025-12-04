import React, { useState } from 'react';
import { Key, Info, AlertTriangle, ExternalLink, Settings } from 'lucide-react';
import { Button } from '../ui/Button';
import {
  Overlay,
  Modal,
  ModalTitle,
  ModalDescription,
  Input,
  InfoBox,
  InfoTitle,
  InfoText,
  InfoList,
  WarningBox,
  WarningText,
  ButtonGroup,
  ModelBadge
} from './styles';

interface ApiKeyModalProps {
  isOpen: boolean;
  onSave: (apiKey: string) => void;
  onClose?: () => void;
  hasExistingKey?: boolean;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ 
  isOpen, 
  onSave, 
  onClose,
  hasExistingKey = false 
}) => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    const trimmedKey = apiKey.trim();
    
    if (!trimmedKey) {
      setError('Por favor ingresa tu API Key');
      return;
    }

    if (!trimmedKey.startsWith('AIza')) {
      setError('La API Key no parece válida. Debe comenzar con "AIza"');
      return;
    }

    localStorage.setItem('gemini_api_key', trimmedKey);
    onSave(trimmedKey);
    setApiKey('');
    setError('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <Overlay onClick={hasExistingKey ? onClose : undefined}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalTitle>
          <Key size={24} />
          {hasExistingKey ? 'Cambiar API Key' : 'Configurar API Key'}
        </ModalTitle>
        
        <ModalDescription>
          Para generar fotos profesionales, necesitas una API Key de Google Gemini con acceso al modelo de generación de imágenes.
        </ModalDescription>

        <InfoBox>
          <InfoTitle>
            <Info size={16} />
            Modelo requerido: <ModelBadge>gemini-2.5-flash-image</ModelBadge>
          </InfoTitle>
          <InfoText>
            Este modelo requiere tener <strong>facturación habilitada</strong> en Google Cloud. 
            Google ofrece $300 USD de crédito gratis para nuevos usuarios.
          </InfoText>
          <InfoList>
            <li>
              Ve a <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer">
                Google AI Studio <ExternalLink size={12} style={{ display: 'inline' }} />
              </a>
            </li>
            <li>Inicia sesión con tu cuenta de Google</li>
            <li>Click en "Get API Key" → "Create API Key"</li>
            <li>
              Habilita facturación en <a href="https://console.cloud.google.com/billing" target="_blank" rel="noopener noreferrer">
                Google Cloud Console <ExternalLink size={12} style={{ display: 'inline' }} />
              </a>
            </li>
          </InfoList>
        </InfoBox>

        <WarningBox>
          <WarningText>
            <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            Tu API Key se guarda solo en tu navegador (localStorage) y nunca se envía a nuestros servidores. Las llamadas se hacen directamente a Google.
          </WarningText>
        </WarningBox>

        <Input
          type="password"
          placeholder="Pega tu API Key aquí (AIza...)"
          value={apiKey}
          onChange={(e) => {
            setApiKey(e.target.value);
            setError('');
          }}
          onKeyDown={handleKeyDown}
          autoFocus
        />

        {error && (
          <p style={{ color: '#f87171', fontSize: '0.875rem', marginBottom: '1rem' }}>
            {error}
          </p>
        )}

        <ButtonGroup>
          <Button onClick={handleSave} style={{ flex: 1 }}>
            <Key size={18} style={{ marginRight: '0.5rem' }} />
            Guardar API Key
          </Button>
          {hasExistingKey && onClose && (
            <Button 
              onClick={onClose} 
              style={{ 
                flex: 1, 
                background: 'transparent', 
                border: '1px solid rgba(100, 116, 139, 0.5)' 
              }}
            >
              Cancelar
            </Button>
          )}
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
};

export default ApiKeyModal;
