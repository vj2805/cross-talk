import NextAuth, { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { authService } from "@/backend"
import { env } from "@/env"
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
      clientId: env["GOOGLE_CLIENT_ID"],
      clientSecret: env["GOOGLE_CLIENT_SECRET"],
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
