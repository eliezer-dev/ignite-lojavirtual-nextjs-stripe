'use client'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121214;
    color: #e1e1e6;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  main {
    display: block;
  }
`;
