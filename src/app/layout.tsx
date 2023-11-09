import { Header } from "@components"
import { Toaster } from "@components/ui"
import { SessionProvider, SyncProvider, ThemeProvider } from "@providers"
import type { Metadata } from "next"

import "@styles.css"

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
