import type { Metadata } from "next"
import { Header } from "@/components"
import { Toaster } from "@/components/ui"
import { SessionProvider } from "@/providers/SessionProvider"
import { SyncProvider } from "@/providers/SyncProvider"
import { ThemeProvider } from "@/providers/ThemeProvider"

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
      <body className="h-screen flex flex-col">
        <SessionProvider>
          <SyncProvider>
            <ThemeProvider>
              <Header />
              {children}
              <Toaster />
            </ThemeProvider>
          </SyncProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
