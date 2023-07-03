import styled, { DefaultTheme, css } from 'styled-components';

import { ButtonProps } from './types';

const buttonModifiers = {
  loading: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    filter: brightness(0.8);

    &:hover {
      background-color: ${theme.colors['blue-700']};
    }
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, loading = false }) => css`
    cursor: pointer;
    height: 20px;

    padding: 16px;
    border: 0;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color: ${theme.colors['gray-100']};
    font-size: 14px;
    font-weight: ${theme.font.weight.bold};

    background-color: ${theme.colors['blue-700']};

    transition: background-color 0.2s;

    &:hover {
      background-color: ${theme.colors['blue-500']};
    }

    &:disabled {
      cursor: not-allowed;
      filter: brightness(0.8);

      &:hover {
        background-color: ${theme.colors['blue-700']};
      }
    }

    ${!!loading && buttonModifiers.loading(theme)}

    svg {
      width: 16px;
      height: 16px;
    }
  `}
`;

export const Loading = styled.div`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border: 2px solid ${theme.colors['gray-100']};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;

const Icon = styled.span`
  width: 16px;
  height: 16px;
`;

export const LeftIcon = styled(Icon)``;

export const RightIcon = styled(Icon)``;
