import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const HeaderContent = styled.div`
  max-width: 1152px; /* 6xl */
  margin: 0 auto;
  padding: 0 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoWrapper = styled.div`
  background-color: var(--primary-color);
  padding: 0.375rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(to right, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavLink = styled.a`
  color: var(--text-muted);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;