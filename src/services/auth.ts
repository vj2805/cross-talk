import { FirestoreAdapter } from "@auth/firebase-adapter"
import { getServerSession } from "next-auth"
import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { env } from "@/configs/env"
import { adminAuth, adminRepo } from "@/configs/firebase/admin"

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(adminRepo),
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
        session.firebaseToken = await adminAuth.createCustomToken(token.sub)
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

export async function getServerUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}
