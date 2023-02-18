import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import React from 'react';

import theme from './customTheme';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
