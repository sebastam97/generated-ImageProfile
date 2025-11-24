import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
`;

export const MainContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1152px; /* 6xl */
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 3rem 1rem;
  }
`;