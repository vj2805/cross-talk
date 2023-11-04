import { Header } from "@/components/Header"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { SessionProvider } from "@/components/providers/SessionProvider"
import { SyncSessionWithAuthProvider } from "@/components/providers/SyncSessionWithAuthProvider"
import type { Metadata } from "next"
import "@/styles.css"

export const metadata: Metadata = {
  description: "A Chat SaaS",
  title: "CrossTalk",
}

export default function RootLayout({
  children,
}: React.PropsWithRequiredChildren) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
    >
      <body>
        <SessionProvider>
          <SyncSessionWithAuthProvider>
            <ThemeProvider
              enableSystem
              disableTransitionOnChange
              attribute="class"
              defaultTheme="dark"
            >
              <Header />
              {children}
            </ThemeProvider>
          </SyncSessionWithAuthProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
