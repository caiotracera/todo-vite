import styled, { css } from 'styled-components';

import { IconButton } from '@/components/IconButton';

import { ContentProps } from './types';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;

    padding: 16px;
    border-radius: 8px;
    border: 1px solid ${theme.colors['gray-400']};
    background: ${theme.colors['gray-500']};
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  `}
`;

const contentModifiers = {
  done: () => css`
    text-decoration: line-through;
  `,
};

export const Content = styled.p<ContentProps>`
  ${({ theme, done }) => css`
    color: ${theme.colors['gray-100']};
    font-size: 14px;
    line-height: 1.4;

    ${done && contentModifiers.done()}
  `}
`;

export const TrashIcon = styled(IconButton)`
  ${({ theme }) => css`
    svg {
      transition: 0.2s;
    }

    &:hover {
      svg {
        color: ${theme.colors['red-500']};
      }
    }
  `}
`;
