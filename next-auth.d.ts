import NextAuth from "next-auth"
import type { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    firebaseToken?: string
    user?: User
  }
  interface User extends DefaultUser {
    id: string
  }
}
