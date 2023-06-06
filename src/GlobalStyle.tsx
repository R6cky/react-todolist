import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
     list-style-type: none;
     padding: 0;
     margin: 0;
     font-family: 'Inter', sans-serif;
     box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }

  body{
    background-color: #8e86b9;
  }

`;
