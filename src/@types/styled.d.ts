/* eslint-disable import/no-unused-modules */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { theme } from '@/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
