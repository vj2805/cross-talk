import { Header } from "@/components/Header"
import { SessionProvider } from "@/providers/SessionProvider"
import { SubscriptionProvider } from "@/providers/SubscriptionProvider"
import { SyncedUserProvider } from "@/providers/SyncedUserProvider"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { Toaster } from "@/components/ui/toast/Toaster"
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
