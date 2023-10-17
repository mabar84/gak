import {createGlobalStyle} from 'styled-components';
import {gakTheme} from './Theme.styled';

type GlobalStylesPropsType = {
    $textColor: string
    $background: string
    $primary: string
    $secondary: string
}

export const GlobalStyles = createGlobalStyle<GlobalStylesPropsType>`
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
      outline: none;
    }

    &::selection {
      color: ${gakTheme.colors.secondary};
      background-color: ${gakTheme.colors.text};
    }
  }

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
    background-color: ${gakTheme.colors.background};
    color: ${gakTheme.colors.text}

  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    ${gakTheme.media.less1360} {
      max-width: 1000px;
    }

    ${gakTheme.media.less1080} {
      max-width: calc(100vw - 60px);
      margin: 0 30px;
    }

    ${gakTheme.media.less700} {
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

  .demo {
    background-color: ${(props) => props.$background};

    .text {
      color: ${(props) => props.$textColor};
    }

    .primary {
      background-color: ${(props) => props.$primary};
    }

    .item {
      background-color: ${(props) => props.$secondary};

    }
  }


`;

