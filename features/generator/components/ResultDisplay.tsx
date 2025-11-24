import React from 'react';
import { Download, RefreshCw, Image as ImageIcon, Sparkles, ArrowRight } from 'lucide-react';
import { GeneratorStatus } from '../types';
import { Button } from '../../../components/ui/Button';
import {
  Container,
  ArrowWrapper,
  Card,
  Header,
  Title,
  Badge,
  ImageContainer,
  EmptyState,
  EmptyIconWrapper,
  LoadingState,
  ProgressBar,
  ProgressFill,
  LoadingText,
  ResultImage,
  ActionButtons
} from './styles/ResultDisplay.styles';

interface Props {
  status: GeneratorStatus;
  resultUrl: string | null;
  onDownload: () => void;
  onRegenerate: () => void;
}

export const ResultDisplay: React.FC<Props> = ({ 
  status, 
  resultUrl, 
  onDownload, 
  onRegenerate 
}) => {
  const isGenerating = status === GeneratorStatus.GENERATING;
  const isSuccess = status === GeneratorStatus.SUCCESS;

  return (
    <Container>
      <ArrowWrapper>
        <ArrowRight size={32} />
      </ArrowWrapper>

      <Card $hasResult={!!resultUrl}>
        <Header>
          <Title>
            <ImageIcon size={20} color="#10b981" />
            2. Resultado Profesional
          </Title>
          {isSuccess && (
            <Badge>Completado</Badge>
          )}
        </Header>

        <ImageContainer>
          {isGenerating ? (
            <LoadingState>
              <ProgressBar>
                <ProgressFill />
              </ProgressBar>
              <LoadingText>Fusionando rasgos y generando estilo...</LoadingText>
            </LoadingState>
          ) : resultUrl ? (
            <ResultImage 
              src={resultUrl} 
              alt="Generated Professional" 
            />
          ) : (
            <EmptyState>
              <EmptyIconWrapper>
                <Sparkles size={24} color="#475569" />
              </EmptyIconWrapper>
              <p>El resultado aparecerá aquí</p>
            </EmptyState>
          )}
        </ImageContainer>

        <ActionButtons>
          <Button 
            variant="secondary"
            onClick={onRegenerate}
            disabled={!isSuccess}
            className="w-full"
          >
            <RefreshCw size={16} style={{ marginRight: '0.5rem' }} /> Regenerar
          </Button>
          <Button 
            variant="primary"
            onClick={onDownload}
            disabled={!resultUrl}
            className="w-full"
            style={{ 
              backgroundColor: !resultUrl ? undefined : '#059669', 
              boxShadow: !resultUrl ? undefined : '0 10px 15px -3px rgba(5, 150, 105, 0.2)' 
            }}
          >
            <Download size={16} style={{ marginRight: '0.5rem' }} /> Descargar
          </Button>
        </ActionButtons>
      </Card>
    </Container>
  );
};