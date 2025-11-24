import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: rgba(15, 23, 42, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(4px);
  min-height: 400px;
  display: flex;
  flex-direction: column;

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

export const ClearButton = styled.button`
  font-size: 0.75rem;
  color: var(--text-muted);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s;

  &:hover {
    color: #f87171; /* red-400 */
  }
`;

export const UploadBox = styled.div`
  flex-grow: 1;
  border: 2px dashed #334155;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;

  &:hover {
    border-color: var(--primary-color);
    background-color: rgba(30, 41, 59, 0.5);
  }
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--border-color);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.2s;

  ${UploadBox}:hover & {
    transform: scale(1.1);
  }
`;

export const UploadTextMain = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const UploadTextSub = styled.p`
  font-size: 0.875rem;
  color: var(--text-muted);
  max-width: 20rem;
  margin: 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const ImageCard = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #334155;
  background-color: black;
  
  &:hover button {
    opacity: 1;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  transition: opacity 0.2s;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.375rem;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background-color 0.2s, opacity 0.2s;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ef4444; /* red-500 */
  }
`;

export const AddMoreButton = styled.button`
  aspect-ratio: 1 / 1;
  border: 2px dashed #334155;
  border-radius: 0.75rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--primary-color);
    background-color: rgba(30, 41, 59, 0.5);
    color: #60a5fa; /* blue-400 */
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;