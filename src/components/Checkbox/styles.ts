import styled, { css } from 'styled-components';

export const Wrapper = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    appearance: none;

    width: 1.5rem;
    height: 1.5rem;

    border: 1px solid ${theme.colors['blue-500']};
    border-radius: 50%;

    &::before {
      content: '';

      width: 5px;
      height: 8px;

      border: 1px solid ${theme.colors['gray-100']};
      border-top: 0;
      border-left: 0;

      transform: rotate(35deg);
      position: absolute;

      top: 4px;
      opacity: 0;
      transition: 0.2s ease-in-out;
    }

    &:hover {
      border-color: ${theme.colors['blue-700']};
      background-color: rgba(30, 111, 159, 0.2);
    }

    &:checked {
      border-color: ${theme.colors['purple-700']};
      background-color: ${theme.colors['purple-700']};

      transition: 0.2s ease-in-out;

      &::before {
        opacity: 1;
      }

      &:hover {
        border-color: ${theme.colors['purple-500']};
        background-color: ${theme.colors['purple-500']};
      }
    }
  `}
`;
