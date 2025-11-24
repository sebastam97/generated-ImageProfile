import React from 'react';
import { Loader2 } from 'lucide-react';
import { StyledButton, SpinnerWrapper } from './styles/Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  isLoading, 
  variant = 'primary', 
  className,
  disabled,
  ...props 
}) => {
  return (
    <StyledButton 
      $variant={variant}
      disabled={isLoading || disabled}
      className={className}
      {...props}
    >
      {isLoading && (
        <SpinnerWrapper>
          <Loader2 size={20} />
        </SpinnerWrapper>
      )}
      {children}
    </StyledButton>
  );
};