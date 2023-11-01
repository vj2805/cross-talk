import { Header } from "@/components/Header"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { SessionProvider } from "@/providers/SessionProvider"
import { FirebaseAuthProvider } from "@/providers/FirebaseAuthProvider"
import type { Metadata } from "next"
import "@/styles/globals.css"

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
          <FirebaseAuthProvider>
            <ThemeProvider
              enableSystem
              disableTransitionOnChange
              attribute="class"
              defaultTheme="dark"
            >
              <Header />
              {children}
            </ThemeProvider>
          </FirebaseAuthProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
