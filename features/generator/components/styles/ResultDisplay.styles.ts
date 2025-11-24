import styled, { keyframes, css } from 'styled-components';

const loadingAnimation = keyframes`
  0% { left: -40%; width: 40%; }
  50% { left: 30%; width: 40%; }
  100% { left: 100%; width: 40%; }
`;

const pulseAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  height: 100%;
`;

export const ArrowWrapper = styled.div`
  display: none;
  position: absolute;
  left: -2.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #334155;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Card = styled.div<{ $hasResult: boolean }>`
  background-color: rgba(15, 23, 42, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  min-height: 500px;

  ${props => props.$hasResult && css`
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.2);
  `}

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
`;

export const Badge = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: rgba(16, 185, 129, 0.1); /* emerald-500/10 */
  color: #34d399; /* emerald-400 */
  font-size: 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(16, 185, 129, 0.2);
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(2, 6, 23, 0.5); /* slate-950/50 */
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  min-height: 300px;
`;

export const EmptyState = styled.div`
  text-align: center;
  color: var(--text-muted);
  padding: 1.5rem;
`;

export const EmptyIconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  background-color: var(--secondary-bg);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingState = styled.div`
  text-align: center;
  padding: 1.5rem;
  width: 100%;
  max-width: 20rem;
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 0.25rem;
  background-color: var(--border-color);
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const ProgressFill = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: var(--primary-color);
  width: 33.333%;
  animation: ${loadingAnimation} 1s ease-in-out infinite;
`;

export const LoadingText = styled.p`
  font-size: 0.875rem;
  color: #93c5fd; /* blue-300 */
  animation: ${pulseAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  margin: 0;
`;

export const ResultImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ActionButtons = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;