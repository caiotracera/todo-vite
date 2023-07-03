import styled, { css } from 'styled-components';

import { Button } from '@/components/Button';

export const Wrapper = styled(Button)`
  ${({ theme }) => css`
    background-color: transparent;

    height: 24px;

    border-radius: 4px;

    &:hover {
      background-color: ${theme.colors['gray-400']};
    }
  `}
`;
