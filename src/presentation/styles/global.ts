import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }

    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 1rem;
    }
    
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secundary};
    }
`;
