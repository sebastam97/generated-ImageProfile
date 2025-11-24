import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #020617; /* Slate 950 */
    --text-color: #e2e8f0; /* Slate 200 */
    --text-muted: #94a3b8; /* Slate 400 */
    --primary-color: #2563eb; /* Blue 600 */
    --primary-hover: #3b82f6; /* Blue 500 */
    --secondary-bg: #0f172a; /* Slate 900 */
    --border-color: #1e293b; /* Slate 800 */
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-color); 
  }
  ::-webkit-scrollbar-thumb {
    background: #334155; 
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #475569; 
  }
`;