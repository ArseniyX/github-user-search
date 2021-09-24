import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`


  * {
      box-sizing: border-box;
      transition: all 0.50s linear;
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Space Mono, monospace;
    margin: 0 28px;
  }
  span {
    color: ${({ theme }) => theme.text};
  }

  .mode-name {
      right: 36px;
      position: absolute;

      margin: 0 16px;
  }
  `;
