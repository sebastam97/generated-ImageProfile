import React, { ReactNode } from 'react';
import { Header } from './Header';
import { LayoutWrapper, MainContent } from './styles/MainLayout.styles';

interface Props {
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </LayoutWrapper>
  );
};