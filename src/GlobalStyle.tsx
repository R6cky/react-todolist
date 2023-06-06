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
    background-color:var(--primary-color) ;
  }


  :root{
    --primary-color:#1c0f0e;
    --shadow-tasks:#c5bd99;
    --words-color1:#c5bd99;
   
  }

  @-webkit-keyframes animation-default {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;
