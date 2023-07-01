import styled, { css } from 'styled-components';

export const Wrapper = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 3.5rem;

    border: 1px solid ${theme.colors['gray-700']};
    border-radius: 8px;

    background: ${theme.colors['gray-500']};
    color: ${theme.colors['gray-100']};

    padding: 1rem;

    &:focus,
    &:active,
    &:not(:placeholder-shown) {
      outline: none;
      border: 1px solid ${theme.colors['purple-700']};
    }
  `}
`;
