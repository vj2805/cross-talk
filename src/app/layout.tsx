import { Header } from "@/components/Header"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { SessionProvider } from "@/providers/SessionProvider"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Create Next App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <SessionProvider>
          <ThemeProvider
            enableSystem
            disableTransitionOnChange
            attribute="class"
            defaultTheme="dark"
          >
            <Header />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
