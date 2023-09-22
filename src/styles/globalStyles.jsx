import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
    --font: 'Poppins', sans-serif;
    --font2: 'Montserrat', sans-serif;
}

    * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    scroll-behavior: smooth;
    vertical-align: baseline;
    list-style: none;
    text-decoration: none;
    line-height: 1.4;
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar {
        width: 5px; 
    }
    ::-webkit-scrollbar-thumb {
        background-color: #dadada;
    }
    ::-webkit-scrollbar-track {
        background-color: #1f1e1e; 
    }
}
  
`;

export default GlobalStyle;