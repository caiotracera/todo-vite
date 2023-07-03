import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100vw;
    height: 200px;

    background-color: ${theme.colors['gray-700']};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
