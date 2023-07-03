import styled, { css } from 'styled-components';

import { Button } from '@/components/Button';

export const Wrapper = styled(Button)`
  ${({ theme }) => css`
    background-color: transparent;

    width: 100%;
    max-width: 24px;
    height: 24px;
    padding: 0;

    border-radius: 4px;

    &:hover {
      background-color: ${theme.colors['gray-400']};
    }
  `}
`;
