import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  outline: none;
  font-family: inherit;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  ${props => props.$variant === 'primary' && css`
    background-color: #2563eb;
    color: white;
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);

    &:hover:not(:disabled) {
      background-color: #3b82f6;
    }
  `}

  ${props => props.$variant === 'secondary' && css`
    background-color: #334155;
    color: white;

    &:hover:not(:disabled) {
      background-color: #475569;
    }
  `}

  ${props => props.$variant === 'outline' && css`
    background-color: transparent;
    border: 1px solid #475569;
    color: #cbd5e1;

    &:hover:not(:disabled) {
      background-color: #1e293b;
    }
  `}
`;

export const SpinnerWrapper = styled.span`
  display: flex;
  margin-right: 0.5rem;
  animation: ${spin} 1s linear infinite;
`;