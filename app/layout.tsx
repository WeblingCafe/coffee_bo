"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyle from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <body>{children}</body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
