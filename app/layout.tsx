"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyle from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import SideBar from "ui/organism/Sidebar";
import LayoutTemplate from "ui/templates/LayoutTemplate";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <body>
            <LayoutTemplate>{children}</LayoutTemplate>
          </body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
