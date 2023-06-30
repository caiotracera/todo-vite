import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: ${theme.colors['gray-600']};
      color: ${theme.colors['gray-100']};
      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family.default};
      font-weight: ${theme.font.weight.regular};
      font-size: 1rem;
      line-height: 1.4;
    }
  `}
`;
