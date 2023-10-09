import {createGlobalStyle} from "styled-components";
import {GakTheme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input, button {
    border: none;
    outline: none;
    border-radius: 2px;
  }

  * {
    scrollbar-width: none;

    &:focus {
      outline: 1px solid ${GakTheme.colors.title};
      border-radius: 2px;
    }

    &::selection {
      color: ${GakTheme.colors.secondary_background};
      background-color: ${GakTheme.colors.title};
    }
  }

  //
  //*:focus-within {
  //  background: #ff8;
  //  color: red;
  //}

  body::-webkit-scrollbar {
    width: 0;
  }

  body::-webkit-scrollbar-track {
    background: transparent;
  }

  body {
    font-family: sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${GakTheme.colors.body_background};
    color: ${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : GakTheme.colors.text}
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    ${GakTheme.media.less1360} {
      max-width: 1000px;
    }

    ${GakTheme.media.less1080} {
      max-width: calc(100vw - 60px);
      margin: 0 30px;
    }

    ${GakTheme.media.less700} {
      max-width: calc(100vw - 20px);
      margin: 0 10px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

