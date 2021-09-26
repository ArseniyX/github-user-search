import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

  * {
      box-sizing: border-box;
      transition: all 0.50s linear;
      font-family: Space Mono;
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0 15px;
    
  }

  `;
