"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyle from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";
import { theme } from "styles/theme";
import ReactQueryProvider from "components/ReactQueryProvider";
import LayoutTemplate from "ui/templates/LayoutTemplate";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <body>
            <SessionProvider>
              <ReactQueryProvider>
                <LayoutTemplate>{children}</LayoutTemplate>
                <Toaster />
              </ReactQueryProvider>
            </SessionProvider>
          </body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
