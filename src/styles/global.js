import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    padding: 0; //fica em volta do conteudo
    margin: 0; //em volta de toda a tela
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #353940; //cor de fundo da tela
    color: #FFF; // cor das fontes
    font-family: "Source Sans Pro", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  
  // para ele sempre ocupar o tamanha maximo da tela, os componentes
  html, body, #root {
    height: 100%;
  }

  // por padrão o input, e button não herdam a fonte padrão acima
  input, button {
    font-family: "Source Sans Pro", sans-serif;
  }

  // cursor diferente quando o usuario está passando por cima de um botão
  button {
    cursor: pointer;
  }
`;
