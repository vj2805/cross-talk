import { Header } from "@components"
import {
  SessionProvider,
  SyncProvider,
  ThemeProvider,
} from "@components/providers"
import { Toaster } from "@components/ui"
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
