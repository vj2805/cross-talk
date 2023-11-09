import NextAuth from "next-auth"
import { authOptions } from "@backend/auth"

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }
