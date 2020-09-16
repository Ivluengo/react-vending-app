import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: Montserrat, Helvetica, sans-serif;
    margin: 0px;
  }
  h2, h3 {
    font-weight: 300;
    text-align: center;
  }
  button {
    background-color: transparent;
    border-radius: 3px;
    cursor: pointer;
    padding: 0.5em;
    &:focus {
      outline: none;    
    }
  }
`;
