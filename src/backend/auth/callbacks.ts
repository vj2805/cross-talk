import { adminAuth } from "../firebase-admin"
import type { NextAuthOptions } from "next-auth"

export const callbacks: NextAuthOptions["callbacks"] = {
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
}
