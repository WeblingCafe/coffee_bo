"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyle from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";
import { theme } from "styles/theme";
import LayoutTemplate from "ui/templates/LayoutTemplate";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <body>
            <SessionProvider>
              <LayoutTemplate>{children}</LayoutTemplate>
            </SessionProvider>
          </body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
