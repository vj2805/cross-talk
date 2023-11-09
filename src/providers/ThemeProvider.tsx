"use client"

import { ThemeProvider as DefaultThemeProvider } from "next-themes"

export const ThemeProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => (
  <DefaultThemeProvider
    enableSystem
    disableTransitionOnChange
    attribute="class"
    defaultTheme="dark"
  >
    {props.children}
  </DefaultThemeProvider>
)
