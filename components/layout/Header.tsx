import React from 'react';
import { Camera, Linkedin } from 'lucide-react';
import { 
  HeaderContainer, 
  HeaderContent, 
  Brand, 
  LogoWrapper, 
  BrandName, 
  NavLink 
} from './styles/Header.styles';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Brand>
          <LogoWrapper>
            <Camera size={20} color="white" />
          </LogoWrapper>
          <BrandName>ProLink</BrandName>
        </Brand>
        <NavLink 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <Linkedin size={16} />
          <span style={{ display: 'inline-block' }}>LinkedIn Ready</span>
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  );
};