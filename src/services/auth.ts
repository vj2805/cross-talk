import { default as NextAuth, getServerSession } from "next-auth"
import { default as GoogleProvider } from "next-auth/providers/google"
import { safeEnv } from "@/configs/safeEnv"
import { authService } from "./internal"
import type { AuthService } from "@/types/AuthService"
import type { NextAuthOptions } from "next-auth"

const { createAuthAdapter, createAuthToken }: AuthService = authService

const authOptions: NextAuthOptions = {
  adapter: createAuthAdapter(),
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.sub = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
        session.firebaseToken = await createAuthToken(token.sub)
      }
      return session
    },
  },
  providers: [
    GoogleProvider({
      clientId: safeEnv["GOOGLE_CLIENT_ID"],
      clientSecret: safeEnv["GOOGLE_CLIENT_SECRET"],
    }),
  ],
  session: { strategy: "jwt" },
}

export function createAuthHandler() {
  return NextAuth(authOptions)
}

export async function getServerUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}
