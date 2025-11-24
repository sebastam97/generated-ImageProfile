import styled from 'styled-components';

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const MainTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

export const Highlight = styled.span`
  color: var(--primary-color);
`;

export const SubTitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 42rem;
  margin: 0 auto;
`;

export const GridLayout = styled.div`
  display: grid;
  gap: 2rem;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
`;

export const ControlsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ControlsCard = styled.div`
  background-color: rgba(15, 23, 42, 0.3);
  border: 1px solid rgba(30, 41, 59, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
`;

export const ErrorMessage = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: rgba(127, 29, 29, 0.2);
  border: 1px solid rgba(153, 27, 27, 0.5);
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #fecaca; /* red-200 */
  font-size: 0.875rem;
`;

export const Disclaimer = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: #64748b; /* slate-500 */
  margin-top: 0.75rem;
`;

export const FeaturesSection = styled.div`
  margin-top: 5rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background-color: rgba(15, 23, 42, 0.3);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
`;

export const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const FeatureDesc = styled.p`
  color: var(--text-muted);
  font-size: 0.875rem;
  margin: 0;
`;