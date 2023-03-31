import { createGlobalStyle, css } from 'styled-components';
import { mobile } from './responsive';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input {
    &:focus-visible {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;
      border-color: ${(props) => props.theme['yellow-dark']};
      outline: none;
    }
  }

  html {
    ${mobile(css`
      font-size: 87.5%;
    `)};
  } 

  main {
    ${mobile(css`
      padding-bottom: 2rem;
    `)};
  }
`;