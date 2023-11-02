import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { getEnv } from "@/utilities/getEnv"
import { adminAuth, adminDb } from "./firebase-admin"
import type { CallbacksOptions, NextAuthOptions } from "next-auth"

const jwt: CallbacksOptions["jwt"] = async ({ user, token }) => {
  if (user) {
    token.sub = user.id
  }
  return token
}

const session: CallbacksOptions["session"] = async ({ session, token }) => {
  if (session.user && token.sub) {
    session.user.id = token.sub
    session.firebaseToken = await adminAuth.createCustomToken(token.sub)
  }
  return session
}

const google = GoogleProvider({
  clientId: getEnv("GOOGLE_CLIENT_ID"),
  clientSecret: getEnv("GOOGLE_CLIENT_SECRET"),
})

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(adminDb),
  callbacks: { jwt, session },
  providers: [google],
  session: { strategy: "jwt" },
}
