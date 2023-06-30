import React from "react";
import type { Preview, Decorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from '../src/styles/global'
import { theme } from '../src/styles/theme'

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorator: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
)

