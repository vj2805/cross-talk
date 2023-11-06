import { Header } from "@components"
import {
  SessionProvider,
  SubscriptionProvider,
  SyncedUserProvider,
  ThemeProvider,
} from "@providers"
import { Toaster } from "@ui"
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
          <SyncedUserProvider>
            <SubscriptionProvider>
              <ThemeProvider
                enableSystem
                disableTransitionOnChange
                attribute="class"
                defaultTheme="dark"
              >
                <Header />
                {children}
                <Toaster />
              </ThemeProvider>
            </SubscriptionProvider>
          </SyncedUserProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
