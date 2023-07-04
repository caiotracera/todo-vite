import * as React from 'react';

import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from '@/App';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import { TasksProvider } from './contexts/TasksContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TasksProvider>
        <App />
      </TasksProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
