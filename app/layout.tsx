import StyledComponentsRegistry from "lib/registry"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <StyledComponentsRegistry>
          <body>
                {children}
        
          </body>
          </StyledComponentsRegistry>
        </html>
      )
}