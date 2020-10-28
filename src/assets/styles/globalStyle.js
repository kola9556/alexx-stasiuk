import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        background-color: rgba(240, 232, 232, 1);
        margin: 0;
        font-family: 'Ropa Sans';
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Ropa Sans';
    }

    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
