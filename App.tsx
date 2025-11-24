import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { Button } from './components/ui/Button';
import { usePhotoGenerator } from './features/generator/hooks/usePhotoGenerator';
import { ReferenceUploader } from './features/generator/components/ReferenceUploader';
import { ResultDisplay } from './features/generator/components/ResultDisplay';
import { AlertCircle, Sparkles } from 'lucide-react';
import { GeneratorStatus } from './features/generator/types';
import { GlobalStyles } from './styles/GlobalStyles';
import { 
  HeroSection, 
  MainTitle, 
  Highlight, 
  SubTitle, 
  GridLayout, 
  ControlsColumn, 
  ControlsCard,
  ErrorMessage,
  Disclaimer,
  FeaturesSection,
  FeatureCard,
  FeatureTitle,
  FeatureDesc
} from './styles/App.styles';

const App: React.FC = () => {
  const { 
    images, 
    status, 
    resultUrl, 
    error, 
    addImages, 
    removeImage, 
    reset, 
    generate, 
    canGenerate 
  } = usePhotoGenerator();

  const handleDownload = () => {
    if (!resultUrl) return;
    const link = document.createElement('a');
    link.href = resultUrl;
    link.download = `prolink-profile-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <HeroSection>
          <MainTitle>
            Tu foto de perfil, <Highlight>profesionalizada</Highlight>
          </MainTitle>
          <SubTitle>
            Sube una o varias selfies y nuestra IA generará una foto de perfil perfecta para LinkedIn.
          </SubTitle>
        </HeroSection>

        <GridLayout>
          
          <ControlsColumn>
            <ReferenceUploader 
              images={images}
              onAdd={addImages}
              onRemove={removeImage}
              onClear={reset}
            />

            <ControlsCard>
               {error && (
                <ErrorMessage>
                  <AlertCircle size={20} style={{ flexShrink: 0, color: '#f87171' }} />
                  <p style={{ margin: 0 }}>{error}</p>
                </ErrorMessage>
              )}
              
              <Button 
                onClick={generate}
                disabled={!canGenerate}
                isLoading={status === GeneratorStatus.GENERATING}
                style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
              >
                {status === GeneratorStatus.GENERATING ? 'Analizando y generando...' : (
                  <>
                    Generar Foto Profesional <Sparkles size={20} style={{ marginLeft: '0.5rem' }} />
                  </>
                )}
              </Button>
              <Disclaimer>
                Utilizamos Gemini 2.5 Flash Image para procesar múltiples referencias.
              </Disclaimer>
            </ControlsCard>
          </ControlsColumn>

          <ResultDisplay 
            status={status}
            resultUrl={resultUrl}
            onDownload={handleDownload}
            onRegenerate={generate}
          />

        </GridLayout>

        <FeaturesSection>
            {[
              { title: "Múltiples Referencias", desc: "Sube hasta 4 fotos para que la IA capte mejor tus rasgos únicos." },
              { title: "Iluminación de Estudio", desc: "Corrección de sombras y luz suave estilo Rembrandt." },
              { title: "Fondos Neutros", desc: "Oficinas desenfocadas o colores sólidos para máxima legibilidad." }
            ].map((item, idx) => (
              <FeatureCard key={idx}>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureDesc>{item.desc}</FeatureDesc>
              </FeatureCard>
            ))}
        </FeaturesSection>
      </MainLayout>
    </>
  );
};

export default App;