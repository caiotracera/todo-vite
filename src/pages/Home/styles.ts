import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.main`
  width: 100%;
  max-width: 736px;

  margin: 0 auto 266px;
`;

export const NewTask = styled.section`
  margin-top: -28px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  input {
    height: 56px;
  }

  button {
    height: 100%;
  }
`;

export const Tasks = styled.section`
  margin-top: 64px;
`;

export const TasksHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Counter = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors['gray-200']};
    font-size: 12px;
    font-weight: ${theme.font.weight.bold};
    line-height: 1;
    background: ${theme.colors['gray-400']};

    padding: 2px 8px;
    border-radius: 999px;

    margin-left: 8px;
  `}
`;

export const TasksCreated = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors['blue-500']};
    font-size: 14px;
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const TasksCompleted = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors['purple-500']};
    font-size: 14px;
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const TasksList = styled.ul`
  margin-top: 24px;

  article + article {
    margin-top: 16px;
  }
`;
