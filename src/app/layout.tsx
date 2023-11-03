import { Header } from "@/components/Header"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { SessionProvider } from "@/providers/SessionProvider"
import { SyncSessionWithAuthProvider } from "@/providers/SyncSessionWithAuthProvider"
import type { Metadata } from "next"
import "@/styles.css"

export const metadata: Metadata = {
  description: "A Chat SaaS",
  title: "CrossTalk",
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
