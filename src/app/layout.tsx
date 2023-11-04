import { Header } from "@/components/Header"
import { SessionProvider } from "@/components/providers/SessionProvider"
import { SubscriptionProvider } from "@/components/providers/SubscriptionProvider"
import { SyncSessionWithAuthProvider } from "@/components/providers/SyncSessionWithAuthProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
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
          <SyncSessionWithAuthProvider>
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
          </SyncSessionWithAuthProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
